import{template as bt}from"solid-js/web";import{mergeProps as it}from"solid-js/web";import{className as xt}from"solid-js/web";import{setAttribute as Pt}from"solid-js/web";import{effect as Et}from"solid-js/web";import{insert as _t}from"solid-js/web";import{memo as Rt}from"solid-js/web";import{createComponent as _}from"solid-js/web";import{createRoot as Ct,createSignal as g,For as Ut,lazy as Ht,Suspense as Lt}from"solid-js";var Q=[],pt=t=>{Q.push(t)},I=0,P=[],ut=t=>{P.push(t)},y=(t,n={})=>(I+=1,{url:t,id:I,path:t.split("?")[0],params:x(t)||{},time:Date.now(),index:r.stack.length,meta:n}),J="",b;["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let n=tt();if(t==="popstate")if(n===J){let c=et(),u=y(c),d=r.stack[r.stack.length-1];d.url=u.url,d.params=u.params}else b=r.stack.pop();let s=r.stack[r.stack.length-1];Q.forEach(c=>{c(t,s,b,r.stack)}),J=n})});var ft=async(t,n={})=>{for(let c of P)t=await Promise.resolve(c(t,E(t)));let s=y(t);return s.meta=n,r.stack.push(s),r.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState")),s},mt=async(t,n={})=>{for(let c of P)t=await Promise.resolve(c(t,E(t)));let s=y(t);return s.meta=n,r.stack.push(s),r.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState")),s},V=async(t,n={})=>{for(let c of P)t=await Promise.resolve(c(t,E(t)));r.stack.length>0&&(b=r.stack.pop());let s=y(t);return s.meta=n,r.stack.push(s),r.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState")),s},Z=t=>{if(r.stack.length==1)return null;b=r.stack.pop();let s=r.stack[r.stack.length-1],c=s.path;return r.useHash&&(c="/#"+s.path),c=nt(c,{...x(s.url),...t}),s.params=x(c)||{},s.url=c,s},dt=(t,n={})=>{let s=Z(t);return s?(Object.assign(s.meta,n),history.replaceState(null,"",s.url),window.dispatchEvent(new Event("backState")),s):null},ht=(t,n={})=>{let s=Z(t);return s?(Object.assign(s.meta,n),history.replaceState(null,"",s.url),window.dispatchEvent(new Event("replaceState")),s):null},kt=async(t,n={})=>{let s=y(t);return s.meta=n,r.stack=[s],await V(t,n)};function gt(){let[t,n]=location.href.split("#");return new URLSearchParams([t.split("?")[1],n.split("?")[1]].join("&"))}function E(t){return t?t.split("?")[0]:"/"}function tt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function et(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function nt(t,n){if(n){let s={};Object.keys(n).forEach(u=>{let d=n[u];d!==void 0&&d!==""&&(s[u]=d)});let c=new URLSearchParams(s).toString();return c?t+"?"+c:t}return t}function x(t){let[n,s]=t.split("#"),c=new URLSearchParams([n.split("?")[1],s?s.split("?")[1]:""].join("&")),u={},d=!1;for(let[R,h]of c.entries())d=!0,h!==void 0&&h!==""&&(u[R]=h);if(!!d)return u}var r={search:gt,nowUrl:tt,urlToPath:E,nowFullUrl:et,push:ft,pushNotHistory:mt,replace:V,goBack:dt,gobackNotHistory:ht,clearTo:kt,listen:pt,beforeChange:ut,searchUrlToObject:x,parasmUrl:nt,onLastBack:t=>t.url,newStack:y,stack:[],useHash:!1};var ot=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now-top {
  ${n}
}
.solid-router-stack-before-top {
  ${n}
  will-change: transform, opacity;
  transform: translateY(7vh);
}
.solid-router-stack-leave-top {
  ${n}
  will-change: transform, opacity;
  opacity: 0;
  transform: translateY(15vh);
  pointer-events: none !important;
}
.solid-router-stack-after-top {
  ${n}
  will-change: transform, opacity;
  transform: translateY(-5vh);
  pointer-events: none !important;
}
`},st=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now-left {
  ${n}
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-before-left {
  ${n}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: -10px 0px 20px rgba(0,0,0,0.12);
}
.solid-router-stack-leave-left {
  ${n}
  will-change: transform, opacity;
  transform: translateX(100vw);
  box-shadow: 0px -10px 20px rgba(0,0,0,0.12);
  pointer-events: none !important;
}
.solid-router-stack-after-left {
  ${n}
  will-change: transform, opacity;
  transform: translateX(-30vw);
  pointer-events: none !important;
}
`},rt=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
.solid-router-stack-now-scale {
  ${n}
}
.solid-router-stack-before-scale {
  ${n}
  will-change: transform, opacity;
  opacity: 0;
  transform: scale(0.8);
}
.solid-router-stack-leave-scale {
  ${n}
  will-change: transform, opacity;
  transform: scale(0.8);
  opacity: 0;
  pointer-events: none !important;
}
.solid-router-stack-after-scale {
  ${n}
  will-change: transform, opacity;
  transform: scale(1.05);
  pointer-events: none !important;
}
`};var vt=()=>{typeof window<"u"&&[st,ot,rt].forEach(t=>{let n=document.createElement("style");n.id="solid-router-stack-css",n.innerHTML=t(240),document.head.append(n)})};vt();import{template as at}from"solid-js/web";var wt=at("<div>Not found page</div>",2),yt=at("<div></div>",2),w={navigationDuration:250,notFound:{async:!0,render:()=>wt.cloneNode(!0)},fallback:yt.cloneNode(!0)};import{createEffect as St,createSignal as $t}from"solid-js";function Mt(t,n,s){let[c,u]=$t(t[n]||s);return St(()=>{u(t[n]||s)}),[c,u]}var Tt=bt("<div></div>",2);var A="solid-router-stack-now-",Nt="solid-router-stack-before-",jt="solid-router-stack-leave-",Bt="solid-router-stack-after-",ae=t=>{let n={...t},[s,c]=Ct(()=>g([])),u=()=>{let o=s(),e=o[o.length-1];e&&e.setTop(!1);let a=r.stack[r.stack.length-1],[i,v]=g(a.url),[f,k]=g(a.path),[L,N]=g(""),[j,m]=g(0),[B,S]=g(!0),[$,D]=g(a.params);c([...s(),{url:i,setUrl:v,path:f,setPath:k,css:L,setCss:N,top:B,setTop:S,params:$,setParams:D,duration:j,setDuration:m}])},d=o=>{let e=r.stack[r.stack.length-1],a=s();if(a.length>1){let i=a[a.length-2];i.setTop(!0),i.setUrl(e.url),i.setPath(e.path),i.setParams(e.params),c([...a])}setTimeout(()=>{a.pop(),c([...a])},o)},R=()=>{let o=r.stack[r.stack.length-1],e=s(),a=e[e.length-1];a.setUrl(o.url),a.setParams(o.params),c([...e])},h=o=>{if(w.navigationDuration==0)return;let e=s(),a=e[e.length-1];a&&a.setCss(o)},O=o=>{if(w.navigationDuration==0)return;let e=s(),a=e[e.length-2];a&&a.setCss(o)},T=o=>{if(w.navigationDuration==0)return;let e=s(),a=e[e.length-1];a&&a.setDuration(o);let i=e[e.length-2];i&&i.setDuration(o)},C=0;r.listen((o,e,a)=>{let i=r.stack.length,v=a&&(o==="popstate"||o==="backState"),f=v?a.meta.animation:e.meta.animation,k=(v?a.meta.duration:e.meta.duration)||0;i>C?(u(),T(k),!f||!k?h(""):(h(Nt+f),requestAnimationFrame(()=>{O(Bt+f),h(A+f)}))):C!==i&&i>=1?(d(k),T(k),!f||!k?h(""):(h(jt+f),O(A+f),setTimeout(()=>{h(A+f)},k))):(R(),T(0),h("")),C=i});let U=!1,ct=o=>{let e;return U?e=r.gobackNotHistory(o):e=r.goBack(o),e&&o&&(e.meta.animation=o.animation,e.meta.durtaion=o.durtaion),e},F=o=>{o.async?o.Component=o.render:o.Component=Ht(o.render),o.push=async(e,a)=>{let i;return U?i=await r.pushNotHistory(e?r.parasmUrl(o.path,e):o.path,a):i=await r.push(e?r.parasmUrl(o.path,e):o.path,a),e&&(i.meta.animation=e.animation,i.meta.durtaion=e.duration),i},o.replace=async(e,a)=>{let i=await r.replace(e?r.parasmUrl(o.path,e):o.path,a);return e&&(i.meta.animation=e.animation,i.meta.durtaion=e.duration),i},o.clearTo=async(e,a)=>{let i=await r.clearTo(e?r.parasmUrl(o.path,e):o.path,a);return e&&(i.meta.animation=e.animation,i.meta.durtaion=e.duration),i}};F(w.notFound),Object.keys(n).forEach(o=>{let e=n[o];F(e)});let H={},K=[];Object.keys(n).map(o=>{let e=n[o];e&&(H[e.path]=e,e.async||K.push(e))});function lt(o){o.preloadAll?K.forEach(e=>{e.render()}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(e=>{let a=n[e];a&&!a.async&&a.render()})},200)}return{...n,goBack:ct,Routers:({root:o,hash:e,ignoreFull:a,virtualHistory:i})=>{r.useHash=!!e,U=!!i;let v=r.nowUrl(),f=r.searchUrlToObject(r.nowFullUrl());v!=="/"&&v!==o.path?(o.push(),(H[v]||w.notFound).push({params:f})):o.push(f);let[k,L]=g(typeof window<"u"?window.innerWidth:0),[N,j]=g(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{L(window.innerWidth),j(window.innerHeight)}),_(Ut,{get each(){return s()},children:(m,B)=>{let S=H[m.path()]||w.notFound;lt(S);let $=S.Component,D=()=>{let p=m.duration();return p?p+"ms":"none"};return(()=>{let p=Tt.cloneNode(!0);return p.style.setProperty("position","fixed"),p.style.setProperty("top","0px"),p.style.setProperty("left","0px"),_t(p,(()=>{let l=Rt(()=>!!S.async,!0);return()=>l()?_($,it({get stackTop(){return m.top()}},()=>m.params())):_(Lt,{get fallback(){return w.fallback},get children(){return _($,it({get stackTop(){return m.top()}},()=>m.params()))}})})()),Et(l=>{let W=m.path(),z=m.css(),X=m.top()?"auto":"none",Y=B()*10,M=a?void 0:k()+"px",q=a?void 0:N()+"px",G=D();return W!==l._v$&&Pt(p,"data-path",l._v$=W),z!==l._v$2&&xt(p,l._v$2=z),X!==l._v$3&&p.style.setProperty("pointer-events",l._v$3=X),Y!==l._v$4&&p.style.setProperty("z-index",l._v$4=Y),M!==l._v$5&&p.style.setProperty("width",l._v$5=M),q!==l._v$6&&p.style.setProperty("height",l._v$6=q),G!==l._v$7&&p.style.setProperty("transition-duration",l._v$7=G),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),p})()}})}}};export{Mt as createPropsSignal,ae as createRouters,r as historyProxy,st as moveLeftCss,ot as moveTopCss,rt as scaleCss};
