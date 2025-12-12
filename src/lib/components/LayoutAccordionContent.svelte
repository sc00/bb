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
		element?: HTMLElement | undefined;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'div', element = $bindable(), children }: Props = $props();
</script>

<svelte:element this={tag} bind:this={element} class="l-accordion-content">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-accordion-content {
		padding-bottom: 1.5rem;
	}
</style>
