
!function(t){var e,n={NOT_RESOLVED:"NOT_RESOLVED",IN_RESOLVING:"IN_RESOLVING",RESOLVED:"RESOLVED"},i=function(){var l={trackCircularDependencies:!0,allowMultipleDeclarations:!0},d={},f=!1,p=[],m=function(t,i,o){o||(o=i,i=[]);var r=d[t];r||(r=d[t]={name:t,decl:e}),r.decl={name:t,prev:r.decl,fn:o,state:n.NOT_RESOLVED,deps:i,dependents:[],exports:e}},v=function(e,n,i){"string"==typeof e&&(e=[e]),f||(f=!0,h(y)),p.push({deps:e,cb:function(e,r){r?(i||o)(r):n.apply(t,e)}})},_=function(t){var e=d[t];return e?n[e.decl.state]:"NOT_DEFINED"},g=function(t){return!!d[t]},b=function(t){for(var e in t)t.hasOwnProperty(e)&&(l[e]=t[e])},y=function(){f=!1,E()},E=function(){var t,e=p,n=0;for(p=[];t=e[n++];)k(null,t.deps,[],t.cb)},k=function(t,e,i,o){var u=e.length;u||o([]);for(var c,h,f=[],p=0,m=u;m>p;){if(c=e[p++],"string"==typeof c){if(!d[c])return void o(null,r(c,t));h=d[c].decl}else h=c;if(h.state===n.IN_RESOLVING&&l.trackCircularDependencies&&a(h,i))return void o(null,s(h,i));f.push(h),M(h,i,function(t,e){if(e)return void o(null,e);if(!--u){for(var n,i=[],r=0;n=f[r++];)i.push(n.exports);o(i)}})}},M=function(e,i,o){if(e.state===n.RESOLVED)return void o(e.exports);if(e.dependents.push(o),e.state!==n.IN_RESOLVING){if(e.prev&&!l.allowMultipleDeclarations)return void T(e,c(e));l.trackCircularDependencies&&(i=i.slice()).push(e);var r=!1,s=e.prev?e.deps.concat([e.prev]):e.deps;e.state=n.IN_RESOLVING,k(e,s,i,function(n,i){return i?void T(e,i):(n.unshift(function(t,n){return r?void o(null,u(e)):(r=!0,void(n?T(e,n):P(e,t)))}),void e.fn.apply({name:e.name,deps:e.deps,global:t},n))})}},P=function(t,i){t.exports=i,t.state=n.RESOLVED;for(var o,r=0;o=t.dependents[r++];)o(i);t.dependents=e},T=function(t,e){t.state=n.NOT_RESOLVED;for(var i,o=0;i=t.dependents[o++];)i(null,e);t.dependents=[]};return{create:i,define:m,require:v,getState:_,isDefined:g,setOptions:b}},o=function(t){h(function(){throw t})},r=function(t,e){return Error(e?'Module "'+e.name+'": can\'t resolve dependence "'+t+'"':'Required module "'+t+"\" can't be resolved")},s=function(t,e){for(var n,i=[],o=0;n=e[o++];)i.push(n.name);return i.push(t.name),Error('Circular dependence has been detected: "'+i.join(" -> ")+'"')},u=function(t){return Error('Declaration of module "'+t.name+'" has already been provided')},c=function(t){return Error('Multiple declarations of module "'+t.name+'" have been detected')},a=function(t,e){for(var n,i=0;n=e[i++];)if(t===n)return!0;return!1},h=function(){var e=[],n=function(t){return 1===e.push(t)},i=function(){var t=e,n=0,i=e.length;for(e=[];i>n;)t[n++]()};if("object"==typeof process&&process.nextTick)return function(t){n(t)&&process.nextTick(i)};if(t.setImmediate)return function(e){n(e)&&t.setImmediate(i)};if(t.postMessage&&!t.opera){var o=!0;if(t.attachEvent){var r=function(){o=!1};t.attachEvent("onmessage",r),t.postMessage("__checkAsync","*"),t.detachEvent("onmessage",r)}if(o){var s="__modules"+ +new Date,u=function(t){t.data===s&&(t.stopPropagation&&t.stopPropagation(),i())};return t.addEventListener?t.addEventListener("message",u,!0):t.attachEvent("onmessage",u),function(e){n(e)&&t.postMessage(s,"*")}}}var c=t.document;if("onreadystatechange"in c.createElement("script")){var a=c.getElementsByTagName("head")[0],h=function(){var t=c.createElement("script");t.onreadystatechange=function(){t.parentNode.removeChild(t),t=t.onreadystatechange=null,i()},a.appendChild(t)};return function(t){n(t)&&h()}}return function(t){n(t)&&setTimeout(i,0)}}();"object"==typeof exports?module.exports=i():t.modules=i()}(this),modules.define("i-bem",["i-bem__internal","inherit","identify","next-tick","objects","functions","events"],function(t,e,n,i,o,r,s,u){function c(t,e,n,i){return"__"+t+(i?"__elem_"+i:"")+"__mod"+(e?"_"+e:"")+(n?"_"+n:"")}function a(t,e,n,i){if(s.isFunction(e))n[c(t,"*","*",i)]=e;else{var o,r,u;for(o in e)if(e.hasOwnProperty(o))if(u=e[o],s.isFunction(u))n[c(t,o,"*",i)]=u;else for(r in u)u.hasOwnProperty(r)&&(n[c(t,o,r,i)]=u[r])}}function h(t,e){return e?Array.isArray(e)?function(n){for(var i=0,o=e.length;o>i;)if(n.hasMod(t,e[i++]))return!0;return!1}:function(n){return n.hasMod(t,e)}:function(e){return e.hasMod(t)}}function l(t){t.beforeSetMod&&(a("before",t.beforeSetMod,t),delete t.beforeSetMod),t.onSetMod&&(a("after",t.onSetMod,t),delete t.onSetMod);var e;if(t.beforeElemSetMod){for(e in t.beforeElemSetMod)t.beforeElemSetMod.hasOwnProperty(e)&&a("before",t.beforeElemSetMod[e],t,e);delete t.beforeElemSetMod}if(t.onElemSetMod){for(e in t.onElemSetMod)t.onElemSetMod.hasOwnProperty(e)&&a("after",t.onElemSetMod[e],t,e);delete t.onElemSetMod}}var d,f=e.MOD_DELIM,p=e.ELEM_DELIM,m=[],v={},_=n(u.Emitter,{__constructor:function(t,e,n){this._modCache=t||{},this._processingMods={},this.params=r.extend(this.getDefaultParams(),e),n!==!1?this._init():m.push(this._init,this)},_init:function(){return this.setMod("js","inited")},on:function(t,e,n){return"object"==typeof t&&(s.isFunction(e)||s.isFunction(n))&&(t=this.__self._buildModEventName(t)),this.__base.apply(this,arguments)},un:function(t,e){return"object"==typeof t&&s.isFunction(e)&&(t=this.__self._buildModEventName(t)),this.__base.apply(this,arguments)},emit:function(t,e){var n=!1;return"object"!=typeof t||t instanceof u.Event||(n="js"===t.modName,t=this.__self._buildModEventName(t)),(n||this.hasMod("js","inited"))&&(this.__base(t=this._buildEvent(t),e),this._ctxEmit(t,e)),this},_ctxEmit:function(t,e){this.__self.emit(t,e)},_buildEvent:function(t){return"string"==typeof t?t=new u.Event(t,this):t.target||(t.target=this),t},hasMod:function(t,e,n){var i=arguments.length,o=!1;1===i?(n="",e=t,t=d,o=!0):2===i&&("string"==typeof t?(n=e,e=t,t=d):(n="",o=!0));var r=this.getMod(t,e)===n;return o?!r:r},getMod:function(t,e){var n=typeof t;if("string"===n||"undefined"===n){e=t||e;var i=this._modCache;return e in i?i[e]||"":i[e]=this._extractModVal(e)}return this._getElemMod(e,t)},_getElemMod:function(t,e,n){return this._extractModVal(t,e,n)},getMods:function(t){var e=t&&"string"!=typeof t,n=[].slice.call(arguments,e?1:0),i=this._extractMods(n,e?t:d);return e||(n.length?n.forEach(function(t){this._modCache[t]=i[t]},this):this._modCache=i),i},setMod:function(t,e,n){if("undefined"==typeof n&&("string"==typeof t?(n="undefined"==typeof e?!0:e,e=t,t=d):n=!0),!t||t[0]){n===!1&&(n="");var o=(t&&t[0]?i(t[0]):"")+"_"+e;if(this._processingMods[o])return this;var r,s=t?this._getElemMod(e,t,r=this.__self._extractElemNameFrom(t)):this.getMod(e);if(s===n)return this;this._processingMods[o]=!0;var u=!0,c=[e,n,s];t&&c.unshift(t);for(var a,h,l,f=[["*","*"],[e,"*"],[e,n]],p=["before","after"],m=0;a=p[m++];){for(h=0;l=f[h++];)if(this._callModFn(a,r,l[0],l[1],c)===!1){u=!1;break}if(!u)break;"before"===a&&(t||(this._modCache[e]=n),this._onSetMod(e,n,s,t,r))}this._processingMods[o]=null,u&&this._emitModChangeEvents(e,n,s,t,r)}return this},_onSetMod:function(){},_emitModChangeEvents:function(t,e,n,i,o){var r={modName:t,modVal:e,oldModVal:n};i&&(r.elem=i),this.emit({modName:t,modVal:"*",elem:o},r).emit({modName:t,modVal:e,elem:o},r)},toggleMod:function(t,e,n,i,o){"string"==typeof t&&(o=i,i=n,n=e,e=t,t=d),"undefined"==typeof n&&(n=!0),"undefined"==typeof i?i="":"boolean"==typeof i&&(o=i,i="");var r=this.getMod(t,e);return(r===n||r===i)&&this.setMod(t,e,"boolean"==typeof o?o?n:i:this.hasMod(t,e,n)?i:n),this},delMod:function(t,e){return e||(e=t,t=d),this.setMod(t,e,"")},_callModFn:function(t,e,n,i,o){var r=c(t,n,i,e);return this[r]?this[r].apply(this,o):d},_extractModVal:function(){return""},_extractMods:function(){return{}},getDefaultParams:function(){return{}},_destruct:function(){this.delMod("js")},nextTick:function(t){var e=this;return o(function(){e.hasMod("js","inited")&&t.call(e)}),this}},{_name:"i-bem",blocks:v,decl:function(t,e,i){"string"==typeof t&&(t={block:t}),arguments.length<=2&&"object"==typeof t&&(!t||"string"!=typeof t.block&&"string"!=typeof t.modName)&&(i=e,e=t,t={}),"undefined"==typeof t.block&&(t.block=this.getName());var o;if("undefined"==typeof t.baseBlock)o=v[t.block]||this;else if("string"==typeof t.baseBlock){if(o=v[t.baseBlock],!o)throw'baseBlock "'+t.baseBlock+'" for "'+t.block+'" is undefined'}else o=t.baseBlock;if(l(e||(e={})),t.modName){var u=h(t.modName,t.modVal);r.each(e,function(t,n){s.isFunction(t)&&(e[n]=function(){var e;if(u(this))e=t;else{var i=o.prototype[n];i&&i!==t&&(e=this.__base)}return e?e.apply(this,arguments):d})})}if(i&&"boolean"==typeof i.live){var c=i.live;i.live=function(){return c}}var a,f=o;return t.baseMix&&(f=[f],t.baseMix.forEach(function(e){if(!v[e])throw'mix block "'+e+'" for "'+t.block+'" is undefined';f.push(v[e])})),t.block===o.getName()?(a=n.self(f,e,i))._processLive(!0):((a=v[t.block]=n(f,e,i))._name=t.block,delete a._liveInitable),a},declMix:function(t,e,i){return l(e||(e={})),v[t]=n(e,i)},_processLive:function(){return!1},create:function(t,e){return"string"==typeof t&&(t={block:t}),new v[t.block](t.mods,e)},getName:function(){return this._name},on:function(t,e,n){return"object"==typeof t&&(s.isFunction(e)||s.isFunction(n))&&(t=this._buildModEventName(t)),this.__base.apply(this,arguments)},un:function(t,e){return"object"==typeof t&&s.isFunction(e)&&(t=this._buildModEventName(t)),this.__base.apply(this,arguments)},_buildModEventName:function(t){var e=f+t.modName+f+(t.modVal===!1?"":t.modVal);return t.elem&&(e=p+t.elem+e),e},_extractElemNameFrom:function(){},_runInitFns:function(){if(m.length){var t,e=m,n=0;for(m=[];t=e[n];)t.call(e[n+1]),n+=2}}});t(_)}),modules.define("i-bem__internal",function(t){function e(t){var e=typeof t;return"string"===e||"number"===e||"boolean"===e}function n(t,e){var n="";return null!=e&&e!==!1&&(n+=s+t,e!==!0&&(n+=s+e)),n}function i(t,e,i){return t+n(e,i)}function o(t,e,o,s){return i(t,r,r)+u+e+n(o,s)}var r,s="_",u="__",c="[a-zA-Z0-9-]+";t({NAME_PATTERN:c,MOD_DELIM:s,ELEM_DELIM:u,buildModPostfix:n,buildClass:function(t,n,s,u){return e(s)?e(u)||(u=s,s=n,n=r):"undefined"!=typeof s?s=r:n&&"string"!=typeof n&&(n=r),n||s?n?o(t,n,s,u):i(t,s,u):t},buildClasses:function(t,e,n){e&&"string"!=typeof e&&(n=e,e=r);var s=e?o(t,e,r,r):i(t,r,r);if(n)for(var u in n)n.hasOwnProperty(u)&&n[u]&&(s+=" "+(e?o(t,e,u,n[u]):i(t,u,n[u])));return s}})}),function(t){function e(t){var e=a(t);if(m)for(var n,i=0;n=g[i++];)t.hasOwnProperty(n)&&e.push(n);return e}function n(t,n,i){for(var o,s,u=e(i),c=0,a=u.length;a>c;)"__self"!==(o=u[c++])&&(s=i[o],n[o]=f(s)&&(!r||s.toString().indexOf(".__base")>-1)?function(e,i){var o=t[e]?t[e]:"__constructor"===e?n.__self.__parent:p;return function(){var t=this.__base;this.__base=o;var e=i.apply(this,arguments);return this.__base=t,e}}(o,s):s)}function i(t,e){for(var n,i=1;n=t[i++];)e?f(n)?o.self(e,n.prototype,n):o.self(e,n):e=f(n)?o(t[0],n.prototype,n):o(t[0],n);return e||t[0]}function o(){var t=arguments,e=d(t[0]),o=e||f(t[0]),r=o?e?i(t[0]):t[0]:s,u=t[o?1:0]||{},a=t[o?2:1],l=u.__constructor||o&&r.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)}:o?function(){return r.apply(this,arguments)}:function(){};if(!o)return l.prototype=u,l.prototype.__self=l.prototype.constructor=l,h(l,a);h(l,r),l.__parent=r;var p=r.prototype,m=l.prototype=c(p);return m.__self=m.constructor=l,u&&n(p,m,u),a&&n(r,l,a),l}var r=function(){"_"}.toString().indexOf("_")>-1,s=function(){},u=Object.prototype.hasOwnProperty,c=Object.create||function(t){var e=function(){};return e.prototype=t,new e},a=Object.keys||function(t){var e=[];for(var n in t)u.call(t,n)&&e.push(n);return e},h=function(t,e){for(var n in e)u.call(e,n)&&(t[n]=e[n]);return t},l=Object.prototype.toString,d=Array.isArray||function(t){return"[object Array]"===l.call(t)},f=function(t){return"[object Function]"===l.call(t)},p=function(){},m=!0,v={toString:""};for(var _ in v)v.hasOwnProperty(_)&&(m=!1);var g=m?["toString","valueOf"]:null;o.self=function(){var t=arguments,e=d(t[0]),o=e?i(t[0],t[0][0]):t[0],r=t[1],s=t[2],u=o.prototype;return r&&n(u,u,r),s&&n(o,o,s),o};var b=!0;"object"==typeof exports&&(module.exports=o,b=!1),"object"==typeof modules&&(modules.define("inherit",function(t){t(o)}),b=!1),"function"==typeof define&&(define(function(t,e,n){n.exports=o}),b=!1),b&&(t.inherit=o)}(this),modules.define("identify",function(t){var e=0,n="__"+ +new Date,i=function(){return"uniq"+ ++e};t(function(t,e){if(!t)return i();var o="uniqueID"in t?"uniqueID":n;return e||o in t?t[o]:t[o]=i()})}),modules.define("next-tick",function(t){var e=this.global,n=[],i=function(t){return 1===n.push(t)},o=function(){var t=n,e=0,i=n.length;for(n=[];i>e;)t[e++]()};if("object"==typeof process&&process.nextTick)return t(function(t){i(t)&&process.nextTick(o)});if(e.setImmediate)return t(function(t){i(t)&&e.setImmediate(o)});if(e.postMessage){var r=!0;if(e.attachEvent){var s=function(){r=!1};e.attachEvent("onmessage",s),e.postMessage("__checkAsync","*"),e.detachEvent("onmessage",s)}if(r){var u="__nextTick"+ +new Date,c=function(t){t.data===u&&(t.stopPropagation&&t.stopPropagation(),o())};return e.addEventListener?e.addEventListener("message",c,!0):e.attachEvent("onmessage",c),t(function(t){i(t)&&e.postMessage(u,"*")})}}var a=e.document;if("onreadystatechange"in a.createElement("script")){var h=a.getElementsByTagName("head")[0],l=function(){var t=a.createElement("script");t.onreadystatechange=function(){t.parentNode.removeChild(t),t=t.onreadystatechange=null,o()},h.appendChild(t)};return t(function(t){i(t)&&l()})}t(function(t){i(t)&&e.setTimeout(o,0)})}),modules.define("objects",function(t){var e=Object.prototype.hasOwnProperty;t({extend:function(t){"object"!=typeof t&&(t={});for(var n=1,i=arguments.length;i>n;n++){var o=arguments[n];if(o)for(var r in o)e.call(o,r)&&(t[r]=o[r])}return t},isEmpty:function(t){for(var n in t)if(e.call(t,n))return!1;return!0},each:function(t,n,i){for(var o in t)e.call(t,o)&&(i?n.call(i,t[o],o):n(t[o],o))}})}),modules.define("functions",function(t){var e=Object.prototype.toString;t({isFunction:function(t){return"[object Function]"===e.call(t)},noop:function(){}})}),modules.define("events",["identify","inherit","functions"],function(t,e,n,i){var o,r="__"+ +new Date+"storage",s=function(t,n){return e(t)+(n?e(n):"")},u=n({__constructor:function(t,e){this.type=t,this.target=e,this.result=o,this.data=o,this._isDefaultPrevented=!1,this._isPropagationStopped=!1},preventDefault:function(){this._isDefaultPrevented=!0},isDefaultPrevented:function(){return this._isDefaultPrevented},stopPropagation:function(){this._isPropagationStopped=!0},isPropagationStopped:function(){return this._isPropagationStopped}}),c={on:function(t,e,n,u,c){if("string"==typeof t){i.isFunction(e)&&(u=n,n=e,e=o);for(var a,h,l,d,f=s(n,u),p=this[r]||(this[r]={}),m=t.split(" "),v=0;a=m[v++];)d=p[a]||(p[a]={ids:{},list:{}}),f in d.ids||(h=d.list,l={fn:n,data:e,ctx:u,special:c},h.last?(h.last.next=l,l.prev=h.last):h.first=l,d.ids[f]=h.last=l)}else for(var _ in t)t.hasOwnProperty(_)&&this.on(_,t[_],e,c);return this},once:function(t,e,n,i){return this.on(t,e,n,i,{once:!0})},un:function(t,e,n){if("string"==typeof t||"undefined"==typeof t){var i=this[r];if(i)if(t){for(var o,u=t.split(" "),c=0;t=u[c++];)if(o=i[t])if(e){var a=s(e,n),h=o.ids;if(a in h){var l=o.list,d=h[a],f=d.prev,p=d.next;f?f.next=p:d===l.first&&(l.first=p),p?p.prev=f:d===l.last&&(l.last=f),delete h[a]}}else delete this[r][t]}else delete this[r]}else for(var m in t)t.hasOwnProperty(m)&&this.un(m,t[m],e);return this},emit:function(t){var e=this[r],n=!1;if(e)for(var i,o,s=["string"==typeof t?t:t.type,"*"],c=0;i=s[c++];)if(o=e[i])for(var a,h=o.list.first,l=o.list.last;h&&(n||(n=!0,"string"==typeof t&&(t=new u(t)),t.target||(t.target=this)),t.data=h.data,a=h.fn.apply(h.ctx||this,arguments),"undefined"!=typeof a&&(t.result=a,a===!1&&(t.preventDefault(),t.stopPropagation())),h.special&&h.special.once&&this.un(t.type,h.fn,h.ctx),h!==l);)h=h.next;return this}},a=n(c,c);t({Emitter:a,Event:u})}),modules.define("i-bem__dom",["i-bem","i-bem__internal","identify","objects","functions","jquery","dom"],function(t,e,n,i,o,r,s,u){function c(t,e){var n,i=t[0],o=d(i);for(n in o)a(n,t,h(o[n],n,e))}function a(t,e,n,i,r){var u=e[0];n||(n=h(f(u,t),t));var c=n.uniqId,a=E[c];if(a)return a.domElem.index(u)<0&&(a.domElem=a.domElem.add(e),o.extend(a.params,n)),a;y[c]=y[c]?y[c].add(e):e;var l=u.parentNode;l&&11!==l.nodeType||s.unique(y[c]);var d=I[t]||L.decl(t,{},{live:!0},!0);return!(d._liveInitable=!!d._processLive())||i||n.live===!1?(i&&e.addClass(S),a=new d(y[c],n,!!i),delete y[c],r&&r.apply(a,Array.prototype.slice.call(arguments,4)),a):void 0}function h(t,e,n){return t.uniqId||(t.uniqId=(t.id?e+"-id-"+t.id:i())+(n||i())),t}function l(t,e,n){var i=t.find(e);return n?i:i.add(t.filter(e))}function d(t){var e=i(t);return M[e]||(M[e]=p(t))}function f(t,e){var n=d(t);return n[e]||(n[e]={})}function p(t){var e=t.getAttribute(x);return e?JSON.parse(e):{}}function m(t,e){1===t.domElem.length?t._destruct():t.domElem=t.domElem.not(e)}function v(t){t.each(function(){k[i(this)]=this.parentNode})}var _,g=s(window),b=s(document),y={},E={},k={},M={},P={},T={},I=e.blocks,S="i-bem",w="."+S,x="data-bem",C=n.NAME_PATTERN,O=n.MOD_DELIM,D=n.ELEM_DELIM,N=RegExp("[^"+O+"]"+O+"("+C+")(?:"+O+"("+C+"))?$"),F=n.buildModPostfix,V=n.buildClass,j=Array.prototype.reverse,L=e.decl("i-bem__dom",{__constructor:function(t,e,n){this.domElem=t,this._eventNameCache={},this._elemCache={},this._uniqId=e.uniqId,E[this._uniqId]=this,this._needSpecialUnbind=!1,this.__base(null,e,n)},findBlocksInside:function(t,e){return this._findBlocks("find",t,e)},findBlockInside:function(t,e){return this._findBlocks("find",t,e,!0)},findBlocksOutside:function(t,e){return this._findBlocks("parents",t,e)},findBlockOutside:function(t,e){return this._findBlocks("closest",t,e)[0]||null},findBlocksOn:function(t,e){return this._findBlocks("",t,e)},findBlockOn:function(t,e){return this._findBlocks("",t,e,!0)},_findBlocks:function(t,e,n,i){n||(n=e,e=_);var o=e?"string"==typeof e?this.findElem(e):e:this.domElem,r="string"==typeof n,u=r?n:n.block||n.blockName,c="."+(r?V(u):V(u,n.modName,n.modVal))+(i?":first":""),h=o.filter(c);if(t&&(h=h.add(o[t](c))),i)return h[0]?a(u,h.eq(0),_,!0)._init():null;var l=[],d={};return h.each(function(t,e){var n=a(u,s(e),_,!0)._init();d[n._uniqId]||(d[n._uniqId]=!0,l.push(n))}),l},bindToDomElem:function(t,e,n,i){return r.isFunction(n)&&(i=n,n=_),i?t.bind(this._buildEventName(e),n,s.proxy(i,this)):o.each(e,function(e,i){this.bindToDomElem(t,i,n,e)},this),this},bindToDoc:function(t,e,n){return this._needSpecialUnbind=!0,this.bindToDomElem(b,t,e,n)},bindToWin:function(t,e,n){return this._needSpecialUnbind=!0,this.bindToDomElem(g,t,e,n)},bindTo:function(t,e,n,i){var o=arguments.length;return 3===o?r.isFunction(n)&&(i=n,"object"==typeof e&&(n=e,e=t,t=this.domElem)):2===o?r.isFunction(e)?(i=e,e=t,t=this.domElem):"string"==typeof t||t instanceof s||(n=e,e=t,t=this.domElem):1===o&&(e=t,t=this.domElem),"string"==typeof t&&(t=this.elem(t)),this.bindToDomElem(t,e,n,i)},unbindFromDomElem:function(t,e,n){return"string"==typeof e?(e=this._buildEventName(e),n?t.unbind(e,n):t.unbind(e)):o.each(e,function(e,n){this.unbindFromDomElem(t,n,e)},this),this},unbindFromDoc:function(t,e){return this.unbindFromDomElem(b,t,e)},unbindFromWin:function(t,e){return this.unbindFromDomElem(g,t,e)},unbindFrom:function(t,e,n){var i=arguments.length;return 1===i?(e=t,t=this.domElem):2===i&&r.isFunction(e)?(n=e,e=t,t=this.domElem):"string"==typeof t&&(t=this.elem(t)),this.unbindFromDomElem(t,e,n)},_buildEventName:function(t){return t.indexOf(" ")>1?t.split(" ").map(function(t){return this._buildOneEventName(t)},this).join(" "):this._buildOneEventName(t)},_buildOneEventName:function(t){var e=this._eventNameCache;if(t in e)return e[t];var n="."+this._uniqId;if(t.indexOf(".")<0)return e[t]=t+n;var i=".bem_"+this.__self._name;return e[t]=t.split(".").map(function(t,e){return 0===e?t+i:i+"_"+t}).join("")+n},_ctxEmit:function(t,e){this.__base.apply(this,arguments);var n=this,r=P[n.__self._buildCtxEventName(t.type)],s={};r&&n.domElem.each(function(u,c){for(var a=r.counter;c&&a;){var h=i(c,!0);if(h){if(s[h])break;var l=r.ctxs[h];l&&(o.each(l,function(i){i.fn.call(i.ctx||n,t,e)}),a--),s[h]=!0}c=c.parentNode||k[h]}})},setMod:function(t,e,n){if(t&&"undefined"!=typeof n&&t.length>1){var i=this;return t.each(function(){var o=s(this);o.__bemElemName=t.__bemElemName,i.setMod(o,e,n)}),i}return this.__base(t,e,n)},_extractModVal:function(t,e,n){var i,o=(e||this.domElem)[0];return o&&(i=o.className.match(this.__self._buildModValRE(t,n||e))),i?i[2]||!0:""},_extractMods:function(t,e){var n={},i=!t.length,o=0;return((e||this.domElem)[0].className.match(this.__self._buildModValRE("("+(i?C:t.join("|"))+")",e,"g"))||[]).forEach(function(t){var e=t.match(N);n[e[1]]=e[2]||!0,++o}),o<t.length&&t.forEach(function(t){t in n||(n[t]="")}),n},_onSetMod:function(t,e,n,i,o){if("js"!==t||""!==e){var r=this.__self,u=r._buildModClassPrefix(t,o),c=r._buildModValRE(t,o),a=""===e||e===!1;(i||this.domElem).each(function(){var t=this.className,i=u;e!==!0&&(i+=O+e),(n===!0?c.test(t):t.indexOf(u+O)>-1)?this.className=t.replace(c,a?"":"$1"+i):a||s(this).addClass(i)}),o&&this.dropElemCache(o,t,n).dropElemCache(o,t,e)}this.__base.apply(this,arguments)},findElem:function(t,e,n,i,o){"string"==typeof t&&(o=i,i=n,n=e,e=t,t=this.domElem),"boolean"==typeof n&&(o=n,n=_);var r=this.__self,s="."+e.split(" ").map(function(t){return r.buildClass(t,n,i)}).join(",."),u=l(t,s);return o?this._filterFindElemResults(u):u},_filterFindElemResults:function(t){var e=this.buildSelector(),n=this.domElem;return t.filter(function(){return n.index(s(this).closest(e))>-1})},_elem:function(t,e,n){var i,o=t+F(e,n);return(i=this._elemCache[o])||(i=this._elemCache[o]=this.findElem(t,e,n),i.__bemElemName=t),i},elem:function(t,e,n){if(e&&"string"!=typeof e)return e.__bemElemName=t,e;if(t.indexOf(" ")<0)return this._elem(t,e,n);var i=s([]);return t.split(" ").forEach(function(t){i=i.add(this._elem(t,e,n))},this),i},closestElem:function(t,e){return t.closest(this.buildSelector(e))},dropElemCache:function(t,e,n){if(t){var i=F(e,n);t.indexOf(" ")<0?delete this._elemCache[t+i]:t.split(" ").forEach(function(t){delete this._elemCache[t+i]},this)}else this._elemCache={};return this},elemParams:function(t){var e;return"string"==typeof t?(e=t,t=this.elem(t)):e=this.__self._extractElemNameFrom(t),p(t[0])[this.__self.buildClass(e)]||{}},elemify:function(t,e){return(t=s(t)).__bemElemName=e,t},containsDomElem:function(t,e){return 1===arguments.length&&(e=t,t=this.domElem),u.contains(t,e)},buildSelector:function(t,e,n){return this.__self.buildSelector(t,e,n)},_destruct:function(){var t=this,e=t.__self;t._needSpecialUnbind&&e.doc.add(e.win).unbind("."+t._uniqId),t.__base(),delete E[t.un()._uniqId]}},{scope:null,doc:b,win:g,_processLive:function(t){var e=this._liveInitable;if("live"in this){var n="undefined"==typeof e;if(n^t){e=this.live()!==!1;var i=this.getName(),o=this.live;this.live=function(){return this.getName()===i?e:o.apply(this,arguments)}}}return e},init:function(t){"string"==typeof t?t=s(t):t||(t=L.scope);var e=i();return l(t,w).each(function(){c(s(this),e)}),this._runInitFns(),t},destruct:function(t,e){var n;e?(v(n=t.children()),t.empty()):(v(n=t),t.remove()),j.call(l(n,w)).each(function(t,e){var n=d(e);o.each(n,function(t){if(t.uniqId){var n=E[t.uniqId];n?m(n,e):delete y[t.uniqId]}}),delete M[i(e)]}),k={}},update:function(t,e){return this.destruct(t,!0),this.init(t.html(e))},replace:function(t,e){var n=t.prev(),i=t.parent();return this.destruct(t),this.init(n.length?s(e).insertAfter(n):s(e).prependTo(i))},append:function(t,e){return this.init(s(e).appendTo(t))},prepend:function(t,e){return this.init(s(e).prependTo(t))},before:function(t,e){return this.init(s(e).insertBefore(t))},after:function(t,e){return this.init(s(e).insertAfter(t))},_buildCtxEventName:function(t){return this._name+":"+t},_liveClassBind:function(t,e,n,o){if(e.indexOf(" ")>-1)e.split(" ").forEach(function(e){this._liveClassBind(t,e,n,o)},this);else{var r=T[e],u=i(n);r||(r=T[e]={},L.scope.bind(e,s.proxy(this._liveClassTrigger,this))),r=r[t]||(r[t]={uniqIds:{},fns:[]}),u in r.uniqIds||(r.fns.push({uniqId:u,fn:this._buildLiveEventFn(n,o)}),r.uniqIds[u]=r.fns.length-1)}return this},_liveClassUnbind:function(t,e,n){var o=T[e];if(o)if(n){if(o=o[t]){var r=i(n);if(r in o.uniqIds){var s=o.uniqIds[r],u=o.fns.length-1;for(o.fns.splice(s,1);u>s;)o.uniqIds[o.fns[s++].uniqId]=s-1;delete o.uniqIds[r]}}}else delete o[t];return this},_liveClassTrigger:function(t){var e=T[t.type];if(e){var n=t.target,i=[];for(var o in e)i.push(o);do for(var r=" "+n.className+" ",u=0;o=i[u++];)if(r.indexOf(" "+o+" ")>-1){for(var c,a=0,h=e[o].fns,l=!1;c=h[a++];)c.fn.call(s(n),t)===!1&&(l=!0);if(l&&t.preventDefault(),l||t.isPropagationStopped())return;i.splice(--u,1)}while(i.length&&(n=n.parentNode))}},_buildLiveEventFn:function(t,e){var n=this;return function(i){i.currentTarget=this;var o=[n._name,s(this).closest(n.buildSelector()),_,!0],r=a.apply(null,e?o.concat([t,i]):o);return r&&!e&&t?t.apply(r,arguments):void 0}},liveInitOnEvent:function(t,e,n){return this.liveBindTo(t,e,n,!0)},liveBindTo:function(t,e,n,i){return(!e||r.isFunction(e))&&(n=e,e=t,t=_),t&&"string"!=typeof t||(t={elem:t}),t.elem&&t.elem.indexOf(" ")>0?(t.elem.split(" ").forEach(function(o){this._liveClassBind(this.buildClass(o,t.modName,t.modVal),e,n,i)},this),this):this._liveClassBind(this.buildClass(t.elem,t.modName,t.modVal),e,n,i)},liveUnbindFrom:function(t,e,n){return(!e||r.isFunction(e))&&(n=e,e=t,t=_),t&&t.indexOf(" ")>1?(t.split(" ").forEach(function(t){this._liveClassUnbind(this.buildClass(t),e,n)},this),this):this._liveClassUnbind(this.buildClass(t),e,n)},_liveInitOnBlockEvent:function(t,e,n,i){var o=this._name;return I[e].on(t,function(t){var e=arguments,r=t.target[i](o);n&&r.forEach(function(t){n.apply(t,e)})}),this},liveInitOnBlockEvent:function(t,e,n){return this._liveInitOnBlockEvent(t,e,n,"findBlocksOn")},liveInitOnBlockInsideEvent:function(t,e,n){return this._liveInitOnBlockEvent(t,e,n,"findBlocksOutside")},on:function(t,e,n,i,o){return"object"==typeof t&&t.jquery?this._liveCtxBind(t,e,n,i,o):this.__base(t,e,n,i)},un:function(t,e,n,i){return"object"==typeof t&&t.jquery?this._liveCtxUnbind(t,e,n,i):this.__base(t,e,n)},_liveCtxBind:function(t,e,n,s,u){if("object"==typeof e){if(!r.isFunction(n)&&!r.isFunction(s))return o.each(e,function(e,i){this._liveCtxBind(t,i,e,n)},this),this;e=this._buildModEventName(e)}if(r.isFunction(n)&&(u=s,s=n,n=_),e.indexOf(" ")>-1)e.split(" ").forEach(function(e){this._liveCtxBind(t,e,n,s,u)},this);else{var c=this._buildCtxEventName(e),a=P[c]||(P[c]={counter:0,ctxs:{}});t.each(function(){var t=i(this),e=a.ctxs[t];e||(e=a.ctxs[t]={},++a.counter),e[i(s)+(u?i(u):"")]={fn:s,data:n,ctx:u}})}return this},_liveCtxUnbind:function(t,e,n,s){"object"==typeof e&&r.isFunction(n)&&(e=this._buildModEventName(e));var u=P[e=this._buildCtxEventName(e)];return u&&(t.each(function(){var t,e=i(this,!0);e&&(t=u.ctxs[e])&&(n&&delete t[i(n)+(s?i(s):"")],(!n||o.isEmpty(t))&&(u.counter--,delete u.ctxs[e]))}),u.counter||delete P[e]),this},_extractElemNameFrom:function(t){if(t.__bemElemName)return t.__bemElemName;var e=t[0].className.match(this._buildElemNameRE());return e?e[1]:_},_buildModClassPrefix:function(t,e){return this._name+(e?D+("string"==typeof e?e:this._extractElemNameFrom(e)):"")+O+t},_buildModValRE:function(t,e,n){return new RegExp("(\\s|^)"+this._buildModClassPrefix(t,e)+"(?:"+O+"("+C+"))?(?=\\s|$)",n)},_buildElemNameRE:function(){return new RegExp(this._name+D+"("+C+")(?:\\s|$)")},buildClass:function(t,e,n){return V(this._name,t,e,n)},buildSelector:function(t,e,n){return"."+this.buildClass(t,e,n)}});s.fn.bem=function(t,e){return a(t,this,e,!0)._init()},s(function(){L.scope=s("body")}),t(L)}),function(){var t=modules.define;modules.define=function(e,n){t.apply(modules,arguments),"i-bem__dom_init"!==e&&arguments.length>2&&~n.indexOf("i-bem__dom")&&modules.define("i-bem__dom_init",[e],function(t,e,n){t(n)})}}(),modules.define("jquery",["loader_type_js","jquery__config"],function(t,e,n){function i(e){t(e?jQuery:jQuery.noConflict(!0))}"undefined"!=typeof jQuery?i(!0):e(n.url,i)}),modules.define("loader_type_js",function(t){var e={},n={},i=document.getElementsByTagName("head")[0],o=function(t,n){var i,o=e[t],r=0;for(delete e[t];i=o[r++];)i[n]&&i[n]()},r=function(t){n[t]=!0,o(t,"success")},s=function(t){o(t,"error")};t(function(t,o,u){if(n[t])return void o();if(e[t])return void e[t].push({success:o,error:u});e[t]=[{success:o,error:u}];var c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.src=("file:"!==location.protocol||t.indexOf("//")?"":"http:")+t,"onload"in c?(c.onload=function(){c.onload=c.onerror=null,r(t)},c.onerror=function(){c.onload=c.onerror=null,s(t)}):c.onreadystatechange=function(){var e=this.readyState;("loaded"===e||"complete"===e)&&(c.onreadystatechange=null,r(t))},i.insertBefore(c,i.lastChild)})}),modules.define("jquery__config",function(t){t({url:"//yastatic.net/jquery/2.1.1/jquery.min.js"})}),modules.define("jquery__config",["ua","objects"],function(t,e,n,i){t(e.msie&&parseInt(e.version,10)<9?n.extend(i,{url:"//yastatic.net/jquery/1.11.1/jquery.min.js"}):i)}),modules.define("ua",function(t){var e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[],i={browser:n[1]||"",version:n[2]||"0"},o={};i.browser&&(o[i.browser]=!0,o.version=i.version),o.chrome?o.webkit=!0:o.webkit&&(o.safari=!0),t(o)}),modules.define("dom",["jquery"],function(t,e){t({contains:function(t,e){var n=!1;return e.each(function(){var e=this;do if(~t.index(e))return!(n=!0);while(e=e.parentNode);return n}),n},getFocused:function(){try{return e(document.activeElement)}catch(t){}},containsFocus:function(t){return this.contains(t,this.getFocused())},isFocusable:function(t){var e=t[0];if(!e)return!1;if(e.hasAttribute("tabindex"))return!0;switch(e.tagName.toLowerCase()){case"iframe":return!0;case"input":case"button":case"textarea":case"select":return!e.disabled;case"a":return!!e.href}return!1},isEditable:function(t){var e=t[0];if(!e)return!1;switch(e.tagName.toLowerCase()){case"input":var n=e.type;return!("text"!==n&&"password"!==n||e.disabled||e.readOnly);case"textarea":return!e.disabled&&!e.readOnly;default:return"true"===e.contentEditable}}})}),modules.define("i-bem__dom_init",["i-bem__dom"],function(t,e){t(function(t){return e.init(t)})}),modules.require(["i-bem__dom_init","jquery","next-tick"],function(t,e,n){e(function(){n(t)})}),modules.define("button",["i-bem__dom","control","jquery","dom","functions","keyboard__codes"],function(t,e,n,i,o,r,s){t(e.decl({block:this.name,baseBlock:n},{beforeSetMod:{pressed:{"true":function(){return!this.hasMod("disabled")||this.hasMod("togglable")}},focused:{"":function(){return!this._isPointerPressInProgress}}},onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._isPointerPressInProgress=!1,this._focusedByPointer=!1}},disabled:{"true":function(){this.__base.apply(this,arguments),this.hasMod("togglable")||this.delMod("pressed")}},focused:{"true":function(){this.__base.apply(this,arguments),this._focusedByPointer||this.setMod("focused-hard")},"":function(){this.__base.apply(this,arguments),this.delMod("focused-hard")}}},getText:function(){return this.elem("text").text()},setText:function(t){return this.elem("text").text(t||""),this},_onFocus:function(){this._isPointerPressInProgress||(this.__base.apply(this,arguments),this.bindToWin("unload",this._onUnload).bindTo("control","keydown",this._onKeyDown))},_onBlur:function(){this.unbindFromWin("unload",this._onUnload).unbindFrom("control","keydown",this._onKeyDown).__base.apply(this,arguments)},_onUnload:function(){this.delMod("focused")},_onPointerPress:function(){this.hasMod("disabled")||(this._isPointerPressInProgress=!0,this.bindToDoc("pointerrelease",this._onPointerRelease).setMod("pressed"))},_onPointerRelease:function(t){this._isPointerPressInProgress=!1,this.unbindFromDoc("pointerrelease",this._onPointerRelease),o.contains(this.elem("control"),i(t.target))?(this._focusedByPointer=!0,this._focus(),this._focusedByPointer=!1,this._updateChecked().emit("click")):this._blur(),this.delMod("pressed")
},_onKeyDown:function(t){if(!this.hasMod("disabled")){var e=t.keyCode;(e===s.SPACE||e===s.ENTER)&&this.unbindFrom("control","keydown",this._onKeyDown).bindTo("control","keyup",this._onKeyUp)._updateChecked().setMod("pressed")}},_onKeyUp:function(t){this.unbindFrom("control","keyup",this._onKeyUp).bindTo("control","keydown",this._onKeyDown).delMod("pressed"),t.keyCode===s.SPACE&&this._doAction(),this.emit("click")},_updateChecked:function(){return this.hasMod("togglable")&&(this.hasMod("togglable","check")?this.toggleMod("checked"):this.setMod("checked")),this},_doAction:r.noop},{live:function(){return this.liveBindTo("control","pointerpress",this.prototype._onPointerPress),this.__base.apply(this,arguments)}}))}),modules.define("jquery",function(t,e){function n(t){"use strict";var e,i=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=t,!t||!t.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return n.prototype.onClick.apply(i,arguments)},this.onMouse=function(){return n.prototype.onMouse.apply(i,arguments)},this.onTouchStart=function(){return n.prototype.onTouchStart.apply(i,arguments)},this.onTouchMove=function(){return n.prototype.onTouchMove.apply(i,arguments)},this.onTouchEnd=function(){return n.prototype.onTouchEnd.apply(i,arguments)},this.onTouchCancel=function(){return n.prototype.onTouchCancel.apply(i,arguments)},n.notNeeded(t)||(this.deviceIsAndroid&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(e=t.onclick,t.addEventListener("click",function(t){e(t)},!1),t.onclick=null))}n.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,n.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),n.prototype.deviceIsIOS4=n.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),n.prototype.deviceIsIOSWithBadTarget=n.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),n.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===t.type||t.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},n.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},n.prototype.sendClick=function(t,e){"use strict";var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},n.prototype.determineEventType=function(t){"use strict";return this.deviceIsAndroid&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},n.prototype.focus=function(t){"use strict";var e;this.deviceIsIOS&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},n.prototype.updateScrollParent=function(t){"use strict";var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},n.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},n.prototype.onTouchStart=function(t){"use strict";var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],this.deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<200&&t.preventDefault(),!0},n.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},n.prototype.onTouchMove=function(t){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},n.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},n.prototype.onTouchEnd=function(t){"use strict";var e,n,i,o,r,s=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(r=t.changedTouches[0],s=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||s,s.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=s.tagName.toLowerCase(),"label"===i){if(e=this.findControl(s)){if(this.focus(s),this.deviceIsAndroid)return!1;s=e}}else if(this.needsFocus(s))return t.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(s),this.deviceIsIOS4&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(o=s.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop)?!0:(this.needsClick(s)||(t.preventDefault(),this.sendClick(s,t)),!1)},n.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},n.prototype.onMouse=function(t){"use strict";return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},n.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},n.prototype.destroy=function(){"use strict";var t=this.layer;this.deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},n.notNeeded=function(t){"use strict";var e;if("undefined"==typeof window.ontouchstart)return!0;if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(!n.prototype.deviceIsAndroid)return!0;if(e=document.querySelector("meta[name=viewport]"),e&&-1!==e.content.indexOf("user-scalable=no"))return!0}return"none"===t.style.msTouchAction?!0:!1},n.attach=function(t){"use strict";return new n(t)};var i=e.event.special.pointerclick={setup:function(){e(this).on("click",i.handler)},teardown:function(){e(this).off("click",i.handler)},handler:function(t){t.button||(t.type="pointerclick",e.event.dispatch.apply(this,arguments),t.type="click")}};e(function(){n.attach(document.body),t(e)})}),function(t,e){"object"==typeof modules&&modules.isDefined("jquery")?modules.define("jquery",function(t,n){e(this.global,n),t(n)}):"function"==typeof jQuery&&e(t,jQuery)}(this,function(t,e){function n(t){var n=e.extend(new e.Event,t);return t.preventDefault&&(n.preventDefault=function(){t.preventDefault()}),n}function i(t,n){n||(n={});for(var i,o=e.Event(t),r=0;d>r;r++)i=l[r],o[i]=n[i]||f[r];o.buttons=n.buttons||0,o.x=o.clientX,o.y=o.clientY;var s=0;return s=n.pressure?n.pressure:o.buttons?.5:0,o.pointerId=n.pointerId||0,o.width=n.width||0,o.height=n.height||0,o.pressure=s,o.tiltX=n.tiltX||0,o.tiltY=n.tiltY||0,o.pointerType=n.pointerType||"",o.hwTimestamp=n.hwTimestamp||0,o.isPrimary=n.isPrimary||!1,o.which=n.which,o}function o(){if(u){var t=new Map;return t.pointers=a,t}this.keys=[],this.values=[]}function r(){m.eventHandler.apply(m,arguments)}var s=document,u=t.Map&&t.Map.prototype.forEach,c=t.MSPointerEvent&&"number"==typeof t.MSPointerEvent.MSPOINTER_TYPE_MOUSE,a=function(){return this.size};delete e.event.special.pointerenter,delete e.event.special.pointerleave;var h={bubbles:!1,cancelable:!1,view:null,detail:null,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null,pageX:0,pageY:0},l=Object.keys(h),d=l.length,f=l.map(function(t){return h[t]});o.prototype={set:function(t,e){var n=this.keys.indexOf(t);n>-1?this.values[n]=e:(this.keys.push(t),this.values.push(e))},has:function(t){return this.keys.indexOf(t)>-1},"delete":function(t){var e=this.keys.indexOf(t);e>-1&&(this.keys.splice(e,1),this.values.splice(e,1))},get:function(t){var e=this.keys.indexOf(t);return this.values[e]},clear:function(){this.keys.length=0,this.values.length=0},forEach:function(t,e){var n=this.keys;this.values.forEach(function(i,o){t.call(e,i,n[o],this)},this)},pointers:function(){return this.keys.length}};var p=new o,m={eventMap:{},eventSourceList:[],registerSource:function(t,e){var n=e.events;n&&(n.forEach(function(t){e[t]&&(this.eventMap[t]=function(){e[t].apply(e,arguments)})},this),this.eventSourceList.push(e))},register:function(t){for(var e,n=this.eventSourceList.length,i=0;n>i&&(e=this.eventSourceList[i]);i++)e.register.call(e,t)},unregister:function(t){for(var e,n=this.eventSourceList.length,i=0;n>i&&(e=this.eventSourceList[i]);i++)e.unregister.call(e,t)},down:function(t){t.bubbles=!0,this.fireEvent("pointerdown",t)},move:function(t){t.bubbles=!0,this.fireEvent("pointermove",t)},up:function(t){t.bubbles=!0,this.fireEvent("pointerup",t)},enter:function(t){t.bubbles=!1,this.fireEvent("pointerenter",t)},leave:function(t){t.bubbles=!1,this.fireEvent("pointerleave",t)},over:function(t){t.bubbles=!0,this.fireEvent("pointerover",t)},out:function(t){t.bubbles=!0,this.fireEvent("pointerout",t)},cancel:function(t){t.bubbles=!0,this.fireEvent("pointercancel",t)},leaveOut:function(t){this.out(t),this.contains(t.target,t.relatedTarget)||this.leave(t)},enterOver:function(t){this.over(t),this.contains(t.target,t.relatedTarget)||this.enter(t)},contains:function(t,n){return t===n||e.contains(t,n)},eventHandler:function(t){if(!t._handledByPE){var e,n=t.type;(e=this.eventMap&&this.eventMap[n])&&e(t),t._handledByPE=!0}},listen:function(t,e){e.forEach(function(e){this.addEvent(t,e)},this)},unlisten:function(t,e){e.forEach(function(e){this.removeEvent(t,e)},this)},addEvent:function(t,n){e(t).on(n,r)},removeEvent:function(t,n){e(t).off(n,r)},getTarget:function(t){return t._target},makeEvent:function(t,e){var n=new i(t,e);return e.preventDefault&&(n.preventDefault=e.preventDefault),n._target=n._target||e.target,n},dispatchEvent:function(t){var n=this.getTarget(t);return n?e(n).trigger(t):void 0},fireEvent:function(t,e){var n=this.makeEvent(t,e);return this.dispatchEvent(n)}},v=200,_=25,g=1,b=2500,y=20,E={POINTER_TYPE:"mouse",events:["mousedown","mousemove","mouseup","mouseover","mouseout"],register:function(t){m.listen(t,this.events)},unregister:function(t){m.unlisten(t,this.events)},lastTouches:[],isEventSimulatedFromTouch:function(t){for(var e,n=this.lastTouches,i=t.clientX,o=t.clientY,r=0,s=n.length;s>r&&(e=n[r]);r++){var u=Math.abs(i-e.x),c=Math.abs(o-e.y);if(_>=u&&_>=c)return!0}},prepareEvent:function(t){var e=n(t);return e.pointerId=g,e.isPrimary=!0,e.pointerType=this.POINTER_TYPE,e},mousedown:function(t){if(!this.isEventSimulatedFromTouch(t)){p.has(g)&&this.cancel(t),p.set(g,t);var e=this.prepareEvent(t);m.down(e)}},mousemove:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);m.move(e)}},mouseup:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=p.get(g);if(e&&e.button===t.button){var n=this.prepareEvent(t);m.up(n),this.cleanupMouse()}}},mouseover:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);m.enterOver(e)}},mouseout:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);m.leaveOut(e)}},cancel:function(t){var e=this.prepareEvent(t);m.cancel(e),this.cleanupMouse()},cleanupMouse:function(){p["delete"](g)}},k={events:["touchstart","touchmove","touchend","touchcancel"],register:function(t){m.listen(t,this.events)},unregister:function(t){m.unlisten(t,this.events)},POINTER_TYPE:"touch",clickCount:0,resetId:null,firstTouch:null,isPrimaryTouch:function(t){return this.firstTouch===t.identifier},setPrimaryTouch:function(t){(0===p.pointers()||1===p.pointers()&&p.has(g))&&(this.firstTouch=t.identifier,this.firstXY={X:t.clientX,Y:t.clientY},this.scrolling=null,this.cancelResetClickCount())},removePrimaryPointer:function(t){t.isPrimary&&(this.firstTouch=null,this.resetClickCount())},resetClickCount:function(){var t=this;this.resetId=setTimeout(function(){t.clickCount=0,t.resetId=null},v)},cancelResetClickCount:function(){this.resetId&&clearTimeout(this.resetId)},typeToButtons:function(t){return"touchstart"===t||"touchmove"===t?1:0},findTarget:function(t){return s.elementFromPoint(t.clientX,t.clientY)},touchToPointer:function(t){var e=this.currentTouchEvent,i=n(t);i.pointerId=t.identifier+2,i.target=this.findTarget(i),i.bubbles=!0,i.cancelable=!0,i.detail=this.clickCount,i.button=0,i.buttons=this.typeToButtons(e.type),i.width=t.webkitRadiusX||t.radiusX||0,i.height=t.webkitRadiusY||t.radiusY||0,i.pressure=t.mozPressure||t.webkitForce||t.force||.5,i.isPrimary=this.isPrimaryTouch(t),i.pointerType=this.POINTER_TYPE;var o=this;return i.preventDefault=function(){o.scrolling=!1,o.firstXY=null,e.preventDefault()},i},processTouches:function(t,e){var n=t.originalEvent.changedTouches;this.currentTouchEvent=t;for(var i,o=0;o<n.length;o++)i=n[o],e.call(this,this.touchToPointer(i))},shouldScroll:function(){return!0},findTouch:function(t,e){for(var n,i=0,o=t.length;o>i&&(n=t[i]);i++)if(n.identifier===e)return!0},vacuumTouches:function(t){var e=t.touches;if(p.pointers()>=e.length){var n=[];p.forEach(function(t,i){i===g||this.findTouch(e,i-2)||n.push(t.outEvent)},this),n.forEach(this.cancelOut,this)}},dedupSynthMouse:function(t){var e=E.lastTouches,n=t.changedTouches[0];if(this.isPrimaryTouch(n)){var i={x:n.clientX,y:n.clientY};e.push(i),setTimeout(function(){var t=e.indexOf(i);t>-1&&e.splice(t,1)},b)}},touchstart:function(t){var e=t.originalEvent;this.vacuumTouches(e),this.setPrimaryTouch(e.changedTouches[0]),this.dedupSynthMouse(e),this.scrolling||(this.clickCount++,this.processTouches(t,this.overDown))},touchmove:function(t){var e=t.originalEvent;if(this.scrolling){if(this.firstXY){var n=this.firstXY,i=e.changedTouches[0],o=i.clientX-n.X,r=i.clientY-n.Y,s=Math.sqrt(o*o+r*r);s>=y&&(this.touchcancel(t),this.scrolling=!0,this.firstXY=null)}}else null===this.scrolling&&this.shouldScroll(e)?this.scrolling=!0:(t.preventDefault(),this.processTouches(t,this.moveOverOut))},touchend:function(t){var e=t.originalEvent;this.dedupSynthMouse(e),this.processTouches(t,this.upOut)},touchcancel:function(t){this.processTouches(t,this.cancelOut)},overDown:function(t){var e=t.target;p.set(t.pointerId,{target:e,outTarget:e,outEvent:t}),m.over(t),m.enter(t),m.down(t)},moveOverOut:function(t){var e=p.get(t.pointerId);if(e){m.move(t);var n=e.outEvent,i=e.outTarget;n&&i!==t.target&&(t.relatedTarget=i,n.relatedTarget=t.target,n.target=i,t.target?(m.leaveOut(n),m.enterOver(t)):(t.target=i,t.relatedTarget=null,this.cancelOut(t))),e.outEvent=t,e.outTarget=t.target}},upOut:function(t){m.up(t),m.out(t),m.leave(t),this.cleanUpPointer(t)},cancelOut:function(t){m.cancel(t),m.out(t),m.leave(t),this.cleanUpPointer(t)},cleanUpPointer:function(t){p["delete"](t.pointerId),this.removePrimaryPointer(t)}},M={events:["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerOut","MSPointerOver","MSPointerCancel"],register:function(t){m.listen(t,this.events)},unregister:function(t){m.unlisten(t,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(t){var e=n(t);return c&&(e.pointerType=this.POINTER_TYPES[t.pointerType]),e},MSPointerDown:function(t){p.set(t.pointerId,t);var e=this.prepareEvent(t);m.down(e)},MSPointerMove:function(t){var e=this.prepareEvent(t);m.move(e)},MSPointerUp:function(t){var e=this.prepareEvent(t);m.up(e),this.cleanup(t.pointerId)},MSPointerOut:function(t){var e=this.prepareEvent(t);m.leaveOut(e)},MSPointerOver:function(t){var e=this.prepareEvent(t);m.enterOver(e)},MSPointerCancel:function(t){var e=this.prepareEvent(t);m.cancel(e),this.cleanup(t.pointerId)},cleanup:function(t){p["delete"](t)}},P=t.navigator;P.msPointerEnabled?m.registerSource("ms",M):(m.registerSource("mouse",E),"undefined"!=typeof t.ontouchstart&&m.registerSource("touch",k)),m.register(s)}),modules.define("jquery",function(t,e){e.each({pointerpress:"pointerdown",pointerrelease:"pointerup pointercancel"},function(t,n){function i(n){var i,o=n.handleObj.origType;return n.button||(n.type=t,i=e.event.dispatch.apply(this,arguments),n.type=o),i}e.event.special[t]={setup:function(){return e(this).on(n,i),!1},teardown:function(){return e(this).off(n,i),!1}}}),t(e)}),modules.define("keyboard__codes",function(t){t({BACKSPACE:8,TAB:9,ENTER:13,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:41,DELETE:42})}),modules.define("control",["i-bem__dom","dom","next-tick"],function(t,e,n,i){t(e.decl(this.name,{beforeSetMod:{focused:{"true":function(){return!this.hasMod("disabled")}}},onSetMod:{js:{inited:function(){this._focused=n.containsFocus(this.elem("control")),this._focused?this.setMod("focused"):this.hasMod("focused")&&this._focus(),this._tabIndex=this.elem("control").attr("tabindex"),this.hasMod("disabled")&&"undefined"!==this._tabIndex&&this.elem("control").removeAttr("tabindex")}},focused:{"true":function(){this._focused||this._focus()},"":function(){this._focused&&this._blur()}},disabled:{"*":function(t,e){this.elem("control").prop(t,!!e)},"true":function(){this.delMod("focused"),"undefined"!=typeof this._tabIndex&&this.elem("control").removeAttr("tabindex")},"":function(){"undefined"!=typeof this._tabIndex&&this.elem("control").attr("tabindex",this._tabIndex)}}},getName:function(){return this.elem("control").attr("name")||""},getVal:function(){return this.elem("control").val()},_onFocus:function(){this._focused=!0,this.setMod("focused")},_onBlur:function(){this._focused=!1,this.delMod("focused")},_focus:function(){n.isFocusable(this.elem("control"))&&this.elem("control").focus()},_blur:function(){this.elem("control").blur()}},{live:function(){this.liveBindTo("control","focusin",this.prototype._onFocus).liveBindTo("control","focusout",this.prototype._onBlur);var t=n.getFocused();if(t.hasClass(this.buildClass("control"))){var e=this;i(function(){if(t[0]===n.getFocused()[0]){var i=t.closest(e.buildSelector());i&&i.bem(e.getName())}})}}}))}),modules.define("control",function(t,e){t(e.decl({beforeSetMod:{hovered:{"true":function(){return!this.hasMod("disabled")}}},onSetMod:{disabled:{"true":function(){this.__base.apply(this,arguments),this.delMod("hovered")}},hovered:{"true":function(){this.bindTo("mouseleave",this._onMouseLeave)},"":function(){this.unbindFrom("mouseleave",this._onMouseLeave)}}},_onMouseOver:function(){this.setMod("hovered")},_onMouseLeave:function(){this.delMod("hovered")}},{live:function(){return this.liveBindTo("mouseover",this.prototype._onMouseOver).__base.apply(this,arguments)}}))}),modules.define("dropdown",["i-bem__dom","popup"],function(t,e){t(e.decl(this.name,{beforeSetMod:{opened:{"true":function(){return this.hasMod("disabled")?!1:void 0}}},onSetMod:{js:{inited:function(){this._switcher=null,this._popup=null}},opened:function(t,e){this.getPopup().setMod("visible",e)},disabled:{"*":function(t,e){this.getSwitcher().setMod(t,e)},"true":function(){this.getPopup().delMod("visible")}}},getPopup:function(){return this._popup||(this._popup=this.findBlockInside("popup").setAnchor(this.getSwitcher()).on({modName:"visible",modVal:"*"},this._onPopupVisibilityChange,this))},getSwitcher:function(){return this._switcher||(this._switcher=this.findBlockInside(this.getMod("switcher")))},_onPopupVisibilityChange:function(t,e){this.setMod("opened",e.modVal)}},{live:!0,onSwitcherClick:function(t){this._switcher||(this._switcher=t.target),this.toggleMod("opened")}}))}),modules.define("popup",["i-bem__dom"],function(t,e){var n,i=1e3,o={};t(e.decl(this.name,{onSetMod:{js:{inited:function(){this._parentPopup=n,this._zIndex=null,this._zIndexGroupLevel=null,this._isAttachedToScope=!1},"":function(){this.delMod("visible")}},visible:{"true":function(){this._isAttachedToScope||(e.scope.append(this.domElem),this._isAttachedToScope=!0),this._captureZIndex()._bindToParentPopup().bindTo("pointerpress",this._onPointerPress)},"":function(){this._releaseZIndex()._unbindFromParentPopup().unbindFrom("pointerpress",this._onPointerPress)}}},setContent:function(t){return e.update(this.domElem,t),this},_calcZIndexGroupLevel:function(){var t=this.params.zIndexGroupLevel,e=this._getParentPopup();return e&&(t+=e._zIndexGroupLevel),t},_onPointerPress:function(){var t=this;do t._inPopupPointerPress=!0;while(t=t._getParentPopup())},_bindToParentPopup:function(){var t=this._getParentPopup();return t&&t.on({modName:"visible",modVal:""},this._onParentPopupHide,this),this},_unbindFromParentPopup:function(){return this._parentPopup&&this._parentPopup.un({modName:"visible",modVal:""},this._onParentPopupHide,this),this._parentPopup=n,this},_onParentPopupHide:function(){this.delMod("visible")},_getParentPopup:function(){return this._parentPopup},_captureZIndex:function(){var t=null===this._zIndexGroupLevel?this._zIndexGroupLevel=this._calcZIndexGroupLevel():this._zIndexGroupLevel,e=o[t]||(o[t]=[(t+1)*i]),n=this._zIndex;return this._zIndex=e[e.push(e[e.length-1]+1)-1],this._zIndex!==n&&this.domElem.css("z-index",this._zIndex),this},_releaseZIndex:function(){var t=o[this._zIndexGroupLevel];return t.splice(t.indexOf(this._zIndex),1),this},_recaptureZIndex:function(){return this._releaseZIndex(),this._zIndexGroupLevel=null,this._captureZIndex()},getDefaultParams:function(){return{zIndexGroupLevel:0}}},{live:!0}))}),modules.define("functions__throttle",function(t){var e=this.global;t(function(t,n,i,o){var r=typeof i;"undefined"===r?i=!0:3===arguments.length&&"boolean"!==r&&(o=i,i=!0);var s,u,c,a=function(){c?(t.apply(o,u),c=!1,s=e.setTimeout(a,n)):s=null};return function(){u=arguments,o||(o=this),c=!0,s||(i?a():s=e.setTimeout(a,n))}})}),modules.define("popup",["jquery","i-bem__dom","ua","dom","keyboard__codes"],function(t,e,n,i,o,r,s){function u(t){t.keyCode===r.ESC&&a.length&&!o.isEditable(e(t.target))&&a[0].delMod("visible")}var c=i.opera&&i.version<12.1?"keypress":"keydown",a=[];t(s.decl({modName:"autoclosable",modVal:!0},{onSetMod:{visible:{"true":function(){a.unshift(this),this.nextTick(function(){this.bindToDoc("pointerclick",this._onDocPointerClick)}).__base.apply(this,arguments)},"":function(){a.splice(a.indexOf(this),1),this.unbindFromDoc("pointerclick",this._onDocPointerClick).__base.apply(this,arguments)}}},_onDocPointerClick:function(t){this.hasMod("target","anchor")&&o.contains(this._anchor,e(t.target))||(this._inPopupPointerPress?this._inPopupPointerPress=null:this.delMod("visible"))}},{live:function(){n.doc.on(c,u)}}))}),modules.define("popup",["i-bem__dom","objects"],function(t,e,n,i){var o,r=.99,s=["bottom-left","bottom-center","bottom-right","top-left","top-center","top-right","right-top","right-center","right-bottom","left-top","left-center","left-bottom"],u=e.win;t(i.decl({modName:"target"},{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._lastDrawingCss={left:o,top:o,zIndex:o,display:o}}},visible:{"true":function(){this.__base.apply(this,arguments),this.bindToWin("scroll resize",this._onWinScollAndResize).redraw()},"":function(){this.__base.apply(this,arguments),this.unbindFromWin("scroll resize",this._onWinScollAndResize)}}},setContent:function(){return this.__base.apply(this,arguments).redraw()},redraw:function(){if(!this.hasMod("visible"))return this;var t=this._calcBestDrawingParams();this.setMod("direction",t.direction);var e=this._lastDrawingCss,i=!1;return n.each(this._calcDrawingCss(t),function(t,n){e[n]!==t&&(e[n]=t,i=!0)}),i&&this.domElem.css(e),this},_calcDrawingCss:function(t){return{left:t.left,top:t.top}},calcPossibleDrawingParams:function(){var t=this._calcTargetDimensions(),e=this._calcViewportDimensions(),n=this.params,i=n.mainOffset,o=n.secondaryOffset,r=n.viewportOffset;return this.params.directions.map(function(n){var s={direction:n,width:0,height:0,left:0,top:0};return this._checkMainDirection(n,"bottom")?(s.top=t.top+t.height+i,s.height=e.bottom-s.top-r):this._checkMainDirection(n,"top")?(s.height=t.top-e.top-i-r,s.top=t.top-s.height-i):(this._checkSecondaryDirection(n,"center")?(s.height=e.bottom-e.top-2*r,s.top=t.top+t.height/2-s.height/2):this._checkSecondaryDirection(n,"bottom")?(s.height=t.top+t.height-e.top-o-r,s.top=t.top+t.height-s.height-o):this._checkSecondaryDirection(n,"top")&&(s.top=t.top+o,s.height=e.bottom-s.top-r),this._checkMainDirection(n,"left")?(s.width=t.left-e.left-i-r,s.left=t.left-s.width-i):(s.left=t.left+t.width+i,s.width=e.right-s.left-r)),this._checkSecondaryDirection(n,"right")?(s.width=t.left+t.width-e.left-o-r,s.left=t.left+t.width-s.width-o):this._checkSecondaryDirection(n,"left")?(s.left=t.left+o,s.width=e.right-s.left-r):this._checkSecondaryDirection(n,"center")&&this._checkMainDirection(n,"top","bottom")&&(s.width=e.right-e.left-2*r,s.left=t.left+t.width/2-s.width/2),s},this)},_calcBestDrawingParams:function(){for(var t,e,n,i,o,s,u=this._calcPopupDimensions(),c=this._calcTargetDimensions(),a=this._calcViewportDimensions(),h=this.params.directions,l=0;(t=h[l++])&&(e=this._calcPos(t,c,u),n=this._calcViewportFactor(e,a,u),(1===l||n>s||!s&&this.hasMod("direction",t))&&(i=t,s=n,o=e),!(s>r)););return{direction:i,left:o.left,top:o.top}},_calcPopupDimensions:function(){var t=this.domElem.outerWidth(),e=this.domElem.outerHeight();return{width:t,height:e,area:t*e}},_calcTargetDimensions:function(){},_calcViewportDimensions:function(){var t=u.scrollTop(),e=u.scrollLeft(),n=u.width(),i=u.height();return{top:t,left:e,bottom:t+i,right:e+n}},_calcPos:function(t,e,n){var i={},o=this.params.mainOffset,r=this.params.secondaryOffset;return this._checkMainDirection(t,"bottom")?i.top=e.top+e.height+o:this._checkMainDirection(t,"top")?i.top=e.top-n.height-o:this._checkMainDirection(t,"left")?i.left=e.left-n.width-o:this._checkMainDirection(t,"right")&&(i.left=e.left+e.width+o),this._checkSecondaryDirection(t,"right")?i.left=e.left+e.width-n.width-r:this._checkSecondaryDirection(t,"left")?i.left=e.left+r:this._checkSecondaryDirection(t,"bottom")?i.top=e.top+e.height-n.height-r:this._checkSecondaryDirection(t,"top")?i.top=e.top+r:this._checkSecondaryDirection(t,"center")&&(this._checkMainDirection(t,"top","bottom")?i.left=e.left+e.width/2-n.width/2:this._checkMainDirection(t,"left","right")&&(i.top=e.top+e.height/2-n.height/2)),i},_calcViewportFactor:function(t,e,n){var i=this.params.viewportOffset,o=Math.max(t.left,e.left+i),r=Math.min(t.left+n.width,e.right-i),s=Math.max(t.top,e.top+i),u=Math.min(t.top+n.height,e.bottom-i);return r>o&&u>s?(r-o)*(u-s)/n.area:0},_checkMainDirection:function(t,e,n){return!t.indexOf(e)||n&&!t.indexOf(n)},_checkSecondaryDirection:function(t,e){return~t.indexOf("-"+e)},_onWinScollAndResize:function(){this.redraw()},getDefaultParams:function(){return n.extend(this.__base.apply(this,arguments),{mainOffset:0,secondaryOffset:0,viewportOffset:0,directions:s})}}))}),modules.define("popup",["i-bem__dom","jquery","objects","functions__throttle"],function(t,e,n,i,o,r){var s,u=100;t(r.decl({modName:"target",modVal:"anchor"},{beforeSetMod:{visible:{"true":function(){if(!this._anchor)throw Error("Can't show popup without anchor")}}},onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._anchor=null,this._anchorParents=null,this._destructor=null,this._isAnchorVisible=s,this._updateIsAnchorVisible=o(this._updateIsAnchorVisible,u,!1,this)},"":function(){this.__base.apply(this,arguments),this._unbindFromDestructor()}},visible:{"true":function(){this._anchorParents=this._anchor.parents(),this._bindToAnchorParents(),this.__base.apply(this,arguments)},"":function(){this.__base.apply(this,arguments),this._unbindFromAnchorParents(),this._anchorParents=null,this._isAnchorVisible=s}}},setAnchor:function(t){return this._unbindFromAnchorParents()._unbindFromParentPopup()._unbindFromDestructor(),this._anchor=t instanceof e?t.domElem:t,this._destructor=this._anchor.bem("_"+this.__self.getName()+"-destructor"),this._isAnchorVisible=s,this._bindToDestructor(),this.hasMod("visible")?(this._anchorParents=this._anchor.parents(),this._recaptureZIndex()._bindToAnchorParents()._bindToParentPopup().redraw()):this._anchorParents=null,this},_calcTargetDimensions:function(){var t=this._anchor,e=t.offset();return{left:e.left,top:e.top,width:t.outerWidth(),height:t.outerHeight()}},_calcDrawingCss:function(t){return"undefined"==typeof this._isAnchorVisible&&(this._isAnchorVisible=this._calcIsAnchorVisible()),i.extend(this.__base(t),{display:this._isAnchorVisible?"":"none"})},_calcIsAnchorVisible:function(){var t=this._anchor,e=t.offset(),i=e.left,o=e.top,r=i+t.outerWidth(),s=o+t.outerHeight(),u=this.getMod("direction"),c=Math.floor(this._checkMainDirection(u,"top")||this._checkSecondaryDirection(u,"top")?o:s),a=Math.floor(this._checkMainDirection(u,"left")||this._checkSecondaryDirection(u,"left")?i:r),h=!0;return this._anchorParents.each(function(){if("BODY"===this.tagName)return!1;var t=n(this),e=t.css("overflow-y"),i="scroll"===e||"hidden"===e||"auto"===e,o=t.css("overflow-x"),r="scroll"===o||"hidden"===o||"auto"===o;if(i||r){var s=t.offset();if(i){var u=Math.floor(s.top);if(u>c||u+t.outerHeight()<c)return h=!1}if(r){var l=Math.floor(s.left);return h=!(l>a||l+t.outerWidth()<a)}}}),h},_calcZIndexGroupLevel:function(){var t=this.__base.apply(this,arguments);return this._destructor.findBlocksOutside("z-index-group").reduce(function(t,e){return t+Number(e.getMod("level"))},t)},_bindToAnchorParents:function(){return this.bindTo(this._anchorParents,"scroll",this._onAnchorParentsScroll)},_unbindFromAnchorParents:function(){return this._anchorParents&&this.unbindFrom(this._anchorParents,"scroll",this._onAnchorParentsScroll),this},_onAnchorParentsScroll:function(){this.redraw()._updateIsAnchorVisible()},_onWinScollAndResize:function(){this.__base.apply(this,arguments),this._updateIsAnchorVisible()},_updateIsAnchorVisible:function(){if(this.hasMod("js","inited")&&this.hasMod("visible")){var t=this._calcIsAnchorVisible();
t!==this._isAnchorVisible&&(this._isAnchorVisible=t,this.redraw())}},_bindToDestructor:function(){return this._destructor.on({modName:"js",modVal:""},this._onPopupAnchorDestruct,this),this},_unbindFromDestructor:function(){return this._destructor&&this._destructor.un({modName:"js",modVal:""},this._onPopupAnchorDestruct,this),this},_onPopupAnchorDestruct:function(){e.destruct(this.domElem)},_getParentPopup:function(){return this._parentPopup===s?this._parentPopup=this.findBlockOutside(this._anchor,this.__self.getName()):this._parentPopup}}))}),modules.define("popup",["objects"],function(t,e,n){t(n.decl({modName:"theme",modVal:"islands"},{getDefaultParams:function(){return e.extend(this.__base(),{mainOffset:5,viewportOffset:5})}}))}),modules.define("dropdown",["link"],function(t,e,n){t(n.decl({modName:"switcher",modVal:"link"},null,{live:function(){return this.liveInitOnBlockInsideEvent("click","link",this.onSwitcherClick),this.__base.apply(this,arguments)}}))}),modules.define("link",["i-bem__dom","control"],function(t,e,n){t(e.decl({block:this.name,baseBlock:n},{onSetMod:{js:{inited:function(){this._url=this.params.url||this.domElem.attr("href"),this.hasMod("disabled")&&this.domElem.removeAttr("href")}},disabled:{"true":function(){this.__base.apply(this,arguments),this.domElem.removeAttr("href")},"":function(){this.__base.apply(this,arguments),this.domElem.attr("href",this._url)}}},getUrl:function(){return this._url},setUrl:function(t){return this._url=t,this.hasMod("disabled")||this.domElem.attr("href",t),this},_onPointerClick:function(t){this.hasMod("disabled")?t.preventDefault():this.emit("click")}},{live:function(){return this.liveBindTo("control","pointerclick",this.prototype._onPointerClick),this.__base.apply(this,arguments)}}))}),modules.define("link",function(t,e){t(e.decl({modName:"pseudo",modVal:!0},{_onPointerClick:function(t){t.preventDefault(),this.__base.apply(this,arguments)}}))}),modules.define("dropdown",["button"],function(t,e,n){t(n.decl({modName:"switcher",modVal:"button"},{onSetMod:{opened:function(t,e){this.__base.apply(this,arguments);var n=this.getSwitcher();n.hasMod("togglable","check")&&n.setMod("checked",e)}}},{live:function(){return this.liveInitOnBlockInsideEvent("click","button",this.onSwitcherClick),this.__base.apply(this,arguments)}}))}),modules.define("menu",["i-bem__dom","control","keyboard__codes","menu-item"],function(t,e,n,i){t(e.decl({block:this.name,baseBlock:n},{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._hoveredItem=null,this._items=null,this.hasMod("focused")&&this.bindToDoc("keydown",this._onKeyDown)}},focused:{"true":function(){this.__base.apply(this,arguments),this.bindToDoc("keydown",this._onKeyDown)},"":function(){this.unbindFromDoc("keydown",this._onKeyDown).__base.apply(this,arguments),this._hoveredItem&&this._hoveredItem.delMod("hovered")}},disabled:function(t,e){this.getItems().forEach(function(n){n.setMod(t,e)})}},getItems:function(){return this._items||(this._items=this.findBlocksInside("menu-item"))},setContent:function(t){return e.update(this.domElem,t),this._hoveredItem=null,this._items=null,this},_onItemHover:function(t){t.hasMod("hovered")?(this._hoveredItem&&this._hoveredItem.delMod("hovered"),this._scrollToItem(this._hoveredItem=t)):this._hoveredItem===t&&(this._hoveredItem=null)},_scrollToItem:function(t){var e,n=this.domElem.offset().top,i=t.domElem.offset().top;((e=i-n)<0||(e=i+t.domElem.outerHeight()-n-this.domElem.outerHeight())>0)&&this.domElem.scrollTop(this.domElem.scrollTop()+e)},_onItemClick:function(t,e){this.emit("item-click",{item:t,source:e.source})},_onKeyDown:function(t){var e=t.keyCode,n=e===i.UP||e===i.DOWN;if(n&&!t.shiftKey){t.preventDefault();var o=e-39,r=this.getItems(),s=r.length,u=r.indexOf(this._hoveredItem),c=u,a=0;do if(c+=o,c=0>c?s-1:c>=s?0:c,++a===s)return;while(r[c].hasMod("disabled"));r[c].setMod("hovered")}}},{live:function(){return this.liveInitOnBlockInsideEvent({modName:"hovered",modVal:"*"},"menu-item",function(t){this._onItemHover(t.target)}).liveInitOnBlockInsideEvent("click","menu-item",function(t,e){this._onItemClick(t.target,e)}),this.__base.apply(this,arguments)}}))}),modules.define("menu-item",["i-bem__dom"],function(t,e){t(e.decl(this.name,{beforeSetMod:{hovered:{"true":function(){return!this.hasMod("disabled")}}},onSetMod:{js:{inited:function(){this.bindTo("pointerleave",this._onPointerLeave)}},disabled:{"true":function(){this.__base.apply(this,arguments),this.delMod("hovered")}}},isValEq:function(t){var e=this.params.val;return"object"==typeof e?JSON.stringify(e)===JSON.stringify(t):e===t},getVal:function(){return this.params.val},getText:function(){return this.params.text||this.domElem.text()},_onPointerOver:function(){this.setMod("hovered")},_onPointerLeave:function(){this.delMod("hovered")},_onPointerClick:function(){this.hasMod("disabled")||this.emit("click",{source:"pointer"})}},{live:function(){var t=this.prototype;this.liveBindTo("pointerover",t._onPointerOver).liveBindTo("pointerclick",t._onPointerClick)}}))}),modules.define("menu",["keyboard__codes"],function(t,e,n){t(n.decl({modName:"mode"},{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._val=null,this._isValValid=!1}}},_onKeyDown:function(t){(t.keyCode===e.ENTER||t.keyCode===e.SPACE)&&(this.unbindFromDoc("keydown",this._onKeyDown).bindToDoc("keyup",this._onKeyUp),t.keyCode===e.SPACE&&t.preventDefault(),this._onItemClick(this._hoveredItem,{source:"keyboard"})),this.__base.apply(this,arguments)},_onKeyUp:function(){this.unbindFromDoc("keyup",this._onKeyUp),this.hasMod("focused")&&this.bindToDoc("keydown",this._onKeyDown)},getVal:function(){return this._isValValid||(this._val=this._getVal(),this._isValValid=!0),this._val},_getVal:function(){throw Error("_getVal is not implemented")},setVal:function(t){return this._setVal(t)&&(this._val=t,this._isValValid=!0,this.emit("change")),this},_setVal:function(){throw Error("_setVal is not implemented")},_updateItemsCheckedMod:function(t){var e=this.getItems();t.forEach(function(t,n){e[n].setMod("checked",t)})},setContent:function(){var t=this.__base.apply(this,arguments);return this._isValValid=!1,this.emit("change"),t}}))}),modules.define("menu",function(t,e){t(e.decl({modName:"mode",modVal:"check"},{_getVal:function(){return this.getItems().filter(function(t){return t.hasMod("checked")}).map(function(t){return t.getVal()})},_setVal:function(t){var e=!1,n=t.length,i=this.getItems().map(function(i){var o=i.hasMod("checked"),r=t.some(function(t){return i.isValEq(t)});return r?(--n,o||(e=!0)):o&&(e=!0),r});return!e||n?!1:(this._updateItemsCheckedMod(i),e)},_onItemClick:function(t){this.__base.apply(this,arguments),this.getItems().forEach(function(e){e===t&&e.toggleMod("checked")}),this._isValValid=!1,this.emit("change")}}))});
if (typeof Promise === "undefined") {
(function () {
	function Promise(resolver) {
		var
		self = this,
		then = self.then = function () {
			return Promise.prototype.then.apply(self, arguments);
		};

		then.fulfilled = [];
		then.rejected = [];

		function timeout(state, object) {
			then.state = 'pending';

			if (then[state].length) setTimeout(function () {
				timeout(state, then.value = then[state].shift().call(self, object));
			}, 0);
			else then.state = state;
		}

		then.fulfill = function (object) {
			timeout('fulfilled', object);
		};

		then.reject = function (object) {
			timeout('rejected', object);
		};

		resolver.call(self, then.fulfill, then.reject);

		return self;
	}

	Promise.prototype = {
		'constructor': Promise,
		'then': function (onFulfilled, onRejected) {
			if (onFulfilled) this.then.fulfilled.push(onFulfilled);
			if (onRejected) this.then.rejected.push(onRejected);

			if (this.then.state === 'fulfilled') this.then.fulfill(this.then.value);

			return this;
		},
		'catch': function (onRejected) {
			if (onRejected) this.then.rejected.push(onRejected);

			return this;
		}
	};

	Promise.all = function () {
		var
		args = Array.prototype.slice.call(arguments),
		countdown = args.length;

		function process(promise, fulfill, reject) {
			promise.then(function onfulfilled(value) {
				if (promise.then.fulfilled.length > 1) promise.then(onfulfilled);
				else if (!--countdown) fulfill(value);

				return value;
			}, function (value) {
				reject(value);
			});
		}

		return new Promise(function (fulfill, reject) {
			while (args.length) process(args.shift(), fulfill, reject);
		});
	};

	window.Promise = Promise;
})();

}
if (!Function.prototype.bind) {
// Function.prototype.bind
Function.prototype.bind = function bind(scope) {
	var
	callback = this,
	prepend = Array.prototype.slice.call(arguments, 1),
	Constructor = function () {},
	bound = function () {
		return callback.apply(
			this instanceof Constructor && scope ? this : scope,
			prepend.concat(Array.prototype.slice.call(arguments, 0))
		);
	};

	Constructor.prototype = bound.prototype = callback.prototype;

	return bound;
};

}

/**
 * Modules
 *
 * Copyright (c) 2013 Filatov Dmitry (dfilatov@yandex-team.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 0.1.0
 */

(function(global) {

var undef,

    DECL_STATES = {
        NOT_RESOLVED : 'NOT_RESOLVED',
        IN_RESOLVING : 'IN_RESOLVING',
        RESOLVED     : 'RESOLVED'
    },

    /**
     * Creates a new instance of modular system
     * @returns {Object}
     */
    create = function() {
        var curOptions = {
                trackCircularDependencies : true,
                allowMultipleDeclarations : true
            },

            modulesStorage = {},
            waitForNextTick = false,
            pendingRequires = [],

            /**
             * Defines module
             * @param {String} name
             * @param {String[]} [deps]
             * @param {Function} declFn
             */
            define = function(name, deps, declFn) {
                if(!declFn) {
                    declFn = deps;
                    deps = [];
                }

                var module = modulesStorage[name];
                if(!module) {
                    module = modulesStorage[name] = {
                        name : name,
                        decl : undef
                    };
                }

                module.decl = {
                    name       : name,
                    prev       : module.decl,
                    fn         : declFn,
                    state      : DECL_STATES.NOT_RESOLVED,
                    deps       : deps,
                    dependents : [],
                    exports    : undef
                };
            },

            /**
             * Requires modules
             * @param {String|String[]} modules
             * @param {Function} cb
             * @param {Function} [errorCb]
             */
            require = function(modules, cb, errorCb) {
                if(typeof modules === 'string') {
                    modules = [modules];
                }

                if(!waitForNextTick) {
                    waitForNextTick = true;
                    nextTick(onNextTick);
                }

                pendingRequires.push({
                    deps : modules,
                    cb   : function(exports, error) {
                        error?
                            (errorCb || onError)(error) :
                            cb.apply(global, exports);
                    }
                });
            },

            /**
             * Returns state of module
             * @param {String} name
             * @returns {String} state, possible values are NOT_DEFINED, NOT_RESOLVED, IN_RESOLVING, RESOLVED
             */
            getState = function(name) {
                var module = modulesStorage[name];
                return module?
                    DECL_STATES[module.decl.state] :
                    'NOT_DEFINED';
            },

            /**
             * Returns whether the module is defined
             * @param {String} name
             * @returns {Boolean}
             */
            isDefined = function(name) {
                return !!modulesStorage[name];
            },

            /**
             * Sets options
             * @param {Object} options
             */
            setOptions = function(options) {
                for(var name in options) {
                    if(options.hasOwnProperty(name)) {
                        curOptions[name] = options[name];
                    }
                }
            },

            onNextTick = function() {
                waitForNextTick = false;
                applyRequires();
            },

            applyRequires = function() {
                var requiresToProcess = pendingRequires,
                    i = 0, require;

                pendingRequires = [];

                while(require = requiresToProcess[i++]) {
                    requireDeps(null, require.deps, [], require.cb);
                }
            },

            requireDeps = function(fromDecl, deps, path, cb) {
                var unresolvedDepsCnt = deps.length;
                if(!unresolvedDepsCnt) {
                    cb([]);
                }

                var decls = [],
                    i = 0, len = unresolvedDepsCnt,
                    dep, decl;

                while(i < len) {
                    dep = deps[i++];
                    if(typeof dep === 'string') {
                        if(!modulesStorage[dep]) {
                            cb(null, buildModuleNotFoundError(dep, fromDecl));
                            return;
                        }

                        decl = modulesStorage[dep].decl;
                    }
                    else {
                        decl = dep;
                    }

                    if(decl.state === DECL_STATES.IN_RESOLVING &&
                            curOptions.trackCircularDependencies &&
                            isDependenceCircular(decl, path)) {
                        cb(null, buildCircularDependenceError(decl, path));
                        return;
                    }

                    decls.push(decl);

                    startDeclResolving(
                        decl,
                        path,
                        function(_, error) {
                            if(error) {
                                cb(null, error);
                                return;
                            }

                            if(!--unresolvedDepsCnt) {
                                var exports = [],
                                    i = 0, decl;
                                while(decl = decls[i++]) {
                                    exports.push(decl.exports);
                                }
                                cb(exports);
                            }
                        });
                }
            },

            startDeclResolving = function(decl, path, cb) {
                if(decl.state === DECL_STATES.RESOLVED) {
                    cb(decl.exports);
                    return;
                }
                else {
                    decl.dependents.push(cb);
                }

                if(decl.state === DECL_STATES.IN_RESOLVING) {
                    return;
                }

                if(decl.prev && !curOptions.allowMultipleDeclarations) {
                    provideError(decl, buildMultipleDeclarationError(decl));
                    return;
                }

                curOptions.trackCircularDependencies && (path = path.slice()).push(decl);

                var isProvided = false,
                    deps = decl.prev? decl.deps.concat([decl.prev]) : decl.deps;

                decl.state = DECL_STATES.IN_RESOLVING;
                requireDeps(
                    decl,
                    deps,
                    path,
                    function(depDeclsExports, error) {
                        if(error) {
                            provideError(decl, error);
                            return;
                        }

                        depDeclsExports.unshift(function(exports, error) {
                            if(isProvided) {
                                cb(null, buildDeclAreadyProvidedError(decl));
                                return;
                            }

                            isProvided = true;
                            error?
                                provideError(decl, error) :
                                provideDecl(decl, exports);
                        });

                        decl.fn.apply(
                            {
                                name   : decl.name,
                                deps   : decl.deps,
                                global : global
                            },
                            depDeclsExports);
                    });
            },

            provideDecl = function(decl, exports) {
                decl.exports = exports;
                decl.state = DECL_STATES.RESOLVED;

                var i = 0, dependent;
                while(dependent = decl.dependents[i++]) {
                    dependent(exports);
                }

                decl.dependents = undef;
            },

            provideError = function(decl, error) {
                decl.state = DECL_STATES.NOT_RESOLVED;

                var i = 0, dependent;
                while(dependent = decl.dependents[i++]) {
                    dependent(null, error);
                }

                decl.dependents = [];
            };

        return {
            create     : create,
            define     : define,
            require    : require,
            getState   : getState,
            isDefined  : isDefined,
            setOptions : setOptions
        };
    },

    onError = function(e) {
        nextTick(function() {
            throw e;
        });
    },

    buildModuleNotFoundError = function(name, decl) {
        return Error(decl?
            'Module "' + decl.name + '": can\'t resolve dependence "' + name + '"' :
            'Required module "' + name + '" can\'t be resolved');
    },

    buildCircularDependenceError = function(decl, path) {
        var strPath = [],
            i = 0, pathDecl;
        while(pathDecl = path[i++]) {
            strPath.push(pathDecl.name);
        }
        strPath.push(decl.name);

        return Error('Circular dependence has been detected: "' + strPath.join(' -> ') + '"');
    },

    buildDeclAreadyProvidedError = function(decl) {
        return Error('Declaration of module "' + decl.name + '" has already been provided');
    },

    buildMultipleDeclarationError = function(decl) {
        return Error('Multiple declarations of module "' + decl.name + '" have been detected');
    },

    isDependenceCircular = function(decl, path) {
        var i = 0, pathDecl;
        while(pathDecl = path[i++]) {
            if(decl === pathDecl) {
                return true;
            }
        }
        return false;
    },

    nextTick = (function() {
        var fns = [],
            enqueueFn = function(fn) {
                return fns.push(fn) === 1;
            },
            callFns = function() {
                var fnsToCall = fns, i = 0, len = fns.length;
                fns = [];
                while(i < len) {
                    fnsToCall[i++]();
                }
            };

        if(typeof process === 'object' && process.nextTick) { // nodejs
            return function(fn) {
                enqueueFn(fn) && process.nextTick(callFns);
            };
        }

        if(global.setImmediate) { // ie10
            return function(fn) {
                enqueueFn(fn) && global.setImmediate(callFns);
            };
        }

        if(global.postMessage && !global.opera) { // modern browsers
            var isPostMessageAsync = true;
            if(global.attachEvent) {
                var checkAsync = function() {
                        isPostMessageAsync = false;
                    };
                global.attachEvent('onmessage', checkAsync);
                global.postMessage('__checkAsync', '*');
                global.detachEvent('onmessage', checkAsync);
            }

            if(isPostMessageAsync) {
                var msg = '__modules' + (+new Date()),
                    onMessage = function(e) {
                        if(e.data === msg) {
                            e.stopPropagation && e.stopPropagation();
                            callFns();
                        }
                    };

                global.addEventListener?
                    global.addEventListener('message', onMessage, true) :
                    global.attachEvent('onmessage', onMessage);

                return function(fn) {
                    enqueueFn(fn) && global.postMessage(msg, '*');
                };
            }
        }

        var doc = global.document;
        if('onreadystatechange' in doc.createElement('script')) { // ie6-ie8
            var head = doc.getElementsByTagName('head')[0],
                createScript = function() {
                    var script = doc.createElement('script');
                    script.onreadystatechange = function() {
                        script.parentNode.removeChild(script);
                        script = script.onreadystatechange = null;
                        callFns();
                    };
                    head.appendChild(script);
                };

            return function(fn) {
                enqueueFn(fn) && createScript();
            };
        }

        return function(fn) { // old browsers
            enqueueFn(fn) && setTimeout(callFns, 0);
        };
    })();

if(typeof exports === 'object') {
    module.exports = create();
}
else {
    global.modules = create();
}

})(this);

modules.require(['jquery', 'y-block', 'app'], function ($, YBlock, App) {
    $(function () {
        YBlock.initDomTree(document.body).done(function () {
            var app = new App();
            app.init();
        });
    });
});

modules.define('app', ['inherit'], function (provide, inherit) {

    /*jshint devel:true*/
    var Application = inherit({
        __constructor: function () {
            console.log('constructor');
        },
        init: function () {
            console.log('init');
        }
    });

    provide(Application);
});

/**
 * @module inherit
 * @version 2.2.2
 * @author Filatov Dmitry <dfilatov@yandex-team.ru>
 * @description This module provides some syntax sugar for "class" declarations, constructors, mixins, "super" calls and static members.
 */

(function(global) {

var hasIntrospection = (function(){'_';}).toString().indexOf('_') > -1,
    emptyBase = function() {},
    hasOwnProperty = Object.prototype.hasOwnProperty,
    objCreate = Object.create || function(ptp) {
        var inheritance = function() {};
        inheritance.prototype = ptp;
        return new inheritance();
    },
    objKeys = Object.keys || function(obj) {
        var res = [];
        for(var i in obj) {
            hasOwnProperty.call(obj, i) && res.push(i);
        }
        return res;
    },
    extend = function(o1, o2) {
        for(var i in o2) {
            hasOwnProperty.call(o2, i) && (o1[i] = o2[i]);
        }

        return o1;
    },
    toStr = Object.prototype.toString,
    isArray = Array.isArray || function(obj) {
        return toStr.call(obj) === '[object Array]';
    },
    isFunction = function(obj) {
        return toStr.call(obj) === '[object Function]';
    },
    noOp = function() {},
    needCheckProps = true,
    testPropObj = { toString : '' };

for(var i in testPropObj) { // fucking ie hasn't toString, valueOf in for
    testPropObj.hasOwnProperty(i) && (needCheckProps = false);
}

var specProps = needCheckProps? ['toString', 'valueOf'] : null;

function getPropList(obj) {
    var res = objKeys(obj);
    if(needCheckProps) {
        var specProp, i = 0;
        while(specProp = specProps[i++]) {
            obj.hasOwnProperty(specProp) && res.push(specProp);
        }
    }

    return res;
}

function override(base, res, add) {
    var addList = getPropList(add),
        j = 0, len = addList.length,
        name, prop;
    while(j < len) {
        if((name = addList[j++]) === '__self') {
            continue;
        }
        prop = add[name];
        if(isFunction(prop) &&
                (!hasIntrospection || prop.toString().indexOf('.__base') > -1)) {
            res[name] = (function(name, prop) {
                var baseMethod = base[name]?
                        base[name] :
                        name === '__constructor'? // case of inheritance from plane function
                            res.__self.__parent :
                            noOp;
                return function() {
                    var baseSaved = this.__base;
                    this.__base = baseMethod;
                    var res = prop.apply(this, arguments);
                    this.__base = baseSaved;
                    return res;
                };
            })(name, prop);
        } else {
            res[name] = prop;
        }
    }
}

function applyMixins(mixins, res) {
    var i = 1, mixin;
    while(mixin = mixins[i++]) {
        res?
            isFunction(mixin)?
                inherit.self(res, mixin.prototype, mixin) :
                inherit.self(res, mixin) :
            res = isFunction(mixin)?
                inherit(mixins[0], mixin.prototype, mixin) :
                inherit(mixins[0], mixin);
    }
    return res || mixins[0];
}

/**
* Creates class
* @exports
* @param {Function|Array} [baseClass|baseClassAndMixins] class (or class and mixins) to inherit from
* @param {Object} prototypeFields
* @param {Object} [staticFields]
* @returns {Function} class
*/
function inherit() {
    var args = arguments,
        withMixins = isArray(args[0]),
        hasBase = withMixins || isFunction(args[0]),
        base = hasBase? withMixins? applyMixins(args[0]) : args[0] : emptyBase,
        props = args[hasBase? 1 : 0] || {},
        staticProps = args[hasBase? 2 : 1],
        res = props.__constructor || (hasBase && base.prototype.__constructor)?
            function() {
                return this.__constructor.apply(this, arguments);
            } :
            hasBase?
                function() {
                    return base.apply(this, arguments);
                } :
                function() {};

    if(!hasBase) {
        res.prototype = props;
        res.prototype.__self = res.prototype.constructor = res;
        return extend(res, staticProps);
    }

    extend(res, base);

    res.__parent = base;

    var basePtp = base.prototype,
        resPtp = res.prototype = objCreate(basePtp);

    resPtp.__self = resPtp.constructor = res;

    props && override(basePtp, resPtp, props);
    staticProps && override(base, res, staticProps);

    return res;
}

inherit.self = function() {
    var args = arguments,
        withMixins = isArray(args[0]),
        base = withMixins? applyMixins(args[0], args[0][0]) : args[0],
        props = args[1],
        staticProps = args[2],
        basePtp = base.prototype;

    props && override(basePtp, basePtp, props);
    staticProps && override(base, base, staticProps);

    return base;
};

var defineAsGlobal = true;
if(typeof exports === 'object') {
    module.exports = inherit;
    defineAsGlobal = false;
}

if(typeof modules === 'object') {
    modules.define('inherit', function(provide) {
        provide(inherit);
    });
    defineAsGlobal = false;
}

if(typeof define === 'function') {
    define(function(require, exports, module) {
        module.exports = inherit;
    });
    defineAsGlobal = false;
}

defineAsGlobal && (global.inherit = inherit);

})(this);

modules.define(
    'y-block',
    [
        'inherit',
        'y-event-emitter',
        'y-event-manager',
        'y-block-event',
        'jquery',
        'vow',
        'bt',
        'y-extend'
    ],
    function (
        provide,
        inherit,
        YEventEmitter,
        YEventManager,
        YBlockEvent,
        $,
        vow,
        bt,
        extend
    ) {

    /**
     * @name YBlock
     * @augments YEventEmitter
     */
    var YBlock = inherit(YEventEmitter, /** @lends YBlock.prototype */ {
        /**
         * Конструктор базового блока.
         * Его следует вызывать с помощью `this.__base` в наследующих классах.
         *
         * @constructor
         * @param {jQuery} [domNode] Элемент, на котором следует инициализировать блок.
         * @param {Object} [options] Опции блока. Содержит все декларированные опции BH-шаблона блока.
         *
         * @example
         * modules.define('y-control', ['y-block'], function (provide, YBlock) {
         *     var YControl = inherit(YBlock, {
         *         __constructor: function () {
         *             this.__base.apply(this, arguments);
         *             // Дополнительные действия по инициализации
         *         }
         *     }, {
         *         getBlockName: function () {
         *             return 'y-control';
         *         }
         *     }));
         *
         *     provide(YControl);
         * });
         */
        __constructor: function (domNode, options) {
            if (domNode !== null && !(domNode instanceof $)) {
                options = domNode;
                domNode = null;
            }
            if (!domNode) {
                options = options || {};
                domNode = this._createDomElement(options);
            }

            // Если параметры не переданы, извлекаем их из DOM-ноды.
            if (!options) {
                options = this.__self._getDomNodeOptions(domNode).options || {};
            } else if (!options.__complete) {
                options = extend(options, this.__self._getDomNodeOptions(domNode).options || {});
            }

            domNode.addClass(this.__self._autoInitCssClass);

            // Сохраняем ссылку на экземпляр блока в jQuery-хранилище ноды.
            this.__self._getDomNodeDataStorage(domNode).block = this;

            this._initOptions = options;
            this._node = domNode;
            this._eventManager = new YEventManager(this);
            this._stateCache = null;
            this.__self._liveInitIfRequired();
            this._cachedViewName = null;
        },

        /**
         * Уничтожает блок. При уничтожении блок автоматически отвязывает все обработчики событий,
         * которые были привязаны к инстанции блока или привязаны внутри блока, используя метод `_bindTo()`.
         *
         * После уничтожения блока удаляет его из DOM-дерева.
         *
         * Этот метод следует перекрывать, если необходимы дополнительные действия при уничтожении блока.
         * При этом необходимо вызывать базовую реализацию деструктора с помощью `this.__base()`.
         *
         * @example
         * destruct: function () {
         *     this._cache.drop();
         *     this.__base();
         * }
         */
        destruct: function () {
            var nodeStorage;
            if (this._node) {
                nodeStorage = this.__self._getDomNodeDataStorage(this._node);
            }
            if (!nodeStorage || !nodeStorage.block) {
                throw new Error('Block `' + this.__self.getBlockName() + '` was already destroyed');
            }
            delete nodeStorage.block;

            this.__self.destructDomTree(this.getDomNode());

            this.offAll();

            this._eventManager.unbindAll();
            this._eventManager = null;

            this._node.remove();
            this._node = null;

            this._initOptions = null;
            this._stateCache = null;
        },

        /**
         * Возвращает DOM-элемент данного блока.
         *
         * @returns {jQuery}
         */
        getDomNode: function () {
            return this._node;
        },

        /**
         * Добавляет обработчик события `event` объекта `emitter`. Контекстом обработчика
         * является экземпляр данного блока. Обработчик события автоматически удалится при вызове
         * `YBlock.prototype.destruct()`.
         *
         * @protected
         * @param {jQuery|YBlock} emitter
         * @param {String} event
         * @param {Function} callback
         * @returns {YBlock}
         *
         * @example
         * var View = inherit(YBlock, {
         *     __constructor: function (model) {
         *         this.__base();
         *
         *         var hide = this._findElement('hide');
         *         this._bindTo(hide, 'click', this._onHideClick);
         *
         *         this._bindTo(model, 'change-attr', this._onAttrChange);
         *     }
         * });
         */
        _bindTo: function (emitter, event, callback) {
            this._eventManager.bindTo(emitter, event, callback);
            return this;
        },

        /**
         * Удаляет обработчик события `event` объекта `emitter`, добавленный с помощью
         * `YBlock.prototype._bindTo()`.
         *
         * @protected
         * @param {jQuery|YBlock} emitter
         * @param {String} event
         * @param {Function} callback
         * @returns {YBlock}
         */
        _unbindFrom: function (emitter, event, callback) {
            this._eventManager.unbindFrom(emitter, event, callback);
            return this;
        },

        /**
         * Исполняет обработчики события `blockEvent` блока. Первым аргументом в обработчики события будет
         * передан экземпляр класса `YBlockEvent`.
         *
         * @param {String|YBlockEvent} blockEvent Имя события или экземпляр класса `YBlockEvent`.
         * @param {Object} [data] Дополнительные данные, которые можно получить через `e.data` в обработчике.
         * @returns {YBlock}
         *
         * @example
         * var block = new YBlock();
         * block.on('click', function (e) {
         *     console.log(e.type);
         * });
         *
         * block.emit('click'); // => 'click'
         *
         * var event = new YBlockEvent('click');
         * block.emit(event); // => 'click'
         */
        emit: function (blockEvent, data) {
            if (typeof blockEvent === 'string') {
                blockEvent = new YBlockEvent(blockEvent);
            }

            blockEvent.data = data;
            blockEvent.target = this;

            this.__base(blockEvent.type, blockEvent);

            if (!blockEvent.isPropagationStopped()) {
                // Если событие блока надо распространять, кидаем специальное событие на DOM ноде блока.
                var jqEvent = $.Event(this.__self._getPropagationEventName(blockEvent.type));
                blockEvent._jqEvent = jqEvent;
                var domNode = this.getDomNode();
                if (domNode) {
                    this.getDomNode().trigger(jqEvent, blockEvent);
                }
            }

            return this;
        },

        /**
         * Возвращает имя отображения данного блока.
         *
         * @returns {String|undefined}
         */
        getView: function () {
            if (this._cachedViewName === null) {
                var cls = this.getDomNode().attr('class');
                if (cls) {
                    this._cachedViewName = cls.split(' ').shift().split('_')[1];
                } else {
                    this._cachedViewName = undefined;
                }
            }
            return this._cachedViewName;
        },

        /**
         * Устанавливает CSS-класс по имени и значению состояния.
         * Например, для блока `y-button` вызов `this._setState('pressed', 'yes')`
         * добавляет CSS-класс с именем `pressed_yes`.
         *
         * С точки зрения `BEM` похож на метод `setMod`, но не вызывает каких-либо событий.
         *
         * @protected
         * @param {String} stateName Имя состояния.
         * @param {String|Boolean} [stateVal=true] Значение.
         *                                         Если указан `false` или пустая строка, то CSS-класс удаляется.
         * @returns {YBlock}
         */
        _setState: function (stateName, stateVal) {
            if (arguments.length === 1) {
                stateVal = true;
            }
            stateVal = getStateValue(stateVal);
            var domElem = this.getDomNode();
            if (!this._stateCache) {
                this._stateCache = this._parseStateCssClasses(domElem);
            }
            var prevStateVal = this._stateCache[stateName] || false;
            if (stateVal !== prevStateVal) {
                this._stateCache[stateName] = stateVal;
                if (prevStateVal) {
                    domElem.removeClass('_' + stateName + (prevStateVal === true ? '' : '_' + prevStateVal));
                }
                if (stateVal) {
                    domElem.addClass('_' + stateName + (stateVal === true ? '' : '_' + stateVal));
                }
            }
            return this;
        },

        /**
         * Удаляет CSS-класс состояния с заданным именем.
         * Например, для блока `y-button` вызов `this._removeState('side')`
         * удалит CSS-классы с именами `side_left`, `side_right` и т.п.
         *
         * С точки зрения `BEM` похож на метод `delMod`, но не вызывает каких-либо событий.
         *
         * @protected
         * @param {String} stateName
         * @returns {YBlock}
         */
        _removeState: function (stateName) {
            return this._setState(stateName, false); // false удаляет состояние с указанным именем
        },

        /**
         * Возвращает значение состояния на основе CSS-классов блока.
         * Например, для блока `y-button`, у которого на DOM-элементе висит класс `pressed_yes`,
         * вызов `this._getState('pressed')` возвратит значение `yes`.
         *
         * С точки зрения `BEM` похож на метод `getMod`.
         *
         * @protected
         * @param {String} stateName
         * @returns {String|Boolean}
         */
        _getState: function (stateName) {
            if (!this._stateCache) {
                this._stateCache = this._parseStateCssClasses(this.getDomNode());
            }
            return this._stateCache[stateName] || false;
        },

        /**
         * Переключает значение состояния блока (полученное на основе CSS-классов) между двумя значениями.
         * Например, для блока `y-button`, у которого на DOM-элементе висит класс `pressed_yes`,
         * вызов `this._toggleState('pressed', 'yes', '')` удалит класс `pressed_yes`,
         * а повторный вызов — вернет на место.
         *
         * С точки зрения `BEM` похож на метод `toggleMod`, но не вызывает каких-либо событий.
         *
         * @protected
         * @param {String} stateName
         * @param {String|Boolean} stateVal1
         * @param {String|Boolean} stateVal2
         * @returns {YBlock}
         */
        _toggleState: function (stateName, stateVal1, stateVal2) {
            stateVal1 = getStateValue(stateVal1);
            stateVal2 = getStateValue(stateVal2);
            var currentModVal = this._getState(stateName);
            if (currentModVal === stateVal1) {
                this._setState(stateName, stateVal2);
            } else if (currentModVal === stateVal2) {
                this._setState(stateName, stateVal1);
            }
            return this;
        },

        /**
         * Устанавливает CSS-класс для элемента по имени и значению состояния.
         * Например, для элемента `text` блока `y-button` вызов
         * `this._setElementState(this._findElement('text'), 'pressed', 'yes')`
         * добавляет CSS-класс с именем `pressed_yes`.
         *
         * С точки зрения `BEM` похож на метод `setElemMod`.
         *
         * @protected
         * @param {HTMLElement|jQuery} domNode
         * @param {String} stateName Имя состояния.
         * @param {String|Boolean} [stateVal=true] Значение.
         *                                         Если указан `false` или пустая строка, то CSS-класс удаляется.
         * @returns {YBlock}
         */
        _setElementState: function (domNode, stateName, stateVal) {
            if (domNode) {
                domNode = $(domNode);
                if (arguments.length === 2) {
                    stateVal = true;
                }
                stateVal = getStateValue(stateVal);
                var parsedMods = this._parseStateCssClasses(domNode);
                var prevModVal = parsedMods[stateName];
                if (prevModVal) {
                    domNode.removeClass('_' + stateName + (prevModVal === true ? '' : '_' + prevModVal));
                }
                if (stateVal) {
                    domNode.addClass('_' + stateName + (stateVal === true ? '' : '_' + stateVal));
                }
            } else {
                throw new Error('`domNode` should be specified for `_setElementState` method.');
            }
            return this;
        },

        /**
         * Удаляет CSS-класс состояния с заданным именем для элемента.
         * Например, для элемента `text` блока `y-button` вызов
         * `this._removeElementState(this._findElement('text'), 'side')`
         * удалит CSS-классы с именами `side_left`, `side_right` и т.п.
         *
         * С точки зрения `BEM` похож на метод `delElemMod`.
         *
         * @protected
         * @param {HTMLElement|jQuery} domNode
         * @param {String} stateName
         * @returns {YBlock}
         */
        _removeElementState: function (domNode, stateName) {
            // false удаляет состояние с указанным именем
            return this._setElementState(domNode, stateName, false);
        },

        /**
         * Возвращает значение состояния на основе CSS-классов элемента.
         * Например, для элемента `text` блока `y-button`,
         * у которого на DOM-элементе висит класс `pressed_yes`, вызов
         * `this._getElementState(this._findElement('text'), 'pressed')` возвратит значение `yes`.
         *
         * С точки зрения `BEM` похож на метод `getElemMod`.
         *
         * @protected
         * @param {HTMLElement|jQuery} domNode
         * @param {String} stateName
         * @returns {String}
         */
        _getElementState: function (domNode, stateName) {
            if (domNode) {
                domNode = $(domNode);
                return this._parseStateCssClasses(domNode)[stateName] || false;
            } else {
                throw new Error('`domNode` should be specified for `_getElementState` method.');
            }
        },

        /**
         * Переключает значение состояния элемента блока (полученное на основе CSS-классов) между двумя значениями.
         * Например, для элемента `text` блока `y-button`,
         * у которого на DOM-элементе висит класс `pressed_yes`, вызов
         * `this._toggleElementState(this._findElement('text'), 'pressed', 'yes', '')`
         * удалит класс `pressed_yes`, а повторный вызов — вернет на место.
         *
         * С точки зрения `BEM` похож на метод `toggleElemMod`.
         *
         * @protected
         * @param {HTMLElement|jQuery} domNode
         * @param {String} stateName
         * @param {String} stateVal1
         * @param {String} stateVal2
         * @returns {YBlock}
         */
        _toggleElementState: function (domNode, stateName, stateVal1, stateVal2) {
            stateVal1 = getStateValue(stateVal1);
            stateVal2 = getStateValue(stateVal2);
            var currentModVal = this._getElementState(domNode, stateName);
            if (currentModVal === stateVal1) {
                this._setElementState(domNode, stateName, stateVal2);
            } else if (currentModVal === stateVal2) {
                this._setElementState(domNode, stateName, stateVal1);
            }
            return this;
        },

        /**
         * Возвращает первый элемент с указанным именем.
         *
         * @protected
         * @param {String} elementName Имя элемента.
         * @param {HTMLElement|jQuery} [parentElement] Элемент в котором необходимо произвести поиск. Если не указан,
         *                                             то используется результат `this.getDomNode()`.
         * @returns {jQuery|undefined}
         *
         * @example
         * var title = this._findElement('title');
         * title.text('Hello World');
         */
        _findElement: function (elementName, parentElement) {
            return this._findAllElements(elementName, parentElement)[0];
        },

        /**
         * Возвращает все элементы по указанному имени.
         *
         * @protected
         * @param {String} elementName Имя элемента.
         * @param {HTMLElement|jQuery} [parentElement] Элемент в котором необходимо произвести поиск. Если не указан,
         *                                             то используется результат `this.getDomNode()`.
         * @returns {jQuery[]}
         *
         * @example
         * this._findAllElements('item').forEach(function (item) {
         *     item.text('Item');
         * });
         */
        _findAllElements: function (elementName, parentElement) {
            parentElement = parentElement ? $(parentElement) : this.getDomNode();
            var view = this.getView();
            var elems = parentElement.find(
                '.' + this.__self.getBlockName() + (view ? '_' + view : '') + '__' + elementName
            );
            var result = [];
            var l = elems.length;
            for (var i = 0; i < l; i++) {
                result.push($(elems[i]));
            }
            return result;
        },

        /**
         * Возвращает все родительские элементы с заданным именем.
         *
         * @protected
         * @param {String} elementName Имя элемента.
         * @param {HTMLElement|jQuery} childElement Элемент, среди родителей которого необходимо произвести поиск.
         * @returns {jQuery[]}
         *
         * @example
         * var branches = this._findAllParentElements('branch', item);
         */
        _findAllParentElements: function (elementName, childElement) {
            if (childElement) {
                childElement = $(childElement);
                var view = this.getView();
                var elems = childElement.parents(
                    '.' + this.__self.getBlockName() + (view ? '_' + view : '') + '__' + elementName
                );
                var result = [];
                var l = elems.length;
                for (var i = 0; i < l; i++) {
                    result.push($(elems[i]));
                }
                return result;
            } else {
                throw new Error('`childElement` should be specified for `_findAllParentElements` method.');
            }
        },

        /**
         * Возвращает первый родительский элемент с заданным именем.
         *
         * @protected
         * @param {String} elementName Имя элемента.
         * @param {HTMLElement|jQuery} childElement Элемент, среди родителей которого необходимо произвести поиск.
         * @returns {jQuery|undefined}
         *
         * @example
         * var branch = this._findParentElement('branch', item);
         */
        _findParentElement: function (elementName, childElement) {
            if (childElement) {
                return this._findAllParentElements(elementName, childElement)[0];
            } else {
                throw new Error('`childElement` should be specified for `_findParentElement` method.');
            }
        },

        /**
         * Возвращает параметры, которые были переданы блоку при инициализации.
         *
         * @protected
         * @returns {Object}
         *
         * @example
         * var control = YControl.fromDomNode(
         *     $('<div class="y-control _init" onclick="return {\'y-control\':{level:5}}"></div>')
         * );
         * // control:
         * inherit(YBlock, {
         *     myMethod: function() {
         *         console.log(this._getOptions().level);
         *     }
         * }, {
         *     getBlockName: function() {
         *         return 'y-control';
         *     }
         * });
         */
        _getOptions: function () {
            return this._initOptions;
        },

        /**
         * Возвращает параметры, которые были переданы элементу блока при инициализации.
         *
         * @protected
         * @param {HTMLElement|jQuery} domNode
         * @returns {Object}
         *
         * @example
         * // HTML:
         * // <div class="y-control _init">
         * //     <div class="y-control__text" data-options="{options:{level:5}}"></div>
         * // </div>
         *
         * provide(inherit(YBlock, {
         *     __constructor: function() {
         *         this.__base.apply(this, arguments);
         *         this._textParams = this._getElementOptions(this._findElement('text'));
         *     }
         * }, { getBlockName: function() { return 'y-control'; } }));
         */
        _getElementOptions: function (domNode) {
            if (domNode) {
                domNode = $(domNode);
                var elemName = this._getElementName(domNode);
                if (elemName) {
                    return this.__self._getDomNodeOptions(domNode).options || {};
                } else {
                    throw new Error('Unable to get BEM Element name from DOM Node.');
                }
            } else {
                throw new Error('`domNode` should be specified for `_getElementOptions` method.');
            }
        },

        /**
         * Создает и возвращает DOM-элемент на основе BH-опций.
         * Создание нового элемента осуществляется с помощью применения BH-шаблонов.
         *
         * @protected
         * @param {Object} params
         * @returns {jQuery}
         */
        _createDomElement: function (params) {
            return $(bt.apply(extend({}, params, {block: this.__self.getBlockName()})));
        },

        /**
         * Разбирает состояния DOM-элемента, возвращает объект вида `{stateName: stateVal, ...}`.
         *
         * @param {jQuery} domNode
         * @returns {Object}
         */
        _parseStateCssClasses: function (domNode) {
            var result = {};
            var classAttr = domNode.attr('class');
            if (classAttr) {
                var classNames = classAttr.split(' ');
                for (var i = classNames.length - 1; i >= 0; i--) {
                    if (classNames[i].charAt(0) === '_') {
                        var classNameParts = classNames[i].substr(1).split('_');
                        if (classNameParts.length === 2) {
                            result[classNameParts[0]] = classNameParts[1];
                        } else {
                            result[classNameParts[0]] = true;
                        }
                    }
                }
            }
            return result;
        },

        /**
         * Возвращает имя элемента блока на основе DOM-элемента.
         *
         * @param {jQuery} domNode
         * @returns {String|null}
         */
        _getElementName: function (domNode) {
            var view = this.getView();
            var match = (domNode[0].className || '').match(
                new RegExp(this.__self.getBlockName() + (view ? '_' + view : '') + '__([a-zA-Z0-9-]+)(?:\\s|$)')
            );
            return match ? match[1] : null;
        }
    }, {
        /**
         * Возвращает имя блока.
         * Этот метод следует перекрывать при создании новых блоков.
         *
         * @static
         * @returns {String|null}
         *
         * @example
         * provide(inherit(YBlock, {}, {
         *     getBlockName: function() {
         *         return 'my-button';
         *     }
         * });
         */
        getBlockName: function () {
            return 'y-block';
        },

        /**
         * Возвращает инстанцию блока для переданного DOM-элемента.
         *
         * @static
         * @param {HTMLElement|jQuery} domNode
         * @param {Object} [params]
         * @returns {YBlock}
         *
         * @example
         * var page = YPage.fromDomNode(document.body);
         */
        fromDomNode: function (domNode, params) {
            if (!domNode) {
                throw new Error('`domNode` should be specified for `findDomNode` method');
            }
            var blockName = this.getBlockName();
            domNode = $(domNode);
            if (!domNode.length) {
                throw new Error('Cannot initialize "' + blockName + '" from empty jQuery object');
            }
            var instance = this._getDomNodeDataStorage(domNode).block;
            if (!instance) {
                if (params === undefined) {
                    params = this._getDomNodeOptions(domNode).options || {};
                }
                params.__complete = true;
                var BlockClass = this;
                instance = new BlockClass(domNode, params);
            }
            return instance;
        },

        /**
         * Инициализирует блок, если это необходимо.
         * Возвращает `null` для блоков с отложенной (`live`) инициализацией и инстанцию блока для прочих.
         *
         * @static
         * @param {HTMLElement|jQuery} domNode
         * @param {Object} params
         * @returns {YBlock|null}
         */
        initOnDomNode: function (domNode, params) {
            var initBlock;
            if (this._liveInit) {
                this._liveInitIfRequired();
                initBlock = false;
                if (this._instantInitHandlers) {
                    for (var i = 0, l = this._instantInitHandlers.length; i < l; i++) {
                        if (this._instantInitHandlers[i](params, domNode)) {
                            initBlock = true;
                            break;
                        }
                    }
                }
            } else {
                initBlock = true;
            }
            if (initBlock) {
                domNode = $(domNode);
                return this.fromDomNode(domNode, params);
            } else {
                return null;
            }
        },

        /**
         * Запускает `live`-инициализацию, если она определена для блока и не была выполнена ранее.
         *
         * @static
         * @protected
         */
        _liveInitIfRequired: function () {
            var blockName = this.getBlockName();
            if (this._liveInit && (!this._liveInitialized || !this._liveInitialized[blockName])) {
                this._liveInit();
                (this._liveInitialized = this._liveInitialized || {})[blockName] = true;
            }
        },

        /**
         * Если для блока требуется отложенная (`live`) инициализация,
         * следует перекрыть это свойство статическим методом.
         *
         * Этот выполняется лишь однажды, при инициализации первого блока на странице.
         *
         * В рамках `_liveInit` можно пользоваться методами `_liveBind` и `_liveBindToElement` для того,
         * чтобы глобально слушать события на блоке и элементе соответственно.
         *
         * @static
         * @protected
         * @type {Function|null}
         *
         * @example
         * var MyBlock = inherit(YBlock, {}, {
         *     _liveInit: function () {
         *         this._liveBind('click', function(e) {
         *             this._setState('clicked', 'yes');
         *         });
         *         this._liveBindToElement('title', 'click', function(e) {
         *             this._setElementState($(e.currentTarget), 'clicked', 'yes');
         *         });
         *     }
         * });
         */
        _liveInit: null,

        /**
         * Отменяет отложенную инициализацию блока по определенному условию.
         * Условием служит функция, которая принимает параметры и DOM-элемент блока. Если функция возвращает true,
         * то блок инициализируется сразу.
         * Рекомендуется для таких случаев передавать нужные параметры, которые сигнализируют о том,
         * что блок необходимо инициализировать блок сразу.
         *
         * @static
         * @protected
         * @param {Function<Object,jQuery>} condition
         */
        _instantInitIf: function (condition) {
            if (!this._instantInitHandlers) {
                this._instantInitHandlers = [];
            }
            this._instantInitHandlers.push(condition);
        },

        /**
         * Глобально слушает событие на блоке. Используется при отложенной инициализации.
         * Обработчик события выполнится в контексте инстанции блока.
         *
         * @static
         * @protected
         * @param {String} eventName
         * @param {Function} handler
         */
        _liveBind: function (eventName, handler) {
            var blockClass = this;
            this._getLiveEventsScopeElement().on(eventName, '[data-block="' + this.getBlockName() + '"]', function (e) {
                handler.call(blockClass.fromDomNode(e.currentTarget), e);
            });
        },

        /**
         * Глобально слушает событие на элементе блока. Используется при отложенной инициализации.
         * Обработчик события выполнится в контексте инстанции блока.
         *
         * @static
         * @protected
         * @param {String} elementName
         * @param {String} eventName
         * @param {Function} handler
         */
        _liveBindToElement: function (elementName, eventName, handler) {
            var blockClass = this;
            var blockName = this.getBlockName();
            var selectors = [
                '[class^="' + blockName + '_"][class$="__' + elementName + '"]',
                '[class^="' + blockName + '_"][class*="__' + elementName + ' "]'
            ];
            this._getLiveEventsScopeElement().on(
                eventName,
                selectors.join(', '),
                function (e) {
                    handler.call(
                        blockClass.fromDomNode($(e.currentTarget).closest('[data-block="' + blockName + '"]')),
                        e
                    );
                }
            );
        },

        /**
         * Возвращает элемент, на котором будут слушаться глобальные (`live`) события.
         *
         * @static
         * @protected
         * @returns {jQuery}
         */
        _getLiveEventsScopeElement: function () {
            return $(document.body);
        },

        /**
         * Возвращает первую инстанцию блока внутри переданного фрагмента DOM-дерева.
         *
         * @static
         * @param {jQuery|HTMLElement|YBlock} parentElement
         * @returns {YBlock|undefined}
         *
         * @example
         * var input = YInput.find(document.body);
         * if (input) {
         *     input.setValue('Hello World');
         * } else {
         *     throw new Error('Input wasn\'t found in "y-control".');
         * }
         */
        find: function (parentElement) {
            return this.findAll(parentElement)[0];
        },

        /**
         * Возвращает все инстанции блока внутри переданного фрагмента DOM-дерева.
         *
         * @static
         * @param {jQuery|HTMLElement|YBlock} parentElement
         * @returns {YBlock[]}
         *
         * @example
         * var inputs = YInput.findAll(document.body);
         * inputs.forEach(function (input) {
         *     input.setValue("Input here");
         * });
         */
        findAll: function (parentElement) {
            if (!parentElement) {
                throw new Error('`parentElement` should be specified for `findAll` method');
            }

            parentElement = this._getDomNodeFrom(parentElement);

            var domNodes = parentElement.find('[data-block=' + this.getBlockName() + ']');
            if (domNodes.length) {
                var result = [];
                var l = domNodes.length;
                for (var i = 0; i < l; i++) {
                    var domNode = $(domNodes[i]);
                    result.push(this.fromDomNode(domNode));
                }
                return result;
            } else {
                return [];
            }
        },

        /**
         * Инициализирует все блоки на переданном фрагменте DOM-дерева.
         *
         * @static
         * @param {HTMLElement|jQuery|YBlock} domNode
         * @returns {Promise}
         *
         * @example
         * YBlock.initDomTree(document.body).done(function () {
         *     YButton.getEmitter(document.body).on('click', function () {
         *         alert("Button is clicked");
         *     });
         * });
         */
        initDomTree: function (domNode) {
            if (!domNode) {
                throw new Error('`domNode` should be specified for `initDomTree` method');
            }
            domNode = this._getDomNodeFrom(domNode);
            var selector = '.' + this._autoInitCssClass;
            var classesToLoad = {};
            var nodes = domNode.find(selector);

            if (domNode.is(selector)) {
                Array.prototype.unshift.call(nodes, domNode);
            }
            var tasks = [];

            var l = nodes.length;
            for (var i = 0; i < l; i++) {
                var node = $(nodes[i]);
                var params = this._getDomNodeOptions(node) || {};

                var blockName = node.attr('data-block');
                if (blockName) {
                    tasks.push({
                        node: node,
                        className: blockName,
                        options: params.options || {},
                        isMixin: false
                    });
                    classesToLoad[blockName] = null;
                    var mixins = params.mixins;
                    if (mixins) {
                        for (var j = 0, jl = mixins.length; j < jl; j++) {
                            var mixinData = mixins[j];
                            if (mixinData && mixinData.name) {
                                tasks.push({
                                    node: node,
                                    className: mixinData.name,
                                    blockName: blockName,
                                    options: mixinData,
                                    isMixin: true
                                });
                                classesToLoad[mixinData.name] = null;
                            }
                        }
                    }
                }
            }

            function loadModule(moduleName) {
                var deferred = vow.defer();
                if (modules.isDefined(moduleName)) {
                    modules.require([moduleName], function (moduleClass) {
                        classesToLoad[moduleName] = moduleClass;
                        deferred.resolve();
                    });
                    return deferred.promise();
                } else {
                    return null;
                }
            }

            return vow.fulfill().then(function () {
                return vow.all(Object.keys(classesToLoad).map(function (className) {
                    return loadModule(className);
                })).then(function () {
                    var l = tasks.length;
                    for (var i = 0; i < l; i++) {
                        var task = tasks[i];
                        var node = task.node;
                        var className = task.className;
                        var options = task.options;
                        var classDef = classesToLoad[className];
                        if (classDef) {
                            try {
                                if (task.isMixin) {
                                    var blockClass = classesToLoad[task.blockName];
                                    if (blockClass) {
                                        classDef.fromBlock(blockClass.fromDomNode(node), options);
                                    }
                                } else {
                                    classDef.initOnDomNode(node, options);
                                }
                            } catch (e) {
                                e.message = className + ' init error: ' + e.message;
                                throw e;
                            }
                        }
                    }
                });
            });
        },

        /**
         * Уничтожает все инстанции блоков на переданном фрагменте DOM-дерева.
         *
         * @static
         * @param {HTMLElement|jQuery|YBlock} domNode
         */
        destructDomTree: function (domNode) {
            if (!domNode) {
                throw new Error('`domNode` should be specified for `destructDomTree` method');
            }
            domNode = this._getDomNodeFrom(domNode);

            var selector = '.' + this._autoInitCssClass + ',.' + this._delegateEventsCssClass;
            var nodes = domNode.find(selector);

            if (domNode.is(selector)) {
                Array.prototype.unshift.call(nodes, domNode);
            }

            for (var i = 0; i < nodes.length; i++) {
                var node = $(nodes[i]);
                var nodeStorage = this._getDomNodeDataStorage(node, true);
                if (nodeStorage) {
                    if (nodeStorage.block) {
                        nodeStorage.block.destruct();
                    }
                    var blockEvents = nodeStorage.blockEvents;
                    var blockName;
                    for (blockName in blockEvents) {
                        if (blockEvents.hasOwnProperty(blockName)) {
                            blockEvents[blockName].offAll();
                        }
                    }
                    nodeStorage.blockEvents = {};
                }
            }
        },

        /**
         * Возвращает эмиттер событий блока для переданного DOM-элемента.
         * На полученном эмиттере можно слушать блочные события, которые будут всплывать до этого DOM-элемента.
         *
         * @static
         * @param {HTMLElement|jQuery|YBlock} domNode
         * @returns {YEventEmitter}
         *
         * @example
         * YButton.getEmitter(document.body).on('click', function () {
         *     alert('Button is clicked');
         * });
         */
        getEmitter: function (domNode) {
            domNode = this._getDomNodeFrom(domNode);

            var nodeStorage = this._getDomNodeDataStorage(domNode);
            var blockName = this.getBlockName();
            var emitter = nodeStorage.blockEvents[blockName];

            if (!emitter) {
                domNode.addClass(this._delegateEventsCssClass);
                emitter = new YBlockEventEmitter(this, domNode);
                nodeStorage.blockEvents[blockName] = emitter;
            }

            return emitter;
        },

        /**
         * Возвращает jQuery DOM-элемент используя HTMLElement, инстанцию блока или другой jQuery-элемент.
         *
         * @static
         * @protected
         * @param {jQuery|HTMLElement|YBlock} domNode
         * @returns {YBlock}
         */
        _getDomNodeFrom: function (domNode) {
            if (domNode) {
                if (domNode instanceof YBlock) {
                    domNode = domNode.getDomNode();
                }
                domNode = $(domNode);
            } else {
                throw new Error('jQuery element, DOM Element or YBlock instance should be specified');
            }
            return domNode;
        },

        /**
         * Возвращает опции блока или элемента на указанном DOM-элементе.
         *
         * @static
         * @param {jQuery} domNode
         */
        _getDomNodeOptions: function (domNode) {
            var options = domNode.attr('data-options');
            return options ? JSON.parse(options) : {};
        },

        /**
         * Возвращает хранилище данных для DOM-элемента.
         *
         * @static
         * @param {jQuery} domNode
         * @param {Boolean} [skipCreating]
         * @returns {Object}
         */
        _getDomNodeDataStorage: function (domNode, skipCreating) {
            var data = domNode.data('y-block');
            if (!data && !skipCreating) {
                data = {
                    blockEvents: {}
                };
                domNode.data('y-block', data);
            }
            return data;
        },

        /**
         * Возвращает специальное имя события, которое используется для распространения события блока по DOM дереву.
         *
         * @static
         * @param {String} eventName Имя события блока.
         * @returns {String}
         */
        _getPropagationEventName: function (eventName) {
            return 'y-block/' + this.getBlockName() + '/' + eventName;
        },

        /**
         * CSS-класс для автоматической инициализации.
         *
         * @static
         * @type {String}
         */
        _autoInitCssClass: '_init',

        /**
         * CSS-класс для делегирования событий.
         *
         * @static
         * @type {String}
         */
        _delegateEventsCssClass: '_live-events'
    });

    /**
     * Эмиттер, используемый для делегирования событий блока.
     *
     * Делегирование событий блока происходит следующим образом:
     * - Когда блок инициирует событие `eventName`, он также инциирует событие `y-block/blockName/eventName`
     *   на DOM ноде блока. Это событие распространяется вверх по DOM дереву.
     *
     * - При добавлении нового события в `YBlockEventEmitter`, для переданной DOM ноды добавляется обработчик события
     *   `y-block/blockName/eventName`, который инициирует в эмиттере событие `eventName`.
     *
     * - При удалении события из `YBlockEventEmitter`, соответствующий обработчик удаляется из DOM ноды. Тем самым
     *   прекращается делегирование.
     */
    var YBlockEventEmitter = inherit(YEventEmitter, {
        /**
         * Создает эмиттер событий, который позволяет слушать события экземпляров блока `blockClass`
         * на DOM ноде `domNode`.
         *
         * @param {Function} blockClass
         * @param {jQuery} domNode
         */
        __constructor: function (blockClass, domNode) {
            this._blockClass = blockClass;
            this._domNode = domNode;
            this._listeners = {};
        },

        _onAddEvent: function (eventName) {
            var _this = this;
            function listener(jqEvent, blockEvent) {
                _this.emit(eventName, blockEvent);
                if (blockEvent.isPropagationStopped()) {
                    jqEvent.stopPropagation();
                }
            }

            var propagationEventName = this._blockClass._getPropagationEventName(eventName);
            this._domNode.on(propagationEventName, listener);
            this._listeners[eventName] = listener;
        },

        _onRemoveEvent: function (eventName) {
            var propagationEventName = this._blockClass._getPropagationEventName(eventName);
            this._domNode.off(propagationEventName, this._listeners[eventName]);
            delete this._listeners[eventName];
        }
    });

    function getStateValue(stateVal) {
        if (typeof stateVal === 'string') {
            if (stateVal === '') {
                stateVal = false;
            }
        } else {
            if (typeof stateVal === 'number') {
                stateVal = String(stateVal);
            } else {
                stateVal = Boolean(stateVal);
            }
        }
        return stateVal;
    }

    provide(YBlock);
});

modules.define(
    'y-event-emitter',
    ['inherit'],
    function (provide, inherit) {

    var slice = Array.prototype.slice;

    /**
     * @name YEventEmitter
     */
    var YEventEmitter = inherit({
        /**
         * Добавляет обработчик события.
         *
         * @param {String} event
         * @param {Function} callback
         * @param {Object} [context]
         * @returns {YEventEmitter}
         */
        on: function (event, callback, context) {
            if (typeof callback !== 'function') {
                throw new TypeError('callback must be a function');
            }

            if (!this._events) {
                this._events = {};
            }

            var listener = {
                callback: callback,
                context: context
            };

            var listeners = this._events[event];
            if (listeners) {
                listeners.push(listener);
            } else {
                this._events[event] = [listener];
                this._onAddEvent(event);
            }

            return this;
        },

        /**
         * Добавляет обработчик события, который исполнится только 1 раз, затем удалится.
         *
         * @param {String} event
         * @param {Function} callback
         * @param {Object} [context]
         * @returns {YEventEmitter}
         */
        once: function (event, callback, context) {
            if (typeof callback !== 'function') {
                throw new TypeError('callback must be a function');
            }

            var _this = this;

            function once() {
                _this.off(event, once, context);
                callback.apply(context, arguments);
            }

            // Сохраняем ссылку на оригинальный колбэк. Благодаря этому можно удалить колбэк `once`,
            // используя оригинальный колбэк в методе `off()`.
            once._callback = callback;

            this.on(event, once, context);
            return this;
        },

        /**
         * Удаляет обработчик события.
         *
         * @param {String} event
         * @param {Function} callback
         * @param {Object} [context]
         * @returns {YEventEmitter}
         */
        off: function (event, callback, context) {
            if (typeof callback !== 'function') {
                throw new TypeError('callback must be a function');
            }

            if (!this._events) {
                return this;
            }

            var listeners = this._events[event];
            if (!listeners) {
                return this;
            }

            var len = listeners.length;
            for (var i = 0; i < len; i++) {
                var listener = listeners[i];
                var cb = listener.callback;
                if ((cb === callback || cb._callback === callback) && listener.context === context) {
                    if (len === 1) {
                        delete this._events[event];
                        this._onRemoveEvent(event);
                    } else {
                        listeners.splice(i, 1);
                    }
                    break;
                }
            }

            return this;
        },

        /**
         * Удаляет все обработчики всех событий или все обработчики переданного события `event`.
         *
         * @param {String} [event]
         * @returns {YEventEmitter}
         */
        offAll: function (event) {
            if (this._events) {
                if (event) {
                    if (this._events[event]) {
                        delete this._events[event];
                        this._onRemoveEvent(event);
                    }
                } else {
                    for (event in this._events) {
                        if (this._events.hasOwnProperty(event)) {
                            this._onRemoveEvent(event);
                        }
                    }
                    delete this._events;
                }
            }
            return this;
        },

        /**
         * Исполняет все обработчики события `event`.
         *
         * @param {String} event
         * @param {...*} [args] Аргументы, которые будут переданы в обработчики события.
         * @returns {YEventEmitter}
         */
        emit: function (event) {
            if (!this._events) {
                return this;
            }

            var listeners = this._events[event];
            if (!listeners) {
                return this;
            }

            // Копируем массив обработчиков, чтобы добавление/удаление обработчиков внутри колбэков не оказывало
            // влияния в цикле.
            var listenersCopy = listeners.slice(0);
            var len = listenersCopy.length;
            var listener;
            var i = -1;

            switch (arguments.length) {
                // Оптимизируем наиболее частые случаи.
                case 1:
                    while (++i < len) {
                        listener = listenersCopy[i];
                        listener.callback.call(listener.context);
                    }
                    break;
                case 2:
                    while (++i < len) {
                        listener = listenersCopy[i];
                        listener.callback.call(listener.context, arguments[1]);
                    }
                    break;
                case 3:
                    while (++i < len) {
                        listener = listenersCopy[i];
                        listener.callback.call(listener.context, arguments[1], arguments[2]);
                    }
                    break;
                default:
                    var args = slice.call(arguments, 1);
                    while (++i < len) {
                        listener = listenersCopy[i];
                        listener.callback.apply(listener.context, args);
                    }
            }

            return this;
        },

        /**
         * Вызывается когда было добавлено новое событие.
         *
         * @protected
         * @param {String} event
         */
        _onAddEvent: function () {},

        /**
         * Вызывается когда все обработчики события были удалены.
         *
         * @protected
         * @param {String} event
         */
        _onRemoveEvent: function () {}
    });

    provide(YEventEmitter);
});

modules.define(
    'y-event-manager',
    [
        'inherit',
        'y-event-emitter',
        'jquery'
    ],
    function (
        provide,
        inherit,
        YEventEmitter,
        $
    ) {

    /**
     * Адаптер для YEventEmitter, jQuery. Позволяет привязывать обработчики к разным эмиттерам событий
     * и отвязывать их, используя вызов одной функции. Менеджер всегда привязан к какому-либо объекту, который
     * является контекстом для всех обработчиков.
     *
     * Полезен, когда нужно отвязать все обработчики сразу. Например, при уничтожении объекта.
     *
     * @example
     * function UserView(model, el) {
     *     this._eventManager = new YEventManager(this);
     *
     *     // Привязываем обработчик к YEventEmitter
     *     this._eventManager.bindTo(model, 'change-name', this._changeName);
     *
     *     // Привязываем обработчик к jQuery объекту
     *     var hideEl = el.find('.hide');
     *     this._eventManager.bindTo(hideEl, 'click', this._hide);
     * }
     *
     * UserView.prototype.destruct = function () {
     *     // Удаляем все обработчики
     *     this._eventManager.unbindAll();
     * };
     *
     * UserView.prototype._changeName = function () {};
     *
     * UserView.prototype._hide = function () {};
     */
    var YEventManager = inherit({
        /**
         * Создает менджер событий для переданного объекта.
         *
         * @param {Object} owner Контекст для всех обработчиков событий.
         */
        __constructor: function (owner) {
            this._owner = owner;
            this._listeners = [];
        },

        /**
         * Привязывает обработчик к переданному эмиттеру событий.
         *
         * @param {YEventEmitter|jQuery} emitter
         * @param {String} event
         * @param {Function} callback
         * @returns {YEventManager}
         */
        bindTo: function (emitter, event, callback) {
            if (emitter instanceof YEventEmitter) {
                this._listeners.push({
                    type: 'islets',
                    emitter: emitter.on(event, callback, this._owner),
                    event: event,
                    callback: callback
                });
            } else if (emitter instanceof $) {
                var proxy = callback.bind(this._owner);
                this._listeners.push({
                    type: 'jquery',
                    emitter: emitter.on(event, proxy),
                    event: event,
                    callback: callback,
                    proxy: proxy
                });
            } else {
                throw new Error('Unsupported emitter type');
            }
            return this;
        },

        /**
         * Отвязывает обработчик от переданного эмиттера событий.
         *
         * @param {YEventEmitter|jQuery} emitter
         * @param {String} event
         * @param {Function} callback
         * @returns {YEventManager}
         */
        unbindFrom: function (emitter, event, callback) {
            for (var i = 0; i < this._listeners.length; i++) {
                var listener = this._listeners[i];
                if (listener.emitter === emitter &&
                    listener.event === event &&
                    listener.callback === callback
                ) {
                    this._unbind(listener);
                    this._listeners.splice(i, 1);
                    break;
                }
            }
            return this;
        },

        /**
         * Отвязывает все обработчики от всех эмиттеров событий.
         *
         * @returns {YEventManager}
         */
        unbindAll: function () {
            while (this._listeners.length) {
                var listener = this._listeners.pop();
                this._unbind(listener);
            }
            return this;
        },

        /**
         * Отвязывает обработчик события.
         *
         * @param {Object} listener
         */
        _unbind: function (listener) {
            switch (listener.type) {
                case 'islets':
                    listener.emitter.off(listener.event, listener.callback, this._owner);
                    break;
                case 'jquery':
                    listener.emitter.off(listener.event, listener.proxy);
            }
        }
    });

    provide(YEventManager);
});

/**
 * Загружает (если нет на странице) и предоставляет jQuery.
 */

/* global jQuery */
modules.define(
    'jquery',
    [
        'y-load-script',
        'jquery-config'
    ],
    function (
        provide,
        loadScript,
        config
    ) {

    function doProvide() {
        provide(jQuery.noConflict(true));
    }

    if (typeof jQuery !== 'undefined') {
        doProvide();
    } else {
        loadScript(config.url, doProvide);
    }
});

/**
 * Загружает js-файлы добавляя тэг <script> в DOM.
 */
modules.define('y-load-script', function (provide) {
    var loading = {};
    var loaded = {};
    var head = document.getElementsByTagName('head')[0];

    /**
     * @param {String} path
     */
    function onLoad(path) {
        loaded[path] = true;
        var cbs = loading[path];
        delete loading[path];
        cbs.forEach(function (cb) {
            cb();
        });
    }

    /**
     * Загружает js-файл по переданному пути `path` и вызывает
     * колбэк `cb` по окончании загрузки.
     *
     * @name loadScript
     * @param {String} path
     * @param {Function} cb
     */
    provide(function (path, cb) {
        if (loaded[path]) {
            cb();
            return;
        }

        if (loading[path]) {
            loading[path].push(cb);
            return;
        }

        loading[path] = [cb];

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        // Добавляем `http:` к `//` если страница была открыта, используя `file://`-протокол.
        // Полезно для тестирования через PhantomJS, локальной отладки с внешними скриптами.
        script.src = (location.protocol === 'file:' && path.indexOf('//') === 0 ? 'http:' : '') + path;

        if (script.onreadystatechange === null) {
            script.onreadystatechange = function () {
                var readyState = this.readyState;
                if (readyState === 'loaded' || readyState === 'complete') {
                    script.onreadystatechange = null;
                    onLoad(path);
                }
            };
        } else {
            script.onload = script.onerror = function () {
                script.onload = script.onerror = null;
                onLoad(path);
            };
        }

        head.insertBefore(script, head.lastChild);
    });
});

modules.define('jquery-config', function (provide) {
    provide({
        url: '//yastatic.net/jquery/1.10.1/jquery.min.js'
    });
});

modules.define(
    'y-block-event',
    [
        'inherit'
    ],
    function (
        provide,
        inherit
    ) {

    /**
     * Класс, представляющий событие блока.
     */
    var YBlockEvent = inherit({
        /**
         * @param {String} type Тип события.
         * @param {Boolean} [isPropagationStopped=false] Запрещает распространение события.
         * @param {Boolean} [isDefaultPrevented=false] Запрещает действие по умолчанию.
         */
        __constructor: function (type, isPropagationStopped, isDefaultPrevented) {
            this.type = type;
            this._isPropagationStopped = Boolean(isPropagationStopped);
            this._isDefaultPrevented = Boolean(isDefaultPrevented);
        },

        /**
         * Определяет, прекращено ли распространение события.
         *
         * @returns {Boolean}
         */
        isPropagationStopped: function () {
            return this._isPropagationStopped;
        },

        /**
         * Проверяет, отменена ли реакция по умолчанию на событие.
         *
         * @returns {Boolean}
         */
        isDefaultPrevented: function () {
            return this._isDefaultPrevented;
        },

        /**
         * Прекращает распространение события.
         */
        stopPropagation: function () {
            this._isPropagationStopped = true;
        },

        /**
         * Отменяет реакцию по умолчанию на событие.
         */
        preventDefault: function () {
            this._isDefaultPrevented = true;
        }
    });

    provide(YBlockEvent);
});

/**
 * @module vow
 * @author Filatov Dmitry <dfilatov@yandex-team.ru>
 * @version 0.4.4
 * @license
 * Dual licensed under the MIT and GPL licenses:
 *   * http://www.opensource.org/licenses/mit-license.php
 *   * http://www.gnu.org/licenses/gpl.html
 */

(function(global) {

/**
 * @class Deferred
 * @exports vow:Deferred
 * @description
 * The `Deferred` class is used to encapsulate newly-created promise object along with functions that resolve, reject or notify it.
 */

/**
 * @constructor
 * @description
 * You can use `vow.defer()` instead of using this constructor.
 *
 * `new vow.Deferred()` gives the same result as `vow.defer()`.
 */
var Deferred = function() {
    this._promise = new Promise();
};

Deferred.prototype = /** @lends Deferred.prototype */{
    /**
     * Returns corresponding promise.
     *
     * @returns {vow:Promise}
     */
    promise : function() {
        return this._promise;
    },

    /**
     * Resolves corresponding promise with given `value`.
     *
     * @param {*} value
     *
     * @example
     * ```js
     * var defer = vow.defer(),
     *     promise = defer.promise();
     *
     * promise.then(function(value) {
     *     // value is "'success'" here
     * });
     *
     * defer.resolve('success');
     * ```
     */
    resolve : function(value) {
        this._promise.isResolved() || this._promise._resolve(value);
    },

    /**
     * Rejects corresponding promise with given `reason`.
     *
     * @param {*} reason
     *
     * @example
     * ```js
     * var defer = vow.defer(),
     *     promise = defer.promise();
     *
     * promise.fail(function(reason) {
     *     // reason is "'something is wrong'" here
     * });
     *
     * defer.reject('something is wrong');
     * ```
     */
    reject : function(reason) {
        this._promise.isResolved() || this._promise._reject(reason);
    },

    /**
     * Notifies corresponding promise with given `value`.
     *
     * @param {*} value
     *
     * @example
     * ```js
     * var defer = vow.defer(),
     *     promise = defer.promise();
     *
     * promise.progress(function(value) {
     *     // value is "'20%'", "'40%'" here
     * });
     *
     * defer.notify('20%');
     * defer.notify('40%');
     * ```
     */
    notify : function(value) {
        this._promise.isResolved() || this._promise._notify(value);
    }
};

var PROMISE_STATUS = {
    PENDING   : 0,
    FULFILLED : 1,
    REJECTED  : -1
};

/**
 * @class Promise
 * @exports vow:Promise
 * @description
 * The `Promise` class is used when you want to give to the caller something to subscribe to,
 * but not the ability to resolve or reject the deferred.
 */

/**
 * @constructor
 * @param {Function} resolver See https://github.com/domenic/promises-unwrapping/blob/master/README.md#the-promise-constructor for details.
 * @description
 * You should use this constructor directly only if you are going to use `vow` as DOM Promises implementation.
 * In other case you should use `vow.defer()` and `defer.promise()` methods.
 * @example
 * ```js
 * function fetchJSON(url) {
 *     return new vow.Promise(function(resolve, reject, notify) {
 *         var xhr = new XMLHttpRequest();
 *         xhr.open('GET', url);
 *         xhr.responseType = 'json';
 *         xhr.send();
 *         xhr.onload = function() {
 *             if(xhr.response) {
 *                 resolve(xhr.response);
 *             }
 *             else {
 *                 reject(new TypeError());
 *             }
 *         };
 *     });
 * }
 * ```
 */
var Promise = function(resolver) {
    this._value = undef;
    this._status = PROMISE_STATUS.PENDING;

    this._fulfilledCallbacks = [];
    this._rejectedCallbacks = [];
    this._progressCallbacks = [];

    if(resolver) { // NOTE: see https://github.com/domenic/promises-unwrapping/blob/master/README.md
        var _this = this,
            resolverFnLen = resolver.length;

        resolver(
            function(val) {
                _this.isResolved() || _this._resolve(val);
            },
            resolverFnLen > 1?
                function(reason) {
                    _this.isResolved() || _this._reject(reason);
                } :
                undef,
            resolverFnLen > 2?
                function(val) {
                    _this.isResolved() || _this._notify(val);
                } :
                undef);
    }
};

Promise.prototype = /** @lends Promise.prototype */ {
    /**
     * Returns value of fulfilled promise or reason in case of rejection.
     *
     * @returns {*}
     */
    valueOf : function() {
        return this._value;
    },

    /**
     * Returns `true` if promise is resolved.
     *
     * @returns {Boolean}
     */
    isResolved : function() {
        return this._status !== PROMISE_STATUS.PENDING;
    },

    /**
     * Returns `true` if promise is fulfilled.
     *
     * @returns {Boolean}
     */
    isFulfilled : function() {
        return this._status === PROMISE_STATUS.FULFILLED;
    },

    /**
     * Returns `true` if promise is rejected.
     *
     * @returns {Boolean}
     */
    isRejected : function() {
        return this._status === PROMISE_STATUS.REJECTED;
    },

    /**
     * Adds reactions to promise.
     *
     * @param {Function} [onFulfilled] Callback that will to be invoked with the value after promise has been fulfilled
     * @param {Function} [onRejected] Callback that will to be invoked with the reason after promise has been rejected
     * @param {Function} [onProgress] Callback that will to be invoked with the value after promise has been notified
     * @param {Object} [ctx] Context of callbacks execution
     * @returns {vow:Promise} A new promise, see https://github.com/promises-aplus/promises-spec for details
     */
    then : function(onFulfilled, onRejected, onProgress, ctx) {
        var defer = new Deferred();
        this._addCallbacks(defer, onFulfilled, onRejected, onProgress, ctx);
        return defer.promise();
    },

    /**
     * Adds rejection reaction only. It is shortcut for `promise.then(undefined, onRejected)`.
     *
     * @param {Function} onRejected Callback to be called with the value after promise has been rejected
     * @param {Object} [ctx] Context of callback execution
     * @returns {vow:Promise}
     */
    'catch' : function(onRejected, ctx) {
        return this.then(undef, onRejected, ctx);
    },

    /**
     * Adds rejection reaction only. It is shortcut for `promise.then(null, onRejected)`. It's alias for `catch`.
     *
     * @param {Function} onRejected Callback to be called with the value after promise has been rejected
     * @param {Object} [ctx] Context of callback execution
     * @returns {vow:Promise}
     */
    fail : function(onRejected, ctx) {
        return this.then(undef, onRejected, ctx);
    },

    /**
     * Adds resolving reaction (to fulfillment and rejection both).
     *
     * @param {Function} onResolved Callback that to be called with the value after promise has been rejected
     * @param {Object} [ctx] Context of callback execution
     * @returns {vow:Promise}
     */
    always : function(onResolved, ctx) {
        var _this = this,
            cb = function() {
                return onResolved.call(this, _this);
            };

        return this.then(cb, cb, ctx);
    },

    /**
     * Adds progress reaction.
     *
     * @param {Function} onProgress Callback to be called with the value when promise has been notified
     * @param {Object} [ctx] Context of callback execution
     * @returns {vow:Promise}
     */
    progress : function(onProgress, ctx) {
        return this.then(undef, undef, onProgress, ctx);
    },

    /**
     * Like `promise.then`, but "spreads" the array into a variadic value handler.
     * It is useful with `vow.all` and `vow.allResolved` methods.
     *
     * @param {Function} [onFulfilled] Callback that will to be invoked with the value after promise has been fulfilled
     * @param {Function} [onRejected] Callback that will to be invoked with the reason after promise has been rejected
     * @param {Object} [ctx] Context of callbacks execution
     * @returns {vow:Promise}
     *
     * @example
     * ```js
     * var defer1 = vow.defer(),
     *     defer2 = vow.defer();
     *
     * vow.all([defer1.promise(), defer2.promise()]).spread(function(arg1, arg2) {
     *     // arg1 is "1", arg2 is "'two'" here
     * });
     *
     * defer1.resolve(1);
     * defer2.resolve('two');
     * ```
     */
    spread : function(onFulfilled, onRejected, ctx) {
        return this.then(
            function(val) {
                return onFulfilled.apply(this, val);
            },
            onRejected,
            ctx);
    },

    /**
     * Like `then`, but terminates a chain of promises.
     * If the promise has been rejected, throws it as an exception in a future turn of the event loop.
     *
     * @param {Function} [onFulfilled] Callback that will to be invoked with the value after promise has been fulfilled
     * @param {Function} [onRejected] Callback that will to be invoked with the reason after promise has been rejected
     * @param {Function} [onProgress] Callback that will to be invoked with the value after promise has been notified
     * @param {Object} [ctx] Context of callbacks execution
     *
     * @example
     * ```js
     * var defer = vow.defer();
     * defer.reject(Error('Internal error'));
     * defer.promise().done(); // exception to be thrown
     * ```
     */
    done : function(onFulfilled, onRejected, onProgress, ctx) {
        this
            .then(onFulfilled, onRejected, onProgress, ctx)
            .fail(throwException);
    },

    /**
     * Returns a new promise that will be fulfilled in `delay` milliseconds if the promise is fulfilled,
     * or immediately rejected if promise is rejected.
     *
     * @param {Number} delay
     * @returns {vow:Promise}
     */
    delay : function(delay) {
        var timer,
            promise = this.then(function(val) {
                var defer = new Deferred();
                timer = setTimeout(
                    function() {
                        defer.resolve(val);
                    },
                    delay);

                return defer.promise();
            });

        promise.always(function() {
            clearTimeout(timer);
        });

        return promise;
    },

    /**
     * Returns a new promise that will be rejected in `timeout` milliseconds
     * if the promise is not resolved beforehand.
     *
     * @param {Number} timeout
     * @returns {vow:Promise}
     *
     * @example
     * ```js
     * var defer = vow.defer(),
     *     promiseWithTimeout1 = defer.promise().timeout(50),
     *     promiseWithTimeout2 = defer.promise().timeout(200);
     *
     * setTimeout(
     *     function() {
     *         defer.resolve('ok');
     *     },
     *     100);
     *
     * promiseWithTimeout1.fail(function(reason) {
     *     // promiseWithTimeout to be rejected in 50ms
     * });
     *
     * promiseWithTimeout2.then(function(value) {
     *     // promiseWithTimeout to be fulfilled with "'ok'" value
     * });
     * ```
     */
    timeout : function(timeout) {
        var defer = new Deferred(),
            timer = setTimeout(
                function() {
                    defer.reject(Error('timed out'));
                },
                timeout);

        this.then(
            function(val) {
                defer.resolve(val);
            },
            function(reason) {
                defer.reject(reason);
            });

        defer.promise().always(function() {
            clearTimeout(timer);
        });

        return defer.promise();
    },

    _vow : true,

    _resolve : function(val) {
        if(this._status !== PROMISE_STATUS.PENDING) {
            return;
        }

        if(val === this) {
            this._reject(TypeError('Can\'t resolve promise with itself'));
            return;
        }

        if(val && !!val._vow) { // shortpath for vow.Promise
            val.then(
                this._resolve,
                this._reject,
                this._notify,
                this);
            return;
        }

        if(isObject(val) || isFunction(val)) {
            var then;
            try {
                then = val.then;
            }
            catch(e) {
                this._reject(e);
                return;
            }

            if(isFunction(then)) {
                var _this = this,
                    isResolved = false;

                try {
                    then.call(
                        val,
                        function(val) {
                            if(isResolved) {
                                return;
                            }

                            isResolved = true;
                            _this._resolve(val);
                        },
                        function(err) {
                            if(isResolved) {
                                return;
                            }

                            isResolved = true;
                            _this._reject(err);
                        },
                        function(val) {
                            _this._notify(val);
                        });
                }
                catch(e) {
                    isResolved || this._reject(e);
                }

                return;
            }
        }

        this._fulfill(val);
    },

    _fulfill : function(val) {
        if(this._status !== PROMISE_STATUS.PENDING) {
            return;
        }

        this._status = PROMISE_STATUS.FULFILLED;
        this._value = val;

        this._callCallbacks(this._fulfilledCallbacks, val);
        this._fulfilledCallbacks = this._rejectedCallbacks = this._progressCallbacks = undef;
    },

    _reject : function(reason) {
        if(this._status !== PROMISE_STATUS.PENDING) {
            return;
        }

        this._status = PROMISE_STATUS.REJECTED;
        this._value = reason;

        this._callCallbacks(this._rejectedCallbacks, reason);
        this._fulfilledCallbacks = this._rejectedCallbacks = this._progressCallbacks = undef;
    },

    _notify : function(val) {
        this._callCallbacks(this._progressCallbacks, val);
    },

    _addCallbacks : function(defer, onFulfilled, onRejected, onProgress, ctx) {
        if(onRejected && !isFunction(onRejected)) {
            ctx = onRejected;
            onRejected = undef;
        }
        else if(onProgress && !isFunction(onProgress)) {
            ctx = onProgress;
            onProgress = undef;
        }

        var cb;

        if(!this.isRejected()) {
            cb = { defer : defer, fn : isFunction(onFulfilled)? onFulfilled : undef, ctx : ctx };
            this.isFulfilled()?
                this._callCallbacks([cb], this._value) :
                this._fulfilledCallbacks.push(cb);
        }

        if(!this.isFulfilled()) {
            cb = { defer : defer, fn : onRejected, ctx : ctx };
            this.isRejected()?
                this._callCallbacks([cb], this._value) :
                this._rejectedCallbacks.push(cb);
        }

        if(this._status === PROMISE_STATUS.PENDING) {
            this._progressCallbacks.push({ defer : defer, fn : onProgress, ctx : ctx });
        }
    },

    _callCallbacks : function(callbacks, arg) {
        var len = callbacks.length;
        if(!len) {
            return;
        }

        var isResolved = this.isResolved(),
            isFulfilled = this.isFulfilled();

        nextTick(function() {
            var i = 0, cb, defer, fn;
            while(i < len) {
                cb = callbacks[i++];
                defer = cb.defer;
                fn = cb.fn;

                if(fn) {
                    var ctx = cb.ctx,
                        res;
                    try {
                        res = ctx? fn.call(ctx, arg) : fn(arg);
                    }
                    catch(e) {
                        defer.reject(e);
                        continue;
                    }

                    isResolved?
                        defer.resolve(res) :
                        defer.notify(res);
                }
                else {
                    isResolved?
                        isFulfilled?
                            defer.resolve(arg) :
                            defer.reject(arg) :
                        defer.notify(arg);
                }
            }
        });
    }
};

/** @lends Promise */
var staticMethods = {
    /**
     * Coerces given `value` to a promise, or returns the `value` if it's already a promise.
     *
     * @param {*} value
     * @returns {vow:Promise}
     */
    cast : function(value) {
        return vow.cast(value);
    },

    /**
     * Returns a promise to be fulfilled only after all the items in `iterable` are fulfilled,
     * or to be rejected when any of the `iterable` is rejected.
     *
     * @param {Array|Object} iterable
     * @returns {vow:Promise}
     */
    all : function(iterable) {
        return vow.all(iterable);
    },

    /**
     * Returns a promise to be fulfilled only when any of the items in `iterable` are fulfilled,
     * or to be rejected when the first item is rejected.
     *
     * @param {Array} iterable
     * @returns {vow:Promise}
     */
    race : function(iterable) {
        return vow.anyResolved(iterable);
    },

    /**
     * Returns a promise that has already been resolved with the given `value`.
     * If `value` is a promise, returned promise will be adopted with the state of given promise.
     *
     * @param {*} value
     * @returns {vow:Promise}
     */
    resolve : function(value) {
        return vow.resolve(value);
    },

    /**
     * Returns a promise that has already been rejected with the given `reason`.
     *
     * @param {*} reason
     * @returns {vow:Promise}
     */
    reject : function(reason) {
        return vow.reject(reason);
    }
};

for(var prop in staticMethods) {
    staticMethods.hasOwnProperty(prop) &&
        (Promise[prop] = staticMethods[prop]);
}

var vow = /** @exports vow */ {
    Deferred : Deferred,

    Promise : Promise,

    /**
     * Creates a new deferred. This method is a factory method for `vow:Deferred` class.
     * It's equivalent to `new vow.Deferred()`.
     *
     * @returns {vow:Deferred}
     */
    defer : function() {
        return new Deferred();
    },

    /**
     * Static equivalent to `promise.then`.
     * If given `value` is not a promise, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @param {Function} [onFulfilled] Callback that will to be invoked with the value after promise has been fulfilled
     * @param {Function} [onRejected] Callback that will to be invoked with the reason after promise has been rejected
     * @param {Function} [onProgress] Callback that will to be invoked with the value after promise has been notified
     * @param {Object} [ctx] Context of callbacks execution
     * @returns {vow:Promise}
     */
    when : function(value, onFulfilled, onRejected, onProgress, ctx) {
        return vow.cast(value).then(onFulfilled, onRejected, onProgress, ctx);
    },

    /**
     * Static equivalent to `promise.fail`.
     * If given `value` is not a promise, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @param {Function} onRejected Callback that will to be invoked with the reason after promise has been rejected
     * @param {Object} [ctx] Context of callback execution
     * @returns {vow:Promise}
     */
    fail : function(value, onRejected, ctx) {
        return vow.when(value, undef, onRejected, ctx);
    },

    /**
     * Static equivalent to `promise.always`.
     * If given `value` is not a promise, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @param {Function} onResolved Callback that will to be invoked with the reason after promise has been resolved
     * @param {Object} [ctx] Context of callback execution
     * @returns {vow:Promise}
     */
    always : function(value, onResolved, ctx) {
        return vow.when(value).always(onResolved, ctx);
    },

    /**
     * Static equivalent to `promise.progress`.
     * If given `value` is not a promise, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @param {Function} onProgress Callback that will to be invoked with the reason after promise has been notified
     * @param {Object} [ctx] Context of callback execution
     * @returns {vow:Promise}
     */
    progress : function(value, onProgress, ctx) {
        return vow.when(value).progress(onProgress, ctx);
    },

    /**
     * Static equivalent to `promise.spread`.
     * If given `value` is not a promise, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @param {Function} [onFulfilled] Callback that will to be invoked with the value after promise has been fulfilled
     * @param {Function} [onRejected] Callback that will to be invoked with the reason after promise has been rejected
     * @param {Object} [ctx] Context of callbacks execution
     * @returns {vow:Promise}
     */
    spread : function(value, onFulfilled, onRejected, ctx) {
        return vow.when(value).spread(onFulfilled, onRejected, ctx);
    },

    /**
     * Static equivalent to `promise.done`.
     * If given `value` is not a promise, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @param {Function} [onFulfilled] Callback that will to be invoked with the value after promise has been fulfilled
     * @param {Function} [onRejected] Callback that will to be invoked with the reason after promise has been rejected
     * @param {Function} [onProgress] Callback that will to be invoked with the value after promise has been notified
     * @param {Object} [ctx] Context of callbacks execution
     */
    done : function(value, onFulfilled, onRejected, onProgress, ctx) {
        vow.when(value).done(onFulfilled, onRejected, onProgress, ctx);
    },

    /**
     * Checks whether the given `value` is a promise-like object
     *
     * @param {*} value
     * @returns {Boolean}
     *
     * @example
     * ```js
     * vow.isPromise('something'); // returns false
     * vow.isPromise(vow.defer().promise()); // returns true
     * vow.isPromise({ then : function() { }); // returns true
     * ```
     */
    isPromise : function(value) {
        return isObject(value) && isFunction(value.then);
    },

    /**
     * Coerces given `value` to a promise, or returns the `value` if it's already a promise.
     *
     * @param {*} value
     * @returns {vow:Promise}
     */
    cast : function(value) {
        return vow.isPromise(value)?
            value :
            vow.resolve(value);
    },

    /**
     * Static equivalent to `promise.valueOf`.
     * If given `value` is not an instance of `vow.Promise`, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @returns {*}
     */
    valueOf : function(value) {
        return value && isFunction(value.valueOf)? value.valueOf() : value;
    },

    /**
     * Static equivalent to `promise.isFulfilled`.
     * If given `value` is not an instance of `vow.Promise`, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @returns {Boolean}
     */
    isFulfilled : function(value) {
        return value && isFunction(value.isFulfilled)? value.isFulfilled() : true;
    },

    /**
     * Static equivalent to `promise.isRejected`.
     * If given `value` is not an instance of `vow.Promise`, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @returns {Boolean}
     */
    isRejected : function(value) {
        return value && isFunction(value.isRejected)? value.isRejected() : false;
    },

    /**
     * Static equivalent to `promise.isResolved`.
     * If given `value` is not a promise, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @returns {Boolean}
     */
    isResolved : function(value) {
        return value && isFunction(value.isResolved)? value.isResolved() : true;
    },

    /**
     * Returns a promise that has already been resolved with the given `value`.
     * If `value` is a promise, returned promise will be adopted with the state of given promise.
     *
     * @param {*} value
     * @returns {vow:Promise}
     */
    resolve : function(value) {
        var res = vow.defer();
        res.resolve(value);
        return res.promise();
    },

    /**
     * Returns a promise that has already been fulfilled with the given `value`.
     * If `value` is a promise, returned promise will be fulfilled with fulfill/rejection value of given promise.
     *
     * @param {*} value
     * @returns {vow:Promise}
     */
    fulfill : function(value) {
        return vow.when(value, null, function(reason) {
            return reason;
        });
    },

    /**
     * Returns a promise that has already been rejected with the given `reason`.
     * If `reason` is a promise, returned promise will be rejected with fulfill/rejection value of given promise.
     *
     * @param {*} reason
     * @returns {vow:Promise}
     */
    reject : function(reason) {
        return vow.when(reason, function(val) {
            throw val;
        });
    },

    /**
     * Invokes a given function `fn` with arguments `args`
     *
     * @param {Function} fn
     * @param {...*} [args]
     * @returns {vow:Promise}
     *
     * @example
     * ```js
     * var promise1 = vow.invoke(function(value) {
     *         return value;
     *     }, 'ok'),
     *     promise2 = vow.invoke(function() {
     *         throw Error();
     *     });
     *
     * promise1.isFulfilled(); // true
     * promise1.valueOf(); // 'ok'
     * promise2.isRejected(); // true
     * promise2.valueOf(); // instance of Error
     * ```
     */
    invoke : function(fn, args) {
        var len = Math.max(arguments.length - 1, 0),
            callArgs;
        if(len) { // optimization for V8
            callArgs = Array(len);
            var i = 0;
            while(i < len) {
                callArgs[i++] = arguments[i];
            }
        }

        try {
            return vow.resolve(callArgs?
                fn.apply(global, callArgs) :
                fn.call(global));
        }
        catch(e) {
            return vow.reject(e);
        }
    },

    /**
     * Returns a promise to be fulfilled only after all the items in `iterable` are fulfilled,
     * or to be rejected when any of the `iterable` is rejected.
     *
     * @param {Array|Object} iterable
     * @returns {vow:Promise}
     *
     * @example
     * with array:
     * ```js
     * var defer1 = vow.defer(),
     *     defer2 = vow.defer();
     *
     * vow.all([defer1.promise(), defer2.promise(), 3])
     *     .then(function(value) {
     *          // value is "[1, 2, 3]" here
     *     });
     *
     * defer1.resolve(1);
     * defer2.resolve(2);
     * ```
     *
     * @example
     * with object:
     * ```js
     * var defer1 = vow.defer(),
     *     defer2 = vow.defer();
     *
     * vow.all({ p1 : defer1.promise(), p2 : defer2.promise(), p3 : 3 })
     *     .then(function(value) {
     *          // value is "{ p1 : 1, p2 : 2, p3 : 3 }" here
     *     });
     *
     * defer1.resolve(1);
     * defer2.resolve(2);
     * ```
     */
    all : function(iterable) {
        var defer = new Deferred(),
            isPromisesArray = isArray(iterable),
            keys = isPromisesArray?
                getArrayKeys(iterable) :
                getObjectKeys(iterable),
            len = keys.length,
            res = isPromisesArray? [] : {};

        if(!len) {
            defer.resolve(res);
            return defer.promise();
        }

        var i = len;
        vow._forEach(
            iterable,
            function() {
                if(!--i) {
                    var j = 0;
                    while(j < len) {
                        res[keys[j]] = vow.valueOf(iterable[keys[j++]]);
                    }
                    defer.resolve(res);
                }
            },
            defer.reject,
            defer.notify,
            defer,
            keys);

        return defer.promise();
    },

    /**
     * Returns a promise to be fulfilled only after all the items in `iterable` are resolved.
     *
     * @param {Array|Object} iterable
     * @returns {vow:Promise}
     *
     * @example
     * ```js
     * var defer1 = vow.defer(),
     *     defer2 = vow.defer();
     *
     * vow.allResolved([defer1.promise(), defer2.promise()]).spread(function(promise1, promise2) {
     *     promise1.isRejected(); // returns true
     *     promise1.valueOf(); // returns "'error'"
     *     promise2.isFulfilled(); // returns true
     *     promise2.valueOf(); // returns "'ok'"
     * });
     *
     * defer1.reject('error');
     * defer2.resolve('ok');
     * ```
     */
    allResolved : function(iterable) {
        var defer = new Deferred(),
            isPromisesArray = isArray(iterable),
            keys = isPromisesArray?
                getArrayKeys(iterable) :
                getObjectKeys(iterable),
            i = keys.length,
            res = isPromisesArray? [] : {};

        if(!i) {
            defer.resolve(res);
            return defer.promise();
        }

        var onResolved = function() {
                --i || defer.resolve(iterable);
            };

        vow._forEach(
            iterable,
            onResolved,
            onResolved,
            defer.notify,
            defer,
            keys);

        return defer.promise();
    },

    allPatiently : function(iterable) {
        return vow.allResolved(iterable).then(function() {
            var isPromisesArray = isArray(iterable),
                keys = isPromisesArray?
                    getArrayKeys(iterable) :
                    getObjectKeys(iterable),
                rejectedPromises, fulfilledPromises,
                len = keys.length, i = 0, key, promise;

            if(!len) {
                return isPromisesArray? [] : {};
            }

            while(i < len) {
                key = keys[i++];
                promise = iterable[key];
                if(vow.isRejected(promise)) {
                    rejectedPromises || (rejectedPromises = isPromisesArray? [] : {});
                    isPromisesArray?
                        rejectedPromises.push(promise.valueOf()) :
                        rejectedPromises[key] = promise.valueOf();
                }
                else if(!rejectedPromises) {
                    (fulfilledPromises || (fulfilledPromises = isPromisesArray? [] : {}))[key] = vow.valueOf(promise);
                }
            }

            if(rejectedPromises) {
                throw rejectedPromises;
            }

            return fulfilledPromises;
        });
    },

    /**
     * Returns a promise to be fulfilled only when any of the items in `iterable` are fulfilled,
     * or to be rejected when all the items are rejected (with the reason of the first rejected item).
     *
     * @param {Array} iterable
     * @returns {vow:Promise}
     */
    any : function(iterable) {
        var defer = new Deferred(),
            len = iterable.length;

        if(!len) {
            defer.reject(Error());
            return defer.promise();
        }

        var i = 0, reason;
        vow._forEach(
            iterable,
            defer.resolve,
            function(e) {
                i || (reason = e);
                ++i === len && defer.reject(reason);
            },
            defer.notify,
            defer);

        return defer.promise();
    },

    /**
     * Returns a promise to be fulfilled only when any of the items in `iterable` are fulfilled,
     * or to be rejected when the first item is rejected.
     *
     * @param {Array} iterable
     * @returns {vow:Promise}
     */
    anyResolved : function(iterable) {
        var defer = new Deferred(),
            len = iterable.length;

        if(!len) {
            defer.reject(Error());
            return defer.promise();
        }

        vow._forEach(
            iterable,
            defer.resolve,
            defer.reject,
            defer.notify,
            defer);

        return defer.promise();
    },

    /**
     * Static equivalent to `promise.delay`.
     * If given `value` is not a promise, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @param {Number} delay
     * @returns {vow:Promise}
     */
    delay : function(value, delay) {
        return vow.resolve(value).delay(delay);
    },

    /**
     * Static equivalent to `promise.timeout`.
     * If given `value` is not a promise, then `value` is equivalent to fulfilled promise.
     *
     * @param {*} value
     * @param {Number} timeout
     * @returns {vow:Promise}
     */
    timeout : function(value, timeout) {
        return vow.resolve(value).timeout(timeout);
    },

    _forEach : function(promises, onFulfilled, onRejected, onProgress, ctx, keys) {
        var len = keys? keys.length : promises.length,
            i = 0;
        while(i < len) {
            vow.when(promises[keys? keys[i] : i], onFulfilled, onRejected, onProgress, ctx);
            ++i;
        }
    }
};

var undef,
    nextTick = (function() {
        var fns = [],
            enqueueFn = function(fn) {
                return fns.push(fn) === 1;
            },
            callFns = function() {
                var fnsToCall = fns, i = 0, len = fns.length;
                fns = [];
                while(i < len) {
                    fnsToCall[i++]();
                }
            };

        if(typeof setImmediate === 'function') { // ie10, nodejs >= 0.10
            return function(fn) {
                enqueueFn(fn) && setImmediate(callFns);
            };
        }

        if(typeof process === 'object' && process.nextTick) { // nodejs < 0.10
            return function(fn) {
                enqueueFn(fn) && process.nextTick(callFns);
            };
        }

        if(global.postMessage) { // modern browsers
            var isPostMessageAsync = true;
            if(global.attachEvent) {
                var checkAsync = function() {
                        isPostMessageAsync = false;
                    };
                global.attachEvent('onmessage', checkAsync);
                global.postMessage('__checkAsync', '*');
                global.detachEvent('onmessage', checkAsync);
            }

            if(isPostMessageAsync) {
                var msg = '__promise' + +new Date,
                    onMessage = function(e) {
                        if(e.data === msg) {
                            e.stopPropagation && e.stopPropagation();
                            callFns();
                        }
                    };

                global.addEventListener?
                    global.addEventListener('message', onMessage, true) :
                    global.attachEvent('onmessage', onMessage);

                return function(fn) {
                    enqueueFn(fn) && global.postMessage(msg, '*');
                };
            }
        }

        var doc = global.document;
        if('onreadystatechange' in doc.createElement('script')) { // ie6-ie8
            var createScript = function() {
                    var script = doc.createElement('script');
                    script.onreadystatechange = function() {
                        script.parentNode.removeChild(script);
                        script = script.onreadystatechange = null;
                        callFns();
                };
                (doc.documentElement || doc.body).appendChild(script);
            };

            return function(fn) {
                enqueueFn(fn) && createScript();
            };
        }

        return function(fn) { // old browsers
            enqueueFn(fn) && setTimeout(callFns, 0);
        };
    })(),
    throwException = function(e) {
        nextTick(function() {
            throw e;
        });
    },
    isFunction = function(obj) {
        return typeof obj === 'function';
    },
    isObject = function(obj) {
        return obj !== null && typeof obj === 'object';
    },
    toStr = Object.prototype.toString,
    isArray = Array.isArray || function(obj) {
        return toStr.call(obj) === '[object Array]';
    },
    getArrayKeys = function(arr) {
        var res = [],
            i = 0, len = arr.length;
        while(i < len) {
            res.push(i++);
        }
        return res;
    },
    getObjectKeys = Object.keys || function(obj) {
        var res = [];
        for(var i in obj) {
            obj.hasOwnProperty(i) && res.push(i);
        }
        return res;
    };

var defineAsGlobal = true;
if(typeof exports === 'object') {
    module.exports = vow;
    defineAsGlobal = false;
}

if(typeof modules === 'object') {
    modules.define('vow', function(provide) {
        provide(vow);
    });
    defineAsGlobal = false;
}

if(typeof define === 'function') {
    define(function(require, exports, module) {
        module.exports = vow;
    });
    defineAsGlobal = false;
}

defineAsGlobal && (global.vow = vow);

})(this);

/**
 * Предоставляет функцию для расширения объектов.
 */
modules.define('y-extend', function (provide) {

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var toString = Object.prototype.toString;

    /**
     * Проверяет, что переданный объект является "плоским" (т.е. созданным с помощью "{}"
     * или "new Object").
     *
     * @param {Object} obj
     * @returns {Boolean}
     */
    function isPlainObject(obj) {
        // Не являются плоским объектом:
        // - Любой объект или значение, чьё внутреннее свойство [[Class]] не равно "[object Object]"
        // - DOM-нода
        // - window
        return !(toString.call(obj) !== '[object Object]' ||
            obj.nodeType ||
            obj.window === window);
    }

    /**
     * Копирует перечислимые свойства одного или нескольких объектов в целевой объект.
     *
     * @param {Boolean} [deep=false] При значении `true` свойства копируются рекурсивно.
     * @param {Object} target Объект для расширения. Он получит новые свойства.
     * @param {...Object} objects Объекты со свойствами для копирования. Аргументы со значениями
     *      `null` или `undefined` игнорируются.
     * @returns {Object}
     */
    provide(function extend() {
        var target = arguments[0];
        var deep;
        var i;

        // Обрабатываем ситуацию глубокого копирования.
        if (typeof target === 'boolean') {
            deep = target;
            target = arguments[1];
            i = 2;
        } else {
            deep = false;
            i = 1;
        }

        for (; i < arguments.length; i++) {
            var obj = arguments[i];
            if (!obj) {
                continue;
            }

            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) {
                    var val = obj[key];
                    var isArray = false;

                    // Копируем "плоские" объекты и массивы рекурсивно.
                    if (deep && val && (isPlainObject(val) || (isArray = Array.isArray(val)))) {
                        var src = target[key];
                        var clone;
                        if (isArray) {
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }
                        target[key] = extend(deep, clone, val);
                    } else {
                        target[key] = val;
                    }
                }
            }
        }

        return target;
    });
});

modules.define('config', function (provide) {
    var domNode = document.getElementById('config');
    provide(domNode ? JSON.parse(domNode.innerHTML) : {});
});

modules.define(
    'y-header',
    [
        'inherit',
        'y-block',
        'y-button',
        'y-services-board',
        'y-fog',
        'y-input',
        'y-suggest'
    ],
    function (
        provide,
        inherit,
        YBlock,
        YButton,
        YServicesBoard,
        YFog,
        YInput,
        YSuggest
    ) {

    var YHeader = inherit(YBlock, {
        __constructor: function () {
            this.__base.apply(this, arguments);
            var boardCall = this._findElement('board-call');
            if (boardCall) {
                this._bindTo(YButton.find(boardCall), 'click', this._handleBoardCallClick);
            }
            this._servicesBoardVisible = false;
            this._servicesBoard = null;
            this._fog = null;
            this._bindTo(YInput.getEmitter(this.getDomNode()), 'focus', this._closeServicesBoard);
        },

        _closeServicesBoard: function () {
            if (this._servicesBoardVisible) {
                this._removeState('board');
                this._fog.hide();
                this._servicesBoardVisible = false;
            }
        },

        _createServicesBoard: function () {
            this._servicesBoard = new YServicesBoard();
            this._findElement('board').append(this._servicesBoard.getDomNode());
        },

        getServicesBoard: function () {
            if (!this._servicesBoard) {
                this._createServicesBoard();
            }
            return this._servicesBoard;
        },

        _handleBoardCallClick: function (e) {
            e.preventDefault();
            if (this._servicesBoardVisible) {
                this._removeState('board');
                this._fog.hide();
            } else {
                if (!this._fog) {
                    this._fog = new YFog();
                    this._fog.getDomNode().appendTo(document.body);
                    this._bindTo(this._fog, 'click', this._closeServicesBoard);
                }
                if (!this._servicesBoard) {
                    this._createServicesBoard();
                }
                this._setState('board', 'opened');
                this._fog.show();
            }
            this._servicesBoardVisible = !this._servicesBoardVisible;
        },

        /**
         * Возвращает поисковую форму, если она есть.
         *
         * @returns {jQuery|undefined}
         */
        getSearchForm: function () {
            return this._findElement('form');
        },

        /**
         * Возвращает поисковый саджест, если он есть.
         *
         * @returns {YSuggest|undefined}
         */
        getSuggest: function () {
            return YSuggest.find(this.getDomNode());
        }

    }, {
        getBlockName: function () {
            return 'y-header';
        }
    });

    provide(YHeader);
});

modules.define(
    'y-button',
    ['y-block', 'inherit', 'jquery', 'y-dom', 'y-block-event'],
    function (provide, YBlock, inherit, $, dom, YBlockEvent) {

    /**
     * @name YButton
     * @augments YBlock
     */
    var YButton = inherit(YBlock, {
        __constructor: function () {
            this.__base.apply(this, arguments);

            this._text = this._findElement('text');

            // пока кнопка-ссылка деактивирована, ее `href` хранится в этом поле,
            // т.к. убирая `href` из атрибутов, мы убираем возможность фокусирования на ссылке
            this._href = undefined;

            // пока кнопка-ссылка деактивирована, ее `tabindex` хранится в этом поле,
            // т.к. убирая `tabindex` из атрибутов, мы убираем возможность фокусирования на элементе
            this._tabIndex = undefined;
        },

        /**
         * Возвращает текст кнопки.
         *
         * @returns {jQuery}
         */
        getText: function () {
            return this._text.contents();
        },

        /**
         * Устанавливает текст кнопке.
         * Строки интерпретируются как обычный HTML.
         *
         * @param {jQuery|HTMLElement|YBlock} contents
         * @returns {YButton}
         */
        setText: function (contents) {
            dom.replaceContents(this._text, contents);
            return this;
        },

        /**
         * Задает адрес для кнопки-ссылки.
         *
         * @param {String} url
         * @returns {YButton}
         */
        setUrl: function (url) {
            if (this.isEnabled()) {
                this.getDomNode().attr('href', url);
            } else {
                this._href = url;
            }
            return this;
        },

        /**
         * Возвращает адрес кнопки-ссылки.
         *
         * @returns {String}
         */
        getUrl: function () {
            if (this.isEnabled()) {
                return this.getDomNode().attr('href');
            } else {
                return this._href;
            }
        },

        /**
         * Устанавливает фокус на кнопку.
         *
         * @returns {YButton}
         */
        focus: function () {
            if (this.isEnabled()) {
                this.getDomNode().focus();
            }
            return this;
        },

        /**
         * Возвращает `true` если кнопка находится в фокусе.
         *
         * @returns {Boolean}
         */
        hasFocus: function () {
            return dom.focus.hasFocus(this.getDomNode());
        },

        /**
         * Удаляет фокус с кнопки.
         *
         * @returns {YButton}
         */
        blur: function () {
            this.getDomNode().blur();
            return this;
        },

        /**
         * Возвращает `true` если кнопка активна.
         *
         * @returns {Boolean}
         */
        isEnabled: function () {
            return !this._getState('disabled');
        },

        /**
         * Деактивирует кнопку. Неактивная кнопка не реагирует на события.
         *
         * @returns {YButton}
         */
        disable: function () {
            if (!this._getState('disabled')) {
                this.blur();

                var domElement = this.getDomNode();
                domElement.attr('disabled', 'disabled');

                // удаляем атрибут href, делая ссылку нефокусируемой
                var href = domElement.attr('href');
                if (href) {
                    this._href = href;
                    domElement.removeAttr('href');
                }

                // удаляем tabindex, делая элемент нефокусируемым
                var tabIndex = domElement.attr('tabindex');
                if (tabIndex) {
                    this._tabIndex = tabIndex;
                    domElement.removeAttr('tabindex');
                }

                this._setState('disabled');
            }
            return this;
        },

        /**
         * Активирует кнопку.
         *
         * @returns {YButton}
         */
        enable: function () {
            if (this._getState('disabled')) {
                var domElement = this.getDomNode();
                domElement.removeAttr('disabled');

                // восстанавливаем href после активации
                if (this._href !== undefined) {
                    domElement.attr('href', this._href);
                    this._href = undefined;
                }

                // восстанавливаем tabindex после активации
                if (this._tabIndex !== undefined) {
                    domElement.attr('tabindex', this._tabIndex);
                    this._tabIndex = undefined;
                }

                this._removeState('disabled');
            }
            return this;
        }
    }, {
        getBlockName: function () {
            return 'y-button';
        },

        /**
         * Отложенная инициализация для кнопки.
         */
        _liveInit: function () {
            this._liveBind('click', function (e) {
                if (this.isEnabled()) {
                    var blockEvent = new YBlockEvent('click');
                    this.emit(blockEvent, e);
                    if (blockEvent.isDefaultPrevented()) {
                        e.preventDefault();
                    }
                }
            });
            this._liveBind('mousedown', function () {
                if (this.isEnabled()) {
                    this._setState('pressed');
                }
            });
            this._liveBind('focusin', function () {
                // Если кнопка фокусируется при клике мышью, то снимаем фокус для совместимости с Островными гайдами.
                if (this._getState('pressed')) {
                    this.getDomNode().blur();
                }
            });
            this._liveBind('mouseup', function () {
                this._removeState('pressed');
            });
            this._liveBind('mouseout', function () {
                this._removeState('pressed');
            });
        }
    });
    provide(YButton);
});

modules.define(
    'y-dom',
    ['jquery', 'y-block'],
    function (provide, $, YBlock) {

    /**
     * @name yDom
     */
    provide({
        /**
         * Отсоединяет фрагмент DOM-дерева от документа.
         * Сохраняет слушатели событий и данные (jQuery data).
         *
         * @name yDom.detach
         * @param {jQuery|HTMLElement|YBlock} domNode
         */
        detach: function (domNode) {
            domNode = this._getDomElement(domNode);
            var l = domNode.length;
            for (var i = 0; i < l; i++) {
                var node = domNode[i];
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }
        },

        /**
         * Заменяет один DOM-фрагмент другим.
         *
         * @name yDom.replace
         * @param {jQuery|HTMLElement|YBlock} replaceWhat
         * @param {jQuery|HTMLElement|YBlock} replaceWith
         */
        replace: function (replaceWhat, replaceWith) {
            replaceWhat = this._getDomElement(replaceWhat);
            replaceWith = this._getDomElement(replaceWith);
            replaceWith.insertBefore(replaceWhat);
            this.detach(replaceWhat);
        },

        /**
         * Вставляет `domNode` перед `sourceDomNode`.
         *
         * @name yDom.insertBefore
         * @param {jQuery|HTMLElement|YBlock} domNode
         * @param {jQuery|HTMLElement|YBlock} sourceDomNode
         */
        insertBefore: function (domNode, sourceDomNode) {
            domNode = this._getDomElement(domNode);
            sourceDomNode = this._getDomElement(sourceDomNode);
            sourceDomNode.insertBefore(domNode);
        },

        /**
         * Вставляет `domNode` после `sourceDomNode`.
         *
         * @name yDom.insertAfter
         * @param {jQuery|HTMLElement|YBlock} domNode
         * @param {jQuery|HTMLElement|YBlock} sourceDomNode
         */
        insertAfter: function (domNode, sourceDomNode) {
            domNode = this._getDomElement(domNode);
            sourceDomNode = this._getDomElement(sourceDomNode);
            sourceDomNode.insertAfter(domNode);
        },

        /**
         * Добавляет `domNode` в конец `parentDomNode`.
         *
         * @name yDom.append
         * @param {jQuery|HTMLElement} parentDomNode
         * @param {jQuery|HTMLElement|YBlock} domNode
         */
        append: function (parentDomNode, domNode) {
            parentDomNode = $(parentDomNode);
            parentDomNode.append(this._getDomElement(domNode));
        },

        /**
         * Добавляет `domNode` в начало `parentDomNode`.
         *
         * @name yDom.prepend
         * @param {jQuery|HTMLElement} parentDomNode
         * @param {jQuery|HTMLElement|YBlock} domNode
         */
        prepend: function (parentDomNode, domNode) {
            parentDomNode = $(parentDomNode);
            parentDomNode.prepend(this._getDomElement(domNode));
        },

        /**
         * Заменяет содержимое `parentDomNode` фрагментом `domNode`.
         *
         * @name yDom.replaceContents
         * @param {jQuery|HTMLElement} parentDomNode
         * @param {jQuery|HTMLElement|YBlock} domNode
         */
        replaceContents: function (parentDomNode, domNode) {
            parentDomNode = $(parentDomNode);
            domNode = this._getDomElement(domNode);
            var contents = parentDomNode.contents();
            if (contents.length) {
                this.replace(contents, domNode);
            } else {
                parentDomNode.append(domNode);
            }
        },

        /**
         * Возвращает jQuery-элемент для переданного `HTML`/`jQuery`/`YBlock`/`String`-представления элемента.
         *
         * @param {jQuery|HTMLElement|YBlock|String} domNode
         * @returns {jQuery}
         */
        _getDomElement: function (domNode) {
            if (domNode instanceof YBlock) {
                domNode = domNode.getDomNode();
            }
            if (typeof domNode === 'string') {
                var div = $('<div></div>');
                div.html(domNode);
                return div.contents();
            } else {
                return $(domNode);
            }
        },
        html: {
            /**
             * Преобразует сущности HTML-синтаксиса в безопасные эквиваленты.
             *
             * @name yDom.html.escape
             * @param {String} str
             * @returns {String}
             */
            escape: function (str) {
                return str
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
            }
        },
        focus: {
            /**
             * Возвращает `true` если на элемент возможно поставить фокус.
             *
             * @name yDom.focus.isFocusable
             * @param {jQuery|HTMLElement} domNode
             */
            isFocusable: function (domNode) {
                domNode = $(domNode)[0];
                switch (domNode.nodeName.toLowerCase()) {
                    case 'iframe':
                        return true;
                    case 'input':
                    case 'button':
                    case 'textarea':
                    case 'select':
                        return !domNode.hasAttribute('disabled');
                    case 'a':
                        return domNode.hasAttribute('href');
                    default:
                        return domNode.hasAttribute('tabindex');
                }
            },

            /**
             * Возвращает `true` если элемент сфокусирован.
             *
             * @name yDom.focus.hasFocus
             * @param {jQuery|HTMLElement} domNode
             */
            hasFocus: function (domNode) {
                domNode = $(domNode)[0];
                var activeNode = document.activeElement;
                if (activeNode) {
                    var currentNode = activeNode;
                    while (currentNode) {
                        if (currentNode === domNode) {
                            return true;
                        }
                        currentNode = currentNode.parentNode;
                    }
                }
                return false;
            }
        },
        selection: {
            /**
             * Возвращает позицию курсора в поле ввода.
             *
             * @param {jQuery|HTMLElement} input
             * @returns {number}
             */
            getInputCaretPosition: function (input) {
                input = $(input)[0];
                var pos = 0;
                if (document.selection) { // ie
                    input.focus();
                    var selection = document.selection.createRange();
                    selection.moveStart('character', -input.value.length);
                    pos = selection.text.length;
                } else if (input.selectionStart || input.selectionStart === 0) { // firefox
                    pos = input.selectionStart;
                }
                return pos;
            }
        }
    });

});

modules.define(
    'y-input',
    ['y-block', 'inherit', 'jquery', 'bt', 'y-dom', 'y-block-event'],
    function (provide, YBlock, inherit, $, bt, dom, YBlockEvent) {

    /**
     * @name YInput
     * @augments YBlock
     */
    var YInput = inherit(YBlock, {
        /**
         * Событие возникает, когда значение в поле ввода изменяется.
         *
         * @event YInput#change
         */

        /**
         * Событие возникает, когда пользователь отпускает кнопку на клавиатуре.
         *
         * @event YInput#keyup
         */

        /**
         * Событие возникает, когда пользователь ставит курсор в поле ввода.
         *
         * @event YInput#focus
         */

        /**
         * Событие возникает, когда курсор покидает поле ввода.
         *
         * @event YInput#blur
         */

        /**
         * Событие возникает, когда пользователь очищает поле ввода с помощью крестика.
         *
         * @event YInput#clear
         */

        __constructor: function () {
            this.__base.apply(this, arguments);

            var control = this._control = this._findElement('control');
            this._bindTo(control, 'change', this._handleChange);
            this._bindTo(control, 'keyup', this._handleChange);
            this._bindTo(control, 'input', this._handleChange);
            this._bindTo(control, 'keydown', this._handleKeyDown);
            this._bindTo(this.getDomNode(), 'click', this._handleClickOnWhitespace);

            this._clearElement = this._findElement('clear');
            if (this._clearElement) {
                this._bindTo(this._clearElement, 'click', this._handleClickOnClear);
                if (this._control.val() !== '') {
                    this._setElementState(this._clearElement, 'visible');
                }
            }

            this._prevValue = control.val();
        },

        /**
         * Бросает событие `change`, если значение поля поменялось.
         *
         * @protected
         */
        _handleChange: function () {
            var currentValue = this._control.val();
            if (currentValue !== this._prevValue) {
                this._prevValue = currentValue;
                if (this._clearElement) {
                    if (currentValue !== '') {
                        this._setElementState(this._clearElement, 'visible');
                    } else {
                        this._removeElementState(this._clearElement, 'visible');
                    }
                }
                this.emit('change');
            }
        },

        /**
         * Бросает блочное событие `keydown`.
         *
         * @protected
         */
        _handleKeyDown: function (e) {
            var blockEvent = new YBlockEvent('keydown');
            blockEvent.stopPropagation();
            this.emit(blockEvent, e);
            if (blockEvent.isDefaultPrevented()) {
                e.preventDefault();
            }
        },

        /**
         * Обрабатывает клик вне control.
         *
         * @protected
         */
        _handleClickOnWhitespace: function (e) {
            if (e.target === this.getDomNode()[0]) {
                this.focus();
            }
        },

        /**
         * Обрабатывает клик по элементу очистки поля.
         *
         * @protected
         */
        _handleClickOnClear: function () {
            this.setValue('');
            this.focus();
            this.emit('clear');
        },

        /**
         * Устанавливает фокус на поле ввода.
         *
         * @returns {YInput}
         */
        focus: function () {
            if (this.isEnabled()) {
                this._control.focus();
            }
            return this;
        },

        /**
         * Возвращает `true`, если поле ввода имеет фокус.
         *
         * @returns {Boolean}
         */
        hasFocus: function () {
            return dom.focus.hasFocus(this.getDomNode());
        },

        /**
         * Удаляет фокус с поля ввода.
         *
         * @returns {YInput}
         */
        blur: function () {
            this._control.blur();
            return this;
        },

        /**
         * Возвращает `true`, если поле ввода активно.
         *
         * @returns {Boolean}
         */
        isEnabled: function () {
            return !this._getState('disabled');
        },

        /**
         * Деактивирует поле ввода.
         *
         * @returns {YInput}
         */
        disable: function () {
            if (this.isEnabled()) {
                this.blur();
                this._control.attr('disabled', 'disabled');
                this._setState('disabled');
            }
            return this;
        },

        /**
         * Активирует поле ввода.
         *
         * @returns {YInput}
         */
        enable: function () {
            if (!this.isEnabled()) {
                this._control.removeAttr('disabled');
                this._removeState('disabled');
            }
            return this;
        },

        /**
         * Возвращает значение атрибута name.
         *
         * @returns {String}
         */
        getName: function () {
            return this._control.attr('name');
        },

        /**
         * Возвращает значение поля ввода.
         *
         * @returns {String}
         */
        getValue: function () {
            return this._control.val();
        },

        /**
         * Устанавливает значение для поля ввода.
         *
         * @param {String} value
         * @returns {YInput}
         */
        setValue: function (value) {
            this._control.val(value);
            this._handleChange();
            return this;
        },

        /**
         * Возвращает позицию текстового курсора.
         *
         * @returns {Number}
         */
        getCaretPosition: function () {
            return dom.selection.getInputCaretPosition(this._control);
        },

        /**
         * Отключает браузерный автокомплит.
         *
         * @returns {YInput}
         */
        disableAutocomplete: function () {
            this._control.attr('autocomplete', 'off');
            return this;
        },

        /**
         * Включает браузерный автокомплит.
         *
         * @returns {YInput}
         */
        enableAutocomplete: function () {
            this._control.removeAttr('autocomplete');
            return this;
        },

        /**
         * Проверяет, включен ли браузерный автокомплит.
         *
         * @returns {Boolean}
         */
        isAutocompleteEnabled: function () {
            return this._control.attr('autocomplete') !== 'off';
        },

        /**
         * Возвращает DOM-элемент иконки по имени.
         *
         * @param {String} name Название иконки.
         * @returns {jQuery|undefined} DOM-элемент иконки.
         */
        getLeftIcon: function (name) {
            var iconsContainer = this._findElement('icons-left');
            var matchingIcon;
            if (iconsContainer) {
                this._findAllElements('icon', iconsContainer)
                    .some(function (icon) {
                        if (icon.data('name') === name) {
                            matchingIcon = icon;
                            return true;
                        }
                    });
            }
            return matchingIcon;
        },

        /**
         * Добавляет иконку в поле.
         *
         * @param {String} name Название иконки.
         * @param {jQuery} icon Ссылка на DOM-элемент иконки.
         */
        addLeftIcon: function (name, icon) {
            var iconElement = $(bt.apply({
                block: this.__self.getBlockName(),
                elem: 'icon',
                name: name
            }));
            iconElement.append(icon);

            var iconsContainer = this._findElement('icons-left');
            if (!iconsContainer) {
                iconsContainer = $(bt.apply({block: this.__self.getBlockName(), elem: 'icons-left'}));
                this._findElement('context').before(iconsContainer);
            }
            iconsContainer.append(iconElement);
        },

        /**
         * Удалает иконку из поля.
         *
         * @param {String} name
         */
        removeLeftIcon: function (name) {
            var icon = this.getLeftIcon(name);
            if (icon) {
                icon.remove();
            }
        }
    }, {
        getBlockName: function () {
            return 'y-input';
        },

        /**
         * Отложенная инициализация.
         */
        _liveInit: function () {
            this._liveBindToElement('control', 'focusin', function () {
                this._setState('focused');
                this.emit('focus');
            });
            this._liveBindToElement('control', 'focusout', function () {
                this._removeState('focused');
                this.emit('blur');
            });
        }
    });

    provide(YInput);
});

/**
 * Возвращает значение ключа для переданного кейсета.
 *
 * @name i18n
 * @param {String} keyset
 * @param {String} key
 * @returns {String}
 */

/**
 * Добавляет кейсет в хранилище.
 *
 * @name i18n.add
 * @param {String} keyset
 * @param {Object} keysetData
 */

/**
 * Устанавливает текущий язык.
 *
 * @name i18n.setLanguage
 * @param {String} language
 */

/**
 * Возвращает текущий язык.
 *
 * @name i18n.getLanguage
 * @returns {String}
 */

modules.define(
    'y-services-board',
    ['y-block', 'inherit', 'bt'],
    function (provide, YBlock, inherit, bt) {

    var YServicesBoard = inherit(YBlock, {

        updateSearchQuery: function (query) {
            this._findAllElements('link').forEach(function (link) {
                var serviceName = link.attr('data-service-name');
                link.attr('href', query ?
                    bt.lib.services.getServiceSearchUrl(serviceName, query) :
                    bt.lib.services.getServiceUrl(serviceName)
                );
            });
        }

    }, {
        getBlockName: function () {
            return 'y-services-board';
        }
    });
    provide(YServicesBoard);
});

modules.define(
    'y-fog',
    ['y-block', 'inherit'],
    function (provide, YBlock, inherit) {

    var YFog = inherit(YBlock, {
        __constructor: function () {
            this.__base.apply(this, arguments);
            this._visible = false;
            this.getDomNode().hide();
            this._bindTo(this.getDomNode(), 'click', function () {
                this.emit('click');
            });
        },

        hide: function () {
            this._visible = false;
            this.getDomNode().hide();
        },

        show: function () {
            this._visible = true;
            this.getDomNode().show();
        },

        isVisible: function () {
            return this._visible;
        }
    }, {
        getBlockName: function () {
            return 'y-fog';
        }
    });
    provide(YFog);
});

modules.define(
    'y-suggest',
    [
        'y-block',
        'inherit',
        'y-suggest__insertion-text-extractor',
        'jquery'
    ],
    function (
        provide,
        YBlock,
        inherit,
        ySuggestInsertionTextExtractor,
        $
    ) {

    /**
     * Функция для получения вставляемого в поле ввода текста.
     *
     * @callback insertionTextExtractor
     * @param {YSuggestResponseItem} item Элемент ответа сервера, из которого нужно извлечь текст.
     * @returns {String}
     */

    var YSuggest = inherit(YBlock, {
        /**
         * Событие возникает, когда блок начинает слушать события input элемента.
         *
         * @event YSuggest#activate
         */

        /**
         * Событие возникает, когда блок становится неактивным и не слушает события от input.
         *
         * @event YSuggest#deactivate
         */

        /**
         * Событие возникает, когда пользователь выбрал drop-item элемент мышкой.
         *
         * @event YSuggest#click
         * @param {YBlockEvent} e
         * @param {Object} e.data
         * @param {YSuggestResponseItem} e.data.item Выбранный результат ответа.
         * @param {String} e.data.text Текущий текст в поле ввода.
         */

        /**
         * Событие возникает, когда пользователь выбрал drop-item элемент мышкой или клавиатурой.
         *
         * @event YSuggest#select
         * @param {YBlockEvent} e
         * @param {Object} e.data
         * @param {YSuggestResponseItem} e.data.item Выбранный результат ответа.
         * @param {String} e.data.text Текущий текст в поле ввода.
         */

        /**
         * Событие возникает, когда пользователь ввел строку в input элементе и нажал Enter.
         *
         * @event YSuggest#apply
         * @param {YBlockEvent} e
         * @param {Object} e.data
         * @property {YSuggestResponseItem|null} e.data.item Подходящий результат ответа.
         * @property {String} e.data.text Текущий текст в поле ввода.
         */

        /**
         * Событие возникает, когда пришел успешный ответ от провайдера подсказок.
         *
         * @event YSuggest#response-success
         * @param {YBlockEvent} e
         * @param {YSuggestResponse} e.data
         */

        /**
         * Событие возникает, когда произошла ошибка при загрузке результатов ответа провайдером подсказок.
         *
         * @event YSuggest#response-error
         * @param {YBlockEvent} e
         * @param {Error} e.data
         */

        /**
         * @param {jQuery} [domNode]
         * @param {Object} [params]
         * @param {ISuggestInput} [params.inputBlock] Поле ввода. Будет вставлено в DOM внутри саджеста.
         * @param {String} [params.inputBlockName] Имя модуля поля ввода.
         * @param {YSuggestDataProvider} [params.dataProvider] Провайдер данных саджеста.
         * @param {String} [params.dataProviderName] Имя модуля провайдера данных саджеста.
         * @param {YSuggestDrop} [params.suggestDrop] Выпадушка.
         * @param {String} [params.suggestDropName] Имя модуля выпадушки.
         * @param {insertionTextExtractor} [params.insertionTextExtractor]
         *      Функция для получения вставляемого в поле ввода текста.
         * @param {String} [params.insertionTextExtractorName]
         *      Название модуля-функции для получения вставляемого в поле ввода текста.
         * @param {Boolean} [params.syncInit=false] Инициализировать ли саджест синхронно.
         *
         * @example Асинхронная инициализация саджеста.
         * var suggest = new YSuggest();
         *
         * @example Синхронная инициализация саджеста.
         * var suggest = new YSuggest(null, {
         *     inputBlock: new YInput(),
         *     dataProvider: new YSuggestJsonpDataProvider({url: 'http://ya.ru'}),
         *     suggestDrop: new YSuggestDrop(null, {
         *         suggestDropItemClass: YSuggestDropItem,
         *         syncInit: true
         *     }),
         *     syncInit: true
         * });
         */
        __constructor: function (domNode, params) {
            this.__base.apply(this, arguments);

            if (domNode !== null && !(domNode instanceof $)) {
                params = domNode;
                domNode = null;
            }

            if (params && params.syncInit) {
                if (!params.suggestDrop.isInitialized()) {
                    throw new Error('`suggestDrop` should be initialized for sync init.');
                }
                this.setInput(params.inputBlock);
                this.getDomNode().append(this._input.getDomNode());
                this._dataProvider = params.dataProvider;
                this.setSuggestDrop(params.suggestDrop);
                this.setInsertionTextExtractor(params.insertionTextExtractor || ySuggestInsertionTextExtractor);
                this._active = true;
                this._modulesLoaded = true;
            } else {
                var options = this._getOptions();
                var inputBlockName = options.inputBlockName;
                this._input = null;

                var suggestDropModule = options.suggestDropName || 'y-suggest-drop';
                this._suggestDropOptions = options.suggestDropOptions || {};
                this._suggestDrop = null;

                var dataProviderModule = options.dataProviderName || 'y-suggest__jsonp-data-provider';
                this._dataProviderOptions = options.dataProviderOptions || {
                    url: 'http://suggest.yandex.ru/suggest-ya.cgi',
                    queryParams: {
                        v: 4,
                        uil: 'ru'
                    },
                    posQueryParamName: 'pos',
                    textQueryParamName: 'part'
                };
                this._dataProvider = null;

                var insertionTextExtractorModule = options.insertionTextExtractorName ||
                    'y-suggest__insertion-text-extractor';
                this._insertionTextExtractor = null;

                this._modulesLoaded = false;
                modules.require([
                    inputBlockName,
                    suggestDropModule,
                    dataProviderModule,
                    insertionTextExtractorModule
                ], this._onModulesLoaded.bind(this));

                this._active = false;
            }
            this._requestNumber = 0;

            if (!this._insertionTextExtractor) {
                this.setInsertionTextExtractor(function (item) {
                    return item.getText();
                });
            }
        },

        destruct: function () {
            // Флаг _cancelRequireCallbacks используется для отмены колбека загружаемых модулей в случае если блок
            // саджеста уничтожается раньше их вызова.
            this._cancelRequireCallbacks = true;

            // Чтобы ответ не мог быть обработан на уже уничтоженном объекте.
            this._requestNumber++;

            this.__base();
        },

        _activate: function () {
            this._active = true;
            this.emit('activate');
            this._setupInput(this._input);
        },

        _deactivate: function () {
            this._active = false;
            this.emit('deactivate');
            this._teardownInput(this._input);
        },

        _activateIfNeeded: function () {
            if (!this.isActive() && this._modulesLoaded && this._suggestDrop.isInitialized()) {
                this._activate();
            }
        },

        /**
         * Настраивает новый `y-input` для работы с `y-suggest`.
         *
         * @protected
         * @param {YInput} input
         */
        _setupInput: function (input) {
            this._bindTo(input, 'keydown', this._handleKeyDown);
            this._bindTo(input, 'change', this._handleChange);
            this._bindTo(input, 'blur', this._handleBlur);
            this._bindTo(input, 'focus', this._handleFocus);
        },

        /**
         * Отвязывает `y-input` от `y-suggest`.
         *
         * @protected
         * @param {YInput} input
         */
        _teardownInput: function (input) {
            this._unbindFrom(input, 'keydown', this._handleKeyDown);
            this._unbindFrom(input, 'change', this._handleChange);
            this._unbindFrom(input, 'blur', this._handleBlur);
            this._unbindFrom(input, 'focus', this._handleFocus);
        },

        /**
         * Возвращает true, если саджест активирован и готов к работе.
         *
         * @returns {Boolean}
         */
        isActive: function () {
            return this._active;
        },

        /**
         * Устанавливает функцию для получения вставляемого в поле ввода текста.
         *
         * @param {insertionTextExtractor} insertionTextExtractor
         * @returns {YSuggest}
         */
        setInsertionTextExtractor: function (insertionTextExtractor) {
            this._insertionTextExtractor = insertionTextExtractor;
            return this;
        },

        /**
         * Возвращает функцию для получения вставляемого в поле ввода текста.
         *
         * @returns {insertionTextExtractor}
         */
        getInsertionTextExtractor: function () {
            return this._insertionTextExtractor;
        },

        /**
         * Устанавливает dropdown для саджеста.
         *
         * @param {YSuggestDrop} suggestDrop
         * @returns {YSuggest}
         */
        setSuggestDrop: function (suggestDrop) {
            var isAsync = !suggestDrop.isInitialized();
            if (isAsync) {
                this._deactivate();
            } else {
                this._teardownInput(this._input);
            }
            this._setSuggestDrop(suggestDrop);
            if (isAsync) {
                suggestDrop.initialize().done(this._activateIfNeeded.bind(this));
            } else {
                this._setupInput(this._input);
            }
            return this;
        },

        _setSuggestDrop: function (suggestDrop) {
            if (this._suggestDrop) {
                this._unbindFrom(this._suggestDrop, 'click', this._handleClick);
            }
            this._suggestDrop = suggestDrop;
            this._bindTo(suggestDrop, 'click', this._handleClick);
            suggestDrop.getDomNode().appendTo(this.getDomNode());
        },

        _handleClick: function (e) {
            this._fillText(this._insertionTextExtractor(e.data));
            var text = this.getInputText();

            this.emit('click', e.data);

            this.emit('select', {
                item: e.data,
                text: text
            });

            this.emit('apply', {
                item: e.data,
                text: text
            });
        },

        setDataProvider: function (dataProvider) {
            this._dataProvider = dataProvider;
            this._activateIfNeeded();
        },

        setInput: function (inputBlock) {
            this._input = inputBlock;
            this._input.disableAutocomplete();
        },

        /**
         * Возвращает провайдер данных.
         *
         * @returns {YSuggestDataProvider|undefined}
         */
        getDataProvider: function () {
            return this._dataProvider;
        },

        _onModulesLoaded: function (InputBlockClass, SuggestDropClass, DataProviderClass, insertionTextExtractor) {
            if (!this._cancelRequireCallbacks) {
                this.setInput(InputBlockClass.find(this.getDomNode()));
                this.setSuggestDrop(new SuggestDropClass(null, this._suggestDropOptions));
                this.setDataProvider(new DataProviderClass(this._dataProviderOptions));
                this.setInsertionTextExtractor(insertionTextExtractor);
                this._modulesLoaded = true;
            }
        },

        /**
         * Обработчик исчезновения фокуса с поля ввода.
         *
         * @protected
         */
        _handleBlur: function () {
            this._hideSuggestDrop();
        },

        /**
         * Обработчик появления фокуса на поле ввода.
         *
         * @protected
         */
        _handleFocus: function () {
            if (this._input.getValue().trim().length) {
                this._requestDataProvider();
            }
        },

        /**
         * Обработчик нажатия клавиши в поле ввода.
         *
         * @param {YBlockEvent} blockEvent
         */
        _handleKeyDown: function (blockEvent) {
            var e = blockEvent.data;
            switch (e.keyCode) {
                case 13: // ENTER
                    if (this._suggestDrop.isVisible()) {
                        var currResponseItem = this._suggestDrop.getCurrentResponseItem();
                        var currText = this.getInputText();

                        if (currResponseItem) {
                            // Вставляем текст в поле ввода.
                            this._fillText(this._insertionTextExtractor(currResponseItem));

                            this.emit('select', {
                                item: currResponseItem,
                                text: currText
                            });
                        } else {
                            // Ищем подходящий результат ответа для введенного текста.
                            currResponseItem = this._getMatchingResponseItem(currText);
                        }

                        this.emit('apply', {
                            item: currResponseItem,
                            text: currText
                        });
                    }

                    this._hideSuggestDrop();
                    break;
                case 27: // ESCAPE
                    this._hideSuggestDrop();
                    break;
                case 38: // UP
                    blockEvent.preventDefault();
                    if (this._suggestDrop.isVisible()) {
                        this._suggestDrop.selectPreviousResult();
                        this._fillTextFromSuggestDrop();
                    }
                    break;
                case 40: // DOWN
                    blockEvent.preventDefault();
                    if (this._suggestDrop.isVisible()) {
                        this._suggestDrop.selectNextResult();
                        this._fillTextFromSuggestDrop();
                    }
                    break;
            }
        },

        _getMatchingResponseItem: function (query) {
            if (!this._lastResponse || this._lastResponse.getItemCount() === 0) {
                return null;
            }

            // Нормализуем запрос.
            query = query.toLowerCase();

            // Ищем первый элемент ответа, совпадающий с запросом.
            var matchingItem = null;
            this._lastResponse.getGroups().some(function (group) {
                if (group.getItems().some(function (item) {
                    if (item.getText().toLowerCase() === query) {
                        matchingItem = item;
                        return true;
                    }
                }, this)) {
                    return true;
                }
            }, this);

            return matchingItem;
        },

        _fillTextFromSuggestDrop: function () {
            var item = this._suggestDrop.getCurrentResponseItem();
            if (item) {
                this._fillText(this._insertionTextExtractor(item));
            }
        },

        _fillText: function (text) {
            if (!this._input) {
                throw new Error('Input is not loaded for y-suggest yet.');
            }
            this._unbindFrom(this._input, 'change', this._handleChange);
            this._input.setValue(text);
            this._bindTo(this._input, 'change', this._handleChange);
        },

        /**
         * Устанавливает текст поля ввода. В случае, если input еще не загружен, кидает ошибку.
         *
         * @param {String} text
         */
        setInputText: function (text) {
            this._fillText(text);
        },

        /**
         * Возвращает текст поля ввода. В случае, если input еще не загружен, возвращает undefined.
         *
         * @returns {String|undefined}
         */
        getInputText: function () {
            return this._input ? this._input.getValue() : undefined;
        },

        /**
         * Возвращает блок поля ввода саджеста.
         *
         * @returns {ISuggestInput|null}
         */
        getInput: function () {
            return this._input;
        },

        /**
         * Прячет выпадающую панель подсказок.
         *
         * @protected
         */
        _hideSuggestDrop: function () {
            this._requestNumber++;
            if (this._suggestDrop.isVisible()) {
                this._suggestDrop.hide();
            }
        },

        /**
         * Показывает выпадающую панель подсказок.
         *
         * @protected
         */
        _showSuggestDrop: function () {
            if (!this._suggestDrop.isVisible()) {
                this._suggestDrop.show();
            }
        },

        /**
         * Обрабатывает результат запроса.
         *
         * @protected
         * @param {YSuggestResponse} response
         */
        _handleResponse: function (response) {
            if (response.getItemCount() === 0) {
                this._hideSuggestDrop();
                this._lastResponse = null;
            } else {
                this._suggestDrop.render(response);
                this._showSuggestDrop();
                this._lastResponse = response;
            }
        },

        /**
         * Обрабатывает изменение текста в поле ввода.
         *
         * @protected
         */
        _handleChange: function () {
            if (!this._input.hasFocus()) {
                return;
            }

            if (this._input.getValue().trim().length) {
                this._requestDataProvider();
            } else {
                this._hideSuggestDrop();
            }
        },

        /**
         * Запрашивает подсказки у провайдера данных.
         */
        _requestDataProvider: function () {
            this._requestNumber++;
            var requestNumber = this._requestNumber;
            this._dataProvider.query(this._input.getValue(), this._input.getCaretPosition())
                .done(function (data) {
                    if (requestNumber === this._requestNumber) {
                        this._handleResponse(data);
                        this.emit('response-success', this._lastResponse);
                    }
                }, function (error) {
                    if (requestNumber === this._requestNumber) {
                        this.emit('response-error', error);
                    }
                }, this);
        }
    }, {
        getBlockName: function () {
            return 'y-suggest';
        }
    });

    provide(YSuggest);
});

modules.define(
    'y-suggest__jsonp-data-provider',
    ['inherit', 'y-suggest__json-data-provider'],
    function (provide, inherit, YSuggestJsonDataProvider) {

    /**
     * Провайдер данных саджеста в формате jsonp.
     *
     * @name YSuggestJsonpDataProvider
     * @augments YSuggestJsonDataProvider
     */
    var YSuggestJsonpDataProvider = inherit(YSuggestJsonDataProvider, {
        _getDataType: function () {
            return 'jsonp';
        }
    });

    provide(YSuggestJsonpDataProvider);
});

modules.define(
    'y-suggest__json-data-provider',
    [
        'inherit',
        'vow',
        'y-extend',
        'jquery',
        'y-suggest__response',
        'y-suggest__response-group',
        'y-suggest__response-item'
    ],
    function (provide, inherit, vow, extend, $, YSuggestResponse, YSuggestResponseGroup, YSuggestResponseItem) {

    /**
     * Провайдер данных саджеста в формате json.
     *
     * @name YSuggestJsonDataProvider
     */
    var YSuggestJsonDataProvider = inherit({
        /**
         * @param {Object} options
         * @param {String} options.url URL запроса.
         * @param {Object} [options.queryParams] Параметры запроса.
         * @param {String} [options.posQueryParamName] Имя параметра, передающего положение курсора в поле.
         * @param {String} [options.textQueryParamName='part'] Имя параметра, передающего текст поля.
         * @param {Number} [options.timeout=15000] Время ожидания запроса.
         * @param {String} [options.defaultGroupType='search'] Тип группы подсказок саджеста по умолчанию.
         * @param {String} [options.personalGroupType='personal'] Тип группы персональных подсказок саджеста.
         * @param {Boolean} [options.disableGrouping] Отключить группы.
         */
        __constructor: function (options) {
            this._queryParams = options.queryParams || {};
            this._url = options.url;
            this._posQueryParamName = options.posQueryParamName;
            this._textQueryParamName = options.textQueryParamName || 'part';
            this._timeout = options.timeout || 15000;
            this._defaultGroupType = options.defaultGroupType || 'search';
            this._personalGroupType = options.personalGroupType || 'personal';
            this._disableGrouping = options.disableGrouping;
        },

        query: function (text, pos) {
            var params = extend({}, this._queryParams);
            params[this._textQueryParamName] = text;
            if (this._posQueryParamName) {
                params[this._posQueryParamName] = pos;
            }
            return this._execQuery(params);
        },

        /**
         * Возвращает набор дополнительных параметров.
         *
         * @returns {Object}
         */
        getQueryParams: function () {
            return extend({}, this._queryParams);
        },

        /**
         * Устанавливает набор дополнительных параметров.
         *
         * @param {Object} queryParams
         * @returns {YSuggestJsonDataProvider}
         */
        setQueryParams: function (queryParams) {
            this._queryParams = extend({}, queryParams);
            return this;
        },

        /**
         * Устанавливает один дополнительный параметр.
         *
         * @param {String} name
         * @param {*} value
         * @returns {YSuggestJsonDataProvider}
         */
        setQueryParam: function (name, value) {
            this._queryParams[name] = value;
            return this;
        },

        /**
         * Возвращает `url` для запросов за данными.
         *
         * @returns {String}
         */
        getUrl: function () {
            return this._url;
        },

        /**
         * Устанавливает `url` для запросов за данными.
         *
         * @param {String} url
         * @returns {YSuggestJsonDataProvider}
         */
        setUrl: function (url) {
            this._url = url;
            return this;
        },

        _getDataType: function () {
            return 'json';
        },

        _getHttpMethod: function () {
            return 'GET';
        },

        _execQuery: function (queryParams) {
            var deferred = vow.defer();

            $.ajax(this._url, {
                data: queryParams,
                type: this._getHttpMethod(),
                dataType: this._getDataType(),
                timeout: this._timeout,
                success: function (result) {
                    deferred.resolve(this._createResponse(this._normalizeData(result)));
                },
                error: function (xhr, status, errorText) {
                    deferred.reject(new Error(
                        status + ': ' + errorText + ' at ' + this._url + '?' + $.param(queryParams)
                    ));
                },
                context: this
            });

            return deferred.promise();
        },

        /**
         * Возвращает тип группы на основе одного из пунктов ответа.
         *
         * @protected
         * @param {String|Array} item
         * @returns {String}
         */
        _getItemGroupType: function (item) {
            if (typeof item === 'string') {
                return this._defaultGroupType;
            } else {
                var params = item[2];
                if (params && params.pers) {
                    return this._personalGroupType;
                } else {
                    return item[0] || this._defaultGroupType;
                }
            }
        },

        /**
         * Приводит результаты саджеста в понятный вид.
         *
         * @protected
         * @param {Array} data
         * @returns {Object}
         */
        _normalizeData: function (data) {
            return {
                query: data[0],
                items: data[1] || [],
                params: data[2]
            };
        },

        /**
         * Создает YSuggestResponse на основе данных из ответа сервера.
         *
         * @protected
         * @param {Object} data
         * @returns {YSuggestResponse}
         */
        _createResponse: function (data) {
            var groups = [];
            if (this._disableGrouping) {
                var defaultGroup = new YSuggestResponseGroup(this._defaultGroupType);
                data.items.forEach(function (item) {
                    defaultGroup.addItem(this._createResponseItem(item));
                }, this);
                groups.push(defaultGroup);
            } else {
                var groupIndex = {};
                data.items.forEach(function (item) {
                    var groupType = this._getItemGroupType(item);
                    if (!groupIndex[groupType]) {
                        var group = new YSuggestResponseGroup(groupType);
                        groupIndex[groupType] = group;
                        groups.push(group);
                    }
                    groupIndex[groupType].addItem(this._createResponseItem(item));
                }, this);
            }
            return new YSuggestResponse(
                data.query,
                groups,
                data.params || {}
            );
        },

        /**
         * Создает YSuggestResponseItem на основе одного из пунктов ответа.
         *
         * @protected
         * @param {String|Array} resultItem
         * @returns {YSuggestResponseItem}
         */
        _createResponseItem: function (resultItem) {
            if (typeof resultItem === 'string') {
                resultItem = [this._defaultGroupType, resultItem, {}];
            }
            var params = resultItem.slice(2);
            var options;
            if (typeof params[params.length - 1] === 'object') {
                options = params.pop();
            }  else {
                options = {};
            }
            return new YSuggestResponseItem(resultItem[0], resultItem[1], params, options);
        }
    });
    provide(YSuggestJsonDataProvider);
});

modules.define(
    'y-suggest__response',
    ['inherit'],
    function (provide, inherit) {

    /**
     * @name YSuggestResponse
     */
    var YSuggestResponse = inherit({
        __constructor: function (query, groups, params) {
            this._query = query;
            this._groups = groups;
            this._params = params;
        },

        /**
         * Возвращает строку, по которой был запрощен саджест.
         *
         * @returns {String}
         */
        getQuery: function () {
            return this._query;
        },

        /**
         * Возвращает набор групп с результатами саджеста.
         *
         * @returns {YSuggestResponseGroup[]}
         */
        getGroups: function () {
            return this._groups;
        },

        /**
         * Возвращает дополнительные параметры.
         *
         * @returns {Object}
         */
        getParams: function () {
            return this._params;
        },

        /**
         * Возвращает число записей.
         *
         * @returns {Number}
         */
        getItemCount: function () {
            var count = 0;
            this._groups.forEach(function (group) {
                count += group.getItems().length;
            });
            return count;
        }
    });
    provide(YSuggestResponse);
});

modules.define(
    'y-suggest__response-group',
    ['inherit'],
    function (provide, inherit) {

    /**
     * @name YSuggestResponseGroup
     */
    var YSuggestResponseGroup = inherit({
        __constructor: function (type, items) {
            this._type = type;
            this._items = items || [];
        },

        /**
         * Возвращает тип группы.
         *
         * @returns {String}
         */
        getType: function () {
            return this._type;
        },

        /**
         * Возвращает набор результатов саджеста.
         *
         * @returns {YSuggestResponseItem[]}
         */
        getItems: function () {
            return this._items;
        },

        /**
         * Добавляет результат в группу.
         *
         * @param {YSuggestResponseItem} item
         */
        addItem: function (item) {
            this._items.push(item);
        }
    });
    provide(YSuggestResponseGroup);
});

modules.define(
    'y-suggest__response-item',
    ['inherit'],
    function (provide, inherit) {

    /**
     * @name YSuggestResponseItem
     */
    var YSuggestResponseItem = inherit({
        __constructor: function (type, text, params, options) {
            this._type = type;
            this._text = text;
            this._params = params || [];
            this._options = options || {};
        },

        getType: function () {
            return this._type;
        },

        getText: function () {
            return this._text;
        },

        getParams: function () {
            return this._params;
        },

        getOptions: function () {
            return this._options;
        }
    });
    provide(YSuggestResponseItem);
});

modules.define(
    'y-suggest__insertion-text-extractor',
    function (provide) {

    /**
     * Возвращает текст переданного элемента ответа сервера.
     *
     * @param {YSuggestResponseItem} item
     * @returns {String}
     */
    var insertionTextExtractor = function (item) {
        return item.getText();
    };

    provide(insertionTextExtractor);
});

modules.define(
    'y-suggest-drop',
    ['y-block', 'inherit', 'bt', 'vow', 'jquery'],
    function (provide, YBlock, inherit, bt, vow, $) {

    var win = $(window);

    var YSuggestDrop = inherit(YBlock, {
        /**
         * @param {jQuery} [domNode]
         * @param {Object} [params]
         * @param {Function} [params.suggestDropItemClass] Класс элемента саджеста.
         * @param {String} [params.suggestDropItemName] Имя класса элемента саджеста.
         * @param {Boolean} [params.syncInit=false] Инициализировать ли саджест синхронно.
         *
         * @example Асинхронная инициализация выпадушки.
         * var suggestDrop = new YSuggestDrop();
         *
         * @example Синхронная инициализация выпадушки.
         * var suggestDrop = new YSuggestDrop(null, {
         *     suggestDropItemClass: YSuggestDropItem,
         *     syncInit: true
         * });
         */
        __constructor: function (domNode, params) {
            this.__base.apply(this, arguments);

            this._content = $(bt.apply({
                block: this.__self.getBlockName(),
                elem: 'content',
                view: this.getView()
            }));
            this._content.appendTo(document.body);
            this._content.hide();

            params = params || {};
            if (params.syncInit) {
                this._setSuggestDropItemClass(params.suggestDropItemClass);
            } else {
                this._suggestDropItemClass = null;
                this._suggestDropItemModule = params.suggestDropItemName || 'y-suggest-drop-item';
            }
            this._wide = params.wide;
            this._suggestDropItemView = params.suggestDropItemView;
            this._suggestItems = [];
            this._responseItems = [];
            this._selectedIndex = null;

            this._bindTo(this._content, 'mouseleave', function () {
                this._selectItem(null);
            });
            this._isVisible = false;
        },

        destruct: function () {
            this._content.remove();
            this.__base();
        },

        hide: function () {
            this._isVisible = false;
            this._content.hide();
            this._unbindFrom(win, 'resize', this._drawContent);
        },

        show: function () {
            this._isVisible = true;
            this._content.show();
            this._bindTo(win, 'resize', this._drawContent);
            this._drawContent();
        },

        isVisible: function () {
            return this._isVisible;
        },

        _setSuggestDropItemClass: function (suggestDropItemClass) {
            this._suggestDropItemClass = suggestDropItemClass;
            var itemEmitter = suggestDropItemClass.getEmitter(this._content);
            this._bindTo(itemEmitter, 'mouseenter', this._handleItemMouseEnter);
            this._bindTo(itemEmitter, 'click', this._handleItemClick);
        },

        /**
         * @returns {Promise}
         */
        initialize: function () {
            var deferred = vow.defer();

            modules.require([this._suggestDropItemModule], function (suggestDropItemClass) {
                this._setSuggestDropItemClass(suggestDropItemClass);
                deferred.resolve();
            }.bind(this));

            return deferred.promise();
        },

        _handleItemMouseEnter: function (e) {
            this._selectItem(this._suggestItems.indexOf(e.target));
        },

        _handleItemClick: function (e) {
            var index = this._suggestItems.indexOf(e.target);
            if (index !== -1) {
                this.emit('click', this._responseItems[index]);
            }
        },

        isInitialized: function () {
            return Boolean(this._suggestDropItemClass);
        },

        selectPreviousResult: function () {
            var index = this._selectedIndex;
            if (index === null) {
                index = this._suggestItems.length - 1;
            } else {
                index--;
            }
            this._selectItem(index);
        },

        selectNextResult: function () {
            var index = this._selectedIndex;
            if (index === null) {
                index = 0;
            } else {
                index++;
            }
            this._selectItem(index);
        },

        _selectItem: function (index) {
            if (this._selectedIndex !== null && this._suggestItems[this._selectedIndex]) {
                this._suggestItems[this._selectedIndex].deselect();
            }
            this._selectedIndex = index;
            if (index !== null && this._suggestItems[index]) {
                this._suggestItems[index].select();
                this._selectedIndex = index;
            } else {
                this._selectedIndex = null;
            }
        },

        /**
         * Возвращает текущий выбранный результат.
         *
         * @returns {YSuggestResponseItem}
         */
        getCurrentResponseItem: function () {
            if (this._selectedIndex !== null) {
                return this._responseItems[this._selectedIndex] || null;
            } else {
                return null;
            }
        },

        _drawContent: function () {
            var node = this.getDomNode();
            var offset = node.offset();
            var css = {
                top: offset.top + 'px'
            };
            if (!this._wide) {
                css.left = offset.left + 'px';
                css.width = node.width() + 'px';
            }
            this._content.css(css);
        },

        /**
         *
         * @param {YSuggestResponse} response
         */
        render: function (response) {
            this._selectedIndex = null;
            var SuggestDropItem = this._suggestDropItemClass;
            var contents = this._content.contents();
            YBlock.destructDomTree(contents);
            contents.remove();
            var responseItems = [];
            var btjson = response.getGroups().map(function (group) {
                return {
                    block: this.__self.getBlockName(),
                    view: this.getView(),
                    elem: 'group',
                    type: group.getType(),
                    items: group.getItems().map(function (item) {
                        responseItems.push(item);
                        return {
                            block: SuggestDropItem.getBlockName(),
                            view: this._suggestDropItemView,
                            text: item.getText(),
                            type: item.getType(),
                            params: item.getParams(),
                            options: item.getOptions()
                        };
                    }, this)
                };
            }, this);
            this._content.html(bt.apply(btjson));
            this._responseItems = responseItems;
            this._suggestItems = SuggestDropItem.findAll(this._content);
            this._drawContent();
        }
    }, {
        getBlockName: function () {
            return 'y-suggest-drop';
        }
    });

    provide(YSuggestDrop);
});

modules.define(
    'y-suggest-drop-item',
    [
        'y-block',
        'inherit'
    ],
    function (
        provide,
        YBlock,
        inherit
    ) {

    /**
     * @name YSuggestDropItem
     */
    var YSuggestDropItem = inherit(YBlock, {
        __constructor: function () {
            this.__base.apply(this, arguments);
            this._bindTo(this.getDomNode(), 'mouseenter', this._handleMouseEnter);
            this._bindTo(this.getDomNode(), 'mousedown', this._handleClick);
        },

        _handleMouseEnter: function () {
            this.emit('mouseenter');
        },

        _handleClick: function () {
            this.emit('click');
        },

        select: function () {
            this._setState('selected');
        },

        deselect: function () {
            this._removeState('selected');
        }
    }, {
        getBlockName: function () {
            return 'y-suggest-drop-item';
        }
    });

    provide(YSuggestDropItem);
});

modules.define('bt', ["y-i18n"], function(provide, i18n) {
var BT = (function() {

/**
 * Счетчик используемый для генерации уникальных id в методе generateId.
 * @type {Number}
 */
var lastGenId = 0;

/**
 * BT: BtJson -> HTML процессор.
 * @constructor
 */
function BT() {
    /**
     * Используется для идентификации матчеров.
     * Каждому матчеру дается уникальный id для того, чтобы избежать повторного применения
     * матчера к одному и тому же узлу BtJson-дерева.
     * @type {Number}
     * @private
     */
    this._lastMatchId = 0;
    /**
     * Плоский массив для хранения матчеров.
     * Каждый элемент — массив с двумя элементами: [{String} выражение, {Function} матчер}]
     * @type {Array}
     * @private
     */
    this._matchers = {};
    /**
     * Отображения по умолчанию для блоков.
     * @type {Object}
     * @private
     */
    this._defaultViews = {};
    /**
     * Флаг, включающий автоматическую систему поиска зацикливаний. Следует использовать в development-режиме,
     * чтобы определять причины зацикливания.
     * @type {Boolean}
     * @private
     */
    this._infiniteLoopDetection = false;

    /**
     * Неймспейс для библиотек. Сюда можно писать различный функционал для дальнейшего использования в матчерах.
     * ```javascript
     * bt.lib.objects = bt.lib.objects || {};
     * bt.lib.objects.inverse = bt.lib.objects.inverse || function(obj) { ... };
     * ```
     * @type {Object}
     */
    this.lib = {};
    /**
     * Опции BT. Задаются через setOptions.
     * @type {Object}
     */
    this._options = {};
    this.utils = {

        _side: (typeof window === 'undefined') ? 's' : 'c',

        bt: this,

        /**
         * Возвращает позицию элемента в рамках родителя.
         * Отсчет производится с 1 (единицы).
         *
         * ```javascript
         * bt.match('list__item', function(ctx) {
         *     if (ctx.position() === 2) {
         *         ctx.setState('is-second');
         *     }
         * });
         * ```
         * @returns {Number}
         */
        getPosition: function () {
            var node = this.node;
            return node.index === '_content' ? 1 : node.index + 1;
        },

        /**
         * Возвращает true, если текущий bemjson-элемент первый в рамках родительского bemjson-элемента.
         *
         * ```javascript
         * bt.match('list__item', function(ctx) {
         *     if (ctx.isFirst()) {
         *         ctx.setState('is-first');
         *     }
         * });
         * ```
         * @returns {Boolean}
         */
        isFirst: function () {
            var node = this.node;
            return node.index === '_content' || node.index === 0;
        },

        /**
         * Возвращает true, если текущий bemjson-элемент последний в рамках родительского bemjson-элемента.
         *
         * ```javascript
         * bt.match('list__item', function(ctx) {
         *     if (ctx.isLast()) {
         *         ctx.setState('is-last');
         *     }
         * });
         * ```
         * @returns {Boolean}
         */
        isLast: function () {
            var node = this.node;
            return node.index === '_content' || node.index === node.arr.length - 1;
        },

        // --- HTML ---

        /**
         * Устанавливает тег.
         *
         * @param tagName
         * @returns {String|undefined}
         */
        setTag: function (tagName) {
            this.ctx._tag = tagName;
            return this;
        },

        /**
         * Возвращает тег.
         *
         * @returns {Ctx}
         */
        getTag: function () {
            return this.ctx._tag;
        },

        /**
         * Устанавливает значение атрибута.
         *
         * @param {String} attrName
         * @param {String} attrValue
         */
        setAttr: function (attrName, attrValue) {
            (this.ctx._attrs || (this.ctx._attrs = {}))[attrName] = attrValue;
            return this;
        },

        /**
         * Возвращает значение атрибута.
         *
         * @param {String} attrName
         * @returns {Ctx}
         */
        getAttr: function (attrName) {
            return this.ctx._attrs ? this.ctx._attrs[attrName] : undefined;
        },

        /**
         * Отключает генерацию атрибута `class`.
         *
         * @returns {Ctx}
         */
        disableCssClassGeneration: function () {
            this.ctx._disableCssGeneration = true;
            return this;
        },

        /**
         * Включает генерацию атрибута `class`. По умолчанию — включено.
         *
         * @returns {Ctx}
         */
        enableCssClassGeneration: function () {
            this.ctx._disableCssGeneration = false;
            return this;
        },

        /**
         * Возвращает `true` если генерация атрибута `class` включена.
         *
         * @returns {Boolean}
         */
        isCssClassGenerationEnabled: function () {
            return !Boolean(this.ctx._disableCssGeneration);
        },

        /**
         * Отключает генерацию дополнительных data-атрибутов.
         *
         * @returns {Ctx}
         */
        disableDataAttrGeneration: function () {
            this.ctx._disableDataAttrGeneration = true;
            return this;
        },

        /**
         * Включает генерацию дополнительных data-атрибутов.
         *
         * @returns {Ctx}
         */
        enableDataAttrGeneration: function () {
            this.ctx._disableDataAttrGeneration = false;
            return this;
        },

        /**
         * Возвращает `true` если генерация дополнительных data-атрибутов включена.
         *
         * @returns {Boolean}
         */
        isDataAttrGenerationEnabled: function () {
            return !Boolean(this.ctx._disableDataAttrGeneration);
        },

        // --- BEViS ---

        /**
         * Возвращает состояние по его имени.
         *
         * @param {String} stateName
         * @returns {String|Boolean|undefined}
         */
        getState: function (stateName) {
            return this.ctx._state ? this.ctx._state[stateName] : undefined;
        },

        /**
         * Устанавливает значение состояния.
         *
         * @param {String} stateName
         * @param {String|Boolean|null} stateValue
         * @returns {Ctx}
         */
        setState: function (stateName, stateValue) {
            (this.ctx._state || (this.ctx._state = {}))[stateName] =
                arguments.length === 1 ? true : stateValue;
            return this;
        },

        /**
         * Возвращает значение параметра (btjson).
         *
         * @param {String} paramName
         * @returns {*|undefined}
         */
        getParam: function (paramName) {
            return this.ctx[paramName];
        },

        /**
         * Возвращает значение view.
         *
         * @returns {String|undefined}
         */
        getView: function () {
            return this.ctx.view;
        },

        /**
         * Возвращает имя блока.
         *
         * @returns {String}
         */
        getBlockName: function () {
            return this.ctx.block;
        },

        /**
         * Возвращает имя элемента, если матчинг происходит на элемент.
         *
         * @returns {String|undefined}
         */
        getElementName: function () {
            return this.ctx.elem;
        },

        /**
         * Устанавливает содержимое.
         *
         * @param {BtJson} content
         * @returns {Ctx}
         */
        setContent: function (content) {
            this.ctx._content = content;
            return this;
        },

        /**
         * Возвращает содержимое.
         *
         * @returns {BtJson|undefined}
         */
        getContent: function () {
            return this.ctx._content;
        },

        /**
         * Возвращает набор миксинов, либо `undefined`.
         *
         * @returns {BtJson[]|undefined}
         */
        getMixins: function () {
            return this.ctx.mixins;
        },

        /**
         * Добавляет миксин.
         *
         * @param {BtJson} mixin
         * @returns {Ctx}
         */
        addMixin: function (mixin) {
            (this.ctx.mixins || (this.ctx.mixins = [])).push(mixin);
            return this;
        },

        /**
         * Включает автоматическую инициализацию.
         *
         * @returns {Ctx}
         */
        enableAutoInit: function () {
            if (this.ctx.autoInit !== false) {
                this.ctx.autoInit = true;
            }
            return this;
        },

        /**
         * Возвращает `true`, если для данного элемента включена автоматическая инициализация.
         *
         * @returns {Boolean}
         */
        isAutoInitEnabled: function () {
            return Boolean(this.ctx.autoInit);
        },

        /**
         * Устанавливает опцию, которая передается в JS-блок при инициализации.
         *
         * @param {String} optName
         * @param {*} optValue
         * @returns {Ctx}
         */
        setInitOption: function (optName, optValue) {
            (this.ctx._initOptions || (this.ctx._initOptions = {}))[optName] = optValue;
            return this;
        },

        /**
         * Возвращает значение опции, которая передается в JS-блок при инициализации.
         *
         * @param {String} optName
         * @returns {*}
         */
        getInitOption: function (optName) {
            return this.ctx._initOptions ? this.ctx._initOptions[optName] : undefined;
        },

        /**
         * Возвращает уникальный идентификатор. Может использоваться, например,
         * чтобы задать соответствие между `label` и `input`.
         * @returns {String}
         */
        generateId: function () {
            return 'uniq' + this._side + (lastGenId++);
        },

        /**
         * Останавливает выполнение прочих матчеров для данного bemjson-элемента.
         *
         * Пример:
         * ```javascript
         * bt.match('button', function(ctx) {
         *     ctx.setTag('button');
         * });
         * bt.match('button', function(ctx) {
         *     ctx.setTag('span');
         *     ctx.stop();
         * });
         * ```
         * @returns {Ctx}
         */
        stop: function () {
            this.ctx._stop = true;
            return this;
        },

        /**
         * Выполняет преобразования данного bemjson-элемента остальными матчерами.
         * Может понадобиться, например, чтобы добавить элемент в самый конец содержимого,
         * если в базовых шаблонах в конец содержимого добавляются другие элементы.
         *
         * Предоставляет минимальный функционал доопределения в рамках библиотеки.
         *
         * @returns {Ctx}
         */
        applyTemplates: function () {
            var prevCtx = this.ctx,
                prevNode = this.node;
            var res = this.bt.processBtJson(this.ctx, this.ctx.block, true);
            if (res !== prevCtx) {
                this.newCtx = res;
            }
            this.ctx = prevCtx;
            this.node = prevNode;
            return this;
        },

        /**
         * Возвращает текущий фрагмент BtJson-дерева.
         * Может использоваться в связке с `return` для враппинга и подобных целей.
         * ```javascript
         *
         * bt.match('input', function(ctx) {
         *     return {
         *         elem: 'wrapper',
         *         content: ctx.getJson()
         *     };
         * });
         * ```
         * @returns {Object|Array}
         */
        getJson: function () {
            return this.newCtx || this.ctx;
        },

        /**
         * Экранирует HTML.
         *
         * @param {String} val
         * @return {String}
         */
        escape: function (val) {
            return ('' + val)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#x27;')
                .replace(/\//g,'&#x2F;');
        }
    };
}

BT.prototype = {
    /**
     * Включает/выключает механизм определения зацикливаний.
     *
     * @param {Boolean} enable
     * @returns {BT}
     */
    enableInfiniteLoopDetection: function(enable) {
        this._infiniteLoopDetection = enable;
        return this;
    },

    /**
     * Преобразует BtJson в HTML-код.
     * @param {Object|Array|String} btJson
     */
    apply: function (btJson) {
        return this.toHtml(this.processBtJson(btJson));
    },

    /**
     * Объявляет матчер.
     *
     * ```javascript
     * bt.match('b-page', function(ctx) {
     *     ctx.addMixin({ block: 'i-ua' });
     *     ctx.setAttr('class', 'i-ua_js_no i-ua_css_standard');
     * });
     * bt.match('block_mod_modVal', function(ctx) {
     *     ctx.setTag('span');
     * });
     * bt.match('block__elem', function(ctx) {
     *     ctx.setAttr('disabled', 'disabled');
     * });
     * bt.match('block__elem_elemMod_elemModVal', function(ctx) {
     *     ctx.setState('is-active');
     * });
     * bt.match('block_blockMod_blockModVal__elem', function(ctx) {
     *     ctx.setContent({
     *         elem: 'wrapper',
     *         content: ctx.getJson()
     *     };
     * });
     * ```
     * @param {String|Array} expr
     * @param {Function} matcher
     * @returns {Ctx}
     */
    match: function (expr, matcher) {
        matcher.__id = '__func' + (this._lastMatchId++);
        if (Array.isArray(expr)) {
            for (var i = 0, l = expr.length; i < l; i++) {
                (this._matchers[expr[i]] || (this._matchers[expr[i]] = [])).unshift(matcher);
            }
        } else {
            (this._matchers[expr] || (this._matchers[expr] = [])).unshift(matcher);
        }
        return this;
    },

    /**
     * Устанавливает отображение по умолчанию для блока.
     *
     * @param {String} blockName
     * @param {String} viewName
     * @returns {BT}
     */
    setDefaultView: function (blockName, viewName) {
        this._defaultViews[blockName] = viewName;
        return this;
    },

    /**
     * Раскрывает BtJson, превращая его из краткого в полный.
     * @param {Object|Array} btJson
     * @param {String} [blockName]
     * @param {Boolean} [ignoreContent]
     * @returns {Object|Array}
     */
    processBtJson: function (btJson, blockName, ignoreContent) {
        var resultArr = [btJson];
        var nodes = [{ json: btJson, arr: resultArr, index: 0, blockName: blockName }];
        var node, json, block, blockView, i, l, p, child, subRes;
        var matchers = this._matchers;
        var processContent = !ignoreContent;
        var infiniteLoopDetection = this._infiniteLoopDetection;

        /**
         * Враппер для json-узла.
         * @constructor
         */
        function Ctx() {
            this.ctx = null;
            this.newCtx = null;
        }
        Ctx.prototype = this.utils;
        var ctx = new Ctx();
        while (node = nodes.shift()) {
            json = node.json;
            block = node.blockName;
            blockView = node.blockView;
            if (Array.isArray(json)) {
                for (i = 0, l = json.length; i < l; i++) {
                    child = json[i];
                    if (child !== false && child != null && typeof child === 'object') {
                        nodes.push({ json: child, arr: json, index: i, blockName: block, blockView: blockView });
                    }
                }
            } else {
                var content, stopProcess = false;
                if (json.elem) {
                    if (json.block && json.block !== block) {
                        block = json.block;
                        blockView = json.view = json.view || this._defaultViews[block];
                    } else {
                        block = json.block = json.block || block;
                        blockView = json.view = json.view || blockView || this._defaultViews[block];
                    }
                } else if (json.block) {
                    block = json.block;
                    blockView = json.view = json.view || this._defaultViews[block];
                }

                if (json.block) {

                    if (infiniteLoopDetection) {
                        json.__processCounter = (json.__processCounter || 0) + 1;
                        if (json.__processCounter > 100) {
                            throw new Error(
                                'Infinite loop detected at "' + json.block + (json.elem ? '__' + json.elem : '') + '".'
                            );
                        }
                    }

                    subRes = null;

                    if (!json._stop) {
                        ctx.node = node;
                        ctx.ctx = json;
                        var selectorPostfix = json.elem ? '__' + json.elem : '';

                        var matcherList = matchers[json.block + (json.view ? '_' + json.view : '') + selectorPostfix];
                        if (!matcherList && json.view) {
                            matcherList = matchers[json.block + '_' + json.view.split('-')[0] + '*' + selectorPostfix];
                        }
                        if (!matcherList) {
                            matcherList = matchers[json.block + '*' + selectorPostfix];
                        }

                        if (matcherList) {
                            for (i = 0, l = matcherList.length; i < l; i++) {
                                var matcher = matcherList[i], mid = matcher.__id;
                                if (!json[mid]) {
                                    json[mid] = true;
                                    subRes = matcher(ctx);
                                    if (subRes != null) {
                                        json = subRes;
                                        node.json = json;
                                        node.blockName = block;
                                        node.blockView = blockView;
                                        nodes.push(node);
                                        stopProcess = true;
                                        break;
                                    }
                                    if (json._stop) {
                                        break;
                                    }
                                }
                            }
                        }
                    }

                }

                if (!stopProcess) {
                    if (Array.isArray(json)) {
                        node.json = json;
                        node.blockName = block;
                        node.blockView = blockView;
                        nodes.push(node);
                    } else {
                        if (processContent && ((content = json._content) != null)) {
                            if (Array.isArray(content)) {
                                var flatten;
                                do {
                                    flatten = false;
                                    for (i = 0, l = content.length; i < l; i++) {
                                        if (Array.isArray(content[i])) {
                                            flatten = true;
                                            break;
                                        }
                                    }
                                    if (flatten) {
                                        json._content = content = content.concat.apply([], content);
                                    }
                                } while (flatten);
                                for (i = 0, l = content.length, p = l - 1; i < l; i++) {
                                    child = content[i];
                                    if (child !== false && child != null && typeof child === 'object') {
                                        nodes.push({
                                            json: child, arr: content, index: i, blockName: block, blockView: blockView
                                        });
                                    }
                                }
                            } else {
                                nodes.push({
                                    json: content, arr: json, index: '_content', blockName: block, blockView: blockView
                                });
                            }
                        }
                    }
                }
            }
            node.arr[node.index] = json;
        }
        return resultArr[0];
    },

    /**
     * Превращает раскрытый BtJson в HTML.
     * @param {Object|Array|String} json
     * @returns {String}
     */
    toHtml: function (json) {
        var res, i, l, item;
        if (json === false || json == null) return '';
        if (typeof json !== 'object') {
            return json;
        } else if (Array.isArray(json)) {
            res = '';
            for (i = 0, l = json.length; i < l; i++) {
                item = json[i];
                if (item !== false && item != null) {
                    res += this.toHtml(item);
                }
            }
            return res;
        } else {
            var jattr,
                attrs = json._disableDataAttrGeneration || json.elem || !json.block ?
                    '' :
                    ' data-block="' + json.block + '"', initOptions;

            if (jattr = json._attrs) {
                for (i in jattr) {
                    var attrVal = jattr[i];
                    if (attrVal === true) {
                        attrs += ' ' + i;
                    } else if (attrVal != null) {
                         attrs += ' ' + i + '="' + escapeAttr(jattr[i]) + '"';
                    }
                }
            }

            if (json._initOptions) {
                (initOptions = {}).options = json._initOptions;
            }

            var mixins = json.mixins;
            if (mixins && mixins.length) {
                (initOptions || (initOptions = {})).mixins = mixins;
            }

            if (initOptions) {
                attrs += ' data-options="' + escapeAttr(JSON.stringify(initOptions)) + '"';
            }

            var content, tag = (json._tag || 'div');
            res = '<' + tag;

            if (!json._disableCssGeneration) {
                res += ' class="';
                res += (json.block) +
                    (json.view ? '_' + json.view : '') +
                    (json.elem ? '__' + json.elem : '');

                var state = json._state;
                if (state) {
                    for (i in state) {
                        var stateVal = state[i];
                        if (stateVal != null && stateVal !== '' && stateVal !== false) {
                            if (stateVal === true) {
                                res += ' _' + i;
                            } else {
                                res += ' _' + i + '_' + stateVal;
                            }
                        }
                    }
                }

                if (json.autoInit || (mixins && mixins.length > 0)) {
                    res += ' _init';
                }

                res += '"';
            }

            res += attrs;

            if (selfCloseHtmlTags[tag]) {
                res += '/>';
            } else {
                res += '>';
                if ((content = json._content) != null) {
                    if (Array.isArray(content)) {
                        for (i = 0, l = content.length; i < l; i++) {
                            item = content[i];
                            if (item !== false && item != null) {
                                res += this.toHtml(item);
                            }
                        }
                    } else {
                        res += this.toHtml(content);
                    }
                }
                res += '</' + tag + '>';
            }
            return res;
        }
    }
};

var selfCloseHtmlTags = {
    area: 1,
    base: 1,
    br: 1,
    col: 1,
    command: 1,
    embed: 1,
    hr: 1,
    img: 1,
    input: 1,
    keygen: 1,
    link: 1,
    meta: 1,
    param: 1,
    source: 1,
    wbr: 1
};

var escapeAttr = function (attrVal) {
    attrVal += '';
    if (~attrVal.indexOf('&')) {
        attrVal = attrVal.replace(/&/g, '&amp;');
    }
    if (~attrVal.indexOf('"')) {
        attrVal = attrVal.replace(/"/g, '&quot;');
    }
    return attrVal;
};

return BT;
})();

if (typeof module !== 'undefined') {
    module.exports = BT;
}

var bt = new BT();
bt.lib.i18n = i18n;


    bt.lib.global = bt.lib.global || {};
    bt.lib.global.lang = bt.lib.global.lang || 'ru';
    bt.lib.global.tld = bt.lib.global.tld || 'ru';
    bt.lib.global['content-region'] = bt.lib.global['content-region'] || 'ru';
    bt.lib.global['click-host'] = bt.lib.global['click-host'] || '//clck.yandex.ru';
    bt.lib.global['passport-host'] = bt.lib.global['passport-host'] || 'https://passport.yandex.ru';
    bt.lib.global['pass-host'] = bt.lib.global['pass-host'] || '//pass.yandex.ru';
    bt.lib.global['social-host'] = bt.lib.global['social-host'] || '//social.yandex.ru';
    bt.lib.global['export-host'] = bt.lib.global['export-host'] || '//export.yandex.ru';

    /**
     * Changes top level domain.
     *
     * @param {String} tld Top level domain.
     */
    bt.lib.global.setTld = function (tld) {
        var xYaDomain = tld === 'tr' ? 'yandex.com.tr' : 'yandex.' + tld;
        var yaDomain = ['ua', 'by', 'kz'].indexOf(tld) !== -1 ? 'yandex.ru' : xYaDomain;
        var globalObj = bt.lib.global;
        globalObj['content-region'] = tld;
        globalObj['click-host'] = '//clck.' + yaDomain;
        globalObj['passport-host'] = 'https://passport.' + yaDomain;
        globalObj['pass-host'] = '//pass.' + xYaDomain;
        globalObj['social-host'] = '//social.' + xYaDomain;
        globalObj['export-host'] = '//export.' + xYaDomain;
        globalObj.tld = tld;
    };

    /**
     * @returns {String}
     */
    bt.lib.global.getTld = function () {
        return bt.lib.global.tld;
    };

    if (bt.lib.i18n && bt.lib.i18n.getLanguage) {
        var tld = bt.lib.i18n.getLanguage();
        if (tld === 'uk') {
            tld = 'ua';
        }
        bt.lib.global.setTld(tld);
    }




    bt.match('y-ua', function (ctx) {
        ctx.setTag('script');
        ctx.disableCssClassGeneration();
        ctx.disableDataAttrGeneration();
        ctx.setContent([
            ';(function (d,e,c,r){' +
                'e=d.documentElement;' +
                'c="className";' +
                'r="replace";' +
                'e[c]=e[c][r]("y-ua_js_no","y-ua_js_yes");' +
                'if(d.compatMode!="CSS1Compat")' +
                'e[c]=e[c][r]("y-ua_css_standart","y-ua_css_quirks")' +
            '})(document);' +
            ';(function (d,e,c,r,n,w,v,f){' +
                'e=d.documentElement;' +
                'c="className";' +
                'r="replace";' +
                'n="createElementNS";' +
                'f="firstChild";' +
                'w="http://www.w3.org/2000/svg";' +
                'e[c]+=!!d[n]&&!!d[n](w,"svg").createSVGRect?" y-ua_svg_yes":" y-ua_svg_no";' +
                'v=d.createElement("div");' +
                'v.innerHTML="<svg/>";' +
                'e[c]+=(v[f]&&v[f].namespaceURI)==w?" y-ua_inlinesvg_yes":" y-ua_inlinesvg_no";' +
            '})(document);'
        ]);
    });



    bt.match('config', function (ctx) {
        ctx.setTag('script');
        ctx.setAttr('id', 'config');
        ctx.setAttr('type', 'text/json');
        ctx.setContent(JSON.stringify(ctx.getParam('config')));
    });



    /**
     * @param {Boolean} showBoard Отображать ли таблицу сервисов?
     * @param {String} userPic Аватар пользователя
     * @param {String} userLogin Никнейм пользователя
     * @param {Boolean} showUser Отображать ли аватар пользователя?
     * @param {Boolean} [showSuggest=false] Отображать ли саджест?
     * @param {String} searchAction Путь к обработчику формы поиска
     * @param {String} searchQuery Текст запроса
     * @param {String} searchPlaceholder Задает `html`-атрибут `placeholder` для поискового поля.
     *                             Выводит текст внутри поля, который исчезает при заполнении поля
     * @param {String} serviceName Имя сервиса.
     *                             В непоисковой шапке отображается на фоне жёлтой стрелки.
     *                             В поисковой шапке отображается внутри поискового поля
     * @param {String} serviceUrl Путь для перехода на главную страницу сервиса
     */

    bt.setDefaultView('y-header', 'islet');

    bt.match('y-header_islet*', function (ctx) {
        ctx.setTag('header');

        ctx.setContent([
            {
                elem: 'wrapper',
                showBoard: ctx.getParam('showBoard'),
                showTabs: ctx.getParam('showTabs'),
                searchAction: ctx.getParam('searchAction'),
                searchQuery: ctx.getParam('searchQuery'),
                searchPlaceholder: ctx.getParam('searchPlaceholder'),
                serviceName: ctx.getParam('serviceName'),
                serviceUrl: ctx.getParam('serviceUrl'),
                showSuggest: ctx.getParam('showSuggest'),
                suggestOptions: ctx.getParam('suggestOptions'),
                logoAlt: ctx.getParam('logoAlt'),
                logoSrc: ctx.getParam('logoSrc'),
                showUser: ctx.getParam('showUser'),
                userPic: ctx.getParam('userPic'),
                userLogin: ctx.getParam('userLogin')
            },
            ctx.getParam('showBoard') ? {elem: 'board'} : null
        ]);

        ctx.enableAutoInit();
    });

    bt.match('y-header_islet*__wrapper', function (ctx) {
        var showBoard = ctx.getParam('showBoard');
        var showTabs = ctx.getParam('showTabs');

        ctx.setContent([
            {
                elem: 'logo',
                logoAlt: ctx.getParam('logoAlt'),
                logoSrc: ctx.getParam('logoSrc')
            },
            {
                elem: 'info',
                content: [
                    showBoard ? {elem: 'board-call'} : null,
                    getUser(ctx)
                ]
            },
            {
                elem: 'arrow',
                searchAction: ctx.getParam('searchAction'),
                searchQuery: ctx.getParam('searchQuery'),
                searchPlaceholder: ctx.getParam('searchPlaceholder'),
                serviceName: ctx.getParam('serviceName'),
                serviceUrl: ctx.getParam('serviceUrl'),
                showSuggest: ctx.getParam('showSuggest'),
                suggestOptions: ctx.getParam('suggestOptions')
            },
            showTabs ? {elem: 'tabs'} : null
        ]);
    });

    bt.match('y-header_islet__arrow', function (ctx) {
        ctx.setContent({
            elem: 'service-name',
            serviceUrl: ctx.getParam('serviceUrl'),
            content: ctx.getParam('serviceName')
        });
    });

    bt.match('y-header_islet-search__arrow', function (ctx) {
        ctx.setContent({
            elem: 'form',
            searchAction: ctx.getParam('searchAction'),
            searchQuery: ctx.getParam('searchQuery'),
            searchPlaceholder: ctx.getParam('searchPlaceholder'),
            suggestOptions: ctx.getParam('suggestOptions'),
            showSuggest: ctx.getParam('showSuggest')
        });
    });

    bt.match('y-header_islet*__logo', function (ctx) {
        ctx.setTag('a');
        ctx.setState('lang', bt.lib.i18n.getLanguage());

        ctx.setAttr('href', bt.lib.services.getServiceUrl('www'));
        ctx.setContent({
            elem: 'logo-img',
            logoAlt: ctx.getParam('logoAlt'),
            logoSrc: ctx.getParam('logoSrc')
        });
    });

    bt.match('y-header_islet*__logo-img', function (ctx) {
        ctx.setTag('img');
        ctx.setAttr('alt', ctx.getParam('logoAlt') || bt.lib.i18n('y-header', 'yandex'));
        ctx.setAttr('src', ctx.getParam('logoSrc') || bt.lib.i18n('y-header', 'logo-src'));
    });

    bt.match('y-header_islet*__service-name', function (ctx) {
        if (ctx.getParam('serviceUrl')) {
            ctx.setTag('a');
            ctx.setAttr('href', ctx.getParam('serviceUrl'));
        } else {
            ctx.setTag('h1');
        }

        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('y-header_islet*__user', function (ctx) {
        var userPic = ctx.getParam('userPic');
        var userLogin = ctx.getParam('userLogin');

        ctx.setTag('a');
        ctx.setAttr('href', 'http://i.yandex.ru');

        ctx.setContent([
            userPic ? {
                elem: 'userpic',
                userPic: userPic
            } : null,
            userLogin ? {
                elem: 'username',
                userLogin: userLogin
            } : null
        ]);
    });

    bt.match('y-header_islet*__userpic', function (ctx) {
        var userPic = ctx.getParam('userPic');

        ctx.setTag('img');
        ctx.setAttr('src', userPic);
    });

    bt.match('y-header_islet*__username', function (ctx) {
        var userLogin = ctx.getParam('userLogin');

        ctx.setTag('span');
        ctx.setContent(userLogin);
    });

    bt.match('y-header_islet*__board-call', function (ctx) {
        ctx.setTag('span');
        ctx.setContent({
            block: 'y-button',
            view: 'islet-board',
            url: bt.lib.services.getServiceUrl('all'),
            icon: {
                block: 'y-header',
                view: 'islet',
                elem: 'board-call-icon'
            }
        });
    });

    bt.match('y-header_islet*__board-icon', function (ctx) {
        ctx.setTag('span');
    });

    bt.match('y-header_islet-search__form', function (ctx) {
        var searchQuery = ctx.getParam('searchQuery');
        var searchPlaceholder = ctx.getParam('searchPlaceholder');
        var searchAction = ctx.getParam('searchAction');
        var showSuggest = ctx.getParam('showSuggest');
        var suggestOptions = ctx.getParam('suggestOptions');

        ctx.setTag('form');
        ctx.setAttr('action', searchAction);

        var input = {
            block: 'y-input',
            name: 'text',

            value: searchQuery,
            placeholder: searchPlaceholder,
            showClear: true
        };

        if (showSuggest) {
            var suggest = suggestOptions || {};
            suggest.block = 'y-suggest';
            suggest.input = input;
            suggest.suggestDropOptions = suggest.suggestDropOptions || {
                view: 'islet-header'
            };
            suggest.suggestDropOptions.suggestDropItemView =
                suggest.suggestDropOptions.suggestDropItemView || 'islet-header';
            input = suggest;
        }

        ctx.setContent([
            {
                elem: 'button',
                content: {
                    block: 'y-button',
                    type: 'submit',
                    tabindex: 2,
                    text: bt.lib.i18n('y-header', 'search')
                }
            },
            {
                elem: 'input',
                content: input
            }
        ]);
    });

    bt.match(
        [
            'y-header_islet*__info',
            'y-header_islet-search__button',
            'y-header_islet-search__input'
        ],
        function (ctx) {
            ctx.setContent(ctx.getParam('content'));
        }
    );

    function getUser(ctx) {
        var showUser = ctx.getParam('showUser');
        var userPic = ctx.getParam('userPic');
        var userLogin = ctx.getParam('userLogin');

        if (!showUser) {
            return null;
        } else if (!userLogin && !userPic){
            return {
                elem: 'login-btn'
            };
        } else {
            return {
                elem: 'user',
                userPic: userPic,
                userLogin: userLogin
            };
        }
    }




    /**
     * @param {String} url Если указан, то кнопка становится ссылкой, а значение `url` становится атрибутом `href`.
     * @param {String} type Тип кнопки. `button` — просто кнопка, `submit` — отправка формы, `reset` — сброс формы.
     * @param {Boolean} showTick Показать справа от текста стрелку,
     *      направленную вниз (может быть использовано для селектов).
     * @param {Number} tabindex Задает `html`-атрибут `tabindex`.
     * @param {String} target Задает `html`-атрибут `target`. Применимо в случае, когда указана опция `url`.
     * @param {Boolean} disabled Переводит кнопку в неактивное состояние.
     *      Устанавливает атрибут `disabled` в значение `disabled`.
     * @param {Btjson} icon Блок или элемент любого блока, формирующий иконку.
     * @param {String} text Текст кнопки.
     */

    bt.setDefaultView('y-button', 'islet');

    bt.match('y-button_islet*', function (ctx) {
        var disabled = ctx.getParam('disabled');
        if (disabled) {
            ctx.setState('disabled');
        }

        var url = ctx.getParam('url');
        if (url) {
            ctx.setTag('a');
        } else {
            ctx.setTag('button');
        }

        ctx.enableAutoInit();

        var tabIndex = ctx.getParam('tabindex');
        if (tabIndex) {
            ctx.setAttr('tabindex', tabIndex);
        }

        if (!url) {
            if (disabled) {
                ctx.setAttr('disabled', true);
            }
            ctx.setAttr('type', ctx.getParam('type') || 'button');
        }

        if (url) {
            ctx.setAttr('role', 'button');
            if (disabled) {
                ctx.setAttr('aria-disabled', true);
            }
            var target = ctx.getParam('target');
            if (target) {
                ctx.setAttr('target', target);
            }
            ctx.setAttr('href', url);
        }

        var icon = ctx.getParam('icon');
        var text = ctx.getParam('text');
        var tick = ctx.getParam('showTick');

        ctx.setContent([
            icon ? {elem: 'icon', name: icon} : null,
            text ? {elem: 'text', content: text} : null,
            tick ? {elem: 'tick'} : null
        ]);
    });

    bt.match('y-button_islet*__icon', function (ctx) {
        ctx.setTag('span');
        ctx.setContent(ctx.getParam('name'));
    });

    bt.match('y-button_islet*__text', function (ctx) {
        ctx.setTag('span');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('y-button_islet*__tick', function (ctx) {
        ctx.setTag('span');
    });


    /**
     * Иконка.
     *
     * @typedef {Object} Icon
     * @param {String} name
     * @param {BtJson} icon
     */

    /**
     * @param {String} [id] Идентификатор DOM-элемента. Если не передан, будет сгенерирован атоматически.
     * @param {String} [name] Имя элемента формы.
     * @param {String} [value] Значение поля.
     * @param {String} [type] Тип поля ввода. Например, `password`.
     * @param {Number} [tabindex] Задает `html`-атрибут `tabindex`.
     * @param {String} [autocomplete] Задает `html`-атрибут `autocomplete`. Включает автозаполнение текста.
     * @param {Number} [maxlength] Задает `html`-атрибут `maxlength`. Устанавливает максимальное число символов,
     *      которое может быть введено.
     * @param {String} [placeholder] Задает `html`-атрибут `placeholder`. Выводит текст внутри поля, который исчезает
     *      при заполнении поля.
     * @param {Boolean} [disabled=false] Переводит текстовое поле в неактивное состояние. Устанавливает атрибут
     *      `disabled` в значение `disabled`.
     * @param {Boolean} [showClear=false] Отображать крестик для очистки поля ввода.
     * @param {Icon[]} [leftIcons] Иконки.
     */

    /**
     * TODO: Подумать про опцию size и width (?)
     */

    bt.setDefaultView('y-input', 'islet');

    bt.match('y-input_islet*', function (ctx) {

        ctx.setTag('span');
        ctx.enableAutoInit();

        if (ctx.getParam('disabled')) {
            ctx.setState('disabled');
        }

        var iconsLeft = [];
        var iconsData = ctx.getParam('leftIcons');
        if (iconsData) {
            iconsData.forEach(function (iconData) {
                var iconElem = {
                    elem: 'icon',
                    icon: iconData.icon,
                    name: iconData.name
                };
                iconsLeft.push(iconElem);
            });
        }

        ctx.setContent([
            iconsLeft.length > 0 && {
                elem: 'icons-left',
                content: iconsLeft
            },
            ctx.getParam('showClear') && {
                elem: 'clear'
            },
            {
                elem: 'context',
                content: {
                    elem: 'control',
                    type: ctx.getParam('type'),
                    id: ctx.getParam('id'),
                    name: ctx.getParam('name'),
                    value: ctx.getParam('value'),
                    tabindex: ctx.getParam('tabindex'),
                    disabled: ctx.getParam('disabled'),
                    autocomplete: ctx.getParam('autocomplete'),
                    maxlength: ctx.getParam('maxlength'),
                    placeholder: ctx.getParam('placeholder')
                }
            }
        ]);
    });

    bt.match('y-input_islet*__context', function (ctx) {
        ctx.setTag('span');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('y-input_islet*__icons-left', function (ctx) {
        ctx.setTag('span');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('y-input_islet*__icon', function (ctx) {
        ctx.setTag('span');
        ctx.setContent(ctx.getParam('icon'));
        ctx.setAttr('data-name', ctx.getParam('name'));
    });

    bt.match('y-input_islet*__control', function (ctx) {
        ctx.setTag('input');
        ctx.setAttr('id', ctx.getParam('id') || ctx.generateId());
        ctx.setAttr('type', ctx.getParam('type'));
        ctx.setAttr('name', ctx.getParam('name'));
        ctx.setAttr('value', ctx.getParam('value'));
        ctx.setAttr('tabindex', ctx.getParam('tabindex'));
        ctx.setAttr('disabled', ctx.getParam('disabled'));
        ctx.setAttr('autocomplete', ctx.getParam('autocomplete'));
        ctx.setAttr('maxlength', ctx.getParam('maxlength'));
        ctx.setAttr('placeholder', ctx.getParam('placeholder'));
    });


    var services = {
        'all-services': function (reg) {
            if (reg === 'ru') return "http://yandex.ru/all";
            if (reg === 'tr') return "http://www.yandex.com.tr/all";
            return "http://yandex.ru/all";
        },
        'mail': function (reg) {
            if (reg === 'ru') return "http://mail.yandex.ru";
            if (reg === 'ua') return "http://mail.yandex.ua";
            if (reg === 'by') return "http://mail.yandex.by";
            if (reg === 'kz') return "http://mail.yandex.kz";
            if (reg === 'com') return "http://mail.yandex.com";
            if (reg === 'tr') return "http://mail.yandex.com.tr";
            return "http://mail.yandex.ru";
        },
        'pdd': function (reg) {
            if (reg === 'ru') return "http://pdd.yandex.ru";
            return "http://pdd.yandex.ru";
        },
        'zakladki': function (reg) {
            if (reg === 'ru') return "http://zakladki.yandex.ru";
            return "http://zakladki.yandex.ru";
        },
        'fotki': function (reg) {
            if (reg === 'ru') return "http://fotki.yandex.ru";
            return "http://fotki.yandex.ru";
        },
        'moikrug': function (reg) {
            if (reg === 'ru') return "http://moikrug.ru";
            return "http://moikrug.ru";
        },
        'direct': function (reg) {
            if (reg === 'ru') return "http://direct.yandex.ru";
            if (reg === 'ua') return "http://direct.yandex.ua";
            if (reg === 'by') return "http://direct.yandex.by";
            if (reg === 'kz') return "http://direct.yandex.kz";
            if (reg === 'com') return "http://direct.yandex.com";
            return "http://direct.yandex.ru";
        },
        'money': function (reg) {
            if (reg === 'ru') return "https://money.yandex.ru";
            return "https://money.yandex.ru";
        },
        'lenta': function (reg) {
            if (reg === 'ru') return "http://lenta.yandex.ru";
            return "http://lenta.yandex.ru";
        },
        'market': function (reg) {
            if (reg === 'ru') return "http://market.yandex.ru";
            if (reg === 'ua') return "http://market.yandex.ua";
            if (reg === 'by') return "http://market.yandex.by";
            if (reg === 'kz') return "http://market.yandex.kz";
            return "http://market.yandex.ru";
        },
        'market.advertising': function (reg) {
            if (reg === 'ru') return "http://welcome.advertising.yandex.ru/market/";
            return "http://welcome.advertising.yandex.ru/market/";
        },
        'wow': function (reg) {
            if (reg === 'ru') return "http://my.ya.ru";
            return "http://my.ya.ru";
        },
        'tv': function (reg) {
            if (reg === 'ru') return "http://tv.yandex.ru";
            if (reg === 'ua') return "http://tv.yandex.ua";
            if (reg === 'by') return "http://tv.yandex.by";
            if (reg === 'kz') return "http://tv.yandex.kz";
            return "http://tv.yandex.ru";
        },
        'afisha': function (reg) {
            if (reg === 'ru') return "http://afisha.yandex.ru";
            if (reg === 'ua') return "http://afisha.yandex.ua";
            if (reg === 'by') return "http://afisha.yandex.by";
            if (reg === 'kz') return "http://afisha.yandex.kz";
            if (reg === 'tr') return "http://afis.yandex.com.tr";
            return "http://afisha.yandex.ru";
        },
        'calendar': function (reg) {
            if (reg === 'ru') return "http://calendar.yandex.ru";
            return "http://calendar.yandex.ru";
        },
        'nahodki': function (reg) {
            if (reg === 'ru') return "http://nahodki.yandex.ru";
            if (reg === 'ua') return "http://nahodki.yandex.ua";
            if (reg === 'kz') return "http://nahodki.yandex.kz";
            return "http://nahodki.yandex.ru";
        },
        'weather': function (reg) {
            if (reg === 'ru') return "http://pogoda.yandex.ru";
            if (reg === 'ua') return "http://pogoda.yandex.ua";
            if (reg === 'by') return "http://pogoda.yandex.by";
            if (reg === 'kz') return "http://pogoda.yandex.kz";
            if (reg === 'tr') return "http://hava.yandex.com.tr";
            return "http://pogoda.yandex.ru";
        },
        'kuda': function (reg) {
            if (reg === 'ru') return "http://kuda.yandex.ru";
            return "http://kuda.yandex.ru";
        },
        'video': function (reg) {
            if (reg === 'ru') return "http://video.yandex.ru";
            if (reg === 'ua') return "http://video.yandex.ua";
            if (reg === 'by') return "http://video.yandex.by";
            if (reg === 'kz') return "http://video.yandex.kz";
            if (reg === 'com') return "http://video.yandex.com";
            if (reg === 'tr') return "http://video.yandex.com.tr";
            return "http://video.yandex.ru";
        },
        'video-com': function (reg) {
            if (reg === 'ru') return "http://video.yandex.com";
            return "http://video.yandex.com";
        },
        'music': function (reg) {
            if (reg === 'ru') return "http://music.yandex.ru";
            if (reg === 'ua') return "http://music.yandex.ua";
            if (reg === 'by') return "http://music.yandex.by";
            if (reg === 'kz') return "http://music.yandex.kz";
            return "http://music.yandex.ru";
        },
        'music-partner': function (reg) {
            if (reg === 'ru') return "http://music-partner.yandex.ru";
            return "http://music-partner.yandex.ru";
        },
        'www': function (reg) {
            if (reg === 'ru') return "http://www.yandex.ru";
            if (reg === 'ua') return "http://www.yandex.ua";
            if (reg === 'com') return "http://www.yandex.com";
            if (reg === 'by') return "http://www.yandex.by";
            if (reg === 'kz') return "http://www.yandex.kz";
            if (reg === 'tr') return "http://www.yandex.com.tr";
            return "http://www.yandex.ru";
        },
        'search': function (reg) {
            if (reg === 'ru') return "http://yandex.ru";
            if (reg === 'ua') return "http://yandex.ua";
            if (reg === 'com') return "http://yandex.com";
            if (reg === 'by') return "http://yandex.by";
            if (reg === 'kz') return "http://yandex.kz";
            if (reg === 'tr') return "http://yandex.com.tr";
            return "http://yandex.ru";
        },
        'news': function (reg) {
            if (reg === 'ru') return "http://news.yandex.ru";
            if (reg === 'ua') return "http://news.yandex.ua";
            if (reg === 'by') return "http://news.yandex.by";
            if (reg === 'kz') return "http://news.yandex.kz";
            if (reg === 'tr') return "http://haber.yandex.com.tr";
            return "http://news.yandex.ru";
        },
        'news-com': function (reg) {
            if (reg === 'ru') return "http://news.yandex.com";
            return "http://news.yandex.com";
        },
        'maps': function (reg) {
            if (reg === 'ru') return "http://maps.yandex.ru";
            if (reg === 'ua') return "http://maps.yandex.ua";
            if (reg === 'tr') return "http://harita.yandex.com.tr";
            return "http://maps.yandex.ru";
        },
        'maps-com': function (reg) {
            if (reg === 'ru') return "http://maps.yandex.com";
            return "http://maps.yandex.com";
        },
        'probki': function (reg) {
            if (reg === 'ru') return "http://probki.yandex.ru";
            return "http://probki.yandex.ru";
        },
        'slovari': function (reg) {
            if (reg === 'ru') return "http://slovari.yandex.ru";
            if (reg === 'ua') return "http://slovari.yandex.ua";
            if (reg === 'by') return "http://slovari.yandex.by";
            if (reg === 'kz') return "http://slovari.yandex.kz";
            return "http://slovari.yandex.ru";
        },
        'images': function (reg) {
            if (reg === 'ru') return "http://images.yandex.ru";
            if (reg === 'ua') return "http://images.yandex.ua";
            if (reg === 'by') return "http://images.yandex.by";
            if (reg === 'kz') return "http://images.yandex.kz";
            if (reg === 'com') return "http://images.yandex.com";
            if (reg === 'tr') return "http://gorsel.yandex.com.tr";
            return "http://images.yandex.ru";
        },
        'images-com': function (reg) {
            if (reg === 'ru') return "http://images.yandex.com";
            return "http://images.yandex.com";
        },
        'blogs': function (reg) {
            if (reg === 'ru') return "http://blogs.yandex.ru";
            if (reg === 'ua') return "http://blogs.yandex.ua";
            if (reg === 'by') return "http://blogs.yandex.by";
            if (reg === 'kz') return "http://blogs.yandex.kz";
            return "http://blogs.yandex.ru";
        },
        'auto': function (reg) {
            if (reg === 'ru') return "http://auto.yandex.ru";
            return "http://auto.yandex.ru";
        },
        'adresa': function (reg) {
            if (reg === 'ru') return "http://adresa.yandex.ru";
            return "http://adresa.yandex.ru";
        },
        'games': function (reg) {
            if (reg === 'ru') return "http://games.yandex.ru";
            return "http://games.yandex.ru";
        },
        'yaca': function (reg) {
            if (reg === 'ru') return "http://yaca.yandex.ru";
            if (reg === 'ua') return "http://yaca.yandex.ua";
            if (reg === 'by') return "http://yaca.yandex.by";
            return "http://yaca.yandex.ru";
        },
        'rasp': function (reg) {
            if (reg === 'ru') return "http://rasp.yandex.ru";
            if (reg === 'ua') return "http://rasp.yandex.ua";
            if (reg === 'by') return "http://rasp.yandex.by";
            if (reg === 'kz') return "http://rasp.yandex.kz";
            return "http://rasp.yandex.ru";
        },
        'pvo': function (reg) {
            if (reg === 'ru') return "http://ask.yandex.ru";
            return "http://ask.yandex.ru";
        },
        'online': function (reg) {
            if (reg === 'ru') return "http://online.yandex.ru";
            return "http://online.yandex.ru";
        },
        'books': function (reg) {
            if (reg === 'ru') return "http://books.yandex.ru";
            return "http://books.yandex.ru";
        },
        'site': function (reg) {
            if (reg === 'ru') return "http://site.yandex.ru";
            if (reg === 'ua') return "http://site.yandex.ua";
            if (reg === 'tr') return "http://ozel.yandex.com.tr";
            return "http://site.yandex.ru";
        },
        'bar': function (reg) {
            if (reg === 'ru') return "http://bar.yandex.ru";
            if (reg === 'ua') return "http://bar.yandex.ua";
            if (reg === 'by') return "http://bar.yandex.by";
            if (reg === 'kz') return "http://bar.yandex.kz";
            if (reg === 'tr') return "http://bar.yandex.com.tr";
            return "http://bar.yandex.ru";
        },
        'widgets': function (reg) {
            if (reg === 'ru') return "http://widgets.yandex.ru";
            if (reg === 'ua') return "http://widgets.yandex.ua";
            if (reg === 'by') return "http://widgets.yandex.by";
            if (reg === 'kz') return "http://widgets.yandex.kz";
            if (reg === 'tr') return "http://widgets.yandex.com.tr";
            return "http://widgets.yandex.ru";
        },
        'wdgt': function (reg) {
            if (reg === 'ru') return "http://wdgt.yandex.ru";
            if (reg === 'ua') return "http://wdgt.yandex.ua";
            if (reg === 'by') return "http://wdgt.yandex.by";
            if (reg === 'kz') return "http://wdgt.yandex.kz";
            if (reg === 'tr') return "http://wdgt.yandex.com.tr";
            return "http://wdgt.yandex.ru";
        },
        'interests': function (reg) {
            if (reg === 'ru') return "http://interests.yandex.ru";
            return "http://interests.yandex.ru";
        },
        'kraski': function (reg) {
            if (reg === 'ru') return "http://kraski.yandex.ru";
            return "http://kraski.yandex.ru";
        },
        'local': function (reg) {
            if (reg === 'ru') return "http://local.yandex.ru";
            return "http://local.yandex.ru";
        },
        'museums': function (reg) {
            if (reg === 'ru') return "http://18.yandex.ru";
            return "http://18.yandex.ru";
        },
        'collection': function (reg) {
            if (reg === 'ru') return "http://collection.yandex.ru";
            return "http://collection.yandex.ru";
        },
        'company': function (reg) {
            if (reg === 'ru') return "http://company.yandex.ru";
            if (reg === 'com') return "http://company.yandex.com";
            if (reg === 'tr') return "http://company.yandex.com.tr";
            return "http://company.yandex.ru";
        },
        'tests': function (reg) {
            if (reg === 'ru') return "http://tests.yandex.ru";
            return "http://tests.yandex.ru";
        },
        'referats': function (reg) {
            if (reg === 'ru') return "http://referats.yandex.ru";
            return "http://referats.yandex.ru";
        },
        'terms': function (reg) {
            if (reg === 'ru') return "http://terms.yandex.ru";
            return "http://terms.yandex.ru";
        },
        'tune': function (reg) {
            if (reg === 'ru') return "http://tune.yandex.ru";
            if (reg === 'ua') return "http://tune.yandex.ua";
            if (reg === 'com') return "http://tune.yandex.com";
            if (reg === 'by') return "http://tune.yandex.by";
            if (reg === 'kz') return "http://tune.yandex.kz";
            if (reg === 'tr') return "http://tune.yandex.com.tr";
            return "http://tune.yandex.ru";
        },
        'api': function (reg) {
            if (reg === 'ru') return "http://api.yandex.ru";
            if (reg === 'com') return "http://api.yandex.com";
            return "http://api.yandex.ru";
        },
        'punto': function (reg) {
            if (reg === 'ru') return "http://punto.yandex.ru";
            return "http://punto.yandex.ru";
        },
        'opinion': function (reg) {
            if (reg === 'ru') return "http://opinion.yandex.ru";
            return "http://opinion.yandex.ru";
        },
        'perevod': function (reg) {
            if (reg === 'ru') return "http://perevod.yandex.ru";
            return "http://perevod.yandex.ru";
        },
        'rabota': function (reg) {
            if (reg === 'ru') return "http://rabota.yandex.ru";
            if (reg === 'ua') return "http://rabota.yandex.ua";
            if (reg === 'by') return "http://rabota.yandex.by";
            if (reg === 'kz') return "http://rabota.yandex.kz";
            return "http://rabota.yandex.ru";
        },
        'sprav': function (reg) {
            if (reg === 'ru') return "http://sprav.yandex.ru";
            if (reg === 'ua') return "http://sprav.yandex.ua";
            if (reg === 'by') return "http://sprav.yandex.by";
            if (reg === 'kz') return "http://sprav.yandex.kz";
            if (reg === 'tr') return "http://rehber.yandex.com.tr";
            return "http://sprav.yandex.ru";
        },
        'realty': function (reg) {
            if (reg === 'ru') return "http://realty.yandex.ru";
            if (reg === 'ua') return "http://realty.yandex.ua";
            if (reg === 'by') return "http://realty.yandex.by";
            if (reg === 'kz') return "http://realty.yandex.kz";
            return "http://realty.yandex.ru";
        },
        'advertising': function (reg) {
            if (reg === 'ru') return "http://advertising.yandex.ru";
            if (reg === 'ua') return "http://advertising.yandex.ua";
            if (reg === 'com') return "http://advertising.yandex.com";
            if (reg === 'by') return "http://advertising.yandex.by";
            if (reg === 'kz') return "http://advertising.yandex.kz";
            return "http://advertising.yandex.ru";
        },
        'expert': function (reg) {
            if (reg === 'ru') return "http://expert.yandex.ru";
            return "http://expert.yandex.ru";
        },
        'direct.market': function (reg) {
            if (reg === 'ru') return "http://partner.market.yandex.ru/yandex.market/";
            return "http://partner.market.yandex.ru/yandex.market/";
        },
        'ba': function (reg) {
            if (reg === 'ru') return "http://ba.yandex.ru";
            if (reg === 'ua') return "http://ba.yandex.ua";
            if (reg === 'com') return "http://ba.yandex.com";
            if (reg === 'by') return "http://ba.yandex.by";
            if (reg === 'kz') return "http://ba.yandex.kz";
            return "http://ba.yandex.ru";
        },
        'bayan': function (reg) {
            if (reg === 'ru') return "http://bayan.yandex.ru";
            return "http://bayan.yandex.ru";
        },
        'partners': function (reg) {
            if (reg === 'ru') return "http://partner.yandex.ru";
            if (reg === 'ua') return "http://partner.yandex.ua";
            if (reg === 'com') return "http://partner.yandex.com";
            if (reg === 'by') return "http://partner.yandex.by";
            if (reg === 'kz') return "http://partner.yandex.kz";
            return "http://partner.yandex.ru";
        },
        'metrika': function (reg) {
            if (reg === 'ru') return "http://metrika.yandex.ru";
            if (reg === 'ua') return "http://metrika.yandex.ua";
            if (reg === 'com') return "http://metrica.yandex.com";
            if (reg === 'by') return "http://metrika.yandex.by";
            if (reg === 'kz') return "http://metrika.yandex.kz";
            if (reg === 'tr') return "http://metrica.yandex.com.tr";
            return "http://metrika.yandex.ru";
        },
        'balance': function (reg) {
            if (reg === 'ru') return "http://balance.yandex.ru";
            return "http://balance.yandex.ru";
        },
        'wordstat': function (reg) {
            if (reg === 'ru') return "http://wordstat.yandex.ru";
            return "http://wordstat.yandex.ru";
        },
        'webmaster': function (reg) {
            if (reg === 'ru') return "http://webmaster.yandex.ru";
            if (reg === 'ua') return "http://webmaster.yandex.ua";
            if (reg === 'com') return "http://webmaster.yandex.com";
            if (reg === 'tr') return "http://webmaster.yandex.com.tr";
            return "http://webmaster.yandex.ru";
        },
        'server': function (reg) {
            if (reg === 'ru') return "http://company.yandex.ru/technology/server/";
            return "http://company.yandex.ru/technology/server/";
        },
        'stat': function (reg) {
            if (reg === 'ru') return "http://stat.yandex.ru";
            if (reg === 'ua') return "http://stat.yandex.ua";
            if (reg === 'by') return "http://stat.yandex.by";
            return "http://stat.yandex.ru";
        },
        'mobile': function (reg) {
            if (reg === 'ru') return "http://mobile.yandex.ru";
            if (reg === 'ua') return "http://mobile.yandex.ua";
            if (reg === 'tr') return "http://mobil.yandex.com.tr";
            return "http://mobile.yandex.ru";
        },
        'help': function (reg) {
            if (reg === 'ru') return "http://help.yandex.ru";
            if (reg === 'ua') return "http://help.yandex.ua";
            if (reg === 'com') return "http://help.yandex.com";
            if (reg === 'tr') return "http://yardim.yandex.com.tr";
            return "http://help.yandex.ru";
        },
        'feedback': function (reg) {
            if (reg === 'ru') return "http://feedback.yandex.ru";
            if (reg === 'ua') return "http://feedback.yandex.ua";
            if (reg === 'com') return "http://feedback.yandex.com";
            if (reg === 'by') return "http://feedback.yandex.by";
            if (reg === 'kz') return "http://feedback.yandex.kz";
            if (reg === 'tr') return "http://contact.yandex.com.tr";
            return "http://feedback.yandex.ru";
        },
        'start': function (reg) {
            if (reg === 'ru') return "http://help.yandex.ru/start/";
            if (reg === 'ua') return "http://help.yandex.ua/start/";
            if (reg === 'com') return "http://help.yandex.com/start/";
            if (reg === 'tr') return "http://yardim.yandex.com.tr/start";
            return "http://help.yandex.ru/start/";
        },
        'cityday': function (reg) {
            if (reg === 'ru') return "http://cityday.yandex.ru";
            return "http://cityday.yandex.ru";
        },
        'openid': function (reg) {
            if (reg === 'ru') return "http://openid.yandex.ru";
            return "http://openid.yandex.ru";
        },
        'oauth': function (reg) {
            if (reg === 'ru') return "http://oauth.yandex.ru";
            if (reg === 'com') return "http://oauth.yandex.com";
            return "http://oauth.yandex.ru";
        },
        'nano': function (reg) {
            if (reg === 'ru') return "http://nano.yandex.ru";
            return "http://nano.yandex.ru";
        },
        'partnersearch': function (reg) {
            if (reg === 'ru') return "http://yandex.ru";
            return "http://yandex.ru";
        },
        'city': function (reg) {
            if (reg === 'ru') return "http://city.yandex.ru";
            return "http://city.yandex.ru";
        },
        'goroda': function (reg) {
            if (reg === 'ru') return "http://goroda.yandex.ru";
            return "http://goroda.yandex.ru";
        },
        'toster': function (reg) {
            if (reg === 'ru') return "http://toster.yandex.ru";
            return "http://toster.yandex.ru";
        },
        'love': function (reg) {
            if (reg === 'ru') return "http://love.yandex.ru";
            return "http://love.yandex.ru";
        },
        'rk': function (reg) {
            if (reg === 'ru') return "http://rk.yandex.ru";
            return "http://rk.yandex.ru";
        },
        'lost': function (reg) {
            if (reg === 'ru') return "http://lost.yandex.ru";
            return "http://lost.yandex.ru";
        },
        'soft': function (reg) {
            if (reg === 'ru') return "http://soft.yandex.ru";
            if (reg === 'tr') return "http://soft.yandex.com.tr";
            return "http://soft.yandex.ru";
        },
        'passport': function (reg) {
            if (reg === 'ru') return "https://passport.yandex.ru";
            if (reg === 'com') return "http://passport.yandex.com";
            if (reg === 'tr') return "http://passport.yandex.com.tr";
            return "https://passport.yandex.ru";
        },
        'wiki': function (reg) {
            if (reg === 'ru') return "http://wiki.yandex-team.ru";
            return "http://wiki.yandex-team.ru";
        },
        'staff': function (reg) {
            if (reg === 'ru') return "http://staff.yandex.ru";
            return "http://staff.yandex.ru";
        },
        'jira': function (reg) {
            if (reg === 'ru') return "https://jira.yandex-team.ru";
            return "https://jira.yandex-team.ru";
        },
        'maillists': function (reg) {
            if (reg === 'ru') return "http://ml.yandex-team.ru";
            return "http://ml.yandex-team.ru";
        },
        'statface': function (reg) {
            if (reg === 'ru') return "https://stat.yandex-team.ru";
            return "https://stat.yandex-team.ru";
        },
        'doc': function (reg) {
            if (reg === 'ru') return "http://doc.yandex-team.ru";
            return "http://doc.yandex-team.ru";
        },
        'job': function (reg) {
            if (reg === 'ru') return "https://job.yandex-team.ru";
            return "https://job.yandex-team.ru";
        },
        'otrs': function (reg) {
            if (reg === 'ru') return "http://otrs.yandex-team.ru";
            return "http://otrs.yandex-team.ru";
        },
        'lego': function (reg) {
            if (reg === 'ru') return "http://lego.yandex-team.ru";
            return "http://lego.yandex-team.ru";
        },
        'planner': function (reg) {
            if (reg === 'ru') return "http://calendar.yandex-team.ru/invite/";
            return "http://calendar.yandex-team.ru/invite/";
        },
        'jabber': function (reg) {
            if (reg === 'ru') return "https://jabber.yandex-team.ru";
            return "https://jabber.yandex-team.ru";
        },
        'bond': function (reg) {
            if (reg === 'ru') return "http://brak.yandex-team.ru";
            return "http://brak.yandex-team.ru";
        },
        'diary': function (reg) {
            if (reg === 'ru') return "http://my.at.yandex-team.ru";
            return "http://my.at.yandex-team.ru";
        },
        'jing': function (reg) {
            if (reg === 'ru') return "http://jing.yandex-team.ru";
            return "http://jing.yandex-team.ru";
        },
        'lunapark': function (reg) {
            if (reg === 'ru') return "http://lunapark.yandex-team.ru";
            return "http://lunapark.yandex-team.ru";
        },
        'intranet-passport': function (reg) {
            if (reg === 'ru') return "https://passport.yandex-team.ru";
            return "https://passport.yandex-team.ru";
        },
        'blogmon': function (reg) {
            if (reg === 'ru') return "http://blogmon.yandex-team.ru";
            return "http://blogmon.yandex-team.ru";
        },
        'videoteka': function (reg) {
            if (reg === 'ru') return "http://videoteka.yandex.ru";
            return "http://videoteka.yandex.ru";
        },
        'gap': function (reg) {
            if (reg === 'ru') return "http://gap.yandex-team.ru";
            return "http://gap.yandex-team.ru";
        },
        'libra': function (reg) {
            if (reg === 'ru') return "http://lib.yandex-team.ru";
            return "http://lib.yandex-team.ru";
        },
        'admins': function (reg) {
            if (reg === 'ru') return "https://golem.yandex-team.ru";
            return "https://golem.yandex-team.ru";
        },
        'jams-arm': function (reg) {
            if (reg === 'ru') return "http://jams-arm.yandex-team.ru";
            return "http://jams-arm.yandex-team.ru";
        },
        'center': function (reg) {
            if (reg === 'ru') return "https://center.yandex-team.ru";
            return "https://center.yandex-team.ru";
        },
        'projects': function (reg) {
            if (reg === 'ru') return "http://p.yandex-team.ru";
            return "http://p.yandex-team.ru";
        },
        'maps-wiki': function (reg) {
            if (reg === 'ru') return "http://nk.yandex.ru";
            return "http://nk.yandex.ru";
        },
        '404': function (reg) {
            if (reg === 'ru') return "http://404.yandex.ru";
            if (reg === 'ua') return "http://404.yandex.ua";
            if (reg === 'com') return "http://404.yandex.com";
            if (reg === 'by') return "http://404.yandex.by";
            if (reg === 'kz') return "http://404.yandex.kz";
            if (reg === 'tr') return "http://404.yandex.com.tr";
            return "http://404.yandex.ru";
        },
        'i': function (reg) {
            if (reg === 'ru') return "http://i.yandex.ru";
            return "http://i.yandex.ru";
        },
        'desktop': function (reg) {
            if (reg === 'ru') return "http://desktop.yandex.ru";
            return "http://desktop.yandex.ru";
        },
        'ff': function (reg) {
            if (reg === 'ru') return "http://ff.yandex.ru";
            return "http://ff.yandex.ru";
        },
        'fx': function (reg) {
            if (reg === 'ru') return "http://fx.yandex.ru";
            if (reg === 'ua') return "http://fx.yandex.ua";
            if (reg === 'tr') return "http://fx.yandex.com.tr";
            return "http://fx.yandex.ru";
        },
        'ie': function (reg) {
            if (reg === 'ru') return "http://ie.yandex.ru";
            if (reg === 'ua') return "http://ie.yandex.ua";
            if (reg === 'tr') return "http://ie.yandex.com.tr";
            return "http://ie.yandex.ru";
        },
        'bar-ie': function (reg) {
            if (reg === 'ru') return "http://bar.yandex.ru/ie";
            if (reg === 'ua') return "http://bar.yandex.ua/ie";
            if (reg === 'com') return "http://bar.yandex.com/ie";
            if (reg === 'by') return "http://bar.yandex.by/ie";
            if (reg === 'kz') return "http://bar.yandex.kz/ie";
            if (reg === 'tr') return "http://bar.yandex.com.tr/ie";
            return "http://bar.yandex.ru/ie";
        },
        'bar-ie9': function (reg) {
            if (reg === 'ru') return "http://bar.yandex.ru/ie";
            if (reg === 'ua') return "http://bar.yandex.ua/ie";
            if (reg === 'com') return "http://bar.yandex.com/ie";
            if (reg === 'by') return "http://bar.yandex.by/ie";
            if (reg === 'kz') return "http://bar.yandex.kz/ie";
            if (reg === 'tr') return "http://bar.yandex.com.tr/ie";
            return "http://bar.yandex.ru/ie";
        },
        'internet': function (reg) {
            if (reg === 'ru') return "http://internet.yandex.ru";
            if (reg === 'com') return "http://internet.yandex.com";
            if (reg === 'tr') return "http://internet.yandex.com.tr";
            return "http://internet.yandex.ru";
        },
        'keyboard': function (reg) {
            if (reg === 'ru') return "http://www.yandex.ru/index_engl_qwerty.html";
            return "http://www.yandex.ru/index_engl_qwerty.html";
        },
        'metro': function (reg) {
            if (reg === 'ru') return "http://metro.yandex.ru";
            return "http://metro.yandex.ru";
        },
        'pulse': function (reg) {
            if (reg === 'ru') return "http://blogs.yandex.ru/pulse";
            if (reg === 'ua') return "http://blogs.yandex.ua/pulse";
            if (reg === 'by') return "http://blogs.yandex.by/pulse";
            if (reg === 'kz') return "http://blogs.yandex.kz/pulse";
            return "http://blogs.yandex.ru/pulse";
        },
        'school': function (reg) {
            if (reg === 'ru') return "http://school.yandex.ru";
            return "http://school.yandex.ru";
        },
        'so': function (reg) {
            if (reg === 'ru') return "http://so.yandex.ru";
            return "http://so.yandex.ru";
        },
        'time': function (reg) {
            if (reg === 'ru') return "http://time.yandex.ru";
            if (reg === 'ua') return "http://time.yandex.ua";
            if (reg === 'com') return "http://time.yandex.com";
            if (reg === 'by') return "http://time.yandex.by";
            if (reg === 'kz') return "http://time.yandex.kz";
            if (reg === 'tr') return "http://time.yandex.com.tr";
            return "http://time.yandex.ru";
        },
        'xmlsearch': function (reg) {
            if (reg === 'ru') return "http://xml.yandex.ru";
            if (reg === 'ua') return "http://xml.yandex.ua";
            if (reg === 'com') return "http://xml.yandex.com";
            if (reg === 'by') return "http://xml.yandex.by";
            if (reg === 'kz') return "http://xml.yandex.kz";
            if (reg === 'tr') return "http://xml.yandex.com.tr";
            return "http://xml.yandex.ru";
        },
        'catalogwdgt': function (reg) {
            if (reg === 'ru') return "http://www.yandex.ru/catalog";
            return "http://www.yandex.ru/catalog";
        },
        'opera': function (reg) {
            if (reg === 'ru') return "http://opera.yandex.ru";
            if (reg === 'tr') return "http://opera.yandex.com.tr";
            return "http://opera.yandex.ru";
        },
        'uslugi': function (reg) {
            if (reg === 'ru') return "http://uslugi.yandex.ru";
            return "http://uslugi.yandex.ru";
        },
        'backapv': function (reg) {
            if (reg === 'ru') return "http://backapv.yandex.ru";
            return "http://backapv.yandex.ru";
        },
        'chrome': function (reg) {
            if (reg === 'ru') return "http://chrome.yandex.ru";
            return "http://chrome.yandex.ru";
        },
        'browser': function (reg) {
            if (reg === 'ru') return "http://browser.yandex.ru";
            return "http://browser.yandex.ru";
        },
        'aziada': function (reg) {
            if (reg === 'ru') return "http://aziada2011.yandex.kz";
            return "http://aziada2011.yandex.kz";
        },
        'translate': function (reg) {
            if (reg === 'ru') return "http://translate.yandex.ru";
            if (reg === 'ua') return "http://translate.yandex.ua";
            if (reg === 'com') return "http://translate.yandex.com";
            if (reg === 'by') return "http://translate.yandex.by";
            if (reg === 'kz') return "http://translate.yandex.kz";
            if (reg === 'tr') return "http://ceviri.yandex.com.tr";
            return "http://translate.yandex.ru";
        },
        'subs': function (reg) {
            if (reg === 'ru') return "http://subs.yandex.ru";
            return "http://subs.yandex.ru";
        },
        'all': function (reg) {
            if (reg === 'ru') return "http://www.yandex.ru/all";
            if (reg === 'ua') return "http://www.yandex.ua/all";
            if (reg === 'com') return "http://www.yandex.com/all";
            if (reg === 'by') return "http://www.yandex.by/all";
            if (reg === 'kz') return "http://www.yandex.kz/all";
            if (reg === 'tr') return "http://www.yandex.com.tr/all";
            return "http://www.yandex.ru/all";
        },
        'large': function (reg) {
            if (reg === 'ru') return "http://large.yandex.ru";
            return "http://large.yandex.ru";
        },
        'geocontext': function (reg) {
            if (reg === 'ru') return "http://geocontext.yandex.ru";
            return "http://geocontext.yandex.ru";
        },
        'root': function (reg) {
            if (reg === 'ru') return "http://root.yandex.ru";
            return "http://root.yandex.ru";
        },
        'yamb': function (reg) {
            if (reg === 'ru') return "https://yamb.yandex.ru";
            return "https://yamb.yandex.ru";
        },
        'legal': function (reg) {
            if (reg === 'ru') return "http://legal.yandex.ru";
            if (reg === 'ua') return "http://legal.yandex.ua";
            if (reg === 'com') return "http://legal.yandex.com";
            if (reg === 'tr') return "http://legal.yandex.com.tr";
            return "http://legal.yandex.ru";
        },
        'taxi': function (reg) {
            if (reg === 'ru') return "https://taxi.yandex.ru";
            return "https://taxi.yandex.ru";
        },
        'social': function (reg) {
            if (reg === 'ru') return "https://social.yandex.ru";
            if (reg === 'ua') return "https://social.yandex.ua";
            if (reg === 'com') return "https://social.yandex.com";
            if (reg === 'by') return "https://social.yandex.by";
            if (reg === 'kz') return "https://social.yandex.kz";
            if (reg === 'tr') return "https://social.yandex.com.tr";
            return "https://social.yandex.ru";
        },
        'contest': function (reg) {
            if (reg === 'ru') return "http://contest.yandex.ru";
            if (reg === 'com') return "http://contest.yandex.com";
            return "http://contest.yandex.ru";
        },
        'peoplesearch': function (reg) {
            if (reg === 'ru') return "http://people.yandex.ru";
            return "http://people.yandex.ru";
        },
        'disk': function (reg) {
            if (reg === 'ru') return "http://disk.yandex.ru";
            if (reg === 'com') return "http://disk.yandex.com";
            if (reg === 'tr') return "http://disk.yandex.com.tr";
            return "http://disk.yandex.ru";
        },
        'sport': function (reg) {
            if (reg === 'ru') return "http://sport.yandex.ru";
            if (reg === 'by') return "http://sport.yandex.by";
            if (reg === 'ua') return "http://sport.yandex.ua";
            if (reg === 'kz') return "http://sport.yandex.kz";
            if (reg === 'tr') return "http://spor.yandex.com.tr";
            return "http://sport.yandex.ru";
        },
        'literacy': function (reg) {
            if (reg === 'ru') return "http://literacy.yandex.ru";
            return "http://literacy.yandex.ru";
        },
        'appsearch': function (reg) {
            if (reg === 'ru') return "//appsearch.yandex.ru";
            return "//appsearch.yandex.ru";
        },
        'ege': function (reg) {
            if (reg === 'ru') return "//ege.yandex.ru";
            return "//ege.yandex.ru";
        }
    };
    var serviceParams = {
        'afisha': {
            path: '/search',
            searchParam: 'text'
        },
        'auto': {
            path: '/search',
            searchParam: 'text'
        },
        'images': {
            path: '/search',
            searchParam: 'text',
            params: {
                stype: 'image',
                noreask: 1
            }
        },
        'maps': {
            path: '/',
            searchParam: 'text'
        },
        'market': {
            path: '/search.xml',
            searchParam: 'text'
        },
        'music': {
            rawPath: '/#!/search?text={searchText}'
        },
        'news': {
            path: '/yandsearch',
            searchParam: 'text',
            params: {
                rpt: 'nnews2',
                grhow: 'clutop'
            }
        },
        'search': {
            path: '/yandsearch',
            searchParam: 'text'
        },
        'slovari': {
            rawPath: '/{searchText}'
        },
        'translate': {
            path: '/',
            searchParam: 'text'
        },
        'video': {
            path: '/search',
            searchParam: 'text',
            params: {
                where: 'all'
            }
        },
        'weather': {
            path: '/search',
            searchParam: 'request'
        }
    };

    bt.lib.services = {
        getServiceUrl: function (serviceName, reg) {
            return services[serviceName](reg);
        },

        getServiceName: function (id) {
            return bt.lib.i18n('y-services', id);
        },

        getServiceSearchUrl: function (serviceName, searchStr, reg) {
            var serviceUrl = bt.lib.services.getServiceUrl(serviceName, reg);
            var resultPath;
            var serviceInfo = serviceParams[serviceName];
            if (serviceInfo) {
                if (serviceInfo.rawPath) {
                    resultPath = serviceInfo.rawPath.replace('{searchText}', searchStr);
                } else {
                    resultPath = serviceInfo.path;
                    var hasParams = false;
                    var params = {};
                    var sourceServiceParams = serviceInfo.params;
                    var i;
                    if (sourceServiceParams) {
                        for (i in sourceServiceParams) {
                            params[i] = sourceServiceParams[i];
                            hasParams = true;
                        }
                    }
                    if (serviceInfo.searchParam) {
                        params[serviceInfo.searchParam] = searchStr;
                        hasParams = true;
                    }
                    if (hasParams) {
                        var queryParts = [];
                        for (i in params) {
                            queryParts.push(encodeURIComponent(i) + '=' + encodeURIComponent(params[i]));
                        }
                        resultPath += '?' + queryParts.join('&');
                    }
                }
                if (serviceUrl.charAt(serviceUrl.length - 1) === '/') {
                    return serviceUrl + resultPath.substr(1);
                } else {
                    return serviceUrl + resultPath;
                }
            } else {
                return serviceUrl;
            }
        }
    };



    var SERVICES_BOARD_DEFAULT_SERVICE_NAMES = [
        'images',
        'maps',
        'market',
        'news',
        'slovari',
        'video',
        'weather',
        'auto',
        'music',
        'afisha',
        'taxi'
    ];

    /**
     * @param {String[]} services Массив из сервисных идентификаторов. По нему будет построена поисковая вертикаль
     * @param {String} selectedService Идентификатор одного сервиса. Он будет выделен, как выбраный в списке
     */

    bt.setDefaultView('y-services-board', 'islet');

    bt.match('y-services-board_islet*', function (ctx) {
        var services = ctx.getParam('services');
        if (!services) {
            services = SERVICES_BOARD_DEFAULT_SERVICE_NAMES;
        }

        ctx.setContent(
            {
                elem: 'container',
                content: [
                    services.map(function (serviceName) {
                        return {
                            elem: 'link',
                            serviceName: serviceName,
                            selected: serviceName === ctx.getParam('selectedService')
                        };
                    }),
                    {elem: 'all'}
                ]
            }
        );
    });

    bt.match('y-services-board_islet*__container', function (ctx) {
        var content = ctx.getParam('content');
        ctx.setContent(content);
    });

    bt.match('y-services-board_islet*__link', function (ctx) {
        var serviceName = ctx.getParam('serviceName');

        ctx.setTag('a');
        ctx.setAttr('href', bt.lib.services.getServiceUrl(serviceName || 'all-services'));
        ctx.setAttr('data-service-name', serviceName);

        ctx.setState('selected', ctx.getParam('selected') ? true : false);

        ctx.setContent([
            {
                elem: 'link-icon',
                serviceName: serviceName
            },
            {
                elem: 'link-text',
                text: bt.lib.services.getServiceName(serviceName)
            }

        ]);
    });

    bt.match('y-services-board_islet*__link-text', function (ctx) {
        ctx.setTag('span');
        ctx.setContent(ctx.getParam('text'));
    });

    bt.match('y-services-board_islet*__link-icon', function (ctx) {

        // Thanks for Alexei Ten: http://lynn.ru/examples/svg/
        ctx.setTag('svg');
        ctx.setContent({
            elem: 'link-image',
            serviceName: ctx.getParam('serviceName')
        });
    });

    bt.match('y-services-board_islet*__link-image', function (ctx) {
        var serviceName = ctx.getParam('serviceName');
        var urlPart = 'http://localhost:8080/blocks/common/y-services-board/icons/';

        // This is not an mistake: not img but image.
        // This is svg tag, understandable by every browser almost, except older ones
        // Old browser looks on it like on img tag
        ctx.setTag('image');

        // You cannot see svg-image without declaration of size.
        // We are just stretching by parent node
        ctx.setAttr('width', '100%');
        ctx.setAttr('height', '100%');

        // True image for modern browsers
        ctx.setAttr('xlink:href', urlPart + serviceName + '.svg');

        // Fallback for IE8 and other older browsers
        ctx.setAttr('src', urlPart + serviceName + '.png');
    });

    bt.match('y-services-board_islet*__all', function (ctx) {
        ctx.setTag('a');
        ctx.setAttr('href', bt.lib.services.getServiceUrl('all-services'));

        ctx.setContent([
            {
                elem: 'link-icon',
                serviceName: 'all-services'
            },
            {
                elem: 'link-text',
                text: 'Все сервисы'
            }
        ]);
    });




    bt.setDefaultView('y-fog', 'islet');




    /**
     * @param {BtJson} input Поле ввода.
     * @param {String} inputBlockName Имя модуля поля ввода.
     * @param {String} dataProviderName Имя модуля провайдера данных саджеста.
     * @param {String} suggestDropName Имя модуля выпадушки.
     */

    bt.setDefaultView('y-suggest', 'islet');

    /**
     * @param {Btjson} [input] Поле ввода текста для саджеста.
     * @param {String} [suggestDropName] Название используемого модуля дропа.
     * @param {Object} [suggestDropOptions] Параметры дропа.
     * @param {String} [dataProviderName] Название используемого модуля датапровайдера.
     * @param {Object} [dataProviderOptions] Параметры датапровайдера.
     * @param {String} [insertionTextExtractorName]
     *      Название используемого модуля-функции для получения вставляемого в поле ввода текста.
     */

    bt.match('y-suggest_islet*', function (ctx) {
        ctx.enableAutoInit();
        var input = ctx.getParam('input');
        if (!ctx.getParam('syncInit')) {
            if (!input) {
                input = {
                    block: 'y-input'
                };
            }
            ctx.setInitOption('inputBlockName', input.block);
        }

        var suggestDropName = ctx.getParam('suggestDropName');
        if (suggestDropName) {
            ctx.setInitOption('suggestDropName', suggestDropName);
        }
        var suggestDropOptions = ctx.getParam('suggestDropOptions');
        if (suggestDropOptions) {
            ctx.setInitOption('suggestDropOptions', suggestDropOptions);
        }

        var dataProviderName = ctx.getParam('dataProviderName');
        if (dataProviderName) {
            ctx.setInitOption('dataProviderName', dataProviderName);
        }
        var dataProviderOptions = ctx.getParam('dataProviderOptions');
        if (dataProviderOptions) {
            ctx.setInitOption('dataProviderOptions', dataProviderOptions);
        }
        var insertionTextExtractorName = ctx.getParam('insertionTextExtractorName');
        if (insertionTextExtractorName) {
            ctx.setInitOption('insertionTextExtractorName', insertionTextExtractorName);
        }

        ctx.setContent(input);
    });




    bt.setDefaultView('y-suggest-drop', 'islet');

    bt.match('y-suggest-drop_islet*', function (ctx) {
        ctx.setContent(ctx.getParam('groups'));
    });

    bt.match('y-suggest-drop_islet-header', function (ctx) {
        ctx.setContent(ctx.getParam('groups'));
        ctx.setInitOption('wide', true);
    });

    bt.match('y-suggest-drop_islet*__group', function (ctx) {
        ctx.setContent({
            elem: 'items',
            items: ctx.getParam('items')
        });
    });

    bt.match('y-suggest-drop_islet-header__group', function (ctx) {
        ctx.setContent([
            {
                elem: 'group-title',
                type: ctx.getParam('type')
            },
            {
                elem: 'items',
                items: ctx.getParam('items')
            }
        ]);
    });

    bt.match('y-suggest-drop_islet-header__group-title', function (ctx) {
        ctx.setContent(bt.lib.i18n('y-suggest-drop', 'group-type-' + ctx.getParam('type')));
    });

    bt.match('y-suggest-drop_islet*__content', function (ctx) {
        ctx.setContent(ctx.getParam('groups'));
    });

    bt.match('y-suggest-drop_islet*__items', function (ctx) {
        ctx.setTag('ul');
        ctx.setContent(ctx.getParam('items'));
    });




    bt.setDefaultView('y-suggest-drop-item', 'islet');

    /**
     * @param {String} text Текстовый контент подсказки.
     * @param {Object} [options]
     * @param {Array[]} [options.hl] Массив с диапазонами подсветки.
     */

    bt.match('y-suggest-drop-item_islet*', function (ctx) {
        var text = ctx.getParam('text');
        var options = ctx.getParam('options');

        var content;
        if (options && options.hl && options.hl.length) {
            content = bt.lib.suggest.highlight(text, options.hl);
        } else {
            content = text;
        }

        ctx.setTag('li');
        ctx.setContent(content);
    });




    bt.lib.suggest = {
        /**
         * Подсвечивает текст, используя переданные диапазоны подсветки.
         *
         * @param {String} text
         * @param {Number[][]} ranges
         * @returns {String[]}
         */
        highlight: function (text, ranges) {
            var content = [];

            // Сплющиваем диапазоны подсветки в плоский массив.
            ranges = Array.prototype.concat.apply([], ranges);

            // Сортируем в порядке возрастания.
            ranges = ranges.sort(function (a, b) {return a - b;});

            // Флаг подсветки.
            var highlight = true;

            // Если первая буква не входит в диапазон подсветки.
            if (ranges[0] !== 0) {
                ranges.unshift(0);
                highlight = false;
            }

            // Если последняя буква не входит в диапазон подсветки.
            if (ranges[ranges.length - 1] !== text.length) {
                ranges.push(text.length);
            }

            // Генерим контент по диапазонам.
            for (var i = 0; i < ranges.length - 1; i++) {
                var textPart = text.substring(ranges[i], ranges[i + 1]);
                if (highlight) {
                    textPart = '<em>' + textPart + '</em>';
                }
                highlight = !highlight;
                content.push(textPart);
            }

            return content;
        }
    };




    /**
     * @param {Bemjson} body Содержимое страницы. Следует использовать вместо `content`.
     * @param {String} doctype Доктайп. По умолчанию используется HTML5 doctype.
     * @param {Object[]} styles Набор CSS-файлов для подключения.
     *                          Каждый элемент массива должен содержать ключ `url`, содержащий путь к файлу.
     * @param {Object[]} scripts Набор JS-файлов для подключения.
     *                           Каждый элемент массива должен содержать ключ `url`, содержащий путь к файлу.
     * @param {Bemjson} head Дополнительные элементы для заголовочной части страницы.
     * @param {String} favicon Путь к фавиконке.
     */

    bt.setDefaultView('y-page', 'islet');

    bt.match('y-page_islet*', function (ctx) {
        var styleElements;
        var styles = ctx.getParam('styles');
        if (styles) {
            styleElements = styles.map(function (style) {
                return {
                    elem: 'css',
                    url: style.url,
                    ie: style.ie
                };
            });
        }
        return [
            ctx.getParam('doctype') || '<!DOCTYPE html>',
            {
                elem: 'html',
                content: [
                    {
                        elem: 'head',
                        content: [
                            [
                                {
                                    elem: 'meta',
                                    charset: 'utf-8'
                                },
                                ctx.getParam('x-ua-compatible') === false ?
                                    false :
                                    {
                                        elem: 'meta',
                                        'http-equiv': 'X-UA-Compatible',
                                        content: ctx.getParam('x-ua-compatible') || 'IE=edge'
                                    },
                                {
                                    elem: 'title',
                                    content: ctx.getParam('title')
                                },
                                ctx.getParam('favicon') ?
                                    {
                                        elem: 'favicon',
                                        url: ctx.getParam('favicon')
                                    } :
                                    '',
                                {
                                    block: 'y-ua'
                                }
                            ],
                            styleElements,
                            ctx.getParam('head')
                        ]
                    },
                    ctx.getJson()
                ]
            }
        ];
    });

    bt.match('y-page_islet*', function (ctx) {
        ctx.setTag('body');
        ctx.enableAutoInit();
        var scriptElements;
        var scripts = ctx.getParam('scripts');
        if (scripts) {
            var global = bt.lib.global;
            scriptElements = scripts.map(function (script) {
                return {
                    elem: 'js',
                    url: script.url ? script.url.replace('{lang}', global.lang) : undefined,
                    source: script.source
                };
            });
        }
        ctx.setContent([ctx.getParam('body'), scriptElements]);
    });

    bt.match('y-page_islet*__title', function (ctx) {
        ctx.disableCssClassGeneration();
        ctx.setTag('title');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('y-page_islet*__html', function (ctx) {
        ctx.setTag('html');
        ctx.disableCssClassGeneration();
        ctx.setAttr('class', 'y-ua_js_no y-ua_css_standard');
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('y-page_islet*__head', function (ctx) {
        ctx.setTag('head');
        ctx.disableCssClassGeneration();
        ctx.setContent(ctx.getParam('content'));
    });

    bt.match('y-page_islet*__meta', function (ctx) {
        ctx.setTag('meta');
        ctx.disableCssClassGeneration();
        ctx.setAttr('content', ctx.getParam('content'));
        ctx.setAttr('http-equiv', ctx.getParam('http-equiv'));
        ctx.setAttr('charset', ctx.getParam('charset'));
    });

    bt.match('y-page_islet*__favicon', function (ctx) {
        ctx.disableCssClassGeneration();
        ctx.setTag('link');
        ctx.setAttr('rel', 'shortcut icon');
        ctx.setAttr('href', ctx.getParam('url'));
    });

    bt.match('y-page_islet*__js', function (ctx) {
        ctx.disableCssClassGeneration();
        ctx.setTag('script');
        var url = ctx.getParam('url');
        if (url) {
            ctx.setAttr('src', url);
        }
        var source = ctx.getParam('source');
        if (source) {
            ctx.setContent(source);
        }
        ctx.setAttr('type', 'text/javascript');
    });

    bt.match('y-page_islet*__css', function (ctx) {
        ctx.disableCssClassGeneration();
        var url = ctx.getParam('url');

        if (url) {
            ctx.setTag('link');
            ctx.setAttr('rel', 'stylesheet');
            ctx.setAttr('href', url);
        } else {
            ctx.setTag('style');
        }

        var ie = ctx.getParam('ie');
        if (ie !== undefined) {
            if (ie === true) {
                return ['<!--[if IE]>', ctx.getJson(), '<![endif]-->'];
            } else if (ie === false) {
                return ['<!--[if !IE]> -->', ctx.getJson(), '<!-- <![endif]-->'];
            } else {
                return ['<!--[if ' + ie + ']>', ctx.getJson(), '<![endif]-->'];
            }
        }
    });


provide(bt);
});
(function(){
function initKeyset(i18n) {
if (!i18n || typeof i18n !== "function") {
i18n = (function () {

function createI18nInstance() {
    /**
     * @param {String} keysetName
     * @param {String} keyName
     * @param {Object} [options]
     */
    var i18n = function (keysetName, keyName, options) {
        var keyset = i18n._keysets[keysetName];
        if (!keyset) {
            throw new Error('Keyset "' + keysetName + '" was not found.');
        }
        var value = keyset[keyName];
        if (value === undefined) {
            throw new Error('Key "' + keyName + '" in keyset "' + keysetName + '" was not found.');
        }
        if (typeof value === 'function') {
            return value(options || {});
        } else {
            return value;
        }
    };

    /**
     * @type {Object}
     */
    i18n._keysets = {};

    /**
     * @type {String}
     */
    i18n._language = 'ru';

    /**
     * @param {String} keysetName
     * @param {Object} keysetData
     */
    i18n.add = function (keysetName, keysetData) {
        i18n._keysets[keysetName] = keysetData;
        return i18n;
    };

    /**
     * @param {String} language
     */
    i18n.setLanguage = function (language) {
        this._language = language;
        return this;
    };

    /**
     * @returns {String}
     */
    i18n.getLanguage = function () {
        return this._language;
    };

    i18n.utils = {
        /**
         * @typedef {Object} YI18NPluralParams
         * @property {Number} count
         * @property {String} one
         * @property {String} some
         * @property {String} many
         */

        /**
         * @param {YI18NPluralParams} params
         * @returns {String}
         */
        plural: function (params) {
            var count = params.count;
            var one = params.one;
            var some = params.some;
            var many = params.many;
            if (many === undefined) {
                many = some;
            } else if (some === undefined) {
                some = many;
            }
            var lastDigit = count % 10;
            var tens = count % 100;

            if (lastDigit === 1 && tens !== 11) {
                return one;
            }

            return lastDigit > 1 && lastDigit < 5 && (tens < 10 || tens > 20) ? some : many;
        },

        /**
         * @typedef {Object} YI18NIncludeParams
         * @property {String} keyset
         * @property {String} key
         */

        /**
         * @param {YI18NIncludeParams} params
         * @returns {String}
         */
        include: function (params) {
            var subParams = {};
            for (var i in params) {
                if (params.hasOwnProperty(i) && i !== 'key' && i !== 'keyset') {
                    subParams[i] = params[i];
                }
            }
            return i18n(params.keyset, params.key, subParams);
        }
    };

    return i18n;
}

return createI18nInstance();

})();

}


i18n.add('y-header', {
    "yandex": "Яндекс",
    "logo-src": "//yastatic.net/lego/_/X31pO5JJJKEifJ7sfvuf3mGeD_8.png",
    "search": "Найти"
});

i18n.add('y-services', {
    "404": "404",
    "adresa": "Адреса",
    "advertising": "Реклама",
    "afisha": "Афиша",
    "all": "Все сервисы",
    "api": "API",
    "appsearch": "Приложения",
    "auto": "Авто",
    "avia": "Авиабилеты",
    "aziada": "Азиада",
    "ba": "Баян",
    "backapv": "Партнер Я.Карт",
    "balance": "Баланс",
    "bar": "Бар",
    "bar-ie": "Бар для ИЕ",
    "bar-ie9": "Бар для ИЕ9",
    "bayan": "Баннеры Яндекса",
    "blogs": "Блоги",
    "books": "Книги",
    "browser": "Браузер",
    "calendar": "Календарь",
    "captcha": "ой...",
    "catalogwdgt": "Каталог виджетов",
    "chrome": "Хром с поиском Яндекса",
    "city": "Города",
    "cityday": "День города",
    "collection": "Коллекция",
    "company": "Компания",
    "contest": "Contest",
    "desktop": "Персональный поиск",
    "direct": "Директ",
    "direct.market": "Маркет",
    "disk": "Диск",
    "ege": "ЕГЭ",
    "expert": "Эксперт",
    "feedback": "Обратная связь",
    "ff": "ФФ с поиском Яндекса",
    "fotki": "Фотки",
    "fresh": "Свежее",
    "games": "Игрушки",
    "geocontext": "Геоконтекст",
    "goroda": "Города",
    "help": "Помощь",
    "i": "Мои сервисы",
    "ie": "ИЕ с поиском Яндекса",
    "images": "Картинки",
    "images-com": "Картинки",
    "interests": "Интересы",
    "internet": "Интернет",
    "keyboard": "Клавиатура",
    "kraski": "Краски",
    "kuda": "Куда все идут",
    "large": "Яндекс для слабовидящих",
    "legal": "Правовые документы",
    "lenta": "Лента",
    "libra": "Библиотека",
    "literacy": "Неделя борьбы за грамотность",
    "local": "Локальная сеть",
    "lost": "Незабудки",
    "love": "День взаимного тяготения — 13 августа",
    "mail": "Почта",
    "maps": "Карты",
    "maps-wiki": "Народная карта",
    "market": "Маркет",
    "market.advertising": "Маркет",
    "metrika": "Метрика",
    "metro": "Метро",
    "mobile": "Мобильный",
    "moikrug": "Мой Круг",
    "money": "Деньги",
    "museums": "Дни исторического и культурного наследия",
    "music": "Музыка",
    "music-partner": "Музыка: статистика",
    "nahodki": "Мои находки",
    "nano": "Нано",
    "newhire": "Наниматор",
    "news": "Новости",
    "oauth": "Авторизация",
    "online": "Онлайн",
    "openid": "OpenID",
    "opera": "Opera Software",
    "opinion": "Цитаты",
    "partners": "Рекламная сеть",
    "partnersearch": "Поиск для партнеров",
    "passport": "Паспорт",
    "pdd": "Почта для домена",
    "peoplesearch": "Люди",
    "perevod": "Перевод",
    "probki": "Пробки",
    "pulse": "блоги: пульс",
    "punto": "Punto switcher",
    "pvo": "Ответы",
    "rabota": "Работа",
    "ramazan": "",
    "rasp": "Расписания",
    "realty": "Недвижимость",
    "referats": "Рефераты",
    "rk": "Есть вопросы?",
    "root": "Яндекс.Олимпиада для Unix администраторов",
    "school": "Школа",
    "search": "Поиск",
    "server": "Сервер",
    "site": "Поиск для сайта",
    "slovari": "Словари",
    "so": "Самооборона",
    "social": "Социализм",
    "soft": "Программы",
    "sport": "Спорт",
    "sprav": "Справочник",
    "start": "Стартовая страница",
    "stat": "Статистика",
    "subs": "Подписки",
    "taxi": "Такси",
    "terms": "Разговорник",
    "tests": "Тесты и опросы",
    "tickets": "Билеты",
    "time": "Яндекс.Время",
    "toster": "Тосты",
    "translate": "Перевод",
    "tune": "Настройки",
    "tv": "Телепрограмма",
    "uslugi": "Услуги",
    "video": "Видео",
    "video-com": "Видео",
    "vno": "ВНО",
    "wdgt": "Виджеты",
    "weather": "Погода",
    "webmaster": "Вебмастер",
    "widgets": "Виджеты",
    "wordstat": "Статистика",
    "wow": "Я.ру",
    "www": "Поиск",
    "xmlsearch": "XML",
    "yaca": "Каталог",
    "yamb": "Медийные баннеры",
    "zakladki": "Закладки"
});

i18n.add('y-suggest-drop', {
    "group-type-search": "Поиск",
    "group-type-personal": "Вы искали",
    "group-type-nav": "Сайт"
});
i18n.setLanguage('ru');
return i18n;
}
if (typeof modules !== 'undefined') {
    modules.define('y-i18n', function (provide, i18n) {
        provide(initKeyset(i18n));
    });
} else if (typeof module !== 'undefined') {
    module.exports = function() {return initKeyset();};
} else if (typeof window !== 'undefined') {
    window.i18n = initKeyset();
} else {
    i18n = initKeyset();
}
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9lbmItYmV2aXMvbm9kZV9tb2R1bGVzL3ltL21vZHVsZXMuanMiLCIuLi8uLi9jbGllbnQvcGFnZXMvaW5kZXgvaW5kZXgtcGFnZS9pbmRleC1wYWdlLmpzIiwiLi4vLi4vY2xpZW50L3BhZ2VzL2luZGV4L2FwcC9hcHAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaW5oZXJpdC9saWIvaW5oZXJpdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pc2xldHMvYmxvY2tzL2NvcmUveS1ibG9jay95LWJsb2NrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29yZS95LWV2ZW50LWVtaXR0ZXIveS1ldmVudC1lbWl0dGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29yZS95LWV2ZW50LW1hbmFnZXIveS1ldmVudC1tYW5hZ2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29yZS9qcXVlcnkvanF1ZXJ5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29yZS95LWxvYWQtc2NyaXB0L3ktbG9hZC1zY3JpcHQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb3JlL2pxdWVyeS9qcXVlcnktY29uZmlnLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29yZS95LWJsb2NrLWV2ZW50L3ktYmxvY2stZXZlbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdm93L2xpYi92b3cuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb3JlL3ktZXh0ZW5kL3ktZXh0ZW5kLmpzIiwiLi4vLi4vY2xpZW50L3BhZ2VzL2luZGV4L2NvbmZpZy9jb25maWcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb21tb24veS1oZWFkZXIveS1oZWFkZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb21tb24veS1idXR0b24veS1idXR0b24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb3JlL3ktZG9tL3ktZG9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktaW5wdXQveS1pbnB1dC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pc2xldHMvYmxvY2tzL2NvcmUveS1pMThuL3ktaTE4bi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pc2xldHMvYmxvY2tzL2NvbW1vbi95LXNlcnZpY2VzLWJvYXJkL3ktc2VydmljZXMtYm9hcmQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb21tb24veS1mb2cveS1mb2cuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb21tb24veS1zdWdnZXN0L3ktc3VnZ2VzdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pc2xldHMvYmxvY2tzL2NvbW1vbi95LXN1Z2dlc3QvX19qc29ucC1kYXRhLXByb3ZpZGVyL3ktc3VnZ2VzdF9fanNvbnAtZGF0YS1wcm92aWRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pc2xldHMvYmxvY2tzL2NvbW1vbi95LXN1Z2dlc3QvX19qc29uLWRhdGEtcHJvdmlkZXIveS1zdWdnZXN0X19qc29uLWRhdGEtcHJvdmlkZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb21tb24veS1zdWdnZXN0L19fcmVzcG9uc2UveS1zdWdnZXN0X19yZXNwb25zZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pc2xldHMvYmxvY2tzL2NvbW1vbi95LXN1Z2dlc3QvX19yZXNwb25zZS1ncm91cC95LXN1Z2dlc3RfX3Jlc3BvbnNlLWdyb3VwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktc3VnZ2VzdC9fX3Jlc3BvbnNlLWl0ZW0veS1zdWdnZXN0X19yZXNwb25zZS1pdGVtLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktc3VnZ2VzdC9fX2luc2VydGlvbi10ZXh0LWV4dHJhY3Rvci95LXN1Z2dlc3RfX2luc2VydGlvbi10ZXh0LWV4dHJhY3Rvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pc2xldHMvYmxvY2tzL2NvbW1vbi95LXN1Z2dlc3QtZHJvcC95LXN1Z2dlc3QtZHJvcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pc2xldHMvYmxvY2tzL2NvbW1vbi95LXN1Z2dlc3QtZHJvcC1pdGVtL3ktc3VnZ2VzdC1kcm9wLWl0ZW0uanMiLCIuL2luZGV4LmJ0LmNsaWVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9lbmItYnQvbGliL2J0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktZ2xvYmFsL3ktZ2xvYmFsLmJ0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktdWEveS11YS5idC5qcyIsIi4uLy4uL2NsaWVudC9wYWdlcy9pbmRleC9jb25maWcvY29uZmlnLmJ0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktaGVhZGVyL3ktaGVhZGVyLmJ0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktYnV0dG9uL3ktYnV0dG9uLmJ0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktaW5wdXQveS1pbnB1dC5idC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pc2xldHMvYmxvY2tzL2NvbW1vbi95LXNlcnZpY2VzL3ktc2VydmljZXMuYnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb21tb24veS1zZXJ2aWNlcy1ib2FyZC95LXNlcnZpY2VzLWJvYXJkLmJ0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktZm9nL3ktZm9nLmJ0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktc3VnZ2VzdC95LXN1Z2dlc3QuYnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb21tb24veS1zdWdnZXN0LWRyb3AveS1zdWdnZXN0LWRyb3AuYnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaXNsZXRzL2Jsb2Nrcy9jb21tb24veS1zdWdnZXN0LWRyb3AtaXRlbS95LXN1Z2dlc3QtZHJvcC1pdGVtLmJ0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvYnQtbGliL2J0LWxpYi1zdWdnZXN0LmJ0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2lzbGV0cy9ibG9ja3MvY29tbW9uL3ktcGFnZS95LXBhZ2UuYnQuanMiLCIuL2luZGV4LmxhbmcucnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBREVBO0FBQ0E7QUV0eUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdDZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QWYwaEZBO0FBQ0E7QWdCNXJGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii9Vc2Vycy9hcnQvdG1wL2JhYnktbG9yaXMvYnVpbGQvaW5kZXgvaW5kZXgucnUuanMifQ==