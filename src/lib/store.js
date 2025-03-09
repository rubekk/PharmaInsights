import { writable } from 'svelte/store';

const formType = writable('harmful'); // 'discontinued', 'banned', or 'harmful'

export { formType };