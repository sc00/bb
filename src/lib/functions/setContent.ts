// import { isMobile } from '$lib/shared/state.svelte';
import { windows } from '$lib/shared/state.svelte';

export function setContent(
	windowIndex: number,
	contentHandle: string | null,
	contentHierarchy: 'main' | 'detail'
) {
	if (contentHierarchy === 'main') {
		windows.value[windowIndex].content['detail'] = null;
	}

	windows.value[windowIndex].content[contentHierarchy] = contentHandle;
}
