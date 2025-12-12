<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { MouseEventHandler, TouchEventHandler } from 'svelte/elements';
	import { isMobile } from '$lib/shared/state.svelte';
	import { callWindow, getUpmostZIndex, setContent } from '$lib/functions';
	import LayoutWindow from './LayoutWindow.svelte';
	import LayoutWindowInner from './LayoutWindowInner.svelte';
	import VisualWindow from './VisualWindow.svelte';
	import VisualPlainListItem from '$lib/components/VisualPlainListItem.svelte';
	import VisualMainNavLink from '$lib/components/VisualMainNavLink.svelte';
	import LayoutMainNavItems from '$lib/components/LayoutMainNavItems.svelte';
	import VisualLogo from '$lib/components/VisualLogo.svelte';
	import VisualMainNav from '$lib/components/VisualMainNav.svelte';
	import LayoutControl from '$lib/components/LayoutControl.svelte';
	import VisualCloseButton from '$lib/components/VisualCloseButton.svelte';
	import LayoutMainHeaderInner from '$lib/components/LayoutMainHeaderInner.svelte';
	import LayoutMainHeaderLogo from '$lib/components/LayoutMainHeaderLogo.svelte';
	import CompositionParseContent from '$lib/components/CompositionParseContent.svelte';
	import VisualWindowHeading from '$lib/components/VisualWindowHeading.svelte';
	import VisualScrollableArea from '$lib/components/VisualScrollableArea.svelte';
	import LayoutMobileMainNavControl from '$lib/components/LayoutMobileMainNavControl.svelte';
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
		ontouchstart = $bindable()
	}: Props = $props();

	/**
	 * VARIABLES
	 */
	let contentMainWrapperElement: HTMLElement | undefined = $state();
	let scrollableAreaElement: HTMLDivElement | undefined = $state();
	let detailWindowHeadingElement: HTMLElement | undefined = $state();
	let contentMainHeight: string = $state('0px');
	let isActive = $derived(position.zIndex === getUpmostZIndex());

	/**
	 * FUNCTIONS
	 */
	function setWrapperHeight() {
		let effectiveHeight = 0;

		if (content.main || content.detail) {
			const maxHeight = isMobile ? window.innerHeight - 16 - 24 - 16 - 24 - 113 - 24 - 16 : 1000;
			const scrollHeight = detailWindowHeadingElement
				? contentMainWrapperElement!.scrollHeight + detailWindowHeadingElement!.scrollHeight + 10
				: contentMainWrapperElement!.scrollHeight;
			effectiveHeight = scrollHeight < maxHeight ? scrollHeight : maxHeight;
		}

		contentMainHeight = effectiveHeight + 'px';
	}

	async function handleClickMainNavItem(
		event: MouseEvent & { currentTarget: HTMLAnchorElement },
		contentHandle: string,
		index: number
	) {
		event.preventDefault();
		setContent(index, contentHandle, 'main');
	}

	async function handleClickDetailNavItem(event: Event, handle: string) {
		event.preventDefault();

		if (isMobile.value) {
			setContent(0, null, 'main');
			setContent(0, handle, 'detail');
		} else {
			callWindow(handle, false, { main: null, detail: handle });
		}
	}

	function handleClickCloseMainContentButton(index: number) {
		setContent(index, null, 'main');
	}

	function handleClickCloseContentButton(index: number) {
		setContent(index, null, 'main');
		setContent(index, null, 'detail');
	}

	/**
	 * EFFECTS
	 */
	$effect(() => {
		content.main;
		content.detail;
		setWrapperHeight();
		scrollableAreaElement!.scrollTop = 0;
	});
</script>

<LayoutWindow id={handle} {position} {onmousedown} {ontouchstart}>
	<VisualWindow {isActive}>
		<LayoutWindowInner>
			<LayoutMainHeaderInner>
				<LayoutMainHeaderLogo>
					<VisualLogo />
				</LayoutMainHeaderLogo>
				<VisualMainNav>
					<LayoutMainNavItems element="ul">
						<VisualPlainListItem>
							<VisualMainNavLink
								href="#about"
								label="About"
								current={content.main === 'about'}
								onclick={(event) => handleClickMainNavItem(event, 'about', index)}
							/>
						</VisualPlainListItem>
						<VisualPlainListItem>
							<VisualMainNavLink
								href="#leistungen"
								label="Leistungen"
								current={content.main === 'leistungen'}
								onclick={(event) => handleClickMainNavItem(event, 'leistungen', index)}
							/>
						</VisualPlainListItem>
						<VisualPlainListItem>
							<VisualMainNavLink
								href="#kontakt"
								label="Kontakt"
								current={content.main === 'kontakt'}
								onclick={(event) => handleClickMainNavItem(event, 'kontakt', index)}
							/>
						</VisualPlainListItem>
						<VisualPlainListItem>
							<LayoutControl>
								<VisualCloseButton
									hidden={!content.main}
									onclick={() => handleClickCloseMainContentButton(index)}
								/>
							</LayoutControl>
						</VisualPlainListItem>
					</LayoutMainNavItems>
					<LayoutMobileMainNavControl>
						<LayoutControl>
							<VisualCloseButton
								hidden={!content.main && !content.detail}
								onclick={() => handleClickCloseContentButton(index)}
							/>
						</LayoutControl>
					</LayoutMobileMainNavControl>
				</VisualMainNav>
			</LayoutMainHeaderInner>
			<LayoutExpander height={contentMainHeight}>
				<VisualScrollableArea bind:element={scrollableAreaElement}>
					<LayoutContentWrapper bind:element={contentMainWrapperElement}>...</LayoutContentWrapper>
				</VisualScrollableArea>
			</LayoutExpander>
		</LayoutWindowInner>
	</VisualWindow>
</LayoutWindow>
