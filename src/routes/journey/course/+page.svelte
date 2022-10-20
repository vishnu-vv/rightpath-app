<script lang="ts">
  import personImage from "$lib/images/person1.png";
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
  <div class="max-w-sm bg-white rounded-lg shadow-md mt-4 pt-4">
    <img class="rounded-t-lg w-11/12 mx-auto" src={courseImage} alt="Select Course" />
    {#if $selectedCourse}
      <div class="p-5 pt-2">
        <h3 class="font-extrabold text-2xl">{$selectedCourse.title}</h3>
        <button on:click={() => isCourseOverlayOpen.set(true)} class="btn btn-primary w-full md:w-48 h-10 text-sm mx-auto font-semibold mt-8 grid place-content-center">
          <span class="align-middle flex">
            Change Course
          </span>
        </button>
      </div>
    {:else}
      <div class="p-5 pt-2">
        <h3 class="font-extrabold text-2xl">Select Course</h3>
        <p class="mb-2 font-normal text-nuetral-400">Select a course from the currated list of courses that we made based on your passion.</p>
        <button on:click={() => isCourseOverlayOpen.set(true)} class="btn btn-primary w-full md:w-48 h-10 text-sm mx-auto font-semibold mt-8 grid place-content-center">
          <span class="align-middle flex">
            Select Course
          </span>
        </button>
      </div>
    {/if}
  </div>
</div>