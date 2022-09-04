"use strict";var I=Object.defineProperty;var wt=Object.getOwnPropertyDescriptor;var yt=Object.getOwnPropertyNames;var St=Object.prototype.hasOwnProperty;var $t=(t,e)=>{for(var r in e)I(t,r,{get:e[r],enumerable:!0})},xt=(t,e,r,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of yt(e))!St.call(t,i)&&i!==r&&I(t,i,{get:()=>e[i],enumerable:!(c=wt(e,i))||c.enumerable});return t};var bt=t=>xt(I({},"__esModule",{value:!0}),t);var Wt={};$t(Wt,{createPropsSignal:()=>Bt,createRouters:()=>Kt,historyProxy:()=>n,moveLeftCss:()=>H,moveTopCss:()=>T,scaleCss:()=>Y,setCustomNavigationAnimation:()=>N,setNavigationAnimation:()=>Dt,stackOptions:()=>p});module.exports=bt(Wt);var pt=require("solid-js/web"),G=require("solid-js/web"),ut=require("solid-js/web"),ft=require("solid-js/web"),ht=require("solid-js/web"),mt=require("solid-js/web"),dt=require("solid-js/web"),E=require("solid-js/web"),l=require("solid-js");var nt=[],Tt=t=>{nt.push(t)},U=[],Et=t=>{U.push(t)},y=t=>({url:t,path:t.split("?")[0],params:C(t)||{},time:Date.now(),index:n.stack.length}),ot="";["popstate","pushState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=at();if(t==="popstate")if(e===ot){let c=ct(),i=y(c),m=n.stack[n.stack.length-1];m.url=i.url,m.params=i.params}else n.stack.pop();let r=n.stack[n.stack.length-1];nt.forEach(c=>{c(r?r.path:"",t,n.stack)}),ot=e})});var rt=t=>{if(n.stack.length==1)return"";n.stack.pop();let r=n.stack[n.stack.length-1],c=r.path;return n.useHash&&(c="/#"+r.path),c=it(c,{...C(r.url),...t}),r.params=C(c)||{},r.url=c,c},_t=async t=>{for(let e of U)t=await Promise.resolve(e(t,L(t)));n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},Pt=async t=>{for(let e of U)t=await Promise.resolve(e(t,L(t)));n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Ct=async t=>{for(let e of U)t=await Promise.resolve(e(t,L(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Ut=t=>{let e=rt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},Lt=t=>{let e=rt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},Ht=t=>{n.stack=[y(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function Rt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function L(t){return t.split("?")[0]}function at(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function ct(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function it(t,e){if(e){let r={};Object.keys(e).forEach(i=>{let m=e[i];m!==void 0&&m!==""&&(r[i]=m)});let c=new URLSearchParams(r).toString();return c?t+"?"+c:t}return t}function C(t){let[e,r]=t.split("#"),c=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),i={},m=!1;for(let[B,S]of c.entries())m=!0,S!==void 0&&S!==""&&(i[B]=S);if(!!m)return i}var n={search:Rt,nowUrl:at,urlToPath:L,nowFullUrl:ct,push:_t,pushNotHistory:Pt,replace:Ct,goBack:Ut,gobackNotHistory:Lt,clearTo:Ht,listen:Tt,beforeChange:Et,searchUrlToObject:C,parasmUrl:it,onLastBack:t=>t.url,newStack:y,stack:[],useHash:!1};var X=require("solid-js/web"),Nt=(0,X.template)("<div>Not found page</div>",2),At=(0,X.template)("<div></div>",2),p={navigationDuration:0,className:"",notFound:{async:!0,render:()=>Nt.cloneNode(!0)},fallback:At.cloneNode(!0)};var T=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},Y=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var R=require("solid-js");function Bt(t,e,r){let[c,i]=(0,R.createSignal)(t[e]||r);return(0,R.createEffect)(()=>{i(t[e]||r)}),[c,i]}var N=(t,e=260)=>{if(Object.assign(p,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let c=document.createElement("style");c.id="solid-router-stack-css",c.innerHTML=t,document.head.append(c)}}},jt={moveTop:T,moveLeft:H,scale:Y},Dt=(t,e=150)=>{if(t==="none"){p.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?N(T(e),e+10):N(window.innerWidth>window.innerHeight?T(e):H(e+10),260):N(jt[t](e),e+10)};var Ot=(0,pt.template)("<div></div>",2);var k="solid-router-stack-now",lt="solid-router-stack-before",Ft="solid-router-stack-leave",A="solid-router-stack-after",Kt=t=>{let e={...t},[r,c]=(0,l.createRoot)(()=>(0,l.createSignal)([])),i=()=>{let o=r(),s=o[o.length-1];s&&s.setStackTop(!1);let a=n.stack[n.stack.length-1],[F,x]=(0,l.createSignal)(a.url),[_,K]=(0,l.createSignal)(a.path),[W,M]=(0,l.createSignal)(""),[q,f]=(0,l.createSignal)(!0),[z,b]=(0,l.createSignal)(!1),[P,h]=(0,l.createSignal)(a.params);c([...r(),{url:F,setUrl:x,path:_,setPath:K,css:W,setCss:M,stackTop:q,setStackTop:f,params:P,setParams:h,stackShow:z,setStackShow:b}])},m=()=>{let o=n.stack[n.stack.length-1],s=r();if(s.length>1){let a=s[s.length-2];a.setStackTop(!0),a.setUrl(o.url),a.setPath(o.path),a.setParams(o.params),c([...s])}setTimeout(()=>{s.pop(),c([...s])},p.navigationDuration)},B=()=>{let o=n.stack[n.stack.length-1],s=r(),a=s[s.length-1];a.setUrl(o.url),a.setParams(o.params),c([...s])},S=()=>{c([]),i()},d=o=>{if(p.navigationDuration==0)return;let s=r(),a=s[s.length-1];a&&a.setCss(o)},$=o=>{if(p.navigationDuration==0)return;let s=r(),a=s[s.length-2];a&&a.setCss(o)},v=o=>{let s=r(),a=s[s.length-1];a&&a.setStackShow(o)},w=o=>{let s=r(),a=s[s.length-2];a&&a.setStackShow(o)},j=0,g=!1;n.listen((o,s)=>{let a=n.stack.length;s==="clearState"?(S(),g?(v(!0),w(!1),d(k),$(A)):(v(!0),setTimeout(()=>{w(!1)},p.navigationDuration),d(lt),requestAnimationFrame(()=>{$(A),d(k)}))):a>j?(i(),g?(v(!0),w(!1),d(k),$(A)):(v(!0),setTimeout(()=>{w(!1)},p.navigationDuration),d(lt),requestAnimationFrame(()=>{$(A),d(k)}))):j!==a&&a>=1?(console.log("__debug__","222"),v(!0),w(!0),d(Ft),$(k),m(),g?d(k):setTimeout(()=>{d(k)},p.navigationDuration)):(v(!0),w(!0),B(),d(k)),j=a,g&&requestAnimationFrame(()=>{g=!1})});let D=!1,kt=o=>{D?n.gobackNotHistory(o):n.goBack(o)},J=o=>{o.async?o.Component=o.render:o.Component=(0,l.lazy)(o.render),o.push=s=>{D?n.pushNotHistory(n.parasmUrl(o.path,s)):n.push(n.parasmUrl(o.path,s))},o.replace=s=>{n.replace(n.parasmUrl(o.path,s))},o.clearTo=s=>{n.clearTo(n.parasmUrl(o.path,s))}};J(p.notFound),Object.keys(e).forEach(o=>{let s=e[o];J(s)});let O={},Q=[];Object.keys(e).map(o=>{let s=e[o];s&&(O[s.path]=s,s.async||Q.push(s))});function gt(o){o.preloadAll?Q.forEach(s=>{s.render()}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(s=>{let a=e[s];a&&!a.async&&a.render()})},200)}return{...e,goBack:kt,Routers:({root:o,hash:s,ignoreFull:a,virtualHistory:F})=>{n.useHash=!!s,D=!!F;let x=n.nowUrl(),_=n.searchUrlToObject(n.nowFullUrl());if(g=!0,x!=="/"&&x!==o.path){o.push();let f=O[x]||p.notFound;g=!0,f.push({..._})}else o.push(_);let[K,W]=(0,l.createSignal)(typeof window<"u"?window.innerWidth:0),[M,q]=(0,l.createSignal)(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{W(window.innerWidth),q(window.innerHeight)}),(0,E.createComponent)(l.For,{get each(){return r()},children:(f,z)=>{let b=O[f.path()]||p.notFound;gt(b);let P=b.Component;return(()=>{let h=Ot.cloneNode(!0);return h.style.setProperty("position","fixed"),h.style.setProperty("top","0px"),h.style.setProperty("left","0px"),(0,mt.insert)(h,(()=>{let u=(0,dt.memo)(()=>!!b.async,!0);return()=>u()?(0,E.createComponent)(P,(0,G.mergeProps)({get stackTop(){return f.stackTop()},get stackShow(){return f.stackShow()}},()=>f.params())):(0,E.createComponent)(l.Suspense,{get fallback(){return p.fallback},get children(){return(0,E.createComponent)(P,(0,G.mergeProps)({get stackTop(){return f.stackTop()},get stackShow(){return f.stackShow()}},()=>f.params()))}})})()),(0,ht.effect)(u=>{let V=f.path(),vt={[f.css()]:!0,[p.className]:!0},Z=f.stackTop()?"auto":"none",tt=z()*10,et=a?void 0:K()+"px",st=a?void 0:M()+"px";return V!==u._v$&&(0,ft.setAttribute)(h,"data-path",u._v$=V),u._v$2=(0,ut.classList)(h,vt,u._v$2),Z!==u._v$3&&h.style.setProperty("pointer-events",u._v$3=Z),tt!==u._v$4&&h.style.setProperty("z-index",u._v$4=tt),et!==u._v$5&&h.style.setProperty("width",u._v$5=et),st!==u._v$6&&h.style.setProperty("height",u._v$6=st),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),h})()}})}}};
