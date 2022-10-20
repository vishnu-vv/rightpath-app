<script lang="ts">
  import { CourseAPIFilter, courseAPIFilter, courseAPIFilterObject } from '$lib/shared/stores/course';
  import { selectedPassions } from '$lib/shared/stores/passion';

  const locations = ['Kerala', 'Uttar Pradesh', 'Telangana'];
  const durations = ['Less than a year', '1 year', '2 years', '3 years', '4 years', 'More than 4 years'];
  const universities = [{
    "id": 4,
    "name": "Federal Institute of Science and Technology"
  }, {
    "id": 5,
    "name": "Jawaharlal Nehru Architecture and Fine Arts University"
  }, {
    "id": 6,
    "name": "Dayalbagh Educational Institute, Bulandshahar"
  }];

  function updateCourseAPIFilter(e: any) {
    const filter = $courseAPIFilterObject;
    let { checked, value, name } = e.target;
    let selected = filter[name];
    selected = selected.filter((item: any) => item != value);
    if (checked) selected.push(value);
    filter[name] = selected;
    courseAPIFilter.set(JSON.stringify(filter));
  }

  function resetCourseAPIFilter() {
    courseAPIFilter.set(JSON.stringify(new CourseAPIFilter()));
  }
</script>

<div class="course-filter p-4">
  <h2 class="font-bold text-lg mb-8">Filter</h2>
  <h3 class="uppercase text-xs font-nuetral-400 mt-4 mb-1">Passion</h3>
  {#each $selectedPassions as passion}
  <div class="flex items-start m2-6">
    <div class="flex items-center h-5">
      <input id={passion.title} name="passionIds" on:click={updateCourseAPIFilter} type="checkbox" value={passion.id}
        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
        required>
    </div>
    <label for={passion.title} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{passion.title}</label>
  </div>
  {/each}

  <h3 class="uppercase text-xs font-nuetral-400 mt-4 mb-1">Location</h3>
  {#each locations as location}
  <div class="flex items-start m2-6">
    <div class="flex items-center h-5">
      <input id={location} name="locations" on:click={updateCourseAPIFilter} type="checkbox" value={location}
        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
        required>
    </div>
    <label for={location} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{location}</label>
  </div>
  {/each}

  <h3 class="uppercase text-xs font-nuetral-400 mt-4 mb-1">Duration</h3>
  {#each durations as duration, i}
  <div class="flex items-start m2-6">
    <div class="flex items-center h-5">
      <input id={duration} name="durations" on:click={updateCourseAPIFilter} type="checkbox" value={i}
        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
        required>
    </div>
    <label for={duration} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{duration}</label>
  </div>
  {/each}

  <h3 class="uppercase text-xs font-nuetral-400 mt-4 mb-1">University</h3>
  {#each universities as uni}
  <div class="flex items-start m2-6">
    <div class="flex items-center h-5">
      <input id={uni.name} name="universityIds" on:click={updateCourseAPIFilter} type="checkbox" value={uni.id}
        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
        required>
    </div>
    <label for={uni.name} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{uni.name}</label>
  </div>
  {/each}

  <div class="flex my-8 justify-between">
    <button on:click={resetCourseAPIFilter} class="btn btn-secondary w-1/2 mr-1 h-10 text-sm mx-auto font-semibold mt-8 grid place-content-center">
      Clear
    </button>
    <button class="btn btn-primary w-1/2 ml-1 h-10 text-sm mx-auto font-semibold mt-8 grid place-content-center">
      Apply
    </button>
  </div>
</div>