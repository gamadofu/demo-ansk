import type { PageServerLoad } from './$types';
import { mockCustomers } from '$lib/data/mockCustomers';
import { mockOrders } from '$lib/data/mockOrders';

// SSGの設定
export const prerender = true;

// データの型定義
interface KPI {
  newOrders: {
    total: number;
    today: number;
    week: number;
    month: number;
    growth: number;
  };
  processingOrders: {
    total: number;
    shipping: number;
    inspection: number;
    inspectionComplete: number;
  };
  completedOrders: {
    total: number;
    today: number;
    week: number;
    month: number;
    growth: number;
  };
  revenue: {
    total: number;
    today: number;
    week: number;
    growth: number;
  };
}

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: string;
  statusColor: string;
  date: string;
}

// サーバーサイドのデータ取得ロジック
export const load: PageServerLoad = async () => {
  // モックデータから必要な情報を取得
  
  // 新規注文数の計算
  const today = new Date().toISOString().split('T')[0];
  const todayOrders = mockOrders.filter(order => order.order_received_date === today);
  
  // 1週間前の日付を計算
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const weekOrders = mockOrders.filter(order => {
    const orderDate = new Date(order.order_received_date);
    return orderDate >= oneWeekAgo;
  });
  
  // 1ヶ月前の日付を計算
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  const monthOrders = mockOrders.filter(order => {
    const orderDate = new Date(order.order_received_date);
    return orderDate >= oneMonthAgo;
  });
  
  // ステータス別の注文数を計算
  const processingOrders = mockOrders.filter(order => {
    return ['発注準備中', '発注済み', '仕入れ中', '検品中', '発送準備中'].includes(order.china_order_status);
  });
  
  const shippingOrders = mockOrders.filter(order => order.china_order_status === '発送準備中');
  const inspectionOrders = mockOrders.filter(order => order.china_order_status === '検品中');
  const inspectionCompleteOrders = mockOrders.filter(order => order.china_order_status === '発送済み');
  
  // 完了注文数の計算
  const completedOrders = mockOrders.filter(order => order.china_order_status === '完了');
  const todayCompletedOrders = completedOrders.filter(order => {
    const completedDate = order.updated_at.split('T')[0];
    return completedDate === today;
  });
  
  const weekCompletedOrders = completedOrders.filter(order => {
    const completedDate = new Date(order.updated_at);
    return completedDate >= oneWeekAgo;
  });
  
  const monthCompletedOrders = completedOrders.filter(order => {
    const completedDate = new Date(order.updated_at);
    return completedDate >= oneMonthAgo;
  });
  
  // 取引金額の計算
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.product_subtotal + order.service_fee, 0) * 20; // CNYをJPYに変換するために簡易的に20倍
  const todayRevenue = todayOrders.reduce((sum, order) => sum + order.product_subtotal + order.service_fee, 0) * 20;
  const weekRevenue = weekOrders.reduce((sum, order) => sum + order.product_subtotal + order.service_fee, 0) * 20;
  
  // 最近の注文を取得
  const recentOrders = mockOrders
    .sort((a, b) => new Date(b.order_received_date).getTime() - new Date(a.order_received_date).getTime())
    .slice(0, 5)
    .map(order => {
      // ステータスに応じた色を設定
      let statusColor = 'blue';
      if (order.china_order_status === '検品中') statusColor = 'yellow';
      if (order.china_order_status === '発送済み' || order.china_order_status === '完了') statusColor = 'green';
      
      return {
        id: order.shop_order_id,
        customer: order.customer_name,
        product: order.product_name_jp,
        amount: order.product_subtotal * 20, // CNYをJPYに変換
        status: order.china_order_status,
        statusColor,
        date: order.order_received_date
      };
    });
  
  return {
    kpi: {
      newOrders: {
        total: mockOrders.length,
        today: todayOrders.length,
        week: weekOrders.length,
        month: monthOrders.length,
        growth: 12 // 実際のデータでは前月比で計算する
      },
      processingOrders: {
        total: processingOrders.length,
        shipping: shippingOrders.length,
        inspection: inspectionOrders.length,
        inspectionComplete: inspectionCompleteOrders.length
      },
      completedOrders: {
        total: completedOrders.length,
        today: todayCompletedOrders.length,
        week: weekCompletedOrders.length,
        month: monthCompletedOrders.length,
        growth: 8 // 実際のデータでは前月比で計算する
      },
      revenue: {
        total: totalRevenue,
        today: todayRevenue,
        week: weekRevenue,
        growth: 15 // 実際のデータでは前月比で計算する
      }
    },
    recentOrders
  };
}
