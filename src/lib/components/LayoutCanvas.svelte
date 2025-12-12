<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		element?: HTMLElement;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { element = $bindable(), children }: Props = $props();
</script>

<div bind:this={element} class="l-canvas">
	{@render children()}
</div>

<style lang="scss">
	.l-canvas {
		position: fixed;
		inset: 3rem 0.75rem 0.75rem;
	}

	@media screen and (min-width: 800px) {
		.l-canvas {
			inset: 0.75rem 0.75rem 3rem;
		}
	}
</style>
