import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // アクションを持つページのエラーを無視する
        if (message.includes('Cannot prerender pages with actions')) {
          return;
        }
        
        // その他のエラーはコンソールに表示
        console.warn(`${path} のプレレンダリングに失敗しました。参照元: ${referrer}\n${message}`);
      }
    }
  },
};

export default config;
