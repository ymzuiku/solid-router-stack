import{template as ht}from"solid-js/web";import{mergeProps as X}from"solid-js/web";import{className as dt}from"solid-js/web";import{setAttribute as mt}from"solid-js/web";import{effect as gt}from"solid-js/web";import{insert as kt}from"solid-js/web";import{memo as vt}from"solid-js/web";import{createComponent as S}from"solid-js/web";import{createRoot as yt,createSignal as Y,For as St,lazy as bt,Suspense as xt}from"solid-js";import{createStore as Et}from"solid-js/store";var j=[],Z=t=>{j.push(t)},w=[],tt=t=>{w.push(t)};["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{t==="popstate"&&e.stack.pop();let n=e.stack[e.stack.length-1];j.forEach(s=>{s(n?n.path:"",t,e.stack)})})});var m=t=>({url:t,path:t.split("?")[0],params:_(t)||{},time:Date.now(),index:e.stack.length}),et=t=>{w.forEach(n=>{t=n(t)}),e.stack.push(m(t)),e.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},st=t=>{w.forEach(n=>{t=n(t)}),e.stack.push(m(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},B=t=>{w.forEach(n=>{t=n(t)}),e.stack.length>0&&e.stack.pop(),e.stack.push(m(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},F=t=>{let n=e.stack.length;n>1&&e.stack.pop();let s=e.stack[e.stack.length-1];if(n===1){let c=s.time,l=s.url;s=m(e.onLastBack(s)),l===s.url&&(s.time=c),e.stack[e.stack.length-1]=s}let r=s.path;return e.useHash&&(r="/#"+s.path),r=W(r,{..._(s.url),...t}),s.url,r},ot=t=>{let n=F(t);history.replaceState(null,"",n),window.dispatchEvent(new Event("backState"))},nt=t=>{let n=F(t);history.replaceState(null,"",n),window.dispatchEvent(new Event("replaceState"))},rt=t=>{e.stack=[m(t)],B(t)};function at(){let[t,n]=location.href.split("#");return new URLSearchParams([t.split("?")[1],n.split("?")[1]].join("&"))}function it(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function ct(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function W(t,n){if(n){let s={};Object.keys(n).forEach(c=>{let l=n[c];l!==void 0&&l!==""&&(s[c]=l)});let r=new URLSearchParams(s).toString();return r?t+"?"+r:t}return t}function _(t){let[n,s]=t.split("#"),r=new URLSearchParams([n.split("?")[1],s?s.split("?")[1]:""].join("&")),c={},l=!1;for(let[g,f]of r.entries())l=!0,f!==void 0&&f!==""&&(c[g]=f);if(!!l)return c}var e={search:at,nowUrl:it,nowFullUrl:ct,push:et,pushNotHistory:st,replace:B,goBack:ot,gobackNotHistory:nt,clearTo:rt,listen:Z,beforeChange:tt,searchUrlToObject:_,parasmUrl:W,onLastBack:t=>t.url,newStack:m,stack:[],useHash:!1};var y;function T(){if(y!==void 0)return y;let t=navigator.userAgent.toLocaleLowerCase();return y=new RegExp("(iphone|ipod|ipad)").test(t)&&new RegExp("(micromessenger)").test(t),y}import{template as I}from"solid-js/web";var lt=I("<div>Not found page</div>",2),pt=I("<div></div>",2),h={navigationDuration:0,notFound:{async:!0,render:()=>lt.cloneNode(!0)},fallback:pt.cloneNode(!0)};var D=`
.solid-router-stack-now {
  transition: transform 200ms ease-out, opacity 200ms ease-out;
}
.solid-router-stack-before {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 200ms ease-out;
  opacity: 0.7;
  transform: translateY(10vh);
}
.solid-router-stack-leave {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 200ms ease-out;
  opacity: 0;
  transform: translateY(15vh);
  pointer-events: none !important;
}
.solid-router-stack-after {
  will-change: transform, opacity;
  transition: transform 200ms ease-out, opacity 200ms ease-out;
  transform: translateY(-5vh);
  pointer-events: none !important;
}
`,z=`
.solid-router-stack-now {
  transition: transform 200ms ease-out;
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-before {
  will-change: transform, opacity;
  transition: transform 200ms ease-out;
  transform: translateX(100vw);
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-leave {
  will-change: transform, opacity;
  transition: transform 200ms ease-out;
  transform: translateX(100vw);
  box-shadow: 0px -10px 20px rgba(0,0,0,0.12);
  pointer-events: none !important;
}
.solid-router-stack-after {
  will-change: transform, opacity;
  transition: transform 200ms ease-out;
  transform: translateX(-30vw);
  pointer-events: none !important;
}
`;var ft=(t,n=250)=>{if(Object.assign(h,{navigationDuration:n}),typeof window<"u"&&!document.getElementById("solid-router-stack-css")){let s=document.createElement("style");s.id="solid-router-stack-css",s.innerHTML=t,document.head.append(s)}},ut=t=>{ft(t=="moveTop"?D:z)};var wt=ht("<div></div>",2);var k="solid-router-stack-now",_t="solid-router-stack-before",Tt="solid-router-stack-leave",b="solid-router-stack-after",Jt=t=>{let n={...t},[s,r]=yt(()=>Et({list:e.stack})),c=o=>{r("list",s.list.length-1,{className:o})},l=o=>{s.list.length>1&&r("list",s.list.length-2,{className:o})},g=0,f=!1;e.listen(()=>{let o=e.stack.length,a=e.stack[e.stack.length-1];h.navigationDuration>0?o>g?(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),f?(c(k),l(b)):(c(_t),requestAnimationFrame(()=>{c(k),l(b)}))):g!==o?(r("list",s.list.length-2,{stackTop:!0}),s.list.length>2&&r("list",s.list.length-3,{stackTop:!1}),c(Tt),l(k),f?r("list",[...e.stack]):setTimeout(()=>{r("list",[...e.stack])},h.navigationDuration)):(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),c(k),l(b)):(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),c(k),l(b)),g=o,r("list",e.stack.length-1,{params:a?e.searchUrlToObject(a.url):{}}),f&&requestAnimationFrame(()=>{f=!1})});let q=o=>{T()?e.gobackNotHistory(o):e.goBack(o)},$=o=>{o.async?o.Component=o.render:o.Component=bt(o.render),o.push=a=>{T()?e.pushNotHistory(e.parasmUrl(o.path,a)):e.push(e.parasmUrl(o.path,a))},o.replace=a=>{e.replace(e.parasmUrl(o.path,a))},o.clearTo=a=>{e.clearTo(e.parasmUrl(o.path,a))}};$(h.notFound),Object.keys(n).forEach(o=>{let a=n[o];$(a)});let x={},U=[];Object.keys(n).map(o=>{let a=n[o];a&&(x[a.path]=a,a.async||U.push(a))});function M(o){o.preloadAll?U.forEach(a=>{a.render()}):o.preload&&setTimeout(()=>{o.preload().forEach(d=>{d.async||d.render()})},200)}let G=({root:o,hash:a,ignoreFull:d})=>{e.useHash=!!a;let E=e.nowUrl(),C=e.searchUrlToObject(e.nowFullUrl());if(f=!0,E!=="/"&&E!==o.path){o.push();let u=x[E]||h.notFound;f=!0,u.push({...C})}else o.push(C);let[J,K]=Y(typeof window<"u"?window.innerWidth:0),[Q,V]=Y(typeof window<"u"?window.innerHeight:0);return d||typeof window<"u"&&window.addEventListener("resize",()=>{K(window.innerWidth),V(window.innerHeight)}),S(St,{get each(){return s.list},children:(u,P)=>{let v=x[u.path]||h.notFound;return M(v),console.log("__debug__",s.list),(()=>{let p=wt.cloneNode(!0);return p.style.setProperty("position","fixed"),p.style.setProperty("top","0px"),p.style.setProperty("left","0px"),p.style.setProperty("background","#fff"),kt(p,(()=>{let i=vt(()=>!!v.async,!0);return()=>i()?S(v.Component,X({get stackTop(){return u.stackTop}},()=>u.params)):S(xt,{get fallback(){return h.fallback},get children(){return S(v.Component,X({get stackTop(){return u.stackTop}},()=>u.params))}})})()),gt(i=>{let R=u.path,L=u.className,N=P()<s.list.length-1?"none":"auto",H=P()*10,O=d?void 0:J()+"px",A=d?void 0:Q()+"px";return R!==i._v$&&mt(p,"data-path",i._v$=R),L!==i._v$2&&dt(p,i._v$2=L),N!==i._v$3&&p.style.setProperty("pointer-events",i._v$3=N),H!==i._v$4&&p.style.setProperty("z-index",i._v$4=H),O!==i._v$5&&p.style.setProperty("width",i._v$5=O),A!==i._v$6&&p.style.setProperty("height",i._v$6=A),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),p})()}})};return{...n,goBack:q,search:e.search,nowUrl:e.nowUrl,nowFullUrl:e.nowFullUrl,searchUrlToObject:e.searchUrlToObject,listen:e.listen,beforeChange:e.beforeChange,getStack:()=>e.stack,Routers:G}};export{Jt as createRouters,z as moveLeftCss,D as moveTopCss,ut as useAnimationNavigation};
