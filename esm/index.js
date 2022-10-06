import{template as bt}from"solid-js/web";import{classList as Et}from"solid-js/web";import{setAttribute as Tt}from"solid-js/web";import{effect as Pt}from"solid-js/web";import{insert as _t}from"solid-js/web";import{mergeProps as Ct}from"solid-js/web";import{createComponent as K}from"solid-js/web";import{createRoot as Rt,createSignal as $,For as Ut,lazy as At}from"solid-js";var Q=[],pt=t=>{Q.push(t)},R=[],ft=t=>{R.push(t)},x=t=>(t||(t=Z()),{url:t,path:t.split("?")[0],params:L(t)||{},time:Date.now(),index:a.stack.length});["popstate","pushState","pushSingleState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let n=V();if(t==="popstate"){let i=a.stack[a.stack.length-2];if(!i||n!==i.path)a.stack.pop(),a.stack.push(x(""));else if(a.stack.pop(),a.stack.length===0){let p=x("");a.stack.push(p)}}let r=a.stack[a.stack.length-1];Q.forEach(i=>{i(r?r.path:"",t,a.stack)})})});var ut=t=>{if(a.stack.length==1)return"";a.stack.pop(),a.stack.length||a.stack.push(x(""));let r=a.stack[a.stack.length-1],i=r.path;return a.useHash&&(i="/#"+r.path),i=tt(i,{...L(r.url),...t}),r.params=L(i)||{},r.url=i,i},ht=async(t,n)=>{for(let r of R)t=await Promise.resolve(r(t,U(t)));a.stack.push(x(t)),a.useHash&&(t="/#"+t),history.pushState(null,"",t),n?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},mt=async t=>{for(let r of R)t=await Promise.resolve(r(t,U(t)));let n=x(t);a.stack=a.stack.filter(r=>r.path!==n.path),a.stack.push(n),a.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushSingleState"))},dt=async t=>{for(let n of R)t=await Promise.resolve(n(t,U(t)));a.stack.length>0&&a.stack.pop(),a.stack.push(x(t)),a.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},kt=(t,n)=>{let r=ut(t);r!=""&&(history.replaceState(null,"",r),n?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},gt=t=>{a.stack=[x(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function vt(){let[t,n]=location.href.split("#");return new URLSearchParams([t.split("?")[1],n.split("?")[1]].join("&"))}function U(t){return t.split("?")[0]}function V(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function Z(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function tt(t,n){if(n){let r={};Object.keys(n).forEach(p=>{let g=n[p];g!==void 0&&g!==""&&(r[p]=g)});let i=new URLSearchParams(r).toString();return i?t+"?"+i:t}return t}function L(t){let[n,r]=t.split("#"),i=new URLSearchParams([n.split("?")[1],r?r.split("?")[1]:""].join("&")),p={},g=!1;for(let[C,_]of i.entries())g=!0,_!==void 0&&_!==""&&(p[C]=_);if(!!g)return p}var a={search:vt,nowUrl:V,urlToPath:U,nowFullUrl:Z,push:ht,pushSingle:mt,replace:dt,goBack:kt,clearTo:gt,listen:pt,beforeChange:ft,searchUrlToObject:L,parasmUrl:tt,onLastBack:t=>t.url,newStack:x,stack:[],useHash:!1};import{template as et}from"solid-js/web";var wt=et("<div>Not found page</div>",2),St=et("<div></div>",2),l={navigationDuration:0,className:"",notFound:{sync:!0,render:()=>wt.cloneNode(!0)},fallback:St.cloneNode(!0)};var A=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},F=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},st=t=>{let n=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as yt,createSignal as xt}from"solid-js";function qt(t,n,r){let[i,p]=xt(t[n]||r);return yt(()=>{p(t[n]||r)}),[i,p]}var O=(t,n=260)=>{if(Object.assign(l,{navigationDuration:n}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},$t={moveTop:A,moveLeft:F,scale:st},Xt=(t,n=150)=>{if(t==="none"){l.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?O(A(n),n+10):O(window.innerWidth>window.innerHeight?A(n):F(n+10),260):O($t[t](n),n+10)};var Lt=bt("<div></div>",2);var k="solid-router-stack-now",W="solid-router-stack-before",Ht="solid-router-stack-leave",P="solid-router-stack-after",ae=t=>{let n={...t},[r,i]=Rt(()=>$([])),p=s=>{let[e,o]=$(s.path),[c,E]=$(""),[S,y]=$(!0),[T,D]=$(!1),[j,d]=$(s.params);return{path:e,setPath:o,css:c,setCss:E,stackTop:S,setStackTop:y,params:j,setParams:d,stackShow:T,setStackShow:D}},g=()=>{let s=r(),e=s[s.length-1];e&&e.setStackTop(!1);let o=a.stack[a.stack.length-1],c,E=s.length,S=0;for(let y=0;y<E;y++){let T=s[y-S];T.path()===o.path&&(c=T,s.splice(y-S,1),S++)}c?c.setParams(o.params):c=p(o),c.setStackTop(!0),c.setStackShow(!0),i([...s,c])},C=()=>{let s=r(),e=s[s.length-1];e&&e.setStackTop(!1);let o=a.stack[a.stack.length-1],c=p(o);i([...r(),c])},_=()=>{let s=a.stack[a.stack.length-1],e=r();if(e.length>1){let o=e[e.length-2];o.setStackTop(!0),o.setPath(s.path),o.setParams(s.params),i([...e])}setTimeout(()=>{e.pop(),i([...e])},l.navigationDuration)},nt=()=>{let s=r();s.pop();let e=a.stack[a.stack.length-1],o=p(e);o.setStackShow(!0),i([...s,o])},ot=()=>{i([]),C()},f=s=>{if(l.navigationDuration==0)return;let e=r(),o=e[e.length-1];o&&o.setCss(s)},b=s=>{if(l.navigationDuration==0)return;let e=r(),o=e[e.length-2];o&&o.setCss(s)},v=s=>{let e=r(),o=e[e.length-1];o&&o.setStackShow(s)},w=s=>{let e=r(),o=e[e.length-2];o&&o.setStackShow(s)},H=0,h=!1;a.listen((s,e)=>{let o=a.stack.length;e==="pushSingleState"?(g(),h?(v(!0),w(!1),f(k),b(P)):(v(!0),setTimeout(()=>{w(!1)},l.navigationDuration),f(W),requestAnimationFrame(()=>{b(P),f(k)}))):e==="clearState"?(ot(),h?(v(!0),w(!1),f(k),b(P)):(v(!0),setTimeout(()=>{w(!1)},l.navigationDuration),f(W),requestAnimationFrame(()=>{b(P),f(k)}))):o>H?(C(),h?(v(!0),w(!1),f(k),b(P)):(v(!0),setTimeout(()=>{w(!1)},l.navigationDuration),f(W),requestAnimationFrame(()=>{b(P),f(k)}))):H!==o&&o>=1?(v(!0),w(!0),f(Ht),b(k),_(),h?f(k):setTimeout(()=>{f(k)},l.navigationDuration)):(v(!0),w(!0),nt(),f(k)),H=o,h&&requestAnimationFrame(()=>{h=!1})});let B=!1,at=(s,e)=>{e&&(h=!0),a.goBack(s,B)},q=s=>{if(s.sync)s.Component=s.render;else{let e=At(s.render);s.Component=o=>K(e,o)}s.push=(e,o)=>{o&&(h=!0),a.push(a.parasmUrl(s.path,e),B)},s.pushSingle=(e,o)=>{o&&(h=!0),a.pushSingle(a.parasmUrl(s.path,e))},s.replace=(e,o)=>{o&&(h=!0),a.replace(a.parasmUrl(s.path,e))},s.clearTo=(e,o)=>{o&&(h=!0),a.clearTo(a.parasmUrl(s.path,e))}};q(l.notFound),Object.keys(n).forEach(s=>{let e=n[s];q(e)});let N={},z=[];Object.keys(n).map(s=>{let e=n[s];e&&(N[e.path]=e,e.sync||z.push(e))});function rt(s){s.preloadAll?z.forEach(e=>{e.render().then(o=>{e.Component=o.default,e.sync=!0})}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(e=>{let o=n[e];o&&!o.sync&&o.render().then(c=>{o.Component=c.default,o.sync=!0})})},200)}return{...n,goBack:at,Routers:({root:s,hash:e,ignoreFull:o,virtualHistory:c})=>{a.useHash=!!e,B=!!c;let E=a.nowUrl(),S=a.searchUrlToObject(a.nowFullUrl());h=!0,E!=="/"&&E!==s.path?(s.push(void 0,!0),(N[E]||l.notFound).push({...S})):s.push(S,!0);let[y,T]=$(typeof window<"u"?window.innerWidth:0),[D,j]=$(typeof window<"u"?window.innerHeight:0);return o||typeof window<"u"&&window.addEventListener("resize",()=>{T(window.innerWidth),j(window.innerHeight)}),K(Ut,{get each(){return r()},children:(d,it)=>{let M=N[d.path()]||l.notFound;rt(M);let ct=M.Component;return(()=>{let m=Lt.cloneNode(!0);return m.style.setProperty("position","fixed"),m.style.setProperty("top","0px"),m.style.setProperty("left","0px"),_t(m,K(ct,Ct({get stackLength(){return r().length},get stackTop(){return d.stackTop()},get stackShow(){return d.stackShow()}},()=>d.params()))),Pt(u=>{let I=d.path(),lt={[d.css()]:!0,[l.className]:!0},X=d.stackTop()?"auto":"none",Y=it()*10,G=o?void 0:y()+"px",J=o?void 0:D()+"px";return I!==u._v$&&Tt(m,"data-path",u._v$=I),u._v$2=Et(m,lt,u._v$2),X!==u._v$3&&m.style.setProperty("pointer-events",u._v$3=X),Y!==u._v$4&&m.style.setProperty("z-index",u._v$4=Y),G!==u._v$5&&m.style.setProperty("width",u._v$5=G),J!==u._v$6&&m.style.setProperty("height",u._v$6=J),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),m})()}})}}};export{qt as createPropsSignal,ae as createRouters,a as historyProxy,F as moveLeftCss,A as moveTopCss,st as scaleCss,O as setCustomNavigationAnimation,Xt as setNavigationAnimation,l as stackOptions};
//# sourceMappingURL=index.js.map
