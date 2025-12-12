import { windows } from '$lib/shared/state.svelte';

export function getWindowByHandle(handle: string) {
	const index = windows.value.findIndex((window) => window.handle === handle);
	const window = index !== -1 ? windows.value[index] : undefined;

	return { window, index };
}
