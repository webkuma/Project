<script setup>
import { useSearchStore } from '../stores/counter.js';
import { RouterLink } from 'vue-router';
import { ref as vueRef, onMounted, onBeforeMount } from 'vue';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, update, push, child } from 'firebase/database';
import { useRouter } from 'vue-router';
import Loading from '../components/Loading.vue';

const router = useRouter();
const firebaseConfig = {
  apiKey: 'AIzaSyCngOWSZwnTjBGqx3BehB5PeqTg7qENDLI',
  authDomain: 'earnest-runner-189507.firebaseapp.com',
  databaseURL: 'https://earnest-runner-189507.firebaseio.com',
  projectId: 'earnest-runner-189507',
  storageBucket: 'earnest-runner-189507.appspot.com',
  messagingSenderId: '142419818564',
  appId: '1:142419818564:web:6b1035fd5a5e3d3d5ce411',
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const store = useSearchStore();
const isLoading = vueRef(1);
const sortedEntries = vueRef(0);
const sortedObj = vueRef(0);
const isReverseArray = vueRef(true);
const artist = [{ name: '徐佳瑩' }, { name: 'HUSH' }, { name: '周杰倫' }, { name: '洪佩瑜' }];
onMounted(async () => {
  isLoading.value = 1;
  await router.isReady();
  // const year = router.currentRoute.value.params['year'];
  const dbRef = ref(getDatabase());
  get(child(dbRef, `/`)).then((snapshot) => {
    if (snapshot.exists()) {
      // 把資料轉陣列按照order排序
      store.sortedEntries = Object.entries(snapshot.val());
      // store.sortedEntries = Object.entries(snapshot.val()).sort((a, b) => a[1].order - b[1].order);
      // 把資料轉回物件(物件不能排序)
      // sortedObj.value = Object.fromEntries(sortedEntries.value);
      // console.log(sortedEntries.value);
      store.searchHandler();
      isLoading.value = 0;
    }
  });
});
function getRecommendList() {
  let unique = [...new Set(store.searchSuggestions)];
  unique.splice(12); // 只顯示三年的資料，一年四個歌手 0~12
  return unique;
}
function reverseArray() {
  isReverseArray.value = !isReverseArray.value;
  store.storageMatchData.reverse();
}

// const storageMatchData = vueRef([]);
// function searchHandler() {
//   /* 第一層做年份的foreach: 2021 2022 2023
//   第二層取獎項裡面的資料 array[1]: Proxy(Object) {年度專輯獎: {…}, 年度歌曲獎: {…}, …}
//   第三層拿到獎項:{提名資料}: Proxy(Object) {-NYuLTGtC0NUmtAWTdYv: {提名資料}, -NYuLTGvr0xZTNDqUM6B: {…}, …}
//   然後取得物件的 key
//   第四層 獎項:{提名資料} 的 key 去做 foreach
//   */
//   storageMatchData.value.length = 0;
//   for (let year of sortedEntries.value) {
//     Object.entries(year).forEach((awards) => {
//       Object.entries(awards[1]).forEach((awardsData) => {
//         let awardsDataIdArray = Object.keys(awardsData[1]).filter((word) => word.length > 10);
//         awardsDataIdArray.forEach((awardsDataId) => {
//           if (awardsData[1][awardsDataId].artworks.match(store.searchInput)) {
//             const won = awardsData[1][awardsDataId].won ? '得獎' : '入圍';
//             const obj = {
//               year: year[0],
//               awards: awardsData[0],
//               data: awardsData[1][awardsDataId].artworks,
//               won: won,
//             };
//             storageMatchData.value.push(obj);
//           }
//         });
//       });
//     });
//   }
//   storageMatchData.value.reverse();
// }
// function onChangeHandler(selectedOption, id) {
//   store.selected = selectedOption;
//   isButtonClicked.value.forEach((element, index) => {
//     isButtonClicked.value[index] = 0;
//   });
//   isButtonClicked.value[id] = 1;
// }
</script>
<template>
  <main class="p-4 text-white">
    <div class="flex justify-between items-center">
      <span class=""><RouterLink to="/" class="inline-block text-blue-300"> 首頁 </RouterLink> / 搜尋</span>
      <!-- <h1 class="mt-6 font-bold font-sans text-xl">search</h1> -->
      <button
        @click="reverseArray()"
        type="button"
        class="flex flex-row items-center px-4 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <span class="mr-1">年份排序</span>
        <svg
          id="filterArrow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 transition-transform duration-500"
          :class="[isReverseArray ? `rotate-0 ` : `rotate-180`]"
        >
          >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>

    <!-- sm	640px / md	768px lg	1024px xl	1280px 2xl	1536px-->
    <div class="relative">
      <input
        type="checkbox"
        name="search"
        id="search"
        class="peer z-10 cursor-pointer h-12 w-full absolute top-0 inset-x-0 opacity-0"
      />
      <!-- collapse title -->
      <div
        class="px-6 py-4 mt-4 rounded flex justify-between items-center text-white border border-gray-400 h-12 w-full"
      >
        <h1 class="font-bold font-sans text-xl">看看這些歌手吧</h1>
      </div>
      <!-- collapse 箭頭 icon  -->
      <div class="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-white"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <!-- collapse content onclick router-->
      <div class="overflow-hidden transition-all duration-500 peer-checked:hidden">
        <div>
          <!-- button title 區 -->
          <!-- <ul class="flex justify-between">
          <button
            class="inline-block border rounded shadow m-1 p-1.5 font-medium min-w-[100px]"
            :class="{ [`rounded shadow-md text-white bg-black bg-opacity-80`]: isButtonClicked[1] }"
            id="button-1"
            @click="onChangeHandler('人名', 1)"
          >
            提名/得獎者
          </button>
        </ul> -->
          <!-- content -->
          <ul class="flex flex-col font-medium dark:bg-gray-800 dark:border-gray-700">
            <li>
              <span
                class="block py-2 text-white rounded dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <button
                  @click="
                    store.updateSearchText(item);
                    store.searchHandler();
                  "
                  v-for="item in getRecommendList()"
                  :key="item"
                  class="inline-block border rounded shadow m-1 p-2 font-medium hover:"
                >
                  {{ item }}
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- result -->
    <!-- <div class="px-6 py-4 mt-0.5 flex justify-between items-center text-white border border-gray-400 h-12 w-full">
      <h1 class="font-bold font-sans text-xl">Now Search: {{ store.searchInput }}</h1>
    </div> -->
    <!-- <div class="flex flex-col items-center justify-center text-xl text-white">
      <div v-for="item in storageMatchData" :key="storageMatchData.id">
        <span class="inline-block bg-gray-500 w-full p-1">{{ item.year + ' ' + item.awards }}/{{ item.won }}</span>
        <li class="list-none">{{ item.data }}</li>
        <br />
      </div>
    </div> -->
    <br />

    <Loading v-if="isLoading === 1" />
    <!-- 搜尋的結果 -->
    <div
      v-if="store.searchInput && store.searchInput.split(' ').join('').length > 0"
      v-for="item in store.storageMatchData"
      :key="store.storageMatchData.id"
      class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    >
      <time class="text-lg font-semibold text-gray-900 dark:text-white"
        >{{ item.year + ' ' + item.awards }} / {{ item.won }}</time
      >
      <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
        <li>
          <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
            <!-- <img class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="" alt="Jese Leos image" /> -->
            <div class="">
              <span class="text-black" v-if="item.won === '得獎'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 fill-custom-gold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </span>
              <span class="text-black" v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </span>
            </div>
            <div class="text-gray-600 dark:text-gray-400">
              <div class="text-base font-normal">
                <span class="font-medium text-gray-900 dark:text-white">{{ '&nbsp;' + item.data }}</span>
              </div>

              <!-- <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Public
              </span> -->
            </div>
          </a>
        </li>
      </ol>
    </div>

    <!-- 沒用到的模板 -->
    <!-- <input type="checkbox" name="" id="" class="peer" /> -->
    <div class="peer-checked:visible invisible">
      <div class="w-full bg-white" id="navbar-hamburger">
        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
