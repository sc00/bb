<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { MouseEventHandler } from 'svelte/elements';

	/**
	 * TYPES
	 */
	interface Props {
		hidden?: boolean;
		onclick: MouseEventHandler<HTMLButtonElement>;
	}

	/**
	 * PROPS
	 */
	let { hidden = false, onclick = $bindable() }: Props = $props();
</script>

<button class="v-close-button" aria-label="close" aria-hidden={hidden ? 'true' : null} {onclick}
></button>

<style lang="scss">
	.v-close-button {
		position: relative;
		width: var(--button-width);
		height: var(--button-height);
		padding: 0;
		background-color: transparent;
		border: none;
		transition: opacity 0.05s ease-in-out;

		&::before,
		&::after {
			position: absolute;
			top: 50%;
			width: 100%;
			height: 1px;
			content: '';
			background-color: black;
			translate: -50%;
		}

		&::before {
			transform: rotate(45deg);
		}

		&::after {
			transform: rotate(-45deg);
		}

		&[aria-hidden='true'] {
			opacity: 0;
			pointer-events: none;
		}
	}
</style>
