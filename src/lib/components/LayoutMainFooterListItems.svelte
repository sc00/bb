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

<svelte:element this={element} class="l-main-footer-list-items">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-main-footer-list-items {
		display: flex;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}
</style>
