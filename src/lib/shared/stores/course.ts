import { derived } from 'svelte/store';
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

export const selectedCourse = localStorageStore("selectedCourse", null);

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
      query += `passionIds=${filter.passionIds.toString()}&`;
    }
    if (filter.durations.length) {
      query += `durations=${filter.durations.toString()}&`;
    }
    if (filter.locations.length) {
      query += `locations=${filter.locations.toString()}&`;
    }
    if (filter.universityIds.length) {
      query += `universityIds=${filter.universityIds.toString()}&`
    }

    return query === '?' ? '' : query.slice(0, -1);
  });
