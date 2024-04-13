import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],
	vitePlugin: {inspector: {toggleKeyCombo: 'meta-shift'}}, // docs: https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
	kit: {
		adapter: adapter(),
		alias: {$routes: 'src/routes', $fixtures: 'src/fixtures'},
	},
};
