import{S as s,i as e,s as t,k as a,e as o,t as r,H as n,d as l,n as i,c,a as h,g as f,b as d,I as m,f as v,F as u,h as $,G as y,z as p,J as g,K as q}from"../chunks/vendor-30fa7531.js";const{document:k}=q;function E(s){let e,t,p,g,q,E,b,w,x,_,A,I,D,S,N,P,V,L,z,R=`${s[2]?"-":""}${s[7](s[0])}`,j=s[7](s[1])+"";return{c(){e=a(),t=o("div"),p=o("div"),q=a(),E=o("div"),b=o("div"),w=o("span"),x=o("span"),_=r(R),I=a(),D=o("span"),S=r(":"),N=a(),P=o("span"),V=r(j),this.h()},l(s){n('[data-svelte="svelte-150qrhb"]',k.head).forEach(l),e=i(s),t=c(s,"DIV",{class:!0});var a=h(t);p=c(a,"DIV",{class:!0}),h(p).forEach(l),q=i(a),E=c(a,"DIV",{class:!0});var o=h(E);b=c(o,"DIV",{class:!0});var r=h(b);w=c(r,"SPAN",{class:!0});var d=h(w);x=c(d,"SPAN",{class:!0});var m=h(x);_=f(m,R),m.forEach(l),I=i(d),D=c(d,"SPAN",{class:!0});var v=h(D);S=f(v,":"),v.forEach(l),N=i(d),P=c(d,"SPAN",{class:!0});var u=h(P);V=f(u,j),u.forEach(l),d.forEach(l),r.forEach(l),o.forEach(l),a.forEach(l),this.h()},h(){k.title="timer",d(p,"class",g=m(s[3])+" svelte-11qhmyo"),d(x,"class",A=m(s[5])+" svelte-11qhmyo"),d(D,"class","index__text_separator svelte-11qhmyo"),d(P,"class",L=m(s[6])+" svelte-11qhmyo"),d(w,"class",z=m(s[4])+" svelte-11qhmyo"),d(b,"class","index__frontpanel svelte-11qhmyo"),d(E,"class","index__subcontainer svelte-11qhmyo"),d(t,"class","index__container svelte-11qhmyo")},m(s,a){v(s,e,a),v(s,t,a),u(t,p),u(t,q),u(t,E),u(E,b),u(b,w),u(w,x),u(x,_),u(w,I),u(w,D),u(D,S),u(w,N),u(w,P),u(P,V)},p(s,[e]){8&e&&g!==(g=m(s[3])+" svelte-11qhmyo")&&d(p,"class",g),5&e&&R!==(R=`${s[2]?"-":""}${s[7](s[0])}`)&&$(_,R),32&e&&A!==(A=m(s[5])+" svelte-11qhmyo")&&d(x,"class",A),2&e&&j!==(j=s[7](s[1])+"")&&$(V,j),64&e&&L!==(L=m(s[6])+" svelte-11qhmyo")&&d(P,"class",L),16&e&&z!==(z=m(s[4])+" svelte-11qhmyo")&&d(w,"class",z)},i:y,o:y,d(s){s&&l(e),s&&l(t)}}}function b(s,e,t){let a,o,r,n,l,i,c;let h=10,f=0,d=10,m=0,v="minutes",u=null,$=!1;const y=()=>{u||(t(12,u=setInterval((()=>{if($)59===f?(t(1,f=0),t(0,h+=1)):t(1,f+=1);else if(0===f){const s=!!u&&0===h;t(1,f=s?0:59),t(0,h=s?0:h-1),t(2,$=s)}else t(1,f-=1)}),1e3)),t(9,d=h),t(10,m=f))},q=()=>{clearInterval(u),t(12,u=null)},k=s=>{t(11,v=s),console.log(`now editing ${v}`)},E=s=>{h<99&&h>0?t(0,h=s?h+1:h-1):h<=0&&s?(t(0,h+=1),t(2,$=!1)):99!==h||s||t(0,h-=1)},b=s=>{f<59&&f>0?t(1,f=s?f+1:f-1):0===f&&s?t(1,f+=1):59!==f||s||t(1,f-=1)},w=s=>{t(0,h=s),t(9,d=s),t(1,f=0),t(10,m=0),t(2,$=!1)};p((async()=>{document.addEventListener("keyup",(s=>{const{key:e}=s;" "===e||"Enter"===e?u?q():y():"ArrowRight"===e?k("seconds"):"ArrowLeft"===e?k("minutes"):"ArrowUp"===e?"minutes"===v?E(!0):b(!0):"ArrowDown"===e?"minutes"===v?E(!1):b(!1):"r"===e||"R"===e?(clearInterval(u),t(12,u=null),t(2,$=!1),t(0,h=d),t(1,f=m)):"1"===e?w(5):"2"===e?w(10):"3"===e?w(15):"4"===e&&w(20)})),document.addEventListener("click",(()=>{u?q():y()}))}));const x=Math.random()<.5?"#f28000":"#8ce563";return s.$$.update=()=>{1536&s.$$.dirty&&t(13,a=60*d+m),3&s.$$.dirty&&t(14,o=60*h+f),4096&s.$$.dirty&&t(15,r=!!u),57348&s.$$.dirty&&t(3,n=g`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${x};
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    transform: ${r&&!$?`scale(1, ${o/a})`:"scale(1,0)"};
    transform-origin: 50% 100%;
    transition: transform 1s, background 1s;
  `),32772&s.$$.dirty&&t(4,l=g`
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
  `),34816&s.$$.dirty&&t(5,i=g`
    position: absolute;
    color: ${r||"seconds"!==v?"":"#999999"};
    right: 0.15em;
  `),34816&s.$$.dirty&&t(6,c=g`
    position: absolute;
    color: ${r||"minutes"!==v?"":"#999999"};
    left: 0.15em;
  `)},[h,f,$,n,l,i,c,s=>("0"+s).slice(-2),!1,d,m,v,u,a,o,r]}export default class extends s{constructor(s){super(),e(this,s,b,E,t,{ssr:8})}get ssr(){return this.$$.ctx[8]}}
