import { getUpmostZIndex } from '$lib/functions';

export function getInitialMobileWindowPosition() {
	return {
		zIndex: getUpmostZIndex(),
		top: null,
		right: null,
		bottom: 0,
		left: 0
	};
}
