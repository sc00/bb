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

<svelte:element this={element} class="l-accordion">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-accordion {
		display: grid;
		gap: 0.625rem;
	}
</style>
