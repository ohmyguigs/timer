var e=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,l=(e,s)=>{for(var t in s||(s={}))o.call(s,t)&&n(e,t,s[t]);if(a)for(var t of a(s))r.call(s,t)&&n(e,t,s[t]);return e},c=(e,a)=>s(e,t(a));import{S as i,i as u,s as d,H as m,e as f,k as h,t as p,j as v,I as b,c as $,d as g,n as w,a as y,g as E,m as k,b as P,J as _,F as x,f as A,o as I,K as O,L as j,h as D,v as L,r as V,w as S,z as M,M as N,N as X,O as Y,P as T,Q as q}from"../chunks/vendor-49ac5572.js";const{document:z}=Y;function F(e){let s,t,a,o,r,n,l,c,i,u,d,M,N,X,Y,T,q,F,R,U,B,H,J,K,Q,C,G=`${e[2]?"-":""}${e[7](e[0])}`,W=e[7](e[1])+"";return J=new m({}),{c(){s=f("meta"),t=h(),a=f("div"),o=f("div"),n=h(),l=f("div"),c=f("div"),i=f("span"),u=f("span"),d=p(G),N=h(),X=f("span"),Y=p(":"),T=h(),q=f("span"),F=p(W),B=h(),H=f("div"),v(J.$$.fragment),this.h()},l(e){const r=b('[data-svelte="svelte-c9e3kw"]',z.head);s=$(r,"META",{name:!0,content:!0}),r.forEach(g),t=w(e),a=$(e,"DIV",{class:!0});var m=y(a);o=$(m,"DIV",{class:!0}),y(o).forEach(g),n=w(m),l=$(m,"DIV",{class:!0});var f=y(l);c=$(f,"DIV",{class:!0});var h=y(c);i=$(h,"SPAN",{class:!0});var p=y(i);u=$(p,"SPAN",{class:!0});var v=y(u);d=E(v,G),v.forEach(g),N=w(p),X=$(p,"SPAN",{class:!0});var P=y(X);Y=E(P,":"),P.forEach(g),T=w(p),q=$(p,"SPAN",{class:!0});var _=y(q);F=E(_,W),_.forEach(g),p.forEach(g),h.forEach(g),f.forEach(g),B=w(m),H=$(m,"DIV",{class:!0});var x=y(H);k(J.$$.fragment,x),x.forEach(g),m.forEach(g),this.h()},h(){z.title="timer",P(s,"name","description"),P(s,"content","Este é um contador de minutos visual usado para ajudar em reuniões."),P(o,"class",r=_(e[3])+" svelte-wb2309"),P(u,"class",M=_(e[5])+" svelte-wb2309"),P(X,"class","index__text_separator svelte-wb2309"),P(q,"class",R=_(e[6])+" svelte-wb2309"),P(i,"class",U=_(e[4])+" svelte-wb2309"),P(c,"class","index__frontpanel svelte-wb2309"),P(l,"class","index__subcontainer svelte-wb2309"),P(H,"class","toast__wrapper svelte-wb2309"),P(a,"class","index__container svelte-wb2309")},m(r,m){x(z.head,s),A(r,t,m),A(r,a,m),x(a,o),x(a,n),x(a,l),x(l,c),x(c,i),x(i,u),x(u,d),x(i,N),x(i,X),x(X,Y),x(i,T),x(i,q),x(q,F),x(a,B),x(a,H),I(J,H,null),K=!0,Q||(C=O(H,"click",j(e[16])),Q=!0)},p(e,[s]){(!K||8&s&&r!==(r=_(e[3])+" svelte-wb2309"))&&P(o,"class",r),(!K||5&s)&&G!==(G=`${e[2]?"-":""}${e[7](e[0])}`)&&D(d,G),(!K||32&s&&M!==(M=_(e[5])+" svelte-wb2309"))&&P(u,"class",M),(!K||2&s)&&W!==(W=e[7](e[1])+"")&&D(F,W),(!K||64&s&&R!==(R=_(e[6])+" svelte-wb2309"))&&P(q,"class",R),(!K||16&s&&U!==(U=_(e[4])+" svelte-wb2309"))&&P(i,"class",U)},i(e){K||(L(J.$$.fragment,e),K=!0)},o(e){V(J.$$.fragment,e),K=!1},d(e){g(s),e&&g(t),e&&g(a),S(J),Q=!1,C()}}}function R(e,s,t){let a,o,r,n,i,u,d;let m=10,f=0,h=10,p=0,v="minutes",b=null,$=!1;const g=()=>{b||(t(12,b=setInterval((()=>{if($)59===f?(t(1,f=0),t(0,m+=1)):t(1,f+=1);else if(0===f){const e=!!b&&0===m;t(1,f=e?0:59),t(0,m=e?0:m-1),t(2,$=e),e&&T.push(c(l({},O),{msg:"Acaou o tempo, mas fica! Vai ter bolo! 🍰"}))}else t(1,f-=1)}),1e3)),t(9,h=m),t(10,p=f))},w=()=>{clearInterval(b),t(12,b=null)},y=()=>{clearInterval(b),t(12,b=null),t(2,$=!1),t(0,m=h),t(1,f=p)},E=e=>{t(11,v=e),console.log(`now editing ${v}`)},k=e=>{m<99&&m>0?t(0,m=e?m+1:m-1):m<=0&&e?(t(0,m+=1),t(2,$=!1)):99!==m||e||t(0,m-=1)},P=e=>{f<59&&f>0?t(1,f=e?f+1:f-1):0===f&&e?t(1,f+=1):59!==f||e||t(1,f-=1)},_=e=>{t(0,m=e),t(9,h=e),t(1,f=0),t(10,p=0),t(2,$=!1)};let x=null,A=null;const I=Math.random()<.5?"#f28000":"#8ce563",O={duration:4200,reversed:!0,intro:{y:42}};return M((async()=>{document.addEventListener("keyup",(e=>{const{key:s}=e;" "===s||"Enter"===s?b?w():g():"ArrowRight"===s?E("seconds"):"ArrowLeft"===s?E("minutes"):"ArrowUp"===s?"minutes"===v?k(!0):P(!0):"ArrowDown"===s?"minutes"===v?k(!1):P(!1):"r"===s||"R"===s?y():"1"===s?_(5):"2"===s?_(10):"3"===s?_(15):"4"===s?_(20):"b"===s&&T.push(c(l({},O),{msg:"Fica! Vai ter bolo! 🍰"}))})),document.addEventListener("click",(()=>{console.log("click!"),b?w():g()})),document.addEventListener("dblclick",(()=>{console.log("dblclick!"),b?y():g()})),document.addEventListener("touchstart",(e=>{console.log("touch start!");const s=e.touches[0];console.log("first touch X ",s.clientX," former X ",x),console.log("first touch Y ",s.clientY," former Y ",A),x=s.clientX,A=s.clientY}),!1),document.addEventListener("touchmove",(e=>{if(console.log("touch move!"),x&&A){var s=e.touches[0].clientX,t=e.touches[0].clientY,a=x-s,o=A-t;Math.abs(a)>Math.abs(o)?E(a>0?"seconds":"minutes"):o>0?"minutes"===v?k(!1):P(!1):"minutes"===v?k(!0):P(!0),x=null,A=null}}),!1);setTimeout((()=>{T.push(c(l({},O),{msg:'Para começar ou pausar<br/> Use "Enter", "Barra de espaço" ou "clique/toque"'}))}),420),setTimeout((()=>{T.push(c(l({},O),{duration:5500,msg:"Para editar, <strong>primeiro pause</strong>,<br/>então use as setas no teclado, swipe no celular<br/>ou no teclado os atalhos 1, 2, 3 ou 4"}))}),420+O.duration)})),N((()=>T.pop(0))),e.$$.update=()=>{1536&e.$$.dirty&&t(13,a=60*h+p),3&e.$$.dirty&&t(14,o=60*m+f),4096&e.$$.dirty&&t(15,r=!!b),57348&e.$$.dirty&&t(3,n=X`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${I};
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    transform: ${r&&!$?`scale(1, ${o/a})`:"scale(1,0)"};
    transform-origin: 50% 100%;
    transition: transform 1s, background 1s;
  `),32772&e.$$.dirty&&t(4,i=X`
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    font-weight: 600;
    color: ${"#ffffff"};
    height: 1em;
    font-size: 25.5vw;
    position: absolute;
    left: 50%;
    margin-top: -0.1em;
    @keyframes pink-blink {
        0% {color: white;}
        50% {color: ${"#e22828"};}
      100%{color: white;}
    }
    ${$&&r?"animation: pink-blink 1s steps(5, start) infinite;":""}
  `),34816&e.$$.dirty&&t(5,u=X`
    position: absolute;
    color: ${r||"seconds"!==v?"":"#999999"};
    right: 0.15em;
  `),34816&e.$$.dirty&&t(6,d=X`
    position: absolute;
    color: ${r||"minutes"!==v?"":"#999999"};
    left: 0.15em;
  `)},[m,f,$,n,i,u,d,e=>("0"+e).slice(-2),!1,h,p,v,b,a,o,r,function(s){q(e,s)}]}export default class extends i{constructor(e){super(),u(this,e,R,F,d,{ssr:8})}get ssr(){return this.$$.ctx[8]}}
