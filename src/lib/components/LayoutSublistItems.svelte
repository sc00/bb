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

<svelte:element this={element} class="l-sublist-items">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-sublist-items {
		display: grid;
		gap: 0.375rem;
		margin: 0.75rem 0;
	}
</style>
