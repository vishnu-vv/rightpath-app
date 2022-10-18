import { writable, derived } from 'svelte/store';

export interface Passion {
  title: string;
}

export const passions = writable<Passion[]>([]);

export const passionNames = derived(passions, ($passions) => {
  return $passions.map(passion => passion.title);
});

export const currentPassion = writable<Passion>();

export const dateOfBirth = writable<Date>();

export const dob = derived(dateOfBirth, ($dateOfBirth) => {
  return $dateOfBirth;
});
