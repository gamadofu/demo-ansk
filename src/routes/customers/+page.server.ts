import type { PageServerLoad } from './$types';
import { mockCustomers } from '$lib/data/mockCustomers';

// SSGの設定
export const prerender = true;

// サーバーサイドのデータ取得ロジック
export const load: PageServerLoad = async () => {
  // モックデータから顧客情報を取得
  return {
    customers: mockCustomers.map(customer => ({
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
    }))
  };
};
