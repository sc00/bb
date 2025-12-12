<script lang="ts">
	import { env } from '$env/dynamic/public';

	/**
	 * PROPS
	 */
	let { file } = $props();
</script>

<img
	class="v-image"
	src={env.PUBLIC_BACKEND_URL + file.sizes.feature.url}
	alt={file.alt}
	width={file.sizes.feature.width}
	height={file.sizes.feature.height}
/>
