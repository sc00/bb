<script lang="ts">
	import LayoutIndent from './LayoutIndent.svelte';
	import LayoutStack from './LayoutStack.svelte';
	import VisualReadMoreLink from './VisualReadMoreLink.svelte';
	import VisualParagraph from './VisualParagraph.svelte';
	import VisualSmallHeading from './VisualSmallHeading.svelte';
	import { bringWindowToFront, getWindowByHandle, setContent } from '$lib/functions';

	/**
	 * TYPES
	 */
	interface Props {
		text: string;
	}

	/**
	 * PROPS
	 */
	let { text }: Props = $props();

	/**
	 * FUNCTIONS
	 */
	function handleClick(event: MouseEvent) {
		event.preventDefault();
		const window = getWindowByHandle('main');
		bringWindowToFront(window.index, window.window!.position.zIndex);
		setContent(window.index, 'kontakt', 'main');
	}
</script>

<LayoutStack>
	<VisualSmallHeading text="So starten wir:" />
	<LayoutIndent>
		<LayoutStack>
			<VisualParagraph getInTouch>{text}</VisualParagraph>
			<VisualReadMoreLink href="#kontakt" label="Kontakt" onclick={handleClick} />
		</LayoutStack>
	</LayoutIndent>
</LayoutStack>
