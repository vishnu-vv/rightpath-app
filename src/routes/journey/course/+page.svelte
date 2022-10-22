<script lang="ts">
  import personImage from "$lib/images/person1.png";
  import durationIcon from "$lib/images/duration-icon.png"
  import locationIcon from "$lib/images/location-icon.png"
  import { selectedCourse } from "$lib/shared/stores/course";
  import courseImage from "$lib/images/course.png"
	import Overlay from "$lib/components/Overlay.svelte";
	import { isCourseOverlayOpen } from "$lib/shared/stores/overlay";
	import Courses from "$lib/components/Courses.svelte";
	import Profile from "$lib/components/Profile.svelte";
</script>

{#if $isCourseOverlayOpen}
  <Overlay isOverlayOpen={isCourseOverlayOpen}>
    <Courses />
  </Overlay>
{/if}

<div class="grid place-content-center mt-20 text-center px-4">
  <Profile />
  <img class="my-4 mx-auto" src={personImage} width="50" height="50" alt="Person">
  <h2 class="font-extrabold">2022</h2>
  <div class="max-w-xs bg-white rounded-lg shadow-md mt-4 pt-4">
    <img class="rounded-t-lg w-11/12 mx-auto h-56" 
      src={$selectedCourse?.imageUrl ? $selectedCourse.imageUrl : courseImage}
      height="225" width="350" alt="Select Course" />
    {#if $selectedCourse}
      <div class="p-5 pt-2">
        <p class="text-nuetral-400 text-sm my-4 text-left">
          {$selectedCourse.university.name}
        </p>
        <h3 class="font-extrabold text-2xl my-4 text-left">{$selectedCourse.title}</h3>
        <div class="my-6 font-normal flex justify-between text-nuetral-400">
          <span class="flex">
            <img class="mr-1" src={locationIcon} alt="Location Icon" width="25" height="25">
            {$selectedCourse.university.location}
          </span>
          <span class="flex">
            <img class="mr-1" src={durationIcon} alt="Duration Icon" width="25" height="25">
            {$selectedCourse.duration ?? "4 Years"}
          </span>
        </div>

        <button on:click={() => isCourseOverlayOpen.set(true)} class="btn btn-primary w-full h-10 text-sm mx-auto font-semibold mt-8 grid place-content-center">
          <span class="align-middle flex">
            Change Course
          </span>
        </button>
      </div>
    {:else}
      <div class="p-5 pt-2">
        <h3 class="font-extrabold text-2xl">Select Course</h3>
        <p class="mb-2 font-normal text-nuetral-400">Select a course from the currated list of courses that we made based on your passion.</p>
        <button on:click={() => isCourseOverlayOpen.set(true)} class="btn btn-primary w-full h-10 text-sm mx-auto font-semibold mt-8 grid place-content-center">
          <span class="align-middle flex">
            Select Course
          </span>
        </button>
      </div>
    {/if}
  </div>

  <div class="flex justify-center my-4">
    <a href="/journey/course">
      <div class="w-3 h-3 rounded-full bg-white border-2 border-secondary-500 mx-1"></div>
    </a>
    <a href="/journey/job">
      <div class="w-3 h-3 rounded-full bg-white border border-nuetral-200 mx-1"></div>
    </a>
  </div>
</div>