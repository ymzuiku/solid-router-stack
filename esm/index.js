import{template as yt}from"solid-js/web";import{mergeProps as ot}from"solid-js/web";import{className as St}from"solid-js/web";import{setAttribute as $t}from"solid-js/web";import{effect as xt}from"solid-js/web";import{insert as bt}from"solid-js/web";import{memo as Et}from"solid-js/web";import{createComponent as E}from"solid-js/web";import{createRoot as _t,createSignal as h,For as Tt,lazy as Ct,Suspense as Ut}from"solid-js";var G=[],it=t=>{G.push(t)},x=[],ct=t=>{x.push(t)},g=t=>({url:t,path:t.split("?")[0],params:$(t)||{},time:Date.now(),index:o.stack.length}),q="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=V();if(t==="popstate")if(e===q){let a=Z(),l=g(a),m=o.stack[o.stack.length-1];m.url=l.url,m.params=l.params}else o.stack.pop();let r=o.stack[o.stack.length-1];G.forEach(a=>{a(r?r.path:"",t,o.stack)}),q=e})});var J=t=>{if(o.stack.length==1)return"";o.stack.pop();let r=o.stack[o.stack.length-1],a=r.path;return o.useHash&&(a="/#"+r.path),a=tt(a,{...$(r.url),...t}),r.params=$(a)||{},r.url=a,a},lt=async t=>{for(let e of x)t=await Promise.resolve(e(t));o.stack.push(g(t)),o.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},pt=async t=>{for(let e of x)t=await Promise.resolve(e(t));o.stack.push(g(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Q=async t=>{for(let e of x)t=await Promise.resolve(e(t));o.stack.length>0&&o.stack.pop(),o.stack.push(g(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},ft=t=>{let e=J(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},ut=t=>{let e=J(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},mt=t=>{o.stack=[g(t)],Q(t)};function dt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function V(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function Z(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function tt(t,e){if(e){let r={};Object.keys(e).forEach(l=>{let m=e[l];m!==void 0&&m!==""&&(r[l]=m)});let a=new URLSearchParams(r).toString();return a?t+"?"+a:t}return t}function $(t){let[e,r]=t.split("#"),a=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),l={},m=!1;for(let[P,d]of a.entries())m=!0,d!==void 0&&d!==""&&(l[P]=d);if(!!m)return l}var o={search:dt,nowUrl:V,nowFullUrl:Z,push:lt,pushNotHistory:pt,replace:Q,goBack:ft,gobackNotHistory:ut,clearTo:mt,listen:it,beforeChange:ct,searchUrlToObject:$,parasmUrl:tt,onLastBack:t=>t.url,newStack:g,stack:[],useHash:!1};import{template as et}from"solid-js/web";var ht=et("<div>Not found page</div>",2),vt=et("<div></div>",2),u={navigationDuration:0,notFound:{async:!0,render:()=>ht.cloneNode(!0)},fallback:vt.cloneNode(!0)};var b=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},j=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},st=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as gt,createSignal as kt}from"solid-js";function Kt(t,e,r){let[a,l]=kt(t[e]||r);return gt(()=>{l(t[e]||r)}),[a,l]}var O=(t,e=260)=>{if(Object.assign(u,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let a=document.createElement("style");a.id="solid-router-stack-css",a.innerHTML=t,document.head.append(a)}}},wt={moveTop:b,moveLeft:j,scale:st},It=(t,e=150)=>{if(t==="none"){u.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?O(b(e),e+10):O(window.innerWidth>window.innerHeight?b(e):j(e+10),260):O(wt[t](e),e+10)};var Pt=yt("<div></div>",2);var k="solid-router-stack-now",Ht="solid-router-stack-before",Rt="solid-router-stack-leave",nt="solid-router-stack-after",ne=t=>{let e={...t},[r,a]=_t(()=>h([])),l=()=>{let s=r(),n=s[s.length-1];n&&n.setTop(!1);let i=o.stack[o.stack.length-1],[H,w]=h(i.url),[S,R]=h(i.path),[L,N]=h(""),[A,p]=h(!0),[B,y]=h(i.params);a([...r(),{url:H,setUrl:w,path:S,setPath:R,css:L,setCss:N,top:A,setTop:p,params:B,setParams:y}])},m=()=>{let s=o.stack[o.stack.length-1],n=r();if(n.length>1){let i=n[n.length-2];i.setTop(!0),i.setUrl(s.url),i.setPath(s.path),i.setParams(s.params),a([...n])}setTimeout(()=>{n.pop(),a([...n])},u.navigationDuration)},P=()=>{let s=o.stack[o.stack.length-1],n=r(),i=n[n.length-1];i.setUrl(s.url),i.setParams(s.params),a([...n])},d=s=>{if(u.navigationDuration==0)return;let n=r(),i=n[n.length-1];i&&i.setCss(s)},_=s=>{if(u.navigationDuration==0)return;let n=r(),i=n[n.length-2];i&&i.setCss(s)},T=0,v=!1;o.listen(()=>{let s=o.stack.length;s>T?(l(),v?(d(k),_(nt)):(d(Ht),requestAnimationFrame(()=>{_(nt),d(k)}))):T!==s&&s>=1?(d(Rt),_(k),m(),v?d(k):setTimeout(()=>{d(k)},u.navigationDuration)):(P(),d(k)),T=s,v&&requestAnimationFrame(()=>{v=!1})});let C=!1,rt=s=>{C?o.gobackNotHistory(s):o.goBack(s)},D=s=>{s.async?s.Component=s.render:s.Component=Ct(s.render),s.push=n=>{C?o.pushNotHistory(o.parasmUrl(s.path,n)):o.push(o.parasmUrl(s.path,n))},s.replace=n=>{o.replace(o.parasmUrl(s.path,n))},s.clearTo=n=>{v=!0,o.clearTo(o.parasmUrl(s.path,n))}};D(u.notFound),Object.keys(e).forEach(s=>{let n=e[s];D(n)});let U={},F=[];Object.keys(e).map(s=>{let n=e[s];n&&(U[n.path]=n,n.async||F.push(n))});function at(s){s.preloadAll?F.forEach(n=>{n.render()}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(n=>{let i=e[n];i&&!i.async&&i.render()})},200)}return{...e,goBack:rt,Routers:({root:s,hash:n,ignoreFull:i,virtualHistory:H})=>{o.useHash=!!n,C=!!H;let w=o.nowUrl(),S=o.searchUrlToObject(o.nowFullUrl());if(v=!0,w!=="/"&&w!==s.path){s.push();let p=U[w]||u.notFound;v=!0,p.push({...S})}else s.push(S);let[R,L]=h(typeof window<"u"?window.innerWidth:0),[N,A]=h(typeof window<"u"?window.innerHeight:0);return i||typeof window<"u"&&window.addEventListener("resize",()=>{L(window.innerWidth),A(window.innerHeight)}),E(Tt,{get each(){return r()},children:(p,B)=>{let y=U[p.path()]||u.notFound;at(y);let K=y.Component;return(()=>{let f=Pt.cloneNode(!0);return f.style.setProperty("position","fixed"),f.style.setProperty("top","0px"),f.style.setProperty("left","0px"),f.style.setProperty("background","inherit"),bt(f,(()=>{let c=Et(()=>!!y.async,!0);return()=>c()?E(K,ot({get stackTop(){return p.top()}},()=>p.params())):E(Ut,{get fallback(){return u.fallback},get children(){return E(K,ot({get stackTop(){return p.top()}},()=>p.params()))}})})()),xt(c=>{let W=p.path(),M=p.css(),z=p.top()?"auto":"none",I=B()*10,X=i?void 0:R()+"px",Y=i?void 0:N()+"px";return W!==c._v$&&$t(f,"data-path",c._v$=W),M!==c._v$2&&St(f,c._v$2=M),z!==c._v$3&&f.style.setProperty("pointer-events",c._v$3=z),I!==c._v$4&&f.style.setProperty("z-index",c._v$4=I),X!==c._v$5&&f.style.setProperty("width",c._v$5=X),Y!==c._v$6&&f.style.setProperty("height",c._v$6=Y),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),f})()}})}}};export{Kt as createPropsSignal,ne as createRouters,o as historyProxy,j as moveLeftCss,b as moveTopCss,st as scaleCss,O as setCustomNavigationAnimation,It as setNavigationAnimation};
