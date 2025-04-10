import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { mockCustomers } from '$lib/data/mockCustomers';

// フォームアクションを含むページはプリレンダリングできない
export const prerender = false;

export const load: PageServerLoad = async () => {
  // 新規顧客登録ページのロード処理
  return {};
};

export const actions: Actions = {
  default: async ({ request }) => {
    // フォームデータの取得
    const formData = await request.formData();
    
    // 顧客IDの生成（実際のアプリケーションではデータベースで自動生成されるか、UUIDなどを使用）
    const newCustomerId = String(mockCustomers.length + 1);
    
    // 現在の日時
    const now = new Date().toISOString();
    
    // 新しい顧客データの作成
    const newCustomer = {
      customer_id: newCustomerId,
      full_name: formData.get('fullName') as string,
      nickname: formData.get('nickname') as string,
      email: formData.get('email') as string,
      charge_balance: 0, // 初期残高は0
      total_deposit_amount: 0, // 初期入金額は0
      total_deposit_count: 0, // 初期入金回数は0
      chatwork_id: formData.get('chatworkId') as string,
      spreadsheet_url: formData.get('spreadsheetUrl') as string,
      created_at: now,
      updated_at: now
    };
    
    // 実際のアプリケーションではデータベースに保存
    // このモックアプリでは、実際にはデータは保存されない
    console.log('新規顧客登録:', newCustomer);
    
    // 顧客一覧ページにリダイレクト
    return redirect(303, '/customers');
  }
};
