<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		href: string;
	}

	/**
	 * PROPS
	 */
	let { href }: Props = $props();
</script>

<a class="v-linked-in-link" {href} target="_blank" aria-label="Linked In">
	<img src="/assets/linkedin.svg" width="20" height="20" alt="IN" />
</a>

<style lang="scss">
	.v-linked-in-link {
		text-decoration: none;
		transition: opacity 0.1s ease-in-out;

		&:hover {
			opacity: 0.6;
		}
	}
</style>
