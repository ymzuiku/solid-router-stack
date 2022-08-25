"use strict";var F=Object.defineProperty;var ht=Object.getOwnPropertyDescriptor;var vt=Object.getOwnPropertyNames;var gt=Object.prototype.hasOwnProperty;var kt=(t,e)=>{for(var r in e)F(t,r,{get:e[r],enumerable:!0})},wt=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of vt(e))!gt.call(t,c)&&c!==r&&F(t,c,{get:()=>e[c],enumerable:!(a=ht(e,c))||a.enumerable});return t};var yt=t=>wt(F({},"__esModule",{value:!0}),t);var Ot={};kt(Ot,{createPropsSignal:()=>Ht,createRouters:()=>jt,historyProxy:()=>o,moveLeftCss:()=>P,moveTopCss:()=>S,scaleCss:()=>W,setCustomNavigationAnimation:()=>T,setNavigationAnimation:()=>Lt});module.exports=yt(Ot);var it=require("solid-js/web"),M=require("solid-js/web"),ct=require("solid-js/web"),lt=require("solid-js/web"),pt=require("solid-js/web"),ft=require("solid-js/web"),ut=require("solid-js/web"),$=require("solid-js/web"),l=require("solid-js");var tt=[],St=t=>{tt.push(t)},E=[],$t=t=>{E.push(t)},g=t=>({url:t,path:t.split("?")[0],params:b(t)||{},time:Date.now(),index:o.stack.length}),Z="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=ot();if(t==="popstate")if(e===Z){let a=nt(),c=g(a),d=o.stack[o.stack.length-1];d.url=c.url,d.params=c.params}else o.stack.pop();let r=o.stack[o.stack.length-1];tt.forEach(a=>{a(r?r.path:"",t,o.stack)}),Z=e})});var et=t=>{if(o.stack.length==1)return"";o.stack.pop();let r=o.stack[o.stack.length-1],a=r.path;return o.useHash&&(a="/#"+r.path),a=rt(a,{...b(r.url),...t}),r.params=b(a)||{},r.url=a,a},xt=async t=>{for(let e of E)t=await Promise.resolve(e(t));o.stack.push(g(t)),o.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},bt=async t=>{for(let e of E)t=await Promise.resolve(e(t));o.stack.push(g(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},st=async t=>{for(let e of E)t=await Promise.resolve(e(t));o.stack.length>0&&o.stack.pop(),o.stack.push(g(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Et=t=>{let e=et(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},Pt=t=>{let e=et(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},_t=t=>{o.stack=[g(t)],st(t)};function Tt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function ot(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function nt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function rt(t,e){if(e){let r={};Object.keys(e).forEach(c=>{let d=e[c];d!==void 0&&d!==""&&(r[c]=d)});let a=new URLSearchParams(r).toString();return a?t+"?"+a:t}return t}function b(t){let[e,r]=t.split("#"),a=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),c={},d=!1;for(let[C,h]of a.entries())d=!0,h!==void 0&&h!==""&&(c[C]=h);if(!!d)return c}var o={search:Tt,nowUrl:ot,nowFullUrl:nt,push:xt,pushNotHistory:bt,replace:st,goBack:Et,gobackNotHistory:Pt,clearTo:_t,listen:St,beforeChange:$t,searchUrlToObject:b,parasmUrl:rt,onLastBack:t=>t.url,newStack:g,stack:[],useHash:!1};var K=require("solid-js/web"),Ct=(0,K.template)("<div>Not found page</div>",2),Ut=(0,K.template)("<div></div>",2),m={navigationDuration:0,notFound:{async:!0,render:()=>Ct.cloneNode(!0)},fallback:Ut.cloneNode(!0)};var S=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},P=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},W=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var _=require("solid-js");function Ht(t,e,r){let[a,c]=(0,_.createSignal)(t[e]||r);return(0,_.createEffect)(()=>{c(t[e]||r)}),[a,c]}var T=(t,e=260)=>{if(Object.assign(m,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let a=document.createElement("style");a.id="solid-router-stack-css",a.innerHTML=t,document.head.append(a)}}},Rt={moveTop:S,moveLeft:P,scale:W},Lt=(t,e=150)=>{if(t==="none"){m.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?T(S(e),e+10):T(window.innerWidth>window.innerHeight?S(e):P(e+10),260):T(Rt[t](e),e+10)};var Nt=(0,it.template)("<div></div>",2);var k="solid-router-stack-now",At="solid-router-stack-before",Bt="solid-router-stack-leave",at="solid-router-stack-after",jt=t=>{let e={...t},[r,a]=(0,l.createRoot)(()=>(0,l.createSignal)([])),c=()=>{let s=r(),n=s[s.length-1];n&&n.setTop(!1);let i=o.stack[o.stack.length-1],[N,w]=(0,l.createSignal)(i.url),[x,A]=(0,l.createSignal)(i.path),[B,j]=(0,l.createSignal)(""),[O,f]=(0,l.createSignal)(!0),[D,y]=(0,l.createSignal)(i.params);a([...r(),{url:N,setUrl:w,path:x,setPath:A,css:B,setCss:j,top:O,setTop:f,params:D,setParams:y}])},d=()=>{let s=o.stack[o.stack.length-1],n=r();if(n.length>1){let i=n[n.length-2];i.setTop(!0),i.setUrl(s.url),i.setPath(s.path),i.setParams(s.params),a([...n])}setTimeout(()=>{n.pop(),a([...n])},m.navigationDuration)},C=()=>{let s=o.stack[o.stack.length-1],n=r(),i=n[n.length-1];i.setUrl(s.url),i.setParams(s.params),a([...n])},h=s=>{if(m.navigationDuration==0)return;let n=r(),i=n[n.length-1];i&&i.setCss(s)},U=s=>{if(m.navigationDuration==0)return;let n=r(),i=n[n.length-2];i&&i.setCss(s)},H=0,v=!1;o.listen(()=>{let s=o.stack.length;s>H?(c(),v?(h(k),U(at)):(h(At),requestAnimationFrame(()=>{U(at),h(k)}))):H!==s&&s>=1?(h(Bt),U(k),d(),v?h(k):setTimeout(()=>{h(k)},m.navigationDuration)):(C(),h(k)),H=s,v&&requestAnimationFrame(()=>{v=!1})});let R=!1,mt=s=>{R?o.gobackNotHistory(s):o.goBack(s)},z=s=>{s.async?s.Component=s.render:s.Component=(0,l.lazy)(s.render),s.push=n=>{R?o.pushNotHistory(o.parasmUrl(s.path,n)):o.push(o.parasmUrl(s.path,n))},s.replace=n=>{o.replace(o.parasmUrl(s.path,n))},s.clearTo=n=>{v=!0,o.clearTo(o.parasmUrl(s.path,n))}};z(m.notFound),Object.keys(e).forEach(s=>{let n=e[s];z(n)});let L={},I=[];Object.keys(e).map(s=>{let n=e[s];n&&(L[n.path]=n,n.async||I.push(n))});function dt(s){s.preloadAll?I.forEach(n=>{n.render()}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(n=>{let i=e[n];i&&!i.async&&i.render()})},200)}return{...e,goBack:mt,Routers:({root:s,hash:n,ignoreFull:i,virtualHistory:N})=>{o.useHash=!!n,R=!!N;let w=o.nowUrl(),x=o.searchUrlToObject(o.nowFullUrl());if(v=!0,w!=="/"&&w!==s.path){s.push();let f=L[w]||m.notFound;v=!0,f.push({...x})}else s.push(x);let[A,B]=(0,l.createSignal)(typeof window<"u"?window.innerWidth:0),[j,O]=(0,l.createSignal)(typeof window<"u"?window.innerHeight:0);return i||typeof window<"u"&&window.addEventListener("resize",()=>{B(window.innerWidth),O(window.innerHeight)}),(0,$.createComponent)(l.For,{get each(){return r()},children:(f,D)=>{let y=L[f.path()]||m.notFound;dt(y);let X=y.Component;return(()=>{let u=Nt.cloneNode(!0);return u.style.setProperty("position","fixed"),u.style.setProperty("top","0px"),u.style.setProperty("left","0px"),u.style.setProperty("background","inherit"),(0,ft.insert)(u,(()=>{let p=(0,ut.memo)(()=>!!y.async,!0);return()=>p()?(0,$.createComponent)(X,(0,M.mergeProps)({get stackTop(){return f.top()}},()=>f.params())):(0,$.createComponent)(l.Suspense,{get fallback(){return m.fallback},get children(){return(0,$.createComponent)(X,(0,M.mergeProps)({get stackTop(){return f.top()}},()=>f.params()))}})})()),(0,pt.effect)(p=>{let Y=f.path,q=f.css(),G=f.top()?"auto":"none",J=D()*10,Q=i?void 0:A()+"px",V=i?void 0:j()+"px";return Y!==p._v$&&(0,lt.setAttribute)(u,"data-path",p._v$=Y),q!==p._v$2&&(0,ct.className)(u,p._v$2=q),G!==p._v$3&&u.style.setProperty("pointer-events",p._v$3=G),J!==p._v$4&&u.style.setProperty("z-index",p._v$4=J),Q!==p._v$5&&u.style.setProperty("width",p._v$5=Q),V!==p._v$6&&u.style.setProperty("height",p._v$6=V),p},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),u})()}})}}};
