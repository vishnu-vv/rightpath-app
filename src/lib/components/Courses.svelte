<script lang="ts">
	import { onMount } from 'svelte';
  import courseImage from "$lib/images/course.png"

	let courses: any = [];

	onMount(async () => {
		const res = await fetch(`https://rightpath-api.herokuapp.com/courses`);
		courses = await res.json();
    console.log(courses);
	});
</script>

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
		<p>loading...</p>
	{/each}
</div>

