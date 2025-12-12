import { getContentHierarchy, setContent } from '$lib/functions';

export function handleClickMainNavItem(
	event: MouseEvent & { currentTarget: HTMLAnchorElement },
	contentHandle: string,
	index: number
) {
	event.preventDefault();
	const contentHierarchy = getContentHierarchy(contentHandle);

	setContent(index, contentHandle, contentHierarchy);
}
