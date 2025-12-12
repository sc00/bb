export interface PageData {
	content: Record<string, []>;
}

export interface Window {
	handle: string;
	isMain: boolean;
	position: {
		zIndex: number;
		top: number | null;
		right: number | null;
		bottom: number | null;
		left: number | null;
	};
	content: {
		main: string | null;
		detail: string | null;
	};
	element: HTMLDivElement | null;
}
