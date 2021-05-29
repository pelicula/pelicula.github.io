(()=>{"use strict";var e={3147:(e,t,r)=>{r(71),r(5363);var o=r(8880),n=r(2277);const a={config:{}};var i=r(3673);function l(e,t,r,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});s.render=l;const c=s;var u=r(556),d=r(7083),f=r(9582);const p=[{name:"root",path:"/",component:()=>Promise.all([r.e(736),r.e(313)]).then(r.bind(r,3313)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(216)]).then(r.bind(r,6216))}]},{name:"login",path:"/login",component:()=>Promise.all([r.e(736),r.e(313)]).then(r.bind(r,3313)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(763)]).then(r.bind(r,9763))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(232)]).then(r.bind(r,9232))}],h=p,v=(0,d.BC)((function(){const e=f.PO,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("/")});return t.beforeResolve(((e,t,r)=>{console.log("beforeResolve to:",e),r()})),t.beforeEach(((e,t,r)=>{console.log("beforeEach to:",e),r()})),t}));async function b(e){const t="function"===typeof u.default?await(0,u.default)({}):u.default,{storeKey:o}=await Promise.resolve().then(r.bind(r,556)),i="function"===typeof v?await v({store:t}):v;t.$router=i;const l=e(c);return l.use(n.Z,a),{app:l,store:t,storeKey:o,router:i}}var m=r(1413);(0,m.z)("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(736).then(r.t.bind(r,9501,23));const g="/";async function y({app:e,router:t,store:r,storeKey:o},n){let a=!1;const i=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:l,publicPath:g})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}b(o.ri).then((e=>Promise.all([Promise.resolve().then(r.bind(r,6451)),Promise.resolve().then(r.bind(r,1768)),Promise.resolve().then(r.bind(r,4448))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));y(e,r)}))))},1768:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,axios:()=>a.a,api:()=>i});var o=r(7083),n=r(52),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},6451:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,i18n:()=>l});var o=r(7083),n=r(3414);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},l=(0,n.o)({locale:"en-US",messages:i}),s=(0,o.xr)((({app:e})=>{e.use(l)}))},4448:(e,t,r)=>{r.r(t),r.d(t,{trakt:()=>l});var o=r(7988);const n=!1,a=process.env.TRAKT_CLIENT_ID||"",i=process.env.TRAKT_CLIENT_SECRET||"",l=new o.r({client_id:a,client_secret:i,redirect_uri:n?"http://localhost:8080/login":"https://pelicula.github.io/login"})},556:(e,t,r)=>{r.r(t),r.d(t,{storeKey:()=>a,default:()=>i,useStore:()=>l});var o=r(7083),n=r(5250);const a=Symbol("vuex-key"),i=(0,o.h)((function(){const e=(0,n.MT)({modules:{},strict:!1});return e}));function l(){return(0,n.oR)(a)}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));l&&(e.splice(c--,1),t=n())}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&n&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>o[e]));return i["default"]=()=>o,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{216:"ab4e4de5",232:"c7941bdc",313:"fa95d1a9",763:"6cf2b11e"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/vendor.35179040.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="pelicula:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var f=(t,r)=>{l.onerror=l.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,c=0;for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var u=s(r);for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(u)},o=self["webpackChunkpelicula"]=self["webpackChunkpelicula"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(3147)));o=r.O(o)})();