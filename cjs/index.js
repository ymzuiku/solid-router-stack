"use strict";var I=Object.defineProperty;var vt=Object.getOwnPropertyDescriptor;var wt=Object.getOwnPropertyNames;var yt=Object.prototype.hasOwnProperty;var St=(t,e)=>{for(var r in e)I(t,r,{get:e[r],enumerable:!0})},$t=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of wt(e))!yt.call(t,c)&&c!==r&&I(t,c,{get:()=>e[c],enumerable:!(i=vt(e,c))||i.enumerable});return t};var xt=t=>$t(I({},"__esModule",{value:!0}),t);var Kt={};St(Kt,{createPropsSignal:()=>At,createRouters:()=>Ft,historyProxy:()=>n,moveLeftCss:()=>U,moveTopCss:()=>b,scaleCss:()=>Y,setCustomNavigationAnimation:()=>R,setNavigationAnimation:()=>jt,stackOptions:()=>p});module.exports=xt(Kt);var lt=require("solid-js/web"),pt=require("solid-js/web"),ft=require("solid-js/web"),ut=require("solid-js/web"),ht=require("solid-js/web"),mt=require("solid-js/web"),E=require("solid-js/web"),l=require("solid-js");var ot=[],bt=t=>{ot.push(t)},C=[],Et=t=>{C.push(t)},y=t=>({url:t,path:t.split("?")[0],params:_(t)||{},time:Date.now(),index:n.stack.length}),st="";["popstate","pushState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=rt();if(t==="popstate")if(e===st){let i=at(),c=y(i),h=n.stack[n.stack.length-1];h.url=c.url,h.params=c.params}else n.stack.pop();let r=n.stack[n.stack.length-1];ot.forEach(i=>{i(r?r.path:"",t,n.stack)}),st=e})});var nt=t=>{if(n.stack.length==1)return"";n.stack.pop();let r=n.stack[n.stack.length-1],i=r.path;return n.useHash&&(i="/#"+r.path),i=it(i,{..._(r.url),...t}),r.params=_(i)||{},r.url=i,i},Tt=async t=>{for(let e of C)t=await Promise.resolve(e(t,L(t)));n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},Pt=async t=>{for(let e of C)t=await Promise.resolve(e(t,L(t)));n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},_t=async t=>{for(let e of C)t=await Promise.resolve(e(t,L(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Ct=t=>{let e=nt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},Lt=t=>{let e=nt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},Ut=t=>{n.stack=[y(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function Ht(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function L(t){return t.split("?")[0]}function rt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function at(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function it(t,e){if(e){let r={};Object.keys(e).forEach(c=>{let h=e[c];h!==void 0&&h!==""&&(r[c]=h)});let i=new URLSearchParams(r).toString();return i?t+"?"+i:t}return t}function _(t){let[e,r]=t.split("#"),i=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),c={},h=!1;for(let[A,S]of i.entries())h=!0,S!==void 0&&S!==""&&(c[A]=S);if(!!h)return c}var n={search:Ht,nowUrl:rt,urlToPath:L,nowFullUrl:at,push:Tt,pushNotHistory:Pt,replace:_t,goBack:Ct,gobackNotHistory:Lt,clearTo:Ut,listen:bt,beforeChange:Et,searchUrlToObject:_,parasmUrl:it,onLastBack:t=>t.url,newStack:y,stack:[],useHash:!1};var X=require("solid-js/web"),Rt=(0,X.template)("<div>Not found page</div>",2),Nt=(0,X.template)("<div></div>",2),p={navigationDuration:0,className:"",notFound:{async:!0,render:()=>Rt.cloneNode(!0)},fallback:Nt.cloneNode(!0)};var b=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},U=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var H=require("solid-js");function At(t,e,r){let[i,c]=(0,H.createSignal)(t[e]||r);return(0,H.createEffect)(()=>{c(t[e]||r)}),[i,c]}var R=(t,e=260)=>{if(Object.assign(p,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},Bt={moveTop:b,moveLeft:U,scale:Y},jt=(t,e=150)=>{if(t==="none"){p.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?R(b(e),e+10):R(window.innerWidth>window.innerHeight?b(e):U(e+10),260):R(Bt[t](e),e+10)};var Dt=(0,lt.template)("<div></div>",2);var g="solid-router-stack-now",ct="solid-router-stack-before",Ot="solid-router-stack-leave",N="solid-router-stack-after",Ft=t=>{let e={...t},[r,i]=(0,l.createRoot)(()=>(0,l.createSignal)([])),c=()=>{let o=r(),s=o[o.length-1];s&&s.setStackTop(!1);let a=n.stack[n.stack.length-1],[O,x]=(0,l.createSignal)(a.url),[T,F]=(0,l.createSignal)(a.path),[K,W]=(0,l.createSignal)(""),[z,m]=(0,l.createSignal)(!0),[M,P]=(0,l.createSignal)(!1),[q,f]=(0,l.createSignal)(a.params);i([...r(),{url:O,setUrl:x,path:T,setPath:F,css:K,setCss:W,stackTop:z,setStackTop:m,params:q,setParams:f,stackShow:M,setStackShow:P}])},h=()=>{let o=n.stack[n.stack.length-1],s=r();if(s.length>1){let a=s[s.length-2];a.setStackTop(!0),a.setUrl(o.url),a.setPath(o.path),a.setParams(o.params),i([...s])}setTimeout(()=>{s.pop(),i([...s])},p.navigationDuration)},A=()=>{let o=n.stack[n.stack.length-1],s=r(),a=s[s.length-1];a.setUrl(o.url),a.setParams(o.params),i([...s])},S=()=>{i([]),c()},d=o=>{if(p.navigationDuration==0)return;let s=r(),a=s[s.length-1];a&&a.setCss(o)},$=o=>{if(p.navigationDuration==0)return;let s=r(),a=s[s.length-2];a&&a.setCss(o)},v=o=>{let s=r(),a=s[s.length-1];a&&a.setStackShow(o)},w=o=>{let s=r(),a=s[s.length-2];a&&a.setStackShow(o)},B=0,k=!1;n.listen((o,s)=>{let a=n.stack.length;s==="clearState"?(S(),k?(v(!0),w(!1),d(g),$(N)):(v(!0),setTimeout(()=>{w(!1)},p.navigationDuration),d(ct),requestAnimationFrame(()=>{$(N),d(g)}))):a>B?(c(),k?(v(!0),w(!1),d(g),$(N)):(v(!0),setTimeout(()=>{w(!1)},p.navigationDuration),d(ct),requestAnimationFrame(()=>{$(N),d(g)}))):B!==a&&a>=1?(console.log("__debug__","222"),v(!0),w(!0),d(Ot),$(g),h(),k?d(g):setTimeout(()=>{d(g)},p.navigationDuration)):(v(!0),w(!0),A(),d(g)),B=a,k&&requestAnimationFrame(()=>{k=!1})});let j=!1,dt=o=>{j?n.gobackNotHistory(o):n.goBack(o)},G=o=>{if(o.async)o.Component=o.render;else{let s=(0,l.lazy)(o.render);o.Component=a=>(0,E.createComponent)(l.Suspense,{get fallback(){return p.fallback},get children(){return(0,E.createComponent)(s,a)}})}o.push=s=>{j?n.pushNotHistory(n.parasmUrl(o.path,s)):n.push(n.parasmUrl(o.path,s))},o.replace=s=>{n.replace(n.parasmUrl(o.path,s))},o.clearTo=s=>{n.clearTo(n.parasmUrl(o.path,s))}};G(p.notFound),Object.keys(e).forEach(o=>{let s=e[o];G(s)});let D={},J=[];Object.keys(e).map(o=>{let s=e[o];s&&(D[s.path]=s,s.async||J.push(s))});function gt(o){o.preloadAll?J.forEach(s=>{s.render()}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(s=>{let a=e[s];a&&!a.async&&a.render()})},200)}return{...e,goBack:dt,Routers:({root:o,hash:s,ignoreFull:a,virtualHistory:O})=>{n.useHash=!!s,j=!!O;let x=n.nowUrl(),T=n.searchUrlToObject(n.nowFullUrl());if(k=!0,x!=="/"&&x!==o.path){o.push();let m=D[x]||p.notFound;k=!0,m.push({...T})}else o.push(T);let[F,K]=(0,l.createSignal)(typeof window<"u"?window.innerWidth:0),[W,z]=(0,l.createSignal)(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{K(window.innerWidth),z(window.innerHeight)}),(0,E.createComponent)(l.For,{get each(){return r()},children:(m,M)=>{let P=D[m.path()]||p.notFound;gt(P);let q=P.Component;return(()=>{let f=Dt.cloneNode(!0);return f.style.setProperty("position","fixed"),f.style.setProperty("top","0px"),f.style.setProperty("left","0px"),(0,ht.insert)(f,(0,E.createComponent)(q,(0,mt.mergeProps)({get stackTop(){return m.stackTop()},get stackShow(){return m.stackShow()}},()=>m.params()))),(0,ut.effect)(u=>{let Q=m.path(),kt={[m.css()]:!0,[p.className]:!0},V=m.stackTop()?"auto":"none",Z=M()*10,tt=a?void 0:F()+"px",et=a?void 0:W()+"px";return Q!==u._v$&&(0,ft.setAttribute)(f,"data-path",u._v$=Q),u._v$2=(0,pt.classList)(f,kt,u._v$2),V!==u._v$3&&f.style.setProperty("pointer-events",u._v$3=V),Z!==u._v$4&&f.style.setProperty("z-index",u._v$4=Z),tt!==u._v$5&&f.style.setProperty("width",u._v$5=tt),et!==u._v$6&&f.style.setProperty("height",u._v$6=et),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),f})()}})}}};
