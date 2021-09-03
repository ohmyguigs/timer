import{S as s,i as e,s as t,e as o,k as a,t as n,H as l,c,d as r,n as i,a as d,g as h,b as u,I as m,F as f,f as v,h as $,G as p,z as g,J as y,K as E}from"../chunks/vendor-30fa7531.js";const{document:k}=E;function b(s){let e,t,g,y,E,b,q,w,x,A,_,I,L,D,S,X,Y,M,N,P,V=`${s[2]?"-":""}${s[7](s[0])}`,j=s[7](s[1])+"";return{c(){e=o("meta"),t=a(),g=o("div"),y=o("div"),b=a(),q=o("div"),w=o("div"),x=o("span"),A=o("span"),_=n(V),L=a(),D=o("span"),S=n(":"),X=a(),Y=o("span"),M=n(j),this.h()},l(s){const o=l('[data-svelte="svelte-c9e3kw"]',k.head);e=c(o,"META",{name:!0,content:!0}),o.forEach(r),t=i(s),g=c(s,"DIV",{class:!0});var a=d(g);y=c(a,"DIV",{class:!0}),d(y).forEach(r),b=i(a),q=c(a,"DIV",{class:!0});var n=d(q);w=c(n,"DIV",{class:!0});var u=d(w);x=c(u,"SPAN",{class:!0});var m=d(x);A=c(m,"SPAN",{class:!0});var f=d(A);_=h(f,V),f.forEach(r),L=i(m),D=c(m,"SPAN",{class:!0});var v=d(D);S=h(v,":"),v.forEach(r),X=i(m),Y=c(m,"SPAN",{class:!0});var $=d(Y);M=h($,j),$.forEach(r),m.forEach(r),u.forEach(r),n.forEach(r),a.forEach(r),this.h()},h(){k.title="timer",u(e,"name","description"),u(e,"content","Este é um contador de minutos visual usado para ajudar em reuniões."),u(y,"class",E=m(s[3])+" svelte-11qhmyo"),u(A,"class",I=m(s[5])+" svelte-11qhmyo"),u(D,"class","index__text_separator svelte-11qhmyo"),u(Y,"class",N=m(s[6])+" svelte-11qhmyo"),u(x,"class",P=m(s[4])+" svelte-11qhmyo"),u(w,"class","index__frontpanel svelte-11qhmyo"),u(q,"class","index__subcontainer svelte-11qhmyo"),u(g,"class","index__container svelte-11qhmyo")},m(s,o){f(k.head,e),v(s,t,o),v(s,g,o),f(g,y),f(g,b),f(g,q),f(q,w),f(w,x),f(x,A),f(A,_),f(x,L),f(x,D),f(D,S),f(x,X),f(x,Y),f(Y,M)},p(s,[e]){8&e&&E!==(E=m(s[3])+" svelte-11qhmyo")&&u(y,"class",E),5&e&&V!==(V=`${s[2]?"-":""}${s[7](s[0])}`)&&$(_,V),32&e&&I!==(I=m(s[5])+" svelte-11qhmyo")&&u(A,"class",I),2&e&&j!==(j=s[7](s[1])+"")&&$(M,j),64&e&&N!==(N=m(s[6])+" svelte-11qhmyo")&&u(Y,"class",N),16&e&&P!==(P=m(s[4])+" svelte-11qhmyo")&&u(x,"class",P)},i:p,o:p,d(s){r(e),s&&r(t),s&&r(g)}}}function q(s,e,t){let o,a,n,l,c,r,i;let d=10,h=0,u=10,m=0,f="minutes",v=null,$=!1;const p=()=>{v||(t(12,v=setInterval((()=>{if($)59===h?(t(1,h=0),t(0,d+=1)):t(1,h+=1);else if(0===h){const s=!!v&&0===d;t(1,h=s?0:59),t(0,d=s?0:d-1),t(2,$=s)}else t(1,h-=1)}),1e3)),t(9,u=d),t(10,m=h))},E=()=>{clearInterval(v),t(12,v=null)},k=()=>{clearInterval(v),t(12,v=null),t(2,$=!1),t(0,d=u),t(1,h=m)},b=s=>{t(11,f=s),console.log(`now editing ${f}`)},q=s=>{d<99&&d>0?t(0,d=s?d+1:d-1):d<=0&&s?(t(0,d+=1),t(2,$=!1)):99!==d||s||t(0,d-=1)},w=s=>{h<59&&h>0?t(1,h=s?h+1:h-1):0===h&&s?t(1,h+=1):59!==h||s||t(1,h-=1)},x=s=>{t(0,d=s),t(9,u=s),t(1,h=0),t(10,m=0),t(2,$=!1)};let A=null,_=null;g((async()=>{document.addEventListener("keyup",(s=>{const{key:e}=s;" "===e||"Enter"===e?v?E():p():"ArrowRight"===e?b("seconds"):"ArrowLeft"===e?b("minutes"):"ArrowUp"===e?"minutes"===f?q(!0):w(!0):"ArrowDown"===e?"minutes"===f?q(!1):w(!1):"r"===e||"R"===e?k():"1"===e?x(5):"2"===e?x(10):"3"===e?x(15):"4"===e&&x(20)})),document.addEventListener("click",(()=>{console.log("click!"),v?E():p()})),document.addEventListener("dblclick",(()=>{console.log("dblclick!"),v?k():p()})),document.addEventListener("touchstart",(s=>{console.log("touch start!");const e=s.touches[0];console.log("first touch X ",e.clientX," former X ",A),console.log("first touch Y ",e.clientY," former Y ",_),A=e.clientX,_=e.clientY}),!1),document.addEventListener("touchmove",(s=>{if(console.log("touch move!"),A&&_){var e=s.touches[0].clientX,t=s.touches[0].clientY,o=A-e,a=_-t;Math.abs(o)>Math.abs(a)?b(o>0?"seconds":"minutes"):a>0?"minutes"===f?q(!1):w(!1):"minutes"===f?q(!0):w(!0),A=null,_=null}}),!1)}));const I=Math.random()<.5?"#f28000":"#8ce563";return s.$$.update=()=>{1536&s.$$.dirty&&t(13,o=60*u+m),3&s.$$.dirty&&t(14,a=60*d+h),4096&s.$$.dirty&&t(15,n=!!v),57348&s.$$.dirty&&t(3,l=y`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${I};
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    transform: ${n&&!$?`scale(1, ${a/o})`:"scale(1,0)"};
    transform-origin: 50% 100%;
    transition: transform 1s, background 1s;
  `),32772&s.$$.dirty&&t(4,c=y`
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
    ${$&&n?"animation: pink-blink 1s steps(5, start) infinite;":""}
  `),34816&s.$$.dirty&&t(5,r=y`
    position: absolute;
    color: ${n||"seconds"!==f?"":"#999999"};
    right: 0.15em;
  `),34816&s.$$.dirty&&t(6,i=y`
    position: absolute;
    color: ${n||"minutes"!==f?"":"#999999"};
    left: 0.15em;
  `)},[d,h,$,l,c,r,i,s=>("0"+s).slice(-2),!1,u,m,f,v,o,a,n]}export default class extends s{constructor(s){super(),e(this,s,q,b,t,{ssr:8})}get ssr(){return this.$$.ctx[8]}}
