<script setup>
import { onMounted, ref as vueRef } from 'vue';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
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
const yearData = vueRef(0);
const isLoading = vueRef(1);

onMounted(() => {
  isLoading.value = 1;
  if (document.cookie) {
    // console.log(document.cookie);
  } else {
    router.push({ path: `/Login` });
  }
  function compareNumbers(a, b) {
    return b - a;
  }
  const dbRef = ref(getDatabase());
  get(child(dbRef, '/')).then((snapshot) => {
    if (snapshot.exists()) {
      yearData.value = Object.keys(snapshot.val()).sort(compareNumbers);
      // console.log(yearData.value);
      isLoading.value = 0;
    }
  });
});

function navigateToAdminAwards(year) {
  router.push({ path: `/AdminAwards/${year}` });
}
async function createYear() {
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: '新增年份!',
    inputPlaceholder: 'Type your message here...',
    inputAttributes: {
      'aria-label': 'Type your message here',
    },
    showCancelButton: true,
  });

  if (text) {
    writeYearData(text);
    // Swal.fire(text);
  }
}
function writeYearData(year) {
  const db = getDatabase();
  const dbRef = ref(getDatabase());
  get(child(dbRef, year))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        Swal.fire(`${year} 年資料已存在！`, '', 'info');
      } else {
        console.log('沒有資料');
        set(ref(db, `${year}/`), {
          年度歌曲獎: {
            // order: 1,
            imageUrl: '',
          },
          最佳新人獎: {
            // order: 2,
            imageUrl: '',
          },
          最佳演唱組合獎: {
            // order: 3,
            imageUrl: '',
          },
          最佳編曲人: {
            // order: 4,
            imageUrl: '',
          },
          最佳作曲人: {
            // order: 5,

            imageUrl: '',
          },
          最佳作詞人: {
            // order: 6,
            imageUrl: '',
          },
          最佳台語男歌手獎: {
            // order: 7,
            imageUrl: '',
          },
          最佳台語女歌手獎: {
            // order: 8,
            imageUrl: '',
          },
          最佳台語專輯獎: {
            // order: 9,
            imageUrl: '',
          },
          最佳樂團獎: {
            // order: 10,
            imageUrl: '',
          },
          最佳單曲製作人獎: {
            // order: 11,
            imageUrl: '',
          },
          最佳專輯製作人獎: {
            // order: 12,
            imageUrl: '',
          },
          最佳華語男歌手獎: {
            // order: 13,
            imageUrl: '',
          },
          最佳華語女歌手獎: {
            // order: 14,
            imageUrl: '',
          },
          最佳華語專輯獎: {
            // order: 15,
            imageUrl: '',
          },
          年度專輯獎: {
            // order: 16,
            imageUrl: '',
          },
        });
        Swal.fire(`${year} 年建立成功!`, '2 秒後重整~', 'success');
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
async function deleteYear(year) {
  const db = getDatabase();
  await Swal.fire({
    title: `確認要刪除 ${year} 年？`,
    showDenyButton: true,
    confirmButtonText: 'Yes',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      set(ref(db, `${year}/`), {});
      Swal.fire('Success!', '2 秒後重整~', 'success');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info');
    }
  });
}
</script>
<template>
  <!-- px-6 -->
  <main class="p-4 text-white">
    <span><RouterLink to="/" class="inline-block text-blue-300"> 首頁 </RouterLink> / Admin</span>
    <div class="p-4 mt-4 rounded flex justify-between items-center border border-gray-400">
      <span class="inline-block font-bold font-sans text-xl">Dashborad</span>
      <button
        @click="createYear()"
        type="button"
        class="pl-1 pr-2 py-2 space-x-1 flex flex-row rounded border bg-gray text-white ease-in-out hover:bg-opacity-10 hover:border-white hover:border"
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
        <span>新增年份</span>
      </button>
    </div>

    <div class="p-4 mt-4">
      <span class="block font-bold font-sans text-xl text-center">年份管理</span>
      <div class="flex flex-wrap pb-2 overflow-x-scroll">
        <!-- year block Inner -->
        <table class="table-auto hover:table-fixed min-w-full text-sm font-light text-center">
          <Loading v-if="isLoading === 1" />
          <!-- <caption class="caption-top">
            ※ Awards ? "show edit" : "show create";
          </caption> -->
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">Year</th>
              <th scope="col" class="px-6 py-4">Awards</th>
              <th scope="col" class="px-6 py-4">Edit</th>
              <th scope="col" class="px-6 py-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="year in yearData" :key="year" class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">{{ year }}</td>
              <td class="whitespace-nowrap px-6 py-4 font-medium">
                <div class="flex justify-center">
                  <button
                    @click="navigateToAdminAwards(year)"
                    class="p-1.5 flex rounded bg-opacity-80 border space-x-1 hover:bg-opacity-0 hover:border-white hover:border"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="block text-sm font-medium pr-1">Create</span>
                  </button>
                </div>
              </td>
              <td v-if="0" class="whitespace-nowrap px-6 py-4 font-medium">
                <div class="flex justify-center">
                  <button
                    class="p-1.5 flex rounded bg-opacity-80 border space-x-1 hover:bg-opacity-0 hover:border-white hover:border"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                    <span class="block text-sm font-medium pr-1">Edit</span>
                  </button>
                </div>
              </td>
              <td class="whitespace-nowrap px-6 py-4 font-medium">
                <div class="flex justify-center">
                  <button
                    class="p-1.5 flex rounded bg-opacity-80 border space-x-1 hover:bg-opacity-0 hover:border-white hover:border"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                    <span class="block text-sm font-medium pr-1">Edit</span>
                  </button>
                </div>
              </td>
              <td class="whitespace-nowrap px-6 py-4 font-medium">
                <div class="flex justify-center">
                  <button
                    @click="deleteYear(year)"
                    class="p-1.5 flex rounded bg-opacity-80 border space-x-1 hover:bg-opacity-0 hover:border-white hover:border"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    <span class="block text-sm font-medium pr-1">Delete</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- <div v-for="year in 10" :key="year" class="mt-6 w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <div class="flex justify-center">
          <button class="p-4 flex rounded bg-custom-gold bg-opacity-80 border border-custom-gold space-x-1 hover:bg-opacity-0 hover:border-white hover:border">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
            </svg>
            <span class="block text-sm font-medium pr-1">{{ 2024 - year }} 年</span>
          </button>
          </div>
        </div> -->
      </div>
    </div>
  </main>
</template>
