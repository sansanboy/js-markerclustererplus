!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).MarkerClusterer=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=function(t){return t&&t.Math==Math&&t},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},o=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,u={f:a&&!s.call({1:2},1)?function(t){var e=a(this,t);return!!e&&e.enumerable}:s},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},c={}.toString,h=function(t){return c.call(t).slice(8,-1)},p="".split,f=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==h(t)?p.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},d=function(t){return f(g(t))},_=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t,e){if(!_(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!_(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!_(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!_(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},v={}.hasOwnProperty,y=function(t,e){return v.call(t,e)},x=n.document,S=_(x)&&_(x.createElement),b=!o&&!i((function(){return 7!=Object.defineProperty((t="div",S?x.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),M=Object.getOwnPropertyDescriptor,C={f:o?M:function(t,e){if(t=d(t),e=m(e,!0),b)try{return M(t,e)}catch(t){}if(y(t,e))return l(!u.f.call(t,e),t[e])}},E=function(t){if(!_(t))throw TypeError(String(t)+" is not an object");return t},k=Object.defineProperty,I={f:o?k:function(t,e,r){if(E(t),e=m(e,!0),E(r),b)try{return k(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},w=o?function(t,e,r){return I.f(t,e,l(1,r))}:function(t,e,r){return t[e]=r,t},O=function(t,e){try{w(n,t,e)}catch(r){n[t]=e}return e},A="__core-js_shared__",L=n[A]||O(A,{}),P=Function.toString;"function"!=typeof L.inspectSource&&(L.inspectSource=function(t){return P.call(t)});var T,z,R,j,B=L.inspectSource,Z=n.WeakMap,N="function"==typeof Z&&/native code/.test(B(Z)),D=e((function(t){(t.exports=function(t,e){return L[t]||(L[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),H=0,$=Math.random(),F=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++H+$).toString(36)},U=D("keys"),G={},V=n.WeakMap;if(N){var W=new V,X=W.get,K=W.has,q=W.set;T=function(t,e){return q.call(W,t,e),e},z=function(t){return X.call(W,t)||{}},R=function(t){return K.call(W,t)}}else{var Y=U[j="state"]||(U[j]=F(j));G[Y]=!0,T=function(t,e){return w(t,Y,e),e},z=function(t){return y(t,Y)?t[Y]:{}},R=function(t){return y(t,Y)}}var J={set:T,get:z,has:R,enforce:function(t){return R(t)?z(t):T(t,{})},getterFor:function(t){return function(e){var r;if(!_(e)||(r=z(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},Q=e((function(t){var e=J.get,r=J.enforce,i=String(String).split("String");(t.exports=function(t,e,o,s){var a=!!s&&!!s.unsafe,u=!!s&&!!s.enumerable,l=!!s&&!!s.noTargetGet;"function"==typeof o&&("string"!=typeof e||y(o,"name")||w(o,"name",e),r(o).source=i.join("string"==typeof e?e:"")),t!==n?(a?!l&&t[e]&&(u=!0):delete t[e],u?t[e]=o:w(t,e,o)):u?t[e]=o:O(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||B(this)}))})),tt=n,et=function(t){return"function"==typeof t?t:void 0},rt=function(t,e){return arguments.length<2?et(tt[t])||et(n[t]):tt[t]&&tt[t][e]||n[t]&&n[t][e]},nt=Math.ceil,it=Math.floor,ot=function(t){return isNaN(t=+t)?0:(t>0?it:nt)(t)},st=Math.min,at=function(t){return t>0?st(ot(t),9007199254740991):0},ut=Math.max,lt=Math.min,ct=function(t,e){var r=ot(t);return r<0?ut(r+e,0):lt(r,e)},ht=function(t){return function(e,r,n){var i,o=d(e),s=at(o.length),a=ct(n,s);if(t&&r!=r){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===r)return t||a||0;return!t&&-1}},pt={includes:ht(!0),indexOf:ht(!1)},ft=pt.indexOf,gt=function(t,e){var r,n=d(t),i=0,o=[];for(r in n)!y(G,r)&&y(n,r)&&o.push(r);for(;e.length>i;)y(n,r=e[i++])&&(~ft(o,r)||o.push(r));return o},dt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],_t=dt.concat("length","prototype"),mt={f:Object.getOwnPropertyNames||function(t){return gt(t,_t)}},vt={f:Object.getOwnPropertySymbols},yt=rt("Reflect","ownKeys")||function(t){var e=mt.f(E(t)),r=vt.f;return r?e.concat(r(t)):e},xt=function(t,e){for(var r=yt(e),n=I.f,i=C.f,o=0;o<r.length;o++){var s=r[o];y(t,s)||n(t,s,i(e,s))}},St=/#|\.prototype\./,bt=function(t,e){var r=Ct[Mt(t)];return r==kt||r!=Et&&("function"==typeof e?i(e):!!e)},Mt=bt.normalize=function(t){return String(t).replace(St,".").toLowerCase()},Ct=bt.data={},Et=bt.NATIVE="N",kt=bt.POLYFILL="P",It=bt,wt=C.f,Ot=function(t,e){var r,i,o,s,a,u=t.target,l=t.global,c=t.stat;if(r=l?n:c?n[u]||O(u,{}):(n[u]||{}).prototype)for(i in e){if(s=e[i],o=t.noTargetGet?(a=wt(r,i))&&a.value:r[i],!It(l?i:u+(c?".":"#")+i,t.forced)&&void 0!==o){if(typeof s==typeof o)continue;xt(s,o)}(t.sham||o&&o.sham)&&w(s,"sham",!0),Q(r,i,s,t)}},At=function(t,e){var r=[][t];return!!r&&i((function(){r.call(null,e||function(){throw 1},1)}))},Lt=Object.defineProperty,Pt={},Tt=function(t){throw t},zt=function(t,e){if(y(Pt,t))return Pt[t];e||(e={});var r=[][t],n=!!y(e,"ACCESSORS")&&e.ACCESSORS,s=y(e,0)?e[0]:Tt,a=y(e,1)?e[1]:void 0;return Pt[t]=!!r&&!i((function(){if(n&&!o)return!0;var t={length:-1};n?Lt(t,1,{enumerable:!0,get:Tt}):t[1]=1,r.call(t,s,a)}))},Rt=pt.indexOf,jt=[].indexOf,Bt=!!jt&&1/[1].indexOf(1,-0)<0,Zt=At("indexOf"),Nt=zt("indexOf",{ACCESSORS:!0,1:0});Ot({target:"Array",proto:!0,forced:Bt||!Zt||!Nt},{indexOf:function(t){return Bt?jt.apply(this,arguments)||0:Rt(this,t,arguments.length>1?arguments[1]:void 0)}});var Dt,Ht,$t=Array.isArray||function(t){return"Array"==h(t)},Ft=function(t,e,r){var n=m(e);n in t?I.f(t,n,l(0,r)):t[n]=r},Ut=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),Gt=Ut&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Vt=D("wks"),Wt=n.Symbol,Xt=Gt?Wt:Wt&&Wt.withoutSetter||F,Kt=function(t){return y(Vt,t)||(Ut&&y(Wt,t)?Vt[t]=Wt[t]:Vt[t]=Xt("Symbol."+t)),Vt[t]},qt=rt("navigator","userAgent")||"",Yt=n.process,Jt=Yt&&Yt.versions,Qt=Jt&&Jt.v8;Qt?Ht=(Dt=Qt.split("."))[0]+Dt[1]:qt&&(!(Dt=qt.match(/Edge\/(\d+)/))||Dt[1]>=74)&&(Dt=qt.match(/Chrome\/(\d+)/))&&(Ht=Dt[1]);var te=Ht&&+Ht,ee=Kt("species"),re=function(t){return te>=51||!i((function(){var e=[];return(e.constructor={})[ee]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},ne=re("slice"),ie=zt("slice",{ACCESSORS:!0,0:0,1:2}),oe=Kt("species"),se=[].slice,ae=Math.max;Ot({target:"Array",proto:!0,forced:!ne||!ie},{slice:function(t,e){var r,n,i,o=d(this),s=at(o.length),a=ct(t,s),u=ct(void 0===e?s:e,s);if($t(o)&&("function"!=typeof(r=o.constructor)||r!==Array&&!$t(r.prototype)?_(r)&&null===(r=r[oe])&&(r=void 0):r=void 0,r===Array||void 0===r))return se.call(o,a,u);for(n=new(void 0===r?Array:r)(ae(u-a,0)),i=0;a<u;a++,i++)a in o&&Ft(n,i,o[a]);return n.length=i,n}});var ue=function(t){return Object(g(t))},le=Kt("species"),ce=function(t,e){var r;return $t(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!$t(r.prototype)?_(r)&&null===(r=r[le])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},he=re("splice"),pe=zt("splice",{ACCESSORS:!0,0:0,1:2}),fe=Math.max,ge=Math.min,de=9007199254740991,_e="Maximum allowed length exceeded";Ot({target:"Array",proto:!0,forced:!he||!pe},{splice:function(t,e){var r,n,i,o,s,a,u=ue(this),l=at(u.length),c=ct(t,l),h=arguments.length;if(0===h?r=n=0:1===h?(r=0,n=l-c):(r=h-2,n=ge(fe(ot(e),0),l-c)),l+r-n>de)throw TypeError(_e);for(i=ce(u,n),o=0;o<n;o++)(s=c+o)in u&&Ft(i,o,u[s]);if(i.length=n,r<n){for(o=c;o<l-n;o++)a=o+r,(s=o+n)in u?u[a]=u[s]:delete u[a];for(o=l;o>l-n+r;o--)delete u[o-1]}else if(r>n)for(o=l-n;o>c;o--)a=o+r-1,(s=o+n-1)in u?u[a]=u[s]:delete u[a];for(o=0;o<r;o++)u[o+c]=arguments[o+2];return u.length=l-n+r,i}});var me={};me[Kt("toStringTag")]="z";var ve="[object z]"===String(me),ye=Kt("toStringTag"),xe="Arguments"==h(function(){return arguments}()),Se=ve?h:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ye))?r:xe?h(e):"Object"==(n=h(e))&&"function"==typeof e.callee?"Arguments":n},be=ve?{}.toString:function(){return"[object "+Se(this)+"]"};ve||Q(Object.prototype,"toString",be,{unsafe:!0});var Me=function(){var t=E(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Ce="toString",Ee=RegExp.prototype,ke=Ee.toString,Ie=i((function(){return"/a/b"!=ke.call({source:"a",flags:"b"})})),we=ke.name!=Ce;(Ie||we)&&Q(RegExp.prototype,Ce,(function(){var t=E(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in Ee)?Me.call(t):r)}),{unsafe:!0});var Oe=function(t,e){return(Oe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)};function Ae(t,e){function r(){this.constructor=t}Oe(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var Le=function(){return(Le=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},Pe=[].join,Te=f!=Object,ze=At("join",",");Ot({target:"Array",proto:!0,forced:Te||!ze},{join:function(t){return Pe.call(d(this),void 0===t?",":t)}});var Re=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},je=function(t){return function(e,r,n,i){Re(r);var o=ue(e),s=f(o),a=at(o.length),u=t?a-1:0,l=t?-1:1;if(n<2)for(;;){if(u in s){i=s[u],u+=l;break}if(u+=l,t?u<0:a<=u)throw TypeError("Reduce of empty array with no initial value")}for(;t?u>=0:a>u;u+=l)u in s&&(i=r(i,s[u],u,o));return i}},Be={left:je(!1),right:je(!0)}.left,Ze=At("reduce"),Ne=zt("reduce",{1:0});Ot({target:"Array",proto:!0,forced:!Ze||!Ne},{reduce:function(t){return Be(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var De=Object.keys||function(t){return gt(t,dt)};function He(t,e){return RegExp(t,e)}Ot({target:"Object",stat:!0,forced:i((function(){De(1)}))},{keys:function(t){return De(ue(t))}});var $e,Fe,Ue={UNSUPPORTED_Y:i((function(){var t=He("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:i((function(){var t=He("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},Ge=RegExp.prototype.exec,Ve=String.prototype.replace,We=Ge,Xe=($e=/a/,Fe=/b*/g,Ge.call($e,"a"),Ge.call(Fe,"a"),0!==$e.lastIndex||0!==Fe.lastIndex),Ke=Ue.UNSUPPORTED_Y||Ue.BROKEN_CARET,qe=void 0!==/()??/.exec("")[1];(Xe||qe||Ke)&&(We=function(t){var e,r,n,i,o=this,s=Ke&&o.sticky,a=Me.call(o),u=o.source,l=0,c=t;return s&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),c=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(u="(?: "+u+")",c=" "+c,l++),r=new RegExp("^(?:"+u+")",a)),qe&&(r=new RegExp("^"+u+"$(?!\\s)",a)),Xe&&(e=o.lastIndex),n=Ge.call(s?r:o,c),s?n?(n.input=n.input.slice(l),n[0]=n[0].slice(l),n.index=o.lastIndex,o.lastIndex+=n[0].length):o.lastIndex=0:Xe&&n&&(o.lastIndex=o.global?n.index+n[0].length:e),qe&&n&&n.length>1&&Ve.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n});var Ye=We;Ot({target:"RegExp",proto:!0,forced:/./.exec!==Ye},{exec:Ye});var Je=Kt("species"),Qe=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),tr="$0"==="a".replace(/./,"$0"),er=Kt("replace"),rr=!!/./[er]&&""===/./[er]("a","$0"),nr=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),ir=function(t,e,r,n){var o=Kt(t),s=!i((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=s&&!i((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[Je]=function(){return r},r.flags="",r[o]=/./[o]),r.exec=function(){return e=!0,null},r[o](""),!e}));if(!s||!a||"replace"===t&&(!Qe||!tr||rr)||"split"===t&&!nr){var u=/./[o],l=r(o,""[t],(function(t,e,r,n,i){return e.exec===Ye?s&&!i?{done:!0,value:u.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:tr,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:rr}),c=l[0],h=l[1];Q(String.prototype,t,c),Q(RegExp.prototype,o,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)})}n&&w(RegExp.prototype[o],"sham",!0)},or=function(t){return function(e,r){var n,i,o=String(g(e)),s=ot(r),a=o.length;return s<0||s>=a?t?"":void 0:(n=o.charCodeAt(s))<55296||n>56319||s+1===a||(i=o.charCodeAt(s+1))<56320||i>57343?t?o.charAt(s):n:t?o.slice(s,s+2):i-56320+(n-55296<<10)+65536}},sr={codeAt:or(!1),charAt:or(!0)}.charAt,ar=function(t,e,r){return e+(r?sr(t,e).length:1)},ur=function(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==h(t))throw TypeError("RegExp#exec called on incompatible receiver");return Ye.call(t,e)},lr=Math.max,cr=Math.min,hr=Math.floor,pr=/\$([$&'`]|\d\d?|<[^>]*>)/g,fr=/\$([$&'`]|\d\d?)/g;ir("replace",2,(function(t,e,r,n){var i=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,o=n.REPLACE_KEEPS_$0,s=i?"$":"$0";return[function(r,n){var i=g(this),o=null==r?void 0:r[t];return void 0!==o?o.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!i&&o||"string"==typeof n&&-1===n.indexOf(s)){var u=r(e,t,this,n);if(u.done)return u.value}var l=E(t),c=String(this),h="function"==typeof n;h||(n=String(n));var p=l.global;if(p){var f=l.unicode;l.lastIndex=0}for(var g=[];;){var d=ur(l,c);if(null===d)break;if(g.push(d),!p)break;""===String(d[0])&&(l.lastIndex=ar(c,at(l.lastIndex),f))}for(var _,m="",v=0,y=0;y<g.length;y++){d=g[y];for(var x=String(d[0]),S=lr(cr(ot(d.index),c.length),0),b=[],M=1;M<d.length;M++)b.push(void 0===(_=d[M])?_:String(_));var C=d.groups;if(h){var k=[x].concat(b,S,c);void 0!==C&&k.push(C);var I=String(n.apply(void 0,k))}else I=a(x,c,S,b,C,n);S>=v&&(m+=c.slice(v,S)+I,v=S+x.length)}return m+c.slice(v)}];function a(t,r,n,i,o,s){var a=n+t.length,u=i.length,l=fr;return void 0!==o&&(o=ue(o),l=pr),e.call(s,l,(function(e,s){var l;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(a);case"<":l=o[s.slice(1,-1)];break;default:var c=+s;if(0===c)return e;if(c>u){var h=hr(c/10);return 0===h?e:h<=u?void 0===i[h-1]?s.charAt(1):i[h-1]+s.charAt(1):e}l=i[c-1]}return void 0===l?"":l}))}}));var gr=Kt("match"),dr=Kt("species"),_r=[].push,mr=Math.min,vr=4294967295,yr=!i((function(){return!RegExp(vr,"y")}));ir("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n,i,o=String(g(this)),s=void 0===r?vr:r>>>0;if(0===s)return[];if(void 0===t)return[o];if(!_(n=t)||!(void 0!==(i=n[gr])?i:"RegExp"==h(n)))return e.call(o,t,s);for(var a,u,l,c=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,d=new RegExp(t.source,p+"g");(a=Ye.call(d,o))&&!((u=d.lastIndex)>f&&(c.push(o.slice(f,a.index)),a.length>1&&a.index<o.length&&_r.apply(c,a.slice(1)),l=a[0].length,f=u,c.length>=s));)d.lastIndex===a.index&&d.lastIndex++;return f===o.length?!l&&d.test("")||c.push(""):c.push(o.slice(f)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var i=g(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,r):n.call(String(i),e,r)},function(t,i){var o=r(n,t,this,i,n!==e);if(o.done)return o.value;var s=E(t),a=String(this),u=function(t,e){var r,n=E(t).constructor;return void 0===n||null==(r=E(n)[dr])?e:Re(r)}(s,RegExp),l=s.unicode,c=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(yr?"y":"g"),h=new u(yr?s:"^(?:"+s.source+")",c),p=void 0===i?vr:i>>>0;if(0===p)return[];if(0===a.length)return null===ur(h,a)?[a]:[];for(var f=0,g=0,d=[];g<a.length;){h.lastIndex=yr?g:0;var _,m=ur(h,yr?a:a.slice(g));if(null===m||(_=mr(at(h.lastIndex+(yr?0:g)),a.length))===f)g=ar(a,g,l);else{if(d.push(a.slice(f,g)),d.length===p)return d;for(var v=1;v<=m.length-1;v++)if(d.push(m[v]),d.length===p)return d;g=f=_}}return d.push(a.slice(f)),d}]}),!yr);var xr=function t(){!function(t,e){for(var r in e.prototype)t.prototype[r]=e.prototype[r]}(t,google.maps.OverlayView)};function Sr(t){return Object.keys(t).reduce((function(e,r){return t[r]&&e.push(r+":"+t[r]),e}),[]).join(";")}function br(t){return t?t+"px":void 0}var Mr=function(t){function e(e,r){var n=t.call(this)||this;return n.cluster_=e,n.styles_=r,n.center_=null,n.div_=null,n.sums_=null,n.visible_=!1,n.style=null,n.setMap(e.getMap()),n}return Ae(e,t),e.prototype.onAdd=function(){var t,e,r=this,n=this.cluster_.getMarkerClusterer(),i=google.maps.version.split("."),o=i[0],s=i[1],a=100*parseInt(o,10)+parseInt(s,10);this.div_=document.createElement("div"),this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",(function(){e=t})),google.maps.event.addDomListener(this.div_,"mousedown",(function(){t=!0,e=!1})),a>=332&&google.maps.event.addDomListener(this.div_,"touchstart",(function(t){t.stopPropagation()})),google.maps.event.addDomListener(this.div_,"click",(function(i){if(t=!1,!e){if(google.maps.event.trigger(n,"click",r.cluster_),google.maps.event.trigger(n,"clusterclick",r.cluster_),n.getZoomOnClick()){var o=n.getMaxZoom(),s=r.cluster_.getBounds();n.getMap().fitBounds(s),setTimeout((function(){n.getMap().fitBounds(s),null!==o&&n.getMap().getZoom()>o&&n.getMap().setZoom(o+1)}),100)}i.cancelBubble=!0,i.stopPropagation&&i.stopPropagation()}})),google.maps.event.addDomListener(this.div_,"mouseover",(function(){google.maps.event.trigger(n,"mouseover",r.cluster_)})),google.maps.event.addDomListener(this.div_,"mouseout",(function(){google.maps.event.trigger(n,"mouseout",r.cluster_)}))},e.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)},e.prototype.draw=function(){if(this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px"}},e.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},e.prototype.show=function(){this.div_&&(this.div_.className=this.className_,this.div_.style.cssText=this.createCss_(this.getPosFromLatLng_(this.center_)),this.div_.innerHTML=(this.style.url?this.getImageElementHtml():"")+this.getLabelDivHtml(),void 0===this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""),this.visible_=!0},e.prototype.getLabelDivHtml=function(){return'\n<div aria-label="'+this.cluster_.getMarkerClusterer().ariaLabelFn(this.sums_.text)+'" style="'+Sr({position:"absolute",top:br(this.anchorText_[0]),left:br(this.anchorText_[1]),color:this.style.textColor,"font-size":br(this.style.textSize),"font-family":this.style.fontFamily,"font-weight":this.style.fontWeight,"font-style":this.style.fontStyle,"text-decoration":this.style.textDecoration,"text-align":"center",width:br(this.style.width),"line-height":br(this.style.textLineHeight)})+'" tabindex="0">\n  <span aria-hidden="true">'+this.sums_.text+"</span>\n</div>\n"},e.prototype.getImageElementHtml=function(){var t=(this.style.backgroundPosition||"0 0").split(" "),e=parseInt(t[0].replace(/^\s+|\s+$/g,""),10),r=parseInt(t[1].replace(/^\s+|\s+$/g,""),10),n={};if(this.cluster_.getMarkerClusterer().getEnableRetinaIcons())n={width:br(this.style.width),height:br(this.style.height)};else{var i=[-1*r,-1*e+this.style.width,-1*r+this.style.height,-1*e];n={clip:"rect("+i[0]+"px, "+i[1]+"px, "+i[2]+"px, "+i[3]+"px)"}}var o=Sr(Le({position:"absolute",top:br(r),left:br(e)},n));return'<img alt="'+this.sums_.text+'" aria-hidden="true" src="'+this.style.url+'" style="'+o+'"/>'},e.prototype.useStyle=function(t){this.sums_=t;var e=Math.max(0,t.index-1);e=Math.min(this.styles_.length-1,e),this.style=this.styles_[e],this.anchorText_=this.style.anchorText||[0,0],this.anchorIcon_=this.style.anchorIcon||[Math.floor(this.style.height/2),Math.floor(this.style.width/2)],this.className_=this.cluster_.getMarkerClusterer().getClusterClass()+" "+(this.style.className||"cluster-"+e)},e.prototype.setCenter=function(t){this.center_=t},e.prototype.createCss_=function(t){return Sr({"z-index":""+this.cluster_.getMarkerClusterer().getZIndex(),top:br(t.y),left:br(t.x),width:br(this.style.width),height:br(this.style.height),cursor:"pointer",position:"absolute","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-o-user-select":"none","user-select":"none"})},e.prototype.getPosFromLatLng_=function(t){var e=this.getProjection().fromLatLngToDivPixel(t);return e.x=Math.floor(e.x-this.anchorIcon_[1]),e.y=Math.floor(e.y-this.anchorIcon_[0]),e},e}(xr),Cr=function(){function t(t){this.markerClusterer_=t,this.map_=this.markerClusterer_.getMap(),this.minClusterSize_=this.markerClusterer_.getMinimumClusterSize(),this.averageCenter_=this.markerClusterer_.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new Mr(this,this.markerClusterer_.getStyles())}return t.prototype.getSize=function(){return this.markers_.length},t.prototype.getMarkers=function(){return this.markers_},t.prototype.getCenter=function(){return this.center_},t.prototype.getMap=function(){return this.map_},t.prototype.getMarkerClusterer=function(){return this.markerClusterer_},t.prototype.getBounds=function(){for(var t=new google.maps.LatLngBounds(this.center_,this.center_),e=this.getMarkers(),r=0;r<e.length;r++)t.extend(e[r].getPosition());return t},t.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_},t.prototype.addMarker=function(t){if(this.isMarkerAlreadyAdded_(t))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,r=(this.center_.lat()*(e-1)+t.getPosition().lat())/e,n=(this.center_.lng()*(e-1)+t.getPosition().lng())/e;this.center_=new google.maps.LatLng(r,n),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();t.isAdded=!0,this.markers_.push(t);var i=this.markers_.length,o=this.markerClusterer_.getMaxZoom();if(null!==o&&this.map_.getZoom()>o)t.getMap()!==this.map_&&t.setMap(this.map_);else if(i<this.minClusterSize_)t.getMap()!==this.map_&&t.setMap(this.map_);else if(i===this.minClusterSize_)for(var s=0;s<i;s++)this.markers_[s].setMap(null);else t.setMap(null);return!0},t.prototype.isMarkerInClusterBounds=function(t){return this.bounds_.contains(t.getPosition())},t.prototype.calculateBounds_=function(){var t=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)},t.prototype.updateIcon=function(){var t=this.markers_.length,e=this.markerClusterer_.getMaxZoom();if(null!==e&&this.map_.getZoom()>e)this.clusterIcon_.hide();else if(t<this.minClusterSize_)this.clusterIcon_.hide();else{var r=this.markerClusterer_.getStyles().length,n=this.markerClusterer_.getCalculator()(this.markers_,r);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(n),this.clusterIcon_.show()}},t.prototype.isMarkerAlreadyAdded_=function(t){if(this.markers_.indexOf)return-1!==this.markers_.indexOf(t);for(var e=0;e<this.markers_.length;e++)if(t===this.markers_[e])return!0;return!1},t}(),Er=function(t,e,r){return void 0!==t[e]?t[e]:r};return function(t){function e(r,n,i){void 0===n&&(n=[]),void 0===i&&(i={});var o=t.call(this)||this;return o.options=i,o.markers_=[],o.clusters_=[],o.listeners_=[],o.activeMap_=null,o.ready_=!1,o.ariaLabelFn=o.options.ariaLabelFn||function(){return""},o.zIndex_=o.options.zIndex||google.maps.Marker.MAX_ZINDEX+1,o.gridSize_=o.options.gridSize||60,o.minClusterSize_=o.options.minimumClusterSize||2,o.maxZoom_=o.options.maxZoom||null,o.styles_=o.options.styles||[],o.title_=o.options.title||"",o.zoomOnClick_=Er(o.options,"zoomOnClick",!0),o.averageCenter_=Er(o.options,"averageCenter",!1),o.ignoreHidden_=Er(o.options,"ignoreHidden",!1),o.enableRetinaIcons_=Er(o.options,"enableRetinaIcons",!1),o.imagePath_=o.options.imagePath||e.IMAGE_PATH,o.imageExtension_=o.options.imageExtension||e.IMAGE_EXTENSION,o.imageSizes_=o.options.imageSizes||e.IMAGE_SIZES,o.calculator_=o.options.calculator||e.CALCULATOR,o.batchSize_=o.options.batchSize||e.BATCH_SIZE,o.batchSizeIE_=o.options.batchSizeIE||e.BATCH_SIZE_IE,o.clusterClass_=o.options.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(o.batchSize_=o.batchSizeIE_),o.setupStyles_(),o.addMarkers(n,!0),o.setMap(r),o}return Ae(e,t),e.prototype.onAdd=function(){var t=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.prevZoom_=this.getMap().getZoom(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",(function(){var e=t.getMap(),r=e.minZoom||0,n=Math.min(e.maxZoom||100,e.mapTypes[e.getMapTypeId()].maxZoom),i=Math.min(Math.max(t.getMap().getZoom(),r),n);t.prevZoom_!=i&&(t.prevZoom_=i,t.resetViewport_(!1))})),google.maps.event.addListener(this.getMap(),"idle",(function(){t.redraw_()}))]},e.prototype.onRemove=function(){for(var t=0;t<this.markers_.length;t++)this.markers_[t].getMap()!==this.activeMap_&&this.markers_[t].setMap(this.activeMap_);for(t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();this.clusters_=[];for(t=0;t<this.listeners_.length;t++)google.maps.event.removeListener(this.listeners_[t]);this.listeners_=[],this.activeMap_=null,this.ready_=!1},e.prototype.draw=function(){},e.prototype.setupStyles_=function(){if(!(this.styles_.length>0))for(var t=0;t<this.imageSizes_.length;t++){var r=this.imageSizes_[t];this.styles_.push(e.withDefaultStyle({url:this.imagePath_+(t+1)+"."+this.imageExtension_,height:r,width:r}))}},e.prototype.fitMapToMarkers=function(t){for(var e=this.getMarkers(),r=new google.maps.LatLngBounds,n=0;n<e.length;n++)!e[n].getVisible()&&this.getIgnoreHidden()||r.extend(e[n].getPosition());this.getMap().fitBounds(r,t)},e.prototype.getGridSize=function(){return this.gridSize_},e.prototype.setGridSize=function(t){this.gridSize_=t},e.prototype.getMinimumClusterSize=function(){return this.minClusterSize_},e.prototype.setMinimumClusterSize=function(t){this.minClusterSize_=t},e.prototype.getMaxZoom=function(){return this.maxZoom_},e.prototype.setMaxZoom=function(t){this.maxZoom_=t},e.prototype.getZIndex=function(){return this.zIndex_},e.prototype.setZIndex=function(t){this.zIndex_=t},e.prototype.getStyles=function(){return this.styles_},e.prototype.setStyles=function(t){this.styles_=t},e.prototype.getTitle=function(){return this.title_},e.prototype.setTitle=function(t){this.title_=t},e.prototype.getZoomOnClick=function(){return this.zoomOnClick_},e.prototype.setZoomOnClick=function(t){this.zoomOnClick_=t},e.prototype.getAverageCenter=function(){return this.averageCenter_},e.prototype.setAverageCenter=function(t){this.averageCenter_=t},e.prototype.getIgnoreHidden=function(){return this.ignoreHidden_},e.prototype.setIgnoreHidden=function(t){this.ignoreHidden_=t},e.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons_},e.prototype.setEnableRetinaIcons=function(t){this.enableRetinaIcons_=t},e.prototype.getImageExtension=function(){return this.imageExtension_},e.prototype.setImageExtension=function(t){this.imageExtension_=t},e.prototype.getImagePath=function(){return this.imagePath_},e.prototype.setImagePath=function(t){this.imagePath_=t},e.prototype.getImageSizes=function(){return this.imageSizes_},e.prototype.setImageSizes=function(t){this.imageSizes_=t},e.prototype.getCalculator=function(){return this.calculator_},e.prototype.setCalculator=function(t){this.calculator_=t},e.prototype.getBatchSizeIE=function(){return this.batchSizeIE_},e.prototype.setBatchSizeIE=function(t){this.batchSizeIE_=t},e.prototype.getClusterClass=function(){return this.clusterClass_},e.prototype.setClusterClass=function(t){this.clusterClass_=t},e.prototype.getMarkers=function(){return this.markers_},e.prototype.getTotalMarkers=function(){return this.markers_.length},e.prototype.getClusters=function(){return this.clusters_},e.prototype.getTotalClusters=function(){return this.clusters_.length},e.prototype.addMarker=function(t,e){this.pushMarkerTo_(t),e||this.redraw_()},e.prototype.addMarkers=function(t,e){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&this.pushMarkerTo_(t[r]);e||this.redraw_()},e.prototype.pushMarkerTo_=function(t){var e=this;t.getDraggable()&&google.maps.event.addListener(t,"dragend",(function(){e.ready_&&(t.isAdded=!1,e.repaint())})),t.isAdded=!1,this.markers_.push(t)},e.prototype.removeMarker=function(t,e){var r=this.removeMarker_(t);return!e&&r&&this.repaint(),r},e.prototype.removeMarkers=function(t,e){for(var r=!1,n=0;n<t.length;n++){var i=this.removeMarker_(t[n]);r=r||i}return!e&&r&&this.repaint(),r},e.prototype.removeMarker_=function(t){var e=-1;if(this.markers_.indexOf)e=this.markers_.indexOf(t);else for(var r=0;r<this.markers_.length;r++)if(t===this.markers_[r]){e=r;break}return-1!==e&&(t.setMap(null),this.markers_.splice(e,1),!0)},e.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=[]},e.prototype.repaint=function(){var t=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout((function(){for(var e=0;e<t.length;e++)t[e].remove()}),0)},e.prototype.getExtendedBounds=function(t){var e=this.getProjection(),r=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),n=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),i=e.fromLatLngToDivPixel(r);i.x+=this.gridSize_,i.y-=this.gridSize_;var o=e.fromLatLngToDivPixel(n);o.x-=this.gridSize_,o.y+=this.gridSize_;var s=e.fromDivPixelToLatLng(i),a=e.fromDivPixelToLatLng(o);return t.extend(s),t.extend(a),t},e.prototype.redraw_=function(){this.createClusters_(0)},e.prototype.resetViewport_=function(t){for(var e=0;e<this.clusters_.length;e++)this.clusters_[e].remove();this.clusters_=[];for(e=0;e<this.markers_.length;e++){var r=this.markers_[e];r.isAdded=!1,t&&r.setMap(null)}},e.prototype.distanceBetweenPoints_=function(t,e){var r=(e.lat()-t.lat())*Math.PI/180,n=(e.lng()-t.lng())*Math.PI/180,i=Math.sin(r/2)*Math.sin(r/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2);return 6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))},e.prototype.isMarkerInBounds_=function(t,e){return e.contains(t.getPosition())},e.prototype.addToClosestCluster_=function(t){for(var e=4e4,r=null,n=0;n<this.clusters_.length;n++){var i,o=(i=this.clusters_[n]).getCenter();if(o){var s=this.distanceBetweenPoints_(o,t.getPosition());s<e&&(e=s,r=i)}}r&&r.isMarkerInClusterBounds(t)?r.addMarker(t):((i=new Cr(this)).addMarker(t),this.clusters_.push(i))},e.prototype.createClusters_=function(t){var e=this;if(this.ready_){var r;0===t&&(google.maps.event.trigger(this,"clusteringbegin",this),void 0!==this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),r=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));for(var n=this.getExtendedBounds(r),i=Math.min(t+this.batchSize_,this.markers_.length),o=t;o<i;o++){var s=this.markers_[o];!s.isAdded&&this.isMarkerInBounds_(s,n)&&(!this.ignoreHidden_||this.ignoreHidden_&&s.getVisible())&&this.addToClosestCluster_(s)}if(i<this.markers_.length)this.timerRefStatic=window.setTimeout((function(){e.createClusters_(i)}),0);else{delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this);for(o=0;o<this.clusters_.length;o++)this.clusters_[o].updateIcon()}}},e.CALCULATOR=function(t,e){for(var r=0,n=t.length,i=n;0!==i;)i=Math.floor(i/10),r++;return r=Math.min(r,e),{text:n.toString(),index:r,title:""}},e.withDefaultStyle=function(t){return Le({textColor:"black",textSize:11,textDecoration:"none",textLineHeight:t.height,fontWeight:"bold",fontStyle:"normal",fontFamily:"Arial,sans-serif",backgroundPosition:"0 0"},t)},e.BATCH_SIZE=2e3,e.BATCH_SIZE_IE=500,e.IMAGE_PATH="../images/m",e.IMAGE_EXTENSION="png",e.IMAGE_SIZES=[53,56,66,78,90],e}(xr)}));
//# sourceMappingURL=markerclustererplus.umd.js.map
