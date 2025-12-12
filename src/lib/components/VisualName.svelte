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

<div class="v-name">{text}</div>

<style lang="scss">
	.v-name {
		font-family: 'ABC Monument Grotesk Mono';
		font-size: 0.75rem;
		color: #aaa;
		text-transform: uppercase;
	}
</style>
