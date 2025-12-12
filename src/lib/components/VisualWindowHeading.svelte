<script lang="ts">
	/**
	 * PROPS
	 */
	let { element = $bindable(), children } = $props();
</script>

<h2 class="v-window-heading" bind:this={element}>{@render children?.()}</h2>

<style lang="scss">
	.v-window-heading {
		margin-bottom: 0.5rem;
		padding: 0.5rem 0 0.75rem;
		font-family: 'ABC Monument Grotesk Semi Mono';
		font-size: 1.875rem;
		font-weight: 400;
		line-height: 1.18;
		text-align: center;
		text-transform: uppercase;
		-webkit-hyphens: auto;
		hyphens: auto;
		border-bottom: solid 1px;
		white-space: pre-wrap;
	}

	@media screen and (min-width: 800px) {
		.v-window-heading {
			margin-bottom: 0;
			padding: 0.25rem 0 0.5rem;
		}
	}
</style>
