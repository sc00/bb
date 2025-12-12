<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		element?: string;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { element = 'div', children }: Props = $props();
</script>

<svelte:element this={element} class="l-window-header-inner">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-window-header-inner {
		position: relative;
		display: flex;
		justify-content: space-between;
	}
</style>
