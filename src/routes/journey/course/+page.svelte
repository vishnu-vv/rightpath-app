<script lang="ts">
  import personImage from "$lib/images/person1.png";
  import { age, currentUser } from "$lib/shared/stores/user";
  import { selectedPassionNames } from "$lib/shared/stores/passion";
  import courseImage from "$lib/images/course.png"
</script>

<div class="grid place-content-center mt-20 text-center px-4">
  <div class="personal-details grid place-content-center font-semibold">
    <div class="flex">
      <span>Name: </span>
      <span>{$currentUser}</span>
    </div>
    <div class="flex">
      <span>Age: </span>
      <span>{$age}</span>
    </div>
    <div class="flex">
      <span>Passions: </span>
      <span>{$selectedPassionNames}</span>
    </div>
  </div>
  <img class="my-4 mx-auto" src={personImage} width="50" height="50" alt="Person">
  <h2 class="font-extrabold">2022</h2>

  <div class="max-w-sm bg-white rounded-lg shadow-md mt-4">
    <a href="/journey/course">
      <img class="rounded-t-lg w-11/12 mx-auto" src={courseImage} alt="Select Course" />
    </a>
    <div class="p-5">
      <h3 class="font-bold">Select Course</h3>
      <p class="mb-2 font-normal text-nuetral-400">Select a course from the currated list of courses that we made based on your passion.</p>
      <a href="/journey/course">
        <button class="btn btn-primary w-48 h-10 text-sm mx-auto font-semibold mt-2 grid place-content-center">
          <span class="align-middle flex">
            Select Course
          </span>
        </button>
      </a>
    </div>
  </div>
</div>