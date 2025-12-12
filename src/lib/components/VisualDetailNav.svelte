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

<nav class="v-detail-nav">
	{@render children?.()}
</nav>

<style lang="scss">
	.v-detail-nav {
	}
</style>
