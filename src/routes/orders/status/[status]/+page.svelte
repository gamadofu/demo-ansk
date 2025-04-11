<script lang="ts">
  import type { PageData } from './$types';
  import OrderList from '$lib/components/OrderList.svelte';
  import { orderStatusLabels } from '$lib/data/orderLabels';
  
  export let data: PageData;
</script>

<svelte:head>
  <title>{orderStatusLabels[data.currentStatus]} 注文一覧 | 購入代行管理システム</title>
</svelte:head>

<OrderList orders={data.orders} currentStatus={data.currentStatus} />
