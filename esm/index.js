import{template as yt}from"solid-js/web";import{mergeProps as K}from"solid-js/web";import{className as $t}from"solid-js/web";import{setAttribute as bt}from"solid-js/web";import{effect as St}from"solid-js/web";import{memo as xt}from"solid-js/web";import{insert as Q}from"solid-js/web";import{createComponent as y}from"solid-js/web";import{createRoot as Et,createSignal as Z,For as Tt,lazy as _t,Suspense as Ut,SuspenseList as Ct}from"solid-js";import{createStore as Pt}from"solid-js/store";var D=[],lt=t=>{D.push(t)},b=[],pt=t=>{b.push(t)},k=t=>({url:t,path:t.split("?")[0],params:$(t)||{},time:Date.now(),index:s.stack.length}),I="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=X();if(t==="popstate")if(e===I){let r=Y(),i=k(r),l=s.stack[s.stack.length-1];l.url=i.url,l.params=i.params}else s.stack.pop();let n=s.stack[s.stack.length-1];D.forEach(r=>{r(n?n.path:"",t,s.stack)}),I=e})});var M=t=>{if(s.stack.length==1)return"";s.stack.pop();let n=s.stack[s.stack.length-1],r=n.path;return s.useHash&&(r="/#"+n.path),r=q(r,{...$(n.url),...t}),n.params=$(r)||{},n.url=r,r},ft=t=>{b.forEach(e=>{t=e(t)}),s.stack.push(k(t)),s.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},ut=t=>{b.forEach(e=>{t=e(t)}),s.stack.push(k(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},z=t=>{b.forEach(e=>{t=e(t)}),s.stack.length>0&&s.stack.pop(),s.stack.push(k(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},ht=t=>{let e=M(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},dt=t=>{let e=M(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},mt=t=>{s.stack=[k(t)],z(t)};function gt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function X(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function Y(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function q(t,e){if(e){let n={};Object.keys(e).forEach(i=>{let l=e[i];l!==void 0&&l!==""&&(n[i]=l)});let r=new URLSearchParams(n).toString();return r?t+"?"+r:t}return t}function $(t){let[e,n]=t.split("#"),r=new URLSearchParams([e.split("?")[1],n?n.split("?")[1]:""].join("&")),i={},l=!1;for(let[g,h]of r.entries())l=!0,h!==void 0&&h!==""&&(i[g]=h);if(!!l)return i}var s={search:gt,nowUrl:X,nowFullUrl:Y,push:ft,pushNotHistory:ut,replace:z,goBack:ht,gobackNotHistory:dt,clearTo:mt,listen:lt,beforeChange:pt,searchUrlToObject:$,parasmUrl:q,onLastBack:t=>t.url,newStack:k,stack:[],useHash:!1};var S;function U(){if(S!==void 0)return S;let t=navigator.userAgent.toLocaleLowerCase();return S=new RegExp("(iphone|ipod|ipad)").test(t)&&new RegExp("(micromessenger)").test(t),S}import{template as G}from"solid-js/web";var kt=G("<div>Not found page</div>",2),vt=G("<div></div>",2),f={navigationDuration:0,notFound:{async:!0,render:()=>kt.cloneNode(!0)},fallback:vt.cloneNode(!0)};var x=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},C=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},J=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var P=(t,e=260)=>{if(Object.assign(f,{navigationDuration:e}),typeof window<"u"){let n=document.getElementById("solid-router-stack-css");if(n)n.innerHTML=t;else{let r=document.createElement("style");r.id="solid-router-stack-css",r.innerHTML=t,document.head.append(r)}}},wt={moveTop:x,moveLeft:C,scale:J},Wt=(t,e=150)=>{if(t==="none"){f.navigationDuration=0;let n=document.getElementById("solid-router-stack-css");n&&n.remove()}else t==="auto"?typeof window>"u"?P(x(e),e+10):P(window.innerWidth>window.innerHeight?x(e):C(e+10),260):P(wt[t](e),e+10)};var V=yt("<div></div>",2),v="solid-router-stack-now",Lt="solid-router-stack-before",Rt="solid-router-stack-leave",tt="solid-router-stack-after",ee=t=>{let e={...t},[n,r]=Et(()=>Pt({list:s.stack})),i=o=>{r("list",n.list.length-1,{className:o})},l=o=>{n.list.length>1&&r("list",n.list.length-2,{className:o})},g=()=>{let o=s.stack[s.stack.length-1],a=o?{...s.searchUrlToObject(o.url)}:{};r("list",n.list.length-1,"params",a)},h=0,d=!1;s.listen(()=>{let o=s.stack.length;f.navigationDuration>0?o>h?(r("list",[...s.stack]),r("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&r("list",n.list.length-2,{stackTop:!1}),d?(i(v),l(tt)):(i(Lt),requestAnimationFrame(()=>{l(tt),i(v),g()}))):h!==o&&o>=1?(r("list",n.list.length-2,{stackTop:!0}),n.list.length>2&&r("list",n.list.length-3,{stackTop:!1}),i(Rt),l(v),d?(r("list",[...s.stack]),r("list",n.list.length-1,{stackTop:!0})):setTimeout(()=>{r("list",[...s.stack]),r("list",n.list.length-1,{stackTop:!0}),i(v),g()},f.navigationDuration)):(r("list",[...s.stack]),r("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&r("list",n.list.length-2,{stackTop:!1}),i(v),g()):(r("list",[...s.stack]),r("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&r("list",n.list.length-2,{stackTop:!1}),i(v),g()),h=o,d&&requestAnimationFrame(()=>{d=!1})});let et=o=>{U()?s.gobackNotHistory(o):s.goBack(o)},L=o=>{o.async?o.Component=o.render:o.Component=_t(o.render),o.push=a=>{U()?s.pushNotHistory(s.parasmUrl(o.path,a)):s.push(s.parasmUrl(o.path,a))},o.replace=a=>{s.replace(s.parasmUrl(o.path,a))},o.clearTo=a=>{d=!0,s.clearTo(s.parasmUrl(o.path,a))}};L(f.notFound),Object.keys(e).forEach(o=>{let a=e[o];L(a)});let E={},R=[];Object.keys(e).map(o=>{let a=e[o];a&&(E[a.path]=a,a.async||R.push(a))});function st(o){o.preloadAll?R.forEach(a=>{a.render()}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(a=>{let m=e[a];m&&!m.async&&m.render()})},200)}let nt=({root:o,hash:a,ignoreFull:m})=>{s.useHash=!!a;let T=s.nowUrl(),H=s.searchUrlToObject(s.nowFullUrl());if(d=!0,T!=="/"&&T!==o.path){o.push();let w=E[T]||f.notFound;d=!0,w.push({...H})}else o.push(H);let[ot,rt]=Z(typeof window<"u"?window.innerWidth:0),[at,it]=Z(typeof window<"u"?window.innerHeight:0);return m||typeof window<"u"&&window.addEventListener("resize",()=>{rt(window.innerWidth),it(window.innerHeight)}),(()=>{let w=V.cloneNode(!0);return w.style.setProperty("background","inherit"),Q(w,y(Ct,{revealOrder:"forwards",tail:"collapsed",get children(){return y(Tt,{get each(){return n.list},children:(u,ct)=>{let _=E[u.path]||f.notFound;st(_);let N=_.Component;return(()=>{let p=V.cloneNode(!0);return p.style.setProperty("position","fixed"),p.style.setProperty("top","0px"),p.style.setProperty("left","0px"),p.style.setProperty("background","inherit"),Q(p,(()=>{let c=xt(()=>!!_.async,!0);return()=>c()?y(N,K({get stackTop(){return u.stackTop}},()=>u.params)):y(Ut,{get fallback(){return f.fallback},get children(){return y(N,K({get stackTop(){return u.stackTop}},()=>u.params))}})})()),St(c=>{let O=u.path,j=u.className,A=u.stackTop?"auto":"none",B=ct()*10,F=m?void 0:ot()+"px",W=m?void 0:at()+"px";return O!==c._v$&&bt(p,"data-path",c._v$=O),j!==c._v$2&&$t(p,c._v$2=j),A!==c._v$3&&p.style.setProperty("pointer-events",c._v$3=A),B!==c._v$4&&p.style.setProperty("z-index",c._v$4=B),F!==c._v$5&&p.style.setProperty("width",c._v$5=F),W!==c._v$6&&p.style.setProperty("height",c._v$6=W),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),p})()}})}})),w})()};return{...e,goBack:et,history:{search:s.search,nowUrl:s.nowUrl,nowFullUrl:s.nowFullUrl,searchUrlToObject:s.searchUrlToObject,listen:s.listen,beforeChange:s.beforeChange,getStack:()=>s.stack},Routers:nt}};export{ee as createRouters,C as moveLeftCss,x as moveTopCss,J as scaleCss,P as setCustomNavigationAnimation,Wt as setNavigationAnimation};
