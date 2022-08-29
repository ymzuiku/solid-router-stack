import{template as St}from"solid-js/web";import{mergeProps as ot}from"solid-js/web";import{classList as $t}from"solid-js/web";import{setAttribute as xt}from"solid-js/web";import{effect as bt}from"solid-js/web";import{insert as Et}from"solid-js/web";import{memo as Pt}from"solid-js/web";import{createComponent as P}from"solid-js/web";import{createRoot as _t,createSignal as d,For as Ct,lazy as Ut,Suspense as Ht}from"solid-js";var G=[],ct=t=>{G.push(t)},x=[],lt=t=>{x.push(t)},v=t=>({url:t,path:t.split("?")[0],params:$(t)||{},time:Date.now(),index:o.stack.length}),q="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=V();if(t==="popstate")if(e===q){let a=Z(),l=v(a),u=o.stack[o.stack.length-1];u.url=l.url,u.params=l.params}else o.stack.pop();let r=o.stack[o.stack.length-1];G.forEach(a=>{a(r?r.path:"",t,o.stack)}),q=e})});var J=t=>{if(o.stack.length==1)return"";o.stack.pop();let r=o.stack[o.stack.length-1],a=r.path;return o.useHash&&(a="/#"+r.path),a=tt(a,{...$(r.url),...t}),r.params=$(a)||{},r.url=a,a},pt=async t=>{for(let e of x)t=await Promise.resolve(e(t,b(t)));o.stack.push(v(t)),o.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},ft=async t=>{for(let e of x)t=await Promise.resolve(e(t,b(t)));o.stack.push(v(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Q=async t=>{for(let e of x)t=await Promise.resolve(e(t,b(t)));o.stack.length>0&&o.stack.pop(),o.stack.push(v(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},ut=t=>{let e=J(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},mt=t=>{let e=J(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},ht=t=>{o.stack=[v(t)],Q(t)};function dt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function b(t){return t.split("?")[0]}function V(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function Z(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function tt(t,e){if(e){let r={};Object.keys(e).forEach(l=>{let u=e[l];u!==void 0&&u!==""&&(r[l]=u)});let a=new URLSearchParams(r).toString();return a?t+"?"+a:t}return t}function $(t){let[e,r]=t.split("#"),a=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),l={},u=!1;for(let[T,m]of a.entries())u=!0,m!==void 0&&m!==""&&(l[T]=m);if(!!u)return l}var o={search:dt,nowUrl:V,urlToPath:b,nowFullUrl:Z,push:pt,pushNotHistory:ft,replace:Q,goBack:ut,gobackNotHistory:mt,clearTo:ht,listen:ct,beforeChange:lt,searchUrlToObject:$,parasmUrl:tt,onLastBack:t=>t.url,newStack:v,stack:[],useHash:!1};import{template as et}from"solid-js/web";var gt=et("<div>Not found page</div>",2),vt=et("<div></div>",2),p={navigationDuration:0,className:"",notFound:{async:!0,render:()=>gt.cloneNode(!0)},fallback:vt.cloneNode(!0)};var E=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},O=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as kt,createSignal as wt}from"solid-js";function Wt(t,e,r){let[a,l]=wt(t[e]||r);return kt(()=>{l(t[e]||r)}),[a,l]}var D=(t,e=260)=>{if(Object.assign(p,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let a=document.createElement("style");a.id="solid-router-stack-css",a.innerHTML=t,document.head.append(a)}}},yt={moveTop:E,moveLeft:O,scale:st},Xt=(t,e=150)=>{if(t==="none"){p.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?D(E(e),e+10):D(window.innerWidth>window.innerHeight?E(e):O(e+10),260):D(yt[t](e),e+10)};var Tt=St("<div></div>",2);var k="solid-router-stack-now",Lt="solid-router-stack-before",Rt="solid-router-stack-leave",nt="solid-router-stack-after",re=t=>{let e={...t},[r,a]=_t(()=>d([])),l=()=>{let s=r(),n=s[s.length-1];n&&n.setTop(!1);let i=o.stack[o.stack.length-1],[L,w]=d(i.url),[S,R]=d(i.path),[N,A]=d(""),[B,f]=d(!0),[j,y]=d(i.params);a([...r(),{url:L,setUrl:w,path:S,setPath:R,css:N,setCss:A,top:B,setTop:f,params:j,setParams:y}])},u=()=>{let s=o.stack[o.stack.length-1],n=r();if(n.length>1){let i=n[n.length-2];i.setTop(!0),i.setUrl(s.url),i.setPath(s.path),i.setParams(s.params),a([...n])}setTimeout(()=>{n.pop(),a([...n])},p.navigationDuration)},T=()=>{let s=o.stack[o.stack.length-1],n=r(),i=n[n.length-1];i.setUrl(s.url),i.setParams(s.params),a([...n])},m=s=>{if(p.navigationDuration==0)return;let n=r(),i=n[n.length-1];i&&i.setCss(s)},_=s=>{if(p.navigationDuration==0)return;let n=r(),i=n[n.length-2];i&&i.setCss(s)},C=0,g=!1;o.listen(()=>{let s=o.stack.length;s>C?(l(),g?(m(k),_(nt)):(m(Lt),requestAnimationFrame(()=>{_(nt),m(k)}))):C!==s&&s>=1?(m(Rt),_(k),u(),g?m(k):setTimeout(()=>{m(k)},p.navigationDuration)):(T(),m(k)),C=s,g&&requestAnimationFrame(()=>{g=!1})});let U=!1,rt=s=>{U?o.gobackNotHistory(s):o.goBack(s)},F=s=>{s.async?s.Component=s.render:s.Component=Ut(s.render),s.push=n=>{U?o.pushNotHistory(o.parasmUrl(s.path,n)):o.push(o.parasmUrl(s.path,n))},s.replace=n=>{o.replace(o.parasmUrl(s.path,n))},s.clearTo=n=>{g=!0,o.clearTo(o.parasmUrl(s.path,n))}};F(p.notFound),Object.keys(e).forEach(s=>{let n=e[s];F(n)});let H={},K=[];Object.keys(e).map(s=>{let n=e[s];n&&(H[n.path]=n,n.async||K.push(n))});function at(s){s.preloadAll?K.forEach(n=>{n.render()}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(n=>{let i=e[n];i&&!i.async&&i.render()})},200)}return{...e,goBack:rt,Routers:({root:s,hash:n,ignoreFull:i,virtualHistory:L})=>{o.useHash=!!n,U=!!L;let w=o.nowUrl(),S=o.searchUrlToObject(o.nowFullUrl());if(g=!0,w!=="/"&&w!==s.path){s.push();let f=H[w]||p.notFound;g=!0,f.push({...S})}else s.push(S);let[R,N]=d(typeof window<"u"?window.innerWidth:0),[A,B]=d(typeof window<"u"?window.innerHeight:0);return i||typeof window<"u"&&window.addEventListener("resize",()=>{N(window.innerWidth),B(window.innerHeight)}),P(Ct,{get each(){return r()},children:(f,j)=>{let y=H[f.path()]||p.notFound;at(y);let W=y.Component;return(()=>{let h=Tt.cloneNode(!0);return h.style.setProperty("position","fixed"),h.style.setProperty("top","0px"),h.style.setProperty("left","0px"),Et(h,(()=>{let c=Pt(()=>!!y.async,!0);return()=>c()?P(W,ot({get stackTop(){return f.top()}},()=>f.params())):P(Ht,{get fallback(){return p.fallback},get children(){return P(W,ot({get stackTop(){return f.top()}},()=>f.params()))}})})()),bt(c=>{let M=f.path(),it={[f.css()]:!0,[p.className]:!0},z=f.top()?"auto":"none",I=j()*10,X=i?void 0:R()+"px",Y=i?void 0:A()+"px";return M!==c._v$&&xt(h,"data-path",c._v$=M),c._v$2=$t(h,it,c._v$2),z!==c._v$3&&h.style.setProperty("pointer-events",c._v$3=z),I!==c._v$4&&h.style.setProperty("z-index",c._v$4=I),X!==c._v$5&&h.style.setProperty("width",c._v$5=X),Y!==c._v$6&&h.style.setProperty("height",c._v$6=Y),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),h})()}})}}};export{Wt as createPropsSignal,re as createRouters,o as historyProxy,O as moveLeftCss,E as moveTopCss,st as scaleCss,D as setCustomNavigationAnimation,Xt as setNavigationAnimation,p as stackOptions};
