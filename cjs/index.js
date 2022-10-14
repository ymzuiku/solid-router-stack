"use strict";var K=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var kt=Object.getOwnPropertyNames;var vt=Object.prototype.hasOwnProperty;var wt=(t,e)=>{for(var r in e)K(t,r,{get:e[r],enumerable:!0})},St=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of kt(e))!vt.call(t,c)&&c!==r&&K(t,c,{get:()=>e[c],enumerable:!(i=gt(e,c))||i.enumerable});return t};var yt=t=>St(K({},"__esModule",{value:!0}),t);var Ft={};wt(Ft,{createPropsSignal:()=>Rt,createRouters:()=>jt,historyProxy:()=>o,moveLeftCss:()=>U,moveTopCss:()=>_,scaleCss:()=>q,setCustomNavigationAnimation:()=>N,setNavigationAnimation:()=>Bt,stackOptions:()=>p});module.exports=yt(Ft);var nt=require("solid-js/web"),ot=require("solid-js/web"),at=require("solid-js/web"),rt=require("solid-js/web"),it=require("solid-js/web"),ct=require("solid-js/web"),D=require("solid-js/web"),f=require("solid-js");var Z=[],xt=t=>{Z.push(t)},H=[],$t=t=>{H.push(t)},$=t=>(t||(t=et()),{url:t,path:t.split("?")[0],params:L(t)||{},time:Date.now(),index:o.stack.length});["popstate","pushState","pushSingleState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=tt();if(t==="popstate"){let i=o.stack[o.stack.length-2];if(!i||e!==i.path)o.stack.pop(),o.stack.push($(""));else if(o.stack.pop(),o.stack.length===0){let c=$("");o.stack.push(c)}}let r=o.stack[o.stack.length-1];Z.forEach(i=>{i(r?r.path:"",t,o.stack)})})});var bt=t=>{if(o.stack.length==1)return"";o.stack.pop(),o.stack.length||o.stack.push($(""));let r=o.stack[o.stack.length-1],i=r.path;return o.useHash&&(i="/#"+r.path),i=st(i,{...L(r.url),...t}),r.params=L(i)||{},r.url=i,i},Et=async(t,e)=>{for(let r of H)t=await Promise.resolve(r(t,R(t)));o.stack.push($(t)),o.useHash&&(t="/#"+t),history.pushState(null,"",t),e?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},Tt=async t=>{for(let r of H)t=await Promise.resolve(r(t,R(t)));let e=$(t);o.stack=o.stack.filter(r=>r.path!==e.path),o.stack.push(e),o.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushSingleState"))},Pt=async t=>{for(let e of H)t=await Promise.resolve(e(t,R(t)));o.stack.length>0&&o.stack.pop(),o.stack.push($(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},At=(t,e)=>{let r=bt(t);r!=""&&(history.replaceState(null,"",r),e?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},_t=t=>{o.stack=[$(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function Ct(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function R(t){return t.split("?")[0]}function tt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function et(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function st(t,e){if(e){let r={};Object.keys(e).forEach(c=>{let v=e[c];v!==void 0&&v!==""&&(r[c]=v)});let i=new URLSearchParams(r).toString();return i?t+"?"+i:t}return t}function L(t){let[e,r]=t.split("#"),i=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),c={},v=!1;for(let[C,A]of i.entries())v=!0,A!==void 0&&A!==""&&(c[C]=A);if(!!v)return c}var o={search:Ct,nowUrl:tt,urlToPath:R,nowFullUrl:et,push:Et,pushSingle:Tt,replace:Pt,goBack:At,clearTo:_t,listen:xt,beforeChange:$t,searchUrlToObject:L,parasmUrl:st,onLastBack:t=>t.url,newStack:$,stack:[],useHash:!1};var W=require("solid-js/web"),Lt=(0,W.template)("<div>Not found page</div>",2),Ht=(0,W.template)("<div></div>",2),p={navigationDuration:0,className:"",notFound:{sync:!0,render:()=>Lt.cloneNode(!0)},fallback:Ht.cloneNode(!0)};var _=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},q=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var B=require("solid-js");function Rt(t,e,r){let[i,c]=(0,B.createSignal)(t[e]||r);return(0,B.createEffect)(()=>{c(t[e]||r)}),[i,c]}var N=(t,e=260)=>{if(Object.assign(p,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},Ut={moveTop:_,moveLeft:U,scale:q},Bt=(t,e=150)=>{if(t==="none"){p.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?N(_(e),e+10):N(window.innerWidth>window.innerHeight?_(e):U(e+10),260):N(Ut[t](e),e+10)};var Nt=(0,nt.template)("<div></div>",2);var k="solid-router-stack-now",z="solid-router-stack-before",Dt="solid-router-stack-leave",P="solid-router-stack-after",l={ignoreAnime:!1,isVirtualHistory:!1,lastLen:0},jt=t=>{let e={...t},[r,i]=(0,f.createRoot)(()=>(0,f.createSignal)([])),c=n=>{let[s,a]=(0,f.createSignal)(n.path),[u,E]=(0,f.createSignal)(""),[y,x]=(0,f.createSignal)(!0),[T,F]=(0,f.createSignal)(!1),[O,g]=(0,f.createSignal)(n.params);return{path:s,setPath:a,css:u,setCss:E,stackTop:y,setStackTop:x,params:O,setParams:g,stackShow:T,setStackShow:F}},v=()=>{let n=r(),s=n[n.length-1];s&&s.setStackTop(!1);let a=o.stack[o.stack.length-1],u,E=n.length,y=0;for(let x=0;x<E;x++){let T=n[x-y];T.path()===a.path&&(u=T,n.splice(x-y,1),y++)}u?u.setParams(a.params):u=c(a),u.setStackTop(!0),u.setStackShow(!0),i([...n,u])},C=()=>{let n=r(),s=n[n.length-1];s&&s.setStackTop(!1);let a=o.stack[o.stack.length-1],u=c(a);i([...r(),u])},A=()=>{let n=o.stack[o.stack.length-1],s=r();if(s.length>1){let a=s[s.length-2];a.setStackTop(!0),a.setPath(n.path),a.setParams(n.params),i([...s])}setTimeout(()=>{s.pop(),i([...s])},p.navigationDuration)},lt=()=>{let n=r();n.pop();let s=o.stack[o.stack.length-1],a=c(s);a.setStackShow(!0),i([...n,a])},pt=()=>{i([]),C()},h=n=>{if(p.navigationDuration==0)return;let s=r(),a=s[s.length-1];a&&a.setCss(n)},b=n=>{if(p.navigationDuration==0)return;let s=r(),a=s[s.length-2];a&&a.setCss(n)},w=n=>{let s=r(),a=s[s.length-1];a&&a.setStackShow(n)},S=n=>{let s=r(),a=s[s.length-2];a&&a.setStackShow(n)};o.listen((n,s)=>{let a=o.stack.length;s==="pushSingleState"?(v(),l.ignoreAnime?(w(!0),S(!1),h(k),b(P)):(w(!0),setTimeout(()=>{S(!1)},p.navigationDuration),h(z),requestAnimationFrame(()=>{b(P),h(k)}))):s==="clearState"?(pt(),l.ignoreAnime?(w(!0),S(!1),h(k),b(P)):(w(!0),setTimeout(()=>{S(!1)},p.navigationDuration),h(z),requestAnimationFrame(()=>{b(P),h(k)}))):a>l.lastLen?(C(),l.ignoreAnime?(w(!0),S(!1),h(k),b(P)):(w(!0),setTimeout(()=>{S(!1)},p.navigationDuration),h(z),requestAnimationFrame(()=>{b(P),h(k)}))):l.lastLen!==a&&a>=1?(w(!0),S(!0),h(Dt),b(k),A(),l.ignoreAnime?h(k):setTimeout(()=>{h(k)},p.navigationDuration)):(w(!0),S(!0),lt(),h(k)),l.lastLen=a,l.ignoreAnime&&requestAnimationFrame(()=>{l.ignoreAnime=!1})});let ut=(n,s)=>{s&&(l.ignoreAnime=!0),o.goBack(n,l.isVirtualHistory)},M=n=>{if(n.sync)n.Component=n.render;else{let s=(0,f.lazy)(n.render);n.Component=a=>(0,D.createComponent)(s,a)}n.push=(s,a)=>{a&&(l.ignoreAnime=!0),o.push(o.parasmUrl(n.path,s),l.isVirtualHistory)},n.pushSingle=(s,a)=>{a&&(l.ignoreAnime=!0),o.pushSingle(o.parasmUrl(n.path,s))},n.replace=(s,a)=>{a&&(l.ignoreAnime=!0),o.replace(o.parasmUrl(n.path,s))},n.clearTo=(s,a)=>{a&&(l.ignoreAnime=!0),o.clearTo(o.parasmUrl(n.path,s))}};M(p.notFound),Object.keys(e).forEach(n=>{let s=e[n];M(s)});let j={},I=[];Object.keys(e).map(n=>{let s=e[n];s&&(j[s.path]=s,s.sync||I.push(s))});function ft(n){n.preloadAll?I.forEach(s=>{s.render().then(a=>{s.Component=a.default,s.sync=!0})}):n.preload&&n.preload.length&&setTimeout(()=>{n.preload.forEach(s=>{let a=e[s];a&&!a.sync&&a.render().then(u=>{a.Component=u.default,a.sync=!0})})},200)}return{...e,goBack:ut,Routers:({root:n,hash:s,ignoreFull:a,virtualHistory:u})=>{o.useHash=!!s,l.isVirtualHistory=!!u;let E=o.nowUrl(),y=o.searchUrlToObject(o.nowFullUrl());l.ignoreAnime=!0,E!=="/"&&E!==n.path?(n.push(void 0,!0),(j[E]||p.notFound).push({...y})):n.push(y,!0);let[x,T]=(0,f.createSignal)(typeof window<"u"?window.innerWidth:0),[F,O]=(0,f.createSignal)(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{T(window.innerWidth),O(window.innerHeight)}),(0,D.createComponent)(f.For,{get each(){return r()},children:(g,ht)=>{let V=j[g.path()]||p.notFound;ft(V);let mt=V.Component;return(()=>{let d=Nt.cloneNode(!0);return d.style.setProperty("position","fixed"),d.style.setProperty("top","0px"),d.style.setProperty("left","0px"),(0,it.insert)(d,(0,D.createComponent)(mt,(0,ct.mergeProps)({get stackLength(){return r().length},get stackTop(){return g.stackTop()},get stackShow(){return g.stackShow()}},()=>g.params()))),(0,rt.effect)(m=>{let X=g.path(),dt={[g.css()]:!0,[p.className]:!0},Y=g.stackTop()?"auto":"none",G=ht()*10,J=a?void 0:x()+"px",Q=a?void 0:F()+"px";return X!==m._v$&&(0,at.setAttribute)(d,"data-path",m._v$=X),m._v$2=(0,ot.classList)(d,dt,m._v$2),Y!==m._v$3&&d.style.setProperty("pointer-events",m._v$3=Y),G!==m._v$4&&d.style.setProperty("z-index",m._v$4=G),J!==m._v$5&&d.style.setProperty("width",m._v$5=J),Q!==m._v$6&&d.style.setProperty("height",m._v$6=Q),m},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),d})()}})}}};
//# sourceMappingURL=index.js.map
