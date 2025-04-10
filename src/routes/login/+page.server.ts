import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { validateCredentials } from '$lib/utils/auth';

// ログインページのロード処理
export const load: PageServerLoad = async ({ cookies, url }) => {
  // すでに認証済みの場合はダッシュボードにリダイレクト
  if (cookies.get('authenticated') === 'true') {
    throw redirect(302, '/');
  }
  
  // ログイン失敗時のエラーメッセージをURLクエリから取得
  const error = url.searchParams.get('error');
  
  return {
    error
  };
};

// ログインフォームの送信処理
export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    
    if (validateCredentials(username, password)) {
      // 認証成功の場合、クッキーを設定
      cookies.set('authenticated', 'true', {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 1日
      });
      
      // ダッシュボードにリダイレクト
      throw redirect(302, '/');
    }
    
    // 認証失敗の場合、エラーを返す
    return {
      success: false,
      message: 'ユーザー名またはパスワードが正しくありません'
    };
  }
};
