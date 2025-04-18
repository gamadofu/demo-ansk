<script lang="ts">
  import type { PageData } from "./$types";
  import DepositsTable from "$lib/components/DepositsTable.svelte";

  export let data: PageData;

  // 日付フォーマット関数
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  // 金額フォーマット関数
  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(amount);
  }

  // 入金データのページネーション設定
  let currentPage = 1;
  let pageSize = 30;

  // 入金データのフィルタリングとソートを適用
  console.log(data.deposits);
  $: filteredDeposits = data.deposits;
  $: paginatedDeposits = applyPagination(filteredDeposits);
  $: totalPages = Math.ceil(filteredDeposits.length / pageSize);
  $: pagination = {
    page: currentPage,
    pageSize,
    totalItems: filteredDeposits.length,
    totalPages,
  };
  $: filters = {
    searchQuery: "",
    sortBy: "deposit_date",
    sortOrder: "desc",
    weekType: "",
  };

  // ページネーション適用関数
  function applyPagination(deposits: any[]) {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return deposits.slice(start, end);
  }

  // ソート切り替え関数
  function handleSort(event: CustomEvent<{ column: string }>) {
    const column = event.detail.column;
    if (filters.sortBy === column) {
      filters.sortOrder = filters.sortOrder === "asc" ? "desc" : "asc";
    } else {
      filters.sortBy = column;
      filters.sortOrder = "desc";
    }
    currentPage = 1; // ソート変更時は1ページ目に戻る
  }

  // ページ変更関数
  function handlePageChange(event: CustomEvent<{ page: number }>) {
    currentPage = event.detail.page;
  }
</script>

<div class="space-y-6">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold text-gray-800">顧客詳細</h1>
    <div class="flex space-x-3">
      <a
        href="/customers"
        class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
      >
        顧客一覧に戻る
      </a>
      <a
        href="/customers/{data.customer.id}/edit"
        class="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded"
      >
        編集する
      </a>
    </div>
  </div>

  <!-- 顧客情報カード -->
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
      基本情報
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <dl class="space-y-4">
          <div>
            <dt class="text-sm font-medium text-gray-500">顧客ID</dt>
            <dd class="text-base">{data.customer.id}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">顧客名</dt>
            <dd class="text-base">{data.customer.name}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">ニックネーム</dt>
            <dd class="text-base">{data.customer.nickname || "未設定"}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">メールアドレス</dt>
            <dd class="text-base">
              <a
                href="mailto:{data.customer.email}"
                class="text-teal-600 hover:underline"
              >
                {data.customer.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div>
        <dl class="space-y-4">
          <div>
            <dt class="text-sm font-medium text-gray-500">チャージ残高</dt>
            <dd class="text-base font-semibold text-teal-700">
              {formatCurrency(data.customer.balance)}
            </dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">累計入金額</dt>
            <dd class="text-base">
              {formatCurrency(data.customer.totalDeposit)}
            </dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">Chatwork ID</dt>
            <dd class="text-base">
              {#if data.customer.chatworkId}
                <a
                  href="https://www.chatwork.com/#!rid{data.customer
                    .chatworkId}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-teal-600 hover:underline"
                >
                  {data.customer.chatworkId}
                </a>
              {:else}
                未設定
              {/if}
            </dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">スプレッドシート</dt>
            <dd class="text-base">
              {#if data.customer.spreadsheetUrl}
                <a
                  href={data.customer.spreadsheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-teal-600 hover:underline"
                >
                  表示する
                </a>
              {:else}
                未設定
              {/if}
            </dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">登録日</dt>
            <dd class="text-base">{formatDate(data.customer.createdAt)}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">ストアタイプ</dt>
            <dd class="text-base">
              {#if data.customer.storeType === 'base'}
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  BASE
                </span>
              {:else if data.customer.storeType === 'shopify'}
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Shopify
                </span>
              {:else}
                未設定
              {/if}
            </dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">ストアID</dt>
            <dd class="text-base">{data.customer.storeId || "未設定"}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- 入金履歴 -->
  <div class="bg-white p-6 rounded-lg shadow">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">入金履歴</h2>
      <a
        href="/deposits/new?customer_id={data.customer.id}"
        class="bg-teal-700 hover:bg-teal-800 text-white py-1 px-3 rounded text-sm"
      >
        新規入金登録
      </a>
    </div>

    {#if data.deposits.length > 0}
      <DepositsTable
        deposits={paginatedDeposits}
        {pagination}
        {filters}
        on:sort={handleSort}
        on:page={handlePageChange}
      />
    {:else}
      <div
        class="py-4 text-center text-gray-500 border border-dashed border-gray-300 rounded-md"
      >
        <p class="text-lg font-medium">入金履歴がありません</p>
        <p class="text-sm mt-2">この顧客の入金データはまだ登録されていません</p>
      </div>
    {/if}
  </div>

  <!-- 注文履歴 -->
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-4">注文履歴</h2>
    <div
      class="py-4 text-center text-gray-500 border border-dashed border-gray-300 rounded-md"
    >
      <p class="text-lg font-medium">実装予定</p>
      <p class="text-sm mt-2">注文履歴機能は現在開発中です</p>
    </div>
  </div>
</div>
