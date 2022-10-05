import{template as Et}from"solid-js/web";import{classList as Tt}from"solid-js/web";import{setAttribute as Pt}from"solid-js/web";import{effect as _t}from"solid-js/web";import{insert as Ct}from"solid-js/web";import{mergeProps as Lt}from"solid-js/web";import{createComponent as U}from"solid-js/web";import{createRoot as Ht,createSignal as d,For as Rt,lazy as Nt,Suspense as At}from"solid-js";var V=[],ut=t=>{V.push(t)},_=[],ft=t=>{_.push(t)},y=t=>({url:t,path:t.split("?")[0],params:P(t)||{},time:Date.now(),index:o.stack.length}),Q="";["popstate","pushState","replaceState","backState","clearState"].forEach(t=>{window.addEventListener(t,()=>{let e=tt();if(t==="popstate")if(e===Q){let c=et(),l=y(c),u=o.stack[o.stack.length-1];u.url=l.url,u.params=l.params}else o.stack.pop();let a=o.stack[o.stack.length-1];V.forEach(c=>{c(a?a.path:"",t,o.stack)}),Q=e})});var Z=t=>{if(o.stack.length==1)return"";o.stack.pop();let a=o.stack[o.stack.length-1],c=a.path;return o.useHash&&(c="/#"+a.path),c=st(c,{...P(a.url),...t}),a.params=P(c)||{},a.url=c,c},ht=async t=>{for(let e of _)t=await Promise.resolve(e(t,C(t)));o.stack.push(y(t)),o.useHash&&(t="/#"+t),history.pushState(null,"",t),window.dispatchEvent(new Event("pushState"))},mt=async t=>{for(let e of _)t=await Promise.resolve(e(t,C(t)));o.stack.push(y(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},dt=async t=>{for(let e of _)t=await Promise.resolve(e(t,C(t)));o.stack.length>0&&o.stack.pop(),o.stack.push(y(t)),o.useHash&&(t="/#"+t),history.replaceState(null,"",t),window.dispatchEvent(new Event("replaceState"))},kt=t=>{let e=Z(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("backState")))},gt=t=>{let e=Z(t);e!=""&&(history.replaceState(null,"",e),window.dispatchEvent(new Event("replaceState")))},vt=t=>{o.stack=[y(t)],history.replaceState(null,"",t),window.dispatchEvent(new Event("clearState"))};function wt(){let[t,e]=location.href.split("#");return new URLSearchParams([t.split("?")[1],e.split("?")[1]].join("&"))}function C(t){return t.split("?")[0]}function tt(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1].split("?")[0]}function et(){if(!location.hash)return"/";let t=location.hash.split("#");return t.length<2?"/":t[1]}function st(t,e){if(e){let a={};Object.keys(e).forEach(l=>{let u=e[l];u!==void 0&&u!==""&&(a[l]=u)});let c=new URLSearchParams(a).toString();return c?t+"?"+c:t}return t}function P(t){let[e,a]=t.split("#"),c=new URLSearchParams([e.split("?")[1],a?a.split("?")[1]:""].join("&")),l={},u=!1;for(let[R,S]of c.entries())u=!0,S!==void 0&&S!==""&&(l[R]=S);if(!!u)return l}var o={search:wt,nowUrl:tt,urlToPath:C,nowFullUrl:et,push:ht,pushNotHistory:mt,replace:dt,goBack:kt,gobackNotHistory:gt,clearTo:vt,listen:ut,beforeChange:ft,searchUrlToObject:P,parasmUrl:st,onLastBack:t=>t.url,newStack:y,stack:[],useHash:!1};import{template as nt}from"solid-js/web";var yt=nt("<div>Not found page</div>",2),St=nt("<div></div>",2),i={navigationDuration:0,className:"",notFound:{async:!0,render:()=>yt.cloneNode(!0)},fallback:St.cloneNode(!0)};var L=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`},W=t=>{let e=`transition: transform ${t}ms ease-out, opacity ${t}ms ease-out;`;return`
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
`};import{createEffect as xt,createSignal as $t}from"solid-js";function qt(t,e,a){let[c,l]=$t(t[e]||a);return xt(()=>{l(t[e]||a)}),[c,l]}var z=(t,e=260)=>{if(Object.assign(i,{navigationDuration:e}),typeof window<"u"){let a=document.getElementById("solid-router-stack-css");if(a)a.innerHTML=t;else{let c=document.createElement("style");c.id="solid-router-stack-css",c.innerHTML=t,document.head.append(c)}}},bt={moveTop:L,moveLeft:W,scale:ot},Gt=(t,e=150)=>{if(t==="none"){i.navigationDuration=0;let a=document.getElementById("solid-router-stack-css");a&&a.remove()}else t==="auto"?typeof window>"u"?z(L(e),e+10):z(window.innerWidth>window.innerHeight?L(e):W(e+10),260):z(bt[t](e),e+10)};var Ut=Et("<div></div>",2);var k="solid-router-stack-now",rt="solid-router-stack-before",Bt="solid-router-stack-leave",H="solid-router-stack-after",ce=t=>{let e={...t},[a,c]=Ht(()=>d([])),l=s=>{let[n,r]=d(s.url),[$,b]=d(s.path),[E,j]=d(""),[D,O]=d(!0),[F,f]=d(!1),[K,T]=d(s.params);return{url:n,setUrl:r,path:$,setPath:b,css:E,setCss:j,stackTop:D,setStackTop:O,params:K,setParams:T,stackShow:F,setStackShow:f}},u=()=>{let s=a(),n=s[s.length-1];n&&n.setStackTop(!1);let r=o.stack[o.stack.length-1],$=l(r);c([...a(),$])},R=()=>{let s=o.stack[o.stack.length-1],n=a();if(n.length>1){let r=n[n.length-2];r.setStackTop(!0),r.setUrl(s.url),r.setPath(s.path),r.setParams(s.params),c([...n])}setTimeout(()=>{n.pop(),c([...n])},i.navigationDuration)},S=()=>{let s=a();s.pop();let n=o.stack[o.stack.length-1],r=l(n);r.setStackShow(!0),c([...s,r])},at=()=>{c([]),u()},m=s=>{if(i.navigationDuration==0)return;let n=a(),r=n[n.length-1];r&&r.setCss(s)},x=s=>{if(i.navigationDuration==0)return;let n=a(),r=n[n.length-2];r&&r.setCss(s)},v=s=>{let n=a(),r=n[n.length-1];r&&r.setStackShow(s)},w=s=>{let n=a(),r=n[n.length-2];r&&r.setStackShow(s)},N=0,g=!1;o.listen((s,n)=>{let r=o.stack.length;n==="clearState"?(at(),g?(v(!0),w(!1),m(k),x(H)):(v(!0),setTimeout(()=>{w(!1)},i.navigationDuration),m(rt),requestAnimationFrame(()=>{x(H),m(k)}))):r>N?(u(),g?(v(!0),w(!1),m(k),x(H)):(v(!0),setTimeout(()=>{w(!1)},i.navigationDuration),m(rt),requestAnimationFrame(()=>{x(H),m(k)}))):N!==r&&r>=1?(v(!0),w(!0),m(Bt),x(k),R(),g?m(k):setTimeout(()=>{m(k)},i.navigationDuration)):(v(!0),w(!0),S(),m(k)),N=r,g&&requestAnimationFrame(()=>{g=!1})});let A=!1,ct=s=>{A?o.gobackNotHistory(s):o.goBack(s)},M=s=>{if(s.async)s.Component=s.render;else{let n=Nt(s.render);s.Component=r=>U(At,{get fallback(){return i.fallback},get children(){return U(n,r)}})}s.push=n=>{A?o.pushNotHistory(o.parasmUrl(s.path,n)):o.push(o.parasmUrl(s.path,n))},s.replace=n=>{o.replace(o.parasmUrl(s.path,n))},s.clearTo=n=>{o.clearTo(o.parasmUrl(s.path,n))}};M(i.notFound),Object.keys(e).forEach(s=>{let n=e[s];M(n)});let B={},q=[];Object.keys(e).map(s=>{let n=e[s];n&&(B[n.path]=n,n.async||q.push(n))});function it(s){s.preloadAll?q.forEach(n=>{n.render()}):s.preload&&s.preload.length&&setTimeout(()=>{s.preload.forEach(n=>{let r=e[n];r&&!r.async&&r.render()})},200)}return{...e,goBack:ct,Routers:({root:s,hash:n,ignoreFull:r,virtualHistory:$})=>{o.useHash=!!n,A=!!$;let b=o.nowUrl(),E=o.searchUrlToObject(o.nowFullUrl());if(g=!0,b!=="/"&&b!==s.path){s.push();let f=B[b]||i.notFound;g=!0,f.push({...E})}else s.push(E);let[j,D]=d(typeof window<"u"?window.innerWidth:0),[O,F]=d(typeof window<"u"?window.innerHeight:0);return r||typeof window<"u"&&window.addEventListener("resize",()=>{D(window.innerWidth),F(window.innerHeight)}),U(Rt,{get each(){return a()},children:(f,K)=>{let T=B[f.path()]||i.notFound;it(T);let lt=T.Component;return(()=>{let h=Ut.cloneNode(!0);return h.style.setProperty("position","fixed"),h.style.setProperty("top","0px"),h.style.setProperty("left","0px"),Ct(h,U(lt,Lt({get stackLength(){return a().length},get stackTop(){return f.stackTop()},get stackShow(){return f.stackShow()}},()=>f.params()))),_t(p=>{let I=f.path(),pt={[f.css()]:!0,[i.className]:!0},X=f.stackTop()?"auto":"none",Y=K()*10,G=r?void 0:j()+"px",J=r?void 0:O()+"px";return I!==p._v$&&Pt(h,"data-path",p._v$=I),p._v$2=Tt(h,pt,p._v$2),X!==p._v$3&&h.style.setProperty("pointer-events",p._v$3=X),Y!==p._v$4&&h.style.setProperty("z-index",p._v$4=Y),G!==p._v$5&&h.style.setProperty("width",p._v$5=G),J!==p._v$6&&h.style.setProperty("height",p._v$6=J),p},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),h})()}})}}};export{qt as createPropsSignal,ce as createRouters,o as historyProxy,W as moveLeftCss,L as moveTopCss,ot as scaleCss,z as setCustomNavigationAnimation,Gt as setNavigationAnimation,i as stackOptions};
