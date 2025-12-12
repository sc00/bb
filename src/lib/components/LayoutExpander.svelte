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
		height: string;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'div', element = $bindable(), height, children }: Props = $props();
</script>

<svelte:element this={tag} bind:this={element} class="l-expander" style="height: {height}">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-expander {
		display: grid;
		transition: height 0.3s;
		overflow: hidden;
	}
</style>
