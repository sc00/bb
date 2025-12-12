<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { MouseEventHandler } from 'svelte/elements';

	/**
	 * TYPES
	 */
	interface Props {
		href: string;
		label: string;
		current?: boolean;
		onclick?: MouseEventHandler<HTMLAnchorElement>;
	}

	/**
	 * PROPS
	 */
	let { href, label, current, onclick = $bindable() }: Props = $props();
</script>

<a class="v-footer-nav-link" {href} aria-current={current ? 'true' : null} {onclick}>{label}</a>

<style lang="scss">
	.v-footer-nav-link {
		font-family: 'ABC Monument Grotesk Mono';
		font-size: 0.875rem;
		line-height: 1;
		text-decoration: none;
		text-transform: uppercase;
		transition: opacity 0.1s ease-in-out;

		&:hover {
			opacity: 0.5;
		}

		&[aria-current='true'] {
			opacity: 0.5;
		}
	}
</style>
