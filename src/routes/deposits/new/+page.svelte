<script lang="ts">
	import type { PageData } from './$types';
	import DepositForm from '$lib/components/DepositForm.svelte';
	
	export let data: PageData;
	
	// 初期データ
	let deposit = {
		customer_id: '',
		deposit_date: data.currentDate,
		week_type: 'charge',
		amount_jpy: 0,
		yuan_conversion: 0,
		exchange_rate: data.defaultExchangeRate,
		remaining_yuan: 0,
		remaining_jpy: 0,
		note: ''
	};
	
	// フォーム送信処理
	function handleSubmit(event) {
		const formData = event.detail;
		// 実際のアプリケーションではここでAPIを呼び出してデータを保存
		alert('入金情報が登録されました（モックデータのため実際には保存されていません）');
		window.location.href = '/deposits';
	}
</script>

<DepositForm 
	customers={data.customers}
	deposit={deposit}
	title="新規入金登録"
	submitButtonText="登録する"
	on:submit={handleSubmit}
/>
