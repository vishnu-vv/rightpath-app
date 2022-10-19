import { derived } from 'svelte/store';
import { localStorageStore } from "@babichjacob/svelte-localstorage/svelte-kit";
let name: string = '';
export const currentUser = localStorageStore("user", name);

let dob: any = new Date();
export const dateOfBirth = localStorageStore("dateOfBirth", dob);

export const currentDateOfBirth = derived(dateOfBirth, ($dateOfBirth) => {
  return new Date($dateOfBirth);
});
