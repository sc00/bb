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

<svelte:element this={element} class="l-accordion-items">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-accordion-items {
		display: grid;
		margin: 0;
		padding: 0;

		:global {
			> * {
				min-width: 0;
			}
		}
	}
</style>
