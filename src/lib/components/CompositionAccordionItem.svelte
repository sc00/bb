<script lang="ts">
	/**
	 * IMPORTS
	 */
	import CompositionParseContent from './CompositionParseContent.svelte';
	import LayoutAccordionContent from './LayoutAccordionContent.svelte';
	import LayoutAccordionItemHeaderInner from './LayoutAccordionItemHeaderInner.svelte';
	import LayoutControl from './LayoutControl.svelte';
	import LayoutExpander from './LayoutExpander.svelte';
	import LayoutStack from './LayoutStack.svelte';
	import VisualAccordionIndicator from './VisualAccordionIndicator.svelte';
	import VisualAccordionItem from './VisualAccordionItem.svelte';
	import VisualReadMoreLink from './VisualReadMoreLink.svelte';
	import VisualAccordionItemTitle from './VisualAccordionItemTitle.svelte';
	import { isMobile } from '$lib/shared/state.svelte';
	import { callWindow, setContent } from '$lib/functions';

	/**
	 * TYPES
	 */
	interface Props {
		title: string;
		content: any;
		link: any;
	}

	/**
	 * PROPS
	 */
	let { title, content, link }: Props = $props();

	/**
	 * VARIABLES
	 */
	let accordionContentElement: HTMLElement | undefined = $state();
	let expanded = $state(false);
	let height = $state('0px');

	/**
	 * FUNCTIONS
	 */
	function handleClickItem() {
		expanded = !expanded;
		height = expanded ? accordionContentElement!.scrollHeight + 'px' : '0px';
	}

	function handleClickReadMoreLink(event: MouseEvent, handle: string) {
		event.preventDefault();

		if (isMobile.value) {
			setContent(0, null, 'main');
			setContent(0, handle, 'detail');
		} else {
			callWindow(handle, false, { main: null, detail: handle });
		}
	}
</script>

<VisualAccordionItem>
	<LayoutAccordionItemHeaderInner onclick={handleClickItem}>
		<VisualAccordionItemTitle text={title} {expanded} />
		<LayoutControl>
			<VisualAccordionIndicator {expanded} />
		</LayoutControl>
	</LayoutAccordionItemHeaderInner>
	<LayoutExpander {height}>
		<LayoutAccordionContent bind:element={accordionContentElement}>
			<LayoutStack>
				<CompositionParseContent context="accordion" blocks={content} />
				{#if link.type !== 'none'}
					{#if link.type === 'external'}
						<VisualReadMoreLink href={link.url} label={link.label} target="_blank" />
					{:else if link.type === 'window'}
						<VisualReadMoreLink
							href={'#' + link.window.slug}
							label={link.label}
							onclick={(event) => handleClickReadMoreLink(event, link.window.slug)}
						/>
					{/if}
				{/if}
			</LayoutStack>
		</LayoutAccordionContent>
	</LayoutExpander>
</VisualAccordionItem>
