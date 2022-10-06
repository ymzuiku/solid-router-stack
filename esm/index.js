import{template as bt}from"solid-js/web";import{classList as Et}from"solid-js/web";import{setAttribute as Tt}from"solid-js/web";import{effect as Pt}from"solid-js/web";import{insert as _t}from"solid-js/web";import{mergeProps as Ct}from"solid-js/web";import{createComponent as U}from"solid-js/web";import{createRoot as Rt,createSignal as S,For as Ut,lazy as At,Suspense as Ht}from"solid-js";var Q=[],pt=t=>{Q.push(t)},C=[],ft=t=>{C.push(t)},w=t=>(t||(t=Z()),{url:t,path:t.split("?")[0],params:_(t)||{},time:Date.now(),index:n.stack.length});["popstate","pushState","pushSingleState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let s=V();if(t==="popstate"){let i=n.stack[n.stack.length-2];if(!i||s!==i.path)n.stack.pop(),n.stack.push(w(""));else if(n.stack.pop(),n.stack.length===0){let l=w("");n.stack.push(l)}}let r=n.stack[n.stack.length-1];Q.forEach(i=>{i(r?r.path:"",t,n.stack)})})});var ut=t=>{if(n.stack.length==1)return"";n.stack.pop(),n.stack.length||n.stack.push(w(""));let r=n.stack[n.stack.length-1],i=r.path;return n.useHash&&(i="/#"+r.path),i=tt(i,{..._(r.url),...t}),r.params=_(i)||{},r.url=i,i},ht=async(t,s)=>{for(let r of C)t=await Promise.resolve(r(t,L(t)));n.stack.push(w(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),s?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},mt=async t=>{for(let r of C)t=await Promise.resolve(r(t,L(t)));let s=w(t);n.stack=n.stack.filter(r=>r.path!==s.path),n.stack.push(s),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushSingleState"))},dt=async t=>{for(let s of C)t=await Promise.resolve(s(t,L(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(w(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},kt=(t,s)=>{let r=ut(t);r!=""&&(history.replaceState(null,"",r),s?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},gt=t=>{n.stack=[w(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function vt(){let[t,s]=location.href.split("#");return new URLSearchParams([t.split("?")[1],s.split("?")[1]].join("&"))}function L(t){return t.split("?")[0]}function V(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function Z(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function tt(t,s){if(s){let r={};Object.keys(s).forEach(l=>{let k=s[l];k!==void 0&&k!==""&&(r[l]=k)});let i=new URLSearchParams(r).toString();return i?t+"?"+i:t}return t}function _(t){let[s,r]=t.split("#"),i=new URLSearchParams([s.split("?")[1],r?r.split("?")[1]:""].join("&")),l={},k=!1;for(let[T,E]of i.entries())k=!0,E!==void 0&&E!==""&&(l[T]=E);if(!!k)return l}var n={search:vt,nowUrl:V,urlToPath:L,nowFullUrl:Z,push:ht,pushSingle:mt,replace:dt,goBack:kt,clearTo:gt,listen:pt,beforeChange:ft,searchUrlToObject:_,parasmUrl:tt,onLastBack:t=>t.url,newStack:w,stack:[],useHash:!1};import{template as et}from"solid-js/web";var wt=et("<div>Not found page</div>",2),St=et("<div></div>",2),c={navigationDuration:0,className:"",notFound:{async:!0,render:()=>wt.cloneNode(!0)},fallback:St.cloneNode(!0)};var R=t=>{let s=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as yt,createSignal as xt}from"solid-js";function zt(t,s,r){let[i,l]=xt(t[s]||r);return yt(()=>{l(t[s]||r)}),[i,l]}var K=(t,s=260)=>{if(Object.assign(c,{navigationDuration:s}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},$t={moveTop:R,moveLeft:O,scale:st},Yt=(t,s=150)=>{if(t==="none"){c.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?K(R(s),s+10):K(window.innerWidth>window.innerHeight?R(s):O(s+10),260):K($t[t](s),s+10)};var Lt=bt("<div></div>",2);var d="solid-router-stack-now",W="solid-router-stack-before",Bt="solid-router-stack-leave",b="solid-router-stack-after",re=t=>{let s={...t},[r,i]=Rt(()=>S([])),l=o=>{let[e,a]=S(o.path),[x,$]=S(""),[P,N]=S(!0),[D,j]=S(!1),[F,m]=S(o.params);return{path:e,setPath:a,css:x,setCss:$,stackTop:P,setStackTop:N,params:F,setParams:m,stackShow:D,setStackShow:j}},k=()=>{let o=r(),e=o[o.length-1];e&&e.setStackTop(!1);let a=n.stack[n.stack.length-1],x=l(a);i([...r().filter($=>$.path()!==a.path),x])},T=()=>{let o=r(),e=o[o.length-1];e&&e.setStackTop(!1);let a=n.stack[n.stack.length-1],x=l(a);i([...r(),x])},E=()=>{let o=n.stack[n.stack.length-1],e=r();if(e.length>1){let a=e[e.length-2];a.setStackTop(!0),a.setPath(o.path),a.setParams(o.params),i([...e])}setTimeout(()=>{e.pop(),i([...e])},c.navigationDuration)},nt=()=>{let o=r();o.pop();let e=n.stack[n.stack.length-1],a=l(e);a.setStackShow(!0),i([...o,a])},ot=()=>{i([]),T()},p=o=>{if(c.navigationDuration==0)return;let e=r(),a=e[e.length-1];a&&a.setCss(o)},y=o=>{if(c.navigationDuration==0)return;let e=r(),a=e[e.length-2];a&&a.setCss(o)},g=o=>{let e=r(),a=e[e.length-1];a&&a.setStackShow(o)},v=o=>{let e=r(),a=e[e.length-2];a&&a.setStackShow(o)},A=0,u=!1;n.listen((o,e)=>{let a=n.stack.length;e==="pushSingleState"?(k(),u?(g(!0),v(!1),p(d),y(b)):(g(!0),setTimeout(()=>{v(!1)},c.navigationDuration),p(W),requestAnimationFrame(()=>{y(b),p(d)}))):e==="clearState"?(ot(),u?(g(!0),v(!1),p(d),y(b)):(g(!0),setTimeout(()=>{v(!1)},c.navigationDuration),p(W),requestAnimationFrame(()=>{y(b),p(d)}))):a>A?(T(),u?(g(!0),v(!1),p(d),y(b)):(g(!0),setTimeout(()=>{v(!1)},c.navigationDuration),p(W),requestAnimationFrame(()=>{y(b),p(d)}))):A!==a&&a>=1?(g(!0),v(!0),p(Bt),y(d),E(),u?p(d):setTimeout(()=>{p(d)},c.navigationDuration)):(g(!0),v(!0),nt(),p(d)),A=a,u&&requestAnimationFrame(()=>{u=!1})});let H=!1,at=(o,e)=>{e&&(u=!0),n.goBack(o,H)},q=o=>{if(o.async)o.Component=o.render;else{let e=At(o.render);o.Component=a=>U(Ht,{get fallback(){return c.fallback},get children(){return U(e,a)}})}o.push=(e,a)=>{a&&(u=!0),n.push(n.parasmUrl(o.path,e),H)},o.pushSingle=(e,a)=>{a&&(u=!0),n.pushSingle(n.parasmUrl(o.path,e))},o.replace=(e,a)=>{a&&(u=!0),n.replace(n.parasmUrl(o.path,e))},o.clearTo=(e,a)=>{a&&(u=!0),n.clearTo(n.parasmUrl(o.path,e))}};q(c.notFound),Object.keys(s).forEach(o=>{let e=s[o];q(e)});let B={},z=[];Object.keys(s).map(o=>{let e=s[o];e&&(B[e.path]=e,e.async||z.push(e))});function rt(o){o.preloadAll?z.forEach(e=>{e.render()}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(e=>{let a=s[e];a&&!a.async&&a.render()})},200)}return{...s,goBack:at,Routers:({root:o,hash:e,ignoreFull:a,virtualHistory:x})=>{n.useHash=!!e,H=!!x;let $=n.nowUrl(),P=n.searchUrlToObject(n.nowFullUrl());u=!0,$!=="/"&&$!==o.path?(o.push(void 0,!0),(B[$]||c.notFound).push({...P})):o.push(P,!0);let[N,D]=S(typeof window<"u"?window.innerWidth:0),[j,F]=S(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{D(window.innerWidth),F(window.innerHeight)}),U(Ut,{get each(){return r()},children:(m,it)=>{let M=B[m.path()]||c.notFound;rt(M);let ct=M.Component;return(()=>{let h=Lt.cloneNode(!0);return h.style.setProperty("position","fixed"),h.style.setProperty("top","0px"),h.style.setProperty("left","0px"),_t(h,U(ct,Ct({get stackLength(){return r().length},get stackTop(){return m.stackTop()},get stackShow(){return m.stackShow()}},()=>m.params()))),Pt(f=>{let I=m.path(),lt={[m.css()]:!0,[c.className]:!0},X=m.stackTop()?"auto":"none",Y=it()*10,G=a?void 0:N()+"px",J=a?void 0:j()+"px";return I!==f._v$&&Tt(h,"data-path",f._v$=I),f._v$2=Et(h,lt,f._v$2),X!==f._v$3&&h.style.setProperty("pointer-events",f._v$3=X),Y!==f._v$4&&h.style.setProperty("z-index",f._v$4=Y),G!==f._v$5&&h.style.setProperty("width",f._v$5=G),J!==f._v$6&&h.style.setProperty("height",f._v$6=J),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),h})()}})}}};export{zt as createPropsSignal,re as createRouters,n as historyProxy,O as moveLeftCss,R as moveTopCss,st as scaleCss,K as setCustomNavigationAnimation,Yt as setNavigationAnimation,c as stackOptions};
//# sourceMappingURL=index.js.map
