import { v4 as uuidv4 } from 'uuid';

export type Order = {
  order_id: string;
  order_received_date: string;
  shop_order_id: string;
  customer_name: string;
  order_date: string;
  product_management_number: string;
  product_name_jp: string;
  variation_jp: string;
  supplier_url_1?: string;
  supplier_url_2?: string;
  supplier_url_3?: string;
  supplier_url_4?: string;
  product_name_cn?: string;
  color?: string;
  size?: string;
  quantity: number;
  purchase_price_cny: number;
  china_shipping_fee_cny?: number;
  product_subtotal: number;
  color_reference_image?: string;
  color_reference_image_link?: string;
  packing_notes?: string;
  inspection_notes?: string;
  service_fee: number;
  material?: string;
  china_order_status: OrderStatus;
  procurement_report?: string;
  qc_number?: string;
  shipping_date?: string;
  tracking_number?: string;
  international_shipping_fee_cny?: number;
  nickname?: string;
  created_at: string;
  updated_at: string;
};

export type OrderStatus = 
  | '注文確認中' 
  | '入金待ち' 
  | '発注準備中' 
  | '発注済み' 
  | '仕入れ中' 
  | '検品中' 
  | '発送準備中' 
  | '発送済み' 
  | '配送中' 
  | '完了';

// 注文のモックデータ
export const mockOrders: Order[] = [
  {
    order_id: uuidv4(),
    order_received_date: '2025-04-09',
    shop_order_id: 'ORD-001',
    customer_name: '田中太郎',
    order_date: '2025-04-08',
    product_management_number: 'P001',
    product_name_jp: 'ブランドTシャツ',
    variation_jp: 'ホワイト',
    supplier_url_1: 'https://example.com/supplier1/product1',
    product_name_cn: '品牌T恤',
    color: 'ホワイト',
    size: 'M',
    quantity: 2,
    purchase_price_cny: 120,
    china_shipping_fee_cny: 20,
    product_subtotal: 260,
    service_fee: 500,
    material: '綿100%',
    china_order_status: '発注済み',
    created_at: '2025-04-09T09:30:00Z',
    updated_at: '2025-04-09T09:30:00Z',
  },
  {
    order_id: uuidv4(),
    order_received_date: '2025-04-08',
    shop_order_id: 'ORD-002',
    customer_name: '佐藤花子',
    order_date: '2025-04-07',
    product_management_number: 'P002',
    product_name_jp: 'デニムパンツ',
    variation_jp: 'ブルー',
    supplier_url_1: 'https://example.com/supplier2/product2',
    product_name_cn: '牛仔裤',
    color: 'ブルー',
    size: 'S',
    quantity: 1,
    purchase_price_cny: 280,
    china_shipping_fee_cny: 30,
    product_subtotal: 310,
    service_fee: 600,
    material: 'デニム',
    china_order_status: '発注準備中',
    created_at: '2025-04-08T14:20:00Z',
    updated_at: '2025-04-08T14:20:00Z',
  },
  {
    order_id: uuidv4(),
    order_received_date: '2025-04-08',
    shop_order_id: 'ORD-003',
    customer_name: '鈴木一郎',
    order_date: '2025-04-06',
    product_management_number: 'P003',
    product_name_jp: 'スニーカー',
    variation_jp: 'ブラック',
    supplier_url_1: 'https://example.com/supplier3/product3',
    product_name_cn: '运动鞋',
    color: 'ブラック',
    size: '26.5cm',
    quantity: 1,
    purchase_price_cny: 350,
    china_shipping_fee_cny: 40,
    product_subtotal: 390,
    service_fee: 700,
    material: '合成皮革',
    china_order_status: '注文確認中',
    created_at: '2025-04-08T10:15:00Z',
    updated_at: '2025-04-08T10:15:00Z',
  },
  {
    order_id: uuidv4(),
    order_received_date: '2025-04-07',
    shop_order_id: 'ORD-004',
    customer_name: '高橋美咲',
    order_date: '2025-04-05',
    product_management_number: 'P004',
    product_name_jp: 'ハンドバッグ',
    variation_jp: 'ブラウン',
    supplier_url_1: 'https://example.com/supplier4/product4',
    product_name_cn: '手提包',
    color: 'ブラウン',
    size: 'フリー',
    quantity: 1,
    purchase_price_cny: 580,
    china_shipping_fee_cny: 50,
    product_subtotal: 630,
    service_fee: 900,
    material: 'PUレザー',
    china_order_status: '入金待ち',
    created_at: '2025-04-07T16:40:00Z',
    updated_at: '2025-04-07T16:40:00Z',
  },
  {
    order_id: uuidv4(),
    order_received_date: '2025-04-07',
    shop_order_id: 'ORD-005',
    customer_name: '伊藤健太',
    order_date: '2025-04-04',
    product_management_number: 'P005',
    product_name_jp: 'スマートウォッチ',
    variation_jp: 'シルバー',
    supplier_url_1: 'https://example.com/supplier5/product5',
    product_name_cn: '智能手表',
    color: 'シルバー',
    size: 'フリー',
    quantity: 1,
    purchase_price_cny: 480,
    china_shipping_fee_cny: 30,
    product_subtotal: 510,
    service_fee: 800,
    material: 'メタル',
    china_order_status: '発送済み',
    shipping_date: '2025-04-06',
    tracking_number: 'TRK123456789',
    created_at: '2025-04-07T11:30:00Z',
    updated_at: '2025-04-07T11:30:00Z',
  },
  {
    order_id: uuidv4(),
    order_received_date: '2025-04-06',
    shop_order_id: 'ORD-006',
    customer_name: '渡辺直美',
    order_date: '2025-04-03',
    product_management_number: 'P006',
    product_name_jp: 'ワンピース',
    variation_jp: 'ピンク',
    supplier_url_1: 'https://example.com/supplier6/product6',
    product_name_cn: '连衣裙',
    color: 'ピンク',
    size: 'M',
    quantity: 1,
    purchase_price_cny: 320,
    china_shipping_fee_cny: 25,
    product_subtotal: 345,
    service_fee: 650,
    material: 'ポリエステル',
    china_order_status: '検品中',
    created_at: '2025-04-06T13:20:00Z',
    updated_at: '2025-04-06T13:20:00Z',
  },
  {
    order_id: uuidv4(),
    order_received_date: '2025-04-06',
    shop_order_id: 'ORD-007',
    customer_name: '山田健太郎',
    order_date: '2025-04-02',
    product_management_number: 'P007',
    product_name_jp: 'ジャケット',
    variation_jp: 'ネイビー',
    supplier_url_1: 'https://example.com/supplier7/product7',
    product_name_cn: '夹克',
    color: 'ネイビー',
    size: 'L',
    quantity: 1,
    purchase_price_cny: 420,
    china_shipping_fee_cny: 35,
    product_subtotal: 455,
    service_fee: 750,
    material: 'ポリエステル65%、綿35%',
    china_order_status: '仕入れ中',
    created_at: '2025-04-06T09:45:00Z',
    updated_at: '2025-04-06T09:45:00Z',
  },
  {
    order_id: uuidv4(),
    order_received_date: '2025-04-05',
    shop_order_id: 'ORD-008',
    customer_name: '小林さくら',
    order_date: '2025-04-01',
    product_management_number: 'P008',
    product_name_jp: 'サングラス',
    variation_jp: 'ブラック',
    supplier_url_1: 'https://example.com/supplier8/product8',
    product_name_cn: '太阳镜',
    color: 'ブラック',
    size: 'フリー',
    quantity: 1,
    purchase_price_cny: 150,
    china_shipping_fee_cny: 15,
    product_subtotal: 165,
    service_fee: 400,
    material: 'プラスチック',
    china_order_status: '発送準備中',
    created_at: '2025-04-05T15:10:00Z',
    updated_at: '2025-04-05T15:10:00Z',
  },
  {
    order_id: uuidv4(),
    order_received_date: '2025-04-05',
    shop_order_id: 'ORD-009',
    customer_name: '加藤大輔',
    order_date: '2025-03-31',
    product_management_number: 'P009',
    product_name_jp: 'ベルト',
    variation_jp: 'ブラウン',
    supplier_url_1: 'https://example.com/supplier9/product9',
    product_name_cn: '腰带',
    color: 'ブラウン',
    size: '100cm',
    quantity: 1,
    purchase_price_cny: 90,
    china_shipping_fee_cny: 10,
    product_subtotal: 100,
    service_fee: 300,
    material: '本革',
    china_order_status: '完了',
    shipping_date: '2025-04-03',
    tracking_number: 'TRK987654321',
    created_at: '2025-04-05T10:30:00Z',
    updated_at: '2025-04-05T10:30:00Z',
  },
  {
    order_id: uuidv4(),
    order_received_date: '2025-04-04',
    shop_order_id: 'ORD-010',
    customer_name: '中村優子',
    order_date: '2025-03-30',
    product_management_number: 'P010',
    product_name_jp: 'ニット帽',
    variation_jp: 'グレー',
    supplier_url_1: 'https://example.com/supplier10/product10',
    product_name_cn: '针织帽',
    color: 'グレー',
    size: 'フリー',
    quantity: 2,
    purchase_price_cny: 60,
    china_shipping_fee_cny: 10,
    product_subtotal: 130,
    service_fee: 350,
    material: 'アクリル',
    china_order_status: '配送中',
    shipping_date: '2025-04-02',
    tracking_number: 'TRK456789123',
    created_at: '2025-04-04T14:15:00Z',
    updated_at: '2025-04-04T14:15:00Z',
  },
];

