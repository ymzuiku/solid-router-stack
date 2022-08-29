"use strict";var K=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var vt=Object.getOwnPropertyNames;var kt=Object.prototype.hasOwnProperty;var wt=(t,e)=>{for(var r in e)K(t,r,{get:e[r],enumerable:!0})},yt=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of vt(e))!kt.call(t,c)&&c!==r&&K(t,c,{get:()=>e[c],enumerable:!(a=gt(e,c))||a.enumerable});return t};var St=t=>yt(K({},"__esModule",{value:!0}),t);var Dt={};wt(Dt,{createPropsSignal:()=>Lt,createRouters:()=>Ot,historyProxy:()=>o,moveLeftCss:()=>T,moveTopCss:()=>S,scaleCss:()=>M,setCustomNavigationAnimation:()=>C,setNavigationAnimation:()=>Nt,stackOptions:()=>f});module.exports=St(Dt);var it=require("solid-js/web"),z=require("solid-js/web"),ct=require("solid-js/web"),lt=require("solid-js/web"),pt=require("solid-js/web"),ft=require("solid-js/web"),ut=require("solid-js/web"),$=require("solid-js/web"),l=require("solid-js");var tt=[],$t=t=>{tt.push(t)},E=[],xt=t=>{E.push(t)},v=t=>({url:t,path:t.split("?")[0],params:b(t)||{},time:Date.now(),index:o.stack.length}),Z="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=ot();if(t==="popstate")if(e===Z){let a=nt(),c=v(a),m=o.stack[o.stack.length-1];m.url=c.url,m.params=c.params}else o.stack.pop();let r=o.stack[o.stack.length-1];tt.forEach(a=>{a(r?r.path:"",t,o.stack)}),Z=e})});var et=t=>{if(o.stack.length==1)return"";o.stack.pop();let r=o.stack[o.stack.length-1],a=r.path;return o.useHash&&(a="/#"+r.path),a=rt(a,{...b(r.url),...t}),r.params=b(a)||{},r.url=a,a},bt=async t=>{for(let e of E)t=await Promise.resolve(e(t,P(t)));o.stack.push(v(t)),o.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},Et=async t=>{for(let e of E)t=await Promise.resolve(e(t,P(t)));o.stack.push(v(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},st=async t=>{for(let e of E)t=await Promise.resolve(e(t,P(t)));o.stack.length>0&&o.stack.pop(),o.stack.push(v(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Pt=t=>{let e=et(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},Tt=t=>{let e=et(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},_t=t=>{o.stack=[v(t)],st(t)};function Ct(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function P(t){return t.split("?")[0]}function ot(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function nt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function rt(t,e){if(e){let r={};Object.keys(e).forEach(c=>{let m=e[c];m!==void 0&&m!==""&&(r[c]=m)});let a=new URLSearchParams(r).toString();return a?t+"?"+a:t}return t}function b(t){let[e,r]=t.split("#"),a=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),c={},m=!1;for(let[U,h]of a.entries())m=!0,h!==void 0&&h!==""&&(c[U]=h);if(!!m)return c}var o={search:Ct,nowUrl:ot,urlToPath:P,nowFullUrl:nt,push:bt,pushNotHistory:Et,replace:st,goBack:Pt,gobackNotHistory:Tt,clearTo:_t,listen:$t,beforeChange:xt,searchUrlToObject:b,parasmUrl:rt,onLastBack:t=>t.url,newStack:v,stack:[],useHash:!1};var W=require("solid-js/web"),Ut=(0,W.template)("<div>Not found page</div>",2),Ht=(0,W.template)("<div></div>",2),f={navigationDuration:0,className:"",notFound:{async:!0,render:()=>Ut.cloneNode(!0)},fallback:Ht.cloneNode(!0)};var S=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},M=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var _=require("solid-js");function Lt(t,e,r){let[a,c]=(0,_.createSignal)(t[e]||r);return(0,_.createEffect)(()=>{c(t[e]||r)}),[a,c]}var C=(t,e=260)=>{if(Object.assign(f,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let a=document.createElement("style");a.id="solid-router-stack-css",a.innerHTML=t,document.head.append(a)}}},Rt={moveTop:S,moveLeft:T,scale:M},Nt=(t,e=150)=>{if(t==="none"){f.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?C(S(e),e+10):C(window.innerWidth>window.innerHeight?S(e):T(e+10),260):C(Rt[t](e),e+10)};var At=(0,it.template)("<div></div>",2);var k="solid-router-stack-now",Bt="solid-router-stack-before",jt="solid-router-stack-leave",at="solid-router-stack-after",Ot=t=>{let e={...t},[r,a]=(0,l.createRoot)(()=>(0,l.createSignal)([])),c=()=>{let s=r(),n=s[s.length-1];n&&n.setTop(!1);let i=o.stack[o.stack.length-1],[A,w]=(0,l.createSignal)(i.url),[x,B]=(0,l.createSignal)(i.path),[j,O]=(0,l.createSignal)(""),[D,u]=(0,l.createSignal)(!0),[F,y]=(0,l.createSignal)(i.params);a([...r(),{url:A,setUrl:w,path:x,setPath:B,css:j,setCss:O,top:D,setTop:u,params:F,setParams:y}])},m=()=>{let s=o.stack[o.stack.length-1],n=r();if(n.length>1){let i=n[n.length-2];i.setTop(!0),i.setUrl(s.url),i.setPath(s.path),i.setParams(s.params),a([...n])}setTimeout(()=>{n.pop(),a([...n])},f.navigationDuration)},U=()=>{let s=o.stack[o.stack.length-1],n=r(),i=n[n.length-1];i.setUrl(s.url),i.setParams(s.params),a([...n])},h=s=>{if(f.navigationDuration==0)return;let n=r(),i=n[n.length-1];i&&i.setCss(s)},H=s=>{if(f.navigationDuration==0)return;let n=r(),i=n[n.length-2];i&&i.setCss(s)},L=0,g=!1;o.listen(()=>{let s=o.stack.length;s>L?(c(),g?(h(k),H(at)):(h(Bt),requestAnimationFrame(()=>{H(at),h(k)}))):L!==s&&s>=1?(h(jt),H(k),m(),g?h(k):setTimeout(()=>{h(k)},f.navigationDuration)):(U(),h(k)),L=s,g&&requestAnimationFrame(()=>{g=!1})});let R=!1,mt=s=>{R?o.gobackNotHistory(s):o.goBack(s)},I=s=>{s.async?s.Component=s.render:s.Component=(0,l.lazy)(s.render),s.push=n=>{R?o.pushNotHistory(o.parasmUrl(s.path,n)):o.push(o.parasmUrl(s.path,n))},s.replace=n=>{o.replace(o.parasmUrl(s.path,n))},s.clearTo=n=>{g=!0,o.clearTo(o.parasmUrl(s.path,n))}};I(f.notFound),Object.keys(e).forEach(s=>{let n=e[s];I(n)});let N={},X=[];Object.keys(e).map(s=>{let n=e[s];n&&(N[n.path]=n,n.async||X.push(n))});function ht(s){s.preloadAll?X.forEach(n=>{n.render()}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(n=>{let i=e[n];i&&!i.async&&i.render()})},200)}return{...e,goBack:mt,Routers:({root:s,hash:n,ignoreFull:i,virtualHistory:A})=>{o.useHash=!!n,R=!!A;let w=o.nowUrl(),x=o.searchUrlToObject(o.nowFullUrl());if(g=!0,w!=="/"&&w!==s.path){s.push();let u=N[w]||f.notFound;g=!0,u.push({...x})}else s.push(x);let[B,j]=(0,l.createSignal)(typeof window<"u"?window.innerWidth:0),[O,D]=(0,l.createSignal)(typeof window<"u"?window.innerHeight:0);return i||typeof window<"u"&&window.addEventListener("resize",()=>{j(window.innerWidth),D(window.innerHeight)}),(0,$.createComponent)(l.For,{get each(){return r()},children:(u,F)=>{let y=N[u.path()]||f.notFound;ht(y);let Y=y.Component;return(()=>{let d=At.cloneNode(!0);return d.style.setProperty("position","fixed"),d.style.setProperty("top","0px"),d.style.setProperty("left","0px"),(0,ft.insert)(d,(()=>{let p=(0,ut.memo)(()=>!!y.async,!0);return()=>p()?(0,$.createComponent)(Y,(0,z.mergeProps)({get stackTop(){return u.top()}},()=>u.params())):(0,$.createComponent)(l.Suspense,{get fallback(){return f.fallback},get children(){return(0,$.createComponent)(Y,(0,z.mergeProps)({get stackTop(){return u.top()}},()=>u.params()))}})})()),(0,pt.effect)(p=>{let q=u.path(),dt={[u.css()]:!0,[f.className]:!0},G=u.top()?"auto":"none",J=F()*10,Q=i?void 0:B()+"px",V=i?void 0:O()+"px";return q!==p._v$&&(0,lt.setAttribute)(d,"data-path",p._v$=q),p._v$2=(0,ct.classList)(d,dt,p._v$2),G!==p._v$3&&d.style.setProperty("pointer-events",p._v$3=G),J!==p._v$4&&d.style.setProperty("z-index",p._v$4=J),Q!==p._v$5&&d.style.setProperty("width",p._v$5=Q),V!==p._v$6&&d.style.setProperty("height",p._v$6=V),p},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),d})()}})}}};
