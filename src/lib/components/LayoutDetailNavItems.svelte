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

<svelte:element this={element} class="l-detail-nav-items">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-detail-nav-items {
		display: grid;
		margin: 0;
		padding: 0;
		gap: 0.25rem;
	}
</style>
