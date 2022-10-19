import dayjs from 'dayjs';
import { derived } from 'svelte/store';
import { localStorageStore } from "@babichjacob/svelte-localstorage/svelte-kit";

function getAge(dateString: string) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

let name: string = '';
export const currentUser = localStorageStore("user", name);

let dob: any = new Date();
export const dateOfBirth = localStorageStore("dateOfBirth", dob);

export const currentDateOfBirth = derived(dateOfBirth, ($dateOfBirth) => {
  return new Date($dateOfBirth);
});

export const age = derived(dateOfBirth, ($dateOfBirth) => {
  return getAge(dayjs(new Date($dateOfBirth)).format('YYYY/MM/DD'))
});
