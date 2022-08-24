"use strict";var D=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var vt=Object.getOwnPropertyNames;var kt=Object.prototype.hasOwnProperty;var wt=(t,e)=>{for(var r in e)D(t,r,{get:e[r],enumerable:!0})},yt=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of vt(e))!kt.call(t,i)&&i!==r&&D(t,i,{get:()=>e[i],enumerable:!(a=gt(e,i))||a.enumerable});return t};var St=t=>yt(D({},"__esModule",{value:!0}),t);var Ft={};wt(Ft,{createPropsSignal:()=>Lt,createRouters:()=>Ot,moveLeftCss:()=>T,moveTopCss:()=>S,scaleCss:()=>W,setCustomNavigationAnimation:()=>_,setNavigationAnimation:()=>Nt});module.exports=St(Ft);var ct=require("solid-js/web"),M=require("solid-js/web"),it=require("solid-js/web"),lt=require("solid-js/web"),pt=require("solid-js/web"),ft=require("solid-js/web"),ut=require("solid-js/web"),$=require("solid-js/web"),l=require("solid-js");var tt=[],$t=t=>{tt.push(t)},E=[],bt=t=>{E.push(t)},v=t=>({url:t,path:t.split("?")[0],params:x(t)||{},time:Date.now(),index:s.stack.length}),Z="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=nt();if(t==="popstate")if(e===Z){let a=ot(),i=v(a),m=s.stack[s.stack.length-1];m.url=i.url,m.params=i.params}else s.stack.pop();let r=s.stack[s.stack.length-1];tt.forEach(a=>{a(r?r.path:"",t,s.stack)}),Z=e})});var et=t=>{if(s.stack.length==1)return"";s.stack.pop();let r=s.stack[s.stack.length-1],a=r.path;return s.useHash&&(a="/#"+r.path),a=rt(a,{...x(r.url),...t}),r.params=x(a)||{},r.url=a,a},xt=t=>{E.forEach(e=>{t=e(t)}),s.stack.push(v(t)),s.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},Et=t=>{E.forEach(e=>{t=e(t)}),s.stack.push(v(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},st=t=>{E.forEach(e=>{t=e(t)}),s.stack.length>0&&s.stack.pop(),s.stack.push(v(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Tt=t=>{let e=et(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},Ut=t=>{let e=et(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},_t=t=>{s.stack=[v(t)],st(t)};function Pt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function nt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function ot(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function rt(t,e){if(e){let r={};Object.keys(e).forEach(i=>{let m=e[i];m!==void 0&&m!==""&&(r[i]=m)});let a=new URLSearchParams(r).toString();return a?t+"?"+a:t}return t}function x(t){let[e,r]=t.split("#"),a=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),i={},m=!1;for(let[P,d]of a.entries())m=!0,d!==void 0&&d!==""&&(i[P]=d);if(!!m)return i}var s={search:Pt,nowUrl:nt,nowFullUrl:ot,push:xt,pushNotHistory:Et,replace:st,goBack:Tt,gobackNotHistory:Ut,clearTo:_t,listen:$t,beforeChange:bt,searchUrlToObject:x,parasmUrl:rt,onLastBack:t=>t.url,newStack:v,stack:[],useHash:!1};var K=require("solid-js/web"),Ct=(0,K.template)("<div>Not found page</div>",2),Ht=(0,K.template)("<div></div>",2),h={navigationDuration:0,notFound:{async:!0,render:()=>Ct.cloneNode(!0)},fallback:Ht.cloneNode(!0)};var S=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var U=require("solid-js");function Lt(t,e,r){let[a,i]=(0,U.createSignal)(t[e]||r);return(0,U.createEffect)(()=>{i(t[e]||r)}),[a,i]}var _=(t,e=260)=>{if(Object.assign(h,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let a=document.createElement("style");a.id="solid-router-stack-css",a.innerHTML=t,document.head.append(a)}}},Rt={moveTop:S,moveLeft:T,scale:W},Nt=(t,e=150)=>{if(t==="none"){h.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?_(S(e),e+10):_(window.innerWidth>window.innerHeight?S(e):T(e+10),260):_(Rt[t](e),e+10)};var At=(0,ct.template)("<div></div>",2),k="solid-router-stack-now",jt="solid-router-stack-before",Bt="solid-router-stack-leave",at="solid-router-stack-after",Ot=t=>{let e={...t},[r,a]=(0,l.createRoot)(()=>(0,l.createSignal)([])),i=()=>{let n=r(),o=n[n.length-1];o&&o.setTop(!1);let c=s.stack[s.stack.length-1],[N,w]=(0,l.createSignal)(c.url),[b,A]=(0,l.createSignal)(c.path),[j,B]=(0,l.createSignal)(""),[O,f]=(0,l.createSignal)(!0),[F,y]=(0,l.createSignal)(c.params);a([...r(),{url:N,setUrl:w,path:b,setPath:A,css:j,setCss:B,top:O,setTop:f,params:F,setParams:y}])},m=()=>{let n=s.stack[s.stack.length-1],o=r();if(o.length>1){let c=o[o.length-2];c.setTop(!0),c.setUrl(n.url),c.setPath(n.path),c.setParams(n.params),a([...o])}setTimeout(()=>{o.pop(),a([...o])},h.navigationDuration)},P=()=>{let n=s.stack[s.stack.length-1],o=r(),c=o[o.length-1];c.setUrl(n.url),c.setParams(n.params),a([...o])},d=n=>{if(h.navigationDuration==0)return;let o=r(),c=o[o.length-1];c&&c.setCss(n)},C=n=>{if(h.navigationDuration==0)return;let o=r(),c=o[o.length-2];c&&c.setCss(n)},H=0,g=!1;s.listen(()=>{let n=s.stack.length;n>H?(i(),g?(d(k),C(at)):(d(jt),requestAnimationFrame(()=>{C(at),d(k)}))):H!==n&&n>=1?(d(Bt),C(k),m(),g?d(k):setTimeout(()=>{d(k)},h.navigationDuration)):(P(),d(k)),H=n,g&&requestAnimationFrame(()=>{g=!1})});let L=!1,ht=n=>{L?s.gobackNotHistory(n):s.goBack(n)},z=n=>{n.async?n.Component=n.render:n.Component=(0,l.lazy)(n.render),n.push=o=>{L?s.pushNotHistory(s.parasmUrl(n.path,o)):s.push(s.parasmUrl(n.path,o))},n.replace=o=>{s.replace(s.parasmUrl(n.path,o))},n.clearTo=o=>{g=!0,s.clearTo(s.parasmUrl(n.path,o))}};z(h.notFound),Object.keys(e).forEach(n=>{let o=e[n];z(o)});let R={},I=[];Object.keys(e).map(n=>{let o=e[n];o&&(R[o.path]=o,o.async||I.push(o))});function mt(n){n.preloadAll?I.forEach(o=>{o.render()}):n.preload&&n.preload.length&&setTimeout(()=>{n.preload.forEach(o=>{let c=e[o];c&&!c.async&&c.render()})},200)}let dt=({root:n,hash:o,ignoreFull:c,virtualHistory:N})=>{s.useHash=!!o,L=!!N;let w=s.nowUrl(),b=s.searchUrlToObject(s.nowFullUrl());if(g=!0,w!=="/"&&w!==n.path){n.push();let f=R[w]||h.notFound;g=!0,f.push({...b})}else n.push(b);let[A,j]=(0,l.createSignal)(typeof window<"u"?window.innerWidth:0),[B,O]=(0,l.createSignal)(typeof window<"u"?window.innerHeight:0);return c||typeof window<"u"&&window.addEventListener("resize",()=>{j(window.innerWidth),O(window.innerHeight)}),(0,$.createComponent)(l.For,{get each(){return r()},children:(f,F)=>{let y=R[f.path()]||h.notFound;mt(y);let X=y.Component;return(()=>{let u=At.cloneNode(!0);return u.style.setProperty("position","fixed"),u.style.setProperty("top","0px"),u.style.setProperty("left","0px"),u.style.setProperty("background","inherit"),(0,ft.insert)(u,(()=>{let p=(0,ut.memo)(()=>!!y.async,!0);return()=>p()?(0,$.createComponent)(X,(0,M.mergeProps)({get stackTop(){return f.top()}},()=>f.params())):(0,$.createComponent)(l.Suspense,{get fallback(){return h.fallback},get children(){return(0,$.createComponent)(X,(0,M.mergeProps)({get stackTop(){return f.top()}},()=>f.params()))}})})()),(0,pt.effect)(p=>{let Y=f.path,q=f.css(),G=f.top()?"auto":"none",J=F()*10,Q=c?void 0:A()+"px",V=c?void 0:B()+"px";return Y!==p._v$&&(0,lt.setAttribute)(u,"data-path",p._v$=Y),q!==p._v$2&&(0,it.className)(u,p._v$2=q),G!==p._v$3&&u.style.setProperty("pointer-events",p._v$3=G),J!==p._v$4&&u.style.setProperty("z-index",p._v$4=J),Q!==p._v$5&&u.style.setProperty("width",p._v$5=Q),V!==p._v$6&&u.style.setProperty("height",p._v$6=V),p},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),u})()}})};return{...e,goBack:ht,history:{search:s.search,nowUrl:s.nowUrl,nowFullUrl:s.nowFullUrl,searchUrlToObject:s.searchUrlToObject,listen:s.listen,beforeChange:s.beforeChange,getStack:()=>s.stack},Routers:dt}};
