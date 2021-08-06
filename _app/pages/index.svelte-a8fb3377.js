import{S as s,i as t,s as e,k as a,e as n,t as i,H as l,d as r,n as o,c,a as d,g as u,b as f,I as h,f as v,F as m,h as $,G as z,z as p,J as g,K as E}from"../chunks/vendor-30fa7531.js";const{document:b}=E;function j(s){let t,e,p,g,E,j,k,y,w,x,_,A,I,D,L,S,N,P,V,M=`${s[2]?"-":""}${s[7](s[0])}`,R=s[7](s[1])+"";return{c(){t=a(),e=n("div"),p=n("div"),E=a(),j=n("div"),k=n("div"),y=n("span"),w=n("span"),x=i(M),A=a(),I=n("span"),D=i(":"),L=a(),S=n("span"),N=i(R),this.h()},l(s){l('[data-svelte="svelte-150qrhb"]',b.head).forEach(r),t=o(s),e=c(s,"DIV",{class:!0});var a=d(e);p=c(a,"DIV",{class:!0}),d(p).forEach(r),E=o(a),j=c(a,"DIV",{class:!0});var n=d(j);k=c(n,"DIV",{class:!0});var i=d(k);y=c(i,"SPAN",{class:!0});var f=d(y);w=c(f,"SPAN",{class:!0});var h=d(w);x=u(h,M),h.forEach(r),A=o(f),I=c(f,"SPAN",{class:!0});var v=d(I);D=u(v,":"),v.forEach(r),L=o(f),S=c(f,"SPAN",{class:!0});var m=d(S);N=u(m,R),m.forEach(r),f.forEach(r),i.forEach(r),n.forEach(r),a.forEach(r),this.h()},h(){b.title="timer",f(p,"class",g=h(s[3])+" svelte-7z5izj"),f(w,"class",_=h(s[5])+" svelte-7z5izj"),f(I,"class","index__text_separator svelte-7z5izj"),f(S,"class",P=h(s[6])+" svelte-7z5izj"),f(y,"class",V=h(s[4])+" svelte-7z5izj"),f(k,"class","index__frontpanel svelte-7z5izj"),f(j,"class","index__subcontainer svelte-7z5izj"),f(e,"class","index__container svelte-7z5izj")},m(s,a){v(s,t,a),v(s,e,a),m(e,p),m(e,E),m(e,j),m(j,k),m(k,y),m(y,w),m(w,x),m(y,A),m(y,I),m(I,D),m(y,L),m(y,S),m(S,N)},p(s,[t]){8&t&&g!==(g=h(s[3])+" svelte-7z5izj")&&f(p,"class",g),5&t&&M!==(M=`${s[2]?"-":""}${s[7](s[0])}`)&&$(x,M),32&t&&_!==(_=h(s[5])+" svelte-7z5izj")&&f(w,"class",_),2&t&&R!==(R=s[7](s[1])+"")&&$(N,R),64&t&&P!==(P=h(s[6])+" svelte-7z5izj")&&f(S,"class",P),16&t&&V!==(V=h(s[4])+" svelte-7z5izj")&&f(y,"class",V)},i:z,o:z,d(s){s&&r(t),s&&r(e)}}}function k(s,t,e){let a,n,i,l,r,o,c;let d=10,u=0,f=10,h=0,v="minutes",m=null,$=!1;const z=()=>{m||(e(12,m=setInterval((()=>{if($)59===u?(e(1,u=0),e(0,d+=1)):e(1,u+=1);else if(0===u){const s=!!m&&0===d;e(1,u=s?0:59),e(0,d=s?0:d-1),e(2,$=s)}else e(1,u-=1)}),1e3)),e(9,f=d),e(10,h=u))},E=()=>{clearInterval(m),e(12,m=null)},b=s=>{e(11,v=s),console.log(`now editing ${v}`)},j=s=>{d<99&&d>0?e(0,d=s?d+1:d-1):d<=0&&s?(e(0,d+=1),e(2,$=!1)):99!==d||s||e(0,d-=1)},k=s=>{u<59&&u>0?e(1,u=s?u+1:u-1):0===u&&s?e(1,u+=1):59!==u||s||e(1,u-=1)},y=s=>{e(0,d=s),e(9,f=s),e(1,u=0),e(10,h=0),e(2,$=!1)};let w=null,x=null;p((async()=>{document.addEventListener("keyup",(s=>{const{key:t}=s;" "===t||"Enter"===t?m?E():z():"ArrowRight"===t?b("seconds"):"ArrowLeft"===t?b("minutes"):"ArrowUp"===t?"minutes"===v?j(!0):k(!0):"ArrowDown"===t?"minutes"===v?j(!1):k(!1):"r"===t||"R"===t?(clearInterval(m),e(12,m=null),e(2,$=!1),e(0,d=f),e(1,u=h)):"1"===t?y(5):"2"===t?y(10):"3"===t?y(15):"4"===t&&y(20)})),document.addEventListener("click",(()=>{m?E():z()})),document.addEventListener("touchstart",(s=>{const t=s.touches[0];w=t.clientX,x=t.clientY}),!1),document.addEventListener("touchmove",(s=>{if(w&&x){var t=s.touches[0].clientX,e=s.touches[0].clientY,a=w-t,n=x-e;Math.abs(a)>Math.abs(n)?b(a>0?"seconds":"minutes"):n>0?"minutes"===v?j(!1):k(!1):"minutes"===v?j(!0):k(!0),w=null,x=null}}),!1)}));const _=Math.random()<.5?"#f28000":"#8ce563";return s.$$.update=()=>{1536&s.$$.dirty&&e(13,a=60*f+h),3&s.$$.dirty&&e(14,n=60*d+u),4096&s.$$.dirty&&e(15,i=!!m),57348&s.$$.dirty&&e(3,l=g`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${_};
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    transform: ${i&&!$?`scale(1, ${n/a})`:"scale(1,0)"};
    transform-origin: 50% 100%;
    transition: transform 1s, background 1s;
  `),32772&s.$$.dirty&&e(4,r=g`
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
    ${$&&i?"animation: pink-blink 1s steps(5, start) infinite;":""}
  `),34816&s.$$.dirty&&e(5,o=g`
    position: absolute;
    color: ${i||"seconds"!==v?"":"#999999"};
    right: 0.15em;
  `),34816&s.$$.dirty&&e(6,c=g`
    position: absolute;
    color: ${i||"minutes"!==v?"":"#999999"};
    left: 0.15em;
  `)},[d,u,$,l,r,o,c,s=>("0"+s).slice(-2),!1,f,h,v,m,a,n,i]}export default class extends s{constructor(s){super(),t(this,s,k,j,e,{ssr:8})}get ssr(){return this.$$.ctx[8]}}
