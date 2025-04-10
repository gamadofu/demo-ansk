import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, cookies }) => {
  // 認証済みかどうかをクッキーでチェック
  const isAuthenticated = cookies.get('authenticated') === 'true';
  
  // ログインページへのアクセスの場合は認証チェックをスキップ
  if (url.pathname === '/login') {
    return {};
  }
  
  // 認証チェック
  if (!isAuthenticated) {
    // 認証失敗の場合、ログインページにリダイレクト
    throw redirect(302, '/login');
  }
  
  return {};
};
