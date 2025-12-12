<script lang="ts">
	/**
	 * TYPES
	 */
	interface Props {
		text: string;
	}

	/**
	 * PROPS
	 */
	let { text }: Props = $props();
</script>

<h2 class="v-heading">{text}</h2>

<style lang="scss">
	.v-heading {
		font-family: 'ABC Monument Grotesk Mono';
		font-size: 0.9375rem;
		font-weight: 400;
		line-height: 1.125rem;
		text-transform: uppercase;
		white-space: pre-wrap;
		color: #aaa;
	}
</style>
