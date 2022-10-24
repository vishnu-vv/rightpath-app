<script lang="ts">
	import type { Passion, PassionCategory } from "$lib/shared/models";
  import expandIcon from "$lib/images/expand-icon.png";
	import { selectedPassions, selectedPassionIdInts } from "$lib/shared/stores/passion";
  export let category: PassionCategory;

  function togglePassion(p: Passion) {
    if($selectedPassionIdInts.includes(p.id)) {
      const updatedPassions = $selectedPassions.filter((passion: Passion) => passion.id !== p.id);
      selectedPassions.set(updatedPassions);
    } else {
      $selectedPassions = [...$selectedPassions, p];
    }
  }
</script>

<div class="w-full">
  <div class="title flex justify-between items-center min-h-[75px] my-auto">
    <span class="text-lg font-semibold">{category.title}</span>
    <img class="cursor-pointer" src={expandIcon} alt="Expand icon" height="25" width="25"
      class:rotate-180={category.expanded}
      on:click={() => { category.expanded = !category.expanded }}
    >
  </div>

  {#if category.expanded }
    <div class="passions flex flex-wrap py-2">
      {#each category.passions as passion}
        <span 
          on:click={() => togglePassion(passion)}
          class="border border-nuetral-100 rounded-md px-2 py-2 text-sm mr-2 cursor-pointer"
          class:bg-secondary-500={$selectedPassionIdInts.includes(passion.id)}
          class:text-white={$selectedPassionIdInts.includes(passion.id)}
          class:font-semibold={$selectedPassionIdInts.includes(passion.id)}
          class:disabled={$selectedPassionIdInts.length >= 3}
        >
          {passion.title}
        </span>
      {/each}
    </div>
  {/if}
</div>