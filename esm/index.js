import{template as bt}from"solid-js/web";import{classList as Et}from"solid-js/web";import{setAttribute as Tt}from"solid-js/web";import{effect as Pt}from"solid-js/web";import{insert as _t}from"solid-js/web";import{mergeProps as Ct}from"solid-js/web";import{createComponent as L}from"solid-js/web";import{createRoot as Ut,createSignal as d,For as Ht,lazy as Rt,Suspense as Nt}from"solid-js";var Z=[],pt=t=>{Z.push(t)},P=[],ft=t=>{P.push(t)},y=t=>({url:t,path:t.split("?")[0],params:T(t)||{},time:Date.now(),index:n.stack.length}),V="";["popstate","pushState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=et();if(t==="popstate")if(e===V){let i=st(),l=y(i),u=n.stack[n.stack.length-1];u.url=l.url,u.params=l.params}else n.stack.pop();let a=n.stack[n.stack.length-1];Z.forEach(i=>{i(a?a.path:"",t,n.stack)}),V=e})});var tt=t=>{if(n.stack.length==1)return"";n.stack.pop();let a=n.stack[n.stack.length-1],i=a.path;return n.useHash&&(i="/#"+a.path),i=ot(i,{...T(a.url),...t}),a.params=T(i)||{},a.url=i,i},ut=async t=>{for(let e of P)t=await Promise.resolve(e(t,_(t)));n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},ht=async t=>{for(let e of P)t=await Promise.resolve(e(t,_(t)));n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},mt=async t=>{for(let e of P)t=await Promise.resolve(e(t,_(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(y(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},dt=t=>{let e=tt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},gt=t=>{let e=tt(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},kt=t=>{n.stack=[y(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function vt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function _(t){return t.split("?")[0]}function et(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function st(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function ot(t,e){if(e){let a={};Object.keys(e).forEach(l=>{let u=e[l];u!==void 0&&u!==""&&(a[l]=u)});let i=new URLSearchParams(a).toString();return i?t+"?"+i:t}return t}function T(t){let[e,a]=t.split("#"),i=new URLSearchParams([e.split("?")[1],a?a.split("?")[1]:""].join("&")),l={},u=!1;for(let[H,S]of i.entries())u=!0,S!==void 0&&S!==""&&(l[H]=S);if(!!u)return l}var n={search:vt,nowUrl:et,urlToPath:_,nowFullUrl:st,push:ut,pushNotHistory:ht,replace:mt,goBack:dt,gobackNotHistory:gt,clearTo:kt,listen:pt,beforeChange:ft,searchUrlToObject:T,parasmUrl:ot,onLastBack:t=>t.url,newStack:y,stack:[],useHash:!1};import{template as nt}from"solid-js/web";var wt=nt("<div>Not found page</div>",2),yt=nt("<div></div>",2),c={navigationDuration:0,className:"",notFound:{async:!0,render:()=>wt.cloneNode(!0)},fallback:yt.cloneNode(!0)};var C=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},z=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as St,createSignal as $t}from"solid-js";function Mt(t,e,a){let[i,l]=$t(t[e]||a);return St(()=>{l(t[e]||a)}),[i,l]}var M=(t,e=260)=>{if(Object.assign(c,{navigationDuration:e}),typeof window<"u"){let a=document.getElementById("solid-router-stack-css");if(a)a.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},xt={moveTop:C,moveLeft:z,scale:rt},Yt=(t,e=150)=>{if(t==="none"){c.navigationDuration=0;let a=document.getElementById("solid-router-stack-css");a&&a.remove()}else t==="auto"?typeof window>"u"?M(C(e),e+10):M(window.innerWidth>window.innerHeight?C(e):z(e+10),260):M(xt[t](e),e+10)};var Lt=bt("<div></div>",2);var g="solid-router-stack-now",at="solid-router-stack-before",At="solid-router-stack-leave",U="solid-router-stack-after",ae=t=>{let e={...t},[a,i]=Ut(()=>d([])),l=()=>{let o=a(),s=o[o.length-1];s&&s.setStackTop(!1);let r=n.stack[n.stack.length-1],[B,x]=d(r.url),[b,j]=d(r.path),[D,O]=d(""),[F,h]=d(!0),[K,E]=d(!1),[W,p]=d(r.params);i([...a(),{url:B,setUrl:x,path:b,setPath:j,css:D,setCss:O,stackTop:F,setStackTop:h,params:W,setParams:p,stackShow:K,setStackShow:E}])},u=()=>{let o=n.stack[n.stack.length-1],s=a();if(s.length>1){let r=s[s.length-2];r.setStackTop(!0),r.setUrl(o.url),r.setPath(o.path),r.setParams(o.params),i([...s])}setTimeout(()=>{s.pop(),i([...s])},c.navigationDuration)},H=()=>{let o=n.stack[n.stack.length-1],s=a(),r=s[s.length-1];r.setUrl(o.url),r.setParams(o.params),i([...s])},S=()=>{i([]),l()},m=o=>{if(c.navigationDuration==0)return;let s=a(),r=s[s.length-1];r&&r.setCss(o)},$=o=>{if(c.navigationDuration==0)return;let s=a(),r=s[s.length-2];r&&r.setCss(o)},v=o=>{let s=a(),r=s[s.length-1];r&&r.setStackShow(o)},w=o=>{let s=a(),r=s[s.length-2];r&&r.setStackShow(o)},R=0,k=!1;n.listen((o,s)=>{let r=n.stack.length;s==="clearState"?(S(),k?(v(!0),w(!1),m(g),$(U)):(v(!0),setTimeout(()=>{w(!1)},c.navigationDuration),m(at),requestAnimationFrame(()=>{$(U),m(g)}))):r>R?(l(),k?(v(!0),w(!1),m(g),$(U)):(v(!0),setTimeout(()=>{w(!1)},c.navigationDuration),m(at),requestAnimationFrame(()=>{$(U),m(g)}))):R!==r&&r>=1?(console.log("__debug__","222"),v(!0),w(!0),m(At),$(g),u(),k?m(g):setTimeout(()=>{m(g)},c.navigationDuration)):(v(!0),w(!0),H(),m(g)),R=r,k&&requestAnimationFrame(()=>{k=!1})});let N=!1,it=o=>{N?n.gobackNotHistory(o):n.goBack(o)},q=o=>{if(o.async)o.Component=o.render;else{let s=Rt(o.render);o.Component=r=>L(Nt,{get fallback(){return c.fallback},get children(){return L(s,r)}})}o.push=s=>{N?n.pushNotHistory(n.parasmUrl(o.path,s)):n.push(n.parasmUrl(o.path,s))},o.replace=s=>{n.replace(n.parasmUrl(o.path,s))},o.clearTo=s=>{n.clearTo(n.parasmUrl(o.path,s))}};q(c.notFound),Object.keys(e).forEach(o=>{let s=e[o];q(s)});let A={},I=[];Object.keys(e).map(o=>{let s=e[o];s&&(A[s.path]=s,s.async||I.push(s))});function ct(o){o.preloadAll?I.forEach(s=>{s.render()}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(s=>{let r=e[s];r&&!r.async&&r.render()})},200)}return{...e,goBack:it,Routers:({root:o,hash:s,ignoreFull:r,virtualHistory:B})=>{n.useHash=!!s,N=!!B;let x=n.nowUrl(),b=n.searchUrlToObject(n.nowFullUrl());if(k=!0,x!=="/"&&x!==o.path){o.push();let h=A[x]||c.notFound;k=!0,h.push({...b})}else o.push(b);let[j,D]=d(typeof window<"u"?window.innerWidth:0),[O,F]=d(typeof window<"u"?window.innerHeight:0);return r||typeof window<"u"&&window.addEventListener("resize",()=>{D(window.innerWidth),F(window.innerHeight)}),L(Ht,{get each(){return a()},children:(h,K)=>{let E=A[h.path()]||c.notFound;ct(E);let W=E.Component;return(()=>{let p=Lt.cloneNode(!0);return p.style.setProperty("position","fixed"),p.style.setProperty("top","0px"),p.style.setProperty("left","0px"),_t(p,L(W,Ct({get stackTop(){return h.stackTop()},get stackShow(){return h.stackShow()}},()=>h.params()))),Pt(f=>{let X=h.path(),lt={[h.css()]:!0,[c.className]:!0},Y=h.stackTop()?"auto":"none",G=K()*10,J=r?void 0:j()+"px",Q=r?void 0:O()+"px";return X!==f._v$&&Tt(p,"data-path",f._v$=X),f._v$2=Et(p,lt,f._v$2),Y!==f._v$3&&p.style.setProperty("pointer-events",f._v$3=Y),G!==f._v$4&&p.style.setProperty("z-index",f._v$4=G),J!==f._v$5&&p.style.setProperty("width",f._v$5=J),Q!==f._v$6&&p.style.setProperty("height",f._v$6=Q),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),p})()}})}}};export{Mt as createPropsSignal,ae as createRouters,n as historyProxy,z as moveLeftCss,C as moveTopCss,rt as scaleCss,M as setCustomNavigationAnimation,Yt as setNavigationAnimation,c as stackOptions};
