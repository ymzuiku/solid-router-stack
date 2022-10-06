"use strict";var q=Object.defineProperty;var vt=Object.getOwnPropertyDescriptor;var wt=Object.getOwnPropertyNames;var St=Object.prototype.hasOwnProperty;var yt=(t,e)=>{for(var r in e)q(t,r,{get:e[r],enumerable:!0})},xt=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of wt(e))!St.call(t,c)&&c!==r&&q(t,c,{get:()=>e[c],enumerable:!(i=vt(e,c))||i.enumerable});return t};var $t=t=>xt(q({},"__esModule",{value:!0}),t);var Kt={};yt(Kt,{createPropsSignal:()=>Bt,createRouters:()=>Ot,historyProxy:()=>n,moveLeftCss:()=>U,moveTopCss:()=>T,scaleCss:()=>M,setCustomNavigationAnimation:()=>H,setNavigationAnimation:()=>Dt,stackOptions:()=>l});module.exports=$t(Kt);var at=require("solid-js/web"),rt=require("solid-js/web"),it=require("solid-js/web"),ct=require("solid-js/web"),lt=require("solid-js/web"),pt=require("solid-js/web"),B=require("solid-js/web"),p=require("solid-js");var et=[],bt=t=>{et.push(t)},L=[],Et=t=>{L.push(t)},y=t=>(t||(t=nt()),{url:t,path:t.split("?")[0],params:C(t)||{},time:Date.now(),index:n.stack.length});["popstate","pushState","pushSingleState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=st();if(t==="popstate"){let i=n.stack[n.stack.length-2];if(!i||e!==i.path)n.stack.pop(),n.stack.push(y(""));else if(n.stack.pop(),n.stack.length===0){let c=y("");n.stack.push(c)}}let r=n.stack[n.stack.length-1];et.forEach(i=>{i(r?r.path:"",t,n.stack)})})});var Tt=t=>{if(n.stack.length==1)return"";n.stack.pop(),n.stack.length||n.stack.push(y(""));let r=n.stack[n.stack.length-1],i=r.path;return n.useHash&&(i="/#"+r.path),i=ot(i,{...C(r.url),...t}),r.params=C(i)||{},r.url=i,i},Pt=async(t,e)=>{for(let r of L)t=await Promise.resolve(r(t,R(t)));n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),e?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},_t=async t=>{for(let r of L)t=await Promise.resolve(r(t,R(t)));let e=y(t);n.stack=n.stack.filter(r=>r.path!==e.path),n.stack.push(e),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushSingleState"))},Ct=async t=>{for(let e of L)t=await Promise.resolve(e(t,R(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Lt=(t,e)=>{let r=Tt(t);r!=""&&(history.replaceState(null,"",r),e?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},Rt=t=>{n.stack=[y(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function Ut(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function R(t){return t.split("?")[0]}function st(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function nt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function ot(t,e){if(e){let r={};Object.keys(e).forEach(c=>{let v=e[c];v!==void 0&&v!==""&&(r[c]=v)});let i=new URLSearchParams(r).toString();return i?t+"?"+i:t}return t}function C(t){let[e,r]=t.split("#"),i=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),c={},v=!1;for(let[P,E]of i.entries())v=!0,E!==void 0&&E!==""&&(c[P]=E);if(!!v)return c}var n={search:Ut,nowUrl:st,urlToPath:R,nowFullUrl:nt,push:Pt,pushSingle:_t,replace:Ct,goBack:Lt,clearTo:Rt,listen:bt,beforeChange:Et,searchUrlToObject:C,parasmUrl:ot,onLastBack:t=>t.url,newStack:y,stack:[],useHash:!1};var z=require("solid-js/web"),At=(0,z.template)("<div>Not found page</div>",2),Ht=(0,z.template)("<div></div>",2),l={navigationDuration:0,className:"",notFound:{async:!0,render:()=>At.cloneNode(!0)},fallback:Ht.cloneNode(!0)};var T=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var A=require("solid-js");function Bt(t,e,r){let[i,c]=(0,A.createSignal)(t[e]||r);return(0,A.createEffect)(()=>{c(t[e]||r)}),[i,c]}var H=(t,e=260)=>{if(Object.assign(l,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},Nt={moveTop:T,moveLeft:U,scale:M},Dt=(t,e=150)=>{if(t==="none"){l.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?H(T(e),e+10):H(window.innerWidth>window.innerHeight?T(e):U(e+10),260):H(Nt[t](e),e+10)};var jt=(0,at.template)("<div></div>",2);var k="solid-router-stack-now",I="solid-router-stack-before",Ft="solid-router-stack-leave",b="solid-router-stack-after",Ot=t=>{let e={...t},[r,i]=(0,p.createRoot)(()=>(0,p.createSignal)([])),c=o=>{let[s,a]=(0,p.createSignal)(o.path),[g,$]=(0,p.createSignal)(""),[_,F]=(0,p.createSignal)(!0),[O,K]=(0,p.createSignal)(!1),[W,d]=(0,p.createSignal)(o.params);return{path:s,setPath:a,css:g,setCss:$,stackTop:_,setStackTop:F,params:W,setParams:d,stackShow:O,setStackShow:K}},v=()=>{let o=r(),s=o[o.length-1];s&&s.setStackTop(!1);let a=n.stack[n.stack.length-1],g=c(a);i([...r().filter($=>$.path()!==a.path),g])},P=()=>{let o=r(),s=o[o.length-1];s&&s.setStackTop(!1);let a=n.stack[n.stack.length-1],g=c(a);i([...r(),g])},E=()=>{let o=n.stack[n.stack.length-1],s=r();if(s.length>1){let a=s[s.length-2];a.setStackTop(!0),a.setPath(o.path),a.setParams(o.params),i([...s])}setTimeout(()=>{s.pop(),i([...s])},l.navigationDuration)},ft=()=>{let o=r();o.pop();let s=n.stack[n.stack.length-1],a=c(s);a.setStackShow(!0),i([...o,a])},ut=()=>{i([]),P()},f=o=>{if(l.navigationDuration==0)return;let s=r(),a=s[s.length-1];a&&a.setCss(o)},x=o=>{if(l.navigationDuration==0)return;let s=r(),a=s[s.length-2];a&&a.setCss(o)},w=o=>{let s=r(),a=s[s.length-1];a&&a.setStackShow(o)},S=o=>{let s=r(),a=s[s.length-2];a&&a.setStackShow(o)},N=0,h=!1;n.listen((o,s)=>{let a=n.stack.length;s==="pushSingleState"?(v(),h?(w(!0),S(!1),f(k),x(b)):(w(!0),setTimeout(()=>{S(!1)},l.navigationDuration),f(I),requestAnimationFrame(()=>{x(b),f(k)}))):s==="clearState"?(ut(),h?(w(!0),S(!1),f(k),x(b)):(w(!0),setTimeout(()=>{S(!1)},l.navigationDuration),f(I),requestAnimationFrame(()=>{x(b),f(k)}))):a>N?(P(),h?(w(!0),S(!1),f(k),x(b)):(w(!0),setTimeout(()=>{S(!1)},l.navigationDuration),f(I),requestAnimationFrame(()=>{x(b),f(k)}))):N!==a&&a>=1?(w(!0),S(!0),f(Ft),x(k),E(),h?f(k):setTimeout(()=>{f(k)},l.navigationDuration)):(w(!0),S(!0),ft(),f(k)),N=a,h&&requestAnimationFrame(()=>{h=!1})});let D=!1,ht=(o,s)=>{s&&(h=!0),n.goBack(o,D)},X=o=>{if(o.async)o.Component=o.render;else{let s=(0,p.lazy)(o.render);o.Component=a=>(0,B.createComponent)(s,a)}o.push=(s,a)=>{a&&(h=!0),n.push(n.parasmUrl(o.path,s),D)},o.pushSingle=(s,a)=>{a&&(h=!0),n.pushSingle(n.parasmUrl(o.path,s))},o.replace=(s,a)=>{a&&(h=!0),n.replace(n.parasmUrl(o.path,s))},o.clearTo=(s,a)=>{a&&(h=!0),n.clearTo(n.parasmUrl(o.path,s))}};X(l.notFound),Object.keys(e).forEach(o=>{let s=e[o];X(s)});let j={},Y=[];Object.keys(e).map(o=>{let s=e[o];s&&(j[s.path]=s,s.sync||Y.push(s))});function mt(o){o.preloadAll?Y.forEach(s=>{s.render().then(a=>{s.Component=a.default,s.sync=!0})}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(s=>{let a=e[s];a&&!a.sync&&a.render().then(g=>{a.Component=g.default,a.sync=!0})})},200)}return{...e,goBack:ht,Routers:({root:o,hash:s,ignoreFull:a,virtualHistory:g})=>{n.useHash=!!s,D=!!g;let $=n.nowUrl(),_=n.searchUrlToObject(n.nowFullUrl());h=!0,$!=="/"&&$!==o.path?(o.push(void 0,!0),(j[$]||l.notFound).push({..._})):o.push(_,!0);let[F,O]=(0,p.createSignal)(typeof window<"u"?window.innerWidth:0),[K,W]=(0,p.createSignal)(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{O(window.innerWidth),W(window.innerHeight)}),(0,B.createComponent)(p.For,{get each(){return r()},children:(d,dt)=>{let G=j[d.path()]||l.notFound;mt(G);let kt=G.Component;return(()=>{let m=jt.cloneNode(!0);return m.style.setProperty("position","fixed"),m.style.setProperty("top","0px"),m.style.setProperty("left","0px"),(0,lt.insert)(m,(0,B.createComponent)(kt,(0,pt.mergeProps)({get stackLength(){return r().length},get stackTop(){return d.stackTop()},get stackShow(){return d.stackShow()}},()=>d.params()))),(0,ct.effect)(u=>{let J=d.path(),gt={[d.css()]:!0,[l.className]:!0},Q=d.stackTop()?"auto":"none",V=dt()*10,Z=a?void 0:F()+"px",tt=a?void 0:K()+"px";return J!==u._v$&&(0,it.setAttribute)(m,"data-path",u._v$=J),u._v$2=(0,rt.classList)(m,gt,u._v$2),Q!==u._v$3&&m.style.setProperty("pointer-events",u._v$3=Q),V!==u._v$4&&m.style.setProperty("z-index",u._v$4=V),Z!==u._v$5&&m.style.setProperty("width",u._v$5=Z),tt!==u._v$6&&m.style.setProperty("height",u._v$6=tt),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),m})()}})}}};
//# sourceMappingURL=index.js.map
