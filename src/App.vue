<script setup>
import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue'
import SearchBox from './components/searchbox.vue';
import Menu from './components/Menu.vue';
import MenuContent from './components/MenuContent.vue';
import { useCounterStore } from './stores/counter.js';

const store = useCounterStore();
</script>

<template>
  <!-- px-4 bg-gradient-to-r from-amber-50 to-red-50-->
  <header class="fixed top-0 h-16 leading-10 w-full border-b px-4 flex items-center justify-between bg-black z-40">
    <div class="flex items-center space-x-4 pr-1">
      <!-- logo -->
      <RouterLink to="/" class="inline-block p-1">
        <img
          alt="Music logo"
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/zh/thumb/a/a5/Emblem_of_Golden_Melody_Awards.svg/1200px-Emblem_of_Golden_Melody_Awards.svg.png"
          width="40"
          height="40"
        />
      </RouterLink>
      <!-- title -->
      <span class="hidden sm:inline font-sans font-black text-white text-xl">Golden Melody Awards</span>
    </div>

    <SearchBox />
    <div class="flex items-center justify-end"><Menu /></div>

    <!-- <button
      data-collapse-toggle="navbar-hamburger"
      type="button"
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-hamburger"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      {{ store.$state.counter }}
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button> -->

    <!-- <div>
      <span data-collapse-toggle="navbar-hamburger">
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
    </div> -->
  </header>

  <RouterView class="mt-[64px]" />
  <MenuContent />
</template>

<!-- 
  <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
