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

<li class="v-plain-list-item">
	{@render children?.()}
</li>

<style lang="scss">
	.v-plain-list-item {
		list-style: none;
	}
</style>
