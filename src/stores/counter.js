import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from "firebase/auth";


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const selected = ref('分類') // SearchBox 的下拉選單
  const selectedYear = ref(''); // home 頁面的選取年份，用來傳到 awards/:year
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, selected, selectedYear, doubleCount, increment }
})
export const useMenuStore = defineStore('menu', () => {
  const isMaskClicked = ref(0);
  const counter = ref(0);
  function toggleMenuVisibility() {
    if(!counter.value){
      isMaskClicked.value = !isMaskClicked.value;
      counter.value = 1;
    } else {
      isMaskClicked.value = !isMaskClicked.value;
      counter.value = 0;
    }
  }

  return { isMaskClicked, counter, toggleMenuVisibility }
})
export const useSearchStore = defineStore('search', () => {
  const searchInput = ref(undefined);
  function updateSearchText(text) {
    searchInput.value = text;
  }
  const sortedEntries = ref(0);
  const storageMatchData = ref([]);
  const searchSuggestions = ref([]);
  function searchHandler() {
    /* 第一層做年份的foreach: 2021 2022 2023
    第二層取獎項裡面的資料 array[1]: Proxy(Object) {年度專輯獎: {…}, 年度歌曲獎: {…}, …}
    第三層拿到獎項:{提名資料}: Proxy(Object) {-NYuLTGtC0NUmtAWTdYv: {提名資料}, -NYuLTGvr0xZTNDqUM6B: {…}, …}
    然後取得物件的 key 
    第四層 獎項:{提名資料} 的 key 去做 foreach 
    */
   if (!searchInput.value) {
      // return false;
   }
    searchSuggestions.value.length = 0;
    storageMatchData.value.length = 0;
    for (let year of sortedEntries.value) {
      Object.entries(year).forEach((awards) => {
        Object.entries(awards[1]).forEach((awardsData) => {
          let awardsDataIdArray = Object.keys(awardsData[1]).filter((word) => word.length > 10);
          awardsDataIdArray.forEach((awardsDataId) => {
            if (awardsData[1][awardsDataId].artworks.match(searchInput.value)) {
              const won = awardsData[1][awardsDataId].won ? '得獎' : '入圍';
              const obj = {
                year: year[0],
                awards: awardsData[0],
                data: awardsData[1][awardsDataId].artworks,
                won: won,
              };
              storageMatchData.value.push(obj);
              // searchSuggestions.value.push(awardsData[1][awardsDataId].artworks.substring(0,awardsData[1][awardsDataId].artworks.indexOf('／')));
            }
            if(awardsData[0].match('歌手') && awardsData[1][awardsDataId].won)
              searchSuggestions.value.push(awardsData[1][awardsDataId].artworks.substring(0,awardsData[1][awardsDataId].artworks.indexOf('／')))
          });
        });
      });
    }
    searchSuggestions.value.reverse();
    storageMatchData.value.reverse();
  }
  return { searchInput, sortedEntries, storageMatchData,searchSuggestions, updateSearchText, searchHandler }
})
export const useLoginStore = defineStore('login', () => {
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
  const user = ref();
  const cookie = document.cookie;
  return { user }
})
// export const useFirebaseStore = defineStore('firebase', () => {
//   const firebaseConfig = {
//     apiKey: 'AIzaSyCngOWSZwnTjBGqx3BehB5PeqTg7qENDLI',
//     authDomain: 'earnest-runner-189507.firebaseapp.com',
//     databaseURL: 'https://earnest-runner-189507.firebaseio.com',
//     projectId: 'earnest-runner-189507',
//     storageBucket: 'earnest-runner-189507.appspot.com',
//     messagingSenderId: '142419818564',
//     appId: '1:142419818564:web:6b1035fd5a5e3d3d5ce411',
//   };
//   const app = initializeApp(firebaseConfig);
//   const database = getDatabase(app);
//   return { app, database }
// })