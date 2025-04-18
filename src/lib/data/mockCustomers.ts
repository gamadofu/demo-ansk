
export type Customer = {
  customer_id: string;
  full_name: string;
  nickname: string;
  email: string;
  charge_balance: number;
  total_deposit_amount: number;
  total_deposit_count: number;
  chatwork_id: string;
  spreadsheet_url: string;
  created_at: string;
  updated_at: string;
  store_type: 'base' | 'shopify';
  store_id: string;
};

// 顧客のモックデータ
export const mockCustomers: Customer[] = [
  {
    customer_id: '1',
    full_name: '田中太郎',
    nickname: 'タロー',
    email: 'taro.tanaka@example.com',
    charge_balance: 45000,
    total_deposit_amount: 120000,
    total_deposit_count: 3,
    chatwork_id: 'tanaka_taro',
    spreadsheet_url: 'https://docs.google.com/spreadsheets/d/1abc123/edit',
    created_at: '2024-12-15T09:30:00Z',
    updated_at: '2025-03-20T14:45:00Z',
    store_type: 'base',
    store_id: 'base_12345',
  },
  {
    customer_id: '2',
    full_name: '佐藤花子',
    nickname: 'ハナコ',
    email: 'hanako.sato@example.com',
    charge_balance: 23500,
    total_deposit_amount: 85000,
    total_deposit_count: 2,
    chatwork_id: 'sato_hanako',
    spreadsheet_url: 'https://docs.google.com/spreadsheets/d/2def456/edit',
    created_at: '2025-01-05T11:20:00Z',
    updated_at: '2025-03-25T16:30:00Z',
    store_type: 'shopify',
    store_id: 'shop_67890',
  },
  {
    customer_id: '3',
    full_name: '鈴木一郎',
    nickname: 'イチロー',
    email: 'ichiro.suzuki@example.com',
    charge_balance: 67800,
    total_deposit_amount: 150000,
    total_deposit_count: 4,
    chatwork_id: 'suzuki_ichiro',
    spreadsheet_url: 'https://docs.google.com/spreadsheets/d/3ghi789/edit',
    created_at: '2025-01-20T13:45:00Z',
    updated_at: '2025-03-28T10:15:00Z',
    store_type: 'base',
    store_id: 'base_23456',
  },
  {
    customer_id: '4',
    full_name: '高橋美咲',
    nickname: 'ミサキ',
    email: 'misaki.takahashi@example.com',
    charge_balance: 12300,
    total_deposit_amount: 50000,
    total_deposit_count: 1,
    chatwork_id: 'takahashi_misaki',
    spreadsheet_url: 'https://docs.google.com/spreadsheets/d/4jkl012/edit',
    created_at: '2025-02-03T10:10:00Z',
    updated_at: '2025-03-30T09:20:00Z',
    store_type: 'shopify',
    store_id: 'shop_78901',
  },
  {
    customer_id: '5',
    full_name: '伊藤健太',
    nickname: 'ケンタ',
    email: 'kenta.ito@example.com',
    charge_balance: 2320,
    total_deposit_amount: 100000,
    total_deposit_count: 2,
    chatwork_id: 'ito_kenta',
    spreadsheet_url: 'https://docs.google.com/spreadsheets/d/5mno345/edit',
    created_at: '2025-02-15T15:30:00Z',
    updated_at: '2025-04-01T11:40:00Z',
    store_type: 'base',
    store_id: 'base_34567',
  },
  {
    customer_id: '6',
    full_name: '渡辺直美',
    nickname: 'ナオミ',
    email: 'naomi.watanabe@example.com',
    charge_balance: 56200,
    total_deposit_amount: 200000,
    total_deposit_count: 5,
    chatwork_id: 'watanabe_naomi',
    spreadsheet_url: 'https://docs.google.com/spreadsheets/d/6pqr678/edit',
    created_at: '2025-02-28T09:15:00Z',
    updated_at: '2025-04-03T14:25:00Z',
    store_type: 'shopify',
    store_id: 'shop_89012',
  },
  {
    customer_id: '7',
    full_name: '山田健太郎',
    nickname: 'ケンタロー',
    email: 'kentaro.yamada@example.com',
    charge_balance: 78900,
    total_deposit_amount: 250000,
    total_deposit_count: 3,
    chatwork_id: 'yamada_kentaro',
    spreadsheet_url: 'https://docs.google.com/spreadsheets/d/7stu901/edit',
    created_at: '2025-03-10T11:50:00Z',
    updated_at: '2025-04-05T16:35:00Z',
    store_type: 'base',
    store_id: 'base_45678',
  },
  {
    customer_id: '8',
    full_name: '小林さくら',
    nickname: 'サクラ',
    email: 'sakura.kobayashi@example.com',
    charge_balance: 43700,
    total_deposit_amount: 120000,
    total_deposit_count: 2,
    chatwork_id: 'kobayashi_sakura',
    spreadsheet_url: 'https://docs.google.com/spreadsheets/d/8vwx234/edit',
    created_at: '2025-03-20T14:20:00Z',
    updated_at: '2025-04-07T10:30:00Z',
    store_type: 'shopify',
    store_id: 'shop_90123',
  },
  {
    customer_id: '9',
    full_name: '加藤大輔',
    nickname: 'ダイスケ',
    email: 'daisuke.kato@example.com',
    charge_balance: 25800,
    total_deposit_amount: 80000,
    total_deposit_count: 1,
    chatwork_id: 'kato_daisuke',
    spreadsheet_url: 'https://docs.google.com/spreadsheets/d/9yz567/edit',
    created_at: '2025-03-25T16:40:00Z',
    updated_at: '2025-04-08T13:15:00Z',
    store_type: 'base',
    store_id: 'base_56789',
  },
  {
    customer_id: '10',
    full_name: '中村優子',
    nickname: 'ユウコ',
    email: 'yuko.nakamura@example.com',
    charge_balance: 61500,
    total_deposit_amount: 180000,
    total_deposit_count: 3,
    chatwork_id: 'nakamura_yuko',
    spreadsheet_url: 'https://docs.google.com/spreadsheets/d/10abc890/edit',
    created_at: '2025-04-01T10:05:00Z',
    updated_at: '2025-04-09T15:50:00Z',
    store_type: 'shopify',
    store_id: 'shop_01234',
  },
];

// 顧客の合計チャージ残高を計算する関数
export function getTotalChargeBalance(): number {
  return mockCustomers.reduce((total, customer) => total + customer.charge_balance, 0);
}

// 顧客の合計入金額を計算する関数
export function getTotalDepositAmount(): number {
  return mockCustomers.reduce((total, customer) => total + customer.total_deposit_amount, 0);
}

// 顧客の合計入金回数を計算する関数
export function getTotalDepositCount(): number {
  return mockCustomers.reduce((total, customer) => total + customer.total_deposit_count, 0);
}

// 顧客数を取得する関数
export function getCustomerCount(): number {
  return mockCustomers.length;
}
