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

<li class="v-sublist-item">{@render children?.()}</li>

<style lang="scss">
	.v-sublist-item {
		position: relative;
		padding-left: 1.25rem;
		list-style: none;
		white-space: pre-wrap;

		&::before {
			position: absolute;
			top: 0.375rem;
			left: 0;
			display: inline-block;
			width: 0.5rem;
			height: 0.5rem;
			content: '';
			background-color: #000;
		}
	}
</style>
