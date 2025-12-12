<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		isActive: boolean;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { isActive, children }: Props = $props();
</script>

<div class="v-window" aria-current={isActive ? 'true' : null}>
	{@render children?.()}
</div>

<style lang="scss">
	.v-window {
		pointer-events: none;
		padding: 1.5rem 1.75rem;
		background-color: hsl(260, 43%, 99%, 0.95);

		&[aria-current='true'] {
			pointer-events: all;
		}
	}

	@media screen and (min-width: 800px) {
		.v-window {
			padding: 1.875rem 2.5rem;
		}
	}
</style>
