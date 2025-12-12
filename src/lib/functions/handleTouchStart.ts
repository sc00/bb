import { windows, dragOffset, dragWindowIndex, isDragging } from '$lib/shared/state.svelte';
import { bringWindowToFront, handleTouchMove, handleTouchEnd } from '$lib/functions';

export function handleTouchStart(event: TouchEvent, windowIndex: number) {
	// Prevent default to avoid scrolling
	event.preventDefault();

	const touch = event.touches[0];
	if (!touch) return;

	const windowElement = windows.value[windowIndex].element;
	if (!windowElement) return;

	// Bring window to front
	const currentZIndex = windows.value[windowIndex].position.zIndex;
	bringWindowToFront(windowIndex, currentZIndex);

	// Calculate offset from touch to window's top-left corner
	const rect = windowElement.getBoundingClientRect();
	dragOffset.value = {
		x: touch.clientX - rect.left,
		y: touch.clientY - rect.top
	};

	isDragging.value = true;
	dragWindowIndex.value = windowIndex;

	// Add global event listeners
	document.addEventListener('touchmove', handleTouchMove, { passive: false });
	document.addEventListener('touchend', handleTouchEnd);
	document.addEventListener('touchcancel', handleTouchEnd);
}
