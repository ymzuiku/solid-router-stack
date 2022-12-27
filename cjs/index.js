"use strict";var K=Object.defineProperty;var mt=Object.getOwnPropertyDescriptor;var dt=Object.getOwnPropertyNames;var gt=Object.prototype.hasOwnProperty;var kt=(t,e)=>{for(var r in e)K(t,r,{get:e[r],enumerable:!0})},wt=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of dt(e))!gt.call(t,c)&&c!==r&&K(t,c,{get:()=>e[c],enumerable:!(i=mt(e,c))||i.enumerable});return t};var vt=t=>wt(K({},"__esModule",{value:!0}),t);var Dt={};kt(Dt,{createPropsSignal:()=>_t,createRouters:()=>Nt,historyProxy:()=>o,moveLeftCss:()=>U,moveTopCss:()=>L,scaleCss:()=>q,setCustomNavigationAnimation:()=>N,setNavigationAnimation:()=>Rt,stackOptions:()=>p});module.exports=vt(Dt);var Z=require("solid-js/web"),tt=require("solid-js/web"),et=require("solid-js/web"),st=require("solid-js/web"),nt=require("solid-js/web"),ot=require("solid-js/web"),at=require("solid-js/web"),D=require("solid-js/web"),f=require("solid-js");var Y=[],St=t=>{Y.push(t)},H=[],yt=t=>{H.push(t)},y=t=>(t||(t=J()),{url:t,path:t.split("?")[0],params:_(t)||{},time:Date.now(),index:o.stack.length});["popstate","pushState","pushSingleState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=G();if(t==="popstate"){let i=o.stack[o.stack.length-2];!i||e!==i.path?(o.stack.pop(),o.stack.push(y(""))):o.stack.pop()}if(o.stack.length===0){let i=y("");o.stack.push(i)}let r=o.stack[o.stack.length-1];Y.forEach(i=>{i(r?r.path:"",t,o.stack)})})});var xt=t=>{if(o.stack.length==1)return"";o.stack.pop(),o.stack.length||o.stack.push(y(""));let r=o.stack[o.stack.length-1],i=r.path;return o.useHash&&(i="/#"+r.path),i=Q(i,{..._(r.url),...t}),r.params=_(i)||{},r.url=i,i},$t=async(t,e)=>{for(let r of H)t=await Promise.resolve(r(t,R(t)));o.stack.push(y(t)),o.useHash&&(t="/#"+t),history.pushState(null,"",t),e?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("pushState"))},bt=async t=>{for(let r of H)t=await Promise.resolve(r(t,R(t)));let e=y(t);o.stack=o.stack.filter(r=>r.path!==e.path),o.stack.push(e),o.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushSingleState"))},Et=async t=>{for(let e of H)t=await Promise.resolve(e(t,R(t)));o.stack.length>0&&o.stack.pop(),o.stack.push(y(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Tt=(t,e)=>{let r=xt(t);r!=""&&(history.replaceState(null,"",r),e?window.dispatchEvent(new Event("replaceState")):window.dispatchEvent(new Event("backState")))},At=t=>{o.stack=[y(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function Ct(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function R(t){return t.split("?")[0]}function G(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function J(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function Q(t,e){if(e){let r={};Object.keys(e).forEach(c=>{let g=e[c];g!==void 0&&g!==""&&(r[c]=g)});let i=new URLSearchParams(r).toString();return i?t+"?"+i:t}return t}function _(t){let[e,r]=t.split("#"),i=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),c={},g=!1;for(let[P,A]of i.entries())g=!0,A!==void 0&&A!==""&&(c[P]=A);if(!!g)return c}var o={search:Ct,nowUrl:G,urlToPath:R,nowFullUrl:J,push:$t,pushSingle:bt,replace:Et,goBack:Tt,clearTo:At,listen:St,beforeChange:yt,searchUrlToObject:_,parasmUrl:Q,onLastBack:t=>t.url,newStack:y,stack:[],useHash:!1};var W=require("solid-js/web"),Lt=(0,W.template)("<div>Not found page</div>",2),Pt=(0,W.template)("<div></div>",2),p={navigationDuration:0,className:"",style:{},notFound:{sync:!0,render:()=>Lt.cloneNode(!0)},fallback:Pt.cloneNode(!0)};var L=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},U=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},q=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};var B=require("solid-js");function _t(t,e,r){let[i,c]=(0,B.createSignal)(t[e]||r);return(0,B.createEffect)(()=>{c(t[e]||r)}),[i,c]}var N=(t,e=260)=>{if(Object.assign(p,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let i=document.createElement("style");i.id="solid-router-stack-css",i.innerHTML=t,document.head.append(i)}}},Ht={moveTop:L,moveLeft:U,scale:q},Rt=(t,e=150)=>{if(t==="none"){p.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?N(L(e),e+10):N(window.innerWidth>window.innerHeight?L(e):U(e+10),260):N(Ht[t](e),e+10)};var Ut=(0,Z.template)("<div></div>",2);var d="solid-router-stack-now",z="solid-router-stack-before",Bt="solid-router-stack-leave",T="solid-router-stack-after",l={ignoreAnime:!1,isVirtualHistory:!1,lastLen:0},Nt=t=>{let e={...t},[r,i]=(0,f.createRoot)(()=>(0,f.createSignal)([])),c=n=>{let[s,a]=(0,f.createSignal)(n.path),[u,$]=(0,f.createSignal)(""),[v,S]=(0,f.createSignal)(!0),[E,F]=(0,f.createSignal)(!1),[O,m]=(0,f.createSignal)(n.params);return{path:s,setPath:a,css:u,setCss:$,stackTop:v,setStackTop:S,params:O,setParams:m,stackShow:E,setStackShow:F}},g=()=>{let n=r(),s=n[n.length-1];s&&s.setStackTop(!1);let a=o.stack[o.stack.length-1],u,$=n.length,v=0;for(let S=0;S<$;S++){let E=n[S-v];E.path()===a.path&&(u=E,n.splice(S-v,1),v++)}u?u.setParams(a.params):u=c(a),u.setStackTop(!0),u.setStackShow(!0),i([...n,u])},P=()=>{let n=r(),s=n[n.length-1];s&&s.setStackTop(!1);let a=o.stack[o.stack.length-1],u=c(a);i([...r(),u])},A=()=>{let n=o.stack[o.stack.length-1],s=r();if(s.length>1){let a=s[s.length-2];a.setStackTop(!0),a.setPath(n.path),a.setParams(n.params),i([...s])}setTimeout(()=>{s.pop(),i([...s])},p.navigationDuration)},rt=()=>{let n=r();n.pop();let s=o.stack[o.stack.length-1],a=c(s);a.setStackShow(!0),i([...n,a])},it=()=>{i([]),P()},h=n=>{if(p.navigationDuration==0)return;let s=r(),a=s[s.length-1];a&&a.setCss(n)},x=n=>{if(p.navigationDuration==0)return;let s=r(),a=s[s.length-2];a&&a.setCss(n)},k=n=>{let s=r(),a=s[s.length-1];a&&a.setStackShow(n)},w=n=>{let s=r(),a=s[s.length-2];a&&a.setStackShow(n)};o.listen((n,s)=>{let a=o.stack.length;s==="pushSingleState"?(g(),l.ignoreAnime?(k(!0),w(!1),h(d),x(T)):(k(!0),setTimeout(()=>{w(!1)},p.navigationDuration),h(z),requestAnimationFrame(()=>{x(T),h(d)}))):s==="clearState"?(it(),l.ignoreAnime?(k(!0),w(!1),h(d),x(T)):(k(!0),setTimeout(()=>{w(!1)},p.navigationDuration),h(z),requestAnimationFrame(()=>{x(T),h(d)}))):a>l.lastLen?(P(),l.ignoreAnime?(k(!0),w(!1),h(d),x(T)):(k(!0),setTimeout(()=>{w(!1)},p.navigationDuration),h(z),requestAnimationFrame(()=>{x(T),h(d)}))):l.lastLen!==a&&a>=1?(k(!0),w(!0),h(Bt),x(d),A(),l.ignoreAnime?h(d):setTimeout(()=>{h(d)},p.navigationDuration)):(k(!0),w(!0),rt(),h(d)),l.lastLen=a,l.ignoreAnime&&requestAnimationFrame(()=>{l.ignoreAnime=!1})});let ct=(n,s)=>{s&&(l.ignoreAnime=!0),o.goBack(n,l.isVirtualHistory)},M=n=>{if(n.sync)n.Component=n.render;else{let s=(0,f.lazy)(n.render);n.Component=a=>(0,D.createComponent)(s,a)}n.push=(s,a)=>{a&&(l.ignoreAnime=!0),o.push(o.parasmUrl(n.path,s),l.isVirtualHistory)},n.put=(s,a)=>{a&&(l.ignoreAnime=!0),o.pushSingle(o.parasmUrl(n.path,s))},n.pushSingle=n.put,n.replace=(s,a)=>{a&&(l.ignoreAnime=!0),o.replace(o.parasmUrl(n.path,s))},n.clearTo=(s,a)=>{a&&(l.ignoreAnime=!0),o.clearTo(o.parasmUrl(n.path,s))}};M(p.notFound),Object.keys(e).forEach(n=>{let s=e[n];M(s)});let j={},I=[];Object.keys(e).map(n=>{let s=e[n];s&&(j[s.path]=s,s.sync||I.push(s))});function lt(n){n.preloadAll?I.forEach(s=>{s.render().then(a=>{s.Component=a.default,s.sync=!0})}):n.preload&&n.preload.length&&setTimeout(()=>{n.preload.forEach(s=>{let a=e[s];a&&!a.sync&&a.render().then(u=>{a.Component=u.default,a.sync=!0})})},200)}return{...e,goBack:ct,Routers:({root:n,hash:s,ignoreFull:a,virtualHistory:u})=>{o.useHash=!!s,l.isVirtualHistory=!!u;let $=o.nowUrl(),v=o.searchUrlToObject(o.nowFullUrl());l.ignoreAnime=!0,$!=="/"&&$!==n.path?(n.push(void 0,!0),(j[$]||p.notFound).push({...v})):n.push(v,!0);let[S,E]=(0,f.createSignal)(typeof window<"u"?window.innerWidth:0),[F,O]=(0,f.createSignal)(typeof window<"u"?window.innerHeight:0);return a||typeof window<"u"&&window.addEventListener("resize",()=>{E(window.innerWidth),O(window.innerHeight)}),(0,D.createComponent)(f.For,{get each(){return r()},children:(m,pt)=>{let V=j[m.path()]||p.notFound;lt(V);let ut=V.Component;return(()=>{let C=Ut.cloneNode(!0);return(0,ot.insert)(C,(0,D.createComponent)(ut,(0,at.mergeProps)({get stackLength(){return r().length},get stackTop(){return m.stackTop()},get stackShow(){return m.stackShow()}},()=>m.params()))),(0,nt.effect)(b=>{let X=m.path(),ft={[m.css()]:!0,[p.className]:!0},ht={"pointer-events":m.stackTop()?"auto":"none",position:"fixed","z-index":pt()*10,top:"0px",left:"0px",width:a?void 0:S()+"px",height:a?void 0:F()+"px",...p.style};return X!==b._v$&&(0,st.setAttribute)(C,"data-path",b._v$=X),b._v$2=(0,et.classList)(C,ft,b._v$2),b._v$3=(0,tt.style)(C,ht,b._v$3),b},{_v$:void 0,_v$2:void 0,_v$3:void 0}),C})()}})}}};
//# sourceMappingURL=index.js.map
