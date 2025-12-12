export function getInitialWindowObject(
	handle: string,
	isMain: boolean,
	content: { main: string | null; detail: string | null }
) {
	return {
		handle,
		isMain,
		position: {
			zIndex: 0,
			top: -9999,
			right: null,
			bottom: null,
			left: -9999
		},
		content,
		element: null
	};
}
