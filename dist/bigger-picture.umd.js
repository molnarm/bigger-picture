((t,e)=>{"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).BiggerPicture=e()})(this,(function(){var t;function e(){}const n=t=>t;function i(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function l(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u;function a(t,e){return u||(u=document.createElement("a")),u.href=e,t===u.href}function d(t,e){return t!=t?e==e:t!==e}function f(t,n,i){t.$$.on_destroy.push(((t,...n)=>{if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i})(n,i))}function p(t,e,n){return t.set(n),e}function m(t){return t&&l(t.destroy)?t.destroy:e}const h="undefined"!=typeof window;let g=h?()=>window.performance.now():()=>Date.now(),$=h?t=>requestAnimationFrame(t):e;const y=new Set;function b(t){y.forEach((e=>{e.c(t)||(y.delete(e),e.f())})),0!==y.size&&$(b)}function v(t){let e;return 0===y.size&&$(b),{promise:new Promise((n=>{y.add(e={c:t,f:n})})),abort(){y.delete(e)}}}function x(t,e){t.appendChild(e)}function w(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _(t){const e=C("style");return((t,e)=>{x(t.head||t,e)})(w(t),e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode.removeChild(t)}function C(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function D(){return E(" ")}function H(){return E("")}function S(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function z(t,e){t.wholeText!==(e=""+e)&&(t.data=e)}function T(t,e,n,i){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function N(t,e,n){t.classList[n?"add":"remove"](e)}class M{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=C(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;this.n.length>e;e+=1)k(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(I)}}const R=new Map;let L,O=0;function P(t,e,n,i,o,r,s,l=0){const c=16.666/i;let u="{\n";for(let t=0;1>=t;t+=c){const i=e+(n-e)*r(t);u+=100*t+`%{${s(i,1-i)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${(t=>{let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0})(a)}_${l}`,f=w(t),{stylesheet:p,rules:m}=R.get(f)||((t,e)=>{const n={stylesheet:_(e),rules:{}};return R.set(t,n),n})(f,t);m[d]||(m[d]=1,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${d} ${i}ms linear ${o}ms 1 both`,O+=1,d}function W(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>0>t.indexOf(e):t=>-1===t.indexOf("__svelte")),o=n.length-i.length;o&&(t.style.animation=i.join(", "),O-=o,O||$((()=>{O||(R.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),R.clear())})))}function Y(t){L=t}const j=[],q=[],B=[],X=[],U=Promise.resolve();let F=0;function J(t){B.push(t)}const K=new Set;let G,Q=0;function V(){const t=L;do{for(;j.length>Q;){const t=j[Q];Q++,Y(t),Z(t.$$)}for(Y(null),j.length=0,Q=0;q.length;)q.pop()();for(let t=0;B.length>t;t+=1){const e=B[t];K.has(e)||(K.add(e),e())}B.length=0}while(j.length);for(;X.length;)X.pop()();F=0,K.clear(),Y(t)}function Z(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function tt(){return G||(G=Promise.resolve(),G.then((()=>{G=null}))),G}function et(t,e,n){t.dispatchEvent(((t,e,n=0)=>{const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,0,e),i})(`${e?"intro":"outro"}${n}`))}const nt=new Set;let it;function ot(){it={r:0,c:[],p:it}}function rt(){it.r||s(it.c),it=it.p}function st(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function lt(t,e,n,i){if(t&&t.o){if(nt.has(t))return;nt.add(t),it.c.push((()=>{nt.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}const ct={duration:0};function ut(t,i,o){let r,s,c=i(t,o),u=0,a=0;function d(){r&&W(t,r)}function f(){const{delay:i=0,duration:o=300,easing:l=n,tick:f=e,css:p}=c||ct;p&&(r=P(t,0,1,o,i,l,p,a++)),f(0,1);const m=g()+i,h=m+o;s&&s.abort(),u=1,J((()=>et(t,1,"start"))),s=v((e=>{if(u){if(e>=h)return f(1,0),et(t,1,"end"),d(),u=0;if(e>=m){const t=l((e-m)/o);f(t,1-t)}}return u}))}let p=0;return{start(){p||(p=1,W(t),l(c)?(c=c(),tt().then(f)):f())},invalidate(){p=0},end(){u&&(d(),u=0)}}}function at(t,i,o){let r,c=i(t,o),u=1;const a=it;function d(){const{delay:i=0,duration:o=300,easing:l=n,tick:d=e,css:f}=c||ct;f&&(r=P(t,1,0,o,i,l,f));const p=g()+i,m=p+o;J((()=>et(t,0,"start"))),v((e=>{if(u){if(e>=m)return d(0,1),et(t,0,"end"),--a.r||s(a.c),0;if(e>=p){const t=l((e-p)/o);d(1-t,t)}}return u}))}return a.r+=1,l(c)?tt().then((()=>{c=c(),d()})):d(),{end(e){e&&c.tick&&c.tick(1,0),u&&(r&&W(t,r),u=0)}}}function dt(t,i,o,r){let c=i(t,o),u=r?0:1,a=null,d=null,f=null;function p(){f&&W(t,f)}function m(t,e){const n=t.b-u;return{a:u,b:t.b,d:n,duration:e*=Math.abs(n),start:t.start,end:t.start+e,group:t.group}}function h(i){const{delay:o=0,duration:r=300,easing:l=n,tick:h=e,css:$}=c||ct,y={start:g()+o,b:i};i||(y.group=it,it.r+=1),a||d?d=y:($&&(p(),f=P(t,u,i,r,o,l,$)),i&&h(0,1),a=m(y,r),J((()=>et(t,i,"start"))),v((e=>(d&&e>d.start&&(a=m(d,r),d=null,et(t,a.b,"start"),$&&(p(),f=P(t,u,a.b,a.duration,0,l,c.css))),a&&(a.end>e?a.start>e||(u=a.a+a.d*l((e-a.start)/a.duration),h(u,1-u)):(h(u=a.b,1-u),et(t,a.b,"end"),d||(a.b?p():--a.group.r||s(a.group.c)),a=null)),!(!a&&!d)))))}return{run(t){l(c)?tt().then((()=>{c=c(),h(t)})):h(t)},end(){p(),a=d=null}}}const ft="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function pt(t){t&&t.c()}function mt(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:u,after_update:a}=t.$$;r&&r.m(e,n),i||J((()=>{const e=c.map(o).filter(l);u?u.push(...e):s(e),t.$$.on_mount=[]})),a.forEach(J)}function ht(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,n,i,o,l,c,u,a=[-1]){const d=L;Y(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:a,skip_bound:0,root:n.target||d.$$.root};u&&u(f.root);let p=0;f.ctx=i?i(t,n.props||{},((e,n,...i)=>{const o=i.length?i[0]:n;return f.ctx&&l(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),p&&function(t,e){-1===t.$$.dirty[0]&&(j.push(t),F||(F=1,U.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],f.update(),p=1,s(f.before_update),f.fragment=o?o(f.ctx):0,n.target&&(f.fragment&&f.fragment.c(),n.intro&&st(t.$$.fragment),mt(t,n.target,n.anchor,n.customElement),V()),Y(d)}class $t{$destroy(){ht(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&0!==Object.keys(t).length&&(this.$$.skip_bound=1,this.$$set(t),this.$$.skip_bound=0)}}function yt(t){const e=t-1;return e*e*e+1}function bt(t,{delay:e=0,duration:i=400,easing:o=n}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:i,easing:o,css:t=>"opacity: "+t*r}}function vt(t,{delay:e=0,duration:n=400,easing:i=yt,x:o=0,y:r=0,opacity:s=0}={}){const l=getComputedStyle(t),c=+l.opacity,u="none"===l.transform?"":l.transform,a=c*(1-s);return{delay:e,duration:n,easing:i,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*o}px, ${(1-t)*r}px);\n\t\t\topacity: ${c-a*e}`}}const xt=[];function wt(t,n=e){let i;const o=new Set;function r(e){if(c(t,e)&&(t=e,i)){const e=!xt.length;for(const e of o)e[1](),xt.push(e,t);if(e){for(let t=0;xt.length>t;t+=2)xt[t][0](xt[t+1]);xt.length=0}}}return{set:r,update(e){r(e(t))},subscribe(s,l=e){const c=[s,l];return o.add(c),1===o.size&&(i=n(r)||e),s(t),()=>{o.delete(c),0===o.size&&(i(),i=null)}}}}function _t(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(Array.isArray(t)){const n=e.map(((e,n)=>_t(t[n],e)));return t=>n.map((e=>e(t)))}if("number"===n){const n=e-t;return e=>t+e*n}}function kt(t,e={}){const o=wt(t);let r,s=t;function l(l,c){if(null==t)return o.set(t=l),Promise.resolve();s=l;let u=r,a=0,{delay:d=0,duration:f=400,easing:p=n,interpolate:m=_t}=i(i({},e),c);if(0===f)return u&&(u.abort(),u=null),o.set(t=s),Promise.resolve();const h=g()+d;let $;return r=v((e=>{if(h>e)return 1;a||($=m(t,l),"function"==typeof f&&(f=f(t,l)),a=1),u&&(u.abort(),u=null);const n=e-h;return n>f?(o.set(t=l),0):(o.set(t=$(p(n/f))),1)})),r.promise}return{set:l,update:(e,n)=>l(e(s,t),n),subscribe:o.subscribe}}const It=wt(0),Ct=wt(0);function Et(t){let e,n,i,o,r=!t[2]&&Dt();return{c(){e=C("div"),r&&r.c(),A(e,"class","bp-load"),T(e,"background-image","url("+t[0]+")")},m(t,n){k(t,e,n),r&&r.m(e,null),o=1},p(n,i){(t=n)[2]?r&&(r.d(1),r=null):r||(r=Dt(),r.c(),r.m(e,null)),(!o||1&i)&&T(e,"background-image","url("+t[0]+")")},i(r){o||(J((()=>{i&&i.end(1),n=ut(e,bt,{duration:t[2]?300:0}),n.start()})),o=1)},o(t){n&&n.invalidate(),t&&(i=at(e,bt,{duration:200})),o=0},d(t){t&&I(e),r&&r.d(),t&&i&&i.end()}}}function Dt(t){let e,n,i;return{c(){e=C("span"),n=D(),i=C("span"),A(e,"class","bp-bar"),A(i,"class","bp-o")},m(t,o){k(t,e,o),k(t,n,o),k(t,i,o)},d(t){t&&I(e),t&&I(n),t&&I(i)}}}function Ht(t){let e,n=(!t[1]||t[2])&&Et(t);return{c(){n&&n.c(),e=H()},m(t,i){n&&n.m(t,i),k(t,e,i)},p(t,[i]){!t[1]||t[2]?n?(n.p(t,i),6&i&&st(n,1)):(n=Et(t),n.c(),st(n,1),n.m(e.parentNode,e)):n&&(ot(),lt(n,1,1,(()=>{n=null})),rt())},i(t){st(n)},o(t){lt(n)},d(t){n&&n.d(t),t&&I(e)}}}function St(t,e,n){let i;f(t,It,(t=>n(2,i=t)));let{thumb:o}=e,{loaded:r}=e;return t.$$set=t=>{"thumb"in t&&n(0,o=t.thumb),"loaded"in t&&n(1,r=t.loaded)},[o,r,i]}class At extends $t{constructor(t){super(),gt(this,t,St,Ht,c,{thumb:0,loaded:1})}}function zt(t){let n,i,o,r;return{c(){n=C("img"),a(n.src,i=t[5])||A(n,"src",i),A(n,"alt",t[7])},m(t,e){k(t,n,e),r=1},p:e,i(t){r||(o&&o.end(1),r=1)},o(t){o=at(n,bt,{}),r=0},d(t){t&&I(n),t&&o&&o.end()}}}function Tt(t){let e,n,i,o,r,l,c,u;o=new At({props:{thumb:t[6],loaded:t[2]}});let a=t[2]&&zt(t);return{c(){e=C("div"),n=C("div"),i=C("div"),pt(o.$$.fragment),r=D(),a&&a.c(),T(i,"background-image","url("+t[6]+")"),T(i,"transform","translate3d("+t[4][0]+"px, "+t[4][1]+"px, 0px)"),A(n,"class","bp-item bp-img"),T(n,"width",t[0][0]+"px"),T(n,"height",t[0][1]+"px"),A(e,"class","bp-img-wrap"),N(e,"dragging",t[3])},m(s,d){k(s,e,d),x(e,n),x(n,i),mt(o,i,null),x(i,r),a&&a.m(i,null),t[23](e),l=1,c||(u=[S(window,"resize",t[22]),m(t[15].call(null,n)),S(e,"wheel",t[10]),S(e,"pointerdown",t[11]),S(e,"pointermove",t[12]),S(e,"pointerup",t[13]),S(e,"pointercancel",t[13])],c=1)},p(t,r){const s={};4&r[0]&&(s.loaded=t[2]),o.$set(s),t[2]?a?(a.p(t,r),4&r[0]&&st(a,1)):(a=zt(t),a.c(),st(a,1),a.m(i,null)):a&&(ot(),lt(a,1,1,(()=>{a=null})),rt()),(!l||16&r[0])&&T(i,"transform","translate3d("+t[4][0]+"px, "+t[4][1]+"px, 0px)"),(!l||1&r[0])&&T(n,"width",t[0][0]+"px"),(!l||1&r[0])&&T(n,"height",t[0][1]+"px"),8&r[0]&&N(e,"dragging",t[3])},i(t){l||(st(o.$$.fragment,t),st(a),l=1)},o(t){lt(o.$$.fragment,t),lt(a),l=0},d(n){n&&I(e),ht(o),a&&a.d(),t[23](null),c=0,s(u)}}}function Nt(t,e,n){let i,o,r,s;f(t,Ct,(t=>n(35,r=t))),f(t,It,(t=>n(21,s=t)));let l,c,u,a,d,m,h,g,$,y,b,{stuff:v}=e,{containerWidth:x}=e,{containerHeight:w}=e,{smallScreen:_}=e,{activeItem:k,calculateDimensions:I,loadImage:C,preloadNext:E,opts:D,prev:H,next:S,close:A,toggleControls:z}=v,{img:T,thumb:N,alt:M,width:R,height:L}=k,{inline:O}=D,P=+R,W=+L,Y=I(P,W),j=[],B=[],X=0;const U=kt(Y,{easing:yt});f(t,U,(t=>n(0,o=t)));const F=kt([0,0],{easing:yt});f(t,F,(t=>n(4,i=t)));const J=([t,e])=>{let n=(o[0]-x)/2,i=(o[1]-w)/2;return 0>n?t=0:t>n?_?(t=d?n+(t-n)/10:n)>n+20&&(a=1,H()):t=n:-1*n>t&&(_?-1*n-20>(t=d?-1*n-(-1*n-t)/10:-1*n)&&(a=1,S()):t=-1*n),0>i?e=0:e>i?e=i:-1*i>e&&(e=-1*i),[t,e]},K=(t,e=5)=>{let n=o[0]+o[0]*e,r=o[1]+o[1]*e;if(e>0&&n>P)n=P,r=W;else if(0>e){let t=I(P,W);if(t[0]>n)return p(U,o=t,o),void p(F,i=[0,0],i)}if(p(U,o=[n,r],o),1>e)return void p(F,i=J(i),i);let{x:s,y:l,width:c,height:u}=t.target.getBoundingClientRect(),a=t.clientX-s-c/2,d=t.clientY-l-u/2;s=-1*a*(n/c)+a,l=-1*d*(r/u)+d,p(F,i=J([s,l]),i)},G=t=>[t.clientX,t.clientY],Q=()=>{n(20,Y=I(P,W)),_||(p(U,o=Y,o),p(F,i=[0,0],i))};return t.$$set=t=>{"stuff"in t&&n(16,v=t.stuff),"containerWidth"in t&&n(17,x=t.containerWidth),"containerHeight"in t&&n(18,w=t.containerHeight),"smallScreen"in t&&n(19,_=t.smallScreen)},t.$$.update=()=>{1048577&t.$$.dirty[0]&&p(Ct,r=o[0]>Y[0],r),2097152&t.$$.dirty[0]&&s&&!D.intro&&p(F,i=[0,0],i)},[o,l,c,d,i,T,N,M,U,F,t=>{O&&!r||(t.preventDefault(),K(t,0>t.deltaY?.2:-.2))},t=>{if(2!==t.button){t.preventDefault(),n(3,d=1),j.push(t);let[e,o]=G(t);h=e,g=o,$=i[0],y=i[1]}},t=>{if(j.length>1)return u=1,n(3,d=0),(t=>{j=j.map((e=>e.pointerId==t.pointerId?t:e));let[e,n]=j,i=Math.hypot(e.clientX-n.clientX,e.clientY-n.clientY);X||(X=i),K(t,-.02*(X-i)),X=i})(t);if(a||!d)return;let[e,i]=G(t);B.push({x:e,y:i}),e-=h,i-=g,r||(e>40&&(H(),a=1),-40>e&&(S(),a=1),-90>i&&!O&&(A(),a=1)),m=Math.hypot(e,i)>10,r&&m&&F.set(J([$+e,y+i]),{duration:0})},t=>{if(j=j.filter((e=>e.pointerId!=t.pointerId)),u)return u=j.length?1:0,void(X=0);if(!a&&d){if(t.target===l&&!O)return A();if(n(3,d=0),_?m||(b?(clearTimeout(b),K(t,r?-5:5),b=0):b=setTimeout((()=>{z(),b=0}),250)):r?m||K(t,-5):3>B.length&&!O&&!r&&K(t),B.length>2){let t;B=B.slice(-3);let e=B[1].x-B[2].x,n=B[1].y-B[2].y;Math.hypot(e,n)>5?(e=B[0].x-B[2].x,n=B[0].y-B[2].y,t=[i[0]-5*e,i[1]-5*n]):t=i,p(F,i=J(t),i)}m=0,B=[]}},Q,()=>{C(k).then((()=>{n(2,c=1),E()}))},v,x,w,_,Y,s,()=>setTimeout(Q,0),t=>{q[t?"unshift":"push"]((()=>{l=t,n(1,l)}))}]}class Mt extends $t{constructor(t){super(),gt(this,t,Nt,Tt,c,{stuff:16,containerWidth:17,containerHeight:18,smallScreen:19},null,[-1,-1])}}function Rt(t){let e,n,i,o,r,l,c,u;return r=new At({props:{thumb:t[3],loaded:t[0]}}),{c(){e=C("div"),n=C("iframe"),o=D(),pt(r.$$.fragment),A(n,"allow","autoplay; fullscreen"),a(n.src,i=t[2])||A(n,"src",i),A(n,"title",t[4]),A(e,"class","bp-item bp-if"),T(e,"width",t[1][0]+"px"),T(e,"height",t[1][1]+"px")},m(i,s){k(i,e,s),x(e,n),x(e,o),mt(r,e,null),l=1,c||(u=[S(window,"resize",t[5]),S(n,"load",t[8])],c=1)},p(t,[n]){const i={};1&n&&(i.loaded=t[0]),r.$set(i),(!l||2&n)&&T(e,"width",t[1][0]+"px"),(!l||2&n)&&T(e,"height",t[1][1]+"px")},i(t){l||(st(r.$$.fragment,t),l=1)},o(t){lt(r.$$.fragment,t),l=0},d(t){t&&I(e),ht(r),c=0,s(u)}}}function Lt(t,e,n){let i,o,{activeItem:r}=e,{calculateDimensions:s}=e,{iframe:l,thumb:c,title:u}=r;const a=()=>{n(1,o=s(r.width,r.height))};return a(),t.$$set=t=>{"activeItem"in t&&n(6,r=t.activeItem),"calculateDimensions"in t&&n(7,s=t.calculateDimensions)},[i,o,l,c,u,a,r,s,()=>n(0,i=1)]}class Ot extends $t{constructor(t){super(),gt(this,t,Lt,Rt,c,{activeItem:6,calculateDimensions:7})}}function Pt(t){let e,n,i,o,r,l,c,u=t[2]+t[3]+"";return o=new At({props:{thumb:t[5],loaded:t[1]}}),{c(){e=C("div"),n=C("video"),i=D(),pt(o.$$.fragment),n.playsInline=1,n.controls=1,n.autoplay=1,T(n,"width",t[4][0]+"px"),T(n,"height",t[4][1]+"px"),A(e,"class","bp-item bp-vid")},m(s,a){k(s,e,a),x(e,n),n.innerHTML=u,x(e,i),mt(o,e,null),r=1,l||(c=[S(window,"resize",t[9]),S(n,"canplay",t[10])],l=1)},p(t,[e]){(!r||12&e)&&u!==(u=t[2]+t[3]+"")&&(n.innerHTML=u),(!r||16&e)&&T(n,"width",t[4][0]+"px"),(!r||16&e)&&T(n,"height",t[4][1]+"px");const i={};2&e&&(i.loaded=t[1]),o.$set(i)},i(t){r||(st(o.$$.fragment,t),r=1)},o(t){lt(o.$$.fragment,t),r=0},d(t){t&&I(e),ht(o),l=0,s(c)}}}function Wt(t,e,n){let i,{activeItem:o}=e,{calculateDimensions:r}=e,{video:s,thumb:l,tracks:c=[],width:u,height:a}=o;s=Array.isArray(s)?s:s.split(", "),c=Array.isArray(c)?c:JSON.parse(c),s=s.map((t=>`<source src="${t}" type="video/${t.match(/.(\w+)$/)[1]}">`)),c=c.map((t=>`<track${Object.keys(t).reduce(((e,n)=>e+` ${n}="${t[n]}"`),"")}>`));let d=r(u,a);return t.$$set=t=>{"activeItem"in t&&n(8,o=t.activeItem),"calculateDimensions"in t&&n(0,r=t.calculateDimensions)},[r,i,s,c,d,l,u,a,o,()=>n(4,d=r(u,a)),()=>n(1,i=1)]}class Yt extends $t{constructor(t){super(),gt(this,t,Wt,Pt,c,{activeItem:8,calculateDimensions:0})}}let jt,qt,{documentElement:Bt,body:Xt}=document;const{window:Ut}=ft;function Ft(n){let i,o,r,l,c,u,a,f,p,h,g=n[7].i,$=Zt(n),y=(!n[11]||!n[10])&&te(n);return{c(){i=C("div"),o=C("div"),l=D(),$.c(),c=D(),y&&y.c(),A(i,"class","bp-wrap"),N(i,"zoomed",n[14]),N(i,"bp-inline",n[12])},m(e,r){var s;k(e,i,r),x(i,o),x(i,l),$.m(i,null),x(i,c),y&&y.m(i,null),n[29](i),f=1,p||(h=[m((s=i,t||(t=new ResizeObserver((t=>{for(const e of t)e.target.dispatchEvent(new CustomEvent("fd:resize"))}))),t.observe(s),u={destroy(){t.unobserve(s)}})),S(i,"fd:resize",n[28]),m(a=n[22].call(null,i))],p=1)},p(t,o){n=t,128&o[0]&&d(g,g=n[7].i)?(ot(),lt($,1,1,e),rt(),$=Zt(n),$.c(),st($),$.m(i,c)):$.p(n,o),n[11]&&n[10]?y&&(ot(),lt(y,1,1,(()=>{y=null})),rt()):y?(y.p(n,o),3072&o[0]&&st(y,1)):(y=te(n),y.c(),st(y,1),y.m(i,null)),16384&o[0]&&N(i,"zoomed",n[14]),4096&o[0]&&N(i,"bp-inline",n[12])},i(t){f||(J((()=>{r||(r=dt(o,bt,{easing:yt,duration:480},1)),r.run(1)})),st($),st(y),f=1)},o(t){r||(r=dt(o,bt,{easing:yt,duration:480},0)),r.run(0),lt($),lt(y),f=0},d(t){t&&I(i),t&&r&&r.end(),$.d(t),y&&y.d(),n[29](null),p=0,s(h)}}}function Jt(t){let n,i,o=t[7].html+"";return{c(){n=new M,i=H(),n.a=i},m(t,e){n.m(o,t,e),k(t,i,e)},p(t,e){128&e[0]&&o!==(o=t[7].html+"")&&n.p(o)},i:e,o:e,d(t){t&&I(i),t&&n.d()}}}function Kt(t){let e,n;return e=new Ot({props:{activeItem:t[7],calculateDimensions:t[16]}}),{c(){pt(e.$$.fragment)},m(t,i){mt(e,t,i),n=1},p(t,n){const i={};128&n[0]&&(i.activeItem=t[7]),e.$set(i)},i(t){n||(st(e.$$.fragment,t),n=1)},o(t){lt(e.$$.fragment,t),n=0},d(t){ht(e,t)}}}function Gt(t){let e,n;return e=new Yt({props:{activeItem:t[7],calculateDimensions:t[16]}}),{c(){pt(e.$$.fragment)},m(t,i){mt(e,t,i),n=1},p(t,n){const i={};128&n[0]&&(i.activeItem=t[7]),e.$set(i)},i(t){n||(st(e.$$.fragment,t),n=1)},o(t){lt(e.$$.fragment,t),n=0},d(t){ht(e,t)}}}function Qt(t){let e,n;return e=new Mt({props:{stuff:{activeItem:t[7],calculateDimensions:t[16],toggleControls:t[21],loadImage:t[18],preloadNext:t[17],next:t[4],prev:t[3],close:t[2],opts:t[5]},containerWidth:t[8],containerHeight:t[9],smallScreen:t[11]}}),{c(){pt(e.$$.fragment)},m(t,i){mt(e,t,i),n=1},p(t,n){const i={};160&n[0]&&(i.stuff={activeItem:t[7],calculateDimensions:t[16],toggleControls:t[21],loadImage:t[18],preloadNext:t[17],next:t[4],prev:t[3],close:t[2],opts:t[5]}),256&n[0]&&(i.containerWidth=t[8]),512&n[0]&&(i.containerHeight=t[9]),2048&n[0]&&(i.smallScreen=t[11]),e.$set(i)},i(t){n||(st(e.$$.fragment,t),n=1)},o(t){lt(e.$$.fragment,t),n=0},d(t){ht(e,t)}}}function Vt(t){let e,n,i,o=t[7].caption+"";return{c(){e=C("div"),A(e,"class","bp-cap")},m(t,n){k(t,e,n),e.innerHTML=o,i=1},p(t,n){(!i||128&n[0])&&o!==(o=t[7].caption+"")&&(e.innerHTML=o)},i(t){i||(J((()=>{n||(n=dt(e,bt,{duration:200},1)),n.run(1)})),i=1)},o(t){n||(n=dt(e,bt,{duration:200},0)),n.run(0),i=0},d(t){t&&I(e),t&&n&&n.end()}}}function Zt(t){let e,n,i,o,r,l,c,u,a,d;const f=[Qt,Gt,Kt,Jt],p=[];function m(t,e){return t[7].img?0:t[7].video?1:t[7].iframe?2:3}n=m(t),i=p[n]=f[n](t);let h=t[7].caption&&Vt(t);return{c(){e=C("div"),i.c(),l=D(),h&&h.c(),c=H(),A(e,"class","bp-inner")},m(i,o){var r;k(i,e,o),p[n].m(e,null),k(i,l,o),h&&h.m(i,o),k(i,c,o),u=1,a||(d=[S(e,"pointerdown",t[26]),S(e,"pointerup",(r=t[27],function(t){t.target===this&&r.call(this,t)}))],a=1)},p(t,o){let r=n;n=m(t),n===r?p[n].p(t,o):(ot(),lt(p[r],1,1,(()=>{p[r]=null})),rt(),i=p[n],i?i.p(t,o):(i=p[n]=f[n](t),i.c()),st(i,1),i.m(e,null)),t[7].caption?h?(h.p(t,o),128&o[0]&&st(h,1)):(h=Vt(t),h.c(),st(h,1),h.m(c.parentNode,c)):h&&(ot(),lt(h,1,1,(()=>{h=null})),rt())},i(n){u||(st(i),J((()=>{r&&r.end(1),o=ut(e,t[19],{}),o.start()})),st(h),u=1)},o(n){lt(i),o&&o.invalidate(),r=at(e,t[20],{}),lt(h),u=0},d(t){t&&I(e),p[n].d(),t&&r&&r.end(),t&&I(l),h&&h.d(t),t&&I(c),a=0,s(d)}}}function te(t){let e,n,i,o,r=!t[5].noClose&&ee(t),s=t[0].length>1&&ne(t);return{c(){e=C("div"),r&&r.c(),n=D(),s&&s.c()},m(t,i){k(t,e,i),r&&r.m(e,null),x(e,n),s&&s.m(e,null),o=1},p(t,i){t[5].noClose?r&&(r.d(1),r=null):r?r.p(t,i):(r=ee(t),r.c(),r.m(e,n)),t[0].length>1?s?s.p(t,i):(s=ne(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i(t){o||(J((()=>{i||(i=dt(e,bt,{duration:300},1)),i.run(1)})),o=1)},o(t){i||(i=dt(e,bt,{duration:300},0)),i.run(0),o=0},d(t){t&&I(e),r&&r.d(),s&&s.d(),t&&i&&i.end()}}}function ee(t){let n,i,o;return{c(){n=C("button"),A(n,"class","bp-x"),A(n,"title","Close")},m(e,r){k(e,n,r),i||(o=S(n,"click",t[2]),i=1)},p:e,d(t){t&&I(n),i=0,o()}}}function ne(t){let e,n,i,o,r,l,c,u,a,d,f=t[1]+1+"",p=t[0].length+"";return{c(){e=C("div"),n=E(f),i=E(" / "),o=E(p),r=D(),l=C("button"),c=D(),u=C("button"),A(e,"class","bp-count"),A(l,"class","bp-next"),A(l,"title","Next"),A(u,"class","bp-prev"),A(u,"title","Previous")},m(s,f){k(s,e,f),x(e,n),x(e,i),x(e,o),k(s,r,f),k(s,l,f),k(s,c,f),k(s,u,f),a||(d=[S(l,"click",t[4]),S(u,"click",t[3])],a=1)},p(t,e){2&e[0]&&f!==(f=t[1]+1+"")&&z(n,f),1&e[0]&&p!==(p=t[0].length+"")&&z(o,p)},d(t){t&&I(e),t&&I(r),t&&I(l),t&&I(c),t&&I(u),a=0,s(d)}}}function ie(t){let e,n,i,o,r=t[0]&&Ft(t);return{c(){r&&r.c(),e=H()},m(s,l){r&&r.m(s,l),k(s,e,l),n=1,i||(o=S(Ut,"keydown",t[15]),i=1)},p(t,n){t[0]?r?(r.p(t,n),1&n[0]&&st(r,1)):(r=Ft(t),r.c(),st(r,1),r.m(e.parentNode,e)):r&&(ot(),lt(r,1,1,(()=>{r=null})),rt())},i(t){n||(st(r),n=1)},o(t){lt(r),n=0},d(t){r&&r.d(t),t&&I(e),i=0,o()}}}function oe(t,e,n){let i,o;f(t,It,(t=>n(33,i=t))),f(t,Ct,(t=>n(14,o=t)));let r,s,l,c,u,a,d,m,h,g,$,y,{items:b}=e,{position:v}=e,{target:x}=e;const w=()=>{r.noClose||(r.onClose&&r.onClose(),p(It,i=1,i),n(0,b=0),l&&l.focus({preventScroll:1}))},_=()=>I(v-1),k=()=>I(v+1),I=t=>{g=t-v,n(1,v=C(t))},C=t=>(t===b.length?t=0:0>t&&(t=b.length-1),t),E=t=>{const e=new Image;return e.src=t.img,t.preload=e,e.decode()},D=t=>{let{element:e}=y,n=t.querySelector(".bp-item"),{clientWidth:i,clientHeight:o}=n,{top:r,left:s,width:l,height:c}=e.getBoundingClientRect(),d=s-(u-l)/2,f=r-(a-c)/2,p=e.clientWidth/i,m=e.clientHeight/o;return{duration:480,easing:yt,css(t){let e=1-t;return`transform:translate3d(${d*e}px, ${f*e}px, 0px) scale3d(${p+t*(1-p)}, ${m+t*(1-m)}, 1)`}}},H=()=>{n(11,m=769>u),r.onResize&&r.onResize(y)};return t.$$set=t=>{"items"in t&&n(0,b=t.items),"position"in t&&n(1,v=t.position),"target"in t&&n(23,x=t.target)},t.$$.update=()=>{227&t.$$.dirty[0]&&b&&(n(7,y=b[v]),c&&r.onUpdate&&r.onUpdate(c,y))},[b,v,w,_,k,r,c,y,u,a,d,m,h,$,o,t=>{if(!s||h)return;let{key:e}=t;if("Escape"===e)w();else if("ArrowRight"===e)k();else if("ArrowLeft"===e)_();else if("Tab"===e){t.preventDefault();let e=[...(r.focusWrap||c).querySelectorAll("*")].filter((t=>t.tabIndex>=0)),n=e.indexOf(document.activeElement);n+=e.length+(t.shiftKey?-1:1),n%=e.length,e[n].focus()}},(t,e,n)=>{let i,o;n=r.scale||.99;const s=(e=e||1080)/(t=t||1920);return s>a/u?(o=Math.min(e,a*n),i=o/s):(i=Math.min(t,u*n),o=i*s),[i,o]},()=>{let t=b[C(v+1)],e=b[C(v-1)];t.img&&!t.preload&&E(t),e.img&&!e.preload&&E(e)},E,t=>s?vt(t,{x:g>0?20:-20,easing:yt,duration:300}):(s=1,r.onOpen&&r.onOpen(c),r.intro?vt(t,{y:10,easing:yt}):D(t)),t=>b?vt(t,{x:g>0?-20:20,easing:yt,duration:300}):r.intro?vt(t,{y:-10,easing:yt}):D(t),()=>n(10,d=!d),()=>(window.addEventListener("resize",H),{destroy(){window.removeEventListener("resize",H),p(It,i=s=0,i),Bt.style.overflowY=jt,Xt.style.overflowY=jt,r.onClosed&&r.onClosed()}}),x,t=>{let e=t.items;l=document.activeElement,n(5,r=t),n(12,h=r.inline),h||Bt.scrollHeight>Bt.clientHeight&&(jt=jt||getComputedStyle(Bt).overflowY,qt=qt||getComputedStyle(Xt).overflowY,Bt.style.overflowY="hidden",Xt.style.overflowY="scroll"),n(8,u=x.offsetWidth),n(9,a=x===document.body?window.innerHeight:x.clientHeight),n(11,m=769>u),n(1,v=r.position||0),n(0,b=Array.isArray(e)?e.map(((t,e)=>({...t,i:e}))):[...e.length?e:[e]].map(((t,e)=>{let i={element:t,i:e};return t===r.el&&n(1,v=e),{...i,...t.dataset}})))},I,({target:t})=>n(13,$=t),({target:t})=>{t===$&&w()},t=>{n(9,a=t.target.clientHeight),n(8,u=t.target.clientWidth)},t=>{q[t?"unshift":"push"]((()=>{c=t,n(6,c)}))}]}class re extends $t{constructor(t){super(),gt(this,t,oe,ie,d,{items:0,position:1,target:23,open:24,close:2,prev:3,next:4,setPosition:25},null,[-1,-1])}get items(){return this.$$.ctx[0]}set items(t){this.$$set({items:t}),V()}get position(){return this.$$.ctx[1]}set position(t){this.$$set({position:t}),V()}get target(){return this.$$.ctx[23]}set target(t){this.$$set({target:t}),V()}get open(){return this.$$.ctx[24]}get close(){return this.$$.ctx[2]}get prev(){return this.$$.ctx[3]}get next(){return this.$$.ctx[4]}get setPosition(){return this.$$.ctx[25]}}return t=>new re({...t,intro:1,props:t})}));
