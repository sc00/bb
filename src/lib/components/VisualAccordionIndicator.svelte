<script lang="ts">
	/**
	 * TYPES
	 */
	interface Props {
		expanded: boolean;
	}

	/**
	 * PROPS
	 */
	let { expanded }: Props = $props();
</script>

<div class="v-accordion-indicator" aria-expanded={expanded}></div>

<style lang="scss">
	.v-accordion-indicator {
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
			transition: transform 0.2s ease-in-out;
		}

		&::after {
			transform: rotate(90deg);
		}

		&[aria-expanded='true'] {
			&::before {
				transform: rotate(45deg);
			}

			&::after {
				transform: rotate(135deg);
			}
		}
	}
</style>
