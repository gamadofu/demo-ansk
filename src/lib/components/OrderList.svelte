<script lang="ts">
  import { orderStatusColors, orderStatusLabels } from "$lib/data/orderLabels";
  import type { Order } from "$lib/data/mockOrders";

  export let orders: Order[] = [];
  export let currentStatus: string | null = null;

  // 検索条件の初期化
  let searchFilters = {
    order_id: "",
    customer_name: "",
    product_name: "",
    tracking_number: ""
  };
  
  let filteredOrders = orders;
  let showAdvancedSearch = false;

  // 検索条件が変更されたときにフィルタリングを実行
  $: {
    filteredOrders = orders.filter((order) => {
      // 注文IDのフィルタリング
      if (searchFilters.order_id && 
          !order.order_id.toLowerCase().includes(searchFilters.order_id.toLowerCase()) && 
          !order.shop_order_id.toLowerCase().includes(searchFilters.order_id.toLowerCase())) {
        return false;
      }
      
      // 顧客名のフィルタリング
      if (searchFilters.customer_name && 
          !order.customer_name.toLowerCase().includes(searchFilters.customer_name.toLowerCase())) {
        return false;
      }
      
      // 商品名のフィルタリング
      if (searchFilters.product_name && 
          !order.product_name_jp.toLowerCase().includes(searchFilters.product_name.toLowerCase())) {
        return false;
      }
      
      // 追跡番号のフィルタリング
      if (searchFilters.tracking_number && 
          (!order.tracking_number || 
           !order.tracking_number.toLowerCase().includes(searchFilters.tracking_number.toLowerCase()))) {
        return false;
      }
      
      return true;
    });
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP");
  }
</script>

