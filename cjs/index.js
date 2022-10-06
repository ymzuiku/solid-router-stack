"use strict";var q=Object.defineProperty;var vt=Object.getOwnPropertyDescriptor;var wt=Object.getOwnPropertyNames;var St=Object.prototype.hasOwnProperty;var yt=(t,e)=>{for(var r in e)q(t,r,{get:e[r],enumerable:!0})},xt=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of wt(e))!St.call(t,c)&&c!==r&&q(t,c,{get:()=>e[c],enumerable:!(i=vt(e,c))||i.enumerable});return t};var $t=t=>xt(q({},"__esModule",{value:!0}),t);var Kt={};yt(Kt,{createPropsSignal:()=>Bt,createRouters:()=>Ot,historyProxy:()=>o,moveLeftCss:()=>H,moveTopCss:()=>C,scaleCss:()=>M,setCustomNavigationAnimation:()=>N,setNavigationAnimation:()=>Dt,stackOptions:()=>l});module.exports=$t(Kt);var at=require("solid-js/web"),rt=require("solid-js/web"),it=require("solid-js/web"),ct=require("solid-js/web"),lt=require("solid-js/web"),pt=require("solid-js/web"),D=require("solid-js/web"),f=require("solid-js");var et=[],bt=t=>{et.push(t)},U=[],Et=t=>{U.push(t)},$=t=>(t||(t=nt()),{url:t,path:t.split("?")[0],params:R(t)||{},time:Date.now(),index:o.stack.length});["popstate","pushState","pushSingleState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=st();if(t==="popstate"){let i=o.stack[o.stack.length-2];if(!i||e!==i.path)o.stack.pop(),o.stack.push($(""));else if(o.stack.pop(),o.stack.length===0){let c=$("");o.stack.push(c)}}let r=o.stack[o.stack.length-1];et.forEach(i=>{i(r?r.path:"",t,o.stack)})})});var Tt=t=>{if(o.stack.length==1)return"";o.stack.pop(),o.stack.length||o.stack.push($(""));let r=o.stack[o.stack.length-1],i=r.path;return o.useHash&&(i="/#"+r.path),i=ot(i,{...R(r.url),...t}),r.params=R(i)||{},r.url=i,i},Pt=async(t,e)=>{for(let r of U)t=await Promise.resolve(r(t,A(t)));o.stack.push($(t)),o.useHash&&(t="/#"+t),history.pushState(null,"",t),e?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},_t=async t=>{for(let r of U)t=await Promise.resolve(r(t,A(t)));let e=$(t);o.stack=o.stack.filter(r=>r.path!==e.path),o.stack.push(e),o.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushSingleState"))},Ct=async t=>{for(let e of U)t=await Promise.resolve(e(t,A(t)));o.stack.length>0&&o.stack.pop(),o.stack.push($(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Lt=(t,e)=>{let r=Tt(t);r!=""&&(history.replaceState(null,"",r),e?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},Rt=t=>{o.stack=[$(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function Ut(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function A(t){return t.split("?")[0]}function st(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function nt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function ot(t,e){if(e){let r={};Object.keys(e).forEach(c=>{let v=e[c];v!==void 0&&v!==""&&(r[c]=v)});let i=new URLSearchParams(r).toString();return i?t+"?"+i:t}return t}function R(t){let[e,r]=t.split("#"),i=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),c={},v=!1;for(let[L,_]of i.entries())v=!0,_!==void 0&&_!==""&&(c[L]=_);if(!!v)return c}var o={search:Ut,nowUrl:st,urlToPath:A,nowFullUrl:nt,push:Pt,pushSingle:_t,replace:Ct,goBack:Lt,clearTo:Rt,listen:bt,beforeChange:Et,searchUrlToObject:R,parasmUrl:ot,onLastBack:t=>t.url,newStack:$,stack:[],useHash:!1};var z=require("solid-js/web"),At=(0,z.template)("<div>Not found page</div>",2),Ht=(0,z.template)("<div></div>",2),l={navigationDuration:0,className:"",notFound:{async:!0,render:()=>At.cloneNode(!0)},fallback:Ht.cloneNode(!0)};var C=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var B=require("solid-js");function Bt(t,e,r){let[i,c]=(0,B.createSignal)(t[e]||r);return(0,B.createEffect)(()=>{c(t[e]||r)}),[i,c]}var N=(t,e=260)=>{if(Object.assign(l,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},Nt={moveTop:C,moveLeft:H,scale:M},Dt=(t,e=150)=>{if(t==="none"){l.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?N(C(e),e+10):N(window.innerWidth>window.innerHeight?C(e):H(e+10),260):N(Nt[t](e),e+10)};var jt=(0,at.template)("<div></div>",2);var g="solid-router-stack-now",I="solid-router-stack-before",Ft="solid-router-stack-leave",P="solid-router-stack-after",Ot=t=>{let e={...t},[r,i]=(0,f.createRoot)(()=>(0,f.createSignal)([])),c=n=>{let[s,a]=(0,f.createSignal)(n.path),[p,E]=(0,f.createSignal)(""),[y,x]=(0,f.createSignal)(!0),[T,K]=(0,f.createSignal)(!1),[W,k]=(0,f.createSignal)(n.params);return{path:s,setPath:a,css:p,setCss:E,stackTop:y,setStackTop:x,params:W,setParams:k,stackShow:T,setStackShow:K}},v=()=>{let n=r(),s=n[n.length-1];s&&s.setStackTop(!1);let a=o.stack[o.stack.length-1],p,E=n.length,y=0;for(let x=0;x<E;x++){let T=n[x-y];T.path()===a.path&&(p=T,n.splice(x-y,1),y++)}p?p.setParams(a.params):p=c(a),p.setStackTop(!0),p.setStackShow(!0),i([...n,p])},L=()=>{let n=r(),s=n[n.length-1];s&&s.setStackTop(!1);let a=o.stack[o.stack.length-1],p=c(a);i([...r(),p])},_=()=>{let n=o.stack[o.stack.length-1],s=r();if(s.length>1){let a=s[s.length-2];a.setStackTop(!0),a.setPath(n.path),a.setParams(n.params),i([...s])}setTimeout(()=>{s.pop(),i([...s])},l.navigationDuration)},ft=()=>{let n=r();n.pop();let s=o.stack[o.stack.length-1],a=c(s);a.setStackShow(!0),i([...n,a])},ut=()=>{i([]),L()},u=n=>{if(l.navigationDuration==0)return;let s=r(),a=s[s.length-1];a&&a.setCss(n)},b=n=>{if(l.navigationDuration==0)return;let s=r(),a=s[s.length-2];a&&a.setCss(n)},w=n=>{let s=r(),a=s[s.length-1];a&&a.setStackShow(n)},S=n=>{let s=r(),a=s[s.length-2];a&&a.setStackShow(n)},j=0,m=!1;o.listen((n,s)=>{let a=o.stack.length;s==="pushSingleState"?(v(),m?(w(!0),S(!1),u(g),b(P)):(w(!0),setTimeout(()=>{S(!1)},l.navigationDuration),u(I),requestAnimationFrame(()=>{b(P),u(g)}))):s==="clearState"?(ut(),m?(w(!0),S(!1),u(g),b(P)):(w(!0),setTimeout(()=>{S(!1)},l.navigationDuration),u(I),requestAnimationFrame(()=>{b(P),u(g)}))):a>j?(L(),m?(w(!0),S(!1),u(g),b(P)):(w(!0),setTimeout(()=>{S(!1)},l.navigationDuration),u(I),requestAnimationFrame(()=>{b(P),u(g)}))):j!==a&&a>=1?(w(!0),S(!0),u(Ft),b(g),_(),m?u(g):setTimeout(()=>{u(g)},l.navigationDuration)):(w(!0),S(!0),ft(),u(g)),j=a,m&&requestAnimationFrame(()=>{m=!1})});let F=!1,ht=(n,s)=>{s&&(m=!0),o.goBack(n,F)},X=n=>{if(n.async)n.Component=n.render;else{let s=(0,f.lazy)(n.render);n.Component=a=>(0,D.createComponent)(s,a)}n.push=(s,a)=>{a&&(m=!0),o.push(o.parasmUrl(n.path,s),F)},n.pushSingle=(s,a)=>{a&&(m=!0),o.pushSingle(o.parasmUrl(n.path,s))},n.replace=(s,a)=>{a&&(m=!0),o.replace(o.parasmUrl(n.path,s))},n.clearTo=(s,a)=>{a&&(m=!0),o.clearTo(o.parasmUrl(n.path,s))}};X(l.notFound),Object.keys(e).forEach(n=>{let s=e[n];X(s)});let O={},Y=[];Object.keys(e).map(n=>{let s=e[n];s&&(O[s.path]=s,s.sync||Y.push(s))});function mt(n){n.preloadAll?Y.forEach(s=>{s.render().then(a=>{s.Component=a.default,s.sync=!0})}):n.preload&&n.preload.length&&setTimeout(()=>{n.preload.forEach(s=>{let a=e[s];a&&!a.sync&&a.render().then(p=>{a.Component=p.default,a.sync=!0})})},200)}return{...e,goBack:ht,Routers:({root:n,hash:s,ignoreFull:a,virtualHistory:p})=>{o.useHash=!!s,F=!!p;let E=o.nowUrl(),y=o.searchUrlToObject(o.nowFullUrl());m=!0,E!=="/"&&E!==n.path?(n.push(void 0,!0),(O[E]||l.notFound).push({...y})):n.push(y,!0);let[x,T]=(0,f.createSignal)(typeof window<"u"?window.innerWidth:0),[K,W]=(0,f.createSignal)(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{T(window.innerWidth),W(window.innerHeight)}),(0,D.createComponent)(f.For,{get each(){return r()},children:(k,dt)=>{let G=O[k.path()]||l.notFound;mt(G);let kt=G.Component;return(()=>{let d=jt.cloneNode(!0);return d.style.setProperty("position","fixed"),d.style.setProperty("top","0px"),d.style.setProperty("left","0px"),(0,lt.insert)(d,(0,D.createComponent)(kt,(0,pt.mergeProps)({get stackLength(){return r().length},get stackTop(){return k.stackTop()},get stackShow(){return k.stackShow()}},()=>k.params()))),(0,ct.effect)(h=>{let J=k.path(),gt={[k.css()]:!0,[l.className]:!0},Q=k.stackTop()?"auto":"none",V=dt()*10,Z=a?void 0:x()+"px",tt=a?void 0:K()+"px";return J!==h._v$&&(0,it.setAttribute)(d,"data-path",h._v$=J),h._v$2=(0,rt.classList)(d,gt,h._v$2),Q!==h._v$3&&d.style.setProperty("pointer-events",h._v$3=Q),V!==h._v$4&&d.style.setProperty("z-index",h._v$4=V),Z!==h._v$5&&d.style.setProperty("width",h._v$5=Z),tt!==h._v$6&&d.style.setProperty("height",h._v$6=tt),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),d})()}})}}};
//# sourceMappingURL=index.js.map
