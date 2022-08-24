"use strict";var C=Object.defineProperty;var mt=Object.getOwnPropertyDescriptor;var gt=Object.getOwnPropertyNames;var kt=Object.prototype.hasOwnProperty;var vt=(t,e)=>{for(var n in e)C(t,n,{get:e[n],enumerable:!0})},wt=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of gt(e))!kt.call(t,i)&&i!==n&&C(t,i,{get:()=>e[i],enumerable:!(o=mt(e,i))||o.enumerable});return t};var yt=t=>wt(C({},"__esModule",{value:!0}),t);var jt={};vt(jt,{createRouters:()=>Ot,moveLeftCss:()=>x,moveTopCss:()=>y,scaleCss:()=>N,setCustomNavigationAnimation:()=>E,setNavigationAnimation:()=>Rt});module.exports=yt(jt);var et=require("solid-js/web"),O=require("solid-js/web"),st=require("solid-js/web"),nt=require("solid-js/web"),ot=require("solid-js/web"),rt=require("solid-js/web"),j=require("solid-js/web"),b=require("solid-js/web"),f=require("solid-js"),at=require("solid-js/store");var q=[],bt=t=>{q.push(t)},$=[],$t=t=>{$.push(t)},P="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=K();if(console.log("__debug__","inin",e,P),t==="popstate")if(e===P){let o=Q();s.stack[s.stack.length-1]=g(o)}else s.stack.pop();let n=s.stack[s.stack.length-1];q.forEach(o=>{o(n?n.path:"",t,s.stack)}),P=e})});var g=t=>({url:t,path:t.split("?")[0],params:L(t)||{},time:Date.now(),index:s.stack.length}),St=t=>{$.forEach(e=>{t=e(t)}),s.stack.push(g(t)),s.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},xt=t=>{$.forEach(e=>{t=e(t)}),s.stack.push(g(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},G=t=>{$.forEach(e=>{t=e(t)}),s.stack.length>0&&s.stack.pop(),s.stack.push(g(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},J=t=>{if(s.stack.length==1)return"";s.stack.pop();let n=s.stack[s.stack.length-1],o=n.path;return s.useHash&&(o="/#"+n.path),o=V(o,{...L(n.url),...t}),n.url=o,o},Et=t=>{let e=J(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},Tt=t=>{let e=J(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},_t=t=>{s.stack=[g(t)],G(t)};function Ut(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function K(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function Q(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function V(t,e){if(e){let n={};Object.keys(e).forEach(i=>{let u=e[i];u!==void 0&&u!==""&&(n[i]=u)});let o=new URLSearchParams(n).toString();return o?t+"?"+o:t}return t}function L(t){let[e,n]=t.split("#"),o=new URLSearchParams([e.split("?")[1],n?n.split("?")[1]:""].join("&")),i={},u=!1;for(let[v,p]of o.entries())u=!0,p!==void 0&&p!==""&&(i[v]=p);if(!!u)return i}var s={search:Ut,nowUrl:K,nowFullUrl:Q,push:St,pushNotHistory:xt,replace:G,goBack:Et,gobackNotHistory:Tt,clearTo:_t,listen:bt,beforeChange:$t,searchUrlToObject:L,parasmUrl:V,onLastBack:t=>t.url,newStack:g,stack:[],useHash:!1};var S;function R(){if(S!==void 0)return S;let t=navigator.userAgent.toLocaleLowerCase();return S=new RegExp("(iphone|ipod|ipad)").test(t)&&new RegExp("(micromessenger)").test(t),S}var H=require("solid-js/web"),Ct=(0,H.template)("<div>Not found page</div>",2),Pt=(0,H.template)("<div></div>",2),h={navigationDuration:0,notFound:{async:!0,render:()=>Ct.cloneNode(!0)},fallback:Pt.cloneNode(!0)};var y=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},N=t=>{let e=`transition: transform ${t}ms cubic-bezier(.54,.13,.46,1), opacity ${t}ms cubic-bezier(.54,.13,.46,1);`;return`
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
`},x=t=>{let e=`transition: transform ${t}ms cubic-bezier(.54,.13,.46,1), opacity ${t}ms cubic-bezier(.54,.13,.46,1);`;return`
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
`};var E=(t,e=260)=>{if(Object.assign(h,{navigationDuration:e}),typeof window<"u"){let n=document.getElementById("solid-router-stack-css");if(n)n.innerHTML=t;else{let o=document.createElement("style");o.id="solid-router-stack-css",o.innerHTML=t,document.head.append(o)}}},Lt={moveTop:y,moveLeft:x,scale:N},Rt=(t,e=250)=>{if(t==="none"){h.navigationDuration=0;let n=document.getElementById("solid-router-stack-css");n&&n.remove()}else t==="auto"?typeof window>"u"?E(y(e),e+10):E(window.innerWidth>window.innerHeight?y(e):x(e+10),260):E(Lt[t](e),e+10)};var Z=(0,et.template)("<div></div>",2),k="solid-router-stack-now",Ht="solid-router-stack-before",Nt="solid-router-stack-leave",tt="solid-router-stack-after",Ot=t=>{let e={...t},[n,o]=(0,f.createRoot)(()=>(0,at.createStore)({list:s.stack})),i=r=>{o("list",n.list.length-1,{className:r})},u=r=>{n.list.length>1&&o("list",n.list.length-2,{className:r})},v=0,p=!1;s.listen(()=>{let r=s.stack.length,a=s.stack[s.stack.length-1];h.navigationDuration>0?r>v?(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&o("list",n.list.length-2,{stackTop:!1}),p?(i(k),u(tt)):(i(Ht),requestAnimationFrame(()=>{i(k),u(tt)}))):v!==r&&r>=1?(o("list",n.list.length-2,{stackTop:!0}),n.list.length>2&&o("list",n.list.length-3,{stackTop:!1}),i(Nt),u(k),p?(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0})):setTimeout(()=>{o("list",[...s.stack]),i(k),o("list",n.list.length-1,{stackTop:!0})},h.navigationDuration)):(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&o("list",n.list.length-2,{stackTop:!1}),i(k)):(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&o("list",n.list.length-2,{stackTop:!1}),i(k)),v=r,o("list",s.stack.length-1,{params:a?{...s.searchUrlToObject(a.url)}:{}}),p&&requestAnimationFrame(()=>{p=!1})});let it=r=>{R()?s.gobackNotHistory(r):s.goBack(r)},A=r=>{r.async?r.Component=r.render:r.Component=(0,f.lazy)(r.render),r.push=a=>{R()?s.pushNotHistory(s.parasmUrl(r.path,a)):s.push(s.parasmUrl(r.path,a))},r.replace=a=>{s.replace(s.parasmUrl(r.path,a))},r.clearTo=a=>{p=!0,s.clearTo(s.parasmUrl(r.path,a))}};A(h.notFound),Object.keys(e).forEach(r=>{let a=e[r];A(a)});let T={},B=[];Object.keys(e).map(r=>{let a=e[r];a&&(T[a.path]=a,a.async||B.push(a))});function ct(r){r.preloadAll?B.forEach(a=>{a.render()}):r.preload&&r.preload.length&&setTimeout(()=>{r.preload.forEach(a=>{let m=e[a];m&&!m.async&&m.render()})},200)}let lt=({root:r,hash:a,ignoreFull:m})=>{s.useHash=!!a;let _=s.nowUrl(),F=s.searchUrlToObject(s.nowFullUrl());if(p=!0,_!=="/"&&_!==r.path){r.push();let w=T[_]||h.notFound;p=!0,w.push({...F})}else r.push(F);let[pt,ft]=(0,f.createSignal)(typeof window<"u"?window.innerWidth:0),[ut,ht]=(0,f.createSignal)(typeof window<"u"?window.innerHeight:0);return m||typeof window<"u"&&window.addEventListener("resize",()=>{ft(window.innerWidth),ht(window.innerHeight)}),(()=>{let w=Z.cloneNode(!0);return w.style.setProperty("background","inherit"),(0,j.insert)(w,(0,b.createComponent)(f.For,{get each(){return n.list},children:(d,dt)=>{let U=T[d.path]||h.notFound;ct(U);let W=U.Component;return(()=>{let l=Z.cloneNode(!0);return l.style.setProperty("position","fixed"),l.style.setProperty("top","0px"),l.style.setProperty("left","0px"),l.style.setProperty("background","inherit"),(0,j.insert)(l,(()=>{let c=(0,rt.memo)(()=>!!U.async,!0);return()=>c()?(0,b.createComponent)(W,(0,O.mergeProps)({get stackTop(){return d.stackTop}},()=>d.params)):(0,b.createComponent)(f.Suspense,{get fallback(){return h.fallback},get children(){return(0,b.createComponent)(W,(0,O.mergeProps)({get stackTop(){return d.stackTop}},()=>d.params))}})})()),(0,ot.effect)(c=>{let z=d.path,I=d.className,D=d.stackTop?"auto":"none",M=dt()*10,X=m?void 0:pt()+"px",Y=m?void 0:ut()+"px";return z!==c._v$&&(0,nt.setAttribute)(l,"data-path",c._v$=z),I!==c._v$2&&(0,st.className)(l,c._v$2=I),D!==c._v$3&&l.style.setProperty("pointer-events",c._v$3=D),M!==c._v$4&&l.style.setProperty("z-index",c._v$4=M),X!==c._v$5&&l.style.setProperty("width",c._v$5=X),Y!==c._v$6&&l.style.setProperty("height",c._v$6=Y),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),l})()}})),w})()};return{...e,goBack:it,history:{search:s.search,nowUrl:s.nowUrl,nowFullUrl:s.nowFullUrl,searchUrlToObject:s.searchUrlToObject,listen:s.listen,beforeChange:s.beforeChange,getStack:()=>s.stack},Routers:lt}};
