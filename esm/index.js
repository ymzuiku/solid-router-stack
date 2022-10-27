import{template as xt}from"solid-js/web";import{classList as $t}from"solid-js/web";import{setAttribute as bt}from"solid-js/web";import{effect as Et}from"solid-js/web";import{insert as Tt}from"solid-js/web";import{mergeProps as Pt}from"solid-js/web";import{createComponent as F}from"solid-js/web";import{createRoot as _t,createSignal as $,For as Ct,lazy as Lt}from"solid-js";var Y=[],ct=t=>{Y.push(t)},L=[],lt=t=>{L.push(t)},x=t=>(t||(t=J()),{url:t,path:t.split("?")[0],params:C(t)||{},time:Date.now(),index:a.stack.length});["popstate","pushState","pushSingleState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let n=G();if(t==="popstate"){let i=a.stack[a.stack.length-2];!i||n!==i.path?(a.stack.pop(),a.stack.push(x(""))):a.stack.pop()}if(a.stack.length===0){let i=x("");a.stack.push(i)}let r=a.stack[a.stack.length-1];Y.forEach(i=>{i(r?r.path:"",t,a.stack)})})});var pt=t=>{if(a.stack.length==1)return"";a.stack.pop(),a.stack.length||a.stack.push(x(""));let r=a.stack[a.stack.length-1],i=r.path;return a.useHash&&(i="/#"+r.path),i=Q(i,{...C(r.url),...t}),r.params=C(i)||{},r.url=i,i},ut=async(t,n)=>{for(let r of L)t=await Promise.resolve(r(t,H(t)));a.stack.push(x(t)),a.useHash&&(t="/#"+t),history.pushState(null,"",t),n?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},ft=async t=>{for(let r of L)t=await Promise.resolve(r(t,H(t)));let n=x(t);a.stack=a.stack.filter(r=>r.path!==n.path),a.stack.push(n),a.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushSingleState"))},ht=async t=>{for(let n of L)t=await Promise.resolve(n(t,H(t)));a.stack.length>0&&a.stack.pop(),a.stack.push(x(t)),a.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},mt=(t,n)=>{let r=pt(t);r!=""&&(history.replaceState(null,"",r),n?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},dt=t=>{a.stack=[x(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function gt(){let[t,n]=location.href.split("#");return new URLSearchParams([t.split("?")[1],n.split("?")[1]].join("&"))}function H(t){return t.split("?")[0]}function G(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function J(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function Q(t,n){if(n){let r={};Object.keys(n).forEach(h=>{let k=n[h];k!==void 0&&k!==""&&(r[h]=k)});let i=new URLSearchParams(r).toString();return i?t+"?"+i:t}return t}function C(t){let[n,r]=t.split("#"),i=new URLSearchParams([n.split("?")[1],r?r.split("?")[1]:""].join("&")),h={},k=!1;for(let[_,A]of i.entries())k=!0,A!==void 0&&A!==""&&(h[_]=A);if(!!k)return h}var a={search:gt,nowUrl:G,urlToPath:H,nowFullUrl:J,push:ut,pushSingle:ft,replace:ht,goBack:mt,clearTo:dt,listen:ct,beforeChange:lt,searchUrlToObject:C,parasmUrl:Q,onLastBack:t=>t.url,newStack:x,stack:[],useHash:!1};import{template as Z}from"solid-js/web";var kt=Z("<div>Not found page</div>",2),vt=Z("<div></div>",2),p={navigationDuration:0,className:"",notFound:{sync:!0,render:()=>kt.cloneNode(!0)},fallback:vt.cloneNode(!0)};var R=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},tt=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as wt,createSignal as St}from"solid-js";function Kt(t,n,r){let[i,h]=St(t[n]||r);return wt(()=>{h(t[n]||r)}),[i,h]}var j=(t,n=260)=>{if(Object.assign(p,{navigationDuration:n}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},yt={moveTop:R,moveLeft:D,scale:tt},Mt=(t,n=150)=>{if(t==="none"){p.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?j(R(n),n+10):j(window.innerWidth>window.innerHeight?R(n):D(n+10),260):j(yt[t](n),n+10)};var At=xt("<div></div>",2);var g="solid-router-stack-now",O="solid-router-stack-before",Ht="solid-router-stack-leave",P="solid-router-stack-after",c={ignoreAnime:!1,isVirtualHistory:!1,lastLen:0},ne=t=>{let n={...t},[r,i]=_t(()=>$([])),h=s=>{let[e,o]=$(s.path),[l,E]=$(""),[S,y]=$(!0),[T,B]=$(!1),[N,d]=$(s.params);return{path:e,setPath:o,css:l,setCss:E,stackTop:S,setStackTop:y,params:N,setParams:d,stackShow:T,setStackShow:B}},k=()=>{let s=r(),e=s[s.length-1];e&&e.setStackTop(!1);let o=a.stack[a.stack.length-1],l,E=s.length,S=0;for(let y=0;y<E;y++){let T=s[y-S];T.path()===o.path&&(l=T,s.splice(y-S,1),S++)}l?l.setParams(o.params):l=h(o),l.setStackTop(!0),l.setStackShow(!0),i([...s,l])},_=()=>{let s=r(),e=s[s.length-1];e&&e.setStackTop(!1);let o=a.stack[a.stack.length-1],l=h(o);i([...r(),l])},A=()=>{let s=a.stack[a.stack.length-1],e=r();if(e.length>1){let o=e[e.length-2];o.setStackTop(!0),o.setPath(s.path),o.setParams(s.params),i([...e])}setTimeout(()=>{e.pop(),i([...e])},p.navigationDuration)},et=()=>{let s=r();s.pop();let e=a.stack[a.stack.length-1],o=h(e);o.setStackShow(!0),i([...s,o])},st=()=>{i([]),_()},u=s=>{if(p.navigationDuration==0)return;let e=r(),o=e[e.length-1];o&&o.setCss(s)},b=s=>{if(p.navigationDuration==0)return;let e=r(),o=e[e.length-2];o&&o.setCss(s)},v=s=>{let e=r(),o=e[e.length-1];o&&o.setStackShow(s)},w=s=>{let e=r(),o=e[e.length-2];o&&o.setStackShow(s)};a.listen((s,e)=>{let o=a.stack.length;e==="pushSingleState"?(k(),c.ignoreAnime?(v(!0),w(!1),u(g),b(P)):(v(!0),setTimeout(()=>{w(!1)},p.navigationDuration),u(O),requestAnimationFrame(()=>{b(P),u(g)}))):e==="clearState"?(st(),c.ignoreAnime?(v(!0),w(!1),u(g),b(P)):(v(!0),setTimeout(()=>{w(!1)},p.navigationDuration),u(O),requestAnimationFrame(()=>{b(P),u(g)}))):o>c.lastLen?(_(),c.ignoreAnime?(v(!0),w(!1),u(g),b(P)):(v(!0),setTimeout(()=>{w(!1)},p.navigationDuration),u(O),requestAnimationFrame(()=>{b(P),u(g)}))):c.lastLen!==o&&o>=1?(v(!0),w(!0),u(Ht),b(g),A(),c.ignoreAnime?u(g):setTimeout(()=>{u(g)},p.navigationDuration)):(v(!0),w(!0),et(),u(g)),c.lastLen=o,c.ignoreAnime&&requestAnimationFrame(()=>{c.ignoreAnime=!1})});let nt=(s,e)=>{e&&(c.ignoreAnime=!0),a.goBack(s,c.isVirtualHistory)},K=s=>{if(s.sync)s.Component=s.render;else{let e=Lt(s.render);s.Component=o=>F(e,o)}s.push=(e,o)=>{o&&(c.ignoreAnime=!0),a.push(a.parasmUrl(s.path,e),c.isVirtualHistory)},s.put=(e,o)=>{o&&(c.ignoreAnime=!0),a.pushSingle(a.parasmUrl(s.path,e))},s.pushSingle=s.put,s.replace=(e,o)=>{o&&(c.ignoreAnime=!0),a.replace(a.parasmUrl(s.path,e))},s.clearTo=(e,o)=>{o&&(c.ignoreAnime=!0),a.clearTo(a.parasmUrl(s.path,e))}};K(p.notFound),Object.keys(n).forEach(s=>{let e=n[s];K(e)});let U={},W=[];Object.keys(n).map(s=>{let e=n[s];e&&(U[e.path]=e,e.sync||W.push(e))});function ot(s){s.preloadAll?W.forEach(e=>{e.render().then(o=>{e.Component=o.default,e.sync=!0})}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(e=>{let o=n[e];o&&!o.sync&&o.render().then(l=>{o.Component=l.default,o.sync=!0})})},200)}return{...n,goBack:nt,Routers:({root:s,hash:e,ignoreFull:o,virtualHistory:l})=>{a.useHash=!!e,c.isVirtualHistory=!!l;let E=a.nowUrl(),S=a.searchUrlToObject(a.nowFullUrl());c.ignoreAnime=!0,E!=="/"&&E!==s.path?(s.push(void 0,!0),(U[E]||p.notFound).push({...S})):s.push(S,!0);let[y,T]=$(typeof window<"u"?window.innerWidth:0),[B,N]=$(typeof window<"u"?window.innerHeight:0);return o||typeof window<"u"&&window.addEventListener("resize",()=>{T(window.innerWidth),N(window.innerHeight)}),F(Ct,{get each(){return r()},children:(d,at)=>{let q=U[d.path()]||p.notFound;ot(q);let rt=q.Component;return(()=>{let m=At.cloneNode(!0);return m.style.setProperty("position","fixed"),m.style.setProperty("top","0px"),m.style.setProperty("left","0px"),Tt(m,F(rt,Pt({get stackLength(){return r().length},get stackTop(){return d.stackTop()},get stackShow(){return d.stackShow()}},()=>d.params()))),Et(f=>{let z=d.path(),it={[d.css()]:!0,[p.className]:!0},M=d.stackTop()?"auto":"none",I=at()*10,V=o?void 0:y()+"px",X=o?void 0:B()+"px";return z!==f._v$&&bt(m,"data-path",f._v$=z),f._v$2=$t(m,it,f._v$2),M!==f._v$3&&m.style.setProperty("pointer-events",f._v$3=M),I!==f._v$4&&m.style.setProperty("z-index",f._v$4=I),V!==f._v$5&&m.style.setProperty("width",f._v$5=V),X!==f._v$6&&m.style.setProperty("height",f._v$6=X),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),m})()}})}}};export{Kt as createPropsSignal,ne as createRouters,a as historyProxy,D as moveLeftCss,R as moveTopCss,tt as scaleCss,j as setCustomNavigationAnimation,Mt as setNavigationAnimation,p as stackOptions};
//# sourceMappingURL=index.js.map
