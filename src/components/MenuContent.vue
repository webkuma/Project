<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useMenuStore } from '../stores/counter.js';

const router = useRouter();
const store = useMenuStore();

// let counter = computed(() => store.counter);
// watch(counter, (newValue, oldValue) => {
//   console.log('count changed from', oldValue, 'to', newValue);
// });
const cookie = ref();
onMounted(() => {
  cookie.value = document.cookie;
});

cookieStore.addEventListener('change', (event) => {
  cookie.value = document.cookie;
});

document.addEventListener('click', (e) => {
  if (store.counter > 1) {
    const menu = document.querySelector('#menu');
    if (!menu.contains(e.target)) {
      store.isMaskClicked = 0;
      store.counter = 0;
    } else {
      store.isMaskClicked = 1;
    }
  } else if (store.counter === 1) {
    store.counter = 2;
  }
});

function navigateToPage(page) {
  router.push({ path: `/${page}` });
}
function logout() {
  alert('您被登出了');
  document.cookie = `authToken='';expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  location.reload();
}
</script>
<template>
  <div
    v-if="store.isMaskClicked"
    class="fixed top-0 left-0 bg-black bg-opacity-20 h-full w-full z-[49]"
    sr-only="遮罩"
  ></div>
  <transition name="slide">
    <div
      v-if="store.isMaskClicked"
      id="menu"
      class="inline-block rounded-xl bg-[#1F1F23] max-h-full h-full w-[160px] fixed top-0 right-0 overflow-hidden z-50"
    >
      <!-- menu icon -->
      <div class="h-16 border-b px-4 flex items-center justify-end">
        <span data-collapse-toggle="navbar-hamburger" @click="store.toggleMenuVisibility()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10 h-10 p-1 cursor-pointer hover:rounded-full hover:bg-white hover:bg-opacity-30 fill-custom-gold"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
      <!-- a text -->
      <ul class="flex flex-col text-base text-center text-white">
        <li
          class="cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly"
          @click="navigateToPage('Home')"
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
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span>Home</span>
        </li>
        <li
          class="cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly"
          @click="navigateToPage('Search')"
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <span>Search</span>
        </li>
        <li
          v-if="cookie"
          class="cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly"
          @click="navigateToPage('Admin')"
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <span>Admin</span>
        </li>
        <li
          v-if="!cookie"
          class="cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly"
          @click="navigateToPage('Login')"
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          <span>Login</span>
        </li>
        <li
          v-if="cookie"
          class="cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly"
          @click="logout()"
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          <span>Logout</span>
        </li>

        <!-- <li
          class="cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly"
          v-for="item in isLogin()"
          :key="item"
          @click="navigateToPage(item.text)"
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
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span>Home</span>
        </li> -->
      </ul>
    </div>
  </transition>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: right 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  right: -200px;
}
</style>
