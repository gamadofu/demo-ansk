<script lang="ts">
	export let data;
	const { kpi, recentOrders } = data;

	// 金額をフォーマットする関数
	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('ja-JP', {
			style: 'currency',
			currency: 'JPY',
			maximumFractionDigits: 0
		}).format(amount);
	}
</script>

<div class="space-y-6">
	<h1 class="text-2xl font-bold text-gray-800 mb-6">ダッシュボード</h1>
	
	<!-- KPIカードセクション -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		<!-- 新規注文数 -->
		<div class="bg-white rounded-lg shadow p-6">
			<div class="flex items-center">
				<div class="p-3 rounded-full bg-blue-100 text-blue-600">
					<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
					</svg>
				</div>
				<div class="ml-4">
					<h2 class="text-gray-600 text-sm">新規注文数</h2>
					<div class="flex items-center">
						<p class="text-2xl font-semibold text-gray-800">{kpi.newOrders.total}</p>
						<span class="text-green-500 text-sm ml-2">+{kpi.newOrders.growth}%</span>
					</div>
					<p class="text-gray-500 text-xs">今日: {kpi.newOrders.today} | 今週: {kpi.newOrders.week} | 今月: {kpi.newOrders.month}</p>
				</div>
			</div>
		</div>
		
		<!-- 対応中注文数 -->
		<div class="bg-white rounded-lg shadow p-6">
			<div class="flex items-center">
				<div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
					<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
				</div>
				<div class="ml-4">
					<h2 class="text-gray-600 text-sm">対応中注文数</h2>
					<div class="flex items-center">
						<p class="text-2xl font-semibold text-gray-800">{kpi.processingOrders.total}</p>
					</div>
					<p class="text-gray-500 text-xs">発送待ち: {kpi.processingOrders.shipping} | 検品中: {kpi.processingOrders.inspection} | 検品完了: {kpi.processingOrders.inspectionComplete}</p>
				</div>
			</div>
		</div>
		
		<!-- 完了注文数 -->
		<div class="bg-white rounded-lg shadow p-6">
			<div class="flex items-center">
				<div class="p-3 rounded-full bg-green-100 text-green-600">
					<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
				</div>
				<div class="ml-4">
					<h2 class="text-gray-600 text-sm">完了注文数</h2>
					<div class="flex items-center">
						<p class="text-2xl font-semibold text-gray-800">{kpi.completedOrders.total}</p>
						<span class="text-green-500 text-sm ml-2">+{kpi.completedOrders.growth}%</span>
					</div>
					<p class="text-gray-500 text-xs">今日: {kpi.completedOrders.today} | 今週: {kpi.completedOrders.week} | 今月: {kpi.completedOrders.month}</p>
				</div>
			</div>
		</div>
		
		<!-- 取引金額 -->
		<div class="bg-white rounded-lg shadow p-6">
			<div class="flex items-center">
				<div class="p-3 rounded-full bg-purple-100 text-purple-600">
					<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
				</div>
				<div class="ml-4">
					<h2 class="text-gray-600 text-sm">取引金額</h2>
					<div class="flex items-center">
						<p class="text-2xl font-semibold text-gray-800">{formatCurrency(kpi.revenue.total)}</p>
						<span class="text-green-500 text-sm ml-2">+{kpi.revenue.growth}%</span>
					</div>
					<p class="text-gray-500 text-xs">今日: {formatCurrency(kpi.revenue.today)} | 今週: {formatCurrency(kpi.revenue.week)}</p>
				</div>
			</div>
		</div>
	</div>
	
	<!-- クイックアクセスセクション -->
	<div class="bg-white rounded-lg shadow p-6">
		<h2 class="text-lg font-semibold text-gray-800 mb-4">クイックアクセス</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<div class="flex items-center p-4 bg-blue-50 rounded-lg">
				<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
				</svg>
				<span class="ml-3 text-blue-800 font-medium">注文検索（実装予定）</span>
			</div>
			
			<div class="flex items-center p-4 bg-yellow-50 rounded-lg">
				<svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				<span class="ml-3 text-yellow-800 font-medium">対応中注文（実装予定）</span>
			</div>
			
			<div class="flex items-center p-4 bg-green-50 rounded-lg">
				<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
				</svg>
				<span class="ml-3 text-green-800 font-medium">入金管理（実装予定）</span>
			</div>
			
			<a href="/customers" class="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
				<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
				</svg>
				<span class="ml-3 text-purple-800 font-medium">顧客管理</span>
			</a>
		</div>
	</div>
	
	<!-- 最近の注文セクション -->
	<div class="bg-white rounded-lg shadow overflow-hidden">
		<div class="p-6 border-b border-gray-200">
			<h2 class="text-lg font-semibold text-gray-800">最近の注文</h2>
		</div>
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">注文ID</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">顧客名</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">商品</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金額</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ステータス</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日付</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					{#each recentOrders as order}
					<tr>
						<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{order.id}</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(order.amount)}</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-{order.statusColor}-100 text-{order.statusColor}-800">{order.status}</span>
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
					</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="p-4 border-t border-gray-200 bg-gray-50 text-right">
			<span class="text-gray-500 text-sm font-medium">すべての注文を表示（実装予定）</span>
		</div>
	</div>
</div>
