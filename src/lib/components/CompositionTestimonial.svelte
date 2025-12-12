<script lang="ts">
	import LayoutIndent from './LayoutIndent.svelte';
	import LayoutStack from './LayoutStack.svelte';
	import VisualName from './VisualName.svelte';
	import VisualParagraph from './VisualParagraph.svelte';
	import VisualSmallHeading from './VisualSmallHeading.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		name?: string;
		institution?: string;
		text: string;
	}

	/**
	 * PROPS
	 */
	let { name, institution, text }: Props = $props();
</script>

<LayoutStack>
	<VisualSmallHeading text="Kund*innenstimme:" />
	<LayoutIndent>
		<LayoutStack>
			<VisualParagraph testimonial>»{text}«</VisualParagraph>
			<LayoutStack size="tiny">
				{#if name}
					<VisualName text={name} />
				{/if}
				{#if institution}
					<VisualName text={institution} />
				{/if}
			</LayoutStack>
		</LayoutStack>
	</LayoutIndent>
</LayoutStack>
