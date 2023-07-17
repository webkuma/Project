<script setup>
import { onMounted, ref as vueRef } from 'vue';
import Swal from 'sweetalert2';
import { useRoute, useRouter } from 'vue-router';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, update, push, child, query, orderByChild } from 'firebase/database';
import { RouterLink } from 'vue-router';
import Loading from '../components/Loading.vue';

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
// const database = getDatabase(app);
const isLoading = vueRef(1);

const sortedEntries = vueRef(0);
const sortedObj = vueRef(0);
const router = useRouter();
onMounted(async () => {
  isLoading.value = 1;
  await router.isReady();
  const year = router.currentRoute.value.params['year'];
  const dbRef = ref(getDatabase());
  get(child(dbRef, `${year}/`)).then((snapshot) => {
    if (snapshot.exists()) {
      // 把資料轉陣列按照order排序
      sortedEntries.value = Object.entries(snapshot.val()).sort((a, b) => a[1].order - b[1].order);
      // 把資料轉回物件(物件不能排序)
      sortedObj.value = Object.fromEntries(sortedEntries.value);
      // console.log(sortedEntries.value);
      isLoading.value = 0;
    }
  });
});
function openSwal(awardsTitle) {
  let str = '';
  Object.values(sortedEntries.value).forEach((element) => {
    if (element[0].match(awardsTitle)) {
      Object.values(element[1]).forEach((e, index) => {
        if (e.won === true) {
          str += `<div class="flex justify-center bg-custom-gold bg-opacity-90 p-4" v-for="item in sortedEntries"
        :key="item.id">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        class="w-6 h-6 fill-yellow-50 stroke-red-600"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
      <span class="inline-block text-red-500">${e.artworks}</span><br>
    </div>`;
        } else if (e.won === false) {
          str += `<span class="inline-block mt-2">${e.artworks}</span><br>`;
        } else if (index < 1) {
          // 代表他只有一筆 imageUrl
          str = `<span class="inline-block mt-2">還沒建立資料！</span><br>`;
        }
      });
    }
  });

  Swal.fire({
    title: awardsTitle,
    html: str,
    // icon: 'error',
    confirmButtonText: 'Cool',
  });
}
</script>

<template>
  <main class="p-4 text-white">
    <h1>
      <RouterLink to="/" class="inline-block text-blue-300">首頁</RouterLink>
      / {{ $route.params.year }} 年
    </h1>
    <h2 class="mt-4 font-bold font-sans text-xl">Choose any award you want to explore</h2>
    <!-- <div class="relative">這個好像沒用到吧(?)</div> -->
    <Loading v-if="isLoading === 1" />

    <!-- 348*348 -->
    <div class="flex flex-wrap justify-around">
      <!-- <div class="w-[300px] xl:w-1/5  relative flex items-center justify-center bg-slate-500  cursor-pointer" v-for="item in the2023" :key="item.id"> -->
      <!-- md:w-1/4 lg:w-1/5 xl:w-1/6 -->
      <div
        class="relative flex items-center justify-center bg-custom-gold cursor-pointer m-4"
        v-for="item in sortedEntries"
        :key="item.id"
        @click="openSwal(item[0])"
      >
        <!-- left-0 right-0 top-28 bottom-28 -->
        <span class="absolute inset-0 bg-black opacity-50" aria-hidden="true"></span>
        <span class="absolute text-xl font-bold">{{ item[0] }}</span>
        <img :src="item[1]['imageUrl']" class="w-[250px] p-2" alt="" />
      </div>
    </div>
  </main>
</template>
