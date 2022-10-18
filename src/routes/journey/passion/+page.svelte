<script lang="ts">
  import { passions, passionNames, currentPassion } from "$lib/shared/stores/passion";
  import { onMount } from "svelte";
  import personImage from "$lib/images/person1.png";

  onMount(async () => {

    fetch('https://rightpath-api.herokuapp.com/passions')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        passions.set(data);
      }).catch(error => {
        console.log(error);
        return [];
      });
  });

  async function fetchPassion() {
		const res = await fetch('https://rightpath-api.herokuapp.com/passions/1');
		const data = await res.json();

		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	}

  let promise: any;

	function handleClick() {
		promise = fetchPassion();
	}
</script>

<main class="grid place-content-center mt-20">
  <img class="my-4 mx-auto" src={personImage} width="50" height="50" alt="Person">
  <p class="font-neutral-400 font-semibold mb-2 text-center">Fill the details and start your journey</p>
  <h2 class="font-extrabold text-3xl my-2 text-center">My name is</h2>
  <input class="bg-transparent text-center text-3xl border-b-2 border-dashed border-b-secondary-300 focus:border-b-primary-500 focus:border-solid focus:outline-none" type="text" placeholder="Full Name">
  <h2 class="font-extrabold text-3xl my-2 text-center">and I'm born on</h2>
  <input class="bg-transparent text-center text-3xl border-b-2 border-dashed border-b-secondary-300 focus:border-b-primary-500 focus:border-solid focus:outline-none" type="text" placeholder="Date of Birth">
  <h2 class="font-extrabold text-3xl my-2 text-center">and my passions are</h2>
  <input class="bg-transparent text-center text-3xl border-b-2 border-dashed border-b-secondary-300 focus:border-b-primary-500 focus:border-solid focus:outline-none" type="text" placeholder="eg: Football, Cricket">

  <button class="btn btn-primary w-48 h-10 text-sm mx-auto font-semibold mt-8 grid place-content-center">
    <span class="align-middle flex">
      Start My Journey!
      <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </span>
  </button>
</main>

<style>
  :global(body) {
    background-image: url('/images/background.png');
  }

  @media screen and (min-width: 1024px) {
    :global(body) {
      background-image: url('/images/background-lg.png');
    }
  }
</style>

<!-- 
<h1>Passion List</h1>
  <ul>
    {#each $passionNames as passionName}
    <li>
      <button on:click={handleClick}>{passionName}</button>
    </li>
    {/each}
  </ul>  
  
  {#await promise}
	  <p>...waiting</p>
  {:then p}
    <p>My current passion is {p}</p>
  {:catch error}
    <p style="color: red">{error}</p>
  {/await} -->