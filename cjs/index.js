"use strict";var O=Object.defineProperty;var vt=Object.getOwnPropertyDescriptor;var wt=Object.getOwnPropertyNames;var yt=Object.prototype.hasOwnProperty;var St=(t,e)=>{for(var o in e)O(t,o,{get:e[o],enumerable:!0})},$t=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of wt(e))!yt.call(t,l)&&l!==o&&O(t,l,{get:()=>e[l],enumerable:!(i=vt(e,l))||i.enumerable});return t};var bt=t=>$t(O({},"__esModule",{value:!0}),t);var Kt={};St(Kt,{createPropsSignal:()=>jt,createRouters:()=>Ft,historyProxy:()=>r,moveLeftCss:()=>K,moveTopCss:()=>F,scaleCss:()=>W});module.exports=bt(Kt);var pt=require("solid-js/web"),Y=require("solid-js/web"),ut=require("solid-js/web"),ft=require("solid-js/web"),mt=require("solid-js/web"),dt=require("solid-js/web"),ht=require("solid-js/web"),$=require("solid-js/web"),p=require("solid-js");var st=[],xt=t=>{st.push(t)},nt=0,E=[],Pt=t=>{E.push(t)},y=(t,e={})=>(nt+=1,{url:t,id:nt,path:t.split("?")[0],params:P(t)||{},time:Date.now(),index:r.stack.length,meta:e}),ot="",x;["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=it();if(t==="popstate")if(e===ot){let i=ct(),l=y(i),h=r.stack[r.stack.length-1];h.url=l.url,h.params=l.params}else x=r.stack.pop();let o=r.stack[r.stack.length-1];st.forEach(i=>{i(t,o,x,r.stack)}),ot=e})});var Et=async(t,e={})=>{for(let i of E)t=await Promise.resolve(i(t,_(t)));let o=y(t);return o.meta=e,r.stack.push(o),r.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState")),o},_t=async(t,e={})=>{for(let i of E)t=await Promise.resolve(i(t,_(t)));let o=y(t);return o.meta=e,r.stack.push(o),r.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState")),o},rt=async(t,e={})=>{for(let i of E)t=await Promise.resolve(i(t,_(t)));r.stack.length>0&&(x=r.stack.pop());let o=y(t);return o.meta=e,r.stack.push(o),r.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState")),o},at=t=>{if(r.stack.length==1)return null;x=r.stack.pop();let o=r.stack[r.stack.length-1],i=o.path;return r.useHash&&(i="/#"+o.path),i=lt(i,{...P(o.url),...t}),o.params=P(i)||{},o.url=i,o},Rt=(t,e={})=>{let o=at(t);return o?(Object.assign(o.meta,e),history.replaceState(null,"",o.url),window.dispatchEvent(new Event("backState")),o):null},Tt=(t,e={})=>{let o=at(t);return o?(Object.assign(o.meta,e),history.replaceState(null,"",o.url),window.dispatchEvent(new Event("replaceState")),o):null},Ct=async(t,e={})=>{let o=y(t);return o.meta=e,r.stack=[o],await rt(t,e)};function Ut(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function _(t){return t?t.split("?")[0]:"/"}function it(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function ct(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function lt(t,e){if(e){let o={};Object.keys(e).forEach(l=>{let h=e[l];h!==void 0&&h!==""&&(o[l]=h)});let i=new URLSearchParams(o).toString();return i?t+"?"+i:t}return t}function P(t){let[e,o]=t.split("#"),i=new URLSearchParams([e.split("?")[1],o?o.split("?")[1]:""].join("&")),l={},h=!1;for(let[T,k]of i.entries())h=!0,k!==void 0&&k!==""&&(l[T]=k);if(!!h)return l}var r={search:Ut,nowUrl:it,urlToPath:_,nowFullUrl:ct,push:Et,pushNotHistory:_t,replace:rt,goBack:Rt,gobackNotHistory:Tt,clearTo:Ct,listen:xt,beforeChange:Pt,searchUrlToObject:P,parasmUrl:lt,onLastBack:t=>t.url,newStack:y,stack:[],useHash:!1};var F=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now-top {
  ${e}
}
.solid-router-stack-before-top {
  ${e}
  will-change: transform, opacity;
  transform: translateY(7vh);
}
.solid-router-stack-leave-top {
  ${e}
  will-change: transform, opacity;
  opacity: 0;
  transform: translateY(15vh);
  pointer-events: none !important;
}
.solid-router-stack-after-top {
  ${e}
  will-change: transform, opacity;
  transform: translateY(-5vh);
  pointer-events: none !important;
}
`},K=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now-left {
  ${e}
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-before-left {
  ${e}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-leave-left {
  ${e}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: 0px -10px 20px rgba(0,0,0,0.12);
  pointer-events: none !important;
}
.solid-router-stack-after-left {
  ${e}
  will-change: transform, opacity;
  transform: translateX(-30vw);
  pointer-events: none !important;
}
`},W=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now-scale {
  ${e}
}
.solid-router-stack-before-scale {
  ${e}
  will-change: transform, opacity;
  opacity: 0;
  transform: scale(0.8);
}
.solid-router-stack-leave-scale {
  ${e}
  will-change: transform, opacity;
  transform: scale(0.8);
  opacity: 0;
  pointer-events: none !important;
}
.solid-router-stack-after-scale {
  ${e}
  will-change: transform, opacity;
  transform: scale(1.05);
  pointer-events: none !important;
}
`};var Ht=()=>{typeof window<"u"&&[K,F,W].forEach(t=>{let e=document.createElement("style");e.id="solid-router-stack-css",e.innerHTML=t(240),document.head.append(e)})};Ht();var z=require("solid-js/web"),Lt=(0,z.template)("<div>Not found page</div>",2),Nt=(0,z.template)("<div></div>",2),w={navigationDuration:250,notFound:{async:!0,render:()=>Lt.cloneNode(!0)},fallback:Nt.cloneNode(!0)};var R=require("solid-js");function jt(t,e,o){let[i,l]=(0,R.createSignal)(t[e]||o);return(0,R.createEffect)(()=>{l(t[e]||o)}),[i,l]}var Bt=(0,pt.template)("<div></div>",2);var X="solid-router-stack-now-",Dt="solid-router-stack-before-",At="solid-router-stack-leave-",Ot="solid-router-stack-after-",Ft=t=>{let e={...t},[o,i]=(0,p.createRoot)(()=>(0,p.createSignal)([])),l=()=>{let s=o(),n=s[s.length-1];n&&n.setTop(!1);let a=r.stack[r.stack.length-1],[c,v]=(0,p.createSignal)(a.url),[m,g]=(0,p.createSignal)(a.path),[N,j]=(0,p.createSignal)(""),[B,d]=(0,p.createSignal)(0),[D,S]=(0,p.createSignal)(!0),[b,A]=(0,p.createSignal)(a.params);i([...o(),{url:c,setUrl:v,path:m,setPath:g,css:N,setCss:j,top:D,setTop:S,params:b,setParams:A,duration:B,setDuration:d}])},h=s=>{let n=r.stack[r.stack.length-1],a=o();if(a.length>1){let c=a[a.length-2];c.setTop(!0),c.setUrl(n.url),c.setPath(n.path),c.setParams(n.params),i([...a])}setTimeout(()=>{a.pop(),i([...a])},s)},T=()=>{let s=r.stack[r.stack.length-1],n=o(),a=n[n.length-1];a.setUrl(s.url),a.setParams(s.params),i([...n])},k=s=>{if(w.navigationDuration==0)return;let n=o(),a=n[n.length-1];a&&a.setCss(s)},M=s=>{if(w.navigationDuration==0)return;let n=o(),a=n[n.length-2];a&&a.setCss(s)},C=s=>{if(w.navigationDuration==0)return;let n=o(),a=n[n.length-1];a&&a.setDuration(s);let c=n[n.length-2];c&&c.setDuration(s)},U=0;r.listen((s,n,a)=>{let c=r.stack.length,v=a&&(s==="popstate"||s==="backState"),m=v?a.meta.animation:n.meta.animation,g=(v?a.meta.duration:n.meta.duration)||0;c>U?(l(),C(g),!m||!g?k(""):(k(Dt+m),requestAnimationFrame(()=>{M(Ot+m),k(X+m)}))):U!==c&&c>=1?(h(g),C(g),!m||!g?k(""):(k(At+m),M(X+m),setTimeout(()=>{k(X+m)},g))):(T(),C(0),k("")),U=c});let H=!1,kt=s=>{let n;return H?n=r.gobackNotHistory(s):n=r.goBack(s),n&&s&&(n.meta.animation=s.animation,n.meta.durtaion=s.durtaion),n},q=s=>{s.async?s.Component=s.render:s.Component=(0,p.lazy)(s.render),s.push=async(n,a)=>{let c;return H?c=await r.pushNotHistory(n?r.parasmUrl(s.path,n):s.path,a):c=await r.push(n?r.parasmUrl(s.path,n):s.path,a),n&&(c.meta.animation=n.animation,c.meta.durtaion=n.duration),c},s.replace=async(n,a)=>{let c=await r.replace(n?r.parasmUrl(s.path,n):s.path,a);return n&&(c.meta.animation=n.animation,c.meta.durtaion=n.duration),c},s.clearTo=async(n,a)=>{let c=await r.clearTo(n?r.parasmUrl(s.path,n):s.path,a);return n&&(c.meta.animation=n.animation,c.meta.durtaion=n.duration),c}};q(w.notFound),Object.keys(e).forEach(s=>{let n=e[s];q(n)});let L={},G=[];Object.keys(e).map(s=>{let n=e[s];n&&(L[n.path]=n,n.async||G.push(n))});function gt(s){s.preloadAll?G.forEach(n=>{n.render()}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(n=>{let a=e[n];a&&!a.async&&a.render()})},200)}return{...e,goBack:kt,Routers:({root:s,hash:n,ignoreFull:a,virtualHistory:c})=>{r.useHash=!!n,H=!!c;let v=r.nowUrl(),m=r.searchUrlToObject(r.nowFullUrl());v!=="/"&&v!==s.path?(s.push(),(L[v]||w.notFound).push({params:m})):s.push(m);let[g,N]=(0,p.createSignal)(typeof window<"u"?window.innerWidth:0),[j,B]=(0,p.createSignal)(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{N(window.innerWidth),B(window.innerHeight)}),(0,$.createComponent)(p.For,{get each(){return o()},children:(d,D)=>{let S=L[d.path()]||w.notFound;gt(S);let b=S.Component,A=()=>{let f=d.duration();return f?f+"ms":"none"};return(()=>{let f=Bt.cloneNode(!0);return f.style.setProperty("position","fixed"),f.style.setProperty("top","0px"),f.style.setProperty("left","0px"),(0,dt.insert)(f,(()=>{let u=(0,ht.memo)(()=>!!S.async,!0);return()=>u()?(0,$.createComponent)(b,(0,Y.mergeProps)({get stackTop(){return d.top()}},()=>d.params())):(0,$.createComponent)(p.Suspense,{get fallback(){return w.fallback},get children(){return(0,$.createComponent)(b,(0,Y.mergeProps)({get stackTop(){return d.top()}},()=>d.params()))}})})()),(0,mt.effect)(u=>{let I=d.path(),J=d.css(),Q=d.top()?"auto":"none",V=D()*10,Z=a?void 0:g()+"px",tt=a?void 0:j()+"px",et=A();return I!==u._v$&&(0,ft.setAttribute)(f,"data-path",u._v$=I),J!==u._v$2&&(0,ut.className)(f,u._v$2=J),Q!==u._v$3&&f.style.setProperty("pointer-events",u._v$3=Q),V!==u._v$4&&f.style.setProperty("z-index",u._v$4=V),Z!==u._v$5&&f.style.setProperty("width",u._v$5=Z),tt!==u._v$6&&f.style.setProperty("height",u._v$6=tt),et!==u._v$7&&f.style.setProperty("transition-duration",u._v$7=et),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),f})()}})}}};
