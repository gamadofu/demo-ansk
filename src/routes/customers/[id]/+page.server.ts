import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { mockCustomers } from '$lib/data/mockCustomers';
import { mockOrders } from '$lib/data/mockOrders';
import { mockDeposits } from '$lib/data/mockDeposits';

// SSGの設定
export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
  const customerId = params.id;
  
  // 顧客データの取得
  const customer = mockCustomers.find(c => c.customer_id === customerId);
  
  if (!customer) {
    throw error(404, '顧客が見つかりません');
  }
  
  // この顧客の注文履歴を取得（モックデータなのでcustomer_nameで代用）
  const customerOrders = mockOrders.filter(order => order.customer_name === customer.full_name);
  
  // この顧客の入金履歴を取得し、日付の降順（新しい順）に並べ替え
  const customerDeposits = mockDeposits
    .filter(deposit => deposit.customer_id === customerId)
    .sort((a, b) => new Date(b.deposit_date).getTime() - new Date(a.deposit_date).getTime());
  
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
      createdAt: customer.created_at,
      storeType: customer.store_type,
      storeId: customer.store_id
    },
    orders: customerOrders.map(order => ({
      id: order.order_id,
      productName: order.product_name_jp,
      amount: order.product_subtotal,
      status: order.china_order_status,
      createdAt: order.created_at
    })),
    deposits: customerDeposits.map(deposit => ({
      deposit_id: deposit.deposit_id,
      customer_id: deposit.customer_id,
      deposit_date: deposit.deposit_date,
      week_type: deposit.week_type,
      amount_jpy: deposit.amount_jpy,
      yuan_conversion: deposit.yuan_conversion,
      exchange_rate: deposit.exchange_rate,
      remaining_yuan: deposit.remaining_yuan,
      remaining_jpy: deposit.remaining_jpy,
      note: deposit.note,
      customer_name: customer.full_name,
      customer_nickname: customer.nickname
    }))
  };
};
