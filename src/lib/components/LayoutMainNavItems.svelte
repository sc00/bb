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

<svelte:element this={element} class="l-main-nav-items">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-main-nav-items {
		display: flex;
		justify-content: space-between;
		padding: 0;
		margin: 0;

		&:last-child {
			display: none;
		}
	}

	:global {
		.l-main-nav-items {
			& > *:last-child {
				display: none;
			}
		}

		@media screen and (min-width: 800px) {
			.l-main-nav-items {
				& > *:last-child {
					display: block;
				}
			}
		}
	}
</style>
