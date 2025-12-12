import { windows, dragOffset, dragWindowIndex, isDragging } from '$lib/shared/state.svelte';
import { bringWindowToFront, handleMouseMove, handleMouseUp } from '$lib/functions';

export function handleMouseDown(event: MouseEvent, windowIndex: number) {
	// Only start drag on left mouse button
	if (event.button !== 0) return;

	// Prevent default to avoid text selection
	event.preventDefault();

	const windowElement = windows.value[windowIndex].element;
	if (!windowElement) return;

	// Bring window to front
	const currentZIndex = windows.value[windowIndex].position.zIndex;
	bringWindowToFront(windowIndex, currentZIndex);

	// Calculate offset from mouse to window's top-left corner
	const rect = windowElement.getBoundingClientRect();

	dragOffset.value = {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};

	isDragging.value = true;
	dragWindowIndex.value = windowIndex;

	// Add global event listeners
	document.addEventListener('mousemove', handleMouseMove);
	document.addEventListener('mouseup', handleMouseUp);
}
