export function getContentHierarchy(contentHandle: string) {
	const level =
		contentHandle === 'about' || contentHandle === 'leistungen' || contentHandle === 'kontakt'
			? 'main'
			: 'detail';

	return level;
}
