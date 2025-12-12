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

<svelte:element this={element} class="l-main-header-inner">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-main-header-inner {
		display: grid;
		gap: 1.25rem;
	}
</style>
