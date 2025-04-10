import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { mockCustomers } from '$lib/data/mockCustomers';

// 動的ルートのプリレンダリングを無効化
export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
  const customerId = params.id;
  
  // 顧客データの取得
  const customer = mockCustomers.find(c => c.customer_id === customerId);
  
  if (!customer) {
    throw error(404, '顧客が見つかりません');
  }
  
  return {
    customer: {
      id: customer.customer_id,
      name: customer.full_name,
      nickname: customer.nickname,
      email: customer.email,
      balance: customer.charge_balance,
      totalDeposit: customer.total_deposit_amount,
      depositCount: customer.total_deposit_count,
      chatworkId: customer.chatwork_id,
      spreadsheetUrl: customer.spreadsheet_url,
      createdAt: customer.created_at
    }
  };
};

export const actions: Actions = {
  default: async ({ request, params }) => {
    const customerId = params.id;
    
    // フォームデータの取得
    const formData = await request.formData();
    
    // 実際のアプリケーションではデータベースを更新
    // このモックアプリでは、実際にはデータは更新されない
    console.log('顧客情報更新:', {
      id: customerId,
      fullName: formData.get('fullName'),
      nickname: formData.get('nickname'),
      email: formData.get('email'),
      chatworkId: formData.get('chatworkId'),
      spreadsheetUrl: formData.get('spreadsheetUrl')
    });
    
    // 顧客詳細ページにリダイレクト
    return redirect(303, `/customers/${customerId}`);
  }
};