<div class="container mx-auto px-4 py-8">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold">
      {#if currentStatus}
        <span
          class={`px-2 mr-2 inline-flex text-xs leading-5 font-semibold rounded-full ${orderStatusColors[currentStatus]}`}
        >
          {orderStatusLabels[currentStatus]}
        </span>
      {/if}
      注文一覧
    </h1>
  </div>

  <div class="mb-6 space-y-4">
    <!-- ステータスフィルタ -->
    <div class="flex flex-wrap gap-2">
      <a 
        href="/orders" 
        class="px-3 py-1 text-sm rounded-full {!currentStatus ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
      >
        すべて
      </a>
      {#each Object.keys(orderStatusLabels) as status}
        <a 
          href="/orders/status/{status}" 
          class="px-3 py-1 text-sm rounded-full {currentStatus === status ? 'bg-blue-600 text-white' : `${orderStatusColors[status]} hover:opacity-80`}"
        >
          {orderStatusLabels[status]}
        </a>
      {/each}
    </div>

    <!-- 検索フィルタ -->
    <div class="space-y-2">
      <!-- 検索フォーム -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- 注文ID -->
        <div class="w-full">
          <div class="flex rounded overflow-hidden border border-gray-300">
            <div class="bg-gray-100 text-gray-700 text-base font-medium px-3 py-2 flex items-center justify-center w-[100px]">注文ID</div>
            <input
              type="text"
              placeholder="検索..."
              bind:value={searchFilters.order_id}
              class="w-full px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 border-l border-gray-300"
            />
          </div>
        </div>
        
        <!-- 顧客名 -->
        <div class="w-full">
          <div class="flex rounded overflow-hidden border border-gray-300">
            <div class="bg-gray-100 text-gray-700 text-base font-medium px-3 py-2 flex items-center justify-center w-[100px]">顧客名</div>
            <input
              type="text"
              placeholder="検索..."
              bind:value={searchFilters.customer_name}
              class="w-full px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 border-l border-gray-300"
            />
          </div>
        </div>
        
        <!-- 商品名 -->
        <div class="w-full">
          <div class="flex rounded overflow-hidden border border-gray-300">
            <div class="bg-gray-100 text-gray-700 text-base font-medium px-3 py-2 flex items-center justify-center w-[100px]">商品名</div>
            <input
              type="text"
              placeholder="検索..."
              bind:value={searchFilters.product_name}
              class="w-full px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 border-l border-gray-300"
            />
          </div>
        </div>
        
        <!-- 追跡番号 -->
        <div class="w-full">
          <div class="flex rounded overflow-hidden border border-gray-300">
            <div class="bg-gray-100 text-gray-700 text-base font-medium px-3 py-2 flex items-center justify-center w-[100px]">追跡番号</div>
            <input
              type="text"
              placeholder="検索..."
              bind:value={searchFilters.tracking_number}
              class="w-full px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 border-l border-gray-300"
            />
          </div>
        </div>
        
        <!-- ボタンエリア -->
        <div class="md:col-span-2 flex justify-end gap-3">
          <!-- クリアボタン -->
          <button
            type="button"
            on:click={() => {
              searchFilters = {
                order_id: "",
                customer_name: "",
                product_name: "",
                tracking_number: ""
              };
            }}
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
          >
            クリア
          </button>
          
          <!-- 検索ボタン -->
          <button
            type="button"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium"
          >
            検索する
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="overflow-x-auto bg-white rounded-lg shadow">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">注文ID</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ステータス</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">受付日</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">商品情報</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">価格情報</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">発送情報</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">アクション</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each filteredOrders as order}
          <tr class="hover:bg-gray-50">
            <!-- 注文ID -->
            <td class="px-6 py-4 text-sm font-medium text-gray-900">{order.shop_order_id}</td>
            
            <!-- ステータス -->
            <td class="px-6 py-4 text-sm text-gray-500">
              <span class={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${orderStatusColors[order.china_order_status]}`}>
                {orderStatusLabels[order.china_order_status]}
              </span>
            </td>
            
            <!-- 受付日 -->
            <td class="px-6 py-4 text-sm text-gray-500">{order.order_received_date}</td>
            
            <!-- 商品情報 -->
            <td class="px-6 py-4 text-sm text-gray-500">
              <div class="space-y-1">
                <div><span class="font-semibold">商品名(日本語):</span> {order.product_name_jp}</div>
                <div><span class="font-semibold">商品名(中国語):</span> {order.product_name_cn || '-'}</div>
                <div><span class="font-semibold">バリエーション:</span> {order.variation_jp || '-'}</div>
                <div>
                  <span class="font-semibold">詳細:</span> 
                  {[order.color, order.size, order.material].filter(Boolean).join(', ') || '-'}
                </div>
                <div><span class="font-semibold">数量:</span> {order.quantity}</div>
                <div class="truncate max-w-xs">
                  <span class="font-semibold">URL:</span> 
                  {#if order.supplier_url_1}
                    <a href={order.supplier_url_1} target="_blank" class="text-blue-600 hover:underline truncate">{order.supplier_url_1.substring(0, 30)}...</a>
                  {:else}
                    -
                  {/if}
                </div>
              </div>
            </td>
            
            <!-- 価格情報 -->
            <td class="px-6 py-4 text-sm text-gray-500">
              <div class="space-y-1">
                <div><span class="font-semibold">仕入価格:</span> {order.purchase_price_cny}元</div>
                <div><span class="font-semibold">中国国内配送料:</span> {order.china_shipping_fee_cny || 0}元</div>
                <div><span class="font-semibold">国際配送料:</span> {order.international_shipping_fee_cny || 0}元</div>
                <div><span class="font-semibold">商品小計:</span> {order.product_subtotal}元</div>
                <div><span class="font-semibold">サービス料:</span> {order.service_fee}円</div>
              </div>
            </td>
            
            <!-- 発送情報 -->
            <td class="px-6 py-4 text-sm text-gray-500">
              <div class="space-y-1">
                <div><span class="font-semibold">発送日:</span> {order.shipping_date || '-'}</div>
                <div><span class="font-semibold">追跡番号:</span> {order.tracking_number || '-'}</div>
              </div>
            </td>
            
            <!-- アクション -->
            <td class="px-6 py-4 text-sm font-medium">
              <div class="flex flex-col space-y-2">
                <a
                  href={`/orders/${order.order_id}`}
                  class="bg-teal-700 hover:bg-teal-800 text-white py-1 px-2 rounded text-xs text-center"
                  >詳細</a
                >
                <a
                  href={`/orders/${order.order_id}/edit`}
                  class="bg-amber-700 hover:bg-amber-800 text-white py-1 px-2 rounded text-xs text-center"
                  >編集</a
                >
              </div>
            </td>
          </tr>
        {:else}
          <tr>
            <td colspan="7" class="px-6 py-4 text-center text-sm text-gray-500">注文が見つかりません</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
