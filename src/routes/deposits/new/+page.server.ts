import { mockCustomers } from '$lib/data/mockCustomers';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // 顧客一覧を取得
  const customers = mockCustomers.map(customer => ({
    id: customer.customer_id,
    name: customer.full_name,
    nickname: customer.nickname
  }));

  // 現在の日時を取得
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  
  // 現在の週番号を計算（1月1日を第1週とする簡易計算）
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const days = Math.floor((now.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);

  return {
    customers,
    currentDate,
    weekNumber,
    defaultExchangeRate: 20 // デフォルトの換算レート
  };
};
