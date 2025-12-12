import { breakpoint } from '$lib/constants';
import { isMobile } from '$lib/shared/state.svelte';

export function setIsMobile() {
	isMobile.value = window.innerWidth < breakpoint;
}
