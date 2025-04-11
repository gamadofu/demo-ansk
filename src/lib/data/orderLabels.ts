import type { Order } from "./mockOrders";

/**
 * 注文データのキーと日本語ラベルのマッピング
 */
export const orderLabels: Record<keyof Order, string> = {
  order_id: "注文ID（システム）",
  order_received_date: "受付日",
  shop_order_id: "ストア注文ID",
  customer_name: "顧客名",
  order_date: "注文日",
  product_management_number: "商品管理番号",
  product_name_jp: "商品名（日本語）",
  variation_jp: "バリエーション（日本語）",
  supplier_url_1: "仕入先URL 1",
  supplier_url_2: "仕入先URL 2",
  supplier_url_3: "仕入先URL 3",
  supplier_url_4: "仕入先URL 4",
  product_name_cn: "商品名（中国語）",
  color: "カラー",
  size: "サイズ",
  quantity: "数量",
  purchase_price_cny: "仕入価格（元）",
  china_shipping_fee_cny:
    "中国送料（元）{タオバオセラーから代行業者までの輸送で発生した、中国国内送料}",
  product_subtotal:
    "商品小計（元）{商品代金の合計（中国元） 仕入額✕個数＋中国送料}",
  color_reference_image: "色補正画像",
  color_reference_image_link: "色補正画像リンク",
  packing_notes: "特記事項「梱包」",
  inspection_notes: "検品注意事項",
  service_fee: "仕入れ代行手数料",
  material: "素材",
  china_order_status: "中国注文状況ステータス",
  procurement_report: "発注報告 （予約販売・完売など）",
  qc_number: "QC No",
  shipping_date: "発送日",
  tracking_number: "追跡番号",
  international_shipping_fee_cny: "日本までの国際送料",
  nickname: "ニックネーム",
  full_name: "氏名",
  postal_code: "郵便番号",
  address: "住所",
  phone_number: "電話番号",
  created_at: "作成日時",
  updated_at: "更新日時",
};

/**
 * 注文ステータスと日本語ラベルのマッピング
 */
export const orderStatusLabels: Record<string, string> = {
  未処理: "未処理",
  注文中: "注文中",
  交換中: "交換中",
  発送済: "発送済",
  到着済: "到着済",
};

/**
 * 注文ステータスに対応するカラークラス
 */
export const orderStatusColors: Record<string, string> = {
  未処理: "bg-gray-100 text-gray-800",
  注文中: "bg-yellow-100 text-yellow-800",
  交換中: "bg-orange-100 text-orange-800",
  発送済: "bg-blue-100 text-blue-800",
  到着済: "bg-green-100 text-green-800",
};

/**
 * 表示用のフィールドグループ
 */
export const orderFieldGroups = {
  basic: [
    "shop_order_id",
    "order_received_date",
    "order_date",
    "customer_name",
    "nickname",
    "china_order_status",
  ],
  customer: [
    "full_name",
    "postal_code",
    "address",
    "phone_number",
  ],
  product: [
    "product_management_number",
    "product_name_jp",
    "variation_jp",
    "product_name_cn",
    "color",
    "size",
    "quantity",
    "material",
  ],
  supplier: [
    "supplier_url_1",
    "supplier_url_2",
    "supplier_url_3",
    "supplier_url_4",
  ],
  price: [
    "purchase_price_cny",
    "china_shipping_fee_cny",
    "international_shipping_fee_cny",
    "product_subtotal",
    "service_fee",
  ],
  shipping: ["shipping_date", "tracking_number"],
  notes: ["packing_notes", "inspection_notes", "procurement_report"],
  system: ["created_at", "updated_at"],
};

/**
 * フィールドグループのラベル
 */
export const groupLabels = {
  basic: "基本情報",
  customer: "顧客情報",
  product: "商品情報",
  supplier: "サプライヤー情報",
  price: "価格情報",
  shipping: "配送情報",
  notes: "備考",
  system: "システム情報",
};
