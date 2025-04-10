<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';

	let showMobileMenu = $state(false);
	let pageTitle = $state('ダッシュボード');
	let { children } = $props();

	// ログインページかどうかを判定
	let isLoginPage = $derived($page.url.pathname === '/login');
</script>

{#if isLoginPage}
	<!-- ログインページの場合は子コンポーネントのみをレンダリング -->
	{@render children()}
{:else}
	<!-- 通常のレイアウト -->
	<div class="flex h-screen bg-gray-50">
		<!-- サイドバー -->
		<div class="{showMobileMenu ? 'block' : 'hidden'} md:block">
			<Sidebar />
		</div>

		<!-- メインコンテンツ -->
		<div class="flex-1 flex flex-col ml-0 md:ml-64">
			<Header title={pageTitle} bind:showMobileMenu />

			<main class="flex-1 overflow-y-auto p-6 mt-16">
				{@render children()}
			</main>

			<footer class="bg-white p-4 shadow-inner text-center text-gray-500 text-sm">
				<p>&copy; 2025 購入代行管理システム</p>
			</footer>
		</div>
	</div>
{/if}
