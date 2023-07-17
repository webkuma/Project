<script setup>
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, update, push, child } from 'firebase/database';
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
const dbRef = ref(getDatabase());

get(child(dbRef, 'num'))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log('沒有資料');
    }
  })
  .catch((error) => {
    console.error(error);
  });

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

// update 更新資料
function updateData() {
  // 建立一組亂數序號
  const newKey = push(child(ref(database), 'users')).key;

  // 更新資料
  update(ref(database), {
    ['users/' + newKey]: {
      username: 'update-username',
    },
  });
}
</script>
<template>
  <div>
    <button class="border border-white text-white" @click="writeUserData('1', '2', '3', '4')">click</button>
    <button class="border border-white text-white" @click="writeUserData('1', '2', '3', '4')">更新</button>
  </div>
</template>
