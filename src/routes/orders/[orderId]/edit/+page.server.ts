import { mockOrders } from '$lib/data/mockOrders';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const { orderId } = params;
  
  const order = mockOrders.find(order => order.order_id === orderId);
  
  if (!order) {
    throw error(404, '注文が見つかりません');
  }
  
  return {
    order
  };
}) satisfies PageServerLoad;

// SSGを有効化
export const prerender = true;
