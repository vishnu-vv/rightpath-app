import { browser } from '$app/environment';
import { writable, derived } from 'svelte/store';

export interface User {
  name: string;
  dob?: Date;
}

const defaultValue: User = {
  name: ''
};

let initialValue = (browser && localStorage.getItem("user"));
export const currentUser = writable(browser && initialValue ? JSON.parse(initialValue) : defaultValue)

currentUser.subscribe((value) => {
  browser && localStorage.setItem('currentUser', JSON.stringify(value));
});