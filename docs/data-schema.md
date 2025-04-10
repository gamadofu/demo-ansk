
```json
customers: {
  "customer_id": "顧客ID (主キー)",
  "full_name": "本名",
  "nickname": "ニックネーム",
  "email": "Email",
  "charge_balance": "チャージ金額 (現在の残高)",
  "total_deposit_amount": "累計入金額",
  "total_deposit_count": "累計入金回数",
  "created_at": "作成日時",
  "updated_at": "更新日時"
  // 他に必要な項目があれば追加 (電話番号, 住所など)
}
```json
orders: {
  "order_received_date": "受注日",
  "shop_order_id": "ショップ注文ID",
  "customer_name": "顧客名",
  "order_date": "注文日",
  "product_management_number": "商品 管理番号",
  "product_name_jp": "商品名 （日本語）",
  "variation_jp": "バリエーション （日本語）",
  "supplier_url_1": "仕入先 URL①",
  "supplier_url_2": "仕入先 URL②",
  "supplier_url_3": "仕入先 URL③",
  "supplier_url_4": "仕入先 URL④",
  "product_name_cn": "商品名 （中国語）",
  "color": "色",
  "size": "サイズ",
  "quantity": "個数",
  "purchase_price_cny": "仕入額（元）",
  "china_shipping_fee_cny": "中国送料 (元)",
  "product_subtotal": "商品代金合計", // TODO: 詳細な計算ロジック確認
  "color_reference_image": "色補足画像", // TODO: データ型確認 (URL or Path)
  "color_reference_image_link": "色補足画像リンク",
  "packing_notes": "特記事項『梱包』", // 表記揺れ考慮
  "inspection_notes": "検品の注意事項など", // 表記揺れ考慮
  "service_fee": "手数料",
  "material": "素材",
  "china_order_status": "中国注文状況ステータス", // TODO: ステータスリスト定義
  "procurement_report": "発注報告 （予約販売・完売など）",
  "qc_number": "QC No",
  "shipping_date": "発送日",
  "tracking_number": "追跡番号",
  "international_shipping_fee_cny": "日本までの国際送料（元）",
  "nickname": "ニックネーム" // TODO: 対象者確認 (顧客 or スタッフ?)
}