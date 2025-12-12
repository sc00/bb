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

<svelte:element this={element} class="l-control">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-control {
		--button-width: 1rem;
		--button-height: 1rem;

		width: 1rem;
		height: 1rem;
	}
</style>
