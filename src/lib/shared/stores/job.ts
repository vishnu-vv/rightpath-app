import type { Job, Skill } from "$lib/models";
import { localStorageStore } from "@babichjacob/svelte-localstorage/svelte-kit";
import { derived } from "svelte/store";

export const showJobFilter = localStorageStore("showJobFilter", false);
export const searchJob = localStorageStore("searchJob", '');

export const jobs = localStorageStore<Job[]>("jobs", []);
export const skills = localStorageStore<Skill[]>("skills", []);
export const filteredJobs: any = derived(
  [searchJob, jobs],
  ([$searchJob, $jobs]) => {
    if ($searchJob) return $jobs.filter((job: Job) => job.title.includes($searchJob))
    else return $jobs;
  }
);

export const selectedJob = localStorageStore<Job | null>("selectedJob", null);

export class JobAPIFilter {
  salaryMin: number;
  salaryMax: number;
  skills: number[];
  constructor() {
    this.salaryMin = 10000;
    this.salaryMax = 10000000;
    this.skills = [];
  }
}

export const jobAPIFilter = localStorageStore("jobAPIFilter", new JobAPIFilter());

export const query = derived(
  jobAPIFilter,
  ($jobAPIFilter) => {
    const filter = JSON.parse(JSON.stringify($jobAPIFilter));
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