<script>
	import Profile from "$lib/components/Profile.svelte";
  import personImage from "$lib/images/person1.png";
  import jobImage from "$lib/images/job.png";
  import { selectedJob } from "$lib/shared/stores/job";
  import { isJobOverlayOpen } from "$lib/shared/stores/overlay";
	import Overlay from "$lib/components/Overlay.svelte";
	import Jobs from "$lib/components/Jobs.svelte";
</script>

{#if $isJobOverlayOpen}
  <Overlay isOverlayOpen={isJobOverlayOpen}>
    <Jobs />
  </Overlay>
{/if}

<div class="grid place-content-center mt-20 text-center px-4 items-center">
  <Profile />
  <img class="my-4 mx-auto" src={personImage} width="50" height="50" alt="Person">
  <h2 class="font-extrabold">2026</h2>
  <div class="bg-white rounded-lg shadow-md mt-4 p-4 grid place-content-center w-full sm:w-80">
    <img class="rounded-lg w-auto h-56"
      src={$selectedJob?.imageUrl ? $selectedJob.imageUrl : jobImage}
      height="225" width="350" alt="Select Job" />
    {#if $selectedJob}
      <div class="pt-2 text-left">
        <h3 class="font-extrabold text-2xl my-2">{$selectedJob.title}</h3>
        <p class="my-2 font-normal text-nuetral-400">
          &#8377;{$selectedJob.salaryMin} - &#8377;{$selectedJob.salaryMax} 
          <span class="font-semibold">
            LPA
          </span>
        </p>
        <div class="my-2 font-normal flex text-nuetral-400">
          {#each $selectedJob.skills as skill}
            {skill.title}&#8218;&#8201;
          {/each}
        </div>
        <button on:click={() => isJobOverlayOpen.set(true)} class="btn btn-primary w-full h-10 text-sm mx-auto font-semibold grid place-content-center">
          <span class="align-middle flex">
            Change Job
          </span>
        </button>
      </div>
    {:else}
      <div class="p-5 pt-2">
        <h3 class="font-extrabold text-2xl">Search for jobs</h3>
        <p class="mb-2 font-normal text-nuetral-400">Find a job which is aligned with your selected course</p>
        <button on:click={() => isJobOverlayOpen.set(true)} class="btn btn-primary w-full h-10 text-sm mx-auto font-semibold grid place-content-center">
          <span class="align-middle flex">
            Find job
          </span>
        </button>
      </div>
    {/if}
  </div>

  <div class="flex justify-center my-4">
    <a href="/journey/course">
      <div class="w-3 h-3 rounded-full bg-white border border-nuetral-200 mx-1"></div>
    </a>
    <a href="/journey/job">
      <div class="w-3 h-3 rounded-full bg-white border-2 border-secondary-500 mx-1"></div>
    </a>
  </div>
</div>