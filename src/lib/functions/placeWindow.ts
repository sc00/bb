import { windows } from '$lib/shared/state.svelte';

export function placeWindow(
	index: number,
	position: {
		zIndex: number;
		top: number | null;
		right: number | null;
		bottom: number | null;
		left: number | null;
	}
) {
	windows.value[index].position = position;
}
