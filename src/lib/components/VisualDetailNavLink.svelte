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
		onclick?: MouseEventHandler<HTMLAnchorElement>;
	}

	/**
	 * PROPS
	 */
	let { href, label, onclick = $bindable() }: Props = $props();
</script>

<a class="v-detail-nav-link" {href} {onclick}>{label}</a>

<style lang="scss">
	.v-detail-nav-link {
		display: block;
		font-family: 'ABC Monument Grotesk Mono';
		font-size: 0.9375rem;
		line-height: 1.125rem;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
	}
</style>
