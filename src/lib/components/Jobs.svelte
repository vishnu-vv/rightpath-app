<script lang="ts">
  import { onMount } from 'svelte';
  import jobImage from "$lib/images/job.png"
  import SkeletonCardLoader from "$lib/components/SkeletonCardLoader.svelte";
	import { jobs, selectedJob, filteredJobs, query, searchJob, showJobFilter } from '$lib/shared/stores/job';
	import JobFilter from './JobFilter.svelte';
	import { isJobOverlayOpen } from '$lib/shared/stores/overlay';
	import SearchBar from './SearchBar.svelte';
	import { API } from '$lib/shared/contants';

  async function fetchJobs(query: string) {
    const res = await fetch(`${API}/jobs${query}`);
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
    <SearchBar value={searchJob} showJobFilter={showJobFilter} placeholder={"Search by job"} filtersActive={!!$query} />
    <div class="grid place-content-center">
      {#each $filteredJobs as job}
        <div class="max-w-sm bg-white rounded-lg shadow-md mt-4 p-4">
          <img class="rounded-lg max-w-11/12 w-80 h-56" src={job.imageUrl ?? jobImage} alt={job.title} height="225" width="350" />
          <div class="pt-2">
            <h3 class="font-extrabold text-2xl my-2">{job.title}</h3>
            <p class="mb-2 font-normal text-nuetral-400">
              &#8377;{job.salaryMin} - &#8377;{job.salaryMax} 
              <span class="font-semibold">
                LPA
              </span>
            </p>
            <div class="mb-2 font-normal flex text-nuetral-400">
              {#each job.skills as skill}
                {skill.title}&#8218;&#8201;
              {/each}
            </div>
            <a class="p-0" href="/journey/job">
              <button on:click={() => { selectedJob.set(job); isJobOverlayOpen.set(false); showJobFilter.set(false)}}
                class="btn btn-secondary w-full h-10 text-sm mx-auto font-semibold mt-2 grid place-content-center">
                <span class="align-middle flex">
                  Add Job
                </span>
              </button>
            </a>
          </div>
        </div>
      {:else}
        <SkeletonCardLoader type="card" count={3} />
      {/each}
    </div>
  </div>
{/if}


