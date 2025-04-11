import { mockOrders } from '$lib/data/mockOrders';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {
    orders: mockOrders
  };
}) satisfies PageServerLoad;

// SSGを有効化
export const prerender = true;
