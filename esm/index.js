import{template as kt}from"solid-js/web";import{mergeProps as Y}from"solid-js/web";import{className as vt}from"solid-js/web";import{setAttribute as wt}from"solid-js/web";import{effect as yt}from"solid-js/web";import{memo as St}from"solid-js/web";import{insert as q}from"solid-js/web";import{createComponent as S}from"solid-js/web";import{createRoot as bt,createSignal as G,For as xt,lazy as Et,Suspense as Tt}from"solid-js";import{createStore as _t}from"solid-js/store";var B=[],ot=t=>{B.push(t)},w=[],nt=t=>{w.push(t)};["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{t==="popstate"&&e.stack.pop();let n=e.stack[e.stack.length-1];B.forEach(s=>{s(n?n.path:"",t,e.stack)})})});var m=t=>({url:t,path:t.split("?")[0],params:_(t)||{},time:Date.now(),index:e.stack.length}),rt=t=>{w.forEach(n=>{t=n(t)}),e.stack.push(m(t)),e.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},at=t=>{w.forEach(n=>{t=n(t)}),e.stack.push(m(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},F=t=>{w.forEach(n=>{t=n(t)}),e.stack.length>0&&e.stack.pop(),e.stack.push(m(t)),e.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},W=t=>{let n=e.stack.length;n>1&&e.stack.pop();let s=e.stack[e.stack.length-1];if(n===1){let c=s.time,l=s.url;s=m(e.onLastBack(s)),l===s.url&&(s.time=c),e.stack[e.stack.length-1]=s}let r=s.path;return e.useHash&&(r="/#"+s.path),r=I(r,{..._(s.url),...t}),s.url,r},it=t=>{let n=W(t);history.replaceState(null,"",n),window.dispatchEvent(new Event("backState"))},ct=t=>{let n=W(t);history.replaceState(null,"",n),window.dispatchEvent(new Event("replaceState"))},lt=t=>{e.stack=[m(t)],F(t)};function pt(){let[t,n]=location.href.split("#");return new URLSearchParams([t.split("?")[1],n.split("?")[1]].join("&"))}function ft(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function ut(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function I(t,n){if(n){let s={};Object.keys(n).forEach(c=>{let l=n[c];l!==void 0&&l!==""&&(s[c]=l)});let r=new URLSearchParams(s).toString();return r?t+"?"+r:t}return t}function _(t){let[n,s]=t.split("#"),r=new URLSearchParams([n.split("?")[1],s?s.split("?")[1]:""].join("&")),c={},l=!1;for(let[g,f]of r.entries())l=!0,f!==void 0&&f!==""&&(c[g]=f);if(!!l)return c}var e={search:pt,nowUrl:ft,nowFullUrl:ut,push:rt,pushNotHistory:at,replace:F,goBack:it,gobackNotHistory:ct,clearTo:lt,listen:ot,beforeChange:nt,searchUrlToObject:_,parasmUrl:I,onLastBack:t=>t.url,newStack:m,stack:[],useHash:!1};var y;function $(){if(y!==void 0)return y;let t=navigator.userAgent.toLocaleLowerCase();return y=new RegExp("(iphone|ipod|ipad)").test(t)&&new RegExp("(micromessenger)").test(t),y}import{template as D}from"solid-js/web";var ht=D("<div>Not found page</div>",2),dt=D("<div></div>",2),u={navigationDuration:0,notFound:{async:!0,render:()=>ht.cloneNode(!0)},fallback:dt.cloneNode(!0)};var z=`
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
`,X=`
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
`;var mt=(t,n=220)=>{if(Object.assign(u,{navigationDuration:n}),typeof window<"u"&&!document.getElementById("solid-router-stack-css")){let s=document.createElement("style");s.id="solid-router-stack-css",s.innerHTML=t,document.head.append(s)}},gt=t=>{mt(t=="moveTop"?z:X)};var M=kt("<div></div>",2);var k="solid-router-stack-now",$t="solid-router-stack-before",Ut="solid-router-stack-leave",b="solid-router-stack-after",Qt=t=>{let n={...t},[s,r]=bt(()=>_t({list:e.stack})),c=o=>{r("list",s.list.length-1,{className:o})},l=o=>{s.list.length>1&&r("list",s.list.length-2,{className:o})},g=0,f=!1;e.listen(()=>{let o=e.stack.length,a=e.stack[e.stack.length-1];u.navigationDuration>0?o>g?(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),f?(c(k),l(b)):(c($t),requestAnimationFrame(()=>{c(k),l(b)}))):g!==o?(r("list",s.list.length-2,{stackTop:!0}),s.list.length>2&&r("list",s.list.length-3,{stackTop:!1}),c(Ut),l(k),f?r("list",[...e.stack]):setTimeout(()=>{r("list",[...e.stack])},u.navigationDuration)):(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),c(k),l(b)):(r("list",[...e.stack]),r("list",s.list.length-1,{stackTop:!0}),s.list.length>1&&r("list",s.list.length-2,{stackTop:!1}),c(k),l(b)),g=o,r("list",e.stack.length-1,{params:a?e.searchUrlToObject(a.url):{}}),f&&requestAnimationFrame(()=>{f=!1})});let J=o=>{$()?e.gobackNotHistory(o):e.goBack(o)},U=o=>{o.async?o.Component=o.render:o.Component=Et(o.render),o.push=a=>{$()?e.pushNotHistory(e.parasmUrl(o.path,a)):e.push(e.parasmUrl(o.path,a))},o.replace=a=>{e.replace(e.parasmUrl(o.path,a))},o.clearTo=a=>{e.clearTo(e.parasmUrl(o.path,a))}};U(u.notFound),Object.keys(n).forEach(o=>{let a=n[o];U(a)});let x={},C=[];Object.keys(n).map(o=>{let a=n[o];a&&(x[a.path]=a,a.async||C.push(a))});function K(o){o.preloadAll?C.forEach(a=>{a.render()}):o.preload&&setTimeout(()=>{o.preload().forEach(d=>{d.async||d.render()})},200)}let Q=({root:o,hash:a,ignoreFull:d})=>{e.useHash=!!a;let E=e.nowUrl(),P=e.searchUrlToObject(e.nowFullUrl());if(f=!0,E!=="/"&&E!==o.path){o.push();let v=x[E]||u.notFound;f=!0,v.push({...P})}else o.push(P);let[V,Z]=G(typeof window<"u"?window.innerWidth:0),[tt,et]=G(typeof window<"u"?window.innerHeight:0);return d||typeof window<"u"&&window.addEventListener("resize",()=>{Z(window.innerWidth),et(window.innerHeight)}),(()=>{let v=M.cloneNode(!0);return q(v,S(xt,{get each(){return s.list},children:(h,st)=>{let T=x[h.path]||u.notFound;K(T);let R=T.Component;return(()=>{let p=M.cloneNode(!0);return p.style.setProperty("position","fixed"),p.style.setProperty("top","0px"),p.style.setProperty("left","0px"),p.style.setProperty("background","#fff"),q(p,(()=>{let i=St(()=>!!T.async,!0);return()=>i()?S(R,Y({get stackTop(){return h.stackTop}},()=>h.params)):S(Tt,{get fallback(){return u.fallback},get children(){return S(R,Y({get stackTop(){return h.stackTop}},()=>h.params))}})})()),yt(i=>{let L=h.path,N=h.className,H=h.stackTop?"auto":"none",O=st()*10,A=d?void 0:V()+"px",j=d?void 0:tt()+"px";return L!==i._v$&&wt(p,"data-path",i._v$=L),N!==i._v$2&&vt(p,i._v$2=N),H!==i._v$3&&p.style.setProperty("pointer-events",i._v$3=H),O!==i._v$4&&p.style.setProperty("z-index",i._v$4=O),A!==i._v$5&&p.style.setProperty("width",i._v$5=A),j!==i._v$6&&p.style.setProperty("height",i._v$6=j),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),p})()}})),v})()};return{...n,goBack:J,search:e.search,nowUrl:e.nowUrl,nowFullUrl:e.nowFullUrl,searchUrlToObject:e.searchUrlToObject,listen:e.listen,beforeChange:e.beforeChange,getStack:()=>e.stack,Routers:Q}};export{Qt as createRouters,X as moveLeftCss,z as moveTopCss,gt as useAnimationNavigation};
