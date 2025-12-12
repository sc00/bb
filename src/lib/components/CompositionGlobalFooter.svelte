<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { callWindow, setContent } from '$lib/functions';
	import { isMobile } from '$lib/shared/state.svelte';
	import LayoutMainFooter from '$lib/components/LayoutMainFooter.svelte';
	import VisualMainFooterNav from '$lib/components/VisualMainFooterNav.svelte';
	import LayoutMainFooterListItems from '$lib/components/LayoutMainFooterListItems.svelte';
	import VisualPlainListItem from '$lib/components/VisualPlainListItem.svelte';
	import VisualFooterNavLink from '$lib/components/VisualFooterNavLink.svelte';
	import VisualLinkedInLink from '$lib/components/VisualLinkedInLink.svelte';

	/**
	 * FUNCTIONS
	 */
	function handleClickFooterNavItem(event: Event, handle: string) {
		event.preventDefault();

		if (isMobile.value) {
			setContent(0, null, 'main');
			setContent(0, handle, 'detail');
		} else {
			callWindow(handle, false, { main: null, detail: handle });
		}
	}
</script>

<LayoutMainFooter element="footer">
	<VisualMainFooterNav>
		<LayoutMainFooterListItems element="ul">
			<VisualPlainListItem>
				<VisualFooterNavLink
					href="#impressum"
					label="Impressum"
					onclick={(event) => handleClickFooterNavItem(event, 'impressum')}
				/>
			</VisualPlainListItem>
			<VisualPlainListItem>
				<VisualFooterNavLink
					href="#datenschutz"
					label="Datenschutz"
					onclick={(event) => handleClickFooterNavItem(event, 'datenschutz')}
				/>
			</VisualPlainListItem>
			<VisualPlainListItem>
				<VisualLinkedInLink href="https://www.linkedin.com" />
			</VisualPlainListItem>
		</LayoutMainFooterListItems>
	</VisualMainFooterNav>
</LayoutMainFooter>
