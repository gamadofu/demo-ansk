<script lang="ts">
  import type { PageData } from './$types';
  import OrderList from '$lib/components/OrderList.svelte';
  
  export let data: PageData;
</script>

<svelte:head>
  <title>注文一覧 | 購入代行管理システム</title>
</svelte:head>

<OrderList orders={data.orders} />
