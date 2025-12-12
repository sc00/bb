import {
	canvasElement,
	dragOffset,
	dragWindowIndex,
	isDragging,
	windows
} from '$lib/shared/state.svelte';

export function handleTouchMove(event: TouchEvent) {
	if (!isDragging.value || dragWindowIndex.value === null) return;

	event.preventDefault();

	const touch = event.touches[0];
	if (!touch) return;

	const windowElement = windows.value[dragWindowIndex.value!].element;
	if (!windowElement) return;

	const canvasRect = canvasElement.value!.getBoundingClientRect();
	const windowRect = windowElement.getBoundingClientRect();

	let newTop = touch.clientY - canvasRect.top - dragOffset.value.y;
	let newLeft = touch.clientX - canvasRect.left - dragOffset.value.x;

	const extendsBeyondCanvasBottom = windowRect.bottom > canvasRect.bottom;

	// Constrain within canvas bounds
	const maxTop = extendsBeyondCanvasBottom
		? windowRect.top - canvasRect.top
		: canvasRect.height - windowRect.height;
	const maxLeft = canvasRect.width - windowRect.width;

	newTop = Math.max(0, Math.min(newTop, maxTop));
	newLeft = Math.max(0, Math.min(newLeft, maxLeft));

	// Update window position
	windows.value[dragWindowIndex.value!].position = {
		...windows.value[dragWindowIndex.value!].position,
		top: newTop,
		left: newLeft,
		right: null,
		bottom: null
	};
}
