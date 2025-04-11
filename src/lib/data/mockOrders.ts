// 固定のIDを使用するように変更

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
  full_name?: string;
  postal_code?: string;
  address?: string;
  phone_number?: string;
  created_at: string;
  updated_at: string;
};

export type OrderStatus = "未処理" | "注文中" | "交換中" | "発送済" | "到着済";

// 注文のモックデータ
export const mockOrders: Order[] = [
  {
    order_id: "order-011",
    order_received_date: "2025-04-11",
    shop_order_id: "ORD-011",
    customer_name: "山田花子",
    order_date: "2025-04-11",
    product_management_number: "P011",
    product_name_jp: "カシミアセーター",
    variation_jp: "ベージュ",
    supplier_url_1: "https://example.com/supplier11/product11",
    product_name_cn: "羊绒衣",
    color: "ベージュ",
    size: "L",
    quantity: 1,
    purchase_price_cny: 450,
    china_shipping_fee_cny: 35,
    product_subtotal: 485,
    service_fee: 800,
    material: "カシミア100%",
    china_order_status: "未処理",
    full_name: "山田 花子",
    postal_code: "567-8901",
    address: "福岡県福岡市博多区博多5-5-5",
    phone_number: "092-567-8901",
    created_at: "2025-04-11T08:15:00Z",
    updated_at: "2025-04-11T08:15:00Z",
  },
  {
    order_id: "order-001",
    order_received_date: "2025-04-09",
    shop_order_id: "ORD-001",
    customer_name: "田中太郎",
    order_date: "2025-04-08",
    product_management_number: "P001",
    product_name_jp: "ブランドTシャツ",
    variation_jp: "ホワイト",
    supplier_url_1: "https://example.com/supplier1/product1",
    product_name_cn: "品牌T恤",
    color: "ホワイト",
    size: "M",
    quantity: 2,
    purchase_price_cny: 120,
    china_shipping_fee_cny: 20,
    product_subtotal: 260,
    service_fee: 500,
    material: "綿100%",
    china_order_status: "未処理",
    full_name: "田中 太郎",
    postal_code: "123-4567",
    address: "東京都渋谷区渋谷1-1-1",
    phone_number: "03-1234-5678",
    created_at: "2025-04-09T09:30:00Z",
    updated_at: "2025-04-09T09:30:00Z",
  },
  {
    order_id: "order-002",
    order_received_date: "2025-04-08",
    shop_order_id: "ORD-002",
    customer_name: "佐藤花子",
    order_date: "2025-04-07",
    product_management_number: "P002",
    product_name_jp: "デニムパンツ",
    variation_jp: "ブルー",
    supplier_url_1: "https://example.com/supplier2/product2",
    product_name_cn: "牛仔裤",
    color: "ブルー",
    size: "S",
    quantity: 1,
    purchase_price_cny: 280,
    china_shipping_fee_cny: 30,
    product_subtotal: 310,
    service_fee: 600,
    material: "デニム",
    china_order_status: "注文中",
    full_name: "佐藤 花子",
    postal_code: "234-5678",
    address: "大阪府大阪市中央区大阪2-2-2",
    phone_number: "06-2345-6789",
    created_at: "2025-04-08T14:20:00Z",
    updated_at: "2025-04-08T14:20:00Z",
  },
  {
    order_id: "order-003",
    order_received_date: "2025-04-08",
    shop_order_id: "ORD-003",
    customer_name: "鈴木一郎",
    order_date: "2025-04-06",
    product_management_number: "P003",
    product_name_jp: "レザーバッグ",
    variation_jp: "ブラック",
    supplier_url_1: "https://example.com/supplier3/product3",
    product_name_cn: "皮包",
    color: "ブラック",
    size: "フリー",
    quantity: 1,
    purchase_price_cny: 350,
    china_shipping_fee_cny: 40,
    product_subtotal: 390,
    service_fee: 700,
    material: "合成皮革",
    china_order_status: "注文中",
    full_name: "鈴木 一郎",
    postal_code: "345-6789",
    address: "愛知県名古屋市中区名古屋3-3-3",
    phone_number: "052-345-6789",
    created_at: "2025-04-08T10:15:00Z",
    updated_at: "2025-04-08T10:15:00Z",
  },
  {
    order_id: "order-004",
    order_received_date: "2025-04-07",
    shop_order_id: "ORD-004",
    customer_name: "高橋美咲",
    order_date: "2025-04-05",
    product_management_number: "P004",
    product_name_jp: "ハンドバッグ",
    variation_jp: "ブラウン",
    supplier_url_1: "https://example.com/supplier4/product4",
    product_name_cn: "手提包",
    color: "ブラウン",
    size: "フリー",
    quantity: 1,
    purchase_price_cny: 580,
    china_shipping_fee_cny: 50,
    product_subtotal: 630,
    service_fee: 900,
    material: "PUレザー",
    china_order_status: "未処理",
    full_name: "高橋 美咲",
    postal_code: "456-7890",
    address: "兵庫県神戸市中央区三宅井通4-4-4",
    phone_number: "078-456-7890",
    created_at: "2025-04-07T16:40:00Z",
    updated_at: "2025-04-07T16:40:00Z",
  },
  {
    order_id: "order-005",
    order_received_date: "2025-04-07",
    shop_order_id: "ORD-005",
    customer_name: "伊藤健太",
    order_date: "2025-04-04",
    product_management_number: "P005",
    product_name_jp: "スマートウォッチ",
    variation_jp: "シルバー",
    supplier_url_1: "https://example.com/supplier5/product5",
    product_name_cn: "智能手表",
    color: "シルバー",
    size: "フリー",
    quantity: 1,
    purchase_price_cny: 480,
    china_shipping_fee_cny: 30,
    product_subtotal: 510,
    service_fee: 800,
    material: "メタル",
    china_order_status: "発送済み",
    shipping_date: "2025-04-06",
    tracking_number: "TRK123456789",
    created_at: "2025-04-07T11:30:00Z",
    updated_at: "2025-04-07T11:30:00Z",
  },
  {
    order_id: "order-006",
    order_received_date: "2025-04-06",
    shop_order_id: "ORD-006",
    customer_name: "渡辺直美",
    order_date: "2025-04-03",
    product_management_number: "P006",
    product_name_jp: "ワンピース",
    variation_jp: "ピンク",
    supplier_url_1: "https://example.com/supplier6/product6",
    product_name_cn: "连衣裙",
    color: "ピンク",
    size: "M",
    quantity: 1,
    purchase_price_cny: 320,
    china_shipping_fee_cny: 25,
    product_subtotal: 345,
    service_fee: 650,
    material: "ポリエステル",
    china_order_status: "交換中",
    created_at: "2025-04-06T13:20:00Z",
    updated_at: "2025-04-06T13:20:00Z",
  },
  {
    order_id: "order-007",
    order_received_date: "2025-04-06",
    shop_order_id: "ORD-007",
    customer_name: "山田健太郎",
    order_date: "2025-04-02",
    product_management_number: "P007",
    product_name_jp: "ジャケット",
    variation_jp: "ネイビー",
    supplier_url_1: "https://example.com/supplier7/product7",
    product_name_cn: "夹克",
    color: "ネイビー",
    size: "L",
    quantity: 1,
    purchase_price_cny: 420,
    china_shipping_fee_cny: 35,
    product_subtotal: 455,
    service_fee: 750,
    material: "ポリエステル65%、綿35%",
    china_order_status: "注文中",
    created_at: "2025-04-06T09:45:00Z",
    updated_at: "2025-04-06T09:45:00Z",
  },
  {
    order_id: "order-008",
    order_received_date: "2025-04-05",
    shop_order_id: "ORD-008",
    customer_name: "小林さくら",
    order_date: "2025-04-01",
    product_management_number: "P008",
    product_name_jp: "サングラス",
    variation_jp: "ブラック",
    supplier_url_1: "https://example.com/supplier8/product8",
    product_name_cn: "太阳镜",
    color: "ブラック",
    size: "フリー",
    quantity: 1,
    purchase_price_cny: 150,
    china_shipping_fee_cny: 15,
    product_subtotal: 165,
    service_fee: 400,
    material: "プラスチック",
    china_order_status: "注文中",
    created_at: "2025-04-05T15:10:00Z",
    updated_at: "2025-04-05T15:10:00Z",
  },
  {
    order_id: "order-009",
    order_received_date: "2025-04-05",
    shop_order_id: "ORD-009",
    customer_name: "加藤大輔",
    order_date: "2025-03-31",
    product_management_number: "P009",
    product_name_jp: "ベルト",
    variation_jp: "ブラウン",
    supplier_url_1: "https://example.com/supplier9/product9",
    product_name_cn: "腰带",
    color: "ブラウン",
    size: "100cm",
    quantity: 1,
    purchase_price_cny: 90,
    china_shipping_fee_cny: 10,
    product_subtotal: 100,
    service_fee: 300,
    material: "本革",
    china_order_status: "到着済",
    shipping_date: "2025-04-03",
    tracking_number: "TRK987654321",
    created_at: "2025-04-05T10:30:00Z",
    updated_at: "2025-04-05T10:30:00Z",
  },
  {
    order_id: "order-010",
    order_received_date: "2025-04-04",
    shop_order_id: "ORD-010",
    customer_name: "中村優子",
    order_date: "2025-03-30",
    product_management_number: "P010",
    product_name_jp: "ニット帽",
    variation_jp: "グレー",
    supplier_url_1: "https://example.com/supplier10/product10",
    product_name_cn: "针织帽",
    color: "グレー",
    size: "フリー",
    quantity: 2,
    purchase_price_cny: 60,
    china_shipping_fee_cny: 10,
    product_subtotal: 130,
    service_fee: 350,
    material: "アクリル",
    china_order_status: "発送済",
    shipping_date: "2025-04-02",
    tracking_number: "TRK456789123",
    created_at: "2025-04-04T14:15:00Z",
    updated_at: "2025-04-04T14:15:00Z",
  },
];

