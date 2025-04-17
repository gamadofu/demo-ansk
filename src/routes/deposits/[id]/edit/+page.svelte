<script lang="ts">
	import type { PageData } from './$types';
	import DepositForm from '$lib/components/DepositForm.svelte';
	
	export let data: PageData;
	
	// 初期データ
	let deposit = {
		customer_id: data.deposit.customer_id,
		deposit_date: data.deposit.deposit_date.split('T')[0], // 日付部分のみ取得
		week_type: data.deposit.week_type,
		amount_jpy: data.deposit.amount_jpy,
		yuan_conversion: data.deposit.yuan_conversion,
		exchange_rate: data.deposit.exchange_rate,
		remaining_yuan: data.deposit.remaining_yuan,
		remaining_jpy: data.deposit.remaining_jpy,
		note: data.deposit.note
	};
	
	// フォーム送信処理
	function handleSubmit(event) {
		const formData = event.detail;
		// 実際のアプリケーションではここでAPIを呼び出してデータを更新
		alert('入金情報が更新されました（モックデータのため実際には保存されていません）');
		window.location.href = '/deposits';
	}
</script>

<DepositForm 
	customers={data.customers}
	deposit={deposit}
	isEditing={true}
	title="入金情報編集"
	submitButtonText="更新する"
	on:submit={handleSubmit}
/>
