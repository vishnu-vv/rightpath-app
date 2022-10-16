<script>
  import { passions, passionNames } from "$lib/shared/stores/passion";
  import { onMount } from "svelte";

  onMount(async () => {

    fetch('http://localhost:3000/passions')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        passions.set(data);
      }).catch(error => {
        console.log(error);
        return [];
      });
  });
</script>

<main>
  <h1>Passion List</h1>
  <ul>
    {#each $passionNames as passionName}
    <li>{passionName}</li>
    {/each}
  </ul>
</main>