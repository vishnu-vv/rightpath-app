<script>
  import { age, currentUser } from "$lib/shared/stores/user";
  import { selectedPassionNames } from "$lib/shared/stores/passion";
  import NameIcon from "$lib/images/name-icon.png";
  import AgeIcon from "$lib/images/age-icon.png";
  import PassionIcon from "$lib/images/passion-icon.png";
</script>

<div class="personal-details grid place-content-center font-semibold text-center md:flex md:absolute md:top-4 md:right-6">
  <div class="flex justify-center my-1 md:m-2">
    <span>
      <img src={NameIcon} alt="Name Icon" height="20" width="20">
    </span>
    <span class="ml-2">{$currentUser}</span>
  </div>
  <div class="flex justify-center my-1 md:m-2">
    <span>
      <img src={AgeIcon} alt="Name Icon" height="20" width="20">
    </span>
    <span class="ml-2">{$age} years old</span>
  </div>
  <div class="flex justify-center my-1 md:m-2">
    <span>
      <img src={PassionIcon} alt="Name Icon" height="20" width="20">
    </span>
    <span class="ml-2">{$selectedPassionNames}</span>
  </div>
</div>