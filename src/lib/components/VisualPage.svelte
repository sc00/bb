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

<div class="v-page">
	{@render children?.()}
</div>

<style lang="scss">
	.v-page {
		background-color: var(--global-background-color);
		background-image: url('/assets/background.svg');
		background-size: 98vw;
		background-position: center center;
		background-repeat: no-repeat;
	}
</style>
