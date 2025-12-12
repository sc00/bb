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

<svelte:element this={element} class="l-main-footer">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-main-footer {
		position: fixed;
		inset: 0.75rem 0.75rem auto;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 1.5rem;
	}

	@media screen and (min-width: 800px) {
		.l-main-footer {
			inset: auto 0.75rem 0.75rem;
		}
	}
</style>