// 注文の合計数を取得する関数
export function getOrderCount(): number {
  return mockOrders.length;
}

// 今日の新規注文数を取得する関数
export function getTodayOrderCount(): number {
  const today = new Date().toISOString().split('T')[0];
  return mockOrders.filter(order => order.order_received_date === today).length;
}

// 対応中の注文数を取得する関数
export function getInProgressOrderCount(): number {
  const completedStatuses: OrderStatus[] = ['発送済み', '配送中', '完了'];
  return mockOrders.filter(order => !completedStatuses.includes(order.china_order_status)).length;
}

// 完了した注文数を取得する関数
export function getCompletedOrderCount(): number {
  const completedStatuses: OrderStatus[] = ['発送済み', '配送中', '完了'];
  return mockOrders.filter(order => completedStatuses.includes(order.china_order_status)).length;
}

// 今日の完了注文数を取得する関数
export function getTodayCompletedOrderCount(): number {
  const today = new Date().toISOString().split('T')[0];
  const completedStatuses: OrderStatus[] = ['発送済み', '配送中', '完了'];
  return mockOrders.filter(
    order => 
      completedStatuses.includes(order.china_order_status) && 
      order.shipping_date === today
  ).length;
}

// 注文の合計金額を取得する関数
export function getTotalOrderAmount(): number {
  return mockOrders.reduce((total, order) => total + order.product_subtotal + order.service_fee, 0);
}

// 今日の取引金額を取得する関数
export function getTodayOrderAmount(): number {
  const today = new Date().toISOString().split('T')[0];
  return mockOrders
    .filter(order => order.order_received_date === today)
    .reduce((total, order) => total + order.product_subtotal + order.service_fee, 0);
}
