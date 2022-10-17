<script>
	import { MetaTags } from "svelte-meta-tags";
  import "../app.css";
  import "../fonts.css";
	import { openGraph, twitter } from "./+layout";
  import logo from "$lib/images/logo.png";
</script>

<MetaTags title="Right Path" description="Follow your passion to get the job you are passionate about. Let us know what job you are passionate about and we will show you the path to get there."
  {twitter} {openGraph}
/>

<header>
  <nav>
    <img class="my-8 mx-auto" src={logo} width="140" height="30" alt="RightPath Logo">
  </nav>
</header>

<main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
  <slot />
</main>

<footer>
  
</footer>