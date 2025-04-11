import { mockOrders } from '$lib/data/mockOrders';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const { status } = params;
  
  // ステータスに基づいて注文をフィルタリング
  const filteredOrders = mockOrders.filter(order => order.china_order_status === status);
  
  return {
    orders: filteredOrders,
    currentStatus: status
  };
}) satisfies PageServerLoad;

// SSGを有効化
export const prerender = true;
