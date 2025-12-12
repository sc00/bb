<script lang="ts">
	/**
	 * IMPORTS
	 */
	import VisualHeading from './VisualHeading.svelte';
	import LayoutAccordion from './LayoutAccordion.svelte';
	import LayoutAccordionItems from './LayoutAccordionItems.svelte';
	import CompositionAccordionItem from './CompositionAccordionItem.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		title: string;
		items: {
			title: string;
			content: any;
			link: any;
		}[];
	}

	/**
	 * PROPS
	 */
	let { title, items }: Props = $props();
</script>

{#key items}
	<LayoutAccordion>
		{#if title}
			<VisualHeading text={title} alignment="start" />
		{/if}
		<LayoutAccordionItems element="ul">
			{#each items as { title, content, link }}
				<CompositionAccordionItem {title} {content} {link} />
			{/each}
		</LayoutAccordionItems>
	</LayoutAccordion>
{/key}
