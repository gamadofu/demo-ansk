<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  type Deposit = {
    deposit_id: string;
    customer_id: string;
    deposit_date: string;
    week_type: 'charge' | 'consumption';
    amount_jpy: number | null;
    yuan_conversion: number;
    exchange_rate: number | null;
    remaining_yuan: number;
    remaining_jpy: number | null;
    note: string;
    customer_name?: string;
    customer_nickname?: string;
  };
  
  export let deposits: Deposit[] = [];
  export let pagination = {
    page: 1,
    pageSize: 30,
    totalItems: 0,
    totalPages: 1
  };
  export let filters = {
    searchQuery: '',
    sortBy: 'deposit_date',
    sortOrder: 'desc',
    weekType: ''
  };
  
  const dispatch = createEventDispatcher();
  
  // 日付フォーマット関数
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }
  
  // 金額フォーマット関数
  function formatCurrency(amount: number | null): string {
    if (amount === null) return '';
    return new Intl.NumberFormat('ja-JP', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
  
  // 元フォーマット関数
  function formatYuan(amount: number): string {
    return new Intl.NumberFormat('ja-JP', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }
  
  // 週タイプのラベル
  function getWeekTypeLabel(type: string): string {
    return type === 'charge' ? 'チャージ' : '消化';
  }
  
  // 週タイプの色クラス
  function getWeekTypeColorClass(type: string): string {
    return type === 'charge' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-rose-100 text-rose-800 border-rose-200';
  }
  
  // ソート関数
  function sortBy(column: string) {
    dispatch('sort', { column });
  }
  
  // ソートアイコン表示関数
  function getSortIcon(column: string): string {
    const currentSort = filters.sortBy;
    const currentOrder = filters.sortOrder;
    
    if (currentSort !== column) return '';
    return currentOrder === 'asc' ? '↑' : '↓';
  }
  
  // ページネーション関数
  function goToPage(page: number) {
    dispatch('page', { page });
  }
  
  // 型エラーを修正するために、明示的にデポジットが空の場合をチェック
  $: hasDeposits = deposits && deposits.length > 0;
</script>

<!-- 入金一覧テーブル -->
<div class="bg-white rounded-lg shadow overflow-hidden">
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" on:click={() => sortBy('customer_name')}>
            顧客ID {getSortIcon('customer_name')}
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" on:click={() => sortBy('deposit_date')}>
            日時 {getSortIcon('deposit_date')}
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            種別
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" on:click={() => sortBy('amount_jpy')}>
            金額(円) {getSortIcon('amount_jpy')}
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            元還元
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            換算レート
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" on:click={() => sortBy('remaining_yuan')}>
            残金(元) {getSortIcon('remaining_yuan')}
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" on:click={() => sortBy('remaining_jpy')}>
            残金(円) {getSortIcon('remaining_jpy')}
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            アクション
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#if hasDeposits}
        {#each deposits as deposit}
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex flex-col">
                <div class="text-sm font-medium text-gray-900">{deposit.customer_name}</div>
                <div class="text-sm text-gray-500">{deposit.customer_nickname}</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {formatDate(deposit.deposit_date)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getWeekTypeColorClass(deposit.week_type)}`}>
                {getWeekTypeLabel(deposit.week_type)}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {deposit.amount_jpy === null ? '' : formatCurrency(deposit.amount_jpy)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {formatYuan(deposit.yuan_conversion)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {deposit.exchange_rate === null ? '' : deposit.exchange_rate}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {formatYuan(deposit.remaining_yuan)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {deposit.remaining_jpy === null ? '' : formatCurrency(deposit.remaining_jpy)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex space-x-2">
                <a href="/deposits/{deposit.deposit_id}" class="bg-teal-700 hover:bg-teal-800 text-white py-1 px-2 rounded text-xs">詳細</a>
                <a href="/deposits/{deposit.deposit_id}/edit" class="bg-amber-700 hover:bg-amber-800 text-white py-1 px-2 rounded text-xs">編集</a>
              </div>
            </td>
          </tr>
          {/each}
      {:else}
        <tr>
          <td colspan="9" class="px-6 py-4 text-center text-sm text-gray-500">
            入金データがありません
          </td>
        </tr>
      {/if}
      </tbody>
    </table>
  </div>
  
  <!-- ページネーション -->
  {#if pagination.totalPages > 1}
    <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-700">
          全 {pagination.totalItems} 件中 {(pagination.page - 1) * pagination.pageSize + 1} - 
          {Math.min(pagination.page * pagination.pageSize, pagination.totalItems)} 件を表示
        </div>
        <div class="flex space-x-2">
          {#if pagination.page > 1}
            <button
              on:click={() => goToPage(pagination.page - 1)}
              class="px-3 py-1 border border-gray-300 rounded text-sm bg-white hover:bg-gray-100"
            >
              前へ
            </button>
          {/if}
          
          {#each Array(pagination.totalPages) as _, i}
            <button
              on:click={() => goToPage(i + 1)}
              class={`px-3 py-1 border rounded text-sm ${
                pagination.page === i + 1
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          {/each}
          
          {#if pagination.page < pagination.totalPages}
            <button
              on:click={() => goToPage(pagination.page + 1)}
              class="px-3 py-1 border border-gray-300 rounded text-sm bg-white hover:bg-gray-100"
            >
              次へ
            </button>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
