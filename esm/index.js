import{template as ct}from"solid-js/web";import{className as lt}from"solid-js/web";import{setAttribute as pt}from"solid-js/web";import{effect as ft}from"solid-js/web";import{insert as ut}from"solid-js/web";import{mergeProps as ht}from"solid-js/web";import{createComponent as W}from"solid-js/web";import{createRoot as mt,createSignal as I,For as gt,lazy as kt}from"solid-js";import{createStore as wt}from"solid-js/store";var j=[],J=t=>{j.push(t)},w=[],K=t=>{w.push(t)};["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{t==="popstate"&&e.stack.pop();let n=e.stack[e.stack.length-1];j.forEach(s=>{s(n?n.path:"",t,e.stack)})})});var m=t=>({url:t,path:t.split("?")[0],params:b(t)||{},time:Date.now(),index:e.stack.length}),Q=t=>{w.forEach(n=>{t=n(t)}),e.stack.push(m(t)),e.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},V=t=>{w.forEach(n=>{t=n(t)}),e.stack.push(m(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},A=t=>{w.forEach(n=>{t=n(t)}),e.stack.length>0&&e.stack.pop(),e.stack.push(m(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},B=t=>{let n=e.stack.length;n>1&&e.stack.pop();let s=e.stack[e.stack.length-1];if(n===1){let i=s.time,c=s.url;s=m(e.onLastBack(s)),c===s.url&&(s.time=i),e.stack[e.stack.length-1]=s}let a=s.path;return e.useHash&&(a="/#"+s.path),a=F(a,{...b(s.url),...t}),s.url,a},Z=t=>{let n=B(t);history.replaceState(null,"",n),window.dispatchEvent(new Event("backState"))},tt=t=>{let n=B(t);history.replaceState(null,"",n),window.dispatchEvent(new Event("replaceState"))},et=t=>{e.stack=[m(t)],A(t)};function st(){let[t,n]=location.href.split("#");return new URLSearchParams([t.split("?")[1],n.split("?")[1]].join("&"))}function ot(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function nt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function F(t,n){if(n){let s={};Object.keys(n).forEach(i=>{let c=n[i];c!==void 0&&c!==""&&(s[i]=c)});let a=new URLSearchParams(s).toString();return a?t+"?"+a:t}return t}function b(t){let[n,s]=t.split("#"),a=new URLSearchParams([n.split("?")[1],s?s.split("?")[1]:""].join("&")),i={},c=!1;for(let[g,f]of a.entries())c=!0,f!==void 0&&f!==""&&(i[g]=f);if(!!c)return i}var e={search:st,nowUrl:ot,nowFullUrl:nt,push:Q,pushNotHistory:V,replace:A,goBack:Z,gobackNotHistory:tt,clearTo:et,listen:J,beforeChange:K,searchUrlToObject:b,parasmUrl:F,onLastBack:t=>t.url,newStack:m,stack:[],useHash:!1};var v;function x(){if(v!==void 0)return v;let t=navigator.userAgent.toLocaleLowerCase();return v=new RegExp("(iphone|ipod|ipad)").test(t)&&new RegExp("(micromessenger)").test(t),v}import{template as at}from"solid-js/web";var rt=at("<div>Not found page</div>",2),u={navigationDuration:0,notFound:{async:!0,render:()=>rt.cloneNode(!0)}};var it=(t,n=200)=>{if(Object.assign(u,{navigationDuration:n}),typeof window<"u"&&!document.getElementById("solid-router-stack-css")){let s=document.createElement("style");s.id="solid-router-stack-css",s.innerHTML=t,document.head.append(s)}};var _t=`
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
`,$t=`
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
`;var dt=ct("<div></div>",2);var k="solid-router-stack-now",vt="solid-router-stack-before",yt="solid-router-stack-leave",y="solid-router-stack-after",zt=t=>{let n={...t},[s,a]=mt(()=>wt({list:e.stack})),i=o=>{a("list",s.list.length-1,{className:o})},c=o=>{s.list.length>1&&a("list",s.list.length-2,{className:o})},g=0,f=!1;e.listen(()=>{let o=e.stack.length,r=e.stack[e.stack.length-1];u.navigationDuration>0?o>g?(a("list",[...e.stack]),a("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&a("list",s.list.length-2,{stackTop:!1}),f?(i(k),c(y)):(i(vt),requestAnimationFrame(()=>{i(k),c(y)}))):g!==o?(a("list",s.list.length-2,{stackTop:!0}),s.list.length>2&&a("list",s.list.length-3,{stackTop:!1}),i(yt),c(k),f?a("list",[...e.stack]):setTimeout(()=>{a("list",[...e.stack])},u.navigationDuration)):(a("list",[...e.stack]),a("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&a("list",s.list.length-2,{stackTop:!1}),i(k),c(y)):(a("list",[...e.stack]),a("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&a("list",s.list.length-2,{stackTop:!1}),i(k),c(y)),g=o,a("list",e.stack.length-1,{params:r?e.searchUrlToObject(r.url):{}}),f&&requestAnimationFrame(()=>{f=!1})});let D=o=>{x()?e.gobackNotHistory(o):e.goBack(o)},T=o=>{o.async?o.Component=o.render:o.Component=kt(o.render),o.push=r=>{x()?e.pushNotHistory(e.parasmUrl(o.path,r)):e.push(e.parasmUrl(o.path,r))},o.replace=r=>{e.replace(e.parasmUrl(o.path,r))},o.clearTo=r=>{e.clearTo(e.parasmUrl(o.path,r))}};T(u.notFound),Object.keys(n).forEach(o=>{let r=n[o];T(r)});let S={},U=[];Object.keys(n).map(o=>{let r=n[o];r&&(S[r.path]=r,r.async||U.push(r))});function z(o){o.preloadAll?U.forEach(r=>{r.render()}):o.preload&&setTimeout(()=>{o.preload().forEach(d=>{d.async||d.render()})},200)}let X=({root:o,hash:r,ignoreFull:d})=>{e.useHash=!!r;let E=e.nowUrl(),_=e.searchUrlToObject(e.nowFullUrl());if(f=!0,E!=="/"&&E!==o.path){o.push();let h=S[E]||u.notFound;f=!0,h.push({..._})}else o.push(_);let[Y,q]=I(typeof window<"u"?window.innerWidth:0),[M,G]=I(typeof window<"u"?window.innerHeight:0);return d||typeof window<"u"&&window.addEventListener("resize",()=>{q(window.innerWidth),G(window.innerHeight)}),W(gt,{get each(){return s.list},children:(h,$)=>{let P=S[h.path]||u.notFound;return z(P),(()=>{let p=dt.cloneNode(!0);return p.style.setProperty("position","fixed"),p.style.setProperty("top","0px"),p.style.setProperty("left","0px"),p.style.setProperty("background","#fff"),ut(p,W(P.Component,ht({get stackTop(){return h.stackTop}},()=>h.params))),ft(l=>{let R=h.path,C=h.className,H=$()<s.list.length-1?"none":"auto",L=$()*10,O=d?void 0:Y()+"px",N=d?void 0:M()+"px";return R!==l._v$&&pt(p,"data-path",l._v$=R),C!==l._v$2&&lt(p,l._v$2=C),H!==l._v$3&&p.style.setProperty("pointer-events",l._v$3=H),L!==l._v$4&&p.style.setProperty("z-index",l._v$4=L),O!==l._v$5&&p.style.setProperty("width",l._v$5=O),N!==l._v$6&&p.style.setProperty("height",l._v$6=N),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),p})()}})};return{...n,goBack:D,search:e.search,nowUrl:e.nowUrl,nowFullUrl:e.nowFullUrl,searchUrlToObject:e.searchUrlToObject,listen:e.listen,beforeChange:e.beforeChange,getStack:()=>e.stack,Routers:X}};export{zt as createRouters,$t as moveLeftCss,_t as moveTopCss,it as useAnimationNavigation};
