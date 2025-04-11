<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Order, OrderStatus } from '$lib/data/mockOrders';
  
  // 新規注文のテンプレート
  let newOrder: Partial<Order> = {
    order_id: `order-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
    order_received_date: new Date().toISOString().split('T')[0],
    shop_order_id: '',
    customer_name: '',
    order_date: new Date().toISOString().split('T')[0],
    product_management_number: '',
    product_name_jp: '',
    variation_jp: '',
    quantity: 1,
    purchase_price_cny: 0,
    product_subtotal: 0,
    service_fee: 500,
    china_order_status: '注文中',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  const orderStatuses: OrderStatus[] = ['注文中', '交換中', '発送済み', '到着済'];
  
  // 小計を計算する関数
  function calculateSubtotal() {
    const purchasePrice = newOrder.purchase_price_cny || 0;
    const shippingFee = newOrder.china_shipping_fee_cny || 0;
    const quantity = newOrder.quantity || 1;
    
    newOrder.product_subtotal = (purchasePrice * quantity) + shippingFee;
  }
  
  // 購入価格または配送料が変更されたときに小計を更新
  $: if (newOrder.purchase_price_cny !== undefined || newOrder.china_shipping_fee_cny !== undefined || newOrder.quantity !== undefined) {
    calculateSubtotal();
  }
  
  async function handleSubmit() {
    // 実際のアプリケーションではここでAPIリクエストを行いますが、
    // 現在はモックデータを使用しているため、成功したと仮定して一覧ページに戻ります
    alert('新規注文が登録されました（モックデータのため実際には登録されていません）');
    goto('/orders');
  }
</script>

<svelte:head>
  <title>新規注文登録 | 購入代行管理システム</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <div class="mb-6">
    <a href="/orders" class="text-blue-600 hover:text-blue-800">← 注文一覧に戻る</a>
    <h1 class="text-2xl font-bold mt-2">新規注文登録</h1>
  </div>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-8">
    <!-- 基本情報 -->
    <div class="bg-white shadow overflow-hidden rounded-lg">
      <div class="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 class="text-lg leading-6 font-medium text-gray-900">基本情報</h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label for="shop_order_id" class="block text-sm font-medium text-gray-700">注文ID</label>
          <input 
            type="text" 
            id="shop_order_id" 
            bind:value={newOrder.shop_order_id} 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="order_received_date" class="block text-sm font-medium text-gray-700">受付日</label>
          <input 
            type="date" 
            id="order_received_date" 
            bind:value={newOrder.order_received_date} 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="order_date" class="block text-sm font-medium text-gray-700">注文日</label>
          <input 
            type="date" 
            id="order_date" 
            bind:value={newOrder.order_date} 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="customer_name" class="block text-sm font-medium text-gray-700">顧客名</label>
          <input 
            type="text" 
            id="customer_name" 
            bind:value={newOrder.customer_name} 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="nickname" class="block text-sm font-medium text-gray-700">ニックネーム</label>
          <input 
            type="text" 
            id="nickname" 
            bind:value={newOrder.nickname} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="china_order_status" class="block text-sm font-medium text-gray-700">ステータス</label>
          <select 
            id="china_order_status" 
            bind:value={newOrder.china_order_status} 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            {#each orderStatuses as status}
              <option value={status}>{status}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
    
    <!-- 商品情報 -->
    <div class="bg-white shadow overflow-hidden rounded-lg">
      <div class="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 class="text-lg leading-6 font-medium text-gray-900">商品情報</h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label for="product_management_number" class="block text-sm font-medium text-gray-700">商品管理番号</label>
          <input 
            type="text" 
            id="product_management_number" 
            bind:value={newOrder.product_management_number} 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="product_name_jp" class="block text-sm font-medium text-gray-700">商品名（日本語）</label>
          <input 
            type="text" 
            id="product_name_jp" 
            bind:value={newOrder.product_name_jp} 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="variation_jp" class="block text-sm font-medium text-gray-700">バリエーション（日本語）</label>
          <input 
            type="text" 
            id="variation_jp" 
            bind:value={newOrder.variation_jp} 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="product_name_cn" class="block text-sm font-medium text-gray-700">商品名（中国語）</label>
          <input 
            type="text" 
            id="product_name_cn" 
            bind:value={newOrder.product_name_cn} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="color" class="block text-sm font-medium text-gray-700">カラー</label>
          <input 
            type="text" 
            id="color" 
            bind:value={newOrder.color} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="size" class="block text-sm font-medium text-gray-700">サイズ</label>
          <input 
            type="text" 
            id="size" 
            bind:value={newOrder.size} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="quantity" class="block text-sm font-medium text-gray-700">数量</label>
          <input 
            type="number" 
            id="quantity" 
            bind:value={newOrder.quantity} 
            min="1" 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="material" class="block text-sm font-medium text-gray-700">素材</label>
          <input 
            type="text" 
            id="material" 
            bind:value={newOrder.material} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
    
    <!-- サプライヤー情報 -->
    <div class="bg-white shadow overflow-hidden rounded-lg">
      <div class="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 class="text-lg leading-6 font-medium text-gray-900">サプライヤー情報</h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 gap-4">
        <div>
          <label for="supplier_url_1" class="block text-sm font-medium text-gray-700">サプライヤーURL 1</label>
          <input 
            type="url" 
            id="supplier_url_1" 
            bind:value={newOrder.supplier_url_1} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="supplier_url_2" class="block text-sm font-medium text-gray-700">サプライヤーURL 2</label>
          <input 
            type="url" 
            id="supplier_url_2" 
            bind:value={newOrder.supplier_url_2} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="supplier_url_3" class="block text-sm font-medium text-gray-700">サプライヤーURL 3</label>
          <input 
            type="url" 
            id="supplier_url_3" 
            bind:value={newOrder.supplier_url_3} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="supplier_url_4" class="block text-sm font-medium text-gray-700">サプライヤーURL 4</label>
          <input 
            type="url" 
            id="supplier_url_4" 
            bind:value={newOrder.supplier_url_4} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
    
    <!-- 価格情報 -->
    <div class="bg-white shadow overflow-hidden rounded-lg">
      <div class="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 class="text-lg leading-6 font-medium text-gray-900">価格情報</h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label for="purchase_price_cny" class="block text-sm font-medium text-gray-700">仕入価格（元）</label>
          <input 
            type="number" 
            id="purchase_price_cny" 
            bind:value={newOrder.purchase_price_cny} 
            min="0" 
            step="0.01" 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="china_shipping_fee_cny" class="block text-sm font-medium text-gray-700">中国国内配送料（元）</label>
          <input 
            type="number" 
            id="china_shipping_fee_cny" 
            bind:value={newOrder.china_shipping_fee_cny} 
            min="0" 
            step="0.01" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="international_shipping_fee_cny" class="block text-sm font-medium text-gray-700">国際配送料（元）</label>
          <input 
            type="number" 
            id="international_shipping_fee_cny" 
            bind:value={newOrder.international_shipping_fee_cny} 
            min="0" 
            step="0.01" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="product_subtotal" class="block text-sm font-medium text-gray-700">商品小計（元）</label>
          <input 
            type="number" 
            id="product_subtotal" 
            bind:value={newOrder.product_subtotal} 
            min="0" 
            step="0.01" 
            readonly
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <p class="mt-1 text-xs text-gray-500">※ 自動計算されます</p>
        </div>
        
        <div>
          <label for="service_fee" class="block text-sm font-medium text-gray-700">サービス料（円）</label>
          <input 
            type="number" 
            id="service_fee" 
            bind:value={newOrder.service_fee} 
            min="0" 
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
    
    <!-- 備考 -->
    <div class="bg-white shadow overflow-hidden rounded-lg">
      <div class="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 class="text-lg leading-6 font-medium text-gray-900">備考</h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 gap-4">
        <div>
          <label for="packing_notes" class="block text-sm font-medium text-gray-700">梱包メモ</label>
          <textarea 
            id="packing_notes" 
            bind:value={newOrder.packing_notes} 
            rows="3" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        
        <div>
          <label for="inspection_notes" class="block text-sm font-medium text-gray-700">検品メモ</label>
          <textarea 
            id="inspection_notes" 
            bind:value={newOrder.inspection_notes} 
            rows="3" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
      </div>
    </div>
    
    <div class="flex justify-end space-x-3">
      <a 
        href="/orders" 
        class="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        キャンセル
      </a>
      <button 
        type="submit" 
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        登録
      </button>
    </div>
  </form>
</div>
