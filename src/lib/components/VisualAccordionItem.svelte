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

<li class="v-accordion-item">{@render children?.()}</li>

<style lang="scss">
	.v-accordion-item {
		padding-left: 1.5rem;
		border-bottom: solid 1px;

		&:first-child {
			border-top: solid 1px;
		}
	}
</style>
