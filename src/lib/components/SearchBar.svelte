<script lang="ts">
  import searchIcon from "$lib/images/search-icon.png"
  import filterIcon from "$lib/images/filter-icon.png"

  export let value: any;
  export let showJobFilter: any;
  export let placeholder: string;
  export let filtersActive: boolean;
</script>

<div class="flex justify-between">
  <label class="relative block w-full mr-2">
    <img class="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" src={searchIcon} alt="Search Jobs" height="20" width="20">
    <input bind:value={$value} class="bg-white border border-nuetral-200 rounded-md px-4 py-3 w-full block pl-10 appearance-none focus:outline-none" {placeholder} type="text">
  </label>
  <button on:click={() => showJobFilter.set(true)} 
    class="w-14 flex justify-center items-center rounded-md border border-nuetral-200 relative"
    class:border-primary-500={filtersActive}
    class:border-2={filtersActive}
    >
    <img src={filterIcon} alt="Filter Toggle" height="22" width="22">
  </button>
</div>