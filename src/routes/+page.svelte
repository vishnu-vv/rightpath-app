<script lang="ts">
  import passionArrowA from "$lib/images/passion-arrow-1.png";
  import passionArrowALg from "$lib/images/passion-arrow-1-lg.png";
  import passionArrowB from "$lib/images/passion-arrow-2.png";
  import passionArrowBLg from "$lib/images/passion-arrow-2-lg.png";
</script>

<div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
  <div class="flex flex-col h-max mt-28 sm:mt-44 md:mt-36 lg:mt-24 xl:mt-36 text-center md:px-10 lg:px-52 xl:px-80">
    <h1 class="text-3xl md:text-5xl font-extrabold">
      Follow your
      <span class="text-secondary-500 passion-banner relative">
        <img class="absolute right-20 bottom-10 h-8 md:bottom-16 md:right-28 md:h-10 lg:h-12"
          srcset="{passionArrowA} 375w, {passionArrowALg} 1024w"
          sizes="(max-width: 1023px) 375px, 1024px" src="{passionArrowA}" alt="Passion Highlight Arrow 1" />
        passion
        <img class="absolute right-0 bottom-10 h-10 md:bottom-16 md:h-12 lg:h-14"
          srcset="{passionArrowB} 375w, {passionArrowBLg} 1024w"
          sizes="(max-width: 1023px) 375px, 1024px" src="{passionArrowB}" alt="Passion Highlight Arrow 2" />
      </span>
      to get the job you are passionate about
    </h1>
    <p class="text-nuetral-400 my-8 leading-5">Not sure how to reach your goal? Dont worry,
      we will
      help you figure out!
      Let us know what job you are passionate about and we will show you the path to get there.
    </p>
    <a href="/journey/passion">
      <button class="btn btn-primary w-48 h-10 text-sm mx-auto font-semibold">Start Your Journey!</button>
    </a>
  </div>
  <div class="flex flex-col justify-around h-48 lg:w-1/2 mx-auto text-center bg-white rounded-md mt-56 p-4">
    <p class="font-bold text-xl leading-6 mt-2">Dont know what your passion is?</p>
    <p class="font-normal text-sm text-nuetral-400 max-w-sm mx-auto">Let us know what job you are passionate about and we will show you the path to get there.</p>
    <a class="text-primary-500 font-bold text-2xl opacity-25 pointer-events-none" href="/">Let's Go!</a>
  </div>
</div>