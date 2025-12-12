<script lang="ts">
	/**
	 * TYPES
	 */
	interface Props {
		text: string;
		expanded: boolean;
	}

	/**
	 * PROPS
	 */
	let { text, expanded }: Props = $props();
</script>

<div class={['v-accordion-item-title', expanded && 'v-accordion-item-title--expanded']}>{text}</div>

<style lang="scss">
	.v-accordion-item-title {
		padding: 0.75rem 0 0.6875rem;
		font-family: 'ABC Monument Grotesk Mono';
		font-size: 0.9375rem;
		-webkit-hyphens: auto;
		hyphens: auto;
		overflow-wrap: break-word;
		text-transform: uppercase;
		transition: color 0.1s ease-in-out;

		&--expanded {
			color: #aaa;
		}
	}
</style>
