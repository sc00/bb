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
		size?: 'tiny' | 'small';
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { element = 'div', size, children }: Props = $props();
</script>

<svelte:element this={element} class={['l-stack', size && 'l-stack--' + size]}>
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-stack {
		display: grid;
		gap: 1rem;

		&--tiny {
			gap: 0.125rem;
		}

		&--small {
			gap: 0.5rem;
		}
	}
</style>
