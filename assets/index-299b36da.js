(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Ma(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Fa(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ne(s)?_g(s):Fa(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ne(t))return t;if(ve(t))return t}}const bg=/;(?![^(]*\))/g,Tg=/:([^]+)/,Cg=/\/\*.*?\*\//gs;function _g(t){const e={};return t.replace(Cg,"").split(bg).forEach(n=>{if(n){const s=n.split(Tg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Pa(t){let e="";if(Ne(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=Pa(t[n]);s&&(e+=s+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dg=Ma(Sg);function uh(t){return!!t||t===""}const po=t=>Ne(t)?t:t==null?"":K(t)||ve(t)&&(t.toString===dh||!Y(t.toString))?JSON.stringify(t,lh,2):String(t),lh=(t,e)=>e&&e.__v_isRef?lh(t,e.value):Xn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:hh(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!K(e)&&!ph(e)?String(e):e,ge={},Jn=[],Et=()=>{},xg=()=>!1,kg=/^on[^a-z]/,Ti=t=>kg.test(t),La=t=>t.startsWith("onUpdate:"),We=Object.assign,Ua=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ng=Object.prototype.hasOwnProperty,ne=(t,e)=>Ng.call(t,e),K=Array.isArray,Xn=t=>Ci(t)==="[object Map]",hh=t=>Ci(t)==="[object Set]",Y=t=>typeof t=="function",Ne=t=>typeof t=="string",Va=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",fh=t=>ve(t)&&Y(t.then)&&Y(t.catch),dh=Object.prototype.toString,Ci=t=>dh.call(t),Rg=t=>Ci(t).slice(8,-1),ph=t=>Ci(t)==="[object Object]",$a=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$r=Ma(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_i=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bg=/-(\w)/g,Ot=_i(t=>t.replace(Bg,(e,n)=>n?n.toUpperCase():"")),Og=/\B([A-Z])/g,gs=_i(t=>t.replace(Og,"-$1").toLowerCase()),Si=_i(t=>t.charAt(0).toUpperCase()+t.slice(1)),go=_i(t=>t?`on${Si(t)}`:""),Hs=(t,e)=>!Object.is(t,e),Qr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Jr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let au;const Mg=()=>au||(au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _t;class Fg{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}run(e){if(this.active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Pg(t,e=_t){e&&e.active&&e.effects.push(t)}const Qa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gh=t=>(t.w&on)>0,mh=t=>(t.n&on)>0,Lg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=on},Ug=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];gh(r)&&!mh(r)?r.delete(t):e[n++]=r,r.w&=~on,r.n&=~on}e.length=n}},Qo=new WeakMap;let ks=0,on=1;const jo=30;let At;const xn=Symbol(""),qo=Symbol("");class ja{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pg(this,s)}run(){if(!this.active)return this.fn();let e=At,n=Zt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=At,At=this,Zt=!0,on=1<<++ks,ks<=jo?Lg(this):cu(this),this.fn()}finally{ks<=jo&&Ug(this),on=1<<--ks,At=this.parent,Zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&(cu(this),this.onStop&&this.onStop(),this.active=!1)}}function cu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Zt=!0;const yh=[];function ms(){yh.push(Zt),Zt=!1}function ys(){const t=yh.pop();Zt=t===void 0?!0:t}function ot(t,e,n){if(Zt&&At){let s=Qo.get(t);s||Qo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Qa()),Ah(r)}}function Ah(t,e){let n=!1;ks<=jo?mh(t)||(t.n|=on,n=!gh(t)):n=!t.has(At),n&&(t.add(At),At.deps.push(t))}function $t(t,e,n,s,r,i){const o=Qo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Xr(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?$a(n)&&a.push(o.get("length")):(a.push(o.get(xn)),Xn(t)&&a.push(o.get(qo)));break;case"delete":K(t)||(a.push(o.get(xn)),Xn(t)&&a.push(o.get(qo)));break;case"set":Xn(t)&&a.push(o.get(xn));break}if(a.length===1)a[0]&&Ho(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ho(Qa(c))}}function Ho(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&uu(s);for(const s of n)s.computed||uu(s)}function uu(t,e){(t!==At||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Vg=Ma("__proto__,__v_isRef,__isVue"),vh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Va)),$g=qa(),Qg=qa(!1,!0),jg=qa(!0),lu=qg();function qg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let i=0,o=this.length;i<o;i++)ot(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ms();const s=re(this)[e].apply(this,n);return ys(),s}}),t}function qa(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?om:Th:e?bh:Ih).get(s))return s;const o=K(s);if(!t&&o&&ne(lu,r))return Reflect.get(lu,r,i);const a=Reflect.get(s,r,i);return(Va(r)?vh.has(r):Vg(r))||(t||ot(s,"get",r),e)?a:Ke(a)?o&&$a(r)?a:a.value:ve(a)?t?Ch(a):lr(a):a}}const Hg=wh(),Kg=wh(!0);function wh(t=!1){return function(n,s,r,i){let o=n[s];if(ss(o)&&Ke(o)&&!Ke(r))return!1;if(!t&&(!Zr(r)&&!ss(r)&&(o=re(o),r=re(r)),!K(n)&&Ke(o)&&!Ke(r)))return o.value=r,!0;const a=K(n)&&$a(s)?Number(s)<n.length:ne(n,s),c=Reflect.set(n,s,r,i);return n===re(i)&&(a?Hs(r,o)&&$t(n,"set",s,r):$t(n,"add",s,r)),c}}function zg(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&$t(t,"delete",e,void 0),s}function Gg(t,e){const n=Reflect.has(t,e);return(!Va(e)||!vh.has(e))&&ot(t,"has",e),n}function Wg(t){return ot(t,"iterate",K(t)?"length":xn),Reflect.ownKeys(t)}const Eh={get:$g,set:Hg,deleteProperty:zg,has:Gg,ownKeys:Wg},Yg={get:jg,set(t,e){return!0},deleteProperty(t,e){return!0}},Jg=We({},Eh,{get:Qg,set:Kg}),Ha=t=>t,Di=t=>Reflect.getPrototypeOf(t);function Dr(t,e,n=!1,s=!1){t=t.__v_raw;const r=re(t),i=re(e);n||(e!==i&&ot(r,"get",e),ot(r,"get",i));const{has:o}=Di(r),a=s?Ha:n?Ga:Ks;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function xr(t,e=!1){const n=this.__v_raw,s=re(n),r=re(t);return e||(t!==r&&ot(s,"has",t),ot(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function kr(t,e=!1){return t=t.__v_raw,!e&&ot(re(t),"iterate",xn),Reflect.get(t,"size",t)}function hu(t){t=re(t);const e=re(this);return Di(e).has.call(e,t)||(e.add(t),$t(e,"add",t,t)),this}function fu(t,e){e=re(e);const n=re(this),{has:s,get:r}=Di(n);let i=s.call(n,t);i||(t=re(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Hs(e,o)&&$t(n,"set",t,e):$t(n,"add",t,e),this}function du(t){const e=re(this),{has:n,get:s}=Di(e);let r=n.call(e,t);r||(t=re(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&$t(e,"delete",t,void 0),i}function pu(){const t=re(this),e=t.size!==0,n=t.clear();return e&&$t(t,"clear",void 0,void 0),n}function Nr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=re(o),c=e?Ha:t?Ga:Ks;return!t&&ot(a,"iterate",xn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Rr(t,e,n){return function(...s){const r=this.__v_raw,i=re(r),o=Xn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Ha:e?Ga:Ks;return!e&&ot(i,"iterate",c?qo:xn),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Gt(t){return function(...e){return t==="delete"?!1:this}}function Xg(){const t={get(i){return Dr(this,i)},get size(){return kr(this)},has:xr,add:hu,set:fu,delete:du,clear:pu,forEach:Nr(!1,!1)},e={get(i){return Dr(this,i,!1,!0)},get size(){return kr(this)},has:xr,add:hu,set:fu,delete:du,clear:pu,forEach:Nr(!1,!0)},n={get(i){return Dr(this,i,!0)},get size(){return kr(this,!0)},has(i){return xr.call(this,i,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:Nr(!0,!1)},s={get(i){return Dr(this,i,!0,!0)},get size(){return kr(this,!0)},has(i){return xr.call(this,i,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:Nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Rr(i,!1,!1),n[i]=Rr(i,!0,!1),e[i]=Rr(i,!1,!0),s[i]=Rr(i,!0,!0)}),[t,n,e,s]}const[Zg,em,tm,nm]=Xg();function Ka(t,e){const n=e?t?nm:tm:t?em:Zg;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ne(n,r)&&r in s?n:s,r,i)}const sm={get:Ka(!1,!1)},rm={get:Ka(!1,!0)},im={get:Ka(!0,!1)},Ih=new WeakMap,bh=new WeakMap,Th=new WeakMap,om=new WeakMap;function am(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cm(t){return t.__v_skip||!Object.isExtensible(t)?0:am(Rg(t))}function lr(t){return ss(t)?t:za(t,!1,Eh,sm,Ih)}function um(t){return za(t,!1,Jg,rm,bh)}function Ch(t){return za(t,!0,Yg,im,Th)}function za(t,e,n,s,r){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=cm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Zn(t){return ss(t)?Zn(t.__v_raw):!!(t&&t.__v_isReactive)}function ss(t){return!!(t&&t.__v_isReadonly)}function Zr(t){return!!(t&&t.__v_isShallow)}function _h(t){return Zn(t)||ss(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Sh(t){return Jr(t,"__v_skip",!0),t}const Ks=t=>ve(t)?lr(t):t,Ga=t=>ve(t)?Ch(t):t;function Dh(t){Zt&&At&&(t=re(t),Ah(t.dep||(t.dep=Qa())))}function xh(t,e){t=re(t),t.dep&&Ho(t.dep)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function lm(t){return kh(t,!1)}function hm(t){return kh(t,!0)}function kh(t,e){return Ke(t)?t:new fm(t,e)}class fm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Ks(e)}get value(){return Dh(this),this._value}set value(e){const n=this.__v_isShallow||Zr(e)||ss(e);e=n?e:re(e),Hs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ks(e),xh(this))}}function Os(t){return Ke(t)?t.value:t}const dm={get:(t,e,n)=>Os(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Nh(t){return Zn(t)?t:new Proxy(t,dm)}var Rh;class pm{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Rh]=!1,this._dirty=!0,this.effect=new ja(e,()=>{this._dirty||(this._dirty=!0,xh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=re(this);return Dh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Rh="__v_isReadonly";function gm(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=Et):(s=t.get,r=t.set),new pm(s,r,i||!r,n)}function en(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){xi(i,e,n)}return r}function lt(t,e,n,s){if(Y(t)){const i=en(t,e,n,s);return i&&fh(i)&&i.catch(o=>{xi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(lt(t[i],e,n,s));return r}function xi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){en(c,null,10,[t,o,a]);return}}mm(t,n,r,s)}function mm(t,e,n,s=!0){console.error(t)}let zs=!1,Ko=!1;const qe=[];let Dt=0;const es=[];let Pt=null,En=0;const Bh=Promise.resolve();let Wa=null;function Oh(t){const e=Wa||Bh;return t?e.then(this?t.bind(this):t):e}function ym(t){let e=Dt+1,n=qe.length;for(;e<n;){const s=e+n>>>1;Gs(qe[s])<t?e=s+1:n=s}return e}function Ya(t){(!qe.length||!qe.includes(t,zs&&t.allowRecurse?Dt+1:Dt))&&(t.id==null?qe.push(t):qe.splice(ym(t.id),0,t),Mh())}function Mh(){!zs&&!Ko&&(Ko=!0,Wa=Bh.then(Ph))}function Am(t){const e=qe.indexOf(t);e>Dt&&qe.splice(e,1)}function vm(t){K(t)?es.push(...t):(!Pt||!Pt.includes(t,t.allowRecurse?En+1:En))&&es.push(t),Mh()}function gu(t,e=zs?Dt+1:0){for(;e<qe.length;e++){const n=qe[e];n&&n.pre&&(qe.splice(e,1),e--,n())}}function Fh(t){if(es.length){const e=[...new Set(es)];if(es.length=0,Pt){Pt.push(...e);return}for(Pt=e,Pt.sort((n,s)=>Gs(n)-Gs(s)),En=0;En<Pt.length;En++)Pt[En]();Pt=null,En=0}}const Gs=t=>t.id==null?1/0:t.id,wm=(t,e)=>{const n=Gs(t)-Gs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ph(t){Ko=!1,zs=!0,qe.sort(wm);const e=Et;try{for(Dt=0;Dt<qe.length;Dt++){const n=qe[Dt];n&&n.active!==!1&&en(n,null,14)}}finally{Dt=0,qe.length=0,Fh(),zs=!1,Wa=null,(qe.length||es.length)&&Ph()}}function Em(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||ge;d&&(r=n.map(g=>Ne(g)?g.trim():g)),h&&(r=n.map(Xr))}let a,c=s[a=go(e)]||s[a=go(Ot(e))];!c&&i&&(c=s[a=go(gs(e))]),c&&lt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,lt(u,t,6,r)}}function Lh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=Lh(u,e,!0);l&&(a=!0,We(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ve(t)&&s.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):We(o,i),ve(t)&&s.set(t,o),o)}function ki(t,e){return!t||!Ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,gs(e))||ne(t,e))}let rt=null,Ni=null;function ei(t){const e=rt;return rt=t,Ni=t&&t.type.__scopeId||null,e}function Im(t){Ni=t}function bm(){Ni=null}function Ja(t,e=rt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&_u(-1);const i=ei(e);let o;try{o=t(...r)}finally{ei(i),s._d&&_u(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function mo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:g,ctx:A,inheritAttrs:w}=t;let k,N;const O=ei(t);try{if(n.shapeFlag&4){const W=r||s;k=St(l.call(W,W,h,i,g,d,A)),N=c}else{const W=e;k=St(W.length>1?W(i,{attrs:c,slots:a,emit:u}):W(i,null)),N=e.props?c:Tm(c)}}catch(W){Fs.length=0,xi(W,t,1),k=De(It)}let P=k;if(N&&w!==!1){const W=Object.keys(N),{shapeFlag:ae}=P;W.length&&ae&7&&(o&&W.some(La)&&(N=Cm(N,o)),P=an(P,N))}return n.dirs&&(P=an(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),k=P,ei(O),k}const Tm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ti(n))&&((e||(e={}))[n]=t[n]);return e},Cm=(t,e)=>{const n={};for(const s in t)(!La(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function _m(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?mu(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!ki(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?mu(s,o,u):!0:!!o;return!1}function mu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ki(n,i))return!0}return!1}function Sm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dm=t=>t.__isSuspense;function xm(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):vm(t)}function jr(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function Ut(t,e,n=!1){const s=Me||rt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const Br={};function qr(t,e,n){return Uh(t,e,n)}function Uh(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ge){const a=Me;let c,u=!1,l=!1;if(Ke(t)?(c=()=>t.value,u=Zr(t)):Zn(t)?(c=()=>t,s=!0):K(t)?(l=!0,u=t.some(P=>Zn(P)||Zr(P)),c=()=>t.map(P=>{if(Ke(P))return P.value;if(Zn(P))return Tn(P);if(Y(P))return en(P,a,2)})):Y(t)?e?c=()=>en(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),lt(t,a,3,[d])}:c=Et,e&&s){const P=c;c=()=>Tn(P())}let h,d=P=>{h=N.onStop=()=>{en(P,a,4)}},g;if(Ys)if(d=Et,e?n&&lt(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const P=_y();g=P.__watcherHandles||(P.__watcherHandles=[])}else return Et;let A=l?new Array(t.length).fill(Br):Br;const w=()=>{if(N.active)if(e){const P=N.run();(s||u||(l?P.some((W,ae)=>Hs(W,A[ae])):Hs(P,A)))&&(h&&h(),lt(e,a,3,[P,A===Br?void 0:l&&A[0]===Br?[]:A,d]),A=P)}else N.run()};w.allowRecurse=!!e;let k;r==="sync"?k=w:r==="post"?k=()=>tt(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),k=()=>Ya(w));const N=new ja(c,k);e?n?w():A=N.run():r==="post"?tt(N.run.bind(N),a&&a.suspense):N.run();const O=()=>{N.stop(),a&&a.scope&&Ua(a.scope.effects,N)};return g&&g.push(O),O}function km(t,e,n){const s=this.proxy,r=Ne(t)?t.includes(".")?Vh(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Me;rs(this);const a=Uh(r,i.bind(s),n);return o?rs(o):kn(),a}function Vh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Tn(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ke(t))Tn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Tn(t[n],e);else if(hh(t)||Xn(t))t.forEach(n=>{Tn(n,e)});else if(ph(t))for(const n in t)Tn(t[n],e);return t}function Nm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hh(()=>{t.isMounted=!0}),Kh(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],Rm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},setup(t,{slots:e}){const n=Ay(),s=Nm();let r;return()=>{const i=e.default&&Qh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==It){o=w;break}}const a=re(t),{mode:c}=a;if(s.isLeaving)return yo(o);const u=yu(o);if(!u)return yo(o);const l=zo(u,a,s,n);Go(u,l);const h=n.subTree,d=h&&yu(h);let g=!1;const{getTransitionKey:A}=u.type;if(A){const w=A();r===void 0?r=w:w!==r&&(r=w,g=!0)}if(d&&d.type!==It&&(!In(u,d)||g)){const w=zo(d,a,s,n);if(Go(d,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},yo(o);c==="in-out"&&u.type!==It&&(w.delayLeave=(k,N,O)=>{const P=$h(s,d);P[String(d.key)]=d,k._leaveCb=()=>{N(),k._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=O})}return o}}},Bm=Rm;function $h(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function zo(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:A,onBeforeAppear:w,onAppear:k,onAfterAppear:N,onAppearCancelled:O}=e,P=String(t.key),W=$h(n,t),ae=(J,Ie)=>{J&&lt(J,s,9,Ie)},Be=(J,Ie)=>{const pe=Ie[1];ae(J,Ie),K(J)?J.every($e=>$e.length<=1)&&pe():J.length<=1&&pe()},Pe={mode:i,persisted:o,beforeEnter(J){let Ie=a;if(!n.isMounted)if(r)Ie=w||a;else return;J._leaveCb&&J._leaveCb(!0);const pe=W[P];pe&&In(t,pe)&&pe.el._leaveCb&&pe.el._leaveCb(),ae(Ie,[J])},enter(J){let Ie=c,pe=u,$e=l;if(!n.isMounted)if(r)Ie=k||c,pe=N||u,$e=O||l;else return;let Ze=!1;const pt=J._enterCb=Ft=>{Ze||(Ze=!0,Ft?ae($e,[J]):ae(pe,[J]),Pe.delayedLeave&&Pe.delayedLeave(),J._enterCb=void 0)};Ie?Be(Ie,[J,pt]):pt()},leave(J,Ie){const pe=String(t.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return Ie();ae(h,[J]);let $e=!1;const Ze=J._leaveCb=pt=>{$e||($e=!0,Ie(),pt?ae(A,[J]):ae(g,[J]),J._leaveCb=void 0,W[pe]===t&&delete W[pe])};W[pe]=t,d?Be(d,[J,Ze]):Ze()},clone(J){return zo(J,e,n,s)}};return Pe}function yo(t){if(Ri(t))return t=an(t),t.children=null,t}function yu(t){return Ri(t)?t.children?t.children[0]:void 0:t}function Go(t,e){t.shapeFlag&6&&t.component?Go(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Qh(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===st?(o.patchFlag&128&&r++,s=s.concat(Qh(o.children,e,a))):(e||o.type!==It)&&s.push(a!=null?an(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function jh(t){return Y(t)?{setup:t,name:t.name}:t}const Hr=t=>!!t.type.__asyncLoader,Ri=t=>t.type.__isKeepAlive;function Om(t,e){qh(t,"a",e)}function Mm(t,e){qh(t,"da",e)}function qh(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Bi(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ri(r.parent.vnode)&&Fm(s,e,n,r),r=r.parent}}function Fm(t,e,n,s){const r=Bi(e,t,s,!0);zh(()=>{Ua(s[e],r)},n)}function Bi(t,e,n=Me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ms(),rs(n);const a=lt(e,n,t,o);return kn(),ys(),a});return s?r.unshift(i):r.push(i),i}}const zt=t=>(e,n=Me)=>(!Ys||t==="sp")&&Bi(t,(...s)=>e(...s),n),Pm=zt("bm"),Hh=zt("m"),Lm=zt("bu"),Um=zt("u"),Kh=zt("bum"),zh=zt("um"),Vm=zt("sp"),$m=zt("rtg"),Qm=zt("rtc");function jm(t,e=Me){Bi("ec",t,e)}function Au(t,e){const n=rt;if(n===null)return t;const s=Fi(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ge]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Tn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function yn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ms(),lt(c,n,8,[t.el,a,t,e]),ys())}}const Gh="components";function Bn(t,e){return Hm(Gh,t,!0,e)||t}const qm=Symbol();function Hm(t,e,n=!0,s=!1){const r=rt||Me;if(r){const i=r.type;if(t===Gh){const a=by(i,!1);if(a&&(a===e||a===Ot(e)||a===Si(Ot(e))))return i}const o=vu(r[t]||i[t],e)||vu(r.appContext[t],e);return!o&&s?i:o}}function vu(t,e){return t&&(t[e]||t[Ot(e)]||t[Si(Ot(e))])}function Km(t,e,n,s){let r;const i=n&&n[s];if(K(t)||Ne(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ve(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Wo=t=>t?af(t)?Fi(t)||t.proxy:Wo(t.parent):null,Ms=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wo(t.parent),$root:t=>Wo(t.root),$emit:t=>t.emit,$options:t=>Xa(t),$forceUpdate:t=>t.f||(t.f=()=>Ya(t.update)),$nextTick:t=>t.n||(t.n=Oh.bind(t.proxy)),$watch:t=>km.bind(t)}),Ao=(t,e)=>t!==ge&&!t.__isScriptSetup&&ne(t,e),zm={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ao(s,e))return o[e]=1,s[e];if(r!==ge&&ne(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ne(u,e))return o[e]=3,i[e];if(n!==ge&&ne(n,e))return o[e]=4,n[e];Yo&&(o[e]=0)}}const l=Ms[e];let h,d;if(l)return e==="$attrs"&&ot(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&ne(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ao(r,e)?(r[e]=n,!0):s!==ge&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ge&&ne(t,o)||Ao(e,o)||(a=i[0])&&ne(a,o)||ne(s,o)||ne(Ms,o)||ne(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Yo=!0;function Gm(t){const e=Xa(t),n=t.proxy,s=t.ctx;Yo=!1,e.beforeCreate&&wu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:g,updated:A,activated:w,deactivated:k,beforeDestroy:N,beforeUnmount:O,destroyed:P,unmounted:W,render:ae,renderTracked:Be,renderTriggered:Pe,errorCaptured:J,serverPrefetch:Ie,expose:pe,inheritAttrs:$e,components:Ze,directives:pt,filters:Ft}=e;if(u&&Wm(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const ce=o[he];Y(ce)&&(s[he]=ce.bind(n))}if(r){const he=r.call(n,n);ve(he)&&(t.data=lr(he))}if(Yo=!0,i)for(const he in i){const ce=i[he],gt=Y(ce)?ce.bind(n,n):Y(ce.get)?ce.get.bind(n,n):Et,mn=!Y(ce)&&Y(ce.set)?ce.set.bind(n):Et,mt=xt({get:gt,set:mn});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>mt.value,set:et=>mt.value=et})}if(a)for(const he in a)Wh(a[he],s,n,he);if(c){const he=Y(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ce=>{jr(ce,he[ce])})}l&&wu(l,t,"c");function be(he,ce){K(ce)?ce.forEach(gt=>he(gt.bind(n))):ce&&he(ce.bind(n))}if(be(Pm,h),be(Hh,d),be(Lm,g),be(Um,A),be(Om,w),be(Mm,k),be(jm,J),be(Qm,Be),be($m,Pe),be(Kh,O),be(zh,W),be(Vm,Ie),K(pe))if(pe.length){const he=t.exposed||(t.exposed={});pe.forEach(ce=>{Object.defineProperty(he,ce,{get:()=>n[ce],set:gt=>n[ce]=gt})})}else t.exposed||(t.exposed={});ae&&t.render===Et&&(t.render=ae),$e!=null&&(t.inheritAttrs=$e),Ze&&(t.components=Ze),pt&&(t.directives=pt)}function Wm(t,e,n=Et,s=!1){K(t)&&(t=Jo(t));for(const r in t){const i=t[r];let o;ve(i)?"default"in i?o=Ut(i.from||r,i.default,!0):o=Ut(i.from||r):o=Ut(i),Ke(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function wu(t,e,n){lt(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wh(t,e,n,s){const r=s.includes(".")?Vh(n,s):()=>n[s];if(Ne(t)){const i=e[t];Y(i)&&qr(r,i)}else if(Y(t))qr(r,t.bind(n));else if(ve(t))if(K(t))t.forEach(i=>Wh(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&qr(r,i,t)}}function Xa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>ti(c,u,o,!0)),ti(c,e,o)),ve(e)&&i.set(e,c),c}function ti(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ti(t,i,n,!0),r&&r.forEach(o=>ti(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ym[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ym={data:Eu,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:vn,directives:vn,watch:Xm,provide:Eu,inject:Jm};function Eu(t,e){return e?t?function(){return We(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Jm(t,e){return vn(Jo(t),Jo(e))}function Jo(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?We(We(Object.create(null),t),e):e}function Xm(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const s in e)n[s]=Je(t[s],e[s]);return n}function Zm(t,e,n,s=!1){const r={},i={};Jr(i,Mi,1),t.propsDefaults=Object.create(null),Yh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:um(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ey(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=re(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(ki(t.emitsOptions,d))continue;const g=e[d];if(c)if(ne(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const A=Ot(d);r[A]=Xo(c,a,A,g,t,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{Yh(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ne(e,h)&&((l=gs(h))===h||!ne(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Xo(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ne(e,h))&&(delete i[h],u=!0)}u&&$t(t,"set","$attrs")}function Yh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if($r(c))continue;const u=e[c];let l;r&&ne(r,l=Ot(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:ki(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=re(n),u=a||ge;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Xo(r,c,h,u[h],t,!ne(u,h))}}return o}function Xo(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(rs(r),s=u[n]=c.call(null,e),kn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===gs(n))&&(s=!0))}return s}function Jh(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[d,g]=Jh(h,e,!0);We(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return ve(t)&&s.set(t,Jn),Jn;if(K(i))for(let l=0;l<i.length;l++){const h=Ot(i[l]);Iu(h)&&(o[h]=ge)}else if(i)for(const l in i){const h=Ot(l);if(Iu(h)){const d=i[l],g=o[h]=K(d)||Y(d)?{type:d}:Object.assign({},d);if(g){const A=Cu(Boolean,g.type),w=Cu(String,g.type);g[0]=A>-1,g[1]=w<0||A<w,(A>-1||ne(g,"default"))&&a.push(h)}}}const u=[o,a];return ve(t)&&s.set(t,u),u}function Iu(t){return t[0]!=="$"}function bu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Tu(t,e){return bu(t)===bu(e)}function Cu(t,e){return K(e)?e.findIndex(n=>Tu(n,t)):Y(e)&&Tu(e,t)?0:-1}const Xh=t=>t[0]==="_"||t==="$stable",Za=t=>K(t)?t.map(St):[St(t)],ty=(t,e,n)=>{if(e._n)return e;const s=Ja((...r)=>Za(e(...r)),n);return s._c=!1,s},Zh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Xh(r))continue;const i=t[r];if(Y(i))e[r]=ty(r,i,s);else if(i!=null){const o=Za(i);e[r]=()=>o}}},ef=(t,e)=>{const n=Za(e);t.slots.default=()=>n},ny=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Jr(e,"_",n)):Zh(e,t.slots={})}else t.slots={},e&&ef(t,e);Jr(t.slots,Mi,1)},sy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ge;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(We(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Zh(e,r)),o=e}else e&&(ef(t,e),o={default:1});if(i)for(const a in r)!Xh(a)&&!(a in o)&&delete r[a]};function tf(){return{app:null,config:{isNativeTag:xg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ry=0;function iy(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!ve(r)&&(r=null);const i=tf(),o=new Set;let a=!1;const c=i.app={_uid:ry++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Sy,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=De(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Fi(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Zo(t,e,n,s,r=!1){if(K(t)){t.forEach((d,g)=>Zo(d,e&&(K(e)?e[g]:e),n,s,r));return}if(Hr(s)&&!r)return;const i=s.shapeFlag&4?Fi(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Ne(u)?(l[u]=null,ne(h,u)&&(h[u]=null)):Ke(u)&&(u.value=null)),Y(c))en(c,a,12,[o,l]);else{const d=Ne(c),g=Ke(c);if(d||g){const A=()=>{if(t.f){const w=d?ne(h,c)?h[c]:l[c]:c.value;r?K(w)&&Ua(w,i):K(w)?w.includes(i)||w.push(i):d?(l[c]=[i],ne(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ne(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(A.id=-1,tt(A,n)):A()}}}const tt=xm;function oy(t){return ay(t)}function ay(t,e){const n=Mg();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:g=Et,insertStaticContent:A}=t,w=(f,p,m,y=null,I=null,_=null,x=!1,C=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!In(f,p)&&(y=D(f),et(f,I,_,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:$,shapeFlag:M}=p;switch(b){case Oi:k(f,p,m,y);break;case It:N(f,p,m,y);break;case vo:f==null&&O(p,m,y,x);break;case st:Ze(f,p,m,y,I,_,x,C,S);break;default:M&1?ae(f,p,m,y,I,_,x,C,S):M&6?pt(f,p,m,y,I,_,x,C,S):(M&64||M&128)&&b.process(f,p,m,y,I,_,x,C,S,se)}$!=null&&I&&Zo($,f&&f.ref,_,p||f,!p)},k=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const I=p.el=f.el;p.children!==f.children&&u(I,p.children)}},N=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},O=(f,p,m,y)=>{[f.el,f.anchor]=A(f.children,p,m,y,f.el,f.anchor)},P=({el:f,anchor:p},m,y)=>{let I;for(;f&&f!==p;)I=d(f),s(f,m,y),f=I;s(p,m,y)},W=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},ae=(f,p,m,y,I,_,x,C,S)=>{x=x||p.type==="svg",f==null?Be(p,m,y,I,_,x,C,S):Ie(f,p,I,_,x,C,S)},Be=(f,p,m,y,I,_,x,C)=>{let S,b;const{type:$,props:M,shapeFlag:Q,transition:H,dirs:Z}=f;if(S=f.el=o(f.type,_,M&&M.is,M),Q&8?l(S,f.children):Q&16&&J(f.children,S,null,y,I,_&&$!=="foreignObject",x,C),Z&&yn(f,null,y,"created"),M){for(const ue in M)ue!=="value"&&!$r(ue)&&i(S,ue,null,M[ue],_,f.children,y,I,R);"value"in M&&i(S,"value",null,M.value),(b=M.onVnodeBeforeMount)&&Ct(b,y,f)}Pe(S,f,f.scopeId,x,y),Z&&yn(f,null,y,"beforeMount");const fe=(!I||I&&!I.pendingBranch)&&H&&!H.persisted;fe&&H.beforeEnter(S),s(S,p,m),((b=M&&M.onVnodeMounted)||fe||Z)&&tt(()=>{b&&Ct(b,y,f),fe&&H.enter(S),Z&&yn(f,null,y,"mounted")},I)},Pe=(f,p,m,y,I)=>{if(m&&g(f,m),y)for(let _=0;_<y.length;_++)g(f,y[_]);if(I){let _=I.subTree;if(p===_){const x=I.vnode;Pe(f,x,x.scopeId,x.slotScopeIds,I.parent)}}},J=(f,p,m,y,I,_,x,C,S=0)=>{for(let b=S;b<f.length;b++){const $=f[b]=C?Jt(f[b]):St(f[b]);w(null,$,p,m,y,I,_,x,C)}},Ie=(f,p,m,y,I,_,x)=>{const C=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:$}=p;S|=f.patchFlag&16;const M=f.props||ge,Q=p.props||ge;let H;m&&An(m,!1),(H=Q.onVnodeBeforeUpdate)&&Ct(H,m,p,f),$&&yn(p,f,m,"beforeUpdate"),m&&An(m,!0);const Z=I&&p.type!=="foreignObject";if(b?pe(f.dynamicChildren,b,C,m,y,Z,_):x||ce(f,p,C,null,m,y,Z,_,!1),S>0){if(S&16)$e(C,p,M,Q,m,y,I);else if(S&2&&M.class!==Q.class&&i(C,"class",null,Q.class,I),S&4&&i(C,"style",M.style,Q.style,I),S&8){const fe=p.dynamicProps;for(let ue=0;ue<fe.length;ue++){const Te=fe[ue],yt=M[Te],qn=Q[Te];(qn!==yt||Te==="value")&&i(C,Te,yt,qn,I,f.children,m,y,R)}}S&1&&f.children!==p.children&&l(C,p.children)}else!x&&b==null&&$e(C,p,M,Q,m,y,I);((H=Q.onVnodeUpdated)||$)&&tt(()=>{H&&Ct(H,m,p,f),$&&yn(p,f,m,"updated")},y)},pe=(f,p,m,y,I,_,x)=>{for(let C=0;C<p.length;C++){const S=f[C],b=p[C],$=S.el&&(S.type===st||!In(S,b)||S.shapeFlag&70)?h(S.el):m;w(S,b,$,null,y,I,_,x,!0)}},$e=(f,p,m,y,I,_,x)=>{if(m!==y){if(m!==ge)for(const C in m)!$r(C)&&!(C in y)&&i(f,C,m[C],null,x,p.children,I,_,R);for(const C in y){if($r(C))continue;const S=y[C],b=m[C];S!==b&&C!=="value"&&i(f,C,b,S,x,p.children,I,_,R)}"value"in y&&i(f,"value",m.value,y.value)}},Ze=(f,p,m,y,I,_,x,C,S)=>{const b=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:Q,slotScopeIds:H}=p;H&&(C=C?C.concat(H):H),f==null?(s(b,m,y),s($,m,y),J(p.children,m,$,I,_,x,C,S)):M>0&&M&64&&Q&&f.dynamicChildren?(pe(f.dynamicChildren,Q,m,I,_,x,C),(p.key!=null||I&&p===I.subTree)&&nf(f,p,!0)):ce(f,p,m,$,I,_,x,C,S)},pt=(f,p,m,y,I,_,x,C,S)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?I.ctx.activate(p,m,y,x,S):Ft(p,m,y,I,_,x,S):_s(f,p,S)},Ft=(f,p,m,y,I,_,x)=>{const C=f.component=yy(f,y,I);if(Ri(f)&&(C.ctx.renderer=se),vy(C),C.asyncDep){if(I&&I.registerDep(C,be),!f.el){const S=C.subTree=De(It);N(null,S,p,m)}return}be(C,f,p,m,I,_,x)},_s=(f,p,m)=>{const y=p.component=f.component;if(_m(f,p,m))if(y.asyncDep&&!y.asyncResolved){he(y,p,m);return}else y.next=p,Am(y.update),y.update();else p.el=f.el,y.vnode=p},be=(f,p,m,y,I,_,x)=>{const C=()=>{if(f.isMounted){let{next:$,bu:M,u:Q,parent:H,vnode:Z}=f,fe=$,ue;An(f,!1),$?($.el=Z.el,he(f,$,x)):$=Z,M&&Qr(M),(ue=$.props&&$.props.onVnodeBeforeUpdate)&&Ct(ue,H,$,Z),An(f,!0);const Te=mo(f),yt=f.subTree;f.subTree=Te,w(yt,Te,h(yt.el),D(yt),f,I,_),$.el=Te.el,fe===null&&Sm(f,Te.el),Q&&tt(Q,I),(ue=$.props&&$.props.onVnodeUpdated)&&tt(()=>Ct(ue,H,$,Z),I)}else{let $;const{el:M,props:Q}=p,{bm:H,m:Z,parent:fe}=f,ue=Hr(p);if(An(f,!1),H&&Qr(H),!ue&&($=Q&&Q.onVnodeBeforeMount)&&Ct($,fe,p),An(f,!0),M&&X){const Te=()=>{f.subTree=mo(f),X(M,f.subTree,f,I,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Te()):Te()}else{const Te=f.subTree=mo(f);w(null,Te,m,y,f,I,_),p.el=Te.el}if(Z&&tt(Z,I),!ue&&($=Q&&Q.onVnodeMounted)){const Te=p;tt(()=>Ct($,fe,Te),I)}(p.shapeFlag&256||fe&&Hr(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&tt(f.a,I),f.isMounted=!0,p=m=y=null}},S=f.effect=new ja(C,()=>Ya(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,An(f,!0),b()},he=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,ey(f,p.props,y,m),sy(f,p.children,m),ms(),gu(),ys()},ce=(f,p,m,y,I,_,x,C,S=!1)=>{const b=f&&f.children,$=f?f.shapeFlag:0,M=p.children,{patchFlag:Q,shapeFlag:H}=p;if(Q>0){if(Q&128){mn(b,M,m,y,I,_,x,C,S);return}else if(Q&256){gt(b,M,m,y,I,_,x,C,S);return}}H&8?($&16&&R(b,I,_),M!==b&&l(m,M)):$&16?H&16?mn(b,M,m,y,I,_,x,C,S):R(b,I,_,!0):($&8&&l(m,""),H&16&&J(M,m,y,I,_,x,C,S))},gt=(f,p,m,y,I,_,x,C,S)=>{f=f||Jn,p=p||Jn;const b=f.length,$=p.length,M=Math.min(b,$);let Q;for(Q=0;Q<M;Q++){const H=p[Q]=S?Jt(p[Q]):St(p[Q]);w(f[Q],H,m,null,I,_,x,C,S)}b>$?R(f,I,_,!0,!1,M):J(p,m,y,I,_,x,C,S,M)},mn=(f,p,m,y,I,_,x,C,S)=>{let b=0;const $=p.length;let M=f.length-1,Q=$-1;for(;b<=M&&b<=Q;){const H=f[b],Z=p[b]=S?Jt(p[b]):St(p[b]);if(In(H,Z))w(H,Z,m,null,I,_,x,C,S);else break;b++}for(;b<=M&&b<=Q;){const H=f[M],Z=p[Q]=S?Jt(p[Q]):St(p[Q]);if(In(H,Z))w(H,Z,m,null,I,_,x,C,S);else break;M--,Q--}if(b>M){if(b<=Q){const H=Q+1,Z=H<$?p[H].el:y;for(;b<=Q;)w(null,p[b]=S?Jt(p[b]):St(p[b]),m,Z,I,_,x,C,S),b++}}else if(b>Q)for(;b<=M;)et(f[b],I,_,!0),b++;else{const H=b,Z=b,fe=new Map;for(b=Z;b<=Q;b++){const nt=p[b]=S?Jt(p[b]):St(p[b]);nt.key!=null&&fe.set(nt.key,b)}let ue,Te=0;const yt=Q-Z+1;let qn=!1,ru=0;const Ss=new Array(yt);for(b=0;b<yt;b++)Ss[b]=0;for(b=H;b<=M;b++){const nt=f[b];if(Te>=yt){et(nt,I,_,!0);continue}let Tt;if(nt.key!=null)Tt=fe.get(nt.key);else for(ue=Z;ue<=Q;ue++)if(Ss[ue-Z]===0&&In(nt,p[ue])){Tt=ue;break}Tt===void 0?et(nt,I,_,!0):(Ss[Tt-Z]=b+1,Tt>=ru?ru=Tt:qn=!0,w(nt,p[Tt],m,null,I,_,x,C,S),Te++)}const iu=qn?cy(Ss):Jn;for(ue=iu.length-1,b=yt-1;b>=0;b--){const nt=Z+b,Tt=p[nt],ou=nt+1<$?p[nt+1].el:y;Ss[b]===0?w(null,Tt,m,ou,I,_,x,C,S):qn&&(ue<0||b!==iu[ue]?mt(Tt,m,ou,2):ue--)}}},mt=(f,p,m,y,I=null)=>{const{el:_,type:x,transition:C,children:S,shapeFlag:b}=f;if(b&6){mt(f.component.subTree,p,m,y);return}if(b&128){f.suspense.move(p,m,y);return}if(b&64){x.move(f,p,m,se);return}if(x===st){s(_,p,m);for(let M=0;M<S.length;M++)mt(S[M],p,m,y);s(f.anchor,p,m);return}if(x===vo){P(f,p,m);return}if(y!==2&&b&1&&C)if(y===0)C.beforeEnter(_),s(_,p,m),tt(()=>C.enter(_),I);else{const{leave:M,delayLeave:Q,afterLeave:H}=C,Z=()=>s(_,p,m),fe=()=>{M(_,()=>{Z(),H&&H()})};Q?Q(_,Z,fe):fe()}else s(_,p,m)},et=(f,p,m,y=!1,I=!1)=>{const{type:_,props:x,ref:C,children:S,dynamicChildren:b,shapeFlag:$,patchFlag:M,dirs:Q}=f;if(C!=null&&Zo(C,null,m,f,!0),$&256){p.ctx.deactivate(f);return}const H=$&1&&Q,Z=!Hr(f);let fe;if(Z&&(fe=x&&x.onVnodeBeforeUnmount)&&Ct(fe,p,f),$&6)v(f.component,m,y);else{if($&128){f.suspense.unmount(m,y);return}H&&yn(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,m,I,se,y):b&&(_!==st||M>0&&M&64)?R(b,p,m,!1,!0):(_===st&&M&384||!I&&$&16)&&R(S,p,m),y&&jn(f)}(Z&&(fe=x&&x.onVnodeUnmounted)||H)&&tt(()=>{fe&&Ct(fe,p,f),H&&yn(f,null,p,"unmounted")},m)},jn=f=>{const{type:p,el:m,anchor:y,transition:I}=f;if(p===st){su(m,y);return}if(p===vo){W(f);return}const _=()=>{r(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:x,delayLeave:C}=I,S=()=>x(m,_);C?C(f.el,_,S):S()}else _()},su=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},v=(f,p,m)=>{const{bum:y,scope:I,update:_,subTree:x,um:C}=f;y&&Qr(y),I.stop(),_&&(_.active=!1,et(x,f,p,m)),C&&tt(C,p),tt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(f,p,m,y=!1,I=!1,_=0)=>{for(let x=_;x<f.length;x++)et(f[x],p,m,y,I)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),V=(f,p,m)=>{f==null?p._vnode&&et(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,m),gu(),Fh(),p._vnode=f},se={p:w,um:et,m:mt,r:jn,mt:Ft,mc:J,pc:ce,pbc:pe,n:D,o:t};let we,X;return e&&([we,X]=e(se)),{render:V,hydrate:we,createApp:iy(V,we)}}function An({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nf(t,e,n=!1){const s=t.children,r=e.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Jt(r[i]),a.el=o.el),n||nf(o,a)),a.type===Oi&&(a.el=o.el)}}function cy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const uy=t=>t.__isTeleport,st=Symbol(void 0),Oi=Symbol(void 0),It=Symbol(void 0),vo=Symbol(void 0),Fs=[];let vt=null;function ht(t=!1){Fs.push(vt=t?null:[])}function ly(){Fs.pop(),vt=Fs[Fs.length-1]||null}let Ws=1;function _u(t){Ws+=t}function sf(t){return t.dynamicChildren=Ws>0?vt||Jn:null,ly(),Ws>0&&vt&&vt.push(t),t}function Nt(t,e,n,s,r,i){return sf(ye(t,e,n,s,r,i,!0))}function rf(t,e,n,s,r){return sf(De(t,e,n,s,r,!0))}function ea(t){return t?t.__v_isVNode===!0:!1}function In(t,e){return t.type===e.type&&t.key===e.key}const Mi="__vInternal",of=({key:t})=>t??null,Kr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ne(t)||Ke(t)||Y(t)?{i:rt,r:t,k:e,f:!!n}:t:null;function ye(t,e=null,n=null,s=0,r=null,i=t===st?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&of(e),ref:e&&Kr(e),scopeId:Ni,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rt};return a?(ec(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Ws>0&&!o&&vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&vt.push(c),c}const De=hy;function hy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===qm)&&(t=It),ea(t)){const a=an(t,e,!0);return n&&ec(a,n),Ws>0&&!i&&vt&&(a.shapeFlag&6?vt[vt.indexOf(t)]=a:vt.push(a)),a.patchFlag|=-2,a}if(Ty(t)&&(t=t.__vccOpts),e){e=fy(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=Pa(a)),ve(c)&&(_h(c)&&!K(c)&&(c=We({},c)),e.style=Fa(c))}const o=Ne(t)?1:Dm(t)?128:uy(t)?64:ve(t)?4:Y(t)?2:0;return ye(t,e,n,s,r,o,i,!0)}function fy(t){return t?_h(t)||Mi in t?We({},t):t:null}function an(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?py(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&of(a),ref:e&&e.ref?n&&r?K(r)?r.concat(Kr(e)):[r,Kr(e)]:Kr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function dy(t=" ",e=0){return De(Oi,null,t,e)}function Su(t="",e=!1){return e?(ht(),rf(It,null,t)):De(It,null,t)}function St(t){return t==null||typeof t=="boolean"?De(It):K(t)?De(st,null,t.slice()):typeof t=="object"?Jt(t):De(Oi,null,String(t))}function Jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:an(t)}function ec(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ec(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Mi in e)?e._ctx=rt:r===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:rt},n=32):(e=String(e),s&64?(n=16,e=[dy(e)]):n=8);t.children=e,t.shapeFlag|=n}function py(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Pa([e.class,s.class]));else if(r==="style")e.style=Fa([e.style,s.style]);else if(Ti(r)){const i=e[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ct(t,e,n,s=null){lt(t,e,7,[n,s])}const gy=tf();let my=0;function yy(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||gy,i={uid:my++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jh(s,r),emitsOptions:Lh(s,r),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Em.bind(null,i),t.ce&&t.ce(i),i}let Me=null;const Ay=()=>Me||rt,rs=t=>{Me=t,t.scope.on()},kn=()=>{Me&&Me.scope.off(),Me=null};function af(t){return t.vnode.shapeFlag&4}let Ys=!1;function vy(t,e=!1){Ys=e;const{props:n,children:s}=t.vnode,r=af(t);Zm(t,n,r,e),ny(t,s);const i=r?wy(t,e):void 0;return Ys=!1,i}function wy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sh(new Proxy(t.ctx,zm));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Iy(t):null;rs(t),ms();const i=en(s,t,0,[t.props,r]);if(ys(),kn(),fh(i)){if(i.then(kn,kn),e)return i.then(o=>{Du(t,o,e)}).catch(o=>{xi(o,t,0)});t.asyncDep=i}else Du(t,i,e)}else cf(t,e)}function Du(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=Nh(e)),cf(t,n)}let xu;function cf(t,e,n){const s=t.type;if(!t.render){if(!e&&xu&&!s.render){const r=s.template||Xa(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=We(We({isCustomElement:i,delimiters:a},o),c);s.render=xu(r,u)}}t.render=s.render||Et}rs(t),ms(),Gm(t),ys(),kn()}function Ey(t){return new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}})}function Iy(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Ey(t))},slots:t.slots,emit:t.emit,expose:e}}function Fi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Nh(Sh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ms)return Ms[n](t)},has(e,n){return n in e||n in Ms}}))}function by(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function Ty(t){return Y(t)&&"__vccOpts"in t}const xt=(t,e)=>gm(t,e,Ys);function uf(t,e,n){const s=arguments.length;return s===2?ve(e)&&!K(e)?ea(e)?De(t,null,[e]):De(t,e):De(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ea(n)&&(n=[n]),De(t,e,n))}const Cy=Symbol(""),_y=()=>Ut(Cy),Sy="3.2.45",Dy="http://www.w3.org/2000/svg",bn=typeof document<"u"?document:null,ku=bn&&bn.createElement("template"),xy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?bn.createElementNS(Dy,t):bn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>bn.createTextNode(t),createComment:t=>bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ku.innerHTML=s?`<svg>${t}</svg>`:t;const a=ku.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ky(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ny(t,e,n){const s=t.style,r=Ne(n);if(n&&!r){for(const i in n)ta(s,i,n[i]);if(e&&!Ne(e))for(const i in e)n[i]==null&&ta(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Nu=/\s*!important$/;function ta(t,e,n){if(K(n))n.forEach(s=>ta(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ry(t,e);Nu.test(n)?t.setProperty(gs(s),n.replace(Nu,""),"important"):t[s]=n}}const Ru=["Webkit","Moz","ms"],wo={};function Ry(t,e){const n=wo[e];if(n)return n;let s=Ot(e);if(s!=="filter"&&s in t)return wo[e]=s;s=Si(s);for(let r=0;r<Ru.length;r++){const i=Ru[r]+s;if(i in t)return wo[e]=i}return e}const Bu="http://www.w3.org/1999/xlink";function By(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bu,e.slice(6,e.length)):t.setAttributeNS(Bu,e,n);else{const i=Dg(e);n==null||i&&!uh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Oy(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=uh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Kn(t,e,n,s){t.addEventListener(e,n,s)}function My(t,e,n,s){t.removeEventListener(e,n,s)}function Fy(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Py(e);if(s){const u=i[e]=Vy(s,r);Kn(t,a,u,c)}else o&&(My(t,a,o,c),i[e]=void 0)}}const Ou=/(?:Once|Passive|Capture)$/;function Py(t){let e;if(Ou.test(t)){e={};let s;for(;s=t.match(Ou);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gs(t.slice(2)),e]}let Eo=0;const Ly=Promise.resolve(),Uy=()=>Eo||(Ly.then(()=>Eo=0),Eo=Date.now());function Vy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;lt($y(s,n.value),e,5,[s])};return n.value=t,n.attached=Uy(),n}function $y(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Mu=/^on[a-z]/,Qy=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?ky(t,s,r):e==="style"?Ny(t,n,s):Ti(e)?La(e)||Fy(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jy(t,e,s,r))?Oy(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),By(t,e,s,r))};function jy(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Mu.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mu.test(e)&&Ne(n)?!1:e in t}const qy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Bm.props;const Fu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Qr(e,n):e};function Hy(t){t.target.composing=!0}function Pu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Lu={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Fu(r);const i=s||r.props&&r.props.type==="number";Kn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Xr(a)),t._assign(a)}),n&&Kn(t,"change",()=>{t.value=t.value.trim()}),e||(Kn(t,"compositionstart",Hy),Kn(t,"compositionend",Pu),Kn(t,"change",Pu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Fu(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Xr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ky=["ctrl","shift","alt","meta"],zy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ky.some(n=>t[`${n}Key`]&&!e.includes(n))},Gy=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=zy[e[r]];if(i&&i(n,e))return}return t(n,...s)},Wy=We({patchProp:Qy},xy);let Uu;function Yy(){return Uu||(Uu=oy(Wy))}const Jy=(...t)=>{const e=Yy().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Xy(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Xy(t){return Ne(t)?document.querySelector(t):t}const Un=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Zy={},eA=ye("div",{id:"app"},null,-1);function tA(t,e){const n=Bn("router-view");return ht(),Nt(st,null,[eA,De(n)],64)}const nA=Un(Zy,[["render",tA]]);/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const lf=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",As=t=>lf?Symbol(t):"_vr_"+t,sA=As("rvlm"),Vu=As("rvd"),tc=As("r"),hf=As("rl"),na=As("rvl"),zn=typeof window<"u";function rA(t){return t.__esModule||lf&&t[Symbol.toStringTag]==="Module"}const le=Object.assign;function Io(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Ps=()=>{},iA=/\/$/,oA=t=>t.replace(iA,"");function bo(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=lA(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function aA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $u(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cA(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&is(e.matched[s],n.matched[r])&&ff(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ff(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uA(t[n],e[n]))return!1;return!0}function uA(t,e){return Array.isArray(t)?Qu(t,e):Array.isArray(e)?Qu(e,t):t===e}function Qu(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function lA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Js;(function(t){t.pop="pop",t.push="push"})(Js||(Js={}));var Ls;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ls||(Ls={}));function hA(t){if(!t)if(zn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oA(t)}const fA=/^[^#]+#/;function dA(t,e){return t.replace(fA,"#")+e}function pA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Pi=()=>({left:window.pageXOffset,top:window.pageYOffset});function gA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=pA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ju(t,e){return(history.state?history.state.position-e:-1)+t}const sa=new Map;function mA(t,e){sa.set(t,e)}function yA(t){const e=sa.get(t);return sa.delete(t),e}let AA=()=>location.protocol+"//"+location.host;function df(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),$u(c,"")}return $u(n,t)+s+r}function vA(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=df(t,location),A=n.value,w=e.value;let k=0;if(d){if(n.value=g,e.value=d,o&&o===A){o=null;return}k=w?d.position-w.position:0}else s(g);r.forEach(N=>{N(n.value,A,{delta:k,type:Js.pop,direction:k?k>0?Ls.forward:Ls.back:Ls.unknown})})};function c(){o=n.value}function u(d){r.push(d);const g=()=>{const A=r.indexOf(d);A>-1&&r.splice(A,1)};return i.push(g),g}function l(){const{history:d}=window;d.state&&d.replaceState(le({},d.state,{scroll:Pi()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function qu(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Pi():null}}function wA(t){const{history:e,location:n}=window,s={value:df(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:AA()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](d)}}function o(c,u){const l=le({},e.state,qu(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=le({},r.value,e.state,{forward:c,scroll:Pi()});i(l.current,l,!0);const h=le({},qu(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function EA(t){t=hA(t);const e=wA(t),n=vA(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=le({location:"",base:t,go:s,createHref:dA.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function IA(t){return typeof t=="string"||t&&typeof t=="object"}function pf(t){return typeof t=="string"||typeof t=="symbol"}const Wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gf=As("nf");var Hu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hu||(Hu={}));function os(t,e){return le(new Error,{type:t,[gf]:!0},e)}function Yt(t,e){return t instanceof Error&&gf in t&&(e==null||!!(t.type&e))}const Ku="[^/]+?",bA={sensitive:!1,strict:!1,start:!0,end:!0},TA=/[.+*?^${}()[\]/\\]/g;function CA(t,e){const n=le({},bA,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(TA,"\\$&"),g+=40;else if(d.type===1){const{value:A,repeatable:w,optional:k,regexp:N}=d;i.push({name:A,repeatable:w,optional:k});const O=N||Ku;if(O!==Ku){g+=10;try{new RegExp(`(${O})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${A}" (${O}): `+W.message)}}let P=w?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(P=k&&u.length<2?`(?:/${P})`:"/"+P),k&&(P+="?"),r+=P,g+=20,k&&(g+=-8),w&&(g+=-20),O===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const g=l[d]||"",A=i[d-1];h[A.name]=g&&A.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of d)if(g.type===0)l+=g.value;else if(g.type===1){const{value:A,repeatable:w,optional:k}=g,N=A in u?u[A]:"";if(Array.isArray(N)&&!w)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const O=Array.isArray(N)?N.join("/"):N;if(!O)if(k)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);l+=O}}return l}return{re:o,score:s,keys:i,parse:a,stringify:c}}function _A(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function SA(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=_A(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const DA={type:0,value:""},xA=/[a-zA-Z0-9_]/;function kA(t){if(!t)return[[]];if(t==="/")return[[DA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:xA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function NA(t,e,n){const s=CA(kA(t.path),n),r=le(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function RA(t,e){const n=[],s=new Map;e=Gu({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const g=!d,A=OA(l);A.aliasOf=d&&d.record;const w=Gu(e,l),k=[A];if("alias"in l){const P=typeof l.alias=="string"?[l.alias]:l.alias;for(const W of P)k.push(le({},A,{components:d?d.record.components:A.components,path:W,aliasOf:d?d.record:A}))}let N,O;for(const P of k){const{path:W}=P;if(h&&W[0]!=="/"){const ae=h.record.path,Be=ae[ae.length-1]==="/"?"":"/";P.path=h.record.path+(W&&Be+W)}if(N=NA(P,h,w),d?d.alias.push(N):(O=O||N,O!==N&&O.alias.push(N),g&&l.name&&!zu(N)&&o(l.name)),"children"in A){const ae=A.children;for(let Be=0;Be<ae.length;Be++)i(ae[Be],N,d&&d.children[Be])}d=d||N,c(N)}return O?()=>{o(O)}:Ps}function o(l){if(pf(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&SA(l,n[h])>=0&&(l.record.path!==n[h].record.path||!mf(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!zu(l)&&s.set(l.record.name,l)}function u(l,h){let d,g={},A,w;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw os(1,{location:l});w=d.record.name,g=le(BA(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),l.params),A=d.stringify(g)}else if("path"in l)A=l.path,d=n.find(O=>O.re.test(A)),d&&(g=d.parse(A),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw os(1,{location:l,currentLocation:h});w=d.record.name,g=le({},h.params,l.params),A=d.stringify(g)}const k=[];let N=d;for(;N;)k.unshift(N.record),N=N.parent;return{name:w,path:A,params:g,matched:k,meta:FA(k)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function BA(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function OA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:MA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function MA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function zu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function FA(t){return t.reduce((e,n)=>le(e,n.meta),{})}function Gu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function mf(t,e){return e.children.some(n=>n===t||mf(t,n))}const yf=/#/g,PA=/&/g,LA=/\//g,UA=/=/g,VA=/\?/g,Af=/\+/g,$A=/%5B/g,QA=/%5D/g,vf=/%5E/g,jA=/%60/g,wf=/%7B/g,qA=/%7C/g,Ef=/%7D/g,HA=/%20/g;function nc(t){return encodeURI(""+t).replace(qA,"|").replace($A,"[").replace(QA,"]")}function KA(t){return nc(t).replace(wf,"{").replace(Ef,"}").replace(vf,"^")}function ra(t){return nc(t).replace(Af,"%2B").replace(HA,"+").replace(yf,"%23").replace(PA,"%26").replace(jA,"`").replace(wf,"{").replace(Ef,"}").replace(vf,"^")}function zA(t){return ra(t).replace(UA,"%3D")}function GA(t){return nc(t).replace(yf,"%23").replace(VA,"%3F")}function WA(t){return t==null?"":GA(t).replace(LA,"%2F")}function ni(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function YA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Af," "),o=i.indexOf("="),a=ni(o<0?i:i.slice(0,o)),c=o<0?null:ni(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Wu(t){let e="";for(let n in t){const s=t[n];if(n=zA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&ra(i)):[s&&ra(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function JA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function Ds(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Xt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(os(4,{from:n,to:e})):h instanceof Error?a(h):IA(h)?a(os(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function To(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(XA(a)){const u=(a.__vccOpts||a)[e];u&&r.push(Xt(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=rA(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Xt(d,n,s,i,o)()}))}}return r}function XA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yu(t){const e=Ut(tc),n=Ut(hf),s=xt(()=>e.resolve(Os(t.to))),r=xt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(is.bind(null,l));if(d>-1)return d;const g=Ju(c[u-2]);return u>1&&Ju(l)===g&&h[h.length-1].path!==g?h.findIndex(is.bind(null,c[u-2])):d}),i=xt(()=>r.value>-1&&nv(n.params,s.value.params)),o=xt(()=>r.value>-1&&r.value===n.matched.length-1&&ff(n.params,s.value.params));function a(c={}){return tv(c)?e[Os(t.replace)?"replace":"push"](Os(t.to)).catch(Ps):Promise.resolve()}return{route:s,href:xt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const ZA=jh({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yu,setup(t,{slots:e}){const n=lr(Yu(t)),{options:s}=Ut(tc),r=xt(()=>({[Xu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:uf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),ev=ZA;function tv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nv(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ju(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xu=(t,e,n)=>t??e??n,sv=jh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Ut(na),r=xt(()=>t.route||s.value),i=Ut(Vu,0),o=xt(()=>r.value.matched[i]);jr(Vu,i+1),jr(sA,o),jr(na,r);const a=lm();return qr(()=>[a.value,o.value,t.name],([c,u,l],[h,d,g])=>{u&&(u.instances[l]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!is(u,d)||!h)&&(u.enterCallbacks[l]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=r.value,u=o.value,l=u&&u.components[t.name],h=t.name;if(!l)return Zu(n.default,{Component:l,route:c});const d=u.props[t.name],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,w=uf(l,le({},g,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return Zu(n.default,{Component:w,route:c})||w}}});function Zu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rv=sv;function iv(t){const e=RA(t.routes,t),n=t.parseQuery||YA,s=t.stringifyQuery||Wu,r=t.history,i=Ds(),o=Ds(),a=Ds(),c=hm(Wt);let u=Wt;zn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Io.bind(null,v=>""+v),h=Io.bind(null,WA),d=Io.bind(null,ni);function g(v,R){let D,V;return pf(v)?(D=e.getRecordMatcher(v),V=R):V=v,e.addRoute(V,D)}function A(v){const R=e.getRecordMatcher(v);R&&e.removeRoute(R)}function w(){return e.getRoutes().map(v=>v.record)}function k(v){return!!e.getRecordMatcher(v)}function N(v,R){if(R=le({},R||c.value),typeof v=="string"){const f=bo(n,v,R.path),p=e.resolve({path:f.path},R),m=r.createHref(f.fullPath);return le(f,p,{params:d(p.params),hash:ni(f.hash),redirectedFrom:void 0,href:m})}let D;if("path"in v)D=le({},v,{path:bo(n,v.path,R.path).path});else{const f=le({},v.params);for(const p in f)f[p]==null&&delete f[p];D=le({},v,{params:h(v.params)}),R.params=h(R.params)}const V=e.resolve(D,R),se=v.hash||"";V.params=l(d(V.params));const we=aA(s,le({},v,{hash:KA(se),path:V.path})),X=r.createHref(we);return le({fullPath:we,hash:se,query:s===Wu?JA(v.query):v.query||{}},V,{redirectedFrom:void 0,href:X})}function O(v){return typeof v=="string"?bo(n,v,c.value.path):le({},v)}function P(v,R){if(u!==v)return os(8,{from:R,to:v})}function W(v){return Pe(v)}function ae(v){return W(le(O(v),{replace:!0}))}function Be(v){const R=v.matched[v.matched.length-1];if(R&&R.redirect){const{redirect:D}=R;let V=typeof D=="function"?D(v):D;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=O(V):{path:V},V.params={}),le({query:v.query,hash:v.hash,params:v.params},V)}}function Pe(v,R){const D=u=N(v),V=c.value,se=v.state,we=v.force,X=v.replace===!0,f=Be(D);if(f)return Pe(le(O(f),{state:se,force:we,replace:X}),R||D);const p=D;p.redirectedFrom=R;let m;return!we&&cA(s,V,D)&&(m=os(16,{to:p,from:V}),mn(V,V,!0,!1)),(m?Promise.resolve(m):Ie(p,V)).catch(y=>Yt(y)?Yt(y,2)?y:gt(y):he(y,p,V)).then(y=>{if(y){if(Yt(y,2))return Pe(le(O(y.to),{state:se,force:we,replace:X}),R||p)}else y=$e(p,V,!0,X,se);return pe(p,V,y),y})}function J(v,R){const D=P(v,R);return D?Promise.reject(D):Promise.resolve()}function Ie(v,R){let D;const[V,se,we]=ov(v,R);D=To(V.reverse(),"beforeRouteLeave",v,R);for(const f of V)f.leaveGuards.forEach(p=>{D.push(Xt(p,v,R))});const X=J.bind(null,v,R);return D.push(X),Hn(D).then(()=>{D=[];for(const f of i.list())D.push(Xt(f,v,R));return D.push(X),Hn(D)}).then(()=>{D=To(se,"beforeRouteUpdate",v,R);for(const f of se)f.updateGuards.forEach(p=>{D.push(Xt(p,v,R))});return D.push(X),Hn(D)}).then(()=>{D=[];for(const f of v.matched)if(f.beforeEnter&&!R.matched.includes(f))if(Array.isArray(f.beforeEnter))for(const p of f.beforeEnter)D.push(Xt(p,v,R));else D.push(Xt(f.beforeEnter,v,R));return D.push(X),Hn(D)}).then(()=>(v.matched.forEach(f=>f.enterCallbacks={}),D=To(we,"beforeRouteEnter",v,R),D.push(X),Hn(D))).then(()=>{D=[];for(const f of o.list())D.push(Xt(f,v,R));return D.push(X),Hn(D)}).catch(f=>Yt(f,8)?f:Promise.reject(f))}function pe(v,R,D){for(const V of a.list())V(v,R,D)}function $e(v,R,D,V,se){const we=P(v,R);if(we)return we;const X=R===Wt,f=zn?history.state:{};D&&(V||X?r.replace(v.fullPath,le({scroll:X&&f&&f.scroll},se)):r.push(v.fullPath,se)),c.value=v,mn(v,R,D,X),gt()}let Ze;function pt(){Ze=r.listen((v,R,D)=>{const V=N(v),se=Be(V);if(se){Pe(le(se,{replace:!0}),V).catch(Ps);return}u=V;const we=c.value;zn&&mA(ju(we.fullPath,D.delta),Pi()),Ie(V,we).catch(X=>Yt(X,12)?X:Yt(X,2)?(Pe(X.to,V).then(f=>{Yt(f,20)&&!D.delta&&D.type===Js.pop&&r.go(-1,!1)}).catch(Ps),Promise.reject()):(D.delta&&r.go(-D.delta,!1),he(X,V,we))).then(X=>{X=X||$e(V,we,!1),X&&(D.delta?r.go(-D.delta,!1):D.type===Js.pop&&Yt(X,20)&&r.go(-1,!1)),pe(V,we,X)}).catch(Ps)})}let Ft=Ds(),_s=Ds(),be;function he(v,R,D){gt(v);const V=_s.list();return V.length?V.forEach(se=>se(v,R,D)):console.error(v),Promise.reject(v)}function ce(){return be&&c.value!==Wt?Promise.resolve():new Promise((v,R)=>{Ft.add([v,R])})}function gt(v){return be||(be=!v,pt(),Ft.list().forEach(([R,D])=>v?D(v):R()),Ft.reset()),v}function mn(v,R,D,V){const{scrollBehavior:se}=t;if(!zn||!se)return Promise.resolve();const we=!D&&yA(ju(v.fullPath,0))||(V||!D)&&history.state&&history.state.scroll||null;return Oh().then(()=>se(v,R,we)).then(X=>X&&gA(X)).catch(X=>he(X,v,R))}const mt=v=>r.go(v);let et;const jn=new Set;return{currentRoute:c,addRoute:g,removeRoute:A,hasRoute:k,getRoutes:w,resolve:N,options:t,push:W,replace:ae,go:mt,back:()=>mt(-1),forward:()=>mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:_s.add,isReady:ce,install(v){const R=this;v.component("RouterLink",ev),v.component("RouterView",rv),v.config.globalProperties.$router=R,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Os(c)}),zn&&!et&&c.value===Wt&&(et=!0,W(r.location).catch(se=>{}));const D={};for(const se in Wt)D[se]=xt(()=>c.value[se]);v.provide(tc,R),v.provide(hf,lr(D)),v.provide(na,c);const V=v.unmount;jn.add(v),v.unmount=function(){jn.delete(v),jn.size<1&&(u=Wt,Ze&&Ze(),c.value=Wt,et=!1,be=!1),V()}}}}function Hn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ov(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>is(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>is(u,c))||r.push(c))}return[n,s,r]}const av={},cv={class:"px-5 py-2 m-5 rounded-md bg-white shadow-md"},uv=ye("p",null,"Back",-1);function lv(t,e){const n=Bn("router-link");return ht(),Nt("div",cv,[De(n,{to:"/curhat-ala-ala/"},{default:Ja(()=>[uv]),_:1})])}const hv=Un(av,[["render",lv]]);/**
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
 */const If=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},fv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(If(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const A=u<<6&192|h;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},dv=function(t){const e=If(t);return bf.encodeByteArray(e,!0)},si=function(t){return dv(t).replace(/\./g,"")},pv=function(t){try{return bf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mv=()=>gv().__FIREBASE_DEFAULTS__,yv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Av=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pv(t[1]);return e&&JSON.parse(e)},Tf=()=>{try{return mv()||yv()||Av()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vv=t=>{var e,n;return(n=(e=Tf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wv=t=>{const e=vv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ev=()=>{var t;return(t=Tf())===null||t===void 0?void 0:t.config};/**
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
 */class Iv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function bv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[si(JSON.stringify(n)),si(JSON.stringify(o)),a].join(".")}function Tv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cf(){try{return typeof indexedDB=="object"}catch{return!1}}function _f(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Cv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _v="FirebaseError";class dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_v,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Sv(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new dn(r,a,s)}}function Sv(t,e){return t.replace(Dv,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Dv=/\{\$([^}]+)}/g;function ri(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(el(i)&&el(o)){if(!ri(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function el(t){return t!==null&&typeof t=="object"}/**
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
 */const xv=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
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
 */const kv=1e3,Nv=2,Rv=4*60*60*1e3,Bv=.5;function tl(t,e=kv,n=Nv){const s=e*Math.pow(n,t),r=Math.round(Bv*s*(Math.random()-.5)*2);return Math.min(Rv,s+r)}/**
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
 */function cn(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wn="[DEFAULT]";/**
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
 */class Ov{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Iv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fv(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Mv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mv(t){return t===wn?void 0:t}function Fv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ov(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Lv={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Uv=ie.INFO,Vv={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},$v=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Vv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sc{constructor(e){this.name=e,this._logLevel=Uv,this._logHandler=$v,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Qv=(t,e)=>e.some(n=>t instanceof n);let nl,sl;function jv(){return nl||(nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qv(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sf=new WeakMap,ia=new WeakMap,Df=new WeakMap,Co=new WeakMap,rc=new WeakMap;function Hv(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(tn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sf.set(n,t)}).catch(()=>{}),rc.set(e,t),e}function Kv(t){if(ia.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ia.set(t,e)}let oa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Df.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zv(t){oa=t(oa)}function Gv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_o(this),e,...n);return Df.set(s,e.sort?e.sort():[e]),tn(s)}:qv().includes(t)?function(...e){return t.apply(_o(this),e),tn(Sf.get(this))}:function(...e){return tn(t.apply(_o(this),e))}}function Wv(t){return typeof t=="function"?Gv(t):(t instanceof IDBTransaction&&Kv(t),Qv(t,jv())?new Proxy(t,oa):t)}function tn(t){if(t instanceof IDBRequest)return Hv(t);if(Co.has(t))return Co.get(t);const e=Wv(t);return e!==t&&(Co.set(t,e),rc.set(e,t)),e}const _o=t=>rc.get(t);function xf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=tn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(tn(o.result),c.oldVersion,c.newVersion,tn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Yv=["get","getKey","getAll","getAllKeys","count"],Jv=["put","add","delete","clear"],So=new Map;function rl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(So.get(e))return So.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Jv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Yv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return So.set(e,i),i}zv(t=>({...t,get:(e,n,s)=>rl(e,n)||t.get(e,n,s),has:(e,n)=>!!rl(e,n)||t.has(e,n)}));/**
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
 */class Xv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const aa="@firebase/app",il="0.9.2";/**
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
 */const On=new sc("@firebase/app"),ew="@firebase/app-compat",tw="@firebase/analytics-compat",nw="@firebase/analytics",sw="@firebase/app-check-compat",rw="@firebase/app-check",iw="@firebase/auth",ow="@firebase/auth-compat",aw="@firebase/database",cw="@firebase/database-compat",uw="@firebase/functions",lw="@firebase/functions-compat",hw="@firebase/installations",fw="@firebase/installations-compat",dw="@firebase/messaging",pw="@firebase/messaging-compat",gw="@firebase/performance",mw="@firebase/performance-compat",yw="@firebase/remote-config",Aw="@firebase/remote-config-compat",vw="@firebase/storage",ww="@firebase/storage-compat",Ew="@firebase/firestore",Iw="@firebase/firestore-compat",bw="firebase",Tw="9.17.0";/**
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
 */const ca="[DEFAULT]",Cw={[aa]:"fire-core",[ew]:"fire-core-compat",[nw]:"fire-analytics",[tw]:"fire-analytics-compat",[rw]:"fire-app-check",[sw]:"fire-app-check-compat",[iw]:"fire-auth",[ow]:"fire-auth-compat",[aw]:"fire-rtdb",[cw]:"fire-rtdb-compat",[uw]:"fire-fn",[lw]:"fire-fn-compat",[hw]:"fire-iid",[fw]:"fire-iid-compat",[dw]:"fire-fcm",[pw]:"fire-fcm-compat",[gw]:"fire-perf",[mw]:"fire-perf-compat",[yw]:"fire-rc",[Aw]:"fire-rc-compat",[vw]:"fire-gcs",[ww]:"fire-gcs-compat",[Ew]:"fire-fst",[Iw]:"fire-fst-compat","fire-js":"fire-js",[bw]:"fire-js-all"};/**
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
 */const ii=new Map,ua=new Map;function _w(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function un(t){const e=t.name;if(ua.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;ua.set(e,t);for(const n of ii.values())_w(n,t);return!0}function hr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Sw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nn=new Li("app","Firebase",Sw);/**
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
 */class Dw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
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
 */const xw=Tw;function kf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ca,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw nn.create("bad-app-name",{appName:String(r)});if(n||(n=Ev()),!n)throw nn.create("no-options");const i=ii.get(r);if(i){if(ri(n,i.options)&&ri(s,i.config))return i;throw nn.create("duplicate-app",{appName:r})}const o=new Pv(r);for(const c of ua.values())o.addComponent(c);const a=new Dw(n,s,o);return ii.set(r,a),a}function Nf(t=ca){const e=ii.get(t);if(!e&&t===ca)return kf();if(!e)throw nn.create("no-app",{appName:t});return e}function Rt(t,e,n){var s;let r=(s=Cw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(a.join(" "));return}un(new Qt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kw="firebase-heartbeat-database",Nw=1,Xs="firebase-heartbeat-store";let Do=null;function Rf(){return Do||(Do=xf(kw,Nw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xs)}}}).catch(t=>{throw nn.create("idb-open",{originalErrorMessage:t.message})})),Do}async function Rw(t){try{return(await Rf()).transaction(Xs).objectStore(Xs).get(Bf(t))}catch(e){if(e instanceof dn)On.warn(e.message);else{const n=nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function ol(t,e){try{const s=(await Rf()).transaction(Xs,"readwrite");return await s.objectStore(Xs).put(e,Bf(t)),s.done}catch(n){if(n instanceof dn)On.warn(n.message);else{const s=nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(s.message)}}}function Bf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Bw=1024,Ow=30*24*60*60*1e3;class Mw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=al();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Ow}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=al(),{heartbeatsToSend:n,unsentEntries:s}=Fw(this._heartbeatsCache.heartbeats),r=si(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function al(){return new Date().toISOString().substring(0,10)}function Fw(t,e=Bw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),cl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),cl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Pw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cf()?_f().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cl(t){return si(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lw(t){un(new Qt("platform-logger",e=>new Xv(e),"PRIVATE")),un(new Qt("heartbeat",e=>new Mw(e),"PRIVATE")),Rt(aa,il,t),Rt(aa,il,"esm2017"),Rt("fire-js","")}Lw("");var Uw="firebase",Vw="9.17.0";/**
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
 */Rt(Uw,Vw,"app");const Of="@firebase/installations",ic="0.6.2";/**
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
 */const Mf=1e4,Ff=`w:${ic}`,Pf="FIS_v2",$w="https://firebaseinstallations.googleapis.com/v1",Qw=60*60*1e3,jw="installations",qw="Installations";/**
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
 */const Hw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Mn=new Li(jw,qw,Hw);function Lf(t){return t instanceof dn&&t.code.includes("request-failed")}/**
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
 */function Uf({projectId:t}){return`${$w}/projects/${t}/installations`}function Vf(t){return{token:t.token,requestStatus:2,expiresIn:zw(t.expiresIn),creationTime:Date.now()}}async function $f(t,e){const s=(await e.json()).error;return Mn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Qf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Kw(t,{refreshToken:e}){const n=Qf(t);return n.append("Authorization",Gw(e)),n}async function jf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function zw(t){return Number(t.replace("s","000"))}function Gw(t){return`${Pf} ${t}`}/**
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
 */async function Ww({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Uf(t),r=Qf(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:Pf,appId:t.appId,sdkVersion:Ff},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await jf(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Vf(u.authToken)}}else throw await $f("Create Installation",c)}/**
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
 */function qf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Yw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Jw=/^[cdef][\w-]{21}$/,la="";function Xw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Zw(t);return Jw.test(n)?n:la}catch{return la}}function Zw(t){return Yw(t).substr(0,22)}/**
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
 */function Ui(t){return`${t.appName}!${t.appId}`}/**
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
 */const Hf=new Map;function Kf(t,e){const n=Ui(t);zf(n,e),eE(n,e)}function zf(t,e){const n=Hf.get(t);if(n)for(const s of n)s(e)}function eE(t,e){const n=tE();n&&n.postMessage({key:t,fid:e}),nE()}let Cn=null;function tE(){return!Cn&&"BroadcastChannel"in self&&(Cn=new BroadcastChannel("[Firebase] FID Change"),Cn.onmessage=t=>{zf(t.data.key,t.data.fid)}),Cn}function nE(){Hf.size===0&&Cn&&(Cn.close(),Cn=null)}/**
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
 */const sE="firebase-installations-database",rE=1,Fn="firebase-installations-store";let xo=null;function oc(){return xo||(xo=xf(sE,rE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fn)}}})),xo}async function oi(t,e){const n=Ui(t),r=(await oc()).transaction(Fn,"readwrite"),i=r.objectStore(Fn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Kf(t,e.fid),e}async function Gf(t){const e=Ui(t),s=(await oc()).transaction(Fn,"readwrite");await s.objectStore(Fn).delete(e),await s.done}async function Vi(t,e){const n=Ui(t),r=(await oc()).transaction(Fn,"readwrite"),i=r.objectStore(Fn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Kf(t,a.fid),a}/**
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
 */async function ac(t){let e;const n=await Vi(t.appConfig,s=>{const r=iE(s),i=oE(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===la?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iE(t){const e=t||{fid:Xw(),registrationStatus:0};return Wf(e)}function oE(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Mn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=aE(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cE(t)}:{installationEntry:e}}async function aE(t,e){try{const n=await Ww(t,e);return oi(t.appConfig,n)}catch(n){throw Lf(n)&&n.customData.serverCode===409?await Gf(t.appConfig):await oi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function cE(t){let e=await ul(t.appConfig);for(;e.registrationStatus===1;)await qf(100),e=await ul(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ac(t);return s||n}return e}function ul(t){return Vi(t,e=>{if(!e)throw Mn.create("installation-not-found");return Wf(e)})}function Wf(t){return uE(t)?{fid:t.fid,registrationStatus:0}:t}function uE(t){return t.registrationStatus===1&&t.registrationTime+Mf<Date.now()}/**
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
 */async function lE({appConfig:t,heartbeatServiceProvider:e},n){const s=hE(t,n),r=Kw(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Ff,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await jf(()=>fetch(s,a));if(c.ok){const u=await c.json();return Vf(u)}else throw await $f("Generate Auth Token",c)}function hE(t,{fid:e}){return`${Uf(t)}/${e}/authTokens:generate`}/**
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
 */async function cc(t,e=!1){let n;const s=await Vi(t.appConfig,i=>{if(!Yf(i))throw Mn.create("not-registered");const o=i.authToken;if(!e&&pE(o))return i;if(o.requestStatus===1)return n=fE(t,e),i;{if(!navigator.onLine)throw Mn.create("app-offline");const a=mE(i);return n=dE(t,a),a}});return n?await n:s.authToken}async function fE(t,e){let n=await ll(t.appConfig);for(;n.authToken.requestStatus===1;)await qf(100),n=await ll(t.appConfig);const s=n.authToken;return s.requestStatus===0?cc(t,e):s}function ll(t){return Vi(t,e=>{if(!Yf(e))throw Mn.create("not-registered");const n=e.authToken;return yE(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dE(t,e){try{const n=await lE(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await oi(t.appConfig,s),n}catch(n){if(Lf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await oi(t.appConfig,s)}throw n}}function Yf(t){return t!==void 0&&t.registrationStatus===2}function pE(t){return t.requestStatus===2&&!gE(t)}function gE(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qw}function mE(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function yE(t){return t.requestStatus===1&&t.requestTime+Mf<Date.now()}/**
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
 */async function AE(t){const e=t,{installationEntry:n,registrationPromise:s}=await ac(e);return s?s.catch(console.error):cc(e).catch(console.error),n.fid}/**
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
 */async function vE(t,e=!1){const n=t;return await wE(n),(await cc(n,e)).token}async function wE(t){const{registrationPromise:e}=await ac(t);e&&await e}/**
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
 */function EE(t){if(!t||!t.options)throw ko("App Configuration");if(!t.name)throw ko("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ko(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ko(t){return Mn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Jf="installations",IE="installations-internal",bE=t=>{const e=t.getProvider("app").getImmediate(),n=EE(e),s=hr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},TE=t=>{const e=t.getProvider("app").getImmediate(),n=hr(e,Jf).getImmediate();return{getId:()=>AE(n),getToken:r=>vE(n,r)}};function CE(){un(new Qt(Jf,bE,"PUBLIC")),un(new Qt(IE,TE,"PRIVATE"))}CE();Rt(Of,ic);Rt(Of,ic,"esm2017");/**
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
 */const ai="analytics",_E="firebase_id",SE="origin",DE=60*1e3,xE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xf="https://www.googletagmanager.com/gtag/js";/**
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
 */const it=new sc("@firebase/analytics");/**
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
 */function Zf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function kE(t,e){const n=document.createElement("script");n.src=`${Xf}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function NE(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function RE(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Zf(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(a){it.error(a)}t("config",r,i)}async function BE(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Zf(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){it.error(i)}}function OE(t,e,n,s){async function r(i,o,a){try{i==="event"?await BE(t,e,n,o,a):i==="config"?await RE(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){it.error(c)}}return r}function ME(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=OE(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function FE(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xf)&&n.src.includes(t))return n;return null}/**
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
 */const PE={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ft=new Li("analytics","Analytics",PE);/**
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
 */const LE=30,UE=1e3;class VE{constructor(e={},n=UE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ed=new VE;function $E(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function QE(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:$E(s)},i=xE.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw ft.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function jE(t,e=ed,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw ft.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw ft.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new KE;return setTimeout(async()=>{a.abort()},n!==void 0?n:DE),td({appId:s,apiKey:r,measurementId:i},o,a,e)}async function td(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=ed){var i;const{appId:o,measurementId:a}=t;try{await qE(s,e)}catch(c){if(a)return it.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await QE(t);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!HE(u)){if(r.deleteThrottleMetadata(o),a)return it.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?tl(n,r.intervalMillis,LE):tl(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,h),it.debug(`Calling attemptFetch again in ${l} millis`),td(t,h,s,r)}}function qE(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HE(t){if(!(t instanceof dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class KE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zE(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function GE(){if(Cf())try{await _f()}catch(t){return it.warn(ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return it.warn(ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WE(t,e,n,s,r,i,o){var a;const c=jE(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&it.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>it.error(g)),e.push(c);const u=GE().then(g=>{if(g)return s.getId()}),[l,h]=await Promise.all([c,u]);FE(i)||kE(i,l.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[SE]="firebase",d.update=!0,h!=null&&(d[_E]=h),r("config",l.measurementId,d),l.measurementId}/**
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
 */class YE{constructor(e){this.app=e}_delete(){return delete Us[this.app.options.appId],Promise.resolve()}}let Us={},hl=[];const fl={};let No="dataLayer",JE="gtag",dl,nd,pl=!1;function XE(){const t=[];if(Tv()&&t.push("This is a browser extension environment."),Cv()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=ft.create("invalid-analytics-context",{errorInfo:e});it.warn(n.message)}}function ZE(t,e,n){XE();const s=t.options.appId;if(!s)throw ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)it.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ft.create("no-api-key");if(Us[s]!=null)throw ft.create("already-exists",{id:s});if(!pl){NE(No);const{wrappedGtag:i,gtagCore:o}=ME(Us,hl,fl,No,JE);nd=i,dl=o,pl=!0}return Us[s]=WE(t,hl,fl,e,dl,No,n),new YE(t)}function e0(t=Nf()){t=cn(t);const e=hr(t,ai);return e.isInitialized()?e.getImmediate():t0(t)}function t0(t,e={}){const n=hr(t,ai);if(n.isInitialized()){const r=n.getImmediate();if(ri(e,n.getOptions()))return r;throw ft.create("already-initialized")}return n.initialize({options:e})}function n0(t,e,n,s){t=cn(t),zE(nd,Us[t.app.options.appId],e,n,s).catch(r=>it.error(r))}const gl="@firebase/analytics",ml="0.9.2";function s0(){un(new Qt(ai,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return ZE(s,r,n)},"PUBLIC")),un(new Qt("analytics-internal",t,"PRIVATE")),Rt(gl,ml),Rt(gl,ml,"esm2017");function t(e){try{const n=e.getProvider(ai).getImmediate();return{logEvent:(s,r,i)=>n0(n,s,r,i)}}catch(n){throw ft.create("interop-component-reg-failed",{reason:n})}}}s0();var r0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,uc=uc||{},q=r0||self;function ci(){}function $i(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function i0(t){return Object.prototype.hasOwnProperty.call(t,Ro)&&t[Ro]||(t[Ro]=++o0)}var Ro="closure_uid_"+(1e9*Math.random()>>>0),o0=0;function a0(t,e,n){return t.call.apply(t.bind,arguments)}function c0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ze=a0:ze=c0,ze.apply(null,arguments)}function Or(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function pn(){this.s=this.s,this.o=this.o}var u0=0;pn.prototype.s=!1;pn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),u0!=0)&&i0(this)};pn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function lc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function yl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if($i(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var l0=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",ci,e),q.removeEventListener("test",ci,e)}catch{}return t}();function ui(t){return/^[\s\xa0]*$/.test(t)}var Al=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Bo(t,e){return t<e?-1:t>e?1:0}function Qi(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function kt(t){return Qi().indexOf(t)!=-1}function hc(t){return hc[" "](t),t}hc[" "]=ci;function h0(t){var e=p0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var f0=kt("Opera"),as=kt("Trident")||kt("MSIE"),rd=kt("Edge"),ha=rd||as,id=kt("Gecko")&&!(Qi().toLowerCase().indexOf("webkit")!=-1&&!kt("Edge"))&&!(kt("Trident")||kt("MSIE"))&&!kt("Edge"),d0=Qi().toLowerCase().indexOf("webkit")!=-1&&!kt("Edge");function od(){var t=q.document;return t?t.documentMode:void 0}var li;e:{var Oo="",Mo=function(){var t=Qi();if(id)return/rv:([^\);]+)(\)|;)/.exec(t);if(rd)return/Edge\/([\d\.]+)/.exec(t);if(as)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(d0)return/WebKit\/(\S+)/.exec(t);if(f0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mo&&(Oo=Mo?Mo[1]:""),as){var Fo=od();if(Fo!=null&&Fo>parseFloat(Oo)){li=String(Fo);break e}}li=Oo}var p0={};function g0(){return h0(function(){let t=0;const e=Al(String(li)).split("."),n=Al("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Bo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Bo(r[2].length==0,i[2].length==0)||Bo(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var fa;if(q.document&&as){var vl=od();fa=vl||parseInt(li,10)||void 0}else fa=void 0;var m0=fa;function Zs(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(id){e:{try{hc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:y0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zs.X.h.call(this)}}Ve(Zs,Ge);var y0={2:"touch",3:"pen",4:"mouse"};Zs.prototype.h=function(){Zs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var dr="closure_listenable_"+(1e6*Math.random()|0),A0=0;function v0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++A0,this.ba=this.ea=!1}function ji(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function fc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ad(t){const e={};for(const n in t)e[n]=t[n];return e}const wl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cd(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<wl.length;i++)n=wl[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function qi(t){this.src=t,this.g={},this.h=0}qi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=pa(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new v0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function da(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=sd(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ji(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pa(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var dc="closure_lm_"+(1e6*Math.random()|0),Po={};function ud(t,e,n,s,r){if(s&&s.once)return hd(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ud(t,e[i],n,s,r);return null}return n=mc(n),t&&t[dr]?t.N(e,n,fr(s)?!!s.capture:!!s,r):ld(t,e,n,!1,s,r)}function ld(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=fr(r)?!!r.capture:!!r,a=gc(t);if(a||(t[dc]=a=new qi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=w0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)l0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(dd(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function w0(){function t(n){return e.call(t.src,t.listener,n)}const e=E0;return t}function hd(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)hd(t,e[i],n,s,r);return null}return n=mc(n),t&&t[dr]?t.O(e,n,fr(s)?!!s.capture:!!s,r):ld(t,e,n,!0,s,r)}function fd(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)fd(t,e[i],n,s,r);else s=fr(s)?!!s.capture:!!s,n=mc(n),t&&t[dr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=pa(i,n,s,r),-1<n&&(ji(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=gc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pa(e,n,s,r)),(n=-1<t?e[t]:null)&&pc(n))}function pc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[dr])da(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(dd(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=gc(e))?(da(n,t),n.h==0&&(n.src=null,e[dc]=null)):ji(t)}}}function dd(t){return t in Po?Po[t]:Po[t]="on"+t}function E0(t,e){if(t.ba)t=!0;else{e=new Zs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&pc(t),t=n.call(s,e)}return t}function gc(t){return t=t[dc],t instanceof qi?t:null}var Lo="__closure_events_fn_"+(1e9*Math.random()>>>0);function mc(t){return typeof t=="function"?t:(t[Lo]||(t[Lo]=function(e){return t.handleEvent(e)}),t[Lo])}function Fe(){pn.call(this),this.i=new qi(this),this.P=this,this.I=null}Ve(Fe,pn);Fe.prototype[dr]=!0;Fe.prototype.removeEventListener=function(t,e,n,s){fd(this,t,e,n,s)};function Ue(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var r=e;e=new Ge(s,t),cd(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Mr(o,s,!0,e)&&r}if(o=e.g=t,r=Mr(o,s,!0,e)&&r,r=Mr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Mr(o,s,!1,e)&&r}Fe.prototype.M=function(){if(Fe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ji(n[s]);delete t.g[e],t.h--}}this.I=null};Fe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Fe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Mr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&da(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var yc=q.JSON.stringify;function I0(){var t=md;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class b0{constructor(){this.h=this.g=null}add(e,n){const s=pd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var pd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new T0,t=>t.reset());class T0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function C0(t){q.setTimeout(()=>{throw t},0)}function gd(t,e){ga||_0(),ma||(ga(),ma=!0),md.add(t,e)}var ga;function _0(){var t=q.Promise.resolve(void 0);ga=function(){t.then(S0)}}var ma=!1,md=new b0;function S0(){for(var t;t=I0();){try{t.h.call(t.g)}catch(n){C0(n)}var e=pd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ma=!1}function Hi(t,e){Fe.call(this),this.h=t||1,this.g=e||q,this.j=ze(this.lb,this),this.l=Date.now()}Ve(Hi,Fe);F=Hi.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ue(this,"tick"),this.ca&&(Ac(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ac(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){Hi.X.M.call(this),Ac(this),delete this.g};function vc(t,e,n){if(typeof t=="function")n&&(t=ze(t,n));else if(t&&typeof t.handleEvent=="function")t=ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function yd(t){t.g=vc(()=>{t.g=null,t.i&&(t.i=!1,yd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class D0 extends pn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yd(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function er(t){pn.call(this),this.h=t,this.g={}}Ve(er,pn);var El=[];function Ad(t,e,n,s){Array.isArray(n)||(n&&(El[0]=n.toString()),n=El);for(var r=0;r<n.length;r++){var i=ud(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function vd(t){fc(t.g,function(e,n){this.g.hasOwnProperty(n)&&pc(e)},t),t.g={}}er.prototype.M=function(){er.X.M.call(this),vd(this)};er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ki(){this.g=!0}Ki.prototype.Aa=function(){this.g=!1};function x0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function k0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Yn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+R0(t,n)+(s?" "+s:"")})}function N0(t,e){t.info(function(){return"TIMEOUT: "+e})}Ki.prototype.info=function(){};function R0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return yc(n)}catch{return e}}var Vn={},Il=null;function zi(){return Il=Il||new Fe}Vn.Pa="serverreachability";function wd(t){Ge.call(this,Vn.Pa,t)}Ve(wd,Ge);function tr(t){const e=zi();Ue(e,new wd(e))}Vn.STAT_EVENT="statevent";function Ed(t,e){Ge.call(this,Vn.STAT_EVENT,t),this.stat=e}Ve(Ed,Ge);function Xe(t){const e=zi();Ue(e,new Ed(e,t))}Vn.Qa="timingevent";function Id(t,e){Ge.call(this,Vn.Qa,t),this.size=e}Ve(Id,Ge);function pr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Gi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wc(){}wc.prototype.h=null;function bl(t){return t.h||(t.h=t.i())}function Td(){}var gr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ec(){Ge.call(this,"d")}Ve(Ec,Ge);function Ic(){Ge.call(this,"c")}Ve(Ic,Ge);var ya;function Wi(){}Ve(Wi,wc);Wi.prototype.g=function(){return new XMLHttpRequest};Wi.prototype.i=function(){return{}};ya=new Wi;function mr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new er(this),this.O=B0,t=ha?125:void 0,this.T=new Hi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Cd}function Cd(){this.i=null,this.g="",this.h=!1}var B0=45e3,Aa={},hi={};F=mr.prototype;F.setTimeout=function(t){this.O=t};function va(t,e,n){t.K=1,t.v=Ji(jt(e)),t.s=n,t.P=!0,_d(t,null)}function _d(t,e){t.F=Date.now(),yr(t),t.A=jt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Od(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Cd,t.g=tp(t.l,n?e:null,!t.s),0<t.N&&(t.L=new D0(ze(t.La,t,t.g),t.N)),Ad(t.S,t.g,"readystatechange",t.ib),e=t.H?ad(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),tr(),x0(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&Lt(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const l=Lt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ha||this.g&&(this.h.h||this.g.fa()||Sl(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?tr(3):tr(2)),Yi(this);var n=this.g.aa();this.Y=n;t:if(Sd(this)){var s=Sl(this.g);t="";var r=s.length,i=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),Vs(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,k0(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ui(a)){var u=a;break t}}u=null}if(n=u)Yn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wa(this,n);else{this.i=!1,this.o=3,Xe(12),_n(this),Vs(this);break e}}this.P?(Dd(this,l,o),ha&&this.i&&l==3&&(Ad(this.S,this.T,"tick",this.hb),this.T.start())):(Yn(this.j,this.m,o,null),wa(this,o)),l==4&&_n(this),this.i&&!this.I&&(l==4?Jd(this.l,this):(this.i=!1,yr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Xe(12)):(this.o=0,Xe(13)),_n(this),Vs(this)}}}catch{}finally{}};function Sd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Dd(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=O0(t,n),r==hi){e==4&&(t.o=4,Xe(14),s=!1),Yn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Aa){t.o=4,Xe(15),Yn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Yn(t.j,t.m,r,null),wa(t,r);Sd(t)&&r!=hi&&r!=Aa&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Xe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xc(e),e.K=!0,Xe(11))):(Yn(t.j,t.m,n,"[Invalid Chunked Response]"),_n(t),Vs(t))}F.hb=function(){if(this.g){var t=Lt(this.g),e=this.g.fa();this.C<e.length&&(Yi(this),Dd(this,t,e),this.i&&t!=4&&yr(this))}};function O0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?hi:(n=Number(e.substring(n,s)),isNaN(n)?Aa:(s+=1,s+n>e.length?hi:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.I=!0,_n(this)};function yr(t){t.V=Date.now()+t.O,xd(t,t.O)}function xd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pr(ze(t.gb,t),e)}function Yi(t){t.B&&(q.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(N0(this.j,this.A),this.K!=2&&(tr(),Xe(17)),_n(this),this.o=2,Vs(this)):xd(this,this.V-t)};function Vs(t){t.l.G==0||t.I||Jd(t.l,t)}function _n(t){Yi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ac(t.T),vd(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function wa(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ea(n.h,t))){if(!t.J&&Ea(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)pi(n),eo(n);else break e;Dc(n),Xe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=pr(ze(n.cb,n),6e3));if(1>=Pd(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Sn(n,11)}else if((t.J||n.g==t)&&pi(n),!ui(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const A=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=s.h;i.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(bc(i,i.h),i.h=null))}if(s.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Ae(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ep(s,s.H?s.ka:null,s.V),o.J){Ld(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Yi(a),yr(a)),s.g=o}else Wd(s);0<n.i.length&&to(n)}else u[0]!="stop"&&u[0]!="close"||Sn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Sn(n,7):Sc(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}tr(4)}catch{}}function M0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if($i(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function F0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if($i(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function kd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if($i(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=F0(t),s=M0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Nd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Nn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Nn){this.h=e!==void 0?e:t.h,fi(this,t.j),this.s=t.s,this.g=t.g,di(this,t.m),this.l=t.l,e=t.i;var n=new nr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Tl(this,n),this.o=t.o}else t&&(n=String(t).match(Nd))?(this.h=!!e,fi(this,n[1]||"",!0),this.s=Ns(n[2]||""),this.g=Ns(n[3]||"",!0),di(this,n[4]),this.l=Ns(n[5]||"",!0),Tl(this,n[6]||"",!0),this.o=Ns(n[7]||"")):(this.h=!!e,this.i=new nr(null,this.h))}Nn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rs(e,Cl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rs(e,Cl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Rs(n,n.charAt(0)=="/"?V0:U0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rs(n,Q0)),t.join("")};function jt(t){return new Nn(t)}function fi(t,e,n){t.j=n?Ns(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function di(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tl(t,e,n){e instanceof nr?(t.i=e,j0(t.i,t.h)):(n||(e=Rs(e,$0)),t.i=new nr(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Ji(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ns(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,L0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function L0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cl=/[#\/\?@]/g,U0=/[#\?:]/g,V0=/[#\?]/g,$0=/[#\?@]/g,Q0=/#/g;function nr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gn(t){t.g||(t.g=new Map,t.h=0,t.i&&P0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=nr.prototype;F.add=function(t,e){gn(this),this.i=null,t=vs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rd(t,e){gn(t),e=vs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bd(t,e){return gn(t),e=vs(t,e),t.g.has(e)}F.forEach=function(t,e){gn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.oa=function(){gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.W=function(t){gn(this);let e=[];if(typeof t=="string")Bd(this,t)&&(e=e.concat(this.g.get(vs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return gn(this),this.i=null,t=vs(this,t),Bd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Od(t,e,n){Rd(t,e),0<n.length&&(t.i=null,t.g.set(vs(t,e),lc(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function vs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function j0(t,e){e&&!t.j&&(gn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Rd(this,s),Od(this,r,n))},t)),t.j=e}var q0=class{constructor(e,n){this.h=e,this.g=n}};function Md(t){this.l=t||H0,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ga&&q.g.Ga()&&q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var H0=10;function Fd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Pd(t){return t.h?1:t.g?t.g.size:0}function Ea(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bc(t,e){t.g?t.g.add(e):t.h=e}function Ld(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Md.prototype.cancel=function(){if(this.i=Ud(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ud(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return lc(t.i)}function Tc(){}Tc.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Tc.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function K0(){this.g=new Tc}function z0(t,e,n){const s=n||"";try{kd(t,function(r,i){let o=r;fr(r)&&(o=yc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function G0(t,e){const n=new Ki;if(q.Image){const s=new Image;s.onload=Or(Fr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Or(Fr,n,s,"TestLoadImage: error",!1,e),s.onabort=Or(Fr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Or(Fr,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Fr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ar(t){this.l=t.ac||null,this.j=t.jb||!1}Ve(Ar,wc);Ar.prototype.g=function(){return new Xi(this.l,this.j)};Ar.prototype.i=function(t){return function(){return t}}({});function Xi(t,e){Fe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Cc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(Xi,Fe);var Cc=0;F=Xi.prototype;F.open=function(t,e){if(this.readyState!=Cc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,sr(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=Cc};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vd(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Vd(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vr(this):sr(this),this.readyState==3&&Vd(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,vr(this))};F.Ua=function(t){this.g&&(this.response=t,vr(this))};F.ga=function(){this.g&&vr(this)};function vr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,sr(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function sr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var W0=q.JSON.parse;function Ee(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$d,this.K=this.L=!1}Ve(Ee,Fe);var $d="",Y0=/^https?$/i,J0=["POST","PUT"];F=Ee.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ya.g(),this.C=this.u?bl(this.u):bl(ya),this.g.onreadystatechange=ze(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){_l(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=q.FormData&&t instanceof q.FormData,!(0<=sd(J0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qd(this),0<this.B&&((this.K=X0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ze(this.qa,this)):this.A=vc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){_l(this,i)}};function X0(t){return as&&g0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof uc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function _l(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qd(t),Zi(t)}function Qd(t){t.D||(t.D=!0,Ue(t,"complete"),Ue(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),Zi(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zi(this,!0)),Ee.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?jd(this):this.fb())};F.fb=function(){jd(this)};function jd(t){if(t.h&&typeof uc<"u"&&(!t.C[1]||Lt(t)!=4||t.aa()!=2)){if(t.v&&Lt(t)==4)vc(t.Ha,0,t);else if(Ue(t,"readystatechange"),Lt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Nd)[1]||null;if(!r&&q.self&&q.self.location){var i=q.self.location.protocol;r=i.substr(0,i.length-1)}s=!Y0.test(r?r.toLowerCase():"")}n=s}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var o=2<Lt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Qd(t)}}finally{Zi(t)}}}}function Zi(t,e){if(t.g){qd(t);const n=t.g,s=t.C[0]?ci:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=s}catch{}}}function qd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function Lt(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),W0(e)}};function Sl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $d:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Hd(t){let e="";return fc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function _c(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Hd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kd(t){this.Ca=0,this.i=[],this.j=new Ki,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xs("baseRetryDelayMs",5e3,t),this.bb=xs("retryDelaySeedMs",1e4,t),this.$a=xs("forwardChannelMaxRetries",2,t),this.ta=xs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Md(t&&t.concurrentRequestLimit),this.Fa=new K0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=Kd.prototype;F.ma=8;F.G=1;function Sc(t){if(zd(t),t.G==3){var e=t.U++,n=jt(t.F);Ae(n,"SID",t.I),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),wr(t,n),e=new mr(t,t.j,e,void 0),e.K=2,e.v=Ji(jt(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=tp(e.l,null),e.g.da(e.v)),e.F=Date.now(),yr(e)}Zd(t)}function eo(t){t.g&&(xc(t),t.g.cancel(),t.g=null)}function zd(t){eo(t),t.u&&(q.clearTimeout(t.u),t.u=null),pi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function to(t){Fd(t.h)||t.m||(t.m=!0,gd(t.Ja,t),t.C=0)}function Z0(t,e){return Pd(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=pr(ze(t.Ja,t,e),Xd(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new mr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=ad(i),cd(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Gd(this,r,e),n=jt(this.F),Ae(n,"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),wr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Hd(i)))+"&"+e:this.o&&_c(n,this.o,i)),bc(this.h,r),this.Ya&&Ae(n,"TYPE","init"),this.O?(Ae(n,"$req",e),Ae(n,"SID","null"),r.Z=!0,va(r,n,null)):va(r,n,e),this.G=2}}else this.G==3&&(t?Dl(this,t):this.i.length==0||Fd(this.h)||Dl(this))};function Dl(t,e){var n;e?n=e.m:n=t.U++;const s=jt(t.F);Ae(s,"SID",t.I),Ae(s,"RID",n),Ae(s,"AID",t.T),wr(t,s),t.o&&t.s&&_c(s,t.o,t.s),n=new mr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Gd(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),bc(t.h,n),va(n,s,e)}function wr(t,e){t.ia&&fc(t.ia,function(n,s){Ae(e,s,n)}),t.l&&kd({},function(n,s){Ae(e,s,n)})}function Gd(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ze(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{z0(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Wd(t){t.g||t.u||(t.Z=1,gd(t.Ia,t),t.A=0)}function Dc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=pr(ze(t.Ia,t),Xd(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,Yd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=pr(ze(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Xe(10),eo(this),Yd(this))};function xc(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function Yd(t){t.g=new mr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=jt(t.sa);Ae(e,"RID","rpc"),Ae(e,"SID",t.I),Ae(e,"CI",t.L?"0":"1"),Ae(e,"AID",t.T),Ae(e,"TYPE","xmlhttp"),wr(t,e),t.o&&t.s&&_c(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ji(jt(e)),n.s=null,n.P=!0,_d(n,t)}F.cb=function(){this.v!=null&&(this.v=null,eo(this),Dc(this),Xe(19))};function pi(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function Jd(t,e){var n=null;if(t.g==e){pi(t),xc(t),t.g=null;var s=2}else if(Ea(t.h,e))n=e.D,Ld(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=zi(),Ue(s,new Id(s,n)),to(t)}else Wd(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Z0(t,e)||s==2&&Dc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Sn(t,5);break;case 4:Sn(t,10);break;case 3:Sn(t,6);break;default:Sn(t,2)}}}function Xd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Sn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ze(t.kb,t);n||(n=new Nn("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||fi(n,"https"),Ji(n)),G0(n.toString(),s)}else Xe(2);t.G=0,t.l&&t.l.va(e),Zd(t),zd(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function Zd(t){if(t.G=0,t.la=[],t.l){const e=Ud(t.h);(e.length!=0||t.i.length!=0)&&(yl(t.la,e),yl(t.la,t.i),t.h.i.length=0,lc(t.i),t.i.length=0),t.l.ua()}}function ep(t,e,n){var s=n instanceof Nn?jt(n):new Nn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),di(s,s.m);else{var r=q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Nn(null,void 0);s&&fi(i,s),e&&(i.g=e),r&&di(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ae(s,n,e),Ae(s,"VER",t.ma),wr(t,s),s}function tp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ee(new Ar({jb:!0})):new Ee(t.ra),e.Ka(t.H),e}function np(){}F=np.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function gi(){if(as&&!(10<=Number(m0)))throw Error("Environmental error: no available transport.")}gi.prototype.g=function(t,e){return new at(t,e)};function at(t,e){Fe.call(this),this.g=new Kd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ui(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ui(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ws(this)}Ve(at,Fe);at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Xe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ep(t,null,t.V),to(t)};at.prototype.close=function(){Sc(this.g)};at.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=yc(t),t=n);e.i.push(new q0(e.ab++,t)),e.G==3&&to(e)};at.prototype.M=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,at.X.M.call(this)};function sp(t){Ec.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ve(sp,Ec);function rp(){Ic.call(this),this.status=1}Ve(rp,Ic);function ws(t){this.g=t}Ve(ws,np);ws.prototype.xa=function(){Ue(this.g,"a")};ws.prototype.wa=function(t){Ue(this.g,new sp(t))};ws.prototype.va=function(t){Ue(this.g,new rp)};ws.prototype.ua=function(){Ue(this.g,"b")};gi.prototype.createWebChannel=gi.prototype.g;at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;Gi.NO_ERROR=0;Gi.TIMEOUT=8;Gi.HTTP_ERROR=6;bd.COMPLETE="complete";Td.EventType=gr;gr.OPEN="a";gr.CLOSE="b";gr.ERROR="c";gr.MESSAGE="d";Fe.prototype.listen=Fe.prototype.N;Ee.prototype.listenOnce=Ee.prototype.O;Ee.prototype.getLastError=Ee.prototype.Oa;Ee.prototype.getLastErrorCode=Ee.prototype.Ea;Ee.prototype.getStatus=Ee.prototype.aa;Ee.prototype.getResponseJson=Ee.prototype.Sa;Ee.prototype.getResponseText=Ee.prototype.fa;Ee.prototype.send=Ee.prototype.da;Ee.prototype.setWithCredentials=Ee.prototype.Ka;var eI=function(){return new gi},tI=function(){return zi()},Uo=Gi,nI=bd,sI=Vn,xl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},rI=Ar,Pr=Td,iI=Ee;const kl="@firebase/firestore";/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let Es="9.17.0";/**
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
 */const Pn=new sc("@firebase/firestore");function Nl(){return Pn.logLevel}function L(t,...e){if(Pn.logLevel<=ie.DEBUG){const n=e.map(kc);Pn.debug(`Firestore (${Es}): ${t}`,...n)}}function qt(t,...e){if(Pn.logLevel<=ie.ERROR){const n=e.map(kc);Pn.error(`Firestore (${Es}): ${t}`,...n)}}function Ia(t,...e){if(Pn.logLevel<=ie.WARN){const n=e.map(kc);Pn.warn(`Firestore (${Es}): ${t}`,...n)}}function kc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+t;throw qt(e),new Error(e)}function de(t,e){t||j()}function G(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ip{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class aI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cI{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(de(typeof s.accessToken=="string"),new ip(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new Qe(e)}}class uI{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(de(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class lI{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new uI(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fI{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.A=n.token,new hI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class op{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=dI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function cs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new xe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new xe(0,0))}static max(){return new z(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class rr{constructor(e,n,s){n===void 0?n=0:n>e.length&&j(),s===void 0?s=e.length-n:s>e.length-n&&j(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return rr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends rr{construct(e,n,s){return new me(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new me(n)}static emptyPath(){return new me([])}}const pI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends rr{construct(e,n,s){return new He(e,n,s)}static isValidIdentifier(e){return pI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(me.fromString(e))}static fromName(e){return new U(me.fromString(e).popFirst(5))}static empty(){return new U(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new me(e.slice()))}}function gI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=z.fromTimestamp(s===1e9?new xe(n+1,0):new xe(n,s));return new ln(r,U.empty(),e)}function mI(t){return new ln(t.readTime,t.key,-1)}class ln{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ln(z.min(),U.empty(),-1)}static max(){return new ln(z.max(),U.empty(),-1)}}function yI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const AI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Er(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==AI)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ir(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Nc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Nc.at=-1;/**
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
 */class wI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ir{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ir&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Rl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ap(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function no(t){return t==null}function mi(t){return t===0&&1/t==-1/0}function EI(t){return typeof t=="number"&&Number.isInteger(t)&&!mi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ye(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const II=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(t){if(de(!!t),typeof t=="string"){let e=0;const n=II.exec(t);if(de(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function cp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function up(t){const e=t.mapValue.fields.__previous_value__;return cp(e)?up(e):e}function or(t){const e=hn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */const Lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ln(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cp(t)?4:bI(t)?9007199254740991:10:j()}function Mt(t,e){if(t===e)return!0;const n=Ln(t);if(n!==Ln(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return or(t).isEqual(or(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=hn(s.timestampValue),o=hn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return us(s.bytesValue).isEqual(us(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return _e(s.geoPointValue.latitude)===_e(r.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return _e(s.integerValue)===_e(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=_e(s.doubleValue),o=_e(r.doubleValue);return i===o?mi(i)===mi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return cs(t.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Rl(i)!==Rl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Mt(i[a],o[a])))return!1;return!0}(t,e);default:return j()}}function ar(t,e){return(t.values||[]).find(n=>Mt(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=Ln(t),s=Ln(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=_e(r.integerValue||r.doubleValue),a=_e(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bl(t.timestampValue,e.timestampValue);case 4:return Bl(or(t),or(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=us(r),a=us(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=oe(o[c],a[c]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(_e(r.latitude),_e(i.latitude));return o!==0?o:oe(_e(r.longitude),_e(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ls(o[c],a[c]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Lr.mapValue&&i===Lr.mapValue)return 0;if(r===Lr.mapValue)return 1;if(i===Lr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=oe(a[l],u[l]);if(h!==0)return h;const d=ls(o[a[l]],c[u[l]]);if(d!==0)return d}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function Bl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=hn(t),s=hn(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function hs(t){return ba(t)}function ba(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=hn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?us(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ba(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ba(s.fields[a])}`;return i+"}"}(t.mapValue):j();var e,n}function Ol(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ta(t){return!!t&&"integerValue"in t}function Rc(t){return!!t&&"arrayValue"in t}function Ml(t){return!!t&&"nullValue"in t}function Fl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zr(t){return!!t&&"mapValue"in t}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Is(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=$s(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class yi{constructor(e,n){this.position=e,this.inclusive=n}}function Pl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=U.comparator(U.fromName(o.referenceValue),n.key):s=ls(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ll(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class lp{}class Se extends lp{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new CI(e,n,s):n==="array-contains"?new DI(e,s):n==="in"?new xI(e,s):n==="not-in"?new kI(e,s):n==="array-contains-any"?new NI(e,s):new Se(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new _I(e,s):new SI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ls(n,this.value)):n!==null&&Ln(this.value)===Ln(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class bt extends lp{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new bt(e,n)}matches(e){return hp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hp(t){return t.op==="and"}function fp(t){return TI(t)&&hp(t)}function TI(t){for(const e of t.filters)if(e instanceof bt)return!1;return!0}function Ca(t){if(t instanceof Se)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(fp(t))return t.filters.map(e=>Ca(e)).join(",");{const e=t.filters.map(n=>Ca(n)).join(",");return`${t.op}(${e})`}}function dp(t,e){return t instanceof Se?function(n,s){return s instanceof Se&&n.op===s.op&&n.field.isEqual(s.field)&&Mt(n.value,s.value)}(t,e):t instanceof bt?function(n,s){return s instanceof bt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&dp(i,s.filters[o]),!0):!1}(t,e):void j()}function pp(t){return t instanceof Se?function(e){return`${e.field.canonicalString()} ${e.op} ${hs(e.value)}`}(t):t instanceof bt?function(e){return e.op.toString()+" {"+e.getFilters().map(pp).join(" ,")+"}"}(t):"Filter"}class CI extends Se{constructor(e,n,s){super(e,n,s),this.key=U.fromName(s.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class _I extends Se{constructor(e,n){super(e,"in",n),this.keys=gp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SI extends Se{constructor(e,n){super(e,"not-in",n),this.keys=gp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>U.fromName(s.referenceValue))}class DI extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rc(n)&&ar(n.arrayValue,this.value)}}class xI extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ar(this.value.arrayValue,n)}}class kI extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if(ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ar(this.value.arrayValue,n)}}class NI extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ar(this.value.arrayValue,s))}}/**
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
 */class Qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function RI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ur(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ur(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ur(this.root,e,this.comparator,!0)}}class Ur{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Le.RED,this.left=r??Le.EMPTY,this.right=i??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Le(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ke{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ul(this.data.getIterator())}getIteratorFrom(e){return new Ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class Ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new wt([])}unionWith(e){let n=new ke(He.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!zr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=He.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=$s(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());zr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];zr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Is(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ut($s(this.value))}}function mp(t){const e=[];return Is(t.fields,(n,s)=>{const r=new He([n]);if(zr(s)){const i=mp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new wt(e)}/**
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
 */class je{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new je(e,0,z.min(),z.min(),z.min(),ut.empty(),0)}static newFoundDocument(e,n,s,r){return new je(e,1,n,z.min(),s,r,0)}static newNoDocument(e,n){return new je(e,2,n,z.min(),z.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,z.min(),z.min(),ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class BI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Vl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new BI(t,e,n,s,r,i,o)}function Bc(t){const e=G(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ca(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),no(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>hs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>hs(s)).join(",")),e.ft=n}return e.ft}function Oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ll(t.startAt,e.startAt)&&Ll(t.endAt,e.endAt)}function _a(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class br{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function OI(t,e,n,s,r,i,o,a){return new br(t,e,n,s,r,i,o,a)}function yp(t){return new br(t)}function $l(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ap(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Mc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function vp(t){return t.collectionGroup!==null}function ts(t){const e=G(t);if(e.dt===null){e.dt=[];const n=Mc(e),s=Ap(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Qs(n)),e.dt.push(new Qs(He.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Qs(He.keyField(),i))}}}return e.dt}function Ht(t){const e=G(t);if(!e._t)if(e.limitType==="F")e._t=Vl(e.path,e.collectionGroup,ts(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ts(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Qs(i.field,o))}const s=e.endAt?new yi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new yi(e.startAt.position,e.startAt.inclusive):null;e._t=Vl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Sa(t,e){e.getFirstInequalityField(),Mc(t);const n=t.filters.concat([e]);return new br(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Da(t,e,n){return new br(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function so(t,e){return Oc(Ht(t),Ht(e))&&t.limitType===e.limitType}function wp(t){return`${Bc(Ht(t))}|lt:${t.limitType}`}function xa(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>pp(s)).join(", ")}]`),no(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>hs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>hs(s)).join(",")),`Target(${n})`}(Ht(t))}; limitType=${t.limitType})`}function ro(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):U.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of ts(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Pl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ts(n),s)||n.endAt&&!function(r,i,o){const a=Pl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ts(n),s))}(t,e)}function MI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ep(t){return(e,n)=>{let s=!1;for(const r of ts(t)){const i=FI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function FI(t,e,n){const s=t.field.isKeyField()?U.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ls(a,c):j()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return j()}}/**
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
 */function Ip(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mi(e)?"-0":e}}function bp(t){return{integerValue:""+t}}function PI(t,e){return EI(e)?bp(e):Ip(t,e)}/**
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
 */class io{constructor(){this._=void 0}}function LI(t,e,n){return t instanceof Ai?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof cr?Cp(t,e):t instanceof ur?_p(t,e):function(s,r){const i=Tp(s,r),o=Ql(i)+Ql(s.gt);return Ta(i)&&Ta(s.gt)?bp(o):Ip(s.yt,o)}(t,e)}function UI(t,e,n){return t instanceof cr?Cp(t,e):t instanceof ur?_p(t,e):n}function Tp(t,e){return t instanceof vi?Ta(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ai extends io{}class cr extends io{constructor(e){super(),this.elements=e}}function Cp(t,e){const n=Sp(e);for(const s of t.elements)n.some(r=>Mt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ur extends io{constructor(e){super(),this.elements=e}}function _p(t,e){let n=Sp(e);for(const s of t.elements)n=n.filter(r=>!Mt(r,s));return{arrayValue:{values:n}}}class vi extends io{constructor(e,n){super(),this.yt=e,this.gt=n}}function Ql(t){return _e(t.integerValue||t.doubleValue)}function Sp(t){return Rc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof cr&&s instanceof cr||n instanceof ur&&s instanceof ur?cs(n.elements,s.elements,Mt):n instanceof vi&&s instanceof vi?Mt(n.gt,s.gt):n instanceof Ai&&s instanceof Ai}(t.transform,e.transform)}class $I{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oo{}function Dp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kp(t.key,Vt.none()):new Tr(t.key,t.data,Vt.none());{const n=t.data,s=ut.empty();let r=new ke(He.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new $n(t.key,s,new wt(r.toArray()),Vt.none())}}function QI(t,e,n){t instanceof Tr?function(s,r,i){const o=s.value.clone(),a=ql(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof $n?function(s,r,i){if(!Gr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ql(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(xp(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function js(t,e,n,s){return t instanceof Tr?function(r,i,o,a){if(!Gr(r.precondition,i))return o;const c=r.value.clone(),u=Hl(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof $n?function(r,i,o,a){if(!Gr(r.precondition,i))return o;const c=Hl(r.fieldTransforms,a,i),u=i.data;return u.setAll(xp(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Gr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function jI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Tp(s.transform,r||null);i!=null&&(n===null&&(n=ut.empty()),n.set(s.field,i))}return n||null}function jl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&cs(n,s,(r,i)=>VI(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tr extends oo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class $n extends oo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ql(t,e,n){const s=new Map;de(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,UI(o,a,n[r]))}return s}function Hl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,LI(i,o,e))}return s}class kp extends oo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qI extends oo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HI{constructor(e){this.count=e}}/**
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
 */var Ce,te;function KI(t){switch(t){default:return j();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Np(t){if(t===void 0)return qt("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ce.OK:return E.OK;case Ce.CANCELLED:return E.CANCELLED;case Ce.UNKNOWN:return E.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return E.INTERNAL;case Ce.UNAVAILABLE:return E.UNAVAILABLE;case Ce.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ce.NOT_FOUND:return E.NOT_FOUND;case Ce.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ce.ABORTED:return E.ABORTED;case Ce.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ce.DATA_LOSS:return E.DATA_LOSS;default:return j()}}(te=Ce||(Ce={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ap(this.inner)}size(){return this.innerSize}}/**
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
 */const zI=new Re(U.comparator);function Kt(){return zI}const Rp=new Re(U.comparator);function Bs(...t){let e=Rp;for(const n of t)e=e.insert(n.key,n);return e}function Bp(t){let e=Rp;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Dn(){return qs()}function Op(){return qs()}function qs(){return new bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const GI=new Re(U.comparator),WI=new ke(U.comparator);function ee(...t){let e=WI;for(const n of t)e=e.add(n);return e}const YI=new ke(oe);function Mp(){return YI}/**
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
 */class ao{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Cr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ao(z.min(),r,Mp(),Kt(),ee())}}class Cr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Cr(s,n,ee(),ee(),ee())}}/**
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
 */class Wr{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Fp{constructor(e,n){this.targetId=e,this.Et=n}}class Pp{constructor(e,n,s=Ye.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Kl{constructor(){this.At=0,this.Rt=Gl(),this.bt=Ye.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ee(),n=ee(),s=ee();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:j()}}),new Cr(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Gl()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class JI{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Kt(),this.qt=zl(),this.Ut=new ke(oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(_a(i))if(s===0){const o=new U(i.path);this.Qt(n,o,je.newNoDocument(o,z.min()))}else de(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&_a(a.target)){const c=new U(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,je.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ee();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new ao(e,n,this.Ut,this.Lt,s);return this.Lt=Kt(),this.qt=zl(),this.Ut=new ke(oe),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Kl,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ke(oe),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Kl),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function zl(){return new Re(U.comparator)}function Gl(){return new Re(U.comparator)}/**
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
 */const XI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ZI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),eb=(()=>({and:"AND",or:"OR"}))();class tb{constructor(e,n){this.databaseId=e,this.wt=n}}function wi(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lp(t,e){return t.wt?e.toBase64():e.toUint8Array()}function nb(t,e){return wi(t,e.toTimestamp())}function Bt(t){return de(!!t),z.fromTimestamp(function(e){const n=hn(e);return new xe(n.seconds,n.nanos)}(t))}function Fc(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Up(t){const e=me.fromString(t);return de(jp(e)),e}function ka(t,e){return Fc(t.databaseId,e.path)}function Vo(t,e){const n=Up(e);if(n.get(1)!==t.databaseId.projectId)throw new B(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(Vp(n))}function Na(t,e){return Fc(t.databaseId,e)}function sb(t){const e=Up(t);return e.length===4?me.emptyPath():Vp(e)}function Ra(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vp(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wl(t,e,n){return{name:ka(t,e),fields:n.value.mapValue.fields}}function rb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(de(u===void 0||typeof u=="string"),Ye.fromBase64String(u||"")):(de(u===void 0||u instanceof Uint8Array),Ye.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:Np(c.code);return new B(u,c.message||"")}(o);n=new Pp(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Vo(t,s.document.name),i=Bt(s.document.updateTime),o=s.document.createTime?Bt(s.document.createTime):z.min(),a=new ut({mapValue:{fields:s.document.fields}}),c=je.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Wr(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Vo(t,s.document),i=s.readTime?Bt(s.readTime):z.min(),o=je.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Wr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Vo(t,s.document),i=s.removedTargetIds||[];n=new Wr([],i,r,null)}else{if(!("filter"in e))return j();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new HI(r),o=s.targetId;n=new Fp(o,i)}}return n}function ib(t,e){let n;if(e instanceof Tr)n={update:Wl(t,e.key,e.value)};else if(e instanceof kp)n={delete:ka(t,e.key)};else if(e instanceof $n)n={update:Wl(t,e.key,e.data),updateMask:pb(e.fieldMask)};else{if(!(e instanceof qI))return j();n={verify:ka(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ai)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof cr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ur)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof vi)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw j()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:nb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:j()}(t,e.precondition)),n}function ob(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Bt(s.updateTime):Bt(r);return i.isEqual(z.min())&&(i=Bt(r)),new $I(i,s.transformResults||[])}(n,e))):[]}function ab(t,e){return{documents:[Na(t,e.path)]}}function cb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Na(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Na(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Qp(bt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Gn(l.field),direction:hb(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||no(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ub(t){let e=sb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){de(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=$p(l);return h instanceof bt&&fp(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Qs(Wn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,no(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new yi(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new yi(d,h)}(n.endAt)),OI(e,r,o,i,a,"F",c,u)}function lb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function $p(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Wn(e.unaryFilter.field);return Se.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Wn(e.unaryFilter.field);return Se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Wn(e.unaryFilter.field);return Se.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wn(e.unaryFilter.field);return Se.create(i,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(t):t.fieldFilter!==void 0?function(e){return Se.create(Wn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return bt.create(e.compositeFilter.filters.map(n=>$p(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(t):j()}function hb(t){return XI[t]}function fb(t){return ZI[t]}function db(t){return eb[t]}function Gn(t){return{fieldPath:t.canonicalString()}}function Wn(t){return He.fromServerFormat(t.fieldPath)}function Qp(t){return t instanceof Se?function(e){if(e.op==="=="){if(Fl(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NAN"}};if(Ml(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fl(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NOT_NAN"}};if(Ml(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gn(e.field),op:fb(e.op),value:e.value}}}(t):t instanceof bt?function(e){const n=e.getFilters().map(s=>Qp(s));return n.length===1?n[0]:{compositeFilter:{op:db(e.op),filters:n}}}(t):j()}function pb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&QI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=js(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=js(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Op();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Dp(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&cs(this.mutations,e.mutations,(n,s)=>jl(n,s))&&cs(this.baseMutations,e.baseMutations,(n,s)=>jl(n,s))}}class Pc{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){de(e.mutations.length===s.length);let r=GI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Pc(e,n,s,r)}}/**
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
 */class mb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Rn{constructor(e,n,s,r,i=z.min(),o=z.min(),a=Ye.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class yb{constructor(e){this.ie=e}}function Ab(t){const e=ub({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Da(e,e.limit,"L"):e}/**
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
 */class vb{constructor(){this.Je=new wb}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(ln.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(ln.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class wb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ke(me.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ke(me.comparator)).toArray()}}/**
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
 */class fs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new fs(0)}static vn(){return new fs(-1)}}/**
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
 */class Eb{constructor(){this.changes=new bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ib{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&js(s.mutation,r,wt.empty(),xe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ee()){const r=Dn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Bs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Dn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ee()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Kt();const o=qs(),a=qs();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof $n)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),js(l.mutation,u,l.mutation.getFieldMask(),xe.now())):o.set(u.key,wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Ib(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=qs();let r=new Re((o,a)=>o-a),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||wt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ee()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Op();l.forEach(d=>{if(!i.has(d)){const g=Dp(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Dn());let a=-1,c=i;return o.next(u=>T.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?T.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ee())).next(l=>({batchId:a,changes:Bp(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(s=>{let r=Bs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Bs();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(u,l){return new br(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,je.newInvalidDocument(u)))});let o=Bs();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&js(u.mutation,c,wt.empty(),xe.now()),ro(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Tb{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Bt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Ab(s.bundledQuery),readTime:Bt(s.readTime)}}(n)),T.resolve()}}/**
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
 */class Cb{constructor(){this.overlays=new Re(U.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Dn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Dn(),i=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Re((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Dn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Dn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return T.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new mb(n,s));let i=this.es.get(n);i===void 0&&(i=ee(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Lc{constructor(){this.ns=new ke(Oe.ss),this.rs=new ke(Oe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Oe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Oe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new U(new me([])),s=new Oe(n,e),r=new Oe(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new U(new me([])),s=new Oe(n,e),r=new Oe(n,e+1);let i=ee();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Oe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return U.comparator(e.key,n.key)||oe(e._s,n._s)}static os(e,n){return oe(e._s,n._s)||U.comparator(e.key,n.key)}}/**
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
 */class _b{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ke(Oe.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Oe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Oe(n,0),r=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ke(oe);return n.forEach(r=>{const i=new Oe(r,0),o=new Oe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;U.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new U(i),0);let a=new ke(oe);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){de(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(n.mutations,r=>{const i=new Oe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Oe(n,0),r=this.gs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Sb{constructor(e){this.Es=e,this.docs=new Re(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let s=Kt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():je.newInvalidDocument(r))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Kt();const o=n.path,a=new U(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||yI(mI(l),s)<=0||(r.has(l.key)||ro(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,s,r){j()}As(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Db(this)}getSize(e){return T.resolve(this.size)}}class Db extends Eb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class xb{constructor(e){this.persistence=e,this.Rs=new bs(n=>Bc(n),Oc),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Lc,this.targetCount=0,this.vs=fs.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
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
 */class kb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Nc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new xb(this),this.indexManager=new vb,this.remoteDocumentCache=function(s){return new Sb(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new yb(n),this.Ns=new Tb(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Cb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new _b(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){L("MemoryPersistence","Starting transaction:",e);const r=new Nb(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Nb extends vI{constructor(e){super(),this.currentSequenceNumber=e}}class Uc{constructor(e){this.persistence=e,this.Fs=new Lc,this.$s=null}static Bs(e){return new Uc(e)}get Ls(){if(this.$s)return this.$s;throw j()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const r=U.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Vc{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ee(),r=ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Vc(e,n.fromCache,s,r)}}/**
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
 */class Rb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if($l(n))return T.resolve(null);let s=Ht(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Da(n,null,"F"),s=Ht(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ee(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Da(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return $l(n)||r.isEqual(z.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Nl()<=ie.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xa(n)),this.Bi(e,o,n,gI(r,-1)))})}Fi(e,n){let s=new ke(Ep(e));return n.forEach((r,i)=>{ro(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Nl()<=ie.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",xa(n)),this.Ni.getDocumentsMatchingQuery(e,n,ln.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Bb{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Re(oe),this.Ui=new bs(i=>Bc(i),Oc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Ob(t,e,n,s){return new Bb(t,e,n,s)}async function qp(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ee();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Mb(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(A=>{const w=c.docVersions.get(g);de(w!==null),A.version.compareTo(w)<0&&(l.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),u.addEntry(A)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ee();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Hp(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Fb(t,e){const n=G(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ye.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(A,w,k){return A.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=Kt(),u=ee();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Pb(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(z.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function Pb(t,e,n){let s=ee(),r=ee();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Kt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Lb(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ub(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Rn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Ba(t,e,n){const s=G(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ir(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Yl(t,e,n){const s=G(t);let r=z.min(),i=ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=G(a),h=l.Ui.get(u);return h!==void 0?T.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Ht(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:z.min(),n?i:ee())).next(a=>(Vb(s,MI(e),a),{documents:a,Hi:i})))}function Vb(t,e,n){let s=t.Ki.get(e)||z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Jl{constructor(){this.activeTargetIds=Mp()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $b{constructor(){this.Lr=new Jl,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Jl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Qb{Ur(e){}shutdown(){}}/**
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
 */class Xl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const jb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class qb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class Hb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);L("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(L("RestConnection","Received: ",c),c),c=>{throw Ia("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Es,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=jb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new iI;a.setWithCredentials(!0),a.listenOnce(nI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Uo.NO_ERROR:const u=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Uo.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new B(E.DEADLINE_EXCEEDED,"Request time out"));break;case Uo.HTTP_ERROR:const l=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(A){const w=A.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(w)>=0?w:E.UNKNOWN}(d.status);o(new B(g,d.message))}else o(new B(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(E.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=eI(),o=tI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new rI({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");L("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new qb({Hr:A=>{h?L("Connection","Not sending because WebChannel is closed:",A):(l||(L("Connection","Opening WebChannel transport."),u.open(),l=!0),L("Connection","WebChannel sending:",A),u.send(A))},Jr:()=>u.close()}),g=(A,w,k)=>{A.listen(w,N=>{try{k(N)}catch(O){setTimeout(()=>{throw O},0)}})};return g(u,Pr.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),g(u,Pr.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),d.io())}),g(u,Pr.EventType.ERROR,A=>{h||(h=!0,Ia("Connection","WebChannel transport errored:",A),d.io(new B(E.UNAVAILABLE,"The operation could not be completed")))}),g(u,Pr.EventType.MESSAGE,A=>{var w;if(!h){const k=A.data[0];de(!!k);const N=k,O=N.error||((w=N[0])===null||w===void 0?void 0:w.error);if(O){L("Connection","WebChannel received error:",O);const P=O.status;let W=function(Be){const Pe=Ce[Be];if(Pe!==void 0)return Np(Pe)}(P),ae=O.message;W===void 0&&(W=E.INTERNAL,ae="Unknown error status: "+P+" with message "+O.message),h=!0,d.io(new B(W,ae)),u.close()}else L("Connection","WebChannel received:",k),d.ro(k)}}),g(o,sI.STAT_EVENT,A=>{A.stat===xl.PROXY?L("Connection","Detected buffering proxy"):A.stat===xl.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function $o(){return typeof document<"u"?document:null}/**
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
 */function co(t){return new tb(t,!0)}class Kp{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class zp{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Kp(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(qt(n.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new B(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kb extends zp{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=rb(this.yt,e),s=function(r){if(!("targetChange"in r))return z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?z.min():i.readTime?Bt(i.readTime):z.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Ra(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=_a(a)?{documents:ab(r,a)}:{query:cb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Lp(r,i.resumeToken):i.snapshotVersion.compareTo(z.min())>0&&(o.readTime=wi(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=lb(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Ra(this.yt),n.removeTarget=e,this.Bo(n)}}class zb extends zp{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=ob(e.writeResults,e.commitTime),s=Bt(e.commitTime);return this.listener.Zo(s,n)}return de(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ra(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ib(this.yt,s))};this.Bo(n)}}/**
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
 */class Gb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new B(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(E.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(E.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Wb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(qt(n),this.ou=!1):L("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class Yb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Qn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c._u.add(4),await _r(c),c.gu.set("Unknown"),c._u.delete(4),await uo(c)}(this))})}),this.gu=new Wb(s,r)}}async function uo(t){if(Qn(t))for(const e of t.wu)await e(!0)}async function _r(t){for(const e of t.wu)await e(!1)}function Gp(t,e){const n=G(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),jc(n)?Qc(n):Ts(n).ko()&&$c(n,e))}function Wp(t,e){const n=G(t),s=Ts(n);n.du.delete(e),s.ko()&&Yp(n,e),n.du.size===0&&(s.ko()?s.Fo():Qn(n)&&n.gu.set("Unknown"))}function $c(t,e){t.yu.Ot(e.targetId),Ts(t).zo(e)}function Yp(t,e){t.yu.Ot(e),Ts(t).Ho(e)}function Qc(t){t.yu=new JI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Ts(t).start(),t.gu.uu()}function jc(t){return Qn(t)&&!Ts(t).No()&&t.du.size>0}function Qn(t){return G(t)._u.size===0}function Jp(t){t.yu=void 0}async function Jb(t){t.du.forEach((e,n)=>{$c(t,e)})}async function Xb(t,e){Jp(t),jc(t)?(t.gu.hu(e),Qc(t)):t.gu.set("Unknown")}async function Zb(t,e,n){if(t.gu.set("Online"),e instanceof Pp&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ei(t,s)}else if(e instanceof Wr?t.yu.Kt(e):e instanceof Fp?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(z.min()))try{const s=await Hp(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ye.EMPTY_BYTE_STRING,c.snapshotVersion)),Yp(r,a);const u=new Rn(c.target,a,1,c.sequenceNumber);$c(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await Ei(t,s)}}async function Ei(t,e,n){if(!Ir(e))throw e;t._u.add(1),await _r(t),t.gu.set("Offline"),n||(n=()=>Hp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await uo(t)})}function Xp(t,e){return e().catch(n=>Ei(t,n,e))}async function lo(t){const e=G(t),n=fn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;eT(e);)try{const r=await Lb(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,tT(e,r)}catch(r){await Ei(e,r)}Zp(e)&&eg(e)}function eT(t){return Qn(t)&&t.fu.length<10}function tT(t,e){t.fu.push(e);const n=fn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Zp(t){return Qn(t)&&!fn(t).No()&&t.fu.length>0}function eg(t){fn(t).start()}async function nT(t){fn(t).eu()}async function sT(t){const e=fn(t);for(const n of t.fu)e.Xo(n.mutations)}async function rT(t,e,n){const s=t.fu.shift(),r=Pc.from(s,e,n);await Xp(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await lo(t)}async function iT(t,e){e&&fn(t).Yo&&await async function(n,s){if(r=s.code,KI(r)&&r!==E.ABORTED){const i=n.fu.shift();fn(n).Mo(),await Xp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await lo(n)}var r}(t,e),Zp(t)&&eg(t)}async function Zl(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const s=Qn(n);n._u.add(3),await _r(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await uo(n)}async function oT(t,e){const n=G(t);e?(n._u.delete(2),await uo(n)):e||(n._u.add(2),await _r(n),n.gu.set("Unknown"))}function Ts(t){return t.pu||(t.pu=function(e,n,s){const r=G(e);return r.su(),new Kb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Jb.bind(null,t),Zr:Xb.bind(null,t),Wo:Zb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),jc(t)?Qc(t):t.gu.set("Unknown")):(await t.pu.stop(),Jp(t))})),t.pu}function fn(t){return t.Iu||(t.Iu=function(e,n,s){const r=G(e);return r.su(),new zb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:nT.bind(null,t),Zr:iT.bind(null,t),tu:sT.bind(null,t),Zo:rT.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await lo(t)):(await t.Iu.stop(),t.fu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class qc{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new qc(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hc(t,e){if(qt("AsyncQueue",`${e}: ${t}`),Ir(t))return new B(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ns{constructor(e){this.comparator=e?(n,s)=>e(n,s)||U.comparator(n.key,s.key):(n,s)=>U.comparator(n.key,s.key),this.keyedMap=Bs(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ns;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class eh{constructor(){this.Tu=new Re(U.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):j():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ds{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ds(e,n,ns.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&so(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class aT{constructor(){this.Au=void 0,this.listeners=[]}}class cT{constructor(){this.queries=new bs(e=>wp(e),so),this.onlineState="Unknown",this.Ru=new Set}}async function uT(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new aT),r)try{i.Au=await n.onListen(s)}catch(o){const a=Hc(o,`Initialization of query '${xa(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Kc(n)}async function lT(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function hT(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Kc(n)}function fT(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Kc(t){t.Ru.forEach(e=>{e.next()})}class dT{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ds(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class tg{constructor(e){this.key=e}}class ng{constructor(e){this.key=e}}class pT{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ee(),this.mutatedKeys=ee(),this.Gu=Ep(e),this.Qu=new ns(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new eh,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=ro(this.query,h)?h:null,A=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?A!==w&&(s.track({type:3,doc:g}),k=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),k=!0):d&&!g&&(s.track({type:1,doc:d}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const g=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return g(h)-g(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new ds(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new eh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ee(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new ng(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new tg(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ee();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ds.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class gT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class mT{constructor(e){this.key=e,this.nc=!1}}class yT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new bs(a=>wp(a),so),this.rc=new Map,this.oc=new Set,this.uc=new Re(U.comparator),this.cc=new Map,this.ac=new Lc,this.hc={},this.lc=new Map,this.fc=fs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function AT(t,e){const n=DT(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Ub(n.localStore,Ht(e));n.isPrimaryClient&&Gp(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await vT(n,e,s,a==="current",o.resumeToken)}return r}async function vT(t,e,n,s,r){t._c=(h,d,g)=>async function(A,w,k,N){let O=w.view.Wu(k);O.$i&&(O=await Yl(A.localStore,w.query,!1).then(({documents:ae})=>w.view.Wu(ae,O)));const P=N&&N.targetChanges.get(w.targetId),W=w.view.applyChanges(O,A.isPrimaryClient,P);return nh(A,w.targetId,W.Xu),W.snapshot}(t,h,d,g);const i=await Yl(t.localStore,e,!0),o=new pT(e,i.Hi),a=o.Wu(i.documents),c=Cr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);nh(t,n,u.Xu);const l=new gT(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function wT(t,e){const n=G(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!so(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ba(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wp(n.remoteStore,s.targetId),Oa(n,s.targetId)}).catch(Er)):(Oa(n,s.targetId),await Ba(n.localStore,s.targetId,!0))}async function ET(t,e,n){const s=xT(t);try{const r=await function(i,o){const a=G(i),c=xe.now(),u=o.reduce((d,g)=>d.add(g.key),ee());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Kt(),A=ee();return a.Gi.getEntries(d,u).next(w=>{g=w,g.forEach((k,N)=>{N.isValidDocument()||(A=A.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(w=>{l=w;const k=[];for(const N of o){const O=jI(N,l.get(N.key).overlayedDocument);O!=null&&k.push(new $n(N.key,O,mp(O.value.mapValue),Vt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(w=>{h=w;const k=w.applyToLocalDocumentSet(l,A);return a.documentOverlayCache.saveOverlays(d,w.batchId,k)})}).then(()=>({batchId:h.batchId,changes:Bp(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Re(oe)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Sr(s,r.changes),await lo(s.remoteStore)}catch(r){const i=Hc(r,"Failed to persist write");n.reject(i)}}async function sg(t,e){const n=G(t);try{const s=await Fb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(de(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?de(o.nc):r.removedDocuments.size>0&&(de(o.nc),o.nc=!1))}),await Sr(n,s,e)}catch(s){await Er(s)}}function th(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Kc(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function IT(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Re(U.comparator);o=o.insert(i,je.newNoDocument(i,z.min()));const a=ee().add(i),c=new ao(z.min(),new Map,new ke(oe),o,a);await sg(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),zc(s)}else await Ba(s.localStore,e,!1).then(()=>Oa(s,e,n)).catch(Er)}async function bT(t,e){const n=G(t),s=e.batch.batchId;try{const r=await Mb(n.localStore,e);ig(n,s,null),rg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Sr(n,r)}catch(r){await Er(r)}}async function TT(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(de(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);ig(s,e,n),rg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Sr(s,r)}catch(r){await Er(r)}}function rg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ig(t,e,n){const s=G(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Oa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||og(t,s)})}function og(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Wp(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),zc(t))}function nh(t,e,n){for(const s of n)s instanceof tg?(t.ac.addReference(s.key,e),CT(t,s)):s instanceof ng?(L("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||og(t,s.key)):j()}function CT(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(L("SyncEngine","New document in limbo: "+n),t.oc.add(s),zc(t))}function zc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new U(me.fromString(e)),s=t.fc.next();t.cc.set(s,new mT(n)),t.uc=t.uc.insert(n,s),Gp(t.remoteStore,new Rn(Ht(yp(n.path)),s,2,Nc.at))}}async function Sr(t,e,n){const s=G(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Vc.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=G(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>T.forEach(c,h=>T.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>T.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Ir(l))throw l;L("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,A=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,A)}}}(s.localStore,i))}async function _T(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const s=await qp(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new B(E.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Sr(n,s.ji)}}function ST(t,e){const n=G(t),s=n.cc.get(e);if(s&&s.nc)return ee().add(s.key);{let r=ee();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function DT(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ST.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IT.bind(null,e),e.sc.Wo=hT.bind(null,e.eventManager),e.sc.wc=fT.bind(null,e.eventManager),e}function xT(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TT.bind(null,e),e}class kT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=co(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Ob(this.persistence,new Rb,e.initialUser,this.yt)}yc(e){return new kb(Uc.Bs,this.yt)}gc(e){return new $b}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>th(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_T.bind(null,this.syncEngine),await oT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cT}createDatastore(e){const n=co(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Hb(r));var r;return function(i,o,a,c){return new Gb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>th(this.syncEngine,a,0),o=Xl.C()?new Xl:new Qb,new Yb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new yT(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);L("RemoteStore","RemoteStore shutting down."),n._u.add(5),await _r(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function ag(t,e,n){if(!n)throw new B(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RT(t,e,n,s){if(e===!0&&s===!0)throw new B(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sh(t){if(!U.isDocumentKey(t))throw new B(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rh(t){if(U.isDocumentKey(t))throw new B(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ho(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function Ii(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ho(t);throw new B(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const ih=new Map;class oh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,RT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class fo{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oI;switch(n.type){case"gapi":const s=n.client;return new lI(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ih.get(e);n&&(L("ComponentProvider","Removing Datastore"),ih.delete(e),n.terminate())}(this),Promise.resolve()}}function BT(t,e,n,s={}){var r;const i=(t=Ii(t,fo))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ia("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Qe.MOCK_USER;else{o=bv(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new B(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Qe(c)}t._authCredentials=new aI(new ip(o,a))}}/**
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
 */class dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class Cs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Cs(this.firestore,e,this._query)}}class rn extends Cs{constructor(e,n,s){super(e,n,yp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new U(e))}withConverter(e){return new rn(this.firestore,e,this._path)}}function cg(t,e,...n){if(t=cn(t),ag("collection","path",e),t instanceof fo){const s=me.fromString(e,...n);return rh(s),new rn(t,null,s)}{if(!(t instanceof dt||t instanceof rn))throw new B(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return rh(s),new rn(t.firestore,null,s)}}function OT(t,e,...n){if(t=cn(t),arguments.length===1&&(e=op.R()),ag("doc","path",e),t instanceof fo){const s=me.fromString(e,...n);return sh(s),new dt(t,null,new U(s))}{if(!(t instanceof dt||t instanceof rn))throw new B(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return sh(s),new dt(t.firestore,t instanceof rn?t.converter:null,new U(s))}}/**
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
 */class MT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):qt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class FT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Qe.UNAUTHENTICATED,this.clientId=op.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Hc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function PT(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await qp(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function LT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UT(t);L("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Zl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zl(e.remoteStore,i)),t.onlineComponents=e}async function UT(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await PT(t,new kT)),t.offlineComponents}async function ug(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await LT(t,new NT)),t.onlineComponents}function VT(t){return ug(t).then(e=>e.syncEngine)}async function $T(t){const e=await ug(t),n=e.eventManager;return n.onListen=AT.bind(null,e.syncEngine),n.onUnlisten=wT.bind(null,e.syncEngine),n}function QT(t,e,n={}){const s=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new MT({next:h=>{i.enqueueAndForget(()=>lT(r,l)),h.fromCache&&a.source==="server"?c.reject(new B(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new dT(o,u,{includeMetadataChanges:!0,Nu:!0});return uT(r,l)}(await $T(t),t.asyncQueue,e,n,s)),s.promise}class jT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Kp(this,"async_queue_retry"),this.Wc=()=>{const n=$o();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=$o();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=$o();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new sn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ir(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw qt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=qc.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&j()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Gc extends fo{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new jT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hg(this),this._firestoreClient.terminate()}}function qT(t,e){const n=typeof t=="object"?t:Nf(),s=typeof t=="string"?t:e||"(default)",r=hr(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=wv("firestore");i&&BT(r,...i)}return r}function lg(t){return t._firestoreClient||hg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hg(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new wI(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new FT(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ps(Ye.fromBase64String(e))}catch(n){throw new B(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ps(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fg{constructor(e){this._methodName=e}}/**
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
 */class Yc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const HT=/^__.*__$/;class KT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new $n(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tr(e,this.data,n,this.fieldTransforms)}}function dg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Jc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return bi(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(dg(this.sa)&&HT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class zT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||co(e)}da(e,n,s,r=!1){return new Jc({sa:e,methodName:n,fa:s,path:He.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function pg(t){const e=t._freezeSettings(),n=co(t._databaseId);return new zT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GT(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);yg("Data must be an object, but it was:",o,s);const a=gg(s,o);let c,u;if(i.merge)c=new wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=YT(e,h,n);if(!o.contains(d))throw new B(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);XT(l,d)||l.push(d)}c=new wt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new KT(new ut(a),c,u)}function WT(t,e,n,s=!1){return Xc(n,t.da(s?4:3,e))}function Xc(t,e){if(mg(t=cn(t)))return yg("Unsupported field value:",e,t),gg(t,e);if(t instanceof fg)return function(n,s){if(!dg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Xc(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=cn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return PI(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=xe.fromDate(n);return{timestampValue:wi(s.yt,r)}}if(n instanceof xe){const r=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wi(s.yt,r)}}if(n instanceof Yc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ps)return{bytesValue:Lp(s.yt,n._byteString)};if(n instanceof dt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Fc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ho(n)}`)}(t,e)}function gg(t,e){const n={};return ap(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(t,(s,r)=>{const i=Xc(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function mg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Yc||t instanceof ps||t instanceof dt||t instanceof fg)}function yg(t,e,n){if(!mg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ho(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function YT(t,e,n){if((e=cn(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return Ag(t,e);throw bi("Field path arguments must be of type string or ",t,!1,void 0,n)}const JT=new RegExp("[~\\*/\\[\\]]");function Ag(t,e,n){if(e.search(JT)>=0)throw bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wc(...e.split("."))._internalPath}catch{throw bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(E.INVALID_ARGUMENT,a+t+c)}function XT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class vg{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZT extends vg{data(){return super.data()}}function wg(t,e){return typeof e=="string"?Ag(t,e):e instanceof Wc?e._internalPath:e._delegate._internalPath}/**
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
 */function eC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zc{}class tC extends Zc{}function nC(t,e,...n){let s=[];e instanceof Zc&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof tu).length,o=r.filter(a=>a instanceof eu).length;if(i>1||i>0&&o>0)throw new B(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class eu extends tC{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new eu(e,n,s)}_apply(e){const n=this._parse(e);return Eg(e._query,n),new Cs(e.firestore,e.converter,Sa(e._query,n))}_parse(e){const n=pg(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ch(l,u);const d=[];for(const g of l)d.push(ah(a,r,g));h={arrayValue:{values:d}}}else h=ah(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ch(l,u),h=WT(o,i,l,u==="in"||u==="not-in");return Se.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class tu extends Zc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Eg(i,a),i=Sa(i,a)}(e._query,n),new Cs(e.firestore,e.converter,Sa(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ah(t,e,n){if(typeof(n=cn(n))=="string"){if(n==="")throw new B(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vp(e)&&n.indexOf("/")!==-1)throw new B(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(me.fromString(n));if(!U.isDocumentKey(s))throw new B(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ol(t,new U(s))}if(n instanceof dt)return Ol(t,n._key);throw new B(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ho(n)}.`)}function ch(t,e){if(!Array.isArray(t)||t.length===0)throw new B(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new B(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Eg(t,e){if(e.isInequality()){const s=Mc(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new B(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Ap(t);i!==null&&sC(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function sC(t,e,n){if(!n.isEqual(e))throw new B(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class rC{convertValue(e,n="none"){switch(Ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const s={};return Is(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Yc(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=up(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(or(e));default:return null}}convertTimestamp(e){const n=hn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=me.fromString(e);de(jp(s));const r=new ir(s.get(1),s.get(3)),i=new U(s.popFirst(5));return r.isEqual(n)||qt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function iC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Vr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oC extends vg{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(wg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Yr extends oC{data(e={}){return super.data(e)}}class aC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Vr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Yr(this._firestore,this._userDataWriter,s.key,s,new Vr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Yr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Yr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:cC(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}class uC extends rC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function lC(t){t=Ii(t,Cs);const e=Ii(t.firestore,Gc),n=lg(e),s=new uC(e);return eC(t._query),QT(n,t._query).then(r=>new aC(e,s,t,r))}function hC(t,e){const n=Ii(t.firestore,Gc),s=OT(t),r=iC(t.converter,e);return fC(n,[GT(pg(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Vt.exists(!1))]).then(()=>s)}function fC(t,e){return function(n,s){const r=new sn;return n.asyncQueue.enqueueAndForget(async()=>ET(await VT(n),s,r)),r.promise}(lg(t),e)}(function(t,e=!0){(function(n){Es=n})(xw),un(new Qt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Gc(new cI(n.getProvider("auth-internal")),new fI(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Rt(kl,"3.8.2",t),Rt(kl,"3.8.2","esm2017")})();const dC={apiKey:"AIzaSyA9dXRioNg83eeFtFCWFCbuiZQ2-kpPjhA",authDomain:"confidetest-da854.firebaseapp.com",databaseURL:"https://confidetest-da854-default-rtdb.firebaseio.com",projectId:"confidetest-da854",storageBucket:"confidetest-da854.appspot.com",messagingSenderId:"333269764020",appId:"1:333269764020:web:259f3af7a2adf656d994e1",measurementId:"G-Z9ES78D9DL"},pC=kf(dC);e0(pC);const Ig=qT(),gC={},mC={class:"w-fit h-fit p-14 bg-green-500 shadow-xl text-slate-50 rounded-md"},yC=ye("h1",null,"Succes Created",-1),AC=[yC];function vC(t,e){return ht(),Nt("div",mC,AC)}const wC=Un(gC,[["render",vC]]);const EC={data(){return{confide:"",from:"",isClicked:!1,isTypoNo:!1,isTypoYes:!1}},components:{AlertSucces:wC},methods:{async createNewConfide(){if(this.isTypoNo)try{const t=cg(Ig,"users"),e=new Date,n=`${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}, ${e.getDate()} / ${e.getMonth()+1} / ${e.getFullYear()} `,s={id:xv(),message:this.confide,from:this.from,create:n};await hC(t,s)}catch(t){console.log(t)}},isSubmit(){this.confide!=""&&this.from!=""?this.isClicked=!this.isClicked:alert("Isi Terlebih Dahulu!!")},buttonYes(){this.isTypoYes=!this.isTypoYes,setTimeout(()=>{this.isClicked=!this.isClicked,this.isTypoYes=!this.isTypoYes},50)},buttonNo(){this.isTypoNo=!this.isTypoNo,setTimeout(()=>{this.isClicked=!this.isClicked,this.isTypoNo=!this.isTypoNo},1e3)}}},nu=t=>(Im("data-v-86b85e1f"),t=t(),bm(),t),IC={class:"min-h-screen min-w-full flex justify-center items-center relative"},bC={class:"flex flex-col justify-around items-center h-4/5 w-4/6 m-3"},TC={class:"input-user"},CC=nu(()=>ye("label",{for:""},"Confide",-1)),_C={class:"input-user"},SC=nu(()=>ye("label",{for:""},"From",-1)),DC={key:1,class:"absolute"},xC={class:"w-fit h-fit p-5 bg-white shadow-lg rounded-md flex flex-col justify-between items-center"},kC=nu(()=>ye("h4",null,"Any Typo's?",-1)),NC={class:"containner-button w-full h-full flex"};function RC(t,e,n,s,r,i){const o=Bn("AlertSucces");return ht(),Nt("div",IC,[ye("form",{onSubmit:e[5]||(e[5]=Gy((...a)=>i.createNewConfide&&i.createNewConfide(...a),["prevent"])),class:"flex flex-col relative justify-around items-center h-96 w-11/12 bg-white shadow-2xl rounded-xl"},[r.isClicked&&r.isTypoNo&&r.confide!=null&&r.from!=null?(ht(),rf(o,{key:0,class:"absolute -top-28"})):Su("",!0),ye("div",bC,[ye("div",TC,[CC,Au(ye("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>r.confide=a),required:""},null,512),[[Lu,r.confide]])]),ye("div",_C,[SC,Au(ye("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>r.from=a),required:""},null,512),[[Lu,r.from]])])]),ye("button",{onClick:e[2]||(e[2]=(...a)=>i.isSubmit&&i.isSubmit(...a)),class:"px-5 py-2 mb-3 text-white shadow-md shadow-cyan-500 rounded-2xl bg-cyan-600 hover:scale-110 tracking-widest"},"submit"),r.isClicked?(ht(),Nt("div",DC,[ye("div",xC,[kC,ye("div",NC,[ye("button",{onClick:e[3]||(e[3]=(...a)=>i.buttonNo&&i.buttonNo(...a))},"No"),ye("button",{onClick:e[4]||(e[4]=(...a)=>i.buttonYes&&i.buttonYes(...a))},"Yes")])])])):Su("",!0)],32)])}const BC=Un(EC,[["render",RC],["__scopeId","data-v-86b85e1f"]]),OC={components:{BackButton:hv,ContainnerConfide:BC}};function MC(t,e,n,s,r,i){const o=Bn("BackButton"),a=Bn("ContainnerConfide");return ht(),Nt(st,null,[De(o,{class:"absolute top-0 left-0 z-10"}),De(a)],64)}const FC=Un(OC,[["render",MC]]),PC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA6GSURBVHic7d1ZrJx1Hcbx5xxC0VAMCoIm0rIkNhjFhbpcQnCLN8YLIYJ6qyZ655XbhTfGeGWC1miMC4IL7gQlYbsTEqxxCZUSkSUkxoVFqTEgbb2YHq2H056l8847nefzSf4XnbP93kng/5133plZCrDodia5PMnuJLuSnJ/krCTbj3z9QJLHkjyY5P4k9yS5M8kjsx4UADgxFyT5VJL9SQ5vcd2X5JOZBAMAMMcuSfLNJM9m6xv/6nUwyU1JXj/D4wAANuDcTDb+Q5nexr/W+t6RvwUAjOw9SZ7IsBv/0evxJFfN5MgAgOfYluTLmd3Gv3rtOTIDADAjpye5JeNt/ivr9iQvGPhYAYAkZyS5O+Nv/ivrrvzvJYUAwAC2ZT4e+a91JuC0AY8bAKqN+Zz/emvPgMcNALWuzPib/HrrmsGOHgAKnZvZvtRvq+vJJC8d6D4AgDrXZfzNfaPr68PcBQDQ5XUZ/h3+prkOJXn1IPcEABT5fsbf1De7vjvIPQEAJS7I5MN4xt7QN7sOZvIxxMCcWh57AOC43p+T87/T5STvHXsIADhZ7c/4j+a3uvYNcH8AwMLbkfE38RNdO6Z+rwBTcTKeWoQWV4w9wBRcNvYAwNoEAMyvS8ceYAoW4RhgIQkAmF+7xh5gChbhGGAhCQCYXxeOPcAUXDT2AMDaBADMrzPHHmAKFuEYYCEJAJhf28ceYArOGHsAYG1LYw8AHNPhsQeYEv+fgTnkDAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFFqa4u/ameTyJLuT7EpyfpKzkmxPcuoU/w4ALLp/JzmQ5LEkDya5P8k9Se5M8sg0/sCJBsAFSd6X5JokLz/xcQCAdexPcn2S65I8tNVfstUAuCTJR5NcneSUrf5xAGDLDiX5WZJPZ3J2YFM2GwDnJvlckvdu4WcBgGHcmOQjSf680R/YzCb+niRfTHLmJocCAIb3RJIPJfnuRr55I68C2Jbky0luiM0fAObVC5N8J8meTPbu41rvDMDpSX6Q5G0nPhcAMCN3JHlXkn8c6xuOFwBnJLk1yRunPBQAMLy7k7wlk5cTPsexngLYlskFBTZ/ADg5vSnJT5KcttYXj/USvj1JrhxqIgBgJi5IcnaSm1d/Ya0AuDLJZ4aeCACYid1J/pDkd0ffuPoagHOT3BdX+wPAIvl7kouT/GnlhtVnAL6U5A2znAgAGNzzMnkq4McrNxx9BuB1SX4Z7/AHAIvocJLXJvlN8v+vAvhYbP4AsKiWMtnr//uPZHKV4B+ysXcGBABOToeSXJjk4ZUN//2x+QPAolvO5AP9/nsGYH+Sl482DgAwK79P8oqlJDuSPDzyMADA7OxcTnLF2FMAADN12XKSS8eeAgCYqUuXk+waewoAYKZ2LWfycgAAoMdFy/G+/wDQ5sylJE8n2Tb2JADAzDztzX8AoNBykgNjDwEAzNRTy0meHHsKAGCmnlxO8sexpwAAZuqB5Uw+BwAA6LF/OcnesacAAGZqrw8DAoA+5y0neSSeBgCAFvuSPLryPgA3jDkJADAz1yfJ0pF/nJ/kgUzeFwAAWEwHk1yU5OGVDf+hJD8cbRwAYBZuzJHr/paOuvE1SX616jYAYDEczmSv/23y/6f8f53kujEmAgAG97Uc2fyT5z7aPyfJfUleOMuJAIBBPZFkV5K/rtyw+qK/vyT5wCwnAgAG9+EctfknySlrfNO+JC9JsnsWEwEAg/pCks+uvvFYF/ydmuSnSd4+5EQAwKBuT/KOJM+s/sLxrvjfnuTWJG8aaCgAYDh3JXlrkgNrffF4b/xzIMmbk9wywFAAwHBuT/K2HGPzT9a+BuBo/87kTQNeHNcEAMDJ4AtJ3pfkX8f7ps286c9VSfbESwQBYB49nuSDmTxwX9d6ZwCOdm+SryR5fpLXxzsGAsA8OJzkW0nemeSejf7QZgIgmZxOuCXJjzK5SPCV8QFCADCGQ0luTnJNki8m+edmfvhEH8XvzOR5hquTXHyCvwsAWN++JDdk8vb9j2z1l0zzNP55SS7P5GLBXZl8xPDZmZwp2DbFvwMAi+6ZTK7g/1uSB5PsT7I3yR1JHp3GH/A8Psyvw2MPMCX+PwNzyPP3AFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAMD8embsAabg6bEHANYmAGB+HRh7gCl4auwBgLUJAJhfT449wBQswjHAQhIAML/+OPYAU/DA2AMAaxMAML/2jz3AFCzCMcBCEgAwv/aOPcAULMIxAMBM7Uhy+CRfL5v6vQIABe7L+Jv4Vte9A9wfwJR4CgDm2w1jD3ACrh97AAA4WZ2f5GDGfzS/2fVskp3TvzsAoMeNGX9D3+z69iD3BAAUeU2SQxl/U9/oOpTkkkHuCQAo842Mv7FvdH11oPsAAOqck+TxjL+5r7ceT/Lige4DAKj07oy/wa+3rh7s6AGg2J6Mv8kfa1074HEDQLVTk/w842/2q9dtSbYNeNwAUG97krsy/qa/sn5xZCYAYGCnZz7OBNyW5IyBjxUAOMq2jHtNwLWZPCUBAIzgqsz2JYKPZfKKBABgZC9K8vkM+7kBh5J8M5P3JAAA5sirMtmkn830Nv6DSW5KcukMjwMA2IKdST6RZF+2vvHfm+TjSXbMeHZgBpbGHgAY3HlJLk+yO8muTD5i+Oz876V7B5L8LcmDSfYn2ZvkjiSPznpQYHb+A3lkhq5s59MmAAAAAElFTkSuQmCC",LC={},UC={class:"w-12 h-12 rounded-full bg-slate-50 shadow-xl p-2 m-5"},VC=ye("img",{src:PC,alt:"",class:"w-fit"},null,-1);function $C(t,e){const n=Bn("router-link");return ht(),Nt("div",UC,[De(n,{to:"/curhat-ala-ala/create"},{default:Ja(()=>[VC]),_:1})])}const QC=Un(LC,[["render",$C]]),jC={components:{AddConfide:QC},created(){this.getUser()},data(){return{users:[]}},methods:{async getUser(){try{(await lC(nC(cg(Ig,"users")))).forEach(e=>{this.users.push(e.data())})}catch(t){console.log(t)}}}},qC={class:"h-screen w-full"},HC={class:"h-screen w-full overflow-y-scroll p-4"},KC={class:"font-semibold tracking-widest text-2xl"},zC={class:"text-xs tracking-widest my-1"},GC={class:"tracking-widest text-xs"};function WC(t,e,n,s,r,i){const o=Bn("AddConfide");return ht(),Nt("div",qC,[ye("div",HC,[(ht(!0),Nt(st,null,Km(r.users,a=>(ht(),Nt("div",{key:a.id,class:"w-11/12 h-fit p-5 bg-white shadow-2xl rounded-lg m-4 mx-auto"},[ye("h3",KC,po(a.message),1),ye("h4",zC,po(a.from),1),ye("i",GC,po(a.create),1)]))),128))]),De(o,{class:"absolute bottom-0 right-0"})])}const YC=Un(jC,[["render",WC]]),JC=[{path:"/curhat-ala-ala",component:YC},{path:"/curhat-ala-ala/create",name:"Create",component:FC}],XC=iv({history:EA(),routes:JC});Jy(nA).use(XC).mount("#app");
