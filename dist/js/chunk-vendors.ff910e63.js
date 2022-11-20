(self["webpackChunkplug_development"]=self["webpackChunkplug_development"]||[]).push([[998],{1001:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,u):[u]}return{exports:t,options:c}}n.d(e,{Z:function(){return r}})},9662:function(t,e,n){var r=n(614),i=n(6330),o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,o=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),o=n(3070).f,s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,o,s=n(3013),a=n(9781),u=n(7854),c=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),g=n(8052),m=n(3070).f,v=n(7976),y=n(9518),_=n(7674),w=n(5112),b=n(9711),E=n(9909),I=E.enforce,T=E.get,S=u.Int8Array,k=S&&S.prototype,C=u.Uint8ClampedArray,A=C&&C.prototype,O=S&&y(S),x=k&&y(k),R=Object.prototype,N=u.TypeError,D=w("toStringTag"),L=b("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",M=s&&!!_&&"Opera"!==f(u.opera),U=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},$=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(j,e)||h(F,e)},V=function(t){var e=y(t);if(l(e)){var n=T(e);return n&&h(n,P)?n[P]:V(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h(j,e)||h(F,e)},q=function(t){if(B(t))return t;throw N("Target is not a typed array")},z=function(t){if(c(t)&&(!_||v(O,t)))return t;throw N(d(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in j){var o=u[i];if(o&&h(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=e}catch(c){}}}x[t]&&!n||g(x,t,n?e:M&&k[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in j)if(i=u[r],i&&h(i,t))try{delete i[t]}catch(o){}if(O[t]&&!n)return;try{return g(O,t,n?e:M&&O[t]||e)}catch(o){}}for(r in j)i=u[r],!i||i[t]&&!n||g(i,t,e)}};for(r in j)i=u[r],o=i&&i.prototype,o?I(o)[P]=i:M=!1;for(r in F)i=u[r],o=i&&i.prototype,o&&(I(o)[P]=i);if((!M||!c(O)||O===Function.prototype)&&(O=function(){throw N("Incorrect invocation")},M))for(r in j)u[r]&&_(u[r],O);if((!M||!x||x===R)&&(x=O.prototype,M))for(r in j)u[r]&&_(u[r].prototype,x);if(M&&y(A)!==x&&_(A,x),a&&!h(x,D))for(r in U=!0,m(x,D,{get:function(){return l(this)?this[L]:void 0}}),j)u[r]&&p(u[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&L,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:V,isView:$,isTypedArray:B,TypedArray:O,TypedArrayPrototype:x}},1318:function(t,e,n){var r=n(5656),i=n(1400),o=n(6244),s=function(t){return function(e,n,s){var a,u=r(e),c=o(u),l=i(s,c);if(t&&n!=n){while(c>l)if(a=u[l++],a!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},9671:function(t,e,n){var r=n(9974),i=n(8361),o=n(7908),s=n(6244),a=function(t){var e=1==t;return function(n,a,u){var c,l,h=o(n),f=i(h),d=r(a,u),p=s(f);while(p-- >0)if(c=f[p],l=d(c,p,h),l)switch(t){case 0:return c;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!s(t,"length").writable)throw o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},4326:function(t,e,n){var r=n(84),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),u=Object,c="Arguments"==o(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=u(t),a))?n:c?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);t.exports=function(t,e,n){for(var a=i(e),u=s.f,c=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||u(t,h,c(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),o=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);t.exports=function(t,e,n,a){a||(a={});var u=a.enumerable,c=void 0!==a.name?a.name:e;if(r(n)&&o(n,c,a),a.global)u?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(u=!0):delete t[e]}catch(l){}u?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5117:function(t,e,n){"use strict";var r=n(6330),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326),i=n(7854);t.exports="process"==r(i.process)},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,o=n(7854),s=n(8113),a=o.process,u=o.Deno,c=a&&a.versions||u&&u.version,l=c&&c.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),i=Error,o=r("".replace),s=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(s);t.exports=function(t,e){if(u&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=o(t,a,"");return t}},2109:function(t,e,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),u=n(9920),c=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=c(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},9974:function(t,e,n){var r=n(1702),i=n(9662),o=n(4374),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),u=a&&"something"===function(){}.name,c=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:c}},84:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},1702:function(t,e,n){var r=n(4326),i=n(84);t.exports=function(t){if("Function"===r(t))return i(t)}},5005:function(t,e,n){var r=n(7854),i=n(614),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),o=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a(t,""):s(t)}:s},9587:function(t,e,n){var r=n(614),i=n(111),o=n(7674);t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},9909:function(t,e,n){var r,i,o,s=n(4811),a=n(7854),u=n(111),c=n(8880),l=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(t,e){if(_.has(t))throw g(p);return e.facade=t,_.set(t,e),e},i=function(t){return _.get(t)||{}},o=function(t){return _.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw g(p);return e.facade=t,c(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},o=function(t){return l(t,w)}}t.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(t,e){var n=u[a(t)];return n==l||n!=c&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=s.data={},c=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),o=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===o}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,u=n(2788),c=n(9909),l=c.enforce,h=c.get,f=Object.defineProperty,d=s&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||a&&t.name!==e)&&(s?f(t,"name",{value:e,configurable:!0}):t.name=e),d&&n&&o(n,"arity")&&t.length!==n.arity&&f(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=l(t);return o(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return i(this)&&h(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,i=n(9670),o=n(6048),s=n(748),a=n(3501),u=n(490),c=n(317),l=n(6200),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=c("iframe"),n="java"+p+":";return e.style.display="none",u.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var t=s.length;while(t--)delete w[d][s[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:o.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),o=n(3070),s=n(9670),a=n(5656),u=n(1956);e.f=r&&!i?Object.defineProperties:function(t,e){s(t);var n,r=a(e),i=u(e),c=i.length,l=0;while(c>l)o.f(t,n=i[l++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),u=TypeError,c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),u=n(4948),c=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=u(e),l)try{return h(t,e)}catch(n){}if(c(t,e))return s(!i(o.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),o=n(7908),s=n(6200),a=n(8544),u=s("IE_PROTO"),c=Object,l=c.prototype;t.exports=a?c.getPrototypeOf:function(t){var e=o(t);if(r(e,u))return e[u];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof c?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),u=r([].push);t.exports=function(t,e){var n,r=o(t),c=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&u(l,n);while(e.length>c)i(r,n=e[c++])&&(~s(l,n)||u(l,n));return l}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),o=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),u=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?u(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},261:function(t,e,n){var r,i,o,s,a=n(7854),u=n(2104),c=n(9974),l=n(614),h=n(2597),f=n(7293),d=n(490),p=n(206),g=n(317),m=n(8053),v=n(6833),y=n(5268),_=a.setImmediate,w=a.clearImmediate,b=a.process,E=a.Dispatch,I=a.Function,T=a.MessageChannel,S=a.String,k=0,C={},A="onreadystatechange";try{r=a.location}catch(D){}var O=function(t){if(h(C,t)){var e=C[t];delete C[t],e()}},x=function(t){return function(){O(t)}},R=function(t){O(t.data)},N=function(t){a.postMessage(S(t),r.protocol+"//"+r.host)};_&&w||(_=function(t){m(arguments.length,1);var e=l(t)?t:I(t),n=p(arguments,1);return C[++k]=function(){u(e,void 0,n)},i(k),k},w=function(t){delete C[t]},y?i=function(t){b.nextTick(x(t))}:E&&E.now?i=function(t){E.now(x(t))}:T&&!v?(o=new T,s=o.port2,o.port1.onmessage=R,i=c(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(N)?(i=N,a.addEventListener("message",R,!1)):i=A in g("script")?function(t){d.appendChild(g("script"))[A]=function(){d.removeChild(this),O(t)}}:function(t){setTimeout(x(t),0)}),t.exports={set:_,clear:w}},1400:function(t,e,n){var r=n(9303),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),u=n(5112),c=TypeError,l=u("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,u=s(t,l);if(u){if(void 0===e&&(e="default"),n=r(u,t,e),!i(n)||o(n))return n;throw c("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},4811:function(t,e,n){var r=n(7854),i=n(614),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},5112:function(t,e,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),u=n(3307),c=i("wks"),l=r.Symbol,h=l&&l["for"],f=u?l:l&&l.withoutSetter||s;t.exports=function(t){if(!o(c,t)||!a&&"string"!=typeof c[t]){var e="Symbol."+t;a&&o(l,t)?c[t]=l[t]:c[t]=u&&h?h(e):f(e)}return c[t]}},7287:function(t,e,n){"use strict";var r=n(2109),i=n(9671).findLastIndex,o=n(1223);r({target:"Array",proto:!0},{findLastIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findLastIndex")},7635:function(t,e,n){"use strict";var r=n(2109),i=n(9671).findLast,o=n(1223);r({target:"Array",proto:!0},{findLast:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findLast")},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),u=n(7293),c=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:c||l},{push:function(t){var e=i(this),n=o(e),r=arguments.length;a(n+r);for(var u=0;u<r;u++)e[n]=arguments[u],n++;return s(e,n),n}})},541:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),u=n(7207),c=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:c||l},{unshift:function(t){var e=i(this),n=o(e),r=arguments.length;if(r){u(n+r);var c=n;while(c--){var l=c+r;c in e?e[l]=e[c]:a(e,l)}for(var h=0;h<r;h++)e[h]=arguments[h]}return s(e,n+r)}})},4590:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLastIndex,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLastIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLast,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLast",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},1091:function(t,e,n){var r=n(2109),i=n(7854),o=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==o},{clearImmediate:o})},2801:function(t,e,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,u=n(2597),c=n(5787),l=n(9587),h=n(6277),f=n(3678),d=n(1060),p=n(9781),g=n(1913),m="DOMException",v=o("Error"),y=o(m),_=function(){c(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=v(e);return i.name=m,a(r,"stack",s(1,d(i.stack,1))),l(r,this,_),r},w=_.prototype=y.prototype,b="stack"in v(m),E="stack"in new y(1,2),I=y&&p&&Object.getOwnPropertyDescriptor(i,m),T=!!I&&!(I.writable&&I.configurable),S=b&&!T&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:y});var k=o(m),C=k.prototype;if(C.constructor!==k)for(var A in g||a(C,"constructor",s(1,k)),f)if(u(f,A)){var O=f[A],x=O.s;u(k,x)||a(k,x,s(6,O.c))}},4633:function(t,e,n){n(1091),n(2986)},2986:function(t,e,n){var r=n(2109),i=n(7854),o=n(261).set;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==o},{setImmediate:o})},1125:function(t,e,n){"use strict";n.d(e,{hJ:function(){return ne},Xb:function(){return pe},v0:function(){return Er},e5:function(){return ge},rh:function(){return vn},w7:function(){return ye}});n(7658);var r=n(223),i=n(7077),o=n(5168);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var a=n(7142);function u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=u,l=new r.LL("auth","Firebase",u()),h=new o.Yd("@firebase/auth");function f(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,...e){throw v(t,...e)}function p(t,...e){return v(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},c()),{[e]:n}),o=new r.LL("auth","Firebase",i);return o.create(e,{appName:t.name})}function m(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&d(t,"argument-error"),g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function y(t,e,...n){if(!t)throw v(e,...n)}function _(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function w(t,e){t||_(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function E(t){w(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;d(t,"already-initialized")}const o=n.initialize({options:e});return o}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(E);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function k(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function M(t,e,n,i,o={}){return U(t,o,(async()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),N.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},o))}))}async function U(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),e);try{const e=new $(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw V(t,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(t,a,s);d(t,a)}}catch(o){if(o instanceof r.ZR)throw o;d(t,"network-request-failed")}}async function j(t,e,n,r,i={}){const o=await M(t,e,n,r,i);return"mfaPendingCredential"in o&&d(t,"multi-factor-auth-required",{_serverResponse:o}),o}function F(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?R(t.config,i):`${t.config.apiScheme}://${i}`}class ${constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return M(t,"POST","/v1/accounts:delete",e)}async function q(t,e){return M(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),o=G(i);y(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:z(K(o.auth_time)),issuedAtTime:z(K(o.iat)),expirationTime:z(K(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function K(t){return 1e3*Number(t)}function G(t){var e;const[n,i,o]=t.split(".");if(void 0===n||void 0===i||void 0===o)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(i);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===(e=s)||void 0===e?void 0:e.toString()),null}}function W(t){const e=G(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&X(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Q(t,q(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?nt(o.providerUserInfo):[],a=et(t.providerData,s),u=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!u&&c,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new J(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function tt(t){const e=(0,r.m9)(t);await Z(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function et(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function nt(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t,e){const n=await U(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=F(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):W(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await rt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new it;return n&&(y("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Q(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return tt(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Q(this,B(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,u,c;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=e.createdAt)&&void 0!==u?u:void 0,v=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:I}=e;y(_&&I,t,"internal-error");const T=it.fromJSON(this.name,I);y("string"===typeof _,t,"internal-error"),ot(l,t.name),ot(h,t.name),y("boolean"===typeof w,t,"internal-error"),y("boolean"===typeof b,t,"internal-error"),ot(f,t.name),ot(d,t.name),ot(p,t.name),ot(g,t.name),ot(m,t.name),ot(v,t.name);const S=new st({uid:_,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new it;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}at.type="NONE";const ut=at;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new lt(E(ut),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||E(ut);const o=ct(n,t.config.apiKey,t.name);let s=null;for(const c of e)try{const e=await c._get(o);if(e){const n=st._fromJSON(t,e);c!==i&&(s=n),i=c;break}}catch(u){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(o)}catch(u){}}))),new lt(i,t,n)):new lt(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ft(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vt(e))return"Blackberry";if(yt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||pt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ft(t=(0,r.z$)()){return/firefox\//i.test(t)}function dt(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pt(t=(0,r.z$)()){return/crios\//i.test(t)}function gt(t=(0,r.z$)()){return/iemobile/i.test(t)}function mt(t=(0,r.z$)()){return/android/i.test(t)}function vt(t=(0,r.z$)()){return/blackberry/i.test(t)}function yt(t=(0,r.z$)()){return/webos/i.test(t)}function _t(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wt(t=(0,r.z$)()){var e;return _t(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,r.w1)()&&10===document.documentMode}function Et(t=(0,r.z$)()){return _t(t)||mt(t)||yt(t)||vt(t)||/windows phone/i.test(t)||gt(t)}function It(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=ht((0,r.z$)());break;case"Worker":n=`${ht((0,r.z$)())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(r){n.reverse();for(const t of n)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=r)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new At(this),this.idTokenSubscription=new At(this),this.beforeStateQueue=new St(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=E(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await lt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await Z(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(E(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&E(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[E(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Ct(t){return(0,r.m9)(t)}class At{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ot(t,e,n){const r=Ct(t);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=xt(e),{host:s,port:a}=Rt(e),u=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Dt()}function xt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rt(t){const e=xt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Nt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Nt(e)}}}function Nt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return _("not implemented")}_getIdTokenResponse(t){return _("not implemented")}_linkToIdToken(t,e){return _("not implemented")}_getReauthenticationResolver(t){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e){return M(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mt(t,e){return j(t,"POST","/v1/accounts:signInWithPassword",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ut(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}async function jt(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Lt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Ft(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Ft(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Mt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ut(t,{email:this._email,oobCode:this._password});default:d(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Pt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jt(t,{idToken:e,email:this._email,oobCode:this._password});default:d(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(t,e){return j(t,"POST","/v1/accounts:signInWithIdp",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="http://localhost";class Bt extends Lt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Bt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):d("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Bt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return $t(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,$t(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,$t(t,e)}buildRequest(){const t={requestUri:Vt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(t,e){return M(t,"POST","/v1/accounts:sendVerificationCode",P(t,e))}async function zt(t,e){return j(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e))}async function Ht(t,e){const n=await j(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const Kt={["USER_NOT_FOUND"]:"user-not-found"};async function Gt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return j(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,n),Kt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Lt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Wt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Wt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return zt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ht(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Gt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Wt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xt(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||e||t}class Yt{constructor(t){var e,n,i,o,s,a;const u=(0,r.zd)((0,r.pd)(t)),c=null!==(e=u["apiKey"])&&void 0!==e?e:null,l=null!==(n=u["oobCode"])&&void 0!==n?n:null,h=Qt(null!==(i=u["mode"])&&void 0!==i?i:null);y(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(o=u["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=u["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=u["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Xt(t);try{return new Yt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(){this.providerId=Jt.PROVIDER_ID}static credential(t,e){return Ft._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Yt.parseLink(e);return y(n,"argument-error"),Ft._fromEmailAndCode(t,n.code,n.tenantId)}}Jt.PROVIDER_ID="password",Jt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Jt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends Zt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends te{constructor(){super("facebook.com")}static credential(t){return Bt._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ee.credential(t.oauthAccessToken)}catch(e){return null}}}ee.FACEBOOK_SIGN_IN_METHOD="facebook.com",ee.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends te{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Bt._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ne.credential(e,n)}catch(r){return null}}}ne.GOOGLE_SIGN_IN_METHOD="google.com",ne.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re extends te{constructor(){super("github.com")}static credential(t){return Bt._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return re.credentialFromTaggedObject(t)}static credentialFromError(t){return re.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return re.credential(t.oauthAccessToken)}catch(e){return null}}}re.GITHUB_SIGN_IN_METHOD="github.com",re.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie extends te{constructor(){super("twitter.com")}static credential(t,e){return Bt._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ie.credentialFromTaggedObject(t)}static credentialFromError(t){return ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ie.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function oe(t,e){return j(t,"POST","/v1/accounts:signUp",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ie.TWITTER_SIGN_IN_METHOD="twitter.com",ie.PROVIDER_ID="twitter.com";class se{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),o=ae(n),s=new se({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ae(n);return new se({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ae(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ue.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ue(t,e,n,r)}}function ce(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ue._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(t,e,n=!1){const r=await Q(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return se._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function he(t,e,n=!1){var r;const{auth:i}=t,o="reauthenticate";try{const r=await Q(t,ce(i,o,e,t),n);y(r.idToken,i,"internal-error");const s=G(r.idToken);y(s,i,"internal-error");const{sub:a}=s;return y(t.uid===a,i,"user-mismatch"),se._forOperation(t,o,r)}catch(s){throw"auth/user-not-found"===(null===(r=s)||void 0===r?void 0:r.code)&&d(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(t,e,n=!1){const r="signIn",i=await ce(t,r,e),o=await se._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function de(t,e){return fe(Ct(t),e)}async function pe(t,e,n){const r=Ct(t),i=await oe(r,{returnSecureToken:!0,email:e,password:n}),o=await se._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ge(t,e,n){return de((0,r.m9)(t),Jt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,e,n,i){return(0,r.m9)(t).onIdTokenChanged(e,n,i)}function ve(t,e,n){return(0,r.m9)(t).beforeAuthStateChanged(e,n)}function ye(t){return(0,r.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(t,e){return M(t,"POST","/v2/accounts/mfaEnrollment:start",P(t,e))}function we(t,e){return M(t,"POST","/v2/accounts/mfaEnrollment:finalize",P(t,e))}new WeakMap;const be="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(be,"1"),this.storage.removeItem(be),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){const t=(0,r.z$)();return dt(t)||_t(t)}const Te=1e3,Se=10;class ke extends Ee{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ie()&&It(),this.fallbackToPolling=Et(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);bt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Se):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Te)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ke.type="LOCAL";const Ce=ke;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Ee{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ae.type="SESSION";const Oe=Ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Re(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async t=>t(e.origin,i))),a=await xe(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ne(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.receivers=[];class De{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const u=Ne("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===u)switch(e.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function Pe(t){Le().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return"undefined"!==typeof Le()["WorkerGlobalScope"]&&"function"===typeof Le()["importScripts"]}async function Ue(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function je(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Fe(){return Me()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="firebaseLocalStorageDb",Ve=1,Be="firebaseLocalStorage",qe="fbase_key";class ze{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function He(t,e){return t.transaction([Be],e?"readwrite":"readonly").objectStore(Be)}function Ke(){const t=indexedDB.deleteDatabase($e);return new ze(t).toPromise()}function Ge(){const t=indexedDB.open($e,Ve);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Be,{keyPath:qe})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Be)?e(n):(n.close(),await Ke(),e(await Ge()))}))}))}async function We(t,e,n){const r=He(t,!0).put({[qe]:e,value:n});return new ze(r).toPromise()}async function Qe(t,e){const n=He(t,!1).get(e),r=await new ze(n).toPromise();return void 0===r?null:r.value}function Xe(t,e){const n=He(t,!0).delete(e);return new ze(n).toPromise()}const Ye=800,Je=3;class Ze{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ge()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Je)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Me()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Re._getInstance(Fe()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ue(),!this.activeServiceWorker)return;this.sender=new De(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&je()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ge();return await We(t,be,"1"),await Xe(t,be),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>We(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Qe(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Xe(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=He(t,!1).getAll();return new ze(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Ye)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ze.type="LOCAL";const tn=Ze;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,e){return M(t,"POST","/v2/accounts/mfaSignIn:start",P(t,e))}function nn(t,e){return M(t,"POST","/v2/accounts/mfaSignIn:finalize",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function on(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",rn().appendChild(r)}))}function sn(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
sn("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an="recaptcha";async function un(t,e,n){var r;const i=await n.verify();try{let o;if(y("string"===typeof i,t,"argument-error"),y(n.type===an,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){y("enroll"===e.type,t,"internal-error");const n=await _e(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;y(n,t,"missing-multi-factor-info");const s=await en(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await qt(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{constructor(t){this.providerId=cn.PROVIDER_ID,this.auth=Ct(t)}verifyPhoneNumber(t,e){return un(this.auth,t,(0,r.m9)(e))}static credential(t,e){return Wt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return cn.credentialFromTaggedObject(e)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Wt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(t,e){return e?E(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn.PROVIDER_ID="phone",cn.PHONE_SIGN_IN_METHOD="phone";class hn extends Lt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $t(t,this._buildIdpRequest())}_linkToIdToken(t,e){return $t(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return $t(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function fn(t){return fe(t.auth,new hn(t),t.bypassAuthState)}function dn(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),he(n,new hn(t),t.bypassAuthState)}async function pn(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),le(n,new hn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fn;case"linkViaPopup":case"linkViaRedirect":return pn;case"reauthViaPopup":case"reauthViaRedirect":return dn;default:d(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new x(2e3,1e4);async function vn(t,e,n){const r=Ct(t);m(t,e,Zt);const i=ln(r,n),o=new yn(r,"signInViaPopup",e,i);return o.executeNotNull()}class yn extends gn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Ne();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,mn.get())};t()}}yn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n="pendingRedirect",wn=new Map;class bn extends gn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=wn.get(this.auth._key());if(!t){try{const e=await En(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}wn.set(this.auth._key(),t)}return this.bypassAuthState||wn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function En(t,e){const n=Sn(e),r=Tn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function In(t,e){wn.set(t._key(),e)}function Tn(t){return E(t._redirectPersistence)}function Sn(t){return ct(_n,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(t,e,n=!1){const r=Ct(t),i=ln(r,e),o=new bn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn=6e5;class An{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Rn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!xn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Cn&&this.cachedEventUids.clear(),this.cachedEventUids.has(On(t))}saveEventToCache(t){this.cachedEventUids.add(On(t)),this.lastProcessedEventTime=Date.now()}}function On(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function xn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Rn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t,e={}){return M(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ln=/^https?/;async function Pn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nn(t);for(const r of e)try{if(Mn(r))return}catch(n){}d(t,"unauthorized-domain")}function Mn(t){const e=S(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ln.test(n))return!1;if(Dn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new x(3e4,6e4);function jn(){const t=Le().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Fn(t){return new Promise(((e,n)=>{var r,i,o;function s(){jn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jn(),n(p(t,"network-request-failed"))},timeout:Un.get()})}if(null===(i=null===(r=Le().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Le().gapi)||void 0===o?void 0:o.load)){const e=sn("iframefcb");return Le()[e]=()=>{gapi.load?s():n(p(t,"network-request-failed"))},on(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw $n=null,t}))}let $n=null;function Vn(t){return $n=$n||Fn(t),$n}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new x(5e3,15e3),qn="__/auth/iframe",zn="emulator/auth/iframe",Hn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gn(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?R(e,zn):`https://${t.config.authDomain}/${qn}`,o={apiKey:e.apiKey,appName:t.name,v:i.Jn},s=Kn.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Wn(t){const e=await Vn(t),n=Le().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:Gn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hn,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),o=Le().setTimeout((()=>{r(i)}),Bn.get());function s(){Le().clearTimeout(o),n(e)}e.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xn=500,Yn=600,Jn="_blank",Zn="http://localhost";class tr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function er(t,e,n,i=Xn,o=Yn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const c=Object.assign(Object.assign({},Qn),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(u=pt(l)?Jn:n),ft(l)&&(e=e||Zn,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(wt(l)&&"_self"!==u)return nr(e||"",u),new tr(null);const f=window.open(e||"",u,h);y(f,t,"popup-blocked");try{f.focus()}catch(d){}return new tr(f)}function nr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="__/auth/handler",ir="emulator/auth/handler";function or(t,e,n,o,s,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(e instanceof Zt){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))u[t]=e}if(e instanceof te){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(u.scopes=t.join(","))}t.tenantId&&(u.tid=t.tenantId);const c=u;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];return`${sr(t)}?${(0,r.xO)(c).slice(1)}`}function sr({config:t}){return t.emulator?R(t,ir):`https://${t.authDomain}/${rr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="webStorageSupport";class ur{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oe,this._completeRedirectFn=kn,this._overrideRedirectResult=In}async _openPopup(t,e,n,r){var i;w(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=or(t,e,n,S(),r);return er(t,o,Ne())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Pe(or(t,e,n,S(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Wn(t),n=new An(t);return e.register("authEvent",(e=>{y(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(ar,{type:ar},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ar];void 0!==i&&e(!!i),d(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Pn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Et()||dt()||_t()}}const cr=ur;class lr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return _("unexpected MultiFactorSessionType")}}}class hr extends lr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new hr(t)}_finalizeEnroll(t,e,n){return we(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return nn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fr{constructor(){}static assertion(t){return hr._fromCredential(t)}}fr.FACTOR_ID="phone";var dr="@firebase/auth",pr="0.20.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vr(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((e,r)=>{y(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),y(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},a=new kt(e,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=Ct(t.getProvider("auth").getImmediate());return(t=>new gr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(dr,pr,mr(t)),(0,i.KN)(dr,pr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=300,_r=(0,r.Pz)("authIdTokenMaxAge")||yr;let wr=null;const br=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_r)return;const i=null===n||void 0===n?void 0:n.token;wr!==i&&(wr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Er(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=I(t,{popupRedirectResolver:cr,persistence:[tn,Ce,Oe]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const t=br(o);ve(n,t,(()=>t(n.currentUser))),me(n,(e=>t(e)))}const s=(0,r.q4)("auth");return s&&Ot(n,`http://${s}`),n}vr("Browser")},7425:function(t,e,n){"use strict";n.d(e,{ET:function(){return xh},Ab:function(){return Ph},vr:function(){return Lh},hJ:function(){return al},B$:function(){return ul},oe:function(){return Oh},JU:function(){return cl},QT:function(){return Th},PL:function(){return kh},ad:function(){return El},nP:function(){return Mh},Xo:function(){return lh},IO:function(){return sh},Bt:function(){return Dh},pl:function(){return Ch},TQ:function(){return fh},r7:function(){return Ah},ar:function(){return uh}});n(3408),n(4590),n(7658),n(2801);var r,i=n(7077),o=n(7142),s=n(5168),a=n(223),u=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),c={},l=l||{},h=u||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++v)}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function _(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:_,w.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function I(){this.s=this.s,this.o=this.o}var T=0;I.prototype.s=!1,I.prototype.na=function(){this.s||(this.s=!0,this.M(),0==T)||g(this)},I.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function k(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(d(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function x(t){return/^[\s\xa0]*$/.test(t)}var R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return t<e?-1:t>e?1:0}function D(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function L(t){return-1!=D().indexOf(t)}function P(t){return P[" "](t),t}function M(t){var e=Q;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}P[" "]=f;var U,j=L("Opera"),F=L("Trident")||L("MSIE"),$=L("Edge"),V=$||F,B=L("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),q=-1!=D().toLowerCase().indexOf("webkit")&&!L("Edge");function z(){var t=h.document;return t?t.documentMode:void 0}t:{var H="",K=function(){var t=D();return B?/rv:([^\);]+)(\)|;)/.exec(t):$?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):q?/WebKit\/(\S+)/.exec(t):j?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(K&&(H=K?K[1]:""),F){var G=z();if(null!=G&&G>parseFloat(H)){U=String(G);break t}}U=H}var W,Q={};function X(){return M((function(){let t=0;const e=R(String(U)).split("."),n=R("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=N(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||N(0==i[2].length,0==o[2].length)||N(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(h.document&&F){var Y=z();W=Y||(parseInt(U,10)||void 0)}else W=void 0;var J=W;function Z(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{P(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.X.h.call(this)}}E(Z,A);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++nt,this.ba=this.ea=!1}function it(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function st(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ct(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=S(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ba&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}ct.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=ht(t,e,r,i);return-1<s?(e=t[s],n||(e.ea=!1)):(e=new rt(e,this.src,o,!!r,i),e.ea=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),dt={};function pt(t,e,n,r,i){if(r&&r.once)return vt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)pt(t,e[o],n,r,i);return null}return n=Tt(n),t&&t[et]?t.N(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=p(i)?!!i.capture:!!i,a=Et(t);if(a||(t[ft]=a=new ct(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=mt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)O||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function mt(){function t(n){return e.call(t.src,t.listener,n)}const e=bt;return t}function vt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)vt(t,e[o],n,r,i);return null}return n=Tt(n),t&&t[et]?t.O(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!0,r,i)}function yt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);else r=p(r)?!!r.capture:!!r,n=Tt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=ht(o,n,r,i),-1<n&&(it(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,r,i)),(n=-1<t?e[t]:null)&&_t(n))}function _t(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[et])lt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Et(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):it(t)}}}function wt(t){return t in dt?dt[t]:dt[t]="on"+t}function bt(t,e){if(t.ba)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&_t(t),t=n.call(r,e)}return t}function Et(t){return t=t[ft],t instanceof ct?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function St(){I.call(this),this.i=new ct(this),this.P=this,this.I=null}function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var i=e;e=new A(r,t),ut(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Ct(s,r,!0,e)&&i}if(s=e.g=t,i=Ct(s,r,!0,e)&&i,i=Ct(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Ct(s,r,!1,e)&&i}function Ct(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,u=s.ha||s.src;s.ea&&lt(t.i,s),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}E(St,I),St.prototype[et]=!0,St.prototype.removeEventListener=function(t,e,n,r){yt(this,t,e,n,r)},St.prototype.M=function(){if(St.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=h.JSON.stringify;function Ot(){var t=jt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xt{constructor(){this.h=this.g=null}add(t,e){const n=Nt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Nt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Dt),(t=>t.reset()));class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){h.setTimeout((()=>{throw t}),0)}function Pt(t,e){Rt||Mt(),Ut||(Rt(),Ut=!0),jt.add(t,e)}function Mt(){var t=h.Promise.resolve(void 0);Rt=function(){t.then(Ft)}}var Ut=!1,jt=new xt;function Ft(){for(var t;t=Ot();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Nt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function $t(t,e){St.call(this),this.h=t||1,this.g=e||h,this.j=w(this.lb,this),this.l=Date.now()}function Vt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Bt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function qt(t){t.g=Bt((()=>{t.g=null,t.i&&(t.i=!1,qt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E($t,St),r=$t.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),kt(this,"tick"),this.ca&&(Vt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){$t.X.M.call(this),Vt(this),delete this.g};class zt extends I{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:qt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){I.call(this),this.h=t,this.g={}}E(Ht,I);var Kt=[];function Gt(t,e,n,r){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var i=0;i<n.length;i++){var o=pt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Wt(t){ot(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_t(t)}),t),t.g={}}function Qt(){this.g=!0}function Xt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+c+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Yt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Jt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(r?" "+r:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return At(n)}catch(a){return e}}Ht.prototype.M=function(){Ht.X.M.call(this),Wt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qt.prototype.Aa=function(){this.g=!1},Qt.prototype.info=function(){};var ee={},ne=null;function re(){return ne=ne||new St}function ie(t){A.call(this,ee.Pa,t)}function oe(t){const e=re();kt(e,new ie(e))}function se(t,e){A.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=re();kt(e,new se(e,t))}function ue(t,e){A.call(this,ee.Qa,t),this.size=e}function ce(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Pa="serverreachability",E(ie,A),ee.STAT_EVENT="statevent",E(se,A),ee.Qa="timingevent",E(ue,A);var le={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},he={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function fe(){}function de(t){return t.h||(t.h=t.i())}function pe(){}fe.prototype.h=null;var ge,me={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ve(){A.call(this,"d")}function ye(){A.call(this,"c")}function _e(){}function we(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ht(this),this.O=Ee,t=V?125:void 0,this.T=new $t(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}E(ve,A),E(ye,A),E(_e,fe),_e.prototype.g=function(){return new XMLHttpRequest},_e.prototype.i=function(){return{}},ge=new _e;var Ee=45e3,Ie={},Te={};function Se(t,e,n){t.K=1,t.v=Ge(Be(e)),t.s=n,t.P=!0,ke(t,null)}function ke(t,e){t.F=Date.now(),xe(t),t.A=Be(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),t.C=0,n=t.l.H,t.h=new be,t.g=hr(t.l,n?e:null,!t.s),0<t.N&&(t.L=new zt(w(t.La,t,t.g),t.N)),Gt(t.S,t.g,"readystatechange",t.ib),e=t.H?st(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oe(),Xt(t.j,t.u,t.A,t.m,t.U,t.s)}function Ce(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ae(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Oe(t,n),r==Te){4==e&&(t.o=4,ae(14),i=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ie){t.o=4,ae(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Jt(t.j,t.m,r,null),Pe(t,r)}Ce(t)&&r!=Te&&r!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(e),e.K=!0,ae(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),De(t))}function Oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Te:(n=Number(e.substring(n,r)),isNaN(n)?Ie:(r+=1,r+n>e.length?Te:(e=e.substr(r,n),t.C=r+n,e)))}function xe(t){t.V=Date.now()+t.O,Re(t,t.O)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ce(w(t.gb,t),e)}function Ne(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.G||t.I||sr(t.l,t)}function Le(t){Ne(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Vt(t.T),Wt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||gn(n.h,t)))if(!t.J&&gn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;or(n),Wn(n)}nr(n),ae(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ce(w(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(c){}n.ja=void 0}}else ur(n,11)}else if((t.J||n.g==t)&&or(n),!x(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=c[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=c[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(mn(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Ke(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=t;if(r.sa=lr(r,r.H?r.ka:null,r.V),s.J){vn(r.h,s);var a=s,u=r.J;u&&a.setTimeout(u),a.B&&(Ne(a),xe(a)),r.g=s}else er(r);0<n.i.length&&Xn(n)}else"stop"!=c[0]&&"close"!=c[0]||ur(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?ur(n,7):Gn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}oe(4)}catch(c){}}function Me(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(d(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function je(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ue(t),r=Me(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}r=we.prototype,r.setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==Vn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const l=Vn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>l)&&(3!=l||V||this.g&&(this.h.h||this.g.fa()||Bn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=f?3:2),Ne(this);var n=this.g.aa();this.Y=n;e:if(Ce(this)){var r=Bn(this.g);t="";var i=r.length,o=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),De(this);var s="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,Yt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ae(12),Le(this),De(this);break t}Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pe(this,n)}this.P?(Ae(this,l,s),V&&this.i&&3==l&&(Gt(this.S,this.T,"tick",this.hb),this.T.start())):(Jt(this.j,this.m,s,null),Pe(this,s)),4==l&&Le(this),this.i&&!this.I&&(4==l?sr(this.l,this):(this.i=!1,xe(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Le(this),De(this)}}}catch(l){}},r.hb=function(){if(this.g){var t=Vn(this.g),e=this.g.fa();this.C<e.length&&(Ne(this),Ae(this,t,e),this.i&&4!=t&&xe(this))}},r.cancel=function(){this.I=!0,Le(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Zt(this.j,this.A),2!=this.K&&(oe(),ae(17)),Le(this),this.o=2,De(this)):Re(this,this.V-t)};var Fe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $e(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ve(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ve){this.h=void 0!==e?e:t.h,qe(this,t.j),this.s=t.s,this.g=t.g,ze(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),He(this,n),this.o=t.o}else t&&(n=String(t).match(Fe))?(this.h=!!e,qe(this,n[1]||"",!0),this.s=We(n[2]||""),this.g=We(n[3]||"",!0),ze(this,n[4]),this.l=We(n[5]||"",!0),He(this,n[6]||"",!0),this.o=We(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function Be(t){return new Ve(t)}function qe(t,e,n){t.j=n?We(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function He(t,e,n){e instanceof nn?(t.i=e,cn(t.i,t.h)):(n||(e=Qe(e,tn)),t.i=new nn(e,t.h))}function Ke(t,e,n){t.i.set(e,n)}function Ge(t){return Ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function We(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qe(e,Ye,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Qe(e,Ye,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Qe(n,"/"==n.charAt(0)?Ze:Je,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qe(n,en)),t.join("")};var Ye=/[#\/\?@]/g,Je=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&$e(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function on(t,e){rn(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sn(t,e){return rn(t),e=un(t,e),t.g.has(e)}function an(t,e,n){on(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),k(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cn(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(on(this,e),an(this,n,t))}),t)),t.j=e}r=nn.prototype,r.add=function(t,e){rn(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.W=function(t){rn(this);let e=[];if("string"===typeof t)sn(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return rn(this),this.i=null,t=un(this,t),sn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};var ln=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||fn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function dn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function mn(t,e){t.g?t.g.add(e):t.h=e}function vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function yn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return k(t.i)}function _n(){}function wn(){this.g=new _n}function bn(t,e,n){const r=n||"";try{je(t,(function(t,n){let i=t;p(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(t,e){const n=new Qt;if(h.Image){const r=new Image;r.onload=b(In,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(In,n,r,"TestLoadImage: error",!1,e),r.onabort=b(In,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(In,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function In(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function Tn(t){this.l=t.ac||null,this.j=t.jb||!1}function Sn(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=kn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},_n.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},_n.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Tn,fe),Tn.prototype.g=function(){return new Sn(this.l,this.j)},Tn.prototype.i=function(t){return function(){return t}}({}),E(Sn,St);var kn=0;function Cn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,On(t)}function On(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Sn.prototype,r.open=function(t,e){if(this.readyState!=kn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,On(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=kn},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):On(this),3==this.readyState&&Cn(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,An(this))},r.Ua=function(t){this.g&&(this.response=t,An(this))},r.ga=function(){this.g&&An(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var xn=h.JSON.parse;function Rn(t){St.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nn,this.K=this.L=!1}E(Rn,St);var Nn="",Dn=/^https?$/i,Ln=["POST","PUT"];function Pn(t){return F&&X()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Un(t),Fn(t)}function Un(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}function jn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Vn(t)||2!=t.aa()))if(t.v&&4==Vn(t))Bt(t.Ha,0,t);else if(kt(t,"readystatechange"),4==Vn(t)){t.h=!1;try{const u=t.aa();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===u){var i=String(t.H).match(Fe)[1]||null;if(!i&&h.self&&h.self.location){var o=h.self.location.protocol;i=o.substr(0,o.length-1)}r=!Dn.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch(a){s=""}t.j=s+" ["+t.aa()+"]",Un(t)}}finally{Fn(t)}}}function Fn(t,e){if(t.g){$n(t);const r=t.g,i=t.C[0]?f:null;t.g=null,t.C=null,e||kt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function $n(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}function Bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Cr){return null}}function qn(t){let e="";return ot(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ke(t,e,n))}function Hn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kn(t){this.Ca=0,this.i=[],this.j=new Qt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Hn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Hn("baseRetryDelayMs",5e3,t),this.bb=Hn("retryDelaySeedMs",1e4,t),this.$a=Hn("forwardChannelMaxRetries",2,t),this.ta=Hn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(t&&t.concurrentRequestLimit),this.Fa=new wn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Gn(t){if(Qn(t),3==t.G){var e=t.U++,n=Be(t.F);Ke(n,"SID",t.I),Ke(n,"RID",e),Ke(n,"TYPE","terminate"),Zn(t,n),e=new we(t,t.j,e,void 0),e.K=2,e.v=Ge(Be(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hr(e.l,null),e.g.da(e.v)),e.F=Date.now(),xe(e)}cr(t)}function Wn(t){t.g&&(rr(t),t.g.cancel(),t.g=null)}function Qn(t){Wn(t),t.u&&(h.clearTimeout(t.u),t.u=null),or(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Xn(t){dn(t.h)||t.m||(t.m=!0,Pt(t.Ja,t),t.C=0)}function Yn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=ce(w(t.Ja,t,e),ar(t,t.C)),t.C++,!0))}function Jn(t,e){var n;n=e?e.m:t.U++;const r=Be(t.F);Ke(r,"SID",t.I),Ke(r,"RID",n),Ke(r,"AID",t.T),Zn(t,r),t.o&&t.s&&zn(r,t.o,t.s),n=new we(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=tr(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),mn(t.h,n),Se(n,r,e)}function Zn(t,e){t.ia&&ot(t.ia,(function(t,n){Ke(e,n,t)})),t.l&&je({},(function(t,n){Ke(e,n,t)}))}function tr(t,e,n){n=Math.min(t.i.length,n);var r=t.l?w(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const u=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),s=!1;else try{bn(u,t,"req"+n+"_")}catch(o){r&&r(u)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function er(t){t.g||t.u||(t.Z=1,Pt(t.Ia,t),t.A=0)}function nr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ce(w(t.Ia,t),ar(t,t.A)),t.A++,!0)}function rr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ir(t){t.g=new we(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Be(t.sa);Ke(e,"RID","rpc"),Ke(e,"SID",t.I),Ke(e,"CI",t.L?"0":"1"),Ke(e,"AID",t.T),Ke(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&zn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ge(Be(e)),n.s=null,n.P=!0,ke(n,t)}function or(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function sr(t,e){var n=null;if(t.g==e){or(t),rr(t),t.g=null;var r=2}else{if(!gn(t.h,e))return;n=e.D,vn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=re(),kt(r,new ue(r,n)),Xn(t)}else er(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==r&&Yn(t,e)||2==r&&nr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ur(t,5);break;case 4:ur(t,10);break;case 3:ur(t,6);break;default:ur(t,2)}}function ar(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ur(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=w(t.kb,t);n||(n=new Ve("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||qe(n,"https"),Ge(n)),En(n.toString(),r)}else ae(2);t.G=0,t.l&&t.l.va(e),cr(t),Qn(t)}function cr(t){if(t.G=0,t.la=[],t.l){const e=yn(t.h);0==e.length&&0==t.i.length||(C(t.la,e),C(t.la,t.i),t.h.i.length=0,k(t.i),t.i.length=0),t.l.ua()}}function lr(t,e,n){var r=n instanceof Ve?Be(n):new Ve(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),ze(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Ve(null,void 0);r&&qe(o,r),e&&(o.g=e),i&&ze(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.za,n&&e&&Ke(r,n,e),Ke(r,"VER",t.ma),Zn(t,r),r}function hr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Rn(new Tn({jb:!0})):new Rn(t.ra),e.Ka(t.H),e}function fr(){}function dr(){if(F&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function pr(t,e){St.call(this),this.g=new Kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vr(this)}function gr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mr(){ye.call(this),this.status=1}function vr(t){this.g=t}r=Rn.prototype,r.Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?de(this.u):de(ge),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void Mn(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=S(Ln,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$n(this),0<this.B&&((this.K=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=Bt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Mn(this,o)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),Fn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),Rn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?jn(this):this.fb())},r.fb=function(){jn(this)},r.aa=function(){try{return 2<Vn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),xn(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new we(this,this.j,t,void 0);let o=this.s;if(this.S&&(o?(o=st(o),ut(o,this.S)):o=this.S),null!==this.o||this.N||(i.H=o,o=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=tr(this,i,e),n=Be(this.F),Ke(n,"RID",t),Ke(n,"CVER",22),this.D&&Ke(n,"X-HTTP-Session-Id",this.D),Zn(this,n),o&&(this.N?e="headers="+encodeURIComponent(String(qn(o)))+"&"+e:this.o&&zn(n,this.o,o)),mn(this.h,i),this.Ya&&Ke(n,"TYPE","init"),this.O?(Ke(n,"$req",e),Ke(n,"SID","null"),i.Z=!0,Se(i,n,null)):Se(i,n,e),this.G=2}}else 3==this.G&&(t?Jn(this,t):0==this.i.length||dn(this.h)||Jn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ce(w(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ae(10),Wn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Wn(this),nr(this),ae(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},r=fr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},dr.prototype.g=function(t,e){return new pr(t,e)},E(pr,St),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=lr(t,null,t.V),Xn(t)},pr.prototype.close=function(){Gn(this.g)},pr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=At(t),t=n);e.i.push(new ln(e.ab++,t)),3==e.G&&Xn(e)},pr.prototype.M=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,pr.X.M.call(this)},E(gr,ve),E(mr,ye),E(vr,fr),vr.prototype.xa=function(){kt(this.g,"a")},vr.prototype.wa=function(t){kt(this.g,new gr(t))},vr.prototype.va=function(t){kt(this.g,new mr)},vr.prototype.ua=function(){kt(this.g,"b")},dr.prototype.createWebChannel=dr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",St.prototype.listen=St.prototype.N,Rn.prototype.listenOnce=Rn.prototype.O,Rn.prototype.getLastError=Rn.prototype.Oa,Rn.prototype.getLastErrorCode=Rn.prototype.Ea,Rn.prototype.getStatus=Rn.prototype.aa,Rn.prototype.getResponseJson=Rn.prototype.Sa,Rn.prototype.getResponseText=Rn.prototype.fa,Rn.prototype.send=Rn.prototype.da,Rn.prototype.setWithCredentials=Rn.prototype.Ka;var yr=c.createWebChannelTransport=function(){return new dr},_r=c.getStatEventTarget=function(){return re()},wr=c.ErrorCode=le,br=c.EventType=he,Er=c.Event=ee,Ir=c.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Tr=c.FetchXmlHttpFactory=Tn,Sr=c.WebChannel=pe,kr=c.XhrIo=Rn;const Cr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ar.UNAUTHENTICATED=new Ar(null),Ar.GOOGLE_CREDENTIALS=new Ar("google-credentials-uid"),Ar.FIRST_PARTY=new Ar("first-party-uid"),Ar.MOCK_USER=new Ar("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Or="9.13.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new s.Yd("@firebase/firestore");function Rr(){return xr.logLevel}function Nr(t,...e){if(xr.logLevel<=s["in"].DEBUG){const n=e.map(Pr);xr.debug(`Firestore (${Or}): ${t}`,...n)}}function Dr(t,...e){if(xr.logLevel<=s["in"].ERROR){const n=e.map(Pr);xr.error(`Firestore (${Or}): ${t}`,...n)}}function Lr(t,...e){if(xr.logLevel<=s["in"].WARN){const n=e.map(Pr);xr.warn(`Firestore (${Or}): ${t}`,...n)}}function Pr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t="Unexpected state"){const e=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+t;throw Dr(e),new Error(e)}function Ur(t,e){t||Mr()}function jr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $r extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ar.UNAUTHENTICATED)))}shutdown(){}}class zr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Hr{constructor(t){this.t=t,this.currentUser=Ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vr,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{Nr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Nr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vr)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Nr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ur("string"==typeof e.accessToken),new Br(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ur(null===t||"string"==typeof t),new Ar(t)}}class Kr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=Ar.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ur(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new Kr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Nr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Nr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Nr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):Nr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ur("string"==typeof t.token),this.A=t.token,new Wr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Xr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Jr(t,e){return t<e?-1:t>e?1:0}function Zr(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new $r(Fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new $r(Fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new $r(Fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $r(Fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ti.fromMillis(Date.now())}static fromDate(t){return ti.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ti(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Jr(this.nanoseconds,t.nanoseconds):Jr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ei(t)}static min(){return new ei(new ti(0,0))}static max(){return new ei(new ti(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,n){void 0===e?e=0:e>t.length&&Mr(),void 0===n?n=t.length-e:n>t.length-e&&Mr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ni.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ni?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ri extends ni{construct(t,e,n){return new ri(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new $r(Fr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ri(e)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oi extends ni{construct(t,e,n){return new oi(t,e,n)}static isValidIdentifier(t){return ii.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new oi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new $r(Fr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new $r(Fr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new $r(Fr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new $r(Fr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new oi(e)}static emptyPath(){return new oi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t){this.path=t}static fromPath(t){return new si(ri.fromString(t))}static fromName(t){return new si(ri.fromString(t).popFirst(5))}static empty(){return new si(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ri.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ri.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new si(new ri(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ai.UNKNOWN_ID=-1;function ui(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ei.fromTimestamp(1e9===r?new ti(n+1,0):new ti(n,r));return new li(i,si.empty(),e)}function ci(t){return new li(t.readTime,t.key,-1)}class li{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new li(ei.min(),si.empty(),-1)}static max(){return new li(ei.max(),si.empty(),-1)}}function hi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=si.comparator(t.documentKey,e.documentKey),0!==n?n:Jr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class di{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t){if(t.code!==Fr.FAILED_PRECONDITION||t.message!==fi)throw t;Nr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Mr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new gi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof gi?e:gi.resolve(e)}catch(t){return gi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):gi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):gi.reject(e)}static resolve(t){return new gi(((e,n)=>{e(t)}))}static reject(t){return new gi(((e,n)=>{n(t)}))}static waitFor(t){return new gi(((e,n)=>{let r=0,i=0,o=!1;t.forEach((t=>{++r,t.next((()=>{++i,o&&i===r&&e()}),(t=>n(t)))})),o=!0,i===r&&e()}))}static or(t){let e=gi.resolve(!1);for(const n of t)e=e.next((t=>t?gi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new gi(((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{o[u]=t,++s,s===i&&n(o)}),(t=>r(t)))}}))}static doWhile(t,e){return new gi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi.at=-1;class bi{constructor(t,e){this.comparator=t,this.root=e||Ii.EMPTY}insert(t,e){return new bi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ii.BLACK,null,null))}remove(t){return new bi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ii.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ei(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ei(this.root,t,this.comparator,!0)}}class Ei{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ii{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ii.RED,this.left=null!=r?r:Ii.EMPTY,this.right=null!=i?i:Ii.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ii(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ii.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ii.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ii.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ii.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mr();if(this.right.isRed())throw Mr();const t=this.left.check();if(t!==this.right.check())throw Mr();return t+(this.isRed()?0:1)}}Ii.EMPTY=null,Ii.RED=!0,Ii.BLACK=!1,Ii.EMPTY=new class{constructor(){this.size=0}get key(){throw Mr()}get value(){throw Mr()}get color(){throw Mr()}get left(){throw Mr()}get right(){throw Mr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ii(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ti{constructor(t){this.comparator=t,this.data=new bi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Si(this.data.getIterator())}getIteratorFrom(t){return new Si(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ti))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ti(this.comparator);return e.data=t,e}}class Si{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{constructor(t){this.fields=t,t.sort(oi.comparator)}static empty(){return new ki([])}unionWith(t){let e=new Ti(oi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ki(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ci{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ci(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ci(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Jr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ci.EMPTY_BYTE_STRING=new Ci("");const Ai=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(t){if(Ur(!!t),"string"==typeof t){let e=0;const n=Ai.exec(t);if(Ur(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xi(t.seconds),nanos:xi(t.nanos)}}function xi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ri(t){return"string"==typeof t?Ci.fromBase64String(t):Ci.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Di(t){const e=t.mapValue.fields.__previous_value__;return Ni(e)?Di(e):e}function Li(t){const e=Oi(t.mapValue.fields.__local_write_time__.timestampValue);return new ti(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Mi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Mi&&t.projectId===this.projectId&&t.database===this.database}}function Ui(t){return null==t}function ji(t){return 0===t&&1/t==-1/0}function Fi(t){return"number"==typeof t&&Number.isInteger(t)&&!ji(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ni(t)?4:eo(t)?9007199254740991:10:Mr()}function Bi(t,e){if(t===e)return!0;const n=Vi(t);if(n!==Vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Li(t).isEqual(Li(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Oi(t.timestampValue),r=Oi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ri(t.bytesValue).isEqual(Ri(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return xi(t.geoPointValue.latitude)===xi(e.geoPointValue.latitude)&&xi(t.geoPointValue.longitude)===xi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return xi(t.integerValue)===xi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=xi(t.doubleValue),r=xi(e.doubleValue);return n===r?ji(n)===ji(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],Bi);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(yi(n)!==yi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Bi(n[i],r[i])))return!1;return!0}(t,e);default:return Mr()}}function qi(t,e){return void 0!==(t.values||[]).find((t=>Bi(t,e)))}function zi(t,e){if(t===e)return 0;const n=Vi(t),r=Vi(e);if(n!==r)return Jr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Jr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=xi(t.integerValue||t.doubleValue),r=xi(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Hi(t.timestampValue,e.timestampValue);case 4:return Hi(Li(t),Li(e));case 5:return Jr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ri(t),r=Ri(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=Jr(n[i],r[i]);if(0!==t)return t}return Jr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Jr(xi(t.latitude),xi(e.latitude));return 0!==n?n:Jr(xi(t.longitude),xi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=zi(n[i],r[i]);if(t)return t}return Jr(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===$i.mapValue&&e===$i.mapValue)return 0;if(t===$i.mapValue)return 1;if(e===$i.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=Jr(r[s],o[s]);if(0!==t)return t;const e=zi(n[r[s]],i[o[s]]);if(0!==e)return e}return Jr(r.length,o.length)}(t.mapValue,e.mapValue);default:throw Mr()}}function Hi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Jr(t,e);const n=Oi(t),r=Oi(e),i=Jr(n.seconds,r.seconds);return 0!==i?i:Jr(n.nanos,r.nanos)}function Ki(t){return Gi(t)}function Gi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Oi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ri(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,si.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Gi(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Gi(t.fields[i])}`;return n+"}"}(t.mapValue):Mr();var e,n}function Wi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qi(t){return!!t&&"integerValue"in t}function Xi(t){return!!t&&"arrayValue"in t}function Yi(t){return!!t&&"nullValue"in t}function Ji(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zi(t){return!!t&&"mapValue"in t}function to(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _i(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=to(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=to(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eo(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(t){this.value=t}static empty(){return new no({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Zi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=to(e)}setAll(t){let e=oi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=to(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Zi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Zi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){_i(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new no(to(this.value))}}function ro(t){const e=[];return _i(t.fields,((t,n)=>{const r=new oi([t]);if(Zi(n)){const t=ro(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ki(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class io{constructor(t,e,n,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new io(t,0,ei.min(),ei.min(),no.empty(),0)}static newFoundDocument(t,e,n){return new io(t,1,e,ei.min(),n,0)}static newNoDocument(t,e){return new io(t,2,e,ei.min(),no.empty(),0)}static newUnknownDocument(t,e){return new io(t,3,e,ei.min(),no.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=no.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=no.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof io&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new io(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ht=null}}function so(t,e=null,n=[],r=[],i=null,o=null,s=null){return new oo(t,e,n,r,i,o,s)}function ao(t){const e=jr(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Ki(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ki(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ki(t))).join(",")),e.ht=t}return e.ht}function uo(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ki(e.value)}`;var e})).join(", ")}]`),Ui(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ki(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ki(t))).join(",")),`Target(${e})`}function co(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Io(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Bi(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!So(t.startAt,e.startAt)&&So(t.endAt,e.endAt)}function lo(t){return si.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ho extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new fo(t,e,n):"array-contains"===e?new vo(t,n):"in"===e?new yo(t,n):"not-in"===e?new _o(t,n):"array-contains-any"===e?new wo(t,n):new ho(t,e,n)}static lt(t,e,n){return"in"===e?new po(t,n):new go(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(zi(e,this.value)):null!==e&&Vi(this.value)===Vi(e)&&this.ft(zi(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Mr()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fo extends ho{constructor(t,e,n){super(t,e,n),this.key=si.fromName(n.referenceValue)}matches(t){const e=si.comparator(t.key,this.key);return this.ft(e)}}class po extends ho{constructor(t,e){super(t,"in",e),this.keys=mo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class go extends ho{constructor(t,e){super(t,"not-in",e),this.keys=mo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function mo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>si.fromName(t.referenceValue)))}class vo extends ho{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xi(e)&&qi(e.arrayValue,this.value)}}class yo extends ho{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&qi(this.value.arrayValue,e)}}class _o extends ho{constructor(t,e){super(t,"not-in",e)}matches(t){if(qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!qi(this.value.arrayValue,e)}}class wo extends ho{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>qi(this.value.arrayValue,t)))}}class bo{constructor(t,e){this.position=t,this.inclusive=e}}class Eo{constructor(t,e="asc"){this.field=t,this.dir=e}}function Io(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function To(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?si.comparator(si.fromName(s.referenceValue),n.key):zi(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function So(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bi(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Co(t,e,n,r,i,o,s,a){return new ko(t,e,n,r,i,o,s,a)}function Ao(t){return new ko(t)}function Oo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function xo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ro(t){for(const e of t.filters)if(e.dt())return e.field;return null}function No(t){return null!==t.collectionGroup}function Do(t){const e=jr(t);if(null===e._t){e._t=[];const t=Ro(e),n=xo(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new Eo(t)),e._t.push(new Eo(oi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Eo(oi.keyField(),t))}}}return e._t}function Lo(t){const e=jr(t);if(!e.wt)if("F"===e.limitType)e.wt=so(e.path,e.collectionGroup,Do(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Do(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Eo(i.field,e))}const n=e.endAt?new bo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new bo(e.startAt.position,e.startAt.inclusive):null;e.wt=so(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function Po(t,e,n){return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mo(t,e){return co(Lo(t),Lo(e))&&t.limitType===e.limitType}function Uo(t){return`${ao(Lo(t))}|lt:${t.limitType}`}function jo(t){return`Query(target=${uo(Lo(t))}; limitType=${t.limitType})`}function Fo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):si.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=To(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Do(t),e))&&!(t.endAt&&!function(t,e,n){const r=To(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Do(t),e))}(t,e)}function $o(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vo(t){return(e,n)=>{let r=!1;for(const i of Do(t)){const t=Bo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Bo(t,e,n){const r=t.field.isKeyField()?si.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?zi(r,i):Mr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Mr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(e)?"-0":e}}function zo(t){return{integerValue:""+t}}function Ho(t,e){return Fi(e)?zo(e):qo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this._=void 0}}function Go(t,e,n){return t instanceof Xo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Yo?Jo(t,e):t instanceof Zo?ts(t,e):function(t,e){const n=Qo(t,e),r=ns(n)+ns(t.yt);return Qi(n)&&Qi(t.yt)?zo(r):qo(t.It,r)}(t,e)}function Wo(t,e,n){return t instanceof Yo?Jo(t,e):t instanceof Zo?ts(t,e):n}function Qo(t,e){return t instanceof es?Qi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Xo extends Ko{}class Yo extends Ko{constructor(t){super(),this.elements=t}}function Jo(t,e){const n=rs(e);for(const r of t.elements)n.some((t=>Bi(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Zo extends Ko{constructor(t){super(),this.elements=t}}function ts(t,e){let n=rs(e);for(const r of t.elements)n=n.filter((t=>!Bi(t,r)));return{arrayValue:{values:n}}}class es extends Ko{constructor(t,e){super(),this.It=t,this.yt=e}}function ns(t){return xi(t.integerValue||t.doubleValue)}function rs(t){return Xi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e){this.field=t,this.transform=e}}function os(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Yo&&e instanceof Yo||t instanceof Zo&&e instanceof Zo?Zr(t.elements,e.elements,Bi):t instanceof es&&e instanceof es?Bi(t.yt,e.yt):t instanceof Xo&&e instanceof Xo}(t.transform,e.transform)}class ss{constructor(t,e){this.version=t,this.transformResults=e}}class as{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new as}static exists(t){return new as(void 0,t)}static updateTime(t){return new as(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function us(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class cs{}function ls(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ws(t.key,as.none()):new gs(t.key,t.data,as.none());{const n=t.data,r=no.empty();let i=new Ti(oi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ms(t.key,r,new ki(i.toArray()),as.none())}}function hs(t,e,n){t instanceof gs?function(t,e,n){const r=t.value.clone(),i=ys(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ms?function(t,e,n){if(!us(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ys(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(vs(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function fs(t,e,n,r){return t instanceof gs?function(t,e,n,r){if(!us(t.precondition,e))return n;const i=t.value.clone(),o=_s(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ms?function(t,e,n,r){if(!us(t.precondition,e))return n;const i=_s(t.fieldTransforms,r,e),o=e.data;return o.setAll(vs(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return us(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ds(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Qo(r.transform,t||null);null!=i&&(null===n&&(n=no.empty()),n.set(r.field,i))}return n||null}function ps(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zr(t,e,((t,e)=>os(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gs extends cs{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ms extends cs{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vs(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ys(t,e,n){const r=new Map;Ur(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Wo(s,a,n[i]))}return r}function _s(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Go(t,o,e))}return r}class ws extends cs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bs extends cs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Is,Ts;function Ss(t){switch(t){default:return Mr();case Fr.CANCELLED:case Fr.UNKNOWN:case Fr.DEADLINE_EXCEEDED:case Fr.RESOURCE_EXHAUSTED:case Fr.INTERNAL:case Fr.UNAVAILABLE:case Fr.UNAUTHENTICATED:return!1;case Fr.INVALID_ARGUMENT:case Fr.NOT_FOUND:case Fr.ALREADY_EXISTS:case Fr.PERMISSION_DENIED:case Fr.FAILED_PRECONDITION:case Fr.ABORTED:case Fr.OUT_OF_RANGE:case Fr.UNIMPLEMENTED:case Fr.DATA_LOSS:return!0}}function ks(t){if(void 0===t)return Dr("GRPC error has no .code"),Fr.UNKNOWN;switch(t){case Is.OK:return Fr.OK;case Is.CANCELLED:return Fr.CANCELLED;case Is.UNKNOWN:return Fr.UNKNOWN;case Is.DEADLINE_EXCEEDED:return Fr.DEADLINE_EXCEEDED;case Is.RESOURCE_EXHAUSTED:return Fr.RESOURCE_EXHAUSTED;case Is.INTERNAL:return Fr.INTERNAL;case Is.UNAVAILABLE:return Fr.UNAVAILABLE;case Is.UNAUTHENTICATED:return Fr.UNAUTHENTICATED;case Is.INVALID_ARGUMENT:return Fr.INVALID_ARGUMENT;case Is.NOT_FOUND:return Fr.NOT_FOUND;case Is.ALREADY_EXISTS:return Fr.ALREADY_EXISTS;case Is.PERMISSION_DENIED:return Fr.PERMISSION_DENIED;case Is.FAILED_PRECONDITION:return Fr.FAILED_PRECONDITION;case Is.ABORTED:return Fr.ABORTED;case Is.OUT_OF_RANGE:return Fr.OUT_OF_RANGE;case Is.UNIMPLEMENTED:return Fr.UNIMPLEMENTED;case Is.DATA_LOSS:return Fr.DATA_LOSS;default:return Mr()}}(Ts=Is||(Is={}))[Ts.OK=0]="OK",Ts[Ts.CANCELLED=1]="CANCELLED",Ts[Ts.UNKNOWN=2]="UNKNOWN",Ts[Ts.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ts[Ts.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ts[Ts.NOT_FOUND=5]="NOT_FOUND",Ts[Ts.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ts[Ts.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ts[Ts.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ts[Ts.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ts[Ts.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ts[Ts.ABORTED=10]="ABORTED",Ts[Ts.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ts[Ts.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ts[Ts.INTERNAL=13]="INTERNAL",Ts[Ts.UNAVAILABLE=14]="UNAVAILABLE",Ts[Ts.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){_i(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return wi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new bi(si.comparator);function Os(){return As}const xs=new bi(si.comparator);function Rs(...t){let e=xs;for(const n of t)e=e.insert(n.key,n);return e}function Ns(t){let e=xs;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ds(){return Ps()}function Ls(){return Ps()}function Ps(){return new Cs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ms=new bi(si.comparator),Us=new Ti(si.comparator);function js(...t){let e=Us;for(const n of t)e=e.add(n);return e}const Fs=new Ti(Jr);function $s(){return Fs}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Bs.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Vs(ei.min(),r,$s(),Os(),js())}}class Bs{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Bs(n,e,js(),js(),js())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,e,n,r){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=r}}class zs{constructor(t,e){this.targetId=t,this.At=e}}class Hs{constructor(t,e,n=Ci.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ks{constructor(){this.Rt=0,this.bt=Qs(),this.Pt=Ci.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=js(),e=js(),n=js();return this.bt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Mr()}})),new Bs(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Qs()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Gs{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Os(),this.qt=Ws(),this.Kt=new Ti(Jr)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:Mr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,r=this.Xt(e);if(r){const t=r.target;if(lo(t))if(0===n){const n=new si(t.path);this.jt(e,n,io.newNoDocument(n,ei.min()))}else Ur(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&lo(i.target)){const e=new si(i.target.path);null!==this.Ut.get(e)||this.ee(r,e)||this.jt(r,e,io.newNoDocument(e,t))}n.Dt&&(e.set(r,n.xt()),n.Nt())}}));let n=js();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const r=new Vs(t,e,this.Kt,this.Ut,n);return this.Ut=Os(),this.qt=Ws(),this.Kt=new Ti(Jr),r}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,e)?r.kt(e,1):r.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Ks,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Ti(Jr),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Nr("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Ks),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Ws(){return new bi(si.comparator)}function Qs(){return new bi(si.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ys=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Js{constructor(t,e){this.databaseId=t,this.gt=e}}function Zs(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ta(t,e){return t.gt?e.toBase64():e.toUint8Array()}function ea(t,e){return Zs(t,e.toTimestamp())}function na(t){return Ur(!!t),ei.fromTimestamp(function(t){const e=Oi(t);return new ti(e.seconds,e.nanos)}(t))}function ra(t,e){return function(t){return new ri(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ia(t){const e=ri.fromString(t);return Ur(Ca(e)),e}function oa(t,e){return ra(t.databaseId,e.path)}function sa(t,e){const n=ia(e);if(n.get(1)!==t.databaseId.projectId)throw new $r(Fr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $r(Fr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new si(la(n))}function aa(t,e){return ra(t.databaseId,e)}function ua(t){const e=ia(t);return 4===e.length?ri.emptyPath():la(e)}function ca(t){return new ri(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function la(t){return Ur(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ha(t,e,n){return{name:oa(t,e),fields:n.value.mapValue.fields}}function fa(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Mr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.gt?(Ur(void 0===e||"string"==typeof e),Ci.fromBase64String(e||"")):(Ur(void 0===e||e instanceof Uint8Array),Ci.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?Fr.UNKNOWN:ks(t.code);return new $r(e,t.message||"")}(s);n=new Hs(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sa(t,r.document.name),o=na(r.document.updateTime),s=new no({mapValue:{fields:r.document.fields}}),a=io.newFoundDocument(i,o,s),u=r.targetIds||[],c=r.removedTargetIds||[];n=new qs(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sa(t,r.document),o=r.readTime?na(r.readTime):ei.min(),s=io.newNoDocument(i,o),a=r.removedTargetIds||[];n=new qs([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sa(t,r.document),o=r.removedTargetIds||[];n=new qs([],o,i,null)}else{if(!("filter"in e))return Mr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Es(r),o=t.targetId;n=new zs(o,i)}}return n}function da(t,e){let n;if(e instanceof gs)n={update:ha(t,e.key,e.value)};else if(e instanceof ws)n={delete:oa(t,e.key)};else if(e instanceof ms)n={update:ha(t,e.key,e.data),updateMask:ka(e.fieldMask)};else{if(!(e instanceof bs))return Mr();n={verify:oa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Xo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Yo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof es)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw Mr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ea(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Mr()}(t,e.precondition)),n}function pa(t,e){return t&&t.length>0?(Ur(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?na(t.updateTime):na(e);return n.isEqual(ei.min())&&(n=na(e)),new ss(n,t.transformResults||[])}(t,e)))):[]}function ga(t,e){return{documents:[aa(t,e.path)]}}function ma(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=aa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=aa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ji(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NAN"}};if(Yi(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ji(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NOT_NAN"}};if(Yi(t.value))return{unaryFilter:{field:Ea(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ea(t.field),op:ba(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ea(t.field),direction:wa(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.gt||Ui(e)?e:{value:e}}(t,e.limit);var a;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function va(t){let e=ua(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ur(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=_a(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((t=>function(t){return new Eo(Ia(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ui(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new bo(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new bo(n,e)}(n.endAt)),Co(e,i,s,o,a,"F",u,c)}function ya(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function _a(t){return t?void 0!==t.unaryFilter?[Sa(t)]:void 0!==t.fieldFilter?[Ta(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>_a(t))).reduce(((t,e)=>t.concat(e))):Mr():[]}function wa(t){return Xs[t]}function ba(t){return Ys[t]}function Ea(t){return{fieldPath:t.canonicalString()}}function Ia(t){return oi.fromServerFormat(t.fieldPath)}function Ta(t){return ho.create(Ia(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Sa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ia(t.unaryFilter.field);return ho.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ia(t.unaryFilter.field);return ho.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ia(t.unaryFilter.field);return ho.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ia(t.unaryFilter.field);return ho.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Mr()}}function ka(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ca(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Oa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xa=Oa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&hs(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=fs(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=fs(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ls();return this.mutations.forEach((r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=ls(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(ei.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),js())}isEqual(t){return this.batchId===t.batchId&&Zr(this.mutations,t.mutations,((t,e)=>ps(t,e)))&&Zr(this.baseMutations,t.baseMutations,((t,e)=>ps(t,e)))}}class Na{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ur(t.mutations.length===n.length);let r=Ms;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new Na(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e,n,r,i=ei.min(),o=ei.min(),s=Ci.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(t){return new La(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new La(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new La(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t){this.re=t}}function Ma(t){const e=va({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Po(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(xi(t.integerValue));else if("doubleValue"in t){const n=xi(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),ji(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Ri(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?eo(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Mr()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const r of Object.keys(n))this._e(r,e),this.ae(n[r],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const r of n)this.ae(r,e)}ge(t,e){this.le(e,37),si.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}Ua.Te=new Ua;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(){this.Ye=new Fa}addToCollectionParentIndex(t,e){return this.Ye.add(e),gi.resolve()}getCollectionParents(t,e){return gi.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return gi.resolve()}deleteFieldIndex(t,e){return gi.resolve()}getDocumentsMatchingTarget(t,e){return gi.resolve(null)}getIndexType(t,e){return gi.resolve(0)}getFieldIndexes(t,e){return gi.resolve([])}getNextCollectionGroupToUpdate(t){return gi.resolve(null)}getMinOffset(t,e){return gi.resolve(li.min())}getMinOffsetFromCollectionGroup(t,e){return gi.resolve(li.min())}updateCollectionGroup(t,e,n){return gi.resolve()}updateIndexEntries(t,e){return gi.resolve()}}class Fa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ti(ri.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ti(ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class $a{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new $a(t,$a.DEFAULT_COLLECTION_PERCENTILE,$a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$a.DEFAULT_COLLECTION_PERCENTILE=10,$a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$a.DEFAULT=new $a(41943040,$a.DEFAULT_COLLECTION_PERCENTILE,$a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$a.DISABLED=new $a(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Va(0)}static vn(){return new Va(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(){this.changes=new Cs((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,io.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?gi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&fs(n.mutation,t,ki.empty(),ti.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,js()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=js()){const r=Ds();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Rs();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ds();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,js())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Os();const o=Ps(),s=Ps();return e.forEach(((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof ms)?i=i.insert(e.key,e):void 0!==s&&(o.set(e.key,s.mutation.getFieldMask()),fs(s.mutation,e,s.mutation.getFieldMask(),ti.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>o.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new qa(e,null!==(n=o.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=Ps();let r=new bi(((t,e)=>t-e)),i=js();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||ki.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||js()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,u=r.value,c=Ls();u.forEach((t=>{if(!i.has(t)){const r=ls(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),o.push(this.documentOverlayCache.saveOverlays(t,a,c))}return gi.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return si.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):No(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):gi.resolve(Ds());let s=-1,a=i;return o.next((e=>gi.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?gi.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,js()))).next((t=>({batchId:s,changes:Ns(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new si(e)).next((t=>{let e=Rs();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Rs();return this.indexManager.getCollectionParents(t,r).next((o=>gi.forEach(o,(o=>{const s=function(t,e){return new ko(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,s,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,io.newInvalidDocument(n)))}));let n=Rs();return r.forEach(((r,i)=>{const o=t.get(r);void 0!==o&&fs(o.mutation,i,ki.empty(),ti.now()),Fo(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):gi.resolve(io.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return gi.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:na(n.createTime)}),gi.resolve()}getNamedQuery(t,e){return gi.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Ma(t.bundledQuery),readTime:na(t.readTime)}}(e)),gi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.overlays=new bi(si.comparator),this.es=new Map}getOverlay(t,e){return gi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ds();return gi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ue(t,e,r)})),gi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),gi.resolve()}getOverlaysForCollection(t,e,n){const r=Ds(),i=e.length+1,o=new si(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return gi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new bi(((t,e)=>t-e));const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ds(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=Ds(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>s.set(t,e))),s.size()>=r)break;return gi.resolve(s)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Da(e,n));let i=this.es.get(e);void 0===i&&(i=js(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.ns=new Ti(Wa.ss),this.rs=new Ti(Wa.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Wa(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Wa(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new si(new ri([])),n=new Wa(e,t),r=new Wa(e,t+1),i=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new si(new ri([])),n=new Wa(e,t),r=new Wa(e,t+1);let i=js();return this.rs.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Wa(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Wa{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return si.comparator(t.key,e.key)||Jr(t._s,e._s)}static os(t,e){return Jr(t._s,e._s)||si.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Ti(Wa.ss)}checkEmpty(t){return gi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ra(i,e,n,r);this.mutationQueue.push(o);for(const s of r)this.gs=this.gs.add(new Wa(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return gi.resolve(o)}lookupMutationBatch(t,e){return gi.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return gi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return gi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return gi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Wa(e,0),r=new Wa(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);i.push(e)})),gi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ti(Jr);return e.forEach((t=>{const e=new Wa(t,0),r=new Wa(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),gi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;si.isDocumentKey(i)||(i=i.child(""));const o=new Wa(new si(i),0);let s=new Ti(Jr);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t._s)),!0)}),o),gi.resolve(this.Is(s))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ur(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return gi.forEach(e.mutations,(r=>{const i=new Wa(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Wa(e,0),r=this.gs.firstAfterOrEqual(n);return gi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,gi.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){this.Es=t,this.docs=new bi(si.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return gi.resolve(n?n.document.mutableCopy():io.newInvalidDocument(e))}getEntries(t,e){let n=Os();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():io.newInvalidDocument(t))})),gi.resolve(n)}getAllFromCollection(t,e,n){let r=Os();const i=new si(e.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i}}=o.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||hi(ci(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return gi.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Mr()}As(t,e){return gi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ya(this)}getSize(t){return gi.resolve(this.size)}}class Ya extends Ba{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),gi.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.persistence=t,this.Rs=new Cs((t=>ao(t)),co),this.lastRemoteSnapshotVersion=ei.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ga,this.targetCount=0,this.vs=Va.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),gi.resolve()}getLastRemoteSnapshotVersion(t){return gi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return gi.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),gi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),gi.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Va(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,gi.resolve()}updateTargetData(t,e){return this.Dn(e),gi.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,gi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach(((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)})),gi.waitFor(i).next((()=>r))}getTargetCount(t){return gi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return gi.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),gi.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),gi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),gi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return gi.resolve(n)}containsKey(t,e){return gi.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new vi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Ja(this),this.indexManager=new ja,this.remoteDocumentCache=function(t){return new Xa(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Pa(e),this.Ns=new Ha(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ka,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Qa(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Nr("MemoryPersistence","Starting transaction:",t);const r=new tu(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ms(t,e){return gi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class tu extends di{constructor(t){super(),this.currentSequenceNumber=t}}class eu{constructor(t){this.persistence=t,this.Fs=new Ga,this.$s=null}static Bs(t){return new eu(t)}get Ls(){if(this.$s)return this.$s;throw Mr()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),gi.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),gi.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),gi.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gi.forEach(this.Ls,(n=>{const r=si.fromPath(n);return this.Us(t,r).next((t=>{t||e.removeEntry(r,ei.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return gi.or([()=>gi.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=js(),r=js();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new nu(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((i=>i||this.Oi(t,e,r,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(Oo(e))return gi.resolve(null);let n=Lo(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Po(e,null,"F"),n=Lo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=js(...r);return this.Ni.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const o=this.Fi(e,r);return this.$i(e,o,i,n.readTime)?this.ki(t,Po(e,null,"F")):this.Bi(t,o,e,n)}))))})))))}Oi(t,e,n,r){return Oo(e)||r.isEqual(ei.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const o=this.Fi(e,i);return this.$i(e,o,n,r)?this.Mi(t,e):(Rr()<=s["in"].DEBUG&&Nr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),jo(e)),this.Bi(t,o,e,ui(r,-1)))}))}Fi(t,e){let n=new Ti(Vo(t));return e.forEach(((e,r)=>{Fo(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return Rr()<=s["in"].DEBUG&&Nr("QueryEngine","Using full collection scan to execute query:",jo(e)),this.Ni.getDocumentsMatchingQuery(t,e,li.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new bi(Jr),this.qi=new Cs((t=>ao(t)),co),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new za(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function ou(t,e,n,r){return new iu(t,e,n,r)}async function su(t,e){const n=jr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],o=[];let s=js();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:o})))}))}))}function au(t,e){const n=jr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=gi.resolve();return o.forEach((t=>{s=s.next((()=>r.getEntry(e,t))).next((e=>{const o=n.docVersions.get(t);Ur(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),s.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=js();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function uu(t){const e=jr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function cu(t,e){const n=jr(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const s=[];e.targetChanges.forEach(((o,a)=>{const u=i.get(a);if(!u)return;s.push(n.Cs.removeMatchingKeys(t,o.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,o.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(Ci.EMPTY_BYTE_STRING,ei.min()).withLastLimboFreeSnapshotVersion(ei.min()):o.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(o.resumeToken,r)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,o)&&s.push(n.Cs.updateTargetData(t,c))}));let a=Os(),u=js();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),s.push(lu(t,o,e.documentUpdates).next((t=>{a=t.Wi,u=t.zi}))),!r.isEqual(ei.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));s.push(e)}return gi.waitFor(s).next((()=>o.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.Ui=i,t)))}function lu(t,e,n){let r=js(),i=js();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Os();return n.forEach(((n,o)=>{const s=t.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(ei.min())?(e.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(o),r=r.insert(n,o)):Nr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{Wi:r,zi:i}}))}function hu(t,e){const n=jr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function fu(t,e){const n=jr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((i=>i?(r=i,gi.resolve(r)):n.Cs.allocateTargetId(t).next((i=>(r=new La(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function du(t,e,n){const r=jr(t),i=r.Ui.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!mi(t))throw t;Nr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function pu(t,e,n){const r=jr(t);let i=ei.min(),o=js();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=jr(t),i=r.qi.get(n);return void 0!==i?gi.resolve(r.Ui.get(i)):r.Cs.getTargetData(e,n)}(r,t,Lo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{o=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?i:ei.min(),n?o:js()))).next((t=>(gu(r,$o(e),t),{documents:t,Hi:o})))))}function gu(t,e,n){let r=t.Ki.get(e)||ei.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}class mu{constructor(){this.activeTargetIds=$s()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vu{constructor(){this.Lr=new mu,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new mu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Nr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Nr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,i){const o=this.ho(t,e);Nr("RestConnection","Sending: ",o,n);const s={};return this.lo(s,r,i),this.fo(t,o,s,n).then((t=>(Nr("RestConnection","Received: ",t),t)),(e=>{throw Lr("RestConnection",`${t} failed with error: `,e,"url: ",o,"request:",n),e}))}_o(t,e,n,r,i,o){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Or,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=wu[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise(((i,o)=>{const s=new kr;s.setWithCredentials(!0),s.listenOnce(br.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case wr.NO_ERROR:const e=s.getResponseJson();Nr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case wr.TIMEOUT:Nr("Connection",'RPC "'+t+'" timed out'),o(new $r(Fr.DEADLINE_EXCEEDED,"Request time out"));break;case wr.HTTP_ERROR:const n=s.getStatus();if(Nr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const t=s.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Fr).indexOf(e)>=0?e:Fr.UNKNOWN}(t.status);o(new $r(e,t.message))}else o(new $r(Fr.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new $r(Fr.UNAVAILABLE,"Connection failed."));break;default:Mr()}}finally{Nr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);s.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=yr(),o=_r(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Tr({})),this.lo(s.initMessageHeaders,e,n),s.encodeInitMessageHeaders=!0;const a=r.join("");Nr("Connection","Creating WebChannel: "+a,s);const u=i.createWebChannel(a,s);let c=!1,l=!1;const h=new bu({Hr:t=>{l?Nr("Connection","Not sending because WebChannel is closed:",t):(c||(Nr("Connection","Opening WebChannel transport."),u.open(),c=!0),Nr("Connection","WebChannel sending:",t),u.send(t))},Jr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,Sr.EventType.OPEN,(()=>{l||Nr("Connection","WebChannel transport opened.")})),f(u,Sr.EventType.CLOSE,(()=>{l||(l=!0,Nr("Connection","WebChannel transport closed"),h.io())})),f(u,Sr.EventType.ERROR,(t=>{l||(l=!0,Lr("Connection","WebChannel transport errored:",t),h.io(new $r(Fr.UNAVAILABLE,"The operation could not be completed")))})),f(u,Sr.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Ur(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Nr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Is[t];if(void 0!==e)return ks(e)}(t),n=i.message;void 0===e&&(e=Fr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,h.io(new $r(e,n)),u.close()}else Nr("Connection","WebChannel received:",n),h.ro(n)}})),f(o,Er.STAT_EVENT,(t=>{t.stat===Ir.PROXY?Nr("Connection","Detected buffering proxy"):t.stat===Ir.NOPROXY&&Nr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t){return new Js(t,!0)}class Su{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&Nr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e,n,r,i,o,s,a){this.Hs=t,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Su(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Fr.RESOURCE_EXHAUSTED?(Dr(e.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===Fr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new $r(Fr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return Nr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(Nr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cu extends ku{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.It=i}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=fa(this.It,t),n=function(t){if(!("targetChange"in t))return ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ei.min():e.readTime?na(e.readTime):ei.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=ca(this.It),e.addTarget=function(t,e){let n;const r=e.target;return n=lo(r)?{documents:ga(t,r)}:{query:ma(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ta(t,e.resumeToken):e.snapshotVersion.compareTo(ei.min())>0&&(n.readTime=Zs(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=ya(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=ca(this.It),e.removeTarget=t,this.Bo(e)}}class Au extends ku{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Ur(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=pa(t.writeResults,t.commitTime),n=na(t.commitTime);return this.listener.Zo(n,e)}return Ur(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=ca(this.It),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>da(this.It,t)))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new $r(Fr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new $r(Fr.UNKNOWN,t.toString())}))}_o(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection._o(t,e,n,i,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new $r(Fr.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class xu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dr(e),this.ou=!1):Nr("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((t=>{n.enqueueAndForget((async()=>{$u(this)&&(Nr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=jr(t);e._u.add(4),await Du(e),e.gu.set("Unknown"),e._u.delete(4),await Nu(e)}(this))}))})),this.gu=new xu(n,r)}}async function Nu(t){if($u(t))for(const e of t.wu)await e(!0)}async function Du(t){for(const e of t.wu)await e(!1)}function Lu(t,e){const n=jr(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Fu(n)?ju(n):ic(n).ko()&&Mu(n,e))}function Pu(t,e){const n=jr(t),r=ic(n);n.du.delete(e),r.ko()&&Uu(n,e),0===n.du.size&&(r.ko()?r.Fo():$u(n)&&n.gu.set("Unknown"))}function Mu(t,e){t.yu.Mt(e.targetId),ic(t).zo(e)}function Uu(t,e){t.yu.Mt(e),ic(t).Ho(e)}function ju(t){t.yu=new Gs({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ic(t).start(),t.gu.uu()}function Fu(t){return $u(t)&&!ic(t).No()&&t.du.size>0}function $u(t){return 0===jr(t)._u.size}function Vu(t){t.yu=void 0}async function Bu(t){t.du.forEach(((e,n)=>{Mu(t,e)}))}async function qu(t,e){Vu(t),Fu(t)?(t.gu.hu(e),ju(t)):t.gu.set("Unknown")}async function zu(t,e,n){if(t.gu.set("Online"),e instanceof Hs&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.du.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.du.delete(r),t.yu.removeTarget(r))}(t,e)}catch(n){Nr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Hu(t,n)}else if(e instanceof qs?t.yu.Gt(e):e instanceof zs?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ei.min()))try{const e=await uu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(r);i&&t.du.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Ci.EMPTY_BYTE_STRING,n.snapshotVersion)),Uu(t,e);const r=new La(n.target,e,1,n.sequenceNumber);Mu(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Nr("RemoteStore","Failed to raise snapshot:",e),await Hu(t,e)}}async function Hu(t,e,n){if(!mi(e))throw e;t._u.add(1),await Du(t),t.gu.set("Offline"),n||(n=()=>uu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Nr("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Nu(t)}))}function Ku(t,e){return e().catch((n=>Hu(t,n,e)))}async function Gu(t){const e=jr(t),n=oc(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Wu(e);)try{const t=await hu(e.localStore,r);if(null===t){0===e.fu.length&&n.Fo();break}r=t.batchId,Qu(e,t)}catch(t){await Hu(e,t)}Xu(e)&&Yu(e)}function Wu(t){return $u(t)&&t.fu.length<10}function Qu(t,e){t.fu.push(e);const n=oc(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Xu(t){return $u(t)&&!oc(t).No()&&t.fu.length>0}function Yu(t){oc(t).start()}async function Ju(t){oc(t).eu()}async function Zu(t){const e=oc(t);for(const n of t.fu)e.Xo(n.mutations)}async function tc(t,e,n){const r=t.fu.shift(),i=Na.from(r,e,n);await Ku(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Gu(t)}async function ec(t,e){e&&oc(t).Yo&&await async function(t,e){if(n=e.code,Ss(n)&&n!==Fr.ABORTED){const n=t.fu.shift();oc(t).Mo(),await Ku(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Gu(t)}var n}(t,e),Xu(t)&&Yu(t)}async function nc(t,e){const n=jr(t);n.asyncQueue.verifyOperationInProgress(),Nr("RemoteStore","RemoteStore received new credentials");const r=$u(n);n._u.add(3),await Du(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Nu(n)}async function rc(t,e){const n=jr(t);e?(n._u.delete(2),await Nu(n)):e||(n._u.add(2),await Du(n),n.gu.set("Unknown"))}function ic(t){return t.pu||(t.pu=function(t,e,n){const r=jr(t);return r.su(),new Cu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Bu.bind(null,t),Zr:qu.bind(null,t),Wo:zu.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),Fu(t)?ju(t):t.gu.set("Unknown")):(await t.pu.stop(),Vu(t))}))),t.pu}function oc(t){return t.Iu||(t.Iu=function(t,e,n){const r=jr(t);return r.su(),new Au(e,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:Ju.bind(null,t),Zr:ec.bind(null,t),tu:Zu.bind(null,t),Zo:tc.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await Gu(t)):(await t.Iu.stop(),t.fu.length>0&&(Nr("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class sc{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new sc(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new $r(Fr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ac(t,e){if(Dr("AsyncQueue",`${e}: ${t}`),mi(t))return new $r(Fr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||si.comparator(e.key,n.key):(t,e)=>si.comparator(t.key,e.key),this.keyedMap=Rs(),this.sortedSet=new bi(this.comparator)}static emptySet(t){return new uc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof uc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new uc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.Tu=new bi(si.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):Mr():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class lc{constructor(t,e,n,r,i,o,s,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,i){const o=[];return e.forEach((t=>{o.push({type:0,doc:t})})),new lc(t,e,uc.emptySet(e),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Mo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.Au=void 0,this.listeners=[]}}class fc{constructor(){this.queries=new Cs((t=>Uo(t)),Mo),this.onlineState="Unknown",this.Ru=new Set}}async function dc(t,e){const n=jr(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new hc),i)try{o.Au=await n.onListen(r)}catch(t){const n=ac(t,`Initialization of query '${jo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.bu(n.onlineState),o.Au&&e.Pu(o.Au)&&vc(n)}async function pc(t,e){const n=jr(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function gc(t,e){const n=jr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(i)&&(r=!0);e.Au=i}}r&&vc(n)}function mc(t,e,n){const r=jr(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function vc(t){t.Ru.forEach((t=>{t.next()}))}class yc{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new lc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=lc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _c{constructor(t){this.key=t}}class wc{constructor(t){this.key=t}}class bc{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=js(),this.mutatedKeys=js(),this.Gu=Vo(t),this.Qu=new uc(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new cc,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),l=Fo(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;c&&l?c.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Hu(c,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Gu(l,a)>0||u&&this.Gu(l,u)<0)&&(s=!0)):!c&&l?(n.track({type:0,doc:l}),d=!0):c&&!l&&(n.track({type:1,doc:c}),d=!0,(a||u)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:o,zu:n,$i:s,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const o=e?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,a=s!==this.qu;return this.qu=s,0!==i.length||a?{snapshot:new lc(this.query,t.Qu,r,i,t.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new cc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=js(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new wc(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new _c(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=js();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return lc.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Ec{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ic{constructor(t){this.key=t,this.nc=!1}}class Tc{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Cs((t=>Uo(t)),Mo),this.rc=new Map,this.oc=new Set,this.uc=new bi(si.comparator),this.cc=new Map,this.ac=new Ga,this.hc={},this.lc=new Map,this.fc=Va.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Sc(t,e){const n=zc(t);let r,i;const o=n.ic.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const t=await fu(n.localStore,Lo(e));n.isPrimaryClient&&Lu(n.remoteStore,t);const o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await kc(n,e,r,"current"===o,t.resumeToken)}return i}async function kc(t,e,n,r,i){t._c=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.$i&&(i=await pu(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return jc(t,e.targetId,s.Xu),s.snapshot}(t,e,n,r);const o=await pu(t.localStore,e,!0),s=new bc(e,o.Hi),a=s.Wu(o.documents),u=Bs.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),c=s.applyChanges(a,t.isPrimaryClient,u);jc(t,n,c.Xu);const l=new Ec(e,n,s);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function Cc(t,e){const n=jr(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((t=>!Mo(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await du(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Pu(n.remoteStore,r.targetId),Mc(n,r.targetId)})).catch(pi)):(Mc(n,r.targetId),await du(n.localStore,r.targetId,!0))}async function Ac(t,e,n){const r=Hc(t);try{const t=await function(t,e){const n=jr(t),r=ti.now(),i=e.reduce(((t,e)=>t.add(e.key)),js());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Os(),u=js();return n.Gi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{o=i;const s=[];for(const t of e){const e=ds(t,o.get(t.key).overlayedDocument);null!=e&&s.push(new ms(t.key,e,ro(e.value.mapValue),as.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,s,e)})).next((e=>{s=e;const r=e.applyToLocalDocumentSet(o,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:Ns(o)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new bi(Jr)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Vc(r,t.changes),await Gu(r.remoteStore)}catch(t){const e=ac(t,"Failed to persist write");n.reject(e)}}async function Oc(t,e){const n=jr(t);try{const t=await cu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.cc.get(e);r&&(Ur(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?Ur(r.nc):t.removedDocuments.size>0&&(Ur(r.nc),r.nc=!1))})),await Vc(n,t,e)}catch(t){await pi(t)}}function xc(t,e,n){const r=jr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=jr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.bu(e)&&(r=!0)})),r&&vc(n)}(r.eventManager,e),t.length&&r.sc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rc(t,e,n){const r=jr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),o=i&&i.key;if(o){let t=new bi(si.comparator);t=t.insert(o,io.newNoDocument(o,ei.min()));const n=js().add(o),i=new Vs(ei.min(),new Map,new Ti(Jr),t,n);await Oc(r,i),r.uc=r.uc.remove(o),r.cc.delete(e),$c(r)}else await du(r.localStore,e,!1).then((()=>Mc(r,e,n))).catch(pi)}async function Nc(t,e){const n=jr(t),r=e.batch.batchId;try{const t=await au(n.localStore,e);Pc(n,r,null),Lc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vc(n,t)}catch(t){await pi(t)}}async function Dc(t,e,n){const r=jr(t);try{const t=await function(t,e){const n=jr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ur(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Pc(r,e,n),Lc(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vc(r,t)}catch(n){await pi(n)}}function Lc(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function Pc(t,e,n){const r=jr(t);let i=r.hc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Mc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||Uc(t,e)}))}function Uc(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Pu(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),$c(t))}function jc(t,e,n){for(const r of n)r instanceof _c?(t.ac.addReference(r.key,e),Fc(t,r)):r instanceof wc?(Nr("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Uc(t,r.key)):Mr()}function Fc(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(Nr("SyncEngine","New document in limbo: "+n),t.oc.add(r),$c(t))}function $c(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new si(ri.fromString(e)),r=t.fc.next();t.cc.set(r,new Ic(n)),t.uc=t.uc.insert(n,r),Lu(t.remoteStore,new La(Lo(Ao(n.path)),r,2,vi.at))}}async function Vc(t,e,n){const r=jr(t),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach(((t,a)=>{s.push(r._c(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=nu.Ci(a.targetId,t);o.push(e)}})))})),await Promise.all(s),r.sc.Wo(i),await async function(t,e){const n=jr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>gi.forEach(e,(e=>gi.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>gi.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!mi(t))throw t;Nr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ui.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(t,i)}}}(r.localStore,o))}async function Bc(t,e){const n=jr(t);if(!n.currentUser.isEqual(e)){Nr("SyncEngine","User change. New user:",e.toKey());const t=await su(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new $r(Fr.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Vc(n,t.ji)}}function qc(t,e){const n=jr(t),r=n.cc.get(e);if(r&&r.nc)return js().add(r.key);{let t=js();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function zc(t){const e=jr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Oc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rc.bind(null,e),e.sc.Wo=gc.bind(null,e.eventManager),e.sc.wc=mc.bind(null,e.eventManager),e}function Hc(t){const e=jr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dc.bind(null,e),e}class Kc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Tu(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return ou(this.persistence,new ru,t.initialUser,this.It)}yc(t){return new Za(eu.Bs,this.It)}gc(t){return new vu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>xc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bc.bind(null,this.syncEngine),await rc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fc}createDatastore(t){const e=Tu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Eu(r));var r;return function(t,e,n,r){return new Ou(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>xc(this.syncEngine,t,0),o=_u.C()?new _u:new yu,new Ru(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new Tc(t,e,n,r,i,o);return s&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=jr(t);Nr("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Du(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t,e,n){if(!n)throw new $r(Fr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qc(t,e,n,r){if(!0===e&&!0===r)throw new $r(Fr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xc(t){if(!si.isDocumentKey(t))throw new $r(Fr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yc(t){if(si.isDocumentKey(t))throw new $r(Fr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Mr()}function Zc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $r(Fr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jc(t);throw new $r(Fr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tl=new Map;class el{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new $r(Fr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new $r(Fr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Qc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new el({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $r(Fr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new $r(Fr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new el(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new qr;switch(t.type){case"gapi":const e=t.client;return new Gr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new $r(Fr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=tl.get(t);e&&(Nr("ComponentProvider","Removing Datastore"),tl.delete(t),e.terminate())}(this),Promise.resolve()}}function rl(t,e,n,r={}){var i;const o=(t=Zc(t,nl))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&Lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Ar.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new $r(Fr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ar(o)}t._authCredentials=new zr(new Br(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new il(this.firestore,t,this._key)}}class ol{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ol(this.firestore,t,this._query)}}class sl extends ol{constructor(t,e,n){super(t,e,Ao(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new il(this.firestore,null,new si(t))}withConverter(t){return new sl(this.firestore,t,this._path)}}function al(t,e,...n){if(t=(0,a.m9)(t),Wc("collection","path",e),t instanceof nl){const r=ri.fromString(e,...n);return Yc(r),new sl(t,null,r)}{if(!(t instanceof il||t instanceof sl))throw new $r(Fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ri.fromString(e,...n));return Yc(r),new sl(t.firestore,null,r)}}function ul(t,e){if(t=Zc(t,nl),Wc("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new $r(Fr.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ol(t,null,function(t){return new ko(ri.emptyPath(),t)}(e))}function cl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Yr.R()),Wc("doc","path",e),t instanceof nl){const r=ri.fromString(e,...n);return Xc(r),new il(t,null,new si(r))}{if(!(t instanceof il||t instanceof sl))throw new $r(Fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ri.fromString(e,...n));return Xc(r),new il(t.firestore,t instanceof sl?t.converter:null,new si(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Dr("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Ar.UNAUTHENTICATED,this.clientId=Yr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Nr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Nr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $r(Fr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ac(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function fl(t,e){t.asyncQueue.verifyOperationInProgress(),Nr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await su(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function dl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pl(t);Nr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>nc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>nc(e.remoteStore,n))),t.onlineComponents=e}async function pl(t){return t.offlineComponents||(Nr("FirestoreClient","Using default OfflineComponentProvider"),await fl(t,new Kc)),t.offlineComponents}async function gl(t){return t.onlineComponents||(Nr("FirestoreClient","Using default OnlineComponentProvider"),await dl(t,new Gc)),t.onlineComponents}function ml(t){return gl(t).then((t=>t.syncEngine))}async function vl(t){const e=await gl(t),n=e.eventManager;return n.onListen=Sc.bind(null,e.syncEngine),n.onUnlisten=Cc.bind(null,e.syncEngine),n}function yl(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new ll({next:o=>{e.enqueueAndForget((()=>pc(t,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new $r(Fr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new $r(Fr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new yc(Ao(n.path),o,{includeMetadataChanges:!0,Nu:!0});return dc(t,s)}(await vl(t),t.asyncQueue,e,n,r))),r.promise}function _l(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new ll({next:n=>{e.enqueueAndForget((()=>pc(t,s))),n.fromCache&&"server"===r.source?i.reject(new $r(Fr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new yc(n,o,{includeMetadataChanges:!0,Nu:!0});return dc(t,s)}(await vl(t),t.asyncQueue,e,n,r))),r.promise}class wl{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Su(this,"async_queue_retry"),this.Wc=()=>{const t=Iu();t&&Nr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=Iu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Iu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new Vr;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(E){if(!mi(E))throw E;Nr("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Dr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=sc.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(r),r}zc(){this.Kc&&Mr()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class bl extends nl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new wl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tl(this),this._firestoreClient.terminate()}}function El(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",o=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const t=(0,a.P0)("firestore");t&&rl(o,...t)}return o}function Il(t){return t._firestoreClient||Tl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tl(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Pi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new hl(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sl(Ci.fromBase64String(t))}catch(t){throw new $r(Fr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Sl(Ci.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new $r(Fr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new $r(Fr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new $r(Fr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Jr(this._lat,t._lat)||Jr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=/^__.*__$/;class xl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ms(t,this.data,this.fieldMask,e,this.fieldTransforms):new gs(t,this.data,e,this.fieldTransforms)}}class Rl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ms(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Nl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mr()}}class Dl{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Dl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Zl(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(Nl(this.sa)&&Ol.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Ll{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Tu(t)}da(t,e,n,r=!1){return new Dl({sa:t,methodName:e,fa:n,path:oi.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Pl(t){const e=t._freezeSettings(),n=Tu(t._databaseId);return new Ll(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ml(t,e,n,r,i,o={}){const s=t.da(o.merge||o.mergeFields?2:0,e,n,i);Ql("Data must be an object, but it was:",s,r);const a=Gl(r,s);let u,c;if(o.merge)u=new ki(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=Xl(e,r,n);if(!s.contains(i))throw new $r(Fr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);th(t,i)||t.push(i)}u=new ki(t),c=s.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=s.fieldTransforms;return new xl(new no(a),u,c)}class Ul extends Cl{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ul}}function jl(t,e,n){return new Dl({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class Fl extends Cl{_toFieldTransform(t){return new is(t.path,new Xo)}isEqual(t){return t instanceof Fl}}class $l extends Cl{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){const e=jl(this,t,!0),n=this._a.map((t=>Kl(t,e))),r=new Yo(n);return new is(t.path,r)}isEqual(t){return this===t}}class Vl extends Cl{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){const e=jl(this,t,!0),n=this._a.map((t=>Kl(t,e))),r=new Zo(n);return new is(t.path,r)}isEqual(t){return this===t}}class Bl extends Cl{constructor(t,e){super(t),this.wa=e}_toFieldTransform(t){const e=new es(t.It,Ho(t.It,this.wa));return new is(t.path,e)}isEqual(t){return this===t}}function ql(t,e,n,r){const i=t.da(1,e,n);Ql("Data must be an object, but it was:",i,r);const o=[],s=no.empty();_i(r,((t,r)=>{const u=Jl(e,t,n);r=(0,a.m9)(r);const c=i.ca(u);if(r instanceof Ul)o.push(u);else{const t=Kl(r,c);null!=t&&(o.push(u),s.set(u,t))}}));const u=new ki(o);return new Rl(s,u,i.fieldTransforms)}function zl(t,e,n,r,i,o){const s=t.da(1,e,n),u=[Xl(e,r,n)],c=[i];if(o.length%2!=0)throw new $r(Fr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<o.length;a+=2)u.push(Xl(e,o[a])),c.push(o[a+1]);const l=[],h=no.empty();for(let d=u.length-1;d>=0;--d)if(!th(l,u[d])){const t=u[d];let e=c[d];e=(0,a.m9)(e);const n=s.ca(t);if(e instanceof Ul)l.push(t);else{const r=Kl(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new ki(l);return new Rl(h,f,s.fieldTransforms)}function Hl(t,e,n,r=!1){return Kl(n,t.da(r?4:3,e))}function Kl(t,e){if(Wl(t=(0,a.m9)(t)))return Ql("Unsupported field value:",e,t),Gl(t,e);if(t instanceof Cl)return function(t,e){if(!Nl(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Kl(i,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ho(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ti.fromDate(t);return{timestampValue:Zs(e.It,n)}}if(t instanceof ti){const n=new ti(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Zs(e.It,n)}}if(t instanceof Al)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Sl)return{bytesValue:ta(e.It,t._byteString)};if(t instanceof il){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ra(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Jc(t)}`)}(t,e)}function Gl(t,e){const n={};return wi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(t,((t,r)=>{const i=Kl(r,e.ra(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Wl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ti||t instanceof Al||t instanceof Sl||t instanceof il||t instanceof Cl)}function Ql(t,e,n){if(!Wl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Jc(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Xl(t,e,n){if((e=(0,a.m9)(e))instanceof kl)return e._internalPath;if("string"==typeof e)return Jl(t,e);throw Zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yl=new RegExp("[~\\*/\\[\\]]");function Jl(t,e,n){if(e.search(Yl)>=0)throw Zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kl(...e.split("."))._internalPath}catch(r){throw Zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zl(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new $r(Fr.INVALID_ARGUMENT,a+t+u)}function th(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new il(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new nh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(rh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class nh extends eh{data(){return super.data()}}function rh(t,e){return"string"==typeof e?Jl(t,e):e instanceof kl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new $r(Fr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oh{}function sh(t,...e){for(const n of e)t=n._apply(t);return t}class ah extends oh{constructor(t,e,n){super(),this.ma=t,this.ga=e,this.ya=n,this.type="where"}_apply(t){const e=Pl(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new $r(Fr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){gh(s,o);const e=[];for(const n of s)e.push(ph(r,t,n));a={arrayValue:{values:e}}}else a=ph(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||gh(s,o),a=Hl(n,e,s,"in"===o||"not-in"===o);const u=ho.create(i,o,a);return function(t,e){if(e.dt()){const n=Ro(t);if(null!==n&&!n.isEqual(e.field))throw new $r(Fr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=xo(t);null!==r&&mh(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new $r(Fr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $r(Fr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,u),u}(t._query,"where",e,t.firestore._databaseId,this.ma,this.ga,this.ya);return new ol(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function uh(t,e,n){const r=e,i=rh("where",t);return new ah(i,r,n)}class ch extends oh{constructor(t,e){super(),this.ma=t,this.pa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new $r(Fr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new $r(Fr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Eo(e,n);return function(t,e){if(null===xo(t)){const n=Ro(t);null!==n&&mh(t,n,e.field)}}(t,r),r}(t._query,this.ma,this.pa);return new ol(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new ko(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function lh(t,e="asc"){const n=e,r=rh("orderBy",t);return new ch(r,n)}class hh extends oh{constructor(t,e,n){super(),this.type=t,this.Ea=e,this.Aa=n}_apply(t){const e=dh(t,this.type,this.Ea,this.Aa);return new ol(t.firestore,t.converter,function(t,e){return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function fh(...t){return new hh("startAfter",t,!1)}function dh(t,e,n,r){if(n[0]=(0,a.m9)(n[0]),n[0]instanceof eh)return function(t,e,n,r,i){if(!r)throw new $r(Fr.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const o=[];for(const s of Do(t))if(s.field.isKeyField())o.push(Wi(e,r.key));else{const t=r.data.field(s.field);if(Ni(t))throw new $r(Fr.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+s.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=s.field.canonicalString();throw new $r(Fr.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}o.push(t)}return new bo(o,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Pl(t.firestore);return function(t,e,n,r,i,o){const s=t.explicitOrderBy;if(i.length>s.length)throw new $r(Fr.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let u=0;u<i.length;u++){const o=i[u];if(s[u].field.isKeyField()){if("string"!=typeof o)throw new $r(Fr.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof o}`);if(!No(t)&&-1!==o.indexOf("/"))throw new $r(Fr.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${o}' contains a slash.`);const n=t.path.child(ri.fromString(o));if(!si.isDocumentKey(n))throw new $r(Fr.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new si(n);a.push(Wi(e,i))}else{const t=Hl(n,r,o);a.push(t)}}return new bo(a,o)}(t._query,t.firestore._databaseId,i,e,n,r)}}function ph(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new $r(Fr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!No(e)&&-1!==n.indexOf("/"))throw new $r(Fr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ri.fromString(n));if(!si.isDocumentKey(r))throw new $r(Fr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wi(t,new si(r))}if(n instanceof il)return Wi(t,n._key);throw new $r(Fr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jc(n)}.`)}function gh(t,e){if(!Array.isArray(t)||0===t.length)throw new $r(Fr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new $r(Fr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function mh(t,e,n){if(!n.isEqual(e))throw new $r(Fr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{convertValue(t,e="none"){switch(Vi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return xi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ri(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Mr()}}convertObject(t,e){const n={};return _i(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Al(xi(t.latitude),xi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Di(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Li(t));default:return null}}convertTimestamp(t){const e=Oi(t);return new ti(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ri.fromString(t);Ur(Ca(n));const r=new Mi(n.get(1),n.get(3)),i=new si(n.popFirst(5));return r.isEqual(e)||Dr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _h{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wh extends eh{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new bh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(rh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class bh extends wh{data(t={}){return super.data(t)}}class Eh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new _h(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new bh(this._firestore,this._userDataWriter,n.key,n,new _h(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new $r(Fr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new bh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new _h(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new bh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new _h(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:Ih(e.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ih(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Th(t){t=Zc(t,il);const e=Zc(t.firestore,bl);return yl(Il(e),t._key).then((n=>Nh(e,t,n)))}class Sh extends vh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Sl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new il(this.firestore,null,e)}}function kh(t){t=Zc(t,ol);const e=Zc(t.firestore,bl),n=Il(e),r=new Sh(e);return ih(t._query),_l(n,t._query).then((n=>new Eh(e,r,t,n)))}function Ch(t,e,n){t=Zc(t,il);const r=Zc(t.firestore,bl),i=yh(t.converter,e,n);return Rh(r,[Ml(Pl(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,as.none())])}function Ah(t,e,n,...r){t=Zc(t,il);const i=Zc(t.firestore,bl),o=Pl(i);let s;return s="string"==typeof(e=(0,a.m9)(e))||e instanceof kl?zl(o,"updateDoc",t._key,e,n,r):ql(o,"updateDoc",t._key,e),Rh(i,[s.toMutation(t._key,as.exists(!0))])}function Oh(t){return Rh(Zc(t.firestore,bl),[new ws(t._key,as.none())])}function xh(t,e){const n=Zc(t.firestore,bl),r=cl(t),i=yh(t.converter,e);return Rh(n,[Ml(Pl(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,as.exists(!1))]).then((()=>r))}function Rh(t,e){return function(t,e){const n=new Vr;return t.asyncQueue.enqueueAndForget((async()=>Ac(await ml(t),e,n))),n.promise}(Il(t),e)}function Nh(t,e,n){const r=n.docs.get(e._key),i=new Sh(t);return new wh(t,i,e._key,r,new _h(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(){return new Fl("serverTimestamp")}function Lh(...t){return new $l("arrayUnion",t)}function Ph(...t){return new Vl("arrayRemove",t)}function Mh(t){return new Bl("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Or=t}(i.Jn),(0,i.Xd)(new o.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new bl(new Hr(t.getProvider("auth-internal")),new Qr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $r(Fr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Cr,"3.7.2",t),(0,i.KN)(Cr,"3.7.2","esm2017")}()},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return k},L:function(){return a},LL:function(){return x},P0:function(){return I},Pz:function(){return S},Sg:function(){return C},UG:function(){return h},ZR:function(){return O},aH:function(){return T},b$:function(){return d},eu:function(){return m},hl:function(){return g},m9:function(){return q},ne:function(){return F},pd:function(){return j},q4:function(){return E},ru:function(){return f},tV:function(){return u},uI:function(){return l},vZ:function(){return L},w1:function(){return p},xO:function(){return M},xb:function(){return D},z$:function(){return c},zd:function(){return U}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(1023&u))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|u>>6,f=63&u;a||(f=64,o||(h=64)),r.push(n[c],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,u=a?n[t.charAt(i)]:64;++i;const c=i<t.length,l=c?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==u||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==u){const t=s<<4&240|u>>2;if(r.push(t),64!==l){const t=u<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=r(t);return o.encodeByteArray(e,!0)},a=function(t){return s(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function h(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function f(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const t=c();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return"object"===typeof indexedDB}function m(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function v(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=()=>v().__FIREBASE_DEFAULTS__,_=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},w=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},b=()=>{try{return y()||_()||w()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},E=t=>{var e,n;return null===(n=null===(e=b())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},I=t=>{const e=E(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},T=()=>{var t;return null===(t=b())||void 0===t?void 0:t.config},S=t=>{var e;return null===(e=b())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),u="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),u].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A="FirebaseError";class O extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=A,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?R(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new O(r,s,n);return a}}function R(t,e){return t.replace(N,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function L(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(P(n)&&P(o)){if(!L(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function P(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function U(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function j(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e){const n=new $(t,e);return n.subscribe.bind(n)}class ${constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=V(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function V(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t){return t&&t._delegate?t._delegate:t}},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",o="9.13.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},5866:function(t,e,n){"use strict";n.d(e,{v0:function(){return r.v0}});var r=n(1125)},8307:function(t,e,n){"use strict";n.d(e,{B$:function(){return r.B$},Bt:function(){return r.Bt},IO:function(){return r.IO},JU:function(){return r.JU},PL:function(){return r.PL},TQ:function(){return r.TQ},Xo:function(){return r.Xo},ad:function(){return r.ad},hJ:function(){return r.hJ},pl:function(){return r.pl}});var r=n(7425)},1992:function(t,e,n){"use strict";n.d(e,{Jt:function(){return ee},cF:function(){return re},iH:function(){return ne},KV:function(){return te}});n(2801),n(7658),n(3408),n(4590);var r=n(7077),i=n(223),o=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",u=12e4,c=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.ZR{constructor(t,e,n=0){super(h(t),`Firebase Storage: ${e} (${h(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return h(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new l("unknown",t)}function d(t){return new l("object-not-found","Object '"+t+"' does not exist.")}function p(t){return new l("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",t)}function m(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(t){return new l("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _(){return new l("canceled","User canceled the upload/download.")}function w(t){return new l("invalid-url","Invalid URL '"+t+"'.")}function b(t){return new l("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function E(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function I(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function T(){return new l("no-download-url","The given file does not have any download URLs.")}function S(t){return new l("invalid-argument",t)}function k(){return new l("app-deleted","The Firebase app was deleted.")}function C(t){return new l("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function A(t,e){return new l("invalid-format","String does not match format '"+t+"': "+e)}function O(t){throw new l("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=x.makeFromUrl(t,e)}catch(r){return new x(t,"")}if(""===n.path)return n;throw b(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),u={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:u,postModify:i},{regex:d,indices:p,postModify:c},{regex:v,indices:y,postModify:c}];for(let s=0;s<_.length;s++){const e=_[s],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new x(t,i),e.postModify(n);break}}if(null==n)throw w(t);return n}}class R{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function u(){return 2===a}let c=!1;function l(...t){c||(c=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,u())}),e)}function f(){o&&clearTimeout(o)}function d(t,...e){if(c)return void f();if(t)return f(),void l.call(null,t,...e);const n=u()||s;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),c||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),o=setTimeout((()=>{s=!0,g(!0)}),n),g}function D(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){return void 0!==t}function P(t){return"object"===typeof t&&!Array.isArray(t)}function M(t){return"string"===typeof t||t instanceof String}function U(t){return j()&&t instanceof Blob}function j(){return"undefined"!==typeof Blob&&!(0,i.UG)()}function F(t,e,n,r){if(r<e)throw S(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw S(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function V(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),o=-1!==e.indexOf(t);return n||i||o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(B||(B={}));class z{constructor(t,e,n,r,i,o,s,a,u,c,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new H(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===B.NO_ERROR,i=n.getStatus();if((!e||q(i,this.additionalRetryCodes_))&&this.retry){const e=n.getErrorCode()===B.ABORT;return void t(!1,new H(!1,null,e))}const o=-1!==this.successCodes_.indexOf(i);t(!0,new H(o,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());L(t)?n(t):n()}catch(o){r(o)}else if(null!==i){const t=f();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?k():_();r(t)}else{const t=y();r(t)}};this.canceled_?e(!1,new H(!1,null,!0)):this.backoffId_=N(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class H{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function K(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function G(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function W(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Q(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function X(t,e,n,r,i,o,s=!0){const a=V(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return W(c,e),K(c,n),G(c,o),Q(c,r),new z(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function J(...t){const e=Y();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(j())return new Blob(t);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function Z(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nt{constructor(t,e){this.data=t,this.contentType=e||null}}function rt(t,e){switch(t){case et.RAW:return new nt(it(e));case et.BASE64:case et.BASE64URL:return new nt(st(t,e));case et.DATA_URL:return new nt(ut(e),ct(e))}throw f()}function it(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,o=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function ot(t){let e;try{e=decodeURIComponent(t)}catch(n){throw A(et.DATA_URL,"Malformed data URL.")}return it(e)}function st(t,e){switch(t){case et.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw A(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case et.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw A(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tt(e)}catch(i){throw A(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class at{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw A(et.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=lt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function ut(t){const e=new at(t);return e.base64?st(et.BASE64,e.rest):ot(e.rest)}function ct(t){const e=new at(t);return e.contentType}function lt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e){let n=0,r="";U(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(U(this.data_)){const n=this.data_,r=Z(n,t,e);return null===r?null:new ht(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ht(n,!0)}}static getBlob(...t){if(j()){const e=t.map((t=>t instanceof ht?t.data_:t));return new ht(J.apply(null,e))}{const e=t.map((t=>M(t)?rt(et.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new ht(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){let e;try{e=JSON.parse(t)}catch(n){return null}return P(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function pt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function gt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){return e}class vt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||mt}}let yt=null;function _t(t){return!M(t)||t.length<2?t:gt(t)}function wt(){if(yt)return yt;const t=[];function e(t,e){return _t(e)}t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));const n=new vt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new vt("size");return i.xform=r,t.push(i),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),yt=t,yt}function bt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new x(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Et(t,e,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const t=n[o];r[t.local]=t.xform(r,e[t.server])}return bt(r,t),r}function It(t,e,n){const r=ft(e);if(null===r)return null;const i=r;return Et(t,i,n)}function Tt(t,e,n,r){const i=ft(e);if(null===i)return null;if(!M(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),u=a.map((e=>{const i=t["bucket"],o=t["fullPath"],a="/b/"+s(i)+"/o/"+s(o),u=$(a,n,r),c=V({alt:"media",token:e});return u+c}));return u[0]}function St(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){if(!t)throw f()}function At(t,e){function n(n,r){const i=It(t,r,e);return Ct(null!==i),i}return n}function Ot(t,e){function n(n,r){const i=It(t,r,e);return Ct(null!==i),Tt(i,r,t.host,t._protocol)}return n}function xt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?m():g():402===e.getStatus()?p(t.bucket):403===e.getStatus()?v(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function Rt(t){const e=xt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=d(t.path)),i.serverResponse=r.serverResponse,i}return n}function Nt(t,e,n){const r=e.fullServerUrl(),i=$(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new kt(i,o,Ot(t,n),s);return a.errorHandler=Rt(e),a}function Dt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Lt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Dt(null,e)),r}function Pt(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const u=a();s["Content-Type"]="multipart/related; boundary="+u;const c=Lt(e,r,i),l=St(c,n),h="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",f="\r\n--"+u+"--",d=ht.getBlob(h,r,f);if(null===d)throw I();const p={name:c["fullPath"]},g=$(o,t.host,t._protocol),m="POST",v=t.maxUploadRetryTime,y=new kt(g,m,At(t,n),v);return y.urlParams=p,y.headers=s,y.body=d.uploadData(),y.errorHandler=xt(e),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Mt=null;class Ut{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=B.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=B.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=B.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw O("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw O("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class jt extends Ut{initXhr(){this.xhr_.responseType="text"}}function Ft(){return Mt?Mt():new jt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(t,e){this._service=t,this._location=e instanceof x?e:x.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new $t(t,e)}get root(){const t=new x(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gt(this._location.path)}get storage(){return this._service}get parent(){const t=dt(this._location.path);if(null===t)return null;const e=new x(this._location.bucket,t);return new $t(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw C(t)}}function Vt(t,e,n){t._throwIfRoot("uploadBytes");const r=Pt(t.storage,t._location,wt(),new ht(e,!0),n);return t.storage.makeRequestWithTokens(r,Ft).then((e=>({metadata:e,ref:t})))}function Bt(t){t._throwIfRoot("getDownloadURL");const e=Nt(t.storage,t._location,wt());return t.storage.makeRequestWithTokens(e,Ft).then((t=>{if(null===t)throw T();return t}))}function qt(t,e){const n=pt(t._location.path,e),r=new x(t._location.bucket,n);return new $t(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){return/^[A-Za-z]+:\/\//.test(t)}function Ht(t,e){return new $t(t,e)}function Kt(t,e){if(t instanceof Xt){const n=t;if(null==n._bucket)throw E();const r=new $t(n,n._bucket);return null!=e?Kt(r,e):r}return void 0!==e?qt(t,e):t}function Gt(t,e){if(e&&zt(e)){if(t instanceof Xt)return Ht(t,e);throw S("To use ref(service, url), the first argument must be a Storage instance.")}return Kt(t,e)}function Wt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:x.makeFromBucketSpec(n,t)}function Qt(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:o}=r;o&&(t._overrideAuthToken="string"===typeof o?o:(0,i.Sg)(o,t.app.options.projectId))}class Xt{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=r?x.makeFromBucketSpec(r,this._host):Wt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=x.makeFromBucketSpec(this._url,t):this._bucket=Wt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $t(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new R(k());{const o=X(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Yt="@firebase/storage",Jt="0.9.13",Zt="storage";function te(t,e,n){return t=(0,i.m9)(t),Vt(t,e,n)}function ee(t){return t=(0,i.m9)(t),Bt(t)}function ne(t,e){return t=(0,i.m9)(t),Gt(t,e)}function re(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,Zt),o=n.getImmediate({identifier:e}),s=(0,i.P0)("storage");return s&&ie(o,...s),o}function ie(t,e,n,r={}){Qt(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Xt(n,i,o,e,r.Jn)}function se(){(0,r.Xd)(new o.wA(Zt,oe,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Yt,Jt,""),(0,r.KN)(Yt,Jt,"esm2017")}se()},4806:function(t,e,n){var r;t=n.nmd(t),n(7658),n(7635),n(7287),function(){var i,o="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",h=500,f="__lodash_placeholder__",d=1,p=2,g=4,m=1,v=2,y=1,_=2,w=4,b=8,E=16,I=32,T=64,S=128,k=256,C=512,A=30,O="...",x=800,R=16,N=1,D=2,L=3,P=1/0,M=9007199254740991,U=17976931348623157e292,j=NaN,F=4294967295,$=F-1,V=F>>>1,B=[["ary",S],["bind",y],["bindKey",_],["curry",b],["curryRight",E],["flip",C],["partial",I],["partialRight",T],["rearg",k]],q="[object Arguments]",z="[object Array]",H="[object AsyncFunction]",K="[object Boolean]",G="[object Date]",W="[object DOMException]",Q="[object Error]",X="[object Function]",Y="[object GeneratorFunction]",J="[object Map]",Z="[object Number]",tt="[object Null]",et="[object Object]",nt="[object Promise]",rt="[object Proxy]",it="[object RegExp]",ot="[object Set]",st="[object String]",at="[object Symbol]",ut="[object Undefined]",ct="[object WeakMap]",lt="[object WeakSet]",ht="[object ArrayBuffer]",ft="[object DataView]",dt="[object Float32Array]",pt="[object Float64Array]",gt="[object Int8Array]",mt="[object Int16Array]",vt="[object Int32Array]",yt="[object Uint8Array]",_t="[object Uint8ClampedArray]",wt="[object Uint16Array]",bt="[object Uint32Array]",Et=/\b__p \+= '';/g,It=/\b(__p \+=) '' \+/g,Tt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,kt=/[&<>"']/g,Ct=RegExp(St.source),At=RegExp(kt.source),Ot=/<%-([\s\S]+?)%>/g,xt=/<%([\s\S]+?)%>/g,Rt=/<%=([\s\S]+?)%>/g,Nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dt=/^\w*$/,Lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pt=/[\\^$.*+?()[\]{}|]/g,Mt=RegExp(Pt.source),Ut=/^\s+/,jt=/\s/,Ft=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,$t=/\{\n\/\* \[wrapped with (.+)\] \*/,Vt=/,? & /,Bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,qt=/[()=,{}\[\]\/\s]/,zt=/\\(\\)?/g,Ht=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Kt=/\w*$/,Gt=/^[-+]0x[0-9a-f]+$/i,Wt=/^0b[01]+$/i,Qt=/^\[object .+?Constructor\]$/,Xt=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Jt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Zt=/($^)/,te=/['\n\r\u2028\u2029\\]/g,ee="\\ud800-\\udfff",ne="\\u0300-\\u036f",re="\\ufe20-\\ufe2f",ie="\\u20d0-\\u20ff",oe=ne+re+ie,se="\\u2700-\\u27bf",ae="a-z\\xdf-\\xf6\\xf8-\\xff",ue="\\xac\\xb1\\xd7\\xf7",ce="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",le="\\u2000-\\u206f",he=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fe="A-Z\\xc0-\\xd6\\xd8-\\xde",de="\\ufe0e\\ufe0f",pe=ue+ce+le+he,ge="['’]",me="["+ee+"]",ve="["+pe+"]",ye="["+oe+"]",_e="\\d+",we="["+se+"]",be="["+ae+"]",Ee="[^"+ee+pe+_e+se+ae+fe+"]",Ie="\\ud83c[\\udffb-\\udfff]",Te="(?:"+ye+"|"+Ie+")",Se="[^"+ee+"]",ke="(?:\\ud83c[\\udde6-\\uddff]){2}",Ce="[\\ud800-\\udbff][\\udc00-\\udfff]",Ae="["+fe+"]",Oe="\\u200d",xe="(?:"+be+"|"+Ee+")",Re="(?:"+Ae+"|"+Ee+")",Ne="(?:"+ge+"(?:d|ll|m|re|s|t|ve))?",De="(?:"+ge+"(?:D|LL|M|RE|S|T|VE))?",Le=Te+"?",Pe="["+de+"]?",Me="(?:"+Oe+"(?:"+[Se,ke,Ce].join("|")+")"+Pe+Le+")*",Ue="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",je="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fe=Pe+Le+Me,$e="(?:"+[we,ke,Ce].join("|")+")"+Fe,Ve="(?:"+[Se+ye+"?",ye,ke,Ce,me].join("|")+")",Be=RegExp(ge,"g"),qe=RegExp(ye,"g"),ze=RegExp(Ie+"(?="+Ie+")|"+Ve+Fe,"g"),He=RegExp([Ae+"?"+be+"+"+Ne+"(?="+[ve,Ae,"$"].join("|")+")",Re+"+"+De+"(?="+[ve,Ae+xe,"$"].join("|")+")",Ae+"?"+xe+"+"+Ne,Ae+"+"+De,je,Ue,_e,$e].join("|"),"g"),Ke=RegExp("["+Oe+ee+oe+de+"]"),Ge=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,We=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Qe=-1,Xe={};Xe[dt]=Xe[pt]=Xe[gt]=Xe[mt]=Xe[vt]=Xe[yt]=Xe[_t]=Xe[wt]=Xe[bt]=!0,Xe[q]=Xe[z]=Xe[ht]=Xe[K]=Xe[ft]=Xe[G]=Xe[Q]=Xe[X]=Xe[J]=Xe[Z]=Xe[et]=Xe[it]=Xe[ot]=Xe[st]=Xe[ct]=!1;var Ye={};Ye[q]=Ye[z]=Ye[ht]=Ye[ft]=Ye[K]=Ye[G]=Ye[dt]=Ye[pt]=Ye[gt]=Ye[mt]=Ye[vt]=Ye[J]=Ye[Z]=Ye[et]=Ye[it]=Ye[ot]=Ye[st]=Ye[at]=Ye[yt]=Ye[_t]=Ye[wt]=Ye[bt]=!0,Ye[Q]=Ye[X]=Ye[ct]=!1;var Je={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Ze={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},en={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nn=parseFloat,rn=parseInt,on="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,sn="object"==typeof self&&self&&self.Object===Object&&self,an=on||sn||Function("return this")(),un=e&&!e.nodeType&&e,cn=un&&t&&!t.nodeType&&t,ln=cn&&cn.exports===un,hn=ln&&on.process,fn=function(){try{var t=cn&&cn.require&&cn.require("util").types;return t||hn&&hn.binding&&hn.binding("util")}catch(e){}}(),dn=fn&&fn.isArrayBuffer,pn=fn&&fn.isDate,gn=fn&&fn.isMap,mn=fn&&fn.isRegExp,vn=fn&&fn.isSet,yn=fn&&fn.isTypedArray;function _n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function wn(t,e,n,r){var i=-1,o=null==t?0:t.length;while(++i<o){var s=t[i];e(r,s,n(s),t)}return r}function bn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!1===e(t[n],n,t))break;return t}function En(t,e){var n=null==t?0:t.length;while(n--)if(!1===e(t[n],n,t))break;return t}function In(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!e(t[n],n,t))return!1;return!0}function Tn(t,e){var n=-1,r=null==t?0:t.length,i=0,o=[];while(++n<r){var s=t[n];e(s,n,t)&&(o[i++]=s)}return o}function Sn(t,e){var n=null==t?0:t.length;return!!n&&Un(t,e,0)>-1}function kn(t,e,n){var r=-1,i=null==t?0:t.length;while(++r<i)if(n(e,t[r]))return!0;return!1}function Cn(t,e){var n=-1,r=null==t?0:t.length,i=Array(r);while(++n<r)i[n]=e(t[n],n,t);return i}function An(t,e){var n=-1,r=e.length,i=t.length;while(++n<r)t[i+n]=e[n];return t}function On(t,e,n,r){var i=-1,o=null==t?0:t.length;r&&o&&(n=t[++i]);while(++i<o)n=e(n,t[i],i,t);return n}function xn(t,e,n,r){var i=null==t?0:t.length;r&&i&&(n=t[--i]);while(i--)n=e(n,t[i],i,t);return n}function Rn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(e(t[n],n,t))return!0;return!1}var Nn=Vn("length");function Dn(t){return t.split("")}function Ln(t){return t.match(Bt)||[]}function Pn(t,e,n){var r;return n(t,(function(t,n,i){if(e(t,n,i))return r=n,!1})),r}function Mn(t,e,n,r){var i=t.length,o=n+(r?1:-1);while(r?o--:++o<i)if(e(t[o],o,t))return o;return-1}function Un(t,e,n){return e===e?dr(t,e,n):Mn(t,Fn,n)}function jn(t,e,n,r){var i=n-1,o=t.length;while(++i<o)if(r(t[i],e))return i;return-1}function Fn(t){return t!==t}function $n(t,e){var n=null==t?0:t.length;return n?Hn(t,e)/n:j}function Vn(t){return function(e){return null==e?i:e[t]}}function Bn(t){return function(e){return null==t?i:t[e]}}function qn(t,e,n,r,i){return i(t,(function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)})),n}function zn(t,e){var n=t.length;t.sort(e);while(n--)t[n]=t[n].value;return t}function Hn(t,e){var n,r=-1,o=t.length;while(++r<o){var s=e(t[r]);s!==i&&(n=n===i?s:n+s)}return n}function Kn(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function Gn(t,e){return Cn(e,(function(e){return[e,t[e]]}))}function Wn(t){return t?t.slice(0,vr(t)+1).replace(Ut,""):t}function Qn(t){return function(e){return t(e)}}function Xn(t,e){return Cn(e,(function(e){return t[e]}))}function Yn(t,e){return t.has(e)}function Jn(t,e){var n=-1,r=t.length;while(++n<r&&Un(e,t[n],0)>-1);return n}function Zn(t,e){var n=t.length;while(n--&&Un(e,t[n],0)>-1);return n}function tr(t,e){var n=t.length,r=0;while(n--)t[n]===e&&++r;return r}var er=Bn(Je),nr=Bn(Ze);function rr(t){return"\\"+en[t]}function ir(t,e){return null==t?i:t[e]}function or(t){return Ke.test(t)}function sr(t){return Ge.test(t)}function ar(t){var e,n=[];while(!(e=t.next()).done)n.push(e.value);return n}function ur(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function cr(t,e){return function(n){return t(e(n))}}function lr(t,e){var n=-1,r=t.length,i=0,o=[];while(++n<r){var s=t[n];s!==e&&s!==f||(t[n]=f,o[i++]=n)}return o}function hr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function fr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function dr(t,e,n){var r=n-1,i=t.length;while(++r<i)if(t[r]===e)return r;return-1}function pr(t,e,n){var r=n+1;while(r--)if(t[r]===e)return r;return r}function gr(t){return or(t)?_r(t):Nn(t)}function mr(t){return or(t)?wr(t):Dn(t)}function vr(t){var e=t.length;while(e--&&jt.test(t.charAt(e)));return e}var yr=Bn(tn);function _r(t){var e=ze.lastIndex=0;while(ze.test(t))++e;return e}function wr(t){return t.match(ze)||[]}function br(t){return t.match(He)||[]}var Er=function t(e){e=null==e?an:Ir.defaults(an.Object(),e,Ir.pick(an,We));var n=e.Array,r=e.Date,jt=e.Error,Bt=e.Function,ee=e.Math,ne=e.Object,re=e.RegExp,ie=e.String,oe=e.TypeError,se=n.prototype,ae=Bt.prototype,ue=ne.prototype,ce=e["__core-js_shared__"],le=ae.toString,he=ue.hasOwnProperty,fe=0,de=function(){var t=/[^.]+$/.exec(ce&&ce.keys&&ce.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),pe=ue.toString,ge=le.call(ne),me=an._,ve=re("^"+le.call(he).replace(Pt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ye=ln?e.Buffer:i,_e=e.Symbol,we=e.Uint8Array,be=ye?ye.allocUnsafe:i,Ee=cr(ne.getPrototypeOf,ne),Ie=ne.create,Te=ue.propertyIsEnumerable,Se=se.splice,ke=_e?_e.isConcatSpreadable:i,Ce=_e?_e.iterator:i,Ae=_e?_e.toStringTag:i,Oe=function(){try{var t=Gs(ne,"defineProperty");return t({},"",{}),t}catch(e){}}(),xe=e.clearTimeout!==an.clearTimeout&&e.clearTimeout,Re=r&&r.now!==an.Date.now&&r.now,Ne=e.setTimeout!==an.setTimeout&&e.setTimeout,De=ee.ceil,Le=ee.floor,Pe=ne.getOwnPropertySymbols,Me=ye?ye.isBuffer:i,Ue=e.isFinite,je=se.join,Fe=cr(ne.keys,ne),$e=ee.max,Ve=ee.min,ze=r.now,He=e.parseInt,Ke=ee.random,Ge=se.reverse,Je=Gs(e,"DataView"),Ze=Gs(e,"Map"),tn=Gs(e,"Promise"),en=Gs(e,"Set"),on=Gs(e,"WeakMap"),sn=Gs(ne,"create"),un=on&&new on,cn={},hn=Na(Je),fn=Na(Ze),Nn=Na(tn),Dn=Na(en),Bn=Na(on),dr=_e?_e.prototype:i,_r=dr?dr.valueOf:i,wr=dr?dr.toString:i;function Er(t){if(Sl(t)&&!ul(t)&&!(t instanceof Cr)){if(t instanceof kr)return t;if(he.call(t,"__wrapped__"))return La(t)}return new kr(t)}var Tr=function(){function t(){}return function(e){if(!Tl(e))return{};if(Ie)return Ie(e);t.prototype=e;var n=new t;return t.prototype=i,n}}();function Sr(){}function kr(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=i}function Cr(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=F,this.__views__=[]}function Ar(){var t=new Cr(this.__wrapped__);return t.__actions__=is(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=is(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=is(this.__views__),t}function Or(){if(this.__filtered__){var t=new Cr(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function xr(){var t=this.__wrapped__.value(),e=this.__dir__,n=ul(t),r=e<0,i=n?t.length:0,o=Js(0,i,this.__views__),s=o.start,a=o.end,u=a-s,c=r?a:s-1,l=this.__iteratees__,h=l.length,f=0,d=Ve(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return Fo(t,this.__actions__);var p=[];t:while(u--&&f<d){c+=e;var g=-1,m=t[c];while(++g<h){var v=l[g],y=v.iteratee,_=v.type,w=y(m);if(_==D)m=w;else if(!w){if(_==N)continue t;break t}}p[f++]=m}return p}function Rr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Nr(){this.__data__=sn?sn(null):{},this.size=0}function Dr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Lr(t){var e=this.__data__;if(sn){var n=e[t];return n===l?i:n}return he.call(e,t)?e[t]:i}function Pr(t){var e=this.__data__;return sn?e[t]!==i:he.call(e,t)}function Mr(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=sn&&e===i?l:e,this}function Ur(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function jr(){this.__data__=[],this.size=0}function Fr(t){var e=this.__data__,n=li(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Se.call(e,n,1),--this.size,!0}function $r(t){var e=this.__data__,n=li(e,t);return n<0?i:e[n][1]}function Vr(t){return li(this.__data__,t)>-1}function Br(t,e){var n=this.__data__,r=li(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function qr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function zr(){this.size=0,this.__data__={hash:new Rr,map:new(Ze||Ur),string:new Rr}}function Hr(t){var e=Hs(this,t)["delete"](t);return this.size-=e?1:0,e}function Kr(t){return Hs(this,t).get(t)}function Gr(t){return Hs(this,t).has(t)}function Wr(t,e){var n=Hs(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Qr(t){var e=-1,n=null==t?0:t.length;this.__data__=new qr;while(++e<n)this.add(t[e])}function Xr(t){return this.__data__.set(t,l),this}function Yr(t){return this.__data__.has(t)}function Jr(t){var e=this.__data__=new Ur(t);this.size=e.size}function Zr(){this.__data__=new Ur,this.size=0}function ti(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}function ei(t){return this.__data__.get(t)}function ni(t){return this.__data__.has(t)}function ri(t,e){var n=this.__data__;if(n instanceof Ur){var r=n.__data__;if(!Ze||r.length<s-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new qr(r)}return n.set(t,e),this.size=n.size,this}function ii(t,e){var n=ul(t),r=!n&&al(t),i=!n&&!r&&dl(t),o=!n&&!r&&!i&&$l(t),s=n||r||i||o,a=s?Kn(t.length,ie):[],u=a.length;for(var c in t)!e&&!he.call(t,c)||s&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||sa(c,u))||a.push(c);return a}function oi(t){var e=t.length;return e?t[yo(0,e-1)]:i}function si(t,e){return Oa(is(t),mi(e,0,t.length))}function ai(t){return Oa(is(t))}function ui(t,e,n){(n!==i&&!il(t[e],n)||n===i&&!(e in t))&&pi(t,e,n)}function ci(t,e,n){var r=t[e];he.call(t,e)&&il(r,n)&&(n!==i||e in t)||pi(t,e,n)}function li(t,e){var n=t.length;while(n--)if(il(t[n][0],e))return n;return-1}function hi(t,e,n,r){return Ei(t,(function(t,i,o){e(r,t,n(t),o)})),r}function fi(t,e){return t&&os(e,Eh(e),t)}function di(t,e){return t&&os(e,Ih(e),t)}function pi(t,e,n){"__proto__"==e&&Oe?Oe(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function gi(t,e){var r=-1,o=e.length,s=n(o),a=null==t;while(++r<o)s[r]=a?i:mh(t,e[r]);return s}function mi(t,e,n){return t===t&&(n!==i&&(t=t<=n?t:n),e!==i&&(t=t>=e?t:e)),t}function vi(t,e,n,r,o,s){var a,u=e&d,c=e&p,l=e&g;if(n&&(a=o?n(t,r,o,s):n(t)),a!==i)return a;if(!Tl(t))return t;var h=ul(t);if(h){if(a=ea(t),!u)return is(t,a)}else{var f=Ys(t),m=f==X||f==Y;if(dl(t))return Wo(t,u);if(f==et||f==q||m&&!o){if(a=c||m?{}:na(t),!u)return c?as(t,di(a,t)):ss(t,fi(a,t))}else{if(!Ye[f])return o?t:{};a=ra(t,f,u)}}s||(s=new Jr);var v=s.get(t);if(v)return v;s.set(t,a),Ul(t)?t.forEach((function(r){a.add(vi(r,e,n,r,t,s))})):kl(t)&&t.forEach((function(r,i){a.set(i,vi(r,e,n,i,t,s))}));var y=l?c?$s:Fs:c?Ih:Eh,_=h?i:y(t);return bn(_||t,(function(r,i){_&&(i=r,r=t[i]),ci(a,i,vi(r,e,n,i,t,s))})),a}function yi(t){var e=Eh(t);return function(n){return _i(n,t,e)}}function _i(t,e,n){var r=n.length;if(null==t)return!r;t=ne(t);while(r--){var o=n[r],s=e[o],a=t[o];if(a===i&&!(o in t)||!s(a))return!1}return!0}function wi(t,e,n){if("function"!=typeof t)throw new oe(u);return Sa((function(){t.apply(i,n)}),e)}function bi(t,e,n,r){var i=-1,o=Sn,a=!0,u=t.length,c=[],l=e.length;if(!u)return c;n&&(e=Cn(e,Qn(n))),r?(o=kn,a=!1):e.length>=s&&(o=Yn,a=!1,e=new Qr(e));t:while(++i<u){var h=t[i],f=null==n?h:n(h);if(h=r||0!==h?h:0,a&&f===f){var d=l;while(d--)if(e[d]===f)continue t;c.push(h)}else o(e,f,r)||c.push(h)}return c}Er.templateSettings={escape:Ot,evaluate:xt,interpolate:Rt,variable:"",imports:{_:Er}},Er.prototype=Sr.prototype,Er.prototype.constructor=Er,kr.prototype=Tr(Sr.prototype),kr.prototype.constructor=kr,Cr.prototype=Tr(Sr.prototype),Cr.prototype.constructor=Cr,Rr.prototype.clear=Nr,Rr.prototype["delete"]=Dr,Rr.prototype.get=Lr,Rr.prototype.has=Pr,Rr.prototype.set=Mr,Ur.prototype.clear=jr,Ur.prototype["delete"]=Fr,Ur.prototype.get=$r,Ur.prototype.has=Vr,Ur.prototype.set=Br,qr.prototype.clear=zr,qr.prototype["delete"]=Hr,qr.prototype.get=Kr,qr.prototype.has=Gr,qr.prototype.set=Wr,Qr.prototype.add=Qr.prototype.push=Xr,Qr.prototype.has=Yr,Jr.prototype.clear=Zr,Jr.prototype["delete"]=ti,Jr.prototype.get=ei,Jr.prototype.has=ni,Jr.prototype.set=ri;var Ei=ls(Ri),Ii=ls(Ni,!0);function Ti(t,e){var n=!0;return Ei(t,(function(t,r,i){return n=!!e(t,r,i),n})),n}function Si(t,e,n){var r=-1,o=t.length;while(++r<o){var s=t[r],a=e(s);if(null!=a&&(u===i?a===a&&!Fl(a):n(a,u)))var u=a,c=s}return c}function ki(t,e,n,r){var o=t.length;n=Wl(n),n<0&&(n=-n>o?0:o+n),r=r===i||r>o?o:Wl(r),r<0&&(r+=o),r=n>r?0:Ql(r);while(n<r)t[n++]=e;return t}function Ci(t,e){var n=[];return Ei(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}function Ai(t,e,n,r,i){var o=-1,s=t.length;n||(n=oa),i||(i=[]);while(++o<s){var a=t[o];e>0&&n(a)?e>1?Ai(a,e-1,n,r,i):An(i,a):r||(i[i.length]=a)}return i}var Oi=hs(),xi=hs(!0);function Ri(t,e){return t&&Oi(t,e,Eh)}function Ni(t,e){return t&&xi(t,e,Eh)}function Di(t,e){return Tn(e,(function(e){return bl(t[e])}))}function Li(t,e){e=zo(e,t);var n=0,r=e.length;while(null!=t&&n<r)t=t[Ra(e[n++])];return n&&n==r?t:i}function Pi(t,e,n){var r=e(t);return ul(t)?r:An(r,n(t))}function Mi(t){return null==t?t===i?ut:tt:Ae&&Ae in ne(t)?Ws(t):_a(t)}function Ui(t,e){return t>e}function ji(t,e){return null!=t&&he.call(t,e)}function Fi(t,e){return null!=t&&e in ne(t)}function $i(t,e,n){return t>=Ve(e,n)&&t<$e(e,n)}function Vi(t,e,r){var o=r?kn:Sn,s=t[0].length,a=t.length,u=a,c=n(a),l=1/0,h=[];while(u--){var f=t[u];u&&e&&(f=Cn(f,Qn(e))),l=Ve(f.length,l),c[u]=!r&&(e||s>=120&&f.length>=120)?new Qr(u&&f):i}f=t[0];var d=-1,p=c[0];t:while(++d<s&&h.length<l){var g=f[d],m=e?e(g):g;if(g=r||0!==g?g:0,!(p?Yn(p,m):o(h,m,r))){u=a;while(--u){var v=c[u];if(!(v?Yn(v,m):o(t[u],m,r)))continue t}p&&p.push(m),h.push(g)}}return h}function Bi(t,e,n,r){return Ri(t,(function(t,i,o){e(r,n(t),i,o)})),r}function qi(t,e,n){e=zo(e,t),t=ba(t,e);var r=null==t?t:t[Ra(ou(e))];return null==r?i:_n(r,t,n)}function zi(t){return Sl(t)&&Mi(t)==q}function Hi(t){return Sl(t)&&Mi(t)==ht}function Ki(t){return Sl(t)&&Mi(t)==G}function Gi(t,e,n,r,i){return t===e||(null==t||null==e||!Sl(t)&&!Sl(e)?t!==t&&e!==e:Wi(t,e,n,r,Gi,i))}function Wi(t,e,n,r,i,o){var s=ul(t),a=ul(e),u=s?z:Ys(t),c=a?z:Ys(e);u=u==q?et:u,c=c==q?et:c;var l=u==et,h=c==et,f=u==c;if(f&&dl(t)){if(!dl(e))return!1;s=!0,l=!1}if(f&&!l)return o||(o=new Jr),s||$l(t)?Ps(t,e,n,r,i,o):Ms(t,e,u,n,r,i,o);if(!(n&m)){var d=l&&he.call(t,"__wrapped__"),p=h&&he.call(e,"__wrapped__");if(d||p){var g=d?t.value():t,v=p?e.value():e;return o||(o=new Jr),i(g,v,n,r,o)}}return!!f&&(o||(o=new Jr),Us(t,e,n,r,i,o))}function Qi(t){return Sl(t)&&Ys(t)==J}function Xi(t,e,n,r){var o=n.length,s=o,a=!r;if(null==t)return!s;t=ne(t);while(o--){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}while(++o<s){u=n[o];var c=u[0],l=t[c],h=u[1];if(a&&u[2]){if(l===i&&!(c in t))return!1}else{var f=new Jr;if(r)var d=r(l,h,c,t,e,f);if(!(d===i?Gi(h,l,m|v,r,f):d))return!1}}return!0}function Yi(t){if(!Tl(t)||ha(t))return!1;var e=bl(t)?ve:Qt;return e.test(Na(t))}function Ji(t){return Sl(t)&&Mi(t)==it}function Zi(t){return Sl(t)&&Ys(t)==ot}function to(t){return Sl(t)&&Il(t.length)&&!!Xe[Mi(t)]}function eo(t){return"function"==typeof t?t:null==t?Rf:"object"==typeof t?ul(t)?ao(t[0],t[1]):so(t):zf(t)}function no(t){if(!da(t))return Fe(t);var e=[];for(var n in ne(t))he.call(t,n)&&"constructor"!=n&&e.push(n);return e}function ro(t){if(!Tl(t))return ya(t);var e=da(t),n=[];for(var r in t)("constructor"!=r||!e&&he.call(t,r))&&n.push(r);return n}function io(t,e){return t<e}function oo(t,e){var r=-1,i=ll(t)?n(t.length):[];return Ei(t,(function(t,n,o){i[++r]=e(t,n,o)})),i}function so(t){var e=Ks(t);return 1==e.length&&e[0][2]?ga(e[0][0],e[0][1]):function(n){return n===t||Xi(n,t,e)}}function ao(t,e){return ua(t)&&pa(e)?ga(Ra(t),e):function(n){var r=mh(n,t);return r===i&&r===e?yh(n,t):Gi(e,r,m|v)}}function uo(t,e,n,r,o){t!==e&&Oi(e,(function(s,a){if(o||(o=new Jr),Tl(s))co(t,e,a,n,uo,r,o);else{var u=r?r(Ia(t,a),s,a+"",t,e,o):i;u===i&&(u=s),ui(t,a,u)}}),Ih)}function co(t,e,n,r,o,s,a){var u=Ia(t,n),c=Ia(e,n),l=a.get(c);if(l)ui(t,n,l);else{var h=s?s(u,c,n+"",t,e,a):i,f=h===i;if(f){var d=ul(c),p=!d&&dl(c),g=!d&&!p&&$l(c);h=c,d||p||g?ul(u)?h=u:hl(u)?h=is(u):p?(f=!1,h=Wo(c,!0)):g?(f=!1,h=Zo(c,!0)):h=[]:Ll(c)||al(c)?(h=u,al(u)?h=Yl(u):Tl(u)&&!bl(u)||(h=na(c))):f=!1}f&&(a.set(c,h),o(h,c,r,s,a),a["delete"](c)),ui(t,n,h)}}function lo(t,e){var n=t.length;if(n)return e+=e<0?n:0,sa(e,n)?t[e]:i}function ho(t,e,n){e=e.length?Cn(e,(function(t){return ul(t)?function(e){return Li(e,1===t.length?t[0]:t)}:t})):[Rf];var r=-1;e=Cn(e,Qn(zs()));var i=oo(t,(function(t,n,i){var o=Cn(e,(function(e){return e(t)}));return{criteria:o,index:++r,value:t}}));return zn(i,(function(t,e){return es(t,e,n)}))}function fo(t,e){return po(t,e,(function(e,n){return yh(t,n)}))}function po(t,e,n){var r=-1,i=e.length,o={};while(++r<i){var s=e[r],a=Li(t,s);n(a,s)&&To(o,zo(s,t),a)}return o}function go(t){return function(e){return Li(e,t)}}function mo(t,e,n,r){var i=r?jn:Un,o=-1,s=e.length,a=t;t===e&&(e=is(e)),n&&(a=Cn(t,Qn(n)));while(++o<s){var u=0,c=e[o],l=n?n(c):c;while((u=i(a,l,u,r))>-1)a!==t&&Se.call(a,u,1),Se.call(t,u,1)}return t}function vo(t,e){var n=t?e.length:0,r=n-1;while(n--){var i=e[n];if(n==r||i!==o){var o=i;sa(i)?Se.call(t,i,1):Mo(t,i)}}return t}function yo(t,e){return t+Le(Ke()*(e-t+1))}function _o(t,e,r,i){var o=-1,s=$e(De((e-t)/(r||1)),0),a=n(s);while(s--)a[i?s:++o]=t,t+=r;return a}function wo(t,e){var n="";if(!t||e<1||e>M)return n;do{e%2&&(n+=t),e=Le(e/2),e&&(t+=t)}while(e);return n}function bo(t,e){return ka(wa(t,e,Rf),t+"")}function Eo(t){return oi(Vh(t))}function Io(t,e){var n=Vh(t);return Oa(n,mi(e,0,n.length))}function To(t,e,n,r){if(!Tl(t))return t;e=zo(e,t);var o=-1,s=e.length,a=s-1,u=t;while(null!=u&&++o<s){var c=Ra(e[o]),l=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=a){var h=u[c];l=r?r(h,c,u):i,l===i&&(l=Tl(h)?h:sa(e[o+1])?[]:{})}ci(u,c,l),u=u[c]}return t}var So=un?function(t,e){return un.set(t,e),t}:Rf,ko=Oe?function(t,e){return Oe(t,"toString",{configurable:!0,enumerable:!1,value:Cf(e),writable:!0})}:Rf;function Co(t){return Oa(Vh(t))}function Ao(t,e,r){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),r=r>o?o:r,r<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;var s=n(o);while(++i<o)s[i]=t[i+e];return s}function Oo(t,e){var n;return Ei(t,(function(t,r,i){return n=e(t,r,i),!n})),!!n}function xo(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&i<=V){while(r<i){var o=r+i>>>1,s=t[o];null!==s&&!Fl(s)&&(n?s<=e:s<e)?r=o+1:i=o}return i}return Ro(t,e,Rf,n)}function Ro(t,e,n,r){var o=0,s=null==t?0:t.length;if(0===s)return 0;e=n(e);var a=e!==e,u=null===e,c=Fl(e),l=e===i;while(o<s){var h=Le((o+s)/2),f=n(t[h]),d=f!==i,p=null===f,g=f===f,m=Fl(f);if(a)var v=r||g;else v=l?g&&(r||d):u?g&&d&&(r||!p):c?g&&d&&!p&&(r||!m):!p&&!m&&(r?f<=e:f<e);v?o=h+1:s=h}return Ve(s,$)}function No(t,e){var n=-1,r=t.length,i=0,o=[];while(++n<r){var s=t[n],a=e?e(s):s;if(!n||!il(a,u)){var u=a;o[i++]=0===s?0:s}}return o}function Do(t){return"number"==typeof t?t:Fl(t)?j:+t}function Lo(t){if("string"==typeof t)return t;if(ul(t))return Cn(t,Lo)+"";if(Fl(t))return wr?wr.call(t):"";var e=t+"";return"0"==e&&1/t==-P?"-0":e}function Po(t,e,n){var r=-1,i=Sn,o=t.length,a=!0,u=[],c=u;if(n)a=!1,i=kn;else if(o>=s){var l=e?null:Os(t);if(l)return hr(l);a=!1,i=Yn,c=new Qr}else c=e?[]:u;t:while(++r<o){var h=t[r],f=e?e(h):h;if(h=n||0!==h?h:0,a&&f===f){var d=c.length;while(d--)if(c[d]===f)continue t;e&&c.push(f),u.push(h)}else i(c,f,n)||(c!==u&&c.push(f),u.push(h))}return u}function Mo(t,e){return e=zo(e,t),t=ba(t,e),null==t||delete t[Ra(ou(e))]}function Uo(t,e,n,r){return To(t,e,n(Li(t,e)),r)}function jo(t,e,n,r){var i=t.length,o=r?i:-1;while((r?o--:++o<i)&&e(t[o],o,t));return n?Ao(t,r?0:o,r?o+1:i):Ao(t,r?o+1:0,r?i:o)}function Fo(t,e){var n=t;return n instanceof Cr&&(n=n.value()),On(e,(function(t,e){return e.func.apply(e.thisArg,An([t],e.args))}),n)}function $o(t,e,r){var i=t.length;if(i<2)return i?Po(t[0]):[];var o=-1,s=n(i);while(++o<i){var a=t[o],u=-1;while(++u<i)u!=o&&(s[o]=bi(s[o]||a,t[u],e,r))}return Po(Ai(s,1),e,r)}function Vo(t,e,n){var r=-1,o=t.length,s=e.length,a={};while(++r<o){var u=r<s?e[r]:i;n(a,t[r],u)}return a}function Bo(t){return hl(t)?t:[]}function qo(t){return"function"==typeof t?t:Rf}function zo(t,e){return ul(t)?t:ua(t,e)?[t]:xa(Zl(t))}var Ho=bo;function Ko(t,e,n){var r=t.length;return n=n===i?r:n,!e&&n>=r?t:Ao(t,e,n)}var Go=xe||function(t){return an.clearTimeout(t)};function Wo(t,e){if(e)return t.slice();var n=t.length,r=be?be(n):new t.constructor(n);return t.copy(r),r}function Qo(t){var e=new t.constructor(t.byteLength);return new we(e).set(new we(t)),e}function Xo(t,e){var n=e?Qo(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Yo(t){var e=new t.constructor(t.source,Kt.exec(t));return e.lastIndex=t.lastIndex,e}function Jo(t){return _r?ne(_r.call(t)):{}}function Zo(t,e){var n=e?Qo(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function ts(t,e){if(t!==e){var n=t!==i,r=null===t,o=t===t,s=Fl(t),a=e!==i,u=null===e,c=e===e,l=Fl(e);if(!u&&!l&&!s&&t>e||s&&a&&c&&!u&&!l||r&&a&&c||!n&&c||!o)return 1;if(!r&&!s&&!l&&t<e||l&&n&&o&&!r&&!s||u&&n&&o||!a&&o||!c)return-1}return 0}function es(t,e,n){var r=-1,i=t.criteria,o=e.criteria,s=i.length,a=n.length;while(++r<s){var u=ts(i[r],o[r]);if(u){if(r>=a)return u;var c=n[r];return u*("desc"==c?-1:1)}}return t.index-e.index}function ns(t,e,r,i){var o=-1,s=t.length,a=r.length,u=-1,c=e.length,l=$e(s-a,0),h=n(c+l),f=!i;while(++u<c)h[u]=e[u];while(++o<a)(f||o<s)&&(h[r[o]]=t[o]);while(l--)h[u++]=t[o++];return h}function rs(t,e,r,i){var o=-1,s=t.length,a=-1,u=r.length,c=-1,l=e.length,h=$e(s-u,0),f=n(h+l),d=!i;while(++o<h)f[o]=t[o];var p=o;while(++c<l)f[p+c]=e[c];while(++a<u)(d||o<s)&&(f[p+r[a]]=t[o++]);return f}function is(t,e){var r=-1,i=t.length;e||(e=n(i));while(++r<i)e[r]=t[r];return e}function os(t,e,n,r){var o=!n;n||(n={});var s=-1,a=e.length;while(++s<a){var u=e[s],c=r?r(n[u],t[u],u,n,t):i;c===i&&(c=t[u]),o?pi(n,u,c):ci(n,u,c)}return n}function ss(t,e){return os(t,Qs(t),e)}function as(t,e){return os(t,Xs(t),e)}function us(t,e){return function(n,r){var i=ul(n)?wn:hi,o=e?e():{};return i(n,t,zs(r,2),o)}}function cs(t){return bo((function(e,n){var r=-1,o=n.length,s=o>1?n[o-1]:i,a=o>2?n[2]:i;s=t.length>3&&"function"==typeof s?(o--,s):i,a&&aa(n[0],n[1],a)&&(s=o<3?i:s,o=1),e=ne(e);while(++r<o){var u=n[r];u&&t(e,u,r,s)}return e}))}function ls(t,e){return function(n,r){if(null==n)return n;if(!ll(n))return t(n,r);var i=n.length,o=e?i:-1,s=ne(n);while(e?o--:++o<i)if(!1===r(s[o],o,s))break;return n}}function hs(t){return function(e,n,r){var i=-1,o=ne(e),s=r(e),a=s.length;while(a--){var u=s[t?a:++i];if(!1===n(o[u],u,o))break}return e}}function fs(t,e,n){var r=e&y,i=gs(t);function o(){var e=this&&this!==an&&this instanceof o?i:t;return e.apply(r?n:this,arguments)}return o}function ds(t){return function(e){e=Zl(e);var n=or(e)?mr(e):i,r=n?n[0]:e.charAt(0),o=n?Ko(n,1).join(""):e.slice(1);return r[t]()+o}}function ps(t){return function(e){return On(Ef(Wh(e).replace(Be,"")),t,"")}}function gs(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Tr(t.prototype),r=t.apply(n,e);return Tl(r)?r:n}}function ms(t,e,r){var o=gs(t);function s(){var a=arguments.length,u=n(a),c=a,l=qs(s);while(c--)u[c]=arguments[c];var h=a<3&&u[0]!==l&&u[a-1]!==l?[]:lr(u,l);if(a-=h.length,a<r)return Cs(t,e,_s,s.placeholder,i,u,h,i,i,r-a);var f=this&&this!==an&&this instanceof s?o:t;return _n(f,this,u)}return s}function vs(t){return function(e,n,r){var o=ne(e);if(!ll(e)){var s=zs(n,3);e=Eh(e),n=function(t){return s(o[t],t,o)}}var a=t(e,n,r);return a>-1?o[s?e[a]:a]:i}}function ys(t){return js((function(e){var n=e.length,r=n,o=kr.prototype.thru;t&&e.reverse();while(r--){var s=e[r];if("function"!=typeof s)throw new oe(u);if(o&&!a&&"wrapper"==Bs(s))var a=new kr([],!0)}r=a?r:n;while(++r<n){s=e[r];var c=Bs(s),l="wrapper"==c?Vs(s):i;a=l&&la(l[0])&&l[1]==(S|b|I|k)&&!l[4].length&&1==l[9]?a[Bs(l[0])].apply(a,l[3]):1==s.length&&la(s)?a[c]():a.thru(s)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&ul(r))return a.plant(r).value();var i=0,o=n?e[i].apply(this,t):r;while(++i<n)o=e[i].call(this,o);return o}}))}function _s(t,e,r,o,s,a,u,c,l,h){var f=e&S,d=e&y,p=e&_,g=e&(b|E),m=e&C,v=p?i:gs(t);function w(){var i=arguments.length,y=n(i),_=i;while(_--)y[_]=arguments[_];if(g)var b=qs(w),E=tr(y,b);if(o&&(y=ns(y,o,s,g)),a&&(y=rs(y,a,u,g)),i-=E,g&&i<h){var I=lr(y,b);return Cs(t,e,_s,w.placeholder,r,y,I,c,l,h-i)}var T=d?r:this,S=p?T[t]:t;return i=y.length,c?y=Ea(y,c):m&&i>1&&y.reverse(),f&&l<i&&(y.length=l),this&&this!==an&&this instanceof w&&(S=v||gs(S)),S.apply(T,y)}return w}function ws(t,e){return function(n,r){return Bi(n,t,e(r),{})}}function bs(t,e){return function(n,r){var o;if(n===i&&r===i)return e;if(n!==i&&(o=n),r!==i){if(o===i)return r;"string"==typeof n||"string"==typeof r?(n=Lo(n),r=Lo(r)):(n=Do(n),r=Do(r)),o=t(n,r)}return o}}function Es(t){return js((function(e){return e=Cn(e,Qn(zs())),bo((function(n){var r=this;return t(e,(function(t){return _n(t,r,n)}))}))}))}function Is(t,e){e=e===i?" ":Lo(e);var n=e.length;if(n<2)return n?wo(e,t):e;var r=wo(e,De(t/gr(e)));return or(e)?Ko(mr(r),0,t).join(""):r.slice(0,t)}function Ts(t,e,r,i){var o=e&y,s=gs(t);function a(){var e=-1,u=arguments.length,c=-1,l=i.length,h=n(l+u),f=this&&this!==an&&this instanceof a?s:t;while(++c<l)h[c]=i[c];while(u--)h[c++]=arguments[++e];return _n(f,o?r:this,h)}return a}function Ss(t){return function(e,n,r){return r&&"number"!=typeof r&&aa(e,n,r)&&(n=r=i),e=Gl(e),n===i?(n=e,e=0):n=Gl(n),r=r===i?e<n?1:-1:Gl(r),_o(e,n,r,t)}}function ks(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Xl(e),n=Xl(n)),t(e,n)}}function Cs(t,e,n,r,o,s,a,u,c,l){var h=e&b,f=h?a:i,d=h?i:a,p=h?s:i,g=h?i:s;e|=h?I:T,e&=~(h?T:I),e&w||(e&=~(y|_));var m=[t,e,o,p,f,g,d,u,c,l],v=n.apply(i,m);return la(t)&&Ta(v,m),v.placeholder=r,Ca(v,t,e)}function As(t){var e=ee[t];return function(t,n){if(t=Xl(t),n=null==n?0:Ve(Wl(n),292),n&&Ue(t)){var r=(Zl(t)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(Zl(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}var Os=en&&1/hr(new en([,-0]))[1]==P?function(t){return new en(t)}:Ff;function xs(t){return function(e){var n=Ys(e);return n==J?ur(e):n==ot?fr(e):Gn(e,t(e))}}function Rs(t,e,n,r,o,s,a,c){var l=e&_;if(!l&&"function"!=typeof t)throw new oe(u);var h=r?r.length:0;if(h||(e&=~(I|T),r=o=i),a=a===i?a:$e(Wl(a),0),c=c===i?c:Wl(c),h-=o?o.length:0,e&T){var f=r,d=o;r=o=i}var p=l?i:Vs(t),g=[t,e,n,r,o,f,d,s,a,c];if(p&&va(g,p),t=g[0],e=g[1],n=g[2],r=g[3],o=g[4],c=g[9]=g[9]===i?l?0:t.length:$e(g[9]-h,0),!c&&e&(b|E)&&(e&=~(b|E)),e&&e!=y)m=e==b||e==E?ms(t,e,c):e!=I&&e!=(y|I)||o.length?_s.apply(i,g):Ts(t,e,n,r);else var m=fs(t,e,n);var v=p?So:Ta;return Ca(v(m,g),t,e)}function Ns(t,e,n,r){return t===i||il(t,ue[n])&&!he.call(r,n)?e:t}function Ds(t,e,n,r,o,s){return Tl(t)&&Tl(e)&&(s.set(e,t),uo(t,e,i,Ds,s),s["delete"](e)),t}function Ls(t){return Ll(t)?i:t}function Ps(t,e,n,r,o,s){var a=n&m,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=s.get(t),h=s.get(e);if(l&&h)return l==e&&h==t;var f=-1,d=!0,p=n&v?new Qr:i;s.set(t,e),s.set(e,t);while(++f<u){var g=t[f],y=e[f];if(r)var _=a?r(y,g,f,e,t,s):r(g,y,f,t,e,s);if(_!==i){if(_)continue;d=!1;break}if(p){if(!Rn(e,(function(t,e){if(!Yn(p,e)&&(g===t||o(g,t,n,r,s)))return p.push(e)}))){d=!1;break}}else if(g!==y&&!o(g,y,n,r,s)){d=!1;break}}return s["delete"](t),s["delete"](e),d}function Ms(t,e,n,r,i,o,s){switch(n){case ft:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ht:return!(t.byteLength!=e.byteLength||!o(new we(t),new we(e)));case K:case G:case Z:return il(+t,+e);case Q:return t.name==e.name&&t.message==e.message;case it:case st:return t==e+"";case J:var a=ur;case ot:var u=r&m;if(a||(a=hr),t.size!=e.size&&!u)return!1;var c=s.get(t);if(c)return c==e;r|=v,s.set(t,e);var l=Ps(a(t),a(e),r,i,o,s);return s["delete"](t),l;case at:if(_r)return _r.call(t)==_r.call(e)}return!1}function Us(t,e,n,r,o,s){var a=n&m,u=Fs(t),c=u.length,l=Fs(e),h=l.length;if(c!=h&&!a)return!1;var f=c;while(f--){var d=u[f];if(!(a?d in e:he.call(e,d)))return!1}var p=s.get(t),g=s.get(e);if(p&&g)return p==e&&g==t;var v=!0;s.set(t,e),s.set(e,t);var y=a;while(++f<c){d=u[f];var _=t[d],w=e[d];if(r)var b=a?r(w,_,d,e,t,s):r(_,w,d,t,e,s);if(!(b===i?_===w||o(_,w,n,r,s):b)){v=!1;break}y||(y="constructor"==d)}if(v&&!y){var E=t.constructor,I=e.constructor;E==I||!("constructor"in t)||!("constructor"in e)||"function"==typeof E&&E instanceof E&&"function"==typeof I&&I instanceof I||(v=!1)}return s["delete"](t),s["delete"](e),v}function js(t){return ka(wa(t,i,Wa),t+"")}function Fs(t){return Pi(t,Eh,Qs)}function $s(t){return Pi(t,Ih,Xs)}var Vs=un?function(t){return un.get(t)}:Ff;function Bs(t){var e=t.name+"",n=cn[e],r=he.call(cn,e)?n.length:0;while(r--){var i=n[r],o=i.func;if(null==o||o==t)return i.name}return e}function qs(t){var e=he.call(Er,"placeholder")?Er:t;return e.placeholder}function zs(){var t=Er.iteratee||Nf;return t=t===Nf?eo:t,arguments.length?t(arguments[0],arguments[1]):t}function Hs(t,e){var n=t.__data__;return ca(e)?n["string"==typeof e?"string":"hash"]:n.map}function Ks(t){var e=Eh(t),n=e.length;while(n--){var r=e[n],i=t[r];e[n]=[r,i,pa(i)]}return e}function Gs(t,e){var n=ir(t,e);return Yi(n)?n:i}function Ws(t){var e=he.call(t,Ae),n=t[Ae];try{t[Ae]=i;var r=!0}catch(s){}var o=pe.call(t);return r&&(e?t[Ae]=n:delete t[Ae]),o}var Qs=Pe?function(t){return null==t?[]:(t=ne(t),Tn(Pe(t),(function(e){return Te.call(t,e)})))}:Wf,Xs=Pe?function(t){var e=[];while(t)An(e,Qs(t)),t=Ee(t);return e}:Wf,Ys=Mi;function Js(t,e,n){var r=-1,i=n.length;while(++r<i){var o=n[r],s=o.size;switch(o.type){case"drop":t+=s;break;case"dropRight":e-=s;break;case"take":e=Ve(e,t+s);break;case"takeRight":t=$e(t,e-s);break}}return{start:t,end:e}}function Zs(t){var e=t.match($t);return e?e[1].split(Vt):[]}function ta(t,e,n){e=zo(e,t);var r=-1,i=e.length,o=!1;while(++r<i){var s=Ra(e[r]);if(!(o=null!=t&&n(t,s)))break;t=t[s]}return o||++r!=i?o:(i=null==t?0:t.length,!!i&&Il(i)&&sa(s,i)&&(ul(t)||al(t)))}function ea(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&he.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function na(t){return"function"!=typeof t.constructor||da(t)?{}:Tr(Ee(t))}function ra(t,e,n){var r=t.constructor;switch(e){case ht:return Qo(t);case K:case G:return new r(+t);case ft:return Xo(t,n);case dt:case pt:case gt:case mt:case vt:case yt:case _t:case wt:case bt:return Zo(t,n);case J:return new r;case Z:case st:return new r(t);case it:return Yo(t);case ot:return new r;case at:return Jo(t)}}function ia(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Ft,"{\n/* [wrapped with "+e+"] */\n")}function oa(t){return ul(t)||al(t)||!!(ke&&t&&t[ke])}function sa(t,e){var n=typeof t;return e=null==e?M:e,!!e&&("number"==n||"symbol"!=n&&Yt.test(t))&&t>-1&&t%1==0&&t<e}function aa(t,e,n){if(!Tl(n))return!1;var r=typeof e;return!!("number"==r?ll(n)&&sa(e,n.length):"string"==r&&e in n)&&il(n[e],t)}function ua(t,e){if(ul(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Fl(t))||(Dt.test(t)||!Nt.test(t)||null!=e&&t in ne(e))}function ca(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function la(t){var e=Bs(t),n=Er[e];if("function"!=typeof n||!(e in Cr.prototype))return!1;if(t===n)return!0;var r=Vs(n);return!!r&&t===r[0]}function ha(t){return!!de&&de in t}(Je&&Ys(new Je(new ArrayBuffer(1)))!=ft||Ze&&Ys(new Ze)!=J||tn&&Ys(tn.resolve())!=nt||en&&Ys(new en)!=ot||on&&Ys(new on)!=ct)&&(Ys=function(t){var e=Mi(t),n=e==et?t.constructor:i,r=n?Na(n):"";if(r)switch(r){case hn:return ft;case fn:return J;case Nn:return nt;case Dn:return ot;case Bn:return ct}return e});var fa=ce?bl:Qf;function da(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||ue;return t===n}function pa(t){return t===t&&!Tl(t)}function ga(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==i||t in ne(n)))}}function ma(t){var e=$c(t,(function(t){return n.size===h&&n.clear(),t})),n=e.cache;return e}function va(t,e){var n=t[1],r=e[1],i=n|r,o=i<(y|_|S),s=r==S&&n==b||r==S&&n==k&&t[7].length<=e[8]||r==(S|k)&&e[7].length<=e[8]&&n==b;if(!o&&!s)return t;r&y&&(t[2]=e[2],i|=n&y?0:w);var a=e[3];if(a){var u=t[3];t[3]=u?ns(u,a,e[4]):a,t[4]=u?lr(t[3],f):e[4]}return a=e[5],a&&(u=t[5],t[5]=u?rs(u,a,e[6]):a,t[6]=u?lr(t[5],f):e[6]),a=e[7],a&&(t[7]=a),r&S&&(t[8]=null==t[8]?e[8]:Ve(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function ya(t){var e=[];if(null!=t)for(var n in ne(t))e.push(n);return e}function _a(t){return pe.call(t)}function wa(t,e,r){return e=$e(e===i?t.length-1:e,0),function(){var i=arguments,o=-1,s=$e(i.length-e,0),a=n(s);while(++o<s)a[o]=i[e+o];o=-1;var u=n(e+1);while(++o<e)u[o]=i[o];return u[e]=r(a),_n(t,this,u)}}function ba(t,e){return e.length<2?t:Li(t,Ao(e,0,-1))}function Ea(t,e){var n=t.length,r=Ve(e.length,n),o=is(t);while(r--){var s=e[r];t[r]=sa(s,n)?o[s]:i}return t}function Ia(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}var Ta=Aa(So),Sa=Ne||function(t,e){return an.setTimeout(t,e)},ka=Aa(ko);function Ca(t,e,n){var r=e+"";return ka(t,ia(r,Da(Zs(r),n)))}function Aa(t){var e=0,n=0;return function(){var r=ze(),o=R-(r-n);if(n=r,o>0){if(++e>=x)return arguments[0]}else e=0;return t.apply(i,arguments)}}function Oa(t,e){var n=-1,r=t.length,o=r-1;e=e===i?r:e;while(++n<e){var s=yo(n,o),a=t[s];t[s]=t[n],t[n]=a}return t.length=e,t}var xa=ma((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Lt,(function(t,n,r,i){e.push(r?i.replace(zt,"$1"):n||t)})),e}));function Ra(t){if("string"==typeof t||Fl(t))return t;var e=t+"";return"0"==e&&1/t==-P?"-0":e}function Na(t){if(null!=t){try{return le.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Da(t,e){return bn(B,(function(n){var r="_."+n[0];e&n[1]&&!Sn(t,r)&&t.push(r)})),t.sort()}function La(t){if(t instanceof Cr)return t.clone();var e=new kr(t.__wrapped__,t.__chain__);return e.__actions__=is(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function Pa(t,e,r){e=(r?aa(t,e,r):e===i)?1:$e(Wl(e),0);var o=null==t?0:t.length;if(!o||e<1)return[];var s=0,a=0,u=n(De(o/e));while(s<o)u[a++]=Ao(t,s,s+=e);return u}function Ma(t){var e=-1,n=null==t?0:t.length,r=0,i=[];while(++e<n){var o=t[e];o&&(i[r++]=o)}return i}function Ua(){var t=arguments.length;if(!t)return[];var e=n(t-1),r=arguments[0],i=t;while(i--)e[i-1]=arguments[i];return An(ul(r)?is(r):[r],Ai(e,1))}var ja=bo((function(t,e){return hl(t)?bi(t,Ai(e,1,hl,!0)):[]})),Fa=bo((function(t,e){var n=ou(e);return hl(n)&&(n=i),hl(t)?bi(t,Ai(e,1,hl,!0),zs(n,2)):[]})),$a=bo((function(t,e){var n=ou(e);return hl(n)&&(n=i),hl(t)?bi(t,Ai(e,1,hl,!0),i,n):[]}));function Va(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Wl(e),Ao(t,e<0?0:e,r)):[]}function Ba(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Wl(e),e=r-e,Ao(t,0,e<0?0:e)):[]}function qa(t,e){return t&&t.length?jo(t,zs(e,3),!0,!0):[]}function za(t,e){return t&&t.length?jo(t,zs(e,3),!0):[]}function Ha(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&aa(t,e,n)&&(n=0,r=i),ki(t,e,n,r)):[]}function Ka(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Wl(n);return i<0&&(i=$e(r+i,0)),Mn(t,zs(e,3),i)}function Ga(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=r-1;return n!==i&&(o=Wl(n),o=n<0?$e(r+o,0):Ve(o,r-1)),Mn(t,zs(e,3),o,!0)}function Wa(t){var e=null==t?0:t.length;return e?Ai(t,1):[]}function Qa(t){var e=null==t?0:t.length;return e?Ai(t,P):[]}function Xa(t,e){var n=null==t?0:t.length;return n?(e=e===i?1:Wl(e),Ai(t,e)):[]}function Ya(t){var e=-1,n=null==t?0:t.length,r={};while(++e<n){var i=t[e];r[i[0]]=i[1]}return r}function Ja(t){return t&&t.length?t[0]:i}function Za(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Wl(n);return i<0&&(i=$e(r+i,0)),Un(t,e,i)}function tu(t){var e=null==t?0:t.length;return e?Ao(t,0,-1):[]}var eu=bo((function(t){var e=Cn(t,Bo);return e.length&&e[0]===t[0]?Vi(e):[]})),nu=bo((function(t){var e=ou(t),n=Cn(t,Bo);return e===ou(n)?e=i:n.pop(),n.length&&n[0]===t[0]?Vi(n,zs(e,2)):[]})),ru=bo((function(t){var e=ou(t),n=Cn(t,Bo);return e="function"==typeof e?e:i,e&&n.pop(),n.length&&n[0]===t[0]?Vi(n,i,e):[]}));function iu(t,e){return null==t?"":je.call(t,e)}function ou(t){var e=null==t?0:t.length;return e?t[e-1]:i}function su(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=r;return n!==i&&(o=Wl(n),o=o<0?$e(r+o,0):Ve(o,r-1)),e===e?pr(t,e,o):Mn(t,Fn,o,!0)}function au(t,e){return t&&t.length?lo(t,Wl(e)):i}var uu=bo(cu);function cu(t,e){return t&&t.length&&e&&e.length?mo(t,e):t}function lu(t,e,n){return t&&t.length&&e&&e.length?mo(t,e,zs(n,2)):t}function hu(t,e,n){return t&&t.length&&e&&e.length?mo(t,e,i,n):t}var fu=js((function(t,e){var n=null==t?0:t.length,r=gi(t,e);return vo(t,Cn(e,(function(t){return sa(t,n)?+t:t})).sort(ts)),r}));function du(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],o=t.length;e=zs(e,3);while(++r<o){var s=t[r];e(s,r,t)&&(n.push(s),i.push(r))}return vo(t,i),n}function pu(t){return null==t?t:Ge.call(t)}function gu(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&aa(t,e,n)?(e=0,n=r):(e=null==e?0:Wl(e),n=n===i?r:Wl(n)),Ao(t,e,n)):[]}function mu(t,e){return xo(t,e)}function vu(t,e,n){return Ro(t,e,zs(n,2))}function yu(t,e){var n=null==t?0:t.length;if(n){var r=xo(t,e);if(r<n&&il(t[r],e))return r}return-1}function _u(t,e){return xo(t,e,!0)}function wu(t,e,n){return Ro(t,e,zs(n,2),!0)}function bu(t,e){var n=null==t?0:t.length;if(n){var r=xo(t,e,!0)-1;if(il(t[r],e))return r}return-1}function Eu(t){return t&&t.length?No(t):[]}function Iu(t,e){return t&&t.length?No(t,zs(e,2)):[]}function Tu(t){var e=null==t?0:t.length;return e?Ao(t,1,e):[]}function Su(t,e,n){return t&&t.length?(e=n||e===i?1:Wl(e),Ao(t,0,e<0?0:e)):[]}function ku(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Wl(e),e=r-e,Ao(t,e<0?0:e,r)):[]}function Cu(t,e){return t&&t.length?jo(t,zs(e,3),!1,!0):[]}function Au(t,e){return t&&t.length?jo(t,zs(e,3)):[]}var Ou=bo((function(t){return Po(Ai(t,1,hl,!0))})),xu=bo((function(t){var e=ou(t);return hl(e)&&(e=i),Po(Ai(t,1,hl,!0),zs(e,2))})),Ru=bo((function(t){var e=ou(t);return e="function"==typeof e?e:i,Po(Ai(t,1,hl,!0),i,e)}));function Nu(t){return t&&t.length?Po(t):[]}function Du(t,e){return t&&t.length?Po(t,zs(e,2)):[]}function Lu(t,e){return e="function"==typeof e?e:i,t&&t.length?Po(t,i,e):[]}function Pu(t){if(!t||!t.length)return[];var e=0;return t=Tn(t,(function(t){if(hl(t))return e=$e(t.length,e),!0})),Kn(e,(function(e){return Cn(t,Vn(e))}))}function Mu(t,e){if(!t||!t.length)return[];var n=Pu(t);return null==e?n:Cn(n,(function(t){return _n(e,i,t)}))}var Uu=bo((function(t,e){return hl(t)?bi(t,e):[]})),ju=bo((function(t){return $o(Tn(t,hl))})),Fu=bo((function(t){var e=ou(t);return hl(e)&&(e=i),$o(Tn(t,hl),zs(e,2))})),$u=bo((function(t){var e=ou(t);return e="function"==typeof e?e:i,$o(Tn(t,hl),i,e)})),Vu=bo(Pu);function Bu(t,e){return Vo(t||[],e||[],ci)}function qu(t,e){return Vo(t||[],e||[],To)}var zu=bo((function(t){var e=t.length,n=e>1?t[e-1]:i;return n="function"==typeof n?(t.pop(),n):i,Mu(t,n)}));function Hu(t){var e=Er(t);return e.__chain__=!0,e}function Ku(t,e){return e(t),t}function Gu(t,e){return e(t)}var Wu=js((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,o=function(e){return gi(e,t)};return!(e>1||this.__actions__.length)&&r instanceof Cr&&sa(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Gu,args:[o],thisArg:i}),new kr(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(i),t}))):this.thru(o)}));function Qu(){return Hu(this)}function Xu(){return new kr(this.value(),this.__chain__)}function Yu(){this.__values__===i&&(this.__values__=Kl(this.value()));var t=this.__index__>=this.__values__.length,e=t?i:this.__values__[this.__index__++];return{done:t,value:e}}function Ju(){return this}function Zu(t){var e,n=this;while(n instanceof Sr){var r=La(n);r.__index__=0,r.__values__=i,e?o.__wrapped__=r:e=r;var o=r;n=n.__wrapped__}return o.__wrapped__=t,e}function tc(){var t=this.__wrapped__;if(t instanceof Cr){var e=t;return this.__actions__.length&&(e=new Cr(this)),e=e.reverse(),e.__actions__.push({func:Gu,args:[pu],thisArg:i}),new kr(e,this.__chain__)}return this.thru(pu)}function ec(){return Fo(this.__wrapped__,this.__actions__)}var nc=us((function(t,e,n){he.call(t,n)?++t[n]:pi(t,n,1)}));function rc(t,e,n){var r=ul(t)?In:Ti;return n&&aa(t,e,n)&&(e=i),r(t,zs(e,3))}function ic(t,e){var n=ul(t)?Tn:Ci;return n(t,zs(e,3))}var oc=vs(Ka),sc=vs(Ga);function ac(t,e){return Ai(mc(t,e),1)}function uc(t,e){return Ai(mc(t,e),P)}function cc(t,e,n){return n=n===i?1:Wl(n),Ai(mc(t,e),n)}function lc(t,e){var n=ul(t)?bn:Ei;return n(t,zs(e,3))}function hc(t,e){var n=ul(t)?En:Ii;return n(t,zs(e,3))}var fc=us((function(t,e,n){he.call(t,n)?t[n].push(e):pi(t,n,[e])}));function dc(t,e,n,r){t=ll(t)?t:Vh(t),n=n&&!r?Wl(n):0;var i=t.length;return n<0&&(n=$e(i+n,0)),jl(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&Un(t,e,n)>-1}var pc=bo((function(t,e,r){var i=-1,o="function"==typeof e,s=ll(t)?n(t.length):[];return Ei(t,(function(t){s[++i]=o?_n(e,t,r):qi(t,e,r)})),s})),gc=us((function(t,e,n){pi(t,n,e)}));function mc(t,e){var n=ul(t)?Cn:oo;return n(t,zs(e,3))}function vc(t,e,n,r){return null==t?[]:(ul(e)||(e=null==e?[]:[e]),n=r?i:n,ul(n)||(n=null==n?[]:[n]),ho(t,e,n))}var yc=us((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]}));function _c(t,e,n){var r=ul(t)?On:qn,i=arguments.length<3;return r(t,zs(e,4),n,i,Ei)}function wc(t,e,n){var r=ul(t)?xn:qn,i=arguments.length<3;return r(t,zs(e,4),n,i,Ii)}function bc(t,e){var n=ul(t)?Tn:Ci;return n(t,Vc(zs(e,3)))}function Ec(t){var e=ul(t)?oi:Eo;return e(t)}function Ic(t,e,n){e=(n?aa(t,e,n):e===i)?1:Wl(e);var r=ul(t)?si:Io;return r(t,e)}function Tc(t){var e=ul(t)?ai:Co;return e(t)}function Sc(t){if(null==t)return 0;if(ll(t))return jl(t)?gr(t):t.length;var e=Ys(t);return e==J||e==ot?t.size:no(t).length}function kc(t,e,n){var r=ul(t)?Rn:Oo;return n&&aa(t,e,n)&&(e=i),r(t,zs(e,3))}var Cc=bo((function(t,e){if(null==t)return[];var n=e.length;return n>1&&aa(t,e[0],e[1])?e=[]:n>2&&aa(e[0],e[1],e[2])&&(e=[e[0]]),ho(t,Ai(e,1),[])})),Ac=Re||function(){return an.Date.now()};function Oc(t,e){if("function"!=typeof e)throw new oe(u);return t=Wl(t),function(){if(--t<1)return e.apply(this,arguments)}}function xc(t,e,n){return e=n?i:e,e=t&&null==e?t.length:e,Rs(t,S,i,i,i,i,e)}function Rc(t,e){var n;if("function"!=typeof e)throw new oe(u);return t=Wl(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=i),n}}var Nc=bo((function(t,e,n){var r=y;if(n.length){var i=lr(n,qs(Nc));r|=I}return Rs(t,r,e,n,i)})),Dc=bo((function(t,e,n){var r=y|_;if(n.length){var i=lr(n,qs(Dc));r|=I}return Rs(e,r,t,n,i)}));function Lc(t,e,n){e=n?i:e;var r=Rs(t,b,i,i,i,i,i,e);return r.placeholder=Lc.placeholder,r}function Pc(t,e,n){e=n?i:e;var r=Rs(t,E,i,i,i,i,i,e);return r.placeholder=Pc.placeholder,r}function Mc(t,e,n){var r,o,s,a,c,l,h=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new oe(u);function g(e){var n=r,s=o;return r=o=i,h=e,a=t.apply(s,n),a}function m(t){return h=t,c=Sa(_,e),f?g(t):a}function v(t){var n=t-l,r=t-h,i=e-n;return d?Ve(i,s-r):i}function y(t){var n=t-l,r=t-h;return l===i||n>=e||n<0||d&&r>=s}function _(){var t=Ac();if(y(t))return w(t);c=Sa(_,v(t))}function w(t){return c=i,p&&r?g(t):(r=o=i,a)}function b(){c!==i&&Go(c),h=0,r=l=o=c=i}function E(){return c===i?a:w(Ac())}function I(){var t=Ac(),n=y(t);if(r=arguments,o=this,l=t,n){if(c===i)return m(l);if(d)return Go(c),c=Sa(_,e),g(l)}return c===i&&(c=Sa(_,e)),a}return e=Xl(e)||0,Tl(n)&&(f=!!n.leading,d="maxWait"in n,s=d?$e(Xl(n.maxWait)||0,e):s,p="trailing"in n?!!n.trailing:p),I.cancel=b,I.flush=E,I}var Uc=bo((function(t,e){return wi(t,1,e)})),jc=bo((function(t,e,n){return wi(t,Xl(e)||0,n)}));function Fc(t){return Rs(t,C)}function $c(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new oe(u);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=t.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new($c.Cache||qr),n}function Vc(t){if("function"!=typeof t)throw new oe(u);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Bc(t){return Rc(2,t)}$c.Cache=qr;var qc=Ho((function(t,e){e=1==e.length&&ul(e[0])?Cn(e[0],Qn(zs())):Cn(Ai(e,1),Qn(zs()));var n=e.length;return bo((function(r){var i=-1,o=Ve(r.length,n);while(++i<o)r[i]=e[i].call(this,r[i]);return _n(t,this,r)}))})),zc=bo((function(t,e){var n=lr(e,qs(zc));return Rs(t,I,i,e,n)})),Hc=bo((function(t,e){var n=lr(e,qs(Hc));return Rs(t,T,i,e,n)})),Kc=js((function(t,e){return Rs(t,k,i,i,i,e)}));function Gc(t,e){if("function"!=typeof t)throw new oe(u);return e=e===i?e:Wl(e),bo(t,e)}function Wc(t,e){if("function"!=typeof t)throw new oe(u);return e=null==e?0:$e(Wl(e),0),bo((function(n){var r=n[e],i=Ko(n,0,e);return r&&An(i,r),_n(t,this,i)}))}function Qc(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new oe(u);return Tl(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Mc(t,e,{leading:r,maxWait:e,trailing:i})}function Xc(t){return xc(t,1)}function Yc(t,e){return zc(qo(e),t)}function Jc(){if(!arguments.length)return[];var t=arguments[0];return ul(t)?t:[t]}function Zc(t){return vi(t,g)}function tl(t,e){return e="function"==typeof e?e:i,vi(t,g,e)}function el(t){return vi(t,d|g)}function nl(t,e){return e="function"==typeof e?e:i,vi(t,d|g,e)}function rl(t,e){return null==e||_i(t,e,Eh(e))}function il(t,e){return t===e||t!==t&&e!==e}var ol=ks(Ui),sl=ks((function(t,e){return t>=e})),al=zi(function(){return arguments}())?zi:function(t){return Sl(t)&&he.call(t,"callee")&&!Te.call(t,"callee")},ul=n.isArray,cl=dn?Qn(dn):Hi;function ll(t){return null!=t&&Il(t.length)&&!bl(t)}function hl(t){return Sl(t)&&ll(t)}function fl(t){return!0===t||!1===t||Sl(t)&&Mi(t)==K}var dl=Me||Qf,pl=pn?Qn(pn):Ki;function gl(t){return Sl(t)&&1===t.nodeType&&!Ll(t)}function ml(t){if(null==t)return!0;if(ll(t)&&(ul(t)||"string"==typeof t||"function"==typeof t.splice||dl(t)||$l(t)||al(t)))return!t.length;var e=Ys(t);if(e==J||e==ot)return!t.size;if(da(t))return!no(t).length;for(var n in t)if(he.call(t,n))return!1;return!0}function vl(t,e){return Gi(t,e)}function yl(t,e,n){n="function"==typeof n?n:i;var r=n?n(t,e):i;return r===i?Gi(t,e,i,n):!!r}function _l(t){if(!Sl(t))return!1;var e=Mi(t);return e==Q||e==W||"string"==typeof t.message&&"string"==typeof t.name&&!Ll(t)}function wl(t){return"number"==typeof t&&Ue(t)}function bl(t){if(!Tl(t))return!1;var e=Mi(t);return e==X||e==Y||e==H||e==rt}function El(t){return"number"==typeof t&&t==Wl(t)}function Il(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=M}function Tl(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Sl(t){return null!=t&&"object"==typeof t}var kl=gn?Qn(gn):Qi;function Cl(t,e){return t===e||Xi(t,e,Ks(e))}function Al(t,e,n){return n="function"==typeof n?n:i,Xi(t,e,Ks(e),n)}function Ol(t){return Dl(t)&&t!=+t}function xl(t){if(fa(t))throw new jt(a);return Yi(t)}function Rl(t){return null===t}function Nl(t){return null==t}function Dl(t){return"number"==typeof t||Sl(t)&&Mi(t)==Z}function Ll(t){if(!Sl(t)||Mi(t)!=et)return!1;var e=Ee(t);if(null===e)return!0;var n=he.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&le.call(n)==ge}var Pl=mn?Qn(mn):Ji;function Ml(t){return El(t)&&t>=-M&&t<=M}var Ul=vn?Qn(vn):Zi;function jl(t){return"string"==typeof t||!ul(t)&&Sl(t)&&Mi(t)==st}function Fl(t){return"symbol"==typeof t||Sl(t)&&Mi(t)==at}var $l=yn?Qn(yn):to;function Vl(t){return t===i}function Bl(t){return Sl(t)&&Ys(t)==ct}function ql(t){return Sl(t)&&Mi(t)==lt}var zl=ks(io),Hl=ks((function(t,e){return t<=e}));function Kl(t){if(!t)return[];if(ll(t))return jl(t)?mr(t):is(t);if(Ce&&t[Ce])return ar(t[Ce]());var e=Ys(t),n=e==J?ur:e==ot?hr:Vh;return n(t)}function Gl(t){if(!t)return 0===t?t:0;if(t=Xl(t),t===P||t===-P){var e=t<0?-1:1;return e*U}return t===t?t:0}function Wl(t){var e=Gl(t),n=e%1;return e===e?n?e-n:e:0}function Ql(t){return t?mi(Wl(t),0,F):0}function Xl(t){if("number"==typeof t)return t;if(Fl(t))return j;if(Tl(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Tl(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Wn(t);var n=Wt.test(t);return n||Xt.test(t)?rn(t.slice(2),n?2:8):Gt.test(t)?j:+t}function Yl(t){return os(t,Ih(t))}function Jl(t){return t?mi(Wl(t),-M,M):0===t?t:0}function Zl(t){return null==t?"":Lo(t)}var th=cs((function(t,e){if(da(e)||ll(e))os(e,Eh(e),t);else for(var n in e)he.call(e,n)&&ci(t,n,e[n])})),eh=cs((function(t,e){os(e,Ih(e),t)})),nh=cs((function(t,e,n,r){os(e,Ih(e),t,r)})),rh=cs((function(t,e,n,r){os(e,Eh(e),t,r)})),ih=js(gi);function oh(t,e){var n=Tr(t);return null==e?n:fi(n,e)}var sh=bo((function(t,e){t=ne(t);var n=-1,r=e.length,o=r>2?e[2]:i;o&&aa(e[0],e[1],o)&&(r=1);while(++n<r){var s=e[n],a=Ih(s),u=-1,c=a.length;while(++u<c){var l=a[u],h=t[l];(h===i||il(h,ue[l])&&!he.call(t,l))&&(t[l]=s[l])}}return t})),ah=bo((function(t){return t.push(i,Ds),_n(Ch,i,t)}));function uh(t,e){return Pn(t,zs(e,3),Ri)}function ch(t,e){return Pn(t,zs(e,3),Ni)}function lh(t,e){return null==t?t:Oi(t,zs(e,3),Ih)}function hh(t,e){return null==t?t:xi(t,zs(e,3),Ih)}function fh(t,e){return t&&Ri(t,zs(e,3))}function dh(t,e){return t&&Ni(t,zs(e,3))}function ph(t){return null==t?[]:Di(t,Eh(t))}function gh(t){return null==t?[]:Di(t,Ih(t))}function mh(t,e,n){var r=null==t?i:Li(t,e);return r===i?n:r}function vh(t,e){return null!=t&&ta(t,e,ji)}function yh(t,e){return null!=t&&ta(t,e,Fi)}var _h=ws((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),t[e]=n}),Cf(Rf)),wh=ws((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),he.call(t,e)?t[e].push(n):t[e]=[n]}),zs),bh=bo(qi);function Eh(t){return ll(t)?ii(t):no(t)}function Ih(t){return ll(t)?ii(t,!0):ro(t)}function Th(t,e){var n={};return e=zs(e,3),Ri(t,(function(t,r,i){pi(n,e(t,r,i),t)})),n}function Sh(t,e){var n={};return e=zs(e,3),Ri(t,(function(t,r,i){pi(n,r,e(t,r,i))})),n}var kh=cs((function(t,e,n){uo(t,e,n)})),Ch=cs((function(t,e,n,r){uo(t,e,n,r)})),Ah=js((function(t,e){var n={};if(null==t)return n;var r=!1;e=Cn(e,(function(e){return e=zo(e,t),r||(r=e.length>1),e})),os(t,$s(t),n),r&&(n=vi(n,d|p|g,Ls));var i=e.length;while(i--)Mo(n,e[i]);return n}));function Oh(t,e){return Rh(t,Vc(zs(e)))}var xh=js((function(t,e){return null==t?{}:fo(t,e)}));function Rh(t,e){if(null==t)return{};var n=Cn($s(t),(function(t){return[t]}));return e=zs(e),po(t,n,(function(t,n){return e(t,n[0])}))}function Nh(t,e,n){e=zo(e,t);var r=-1,o=e.length;o||(o=1,t=i);while(++r<o){var s=null==t?i:t[Ra(e[r])];s===i&&(r=o,s=n),t=bl(s)?s.call(t):s}return t}function Dh(t,e,n){return null==t?t:To(t,e,n)}function Lh(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:To(t,e,n,r)}var Ph=xs(Eh),Mh=xs(Ih);function Uh(t,e,n){var r=ul(t),i=r||dl(t)||$l(t);if(e=zs(e,4),null==n){var o=t&&t.constructor;n=i?r?new o:[]:Tl(t)&&bl(o)?Tr(Ee(t)):{}}return(i?bn:Ri)(t,(function(t,r,i){return e(n,t,r,i)})),n}function jh(t,e){return null==t||Mo(t,e)}function Fh(t,e,n){return null==t?t:Uo(t,e,qo(n))}function $h(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Uo(t,e,qo(n),r)}function Vh(t){return null==t?[]:Xn(t,Eh(t))}function Bh(t){return null==t?[]:Xn(t,Ih(t))}function qh(t,e,n){return n===i&&(n=e,e=i),n!==i&&(n=Xl(n),n=n===n?n:0),e!==i&&(e=Xl(e),e=e===e?e:0),mi(Xl(t),e,n)}function zh(t,e,n){return e=Gl(e),n===i?(n=e,e=0):n=Gl(n),t=Xl(t),$i(t,e,n)}function Hh(t,e,n){if(n&&"boolean"!=typeof n&&aa(t,e,n)&&(e=n=i),n===i&&("boolean"==typeof e?(n=e,e=i):"boolean"==typeof t&&(n=t,t=i)),t===i&&e===i?(t=0,e=1):(t=Gl(t),e===i?(e=t,t=0):e=Gl(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var o=Ke();return Ve(t+o*(e-t+nn("1e-"+((o+"").length-1))),e)}return yo(t,e)}var Kh=ps((function(t,e,n){return e=e.toLowerCase(),t+(n?Gh(e):e)}));function Gh(t){return bf(Zl(t).toLowerCase())}function Wh(t){return t=Zl(t),t&&t.replace(Jt,er).replace(qe,"")}function Qh(t,e,n){t=Zl(t),e=Lo(e);var r=t.length;n=n===i?r:mi(Wl(n),0,r);var o=n;return n-=e.length,n>=0&&t.slice(n,o)==e}function Xh(t){return t=Zl(t),t&&At.test(t)?t.replace(kt,nr):t}function Yh(t){return t=Zl(t),t&&Mt.test(t)?t.replace(Pt,"\\$&"):t}var Jh=ps((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),Zh=ps((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),tf=ds("toLowerCase");function ef(t,e,n){t=Zl(t),e=Wl(e);var r=e?gr(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return Is(Le(i),n)+t+Is(De(i),n)}function nf(t,e,n){t=Zl(t),e=Wl(e);var r=e?gr(t):0;return e&&r<e?t+Is(e-r,n):t}function rf(t,e,n){t=Zl(t),e=Wl(e);var r=e?gr(t):0;return e&&r<e?Is(e-r,n)+t:t}function of(t,e,n){return n||null==e?e=0:e&&(e=+e),He(Zl(t).replace(Ut,""),e||0)}function sf(t,e,n){return e=(n?aa(t,e,n):e===i)?1:Wl(e),wo(Zl(t),e)}function af(){var t=arguments,e=Zl(t[0]);return t.length<3?e:e.replace(t[1],t[2])}var uf=ps((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}));function cf(t,e,n){return n&&"number"!=typeof n&&aa(t,e,n)&&(e=n=i),n=n===i?F:n>>>0,n?(t=Zl(t),t&&("string"==typeof e||null!=e&&!Pl(e))&&(e=Lo(e),!e&&or(t))?Ko(mr(t),0,n):t.split(e,n)):[]}var lf=ps((function(t,e,n){return t+(n?" ":"")+bf(e)}));function hf(t,e,n){return t=Zl(t),n=null==n?0:mi(Wl(n),0,t.length),e=Lo(e),t.slice(n,n+e.length)==e}function ff(t,e,n){var r=Er.templateSettings;n&&aa(t,e,n)&&(e=i),t=Zl(t),e=nh({},e,r,Ns);var o,s,a=nh({},e.imports,r.imports,Ns),u=Eh(a),l=Xn(a,u),h=0,f=e.interpolate||Zt,d="__p += '",p=re((e.escape||Zt).source+"|"+f.source+"|"+(f===Rt?Ht:Zt).source+"|"+(e.evaluate||Zt).source+"|$","g"),g="//# sourceURL="+(he.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Qe+"]")+"\n";t.replace(p,(function(e,n,r,i,a,u){return r||(r=i),d+=t.slice(h,u).replace(te,rr),n&&(o=!0,d+="' +\n__e("+n+") +\n'"),a&&(s=!0,d+="';\n"+a+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),h=u+e.length,e})),d+="';\n";var m=he.call(e,"variable")&&e.variable;if(m){if(qt.test(m))throw new jt(c)}else d="with (obj) {\n"+d+"\n}\n";d=(s?d.replace(Et,""):d).replace(It,"$1").replace(Tt,"$1;"),d="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var v=If((function(){return Bt(u,g+"return "+d).apply(i,l)}));if(v.source=d,_l(v))throw v;return v}function df(t){return Zl(t).toLowerCase()}function pf(t){return Zl(t).toUpperCase()}function gf(t,e,n){if(t=Zl(t),t&&(n||e===i))return Wn(t);if(!t||!(e=Lo(e)))return t;var r=mr(t),o=mr(e),s=Jn(r,o),a=Zn(r,o)+1;return Ko(r,s,a).join("")}function mf(t,e,n){if(t=Zl(t),t&&(n||e===i))return t.slice(0,vr(t)+1);if(!t||!(e=Lo(e)))return t;var r=mr(t),o=Zn(r,mr(e))+1;return Ko(r,0,o).join("")}function vf(t,e,n){if(t=Zl(t),t&&(n||e===i))return t.replace(Ut,"");if(!t||!(e=Lo(e)))return t;var r=mr(t),o=Jn(r,mr(e));return Ko(r,o).join("")}function yf(t,e){var n=A,r=O;if(Tl(e)){var o="separator"in e?e.separator:o;n="length"in e?Wl(e.length):n,r="omission"in e?Lo(e.omission):r}t=Zl(t);var s=t.length;if(or(t)){var a=mr(t);s=a.length}if(n>=s)return t;var u=n-gr(r);if(u<1)return r;var c=a?Ko(a,0,u).join(""):t.slice(0,u);if(o===i)return c+r;if(a&&(u+=c.length-u),Pl(o)){if(t.slice(u).search(o)){var l,h=c;o.global||(o=re(o.source,Zl(Kt.exec(o))+"g")),o.lastIndex=0;while(l=o.exec(h))var f=l.index;c=c.slice(0,f===i?u:f)}}else if(t.indexOf(Lo(o),u)!=u){var d=c.lastIndexOf(o);d>-1&&(c=c.slice(0,d))}return c+r}function _f(t){return t=Zl(t),t&&Ct.test(t)?t.replace(St,yr):t}var wf=ps((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),bf=ds("toUpperCase");function Ef(t,e,n){return t=Zl(t),e=n?i:e,e===i?sr(t)?br(t):Ln(t):t.match(e)||[]}var If=bo((function(t,e){try{return _n(t,i,e)}catch(n){return _l(n)?n:new jt(n)}})),Tf=js((function(t,e){return bn(e,(function(e){e=Ra(e),pi(t,e,Nc(t[e],t))})),t}));function Sf(t){var e=null==t?0:t.length,n=zs();return t=e?Cn(t,(function(t){if("function"!=typeof t[1])throw new oe(u);return[n(t[0]),t[1]]})):[],bo((function(n){var r=-1;while(++r<e){var i=t[r];if(_n(i[0],this,n))return _n(i[1],this,n)}}))}function kf(t){return yi(vi(t,d))}function Cf(t){return function(){return t}}function Af(t,e){return null==t||t!==t?e:t}var Of=ys(),xf=ys(!0);function Rf(t){return t}function Nf(t){return eo("function"==typeof t?t:vi(t,d))}function Df(t){return so(vi(t,d))}function Lf(t,e){return ao(t,vi(e,d))}var Pf=bo((function(t,e){return function(n){return qi(n,t,e)}})),Mf=bo((function(t,e){return function(n){return qi(t,n,e)}}));function Uf(t,e,n){var r=Eh(e),i=Di(e,r);null!=n||Tl(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Di(e,Eh(e)));var o=!(Tl(n)&&"chain"in n)||!!n.chain,s=bl(t);return bn(i,(function(n){var r=e[n];t[n]=r,s&&(t.prototype[n]=function(){var e=this.__chain__;if(o||e){var n=t(this.__wrapped__),i=n.__actions__=is(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,An([this.value()],arguments))})})),t}function jf(){return an._===this&&(an._=me),this}function Ff(){}function $f(t){return t=Wl(t),bo((function(e){return lo(e,t)}))}var Vf=Es(Cn),Bf=Es(In),qf=Es(Rn);function zf(t){return ua(t)?Vn(Ra(t)):go(t)}function Hf(t){return function(e){return null==t?i:Li(t,e)}}var Kf=Ss(),Gf=Ss(!0);function Wf(){return[]}function Qf(){return!1}function Xf(){return{}}function Yf(){return""}function Jf(){return!0}function Zf(t,e){if(t=Wl(t),t<1||t>M)return[];var n=F,r=Ve(t,F);e=zs(e),t-=F;var i=Kn(r,e);while(++n<t)e(n);return i}function td(t){return ul(t)?Cn(t,Ra):Fl(t)?[t]:is(xa(Zl(t)))}function ed(t){var e=++fe;return Zl(t)+e}var nd=bs((function(t,e){return t+e}),0),rd=As("ceil"),id=bs((function(t,e){return t/e}),1),od=As("floor");function sd(t){return t&&t.length?Si(t,Rf,Ui):i}function ad(t,e){return t&&t.length?Si(t,zs(e,2),Ui):i}function ud(t){return $n(t,Rf)}function cd(t,e){return $n(t,zs(e,2))}function ld(t){return t&&t.length?Si(t,Rf,io):i}function hd(t,e){return t&&t.length?Si(t,zs(e,2),io):i}var fd=bs((function(t,e){return t*e}),1),dd=As("round"),pd=bs((function(t,e){return t-e}),0);function gd(t){return t&&t.length?Hn(t,Rf):0}function md(t,e){return t&&t.length?Hn(t,zs(e,2)):0}return Er.after=Oc,Er.ary=xc,Er.assign=th,Er.assignIn=eh,Er.assignInWith=nh,Er.assignWith=rh,Er.at=ih,Er.before=Rc,Er.bind=Nc,Er.bindAll=Tf,Er.bindKey=Dc,Er.castArray=Jc,Er.chain=Hu,Er.chunk=Pa,Er.compact=Ma,Er.concat=Ua,Er.cond=Sf,Er.conforms=kf,Er.constant=Cf,Er.countBy=nc,Er.create=oh,Er.curry=Lc,Er.curryRight=Pc,Er.debounce=Mc,Er.defaults=sh,Er.defaultsDeep=ah,Er.defer=Uc,Er.delay=jc,Er.difference=ja,Er.differenceBy=Fa,Er.differenceWith=$a,Er.drop=Va,Er.dropRight=Ba,Er.dropRightWhile=qa,Er.dropWhile=za,Er.fill=Ha,Er.filter=ic,Er.flatMap=ac,Er.flatMapDeep=uc,Er.flatMapDepth=cc,Er.flatten=Wa,Er.flattenDeep=Qa,Er.flattenDepth=Xa,Er.flip=Fc,Er.flow=Of,Er.flowRight=xf,Er.fromPairs=Ya,Er.functions=ph,Er.functionsIn=gh,Er.groupBy=fc,Er.initial=tu,Er.intersection=eu,Er.intersectionBy=nu,Er.intersectionWith=ru,Er.invert=_h,Er.invertBy=wh,Er.invokeMap=pc,Er.iteratee=Nf,Er.keyBy=gc,Er.keys=Eh,Er.keysIn=Ih,Er.map=mc,Er.mapKeys=Th,Er.mapValues=Sh,Er.matches=Df,Er.matchesProperty=Lf,Er.memoize=$c,Er.merge=kh,Er.mergeWith=Ch,Er.method=Pf,Er.methodOf=Mf,Er.mixin=Uf,Er.negate=Vc,Er.nthArg=$f,Er.omit=Ah,Er.omitBy=Oh,Er.once=Bc,Er.orderBy=vc,Er.over=Vf,Er.overArgs=qc,Er.overEvery=Bf,Er.overSome=qf,Er.partial=zc,Er.partialRight=Hc,Er.partition=yc,Er.pick=xh,Er.pickBy=Rh,Er.property=zf,Er.propertyOf=Hf,Er.pull=uu,Er.pullAll=cu,Er.pullAllBy=lu,Er.pullAllWith=hu,Er.pullAt=fu,Er.range=Kf,Er.rangeRight=Gf,Er.rearg=Kc,Er.reject=bc,Er.remove=du,Er.rest=Gc,Er.reverse=pu,Er.sampleSize=Ic,Er.set=Dh,Er.setWith=Lh,Er.shuffle=Tc,Er.slice=gu,Er.sortBy=Cc,Er.sortedUniq=Eu,Er.sortedUniqBy=Iu,Er.split=cf,Er.spread=Wc,Er.tail=Tu,Er.take=Su,Er.takeRight=ku,Er.takeRightWhile=Cu,Er.takeWhile=Au,Er.tap=Ku,Er.throttle=Qc,Er.thru=Gu,Er.toArray=Kl,Er.toPairs=Ph,Er.toPairsIn=Mh,Er.toPath=td,Er.toPlainObject=Yl,Er.transform=Uh,Er.unary=Xc,Er.union=Ou,Er.unionBy=xu,Er.unionWith=Ru,Er.uniq=Nu,Er.uniqBy=Du,Er.uniqWith=Lu,Er.unset=jh,Er.unzip=Pu,Er.unzipWith=Mu,Er.update=Fh,Er.updateWith=$h,Er.values=Vh,Er.valuesIn=Bh,Er.without=Uu,Er.words=Ef,Er.wrap=Yc,Er.xor=ju,Er.xorBy=Fu,Er.xorWith=$u,Er.zip=Vu,Er.zipObject=Bu,Er.zipObjectDeep=qu,Er.zipWith=zu,Er.entries=Ph,Er.entriesIn=Mh,Er.extend=eh,Er.extendWith=nh,Uf(Er,Er),Er.add=nd,Er.attempt=If,Er.camelCase=Kh,Er.capitalize=Gh,Er.ceil=rd,Er.clamp=qh,Er.clone=Zc,Er.cloneDeep=el,Er.cloneDeepWith=nl,Er.cloneWith=tl,Er.conformsTo=rl,Er.deburr=Wh,Er.defaultTo=Af,Er.divide=id,Er.endsWith=Qh,Er.eq=il,Er.escape=Xh,Er.escapeRegExp=Yh,Er.every=rc,Er.find=oc,Er.findIndex=Ka,Er.findKey=uh,Er.findLast=sc,Er.findLastIndex=Ga,Er.findLastKey=ch,Er.floor=od,Er.forEach=lc,Er.forEachRight=hc,Er.forIn=lh,Er.forInRight=hh,Er.forOwn=fh,Er.forOwnRight=dh,Er.get=mh,Er.gt=ol,Er.gte=sl,Er.has=vh,Er.hasIn=yh,Er.head=Ja,Er.identity=Rf,Er.includes=dc,Er.indexOf=Za,Er.inRange=zh,Er.invoke=bh,Er.isArguments=al,Er.isArray=ul,Er.isArrayBuffer=cl,Er.isArrayLike=ll,Er.isArrayLikeObject=hl,Er.isBoolean=fl,Er.isBuffer=dl,Er.isDate=pl,Er.isElement=gl,Er.isEmpty=ml,Er.isEqual=vl,Er.isEqualWith=yl,Er.isError=_l,Er.isFinite=wl,Er.isFunction=bl,Er.isInteger=El,Er.isLength=Il,Er.isMap=kl,Er.isMatch=Cl,Er.isMatchWith=Al,Er.isNaN=Ol,Er.isNative=xl,Er.isNil=Nl,Er.isNull=Rl,Er.isNumber=Dl,Er.isObject=Tl,Er.isObjectLike=Sl,Er.isPlainObject=Ll,Er.isRegExp=Pl,Er.isSafeInteger=Ml,Er.isSet=Ul,Er.isString=jl,Er.isSymbol=Fl,Er.isTypedArray=$l,Er.isUndefined=Vl,Er.isWeakMap=Bl,Er.isWeakSet=ql,Er.join=iu,Er.kebabCase=Jh,Er.last=ou,Er.lastIndexOf=su,Er.lowerCase=Zh,Er.lowerFirst=tf,Er.lt=zl,Er.lte=Hl,Er.max=sd,Er.maxBy=ad,Er.mean=ud,Er.meanBy=cd,Er.min=ld,Er.minBy=hd,Er.stubArray=Wf,Er.stubFalse=Qf,Er.stubObject=Xf,Er.stubString=Yf,Er.stubTrue=Jf,Er.multiply=fd,Er.nth=au,Er.noConflict=jf,Er.noop=Ff,Er.now=Ac,Er.pad=ef,Er.padEnd=nf,Er.padStart=rf,Er.parseInt=of,Er.random=Hh,Er.reduce=_c,Er.reduceRight=wc,Er.repeat=sf,Er.replace=af,Er.result=Nh,Er.round=dd,Er.runInContext=t,Er.sample=Ec,Er.size=Sc,Er.snakeCase=uf,Er.some=kc,Er.sortedIndex=mu,Er.sortedIndexBy=vu,Er.sortedIndexOf=yu,Er.sortedLastIndex=_u,Er.sortedLastIndexBy=wu,Er.sortedLastIndexOf=bu,Er.startCase=lf,Er.startsWith=hf,Er.subtract=pd,Er.sum=gd,Er.sumBy=md,Er.template=ff,Er.times=Zf,Er.toFinite=Gl,Er.toInteger=Wl,Er.toLength=Ql,Er.toLower=df,Er.toNumber=Xl,Er.toSafeInteger=Jl,Er.toString=Zl,Er.toUpper=pf,Er.trim=gf,Er.trimEnd=mf,Er.trimStart=vf,Er.truncate=yf,Er.unescape=_f,Er.uniqueId=ed,Er.upperCase=wf,Er.upperFirst=bf,Er.each=lc,Er.eachRight=hc,Er.first=Ja,Uf(Er,function(){var t={};return Ri(Er,(function(e,n){he.call(Er.prototype,n)||(t[n]=e)})),t}(),{chain:!1}),Er.VERSION=o,bn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){Er[t].placeholder=Er})),bn(["drop","take"],(function(t,e){Cr.prototype[t]=function(n){n=n===i?1:$e(Wl(n),0);var r=this.__filtered__&&!e?new Cr(this):this.clone();return r.__filtered__?r.__takeCount__=Ve(n,r.__takeCount__):r.__views__.push({size:Ve(n,F),type:t+(r.__dir__<0?"Right":"")}),r},Cr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),bn(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=n==N||n==L;Cr.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:zs(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),bn(["head","last"],(function(t,e){var n="take"+(e?"Right":"");Cr.prototype[t]=function(){return this[n](1).value()[0]}})),bn(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");Cr.prototype[t]=function(){return this.__filtered__?new Cr(this):this[n](1)}})),Cr.prototype.compact=function(){return this.filter(Rf)},Cr.prototype.find=function(t){return this.filter(t).head()},Cr.prototype.findLast=function(t){return this.reverse().find(t)},Cr.prototype.invokeMap=bo((function(t,e){return"function"==typeof t?new Cr(this):this.map((function(n){return qi(n,t,e)}))})),Cr.prototype.reject=function(t){return this.filter(Vc(zs(t)))},Cr.prototype.slice=function(t,e){t=Wl(t);var n=this;return n.__filtered__&&(t>0||e<0)?new Cr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==i&&(e=Wl(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},Cr.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Cr.prototype.toArray=function(){return this.take(F)},Ri(Cr.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),o=Er[r?"take"+("last"==e?"Right":""):e],s=r||/^find/.test(e);o&&(Er.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,u=e instanceof Cr,c=a[0],l=u||ul(e),h=function(t){var e=o.apply(Er,An([t],a));return r&&f?e[0]:e};l&&n&&"function"==typeof c&&1!=c.length&&(u=l=!1);var f=this.__chain__,d=!!this.__actions__.length,p=s&&!f,g=u&&!d;if(!s&&l){e=g?e:new Cr(this);var m=t.apply(e,a);return m.__actions__.push({func:Gu,args:[h],thisArg:i}),new kr(m,f)}return p&&g?t.apply(this,a):(m=this.thru(h),p?r?m.value()[0]:m.value():m)})})),bn(["pop","push","shift","sort","splice","unshift"],(function(t){var e=se[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);Er.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(ul(i)?i:[],t)}return this[n]((function(n){return e.apply(ul(n)?n:[],t)}))}})),Ri(Cr.prototype,(function(t,e){var n=Er[e];if(n){var r=n.name+"";he.call(cn,r)||(cn[r]=[]),cn[r].push({name:e,func:n})}})),cn[_s(i,_).name]=[{name:"wrapper",func:i}],Cr.prototype.clone=Ar,Cr.prototype.reverse=Or,Cr.prototype.value=xr,Er.prototype.at=Wu,Er.prototype.chain=Qu,Er.prototype.commit=Xu,Er.prototype.next=Yu,Er.prototype.plant=Zu,Er.prototype.reverse=tc,Er.prototype.toJSON=Er.prototype.valueOf=Er.prototype.value=ec,Er.prototype.first=Er.prototype.head,Ce&&(Er.prototype[Ce]=Ju),Er},Ir=Er();an._=Ir,r=function(){return Ir}.call(e,n,e,t),r===i||(t.exports=r)}.call(this)},2631:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Ee}});n(7658),n(541);function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function u(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=u(n.shift()),i=n.length>0?u(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=g(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:y(e,i),matched:t?v(t):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=g(t[n]);return e}return t}var m=p(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||f;return(n||"/")+o(r)+i}function _(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&w(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&w(t.query,e.query)&&w(t.params,e.params))))}function w(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?w(o,a):String(o)===String(a)}))}function b(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var T={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,u=n.name,c=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,f=!1;while(o&&o._routerRoot!==o){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=h,f){var p=l[u],g=p&&p.component;return g?(p.configProps&&S(g,s,p.route,p.configProps),a(g,s,i)):a()}var m=c.matched[h],v=m&&m.components[u];if(!m||!v)return l[u]=null,a();l[u]={component:v},s.registerRouteInstance=function(t,e){var n=m.instances[u];(e&&n!==t||!e&&n===t)&&(m.instances[u]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[u]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[u]&&(m.instances[u]=t.componentInstance),I(c)};var y=m.props&&m.props[u];return y&&(r(l[u],{route:c,configProps:y}),S(v,s,c,y)),a(v,s,i)}};function S(t,e,n,i){var o=e.props=k(n,i);if(o){o=e.props=r({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function k(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function C(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function A(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function O(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var x=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},R=X,N=U,D=j,L=V,P=Q,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function U(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var u=n[0],c=n[1],l=n.index;if(s+=t.slice(o,l),o=l+u.length,c)s+=c[1];else{var h=t[o],f=n[2],d=n[3],p=n[4],g=n[5],m=n[6],v=n[7];s&&(r.push(s),s="");var y=null!=f&&null!=h&&h!==f,_="+"===m||"*"===m,w="?"===m||"*"===m,b=n[2]||a,E=p||g;r.push({name:d||i++,prefix:f||"",delimiter:b,optional:w,repeat:_,partial:y,asterisk:!!v,pattern:E?q(E):v?".*":"[^"+B(b)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function j(t,e){return V(U(t,e),e)}function F(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",H(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?F:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!==typeof c){var l,h=o[c.name];if(null==h){if(c.optional){c.partial&&(i+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(x(h)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(l=a(h[f]),!n[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?$(h):a(h),!n[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');i+=c.prefix+l}}else i+=c}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function H(t){return t&&t.sensitive?"":"i"}function K(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(X(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",H(n));return z(o,e)}function W(t,e,n){return Q(U(t,n),e,n)}function Q(t,e,n){x(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=B(a);else{var u=B(a.prefix),c="(?:"+a.pattern+")";e.push(a),a.repeat&&(c+="(?:"+u+c+")*"),c=a.optional?a.partial?u+"("+c+")?":"(?:"+u+"("+c+"))?":u+"("+c+")",o+=c}}var l=B(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+o,H(n)),e)}function X(t,e,n){return x(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?K(t,e):x(t)?G(t,e,n):W(t,e,n)}R.parse=N,R.compile=D,R.tokensToFunction=L,R.tokensToRegExp=P;var Y=Object.create(null);function J(t,e,n){e=e||{};try{var r=Y[t]||(Y[t]=R.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=r({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&e){o=r({},o),o._normalized=!0;var a=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;o.path=J(u,a,"path "+e.path)}else 0;return o}var l=A(o.path||""),h=e&&e.path||"/",f=l.path?C(l.path,h,n||o.append):h,d=c(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,u=o.href,c={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,d=null==h?"router-link-exact-active":h,g=null==this.activeClass?f:this.activeClass,m=null==this.exactActiveClass?d:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;c[m]=_(i,v,this.exactPath),c[g]=this.exact||this.exactPath?c[m]:b(i,v);var y=c[m]?this.ariaCurrentValue:null,w=function(t){ot(t)&&(e.replace?n.replace(s,rt):n.push(s,rt))},E={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){E[t]=w})):E[this.event]=w;var I={class:c},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:u,route:a,navigate:w,isActive:c[g],isExactActive:c[m]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?t():t("span",{},T)}if("a"===this.tag)I.on=E,I.attrs={href:u,"aria-current":y};else{var S=st(this.$slots.default);if(S){S.isStatic=!1;var k=S.data=r({},S.data);for(var C in k.on=k.on||{},k.on){var A=k.on[C];C in E&&(k.on[C]=Array.isArray(A)?A:[A])}for(var O in E)O in k.on?k.on[O].push(E[O]):k.on[O]=w;var x=S.data.attrs=r({},S.data.attrs);x.href=u,x["aria-current"]=y}else I.on=E}return t(this.tag,I,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",T),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ut="undefined"!==typeof window;function ct(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(o,s,a,t,i)}));for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:s,nameMap:a}}function lt(t,e,n,r,i,o){var s=r.path,a=r.name;var u=r.pathToRegexpOptions||{},c=ft(s,i,u.strict);"boolean"===typeof r.caseSensitive&&(u.sensitive=r.caseSensitive);var l={path:c,regex:ht(c,u),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?O(o+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<h.length;++f){var d=h[f];0;var p={path:d,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=R(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:O(e.path+"/"+t)}function dt(t,e){var n=ct(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){ct(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;ct([e||t],r,i,o,n),n&&n.alias.length&&ct(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function u(){return r.map((function(t){return i[t]}))}function c(t,n,s){var a=Z(t,n,!1,e),u=a.name;if(u){var c=o[u];if(!c)return f(null,a);var l=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(c.path,a.params,'named route "'+u+'"'),f(c,a,s)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],g=i[p];if(pt(g.regex,a.path,a.params))return f(g,a,s)}}return f(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var s=i,a=s.name,u=s.path,l=n.query,h=n.hash,d=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,d=s.hasOwnProperty("params")?s.params:d,a){o[a];return c({_normalized:!0,name:a,query:l,hash:h,params:d},void 0,n)}if(u){var g=gt(u,t),m=J(g,d,'redirect route with path "'+g+'"');return c({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return f(null,n)}function h(t,e,n){var r=J(n,e.params,'aliased route with path "'+n+'"'),i=c({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,f(s,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:c,addRoute:a,getRoutes:u,addRoutes:s}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?u(r[i]):r[i])}return!0}function gt(t,e){return C(t,e.parent?e.parent.path:"/",!0)}var mt=ut&&window.performance&&window.performance.now?window.performance:Date;function vt(){return mt.now().toFixed(3)}var yt=vt();function _t(){return yt}function wt(t){return yt=t}var bt=Object.create(null);function Et(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=_t(),window.history.replaceState(n,"",e),window.addEventListener("popstate",St),function(){window.removeEventListener("popstate",St)}}function It(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=kt(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then((function(t){Dt(t,o)})).catch((function(t){0})):Dt(s,o))}))}}function Tt(){var t=_t();t&&(bt[t]={x:window.pageXOffset,y:window.pageYOffset})}function St(t){Tt(),t.state&&t.state.key&&wt(t.state.key)}function kt(){var t=_t();if(t)return bt[t]}function Ct(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function At(t){return Rt(t.x)||Rt(t.y)}function Ot(t){return{x:Rt(t.x)?t.x:window.pageXOffset,y:Rt(t.y)?t.y:window.pageYOffset}}function xt(t){return{x:Rt(t.x)?t.x:0,y:Rt(t.y)?t.y:0}}function Rt(t){return"number"===typeof t}var Nt=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Nt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=xt(i),e=Ct(r,i)}else At(t)&&(e=Ot(t))}else n&&At(t)&&(e=Ot(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=ut&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Pt(t,e){Tt();var n=window.history;try{if(e){var i=r({},n.state);i.key=_t(),n.replaceState(i,"",t)}else n.pushState({key:wt(vt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Mt(t){Pt(t,!0)}var Ut={redirected:2,aborted:4,cancelled:8,duplicated:16};function jt(t,e){return Bt(t,e,Ut.redirected,'Redirected when going from "'+t.fullPath+'" to "'+zt(e)+'" via a navigation guard.')}function Ft(t,e){var n=Bt(t,e,Ut.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function $t(t,e){return Bt(t,e,Ut.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Vt(t,e){return Bt(t,e,Ut.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Bt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var qt=["params","query","hash"];function zt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return qt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Ht(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Ht(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}function Wt(t){return function(e,n,r){var i=!1,o=0,s=null;Qt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var u,c=Zt((function(e){Jt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,o--,o<=0&&r()})),l=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=Ht(t)?t:new Error(e),r(s))}));try{u=t(c,l)}catch(f){l(f)}if(u)if("function"===typeof u.then)u.then(c,l);else{var h=u.component;h&&"function"===typeof h.then&&h.then(c,l)}}})),i||r()}}function Qt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Jt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ut){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Qt(t,(function(t,r,i,o){var s=ie(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return Xt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function oe(t){return re(t,"beforeRouteLeave",ae,!0)}function se(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ue(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ce(t,n,r)}))}function ce(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Kt(t,Ut.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!Kt(t)&&Ht(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},s=t.matched.length-1,a=i.matched.length-1;if(_(t,i)&&s===a&&t.matched[s]===i.matched[a])return this.ensureURL(),t.hash&&It(this.router,i,t,!1),o(Ft(i,t));var u=ne(this.current.matched,t.matched),c=u.updated,l=u.deactivated,h=u.activated,f=[].concat(oe(l),this.router.beforeHooks,se(c),h.map((function(t){return t.beforeEnter})),Wt(h)),d=function(e,n){if(r.pending!==t)return o($t(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),o(Vt(i,t))):Ht(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(jt(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(s){o(s)}};Gt(f,d,(function(){var n=ue(h),s=n.concat(r.router.resolveHooks);Gt(s,d,(function(){if(r.pending!==t)return o($t(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){I(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Et());var i=function(){var n=t.current,i=he(t.base);t.current===m&&i===t._startLocation||t.transitionTo(i,(function(t){r&&It(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Pt(O(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Mt(O(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=O(this.base+this.current.fullPath);t?Pt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(O(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Et());var i=function(){var e=t.current;pe()&&t.transitionTo(ge(),(function(n){r&&It(t.router,n,e,!0),Lt||ye(n.fullPath)}))},o=Lt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ge()!==e&&(t?ve(e):ye(e))},e.prototype.getCurrentLocation=function(){return ge()},e}(te);function de(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(O(t+"/#"+e)),!0}function pe(){var t=ge();return"/"===t.charAt(0)||(ye("/"+t),!1)}function ge(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){Lt?Pt(me(t)):window.location.hash=t}function ye(t){Lt?Mt(me(t)):window.location.replace(me(t))}var _e=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,Ut.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),we=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),ut||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new _e(this,t.base);break;default:0}},be={currentRoute:{configurable:!0}};we.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},be.currentRoute.get=function(){return this.history&&this.history.current},we.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=Lt&&i;o&&"fullPath"in t&&It(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},we.prototype.beforeEach=function(t){return Ie(this.beforeHooks,t)},we.prototype.beforeResolve=function(t){return Ie(this.resolveHooks,t)},we.prototype.afterEach=function(t){return Ie(this.afterHooks,t)},we.prototype.onReady=function(t,e){this.history.onReady(t,e)},we.prototype.onError=function(t){this.history.onError(t)},we.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},we.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},we.prototype.go=function(t){this.history.go(t)},we.prototype.back=function(){this.go(-1)},we.prototype.forward=function(){this.go(1)},we.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},we.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Te(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},we.prototype.getRoutes=function(){return this.matcher.getRoutes()},we.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},we.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(we.prototype,be);var Ee=we;function Ie(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Te(t,e,n){var r="hash"===n?"#"+e:e;return t?O(t+"/"+r):r}we.install=at,we.version="3.6.5",we.isNavigationFailure=Kt,we.NavigationFailureType=Ut,we.START_LOCATION=m,ut&&window.Vue&&window.Vue.use(we)},6369:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Yr}});n(7658),n(4633),n(541);var r=Object.freeze({}),i=Array.isArray;function o(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function a(t){return!0===t}function u(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function d(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function g(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function m(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||d(t)&&t.toString===f?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var w=_("key,ref,slot,slot-scope,is");function b(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var E=Object.prototype.hasOwnProperty;function I(t,e){return E.call(t,e)}function T(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var S=/-(\w)/g,k=T((function(t){return t.replace(S,(function(t,e){return e?e.toUpperCase():""}))})),C=T((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),A=/\B([A-Z])/g,O=T((function(t){return t.replace(A,"-$1").toLowerCase()}));function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function R(t,e){return t.bind(e)}var N=Function.prototype.bind?R:x;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function L(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&L(e,t[n]);return e}function M(t,e,n){}var U=function(t,e,n){return!1},j=function(t){return t};function F(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return F(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return F(t[n],e[n])}))}catch(u){return!1}}function $(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function V(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function B(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var q="data-server-rendered",z=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],K={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:U,isReservedAttr:U,isUnknownElement:U,getTagNamespace:M,parsePlatformTagName:j,mustUseProp:U,async:!0,_lifecycleHooks:H},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var X=new RegExp("[^".concat(G.source,".$_\\d]"));function Y(t){if(!X.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J="__proto__"in{},Z="undefined"!==typeof window,tt=Z&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var it=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var ot,st=tt&&tt.match(/firefox\/(\d+)/),at={}.watch,ut=!1;if(Z)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){ut=!0}}),window.addEventListener("test-passive",null,ct)}catch(Js){}var lt=function(){return void 0===ot&&(ot=!Z&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),ot},ht=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ft(t){return"function"===typeof t&&/native code/.test(t.toString())}var dt,pt="undefined"!==typeof Symbol&&ft(Symbol)&&"undefined"!==typeof Reflect&&ft(Reflect.ownKeys);dt="undefined"!==typeof Set&&ft(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var gt=null;function mt(t){void 0===t&&(t=null),t||gt&&gt._scope.off(),gt=t,t&&t._scope.on()}var vt=function(){function t(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function _t(t){return new vt(void 0,void 0,void 0,String(t))}function wt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var bt=0,Et=[],It=function(){for(var t=0;t<Et.length;t++){var e=Et[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}Et.length=0},Tt=function(){function t(){this._pending=!1,this.id=bt++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Et.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();Tt.target=null;var St=[];function kt(t){St.push(t),Tt.target=t}function Ct(){St.pop(),Tt.target=St[St.length-1]}var At=Array.prototype,Ot=Object.create(At),xt=["push","pop","shift","unshift","splice","sort","reverse"];xt.forEach((function(t){var e=At[t];Q(Ot,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Rt=new WeakMap;function Nt(t){return Dt(t,!0),Q(t,"__v_isShallow",!0),t}function Dt(t,e){if(!Lt(t)){Vt(t,e,lt());0}}function Lt(t){return!(!t||!t.__v_isReadonly)}var Pt=Object.getOwnPropertyNames(Ot),Mt={},Ut=!0;function jt(t){Ut=t}var Ft={notify:M,depend:M,addSub:M,removeSub:M},$t=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Ft:new Tt,this.vmCount=0,Q(t,"__ob__",this),i(t)){if(!n)if(J)t.__proto__=Ot;else for(var r=0,o=Pt.length;r<o;r++){var s=Pt[r];Q(t,s,Ot[s])}e||this.observeArray(t)}else{var a=Object.keys(t);for(r=0;r<a.length;r++){s=a[r];Bt(t,s,Mt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Vt(t[e],!1,this.mock)},t}();function Vt(t,e,n){return t&&I(t,"__ob__")&&t.__ob__ instanceof $t?t.__ob__:!Ut||!n&&lt()||!i(t)&&!d(t)||!Object.isExtensible(t)||t.__v_skip||Rt.has(t)||Kt(t)||t instanceof vt?void 0:new $t(t,e,n)}function Bt(t,e,n,r,o,s){var a=new Tt,u=Object.getOwnPropertyDescriptor(t,e);if(!u||!1!==u.configurable){var c=u&&u.get,l=u&&u.set;c&&!l||n!==Mt&&2!==arguments.length||(n=t[e]);var h=!o&&Vt(n,!1,s);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=c?c.call(t):n;return Tt.target&&(a.depend(),h&&(h.dep.depend(),i(e)&&Ht(e))),Kt(e)&&!o?e.value:e},set:function(e){var r=c?c.call(t):n;if(B(r,e)){if(l)l.call(t,e);else{if(c)return;if(!o&&Kt(r)&&!Kt(e))return void(r.value=e);n=e}h=!o&&Vt(e,!1,s),a.notify()}}}),a}}function qt(t,e,n){if(!Lt(t)){var r=t.__ob__;return i(t)&&g(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&Vt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(Bt(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function zt(t,e){if(i(t)&&g(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||Lt(t)||I(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ht(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&Ht(e)}function Kt(t){return!(!t||!0!==t.__v_isRef)}function Gt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Kt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Kt(r)&&!Kt(t)?r.value=t:e[n]=t}})}new WeakMap,new WeakMap;var Wt="watcher";"".concat(Wt," callback"),"".concat(Wt," getter"),"".concat(Wt," cleanup");var Qt;var Xt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qt,!t&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Qt;try{return Qt=this,t()}finally{Qt=e}}else 0},t.prototype.on=function(){Qt=this},t.prototype.off=function(){Qt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Yt(t,e){void 0===e&&(e=Qt),e&&e.active&&e.effects.push(t)}function Jt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var Zt=T((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function te(t,e){function n(){var t=n.fns;if(!i(t))return Xe(t,null,arguments,e,"v-on handler");for(var r=t.slice(),o=0;o<r.length;o++)Xe(r[o],null,arguments,e,"v-on handler")}return n.fns=t,n}function ee(t,e,n,r,i,s){var u,c,l,h;for(u in t)c=t[u],l=e[u],h=Zt(u),o(c)||(o(l)?(o(c.fns)&&(c=t[u]=te(c,s)),a(h.once)&&(c=t[u]=i(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==l&&(l.fns=c,t[u]=l));for(u in e)o(t[u])&&(h=Zt(u),r(h.name,e[u],h.capture))}function ne(t,e,n){var r;t instanceof vt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function u(){n.apply(this,arguments),b(r.fns,u)}o(i)?r=te([u]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(u)):r=te([i,u]),r.merged=!0,t[e]=r}function re(t,e,n){var r=e.options.props;if(!o(r)){var i={},a=t.attrs,u=t.props;if(s(a)||s(u))for(var c in r){var l=O(c);ie(i,u,c,l,!0)||ie(i,a,c,l,!1)}return i}}function ie(t,e,n,r,i){if(s(e)){if(I(e,n))return t[n]=e[n],i||delete e[n],!0;if(I(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function oe(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function se(t){return c(t)?[_t(t)]:i(t)?ue(t):void 0}function ae(t){return s(t)&&s(t.text)&&u(t.isComment)}function ue(t,e){var n,r,u,l,h=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(u=h.length-1,l=h[u],i(r)?r.length>0&&(r=ue(r,"".concat(e||"","_").concat(n)),ae(r[0])&&ae(l)&&(h[u]=_t(l.text+r[0].text),r.shift()),h.push.apply(h,r)):c(r)?ae(l)?h[u]=_t(l.text+r):""!==r&&h.push(_t(r)):ae(r)&&ae(l)?h[u]=_t(l.text+r.text):(a(t._isVList)&&s(r.tag)&&o(r.key)&&s(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function ce(t,e){var n,r,o,a,u=null;if(i(t)||"string"===typeof t)for(u=new Array(t.length),n=0,r=t.length;n<r;n++)u[n]=e(t[n],n);else if("number"===typeof t)for(u=new Array(t),n=0;n<t;n++)u[n]=e(n+1,n);else if(h(t))if(pt&&t[Symbol.iterator]){u=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)u.push(e(l.value,u.length)),l=c.next()}else for(o=Object.keys(t),u=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],u[n]=e(t[a],a,n);return s(u)||(u=[]),u._isVList=!0,u}function le(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=L(L({},r),n)),i=o(n)||(l(e)?e():e)):i=this.$slots[t]||(l(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function he(t){return Tr(this.$options,"filters",t,!0)||j}function fe(t,e){return i(t)?-1===t.indexOf(e):t!==e}function de(t,e,n,r,i){var o=K.keyCodes[e]||n;return i&&r&&!K.keyCodes[e]?fe(i,r):o?fe(o,t):r?O(r)!==e:void 0===t}function pe(t,e,n,r,o){if(n)if(h(n)){i(n)&&(n=P(n));var s=void 0,a=function(i){if("class"===i||"style"===i||w(i))s=t;else{var a=t.attrs&&t.attrs.type;s=r||K.mustUseProp(e,a,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=k(i),c=O(i);if(!(u in s)&&!(c in s)&&(s[i]=n[i],o)){var l=t.on||(t.on={});l["update:".concat(i)]=function(t){n[i]=t}}};for(var u in n)a(u)}else;return t}function ge(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),ve(r,"__static__".concat(t),!1)),r}function me(t,e,n){return ve(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function ve(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&ye(t[r],"".concat(e,"_").concat(r),n);else ye(t,e,n)}function ye(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function _e(t,e){if(e)if(d(e)){var n=t.on=t.on?L({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function we(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var s=t[o];i(s)?we(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function be(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ee(t,e){return"string"===typeof t?e+t:t}function Ie(t){t._o=me,t._n=y,t._s=v,t._l=ce,t._t=le,t._q=F,t._i=$,t._m=ge,t._f=he,t._k=de,t._b=pe,t._v=_t,t._e=yt,t._u=we,t._g=_e,t._d=be,t._p=Ee}function Te(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,u=n[a]||(n[a]=[]);"template"===o.tag?u.push.apply(u,o.children||[]):u.push(o)}}for(var c in n)n[c].every(Se)&&delete n[c];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t){return t.isComment&&t.asyncFactory}function Ce(t,e,n,i){var o,s=Object.keys(n).length>0,a=e?!!e.$stable:!s,u=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&i&&i!==r&&u===i.$key&&!s&&!i.$hasNormal)return i;for(var c in o={},e)e[c]&&"$"!==c[0]&&(o[c]=Ae(t,n,c,e[c]))}else o={};for(var l in n)l in o||(o[l]=Oe(n,l));return e&&Object.isExtensible(e)&&(e._normalized=o),Q(o,"$stable",a),Q(o,"$key",u),Q(o,"$hasNormal",s),o}function Ae(t,e,n,r){var o=function(){var e=gt;mt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:se(n);var o=n&&n[0];return mt(e),n&&(!o||1===n.length&&o.isComment&&!ke(o))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:o,enumerable:!0,configurable:!0}),o}function Oe(t,e){return function(){return t[e]}}function xe(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=Re(t);mt(t),kt();var i=Xe(n,null,[t._props||Nt({}),r],t,"setup");if(Ct(),mt(),l(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var o=t._setupProxy={};for(var s in i)"__sfc"!==s&&Gt(o,i,s)}else for(var s in i)W(s)||Gt(t,i,s);else 0}}function Re(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};Q(e,"_v_attr_proxy",!0),Ne(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};Ne(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return Le(t)},emit:N(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Gt(t,e,n)}))}}}function Ne(t,e,n,r,i){var o=!1;for(var s in e)s in t?e[s]!==n[s]&&(o=!0):(o=!0,De(t,s,r,i));for(var s in t)s in e||(o=!0,delete t[s]);return o}function De(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Le(t){return t._slotsProxy||Pe(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Pe(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Me(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=Te(e._renderChildren,i),t.$scopedSlots=n?Ce(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return He(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return He(t,e,n,r,i,!0)};var o=n&&n.data;Bt(t,"$attrs",o&&o.attrs||r,null,!0),Bt(t,"$listeners",e._parentListeners||r,null,!0)}var Ue=null;function je(t){Ie(t.prototype),t.prototype.$nextTick=function(t){return cn(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&e._isMounted&&(e.$scopedSlots=Ce(e.$parent,o.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&Pe(e._slotsProxy,e.$scopedSlots)),e.$vnode=o;try{mt(e),Ue=e,t=r.call(e._renderProxy,e.$createElement)}catch(Js){Qe(Js,e,"render"),t=e._vnode}finally{Ue=null,mt()}return i(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=o,t}}function Fe(t,e){return(t.__esModule||pt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function $e(t,e,n,r,i){var o=yt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function Ve(t,e){if(a(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=Ue;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var r=t.owners=[n],i=!0,u=null,c=null;n.$on("hook:destroyed",(function(){return b(r,n)}));var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==u&&(clearTimeout(u),u=null),null!==c&&(clearTimeout(c),c=null))},f=V((function(n){t.resolved=Fe(n,e),i?r.length=0:l(!0)})),d=V((function(e){s(t.errorComp)&&(t.error=!0,l(!0))})),p=t(f,d);return h(p)&&(m(p)?o(t.resolved)&&p.then(f,d):m(p.component)&&(p.component.then(f,d),s(p.error)&&(t.errorComp=Fe(p.error,e)),s(p.loading)&&(t.loadingComp=Fe(p.loading,e),0===p.delay?t.loading=!0:u=setTimeout((function(){u=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,l(!1))}),p.delay||200)),s(p.timeout)&&(c=setTimeout((function(){c=null,o(t.resolved)&&d(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function Be(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||ke(n)))return n}}var qe=1,ze=2;function He(t,e,n,r,o,s){return(i(n)||c(n))&&(o=r,r=n,n=void 0),a(s)&&(o=ze),Ke(t,e,n,r,o)}function Ke(t,e,n,r,o){if(s(n)&&s(n.__ob__))return yt();if(s(n)&&s(n.is)&&(e=n.is),!e)return yt();var a,u;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===ze?r=se(r):o===qe&&(r=oe(r)),"string"===typeof e){var c=void 0;u=t.$vnode&&t.$vnode.ns||K.getTagNamespace(e),a=K.isReservedTag(e)?new vt(K.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!s(c=Tr(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):ar(c,n,t,r,e)}else a=ar(e,n,t,r);return i(a)?a:s(a)?(s(u)&&Ge(a,u),s(n)&&We(n),a):yt()}function Ge(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var r=0,i=t.children.length;r<i;r++){var u=t.children[r];s(u.tag)&&(o(u.ns)||a(n)&&"svg"!==u.tag)&&Ge(u,e,n)}}function We(t){h(t.style)&&pn(t.style),h(t.class)&&pn(t.class)}function Qe(t,e,n){kt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Js){Ye(Js,r,"errorCaptured hook")}}}Ye(t,e,n)}finally{Ct()}}function Xe(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&m(o)&&!o._handled&&(o.catch((function(t){return Qe(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Js){Qe(Js,r,i)}return o}function Ye(t,e,n){if(K.errorHandler)try{return K.errorHandler.call(null,t,e,n)}catch(Js){Js!==t&&Je(Js,null,"config.errorHandler")}Je(t,e,n)}function Je(t,e,n){if(!Z||"undefined"===typeof console)throw t;console.error(t)}var Ze,tn=!1,en=[],nn=!1;function rn(){nn=!1;var t=en.slice(0);en.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ft(Promise)){var on=Promise.resolve();Ze=function(){on.then(rn),it&&setTimeout(M)},tn=!0}else if(et||"undefined"===typeof MutationObserver||!ft(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Ze="undefined"!==typeof setImmediate&&ft(setImmediate)?function(){setImmediate(rn)}:function(){setTimeout(rn,0)};else{var sn=1,an=new MutationObserver(rn),un=document.createTextNode(String(sn));an.observe(un,{characterData:!0}),Ze=function(){sn=(sn+1)%2,un.data=String(sn)},tn=!0}function cn(t,e){var n;if(en.push((function(){if(t)try{t.call(e)}catch(Js){Qe(Js,e,"nextTick")}else n&&n(e)})),nn||(nn=!0,Ze()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function ln(t){return function(e,n){if(void 0===n&&(n=gt),n)return hn(n,t,e)}}function hn(t,e,n){var r=t.$options;r[e]=mr(r[e],n)}ln("beforeMount"),ln("mounted"),ln("beforeUpdate"),ln("updated"),ln("beforeDestroy"),ln("destroyed"),ln("activated"),ln("deactivated"),ln("serverPrefetch"),ln("renderTracked"),ln("renderTriggered"),ln("errorCaptured");var fn="2.7.13";var dn=new dt;function pn(t){return gn(t,dn),dn.clear(),t}function gn(t,e){var n,r,o=i(t);if(!(!o&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(o){n=t.length;while(n--)gn(t[n],e)}else if(Kt(t))gn(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)gn(t[r[n]],e)}}}var mn,vn=0,yn=function(){function t(t,e,n,r,i){Yt(this,Qt&&!Qt._vm?Qt:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++vn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new dt,this.newDepIds=new dt,this.expression="",l(e)?this.getter=e:(this.getter=Y(e),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;kt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Js){if(!this.user)throw Js;Qe(Js,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&pn(t),Ct(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Xn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Xe(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&b(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function _n(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&In(t,e)}function wn(t,e){mn.$on(t,e)}function bn(t,e){mn.$off(t,e)}function En(t,e){var n=mn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function In(t,e,n){mn=t,ee(e,n||{},wn,bn,En,t),mn=void 0}function Tn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var o=0,s=t.length;o<s;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var s,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var u=a.length;while(u--)if(s=a[u],s===e||s.fn===e){a.splice(u,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),i='event handler for "'.concat(t,'"'),o=0,s=n.length;o<s;o++)Xe(n[o],e,r,e,i)}return e}}var Sn=null;function kn(t){var e=Sn;return Sn=t,function(){Sn=e}}function Cn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function An(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=kn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ln(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||b(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ln(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function On(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=yt),Ln(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Ln(t,"beforeUpdate")}};new yn(t,r,M,i,!0),n=!1;var o=t._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==t.$vnode&&(t._isMounted=!0,Ln(t,"mounted")),t}function xn(t,e,n,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,u=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),c=!!(o||t.$options._renderChildren||u),l=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o;var h=i.data.attrs||r;t._attrsProxy&&Ne(t._attrsProxy,h,l.data&&l.data.attrs||r,t,"$attrs")&&(c=!0),t.$attrs=h,n=n||r;var f=t.$options._parentListeners;if(t._listenersProxy&&Ne(t._listenersProxy,n,f||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,In(t,n,f),e&&t.$options.props){jt(!1);for(var d=t._props,p=t.$options._propKeys||[],g=0;g<p.length;g++){var m=p[g],v=t.$options.props;d[m]=Sr(m,v,e,t)}jt(!0),t.$options.propsData=e}c&&(t.$slots=Te(o,i.context),t.$forceUpdate())}function Rn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Nn(t,e){if(e){if(t._directInactive=!1,Rn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Nn(t.$children[n]);Ln(t,"activated")}}function Dn(t,e){if((!e||(t._directInactive=!0,!Rn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Ln(t,"deactivated")}}function Ln(t,e,n,r){void 0===r&&(r=!0),kt();var i=gt;r&&mt(t);var o=t.$options[e],s="".concat(e," hook");if(o)for(var a=0,u=o.length;a<u;a++)Xe(o[a],t,n||null,t,s);t._hasHookEvent&&t.$emit("hook:"+e),r&&mt(i),Ct()}var Pn=[],Mn=[],Un={},jn=!1,Fn=!1,$n=0;function Vn(){$n=Pn.length=Mn.length=0,Un={},jn=Fn=!1}var Bn=0,qn=Date.now;if(Z&&!et){var zn=window.performance;zn&&"function"===typeof zn.now&&qn()>document.createEvent("Event").timeStamp&&(qn=function(){return zn.now()})}var Hn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Kn(){var t,e;for(Bn=qn(),Fn=!0,Pn.sort(Hn),$n=0;$n<Pn.length;$n++)t=Pn[$n],t.before&&t.before(),e=t.id,Un[e]=null,t.run();var n=Mn.slice(),r=Pn.slice();Vn(),Qn(n),Gn(r),It(),ht&&K.devtools&&ht.emit("flush")}function Gn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Ln(r,"updated")}}function Wn(t){t._inactive=!1,Mn.push(t)}function Qn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Nn(t[e],!0)}function Xn(t){var e=t.id;if(null==Un[e]&&(t!==Tt.target||!t.noRecurse)){if(Un[e]=!0,Fn){var n=Pn.length-1;while(n>$n&&Pn[n].id>t.id)n--;Pn.splice(n+1,0,t)}else Pn.push(t);jn||(jn=!0,cn(Kn))}}function Yn(t){var e=t.$options.provide;if(e){var n=l(e)?e.call(t):e;if(!h(n))return;for(var r=Jt(t),i=pt?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Jn(t){var e=Zn(t.$options.inject,t);e&&(jt(!1),Object.keys(e).forEach((function(n){Bt(t,n,e[n])})),jt(!0))}function Zn(t,e){if(t){for(var n=Object.create(null),r=pt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from;if(s in e._provided)n[o]=e._provided[s];else if("default"in t[o]){var a=t[o].default;n[o]=l(a)?a.call(e):a}else 0}}return n}}function tr(t,e,n,o,s){var u,c=this,l=s.options;I(o,"_uid")?(u=Object.create(o),u._original=o):(u=o,o=o._original);var h=a(l._compiled),f=!h;this.data=t,this.props=e,this.children=n,this.parent=o,this.listeners=t.on||r,this.injections=Zn(l.inject,o),this.slots=function(){return c.$slots||Ce(o,t.scopedSlots,c.$slots=Te(n,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ce(o,t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ce(o,t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var s=He(u,t,e,n,r,f);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(t,e,n,r){return He(u,t,e,n,r,f)}}function er(t,e,n,o,a){var u=t.options,c={},l=u.props;if(s(l))for(var h in l)c[h]=Sr(h,l,e||r);else s(n.attrs)&&rr(c,n.attrs),s(n.props)&&rr(c,n.props);var f=new tr(n,c,a,o,t),d=u.render.call(null,f._c,f);if(d instanceof vt)return nr(d,n,f.parent,u,f);if(i(d)){for(var p=se(d)||[],g=new Array(p.length),m=0;m<p.length;m++)g[m]=nr(p[m],n,f.parent,u,f);return g}}function nr(t,e,n,r,i){var o=wt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function rr(t,e){for(var n in e)t[k(n)]=e[n]}function ir(t){return t.name||t.__name||t._componentTag}Ie(tr.prototype);var or={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;or.prepatch(n,n)}else{var r=t.componentInstance=ur(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;xn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Ln(n,"mounted")),t.data.keepAlive&&(e._isMounted?Wn(n):Nn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Dn(e,!0):e.$destroy())}},sr=Object.keys(or);function ar(t,e,n,r,i){if(!o(t)){var u=n.$options._base;if(h(t)&&(t=u.extend(t)),"function"===typeof t){var c;if(o(t.cid)&&(c=t,t=Ve(c,u),void 0===t))return $e(c,e,n,r,i);e=e||{},Qr(t),s(e.model)&&hr(t.options,e);var l=re(e,t,i);if(a(t.options.functional))return er(t,l,e,n,r);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}cr(e);var p=ir(t.options)||i,g=new vt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:f,tag:i,children:r},c);return g}}}function ur(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cr(t){for(var e=t.hook||(t.hook={}),n=0;n<sr.length;n++){var r=sr[n],i=e[r],o=or[r];i===o||i&&i._merged||(e[r]=i?lr(o,i):o)}}function lr(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function hr(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],u=e.model.callback;s(a)?(i(a)?-1===a.indexOf(u):a!==u)&&(o[r]=[u].concat(a)):o[r]=u}var fr=M,dr=K.optionMergeStrategies;function pr(t,e){if(!e)return t;for(var n,r,i,o=pt?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=t[n],i=e[n],I(t,n)?r!==i&&d(r)&&d(i)&&pr(r,i):qt(t,n,i));return t}function gr(t,e,n){return n?function(){var r=l(e)?e.call(n,n):e,i=l(t)?t.call(n,n):t;return r?pr(r,i):i}:e?t?function(){return pr(l(e)?e.call(this,this):e,l(t)?t.call(this,this):t)}:e:t}function mr(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?vr(n):n}function vr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function yr(t,e,n,r){var i=Object.create(t||null);return e?L(i,e):i}dr.data=function(t,e,n){return n?gr(t,e,n):e&&"function"!==typeof e?t:gr(t,e)},H.forEach((function(t){dr[t]=mr})),z.forEach((function(t){dr[t+"s"]=yr})),dr.watch=function(t,e,n,r){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var s in L(o,t),e){var a=o[s],u=e[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(u):i(u)?u:[u]}return o},dr.props=dr.methods=dr.inject=dr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return L(i,t),e&&L(i,e),i},dr.provide=gr;var _r=function(t,e){return void 0===e?t:e};function wr(t,e){var n=t.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=k(o),a[s]={type:null})}else if(d(n))for(var u in n)o=n[u],s=k(u),a[s]=d(o)?o:{type:o};else 0;t.props=a}}function br(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(d(n))for(var s in n){var a=n[s];r[s]=d(a)?L({from:s},a):{from:a}}else 0}}function Er(t){var e=t.directives;if(e)for(var n in e){var r=e[n];l(r)&&(e[n]={bind:r,update:r})}}function Ir(t,e,n){if(l(e)&&(e=e.options),wr(e,n),br(e,n),Er(e),!e._base&&(e.extends&&(t=Ir(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Ir(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)I(t,o)||a(o);function a(r){var i=dr[r]||_r;s[r]=i(t[r],e[r],n,r)}return s}function Tr(t,e,n,r){if("string"===typeof n){var i=t[e];if(I(i,n))return i[n];var o=k(n);if(I(i,o))return i[o];var s=C(o);if(I(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Sr(t,e,n,r){var i=e[t],o=!I(n,t),s=n[t],a=xr(Boolean,i.type);if(a>-1)if(o&&!I(i,"default"))s=!1;else if(""===s||s===O(t)){var u=xr(String,i.type);(u<0||a<u)&&(s=!0)}if(void 0===s){s=kr(r,i,t);var c=Ut;jt(!0),Vt(s),jt(c)}return s}function kr(t,e,n){if(I(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:l(r)&&"Function"!==Ar(e.type)?r.call(t):r}}var Cr=/^\s*function (\w+)/;function Ar(t){var e=t&&t.toString().match(Cr);return e?e[1]:""}function Or(t,e){return Ar(t)===Ar(e)}function xr(t,e){if(!i(e))return Or(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Or(e[n],t))return n;return-1}var Rr={enumerable:!0,configurable:!0,get:M,set:M};function Nr(t,e,n){Rr.get=function(){return this[e][n]},Rr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Rr)}function Dr(t){var e=t.$options;if(e.props&&Lr(t,e.props),xe(t),e.methods&&Br(t,e.methods),e.data)Pr(t);else{var n=Vt(t._data={});n&&n.vmCount++}e.computed&&jr(t,e.computed),e.watch&&e.watch!==at&&qr(t,e.watch)}function Lr(t,e){var n=t.$options.propsData||{},r=t._props=Nt({}),i=t.$options._propKeys=[],o=!t.$parent;o||jt(!1);var s=function(o){i.push(o);var s=Sr(o,e,n,t);Bt(r,o,s),o in t||Nr(t,"_props",o)};for(var a in e)s(a);jt(!0)}function Pr(t){var e=t.$options.data;e=t._data=l(e)?Mr(e,t):e||{},d(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&I(r,o)||W(o)||Nr(t,"_data",o)}var s=Vt(e);s&&s.vmCount++}function Mr(t,e){kt();try{return t.call(e,e)}catch(Js){return Qe(Js,e,"data()"),{}}finally{Ct()}}var Ur={lazy:!0};function jr(t,e){var n=t._computedWatchers=Object.create(null),r=lt();for(var i in e){var o=e[i],s=l(o)?o:o.get;0,r||(n[i]=new yn(t,s||M,M,Ur)),i in t||Fr(t,i,o)}}function Fr(t,e,n){var r=!lt();l(n)?(Rr.get=r?$r(e):Vr(n),Rr.set=M):(Rr.get=n.get?r&&!1!==n.cache?$r(e):Vr(n.get):M,Rr.set=n.set||M),Object.defineProperty(t,e,Rr)}function $r(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Tt.target&&e.depend(),e.value}}function Vr(t){return function(){return t.call(this,this)}}function Br(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?M:N(e[n],t)}function qr(t,e){for(var n in e){var r=e[n];if(i(r))for(var o=0;o<r.length;o++)zr(t,n,r[o]);else zr(t,n,r)}}function zr(t,e,n,r){return d(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Hr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=qt,t.prototype.$delete=zt,t.prototype.$watch=function(t,e,n){var r=this;if(d(e))return zr(r,t,e,n);n=n||{},n.user=!0;var i=new yn(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');kt(),Xe(e,r,[i.value],r,o),Ct()}return function(){i.teardown()}}}var Kr=0;function Gr(t){t.prototype._init=function(t){var e=this;e._uid=Kr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Xt(!0),e._scope._vm=!0,t&&t._isComponent?Wr(e,t):e.$options=Ir(Qr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Cn(e),_n(e),Me(e),Ln(e,"beforeCreate",void 0,!1),Jn(e),Dr(e),Yn(e),Ln(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Wr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Qr(t){var e=t.options;if(t.super){var n=Qr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Xr(t);i&&L(t.extendOptions,i),e=t.options=Ir(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Xr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Yr(t){this._init(t)}function Jr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),l(t.install)?t.install.apply(t,n):l(t)&&t.apply(null,n),e.push(t),this}}function Zr(t){t.mixin=function(t){return this.options=Ir(this.options,t),this}}function ti(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=ir(t)||ir(n.options);var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Ir(n.options,t),s["super"]=n,s.options.props&&ei(s),s.options.computed&&ni(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,z.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=L({},s.options),i[r]=s,s}}function ei(t){var e=t.options.props;for(var n in e)Nr(t.prototype,"_props",n)}function ni(t){var e=t.options.computed;for(var n in e)Fr(t.prototype,n,e[n])}function ri(t){z.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&d(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&l(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ii(t){return t&&(ir(t.Ctor.options)||t.tag)}function oi(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function si(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&ai(n,o,r,i)}}}function ai(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,b(n,e)}Gr(Yr),Hr(Yr),Tn(Yr),An(Yr),je(Yr);var ui=[String,RegExp,Array],ci={name:"keep-alive",abstract:!0,props:{include:ui,exclude:ui,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:ii(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&ai(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)ai(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){si(t,(function(t){return oi(e,t)}))})),this.$watch("exclude",(function(e){si(t,(function(t){return!oi(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Be(t),n=e&&e.componentOptions;if(n){var r=ii(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!oi(o,r))||s&&r&&oi(s,r))return e;var a=this,u=a.cache,c=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;u[l]?(e.componentInstance=u[l].componentInstance,b(c,l),c.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},li={KeepAlive:ci};function hi(t){var e={get:function(){return K}};Object.defineProperty(t,"config",e),t.util={warn:fr,extend:L,mergeOptions:Ir,defineReactive:Bt},t.set=qt,t.delete=zt,t.nextTick=cn,t.observable=function(t){return Vt(t),t},t.options=Object.create(null),z.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,L(t.options.components,li),Jr(t),Zr(t),ti(t),ri(t)}hi(Yr),Object.defineProperty(Yr.prototype,"$isServer",{get:lt}),Object.defineProperty(Yr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Yr,"FunctionalRenderContext",{value:tr}),Yr.version=fn;var fi=_("style,class"),di=_("input,textarea,option,select,progress"),pi=function(t,e,n){return"value"===n&&di(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},gi=_("contenteditable,draggable,spellcheck"),mi=_("events,caret,typing,plaintext-only"),vi=function(t,e){return Ei(e)||"false"===e?"false":"contenteditable"===t&&mi(e)?e:"true"},yi=_("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),_i="http://www.w3.org/1999/xlink",wi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},bi=function(t){return wi(t)?t.slice(6,t.length):""},Ei=function(t){return null==t||!1===t};function Ii(t){var e=t.data,n=t,r=t;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Ti(r.data,e));while(s(n=n.parent))n&&n.data&&(e=Ti(e,n.data));return Si(e.staticClass,e.class)}function Ti(t,e){return{staticClass:ki(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Si(t,e){return s(t)||s(e)?ki(t,Ci(e)):""}function ki(t,e){return t?e?t+" "+e:t:e||""}function Ci(t){return Array.isArray(t)?Ai(t):h(t)?Oi(t):"string"===typeof t?t:""}function Ai(t){for(var e,n="",r=0,i=t.length;r<i;r++)s(e=Ci(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Oi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var xi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ri=_("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ni=_("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Di=function(t){return Ri(t)||Ni(t)};function Li(t){return Ni(t)?"svg":"math"===t?"math":void 0}var Pi=Object.create(null);function Mi(t){if(!Z)return!0;if(Di(t))return!1;if(t=t.toLowerCase(),null!=Pi[t])return Pi[t];var e=document.createElement(t);return t.indexOf("-")>-1?Pi[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Pi[t]=/HTMLUnknownElement/.test(e.toString())}var Ui=_("text,number,password,search,email,tel,url");function ji(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Fi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function $i(t,e){return document.createElementNS(xi[t],e)}function Vi(t){return document.createTextNode(t)}function Bi(t){return document.createComment(t)}function qi(t,e,n){t.insertBefore(e,n)}function zi(t,e){t.removeChild(e)}function Hi(t,e){t.appendChild(e)}function Ki(t){return t.parentNode}function Gi(t){return t.nextSibling}function Wi(t){return t.tagName}function Qi(t,e){t.textContent=e}function Xi(t,e){t.setAttribute(e,"")}var Yi=Object.freeze({__proto__:null,createElement:Fi,createElementNS:$i,createTextNode:Vi,createComment:Bi,insertBefore:qi,removeChild:zi,appendChild:Hi,parentNode:Ki,nextSibling:Gi,tagName:Wi,setTextContent:Qi,setStyleScope:Xi}),Ji={create:function(t,e){Zi(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Zi(t,!0),Zi(e))},destroy:function(t){Zi(t,!0)}};function Zi(t,e){var n=t.data.ref;if(s(n)){var r=t.context,o=t.componentInstance||t.elm,a=e?null:o,u=e?void 0:o;if(l(n))Xe(n,r,[a],r,"template ref function");else{var c=t.data.refInFor,h="string"===typeof n||"number"===typeof n,f=Kt(n),d=r.$refs;if(h||f)if(c){var p=h?d[n]:n.value;e?i(p)&&b(p,o):i(p)?p.includes(o)||p.push(o):h?(d[n]=[o],to(r,n,d[n])):n.value=[o]}else if(h){if(e&&d[n]!==o)return;d[n]=u,to(r,n,a)}else if(f){if(e&&n.value!==o)return;n.value=a}else 0}}}function to(t,e,n){var r=t._setupState;r&&I(r,e)&&(Kt(r[e])?r[e].value=n:r[e]=n)}var eo=new vt("",{},[]),no=["create","activate","update","remove","destroy"];function ro(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&io(t,e)||a(t.isAsyncPlaceholder)&&o(e.asyncFactory.error))}function io(t,e){if("input"!==t.tag)return!0;var n,r=s(n=t.data)&&s(n=n.attrs)&&n.type,i=s(n=e.data)&&s(n=n.attrs)&&n.type;return r===i||Ui(r)&&Ui(i)}function oo(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,s(i)&&(o[i]=r);return o}function so(t){var e,n,r={},u=t.modules,l=t.nodeOps;for(e=0;e<no.length;++e)for(r[no[e]]=[],n=0;n<u.length;++n)s(u[n][no[e]])&&r[no[e]].push(u[n][no[e]]);function h(t){return new vt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);s(e)&&l.removeChild(e,t)}function p(t,e,n,r,i,o,u){if(s(t.elm)&&s(o)&&(t=o[u]=wt(t)),t.isRootInsert=!i,!g(t,e,n,r)){var c=t.data,h=t.children,f=t.tag;s(f)?(t.elm=t.ns?l.createElementNS(t.ns,f):l.createElement(f,t),I(t),w(t,h,e),s(c)&&E(t,e),y(n,t.elm,r)):a(t.isComment)?(t.elm=l.createComment(t.text),y(n,t.elm,r)):(t.elm=l.createTextNode(t.text),y(n,t.elm,r))}}function g(t,e,n,r){var i=t.data;if(s(i)){var o=s(t.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(t,!1),s(t.componentInstance))return m(t,e),y(n,t.elm,r),a(o)&&v(t,e,n,r),!0}}function m(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(E(t,e),I(t)):(Zi(t),e.push(t))}function v(t,e,n,i){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](eo,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){s(t)&&(s(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function w(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else c(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function E(t,n){for(var i=0;i<r.create.length;++i)r.create[i](eo,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(eo,t),s(e.insert)&&n.push(t))}function I(t){var e;if(s(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}s(e=Sn)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function T(t,e,n,r,i,o){for(;r<=i;++r)p(n[r],o,t,e,!1,n,r)}function S(t){var e,n,i=t.data;if(s(i))for(s(e=i.hook)&&s(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)S(t.children[n])}function k(t,e,n){for(;e<=n;++e){var r=t[e];s(r)&&(s(r.tag)?(C(r),S(r)):d(r.elm))}}function C(t,e){if(s(e)||s(t.data)){var n,i=r.remove.length+1;for(s(e)?e.listeners+=i:e=f(t.elm,i),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&C(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else d(t.elm)}function A(t,e,n,r,i){var a,u,c,h,f=0,d=0,g=e.length-1,m=e[0],v=e[g],y=n.length-1,_=n[0],w=n[y],b=!i;while(f<=g&&d<=y)o(m)?m=e[++f]:o(v)?v=e[--g]:ro(m,_)?(x(m,_,r,n,d),m=e[++f],_=n[++d]):ro(v,w)?(x(v,w,r,n,y),v=e[--g],w=n[--y]):ro(m,w)?(x(m,w,r,n,y),b&&l.insertBefore(t,m.elm,l.nextSibling(v.elm)),m=e[++f],w=n[--y]):ro(v,_)?(x(v,_,r,n,d),b&&l.insertBefore(t,v.elm,m.elm),v=e[--g],_=n[++d]):(o(a)&&(a=oo(e,f,g)),u=s(_.key)?a[_.key]:O(_,e,f,g),o(u)?p(_,r,t,m.elm,!1,n,d):(c=e[u],ro(c,_)?(x(c,_,r,n,d),e[u]=void 0,b&&l.insertBefore(t,c.elm,m.elm)):p(_,r,t,m.elm,!1,n,d)),_=n[++d]);f>g?(h=o(n[y+1])?null:n[y+1].elm,T(t,h,n,d,y,r)):d>y&&k(e,f,g)}function O(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(s(o)&&ro(t,o))return i}}function x(t,e,n,i,u,c){if(t!==e){s(e.elm)&&s(i)&&(e=i[u]=wt(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?D(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;s(d)&&s(f=d.hook)&&s(f=f.prepatch)&&f(t,e);var p=t.children,g=e.children;if(s(d)&&b(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);s(f=d.hook)&&s(f=f.update)&&f(t,e)}o(e.text)?s(p)&&s(g)?p!==g&&A(h,p,g,n,c):s(g)?(s(t.text)&&l.setTextContent(h,""),T(h,null,g,0,g.length-1,n)):s(p)?k(p,0,p.length-1):s(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),s(d)&&s(f=d.hook)&&s(f=f.postpatch)&&f(t,e)}}}function R(t,e,n){if(a(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=_("attrs,class,staticClass,staticStyle,key");function D(t,e,n,r){var i,o=e.tag,u=e.data,c=e.children;if(r=r||u&&u.pre,e.elm=t,a(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(u)&&(s(i=u.hook)&&s(i=i.init)&&i(e,!0),s(i=e.componentInstance)))return m(e,n),!0;if(s(o)){if(s(c))if(t.hasChildNodes())if(s(i=u)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<c.length;f++){if(!h||!D(h,c[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(e,c,n);if(s(u)){var d=!1;for(var p in u)if(!N(p)){d=!0,E(e,n);break}!d&&u["class"]&&pn(u["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!o(e)){var u=!1,c=[];if(o(t))u=!0,p(e,c);else{var f=s(t.nodeType);if(!f&&ro(t,e))x(t,e,c,null,null,i);else{if(f){if(1===t.nodeType&&t.hasAttribute(q)&&(t.removeAttribute(q),n=!0),a(n)&&D(t,e,c))return R(e,c,!0),t;t=h(t)}var d=t.elm,g=l.parentNode(d);if(p(e,c,d._leaveCb?null:g,l.nextSibling(d)),s(e.parent)){var m=e.parent,v=b(e);while(m){for(var y=0;y<r.destroy.length;++y)r.destroy[y](m);if(m.elm=e.elm,v){for(var _=0;_<r.create.length;++_)r.create[_](eo,m);var w=m.data.hook.insert;if(w.merged)for(var E=1;E<w.fns.length;E++)w.fns[E]()}else Zi(m);m=m.parent}}s(g)?k([t],0,0):s(t.tag)&&S(t)}}return R(e,c,u),e.elm}s(t)&&S(t)}}var ao={create:uo,update:uo,destroy:function(t){uo(t,eo)}};function uo(t,e){(t.data.directives||e.data.directives)&&co(t,e)}function co(t,e){var n,r,i,o=t===eo,s=e===eo,a=ho(t.data.directives,t.context),u=ho(e.data.directives,e.context),c=[],l=[];for(n in u)r=a[n],i=u[n],r?(i.oldValue=r.value,i.oldArg=r.arg,po(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(po(i,"bind",e,t),i.def&&i.def.inserted&&c.push(i));if(c.length){var h=function(){for(var n=0;n<c.length;n++)po(c[n],"inserted",e,t)};o?ne(e,"insert",h):h()}if(l.length&&ne(e,"postpatch",(function(){for(var n=0;n<l.length;n++)po(l[n],"componentUpdated",e,t)})),!o)for(n in a)u[n]||po(a[n],"unbind",t,t,s)}var lo=Object.create(null);function ho(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=lo),i[fo(r)]=r,e._setupState&&e._setupState.__sfc){var o=r.def||Tr(e,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||Tr(e.$options,"directives",r.name,!0)}return i}function fo(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function po(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Js){Qe(Js,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var go=[Ji,ao];function mo(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(t.data.attrs)||!o(e.data.attrs))){var r,i,u,c=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=L({},h)),h)i=h[r],u=l[r],u!==i&&vo(c,r,i,e.data.pre);for(r in(et||rt)&&h.value!==l.value&&vo(c,"value",h.value),l)o(h[r])&&(wi(r)?c.removeAttributeNS(_i,bi(r)):gi(r)||c.removeAttribute(r))}}function vo(t,e,n,r){r||t.tagName.indexOf("-")>-1?yo(t,e,n):yi(e)?Ei(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):gi(e)?t.setAttribute(e,vi(e,n)):wi(e)?Ei(n)?t.removeAttributeNS(_i,bi(e)):t.setAttributeNS(_i,e,n):yo(t,e,n)}function yo(t,e,n){if(Ei(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var _o={create:mo,update:mo};function wo(t,e){var n=e.elm,r=e.data,i=t.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=Ii(e),u=n._transitionClasses;s(u)&&(a=ki(a,Ci(u))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var bo,Eo={create:wo,update:wo},Io="__r",To="__c";function So(t){if(s(t[Io])){var e=et?"change":"input";t[e]=[].concat(t[Io],t[e]||[]),delete t[Io]}s(t[To])&&(t.change=[].concat(t[To],t.change||[]),delete t[To])}function ko(t,e,n){var r=bo;return function i(){var o=e.apply(null,arguments);null!==o&&Oo(t,i,n,r)}}var Co=tn&&!(st&&Number(st[1])<=53);function Ao(t,e,n,r){if(Co){var i=Bn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}bo.addEventListener(t,e,ut?{capture:n,passive:r}:n)}function Oo(t,e,n,r){(r||bo).removeEventListener(t,e._wrapper||e,n)}function xo(t,e){if(!o(t.data.on)||!o(e.data.on)){var n=e.data.on||{},r=t.data.on||{};bo=e.elm||t.elm,So(n),ee(n,r,Ao,Oo,ko,e.context),bo=void 0}}var Ro,No={create:xo,update:xo,destroy:function(t){return xo(t,eo)}};function Do(t,e){if(!o(t.data.domProps)||!o(e.data.domProps)){var n,r,i=e.elm,u=t.data.domProps||{},c=e.data.domProps||{};for(n in(s(c.__ob__)||a(c._v_attr_proxy))&&(c=e.data.domProps=L({},c)),u)n in c||(i[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===u[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);Lo(i,l)&&(i.value=l)}else if("innerHTML"===n&&Ni(i.tagName)&&o(i.innerHTML)){Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>".concat(r,"</svg>");var h=Ro.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==u[n])try{i[n]=r}catch(Js){}}}}function Lo(t,e){return!t.composing&&("OPTION"===t.tagName||Po(t,e)||Mo(t,e))}function Po(t,e){var n=!0;try{n=document.activeElement!==t}catch(Js){}return n&&t.value!==e}function Mo(t,e){var n=t.value,r=t._vModifiers;if(s(r)){if(r.number)return y(n)!==y(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var Uo={create:Do,update:Do},jo=T((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Fo(t){var e=$o(t.style);return t.staticStyle?L(t.staticStyle,e):e}function $o(t){return Array.isArray(t)?P(t):"string"===typeof t?jo(t):t}function Vo(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Fo(i.data))&&L(r,n)}(n=Fo(t.data))&&L(r,n);var o=t;while(o=o.parent)o.data&&(n=Fo(o.data))&&L(r,n);return r}var Bo,qo=/^--/,zo=/\s*!important$/,Ho=function(t,e,n){if(qo.test(e))t.style.setProperty(e,n);else if(zo.test(n))t.style.setProperty(O(e),n.replace(zo,""),"important");else{var r=Go(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Ko=["Webkit","Moz","ms"],Go=T((function(t){if(Bo=Bo||document.createElement("div").style,t=k(t),"filter"!==t&&t in Bo)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Ko.length;n++){var r=Ko[n]+e;if(r in Bo)return r}}));function Wo(t,e){var n=e.data,r=t.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,u=e.elm,c=r.staticStyle,l=r.normalizedStyle||r.style||{},h=c||l,f=$o(e.data.style)||{};e.data.normalizedStyle=s(f.__ob__)?L({},f):f;var d=Vo(e,!0);for(a in h)o(d[a])&&Ho(u,a,"");for(a in d)i=d[a],i!==h[a]&&Ho(u,a,null==i?"":i)}}var Qo={create:Wo,update:Wo},Xo=/\s+/;function Yo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Xo).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Jo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Xo).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Zo(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&L(e,ts(t.name||"v")),L(e,t),e}return"string"===typeof t?ts(t):void 0}}var ts=T((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),es=Z&&!nt,ns="transition",rs="animation",is="transition",os="transitionend",ss="animation",as="animationend";es&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(is="WebkitTransition",os="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(ss="WebkitAnimation",as="webkitAnimationEnd"));var us=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function cs(t){us((function(){us(t)}))}function ls(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Yo(t,e))}function hs(t,e){t._transitionClasses&&b(t._transitionClasses,e),Jo(t,e)}function fs(t,e,n){var r=ps(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===ns?os:as,u=0,c=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++u>=s&&c()};setTimeout((function(){u<s&&c()}),o+1),t.addEventListener(a,l)}var ds=/\b(transform|all)(,|$)/;function ps(t,e){var n,r=window.getComputedStyle(t),i=(r[is+"Delay"]||"").split(", "),o=(r[is+"Duration"]||"").split(", "),s=gs(i,o),a=(r[ss+"Delay"]||"").split(", "),u=(r[ss+"Duration"]||"").split(", "),c=gs(a,u),l=0,h=0;e===ns?s>0&&(n=ns,l=s,h=o.length):e===rs?c>0&&(n=rs,l=c,h=u.length):(l=Math.max(s,c),n=l>0?s>c?ns:rs:null,h=n?n===ns?o.length:u.length:0);var f=n===ns&&ds.test(r[is+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function gs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return ms(e)+ms(t[n])})))}function ms(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function vs(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Zo(t.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,u=r.enterClass,c=r.enterToClass,f=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,g=r.appearActiveClass,m=r.beforeEnter,v=r.enter,_=r.afterEnter,w=r.enterCancelled,b=r.beforeAppear,E=r.appear,I=r.afterAppear,T=r.appearCancelled,S=r.duration,k=Sn,C=Sn.$vnode;while(C&&C.parent)k=C.context,C=C.parent;var A=!k._isMounted||!t.isRootInsert;if(!A||E||""===E){var O=A&&d?d:u,x=A&&g?g:f,R=A&&p?p:c,N=A&&b||m,D=A&&l(E)?E:v,L=A&&I||_,P=A&&T||w,M=y(h(S)?S.enter:S);0;var U=!1!==i&&!nt,j=ws(D),F=n._enterCb=V((function(){U&&(hs(n,R),hs(n,x)),F.cancelled?(U&&hs(n,O),P&&P(n)):L&&L(n),n._enterCb=null}));t.data.show||ne(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),D&&D(n,F)})),N&&N(n),U&&(ls(n,O),ls(n,x),cs((function(){hs(n,O),F.cancelled||(ls(n,R),j||(_s(M)?setTimeout(F,M):fs(n,a,F)))}))),t.data.show&&(e&&e(),D&&D(n,F)),U||j||F()}}}function ys(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Zo(t.data.transition);if(o(r)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var i=r.css,a=r.type,u=r.leaveClass,c=r.leaveToClass,l=r.leaveActiveClass,f=r.beforeLeave,d=r.leave,p=r.afterLeave,g=r.leaveCancelled,m=r.delayLeave,v=r.duration,_=!1!==i&&!nt,w=ws(d),b=y(h(v)?v.leave:v);0;var E=n._leaveCb=V((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),_&&(hs(n,c),hs(n,l)),E.cancelled?(_&&hs(n,u),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));m?m(I):I()}function I(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),_&&(ls(n,u),ls(n,l),cs((function(){hs(n,u),E.cancelled||(ls(n,c),w||(_s(b)?setTimeout(E,b):fs(n,a,E)))}))),d&&d(n,E),_||w||E())}}function _s(t){return"number"===typeof t&&!isNaN(t)}function ws(t){if(o(t))return!1;var e=t.fns;return s(e)?ws(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function bs(t,e){!0!==e.data.show&&vs(e)}var Es=Z?{create:bs,activate:bs,remove:function(t,e){!0!==t.data.show?ys(t,e):e()}}:{},Is=[_o,Eo,No,Uo,Qo,Es],Ts=Is.concat(go),Ss=so({nodeOps:Yi,modules:Ts});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Ds(t,"input")}));var ks={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ne(n,"postpatch",(function(){ks.componentUpdated(t,e,n)})):Cs(t,e,n.context),t._vOptions=[].map.call(t.options,xs)):("textarea"===n.tag||Ui(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Rs),t.addEventListener("compositionend",Ns),t.addEventListener("change",Ns),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Cs(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,xs);if(i.some((function(t,e){return!F(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return Os(t,i)})):e.value!==e.oldValue&&Os(e.value,i);o&&Ds(t,"change")}}}};function Cs(t,e,n){As(t,e,n),(et||rt)&&setTimeout((function(){As(t,e,n)}),0)}function As(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,u=t.options.length;a<u;a++)if(s=t.options[a],i)o=$(r,xs(s))>-1,s.selected!==o&&(s.selected=o);else if(F(xs(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function Os(t,e){return e.every((function(e){return!F(e,t)}))}function xs(t){return"_value"in t?t._value:t.value}function Rs(t){t.target.composing=!0}function Ns(t){t.target.composing&&(t.target.composing=!1,Ds(t.target,"input"))}function Ds(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Ls(t){return!t.componentInstance||t.data&&t.data.transition?t:Ls(t.componentInstance._vnode)}var Ps={bind:function(t,e,n){var r=e.value;n=Ls(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,vs(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Ls(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?vs(n,(function(){t.style.display=t.__vOriginalDisplay})):ys(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},Ms={model:ks,show:Ps},Us={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function js(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?js(Be(e.children)):t}function Fs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[k(r)]=i[r];return e}function $s(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Vs(t){while(t=t.parent)if(t.data.transition)return!0}function Bs(t,e){return e.key===t.key&&e.tag===t.tag}var qs=function(t){return t.tag||ke(t)},zs=function(t){return"show"===t.name},Hs={name:"transition",props:Us,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(qs),n.length)){0;var r=this.mode;0;var i=n[0];if(Vs(this.$vnode))return i;var o=js(i);if(!o)return i;if(this._leaving)return $s(t,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:c(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=Fs(this),u=this._vnode,l=js(u);if(o.data.directives&&o.data.directives.some(zs)&&(o.data.show=!0),l&&l.data&&!Bs(o,l)&&!ke(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=L({},a);if("out-in"===r)return this._leaving=!0,ne(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),$s(t,i);if("in-out"===r){if(ke(o))return u;var f,d=function(){f()};ne(a,"afterEnter",d),ne(a,"enterCancelled",d),ne(h,"delayLeave",(function(t){f=t}))}}return i}}},Ks=L({tag:String,moveClass:String},Us);delete Ks.mode;var Gs={props:Ks,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=kn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=Fs(this),a=0;a<i.length;a++){var u=i[a];if(u.tag)if(null!=u.key&&0!==String(u.key).indexOf("__vlist"))o.push(u),n[u.key]=u,(u.data||(u.data={})).transition=s;else;}if(r){var c=[],l=[];for(a=0;a<r.length;a++){u=r[a];u.data.transition=s,u.data.pos=u.elm.getBoundingClientRect(),n[u.key]?c.push(u):l.push(u)}this.kept=t(e,null,c),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Ws),t.forEach(Qs),t.forEach(Xs),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;ls(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(os,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(os,t),n._moveCb=null,hs(n,e))})}})))},methods:{hasMove:function(t,e){if(!es)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Jo(n,t)})),Yo(n,e),n.style.display="none",this.$el.appendChild(n);var r=ps(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Ws(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Qs(t){t.data.newPos=t.elm.getBoundingClientRect()}function Xs(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Ys={Transition:Hs,TransitionGroup:Gs};Yr.config.mustUseProp=pi,Yr.config.isReservedTag=Di,Yr.config.isReservedAttr=fi,Yr.config.getTagNamespace=Li,Yr.config.isUnknownElement=Mi,L(Yr.options.directives,Ms),L(Yr.options.components,Ys),Yr.prototype.__patch__=Z?Ss:M,Yr.prototype.$mount=function(t,e){return t=t&&Z?ji(t):void 0,On(this,t,e)},Z&&setTimeout((function(){K.devtools&&ht&&ht.emit("init",Yr)}),0)},3822:function(t,e,n){"use strict";n.d(e,{Se:function(){return P},rn:function(){return D}});n(7658),n(541);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function u(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=u(t[n],e)})),r}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){c(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var g=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;m(t.concat(r),e.getChild(r),n.modules[r])}}g.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},g.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},g.prototype.update=function(t){m([],this.root,t)},g.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&c(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},g.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},g.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&N(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new g(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,u=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return u.call(i,t,e,n)},this.strict=r;var c=this._modules.root.state;I(this,c,[],this._modules.root),E(this,c),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:v.config.devtools;l&&s(this)},_={state:{configurable:!0}};function w(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function b(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;I(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};c(i,(function(e,n){o[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:o}),v.config.silent=s,t.strict&&O(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function I(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=x(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit((function(){v.set(a,u,r.state)}))}var c=r.context=T(t,s,n);r.forEachMutation((function(e,n){var r=s+n;k(t,r,e,c)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;C(t,r,i,c)})),r.forEachGetter((function(e,n){var r=s+n;A(t,r,e,c)})),r.forEachChild((function(r,o){I(t,e,n.concat(o),r,i)}))}function T(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,u=o.type;return a&&a.root||(u=e+u),t.dispatch(u,s)},commit:r?t.commit:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,u=o.type;a&&a.root||(u=e+u),t.commit(u,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return S(t,e)}},state:{get:function(){return x(t.state,n)}}}),i}function S(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function k(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function C(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function x(t,e){return e.reduce((function(t,e){return t[e]}),t)}function R(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function N(t){v&&t===v||(v=t,r(v))}_.state.get=function(){return this._vm._data.$$state},_.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=R(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),u=this._mutations[o];u&&(this._withCommit((function(){u.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=R(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(c){0}var u=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){u.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(c){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(c){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return w(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return w(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),I(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=x(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),b(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),b(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,_);var D=$((function(t,e){var n={};return j(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=V(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),L=$((function(t,e){var n={};return j(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=V(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),P=$((function(t,e){var n={};return j(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||V(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=$((function(t,e){var n={};return j(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=V(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),U=function(t){return{mapState:D.bind(null,t),mapGetters:P.bind(null,t),mapMutations:L.bind(null,t),mapActions:M.bind(null,t)}};function j(t){return F(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function F(t){return Array.isArray(t)||l(t)}function $(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function V(t,e,n){var r=t._modulesNamespaceMap[n];return r}function B(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var c=t.logActions;void 0===c&&(c=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=u(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,o){var s=u(o);if(n(t,h,s)){var a=H(),c=i(t),f="mutation "+t.type+a;q(l,f,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",c),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),z(l)}h=s})),c&&t.subscribeAction((function(t,n){if(o(t,n)){var r=H(),i=s(t),a="action "+t.type+r;q(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),z(l)}})))}}function q(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function z(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function H(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function K(t,e){return new Array(e+1).join(t)}function G(t,e){return K("0",e-t.toString().length)+t}var W={Store:y,install:N,version:"3.6.2",mapState:D,mapMutations:L,mapGetters:P,mapActions:M,createNamespacedHelpers:U,createLogger:B};e["ZP"]=W},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return mt},KN:function(){return yt}});n(7658);var r=n(7142),i=n(5168),o=n(223);n(2801);const s=(t,e)=>e.some((e=>t instanceof e));let a,u;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(E(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(I(this),e),E(h.get(this))}:function(...e){return E(t.apply(I(this),e))}:function(e,...n){const r=t.call(I(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),s(t,c())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const I=t=>g.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=E(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(E(s.result),t.oldVersion,t.newVersion,E(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return C.set(e,o),o}_((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(x(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function x(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",N="0.8.3",D=new i.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",j="@firebase/app-check",F="@firebase/auth",$="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.13.0",ot="[DEFAULT]",st={[R]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[j]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[$]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ut=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ut.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ut.set(e,t);for(const n of at.values())ct(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new o.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw dt.create("no-options");const a=at.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw dt.create("duplicate-app",{appName:s})}const u=new r.H0(s);for(const r of ut.values())u.addComponent(r);const c=new pt(n,i,u);return at.set(s,c),c}function vt(t=ot){const e=at.get(t);if(!e&&t===ot)return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let o=null!==(i=st[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}lt(new r.wA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t="firebase-heartbeat-database",wt=1,bt="firebase-heartbeat-store";let Et=null;function It(){return Et||(Et=T(_t,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function Tt(t){var e;try{const e=await It();return e.transaction(bt).objectStore(bt).get(kt(t))}catch(n){if(n instanceof o.ZR)D.warn(n.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});D.warn(t.message)}}}async function St(t,e){var n;try{const n=await It(),r=n.transaction(bt,"readwrite"),i=r.objectStore(bt);return await i.put(e,kt(t)),r.done}catch(r){if(r instanceof o.ZR)D.warn(r.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});D.warn(t.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=1024,At=2592e6;class Ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=xt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=xt(),{heartbeatsToSend:e,unsentEntries:n}=Rt(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xt(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=Ct){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Tt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,o.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){lt(new r.wA("platform-logger",(t=>new O(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Ot(t)),"PRIVATE")),yt(R,N,t),yt(R,N,"esm2017"),yt("fire-js","")}Lt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return i}});var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return c},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=s,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.ff910e63.js.map