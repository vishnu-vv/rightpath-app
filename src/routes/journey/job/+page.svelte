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

<div class="grid place-content-center mt-20 text-center px-4">
  <Profile />
  <img class="my-4 mx-auto" src={personImage} width="50" height="50" alt="Person">
  <h2 class="font-extrabold">2026</h2>
  <div class="max-w-sm bg-white rounded-lg shadow-md mt-4 pt-4">
    <img class="rounded-t-lg w-11/12 mx-auto" src={jobImage} alt="Select Course" />
    {#if $selectedJob}
      <div class="p-5 pt-2">
        <h3 class="font-extrabold text-2xl">{$selectedJob.title}</h3>
        <button on:click={() => isJobOverlayOpen.set(true)} class="btn btn-primary w-full md:w-48 h-10 text-sm mx-auto font-semibold mt-8 grid place-content-center">
          <span class="align-middle flex">
            Change Job
          </span>
        </button>
      </div>
    {:else}
      <div class="p-5 pt-2">
        <h3 class="font-extrabold text-2xl">Search for jobs</h3>
        <p class="mb-2 font-normal text-nuetral-400">Find a job which is aligned with your selected course</p>
        <button on:click={() => isJobOverlayOpen.set(true)} class="btn btn-primary w-full md:w-48 h-10 text-sm mx-auto font-semibold mt-8 grid place-content-center">
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