
export type Customer = {
  customer_id: string;
  full_name: string;
  nickname: string;
  email: string;
  charge_balance: number;
  total_deposit_amount: number;
  total_deposit_count: number;
  created_at: string;
  updated_at: string;
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
    created_at: '2024-12-15T09:30:00Z',
    updated_at: '2025-03-20T14:45:00Z',
  },
  {
    customer_id: '2',
    full_name: '佐藤花子',
    nickname: 'ハナコ',
    email: 'hanako.sato@example.com',
    charge_balance: 23500,
    total_deposit_amount: 85000,
    total_deposit_count: 2,
    created_at: '2025-01-05T11:20:00Z',
    updated_at: '2025-03-25T16:30:00Z',
  },
  {
    customer_id: '3',
    full_name: '鈴木一郎',
    nickname: 'イチロー',
    email: 'ichiro.suzuki@example.com',
    charge_balance: 68000,
    total_deposit_amount: 150000,
    total_deposit_count: 4,
    created_at: '2024-11-20T08:15:00Z',
    updated_at: '2025-04-01T10:20:00Z',
  },
  {
    customer_id: '4',
    full_name: '高橋美咲',
    nickname: 'ミサキ',
    email: 'misaki.takahashi@example.com',
    charge_balance: 12800,
    total_deposit_amount: 50000,
    total_deposit_count: 1,
    created_at: '2025-02-10T13:45:00Z',
    updated_at: '2025-02-10T13:45:00Z',
  },
  {
    customer_id: '5',
    full_name: '伊藤健太',
    nickname: 'ケンタ',
    email: 'kenta.ito@example.com',
    charge_balance: 78500,
    total_deposit_amount: 200000,
    total_deposit_count: 5,
    created_at: '2024-10-05T15:30:00Z',
    updated_at: '2025-03-28T09:15:00Z',
  },
  {
    customer_id: '6',
    full_name: '渡辺直美',
    nickname: 'ナオミ',
    email: 'naomi.watanabe@example.com',
    charge_balance: 35000,
    total_deposit_amount: 100000,
    total_deposit_count: 2,
    created_at: '2025-01-15T10:00:00Z',
    updated_at: '2025-03-15T11:30:00Z',
  },
  {
    customer_id: '7',
    full_name: '山田健太郎',
    nickname: 'ケンタロー',
    email: 'kentaro.yamada@example.com',
    charge_balance: 56000,
    total_deposit_amount: 180000,
    total_deposit_count: 3,
    created_at: '2024-12-01T14:20:00Z',
    updated_at: '2025-03-10T16:45:00Z',
  },
  {
    customer_id: '8',
    full_name: '小林さくら',
    nickname: 'サクラ',
    email: 'sakura.kobayashi@example.com',
    charge_balance: 42000,
    total_deposit_amount: 90000,
    total_deposit_count: 2,
    created_at: '2025-01-25T09:10:00Z',
    updated_at: '2025-04-05T13:20:00Z',
  },
  {
    customer_id: '9',
    full_name: '加藤大輔',
    nickname: 'ダイスケ',
    email: 'daisuke.kato@example.com',
    charge_balance: 18500,
    total_deposit_amount: 60000,
    total_deposit_count: 1,
    created_at: '2025-02-20T11:40:00Z',
    updated_at: '2025-02-20T11:40:00Z',
  },
  {
    customer_id: '10',
    full_name: '中村優子',
    nickname: 'ユウコ',
    email: 'yuko.nakamura@example.com',
    charge_balance: 63000,
    total_deposit_amount: 130000,
    total_deposit_count: 3,
    created_at: '2024-11-10T16:15:00Z',
    updated_at: '2025-03-22T10:30:00Z',
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
