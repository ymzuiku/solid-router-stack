"use strict";var q=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var wt=Object.getOwnPropertyNames;var St=Object.prototype.hasOwnProperty;var yt=(t,e)=>{for(var a in e)q(t,a,{get:e[a],enumerable:!0})},xt=(t,e,a,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of wt(e))!St.call(t,i)&&i!==a&&q(t,i,{get:()=>e[i],enumerable:!(c=gt(e,i))||c.enumerable});return t};var $t=t=>xt(q({},"__esModule",{value:!0}),t);var Kt={};yt(Kt,{createPropsSignal:()=>Bt,createRouters:()=>Ot,historyProxy:()=>n,moveLeftCss:()=>A,moveTopCss:()=>T,scaleCss:()=>M,setCustomNavigationAnimation:()=>B,setNavigationAnimation:()=>Dt,stackOptions:()=>l});module.exports=$t(Kt);var at=require("solid-js/web"),rt=require("solid-js/web"),ct=require("solid-js/web"),it=require("solid-js/web"),lt=require("solid-js/web"),pt=require("solid-js/web"),P=require("solid-js/web"),p=require("solid-js");var et=[],bt=t=>{et.push(t)},R=[],Et=t=>{R.push(t)},S=t=>(t||(t=nt()),{url:t,path:t.split("?")[0],params:L(t)||{},time:Date.now(),index:n.stack.length});["popstate","pushState","moveState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=st();if(t==="popstate"){let c=n.stack[n.stack.length-2];if(!c||e!==c.path)n.stack.pop(),n.stack.push(S(""));else if(n.stack.pop(),n.stack.length===0){let i=S("");n.stack.push(i)}}let a=n.stack[n.stack.length-1];et.forEach(c=>{c(a?a.path:"",t,n.stack)})})});var Tt=t=>{if(n.stack.length==1)return"";n.stack.pop(),n.stack.length||n.stack.push(S(""));let a=n.stack[n.stack.length-1],c=a.path;return n.useHash&&(c="/#"+a.path),c=ot(c,{...L(a.url),...t}),a.params=L(c)||{},a.url=c,c},Pt=async(t,e)=>{for(let a of R)t=await Promise.resolve(a(t,U(t)));n.stack.push(S(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),e?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},_t=async t=>{for(let a of R)t=await Promise.resolve(a(t,U(t)));let e=S(t);n.stack=n.stack.filter(a=>a.path!==e.path),n.stack.push(e),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("moveState"))},Ct=async t=>{for(let e of R)t=await Promise.resolve(e(t,U(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(S(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Lt=(t,e)=>{let a=Tt(t);a!=""&&(history.replaceState(null,"",a),e?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},Rt=t=>{n.stack=[S(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function Ut(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function U(t){return t.split("?")[0]}function st(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function nt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function ot(t,e){if(e){let a={};Object.keys(e).forEach(i=>{let v=e[i];v!==void 0&&v!==""&&(a[i]=v)});let c=new URLSearchParams(a).toString();return c?t+"?"+c:t}return t}function L(t){let[e,a]=t.split("#"),c=new URLSearchParams([e.split("?")[1],a?a.split("?")[1]:""].join("&")),i={},v=!1;for(let[_,E]of c.entries())v=!0,E!==void 0&&E!==""&&(i[_]=E);if(!!v)return i}var n={search:Ut,nowUrl:st,urlToPath:U,nowFullUrl:nt,push:Pt,move:_t,replace:Ct,goBack:Lt,clearTo:Rt,listen:bt,beforeChange:Et,searchUrlToObject:L,parasmUrl:ot,onLastBack:t=>t.url,newStack:S,stack:[],useHash:!1};var z=require("solid-js/web"),At=(0,z.template)("<div>Not found page</div>",2),Ht=(0,z.template)("<div></div>",2),l={navigationDuration:0,className:"",notFound:{async:!0,render:()=>At.cloneNode(!0)},fallback:Ht.cloneNode(!0)};var T=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},A=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var H=require("solid-js");function Bt(t,e,a){let[c,i]=(0,H.createSignal)(t[e]||a);return(0,H.createEffect)(()=>{i(t[e]||a)}),[c,i]}var B=(t,e=260)=>{if(Object.assign(l,{navigationDuration:e}),typeof window<"u"){let a=document.getElementById("solid-router-stack-css");if(a)a.innerHTML=t;else{let c=document.createElement("style");c.id="solid-router-stack-css",c.innerHTML=t,document.head.append(c)}}},Nt={moveTop:T,moveLeft:A,scale:M},Dt=(t,e=150)=>{if(t==="none"){l.navigationDuration=0;let a=document.getElementById("solid-router-stack-css");a&&a.remove()}else t==="auto"?typeof window>"u"?B(T(e),e+10):B(window.innerWidth>window.innerHeight?T(e):A(e+10),260):B(Nt[t](e),e+10)};var jt=(0,at.template)("<div></div>",2);var k="solid-router-stack-now",I="solid-router-stack-before",Ft="solid-router-stack-leave",b="solid-router-stack-after",Ot=t=>{let e={...t},[a,c]=(0,p.createRoot)(()=>(0,p.createSignal)([])),i=o=>{let[s,r]=(0,p.createSignal)(o.path),[x,$]=(0,p.createSignal)(""),[C,F]=(0,p.createSignal)(!0),[O,K]=(0,p.createSignal)(!1),[W,m]=(0,p.createSignal)(o.params);return{path:s,setPath:r,css:x,setCss:$,stackTop:C,setStackTop:F,params:W,setParams:m,stackShow:O,setStackShow:K}},v=()=>{let o=a(),s=o[o.length-1];s&&s.setStackTop(!1);let r=n.stack[n.stack.length-1],x=i(r);c([...a().filter($=>$.path()!==r.path),x])},_=()=>{let o=a(),s=o[o.length-1];s&&s.setStackTop(!1);let r=n.stack[n.stack.length-1],x=i(r);c([...a(),x])},E=()=>{let o=n.stack[n.stack.length-1],s=a();if(s.length>1){let r=s[s.length-2];r.setStackTop(!0),r.setPath(o.path),r.setParams(o.params),c([...s])}setTimeout(()=>{s.pop(),c([...s])},l.navigationDuration)},ft=()=>{let o=a();o.pop();let s=n.stack[n.stack.length-1],r=i(s);r.setStackShow(!0),c([...o,r])},ut=()=>{c([]),_()},f=o=>{if(l.navigationDuration==0)return;let s=a(),r=s[s.length-1];r&&r.setCss(o)},y=o=>{if(l.navigationDuration==0)return;let s=a(),r=s[s.length-2];r&&r.setCss(o)},g=o=>{let s=a(),r=s[s.length-1];r&&r.setStackShow(o)},w=o=>{let s=a(),r=s[s.length-2];r&&r.setStackShow(o)},N=0,u=!1;n.listen((o,s)=>{let r=n.stack.length;s==="moveState"?(v(),u?(g(!0),w(!1),f(k),y(b)):(g(!0),setTimeout(()=>{w(!1)},l.navigationDuration),f(I),requestAnimationFrame(()=>{y(b),f(k)}))):s==="clearState"?(ut(),u?(g(!0),w(!1),f(k),y(b)):(g(!0),setTimeout(()=>{w(!1)},l.navigationDuration),f(I),requestAnimationFrame(()=>{y(b),f(k)}))):r>N?(_(),u?(g(!0),w(!1),f(k),y(b)):(g(!0),setTimeout(()=>{w(!1)},l.navigationDuration),f(I),requestAnimationFrame(()=>{y(b),f(k)}))):N!==r&&r>=1?(g(!0),w(!0),f(Ft),y(k),E(),u?f(k):setTimeout(()=>{f(k)},l.navigationDuration)):(g(!0),w(!0),ft(),f(k)),N=r,u&&requestAnimationFrame(()=>{u=!1})});let D=!1,ht=(o,s)=>{u=!!s,n.goBack(o,D)},X=o=>{if(o.async)o.Component=o.render;else{let s=(0,p.lazy)(o.render);o.Component=r=>(0,P.createComponent)(p.Suspense,{get fallback(){return l.fallback},get children(){return(0,P.createComponent)(s,r)}})}o.push=(s,r)=>{u=!!r,n.push(n.parasmUrl(o.path,s),D)},o.move=(s,r)=>{u=!!r,n.move(n.parasmUrl(o.path,s))},o.replace=(s,r)=>{u=!!r,n.replace(n.parasmUrl(o.path,s))},o.clearTo=(s,r)=>{u=!!r,n.clearTo(n.parasmUrl(o.path,s))}};X(l.notFound),Object.keys(e).forEach(o=>{let s=e[o];X(s)});let j={},Y=[];Object.keys(e).map(o=>{let s=e[o];s&&(j[s.path]=s,s.async||Y.push(s))});function mt(o){o.preloadAll?Y.forEach(s=>{s.render()}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(s=>{let r=e[s];r&&!r.async&&r.render()})},200)}return{...e,goBack:ht,Routers:({root:o,hash:s,ignoreFull:r,virtualHistory:x})=>{n.useHash=!!s,D=!!x;let $=n.nowUrl(),C=n.searchUrlToObject(n.nowFullUrl());if(u=!0,$!=="/"&&$!==o.path){o.push();let m=j[$]||l.notFound;u=!0,m.push({...C})}else o.push(C);let[F,O]=(0,p.createSignal)(typeof window<"u"?window.innerWidth:0),[K,W]=(0,p.createSignal)(typeof window<"u"?window.innerHeight:0);return r||typeof window<"u"&&window.addEventListener("resize",()=>{O(window.innerWidth),W(window.innerHeight)}),(0,P.createComponent)(p.For,{get each(){return a()},children:(m,dt)=>{let G=j[m.path()]||l.notFound;mt(G);let kt=G.Component;return(()=>{let d=jt.cloneNode(!0);return d.style.setProperty("position","fixed"),d.style.setProperty("top","0px"),d.style.setProperty("left","0px"),(0,lt.insert)(d,(0,P.createComponent)(kt,(0,pt.mergeProps)({get stackLength(){return a().length},get stackTop(){return m.stackTop()},get stackShow(){return m.stackShow()}},()=>m.params()))),(0,it.effect)(h=>{let J=m.path(),vt={[m.css()]:!0,[l.className]:!0},Q=m.stackTop()?"auto":"none",V=dt()*10,Z=r?void 0:F()+"px",tt=r?void 0:K()+"px";return J!==h._v$&&(0,ct.setAttribute)(d,"data-path",h._v$=J),h._v$2=(0,rt.classList)(d,vt,h._v$2),Q!==h._v$3&&d.style.setProperty("pointer-events",h._v$3=Q),V!==h._v$4&&d.style.setProperty("z-index",h._v$4=V),Z!==h._v$5&&d.style.setProperty("width",h._v$5=Z),tt!==h._v$6&&d.style.setProperty("height",h._v$6=tt),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),d})()}})}}};
//# sourceMappingURL=index.js.map
