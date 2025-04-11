import type { PageServerLoad } from './$types';

export const load = (async () => {
  // 新規注文登録ページではデータの読み込みは不要
  return {};
}) satisfies PageServerLoad;

// SSGを有効化
export const prerender = true;
