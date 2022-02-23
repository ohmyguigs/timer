var e=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,l=(e,s)=>{for(var t in s||(s={}))o.call(s,t)&&n(e,t,s[t]);if(a)for(var t of a(s))r.call(s,t)&&n(e,t,s[t]);return e},c=(e,a)=>s(e,t(a));import{S as i,i as u,s as d,H as f,e as m,k as h,t as p,j as v,I as b,c as $,d as g,n as w,a as y,g as E,m as k,b as P,J as _,F as x,f as I,o as O,K as j,L as A,h as D,v as L,r as S,w as V,z as M,M as N,N as X,O as Y,P as T,Q as q}from"../chunks/vendor-49ac5572.js";const{document:z}=Y;function R(e){let s,t,a,o,r,n,l,c,i,u,d,M,N,X,Y,T,q,R,U,B,F,H,J,K,Q,C,G=`${e[2]?"-":""}${e[7](e[0])}`,W=e[7](e[1])+"";return J=new f({}),{c(){s=m("meta"),t=h(),a=m("div"),o=m("div"),n=h(),l=m("div"),c=m("div"),i=m("span"),u=m("span"),d=p(G),N=h(),X=m("span"),Y=p(":"),T=h(),q=m("span"),R=p(W),F=h(),H=m("div"),v(J.$$.fragment),this.h()},l(e){const r=b('[data-svelte="svelte-c9e3kw"]',z.head);s=$(r,"META",{name:!0,content:!0}),r.forEach(g),t=w(e),a=$(e,"DIV",{class:!0});var f=y(a);o=$(f,"DIV",{class:!0}),y(o).forEach(g),n=w(f),l=$(f,"DIV",{class:!0});var m=y(l);c=$(m,"DIV",{class:!0});var h=y(c);i=$(h,"SPAN",{class:!0});var p=y(i);u=$(p,"SPAN",{class:!0});var v=y(u);d=E(v,G),v.forEach(g),N=w(p),X=$(p,"SPAN",{class:!0});var P=y(X);Y=E(P,":"),P.forEach(g),T=w(p),q=$(p,"SPAN",{class:!0});var _=y(q);R=E(_,W),_.forEach(g),p.forEach(g),h.forEach(g),m.forEach(g),F=w(f),H=$(f,"DIV",{class:!0});var x=y(H);k(J.$$.fragment,x),x.forEach(g),f.forEach(g),this.h()},h(){z.title="timer",P(s,"name","description"),P(s,"content","Este é um contador de minutos visual usado para ajudar em reuniões."),P(o,"class",r=_(e[3])+" svelte-wb2309"),P(u,"class",M=_(e[5])+" svelte-wb2309"),P(X,"class","index__text_separator svelte-wb2309"),P(q,"class",U=_(e[6])+" svelte-wb2309"),P(i,"class",B=_(e[4])+" svelte-wb2309"),P(c,"class","index__frontpanel svelte-wb2309"),P(l,"class","index__subcontainer svelte-wb2309"),P(H,"class","toast__wrapper svelte-wb2309"),P(a,"class","index__container svelte-wb2309")},m(r,f){x(z.head,s),I(r,t,f),I(r,a,f),x(a,o),x(a,n),x(a,l),x(l,c),x(c,i),x(i,u),x(u,d),x(i,N),x(i,X),x(X,Y),x(i,T),x(i,q),x(q,R),x(a,F),x(a,H),O(J,H,null),K=!0,Q||(C=j(H,"click",A(e[16])),Q=!0)},p(e,[s]){(!K||8&s&&r!==(r=_(e[3])+" svelte-wb2309"))&&P(o,"class",r),(!K||5&s)&&G!==(G=`${e[2]?"-":""}${e[7](e[0])}`)&&D(d,G),(!K||32&s&&M!==(M=_(e[5])+" svelte-wb2309"))&&P(u,"class",M),(!K||2&s)&&W!==(W=e[7](e[1])+"")&&D(R,W),(!K||64&s&&U!==(U=_(e[6])+" svelte-wb2309"))&&P(q,"class",U),(!K||16&s&&B!==(B=_(e[4])+" svelte-wb2309"))&&P(i,"class",B)},i(e){K||(L(J.$$.fragment,e),K=!0)},o(e){S(J.$$.fragment,e),K=!1},d(e){g(s),e&&g(t),e&&g(a),V(J),Q=!1,C()}}}function U(e,s,t){let a,o,r,n,i,u,d;let f=10,m=0,h=10,p=0,v="minutes",b=null,$=!1;const g=()=>{b||(t(12,b=setInterval((()=>{if($)59===m?(t(1,m=0),t(0,f+=1)):t(1,m+=1);else if(0===m){const e=!!b&&0===f;t(1,m=e?0:59),t(0,f=e?0:f-1),t(2,$=e)}else t(1,m-=1)}),1e3)),t(9,h=f),t(10,p=m))},w=()=>{clearInterval(b),t(12,b=null)},y=()=>{clearInterval(b),t(12,b=null),t(2,$=!1),t(0,f=h),t(1,m=p)},E=e=>{t(11,v=e),console.log(`now editing ${v}`)},k=e=>{f<99&&f>0?t(0,f=e?f+1:f-1):f<=0&&e?(t(0,f+=1),t(2,$=!1)):99!==f||e||t(0,f-=1)},P=e=>{m<59&&m>0?t(1,m=e?m+1:m-1):0===m&&e?t(1,m+=1):59!==m||e||t(1,m-=1)},_=e=>{t(0,f=e),t(9,h=e),t(1,m=0),t(10,p=0),t(2,$=!1)};let x=null,I=null;const O=Math.random()<.5?"#f28000":"#8ce563",j={duration:4200,reversed:!0,intro:{y:42}};return M((async()=>{document.addEventListener("keyup",(e=>{const{key:s}=e;" "===s||"Enter"===s?b?w():g():"ArrowRight"===s?E("seconds"):"ArrowLeft"===s?E("minutes"):"ArrowUp"===s?"minutes"===v?k(!0):P(!0):"ArrowDown"===s?"minutes"===v?k(!1):P(!1):"r"===s||"R"===s?y():"1"===s?_(5):"2"===s?_(10):"3"===s?_(15):"4"===s?_(20):"b"===s&&T.push(c(l({},j),{msg:"Vai ter bolo! 🍰"}))})),document.addEventListener("click",(()=>{console.log("click!"),b?w():g()})),document.addEventListener("dblclick",(()=>{console.log("dblclick!"),b?y():g()})),document.addEventListener("touchstart",(e=>{console.log("touch start!");const s=e.touches[0];console.log("first touch X ",s.clientX," former X ",x),console.log("first touch Y ",s.clientY," former Y ",I),x=s.clientX,I=s.clientY}),!1),document.addEventListener("touchmove",(e=>{if(console.log("touch move!"),x&&I){var s=e.touches[0].clientX,t=e.touches[0].clientY,a=x-s,o=I-t;Math.abs(a)>Math.abs(o)?E(a>0?"seconds":"minutes"):o>0?"minutes"===v?k(!1):P(!1):"minutes"===v?k(!0):P(!0),x=null,I=null}}),!1);setTimeout((()=>{T.push(c(l({},j),{msg:'Para começar ou pausar<br/> Use "Enter", "Barra de espaço" ou "clique/toque"'}))}),420),setTimeout((()=>{T.push(c(l({},j),{duration:5500,msg:"Para editar, <strong>primeiro pause</strong>,<br/>então use as setas no teclado, swipe no celular<br/>ou no teclado os atalhos 1, 2, 3 ou 4"}))}),420+j.duration)})),N((()=>T.pop(0))),e.$$.update=()=>{1536&e.$$.dirty&&t(13,a=60*h+p),3&e.$$.dirty&&t(14,o=60*f+m),4096&e.$$.dirty&&t(15,r=!!b),57348&e.$$.dirty&&t(3,n=X`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${O};
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
  `)},[f,m,$,n,i,u,d,e=>("0"+e).slice(-2),!1,h,p,v,b,a,o,r,function(s){q(e,s)}]}export default class extends i{constructor(e){super(),u(this,e,U,R,d,{ssr:8})}get ssr(){return this.$$.ctx[8]}}
