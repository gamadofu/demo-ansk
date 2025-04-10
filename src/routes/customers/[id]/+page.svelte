<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
	
	// 日付フォーマット関数
	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('ja-JP', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(date);
	}
	
	// 金額フォーマット関数
	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('ja-JP', {
			style: 'currency',
			currency: 'JPY'
		}).format(amount);
	}
</script>

<div class="space-y-6">
	<div class="flex justify-between items-center mb-6">
		<h1 class="text-2xl font-bold text-gray-800">顧客詳細</h1>
		<div class="flex space-x-3">
			<a href="/customers" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
				顧客一覧に戻る
			</a>
			<a href="/customers/{data.customer.id}/edit" class="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded">
				編集する
			</a>
		</div>
	</div>

	<!-- 顧客情報カード -->
	<div class="bg-white p-6 rounded-lg shadow">
		<h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">基本情報</h2>
		
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
						<dd class="text-base">{data.customer.nickname || '未設定'}</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">メールアドレス</dt>
						<dd class="text-base">
							<a href="mailto:{data.customer.email}" class="text-teal-600 hover:underline">
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
						<dd class="text-base font-semibold text-teal-700">{formatCurrency(data.customer.balance)}</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">累計入金額</dt>
						<dd class="text-base">{formatCurrency(data.customer.totalDeposit)}</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">Chatwork ID</dt>
						<dd class="text-base">
							{#if data.customer.chatworkId}
								<a href="https://www.chatwork.com/#!rid{data.customer.chatworkId}" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:underline">
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
								<a href="{data.customer.spreadsheetUrl}" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:underline">
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
				</dl>
			</div>
		</div>
	</div>

	<!-- 入金履歴 -->
	<div class="bg-white p-6 rounded-lg shadow">
		<h2 class="text-xl font-semibold mb-4">入金履歴</h2>
		<div class="py-4 text-center text-gray-500 border border-dashed border-gray-300 rounded-md">
			<p class="text-lg font-medium">実装予定</p>
			<p class="text-sm mt-2">入金履歴機能は現在開発中です</p>
		</div>
	</div>

	<!-- 注文履歴 -->
	<div class="bg-white p-6 rounded-lg shadow">
		<h2 class="text-xl font-semibold mb-4">注文履歴</h2>
		<div class="py-4 text-center text-gray-500 border border-dashed border-gray-300 rounded-md">
			<p class="text-lg font-medium">実装予定</p>
			<p class="text-sm mt-2">注文履歴機能は現在開発中です</p>
		</div>
	</div>
</div>
