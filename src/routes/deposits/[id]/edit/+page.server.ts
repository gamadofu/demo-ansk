import { mockDeposits } from '$lib/data/mockDeposits';
import { mockCustomers } from '$lib/data/mockCustomers';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  // 入金データの取得
  const deposit = mockDeposits.find(d => d.deposit_id === params.id);
  
  if (!deposit) {
    throw error(404, '入金データが見つかりません');
  }
  
  // 顧客一覧を取得
  const customers = mockCustomers.map(customer => ({
    id: customer.customer_id,
    name: customer.full_name,
    nickname: customer.nickname
  }));
  
  return {
    deposit,
    customers
  };
};
