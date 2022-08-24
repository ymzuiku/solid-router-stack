"use strict";var L=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var kt=Object.getOwnPropertyNames;var vt=Object.prototype.hasOwnProperty;var wt=(t,e)=>{for(var n in e)L(t,n,{get:e[n],enumerable:!0})},yt=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of kt(e))!vt.call(t,a)&&a!==n&&L(t,a,{get:()=>e[a],enumerable:!(o=gt(e,a))||o.enumerable});return t};var $t=t=>yt(L({},"__esModule",{value:!0}),t);var At={};wt(At,{createRouters:()=>jt,moveLeftCss:()=>T,moveTopCss:()=>b,scaleCss:()=>N,setCustomNavigationAnimation:()=>_,setNavigationAnimation:()=>Ht});module.exports=$t(At);var st=require("solid-js/web"),O=require("solid-js/web"),nt=require("solid-js/web"),ot=require("solid-js/web"),rt=require("solid-js/web"),at=require("solid-js/web"),j=require("solid-js/web"),y=require("solid-js/web"),p=require("solid-js"),it=require("solid-js/store");var G=[],bt=t=>{G.push(t)},x=[],St=t=>{x.push(t)},v=t=>({url:t,path:t.split("?")[0],params:S(t)||{},time:Date.now(),index:s.stack.length}),q="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=Q();if(t==="popstate")if(e===q){let o=V(),a=v(o),l=s.stack[s.stack.length-1];l.url=a.url,l.params=a.params}else s.stack.pop();let n=s.stack[s.stack.length-1];G.forEach(o=>{o(n?n.path:"",t,s.stack)}),q=e})});var J=t=>{if(s.stack.length==1)return"";s.stack.pop();let n=s.stack[s.stack.length-1],o=n.path;return s.useHash&&(o="/#"+n.path),o=Z(o,{...S(n.url),...t}),n.params=S(o)||{},n.url=o,o},xt=t=>{x.forEach(e=>{t=e(t)}),s.stack.push(v(t)),s.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},Et=t=>{x.forEach(e=>{t=e(t)}),s.stack.push(v(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},K=t=>{x.forEach(e=>{t=e(t)}),s.stack.length>0&&s.stack.pop(),s.stack.push(v(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Tt=t=>{let e=J(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},_t=t=>{let e=J(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},Ut=t=>{s.stack=[v(t)],K(t)};function Ct(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function Q(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function V(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function Z(t,e){if(e){let n={};Object.keys(e).forEach(a=>{let l=e[a];l!==void 0&&l!==""&&(n[a]=l)});let o=new URLSearchParams(n).toString();return o?t+"?"+o:t}return t}function S(t){let[e,n]=t.split("#"),o=new URLSearchParams([e.split("?")[1],n?n.split("?")[1]:""].join("&")),a={},l=!1;for(let[k,d]of o.entries())l=!0,d!==void 0&&d!==""&&(a[k]=d);if(!!l)return a}var s={search:Ct,nowUrl:Q,nowFullUrl:V,push:xt,pushNotHistory:Et,replace:K,goBack:Tt,gobackNotHistory:_t,clearTo:Ut,listen:bt,beforeChange:St,searchUrlToObject:S,parasmUrl:Z,onLastBack:t=>t.url,newStack:v,stack:[],useHash:!1};var E;function R(){if(E!==void 0)return E;let t=navigator.userAgent.toLocaleLowerCase();return E=new RegExp("(iphone|ipod|ipad)").test(t)&&new RegExp("(micromessenger)").test(t),E}var H=require("solid-js/web"),Pt=(0,H.template)("<div>Not found page</div>",2),Lt=(0,H.template)("<div></div>",2),u={navigationDuration:0,notFound:{async:!0,render:()=>Pt.cloneNode(!0)},fallback:Lt.cloneNode(!0)};var b=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now {
  ${e}
}
.solid-router-stack-before {
  ${e}
  will-change: transform, opacity;
  transform: translateY(7vh);
}
.solid-router-stack-leave {
  ${e}
  will-change: transform, opacity;
  opacity: 0;
  transform: translateY(15vh);
  pointer-events: none !important;
}
.solid-router-stack-after {
  ${e}
  will-change: transform, opacity;
  transform: translateY(-5vh);
  pointer-events: none !important;
}
`},T=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now {
  ${e}
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-before {
  ${e}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-leave {
  ${e}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: 0px -10px 20px rgba(0,0,0,0.12);
  pointer-events: none !important;
}
.solid-router-stack-after {
  ${e}
  will-change: transform, opacity;
  transform: translateX(-30vw);
  pointer-events: none !important;
}
`},N=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now {
  ${e}
}
.solid-router-stack-before {
  ${e}
  will-change: transform, opacity;
  opacity: 0;
  transform: scale(0.8);
}
.solid-router-stack-leave {
  ${e}
  will-change: transform, opacity;
  transform: scale(0.8);
  opacity: 0;
  pointer-events: none !important;
}
.solid-router-stack-after {
  ${e}
  will-change: transform, opacity;
  transform: scale(1.05);
  pointer-events: none !important;
}
`};var _=(t,e=260)=>{if(Object.assign(u,{navigationDuration:e}),typeof window<"u"){let n=document.getElementById("solid-router-stack-css");if(n)n.innerHTML=t;else{let o=document.createElement("style");o.id="solid-router-stack-css",o.innerHTML=t,document.head.append(o)}}},Rt={moveTop:b,moveLeft:T,scale:N},Ht=(t,e=150)=>{if(t==="none"){u.navigationDuration=0;let n=document.getElementById("solid-router-stack-css");n&&n.remove()}else t==="auto"?typeof window>"u"?_(b(e),e+10):_(window.innerWidth>window.innerHeight?b(e):T(e+10),260):_(Rt[t](e),e+10)};var tt=(0,st.template)("<div></div>",2),w="solid-router-stack-now",Nt="solid-router-stack-before",Ot="solid-router-stack-leave",et="solid-router-stack-after",jt=t=>{let e={...t},[n,o]=(0,p.createRoot)(()=>(0,it.createStore)({list:s.stack})),a=r=>{o("list",n.list.length-1,{className:r})},l=r=>{n.list.length>1&&o("list",n.list.length-2,{className:r})},k=()=>{let r=s.stack[s.stack.length-1],i=r?{...s.searchUrlToObject(r.url)}:{};o("list",n.list.length-1,"params",i)},d=0,m=!1;s.listen(()=>{let r=s.stack.length;u.navigationDuration>0?r>d?(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&o("list",n.list.length-2,{stackTop:!1}),m?(a(w),l(et)):(a(Nt),requestAnimationFrame(()=>{l(et),a(w),k()}))):d!==r&&r>=1?(o("list",n.list.length-2,{stackTop:!0}),n.list.length>2&&o("list",n.list.length-3,{stackTop:!1}),a(Ot),l(w),m?(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0})):setTimeout(()=>{o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0}),a(w),k()},u.navigationDuration)):(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&o("list",n.list.length-2,{stackTop:!1}),a(w),k()):(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&o("list",n.list.length-2,{stackTop:!1}),a(w),k()),d=r,m&&requestAnimationFrame(()=>{m=!1})});let ct=r=>{R()?s.gobackNotHistory(r):s.goBack(r)},A=r=>{r.async?r.Component=r.render:r.Component=(0,p.lazy)(r.render),r.push=i=>{R()?s.pushNotHistory(s.parasmUrl(r.path,i)):s.push(s.parasmUrl(r.path,i))},r.replace=i=>{s.replace(s.parasmUrl(r.path,i))},r.clearTo=i=>{m=!0,s.clearTo(s.parasmUrl(r.path,i))}};A(u.notFound),Object.keys(e).forEach(r=>{let i=e[r];A(i)});let U={},B=[];Object.keys(e).map(r=>{let i=e[r];i&&(U[i.path]=i,i.async||B.push(i))});function lt(r){r.preloadAll?B.forEach(i=>{i.render()}):r.preload&&r.preload.length&&setTimeout(()=>{r.preload.forEach(i=>{let g=e[i];g&&!g.async&&g.render()})},200)}let pt=({root:r,hash:i,ignoreFull:g})=>{s.useHash=!!i;let C=s.nowUrl(),F=s.searchUrlToObject(s.nowFullUrl());if(m=!0,C!=="/"&&C!==r.path){r.push();let $=U[C]||u.notFound;m=!0,$.push({...F})}else r.push(F);let[ft,ut]=(0,p.createSignal)(typeof window<"u"?window.innerWidth:0),[ht,dt]=(0,p.createSignal)(typeof window<"u"?window.innerHeight:0);return g||typeof window<"u"&&window.addEventListener("resize",()=>{ut(window.innerWidth),dt(window.innerHeight)}),(()=>{let $=tt.cloneNode(!0);return $.style.setProperty("background","inherit"),(0,j.insert)($,(0,y.createComponent)(p.SuspenseList,{revealOrder:"forwards",tail:"collapsed",get children(){return(0,y.createComponent)(p.For,{get each(){return n.list},children:(h,mt)=>{let P=U[h.path]||u.notFound;lt(P);let W=P.Component;return(()=>{let f=tt.cloneNode(!0);return f.style.setProperty("position","fixed"),f.style.setProperty("top","0px"),f.style.setProperty("left","0px"),f.style.setProperty("background","inherit"),(0,j.insert)(f,(()=>{let c=(0,at.memo)(()=>!!P.async,!0);return()=>c()?(0,y.createComponent)(W,(0,O.mergeProps)({get stackTop(){return h.stackTop}},()=>h.params)):(0,y.createComponent)(p.Suspense,{get fallback(){return u.fallback},get children(){return(0,y.createComponent)(W,(0,O.mergeProps)({get stackTop(){return h.stackTop}},()=>h.params))}})})()),(0,rt.effect)(c=>{let I=h.path,D=h.className,M=h.stackTop?"auto":"none",z=mt()*10,X=g?void 0:ft()+"px",Y=g?void 0:ht()+"px";return I!==c._v$&&(0,ot.setAttribute)(f,"data-path",c._v$=I),D!==c._v$2&&(0,nt.className)(f,c._v$2=D),M!==c._v$3&&f.style.setProperty("pointer-events",c._v$3=M),z!==c._v$4&&f.style.setProperty("z-index",c._v$4=z),X!==c._v$5&&f.style.setProperty("width",c._v$5=X),Y!==c._v$6&&f.style.setProperty("height",c._v$6=Y),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),f})()}})}})),$})()};return{...e,goBack:ct,history:{search:s.search,nowUrl:s.nowUrl,nowFullUrl:s.nowFullUrl,searchUrlToObject:s.searchUrlToObject,listen:s.listen,beforeChange:s.beforeChange,getStack:()=>s.stack},Routers:pt}};
