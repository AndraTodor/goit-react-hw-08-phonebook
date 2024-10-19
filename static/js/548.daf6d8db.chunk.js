"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[548],{218:(t,e,r)=>{r.d(e,{x7:()=>rt,ZP:()=>at});var a=r(791);let o={data:""},i=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||o,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(t,e)=>{let r="",a="",o="";for(let i in t){let n=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+n+";":a+="f"==i[1]?c(n,i):i+"{"+c(n,"k"==i[1]?"":e)+"}":"object"==typeof n?a+=c(n,e?e.replace(/([^,])+/g,(t=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)))):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=c.p?c.p(i,n):i+":"+n+";")}return r+(e&&o?e+"{"+o+"}":o)+a},d={},u=t=>{if("object"==typeof t){let e="";for(let r in t)e+=r+u(t[r]);return e}return t},p=(t,e,r,a,o)=>{let i=u(t),p=d[i]||(d[i]=(t=>{let e=0,r=11;for(;e<t.length;)r=101*r+t.charCodeAt(e++)>>>0;return"go"+r})(i));if(!d[p]){let e=i!==t?t:(t=>{let e,r,a=[{}];for(;e=n.exec(t.replace(s,""));)e[4]?a.shift():e[3]?(r=e[3].replace(l," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][e[1]]=e[2].replace(l," ").trim();return a[0]})(t);d[p]=c(o?{["@keyframes "+p]:e}:e,r?"":"."+p)}let f=r&&d.g?d.g:null;return r&&(d.g=d[p]),((t,e,r,a)=>{a?e.data=e.data.replace(a,t):-1===e.data.indexOf(t)&&(e.data=r?t+e.data:e.data+t)})(d[p],e,a,f),p},f=(t,e,r)=>t.reduce(((t,a,o)=>{let i=e[o];if(i&&i.call){let t=i(r),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;i=e?"."+e:t&&"object"==typeof t?t.props?"":c(t,""):!1===t?"":t}return t+a+(null==i?"":i)}),"");function m(t){let e=this||{},r=t.call?t(e.p):t;return p(r.unshift?r.raw?f(r,[].slice.call(arguments,1),e.p):r.reduce(((t,r)=>Object.assign(t,r&&r.call?r(e.p):r)),{}):r,i(e.target),e.g,e.o,e.k)}m.bind({g:1});let g,y,h,b=m.bind({k:1});function v(t,e){let r=this||{};return function(){let a=arguments;function o(i,n){let s=Object.assign({},i),l=s.className||o.className;r.p=Object.assign({theme:y&&y()},s),r.o=/ *go\d+/.test(l),s.className=m.apply(r,a)+(l?" "+l:""),e&&(s.ref=n);let c=t;return t[0]&&(c=s.as||t,delete s.as),h&&c[0]&&h(s),g(c,s)}return e?e(o):o}}var x=(t,e)=>(t=>"function"==typeof t)(t)?t(e):t,w=(()=>{let t=0;return()=>(++t).toString()})(),O=(()=>{let t;return()=>{if(void 0===t&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),j=new Map,E=t=>{if(j.has(t))return;let e=setTimeout((()=>{j.delete(t),C({type:4,toastId:t})}),1e3);j.set(t,e)},k=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,20)};case 1:return e.toast.id&&(t=>{let e=j.get(t);e&&clearTimeout(e)})(e.toast.id),{...t,toasts:t.toasts.map((t=>t.id===e.toast.id?{...t,...e.toast}:t))};case 2:let{toast:r}=e;return t.toasts.find((t=>t.id===r.id))?k(t,{type:1,toast:r}):k(t,{type:0,toast:r});case 3:let{toastId:a}=e;return a?E(a):t.toasts.forEach((t=>{E(t.id)})),{...t,toasts:t.toasts.map((t=>t.id===a||void 0===a?{...t,visible:!1}:t))};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter((t=>t.id!==e.toastId))};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map((t=>({...t,pauseDuration:t.pauseDuration+o})))}}},P=[],$={toasts:[],pausedAt:void 0},C=t=>{$=k($,t),P.forEach((t=>{t($)}))},N={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=t=>(e,r)=>{let a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",r=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(null==r?void 0:r.id)||w()}}(e,t,r);return C({type:2,toast:a}),a.id},D=(t,e)=>z("blank")(t,e);D.error=z("error"),D.success=z("success"),D.loading=z("loading"),D.custom=z("custom"),D.dismiss=t=>{C({type:3,toastId:t})},D.remove=t=>C({type:4,toastId:t}),D.promise=(t,e,r)=>{let a=D.loading(e.loading,{...r,...null==r?void 0:r.loading});return t.then((t=>(D.success(x(e.success,t),{id:a,...r,...null==r?void 0:r.success}),t))).catch((t=>{D.error(x(e.error,t),{id:a,...r,...null==r?void 0:r.error})})),t};var S=(t,e)=>{C({type:1,toast:{id:t,height:e}})},A=()=>{C({type:5,time:Date.now()})},I=t=>{let{toasts:e,pausedAt:r}=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[e,r]=(0,a.useState)($);(0,a.useEffect)((()=>(P.push(r),()=>{let t=P.indexOf(r);t>-1&&P.splice(t,1)})),[e]);let o=e.toasts.map((e=>{var r,a;return{...t,...t[e.type],...e,duration:e.duration||(null==(r=t[e.type])?void 0:r.duration)||(null==t?void 0:t.duration)||N[e.type],style:{...t.style,...null==(a=t[e.type])?void 0:a.style,...e.style}}}));return{...e,toasts:o}}(t);(0,a.useEffect)((()=>{if(r)return;let t=Date.now(),a=e.map((e=>{if(e.duration===1/0)return;let r=(e.duration||0)+e.pauseDuration-(t-e.createdAt);if(!(r<0))return setTimeout((()=>D.dismiss(e.id)),r);e.visible&&D.dismiss(e.id)}));return()=>{a.forEach((t=>t&&clearTimeout(t)))}}),[e,r]);let o=(0,a.useCallback)((()=>{r&&C({type:6,time:Date.now()})}),[r]),i=(0,a.useCallback)(((t,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:i}=r||{},n=e.filter((e=>(e.position||i)===(t.position||i)&&e.height)),s=n.findIndex((e=>e.id===t.id)),l=n.filter(((t,e)=>e<s&&t.visible)).length;return n.filter((t=>t.visible)).slice(...a?[l+1]:[0,l]).reduce(((t,e)=>t+(e.height||0)+o),0)}),[e]);return{toasts:e,handlers:{updateHeight:S,startPause:A,endPause:o,calculateOffset:i}}},M=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${_} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,H=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${H} 1s linear infinite;
`,L=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Z=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=v("div")`
  position: absolute;
`,R=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,W=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${W} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=t=>{let{toast:e}=t,{icon:r,type:o,iconTheme:i}=e;return void 0!==r?"string"==typeof r?a.createElement(Y,null,r):r:"blank"===o?null:a.createElement(R,null,a.createElement(B,{...i}),"loading"!==o&&a.createElement(q,null,"error"===o?a.createElement(F,{...i}):a.createElement(Z,{...i})))},J=t=>`\n0% {transform: translate3d(0,${-200*t}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,K=t=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*t}%,-1px) scale(.6); opacity:0;}\n`,Q=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,V=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=a.memo((t=>{let{toast:e,position:r,style:o,children:i}=t,n=e.height?((t,e)=>{let r=t.includes("top")?1:-1,[a,o]=O()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[J(r),K(r)];return{animation:e?`${b(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||r||"top-center",e.visible):{opacity:0},s=a.createElement(G,{toast:e}),l=a.createElement(V,{...e.ariaProps},x(e.message,e));return a.createElement(Q,{className:e.className,style:{...n,...o,...e.style}},"function"==typeof i?i({icon:s,message:l}):a.createElement(a.Fragment,null,s,l))}));!function(t,e,r,a){c.p=e,g=t,y=r,h=a}(a.createElement);var tt=t=>{let{id:e,className:r,style:o,onHeightUpdate:i,children:n}=t,s=a.useCallback((t=>{if(t){let r=()=>{let r=t.getBoundingClientRect().height;i(e,r)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,i]);return a.createElement("div",{ref:s,className:r,style:o},n)},et=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,rt=t=>{let{reverseOrder:e,position:r="top-center",toastOptions:o,gutter:i,children:n,containerStyle:s,containerClassName:l}=t,{toasts:c,handlers:d}=I(o);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((t=>{let o=t.position||r,s=((t,e)=>{let r=t.includes("top"),a=r?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:O()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...a,...o}})(o,d.calculateOffset(t,{reverseOrder:e,gutter:i,defaultPosition:r}));return a.createElement(tt,{id:t.id,key:t.id,onHeightUpdate:d.updateHeight,className:t.visible?et:"",style:s},"custom"===t.type?x(t.message,t):n?n(t):a.createElement(X,{toast:t,position:o}))})))},at=D},236:(t,e,r)=>{r.d(e,{MdO:()=>g,Bmn:()=>y});var a=r(791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(o),n=["attr","size","title"];function s(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;r[a]=t[a]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},l.apply(this,arguments)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){return t&&t.map(((t,e)=>a.createElement(t.tag,d({key:e},t.attr),p(t.child))))}function f(t){return e=>a.createElement(m,l({attr:d({},t.attr)},e),p(t.child))}function m(t){var e=e=>{var r,{attr:o,size:i,title:c}=t,u=s(t,n),p=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:r,style:d(d({color:t.color||e.color},e.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),t.children)};return void 0!==i?a.createElement(i.Consumer,null,(t=>e(t))):e(o)}function g(t){return f({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"},child:[]}]})(t)}function y(t){return f({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9 11.041v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"},child:[]}]})(t)}}}]);
//# sourceMappingURL=548.daf6d8db.chunk.js.map