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

<svelte:element this={element} class="l-main-header-logo">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-main-header-logo {
		width: 10.625rem;
	}
</style>
