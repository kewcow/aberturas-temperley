/* empty css                              */function E(){}function Pe(e){return e()}function Ce(){return Object.create(null)}function q(e){e.forEach(Pe)}function Te(e){return typeof e=="function"}function ue(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let D;function qe(e,t){return D||(D=document.createElement("a")),D.href=t,e===D.href}function Ue(e){return Object.keys(e).length===0}function Ne(e){return e??""}let J=!1;function De(){J=!0}function Ge(){J=!1}function Ve(e,t,n,l){for(;e<t;){const r=e+(t-e>>1);n(r)<=l?e=r+1:t=r}return e}function We(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let c=0;c<t.length;c++){const h=t[c];h.claim_order!==void 0&&s.push(h)}t=s}const n=new Int32Array(t.length+1),l=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const c=t[s].claim_order,h=(r>0&&t[n[r]].claim_order<=c?r+1:Ve(1,r,y=>t[n[y]].claim_order,c))-1;l[s]=n[h]+1;const m=h+1;n[m]=s,r=Math.max(m,r)}const a=[],i=[];let f=t.length-1;for(let s=n[r]+1;s!=0;s=l[s-1]){for(a.push(t[s-1]);f>=s;f--)i.push(t[f]);f--}for(;f>=0;f--)i.push(t[f]);a.reverse(),i.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<i.length;s++){for(;c<a.length&&i[s].claim_order>=a[c].claim_order;)c++;const h=c<a.length?a[c]:null;e.insertBefore(i[s],h)}}function u(e,t){if(J){for(We(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function K(e,t,n){J&&!n?u(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function d(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function O(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function L(){return b(" ")}function Le(){return b("")}function Ae(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function o(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e){return Array.from(e.childNodes)}function Fe(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function je(e,t,n,l,r=!1){Fe(e);const a=(()=>{for(let i=e.claim_info.last_index;i<e.length;i++){const f=e[i];if(t(f)){const s=n(f);return s===void 0?e.splice(i,1):e[i]=s,r||(e.claim_info.last_index=i),f}}for(let i=e.claim_info.last_index-1;i>=0;i--){const f=e[i];if(t(f)){const s=n(f);return s===void 0?e.splice(i,1):e[i]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=i,f}}return l()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function ke(e,t,n,l){return je(e,r=>r.nodeName===t,r=>{const a=[];for(let i=0;i<r.attributes.length;i++){const f=r.attributes[i];n[f.name]||a.push(f.name)}a.forEach(i=>r.removeAttribute(i))},()=>l(t))}function g(e,t,n){return ke(e,t,n,p)}function F(e,t,n){return ke(e,t,n,O)}function P(e,t){return je(e,n=>n.nodeType===3,n=>{const l=""+t;if(n.data.startsWith(l)){if(n.data.length!==l.length)return n.splitText(l.length)}else n.data=l},()=>b(t),!0)}function A(e){return P(e," ")}function G(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}let fe;function k(e){fe=e}const T=[],Se=[],V=[],Ie=[],Je=Promise.resolve();let re=!1;function Ke(){re||(re=!0,Je.then(Oe))}function se(e){V.push(e)}const ie=new Set;let H=0;function Oe(){if(H!==0)return;const e=fe;do{try{for(;H<T.length;){const t=T[H];H++,k(t),Qe(t.$$)}}catch(t){throw T.length=0,H=0,t}for(k(null),T.length=0,H=0;Se.length;)Se.pop()();for(let t=0;t<V.length;t+=1){const n=V[t];ie.has(n)||(ie.add(n),n())}V.length=0}while(T.length);for(;Ie.length;)Ie.pop()();re=!1,ie.clear(),k(e)}function Qe(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}const W=new Set;let Re;function ce(e,t){e&&e.i&&(W.delete(e),e.i(t))}function ze(e,t,n,l){if(e&&e.o){if(W.has(e))return;W.add(e),Re.c.push(()=>{W.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function Be(e){e&&e.c()}function Me(e,t){e&&e.l(t)}function ae(e,t,n,l){const{fragment:r,after_update:a}=e.$$;r&&r.m(t,n),l||se(()=>{const i=e.$$.on_mount.map(Pe).filter(Te);e.$$.on_destroy?e.$$.on_destroy.push(...i):q(i),e.$$.on_mount=[]}),a.forEach(se)}function oe(e,t){const n=e.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Xe(e,t){e.$$.dirty[0]===-1&&(T.push(e),Ke(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function de(e,t,n,l,r,a,i,f=[-1]){const s=fe;k(e);const c=e.$$={fragment:null,ctx:[],props:a,update:E,not_equal:r,bound:Ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:Ce(),dirty:f,skip_bound:!1,root:t.target||s.$$.root};i&&i(c.root);let h=!1;if(c.ctx=n?n(e,t.props||{},(m,y,...$)=>{const S=$.length?$[0]:y;return c.ctx&&r(c.ctx[m],c.ctx[m]=S)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](S),h&&Xe(e,m)),y}):[],c.update(),h=!0,q(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){De();const m=_(t.target);c.fragment&&c.fragment.l(m),m.forEach(d)}else c.fragment&&c.fragment.c();t.intro&&ce(e.$$.fragment),ae(e,t.target,t.anchor,t.customElement),Ge(),Oe()}k(s)}class he{$destroy(){oe(this,1),this.$destroy=E}$on(t,n){if(!Te(n))return E;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!Ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ye(e){let t,n;return{c(){t=O("svg"),n=O("path"),this.h()},l(l){t=F(l,"svg",{xmlns:!0,viewBox:!0,class:!0});var r=_(t);n=F(r,"path",{fill:!0,d:!0}),_(n).forEach(d),r.forEach(d),this.h()},h(){o(n,"fill","hsl(0,0%,100%)"),o(n,"d","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 448 512"),o(t,"class","svelte-19mp7gu")},m(l,r){K(l,t,r),u(t,n)},p:E,i:E,o:E,d(l){l&&d(t)}}}class Ze extends he{constructor(t){super(),de(this,t,null,Ye,ue,{})}}function He(e){let t,n,l=`${e[2]}em`,r=`${e[2]}em`;return{c(){t=O("svg"),n=O("path"),this.h()},l(a){t=F(a,"svg",{xmlns:!0,viewBox:!0});var i=_(t);n=F(i,"path",{fill:!0,d:!0}),_(n).forEach(d),i.forEach(d),this.h()},h(){o(n,"fill",e[1]),o(n,"d","M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 320 512"),G(t,"width",l),G(t,"height",r)},m(a,i){K(a,t,i),u(t,n)},p(a,i){i&2&&o(n,"fill",a[1]),i&4&&l!==(l=`${a[2]}em`)&&G(t,"width",l),i&4&&r!==(r=`${a[2]}em`)&&G(t,"height",r)},d(a){a&&d(t)}}}function et(e){let t,n=e[0]==="close-simple"&&He(e);return{c(){n&&n.c(),t=Le()},l(l){n&&n.l(l),t=Le()},m(l,r){n&&n.m(l,r),K(l,t,r)},p(l,[r]){l[0]==="close-simple"?n?n.p(l,r):(n=He(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:E,o:E,d(l){n&&n.d(l),l&&d(t)}}}function tt(e,t,n){let{name:l}=t,{color:r}=t,{size:a}=t;return e.$$set=i=>{"name"in i&&n(0,l=i.name),"color"in i&&n(1,r=i.color),"size"in i&&n(2,a=i.size)},[l,r,a]}class nt extends he{constructor(t){super(),de(this,t,tt,et,ue,{name:0,color:1,size:2})}}function lt(e){let t,n,l,r,a,i,f,s,c,h,m,y,$,S,Q,I,C,R,X,z,Y,Z,B,ee,te,M,N,ne,U,j,le,_e;return i=new Ze({}),h=new nt({props:{name:"close-simple",color:"hsl(0,0%,100%)",size:2.3}}),{c(){t=p("nav"),n=p("img"),r=L(),a=p("button"),Be(i.$$.fragment),f=L(),s=p("ul"),c=p("button"),Be(h.$$.fragment),m=L(),y=p("li"),$=p("a"),S=b("Inicio"),Q=L(),I=p("li"),C=p("a"),R=b("Servicios"),X=L(),z=p("li"),Y=b("Proyectos"),Z=L(),B=p("li"),ee=b("Productos"),te=L(),M=p("li"),N=p("a"),ne=b("Contacto"),this.h()},l(v){t=g(v,"NAV",{class:!0});var x=_(t);n=g(x,"IMG",{src:!0,alt:!0,class:!0}),r=A(x),a=g(x,"BUTTON",{class:!0});var me=_(a);Me(i.$$.fragment,me),me.forEach(d),f=A(x),s=g(x,"UL",{class:!0});var w=_(s);c=g(w,"BUTTON",{class:!0});var pe=_(c);Me(h.$$.fragment,pe),pe.forEach(d),m=A(w),y=g(w,"LI",{class:!0});var ve=_(y);$=g(ve,"A",{href:!0,class:!0});var ge=_($);S=P(ge,"Inicio"),ge.forEach(d),ve.forEach(d),Q=A(w),I=g(w,"LI",{class:!0});var we=_(I);C=g(we,"A",{href:!0,class:!0});var ye=_(C);R=P(ye,"Servicios"),ye.forEach(d),we.forEach(d),X=A(w),z=g(w,"LI",{class:!0});var $e=_(z);Y=P($e,"Proyectos"),$e.forEach(d),Z=A(w),B=g(w,"LI",{class:!0});var xe=_(B);ee=P(xe,"Productos"),xe.forEach(d),te=A(w),M=g(w,"LI",{class:!0});var be=_(M);N=g(be,"A",{href:!0,class:!0});var Ee=_(N);ne=P(Ee,"Contacto"),Ee.forEach(d),be.forEach(d),w.forEach(d),x.forEach(d),this.h()},h(){qe(n.src,l="/logo-letras-blancas.png")||o(n,"src",l),o(n,"alt","icon"),o(n,"class","svelte-10ow3ua"),o(a,"class","svelte-10ow3ua"),o(c,"class","close-menu svelte-10ow3ua"),o($,"href","#home"),o($,"class","svelte-10ow3ua"),o(y,"class","svelte-10ow3ua"),o(C,"href","#service"),o(C,"class","svelte-10ow3ua"),o(I,"class","svelte-10ow3ua"),o(z,"class","svelte-10ow3ua"),o(B,"class","svelte-10ow3ua"),o(N,"href","#contac"),o(N,"class","svelte-10ow3ua"),o(M,"class","svelte-10ow3ua"),o(s,"class",U=Ne(e[0])+" svelte-10ow3ua"),o(t,"class","svelte-10ow3ua")},m(v,x){K(v,t,x),u(t,n),u(t,r),u(t,a),ae(i,a,null),u(t,f),u(t,s),u(s,c),ae(h,c,null),u(s,m),u(s,y),u(y,$),u($,S),u(s,Q),u(s,I),u(I,C),u(C,R),u(s,X),u(s,z),u(z,Y),u(s,Z),u(s,B),u(B,ee),u(s,te),u(s,M),u(M,N),u(N,ne),j=!0,le||(_e=[Ae(a,"click",e[1]),Ae(c,"click",e[1])],le=!0)},p(v,[x]){(!j||x&1&&U!==(U=Ne(v[0])+" svelte-10ow3ua"))&&o(s,"class",U)},i(v){j||(ce(i.$$.fragment,v),ce(h.$$.fragment,v),j=!0)},o(v){ze(i.$$.fragment,v),ze(h.$$.fragment,v),j=!1},d(v){v&&d(t),oe(i),oe(h),le=!1,q(_e)}}}function it(e,t,n){let l="";return[l,()=>{n(0,l=l==="show"?"":"show")}]}class st extends he{constructor(t){super(),de(this,t,it,lt,ue,{})}}export{st as default};
