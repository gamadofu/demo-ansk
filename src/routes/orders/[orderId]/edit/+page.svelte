<script lang="ts">
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';
  import type { Order, OrderStatus } from '$lib/data/mockOrders';
  
  export let data: PageData;
  
  // 編集用のオブジェクトを作成（ディープコピー）
  let editedOrder: Order = JSON.parse(JSON.stringify(data.order));
  
  const orderStatuses: OrderStatus[] = ['注文中', '交換中', '発送済', '到着済'];
  
  async function handleSubmit() {
    // 実際のアプリケーションではここでAPIリクエストを行いますが、
    // 現在はモックデータを使用しているため、成功したと仮定して詳細ページに戻ります
    alert('注文が更新されました（モックデータのため実際には更新されていません）');
    goto(`/orders/${editedOrder.order_id}`);
  }
</script>

<svelte:head>
  <title>注文編集: {data.order.shop_order_id} | 購入代行管理システム</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <div class="mb-6">
    <a href={`/orders/${data.order.order_id}`} class="text-blue-600 hover:text-blue-800">← 注文詳細に戻る</a>
    <h1 class="text-2xl font-bold mt-2">注文編集: {data.order.shop_order_id}</h1>
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
            bind:value={editedOrder.shop_order_id} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="order_received_date" class="block text-sm font-medium text-gray-700">受付日</label>
          <input 
            type="date" 
            id="order_received_date" 
            bind:value={editedOrder.order_received_date} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="order_date" class="block text-sm font-medium text-gray-700">注文日</label>
          <input 
            type="date" 
            id="order_date" 
            bind:value={editedOrder.order_date} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="customer_name" class="block text-sm font-medium text-gray-700">顧客名</label>
          <input 
            type="text" 
            id="customer_name" 
            bind:value={editedOrder.customer_name} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="nickname" class="block text-sm font-medium text-gray-700">ニックネーム</label>
          <input 
            type="text" 
            id="nickname" 
            bind:value={editedOrder.nickname} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="china_order_status" class="block text-sm font-medium text-gray-700">ステータス</label>
          <select 
            id="china_order_status" 
            bind:value={editedOrder.china_order_status} 
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
            bind:value={editedOrder.product_management_number} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="product_name_jp" class="block text-sm font-medium text-gray-700">商品名（日本語）</label>
          <input 
            type="text" 
            id="product_name_jp" 
            bind:value={editedOrder.product_name_jp} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="variation_jp" class="block text-sm font-medium text-gray-700">バリエーション（日本語）</label>
          <input 
            type="text" 
            id="variation_jp" 
            bind:value={editedOrder.variation_jp} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="product_name_cn" class="block text-sm font-medium text-gray-700">商品名（中国語）</label>
          <input 
            type="text" 
            id="product_name_cn" 
            bind:value={editedOrder.product_name_cn} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="color" class="block text-sm font-medium text-gray-700">カラー</label>
          <input 
            type="text" 
            id="color" 
            bind:value={editedOrder.color} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="size" class="block text-sm font-medium text-gray-700">サイズ</label>
          <input 
            type="text" 
            id="size" 
            bind:value={editedOrder.size} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="quantity" class="block text-sm font-medium text-gray-700">数量</label>
          <input 
            type="number" 
            id="quantity" 
            bind:value={editedOrder.quantity} 
            min="1" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="material" class="block text-sm font-medium text-gray-700">素材</label>
          <input 
            type="text" 
            id="material" 
            bind:value={editedOrder.material} 
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
            bind:value={editedOrder.supplier_url_1} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="supplier_url_2" class="block text-sm font-medium text-gray-700">サプライヤーURL 2</label>
          <input 
            type="url" 
            id="supplier_url_2" 
            bind:value={editedOrder.supplier_url_2} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="supplier_url_3" class="block text-sm font-medium text-gray-700">サプライヤーURL 3</label>
          <input 
            type="url" 
            id="supplier_url_3" 
            bind:value={editedOrder.supplier_url_3} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="supplier_url_4" class="block text-sm font-medium text-gray-700">サプライヤーURL 4</label>
          <input 
            type="url" 
            id="supplier_url_4" 
            bind:value={editedOrder.supplier_url_4} 
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
            bind:value={editedOrder.purchase_price_cny} 
            min="0" 
            step="0.01" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="china_shipping_fee_cny" class="block text-sm font-medium text-gray-700">中国国内配送料（元）</label>
          <input 
            type="number" 
            id="china_shipping_fee_cny" 
            bind:value={editedOrder.china_shipping_fee_cny} 
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
            bind:value={editedOrder.international_shipping_fee_cny} 
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
            bind:value={editedOrder.product_subtotal} 
            min="0" 
            step="0.01" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="service_fee" class="block text-sm font-medium text-gray-700">サービス料（円）</label>
          <input 
            type="number" 
            id="service_fee" 
            bind:value={editedOrder.service_fee} 
            min="0" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
    
    <!-- 配送・顧客情報 -->
    <div class="bg-white shadow overflow-hidden rounded-lg">
      <div class="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 class="text-lg leading-6 font-medium text-gray-900">配送・顧客情報</h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="shipping_date" class="block text-sm font-medium text-gray-700">発送日</label>
          <input 
            type="date" 
            id="shipping_date" 
            bind:value={editedOrder.shipping_date} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="tracking_number" class="block text-sm font-medium text-gray-700">追跡番号</label>
          <input 
            type="text" 
            id="tracking_number" 
            bind:value={editedOrder.tracking_number} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="qc_number" class="block text-sm font-medium text-gray-700">QC番号</label>
          <input 
            type="text" 
            id="qc_number" 
            bind:value={editedOrder.qc_number} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="full_name" class="block text-sm font-medium text-gray-700">氏名</label>
          <input 
            type="text" 
            id="full_name" 
            bind:value={editedOrder.full_name} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="postal_code" class="block text-sm font-medium text-gray-700">郵便番号</label>
          <input 
            type="text" 
            id="postal_code" 
            bind:value={editedOrder.postal_code} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700">住所</label>
          <input 
            type="text" 
            id="address" 
            bind:value={editedOrder.address} 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="phone_number" class="block text-sm font-medium text-gray-700">電話番号</label>
          <input 
            type="text" 
            id="phone_number" 
            bind:value={editedOrder.phone_number} 
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
            bind:value={editedOrder.packing_notes} 
            rows="3" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        
        <div>
          <label for="inspection_notes" class="block text-sm font-medium text-gray-700">検品メモ</label>
          <textarea 
            id="inspection_notes" 
            bind:value={editedOrder.inspection_notes} 
            rows="3" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        
        <div>
          <label for="procurement_report" class="block text-sm font-medium text-gray-700">仕入レポート</label>
          <textarea 
            id="procurement_report" 
            bind:value={editedOrder.procurement_report} 
            rows="3" 
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
      </div>
    </div>
    

    
    <div class="flex justify-end space-x-3">
      <a 
        href={`/orders/${data.order.order_id}`} 
        class="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        キャンセル
      </a>
      <button 
        type="submit" 
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        保存
      </button>
    </div>
  </form>
</div>
