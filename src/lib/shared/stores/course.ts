import { writable, derived } from 'svelte/store';
import { localStorageStore } from "@babichjacob/svelte-localstorage/svelte-kit";

export const showFilter = localStorageStore("showFilter", false);
export const searchCourse = localStorageStore("searchCourse", '');
export const courses = localStorageStore("courses", []);
export const filteredCourses = derived(
  [searchCourse, courses],
  ([$searchCourse, $courses]) => {
    if ($searchCourse) return $courses.filter(course => course.title.includes($searchCourse))
    else return $courses;
  }
);

export class CourseAPIFilter {
  passionIds: string[];
  durations: string[];
  locations: string[];
  universityIds: string[];
  constructor() {
    this.passionIds = [];
    this.durations = [];
    this.locations = [];
    this.universityIds = [];
  }
}

export const courseAPIFilter = localStorageStore("courseAPIFilter", JSON.stringify(new CourseAPIFilter()))
export const courseAPIFilterObject = derived(
  courseAPIFilter,
  ($courseAPIFilter) => JSON.parse($courseAPIFilter));

export const query = derived(
  courseAPIFilter,
  ($courseAPIFilter) => {
    const filter = JSON.parse($courseAPIFilter);
    let query = '?';
    if (filter.passionIds.length) {
      filter.passionIds.forEach((id: number) => {
        query += `passionId=${id}&`
      });
    }
    if (filter.durations.length) {
      filter.durations.forEach((duration: string) => {
        query += `duration=${duration}&`
      });
    }
    if (filter.locations.length) {
      filter.locations.forEach((location: string) => {
        query += `location=${location}&`
      });
    }
    if (filter.universityIds.length) {
      filter.universityIds.forEach((universityId: string) => {
        query += `universityId=${universityId}&`
      });
    }

    return query === '?' ? '' : query.slice(0, -1);
  });
