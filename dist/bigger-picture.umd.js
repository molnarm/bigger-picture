((t,e)=>{"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).BiggerPicture=e()})(this,(function(){var t;function e(){}const n=t=>t;function o(t,e){for(const n in e)t[n]=e[n];return t}function i(t){return t()}function r(){return Object.create(null)}function l(t){t.forEach(i)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u;function a(t,e){return u||(u=document.createElement("a")),u.href=e,t===u.href}function d(t,e){return t!=t?e==e:t!==e}function f(t,n,o){t.$$.on_destroy.push(((t,...n)=>{if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o})(n,o))}function p(t,e,n){return t.set(n),e}function m(t){return t&&s(t.destroy)?t.destroy:e}const h="undefined"!=typeof window;let g=h?()=>window.performance.now():()=>Date.now(),$=h?t=>requestAnimationFrame(t):e;const v=new Set;function y(t){v.forEach((e=>{e.c(t)||(v.delete(e),e.f())})),0!==v.size&&$(y)}function b(t){let e;return 0===v.size&&$(y),{promise:new Promise((n=>{v.add(e={c:t,f:n})})),abort(){v.delete(e)}}}function x(t,e){t.appendChild(e)}function w(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function I(t){const e=E("style");return((t,e)=>{x(t.head||t,e)})(w(t),e),e.sheet}function _(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function C(t,e){for(let n=0;t.length>n;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function z(){return D(" ")}function H(){return D("")}function M(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:S(t,o,e[o])}function A(t,e){t.wholeText!==(e=""+e)&&(t.data=e)}function L(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function W(t,e,n){t.classList[n?"add":"remove"](e)}const N=new Map;let O,R=0;function Y(t,e,n,o,i,r,l,s=0){const c=16.666/o;let u="{\n";for(let t=0;1>=t;t+=c){const o=e+(n-e)*r(t);u+=100*t+`%{${l(o,1-o)}}\n`}const a=u+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${(t=>{let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0})(a)}_${s}`,f=w(t),{stylesheet:p,rules:m}=N.get(f)||((t,e)=>{const n={stylesheet:I(e),rules:{}};return N.set(t,n),n})(f,t);m[d]||(m[d]=1,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${d} ${o}ms linear ${i}ms 1 both`,R+=1,d}function P(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>0>t.indexOf(e):t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),R-=i,R||$((()=>{R||(N.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),N.clear())})))}function B(t){O=t}const j=[],X=[],q=[],U=[],F=Promise.resolve();let J=0;function K(t){q.push(t)}const G=new Set;let Q,V=0;function Z(){const t=O;do{for(;j.length>V;){const t=j[V];V++,B(t),tt(t.$$)}for(B(null),j.length=0,V=0;X.length;)X.pop()();for(let t=0;q.length>t;t+=1){const e=q[t];G.has(e)||(G.add(e),e())}q.length=0}while(j.length);for(;U.length;)U.pop()();J=0,G.clear(),B(t)}function tt(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function et(){return Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q}function nt(t,e,n){t.dispatchEvent(((t,e,n=0)=>{const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,0,e),o})(`${e?"intro":"outro"}${n}`))}const ot=new Set;let it;function rt(){it={r:0,c:[],p:it}}function lt(){it.r||l(it.c),it=it.p}function st(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function ct(t,e,n,o){if(t&&t.o){if(ot.has(t))return;ot.add(t),it.c.push((()=>{ot.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ut={duration:0};function at(t,o,i){let r,l,c=o(t,i),u=0,a=0;function d(){r&&P(t,r)}function f(){const{delay:o=0,duration:i=300,easing:s=n,tick:f=e,css:p}=c||ut;p&&(r=Y(t,0,1,i,o,s,p,a++)),f(0,1);const m=g()+o,h=m+i;l&&l.abort(),u=1,K((()=>nt(t,1,"start"))),l=b((e=>{if(u){if(e>=h)return f(1,0),nt(t,1,"end"),d(),u=0;if(e>=m){const t=s((e-m)/i);f(t,1-t)}}return u}))}let p=0;return{start(){p||(p=1,P(t),s(c)?(c=c(),et().then(f)):f())},invalidate(){p=0},end(){u&&(d(),u=0)}}}function dt(t,o,i){let r,c=o(t,i),u=1;const a=it;function d(){const{delay:o=0,duration:i=300,easing:s=n,tick:d=e,css:f}=c||ut;f&&(r=Y(t,1,0,i,o,s,f));const p=g()+o,m=p+i;K((()=>nt(t,0,"start"))),b((e=>{if(u){if(e>=m)return d(0,1),nt(t,0,"end"),--a.r||l(a.c),0;if(e>=p){const t=s((e-p)/i);d(1-t,t)}}return u}))}return a.r+=1,s(c)?et().then((()=>{c=c(),d()})):d(),{end(e){e&&c.tick&&c.tick(1,0),u&&(r&&P(t,r),u=0)}}}function ft(t,o,i,r){let c=o(t,i),u=r?0:1,a=null,d=null,f=null;function p(){f&&P(t,f)}function m(t,e){const n=t.b-u;return{a:u,b:t.b,d:n,duration:e*=Math.abs(n),start:t.start,end:t.start+e,group:t.group}}function h(o){const{delay:i=0,duration:r=300,easing:s=n,tick:h=e,css:$}=c||ut,v={start:g()+i,b:o};o||(v.group=it,it.r+=1),a||d?d=v:($&&(p(),f=Y(t,u,o,r,i,s,$)),o&&h(0,1),a=m(v,r),K((()=>nt(t,o,"start"))),b((e=>(d&&e>d.start&&(a=m(d,r),d=null,nt(t,a.b,"start"),$&&(p(),f=Y(t,u,a.b,a.duration,0,s,c.css))),a&&(a.end>e?a.start>e||(u=a.a+a.d*s((e-a.start)/a.duration),h(u,1-u)):(h(u=a.b,1-u),nt(t,a.b,"end"),d||(a.b?p():--a.group.r||l(a.group.c)),a=null)),!(!a&&!d)))))}return{run(t){s(c)?et().then((()=>{c=c(),h(t)})):h(t)},end(){p(),a=d=null}}}const pt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function mt(t,e){const n={},o={},i={$$scope:1};let r=t.length;for(;r--;){const l=t[r],s=e[r];if(s){for(const t in l)t in s||(o[t]=1);for(const t in s)i[t]||(n[t]=s[t],i[t]=1);t[r]=s}else for(const t in l)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function ht(t){t&&t.c()}function gt(t,e,n,o){const{fragment:r,on_mount:c,on_destroy:u,after_update:a}=t.$$;r&&r.m(e,n),o||K((()=>{const e=c.map(i).filter(s);u?u.push(...e):l(e),t.$$.on_mount=[]})),a.forEach(K)}function $t(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,n,o,i,s,c,u,a=[-1]){const d=O;B(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:a,skip_bound:0,root:n.target||d.$$.root};u&&u(f.root);let p=0;f.ctx=o?o(t,n.props||{},((e,n,...o)=>{const i=o.length?o[0]:n;return f.ctx&&s(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),p&&function(t,e){-1===t.$$.dirty[0]&&(j.push(t),J||(J=1,F.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],f.update(),p=1,l(f.before_update),f.fragment=i?i(f.ctx):0,n.target&&(f.fragment&&f.fragment.c(),n.intro&&st(t.$$.fragment),gt(t,n.target,n.anchor,n.customElement),Z()),B(d)}class yt{$destroy(){$t(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&0!==Object.keys(t).length&&(this.$$.skip_bound=1,this.$$set(t),this.$$.skip_bound=0)}}function bt(t){const e=t-1;return e*e*e+1}function xt(t,{delay:e=0,duration:o=400,easing:i=n}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:i,css:t=>"opacity: "+t*r}}function wt(t,{delay:e=0,duration:n=400,easing:o=bt,x:i=0,y:r=0,opacity:l=0}={}){const s=getComputedStyle(t),c=+s.opacity,u="none"===s.transform?"":s.transform,a=c*(1-l);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*i}px, ${(1-t)*r}px);\n\t\t\topacity: ${c-a*e}`}}const It=[];function _t(t,n=e){let o;const i=new Set;function r(e){if(c(t,e)&&(t=e,o)){const e=!It.length;for(const e of i)e[1](),It.push(e,t);if(e){for(let t=0;It.length>t;t+=2)It[t][0](It[t+1]);It.length=0}}}return{set:r,update(e){r(e(t))},subscribe(l,s=e){const c=[l,s];return i.add(c),1===i.size&&(o=n(r)||e),l(t),()=>{i.delete(c),0===i.size&&(o(),o=null)}}}}function kt(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(Array.isArray(t)){const n=e.map(((e,n)=>kt(t[n],e)));return t=>n.map((e=>e(t)))}if("number"===n){const n=e-t;return e=>t+e*n}}function Ct(t,e={}){const i=_t(t);let r,l=t;function s(s,c){if(null==t)return i.set(t=s),Promise.resolve();l=s;let u=r,a=0,{delay:d=0,duration:f=400,easing:p=n,interpolate:m=kt}=o(o({},e),c);if(0===f)return u&&(u.abort(),u=null),i.set(t=l),Promise.resolve();const h=g()+d;let $;return r=b((e=>{if(h>e)return 1;a||($=m(t,s),"function"==typeof f&&(f=f(t,s)),a=1),u&&(u.abort(),u=null);const n=e-h;return n>f?(i.set(t=s),0):(i.set(t=$(p(n/f))),1)})),r.promise}return{set:s,update:(e,n)=>s(e(l,t),n),subscribe:i.subscribe}}const Et=_t(0),Dt=_t(0);function zt(t){let e,n,o,i,r=!t[2]&&Ht();return{c(){e=E("div"),r&&r.c(),S(e,"class","bp-load"),L(e,"background-image","url("+t[0]+")")},m(t,n){_(t,e,n),r&&r.m(e,null),i=1},p(n,o){(t=n)[2]?r&&(r.d(1),r=null):r||(r=Ht(),r.c(),r.m(e,null)),(!i||1&o)&&L(e,"background-image","url("+t[0]+")")},i(r){i||(K((()=>{o&&o.end(1),n=at(e,xt,{duration:t[2]?300:0}),n.start()})),i=1)},o(t){n&&n.invalidate(),t&&(o=dt(e,xt,{duration:200})),i=0},d(t){t&&k(e),r&&r.d(),t&&o&&o.end()}}}function Ht(t){let e,n,o;return{c(){e=E("span"),n=z(),o=E("span"),S(e,"class","bp-bar"),S(o,"class","bp-o")},m(t,i){_(t,e,i),_(t,n,i),_(t,o,i)},d(t){t&&k(e),t&&k(n),t&&k(o)}}}function Mt(t){let e,n=(!t[1]||t[2])&&zt(t);return{c(){n&&n.c(),e=H()},m(t,o){n&&n.m(t,o),_(t,e,o)},p(t,[o]){!t[1]||t[2]?n?(n.p(t,o),6&o&&st(n,1)):(n=zt(t),n.c(),st(n,1),n.m(e.parentNode,e)):n&&(rt(),ct(n,1,1,(()=>{n=null})),lt())},i(t){st(n)},o(t){ct(n)},d(t){n&&n.d(t),t&&k(e)}}}function St(t,e,n){let o;f(t,Et,(t=>n(2,o=t)));let{thumb:i}=e,{loaded:r}=e;return t.$$set=t=>{"thumb"in t&&n(0,i=t.thumb),"loaded"in t&&n(1,r=t.loaded)},[i,r,o]}class Tt extends yt{constructor(t){super(),vt(this,t,St,Mt,c,{thumb:0,loaded:1})}}function At(t){let n,o,i,r;return{c(){n=E("img"),a(n.src,o=t[4])||S(n,"src",o),S(n,"alt",t[6])},m(t,e){_(t,n,e),r=1},p:e,i(t){r||(i&&i.end(1),r=1)},o(t){i=dt(n,xt,{}),r=0},d(t){t&&k(n),t&&i&&i.end()}}}function Lt(t){let e,n,o,i,r,s,c;o=new Tt({props:{thumb:t[5],loaded:t[1]}});let u=t[1]&&At(t);return{c(){e=E("div"),n=E("div"),ht(o.$$.fragment),i=z(),u&&u.c(),L(n,"background-image","url("+t[5]+")"),L(n,"transform","translate3d("+t[3][0]+"px, "+t[3][1]+"px, 0px)"),S(e,"class","bp-item bp-img"),L(e,"width",t[0][0]+"px"),L(e,"height",t[0][1]+"px"),W(e,"dragging",t[2])},m(l,a){_(l,e,a),x(e,n),gt(o,n,null),x(n,i),u&&u.m(n,null),r=1,s||(c=[M(window,"resize",t[21]),M(n,"wheel",t[9]),M(n,"pointerdown",t[10]),M(n,"pointermove",t[11]),M(n,"pointerup",t[12]),M(n,"pointercancel",t[12]),m(t[14].call(null,e))],s=1)},p(t,i){const l={};2&i[0]&&(l.loaded=t[1]),o.$set(l),t[1]?u?(u.p(t,i),2&i[0]&&st(u,1)):(u=At(t),u.c(),st(u,1),u.m(n,null)):u&&(rt(),ct(u,1,1,(()=>{u=null})),lt()),(!r||8&i[0])&&L(n,"transform","translate3d("+t[3][0]+"px, "+t[3][1]+"px, 0px)"),(!r||1&i[0])&&L(e,"width",t[0][0]+"px"),(!r||1&i[0])&&L(e,"height",t[0][1]+"px"),4&i[0]&&W(e,"dragging",t[2])},i(t){r||(st(o.$$.fragment,t),st(u),r=1)},o(t){ct(o.$$.fragment,t),ct(u),r=0},d(t){t&&k(e),$t(o),u&&u.d(),s=0,l(c)}}}function Wt(t,e,n){let o,i,r,l;f(t,Dt,(t=>n(33,r=t))),f(t,Et,(t=>n(20,l=t)));let s,c,u,a,d,m,h,g,$,v,{stuff:y}=e,{containerWidth:b}=e,{containerHeight:x}=e,{smallScreen:w}=e,{activeItem:I,calculateDimensions:_,loadImage:k,preloadNext:C,opts:E,prev:D,next:z,close:H,toggleControls:M}=y,{img:S,thumb:T,alt:A,width:L,height:W}=I,{inline:N}=E,O=+L,R=+W,Y=_(O,R),P=[],B=[],j=0;const X=Ct(Y,{easing:bt});f(t,X,(t=>n(0,i=t)));const q=Ct([0,0],{easing:bt});f(t,q,(t=>n(3,o=t)));const U=([t,e])=>{let n=(i[0]-b)/2,o=(i[1]-x)/2;return 0>n?t=0:t>n?w?(t=a?n+(t-n)/10:n)>n+20&&(u=1,D()):t=n:-1*n>t&&(w?-1*n-20>(t=a?-1*n-(-1*n-t)/10:-1*n)&&(u=1,z()):t=-1*n),0>o?e=0:e>o?e=o:-1*o>e&&(e=-1*o),[t,e]},F=(t,e=5)=>{let n=i[0]+i[0]*e,r=i[1]+i[1]*e;if(e>0&&n>O)n=O,r=R;else if(0>e){let t=_(O,R);if(t[0]>n)return p(X,i=t,i),void p(q,o=[0,0],o)}if(p(X,i=[n,r],i),1>e)return void p(q,o=U(o),o);let{x:l,y:s,width:c,height:u}=t.target.getBoundingClientRect(),a=t.clientX-l-c/2,d=t.clientY-s-u/2;l=-1*a*(n/c)+a,s=-1*d*(r/u)+d,p(q,o=U([l,s]),o)},J=t=>[t.clientX,t.clientY],K=()=>{n(19,Y=_(O,R)),w||(p(X,i=Y,i),p(q,o=[0,0],o))};return t.$$set=t=>{"stuff"in t&&n(15,y=t.stuff),"containerWidth"in t&&n(16,b=t.containerWidth),"containerHeight"in t&&n(17,x=t.containerHeight),"smallScreen"in t&&n(18,w=t.smallScreen)},t.$$.update=()=>{524289&t.$$.dirty[0]&&p(Dt,r=i[0]>Y[0],r),1048576&t.$$.dirty[0]&&l&&!E.intro&&p(q,o=[0,0],o)},[i,s,a,o,S,T,A,X,q,t=>{N&&!r||(t.preventDefault(),F(t,0>t.deltaY?.2:-.2))},t=>{if(2!==t.button){t.preventDefault(),n(2,a=1),P.push(t);let[e,i]=J(t);m=e,h=i,g=o[0],$=o[1]}},t=>{if(P.length>1)return c=1,n(2,a=0),(t=>{P=P.map((e=>e.pointerId==t.pointerId?t:e));let[e,n]=P,o=Math.hypot(e.clientX-n.clientX,e.clientY-n.clientY);j||(j=o),F(t,-.02*(j-o)),j=o})(t);if(u||!a)return;let[e,o]=J(t);B.push({x:e,y:o}),e-=m,o-=h,r||(e>40&&(D(),u=1),-40>e&&(z(),u=1),-90>o&&!N&&(H(),u=1)),r&&Math.hypot(e,o)>10&&(d=1,q.set(U([g+e,$+o]),{duration:0}))},t=>{if(P=P.filter((e=>e.pointerId!=t.pointerId)),c)return c=P.length?1:0,void(j=0);if(!u&&a){if(n(2,a=0),w?d||(v?(clearTimeout(v),F(t,r?-5:5),v=0):v=setTimeout((()=>{M(),v=0}),250)):r?d||F(t,-5):3>B.length&&!r&&F(t),d){let t;B=B.slice(-3);let e=B[1].x-B[2].x,n=B[1].y-B[2].y;Math.hypot(e,n)>5?(e=B[0].x-B[2].x,n=B[0].y-B[2].y,t=[o[0]-5*e,o[1]-5*n]):t=o,p(q,o=U(t),o)}d=0,B=[]}},K,()=>{k(I).then((()=>{n(1,s=1),C()}))},y,b,x,w,Y,l,()=>setTimeout(K,0)]}class Nt extends yt{constructor(t){super(),vt(this,t,Wt,Lt,c,{stuff:15,containerWidth:16,containerHeight:17,smallScreen:18},null,[-1,-1])}}function Ot(t){let e,n,o,i,r,s,c,u;return r=new Tt({props:{thumb:t[3],loaded:t[0]}}),{c(){e=E("div"),n=E("iframe"),i=z(),ht(r.$$.fragment),S(n,"allow","autoplay; fullscreen"),a(n.src,o=t[2])||S(n,"src",o),S(n,"title",t[4]),S(e,"class","bp-item bp-if"),L(e,"width",t[1][0]+"px"),L(e,"height",t[1][1]+"px")},m(o,l){_(o,e,l),x(e,n),x(e,i),gt(r,e,null),s=1,c||(u=[M(window,"resize",t[5]),M(n,"load",t[8])],c=1)},p(t,[n]){const o={};1&n&&(o.loaded=t[0]),r.$set(o),(!s||2&n)&&L(e,"width",t[1][0]+"px"),(!s||2&n)&&L(e,"height",t[1][1]+"px")},i(t){s||(st(r.$$.fragment,t),s=1)},o(t){ct(r.$$.fragment,t),s=0},d(t){t&&k(e),$t(r),c=0,l(u)}}}function Rt(t,e,n){let o,i,{activeItem:r}=e,{calculateDimensions:l}=e,{iframe:s,thumb:c,title:u}=r;const a=()=>{n(1,i=l(r.width,r.height))};return a(),t.$$set=t=>{"activeItem"in t&&n(6,r=t.activeItem),"calculateDimensions"in t&&n(7,l=t.calculateDimensions)},[o,i,s,c,u,a,r,l,()=>n(0,o=1)]}class Yt extends yt{constructor(t){super(),vt(this,t,Rt,Ot,c,{activeItem:6,calculateDimensions:7})}}function Pt(t,e,n){const o=t.slice();return o[11]=e[n],o}function Bt(t,e,n){const o=t.slice();return o[14]=e[n],o}function jt(t){let e,n=[t[14]],i={};for(let t=0;n.length>t;t+=1)i=o(i,n[t]);return{c(){e=E("source"),T(e,i)},m(t,n){_(t,e,n)},p(t,o){T(e,i=mt(n,[4&o&&t[14]]))},d(t){t&&k(e)}}}function Xt(t){let e,n=[t[11]],i={};for(let t=0;n.length>t;t+=1)i=o(i,n[t]);return{c(){e=E("track"),T(e,i)},m(t,n){_(t,e,n)},p(t,o){T(e,i=mt(n,[8&o&&t[11]]))},d(t){t&&k(e)}}}function qt(t){let e,n,o,i,r,s,c,u,a=t[2],d=[];for(let e=0;a.length>e;e+=1)d[e]=jt(Bt(t,a,e));let f=t[3],p=[];for(let e=0;f.length>e;e+=1)p[e]=Xt(Pt(t,f,e));return r=new Tt({props:{thumb:t[5],loaded:t[1]}}),{c(){e=E("div"),n=E("video");for(let t=0;d.length>t;t+=1)d[t].c();o=H();for(let t=0;p.length>t;t+=1)p[t].c();i=z(),ht(r.$$.fragment),n.playsInline=1,n.controls=1,n.autoplay=1,L(n,"width",t[4][0]+"px"),L(n,"height",t[4][1]+"px"),S(e,"class","bp-item bp-vid")},m(l,a){_(l,e,a),x(e,n);for(let t=0;d.length>t;t+=1)d[t].m(n,null);x(n,o);for(let t=0;p.length>t;t+=1)p[t].m(n,null);x(e,i),gt(r,e,null),s=1,c||(u=[M(window,"resize",t[9]),M(n,"loadeddata",t[10])],c=1)},p(t,[e]){if(4&e){let i;for(a=t[2],i=0;a.length>i;i+=1){const r=Bt(t,a,i);d[i]?d[i].p(r,e):(d[i]=jt(r),d[i].c(),d[i].m(n,o))}for(;d.length>i;i+=1)d[i].d(1);d.length=a.length}if(8&e){let o;for(f=t[3],o=0;f.length>o;o+=1){const i=Pt(t,f,o);p[o]?p[o].p(i,e):(p[o]=Xt(i),p[o].c(),p[o].m(n,null))}for(;p.length>o;o+=1)p[o].d(1);p.length=f.length}(!s||16&e)&&L(n,"width",t[4][0]+"px"),(!s||16&e)&&L(n,"height",t[4][1]+"px");const i={};2&e&&(i.loaded=t[1]),r.$set(i)},i(t){s||(st(r.$$.fragment,t),s=1)},o(t){ct(r.$$.fragment,t),s=0},d(t){t&&k(e),C(d,t),C(p,t),$t(r),c=0,l(u)}}}function Ut(t,e,n){let o,{activeItem:i}=e,{calculateDimensions:r}=e,{video:l,thumb:s,tracks:c=[],width:u,height:a}=i;l=Array.isArray(l)?l:l.split(", "),l=l.map((t=>({src:t,type:"video/"+t.match(/.(\w+)$/)[1]}))),c=Array.isArray(c)?c:JSON.parse(c);let d=r(u,a);return t.$$set=t=>{"activeItem"in t&&n(8,i=t.activeItem),"calculateDimensions"in t&&n(0,r=t.calculateDimensions)},[r,o,l,c,d,s,u,a,i,()=>n(4,d=r(u,a)),()=>n(1,o=1)]}class Ft extends yt{constructor(t){super(),vt(this,t,Ut,qt,c,{activeItem:8,calculateDimensions:0})}}function Jt(t){let n;return{c(){n=E("div"),S(n,"class","bp-item bp-html"),L(n,"width",t[0]+"px")},m(e,o){_(e,n,o),n.innerHTML=t[1]},p:e,i:e,o:e,d(t){t&&k(n)}}}function Kt(t,e,n){let{activeItem:o}=e,{html:i,width:r}=o,l=document.getElementById(i).outerHTML;return t.$$set=t=>{"activeItem"in t&&n(2,o=t.activeItem)},[r,l,o]}class Gt extends yt{constructor(t){super(),vt(this,t,Kt,Jt,c,{activeItem:2})}}let Qt,Vt,{documentElement:Zt,body:te}=document;const{window:ee}=pt;function ne(n){let o,i,r,s,c,u,a,f,p,h,g=n[7].u,$=ce(n),v=(!n[11]||!n[10])&&ue(n);return{c(){o=E("div"),i=E("div"),s=z(),$.c(),c=z(),v&&v.c(),S(o,"class","bp-wrap"),W(o,"zoomed",n[13]),W(o,"bp-inline",n[12])},m(e,r){var l;_(e,o,r),x(o,i),x(o,s),$.m(o,null),x(o,c),v&&v.m(o,null),n[27](o),f=1,p||(h=[m((l=o,t||(t=new ResizeObserver((t=>{for(const e of t)e.target.dispatchEvent(new CustomEvent("fd:resize"))}))),t.observe(l),u={destroy(){t.unobserve(l)}})),M(o,"fd:resize",n[26]),m(a=n[22].call(null,o))],p=1)},p(t,i){n=t,128&i[0]&&d(g,g=n[7].u)?(rt(),ct($,1,1,e),lt(),$=ce(n),$.c(),st($),$.m(o,c)):$.p(n,i),n[11]&&n[10]?v&&(rt(),ct(v,1,1,(()=>{v=null})),lt()):v?(v.p(n,i),3072&i[0]&&st(v,1)):(v=ue(n),v.c(),st(v,1),v.m(o,null)),8192&i[0]&&W(o,"zoomed",n[13]),4096&i[0]&&W(o,"bp-inline",n[12])},i(t){f||(K((()=>{r||(r=ft(i,xt,{easing:bt,duration:480},1)),r.run(1)})),st($),st(v),f=1)},o(t){r||(r=ft(i,xt,{easing:bt,duration:480},0)),r.run(0),ct($),ct(v),f=0},d(t){t&&k(o),t&&r&&r.end(),$.d(t),v&&v.d(),n[27](null),p=0,l(h)}}}function oe(t){let e,n;return e=new Gt({props:{activeItem:t[7]}}),{c(){ht(e.$$.fragment)},m(t,o){gt(e,t,o),n=1},p(t,n){const o={};128&n[0]&&(o.activeItem=t[7]),e.$set(o)},i(t){n||(st(e.$$.fragment,t),n=1)},o(t){ct(e.$$.fragment,t),n=0},d(t){$t(e,t)}}}function ie(t){let e,n;return e=new Yt({props:{activeItem:t[7],calculateDimensions:t[17]}}),{c(){ht(e.$$.fragment)},m(t,o){gt(e,t,o),n=1},p(t,n){const o={};128&n[0]&&(o.activeItem=t[7]),e.$set(o)},i(t){n||(st(e.$$.fragment,t),n=1)},o(t){ct(e.$$.fragment,t),n=0},d(t){$t(e,t)}}}function re(t){let e,n;return e=new Ft({props:{activeItem:t[7],calculateDimensions:t[17]}}),{c(){ht(e.$$.fragment)},m(t,o){gt(e,t,o),n=1},p(t,n){const o={};128&n[0]&&(o.activeItem=t[7]),e.$set(o)},i(t){n||(st(e.$$.fragment,t),n=1)},o(t){ct(e.$$.fragment,t),n=0},d(t){$t(e,t)}}}function le(t){let e,n;return e=new Nt({props:{stuff:{activeItem:t[7],calculateDimensions:t[17],toggleControls:t[23],loadImage:t[18],preloadNext:t[19],next:t[4],prev:t[3],close:t[2],opts:t[5]},containerWidth:t[8],containerHeight:t[9],smallScreen:t[11]}}),{c(){ht(e.$$.fragment)},m(t,o){gt(e,t,o),n=1},p(t,n){const o={};160&n[0]&&(o.stuff={activeItem:t[7],calculateDimensions:t[17],toggleControls:t[23],loadImage:t[18],preloadNext:t[19],next:t[4],prev:t[3],close:t[2],opts:t[5]}),256&n[0]&&(o.containerWidth=t[8]),512&n[0]&&(o.containerHeight=t[9]),2048&n[0]&&(o.smallScreen=t[11]),e.$set(o)},i(t){n||(st(e.$$.fragment,t),n=1)},o(t){ct(e.$$.fragment,t),n=0},d(t){$t(e,t)}}}function se(t){let e,n,o,i=t[7].caption+"";return{c(){e=E("div"),S(e,"class","bp-cap")},m(t,n){_(t,e,n),e.innerHTML=i,o=1},p(t,n){(!o||128&n[0])&&i!==(i=t[7].caption+"")&&(e.innerHTML=i)},i(t){o||(K((()=>{n||(n=ft(e,xt,{duration:200},1)),n.run(1)})),o=1)},o(t){n||(n=ft(e,xt,{duration:200},0)),n.run(0),o=0},d(t){t&&k(e),t&&n&&n.end()}}}function ce(t){let e,n,o,i,r,l,s,c,u,a;const d=[le,re,ie,oe],f=[];function p(t,e){return t[7].img?0:t[7].video?1:t[7].iframe?2:t[7].html?3:-1}~(n=p(t))&&(o=f[n]=d[n](t));let m=t[7].caption&&se(t);return{c(){e=E("div"),o&&o.c(),l=z(),m&&m.c(),s=H(),S(e,"class","bp-inner")},m(o,i){var r;_(o,e,i),~n&&f[n].m(e,null),_(o,l,i),m&&m.m(o,i),_(o,s,i),c=1,u||(a=M(e,"click",(r=t[2],function(t){t.target===this&&r.call(this,t)})),u=1)},p(t,i){let r=n;n=p(t),n===r?~n&&f[n].p(t,i):(o&&(rt(),ct(f[r],1,1,(()=>{f[r]=null})),lt()),~n?(o=f[n],o?o.p(t,i):(o=f[n]=d[n](t),o.c()),st(o,1),o.m(e,null)):o=null),t[7].caption?m?(m.p(t,i),128&i[0]&&st(m,1)):(m=se(t),m.c(),st(m,1),m.m(s.parentNode,s)):m&&(rt(),ct(m,1,1,(()=>{m=null})),lt())},i(n){c||(st(o),K((()=>{r&&r.end(1),i=at(e,t[20],{}),i.start()})),st(m),c=1)},o(n){ct(o),i&&i.invalidate(),r=dt(e,t[21],{}),ct(m),c=0},d(t){t&&k(e),~n&&f[n].d(),t&&r&&r.end(),t&&k(l),m&&m.d(t),t&&k(s),u=0,a()}}}function ue(t){let e,n,o,i,r=!t[5].noClose&&ae(t),l=t[0].length>1&&de(t);return{c(){e=E("div"),r&&r.c(),n=z(),l&&l.c()},m(t,o){_(t,e,o),r&&r.m(e,null),x(e,n),l&&l.m(e,null),i=1},p(t,o){t[5].noClose?r&&(r.d(1),r=null):r?r.p(t,o):(r=ae(t),r.c(),r.m(e,n)),t[0].length>1?l?l.p(t,o):(l=de(t),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(t){i||(K((()=>{o||(o=ft(e,xt,{duration:300},1)),o.run(1)})),i=1)},o(t){o||(o=ft(e,xt,{duration:300},0)),o.run(0),i=0},d(t){t&&k(e),r&&r.d(),l&&l.d(),t&&o&&o.end()}}}function ae(t){let n,o,i;return{c(){n=E("button"),S(n,"class","bp-x"),S(n,"title","Close")},m(e,r){_(e,n,r),n.innerHTML=t[15],o||(i=M(n,"click",t[2]),o=1)},p:e,d(t){t&&k(n),o=0,i()}}}function de(t){let e,n,o,i,r,s,c,u,a,d,f=t[1]+1+"",p=t[0].length+"";return{c(){e=E("div"),n=D(f),o=D(" / "),i=D(p),r=z(),s=E("button"),c=z(),u=E("button"),S(e,"class","bp-count"),S(s,"class","bp-next"),S(s,"title","Next"),S(u,"class","bp-prev"),S(u,"title","Previous")},m(l,f){_(l,e,f),x(e,n),x(e,o),x(e,i),_(l,r,f),_(l,s,f),s.innerHTML=t[14],_(l,c,f),_(l,u,f),u.innerHTML=t[14],a||(d=[M(s,"click",t[4]),M(u,"click",t[3])],a=1)},p(t,e){2&e[0]&&f!==(f=t[1]+1+"")&&A(n,f),1&e[0]&&p!==(p=t[0].length+"")&&A(i,p)},d(t){t&&k(e),t&&k(r),t&&k(s),t&&k(c),t&&k(u),a=0,l(d)}}}function fe(t){let e,n,o,i,r=t[0]&&ne(t);return{c(){r&&r.c(),e=H()},m(l,s){r&&r.m(l,s),_(l,e,s),n=1,o||(i=M(ee,"keydown",t[16]),o=1)},p(t,n){t[0]?r?(r.p(t,n),1&n[0]&&st(r,1)):(r=ne(t),r.c(),st(r,1),r.m(e.parentNode,e)):r&&(rt(),ct(r,1,1,(()=>{r=null})),lt())},i(t){n||(st(r),n=1)},o(t){ct(r),n=0},d(t){r&&r.d(t),t&&k(e),o=0,i()}}}function pe(t,e,n){let o,i;f(t,Et,(t=>n(31,o=t))),f(t,Dt,(t=>n(13,i=t)));let r,l,s,c,u,a,d,m,h,g,$,{items:v}=e,{position:y}=e,{target:b}=e;const x=()=>{r.noClose||(r.onClose&&r.onClose(),p(Et,o=1,o),n(0,v=0),a&&a.focus({preventScroll:1}))},w=()=>{l=0,_(-1)},I=()=>{l=1,_(1)},_=t=>{n(1,y=k(t))},k=t=>{let e=y+t;return e=e==v.length?0:0>e?v.length-1:e,e},C=t=>{const e=new Image;return e.src=t.img,t.preload=e,e.decode()},E=t=>{let{element:e}=$,n=t.firstChild,{clientWidth:o,clientHeight:i}=n,{top:r,left:l,width:s,height:a}=e.getBoundingClientRect(),d=l-(c-s)/2,f=r-(u-a)/2,p=e.clientWidth/o,m=e.clientHeight/i;return{duration:480,easing:bt,css(t){let e=1-t;return`transform:translate3d(${d*e}px, ${f*e}px, 0px) scale3d(${p+t*(1-p)}, ${m+t*(1-m)}, 1)`}}},D=()=>{n(11,h=769>c),r.onResize&&r.onResize($)};return t.$$set=t=>{"items"in t&&n(0,v=t.items),"position"in t&&n(1,y=t.position),"target"in t&&n(24,b=t.target)},t.$$.update=()=>{227&t.$$.dirty[0]&&v&&(n(7,$=v[y]),d&&r.onUpdate&&r.onUpdate(d,$))},[v,y,x,w,I,r,d,$,c,u,m,h,g,i,'<svg viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>','<svg viewBox="0 0 32 32"><path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z"/></svg>',t=>{if(!s)return;let{keyCode:e}=t;if(27===e)x();else if(39==e)I();else if(37==e)w();else if(9===e&&!g){const e=d.querySelectorAll("*"),n=Array.from(e).filter((t=>t.tabIndex>=0));if(n.length){t.preventDefault();let e=n.indexOf(document.activeElement);e+=n.length+(t.shiftKey?-1:1),e%=n.length,n[e].focus()}}},(t,e,n)=>{let o,i;n=r.scale||.99;const l=(e=e||1080)/(t=t||1920);return l>u/c?(i=Math.min(e,u*n),o=i/l):(o=Math.min(t,c*n),i=o*l),[o,i]},C,()=>{let t=v[k(1)],e=v[k(-1)];t.img&&!t.preload&&C(t),e.img&&!e.preload&&C(e)},t=>s?wt(t,{x:l?20:-20,easing:bt,duration:300}):(s=1,g||window.innerWidth-Zt.clientWidth&&(Qt=Qt||getComputedStyle(Zt).overflowY,Vt=Vt||getComputedStyle(te).overflowY,Zt.style.overflowY="hidden",te.style.overflowY="scroll"),r.onOpen&&r.onOpen(d),r.intro?wt(t,{y:10,easing:bt}):E(t)),t=>v?wt(t,{x:l?-20:20,easing:bt,duration:300}):r.intro?wt(t,{y:-10,easing:bt}):E(t),()=>(window.addEventListener("resize",D),{destroy(){window.removeEventListener("resize",D),p(Et,o=s=0,o),Zt.style.overflowY=Qt,te.style.overflowY=Qt,r.onClosed&&r.onClosed()}}),()=>n(10,m=!m),b,t=>{let e=t.items;a=document.activeElement,n(5,r=t),n(12,g=r.inline),n(8,c=g?b.clientWidth:window.innerWidth),n(9,u=g?b.clientHeight:window.innerHeight),n(11,h=769>c),n(1,y=r.position||0),n(0,v=Array.isArray(e)?e.map(((t,e)=>({...t,u:e}))):[...e.length?e:[e]].reduce(((t,e,o)=>{let i={element:e,u:o};return e==r.el&&n(1,y=o),[...t,{...i,...e.dataset}]}),[]))},t=>{n(9,u=t.target.clientHeight),n(8,c=t.target.clientWidth)},t=>{X[t?"unshift":"push"]((()=>{d=t,n(6,d)}))}]}class me extends yt{constructor(t){super(),vt(this,t,pe,fe,d,{items:0,position:1,target:24,open:25,close:2,prev:3,next:4},null,[-1,-1])}get items(){return this.$$.ctx[0]}set items(t){this.$$set({items:t}),Z()}get position(){return this.$$.ctx[1]}set position(t){this.$$set({position:t}),Z()}get target(){return this.$$.ctx[24]}set target(t){this.$$set({target:t}),Z()}get open(){return this.$$.ctx[25]}get close(){return this.$$.ctx[2]}get prev(){return this.$$.ctx[3]}get next(){return this.$$.ctx[4]}}return t=>new me({...t,intro:1,props:t})}));