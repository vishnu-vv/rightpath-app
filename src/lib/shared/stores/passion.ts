import { browser } from '$app/environment';
import { writable, derived } from 'svelte/store';

export interface Passion {
  title: string;
}

const defaultValue: Passion[] = [];
const initialValue = (browser && localStorage.getItem("selectedPassions")) ? localStorage.getItem("selectedPassions") : '[]';
export const selectedPassions = writable<Passion[]>(browser && JSON.parse(initialValue) || defaultValue)

selectedPassions.subscribe((value) => {
	if (browser) {
		localStorage.setItem('selectedPassions', JSON.stringify(value));
	}
});

export const selectedPassionNames = derived(selectedPassions, ($selectedPassions) => {
  return $selectedPassions.map(passion => passion.title);
});

export const passions = writable<Passion[]>([]);

export const passionNames = derived(passions, ($passions) => {
  return $passions.map(passion => passion.title);
});

export const dateOfBirth = writable<Date>();

export const dob = derived(dateOfBirth, ($dateOfBirth) => {
  return $dateOfBirth;
});
