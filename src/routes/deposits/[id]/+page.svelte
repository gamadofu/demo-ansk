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
			style: 'decimal',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(amount);
	}
	
	// 元フォーマット関数
	function formatYuan(amount: number): string {
		return new Intl.NumberFormat('ja-JP', {
			style: 'decimal',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}).format(amount);
	}
	
	// 週タイプのラベル
	function getWeekTypeLabel(type: string): string {
		return type === 'charge' ? 'チャージ' : '消化';
	}
	
	// 週タイプの色クラス
	function getWeekTypeColorClass(type: string): string {
		return type === 'charge' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-rose-100 text-rose-800 border-rose-200';
	}
</script>

<div class="space-y-6">
	<div class="flex justify-between items-center mb-6">
		<h1 class="text-2xl font-bold text-gray-800">入金詳細</h1>
		<div class="flex space-x-3">
			<a href="/deposits" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
				入金一覧に戻る
			</a>
			<a href="/deposits/{data.deposit.deposit_id}/edit" class="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded">
				編集する
			</a>
		</div>
	</div>

	<!-- 入金情報カード -->
	<div class="bg-white p-6 rounded-lg shadow">
		<h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">入金情報</h2>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<dl class="space-y-4">
					<div>
						<dt class="text-sm font-medium text-gray-500">入金ID</dt>
						<dd class="text-base">{data.deposit.deposit_id}</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">顧客名</dt>
						<dd class="text-base">{data.customer.name} ({data.customer.nickname})</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">入金日時</dt>
						<dd class="text-base">{formatDate(data.deposit.deposit_date)}</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">種別</dt>
						<dd class="text-base">
							<span class={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getWeekTypeColorClass(data.deposit.week_type)}`}>
								{getWeekTypeLabel(data.deposit.week_type)}
							</span>
						</dd>
					</div>
				</dl>
			</div>
			
			<div>
				<dl class="space-y-4">
					<div>
						<dt class="text-sm font-medium text-gray-500">金額（円）</dt>
						<dd class="text-base">{formatCurrency(data.deposit.amount_jpy)}</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">元還元</dt>
						<dd class="text-base">{formatYuan(data.deposit.yuan_conversion)}</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">換算レート</dt>
						<dd class="text-base">{data.deposit.exchange_rate}</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">メモ</dt>
						<dd class="text-base">{data.deposit.note || '（なし）'}</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
	
	<!-- 残高情報カード -->
	<div class="bg-white p-6 rounded-lg shadow">
		<h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">残高情報</h2>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<dl class="space-y-4">
					<div>
						<dt class="text-sm font-medium text-gray-500">残高（元）</dt>
						<dd class="text-lg font-semibold">{formatYuan(data.deposit.remaining_yuan)}</dd>
					</div>
				</dl>
			</div>
			
			<div>
				<dl class="space-y-4">
					<div>
						<dt class="text-sm font-medium text-gray-500">残高（円）</dt>
						<dd class="text-lg font-semibold">{formatCurrency(data.deposit.remaining_jpy)}</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
	
	<!-- 顧客情報カード -->
	<div class="bg-white p-6 rounded-lg shadow">
		<h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">顧客情報</h2>
		
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
				</dl>
			</div>
			
			<div>
				<dl class="space-y-4">
					<div>
						<dt class="text-sm font-medium text-gray-500">ニックネーム</dt>
						<dd class="text-base">{data.customer.nickname}</dd>
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
		</div>
		
		<div class="mt-4 pt-4 border-t border-gray-200">
			<a href="/customers/{data.customer.id}" class="text-blue-600 hover:underline">
				顧客詳細を表示
			</a>
		</div>
	</div>
</div>
