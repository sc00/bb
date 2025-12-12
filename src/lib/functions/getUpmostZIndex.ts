import { windows } from '$lib/shared/state.svelte';

export function getUpmostZIndex() {
	return windows.value.reduce((max, w) => Math.max(max, w.position.zIndex), 0);
}
