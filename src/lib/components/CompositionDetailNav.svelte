<script lang="ts">
	/**
	 * IMPORTS
	 */
	import VisualDetailNav from './VisualDetailNav.svelte';
	import LayoutDetailNavItems from './LayoutDetailNavItems.svelte';
	import VisualPlainListItem from './VisualPlainListItem.svelte';
	import VisualDetailNavLink from './VisualDetailNavLink.svelte';

	/**
	 * PROPS
	 */
	let { items, onclickdetailnavlink = $bindable() } = $props();
</script>

<VisualDetailNav>
	<LayoutDetailNavItems element="ul">
		{#each items as { window, label }}
			<VisualPlainListItem>
				<VisualDetailNavLink
					href={window.slug}
					label={label || window.title}
					onclick={(event) => onclickdetailnavlink(event, window.slug)}
				/>
			</VisualPlainListItem>
		{/each}
	</LayoutDetailNavItems>
</VisualDetailNav>
