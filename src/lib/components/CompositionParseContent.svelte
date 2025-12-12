<script lang="ts">
	/**
	 * IMPORTS
	 */
	import CompositionAccordion from './CompositionAccordion.svelte';
	import CompositionDetailNav from './CompositionDetailNav.svelte';
	import CompositionGetInTouch from './CompositionGetInTouch.svelte';
	import CompositionList from './CompositionList.svelte';
	import CompositionTestimonial from './CompositionTestimonial.svelte';
	import VisualContactList from './VisualContactList.svelte';
	import VisualHeading from './VisualHeading.svelte';
	import VisualImage from './VisualImage.svelte';
	import VisualParagraph from './VisualParagraph.svelte';
	import VisualSeparationLine from './VisualSeparationLine.svelte';
	import VisualSmallHeading from './VisualSmallHeading.svelte';

	/**
	 * PROPS
	 */
	let { context, blocks, onclickdetailnavlink = $bindable() } = $props();

	/**
	 * HELPERS
	 */
	function parseListItem(item: any) {
		const text = item.text;
		if (!text) return item;

		const lines = text.split('\n');

		// Check if we have list markers
		const hasListMarkers = lines.some((line) => /^([–\-*•]|\d+\.)\s+/.test(line.trim()));

		if (!hasListMarkers) {
			// No list markers, return original text with line breaks preserved
			return item;
		}

		// We have a main text followed by sub-items
		const mainTextLines = [];
		const subItems = [];

		for (const line of lines) {
			const trimmedLine = line.trim();
			if (!trimmedLine) continue; // Skip empty lines

			const isListItem = /^([–\-*•]|\d+\.)\s+/.test(trimmedLine);

			if (isListItem) {
				subItems.push(trimmedLine.replace(/^([–\-*•]|\d+\.)\s+/, ''));
			} else {
				mainTextLines.push(line); // Keep original line with its whitespace
			}
		}

		return {
			...item,
			text: mainTextLines.join('\n'), // Preserve line breaks with \n
			subItems: subItems
		};
	}

	function normalizeListItems(items: any[]) {
		return items.map((item) => parseListItem(item));
	}
</script>

{#each blocks as block}
	{#if block.blockType === 'heading'}
		<VisualHeading text={block.text} />
	{:else if block.blockType === 'small-heading'}
		<VisualSmallHeading text={block.text} />
	{:else if block.blockType === 'paragraph'}
		<VisualParagraph indent={context === 'accordion'}>{block.text}</VisualParagraph>
	{:else if block.blockType === 'image'}
		<VisualImage file={block.file} />
	{:else if block.blockType === 'navigation'}
		<CompositionDetailNav items={block.items} {onclickdetailnavlink} />
	{:else if block.blockType === 'contact'}
		<VisualContactList tel={block.tel} email={block.email} />
	{:else if block.blockType === 'accordion'}
		<CompositionAccordion title={block.title} items={block.items} />
	{:else if block.blockType === 'list'}
		<CompositionList items={normalizeListItems(block.items)} />
	{:else if block.blockType === 'testimonial'}
		<CompositionTestimonial name={block.name} institution={block.institution} text={block.text} />
	{:else if block.blockType === 'get-in-touch'}
		<CompositionGetInTouch text={block.text} />
	{:else if block.blockType === 'separation-line'}
		<VisualSeparationLine />
	{/if}
{/each}
