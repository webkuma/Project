<script setup>
import { useLoginStore } from '../stores/counter.js';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const store = useLoginStore();

const firebaseConfig = {
  apiKey: 'AIzaSyCngOWSZwnTjBGqx3BehB5PeqTg7qENDLI',
  authDomain: 'earnest-runner-189507.firebaseapp.com',
  databaseURL: 'https://earnest-runner-189507.firebaseio.com',
  projectId: 'earnest-runner-189507',
  storageBucket: 'earnest-runner-189507.appspot.com',
  messagingSenderId: '142419818564',
  appId: '1:142419818564:web:6b1035fd5a5e3d3d5ce411',
};
initializeApp(firebaseConfig);
const auth = getAuth();

const email = ref();
const password = ref();
function setLoginData(e) {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      store.user = userCredential.user;
      const authToken = userCredential.user.accessToken; // 獲取用戶身份驗證令牌
      // 設定 cookie
      const expires = new Date();
      expires.setDate(expires.getDate() + 7); // 例如，將 cookie 設定為在 7 天後過期
      // const cookieString = `authToken=${authToken}; expires=${expires.toUTCString()}; path=/; HttpOnly; Secure`;
      const cookieString = `authToken=${authToken}; expires=${expires.toUTCString()}; path=/`;
      store.cookie = true;
      document.cookie = cookieString;

      console.log(document.cookie);

      router.push({ path: `/Admin` });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
</script>
<template>
  <section class="bg-gray-50 dark:bg-gray-900 w-full h-full fixed">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
            </div>
            <button
              @click="setLoginData($event)"
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
