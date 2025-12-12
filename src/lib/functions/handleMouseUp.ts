import { dragOffset, dragWindowIndex, isDragging } from '$lib/shared/state.svelte';
import { handleMouseMove } from '$lib/functions';

export function handleMouseUp() {
	if (!isDragging) return;

	isDragging.value = false;
	dragWindowIndex.value = undefined;
	dragOffset.value = { x: 0, y: 0 };

	// Remove global event listeners
	document.removeEventListener('mousemove', handleMouseMove);
	document.removeEventListener('mouseup', handleMouseUp);
}
