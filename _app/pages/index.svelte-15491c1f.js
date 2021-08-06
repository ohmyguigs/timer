import{S as s,i as t,s as e,k as a,e as o,t as n,H as l,d as c,n as r,c as i,a as d,g as u,b as m,I as f,f as h,F as v,h as $,G as g,z as p,J as w,K as b}from"../chunks/vendor-30fa7531.js";const{document:k}=b;function E(s){let t,e,p,w,b,E,y,x,_,A,I,L,D,S,X,Y,N,P,V,M=`${s[2]?"-":""}${s[7](s[0])}`,z=s[7](s[1])+"";return{c(){t=a(),e=o("div"),p=o("div"),b=a(),E=o("div"),y=o("div"),x=o("span"),_=o("span"),A=n(M),L=a(),D=o("span"),S=n(":"),X=a(),Y=o("span"),N=n(z),this.h()},l(s){l('[data-svelte="svelte-150qrhb"]',k.head).forEach(c),t=r(s),e=i(s,"DIV",{class:!0});var a=d(e);p=i(a,"DIV",{class:!0}),d(p).forEach(c),b=r(a),E=i(a,"DIV",{class:!0});var o=d(E);y=i(o,"DIV",{class:!0});var n=d(y);x=i(n,"SPAN",{class:!0});var m=d(x);_=i(m,"SPAN",{class:!0});var f=d(_);A=u(f,M),f.forEach(c),L=r(m),D=i(m,"SPAN",{class:!0});var h=d(D);S=u(h,":"),h.forEach(c),X=r(m),Y=i(m,"SPAN",{class:!0});var v=d(Y);N=u(v,z),v.forEach(c),m.forEach(c),n.forEach(c),o.forEach(c),a.forEach(c),this.h()},h(){k.title="timer",m(p,"class",w=f(s[3])+" svelte-12a33mw"),m(_,"class",I=f(s[5])+" svelte-12a33mw"),m(D,"class","index__text_separator svelte-12a33mw"),m(Y,"class",P=f(s[6])+" svelte-12a33mw"),m(x,"class",V=f(s[4])+" svelte-12a33mw"),m(y,"class","index__frontpanel svelte-12a33mw"),m(E,"class","index__subcontainer svelte-12a33mw"),m(e,"class","index__container svelte-12a33mw")},m(s,a){h(s,t,a),h(s,e,a),v(e,p),v(e,b),v(e,E),v(E,y),v(y,x),v(x,_),v(_,A),v(x,L),v(x,D),v(D,S),v(x,X),v(x,Y),v(Y,N)},p(s,[t]){8&t&&w!==(w=f(s[3])+" svelte-12a33mw")&&m(p,"class",w),5&t&&M!==(M=`${s[2]?"-":""}${s[7](s[0])}`)&&$(A,M),32&t&&I!==(I=f(s[5])+" svelte-12a33mw")&&m(_,"class",I),2&t&&z!==(z=s[7](s[1])+"")&&$(N,z),64&t&&P!==(P=f(s[6])+" svelte-12a33mw")&&m(Y,"class",P),16&t&&V!==(V=f(s[4])+" svelte-12a33mw")&&m(x,"class",V)},i:g,o:g,d(s){s&&c(t),s&&c(e)}}}function y(s,t,e){let a,o,n,l,c,r,i;let d=10,u=0,m=10,f=0,h="minutes",v=null,$=!1;const g=()=>{v||(e(12,v=setInterval((()=>{if($)59===u?(e(1,u=0),e(0,d+=1)):e(1,u+=1);else if(0===u){const s=!!v&&0===d;e(1,u=s?0:59),e(0,d=s?0:d-1),e(2,$=s)}else e(1,u-=1)}),1e3)),e(9,m=d),e(10,f=u))},b=()=>{clearInterval(v),e(12,v=null)},k=()=>{clearInterval(v),e(12,v=null),e(2,$=!1),e(0,d=m),e(1,u=f)},E=s=>{e(11,h=s),console.log(`now editing ${h}`)},y=s=>{d<99&&d>0?e(0,d=s?d+1:d-1):d<=0&&s?(e(0,d+=1),e(2,$=!1)):99!==d||s||e(0,d-=1)},x=s=>{u<59&&u>0?e(1,u=s?u+1:u-1):0===u&&s?e(1,u+=1):59!==u||s||e(1,u-=1)},_=s=>{e(0,d=s),e(9,m=s),e(1,u=0),e(10,f=0),e(2,$=!1)};let A=null,I=null;p((async()=>{document.addEventListener("keyup",(s=>{const{key:t}=s;" "===t||"Enter"===t?v?b():g():"ArrowRight"===t?E("seconds"):"ArrowLeft"===t?E("minutes"):"ArrowUp"===t?"minutes"===h?y(!0):x(!0):"ArrowDown"===t?"minutes"===h?y(!1):x(!1):"r"===t||"R"===t?k():"1"===t?_(5):"2"===t?_(10):"3"===t?_(15):"4"===t&&_(20)})),document.addEventListener("click",(()=>{console.log("click!"),v?b():g()})),document.addEventListener("dblclick",(()=>{console.log("dblclick!"),v?k():g()})),document.addEventListener("touchstart",(s=>{console.log("touch start!");const t=s.touches[0];console.log("first touch X ",t.clientX," former X ",A),console.log("first touch Y ",t.clientY," former Y ",I),A=t.clientX,I=t.clientY}),!1),document.addEventListener("touchmove",(s=>{if(console.log("touch move!"),A&&I){var t=s.touches[0].clientX,e=s.touches[0].clientY,a=A-t,o=I-e;Math.abs(a)>Math.abs(o)?E(a>0?"seconds":"minutes"):o>0?"minutes"===h?y(!1):x(!1):"minutes"===h?y(!0):x(!0),A=null,I=null}}),!1)}));const L=Math.random()<.5?"#f28000":"#8ce563";return s.$$.update=()=>{1536&s.$$.dirty&&e(13,a=60*m+f),3&s.$$.dirty&&e(14,o=60*d+u),4096&s.$$.dirty&&e(15,n=!!v),57348&s.$$.dirty&&e(3,l=w`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${L};
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    transform: ${n&&!$?`scale(1, ${o/a})`:"scale(1,0)"};
    transform-origin: 50% 100%;
    transition: transform 1s, background 1s;
  `),32772&s.$$.dirty&&e(4,c=w`
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
  `),34816&s.$$.dirty&&e(5,r=w`
    position: absolute;
    color: ${n||"seconds"!==h?"":"#999999"};
    right: 0.15em;
  `),34816&s.$$.dirty&&e(6,i=w`
    position: absolute;
    color: ${n||"minutes"!==h?"":"#999999"};
    left: 0.15em;
  `)},[d,u,$,l,c,r,i,s=>("0"+s).slice(-2),!1,m,f,h,v,a,o,n]}export default class extends s{constructor(s){super(),t(this,s,y,E,e,{ssr:8})}get ssr(){return this.$$.ctx[8]}}
