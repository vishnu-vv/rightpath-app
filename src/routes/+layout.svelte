<script>
	import { MetaTags } from "svelte-meta-tags";
  import "../app.css";
  import "../fonts.css";
	import { openGraph, twitter } from "./+layout";
  import Header from "$lib/components/Header.svelte";
</script>

<MetaTags title="Right Path" description="Follow your passion to get the job you are passionate about. Let us know what job you are passionate about and we will show you the path to get there."
  {twitter} {openGraph}
/>

<Header />

<main class="landing-page h-screen w-full flex flex-col">
  <slot />
</main>

<footer>
  
</footer>