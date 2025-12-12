import { windows } from '$lib/shared/state.svelte';
import { getNewUpmostZIndex } from '$lib/functions';

export function bringWindowToFront(windowIndex: number, currentZIndex: number) {
	const newZIndex = getNewUpmostZIndex(currentZIndex);
	windows.value[windowIndex].position.zIndex = newZIndex;
}
