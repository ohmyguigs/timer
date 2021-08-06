import{S as s,i as t,s as e,k as o,e as a,t as n,H as l,d as c,n as r,c as i,a as d,g as u,b as f,I as h,f as v,F as m,h as $,G as g,z as p,J as w,K as b}from"../chunks/vendor-30fa7531.js";const{document:k}=b;function E(s){let t,e,p,w,b,E,z,y,x,_,A,I,L,D,S,X,Y,N,P,V=`${s[2]?"-":""}${s[7](s[0])}`,M=s[7](s[1])+"";return{c(){t=o(),e=a("div"),p=a("div"),b=o(),E=a("div"),z=a("div"),y=a("span"),x=a("span"),_=n(V),I=o(),L=a("span"),D=n(":"),S=o(),X=a("span"),Y=n(M),this.h()},l(s){l('[data-svelte="svelte-150qrhb"]',k.head).forEach(c),t=r(s),e=i(s,"DIV",{class:!0});var o=d(e);p=i(o,"DIV",{class:!0}),d(p).forEach(c),b=r(o),E=i(o,"DIV",{class:!0});var a=d(E);z=i(a,"DIV",{class:!0});var n=d(z);y=i(n,"SPAN",{class:!0});var f=d(y);x=i(f,"SPAN",{class:!0});var h=d(x);_=u(h,V),h.forEach(c),I=r(f),L=i(f,"SPAN",{class:!0});var v=d(L);D=u(v,":"),v.forEach(c),S=r(f),X=i(f,"SPAN",{class:!0});var m=d(X);Y=u(m,M),m.forEach(c),f.forEach(c),n.forEach(c),a.forEach(c),o.forEach(c),this.h()},h(){k.title="timer",f(p,"class",w=h(s[3])+" svelte-wsosz3"),f(x,"class",A=h(s[5])+" svelte-wsosz3"),f(L,"class","index__text_separator svelte-wsosz3"),f(X,"class",N=h(s[6])+" svelte-wsosz3"),f(y,"class",P=h(s[4])+" svelte-wsosz3"),f(z,"class","index__frontpanel svelte-wsosz3"),f(E,"class","index__subcontainer svelte-wsosz3"),f(e,"class","index__container svelte-wsosz3")},m(s,o){v(s,t,o),v(s,e,o),m(e,p),m(e,b),m(e,E),m(E,z),m(z,y),m(y,x),m(x,_),m(y,I),m(y,L),m(L,D),m(y,S),m(y,X),m(X,Y)},p(s,[t]){8&t&&w!==(w=h(s[3])+" svelte-wsosz3")&&f(p,"class",w),5&t&&V!==(V=`${s[2]?"-":""}${s[7](s[0])}`)&&$(_,V),32&t&&A!==(A=h(s[5])+" svelte-wsosz3")&&f(x,"class",A),2&t&&M!==(M=s[7](s[1])+"")&&$(Y,M),64&t&&N!==(N=h(s[6])+" svelte-wsosz3")&&f(X,"class",N),16&t&&P!==(P=h(s[4])+" svelte-wsosz3")&&f(y,"class",P)},i:g,o:g,d(s){s&&c(t),s&&c(e)}}}function z(s,t,e){let o,a,n,l,c,r,i;let d=10,u=0,f=10,h=0,v="minutes",m=null,$=!1;const g=()=>{m||(e(12,m=setInterval((()=>{if($)59===u?(e(1,u=0),e(0,d+=1)):e(1,u+=1);else if(0===u){const s=!!m&&0===d;e(1,u=s?0:59),e(0,d=s?0:d-1),e(2,$=s)}else e(1,u-=1)}),1e3)),e(9,f=d),e(10,h=u))},b=()=>{clearInterval(m),e(12,m=null)},k=()=>{clearInterval(m),e(12,m=null),e(2,$=!1),e(0,d=f),e(1,u=h)},E=s=>{e(11,v=s),console.log(`now editing ${v}`)},z=s=>{d<99&&d>0?e(0,d=s?d+1:d-1):d<=0&&s?(e(0,d+=1),e(2,$=!1)):99!==d||s||e(0,d-=1)},y=s=>{u<59&&u>0?e(1,u=s?u+1:u-1):0===u&&s?e(1,u+=1):59!==u||s||e(1,u-=1)},x=s=>{e(0,d=s),e(9,f=s),e(1,u=0),e(10,h=0),e(2,$=!1)};let _=null,A=null;p((async()=>{document.addEventListener("keyup",(s=>{const{key:t}=s;" "===t||"Enter"===t?m?b():g():"ArrowRight"===t?E("seconds"):"ArrowLeft"===t?E("minutes"):"ArrowUp"===t?"minutes"===v?z(!0):y(!0):"ArrowDown"===t?"minutes"===v?z(!1):y(!1):"r"===t||"R"===t?k():"1"===t?x(5):"2"===t?x(10):"3"===t?x(15):"4"===t&&x(20)})),document.addEventListener("click",(()=>{console.log("click!"),m?b():g()})),document.addEventListener("dblclick",(()=>{console.log("dblclick!"),m?k():g()})),document.addEventListener("touchstart",(s=>{console.log("touch start!");const t=s.touches[0];console.log("first touch X ",t.clientX," former X ",_),console.log("first touch Y ",t.clientY," former Y ",A),_=t.clientX,A=t.clientY}),!1),document.addEventListener("touchmove",(s=>{if(console.log("touch move!"),_&&A){var t=s.touches[0].clientX,e=s.touches[0].clientY,o=_-t,a=A-e;Math.abs(o)>Math.abs(a)?E(o>0?"seconds":"minutes"):a>0?"minutes"===v?z(!1):y(!1):"minutes"===v?z(!0):y(!0),_=null,A=null}}),!1)}));const I=Math.random()<.5?"#f28000":"#8ce563";return s.$$.update=()=>{1536&s.$$.dirty&&e(13,o=60*f+h),3&s.$$.dirty&&e(14,a=60*d+u),4096&s.$$.dirty&&e(15,n=!!m),57348&s.$$.dirty&&e(3,l=w`
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
    color: ${n||"seconds"!==v?"":"#999999"};
    right: 0.15em;
  `),34816&s.$$.dirty&&e(6,i=w`
    position: absolute;
    color: ${n||"minutes"!==v?"":"#999999"};
    left: 0.15em;
  `)},[d,u,$,l,c,r,i,s=>("0"+s).slice(-2),!1,f,h,v,m,o,a,n]}export default class extends s{constructor(s){super(),t(this,s,z,E,e,{ssr:8})}get ssr(){return this.$$.ctx[8]}}
