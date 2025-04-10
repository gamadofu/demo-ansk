<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';

	// ページデータを取得
	const { data } = $props();
	
	// フォーム送信のステータス管理
	let error = $state(data.error || '');
	let isSubmitting = $state(false);
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
	<div class="max-w-md w-full p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl border border-white border-opacity-20" transition:fade={{ duration: 300 }}>
		<div class="flex flex-col items-center mb-10">
			<div class="w-20 h-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
				</svg>
			</div>
			<h1 class="text-3xl font-bold text-white mb-1">管理画面ログイン</h1>
			<p class="text-gray-300 text-sm">ダッシュボードにアクセスするにはログインしてください</p>
		</div>
		
		<form method="POST" class="space-y-6">
			<div class="relative">
				<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
					</svg>
				</div>
				<input
					type="text"
					id="username"
					name="username"
					required
					class="w-full pl-10 pr-4 py-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
					placeholder="ユーザー名"
				/>
			</div>
			
			<div class="relative">
				<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
				</div>
				<input
					type="password"
					id="password"
					name="password"
					required
					class="w-full pl-10 pr-4 py-3 bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
					placeholder="パスワード"
				/>
			</div>
			
			<div>
				<button
					type="submit"
					class="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 font-medium text-lg flex justify-center items-center"
				>
					ログイン
				</button>
			</div>
		</form>
		
		{#if error}
		<div class="mt-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg" transition:fade={{ duration: 200 }}>
			<p class="text-red-200 text-center">{error}</p>
		</div>
		{/if}

		<div class="mt-8 text-center">
			<p class="text-sm text-gray-400">デモアプリケーション &copy; 2025</p>
		</div>
	</div>
</div>
