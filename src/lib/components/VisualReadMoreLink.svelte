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
		target?: string;
		onclick?: MouseEventHandler<HTMLAnchorElement>;
	}

	/**
	 * PROPS
	 */
	let { href, label, target, onclick = $bindable() }: Props = $props();
</script>

<a class="v-read-more-link" {href} {target} {onclick}>{label}</a>

<style lang="scss">
	.v-read-more-link {
		font-family: 'ABC Monument Grotesk Mono';
		font-size: 0.75rem;
		text-decoration: none;
		text-transform: uppercase;

		&::before {
			content: '> ';
		}
	}
</style>
