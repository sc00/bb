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

<li class="v-list-item">{@render children?.()}</li>

<style lang="scss">
	.v-list-item {
		position: relative;
		padding-left: 3rem;
		list-style: none;
		white-space: pre-wrap;

		&::before {
			position: absolute;
			top: 0.375rem;
			left: 1.5rem;
			display: inline-block;
			width: 0.5rem;
			height: 0.5rem;
			content: '';
			background-color: #000;
		}
	}
</style>
