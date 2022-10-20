import { localStorageStore } from "@babichjacob/svelte-localstorage/svelte-kit";
import { derived } from "svelte/store";

export const showJobFilter = localStorageStore("showJobFilter", false);
export const searchJob = localStorageStore("searchJob", '');

export const jobs = localStorageStore("jobs", []);
export const filteredJobs = derived(
  [searchJob, jobs],
  ([$searchJob, $jobs]) => {
    if ($searchJob) return $jobs.filter(job => job.title.includes($searchJob))
    else return $jobs;
  }
);

export const selectedJob = localStorageStore("selectedJob", null);

export class JobAPIFilter {
  salaryMin?: number;
  salaryMax?: number;
  skills: number[];
  constructor() {
    this.skills = [];
  }
}

export const jobAPIFilter = localStorageStore("jobAPIFilter", JSON.stringify(new JobAPIFilter()))
export const jobAPIFilterObject = derived(
  jobAPIFilter,
  ($jobAPIFilter) => JSON.parse($jobAPIFilter));

export const query = derived(
  jobAPIFilter,
  ($jobAPIFilter) => {
    const filter = JSON.parse($jobAPIFilter);
    let query = '?';
    if (filter.salaryMin) {
      query += `salaryMin=${filter.salaryMin}&`;
    }
    if (filter.salaryMax) {
      query += `salaryMax=${filter.salaryMax}&`;
    }
    if (filter.skills.length) {
      query += `skills=${filter.skills.toString()}&`;
    }
    return query === '?' ? '' : query.slice(0, -1);
  });