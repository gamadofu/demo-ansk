export type Deposit = {
  deposit_id: string;
  customer_id: string;
  deposit_date: string;
  week_number: number;
  week_type: 'charge' | 'consumption';
  amount_jpy: number | null;
  yuan_conversion: number;
  exchange_rate: number | null;
  remaining_yuan: number;
  remaining_jpy: number | null;
  note: string;
  created_at: string;
  updated_at: string;
};

// 入金のモックデータ
import { itoDeposits } from './itoDeposits';

export const mockDeposits: Deposit[] = [
  {
    deposit_id: '1',
    customer_id: '1',
    deposit_date: '2025-01-15T10:30:00Z',
    week_number: 3,
    week_type: 'charge',
    amount_jpy: 50000,
    yuan_conversion: 2283.69,
    exchange_rate: 21.89,
    remaining_yuan: 2283.69,
    remaining_jpy: 50000,
    note: '初回入金',
    created_at: '2025-01-15T10:35:00Z',
    updated_at: '2025-01-15T10:35:00Z',
  },
  {
    deposit_id: '2',
    customer_id: '1',
    deposit_date: '2025-02-20T14:45:00Z',
    week_number: 8,
    week_type: 'charge',
    amount_jpy: 30000,
    yuan_conversion: 1341.83,
    exchange_rate: 22.35,
    remaining_yuan: 3625.52,
    remaining_jpy: 80000,
    note: '追加入金',
    created_at: '2025-02-20T14:50:00Z',
    updated_at: '2025-02-20T14:50:00Z',
  },
  {
    deposit_id: '3',
    customer_id: '1',
    deposit_date: '2025-03-18T09:15:00Z',
    week_number: 12,
    week_type: 'consumption',
    amount_jpy: 9056,
    yuan_conversion: 5.52,
    exchange_rate: 22.64,
    remaining_yuan: 5.52,
    remaining_jpy: 70944,
    note: '商品購入',
    created_at: '2025-03-18T09:20:00Z',
    updated_at: '2025-03-18T09:20:00Z',
  },
  {
    deposit_id: '4',
    customer_id: '2',
    deposit_date: '2025-01-25T11:30:00Z',
    week_number: 4,
    week_type: 'charge',
    amount_jpy: 40000,
    yuan_conversion: 1762.89,
    exchange_rate: 22.69,
    remaining_yuan: 1762.89,
    remaining_jpy: 40000,
    note: '初回入金',
    created_at: '2025-01-25T11:35:00Z',
    updated_at: '2025-01-25T11:35:00Z',
  },
  {
    deposit_id: '5',
    customer_id: '2',
    deposit_date: '2025-03-05T16:20:00Z',
    week_number: 10,
    week_type: 'charge',
    amount_jpy: 45000,
    yuan_conversion: 1976.27,
    exchange_rate: 22.76,
    remaining_yuan: 3739.16,
    remaining_jpy: 85000,
    note: '追加入金',
    created_at: '2025-03-05T16:25:00Z',
    updated_at: '2025-03-05T16:25:00Z',
  },
  {
    deposit_id: '6',
    customer_id: '3',
    deposit_date: '2025-02-01T13:10:00Z',
    week_number: 5,
    week_type: 'charge',
    amount_jpy: 60000,
    yuan_conversion: 2761.16,
    exchange_rate: 21.73,
    remaining_yuan: 2761.16,
    remaining_jpy: 60000,
    note: '初回入金',
    created_at: '2025-02-01T13:15:00Z',
    updated_at: '2025-02-01T13:15:00Z',
  },
  {
    deposit_id: '7',
    customer_id: '3',
    deposit_date: '2025-02-28T10:45:00Z',
    week_number: 9,
    week_type: 'charge',
    amount_jpy: 30000,
    yuan_conversion: 1391.00,
    exchange_rate: 21.56,
    remaining_yuan: 4152.16,
    remaining_jpy: 90000,
    note: '追加入金',
    created_at: '2025-02-28T10:50:00Z',
    updated_at: '2025-02-28T10:50:00Z',
  },
  {
    deposit_id: '8',
    customer_id: '3',
    deposit_date: '2025-03-25T15:30:00Z',
    week_number: 13,
    week_type: 'consumption',
    amount_jpy: 13230,
    yuan_conversion: 7.16,
    exchange_rate: 22.05,
    remaining_yuan: 7.16,
    remaining_jpy: 76770,
    note: '商品購入',
    created_at: '2025-03-25T15:35:00Z',
    updated_at: '2025-03-25T15:35:00Z',
  },
  {
    deposit_id: '9',
    customer_id: '3',
    deposit_date: '2025-04-10T09:20:00Z',
    week_number: 15,
    week_type: 'charge',
    amount_jpy: 20000,
    yuan_conversion: 888.89,
    exchange_rate: 22.50,
    remaining_yuan: 4441.05,
    remaining_jpy: 96770,
    note: '追加入金',
    created_at: '2025-04-10T09:25:00Z',
    updated_at: '2025-04-10T09:25:00Z',
  },
  {
    deposit_id: '10',
    customer_id: '4',
    deposit_date: '2025-02-15T12:40:00Z',
    week_number: 7,
    week_type: 'charge',
    amount_jpy: 50000,
    yuan_conversion: 2249.21,
    exchange_rate: 22.23,
    remaining_yuan: 2249.21,
    remaining_jpy: 50000,
    note: '初回入金',
    created_at: '2025-02-15T12:45:00Z',
    updated_at: '2025-02-15T12:45:00Z',
  },
  {
    deposit_id: '11',
    customer_id: '4',
    deposit_date: '2025-03-10T11:20:00Z',
    week_number: 11,
    week_type: 'consumption',
    amount_jpy: 11115,
    yuan_conversion: 3.21,
    exchange_rate: 22.23,
    remaining_yuan: 3.21,
    remaining_jpy: 38885,
    note: '商品購入',
    created_at: '2025-03-10T14:25:00Z',
    updated_at: '2025-03-10T14:25:00Z',
  },
  // 伊藤健太さんのデータはitoDeposits.tsに移行したため削除

  {
    deposit_id: '14',
    customer_id: '6',
    deposit_date: '2025-01-10T10:10:00Z',
    week_number: 2,
    week_type: 'charge',
    amount_jpy: 80000,
    yuan_conversion: 3542.96,
    exchange_rate: 22.58,
    remaining_yuan: 3542.96,
    remaining_jpy: 80000,
    note: '初回入金',
    created_at: '2025-01-10T10:15:00Z',
    updated_at: '2025-01-10T10:15:00Z',
  },
  {
    deposit_id: '15',
    customer_id: '6',
    deposit_date: '2025-02-05T13:25:00Z',
    week_number: 6,
    week_type: 'consumption',
    amount_jpy: 22000,
    yuan_conversion: 6.96,
    exchange_rate: 22.00,
    remaining_yuan: 6.96,
    remaining_jpy: 58000,
    note: '商品購入',
    created_at: '2025-02-05T13:30:00Z',
    updated_at: '2025-02-05T13:30:00Z',
  },
  {
    deposit_id: '16',
    customer_id: '7',
    deposit_date: '2025-03-05T11:20:00Z',
    week_number: 10,
    week_type: 'charge',
    amount_jpy: 100000,
    yuan_conversion: 4620.61,
    exchange_rate: 21.64,
    remaining_yuan: 4620.61,
    remaining_jpy: 100000,
    note: '初回入金',
    created_at: '2025-03-05T11:25:00Z',
    updated_at: '2025-03-05T11:25:00Z',
  },
  {
    deposit_id: '17',
    customer_id: '7',
    deposit_date: '2025-03-25T16:15:00Z',
    week_number: 13,
    week_type: 'consumption',
    amount_jpy: 15156,
    yuan_conversion: 8.61,
    exchange_rate: 21.65,
    remaining_yuan: 8.61,
    remaining_jpy: 84844,
    note: '商品購入',
    created_at: '2025-03-25T16:20:00Z',
    updated_at: '2025-03-25T16:20:00Z',
  },
  {
    deposit_id: '18',
    customer_id: '8',
    deposit_date: '2025-03-15T10:30:00Z',
    week_number: 11,
    week_type: 'charge',
    amount_jpy: 70000,
    yuan_conversion: 3247.22,
    exchange_rate: 21.56,
    remaining_yuan: 3247.22,
    remaining_jpy: 70000,
    note: '初回入金',
    created_at: '2025-03-15T10:35:00Z',
    updated_at: '2025-03-15T10:35:00Z',
  },
  {
    deposit_id: '19',
    customer_id: '8',
    deposit_date: '2025-04-05T15:20:00Z',
    week_number: 14,
    week_type: 'consumption',
    amount_jpy: 12918,
    yuan_conversion: 9.22,
    exchange_rate: 21.53,
    remaining_yuan: 9.22,
    remaining_jpy: 57082,
    note: '商品購入',
    created_at: '2025-04-05T15:25:00Z',
    updated_at: '2025-04-05T15:25:00Z',
  },
  // 伊藤健太さんの入金データ（20件）
  ...itoDeposits
];

