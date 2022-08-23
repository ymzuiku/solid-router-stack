"use strict";var x=Object.defineProperty;var at=Object.getOwnPropertyDescriptor;var rt=Object.getOwnPropertyNames;var it=Object.prototype.hasOwnProperty;var ct=(t,o)=>{for(var s in o)x(t,s,{get:o[s],enumerable:!0})},lt=(t,o,s,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of rt(o))!it.call(t,i)&&i!==s&&x(t,i,{get:()=>o[i],enumerable:!(a=at(o,i))||a.enumerable});return t};var pt=t=>lt(x({},"__esModule",{value:!0}),t);var $t={};ct($t,{createRouters:()=>_t,moveLeftCss:()=>bt,moveTopCss:()=>Et,useAnimationNavigation:()=>X});module.exports=pt($t);var Y=require("solid-js/web"),q=require("solid-js/web"),M=require("solid-js/web"),G=require("solid-js/web"),J=require("solid-js/web"),K=require("solid-js/web"),_=require("solid-js/web"),u=require("solid-js"),Q=require("solid-js/store");var F=[],ft=t=>{F.push(t)},v=[],ut=t=>{v.push(t)};["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{t==="popstate"&&e.stack.pop();let o=e.stack[e.stack.length-1];F.forEach(s=>{s(o?o.path:"",t,e.stack)})})});var g=t=>({url:t,path:t.split("?")[0],params:T(t)||{},time:Date.now(),index:e.stack.length}),ht=t=>{v.forEach(o=>{t=o(t)}),e.stack.push(g(t)),e.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},dt=t=>{v.forEach(o=>{t=o(t)}),e.stack.push(g(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},W=t=>{v.forEach(o=>{t=o(t)}),e.stack.length>0&&e.stack.pop(),e.stack.push(g(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},I=t=>{let o=e.stack.length;o>1&&e.stack.pop();let s=e.stack[e.stack.length-1];if(o===1){let i=s.time,c=s.url;s=g(e.onLastBack(s)),c===s.url&&(s.time=i),e.stack[e.stack.length-1]=s}let a=s.path;return e.useHash&&(a="/#"+s.path),a=D(a,{...T(s.url),...t}),s.url,a},mt=t=>{let o=I(t);history.replaceState(null,"",o),window.dispatchEvent(new Event("backState"))},gt=t=>{let o=I(t);history.replaceState(null,"",o),window.dispatchEvent(new Event("replaceState"))},kt=t=>{e.stack=[g(t)],W(t)};function wt(){let[t,o]=location.href.split("#");return new URLSearchParams([t.split("?")[1],o.split("?")[1]].join("&"))}function vt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function yt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function D(t,o){if(o){let s={};Object.keys(o).forEach(i=>{let c=o[i];c!==void 0&&c!==""&&(s[i]=c)});let a=new URLSearchParams(s).toString();return a?t+"?"+a:t}return t}function T(t){let[o,s]=t.split("#"),a=new URLSearchParams([o.split("?")[1],s?s.split("?")[1]:""].join("&")),i={},c=!1;for(let[k,f]of a.entries())c=!0,f!==void 0&&f!==""&&(i[k]=f);if(!!c)return i}var e={search:wt,nowUrl:vt,nowFullUrl:yt,push:ht,pushNotHistory:dt,replace:W,goBack:mt,gobackNotHistory:gt,clearTo:kt,listen:ft,beforeChange:ut,searchUrlToObject:T,parasmUrl:D,onLastBack:t=>t.url,newStack:g,stack:[],useHash:!1};var y;function U(){if(y!==void 0)return y;let t=navigator.userAgent.toLocaleLowerCase();return y=new RegExp("(iphone|ipod|ipad)").test(t)&&new RegExp("(micromessenger)").test(t),y}var z=require("solid-js/web"),St=(0,z.template)("<div>Not found page</div>",2),h={navigationDuration:0,notFound:{async:!0,render:()=>St.cloneNode(!0)}};var X=(t,o=200)=>{if(Object.assign(h,{navigationDuration:o}),typeof window<"u"&&!document.getElementById("solid-router-stack-css")){let s=document.createElement("style");s.id="solid-router-stack-css",s.innerHTML=t,document.head.append(s)}};var Et=`
.solid-router-stack-now {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
}
.solid-router-stack-before {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  opacity: 0.7;
  transform: translateY(10vh);
}
.solid-router-stack-leave {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  opacity: 0;
  transform: translateY(10vh);
}
.solid-router-stack-after {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  transform: translateY(-5vh);
}
`,bt=`
.solid-router-stack-now {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
}
.solid-router-stack-before {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  transform: translateX(100vw);
}
.solid-router-stack-leave {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  transform: translateX(100vw);
}
.solid-router-stack-after {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 300ms ease-out;
  transform: translateX(-30vw);
}
`;var xt=(0,Y.template)("<div></div>",2);var w="solid-router-stack-now",Tt="solid-router-stack-before",Ut="solid-router-stack-leave",S="solid-router-stack-after",_t=t=>{let o={...t},[s,a]=(0,u.createRoot)(()=>(0,Q.createStore)({list:e.stack})),i=n=>{a("list",s.list.length-1,{className:n})},c=n=>{s.list.length>1&&a("list",s.list.length-2,{className:n})},k=0,f=!1;e.listen(()=>{let n=e.stack.length,r=e.stack[e.stack.length-1];h.navigationDuration>0?n>k?(a("list",[...e.stack]),a("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&a("list",s.list.length-2,{stackTop:!1}),f?(i(w),c(S)):(i(Tt),requestAnimationFrame(()=>{i(w),c(S)}))):k!==n?(a("list",s.list.length-2,{stackTop:!0}),s.list.length>2&&a("list",s.list.length-3,{stackTop:!1}),i(Ut),c(w),f?a("list",[...e.stack]):setTimeout(()=>{a("list",[...e.stack])},h.navigationDuration)):(a("list",[...e.stack]),a("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&a("list",s.list.length-2,{stackTop:!1}),i(w),c(S)):(a("list",[...e.stack]),a("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&a("list",s.list.length-2,{stackTop:!1}),i(w),c(S)),k=n,a("list",e.stack.length-1,{params:r?e.searchUrlToObject(r.url):{}}),f&&requestAnimationFrame(()=>{f=!1})});let V=n=>{U()?e.gobackNotHistory(n):e.goBack(n)},$=n=>{n.async?n.Component=n.render:n.Component=(0,u.lazy)(n.render),n.push=r=>{U()?e.pushNotHistory(e.parasmUrl(n.path,r)):e.push(e.parasmUrl(n.path,r))},n.replace=r=>{e.replace(e.parasmUrl(n.path,r))},n.clearTo=r=>{e.clearTo(e.parasmUrl(n.path,r))}};$(h.notFound),Object.keys(o).forEach(n=>{let r=o[n];$(r)});let E={},P=[];Object.keys(o).map(n=>{let r=o[n];r&&(E[r.path]=r,r.async||P.push(r))});function Z(n){n.preloadAll?P.forEach(r=>{r.render()}):n.preload&&setTimeout(()=>{n.preload().forEach(m=>{m.async||m.render()})},200)}let tt=({root:n,hash:r,ignoreFull:m})=>{e.useHash=!!r;let b=e.nowUrl(),R=e.searchUrlToObject(e.nowFullUrl());if(f=!0,b!=="/"&&b!==n.path){n.push();let d=E[b]||h.notFound;f=!0,d.push({...R})}else n.push(R);let[et,st]=(0,u.createSignal)(typeof window<"u"?window.innerWidth:0),[ot,nt]=(0,u.createSignal)(typeof window<"u"?window.innerHeight:0);return m||typeof window<"u"&&window.addEventListener("resize",()=>{st(window.innerWidth),nt(window.innerHeight)}),(0,_.createComponent)(u.For,{get each(){return s.list},children:(d,C)=>{let H=E[d.path]||h.notFound;return Z(H),(()=>{let p=xt.cloneNode(!0);return p.style.setProperty("position","fixed"),p.style.setProperty("top","0px"),p.style.setProperty("left","0px"),p.style.setProperty("background","#fff"),(0,J.insert)(p,(0,_.createComponent)(H.Component,(0,K.mergeProps)({get stackTop(){return d.stackTop}},()=>d.params))),(0,G.effect)(l=>{let L=d.path,O=d.className,N=C()<s.list.length-1?"none":"auto",j=C()*10,A=m?void 0:et()+"px",B=m?void 0:ot()+"px";return L!==l._v$&&(0,M.setAttribute)(p,"data-path",l._v$=L),O!==l._v$2&&(0,q.className)(p,l._v$2=O),N!==l._v$3&&p.style.setProperty("pointer-events",l._v$3=N),j!==l._v$4&&p.style.setProperty("z-index",l._v$4=j),A!==l._v$5&&p.style.setProperty("width",l._v$5=A),B!==l._v$6&&p.style.setProperty("height",l._v$6=B),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),p})()}})};return{...o,goBack:V,search:e.search,nowUrl:e.nowUrl,nowFullUrl:e.nowFullUrl,searchUrlToObject:e.searchUrlToObject,listen:e.listen,beforeChange:e.beforeChange,getStack:()=>e.stack,Routers:tt}};
