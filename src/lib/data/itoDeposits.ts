import type { Deposit } from './mockDeposits';

// 伊藤健太さんの入金データ（20件）
// 最終的な残高が34,600円になるように設計
export const itoDeposits: Deposit[] = [
  // 初回入金
  {
    deposit_id: 'ito-001',
    customer_id: '5',
    deposit_date: '2024-05-10T10:30:00Z',
    week_number: 19,
    week_type: 'charge',
    amount_jpy: 50000,
    yuan_conversion: 2272.73,
    exchange_rate: 22.00,
    remaining_yuan: 2272.73,
    remaining_jpy: 50000,
    note: '初回入金',
    created_at: '2024-05-10T10:35:00Z',
    updated_at: '2024-05-10T10:35:00Z',
  },
  // 商品購入1
  {
    deposit_id: 'ito-002',
    customer_id: '5',
    deposit_date: '2024-05-25T14:15:00Z',
    week_number: 21,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 400,
    exchange_rate: null,
    remaining_yuan: 1872.73,
    remaining_jpy: null,
    note: 'Tシャツ2点',
    created_at: '2024-05-25T14:20:00Z',
    updated_at: '2024-05-25T14:20:00Z',
  },
  // 商品購入2
  {
    deposit_id: 'ito-003',
    customer_id: '5',
    deposit_date: '2024-06-05T11:45:00Z',
    week_number: 23,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 300,
    exchange_rate: null,
    remaining_yuan: 1572.73,
    remaining_jpy: null,
    note: 'スマホケース',
    created_at: '2024-06-05T11:50:00Z',
    updated_at: '2024-06-05T11:50:00Z',
  },
  // 追加入金
  {
    deposit_id: 'ito-004',
    customer_id: '5',
    deposit_date: '2024-06-20T09:30:00Z',
    week_number: 25,
    week_type: 'charge',
    amount_jpy: 30000,
    yuan_conversion: 1363.64,
    exchange_rate: 22.00,
    remaining_yuan: 2936.37,
    remaining_jpy: 64600,
    note: '追加入金',
    created_at: '2024-06-20T09:35:00Z',
    updated_at: '2024-06-20T09:35:00Z',
  },
  // 商品購入3
  {
    deposit_id: 'ito-005',
    customer_id: '5',
    deposit_date: '2024-07-05T16:20:00Z',
    week_number: 27,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 500,
    exchange_rate: null,
    remaining_yuan: 2436.37,
    remaining_jpy: null,
    note: 'イヤホン',
    created_at: '2024-07-05T16:25:00Z',
    updated_at: '2024-07-05T16:25:00Z',
  },
  // 商品購入4
  {
    deposit_id: 'ito-006',
    customer_id: '5',
    deposit_date: '2024-07-20T13:10:00Z',
    week_number: 29,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 200,
    exchange_rate: null,
    remaining_yuan: 2236.37,
    remaining_jpy: null,
    note: '文房具セット',
    created_at: '2024-07-20T13:15:00Z',
    updated_at: '2024-07-20T13:15:00Z',
  },
  // 追加入金2
  {
    deposit_id: 'ito-007',
    customer_id: '5',
    deposit_date: '2024-08-10T10:45:00Z',
    week_number: 32,
    week_type: 'charge',
    amount_jpy: 20000,
    yuan_conversion: 909.09,
    exchange_rate: 22.00,
    remaining_yuan: 3145.46,
    remaining_jpy: 69200,
    note: '追加入金',
    created_at: '2024-08-10T10:50:00Z',
    updated_at: '2024-08-10T10:50:00Z',
  },
  // 商品購入5
  {
    deposit_id: 'ito-008',
    customer_id: '5',
    deposit_date: '2024-08-25T15:30:00Z',
    week_number: 34,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 350,
    exchange_rate: null,
    remaining_yuan: 2795.46,
    remaining_jpy: null,
    note: 'ベルト',
    created_at: '2024-08-25T15:35:00Z',
    updated_at: '2024-08-25T15:35:00Z',
  },
  // 商品購入6
  {
    deposit_id: 'ito-009',
    customer_id: '5',
    deposit_date: '2024-09-05T11:20:00Z',
    week_number: 36,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 600,
    exchange_rate: null,
    remaining_yuan: 2195.46,
    remaining_jpy: null,
    note: 'バッグ',
    created_at: '2024-09-05T11:25:00Z',
    updated_at: '2024-09-05T11:25:00Z',
  },
  // 追加入金3
  {
    deposit_id: 'ito-010',
    customer_id: '5',
    deposit_date: '2024-09-20T14:15:00Z',
    week_number: 38,
    week_type: 'charge',
    amount_jpy: 40000,
    yuan_conversion: 1818.18,
    exchange_rate: 22.00,
    remaining_yuan: 4013.64,
    remaining_jpy: 88300,
    note: '追加入金',
    created_at: '2024-09-20T14:20:00Z',
    updated_at: '2024-09-20T14:20:00Z',
  },
  // 商品購入7
  {
    deposit_id: 'ito-011',
    customer_id: '5',
    deposit_date: '2024-10-05T09:45:00Z',
    week_number: 40,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 700,
    exchange_rate: null,
    remaining_yuan: 3313.64,
    remaining_jpy: null,
    note: 'スニーカー',
    created_at: '2024-10-05T09:50:00Z',
    updated_at: '2024-10-05T09:50:00Z',
  },
  // 商品購入8
  {
    deposit_id: 'ito-012',
    customer_id: '5',
    deposit_date: '2024-10-20T16:30:00Z',
    week_number: 42,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 400,
    exchange_rate: null,
    remaining_yuan: 2913.64,
    remaining_jpy: null,
    note: 'ジーンズ',
    created_at: '2024-10-20T16:35:00Z',
    updated_at: '2024-10-20T16:35:00Z',
  },
  // 追加入金4
  {
    deposit_id: 'ito-013',
    customer_id: '5',
    deposit_date: '2024-11-10T11:15:00Z',
    week_number: 45,
    week_type: 'charge',
    amount_jpy: 25000,
    yuan_conversion: 1136.36,
    exchange_rate: 22.00,
    remaining_yuan: 4050.00,
    remaining_jpy: 89100,
    note: '追加入金',
    created_at: '2024-11-10T11:20:00Z',
    updated_at: '2024-11-10T11:20:00Z',
  },
  // 商品購入9
  {
    deposit_id: 'ito-014',
    customer_id: '5',
    deposit_date: '2024-11-25T14:40:00Z',
    week_number: 47,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 500,
    exchange_rate: null,
    remaining_yuan: 3550.00,
    remaining_jpy: null,
    note: 'セーター',
    created_at: '2024-11-25T14:45:00Z',
    updated_at: '2024-11-25T14:45:00Z',
  },
  // 商品購入10
  {
    deposit_id: 'ito-015',
    customer_id: '5',
    deposit_date: '2024-12-10T10:30:00Z',
    week_number: 49,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 300,
    exchange_rate: null,
    remaining_yuan: 3250.00,
    remaining_jpy: null,
    note: '手袋',
    created_at: '2024-12-10T10:35:00Z',
    updated_at: '2024-12-10T10:35:00Z',
  },
  // 商品購入11
  {
    deposit_id: 'ito-016',
    customer_id: '5',
    deposit_date: '2024-12-25T15:20:00Z',
    week_number: 51,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 600,
    exchange_rate: null,
    remaining_yuan: 2650.00,
    remaining_jpy: null,
    note: 'コート',
    created_at: '2024-12-25T15:25:00Z',
    updated_at: '2024-12-25T15:25:00Z',
  },
  // 追加入金5
  {
    deposit_id: 'ito-017',
    customer_id: '5',
    deposit_date: '2025-01-10T09:15:00Z',
    week_number: 2,
    week_type: 'charge',
    amount_jpy: 30000,
    yuan_conversion: 1363.64,
    exchange_rate: 22.00,
    remaining_yuan: 4013.64,
    remaining_jpy: 88300,
    note: '追加入金',
    created_at: '2025-01-10T09:20:00Z',
    updated_at: '2025-01-10T09:20:00Z',
  },
  // 商品購入12
  {
    deposit_id: 'ito-018',
    customer_id: '5',
    deposit_date: '2025-01-25T13:45:00Z',
    week_number: 4,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 800,
    exchange_rate: null,
    remaining_yuan: 3213.64,
    remaining_jpy: null,
    note: 'ブーツ',
    created_at: '2025-01-25T13:50:00Z',
    updated_at: '2025-01-25T13:50:00Z',
  },
  // 最後の残高が34,600円になるように調整
  {
    deposit_id: 'ito-019',
    customer_id: '5',
    deposit_date: '2025-01-30T14:30:00Z',
    week_number: 5,
    week_type: 'consumption',
    amount_jpy: null,
    yuan_conversion: 1190.91,
    exchange_rate: null,
    remaining_yuan: 1572.73,
    remaining_jpy: null,
    note: '最終消化取引',
    created_at: '2025-01-30T14:35:00Z',
    updated_at: '2025-01-30T14:35:00Z',
  }
];
