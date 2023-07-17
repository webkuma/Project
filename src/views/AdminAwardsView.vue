<script setup>
import { onMounted, ref as vueRef } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, update, push, child } from 'firebase/database';
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
const database = getDatabase(app);
const router = useRouter();
const sortedEntries = vueRef(0);
const isLoading = vueRef(1);

onMounted(async () => {
  isLoading.value = 1;
  await router.isReady();
  const year = router.currentRoute.value.params['year'];
  const dbRef = ref(getDatabase());
  get(child(dbRef, `${year}/`)).then((snapshot) => {
    if (snapshot.exists()) {
      sortedEntries.value = Object.entries(snapshot.val()).sort((a, b) => a[1].order - b[1].order);
      // console.log(sortedEntries.value);
      isLoading.value = 0;
    }
  });
});

function updateData(years, params) {
  const db = getDatabase();
  (async () => {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: '新增──' + params,
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
    });
    if (text) {
      let str = text.trim().split('\n');
      let imageUrl = '';
      const dbRef = ref(getDatabase());
      await get(child(dbRef, `${years}/${params}`)).then((snapshot) => {
        if (snapshot.exists()) {
          imageUrl = snapshot.val().imageUrl;
          set(ref(db, `${years}/${params}`), {}); // null = 刪除，然後再把分割的字串push進資料庫
          set(ref(db, `${years}/${params}`), { imageUrl: imageUrl });
          // console.log(imageUrl);
        }
      });
      const promises = [];
      str.forEach((element) => {
        const promise = push(ref(db, `${years}/${params}`), {
          artworks: element,
          won: false,
        });
        promises.push(promise);
      });
      Promise.all(promises).then(() => {
        location.reload();
      });
    }
  })();
}
function updateImageUrl(years, params) {
  const db = getDatabase();
  (async () => {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: '新增圖片──' + params,
      inputPlaceholder: 'Type your url here...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
    });
    if (text) {
      update(ref(db, `${years}/${params}`), { imageUrl: text }).then(() => {
        location.reload();
      });
    }
  })();
}
function updateWonStatus(years, params, artworks) {
  const specialCharacters = /[-\/\\^$*+?.()|[\]{}]/g;
  const works = artworks.replace(specialCharacters, '\\$&');
  // const works = artworks.replace(/\?/g, ''); // 使用正则表达式替换所有问号为空字符串
  console.log(years);
  console.log(params);
  console.log(works);
  const db = getDatabase();
  (async () => {
    await Swal.fire({
      title: '修改得獎者──<br>' + works,
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success');

        let awardsArray = [];
        // 從整個數據中比對獎項，並將其轉換為陣列，awardsArray 存的是多個亂數的 key
        // 0:(-NYuLTGxigZsX-LDf_sd) 1:(-NYuLTGxigZsX-LDf_sd) ...
        sortedEntries.value.forEach((element) => {
          if (element[0].match(params)) {
            awardsArray = Object.keys(element[1]).filter((word) => word.length > 9);
          }
        });
        // 將 awardsArray 中的每個元素的 won 屬性設為 false
        awardsArray.forEach((element) => {
          update(ref(db, `${years}/${params}/${element}`), { won: false });
        });

        /*總之這裡做的是。 1. 比對獎項(年度歌曲) 2. 比對 artworks 3. 更新 won 属性 */
        sortedEntries.value.forEach((element) => {
          // element[0] = xxxx獎，比對獎項名稱
          if (element[0].match(params)) {
            // e = 0:(-NYuLTGxigZsX-LDf_sd) 1:(-NYuLTGxigZsX-LDf_sd) ...
            awardsArray.forEach((e) => {
              // 比對資料庫的值和點擊傳入的值，相同則更新 won: true
              if (element[1][e]['artworks'].match(works)) {
                update(ref(db, `${years}/${params}/${e}`), { won: true });
              }
            });
          }
        });
      }
    });
  })();
}
</script>
<template>
  <main class="p-4 text-white">
    <span>
      <RouterLink to="/" class="inline-block text-blue-300"> 首頁 </RouterLink> /
      <RouterLink to="/Admin" class="inline-block text-blue-300"> Admin </RouterLink> / {{ $route.params.year }}年
    </span>
    <div class="p-4 mt-4 rounded flex justify-between items-center border border-gray-400">
      <span class="inline-block font-bold font-sans text-xl">Dashborad 管理獎項</span>
    </div>
    <div class="flex flex-col flex-wrap justify-evenly">
      <Loading v-if="isLoading === 1" />
      <!-- <div class="w-[300px] xl:w-1/5  relative flex items-center justify-center bg-slate-500  cursor-pointer" v-for="item in the2023" :key="item.id"> -->
      <!-- md:w-1/4 lg:w-1/5 xl:w-1/6 -->
      <div
        class="relative flex flex-col items-center justify-center bg-black mt-4 border rounded"
        v-for="item in sortedEntries"
        :key="item.id"
      >
        <!-- <span class="absolute inset-0 bg-black opacity-50" aria-hidden="true"></span> -->
        <div class="flex flex-row m-4">
          <span class="text-xl font-bold p-1 border-b border-white">{{ item[0] }} </span>
          <button
            type="button"
            class="w-[80px] mr-[1px] pl-1 pr-2 py-2 space-x-1 flex flex-row rounded text-white ease-in-out hover:bg-opacity-10 border-white border"
            @click="updateData($route.params.year, item[0])"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span :class="[Object.keys(item[1]).length !== 1 ? `text-custom-gold` : `text-white`]">提名</span>
          </button>
          <button
            type="button"
            class="w-[80px] mr-[1px] pl-1 pr-2 py-2 space-x-1 flex flex-row rounded text-white ease-in-out hover:bg-opacity-10 border-white border"
            @click="updateImageUrl($route.params.year, item[0])"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span :class="[item[1].imageUrl ? `text-custom-gold` : `text-white`]">圖片</span>
          </button>
        </div>
        <div class="flex flex-col m-2" v-for="i in item[1]" :key="item.id">
          <span
            @click="updateWonStatus($route.params.year, item[0], i.artworks)"
            class="cursor-pointer hover:bg-slate-400"
            :class="i.won ? `text-custom-gold` : `text-white`"
            >{{ i.artworks }}
          </span>
        </div>
      </div>
    </div>
  </main>
</template>
