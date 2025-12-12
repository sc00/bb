<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { children }: Props = $props();
</script>

<nav class="v-main-footer-nav">
	{@render children?.()}
</nav>

<style lang="scss">
	.v-main-footer-nav {
		padding: 0.5rem;
	}
</style>
