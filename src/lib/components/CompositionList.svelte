<script lang="ts">
	import LayoutListItems from './LayoutListItems.svelte';
	import LayoutSublistItems from './LayoutSublistItems.svelte';
	import VisualListItem from './VisualListItem.svelte';
	import VisualSublistItem from './VisualSublistItem.svelte';

	/**
	 * TYPES
	 */
	interface ListItem {
		id: string;
		text: string;
		subItems?: string[];
	}

	interface Props {
		items: ListItem[];
	}

	/**
	 * PROPS
	 */
	let { items }: Props = $props();
</script>

<LayoutListItems>
	{#each items as item}
		<VisualListItem>
			{item.text}
			{#if item.subItems && item.subItems.length > 0}
				<LayoutSublistItems>
					{#each item.subItems as subItem}
						<VisualSublistItem>{subItem}</VisualSublistItem>
					{/each}
				</LayoutSublistItems>
			{/if}
		</VisualListItem>
	{/each}
</LayoutListItems>
