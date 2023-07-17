(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function _a(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ve={},Yn=[],dt=()=>{},Tp=()=>!1,Sp=/^on[^a-z]/,Cr=t=>Sp.test(t),ga=t=>t.startsWith("onUpdate:"),Te=Object.assign,ma=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rp=Object.prototype.hasOwnProperty,ne=(t,e)=>Rp.call(t,e),$=Array.isArray,Qn=t=>Ir(t)==="[object Map]",Qu=t=>Ir(t)==="[object Set]",G=t=>typeof t=="function",Se=t=>typeof t=="string",va=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",Ju=t=>ye(t)&&G(t.then)&&G(t.catch),Xu=Object.prototype.toString,Ir=t=>Xu.call(t),kp=t=>Ir(t).slice(8,-1),Zu=t=>Ir(t)==="[object Object]",ya=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bi=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ap=/-(\w)/g,It=Tr(t=>t.replace(Ap,(e,n)=>n?n.toUpperCase():"")),Np=/\B([A-Z])/g,Mn=Tr(t=>t.replace(Np,"-$1").toLowerCase()),Sr=Tr(t=>t.charAt(0).toUpperCase()+t.slice(1)),no=Tr(t=>t?`on${Sr(t)}`:""),Gs=(t,e)=>!Object.is(t,e),Hi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Yi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Pp=t=>{const e=Se(t)?Number(t):NaN;return isNaN(e)?t:e};let $l;const Ao=()=>$l||($l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ea(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Se(s)?Dp(s):Ea(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Se(t))return t;if(ye(t))return t}}const xp=/;(?![^(]*\))/g,Op=/:([^]+)/,Mp=/\/\*[^]*?\*\//g;function Dp(t){const e={};return t.replace(Mp,"").split(xp).forEach(n=>{if(n){const s=n.split(Op);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function wa(t){let e="";if(Se(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=wa(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Lp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fp=_a(Lp);function eh(t){return!!t||t===""}const th=t=>Se(t)?t:t==null?"":$(t)||ye(t)&&(t.toString===Xu||!G(t.toString))?JSON.stringify(t,nh,2):String(t),nh=(t,e)=>e&&e.__v_isRef?nh(t,e.value):Qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Qu(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!$(e)&&!Zu(e)?String(e):e;let tt;class sh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=tt,!e&&tt&&(this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){tt=this}off(){tt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ih(t){return new sh(t)}function Up(t,e=tt){e&&e.active&&e.effects.push(t)}function rh(){return tt}function Bp(t){tt&&tt.cleanups.push(t)}const ba=t=>{const e=new Set(t);return e.w=0,e.n=0,e},oh=t=>(t.w&an)>0,ah=t=>(t.n&an)>0,Hp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=an},Wp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];oh(i)&&!ah(i)?i.delete(t):e[n++]=i,i.w&=~an,i.n&=~an}e.length=n}},Qi=new WeakMap;let Ms=0,an=1;const No=30;let lt;const In=Symbol(""),Po=Symbol("");class Ca{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Up(this,s)}run(){if(!this.active)return this.fn();let e=lt,n=Xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=lt,lt=this,Xt=!0,an=1<<++Ms,Ms<=No?Hp(this):Vl(this),this.fn()}finally{Ms<=No&&Wp(this),an=1<<--Ms,lt=this.parent,Xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){lt===this?this.deferStop=!0:this.active&&(Vl(this),this.onStop&&this.onStop(),this.active=!1)}}function Vl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xt=!0;const lh=[];function gs(){lh.push(Xt),Xt=!1}function ms(){const t=lh.pop();Xt=t===void 0?!0:t}function Xe(t,e,n){if(Xt&&lt){let s=Qi.get(t);s||Qi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ba()),ch(i)}}function ch(t,e){let n=!1;Ms<=No?ah(t)||(t.n|=an,n=!oh(t)):n=!t.has(lt),n&&(t.add(lt),lt.deps.push(t))}function Ot(t,e,n,s,i,r){const o=Qi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?ya(n)&&a.push(o.get("length")):(a.push(o.get(In)),Qn(t)&&a.push(o.get(Po)));break;case"delete":$(t)||(a.push(o.get(In)),Qn(t)&&a.push(o.get(Po)));break;case"set":Qn(t)&&a.push(o.get(In));break}if(a.length===1)a[0]&&xo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);xo(ba(l))}}function xo(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&jl(s);for(const s of n)s.computed||jl(s)}function jl(t,e){(t!==lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function $p(t,e){var n;return(n=Qi.get(t))==null?void 0:n.get(e)}const Vp=_a("__proto__,__v_isRef,__isVue"),uh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(va)),jp=Ia(),zp=Ia(!1,!0),qp=Ia(!0),zl=Kp();function Kp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let r=0,o=this.length;r<o;r++)Xe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(te)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gs();const s=te(this)[e].apply(this,n);return ms(),s}}),t}function Gp(t){const e=te(this);return Xe(e,"has",t),e.hasOwnProperty(t)}function Ia(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?u_:_h:e?ph:fh).get(s))return s;const o=$(s);if(!t){if(o&&ne(zl,i))return Reflect.get(zl,i,r);if(i==="hasOwnProperty")return Gp}const a=Reflect.get(s,i,r);return(va(i)?uh.has(i):Vp(i))||(t||Xe(s,"get",i),e)?a:be(a)?o&&ya(i)?a:a.value:ye(a)?t?gh(a):vs(a):a}}const Yp=hh(),Qp=hh(!0);function hh(t=!1){return function(n,s,i,r){let o=n[s];if(is(o)&&be(o)&&!be(i))return!1;if(!t&&(!Ji(i)&&!is(i)&&(o=te(o),i=te(i)),!$(n)&&be(o)&&!be(i)))return o.value=i,!0;const a=$(n)&&ya(s)?Number(s)<n.length:ne(n,s),l=Reflect.set(n,s,i,r);return n===te(r)&&(a?Gs(i,o)&&Ot(n,"set",s,i):Ot(n,"add",s,i)),l}}function Jp(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ot(t,"delete",e,void 0),s}function Xp(t,e){const n=Reflect.has(t,e);return(!va(e)||!uh.has(e))&&Xe(t,"has",e),n}function Zp(t){return Xe(t,"iterate",$(t)?"length":In),Reflect.ownKeys(t)}const dh={get:jp,set:Yp,deleteProperty:Jp,has:Xp,ownKeys:Zp},e_={get:qp,set(t,e){return!0},deleteProperty(t,e){return!0}},t_=Te({},dh,{get:zp,set:Qp}),Ta=t=>t,Rr=t=>Reflect.getPrototypeOf(t);function Ni(t,e,n=!1,s=!1){t=t.__v_raw;const i=te(t),r=te(e);n||(e!==r&&Xe(i,"get",e),Xe(i,"get",r));const{has:o}=Rr(i),a=s?Ta:n?ka:Ys;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Pi(t,e=!1){const n=this.__v_raw,s=te(n),i=te(t);return e||(t!==i&&Xe(s,"has",t),Xe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function xi(t,e=!1){return t=t.__v_raw,!e&&Xe(te(t),"iterate",In),Reflect.get(t,"size",t)}function ql(t){t=te(t);const e=te(this);return Rr(e).has.call(e,t)||(e.add(t),Ot(e,"add",t,t)),this}function Kl(t,e){e=te(e);const n=te(this),{has:s,get:i}=Rr(n);let r=s.call(n,t);r||(t=te(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Gs(e,o)&&Ot(n,"set",t,e):Ot(n,"add",t,e),this}function Gl(t){const e=te(this),{has:n,get:s}=Rr(e);let i=n.call(e,t);i||(t=te(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ot(e,"delete",t,void 0),r}function Yl(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Ot(t,"clear",void 0,void 0),n}function Oi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=te(o),l=e?Ta:t?ka:Ys;return!t&&Xe(a,"iterate",In),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Mi(t,e,n){return function(...s){const i=this.__v_raw,r=te(i),o=Qn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ta:e?ka:Ys;return!e&&Xe(r,"iterate",l?Po:In),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Bt(t){return function(...e){return t==="delete"?!1:this}}function n_(){const t={get(r){return Ni(this,r)},get size(){return xi(this)},has:Pi,add:ql,set:Kl,delete:Gl,clear:Yl,forEach:Oi(!1,!1)},e={get(r){return Ni(this,r,!1,!0)},get size(){return xi(this)},has:Pi,add:ql,set:Kl,delete:Gl,clear:Yl,forEach:Oi(!1,!0)},n={get(r){return Ni(this,r,!0)},get size(){return xi(this,!0)},has(r){return Pi.call(this,r,!0)},add:Bt("add"),set:Bt("set"),delete:Bt("delete"),clear:Bt("clear"),forEach:Oi(!0,!1)},s={get(r){return Ni(this,r,!0,!0)},get size(){return xi(this,!0)},has(r){return Pi.call(this,r,!0)},add:Bt("add"),set:Bt("set"),delete:Bt("delete"),clear:Bt("clear"),forEach:Oi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Mi(r,!1,!1),n[r]=Mi(r,!0,!1),e[r]=Mi(r,!1,!0),s[r]=Mi(r,!0,!0)}),[t,n,e,s]}const[s_,i_,r_,o_]=n_();function Sa(t,e){const n=e?t?o_:r_:t?i_:s_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ne(n,i)&&i in s?n:s,i,r)}const a_={get:Sa(!1,!1)},l_={get:Sa(!1,!0)},c_={get:Sa(!0,!1)},fh=new WeakMap,ph=new WeakMap,_h=new WeakMap,u_=new WeakMap;function h_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d_(t){return t.__v_skip||!Object.isExtensible(t)?0:h_(kp(t))}function vs(t){return is(t)?t:Ra(t,!1,dh,a_,fh)}function f_(t){return Ra(t,!1,t_,l_,ph)}function gh(t){return Ra(t,!0,e_,c_,_h)}function Ra(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=d_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Zt(t){return is(t)?Zt(t.__v_raw):!!(t&&t.__v_isReactive)}function is(t){return!!(t&&t.__v_isReadonly)}function Ji(t){return!!(t&&t.__v_isShallow)}function mh(t){return Zt(t)||is(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function kr(t){return Yi(t,"__v_skip",!0),t}const Ys=t=>ye(t)?vs(t):t,ka=t=>ye(t)?gh(t):t;function vh(t){Xt&&lt&&(t=te(t),ch(t.dep||(t.dep=ba())))}function yh(t,e){t=te(t);const n=t.dep;n&&xo(n)}function be(t){return!!(t&&t.__v_isRef===!0)}function De(t){return Eh(t,!1)}function p_(t){return Eh(t,!0)}function Eh(t,e){return be(t)?t:new __(t,e)}class __{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:Ys(e)}get value(){return vh(this),this._value}set value(e){const n=this.__v_isShallow||Ji(e)||is(e);e=n?e:te(e),Gs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ys(e),yh(this))}}function ze(t){return be(t)?t.value:t}const g_={get:(t,e,n)=>ze(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return be(i)&&!be(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function wh(t){return Zt(t)?t:new Proxy(t,g_)}function m_(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=y_(t,n);return e}class v_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $p(te(this._object),this._key)}}function y_(t,e,n){const s=t[e];return be(s)?s:new v_(t,e,n)}class E_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ca(e,()=>{this._dirty||(this._dirty=!0,yh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=te(this);return vh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function w_(t,e,n=!1){let s,i;const r=G(t);return r?(s=t,i=dt):(s=t.get,i=t.set),new E_(s,i,r||!i,n)}function en(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ar(r,e,n)}return i}function it(t,e,n,s){if(G(t)){const r=en(t,e,n,s);return r&&Ju(r)&&r.catch(o=>{Ar(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(it(t[r],e,n,s));return i}function Ar(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){en(l,null,10,[t,o,a]);return}}b_(t,n,i,s)}function b_(t,e,n,s=!0){console.error(t)}let Qs=!1,Oo=!1;const Ue=[];let wt=0;const Jn=[];let kt=null,yn=0;const bh=Promise.resolve();let Aa=null;function Na(t){const e=Aa||bh;return t?e.then(this?t.bind(this):t):e}function C_(t){let e=wt+1,n=Ue.length;for(;e<n;){const s=e+n>>>1;Js(Ue[s])<t?e=s+1:n=s}return e}function Pa(t){(!Ue.length||!Ue.includes(t,Qs&&t.allowRecurse?wt+1:wt))&&(t.id==null?Ue.push(t):Ue.splice(C_(t.id),0,t),Ch())}function Ch(){!Qs&&!Oo&&(Oo=!0,Aa=bh.then(Th))}function I_(t){const e=Ue.indexOf(t);e>wt&&Ue.splice(e,1)}function T_(t){$(t)?Jn.push(...t):(!kt||!kt.includes(t,t.allowRecurse?yn+1:yn))&&Jn.push(t),Ch()}function Ql(t,e=Qs?wt+1:0){for(;e<Ue.length;e++){const n=Ue[e];n&&n.pre&&(Ue.splice(e,1),e--,n())}}function Ih(t){if(Jn.length){const e=[...new Set(Jn)];if(Jn.length=0,kt){kt.push(...e);return}for(kt=e,kt.sort((n,s)=>Js(n)-Js(s)),yn=0;yn<kt.length;yn++)kt[yn]();kt=null,yn=0}}const Js=t=>t.id==null?1/0:t.id,S_=(t,e)=>{const n=Js(t)-Js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Th(t){Oo=!1,Qs=!0,Ue.sort(S_);const e=dt;try{for(wt=0;wt<Ue.length;wt++){const n=Ue[wt];n&&n.active!==!1&&en(n,null,14)}}finally{wt=0,Ue.length=0,Ih(),Qs=!1,Aa=null,(Ue.length||Jn.length)&&Th()}}function R_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ve;d&&(i=n.map(_=>Se(_)?_.trim():_)),h&&(i=n.map(ko))}let a,l=s[a=no(e)]||s[a=no(It(e))];!l&&r&&(l=s[a=no(Mn(e))]),l&&it(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,it(c,t,6,i)}}function Sh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Sh(c,e,!0);u&&(a=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ye(t)&&s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):Te(o,r),ye(t)&&s.set(t,o),o)}function Nr(t,e){return!t||!Cr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Mn(e))||ne(t,e))}let Qe=null,Rh=null;function Xi(t){const e=Qe;return Qe=t,Rh=t&&t.type.__scopeId||null,e}function xa(t,e=Qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&lc(-1);const r=Xi(e);let o;try{o=t(...i)}finally{Xi(r),s._d&&lc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function so(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:m,inheritAttrs:w}=t;let k,A;const P=Xi(t);try{if(n.shapeFlag&4){const M=i||s;k=Et(u.call(M,M,h,r,_,d,m)),A=l}else{const M=e;k=Et(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),A=e.props?l:k_(l)}}catch(M){Bs.length=0,Ar(M,t,1),k=Ie(ft)}let j=k;if(A&&w!==!1){const M=Object.keys(A),{shapeFlag:Y}=j;M.length&&Y&7&&(o&&M.some(ga)&&(A=A_(A,o)),j=ln(j,A))}return n.dirs&&(j=ln(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),k=j,Xi(P),k}const k_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Cr(n))&&((e||(e={}))[n]=t[n]);return e},A_=(t,e)=>{const n={};for(const s in t)(!ga(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function N_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Jl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Nr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Jl(s,o,c):!0:!!o;return!1}function Jl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Nr(n,r))return!0}return!1}function P_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const x_=t=>t.__isSuspense;function O_(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):T_(t)}const Di={};function Xn(t,e,n){return kh(t,e,n)}function kh(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ve){var a;const l=rh()===((a=ke)==null?void 0:a.scope)?ke:null;let c,u=!1,h=!1;if(be(t)?(c=()=>t.value,u=Ji(t)):Zt(t)?(c=()=>t,s=!0):$(t)?(h=!0,u=t.some(M=>Zt(M)||Ji(M)),c=()=>t.map(M=>{if(be(M))return M.value;if(Zt(M))return bn(M);if(G(M))return en(M,l,2)})):G(t)?e?c=()=>en(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),it(t,l,3,[_])}:c=dt,e&&s){const M=c;c=()=>bn(M())}let d,_=M=>{d=P.onStop=()=>{en(M,l,4)}},m;if(ei)if(_=dt,e?n&&it(e,l,3,[c(),h?[]:void 0,_]):c(),i==="sync"){const M=Pg();m=M.__watcherHandles||(M.__watcherHandles=[])}else return dt;let w=h?new Array(t.length).fill(Di):Di;const k=()=>{if(P.active)if(e){const M=P.run();(s||u||(h?M.some((Y,fe)=>Gs(Y,w[fe])):Gs(M,w)))&&(d&&d(),it(e,l,3,[M,w===Di?void 0:h&&w[0]===Di?[]:w,_]),w=M)}else P.run()};k.allowRecurse=!!e;let A;i==="sync"?A=k:i==="post"?A=()=>Ge(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),A=()=>Pa(k));const P=new Ca(c,A);e?n?k():w=P.run():i==="post"?Ge(P.run.bind(P),l&&l.suspense):P.run();const j=()=>{P.stop(),l&&l.scope&&ma(l.scope.effects,P)};return m&&m.push(j),j}function M_(t,e,n){const s=this.proxy,i=Se(t)?t.includes(".")?Ah(s,t):()=>s[t]:t.bind(s,s);let r;G(e)?r=e:(r=e.handler,n=e);const o=ke;rs(this);const a=kh(i,r.bind(s),n);return o?rs(o):Tn(),a}function Ah(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function bn(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),be(t))bn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)bn(t[n],e);else if(Qu(t)||Qn(t))t.forEach(n=>{bn(n,e)});else if(Zu(t))for(const n in t)bn(t[n],e);return t}function D_(t,e){const n=Qe;if(n===null)return t;const s=Lr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ve]=e[r];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&bn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function fn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(gs(),it(l,n,8,[t.el,a,t,e]),ms())}}function L_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Or(()=>{t.isMounted=!0}),Dh(()=>{t.isUnmounting=!0}),t}const nt=[Function,Array],Nh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nt,onEnter:nt,onAfterEnter:nt,onEnterCancelled:nt,onBeforeLeave:nt,onLeave:nt,onAfterLeave:nt,onLeaveCancelled:nt,onBeforeAppear:nt,onAppear:nt,onAfterAppear:nt,onAppearCancelled:nt},F_={name:"BaseTransition",props:Nh,setup(t,{slots:e}){const n=Cg(),s=L_();let i;return()=>{const r=e.default&&xh(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==ft){o=w;break}}const a=te(t),{mode:l}=a;if(s.isLeaving)return io(o);const c=Xl(o);if(!c)return io(o);const u=Mo(c,a,s,n);Do(c,u);const h=n.subTree,d=h&&Xl(h);let _=!1;const{getTransitionKey:m}=c.type;if(m){const w=m();i===void 0?i=w:w!==i&&(i=w,_=!0)}if(d&&d.type!==ft&&(!En(c,d)||_)){const w=Mo(d,a,s,n);if(Do(d,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},io(o);l==="in-out"&&c.type!==ft&&(w.delayLeave=(k,A,P)=>{const j=Ph(s,d);j[String(d.key)]=d,k._leaveCb=()=>{A(),k._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},U_=F_;function Ph(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Mo(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:w,onAppear:k,onAfterAppear:A,onAppearCancelled:P}=e,j=String(t.key),M=Ph(n,t),Y=(O,U)=>{O&&it(O,s,9,U)},fe=(O,U)=>{const K=U[1];Y(O,U),$(O)?O.every(he=>he.length<=1)&&K():O.length<=1&&K()},me={mode:r,persisted:o,beforeEnter(O){let U=a;if(!n.isMounted)if(i)U=w||a;else return;O._leaveCb&&O._leaveCb(!0);const K=M[j];K&&En(t,K)&&K.el._leaveCb&&K.el._leaveCb(),Y(U,[O])},enter(O){let U=l,K=c,he=u;if(!n.isMounted)if(i)U=k||l,K=A||c,he=P||u;else return;let D=!1;const ie=O._enterCb=xe=>{D||(D=!0,xe?Y(he,[O]):Y(K,[O]),me.delayedLeave&&me.delayedLeave(),O._enterCb=void 0)};U?fe(U,[O,ie]):ie()},leave(O,U){const K=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return U();Y(h,[O]);let he=!1;const D=O._leaveCb=ie=>{he||(he=!0,U(),ie?Y(m,[O]):Y(_,[O]),O._leaveCb=void 0,M[K]===t&&delete M[K])};M[K]=t,d?fe(d,[O,D]):D()},clone(O){return Mo(O,e,n,s)}};return me}function io(t){if(Pr(t))return t=ln(t),t.children=null,t}function Xl(t){return Pr(t)?t.children?t.children[0]:void 0:t}function Do(t,e){t.shapeFlag&6&&t.component?Do(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xh(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ye?(o.patchFlag&128&&i++,s=s.concat(xh(o.children,e,a))):(e||o.type!==ft)&&s.push(a!=null?ln(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Oh(t,e){return G(t)?(()=>Te({name:t.name},e,{setup:t}))():t}const Wi=t=>!!t.type.__asyncLoader,Pr=t=>t.type.__isKeepAlive;function B_(t,e){Mh(t,"a",e)}function H_(t,e){Mh(t,"da",e)}function Mh(t,e,n=ke){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(xr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Pr(i.parent.vnode)&&W_(s,e,n,i),i=i.parent}}function W_(t,e,n,s){const i=xr(e,t,s,!0);Lh(()=>{ma(s[e],i)},n)}function xr(t,e,n=ke,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gs(),rs(n);const a=it(e,n,t,o);return Tn(),ms(),a});return s?i.unshift(r):i.push(r),r}}const Lt=t=>(e,n=ke)=>(!ei||t==="sp")&&xr(t,(...s)=>e(...s),n),$_=Lt("bm"),Or=Lt("m"),V_=Lt("bu"),j_=Lt("u"),Dh=Lt("bum"),Lh=Lt("um"),z_=Lt("sp"),q_=Lt("rtg"),K_=Lt("rtc");function G_(t,e=ke){xr("ec",t,e)}const Fh="components";function vT(t,e){return Q_(Fh,t,!0,e)||t}const Y_=Symbol.for("v-ndc");function Q_(t,e,n=!0,s=!1){const i=Qe||ke;if(i){const r=i.type;if(t===Fh){const a=kg(r,!1);if(a&&(a===e||a===It(e)||a===Sr(It(e))))return r}const o=Zl(i[t]||r[t],e)||Zl(i.appContext[t],e);return!o&&s?r:o}}function Zl(t,e){return t&&(t[e]||t[It(e)]||t[Sr(It(e))])}function Uh(t,e,n,s){let i;const r=n&&n[s];if($(t)||Se(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Lo=t=>t?Jh(t)?Lr(t)||t.proxy:Lo(t.parent):null,Us=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lo(t.parent),$root:t=>Lo(t.root),$emit:t=>t.emit,$options:t=>Oa(t),$forceUpdate:t=>t.f||(t.f=()=>Pa(t.update)),$nextTick:t=>t.n||(t.n=Na.bind(t.proxy)),$watch:t=>M_.bind(t)}),ro=(t,e)=>t!==ve&&!t.__isScriptSetup&&ne(t,e),J_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ro(s,e))return o[e]=1,s[e];if(i!==ve&&ne(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ne(c,e))return o[e]=3,r[e];if(n!==ve&&ne(n,e))return o[e]=4,n[e];Fo&&(o[e]=0)}}const u=Us[e];let h,d;if(u)return e==="$attrs"&&Xe(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ne(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ro(i,e)?(i[e]=n,!0):s!==ve&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ve&&ne(t,o)||ro(e,o)||(a=r[0])&&ne(a,o)||ne(s,o)||ne(Us,o)||ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ec(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fo=!0;function X_(t){const e=Oa(t),n=t.proxy,s=t.ctx;Fo=!1,e.beforeCreate&&tc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:w,deactivated:k,beforeDestroy:A,beforeUnmount:P,destroyed:j,unmounted:M,render:Y,renderTracked:fe,renderTriggered:me,errorCaptured:O,serverPrefetch:U,expose:K,inheritAttrs:he,components:D,directives:ie,filters:xe}=e;if(c&&Z_(c,s,null),o)for(const de in o){const re=o[de];G(re)&&(s[de]=re.bind(n))}if(i){const de=i.call(n,n);ye(de)&&(t.data=vs(de))}if(Fo=!0,r)for(const de in r){const re=r[de],St=G(re)?re.bind(n,n):G(re.get)?re.get.bind(n,n):dt,Ut=!G(re)&&G(re.set)?re.set.bind(n):dt,mt=Ve({get:St,set:Ut});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Ke=>mt.value=Ke})}if(a)for(const de in a)Bh(a[de],s,n,de);if(l){const de=G(l)?l.call(n):l;Reflect.ownKeys(de).forEach(re=>{$i(re,de[re])})}u&&tc(u,t,"c");function ee(de,re){$(re)?re.forEach(St=>de(St.bind(n))):re&&de(re.bind(n))}if(ee($_,h),ee(Or,d),ee(V_,_),ee(j_,m),ee(B_,w),ee(H_,k),ee(G_,O),ee(K_,fe),ee(q_,me),ee(Dh,P),ee(Lh,M),ee(z_,U),$(K))if(K.length){const de=t.exposed||(t.exposed={});K.forEach(re=>{Object.defineProperty(de,re,{get:()=>n[re],set:St=>n[re]=St})})}else t.exposed||(t.exposed={});Y&&t.render===dt&&(t.render=Y),he!=null&&(t.inheritAttrs=he),D&&(t.components=D),ie&&(t.directives=ie)}function Z_(t,e,n=dt){$(t)&&(t=Uo(t));for(const s in t){const i=t[s];let r;ye(i)?"default"in i?r=rt(i.from||s,i.default,!0):r=rt(i.from||s):r=rt(i),be(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function tc(t,e,n){it($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bh(t,e,n,s){const i=s.includes(".")?Ah(n,s):()=>n[s];if(Se(t)){const r=e[t];G(r)&&Xn(i,r)}else if(G(t))Xn(i,t.bind(n));else if(ye(t))if($(t))t.forEach(r=>Bh(r,e,n,s));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&Xn(i,r,t)}}function Oa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Zi(l,c,o,!0)),Zi(l,e,o)),ye(e)&&r.set(e,l),l}function Zi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Zi(t,r,n,!0),i&&i.forEach(o=>Zi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=eg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const eg={data:nc,props:sc,emits:sc,methods:Ds,computed:Ds,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Ds,directives:Ds,watch:ng,provide:nc,inject:tg};function nc(t,e){return e?t?function(){return Te(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function tg(t,e){return Ds(Uo(t),Uo(e))}function Uo(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function Ds(t,e){return t?Te(Object.create(null),t,e):e}function sc(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:Te(Object.create(null),ec(t),ec(e??{})):e}function ng(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=We(t[s],e[s]);return n}function Hh(){return{app:null,config:{isNativeTag:Tp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sg=0;function ig(t,e){return function(s,i=null){G(s)||(s=Te({},s)),i!=null&&!ye(i)&&(i=null);const r=Hh(),o=new Set;let a=!1;const l=r.app={_uid:sg++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:xg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ie(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Lr(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Xs=l;try{return c()}finally{Xs=null}}};return l}}let Xs=null;function $i(t,e){if(ke){let n=ke.provides;const s=ke.parent&&ke.parent.provides;s===n&&(n=ke.provides=Object.create(s)),n[t]=e}}function rt(t,e,n=!1){const s=ke||Qe;if(s||Xs){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Xs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(s&&s.proxy):e}}function rg(){return!!(ke||Qe||Xs)}function og(t,e,n,s=!1){const i={},r={};Yi(r,Dr,1),t.propsDefaults=Object.create(null),Wh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:f_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function ag(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=te(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Nr(t.emitsOptions,d))continue;const _=e[d];if(l)if(ne(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=It(d);i[m]=Bo(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Wh(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=Mn(h))===h||!ne(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Bo(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ne(e,h))&&(delete r[h],c=!0)}c&&Ot(t,"set","$attrs")}function Wh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Bi(l))continue;const c=e[l];let u;i&&ne(i,u=It(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Nr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=te(n),c=a||ve;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Bo(i,l,h,c[h],t,!ne(c,h))}}return o}function Bo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(rs(i),s=c[n]=l.call(null,e),Tn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Mn(n))&&(s=!0))}return s}function $h(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!G(t)){const u=h=>{l=!0;const[d,_]=$h(h,e,!0);Te(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ye(t)&&s.set(t,Yn),Yn;if($(r))for(let u=0;u<r.length;u++){const h=It(r[u]);ic(h)&&(o[h]=ve)}else if(r)for(const u in r){const h=It(u);if(ic(h)){const d=r[u],_=o[h]=$(d)||G(d)?{type:d}:Te({},d);if(_){const m=ac(Boolean,_.type),w=ac(String,_.type);_[0]=m>-1,_[1]=w<0||m<w,(m>-1||ne(_,"default"))&&a.push(h)}}}const c=[o,a];return ye(t)&&s.set(t,c),c}function ic(t){return t[0]!=="$"}function rc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function oc(t,e){return rc(t)===rc(e)}function ac(t,e){return $(e)?e.findIndex(n=>oc(n,t)):G(e)&&oc(e,t)?0:-1}const Vh=t=>t[0]==="_"||t==="$stable",Ma=t=>$(t)?t.map(Et):[Et(t)],lg=(t,e,n)=>{if(e._n)return e;const s=xa((...i)=>Ma(e(...i)),n);return s._c=!1,s},jh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Vh(i))continue;const r=t[i];if(G(r))e[i]=lg(i,r,s);else if(r!=null){const o=Ma(r);e[i]=()=>o}}},zh=(t,e)=>{const n=Ma(e);t.slots.default=()=>n},cg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),Yi(e,"_",n)):jh(e,t.slots={})}else t.slots={},e&&zh(t,e);Yi(t.slots,Dr,1)},ug=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Te(i,e),!n&&a===1&&delete i._):(r=!e.$stable,jh(e,i)),o=e}else e&&(zh(t,e),o={default:1});if(r)for(const a in i)!Vh(a)&&!(a in o)&&delete i[a]};function Ho(t,e,n,s,i=!1){if($(t)){t.forEach((d,_)=>Ho(d,e&&($(e)?e[_]:e),n,s,i));return}if(Wi(s)&&!i)return;const r=s.shapeFlag&4?Lr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Se(c)?(u[c]=null,ne(h,c)&&(h[c]=null)):be(c)&&(c.value=null)),G(l))en(l,a,12,[o,u]);else{const d=Se(l),_=be(l);if(d||_){const m=()=>{if(t.f){const w=d?ne(h,l)?h[l]:u[l]:l.value;i?$(w)&&ma(w,r):$(w)?w.includes(r)||w.push(r):d?(u[l]=[r],ne(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ne(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ge(m,n)):m()}}}const Ge=O_;function hg(t){return dg(t)}function dg(t,e){const n=Ao();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=dt,insertStaticContent:m}=t,w=(f,p,g,v=null,E=null,b=null,N=!1,T=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!En(f,p)&&(v=y(f),Ke(f,E,b,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:C,ref:H,shapeFlag:L}=p;switch(C){case Mr:k(f,p,g,v);break;case ft:A(f,p,g,v);break;case Vi:f==null&&P(p,g,v,N);break;case Ye:D(f,p,g,v,E,b,N,T,S);break;default:L&1?Y(f,p,g,v,E,b,N,T,S):L&6?ie(f,p,g,v,E,b,N,T,S):(L&64||L&128)&&C.process(f,p,g,v,E,b,N,T,S,R)}H!=null&&E&&Ho(H,f&&f.ref,b,p||f,!p)},k=(f,p,g,v)=>{if(f==null)s(p.el=a(p.children),g,v);else{const E=p.el=f.el;p.children!==f.children&&c(E,p.children)}},A=(f,p,g,v)=>{f==null?s(p.el=l(p.children||""),g,v):p.el=f.el},P=(f,p,g,v)=>{[f.el,f.anchor]=m(f.children,p,g,v,f.el,f.anchor)},j=({el:f,anchor:p},g,v)=>{let E;for(;f&&f!==p;)E=d(f),s(f,g,v),f=E;s(p,g,v)},M=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},Y=(f,p,g,v,E,b,N,T,S)=>{N=N||p.type==="svg",f==null?fe(p,g,v,E,b,N,T,S):U(f,p,E,b,N,T,S)},fe=(f,p,g,v,E,b,N,T)=>{let S,C;const{type:H,props:L,shapeFlag:W,transition:q,dirs:X}=f;if(S=f.el=o(f.type,b,L&&L.is,L),W&8?u(S,f.children):W&16&&O(f.children,S,null,v,E,b&&H!=="foreignObject",N,T),X&&fn(f,null,v,"created"),me(S,f,f.scopeId,N,v),L){for(const le in L)le!=="value"&&!Bi(le)&&r(S,le,null,L[le],b,f.children,v,E,Fe);"value"in L&&r(S,"value",null,L.value),(C=L.onVnodeBeforeMount)&&yt(C,v,f)}X&&fn(f,null,v,"beforeMount");const pe=(!E||E&&!E.pendingBranch)&&q&&!q.persisted;pe&&q.beforeEnter(S),s(S,p,g),((C=L&&L.onVnodeMounted)||pe||X)&&Ge(()=>{C&&yt(C,v,f),pe&&q.enter(S),X&&fn(f,null,v,"mounted")},E)},me=(f,p,g,v,E)=>{if(g&&_(f,g),v)for(let b=0;b<v.length;b++)_(f,v[b]);if(E){let b=E.subTree;if(p===b){const N=E.vnode;me(f,N,N.scopeId,N.slotScopeIds,E.parent)}}},O=(f,p,g,v,E,b,N,T,S=0)=>{for(let C=S;C<f.length;C++){const H=f[C]=T?zt(f[C]):Et(f[C]);w(null,H,p,g,v,E,b,N,T)}},U=(f,p,g,v,E,b,N)=>{const T=p.el=f.el;let{patchFlag:S,dynamicChildren:C,dirs:H}=p;S|=f.patchFlag&16;const L=f.props||ve,W=p.props||ve;let q;g&&pn(g,!1),(q=W.onVnodeBeforeUpdate)&&yt(q,g,p,f),H&&fn(p,f,g,"beforeUpdate"),g&&pn(g,!0);const X=E&&p.type!=="foreignObject";if(C?K(f.dynamicChildren,C,T,g,v,X,b):N||re(f,p,T,null,g,v,X,b,!1),S>0){if(S&16)he(T,p,L,W,g,v,E);else if(S&2&&L.class!==W.class&&r(T,"class",null,W.class,E),S&4&&r(T,"style",L.style,W.style,E),S&8){const pe=p.dynamicProps;for(let le=0;le<pe.length;le++){const Ce=pe[le],at=L[Ce],Bn=W[Ce];(Bn!==at||Ce==="value")&&r(T,Ce,at,Bn,E,f.children,g,v,Fe)}}S&1&&f.children!==p.children&&u(T,p.children)}else!N&&C==null&&he(T,p,L,W,g,v,E);((q=W.onVnodeUpdated)||H)&&Ge(()=>{q&&yt(q,g,p,f),H&&fn(p,f,g,"updated")},v)},K=(f,p,g,v,E,b,N)=>{for(let T=0;T<p.length;T++){const S=f[T],C=p[T],H=S.el&&(S.type===Ye||!En(S,C)||S.shapeFlag&70)?h(S.el):g;w(S,C,H,null,v,E,b,N,!0)}},he=(f,p,g,v,E,b,N)=>{if(g!==v){if(g!==ve)for(const T in g)!Bi(T)&&!(T in v)&&r(f,T,g[T],null,N,p.children,E,b,Fe);for(const T in v){if(Bi(T))continue;const S=v[T],C=g[T];S!==C&&T!=="value"&&r(f,T,C,S,N,p.children,E,b,Fe)}"value"in v&&r(f,"value",g.value,v.value)}},D=(f,p,g,v,E,b,N,T,S)=>{const C=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:W,slotScopeIds:q}=p;q&&(T=T?T.concat(q):q),f==null?(s(C,g,v),s(H,g,v),O(p.children,g,H,E,b,N,T,S)):L>0&&L&64&&W&&f.dynamicChildren?(K(f.dynamicChildren,W,g,E,b,N,T),(p.key!=null||E&&p===E.subTree)&&qh(f,p,!0)):re(f,p,g,H,E,b,N,T,S)},ie=(f,p,g,v,E,b,N,T,S)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?E.ctx.activate(p,g,v,N,S):xe(p,g,v,E,b,N,S):He(f,p,S)},xe=(f,p,g,v,E,b,N)=>{const T=f.component=bg(f,v,E);if(Pr(f)&&(T.ctx.renderer=R),Ig(T),T.asyncDep){if(E&&E.registerDep(T,ee),!f.el){const S=T.subTree=Ie(ft);A(null,S,p,g)}return}ee(T,f,p,g,E,b,N)},He=(f,p,g)=>{const v=p.component=f.component;if(N_(f,p,g))if(v.asyncDep&&!v.asyncResolved){de(v,p,g);return}else v.next=p,I_(v.update),v.update();else p.el=f.el,v.vnode=p},ee=(f,p,g,v,E,b,N)=>{const T=()=>{if(f.isMounted){let{next:H,bu:L,u:W,parent:q,vnode:X}=f,pe=H,le;pn(f,!1),H?(H.el=X.el,de(f,H,N)):H=X,L&&Hi(L),(le=H.props&&H.props.onVnodeBeforeUpdate)&&yt(le,q,H,X),pn(f,!0);const Ce=so(f),at=f.subTree;f.subTree=Ce,w(at,Ce,h(at.el),y(at),f,E,b),H.el=Ce.el,pe===null&&P_(f,Ce.el),W&&Ge(W,E),(le=H.props&&H.props.onVnodeUpdated)&&Ge(()=>yt(le,q,H,X),E)}else{let H;const{el:L,props:W}=p,{bm:q,m:X,parent:pe}=f,le=Wi(p);if(pn(f,!1),q&&Hi(q),!le&&(H=W&&W.onVnodeBeforeMount)&&yt(H,pe,p),pn(f,!0),L&&oe){const Ce=()=>{f.subTree=so(f),oe(L,f.subTree,f,E,null)};le?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ce()):Ce()}else{const Ce=f.subTree=so(f);w(null,Ce,g,v,f,E,b),p.el=Ce.el}if(X&&Ge(X,E),!le&&(H=W&&W.onVnodeMounted)){const Ce=p;Ge(()=>yt(H,pe,Ce),E)}(p.shapeFlag&256||pe&&Wi(pe.vnode)&&pe.vnode.shapeFlag&256)&&f.a&&Ge(f.a,E),f.isMounted=!0,p=g=v=null}},S=f.effect=new Ca(T,()=>Pa(C),f.scope),C=f.update=()=>S.run();C.id=f.uid,pn(f,!0),C()},de=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,ag(f,p.props,v,g),ug(f,p.children,g),gs(),Ql(),ms()},re=(f,p,g,v,E,b,N,T,S=!1)=>{const C=f&&f.children,H=f?f.shapeFlag:0,L=p.children,{patchFlag:W,shapeFlag:q}=p;if(W>0){if(W&128){Ut(C,L,g,v,E,b,N,T,S);return}else if(W&256){St(C,L,g,v,E,b,N,T,S);return}}q&8?(H&16&&Fe(C,E,b),L!==C&&u(g,L)):H&16?q&16?Ut(C,L,g,v,E,b,N,T,S):Fe(C,E,b,!0):(H&8&&u(g,""),q&16&&O(L,g,v,E,b,N,T,S))},St=(f,p,g,v,E,b,N,T,S)=>{f=f||Yn,p=p||Yn;const C=f.length,H=p.length,L=Math.min(C,H);let W;for(W=0;W<L;W++){const q=p[W]=S?zt(p[W]):Et(p[W]);w(f[W],q,g,null,E,b,N,T,S)}C>H?Fe(f,E,b,!0,!1,L):O(p,g,v,E,b,N,T,S,L)},Ut=(f,p,g,v,E,b,N,T,S)=>{let C=0;const H=p.length;let L=f.length-1,W=H-1;for(;C<=L&&C<=W;){const q=f[C],X=p[C]=S?zt(p[C]):Et(p[C]);if(En(q,X))w(q,X,g,null,E,b,N,T,S);else break;C++}for(;C<=L&&C<=W;){const q=f[L],X=p[W]=S?zt(p[W]):Et(p[W]);if(En(q,X))w(q,X,g,null,E,b,N,T,S);else break;L--,W--}if(C>L){if(C<=W){const q=W+1,X=q<H?p[q].el:v;for(;C<=W;)w(null,p[C]=S?zt(p[C]):Et(p[C]),g,X,E,b,N,T,S),C++}}else if(C>W)for(;C<=L;)Ke(f[C],E,b,!0),C++;else{const q=C,X=C,pe=new Map;for(C=X;C<=W;C++){const et=p[C]=S?zt(p[C]):Et(p[C]);et.key!=null&&pe.set(et.key,C)}let le,Ce=0;const at=W-X+1;let Bn=!1,Bl=0;const Rs=new Array(at);for(C=0;C<at;C++)Rs[C]=0;for(C=q;C<=L;C++){const et=f[C];if(Ce>=at){Ke(et,E,b,!0);continue}let vt;if(et.key!=null)vt=pe.get(et.key);else for(le=X;le<=W;le++)if(Rs[le-X]===0&&En(et,p[le])){vt=le;break}vt===void 0?Ke(et,E,b,!0):(Rs[vt-X]=C+1,vt>=Bl?Bl=vt:Bn=!0,w(et,p[vt],g,null,E,b,N,T,S),Ce++)}const Hl=Bn?fg(Rs):Yn;for(le=Hl.length-1,C=at-1;C>=0;C--){const et=X+C,vt=p[et],Wl=et+1<H?p[et+1].el:v;Rs[C]===0?w(null,vt,g,Wl,E,b,N,T,S):Bn&&(le<0||C!==Hl[le]?mt(vt,g,Wl,2):le--)}}},mt=(f,p,g,v,E=null)=>{const{el:b,type:N,transition:T,children:S,shapeFlag:C}=f;if(C&6){mt(f.component.subTree,p,g,v);return}if(C&128){f.suspense.move(p,g,v);return}if(C&64){N.move(f,p,g,R);return}if(N===Ye){s(b,p,g);for(let L=0;L<S.length;L++)mt(S[L],p,g,v);s(f.anchor,p,g);return}if(N===Vi){j(f,p,g);return}if(v!==2&&C&1&&T)if(v===0)T.beforeEnter(b),s(b,p,g),Ge(()=>T.enter(b),E);else{const{leave:L,delayLeave:W,afterLeave:q}=T,X=()=>s(b,p,g),pe=()=>{L(b,()=>{X(),q&&q()})};W?W(b,X,pe):pe()}else s(b,p,g)},Ke=(f,p,g,v=!1,E=!1)=>{const{type:b,props:N,ref:T,children:S,dynamicChildren:C,shapeFlag:H,patchFlag:L,dirs:W}=f;if(T!=null&&Ho(T,null,g,f,!0),H&256){p.ctx.deactivate(f);return}const q=H&1&&W,X=!Wi(f);let pe;if(X&&(pe=N&&N.onVnodeBeforeUnmount)&&yt(pe,p,f),H&6)Ai(f.component,g,v);else{if(H&128){f.suspense.unmount(g,v);return}q&&fn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,g,E,R,v):C&&(b!==Ye||L>0&&L&64)?Fe(C,p,g,!1,!0):(b===Ye&&L&384||!E&&H&16)&&Fe(S,p,g),v&&Fn(f)}(X&&(pe=N&&N.onVnodeUnmounted)||q)&&Ge(()=>{pe&&yt(pe,p,f),q&&fn(f,null,p,"unmounted")},g)},Fn=f=>{const{type:p,el:g,anchor:v,transition:E}=f;if(p===Ye){Un(g,v);return}if(p===Vi){M(f);return}const b=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:N,delayLeave:T}=E,S=()=>N(g,b);T?T(f.el,b,S):S()}else b()},Un=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Ai=(f,p,g)=>{const{bum:v,scope:E,update:b,subTree:N,um:T}=f;v&&Hi(v),E.stop(),b&&(b.active=!1,Ke(N,f,p,g)),T&&Ge(T,p),Ge(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Fe=(f,p,g,v=!1,E=!1,b=0)=>{for(let N=b;N<f.length;N++)Ke(f[N],p,g,v,E)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),x=(f,p,g)=>{f==null?p._vnode&&Ke(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),Ql(),Ih(),p._vnode=f},R={p:w,um:Ke,m:mt,r:Fn,mt:xe,mc:O,pc:re,pbc:K,n:y,o:t};let B,oe;return e&&([B,oe]=e(R)),{render:x,hydrate:B,createApp:ig(x,B)}}function pn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qh(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=zt(i[r]),a.el=o.el),n||qh(o,a)),a.type===Mr&&(a.el=o.el)}}function fg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const pg=t=>t.__isTeleport,Ye=Symbol.for("v-fgt"),Mr=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),Vi=Symbol.for("v-stc"),Bs=[];let ut=null;function Oe(t=!1){Bs.push(ut=t?null:[])}function _g(){Bs.pop(),ut=Bs[Bs.length-1]||null}let Zs=1;function lc(t){Zs+=t}function Kh(t){return t.dynamicChildren=Zs>0?ut||Yn:null,_g(),Zs>0&&ut&&ut.push(t),t}function $e(t,e,n,s,i,r){return Kh(F(t,e,n,s,i,r,!0))}function Gh(t,e,n,s,i){return Kh(Ie(t,e,n,s,i,!0))}function Wo(t){return t?t.__v_isVNode===!0:!1}function En(t,e){return t.type===e.type&&t.key===e.key}const Dr="__vInternal",Yh=({key:t})=>t??null,ji=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Se(t)||be(t)||G(t)?{i:Qe,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,s=0,i=null,r=t===Ye?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yh(e),ref:e&&ji(e),scopeId:Rh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return a?(Da(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),Zs>0&&!o&&ut&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ut.push(l),l}const Ie=gg;function gg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Y_)&&(t=ft),Wo(t)){const a=ln(t,e,!0);return n&&Da(a,n),Zs>0&&!r&&ut&&(a.shapeFlag&6?ut[ut.indexOf(t)]=a:ut.push(a)),a.patchFlag|=-2,a}if(Ag(t)&&(t=t.__vccOpts),e){e=mg(e);let{class:a,style:l}=e;a&&!Se(a)&&(e.class=wa(a)),ye(l)&&(mh(l)&&!$(l)&&(l=Te({},l)),e.style=Ea(l))}const o=Se(t)?1:x_(t)?128:pg(t)?64:ye(t)?4:G(t)?2:0;return F(t,e,n,s,i,o,r,!0)}function mg(t){return t?mh(t)||Dr in t?Te({},t):t:null}function ln(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?yg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yh(a),ref:e&&e.ref?n&&i?$(i)?i.concat(ji(e)):[i,ji(e)]:ji(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vg(t=" ",e=0){return Ie(Mr,null,t,e)}function Qh(t,e){const n=Ie(Vi,null,t);return n.staticCount=e,n}function jn(t="",e=!1){return e?(Oe(),Gh(ft,null,t)):Ie(ft,null,t)}function Et(t){return t==null||typeof t=="boolean"?Ie(ft):$(t)?Ie(Ye,null,t.slice()):typeof t=="object"?zt(t):Ie(Mr,null,String(t))}function zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function Da(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Da(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Dr in e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),s&64?(n=16,e=[vg(e)]):n=8);t.children=e,t.shapeFlag|=n}function yg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=wa([e.class,s.class]));else if(i==="style")e.style=Ea([e.style,s.style]);else if(Cr(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function yt(t,e,n,s=null){it(t,e,7,[n,s])}const Eg=Hh();let wg=0;function bg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Eg,r={uid:wg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new sh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$h(s,i),emitsOptions:Sh(s,i),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=R_.bind(null,r),t.ce&&t.ce(r),r}let ke=null;const Cg=()=>ke||Qe;let La,Hn,cc="__VUE_INSTANCE_SETTERS__";(Hn=Ao()[cc])||(Hn=Ao()[cc]=[]),Hn.push(t=>ke=t),La=t=>{Hn.length>1?Hn.forEach(e=>e(t)):Hn[0](t)};const rs=t=>{La(t),t.scope.on()},Tn=()=>{ke&&ke.scope.off(),La(null)};function Jh(t){return t.vnode.shapeFlag&4}let ei=!1;function Ig(t,e=!1){ei=e;const{props:n,children:s}=t.vnode,i=Jh(t);og(t,n,i,e),cg(t,s);const r=i?Tg(t,e):void 0;return ei=!1,r}function Tg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kr(new Proxy(t.ctx,J_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Rg(t):null;rs(t),gs();const r=en(s,t,0,[t.props,i]);if(ms(),Tn(),Ju(r)){if(r.then(Tn,Tn),e)return r.then(o=>{uc(t,o,e)}).catch(o=>{Ar(o,t,0)});t.asyncDep=r}else uc(t,r,e)}else Xh(t,e)}function uc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=wh(e)),Xh(t,n)}let hc;function Xh(t,e,n){const s=t.type;if(!t.render){if(!e&&hc&&!s.render){const i=s.template||Oa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Te(Te({isCustomElement:r,delimiters:a},o),l);s.render=hc(i,c)}}t.render=s.render||dt}rs(t),gs(),X_(t),ms(),Tn()}function Sg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Xe(t,"get","$attrs"),e[n]}}))}function Rg(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Sg(t)},slots:t.slots,emit:t.emit,expose:e}}function Lr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wh(kr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Us)return Us[n](t)},has(e,n){return n in e||n in Us}}))}function kg(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function Ag(t){return G(t)&&"__vccOpts"in t}const Ve=(t,e)=>w_(t,e,ei);function Fa(t,e,n){const s=arguments.length;return s===2?ye(e)&&!$(e)?Wo(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Wo(n)&&(n=[n]),Ie(t,e,n))}const Ng=Symbol.for("v-scx"),Pg=()=>rt(Ng),xg="3.3.4",Og="http://www.w3.org/2000/svg",wn=typeof document<"u"?document:null,dc=wn&&wn.createElement("template"),Mg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?wn.createElementNS(Og,t):wn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{dc.innerHTML=s?`<svg>${t}</svg>`:t;const a=dc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Dg(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Lg(t,e,n){const s=t.style,i=Se(n);if(n&&!i){if(e&&!Se(e))for(const r in e)n[r]==null&&$o(s,r,"");for(const r in n)$o(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const fc=/\s*!important$/;function $o(t,e,n){if($(n))n.forEach(s=>$o(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Fg(t,e);fc.test(n)?t.setProperty(Mn(s),n.replace(fc,""),"important"):t[s]=n}}const pc=["Webkit","Moz","ms"],oo={};function Fg(t,e){const n=oo[e];if(n)return n;let s=It(e);if(s!=="filter"&&s in t)return oo[e]=s;s=Sr(s);for(let i=0;i<pc.length;i++){const r=pc[i]+s;if(r in t)return oo[e]=r}return e}const _c="http://www.w3.org/1999/xlink";function Ug(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_c,e.slice(6,e.length)):t.setAttributeNS(_c,e,n);else{const r=Fp(e);n==null||r&&!eh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Bg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=eh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function zn(t,e,n,s){t.addEventListener(e,n,s)}function Hg(t,e,n,s){t.removeEventListener(e,n,s)}function Wg(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=$g(e);if(s){const c=r[e]=zg(s,i);zn(t,a,c,l)}else o&&(Hg(t,a,o,l),r[e]=void 0)}}const gc=/(?:Once|Passive|Capture)$/;function $g(t){let e;if(gc.test(t)){e={};let s;for(;s=t.match(gc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mn(t.slice(2)),e]}let ao=0;const Vg=Promise.resolve(),jg=()=>ao||(Vg.then(()=>ao=0),ao=Date.now());function zg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;it(qg(s,n.value),e,5,[s])};return n.value=t,n.attached=jg(),n}function qg(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const mc=/^on[a-z]/,Kg=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Dg(t,s,i):e==="style"?Lg(t,n,s):Cr(e)?ga(e)||Wg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gg(t,e,s,i))?Bg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ug(t,e,s,i))};function Gg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&mc.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||mc.test(e)&&Se(n)?!1:e in t}const Ht="transition",ks="animation",Ua=(t,{slots:e})=>Fa(U_,Yg(t),e);Ua.displayName="Transition";const Zh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ua.props=Te({},Nh,Zh);const _n=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},vc=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function Yg(t){const e={};for(const D in t)D in Zh||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,m=Qg(i),w=m&&m[0],k=m&&m[1],{onBeforeEnter:A,onEnter:P,onEnterCancelled:j,onLeave:M,onLeaveCancelled:Y,onBeforeAppear:fe=A,onAppear:me=P,onAppearCancelled:O=j}=e,U=(D,ie,xe)=>{gn(D,ie?u:a),gn(D,ie?c:o),xe&&xe()},K=(D,ie)=>{D._isLeaving=!1,gn(D,h),gn(D,_),gn(D,d),ie&&ie()},he=D=>(ie,xe)=>{const He=D?me:P,ee=()=>U(ie,D,xe);_n(He,[ie,ee]),yc(()=>{gn(ie,D?l:r),Wt(ie,D?u:a),vc(He)||Ec(ie,s,w,ee)})};return Te(e,{onBeforeEnter(D){_n(A,[D]),Wt(D,r),Wt(D,o)},onBeforeAppear(D){_n(fe,[D]),Wt(D,l),Wt(D,c)},onEnter:he(!1),onAppear:he(!0),onLeave(D,ie){D._isLeaving=!0;const xe=()=>K(D,ie);Wt(D,h),Zg(),Wt(D,d),yc(()=>{D._isLeaving&&(gn(D,h),Wt(D,_),vc(M)||Ec(D,s,k,xe))}),_n(M,[D,xe])},onEnterCancelled(D){U(D,!1),_n(j,[D])},onAppearCancelled(D){U(D,!0),_n(O,[D])},onLeaveCancelled(D){K(D),_n(Y,[D])}})}function Qg(t){if(t==null)return null;if(ye(t))return[lo(t.enter),lo(t.leave)];{const e=lo(t);return[e,e]}}function lo(t){return Pp(t)}function Wt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function gn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function yc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Jg=0;function Ec(t,e,n,s){const i=t._endId=++Jg,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Xg(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=_=>{_.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Xg(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Ht}Delay`),r=s(`${Ht}Duration`),o=wc(i,r),a=s(`${ks}Delay`),l=s(`${ks}Duration`),c=wc(a,l);let u=null,h=0,d=0;e===Ht?o>0&&(u=Ht,h=o,d=r.length):e===ks?c>0&&(u=ks,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Ht:ks:null,d=u?u===Ht?r.length:l.length:0);const _=u===Ht&&/\b(transform|all)(,|$)/.test(s(`${Ht}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:_}}function wc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>bc(n)+bc(t[s])))}function bc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Zg(){return document.body.offsetHeight}const Cc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Hi(e,n):e};function em(t){t.target.composing=!0}function Ic(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tm={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Cc(i);const r=s||i.props&&i.props.type==="number";zn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ko(a)),t._assign(a)}),n&&zn(t,"change",()=>{t.value=t.value.trim()}),e||(zn(t,"compositionstart",em),zn(t,"compositionend",Ic),zn(t,"change",Ic))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Cc(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ko(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},nm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sm=(t,e)=>n=>{if(!("key"in n))return;const s=Mn(n.key);if(e.some(i=>i===s||nm[i]===s))return t(n)},im=Te({patchProp:Kg},Mg);let Tc;function rm(){return Tc||(Tc=hg(im))}const om=(...t)=>{const e=rm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=am(s);if(!i)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function am(t){return Se(t)?document.querySelector(t):t}var lm=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let ed;const Fr=t=>ed=t,td=Symbol();function Vo(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hs||(Hs={}));function cm(){const t=ih(!0),e=t.run(()=>De({}));let n=[],s=[];const i=kr({install(r){Fr(i),i._a=r,r.provide(td,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!lm?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const nd=()=>{};function Sc(t,e,n,s=nd){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&rh()&&Bp(i),i}function Wn(t,...e){t.slice().forEach(n=>{n(...e)})}const um=t=>t();function jo(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Vo(i)&&Vo(s)&&t.hasOwnProperty(n)&&!be(s)&&!Zt(s)?t[n]=jo(i,s):t[n]=s}return t}const hm=Symbol();function dm(t){return!Vo(t)||!t.hasOwnProperty(hm)}const{assign:jt}=Object;function fm(t){return!!(be(t)&&t.effect)}function pm(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=m_(n.state.value[t]);return jt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=kr(Ve(()=>{Fr(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return l=sd(t,c,e,n,s,!0),l}function sd(t,e,n={},s,i,r){let o;const a=jt({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),De({});let w;function k(O){let U;c=u=!1,typeof O=="function"?(O(s.state.value[t]),U={type:Hs.patchFunction,storeId:t,events:_}):(jo(s.state.value[t],O),U={type:Hs.patchObject,payload:O,storeId:t,events:_});const K=w=Symbol();Na().then(()=>{w===K&&(c=!0)}),u=!0,Wn(h,U,s.state.value[t])}const A=r?function(){const{state:U}=n,K=U?U():{};this.$patch(he=>{jt(he,K)})}:nd;function P(){o.stop(),h=[],d=[],s._s.delete(t)}function j(O,U){return function(){Fr(s);const K=Array.from(arguments),he=[],D=[];function ie(ee){he.push(ee)}function xe(ee){D.push(ee)}Wn(d,{args:K,name:O,store:Y,after:ie,onError:xe});let He;try{He=U.apply(this&&this.$id===t?this:Y,K)}catch(ee){throw Wn(D,ee),ee}return He instanceof Promise?He.then(ee=>(Wn(he,ee),ee)).catch(ee=>(Wn(D,ee),Promise.reject(ee))):(Wn(he,He),He)}}const M={_p:s,$id:t,$onAction:Sc.bind(null,d),$patch:k,$reset:A,$subscribe(O,U={}){const K=Sc(h,O,U.detached,()=>he()),he=o.run(()=>Xn(()=>s.state.value[t],D=>{(U.flush==="sync"?u:c)&&O({storeId:t,type:Hs.direct,events:_},D)},jt({},l,U)));return K},$dispose:P},Y=vs(M);s._s.set(t,Y);const fe=s._a&&s._a.runWithContext||um,me=s._e.run(()=>(o=ih(),fe(()=>o.run(e))));for(const O in me){const U=me[O];if(be(U)&&!fm(U)||Zt(U))r||(m&&dm(U)&&(be(U)?U.value=m[O]:jo(U,m[O])),s.state.value[t][O]=U);else if(typeof U=="function"){const K=j(O,U);me[O]=K,a.actions[O]=U}}return jt(Y,me),jt(te(Y),me),Object.defineProperty(Y,"$state",{get:()=>s.state.value[t],set:O=>{k(U=>{jt(U,O)})}}),s._p.forEach(O=>{jt(Y,o.run(()=>O({store:Y,app:s._a,pinia:s,options:a})))}),m&&r&&n.hydrate&&n.hydrate(Y.$state,m),c=!0,u=!0,Y}function Ur(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=rg();return a=a||(c?rt(td,null):null),a&&Fr(a),a=ed,a._s.has(s)||(r?sd(s,e,i,a):pm(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const qn=typeof window<"u";function _m(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function co(t,e){const n={};for(const s in e){const i=e[s];n[s]=_t(i)?i.map(t):t(i)}return n}const Ws=()=>{},_t=Array.isArray,gm=/\/$/,mm=t=>t.replace(gm,"");function uo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=wm(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function vm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ym(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&os(e.matched[s],n.matched[i])&&id(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function id(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Em(t[n],e[n]))return!1;return!0}function Em(t,e){return _t(t)?kc(t,e):_t(e)?kc(e,t):t===e}function kc(t,e){return _t(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function wm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ti;(function(t){t.pop="pop",t.push="push"})(ti||(ti={}));var $s;(function(t){t.back="back",t.forward="forward",t.unknown=""})($s||($s={}));function bm(t){if(!t)if(qn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mm(t)}const Cm=/^[^#]+#/;function Im(t,e){return t.replace(Cm,"#")+e}function Tm(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Br=()=>({left:window.pageXOffset,top:window.pageYOffset});function Sm(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Tm(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ac(t,e){return(history.state?history.state.position-e:-1)+t}const zo=new Map;function Rm(t,e){zo.set(t,e)}function km(t){const e=zo.get(t);return zo.delete(t),e}let Am=()=>location.protocol+"//"+location.host;function rd(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Rc(l,"")}return Rc(n,t)+s+i}function Nm(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=rd(t,location),m=n.value,w=e.value;let k=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}k=w?d.position-w.position:0}else s(_);i.forEach(A=>{A(n.value,m,{delta:k,type:ti.pop,direction:k?k>0?$s.forward:$s.back:$s.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:Br()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Nc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Br():null}}function Pm(t){const{history:e,location:n}=window,s={value:rd(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Am()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=ae({},e.state,Nc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ae({},i.value,e.state,{forward:l,scroll:Br()});r(u.current,u,!0);const h=ae({},Nc(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function xm(t){t=bm(t);const e=Pm(t),n=Nm(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ae({location:"",base:t,go:s,createHref:Im.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Om(t){return typeof t=="string"||t&&typeof t=="object"}function od(t){return typeof t=="string"||typeof t=="symbol"}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ad=Symbol("");var Pc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Pc||(Pc={}));function as(t,e){return ae(new Error,{type:t,[ad]:!0},e)}function Rt(t,e){return t instanceof Error&&ad in t&&(e==null||!!(t.type&e))}const xc="[^/]+?",Mm={sensitive:!1,strict:!1,start:!0,end:!0},Dm=/[.+*?^${}()[\]/\\]/g;function Lm(t,e){const n=ae({},Mm,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Dm,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:w,optional:k,regexp:A}=d;r.push({name:m,repeatable:w,optional:k});const P=A||xc;if(P!==xc){_+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+M.message)}}let j=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(j=k&&c.length<2?`(?:/${j})`:"/"+j),k&&(j+="?"),i+=j,_+=20,k&&(_+=-8),w&&(_+=-20),P===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:w,optional:k}=_,A=m in c?c[m]:"";if(_t(A)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=_t(A)?A.join("/"):A;if(!P)if(k)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Fm(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Um(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Fm(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Oc(s))return 1;if(Oc(i))return-1}return i.length-s.length}function Oc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Bm={type:0,value:""},Hm=/[a-zA-Z0-9_]/;function Wm(t){if(!t)return[[]];if(t==="/")return[[Bm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:Hm.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function $m(t,e,n){const s=Lm(Wm(t.path),n),i=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Vm(t,e){const n=[],s=new Map;e=Lc({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,m=jm(u);m.aliasOf=d&&d.record;const w=Lc(e,u),k=[m];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of j)k.push(ae({},m,{components:d?d.record.components:m.components,path:M,aliasOf:d?d.record:m}))}let A,P;for(const j of k){const{path:M}=j;if(h&&M[0]!=="/"){const Y=h.record.path,fe=Y[Y.length-1]==="/"?"":"/";j.path=h.record.path+(M&&fe+M)}if(A=$m(j,h,w),d?d.alias.push(A):(P=P||A,P!==A&&P.alias.push(A),_&&u.name&&!Dc(A)&&o(u.name)),m.children){const Y=m.children;for(let fe=0;fe<Y.length;fe++)r(Y[fe],A,d&&d.children[fe])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return P?()=>{o(P)}:Ws}function o(u){if(od(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Um(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ld(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Dc(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},m,w;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw as(1,{location:u});w=d.record.name,_=ae(Mc(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Mc(u.params,d.keys.map(P=>P.name))),m=d.stringify(_)}else if("path"in u)m=u.path,d=n.find(P=>P.re.test(m)),d&&(_=d.parse(m),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw as(1,{location:u,currentLocation:h});w=d.record.name,_=ae({},h.params,u.params),m=d.stringify(_)}const k=[];let A=d;for(;A;)k.unshift(A.record),A=A.parent;return{name:w,path:m,params:_,matched:k,meta:qm(k)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Mc(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function jm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function zm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Dc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qm(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Lc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ld(t,e){return e.children.some(n=>n===t||ld(t,n))}const cd=/#/g,Km=/&/g,Gm=/\//g,Ym=/=/g,Qm=/\?/g,ud=/\+/g,Jm=/%5B/g,Xm=/%5D/g,hd=/%5E/g,Zm=/%60/g,dd=/%7B/g,ev=/%7C/g,fd=/%7D/g,tv=/%20/g;function Ba(t){return encodeURI(""+t).replace(ev,"|").replace(Jm,"[").replace(Xm,"]")}function nv(t){return Ba(t).replace(dd,"{").replace(fd,"}").replace(hd,"^")}function qo(t){return Ba(t).replace(ud,"%2B").replace(tv,"+").replace(cd,"%23").replace(Km,"%26").replace(Zm,"`").replace(dd,"{").replace(fd,"}").replace(hd,"^")}function sv(t){return qo(t).replace(Ym,"%3D")}function iv(t){return Ba(t).replace(cd,"%23").replace(Qm,"%3F")}function rv(t){return t==null?"":iv(t).replace(Gm,"%2F")}function er(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ov(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ud," "),o=r.indexOf("="),a=er(o<0?r:r.slice(0,o)),l=o<0?null:er(r.slice(o+1));if(a in e){let c=e[a];_t(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Fc(t){let e="";for(let n in t){const s=t[n];if(n=sv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(_t(s)?s.map(r=>r&&qo(r)):[s&&qo(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function av(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=_t(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const lv=Symbol(""),Uc=Symbol(""),Hr=Symbol(""),Ha=Symbol(""),Ko=Symbol("");function As(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(as(4,{from:n,to:e})):h instanceof Error?a(h):Om(h)?a(as(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ho(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(cv(a)){const c=(a.__vccOpts||a)[e];c&&i.push(qt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=_m(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&qt(d,n,s,r,o)()}))}}return i}function cv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bc(t){const e=rt(Hr),n=rt(Ha),s=Ve(()=>e.resolve(ze(t.to))),i=Ve(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(os.bind(null,u));if(d>-1)return d;const _=Hc(l[c-2]);return c>1&&Hc(u)===_&&h[h.length-1].path!==_?h.findIndex(os.bind(null,l[c-2])):d}),r=Ve(()=>i.value>-1&&dv(n.params,s.value.params)),o=Ve(()=>i.value>-1&&i.value===n.matched.length-1&&id(n.params,s.value.params));function a(l={}){return hv(l)?e[ze(t.replace)?"replace":"push"](ze(t.to)).catch(Ws):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const uv=Oh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bc,setup(t,{slots:e}){const n=vs(Bc(t)),{options:s}=rt(Hr),i=Ve(()=>({[Wc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Fa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),pd=uv;function hv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dv(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!_t(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Hc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wc=(t,e,n)=>t??e??n,fv=Oh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=rt(Ko),i=Ve(()=>t.route||s.value),r=rt(Uc,0),o=Ve(()=>{let c=ze(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ve(()=>i.value.matched[o.value]);$i(Uc,Ve(()=>o.value+1)),$i(lv,a),$i(Ko,i);const l=De();return Xn(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!os(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return $c(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,k=Fa(d,ae({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return $c(n.default,{Component:k,route:c})||k}}});function $c(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _d=fv;function pv(t){const e=Vm(t.routes,t),n=t.parseQuery||ov,s=t.stringifyQuery||Fc,i=t.history,r=As(),o=As(),a=As(),l=p_($t);let c=$t;qn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=co.bind(null,y=>""+y),h=co.bind(null,rv),d=co.bind(null,er);function _(y,x){let R,B;return od(y)?(R=e.getRecordMatcher(y),B=x):B=y,e.addRoute(B,R)}function m(y){const x=e.getRecordMatcher(y);x&&e.removeRoute(x)}function w(){return e.getRoutes().map(y=>y.record)}function k(y){return!!e.getRecordMatcher(y)}function A(y,x){if(x=ae({},x||l.value),typeof y=="string"){const g=uo(n,y,x.path),v=e.resolve({path:g.path},x),E=i.createHref(g.fullPath);return ae(g,v,{params:d(v.params),hash:er(g.hash),redirectedFrom:void 0,href:E})}let R;if("path"in y)R=ae({},y,{path:uo(n,y.path,x.path).path});else{const g=ae({},y.params);for(const v in g)g[v]==null&&delete g[v];R=ae({},y,{params:h(g)}),x.params=h(x.params)}const B=e.resolve(R,x),oe=y.hash||"";B.params=u(d(B.params));const f=vm(s,ae({},y,{hash:nv(oe),path:B.path})),p=i.createHref(f);return ae({fullPath:f,hash:oe,query:s===Fc?av(y.query):y.query||{}},B,{redirectedFrom:void 0,href:p})}function P(y){return typeof y=="string"?uo(n,y,l.value.path):ae({},y)}function j(y,x){if(c!==y)return as(8,{from:x,to:y})}function M(y){return me(y)}function Y(y){return M(ae(P(y),{replace:!0}))}function fe(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:R}=x;let B=typeof R=="function"?R(y):R;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=P(B):{path:B},B.params={}),ae({query:y.query,hash:y.hash,params:"path"in B?{}:y.params},B)}}function me(y,x){const R=c=A(y),B=l.value,oe=y.state,f=y.force,p=y.replace===!0,g=fe(R);if(g)return me(ae(P(g),{state:typeof g=="object"?ae({},oe,g.state):oe,force:f,replace:p}),x||R);const v=R;v.redirectedFrom=x;let E;return!f&&ym(s,B,R)&&(E=as(16,{to:v,from:B}),mt(B,B,!0,!1)),(E?Promise.resolve(E):K(v,B)).catch(b=>Rt(b)?Rt(b,2)?b:Ut(b):re(b,v,B)).then(b=>{if(b){if(Rt(b,2))return me(ae({replace:p},P(b.to),{state:typeof b.to=="object"?ae({},oe,b.to.state):oe,force:f}),x||v)}else b=D(v,B,!0,p,oe);return he(v,B,b),b})}function O(y,x){const R=j(y,x);return R?Promise.reject(R):Promise.resolve()}function U(y){const x=Un.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(y):y()}function K(y,x){let R;const[B,oe,f]=_v(y,x);R=ho(B.reverse(),"beforeRouteLeave",y,x);for(const g of B)g.leaveGuards.forEach(v=>{R.push(qt(v,y,x))});const p=O.bind(null,y,x);return R.push(p),Fe(R).then(()=>{R=[];for(const g of r.list())R.push(qt(g,y,x));return R.push(p),Fe(R)}).then(()=>{R=ho(oe,"beforeRouteUpdate",y,x);for(const g of oe)g.updateGuards.forEach(v=>{R.push(qt(v,y,x))});return R.push(p),Fe(R)}).then(()=>{R=[];for(const g of y.matched)if(g.beforeEnter&&!x.matched.includes(g))if(_t(g.beforeEnter))for(const v of g.beforeEnter)R.push(qt(v,y,x));else R.push(qt(g.beforeEnter,y,x));return R.push(p),Fe(R)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),R=ho(f,"beforeRouteEnter",y,x),R.push(p),Fe(R))).then(()=>{R=[];for(const g of o.list())R.push(qt(g,y,x));return R.push(p),Fe(R)}).catch(g=>Rt(g,8)?g:Promise.reject(g))}function he(y,x,R){for(const B of a.list())U(()=>B(y,x,R))}function D(y,x,R,B,oe){const f=j(y,x);if(f)return f;const p=x===$t,g=qn?history.state:{};R&&(B||p?i.replace(y.fullPath,ae({scroll:p&&g&&g.scroll},oe)):i.push(y.fullPath,oe)),l.value=y,mt(y,x,R,p),Ut()}let ie;function xe(){ie||(ie=i.listen((y,x,R)=>{if(!Ai.listening)return;const B=A(y),oe=fe(B);if(oe){me(ae(oe,{replace:!0}),B).catch(Ws);return}c=B;const f=l.value;qn&&Rm(Ac(f.fullPath,R.delta),Br()),K(B,f).catch(p=>Rt(p,12)?p:Rt(p,2)?(me(p.to,B).then(g=>{Rt(g,20)&&!R.delta&&R.type===ti.pop&&i.go(-1,!1)}).catch(Ws),Promise.reject()):(R.delta&&i.go(-R.delta,!1),re(p,B,f))).then(p=>{p=p||D(B,f,!1),p&&(R.delta&&!Rt(p,8)?i.go(-R.delta,!1):R.type===ti.pop&&Rt(p,20)&&i.go(-1,!1)),he(B,f,p)}).catch(Ws)}))}let He=As(),ee=As(),de;function re(y,x,R){Ut(y);const B=ee.list();return B.length?B.forEach(oe=>oe(y,x,R)):console.error(y),Promise.reject(y)}function St(){return de&&l.value!==$t?Promise.resolve():new Promise((y,x)=>{He.add([y,x])})}function Ut(y){return de||(de=!y,xe(),He.list().forEach(([x,R])=>y?R(y):x()),He.reset()),y}function mt(y,x,R,B){const{scrollBehavior:oe}=t;if(!qn||!oe)return Promise.resolve();const f=!R&&km(Ac(y.fullPath,0))||(B||!R)&&history.state&&history.state.scroll||null;return Na().then(()=>oe(y,x,f)).then(p=>p&&Sm(p)).catch(p=>re(p,y,x))}const Ke=y=>i.go(y);let Fn;const Un=new Set,Ai={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,hasRoute:k,getRoutes:w,resolve:A,options:t,push:M,replace:Y,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:St,install(y){const x=this;y.component("RouterLink",pd),y.component("RouterView",_d),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(l)}),qn&&!Fn&&l.value===$t&&(Fn=!0,M(i.location).catch(oe=>{}));const R={};for(const oe in $t)R[oe]=Ve(()=>l.value[oe]);y.provide(Hr,x),y.provide(Ha,vs(R)),y.provide(Ko,l);const B=y.unmount;Un.add(y),y.unmount=function(){Un.delete(y),Un.size<1&&(c=$t,ie&&ie(),ie=null,l.value=$t,Fn=!1,de=!1),B()}}};function Fe(y){return y.reduce((x,R)=>x.then(()=>U(R)),Promise.resolve())}return Ai}function _v(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>os(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>os(c,l))||i.push(l))}return[n,s,i]}function Wa(){return rt(Hr)}function gv(){return rt(Ha)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw ys(e)},ys=function(t){return new Error("Firebase Database ("+gd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(md(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new vv;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vd=function(t){const e=md(t);return $a.encodeByteArray(e,!0)},tr=function(t){return vd(t).replace(/\./g,"")},nr=function(t){try{return $a.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){return yd(void 0,t)}function yd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ev(n)||(t[n]=yd(t[n],e[n]));return t}function Ev(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=()=>wv().__FIREBASE_DEFAULTS__,Cv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Iv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nr(t[1]);return e&&JSON.parse(e)},Va=()=>{try{return bv()||Cv()||Iv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ed=t=>{var e,n;return(n=(e=Va())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tv=t=>{const e=Ed(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},wd=()=>{var t;return(t=Va())===null||t===void 0?void 0:t.config},bd=t=>{var e;return(e=Va())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[tr(JSON.stringify(n)),tr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ja(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Rv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kv(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Id(){return gd.NODE_ADMIN===!0}function Av(){try{return typeof indexedDB=="object"}catch{return!1}}function Nv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="FirebaseError";class dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Pv,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?xv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dn(i,a,s)}}function xv(t,e){return t.replace(Ov,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ov=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ni(nr(r[0])||""),n=ni(nr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Mv=function(t){const e=Td(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Dv=function(t){const e=Td(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ls(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Go(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ir(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Vc(r)&&Vc(o)){if(!ir(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Vc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Fv(t,e){const n=new Uv(t,e);return n.subscribe.bind(n)}class Uv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Bv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=fo),i.error===void 0&&(i.error=fo),i.complete===void 0&&(i.complete=fo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fo(){}function Wr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$r=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new gi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vv(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$v(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $v(t){return t===mn?void 0:t}function Vv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const zv={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},qv=ce.INFO,Kv={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Gv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Kv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class za{constructor(e){this.name=e,this._logLevel=qv,this._logHandler=Gv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Yv=(t,e)=>e.some(n=>t instanceof n);let jc,zc;function Qv(){return jc||(jc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jv(){return zc||(zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sd=new WeakMap,Yo=new WeakMap,Rd=new WeakMap,po=new WeakMap,qa=new WeakMap;function Xv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(tn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sd.set(n,t)}).catch(()=>{}),qa.set(e,t),e}function Zv(t){if(Yo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Yo.set(t,e)}let Qo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ey(t){Qo=t(Qo)}function ty(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_o(this),e,...n);return Rd.set(s,e.sort?e.sort():[e]),tn(s)}:Jv().includes(t)?function(...e){return t.apply(_o(this),e),tn(Sd.get(this))}:function(...e){return tn(t.apply(_o(this),e))}}function ny(t){return typeof t=="function"?ty(t):(t instanceof IDBTransaction&&Zv(t),Yv(t,Qv())?new Proxy(t,Qo):t)}function tn(t){if(t instanceof IDBRequest)return Xv(t);if(po.has(t))return po.get(t);const e=ny(t);return e!==t&&(po.set(t,e),qa.set(e,t)),e}const _o=t=>qa.get(t);function sy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=tn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(tn(o.result),l.oldVersion,l.newVersion,tn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const iy=["get","getKey","getAll","getAllKeys","count"],ry=["put","add","delete","clear"],go=new Map;function qc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(go.get(e))return go.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ry.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||iy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return go.set(e,r),r}ey(t=>({...t,get:(e,n,s)=>qc(e,n)||t.get(e,n,s),has:(e,n)=>!!qc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ay(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ay(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jo="@firebase/app",Kc="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new za("@firebase/app"),ly="@firebase/app-compat",cy="@firebase/analytics-compat",uy="@firebase/analytics",hy="@firebase/app-check-compat",dy="@firebase/app-check",fy="@firebase/auth",py="@firebase/auth-compat",_y="@firebase/database",gy="@firebase/database-compat",my="@firebase/functions",vy="@firebase/functions-compat",yy="@firebase/installations",Ey="@firebase/installations-compat",wy="@firebase/messaging",by="@firebase/messaging-compat",Cy="@firebase/performance",Iy="@firebase/performance-compat",Ty="@firebase/remote-config",Sy="@firebase/remote-config-compat",Ry="@firebase/storage",ky="@firebase/storage-compat",Ay="@firebase/firestore",Ny="@firebase/firestore-compat",Py="firebase",xy="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="[DEFAULT]",Oy={[Jo]:"fire-core",[ly]:"fire-core-compat",[uy]:"fire-analytics",[cy]:"fire-analytics-compat",[dy]:"fire-app-check",[hy]:"fire-app-check-compat",[fy]:"fire-auth",[py]:"fire-auth-compat",[_y]:"fire-rtdb",[gy]:"fire-rtdb-compat",[my]:"fire-fn",[vy]:"fire-fn-compat",[yy]:"fire-iid",[Ey]:"fire-iid-compat",[wy]:"fire-fcm",[by]:"fire-fcm-compat",[Cy]:"fire-perf",[Iy]:"fire-perf-compat",[Ty]:"fire-rc",[Sy]:"fire-rc-compat",[Ry]:"fire-gcs",[ky]:"fire-gcs-compat",[Ay]:"fire-fst",[Ny]:"fire-fst-compat","fire-js":"fire-js",[Py]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Map,Zo=new Map;function My(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cs(t){const e=t.name;if(Zo.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Zo.set(e,t);for(const n of rr.values())My(n,t);return!0}function Ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nn=new mi("app","Firebase",Dy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=xy;function Ga(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw nn.create("bad-app-name",{appName:String(i)});if(n||(n=wd()),!n)throw nn.create("no-options");const r=rr.get(i);if(r){if(ir(n,r.options)&&ir(s,r.config))return r;throw nn.create("duplicate-app",{appName:i})}const o=new jv(i);for(const l of Zo.values())o.addComponent(l);const a=new Ly(n,s,o);return rr.set(i,a),a}function kd(t=Xo){const e=rr.get(t);if(!e&&t===Xo&&wd())return Ga();if(!e)throw nn.create("no-app",{appName:t});return e}function sn(t,e,n){var s;let i=(s=Oy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}cs(new kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="firebase-heartbeat-database",Uy=1,si="firebase-heartbeat-store";let mo=null;function Ad(){return mo||(mo=sy(Fy,Uy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(si)}}}).catch(t=>{throw nn.create("idb-open",{originalErrorMessage:t.message})})),mo}async function By(t){try{return await(await Ad()).transaction(si).objectStore(si).get(Nd(t))}catch(e){if(e instanceof dn)An.warn(e.message);else{const n=nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function Gc(t,e){try{const s=(await Ad()).transaction(si,"readwrite");await s.objectStore(si).put(e,Nd(t)),await s.done}catch(n){if(n instanceof dn)An.warn(n.message);else{const s=nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(s.message)}}}function Nd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=1024,Wy=30*24*60*60*1e3;class $y{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Wy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yc(),{heartbeatsToSend:n,unsentEntries:s}=Vy(this._heartbeatsCache.heartbeats),i=tr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yc(){return new Date().toISOString().substring(0,10)}function Vy(t,e=Hy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Qc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Av()?Nv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await By(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qc(t){return tr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){cs(new kn("platform-logger",e=>new oy(e),"PRIVATE")),cs(new kn("heartbeat",e=>new $y(e),"PRIVATE")),sn(Jo,Kc,t),sn(Jo,Kc,"esm2017"),sn("fire-js","")}zy("");var qy="firebase",Ky="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(qy,Ky,"app");function Ya(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Pd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gy=Pd,xd=new mi("auth","Firebase",Pd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new za("@firebase/auth");function Yy(t,...e){or.logLevel<=ce.WARN&&or.warn(`Auth (${ws}): ${t}`,...e)}function zi(t,...e){or.logLevel<=ce.ERROR&&or.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,...e){throw Qa(t,...e)}function bt(t,...e){return Qa(t,...e)}function Qy(t,e,n){const s=Object.assign(Object.assign({},Gy()),{[e]:n});return new mi("auth","Firebase",s).create(e,{appName:t.name})}function Qa(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return xd.create(t,...e)}function z(t,e,...n){if(!t)throw Qa(e,...n)}function At(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zi(e),new Error(e)}function Mt(t,e){t||At(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Jy(){return Jc()==="http:"||Jc()==="https:"}function Jc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jy()||Rv()||"connection"in navigator)?navigator.onLine:!0}function Zy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=ja()||Cd()}get(){return Xy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=new vi(3e4,6e4);function yi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bs(t,e,n,s,i={}){return Md(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Es(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Od.fetch()(Dd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Md(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},e0),e);try{const i=new n0(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Li(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Li(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Li(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qy(t,u,c);gt(t,u)}}catch(i){if(i instanceof dn)throw i;gt(t,"network-request-failed",{message:String(i)})}}async function Vr(t,e,n,s,i={}){const r=await bs(t,e,n,s,i);return"mfaPendingCredential"in r&&gt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Dd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ja(t.config,i):`${t.config.apiScheme}://${i}`}class n0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(bt(this.auth,"network-request-failed")),t0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Li(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=bt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e){return bs(t,"POST","/v1/accounts:delete",e)}async function i0(t,e){return bs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r0(t,e=!1){const n=Ze(t),s=await n.getIdToken(e),i=Xa(s);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Vs(vo(i.auth_time)),issuedAtTime:Vs(vo(i.iat)),expirationTime:Vs(vo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function vo(t){return Number(t)*1e3}function Xa(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const i=nr(n);return i?JSON.parse(i):(zi("Failed to decode base64 JWT payload"),null)}catch(i){return zi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function o0(t){const e=Xa(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof dn&&a0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function a0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ii(t,i0(n,{idToken:s}));z(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?h0(r.providerUserInfo):[],a=u0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ld(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function c0(t){const e=Ze(t);await ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u0(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function h0(t){return t.map(e=>{var{providerId:n}=e,s=Ya(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t,e){const n=await Md(t,{},async()=>{const s=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Dd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Od.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):o0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await d0(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ri;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ya(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new l0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ld(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r0(this,e)}reload(){return c0(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ar(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ii(this,s0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:M,isAnonymous:Y,providerData:fe,stsTokenManager:me}=n;z(j&&me,e,"internal-error");const O=ri.fromJSON(this.name,me);z(typeof j=="string",e,"internal-error"),Vt(h,e.name),Vt(d,e.name),z(typeof M=="boolean",e,"internal-error"),z(typeof Y=="boolean",e,"internal-error"),Vt(_,e.name),Vt(m,e.name),Vt(w,e.name),Vt(k,e.name),Vt(A,e.name),Vt(P,e.name);const U=new Sn({uid:j,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:Y,photoURL:m,phoneNumber:_,tenantId:w,stsTokenManager:O,createdAt:A,lastLoginAt:P});return fe&&Array.isArray(fe)&&(U.providerData=fe.map(K=>Object.assign({},K))),k&&(U._redirectEventId=k),U}static async _fromIdTokenResponse(e,n,s=!1){const i=new ri;i.updateFromServerResponse(n);const r=new Sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ar(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new Map;function Nt(t){Mt(t instanceof Function,"Expected a class definition");let e=Xc.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fd.type="NONE";const Zc=Fd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e,n){return`firebase:${t}:${e}:${n}`}class Zn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=qi(this.userKey,i.apiKey,r),this.fullPersistenceKey=qi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Zn(Nt(Zc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Nt(Zc);const o=qi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Sn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Zn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Zn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ud(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($d(e))return"Blackberry";if(Vd(e))return"Webos";if(Za(e))return"Safari";if((e.includes("chrome/")||Bd(e))&&!e.includes("edge/"))return"Chrome";if(Wd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ud(t=Be()){return/firefox\//i.test(t)}function Za(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bd(t=Be()){return/crios\//i.test(t)}function Hd(t=Be()){return/iemobile/i.test(t)}function Wd(t=Be()){return/android/i.test(t)}function $d(t=Be()){return/blackberry/i.test(t)}function Vd(t=Be()){return/webos/i.test(t)}function jr(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function f0(t=Be()){var e;return jr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function p0(){return kv()&&document.documentMode===10}function jd(t=Be()){return jr(t)||Wd(t)||Vd(t)||$d(t)||/windows phone/i.test(t)||Hd(t)}function _0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e=[]){let n;switch(t){case"Browser":n=eu(Be());break;case"Worker":n=`${eu(Be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${s}`}async function qd(t,e){return bs(t,"GET","/v2/recaptchaConfig",yi(t,e))}function tu(t){return t!==void 0&&t.enterprise!==void 0}class Kd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gd(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=bt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",g0().appendChild(s)})}function m0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const v0="https://www.google.com/recaptcha/enterprise.js?render=",y0="recaptcha-enterprise",E0="NO_RECAPTCHA";class Yd{constructor(e){this.type=y0,this.auth=Ei(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{qd(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Kd(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;tu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(E0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&tu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Gd(v0+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function nu(t,e,n,s=!1){const i=new Yd(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new su(this),this.idTokenSubscription=new su(this),this.beforeStateQueue=new w0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Zn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ar(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}async initializeRecaptchaConfig(){const e=await qd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Kd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Yd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Zn.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Yy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ei(t){return Ze(t)}class su{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fv(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e){const n=Ka(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ir(r,e??{}))return i;gt(i,"already-initialized")}return n.initialize({options:e})}function I0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function T0(t,e,n){const s=Ei(t);z(s._canInitEmulator,s,"emulator-config-failed"),z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Qd(e),{host:o,port:a}=S0(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||R0()}function Qd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S0(t){const e=Qd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:iu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:iu(o)}}}function iu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function R0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,n){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}async function k0(t,e){return bs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e){return Vr(t,"POST","/v1/accounts:signInWithPassword",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",yi(t,e))}async function N0(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends el{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new oi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new oi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await nu(e,s,"signInWithPassword");return yo(e,i)}else return yo(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await nu(e,s,"signInWithPassword");return yo(e,r)}else return Promise.reject(i)});case"emailLink":return A0(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return k0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return N0(e,{idToken:n,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e){return Vr(t,"POST","/v1/accounts:signInWithIdp",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="http://localhost";class Nn extends el{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ya(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Nn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,es(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:P0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Es(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function O0(t){const e=Ls(Fs(t)).link,n=e?Ls(Fs(e)).deep_link_id:null,s=Ls(Fs(t)).deep_link_id;return(s?Ls(Fs(s)).link:null)||s||n||e||t}class tl{constructor(e){var n,s,i,r,o,a;const l=Ls(Fs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=x0((i=l.mode)!==null&&i!==void 0?i:null);z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=O0(e);try{return new tl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=tl.parseLink(n);return z(s,"argument-error"),oi._fromEmailAndCode(e,s.code,s.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Jd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends wi{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gt.credential(n,s)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends wi{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends wi{constructor(){super("twitter.com")}static credential(e,n){return Nn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qt.credential(n,s)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Sn._fromIdTokenResponse(e,s,i),o=ru(s);return new us({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ru(s);return new us({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ru(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends dn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,lr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new lr(e,n,s,i)}}function Xd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?lr._fromErrorAndOperation(t,r,e,s):r})}async function M0(t,e,n=!1){const s=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ii(t,Xd(s,i,e,t),n);z(r.idToken,s,"internal-error");const o=Xa(r.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),us._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&gt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zd(t,e,n=!1){const s="signIn",i=await Xd(t,s,e),r=await us._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function L0(t,e){return Zd(Ei(t),e)}function yT(t,e,n){return L0(Ze(t),Cs.credential(e,n))}function F0(t,e,n,s){return Ze(t).onIdTokenChanged(e,n,s)}function U0(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}const cr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cr,"1"),this.storage.removeItem(cr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(){const t=Be();return Za(t)||jr(t)}const H0=1e3,W0=10;class tf extends ef{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=B0()&&_0(),this.fallbackToPolling=jd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);p0()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,W0):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},H0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tf.type="LOCAL";const $0=tf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends ef{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nf.type="SESSION";const sf=nf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new zr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await V0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=nl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function z0(t){Ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function q0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function G0(){return rf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="firebaseLocalStorageDb",Y0=1,ur="firebaseLocalStorage",af="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qr(t,e){return t.transaction([ur],e?"readwrite":"readonly").objectStore(ur)}function Q0(){const t=indexedDB.deleteDatabase(of);return new bi(t).toPromise()}function ta(){const t=indexedDB.open(of,Y0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ur,{keyPath:af})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ur)?e(s):(s.close(),await Q0(),e(await ta()))})})}async function ou(t,e,n){const s=qr(t,!0).put({[af]:e,value:n});return new bi(s).toPromise()}async function J0(t,e){const n=qr(t,!1).get(e),s=await new bi(n).toPromise();return s===void 0?null:s.value}function au(t,e){const n=qr(t,!0).delete(e);return new bi(n).toPromise()}const X0=800,Z0=3;class lf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ta(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Z0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zr._getInstance(G0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await q0(),!this.activeServiceWorker)return;this.sender=new j0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ta();return await ou(e,cr,"1"),await au(e,cr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ou(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>J0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>au(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=qr(i,!1).getAll();return new bi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lf.type="LOCAL";const eE=lf;new vi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e){return e?Nt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends el{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nE(t){return Zd(t.auth,new sl(t),t.bypassAuthState)}function sE(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),D0(n,new sl(t),t.bypassAuthState)}async function iE(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),M0(n,new sl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nE;case"linkViaPopup":case"linkViaRedirect":return iE;case"reauthViaPopup":case"reauthViaRedirect":return sE;default:gt(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new vi(2e3,1e4);class Kn extends cf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=nl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rE.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="pendingRedirect",Ki=new Map;class aE extends cf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ki.get(this.auth._key());if(!e){try{const s=await lE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ki.set(this.auth._key(),e)}return this.bypassAuthState||Ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lE(t,e){const n=hE(e),s=uE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function cE(t,e){Ki.set(t._key(),e)}function uE(t){return Nt(t._redirectPersistence)}function hE(t){return qi(oE,t.config.apiKey,t.name)}async function dE(t,e,n=!1){const s=Ei(t),i=tE(s,e),o=await new aE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=10*60*1e3;class pE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_E(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!uf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fE&&this.cachedEventUids.clear(),this.cachedEventUids.has(lu(e))}saveEventToCache(e){this.cachedEventUids.add(lu(e)),this.lastProcessedEventTime=Date.now()}}function lu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _E(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(t,e={}){return bs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vE=/^https?/;async function yE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gE(t);for(const n of e)try{if(EE(n))return}catch{}gt(t,"unauthorized-domain")}function EE(t){const e=ea(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!vE.test(n))return!1;if(mE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new vi(3e4,6e4);function cu(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bE(t){return new Promise((e,n)=>{var s,i,r;function o(){cu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cu(),n(bt(t,"network-request-failed"))},timeout:wE.get()})}if(!((i=(s=Ct().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ct().gapi)===null||r===void 0)&&r.load)o();else{const a=m0("iframefcb");return Ct()[a]=()=>{gapi.load?o():n(bt(t,"network-request-failed"))},Gd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function CE(t){return Gi=Gi||bE(t),Gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=new vi(5e3,15e3),TE="__/auth/iframe",SE="emulator/auth/iframe",RE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AE(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ja(e,SE):`https://${t.config.authDomain}/${TE}`,s={apiKey:e.apiKey,appName:t.name,v:ws},i=kE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Es(s).slice(1)}`}async function NE(t){const e=await CE(t),n=Ct().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:AE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),a=Ct().setTimeout(()=>{r(o)},IE.get());function l(){Ct().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xE=500,OE=600,ME="_blank",DE="http://localhost";class uu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LE(t,e,n,s=xE,i=OE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},PE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Be().toLowerCase();n&&(a=Bd(c)?ME:n),Ud(c)&&(e=e||DE,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(f0(c)&&a!=="_self")return FE(e||"",a),new uu(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new uu(h)}function FE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="__/auth/handler",BE="emulator/auth/handler",HE=encodeURIComponent("fac");async function hu(t,e,n,s,i,r){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ws,eventId:i};if(e instanceof Jd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Go(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof wi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${HE}=${encodeURIComponent(l)}`:"";return`${WE(t)}?${Es(a).slice(1)}${c}`}function WE({config:t}){return t.emulator?Ja(t,BE):`https://${t.authDomain}/${UE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="webStorageSupport";class $E{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sf,this._completeRedirectFn=dE,this._overrideRedirectResult=cE}async _openPopup(e,n,s,i){var r;Mt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await hu(e,n,s,ea(),i);return LE(e,o,nl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await hu(e,n,s,ea(),i);return z0(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await NE(e),s=new pE(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Eo,{type:Eo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Eo];o!==void 0&&n(!!o),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jd()||Za()||jr()}}const VE=$E;var du="@firebase/auth",fu="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qE(t){cs(new kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zd(t)},c=new b0(s,i,r,l);return I0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),cs(new kn("auth-internal",e=>{const n=Ei(e.getProvider("auth").getImmediate());return(s=>new jE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(du,fu,zE(t)),sn(du,fu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=5*60,GE=bd("authIdTokenMaxAge")||KE;let pu=null;const YE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>GE)return;const i=n==null?void 0:n.token;pu!==i&&(pu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QE(t=kd()){const e=Ka(t,"auth");if(e.isInitialized())return e.getImmediate();const n=C0(t,{popupRedirectResolver:VE,persistence:[eE,$0,sf]}),s=bd("authTokenSyncURL");if(s){const r=YE(s);U0(n,r,()=>r(n.currentUser)),F0(n,o=>r(o))}const i=Ed("auth");return i&&T0(n,`http://${i}`),n}qE("Browser");const JE=Ur("counter",()=>{const t=De(0),e=De("分類"),n=De(""),s=Ve(()=>t.value*2);function i(){t.value++}return{count:t,selected:e,selectedYear:n,doubleCount:s,increment:i}}),hf=Ur("menu",()=>{const t=De(0),e=De(0);function n(){e.value?(t.value=!t.value,e.value=0):(t.value=!t.value,e.value=1)}return{isMaskClicked:t,counter:e,toggleMenuVisibility:n}}),XE=Ur("search",()=>{const t=De(void 0);function e(o){t.value=o}const n=De(0),s=De([]),i=De([]);function r(){t.value,i.value.length=0,s.value.length=0;for(let o of n.value)Object.entries(o).forEach(a=>{Object.entries(a[1]).forEach(l=>{Object.keys(l[1]).filter(u=>u.length>10).forEach(u=>{if(l[1][u].artworks.match(t.value)){const h=l[1][u].won?"得獎":"入圍",d={year:o[0],awards:l[0],data:l[1][u].artworks,won:h};s.value.push(d)}l[0].match("歌手")&&l[1][u].won&&i.value.push(l[1][u].artworks.substring(0,l[1][u].artworks.indexOf("／")))})})});i.value.reverse(),s.value.reverse()}return{searchInput:t,sortedEntries:n,storageMatchData:s,searchSuggestions:i,updateSearchText:e,searchHandler:r}}),ET=Ur("login",()=>(Ga({apiKey:"AIzaSyCngOWSZwnTjBGqx3BehB5PeqTg7qENDLI",authDomain:"earnest-runner-189507.firebaseapp.com",databaseURL:"https://earnest-runner-189507.firebaseio.com",projectId:"earnest-runner-189507",storageBucket:"earnest-runner-189507.appspot.com",messagingSenderId:"142419818564",appId:"1:142419818564:web:6b1035fd5a5e3d3d5ce411"}),QE(),{user:De()})),ZE={id:"outer",class:"relative block w-1/2"},ew={id:"searchbox",class:"w-full bg-gray-100 absolute mt-[42px] border rounded hidden box-border z-40"},tw=["onClick"],nw=F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 stroke-slate-400"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})],-1),sw={class:"pl-2"},iw=F("span",{class:"sr-only"},"Search",-1),rw={class:"relative"},ow=F("span",{class:"absolute inset-y-0 left-0 flex items-center pl-2"},[F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 stroke-slate-400"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1),aw=F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),lw=[aw],cw={__name:"SearchBox",setup(t){const e=gv(),n=Wa(),s=XE(),i=De([]),r=Ve(()=>s.searchInput);Xn(r,()=>{});function o(){e.fullPath!=="/Search"&&r.value.split(" ").join("").length!==0&&n.push({path:"/Search"}),a()}function a(){r.value&&r.value.split(" ").join("").length!==0?(i.value.length?l():c(),s.searchHandler()):(i.value=[],c())}const l=()=>{document.getElementById("searchbox").classList.remove("hidden")},c=()=>{document.getElementById("searchbox").classList.add("hidden")};document.addEventListener("click",h=>{document.getElementById("outer").contains(h.target)?i.value.length&&l():c()});function u(){s.searchInput="",s.storageMatchData.length=0}return(h,d)=>(Oe(),$e("div",ZE,[F("div",ew,[(Oe(!0),$e(Ye,null,Uh(i.value,_=>(Oe(),$e("li",{id:"suggestion",class:"list-none flex items-center pl-2 py-1 hover:bg-gray-200",key:_,onClick:m=>ze(s).updateSearchText(_)},[nw,F("span",sw,th(_),1)],8,tw))),128))]),iw,F("div",null,[F("div",rw,[ow,D_(F("input",{"onUpdate:modelValue":d[0]||(d[0]=_=>ze(s).searchInput=_),onKeyup:d[1]||(d[1]=sm(_=>o(),["enter"])),class:"placeholder:italic placeholder:text-slate-400 w-full border border-slate-300 rounded-md pl-9 shadow-sm block bg-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1",placeholder:"Search Singer ...",type:"text",name:"search",autocomplete:"off"},null,544),[[tm,ze(s).searchInput]]),F("span",{onClick:d[2]||(d[2]=_=>u()),class:"absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"},lw)])])]))}},uw=F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-10 h-10 p-1 cursor-pointer hover:rounded-full hover:bg-white hover:bg-opacity-30 fill-custom-gold"},[F("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})],-1),hw=[uw],dw={__name:"Menu",setup(t){const e=hf();return(n,s)=>(Oe(),$e("span",{"data-collapse-toggle":"navbar-hamburger",onClick:s[0]||(s[0]=i=>ze(e).toggleMenuVisibility())},hw))}};const fw={key:0,class:"fixed top-0 left-0 bg-black bg-opacity-20 h-full w-full z-[49]","sr-only":"遮罩"},pw={key:0,id:"menu",class:"inline-block rounded-xl bg-[#1F1F23] max-h-full h-full w-[160px] fixed top-0 right-0 overflow-hidden z-50"},_w={class:"h-16 border-b px-4 flex items-center justify-end"},gw=F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-10 h-10 p-1 cursor-pointer hover:rounded-full hover:bg-white hover:bg-opacity-30 fill-custom-gold"},[F("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})],-1),mw=[gw],vw={class:"flex flex-col text-base text-center text-white"},yw=F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-5 h-5"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})],-1),Ew=F("span",null,"Home",-1),ww=[yw,Ew],bw=F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-5 h-5"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})],-1),Cw=F("span",null,"Search",-1),Iw=[bw,Cw],Tw=F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-5 h-5"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})],-1),Sw=F("span",null,"Admin",-1),Rw=[Tw,Sw],kw=F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-5 h-5"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"})],-1),Aw=F("span",null,"Login",-1),Nw=[kw,Aw],Pw=F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-5 h-5"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"})],-1),xw=F("span",null,"Logout",-1),Ow=[Pw,xw],Mw={__name:"MenuContent",setup(t){const e=Wa(),n=hf(),s=De();Or(()=>{s.value=document.cookie}),cookieStore.addEventListener("change",o=>{s.value=document.cookie}),document.addEventListener("click",o=>{n.counter>1?document.querySelector("#menu").contains(o.target)?n.isMaskClicked=1:(n.isMaskClicked=0,n.counter=0):n.counter===1&&(n.counter=2)});function i(o){e.push({path:`/${o}`})}function r(){alert("您被登出了"),document.cookie="authToken='';expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",location.reload()}return(o,a)=>(Oe(),$e(Ye,null,[ze(n).isMaskClicked?(Oe(),$e("div",fw)):jn("",!0),Ie(Ua,{name:"slide"},{default:xa(()=>[ze(n).isMaskClicked?(Oe(),$e("div",pw,[F("div",_w,[F("span",{"data-collapse-toggle":"navbar-hamburger",onClick:a[0]||(a[0]=l=>ze(n).toggleMenuVisibility())},mw)]),F("ul",vw,[F("li",{class:"cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly",onClick:a[1]||(a[1]=l=>i("Home"))},ww),F("li",{class:"cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly",onClick:a[2]||(a[2]=l=>i("Search"))},Iw),s.value?(Oe(),$e("li",{key:0,class:"cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly",onClick:a[3]||(a[3]=l=>i("Admin"))},Rw)):jn("",!0),s.value?jn("",!0):(Oe(),$e("li",{key:1,class:"cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly",onClick:a[4]||(a[4]=l=>i("Login"))},Nw)),s.value?(Oe(),$e("li",{key:2,class:"cursor-pointer px-4 m-2 leading-10 hover:rounded hover:bg-gray-500 flex flex-row items-center justify-evenly",onClick:a[5]||(a[5]=l=>r())},Ow)):jn("",!0)])])):jn("",!0)]),_:1})],64))}},Dw={class:"fixed top-0 h-16 leading-10 w-full border-b px-4 flex items-center justify-between bg-black z-40"},Lw={class:"flex items-center space-x-4 pr-1"},Fw=F("img",{alt:"Music logo",class:"logo",src:"https://upload.wikimedia.org/wikipedia/zh/thumb/a/a5/Emblem_of_Golden_Melody_Awards.svg/1200px-Emblem_of_Golden_Melody_Awards.svg.png",width:"40",height:"40"},null,-1),Uw=F("span",{class:"hidden sm:inline font-sans font-black text-white text-xl"},"Golden Melody Awards",-1),Bw={class:"flex items-center justify-end"},Hw={__name:"App",setup(t){return JE(),(e,n)=>(Oe(),$e(Ye,null,[F("header",Dw,[F("div",Lw,[Ie(ze(pd),{to:"/",class:"inline-block p-1"},{default:xa(()=>[Fw]),_:1}),Uw]),Ie(cw),F("div",Bw,[Ie(dw)])]),Ie(ze(_d),{class:"mt-[64px]"}),Ie(Mw)],64))}},Ww="modulepreload",$w=function(t){return"/"+t},_u={},$n=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=$w(r),r in _u)return;_u[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Ww,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},gu="@firebase/database",mu="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let df="";function Vw(t){df=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ni(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jw(e)}}catch{}return new zw},Cn=ff("localStorage"),na=ff("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new za("@firebase/database"),qw=function(){let t=1;return function(){return t++}}(),pf=function(t){const e=Hv(t),n=new Lv;n.update(e);const s=n.digest();return $a.encodeByteArray(s)},Ci=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ci.apply(null,s):typeof s=="object"?e+=Ae(s):e+=s,e+=" "}return e};let Rn=null,vu=!0;const Kw=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ts.logLevel=ce.VERBOSE,Rn=ts.log.bind(ts),e&&na.set("logging_enabled",!0)):typeof t=="function"?Rn=t:(Rn=null,na.remove("logging_enabled"))},Me=function(...t){if(vu===!0&&(vu=!1,Rn===null&&na.get("logging_enabled")===!0&&Kw(!0)),Rn){const e=Ci.apply(null,t);Rn(e)}},Ii=function(t){return function(...e){Me(t,...e)}},sa=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ci(...t);ts.error(e)},Dt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ci(...t)}`;throw ts.error(e),new Error(e)},qe=function(...t){const e="FIREBASE WARNING: "+Ci(...t);ts.warn(e)},Gw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},il=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Yw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hs="[MIN_NAME]",Pn="[MAX_NAME]",Dn=function(t,e){if(t===e)return 0;if(t===hs||e===Pn)return-1;if(e===hs||t===Pn)return 1;{const n=yu(t),s=yu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Qw=function(t,e){return t===e?0:t<e?-1:1},Ns=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},rl=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ae(e[s]),n+=":",n+=rl(t[e[s]]);return n+="}",n},_f=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Le(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gf=function(t){I(!il(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Jw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Xw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Zw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const eb=new RegExp("^-?(0*)\\d{1,10}$"),tb=-2147483648,nb=2147483647,yu=function(t){if(eb.test(t)){const e=Number(t);if(e>=tb&&e<=nb)return e}return null},Is=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},sb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},js=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qe(e)}}class ns{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ns.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="5",mf="v",vf="s",yf="r",Ef="f",wf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bf="ls",Cf="p",ia="ac",If="websocket",Tf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ob(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Rf(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===If)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ob(t)&&(n.ns=t.namespace);const i=[];return Le(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.counters_={}}incrementCounter(e,n=1){Tt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo={},bo={};function al(t){const e=t.toString();return wo[e]||(wo[e]=new ab),wo[e]}function lb(t,e){const n=t.toString();return bo[n]||(bo[n]=e()),bo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Is(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="start",ub="close",hb="pLPCommand",db="pRTLPCB",kf="id",Af="pw",Nf="ser",fb="cb",pb="seg",_b="ts",gb="d",mb="dframe",Pf=1870,xf=30,vb=Pf-xf,yb=25e3,Eb=3e4;class Gn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ii(e),this.stats_=al(n),this.urlFn=l=>(this.appCheckToken&&(l[ia]=this.appCheckToken),Rf(n,Tf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Eb)),Yw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ll((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Eu)this.id=a,this.password=l;else if(o===ub)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Eu]="t",s[Nf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[fb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[mf]=ol,this.transportSessionId&&(s[vf]=this.transportSessionId),this.lastSessionId&&(s[bf]=this.lastSessionId),this.applicationId&&(s[Cf]=this.applicationId),this.appCheckToken&&(s[ia]=this.appCheckToken),typeof location<"u"&&location.hostname&&wf.test(location.hostname)&&(s[yf]=Ef);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gn.forceAllow_=!0}static forceDisallow(){Gn.forceDisallow_=!0}static isAvailable(){return Gn.forceAllow_?!0:!Gn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Jw()&&!Xw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vd(n),i=_f(s,vb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[mb]="t",s[kf]=e,s[Af]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ll{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qw(),window[hb+this.uniqueCallbackIdentifier]=e,window[db+this.uniqueCallbackIdentifier]=n,this.myIFrame=ll.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Me("frame writing exception"),a.stack&&Me(a.stack),Me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kf]=this.myID,e[Af]=this.myPW,e[Nf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xf+s.length<=Pf;){const o=this.pendingSegs.shift();s=s+"&"+pb+i+"="+o.seg+"&"+_b+i+"="+o.ts+"&"+gb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(yb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=16384,bb=45e3;let hr=null;typeof MozWebSocket<"u"?hr=MozWebSocket:typeof WebSocket<"u"&&(hr=WebSocket);class ct{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ii(this.connId),this.stats_=al(n),this.connURL=ct.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[mf]=ol,typeof location<"u"&&location.hostname&&wf.test(location.hostname)&&(o[yf]=Ef),n&&(o[vf]=n),s&&(o[bf]=s),i&&(o[ia]=i),r&&(o[Cf]=r),Rf(e,If,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cn.set("previous_websocket_failure",!0);try{let s;Id(),this.mySock=new hr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hr!==null&&!ct.forceDisallow_}static previouslyFailed(){return Cn.isInMemoryStorage||Cn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ni(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_f(n,wb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gn,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ct&&ct.isAvailable();let s=n&&!ct.previouslyFailed();if(e.webSocketOnly&&(n||qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ct];else{const i=this.transports_=[];for(const r of ai.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ai.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ai.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=6e4,Ib=5e3,Tb=10*1024,Sb=100*1024,Co="t",wu="d",Rb="s",bu="r",kb="e",Cu="o",Iu="a",Tu="n",Su="p",Ab="h";class Nb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ii("c:"+this.id+":"),this.transportManager_=new ai(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=js(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Sb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Tb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Co in e){const n=e[Co];n===Iu?this.upgradeIfSecondaryHealthy_():n===bu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Cu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ns("t",e),s=Ns("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Su,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Iu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ns("t",e),s=Ns("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ns(Co,e);if(wu in e){const s=e[wu];if(n===Ab){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Tu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Rb?this.onConnectionShutdown_(s):n===bu?this.onReset_(s):n===kb?sa("Server Error: "+s):n===Cu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ol!==s&&qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),js(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Cb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):js(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ib))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Su,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Mf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ja()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new dr}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=32,ku=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function se(){return new ue("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function cn(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function cl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Pb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function li(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Df(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function Ee(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ue(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=Z(t),s=Z(e);if(n===null)return e;if(n===s)return je(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xb(t,e){const n=li(t,0),s=li(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Dn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Lf(t,e){if(cn(t)!==cn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function st(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(cn(t)>cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ob{constructor(e,n){this.errorPrefix_=n,this.parts_=li(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$r(this.parts_[s]);Ff(this)}}function Mb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$r(e),Ff(t)}function Db(t){const e=t.parts_.pop();t.byteLength_-=$r(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ff(t){if(t.byteLength_>ku)throw new Error(t.errorPrefix_+"has a key path longer than "+ku+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ru)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ru+") or object contains a cycle "+vn(t))}function vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends Mf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ul}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=1e3,Lb=60*5*1e3,Au=30*1e3,Fb=1.3,Ub=3e4,Bb="server_kill",Nu=3;class xt extends Of{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=xt.nextPersistentConnectionId_++,this.log_=Ii("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ps,this.maxReconnectDelay_=Lb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Id())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ul.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ae(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new gi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;xt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tt(e,"w")){const s=ls(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Dv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Au)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Mv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sa("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ub&&(this.reconnectDelay_=Ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Fb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Nb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{qe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Bb)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qe(h),l())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Go(this.interruptReasons_)&&(this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>rl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ue(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nu&&(this.reconnectDelay_=Au,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+df.replace(/\./g,"-")]=1,ja()?e["framework.cordova"]=1:Cd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dr.getInstance().currentlyOnline();return Go(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Q(hs,e),i=new Q(hs,n);return this.compare(s,i)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi;class Uf extends Kr{static get __EMPTY_NODE(){return Fi}static set __EMPTY_NODE(e){Fi=e}compare(e,n){return Dn(e.name,n.name)}isDefinedOn(e){throw ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Pn,Fi)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Fi)}toString(){return".key"}}const ss=new Uf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Pe.RED,this.left=i??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,s,i,r){return new Pe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class Hb{copy(e,n,s,i,r){return this}insert(e,n,s){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ui(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ui(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ui(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ui(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new Hb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(t,e){return Dn(t.name,e.name)}function hl(t,e){return Dn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;function $b(t){ra=t}const Bf=function(t){return typeof t=="number"?"number:"+gf(t):"string:"+t},Hf=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tt(e,".sv"),"Priority must be a string or number.")}else I(t===ra||t.isEmpty(),"priority of unexpected type.");I(t===ra||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hf(this.priorityNode_)}static set __childrenNodeConstructor(e){Pu=e}static get __childrenNodeConstructor(){return Pu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:Z(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gf(this.value_):e+=this.value_,this.lazyHash_=pf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),r=Ne.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf,$f;function Vb(t){Wf=t}function jb(t){$f=t}class zb extends Kr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Dn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Pn,new Ne("[PRIORITY-POST]",$f))}makePost(e,n){const s=Wf(e);return new Q(n,new Ne("[PRIORITY-POST]",s))}toString(){return".priority"}}const we=new zb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=Math.log(2);class Kb{constructor(e){const n=r=>parseInt(Math.log(r)/qb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Pe(d,h.node,Pe.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),w=i(_+1,c);return h=t[_],d=n?n(h):h,new Pe(d,h.node,Pe.BLACK,m,w)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,w){const k=h-m,A=h;h-=m;const P=i(k+1,A),j=t[k],M=n?n(j):j;_(new Pe(M,j.node,w,null,P))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),k=Math.pow(2,l.count-(m+1));w?d(k,Pe.BLACK):(d(k,Pe.BLACK),d(k,Pe.RED))}return u},o=new Kb(t.length),a=r(o);return new Je(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;const Vn={};class Pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Vn&&we,"ChildrenNode.ts has not been loaded"),Io=Io||new Pt({".priority":Vn},{".priority":we}),Io}get(e){const n=ls(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return Tt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=fr(s,e.getCompare()):a=Vn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Pt(u,c)}addToIndexes(e,n){const s=sr(this.indexes_,(i,r)=>{const o=ls(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===Vn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),fr(a,o.getCompare())}else return Vn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new Pt(s,this.indexSet_)}removeFromIndexes(e,n){const s=sr(this.indexes_,i=>{if(i===Vn)return i;{const r=n.get(e.name);return r?i.remove(new Q(e.name,r)):i}});return new Pt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;class V{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Hf(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xs||(xs=new V(new Je(hl),null,Pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xs}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xs:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?xs:this.priorityNode_;return new V(i,o,r)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{I(Z(e)!==".priority"||cn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ge(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(we,(o,a)=>{n[o]=a.val(e),s++,r&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bf(this.getPriority().val())+":"),this.forEachChild(we,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":pf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ti?-1:0}withIndex(e){if(e===ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(we),i=n.getIterator(we);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ss?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gb extends V{constructor(){super(new Je(hl),V.EMPTY_NODE,Pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Ti=new Gb;Object.defineProperties(Q,{MIN:{value:new Q(hs,V.EMPTY_NODE)},MAX:{value:new Q(Pn,Ti)}});Uf.__EMPTY_NODE=V.EMPTY_NODE;Ne.__childrenNodeConstructor=V;$b(Ti);jb(Ti);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=!0;function Re(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Re(e))}if(!(t instanceof Array)&&Yb){const n=[];let s=!1;if(Le(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Re(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return V.EMPTY_NODE;const r=fr(n,Wb,o=>o.name,hl);if(s){const o=fr(n,we.getCompare());return new V(r,Re(e),new Pt({".priority":o},{".priority":we}))}else return new V(r,Re(e),Pt.Default)}else{let n=V.EMPTY_NODE;return Le(t,(s,i)=>{if(Tt(t,s)&&s.substring(0,1)!=="."){const r=Re(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Re(e))}}Vb(Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb extends Kr{constructor(e){super(),this.indexPath_=e,I(!J(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Dn(e.name,n.name):r}makePost(e,n){const s=Re(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new Q(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Ti);return new Q(Pn,e)}toString(){return li(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb extends Kr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Dn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const s=Re(e);return new Q(n,s)}toString(){return".value"}}const Xb=new Jb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){return{type:"value",snapshotNode:t}}function ds(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ci(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ui(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Zb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ci(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ds(n,s)):o.trackChildChange(ui(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(we,(i,r)=>{n.hasChild(i)||s.trackChildChange(ci(i,r))}),n.isLeafNode()||n.forEachChild(we,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ui(i,r,o))}else s.trackChildChange(ds(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.indexedFilter_=new dl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hi.getStartPost_(e),this.endPost_=hi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Q(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const r=this;return n.forEachChild(we,(o,a)=>{r.matches(new Q(o,a))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Q(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new Q(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ui(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ci(n,h));const w=a.updateImmediateChild(n,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ds(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ci(c.name,c.node)),r.trackChildChange(ds(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hs}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new fl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tC(t){return t.loadsAllData()?new dl(t.getIndex()):t.hasLimit()?new eC(t):new hi(t)}function xu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===we?n="$priority":t.index_===Xb?n="$value":t.index_===ss?n="$key":(I(t.index_ instanceof Qb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ae(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ae(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ae(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ou(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==we&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Of{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ii("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=pr.getListenId_(e,s),a={};this.listens_[o]=a;const l=xu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ls(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=pr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=xu(e._queryParams),s=e._path.toString(),i=new gi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Es(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ni(a.responseText)}catch{qe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&qe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(){return{value:null,children:new Map}}function jf(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Z(e);t.children.has(s)||t.children.set(s,_r());const i=t.children.get(s);e=ge(e),jf(i,e,n)}}function oa(t,e,n){t.value!==null?n(e,t.value):sC(t,(s,i)=>{const r=new ue(e.toString()+"/"+s);oa(i,r,n)})}function sC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Le(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=10*1e3,rC=30*1e3,oC=5*60*1e3;class aC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iC(e);const s=Mu+(rC-Mu)*Math.random();js(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Le(e,(i,r)=>{r>0&&Tt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),js(this.reportStats_.bind(this),Math.floor(Math.random()*2*oC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function pl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _l(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ht.ACK_USER_WRITE,this.source=pl()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new gr(se(),n,this.revert)}}else return I(Z(this.path)===e,"operationForChild called for unrelated child."),new gr(ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.source=e,this.path=n,this.type=ht.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new di(this.source,se()):new di(this.source,ge(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ht.OVERWRITE}operationForChild(e){return J(this.path)?new xn(this.source,se(),this.snap.getImmediateChild(e)):new xn(this.source,ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ht.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new xn(this.source,se(),n.value):new fs(this.source,se(),n)}else return I(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fs(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Zb(o.childName,o.snapshotNode))}),Os(t,i,"child_removed",e,s,n),Os(t,i,"child_added",e,s,n),Os(t,i,"child_moved",r,s,n),Os(t,i,"child_changed",e,s,n),Os(t,i,"value",e,s,n),i}function Os(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>hC(t,a,l)),o.forEach(a=>{const l=uC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function uC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hC(t,e,n){if(e.childName==null||n.childName==null)throw ys("Should only compare child_ events.");const s=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e){return{eventCache:t,serverCache:e}}function zs(t,e,n,s){return Gr(new un(e,n,s),t.serverCache)}function zf(t,e,n,s){return Gr(t.eventCache,new un(e,n,s))}function mr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function On(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To;const dC=()=>(To||(To=new Je(Qw)),To);class _e{constructor(e,n=dC()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return Le(e,(s,i)=>{n=n.set(new ue(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:se(),value:this.value};if(J(e))return null;{const s=Z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ge(e),n);return r!=null?{path:Ee(new ue(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(ge(e)):new _e(null)}}set(e,n){if(J(e))return new _e(n,this.children);{const s=Z(e),r=(this.children.get(s)||new _e(null)).set(ge(e),n),o=this.children.insert(s,r);return new _e(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const i=s.remove(ge(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new _e(null):new _e(this.value,r)}else return this}}get(e){if(J(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(ge(e)):null}}setTree(e,n){if(J(e))return n;{const s=Z(e),r=(this.children.get(s)||new _e(null)).setTree(ge(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new _e(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ee(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,se(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(J(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(ge(e),Ee(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,se(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const i=Z(e),r=this.children.get(i);return r?r.foreachOnPath_(ge(e),Ee(n,i),s):new _e(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ee(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new _e(null))}}function qs(t,e,n){if(J(e))return new pt(new _e(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=je(i,e);return r=r.updateChild(o,n),new pt(t.writeTree_.set(i,r))}else{const i=new _e(n),r=t.writeTree_.setTree(e,i);return new pt(r)}}}function aa(t,e,n){let s=t;return Le(n,(i,r)=>{s=qs(s,Ee(e,i),r)}),s}function Du(t,e){if(J(e))return pt.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new pt(n)}}function la(t,e){return Ln(t,e)!=null}function Ln(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Lu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(we,(s,i)=>{e.push(new Q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Q(s,i.value))}),e}function rn(t,e){if(J(e))return t;{const n=Ln(t,e);return n!=null?new pt(new _e(n)):new pt(t.writeTree_.subtree(e))}}function ca(t){return t.writeTree_.isEmpty()}function ps(t,e){return qf(se(),t.writeTree_,e)}function qf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=qf(Ee(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ee(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t,e){return Qf(e,t)}function fC(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=qs(t.visibleWrites,e,n)),t.lastWriteId=s}function pC(t,e,n,s){I(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=aa(t.visibleWrites,e,n),t.lastWriteId=s}function _C(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function gC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&mC(a,s.path)?i=!1:st(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return vC(t),!0;if(s.snap)t.visibleWrites=Du(t.visibleWrites,s.path);else{const a=s.children;Le(a,l=>{t.visibleWrites=Du(t.visibleWrites,Ee(s.path,l))})}return!0}else return!1}function mC(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(Ee(t.path,n),e))return!0;return!1}function vC(t){t.visibleWrites=Kf(t.allWrites,yC,se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yC(t){return t.visible}function Kf(t,e,n){let s=pt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)st(n,o)?(a=je(n,o),s=qs(s,a,r.snap)):st(o,n)&&(a=je(o,n),s=qs(s,se(),r.snap.getChild(a)));else if(r.children){if(st(n,o))a=je(n,o),s=aa(s,a,r.children);else if(st(o,n))if(a=je(o,n),J(a))s=aa(s,se(),r.children);else{const l=ls(r.children,Z(a));if(l){const c=l.getChild(ge(a));s=qs(s,se(),c)}}}else throw ys("WriteRecord should have .snap or .children")}}return s}function Gf(t,e,n,s,i){if(!s&&!i){const r=Ln(t.visibleWrites,e);if(r!=null)return r;{const o=rn(t.visibleWrites,e);if(ca(o))return n;if(n==null&&!la(o,se()))return null;{const a=n||V.EMPTY_NODE;return ps(o,a)}}}else{const r=rn(t.visibleWrites,e);if(!i&&ca(r))return n;if(!i&&n==null&&!la(r,se()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=Kf(t.allWrites,o,e),l=n||V.EMPTY_NODE;return ps(a,l)}}}function EC(t,e,n){let s=V.EMPTY_NODE;const i=Ln(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(we,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=rn(t.visibleWrites,e);return n.forEachChild(we,(o,a)=>{const l=ps(rn(r,new ue(o)),a);s=s.updateImmediateChild(o,l)}),Lu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=rn(t.visibleWrites,e);return Lu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function wC(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ee(e,n);if(la(t.visibleWrites,r))return null;{const o=rn(t.visibleWrites,r);return ca(o)?i.getChild(n):ps(o,i.getChild(n))}}function bC(t,e,n,s){const i=Ee(e,n),r=Ln(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=rn(t.visibleWrites,i);return ps(o,s.getNode().getImmediateChild(n))}else return null}function CC(t,e){return Ln(t.visibleWrites,e)}function IC(t,e,n,s,i,r,o){let a;const l=rn(t.visibleWrites,e),c=Ln(l,se());if(c!=null)a=c;else if(n!=null)a=ps(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function TC(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function vr(t,e,n,s){return Gf(t.writeTree,t.treePath,e,n,s)}function ml(t,e){return EC(t.writeTree,t.treePath,e)}function Fu(t,e,n,s){return wC(t.writeTree,t.treePath,e,n,s)}function yr(t,e){return CC(t.writeTree,Ee(t.treePath,e))}function SC(t,e,n,s,i,r){return IC(t.writeTree,t.treePath,e,n,s,i,r)}function vl(t,e,n){return bC(t.writeTree,t.treePath,e,n)}function Yf(t,e){return Qf(Ee(t.treePath,e),t.writeTree)}function Qf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ui(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ci(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ds(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ui(s,e.snapshotNode,i.oldSnap));else throw ys("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Jf=new kC;class yl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:On(this.viewCache_),r=SC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){return{filter:t}}function NC(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function PC(t,e,n,s,i){const r=new RC;let o,a;if(n.type===ht.OVERWRITE){const c=n;c.source.fromUser?o=ua(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=Er(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ht.MERGE){const c=n;c.source.fromUser?o=OC(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ha(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ht.ACK_USER_WRITE){const c=n;c.revert?o=LC(t,e,c.path,s,i,r):o=MC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ht.LISTEN_COMPLETE)o=DC(t,e,n.path,s,r);else throw ys("Unknown operation type: "+n.type);const l=r.getChanges();return xC(e,o,l),{viewCache:o,changes:l}}function xC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=mr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Vf(mr(e)))}}function Xf(t,e,n,s,i,r){const o=e.eventCache;if(yr(s,n)!=null)return e;{let a,l;if(J(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=On(e),u=c instanceof V?c:V.EMPTY_NODE,h=ml(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=vr(s,On(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Z(n);if(c===".priority"){I(cn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Fu(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ge(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Fu(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=vl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return zs(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Er(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=Z(n);if(!l.isCompleteForPath(n)&&cn(n)>1)return e;const m=ge(n),k=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),_,k,m,Jf,null)}const h=zf(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),d=new yl(i,h,r);return Xf(t,h,n,i,d,a)}function ua(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new yl(i,e,r);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=zs(e,c,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=zs(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ge(n),_=a.getNode().getImmediateChild(h);let m;if(J(d))m=s;else{const w=u.getCompleteChild(h);w!=null?cl(d)===".priority"&&w.getChild(Df(d)).isEmpty()?m=w:m=w.updateChild(d,s):m=V.EMPTY_NODE}if(_.equals(m))l=e;else{const w=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=zs(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Uu(t,e){return t.eventCache.isCompleteForChild(e)}function OC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ee(n,l);Uu(e,Z(u))&&(a=ua(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ee(n,l);Uu(e,Z(u))||(a=ua(t,a,u,c,i,r,o))}),a}function Bu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ha(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=s:c=new _e(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Bu(t,_,d);l=Er(t,l,new ue(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),w=Bu(t,m,d);l=Er(t,l,new ue(h),w,i,r,o,a)}}),l}function MC(t,e,n,s,i,r,o){if(yr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Er(t,e,n,l.getNode().getChild(n),i,r,a,o);if(J(n)){let c=new _e(null);return l.getNode().forEachChild(ss,(u,h)=>{c=c.set(new ue(u),h)}),ha(t,e,n,c,i,r,a,o)}else return e}else{let c=new _e(null);return s.foreach((u,h)=>{const d=Ee(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ha(t,e,n,c,i,r,a,o)}}function DC(t,e,n,s,i){const r=e.serverCache,o=zf(e,r.getNode(),r.isFullyInitialized()||J(n),r.isFiltered());return Xf(t,o,n,s,Jf,i)}function LC(t,e,n,s,i,r){let o;if(yr(s,n)!=null)return e;{const a=new yl(s,e,i),l=e.eventCache.getNode();let c;if(J(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=vr(s,On(e));else{const h=e.serverCache.getNode();I(h instanceof V,"serverChildren would be complete if leaf node"),u=ml(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Z(n);let h=vl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ge(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,ge(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vr(s,On(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||yr(s,se())!=null,zs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new dl(s.getIndex()),r=tC(s);this.processor_=AC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new un(l,o.isFullyInitialized(),i.filtersNodes()),h=new un(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Gr(h,u),this.eventGenerator_=new lC(this.query_)}get query(){return this.query_}}function UC(t){return t.viewCache_.serverCache.getNode()}function BC(t){return mr(t.viewCache_)}function HC(t,e){const n=On(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function Hu(t){return t.eventRegistrations_.length===0}function WC(t,e){t.eventRegistrations_.push(e)}function Wu(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function $u(t,e,n,s){e.type===ht.MERGE&&e.source.queryId!==null&&(I(On(t.viewCache_),"We should always have a full cache before handling merges"),I(mr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=PC(t.processor_,i,e,n,s);return NC(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Zf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function $C(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(we,(r,o)=>{s.push(ds(r,o))}),n.isFullyInitialized()&&s.push(Vf(n.getNode())),Zf(t,s,n.getNode(),e)}function Zf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return cC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr;class ep{constructor(){this.views=new Map}}function VC(t){I(!wr,"__referenceConstructor has already been defined"),wr=t}function jC(){return I(wr,"Reference.ts has not been loaded"),wr}function zC(t){return t.views.size===0}function El(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),$u(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat($u(o,e,n,s));return r}}function tp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=vr(n,i?s:null),l=!1;a?l=!0:s instanceof V?(a=ml(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=Gr(new un(a,l,!1),new un(s,i,!1));return new FC(e,c)}return o}function qC(t,e,n,s,i,r){const o=tp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),WC(o,n),$C(o,n)}function KC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=hn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Wu(c,n,s)),Hu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Wu(l,n,s)),Hu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!hn(t)&&r.push(new(jC())(e._repo,e._path)),{removed:r,events:o}}function np(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function on(t,e){let n=null;for(const s of t.views.values())n=n||HC(s,e);return n}function sp(t,e){if(e._queryParams.loadsAllData())return Qr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ip(t,e){return sp(t,e)!=null}function hn(t){return Qr(t)!=null}function Qr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br;function GC(t){I(!br,"__referenceConstructor has already been defined"),br=t}function YC(){return I(br,"Reference.ts has not been loaded"),br}let QC=1;class Vu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=TC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rp(t,e,n,s,i){return fC(t.pendingWriteTree_,e,n,s,i),i?Ts(t,new xn(pl(),e,n)):[]}function JC(t,e,n,s){pC(t.pendingWriteTree_,e,n,s);const i=_e.fromObject(n);return Ts(t,new fs(pl(),e,i))}function Jt(t,e,n=!1){const s=_C(t.pendingWriteTree_,e);if(gC(t.pendingWriteTree_,e)){let r=new _e(null);return s.snap!=null?r=r.set(se(),!0):Le(s.children,o=>{r=r.set(new ue(o),!0)}),Ts(t,new gr(s.path,r,n))}else return[]}function Si(t,e,n){return Ts(t,new xn(_l(),e,n))}function XC(t,e,n){const s=_e.fromObject(n);return Ts(t,new fs(_l(),e,s))}function ZC(t,e){return Ts(t,new di(_l(),e))}function eI(t,e,n){const s=bl(t,n);if(s){const i=Cl(s),r=i.path,o=i.queryId,a=je(r,e),l=new di(gl(o),a);return Il(t,r,l)}else return[]}function op(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ip(o,e))){const l=KC(o,e,n,s);zC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>hn(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=iI(d);for(let m=0;m<_.length;++m){const w=_[m],k=w.query,A=up(t,w);t.listenProvider_.startListening(Ks(k),fi(t,k),A.hashFn,A.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ks(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Jr(d));t.listenProvider_.stopListening(Ks(d),_)}))}rI(t,c)}return a}function ap(t,e,n,s){const i=bl(t,s);if(i!=null){const r=Cl(i),o=r.path,a=r.queryId,l=je(o,e),c=new xn(gl(a),l,n);return Il(t,o,c)}else return[]}function tI(t,e,n,s){const i=bl(t,s);if(i){const r=Cl(i),o=r.path,a=r.queryId,l=je(o,e),c=_e.fromObject(n),u=new fs(gl(a),l,c);return Il(t,o,u)}else return[]}function nI(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=je(d,i);r=r||on(_,m),o=o||hn(_)});let a=t.syncPointTree_.get(i);a?(o=o||hn(a),r=r||on(a,se())):(a=new ep,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const w=on(m,se());w&&(r=r.updateImmediateChild(_,w))}));const c=ip(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Jr(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=oI();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Yr(t.pendingWriteTree_,i);let h=qC(a,e,n,u,r,l);if(!c&&!o&&!s){const d=sp(a,e);h=h.concat(aI(t,e,d))}return h}function wl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=je(o,e),c=on(a,l);if(c)return c});return Gf(i,e,r,n,!0)}function sI(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=je(c,n);s=s||on(u,h)});let i=t.syncPointTree_.get(n);i?s=s||on(i,se()):(i=new ep,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new un(s,!0,!1):null,a=Yr(t.pendingWriteTree_,e._path),l=tp(i,e,a,r?o.getNode():V.EMPTY_NODE,r);return BC(l)}function Ts(t,e){return lp(e,t.syncPointTree_,null,Yr(t.pendingWriteTree_,se()))}function lp(t,e,n,s){if(J(t.path))return cp(t,e,n,s);{const i=e.get(se());n==null&&i!=null&&(n=on(i,se()));let r=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Yf(s,o);r=r.concat(lp(a,l,c,u))}return i&&(r=r.concat(El(i,t,s,n))),r}}function cp(t,e,n,s){const i=e.get(se());n==null&&i!=null&&(n=on(i,se()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Yf(s,o),u=t.operationForChild(o);u&&(r=r.concat(cp(u,a,l,c)))}),i&&(r=r.concat(El(i,t,s,n))),r}function up(t,e){const n=e.query,s=fi(t,n);return{hashFn:()=>(UC(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?eI(t,n._path,s):ZC(t,n._path);{const r=Zw(i,n);return op(t,n,null,r)}}}}function fi(t,e){const n=Jr(e);return t.queryToTagMap.get(n)}function Jr(t){return t._path.toString()+"$"+t._queryIdentifier}function bl(t,e){return t.tagToQueryMap.get(e)}function Cl(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function Il(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=Yr(t.pendingWriteTree_,e);return El(s,n,i,null)}function iI(t){return t.fold((e,n,s)=>{if(n&&hn(n))return[Qr(n)];{let i=[];return n&&(i=np(n)),Le(s,(r,o)=>{i=i.concat(o)}),i}})}function Ks(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(YC())(t._repo,t._path):t}function rI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Jr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function oI(){return QC++}function aI(t,e,n){const s=e._path,i=fi(t,e),r=up(t,n),o=t.listenProvider_.startListening(Ks(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)I(!hn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!J(c)&&u&&hn(u))return[Qr(u).query];{let d=[];return u&&(d=d.concat(np(u).map(_=>_.query))),Le(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ks(u),fi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Tl(n)}node(){return this.node_}}class Sl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new Sl(this.syncTree_,n)}node(){return wl(this.syncTree_,this.path_)}}const lI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ju=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return cI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uI(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},cI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},uI=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},hp=function(t,e,n,s){return Rl(e,new Sl(n,t),s)},dp=function(t,e,n){return Rl(t,new Tl(e),n)};function Rl(t,e,n){const s=t.getPriority().val(),i=ju(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ju(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,Re(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ne(i))),o.forEachChild(we,(a,l)=>{const c=Rl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Al(t,e){let n=e instanceof ue?e:new ue(e),s=t,i=Z(n);for(;i!==null;){const r=ls(s.node.children,i)||{children:{},childCount:0};s=new kl(i,s,r),n=ge(n),i=Z(n)}return s}function Ss(t){return t.node.value}function fp(t,e){t.node.value=e,da(t)}function pp(t){return t.node.childCount>0}function hI(t){return Ss(t)===void 0&&!pp(t)}function Xr(t,e){Le(t.node.children,(n,s)=>{e(new kl(n,t,s))})}function _p(t,e,n,s){n&&!s&&e(t),Xr(t,i=>{_p(i,e,!0,s)}),n&&s&&e(t)}function dI(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ri(t){return new ue(t.parent===null?t.name:Ri(t.parent)+"/"+t.name)}function da(t){t.parent!==null&&fI(t.parent,t.name,t)}function fI(t,e,n){const s=hI(n),i=Tt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,da(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,da(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=/[\[\].#$\/\u0000-\u001F\u007F]/,_I=/[\[\].#$\u0000-\u001F\u007F]/,So=10*1024*1024,Nl=function(t){return typeof t=="string"&&t.length!==0&&!pI.test(t)},gp=function(t){return typeof t=="string"&&t.length!==0&&!_I.test(t)},gI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gp(t)},mI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!il(t)||t&&typeof t=="object"&&Tt(t,".sv")},mp=function(t,e,n,s){s&&e===void 0||Zr(Wr(t,"value"),e,n)},Zr=function(t,e,n){const s=n instanceof ue?new Ob(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vn(s));if(typeof e=="function")throw new Error(t+"contains a function "+vn(s)+" with contents = "+e.toString());if(il(e))throw new Error(t+"contains "+e.toString()+" "+vn(s));if(typeof e=="string"&&e.length>So/3&&$r(e)>So)throw new Error(t+"contains a string greater than "+So+" utf8 bytes "+vn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Le(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Nl(o)))throw new Error(t+" contains an invalid key ("+o+") "+vn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Mb(s,o),Zr(t,a,s),Db(s)}),i&&r)throw new Error(t+' contains ".value" child '+vn(s)+" in addition to actual children.")}},vI=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=li(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Nl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(xb);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&st(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},yI=function(t,e,n,s){if(s&&e===void 0)return;const i=Wr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Le(e,(o,a)=>{const l=new ue(o);if(Zr(i,a,Ee(n,l)),cl(l)===".priority"&&!mI(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),vI(i,r)},vp=function(t,e,n,s){if(!(s&&n===void 0)&&!gp(n))throw new Error(Wr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},EI=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vp(t,e,n,s)},yp=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},wI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!gI(n))throw new Error(Wr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Lf(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ot(t,e,n){Pl(t,n),CI(t,s=>st(s,e)||st(e,s))}function CI(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(II(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function II(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Rn&&Me("event: "+n.toString()),Is(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="repo_interrupt",SI=25;class RI{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_r(),this.transactionQueueTree_=new kl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kI(t,e,n){if(t.stats_=al(t.repoInfo_),t.forceRestClient_||sb())t.server_=new pr(t.repoInfo_,(s,i,r,o)=>{zu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new xt(t.repoInfo_,e,(s,i,r,o)=>{zu(t,s,i,r,o)},s=>{qu(t,s)},s=>{AI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=lb(t.repoInfo_,()=>new aC(t.stats_,t.server_)),t.infoData_=new nC,t.infoSyncTree_=new Vu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Si(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),xl(t,"connected",!1),t.serverSyncTree_=new Vu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ot(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Ep(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function eo(t){return lI({timestamp:Ep(t)})}function zu(t,e,n,s,i){t.dataUpdateCount++;const r=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=sr(n,c=>Re(c));o=tI(t.serverSyncTree_,r,l,i)}else{const l=Re(n);o=ap(t.serverSyncTree_,r,l,i)}else if(s){const l=sr(n,c=>Re(c));o=XC(t.serverSyncTree_,r,l)}else{const l=Re(n);o=Si(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=_s(t,r)),ot(t.eventQueue_,a,o)}function qu(t,e){xl(t,"connected",e),e===!1&&OI(t)}function AI(t,e){Le(e,(n,s)=>{xl(t,n,s)})}function xl(t,e,n){const s=new ue("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(s,i);const r=Si(t.infoSyncTree_,s,i);ot(t.eventQueue_,s,r)}function Ol(t){return t.nextWriteId_++}function NI(t,e,n){const s=sI(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Re(i).withIndex(e._queryParams.getIndex());nI(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Si(t.serverSyncTree_,e._path,r);else{const a=fi(t.serverSyncTree_,e);o=ap(t.serverSyncTree_,e._path,r,a)}return ot(t.eventQueue_,e._path,o),op(t.serverSyncTree_,e,n,null,!0),r},i=>(ki(t,"get for query "+Ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function PI(t,e,n,s,i){ki(t,"set",{path:e.toString(),value:n,priority:s});const r=eo(t),o=Re(n,s),a=wl(t.serverSyncTree_,e),l=dp(o,a,r),c=Ol(t),u=rp(t.serverSyncTree_,e,l,c,!0);Pl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||qe("set at "+e+" failed: "+d);const w=Jt(t.serverSyncTree_,c,!m);ot(t.eventQueue_,e,w),fa(t,i,d,_)});const h=Dl(t,e);_s(t,h),ot(t.eventQueue_,h,[])}function xI(t,e,n,s){ki(t,"update",{path:e.toString(),value:n});let i=!0;const r=eo(t),o={};if(Le(n,(a,l)=>{i=!1,o[a]=hp(Ee(e,a),Re(l),t.serverSyncTree_,r)}),i)Me("update() called with empty data.  Don't do anything."),fa(t,s,"ok",void 0);else{const a=Ol(t),l=JC(t.serverSyncTree_,e,o,a);Pl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||qe("update at "+e+" failed: "+c);const d=Jt(t.serverSyncTree_,a,!h),_=d.length>0?_s(t,e):e;ot(t.eventQueue_,_,d),fa(t,s,c,u)}),Le(n,c=>{const u=Dl(t,Ee(e,c));_s(t,u)}),ot(t.eventQueue_,e,[])}}function OI(t){ki(t,"onDisconnectEvents");const e=eo(t),n=_r();oa(t.onDisconnect_,se(),(i,r)=>{const o=hp(i,r,t.serverSyncTree_,e);jf(n,i,o)});let s=[];oa(n,se(),(i,r)=>{s=s.concat(Si(t.serverSyncTree_,i,r));const o=Dl(t,i);_s(t,o)}),t.onDisconnect_=_r(),ot(t.eventQueue_,se(),s)}function MI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(TI)}function ki(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function fa(t,e,n,s){e&&Is(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function wp(t,e,n){return wl(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function Ml(t,e=t.transactionQueueTree_){if(e||to(t,e),Ss(e)){const n=Cp(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&DI(t,Ri(e),n)}else pp(e)&&Xr(e,n=>{Ml(t,n)})}function DI(t,e,n){const s=n.map(c=>c.currentWriteId),i=wp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=je(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ki(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Jt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();to(t,Al(t.transactionQueueTree_,e)),Ml(t,t.transactionQueueTree_),ot(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Is(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}_s(t,e)}},o)}function _s(t,e){const n=bp(t,e),s=Ri(n),i=Cp(t,n);return LI(t,i,s),s}function LI(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=je(n,l.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Jt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=SI)u=!0,h="maxretry",i=i.concat(Jt(t.serverSyncTree_,l.currentWriteId,!0));else{const d=wp(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Zr("transaction failed: Data returned ",_,l.path);let m=Re(_);typeof _=="object"&&_!=null&&Tt(_,".priority")||(m=m.updatePriority(d.getPriority()));const k=l.currentWriteId,A=eo(t),P=dp(m,d,A);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=P,l.currentWriteId=Ol(t),o.splice(o.indexOf(k),1),i=i.concat(rp(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(Jt(t.serverSyncTree_,k,!0))}else u=!0,h="nodata",i=i.concat(Jt(t.serverSyncTree_,l.currentWriteId,!0))}ot(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}to(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Is(s[a]);Ml(t,t.transactionQueueTree_)}function bp(t,e){let n,s=t.transactionQueueTree_;for(n=Z(e);n!==null&&Ss(s)===void 0;)s=Al(s,n),e=ge(e),n=Z(e);return s}function Cp(t,e){const n=[];return Ip(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ip(t,e,n){const s=Ss(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Xr(e,i=>{Ip(t,i,n)})}function to(t,e){const n=Ss(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,fp(e,n.length>0?n:void 0)}Xr(e,s=>{to(t,s)})}function Dl(t,e){const n=Ri(bp(t,e)),s=Al(t.transactionQueueTree_,e);return dI(s,i=>{Ro(t,i)}),Ro(t,s),_p(s,i=>{Ro(t,i)}),n}function Ro(t,e){const n=Ss(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fp(e,void 0):n.length=r+1,ot(t.eventQueue_,Ri(e),i);for(let o=0;o<s.length;o++)Is(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function UI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ku=function(t,e){const n=BI(t),s=n.namespace;n.domain==="firebase.com"&&Dt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Dt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Gw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Sf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ue(n.pathString)}},BI=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=FI(t.substring(u,h)));const d=UI(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",HI=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Gu.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Gu.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class $I{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return J(this._path)?null:cl(this._path)}get ref(){return new Ft(this._repo,this._path)}get _queryIdentifier(){const e=Ou(this._queryParams),n=rl(e);return n==="{}"?"default":n}get _queryObject(){return Ou(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof Ll))return!1;const n=this._repo===e._repo,s=Lf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Pb(this._path)}}class Ft extends Ll{constructor(e,n){super(e,n,new fl,!1)}get parent(){const e=Df(this._path);return e===null?null:new Ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class pi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),s=_i(this.ref,e);return new pi(this._node.getChild(n),s,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new pi(i,_i(this.ref,s),we)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jI(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?_i(t._root,e):t._root}function _i(t,e){return t=Ze(t),Z(t._path)===null?EI("child","path",e,!1):vp("child","path",e,!1),new Ft(t._repo,Ee(t._path,e))}function wT(t,e){t=Ze(t),yp("push",t._path),mp("push",e,t._path,!0);const n=Ep(t._repo),s=HI(n),i=_i(t,s),r=_i(t,s);let o;return e!=null?o=zI(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function zI(t,e){t=Ze(t),yp("set",t._path),mp("set",e,t._path,!1);const n=new gi;return PI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bT(t,e){yI("update",e,t._path,!1);const n=new gi;return xI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function qI(t){t=Ze(t);const e=new VI(()=>{}),n=new Fl(e);return NI(t._repo,t,n).then(s=>new pi(s,new Ft(t._repo,t._path),t._queryParams.getIndex()))}class Fl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new WI("value",this,new pi(e.snapshotNode,new Ft(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $I(this,e,n):null}matches(e){return e instanceof Fl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}VC(Ft);GC(Ft);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="FIREBASE_DATABASE_EMULATOR_HOST",pa={};let GI=!1;function YI(t,e,n,s){t.repoInfo_=new Sf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function QI(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Dt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ku(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[KI]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ku(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ns(ns.OWNER):new rb(t.name,t.options,e);wI("Invalid Firebase Database URL",o),J(o.path)||Dt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=XI(a,t,u,new ib(t.name,n));return new ZI(h,t)}function JI(t,e){const n=pa[e];(!n||n[t.key]!==t)&&Dt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),MI(t),delete n[t.key]}function XI(t,e,n,s){let i=pa[e.name];i||(i={},pa[e.name]=i);let r=i[t.toURLString()];return r&&Dt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new RI(t,GI,n,s),i[t.toURLString()]=r,r}class ZI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ft(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Dt("Cannot call "+e+" on a deleted database.")}}function eT(t=kd(),e){const n=Ka(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Tv("database");s&&tT(n,...s)}return n}function tT(t,e,n,s={}){t=Ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Dt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Dt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ns(ns.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Sv(s.mockUserToken,t.app.options.projectId);r=new ns(o)}YI(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){Vw(ws),cs(new kn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return QI(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),sn(gu,mu,t),sn(gu,mu,"esm2017")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nT();const sT={class:"relative items-center block max-w-full p-8 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700"},iT=F("div",{role:"status",class:"absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"},[F("svg",{"aria-hidden":"true",class:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[F("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),F("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),F("span",{class:"sr-only"},"Loading...")],-1),rT=[iT],oT={__name:"Loading",setup(t){return(e,n)=>(Oe(),$e("div",sT,rT))}},aT={class:"m-auto text-white"},lT=Qh('<div class="bg-custom-image bg-cover relative h-72 md:h-96 rounded border-t-0"><div class="absolute inset-0 bg-black bg-opacity-50"></div><div class="absolute inset-0 bg-black bg-opacity-50"></div><div class="absolute flex flex-col items-center justify-center gap-8 w-full h-full text-gray-50"><p class="text-2xl md:text-4xl font-bold">Golden Melody Awards</p><p class="text-lg md:text-2xl">Discover and Explore the Music.</p><p class="text-xl md:text-2xl">The Artists, Awards, and Albums.</p></div></div>',1),cT={class:"dark:bg-slate-900 p-4 ring-1 ring-slate-900/5 shadow-md"},uT=Qh('<div class="text-center"><span class="inline-flex pr-2"><svg class="h-7 w-7 fill-costom-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path></svg></span><span class="align-top from-neutral-800 dark:text-white mt-5 text-xl font-sans tracking-tight">Freely Explore the Music. </span></div>',1),hT={class:"flex flex-wrap pb-2"},dT=["onClick"],fT={class:"flex justify-center"},pT={class:"p-4 flex rounded bg-custom-gold bg-opacity-80 border border-custom-gold space-x-1 hover:bg-opacity-0 hover:border-white hover:border"},_T=F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"})],-1),gT={class:"block text-sm font-medium pr-1"},Yu={__name:"HomeView",setup(t){Ga({apiKey:"AIzaSyCngOWSZwnTjBGqx3BehB5PeqTg7qENDLI",authDomain:"earnest-runner-189507.firebaseapp.com",databaseURL:"https://earnest-runner-189507.firebaseio.com",projectId:"earnest-runner-189507",storageBucket:"earnest-runner-189507.appspot.com",messagingSenderId:"142419818564",appId:"1:142419818564:web:6b1035fd5a5e3d3d5ce411"});const n=Wa(),s=De(0),i=De(1);Or(()=>{i.value=1;function o(l,c){return c-l}const a=jI(eT());qI(a).then(l=>{l.exists()&&(s.value=Object.keys(l.val()).sort(o),i.value=0)})});function r(o){n.push({path:`/Awards/${o}`})}return(o,a)=>(Oe(),$e("main",aT,[lT,F("div",cT,[uT,i.value===1?(Oe(),Gh(oT,{key:0})):jn("",!0),F("div",hT,[(Oe(!0),$e(Ye,null,Uh(s.value,l=>(Oe(),$e("div",{key:l,class:"mt-6 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6",onClick:c=>r(l)},[F("div",fT,[F("button",pT,[_T,F("span",gT,th(l)+" 年",1)])])],8,dT))),128))])])]))}},mT=pv({history:xm("/"),routes:[{path:"/home",name:"home",component:Yu},{path:"/",redirect:{name:"home"}},{path:"/Awards/:year",name:"Awards",component:()=>$n(()=>import("./AwardsView-1d8d1927.js"),["assets/AwardsView-1d8d1927.js","assets/sweetalert2.all-4088fd79.js"])},{path:"/DB",name:"DB",component:()=>$n(()=>import("./DBView-e66ff8d7.js"),[])},{path:"/Admin",name:"Admin",component:()=>$n(()=>import("./AdminView-b8a7dff1.js"),["assets/AdminView-b8a7dff1.js","assets/sweetalert2.all-4088fd79.js"])},{path:"/AdminAwards/:year",name:"AdminAwards",component:()=>$n(()=>import("./AdminAwardsView-244f219e.js"),["assets/AdminAwardsView-244f219e.js","assets/sweetalert2.all-4088fd79.js"])},{path:"/Search",name:"Search",component:()=>$n(()=>import("./SearchView-db3882ef.js"),[])},{path:"/Login",name:"Login",component:()=>$n(()=>import("./LoginView-5e284f09.js"),[])},{path:"/404",name:"404",component:Yu},{path:"/:pathMatch(.*)",redirect:"/404"}]}),Ul=om(Hw);Ul.use(cm());Ul.use(mT);Ul.mount("#app");export{ET as A,QE as B,D_ as C,tm as D,yT as E,Ye as F,pd as R,oT as _,jI as a,qI as b,_i as c,Oe as d,$e as e,F as f,eT as g,Ie as h,Ga as i,ze as j,vg as k,Gh as l,jn as m,Uh as n,Or as o,vT as p,wa as q,De as r,zI as s,th as t,Wa as u,wT as v,xa as w,bT as x,XE as y,Qh as z};
