<script lang="ts">
	import { durations, locations } from '$lib/shared/contants';
  import { CourseAPIFilter, courseAPIFilter, showFilter, universities } from '$lib/shared/stores/course';
  import { selectedPassions } from '$lib/shared/stores/passion';

  function updateCourseAPIFilter(e: any) {
    const filter = $courseAPIFilter;
    let { checked, value, name } = e.target;
    let selected = filter[name];
    selected = selected.filter((item: any) => item != value);
    if (checked) selected.push(value);
    filter[name] = selected;
    courseAPIFilter.set(filter);
  }

  function resetCourseAPIFilter() {
    courseAPIFilter.set(new CourseAPIFilter());
  }
</script>

<div class="course-filter p-4 pb-0 flex flex-col">
  <h2 class="font-bold text-lg mb-8">Filter</h2>
  <h3 class="uppercase text-xs font-nuetral-400 mt-4 mb-1">Passion</h3>
  {#each $selectedPassions as passion}
  <div class="flex items-center my-0.5">
    <div class="items-center h-8 my-auto flex">
      <input id={passion.title} name="passionIds" on:click={updateCourseAPIFilter} type="checkbox" value={passion.id}
        checked={$courseAPIFilter.passionIds.includes(passion.id.toString())}
        class="w-6 h-6 rounded border border-nuetral-300 accent-primary-500 text-primary-500" required>
    </div>
    <label for={passion.title}
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{passion.title}</label>
  </div>
  {/each}

  <h3 class="uppercase text-xs font-nuetral-400 mt-4 mb-1">Location</h3>
  {#each locations as location}
  <div class="flex items-center my-0.5">
    <div class="items-center h-8 my-auto flex">
      <input id={location} name="locations" on:click={updateCourseAPIFilter} type="checkbox" value={location}
        checked={$courseAPIFilter.locations.includes(location)}
        class="w-6 h-6 rounded border border-nuetral-300 accent-primary-500 text-primary-500" required>
    </div>
    <label for={location} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{location}</label>
  </div>
  {/each}

  <h3 class="uppercase text-xs font-nuetral-400 mt-4 mb-1">Duration</h3>
  {#each durations as duration, i}
  <div class="flex items-center my-0.5">
    <div class="items-center h-8 my-auto flex">
      <input id={duration} name="durations" on:click={updateCourseAPIFilter} type="checkbox" value={i}
        checked={$courseAPIFilter.durations.includes(i.toString())}
        class="w-6 h-6 rounded border border-nuetral-300 accent-primary-500 text-primary-500" required>
    </div>
    <label for={duration} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{duration}</label>
  </div>
  {/each}

  <h3 class="uppercase text-xs font-nuetral-400 mt-4 mb-1">University</h3>
  {#each $universities as uni}
  <div class="flex items-center my-0.5">
    <div class="items-center h-8 my-auto flex">
      <input id={uni.name} name="universityIds" on:click={updateCourseAPIFilter} type="checkbox" value={uni.id}
        checked={$courseAPIFilter.universityIds.includes(uni.id)}
        class="w-6 h-6 rounded border border-nuetral-300 accent-primary-500 text-primary-500" required>
    </div>
    <label for={uni.name} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{uni.name}</label>
  </div>
  {/each}

  <div class="flex w-full justify-between h-16 sticky bg-white left-0 -bottom-4 items-center text-white text-2xl">
    <button on:click={resetCourseAPIFilter}
      class="btn btn-secondary w-1/2 mr-1 h-10 text-sm mx-auto font-semibold my-4 grid place-content-center">
      Clear
    </button>
    <button on:click={()=> showFilter.set(false)} class="btn btn-primary w-1/2 ml-1 h-10 text-sm mx-auto font-semibold
      my-4 grid place-content-center">
      Apply
    </button>
  </div>
</div>