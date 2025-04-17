<script lang="ts">
  import type { PageData } from "./$types";
  import DepositsTable from "$lib/components/DepositsTable.svelte";

  export let data: PageData;

  // 検索フィルター
  let searchQuery = "";
  let selectedWeekType = "";

  // ソート状態
  let sortBy = "deposit_date";
  let sortOrder = "desc";

  // ページネーション
  let currentPage = 1;
  let pageSize = 30;

  // フィルタリングとソートを適用した入金データ
  $: filteredDeposits = applyFilters(data.deposits);
  $: paginatedDeposits = applyPagination(filteredDeposits);
  $: totalPages = Math.ceil(filteredDeposits.length / pageSize);
  $: pagination = {
    page: currentPage,
    pageSize,
    totalItems: filteredDeposits.length,
    totalPages,
  };
  $: filters = {
    searchQuery,
    sortBy,
    sortOrder,
    weekType: selectedWeekType,
  };

  // フィルタリング関数
  function applyFilters(deposits) {
    // 検索クエリでフィルタリング
    let filtered = deposits;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (deposit) =>
          deposit.customer_name.toLowerCase().includes(query) ||
          deposit.customer_nickname.toLowerCase().includes(query) ||
          deposit.note.toLowerCase().includes(query)
      );
    }

    // 週タイプでフィルタリング
    if (selectedWeekType) {
      filtered = filtered.filter(
        (deposit) => deposit.week_type === selectedWeekType
      );
    }

    // ソート
    filtered = [...filtered].sort((a, b) => {
      let comparison = 0;

      // 数値フィールドの場合
      if (
        [
          "amount_jpy",
          "yuan_conversion",
          "exchange_rate",
          "remaining_yuan",
          "remaining_jpy",
        ].includes(sortBy)
      ) {
        comparison = a[sortBy] - b[sortBy];
      }
      // 日付フィールドの場合
      else if (sortBy === "deposit_date") {
        comparison =
          new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime();
      }
      // 文字列フィールドの場合
      else {
        comparison = a[sortBy].localeCompare(b[sortBy]);
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }

  // ページネーション適用関数
  function applyPagination(deposits) {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return deposits.slice(start, end);
  }

  // ソート切り替え関数
  function handleSort(event) {
    const column = event.detail.column;
    if (sortBy === column) {
      sortOrder = sortOrder === "asc" ? "desc" : "asc";
    } else {
      sortBy = column;
      sortOrder = "desc";
    }
    currentPage = 1; // ソート変更時は1ページ目に戻る
  }

  // ページ変更関数
  function handlePageChange(event) {
    currentPage = event.detail.page;
  }
</script>

<div class="space-y-6">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold text-gray-800">入金一覧</h1>
    <a
      href="/deposits/new"
      class="bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded"
    >
      新規入金登録
    </a>
  </div>

  <!-- フィルター -->
  <div class="bg-white p-4 rounded-lg shadow">
    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex-grow">
        <label for="search" class="block text-sm font-medium text-gray-700 mb-1"
          >検索</label
        >
        <input
          type="text"
          id="search"
          bind:value={searchQuery}
          placeholder="顧客名、ニックネーム、メモで検索..."
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
        />
      </div>

      <div class="w-full md:w-48">
        <label
          for="weekType"
          class="block text-sm font-medium text-gray-700 mb-1">種別</label
        >
        <select
          id="weekType"
          bind:value={selectedWeekType}
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
        >
          <option value="">すべて</option>
          <option value="charge">チャージ</option>
          <option value="consumption">消化</option>
        </select>
      </div>
    </div>
  </div>

  <!-- 入金一覧テーブル -->
  <DepositsTable
    deposits={paginatedDeposits}
    {pagination}
    {filters}
    on:sort={handleSort}
    on:page={handlePageChange}
  />
</div>
