(()=>{"use strict";var e={6618:(e,r,t)=>{t(8964),t(702);var o=t(1957),n=t(213),a=t(499),i=t(9835);function s(e,r,t,o,n,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const u=(0,i.aZ)({name:"App"});var l=t(1639);const c=(0,l.Z)(u,[["render",s]]),p=c;var d=t(3340),f=t(3746);const h=(0,d.h)((()=>{const e=(0,f.WB)();return e}));var v=t(8339);const b=[{path:"/",component:()=>Promise.all([t.e(736),t.e(846)]).then(t.bind(t,8846)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(944)]).then(t.bind(t,1944))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(862)]).then(t.bind(t,1862))}],g=b,m=(0,d.BC)((function(){const e=v.r5,r=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("/quasar-github/")});return r}));async function y(e,r){const t=e(p);t.use(n.Z,r);const o="function"===typeof h?await h({}):h;t.use(o);const i=(0,a.Xl)("function"===typeof m?await m({store:o}):m);return o.use((({store:e})=>{e.router=i})),{app:t,store:o,router:i}}const w={config:{}},j="/quasar-github/",O=/\/\//,P=e=>(j+e).replace(O,"/");async function k({app:e,router:r,store:t},o){let n=!1;const a=e=>{try{return P(r.resolve(e).href)}catch(t){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=a(e);null!==r&&(window.location.href=r,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let l=0;!1===n&&l<o.length;l++)try{await o[l]({app:e,router:r,store:t,ssrContext:null,redirect:i,urlPath:s,publicPath:j})}catch(u){return u&&u.url?void i(u.url):void console.error("[Quasar] boot error:",u)}!0!==n&&(e.use(r),e.mount("#q-app"))}y(o.ri,w).then((e=>Promise.allSettled([Promise.resolve().then(t.bind(t,1569))]).then((r=>{const t=r.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)})).filter((e=>"function"===typeof e));k(e,t)}))))},1569:(e,r,t)=>{t.r(r),t.d(r,{api:()=>i,default:()=>s});var o=t(3340),n=t(9981),a=t.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[u])))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=n();void 0!==l&&(r=l)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{846:"6c404fa7",862:"00857918",944:"38829a5f"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"f0b5f2da"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="quasar-github:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==r+a){s=p;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=o),e[o]=[n];var d=(r,t)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/quasar-github/"})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),s=new Error,u=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};t.l(i,u,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,s,u]=o,l=0;if(i.some((r=>0!==e[r]))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(u)var c=u(t)}for(r&&r(o);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},o=globalThis["webpackChunkquasar_github"]=globalThis["webpackChunkquasar_github"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(6618)));o=t.O(o)})();