<script lang="ts">
	/**
	 * TYPES
	 */
	interface Props {
		text: string;
		alignment?: string;
	}

	/**
	 * PROPS
	 */
	let { text, alignment }: Props = $props();
</script>

<h2 class={['v-heading', alignment && 'v-heading--align-' + alignment]}>{text}</h2>

<style lang="scss">
	.v-heading {
		font-family: 'ABC Monument Grotesk Mono';
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.25rem;
		text-align: center;
		text-transform: uppercase;
		white-space: pre-wrap;

		&--align {
			&-start {
				text-align: start;
			}
		}
	}
</style>
