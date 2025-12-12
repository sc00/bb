import { tick } from 'svelte';
import { windows } from '$lib/shared/state.svelte';
import {
	bringWindowToFront,
	getWindowByHandle,
	getInitialWindowObject,
	getInitialWindowPosition,
	placeWindow,
	pushWindowObjectToArray
} from '$lib/functions';

export async function callWindow(
	handle: string,
	isMain: boolean,
	content: { main: string | null; detail: string | null }
) {
	const { window, index } = getWindowByHandle(handle);

	if (window) {
		bringWindowToFront(index, window.position.zIndex);
	} else {
		const window = getInitialWindowObject(handle, isMain, content);
		const index = pushWindowObjectToArray(window);

		// Wait for DOM to render the new window, then position it
		await tick();

		const element = document.querySelector(`#${handle}`) as HTMLDivElement;
		const position = getInitialWindowPosition(element);

		// Store element reference
		windows.value[index].element = element;

		placeWindow(index, position);
	}
}
