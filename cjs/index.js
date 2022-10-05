"use strict";var q=Object.defineProperty;var wt=Object.getOwnPropertyDescriptor;var yt=Object.getOwnPropertyNames;var St=Object.prototype.hasOwnProperty;var xt=(t,e)=>{for(var r in e)q(t,r,{get:e[r],enumerable:!0})},$t=(t,e,r,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of yt(e))!St.call(t,i)&&i!==r&&q(t,i,{get:()=>e[i],enumerable:!(c=wt(e,i))||c.enumerable});return t};var bt=t=>$t(q({},"__esModule",{value:!0}),t);var Wt={};xt(Wt,{createPropsSignal:()=>Bt,createRouters:()=>Kt,historyProxy:()=>o,moveLeftCss:()=>H,moveTopCss:()=>E,scaleCss:()=>X,setCustomNavigationAnimation:()=>N,setNavigationAnimation:()=>Dt,stackOptions:()=>p});module.exports=bt(Wt);var it=require("solid-js/web"),lt=require("solid-js/web"),pt=require("solid-js/web"),ut=require("solid-js/web"),ft=require("solid-js/web"),ht=require("solid-js/web"),T=require("solid-js/web"),l=require("solid-js");var st=[],Et=t=>{st.push(t)},L=[],Tt=t=>{L.push(t)},y=t=>({url:t,path:t.split("?")[0],params:C(t)||{},time:Date.now(),index:o.stack.length}),et="";["popstate","pushState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=ot();if(t==="popstate")if(e===et){let c=rt(),i=y(c),f=o.stack[o.stack.length-1];f.url=i.url,f.params=i.params}else o.stack.pop();let r=o.stack[o.stack.length-1];st.forEach(c=>{c(r?r.path:"",t,o.stack)}),et=e})});var nt=t=>{if(o.stack.length==1)return"";o.stack.pop();let r=o.stack[o.stack.length-1],c=r.path;return o.useHash&&(c="/#"+r.path),c=at(c,{...C(r.url),...t}),r.params=C(c)||{},r.url=c,c},Pt=async t=>{for(let e of L)t=await Promise.resolve(e(t,U(t)));o.stack.push(y(t)),o.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},_t=async t=>{for(let e of L)t=await Promise.resolve(e(t,U(t)));o.stack.push(y(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Ct=async t=>{for(let e of L)t=await Promise.resolve(e(t,U(t)));o.stack.length>0&&o.stack.pop(),o.stack.push(y(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Lt=t=>{let e=nt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},Ut=t=>{let e=nt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},Ht=t=>{o.stack=[y(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function Rt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function U(t){return t.split("?")[0]}function ot(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function rt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function at(t,e){if(e){let r={};Object.keys(e).forEach(i=>{let f=e[i];f!==void 0&&f!==""&&(r[i]=f)});let c=new URLSearchParams(r).toString();return c?t+"?"+c:t}return t}function C(t){let[e,r]=t.split("#"),c=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),i={},f=!1;for(let[B,S]of c.entries())f=!0,S!==void 0&&S!==""&&(i[B]=S);if(!!f)return i}var o={search:Rt,nowUrl:ot,urlToPath:U,nowFullUrl:rt,push:Pt,pushNotHistory:_t,replace:Ct,goBack:Lt,gobackNotHistory:Ut,clearTo:Ht,listen:Et,beforeChange:Tt,searchUrlToObject:C,parasmUrl:at,onLastBack:t=>t.url,newStack:y,stack:[],useHash:!1};var I=require("solid-js/web"),Nt=(0,I.template)("<div>Not found page</div>",2),At=(0,I.template)("<div></div>",2),p={navigationDuration:0,className:"",notFound:{async:!0,render:()=>Nt.cloneNode(!0)},fallback:At.cloneNode(!0)};var E=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},H=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},X=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var R=require("solid-js");function Bt(t,e,r){let[c,i]=(0,R.createSignal)(t[e]||r);return(0,R.createEffect)(()=>{i(t[e]||r)}),[c,i]}var N=(t,e=260)=>{if(Object.assign(p,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let c=document.createElement("style");c.id="solid-router-stack-css",c.innerHTML=t,document.head.append(c)}}},jt={moveTop:E,moveLeft:H,scale:X},Dt=(t,e=150)=>{if(t==="none"){p.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?N(E(e),e+10):N(window.innerWidth>window.innerHeight?E(e):H(e+10),260):N(jt[t](e),e+10)};var Ot=(0,it.template)("<div></div>",2);var k="solid-router-stack-now",ct="solid-router-stack-before",Ft="solid-router-stack-leave",A="solid-router-stack-after",Kt=t=>{let e={...t},[r,c]=(0,l.createRoot)(()=>(0,l.createSignal)([])),i=s=>{let[n,a]=(0,l.createSignal)(s.url),[$,b]=(0,l.createSignal)(s.path),[P,F]=(0,l.createSignal)(""),[K,W]=(0,l.createSignal)(!0),[z,h]=(0,l.createSignal)(!1),[M,_]=(0,l.createSignal)(s.params);return{url:n,setUrl:a,path:$,setPath:b,css:P,setCss:F,stackTop:K,setStackTop:W,params:M,setParams:_,stackShow:z,setStackShow:h}},f=()=>{let s=r(),n=s[s.length-1];n&&n.setStackTop(!1);let a=o.stack[o.stack.length-1],$=i(a);c([...r(),$])},B=()=>{let s=o.stack[o.stack.length-1],n=r();if(n.length>1){let a=n[n.length-2];a.setStackTop(!0),a.setUrl(s.url),a.setPath(s.path),a.setParams(s.params),c([...n])}setTimeout(()=>{n.pop(),c([...n])},p.navigationDuration)},S=()=>{let s=r();s.pop();let n=o.stack[o.stack.length-1],a=i(n);a.setStackShow(!0),c([...s,a])},mt=()=>{c([]),f()},d=s=>{if(p.navigationDuration==0)return;let n=r(),a=n[n.length-1];a&&a.setCss(s)},x=s=>{if(p.navigationDuration==0)return;let n=r(),a=n[n.length-2];a&&a.setCss(s)},v=s=>{let n=r(),a=n[n.length-1];a&&a.setStackShow(s)},w=s=>{let n=r(),a=n[n.length-2];a&&a.setStackShow(s)},j=0,g=!1;o.listen((s,n)=>{let a=o.stack.length;n==="clearState"?(mt(),g?(v(!0),w(!1),d(k),x(A)):(v(!0),setTimeout(()=>{w(!1)},p.navigationDuration),d(ct),requestAnimationFrame(()=>{x(A),d(k)}))):a>j?(f(),g?(v(!0),w(!1),d(k),x(A)):(v(!0),setTimeout(()=>{w(!1)},p.navigationDuration),d(ct),requestAnimationFrame(()=>{x(A),d(k)}))):j!==a&&a>=1?(v(!0),w(!0),d(Ft),x(k),B(),g?d(k):setTimeout(()=>{d(k)},p.navigationDuration)):(v(!0),w(!0),S(),d(k)),j=a,g&&requestAnimationFrame(()=>{g=!1})});let D=!1,dt=s=>{D?o.gobackNotHistory(s):o.goBack(s)},Y=s=>{if(s.async)s.Component=s.render;else{let n=(0,l.lazy)(s.render);s.Component=a=>(0,T.createComponent)(l.Suspense,{get fallback(){return p.fallback},get children(){return(0,T.createComponent)(n,a)}})}s.push=n=>{D?o.pushNotHistory(o.parasmUrl(s.path,n)):o.push(o.parasmUrl(s.path,n))},s.replace=n=>{o.replace(o.parasmUrl(s.path,n))},s.clearTo=n=>{o.clearTo(o.parasmUrl(s.path,n))}};Y(p.notFound),Object.keys(e).forEach(s=>{let n=e[s];Y(n)});let O={},G=[];Object.keys(e).map(s=>{let n=e[s];n&&(O[n.path]=n,n.async||G.push(n))});function kt(s){s.preloadAll?G.forEach(n=>{n.render()}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(n=>{let a=e[n];a&&!a.async&&a.render()})},200)}return{...e,goBack:dt,Routers:({root:s,hash:n,ignoreFull:a,virtualHistory:$})=>{o.useHash=!!n,D=!!$;let b=o.nowUrl(),P=o.searchUrlToObject(o.nowFullUrl());if(g=!0,b!=="/"&&b!==s.path){s.push();let h=O[b]||p.notFound;g=!0,h.push({...P})}else s.push(P);let[F,K]=(0,l.createSignal)(typeof window<"u"?window.innerWidth:0),[W,z]=(0,l.createSignal)(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{K(window.innerWidth),z(window.innerHeight)}),(0,T.createComponent)(l.For,{get each(){return r()},children:(h,M)=>{let _=O[h.path()]||p.notFound;kt(_);let gt=_.Component;return(()=>{let m=Ot.cloneNode(!0);return m.style.setProperty("position","fixed"),m.style.setProperty("top","0px"),m.style.setProperty("left","0px"),(0,ft.insert)(m,(0,T.createComponent)(gt,(0,ht.mergeProps)({get stackLength(){return r().length},get stackTop(){return h.stackTop()},get stackShow(){return h.stackShow()}},()=>h.params()))),(0,ut.effect)(u=>{let J=h.path(),vt={[h.css()]:!0,[p.className]:!0},Q=h.stackTop()?"auto":"none",V=M()*10,Z=a?void 0:F()+"px",tt=a?void 0:W()+"px";return J!==u._v$&&(0,pt.setAttribute)(m,"data-path",u._v$=J),u._v$2=(0,lt.classList)(m,vt,u._v$2),Q!==u._v$3&&m.style.setProperty("pointer-events",u._v$3=Q),V!==u._v$4&&m.style.setProperty("z-index",u._v$4=V),Z!==u._v$5&&m.style.setProperty("width",u._v$5=Z),tt!==u._v$6&&m.style.setProperty("height",u._v$6=tt),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),m})()}})}}};
