<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let customers = [];
  export let deposit = {
    customer_id: '',
    deposit_date: '',
    week_type: 'charge',
    amount_jpy: 0,
    yuan_conversion: 0,
    exchange_rate: 22.00,
    remaining_yuan: 0,
    remaining_jpy: 0,
    note: ''
  };
  export let isEditing = false;
  export let title = '新規入金登録';
  export let submitButtonText = '登録する';
  
  const dispatch = createEventDispatcher();
  
  // 金額計算
  function calculateYuan() {
    if (deposit.amount_jpy && deposit.exchange_rate) {
      deposit.yuan_conversion = Number((deposit.amount_jpy / deposit.exchange_rate).toFixed(2));
      updateRemaining();
    }
  }
  
  // 残高計算
  function updateRemaining() {
    // 実際のアプリケーションでは、顧客の現在の残高を取得して計算する必要があります
    // ここではシンプルに入力された金額をそのまま残高として表示
    if (deposit.week_type === 'charge') {
      deposit.remaining_yuan = deposit.yuan_conversion;
      deposit.remaining_jpy = deposit.amount_jpy;
    } else {
      deposit.remaining_yuan = -deposit.yuan_conversion;
      deposit.remaining_jpy = -deposit.amount_jpy;
    }
  }
  
  // 週タイプ変更時の処理
  function handleWeekTypeChange() {
    updateRemaining();
  }
  
  // フォーム送信
  function handleSubmit() {
    dispatch('submit', deposit);
  }
</script>

<div class="space-y-6">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold text-gray-800">{title}</h1>
    <div>
      <a href="/deposits" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
        入金一覧に戻る
      </a>
    </div>
  </div>
  
  <div class="bg-white p-6 rounded-lg shadow">
    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
      <!-- 顧客選択 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="customer_id" class="block text-sm font-medium text-gray-700 mb-1">顧客</label>
          <select
            id="customer_id"
            bind:value={deposit.customer_id}
            required
            class="w-full p-2 border border-gray-300 rounded"
            disabled={isEditing}
          >
            <option value="" disabled>顧客を選択してください</option>
            {#each customers as customer}
              <option value={customer.id}>
                {customer.name} ({customer.nickname})
              </option>
            {/each}
          </select>
        </div>
        
        <div>
          <label for="deposit_date" class="block text-sm font-medium text-gray-700 mb-1">入金日</label>
          <input
            type="date"
            id="deposit_date"
            bind:value={deposit.deposit_date}
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      
      <!-- 種別情報 -->
      <div>
        <label for="week_type" class="block text-sm font-medium text-gray-700 mb-1">種別</label>
        <select
          id="week_type"
          bind:value={deposit.week_type}
          on:change={handleWeekTypeChange}
          required
          class="w-full p-2 border border-gray-300 rounded"
        >
          <option value="charge">チャージ</option>
          <option value="consumption">消化</option>
        </select>
      </div>
      
      <!-- 金額情報 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label for="amount_jpy" class="block text-sm font-medium text-gray-700 mb-1">金額（円）</label>
          <input
            type="number"
            id="amount_jpy"
            bind:value={deposit.amount_jpy}
            on:input={calculateYuan}
            min="0"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label for="exchange_rate" class="block text-sm font-medium text-gray-700 mb-1">換算レート</label>
          <input
            type="number"
            id="exchange_rate"
            bind:value={deposit.exchange_rate}
            on:input={calculateYuan}
            min="1"
            step="0.01"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label for="yuan_conversion" class="block text-sm font-medium text-gray-700 mb-1">元還元</label>
          <input
            type="number"
            id="yuan_conversion"
            bind:value={deposit.yuan_conversion}
            readonly
            class="w-full p-2 border border-gray-300 rounded bg-gray-50"
          />
        </div>
      </div>
      
      <!-- 残高情報 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="remaining_yuan" class="block text-sm font-medium text-gray-700 mb-1">残高（元）</label>
          <input
            type="number"
            id="remaining_yuan"
            bind:value={deposit.remaining_yuan}
            readonly
            class="w-full p-2 border border-gray-300 rounded bg-gray-50"
          />
        </div>
        
        <div>
          <label for="remaining_jpy" class="block text-sm font-medium text-gray-700 mb-1">残高（円）</label>
          <input
            type="number"
            id="remaining_jpy"
            bind:value={deposit.remaining_jpy}
            readonly
            class="w-full p-2 border border-gray-300 rounded bg-gray-50"
          />
        </div>
      </div>
      
      <!-- メモ -->
      <div>
        <label for="note" class="block text-sm font-medium text-gray-700 mb-1">メモ</label>
        <textarea
          id="note"
          bind:value={deposit.note}
          rows="3"
          class="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      
      <!-- 送信ボタン -->
      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  </div>
</div>
