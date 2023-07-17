<script setup>
import { onMounted, ref as vueRef } from 'vue';
import { useRouter } from 'vue-router';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
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
const router = useRouter();
const yearData = vueRef(0);
const isLoading = vueRef(1);
onMounted(() => {
  isLoading.value = 1;
  function compareNumbers(a, b) {
    return b - a;
  }
  const dbRef = ref(getDatabase());
  get(dbRef, '/').then((snapshot) => {
    if (snapshot.exists()) {
      yearData.value = Object.keys(snapshot.val()).sort(compareNumbers);
      isLoading.value = 0;
    }
  });
});
function updateSelectedYear(year) {
  router.push({ path: `/Awards/${year}` });
}
</script>

<!-- sm:640 md:768 lg:1024 xl:1280 -->
<template>
  <main class="m-auto text-white">
    <!-- banner image -->
    <div class="bg-custom-image bg-cover relative h-72 md:h-96 rounded border-t-0">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="absolute flex flex-col items-center justify-center gap-8 w-full h-full text-gray-50">
        <p class="text-2xl md:text-4xl font-bold">Golden Melody Awards</p>
        <p class="text-lg md:text-2xl">Discover and Explore the Music.</p>
        <p class="text-xl md:text-2xl">The Artists, Awards, and Albums.</p>
      </div>
    </div>

    <!-- Search box -->
    <!-- <div class="flex flex-col md:flex-row items-center md:h-28 mt-4 p-4 space-x-1 rounded-lg border-2 shadow-md">
      <label class="block w-full md:w-auto">
        <span class="block text-sm font-medium text-slate-700"> category </span>
        <div class="inline-block relative w-full">
          <select
            class="mt-1 px-3 py-1.5 pr-8 block appearance-none w-full bg-white border border-gray-300 text-gray-700 rounded leading-6 focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Artist / Album</option>
            <option>Awards</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 12l-6-6 1.5-1.5L10 9.8l4.5-4.5L16 6l-6 6z" />
            </svg>
          </div>
        </div>
      </label>

      <label class="block w-full md:w-8/12">
        <span class="block text-sm font-medium text-slate-700"> keyword </span>
        <input
          type="text"
          name="text"
          class="placeholder:italic mt-1 px-3 py-2 bg-white border border-gray-300 shadow-sm rounded placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1"
          placeholder="Search for anything..."
        />
      </label>

      <label class="block w-full md:w-auto">
        <span class="invisible">&nbsp;</span>
        <button class="px-2 py-2 flex rounded bg-yellow-300 w-full space-x-1 justify-center">
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
          <span class="block text-sm font-medium pr-1 text-zinc-900 text-center">Reset</span>
        </button>
      </label>
    </div> -->

    <!-- years block -->
    <div class="dark:bg-slate-900 p-4 ring-1 ring-slate-900/5 shadow-md">
      <!-- title & icon -->
      <div class="text-center">
        <span class="inline-flex pr-2">
          <svg
            class="h-7 w-7 fill-costom-gold"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
        </span>
        <span class="align-top from-neutral-800 dark:text-white mt-5 text-xl font-sans tracking-tight"
          >Freely Explore the Music.
        </span>
      </div>
      <!-- the years block Outer, click btn to /awards -->
      <Loading v-if="isLoading === 1" />
      <div class="flex flex-wrap pb-2">
        <!-- year block Inner -->
        <div
          v-for="year in yearData"
          :key="year"
          class="mt-6 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          @click="updateSelectedYear(year)"
        >
          <div class="flex justify-center">
            <button
              class="p-4 flex rounded bg-custom-gold bg-opacity-80 border border-custom-gold space-x-1 hover:bg-opacity-0 hover:border-white hover:border"
            >
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
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                />
              </svg>
              <span class="block text-sm font-medium pr-1">{{ year }} 年</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
