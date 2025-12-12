<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		tag?: string;
		element?: HTMLElement;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'div', children }: Props = $props();
</script>

<svelte:element this={tag} class="l-window-inner">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-window-inner {
		display: flex;
		flex-direction: column;
		max-height: 100%;
	}
</style>
