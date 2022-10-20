<script lang="ts">
  import { onMount } from 'svelte';
  import courseImage from "$lib/images/course.png"
  import SkeletonCardLoader from "$lib/components/SkeletonCardLoader.svelte";
	import { query } from '$lib/shared/stores/course';
	import CourseFilter from './CourseFilter.svelte';

  let courses: any = [];
  async function fetchCourses(query: string) {
    const res = await fetch(`https://rightpath-api.herokuapp.com/courses${query}`);
    courses = await res.json();
  }

  onMount(async () => fetchCourses($query));

  $: fetchCourses($query)
</script>

<CourseFilter />

<div class="courses">
  {#each courses as course}
    <div class="max-w-sm bg-white rounded-lg shadow-md mt-4 pt-4">
      <img class="rounded-t-lg w-11/12 mx-auto" src={courseImage} alt={course.title} />
      <div class="p-5 pt-0">
        <h3 class="font-extrabold text-2xl">{course.title}</h3>
        <p class="mb-2 font-normal text-nuetral-400">
          {course.overview}
        </p>
        <button class="btn btn-primary w-full h-10 text-sm mx-auto font-semibold mt-2 grid place-content-center">
          <span class="align-middle flex">
            Add Course
          </span>
        </button>
      </div>
    </div>
  {:else}
    <SkeletonCardLoader count={3} />
  {/each}
</div>