<script lang="ts">
  import dayjs from 'dayjs';
  import { Datepicker } from 'svelte-calendar';
	import { currentDateOfBirth, dateOfBirth } from '$lib/shared/stores/user';

  let store: any;

  let yesterday = dayjs().subtract(1, 'day').toDate();
  
  let theme = {
    "calendar": {
      "width": "700px",
      "maxWidth": "100vw",
      "legend": {
        "height": "45px"
      },
      "shadow": "0px 10px 26px rgba(0, 0, 0, 0.25)",
      "colors": {
        "text": {
          "primary": "#DB423F",
          "highlight": "#fff"
        },
        "background": {
          "primary": "#fff",
          "highlight": "#FF6857",
          "hover": "#BEC4FF"
        },
        "border": "#BEC4FF"
      },
      "font": {
        "regular": "1.5em",
        "large": "37em"
      },
      "grid": {
        "disabledOpacity": ".35",
        "outsiderOpacity": ".6"
      }
    }
  };

  $: $store?.hasChosen && dateOfBirth.set($store?.selected)
</script>

<Datepicker {theme} end={yesterday} bind:store format="DD/MM/YYYY" selected={$currentDateOfBirth} let:key let:send let:receive>
  <input in:receive|local={{ key }} out:send|local={{ key }}
    class="bg-transparent text-center font-extrabold text-secondary-500 text-3xl border-b-2 border-dashed border-b-secondary-300 focus:border-b-primary-500 focus:border-solid focus:outline-none"
    type="text" placeholder="{$store?.hasChosen ? dayjs($store.selected).format('DD/MM/YYYY') : 'Date of Birth'}"
    class:placeholder-secondary-500={$currentDateOfBirth}
    >
</Datepicker>