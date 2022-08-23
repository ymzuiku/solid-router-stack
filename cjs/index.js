"use strict";var T=Object.defineProperty;var ct=Object.getOwnPropertyDescriptor;var lt=Object.getOwnPropertyNames;var pt=Object.prototype.hasOwnProperty;var ft=(t,o)=>{for(var s in o)T(t,s,{get:o[s],enumerable:!0})},ut=(t,o,s,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of lt(o))!pt.call(t,i)&&i!==s&&T(t,i,{get:()=>o[i],enumerable:!(r=ct(o,i))||r.enumerable});return t};var ht=t=>ut(T({},"__esModule",{value:!0}),t);var Rt={};ft(Rt,{createRouters:()=>Pt,moveLeftCss:()=>R,moveTopCss:()=>P,useAnimationNavigation:()=>M});module.exports=ht(Rt);var G=require("solid-js/web"),L=require("solid-js/web"),J=require("solid-js/web"),K=require("solid-js/web"),Q=require("solid-js/web"),V=require("solid-js/web"),Z=require("solid-js/web"),w=require("solid-js/web"),f=require("solid-js"),tt=require("solid-js/store");var z=[],dt=t=>{z.push(t)},S=[],mt=t=>{S.push(t)};["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{t==="popstate"&&e.stack.pop();let o=e.stack[e.stack.length-1];z.forEach(s=>{s(o?o.path:"",t,e.stack)})})});var g=t=>({url:t,path:t.split("?")[0],params:$(t)||{},time:Date.now(),index:e.stack.length}),gt=t=>{S.forEach(o=>{t=o(t)}),e.stack.push(g(t)),e.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},kt=t=>{S.forEach(o=>{t=o(t)}),e.stack.push(g(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},X=t=>{S.forEach(o=>{t=o(t)}),e.stack.length>0&&e.stack.pop(),e.stack.push(g(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Y=t=>{let o=e.stack.length;o>1&&e.stack.pop();let s=e.stack[e.stack.length-1];if(o===1){let i=s.time,l=s.url;s=g(e.onLastBack(s)),l===s.url&&(s.time=i),e.stack[e.stack.length-1]=s}let r=s.path;return e.useHash&&(r="/#"+s.path),r=q(r,{...$(s.url),...t}),s.url,r},vt=t=>{let o=Y(t);history.replaceState(null,"",o),window.dispatchEvent(new Event("backState"))},wt=t=>{let o=Y(t);history.replaceState(null,"",o),window.dispatchEvent(new Event("replaceState"))},yt=t=>{e.stack=[g(t)],X(t)};function St(){let[t,o]=location.href.split("#");return new URLSearchParams([t.split("?")[1],o.split("?")[1]].join("&"))}function bt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function xt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function q(t,o){if(o){let s={};Object.keys(o).forEach(i=>{let l=o[i];l!==void 0&&l!==""&&(s[i]=l)});let r=new URLSearchParams(s).toString();return r?t+"?"+r:t}return t}function $(t){let[o,s]=t.split("#"),r=new URLSearchParams([o.split("?")[1],s?s.split("?")[1]:""].join("&")),i={},l=!1;for(let[k,u]of r.entries())l=!0,u!==void 0&&u!==""&&(i[k]=u);if(!!l)return i}var e={search:St,nowUrl:bt,nowFullUrl:xt,push:gt,pushNotHistory:kt,replace:X,goBack:vt,gobackNotHistory:wt,clearTo:yt,listen:dt,beforeChange:mt,searchUrlToObject:$,parasmUrl:q,onLastBack:t=>t.url,newStack:g,stack:[],useHash:!1};var b;function U(){if(b!==void 0)return b;let t=navigator.userAgent.toLocaleLowerCase();return b=new RegExp("(iphone|ipod|ipad)").test(t)&&new RegExp("(micromessenger)").test(t),b}var C=require("solid-js/web"),Et=(0,C.template)("<div>Not found page</div>",2),_t=(0,C.template)("<div></div>",2),d={navigationDuration:0,notFound:{async:!0,render:()=>Et.cloneNode(!0)},fallback:_t.cloneNode(!0)};var P=`
.solid-router-stack-now {
  transition: transform 200ms ease-out, opacity 200ms ease-out;
}
.solid-router-stack-before {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 200ms ease-out;
  opacity: 0.7;
  transform: translateY(10vh);
}
.solid-router-stack-leave {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 200ms ease-out;
  opacity: 0;
  transform: translateY(15vh);
  pointer-events: none !important;
}
.solid-router-stack-after {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 200ms ease-out;
  transform: translateY(-5vh);
  pointer-events: none !important;
}
`,R=`
.solid-router-stack-now {
  transition: transform 200ms ease-out;
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-before {
  will-change: transform, opacity;
  transition: transform 200ms ease-out;
  transform: translateX(100vw);
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-leave {
  will-change: transform, opacity;
  transition: transform 200ms ease-out;
  transform: translateX(100vw);
  box-shadow: 0px -10px 20px rgba(0,0,0,0.12);
  pointer-events: none !important;
}
.solid-router-stack-after {
  will-change: transform, opacity;
  transition: transform 200ms ease-out;
  transform: translateX(-30vw);
  pointer-events: none !important;
}
`;var Tt=(t,o=250)=>{if(Object.assign(d,{navigationDuration:o}),typeof window<"u"&&!document.getElementById("solid-router-stack-css")){let s=document.createElement("style");s.id="solid-router-stack-css",s.innerHTML=t,document.head.append(s)}},M=t=>{Tt(t=="moveTop"?P:R)};var $t=(0,G.template)("<div></div>",2);var v="solid-router-stack-now",Ut="solid-router-stack-before",Ct="solid-router-stack-leave",x="solid-router-stack-after",Pt=t=>{let o={...t},[s,r]=(0,f.createRoot)(()=>(0,tt.createStore)({list:e.stack})),i=n=>{r("list",s.list.length-1,{className:n})},l=n=>{s.list.length>1&&r("list",s.list.length-2,{className:n})},k=0,u=!1;e.listen(()=>{let n=e.stack.length,a=e.stack[e.stack.length-1];d.navigationDuration>0?n>k?(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),u?(i(v),l(x)):(i(Ut),requestAnimationFrame(()=>{i(v),l(x)}))):k!==n?(r("list",s.list.length-2,{stackTop:!0}),s.list.length>2&&r("list",s.list.length-3,{stackTop:!1}),i(Ct),l(v),u?r("list",[...e.stack]):setTimeout(()=>{r("list",[...e.stack])},d.navigationDuration)):(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),i(v),l(x)):(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),i(v),l(x)),k=n,r("list",e.stack.length-1,{params:a?e.searchUrlToObject(a.url):{}}),u&&requestAnimationFrame(()=>{u=!1})});let et=n=>{U()?e.gobackNotHistory(n):e.goBack(n)},N=n=>{n.async?n.Component=n.render:n.Component=(0,f.lazy)(n.render),n.push=a=>{U()?e.pushNotHistory(e.parasmUrl(n.path,a)):e.push(e.parasmUrl(n.path,a))},n.replace=a=>{e.replace(e.parasmUrl(n.path,a))},n.clearTo=a=>{e.clearTo(e.parasmUrl(n.path,a))}};N(d.notFound),Object.keys(o).forEach(n=>{let a=o[n];N(a)});let E={},H=[];Object.keys(o).map(n=>{let a=o[n];a&&(E[a.path]=a,a.async||H.push(a))});function st(n){n.preloadAll?H.forEach(a=>{a.render()}):n.preload&&setTimeout(()=>{n.preload().forEach(m=>{m.async||m.render()})},200)}let ot=({root:n,hash:a,ignoreFull:m})=>{e.useHash=!!a;let _=e.nowUrl(),O=e.searchUrlToObject(e.nowFullUrl());if(u=!0,_!=="/"&&_!==n.path){n.push();let h=E[_]||d.notFound;u=!0,h.push({...O})}else n.push(O);let[nt,rt]=(0,f.createSignal)(typeof window<"u"?window.innerWidth:0),[at,it]=(0,f.createSignal)(typeof window<"u"?window.innerHeight:0);return m||typeof window<"u"&&window.addEventListener("resize",()=>{rt(window.innerWidth),it(window.innerHeight)}),(0,w.createComponent)(f.For,{get each(){return s.list},children:(h,A)=>{let y=E[h.path]||d.notFound;return st(y),console.log("__debug__",s.list),(()=>{let p=$t.cloneNode(!0);return p.style.setProperty("position","fixed"),p.style.setProperty("top","0px"),p.style.setProperty("left","0px"),p.style.setProperty("background","#fff"),(0,V.insert)(p,(()=>{let c=(0,Z.memo)(()=>!!y.async,!0);return()=>c()?(0,w.createComponent)(y.Component,(0,L.mergeProps)({get stackTop(){return h.stackTop}},()=>h.params)):(0,w.createComponent)(f.Suspense,{get fallback(){return d.fallback},get children(){return(0,w.createComponent)(y.Component,(0,L.mergeProps)({get stackTop(){return h.stackTop}},()=>h.params))}})})()),(0,Q.effect)(c=>{let j=h.path,B=h.className,F=A()<s.list.length-1?"none":"auto",W=A()*10,I=m?void 0:nt()+"px",D=m?void 0:at()+"px";return j!==c._v$&&(0,K.setAttribute)(p,"data-path",c._v$=j),B!==c._v$2&&(0,J.className)(p,c._v$2=B),F!==c._v$3&&p.style.setProperty("pointer-events",c._v$3=F),W!==c._v$4&&p.style.setProperty("z-index",c._v$4=W),I!==c._v$5&&p.style.setProperty("width",c._v$5=I),D!==c._v$6&&p.style.setProperty("height",c._v$6=D),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),p})()}})};return{...o,goBack:et,search:e.search,nowUrl:e.nowUrl,nowFullUrl:e.nowFullUrl,searchUrlToObject:e.searchUrlToObject,listen:e.listen,beforeChange:e.beforeChange,getStack:()=>e.stack,Routers:ot}};
