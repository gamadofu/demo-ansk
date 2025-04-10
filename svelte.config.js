import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// フォームアクションを含むページのエラーを無視
				if (path.includes('/customers/new') || path.includes('/edit')) {
					return;
				}
				
				// それ以外のエラーは通常通り処理
				console.error(`${path} からのエラー: ${message}`);
				throw new Error(message);
			}
		}
	}
};

export default config;
