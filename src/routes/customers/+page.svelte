<script lang="ts">
	export let data;
	const { customers } = data;

	// 金額をフォーマットする関数
	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('ja-JP', {
			style: 'currency',
			currency: 'JPY',
			maximumFractionDigits: 0
		}).format(amount);
	}

	// 日付をフォーマットする関数
	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('ja-JP', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(date);
	}

	// 検索機能
	let searchQuery = '';
	$: filteredCustomers = customers.filter(customer => 
		customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
		customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
		customer.storeId.toLowerCase().includes(searchQuery.toLowerCase())
	);

	// ソート機能
	let sortField = 'name';
	let sortDirection = 'asc';

	function sortCustomers(field: string) {
		if (sortField === field) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortField = field;
			sortDirection = 'asc';
		}
	}

	$: sortedCustomers = [...filteredCustomers].sort((a, b) => {
		// 型安全にソートするためのヘルパー関数
		const getValueByField = (customer: typeof customers[0], field: string) => {
			switch(field) {
				case 'id': return customer.id;
				case 'name': return customer.name;
				case 'email': return customer.email;
				case 'balance': return customer.balance;
				case 'storeType': return customer.storeType;
				case 'storeId': return customer.storeId;
				case 'createdAt': return customer.createdAt;
				default: return '';
			}
		};

		const aValue = getValueByField(a, sortField);
		const bValue = getValueByField(b, sortField);
		
		if (typeof aValue === 'string' && typeof bValue === 'string') {
			return sortDirection === 'asc' 
				? aValue.localeCompare(bValue) 
				: bValue.localeCompare(aValue);
		} else if (typeof aValue === 'number' && typeof bValue === 'number') {
			return sortDirection === 'asc' 
				? aValue - bValue 
				: bValue - aValue;
		} else {
			return 0;
		}
	});
</script>

<div class="space-y-6">
	<div class="flex justify-between items-center mb-6">
		<h1 class="text-2xl font-bold text-gray-800">顧客管理</h1>
		<a href="/customers/new" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
			新規顧客登録
		</a>
	</div>

	<!-- 検索フィルター -->
	<div class="bg-white p-4 rounded-lg shadow mb-6">
		<div class="flex flex-col md:flex-row gap-4">
			<div class="flex-1">
				<label for="search" class="block text-sm font-medium text-gray-700 mb-1">検索</label>
				<input
					type="text"
					id="search"
					bind:value={searchQuery}
					placeholder="顧客名、メールアドレス、ストアIDで検索"
					class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>
		</div>
	</div>

	<!-- 顧客一覧テーブル -->
	<div class="bg-white rounded-lg shadow overflow-hidden">
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th 
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
							on:click={() => sortCustomers('id')}
						>
							ID
							{#if sortField === 'id'}
								<span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
							{/if}
						</th>
						<th 
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
							on:click={() => sortCustomers('name')}
						>
							顧客名
							{#if sortField === 'name'}
								<span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
							{/if}
						</th>
						<th 
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
							on:click={() => sortCustomers('storeType')}
						>
							ストアタイプ
							{#if sortField === 'storeType'}
								<span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
							{/if}
						</th>
						<th 
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
							on:click={() => sortCustomers('storeId')}
						>
							ストアID
							{#if sortField === 'storeId'}
								<span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
							{/if}
						</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							メールアドレス
						</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Chatwork
						</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							スプレッドシート
						</th>
						<th 
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
							on:click={() => sortCustomers('balance')}
						>
							チャージ残高
							{#if sortField === 'balance'}
								<span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
							{/if}
						</th>
						<th 
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
							on:click={() => sortCustomers('createdAt')}
						>
							登録日
							{#if sortField === 'createdAt'}
								<span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
							{/if}
						</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							アクション
						</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					{#each sortedCustomers as customer}
						<tr class="hover:bg-gray-50">
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
								<a href="/customers/{customer.id}">{customer.id}</a>
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{customer.name}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{#if customer.storeType === 'base'}
									<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
										BASE
									</span>
								{:else if customer.storeType === 'shopify'}
									<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
										Shopify
									</span>
								{:else}
									未設定
								{/if}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{customer.storeId}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{customer.email}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								<a href="https://www.chatwork.com/#!rid{customer.chatworkId}" target="_blank" class="text-blue-600 hover:text-blue-900">{customer.chatworkId}</a>
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								<a href="{customer.spreadsheetUrl}" target="_blank" class="text-blue-600 hover:text-blue-900">スプレッドシート</a>
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{formatCurrency(customer.balance)}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{formatDate(customer.createdAt)}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
								<div class="flex space-x-2">
									<a href="/customers/{customer.id}" class="bg-teal-700 hover:bg-teal-800 text-white py-1 px-2 rounded text-xs">詳細</a>
									<a href="/customers/{customer.id}/edit" class="bg-amber-700 hover:bg-amber-800 text-white py-1 px-2 rounded text-xs">編集</a>
								</div>
							</td>
						</tr>
					{:else}
						<tr>
							<td colspan="9" class="px-6 py-4 text-center text-sm text-gray-500">
								顧客が見つかりません
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		{#if sortedCustomers.length > 0}
			<div class="bg-gray-50 px-6 py-3 border-t border-gray-200">
				<p class="text-sm text-gray-700">
					全 <span class="font-medium">{customers.length}</span> 件中 
					<span class="font-medium">{sortedCustomers.length}</span> 件表示
				</p>
			</div>
		{/if}
	</div>
</div>
