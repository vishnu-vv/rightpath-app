<script lang="ts">
  import { onMount } from 'svelte';
  import courseImage from "$lib/images/course.png"
  import durationIcon from "$lib/images/duration-icon.png"
  import locationIcon from "$lib/images/location-icon.png"
  import SkeletonCardLoader from "$lib/components/SkeletonCardLoader.svelte";
	import { courses, selectedCourse, filteredCourses, query, searchCourse, showFilter } from '$lib/shared/stores/course';
	import CourseFilter from './CourseFilter.svelte';
	import { isCourseOverlayOpen } from '$lib/shared/stores/overlay';
	import SearchBar from './SearchBar.svelte';
	import { API, durations } from '$lib/shared/contants';

  async function fetchCourses(query: string) {
    const res = await fetch(`${API}/courses${query}`);
    const courseList = await res.json();
    courses.set(courseList)
  }

  async function fetchUniversities() {
    const res = await fetch(`${API}/universities`);
    const universities = await res.json();
    courses.set(universities)
  }

  onMount(async () => {
    fetchCourses($query);
    fetchUniversities();
  });

  $: fetchCourses($query)
</script>

{#if $showFilter}
  <CourseFilter />
{:else}
  <div class="courses">
    <p class="font-nuetral-300 my-2">
      <span class="font-nuetral-500 font-extrabold">{$courses.length}</span> courses found
    </p>
    <SearchBar value={searchCourse}  showJobFilter={showFilter} placeholder={"Search by course"} filtersActive={!!$query} />
    <div class="grid place-content-center">
      {#each $filteredCourses as course}
        <div class="max-w-xs bg-white rounded-lg shadow-md mt-4 p-4">
          <img class="rounded-lg max-w-11/12 w-80 h-56" src={course.imageUrl ?? courseImage} alt={course.title}  height="225" width="350" />
          <div class="pt-2">
            <p class="text-nuetral-400 text-sm my-4 text-left">
              {course.university?.name}
            </p>
            <h3 class="font-extrabold text-2xl my-4 text-left">{course.title}</h3>
            <div class="my-6 font-normal flex justify-between text-nuetral-400">
              <span class="flex">
                <img class="mr-1" src={locationIcon} alt="Location Icon" width="25" height="25">
                {course.university?.location}
              </span>
              <span class="flex">
                <img class="mr-1" src={durationIcon} alt="Duration Icon" width="25" height="25">
                {durations[course.duration || 4]}
              </span>
            </div>
            <a class="p-0" href="/journey/job">
              <button on:click={() => { selectedCourse.set(course); isCourseOverlayOpen.set(false); showFilter.set(false) }} 
                class="btn btn-secondary w-full h-10 text-sm mx-auto font-semibold grid place-content-center">
                <span class="align-middle flex">
                  Add Course
                </span>
              </button>
            </a>
          </div>
        </div>
      {:else}
        <SkeletonCardLoader count={3} />
      {/each}
    </div>
  </div>
{/if}


