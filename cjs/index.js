"use strict";var $=Object.defineProperty;var ft=Object.getOwnPropertyDescriptor;var ut=Object.getOwnPropertyNames;var ht=Object.prototype.hasOwnProperty;var dt=(t,o)=>{for(var s in o)$(t,s,{get:o[s],enumerable:!0})},mt=(t,o,s,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of ut(o))!ht.call(t,i)&&i!==s&&$(t,i,{get:()=>o[i],enumerable:!(r=ft(o,i))||r.enumerable});return t};var gt=t=>mt($({},"__esModule",{value:!0}),t);var Nt={};dt(Nt,{createRouters:()=>Lt,moveLeftCss:()=>L,moveTopCss:()=>R,useAnimationNavigation:()=>J});module.exports=gt(Nt);var Q=require("solid-js/web"),N=require("solid-js/web"),V=require("solid-js/web"),Z=require("solid-js/web"),tt=require("solid-js/web"),et=require("solid-js/web"),H=require("solid-js/web"),w=require("solid-js/web"),f=require("solid-js"),st=require("solid-js/store");var Y=[],kt=t=>{Y.push(t)},S=[],vt=t=>{S.push(t)};["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{t==="popstate"&&e.stack.pop();let o=e.stack[e.stack.length-1];Y.forEach(s=>{s(o?o.path:"",t,e.stack)})})});var g=t=>({url:t,path:t.split("?")[0],params:U(t)||{},time:Date.now(),index:e.stack.length}),wt=t=>{S.forEach(o=>{t=o(t)}),e.stack.push(g(t)),e.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},yt=t=>{S.forEach(o=>{t=o(t)}),e.stack.push(g(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},q=t=>{S.forEach(o=>{t=o(t)}),e.stack.length>0&&e.stack.pop(),e.stack.push(g(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},M=t=>{let o=e.stack.length;o>1&&e.stack.pop();let s=e.stack[e.stack.length-1];if(o===1){let i=s.time,l=s.url;s=g(e.onLastBack(s)),l===s.url&&(s.time=i),e.stack[e.stack.length-1]=s}let r=s.path;return e.useHash&&(r="/#"+s.path),r=G(r,{...U(s.url),...t}),s.url,r},St=t=>{let o=M(t);history.replaceState(null,"",o),window.dispatchEvent(new Event("backState"))},bt=t=>{let o=M(t);history.replaceState(null,"",o),window.dispatchEvent(new Event("replaceState"))},xt=t=>{e.stack=[g(t)],q(t)};function Et(){let[t,o]=location.href.split("#");return new URLSearchParams([t.split("?")[1],o.split("?")[1]].join("&"))}function Tt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function _t(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function G(t,o){if(o){let s={};Object.keys(o).forEach(i=>{let l=o[i];l!==void 0&&l!==""&&(s[i]=l)});let r=new URLSearchParams(s).toString();return r?t+"?"+r:t}return t}function U(t){let[o,s]=t.split("#"),r=new URLSearchParams([o.split("?")[1],s?s.split("?")[1]:""].join("&")),i={},l=!1;for(let[k,u]of r.entries())l=!0,u!==void 0&&u!==""&&(i[k]=u);if(!!l)return i}var e={search:Et,nowUrl:Tt,nowFullUrl:_t,push:wt,pushNotHistory:yt,replace:q,goBack:St,gobackNotHistory:bt,clearTo:xt,listen:kt,beforeChange:vt,searchUrlToObject:U,parasmUrl:G,onLastBack:t=>t.url,newStack:g,stack:[],useHash:!1};var b;function C(){if(b!==void 0)return b;let t=navigator.userAgent.toLocaleLowerCase();return b=new RegExp("(iphone|ipod|ipad)").test(t)&&new RegExp("(micromessenger)").test(t),b}var P=require("solid-js/web"),$t=(0,P.template)("<div>Not found page</div>",2),Ut=(0,P.template)("<div></div>",2),h={navigationDuration:0,notFound:{async:!0,render:()=>$t.cloneNode(!0)},fallback:Ut.cloneNode(!0)};var R=`
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
`,L=`
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
`;var Ct=(t,o=220)=>{if(Object.assign(h,{navigationDuration:o}),typeof window<"u"&&!document.getElementById("solid-router-stack-css")){let s=document.createElement("style");s.id="solid-router-stack-css",s.innerHTML=t,document.head.append(s)}},J=t=>{Ct(t=="moveTop"?R:L)};var K=(0,Q.template)("<div></div>",2);var v="solid-router-stack-now",Pt="solid-router-stack-before",Rt="solid-router-stack-leave",x="solid-router-stack-after",Lt=t=>{let o={...t},[s,r]=(0,f.createRoot)(()=>(0,st.createStore)({list:e.stack})),i=n=>{r("list",s.list.length-1,{className:n})},l=n=>{s.list.length>1&&r("list",s.list.length-2,{className:n})},k=0,u=!1;e.listen(()=>{let n=e.stack.length,a=e.stack[e.stack.length-1];h.navigationDuration>0?n>k?(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),u?(i(v),l(x)):(i(Pt),requestAnimationFrame(()=>{i(v),l(x)}))):k!==n?(r("list",s.list.length-2,{stackTop:!0}),s.list.length>2&&r("list",s.list.length-3,{stackTop:!1}),i(Rt),l(v),u?r("list",[...e.stack]):setTimeout(()=>{r("list",[...e.stack])},h.navigationDuration)):(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),i(v),l(x)):(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),i(v),l(x)),k=n,r("list",e.stack.length-1,{params:a?e.searchUrlToObject(a.url):{}}),u&&requestAnimationFrame(()=>{u=!1})});let ot=n=>{C()?e.gobackNotHistory(n):e.goBack(n)},O=n=>{n.async?n.Component=n.render:n.Component=(0,f.lazy)(n.render),n.push=a=>{C()?e.pushNotHistory(e.parasmUrl(n.path,a)):e.push(e.parasmUrl(n.path,a))},n.replace=a=>{e.replace(e.parasmUrl(n.path,a))},n.clearTo=a=>{e.clearTo(e.parasmUrl(n.path,a))}};O(h.notFound),Object.keys(o).forEach(n=>{let a=o[n];O(a)});let E={},A=[];Object.keys(o).map(n=>{let a=o[n];a&&(E[a.path]=a,a.async||A.push(a))});function nt(n){n.preloadAll?A.forEach(a=>{a.render()}):n.preload&&setTimeout(()=>{n.preload().forEach(m=>{m.async||m.render()})},200)}let rt=({root:n,hash:a,ignoreFull:m})=>{e.useHash=!!a;let T=e.nowUrl(),j=e.searchUrlToObject(e.nowFullUrl());if(u=!0,T!=="/"&&T!==n.path){n.push();let y=E[T]||h.notFound;u=!0,y.push({...j})}else n.push(j);let[at,it]=(0,f.createSignal)(typeof window<"u"?window.innerWidth:0),[ct,lt]=(0,f.createSignal)(typeof window<"u"?window.innerHeight:0);return m||typeof window<"u"&&window.addEventListener("resize",()=>{it(window.innerWidth),lt(window.innerHeight)}),(()=>{let y=K.cloneNode(!0);return(0,H.insert)(y,(0,w.createComponent)(f.For,{get each(){return s.list},children:(d,pt)=>{let _=E[d.path]||h.notFound;nt(_);let B=_.Component;return(()=>{let p=K.cloneNode(!0);return p.style.setProperty("position","fixed"),p.style.setProperty("top","0px"),p.style.setProperty("left","0px"),p.style.setProperty("background","#fff"),(0,H.insert)(p,(()=>{let c=(0,et.memo)(()=>!!_.async,!0);return()=>c()?(0,w.createComponent)(B,(0,N.mergeProps)({get stackTop(){return d.stackTop}},()=>d.params)):(0,w.createComponent)(f.Suspense,{get fallback(){return h.fallback},get children(){return(0,w.createComponent)(B,(0,N.mergeProps)({get stackTop(){return d.stackTop}},()=>d.params))}})})()),(0,tt.effect)(c=>{let F=d.path,W=d.className,I=d.stackTop?"auto":"none",D=pt()*10,z=m?void 0:at()+"px",X=m?void 0:ct()+"px";return F!==c._v$&&(0,Z.setAttribute)(p,"data-path",c._v$=F),W!==c._v$2&&(0,V.className)(p,c._v$2=W),I!==c._v$3&&p.style.setProperty("pointer-events",c._v$3=I),D!==c._v$4&&p.style.setProperty("z-index",c._v$4=D),z!==c._v$5&&p.style.setProperty("width",c._v$5=z),X!==c._v$6&&p.style.setProperty("height",c._v$6=X),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),p})()}})),y})()};return{...o,goBack:ot,search:e.search,nowUrl:e.nowUrl,nowFullUrl:e.nowFullUrl,searchUrlToObject:e.searchUrlToObject,listen:e.listen,beforeChange:e.beforeChange,getStack:()=>e.stack,Routers:rt}};
