import{S as s,i as t,s as e,k as l,e as o,t as a,H as n,d as r,n as c,c as i,a as h,g as d,b as u,I as m,f,F as v,h as $,G as k,z as g,J as p,K as b}from"../chunks/vendor-30fa7531.js";const{document:E}=b;function y(s){let t,e,g,p,b,y,w,x,_,A,I,L,D,S,X,Y,N,P,V,M=`${s[2]?"-":""}${s[7](s[0])}`,z=s[7](s[1])+"";return{c(){t=l(),e=o("div"),g=o("div"),b=l(),y=o("div"),w=o("div"),x=o("span"),_=o("span"),A=a(M),L=l(),D=o("span"),S=a(":"),X=l(),Y=o("span"),N=a(z),this.h()},l(s){n('[data-svelte="svelte-150qrhb"]',E.head).forEach(r),t=c(s),e=i(s,"DIV",{class:!0});var l=h(e);g=i(l,"DIV",{class:!0}),h(g).forEach(r),b=c(l),y=i(l,"DIV",{class:!0});var o=h(y);w=i(o,"DIV",{class:!0});var a=h(w);x=i(a,"SPAN",{class:!0});var u=h(x);_=i(u,"SPAN",{class:!0});var m=h(_);A=d(m,M),m.forEach(r),L=c(u),D=i(u,"SPAN",{class:!0});var f=h(D);S=d(f,":"),f.forEach(r),X=c(u),Y=i(u,"SPAN",{class:!0});var v=h(Y);N=d(v,z),v.forEach(r),u.forEach(r),a.forEach(r),o.forEach(r),l.forEach(r),this.h()},h(){E.title="timer",u(g,"class",p=m(s[3])+" svelte-1hml6rk"),u(_,"class",I=m(s[5])+" svelte-1hml6rk"),u(D,"class","index__text_separator svelte-1hml6rk"),u(Y,"class",P=m(s[6])+" svelte-1hml6rk"),u(x,"class",V=m(s[4])+" svelte-1hml6rk"),u(w,"class","index__frontpanel svelte-1hml6rk"),u(y,"class","index__subcontainer svelte-1hml6rk"),u(e,"class","index__container svelte-1hml6rk")},m(s,l){f(s,t,l),f(s,e,l),v(e,g),v(e,b),v(e,y),v(y,w),v(w,x),v(x,_),v(_,A),v(x,L),v(x,D),v(D,S),v(x,X),v(x,Y),v(Y,N)},p(s,[t]){8&t&&p!==(p=m(s[3])+" svelte-1hml6rk")&&u(g,"class",p),5&t&&M!==(M=`${s[2]?"-":""}${s[7](s[0])}`)&&$(A,M),32&t&&I!==(I=m(s[5])+" svelte-1hml6rk")&&u(_,"class",I),2&t&&z!==(z=s[7](s[1])+"")&&$(N,z),64&t&&P!==(P=m(s[6])+" svelte-1hml6rk")&&u(Y,"class",P),16&t&&V!==(V=m(s[4])+" svelte-1hml6rk")&&u(x,"class",V)},i:k,o:k,d(s){s&&r(t),s&&r(e)}}}function w(s,t,e){let l,o,a,n,r,c,i;let h=10,d=0,u=10,m=0,f="minutes",v=null,$=!1;const k=()=>{v||(e(12,v=setInterval((()=>{if($)59===d?(e(1,d=0),e(0,h+=1)):e(1,d+=1);else if(0===d){const s=!!v&&0===h;e(1,d=s?0:59),e(0,h=s?0:h-1),e(2,$=s)}else e(1,d-=1)}),1e3)),e(9,u=h),e(10,m=d))},b=()=>{clearInterval(v),e(12,v=null)},E=()=>{clearInterval(v),e(12,v=null),e(2,$=!1),e(0,h=u),e(1,d=m)},y=s=>{e(11,f=s),console.log(`now editing ${f}`)},w=s=>{h<99&&h>0?e(0,h=s?h+1:h-1):h<=0&&s?(e(0,h+=1),e(2,$=!1)):99!==h||s||e(0,h-=1)},x=s=>{d<59&&d>0?e(1,d=s?d+1:d-1):0===d&&s?e(1,d+=1):59!==d||s||e(1,d-=1)},_=s=>{e(0,h=s),e(9,u=s),e(1,d=0),e(10,m=0),e(2,$=!1)};let A=null,I=null;g((async()=>{document.addEventListener("keyup",(s=>{const{key:t}=s;" "===t||"Enter"===t?v?b():k():"ArrowRight"===t?y("seconds"):"ArrowLeft"===t?y("minutes"):"ArrowUp"===t?"minutes"===f?w(!0):x(!0):"ArrowDown"===t?"minutes"===f?w(!1):x(!1):"r"===t||"R"===t?E():"1"===t?_(5):"2"===t?_(10):"3"===t?_(15):"4"===t&&_(20)})),document.addEventListener("click",(()=>{console.log("click!"),v?b():k()})),document.addEventListener("dblclick",(()=>{console.log("dblclick!"),v?E():k()})),document.addEventListener("touchstart",(s=>{console.log("touch start!");const t=s.touches[0];console.log("first touch X ",t.clientX," former X ",A),console.log("first touch Y ",t.clientY," former Y ",I),A=t.clientX,I=t.clientY}),!1),document.addEventListener("touchmove",(s=>{if(console.log("touch move!"),A&&I){var t=s.touches[0].clientX,e=s.touches[0].clientY,l=A-t,o=I-e;Math.abs(l)>Math.abs(o)?y(l>0?"seconds":"minutes"):o>0?"minutes"===f?w(!1):x(!1):"minutes"===f?w(!0):x(!0),A=null,I=null}}),!1)}));const L=Math.random()<.5?"#f28000":"#8ce563";return s.$$.update=()=>{1536&s.$$.dirty&&e(13,l=60*u+m),3&s.$$.dirty&&e(14,o=60*h+d),4096&s.$$.dirty&&e(15,a=!!v),57348&s.$$.dirty&&e(3,n=p`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${L};
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    transform: ${a&&!$?`scale(1, ${o/l})`:"scale(1,0)"};
    transform-origin: 50% 100%;
    transition: transform 1s, background 1s;
  `),32772&s.$$.dirty&&e(4,r=p`
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
    ${$&&a?"animation: pink-blink 1s steps(5, start) infinite;":""}
  `),34816&s.$$.dirty&&e(5,c=p`
    position: absolute;
    color: ${a||"seconds"!==f?"":"#999999"};
    right: 0.15em;
  `),34816&s.$$.dirty&&e(6,i=p`
    position: absolute;
    color: ${a||"minutes"!==f?"":"#999999"};
    left: 0.15em;
  `)},[h,d,$,n,r,c,i,s=>("0"+s).slice(-2),!1,u,m,f,v,l,o,a]}export default class extends s{constructor(s){super(),t(this,s,w,y,e,{ssr:8})}get ssr(){return this.$$.ctx[8]}}
