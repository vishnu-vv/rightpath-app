<script lang="ts">
  import { JobAPIFilter, jobAPIFilter, showJobFilter, skills } from '$lib/shared/stores/job';

  function updateJobAPIFilter(e: any) {
    const filter = $jobAPIFilter;
    let { checked, value } = e.target;
    filter.skills = filter.skills.filter((item: any) => item != value);
    if (checked) filter.skills.push(value);
    jobAPIFilter.set(filter);
  }

  function resetJobAPIFilter() {
    jobAPIFilter.set(new JobAPIFilter());
  }
</script>

<div class="course-filter p-4 pb-0">
  <h2 class="font-bold text-lg mb-8">Filter</h2>
  <label for="default-range" class="uppercase text-xs font-nuetral-400 mt-4 mb-1 flex justify-between tracking-widest">
    <span>
      Minimum Salary
    </span>
    <span>
      &#8377; {$jobAPIFilter.salaryMin} LPA
    </span>
  </label>
  <input id="default-range" type="range" min="10000" max="1000000" step="10000" bind:value={$jobAPIFilter.salaryMin}
    class="w-full h-2 bg-nuetral-100 accent-primary-500 rounded-lg appearance-none cursor-pointer">

  <label for="default-range" class="uppercase text-xs font-nuetral-400 mt-4 mb-1 flex justify-between tracking-widest">
    <span>
      Maximum Salary
    </span>
    <span>
      &#8377; {$jobAPIFilter.salaryMax} LPA
    </span>
  </label>
  <input id="default-range" type="range" min="1000000" max="10000000" step="10000" bind:value={$jobAPIFilter.salaryMax}
    class="w-full h-2 bg-nuetral-100 accent-primary-500 rounded-lg appearance-none cursor-pointer">

  <h3 class="uppercase text-xs font-nuetral-400 mt-4 mb-1 tracking-widest">Skill</h3>
  {#each $skills as skill}
  <div class="flex items-center">
    <div class="flex items-center h-8 my-auto">
      <input id={skill.title} name="skills" on:click={updateJobAPIFilter} 
        type="checkbox" value={skill.id} checked={$jobAPIFilter.skills.includes(skill.id.toString())}
        class="w-6 h-6 rounded border border-nuetral-300 accent-primary-500 text-primary-500"
        required>
    </div>
    <label for={skill.title} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{skill.title}</label>
  </div>
  {/each}

  <div class="flex w-full justify-between h-16 sticky bg-white left-0 -bottom-4 items-center text-white text-2xl">
    <button on:click={resetJobAPIFilter}
      class="btn btn-secondary w-1/2 mr-1 h-10 text-sm mx-auto font-semibold my-4 grid place-content-center">
      Clear
    </button>
    <button on:click={()=> showJobFilter.set(false)} class="btn btn-primary w-1/2 ml-1 h-10 text-sm mx-auto
      font-semibold my-4 grid place-content-center">
      Apply
    </button>
  </div>
</div>