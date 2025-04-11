<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
  const { order } = data;
  
  function formatDate(dateString: string) {
    if (!dateString) return '未設定';
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP');
  }
  
  function formatPrice(price: number) {
    return new Intl.NumberFormat('ja-JP', { 
      style: 'currency', 
      currency: 'CNY' 
    }).format(price);
  }
</script>

<svelte:head>
  <title>注文詳細: {order.shop_order_id} | 購入代行管理システム</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <div class="flex justify-between items-center mb-6">
    <div>
      <a href="/orders" class="text-blue-600 hover:text-blue-800">← 注文一覧に戻る</a>
      <h1 class="text-2xl font-bold mt-2">注文詳細: {order.shop_order_id}</h1>
    </div>
    <div class="flex space-x-4">
      <a href={`/orders/${order.order_id}/edit`} class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
        編集
      </a>
    </div>
  </div>
  
  <div class="bg-white shadow overflow-hidden rounded-lg mb-8">
    <div class="px-4 py-5 sm:px-6 bg-gray-50">
      <h3 class="text-lg leading-6 font-medium text-gray-900">基本情報</h3>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <span class="text-sm font-medium text-gray-500">注文ID</span>
        <p class="mt-1 text-sm text-gray-900">{order.shop_order_id}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">受付日</span>
        <p class="mt-1 text-sm text-gray-900">{formatDate(order.order_received_date)}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">注文日</span>
        <p class="mt-1 text-sm text-gray-900">{formatDate(order.order_date)}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">顧客名</span>
        <p class="mt-1 text-sm text-gray-900">{order.customer_name}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">ニックネーム</span>
        <p class="mt-1 text-sm text-gray-900">{order.nickname || '未設定'}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">ステータス</span>
        <p class="mt-1">
          <span class={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
            ${order.china_order_status === '発送済' || order.china_order_status === '到着済' ? 'bg-green-100 text-green-800' : 
            order.china_order_status === '交換中' ? 'bg-orange-100 text-orange-800' : 
            order.china_order_status === '注文中' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-gray-100 text-gray-800'}`}>
            {order.china_order_status}
          </span>
        </p>
      </div>
    </div>
  </div>
  
  <div class="bg-white shadow overflow-hidden rounded-lg mb-8">
    <div class="px-4 py-5 sm:px-6 bg-gray-50">
      <h3 class="text-lg leading-6 font-medium text-gray-900">商品情報</h3>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <span class="text-sm font-medium text-gray-500">商品管理番号</span>
        <p class="mt-1 text-sm text-gray-900">{order.product_management_number}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">商品名（日本語）</span>
        <p class="mt-1 text-sm text-gray-900">{order.product_name_jp}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">バリエーション（日本語）</span>
        <p class="mt-1 text-sm text-gray-900">{order.variation_jp}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">商品名（中国語）</span>
        <p class="mt-1 text-sm text-gray-900">{order.product_name_cn || '未設定'}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">カラー</span>
        <p class="mt-1 text-sm text-gray-900">{order.color || '未設定'}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">サイズ</span>
        <p class="mt-1 text-sm text-gray-900">{order.size || '未設定'}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">数量</span>
        <p class="mt-1 text-sm text-gray-900">{order.quantity}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">素材</span>
        <p class="mt-1 text-sm text-gray-900">{order.material || '未設定'}</p>
      </div>
    </div>
  </div>
  
  <div class="bg-white shadow overflow-hidden rounded-lg mb-8">
    <div class="px-4 py-5 sm:px-6 bg-gray-50">
      <h3 class="text-lg leading-6 font-medium text-gray-900">サプライヤー情報</h3>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
      {#if order.supplier_url_1}
        <div class="mb-4">
          <span class="text-sm font-medium text-gray-500">サプライヤーURL 1</span>
          <p class="mt-1 text-sm text-blue-600 break-all">
            <a href={order.supplier_url_1} target="_blank" rel="noopener noreferrer">{order.supplier_url_1}</a>
          </p>
        </div>
      {/if}
      
      {#if order.supplier_url_2}
        <div class="mb-4">
          <span class="text-sm font-medium text-gray-500">サプライヤーURL 2</span>
          <p class="mt-1 text-sm text-blue-600 break-all">
            <a href={order.supplier_url_2} target="_blank" rel="noopener noreferrer">{order.supplier_url_2}</a>
          </p>
        </div>
      {/if}
      
      {#if order.supplier_url_3}
        <div class="mb-4">
          <span class="text-sm font-medium text-gray-500">サプライヤーURL 3</span>
          <p class="mt-1 text-sm text-blue-600 break-all">
            <a href={order.supplier_url_3} target="_blank" rel="noopener noreferrer">{order.supplier_url_3}</a>
          </p>
        </div>
      {/if}
      
      {#if order.supplier_url_4}
        <div class="mb-4">
          <span class="text-sm font-medium text-gray-500">サプライヤーURL 4</span>
          <p class="mt-1 text-sm text-blue-600 break-all">
            <a href={order.supplier_url_4} target="_blank" rel="noopener noreferrer">{order.supplier_url_4}</a>
          </p>
        </div>
      {/if}
      
      {#if !order.supplier_url_1 && !order.supplier_url_2 && !order.supplier_url_3 && !order.supplier_url_4}
        <p class="text-sm text-gray-500">サプライヤー情報が設定されていません</p>
      {/if}
    </div>
  </div>
  
  <div class="bg-white shadow overflow-hidden rounded-lg mb-8">
    <div class="px-4 py-5 sm:px-6 bg-gray-50">
      <h3 class="text-lg leading-6 font-medium text-gray-900">価格情報</h3>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <span class="text-sm font-medium text-gray-500">仕入価格（元）</span>
        <p class="mt-1 text-sm text-gray-900">{formatPrice(order.purchase_price_cny)}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">中国国内配送料（元）</span>
        <p class="mt-1 text-sm text-gray-900">{order.china_shipping_fee_cny ? formatPrice(order.china_shipping_fee_cny) : '未設定'}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">国際配送料（元）</span>
        <p class="mt-1 text-sm text-gray-900">{order.international_shipping_fee_cny ? formatPrice(order.international_shipping_fee_cny) : '未設定'}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">商品小計（元）</span>
        <p class="mt-1 text-sm text-gray-900">{formatPrice(order.product_subtotal)}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">サービス料（円）</span>
        <p class="mt-1 text-sm text-gray-900">{new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(order.service_fee)}</p>
      </div>
    </div>
  </div>
  
  <div class="bg-white shadow overflow-hidden rounded-lg mb-8">
    <div class="px-4 py-5 sm:px-6 bg-gray-50">
      <h3 class="text-lg leading-6 font-medium text-gray-900">配送・顧客情報</h3>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <span class="text-sm font-medium text-gray-500">発送日</span>
        <p class="mt-1 text-sm text-gray-900">{order.shipping_date ? formatDate(order.shipping_date) : '未設定'}</p>
      </div>
      
      <div>
        <span class="text-sm font-medium text-gray-500">追跡番号</span>
        <p class="mt-1 text-sm text-gray-900">{order.tracking_number || '未設定'}</p>
      </div>
      
      <div>
        <span class="text-sm font-medium text-gray-500">氏名</span>
        <p class="mt-1 text-sm text-gray-900">{order.full_name || '未設定'}</p>
      </div>
      
      <div>
        <span class="text-sm font-medium text-gray-500">郵便番号</span>
        <p class="mt-1 text-sm text-gray-900">{order.postal_code || '未設定'}</p>
      </div>
      
      <div>
        <span class="text-sm font-medium text-gray-500">住所</span>
        <p class="mt-1 text-sm text-gray-900">{order.address || '未設定'}</p>
      </div>
      
      <div>
        <span class="text-sm font-medium text-gray-500">電話番号</span>
        <p class="mt-1 text-sm text-gray-900">{order.phone_number || '未設定'}</p>
      </div>
    </div>
  </div>
  
  <div class="bg-white shadow overflow-hidden rounded-lg mb-8">
    <div class="px-4 py-5 sm:px-6 bg-gray-50">
      <h3 class="text-lg leading-6 font-medium text-gray-900">備考</h3>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
      <div class="mb-4">
        <span class="text-sm font-medium text-gray-500">梱包メモ</span>
        <p class="mt-1 text-sm text-gray-900 whitespace-pre-line">{order.packing_notes || '未設定'}</p>
      </div>
      
      <div class="mb-4">
        <span class="text-sm font-medium text-gray-500">検品メモ</span>
        <p class="mt-1 text-sm text-gray-900 whitespace-pre-line">{order.inspection_notes || '未設定'}</p>
      </div>
      
      <div class="mb-4">
        <span class="text-sm font-medium text-gray-500">仕入レポート</span>
        <p class="mt-1 text-sm text-gray-900 whitespace-pre-line">{order.procurement_report || '未設定'}</p>
      </div>
      
      <div>
        <span class="text-sm font-medium text-gray-500">QC番号</span>
        <p class="mt-1 text-sm text-gray-900">{order.qc_number || '未設定'}</p>
      </div>
    </div>
  </div>
  

  
  <div class="bg-white shadow overflow-hidden rounded-lg">
    <div class="px-4 py-5 sm:px-6 bg-gray-50">
      <h3 class="text-lg leading-6 font-medium text-gray-900">システム情報</h3>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <span class="text-sm font-medium text-gray-500">作成日時</span>
        <p class="mt-1 text-sm text-gray-900">{new Date(order.created_at).toLocaleString('ja-JP')}</p>
      </div>
      <div>
        <span class="text-sm font-medium text-gray-500">更新日時</span>
        <p class="mt-1 text-sm text-gray-900">{new Date(order.updated_at).toLocaleString('ja-JP')}</p>
      </div>
    </div>
  </div>
</div>
