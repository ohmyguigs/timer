var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,n=(e,t)=>{for(var s in t||(t={}))o.call(t,s)&&i(e,s,t[s]);if(a)for(var s of a(t))r.call(t,s)&&i(e,s,t[s]);return e},l=(e,a)=>t(e,s(a));import{S as c,i as u,s as f,H as d,e as m,k as p,t as v,j as h,I as g,c as $,d as b,n as E,a as y,g as w,m as P,b as I,J as k,F as _,f as O,o as x,K as D,L as j,h as A,v as V,r as L,w as M,M as S,z as N,N as X,O as Y,P as q,Q as B,R}from"../chunks/vendor-a9a9a7ac.js";const{document:T}=q;function z(e){let t,s,a,o,r,i,n,l,c,u,f,N,X,Y,q,B,R,z,F,U,H,J,K,Q,C,G,W,Z,ee,te=`${e[2]?"-":""}${e[7](e[0])}`,se=e[7](e[1])+"";return K=new d({}),{c(){t=m("meta"),s=p(),a=m("div"),o=m("div"),i=p(),n=m("div"),l=m("div"),c=m("span"),u=m("span"),f=v(te),X=p(),Y=m("span"),q=v(":"),B=p(),R=m("span"),z=v(se),H=p(),J=m("div"),h(K.$$.fragment),Q=p(),C=m("div"),G=m("video"),this.h()},l(e){const r=g('[data-svelte="svelte-c9e3kw"]',T.head);t=$(r,"META",{name:!0,content:!0}),r.forEach(b),s=E(e),a=$(e,"DIV",{class:!0});var d=y(a);o=$(d,"DIV",{class:!0}),y(o).forEach(b),i=E(d),n=$(d,"DIV",{class:!0});var m=y(n);l=$(m,"DIV",{class:!0});var p=y(l);c=$(p,"SPAN",{class:!0});var v=y(c);u=$(v,"SPAN",{class:!0});var h=y(u);f=w(h,te),h.forEach(b),X=E(v),Y=$(v,"SPAN",{class:!0});var I=y(Y);q=w(I,":"),I.forEach(b),B=E(v),R=$(v,"SPAN",{class:!0});var k=y(R);z=w(k,se),k.forEach(b),v.forEach(b),p.forEach(b),m.forEach(b),H=E(d),J=$(d,"DIV",{class:!0});var _=y(J);P(K.$$.fragment,_),_.forEach(b),Q=E(d),C=$(d,"DIV",{class:!0});var O=y(C);G=$(O,"VIDEO",{id:!0,autoplay:!0}),y(G).forEach(b),O.forEach(b),d.forEach(b),this.h()},h(){T.title="timer",I(t,"name","description"),I(t,"content","Este é um contador de minutos visual usado para ajudar em reuniões."),I(o,"class",r=k(e[3])+" svelte-ie27fv"),I(u,"class",N=k(e[5])+" svelte-ie27fv"),I(Y,"class","index__text_separator svelte-ie27fv"),I(R,"class",F=k(e[6])+" svelte-ie27fv"),I(c,"class",U=k(e[4])+" svelte-ie27fv"),I(l,"class","index__frontpanel svelte-ie27fv"),I(n,"class","index__subcontainer svelte-ie27fv"),I(J,"class","toast__wrapper svelte-ie27fv"),I(G,"id","pip-streamer"),G.autoplay=!0,I(C,"class","pip__wrapper svelte-ie27fv"),I(a,"class","index__container svelte-ie27fv")},m(r,d){_(T.head,t),O(r,s,d),O(r,a,d),_(a,o),_(a,i),_(a,n),_(n,l),_(l,c),_(c,u),_(u,f),_(c,X),_(c,Y),_(Y,q),_(c,B),_(c,R),_(R,z),_(a,H),_(a,J),x(K,J,null),_(a,Q),_(a,C),_(C,G),W=!0,Z||(ee=[D(J,"click",j(e[17])),D(C,"click",j(e[16]))],Z=!0)},p(e,[t]){(!W||8&t&&r!==(r=k(e[3])+" svelte-ie27fv"))&&I(o,"class",r),(!W||5&t)&&te!==(te=`${e[2]?"-":""}${e[7](e[0])}`)&&A(f,te),(!W||32&t&&N!==(N=k(e[5])+" svelte-ie27fv"))&&I(u,"class",N),(!W||2&t)&&se!==(se=e[7](e[1])+"")&&A(z,se),(!W||64&t&&F!==(F=k(e[6])+" svelte-ie27fv"))&&I(R,"class",F),(!W||16&t&&U!==(U=k(e[4])+" svelte-ie27fv"))&&I(c,"class",U)},i(e){W||(V(K.$$.fragment,e),W=!0)},o(e){L(K.$$.fragment,e),W=!1},d(e){b(t),e&&b(s),e&&b(a),M(K),Z=!1,S(ee)}}}function F(e,t,s){let a,o,r,i,c,u,f;let d=10,m=0,p=10,v=0,h="minutes",g=null,$=!1;const b=()=>{g||(s(12,g=setInterval((()=>{if($)59===m?(s(1,m=0),s(0,d+=1)):s(1,m+=1);else if(0===m){const e=!!g&&0===d;s(1,m=e?0:59),s(0,d=e?0:d-1),s(2,$=e),e&&B.push(l(n({},D),{msg:"Acaou o tempo, mas fica! Vai ter bolo! 🍰"}))}else s(1,m-=1)}),1e3)),s(9,p=d),s(10,v=m))},E=()=>{clearInterval(g),s(12,g=null)},y=()=>{clearInterval(g),s(12,g=null),s(2,$=!1),s(0,d=p),s(1,m=v)},w=e=>{s(11,h=e),console.log(`now editing ${h}`)},P=e=>{d<99&&d>0?s(0,d=e?d+1:d-1):d<=0&&e?(s(0,d+=1),s(2,$=!1)):99!==d||e||s(0,d-=1)},I=e=>{m<59&&m>0?s(1,m=e?m+1:m-1):0===m&&e?s(1,m+=1):59!==m||e||s(1,m-=1)},k=e=>{s(0,d=e),s(9,p=e),s(1,m=0),s(10,v=0),s(2,$=!1)};let _=null,O=null;const x=Math.random()<.5?"#f28000":"#8ce563",D={duration:4200,reversed:!0,intro:{y:42}};return N((async()=>{document.addEventListener("keyup",(e=>{const{key:t}=e;if(" "===t||"Enter"===t)g?E():b();else if("ArrowRight"===t)w("seconds");else if("ArrowLeft"===t)w("minutes");else if("ArrowUp"===t)"minutes"===h?P(!0):I(!0);else if("ArrowDown"===t)"minutes"===h?P(!1):I(!1);else if("r"===t||"R"===t)y();else if("1"===t)k(5);else if("2"===t)k(10);else if("3"===t)k(15);else if("4"===t)k(20);else if("b"===t)B.push(l(n({},D),{msg:"Fica! Vai ter bolo! 🍰"}));else if("s"===t)navigator.mediaDevices.getDisplayMedia({audio:!1,video:{width:300,height:150}}).then((e=>{console.log("started stream! 🎉");document.getElementById("pip-streamer").srcObject=e})).catch((e=>{console.log("Error in pip stream: ",e),B.push(l(n({},D),{msg:"Erro entrando no PIP"}))}));else if("p"===t)if(document.pictureInPictureElement)document.exitPictureInPicture();else if(document.pictureInPictureEnabled){document.getElementById("pip-streamer").requestPictureInPicture()}})),document.addEventListener("click",(()=>{console.log("click!"),g?E():b()})),document.addEventListener("dblclick",(()=>{console.log("dblclick!"),g?y():b()})),document.addEventListener("touchstart",(e=>{console.log("touch start!");const t=e.touches[0];console.log("first touch X ",t.clientX," former X ",_),console.log("first touch Y ",t.clientY," former Y ",O),_=t.clientX,O=t.clientY}),!1),document.addEventListener("touchmove",(e=>{if(console.log("touch move!"),_&&O){var t=e.touches[0].clientX,s=e.touches[0].clientY,a=_-t,o=O-s;Math.abs(a)>Math.abs(o)?w(a>0?"seconds":"minutes"):o>0?"minutes"===h?P(!1):I(!1):"minutes"===h?P(!0):I(!0),_=null,O=null}}),!1);setTimeout((()=>{B.push(l(n({},D),{msg:'Para começar ou pausar<br/> Use "Enter", "Barra de espaço" ou "clique/toque"'}))}),420),setTimeout((()=>{B.push(l(n({},D),{duration:5500,msg:"Para editar, <strong>primeiro pause</strong>,<br/>então use as setas no teclado, swipe no celular<br/>ou no teclado os atalhos 1, 2, 3 ou 4"}))}),420+D.duration)})),X((()=>B.pop(0))),e.$$.update=()=>{1536&e.$$.dirty&&s(13,a=60*p+v),3&e.$$.dirty&&s(14,o=60*d+m),4096&e.$$.dirty&&s(15,r=!!g),57348&e.$$.dirty&&s(3,i=Y`
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
  `),32772&e.$$.dirty&&s(4,c=Y`
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
  `),34816&e.$$.dirty&&s(5,u=Y`
    position: absolute;
    color: ${r||"seconds"!==h?"":"#999999"};
    right: 0.15em;
  `),34816&e.$$.dirty&&s(6,f=Y`
    position: absolute;
    color: ${r||"minutes"!==h?"":"#999999"};
    left: 0.15em;
  `)},[d,m,$,i,c,u,f,e=>("0"+e).slice(-2),!1,p,v,h,g,a,o,r,function(t){R(e,t)},function(t){R(e,t)}]}export default class extends c{constructor(e){super(),u(this,e,F,z,f,{ssr:8})}get ssr(){return this.$$.ctx[8]}}
