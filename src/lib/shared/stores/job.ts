import { localStorageStore } from "@babichjacob/svelte-localstorage/svelte-kit";

export const selectedJob = localStorageStore("selectedJob", null);