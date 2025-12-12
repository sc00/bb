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
		indent?: boolean;
		getInTouch?: boolean;
		testimonial?: boolean;
	}

	/**
	 * PROPS
	 */
	let { children, indent = false, getInTouch = false, testimonial = false }: Props = $props();
</script>

<p
	class={[
		'v-paragraph',
		indent && 'v-paragraph--indented',
		getInTouch && 'v-paragraph--get-in-touch',
		testimonial && 'v-paragraph--testimonial'
	]}
>
	{@render children?.()}
</p>

<style lang="scss">
	.v-paragraph {
		position: relative;
		white-space: pre-wrap;

		&--indented {
			padding-left: 1.5rem;
		}

		&--get-in-touch {
			padding-left: 2rem;

			&::before {
				position: absolute;
				top: 0.0625rem;
				left: 0;
				display: block;
				width: 0.875rem;
				height: 1rem;
				content: '';
				background: url('/assets/play.svg') 100%;
			}
		}

		&--testimonial {
			padding-left: 2rem;

			&::before {
				position: absolute;
				top: 0.25rem;
				left: 0;
				display: block;
				width: 0.8125rem;
				height: 0.75rem;
				content: '';
				background: url('/assets/quote.svg') 100%;
			}
		}
	}
</style>
