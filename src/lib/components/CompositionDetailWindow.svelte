<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { MouseEventHandler, TouchEventHandler } from 'svelte/elements';
	import { onMount } from 'svelte';
	import { getUpmostZIndex, handleClickCloseButton } from '$lib/functions';
	import LayoutWindow from './LayoutWindow.svelte';
	import LayoutWindowInner from './LayoutWindowInner.svelte';
	import VisualWindow from './VisualWindow.svelte';
	import LayoutControl from '$lib/components/LayoutControl.svelte';
	import VisualCloseButton from '$lib/components/VisualCloseButton.svelte';
	import CompositionParseContent from '$lib/components/CompositionParseContent.svelte';
	import VisualWindowHeading from '$lib/components/VisualWindowHeading.svelte';
	import LayoutWindowHeaderInner from '$lib/components/LayoutWindowHeaderInner.svelte';
	import VisualWindowTopic from '$lib/components/VisualWindowTopic.svelte';
	import VisualScrollableArea from '$lib/components/VisualScrollableArea.svelte';
	import LayoutStack from '$lib/components/LayoutStack.svelte';
	import LayoutExpander from './LayoutExpander.svelte';
	import LayoutContentWrapper from './LayoutContentWrapper.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		index: number;
		handle: string;
		content: {
			main: string | null;
			detail: string | null;
		};
		position: {
			zIndex: number;
			top: number | null;
			right: number | null;
			bottom: number | null;
			left: number | null;
		};
		onmousedown?: MouseEventHandler<any>;
		ontouchstart?: TouchEventHandler<any>;
		data: {
			[x: string]: any;
		};
	}

	/**
	 * PROPS
	 */
	let {
		index,
		handle,
		content,
		position,
		onmousedown = $bindable(),
		ontouchstart = $bindable(),
		data
	}: Props = $props();

	/**
	 * VARIABLES
	 */
	let contentDetailWrapperElement: HTMLElement | undefined = $state();
	let expanderElement: HTMLElement | undefined = $state();
	let contentDetailHeight: string = $state('auto');
	let isActive = $derived(position.zIndex === getUpmostZIndex());

	/**
	 * HOOKS
	 */
	onMount(() => {
		contentDetailHeight = expanderElement!.offsetHeight + 'px';
	});
</script>

<LayoutWindow id={handle} {position} {onmousedown} {ontouchstart}>
	<VisualWindow {isActive}>
		<LayoutWindowInner>
			<LayoutStack size="small">
				<LayoutWindowHeaderInner>
					<VisualWindowTopic title={data[content.detail!].topic} />
					<LayoutControl>
						<VisualCloseButton onclick={() => handleClickCloseButton(index, 'detail')} />
					</LayoutControl>
				</LayoutWindowHeaderInner>
				<VisualWindowHeading>{data[content.detail!].title}</VisualWindowHeading>
			</LayoutStack>
			<LayoutExpander bind:element={expanderElement} height={contentDetailHeight}>
				<VisualScrollableArea --max-height="550px">
					<LayoutContentWrapper bind:element={contentDetailWrapperElement}>
						<LayoutStack>
							<CompositionParseContent context="root" blocks={data[content.detail!].content} />
						</LayoutStack>
					</LayoutContentWrapper>
				</VisualScrollableArea>
			</LayoutExpander>
		</LayoutWindowInner>
	</VisualWindow>
</LayoutWindow>
