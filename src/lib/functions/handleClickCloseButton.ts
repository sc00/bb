import { windows } from '$lib/shared/state.svelte';

export function handleClickCloseButton(index: number, contentHierarchy: 'main' | 'detail') {
	const targetWindow = windows.value[index];

	if (targetWindow.isMain) {
		windows.value[index].content[contentHierarchy] = null;
	} else {
		windows.value.splice(index, 1);
	}
}
