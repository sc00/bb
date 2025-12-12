import { dragOffset, dragWindowIndex, isDragging } from '$lib/shared/state.svelte';
import { handleTouchMove } from '$lib/functions';

export function handleTouchEnd() {
	if (!isDragging.value) return;

	isDragging.value = false;
	dragWindowIndex.value = undefined;
	dragOffset.value = { x: 0, y: 0 };

	// Remove global event listeners
	document.removeEventListener('touchmove', handleTouchMove);
	document.removeEventListener('touchend', handleTouchEnd);
	document.removeEventListener('touchcancel', handleTouchEnd);
}