// 入金の合計金額を計算する関数（日本円）
export function getTotalDepositAmountJPY(): number {
  return mockDeposits.reduce((total, deposit) => {
    // amount_jpyがnullの場合は計算に含めない
    if (deposit.amount_jpy === null) return total;
    
    // チャージの場合は加算、消費の場合は減算
    const amount = deposit.week_type === 'charge' ? deposit.amount_jpy : -deposit.amount_jpy;
    return total + amount;
  }, 0);
}

// 入金の合計金額を計算する関数（元）
export function getTotalDepositAmountYuan(): number {
  return mockDeposits.reduce((total, deposit) => {
    // チャージの場合は加算、消費の場合は減算
    const amount = deposit.week_type === 'charge' ? deposit.yuan_conversion : -deposit.yuan_conversion;
    return total + amount;
  }, 0);
}

// 入金の合計件数を取得する関数
export function getDepositCount(): number {
  return mockDeposits.length;
}

// 特定の顧客の入金履歴を取得する関数
export function getCustomerDeposits(customerId: string): Deposit[] {
  return mockDeposits.filter(deposit => deposit.customer_id === customerId);
}

// 期間内の入金を取得する関数
export function getDepositsInPeriod(startDate: string, endDate: string): Deposit[] {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  
  return mockDeposits.filter(deposit => {
    const depositTime = new Date(deposit.deposit_date).getTime();
    return depositTime >= start && depositTime <= end;
  });
}

