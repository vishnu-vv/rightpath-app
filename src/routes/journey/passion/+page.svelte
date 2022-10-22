<script lang="ts">
  import Svelecte from 'svelecte';
  import { selectedPassionIds, selectedPassionNames, selectedPassions } from "$lib/shared/stores/passion";
  import { currentUser } from "$lib/shared/stores/user";
	import { courseAPIFilter } from '$lib/shared/stores/course';
  import personImage from "$lib/images/person1.png";
	import Calendar from "$lib/components/Calendar.svelte";
	import { API } from '$lib/shared/contants';
  let minQueryValue = 1;
  let resetOnBlur = false;
  let fetchResetOnBlur = false;

  function updateCourseFilter(passionIds: string[]) {
    courseAPIFilter.set({...$courseAPIFilter, passionIds});
  }
</script>

<main class="grid place-content-center mt-20">
  <img class="my-4 mx-auto" src={personImage} width="50" height="50" alt="Person">
  <p class="font-neutral-400 font-semibold mb-2 text-center">Fill the details and start your journey</p>
  <h2 class="font-extrabold text-3xl my-2 text-center">My name is</h2>
  <input bind:value={$currentUser} class="bg-transparent text-center text-3xl text-secondary-500 font-extrabold border-b-2 border-dashed border-b-secondary-300 focus:border-b-primary-500 focus:border-solid focus:outline-none" type="text" placeholder="Full Name">
  <h2 class="font-extrabold text-3xl my-2 text-center">and I'm born on</h2>
  <Calendar />
  <h2 class="font-extrabold text-3xl my-2 text-center">and my passions are</h2>
  <input value={$selectedPassionNames} class="bg-transparent text-center text-secondary-500 font-extrabold text-3xl border-b-2 border-dashed border-b-secondary-300 focus:border-b-primary-500 focus:border-solid focus:outline-none" type="text" placeholder="eg: Football, Cricket">

  <Svelecte
    {resetOnBlur}
    {fetchResetOnBlur}
    bind:value={$selectedPassions}
    valueAsObject
    minQuery={minQueryValue}
    fetchMode="init"
    multiple
    max={2}
    on:change={() => {updateCourseFilter($selectedPassionIds)}}
    placeholder="Select your passions"
    fetch={`${API}/passions`}
  ></Svelecte>

  <a href="/journey/course">
    <button class="btn btn-primary w-48 h-10 text-sm mx-auto font-semibold mt-8 grid place-content-center">
      <span class="align-middle flex">
        Start My Journey!
        <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </span>
    </button>
  </a>
</main>
