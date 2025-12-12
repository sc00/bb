<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	/**
	 * TYPES
	 */
	interface Props {
		element?: string;
		children: Snippet;
		onclick: MouseEventHandler<HTMLButtonElement>;
	}

	/**
	 * PROPS
	 */
	let { element = 'div', onclick = $bindable(), children }: Props = $props();
</script>

<svelte:element this={element} class="l-accordion-item-header-inner" {onclick}>
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-accordion-item-header-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		cursor: pointer;
	}
</style>
