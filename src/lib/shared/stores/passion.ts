import { localStorageStore } from "@babichjacob/svelte-localstorage/svelte-kit";
import { derived } from 'svelte/store';

export interface Passion {
  title: string;
}

const defaultValue: Passion[] = [];
export const selectedPassions = localStorageStore("selectedPassions", defaultValue);

export const selectedPassionNames = derived(selectedPassions, ($selectedPassions) => {
  return $selectedPassions.map(passion => passion.title);
});

