import{S as h}from"./sweetalert2.all-4088fd79.js";import{i as g,r as c,u as w,o as _,a as k,g as v,b as x,c as y,d as n,e as u,f as o,h as j,w as B,j as C,k as f,t as p,l as E,m as L,F as R,n as S,R as $,_ as O}from"./index-dee2965c.js";const I={class:"p-4 text-white"},N=o("h2",{class:"mt-4 font-bold font-sans text-xl"},"Choose any award you want to explore",-1),V={class:"flex flex-wrap justify-around"},D=["onClick"],q=o("span",{class:"absolute inset-0 bg-black opacity-50","aria-hidden":"true"},null,-1),z={class:"absolute text-xl font-bold"},A=["src"],G={__name:"AwardsView",setup(T){g({apiKey:"AIzaSyCngOWSZwnTjBGqx3BehB5PeqTg7qENDLI",authDomain:"earnest-runner-189507.firebaseapp.com",databaseURL:"https://earnest-runner-189507.firebaseio.com",projectId:"earnest-runner-189507",storageBucket:"earnest-runner-189507.appspot.com",messagingSenderId:"142419818564",appId:"1:142419818564:web:6b1035fd5a5e3d3d5ce411"});const l=c(1),r=c(0),b=c(0),d=w();_(async()=>{l.value=1,await d.isReady();const t=d.currentRoute.value.params.year,s=k(v());x(y(s,`${t}/`)).then(e=>{e.exists()&&(r.value=Object.entries(e.val()).sort((a,i)=>a[1].order-i[1].order),b.value=Object.fromEntries(r.value),l.value=0)})});function m(t){let s="";Object.values(r.value).forEach(e=>{e[0].match(t)&&Object.values(e[1]).forEach((a,i)=>{a.won===!0?s+=`<div class="flex justify-center bg-custom-gold bg-opacity-90 p-4" v-for="item in sortedEntries"
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
      <span class="inline-block text-red-500">${a.artworks}</span><br>
    </div>`:a.won===!1?s+=`<span class="inline-block mt-2">${a.artworks}</span><br>`:i<1&&(s='<span class="inline-block mt-2">還沒建立資料！</span><br>')})}),h.fire({title:t,html:s,confirmButtonText:"Cool"})}return(t,s)=>(n(),u("main",I,[o("h1",null,[j(C($),{to:"/",class:"inline-block text-blue-300"},{default:B(()=>[f("首頁")]),_:1}),f(" / "+p(t.$route.params.year)+" 年 ",1)]),N,l.value===1?(n(),E(O,{key:0})):L("",!0),o("div",V,[(n(!0),u(R,null,S(r.value,e=>(n(),u("div",{class:"relative flex items-center justify-center bg-custom-gold cursor-pointer m-4",key:e.id,onClick:a=>m(e[0])},[q,o("span",z,p(e[0]),1),o("img",{src:e[1].imageUrl,class:"w-[250px] p-2",alt:""},null,8,A)],8,D))),128))])]))}};export{G as default};
