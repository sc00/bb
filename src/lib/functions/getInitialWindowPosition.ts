import { isMobile } from '$lib/shared/state.svelte';
import { getInitialMobileWindowPosition, getInitialRandomWindowPosition } from '$lib/functions';

export function getInitialWindowPosition(element: HTMLElement) {
	return isMobile.value
		? getInitialMobileWindowPosition()
		: getInitialRandomWindowPosition(element);
}