// 注文の合計数を取得する関数
export function getOrderCount(): number {
  return mockOrders.length;
}

// 今日の新規注文数を取得する関数
export function getTodayOrderCount(): number {
  const today = new Date().toISOString().split("T")[0];
  return mockOrders.filter((order) => order.order_received_date === today)
    .length;
}

// 対応中の注文数を取得する関数
export function getInProgressOrderCount(): number {
  const completedStatuses: OrderStatus[] = ["発送済", "到着済"];
  return mockOrders.filter(
    (order) => !completedStatuses.includes(order.china_order_status)
  ).length;
}

// 完了した注文数を取得する関数
export function getCompletedOrderCount(): number {
  const completedStatuses: OrderStatus[] = ["発送済", "到着済"];
  return mockOrders.filter((order) =>
    completedStatuses.includes(order.china_order_status)
  ).length;
}

// 未処理の注文数を取得する関数
export function getUnprocessedOrderCount(): number {
  return mockOrders.filter((order) => order.china_order_status === "未処理").length;
}

// 指定したステータスの注文数を取得する関数
export function getOrderCountByStatus(status: OrderStatus): number {
  return mockOrders.filter((order) => order.china_order_status === status).length;
}

// 今日の完了注文数を取得する関数
export function getTodayCompletedOrderCount(): number {
  const today = new Date().toISOString().split("T")[0];
  const completedStatuses: OrderStatus[] = ["発送済", "到着済"];
  return mockOrders.filter(
    (order) =>
      completedStatuses.includes(order.china_order_status) &&
      order.shipping_date === today
  ).length;
}

// 注文の合計金額を取得する関数
export function getTotalOrderAmount(): number {
  return mockOrders.reduce(
    (total, order) => total + order.product_subtotal + order.service_fee,
    0
  );
}

// 今日の取引金額を取得する関数
export function getTodayOrderAmount(): number {
  const today = new Date().toISOString().split("T")[0];
  return mockOrders
    .filter((order) => order.order_received_date === today)
    .reduce(
      (total, order) => total + order.product_subtotal + order.service_fee,
      0
    );
}
