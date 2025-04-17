import { mockDeposits } from '$lib/data/mockDeposits';
import { mockCustomers } from '$lib/data/mockCustomers';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  // URLからクエリパラメータを取得
  const searchQuery = url.searchParams.get('q')?.toLowerCase() || '';
  const sortBy = url.searchParams.get('sort') || 'deposit_date';
  const sortOrder = url.searchParams.get('order') || 'desc'; // デフォルトで降順（新しい順）
  const weekType = url.searchParams.get('week_type') || '';
  const page = parseInt(url.searchParams.get('page') || '1');
  const pageSize = 30;

  // 顧客IDと名前のマッピングを作成
  const customerMap = new Map(
    mockCustomers.map(customer => [
      customer.customer_id,
      {
        full_name: customer.full_name,
        nickname: customer.nickname
      }
    ])
  );

  // 入金データに顧客情報を追加
  let deposits = mockDeposits.map(deposit => ({
    ...deposit,
    customer_name: customerMap.get(deposit.customer_id)?.full_name || '不明',
    customer_nickname: customerMap.get(deposit.customer_id)?.nickname || '不明'
  }));

  // 検索フィルタリング
  if (searchQuery) {
    deposits = deposits.filter(deposit => 
      deposit.customer_name.toLowerCase().includes(searchQuery) ||
      deposit.customer_nickname.toLowerCase().includes(searchQuery) ||
      deposit.note.toLowerCase().includes(searchQuery)
    );
  }

  // 週タイプでフィルタリング
  if (weekType) {
    deposits = deposits.filter(deposit => deposit.week_type === weekType);
  }

  // ソート
  deposits.sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'amount_jpy':
        comparison = a.amount_jpy - b.amount_jpy;
        break;
      case 'remaining_jpy':
        comparison = a.remaining_jpy - b.remaining_jpy;
        break;
      case 'remaining_yuan':
        comparison = a.remaining_yuan - b.remaining_yuan;
        break;
      case 'week_number':
        comparison = a.week_number - b.week_number;
        break;
      case 'customer_name':
        comparison = a.customer_name.localeCompare(b.customer_name);
        break;
      case 'deposit_date':
      default:
        comparison = new Date(a.deposit_date).getTime() - new Date(b.deposit_date).getTime();
        break;
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  // ページネーション
  const totalItems = deposits.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedDeposits = deposits.slice(startIndex, startIndex + pageSize);

  // 週タイプの選択肢
  const weekTypes = [
    { value: 'charge', label: 'チャージ' },
    { value: 'consumption', label: '消化' }
  ];

  return {
    deposits: paginatedDeposits,
    pagination: {
      page,
      pageSize,
      totalItems,
      totalPages
    },
    filters: {
      searchQuery,
      sortBy,
      sortOrder,
      weekType
    },
    weekTypes
  };
};
