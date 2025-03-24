import { writable } from 'svelte/store';

const formType = writable('discontinued'); // 'discontinued', 'banned', or 'harmful'

export { formType };