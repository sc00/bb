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

<svelte:element this={element} class="l-mobile-main-nav-control">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-mobile-main-nav-control {
		position: absolute;
		top: 1.5rem;
		right: 1.75rem;
	}

	@media screen and (min-width: 800px) {
		.l-mobile-main-nav-control {
			display: none;
		}
	}
</style>
