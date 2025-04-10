<script lang="ts">
  import { page } from '$app/stores';
  
  type MenuItem = {
    title: string;
    path: string;
    icon: string;
  };
  
  const menuItems: MenuItem[] = [
    { title: 'ダッシュボード', path: '/', icon: 'home' },
    { title: '顧客管理', path: '/customers', icon: 'users' },
    { title: '注文管理', path: '#', icon: 'shopping-cart' },
    { title: '入金管理', path: '#', icon: 'credit-card' },
    { title: '仕入先管理', path: '#', icon: 'truck' },
    { title: '検品・オプション', path: '#', icon: 'check-square' },
    { title: '配送管理', path: '#', icon: 'package' },
    { title: '副材資材管理', path: '#', icon: 'box' },
  ];
</script>

<div class="h-screen bg-gray-800 text-white w-64 flex flex-col fixed left-0 top-0">
  <div class="p-4 border-b border-gray-700">
    <h1 class="text-xl font-bold">購入代行管理</h1>
  </div>
  
  <nav class="flex-1 overflow-y-auto py-4">
    <ul class="space-y-1">
      {#each menuItems as item}
        <li>
          <a 
            href={item.path} 
            class="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors {$page.url.pathname === item.path ? 'bg-blue-600' : ''}"
          >
            <span class="mr-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {#if item.icon === 'home'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                {:else if item.icon === 'users'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                {:else if item.icon === 'shopping-cart'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                {:else if item.icon === 'credit-card'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                {:else if item.icon === 'truck'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                {:else if item.icon === 'check-square'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                {:else if item.icon === 'package'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                {:else if item.icon === 'box'}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l-4-4m4 4l4-4"></path>
                {/if}
              </svg>
            </span>
            <span>{item.title}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  
  <div class="p-4 border-t border-gray-700">
    <div class="flex items-center">
      <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-800 font-bold">
        A
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium">管理者</p>
        <p class="text-xs text-gray-400">admin@example.com</p>
      </div>
    </div>
  </div>
</div>
