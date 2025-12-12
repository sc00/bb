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

<svelte:element this={element} class="l-page">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-page {
		position: fixed;
		inset: 0;
		display: grid;
	}
</style>
