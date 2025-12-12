<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		element?: HTMLDivElement;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { element = $bindable(), children }: Props = $props();
</script>

<div class="v-scrollable-area" bind:this={element}>
	{@render children?.()}
</div>

<style lang="scss">
	.v-scrollable-area {
		max-height: var(--max-height);
		overflow-y: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
