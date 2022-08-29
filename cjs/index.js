"use strict";var K=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var kt=Object.getOwnPropertyNames;var wt=Object.prototype.hasOwnProperty;var yt=(t,e)=>{for(var r in e)K(t,r,{get:e[r],enumerable:!0})},$t=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of kt(e))!wt.call(t,c)&&c!==r&&K(t,c,{get:()=>e[c],enumerable:!(a=gt(e,c))||a.enumerable});return t};var St=t=>$t(K({},"__esModule",{value:!0}),t);var Ft={};yt(Ft,{createPropsSignal:()=>Lt,createRouters:()=>Dt,historyProxy:()=>n,moveLeftCss:()=>_,moveTopCss:()=>$,scaleCss:()=>M,setCustomNavigationAnimation:()=>C,setNavigationAnimation:()=>At});module.exports=St(Ft);var lt=require("solid-js/web"),z=require("solid-js/web"),pt=require("solid-js/web"),ft=require("solid-js/web"),ut=require("solid-js/web"),mt=require("solid-js/web"),dt=require("solid-js/web"),S=require("solid-js/web"),p=require("solid-js");var st=[],xt=t=>{st.push(t)},E=[],bt=t=>{E.push(t)},g=t=>({url:t,path:t.split("?")[0],params:b(t)||{},time:Date.now(),index:n.stack.length}),et="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=rt();if(t==="popstate")if(e===et){let a=at(),c=g(a),d=n.stack[n.stack.length-1];d.url=c.url,d.params=c.params}else n.stack.pop();let r=n.stack[n.stack.length-1];st.forEach(a=>{a(r?r.path:"",t,n.stack)}),et=e})});var nt=t=>{if(n.stack.length==1)return"";n.stack.pop();let r=n.stack[n.stack.length-1],a=r.path;return n.useHash&&(a="/#"+r.path),a=it(a,{...b(r.url),...t}),r.params=b(a)||{},r.url=a,a},Et=async t=>{for(let e of E)t=await Promise.resolve(e(t,P(t)));n.stack.push(g(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},Pt=async t=>{for(let e of E)t=await Promise.resolve(e(t,P(t)));n.stack.push(g(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},ot=async t=>{for(let e of E)t=await Promise.resolve(e(t,P(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(g(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},_t=t=>{let e=nt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},Tt=t=>{let e=nt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},Ct=t=>{n.stack=[g(t)],ot(t)};function Ut(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function P(t){return t.split("?")[0]}function rt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function at(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function it(t,e){if(e){let r={};Object.keys(e).forEach(c=>{let d=e[c];d!==void 0&&d!==""&&(r[c]=d)});let a=new URLSearchParams(r).toString();return a?t+"?"+a:t}return t}function b(t){let[e,r]=t.split("#"),a=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),c={},d=!1;for(let[U,h]of a.entries())d=!0,h!==void 0&&h!==""&&(c[U]=h);if(!!d)return c}var n={search:Ut,nowUrl:rt,urlToPath:P,nowFullUrl:at,push:Et,pushNotHistory:Pt,replace:ot,goBack:_t,gobackNotHistory:Tt,clearTo:Ct,listen:xt,beforeChange:bt,searchUrlToObject:b,parasmUrl:it,onLastBack:t=>t.url,newStack:g,stack:[],useHash:!1};var W=require("solid-js/web"),Ht=(0,W.template)("<div>Not found page</div>",2),Rt=(0,W.template)("<div></div>",2),f={navigationDuration:0,background:"inherit",notFound:{async:!0,render:()=>Ht.cloneNode(!0)},fallback:Rt.cloneNode(!0)};var $=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},_=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var T=require("solid-js");function Lt(t,e,r){let[a,c]=(0,T.createSignal)(t[e]||r);return(0,T.createEffect)(()=>{c(t[e]||r)}),[a,c]}var C=(t,e=260)=>{if(Object.assign(f,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let a=document.createElement("style");a.id="solid-router-stack-css",a.innerHTML=t,document.head.append(a)}}},Nt={moveTop:$,moveLeft:_,scale:M},At=(t,e=150)=>{if(t==="none"){f.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?C($(e),e+10):C(window.innerWidth>window.innerHeight?$(e):_(e+10),260):C(Nt[t](e),e+10)};var Bt=(0,lt.template)("<div></div>",2);var k="solid-router-stack-now",jt="solid-router-stack-before",Ot="solid-router-stack-leave",ct="solid-router-stack-after",Dt=t=>{let e={...t},[r,a]=(0,p.createRoot)(()=>(0,p.createSignal)([])),c=()=>{let s=r(),o=s[s.length-1];o&&o.setTop(!1);let i=n.stack[n.stack.length-1],[A,w]=(0,p.createSignal)(i.url),[x,B]=(0,p.createSignal)(i.path),[j,O]=(0,p.createSignal)(""),[D,u]=(0,p.createSignal)(!0),[F,y]=(0,p.createSignal)(i.params);a([...r(),{url:A,setUrl:w,path:x,setPath:B,css:j,setCss:O,top:D,setTop:u,params:F,setParams:y}])},d=()=>{let s=n.stack[n.stack.length-1],o=r();if(o.length>1){let i=o[o.length-2];i.setTop(!0),i.setUrl(s.url),i.setPath(s.path),i.setParams(s.params),a([...o])}setTimeout(()=>{o.pop(),a([...o])},f.navigationDuration)},U=()=>{let s=n.stack[n.stack.length-1],o=r(),i=o[o.length-1];i.setUrl(s.url),i.setParams(s.params),a([...o])},h=s=>{if(f.navigationDuration==0)return;let o=r(),i=o[o.length-1];i&&i.setCss(s)},H=s=>{if(f.navigationDuration==0)return;let o=r(),i=o[o.length-2];i&&i.setCss(s)},R=0,v=!1;n.listen(()=>{let s=n.stack.length;s>R?(c(),v?(h(k),H(ct)):(h(jt),requestAnimationFrame(()=>{H(ct),h(k)}))):R!==s&&s>=1?(h(Ot),H(k),d(),v?h(k):setTimeout(()=>{h(k)},f.navigationDuration)):(U(),h(k)),R=s,v&&requestAnimationFrame(()=>{v=!1})});let L=!1,ht=s=>{L?n.gobackNotHistory(s):n.goBack(s)},I=s=>{s.async?s.Component=s.render:s.Component=(0,p.lazy)(s.render),s.push=o=>{L?n.pushNotHistory(n.parasmUrl(s.path,o)):n.push(n.parasmUrl(s.path,o))},s.replace=o=>{n.replace(n.parasmUrl(s.path,o))},s.clearTo=o=>{v=!0,n.clearTo(n.parasmUrl(s.path,o))}};I(f.notFound),Object.keys(e).forEach(s=>{let o=e[s];I(o)});let N={},X=[];Object.keys(e).map(s=>{let o=e[s];o&&(N[o.path]=o,o.async||X.push(o))});function vt(s){s.preloadAll?X.forEach(o=>{o.render()}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(o=>{let i=e[o];i&&!i.async&&i.render()})},200)}return{...e,goBack:ht,Routers:({root:s,hash:o,ignoreFull:i,virtualHistory:A})=>{n.useHash=!!o,L=!!A;let w=n.nowUrl(),x=n.searchUrlToObject(n.nowFullUrl());if(v=!0,w!=="/"&&w!==s.path){s.push();let u=N[w]||f.notFound;v=!0,u.push({...x})}else s.push(x);let[B,j]=(0,p.createSignal)(typeof window<"u"?window.innerWidth:0),[O,D]=(0,p.createSignal)(typeof window<"u"?window.innerHeight:0);return i||typeof window<"u"&&window.addEventListener("resize",()=>{j(window.innerWidth),D(window.innerHeight)}),(0,S.createComponent)(p.For,{get each(){return r()},children:(u,F)=>{let y=N[u.path()]||f.notFound;vt(y);let Y=y.Component;return(()=>{let m=Bt.cloneNode(!0);return m.style.setProperty("position","fixed"),m.style.setProperty("top","0px"),m.style.setProperty("left","0px"),(0,mt.insert)(m,(()=>{let l=(0,dt.memo)(()=>!!y.async,!0);return()=>l()?(0,S.createComponent)(Y,(0,z.mergeProps)({get stackTop(){return u.top()}},()=>u.params())):(0,S.createComponent)(p.Suspense,{get fallback(){return f.fallback},get children(){return(0,S.createComponent)(Y,(0,z.mergeProps)({get stackTop(){return u.top()}},()=>u.params()))}})})()),(0,ut.effect)(l=>{let q=u.path(),G=u.css(),J=u.top()?"auto":"none",Q=F()*10,V=i?void 0:B()+"px",Z=i?void 0:O()+"px",tt=f.background;return q!==l._v$&&(0,ft.setAttribute)(m,"data-path",l._v$=q),G!==l._v$2&&(0,pt.className)(m,l._v$2=G),J!==l._v$3&&m.style.setProperty("pointer-events",l._v$3=J),Q!==l._v$4&&m.style.setProperty("z-index",l._v$4=Q),V!==l._v$5&&m.style.setProperty("width",l._v$5=V),Z!==l._v$6&&m.style.setProperty("height",l._v$6=Z),tt!==l._v$7&&m.style.setProperty("background",l._v$7=tt),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),m})()}})}}};
