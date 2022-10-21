import { derived } from 'svelte/store';
import { localStorageStore } from "@babichjacob/svelte-localstorage/svelte-kit";
import type { Course } from '$lib/models';

export const showFilter = localStorageStore("showFilter", false);
export const searchCourse = localStorageStore("searchCourse", '');

export const courses = localStorageStore<Course[]>("courses", []);
export const filteredCourses: any = derived(
  [searchCourse, courses],
  ([$searchCourse, $courses]) => {
    if ($searchCourse) return $courses.filter((course: any) => course.title.includes($searchCourse))
    else return $courses;
  }
);

export const selectedCourse = localStorageStore<Course | null>("selectedCourse", null);

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

export const courseAPIFilter = localStorageStore("courseAPIFilter", new CourseAPIFilter())

export const query = derived(
  courseAPIFilter,
  ($courseAPIFilter) => {
    let filter = $courseAPIFilter;
    console.log(filter);
    
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
