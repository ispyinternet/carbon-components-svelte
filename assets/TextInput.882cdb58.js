let n=document.createElement("style");n.innerHTML="",document.head.appendChild(n);import{S as a,i as s,s as t,g as e,k as p,l as o,o as c,y as l,q as r,w as i,j as u,p as k,x as m,r as $,I as f,A as d,Y as g,J as h,B as x,C as b,G as v,c as T,a as E,m as w,t as I,b as y,d as U,h as L,n as _,N as j}from"./index.6b674a45.js";import"./Button.f0f995b5.js";import"./index.77bc22b8.js";import{C as S,P as z}from"./Preview.da06bf80.js";import"./ChevronDown16.5983f6dc.js";import"./Loading.1494bed2.js";import"./Column.6ef18044.js";import{T as H}from"./TextInput.51cc4b11.js";import"./Content.7baad37e.js";import"./store.4e2c42a1.js";function A(n){let a;return{c(){a=e("span"),this.h()},l(n){a=p(n,"SPAN",{}),o(a).forEach(c),this.h()},h(){l(a,"bx--label",!0),l(a,"bx--skeleton",!0)},m(n,s){r(n,a,s)},d(n){n&&c(a)}}}function D(n){let a,s,t,x,b,v=!n[0]&&A(),T=[n[1]],E={};for(let n=0;n<T.length;n+=1)E=i(E,T[n]);return{c(){a=e("div"),v&&v.c(),s=u(),t=e("div"),this.h()},l(n){a=p(n,"DIV",{});var e=o(a);v&&v.l(e),s=k(e),t=p(e,"DIV",{}),o(t).forEach(c),e.forEach(c),this.h()},h(){l(t,"bx--skeleton",!0),l(t,"bx--text-area",!0),m(a,E),l(a,"bx--form-item",!0)},m(e,p){r(e,a,p),v&&v.m(a,null),$(a,s),$(a,t),x||(b=[f(a,"click",n[2]),f(a,"mouseover",n[3]),f(a,"mouseenter",n[4]),f(a,"mouseleave",n[5])],x=!0)},p(n,[t]){n[0]?v&&(v.d(1),v=null):v||(v=A(),v.c(),v.m(a,s)),m(a,E=d(T,[2&t&&n[1]])),l(a,"bx--form-item",!0)},i:g,o:g,d(n){n&&c(a),v&&v.d(),x=!1,h(b)}}}function R(n,a,s){const t=["hideLabel"];let e=x(a,t),{hideLabel:p=!1}=a;return n.$$set=n=>{a=i(i({},a),b(n)),s(1,e=x(a,t)),"hideLabel"in n&&s(0,p=n.hideLabel)},[p,e,function(a){v(n,a)},function(a){v(n,a)},function(a){v(n,a)},function(a){v(n,a)}]}class C extends a{constructor(n){super(),s(this,n,R,D,t,{hideLabel:0})}}function P(n){let a,s;return a=new H({props:{labelText:"User name",placeholder:"Enter user name..."}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p:g,i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function W(n){let a,s;return a=new H({props:{labelText:"User name",helperText:"Your user name is associated with your email",placeholder:"Enter user name..."}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p:g,i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function Y(n){let a,s;return a=new H({props:{hideLabel:!0,labelText:"User name",placeholder:"Enter user name..."}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p:g,i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function V(n){let a,s;return a=new H({props:{light:!0,labelText:"User name",placeholder:"Enter user name..."}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p:g,i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function B(n){let a,s;return a=new H({props:{inline:!0,labelText:"User name",placeholder:"Enter user name..."}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p:g,i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function N(n){let a,s;return a=new H({props:{size:"xl",labelText:"User name",placeholder:"Enter user name..."}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p:g,i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function q(n){let a,s;return a=new H({props:{size:"sm",labelText:"User name",placeholder:"Enter user name..."}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p:g,i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function G(n){let a,s;return a=new H({props:{invalid:!0,invalidText:"User name is already taken. Please try another.",labelText:"User name",placeholder:"Enter user name..."}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p:g,i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function J(n){let a,s;return a=new H({props:{disabled:!0,labelText:"User name",placeholder:"Enter user name..."}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p:g,i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function M(n){let a,s;return a=new C({}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function F(n){let a,s;return a=new C({props:{hideLabel:!0}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p:g,i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}function K(n){let a,s,t,l,i,m,f,d,g,h,x,b,v,T,E,w,I,y,U,S,z,H,A,D,R,C,P,W,Y,V,B,N,q,G,J,M,F,K,O,Q,X,Z,nn,an,sn,tn,en,pn,on,cn;return{c(){a=e("div"),s=e("ul"),t=e("li"),l=e("a"),i=L("Usage"),m=u(),f=e("ul"),d=e("li"),g=e("a"),h=L("Default"),x=u(),b=e("li"),v=e("a"),T=L("With helper text"),E=u(),w=e("li"),I=e("a"),y=L("Hidden label"),U=u(),S=e("li"),z=e("a"),H=L("Light variant"),A=u(),D=e("li"),R=e("a"),C=L("Inline"),P=u(),W=e("li"),Y=e("a"),V=L("Extra-large size"),B=u(),N=e("li"),q=e("a"),G=L("Small size"),J=u(),M=e("li"),F=e("a"),K=L("Invalid state"),O=u(),Q=e("li"),X=e("a"),Z=L("Disabled state"),nn=u(),an=e("li"),sn=e("a"),tn=L("Skeleton"),en=u(),pn=e("li"),on=e("a"),cn=L("Skeleton without label"),this.h()},l(n){a=p(n,"DIV",{slot:!0});var e=o(a);s=p(e,"UL",{class:!0});var r=o(s);t=p(r,"LI",{class:!0});var u=o(t);l=p(u,"A",{class:!0,href:!0});var $=o(l);i=_($,"Usage"),$.forEach(c),m=k(u),f=p(u,"UL",{class:!0});var L=o(f);d=p(L,"LI",{class:!0});var j=o(d);g=p(j,"A",{class:!0,href:!0});var ln=o(g);h=_(ln,"Default"),ln.forEach(c),j.forEach(c),x=k(L),b=p(L,"LI",{class:!0});var rn=o(b);v=p(rn,"A",{class:!0,href:!0});var un=o(v);T=_(un,"With helper text"),un.forEach(c),rn.forEach(c),E=k(L),w=p(L,"LI",{class:!0});var kn=o(w);I=p(kn,"A",{class:!0,href:!0});var mn=o(I);y=_(mn,"Hidden label"),mn.forEach(c),kn.forEach(c),U=k(L),S=p(L,"LI",{class:!0});var $n=o(S);z=p($n,"A",{class:!0,href:!0});var fn=o(z);H=_(fn,"Light variant"),fn.forEach(c),$n.forEach(c),A=k(L),D=p(L,"LI",{class:!0});var dn=o(D);R=p(dn,"A",{class:!0,href:!0});var gn=o(R);C=_(gn,"Inline"),gn.forEach(c),dn.forEach(c),P=k(L),W=p(L,"LI",{class:!0});var hn=o(W);Y=p(hn,"A",{class:!0,href:!0});var xn=o(Y);V=_(xn,"Extra-large size"),xn.forEach(c),hn.forEach(c),B=k(L),N=p(L,"LI",{class:!0});var bn=o(N);q=p(bn,"A",{class:!0,href:!0});var vn=o(q);G=_(vn,"Small size"),vn.forEach(c),bn.forEach(c),J=k(L),M=p(L,"LI",{class:!0});var Tn=o(M);F=p(Tn,"A",{class:!0,href:!0});var En=o(F);K=_(En,"Invalid state"),En.forEach(c),Tn.forEach(c),O=k(L),Q=p(L,"LI",{class:!0});var wn=o(Q);X=p(wn,"A",{class:!0,href:!0});var In=o(X);Z=_(In,"Disabled state"),In.forEach(c),wn.forEach(c),nn=k(L),an=p(L,"LI",{class:!0});var yn=o(an);sn=p(yn,"A",{class:!0,href:!0});var Un=o(sn);tn=_(Un,"Skeleton"),Un.forEach(c),yn.forEach(c),en=k(L),pn=p(L,"LI",{class:!0});var Ln=o(pn);on=p(Ln,"A",{class:!0,href:!0});var _n=o(on);cn=_(_n,"Skeleton without label"),_n.forEach(c),Ln.forEach(c),L.forEach(c),u.forEach(c),r.forEach(c),e.forEach(c),this.h()},h(){j(l,"class","bx--link"),j(l,"href","#usage"),j(g,"class","bx--link"),j(g,"href","#default"),j(d,"class","bx--list__item"),j(v,"class","bx--link"),j(v,"href","#with-helper-text"),j(b,"class","bx--list__item"),j(I,"class","bx--link"),j(I,"href","#hidden-label"),j(w,"class","bx--list__item"),j(z,"class","bx--link"),j(z,"href","#light-variant"),j(S,"class","bx--list__item"),j(R,"class","bx--link"),j(R,"href","#inline"),j(D,"class","bx--list__item"),j(Y,"class","bx--link"),j(Y,"href","#extra-large-size"),j(W,"class","bx--list__item"),j(q,"class","bx--link"),j(q,"href","#small-size"),j(N,"class","bx--list__item"),j(F,"class","bx--link"),j(F,"href","#invalid-state"),j(M,"class","bx--list__item"),j(X,"class","bx--link"),j(X,"href","#disabled-state"),j(Q,"class","bx--list__item"),j(sn,"class","bx--link"),j(sn,"href","#skeleton"),j(an,"class","bx--list__item"),j(on,"class","bx--link"),j(on,"href","#skeleton-without-label"),j(pn,"class","bx--list__item"),j(f,"class","bx--list--unordered bx--list--nested"),j(t,"class","bx--list__item"),j(s,"class","bx--list--unordered"),j(a,"slot","aside")},m(n,e){r(n,a,e),$(a,s),$(s,t),$(t,l),$(l,i),$(t,m),$(t,f),$(f,d),$(d,g),$(g,h),$(f,x),$(f,b),$(b,v),$(v,T),$(f,E),$(f,w),$(w,I),$(I,y),$(f,U),$(f,S),$(S,z),$(z,H),$(f,A),$(f,D),$(D,R),$(R,C),$(f,P),$(f,W),$(W,Y),$(Y,V),$(f,B),$(f,N),$(N,q),$(q,G),$(f,J),$(f,M),$(M,F),$(F,K),$(f,O),$(f,Q),$(Q,X),$(X,Z),$(f,nn),$(f,an),$(an,sn),$(sn,tn),$(f,en),$(f,pn),$(pn,on),$(on,cn)},d(n){n&&c(a)}}}function O(n){let a,s,t,l,i,m,f,d,g,h,x,b,v,S,H,A,D,R,C,K,O,Q,X,Z,nn,an,sn,tn,en,pn,on,cn,ln,rn,un,kn,mn,$n,fn,dn,gn,hn,xn,bn,vn,Tn,En,wn,In,yn,Un,Ln,_n,jn,Sn,zn;return l=new z({props:{codeRaw:'<script>\n  import { TextInput } from "carbon-components-svelte";\n<\/script>\n\n<TextInput labelText="User name" placeholder="Enter user name..." />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span> <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter user name...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[P]},$$scope:{ctx:n}}}),g=new z({props:{codeRaw:'<script>\n  import { TextInput } from "carbon-components-svelte";\n<\/script>\n\n<TextInput\n  labelText="User name"\n  helperText="Your user name is associated with your email"\n  placeholder="Enter user name..."\n/>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span>\n  <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name<span class="token punctuation">"</span></span>\n  <span class="token attr-name">helperText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Your user name is associated with your email<span class="token punctuation">"</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter user name...<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n',$$slots:{default:[W]},$$scope:{ctx:n}}}),S=new z({props:{codeRaw:'<script>\n  import { TextInput } from "carbon-components-svelte";\n<\/script>\n\n<TextInput hideLabel labelText="User name" placeholder="Enter user name..." />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span> <span class="token attr-name">hideLabel</span> <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter user name...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[Y]},$$scope:{ctx:n}}}),C=new z({props:{codeRaw:'<script>\n  import { TextInput } from "carbon-components-svelte";\n<\/script>\n\n<TextInput light labelText="User name" placeholder="Enter user name..." />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span> <span class="token attr-name">light</span> <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter user name...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[V]},$$scope:{ctx:n}}}),Z=new z({props:{codeRaw:'<script>\n  import { TextInput } from "carbon-components-svelte";\n<\/script>\n\n<TextInput inline labelText="User name" placeholder="Enter user name..." />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span> <span class="token attr-name">inline</span> <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter user name...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[B]},$$scope:{ctx:n}}}),en=new z({props:{codeRaw:'<script>\n  import { TextInput } from "carbon-components-svelte";\n<\/script>\n\n<TextInput size="xl" labelText="User name" placeholder="Enter user name..." />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter user name...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[N]},$$scope:{ctx:n}}}),rn=new z({props:{codeRaw:'<script>\n  import { TextInput } from "carbon-components-svelte";\n<\/script>\n\n<TextInput size="sm" labelText="User name" placeholder="Enter user name..." />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter user name...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[q]},$$scope:{ctx:n}}}),fn=new z({props:{codeRaw:'<script>\n  import { TextInput } from "carbon-components-svelte";\n<\/script>\n\n<TextInput\n  invalid\n  invalidText="User name is already taken. Please try another."\n  labelText="User name"\n  placeholder="Enter user name..."\n/>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span>\n  <span class="token attr-name">invalid</span>\n  <span class="token attr-name">invalidText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name is already taken. Please try another.<span class="token punctuation">"</span></span>\n  <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name<span class="token punctuation">"</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter user name...<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n',$$slots:{default:[G]},$$scope:{ctx:n}}}),bn=new z({props:{codeRaw:'<script>\n  import { TextInput } from "carbon-components-svelte";\n<\/script>\n\n<TextInput disabled labelText="User name" placeholder="Enter user name..." />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInput</span> <span class="token attr-name">disabled</span> <span class="token attr-name">labelText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter user name...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[J]},$$scope:{ctx:n}}}),In=new z({props:{codeRaw:'<script>\n  import { TextInputSkeleton } from "carbon-components-svelte";\n<\/script>\n\n<TextInputSkeleton />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInputSkeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInputSkeleton</span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[M]},$$scope:{ctx:n}}}),jn=new z({props:{codeRaw:'<script>\n  import { TextInputSkeleton } from "carbon-components-svelte";\n<\/script>\n\n<TextInputSkeleton hideLabel />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TextInputSkeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextInputSkeleton</span> <span class="token attr-name">hideLabel</span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){a=e("h3"),s=L("Default"),t=u(),T(l.$$.fragment),i=u(),m=e("h3"),f=L("With helper text"),d=u(),T(g.$$.fragment),h=u(),x=e("h3"),b=L("Hidden label"),v=u(),T(S.$$.fragment),H=u(),A=e("h3"),D=L("Light variant"),R=u(),T(C.$$.fragment),K=u(),O=e("h3"),Q=L("Inline"),X=u(),T(Z.$$.fragment),nn=u(),an=e("h3"),sn=L("Extra-large size"),tn=u(),T(en.$$.fragment),pn=u(),on=e("h3"),cn=L("Small size"),ln=u(),T(rn.$$.fragment),un=u(),kn=e("h3"),mn=L("Invalid state"),$n=u(),T(fn.$$.fragment),dn=u(),gn=e("h3"),hn=L("Disabled state"),xn=u(),T(bn.$$.fragment),vn=u(),Tn=e("h3"),En=L("Skeleton"),wn=u(),T(In.$$.fragment),yn=u(),Un=e("h3"),Ln=L("Skeleton without label"),_n=u(),T(jn.$$.fragment),Sn=u(),this.h()},l(n){a=p(n,"H3",{id:!0});var e=o(a);s=_(e,"Default"),e.forEach(c),t=k(n),E(l.$$.fragment,n),i=k(n),m=p(n,"H3",{id:!0});var r=o(m);f=_(r,"With helper text"),r.forEach(c),d=k(n),E(g.$$.fragment,n),h=k(n),x=p(n,"H3",{id:!0});var u=o(x);b=_(u,"Hidden label"),u.forEach(c),v=k(n),E(S.$$.fragment,n),H=k(n),A=p(n,"H3",{id:!0});var $=o(A);D=_($,"Light variant"),$.forEach(c),R=k(n),E(C.$$.fragment,n),K=k(n),O=p(n,"H3",{id:!0});var T=o(O);Q=_(T,"Inline"),T.forEach(c),X=k(n),E(Z.$$.fragment,n),nn=k(n),an=p(n,"H3",{id:!0});var w=o(an);sn=_(w,"Extra-large size"),w.forEach(c),tn=k(n),E(en.$$.fragment,n),pn=k(n),on=p(n,"H3",{id:!0});var I=o(on);cn=_(I,"Small size"),I.forEach(c),ln=k(n),E(rn.$$.fragment,n),un=k(n),kn=p(n,"H3",{id:!0});var y=o(kn);mn=_(y,"Invalid state"),y.forEach(c),$n=k(n),E(fn.$$.fragment,n),dn=k(n),gn=p(n,"H3",{id:!0});var U=o(gn);hn=_(U,"Disabled state"),U.forEach(c),xn=k(n),E(bn.$$.fragment,n),vn=k(n),Tn=p(n,"H3",{id:!0});var L=o(Tn);En=_(L,"Skeleton"),L.forEach(c),wn=k(n),E(In.$$.fragment,n),yn=k(n),Un=p(n,"H3",{id:!0});var j=o(Un);Ln=_(j,"Skeleton without label"),j.forEach(c),_n=k(n),E(jn.$$.fragment,n),Sn=k(n),this.h()},h(){j(a,"id","default"),j(m,"id","with-helper-text"),j(x,"id","hidden-label"),j(A,"id","light-variant"),j(O,"id","inline"),j(an,"id","extra-large-size"),j(on,"id","small-size"),j(kn,"id","invalid-state"),j(gn,"id","disabled-state"),j(Tn,"id","skeleton"),j(Un,"id","skeleton-without-label")},m(n,e){r(n,a,e),$(a,s),r(n,t,e),w(l,n,e),r(n,i,e),r(n,m,e),$(m,f),r(n,d,e),w(g,n,e),r(n,h,e),r(n,x,e),$(x,b),r(n,v,e),w(S,n,e),r(n,H,e),r(n,A,e),$(A,D),r(n,R,e),w(C,n,e),r(n,K,e),r(n,O,e),$(O,Q),r(n,X,e),w(Z,n,e),r(n,nn,e),r(n,an,e),$(an,sn),r(n,tn,e),w(en,n,e),r(n,pn,e),r(n,on,e),$(on,cn),r(n,ln,e),w(rn,n,e),r(n,un,e),r(n,kn,e),$(kn,mn),r(n,$n,e),w(fn,n,e),r(n,dn,e),r(n,gn,e),$(gn,hn),r(n,xn,e),w(bn,n,e),r(n,vn,e),r(n,Tn,e),$(Tn,En),r(n,wn,e),w(In,n,e),r(n,yn,e),r(n,Un,e),$(Un,Ln),r(n,_n,e),w(jn,n,e),r(n,Sn,e),zn=!0},p(n,a){const s={};1&a&&(s.$$scope={dirty:a,ctx:n}),l.$set(s);const t={};1&a&&(t.$$scope={dirty:a,ctx:n}),g.$set(t);const e={};1&a&&(e.$$scope={dirty:a,ctx:n}),S.$set(e);const p={};1&a&&(p.$$scope={dirty:a,ctx:n}),C.$set(p);const o={};1&a&&(o.$$scope={dirty:a,ctx:n}),Z.$set(o);const c={};1&a&&(c.$$scope={dirty:a,ctx:n}),en.$set(c);const r={};1&a&&(r.$$scope={dirty:a,ctx:n}),rn.$set(r);const i={};1&a&&(i.$$scope={dirty:a,ctx:n}),fn.$set(i);const u={};1&a&&(u.$$scope={dirty:a,ctx:n}),bn.$set(u);const k={};1&a&&(k.$$scope={dirty:a,ctx:n}),In.$set(k);const m={};1&a&&(m.$$scope={dirty:a,ctx:n}),jn.$set(m)},i(n){zn||(I(l.$$.fragment,n),I(g.$$.fragment,n),I(S.$$.fragment,n),I(C.$$.fragment,n),I(Z.$$.fragment,n),I(en.$$.fragment,n),I(rn.$$.fragment,n),I(fn.$$.fragment,n),I(bn.$$.fragment,n),I(In.$$.fragment,n),I(jn.$$.fragment,n),zn=!0)},o(n){y(l.$$.fragment,n),y(g.$$.fragment,n),y(S.$$.fragment,n),y(C.$$.fragment,n),y(Z.$$.fragment,n),y(en.$$.fragment,n),y(rn.$$.fragment,n),y(fn.$$.fragment,n),y(bn.$$.fragment,n),y(In.$$.fragment,n),y(jn.$$.fragment,n),zn=!1},d(n){n&&c(a),n&&c(t),U(l,n),n&&c(i),n&&c(m),n&&c(d),U(g,n),n&&c(h),n&&c(x),n&&c(v),U(S,n),n&&c(H),n&&c(A),n&&c(R),U(C,n),n&&c(K),n&&c(O),n&&c(X),U(Z,n),n&&c(nn),n&&c(an),n&&c(tn),U(en,n),n&&c(pn),n&&c(on),n&&c(ln),U(rn,n),n&&c(un),n&&c(kn),n&&c($n),U(fn,n),n&&c(dn),n&&c(gn),n&&c(xn),U(bn,n),n&&c(vn),n&&c(Tn),n&&c(wn),U(In,n),n&&c(yn),n&&c(Un),n&&c(_n),U(jn,n),n&&c(Sn)}}}function Q(n){let a,s;return a=new S({props:{$$slots:{default:[O],aside:[K]},$$scope:{ctx:n}}}),{c(){T(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){w(a,n,t),s=!0},p(n,[s]){const t={};1&s&&(t.$$scope={dirty:s,ctx:n}),a.$set(t)},i(n){s||(I(a.$$.fragment,n),s=!0)},o(n){y(a.$$.fragment,n),s=!1},d(n){U(a,n)}}}export default class extends a{constructor(n){super(),s(this,n,null,Q,t,{})}}