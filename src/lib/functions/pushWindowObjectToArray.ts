import { type Window } from '$lib/types';
import { windows } from '$lib/shared/state.svelte';

export function pushWindowObjectToArray(window: Window) {
	windows.value.push(window);
	return windows.value.length - 1;
}
