<script setup>
import { ref, watch, computed } from 'vue';
import { useSearchStore } from '../stores/counter.js';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const store = useSearchStore();
// const searchSuggestions = ref(['徐佳瑩', '洪佩瑜', '周杰倫', '鄭宜農', '安溥']);
const filterData = ref([]);
const searchInput = computed(() => store.searchInput); // 監聽ref 也會返回ref
// watch(searchInput, (newValue, oldValue) => {
//   console.log('count changed from', oldValue, 'to', newValue);
// });

watch(searchInput, () => {
  // performSearch();
});
function handleSearch() {
  if (route.fullPath !== '/Search' && searchInput.value.split(' ').join('').length !== 0) {
    router.push({ path: `/Search` });
  }
  performSearch();
}
function performSearch() {
  /* 1. 搜尋有字串 2. 比對有沒有字串 3.有的話就顯示建議搜尋框 3.1 沒有的話就把框關掉+清除建議搜尋的陣列 */
  if (searchInput.value && searchInput.value.split(' ').join('').length !== 0) {
    // filterData.value = store.searchSuggestions.filter((item) => item.includes(searchInput.value));
    filterData.value.length ? showSearchBox() : hideSearchBox();
    store.searchHandler();
  } else {
    filterData.value = [];
    hideSearchBox();
  }
}
const showSearchBox = () => {
  document.getElementById('searchbox').classList.remove('hidden');
};
const hideSearchBox = () => {
  document.getElementById('searchbox').classList.add('hidden');
};

// 監聽 click 判斷點擊的區域，如果不在同一個組件內就會 hidden 建議搜尋框。如果離開焦點，再重新回到焦點必須要比對過陣列有資料才會出現框。
document.addEventListener('click', (e) => {
  let id = document.getElementById('outer');
  const isSuggestionClicked = id.contains(e.target);
  if (!isSuggestionClicked) {
    hideSearchBox();
  } else if (filterData.value.length) {
    showSearchBox();
  }
});
function clearSearchInput() {
  store.searchInput = '';
  store.storageMatchData.length = 0;
}
</script>
<!-- 我是搜尋框的組件 -->
<template>
  <div id="outer" class="relative block w-1/2">
    <!-- 搜尋建議的框(要記得設上限~) -->
    <div id="searchbox" class="w-full bg-gray-100 absolute mt-[42px] border rounded hidden box-border z-40">
      <li
        id="suggestion"
        class="list-none flex items-center pl-2 py-1 hover:bg-gray-200"
        v-for="item in filterData"
        :key="item"
        @click="store.updateSearchText(item)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 stroke-slate-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <span class="pl-2"> {{ item }}</span>
      </li>
    </div>
    <span class="sr-only">Search</span>

    <!-- 搜尋框本體 -->
    <div>
      <div class="relative">
        <!-- 放大鏡 icon -->
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-slate-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <!-- 搜尋框本框 @focus="showSearchBox" @blur="hideSearchBox" -->
        <input
          v-model="store.searchInput"
          @keyup.enter="handleSearch()"
          class="placeholder:italic placeholder:text-slate-400 w-full border border-slate-300 rounded-md pl-9 shadow-sm block bg-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          placeholder="Search Singer ..."
          type="text"
          name="search"
          autocomplete="off"
        />
        <span @click="clearSearchInput()" class="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>
