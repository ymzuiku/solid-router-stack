import{template as vt}from"solid-js/web";import{style as St}from"solid-js/web";import{classList as yt}from"solid-js/web";import{setAttribute as xt}from"solid-js/web";import{effect as $t}from"solid-js/web";import{insert as bt}from"solid-js/web";import{mergeProps as Et}from"solid-js/web";import{createComponent as F}from"solid-js/web";import{createRoot as At,createSignal as y,For as Ct,lazy as Lt}from"solid-js";var M=[],at=t=>{M.push(t)},_=[],rt=t=>{_.push(t)},S=t=>(t||(t=V()),{url:t,path:t.split("?")[0],params:P(t)||{},time:Date.now(),index:a.stack.length});["popstate","pushState","pushSingleState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let n=I();if(t==="popstate"){let i=a.stack[a.stack.length-2];!i||n!==i.path?(a.stack.pop(),a.stack.push(S(""))):a.stack.pop()}if(a.stack.length===0){let i=S("");a.stack.push(i)}let r=a.stack[a.stack.length-1];M.forEach(i=>{i(r?r.path:"",t,a.stack)})})});var it=t=>{if(a.stack.length==1)return"";a.stack.pop(),a.stack.length||a.stack.push(S(""));let r=a.stack[a.stack.length-1],i=r.path;return a.useHash&&(i="/#"+r.path),i=X(i,{...P(r.url),...t}),r.params=P(i)||{},r.url=i,i},ct=async(t,n)=>{for(let r of _)t=await Promise.resolve(r(t,H(t)));a.stack.push(S(t)),a.useHash&&(t="/#"+t),history.pushState(null,"",t),n?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},lt=async t=>{for(let r of _)t=await Promise.resolve(r(t,H(t)));let n=S(t);a.stack=a.stack.filter(r=>r.path!==n.path),a.stack.push(n),a.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushSingleState"))},pt=async t=>{for(let n of _)t=await Promise.resolve(n(t,H(t)));a.stack.length>0&&a.stack.pop(),a.stack.push(S(t)),a.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},ut=(t,n)=>{let r=it(t);r!=""&&(history.replaceState(null,"",r),n?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},ft=t=>{a.stack=[S(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function ht(){let[t,n]=location.href.split("#");return new URLSearchParams([t.split("?")[1],n.split("?")[1]].join("&"))}function H(t){return t.split("?")[0]}function I(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function V(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function X(t,n){if(n){let r={};Object.keys(n).forEach(f=>{let d=n[f];d!==void 0&&d!==""&&(r[f]=d)});let i=new URLSearchParams(r).toString();return i?t+"?"+i:t}return t}function P(t){let[n,r]=t.split("#"),i=new URLSearchParams([n.split("?")[1],r?r.split("?")[1]:""].join("&")),f={},d=!1;for(let[L,A]of i.entries())d=!0,A!==void 0&&A!==""&&(f[L]=A);if(!!d)return f}var a={search:ht,nowUrl:I,urlToPath:H,nowFullUrl:V,push:ct,pushSingle:lt,replace:pt,goBack:ut,clearTo:ft,listen:at,beforeChange:rt,searchUrlToObject:P,parasmUrl:X,onLastBack:t=>t.url,newStack:S,stack:[],useHash:!1};import{template as Y}from"solid-js/web";var mt=Y("<div>Not found page</div>",2),dt=Y("<div></div>",2),l={navigationDuration:0,className:"",style:{},notFound:{sync:!0,render:()=>mt.cloneNode(!0)},fallback:dt.cloneNode(!0)};var R=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now {
  ${n}
}
.solid-router-stack-before {
  ${n}
  will-change: transform, opacity;
  transform: translateY(7vh);
}
.solid-router-stack-leave {
  ${n}
  will-change: transform, opacity;
  opacity: 0;
  transform: translateY(15vh);
  pointer-events: none !important;
}
.solid-router-stack-after {
  ${n}
  will-change: transform, opacity;
  transform: translateY(-5vh);
  pointer-events: none !important;
}
`},D=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now {
  ${n}
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-before {
  ${n}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-leave {
  ${n}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: 0px -10px 20px rgba(0,0,0,0.12);
  pointer-events: none !important;
}
.solid-router-stack-after {
  ${n}
  will-change: transform, opacity;
  transform: translateX(-30vw);
  pointer-events: none !important;
}
`},G=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now {
  ${n}
}
.solid-router-stack-before {
  ${n}
  will-change: transform, opacity;
  opacity: 0;
  transform: scale(0.8);
}
.solid-router-stack-leave {
  ${n}
  will-change: transform, opacity;
  transform: scale(0.8);
  opacity: 0;
  pointer-events: none !important;
}
.solid-router-stack-after {
  ${n}
  will-change: transform, opacity;
  transform: scale(1.05);
  pointer-events: none !important;
}
`};import{createEffect as gt,createSignal as kt}from"solid-js";function Ft(t,n,r){let[i,f]=kt(t[n]||r);return gt(()=>{f(t[n]||r)}),[i,f]}var j=(t,n=260)=>{if(Object.assign(l,{navigationDuration:n}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},wt={moveTop:R,moveLeft:D,scale:G},qt=(t,n=150)=>{if(t==="none"){l.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?j(R(n),n+10):j(window.innerWidth>window.innerHeight?R(n):D(n+10),260):j(wt[t](n),n+10)};var Tt=vt("<div></div>",2);var m="solid-router-stack-now",O="solid-router-stack-before",Pt="solid-router-stack-leave",T="solid-router-stack-after",c={ignoreAnime:!1,isVirtualHistory:!1,lastLen:0},se=t=>{let n={...t},[r,i]=At(()=>y([])),f=s=>{let[e,o]=y(s.path),[p,$]=y(""),[w,v]=y(!0),[E,B]=y(!1),[N,h]=y(s.params);return{path:e,setPath:o,css:p,setCss:$,stackTop:w,setStackTop:v,params:N,setParams:h,stackShow:E,setStackShow:B}},d=()=>{let s=r(),e=s[s.length-1];e&&e.setStackTop(!1);let o=a.stack[a.stack.length-1],p,$=s.length,w=0;for(let v=0;v<$;v++){let E=s[v-w];E.path()===o.path&&(p=E,s.splice(v-w,1),w++)}p?p.setParams(o.params):p=f(o),p.setStackTop(!0),p.setStackShow(!0),i([...s,p])},L=()=>{let s=r(),e=s[s.length-1];e&&e.setStackTop(!1);let o=a.stack[a.stack.length-1],p=f(o);i([...r(),p])},A=()=>{let s=a.stack[a.stack.length-1],e=r();if(e.length>1){let o=e[e.length-2];o.setStackTop(!0),o.setPath(s.path),o.setParams(s.params),i([...e])}setTimeout(()=>{e.pop(),i([...e])},l.navigationDuration)},J=()=>{let s=r();s.pop();let e=a.stack[a.stack.length-1],o=f(e);o.setStackShow(!0),i([...s,o])},Q=()=>{i([]),L()},u=s=>{if(l.navigationDuration==0)return;let e=r(),o=e[e.length-1];o&&o.setCss(s)},x=s=>{if(l.navigationDuration==0)return;let e=r(),o=e[e.length-2];o&&o.setCss(s)},g=s=>{let e=r(),o=e[e.length-1];o&&o.setStackShow(s)},k=s=>{let e=r(),o=e[e.length-2];o&&o.setStackShow(s)};a.listen((s,e)=>{let o=a.stack.length;e==="pushSingleState"?(d(),c.ignoreAnime?(g(!0),k(!1),u(m),x(T)):(g(!0),setTimeout(()=>{k(!1)},l.navigationDuration),u(O),requestAnimationFrame(()=>{x(T),u(m)}))):e==="clearState"?(Q(),c.ignoreAnime?(g(!0),k(!1),u(m),x(T)):(g(!0),setTimeout(()=>{k(!1)},l.navigationDuration),u(O),requestAnimationFrame(()=>{x(T),u(m)}))):o>c.lastLen?(L(),c.ignoreAnime?(g(!0),k(!1),u(m),x(T)):(g(!0),setTimeout(()=>{k(!1)},l.navigationDuration),u(O),requestAnimationFrame(()=>{x(T),u(m)}))):c.lastLen!==o&&o>=1?(g(!0),k(!0),u(Pt),x(m),A(),c.ignoreAnime?u(m):setTimeout(()=>{u(m)},l.navigationDuration)):(g(!0),k(!0),J(),u(m)),c.lastLen=o,c.ignoreAnime&&requestAnimationFrame(()=>{c.ignoreAnime=!1})});let Z=(s,e)=>{e&&(c.ignoreAnime=!0),a.goBack(s,c.isVirtualHistory)},K=s=>{if(s.sync)s.Component=s.render;else{let e=Lt(s.render);s.Component=o=>F(e,o)}s.push=(e,o)=>{o&&(c.ignoreAnime=!0),a.push(a.parasmUrl(s.path,e),c.isVirtualHistory)},s.put=(e,o)=>{o&&(c.ignoreAnime=!0),a.pushSingle(a.parasmUrl(s.path,e))},s.pushSingle=s.put,s.replace=(e,o)=>{o&&(c.ignoreAnime=!0),a.replace(a.parasmUrl(s.path,e))},s.clearTo=(e,o)=>{o&&(c.ignoreAnime=!0),a.clearTo(a.parasmUrl(s.path,e))}};K(l.notFound),Object.keys(n).forEach(s=>{let e=n[s];K(e)});let U={},W=[];Object.keys(n).map(s=>{let e=n[s];e&&(U[e.path]=e,e.sync||W.push(e))});function tt(s){s.preloadAll?W.forEach(e=>{e.render().then(o=>{e.Component=o.default,e.sync=!0})}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(e=>{let o=n[e];o&&!o.sync&&o.render().then(p=>{o.Component=p.default,o.sync=!0})})},200)}return{...n,goBack:Z,Routers:({root:s,hash:e,ignoreFull:o,virtualHistory:p})=>{a.useHash=!!e,c.isVirtualHistory=!!p;let $=a.nowUrl(),w=a.searchUrlToObject(a.nowFullUrl());c.ignoreAnime=!0,$!=="/"&&$!==s.path?(s.push(void 0,!0),(U[$]||l.notFound).push({...w})):s.push(w,!0);let[v,E]=y(typeof window<"u"?window.innerWidth:0),[B,N]=y(typeof window<"u"?window.innerHeight:0);return o||typeof window<"u"&&window.addEventListener("resize",()=>{E(window.innerWidth),N(window.innerHeight)}),F(Ct,{get each(){return r()},children:(h,et)=>{let q=U[h.path()]||l.notFound;tt(q);let st=q.Component;return(()=>{let C=Tt.cloneNode(!0);return bt(C,F(st,Et({get stackLength(){return r().length},get stackTop(){return h.stackTop()},get stackShow(){return h.stackShow()}},()=>h.params()))),$t(b=>{let z=h.path(),nt={[h.css()]:!0,[l.className]:!0},ot={"pointer-events":h.stackTop()?"auto":"none",position:"fixed","z-index":et()*10,top:"0px",left:"0px",width:o?void 0:v()+"px",height:o?void 0:B()+"px",...l.style};return z!==b._v$&&xt(C,"data-path",b._v$=z),b._v$2=yt(C,nt,b._v$2),b._v$3=St(C,ot,b._v$3),b},{_v$:void 0,_v$2:void 0,_v$3:void 0}),C})()}})}}};export{Ft as createPropsSignal,se as createRouters,a as historyProxy,D as moveLeftCss,R as moveTopCss,G as scaleCss,j as setCustomNavigationAnimation,qt as setNavigationAnimation,l as stackOptions};
//# sourceMappingURL=index.js.map
