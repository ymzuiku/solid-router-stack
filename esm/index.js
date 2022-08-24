import{template as wt}from"solid-js/web";import{mergeProps as J}from"solid-js/web";import{className as yt}from"solid-js/web";import{setAttribute as bt}from"solid-js/web";import{effect as $t}from"solid-js/web";import{memo as St}from"solid-js/web";import{insert as K}from"solid-js/web";import{createComponent as $}from"solid-js/web";import{createRoot as xt,createSignal as V,For as Et,lazy as Tt,Suspense as _t}from"solid-js";import{createStore as Ut}from"solid-js/store";var z=[],ct=t=>{z.push(t)},w=[],lt=t=>{w.push(t)},T="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=M();if(console.log("__debug__","inin",e,T),t==="popstate")if(e===T){let o=X();s.stack[s.stack.length-1]=m(o)}else s.stack.pop();let n=s.stack[s.stack.length-1];z.forEach(o=>{o(n?n.path:"",t,s.stack)}),T=e})});var m=t=>({url:t,path:t.split("?")[0],params:_(t)||{},time:Date.now(),index:s.stack.length}),pt=t=>{w.forEach(e=>{t=e(t)}),s.stack.push(m(t)),s.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},ft=t=>{w.forEach(e=>{t=e(t)}),s.stack.push(m(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},I=t=>{w.forEach(e=>{t=e(t)}),s.stack.length>0&&s.stack.pop(),s.stack.push(m(t)),s.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},D=t=>{if(s.stack.length==1)return"";s.stack.pop();let n=s.stack[s.stack.length-1],o=n.path;return s.useHash&&(o="/#"+n.path),o=Y(o,{..._(n.url),...t}),n.url=o,o},ut=t=>{let e=D(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},ht=t=>{let e=D(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},dt=t=>{s.stack=[m(t)],I(t)};function mt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function M(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function X(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function Y(t,e){if(e){let n={};Object.keys(e).forEach(c=>{let f=e[c];f!==void 0&&f!==""&&(n[c]=f)});let o=new URLSearchParams(n).toString();return o?t+"?"+o:t}return t}function _(t){let[e,n]=t.split("#"),o=new URLSearchParams([e.split("?")[1],n?n.split("?")[1]:""].join("&")),c={},f=!1;for(let[k,p]of o.entries())f=!0,p!==void 0&&p!==""&&(c[k]=p);if(!!f)return c}var s={search:mt,nowUrl:M,nowFullUrl:X,push:pt,pushNotHistory:ft,replace:I,goBack:ut,gobackNotHistory:ht,clearTo:dt,listen:ct,beforeChange:lt,searchUrlToObject:_,parasmUrl:Y,onLastBack:t=>t.url,newStack:m,stack:[],useHash:!1};var y;function U(){if(y!==void 0)return y;let t=navigator.userAgent.toLocaleLowerCase();return y=new RegExp("(iphone|ipod|ipad)").test(t)&&new RegExp("(micromessenger)").test(t),y}import{template as q}from"solid-js/web";var gt=q("<div>Not found page</div>",2),kt=q("<div></div>",2),u={navigationDuration:0,notFound:{async:!0,render:()=>gt.cloneNode(!0)},fallback:kt.cloneNode(!0)};var b=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},G=t=>{let e=`transition: transform ${t}ms cubic-bezier(.54,.13,.46,1), opacity ${t}ms cubic-bezier(.54,.13,.46,1);`;return`
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
`},C=t=>{let e=`transition: transform ${t}ms cubic-bezier(.54,.13,.46,1), opacity ${t}ms cubic-bezier(.54,.13,.46,1);`;return`
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
`};var P=(t,e=260)=>{if(Object.assign(u,{navigationDuration:e}),typeof window<"u"){let n=document.getElementById("solid-router-stack-css");if(n)n.innerHTML=t;else{let o=document.createElement("style");o.id="solid-router-stack-css",o.innerHTML=t,document.head.append(o)}}},vt={moveTop:b,moveLeft:C,scale:G},Bt=(t,e=250)=>{if(t==="none"){u.navigationDuration=0;let n=document.getElementById("solid-router-stack-css");n&&n.remove()}else t==="auto"?typeof window>"u"?P(b(e),e+10):P(window.innerWidth>window.innerHeight?b(e):C(e+10),260):P(vt[t](e),e+10)};var Q=wt("<div></div>",2),g="solid-router-stack-now",Ct="solid-router-stack-before",Pt="solid-router-stack-leave",Z="solid-router-stack-after",Zt=t=>{let e={...t},[n,o]=xt(()=>Ut({list:s.stack})),c=r=>{o("list",n.list.length-1,{className:r})},f=r=>{n.list.length>1&&o("list",n.list.length-2,{className:r})},k=0,p=!1;s.listen(()=>{let r=s.stack.length,a=s.stack[s.stack.length-1];u.navigationDuration>0?r>k?(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&o("list",n.list.length-2,{stackTop:!1}),p?(c(g),f(Z)):(c(Ct),requestAnimationFrame(()=>{c(g),f(Z)}))):k!==r&&r>=1?(o("list",n.list.length-2,{stackTop:!0}),n.list.length>2&&o("list",n.list.length-3,{stackTop:!1}),c(Pt),f(g),p?(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0})):setTimeout(()=>{o("list",[...s.stack]),c(g),o("list",n.list.length-1,{stackTop:!0})},u.navigationDuration)):(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&o("list",n.list.length-2,{stackTop:!1}),c(g)):(o("list",[...s.stack]),o("list",n.list.length-1,{stackTop:!0}),n.list.length>1&&o("list",n.list.length-2,{stackTop:!1}),c(g)),k=r,o("list",s.stack.length-1,{params:a?{...s.searchUrlToObject(a.url)}:{}}),p&&requestAnimationFrame(()=>{p=!1})});let tt=r=>{U()?s.gobackNotHistory(r):s.goBack(r)},L=r=>{r.async?r.Component=r.render:r.Component=Tt(r.render),r.push=a=>{U()?s.pushNotHistory(s.parasmUrl(r.path,a)):s.push(s.parasmUrl(r.path,a))},r.replace=a=>{s.replace(s.parasmUrl(r.path,a))},r.clearTo=a=>{p=!0,s.clearTo(s.parasmUrl(r.path,a))}};L(u.notFound),Object.keys(e).forEach(r=>{let a=e[r];L(a)});let S={},R=[];Object.keys(e).map(r=>{let a=e[r];a&&(S[a.path]=a,a.async||R.push(a))});function et(r){r.preloadAll?R.forEach(a=>{a.render()}):r.preload&&r.preload.length&&setTimeout(()=>{r.preload.forEach(a=>{let d=e[a];d&&!d.async&&d.render()})},200)}let st=({root:r,hash:a,ignoreFull:d})=>{s.useHash=!!a;let x=s.nowUrl(),H=s.searchUrlToObject(s.nowFullUrl());if(p=!0,x!=="/"&&x!==r.path){r.push();let v=S[x]||u.notFound;p=!0,v.push({...H})}else r.push(H);let[nt,ot]=V(typeof window<"u"?window.innerWidth:0),[rt,at]=V(typeof window<"u"?window.innerHeight:0);return d||typeof window<"u"&&window.addEventListener("resize",()=>{ot(window.innerWidth),at(window.innerHeight)}),(()=>{let v=Q.cloneNode(!0);return v.style.setProperty("background","inherit"),K(v,$(Et,{get each(){return n.list},children:(h,it)=>{let E=S[h.path]||u.notFound;et(E);let N=E.Component;return(()=>{let l=Q.cloneNode(!0);return l.style.setProperty("position","fixed"),l.style.setProperty("top","0px"),l.style.setProperty("left","0px"),l.style.setProperty("background","inherit"),K(l,(()=>{let i=St(()=>!!E.async,!0);return()=>i()?$(N,J({get stackTop(){return h.stackTop}},()=>h.params)):$(_t,{get fallback(){return u.fallback},get children(){return $(N,J({get stackTop(){return h.stackTop}},()=>h.params))}})})()),$t(i=>{let O=h.path,j=h.className,A=h.stackTop?"auto":"none",B=it()*10,F=d?void 0:nt()+"px",W=d?void 0:rt()+"px";return O!==i._v$&&bt(l,"data-path",i._v$=O),j!==i._v$2&&yt(l,i._v$2=j),A!==i._v$3&&l.style.setProperty("pointer-events",i._v$3=A),B!==i._v$4&&l.style.setProperty("z-index",i._v$4=B),F!==i._v$5&&l.style.setProperty("width",i._v$5=F),W!==i._v$6&&l.style.setProperty("height",i._v$6=W),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),l})()}})),v})()};return{...e,goBack:tt,history:{search:s.search,nowUrl:s.nowUrl,nowFullUrl:s.nowFullUrl,searchUrlToObject:s.searchUrlToObject,listen:s.listen,beforeChange:s.beforeChange,getStack:()=>s.stack},Routers:st}};export{Zt as createRouters,C as moveLeftCss,b as moveTopCss,G as scaleCss,P as setCustomNavigationAnimation,Bt as setNavigationAnimation};
