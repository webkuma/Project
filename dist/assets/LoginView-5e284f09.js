import{u as b,A as y,i as f,B as k,r as n,d as x,e as h,f as r,C as l,D as c,z as w,E as v}from"./index-dee2965c.js";const _={class:"bg-gray-50 dark:bg-gray-900 w-full h-full fixed"},D={class:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"},S={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},B={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},T=r("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Sign in to your account ",-1),A={class:"space-y-4 md:space-y-6",action:"#"},I=r("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Email",-1),C=r("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),E=w('<div class="flex items-center justify-between"><div class="flex items-start"><div class="flex items-center h-5"><input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"></div><div class="ml-3 text-sm"><label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label></div></div></div>',1),U={__name:"LoginView",setup(L){const u=b(),i=y();f({apiKey:"AIzaSyCngOWSZwnTjBGqx3BehB5PeqTg7qENDLI",authDomain:"earnest-runner-189507.firebaseapp.com",databaseURL:"https://earnest-runner-189507.firebaseio.com",projectId:"earnest-runner-189507",storageBucket:"earnest-runner-189507.appspot.com",messagingSenderId:"142419818564",appId:"1:142419818564:web:6b1035fd5a5e3d3d5ce411"});const m=k(),t=n(),s=n();function g(d){d.preventDefault(),v(m,t.value,s.value).then(e=>{i.user=e.user;const a=e.user.accessToken,o=new Date;o.setDate(o.getDate()+7);const p=`authToken=${a}; expires=${o.toUTCString()}; path=/`;i.cookie=!0,document.cookie=p,console.log(document.cookie),u.push({path:"/Admin"})}).catch(e=>{e.code,e.message})}return(d,e)=>(x(),h("section",_,[r("div",D,[r("div",S,[r("div",B,[T,r("form",A,[r("div",null,[I,l(r("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),type:"email",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@gmail.com"},null,512),[[c,t.value]])]),r("div",null,[C,l(r("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.value=a),type:"password",name:"password",id:"password",placeholder:"••••••••",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[c,s.value]])]),E,r("button",{onClick:e[2]||(e[2]=a=>g(a)),type:"submit",class:"w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"}," Sign in ")])])])])]))}};export{U as default};
