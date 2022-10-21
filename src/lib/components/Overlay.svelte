<script lang="ts">
  export let isOverlayOpen: any;
  import { fly } from "svelte/transition";
</script>

<div transition:fly={{ y: 200, duration: 500 }} class="w-screen h-screen fixed top-0 left-0 flex flex-col justify-center bg-nuetral-500 items-center z-10">
  <div class="relative w-screen h-auto">
    <button class="float-right rounded-full w-8 h-8 bg-transparent border border-white text-white mr-2 mt-2 text-2xl transition-transform" on:click={() => isOverlayOpen.set(false)}>&times;</button>
  </div>
  <div class="h-screen w-screen rounded-t-3xl p-4 mt-2 bg-white opacity-100 drop-shadow-2xl overflow-y-scroll">
    <slot />
  </div>
</div>