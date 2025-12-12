<script lang="ts">
	/**
	 * IMPORTS
	 */
	import '$lib/scss/global.scss';
	import { onMount } from 'svelte';
	import { canvasElement, windows } from '$lib/shared/state.svelte';
	import { callWindow, handleMouseDown, handleTouchStart, setIsMobile } from '$lib/functions';
	import favicon from '$lib/assets/favicon.svg';
	import VisualPage from '$lib/components/VisualPage.svelte';
	import LayoutPage from '$lib/components/LayoutPage.svelte';
	import CompositionMainWindow from '$lib/components/CompositionMainWindow.svelte';
	import LayoutCanvas from '$lib/components/LayoutCanvas.svelte';
	import CompositionDetailWindow from '$lib/components/CompositionDetailWindow.svelte';
	import CompositionGlobalFooter from '$lib/components/CompositionGlobalFooter.svelte';

	/**
	 * PROPS
	 */
	let { data } = $props();

	/**
	 * HOOKS
	 */
	onMount(() => {
		setIsMobile();
		callWindow('main', true, { main: null, detail: null });
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<LayoutPage>
	<VisualPage>
		<LayoutCanvas bind:element={canvasElement.value}>
			{#each windows.value as { handle, isMain, position, content }, index}
				{#if isMain}
					<CompositionMainWindow
						{index}
						{handle}
						{content}
						{position}
						onmousedown={(event) => handleMouseDown(event, index)}
						ontouchstart={(event) => handleTouchStart(event, index)}
					/>
				{/if}
			{/each}
		</LayoutCanvas>
		<CompositionGlobalFooter />
	</VisualPage>
</LayoutPage>
