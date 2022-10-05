import{template as bt}from"solid-js/web";import{classList as Et}from"solid-js/web";import{setAttribute as Tt}from"solid-js/web";import{effect as Pt}from"solid-js/web";import{insert as _t}from"solid-js/web";import{mergeProps as Ct}from"solid-js/web";import{createComponent as U}from"solid-js/web";import{createRoot as Rt,createSignal as S,For as Ut,lazy as At,Suspense as Ht}from"solid-js";var Q=[],pt=t=>{Q.push(t)},C=[],ft=t=>{C.push(t)},w=t=>(t||(t=Z()),{url:t,path:t.split("?")[0],params:_(t)||{},time:Date.now(),index:n.stack.length});["popstate","pushState","moveState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let s=V();if(t==="popstate"){let c=n.stack[n.stack.length-2];if(!c||s!==c.path)n.stack.pop(),n.stack.push(w(""));else if(n.stack.pop(),n.stack.length===0){let l=w("");n.stack.push(l)}}let r=n.stack[n.stack.length-1];Q.forEach(c=>{c(r?r.path:"",t,n.stack)})})});var ut=t=>{if(n.stack.length==1)return"";n.stack.pop(),n.stack.length||n.stack.push(w(""));let r=n.stack[n.stack.length-1],c=r.path;return n.useHash&&(c="/#"+r.path),c=tt(c,{..._(r.url),...t}),r.params=_(c)||{},r.url=c,c},ht=async(t,s)=>{for(let r of C)t=await Promise.resolve(r(t,L(t)));n.stack.push(w(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),s?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},mt=async t=>{for(let r of C)t=await Promise.resolve(r(t,L(t)));let s=w(t);n.stack=n.stack.filter(r=>r.path!==s.path),n.stack.push(s),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("moveState"))},dt=async t=>{for(let s of C)t=await Promise.resolve(s(t,L(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(w(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},kt=(t,s)=>{let r=ut(t);r!=""&&(history.replaceState(null,"",r),s?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},vt=t=>{n.stack=[w(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function gt(){let[t,s]=location.href.split("#");return new URLSearchParams([t.split("?")[1],s.split("?")[1]].join("&"))}function L(t){return t.split("?")[0]}function V(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function Z(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function tt(t,s){if(s){let r={};Object.keys(s).forEach(l=>{let k=s[l];k!==void 0&&k!==""&&(r[l]=k)});let c=new URLSearchParams(r).toString();return c?t+"?"+c:t}return t}function _(t){let[s,r]=t.split("#"),c=new URLSearchParams([s.split("?")[1],r?r.split("?")[1]:""].join("&")),l={},k=!1;for(let[T,E]of c.entries())k=!0,E!==void 0&&E!==""&&(l[T]=E);if(!!k)return l}var n={search:gt,nowUrl:V,urlToPath:L,nowFullUrl:Z,push:ht,move:mt,replace:dt,goBack:kt,clearTo:vt,listen:pt,beforeChange:ft,searchUrlToObject:_,parasmUrl:tt,onLastBack:t=>t.url,newStack:w,stack:[],useHash:!1};import{template as et}from"solid-js/web";var wt=et("<div>Not found page</div>",2),St=et("<div></div>",2),i={navigationDuration:0,className:"",notFound:{async:!0,render:()=>wt.cloneNode(!0)},fallback:St.cloneNode(!0)};var R=t=>{let s=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now {
  ${s}
}
.solid-router-stack-before {
  ${s}
  will-change: transform, opacity;
  transform: translateY(7vh);
}
.solid-router-stack-leave {
  ${s}
  will-change: transform, opacity;
  opacity: 0;
  transform: translateY(15vh);
  pointer-events: none !important;
}
.solid-router-stack-after {
  ${s}
  will-change: transform, opacity;
  transform: translateY(-5vh);
  pointer-events: none !important;
}
`},O=t=>{let s=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now {
  ${s}
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-before {
  ${s}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-leave {
  ${s}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: 0px -10px 20px rgba(0,0,0,0.12);
  pointer-events: none !important;
}
.solid-router-stack-after {
  ${s}
  will-change: transform, opacity;
  transform: translateX(-30vw);
  pointer-events: none !important;
}
`},st=t=>{let s=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now {
  ${s}
}
.solid-router-stack-before {
  ${s}
  will-change: transform, opacity;
  opacity: 0;
  transform: scale(0.8);
}
.solid-router-stack-leave {
  ${s}
  will-change: transform, opacity;
  transform: scale(0.8);
  opacity: 0;
  pointer-events: none !important;
}
.solid-router-stack-after {
  ${s}
  will-change: transform, opacity;
  transform: scale(1.05);
  pointer-events: none !important;
}
`};import{createEffect as yt,createSignal as xt}from"solid-js";function zt(t,s,r){let[c,l]=xt(t[s]||r);return yt(()=>{l(t[s]||r)}),[c,l]}var K=(t,s=260)=>{if(Object.assign(i,{navigationDuration:s}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let c=document.createElement("style");c.id="solid-router-stack-css",c.innerHTML=t,document.head.append(c)}}},$t={moveTop:R,moveLeft:O,scale:st},Yt=(t,s=150)=>{if(t==="none"){i.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?K(R(s),s+10):K(window.innerWidth>window.innerHeight?R(s):O(s+10),260):K($t[t](s),s+10)};var Lt=bt("<div></div>",2);var d="solid-router-stack-now",W="solid-router-stack-before",Bt="solid-router-stack-leave",b="solid-router-stack-after",re=t=>{let s={...t},[r,c]=Rt(()=>S([])),l=o=>{let[e,a]=S(o.path),[x,$]=S(""),[P,N]=S(!0),[D,j]=S(!1),[F,h]=S(o.params);return{path:e,setPath:a,css:x,setCss:$,stackTop:P,setStackTop:N,params:F,setParams:h,stackShow:D,setStackShow:j}},k=()=>{let o=r(),e=o[o.length-1];e&&e.setStackTop(!1);let a=n.stack[n.stack.length-1],x=l(a);c([...r().filter($=>$.path()!==a.path),x])},T=()=>{let o=r(),e=o[o.length-1];e&&e.setStackTop(!1);let a=n.stack[n.stack.length-1],x=l(a);c([...r(),x])},E=()=>{let o=n.stack[n.stack.length-1],e=r();if(e.length>1){let a=e[e.length-2];a.setStackTop(!0),a.setPath(o.path),a.setParams(o.params),c([...e])}setTimeout(()=>{e.pop(),c([...e])},i.navigationDuration)},nt=()=>{let o=r();o.pop();let e=n.stack[n.stack.length-1],a=l(e);a.setStackShow(!0),c([...o,a])},ot=()=>{c([]),T()},p=o=>{if(i.navigationDuration==0)return;let e=r(),a=e[e.length-1];a&&a.setCss(o)},y=o=>{if(i.navigationDuration==0)return;let e=r(),a=e[e.length-2];a&&a.setCss(o)},v=o=>{let e=r(),a=e[e.length-1];a&&a.setStackShow(o)},g=o=>{let e=r(),a=e[e.length-2];a&&a.setStackShow(o)},A=0,f=!1;n.listen((o,e)=>{let a=n.stack.length;e==="moveState"?(k(),f?(v(!0),g(!1),p(d),y(b)):(v(!0),setTimeout(()=>{g(!1)},i.navigationDuration),p(W),requestAnimationFrame(()=>{y(b),p(d)}))):e==="clearState"?(ot(),f?(v(!0),g(!1),p(d),y(b)):(v(!0),setTimeout(()=>{g(!1)},i.navigationDuration),p(W),requestAnimationFrame(()=>{y(b),p(d)}))):a>A?(T(),f?(v(!0),g(!1),p(d),y(b)):(v(!0),setTimeout(()=>{g(!1)},i.navigationDuration),p(W),requestAnimationFrame(()=>{y(b),p(d)}))):A!==a&&a>=1?(v(!0),g(!0),p(Bt),y(d),E(),f?p(d):setTimeout(()=>{p(d)},i.navigationDuration)):(v(!0),g(!0),nt(),p(d)),A=a,f&&requestAnimationFrame(()=>{f=!1})});let H=!1,at=(o,e)=>{f=!!e,n.goBack(o,H)},q=o=>{if(o.async)o.Component=o.render;else{let e=At(o.render);o.Component=a=>U(Ht,{get fallback(){return i.fallback},get children(){return U(e,a)}})}o.push=(e,a)=>{f=!!a,n.push(n.parasmUrl(o.path,e),H)},o.move=(e,a)=>{f=!!a,n.move(n.parasmUrl(o.path,e))},o.replace=(e,a)=>{f=!!a,n.replace(n.parasmUrl(o.path,e))},o.clearTo=(e,a)=>{f=!!a,n.clearTo(n.parasmUrl(o.path,e))}};q(i.notFound),Object.keys(s).forEach(o=>{let e=s[o];q(e)});let B={},z=[];Object.keys(s).map(o=>{let e=s[o];e&&(B[e.path]=e,e.async||z.push(e))});function rt(o){o.preloadAll?z.forEach(e=>{e.render()}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(e=>{let a=s[e];a&&!a.async&&a.render()})},200)}return{...s,goBack:at,Routers:({root:o,hash:e,ignoreFull:a,virtualHistory:x})=>{n.useHash=!!e,H=!!x;let $=n.nowUrl(),P=n.searchUrlToObject(n.nowFullUrl());if(f=!0,$!=="/"&&$!==o.path){o.push();let h=B[$]||i.notFound;f=!0,h.push({...P})}else o.push(P);let[N,D]=S(typeof window<"u"?window.innerWidth:0),[j,F]=S(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{D(window.innerWidth),F(window.innerHeight)}),U(Ut,{get each(){return r()},children:(h,ct)=>{let M=B[h.path()]||i.notFound;rt(M);let it=M.Component;return(()=>{let m=Lt.cloneNode(!0);return m.style.setProperty("position","fixed"),m.style.setProperty("top","0px"),m.style.setProperty("left","0px"),_t(m,U(it,Ct({get stackLength(){return r().length},get stackTop(){return h.stackTop()},get stackShow(){return h.stackShow()}},()=>h.params()))),Pt(u=>{let I=h.path(),lt={[h.css()]:!0,[i.className]:!0},X=h.stackTop()?"auto":"none",Y=ct()*10,G=a?void 0:N()+"px",J=a?void 0:j()+"px";return I!==u._v$&&Tt(m,"data-path",u._v$=I),u._v$2=Et(m,lt,u._v$2),X!==u._v$3&&m.style.setProperty("pointer-events",u._v$3=X),Y!==u._v$4&&m.style.setProperty("z-index",u._v$4=Y),G!==u._v$5&&m.style.setProperty("width",u._v$5=G),J!==u._v$6&&m.style.setProperty("height",u._v$6=J),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),m})()}})}}};export{zt as createPropsSignal,re as createRouters,n as historyProxy,O as moveLeftCss,R as moveTopCss,st as scaleCss,K as setCustomNavigationAnimation,Yt as setNavigationAnimation,i as stackOptions};
//# sourceMappingURL=index.js.map
