import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { mockCustomers } from '$lib/data/mockCustomers';
import { mockOrders } from '$lib/data/mockOrders';

// 動的ルートのプリレンダリングを無効化
export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
  const customerId = params.id;
  
  // 顧客データの取得
  const customer = mockCustomers.find(c => c.customer_id === customerId);
  
  if (!customer) {
    throw error(404, '顧客が見つかりません');
  }
  
  // この顧客の注文履歴を取得（モックデータなのでcustomer_nameで代用）
  const customerOrders = mockOrders.filter(order => order.customer_name === customer.full_name);
  
  // 入金履歴（モックデータなので仮の入金履歴を生成）
  const deposits = Array(customer.total_deposit_count).fill(null).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (index * 15)); // 15日ごとに過去の入金があったと仮定
    
    return {
      id: `dep-${customerId}-${index + 1}`,
      amount: Math.floor(Math.random() * 50000) + 10000, // 10,000円〜60,000円のランダムな金額
      date: date.toISOString(),
      method: ['銀行振込', 'クレジットカード', 'PayPal'][Math.floor(Math.random() * 3)],
      note: index === 0 ? '初回入金' : ''
    };
  });
  
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
    },
    orders: customerOrders.map(order => ({
      id: order.order_id,
      productName: order.product_name_jp,
      amount: order.product_subtotal,
      status: order.china_order_status,
      createdAt: order.created_at
    })),
    deposits
  };
};
