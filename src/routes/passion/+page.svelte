<script>
  import { passions, passionNames, currentPassion } from "$lib/shared/stores/passion";
  import { onMount } from "svelte";

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

  let promise;

	function handleClick() {
		promise = fetchPassion();
	}
</script>

<main>
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
  {/await}
</main>