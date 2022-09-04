import{template as Tt}from"solid-js/web";import{mergeProps as at}from"solid-js/web";import{classList as Et}from"solid-js/web";import{setAttribute as _t}from"solid-js/web";import{effect as Pt}from"solid-js/web";import{insert as Ct}from"solid-js/web";import{memo as Ut}from"solid-js/web";import{createComponent as L}from"solid-js/web";import{createRoot as Ht,createSignal as d,For as Rt,lazy as Nt,Suspense as At}from"solid-js";var Z=[],ut=t=>{Z.push(t)},P=[],ft=t=>{P.push(t)},y=t=>({url:t,path:t.split("?")[0],params:_(t)||{},time:Date.now(),index:n.stack.length}),V="";["popstate","pushState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=et();if(t==="popstate")if(e===V){let c=st(),p=y(c),h=n.stack[n.stack.length-1];h.url=p.url,h.params=p.params}else n.stack.pop();let a=n.stack[n.stack.length-1];Z.forEach(c=>{c(a?a.path:"",t,n.stack)}),V=e})});var tt=t=>{if(n.stack.length==1)return"";n.stack.pop();let a=n.stack[n.stack.length-1],c=a.path;return n.useHash&&(c="/#"+a.path),c=ot(c,{..._(a.url),...t}),a.params=_(c)||{},a.url=c,c},ht=async t=>{for(let e of P)t=await Promise.resolve(e(t,C(t)));n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},mt=async t=>{for(let e of P)t=await Promise.resolve(e(t,C(t)));n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},dt=async t=>{for(let e of P)t=await Promise.resolve(e(t,C(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},kt=t=>{let e=tt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},gt=t=>{let e=tt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},vt=t=>{n.stack=[y(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function wt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function C(t){return t.split("?")[0]}function et(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function st(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function ot(t,e){if(e){let a={};Object.keys(e).forEach(p=>{let h=e[p];h!==void 0&&h!==""&&(a[p]=h)});let c=new URLSearchParams(a).toString();return c?t+"?"+c:t}return t}function _(t){let[e,a]=t.split("#"),c=new URLSearchParams([e.split("?")[1],a?a.split("?")[1]:""].join("&")),p={},h=!1;for(let[R,S]of c.entries())h=!0,S!==void 0&&S!==""&&(p[R]=S);if(!!h)return p}var n={search:wt,nowUrl:et,urlToPath:C,nowFullUrl:st,push:ht,pushNotHistory:mt,replace:dt,goBack:kt,gobackNotHistory:gt,clearTo:vt,listen:ut,beforeChange:ft,searchUrlToObject:_,parasmUrl:ot,onLastBack:t=>t.url,newStack:y,stack:[],useHash:!1};import{template as nt}from"solid-js/web";var yt=nt("<div>Not found page</div>",2),St=nt("<div></div>",2),l={navigationDuration:0,className:"",notFound:{async:!0,render:()=>yt.cloneNode(!0)},fallback:St.cloneNode(!0)};var U=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},M=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},rt=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as $t,createSignal as xt}from"solid-js";function zt(t,e,a){let[c,p]=xt(t[e]||a);return $t(()=>{p(t[e]||a)}),[c,p]}var q=(t,e=260)=>{if(Object.assign(l,{navigationDuration:e}),typeof window<"u"){let a=document.getElementById("solid-router-stack-css");if(a)a.innerHTML=t;else{let c=document.createElement("style");c.id="solid-router-stack-css",c.innerHTML=t,document.head.append(c)}}},bt={moveTop:U,moveLeft:M,scale:rt},Gt=(t,e=150)=>{if(t==="none"){l.navigationDuration=0;let a=document.getElementById("solid-router-stack-css");a&&a.remove()}else t==="auto"?typeof window>"u"?q(U(e),e+10):q(window.innerWidth>window.innerHeight?U(e):M(e+10),260):q(bt[t](e),e+10)};var Lt=Tt("<div></div>",2);var k="solid-router-stack-now",ct="solid-router-stack-before",Bt="solid-router-stack-leave",H="solid-router-stack-after",ie=t=>{let e={...t},[a,c]=Ht(()=>d([])),p=()=>{let o=a(),s=o[o.length-1];s&&s.setStackTop(!1);let r=n.stack[n.stack.length-1],[j,x]=d(r.url),[T,D]=d(r.path),[O,F]=d(""),[K,u]=d(!0),[W,b]=d(!1),[E,f]=d(r.params);c([...a(),{url:j,setUrl:x,path:T,setPath:D,css:O,setCss:F,stackTop:K,setStackTop:u,params:E,setParams:f,stackShow:W,setStackShow:b}])},h=()=>{let o=n.stack[n.stack.length-1],s=a();if(s.length>1){let r=s[s.length-2];r.setStackTop(!0),r.setUrl(o.url),r.setPath(o.path),r.setParams(o.params),c([...s])}setTimeout(()=>{s.pop(),c([...s])},l.navigationDuration)},R=()=>{let o=n.stack[n.stack.length-1],s=a(),r=s[s.length-1];r.setUrl(o.url),r.setParams(o.params),c([...s])},S=()=>{c([]),p()},m=o=>{if(l.navigationDuration==0)return;let s=a(),r=s[s.length-1];r&&r.setCss(o)},$=o=>{if(l.navigationDuration==0)return;let s=a(),r=s[s.length-2];r&&r.setCss(o)},v=o=>{let s=a(),r=s[s.length-1];r&&r.setStackShow(o)},w=o=>{let s=a(),r=s[s.length-2];r&&r.setStackShow(o)},N=0,g=!1;n.listen((o,s)=>{let r=n.stack.length;s==="clearState"?(S(),g?(v(!0),w(!1),m(k),$(H)):(v(!0),setTimeout(()=>{w(!1)},l.navigationDuration),m(ct),requestAnimationFrame(()=>{$(H),m(k)}))):r>N?(p(),g?(v(!0),w(!1),m(k),$(H)):(v(!0),setTimeout(()=>{w(!1)},l.navigationDuration),m(ct),requestAnimationFrame(()=>{$(H),m(k)}))):N!==r&&r>=1?(console.log("__debug__","222"),v(!0),w(!0),m(Bt),$(k),h(),g?m(k):setTimeout(()=>{m(k)},l.navigationDuration)):(v(!0),w(!0),R(),m(k)),N=r,g&&requestAnimationFrame(()=>{g=!1})});let A=!1,it=o=>{A?n.gobackNotHistory(o):n.goBack(o)},z=o=>{o.async?o.Component=o.render:o.Component=Nt(o.render),o.push=s=>{A?n.pushNotHistory(n.parasmUrl(o.path,s)):n.push(n.parasmUrl(o.path,s))},o.replace=s=>{n.replace(n.parasmUrl(o.path,s))},o.clearTo=s=>{n.clearTo(n.parasmUrl(o.path,s))}};z(l.notFound),Object.keys(e).forEach(o=>{let s=e[o];z(s)});let B={},I=[];Object.keys(e).map(o=>{let s=e[o];s&&(B[s.path]=s,s.async||I.push(s))});function lt(o){o.preloadAll?I.forEach(s=>{s.render()}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(s=>{let r=e[s];r&&!r.async&&r.render()})},200)}return{...e,goBack:it,Routers:({root:o,hash:s,ignoreFull:r,virtualHistory:j})=>{n.useHash=!!s,A=!!j;let x=n.nowUrl(),T=n.searchUrlToObject(n.nowFullUrl());if(g=!0,x!=="/"&&x!==o.path){o.push();let u=B[x]||l.notFound;g=!0,u.push({...T})}else o.push(T);let[D,O]=d(typeof window<"u"?window.innerWidth:0),[F,K]=d(typeof window<"u"?window.innerHeight:0);return r||typeof window<"u"&&window.addEventListener("resize",()=>{O(window.innerWidth),K(window.innerHeight)}),L(Rt,{get each(){return a()},children:(u,W)=>{let b=B[u.path()]||l.notFound;lt(b);let E=b.Component;return(()=>{let f=Lt.cloneNode(!0);return f.style.setProperty("position","fixed"),f.style.setProperty("top","0px"),f.style.setProperty("left","0px"),Ct(f,(()=>{let i=Ut(()=>!!b.async,!0);return()=>i()?L(E,at({get stackTop(){return u.stackTop()},get stackShow(){return u.stackShow()}},()=>u.params())):L(At,{get fallback(){return l.fallback},get children(){return L(E,at({get stackTop(){return u.stackTop()},get stackShow(){return u.stackShow()}},()=>u.params()))}})})()),Pt(i=>{let X=u.path(),pt={[u.css()]:!0,[l.className]:!0},Y=u.stackTop()?"auto":"none",G=W()*10,J=r?void 0:D()+"px",Q=r?void 0:F()+"px";return X!==i._v$&&_t(f,"data-path",i._v$=X),i._v$2=Et(f,pt,i._v$2),Y!==i._v$3&&f.style.setProperty("pointer-events",i._v$3=Y),G!==i._v$4&&f.style.setProperty("z-index",i._v$4=G),J!==i._v$5&&f.style.setProperty("width",i._v$5=J),Q!==i._v$6&&f.style.setProperty("height",i._v$6=Q),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),f})()}})}}};export{zt as createPropsSignal,ie as createRouters,n as historyProxy,M as moveLeftCss,U as moveTopCss,rt as scaleCss,q as setCustomNavigationAnimation,Gt as setNavigationAnimation,l as stackOptions};
