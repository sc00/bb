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
	let { tag = 'div', element = $bindable(), children }: Props = $props();
</script>

<svelte:element this={tag} bind:this={element} class="l-content-wrapper">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-content-wrapper {
		padding-top: 0.875rem;
	}
</style>
