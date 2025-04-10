<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="space-y-6">
	<div class="flex justify-between items-center mb-6">
		<h1 class="text-2xl font-bold text-gray-800">新規顧客登録</h1>
		<a href="/customers" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
			顧客一覧に戻る
		</a>
	</div>

	<div class="bg-white p-6 rounded-lg shadow">
		<form method="POST" use:enhance class="space-y-6">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- 顧客名 -->
				<div>
					<label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">顧客名 <span class="text-red-500">*</span></label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						required
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
						placeholder="例：田中太郎"
					/>
				</div>

				<!-- ニックネーム -->
				<div>
					<label for="nickname" class="block text-sm font-medium text-gray-700 mb-1">ニックネーム</label>
					<input
						type="text"
						id="nickname"
						name="nickname"
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
						placeholder="例：タロー"
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
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
						placeholder="例：tanaka@example.com"
					/>
				</div>

				<!-- Chatwork ID -->
				<div>
					<label for="chatworkId" class="block text-sm font-medium text-gray-700 mb-1">Chatwork ID</label>
					<input
						type="text"
						id="chatworkId"
						name="chatworkId"
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
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
						placeholder="例：https://docs.google.com/spreadsheets/d/..."
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
					class="bg-teal-700 hover:bg-teal-800 text-white py-2 px-6 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
				>
					登録する
				</button>
			</div>
		</form>
	</div>
</div>
