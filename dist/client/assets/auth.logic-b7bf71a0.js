function _l(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function Do(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={},wl={get exports(){return vs},set exports(e){vs=e}},Gn={},Be={},Il={get exports(){return Be},set exports(e){Be=e}},S={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=Symbol.for("react.element"),El=Symbol.for("react.portal"),Tl=Symbol.for("react.fragment"),bl=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),Sl=Symbol.for("react.provider"),kl=Symbol.for("react.context"),Rl=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),Dl=Symbol.for("react.memo"),Ol=Symbol.for("react.lazy"),_s=Symbol.iterator;function Pl(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var Oo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Po=Object.assign,No={};function _t(e,t,n){this.props=e,this.context=t,this.refs=No,this.updater=n||Oo}_t.prototype.isReactComponent={};_t.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lo(){}Lo.prototype=_t.prototype;function fi(e,t,n){this.props=e,this.context=t,this.refs=No,this.updater=n||Oo}var pi=fi.prototype=new Lo;pi.constructor=fi;Po(pi,_t.prototype);pi.isPureReactComponent=!0;var ws=Array.isArray,Mo=Object.prototype.hasOwnProperty,gi={current:null},xo={key:!0,ref:!0,__self:!0,__source:!0};function Uo(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Mo.call(t,r)&&!xo.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gt,type:e,key:s,ref:o,props:i,_owner:gi.current}}function Nl(e,t){return{$$typeof:Gt,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gt}function Ll(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Is=/\/+/g;function _r(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ll(""+e.key):t.toString(36)}function wn(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gt:case El:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+_r(o,0):r,ws(i)?(n="",e!=null&&(n=e.replace(Is,"$&/")+"/"),wn(i,t,n,"",function(l){return l})):i!=null&&(mi(i)&&(i=Nl(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Is,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ws(e))for(var a=0;a<e.length;a++){s=e[a];var c=r+_r(s,a);o+=wn(s,t,n,c,i)}else if(c=Pl(e),typeof c=="function")for(e=c.call(e),a=0;!(s=e.next()).done;)s=s.value,c=r+_r(s,a++),o+=wn(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function gn(e,t,n){if(e==null)return e;var r=[],i=0;return wn(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Ml(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Q={current:null},In={transition:null},xl={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:In,ReactCurrentOwner:gi};S.Children={map:gn,forEach:function(e,t,n){gn(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gn(e,function(){t++}),t},toArray:function(e){return gn(e,function(t){return t})||[]},only:function(e){if(!mi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};S.Component=_t;S.Fragment=Tl;S.Profiler=Al;S.PureComponent=fi;S.StrictMode=bl;S.Suspense=Cl;S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xl;S.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Po({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=gi.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Mo.call(t,c)&&!xo.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Gt,type:e.type,key:i,ref:s,props:r,_owner:o}};S.createContext=function(e){return e={$$typeof:kl,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sl,_context:e},e.Consumer=e};S.createElement=Uo;S.createFactory=function(e){var t=Uo.bind(null,e);return t.type=e,t};S.createRef=function(){return{current:null}};S.forwardRef=function(e){return{$$typeof:Rl,render:e}};S.isValidElement=mi;S.lazy=function(e){return{$$typeof:Ol,_payload:{_status:-1,_result:e},_init:Ml}};S.memo=function(e,t){return{$$typeof:Dl,type:e,compare:t===void 0?null:t}};S.startTransition=function(e){var t=In.transition;In.transition={};try{e()}finally{In.transition=t}};S.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};S.useCallback=function(e,t){return Q.current.useCallback(e,t)};S.useContext=function(e){return Q.current.useContext(e)};S.useDebugValue=function(){};S.useDeferredValue=function(e){return Q.current.useDeferredValue(e)};S.useEffect=function(e,t){return Q.current.useEffect(e,t)};S.useId=function(){return Q.current.useId()};S.useImperativeHandle=function(e,t,n){return Q.current.useImperativeHandle(e,t,n)};S.useInsertionEffect=function(e,t){return Q.current.useInsertionEffect(e,t)};S.useLayoutEffect=function(e,t){return Q.current.useLayoutEffect(e,t)};S.useMemo=function(e,t){return Q.current.useMemo(e,t)};S.useReducer=function(e,t,n){return Q.current.useReducer(e,t,n)};S.useRef=function(e){return Q.current.useRef(e)};S.useState=function(e){return Q.current.useState(e)};S.useSyncExternalStore=function(e,t,n){return Q.current.useSyncExternalStore(e,t,n)};S.useTransition=function(){return Q.current.useTransition()};S.version="18.2.0";(function(e){e.exports=S})(Il);const ye=Do(Be),Ym=_l({__proto__:null,default:ye},[Be]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ul=Be,Fl=Symbol.for("react.element"),$l=Symbol.for("react.fragment"),jl=Object.prototype.hasOwnProperty,Vl=Ul.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bl={key:!0,ref:!0,__self:!0,__source:!0};function Fo(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)jl.call(t,r)&&!Bl.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Fl,type:e,key:s,ref:o,props:i,_owner:Vl.current}}Gn.Fragment=$l;Gn.jsx=Fo;Gn.jsxs=Fo;(function(e){e.exports=Gn})(wl);var Kt=e=>e.type==="checkbox",lt=e=>e instanceof Date,X=e=>e==null;const $o=e=>typeof e=="object";var j=e=>!X(e)&&!Array.isArray(e)&&$o(e)&&!lt(e),Hl=e=>j(e)&&e.target?Kt(e.target)?e.target.checked:e.target.value:e,Wl=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ql=(e,t)=>e.has(Wl(t)),Jt=e=>Array.isArray(e)?e.filter(Boolean):[],$=e=>e===void 0,v=(e,t,n)=>{if(!t||!j(e))return n;const r=Jt(t.split(/[,[\].]+?/)).reduce((i,s)=>X(i)?i:i[s],e);return $(r)||r===e?$(e[t])?n:e[t]:r};const Es={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},de={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ye.createContext(null);var zl=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const o=s;return t._proxyFormState[o]!==de.all&&(t._proxyFormState[o]=!r||de.all),n&&(n[o]=!0),e[o]}});return i},ce=e=>j(e)&&!Object.keys(e).length,Gl=(e,t,n)=>{const{name:r,...i}=e;return ce(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!n||de.all))},wr=e=>Array.isArray(e)?e:[e];function Kl(e){const t=ye.useRef(e);t.current=e,ye.useEffect(()=>{const n=!e.disabled&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var _e=e=>typeof e=="string",Jl=(e,t,n,r,i)=>_e(e)?(r&&t.watch.add(e),v(n,e,i)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),v(n,s))):(r&&(t.watchAll=!0),n),Xl=e=>{const t=e.constructor&&e.constructor.prototype;return j(t)&&t.hasOwnProperty("isPrototypeOf")},yi=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ze(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(yi&&(e instanceof Blob||e instanceof FileList))&&(n||j(e)))if(t=n?[]:{},!Array.isArray(e)&&!Xl(e))t=e;else for(const r in e)t[r]=ze(e[r]);else return e;return t}var Yl=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},vi=e=>/^\w*$/.test(e),jo=e=>Jt(e.replace(/["|']|\]/g,"").split(/\.|\[/));function P(e,t,n){let r=-1;const i=vi(t)?[t]:jo(t),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let c=n;if(r!==o){const l=e[a];c=j(l)||Array.isArray(l)?l:isNaN(+i[r+1])?{}:[]}e[a]=c,e=e[a]}return e}const qr=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=v(e,r);if(i){const{_f:s,...o}=i;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else j(o)&&qr(o,t)}}};var Ts=e=>({isOnSubmit:!e||e===de.onSubmit,isOnBlur:e===de.onBlur,isOnChange:e===de.onChange,isOnAll:e===de.all,isOnTouch:e===de.onTouched}),bs=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Ql=(e,t,n)=>{const r=Jt(v(e,n));return P(r,"root",t[n]),P(e,n,r),e},dt=e=>typeof e=="boolean",_i=e=>e.type==="file",ft=e=>typeof e=="function",kn=e=>{if(!yi)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},En=e=>_e(e)||ye.isValidElement(e),wi=e=>e.type==="radio",Rn=e=>e instanceof RegExp;const As={value:!1,isValid:!1},Ss={value:!0,isValid:!0};var Vo=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!$(e[0].attributes.value)?$(e[0].value)||e[0].value===""?Ss:{value:e[0].value,isValid:!0}:Ss:As}return As};const ks={isValid:!1,value:null};var Bo=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,ks):ks;function Rs(e,t,n="validate"){if(En(e)||Array.isArray(e)&&e.every(En)||dt(e)&&!e)return{type:n,message:En(e)?e:"",ref:t}}var ct=e=>j(e)&&!Rn(e)?e:{value:e,message:""},Cs=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:c,minLength:l,min:p,max:w,pattern:E,validate:g,name:C,valueAsNumber:te,mount:Ne,disabled:at}=e._f,A=v(t,C);if(!Ne||at)return{};const J=o?o[0]:s,oe=D=>{r&&J.reportValidity&&(J.setCustomValidity(dt(D)?"":D||""),J.reportValidity())},M={},Te=wi(s),Le=Kt(s),bt=Te||Le,Z=(te||_i(s))&&$(s.value)&&$(A)||kn(s)&&s.value===""||A===""||Array.isArray(A)&&!A.length,be=Yl.bind(null,C,n,M),Ae=(D,k,x,ee=Se.maxLength,ae=Se.minLength)=>{const me=D?k:x;M[C]={type:D?ee:ae,message:me,ref:s,...be(D?ee:ae,me)}};if(i?!Array.isArray(A)||!A.length:a&&(!bt&&(Z||X(A))||dt(A)&&!A||Le&&!Vo(o).isValid||Te&&!Bo(o).isValid)){const{value:D,message:k}=En(a)?{value:!!a,message:a}:ct(a);if(D&&(M[C]={type:Se.required,message:k,ref:J,...be(Se.required,k)},!n))return oe(k),M}if(!Z&&(!X(p)||!X(w))){let D,k;const x=ct(w),ee=ct(p);if(!X(A)&&!isNaN(A)){const ae=s.valueAsNumber||A&&+A;X(x.value)||(D=ae>x.value),X(ee.value)||(k=ae<ee.value)}else{const ae=s.valueAsDate||new Date(A),me=St=>new Date(new Date().toDateString()+" "+St),qe=s.type=="time",At=s.type=="week";_e(x.value)&&A&&(D=qe?me(A)>me(x.value):At?A>x.value:ae>new Date(x.value)),_e(ee.value)&&A&&(k=qe?me(A)<me(ee.value):At?A<ee.value:ae<new Date(ee.value))}if((D||k)&&(Ae(!!D,x.message,ee.message,Se.max,Se.min),!n))return oe(M[C].message),M}if((c||l)&&!Z&&(_e(A)||i&&Array.isArray(A))){const D=ct(c),k=ct(l),x=!X(D.value)&&A.length>D.value,ee=!X(k.value)&&A.length<k.value;if((x||ee)&&(Ae(x,D.message,k.message),!n))return oe(M[C].message),M}if(E&&!Z&&_e(A)){const{value:D,message:k}=ct(E);if(Rn(D)&&!A.match(D)&&(M[C]={type:Se.pattern,message:k,ref:s,...be(Se.pattern,k)},!n))return oe(k),M}if(g){if(ft(g)){const D=await g(A,t),k=Rs(D,J);if(k&&(M[C]={...k,...be(Se.validate,k.message)},!n))return oe(k.message),M}else if(j(g)){let D={};for(const k in g){if(!ce(D)&&!n)break;const x=Rs(await g[k](A,t),J,k);x&&(D={...x,...be(k,x.message)},oe(x.message),n&&(M[C]=D))}if(!ce(D)&&(M[C]={ref:J,...D},!n))return M}}return oe(!0),M};function Zl(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=$(e)?r++:e[t[r++]];return e}function eu(e){for(const t in e)if(!$(e[t]))return!1;return!0}function W(e,t){const n=Array.isArray(t)?t:vi(t)?[t]:jo(t),r=n.length===1?e:Zl(e,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(j(r)&&ce(r)||Array.isArray(r)&&eu(r))&&W(e,n.slice(0,-1)),e}function Ir(){let e=[];return{get observers(){return e},next:i=>{for(const s of e)s.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(s=>s!==i)}}),unsubscribe:()=>{e=[]}}}var Cn=e=>X(e)||!$o(e);function Ke(e,t){if(Cn(e)||Cn(t))return e===t;if(lt(e)&&lt(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const s=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(lt(s)&&lt(o)||j(s)&&j(o)||Array.isArray(s)&&Array.isArray(o)?!Ke(s,o):s!==o)return!1}}return!0}var Ho=e=>e.type==="select-multiple",tu=e=>wi(e)||Kt(e),Er=e=>kn(e)&&e.isConnected,Wo=e=>{for(const t in e)if(ft(e[t]))return!0;return!1};function Dn(e,t={}){const n=Array.isArray(e);if(j(e)||n)for(const r in e)Array.isArray(e[r])||j(e[r])&&!Wo(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Dn(e[r],t[r])):X(e[r])||(t[r]=!0);return t}function qo(e,t,n){const r=Array.isArray(e);if(j(e)||r)for(const i in e)Array.isArray(e[i])||j(e[i])&&!Wo(e[i])?$(t)||Cn(n[i])?n[i]=Array.isArray(e[i])?Dn(e[i],[]):{...Dn(e[i])}:qo(e[i],X(t)?{}:t[i],n[i]):Ke(e[i],t[i])?delete n[i]:n[i]=!0;return n}var Tr=(e,t)=>qo(e,t,Dn(t)),zo=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>$(e)?e:t?e===""?NaN:e&&+e:n&&_e(e)?new Date(e):r?r(e):e;function br(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return _i(t)?t.files:wi(t)?Bo(e.refs).value:Ho(t)?[...t.selectedOptions].map(({value:n})=>n):Kt(t)?Vo(e.refs).value:zo($(t.value)?e.ref.value:t.value,e)}var nu=(e,t,n,r)=>{const i={};for(const s of e){const o=v(t,s);o&&P(i,s,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},kt=e=>$(e)?e:Rn(e)?e.source:j(e)?Rn(e.value)?e.value.source:e.value:e,ru=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ds(e,t,n){const r=v(e,n);if(r||vi(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=v(t,s),a=v(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var iu=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,su=(e,t)=>!Jt(v(e,t)).length&&W(e,t);const ou={mode:de.onSubmit,reValidateMode:de.onChange,shouldFocusError:!0};function au(e={},t){let n={...ou,...e};const r=e.resetOptions&&e.resetOptions.keepDirtyValues;let i={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},s={},o=j(n.defaultValues)?ze(n.defaultValues)||{}:{},a=n.shouldUnregister?{}:ze(o),c={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p,w=0;const E={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={watch:Ir(),array:Ir(),state:Ir()},C=Ts(n.mode),te=Ts(n.reValidateMode),Ne=n.criteriaMode===de.all,at=u=>h=>{clearTimeout(w),w=window.setTimeout(u,h)},A=async()=>{if(E.isValid){const u=n.resolver?ce((await Z()).errors):await Ae(s,!0);u!==i.isValid&&(i.isValid=u,g.state.next({isValid:u}))}},J=u=>E.isValidating&&g.state.next({isValidating:u}),oe=(u,h=[],d,m,_=!0,f=!0)=>{if(m&&d){if(c.action=!0,f&&Array.isArray(v(s,u))){const I=d(v(s,u),m.argA,m.argB);_&&P(s,u,I)}if(f&&Array.isArray(v(i.errors,u))){const I=d(v(i.errors,u),m.argA,m.argB);_&&P(i.errors,u,I),su(i.errors,u)}if(E.touchedFields&&f&&Array.isArray(v(i.touchedFields,u))){const I=d(v(i.touchedFields,u),m.argA,m.argB);_&&P(i.touchedFields,u,I)}E.dirtyFields&&(i.dirtyFields=Tr(o,a)),g.state.next({name:u,isDirty:k(u,h),dirtyFields:i.dirtyFields,errors:i.errors,isValid:i.isValid})}else P(a,u,h)},M=(u,h)=>{P(i.errors,u,h),g.state.next({errors:i.errors})},Te=(u,h,d,m)=>{const _=v(s,u);if(_){const f=v(a,u,$(d)?v(o,u):d);$(f)||m&&m.defaultChecked||h?P(a,u,h?f:br(_._f)):ae(u,f),c.mount&&A()}},Le=(u,h,d,m,_)=>{let f=!1,I=!1;const F={name:u};if(!d||m){E.isDirty&&(I=i.isDirty,i.isDirty=F.isDirty=k(),f=I!==F.isDirty);const L=Ke(v(o,u),h);I=v(i.dirtyFields,u),L?W(i.dirtyFields,u):P(i.dirtyFields,u,!0),F.dirtyFields=i.dirtyFields,f=f||E.dirtyFields&&I!==!L}if(d){const L=v(i.touchedFields,u);L||(P(i.touchedFields,u,d),F.touchedFields=i.touchedFields,f=f||E.touchedFields&&L!==d)}return f&&_&&g.state.next(F),f?F:{}},bt=(u,h,d,m)=>{const _=v(i.errors,u),f=E.isValid&&dt(h)&&i.isValid!==h;if(e.delayError&&d?(p=at(()=>M(u,d)),p(e.delayError)):(clearTimeout(w),p=null,d?P(i.errors,u,d):W(i.errors,u)),(d?!Ke(_,d):_)||!ce(m)||f){const I={...m,...f&&dt(h)?{isValid:h}:{},errors:i.errors,name:u};i={...i,...I},g.state.next(I)}J(!1)},Z=async u=>await n.resolver(a,n.context,nu(u||l.mount,s,n.criteriaMode,n.shouldUseNativeValidation)),be=async u=>{const{errors:h}=await Z();if(u)for(const d of u){const m=v(h,d);m?P(i.errors,d,m):W(i.errors,d)}else i.errors=h;return h},Ae=async(u,h,d={valid:!0})=>{for(const m in u){const _=u[m];if(_){const{_f:f,...I}=_;if(f){const F=l.array.has(f.name),L=await Cs(_,a,Ne,n.shouldUseNativeValidation,F);if(L[f.name]&&(d.valid=!1,h))break;!h&&(v(L,f.name)?F?Ql(i.errors,L,f.name):P(i.errors,f.name,L[f.name]):W(i.errors,f.name))}I&&await Ae(I,h,d)}}return d.valid},D=()=>{for(const u of l.unMount){const h=v(s,u);h&&(h._f.refs?h._f.refs.every(d=>!Er(d)):!Er(h._f.ref))&&gr(u)}l.unMount=new Set},k=(u,h)=>(u&&h&&P(a,u,h),!Ke(hs(),o)),x=(u,h,d)=>Jl(u,l,{...c.mount?a:$(h)?o:_e(u)?{[u]:h}:h},d,h),ee=u=>Jt(v(c.mount?a:o,u,e.shouldUnregister?v(o,u,[]):[])),ae=(u,h,d={})=>{const m=v(s,u);let _=h;if(m){const f=m._f;f&&(!f.disabled&&P(a,u,zo(h,f)),_=kn(f.ref)&&X(h)?"":h,Ho(f.ref)?[...f.ref.options].forEach(I=>I.selected=_.includes(I.value)):f.refs?Kt(f.ref)?f.refs.length>1?f.refs.forEach(I=>(!I.defaultChecked||!I.disabled)&&(I.checked=Array.isArray(_)?!!_.find(F=>F===I.value):_===I.value)):f.refs[0]&&(f.refs[0].checked=!!_):f.refs.forEach(I=>I.checked=I.value===_):_i(f.ref)?f.ref.value="":(f.ref.value=_,f.ref.type||g.watch.next({name:u})))}(d.shouldDirty||d.shouldTouch)&&Le(u,_,d.shouldTouch,d.shouldDirty,!0),d.shouldValidate&&St(u)},me=(u,h,d)=>{for(const m in h){const _=h[m],f=`${u}.${m}`,I=v(s,f);(l.array.has(u)||!Cn(_)||I&&!I._f)&&!lt(_)?me(f,_,d):ae(f,_,d)}},qe=(u,h,d={})=>{const m=v(s,u),_=l.array.has(u),f=ze(h);P(a,u,f),_?(g.array.next({name:u,values:a}),(E.isDirty||E.dirtyFields)&&d.shouldDirty&&(i.dirtyFields=Tr(o,a),g.state.next({name:u,dirtyFields:i.dirtyFields,isDirty:k(u,f)}))):m&&!m._f&&!X(f)?me(u,f,d):ae(u,f,d),bs(u,l)&&g.state.next({}),g.watch.next({name:u}),!c.mount&&t()},At=async u=>{const h=u.target;let d=h.name;const m=v(s,d),_=()=>h.type?br(m._f):Hl(u);if(m){let f,I;const F=_(),L=u.type===Es.BLUR||u.type===Es.FOCUS_OUT,ml=!ru(m._f)&&!n.resolver&&!v(i.errors,d)&&!m._f.deps||iu(L,v(i.touchedFields,d),i.isSubmitted,te,C),yr=bs(d,l,L);P(a,d,F),L?(m._f.onBlur&&m._f.onBlur(u),p&&p(0)):m._f.onChange&&m._f.onChange(u);const vr=Le(d,F,L,!1),yl=!ce(vr)||yr;if(!L&&g.watch.next({name:d,type:u.type}),ml)return E.isValid&&A(),yl&&g.state.next({name:d,...yr?{}:vr});if(!L&&yr&&g.state.next({}),J(!0),n.resolver){const{errors:ms}=await Z([d]),vl=Ds(i.errors,s,d),ys=Ds(ms,s,vl.name||d);f=ys.error,d=ys.name,I=ce(ms)}else f=(await Cs(m,a,Ne,n.shouldUseNativeValidation))[d],f?I=!1:E.isValid&&(I=await Ae(s,!0));m._f.deps&&St(m._f.deps),bt(d,I,f,vr)}},St=async(u,h={})=>{let d,m;const _=wr(u);if(J(!0),n.resolver){const f=await be($(u)?u:_);d=ce(f),m=u?!_.some(I=>v(f,I)):d}else u?(m=(await Promise.all(_.map(async f=>{const I=v(s,f);return await Ae(I&&I._f?{[f]:I}:I)}))).every(Boolean),!(!m&&!i.isValid)&&A()):m=d=await Ae(s);return g.state.next({...!_e(u)||E.isValid&&d!==i.isValid?{}:{name:u},...n.resolver||!u?{isValid:d}:{},errors:i.errors,isValidating:!1}),h.shouldFocus&&!m&&qr(s,f=>f&&v(i.errors,f),u?_:l.mount),m},hs=u=>{const h={...o,...c.mount?a:{}};return $(u)?h:_e(u)?v(h,u):u.map(d=>v(h,d))},ds=(u,h)=>({invalid:!!v((h||i).errors,u),isDirty:!!v((h||i).dirtyFields,u),isTouched:!!v((h||i).touchedFields,u),error:v((h||i).errors,u)}),ul=u=>{u?wr(u).forEach(h=>W(i.errors,h)):i.errors={},g.state.next({errors:i.errors})},hl=(u,h,d)=>{const m=(v(s,u,{_f:{}})._f||{}).ref;P(i.errors,u,{...h,ref:m}),g.state.next({name:u,errors:i.errors,isValid:!1}),d&&d.shouldFocus&&m&&m.focus&&m.focus()},dl=(u,h)=>ft(u)?g.watch.subscribe({next:d=>u(x(void 0,h),d)}):x(u,h,!0),gr=(u,h={})=>{for(const d of u?wr(u):l.mount)l.mount.delete(d),l.array.delete(d),v(s,d)&&(h.keepValue||(W(s,d),W(a,d)),!h.keepError&&W(i.errors,d),!h.keepDirty&&W(i.dirtyFields,d),!h.keepTouched&&W(i.touchedFields,d),!n.shouldUnregister&&!h.keepDefaultValue&&W(o,d));g.watch.next({}),g.state.next({...i,...h.keepDirty?{isDirty:k()}:{}}),!h.keepIsValid&&A()},mr=(u,h={})=>{let d=v(s,u);const m=dt(h.disabled);return P(s,u,{...d||{},_f:{...d&&d._f?d._f:{ref:{name:u}},name:u,mount:!0,...h}}),l.mount.add(u),d?m&&P(a,u,h.disabled?void 0:v(a,u,br(d._f))):Te(u,!0,h.value),{...m?{disabled:h.disabled}:{},...n.shouldUseNativeValidation?{required:!!h.required,min:kt(h.min),max:kt(h.max),minLength:kt(h.minLength),maxLength:kt(h.maxLength),pattern:kt(h.pattern)}:{},name:u,onChange:At,onBlur:At,ref:_=>{if(_){mr(u,h),d=v(s,u);const f=$(_.value)&&_.querySelectorAll&&_.querySelectorAll("input,select,textarea")[0]||_,I=tu(f),F=d._f.refs||[];if(I?F.find(L=>L===f):f===d._f.ref)return;P(s,u,{_f:{...d._f,...I?{refs:[...F.filter(Er),f,...Array.isArray(v(o,u))?[{}]:[]],ref:{type:f.type,name:u}}:{ref:f}}}),Te(u,!1,void 0,f)}else d=v(s,u,{}),d._f&&(d._f.mount=!1),(n.shouldUnregister||h.shouldUnregister)&&!(ql(l.array,u)&&c.action)&&l.unMount.add(u)}}},fs=()=>n.shouldFocusError&&qr(s,u=>u&&v(i.errors,u),l.mount),fl=(u,h)=>async d=>{d&&(d.preventDefault&&d.preventDefault(),d.persist&&d.persist());let m=ze(a);if(g.state.next({isSubmitting:!0}),n.resolver){const{errors:_,values:f}=await Z();i.errors=_,m=f}else await Ae(s);ce(i.errors)?(g.state.next({errors:{}}),await u(m,d)):(h&&await h({...i.errors},d),fs()),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ce(i.errors),submitCount:i.submitCount+1,errors:i.errors})},pl=(u,h={})=>{v(s,u)&&($(h.defaultValue)?qe(u,v(o,u)):(qe(u,h.defaultValue),P(o,u,h.defaultValue)),h.keepTouched||W(i.touchedFields,u),h.keepDirty||(W(i.dirtyFields,u),i.isDirty=h.defaultValue?k(u,v(o,u)):k()),h.keepError||(W(i.errors,u),E.isValid&&A()),g.state.next({...i}))},ps=(u,h={})=>{const d=u||o,m=ze(d),_=u&&!ce(u)?m:o;if(h.keepDefaultValues||(o=d),!h.keepValues){if(h.keepDirtyValues||r)for(const f of l.mount)v(i.dirtyFields,f)?P(_,f,v(a,f)):qe(f,v(_,f));else{if(yi&&$(u))for(const f of l.mount){const I=v(s,f);if(I&&I._f){const F=Array.isArray(I._f.refs)?I._f.refs[0]:I._f.ref;if(kn(F)){const L=F.closest("form");if(L){L.reset();break}}}}s={}}a=e.shouldUnregister?h.keepDefaultValues?ze(o):{}:m,g.array.next({values:_}),g.watch.next({values:_})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!c.mount&&t(),c.mount=!E.isValid||!!h.keepIsValid,c.watch=!!e.shouldUnregister,g.state.next({submitCount:h.keepSubmitCount?i.submitCount:0,isDirty:h.keepDirty||h.keepDirtyValues?i.isDirty:!!(h.keepDefaultValues&&!Ke(u,o)),isSubmitted:h.keepIsSubmitted?i.isSubmitted:!1,dirtyFields:h.keepDirty||h.keepDirtyValues?i.dirtyFields:h.keepDefaultValues&&u?Tr(o,u):{},touchedFields:h.keepTouched?i.touchedFields:{},errors:h.keepErrors?i.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},gs=(u,h)=>ps(ft(u)?u(a):u,h),gl=(u,h={})=>{const d=v(s,u),m=d&&d._f;if(m){const _=m.refs?m.refs[0]:m.ref;_.focus&&(_.focus(),h.shouldSelect&&_.select())}};return ft(n.defaultValues)&&n.defaultValues().then(u=>{gs(u,n.resetOptions),g.state.next({isLoading:!1})}),{control:{register:mr,unregister:gr,getFieldState:ds,_executeSchema:Z,_focusError:fs,_getWatch:x,_getDirty:k,_updateValid:A,_removeUnmounted:D,_updateFieldArray:oe,_getFieldArray:ee,_reset:ps,_subjects:g,_proxyFormState:E,get _fields(){return s},get _formValues(){return a},get _stateFlags(){return c},set _stateFlags(u){c=u},get _defaultValues(){return o},get _names(){return l},set _names(u){l=u},get _formState(){return i},set _formState(u){i=u},get _options(){return n},set _options(u){n={...n,...u}}},trigger:St,register:mr,handleSubmit:fl,watch:dl,setValue:qe,getValues:hs,reset:gs,resetField:pl,clearErrors:ul,unregister:gr,setError:hl,setFocus:gl,getFieldState:ds}}function cu(e={}){const t=ye.useRef(),[n,r]=ye.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ft(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...au(e,()=>r(s=>({...s}))),formState:n});const i=t.current.control;return i._options=e,Kl({subject:i._subjects.state,next:s=>{Gl(s,i._proxyFormState,!0)&&(i._formState={...i._formState,...s},r({...i._formState}))}}),ye.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),ye.useEffect(()=>{e.values&&!Ke(e.values,i._defaultValues)&&i._reset(e.values,i._options.resetOptions)},[e.values,i]),ye.useEffect(()=>{n.submitCount&&i._focusError()},[i,n.submitCount]),t.current.formState=zl(n,i),t.current}const Os=e=>{let t;const n=new Set,r=(c,l)=>{const p=typeof c=="function"?c(t):c;if(!Object.is(p,t)){const w=t;t=l??typeof p!="object"?p:Object.assign({},t,p),n.forEach(E=>E(t,w))}},i=()=>t,a={setState:r,getState:i,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] The destroy method will be unsupported in the future version. You should use unsubscribe function returned by subscribe. Everything will be garbage collected if store is garbage collected."),n.clear()}};return t=e(r,i,a),a},lu=e=>e?Os(e):Os;var zr={},uu={get exports(){return zr},set exports(e){zr=e}},Go={},Gr={},hu={get exports(){return Gr},set exports(e){Gr=e}},Ko={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yt=Be;function du(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fu=typeof Object.is=="function"?Object.is:du,pu=yt.useState,gu=yt.useEffect,mu=yt.useLayoutEffect,yu=yt.useDebugValue;function vu(e,t){var n=t(),r=pu({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return mu(function(){i.value=n,i.getSnapshot=t,Ar(i)&&s({inst:i})},[e,n,t]),gu(function(){return Ar(i)&&s({inst:i}),e(function(){Ar(i)&&s({inst:i})})},[e]),yu(n),n}function Ar(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fu(e,n)}catch{return!0}}function _u(e,t){return t()}var wu=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_u:vu;Ko.useSyncExternalStore=yt.useSyncExternalStore!==void 0?yt.useSyncExternalStore:wu;(function(e){e.exports=Ko})(hu);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Be,Iu=Gr;function Eu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tu=typeof Object.is=="function"?Object.is:Eu,bu=Iu.useSyncExternalStore,Au=Kn.useRef,Su=Kn.useEffect,ku=Kn.useMemo,Ru=Kn.useDebugValue;Go.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=Au(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=ku(function(){function c(g){if(!l){if(l=!0,p=g,g=r(g),i!==void 0&&o.hasValue){var C=o.value;if(i(C,g))return w=C}return w=g}if(C=w,Tu(p,g))return C;var te=r(g);return i!==void 0&&i(C,te)?C:(p=g,w=te)}var l=!1,p,w,E=n===void 0?null:n;return[function(){return c(t())},E===null?void 0:function(){return c(E())}]},[t,n,r,i]);var a=bu(e,s[0],s[1]);return Su(function(){o.hasValue=!0,o.value=a},[a]),Ru(a),a};(function(e){e.exports=Go})(uu);const Cu=Do(zr),{useSyncExternalStoreWithSelector:Du}=Cu;function Ou(e,t=e.getState,n){const r=Du(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return Be.useDebugValue(r),r}const Ps=e=>{({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&typeof e!="function"&&console.warn('[DEPRECATED] Passing a vanilla store will be unsupported in the future version. Please use `import { useStore } from "zustand"` to use the vanilla store in React.');const t=typeof e=="function"?lu(e):e,n=(r,i)=>Ou(t,r,i);return Object.assign(n,t),n},Pu=e=>e?Ps(e):Ps;/**
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
 *//**
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
 */const Jo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Nu=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Xo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,p=s>>2,w=(s&3)<<4|a>>4;let E=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(E=64)),r.push(n[p],n[w],n[E],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Jo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Nu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const w=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||w==null)throw Error();const E=s<<2|a>>4;if(r.push(E),l!==64){const g=a<<4&240|l>>2;if(r.push(g),w!==64){const C=l<<6&192|w;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Lu=function(e){const t=Jo(e);return Xo.encodeByteArray(t,!0)},On=function(e){return Lu(e).replace(/\./g,"")},Yo=function(e){try{return Xo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function Qo(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function xu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uu(){const e=K();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Zo(){try{return typeof indexedDB=="object"}catch{return!1}}function ea(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Fu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function $u(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ju=()=>$u().__FIREBASE_DEFAULTS__,Vu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Bu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Yo(e[1]);return t&&JSON.parse(t)},Ii=()=>{try{return ju()||Vu()||Bu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ta=e=>{var t,n;return(n=(t=Ii())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Hu=e=>{const t=ta(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Wu=()=>{var e;return(e=Ii())===null||e===void 0?void 0:e.config},na=e=>{var t;return(t=Ii())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class qu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function zu(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[On(JSON.stringify(n)),On(JSON.stringify(o)),a].join(".")}/**
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
 */const Gu="FirebaseError";class ge extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Gu,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,st.prototype.create)}}class st{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Ku(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ge(i,a,r)}}function Ku(e,t){return e.replace(Ju,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ju=/\{\$([^}]+)}/g;function Xu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function xt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Ns(s)&&Ns(o)){if(!xt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ns(e){return e!==null&&typeof e=="object"}/**
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
 */function Xt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ct(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Dt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Yu(e,t){const n=new Qu(e,t);return n.subscribe.bind(n)}class Qu{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zu(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Sr),i.error===void 0&&(i.error=Sr),i.complete===void 0&&(i.complete=Sr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zu(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Sr(){}/**
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
 */const eh=1e3,th=2,nh=4*60*60*1e3,rh=.5;function Ls(e,t=eh,n=th){const r=t*Math.pow(n,e),i=Math.round(rh*r*(Math.random()-.5)*2);return Math.min(nh,r+i)}/**
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
 */function Pe(e){return e&&e._delegate?e._delegate:e}class fe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ge="[DEFAULT]";/**
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
 */class ih{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new qu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(oh(t))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ge){return this.instances.has(t)}getOptions(t=Ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ge){return this.component?this.component.multipleInstances?t:Ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sh(e){return e===Ge?void 0:e}function oh(e){return e.instantiationMode==="EAGER"}/**
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
 */class ah{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ih(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(O||(O={}));const ch={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},lh=O.INFO,uh={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},hh=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=uh[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Jn{constructor(t){this.name=t,this._logLevel=lh,this._logHandler=hh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in O))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ch[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...t),this._logHandler(this,O.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...t),this._logHandler(this,O.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,O.INFO,...t),this._logHandler(this,O.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,O.WARN,...t),this._logHandler(this,O.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...t),this._logHandler(this,O.ERROR,...t)}}const dh=(e,t)=>t.some(n=>e instanceof n);let Ms,xs;function fh(){return Ms||(Ms=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ph(){return xs||(xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ra=new WeakMap,Kr=new WeakMap,ia=new WeakMap,kr=new WeakMap,Ei=new WeakMap;function gh(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(je(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ra.set(n,e)}).catch(()=>{}),Ei.set(t,e),t}function mh(e){if(Kr.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Kr.set(e,t)}let Jr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Kr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ia.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return je(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function yh(e){Jr=e(Jr)}function vh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Rr(this),t,...n);return ia.set(r,t.sort?t.sort():[t]),je(r)}:ph().includes(e)?function(...t){return e.apply(Rr(this),t),je(ra.get(this))}:function(...t){return je(e.apply(Rr(this),t))}}function _h(e){return typeof e=="function"?vh(e):(e instanceof IDBTransaction&&mh(e),dh(e,fh())?new Proxy(e,Jr):e)}function je(e){if(e instanceof IDBRequest)return gh(e);if(kr.has(e))return kr.get(e);const t=_h(e);return t!==e&&(kr.set(e,t),Ei.set(t,e)),t}const Rr=e=>Ei.get(e);function sa(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=je(o);return r&&o.addEventListener("upgradeneeded",c=>{r(je(o.result),c.oldVersion,c.newVersion,je(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const wh=["get","getKey","getAll","getAllKeys","count"],Ih=["put","add","delete","clear"],Cr=new Map;function Us(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Cr.get(t))return Cr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ih.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wh.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Cr.set(t,s),s}yh(e=>({...e,get:(t,n,r)=>Us(t,n)||e.get(t,n,r),has:(t,n)=>!!Us(t,n)||e.has(t,n)}));/**
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
 */class Eh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Th(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Th(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Xr="@firebase/app",Fs="0.9.0";/**
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
 */const et=new Jn("@firebase/app"),bh="@firebase/app-compat",Ah="@firebase/analytics-compat",Sh="@firebase/analytics",kh="@firebase/app-check-compat",Rh="@firebase/app-check",Ch="@firebase/auth",Dh="@firebase/auth-compat",Oh="@firebase/database",Ph="@firebase/database-compat",Nh="@firebase/functions",Lh="@firebase/functions-compat",Mh="@firebase/installations",xh="@firebase/installations-compat",Uh="@firebase/messaging",Fh="@firebase/messaging-compat",$h="@firebase/performance",jh="@firebase/performance-compat",Vh="@firebase/remote-config",Bh="@firebase/remote-config-compat",Hh="@firebase/storage",Wh="@firebase/storage-compat",qh="@firebase/firestore",zh="@firebase/firestore-compat",Gh="firebase",Kh="9.15.0";/**
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
 */const Yr="[DEFAULT]",Jh={[Xr]:"fire-core",[bh]:"fire-core-compat",[Sh]:"fire-analytics",[Ah]:"fire-analytics-compat",[Rh]:"fire-app-check",[kh]:"fire-app-check-compat",[Ch]:"fire-auth",[Dh]:"fire-auth-compat",[Oh]:"fire-rtdb",[Ph]:"fire-rtdb-compat",[Nh]:"fire-fn",[Lh]:"fire-fn-compat",[Mh]:"fire-iid",[xh]:"fire-iid-compat",[Uh]:"fire-fcm",[Fh]:"fire-fcm-compat",[$h]:"fire-perf",[jh]:"fire-perf-compat",[Vh]:"fire-rc",[Bh]:"fire-rc-compat",[Hh]:"fire-gcs",[Wh]:"fire-gcs-compat",[qh]:"fire-fst",[zh]:"fire-fst-compat","fire-js":"fire-js",[Gh]:"fire-js-all"};/**
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
 */const Pn=new Map,Qr=new Map;function Xh(e,t){try{e.container.addComponent(t)}catch(n){et.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ee(e){const t=e.name;if(Qr.has(t))return et.debug(`There were multiple attempts to register component ${t}.`),!1;Qr.set(t,e);for(const n of Pn.values())Xh(n,e);return!0}function ot(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Yh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ve=new st("app","Firebase",Yh);/**
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
 */class Qh{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
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
 */const Yt=Kh;function oa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Yr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ve.create("bad-app-name",{appName:String(i)});if(n||(n=Wu()),!n)throw Ve.create("no-options");const s=Pn.get(i);if(s){if(xt(n,s.options)&&xt(r,s.config))return s;throw Ve.create("duplicate-app",{appName:i})}const o=new ah(i);for(const c of Qr.values())o.addComponent(c);const a=new Qh(n,r,o);return Pn.set(i,a),a}function Ti(e=Yr){const t=Pn.get(e);if(!t&&e===Yr)return oa();if(!t)throw Ve.create("no-app",{appName:e});return t}function le(e,t,n){var r;let i=(r=Jh[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),et.warn(a.join(" "));return}Ee(new fe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Zh="firebase-heartbeat-database",ed=1,Ut="firebase-heartbeat-store";let Dr=null;function aa(){return Dr||(Dr=sa(Zh,ed,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ut)}}}).catch(e=>{throw Ve.create("idb-open",{originalErrorMessage:e.message})})),Dr}async function td(e){try{return(await aa()).transaction(Ut).objectStore(Ut).get(ca(e))}catch(t){if(t instanceof ge)et.warn(t.message);else{const n=Ve.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});et.warn(n.message)}}}async function $s(e,t){try{const r=(await aa()).transaction(Ut,"readwrite");return await r.objectStore(Ut).put(t,ca(e)),r.done}catch(n){if(n instanceof ge)et.warn(n.message);else{const r=Ve.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});et.warn(r.message)}}}function ca(e){return`${e.name}!${e.options.appId}`}/**
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
 */const nd=1024,rd=30*24*60*60*1e3;class id{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new od(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=js();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=rd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=js(),{heartbeatsToSend:n,unsentEntries:r}=sd(this._heartbeatsCache.heartbeats),i=On(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function js(){return new Date().toISOString().substring(0,10)}function sd(e,t=nd){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vs(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vs(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class od{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zo()?ea().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await td(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $s(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $s(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Vs(e){return On(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ad(e){Ee(new fe("platform-logger",t=>new Eh(t),"PRIVATE")),Ee(new fe("heartbeat",t=>new id(t),"PRIVATE")),le(Xr,Fs,e),le(Xr,Fs,"esm2017"),le("fire-js","")}ad("");var cd="firebase",ld="9.15.0";/**
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
 */le(cd,ld,"app");const la="@firebase/installations",bi="0.6.0";/**
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
 */const ua=1e4,ha=`w:${bi}`,da="FIS_v2",ud="https://firebaseinstallations.googleapis.com/v1",hd=60*60*1e3,dd="installations",fd="Installations";/**
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
 */const pd={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},tt=new st(dd,fd,pd);function fa(e){return e instanceof ge&&e.code.includes("request-failed")}/**
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
 */function pa({projectId:e}){return`${ud}/projects/${e}/installations`}function ga(e){return{token:e.token,requestStatus:2,expiresIn:md(e.expiresIn),creationTime:Date.now()}}async function ma(e,t){const r=(await t.json()).error;return tt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ya({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function gd(e,{refreshToken:t}){const n=ya(e);return n.append("Authorization",yd(t)),n}async function va(e){const t=await e();return t.status>=500&&t.status<600?e():t}function md(e){return Number(e.replace("s","000"))}function yd(e){return`${da} ${e}`}/**
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
 */async function vd({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=pa(e),i=ya(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:da,appId:e.appId,sdkVersion:ha},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await va(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ga(l.authToken)}}else throw await ma("Create Installation",c)}/**
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
 */function _a(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function _d(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wd=/^[cdef][\w-]{21}$/,Zr="";function Id(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Ed(e);return wd.test(n)?n:Zr}catch{return Zr}}function Ed(e){return _d(e).substr(0,22)}/**
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
 */function Xn(e){return`${e.appName}!${e.appId}`}/**
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
 */const wa=new Map;function Ia(e,t){const n=Xn(e);Ea(n,t),Td(n,t)}function Ea(e,t){const n=wa.get(e);if(n)for(const r of n)r(t)}function Td(e,t){const n=bd();n&&n.postMessage({key:e,fid:t}),Ad()}let Je=null;function bd(){return!Je&&"BroadcastChannel"in self&&(Je=new BroadcastChannel("[Firebase] FID Change"),Je.onmessage=e=>{Ea(e.data.key,e.data.fid)}),Je}function Ad(){wa.size===0&&Je&&(Je.close(),Je=null)}/**
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
 */const Sd="firebase-installations-database",kd=1,nt="firebase-installations-store";let Or=null;function Ai(){return Or||(Or=sa(Sd,kd,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(nt)}}})),Or}async function Nn(e,t){const n=Xn(e),i=(await Ai()).transaction(nt,"readwrite"),s=i.objectStore(nt),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Ia(e,t.fid),t}async function Ta(e){const t=Xn(e),r=(await Ai()).transaction(nt,"readwrite");await r.objectStore(nt).delete(t),await r.done}async function Yn(e,t){const n=Xn(e),i=(await Ai()).transaction(nt,"readwrite"),s=i.objectStore(nt),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Ia(e,a.fid),a}/**
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
 */async function Si(e){let t;const n=await Yn(e.appConfig,r=>{const i=Rd(r),s=Cd(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Zr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Rd(e){const t=e||{fid:Id(),registrationStatus:0};return ba(t)}function Cd(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(tt.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Dd(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Od(e)}:{installationEntry:t}}async function Dd(e,t){try{const n=await vd(e,t);return Nn(e.appConfig,n)}catch(n){throw fa(n)&&n.customData.serverCode===409?await Ta(e.appConfig):await Nn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Od(e){let t=await Bs(e.appConfig);for(;t.registrationStatus===1;)await _a(100),t=await Bs(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Si(e);return r||n}return t}function Bs(e){return Yn(e,t=>{if(!t)throw tt.create("installation-not-found");return ba(t)})}function ba(e){return Pd(e)?{fid:e.fid,registrationStatus:0}:e}function Pd(e){return e.registrationStatus===1&&e.registrationTime+ua<Date.now()}/**
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
 */async function Nd({appConfig:e,heartbeatServiceProvider:t},n){const r=Ld(e,n),i=gd(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:ha,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await va(()=>fetch(r,a));if(c.ok){const l=await c.json();return ga(l)}else throw await ma("Generate Auth Token",c)}function Ld(e,{fid:t}){return`${pa(e)}/${t}/authTokens:generate`}/**
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
 */async function ki(e,t=!1){let n;const r=await Yn(e.appConfig,s=>{if(!Aa(s))throw tt.create("not-registered");const o=s.authToken;if(!t&&Ud(o))return s;if(o.requestStatus===1)return n=Md(e,t),s;{if(!navigator.onLine)throw tt.create("app-offline");const a=$d(s);return n=xd(e,a),a}});return n?await n:r.authToken}async function Md(e,t){let n=await Hs(e.appConfig);for(;n.authToken.requestStatus===1;)await _a(100),n=await Hs(e.appConfig);const r=n.authToken;return r.requestStatus===0?ki(e,t):r}function Hs(e){return Yn(e,t=>{if(!Aa(t))throw tt.create("not-registered");const n=t.authToken;return jd(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function xd(e,t){try{const n=await Nd(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Nn(e.appConfig,r),n}catch(n){if(fa(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ta(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Nn(e.appConfig,r)}throw n}}function Aa(e){return e!==void 0&&e.registrationStatus===2}function Ud(e){return e.requestStatus===2&&!Fd(e)}function Fd(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+hd}function $d(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function jd(e){return e.requestStatus===1&&e.requestTime+ua<Date.now()}/**
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
 */async function Vd(e){const t=e,{installationEntry:n,registrationPromise:r}=await Si(t);return r?r.catch(console.error):ki(t).catch(console.error),n.fid}/**
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
 */async function Bd(e,t=!1){const n=e;return await Hd(n),(await ki(n,t)).token}async function Hd(e){const{registrationPromise:t}=await Si(e);t&&await t}/**
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
 */function Wd(e){if(!e||!e.options)throw Pr("App Configuration");if(!e.name)throw Pr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Pr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Pr(e){return tt.create("missing-app-config-values",{valueName:e})}/**
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
 */const Sa="installations",qd="installations-internal",zd=e=>{const t=e.getProvider("app").getImmediate(),n=Wd(t),r=ot(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Gd=e=>{const t=e.getProvider("app").getImmediate(),n=ot(t,Sa).getImmediate();return{getId:()=>Vd(n),getToken:i=>Bd(n,i)}};function Kd(){Ee(new fe(Sa,zd,"PUBLIC")),Ee(new fe(qd,Gd,"PRIVATE"))}Kd();le(la,bi);le(la,bi,"esm2017");/**
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
 */const Ln="analytics",Jd="firebase_id",Xd="origin",Yd=60*1e3,Qd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ka="https://www.googletagmanager.com/gtag/js";/**
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
 */const re=new Jn("@firebase/analytics");/**
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
 */function Ra(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Zd(e,t){const n=document.createElement("script");n.src=`${ka}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function ef(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function tf(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const c=(await Ra(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(a){re.error(a)}e("config",i,s)}async function nf(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ra(n);for(const c of o){const l=a.find(w=>w.measurementId===c),p=l&&t[l.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){re.error(s)}}function rf(e,t,n,r){async function i(s,o,a){try{s==="event"?await nf(e,t,n,o,a):s==="config"?await tf(e,t,n,r,o,a):s==="consent"?e("consent","update",a):e("set",o)}catch(c){re.error(c)}}return i}function sf(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=rf(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function of(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ka)&&n.src.includes(e))return n;return null}/**
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
 */const af={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ue=new st("analytics","Analytics",af);/**
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
 */const cf=30,lf=1e3;class uf{constructor(t={},n=lf){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ca=new uf;function hf(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function df(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:hf(r)},s=Qd.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ue.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function ff(e,t=Ca,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ue.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ue.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new mf;return setTimeout(async()=>{a.abort()},n!==void 0?n:Yd),Da({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Da(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Ca){var s;const{appId:o,measurementId:a}=e;try{await pf(r,t)}catch(c){if(a)return re.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await df(e);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!gf(l)){if(i.deleteThrottleMetadata(o),a)return re.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const p=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ls(n,i.intervalMillis,cf):Ls(n,i.intervalMillis),w={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(o,w),re.debug(`Calling attemptFetch again in ${p} millis`),Da(e,w,r,i)}}function pf(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(ue.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function gf(e){if(!(e instanceof ge)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class mf{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function yf(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function vf(){if(Zo())try{await ea()}catch(e){return re.warn(ue.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return re.warn(ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _f(e,t,n,r,i,s,o){var a;const c=ff(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&re.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>re.error(g)),t.push(c);const l=vf().then(g=>{if(g)return r.getId()}),[p,w]=await Promise.all([c,l]);of(s)||Zd(s,p.measurementId),i("js",new Date);const E=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return E[Xd]="firebase",E.update=!0,w!=null&&(E[Jd]=w),i("config",p.measurementId,E),p.measurementId}/**
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
 */class wf{constructor(t){this.app=t}_delete(){return delete Nt[this.app.options.appId],Promise.resolve()}}let Nt={},Ws=[];const qs={};let Nr="dataLayer",If="gtag",zs,Oa,Gs=!1;function Ef(){const e=[];if(Qo()&&e.push("This is a browser extension environment."),Fu()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ue.create("invalid-analytics-context",{errorInfo:t});re.warn(n.message)}}function Tf(e,t,n){Ef();const r=e.options.appId;if(!r)throw ue.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)re.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ue.create("no-api-key");if(Nt[r]!=null)throw ue.create("already-exists",{id:r});if(!Gs){ef(Nr);const{wrappedGtag:s,gtagCore:o}=sf(Nt,Ws,qs,Nr,If);Oa=s,zs=o,Gs=!0}return Nt[r]=_f(e,Ws,qs,t,zs,Nr,n),new wf(e)}function bf(e=Ti()){e=Pe(e);const t=ot(e,Ln);return t.isInitialized()?t.getImmediate():Af(e)}function Af(e,t={}){const n=ot(e,Ln);if(n.isInitialized()){const i=n.getImmediate();if(xt(t,n.getOptions()))return i;throw ue.create("already-initialized")}return n.initialize({options:t})}function Sf(e,t,n,r){e=Pe(e),yf(Oa,Nt[e.app.options.appId],t,n,r).catch(i=>re.error(i))}const Ks="@firebase/analytics",Js="0.9.0";function kf(){Ee(new fe(Ln,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Tf(r,i,n)},"PUBLIC")),Ee(new fe("analytics-internal",e,"PRIVATE")),le(Ks,Js),le(Ks,Js,"esm2017");function e(t){try{const n=t.getProvider(Ln).getImmediate();return{logEvent:(r,i,s)=>Sf(n,r,i,s)}}catch(n){throw ue.create("interop-component-reg-failed",{reason:n})}}}kf();var Rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Ri=Ri||{},b=Rf||self;function Mn(){}function Qn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Qt(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Cf(e){return Object.prototype.hasOwnProperty.call(e,Lr)&&e[Lr]||(e[Lr]=++Df)}var Lr="closure_uid_"+(1e9*Math.random()>>>0),Df=0;function Of(e,t,n){return e.call.apply(e.bind,arguments)}function Pf(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function z(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?z=Of:z=Pf,z.apply(null,arguments)}function mn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function H(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function He(){this.s=this.s,this.o=this.o}var Nf=0;He.prototype.s=!1;He.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Nf!=0)&&Cf(this)};He.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pa=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ci(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Xs(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Qn(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function G(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var Lf=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{b.addEventListener("test",Mn,t),b.removeEventListener("test",Mn,t)}catch{}return e}();function xn(e){return/^[\s\xa0]*$/.test(e)}var Ys=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Mr(e,t){return e<t?-1:e>t?1:0}function Zn(){var e=b.navigator;return e&&(e=e.userAgent)?e:""}function ve(e){return Zn().indexOf(e)!=-1}function Di(e){return Di[" "](e),e}Di[" "]=Mn;function Mf(e){var t=Ff;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var xf=ve("Opera"),Ft=ve("Trident")||ve("MSIE"),Na=ve("Edge"),ei=Na||Ft,La=ve("Gecko")&&!(Zn().toLowerCase().indexOf("webkit")!=-1&&!ve("Edge"))&&!(ve("Trident")||ve("MSIE"))&&!ve("Edge"),Uf=Zn().toLowerCase().indexOf("webkit")!=-1&&!ve("Edge");function Ma(){var e=b.document;return e?e.documentMode:void 0}var ti;e:{var xr="",Ur=function(){var e=Zn();if(La)return/rv:([^\);]+)(\)|;)/.exec(e);if(Na)return/Edge\/([\d\.]+)/.exec(e);if(Ft)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Uf)return/WebKit\/(\S+)/.exec(e);if(xf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ur&&(xr=Ur?Ur[1]:""),Ft){var Fr=Ma();if(Fr!=null&&Fr>parseFloat(xr)){ti=String(Fr);break e}}ti=xr}var Ff={};function $f(){return Mf(function(){let e=0;const t=Ys(String(ti)).split("."),n=Ys("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=Mr(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Mr(i[2].length==0,s[2].length==0)||Mr(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}b.document&&Ft&&Ma();function $t(e,t){if(G.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(La){e:{try{Di(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:jf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$t.X.h.call(this)}}H($t,G);var jf={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),Vf=0;function Bf(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Vf,this.ba=this.ea=!1}function er(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Oi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function xa(e){const t={};for(const n in e)t[n]=e[n];return t}const Qs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ua(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Qs.length;s++)n=Qs[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function tr(e){this.src=e,this.g={},this.h=0}tr.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ri(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Bf(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};function ni(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Pa(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(er(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ri(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}var Pi="closure_lm_"+(1e6*Math.random()|0),$r={};function Fa(e,t,n,r,i){if(r&&r.once)return ja(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Fa(e,t[s],n,r,i);return null}return n=Mi(n),e&&e[Zt]?e.N(t,n,Qt(r)?!!r.capture:!!r,i):$a(e,t,n,!1,r,i)}function $a(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Qt(i)?!!i.capture:!!i,a=Li(e);if(a||(e[Pi]=a=new tr(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Hf(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Lf||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ba(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Hf(){function e(n){return t.call(e.src,e.listener,n)}const t=Wf;return e}function ja(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ja(e,t[s],n,r,i);return null}return n=Mi(n),e&&e[Zt]?e.O(t,n,Qt(r)?!!r.capture:!!r,i):$a(e,t,n,!0,r,i)}function Va(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Va(e,t[s],n,r,i);else r=Qt(r)?!!r.capture:!!r,n=Mi(n),e&&e[Zt]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ri(s,n,r,i),-1<n&&(er(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Li(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ri(t,n,r,i)),(n=-1<e?t[e]:null)&&Ni(n))}function Ni(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Zt])ni(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ba(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Li(t))?(ni(n,e),n.h==0&&(n.src=null,t[Pi]=null)):er(e)}}}function Ba(e){return e in $r?$r[e]:$r[e]="on"+e}function Wf(e,t){if(e.ba)e=!0;else{t=new $t(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Ni(e),e=n.call(r,t)}return e}function Li(e){return e=e[Pi],e instanceof tr?e:null}var jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mi(e){return typeof e=="function"?e:(e[jr]||(e[jr]=function(t){return e.handleEvent(t)}),e[jr])}function V(){He.call(this),this.i=new tr(this),this.P=this,this.I=null}H(V,He);V.prototype[Zt]=!0;V.prototype.removeEventListener=function(e,t,n,r){Va(this,e,t,n,r)};function B(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new G(t,e);else if(t instanceof G)t.target=t.target||e;else{var i=t;t=new G(r,e),Ua(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=yn(o,r,!0,t)&&i}if(o=t.g=e,i=yn(o,r,!0,t)&&i,i=yn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=yn(o,r,!1,t)&&i}V.prototype.M=function(){if(V.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)er(n[r]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};V.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function yn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ni(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var xi=b.JSON.stringify;function qf(){var e=qa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class zf{constructor(){this.h=this.g=null}add(t,n){const r=Ha.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ha=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Gf,e=>e.reset());class Gf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Kf(e){b.setTimeout(()=>{throw e},0)}function Wa(e,t){ii||Jf(),si||(ii(),si=!0),qa.add(e,t)}var ii;function Jf(){var e=b.Promise.resolve(void 0);ii=function(){e.then(Xf)}}var si=!1,qa=new zf;function Xf(){for(var e;e=qf();){try{e.h.call(e.g)}catch(n){Kf(n)}var t=Ha;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}si=!1}function nr(e,t){V.call(this),this.h=e||1,this.g=t||b,this.j=z(this.lb,this),this.l=Date.now()}H(nr,V);y=nr.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),B(this,"tick"),this.ca&&(Ui(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ui(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}y.M=function(){nr.X.M.call(this),Ui(this),delete this.g};function Fi(e,t,n){if(typeof e=="function")n&&(e=z(e,n));else if(e&&typeof e.handleEvent=="function")e=z(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(e,t||0)}function za(e){e.g=Fi(()=>{e.g=null,e.i&&(e.i=!1,za(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Yf extends He{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:za(this)}M(){super.M(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(e){He.call(this),this.h=e,this.g={}}H(jt,He);var Zs=[];function Ga(e,t,n,r){Array.isArray(n)||(n&&(Zs[0]=n.toString()),n=Zs);for(var i=0;i<n.length;i++){var s=Fa(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ka(e){Oi(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ni(t)},e),e.g={}}jt.prototype.M=function(){jt.X.M.call(this),Ka(this)};jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rr(){this.g=!0}rr.prototype.Aa=function(){this.g=!1};function Qf(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var p=l[0];l=l[1];var w=p.split("_");o=2<=w.length&&w[1]=="type"?o+(p+"="+l+"&"):o+(p+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Zf(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ut(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+tp(e,n)+(r?" "+r:"")})}function ep(e,t){e.info(function(){return"TIMEOUT: "+t})}rr.prototype.info=function(){};function tp(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xi(n)}catch{return t}}var wt={},eo=null;function $i(){return eo=eo||new V}wt.Pa="serverreachability";function Ja(e){G.call(this,wt.Pa,e)}H(Ja,G);function Vt(e){const t=$i();B(t,new Ja(t))}wt.STAT_EVENT="statevent";function Xa(e,t){G.call(this,wt.STAT_EVENT,e),this.stat=t}H(Xa,G);function Y(e){const t=$i();B(t,new Xa(t,e))}wt.Qa="timingevent";function Ya(e,t){G.call(this,wt.Qa,e),this.size=t}H(Ya,G);function en(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){e()},t)}var ji={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},np={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Vi(){}Vi.prototype.h=null;function to(e){return e.h||(e.h=e.i())}function rp(){}var tn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Bi(){G.call(this,"d")}H(Bi,G);function Hi(){G.call(this,"c")}H(Hi,G);var oi;function ir(){}H(ir,Vi);ir.prototype.g=function(){return new XMLHttpRequest};ir.prototype.i=function(){return{}};oi=new ir;function nn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new jt(this),this.O=ip,e=ei?125:void 0,this.T=new nr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qa}function Qa(){this.i=null,this.g="",this.h=!1}var ip=45e3,ai={},Un={};y=nn.prototype;y.setTimeout=function(e){this.O=e};function ci(e,t,n){e.K=1,e.v=or(De(t)),e.s=n,e.P=!0,Za(e,null)}function Za(e,t){e.F=Date.now(),rn(e),e.A=De(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),ac(n.i,"t",r),e.C=0,n=e.l.H,e.h=new Qa,e.g=Rc(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Yf(z(e.La,e,e.g),e.N)),Ga(e.S,e.g,"readystatechange",e.ib),t=e.H?xa(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Vt(),Qf(e.j,e.u,e.A,e.m,e.U,e.s)}y.ib=function(e){e=e.target;const t=this.L;t&&ke(e)==3?t.l():this.La(e)};y.La=function(e){try{if(e==this.g)e:{const p=ke(this.g);var t=this.g.Ea();const w=this.g.aa();if(!(3>p)&&(p!=3||ei||this.g&&(this.h.h||this.g.fa()||so(this.g)))){this.I||p!=4||t==7||(t==8||0>=w?Vt(3):Vt(2)),sr(this);var n=this.g.aa();this.Y=n;t:if(ec(this)){var r=so(this.g);e="";var i=r.length,s=ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xe(this),Lt(this);var o="";break t}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Zf(this.j,this.u,this.A,this.m,this.U,p,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xn(a)){var l=a;break t}}l=null}if(n=l)ut(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,li(this,n);else{this.i=!1,this.o=3,Y(12),Xe(this),Lt(this);break e}}this.P?(tc(this,p,o),ei&&this.i&&p==3&&(Ga(this.S,this.T,"tick",this.hb),this.T.start())):(ut(this.j,this.m,o,null),li(this,o)),p==4&&Xe(this),this.i&&!this.I&&(p==4?bc(this.l,this):(this.i=!1,rn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Y(12)):(this.o=0,Y(13)),Xe(this),Lt(this)}}}catch{}finally{}};function ec(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function tc(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=sp(e,n),i==Un){t==4&&(e.o=4,Y(14),r=!1),ut(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ai){e.o=4,Y(15),ut(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ut(e.j,e.m,i,null),li(e,i);ec(e)&&i!=Un&&i!=ai&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Y(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xi(t),t.K=!0,Y(11))):(ut(e.j,e.m,n,"[Invalid Chunked Response]"),Xe(e),Lt(e))}y.hb=function(){if(this.g){var e=ke(this.g),t=this.g.fa();this.C<t.length&&(sr(this),tc(this,e,t),this.i&&e!=4&&rn(this))}};function sp(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Un:(n=Number(t.substring(n,r)),isNaN(n)?ai:(r+=1,r+n>t.length?Un:(t=t.substr(r,n),e.C=r+n,t)))}y.cancel=function(){this.I=!0,Xe(this)};function rn(e){e.V=Date.now()+e.O,nc(e,e.O)}function nc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=en(z(e.gb,e),t)}function sr(e){e.B&&(b.clearTimeout(e.B),e.B=null)}y.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(ep(this.j,this.A),this.K!=2&&(Vt(),Y(17)),Xe(this),this.o=2,Lt(this)):nc(this,this.V-e)};function Lt(e){e.l.G==0||e.I||bc(e.l,e)}function Xe(e){sr(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ui(e.T),Ka(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function li(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ui(n.h,e))){if(!e.J&&ui(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)jn(n),ur(n);else break e;Ji(n),Y(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=en(z(n.cb,n),6e3));if(1>=uc(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ye(n,11)}else if((e.J||n.g==e)&&jn(n),!xn(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const p=l[3];p!=null&&(n.ma=p,n.j.info("VER="+n.ma));const w=l[4];w!=null&&(n.Ca=w,n.j.info("SVER="+n.Ca));const E=l[5];E!=null&&typeof E=="number"&&0<E&&(r=1.5*E,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const C=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var s=r.h;s.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wi(s,s.h),s.h=null))}if(r.D){const te=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;te&&(r.za=te,N(r.F,r.D,te))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=kc(r,r.H?r.ka:null,r.V),o.J){hc(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(sr(a),rn(a)),r.g=o}else Ec(r);0<n.i.length&&hr(n)}else l[0]!="stop"&&l[0]!="close"||Ye(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ye(n,7):Ki(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Vt(4)}catch{}}function op(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Qn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function ap(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Qn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function rc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Qn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=ap(e),r=op(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cp(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qe(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Qe){this.h=t!==void 0?t:e.h,Fn(this,e.j),this.s=e.s,this.g=e.g,$n(this,e.m),this.l=e.l,t=e.i;var n=new Bt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),no(this,n),this.o=e.o}else e&&(n=String(e).match(ic))?(this.h=!!t,Fn(this,n[1]||"",!0),this.s=Ot(n[2]||""),this.g=Ot(n[3]||"",!0),$n(this,n[4]),this.l=Ot(n[5]||"",!0),no(this,n[6]||"",!0),this.o=Ot(n[7]||"")):(this.h=!!t,this.i=new Bt(null,this.h))}Qe.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Pt(t,ro,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Pt(t,ro,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Pt(n,n.charAt(0)=="/"?hp:up,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Pt(n,fp)),e.join("")};function De(e){return new Qe(e)}function Fn(e,t,n){e.j=n?Ot(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $n(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function no(e,t,n){t instanceof Bt?(e.i=t,pp(e.i,e.h)):(n||(t=Pt(t,dp)),e.i=new Bt(t,e.h))}function N(e,t,n){e.i.set(t,n)}function or(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ot(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Pt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,lp),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function lp(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ro=/[#\/\?@]/g,up=/[#\?:]/g,hp=/[#\?]/g,dp=/[#\?@]/g,fp=/#/g;function Bt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function We(e){e.g||(e.g=new Map,e.h=0,e.i&&cp(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Bt.prototype;y.add=function(e,t){We(this),this.i=null,e=It(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function sc(e,t){We(e),t=It(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function oc(e,t){return We(e),t=It(e,t),e.g.has(t)}y.forEach=function(e,t){We(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};y.oa=function(){We(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};y.W=function(e){We(this);let t=[];if(typeof e=="string")oc(this,e)&&(t=t.concat(this.g.get(It(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return We(this),this.i=null,e=It(this,e),oc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function ac(e,t,n){sc(e,t),0<n.length&&(e.i=null,e.g.set(It(e,t),Ci(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function It(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function pp(e,t){t&&!e.j&&(We(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(sc(this,r),ac(this,i,n))},e)),e.j=t}var gp=class{constructor(e,t){this.h=e,this.g=t}};function cc(e){this.l=e||mp,b.PerformanceNavigationTiming?(e=b.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(b.g&&b.g.Ga&&b.g.Ga()&&b.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mp=10;function lc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function uc(e){return e.h?1:e.g?e.g.size:0}function ui(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Wi(e,t){e.g?e.g.add(t):e.h=t}function hc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}cc.prototype.cancel=function(){if(this.i=dc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function dc(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ci(e.i)}function qi(){}qi.prototype.stringify=function(e){return b.JSON.stringify(e,void 0)};qi.prototype.parse=function(e){return b.JSON.parse(e,void 0)};function yp(){this.g=new qi}function vp(e,t,n){const r=n||"";try{rc(e,function(i,s){let o=i;Qt(i)&&(o=xi(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function _p(e,t){const n=new rr;if(b.Image){const r=new Image;r.onload=mn(vn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=mn(vn,n,r,"TestLoadImage: error",!1,t),r.onabort=mn(vn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=mn(vn,n,r,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function vn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ar(e){this.l=e.ac||null,this.j=e.jb||!1}H(ar,Vi);ar.prototype.g=function(){return new cr(this.l,this.j)};ar.prototype.i=function(e){return function(){return e}}({});function cr(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=zi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(cr,V);var zi=0;y=cr.prototype;y.open=function(e,t){if(this.readyState!=zi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ht(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||b).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=zi};y.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ht(this)),this.g&&(this.readyState=3,Ht(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fc(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function fc(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}y.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sn(this):Ht(this),this.readyState==3&&fc(this)}};y.Va=function(e){this.g&&(this.response=this.responseText=e,sn(this))};y.Ua=function(e){this.g&&(this.response=e,sn(this))};y.ga=function(){this.g&&sn(this)};function sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ht(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ht(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var wp=b.JSON.parse;function U(e){V.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pc,this.K=this.L=!1}H(U,V);var pc="",Ip=/^https?$/i,Ep=["POST","PUT"];y=U.prototype;y.Ka=function(e){this.L=e};y.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():oi.g(),this.C=this.u?to(this.u):to(oi),this.g.onreadystatechange=z(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){io(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&e instanceof b.FormData,!(0<=Pa(Ep,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yc(this),0<this.B&&((this.K=Tp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=z(this.qa,this)):this.A=Fi(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){io(this,s)}};function Tp(e){return Ft&&$f()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.qa=function(){typeof Ri<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,B(this,"timeout"),this.abort(8))};function io(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,gc(e),lr(e)}function gc(e){e.D||(e.D=!0,B(e,"complete"),B(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,B(this,"complete"),B(this,"abort"),lr(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lr(this,!0)),U.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?mc(this):this.fb())};y.fb=function(){mc(this)};function mc(e){if(e.h&&typeof Ri<"u"&&(!e.C[1]||ke(e)!=4||e.aa()!=2)){if(e.v&&ke(e)==4)Fi(e.Ha,0,e);else if(B(e,"readystatechange"),ke(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(ic)[1]||null;if(!i&&b.self&&b.self.location){var s=b.self.location.protocol;i=s.substr(0,s.length-1)}r=!Ip.test(i?i.toLowerCase():"")}n=r}if(n)B(e,"complete"),B(e,"success");else{e.m=6;try{var o=2<ke(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",gc(e)}}finally{lr(e)}}}}function lr(e,t){if(e.g){yc(e);const n=e.g,r=e.C[0]?Mn:null;e.g=null,e.C=null,t||B(e,"ready");try{n.onreadystatechange=r}catch{}}}function yc(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(b.clearTimeout(e.A),e.A=null)}function ke(e){return e.g?e.g.readyState:0}y.aa=function(){try{return 2<ke(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),wp(t)}};function so(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case pc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vc(e){let t="";return Oi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Gi(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function Rt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function _c(e){this.Ca=0,this.i=[],this.j=new rr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Rt("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Rt("baseRetryDelayMs",5e3,e),this.bb=Rt("retryDelaySeedMs",1e4,e),this.$a=Rt("forwardChannelMaxRetries",2,e),this.ta=Rt("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new cc(e&&e.concurrentRequestLimit),this.Fa=new yp,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=_c.prototype;y.ma=8;y.G=1;function Ki(e){if(wc(e),e.G==3){var t=e.U++,n=De(e.F);N(n,"SID",e.I),N(n,"RID",t),N(n,"TYPE","terminate"),on(e,n),t=new nn(e,e.j,t,void 0),t.K=2,t.v=or(De(n)),n=!1,b.navigator&&b.navigator.sendBeacon&&(n=b.navigator.sendBeacon(t.v.toString(),"")),!n&&b.Image&&(new Image().src=t.v,n=!0),n||(t.g=Rc(t.l,null),t.g.da(t.v)),t.F=Date.now(),rn(t)}Sc(e)}function ur(e){e.g&&(Xi(e),e.g.cancel(),e.g=null)}function wc(e){ur(e),e.u&&(b.clearTimeout(e.u),e.u=null),jn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&b.clearTimeout(e.m),e.m=null)}function hr(e){lc(e.h)||e.m||(e.m=!0,Wa(e.Ja,e),e.C=0)}function bp(e,t){return uc(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=en(z(e.Ja,e,t),Ac(e,e.C)),e.C++,!0)}y.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new nn(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=xa(s),Ua(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ic(this,i,t),n=De(this.F),N(n,"RID",e),N(n,"CVER",22),this.D&&N(n,"X-HTTP-Session-Id",this.D),on(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(vc(s)))+"&"+t:this.o&&Gi(n,this.o,s)),Wi(this.h,i),this.Ya&&N(n,"TYPE","init"),this.O?(N(n,"$req",t),N(n,"SID","null"),i.Z=!0,ci(i,n,null)):ci(i,n,t),this.G=2}}else this.G==3&&(e?oo(this,e):this.i.length==0||lc(this.h)||oo(this))};function oo(e,t){var n;t?n=t.m:n=e.U++;const r=De(e.F);N(r,"SID",e.I),N(r,"RID",n),N(r,"AID",e.T),on(e,r),e.o&&e.s&&Gi(r,e.o,e.s),n=new nn(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Ic(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Wi(e.h,n),ci(n,r,t)}function on(e,t){e.ia&&Oi(e.ia,function(n,r){N(t,r,n)}),e.l&&rc({},function(n,r){N(t,r,n)})}function Ic(e,t,n){n=Math.min(e.i.length,n);var r=e.l?z(e.l.Ra,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const p=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{vp(p,o,"req"+l+"_")}catch{r&&r(p)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Ec(e){e.g||e.u||(e.Z=1,Wa(e.Ia,e),e.A=0)}function Ji(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=en(z(e.Ia,e),Ac(e,e.A)),e.A++,!0)}y.Ia=function(){if(this.u=null,Tc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=en(z(this.eb,this),e)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Y(10),ur(this),Tc(this))};function Xi(e){e.B!=null&&(b.clearTimeout(e.B),e.B=null)}function Tc(e){e.g=new nn(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=De(e.sa);N(t,"RID","rpc"),N(t,"SID",e.I),N(t,"CI",e.L?"0":"1"),N(t,"AID",e.T),N(t,"TYPE","xmlhttp"),on(e,t),e.o&&e.s&&Gi(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=or(De(t)),n.s=null,n.P=!0,Za(n,e)}y.cb=function(){this.v!=null&&(this.v=null,ur(this),Ji(this),Y(19))};function jn(e){e.v!=null&&(b.clearTimeout(e.v),e.v=null)}function bc(e,t){var n=null;if(e.g==t){jn(e),Xi(e),e.g=null;var r=2}else if(ui(e.h,t))n=t.D,hc(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=$i(),B(r,new Ya(r,n)),hr(e)}else Ec(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&bp(e,t)||r==2&&Ji(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Ye(e,5);break;case 4:Ye(e,10);break;case 3:Ye(e,6);break;default:Ye(e,2)}}}function Ac(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ye(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=z(e.kb,e);n||(n=new Qe("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Fn(n,"https"),or(n)),_p(n.toString(),r)}else Y(2);e.G=0,e.l&&e.l.va(t),Sc(e),wc(e)}y.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Y(2)):(this.j.info("Failed to ping google.com"),Y(1))};function Sc(e){if(e.G=0,e.la=[],e.l){const t=dc(e.h);(t.length!=0||e.i.length!=0)&&(Xs(e.la,t),Xs(e.la,e.i),e.h.i.length=0,Ci(e.i),e.i.length=0),e.l.ua()}}function kc(e,t,n){var r=n instanceof Qe?De(n):new Qe(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),$n(r,r.m);else{var i=b.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Qe(null,void 0);r&&Fn(s,r),t&&(s.g=t),i&&$n(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&N(r,n,t),N(r,"VER",e.ma),on(e,r),r}function Rc(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new U(new ar({jb:!0})):new U(e.ra),t.Ka(e.H),t}function Cc(){}y=Cc.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function he(e,t){V.call(this),this.g=new _c(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!xn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!xn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Et(this)}H(he,V);he.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Y(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=kc(e,null,e.V),hr(e)};he.prototype.close=function(){Ki(this.g)};he.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=xi(e),e=n);t.i.push(new gp(t.ab++,e)),t.G==3&&hr(t)};he.prototype.M=function(){this.g.l=null,delete this.j,Ki(this.g),delete this.g,he.X.M.call(this)};function Dc(e){Bi.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}H(Dc,Bi);function Oc(){Hi.call(this),this.status=1}H(Oc,Hi);function Et(e){this.g=e}H(Et,Cc);Et.prototype.xa=function(){B(this.g,"a")};Et.prototype.wa=function(e){B(this.g,new Dc(e))};Et.prototype.va=function(e){B(this.g,new Oc)};Et.prototype.ua=function(){B(this.g,"b")};he.prototype.send=he.prototype.u;he.prototype.open=he.prototype.m;he.prototype.close=he.prototype.close;ji.NO_ERROR=0;ji.TIMEOUT=8;ji.HTTP_ERROR=6;np.COMPLETE="complete";rp.EventType=tn;tn.OPEN="a";tn.CLOSE="b";tn.ERROR="c";tn.MESSAGE="d";V.prototype.listen=V.prototype.N;U.prototype.listenOnce=U.prototype.O;U.prototype.getLastError=U.prototype.Oa;U.prototype.getLastErrorCode=U.prototype.Ea;U.prototype.getStatus=U.prototype.aa;U.prototype.getResponseJson=U.prototype.Sa;U.prototype.getResponseText=U.prototype.fa;U.prototype.send=U.prototype.da;U.prototype.setWithCredentials=U.prototype.Ka;const ao="@firebase/firestore";/**
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
 */class q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}q.UNAUTHENTICATED=new q(null),q.GOOGLE_CREDENTIALS=new q("google-credentials-uid"),q.FIRST_PARTY=new q("first-party-uid"),q.MOCK_USER=new q("mock-user");/**
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
 */let an="9.15.0";/**
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
 */const vt=new Jn("@firebase/firestore");function ne(e,...t){if(vt.logLevel<=O.DEBUG){const n=t.map(Qi);vt.debug(`Firestore (${an}): ${e}`,...n)}}function Yi(e,...t){if(vt.logLevel<=O.ERROR){const n=t.map(Qi);vt.error(`Firestore (${an}): ${e}`,...n)}}function Ap(e,...t){if(vt.logLevel<=O.WARN){const n=t.map(Qi);vt.warn(`Firestore (${an}): ${e}`,...n)}}function Qi(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function Zi(e="Unexpected state"){const t=`FIRESTORE (${an}) INTERNAL ASSERTION FAILED: `+e;throw Yi(t),new Error(t)}function Vn(e,t){e||Zi()}/**
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
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends ge{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Pc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(q.UNAUTHENTICATED))}shutdown(){}}class kp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rp{constructor(t){this.t=t,this.currentUser=q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Vn(typeof r.accessToken=="string"),new Pc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Vn(t===null||typeof t=="string"),new q(t)}}class Cp{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=q.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Vn(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Dp{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new Cp(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Op{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pp{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=s=>{s.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Vn(typeof n.token=="string"),this.A=n.token,new Op(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Np(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Lp{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Np(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function Nc(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Mp{constructor(t,n,r,i,s,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Bn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Bn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var co,R;(R=co||(co={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";function Vr(){return typeof document<"u"?document:null}class xp{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class es{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new es(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(ie.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Up(e,t){if(Yi("AsyncQueue",`${t}: ${e}`),Nc(e))return new se(ie.UNAVAILABLE,`${t}: ${e}`);throw e}function Fp(e,t,n,r){if(t===!0&&r===!0)throw new se(ie.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function $p(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Zi()}function jp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new se(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$p(e);throw new se(ie.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const lo=new Map;class uo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new se(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new se(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Fp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Lc{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new se(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new se(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sp;switch(n.type){case"gapi":const r=n.client;return new Dp(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new se(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=lo.get(t);n&&(ne("ComponentProvider","Removing Datastore"),lo.delete(t),n.terminate())}(this),Promise.resolve()}}function Vp(e,t,n,r={}){var i;const s=(e=jp(e,Lc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&Ap("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=q.MOCK_USER;else{o=zu(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new se(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new q(c)}e._authCredentials=new kp(new Pc(o,a))}}/**
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
 */class Bp{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=q.UNAUTHENTICATED,this.clientId=Lp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ne("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ne("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new se(ie.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Up(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}class Hp{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new xp(this,"async_queue_retry"),this.Wc=()=>{const n=Vr();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Vr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Vr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new pt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Nc(t))throw t;ne("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Yi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=es.createAndSchedule(this,t,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&Zi()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class Wp extends Lc{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Hp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zp(this),this._firestoreClient.terminate()}}function qp(e,t){const n=typeof e=="object"?e:Ti(),r=typeof e=="string"?e:t||"(default)",i=ot(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Hu("firestore");s&&Vp(i,...s)}return i}function zp(e){var t;const n=e._freezeSettings(),r=function(i,s,o,a){return new Mp(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Bp(e._authCredentials,e._appCheckCredentials,e._queue,r)}(function(e,t=!0){(function(n){an=n})(Yt),Ee(new fe("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Wp(new Rp(n.getProvider("auth-internal")),new Pp(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new se(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bn(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),le(ao,"3.8.0",e),le(ao,"3.8.0","esm2017")})();function ts(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Mc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gp=Mc,xc=new st("auth","Firebase",Mc());/**
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
 */const ho=new Jn("@firebase/auth");function Tn(e,...t){ho.logLevel<=O.ERROR&&ho.error(`Auth (${Yt}): ${e}`,...t)}/**
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
 */function pe(e,...t){throw ns(e,...t)}function we(e,...t){return ns(e,...t)}function Kp(e,t,n){const r=Object.assign(Object.assign({},Gp()),{[t]:n});return new st("auth","Firebase",r).create(t,{appName:e.name})}function ns(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return xc.create(e,...t)}function T(e,t,...n){if(!e)throw ns(t,...n)}function Re(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tn(t),new Error(t)}function Oe(e,t){e||Re(t)}/**
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
 */const fo=new Map;function Ce(e){Oe(e instanceof Function,"Expected a class definition");let t=fo.get(e);return t?(Oe(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,fo.set(e,t),t)}/**
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
 */function Jp(e,t){const n=ot(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xt(s,t??{}))return i;pe(i,"already-initialized")}return n.initialize({options:t})}function Xp(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ce);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function hi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Yp(){return po()==="http:"||po()==="https:"}function po(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Qp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yp()||Qo()||"connection"in navigator)?navigator.onLine:!0}function Zp(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class cn{constructor(t,n){this.shortDelay=t,this.longDelay=n,Oe(n>t,"Short delay should be less than long delay!"),this.isMobile=Mu()||xu()}get(){return Qp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rs(e,t){Oe(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Uc{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Re("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Re("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Re("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const tg=new cn(3e4,6e4);function ln(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function un(e,t,n,r,i={}){return Fc(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xt(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Uc.fetch()($c(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Fc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},eg),t);try{const i=new ng(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _n(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _n(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _n(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw _n(e,"user-disabled",o);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Kp(e,p,l);pe(e,p)}}catch(i){if(i instanceof ge)throw i;pe(e,"network-request-failed")}}async function hn(e,t,n,r,i={}){const s=await un(e,t,n,r,i);return"mfaPendingCredential"in s&&pe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function $c(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?rs(e.config,i):`${e.config.apiScheme}://${i}`}class ng{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(we(this.auth,"network-request-failed")),tg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _n(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=we(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function rg(e,t){return un(e,"POST","/v1/accounts:delete",t)}async function ig(e,t){return un(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Mt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sg(e,t=!1){const n=Pe(e),r=await n.getIdToken(t),i=is(r);T(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mt(Br(i.auth_time)),issuedAtTime:Mt(Br(i.iat)),expirationTime:Mt(Br(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Br(e){return Number(e)*1e3}function is(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Tn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yo(n);return i?JSON.parse(i):(Tn("Failed to decode base64 JWT payload"),null)}catch(i){return Tn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function og(e){const t=is(e);return T(t,"internal-error"),T(typeof t.exp<"u","internal-error"),T(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Wt(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ge&&ag(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ag({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class cg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mt(this.lastLoginAt),this.creationTime=Mt(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hn(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Wt(e,ig(n,{idToken:r}));T(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?hg(s.providerUserInfo):[],a=ug(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),p=c?l:!1,w={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(e,w)}async function lg(e){const t=Pe(e);await Hn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ug(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function hg(e){return e.map(t=>{var{providerId:n}=t,r=ts(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dg(e,t){const n=await Fc(e,{},async()=>{const r=Xt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=$c(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Uc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){T(t.idToken,"internal-error"),T(typeof t.idToken<"u","internal-error"),T(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):og(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return T(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await dg(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qt;return r&&(T(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(T(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(T(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new qt,this.toJSON())}_performRefresh(){return Re("not implemented")}}/**
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
 */function Me(e,t){T(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ze{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=ts(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Wt(this,this.stsTokenManager.getToken(this.auth,t));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return sg(this,t)}reload(){return lg(this)}_assign(t){this!==t&&(T(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Ze(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Hn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Wt(this,rg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,c,l,p;const w=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,te=(a=n.tenantId)!==null&&a!==void 0?a:void 0,Ne=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,at=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:J,emailVerified:oe,isAnonymous:M,providerData:Te,stsTokenManager:Le}=n;T(J&&Le,t,"internal-error");const bt=qt.fromJSON(this.name,Le);T(typeof J=="string",t,"internal-error"),Me(w,t.name),Me(E,t.name),T(typeof oe=="boolean",t,"internal-error"),T(typeof M=="boolean",t,"internal-error"),Me(g,t.name),Me(C,t.name),Me(te,t.name),Me(Ne,t.name),Me(at,t.name),Me(A,t.name);const Z=new Ze({uid:J,auth:t,email:E,emailVerified:oe,displayName:w,isAnonymous:M,photoURL:C,phoneNumber:g,tenantId:te,stsTokenManager:bt,createdAt:at,lastLoginAt:A});return Te&&Array.isArray(Te)&&(Z.providerData=Te.map(be=>Object.assign({},be))),Ne&&(Z._redirectEventId=Ne),Z}static async _fromIdTokenResponse(t,n,r=!1){const i=new qt;i.updateFromServerResponse(n);const s=new Ze({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Hn(s),s}}/**
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
 */class Vc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Vc.type="NONE";const go=Vc;/**
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
 */function bn(e,t,n){return`firebase:${e}:${t}:${n}`}class gt{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bn(this.userKey,i.apiKey,s),this.fullPersistenceKey=bn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ze._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new gt(Ce(go),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ce(go);const o=bn(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const p=await l._get(o);if(p){const w=Ze._fromJSON(t,p);l!==s&&(a=w),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new gt(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new gt(s,t,r))}}/**
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
 */function mo(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Bc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zc(t))return"Blackberry";if(Gc(t))return"Webos";if(ss(t))return"Safari";if((t.includes("chrome/")||Hc(t))&&!t.includes("edge/"))return"Chrome";if(qc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bc(e=K()){return/firefox\//i.test(e)}function ss(e=K()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Hc(e=K()){return/crios\//i.test(e)}function Wc(e=K()){return/iemobile/i.test(e)}function qc(e=K()){return/android/i.test(e)}function zc(e=K()){return/blackberry/i.test(e)}function Gc(e=K()){return/webos/i.test(e)}function dr(e=K()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function fg(e=K()){var t;return dr(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function pg(){return Uu()&&document.documentMode===10}function Kc(e=K()){return dr(e)||qc(e)||Gc(e)||zc(e)||/windows phone/i.test(e)||Wc(e)}function gg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jc(e,t=[]){let n;switch(e){case"Browser":n=mo(K());break;case"Worker":n=`${mo(K())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yt}/${r}`}/**
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
 */class mg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class yg{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yo(this),this.idTokenSubscription=new yo(this),this.beforeStateQueue=new mg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ce(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gt.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Hn(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Zp()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Pe(t):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&T(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ce(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new st("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ce(t)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[Ce(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Jc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function dn(e){return Pe(e)}class yo{constructor(t){this.auth=t,this.observer=null,this.addObserver=Yu(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function vg(e,t,n){const r=dn(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Xc(t),{host:o,port:a}=_g(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||wg()}function Xc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _g(e){const t=Xc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vo(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vo(o)}}}function vo(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function wg(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class os{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Re("not implemented")}_getIdTokenResponse(t){return Re("not implemented")}_linkToIdToken(t,n){return Re("not implemented")}_getReauthenticationResolver(t){return Re("not implemented")}}async function Ig(e,t){return un(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Eg(e,t){return hn(e,"POST","/v1/accounts:signInWithPassword",ln(e,t))}/**
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
 */async function Tg(e,t){return hn(e,"POST","/v1/accounts:signInWithEmailLink",ln(e,t))}async function bg(e,t){return hn(e,"POST","/v1/accounts:signInWithEmailLink",ln(e,t))}/**
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
 */class zt extends os{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new zt(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new zt(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Eg(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tg(t,{email:this._email,oobCode:this._password});default:pe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Ig(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bg(t,{idToken:n,email:this._email,oobCode:this._password});default:pe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function mt(e,t){return hn(e,"POST","/v1/accounts:signInWithIdp",ln(e,t))}/**
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
 */const Ag="http://localhost";class rt extends os{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=ts(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return mt(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,mt(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,mt(t,n)}buildRequest(){const t={requestUri:Ag,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Xt(n)}return t}}/**
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
 */function Sg(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kg(e){const t=Ct(Dt(e)).link,n=t?Ct(Dt(t)).deep_link_id:null,r=Ct(Dt(e)).deep_link_id;return(r?Ct(Dt(r)).link:null)||r||n||t||e}class as{constructor(t){var n,r,i,s,o,a;const c=Ct(Dt(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,p=(r=c.oobCode)!==null&&r!==void 0?r:null,w=Sg((i=c.mode)!==null&&i!==void 0?i:null);T(l&&p&&w,"argument-error"),this.apiKey=l,this.operation=w,this.code=p,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=kg(t);try{return new as(n)}catch{return null}}}/**
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
 */class Tt{constructor(){this.providerId=Tt.PROVIDER_ID}static credential(t,n){return zt._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=as.parseLink(n);return T(r,"argument-error"),zt._fromEmailAndCode(t,r.code,r.tenantId)}}Tt.PROVIDER_ID="password";Tt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Yc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fn extends Yc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class xe extends fn{constructor(){super("facebook.com")}static credential(t){return rt._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xe.credentialFromTaggedObject(t)}static credentialFromError(t){return xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xe.credential(t.oauthAccessToken)}catch{return null}}}xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";xe.PROVIDER_ID="facebook.com";/**
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
 */class Ue extends fn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ue.credentialFromTaggedObject(t)}static credentialFromError(t){return Ue.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ue.credential(n,r)}catch{return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com";Ue.PROVIDER_ID="google.com";/**
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
 */class Fe extends fn{constructor(){super("github.com")}static credential(t){return rt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Fe.credentialFromTaggedObject(t)}static credentialFromError(t){return Fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Fe.credential(t.oauthAccessToken)}catch{return null}}}Fe.GITHUB_SIGN_IN_METHOD="github.com";Fe.PROVIDER_ID="github.com";/**
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
 */class $e extends fn{constructor(){super("twitter.com")}static credential(t,n){return rt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return $e.credentialFromTaggedObject(t)}static credentialFromError(t){return $e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return $e.credential(n,r)}catch{return null}}}$e.TWITTER_SIGN_IN_METHOD="twitter.com";$e.PROVIDER_ID="twitter.com";/**
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
 */async function Rg(e,t){return hn(e,"POST","/v1/accounts:signUp",ln(e,t))}/**
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
 */class it{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Ze._fromIdTokenResponse(t,r,i),o=_o(r);return new it({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=_o(r);return new it({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function _o(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Wn extends ge{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wn.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Wn(t,n,r,i)}}function Qc(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wn._fromErrorAndOperation(e,s,t,r):s})}async function Cg(e,t,n=!1){const r=await Wt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return it._forOperation(e,"link",r)}/**
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
 */async function Dg(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Wt(e,Qc(r,i,t,e),n);T(s.idToken,r,"internal-error");const o=is(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),it._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pe(r,"user-mismatch"),s}}/**
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
 */async function Zc(e,t,n=!1){const r="signIn",i=await Qc(e,r,t),s=await it._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Og(e,t){return Zc(dn(e),t)}async function Pg(e,t,n){const r=dn(e),i=await Rg(r,{returnSecureToken:!0,email:t,password:n}),s=await it._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function wo(e,t,n){return Og(Pe(e),Tt.credential(t,n))}function Ng(e,t,n,r){return Pe(e).onIdTokenChanged(t,n,r)}function Lg(e,t,n){return Pe(e).beforeAuthStateChanged(t,n)}const qn="__sak";/**
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
 */class el{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qn,"1"),this.storage.removeItem(qn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Mg(){const e=K();return ss(e)||dr(e)}const xg=1e3,Ug=10;class tl extends el{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mg()&&gg(),this.fallbackToPolling=Kc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);pg()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Ug):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}tl.type="LOCAL";const Fg=tl;/**
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
 */class nl extends el{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}nl.type="SESSION";const rl=nl;/**
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
 */function $g(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new fr(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await $g(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fr.receivers=[];/**
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
 */function cs(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class jg{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=cs("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(w){const E=w;if(E.data.eventId===l)switch(E.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(E.data.response);break;default:clearTimeout(p),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ie(){return window}function Vg(e){Ie().location.href=e}/**
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
 */function il(){return typeof Ie().WorkerGlobalScope<"u"&&typeof Ie().importScripts=="function"}async function Bg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hg(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Wg(){return il()?self:null}/**
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
 */const sl="firebaseLocalStorageDb",qg=1,zn="firebaseLocalStorage",ol="fbase_key";class pn{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pr(e,t){return e.transaction([zn],t?"readwrite":"readonly").objectStore(zn)}function zg(){const e=indexedDB.deleteDatabase(sl);return new pn(e).toPromise()}function di(){const e=indexedDB.open(sl,qg);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(zn,{keyPath:ol})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(zn)?t(r):(r.close(),await zg(),t(await di()))})})}async function Io(e,t,n){const r=pr(e,!0).put({[ol]:t,value:n});return new pn(r).toPromise()}async function Gg(e,t){const n=pr(e,!1).get(t),r=await new pn(n).toPromise();return r===void 0?null:r.value}function Eo(e,t){const n=pr(e,!0).delete(t);return new pn(n).toPromise()}const Kg=800,Jg=3;class al{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await di(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Jg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return il()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fr._getInstance(Wg()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Bg(),!this.activeServiceWorker)return;this.sender=new jg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Hg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await di();return await Io(t,qn,"1"),await Eo(t,qn),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Io(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Gg(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Eo(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=pr(i,!1).getAll();return new pn(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}al.type="LOCAL";const Xg=al;/**
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
 */function Yg(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Qg(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=we("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Yg().appendChild(r)})}function Zg(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new cn(3e4,6e4);/**
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
 */function em(e,t){return t?Ce(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ls extends os{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return mt(t,this._buildIdpRequest())}_linkToIdToken(t,n){return mt(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return mt(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function tm(e){return Zc(e.auth,new ls(e),e.bypassAuthState)}function nm(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Dg(n,new ls(e),e.bypassAuthState)}async function rm(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Cg(n,new ls(e),e.bypassAuthState)}/**
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
 */class cl{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return tm;case"linkViaPopup":case"linkViaRedirect":return rm;case"reauthViaPopup":case"reauthViaRedirect":return nm;default:pe(this.auth,"internal-error")}}resolve(t){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const im=new cn(2e3,1e4);class ht extends cl{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return T(t,this.auth,"internal-error"),t}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const t=cs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(we(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(we(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(we(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,im.get())};t()}}ht.currentPopupAction=null;/**
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
 */const sm="pendingRedirect",An=new Map;class om extends cl{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=An.get(this.auth._key());if(!t){try{const r=await am(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}An.set(this.auth._key(),t)}return this.bypassAuthState||An.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function am(e,t){const n=um(t),r=lm(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cm(e,t){An.set(e._key(),t)}function lm(e){return Ce(e._redirectPersistence)}function um(e){return bn(sm,e.config.apiKey,e.name)}async function hm(e,t,n=!1){const r=dn(e),i=em(r,t),o=await new om(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const dm=10*60*1e3;class fm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!pm(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ll(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(we(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dm&&this.cachedEventUids.clear(),this.cachedEventUids.has(To(t))}saveEventToCache(t){this.cachedEventUids.add(To(t)),this.lastProcessedEventTime=Date.now()}}function To(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ll({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function pm(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ll(e);default:return!1}}/**
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
 */async function gm(e,t={}){return un(e,"GET","/v1/projects",t)}/**
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
 */const mm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ym=/^https?/;async function vm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await gm(e);for(const n of t)try{if(_m(n))return}catch{}pe(e,"unauthorized-domain")}function _m(e){const t=hi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ym.test(n))return!1;if(mm.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wm=new cn(3e4,6e4);function bo(){const e=Ie().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Im(e){return new Promise((t,n)=>{var r,i,s;function o(){bo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bo(),n(we(e,"network-request-failed"))},timeout:wm.get()})}if(!((i=(r=Ie().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Ie().gapi)===null||s===void 0)&&s.load)o();else{const a=Zg("iframefcb");return Ie()[a]=()=>{gapi.load?o():n(we(e,"network-request-failed"))},Qg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Sn=null,t})}let Sn=null;function Em(e){return Sn=Sn||Im(e),Sn}/**
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
 */const Tm=new cn(5e3,15e3),bm="__/auth/iframe",Am="emulator/auth/iframe",Sm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},km=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rm(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?rs(t,Am):`https://${e.config.authDomain}/${bm}`,r={apiKey:t.apiKey,appName:e.name,v:Yt},i=km.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xt(r).slice(1)}`}async function Cm(e){const t=await Em(e),n=Ie().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:Rm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=we(e,"network-request-failed"),a=Ie().setTimeout(()=>{s(o)},Tm.get());function c(){Ie().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Dm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Om=500,Pm=600,Nm="_blank",Lm="http://localhost";class Ao{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mm(e,t,n,r=Om,i=Pm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Dm),{width:r.toString(),height:i.toString(),top:s,left:o}),l=K().toLowerCase();n&&(a=Hc(l)?Nm:n),Bc(l)&&(t=t||Lm,c.scrollbars="yes");const p=Object.entries(c).reduce((E,[g,C])=>`${E}${g}=${C},`,"");if(fg(l)&&a!=="_self")return xm(t||"",a),new Ao(null);const w=window.open(t||"",a,p);T(w,e,"popup-blocked");try{w.focus()}catch{}return new Ao(w)}function xm(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Um="__/auth/handler",Fm="emulator/auth/handler";function So(e,t,n,r,i,s){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Yt,eventId:i};if(t instanceof Yc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Xu(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(t instanceof fn){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${$m(e)}?${Xt(a).slice(1)}`}function $m({config:e}){return e.emulator?rs(e,Fm):`https://${e.authDomain}/${Um}`}/**
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
 */const Hr="webStorageSupport";class jm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rl,this._completeRedirectFn=hm,this._overrideRedirectResult=cm}async _openPopup(t,n,r,i){var s;Oe((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=So(t,n,r,hi(),i);return Mm(t,o,cs())}async _openRedirect(t,n,r,i){return await this._originValidation(t),Vg(So(t,n,r,hi(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Oe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Cm(t),r=new fm(t);return n.register("authEvent",i=>(T(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Hr,{type:Hr},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hr];o!==void 0&&n(!!o),pe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vm(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kc()||ss()||dr()}}const Vm=jm;var ko="@firebase/auth",Ro="0.21.0";/**
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
 */class Bm{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hm(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Wm(e){Ee(new fe("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{T(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),T(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jc(e)},p=new yg(a,c,l);return Xp(p,n),p})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ee(new fe("auth-internal",t=>{const n=dn(t.getProvider("auth").getImmediate());return(r=>new Bm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),le(ko,Ro,Hm(e)),le(ko,Ro,"esm2017")}/**
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
 */const qm=5*60,zm=na("authIdTokenMaxAge")||qm;let Co=null;const Gm=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zm)return;const i=n==null?void 0:n.token;Co!==i&&(Co=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Km(e=Ti()){const t=ot(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Jp(e,{popupRedirectResolver:Vm,persistence:[Xg,Fg,rl]}),r=na("authTokenSyncURL");if(r){const s=Gm(r);Lg(n,s,()=>s(n.currentUser)),Ng(n,o=>s(o))}const i=ta("auth");return i&&vg(n,`http://${i}`),n}Wm("Browser");const Jm={apiKey:"AIzaSyCo1bJsnUHCcCvSAezSwRQ3cCsQ9k14iUs",authDomain:"exp-911.firebaseapp.com",projectId:"exp-911",storageBucket:"exp-911.appspot.com",messagingSenderId:"767394433739",appId:"1:767394433739:web:2f9272066bc51fa03e294e",measurementId:"G-8V8EKLG511"},us=oa(Jm);bf(us);const Wr=Km(us);qp(us);let Xm=Pu()(e=>({pending:!1,fullfilled:!1,error:null,loginAdmin:async t=>{try{e({pending:!0,error:null,fullfilled:!1});let r=await wo(Wr,t.email,t.password);if(r.user)var n=await(await fetch("/api/admin-login",{method:"POST",body:JSON.stringify(r.user),headers:{"Content-Type":"application/json"}})).json();e({admin:n,user:null,fullfilled:!0,pending:!1})}catch(r){e(i=>({error:r,pending:!1}))}},loginUser:async t=>{try{e({pending:!0,error:null,fullfilled:!1});let n=await wo(Wr,t.email,t.password);e({user:n.user,admin:null,fullfilled:!0,pending:!1})}catch(n){e(r=>({error:n,pending:!1}))}},signupUser:async t=>{try{e({pending:!0,error:null,fullfilled:!1});let n=await Pg(Wr,t.email,t.password);e({user:n.user,fullfilled:!0,pending:!1})}catch(n){e(r=>({error:n,pending:!1}))}},user:null,admin:null}));const Qm=()=>{const{register:e,handleSubmit:t,formState:{errors:n}}=cu();let{loginAdmin:r,loginUser:i,signupUser:s}=Xm(l=>({loginAdmin:l.loginAdmin,signupUser:l.signupUser,loginUser:l.loginUser}));return{register:e,handleSubmit:t,handleAdminLogin:l=>{r({email:l==null?void 0:l.email,password:l==null?void 0:l.password})},handleUserLogin:l=>{i({email:l==null?void 0:l.email,password:l==null?void 0:l.password})},handleUserSignup:l=>{s({email:l==null?void 0:l.email,password:l==null?void 0:l.password})}}};export{Ym as R,Qm as a,ye as b,vs as j,Be as r,Xm as u};
