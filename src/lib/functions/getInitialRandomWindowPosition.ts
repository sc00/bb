import { canvasElement } from '$lib/shared/state.svelte';
import { getRandomNumber, getNewUpmostZIndex } from '$lib/functions';

export function getInitialRandomWindowPosition(element: HTMLElement) {
	const canvasRect = canvasElement.value!.getBoundingClientRect();
	const windowRect = element.getBoundingClientRect();
	const maxTop = Math.max(0, canvasRect.height - windowRect.height);
	const maxLeft = Math.max(0, canvasRect.width - windowRect.width);

	return {
		zIndex: getNewUpmostZIndex(),
		top: getRandomNumber(0, maxTop),
		right: null,
		bottom: null,
		left: getRandomNumber(0, maxLeft)
	};
}
