<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler, TouchEventHandler } from 'svelte/elements';

	/**
	 * TYPES
	 */
	interface Props {
		element?: string;
		id: string;
		position: {
			zIndex: number;
			top: number | null;
			right: number | null;
			bottom: number | null;
			left: number | null;
		};
		onmousedown?: MouseEventHandler<any>;
		ontouchstart?: TouchEventHandler<any>;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let {
		element = 'div',
		id,
		position,
		onmousedown = $bindable(),
		ontouchstart = $bindable(),
		children
	}: Props = $props();
</script>

<svelte:element
	this={element}
	{id}
	class="l-window"
	style="
		z-index: {position.zIndex};
		top: {position.top !== null ? position.top + 'px' : 'auto'};
		right: {position.right !== null ? position.right + 'px' : 'auto'};
		bottom: {position.bottom !== null ? position.bottom + 'px' : 'auto'};
		left: {position.left !== null ? position.left + 'px' : 'auto'};
	"
	{onmousedown}
	{ontouchstart}
>
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-window {
		position: absolute;
		width: 100%;
		max-width: 32rem;
	}
</style>
