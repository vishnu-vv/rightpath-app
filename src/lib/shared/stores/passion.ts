import { localStorageStore } from "@babichjacob/svelte-localstorage/svelte-kit";
import { derived } from 'svelte/store';
import type { Passion, PassionCategory } from "../models";

export const passionCategories = localStorageStore<PassionCategory[]>("passionCategories", []);
export const isPassionSelectOpen = localStorageStore("isPassionSelectOpen", false);

const defaultValue: Passion[] = [];
export const selectedPassions = localStorageStore("selectedPassions", defaultValue);

export const selectedPassionNames = derived(selectedPassions, ($selectedPassions) => {
  return $selectedPassions.map(passion => passion.title);
});

export const selectedPassionIds = derived(selectedPassions, ($selectedPassions) => {
  return $selectedPassions.map(passion => passion.id.toString());
});

export const selectedPassionIdInts = derived(selectedPassions, ($selectedPassions) => {
  return $selectedPassions.map(passion => passion.id);
});
