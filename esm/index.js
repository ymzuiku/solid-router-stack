import{template as St}from"solid-js/web";import{mergeProps as rt}from"solid-js/web";import{className as xt}from"solid-js/web";import{setAttribute as bt}from"solid-js/web";import{effect as Et}from"solid-js/web";import{insert as Pt}from"solid-js/web";import{memo as _t}from"solid-js/web";import{createComponent as P}from"solid-js/web";import{createRoot as Ct,createSignal as h,For as Ut,lazy as Ht,Suspense as Rt}from"solid-js";var Q=[],lt=t=>{Q.push(t)},x=[],pt=t=>{x.push(t)},g=t=>({url:t,path:t.split("?")[0],params:S(t)||{},time:Date.now(),index:n.stack.length}),J="";["popstate","pushState","replaceState","backState"].forEach(t=>{window.addEventListener(t,()=>{let e=tt();if(t==="popstate")if(e===J){let a=et(),l=g(a),m=n.stack[n.stack.length-1];m.url=l.url,m.params=l.params}else n.stack.pop();let r=n.stack[n.stack.length-1];Q.forEach(a=>{a(r?r.path:"",t,n.stack)}),J=e})});var V=t=>{if(n.stack.length==1)return"";n.stack.pop();let r=n.stack[n.stack.length-1],a=r.path;return n.useHash&&(a="/#"+r.path),a=st(a,{...S(r.url),...t}),r.params=S(a)||{},r.url=a,a},ft=async t=>{for(let e of x)t=await Promise.resolve(e(t,b(t)));n.stack.push(g(t)),n.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},ut=async t=>{for(let e of x)t=await Promise.resolve(e(t,b(t)));n.stack.push(g(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},Z=async t=>{for(let e of x)t=await Promise.resolve(e(t,b(t)));n.stack.length>0&&n.stack.pop(),n.stack.push(g(t)),n.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},mt=t=>{let e=V(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},dt=t=>{let e=V(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},ht=t=>{n.stack=[g(t)],Z(t)};function vt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function b(t){return t.split("?")[0]}function tt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function et(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function st(t,e){if(e){let r={};Object.keys(e).forEach(l=>{let m=e[l];m!==void 0&&m!==""&&(r[l]=m)});let a=new URLSearchParams(r).toString();return a?t+"?"+a:t}return t}function S(t){let[e,r]=t.split("#"),a=new URLSearchParams([e.split("?")[1],r?r.split("?")[1]:""].join("&")),l={},m=!1;for(let[_,d]of a.entries())m=!0,d!==void 0&&d!==""&&(l[_]=d);if(!!m)return l}var n={search:vt,nowUrl:tt,urlToPath:b,nowFullUrl:et,push:ft,pushNotHistory:ut,replace:Z,goBack:mt,gobackNotHistory:dt,clearTo:ht,listen:lt,beforeChange:pt,searchUrlToObject:S,parasmUrl:st,onLastBack:t=>t.url,newStack:g,stack:[],useHash:!1};import{template as nt}from"solid-js/web";var gt=nt("<div>Not found page</div>",2),kt=nt("<div></div>",2),p={navigationDuration:0,background:"inherit",notFound:{async:!0,render:()=>gt.cloneNode(!0)},fallback:kt.cloneNode(!0)};var E=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},ot=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as wt,createSignal as yt}from"solid-js";function Mt(t,e,r){let[a,l]=yt(t[e]||r);return wt(()=>{l(t[e]||r)}),[a,l]}var D=(t,e=260)=>{if(Object.assign(p,{navigationDuration:e}),typeof window<"u"){let r=document.getElementById("solid-router-stack-css");if(r)r.innerHTML=t;else{let a=document.createElement("style");a.id="solid-router-stack-css",a.innerHTML=t,document.head.append(a)}}},$t={moveTop:E,moveLeft:O,scale:ot},Yt=(t,e=150)=>{if(t==="none"){p.navigationDuration=0;let r=document.getElementById("solid-router-stack-css");r&&r.remove()}else t==="auto"?typeof window>"u"?D(E(e),e+10):D(window.innerWidth>window.innerHeight?E(e):O(e+10),260):D($t[t](e),e+10)};var Tt=St("<div></div>",2);var k="solid-router-stack-now",Lt="solid-router-stack-before",Nt="solid-router-stack-leave",at="solid-router-stack-after",ae=t=>{let e={...t},[r,a]=Ct(()=>h([])),l=()=>{let s=r(),o=s[s.length-1];o&&o.setTop(!1);let i=n.stack[n.stack.length-1],[R,w]=h(i.url),[$,L]=h(i.path),[N,A]=h(""),[B,f]=h(!0),[j,y]=h(i.params);a([...r(),{url:R,setUrl:w,path:$,setPath:L,css:N,setCss:A,top:B,setTop:f,params:j,setParams:y}])},m=()=>{let s=n.stack[n.stack.length-1],o=r();if(o.length>1){let i=o[o.length-2];i.setTop(!0),i.setUrl(s.url),i.setPath(s.path),i.setParams(s.params),a([...o])}setTimeout(()=>{o.pop(),a([...o])},p.navigationDuration)},_=()=>{let s=n.stack[n.stack.length-1],o=r(),i=o[o.length-1];i.setUrl(s.url),i.setParams(s.params),a([...o])},d=s=>{if(p.navigationDuration==0)return;let o=r(),i=o[o.length-1];i&&i.setCss(s)},T=s=>{if(p.navigationDuration==0)return;let o=r(),i=o[o.length-2];i&&i.setCss(s)},C=0,v=!1;n.listen(()=>{let s=n.stack.length;s>C?(l(),v?(d(k),T(at)):(d(Lt),requestAnimationFrame(()=>{T(at),d(k)}))):C!==s&&s>=1?(d(Nt),T(k),m(),v?d(k):setTimeout(()=>{d(k)},p.navigationDuration)):(_(),d(k)),C=s,v&&requestAnimationFrame(()=>{v=!1})});let U=!1,it=s=>{U?n.gobackNotHistory(s):n.goBack(s)},F=s=>{s.async?s.Component=s.render:s.Component=Ht(s.render),s.push=o=>{U?n.pushNotHistory(n.parasmUrl(s.path,o)):n.push(n.parasmUrl(s.path,o))},s.replace=o=>{n.replace(n.parasmUrl(s.path,o))},s.clearTo=o=>{v=!0,n.clearTo(n.parasmUrl(s.path,o))}};F(p.notFound),Object.keys(e).forEach(s=>{let o=e[s];F(o)});let H={},K=[];Object.keys(e).map(s=>{let o=e[s];o&&(H[o.path]=o,o.async||K.push(o))});function ct(s){s.preloadAll?K.forEach(o=>{o.render()}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(o=>{let i=e[o];i&&!i.async&&i.render()})},200)}return{...e,goBack:it,Routers:({root:s,hash:o,ignoreFull:i,virtualHistory:R})=>{n.useHash=!!o,U=!!R;let w=n.nowUrl(),$=n.searchUrlToObject(n.nowFullUrl());if(v=!0,w!=="/"&&w!==s.path){s.push();let f=H[w]||p.notFound;v=!0,f.push({...$})}else s.push($);let[L,N]=h(typeof window<"u"?window.innerWidth:0),[A,B]=h(typeof window<"u"?window.innerHeight:0);return i||typeof window<"u"&&window.addEventListener("resize",()=>{N(window.innerWidth),B(window.innerHeight)}),P(Ut,{get each(){return r()},children:(f,j)=>{let y=H[f.path()]||p.notFound;ct(y);let W=y.Component;return(()=>{let u=Tt.cloneNode(!0);return u.style.setProperty("position","fixed"),u.style.setProperty("top","0px"),u.style.setProperty("left","0px"),Pt(u,(()=>{let c=_t(()=>!!y.async,!0);return()=>c()?P(W,rt({get stackTop(){return f.top()}},()=>f.params())):P(Rt,{get fallback(){return p.fallback},get children(){return P(W,rt({get stackTop(){return f.top()}},()=>f.params()))}})})()),Et(c=>{let M=f.path(),z=f.css(),I=f.top()?"auto":"none",X=j()*10,Y=i?void 0:L()+"px",q=i?void 0:A()+"px",G=p.background;return M!==c._v$&&bt(u,"data-path",c._v$=M),z!==c._v$2&&xt(u,c._v$2=z),I!==c._v$3&&u.style.setProperty("pointer-events",c._v$3=I),X!==c._v$4&&u.style.setProperty("z-index",c._v$4=X),Y!==c._v$5&&u.style.setProperty("width",c._v$5=Y),q!==c._v$6&&u.style.setProperty("height",c._v$6=q),G!==c._v$7&&u.style.setProperty("background",c._v$7=G),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),u})()}})}}};export{Mt as createPropsSignal,ae as createRouters,n as historyProxy,O as moveLeftCss,E as moveTopCss,ot as scaleCss,D as setCustomNavigationAnimation,Yt as setNavigationAnimation};
