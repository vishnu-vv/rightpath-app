<script lang="ts">
  import { onMount } from 'svelte';
  import jobImage from "$lib/images/job.png"
  import searchIcon from "$lib/images/search-icon.png"
  import SkeletonCardLoader from "$lib/components/SkeletonCardLoader.svelte";
	import { jobs, selectedJob, filteredJobs, query, searchJob, showJobFilter } from '$lib/shared/stores/job';
	import JobFilter from './JobFilter.svelte';
	import { isJobOverlayOpen } from '$lib/shared/stores/overlay';
	import SearchBar from './SearchBar.svelte';

  async function fetchJobs(query: string) {
    const res = await fetch(`https://rightpath-api.herokuapp.com/jobs${query}`);
    const jobList = await res.json();
    jobs.set(jobList)
  }

  onMount(async () => fetchJobs($query));

  $: fetchJobs($query)
</script>

{#if $showJobFilter}
  <JobFilter />
{:else}
  <div class="jobs">
    <p class="font-nuetral-300 my-2">
      <span class="font-nuetral-500 font-extrabold">{$jobs.length}</span> jobs found
    </p>
    <SearchBar value={searchJob} showJobFilter={showJobFilter} placeholder={"Search by job"} />
    {#each $filteredJobs as job}
      <div class="max-w-sm bg-white rounded-lg shadow-md mt-4 pt-4">
        <img class="rounded-t-lg w-11/12 mx-auto" src={jobImage} alt={job.title} />
        <div class="p-5 pt-2">
          <h3 class="font-extrabold text-2xl">{job.title}</h3>
          <p class="mb-2 font-normal text-nuetral-400">
            {job.description}
          </p>
          <a href="/journey/job">
            <button on:click={() => { selectedJob.set(job); isJobOverlayOpen.set(false); showJobFilter.set(false)}} class="btn btn-primary w-full h-10 text-sm mx-auto font-semibold mt-2 grid place-content-center">
              <span class="align-middle flex">
                Add Job
              </span>
            </button>
          </a>
        </div>
      </div>
    {:else}
      <SkeletonCardLoader count={3} />
    {/each}
  </div>
{/if}


