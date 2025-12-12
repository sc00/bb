<script lang="ts">
	/**
	 * PROPS
	 */
	let { title } = $props();
</script>

<div class="v-window-topic">{title}</div>

<style lang="scss">
	.v-window-topic {
		font-family: 'ABC Monument Grotesk Mono';
		font-size: 0.9375rem;
		text-transform: uppercase;
		color: #aaa;
	}
</style>