// 期間内の入金合計金額を計算する関数（日本円）
export function getTotalDepositAmountJPYInPeriod(startDate: string, endDate: string): number {
  const depositsInPeriod = getDepositsInPeriod(startDate, endDate);
  return depositsInPeriod.reduce((total, deposit) => {
    // amount_jpyがnullの場合は計算に含めない
    if (deposit.amount_jpy === null) return total;
    
    const amount = deposit.week_type === 'charge' ? deposit.amount_jpy : -deposit.amount_jpy;
    return total + amount;
  }, 0);
}

// 期間内の入金合計金額を計算する関数（元）
export function getTotalDepositAmountYuanInPeriod(startDate: string, endDate: string): number {
  const depositsInPeriod = getDepositsInPeriod(startDate, endDate);
  return depositsInPeriod.reduce((total, deposit) => {
    const amount = deposit.week_type === 'charge' ? deposit.yuan_conversion : -deposit.yuan_conversion;
    return total + amount;
  }, 0);
}

// 週番号ごとの入金額を取得する関数
export function getDepositsByWeek(): Record<number, { charge: number, consumption: number }> {
  const weeklyDeposits: Record<number, { charge: number, consumption: number }> = {};
  
  mockDeposits.forEach(deposit => {
    if (!weeklyDeposits[deposit.week_number]) {
      weeklyDeposits[deposit.week_number] = { charge: 0, consumption: 0 };
    }
    
    // amount_jpyがnullの場合は計算に含めない
    if (deposit.amount_jpy === null) return;
    
    if (deposit.week_type === 'charge') {
      weeklyDeposits[deposit.week_number].charge += deposit.amount_jpy;
    } else {
      weeklyDeposits[deposit.week_number].consumption += deposit.amount_jpy;
    }
  });
  
  return weeklyDeposits;
}
