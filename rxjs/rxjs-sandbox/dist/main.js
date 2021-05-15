/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(r,e)};function r(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function e(t){var r="function"==typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function n(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),s=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return s}function o(t,r){for(var e=0,n=r.length,o=t.length;e<n;e++,o++)t[o]=r[e];return t}function i(t){return"function"==typeof t}function s(t){var r=t((function(t){Error.call(t),t.stack=(new Error).stack}));return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}Object.create,Object.create;var u=s((function(t){return function(r){t(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r}}));function c(t,r){if(t){var e=t.indexOf(r);0<=e&&t.splice(e,1)}}var a=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}var r;return t.prototype.unsubscribe=function(){var t,r,s,c,a;if(!this.closed){this.closed=!0;var l=this._parentage;if(l)if(this._parentage=null,Array.isArray(l))try{for(var f=e(l),h=f.next();!h.done;h=f.next())h.value.remove(this)}catch(r){t={error:r}}finally{try{h&&!h.done&&(r=f.return)&&r.call(f)}finally{if(t)throw t.error}}else l.remove(this);var d=this.initialTeardown;if(i(d))try{d()}catch(t){a=t instanceof u?t.errors:[t]}var v=this._teardowns;if(v){this._teardowns=null;try{for(var y=e(v),b=y.next();!b.done;b=y.next()){var _=b.value;try{p(_)}catch(t){a=null!=a?a:[],t instanceof u?a=o(o([],n(a)),n(t.errors)):a.push(t)}}}catch(t){s={error:t}}finally{try{b&&!b.done&&(c=y.return)&&c.call(y)}finally{if(s)throw s.error}}}if(a)throw new u(a)}},t.prototype.add=function(r){var e;if(r&&r!==this)if(this.closed)p(r);else{if(r instanceof t){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._teardowns=null!==(e=this._teardowns)&&void 0!==e?e:[]).push(r)}},t.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},t.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},t.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&c(r,t)},t.prototype.remove=function(r){var e=this._teardowns;e&&c(e,r),r instanceof t&&r._removeParent(this)},t.EMPTY=((r=new t).closed=!0,r),t}(),l=a.EMPTY;function f(t){return t instanceof a||t&&"closed"in t&&i(t.remove)&&i(t.add)&&i(t.unsubscribe)}function p(t){i(t)?t():t.unsubscribe()}var h=null,d=null,v=void 0,y=!1,b=!1,_={setTimeout:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=_.delegate;return((null==e?void 0:e.setTimeout)||setTimeout).apply(void 0,o([],n(t)))},clearTimeout:function(t){var r=_.delegate;return((null==r?void 0:r.clearTimeout)||clearTimeout)(t)},delegate:void 0};function w(t){_.setTimeout((function(){if(!h)throw t;h(t)}))}function m(){}var S=g("C",void 0,void 0);function g(t,r,e){return{kind:t,value:r,error:e}}var E=function(t){function e(r){var e=t.call(this)||this;return e.isStopped=!1,r?(e.destination=r,f(r)&&r.add(e)):e.destination=j,e}return r(e,t),e.create=function(t,r,e){return new x(t,r,e)},e.prototype.next=function(t){this.isStopped?P(function(t){return g("N",t,void 0)}(t),this):this._next(t)},e.prototype.error=function(t){this.isStopped?P(g("E",void 0,t),this):(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped?P(S,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(a),x=function(t){function e(r,e,n){var o,s=t.call(this)||this;if(i(r))o=r;else if(r){var u;o=r.next,e=r.error,n=r.complete,s&&b?(u=Object.create(r)).unsubscribe=function(){return s.unsubscribe()}:u=r,o=null==o?void 0:o.bind(u),e=null==e?void 0:e.bind(u),n=null==n?void 0:n.bind(u)}return s.destination={next:o?T(o,s):m,error:T(null!=e?e:O,s),complete:n?T(n,s):m},s}return r(e,t),e}(E);function T(t,r){return function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];try{t.apply(void 0,o([],n(e)))}catch(t){if(y){if(!r._syncErrorHack_isSubscribing)throw t;r.__syncError=t}else w(t)}}}function O(t){throw t}function P(t,r){var e=d;e&&_.setTimeout((function(){return e(t,r)}))}var j={closed:!0,next:m,error:O,complete:m},k="function"==typeof Symbol&&Symbol.observable||"@@observable";function A(t){return t}function C(t){return 0===t.length?A:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var I=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(t,r,e){var n,o=(n=t)&&n instanceof E||function(t){return t&&i(t.next)&&i(t.error)&&i(t.complete)}(n)&&f(n)?t:new x(t,r,e);if(y)this._deprecatedSyncErrorSubscribe(o);else{var s=this.operator,u=this.source;o.add(s?s.call(o,u):u?this._subscribe(o):this._trySubscribe(o))}return o},t.prototype._deprecatedSyncErrorSubscribe=function(t){var r=t;r._syncErrorHack_isSubscribing=!0;var e=this.operator;if(e)t.add(e.call(t,this.source));else try{t.add(this._subscribe(t))}catch(t){r.__syncError=t}for(var n=r;n;){if("__syncError"in n)try{throw n.__syncError}finally{t.unsubscribe()}n=n.destination}r._syncErrorHack_isSubscribing=!1},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},t.prototype.forEach=function(t,r){var e=this;return new(r=L(r))((function(r,n){var o;o=e.subscribe((function(r){try{t(r)}catch(t){n(t),null==o||o.unsubscribe()}}),n,r)}))},t.prototype._subscribe=function(t){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(t)},t.prototype[k]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.length?C(t)(this):this},t.prototype.toPromise=function(t){var r=this;return new(t=L(t))((function(t,e){var n;r.subscribe((function(t){return n=t}),(function(t){return e(t)}),(function(){return t(n)}))}))},t.create=function(r){return new t(r)},t}();function L(t){var r;return null!==(r=null!=t?t:v)&&void 0!==r?r:Promise}var H=s((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),q=function(t){function n(){var r=t.call(this)||this;return r.closed=!1,r.observers=[],r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return r(n,t),n.prototype.lift=function(t){var r=new M(this,this);return r.operator=t,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new H},n.prototype.next=function(t){var r,n;if(this._throwIfClosed(),!this.isStopped){var o=this.observers.slice();try{for(var i=e(o),s=i.next();!s.done;s=i.next())s.value.next(t)}catch(t){r={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}}},n.prototype.error=function(t){if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;for(var r=this.observers;r.length;)r.shift().error(t)}},n.prototype.complete=function(){if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;for(var t=this.observers;t.length;)t.shift().complete()}},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},n.prototype._trySubscribe=function(r){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,r)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var r=this,e=r.hasError,n=r.isStopped,o=r.observers;return e||n?l:(o.push(t),new a((function(){return c(o,t)})))},n.prototype._checkFinalizedStatuses=function(t){var r=this,e=r.hasError,n=r.thrownError,o=r.isStopped;e?t.error(n):o&&t.complete()},n.prototype.asObservable=function(){var t=new I;return t.source=this,t},n.create=function(t,r){return new M(t,r)},n}(I),M=function(t){function e(r,e){var n=t.call(this)||this;return n.destination=r,n.source=e,n}return r(e,t),e.prototype.next=function(t){var r,e;null===(e=null===(r=this.destination)||void 0===r?void 0:r.next)||void 0===e||e.call(r,t)},e.prototype.error=function(t){var r,e;null===(e=null===(r=this.destination)||void 0===r?void 0:r.error)||void 0===e||e.call(r,t)},e.prototype.complete=function(){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===r||r.call(t)},e.prototype._subscribe=function(t){var r,e;return null!==(e=null===(r=this.source)||void 0===r?void 0:r.subscribe(t))&&void 0!==e?e:l},e}(q);!function(t,r){let e=0,n=1;r.subscribe((t=>n=t));let o=document.querySelector(".counter .value");setInterval((()=>{e+=n,o.innerHTML=e}),1e3)}(0,function(){let t=new q,r=document.querySelector(".step-one"),e=document.querySelector(".step-two");return r.addEventListener("click",(n=>{t.next(1),r.classList.add("active"),e.classList.remove("active")})),e.addEventListener("click",(n=>{t.next(2),r.classList.remove("active"),e.classList.add("active")})),t.asObservable()}())})();