import{template as St}from"solid-js/web";import{mergeProps as nt}from"solid-js/web";import{className as $t}from"solid-js/web";import{setAttribute as bt}from"solid-js/web";import{effect as xt}from"solid-js/web";import{insert as Et}from"solid-js/web";import{memo as Tt}from"solid-js/web";import{createComponent as E}from"solid-js/web";import{createRoot as _t,createSignal as d,For as Pt,lazy as Ct,Suspense as Ht}from"solid-js";var G=[],it=t=>{G.push(t)},b=[],lt=t=>{b.push(t)},v=t=>({url:t,path:t.split("?")[0],params:$(t)||{},time:Date.now(),index:s.stack.length}),q="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=V();if(t==="popstate")if(e===q){let a=Z(),l=v(a),h=s.stack[s.stack.length-1];h.url=l.url,h.params=l.params}else s.stack.pop();let r=s.stack[s.stack.length-1];G.forEach(a=>{a(r?r.path:"",t,s.stack)}),q=e})});var J=t=>{if(s.stack.length==1)return"";s.stack.pop();let r=s.stack[s.stack.length-1],a=r.path;return s.useHash&&(a="/#"+r.path),a=tt(a,{...$(r.url),...t}),r.params=$(a)||{},r.url=a,a},pt=t=>{b.forEach(e=>{t=e(t)}),s.stack.push(v(t)),s.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},ft=t=>{b.forEach(e=>{t=e(t)}),s.stack.push(v(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Q=t=>{b.forEach(e=>{t=e(t)}),s.stack.length>0&&s.stack.pop(),s.stack.push(v(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},ut=t=>{let e=J(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},ht=t=>{let e=J(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},mt=t=>{s.stack=[v(t)],Q(t)};function dt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function V(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function Z(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function tt(t,e){if(e){let r={};Object.keys(e).forEach(l=>{let h=e[l];h!==void 0&&h!==""&&(r[l]=h)});let a=new URLSearchParams(r).toString();return a?t+"?"+a:t}return t}function $(t){let[e,r]=t.split("#"),a=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),l={},h=!1;for(let[T,m]of a.entries())h=!0,m!==void 0&&m!==""&&(l[T]=m);if(!!h)return l}var s={search:dt,nowUrl:V,nowFullUrl:Z,push:pt,pushNotHistory:ft,replace:Q,goBack:ut,gobackNotHistory:ht,clearTo:mt,listen:it,beforeChange:lt,searchUrlToObject:$,parasmUrl:tt,onLastBack:t=>t.url,newStack:v,stack:[],useHash:!1};import{template as et}from"solid-js/web";var gt=et("<div>Not found page</div>",2),vt=et("<div></div>",2),u={navigationDuration:0,notFound:{async:!0,render:()=>gt.cloneNode(!0)},fallback:vt.cloneNode(!0)};var x=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},B=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as kt,createSignal as wt}from"solid-js";function Kt(t,e,r){let[a,l]=wt(t[e]||r);return kt(()=>{l(t[e]||r)}),[a,l]}var O=(t,e=260)=>{if(Object.assign(u,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let a=document.createElement("style");a.id="solid-router-stack-css",a.innerHTML=t,document.head.append(a)}}},yt={moveTop:x,moveLeft:B,scale:st},It=(t,e=150)=>{if(t==="none"){u.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?O(x(e),e+10):O(window.innerWidth>window.innerHeight?x(e):B(e+10),260):O(yt[t](e),e+10)};var Ut=St("<div></div>",2),k="solid-router-stack-now",Lt="solid-router-stack-before",Rt="solid-router-stack-leave",ot="solid-router-stack-after",oe=t=>{let e={...t},[r,a]=_t(()=>d([])),l=()=>{let n=r(),o=n[n.length-1];o&&o.setTop(!1);let c=s.stack[s.stack.length-1],[H,w]=d(c.url),[S,L]=d(c.path),[R,N]=d(""),[A,p]=d(!0),[j,y]=d(c.params);a([...r(),{url:H,setUrl:w,path:S,setPath:L,css:R,setCss:N,top:A,setTop:p,params:j,setParams:y}])},h=()=>{let n=s.stack[s.stack.length-1],o=r();if(o.length>1){let c=o[o.length-2];c.setTop(!0),c.setUrl(n.url),c.setPath(n.path),c.setParams(n.params),a([...o])}setTimeout(()=>{o.pop(),a([...o])},u.navigationDuration)},T=()=>{let n=s.stack[s.stack.length-1],o=r(),c=o[o.length-1];c.setUrl(n.url),c.setParams(n.params),a([...o])},m=n=>{if(u.navigationDuration==0)return;let o=r(),c=o[o.length-1];c&&c.setCss(n)},U=n=>{if(u.navigationDuration==0)return;let o=r(),c=o[o.length-2];c&&c.setCss(n)},_=0,g=!1;s.listen(()=>{let n=s.stack.length;n>_?(l(),g?(m(k),U(ot)):(m(Lt),requestAnimationFrame(()=>{U(ot),m(k)}))):_!==n&&n>=1?(m(Rt),U(k),h(),g?m(k):setTimeout(()=>{m(k)},u.navigationDuration)):(T(),m(k)),_=n,g&&requestAnimationFrame(()=>{g=!1})});let P=!1,rt=n=>{P?s.gobackNotHistory(n):s.goBack(n)},F=n=>{n.async?n.Component=n.render:n.Component=Ct(n.render),n.push=o=>{P?s.pushNotHistory(s.parasmUrl(n.path,o)):s.push(s.parasmUrl(n.path,o))},n.replace=o=>{s.replace(s.parasmUrl(n.path,o))},n.clearTo=o=>{g=!0,s.clearTo(s.parasmUrl(n.path,o))}};F(u.notFound),Object.keys(e).forEach(n=>{let o=e[n];F(o)});let C={},D=[];Object.keys(e).map(n=>{let o=e[n];o&&(C[o.path]=o,o.async||D.push(o))});function at(n){n.preloadAll?D.forEach(o=>{o.render()}):n.preload&&n.preload.length&&setTimeout(()=>{n.preload.forEach(o=>{let c=e[o];c&&!c.async&&c.render()})},200)}let ct=({root:n,hash:o,ignoreFull:c,virtualHistory:H})=>{s.useHash=!!o,P=!!H;let w=s.nowUrl(),S=s.searchUrlToObject(s.nowFullUrl());if(g=!0,w!=="/"&&w!==n.path){n.push();let p=C[w]||u.notFound;g=!0,p.push({...S})}else n.push(S);let[L,R]=d(typeof window<"u"?window.innerWidth:0),[N,A]=d(typeof window<"u"?window.innerHeight:0);return c||typeof window<"u"&&window.addEventListener("resize",()=>{R(window.innerWidth),A(window.innerHeight)}),E(Pt,{get each(){return r()},children:(p,j)=>{let y=C[p.path()]||u.notFound;at(y);let K=y.Component;return(()=>{let f=Ut.cloneNode(!0);return f.style.setProperty("position","fixed"),f.style.setProperty("top","0px"),f.style.setProperty("left","0px"),f.style.setProperty("background","inherit"),Et(f,(()=>{let i=Tt(()=>!!y.async,!0);return()=>i()?E(K,nt({get stackTop(){return p.top()}},()=>p.params())):E(Ht,{get fallback(){return u.fallback},get children(){return E(K,nt({get stackTop(){return p.top()}},()=>p.params()))}})})()),xt(i=>{let W=p.path,M=p.css(),z=p.top()?"auto":"none",I=j()*10,X=c?void 0:L()+"px",Y=c?void 0:N()+"px";return W!==i._v$&&bt(f,"data-path",i._v$=W),M!==i._v$2&&$t(f,i._v$2=M),z!==i._v$3&&f.style.setProperty("pointer-events",i._v$3=z),I!==i._v$4&&f.style.setProperty("z-index",i._v$4=I),X!==i._v$5&&f.style.setProperty("width",i._v$5=X),Y!==i._v$6&&f.style.setProperty("height",i._v$6=Y),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),f})()}})};return{...e,goBack:rt,history:{search:s.search,nowUrl:s.nowUrl,nowFullUrl:s.nowFullUrl,searchUrlToObject:s.searchUrlToObject,listen:s.listen,beforeChange:s.beforeChange,getStack:()=>s.stack},Routers:ct}};export{Kt as createPropsSignal,oe as createRouters,B as moveLeftCss,x as moveTopCss,st as scaleCss,O as setCustomNavigationAnimation,It as setNavigationAnimation};
