<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<div class="space-y-6">
	<div class="flex justify-between items-center mb-6">
		<h1 class="text-2xl font-bold text-gray-800">顧客情報編集</h1>
		<div class="flex space-x-3">
			<a href="/customers/{data.customer.id}" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
				キャンセル
			</a>
		</div>
	</div>

	<div class="bg-white p-6 rounded-lg shadow">
		<form method="POST" use:enhance class="space-y-6">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- 顧客ID（読み取り専用） -->
				<div>
					<label for="customerId" class="block text-sm font-medium text-gray-700 mb-1">顧客ID</label>
					<input
						type="text"
						id="customerId"
						value={data.customer.id}
						disabled
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
					/>
				</div>

				<!-- 顧客名 -->
				<div>
					<label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">顧客名 <span class="text-red-500">*</span></label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						required
						value={data.customer.name}
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
					/>
				</div>

				<!-- ニックネーム -->
				<div>
					<label for="nickname" class="block text-sm font-medium text-gray-700 mb-1">ニックネーム</label>
					<input
						type="text"
						id="nickname"
						name="nickname"
						value={data.customer.nickname || ''}
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
					/>
				</div>

				<!-- メールアドレス -->
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700 mb-1">メールアドレス <span class="text-red-500">*</span></label>
					<input
						type="email"
						id="email"
						name="email"
						required
						value={data.customer.email}
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
					/>
				</div>

				<!-- チャージ残高（読み取り専用） -->
				<div>
					<label for="balance" class="block text-sm font-medium text-gray-700 mb-1">チャージ残高</label>
					<input
						type="text"
						id="balance"
						value={new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(data.customer.balance)}
						disabled
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
					/>
				</div>

				<!-- 累計入金額（読み取り専用） -->
				<div>
					<label for="totalDeposit" class="block text-sm font-medium text-gray-700 mb-1">累計入金額</label>
					<input
						type="text"
						id="totalDeposit"
						value={new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(data.customer.totalDeposit)}
						disabled
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
					/>
				</div>

				<!-- Chatwork ID -->
				<div>
					<label for="chatworkId" class="block text-sm font-medium text-gray-700 mb-1">Chatwork ID</label>
					<input
						type="text"
						id="chatworkId"
						name="chatworkId"
						value={data.customer.chatworkId || ''}
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
						placeholder="例：tanaka_taro"
					/>
				</div>

				<!-- スプレッドシートURL -->
				<div class="md:col-span-2">
					<label for="spreadsheetUrl" class="block text-sm font-medium text-gray-700 mb-1">スプレッドシートURL</label>
					<input
						type="url"
						id="spreadsheetUrl"
						name="spreadsheetUrl"
						value={data.customer.spreadsheetUrl || ''}
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
						placeholder="例：https://docs.google.com/spreadsheets/d/..."
					/>
				</div>

				<!-- 登録日（読み取り専用） -->
				<div>
					<label for="createdAt" class="block text-sm font-medium text-gray-700 mb-1">登録日</label>
					<input
						type="text"
						id="createdAt"
						value={new Date(data.customer.createdAt).toLocaleString('ja-JP')}
						disabled
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
					/>
				</div>
			</div>

			<!-- 注意書き -->
			<div class="bg-gray-50 p-4 rounded-md">
				<p class="text-sm text-gray-600">
					<span class="font-medium">注意:</span> 顧客情報は慎重に扱ってください。個人情報保護法に基づいた適切な管理が必要です。
				</p>
			</div>

			<!-- 送信ボタン -->
			<div class="flex justify-end">
				<button
					type="submit"
					class="bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
				>
					更新する
				</button>
			</div>
		</form>
	</div>
</div>
