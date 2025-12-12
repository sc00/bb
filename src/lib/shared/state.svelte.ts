import { type Window } from '$lib/types';

export const isMobile = $state<{ value: boolean | undefined }>({ value: undefined });
export const windows = $state<{ value: Window[] }>({ value: [] });
export const canvasElement: { value: HTMLElement | undefined } = $state({ value: undefined });
export const isDragging = $state<{ value: boolean }>({ value: false });
export const dragOffset = $state<{ value: { x: number; y: number } }>({ value: { x: 0, y: 0 } });
export const dragWindowIndex = $state<{ value: number | undefined }>({ value: undefined });
