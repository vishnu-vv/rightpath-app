<script lang="ts">
	import { API } from "$lib/shared/contants";
	import { passionCategories, selectedPassions, selectedPassionIds } from "$lib/shared/stores/passion";
  import { fly } from "svelte/transition";
	import { onMount } from "svelte";
	import SkeletonCardLoader from "./SkeletonCardLoader.svelte";
	import PassionCategory from "./PassionCategory.svelte";
	import type { Passion } from "$lib/shared/models";
	import { courseAPIFilter } from "$lib/shared/stores/course";
  export let isPassionSelectOpen: any;
  
  async function fetchPassionCategories() {
    const res = await fetch(`${API}/passion-categories`);
    const passionCategoryList = await res.json();
    passionCategories.set(passionCategoryList)
  }

  function updateCourseFilter(passionIds: string[]) {
    courseAPIFilter.set({...$courseAPIFilter, passionIds});
  }

  function removePassion(id: string) {
    const updatedPassions = $selectedPassions.filter((passion: Passion) => passion.id !== id);
    selectedPassions.set(updatedPassions);
  }

  onMount(async () => {
    fetchPassionCategories();
  });

  $: updateCourseFilter($selectedPassionIds);
</script>


<div transition:fly={{ y: 200, duration: 500 }} class="w-screen h-screen fixed top-8 left-0 flex justify-center items-start overflow-y-scroll z-10">
  <div class="bg-white text-nuetral-500 rounded-md px-8 py-10 relative w-96">
    <h1 class="font-extrabold text-2xl text-center mb-4">Select your passions</h1>
    <p class="text-center text-lg mb-4">You can select upto 3 passions</p>

    <div class="flex flex-wrap mb-4">
      {#each $selectedPassions as passion}
        <span class="border relative bg-secondary-500 text-white font-semibold rounded-md px-2 py-2 text-sm m-0.5">
          {passion.title}
          <span
            on:click={() => removePassion(passion.id)}
            class="cursor-pointer hover:text-lg absolute -top-1 -right-1 bg-primary-500 rounded-full w-4 h-4 grid place-content-center items-center text-md"
          >
            &times;
          </span>
        </span>
      {/each}
    </div>

    <div class="passion-categories grid grid-cols-1 divide-y divide-nuetral-100">
      {#each $passionCategories as category}
        <PassionCategory {category} />
      {:else}
        <SkeletonCardLoader type="lines" count={3} />
      {/each}
    </div>

    <div class="flex w-full justify-between h-16 sticky bg-white left-0 -bottom-4 items-center text-white text-2xl">
      <button on:click={() => isPassionSelectOpen.set(false)}
        class="btn btn-secondary w-1/2 mr-1 h-10 text-sm mx-auto font-semibold my-4 grid place-content-center">
        Cancel
      </button>
      <button on:click={()=>  { isPassionSelectOpen.set(false); }} class="btn btn-primary w-1/2 ml-1 h-10 text-sm mx-auto
        font-semibold my-4 grid place-content-center">
        Save
      </button>
    </div>
  </div>
</div>