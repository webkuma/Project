import{S as r}from"./sweetalert2.all-4088fd79.js";import{i as U,g as a,u as B,r as h,o as L,a as i,b as m,c as f,p as j,d as l,e as d,f as e,h as D,w as $,k as b,l as A,m as _,F as T,n as S,s as w,t as N,_ as R}from"./index-dee2965c.js";const I={class:"p-4 text-white"},M={class:"p-4 mt-4 rounded flex justify-between items-center border border-gray-400"},V=e("span",{class:"inline-block font-bold font-sans text-xl"},"Dashborad",-1),Y=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})],-1),z=e("span",null,"新增年份",-1),E=[Y,z],q={class:"p-4 mt-4"},F=e("span",{class:"block font-bold font-sans text-xl text-center"},"年份管理",-1),H={class:"flex flex-wrap pb-2 overflow-x-scroll"},O={class:"table-auto hover:table-fixed min-w-full text-sm font-light text-center"},P=e("thead",{class:"border-b font-medium dark:border-neutral-500"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-4"},"Year"),e("th",{scope:"col",class:"px-6 py-4"},"Awards"),e("th",{scope:"col",class:"px-6 py-4"},"Edit"),e("th",{scope:"col",class:"px-6 py-4"},"Delete")])],-1),G={class:"whitespace-nowrap px-6 py-4 font-medium"},K={class:"whitespace-nowrap px-6 py-4 font-medium"},W={class:"flex justify-center"},Z=["onClick"],J=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Q=e("span",{class:"block text-sm font-medium pr-1"},"Create",-1),X=[J,Q],ee=e("td",{class:"whitespace-nowrap px-6 py-4 font-medium"},[e("div",{class:"flex justify-center"},[e("button",{class:"p-1.5 flex rounded bg-opacity-80 border space-x-1 hover:bg-opacity-0 hover:border-white hover:border"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})]),e("span",{class:"block text-sm font-medium pr-1"},"Edit")])])],-1),te={class:"whitespace-nowrap px-6 py-4 font-medium"},oe={class:"flex justify-center"},se=["onClick"],ne=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),re=e("span",{class:"block text-sm font-medium pr-1"},"Delete",-1),ae=[ne,re],pe={__name:"AdminView",setup(ie){const g=U({apiKey:"AIzaSyCngOWSZwnTjBGqx3BehB5PeqTg7qENDLI",authDomain:"earnest-runner-189507.firebaseapp.com",databaseURL:"https://earnest-runner-189507.firebaseio.com",projectId:"earnest-runner-189507",storageBucket:"earnest-runner-189507.appspot.com",messagingSenderId:"142419818564",appId:"1:142419818564:web:6b1035fd5a5e3d3d5ce411"});a(g);const p=B(),u=h(0),c=h(1);L(()=>{c.value=1,document.cookie||p.push({path:"/Login"});function t(s,o){return o-s}const n=i(a());m(f(n,"/")).then(s=>{s.exists()&&(u.value=Object.keys(s.val()).sort(t),c.value=0)})});function x(t){p.push({path:`/AdminAwards/${t}`})}async function v(){const{value:t}=await r.fire({input:"textarea",inputLabel:"新增年份!",inputPlaceholder:"Type your message here...",inputAttributes:{"aria-label":"Type your message here"},showCancelButton:!0});t&&k(t)}function k(t){const n=a(),s=i(a());m(f(s,t)).then(o=>{o.exists()?(console.log(o.val()),r.fire(`${t} 年資料已存在！`,"","info")):(console.log("沒有資料"),w(i(n,`${t}/`),{年度歌曲獎:{imageUrl:""},最佳新人獎:{imageUrl:""},最佳演唱組合獎:{imageUrl:""},最佳編曲人:{imageUrl:""},最佳作曲人:{imageUrl:""},最佳作詞人:{imageUrl:""},最佳台語男歌手獎:{imageUrl:""},最佳台語女歌手獎:{imageUrl:""},最佳台語專輯獎:{imageUrl:""},最佳樂團獎:{imageUrl:""},最佳單曲製作人獎:{imageUrl:""},最佳專輯製作人獎:{imageUrl:""},最佳華語男歌手獎:{imageUrl:""},最佳華語女歌手獎:{imageUrl:""},最佳華語專輯獎:{imageUrl:""},年度專輯獎:{imageUrl:""}}),r.fire(`${t} 年建立成功!`,"2 秒後重整~","success"),setTimeout(()=>{location.reload()},2e3))}).catch(o=>{console.error(o)})}async function y(t){const n=a();await r.fire({title:`確認要刪除 ${t} 年？`,showDenyButton:!0,confirmButtonText:"Yes"}).then(s=>{s.isConfirmed?(w(i(n,`${t}/`),{}),r.fire("Success!","2 秒後重整~","success"),setTimeout(()=>{location.reload()},2e3)):s.isDenied&&r.fire("Changes are not saved","","info")})}return(t,n)=>{const s=j("RouterLink");return l(),d("main",I,[e("span",null,[D(s,{to:"/",class:"inline-block text-blue-300"},{default:$(()=>[b(" 首頁 ")]),_:1}),b(" / Admin")]),e("div",M,[V,e("button",{onClick:n[0]||(n[0]=o=>v()),type:"button",class:"pl-1 pr-2 py-2 space-x-1 flex flex-row rounded border bg-gray text-white ease-in-out hover:bg-opacity-10 hover:border-white hover:border"},E)]),e("div",q,[F,e("div",H,[e("table",O,[c.value===1?(l(),A(R,{key:0})):_("",!0),P,e("tbody",null,[(l(!0),d(T,null,S(u.value,o=>(l(),d("tr",{key:o,class:"border-b dark:border-neutral-500"},[e("td",G,N(o),1),e("td",K,[e("div",W,[e("button",{onClick:C=>x(o),class:"p-1.5 flex rounded bg-opacity-80 border space-x-1 hover:bg-opacity-0 hover:border-white hover:border"},X,8,Z)])]),_("",!0),ee,e("td",te,[e("div",oe,[e("button",{onClick:C=>y(o),class:"p-1.5 flex rounded bg-opacity-80 border space-x-1 hover:bg-opacity-0 hover:border-white hover:border"},ae,8,se)])])]))),128))])])])])])}}};export{pe as default};
