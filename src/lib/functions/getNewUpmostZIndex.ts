import { getUpmostZIndex } from './getUpmostZIndex';

export function getNewUpmostZIndex(windowZIndex?: number) {
	const upmostZIndex = getUpmostZIndex();
	const newUpmostZIndex = windowZIndex === upmostZIndex ? windowZIndex : upmostZIndex + 1;
	return newUpmostZIndex;
}
