import{template as bt}from"solid-js/web";import{classList as Et}from"solid-js/web";import{setAttribute as Tt}from"solid-js/web";import{effect as Pt}from"solid-js/web";import{insert as _t}from"solid-js/web";import{mergeProps as Ct}from"solid-js/web";import{createComponent as K}from"solid-js/web";import{createRoot as Rt,createSignal as y,For as Ut,lazy as At}from"solid-js";var Q=[],pt=t=>{Q.push(t)},C=[],ft=t=>{C.push(t)},S=t=>(t||(t=Z()),{url:t,path:t.split("?")[0],params:_(t)||{},time:Date.now(),index:n.stack.length});["popstate","pushState","pushSingleState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let s=V();if(t==="popstate"){let i=n.stack[n.stack.length-2];if(!i||s!==i.path)n.stack.pop(),n.stack.push(S(""));else if(n.stack.pop(),n.stack.length===0){let l=S("");n.stack.push(l)}}let r=n.stack[n.stack.length-1];Q.forEach(i=>{i(r?r.path:"",t,n.stack)})})});var ut=t=>{if(n.stack.length==1)return"";n.stack.pop(),n.stack.length||n.stack.push(S(""));let r=n.stack[n.stack.length-1],i=r.path;return n.useHash&&(i="/#"+r.path),i=tt(i,{..._(r.url),...t}),r.params=_(i)||{},r.url=i,i},ht=async(t,s)=>{for(let r of C)t=await Promise.resolve(r(t,L(t)));n.stack.push(S(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),s?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},mt=async t=>{for(let r of C)t=await Promise.resolve(r(t,L(t)));let s=S(t);n.stack=n.stack.filter(r=>r.path!==s.path),n.stack.push(s),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushSingleState"))},dt=async t=>{for(let s of C)t=await Promise.resolve(s(t,L(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(S(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},kt=(t,s)=>{let r=ut(t);r!=""&&(history.replaceState(null,"",r),s?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},gt=t=>{n.stack=[S(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function vt(){let[t,s]=location.href.split("#");return new URLSearchParams([t.split("?")[1],s.split("?")[1]].join("&"))}function L(t){return t.split("?")[0]}function V(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function Z(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function tt(t,s){if(s){let r={};Object.keys(s).forEach(l=>{let g=s[l];g!==void 0&&g!==""&&(r[l]=g)});let i=new URLSearchParams(r).toString();return i?t+"?"+i:t}return t}function _(t){let[s,r]=t.split("#"),i=new URLSearchParams([s.split("?")[1],r?r.split("?")[1]:""].join("&")),l={},g=!1;for(let[T,E]of i.entries())g=!0,E!==void 0&&E!==""&&(l[T]=E);if(!!g)return l}var n={search:vt,nowUrl:V,urlToPath:L,nowFullUrl:Z,push:ht,pushSingle:mt,replace:dt,goBack:kt,clearTo:gt,listen:pt,beforeChange:ft,searchUrlToObject:_,parasmUrl:tt,onLastBack:t=>t.url,newStack:S,stack:[],useHash:!1};import{template as et}from"solid-js/web";var wt=et("<div>Not found page</div>",2),St=et("<div></div>",2),c={navigationDuration:0,className:"",notFound:{async:!0,render:()=>wt.cloneNode(!0)},fallback:St.cloneNode(!0)};var R=t=>{let s=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},F=t=>{let s=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as yt,createSignal as xt}from"solid-js";function qt(t,s,r){let[i,l]=xt(t[s]||r);return yt(()=>{l(t[s]||r)}),[i,l]}var O=(t,s=260)=>{if(Object.assign(c,{navigationDuration:s}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},$t={moveTop:R,moveLeft:F,scale:st},Xt=(t,s=150)=>{if(t==="none"){c.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?O(R(s),s+10):O(window.innerWidth>window.innerHeight?R(s):F(s+10),260):O($t[t](s),s+10)};var Lt=bt("<div></div>",2);var d="solid-router-stack-now",W="solid-router-stack-before",Ht="solid-router-stack-leave",b="solid-router-stack-after",ae=t=>{let s={...t},[r,i]=Rt(()=>y([])),l=o=>{let[e,a]=y(o.path),[k,$]=y(""),[P,B]=y(!0),[N,D]=y(!1),[j,m]=y(o.params);return{path:e,setPath:a,css:k,setCss:$,stackTop:P,setStackTop:B,params:j,setParams:m,stackShow:N,setStackShow:D}},g=()=>{let o=r(),e=o[o.length-1];e&&e.setStackTop(!1);let a=n.stack[n.stack.length-1],k=l(a);i([...r().filter($=>$.path()!==a.path),k])},T=()=>{let o=r(),e=o[o.length-1];e&&e.setStackTop(!1);let a=n.stack[n.stack.length-1],k=l(a);i([...r(),k])},E=()=>{let o=n.stack[n.stack.length-1],e=r();if(e.length>1){let a=e[e.length-2];a.setStackTop(!0),a.setPath(o.path),a.setParams(o.params),i([...e])}setTimeout(()=>{e.pop(),i([...e])},c.navigationDuration)},nt=()=>{let o=r();o.pop();let e=n.stack[n.stack.length-1],a=l(e);a.setStackShow(!0),i([...o,a])},ot=()=>{i([]),T()},p=o=>{if(c.navigationDuration==0)return;let e=r(),a=e[e.length-1];a&&a.setCss(o)},x=o=>{if(c.navigationDuration==0)return;let e=r(),a=e[e.length-2];a&&a.setCss(o)},v=o=>{let e=r(),a=e[e.length-1];a&&a.setStackShow(o)},w=o=>{let e=r(),a=e[e.length-2];a&&a.setStackShow(o)},U=0,u=!1;n.listen((o,e)=>{let a=n.stack.length;e==="pushSingleState"?(g(),u?(v(!0),w(!1),p(d),x(b)):(v(!0),setTimeout(()=>{w(!1)},c.navigationDuration),p(W),requestAnimationFrame(()=>{x(b),p(d)}))):e==="clearState"?(ot(),u?(v(!0),w(!1),p(d),x(b)):(v(!0),setTimeout(()=>{w(!1)},c.navigationDuration),p(W),requestAnimationFrame(()=>{x(b),p(d)}))):a>U?(T(),u?(v(!0),w(!1),p(d),x(b)):(v(!0),setTimeout(()=>{w(!1)},c.navigationDuration),p(W),requestAnimationFrame(()=>{x(b),p(d)}))):U!==a&&a>=1?(v(!0),w(!0),p(Ht),x(d),E(),u?p(d):setTimeout(()=>{p(d)},c.navigationDuration)):(v(!0),w(!0),nt(),p(d)),U=a,u&&requestAnimationFrame(()=>{u=!1})});let A=!1,at=(o,e)=>{e&&(u=!0),n.goBack(o,A)},q=o=>{if(o.async)o.Component=o.render;else{let e=At(o.render);o.Component=a=>K(e,a)}o.push=(e,a)=>{a&&(u=!0),n.push(n.parasmUrl(o.path,e),A)},o.pushSingle=(e,a)=>{a&&(u=!0),n.pushSingle(n.parasmUrl(o.path,e))},o.replace=(e,a)=>{a&&(u=!0),n.replace(n.parasmUrl(o.path,e))},o.clearTo=(e,a)=>{a&&(u=!0),n.clearTo(n.parasmUrl(o.path,e))}};q(c.notFound),Object.keys(s).forEach(o=>{let e=s[o];q(e)});let H={},z=[];Object.keys(s).map(o=>{let e=s[o];e&&(H[e.path]=e,e.sync||z.push(e))});function rt(o){o.preloadAll?z.forEach(e=>{e.render().then(a=>{e.Component=a.default,e.sync=!0})}):o.preload&&o.preload.length&&setTimeout(()=>{o.preload.forEach(e=>{let a=s[e];a&&!a.sync&&a.render().then(k=>{a.Component=k.default,a.sync=!0})})},200)}return{...s,goBack:at,Routers:({root:o,hash:e,ignoreFull:a,virtualHistory:k})=>{n.useHash=!!e,A=!!k;let $=n.nowUrl(),P=n.searchUrlToObject(n.nowFullUrl());u=!0,$!=="/"&&$!==o.path?(o.push(void 0,!0),(H[$]||c.notFound).push({...P})):o.push(P,!0);let[B,N]=y(typeof window<"u"?window.innerWidth:0),[D,j]=y(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{N(window.innerWidth),j(window.innerHeight)}),K(Ut,{get each(){return r()},children:(m,it)=>{let M=H[m.path()]||c.notFound;rt(M);let ct=M.Component;return(()=>{let h=Lt.cloneNode(!0);return h.style.setProperty("position","fixed"),h.style.setProperty("top","0px"),h.style.setProperty("left","0px"),_t(h,K(ct,Ct({get stackLength(){return r().length},get stackTop(){return m.stackTop()},get stackShow(){return m.stackShow()}},()=>m.params()))),Pt(f=>{let I=m.path(),lt={[m.css()]:!0,[c.className]:!0},X=m.stackTop()?"auto":"none",Y=it()*10,G=a?void 0:B()+"px",J=a?void 0:D()+"px";return I!==f._v$&&Tt(h,"data-path",f._v$=I),f._v$2=Et(h,lt,f._v$2),X!==f._v$3&&h.style.setProperty("pointer-events",f._v$3=X),Y!==f._v$4&&h.style.setProperty("z-index",f._v$4=Y),G!==f._v$5&&h.style.setProperty("width",f._v$5=G),J!==f._v$6&&h.style.setProperty("height",f._v$6=J),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),h})()}})}}};export{qt as createPropsSignal,ae as createRouters,n as historyProxy,F as moveLeftCss,R as moveTopCss,st as scaleCss,O as setCustomNavigationAnimation,Xt as setNavigationAnimation,c as stackOptions};
//# sourceMappingURL=index.js.map
