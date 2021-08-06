import{S as s,i as t,s as e,k as o,e as a,t as n,H as l,d as c,n as r,c as i,a as h,g as d,b as u,I as m,f,F as v,h as $,G as g,z as y,J as p,K as b}from"../chunks/vendor-30fa7531.js";const{document:k}=b;function E(s){let t,e,y,p,b,E,q,w,x,_,A,I,L,D,S,X,Y,N,P,V=`${s[2]?"-":""}${s[7](s[0])}`,M=s[7](s[1])+"";return{c(){t=o(),e=a("div"),y=a("div"),b=o(),E=a("div"),q=a("div"),w=a("span"),x=a("span"),_=n(V),I=o(),L=a("span"),D=n(":"),S=o(),X=a("span"),Y=n(M),this.h()},l(s){l('[data-svelte="svelte-150qrhb"]',k.head).forEach(c),t=r(s),e=i(s,"DIV",{class:!0});var o=h(e);y=i(o,"DIV",{class:!0}),h(y).forEach(c),b=r(o),E=i(o,"DIV",{class:!0});var a=h(E);q=i(a,"DIV",{class:!0});var n=h(q);w=i(n,"SPAN",{class:!0});var u=h(w);x=i(u,"SPAN",{class:!0});var m=h(x);_=d(m,V),m.forEach(c),I=r(u),L=i(u,"SPAN",{class:!0});var f=h(L);D=d(f,":"),f.forEach(c),S=r(u),X=i(u,"SPAN",{class:!0});var v=h(X);Y=d(v,M),v.forEach(c),u.forEach(c),n.forEach(c),a.forEach(c),o.forEach(c),this.h()},h(){k.title="timer",u(y,"class",p=m(s[3])+" svelte-11qhmyo"),u(x,"class",A=m(s[5])+" svelte-11qhmyo"),u(L,"class","index__text_separator svelte-11qhmyo"),u(X,"class",N=m(s[6])+" svelte-11qhmyo"),u(w,"class",P=m(s[4])+" svelte-11qhmyo"),u(q,"class","index__frontpanel svelte-11qhmyo"),u(E,"class","index__subcontainer svelte-11qhmyo"),u(e,"class","index__container svelte-11qhmyo")},m(s,o){f(s,t,o),f(s,e,o),v(e,y),v(e,b),v(e,E),v(E,q),v(q,w),v(w,x),v(x,_),v(w,I),v(w,L),v(L,D),v(w,S),v(w,X),v(X,Y)},p(s,[t]){8&t&&p!==(p=m(s[3])+" svelte-11qhmyo")&&u(y,"class",p),5&t&&V!==(V=`${s[2]?"-":""}${s[7](s[0])}`)&&$(_,V),32&t&&A!==(A=m(s[5])+" svelte-11qhmyo")&&u(x,"class",A),2&t&&M!==(M=s[7](s[1])+"")&&$(Y,M),64&t&&N!==(N=m(s[6])+" svelte-11qhmyo")&&u(X,"class",N),16&t&&P!==(P=m(s[4])+" svelte-11qhmyo")&&u(w,"class",P)},i:g,o:g,d(s){s&&c(t),s&&c(e)}}}function q(s,t,e){let o,a,n,l,c,r,i;let h=10,d=0,u=10,m=0,f="minutes",v=null,$=!1;const g=()=>{v||(e(12,v=setInterval((()=>{if($)59===d?(e(1,d=0),e(0,h+=1)):e(1,d+=1);else if(0===d){const s=!!v&&0===h;e(1,d=s?0:59),e(0,h=s?0:h-1),e(2,$=s)}else e(1,d-=1)}),1e3)),e(9,u=h),e(10,m=d))},b=()=>{clearInterval(v),e(12,v=null)},k=()=>{clearInterval(v),e(12,v=null),e(2,$=!1),e(0,h=u),e(1,d=m)},E=s=>{e(11,f=s),console.log(`now editing ${f}`)},q=s=>{h<99&&h>0?e(0,h=s?h+1:h-1):h<=0&&s?(e(0,h+=1),e(2,$=!1)):99!==h||s||e(0,h-=1)},w=s=>{d<59&&d>0?e(1,d=s?d+1:d-1):0===d&&s?e(1,d+=1):59!==d||s||e(1,d-=1)},x=s=>{e(0,h=s),e(9,u=s),e(1,d=0),e(10,m=0),e(2,$=!1)};let _=null,A=null;y((async()=>{document.addEventListener("keyup",(s=>{const{key:t}=s;" "===t||"Enter"===t?v?b():g():"ArrowRight"===t?E("seconds"):"ArrowLeft"===t?E("minutes"):"ArrowUp"===t?"minutes"===f?q(!0):w(!0):"ArrowDown"===t?"minutes"===f?q(!1):w(!1):"r"===t||"R"===t?k():"1"===t?x(5):"2"===t?x(10):"3"===t?x(15):"4"===t&&x(20)})),document.addEventListener("click",(()=>{console.log("click!"),v?b():g()})),document.addEventListener("dblclick",(()=>{console.log("dblclick!"),v?k():g()})),document.addEventListener("touchstart",(s=>{console.log("touch start!");const t=s.touches[0];console.log("first touch X ",t.clientX," former X ",_),console.log("first touch Y ",t.clientY," former Y ",A),_=t.clientX,A=t.clientY}),!1),document.addEventListener("touchmove",(s=>{if(console.log("touch move!"),_&&A){var t=s.touches[0].clientX,e=s.touches[0].clientY,o=_-t,a=A-e;Math.abs(o)>Math.abs(a)?E(o>0?"seconds":"minutes"):a>0?"minutes"===f?q(!1):w(!1):"minutes"===f?q(!0):w(!0),_=null,A=null}}),!1)}));const I=Math.random()<.5?"#f28000":"#8ce563";return s.$$.update=()=>{1536&s.$$.dirty&&e(13,o=60*u+m),3&s.$$.dirty&&e(14,a=60*h+d),4096&s.$$.dirty&&e(15,n=!!v),57348&s.$$.dirty&&e(3,l=p`
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
  `),32772&s.$$.dirty&&e(4,c=p`
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
  `),34816&s.$$.dirty&&e(5,r=p`
    position: absolute;
    color: ${n||"seconds"!==f?"":"#999999"};
    right: 0.15em;
  `),34816&s.$$.dirty&&e(6,i=p`
    position: absolute;
    color: ${n||"minutes"!==f?"":"#999999"};
    left: 0.15em;
  `)},[h,d,$,l,c,r,i,s=>("0"+s).slice(-2),!1,u,m,f,v,o,a,n]}export default class extends s{constructor(s){super(),t(this,s,q,E,e,{ssr:8})}get ssr(){return this.$$.ctx[8]}}
