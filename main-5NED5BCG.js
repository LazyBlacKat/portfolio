import{a as y,b as G,c as ic,d as of}from"./chunk-NWJ5J3BN.js";var _t=null,rc=!1,sf=1,jx=null,Je=Symbol("SIGNAL");function V(t){let n=_t;return _t=t,n}function cc(){return _t}var Qi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Zi(t){if(rc)throw new Error("");if(_t===null)return;_t.consumerOnSignalRead(t);let n=_t.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=_t.recomputing;if(i&&(e=n!==void 0?n.nextProducer:_t.producers,e!==void 0&&e.producer===t)){_t.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===_t&&(!i||Bx(r,_t)))return;let o=Xr(_t),s={producer:t,consumer:_t,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};_t.producersTail=s,n!==void 0?n.nextProducer=s:_t.producers=s,o&&Hv(t,s)}function jv(){sf++}function lc(t){if(!(Xr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===sf)){if(!t.producerMustRecompute(t)&&!Kr(t)){ac(t);return}t.producerRecomputeValue(t),ac(t)}}function af(t){if(t.consumers===void 0)return;let n=rc;rc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||Vx(i)}}finally{rc=n}}function cf(){return _t?.consumerAllowSignalWrites!==!1}function Vx(t){t.dirty=!0,af(t),t.consumerMarkedDirty?.(t)}function ac(t){t.dirty=!1,t.lastCleanEpoch=sf}function Ci(t){return t&&Vv(t),V(t)}function Vv(t){t.producersTail=void 0,t.recomputing=!0}function Ki(t,n){V(n),t&&Bv(t)}function Bv(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Xr(t))do e=lf(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Kr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(lc(e),i!==e.version))return!0}return!1}function Ei(t){if(Xr(t)){let n=t.producers;for(;n!==void 0;)n=lf(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Hv(t,n){let e=t.consumersTail,i=Xr(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Hv(r.producer,r)}function lf(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Xr(n)){let o=n.producers;for(;o!==void 0;)o=lf(o)}return e}function Xr(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function dc(t){jx?.(t)}function Bx(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function uc(t,n){return Object.is(t,n)}function hs(t,n){let e=Object.create(Hx);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(lc(e),Zi(e),e.value===fs)throw e.error;return e.value};return i[Je]=e,dc(e),i}var oc=Symbol("UNSET"),sc=Symbol("COMPUTING"),fs=Symbol("ERRORED"),Hx=G(y({},Qi),{value:oc,dirty:!0,error:null,equal:uc,kind:"computed",producerMustRecompute(t){return t.value===oc||t.value===sc},producerRecomputeValue(t){if(t.value===sc)throw new Error("");let n=t.value;t.value=sc;let e=Ci(t),i,r=!1;try{i=t.computation(),V(null),r=n!==oc&&n!==fs&&i!==fs&&t.equal(n,i)}catch(o){i=fs,t.error=o}finally{Ki(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function zx(){throw new Error}var zv=zx;function Uv(t){zv(t)}function df(t){zv=t}var Ux=null;function uf(t,n){let e=Object.create(ms);e.value=t,n!==void 0&&(e.equal=n);let i=()=>$v(e);return i[Je]=e,dc(e),[i,s=>Jr(e,s),s=>ff(e,s)]}function $v(t){return Zi(t),t.value}function Jr(t,n){cf()||Uv(t),t.equal(t.value,n)||(t.value=n,$x(t))}function ff(t,n){cf()||Uv(t),Jr(t,n(t.value))}var ms=G(y({},Qi),{equal:uc,value:void 0,kind:"signal"});function $x(t){t.version++,jv(),af(t),Ux?.(t)}var hf=G(y({},Qi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function mf(t){if(t.dirty=!1,t.version>0&&!Kr(t))return;t.version++;let n=Ci(t);try{t.cleanup(),t.fn()}finally{Ki(t,n)}}function ee(t){return typeof t=="function"}function eo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var fc=eo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Xi(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var Me=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ee(i))try{i()}catch(o){n=o instanceof fc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Gv(o)}catch(s){n=n??[],s instanceof fc?n=[...n,...s.errors]:n.push(s)}}if(n)throw new fc(n)}}add(n){var e;if(n&&n!==this)if(this.closed)Gv(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Xi(e,n)}remove(n){let{_finalizers:e}=this;e&&Xi(e,n),n instanceof t&&n._removeParent(this)}};Me.EMPTY=(()=>{let t=new Me;return t.closed=!0,t})();var pf=Me.EMPTY;function hc(t){return t instanceof Me||t&&"closed"in t&&ee(t.remove)&&ee(t.add)&&ee(t.unsubscribe)}function Gv(t){ee(t)?t():t.unsubscribe()}var hn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var to={setTimeout(t,n,...e){let{delegate:i}=to;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=to;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function mc(t){to.setTimeout(()=>{let{onUnhandledError:n}=hn;if(n)n(t);else throw t})}function ps(){}var Wv=gf("C",void 0,void 0);function qv(t){return gf("E",void 0,t)}function Yv(t){return gf("N",t,void 0)}function gf(t,n,e){return{kind:t,value:n,error:e}}var Ji=null;function no(t){if(hn.useDeprecatedSynchronousErrorHandling){let n=!Ji;if(n&&(Ji={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Ji;if(Ji=null,e)throw i}}else t()}function Qv(t){hn.useDeprecatedSynchronousErrorHandling&&Ji&&(Ji.errorThrown=!0,Ji.error=t)}var er=class extends Me{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,hc(n)&&n.add(this)):this.destination=qx}static create(n,e,i){return new Yn(n,e,i)}next(n){this.isStopped?_f(Yv(n),this):this._next(n)}error(n){this.isStopped?_f(qv(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?_f(Wv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Gx=Function.prototype.bind;function vf(t,n){return Gx.call(t,n)}var yf=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){pc(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){pc(i)}else pc(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){pc(e)}}},Yn=class extends er{constructor(n,e,i){super();let r;if(ee(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&hn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&vf(n.next,o),error:n.error&&vf(n.error,o),complete:n.complete&&vf(n.complete,o)}):r=n}this.destination=new yf(r)}};function pc(t){hn.useDeprecatedSynchronousErrorHandling?Qv(t):mc(t)}function Wx(t){throw t}function _f(t,n){let{onStoppedNotification:e}=hn;e&&to.setTimeout(()=>e(t,n))}var qx={closed:!0,next:ps,error:Wx,complete:ps};var io=typeof Symbol=="function"&&Symbol.observable||"@@observable";function $t(t){return t}function bf(...t){return wf(t)}function wf(t){return t.length===0?$t:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var K=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=Qx(e)?e:new Yn(e,i,r);return no(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Zv(i),new i((r,o)=>{let s=new Yn({next:a=>{try{e(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[io](){return this}pipe(...e){return wf(e)(this)}toPromise(e){return e=Zv(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function Zv(t){var n;return(n=t??hn.Promise)!==null&&n!==void 0?n:Promise}function Yx(t){return t&&ee(t.next)&&ee(t.error)&&ee(t.complete)}function Qx(t){return t&&t instanceof er||Yx(t)&&hc(t)}function Zx(t){return ee(t?.lift)}function oe(t){return n=>{if(Zx(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function de(t,n,e,i,r){return new Cf(t,n,e,i,r)}var Cf=class extends er{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(c){n.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Kv=eo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var M=(()=>{class t extends K{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new gc(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Kv}next(e){no(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){no(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){no(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?pf:(this.currentObservers=null,o.push(e),new Me(()=>{this.currentObservers=null,Xi(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new K;return e.source=this,e}}return t.create=(n,e)=>new gc(n,e),t})(),gc=class extends M{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:pf}};var Ue=class extends M{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var gs={now(){return(gs.delegate||Date).now()},delegate:void 0};var vc=class extends M{constructor(n=1/0,e=1/0,i=gs){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let c=1;c<i.length&&i[c]<=s;c+=2)a=c;a&&i.splice(0,a+1)}}};var _c=class extends Me{constructor(n,e){super()}schedule(n,e=0){return this}};var vs={setInterval(t,n,...e){let{delegate:i}=vs;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=vs;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var yc=class extends _c{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return vs.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&vs.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Xi(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var ro=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};ro.now=gs.now;var bc=class extends ro{constructor(n,e=ro.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var _s=new bc(yc),Xv=_s;var $e=new K(t=>t.complete());function wc(t){return t&&ee(t.schedule)}function Ef(t){return t[t.length-1]}function Cc(t){return ee(Ef(t))?t.pop():void 0}function Fn(t){return wc(Ef(t))?t.pop():void 0}function Jv(t,n){return typeof Ef(t)=="number"?t.pop():n}function t_(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{l(i.next(d))}catch(f){s(f)}}function c(d){try{l(i.throw(d))}catch(f){s(f)}}function l(d){d.done?o(d.value):r(d.value).then(a,c)}l((i=i.apply(t,n||[])).next())})}function e_(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function tr(t){return this instanceof tr?(this.v=t,this):new tr(t)}function n_(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(p){return Promise.resolve(p).then(h,f)}}function a(h,p){i[h]&&(r[h]=function(w){return new Promise(function(x,S){o.push([h,w,x,S])>1||c(h,w)})},p&&(r[h]=p(r[h])))}function c(h,p){try{l(i[h](p))}catch(w){m(o[0][3],w)}}function l(h){h.value instanceof tr?Promise.resolve(h.value.v).then(d,f):m(o[0][2],h)}function d(h){c("next",h)}function f(h){c("throw",h)}function m(h,p){h(p),o.shift(),o.length&&c(o[0][0],o[0][1])}}function i_(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof e_=="function"?e_(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,c){s=t[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var Ec=t=>t&&typeof t.length=="number"&&typeof t!="function";function Dc(t){return ee(t?.then)}function xc(t){return ee(t[io])}function Sc(t){return Symbol.asyncIterator&&ee(t?.[Symbol.asyncIterator])}function Ic(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Kx(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Mc=Kx();function Tc(t){return ee(t?.[Mc])}function kc(t){return n_(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield tr(e.read());if(r)return yield tr(void 0);yield yield tr(i)}}finally{e.releaseLock()}})}function Ac(t){return ee(t?.getReader)}function ke(t){if(t instanceof K)return t;if(t!=null){if(xc(t))return Xx(t);if(Ec(t))return Jx(t);if(Dc(t))return eS(t);if(Sc(t))return r_(t);if(Tc(t))return tS(t);if(Ac(t))return nS(t)}throw Ic(t)}function Xx(t){return new K(n=>{let e=t[io]();if(ee(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Jx(t){return new K(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function eS(t){return new K(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,mc)})}function tS(t){return new K(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function r_(t){return new K(n=>{iS(t,n).catch(e=>n.error(e))})}function nS(t){return r_(kc(t))}function iS(t,n){var e,i,r,o;return t_(this,void 0,void 0,function*(){try{for(e=i_(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Pt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Rc(t,n=0){return oe((e,i)=>{e.subscribe(de(i,r=>Pt(i,t,()=>i.next(r),n),()=>Pt(i,t,()=>i.complete(),n),r=>Pt(i,t,()=>i.error(r),n)))})}function Oc(t,n=0){return oe((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function o_(t,n){return ke(t).pipe(Oc(n),Rc(n))}function s_(t,n){return ke(t).pipe(Oc(n),Rc(n))}function a_(t,n){return new K(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function c_(t,n){return new K(e=>{let i;return Pt(e,n,()=>{i=t[Mc](),Pt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>ee(i?.return)&&i.return()})}function Nc(t,n){if(!t)throw new Error("Iterable cannot be null");return new K(e=>{Pt(e,n,()=>{let i=t[Symbol.asyncIterator]();Pt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function l_(t,n){return Nc(kc(t),n)}function d_(t,n){if(t!=null){if(xc(t))return o_(t,n);if(Ec(t))return a_(t,n);if(Dc(t))return s_(t,n);if(Sc(t))return Nc(t,n);if(Tc(t))return c_(t,n);if(Ac(t))return l_(t,n)}throw Ic(t)}function Ae(t,n){return n?d_(t,n):ke(t)}function B(...t){let n=Fn(t);return Ae(t,n)}function ys(t,n){let e=ee(t)?t:()=>t,i=r=>r.error(e());return new K(n?r=>n.schedule(i,0,r):i)}function bs(t){return!!t&&(t instanceof K||ee(t.lift)&&ee(t.subscribe))}var nr=eo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function u_(t){return t instanceof Date&&!isNaN(t)}function j(t,n){return oe((e,i)=>{let r=0;e.subscribe(de(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:rS}=Array;function oS(t,n){return rS(n)?t(...n):t(n)}function Pc(t){return j(n=>oS(t,n))}var{isArray:sS}=Array,{getPrototypeOf:aS,prototype:cS,keys:lS}=Object;function Fc(t){if(t.length===1){let n=t[0];if(sS(n))return{args:n,keys:null};if(dS(n)){let e=lS(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function dS(t){return t&&typeof t=="object"&&aS(t)===cS}function Lc(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function ws(...t){let n=Fn(t),e=Cc(t),{args:i,keys:r}=Fc(t);if(i.length===0)return Ae([],n);let o=new K(uS(i,n,r?s=>Lc(r,s):$t));return e?o.pipe(Pc(e)):o}function uS(t,n,e=$t){return i=>{f_(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)f_(n,()=>{let l=Ae(t[c],n),d=!1;l.subscribe(de(i,f=>{o[c]=f,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function f_(t,n,e){t?Pt(e,t,n):n()}function h_(t,n,e,i,r,o,s,a){let c=[],l=0,d=0,f=!1,m=()=>{f&&!c.length&&!l&&n.complete()},h=w=>l<i?p(w):c.push(w),p=w=>{o&&n.next(w),l++;let x=!1;ke(e(w,d++)).subscribe(de(n,S=>{r?.(S),o?h(S):n.next(S)},()=>{x=!0},void 0,()=>{if(x)try{for(l--;c.length&&l<i;){let S=c.shift();s?Pt(n,s,()=>p(S)):p(S)}m()}catch(S){n.error(S)}}))};return t.subscribe(de(n,h,()=>{f=!0,m()})),()=>{a?.()}}function xt(t,n,e=1/0){return ee(n)?xt((i,r)=>j((o,s)=>n(i,o,r,s))(ke(t(i,r))),e):(typeof n=="number"&&(e=n),oe((i,r)=>h_(i,r,t,e)))}function jc(t=1/0){return xt($t,t)}function m_(){return jc(1)}function Di(...t){return m_()(Ae(t,Fn(t)))}function Cs(t){return new K(n=>{ke(t()).subscribe(n)})}function ir(...t){let n=Cc(t),{args:e,keys:i}=Fc(t),r=new K(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let d=0;d<s;d++){let f=!1;ke(e[d]).subscribe(de(o,m=>{f||(f=!0,l--),a[d]=m},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?Lc(i,a):a),o.complete())}))}});return n?r.pipe(Pc(n)):r}function p_(t=0,n,e=Xv){let i=-1;return n!=null&&(wc(n)?e=n:i=n),new K(r=>{let o=u_(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Qn(...t){let n=Fn(t),e=Jv(t,1/0),i=t;return i.length?i.length===1?ke(i[0]):jc(e)(Ae(i,n)):$e}function Ee(t,n){return oe((e,i)=>{let r=0;e.subscribe(de(i,o=>t.call(n,o,r++)&&i.next(o)))})}function g_(t){return oe((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}s&&e.complete()},c=()=>{o=null,s&&e.complete()};n.subscribe(de(e,l=>{i=!0,r=l,o||ke(t(l)).subscribe(o=de(e,a,c))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function Vc(t,n=_s){return g_(()=>p_(t,n))}function en(t){return oe((n,e)=>{let i=null,r=!1,o;i=n.subscribe(de(e,void 0,void 0,s=>{o=ke(t(s,en(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function oo(t,n){return ee(n)?xt(t,n,1):xt(t,1)}function rr(t,n=_s){return oe((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=s+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}a()}e.subscribe(de(i,l=>{o=l,s=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function v_(t){return oe((n,e)=>{let i=!1;n.subscribe(de(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function rt(t){return t<=0?()=>$e:oe((n,e)=>{let i=0;n.subscribe(de(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Bc(t){return j(()=>t)}function Hc(t,n=$t){return t=t??fS,oe((e,i)=>{let r,o=!0;e.subscribe(de(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function fS(t,n){return t===n}function __(t=hS){return oe((n,e)=>{let i=!1;n.subscribe(de(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function hS(){return new nr}function or(t){return oe((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Zn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Ee((r,o)=>t(r,o,i)):$t,rt(1),e?v_(n):__(()=>new nr))}function zc(t){return t<=0?()=>$e:oe((n,e)=>{let i=[];n.subscribe(de(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Uc(){return oe((t,n)=>{let e,i=!1;t.subscribe(de(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Es(t={}){let{connector:n=()=>new M,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,c,l=0,d=!1,f=!1,m=()=>{a?.unsubscribe(),a=void 0},h=()=>{m(),s=c=void 0,d=f=!1},p=()=>{let w=s;h(),w?.unsubscribe()};return oe((w,x)=>{l++,!f&&!d&&m();let S=c=c??n();x.add(()=>{l--,l===0&&!f&&!d&&(a=Df(p,r))}),S.subscribe(x),!s&&l>0&&(s=new Yn({next:H=>S.next(H),error:H=>{f=!0,m(),a=Df(h,e,H),S.error(H)},complete:()=>{d=!0,m(),a=Df(h,i),S.complete()}}),ke(w).subscribe(s))})(o)}}function Df(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Yn({next:()=>{i.unsubscribe(),t()}});return ke(n(...e)).subscribe(i)}function sr(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Es({connector:()=>new vc(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Ds(t){return Ee((n,e)=>t<=e)}function mn(...t){let n=Fn(t);return oe((e,i)=>{(n?Di(t,e,n):Di(t,e)).subscribe(i)})}function lt(t,n){return oe((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(de(i,c=>{r?.unsubscribe();let l=0,d=o++;ke(t(c,d)).subscribe(r=de(i,f=>i.next(n?n(c,f,d,l++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Ce(t){return oe((n,e)=>{ke(t).subscribe(de(e,()=>e.complete(),ps)),!e.closed&&n.subscribe(e)})}function yt(t,n,e){let i=ee(t)||n||e?{next:t,error:n,complete:e}:t;return i?oe((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(de(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):$t}var xf;function $c(){return xf}function Ln(t){let n=xf;return xf=t,n}var y_=Symbol("NotFound");function so(t){return t===y_||t?.name==="\u0275NotFound"}function b_(t){let n=V(null);try{return t()}finally{V(n)}}var Kc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",E=class extends Error{code;constructor(n,e){super(Vn(n,e)),this.code=n}};function mS(t){return`NG0${Math.abs(t)}`}function Vn(t,n){return`${mS(t)}${n?": "+n:""}`}var co=globalThis;function xe(t){for(let n in t)if(t[n]===xe)return n;throw Error("")}function x_(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function As(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(As).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Xc(t,n){return t?n?`${t} ${n}`:t:n||""}var pS=xe({__forward_ref__:xe});function tn(t){return t.__forward_ref__=tn,t}function dt(t){return jf(t)?t():t}function jf(t){return typeof t=="function"&&t.hasOwnProperty(pS)&&t.__forward_ref__===tn}function _(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function Re(t){return{providers:t.providers||[],imports:t.imports||[]}}function Rs(t){return gS(t,Jc)}function Vf(t){return Rs(t)!==null}function gS(t,n){return t.hasOwnProperty(n)&&t[n]||null}function vS(t){let n=t?.[Jc]??null;return n||null}function If(t){return t&&t.hasOwnProperty(Wc)?t[Wc]:null}var Jc=xe({\u0275prov:xe}),Wc=xe({\u0275inj:xe}),b=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=_({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Bf(t){return t&&!!t.\u0275providers}var Hf=xe({\u0275cmp:xe}),zf=xe({\u0275dir:xe}),Uf=xe({\u0275pipe:xe}),$f=xe({\u0275mod:xe}),Ss=xe({\u0275fac:xe}),fr=xe({__NG_ELEMENT_ID__:xe}),w_=xe({__NG_ENV_ID__:xe});function Gf(t){return el(t,"@NgModule"),t[$f]||null}function Xn(t){return el(t,"@Component"),t[Hf]||null}function Wf(t){return el(t,"@Directive"),t[zf]||null}function S_(t){return el(t,"@Pipe"),t[Uf]||null}function el(t,n){if(t==null)throw new E(-919,!1)}function tl(t){return typeof t=="string"?t:t==null?"":String(t)}var I_=xe({ngErrorCode:xe}),_S=xe({ngErrorMessage:xe}),yS=xe({ngTokenPath:xe});function qf(t,n){return M_("",-200,n)}function nl(t,n){throw new E(-201,!1)}function M_(t,n,e){let i=new E(n,t);return i[I_]=n,i[_S]=t,e&&(i[yS]=e),i}function bS(t){return t[I_]}var Mf;function T_(){return Mf}function Gt(t){let n=Mf;return Mf=t,n}function Yf(t,n,e){let i=Rs(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;nl(t,"")}var wS={},ar=wS,CS="__NG_DI_FLAG__",Tf=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=cr(e)||0;try{return this.injector.get(n,i&8?null:ar,i)}catch(r){if(so(r))return r;throw r}}};function ES(t,n=0){let e=$c();if(e===void 0)throw new E(-203,!1);if(e===null)return Yf(t,void 0,n);{let i=DS(n),r=e.retrieve(t,i);if(so(r)){if(i.optional)return null;throw r}return r}}function O(t,n=0){return(T_()||ES)(dt(t),n)}function u(t,n){return O(t,cr(n))}function cr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function DS(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function kf(t){let n=[];for(let e=0;e<t.length;e++){let i=dt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new E(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=xS(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}n.push(O(r,o))}else n.push(O(i))}return n}function xS(t){return t[CS]}function lr(t,n){let e=t.hasOwnProperty(Ss);return e?t[Ss]:null}function k_(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function A_(t){return t.flat(Number.POSITIVE_INFINITY)}function il(t,n){t.forEach(e=>Array.isArray(e)?il(e,n):n(e))}function Qf(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Os(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function R_(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function O_(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function rl(t,n,e){let i=lo(t,n);return i>=0?t[i|1]=e:(i=~i,O_(t,i,n,e)),i}function ol(t,n){let e=lo(t,n);if(e>=0)return t[e|1]}function lo(t,n){return SS(t,n,1)}function SS(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var Ii={},bt=[],Mi=new b(""),Zf=new b("",-1),Kf=new b(""),Is=class{get(n,e=ar){if(e===ar){let r=M_("",-201);throw r.name="\u0275NotFound",r}return e}};function Ti(t){return{\u0275providers:t}}function N_(t){return Ti([{provide:Mi,multi:!0,useValue:t}])}function P_(...t){return{\u0275providers:Xf(!0,t),\u0275fromNgModule:!0}}function Xf(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return il(n,s=>{let a=s;qc(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&F_(r,o),e}function F_(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Jf(r,o=>{n(o,i)})}}function qc(t,n,e,i){if(t=dt(t),!t)return!1;let r=null,o=If(t),s=!o&&Xn(t);if(!o&&!s){let c=t.ngModule;if(o=If(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)qc(l,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;il(o.imports,d=>{qc(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&F_(l,n)}if(!a){let l=lr(r)||(()=>new r);n({provide:r,useFactory:l,deps:bt},r),n({provide:Kf,useValue:r,multi:!0},r),n({provide:Mi,useValue:()=>O(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=t;Jf(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function Jf(t,n){for(let e of t)Bf(e)&&(e=e.\u0275providers),Array.isArray(e)?Jf(e,n):n(e)}var IS=xe({provide:String,useValue:xe});function L_(t){return t!==null&&typeof t=="object"&&IS in t}function MS(t){return!!(t&&t.useExisting)}function TS(t){return!!(t&&t.useFactory)}function dr(t){return typeof t=="function"}function j_(t){return!!t.useClass}var Ns=new b(""),Gc={},C_={},Sf;function uo(){return Sf===void 0&&(Sf=new Is),Sf}var Te=class{},ur=class extends Te{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Rf(n,s=>this.processProvider(s)),this.records.set(Zf,ao(void 0,this)),r.has("environment")&&this.records.set(Te,ao(void 0,this));let o=this.records.get(Ns);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Kf,bt,{self:!0}))}retrieve(n,e){let i=cr(e)||0;try{return this.get(n,ar,i)}catch(r){if(so(r))return r;throw r}}destroy(){xs(this),this._destroyed=!0;let n=V(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),V(n)}}onDestroy(n){return xs(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){xs(this);let e=Ln(this),i=Gt(void 0),r;try{return n()}finally{Ln(e),Gt(i)}}get(n,e=ar,i){if(xs(this),n.hasOwnProperty(w_))return n[w_](this);let r=cr(i),o,s=Ln(this),a=Gt(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=NS(n)&&Rs(n);d&&this.injectableDefInScope(d)?l=ao(Af(n),Gc):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?uo():this.parent;return e=r&8&&e===ar?null:e,c.get(n,e)}catch(c){let l=bS(c);throw l===-200||l===-201?new E(l,null):c}finally{Gt(a),Ln(s)}}resolveInjectorInitializers(){let n=V(null),e=Ln(this),i=Gt(void 0),r;try{let o=this.get(Mi,bt,{self:!0});for(let s of o)s()}finally{Ln(e),Gt(i),V(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=dt(n);let e=dr(n)?n:dt(n&&n.provide),i=AS(n);if(!dr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=ao(void 0,Gc,!0),r.factory=()=>kf(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=V(null);try{if(e.value===C_)throw qf("");return e.value===Gc&&(e.value=C_,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&OS(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{V(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=dt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Af(t){let n=Rs(t),e=n!==null?n.factory:lr(t);if(e!==null)return e;if(t instanceof b)throw new E(-204,!1);if(t instanceof Function)return kS(t);throw new E(-204,!1)}function kS(t){if(t.length>0)throw new E(-204,!1);let e=vS(t);return e!==null?()=>e.factory(t):()=>new t}function AS(t){if(L_(t))return ao(void 0,t.useValue);{let n=eh(t);return ao(n,Gc)}}function eh(t,n,e){let i;if(dr(t)){let r=dt(t);return lr(r)||Af(r)}else if(L_(t))i=()=>dt(t.useValue);else if(TS(t))i=()=>t.useFactory(...kf(t.deps||[]));else if(MS(t))i=(r,o)=>O(dt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=dt(t&&(t.useClass||t.provide));if(RS(t))i=()=>new r(...kf(t.deps));else return lr(r)||Af(r)}return i}function xs(t){if(t.destroyed)throw new E(-205,!1)}function ao(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function RS(t){return!!t.deps}function OS(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function NS(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Rf(t,n){for(let e of t)Array.isArray(e)?Rf(e,n):e&&Bf(e)?Rf(e.\u0275providers,n):n(e)}function ot(t,n){let e;t instanceof ur?(xs(t),e=t):e=new Tf(t);let i,r=Ln(e),o=Gt(void 0);try{return n()}finally{Ln(r),Gt(o)}}function V_(){return T_()!==void 0||$c()!=null}var pn=0,z=1,q=2,et=3,nn=4,St=5,hr=6,fo=7,Ge=8,Jn=9,gn=10,Oe=11,ho=12,th=13,mr=14,It=15,ki=16,pr=17,Bn=18,ei=19,nh=20,Kn=21,sl=22,xi=23,Wt=24,gr=25,Ai=26,We=27,B_=1,ih=6,Ri=7,Ps=8,vr=9,Be=10;function ti(t){return Array.isArray(t)&&typeof t[B_]=="object"}function vn(t){return Array.isArray(t)&&t[B_]===!0}function rh(t){return(t.flags&4)!==0}function ni(t){return t.componentOffset>-1}function Fs(t){return(t.flags&1)===1}function Hn(t){return!!t.template}function mo(t){return(t[q]&512)!==0}function _r(t){return(t[q]&256)===256}var oh="svg",H_="math";function rn(t){for(;Array.isArray(t);)t=t[pn];return t}function sh(t,n){return rn(n[t])}function _n(t,n){return rn(n[t.index])}function al(t,n){return t.data[n]}function z_(t,n){return t[n]}function on(t,n){let e=n[t];return ti(e)?e:e[pn]}function U_(t){return(t[q]&4)===4}function cl(t){return(t[q]&128)===128}function $_(t){return vn(t[et])}function sn(t,n){return n==null?null:t[n]}function ah(t){t[pr]=0}function ch(t){t[q]&1024||(t[q]|=1024,cl(t)&&yr(t))}function G_(t,n){for(;t>0;)n=n[mr],t--;return n}function Ls(t){return!!(t[q]&9216||t[Wt]?.dirty)}function ll(t){t[gn].changeDetectionScheduler?.notify(8),t[q]&64&&(t[q]|=1024),Ls(t)&&yr(t)}function yr(t){t[gn].changeDetectionScheduler?.notify(0);let n=Si(t);for(;n!==null&&!(n[q]&8192||(n[q]|=8192,!cl(n)));)n=Si(n)}function lh(t,n){if(_r(t))throw new E(911,!1);t[Kn]===null&&(t[Kn]=[]),t[Kn].push(n)}function W_(t,n){if(t[Kn]===null)return;let e=t[Kn].indexOf(n);e!==-1&&t[Kn].splice(e,1)}function Si(t){let n=t[et];return vn(n)?n[et]:n}function dh(t){return t[fo]??=[]}function uh(t){return t.cleanup??=[]}function q_(t,n,e,i){let r=dh(n);r.push(e),t.firstCreatePass&&uh(t).push(i,r.length-1)}var se={lFrame:oy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Of=!1;function Y_(){return se.lFrame.elementDepthCount}function Q_(){se.lFrame.elementDepthCount++}function fh(){se.lFrame.elementDepthCount--}function hh(){return se.bindingsEnabled}function mh(){return se.skipHydrationRootTNode!==null}function ph(t){return se.skipHydrationRootTNode===t}function gh(){se.skipHydrationRootTNode=null}function te(){return se.lFrame.lView}function qe(){return se.lFrame.tView}function Mt(t){return se.lFrame.contextLView=t,t[Ge]}function Tt(t){return se.lFrame.contextLView=null,t}function st(){let t=vh();for(;t!==null&&t.type===64;)t=t.parent;return t}function vh(){return se.lFrame.currentTNode}function Z_(){let t=se.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function po(t,n){let e=se.lFrame;e.currentTNode=t,e.isParent=n}function _h(){return se.lFrame.isParent}function yh(){se.lFrame.isParent=!1}function K_(){return se.lFrame.contextLView}function bh(){return Of}function Ms(t){let n=Of;return Of=t,n}function X_(){let t=se.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function J_(t){return se.lFrame.bindingIndex=t}function br(){return se.lFrame.bindingIndex++}function wh(t){let n=se.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function ey(){return se.lFrame.inI18n}function ty(t,n){let e=se.lFrame;e.bindingIndex=e.bindingRootIndex=t,dl(n)}function ny(){return se.lFrame.currentDirectiveIndex}function dl(t){se.lFrame.currentDirectiveIndex=t}function iy(t){let n=se.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function ul(){return se.lFrame.currentQueryIndex}function js(t){se.lFrame.currentQueryIndex=t}function PS(t){let n=t[z];return n.type===2?n.declTNode:n.type===1?t[St]:null}function Ch(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=PS(o),r===null||(o=o[mr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=se.lFrame=ry();return i.currentTNode=n,i.lView=t,!0}function fl(t){let n=ry(),e=t[z];se.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function ry(){let t=se.lFrame,n=t===null?null:t.child;return n===null?oy(t):n}function oy(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function sy(){let t=se.lFrame;return se.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Eh=sy;function hl(){let t=sy();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function ay(t){return(se.lFrame.contextLView=G_(t,se.lFrame.contextLView))[Ge]}function ii(){return se.lFrame.selectedIndex}function Oi(t){se.lFrame.selectedIndex=t}function ml(){let t=se.lFrame;return al(t.tView,t.selectedIndex)}function go(){se.lFrame.currentNamespace=oh}function cy(){return se.lFrame.currentNamespace}var ly=!0;function pl(){return ly}function gl(t){ly=t}function Nf(t,n=null,e=null,i){let r=Dh(t,n,e,i);return r.resolveInjectorInitializers(),r}function Dh(t,n=null,e=null,i,r=new Set){let o=[e||bt,P_(t)],s;return new ur(o,n||uo(),s||null,r)}var re=class t{static THROW_IF_NOT_FOUND=ar;static NULL=new Is;static create(n,e){if(Array.isArray(n))return Nf({name:""},e,n,"");{let i=n.name??"";return Nf({name:i},n.parent,n.providers,i)}}static \u0275prov=_({token:t,providedIn:"any",factory:()=>O(Zf)});static __NG_ELEMENT_ID__=-1},P=new b(""),at=(()=>{class t{static __NG_ELEMENT_ID__=FS;static __NG_ENV_ID__=e=>e}return t})(),Yc=class extends at{_lView;constructor(n){super(),this._lView=n}get destroyed(){return _r(this._lView)}onDestroy(n){let e=this._lView;return lh(e,n),()=>W_(e,n)}};function FS(){return new Yc(te())}var dy=!1,uy=new b(""),ri=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Ue(!1);debugTaskTracker=u(uy,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new K(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Pf=class extends M{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,V_()&&(this.destroyRef=u(at,{optional:!0})??void 0,this.pendingTasks=u(ri,{optional:!0})??void 0)}emit(n){let e=V(null);try{super.next(n)}finally{V(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof Me&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},ue=Pf;function Qc(...t){}function xh(t){let n,e;function i(){t=Qc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function fy(t){return queueMicrotask(()=>t()),()=>{t=Qc}}var Sh="isAngularZone",Ts=Sh+"_ID",LS=0,T=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new ue(!1);onMicrotaskEmpty=new ue(!1);onStable=new ue(!1);onError=new ue(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=dy}=n;if(typeof Zone>"u")throw new E(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,BS(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Sh)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new E(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new E(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,jS,Qc,Qc);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},jS={};function Ih(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function VS(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){xh(()=>{t.callbackScheduled=!1,Ff(t),t.isCheckStableRunning=!0,Ih(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Ff(t)}function BS(t){let n=()=>{VS(t)},e=LS++;t._inner=t._inner.fork({name:"angular",properties:{[Sh]:!0,[Ts]:e,[Ts+e]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(HS(c))return i.invokeTask(o,s,a,c);try{return E_(t),i.invokeTask(o,s,a,c)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),D_(t)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return E_(t),i.invoke(o,s,a,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!zS(c)&&n(),D_(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,Ff(t),Ih(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function Ff(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function E_(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function D_(t){t._nesting--,Ih(t)}var ks=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new ue;onMicrotaskEmpty=new ue;onStable=new ue;onError=new ue;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function HS(t){return hy(t,"__ignore_ng_zone__")}function zS(t){return hy(t,"__scheduler_tick__")}function hy(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Ft=class{_console=console;handleError(n){this._console.error("ERROR",n)}},an=new b("",{factory:()=>{let t=u(T),n=u(Te),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Ft),e.handleError(i))})}}}),my={provide:Mi,useValue:()=>{let t=u(Ft,{optional:!0})},multi:!0},US=new b("",{factory:()=>{let t=u(P).defaultView;if(!t)return;let n=u(an),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(at).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Mh(){return Ti([N_(()=>{u(US)})])}function Y(t,n){let[e,i,r]=uf(t,n?.equal),o=e,s=o[Je];return o.set=i,o.update=r,o.asReadonly=py.bind(o),o}function py(){let t=this[Je];if(t.readonlyFn===void 0){let n=()=>this();n[Je]=t,t.readonlyFn=n}return t.readonlyFn}var vo=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=$S}return t})();function $S(){return new vo(te(),st())}var jn=class{},Vs=new b("",{factory:()=>!0});var Th=new b(""),Bs=(()=>{class t{internalPendingTasks=u(ri);scheduler=u(jn);errorHandler=u(an);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),vl=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:()=>new Lf})}return t})(),Lf=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Zc=class{[Je];constructor(n){this[Je]=n}destroy(){this[Je].destroy()}};function kt(t,n){let e=n?.injector??u(re),i=n?.manualCleanup!==!0?e.get(at):null,r,o=e.get(vo,null,{optional:!0}),s=e.get(jn);return o!==null?(r=qS(o.view,s,t),i instanceof Yc&&i._lView===o.view&&(i=null)):r=YS(t,e.get(vl),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Zc(r)}var gy=G(y({},hf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Ms(!1);try{mf(this)}finally{Ms(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=V(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],V(t)}}}),GS=G(y({},gy),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Ei(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),WS=G(y({},gy),{consumerMarkedDirty(){this.view[q]|=8192,yr(this.view),this.notifier.notify(13)},destroy(){if(Ei(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[xi]?.delete(this)}});function qS(t,n,e){let i=Object.create(WS);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=vy(i,e),t[xi]??=new Set,t[xi].add(i),i.consumerMarkedDirty(i),i}function YS(t,n,e){let i=Object.create(GS);return i.fn=vy(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function vy(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Ks(t){return{toString:t}.toString()}function tI(t){return typeof t=="function"}function Ky(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Sl=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},ut=(()=>{let t=()=>Xy;return t.ngInherit=!0,t})();function Xy(t){return t.type.prototype.ngOnChanges&&(t.setInput=iI),nI}function nI(){let t=eb(this),n=t?.current;if(n){let e=t.previous;if(e===Ii)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function iI(t,n,e,i,r){let o=this.declaredInputs[i],s=eb(t)||rI(t,{previous:Ii,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new Sl(l&&l.currentValue,e,c===Ii),Ky(t,n,r,e)}var Jy="__ngSimpleChanges__";function eb(t){return t[Jy]||null}function rI(t,n){return t[Jy]=n}var _y=[];var Se=function(t,n=null,e){for(let i=0;i<_y.length;i++){let r=_y[i];r(t,n,e)}},ye=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(ye||{});function oI(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=Xy(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function tb(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function wl(t,n,e){nb(t,n,3,e)}function Cl(t,n,e,i){(t[q]&3)===e&&nb(t,n,e,i)}function kh(t,n){let e=t[q];(e&3)===n&&(e&=16383,e+=1,t[q]=e)}function nb(t,n,e,i){let r=i!==void 0?t[pr]&65535:0,o=i??-1,s=n.length-1,a=0;for(let c=r;c<s;c++)if(typeof n[c+1]=="number"){if(a=n[c],i!=null&&a>=i)break}else n[c]<0&&(t[pr]+=65536),(a<o||o==-1)&&(sI(t,e,n,c),t[pr]=(t[pr]&4294901760)+c+2),c++}function yy(t,n){Se(ye.LifecycleHookStart,t,n);let e=V(null);try{n.call(t)}finally{V(e),Se(ye.LifecycleHookEnd,t,n)}}function sI(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[q]>>14<t[pr]>>16&&(t[q]&3)===n&&(t[q]+=16384,yy(a,o)):yy(a,o)}var yo=-1,Cr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function aI(t){return(t.flags&8)!==0}function cI(t){return(t.flags&16)!==0}function lI(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];dI(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function ib(t){return t===3||t===4||t===6}function dI(t){return t.charCodeAt(0)===64}function bo(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?by(t,e,r,null,n[++i]):by(t,e,r,null,null))}}return t}function by(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function rb(t){return t!==yo}function Il(t){return t&32767}function uI(t){return t>>16}function Ml(t,n){let e=uI(t),i=n;for(;e>0;)i=i[mr],e--;return i}var Bh=!0;function wy(t){let n=Bh;return Bh=t,n}var fI=256,ob=fI-1,sb=5,hI=0,zn={};function mI(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(fr)&&(i=e[fr]),i==null&&(i=e[fr]=hI++);let r=i&ob,o=1<<r;n.data[t+(r>>sb)]|=o}function Tl(t,n){let e=ab(t,n);if(e!==-1)return e;let i=n[z];i.firstCreatePass&&(t.injectorIndex=n.length,Ah(i.data,t),Ah(n,null),Ah(i.blueprint,null));let r=Cm(t,n),o=t.injectorIndex;if(rb(r)){let s=Il(r),a=Ml(r,n),c=a[z].data;for(let l=0;l<8;l++)n[o+l]=a[s+l]|c[s+l]}return n[o+8]=r,o}function Ah(t,n){t.push(0,0,0,0,0,0,0,0,n)}function ab(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Cm(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=fb(r),i===null)return yo;if(e++,r=r[mr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return yo}function Hh(t,n,e){mI(t,n,e)}function pI(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(ib(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function cb(t,n,e){if(e&8||t!==void 0)return t;nl(n,"NodeInjector")}function lb(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Jn],o=Gt(void 0);try{return r?r.get(n,i,e&8):Yf(n,i,e&8)}finally{Gt(o)}}return cb(i,n,e)}function db(t,n,e,i=0,r){if(t!==null){if(n[q]&2048&&!(i&2)){let s=yI(t,n,e,i,zn);if(s!==zn)return s}let o=ub(t,n,e,i,zn);if(o!==zn)return o}return lb(n,e,i,r)}function ub(t,n,e,i,r){let o=vI(e);if(typeof o=="function"){if(!Ch(n,t,i))return i&1?cb(r,e,i):lb(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))nl(e);else return s}finally{Eh()}}else if(typeof o=="number"){let s=null,a=ab(t,n),c=yo,l=i&1?n[It][St]:null;for((a===-1||i&4)&&(c=a===-1?Cm(t,n):n[a+8],c===yo||!Ey(i,!1)?a=-1:(s=n[z],a=Il(c),n=Ml(c,n)));a!==-1;){let d=n[z];if(Cy(o,a,d.data)){let f=gI(a,n,e,s,i,l);if(f!==zn)return f}c=n[a+8],c!==yo&&Ey(i,n[z].data[a+8]===l)&&Cy(o,a,n)?(s=d,a=Il(c),n=Ml(c,n)):a=-1}}return r}function gI(t,n,e,i,r,o){let s=n[z],a=s.data[t+8],c=i==null?ni(a)&&Bh:i!=s&&(a.type&3)!==0,l=r&1&&o===a,d=El(a,s,e,c,l);return d!==null?$s(n,s,d,a,r):zn}function El(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,f=i?a:a+d,m=r?a+d:l;for(let h=f;h<m;h++){let p=s[h];if(h<c&&e===p||h>=c&&p.type===e)return h}if(r){let h=s[c];if(h&&Hn(h)&&h.type===e)return c}return null}function $s(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof Cr){let a=o;if(a.resolving)throw qf("");let c=wy(a.canSeeViewProviders);a.resolving=!0;let l=s[e].type||s[e],d,f=a.injectImpl?Gt(a.injectImpl):null,m=Ch(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&oI(e,s[e],n)}finally{f!==null&&Gt(f),wy(c),a.resolving=!1,Eh()}}return o}function vI(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(fr)?t[fr]:void 0;return typeof n=="number"?n>=0?n&ob:_I:n}function Cy(t,n,e){let i=1<<t;return!!(e[n+(t>>sb)]&i)}function Ey(t,n){return!(t&2)&&!(t&1&&n)}var wr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return db(this._tNode,this._lView,n,cr(i),e)}};function _I(){return new wr(st(),te())}function be(t){return Ks(()=>{let n=t.prototype.constructor,e=n[Ss]||zh(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Ss]||zh(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function zh(t){return jf(t)?()=>{let n=zh(dt(t));return n&&n()}:lr(t)}function yI(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[q]&2048&&!mo(s);){let a=ub(o,s,e,i|2,zn);if(a!==zn)return a;let c=o.parent;if(!c){let l=s[nh];if(l){let d=l.get(e,zn,i&-5);if(d!==zn)return d}c=fb(s),s=s[mr]}o=c}return r}function fb(t){let n=t[z],e=n.type;return e===2?n.declTNode:e===1?t[St]:null}function zl(t){return pI(st(),t)}function bI(){return Do(st(),te())}function Do(t,n){return new F(_n(t,n))}var F=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=bI}return t})();function hb(t){return t instanceof F?t.nativeElement:t}function wI(){return this._results[Symbol.iterator]()}var Er=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new M}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=A_(n);(this._changesDetected=!k_(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=wI};function mb(t){return(t.flags&128)===128}var Em=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Em||{}),pb=new Map,CI=0;function EI(){return CI++}function DI(t){pb.set(t[ei],t)}function Uh(t){pb.delete(t[ei])}var Dy="__ngContext__";function wo(t,n){ti(n)?(t[Dy]=n[ei],DI(n)):t[Dy]=n}function gb(t){return _b(t[ho])}function vb(t){return _b(t[nn])}function _b(t){for(;t!==null&&!vn(t);)t=t[nn];return t}var xI;function Dm(t){xI=t}var Pi=new b("",{factory:()=>SI}),SI="ng";var Ul=new b(""),Ir=new b("",{providedIn:"platform",factory:()=>"unknown"}),Fi=new b(""),xo=new b("",{factory:()=>u(P).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var yb="r";var bb="di";var wb=!1,Cb=new b("",{factory:()=>wb});var II=(t,n,e,i)=>{};function MI(t,n,e,i){II(t,n,e,i)}function $l(t){return(t.flags&32)===32}var TI=()=>null;function Eb(t,n,e=!1){return TI(t,n,e)}function Db(t,n){let e=t.contentQueries;if(e!==null){let i=V(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];js(o),a.contentQueries(2,n[s],s)}}}finally{V(i)}}}function $h(t,n,e){js(0);let i=V(null);try{n(t,e)}finally{V(i)}}function xb(t,n,e){if(rh(n)){let i=V(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let c=e[s];a.contentQueries(1,c,s)}}}finally{V(i)}}}var wn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(wn||{});var _l;function kI(){if(_l===void 0&&(_l=null,co.trustedTypes))try{_l=co.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return _l}function Gl(t){return kI()?.createHTML(t)||t}var oi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Kc})`}},Gh=class extends oi{getTypeName(){return"HTML"}},Wh=class extends oi{getTypeName(){return"Style"}},qh=class extends oi{getTypeName(){return"Script"}},Yh=class extends oi{getTypeName(){return"URL"}},Qh=class extends oi{getTypeName(){return"ResourceURL"}};function Cn(t){return t instanceof oi?t.changingThisBreaksApplicationSecurity:t}function Li(t,n){let e=Sb(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Kc})`)}return e===n}function Sb(t){return t instanceof oi&&t.getTypeName()||null}function xm(t){return new Gh(t)}function Sm(t){return new Wh(t)}function Im(t){return new qh(t)}function Mm(t){return new Yh(t)}function Tm(t){return new Qh(t)}function AI(t){let n=new Kh(t);return RI()?new Zh(n):n}var Zh=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Gl(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},Kh=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Gl(n),e}};function RI(){try{return!!new window.DOMParser().parseFromString(Gl(""),"text/html")}catch{return!1}}var OI=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Xs(t){return t=String(t),t.match(OI)?t:"unsafe:"+t}function ci(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Js(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var Ib=ci("area,br,col,hr,img,wbr"),Mb=ci("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Tb=ci("rp,rt"),NI=Js(Tb,Mb),PI=Js(Mb,ci("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),FI=Js(Tb,ci("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),xy=Js(Ib,PI,FI,NI),kb=ci("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),LI=ci("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),jI=ci("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),VI=Js(kb,LI,jI),BI=ci("script,style,template");var Xh=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=UI(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=zI(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=Sy(n).toLowerCase();if(!xy.hasOwnProperty(e))return this.sanitizedSomething=!0,!BI.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!VI.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=o.value;kb[a]&&(c=Xs(c)),this.buf.push(" ",s,'="',Iy(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=Sy(n).toLowerCase();xy.hasOwnProperty(e)&&!Ib.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Iy(n))}};function HI(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function zI(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw Ab(n);return n}function UI(t){let n=t.firstChild;if(n&&HI(t,n))throw Ab(n);return n}function Sy(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function Ab(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var $I=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,GI=/([^\#-~ |!])/g;function Iy(t){return t.replace(/&/g,"&amp;").replace($I,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(GI,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var yl;function km(t,n){let e=null;try{yl=yl||AI(t);let i=n?String(n):"";e=yl.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=yl.getInertBodyElement(i)}while(i!==o);let a=new Xh().sanitizeChildren(My(e)||e);return Gl(a)}finally{if(e){let i=My(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function My(t){return"content"in t&&WI(t)?t.content:null}function WI(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function qI(t,n){return t.createText(n)}function YI(t,n,e){t.setValue(n,e)}function Rb(t,n,e){return t.createElement(n,e)}function kl(t,n,e,i,r){t.insertBefore(n,e,i,r)}function Ob(t,n,e){t.appendChild(n,e)}function Ty(t,n,e,i,r){i!==null?kl(t,n,e,i,r):Ob(t,n,e)}function Nb(t,n,e,i){t.removeChild(null,n,e,i)}function QI(t,n,e){t.setAttribute(n,"style",e)}function ZI(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Pb(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&lI(t,n,i),r!==null&&ZI(t,n,r),o!==null&&QI(t,n,o)}var wt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(wt||{});function ji(t){let n=KI();return n?n.sanitize(wt.URL,t)||"":Li(t,"URL")?Cn(t):Xs(tl(t))}function KI(){let t=te();return t&&t[gn].sanitizer}function Am(t){return t.ownerDocument.defaultView}function Fb(t){return t instanceof Function?t():t}function XI(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Lb="ng-template";function JI(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&XI(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Rm(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Rm(t){return t.type===4&&t.value!==Lb}function eM(t,n,e){let i=t.type===4&&!e?Lb:t.value;return n===i}function tM(t,n,e){let i=4,r=t.attrs,o=r!==null?rM(r):0,s=!1;for(let a=0;a<n.length;a++){let c=n[a];if(typeof c=="number"){if(!s&&!yn(i)&&!yn(c))return!1;if(s&&yn(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!eM(t,c,e)||c===""&&n.length===1){if(yn(i))return!1;s=!0}}else if(i&8){if(r===null||!JI(t,r,c,e)){if(yn(i))return!1;s=!0}}else{let l=n[++a],d=nM(c,r,Rm(t),e);if(d===-1){if(yn(i))return!1;s=!0;continue}if(l!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&l!==f){if(yn(i))return!1;s=!0}}}}return yn(i)||s}function yn(t){return(t&1)===0}function nM(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return oM(n,t)}function jb(t,n,e=!1){for(let i=0;i<n.length;i++)if(tM(t,n[i],e))return!0;return!1}function iM(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function rM(t){for(let n=0;n<t.length;n++){let e=t[n];if(ib(e))return n}return t.length}function oM(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function sM(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function ky(t,n){return t?":not("+n.trim()+")":n}function aM(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!yn(s)&&(n+=ky(o,r),r=""),i=s,o=o||!yn(i);e++}return r!==""&&(n+=ky(o,r)),n}function cM(t){return t.map(aM).join(",")}function lM(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!yn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var cn={};function Om(t,n,e,i,r,o,s,a,c,l,d){let f=We+i,m=f+r,h=dM(f,m),p=typeof l=="function"?l():l;return h[z]={type:t,blueprint:h,template:e,queries:null,viewQuery:a,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:p,incompleteFirstPass:!1,ssrId:d}}function dM(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:cn);return e}function uM(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Om(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Nm(t,n,e,i,r,o,s,a,c,l,d){let f=n.blueprint.slice();return f[pn]=r,f[q]=i|4|128|8|64|1024,(l!==null||t&&t[q]&2048)&&(f[q]|=2048),ah(f),f[et]=f[mr]=t,f[Ge]=e,f[gn]=s||t&&t[gn],f[Oe]=a||t&&t[Oe],f[Jn]=c||t&&t[Jn]||null,f[St]=o,f[ei]=EI(),f[hr]=d,f[nh]=l,f[It]=n.type==2?t[It]:f,f}function fM(t,n,e){let i=_n(n,t),r=uM(e),o=t[gn].rendererFactory,s=Pm(t,Nm(t,r,null,Vb(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function Vb(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function Bb(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Pm(t,n){return t[ho]?t[th][nn]=n:t[ho]=n,t[th]=n,n}function C(t=1){Hb(qe(),te(),ii()+t,!1)}function Hb(t,n,e,i){if(!i)if((n[q]&3)===3){let o=t.preOrderCheckHooks;o!==null&&wl(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Cl(n,o,0,e)}Oi(e)}var Wl=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Wl||{});function Jh(t,n,e,i){let r=V(null);try{let[o,s,a]=t.inputs[e],c=null;(s&Wl.SignalBased)!==0&&(c=n[o][Je]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):Ky(n,c,o,i)}finally{V(r)}}var Un=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Un||{}),hM;function Fm(t,n){return hM(t,n)}var Y$=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var em=new WeakMap,Hs=new WeakSet;function mM(t,n){let e=em.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),Hs.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function pM(t,n){let e=em.get(t);e?e.includes(n)||e.push(n):em.set(t,[n])}var Dr=new Set,ql=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(ql||{}),En=new b(""),Ay=new Set;function Dn(t){Ay.has(t)||(Ay.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Yl=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Lm=[0,1,2,3],jm=(()=>{class t{ngZone=u(T);scheduler=u(jn);errorHandler=u(Ft,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(En,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Se(ye.AfterRenderHooksStart),this.executing=!0;for(let i of Lm)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Se(ye.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[gr]??=[]).push(e),yr(i),i[q]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(ql.AFTER_NEXT_RENDER,e):e()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Gs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[gr];n&&(this.view[gr]=n.filter(e=>e!==this))}};function ft(t,n){let e=n?.injector??u(re);return Dn("NgAfterNextRender"),vM(t,e,n,!0)}function gM(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function vM(t,n,e,i){let r=n.get(Yl);r.impl??=n.get(jm);let o=n.get(En,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(at):null,a=n.get(vo,null,{optional:!0}),c=new Gs(r.impl,gM(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(c),c}var zb=new b("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Te)})});function Ub(t,n,e){let i=t.get(zb);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function _M(t,n){let e=t.get(zb);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function yM(t,n){for(let[e,i]of n)Ub(t,i.animateFns)}function Ry(t,n,e,i){let r=t?.[Ai]?.enter;n!==null&&r&&r.has(e.index)&&yM(i,r)}function _o(t,n,e,i,r,o,s,a){if(r!=null){let c,l=!1;vn(r)?c=r:ti(r)&&(l=!0,r=r[pn]);let d=rn(r);t===0&&i!==null?(Ry(a,i,o,e),s==null?Ob(n,i,d):kl(n,i,d,s||null,!0)):t===1&&i!==null?(Ry(a,i,o,e),kl(n,i,d,s||null,!0),mM(o,d)):t===2?(a?.[Ai]?.leave?.has(o.index)&&pM(o,d),Hs.delete(d),Oy(a,o,e,f=>{if(Hs.has(d)){Hs.delete(d);return}Nb(n,d,l,f)})):t===3&&(Hs.delete(d),Oy(a,o,e,()=>{n.destroyNode(d)})),c!=null&&kM(n,t,e,c,o,i,s)}}function bM(t,n){$b(t,n),n[pn]=null,n[St]=null}function wM(t,n,e,i,r,o){i[pn]=r,i[St]=n,Zl(t,i,e,1,r,o)}function $b(t,n){n[gn].changeDetectionScheduler?.notify(9),Zl(t,n,n[Oe],2,null,null)}function CM(t){let n=t[ho];if(!n)return Rh(t[z],t);for(;n;){let e=null;if(ti(n))e=n[ho];else{let i=n[Be];i&&(e=i)}if(!e){for(;n&&!n[nn]&&n!==t;)ti(n)&&Rh(n[z],n),n=n[et];n===null&&(n=t),ti(n)&&Rh(n[z],n),e=n&&n[nn]}n=e}}function Vm(t,n){let e=t[vr],i=e.indexOf(n);e.splice(i,1)}function Ql(t,n){if(_r(n))return;let e=n[Oe];e.destroyNode&&Zl(t,n,e,3,null,null),CM(n)}function Rh(t,n){if(_r(n))return;let e=V(null);try{n[q]&=-129,n[q]|=256,n[Wt]&&Ei(n[Wt]),xM(t,n),DM(t,n),n[z].type===1&&n[Oe].destroy();let i=n[ki];if(i!==null&&vn(n[et])){i!==n[et]&&Vm(i,n);let r=n[Bn];r!==null&&r.detachView(t)}Uh(n)}finally{V(e)}}function Oy(t,n,e,i){let r=t?.[Ai];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Dr.add(t[ei]),Ub(e,()=>{if(r.leave&&r.leave.has(n.index)){let s=r.leave.get(n.index),a=[];if(s){for(let c=0;c<s.animateFns.length;c++){let l=s.animateFns[c],{promise:d}=l();a.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),EM(t,i)}else t&&Dr.delete(t[ei]),i(!1)},r)}function EM(t,n){let e=t[Ai]?.running;if(e){e.then(()=>{t[Ai].running=void 0,Dr.delete(t[ei]),n(!0)});return}n(!1)}function DM(t,n){let e=t.cleanup,i=n[fo];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[fo]=null);let r=n[Kn];if(r!==null){n[Kn]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[xi];if(o!==null){n[xi]=null;for(let s of o)s.destroy()}}function xM(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Cr)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];Se(ye.LifecycleHookStart,a,c);try{c.call(a)}finally{Se(ye.LifecycleHookEnd,a,c)}}else{Se(ye.LifecycleHookStart,r,o);try{o.call(r)}finally{Se(ye.LifecycleHookEnd,r,o)}}}}}function Gb(t,n,e){return SM(t,n.parent,e)}function SM(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[pn];if(ni(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===wn.None||r===wn.Emulated)return null}return _n(i,e)}function Wb(t,n,e){return MM(t,n,e)}function IM(t,n,e){return t.type&40?_n(t,e):null}var MM=IM,Ny;function Bm(t,n,e,i){let r=Gb(t,i,n),o=n[Oe],s=i.parent||n[St],a=Wb(s,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)Ty(o,r,e[c],a,!1);else Ty(o,r,e,a,!1);Ny!==void 0&&Ny(o,i,n,e,r)}function zs(t,n){if(n!==null){let e=n.type;if(e&3)return _n(n,t);if(e&4)return tm(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return zs(t,i);{let r=t[n.index];return vn(r)?tm(-1,r):rn(r)}}else{if(e&128)return zs(t,n.next);if(e&32)return Fm(n,t)()||rn(t[n.index]);{let i=qb(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Si(t[It]);return zs(r,i)}else return zs(t,n.next)}}}return null}function qb(t,n){if(n!==null){let i=t[It][St],r=n.projection;return i.projection[r]}return null}function tm(t,n){let e=Be+t+1;if(e<n.length){let i=n[e],r=i[z].firstChild;if(r!==null)return zs(i,r)}return n[Ri]}function Hm(t,n,e,i,r,o,s){for(;e!=null;){let a=i[Jn];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(s&&n===0&&(c&&wo(rn(c),i),e.flags|=2),!$l(e))if(l&8)Hm(t,n,e.child,i,r,o,!1),_o(n,t,a,r,c,e,o,i);else if(l&32){let d=Fm(e,i),f;for(;f=d();)_o(n,t,a,r,f,e,o,i);_o(n,t,a,r,c,e,o,i)}else l&16?Yb(t,n,i,e,r,o):_o(n,t,a,r,c,e,o,i);e=s?e.projectionNext:e.next}}function Zl(t,n,e,i,r,o){Hm(e,i,t.firstChild,n,r,o,!1)}function TM(t,n,e){let i=n[Oe],r=Gb(t,e,n),o=e.parent||n[St],s=Wb(o,e,n);Yb(i,0,n,e,r,s)}function Yb(t,n,e,i,r,o){let s=e[It],c=s[St].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];_o(n,t,e[Jn],r,d,i,o,e)}else{let l=c,d=s[et];mb(i)&&(l.flags|=128),Hm(t,n,l,d,r,o,!0)}}function kM(t,n,e,i,r,o,s){let a=i[Ri],c=rn(i);a!==c&&_o(n,t,e,o,a,r,s);for(let l=Be;l<i.length;l++){let d=i[l];Zl(d[z],d,t,n,o,a)}}function AM(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Un.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Un.Important),t.setStyle(e,i,r,o))}}function Qb(t,n,e,i,r){let o=ii(),s=i&2;try{Oi(-1),s&&n.length>We&&Hb(t,n,We,!1);let a=s?ye.TemplateUpdateStart:ye.TemplateCreateStart;Se(a,r,e),e(i,r)}finally{Oi(o);let a=s?ye.TemplateUpdateEnd:ye.TemplateCreateEnd;Se(a,r,e)}}function zm(t,n,e){jM(t,n,e),(e.flags&64)===64&&VM(t,n,e)}function Kl(t,n,e=_n){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function RM(t,n,e,i){let o=i.get(Cb,wb)||e===wn.ShadowDom||e===wn.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return OM(s),s}function OM(t){NM(t)}var NM=()=>null;function PM(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function FM(t,n,e,i,r,o){let s=n[z];if(Um(t,s,n,e,i)){ni(t)&&LM(n,t.index);return}t.type&3&&(e=PM(e)),Zb(t,n,e,i,r,o)}function Zb(t,n,e,i,r,o){if(t.type&3){let s=_n(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function LM(t,n){let e=on(n,t);e[q]&16||(e[q]|=64)}function jM(t,n,e){let i=e.directiveStart,r=e.directiveEnd;ni(e)&&fM(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Tl(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],c=$s(n,t,s,e);if(wo(c,n),o!==null&&UM(n,s-i,c,a,e,o),Hn(a)){let l=on(e.index,n);l[Ge]=$s(n,t,s,e)}}}function VM(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=ny();try{Oi(o);for(let a=i;a<r;a++){let c=t.data[a],l=n[a];dl(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&BM(c,l)}}finally{Oi(-1),dl(s)}}function BM(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Kb(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];jb(n,o.selectors,!1)&&(i??=[],Hn(o)?i.unshift(o):i.push(o))}return i}function HM(t,n,e,i,r,o){let s=_n(t,n);zM(n[Oe],s,o,t.value,e,i,r)}function zM(t,n,e,i,r,o,s){if(o==null)t.removeAttribute(n,r,e);else{let a=s==null?tl(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function UM(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];Jh(i,e,c,l)}}function Xb(t,n,e,i,r){let o=We+e,s=n[z],a=r(s,n,t,i,e);n[o]=a,po(t,!0);let c=t.type===2;return c?(Pb(n[Oe],a,t),(Y_()===0||Fs(t))&&wo(a,n),Q_()):wo(a,n),pl()&&(!c||!$l(t))&&Bm(s,n,a,t),t}function Jb(t){let n=t;return _h()?yh():(n=n.parent,po(n,!1)),n}function $M(t,n){let e=t[Jn];if(!e)return;let i;try{i=e.get(an,null)}catch{i=null}i?.(n)}function Um(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],f=n.data[l];Jh(f,e[l],d,r),a=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];Jh(d,l,i,r),a=!0}return a}function GM(t,n){let e=on(n,t),i=e[z];WM(i,e);let r=e[pn];r!==null&&e[hr]===null&&(e[hr]=Eb(r,e[Jn])),Se(ye.ComponentStart);try{$m(i,e,e[Ge])}finally{Se(ye.ComponentEnd,e[Ge])}}function WM(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function $m(t,n,e){fl(n);try{let i=t.viewQuery;i!==null&&$h(1,i,e);let r=t.template;r!==null&&Qb(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Bn]?.finishViewCreation(t),t.staticContentQueries&&Db(t,n),t.staticViewQueries&&$h(2,t.viewQuery,e);let o=t.components;o!==null&&qM(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[q]&=-5,hl()}}function qM(t,n){for(let e=0;e<n.length;e++)GM(t,n[e])}function ea(t,n,e,i){let r=V(null);try{let o=n.tView,a=t[q]&4096?4096:16,c=Nm(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[ki]=l;let d=t[Bn];return d!==null&&(c[Bn]=d.createEmbeddedView(o)),$m(o,c,e),c}finally{V(r)}}function Co(t,n){return!n||n.firstChild===null||mb(t)}function Ws(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(rn(o)),vn(o)&&ew(o,i);let s=e.type;if(s&8)Ws(t,n,e.child,i);else if(s&32){let a=Fm(e,n),c;for(;c=a();)i.push(c)}else if(s&16){let a=qb(n,e);if(Array.isArray(a))i.push(...a);else{let c=Si(n[It]);Ws(c[z],c,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function ew(t,n){for(let e=Be;e<t.length;e++){let i=t[e],r=i[z].firstChild;r!==null&&Ws(i[z],i,r,n)}t[Ri]!==t[pn]&&n.push(t[Ri])}function tw(t){if(t[gr]!==null){for(let n of t[gr])n.impl.addSequence(n);t[gr].length=0}}var nw=[];function YM(t){return t[Wt]??QM(t)}function QM(t){let n=nw.pop()??Object.create(KM);return n.lView=t,n}function ZM(t){t.lView[Wt]!==t&&(t.lView=null,nw.push(t))}var KM=G(y({},Qi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{yr(t.lView)},consumerOnSignalRead(){this.lView[Wt]=this}});function XM(t){let n=t[Wt]??Object.create(JM);return n.lView=t,n}var JM=G(y({},Qi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Si(t.lView);for(;n&&!iw(n[z]);)n=Si(n);n&&ch(n)},consumerOnSignalRead(){this.lView[Wt]=this}});function iw(t){return t.type!==2}function rw(t){if(t[xi]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[xi])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[q]&8192)}}var eT=100;function ow(t,n=0){let i=t[gn].rendererFactory,r=!1;r||i.begin?.();try{tT(t,n)}finally{r||i.end?.()}}function tT(t,n){let e=bh();try{Ms(!0),nm(t,n);let i=0;for(;Ls(t);){if(i===eT)throw new E(103,!1);i++,nm(t,1)}}finally{Ms(e)}}function nT(t,n,e,i){if(_r(n))return;let r=n[q],o=!1,s=!1;fl(n);let a=!0,c=null,l=null;o||(iw(t)?(l=YM(n),c=Ci(l)):cc()===null?(a=!1,l=XM(n),c=Ci(l)):n[Wt]&&(Ei(n[Wt]),n[Wt]=null));try{ah(n),J_(t.bindingStartIndex),e!==null&&Qb(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&wl(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Cl(n,h,0,null),kh(n,0)}if(s||iT(n),rw(n),sw(n,0),t.contentQueries!==null&&Db(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&wl(n,h)}else{let h=t.contentHooks;h!==null&&Cl(n,h,1),kh(n,1)}oT(t,n);let f=t.components;f!==null&&cw(n,f,0);let m=t.viewQuery;if(m!==null&&$h(2,m,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&wl(n,h)}else{let h=t.viewHooks;h!==null&&Cl(n,h,2),kh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[sl]){for(let h of n[sl])h();n[sl]=null}o||(tw(n),n[q]&=-73)}catch(d){throw o||yr(n),d}finally{l!==null&&(Ki(l,c),a&&ZM(l)),hl()}}function sw(t,n){for(let e=gb(t);e!==null;e=vb(e))for(let i=Be;i<e.length;i++){let r=e[i];aw(r,n)}}function iT(t){for(let n=gb(t);n!==null;n=vb(n)){if(!(n[q]&2))continue;let e=n[vr];for(let i=0;i<e.length;i++){let r=e[i];ch(r)}}}function rT(t,n,e){Se(ye.ComponentStart);let i=on(n,t);try{aw(i,e)}finally{Se(ye.ComponentEnd,i[Ge])}}function aw(t,n){cl(t)&&nm(t,n)}function nm(t,n){let i=t[z],r=t[q],o=t[Wt],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&Kr(o)),s||=!1,o&&(o.dirty=!1),t[q]&=-9217,s)nT(i,t,i.template,t[Ge]);else if(r&8192){let a=V(null);try{rw(t),sw(t,1);let c=i.components;c!==null&&cw(t,c,1),tw(t)}finally{V(a)}}}function cw(t,n,e){for(let i=0;i<n.length;i++)rT(t,n[i],e)}function oT(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Oi(~r);else{let o=r,s=e[++i],a=e[++i];ty(s,o);let c=n[o];Se(ye.HostBindingsUpdateStart,c);try{a(2,c)}finally{Se(ye.HostBindingsUpdateEnd,c)}}}}finally{Oi(-1)}}function Gm(t,n){let e=bh()?64:1088;for(t[gn].changeDetectionScheduler?.notify(n);t;){t[q]|=e;let i=Si(t);if(mo(t)&&!i)return t;t=i}return null}function lw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function dw(t,n){let e=Be+n;if(e<t.length)return t[e]}function ta(t,n,e,i=!0){let r=n[z];if(sT(r,n,t,e),i){let s=tm(e,t),a=n[Oe],c=a.parentNode(t[Ri]);c!==null&&wM(r,t[St],a,n,c,s)}let o=n[hr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function uw(t,n){let e=qs(t,n);return e!==void 0&&Ql(e[z],e),e}function qs(t,n){if(t.length<=Be)return;let e=Be+n,i=t[e];if(i){let r=i[ki];r!==null&&r!==t&&Vm(r,i),n>0&&(t[e-1][nn]=i[nn]);let o=Os(t,Be+n);bM(i[z],i);let s=o[Bn];s!==null&&s.detachView(o[z]),i[et]=null,i[nn]=null,i[q]&=-129}return i}function sT(t,n,e,i){let r=Be+i,o=e.length;i>0&&(e[r-1][nn]=n),i<o-Be?(n[nn]=e[r],Qf(e,Be+i,n)):(e.push(n),n[nn]=null),n[et]=e;let s=n[ki];s!==null&&e!==s&&fw(s,n);let a=n[Bn];a!==null&&a.insertView(t),ll(n),n[q]|=128}function fw(t,n){let e=t[vr],i=n[et];if(ti(i))t[q]|=2;else{let r=i[et][It];n[It]!==r&&(t[q]|=2)}e===null?t[vr]=[n]:e.push(n)}var Ni=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[z];return Ws(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Ge]}set context(n){this._lView[Ge]=n}get destroyed(){return _r(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[et];if(vn(n)){let e=n[Ps],i=e?e.indexOf(this):-1;i>-1&&(qs(n,i),Os(e,i))}this._attachedToViewContainer=!1}Ql(this._lView[z],this._lView)}onDestroy(n){lh(this._lView,n)}markForCheck(){Gm(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[q]&=-129}reattach(){ll(this._lView),this._lView[q]|=128}detectChanges(){this._lView[q]|=1024,ow(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new E(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=mo(this._lView),e=this._lView[ki];e!==null&&!n&&Vm(e,this._lView),$b(this._lView[z],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new E(902,!1);this._appRef=n;let e=mo(this._lView),i=this._lView[ki];i!==null&&!e&&fw(i,this._lView),ll(this._lView)}};var si=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=aT;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=ea(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Ni(o)}}return t})();function aT(){return Xl(st(),te())}function Xl(t,n){return t.type&4?new si(n,t,Do(t,n)):null}function So(t,n,e,i,r){let o=t.data[n];if(o===null)o=cT(t,n,e,i,r),ey()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=Z_();o.injectorIndex=s===null?-1:s.injectorIndex}return po(o,!0),o}function cT(t,n,e,i,r){let o=vh(),s=_h(),a=s?o:o&&o.parent,c=t.data[n]=dT(t,a,e,n,i,r);return lT(t,c,o,s),c}function lT(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function dT(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return mh()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function uT(t){let n=t[ih]??[],i=t[et][Oe],r=[];for(let o of n)o.data[bb]!==void 0?r.push(o):fT(o,i);t[ih]=r}function fT(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[yb];for(;e<r;){let o=i.nextSibling;Nb(n,i,!1),i=o,e++}}}var hT=()=>null,mT=()=>null;function Al(t,n){return hT(t,n)}function hw(t,n,e){return mT(t,n,e)}var mw=class{},Jl=class{},im=class{resolveComponentFactory(n){throw new E(917,!1)}},na=class{static NULL=new im},He=class{},Ve=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>pT()}return t})();function pT(){let t=te(),n=st(),e=on(n.index,t);return(ti(e)?e:t)[Oe]}var pw=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:()=>null})}return t})();var Dl={},rm=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Dl,i);return r!==Dl||e===Dl?r:this.parentInjector.get(n,e,i)}};function Rl(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=Xc(r,a);else if(o==2){let c=a,l=n[++s];i=Xc(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function Ct(t,n=0){let e=te();if(e===null)return O(t,n);let i=st();return db(i,e,dt(t),n)}function Wm(){let t="invalid";throw new Error(t)}function gw(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}_T(t,n,e,a,o,c,l)}o!==null&&i!==null&&gT(e,i,o)}function gT(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new E(-301,!1);i.push(n[r],o)}}function vT(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function _T(t,n,e,i,r,o,s){let a=i.length,c=null;for(let m=0;m<a;m++){let h=i[m];c===null&&Hn(h)&&(c=h,vT(t,e,m)),Hh(Tl(e,n),t,h.type)}DT(e,t.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let m=0;m<a;m++){let h=i[m];h.providersResolver&&h.providersResolver(h)}let l=!1,d=!1,f=Bb(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let m=0;m<a;m++){let h=i[m];if(e.mergedAttrs=bo(e.mergedAttrs,h.hostAttrs),bT(t,e,n,f,h),ET(f,h,r),s!==null&&s.has(h)){let[w,x]=s.get(h);e.directiveToIndex.set(h.type,[f,w+e.directiveStart,x+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let p=h.type.prototype;!l&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(p.ngOnChanges||p.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}yT(t,e,o)}function yT(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Py(0,n,r,i),Py(1,n,r,i),Ly(n,i,!1);else{let o=e.get(r);Fy(0,n,o,i),Fy(1,n,o,i),Ly(n,i,!0)}}}function Py(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),vw(n,o)}}function Fy(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),vw(n,s)}}function vw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function Ly(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Rm(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let d of l)if(d===n){s??=[],s.push(c,i[a+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){s??=[],s.push(l[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function bT(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=lr(r.type,!0)),s=new Cr(o,Hn(r),Ct,null);t.blueprint[i]=s,e[i]=s,wT(t,n,i,Bb(t,e,r.hostVars,cn),r)}function wT(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;CT(s)!=a&&s.push(a),s.push(e,i,o)}}function CT(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function ET(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Hn(n)&&(e[""]=t)}}function DT(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function _w(t,n,e,i,r,o,s,a){let c=n[z],l=c.consts,d=sn(l,s),f=So(c,t,e,i,d);return o&&gw(c,n,f,sn(l,a),r),f.mergedAttrs=bo(f.mergedAttrs,f.attrs),f.attrs!==null&&Rl(f,f.attrs,!1),f.mergedAttrs!==null&&Rl(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function yw(t,n){tb(t,n),rh(n)&&t.queries.elementEnd(n)}function xT(t,n,e,i,r,o){let s=n.consts,a=sn(s,r),c=So(n,t,e,i,a);if(c.mergedAttrs=bo(c.mergedAttrs,c.attrs),o!=null){let l=sn(s,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&Rl(c,c.attrs,!1),c.mergedAttrs!==null&&Rl(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}function ST(t,n,e){return t[n]=e}function li(t,n,e){if(e===cn)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function xl(t,n,e){return function i(r){let o=ni(t)?on(t.index,n):n;Gm(o,5);let s=n[Ge],a=jy(n,s,e,r),c=i.__ngNextListenerFn__;for(;c;)a=jy(n,s,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function jy(t,n,e,i){let r=V(null);try{return Se(ye.OutputStart,n,e),e(i)!==!1}catch(o){return $M(t,o),!1}finally{Se(ye.OutputEnd,n,e),V(r)}}function bw(t,n,e,i,r,o,s,a){let c=Fs(t),l=!1,d=null;if(!i&&c&&(d=MT(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let f=_n(t,e),m=i?i(f):f;MI(e,m,o,a);let h=r.listen(m,o,a);if(!IT(o)){let p=i?w=>i(rn(w[t.index])):t.index;ww(p,n,e,o,a,h,!1)}}return l}function IT(t){return t.startsWith("animation")||t.startsWith("transition")}function MT(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[fo],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function ww(t,n,e,i,r,o,s){let a=n.firstCreatePass?uh(n):null,c=dh(e),l=c.length;c.push(r,o),a&&a.push(i,t,l,(l+1)*(s?-1:1))}function Vy(t,n,e,i,r,o){let s=n[e],a=n[z],l=a.data[e].outputs[i],f=s[l].subscribe(o);ww(t.index,a,n,r,o,f,!0)}var om=Symbol("BINDING");function Cw(t){return t.debugInfo?.className||t.type.name||null}var Ol=class extends na{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Xn(n);return new xr(e,this.ngModule)}};function TT(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Wl.SignalBased)!==0};return r&&(o.transform=r),o})}function kT(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function AT(t,n,e){let i=n instanceof Te?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new rm(e,i):e}function RT(t){let n=t.get(He,null);if(n===null)throw new E(407,!1);let e=t.get(pw,null),i=t.get(jn,null),r=t.get(En,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function OT(t,n){let e=Ew(t);return Rb(n,e,e==="svg"?oh:e==="math"?H_:null)}function Ew(t){return(t.selectors[0][0]||"div").toLowerCase()}var xr=class extends Jl{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=TT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=kT(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=cM(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){Se(ye.DynamicComponentStart);let a=V(null);try{let c=this.componentDef,l=AT(c,r||this.ngModule,n),d=RT(l),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(Cw(c),()=>this.createComponentRef(d,l,e,i,o,s)):this.createComponentRef(d,l,e,i,o,s)}finally{V(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,c=NT(r,a,s,o),l=n.rendererFactory.createRenderer(null,a),d=r?RM(l,r,a.encapsulation,e):OT(a,l),f=s?.some(By)||o?.some(p=>typeof p!="function"&&p.bindings.some(By)),m=Nm(null,c,null,512|Vb(a),null,null,n,l,e,null,Eb(d,e,!0));m[We]=d,fl(m);let h=null;try{let p=_w(We,m,2,"#host",()=>c.directiveRegistry,!0,0);Pb(l,d,p),wo(d,m),zm(c,m,p),xb(c,p,m),yw(c,p),i!==void 0&&FT(p,this.ngContentSelectors,i),h=on(p.index,m),m[Ge]=h[Ge],$m(c,m,null)}catch(p){throw h!==null&&Uh(h),Uh(m),p}finally{Se(ye.DynamicComponentEnd),hl()}return new Nl(this.componentType,m,!!f)}};function NT(t,n,e,i){let r=t?["ng-version","21.2.8"]:lM(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[om].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let m of f.bindings){a+=m[om].requiredVars;let h=d+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let c=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,m=Wf(f);c.push(m)}return Om(0,null,PT(o,s),1,a,c,null,null,null,[r],null)}function PT(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function By(t){let n=t[om].kind;return n==="input"||n==="twoWay"}var Nl=class extends mw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=al(e[z],We),this.location=Do(this._tNode,e),this.instance=on(this._tNode.index,e)[Ge],this.hostView=this.changeDetectorRef=new Ni(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Um(i,r[z],r,n,e);this.previousInputValues.set(n,e);let s=on(i.index,r);Gm(s,1)}get injector(){return new wr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function FT(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var qt=(()=>{class t{static __NG_ELEMENT_ID__=LT}return t})();function LT(){let t=st();return Dw(t,te())}var sm=class t extends qt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Do(this._hostTNode,this._hostLView)}get injector(){return new wr(this._hostTNode,this._hostLView)}get parentInjector(){let n=Cm(this._hostTNode,this._hostLView);if(rb(n)){let e=Ml(n,this._hostLView),i=Il(n),r=e[z].data[i+8];return new wr(r,e)}else return new wr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=Hy(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Be}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Al(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,Co(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let c=n&&!tI(n),l;if(c)l=e;else{let x=e||{};l=x.index,i=x.injector,r=x.projectableNodes,o=x.environmentInjector||x.ngModuleRef,s=x.directives,a=x.bindings}let d=c?n:new xr(Xn(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let S=(c?f:this.parentInjector).get(Te,null);S&&(o=S)}let m=Xn(d.componentType??{}),h=Al(this._lContainer,m?.id??null),p=h?.firstChild??null,w=d.create(f,r,p,o,s,a);return this.insertImpl(w.hostView,l,Co(this._hostTNode,h)),w}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if($_(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let c=r[et],l=new t(c,c[St],c[et]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return ta(s,r,o,i),n.attachToViewContainerRef(),Qf(Oh(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=Hy(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=qs(this._lContainer,e);i&&(Os(Oh(this._lContainer),e),Ql(i[z],i))}detach(n){let e=this._adjustIndex(n,-1),i=qs(this._lContainer,e);return i&&Os(Oh(this._lContainer),e)!=null?new Ni(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function Hy(t){return t[Ps]}function Oh(t){return t[Ps]||(t[Ps]=[])}function Dw(t,n){let e,i=n[t.index];return vn(i)?e=i:(e=lw(i,n,null,t),n[t.index]=e,Pm(n,e)),VT(e,n,t,i),new sm(e,t,n)}function jT(t,n){let e=t[Oe],i=e.createComment(""),r=_n(n,t),o=e.parentNode(r);return kl(e,o,i,e.nextSibling(r),!1),i}var VT=zT,BT=()=>!1;function HT(t,n,e){return BT(t,n,e)}function zT(t,n,e,i){if(t[Ri])return;let r;e.type&8?r=rn(i):r=jT(n,e),t[Ri]=r}var am=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},cm=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Ym(n,e).matches!==null&&this.queries[e].setDirty()}},Pl=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=qT(n):this.predicate=n}},lm=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},dm=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,UT(e,o)),this.matchTNodeWithReadOption(n,e,El(e,n,o,!1,!1))}else i===si?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,El(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===F||r===qt||r===si&&e.type&4)this.addMatch(e.index,-2);else{let o=El(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function UT(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function $T(t,n){return t.type&11?Do(t,n):t.type&4?Xl(t,n):null}function GT(t,n,e,i){return e===-1?$T(n,t):e===-2?WT(t,n,i):$s(t,t[z],e,n)}function WT(t,n,e){if(e===F)return Do(n,t);if(e===si)return Xl(n,t);if(e===qt)return Dw(n,t)}function xw(t,n,e,i){let r=n[Bn].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=o[l];a.push(GT(n,d,s[c+1],e.metadata.read))}}r.matches=a}return r.matches}function um(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=xw(t,n,r,e);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],d=n[-c];for(let f=Be;f<d.length;f++){let m=d[f];m[ki]===m[et]&&um(m[z],m,l,i)}if(d[vr]!==null){let f=d[vr];for(let m=0;m<f.length;m++){let h=f[m];um(h[z],h,l,i)}}}}}return i}function qm(t,n){return t[Bn].queries[n].queryList}function Sw(t,n,e){let i=new Er((e&4)===4);return q_(t,n,i,i.destroy),(n[Bn]??=new cm).queries.push(new am(i))-1}function Iw(t,n,e){let i=qe();return i.firstCreatePass&&(Tw(i,new Pl(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),Sw(i,te(),n)}function Mw(t,n,e,i){let r=qe();if(r.firstCreatePass){let o=st();Tw(r,new Pl(n,e,i),o.index),YT(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Sw(r,te(),e)}function qT(t){return t.split(",").map(n=>n.trim())}function Tw(t,n,e){t.queries===null&&(t.queries=new lm),t.queries.track(new dm(n,e))}function YT(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Ym(t,n){return t.queries.getByIndex(n)}function kw(t,n){let e=t[z],i=Ym(e,n);return i.crossesNgTemplate?um(e,t,n,[]):xw(e,t,i,n)}function Aw(t,n,e){let i,r=hs(()=>{i._dirtyCounter();let o=QT(i,t);if(n&&o===void 0)throw new E(-951,!1);return o});return i=r[Je],i._dirtyCounter=Y(0),i._flatValue=void 0,r}function Qm(t){return Aw(!0,!1,t)}function Zm(t){return Aw(!0,!0,t)}function Rw(t,n){let e=t[Je];e._lView=te(),e._queryIndex=n,e._queryList=qm(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function QT(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[q]&4)return n?void 0:bt;let r=qm(e,i),o=kw(e,i);return r.reset(o,hb),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var ai=class{},ed=class{};var Fl=class extends ai{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Ol(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Gf(n);this._bootstrapComponents=Fb(o.bootstrap),this._r3Injector=Dh(n,e,[{provide:ai,useValue:this},{provide:na,useValue:this.componentFactoryResolver},...i],As(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Ll=class extends ed{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Fl(this.moduleType,n,[])}};var Ys=class extends ai{injector;componentFactoryResolver=new Ol(this);instance=null;constructor(n){super();let e=new ur([...n.providers,{provide:ai,useValue:this},{provide:na,useValue:this.componentFactoryResolver}],n.parent||uo(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function ia(t,n,e=null){return new Ys({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var ZT=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Xf(!1,e.type),r=i.length>0?ia([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=_({token:t,providedIn:"environment",factory:()=>new t(O(Te))})}return t})();function k(t){return Ks(()=>{let n=Ow(t),e=G(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Em.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(ZT).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||wn.Emulated,styles:t.styles||bt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Dn("NgStandalone"),Nw(e);let i=t.dependencies;return e.directiveDefs=zy(i,KT),e.pipeDefs=zy(i,S_),e.id=ek(e),e})}function KT(t){return Xn(t)||Wf(t)}function Ne(t){return Ks(()=>({type:t.type,bootstrap:t.bootstrap||bt,declarations:t.declarations||bt,imports:t.imports||bt,exports:t.exports||bt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function XT(t,n){if(t==null)return Ii;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=Wl.None,c=null),e[o]=[i,a,c],n[o]=s}return e}function JT(t){if(t==null)return Ii;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function W(t){return Ks(()=>{let n=Ow(t);return Nw(n),n})}function Ow(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Ii,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||bt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:XT(t.inputs,n),outputs:JT(t.outputs),debugInfo:null}}function Nw(t){t.features?.forEach(n=>n(t))}function zy(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function ek(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function tk(t){return Object.getPrototypeOf(t.prototype).constructor}function Fe(t){let n=tk(t.type),e=!0,i=[t];for(;n;){let r;if(Hn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new E(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let s=t;s.inputs=Nh(t.inputs),s.declaredInputs=Nh(t.declaredInputs),s.outputs=Nh(t.outputs);let a=r.hostBindings;a&&sk(t,a);let c=r.viewQuery,l=r.contentQueries;if(c&&rk(t,c),l&&ok(t,l),nk(t,r),x_(t.outputs,r.outputs),Hn(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(t),a===Fe&&(e=!1)}}n=Object.getPrototypeOf(n)}ik(i)}function nk(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function ik(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=bo(r.hostAttrs,e=bo(e,r.hostAttrs))}}function Nh(t){return t===Ii?{}:t===bt?[]:t}function rk(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function ok(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function sk(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function Pw(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=bo(t.mergedAttrs,t.attrs);let d=t.tView=Om(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),po(t,!1);let c=ck(e,n,t,i);pl()&&Bm(e,n,c,t),wo(c,n);let l=lw(c,n,c,t);n[i+We]=l,Pm(n,l),HT(l,t,n)}function ak(t,n,e,i,r,o,s,a,c,l,d){let f=e+We,m;return n.firstCreatePass?(m=So(n,f,4,s||null,a||null),hh()&&gw(n,t,m,sn(n.consts,l),Kb),tb(n,m)):m=n.data[f],Pw(m,t,n,e,i,r,o,c),Fs(m)&&zm(n,t,m),l!=null&&Kl(t,m,d),m}function Qs(t,n,e,i,r,o,s,a,c,l,d){let f=e+We,m;if(n.firstCreatePass){if(m=So(n,f,4,s||null,a||null),l!=null){let h=sn(n.consts,l);m.localNames=[];for(let p=0;p<h.length;p+=2)m.localNames.push(h[p],-1)}}else m=n.data[f];return Pw(m,t,n,e,i,r,o,c),l!=null&&Kl(t,m,d),m}function Mr(t,n,e,i,r,o,s,a){let c=te(),l=qe(),d=sn(l.consts,o);return ak(c,l,t,n,e,i,r,d,void 0,s,a),Mr}var ck=lk;function lk(t,n,e,i){return gl(!0),n[Oe].createComment("")}var td=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function nd(t){return typeof t=="function"&&t[Je]!==void 0}var Km=new b("");function Vi(t){return!!t&&typeof t.then=="function"}function Xm(t){return!!t&&typeof t.subscribe=="function"}var Fw=new b("");var Jm=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(Fw,{optional:!0})??[];injector=u(re);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=ot(this.injector,r);if(Vi(o))e.push(o);else if(Xm(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),id=new b("");function Lw(){df(()=>{let t="";throw new E(600,t)})}function jw(t){return t.isBoundToModule}var dk=10;var Yt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(an);afterRenderManager=u(Yl);zonelessEnabled=u(Vs);rootEffectScheduler=u(vl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new M;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(ri);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(j(e=>!e))}constructor(){u(En,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Te);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=re.NULL){return this._injector.get(T).run(()=>{Se(ye.BootstrapComponentStart);let s=e instanceof Jl;if(!this._injector.get(Jm).done){let p="";throw new E(405,p)}let c;s?c=e:c=this._injector.get(na).resolveComponentFactory(e),this.componentTypes.push(c.componentType);let l=jw(c)?void 0:this._injector.get(ai),d=i||c.selector,f=c.create(r,[],d,l),m=f.location.nativeElement,h=f.injector.get(Km,null);return h?.registerApplication(m),f.onDestroy(()=>{this.detachView(f.hostView),Us(this.components,f),h?.unregisterApplication(m)}),this._loadComponent(f),Se(ye.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Se(ye.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(ql.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Se(ye.ChangeDetectionEnd),new E(101,!1);let e=V(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,V(e),this.afterTick.next(),Se(ye.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(He,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<dk;){Se(ye.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Se(ye.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Ls(r))continue;let o=i&&!this.zonelessEnabled?0:1;ow(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Ls(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Us(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(id,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Us(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new E(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Us(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ge(t,n,e,i){let r=te(),o=br();if(li(r,o,n)){let s=qe(),a=ml();HM(a,r,t,n,e,i)}return ge}var fm=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Ph(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function uk(t,n,e,i){let r,o,s=0,a=t.length-1,c=void 0;if(Array.isArray(n)){V(i);let l=n.length-1;for(V(null);s<=a&&s<=l;){let d=t.at(s),f=n[s],m=Ph(s,d,s,f,e);if(m!==0){m<0&&t.updateValue(s,f),s++;continue}let h=t.at(a),p=n[l],w=Ph(a,h,l,p,e);if(w!==0){w<0&&t.updateValue(a,p),a--,l--;continue}let x=e(s,d),S=e(a,h),H=e(s,f);if(Object.is(H,S)){let pe=e(l,p);Object.is(pe,x)?(t.swap(s,a),t.updateValue(a,p),l--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new jl,o??=$y(t,s,a,e),hm(t,r,s,H))t.updateValue(s,f),s++,a++;else if(o.has(H))r.set(x,t.detach(s)),a--;else{let pe=t.create(s,n[s]);t.attach(s,pe),s++,a++}}for(;s<=l;)Uy(t,r,e,s,n[s]),s++}else if(n!=null){V(i);let l=n[Symbol.iterator]();V(null);let d=l.next();for(;!d.done&&s<=a;){let f=t.at(s),m=d.value,h=Ph(s,f,s,m,e);if(h!==0)h<0&&t.updateValue(s,m),s++,d=l.next();else{r??=new jl,o??=$y(t,s,a,e);let p=e(s,m);if(hm(t,r,s,p))t.updateValue(s,m),s++,a++,d=l.next();else if(!o.has(p))t.attach(s,t.create(s,m)),s++,a++,d=l.next();else{let w=e(s,f);r.set(w,t.detach(s)),a--}}}for(;!d.done;)Uy(t,r,e,t.length,d.value),d=l.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(l=>{t.destroy(l)})}function hm(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Uy(t,n,e,i,r){if(hm(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function $y(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var jl=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function ae(t,n,e,i,r,o,s,a){Dn("NgControlFlow");let c=te(),l=qe(),d=sn(l.consts,o);return Qs(c,l,t,n,e,i,r,d,256,s,a),ep}function ep(t,n,e,i,r,o,s,a){Dn("NgControlFlow");let c=te(),l=qe(),d=sn(l.consts,o);return Qs(c,l,t,n,e,i,r,d,512,s,a),ep}function ce(t,n){Dn("NgControlFlow");let e=te(),i=br(),r=e[i]!==cn?e[i]:-1,o=r!==-1?Vl(e,We+r):void 0,s=0;if(li(e,i,t)){let a=V(null);try{if(o!==void 0&&uw(o,s),t!==-1){let c=We+t,l=Vl(e,c),d=vm(e[z],c),f=hw(l,d,e),m=ea(e,d,n,{dehydratedView:f});ta(l,m,s,Co(d,f))}}finally{V(a)}}else if(o!==void 0){let a=dw(o,s);a!==void 0&&(a[Ge]=n)}}var mm=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Be}};function tp(t,n){return n}var pm=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function ht(t,n,e,i,r,o,s,a,c,l,d,f,m){Dn("NgControlFlow");let h=te(),p=qe(),w=c!==void 0,x=te(),S=a?s.bind(x[It][Ge]):s,H=new pm(w,S);x[We+t]=H,Qs(h,p,t+1,n,e,i,r,sn(p.consts,o),256),w&&Qs(h,p,t+2,c,l,d,f,sn(p.consts,m),512)}var gm=class extends fm{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Be}at(n){return this.getLView(n)[Ge].$implicit}attach(n,e){let i=e[hr];this.needsIndexUpdate||=n!==this.length,ta(this.lContainer,e,n,Co(this.templateTNode,i)),fk(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,hk(this.lContainer,n),mk(this.lContainer,n)}create(n,e){let i=Al(this.lContainer,this.templateTNode.tView.ssrId);return ea(this.hostLView,this.templateTNode,new mm(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Ql(n[z],n)}updateValue(n,e){this.getLView(n)[Ge].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Ge].$index=n}getLView(n){return pk(this.lContainer,n)}};function mt(t){let n=V(null),e=ii();try{let i=te(),r=i[z],o=i[e],s=e+1,a=Vl(i,s);if(o.liveCollection===void 0){let l=vm(r,s);o.liveCollection=new gm(a,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(uk(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=br(),d=c.length===0;if(li(i,l,d)){let f=e+2,m=Vl(i,f);if(d){let h=vm(r,f),p=hw(m,h,i),w=ea(i,h,void 0,{dehydratedView:p});ta(m,w,0,Co(h,p))}else r.firstUpdatePass&&uT(m),uw(m,0)}}}finally{V(n)}}function Vl(t,n){return t[n]}function fk(t,n){if(t.length<=Be)return;let e=Be+n,i=t[e],r=i?i[Ai]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Jn];_M(o,r),Dr.delete(i[ei]),r.detachedLeaveAnimationFns=void 0}}function hk(t,n){if(t.length<=Be)return;let e=Be+n,i=t[e],r=i?i[Ai]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function mk(t,n){return qs(t,n)}function pk(t,n){return dw(t,n)}function vm(t,n){return al(t,n)}function ve(t,n,e){let i=te(),r=br();if(li(i,r,n)){let o=qe(),s=ml();FM(s,i,t,n,i[Oe],e)}return ve}function _m(t,n,e,i,r){Um(n,t,e,r?"class":"style",i)}function g(t,n,e,i){let r=te(),o=r[z],s=t+We,a=o.firstCreatePass?_w(s,r,2,n,Kb,hh(),e,i):o.data[s];if(ni(a)){let c=r[gn].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate(Cw(l),()=>(Gy(t,n,r,a,i),g))}}return Gy(t,n,r,a,i),g}function Gy(t,n,e,i,r){if(Xb(i,e,t,n,Vw),Fs(i)){let o=e[z];zm(o,e,i),xb(o,i,e)}r!=null&&Kl(e,i)}function v(){let t=qe(),n=st(),e=Jb(n);return t.firstCreatePass&&yw(t,e),ph(e)&&gh(),fh(),e.classesWithoutHost!=null&&aI(e)&&_m(t,e,te(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&cI(e)&&_m(t,e,te(),e.stylesWithoutHost,!1),v}function ne(t,n,e,i){return g(t,n,e,i),v(),ne}function ze(t,n,e,i){let r=te(),o=r[z],s=t+We,a=o.firstCreatePass?xT(s,o,2,n,e,i):o.data[s];return Xb(a,r,t,n,Vw),i!=null&&Kl(r,a),ze}function Ye(){let t=st(),n=Jb(t);return ph(n)&&gh(),fh(),Ye}function Et(t,n,e,i){return ze(t,n,e,i),Ye(),Et}var Vw=(t,n,e,i,r)=>(gl(!0),Rb(n[Oe],i,cy()));function Lt(){return te()}function $n(t,n,e){let i=te(),r=br();if(li(i,r,n)){let o=qe(),s=ml();Zb(s,i,t,n,i[Oe],e)}return $n}var ra="en-US";var gk=ra;function Bw(t){typeof t=="string"&&(gk=t.toLowerCase().replace(/_/g,"-"))}function U(t,n,e){let i=te(),r=qe(),o=st();return vk(r,i,i[Oe],o,t,n,e),U}function rd(t,n,e){let i=te(),r=qe(),o=st();return(o.type&3||e)&&bw(o,r,i,e,i[Oe],t,n,xl(o,i,n)),rd}function vk(t,n,e,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=xl(i,n,o),bw(i,t,n,s,e,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let m=d[f],h=d[f+1];c??=xl(i,n,o),Vy(i,n,m,h,r,c)}if(l&&l.length)for(let f of l)c??=xl(i,n,o),Vy(i,n,f,r,r,c)}}function X(t=1){return ay(t)}function _k(t,n){let e=null,i=iM(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?jb(t,o,!0):sM(i,o))return r}return e}function De(t){let n=te()[It][St];if(!n.projection){let e=t?t.length:1,i=n.projection=R_(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?_k(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function N(t,n=0,e,i,r,o){let s=te(),a=qe(),c=i?t+1:null;c!==null&&Qs(s,a,c,i,r,o,null,e);let l=So(a,We+t,16,null,e||null);l.projection===null&&(l.projection=n),yh();let f=!s[hr]||mh();s[It][St].projection[l.projection]===null&&c!==null?yk(s,a,c):f&&!$l(l)&&TM(a,s,l)}function yk(t,n,e){let i=We+e,r=n.data[i],o=t[i],s=Al(o,r.tView.ssrId),a=ea(t,r,void 0,{dehydratedView:s});ta(o,a,0,Co(r,s))}function Qt(t,n,e,i){return Mw(t,n,e,i),Qt}function pt(t,n,e){return Iw(t,n,e),pt}function Q(t){let n=te(),e=qe(),i=ul();js(i+1);let r=Ym(e,i);if(t.dirty&&U_(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=kw(n,i);t.reset(o,hb),t.notifyOnChanges()}return!0}return!1}function Z(){return qm(te(),ul())}function od(t,n,e,i,r){return Rw(n,Mw(t,e,i,r)),od}function sd(t,n,e,i){return Rw(t,Iw(n,e,i)),sd}function ad(t=1){js(ul()+t)}function Tr(t){let n=K_();return z_(n,We+t)}function bl(t,n){return t<<17|n<<2}function Sr(t){return t>>17&32767}function bk(t){return(t&2)==2}function wk(t,n){return t&131071|n<<17}function ym(t){return t|2}function Eo(t){return(t&131068)>>2}function Fh(t,n){return t&-131069|n<<2}function Ck(t){return(t&1)===1}function bm(t){return t|1}function Ek(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=Sr(s),c=Eo(s);t[i]=e;let l=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||lo(f,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let m=Sr(t[a+1]);t[i+1]=bl(m,a),m!==0&&(t[m+1]=Fh(t[m+1],i)),t[a+1]=wk(t[a+1],i)}else t[i+1]=bl(a,0),a!==0&&(t[a+1]=Fh(t[a+1],i)),a=i;else t[i+1]=bl(c,0),a===0?a=i:t[c+1]=Fh(t[c+1],i),c=i;l&&(t[i+1]=ym(t[i+1])),Wy(t,d,i,!0),Wy(t,d,i,!1),Dk(n,d,t,i,o),s=bl(a,c),o?n.classBindings=s:n.styleBindings=s}function Dk(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&lo(o,n)>=0&&(e[i+1]=bm(e[i+1]))}function Wy(t,n,e,i){let r=t[e+1],o=n===null,s=i?Sr(r):Eo(r),a=!1;for(;s!==0&&(a===!1||o);){let c=t[s],l=t[s+1];xk(c,n)&&(a=!0,t[s+1]=i?bm(l):ym(l)),s=i?Sr(l):Eo(l)}a&&(t[e+1]=i?ym(r):bm(r))}function xk(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?lo(t,n)>=0:!1}var bn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Sk(t){return t.substring(bn.key,bn.keyEnd)}function Ik(t){return Mk(t),Hw(t,zw(t,0,bn.textEnd))}function Hw(t,n){let e=bn.textEnd;return e===n?-1:(n=bn.keyEnd=Tk(t,bn.key=n,e),zw(t,n,e))}function Mk(t){bn.key=0,bn.keyEnd=0,bn.value=0,bn.valueEnd=0,bn.textEnd=t.length}function zw(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function Tk(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Gn(t,n,e){return Uw(t,n,e,!1),Gn}function I(t,n){return Uw(t,n,null,!0),I}function xn(t){Ak(Lk,kk,t,!0)}function kk(t,n){for(let e=Ik(n);e>=0;e=Hw(n,e))rl(t,Sk(n),!0)}function Uw(t,n,e,i){let r=te(),o=qe(),s=wh(2);if(o.firstUpdatePass&&Gw(o,t,s,i),n!==cn&&li(r,s,n)){let a=o.data[ii()];Ww(o,a,r,r[Oe],t,r[s+1]=Vk(n,e),i,s)}}function Ak(t,n,e,i){let r=qe(),o=wh(2);r.firstUpdatePass&&Gw(r,null,o,i);let s=te();if(e!==cn&&li(s,o,e)){let a=r.data[ii()];if(qw(a,i)&&!$w(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(e=Xc(c,e||"")),_m(r,a,s,e,i)}else jk(r,a,s,s[Oe],s[o+1],s[o+1]=Fk(t,n,e),i,o)}}function $w(t,n){return n>=t.expandoStartIndex}function Gw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[ii()],s=$w(t,e);qw(o,i)&&n===null&&!s&&(n=!1),n=Rk(r,o,n,i),Ek(r,o,n,e,s,i)}}function Rk(t,n,e,i){let r=iy(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Lh(null,t,n,e,i),e=Zs(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=Lh(r,t,n,e,i),o===null){let c=Ok(t,n,i);c!==void 0&&Array.isArray(c)&&(c=Lh(null,t,n,c[1],i),c=Zs(c,n.attrs,i),Nk(t,n,i,c))}else o=Pk(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function Ok(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Eo(i)!==0)return t[Sr(i)]}function Nk(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Sr(r)]=i}function Pk(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=Zs(i,s,e)}return Zs(i,n.attrs,e)}function Lh(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=Zs(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function Zs(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),rl(t,s,e?!0:n[++o]))}return t===void 0?null:t}function Fk(t,n,e){if(e==null||e==="")return bt;let i=[],r=Cn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function Lk(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&rl(t,i,e)}function jk(t,n,e,i,r,o,s,a){r===cn&&(r=bt);let c=0,l=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let m=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,p=null,w;d===f?(c+=2,l+=2,m!==h&&(p=f,w=h)):f===null||d!==null&&d<f?(c+=2,p=d):(l+=2,p=f,w=h),p!==null&&Ww(t,n,e,i,p,w,s,a),d=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function Ww(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let c=t.data,l=c[a+1],d=Ck(l)?qy(c,n,e,r,Eo(l),s):void 0;if(!Bl(d)){Bl(o)||bk(l)&&(o=qy(c,null,e,r,a,s));let f=sh(ii(),e);AM(i,s,f,r,o)}}function qy(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,f=d===null,m=e[r+1];m===cn&&(m=f?bt:void 0);let h=f?ol(m,i):d===i?m:void 0;if(l&&!Bl(h)&&(h=ol(c,i)),Bl(h)&&(a=h,s))return a;let p=t[r+1];r=s?Sr(p):Eo(p)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(a=ol(c,i))}return a}function Bl(t){return t!==void 0}function Vk(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=As(Cn(t)))),t}function qw(t,n){return(t.flags&(n?8:16))!==0}function D(t,n=""){let e=te(),i=qe(),r=t+We,o=i.firstCreatePass?So(i,r,1,n,null):i.data[r],s=Bk(i,e,o,n);e[r]=s,pl()&&Bm(i,e,s,o),po(o,!1)}var Bk=(t,n,e,i)=>(gl(!0),qI(n[Oe],i));function Hk(t,n,e,i=""){return li(t,br(),e)?n+tl(e)+i:cn}function J(t){return At("",t),J}function At(t,n,e){let i=te(),r=Hk(i,t,n,e);return r!==cn&&zk(i,ii(),r),At}function zk(t,n,e){let i=sh(n,t);YI(t[Oe],i,e)}function Yy(t,n,e){let i=qe();i.firstCreatePass&&Yw(n,i.data,i.blueprint,Hn(t),e)}function Yw(t,n,e,i,r){if(t=dt(t),Array.isArray(t))for(let o=0;o<t.length;o++)Yw(t[o],n,e,i,r);else{let o=qe(),s=te(),a=st(),c=dr(t)?t:dt(t.provide),l=eh(t),d=a.providerIndexes&1048575,f=a.directiveStart,m=a.providerIndexes>>20;if(dr(t)||!t.multi){let h=new Cr(l,r,Ct,null),p=Vh(c,n,r?d:d+m,f);p===-1?(Hh(Tl(a,s),o,c),jh(o,t,n.length),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(h),s.push(h)):(e[p]=h,s[p]=h)}else{let h=Vh(c,n,d+m,f),p=Vh(c,n,d,d+m),w=h>=0&&e[h],x=p>=0&&e[p];if(r&&!x||!r&&!w){Hh(Tl(a,s),o,c);let S=Gk(r?$k:Uk,e.length,r,i,l,t);!r&&x&&(e[p].providerFactory=S),jh(o,t,n.length,0),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(S),s.push(S)}else{let S=Qw(e[r?p:h],l,!r&&i);jh(o,t,h>-1?h:p,S)}!r&&i&&x&&e[p].componentProviders++}}}function jh(t,n,e,i){let r=dr(n),o=j_(n);if(r||o){let c=(o?dt(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function Qw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Vh(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function Uk(t,n,e,i,r){return wm(this.multi,[])}function $k(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=$s(i,i[z],this.providerFactory.index,r);s=c.slice(0,a),wm(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],wm(o,s);return s}function wm(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function Gk(t,n,e,i,r,o){let s=new Cr(t,e,Ct,null);return s.multi=[],s.index=n,s.componentProviders=0,Qw(s,r,i&&!e),s}function Qe(t,n){return e=>{e.providersResolver=(i,r)=>Yy(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>Yy(i,r?r(n):n,!0))}}function oa(t,n,e){return qk(te(),X_(),t,n,e)}function Wk(t,n){let e=t[n];return e===cn?void 0:e}function qk(t,n,e,i,r,o){let s=n+e;return li(t,s,r)?ST(t,s+1,o?i.call(o,r):i(r)):Wk(t,s+1)}function cd(t,n){return Xl(t,n)}var Hl=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},np=(()=>{class t{compileModuleSync(e){return new Ll(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Gf(e),o=Fb(r.declarations).reduce((s,a)=>{let c=Xn(a);return c&&s.push(new xr(c)),s},[]);return new Hl(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zw=(()=>{class t{applicationErrorHandler=u(an);appRef=u(Yt);taskService=u(ri);ngZone=u(T);zonelessEnabled=u(Vs);tracing=u(En,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Me;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ts):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Th,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?fy:xh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ts+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Kw(){return[{provide:jn,useExisting:Zw},{provide:T,useClass:ks},{provide:Vs,useValue:!0}]}function Yk(){return typeof $localize<"u"&&$localize.locale||ra}var ld=new b("",{factory:()=>u(ld,{optional:!0,skipSelf:!0})||Yk()});function Ze(t){return b_(t)}function le(t,n){return hs(t,n?.equal)}var i0=Symbol("InputSignalNode#UNSET"),gA=G(y({},ms),{transformFn:void 0,applyValueToInputSignal(t,n){Jr(t,n)}});function r0(t,n){let e=Object.create(gA);e.value=t,e.transformFn=n?.transform;function i(){if(Zi(e),e.value===i0){let r=null;throw new E(-950,r)}return e.value}return i[Je]=e,i}var kr=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>zl(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},o0=(()=>{let t=new b("");return t.__NG_ELEMENT_ID__=n=>{let e=st();if(e===null)throw new E(-204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new E(-204,!1)},t})();function Xw(t,n){return r0(t,n)}function vA(t){return r0(i0,t)}var s0=(Xw.required=vA,Xw);function Jw(t,n){return Qm(n)}function _A(t,n){return Zm(n)}var aa=(Jw.required=_A,Jw);function e0(t,n){return Qm(n)}function yA(t,n){return Zm(n)}var a0=(e0.required=yA,e0);var rp=new b(""),bA=new b("");function sa(t){return!t.moduleRef}function wA(t){let n=sa(t)?t.r3Injector:t.moduleRef.injector,e=n.get(T);return e.run(()=>{sa(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(an),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),sa(t)){let o=()=>n.destroy(),s=t.platformInjector.get(rp);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(rp);s.add(o),t.moduleRef.onDestroy(()=>{Us(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return EA(i,e,()=>{let o=n.get(ri),s=o.add(),a=n.get(Jm);return a.runInitializers(),a.donePromise.then(()=>{let c=n.get(ld,ra);if(Bw(c||ra),!n.get(bA,!0))return sa(t)?n.get(Yt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(sa(t)){let d=n.get(Yt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return CA?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var CA;function EA(t,n,e){try{let i=e();return Vi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var dd=null;function DA(t=[],n){return re.create({name:n,providers:[{provide:Ns,useValue:"platform"},{provide:rp,useValue:new Set([()=>dd=null])},...t]})}function xA(t=[]){if(dd)return dd;let n=DA(t);return dd=n,Lw(),SA(n),n}function SA(t){let n=t.get(Ul,null);ot(t,()=>{n?.forEach(e=>e())})}var IA=1e4;var JW=IA-1e3;var Xe=(()=>{class t{static __NG_ELEMENT_ID__=MA}return t})();function MA(t){return TA(st(),te(),(t&16)===16)}function TA(t,n,e){if(ni(t)&&!e){let i=on(t.index,n);return new Ni(i,i)}else if(t.type&175){let i=n[It];return new Ni(i,n)}return null}function c0(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Se(ye.BootstrapApplicationStart);try{let o=r?.injector??xA(i),s=[Kw(),my,...e||[]],a=new Ys({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return wA({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Se(ye.BootstrapApplicationEnd)}}function we(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Ar(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var ip=Symbol("NOT_SET"),l0=new Set,kA=G(y({},ms),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:ip,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==ip&&!Kr(this))return this.signal;try{for(let r of this.cleanup??l0)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Ci(this),i;try{i=this.userFn.apply(null,n)}finally{Ki(this,e)}return(this.value===ip||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),op=class extends Gs{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(at),s),this.scheduler=r;for(let a of Lm){let c=e[a];if(c===void 0)continue;let l=Object.create(kA);l.sequence=this,l.phase=a,l.userFn=c,l.dirty=!0,l.signal=()=>(Zi(l),l.value),l.signal[Je]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[a]=l,this.hooks[a]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??l0)e()}finally{Ei(n)}}};function d0(t,n){let e=n?.injector??u(re),i=e.get(jn),r=e.get(Yl),o=e.get(En,null,{optional:!0});r.impl??=e.get(jm);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(vo,null,{optional:!0}),c=new op(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function ud(t,n){let e=Xn(t),i=n.elementInjector||uo();return new xr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var u0=null;function di(){return u0}function ap(t){u0??=t}var ca=class{},la=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(f0),providedIn:"platform"})}return t})();var f0=(()=>{class t extends la{_location;_history;_doc=u(P);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return di().getBaseHref(this._doc)}onPopState(e){let i=di().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=di().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function p0(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function h0(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Hi(t){return t&&t[0]!=="?"?`?${t}`:t}var da=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(g0),providedIn:"root"})}return t})(),AA=new b(""),g0=(()=>{class t extends da{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(P).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return p0(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Hi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Hi(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Hi(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(O(la),O(AA,8))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ui=(()=>{class t{_subject=new M;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=NA(h0(m0(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Hi(i))}normalize(e){return t.stripTrailingSlash(OA(this._basePath,m0(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Hi(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Hi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Hi;static joinWithSlash=p0;static stripTrailingSlash=h0;static \u0275fac=function(i){return new(i||t)(O(da))};static \u0275prov=_({token:t,factory:()=>RA(),providedIn:"root"})}return t})();function RA(){return new ui(O(da))}function OA(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function m0(t){return t.replace(/\/index.html$/,"")}function NA(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var cp=/\s+/,v0=[],lp=(()=>{class t{_ngEl;_renderer;initialClasses=v0;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(cp):v0}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(cp):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(cp).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(Ct(F),Ct(Ve))};static \u0275dir=W({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var dp=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(re);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(Ct(qt))};static \u0275dir=W({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ut]})}return t})();function fd(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Rr=class{};var fp="browser";function _0(t){return t===fp}var y0=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:()=>new up(u(P),window)})}return t})(),up=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(G(y({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=BA(this.document,n);i&&(this.scrollToElement(i,e),i.focus())}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(Vn(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(G(y({},e),{left:r-s[0],top:o-s[1]}))}};function BA(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(s)return s}r=i.nextNode()}}return null}var ua=class{_doc;constructor(n){this._doc=n}manager},hd=(()=>{class t extends ua{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(O(P))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),gd=new b(""),gp=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof hd));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof hd);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new E(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(O(gd),O(T))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),hp="ng-app-id";function b0(t){for(let n of t)n.remove()}function w0(t,n){let e=n.createElement("style");return e.textContent=t,e}function HA(t,n,e,i){let r=t.head?.querySelectorAll(`style[${hp}="${n}"],link[${hp}="${n}"]`);if(r)for(let o of r)o.removeAttribute(hp),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function pp(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var vp=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,HA(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,w0);i?.forEach(r=>this.addUsage(r,this.external,pp))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(b0(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])b0(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,w0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,pp(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(O(P),O(Pi),O(xo,8),O(Ir))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),mp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},_p=/%COMP%/g;var E0="%COMP%",zA=`_nghost-${E0}`,UA=`_ngcontent-${E0}`,$A=!0,GA=new b("",{factory:()=>$A});function WA(t){return UA.replace(_p,t)}function qA(t){return zA.replace(_p,t)}function D0(t,n){return n.map(e=>e.replace(_p,t))}var ma=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new fa(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof pd?r.applyToHost(e):r instanceof ha&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case wn.Emulated:o=new pd(c,l,i,this.appId,d,s,a,f);break;case wn.ShadowDom:return new md(c,e,i,s,a,this.nonce,f,l);case wn.ExperimentalIsolatedShadowDom:return new md(c,e,i,s,a,this.nonce,f);default:o=new ha(c,l,i,d,s,a,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(O(gp),O(vp),O(Pi),O(GA),O(P),O(T),O(xo),O(En,8))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),fa=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(mp[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(C0(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(C0(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new E(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=mp[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=mp[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Un.DashCase|Un.Important)?n.style.setProperty(e,i,r&Un.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Un.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=di().getGlobalEventTarget(this.doc,n),!n))throw new E(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function C0(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var md=class extends fa{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,c){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=D0(i.id,l);for(let f of l){let m=document.createElement("style");s&&m.setAttribute("nonce",s),m.textContent=f,this.shadowRoot.appendChild(m)}let d=i.getExternalStyles?.();if(d)for(let f of d){let m=pp(f,r);s&&m.setAttribute("nonce",s),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ha=class extends fa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,c){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?D0(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Dr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},pd=class extends ha{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,c){let l=r+"-"+i.id;super(n,e,i,o,s,a,c,l),this.contentAttr=WA(l),this.hostAttr=qA(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var vd=class t extends ca{supportsDOMEvents=!0;static makeCurrent(){ap(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=YA();return e==null?null:QA(e)}resetBaseElement(){pa=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return fd(document.cookie,n)}},pa=null;function YA(){return pa=pa||document.head.querySelector("base"),pa?pa.getAttribute("href"):null}function QA(t){return new URL(t,document.baseURI).pathname}var ZA=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),x0=["alt","control","meta","shift"],KA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},XA={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},S0=(()=>{class t extends ua{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>di().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),x0.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,i){let r=KA[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),x0.forEach(s=>{if(s!==r){let a=XA[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(O(P))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();async function yp(t,n,e){let i=y({rootComponent:t},JA(n,e));return c0(i)}function JA(t,n){return{platformRef:n?.platformRef,appProviders:[...rR,...t?.providers??[]],platformProviders:iR}}function eR(){vd.makeCurrent()}function tR(){return new Ft}function nR(){return Dm(document),document}var iR=[{provide:Ir,useValue:fp},{provide:Ul,useValue:eR,multi:!0},{provide:P,useFactory:nR}];var rR=[{provide:Ns,useValue:"root"},{provide:Ft,useFactory:tR},{provide:gd,useClass:hd,multi:!0},{provide:gd,useClass:S0,multi:!0},ma,vp,gp,{provide:He,useExisting:ma},{provide:Rr,useClass:ZA},[]];var zi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var wp=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Cp=class{encodeKey(n){return I0(n)}encodeValue(n){return I0(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function oR(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var sR=/%(\d[a-f0-9])/gi,aR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function I0(t){return encodeURIComponent(t).replace(sR,(n,e)=>aR[e]??n)}function _d(t){return`${t}`}var fi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Cp,n.fromString){if(n.fromObject)throw new E(2805,!1);this.map=oR(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(_d):[_d(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(_d(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(_d(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function cR(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function M0(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function T0(t){return typeof Blob<"u"&&t instanceof Blob}function k0(t){return typeof FormData<"u"&&t instanceof FormData}function lR(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var A0="Content-Type",R0="Accept",O0="text/plain",N0="application/json",dR=`${N0}, ${O0}, */*`,Io=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(cR(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new E(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new zi,this.context??=new wp,!this.params)this.params=new fi,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),c=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+c+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||M0(this.body)||T0(this.body)||k0(this.body)||lR(this.body)?this.body:this.body instanceof fi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||k0(this.body)?null:T0(this.body)?this.body.type||null:M0(this.body)?null:typeof this.body=="string"?O0:this.body instanceof fi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?N0:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer||this.referrer,m=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,p=n.transferCache??this.transferCache,w=n.timeout??this.timeout,x=n.body!==void 0?n.body:this.body,S=n.withCredentials??this.withCredentials,H=n.reportProgress??this.reportProgress,pe=n.headers||this.headers,he=n.params||this.params,Xt=n.context??this.context;return n.setHeaders!==void 0&&(pe=Object.keys(n.setHeaders).reduce((gt,Le)=>gt.set(Le,n.setHeaders[Le]),pe)),n.setParams&&(he=Object.keys(n.setParams).reduce((gt,Le)=>gt.set(Le,n.setParams[Le]),he)),new t(e,i,x,{params:he,headers:pe,context:Xt,reportProgress:H,responseType:r,withCredentials:S,transferCache:p,keepalive:o,cache:a,priority:s,timeout:w,mode:c,redirect:l,credentials:d,referrer:f,integrity:m,referrerPolicy:h})}},Or=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Or||{}),ga=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new zi,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Ep=class t extends ga{constructor(n={}){super(n)}type=Or.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},va=class t extends ga{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Or.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Mo=class extends ga{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},uR=200,fR=204;var hR=/^\)\]\}',?\n/;var mR=(()=>{class t{xhrFactory;tracingService=u(En,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new E(-2800,!1);let i=this.xhrFactory;return B(null).pipe(lt(()=>new K(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((x,S)=>s.setRequestHeader(x,S.join(","))),e.headers.has(R0)||s.setRequestHeader(R0,dR),!e.headers.has(A0)){let x=e.detectContentTypeHeader();x!==null&&s.setRequestHeader(A0,x)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let x=e.responseType.toLowerCase();s.responseType=x!=="json"?x:"text"}let a=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let x=s.statusText||"OK",S=new zi(s.getAllResponseHeaders()),H=s.responseURL||e.url;return c=new Ep({headers:S,status:s.status,statusText:x,url:H}),c},d=this.maybePropagateTrace(()=>{let{headers:x,status:S,statusText:H,url:pe}=l(),he=null;S!==fR&&(he=typeof s.response>"u"?s.responseText:s.response),S===0&&(S=he?uR:0);let Xt=S>=200&&S<300;if(e.responseType==="json"&&typeof he=="string"){let gt=he;he=he.replace(hR,"");try{he=he!==""?JSON.parse(he):null}catch(Le){he=gt,Xt&&(Xt=!1,he={error:Le,text:he})}}Xt?(o.next(new va({body:he,headers:x,status:S,statusText:H,url:pe||void 0})),o.complete()):o.error(new Mo({error:he,headers:x,status:S,statusText:H,url:pe||void 0}))}),f=this.maybePropagateTrace(x=>{let{url:S}=l(),H=new Mo({error:x,status:s.status||0,statusText:s.statusText||"Unknown Error",url:S||void 0});o.error(H)}),m=f;e.timeout&&(m=this.maybePropagateTrace(x=>{let{url:S}=l(),H=new Mo({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:S||void 0});o.error(H)}));let h=!1,p=this.maybePropagateTrace(x=>{h||(o.next(l()),h=!0);let S={type:Or.DownloadProgress,loaded:x.loaded};x.lengthComputable&&(S.total=x.total),e.responseType==="text"&&s.responseText&&(S.partialText=s.responseText),o.next(S)}),w=this.maybePropagateTrace(x=>{let S={type:Or.UploadProgress,loaded:x.loaded};x.lengthComputable&&(S.total=x.total),o.next(S)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",m),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",p),a!==null&&s.upload&&s.upload.addEventListener("progress",w)),s.send(a),o.next({type:Or.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",m),e.reportProgress&&(s.removeEventListener("progress",p),a!==null&&s.upload&&s.upload.removeEventListener("progress",w)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(O(Rr))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function pR(t,n){return n(t)}function gR(t,n,e){return(i,r)=>ot(e,()=>n(i,o=>t(o,r)))}var vR=new b("",{factory:()=>[]}),P0=new b(""),_R=new b("",{factory:()=>!0});var yR=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=O(mR),r},providedIn:"root"})}return t})();var bR=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Bs);contributeToStability=u(_R);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(vR),...this.injector.get(P0,[])]));this.chain=i.reduceRight((r,o)=>gR(r,o,this.injector),pR)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(or(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(O(yR),O(Te))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wR=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=O(bR),r},providedIn:"root"})}return t})();function bp(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Dp=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Io)o=e;else{let c;r.headers instanceof zi?c=r.headers:c=new zi(r.headers);let l;r.params&&(r.params instanceof fi?l=r.params:l=new fi({fromObject:r.params})),o=new Io(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=B(o).pipe(oo(c=>this.handler.handle(c)));if(e instanceof Io||r.observe==="events")return s;let a=s.pipe(Ee(c=>c instanceof va));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(j(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new E(2806,!1);return c.body}));case"blob":return a.pipe(j(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new E(2807,!1);return c.body}));case"text":return a.pipe(j(c=>{if(c.body!==null&&typeof c.body!="string")throw new E(2808,!1);return c.body}));default:return a.pipe(j(c=>c.body))}case"response":return a;default:throw new E(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new fi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,bp(r,i))}post(e,i,r={}){return this.request("POST",e,bp(r,i))}put(e,i,r={}){return this.request("PUT",e,bp(r,i))}static \u0275fac=function(i){return new(i||t)(O(wR))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var F0=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(O(P))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=O(ER),r},providedIn:"root"})}return t})(),ER=(()=>{class t extends xp{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case wt.NONE:return i;case wt.HTML:return Li(i,"HTML")?Cn(i):km(this._doc,String(i)).toString();case wt.STYLE:return Li(i,"Style")?Cn(i):i;case wt.SCRIPT:if(Li(i,"Script"))return Cn(i);throw new E(5200,!1);case wt.URL:return Li(i,"URL")?Cn(i):Xs(String(i));case wt.RESOURCE_URL:if(Li(i,"ResourceURL"))return Cn(i);throw new E(5201,!1);default:throw new E(5202,!1)}}bypassSecurityTrustHtml(e){return xm(e)}bypassSecurityTrustStyle(e){return Sm(e)}bypassSecurityTrustScript(e){return Im(e)}bypassSecurityTrustUrl(e){return Mm(e)}bypassSecurityTrustResourceUrl(e){return Tm(e)}static \u0275fac=function(i){return new(i||t)(O(P))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ie="primary",ka=Symbol("RouteTitle"),kp=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Oo(t){return new kp(t)}function Sp(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function DR(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return Sp(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Sp(o,t.slice(0,o.length),a)||!Sp(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Dd(t){return new Promise((n,e)=>{t.pipe(Zn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function xR(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Wn(t[e],n[e]))return!1;return!0}function Wn(t,n){let e=t?Ap(t):void 0,i=n?Ap(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!G0(t[r],n[r]))return!1;return!0}function Ap(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function G0(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function SR(t){return t.length>0?t[t.length-1]:null}function Vr(t){return bs(t)?t:Vi(t)?Ae(Promise.resolve(t)):B(t)}function W0(t){return bs(t)?Dd(t):Promise.resolve(t)}var IR={exact:Q0,subset:Z0},q0={exact:MR,subset:TR,ignored:()=>!0},Y0={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Rp={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function j0(t,n,e){return IR[e.paths](t.root,n.root,e.matrixParams)&&q0[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function MR(t,n){return Wn(t,n)}function Q0(t,n,e){if(!Pr(t.segments,n.segments)||!wd(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!Q0(t.children[i],n.children[i],e))return!1;return!0}function TR(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>G0(t[e],n[e]))}function Z0(t,n,e){return K0(t,n,n.segments,e)}function K0(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Pr(r,e)||n.hasChildren()||!wd(r,e,i))}else if(t.segments.length===e.length){if(!Pr(t.segments,e)||!wd(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!Z0(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Pr(t.segments,r)||!wd(t.segments,r,i)||!t.children[ie]?!1:K0(t.children[ie],n,o,i)}}function wd(t,n,e){return n.every((i,r)=>q0[e](t[r].parameters,i.parameters))}var Mn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ie([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Oo(this.queryParams),this._queryParamMap}toString(){return RR.serialize(this)}},Ie=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Cd(this)}},Nr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Oo(this.parameters),this._parameterMap}toString(){return J0(this)}};function kR(t,n){return Pr(t,n)&&t.every((e,i)=>Wn(e.parameters,n[i].parameters))}function Pr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function AR(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ie&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ie&&(e=e.concat(n(r,i)))}),e}var Aa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>new Fr,providedIn:"root"})}return t})(),Fr=class{parse(n){let e=new Np(n);return new Mn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${_a(n.root,!0)}`,i=PR(n.queryParams),r=typeof n.fragment=="string"?`#${OR(n.fragment)}`:"";return`${e}${i}${r}`}},RR=new Fr;function Cd(t){return t.segments.map(n=>J0(n)).join("/")}function _a(t,n){if(!t.hasChildren())return Cd(t);if(n){let e=t.children[ie]?_a(t.children[ie],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ie&&i.push(`${r}:${_a(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=AR(t,(i,r)=>r===ie?[_a(t.children[ie],!1)]:[`${r}:${_a(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ie]!=null?`${Cd(t)}/${e[0]}`:`${Cd(t)}/(${e.join("//")})`}}function X0(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function yd(t){return X0(t).replace(/%3B/gi,";")}function OR(t){return encodeURI(t)}function Op(t){return X0(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ed(t){return decodeURIComponent(t)}function V0(t){return Ed(t.replace(/\+/g,"%20"))}function J0(t){return`${Op(t.path)}${NR(t.parameters)}`}function NR(t){return Object.entries(t).map(([n,e])=>`;${Op(n)}=${Op(e)}`).join("")}function PR(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${yd(e)}=${yd(r)}`).join("&"):`${yd(e)}=${yd(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var FR=/^[^\/()?;#]+/;function Ip(t){let n=t.match(FR);return n?n[0]:""}var LR=/^[^\/()?;=#]+/;function jR(t){let n=t.match(LR);return n?n[0]:""}var VR=/^[^=?&#]+/;function BR(t){let n=t.match(VR);return n?n[0]:""}var HR=/^[^&#]+/;function zR(t){let n=t.match(HR);return n?n[0]:""}var Np=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ie([],{}):new Ie([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new E(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ie]=new Ie(e,i)),r}parseSegment(){let n=Ip(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(n),new Nr(Ed(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=jR(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Ip(this.remaining);r&&(i=r,this.capture(i))}n[Ed(e)]=Ed(i)}parseQueryParam(n){let e=BR(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=zR(this.remaining);s&&(i=s,this.capture(i))}let r=V0(e),o=V0(i);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Ip(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=ie);let a=this.parseChildren(e+1);i[s??ie]=Object.keys(a).length===1&&a[ie]?a[ie]:new Ie([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new E(4011,!1)}};function eC(t){return t.segments.length>0?new Ie([],{[ie]:t}):t}function tC(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=tC(r);if(i===ie&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ie(t.segments,n);return UR(e)}function UR(t){if(t.numberOfChildren===1&&t.children[ie]){let n=t.children[ie];return new Ie(t.segments.concat(n.segments),n.children)}return t}function No(t){return t instanceof Mn}function $R(t,n,e=null,i=null,r=new Fr){let o=nC(t);return iC(o,n,e,i,r)}function nC(t){let n;function e(o){let s={};for(let c of o.children){let l=e(c);s[c.outlet]=l}let a=new Ie(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=eC(i);return n??r}function iC(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Mp(o,o,o,e,i,r);let s=GR(n);if(s.toRoot())return Mp(o,o,new Ie([],{}),e,i,r);let a=WR(s,o,t),c=a.processChildren?ba(a.segmentGroup,a.index,s.commands):oC(a.segmentGroup,a.index,s.commands);return Mp(o,a.segmentGroup,c,e,i,r)}function xd(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Ca(t){return typeof t=="object"&&t!=null&&t.outlets}function B0(t,n,e){t||="\u0275";let i=new Mn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Mp(t,n,e,i,r,o){let s={};for(let[l,d]of Object.entries(i??{}))s[l]=Array.isArray(d)?d.map(f=>B0(l,f,o)):B0(l,d,o);let a;t===n?a=e:a=rC(t,n,e);let c=eC(tC(a));return new Mn(c,s,r)}function rC(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=rC(o,n,e)}),new Ie(t.segments,i)}var Sd=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&xd(i[0]))throw new E(4003,!1);let r=i.find(Ca);if(r&&r!==SR(i))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function GR(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Sd(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Sd(e,n,i)}var ko=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function WR(t,n,e){if(t.isAbsolute)return new ko(n,!0,0);if(!e)return new ko(n,!1,NaN);if(e.parent===null)return new ko(e,!0,0);let i=xd(t.commands[0])?0:1,r=e.segments.length-1+i;return qR(e,r,t.numberOfDoubleDots)}function qR(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new E(4005,!1);r=i.segments.length}return new ko(i,!1,r-o)}function YR(t){return Ca(t[0])?t[0].outlets:{[ie]:t}}function oC(t,n,e){if(t??=new Ie([],{}),t.segments.length===0&&t.hasChildren())return ba(t,n,e);let i=QR(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ie(t.segments.slice(0,i.pathIndex),{});return o.children[ie]=new Ie(t.segments.slice(i.pathIndex),t.children),ba(o,0,r)}else return i.match&&r.length===0?new Ie(t.segments,{}):i.match&&!t.hasChildren()?Pp(t,n,e):i.match?ba(t,0,r):Pp(t,n,e)}function ba(t,n,e){if(e.length===0)return new Ie(t.segments,{});{let i=YR(e),r={};if(Object.keys(i).some(o=>o!==ie)&&t.children[ie]&&t.numberOfChildren===1&&t.children[ie].segments.length===0){let o=ba(t.children[ie],n,e);return new Ie(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=oC(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new Ie(t.segments,r)}}function QR(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(Ca(a))break;let c=`${a}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!z0(c,l,s))return o;i+=2}else{if(!z0(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Pp(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Ca(o)){let c=ZR(o.outlets);return new Ie(i,c)}if(r===0&&xd(e[0])){let c=t.segments[n];i.push(new Nr(c.path,H0(e[0]))),r++;continue}let s=Ca(o)?o.outlets[ie]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&xd(a)?(i.push(new Nr(s,H0(a))),r+=2):(i.push(new Nr(s,{})),r++)}return new Ie(i,{})}function ZR(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Pp(new Ie([],{}),0,i))}),n}function H0(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function z0(t,n,e){return t==e.path&&Wn(n,e.parameters)}var Ao="imperative",ct=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(ct||{}),ln=class{id;url;constructor(n,e){this.id=n,this.url=e}},Lr=class extends ln{type=ct.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},mi=class extends ln{urlAfterRedirects;type=ct.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Rt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Rt||{}),Ea=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Ea||{}),Sn=class extends ln{reason;code;type=ct.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function sC(t){return t instanceof Sn&&(t.code===Rt.Redirect||t.code===Rt.SupersededByNewNavigation)}var pi=class extends ln{reason;code;type=ct.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Po=class extends ln{error;target;type=ct.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Id=class extends ln{urlAfterRedirects;state;type=ct.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fp=class extends ln{urlAfterRedirects;state;type=ct.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lp=class extends ln{urlAfterRedirects;state;shouldActivate;type=ct.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},jp=class extends ln{urlAfterRedirects;state;type=ct.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vp=class extends ln{urlAfterRedirects;state;type=ct.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bp=class{route;type=ct.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Hp=class{route;type=ct.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},zp=class{snapshot;type=ct.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Up=class{snapshot;type=ct.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$p=class{snapshot;type=ct.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gp=class{snapshot;type=ct.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Da=class{routerEvent;position;anchor;scrollBehavior;type=ct.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Fo=class{},xa=class{},Lo=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function KR(t){return!(t instanceof Fo)&&!(t instanceof Lo)&&!(t instanceof xa)}var Wp=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Ra(this.rootInjector)}},Ra=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Wp(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(O(Te))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Md=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=qp(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=qp(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Yp(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Yp(n,this._root).map(e=>e.value)}};function qp(t,n){if(t===n.value)return n;for(let e of n.children){let i=qp(t,e);if(i)return i}return null}function Yp(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Yp(t,e);if(i.length)return i.unshift(n),i}return[]}var Zt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function To(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Td=class extends Md{snapshot;constructor(n,e){super(n),this.snapshot=e,rg(this,n)}toString(){return this.snapshot.toString()}};function aC(t,n){let e=XR(t,n),i=new Ue([new Nr("",{})]),r=new Ue({}),o=new Ue({}),s=new Ue({}),a=new Ue(""),c=new jr(i,r,s,a,o,ie,t,e.root);return c.snapshot=e.root,new Td(new Zt(c,[]),e)}function XR(t,n){let e={},i={},r={},s=new Sa([],e,r,"",i,ie,t,null,{},n);return new kd("",new Zt(s,[]))}var jr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,s,a,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(j(l=>l[ka]))??B(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(j(n=>Oo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(j(n=>Oo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ig(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&lC(r)&&(i.resolve[ka]=r.title),i}var Sa=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[ka]}constructor(n,e,i,r,o,s,a,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Oo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Oo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},kd=class extends Md{url;constructor(n,e){super(e),this.url=n,rg(this,e)}toString(){return cC(this._root)}};function rg(t,n){n.value._routerState=t,n.children.forEach(e=>rg(t,e))}function cC(t){let n=t.children.length>0?` { ${t.children.map(cC).join(", ")} } `:"";return`${t.value}${n}`}function Tp(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Wn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Wn(n.params,e.params)||t.paramsSubject.next(e.params),xR(n.url,e.url)||t.urlSubject.next(e.url),Wn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Qp(t,n){let e=Wn(t.params,n.params)&&kR(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Qp(t.parent,n.parent))}function lC(t){return typeof t.title=="string"||t.title===null}var JR=new b(""),dC=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ie;activateEvents=new ue;deactivateEvents=new ue;attachEvents=new ue;detachEvents=new ue;routerOutletData=s0();parentContexts=u(Ra);location=u(qt);changeDetector=u(Xe);inputBinder=u(Od,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Zp(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ut]})}return t})(),Zp=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===jr?this.route:n===Ra?this.childContexts:n===JR?this.outletData:this.parent.get(n,e)}},Od=new b("");var uC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&ne(0,"router-outlet")},dependencies:[dC],encapsulation:2})}return t})();function og(t){let n=t.children&&t.children.map(og),e=n?G(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ie&&(e.component=uC),e}function eO(t,n,e){let i=Ia(t,n._root,e?e._root:void 0);return new Td(i,n)}function Ia(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=tO(t,n,e);return new Zt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Ia(t,a)),s}}let i=nO(n.value),r=n.children.map(o=>Ia(t,o));return new Zt(i,r)}}function tO(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Ia(t,i,r);return Ia(t,i)})}function nO(t){return new jr(new Ue(t.url),new Ue(t.params),new Ue(t.queryParams),new Ue(t.fragment),new Ue(t.data),t.outlet,t.component,t)}var Ma=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},fC="ngNavigationCancelingError";function Ad(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=No(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=hC(!1,Rt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function hC(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[fC]=!0,e.cancellationCode=n,e}function iO(t){return mC(t)&&No(t.url)}function mC(t){return!!t&&t[fC]}var Kp=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Tp(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=To(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=To(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=To(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=To(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Gp(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Up(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Tp(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Tp(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},Rd=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ro=class{component;route;constructor(n,e){this.component=n,this.route=e}};function rO(t,n,e){let i=t._root,r=n?n._root:null;return ya(i,r,e,[i.value])}function oO(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Vo(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Vf(t)?t:n.get(t):i}function ya(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=To(n);return t.children.forEach(s=>{sO(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>wa(a,e.getContext(s),r)),r}function sO(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=aO(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Rd(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?ya(t,n,a?a.children:null,i,r):ya(t,n,e,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ro(a.outlet.component,s))}else s&&wa(n,a,r),r.canActivateChecks.push(new Rd(i)),o.component?ya(t,null,a?a.children:null,i,r):ya(t,null,e,i,r);return r}function aO(t,n,e){if(typeof e=="function")return ot(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Pr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Pr(t.url,n.url)||!Wn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Qp(t,n)||!Wn(t.queryParams,n.queryParams);default:return!Qp(t,n)}}function wa(t,n,e){let i=To(t),r=t.value;Object.entries(i).forEach(([o,s])=>{r.component?n?wa(s,n.children.getContext(o),e):wa(s,null,e):wa(s,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Ro(n.outlet.component,r)):e.canDeactivateChecks.push(new Ro(null,r)):e.canDeactivateChecks.push(new Ro(null,r))}function Oa(t){return typeof t=="function"}function cO(t){return typeof t=="boolean"}function lO(t){return t&&Oa(t.canLoad)}function dO(t){return t&&Oa(t.canActivate)}function uO(t){return t&&Oa(t.canActivateChild)}function fO(t){return t&&Oa(t.canDeactivate)}function hO(t){return t&&Oa(t.canMatch)}function pC(t){return t instanceof nr||t?.name==="EmptyError"}var bd=Symbol("INITIAL_VALUE");function jo(){return lt(t=>ws(t.map(n=>n.pipe(rt(1),mn(bd)))).pipe(j(n=>{for(let e of n)if(e!==!0){if(e===bd)return bd;if(e===!1||mO(e))return e}return!0}),Ee(n=>n!==bd),rt(1)))}function mO(t){return No(t)||t instanceof Ma}function gC(t){return t.aborted?B(void 0).pipe(rt(1)):new K(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function vC(t){return Ce(gC(t))}function pO(t){return xt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?B(G(y({},n),{guardsResult:!0})):gO(o,e,i).pipe(xt(s=>s&&cO(s)?vO(e,r,t):B(s)),j(s=>G(y({},n),{guardsResult:s})))})}function gO(t,n,e){return Ae(t).pipe(xt(i=>CO(i.component,i.route,e,n)),Zn(i=>i!==!0,!0))}function vO(t,n,e){return Ae(n).pipe(oo(i=>Di(yO(i.route.parent,e),_O(i.route,e),wO(t,i.path),bO(t,i.route))),Zn(i=>i!==!0,!0))}function _O(t,n){return t!==null&&n&&n(new $p(t)),B(!0)}function yO(t,n){return t!==null&&n&&n(new zp(t)),B(!0)}function bO(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return B(!0);let i=e.map(r=>Cs(()=>{let o=n._environmentInjector,s=Vo(r,o),a=dO(s)?s.canActivate(n,t):ot(o,()=>s(n,t));return Vr(a).pipe(Zn())}));return B(i).pipe(jo())}function wO(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>oO(o)).filter(o=>o!==null).map(o=>Cs(()=>{let s=o.guards.map(a=>{let c=o.node._environmentInjector,l=Vo(a,c),d=uO(l)?l.canActivateChild(e,t):ot(c,()=>l(e,t));return Vr(d).pipe(Zn())});return B(s).pipe(jo())}));return B(r).pipe(jo())}function CO(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return B(!0);let o=r.map(s=>{let a=n._environmentInjector,c=Vo(s,a),l=fO(c)?c.canDeactivate(t,n,e,i):ot(a,()=>c(t,n,e,i));return Vr(l).pipe(Zn())});return B(o).pipe(jo())}function EO(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return B(!0);let s=o.map(a=>{let c=Vo(a,t),l=lO(c)?c.canLoad(n,e):ot(t,()=>c(n,e)),d=Vr(l);return r?d.pipe(vC(r)):d});return B(s).pipe(jo(),_C(i))}function _C(t){return bf(yt(n=>{if(typeof n!="boolean")throw Ad(t,n)}),j(n=>n===!0))}function DO(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return B(!0);let a=s.map(c=>{let l=Vo(c,t),d=hO(l)?l.canMatch(n,e,r):ot(t,()=>l(n,e,r));return Vr(d).pipe(vC(o))});return B(a).pipe(jo(),_C(i))}var hi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Ta=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function xO(t){throw new E(4e3,!1)}function SO(t){throw hC(!1,Rt.GuardRejected)}var Xp=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ie])throw xO(`${n.redirectTo}`);r=r.children[ie]}}async applyRedirectCommands(n,e,i,r,o){let s=await IO(e,r,o);if(s instanceof Mn)throw new Ta(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new Ta(a);return a}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Mn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s={};return Object.entries(e.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(n,c,i,r)}),new Ie(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new E(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function IO(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Dd(Vr(ot(e,()=>i(n))))}function MO(t,n){return t.providers&&!t._injector&&(t._injector=ia(t.providers,n,`Route: ${t.path}`)),t._injector??n}function In(t){return t.outlet||ie}function TO(t,n){let e=t.filter(i=>In(i)===n);return e.push(...t.filter(i=>In(i)!==n)),e}var Jp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function yC(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function kO(t,n,e,i,r,o,s){let a=bC(t,n,e);if(!a.matched)return B(a);let c=yC(o(a));return i=MO(n,i),DO(i,n,e,r,c,s).pipe(j(l=>l===!0?a:y({},Jp)))}function bC(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},Jp):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||DR)(e,t,n);if(!r)return y({},Jp);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function U0(t,n,e,i,r){return e.length>0&&OO(t,e,i,r)?{segmentGroup:new Ie(n,RO(i,new Ie(e,t.children))),slicedSegments:[]}:e.length===0&&NO(t,e,i)?{segmentGroup:new Ie(t.segments,AO(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ie(t.segments,t.children),slicedSegments:e}}function AO(t,n,e,i){let r={};for(let o of e)if(Nd(t,n,o)&&!i[In(o)]){let s=new Ie([],{});r[In(o)]=s}return y(y({},i),r)}function RO(t,n){let e={};e[ie]=n;for(let i of t)if(i.path===""&&In(i)!==ie){let r=new Ie([],{});e[In(i)]=r}return e}function OO(t,n,e,i){return e.some(r=>!Nd(t,n,r)||!(In(r)!==ie)?!1:!(i!==void 0&&In(r)===i))}function NO(t,n,e){return e.some(i=>Nd(t,n,i))}function Nd(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function PO(t,n,e){return n.length===0&&!t.children[e]}var eg=class{};async function FO(t,n,e,i,r,o,s="emptyOnly",a){return new tg(t,n,e,i,r,s,o,a).recognize()}var LO=31,tg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new Xp(this.urlSerializer,this.urlTree)}noMatchError(n){return new E(4002,`'${n.segmentGroup}'`)}async recognize(){let n=U0(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Zt(i,e),o=new kd("",r),s=$R(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new Sa([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ie,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ie,e),rootSnapshot:e}}catch(i){if(i instanceof Ta)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof hi?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=await this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof Zt?[s]:[]}async processChildren(n,e,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let s=[];for(let c of o){let l=i.children[c],d=TO(e,c),f=await this.processSegmentGroup(n,d,l,c,r);s.push(...f)}let a=wC(s);return jO(a),a}async processSegment(n,e,i,r,o,s,a){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,s,a)}catch(l){if(l instanceof hi||pC(l))continue;throw l}if(PO(i,r,o))return new eg;throw new hi(i)}async processSegmentAgainstRoute(n,e,i,r,o,s,a,c){if(In(i)!==s&&(s===ie||!Nd(r,o,i)))throw new hi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,c);throw new hi(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:f,remainingSegments:m}=bC(e,r,o);if(!c)throw new hi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>LO&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let p=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,yC(h),n),w=await this.applyRedirects.lineralizeSegments(r,p);return this.processSegment(n,i,e,w.concat(m),s,!1,a)}createSnapshot(n,e,i,r,o){let s=new Sa(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,BO(e),In(e),e.component??e._loadedComponent??null,e,HO(e),n),a=ig(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=pe=>this.createSnapshot(n,i,pe.consumedSegments,pe.parameters,s),c=await Dd(kO(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new hi(e);n=i._injector??n;let{routes:l}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:m,remainingSegments:h}=c,p=this.createSnapshot(n,i,m,f,s),{segmentGroup:w,slicedSegments:x}=U0(e,m,h,l,o);if(x.length===0&&w.hasChildren()){let pe=await this.processChildren(d,l,w,p);return new Zt(p,pe)}if(l.length===0&&x.length===0)return new Zt(p,[]);let S=In(i)===o,H=await this.processSegment(d,l,w,x,S?ie:o,!0,p);return new Zt(p,H instanceof Zt?[H]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Dd(EO(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw SO(e)}return{routes:[],injector:n}}};function jO(t){t.sort((n,e)=>n.value.outlet===ie?-1:e.value.outlet===ie?1:n.value.outlet.localeCompare(e.value.outlet))}function VO(t){let n=t.value.routeConfig;return n&&n.path===""}function wC(t){let n=[],e=new Set;for(let i of t){if(!VO(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=wC(i.children);n.push(new Zt(i.value,r))}return n.filter(i=>!e.has(i))}function BO(t){return t.data||{}}function HO(t){return t.resolve||{}}function zO(t,n,e,i,r,o,s){return xt(async a=>{let{state:c,tree:l}=await FO(t,n,e,i,a.extractedUrl,r,o,s);return G(y({},a),{targetSnapshot:c,urlAfterRedirects:l})})}function UO(t){return xt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return B(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let c of CC(a))o.add(c);let s=0;return Ae(o).pipe(oo(a=>r.has(a)?$O(a,e,t):(a.data=ig(a,a.parent,t).resolve,B(void 0))),yt(()=>s++),zc(1),xt(a=>s===o.size?B(n):$e))})}function CC(t){let n=t.children.map(e=>CC(e)).flat();return[t,...n]}function $O(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!lC(i)&&(r[ka]=i.title),Cs(()=>(t.data=ig(t,t.parent,e).resolve,GO(r,t,n).pipe(j(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function GO(t,n,e){let i=Ap(t);if(i.length===0)return B({});let r={};return Ae(i).pipe(xt(o=>WO(t[o],n,e).pipe(Zn(),yt(s=>{if(s instanceof Ma)throw Ad(new Fr,s);r[o]=s}))),zc(1),j(()=>r),en(o=>pC(o)?$e:ys(o)))}function WO(t,n,e){let i=n._environmentInjector,r=Vo(t,i),o=r.resolve?r.resolve(n,e):ot(i,()=>r(n,e));return Vr(o)}function $0(t){return lt(n=>{let e=t(n);return e?Ae(e).pipe(j(()=>n)):B(n)})}var EC=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ie);return i}getResolvedTitleForRoute(e){return e.data[ka]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(qO),providedIn:"root"})}return t})(),qO=(()=>{class t extends EC{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(O(F0))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pd=new b("",{factory:()=>({})}),Fd=new b(""),DC=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(np);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await W0(ot(e,()=>i.loadComponent())),s=await SC(xC(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await YO(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function YO(t,n,e,i){let r=await W0(ot(e,()=>t.loadChildren())),o=await SC(xC(r)),s;o instanceof ed||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),i&&i(t);let a,c,l=!1,d;return Array.isArray(s)?(c=s,l=!0):(a=s.create(e).injector,d=s,c=a.get(Fd,[],{optional:!0,self:!0}).flat()),{routes:c.map(og),injector:a,factory:d}}function QO(t){return t&&typeof t=="object"&&"default"in t}function xC(t){return QO(t)?t.default:t}async function SC(t){return t}var sg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(ZO),providedIn:"root"})}return t})(),ZO=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),IC=new b("");var KO=()=>{},MC=new b(""),ag=(()=>{class t{currentNavigation=Y(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Y(null);events=new M;transitionAbortWithErrorSubject=new M;configLoader=u(DC);environmentInjector=u(Te);destroyRef=u(at);urlSerializer=u(Aa);rootContexts=u(Ra);location=u(ui);inputBindingEnabled=u(Od,{optional:!0})!==null;titleStrategy=u(EC);options=u(Pd,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(sg);createViewTransition=u(IC,{optional:!0});navigationErrorHandler=u(MC,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>B(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Bp(r)),i=r=>this.events.next(new Hp(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Ze(()=>{this.transitions?.next(G(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ue(null),this.transitions.pipe(Ee(i=>i!==null),lt(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return B(i).pipe(lt(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Rt.SupersededByNewNavigation),$e;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:c?G(y({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&d!=="reload")return this.events.next(new pi(a.id,this.urlSerializer.serialize(a.rawUrl),"",Ea.IgnoredSameUrlNavigation)),a.resolve(!1),$e;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return B(a).pipe(lt(f=>(this.events.next(new Lr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?$e:Promise.resolve(f))),zO(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),yt(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=f.urlAfterRedirects,m)),this.events.next(new xa)}),lt(f=>Ae(i.routesRecognizeHandler.deferredHandle??B(void 0)).pipe(j(()=>f))),yt(()=>{let f=new Id(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:m,source:h,restoredState:p,extras:w}=a,x=new Lr(f,this.urlSerializer.serialize(m),h,p);this.events.next(x);let S=aC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=G(y({},a),{targetSnapshot:S,urlAfterRedirects:m,extras:G(y({},w),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(H=>(H.finalUrl=m,H)),B(i)}else return this.events.next(new pi(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Ea.IgnoredByUrlHandlingStrategy)),a.resolve(!1),$e}),j(a=>{let c=new Fp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(c),this.currentTransition=i=G(y({},a),{guards:rO(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),pO(a=>this.events.next(a)),lt(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Ad(this.urlSerializer,a.guardsResult);let c=new Lp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(c),!s())return $e;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",Rt.GuardRejected),$e;if(a.guards.canActivateChecks.length===0)return B(a);let l=new jp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(l),!s())return $e;let d=!1;return B(a).pipe(UO(this.paramsInheritanceStrategy),yt({next:()=>{d=!0;let f=new Vp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(a,"",Rt.NoDataFromResolver)}}))}),$0(a=>{let c=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let m=d._environmentInjector;f.push(this.configLoader.loadComponent(m,d.routeConfig).then(h=>{d.component=h}))}for(let m of d.children)f.push(...c(m));return f},l=c(a.targetSnapshot.root);return l.length===0?B(a):Ae(Promise.all(l).then(()=>a))}),$0(()=>this.afterPreactivation()),lt(()=>{let{currentSnapshot:a,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return l?Ae(l).pipe(j(()=>i)):B(i)}),rt(1),lt(a=>{let c=eO(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=G(y({},a),{targetRouterState:c}),this.currentNavigation.update(d=>(d.targetRouterState=c,d)),this.events.next(new Fo);let l=i.beforeActivateHandler.deferredHandle;return l?Ae(l.then(()=>a)):B(a)}),yt(a=>{new Kp(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(c=>(c.abort=KO,c)),this.lastSuccessfulNavigation.set(Ze(this.currentNavigation)),this.events.next(new mi(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),Ce(gC(o.signal).pipe(Ee(()=>!r&&!i.targetRouterState),yt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Rt.Aborted)}))),yt({complete:()=>{r=!0}}),Ce(this.transitionAbortWithErrorSubject.pipe(yt(a=>{throw a}))),or(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Rt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),en(a=>{if(r=!0,this.destroyed)return i.resolve(!1),$e;if(mC(a))this.events.next(new Sn(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),iO(a)?this.events.next(new Lo(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let c=new Po(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let l=ot(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Ma){let{message:d,cancellationCode:f}=Ad(this.urlSerializer,l);this.events.next(new Sn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,f)),this.events.next(new Lo(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return $e}))}))}cancelNavigationTransition(e,i,r){let o=new Sn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Ze(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function XO(t){return t!==Ao}var TC=new b("");var JO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(eN),providedIn:"root"})}return t})(),ng=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},eN=(()=>{class t extends ng{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cg=(()=>{class t{urlSerializer=u(Aa);options=u(Pd,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(ui);urlHandlingStrategy=u(sg);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Mn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof Mn?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=aC(null,u(Te));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:()=>u(tN),providedIn:"root"})}return t})(),tN=(()=>{class t extends cg{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Lr?this.updateStateMemento():e instanceof pi?this.commitTransition(i):e instanceof Id?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Fo?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Sn&&!sC(e)?this.restoreHistory(i):e instanceof Po?this.restoreHistory(i,!0):e instanceof mi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:s}=i;if(this.location.isCurrentPathEqualTo(e)||o){let a=this.browserPageId,c=y(y({},s),this.generateNgRouterState(r,a));this.location.replaceState(e,"",c)}else{let a=y(y({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function kC(t,n){t.events.pipe(Ee(e=>e instanceof mi||e instanceof Sn||e instanceof Po||e instanceof pi),j(e=>e instanceof mi||e instanceof pi?0:(e instanceof Sn?e.code===Rt.Redirect||e.code===Rt.SupersededByNewNavigation:!1)?2:1),Ee(e=>e!==2),rt(1)).subscribe(()=>{n()})}var lg=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(td);stateManager=u(cg);options=u(Pd,{optional:!0})||{};pendingTasks=u(ri);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(ag);urlSerializer=u(Aa);location=u(ui);urlHandlingStrategy=u(sg);injector=u(Te);_events=new M;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(JO);injectorCleanup=u(TC,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Fd,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Od,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Me;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Ze(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Sn&&i.code!==Rt.Redirect&&i.code!==Rt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof mi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Lo){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||XO(r.source)},s);this.scheduleNavigation(a,Ao,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}KR(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ao,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null;if(r){let c=y({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let a=this.parseUrl(e);this.scheduleNavigation(a,i,s,o).catch(c=>{this.disposed||this.injector.get(an)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ze(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(og),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let m=r?r.snapshot:this.routerState.snapshot.root;f=nC(m)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return iC(f,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=No(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ao,null,i)}navigate(e,i={skipLocationChange:!1}){return nN(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Vn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},Y0):i===!1?r=y({},Rp):r=y(y({},Rp),i),No(e))return j0(this.currentUrlTree,e,r);let o=this.parseUrl(e);return j0(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((f,m)=>{a=f,c=m});let d=this.pendingTasks.add();return kC(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nN(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new E(4008,!1)}var AC=new b(""),iN=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ao;restoredId=0;store={};urlSerializer=u(Aa);zone=u(T);viewportScroller=u(y0);transitions=u(ag);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Lr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof mi?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof pi&&e.code===Ea.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Da)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=Ze(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Da(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Wm()};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();function dg(t,...n){return Ti([{provide:Fd,multi:!0,useValue:t},[],{provide:jr,useFactory:rN},{provide:id,multi:!0,useFactory:sN},n.map(e=>e.\u0275providers)])}function rN(){return u(lg).routerState.root}function oN(t,n){return{\u0275kind:t,\u0275providers:n}}function ug(t={}){return oN(4,[{provide:AC,useFactory:()=>new iN(t)}])}function sN(){let t=u(re);return n=>{let e=t.get(Yt);if(n!==e.components[0])return;let i=t.get(lg),r=t.get(aN);t.get(cN)===1&&i.initialNavigation(),t.get(lN,null,{optional:!0})?.setUpPreloading(),t.get(AC,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var aN=new b("",{factory:()=>new M}),cN=new b("",{factory:()=>1});var lN=new b("");var fe=(function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t})(fe||{}),Tn="*";function RC(t,n=null){return{type:fe.Sequence,steps:t,options:n}}function fg(t){return{type:fe.Style,styles:t,offset:null}}var gi=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Bo=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,i=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++e==o&&this._onFinish()}),s.onDestroy(()=>{++i==o&&this._onDestroy()}),s.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((s,a)=>Math.max(s,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(r)})}getPosition(){let n=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Na="!";function OC(t){return new E(3e3,!1)}function uN(){return new E(3100,!1)}function fN(){return new E(3101,!1)}function hN(t){return new E(3001,!1)}function mN(t){return new E(3003,!1)}function pN(t){return new E(3004,!1)}function PC(t,n){return new E(3005,!1)}function FC(){return new E(3006,!1)}function LC(){return new E(3007,!1)}function jC(t,n){return new E(3008,!1)}function VC(t){return new E(3002,!1)}function BC(t,n,e,i,r){return new E(3010,!1)}function HC(){return new E(3011,!1)}function zC(){return new E(3012,!1)}function UC(){return new E(3200,!1)}function $C(){return new E(3202,!1)}function GC(){return new E(3013,!1)}function WC(t){return new E(3014,!1)}function qC(t){return new E(3015,!1)}function YC(t){return new E(3016,!1)}function QC(t,n){return new E(3404,!1)}function gN(t){return new E(3502,!1)}function ZC(t){return new E(3503,!1)}function KC(){return new E(3300,!1)}function XC(t){return new E(3504,!1)}function JC(t){return new E(3301,!1)}function eE(t,n){return new E(3302,!1)}function tE(t){return new E(3303,!1)}function nE(t,n){return new E(3400,!1)}function iE(t){return new E(3401,!1)}function rE(t){return new E(3402,!1)}function oE(t,n){return new E(3505,!1)}function vi(t){switch(t.length){case 0:return new gi;case 1:return t[0];default:return new Bo(t)}}function gg(t,n,e=new Map,i=new Map){let r=[],o=[],s=-1,a=null;if(n.forEach(c=>{let l=c.get("offset"),d=l==s,f=d&&a||new Map;c.forEach((m,h)=>{let p=h,w=m;if(h!=="offset")switch(p=t.normalizePropertyName(p,r),w){case Na:w=e.get(h);break;case Tn:w=i.get(h);break;default:w=t.normalizeStyleValue(h,p,w,r);break}f.set(p,w)}),d||o.push(f),a=f,s=l}),r.length)throw gN(r);return o}function Ld(t,n,e,i){switch(n){case"start":t.onStart(()=>i(e&&hg(e,"start",t)));break;case"done":t.onDone(()=>i(e&&hg(e,"done",t)));break;case"destroy":t.onDestroy(()=>i(e&&hg(e,"destroy",t)));break}}function hg(t,n,e){let i=e.totalTime,r=!!e.disabled,o=jd(t.element,t.triggerName,t.fromState,t.toState,n||t.phaseName,i??t.totalTime,r),s=t._data;return s!=null&&(o._data=s),o}function jd(t,n,e,i,r="",o=0,s){return{element:t,triggerName:n,fromState:e,toState:i,phaseName:r,totalTime:o,disabled:!!s}}function jt(t,n,e){let i=t.get(n);return i||t.set(n,i=e),i}function vg(t){let n=t.indexOf(":"),e=t.substring(1,n),i=t.slice(n+1);return[e,i]}var vN=typeof document>"u"?null:document.documentElement;function Vd(t){let n=t.parentNode||t.host||null;return n===vN?null:n}function _N(t){return t.substring(1,6)=="ebkit"}var Br=null,NC=!1;function sE(t){Br||(Br=yN()||{},NC=Br.style?"WebkitAppearance"in Br.style:!1);let n=!0;return Br.style&&!_N(t)&&(n=t in Br.style,!n&&NC&&(n="Webkit"+t.charAt(0).toUpperCase()+t.slice(1)in Br.style)),n}function yN(){return typeof document<"u"?document.body:null}function _g(t,n){for(;n;){if(n===t)return!0;n=Vd(n)}return!1}function yg(t,n,e){if(e)return Array.from(t.querySelectorAll(n));let i=t.querySelector(n);return i?[i]:[]}var bN=1e3,bg="{{",wN="}}",wg="ng-enter",Bd="ng-leave",Pa="ng-trigger",Fa=".ng-trigger",Cg="ng-animating",Hd=".ng-animating";function qn(t){if(typeof t=="number")return t;let n=t.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:mg(parseFloat(n[1]),n[2])}function mg(t,n){return n==="s"?t*bN:t}function La(t,n,e){return t.hasOwnProperty("duration")?t:EN(t,n,e)}var CN=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function EN(t,n,e){let i,r=0,o="";if(typeof t=="string"){let s=t.match(CN);if(s===null)return n.push(OC(t)),{duration:0,delay:0,easing:""};i=mg(parseFloat(s[1]),s[2]);let a=s[3];a!=null&&(r=mg(parseFloat(a),s[4]));let c=s[5];c&&(o=c)}else i=t;if(!e){let s=!1,a=n.length;i<0&&(n.push(uN()),s=!0),r<0&&(n.push(fN()),s=!0),s&&n.splice(a,0,OC(t))}return{duration:i,delay:r,easing:o}}function aE(t){return t.length?t[0]instanceof Map?t:t.map(n=>new Map(Object.entries(n))):[]}function kn(t,n,e){n.forEach((i,r)=>{let o=zd(r);e&&!e.has(r)&&e.set(r,t.style[o]),t.style[o]=i})}function Ui(t,n){n.forEach((e,i)=>{let r=zd(i);t.style[r]=""})}function Ho(t){return Array.isArray(t)?t.length==1?t[0]:RC(t):t}function cE(t,n,e){let i=n.params||{},r=Eg(t);r.length&&r.forEach(o=>{i.hasOwnProperty(o)||e.push(hN(o))})}var pg=new RegExp(`${bg}\\s*(.+?)\\s*${wN}`,"g");function Eg(t){let n=[];if(typeof t=="string"){let e;for(;e=pg.exec(t);)n.push(e[1]);pg.lastIndex=0}return n}function zo(t,n,e){let i=`${t}`,r=i.replace(pg,(o,s)=>{let a=n[s];return a==null&&(e.push(mN(s)),a=""),a.toString()});return r==i?t:r}var DN=/-+([a-z0-9])/g;function zd(t){return t.replace(DN,(...n)=>n[1].toUpperCase())}function lE(t,n){return t===0||n===0}function dE(t,n,e){if(e.size&&n.length){let i=n[0],r=[];if(e.forEach((o,s)=>{i.has(s)||r.push(s),i.set(s,o)}),r.length)for(let o=1;o<n.length;o++){let s=n[o];r.forEach(a=>s.set(a,Ud(t,a)))}}return n}function Vt(t,n,e){switch(n.type){case fe.Trigger:return t.visitTrigger(n,e);case fe.State:return t.visitState(n,e);case fe.Transition:return t.visitTransition(n,e);case fe.Sequence:return t.visitSequence(n,e);case fe.Group:return t.visitGroup(n,e);case fe.Animate:return t.visitAnimate(n,e);case fe.Keyframes:return t.visitKeyframes(n,e);case fe.Style:return t.visitStyle(n,e);case fe.Reference:return t.visitReference(n,e);case fe.AnimateChild:return t.visitAnimateChild(n,e);case fe.AnimateRef:return t.visitAnimateRef(n,e);case fe.Query:return t.visitQuery(n,e);case fe.Stagger:return t.visitStagger(n,e);default:throw pN(n.type)}}function Ud(t,n){return window.getComputedStyle(t)[n]}var Bg=(()=>{class t{validateStyleProperty(e){return sE(e)}containsElement(e,i){return _g(e,i)}getParentElement(e){return Vd(e)}query(e,i,r){return yg(e,i,r)}computeStyle(e,i,r){return r||""}animate(e,i,r,o,s,a=[],c){return new gi(r,o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),zr=class{static NOOP=new Bg},Ur=class{};var xN=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Yd=class extends Ur{normalizePropertyName(n,e){return zd(n)}normalizeStyleValue(n,e,i,r){let o="",s=i.toString().trim();if(xN.has(e)&&i!==0&&i!=="0")if(typeof i=="number")o="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(PC(n,i))}return s+o}};var Qd="*";function SN(t,n){let e=[];return typeof t=="string"?t.split(/\s*,\s*/).forEach(i=>IN(i,e,n)):e.push(t),e}function IN(t,n,e){if(t[0]==":"){let c=MN(t,e);if(typeof c=="function"){n.push(c);return}t=c}let i=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return e.push(qC(t)),n;let r=i[1],o=i[2],s=i[3];n.push(uE(r,s));let a=r==Qd&&s==Qd;o[0]=="<"&&!a&&n.push(uE(s,r))}function MN(t,n){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,i)=>parseFloat(i)>parseFloat(e);case":decrement":return(e,i)=>parseFloat(i)<parseFloat(e);default:return n.push(YC(t)),"* => *"}}var $d=new Set(["true","1"]),Gd=new Set(["false","0"]);function uE(t,n){let e=$d.has(t)||Gd.has(t),i=$d.has(n)||Gd.has(n);return(r,o)=>{let s=t==Qd||t==r,a=n==Qd||n==o;return!s&&e&&typeof r=="boolean"&&(s=r?$d.has(t):Gd.has(t)),!a&&i&&typeof o=="boolean"&&(a=o?$d.has(n):Gd.has(n)),s&&a}}var wE=":self",TN=new RegExp(`s*${wE}s*,?`,"g");function CE(t,n,e,i){return new Tg(t).build(n,e,i)}var fE="",Tg=class{_driver;constructor(n){this._driver=n}build(n,e,i){let r=new kg(e);return this._resetContextStyleTimingState(r),Vt(this,Ho(n),r)}_resetContextStyleTimingState(n){n.currentQuerySelector=fE,n.collectedStyles=new Map,n.collectedStyles.set(fE,new Map),n.currentTime=0}visitTrigger(n,e){let i=e.queryCount=0,r=e.depCount=0,o=[],s=[];return n.name.charAt(0)=="@"&&e.errors.push(FC()),n.definitions.forEach(a=>{if(this._resetContextStyleTimingState(e),a.type==fe.State){let c=a,l=c.name;l.toString().split(/\s*,\s*/).forEach(d=>{c.name=d,o.push(this.visitState(c,e))}),c.name=l}else if(a.type==fe.Transition){let c=this.visitTransition(a,e);i+=c.queryCount,r+=c.depCount,s.push(c)}else e.errors.push(LC())}),{type:fe.Trigger,name:n.name,states:o,transitions:s,queryCount:i,depCount:r,options:null}}visitState(n,e){let i=this.visitStyle(n.styles,e),r=n.options&&n.options.params||null;if(i.containsDynamicStyles){let o=new Set,s=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(c=>{Eg(c).forEach(l=>{s.hasOwnProperty(l)||o.add(l)})})}),o.size&&e.errors.push(jC(n.name,[...o.values()]))}return{type:fe.State,name:n.name,style:i,options:r?{params:r}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let i=Vt(this,Ho(n.animation),e),r=SN(n.expr,e.errors);return{type:fe.Transition,matchers:r,animation:i,queryCount:e.queryCount,depCount:e.depCount,options:Hr(n.options)}}visitSequence(n,e){return{type:fe.Sequence,steps:n.steps.map(i=>Vt(this,i,e)),options:Hr(n.options)}}visitGroup(n,e){let i=e.currentTime,r=0,o=n.steps.map(s=>{e.currentTime=i;let a=Vt(this,s,e);return r=Math.max(r,e.currentTime),a});return e.currentTime=r,{type:fe.Group,steps:o,options:Hr(n.options)}}visitAnimate(n,e){let i=ON(n.timings,e.errors);e.currentAnimateTimings=i;let r,o=n.styles?n.styles:fg({});if(o.type==fe.Keyframes)r=this.visitKeyframes(o,e);else{let s=n.styles,a=!1;if(!s){a=!0;let l={};i.easing&&(l.easing=i.easing),s=fg(l)}e.currentTime+=i.duration+i.delay;let c=this.visitStyle(s,e);c.isEmptyStep=a,r=c}return e.currentAnimateTimings=null,{type:fe.Animate,timings:i,style:r,options:null}}visitStyle(n,e){let i=this._makeStyleAst(n,e);return this._validateStyleAst(i,e),i}_makeStyleAst(n,e){let i=[],r=Array.isArray(n.styles)?n.styles:[n.styles];for(let a of r)typeof a=="string"?a===Tn?i.push(a):e.errors.push(VC(a)):i.push(new Map(Object.entries(a)));let o=!1,s=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(s=a.get("easing"),a.delete("easing")),!o)){for(let c of a.values())if(c.toString().indexOf(bg)>=0){o=!0;break}}}),{type:fe.Style,styles:i,easing:s,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let i=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;i&&o>0&&(o-=i.duration+i.delay),n.styles.forEach(s=>{typeof s!="string"&&s.forEach((a,c)=>{let l=e.collectedStyles.get(e.currentQuerySelector),d=l.get(c),f=!0;d&&(o!=r&&o>=d.startTime&&r<=d.endTime&&(e.errors.push(BC(c,d.startTime,d.endTime,o,r)),f=!1),o=d.startTime),f&&l.set(c,{startTime:o,endTime:r}),e.options&&cE(a,e.options,e.errors)})})}visitKeyframes(n,e){let i={type:fe.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(HC()),i;let r=1,o=0,s=[],a=!1,c=!1,l=0,d=n.steps.map(S=>{let H=this._makeStyleAst(S,e),pe=H.offset!=null?H.offset:RN(H.styles),he=0;return pe!=null&&(o++,he=H.offset=pe),c=c||he<0||he>1,a=a||he<l,l=he,s.push(he),H});c&&e.errors.push(zC()),a&&e.errors.push(UC());let f=n.steps.length,m=0;o>0&&o<f?e.errors.push($C()):o==0&&(m=r/(f-1));let h=f-1,p=e.currentTime,w=e.currentAnimateTimings,x=w.duration;return d.forEach((S,H)=>{let pe=m>0?H==h?1:m*H:s[H],he=pe*x;e.currentTime=p+w.delay+he,w.duration=he,this._validateStyleAst(S,e),S.offset=pe,i.styles.push(S)}),i}visitReference(n,e){return{type:fe.Reference,animation:Vt(this,Ho(n.animation),e),options:Hr(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:fe.AnimateChild,options:Hr(n.options)}}visitAnimateRef(n,e){return{type:fe.AnimateRef,animation:this.visitReference(n.animation,e),options:Hr(n.options)}}visitQuery(n,e){let i=e.currentQuerySelector,r=n.options||{};e.queryCount++,e.currentQuery=n;let[o,s]=kN(n.selector);e.currentQuerySelector=i.length?i+" "+o:o,jt(e.collectedStyles,e.currentQuerySelector,new Map);let a=Vt(this,Ho(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=i,{type:fe.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:s,animation:a,originalSelector:n.selector,options:Hr(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(GC());let i=n.timings==="full"?{duration:0,delay:0,easing:"full"}:La(n.timings,e.errors,!0);return{type:fe.Stagger,animation:Vt(this,Ho(n.animation),e),timings:i,options:null}}};function kN(t){let n=!!t.split(/\s*,\s*/).find(e=>e==wE);return n&&(t=t.replace(TN,"")),t=t.replace(/@\*/g,Fa).replace(/@\w+/g,e=>Fa+"-"+e.slice(1)).replace(/:animating/g,Hd),[t,n]}function AN(t){return t?y({},t):null}var kg=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function RN(t){if(typeof t=="string")return null;let n=null;if(Array.isArray(t))t.forEach(e=>{if(e instanceof Map&&e.has("offset")){let i=e;n=parseFloat(i.get("offset")),i.delete("offset")}});else if(t instanceof Map&&t.has("offset")){let e=t;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function ON(t,n){if(t.hasOwnProperty("duration"))return t;if(typeof t=="number"){let o=La(t,n).duration;return Dg(o,0,"")}let e=t;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=Dg(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=La(e,n);return Dg(r.duration,r.delay,r.easing)}function Hr(t){return t?(t=y({},t),t.params&&(t.params=AN(t.params))):t={},t}function Dg(t,n,e){return{duration:t,delay:n,easing:e}}function Hg(t,n,e,i,r,o,s=null,a=!1){return{type:1,element:t,keyframes:n,preStyleProps:e,postStyleProps:i,duration:r,delay:o,totalTime:r+o,easing:s,subTimeline:a}}var Va=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let i=this._map.get(n);i||this._map.set(n,i=[]),i.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},NN=1,PN=":enter",FN=new RegExp(PN,"g"),LN=":leave",jN=new RegExp(LN,"g");function EE(t,n,e,i,r,o=new Map,s=new Map,a,c,l=[]){return new Ag().buildKeyframes(t,n,e,i,r,o,s,a,c,l)}var Ag=class{buildKeyframes(n,e,i,r,o,s,a,c,l,d=[]){l=l||new Va;let f=new Rg(n,e,l,r,o,d,[]);f.options=c;let m=c.delay?qn(c.delay):0;f.currentTimeline.delayNextStep(m),f.currentTimeline.setStyles([s],null,f.errors,c),Vt(this,i,f);let h=f.timelines.filter(p=>p.containsAnimation());if(h.length&&a.size){let p;for(let w=h.length-1;w>=0;w--){let x=h[w];if(x.element===e){p=x;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([a],null,f.errors,c)}return h.length?h.map(p=>p.buildKeyframes()):[Hg(e,[],[],[],0,m,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let i=e.subInstructions.get(e.element);if(i){let r=e.createSubContext(n.options),o=e.currentTimeline.currentTime,s=this._visitSubInstructions(i,r,r.options);o!=s&&e.transformIntoNewTimeline(s)}e.previousNode=n}visitAnimateRef(n,e){let i=e.createSubContext(n.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,i),this.visitReference(n.animation,i),e.transformIntoNewTimeline(i.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,i){for(let r of n){let o=r?.delay;if(o){let s=typeof o=="number"?o:qn(zo(o,r?.params??{},e.errors));i.delayNextStep(s)}}}_visitSubInstructions(n,e,i){let o=e.currentTimeline.currentTime,s=i.duration!=null?qn(i.duration):null,a=i.delay!=null?qn(i.delay):null;return s!==0&&n.forEach(c=>{let l=e.appendInstructionToTimeline(c,s,a);o=Math.max(o,l.duration+l.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),Vt(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let i=e.subContextCount,r=e,o=n.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==fe.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Zd);let s=qn(o.delay);r.delayNextStep(s)}n.steps.length&&(n.steps.forEach(s=>Vt(this,s,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let i=[],r=e.currentTimeline.currentTime,o=n.options&&n.options.delay?qn(n.options.delay):0;n.steps.forEach(s=>{let a=e.createSubContext(n.options);o&&a.delayNextStep(o),Vt(this,s,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(s=>e.currentTimeline.mergeTimelineCollectedStyles(s)),e.transformIntoNewTimeline(r),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let i=n.strValue,r=e.params?zo(i,e.params,e.errors):i;return La(r,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let i=e.currentAnimateTimings=this._visitTiming(n.timings,e),r=e.currentTimeline;i.delay&&(e.incrementTime(i.delay),r.snapshotCurrentStyles());let o=n.style;o.type==fe.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(i.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let i=e.currentTimeline,r=e.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let o=r&&r.easing||n.easing;n.isEmptyStep?i.applyEmptyStep(o):i.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let i=e.currentAnimateTimings,r=e.currentTimeline.duration,o=i.duration,a=e.createSubContext().currentTimeline;a.easing=i.easing,n.styles.forEach(c=>{let l=c.offset||0;a.forwardTime(l*o),a.setStyles(c.styles,c.easing,e.errors,e.options),a.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(a),e.transformIntoNewTimeline(r+o),e.previousNode=n}visitQuery(n,e){let i=e.currentTimeline.currentTime,r=n.options||{},o=r.delay?qn(r.delay):0;o&&(e.previousNode.type===fe.Style||i==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Zd);let s=i,a=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=a.length;let c=null;a.forEach((l,d)=>{e.currentQueryIndex=d;let f=e.createSubContext(n.options,l);o&&f.delayNextStep(o),l===e.element&&(c=f.currentTimeline),Vt(this,n.animation,f),f.currentTimeline.applyStylesToKeyframe();let m=f.currentTimeline.currentTime;s=Math.max(s,m)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(s),c&&(e.currentTimeline.mergeTimelineCollectedStyles(c),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let i=e.parentContext,r=e.currentTimeline,o=n.timings,s=Math.abs(o.duration),a=s*(e.currentQueryTotal-1),c=s*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":c=a-c;break;case"full":c=i.currentStaggerTime;break}let d=e.currentTimeline;c&&d.delayNextStep(c);let f=d.currentTime;Vt(this,n.animation,e),e.previousNode=n,i.currentStaggerTime=r.currentTime-f+(r.startTime-i.currentTimeline.startTime)}},Zd={},Rg=class t{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Zd;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,i,r,o,s,a,c){this._driver=n,this.element=e,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=o,this.errors=s,this.timelines=a,this.currentTimeline=c||new Kd(this._driver,e,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let i=n,r=this.options;i.duration!=null&&(r.duration=qn(i.duration)),i.delay!=null&&(r.delay=qn(i.delay));let o=i.params;if(o){let s=r.params;s||(s=this.options.params={}),Object.keys(o).forEach(a=>{(!e||!s.hasOwnProperty(a))&&(s[a]=zo(o[a],s,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let i=n.params={};Object.keys(e).forEach(r=>{i[r]=e[r]})}}return n}createSubContext(n=null,e,i){let r=e||this.element,o=new t(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=Zd,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,i){let r={duration:e??n.duration,delay:this.currentTimeline.currentTime+(i??0)+n.delay,easing:""},o=new Og(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,r,n.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,i,r,o,s){let a=[];if(r&&a.push(this.element),n.length>0){n=n.replace(FN,"."+this._enterClassName),n=n.replace(jN,"."+this._leaveClassName);let c=i!=1,l=this._driver.query(this.element,n,c);i!==0&&(l=i<0?l.slice(l.length+i,l.length):l.slice(0,i)),a.push(...l)}return!o&&a.length==0&&s.push(WC(e)),a}},Kd=class t{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,i,r){this._driver=n,this.element=e,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new t(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=NN,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,i]of this._globalTimelineStyles)this._backFill.set(e,i||Tn),this._currentKeyframe.set(e,Tn);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,i,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},s=VN(n,this._globalTimelineStyles);for(let[a,c]of s){let l=zo(c,o,i);this._pendingStyles.set(a,l),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??Tn),this._updateStyle(a,l)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,i)=>{let r=this._styleSummary.get(i);(!r||e.time>r.time)&&this._updateStyle(i,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,c)=>{let l=new Map([...this._backFill,...a]);l.forEach((d,f)=>{d===Na?n.add(f):d===Tn&&e.add(f)}),i||l.set("offset",c/this.duration),r.push(l)});let o=[...n.values()],s=[...e.values()];if(i){let a=r[0],c=new Map(a);a.set("offset",0),c.set("offset",1),r=[a,c]}return Hg(this.element,r,o,s,this.duration,this.startTime,this.easing,!1)}},Og=class extends Kd{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,i,r,o,s,a=!1){super(n,e,s.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=a,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],s=i+e,a=e/s,c=new Map(n[0]);c.set("offset",0),o.push(c);let l=new Map(n[0]);l.set("offset",hE(a)),o.push(l);let d=n.length-1;for(let f=1;f<=d;f++){let m=new Map(n[f]),h=m.get("offset"),p=e+h*i;m.set("offset",hE(p/s)),o.push(m)}i=s,e=0,r="",n=o}return Hg(this.element,n,this.preStyleProps,this.postStyleProps,i,e,r,!0)}};function hE(t,n=3){let e=Math.pow(10,n-1);return Math.round(t*e)/e}function VN(t,n){let e=new Map,i;return t.forEach(r=>{if(r==="*"){i??=n.keys();for(let o of i)e.set(o,Tn)}else for(let[o,s]of r)e.set(o,s)}),e}function mE(t,n,e,i,r,o,s,a,c,l,d,f,m){return{type:0,element:t,triggerName:n,isRemovalTransition:r,fromState:e,fromStyles:o,toState:i,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:d,totalTime:f,errors:m}}var xg={},Xd=class{_triggerName;ast;_stateStyles;constructor(n,e,i){this._triggerName=n,this.ast=e,this._stateStyles=i}match(n,e,i,r){return BN(this.ast.matchers,n,e,i,r)}buildStyles(n,e,i){let r=this._stateStyles.get("*");return n!==void 0&&(r=this._stateStyles.get(n?.toString())||r),r?r.buildStyles(e,i):new Map}build(n,e,i,r,o,s,a,c,l,d){let f=[],m=this.ast.options&&this.ast.options.params||xg,h=a&&a.params||xg,p=this.buildStyles(i,h,f),w=c&&c.params||xg,x=this.buildStyles(r,w,f),S=new Set,H=new Map,pe=new Map,he=r==="void",Xt={params:DE(w,m),delay:this.ast.options?.delay},gt=d?[]:EE(n,e,this.ast.animation,o,s,p,x,Xt,l,f),Le=0;return gt.forEach(Nt=>{Le=Math.max(Nt.duration+Nt.delay,Le)}),f.length?mE(e,this._triggerName,i,r,he,p,x,[],[],H,pe,Le,f):(gt.forEach(Nt=>{let Wi=Nt.element,Zr=jt(H,Wi,new Set);Nt.preStyleProps.forEach(qi=>Zr.add(qi));let Nv=jt(pe,Wi,new Set);Nt.postStyleProps.forEach(qi=>Nv.add(qi)),Wi!==e&&S.add(Wi)}),mE(e,this._triggerName,i,r,he,p,x,gt,[...S.values()],H,pe,Le))}};function BN(t,n,e,i,r){return t.some(o=>o(n,e,i,r))}function DE(t,n){let e=y({},n);return Object.entries(t).forEach(([i,r])=>{r!=null&&(e[i]=r)}),e}var Ng=class{styles;defaultParams;normalizer;constructor(n,e,i){this.styles=n,this.defaultParams=e,this.normalizer=i}buildStyles(n,e){let i=new Map,r=DE(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,a)=>{s&&(s=zo(s,r,e));let c=this.normalizer.normalizePropertyName(a,e);s=this.normalizer.normalizeStyleValue(a,c,s,e),i.set(a,s)})}),i}};function HN(t,n,e){return new Pg(t,n,e)}var Pg=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,i){this.name=n,this.ast=e,this._normalizer=i,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new Ng(r.style,o,i))}),pE(this.states,"true","1"),pE(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new Xd(n,r,this.states))}),this.fallbackTransition=zN(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,i,r){return this.transitionFactories.find(s=>s.match(n,e,i,r))||null}matchStyles(n,e,i){return this.fallbackTransition.buildStyles(n,e,i)}};function zN(t,n,e){let i=[(s,a)=>!0],r={type:fe.Sequence,steps:[],options:null},o={type:fe.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new Xd(t,o,n)}function pE(t,n,e){t.has(n)?t.has(e)||t.set(e,t.get(n)):t.has(e)&&t.set(n,t.get(e))}var UN=new Va,Fg=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,i){this.bodyNode=n,this._driver=e,this._normalizer=i}register(n,e){let i=[],r=[],o=CE(this._driver,e,i,r);if(i.length)throw ZC(i);this._animations.set(n,o)}_buildPlayer(n,e,i){let r=n.element,o=gg(this._normalizer,n.keyframes,e,i);return this._driver.animate(r,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,i={}){let r=[],o=this._animations.get(n),s,a=new Map;if(o?(s=EE(this._driver,e,o,wg,Bd,new Map,new Map,i,UN,r),s.forEach(d=>{let f=jt(a,d.element,new Map);d.postStyleProps.forEach(m=>f.set(m,null))})):(r.push(KC()),s=[]),r.length)throw XC(r);a.forEach((d,f)=>{d.forEach((m,h)=>{d.set(h,this._driver.computeStyle(f,h,Tn))})});let c=s.map(d=>{let f=a.get(d.element);return this._buildPlayer(d,new Map,f)}),l=vi(c);return this._playersById.set(n,l),l.onDestroy(()=>this.destroy(n)),this.players.push(l),l}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let i=this.players.indexOf(e);i>=0&&this.players.splice(i,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw JC(n);return e}listen(n,e,i,r){let o=jd(e,"","","");return Ld(this._getPlayer(n),i,o,r),()=>{}}command(n,e,i,r){if(i=="register"){this.register(n,r[0]);return}if(i=="create"){let s=r[0]||{};this.create(n,e,s);return}let o=this._getPlayer(n);switch(i){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(n);break}}},gE="ng-animate-queued",$N=".ng-animate-queued",Sg="ng-animate-disabled",GN=".ng-animate-disabled",WN="ng-star-inserted",qN=".ng-star-inserted",YN=[],xE={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},QN={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},An="__ng_removed",Ba=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let i=n&&n.hasOwnProperty("value"),r=i?n.value:n;if(this.value=KN(r),i){let o=n,{value:s}=o,a=of(o,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let i=this.options.params;Object.keys(e).forEach(r=>{i[r]==null&&(i[r]=e[r])})}}},ja="void",Ig=new Ba(ja),Lg=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,i){this.id=n,this.hostElement=e,this._engine=i,this._hostClassName="ng-tns-"+n,dn(e,this._hostClassName)}listen(n,e,i,r){if(!this._triggers.has(e))throw eE(i,e);if(i==null||i.length==0)throw tE(e);if(!XN(i))throw nE(i,e);let o=jt(this._elementListeners,n,[]),s={name:e,phase:i,callback:r};o.push(s);let a=jt(this._engine.statesByElement,n,new Map);return a.has(e)||(dn(n,Pa),dn(n,Pa+"-"+e),a.set(e,Ig)),()=>{this._engine.afterFlush(()=>{let c=o.indexOf(s);c>=0&&o.splice(c,1),this._triggers.has(e)||a.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw iE(n);return e}trigger(n,e,i,r=!0){let o=this._getTrigger(e),s=new Ha(this.id,e,n),a=this._engine.statesByElement.get(n);a||(dn(n,Pa),dn(n,Pa+"-"+e),this._engine.statesByElement.set(n,a=new Map));let c=a.get(e),l=new Ba(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&c&&l.absorbOptions(c.options),a.set(e,l),c||(c=Ig),!(l.value===ja)&&c.value===l.value){if(!t1(c.params,l.params)){let w=[],x=o.matchStyles(c.value,c.params,w),S=o.matchStyles(l.value,l.params,w);w.length?this._engine.reportError(w):this._engine.afterFlush(()=>{Ui(n,x),kn(n,S)})}return}let m=jt(this._engine.playersByElement,n,[]);m.forEach(w=>{w.namespaceId==this.id&&w.triggerName==e&&w.queued&&w.destroy()});let h=o.matchTransition(c.value,l.value,n,l.params),p=!1;if(!h){if(!r)return;h=o.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:h,fromState:c,toState:l,player:s,isFallbackTransition:p}),p||(dn(n,gE),s.onStart(()=>{Uo(n,gE)})),s.onDone(()=>{let w=this.players.indexOf(s);w>=0&&this.players.splice(w,1);let x=this._engine.playersByElement.get(n);if(x){let S=x.indexOf(s);S>=0&&x.splice(S,1)}}),this.players.push(s),m.push(s),s}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,i)=>{this._elementListeners.set(i,e.filter(r=>r.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(i=>i.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let i=this._engine.driver.query(n,Fa,!0);i.forEach(r=>{if(r[An])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(s=>s.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(n,e,i,r){let o=this._engine.statesByElement.get(n),s=new Map;if(o){let a=[];if(o.forEach((c,l)=>{if(s.set(l,c.value),this._triggers.has(l)){let d=this.trigger(n,l,ja,r);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,s),i&&vi(a).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),i=this._engine.statesByElement.get(n);if(e&&i){let r=new Set;e.forEach(o=>{let s=o.name;if(r.has(s))return;r.add(s);let c=this._triggers.get(s).fallbackTransition,l=i.get(s)||Ig,d=new Ba(ja),f=new Ha(this.id,s,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:s,transition:c,fromState:l,toState:d,player:f,isFallbackTransition:!0})})}}removeNode(n,e){let i=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let r=!1;if(i.totalAnimations){let o=i.players.length?i.playersByQueriedElement.get(n):[];if(o&&o.length)r=!0;else{let s=n;for(;s=s.parentNode;)if(i.statesByElement.get(s)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(n),r)i.markElementAsRemoved(this.id,n,!1,e);else{let o=n[An];(!o||o===xE)&&(i.afterFlush(()=>this.clearElementCache(n)),i.destroyInnerAnimations(n),i._onRemovalComplete(n,e))}}insertNode(n,e){dn(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let o=i.element,s=this._elementListeners.get(o);s&&s.forEach(a=>{if(a.name==i.triggerName){let c=jd(o,i.triggerName,i.fromState.value,i.toState.value);c._data=n,Ld(i.player,a.phase,c,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(i)}),this._queue=[],e.sort((i,r)=>{let o=i.transition.ast.depCount,s=r.transition.ast.depCount;return o==0||s==0?o-s:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},jg=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,i){this.bodyNode=n,this.driver=e,this._normalizer=i}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(i=>{i.queued&&n.push(i)})}),n}createNamespace(n,e){let i=new Lg(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(i,e):(this.newHostElements.set(e,i),this.collectEnterElement(e)),this._namespaceLookup[n]=i}_balanceNamespaceList(n,e){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let s=!1,a=this.driver.getParentElement(e);for(;a;){let c=r.get(a);if(c){let l=i.indexOf(c);i.splice(l+1,0,n),s=!0;break}a=this.driver.getParentElement(a)}s||i.unshift(n)}else i.push(n);return r.set(e,n),n}register(n,e){let i=this._namespaceLookup[n];return i||(i=this.createNamespace(n,e)),i}registerTrigger(n,e,i){let r=this._namespaceLookup[n];r&&r.register(e,i)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(n);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,i=this.statesByElement.get(n);if(i){for(let r of i.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(n,e,i,r){if(Wd(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,i,r),!0}return!1}insertNode(n,e,i,r){if(!Wd(e))return;let o=e[An];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let s=this.collectedLeaveElements.indexOf(e);s>=0&&this.collectedLeaveElements.splice(s,1)}if(n){let s=this._fetchNamespace(n);s&&s.insertNode(e,i)}r&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),dn(n,Sg)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),Uo(n,Sg))}removeNode(n,e,i){if(Wd(e)){let r=n?this._fetchNamespace(n):null;r?r.removeNode(e,i):this.markElementAsRemoved(n,e,!1,i);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,i)}else this._onRemovalComplete(e,i)}markElementAsRemoved(n,e,i,r,o){this.collectedLeaveElements.push(e),e[An]={namespaceId:n,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,i,r,o){return Wd(e)?this._fetchNamespace(n).listen(e,i,r,o):()=>{}}_buildInstruction(n,e,i,r,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,i,r,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,Fa,!0);e.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,Hd,!0),e.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return vi(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[An];if(e&&e.setForRemoval){if(n[An]=xE,e.namespaceId){this.destroyInnerAnimations(n);let i=this._fetchNamespace(e.namespaceId);i&&i.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(Sg)&&this.markElementAsDisabled(n,!1),this.driver.query(n,GN,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];dn(r,WN)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{e=this._flushAnimations(i,n)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],e.length?vi(e).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(n){throw rE(n)}_flushAnimations(n,e){let i=new Va,r=[],o=new Map,s=[],a=new Map,c=new Map,l=new Map,d=new Set;this.disabledNodes.forEach(R=>{d.add(R);let L=this.driver.query(R,$N,!0);for(let $=0;$<L.length;$++)d.add(L[$])});let f=this.bodyNode,m=Array.from(this.statesByElement.keys()),h=yE(m,this.collectedEnterElements),p=new Map,w=0;h.forEach((R,L)=>{let $=wg+w++;p.set(L,$),R.forEach(_e=>dn(_e,$))});let x=[],S=new Set,H=new Set;for(let R=0;R<this.collectedLeaveElements.length;R++){let L=this.collectedLeaveElements[R],$=L[An];$&&$.setForRemoval&&(x.push(L),S.add(L),$.hasAnimation?this.driver.query(L,qN,!0).forEach(_e=>S.add(_e)):H.add(L))}let pe=new Map,he=yE(m,Array.from(S));he.forEach((R,L)=>{let $=Bd+w++;pe.set(L,$),R.forEach(_e=>dn(_e,$))}),n.push(()=>{h.forEach((R,L)=>{let $=p.get(L);R.forEach(_e=>Uo(_e,$))}),he.forEach((R,L)=>{let $=pe.get(L);R.forEach(_e=>Uo(_e,$))}),x.forEach(R=>{this.processLeaveNode(R)})});let Xt=[],gt=[];for(let R=this._namespaceList.length-1;R>=0;R--)this._namespaceList[R].drainQueuedTransitions(e).forEach($=>{let _e=$.player,it=$.element;if(Xt.push(_e),this.collectedEnterElements.length){let vt=it[An];if(vt&&vt.setForMove){if(vt.previousTriggersValues&&vt.previousTriggersValues.has($.triggerName)){let Yi=vt.previousTriggersValues.get($.triggerName),Jt=this.statesByElement.get($.element);if(Jt&&Jt.has($.triggerName)){let nc=Jt.get($.triggerName);nc.value=Yi,Jt.set($.triggerName,nc)}}_e.destroy();return}}let Pn=!f||!this.driver.containsElement(f,it),Ut=pe.get(it),wi=p.get(it),je=this._buildInstruction($,i,wi,Ut,Pn);if(je.errors&&je.errors.length){gt.push(je);return}if(Pn){_e.onStart(()=>Ui(it,je.fromStyles)),_e.onDestroy(()=>kn(it,je.toStyles)),r.push(_e);return}if($.isFallbackTransition){_e.onStart(()=>Ui(it,je.fromStyles)),_e.onDestroy(()=>kn(it,je.toStyles)),r.push(_e);return}let Lv=[];je.timelines.forEach(vt=>{vt.stretchStartingKeyframe=!0,this.disabledNodes.has(vt.element)||Lv.push(vt)}),je.timelines=Lv,i.append(it,je.timelines);let Lx={instruction:je,player:_e,element:it};s.push(Lx),je.queriedElements.forEach(vt=>jt(a,vt,[]).push(_e)),je.preStyleProps.forEach((vt,Yi)=>{if(vt.size){let Jt=c.get(Yi);Jt||c.set(Yi,Jt=new Set),vt.forEach((nc,rf)=>Jt.add(rf))}}),je.postStyleProps.forEach((vt,Yi)=>{let Jt=l.get(Yi);Jt||l.set(Yi,Jt=new Set),vt.forEach((nc,rf)=>Jt.add(rf))})});if(gt.length){let R=[];gt.forEach(L=>{R.push(oE(L.triggerName,L.errors))}),Xt.forEach(L=>L.destroy()),this.reportError(R)}let Le=new Map,Nt=new Map;s.forEach(R=>{let L=R.element;i.has(L)&&(Nt.set(L,L),this._beforeAnimationBuild(R.player.namespaceId,R.instruction,Le))}),r.forEach(R=>{let L=R.element;this._getPreviousPlayers(L,!1,R.namespaceId,R.triggerName,null).forEach(_e=>{jt(Le,L,[]).push(_e),_e.destroy()})});let Wi=x.filter(R=>bE(R,c,l)),Zr=new Map;_E(Zr,this.driver,H,l,Tn).forEach(R=>{bE(R,c,l)&&Wi.push(R)});let qi=new Map;h.forEach((R,L)=>{_E(qi,this.driver,new Set(R),c,Na)}),Wi.forEach(R=>{let L=Zr.get(R),$=qi.get(R);Zr.set(R,new Map([...L?.entries()??[],...$?.entries()??[]]))});let nf=[],Pv=[],Fv={};s.forEach(R=>{let{element:L,player:$,instruction:_e}=R;if(i.has(L)){if(d.has(L)){$.onDestroy(()=>kn(L,_e.toStyles)),$.disabled=!0,$.overrideTotalTime(_e.totalTime),r.push($);return}let it=Fv;if(Nt.size>1){let Ut=L,wi=[];for(;Ut=Ut.parentNode;){let je=Nt.get(Ut);if(je){it=je;break}wi.push(Ut)}wi.forEach(je=>Nt.set(je,it))}let Pn=this._buildAnimation($.namespaceId,_e,Le,o,qi,Zr);if($.setRealPlayer(Pn),it===Fv)nf.push($);else{let Ut=this.playersByElement.get(it);Ut&&Ut.length&&($.parentPlayer=vi(Ut)),r.push($)}}else Ui(L,_e.fromStyles),$.onDestroy(()=>kn(L,_e.toStyles)),Pv.push($),d.has(L)&&r.push($)}),Pv.forEach(R=>{let L=o.get(R.element);if(L&&L.length){let $=vi(L);R.setRealPlayer($)}}),r.forEach(R=>{R.parentPlayer?R.syncPlayerEvents(R.parentPlayer):R.destroy()});for(let R=0;R<x.length;R++){let L=x[R],$=L[An];if(Uo(L,Bd),$&&$.hasAnimation)continue;let _e=[];if(a.size){let Pn=a.get(L);Pn&&Pn.length&&_e.push(...Pn);let Ut=this.driver.query(L,Hd,!0);for(let wi=0;wi<Ut.length;wi++){let je=a.get(Ut[wi]);je&&je.length&&_e.push(...je)}}let it=_e.filter(Pn=>!Pn.destroyed);it.length?JN(this,L,it):this.processLeaveNode(L)}return x.length=0,nf.forEach(R=>{this.players.push(R),R.onDone(()=>{R.destroy();let L=this.players.indexOf(R);this.players.splice(L,1)}),R.play()}),nf}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,i,r,o){let s=[];if(e){let a=this.playersByQueriedElement.get(n);a&&(s=a)}else{let a=this.playersByElement.get(n);if(a){let c=!o||o==ja;a.forEach(l=>{l.queued||!c&&l.triggerName!=r||s.push(l)})}}return(i||r)&&(s=s.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),s}_beforeAnimationBuild(n,e,i){let r=e.triggerName,o=e.element,s=e.isRemovalTransition?void 0:n,a=e.isRemovalTransition?void 0:r;for(let c of e.timelines){let l=c.element,d=l!==o,f=jt(i,l,[]);this._getPreviousPlayers(l,d,s,a,e.toState).forEach(h=>{let p=h.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),h.destroy(),f.push(h)})}Ui(o,e.fromStyles)}_buildAnimation(n,e,i,r,o,s){let a=e.triggerName,c=e.element,l=[],d=new Set,f=new Set,m=e.timelines.map(p=>{let w=p.element;d.add(w);let x=w[An];if(x&&x.removedBeforeQueried)return new gi(p.duration,p.delay);let S=w!==c,H=e1((i.get(w)||YN).map(Le=>Le.getRealPlayer())).filter(Le=>{let Nt=Le;return Nt.element?Nt.element===w:!1}),pe=o.get(w),he=s.get(w),Xt=gg(this._normalizer,p.keyframes,pe,he),gt=this._buildPlayer(p,Xt,H);if(p.subTimeline&&r&&f.add(w),S){let Le=new Ha(n,a,w);Le.setRealPlayer(gt),l.push(Le)}return gt});l.forEach(p=>{jt(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>ZN(this.playersByQueriedElement,p.element,p))}),d.forEach(p=>dn(p,Cg));let h=vi(m);return h.onDestroy(()=>{d.forEach(p=>Uo(p,Cg)),kn(c,e.toStyles)}),f.forEach(p=>{jt(r,p,[]).push(h)}),h}_buildPlayer(n,e,i){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,i):new gi(n.duration,n.delay)}},Ha=class{namespaceId;triggerName;element;_player=new gi;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,i){this.namespaceId=n,this.triggerName=e,this.element=i}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,i)=>{e.forEach(r=>Ld(n,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){jt(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function ZN(t,n,e){let i=t.get(n);if(i){if(i.length){let r=i.indexOf(e);i.splice(r,1)}i.length==0&&t.delete(n)}return i}function KN(t){return t??null}function Wd(t){return t&&t.nodeType===1}function XN(t){return t=="start"||t=="done"}function vE(t,n){let e=t.style.display;return t.style.display=n??"none",e}function _E(t,n,e,i,r){let o=[];e.forEach(c=>o.push(vE(c)));let s=[];i.forEach((c,l)=>{let d=new Map;c.forEach(f=>{let m=n.computeStyle(l,f,r);d.set(f,m),(!m||m.length==0)&&(l[An]=QN,s.push(l))}),t.set(l,d)});let a=0;return e.forEach(c=>vE(c,o[a++])),s}function yE(t,n){let e=new Map;if(t.forEach(a=>e.set(a,[])),n.length==0)return e;let i=1,r=new Set(n),o=new Map;function s(a){if(!a)return i;let c=o.get(a);if(c)return c;let l=a.parentNode;return e.has(l)?c=l:r.has(l)?c=i:c=s(l),o.set(a,c),c}return n.forEach(a=>{let c=s(a);c!==i&&e.get(c).push(a)}),e}function dn(t,n){t.classList?.add(n)}function Uo(t,n){t.classList?.remove(n)}function JN(t,n,e){vi(e).onDone(()=>t.processLeaveNode(n))}function e1(t){let n=[];return SE(t,n),n}function SE(t,n){for(let e=0;e<t.length;e++){let i=t[e];i instanceof Bo?SE(i.players,n):n.push(i)}}function t1(t,n){let e=Object.keys(t),i=Object.keys(n);if(e.length!=i.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!n.hasOwnProperty(o)||t[o]!==n[o])return!1}return!0}function bE(t,n,e){let i=e.get(t);if(!i)return!1;let r=n.get(t);return r?i.forEach(o=>r.add(o)):n.set(t,i),e.delete(t),!0}var $o=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,i){this._driver=e,this._normalizer=i,this._transitionEngine=new jg(n.body,e,i),this._timelineEngine=new Fg(n.body,e,i),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(n,e,i,r,o){let s=n+"-"+r,a=this._triggerCache[s];if(!a){let c=[],l=[],d=CE(this._driver,o,c,l);if(c.length)throw QC(r,c);a=HN(r,d,this._normalizer),this._triggerCache[s]=a}this._transitionEngine.registerTrigger(e,r,a)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,i,r){this._transitionEngine.insertNode(n,e,i,r)}onRemove(n,e,i){this._transitionEngine.removeNode(n,e,i)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,i,r){if(i.charAt(0)=="@"){let[o,s]=vg(i),a=r;this._timelineEngine.command(o,e,s,a)}else this._transitionEngine.trigger(n,e,i,r)}listen(n,e,i,r,o){if(i.charAt(0)=="@"){let[s,a]=vg(i);return this._timelineEngine.listen(s,e,a,o)}return this._transitionEngine.listen(n,e,i,r,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function n1(t,n){let e=null,i=null;return Array.isArray(n)&&n.length?(e=Mg(n[0]),n.length>1&&(i=Mg(n[n.length-1]))):n instanceof Map&&(e=Mg(n)),e||i?new i1(t,e,i):null}var i1=(()=>{class t{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,i,r){this._element=e,this._startStyles=i,this._endStyles=r;let o=t.initialStylesByElement.get(e);o||t.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&kn(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(kn(this._element,this._initialStyles),this._endStyles&&(kn(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(t.initialStylesByElement.delete(this._element),this._startStyles&&(Ui(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Ui(this._element,this._endStyles),this._endStyles=null),kn(this._element,this._initialStyles),this._state=3)}}return t})();function Mg(t){let n=null;return t.forEach((e,i)=>{r1(i)&&(n=n||new Map,n.set(i,e))}),n}function r1(t){return t==="display"||t==="position"}var Jd=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,i,r){this.element=n,this.keyframes=e,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let i=()=>this._onFinish();return e.addEventListener("finish",i),this.onDestroy(()=>{e.removeEventListener("finish",i)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(i=>{e.push(Object.fromEntries(i))}),e}_triggerWebAnimation(n,e,i){let r=this._convertKeyframesToObject(e);try{return n.animate(r,i)}catch{return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&n.set(r,this._finished?i:Ud(this.element,r))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},eu=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return _g(n,e)}getParentElement(n){return Vd(n)}query(n,e,i){return yg(n,e,i)}computeStyle(n,e,i){return Ud(n,e)}animate(n,e,i,r,o,s=[]){let a=r==0?"both":"forwards",c={duration:i,delay:r,fill:a};o&&(c.easing=o);let l=new Map,d=s.filter(h=>h instanceof Jd);lE(i,r)&&d.forEach(h=>{h.currentSnapshot.forEach((p,w)=>l.set(w,p))});let f=aE(e).map(h=>new Map(h));f=dE(n,f,l);let m=n1(n,f);return new Jd(n,f,c,m)}};var qd="@",IE="@.disabled",tu=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,i,r){this.namespaceId=n,this.delegate=e,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,i,r=!0){this.delegate.insertBefore(n,e,i),this.engine.onInsert(this.namespaceId,e,n,r)}removeChild(n,e,i,r){if(r){this.delegate.removeChild(n,e,i,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){e.charAt(0)==qd&&e==IE?this.disableAnimations(n,!!i):this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.delegate.listen(n,e,i,r)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},Vg=class extends tu{factory;constructor(n,e,i,r,o){super(e,i,r,o),this.factory=n,this.namespaceId=e}setProperty(n,e,i){e.charAt(0)==qd?e.charAt(1)=="."&&e==IE?(i=i===void 0?!0:!!i,this.disableAnimations(n,i)):this.engine.process(this.namespaceId,n,e.slice(1),i):this.delegate.setProperty(n,e,i)}listen(n,e,i,r){if(e.charAt(0)==qd){let o=o1(n),s=e.slice(1),a="";return s.charAt(0)!=qd&&([s,a]=s1(s)),this.engine.listen(this.namespaceId,o,s,a,c=>{let l=c._data||-1;this.factory.scheduleListenerCallback(l,i,c)})}return this.delegate.listen(n,e,i,r)}};function o1(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}function s1(t){let n=t.indexOf("."),e=t.substring(0,n),i=t.slice(n+1);return[e,i]}var nu=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,i){this.delegate=n,this.engine=e,this._zone=i,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(n,e){let r=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let l=this._rendererCache,d=l.get(r);if(!d){let f=()=>l.delete(r);d=new tu("",r,this.engine,f),l.set(r,d)}return d}let o=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,n);let a=l=>{Array.isArray(l)?l.forEach(a):this.engine.registerTrigger(o,s,n,l.name,l)};return e.data.animation.forEach(a),new Vg(this,s,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,i){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[s,a]=o;s(a)}),this._animationCallbacksBuffer=[]})}),r.push([e,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var c1=(()=>{class t extends $o{constructor(e,i,r){super(e,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||t)(O(P),O(zr),O(Ur))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();function l1(){return new Yd}function d1(){return new nu(u(ma),u($o),u(T))}var ME=[{provide:Ur,useFactory:l1},{provide:$o,useClass:c1},{provide:He,useFactory:d1}],pY=[{provide:zr,useClass:Bg},{provide:Fi,useValue:"NoopAnimations"},...ME],u1=[{provide:zr,useFactory:()=>new eu},{provide:Fi,useFactory:()=>"BrowserAnimations"},...ME];function TE(){return Dn("NgEagerAnimations"),[...u1]}function Kt(t,n=0){return kE(t)?Number(t):arguments.length===2?n:0}function kE(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Ot(t){return t instanceof F?t.nativeElement:t}function Go(t){return Array.isArray(t)?t:[t]}function tt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Pe(t){return t!=null&&`${t}`!="false"}var zg;try{zg=typeof Intl<"u"&&Intl.v8BreakIterator}catch{zg=!1}var me=(()=>{class t{_platformId=u(Ir);isBrowser=this._platformId?_0(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||zg)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Rn||{}),iu,$r;function AE(){if($r==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return $r=!1,$r;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)$r=!0;else{let t=Element.prototype.scrollTo;t?$r=!/\{\s*\[native code\]\s*\}/.test(t.toString()):$r=!1}}return $r}function Wo(){if(typeof document!="object"||!document)return Rn.NORMAL;if(iu==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),iu=Rn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,iu=t.scrollLeft===0?Rn.NEGATED:Rn.INVERTED),t.remove()}return iu}var Ug;function RE(){if(Ug==null){let t=typeof document<"u"?document.head:null;Ug=!!(t&&(t.createShadowRoot||t.attachShadow))}return Ug}function $g(t){if(RE()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Bt(t){return t.composedPath?t.composedPath()[0]:t.target}function Gg(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var za;function OE(){if(za==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>za=!0}))}finally{za=za||!1}return za}function qo(t){return OE()?t:!!t.capture}var Yo,NE=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Wg(){if(Yo)return Yo;if(typeof document!="object"||!document)return Yo=new Set(NE),Yo;let t=document.createElement("input");return Yo=new Set(NE.filter(n=>(t.setAttribute("type",n),t.type===n))),Yo}var ru=new WeakMap,Ke=(()=>{class t{_appRef;_injector=u(re);_environmentInjector=u(Te);load(e){let i=this._appRef=this._appRef||this._injector.get(Yt),r=ru.get(i);r||(r={loaders:new Set,refs:[]},ru.set(i,r),i.onDestroy(()=>{ru.get(i)?.refs.forEach(o=>o.destroy()),ru.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(ud(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Qo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),ou;function h1(){if(ou===void 0&&(ou=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(ou=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return ou}function Zo(t){return h1()?.createHTML(t)||t}function Ua(t){return t.buttons===0||t.detail===0}function $a(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var PE=new b("cdk-input-modality-detector-options"),FE={ignoreKeys:[18,17,224,91,16]},LE=650,qg={passive:!0,capture:!0},jE=(()=>{class t{_platform=u(me);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ue(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Bt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<LE||(this._modality.next(Ua(e)?"keyboard":"mouse"),this._mostRecentTarget=Bt(e))};_onTouchstart=e=>{if($a(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Bt(e)};constructor(){let e=u(T),i=u(P),r=u(PE,{optional:!0});if(this._options=y(y({},FE),r),this.modalityDetected=this._modality.pipe(Ds(1)),this.modalityChanged=this.modalityDetected.pipe(Hc()),this._platform.isBrowser){let o=u(He).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,qg),o.listen(i,"mousedown",this._onMousedown,qg),o.listen(i,"touchstart",this._onTouchstart,qg)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ga=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Ga||{}),VE=new b("cdk-focus-monitor-default-options"),su=qo({passive:!0,capture:!0}),On=(()=>{class t{_ngZone=u(T);_platform=u(me);_inputModalityDetector=u(jE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(P);_stopInputModalityDetector=new M;constructor(){let e=u(VE,{optional:!0});this._detectionMode=e?.detectionMode||Ga.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Bt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Ot(e);if(!this._platform.isBrowser||r.nodeType!==1)return B();let o=$g(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new M,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=Ot(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Ot(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ga.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Ga.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?LE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Bt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,su),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,su)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ce(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,su),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,su),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var BE=new Set,Gr,Ko=(()=>{class t{_platform=u(me);_nonce=u(xo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):p1}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&m1(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function m1(t,n){if(!BE.has(t))try{Gr||(Gr=document.createElement("style"),n&&Gr.setAttribute("nonce",n),Gr.setAttribute("type","text/css"),document.head.appendChild(Gr)),Gr.sheet&&(Gr.sheet.insertRule(`@media ${t} {body{ }}`,0),BE.add(t))}catch(e){console.error(e)}}function p1(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Yg=(()=>{class t{_mediaMatcher=u(Ko);_zone=u(T);_queries=new Map;_destroySubject=new M;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return HE(Go(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=HE(Go(e)).map(s=>this._registerQuery(s).observable),o=ws(r);return o=Di(o.pipe(rt(1)),o.pipe(Ds(1),rr(0))),o.pipe(j(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:l})=>{a.matches=a.matches||c,a.breakpoints[l]=c}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new K(s=>{let a=c=>this._zone.run(()=>s.next(c));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(mn(i),j(({matches:s})=>({query:e,matches:s})),Ce(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function HE(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function g1(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var v1=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_1=(()=>{class t{_mutationObserverFactory=u(v1);_observedElements=new Map;_ngZone=u(T);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Ot(e);return new K(r=>{let s=this._observeElement(i).pipe(j(a=>a.filter(c=>!g1(c))),Ee(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new M,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zE=(()=>{class t{_contentObserver=u(_1);_elementRef=u(F);event=new ue;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Kt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(rr(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",we],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})();var cu=(()=>{class t{_platform=u(me);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return b1(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=y1(M1(e));if(i&&(UE(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=UE(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!S1(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return I1(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function y1(t){try{return t.frameElement}catch{return null}}function b1(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function w1(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function C1(t){return D1(t)&&t.type=="hidden"}function E1(t){return x1(t)&&t.hasAttribute("href")}function D1(t){return t.nodeName.toLowerCase()=="input"}function x1(t){return t.nodeName.toLowerCase()=="a"}function $E(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function UE(t){if(!$E(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function S1(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function I1(t){return C1(t)?!1:w1(t)||E1(t)||t.hasAttribute("contenteditable")||$E(t)}function M1(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var au=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?ft(n,{injector:this._injector}):setTimeout(n)}},Qg=(()=>{class t{_checker=u(cu);_ngZone=u(T);_document=u(P);_injector=u(re);constructor(){u(Ke).load(Qo)}create(e,i=!1){return new au(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function lu(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Zg={},Ht=class t{_appId=u(Pi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Zg.hasOwnProperty(n)||(Zg[n]=0),`${n}${e?t._infix+"-":""}${Zg[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var WE=" ";function T1(t,n,e){let i=uu(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(WE)))}function k1(t,n,e){let i=uu(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(WE)):t.removeAttribute(n)}function uu(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var qE="cdk-describedby-message",du="cdk-describedby-host",Xg=0,YE=(()=>{class t{_platform=u(me);_document=u(P);_messageRegistry=new Map;_messagesContainer=null;_id=`${Xg++}`;constructor(){u(Ke).load(Qo),this._id=u(Pi)+"-"+Xg++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=Kg(i,r);typeof i!="string"?(GE(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=Kg(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${du}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(du);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");GE(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Kg(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=uu(e,"aria-describedby").filter(r=>r.indexOf(qE)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);T1(e,"aria-describedby",r.messageElement.id),e.setAttribute(du,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,k1(e,"aria-describedby",r.messageElement.id),e.removeAttribute(du)}_isElementDescribedByMessage(e,i){let r=uu(e,"aria-describedby"),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Kg(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function GE(t,n){t.id||(t.id=`${qE}-${n}-${Xg++}`)}var Wa={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var R1=new b("MATERIAL_ANIMATIONS"),QE=null;function O1(){return u(R1,{optional:!0})?.animationsDisabled||u(Fi,{optional:!0})==="NoopAnimations"?"di-disabled":(QE??=u(Ko).matchMedia("(prefers-reduced-motion)").matches,QE?"reduced-motion":"enabled")}function nt(){return O1()!=="enabled"}var un=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(un||{}),Jg=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=un.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},ZE=qo({passive:!0,capture:!0}),ev=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ZE)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,ZE)))}_delegateEventHandler=n=>{let e=Bt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},qa={enterDuration:225,exitDuration:150},N1=800,KE=qo({passive:!0,capture:!0}),XE=["mousedown","touchstart"],JE=["mouseup","mouseleave","touchend","touchcancel"],P1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Wr=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ev;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Ot(i)),o&&o.get(Ke).load(P1)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},qa),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||F1(n,e,r),a=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),m=f.transitionProperty,h=f.transitionDuration,p=m==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,w=new Jg(this,d,i,p);d.style.transform="scale3d(1, 1, 1)",w.state=un.FADING_IN,i.persistent||(this._mostRecentTransientRipple=w);let x=null;return!p&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let S=()=>{x&&(x.fallbackTimer=null),clearTimeout(pe),this._finishRippleTransition(w)},H=()=>this._destroyRipple(w),pe=setTimeout(H,l+100);d.addEventListener("transitionend",S),d.addEventListener("transitioncancel",H),x={onTransitionEnd:S,onTransitionCancel:H,fallbackTimer:pe}}),this._activeRipples.set(w,x),(p||!l)&&this._finishRippleTransition(w),w}fadeOutRipple(n){if(n.state===un.FADING_OUT||n.state===un.HIDDEN)return;let e=n.element,i=y(y({},qa),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=un.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Ot(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,XE.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{JE.forEach(e=>{this._triggerElement.addEventListener(e,this,KE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===un.FADING_IN?this._startFadeOutTransition(n):n.state===un.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=un.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=un.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Ua(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+N1;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!$a(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===un.VISIBLE||n.config.terminateOnPointerUp&&n.state===un.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(XE.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(JE.forEach(e=>n.removeEventListener(e,this,KE)),this._pointerUpEventsRegistered=!1))}};function F1(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var qr=new b("mat-ripple-global-options"),eD=(()=>{class t{_elementRef=u(F);_animationsDisabled=nt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(T),i=u(me),r=u(qr,{optional:!0}),o=u(re);this._globalOptions=r||{},this._rippleRenderer=new Wr(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&I("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var _i=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var aD=new b("");function iv(t){return t==null||rv(t)===0}function rv(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Du=new b(""),cD=new b(""),L1=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,hu=class{static min(n){return j1(n)}static max(n){return V1(n)}static required(n){return B1(n)}static requiredTrue(n){return H1(n)}static email(n){return z1(n)}static minLength(n){return U1(n)}static maxLength(n){return $1(n)}static pattern(n){return G1(n)}static nullValidator(n){return lD()}static compose(n){return pD(n)}static composeAsync(n){return gD(n)}};function j1(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function V1(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function B1(t){return iv(t.value)?{required:!0}:null}function H1(t){return t.value===!0?null:{required:!0}}function z1(t){return iv(t.value)||L1.test(t.value)?null:{email:!0}}function U1(t){return n=>{let e=n.value?.length??rv(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function $1(t){return n=>{let e=n.value?.length??rv(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function G1(t){if(!t)return lD;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(iv(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function lD(t){return null}function dD(t){return t!=null}function uD(t){return Vi(t)?Ae(t):t}function fD(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function hD(t,n){return n.map(e=>e(t))}function W1(t){return!t.validate}function mD(t){return t.map(n=>W1(n)?n:e=>n.validate(e))}function pD(t){if(!t)return null;let n=t.filter(dD);return n.length==0?null:function(e){return fD(hD(e,n))}}function ov(t){return t!=null?pD(mD(t)):null}function gD(t){if(!t)return null;let n=t.filter(dD);return n.length==0?null:function(e){let i=hD(e,n).map(uD);return ir(i).pipe(j(fD))}}function sv(t){return t!=null?gD(mD(t)):null}function tD(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function vD(t){return t._rawValidators}function _D(t){return t._rawAsyncValidators}function tv(t){return t?Array.isArray(t)?t:[t]:[]}function mu(t,n){return Array.isArray(t)?t.includes(n):t===n}function nD(t,n){let e=tv(n);return tv(t).forEach(r=>{mu(e,r)||e.push(r)}),e}function iD(t,n){return tv(n).filter(e=>!mu(t,e))}var pu=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ov(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=sv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},es=class extends pu{name;get formDirective(){return null}get path(){return null}},gu=class extends pu{_parent=null;name=null;valueAccessor=null};var Ya="VALID",fu="INVALID",Xo="PENDING",Qa="DISABLED",$i=class{},vu=class extends $i{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Ka=class extends $i{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Xa=class extends $i{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Jo=class extends $i{status;source;constructor(n,e){super(),this.status=n,this.source=e}},_u=class extends $i{source;constructor(n){super(),this.source=n}},yu=class extends $i{source;constructor(n){super(),this.source=n}};function yD(t){return(xu(t)?t.validators:t)||null}function q1(t){return Array.isArray(t)?ov(t):t||null}function bD(t,n){return(xu(n)?n.asyncValidators:t)||null}function Y1(t){return Array.isArray(t)?sv(t):t||null}function xu(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Q1(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new E(1e3,"");if(!i[e])throw new E(1001,"")}function Z1(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new E(1002,"")})}var bu=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ze(this.statusReactive)}set status(n){Ze(()=>this.statusReactive.set(n))}_status=le(()=>this.statusReactive());statusReactive=Y(void 0);get valid(){return this.status===Ya}get invalid(){return this.status===fu}get pending(){return this.status===Xo}get disabled(){return this.status===Qa}get enabled(){return this.status!==Qa}errors;get pristine(){return Ze(this.pristineReactive)}set pristine(n){Ze(()=>this.pristineReactive.set(n))}_pristine=le(()=>this.pristineReactive());pristineReactive=Y(!0);get dirty(){return!this.pristine}get touched(){return Ze(this.touchedReactive)}set touched(n){Ze(()=>this.touchedReactive.set(n))}_touched=le(()=>this.touchedReactive());touchedReactive=Y(!1);get untouched(){return!this.touched}_events=new M;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(nD(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(nD(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(iD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(iD(n,this._rawAsyncValidators))}hasValidator(n){return mu(this._rawValidators,n)}hasAsyncValidator(n){return mu(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(G(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Xa(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Xa(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(G(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ka(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ka(!0,i))}markAsPending(n={}){this.status=Xo;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Jo(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(G(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Qa,this.errors=null,this._forEachChild(r=>{r.disable(G(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new vu(this.value,i)),this._events.next(new Jo(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ya,this._forEachChild(i=>{i.enable(G(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ya||this.status===Xo)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new vu(this.value,e)),this._events.next(new Jo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(G(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Qa:Ya}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Xo,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=uD(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Jo(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new ue,this.statusChanges=new ue}_calculateStatus(){return this._allControlsDisabled()?Qa:this.errors?fu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Xo)?Xo:this._anyControlsHaveStatus(fu)?fu:Ya}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Ka(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Xa(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){xu(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=q1(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Y1(this._rawAsyncValidators)}},wu=class extends bu{constructor(n,e,i){super(yD(e),bD(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Z1(this,!0,n),Object.keys(n).forEach(i=>{Q1(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,G(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new yu(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Su=new b("",{factory:()=>Iu}),Iu="always";function nv(t,n,e=Iu){av(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),X1(t,n),eP(t,n),J1(t,n),K1(t,n)}function rD(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Eu(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Cu(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function K1(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function av(t,n){let e=vD(t);n.validator!==null?t.setValidators(tD(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=_D(t);n.asyncValidator!==null?t.setAsyncValidators(tD(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Cu(n._rawValidators,r),Cu(n._rawAsyncValidators,r)}function Eu(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=vD(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=_D(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Cu(n._rawValidators,i),Cu(n._rawAsyncValidators,i),e}function X1(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&wD(t,n)})}function J1(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&wD(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function wD(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function eP(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function CD(t,n){t==null,av(t,n)}function tP(t,n){return Eu(t,n)}function ED(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function nP(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var iP={provide:es,useExisting:tn(()=>cv)},Za=Promise.resolve(),cv=(()=>{class t extends es{callSetDisabledState;get submitted(){return Ze(this.submittedReactive)}_submitted=le(()=>this.submittedReactive());submittedReactive=Y(!1);_directives=new Set;form;ngSubmit=new ue;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new wu({},ov(e),sv(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Za.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),nv(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Za.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Za.then(()=>{let i=this._findContainer(e.path),r=new wu({});CD(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Za.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Za.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ED(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new _u(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(Ct(Du,10),Ct(cD,10),Ct(Su,8))};static \u0275dir=W({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&U("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Qe([iP]),Fe]})}return t})();function oD(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function sD(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var rP=class extends bu{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(yD(e),bD(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),xu(e)&&(e.nonNullable||e.initialValueIsDefault)&&(sD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new yu(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){oD(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){oD(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){sD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var oP=t=>t instanceof rP;var sP=(()=>{class t extends es{callSetDisabledState;get submitted(){return Ze(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=le(()=>this._submittedReactive());_submittedReactive=Y(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Eu(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return nv(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){rD(e.control||null,e,!1),nP(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ED(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new _u(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(rD(i||null,e),oP(r)&&(nv(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);CD(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&tP(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){av(this.form,this),this._oldForm&&Eu(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(Ct(Du,10),Ct(cD,10),Ct(Su,8))};static \u0275dir=W({type:t,features:[Fe,ut]})}return t})();var aP=new b("");var cP={provide:es,useExisting:tn(()=>lv)},lv=(()=>{class t extends sP{form=null;ngSubmit=new ue;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=W({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&U("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Qe([cP]),Fe]})}return t})();var DD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ne({type:t});static \u0275inj=Re({})}return t})();var xD=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Su,useValue:e.callSetDisabledState??Iu}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ne({type:t});static \u0275inj=Re({imports:[DD]})}return t})(),SD=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:aP,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Su,useValue:e.callSetDisabledState??Iu}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=Ne({type:t});static \u0275inj=Re({imports:[DD]})}return t})();var lP=new b("cdk-dir-doc",{providedIn:"root",factory:()=>u(P)}),dP=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ID(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?dP.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Nn=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Y("ltr");change=new ue;constructor(){let e=u(lP,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ID(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var MD=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Pe(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Pe(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(ge("aria-orientation",r.vertical?"vertical":"horizontal"),I("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})();var uP=["*"],fP=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,hP=["unscopedContent"],mP=["text"],pP=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],gP=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var vP=new b("ListOption"),_P=(()=>{class t{_elementRef=u(F);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),yP=(()=>{class t{_elementRef=u(F);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),bP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),TD=(()=>{class t{_listOption=u(vP,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,hostVars:4,hostBindings:function(i,r){i&2&&I("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),wP=(()=>{class t extends TD{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=W({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Fe]})}return t})(),CP=(()=>{class t extends TD{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=W({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Fe]})}return t})(),EP=new b("MAT_LIST_CONFIG"),dv=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Pe(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Pe(e))}_disabled=Y(!1);_defaultOptions=u(EP,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,hostVars:1,hostBindings:function(i,r){i&2&&ge("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),DP=(()=>{class t{_elementRef=u(F);_ngZone=u(T);_listBase=u(dv,{optional:!0});_platform=u(me);_hostElement;_isButtonElement;_noopAnimations=nt();_avatars;_icons;set lines(e){this._explicitLines=Kt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Pe(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Pe(e))}_disabled=Y(!1);_subscriptions=new Me;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(Ke).load(_i);let e=u(qr,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Wr(this,this._ngZone,this._hostElement,this._platform,u(re)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Qn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,contentQueries:function(i,r,o){if(i&1&&Qt(o,wP,4)(o,CP,4),i&2){let s;Q(s=Z())&&(r._avatars=s),Q(s=Z())&&(r._icons=s)}},hostVars:4,hostBindings:function(i,r){i&2&&(ge("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),I("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var kD=(()=>{class t extends DP{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Pe(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Qt(o,yP,5)(o,_P,5)(o,bP,5),i&2){let s;Q(s=Z())&&(r._lines=s),Q(s=Z())&&(r._titles=s),Q(s=Z())&&(r._meta=s)}},viewQuery:function(i,r){if(i&1&&pt(hP,5)(mP,5),i&2){let o;Q(o=Z())&&(r._unscopedContent=o.first),Q(o=Z())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(ge("aria-current",r._getAriaCurrent()),I("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Fe],ngContentSelectors:gP,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(De(pP),N(0),g(1,"span",1),N(2,1),N(3,2),g(4,"span",2,0),U("cdkObserveContent",function(){return r._updateItemLines(!0)}),N(6,3),v()(),N(7,4),N(8,5),ne(9,"div",3))},dependencies:[zE],encapsulation:2,changeDetection:0})}return t})();var AD=(()=>{class t extends dv{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Qe([{provide:dv,useExisting:t}]),Fe],ngContentSelectors:uP,decls:1,vars:0,template:function(i,r){i&1&&(De(),N(0))},styles:[fP],encapsulation:2,changeDetection:0})}return t})();var Dt=class t{constructor(n){this.breakpointObserver=n;this.breakpointObserver.observe([Wa.Handset,Wa.Small]).subscribe(e=>{this.isMobile.set(e.matches)}),this.breakpointObserver.observe([Wa.Tablet,Wa.Medium]).subscribe(e=>{this.isTablet.set(e.matches)})}isMobile=Y(!1);isTablet=Y(!1);activeSection=Y("home");mobileMenuOpen=Y(!1);setActiveSection(n){this.activeSection.set(n)}toggleMobileMenu(){this.mobileMenuOpen.update(n=>!n)}closeMobileMenu(){this.mobileMenuOpen.set(!1)}static \u0275fac=function(e){return new(e||t)(O(Yg))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var Mu=class t{langSubject=new Ue("en");currentLang$=this.langSubject.asObservable();currentLang=Y("en");setLanguage(n){this.langSubject.next(n),this.currentLang.set(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};function RD(t,n){let i=!n?.manualCleanup?n?.injector?.get(at)??u(at):null,r=xP(n?.equal),o;n?.requireSync?o=Y({kind:0},{equal:r}):o=Y({kind:1,value:n?.initialValue},{equal:r});let s,a=t.subscribe({next:c=>o.set({kind:1,value:c}),error:c=>{o.set({kind:2,error:c}),s?.()},complete:()=>{s?.()}});if(n?.requireSync&&o().kind===0)throw new E(601,!1);return s=i?.onDestroy(a.unsubscribe.bind(a)),le(()=>{let c=o();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new E(601,!1)}},{equal:n?.equal})}function xP(t=Object.is){return(n,e)=>n.kind===1&&e.kind===1&&t(n.value,e.value)}var SP=ic({"../../data/en/about.ts":()=>import("./chunk-WQBRFHEV.js"),"../../data/en/contact.ts":()=>import("./chunk-DMISCTY7.js"),"../../data/en/profile.ts":()=>import("./chunk-SSO7P3PN.js"),"../../data/en/projects.ts":()=>import("./chunk-BJXEDNLT.js"),"../../data/en/references.ts":()=>import("./chunk-LVWGRVGL.js"),"../../data/en/skills.ts":()=>import("./chunk-XGNATURH.js")});var IP=ic({"../../data/about-template.ts":()=>import("./chunk-RBM6CTX6.js"),"../../data/contact-template.ts":()=>import("./chunk-W5ZLTVK2.js"),"../../data/profile-template.ts":()=>import("./chunk-KC55JNJM.js"),"../../data/projects-template.ts":()=>import("./chunk-O4CB3Z3M.js"),"../../data/references-template.ts":()=>import("./chunk-NT74GSMG.js"),"../../data/skills-template.ts":()=>import("./chunk-DVJVWKVO.js")});var zt=class t{languageService=u(Mu);data$=this.languageService.currentLang$.pipe(lt(n=>Ae(SP(`../../data/${n}/${this.fileName}.ts`)).pipe(j(e=>e.DATA),en(()=>Ae(IP(`../../data/${this.fileName}-template.ts`)).pipe(j(e=>e.DATA))))),Ee(n=>!!n),sr(1));dataSignal=RD(this.data$);subtitle=le(()=>this.data()?.subtitle??"");get data(){return this.dataSignal}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var ts=class t extends zt{get fileName(){return"profile"}name=le(()=>this.data()?.name??"");role=le(()=>this.data()?.role??"");summary=le(()=>this.data()?.summary??"");objective=le(()=>this.data()?.objective??"");static \u0275fac=(()=>{let n;return function(i){return(n||(n=be(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var Tu=class t{navService=u(Dt);profileService=u(ts);name=this.profileService.name;role=this.profileService.role;summary=this.profileService.summary;objective=this.profileService.objective;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-title-page"]],decls:19,vars:6,consts:[[1,"title-container"],[1,"content-wrapper"],[1,"intro-section"],[1,"greeting"],[1,"welcome"],[1,"name"],[1,"title"],[1,"description"],[1,"photo-section"],[1,"photo-wrapper"],[1,"photo-label"],[1,"photo-placeholder"],["src","portfolio-draw.jpg","alt","Profile Photo",1,"profile-photo"]],template:function(e,i){e&1&&(ze(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),D(5,"Welcome to my Portfolio"),Ye(),ze(6,"h1",5),D(7),Ye(),ze(8,"h2",6),D(9),Ye()(),ze(10,"p",7),D(11),Ye()(),ze(12,"div",8)(13,"div",9)(14,"div",10)(15,"h2"),D(16),Ye()(),ze(17,"div",11),Et(18,"img",12),Ye()()()()()),e&2&&(I("mobile",i.navService.isMobile()),C(7),At("Hi, I'm ",i.name()),C(2),J(i.role()),C(2),J(i.summary()),C(5),J(i.objective()))},styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.title-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem;position:relative;overflow:hidden}.content-wrapper[_ngcontent-%COMP%]{max-width:1400px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}.content-wrapper.mobile[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem}.intro-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem;z-index:2}.greeting[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.welcome[_ngcontent-%COMP%]{font-size:.875rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px;margin:0}.name[_ngcontent-%COMP%]{font-size:clamp(2rem,5vw,3.5rem);font-weight:700;margin:0;background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:_ngcontent-%COMP%_fadeInUp .8s ease-out}.title[_ngcontent-%COMP%]{font-size:clamp(1.5rem,3vw,2rem);font-weight:500;margin:0;color:var(--text-secondary);animation:_ngcontent-%COMP%_fadeInUp 1s ease-out}.description[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.8;color:var(--text-secondary);margin:0;animation:_ngcontent-%COMP%_fadeInUp 1.2s ease-out;white-space:pre-line}.cta-buttons[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-top:1rem;animation:_ngcontent-%COMP%_fadeInUp 1.4s ease-out}.cta-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.download-cv[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.75rem 2rem;font-size:1rem;font-weight:600}.photo-section[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;animation:_ngcontent-%COMP%_fadeIn 1s ease-out}.photo-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;max-width:500px}.photo-label[_ngcontent-%COMP%]{position:absolute;top:-2rem;left:-13rem;z-index:3;background:var(--bg-secondary);padding:1rem;border-radius:12px;box-shadow:0 8px 32px var(--shadow);border:1px solid var(--border-color);max-width:370px;animation:_ngcontent-%COMP%_slideInLeft 1s ease-out}.photo-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:.815rem;font-weight:500;line-height:1.6;margin:0;color:var(--text-primary);font-style:italic;white-space:pre-line}.quote-author[_ngcontent-%COMP%]{text-align:right;font-size:.875rem;color:var(--text-muted);margin:0}.photo-placeholder[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:3/4;border-radius:20px;overflow:hidden;box-shadow:0 20px 60px var(--shadow);animation:_ngcontent-%COMP%_float 6s ease-in-out}.profile-photo[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.title-container.mobile[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:center}.title-container.mobile[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]{align-items:center}.title-container.mobile[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]{flex-direction:column;width:100%}.title-container.mobile[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.title-container.mobile[_ngcontent-%COMP%]   .photo-label[_ngcontent-%COMP%]{position:relative;top:0;left:0;margin-bottom:1rem;max-width:100%}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideInLeft{0%{opacity:0;transform:translate(-50px)}to{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_float{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}"]})};var MP=["*"];var TP=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],kP=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],AP=new b("MAT_CARD_CONFIG"),ns=(()=>{class t{appearance;constructor(){let e=u(AP,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&I("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:MP,decls:1,vars:0,template:function(i,r){i&1&&(De(),N(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),OD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var is=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var ND=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:kP,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(De(TP),N(0),ze(1,"div",0),N(2,1),Ye(),N(3,2))},encapsulation:2,changeDetection:0})}return t})();function PD(t){return Error(`Unable to find icon with the name "${t}"`)}function RP(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function FD(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function LD(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var yi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},VD=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new yi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(wt.HTML,r);if(!s)throw LD(r);let a=Zo(s);return this._addSvgIconConfig(e,i,new yi("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new yi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(wt.HTML,i);if(!o)throw LD(i);let s=Zo(o);return this._addSvgIconSetConfig(e,new yi("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(wt.RESOURCE_URL,e);if(!i)throw FD(e);let r=this._cachedIconsByUrl.get(i);return r?B(ku(r)):this._loadSvgIconFromConfig(new yi(e,null)).pipe(yt(o=>this._cachedIconsByUrl.set(i,o)),j(o=>ku(o)))}getNamedSvgIcon(e,i=""){let r=jD(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):ys(PD(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?B(ku(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(j(i=>ku(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return B(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(en(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(wt.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),B(null)})));return ir(o).pipe(j(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw PD(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(yt(i=>e.svgText=i),j(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?B(null):this._fetchIcon(e).pipe(yt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Zo("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Zo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw RP();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(wt.RESOURCE_URL,i);if(!s)throw FD(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(j(l=>Zo(l)),or(()=>this._inProgressUrlFetches.delete(s)),Es());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(jD(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return OP(o)?new yi(o.url,null,o.options):new yi(o,null)}}static \u0275fac=function(i){return new(i||t)(O(Dp,8),O(xp),O(P,8),O(Ft))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ku(t){return t.cloneNode(!0)}function jD(t,n){return t+":"+n}function OP(t){return!!(t.url&&t.options)}var NP=["*"],PP=new b("MAT_ICON_DEFAULT_OPTIONS"),FP=new b("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(P),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),BD=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],LP=BD.map(t=>`[${t}]`).join(", "),jP=/^url\(['"]?#(.*?)['"]?\)$/,fn=(()=>{class t{_elementRef=u(F);_iconRegistry=u(VD);_location=u(FP);_errorHandler=u(Ft);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Me.EMPTY;constructor(){let e=u(new kr("aria-hidden"),{optional:!0}),i=u(PP,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(LP),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)BD.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match(jP):null;if(l){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(rt(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(ge("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),xn(r.color?"mat-"+r.color:""),I("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",we],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:NP,decls:1,vars:0,template:function(i,r){i&1&&(De(),N(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})();var rs=class t extends zt{get fileName(){return"about"}tips=le(()=>this.data()?.tips??[]);static \u0275fac=(()=>{let n;return function(i){return(n||(n=be(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var VP=(t,n)=>n.title;function BP(t,n){if(t&1&&(g(0,"mat-card",7)(1,"mat-card-header",8)(2,"div",9)(3,"mat-icon",10),D(4),v()(),g(5,"mat-card-title"),D(6),v()(),g(7,"mat-card-content")(8,"p",11),D(9),v()()()),t&2){let e=n.$implicit;C(4),J(e.icon),C(2),J(e.title),C(3),J(e.tip)}}var Au=class t{navService=u(Dt);aboutService=u(rs);subtitle=this.aboutService.subtitle;tips=this.aboutService.tips;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-about-me"]],decls:11,vars:3,consts:[[1,"about-container"],[1,"content-wrapper"],[1,"section-header"],[1,"section-title"],[1,"title-underline"],[1,"section-subtitle"],[1,"cards-grid"],["appearance","outlined",1,"tip-card"],[1,"card-header"],["mat-card-avatar","",1,"card-icon-wrapper"],[1,"card-icon"],[1,"tip-text"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),D(4,"About Me"),v(),ne(5,"div",4),g(6,"p",5),D(7),v()(),g(8,"div",6),ht(9,BP,10,3,"mat-card",7,VP),v()()()),e&2&&(I("mobile",i.navService.isMobile()),C(7),J(i.subtitle()),C(2),mt(i.tips()))},dependencies:[ns,is,ND,OD,fn],styles:["[_nghost-%COMP%]{display:block;width:100%}.about-container[_ngcontent-%COMP%]{min-height:calc(100vh - 64px);display:flex;align-items:center;justify-content:center;padding:2rem}.content-wrapper[_ngcontent-%COMP%]{max-width:1200px;width:100%}.section-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:4rem}.section-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3rem);font-weight:700;margin:0 0 1rem;background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.title-underline[_ngcontent-%COMP%]{width:80px;height:4px;background:linear-gradient(90deg,var(--accent-primary),var(--accent-purple));margin:0 auto 1rem;border-radius:2px}.section-subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--text-secondary);margin:0}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem}.cards-grid[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child{grid-column:1/-1}.tip-card[_ngcontent-%COMP%]{background:var(--bg-secondary);border:1px solid var(--border-color);transition:all .3s ease;cursor:default}.tip-card[_ngcontent-%COMP%]:hover{transform:translateY(-8px);box-shadow:0 12px 40px var(--shadow);border-color:var(--accent-primary)}.tip-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:1.5rem 1.5rem 0}.card-header[_ngcontent-%COMP%]     .mat-mdc-card-header-text{display:flex;flex-direction:column;align-items:center;justify-content:center}.card-icon-wrapper[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));display:flex;align-items:center;justify-content:center;margin-right:1rem}.card-icon[_ngcontent-%COMP%]{color:#fff}.tip-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-weight:600;color:var(--text-primary)}.tip-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:1rem 1.5rem 1.5rem}.tip-text[_ngcontent-%COMP%]{line-height:1.5;color:var(--text-secondary);margin:0;white-space:pre-line}.about-container.mobile[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1.5rem}.about-container.mobile[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{margin-bottom:2rem}.about-container.mobile[_ngcontent-%COMP%]   .timeline-hint[_ngcontent-%COMP%]{flex-direction:column;align-items:center;text-align:center}"]})};var HP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),zP={passive:!0},HD=(()=>{class t{_platform=u(me);_ngZone=u(T);_renderer=u(He).createRenderer(null,null);_styleLoader=u(Ke);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return $e;this._styleLoader.load(HP);let i=Ot(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new M,s="cdk-text-field-autofilled",a=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,zP)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=Ot(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zD=new b("MAT_INPUT_VALUE_ACCESSOR");var uv=class{_box;_destroyed=new M;_resizeSubject=new M;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new K(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ee(e=>e.some(i=>i.target===n)),sr({bufferSize:1,refCount:!0}),Ce(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},UD=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(T);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new uv(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var UP=["notch"],$P=["matFormFieldNotchedOutline",""],GP=["*"],$D=["iconPrefixContainer"],GD=["textPrefixContainer"],WD=["iconSuffixContainer"],qD=["textSuffixContainer"],WP=["textField"],qP=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],YP=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function QP(t,n){t&1&&ne(0,"span",21)}function ZP(t,n){if(t&1&&(g(0,"label",20),N(1,1),ae(2,QP,1,0,"span",21),v()),t&2){let e=X(2);ve("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ge("for",e._control.disableAutomaticLabeling?null:e._control.id),C(2),ce(!e.hideRequiredMarker&&e._control.required?2:-1)}}function KP(t,n){if(t&1&&ae(0,ZP,3,5,"label",20),t&2){let e=X();ce(e._hasFloatingLabel()?0:-1)}}function XP(t,n){t&1&&ne(0,"div",7)}function JP(t,n){}function eF(t,n){if(t&1&&Mr(0,JP,0,0,"ng-template",13),t&2){X(2);let e=Tr(1);ve("ngTemplateOutlet",e)}}function tF(t,n){if(t&1&&(g(0,"div",9),ae(1,eF,1,1,null,13),v()),t&2){let e=X();ve("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),C(),ce(e._forceDisplayInfixLabel()?-1:1)}}function nF(t,n){t&1&&(g(0,"div",10,2),N(2,2),v())}function iF(t,n){t&1&&(g(0,"div",11,3),N(2,3),v())}function rF(t,n){}function oF(t,n){if(t&1&&Mr(0,rF,0,0,"ng-template",13),t&2){X();let e=Tr(1);ve("ngTemplateOutlet",e)}}function sF(t,n){t&1&&(g(0,"div",14,4),N(2,4),v())}function aF(t,n){t&1&&(g(0,"div",15,5),N(2,5),v())}function cF(t,n){t&1&&ne(0,"div",16)}function lF(t,n){t&1&&(g(0,"div",18),N(1,6),v())}function dF(t,n){if(t&1&&(g(0,"mat-hint",22),D(1),v()),t&2){let e=X(2);ve("id",e._hintLabelId),C(),J(e.hintLabel)}}function uF(t,n){if(t&1&&(g(0,"div",19),ae(1,dF,2,2,"mat-hint",22),N(2,7),ne(3,"div",23),N(4,8),v()),t&2){let e=X();C(),ce(e.hintLabel?1:-1)}}var Ja=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["mat-label"]]})}return t})(),fF=new b("MatError");var fv=(()=>{class t{align="start";id=u(Ht).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&($n("id",r.id),ge("align",null),I("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),hF=new b("MatPrefix");var mF=new b("MatSuffix");var ex=new b("FloatingLabelParent"),YD=(()=>{class t{_elementRef=u(F);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(UD);_ngZone=u(T);_parent=u(ex);_resizeSubscription=new Me;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return pF(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&I("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function pF(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var QD="mdc-line-ripple--active",Ru="mdc-line-ripple--deactivating",ZD=(()=>{class t{_elementRef=u(F);_cleanupTransitionEnd;constructor(){let e=u(T),i=u(Ve);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ru),e.add(QD)}deactivate(){this._elementRef.nativeElement.classList.add(Ru)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ru);e.propertyName==="opacity"&&r&&i.remove(QD,Ru)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),KD=(()=>{class t{_elementRef=u(F);_ngZone=u(T);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&pt(UP,5),i&2){let o;Q(o=Z())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&I("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:$P,ngContentSelectors:GP,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(De(),Et(0,"div",1),ze(1,"div",2,0),N(3),Ye(),Et(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),hv=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t})}return t})();var mv=new b("MatFormField"),gF=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),XD="fill",vF="auto",JD="fixed",_F="translateY(-50%)",pv=(()=>{class t{_elementRef=u(F);_changeDetectorRef=u(Xe);_platform=u(me);_idGenerator=u(Ht);_ngZone=u(T);_defaults=u(gF,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=aa("iconPrefixContainer");_textPrefixContainerSignal=aa("textPrefixContainer");_iconSuffixContainerSignal=aa("iconSuffixContainer");_textSuffixContainerSignal=aa("textSuffixContainer");_prefixSuffixContainers=le(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=a0(Ja);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Pe(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||vF}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||XD;this._appearanceSignal.set(i)}_appearanceSignal=Y(XD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||JD}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||JD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new M;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=nt();constructor(){let e=this._defaults,i=u(Nn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),kt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=le(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(mn([void 0,void 0]),j(()=>[i.errorState,i.userAriaDescribedBy]),Uc(),Ee(([[o,s],[a,c]])=>o!==a||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Ce(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Qn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){d0({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=le(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,h=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,p=`var(--mat-mdc-form-field-label-transform, ${_F} translateX(${h}))`,w=s+a+c+l;return[p,w]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(od(o,r._labelChild,Ja,5),Qt(o,hv,5)(o,hF,5)(o,mF,5)(o,fF,5)(o,fv,5)),i&2){ad();let s;Q(s=Z())&&(r._formFieldControl=s.first),Q(s=Z())&&(r._prefixChildren=s),Q(s=Z())&&(r._suffixChildren=s),Q(s=Z())&&(r._errorChildren=s),Q(s=Z())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(sd(r._iconPrefixContainerSignal,$D,5)(r._textPrefixContainerSignal,GD,5)(r._iconSuffixContainerSignal,WD,5)(r._textSuffixContainerSignal,qD,5),pt(WP,5)($D,5)(GD,5)(WD,5)(qD,5)(YD,5)(KD,5)(ZD,5)),i&2){ad(4);let o;Q(o=Z())&&(r._textField=o.first),Q(o=Z())&&(r._iconPrefixContainer=o.first),Q(o=Z())&&(r._textPrefixContainer=o.first),Q(o=Z())&&(r._iconSuffixContainer=o.first),Q(o=Z())&&(r._textSuffixContainer=o.first),Q(o=Z())&&(r._floatingLabel=o.first),Q(o=Z())&&(r._notchedOutline=o.first),Q(o=Z())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&I("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Qe([{provide:mv,useExisting:t},{provide:ex,useExisting:t}])],ngContentSelectors:YP,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(De(qP),Mr(0,KP,1,1,"ng-template",null,0,cd),g(2,"div",6,1),U("click",function(s){return r._control.onContainerClick(s)}),ae(4,XP,1,0,"div",7),g(5,"div",8),ae(6,tF,2,2,"div",9),ae(7,nF,3,0,"div",10),ae(8,iF,3,0,"div",11),g(9,"div",12),ae(10,oF,1,1,null,13),N(11),v(),ae(12,sF,3,0,"div",14),ae(13,aF,3,0,"div",15),v(),ae(14,cF,1,0,"div",16),v(),g(15,"div",17),ae(16,lF,2,0,"div",18)(17,uF,5,1,"div",19),v()),i&2){let o;C(2),I("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),C(2),ce(!r._hasOutline()&&!r._control.disabled?4:-1),C(2),ce(r._hasOutline()?6:-1),C(),ce(r._hasIconPrefix?7:-1),C(),ce(r._hasTextPrefix?8:-1),C(2),ce(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),C(2),ce(r._hasTextSuffix?12:-1),C(),ce(r._hasIconSuffix?13:-1),C(),ce(r._hasOutline()?-1:14),C(),I("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();C(),ce((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[YD,KD,dp,ZD,fv],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var tx=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ou=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var yF=["button","checkbox","file","hidden","image","radio","range","reset","submit"],bF=new b("MAT_INPUT_CONFIG"),nx=(()=>{class t{_elementRef=u(F);_platform=u(me);ngControl=u(gu,{optional:!0,self:!0});_autofillMonitor=u(HD);_ngZone=u(T);_formField=u(mv,{optional:!0});_renderer=u(Ve);_uid=u(Ht).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(bF,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new M;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Pe(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(hu.required)??!1}set required(e){this._required=Pe(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Wg().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Pe(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Wg().has(e));constructor(){let e=u(cv,{optional:!0}),i=u(lv,{optional:!0}),r=u(tx),o=u(zD,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?nd(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ou(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&kt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){yF.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&U("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&($n("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ge("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),I("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",we]},exportAs:["matInput"],features:[Qe([{provide:hv,useExisting:t}]),ut]})}return t})();var os=class t extends zt{get fileName(){return"skills"}displayableSkills=le(()=>{let n=this.data();return!n||!n.skills?[]:n.skills.flatMap(e=>e.children??[])});categories=le(()=>this.data()?.categories??[]);categoryColorMap=le(()=>(this.data()?.categories??[]).reduce((e,i)=>(e[i.id]=i.color,e),{}));static \u0275fac=(()=>{let n;return function(i){return(n||(n=be(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var gv=(t,n)=>n.id;function wF(t,n){if(t&1){let e=Lt();g(0,"div",12),U("click",function(){let r=Mt(e).$implicit,o=X();return Tt(o.filterByCategory(o.selectedCategory()===r.id?null:r.id))}),ne(1,"span",13),g(2,"span",14),D(3),v()()}if(t&2){let e=n.$implicit,i=X();I("active",i.selectedCategory()===e.id),C(),Gn("background-color",e.color),C(2),J(e.label)}}function CF(t,n){if(t&1&&(g(0,"span",20),D(1),v()),t&2){let e=n.$implicit;C(),J(e.name)}}function EF(t,n){if(t&1&&(g(0,"div",19),ht(1,CF,2,1,"span",20,gv),v()),t&2){let e=X().$implicit;C(),mt(e.children)}}function DF(t,n){if(t&1&&(g(0,"div",15)(1,"div",16)(2,"span",17),D(3),v(),g(4,"span",18),D(5),v()(),ae(6,EF,3,0,"div",19),v()),t&2){let e=n.$implicit,i=X();Gn("border-left-color",i.categoryColors()[e.category]),C(3),J(e.name),C(2),J(e.category),C(),ce(e.children&&e.children.length>0?6:-1)}}var Nu=class t{skillsService=u(os);subtitle=this.skillsService.subtitle;categories=this.skillsService.categories;categoryColors=this.skillsService.categoryColorMap;allSkills=this.skillsService.displayableSkills;selectedCategory=Y(null);searchTerm=Y("");filteredSkills=le(()=>{let n=this.allSkills(),e=this.selectedCategory(),i=this.searchTerm().toLowerCase(),r=n.filter(o=>{let s=!e||o.category===e,a=o.name.toLowerCase().includes(i),c=o.children?.some(l=>l.name.toLowerCase().includes(i))??!1;return s&&(a||c)});return this.sortSkillsRecursively(r)});sortSkillsRecursively(n){return[...n].sort((e,i)=>(i.level??0)-(e.level??0)).map(e=>G(y({},e),{children:e.children?this.sortSkillsRecursively(e.children):[]}))}filterByCategory(n){this.selectedCategory.set(n)}onSearchInput(n){let e=n.target.value;this.searchTerm.set(e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-skills"]],decls:18,vars:1,consts:[[1,"skills-container"],[1,"content-wrapper"],[1,"section-header"],[1,"section-title"],[1,"title-underline"],[1,"section-subtitle"],[1,"legend"],[1,"legend-item",3,"active"],["appearance","outline",1,"search-field"],["type","text","aria-label","Skill search","matInput","",2,"border","transparent",3,"input"],[1,"skills-list"],[1,"skill-item",3,"border-left-color"],[1,"legend-item",3,"click"],[1,"legend-dot"],[1,"legend-label"],[1,"skill-item"],[1,"skill-item-header"],[1,"skill-item-name"],[1,"skill-item-category"],[1,"skill-badges"],[1,"skill-badge"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),D(4,"Skills & Expertise"),v(),ne(5,"div",4),g(6,"p",5),D(7),v()(),g(8,"div",6),ht(9,wF,4,5,"div",7,gv),g(11,"mat-form-field",8)(12,"mat-label"),D(13,"Search skill"),v(),g(14,"input",9),U("input",function(o){return i.onSearchInput(o)}),v()()(),g(15,"div",10),ht(16,DF,7,5,"div",11,gv),v()()()),e&2&&(C(7),J(i.subtitle()),C(2),mt(i.categories()),C(7),mt(i.filteredSkills()))},dependencies:[pv,Ja,nx,xD],styles:[".skills-container[_ngcontent-%COMP%]{min-height:calc(100vh - 64px);display:flex;align-items:center;justify-content:center;padding:2rem}.content-wrapper[_ngcontent-%COMP%]{max-width:1400px;width:100%}.section-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.section-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3rem);font-weight:700;margin:0 0 1rem;background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.title-underline[_ngcontent-%COMP%]{width:80px;height:4px;background:linear-gradient(90deg,var(--accent-primary),var(--accent-purple));margin:0 auto 1rem;border-radius:2px}.section-subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--text-secondary);margin:0}.legend[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:2rem;flex-wrap:wrap;margin-bottom:2rem}.legend-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;border-radius:20px;cursor:pointer;transition:all .3s ease;background:transparent}.legend-item[_ngcontent-%COMP%]:hover{background:var(--bg-secondary);transform:translateY(-2px)}.legend-item.active[_ngcontent-%COMP%]{background:var(--bg-secondary);box-shadow:0 4px 12px #0003}.legend-dot[_ngcontent-%COMP%]{width:16px;height:16px;border-radius:50%;box-shadow:0 2px 8px #0003}.legend-label[_ngcontent-%COMP%]{font-size:.875rem;font-weight:500;color:var(--text-secondary)}.search-field[_ngcontent-%COMP%]{width:200px}.skills-list[_ngcontent-%COMP%]{flex:1;max-height:400px;background:var(--bg-secondary);border-radius:20px;border:1px solid var(--border-color);padding:1.5rem;box-shadow:0 4px 20px #0003;overflow-y:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));grid-auto-flow:dense;grid-auto-rows:minmax(65px,auto);gap:1rem;margin-bottom:1rem}.skill-item[_ngcontent-%COMP%]{padding:.75rem;margin-bottom:.75rem;background:var(--bg-primary);border-radius:12px;border-left:4px solid;cursor:pointer;transition:all .3s ease;grid-row:span 2}.skill-item[_ngcontent-%COMP%]:hover{transform:translate(5px);box-shadow:0 4px 12px #0000004d}.skill-item-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem}.skill-item-name[_ngcontent-%COMP%]{font-size:.875rem;font-weight:600;color:var(--text-primary)}.skill-item-category[_ngcontent-%COMP%]{font-size:.7rem;text-transform:uppercase;color:var(--text-secondary);opacity:.7}.skill-item-level[_ngcontent-%COMP%]{display:flex;gap:2px}.star[_ngcontent-%COMP%]{font-size:.75rem;color:#ffffff4d}.star.filled[_ngcontent-%COMP%]{color:gold;text-shadow:0 0 4px rgba(255,215,0,.8)}.skill-badges[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.75rem}.skill-badge[_ngcontent-%COMP%]{display:inline-block;padding:.25rem .75rem;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:12px;font-size:.75rem;font-weight:500;color:var(--text-secondary);transition:all .2s ease}.skill-badge[_ngcontent-%COMP%]:hover{background:var(--accent-primary);color:var(--bg-primary);border-color:var(--accent-primary);transform:translateY(-1px);box-shadow:0 2px 8px #0003}"]})};var xF={capture:!0},SF=["focus","mousedown","mouseenter","touchstart"],vv="mat-ripple-loader-uninitialized",_v="mat-ripple-loader-class-name",ix="mat-ripple-loader-centered",Pu="mat-ripple-loader-disabled",Fu=(()=>{class t{_document=u(P);_animationsDisabled=nt();_globalRippleOptions=u(qr,{optional:!0});_platform=u(me);_ngZone=u(T);_injector=u(re);_eventCleanups;_hosts=new Map;constructor(){let e=u(He).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>SF.map(i=>e.listen(this._document,i,this._onInteraction,xF)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(vv,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(_v))&&e.setAttribute(_v,i.className||""),i.centered&&e.setAttribute(ix,""),i.disabled&&e.setAttribute(Pu,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Pu,""):e.removeAttribute(Pu)}_onInteraction=e=>{let i=Bt(e);if(i instanceof HTMLElement){let r=i.closest(`[${vv}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(_v)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??qa.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??qa.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Pu),rippleConfig:{centered:e.hasAttribute(ix),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new Wr(a,this._ngZone,i,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:l}),e.removeAttribute(vv)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var IF=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],MF=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function TF(t,n){t&1&&(g(0,"span",3),N(1,1),v())}function kF(t,n){t&1&&(g(0,"span",6),N(1,2),v())}var rx=new b("MatChipAvatar"),ox=new b("MatChipTrailingIcon"),sx=new b("MatChipEdit"),ax=new b("MatChipRemove"),cx=new b("MatChip"),lx=(()=>{class t{_elementRef=u(F);_parentChip=u(cx);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){u(Ke).load(_i),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(ge("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),I("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",we],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ar(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),AF=(()=>{class t extends lx{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=W({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&U("click",function(s){return r._handleClick(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(ge("tabindex",r._getTabindex()),I("mdc-evolution-chip__action--presentational",!1))},features:[Fe]})}return t})();var dx=(()=>{class t{_changeDetectorRef=u(Xe);_elementRef=u(F);_tagName=u(o0);_ngZone=u(T);_focusMonitor=u(On);_globalRippleOptions=u(qr,{optional:!0});_document=u(P);_onFocus=new M;_onBlur=new M;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=nt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=u(Ht).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new ue;destroyed=new ue;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=u(Fu);_injector=u(re);constructor(){let e=u(Ke);e.load(_i),e.load(Qo),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Qn(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&Qt(o,rx,5)(o,sx,5)(o,ox,5)(o,ax,5)(o,rx,5)(o,ox,5)(o,sx,5)(o,ax,5),i&2){let s;Q(s=Z())&&(r.leadingIcon=s.first),Q(s=Z())&&(r.editIcon=s.first),Q(s=Z())&&(r.trailingIcon=s.first),Q(s=Z())&&(r.removeIcon=s.first),Q(s=Z())&&(r._allLeadingIcons=s),Q(s=Z())&&(r._allTrailingIcons=s),Q(s=Z())&&(r._allEditIcons=s),Q(s=Z())&&(r._allRemoveIcons=s)}},viewQuery:function(i,r){if(i&1&&pt(AF,5),i&2){let o;Q(o=Z())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&U("keydown",function(s){return r._handleKeydown(s)}),i&2&&($n("id",r.id),ge("role",r.role)("aria-label",r.ariaLabel),xn("mat-"+(r.color||"primary")),I("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",we],highlighted:[2,"highlighted","highlighted",we],disableRipple:[2,"disableRipple","disableRipple",we],disabled:[2,"disabled","disabled",we]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Qe([{provide:cx,useExisting:t}])],ngContentSelectors:MF,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(De(IF),ne(0,"span",0),g(1,"span",1)(2,"span",2),ae(3,TF,2,0,"span",3),g(4,"span",4),N(5),ne(6,"span",5),v()()(),ae(7,kF,2,0,"span",6)),i&2&&(C(3),ce(r.leadingIcon?3:-1),C(4),ce(r._hasTrailingIcon()?7:-1))},dependencies:[lx],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var RF=["mat-icon-button",""],OF=["*"],NF=new b("MAT_BUTTON_CONFIG");function ux(t){return t==null?void 0:Ar(t)}var Lu=(()=>{class t{_elementRef=u(F);_ngZone=u(T);_animationsDisabled=nt();_config=u(NF,{optional:!0});_focusMonitor=u(On);_cleanupClick;_renderer=u(Ve);_rippleLoader=u(Fu);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(Ke).load(_i);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(ge("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),xn(r.color?"mat-"+r.color:""),I("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",we],disabled:[2,"disabled","disabled",we],ariaDisabled:[2,"aria-disabled","ariaDisabled",we],disabledInteractive:[2,"disabledInteractive","disabledInteractive",we],tabIndex:[2,"tabIndex","tabIndex",ux],_tabindex:[2,"tabindex","_tabindex",ux]}})}return t})(),bi=(()=>{class t extends Lu{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Fe],attrs:RF,ngContentSelectors:OF,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(De(),Et(0,"span",0),N(1),Et(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var PF=["matButton",""],hx=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],mx=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],FF=["mat-fab",""];var fx=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ss=(()=>{class t extends Lu{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=LF(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?fx.get(this._appearance):null,o=fx.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Fe],attrs:PF,ngContentSelectors:mx,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(De(hx),Et(0,"span",0),N(1),ze(2,"span",1),N(3,1),Ye(),N(4,2),Et(5,"span",2)(6,"span",3)),i&2&&I("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function LF(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var jF=new b("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>yv}),yv={color:"accent"},px=(()=>{class t extends Lu{_options=u(jF,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||yv,this.color=this._options.color||yv.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&I("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",we]},exportAs:["matButton","matAnchor"],features:[Fe],attrs:FF,ngContentSelectors:mx,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(De(hx),Et(0,"span",0),N(1),ze(2,"span",1),N(3,1),Ye(),N(4,2),Et(5,"span",2)(6,"span",3)),i&2&&I("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return t})();var as=class t extends zt{get fileName(){return"projects"}projects=le(()=>this.data()?.projects??[]);hintTitle=le(()=>this.data()?.hint?.title??"");hintDescription=le(()=>this.data()?.hint?.description??"");static \u0275fac=(()=>{let n;return function(i){return(n||(n=be(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var VF=(t,n)=>n.title;function BF(t,n){if(t&1&&(g(0,"mat-chip"),D(1),v()),t&2){let e=n.$implicit;C(),J(e)}}function HF(t,n){if(t&1&&(g(0,"a",15)(1,"button",19)(2,"mat-icon"),D(3,"slideshow"),v(),D(4," Live Demo "),v()()),t&2){let e=X().$implicit;ve("href",e.liveUrl,ji)}}function zF(t,n){if(t&1&&(g(0,"a",15)(1,"button",20)(2,"mat-icon"),D(3,"code"),v(),D(4," Code "),v()()),t&2){let e=X().$implicit;ve("href",e.githubUrl,ji)}}function UF(t,n){if(t&1&&(g(0,"a",15)(1,"button",20)(2,"mat-icon"),D(3,"launch"),v(),D(4," Product Page "),v()()),t&2){let e=X().$implicit;ve("href",e.productUrl,ji)}}function $F(t,n){if(t&1&&(g(0,"mat-card",7)(1,"div",9),ne(2,"img",10),g(3,"div",11)(4,"div",12)(5,"p"),D(6),v(),g(7,"div",13),ht(8,BF,2,1,"mat-chip",null,tp),v(),g(10,"div",14),ae(11,HF,5,1,"a",15),ae(12,zF,5,1,"a",15),ae(13,UF,5,1,"a",15),v()()()(),g(14,"mat-card-content",16)(15,"h3",17),D(16),v(),g(17,"p",18),D(18),v()()()),t&2){let e=n.$implicit;C(2),ve("src",e.imageUrl,ji)("alt",e.title),C(4),J(e.descriptionLong),C(2),mt(e.technologies),C(3),ce(e.liveUrl?11:-1),C(),ce(e.githubUrl?12:-1),C(),ce(e.productUrl?13:-1),C(3),J(e.title),C(2),J(e.description)}}var ju=class t{navService=u(Dt);projectsService=u(as);subtitle=this.projectsService.subtitle;projects=this.projectsService.projects;hintTitle=this.projectsService.hintTitle;hintDescription=this.projectsService.hintDescription;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-projects"]],decls:18,vars:5,consts:[[1,"projects-container"],[1,"content-wrapper"],[1,"section-header"],[1,"section-title"],[1,"title-underline"],[1,"section-subtitle"],[1,"projects-grid"],["appearance","outlined",1,"project-card"],[1,"timeline-hint"],[1,"project-image-wrapper"],[1,"project-image",3,"src","alt"],[1,"project-overlay"],[1,"overlay-content"],[1,"tech-stack"],[1,"project-actions"],["target","_blank","rel","noopener",3,"href"],[1,"card-preview"],[1,"project-title"],[1,"project-short-desc"],["mat-raised-button","","color","primary"],["mat-stroked-button",""]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),D(4,"Featured Projects"),v(),ne(5,"div",4),g(6,"p",5),D(7),v()(),g(8,"div",6),ht(9,$F,19,8,"mat-card",7,VF),v(),g(11,"div",8)(12,"mat-icon"),D(13,"lightbulb"),v(),g(14,"p")(15,"strong"),D(16),v(),D(17),v()()()()),e&2&&(I("mobile",i.navService.isMobile()),C(7),J(i.subtitle()),C(2),mt(i.projects()),C(7),At("",i.hintTitle(),":"),C(),At(" ",i.hintDescription()))},dependencies:[ns,is,dx,fn,ss],styles:["[_nghost-%COMP%]{display:block;width:100%}.projects-container[_ngcontent-%COMP%]{min-height:calc(100vh - 64px);display:flex;align-items:center;justify-content:center;padding:2rem}.content-wrapper[_ngcontent-%COMP%]{max-width:1400px;width:100%}.section-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:4rem}.section-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3rem);font-weight:700;margin:0 0 1rem;background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.title-underline[_ngcontent-%COMP%]{width:80px;height:4px;background:linear-gradient(90deg,var(--accent-primary),var(--accent-purple));margin:0 auto 1rem;border-radius:2px}.section-subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--text-secondary);margin:0}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:2rem;margin-bottom:3rem}.project-card[_ngcontent-%COMP%]{background:var(--bg-secondary);border:1px solid var(--border-color);overflow:hidden;transition:all .3s ease;cursor:pointer}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-8px);box-shadow:0 16px 48px var(--shadow)}.project-image-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:250px;overflow:hidden;transition:height .3s ease}.project-card[_ngcontent-%COMP%]:hover   .project-image-wrapper[_ngcontent-%COMP%]{height:350px}.project-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}.project-card[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]{transform:scale(1.1)}.project-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;background:linear-gradient(135deg,#6c5ce7f2,#9b59b6f2);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s ease;padding:1.5rem}.project-card[_ngcontent-%COMP%]:hover   .project-overlay[_ngcontent-%COMP%]{opacity:1}.overlay-content[_ngcontent-%COMP%]{color:#fff;text-align:center;transform:translateY(20px);transition:transform .3s ease}.project-card[_ngcontent-%COMP%]:hover   .overlay-content[_ngcontent-%COMP%]{transform:translateY(0)}.overlay-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin:0 0 .75rem;font-weight:600}.overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.5;margin:0 0 1rem;opacity:.95}.tech-stack[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center;margin-bottom:1.5rem}.tech-stack[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]{background-color:#fff3;color:#fff;font-size:.75rem;height:24px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.project-actions[_ngcontent-%COMP%]{display:flex;gap:.75rem;justify-content:center}.project-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.project-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;border-color:#fff}.project-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.25rem}.card-preview[_ngcontent-%COMP%]{padding:1.5rem;display:block;transition:padding .3s ease,height .3s ease;overflow:hidden}.project-card[_ngcontent-%COMP%]:hover   .card-preview[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem;height:auto}.project-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;margin:0 0 .5rem;color:var(--text-primary);transition:margin .3s ease}.project-card[_ngcontent-%COMP%]:hover   .project-title[_ngcontent-%COMP%]{margin-bottom:0}.project-short-desc[_ngcontent-%COMP%]{font-size:.875rem;color:var(--text-secondary);margin:0;line-height:1.5;max-height:100px;transition:max-height .3s ease,opacity .2s ease,margin .3s ease;overflow:hidden}.project-card[_ngcontent-%COMP%]:hover   .project-short-desc[_ngcontent-%COMP%]{max-height:0;opacity:0;margin:0}.projects-container.mobile[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1.5rem}.projects-container.mobile[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{margin-bottom:2rem}.projects-container.mobile[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%]{transform:translateY(0);text-align:left}.projects-container.mobile[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]:hover   .project-image-wrapper[_ngcontent-%COMP%]{height:450px}@media(max-width:768px){.projects-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.timeline-hint[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:flex-start;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:12px;padding:1.5rem;box-shadow:0 4px 20px var(--shadow)}.timeline-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--accent-primary);font-size:28px;width:28px;height:28px;flex-shrink:0}.timeline-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;line-height:1.6;color:var(--text-secondary)}.timeline-hint[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--text-primary)}"]})};var cs=class t extends zt{get fileName(){return"references"}references=le(()=>this.data()?.references??[]);static \u0275fac=(()=>{let n;return function(i){return(n||(n=be(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var GF=(t,n)=>n.name;function WF(t,n){if(t&1){let e=Lt();g(0,"button",18),U("click",function(){Mt(e);let r=X().$index,o=X();return Tt(o.toggleTranslation(r))}),g(1,"mat-icon"),D(2,"translate"),v()()}if(t&2){let e=X().$index,i=X();I("active",i.showTranslation[e]),ge("aria-label",i.showTranslation[e]?"Show original":"Show translation")}}function qF(t,n){if(t&1&&(g(0,"mat-card",7)(1,"mat-card-content")(2,"div",8)(3,"mat-icon"),D(4,"format_quote"),v()(),g(5,"div",9)(6,"p",10),D(7),v(),ae(8,WF,3,3,"button",11),v(),g(9,"div",12)(10,"div",13)(11,"h4",14),D(12),v(),g(13,"p",15),D(14),v(),g(15,"p",16),D(16),v(),g(17,"p",17),D(18),v()()()()()),t&2){let e=n.$implicit,i=n.$index,r=X();C(7),J(r.showTranslation[i]&&e.translation?e.translation:e.text),C(),ce(e.translation?8:-1),C(4),J(e.name),C(2),J(e.position),C(2),J(e.company),C(2),J(e.relationship)}}var Vu=class t{navService=u(Dt);referencesService=u(cs);subtitle=this.referencesService.subtitle;references=this.referencesService.references;showTranslation={};toggleTranslation(n){this.showTranslation[n]=!this.showTranslation[n]}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-references"]],decls:11,vars:3,consts:[[1,"references-container"],[1,"content-wrapper"],[1,"section-header"],[1,"section-title"],[1,"title-underline"],[1,"section-subtitle"],[1,"references-grid"],["appearance","outlined",1,"reference-card"],[1,"quote-icon"],[1,"reference-text-wrapper"],[1,"reference-text"],["mat-icon-button","",1,"translate-button",3,"active"],[1,"reference-author"],[1,"author-info"],[1,"author-name"],[1,"author-position"],[1,"author-company"],[1,"author-relationship"],["mat-icon-button","",1,"translate-button",3,"click"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),D(4,"References"),v(),ne(5,"div",4),g(6,"p",5),D(7),v()(),g(8,"div",6),ht(9,qF,19,6,"mat-card",7,GF),v()()()),e&2&&(I("mobile",i.navService.isMobile()),C(7),J(i.subtitle()),C(2),mt(i.references()))},dependencies:[ns,is,fn,bi],styles:["[_nghost-%COMP%]{display:block;width:100%}.references-container[_ngcontent-%COMP%]{min-height:calc(100vh - 64px);display:flex;align-items:center;justify-content:center;padding:2rem}.content-wrapper[_ngcontent-%COMP%]{max-width:1200px;width:100%}.section-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:4rem}.section-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3rem);font-weight:700;margin:0 0 1rem;background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.title-underline[_ngcontent-%COMP%]{width:80px;height:4px;background:linear-gradient(90deg,var(--accent-primary),var(--accent-purple));margin:0 auto 1rem;border-radius:2px}.section-subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--text-secondary);margin:0}.references-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}.reference-card[_ngcontent-%COMP%]{background:var(--bg-secondary);border:1px solid var(--border-color);transition:all .3s ease;position:relative}.reference-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 12px 40px var(--shadow);border-color:var(--accent-primary)}.reference-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:2rem;display:flex;flex-direction:column;gap:1.5rem}.quote-icon[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));display:flex;align-items:center;justify-content:center;margin-bottom:.5rem}.quote-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:28px;width:28px;height:28px}.reference-text-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.reference-text-wrapper[_ngcontent-%COMP%]   .reference-text[_ngcontent-%COMP%]{font-size:1rem;line-height:1.7;color:var(--text-secondary);margin:0;font-style:italic;position:relative;white-space:pre-line}.reference-text-wrapper[_ngcontent-%COMP%]   .translate-button[_ngcontent-%COMP%]{margin-left:auto;color:var(--text-secondary)}.reference-text-wrapper[_ngcontent-%COMP%]   .translate-button.active[_ngcontent-%COMP%]{color:var(--accent-secondary)}.reference-author[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center;margin-top:auto;padding-top:1rem;border-top:1px solid var(--border-color)}.avatar[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--accent-primary);box-shadow:0 4px 12px var(--shadow);flex-shrink:0}.author-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.author-name[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;margin:0;color:var(--text-primary)}.author-position[_ngcontent-%COMP%]{font-size:.875rem;margin:0;color:var(--text-secondary);font-weight:500}.author-company[_ngcontent-%COMP%]{font-size:.875rem;margin:0;color:var(--text-secondary)}.author-relationship[_ngcontent-%COMP%]{font-size:.75rem;margin:0;color:var(--text-muted);font-style:italic}.references-container.mobile[_ngcontent-%COMP%]   .references-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1.5rem}.references-container.mobile[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{margin-bottom:2rem}@media(max-width:768px){.references-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var ls=class t extends zt{get fileName(){return"contact"}socialLinks=le(()=>this.data()?.socialLinks??[]);location=le(()=>this.data()?.location??"");availability=le(()=>this.data()?.availability??"");static \u0275fac=(()=>{let n;return function(i){return(n||(n=be(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var YF=(t,n)=>n.label;function QF(t,n){t&1&&(g(0,"span",18),D(1,"Copied"),v())}function ZF(t,n){if(t&1){let e=Lt();g(0,"div",14)(1,"button",15)(2,"mat-icon"),D(3),v()(),g(4,"span"),D(5),v(),g(6,"button",16),U("click",function(){Mt(e);let r=X().$implicit,o=X();return Tt(o.copyEmail(r.value))}),g(7,"mat-icon",17),D(8),v()(),ae(9,QF,2,0,"span",18),v()}if(t&2){let e=X().$implicit,i=X();I("copied",i.copiedEmail()),C(3),J(e.icon),C(2),J(e.label),C(),ve("disabled",i.copiedEmail()),C(),I("animate",i.copiedEmail()),C(),At(" ",i.copiedEmail()?"check":"content_copy"," "),C(),ce(i.copiedEmail()?9:-1)}}function KF(t,n){if(t&1&&(g(0,"a",13)(1,"button",15)(2,"mat-icon"),D(3),v()(),g(4,"span"),D(5),v()()),t&2){let e=X().$implicit;ve("href",e.link,ji),C(3),J(e.icon),C(2),J(e.label)}}function XF(t,n){if(t&1&&ae(0,ZF,10,9,"div",12)(1,KF,6,3,"a",13),t&2){let e=n.$implicit;ce(e.action==="copy"?0:1)}}var Bu=class t{navService=u(Dt);contactService=u(ls);subtitle=this.contactService.subtitle;socialLinks=this.contactService.socialLinks;location=this.contactService.location;availability=this.contactService.availability;copiedEmail=Y(!1);async copyEmail(n){if(n)try{await navigator.clipboard.writeText(`${n.user}@${n.domain}`),this.copiedEmail.set(!0),setTimeout(()=>this.copiedEmail.set(!1),3e3)}catch(e){console.error("Failed to copy email:",e)}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-contact"]],decls:26,vars:5,consts:[[1,"contact-container"],[1,"content-wrapper"],[1,"section-header"],[1,"section-title"],[1,"title-underline"],[1,"contact-content"],[1,"contact-info"],[1,"info-title"],[1,"info-description"],[1,"social-links"],[1,"contact-details"],[1,"detail-item"],[1,"social-link","email-link",3,"copied"],["target","_blank","rel","noopener",1,"social-link",3,"href"],[1,"social-link","email-link"],["mat-icon-button","",1,"social-button"],["mat-icon-button","",1,"copy-icon-button",3,"click","disabled"],[1,"copy-icon"],[1,"copied-text"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),D(4,"Get In Touch"),v(),ne(5,"div",4),v(),g(6,"div",5)(7,"div",6)(8,"h3",7),D(9,"Let's Connect"),v(),g(10,"p",8),D(11),v(),g(12,"div",9),ht(13,XF,2,1,null,null,YF),v(),g(15,"div",10)(16,"div",11)(17,"mat-icon"),D(18,"location_on"),v(),g(19,"span"),D(20),v()(),g(21,"div",11)(22,"mat-icon"),D(23,"schedule"),v(),g(24,"span"),D(25),v()()()()()()()),e&2&&(I("mobile",i.navService.isMobile()),C(11),J(i.subtitle()),C(2),mt(i.socialLinks()),C(7),J(i.location()),C(5),J(i.availability()))},dependencies:[SD,fn,bi],styles:["[_nghost-%COMP%]{display:block;width:100%}.contact-container[_ngcontent-%COMP%]{min-height:calc(100vh - 64px);display:flex;align-items:center;justify-content:center;padding:2rem}.content-wrapper[_ngcontent-%COMP%]{max-width:1200px;width:100%}.section-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.section-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw,3rem);font-weight:700;margin:0 0 1rem;background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.title-underline[_ngcontent-%COMP%]{width:80px;height:4px;background:linear-gradient(90deg,var(--accent-primary),var(--accent-purple));margin:0 auto 1rem;border-radius:2px}.section-subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--text-secondary);margin:0}.contact-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;justify-content:center}.contact-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:550px;margin:0 auto;gap:2rem}.contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:600;color:var(--text-primary);margin:0}.info-title[_ngcontent-%COMP%]{text-align:center}.info-description[_ngcontent-%COMP%]{font-size:1rem;line-height:1.7;color:var(--text-secondary);margin:0;text-align:center}.social-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.social-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;text-decoration:none;color:var(--text-secondary);transition:all .3s ease;padding:.5rem;border-radius:8px}.social-link[_ngcontent-%COMP%]:hover{background-color:var(--bg-tertiary);color:var(--accent-primary);transform:translate(8px)}.email-link[_ngcontent-%COMP%]{position:relative;justify-content:space-between}.email-link.copied[_ngcontent-%COMP%]{pointer-events:none;opacity:.7}.copy-icon-button[_ngcontent-%COMP%]{color:var(--text-muted);transition:all .3s ease;margin-left:auto;cursor:pointer}.copy-icon-button[_ngcontent-%COMP%]:hover:not(:disabled){color:var(--accent-primary);transform:scale(1.1)}.copy-icon-button[_ngcontent-%COMP%]:disabled{color:var(--accent-primary);cursor:not-allowed}.copy-icon[_ngcontent-%COMP%]{transition:all .3s ease}.copy-icon.animate[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_checkmark .5s ease-in-out}@keyframes _ngcontent-%COMP%_checkmark{0%{transform:scale(0) rotate(0)}50%{transform:scale(1.3) rotate(180deg)}to{transform:scale(1) rotate(360deg)}}.social-button[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));color:#fff}.contact-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}.detail-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;color:var(--text-secondary)}.detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--accent-primary);overflow:visible}.contact-form-wrapper[_ngcontent-%COMP%]{background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:16px;padding:2.5rem;box-shadow:0 8px 32px var(--shadow)}.contact-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.full-width[_ngcontent-%COMP%]{width:100%}.submit-button[_ngcontent-%COMP%]{align-self:flex-end;padding:.75rem 2rem;font-size:1rem;font-weight:600;display:flex;align-items:center;gap:.5rem}.submit-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.25rem}  .contact-form .mat-mdc-form-field{--mdc-outlined-text-field-container-shape: 12px}  .contact-form .mat-mdc-text-field-wrapper{background-color:transparent}.contact-container.mobile[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem}.contact-container.mobile[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{margin-bottom:2rem}.contact-container.mobile[_ngcontent-%COMP%]   .contact-form-wrapper[_ngcontent-%COMP%]{padding:1.5rem}.contact-container.mobile[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{width:100%}@media(max-width:768px){.contact-content[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var JF=20,Gi=(()=>{class t{_ngZone=u(T);_platform=u(me);_renderer=u(He).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new M;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=JF){return this._platform.isBrowser?new K(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Vc(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):B()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ee(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Ot(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yr=(()=>{class t{elementRef=u(F);scrollDispatcher=u(Gi);ngZone=u(T);dir=u(Nn,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new M;_renderer=u(Ve);_cleanupScroll;_elementScrolled=new M;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&Wo()!=Rn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),Wo()==Rn.INVERTED?e.left=e.right:Wo()==Rn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;AE()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:i:e=="end"&&(e=s?i:r),s&&Wo()==Rn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Wo()==Rn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),eL=20,ds=(()=>{class t{_platform=u(me);_listeners;_viewportSize=null;_change=new M;_document=u(P);constructor(){let e=u(T),i=u(He).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=eL){return e>0?this._change.pipe(Vc(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ec=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},tc=class extends ec{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Hu=class extends ec{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},bv=class extends ec{element;constructor(n){super(),this.element=n instanceof F?n.nativeElement:n}},wv=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof tc)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Hu)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof bv)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},zu=class extends wv{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(ai,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||re.NULL,o=r.get(Te,i.injector);e=ud(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Uu=class{enable(){}disable(){}attach(){}};function Cv(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function gx(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function Dv(t,n){return new $u(t.get(Gi),t.get(ds),t.get(T),n)}var $u=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Cv(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Gu=class{positionStrategy;scrollStrategy=new Uu;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Wu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var wx=(()=>{class t{_attachedOverlays=[];_document=u(P);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cx=(()=>{class t extends wx{_ngZone=u(T);_renderer=u(He).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ex=(()=>{class t extends wx{_platform=u(me);_ngZone=u(T);_renderer=u(He).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Bt(e)};_clickListener=e=>{let i=Bt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(vx(a.overlayElement,i)||vx(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vx(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Dx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),xx=(()=>{class t{_platform=u(me);_containerElement;_document=u(P);_styleLoader=u(Ke);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Gg()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Gg()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Dx)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ev=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function xv(t){return t&&t.nodeType===1}var qu=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new M;_attachments=new M;_detachments=new M;_positionStrategy;_scrollStrategy;_locationChanges=Me.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new M;_outsidePointerEvents=new M;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,c,l,d=!1,f,m){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=f,this._renderer=m,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ft(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=G(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=tt(this._config.width),n.height=tt(this._config.height),n.minWidth=tt(this._config.minWidth),n.minHeight=tt(this._config.minHeight),n.maxWidth=tt(this._config.maxWidth),n.maxHeight=tt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;xv(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ev(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Go(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ft(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},_x="cdk-overlay-connected-position-bounding-box",tL=/([A-Za-z%]+)$/;function Sv(t,n){return new Yu(n,t.get(ds),t.get(P),t.get(me),t.get(xx))}var Yu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new M;_resizeSubscription=Me.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(_x),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(n,r,a),l=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(l,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:l,originPoint:c,position:a,overlayRect:e})}if(o.length){let a=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,a=l)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Qr(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(_x),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof F?this._origin.nativeElement:xv(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=bx(e),{x:s,y:a}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(s+=c),l&&(a+=l);let d=0-s,f=s+o.width-i.width,m=0-a,h=a+o.height-i.height,p=this._subtractOverflows(o.width,d,f),w=this._subtractOverflows(o.height,m,h),x=p*w;return{visibleArea:x,isCompletelyWithinViewport:o.width*o.height===x,fitsInViewportVertically:w===o.height,fitsInViewportHorizontally:p==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=yx(this._overlayRef.getConfig().minHeight),a=yx(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||s!=null&&s<=r,l=n.fitsInViewportHorizontally||a!=null&&a<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=bx(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=l||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!nL(this._lastScrollVisibility,i)){let r=new Wu(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),p=this._lastBoundingBoxSize.height;o=h*2,s=n.y-h,o>p&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-p/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,m;if(l)m=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),p=this._lastBoundingBoxSize.width;d=h*2,f=n.x-h,d>p&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-p/2)}return{top:s,left:f,bottom:a,right:m,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=tt(i.width),r.height=tt(i.height),r.top=tt(i.top)||"auto",r.bottom=tt(i.bottom)||"auto",r.left=tt(i.left)||"auto",r.right=tt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=tt(o)),s&&(r.maxWidth=tt(s))}this._lastBoundingBoxSize=i,Qr(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Qr(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Qr(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Qr(i,this._getExactOverlayY(e,n,d)),Qr(i,this._getExactOverlayX(e,n,d))}else i.position="static";let a="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),l&&(a+=`translateY(${l}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=tt(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=tt(s.maxWidth):o&&(i.maxWidth="")),Qr(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=tt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=tt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:gx(n,i),isOriginOutsideView:Cv(n,i),isOverlayClipped:gx(e,i),isOverlayOutsideView:Cv(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Go(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof F)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Qr(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function yx(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(tL);return!e||e==="px"?parseFloat(n):null}return t||null}function bx(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function nL(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var Sx=new b("OVERLAY_DEFAULT_CONFIG");function Iv(t,n){t.get(Ke).load(Dx);let e=t.get(xx),i=t.get(P),r=t.get(Ht),o=t.get(Yt),s=t.get(Nn),a=t.get(Ve,null,{optional:!0})||t.get(He).createRenderer(null,null),c=new Gu(n),l=t.get(Sx,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,"showPopover"in i.body?c.usePopover=n?.usePopover??l:c.usePopover=!1;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return xv(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):e.getContainerElement().appendChild(f),new qu(new zu(d,o,t),f,d,c,t.get(T),t.get(Cx),i,t.get(ui),t.get(Ex),n?.disableAnimations??t.get(Fi,null,{optional:!0})==="NoopAnimations",t.get(Te),a)}var rL=["tooltip"],oL=20;var sL=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(re);return()=>Dv(t,{scrollThrottle:oL})}}),aL=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ix="tooltip-panel",cL={passive:!0},lL=8,dL=8,uL=24,fL=200,Tv=(()=>{class t{_elementRef=u(F);_ngZone=u(T);_platform=u(me);_ariaDescriber=u(YE);_focusMonitor=u(On);_dir=u(Nn);_injector=u(re);_viewContainerRef=u(qt);_mediaMatcher=u(Ko);_document=u(P);_renderer=u(Ve);_animationsDisabled=nt();_defaultOptions=u(aL,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Mx;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Pe(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=Pe(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Kt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Kt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new M;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=lL}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ce(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new tc(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Ce(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof F)return this._overlayRef;this._detach()}let i=this._injector.get(Gi).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Ix}`,o=Sv(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(Ce(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Iv(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(sL)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ce(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ce(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ce(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ce(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(y(y({},r.main),o.main)),this._addOffset(y(y({},r.fallback),o.fallback))])}_addOffset(e){let i=dL,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),ft(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,s;if(i==="center"?this._dir&&this._dir.value==="rtl"?s=r==="end"?"left":"right":s=r==="start"?"left":"right":s=i==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let a=this._overlayRef;if(a){let c=`${this._cssClassPrefix}-${Ix}-`;a.removePanelClass(c+this._currentPosition),a.addPanelClass(c+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,cL))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||ft({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!lu(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=W({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&I("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),Mx=(()=>{class t{_changeDetectorRef=u(Xe);_elementRef=u(F);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=nt();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new M;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>uL&&e.width>=fL}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(i);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&pt(rL,7),i&2){let o;Q(o=Z())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&U("mouseleave",function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(ze(0,"div",1,0),rd("animationend",function(s){return r._handleAnimationEnd(s)}),ze(2,"div",2),D(3),Ye()()),i&2&&(xn(r.tooltipClass),I("mdc-tooltip--multiline",r._isMultiline),C(3),J(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();var hL=["mat-internal-form-field",""],mL=["*"],Tx=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&I("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:hL,ngContentSelectors:mL,decls:1,vars:0,template:function(i,r){i&1&&(De(),N(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var pL=["switch"],gL=["*"];function vL(t,n){t&1&&(g(0,"span",11),go(),g(1,"svg",13),ne(2,"path",14),v(),g(3,"svg",15),ne(4,"path",16),v()())}var _L=new b("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Qu=class{source;checked;constructor(n,e){this.source=n,this.checked=e}},kx=(()=>{class t{_elementRef=u(F);_focusMonitor=u(On);_changeDetectorRef=u(Xe);defaults=u(_L);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Qu(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=nt();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new ue;toggleChange=new ue;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){u(Ke).load(_i);let e=u(new kr("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||"accent",this.id=this._uniqueId=u(Ht).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Qu(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(i,r){if(i&1&&pt(pL,5),i&2){let o;Q(o=Z())&&(r._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(i,r){i&2&&($n("id",r.id),ge("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),xn(r.color?"mat-"+r.color:""),I("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",we],color:"color",disabled:[2,"disabled","disabled",we],disableRipple:[2,"disableRipple","disableRipple",we],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ar(e)],checked:[2,"checked","checked",we],hideIcon:[2,"hideIcon","hideIcon",we],disabledInteractive:[2,"disabledInteractive","disabledInteractive",we]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Qe([{provide:aD,useExisting:tn(()=>t),multi:!0},{provide:Du,useExisting:t,multi:!0}]),ut],ngContentSelectors:gL,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,r){if(i&1&&(De(),g(0,"div",1)(1,"button",2,0),U("click",function(){return r._handleClick()}),ne(3,"div",3)(4,"span",4),g(5,"span",5)(6,"span",6)(7,"span",7),ne(8,"span",8),v(),g(9,"span",9),ne(10,"span",10),v(),ae(11,vL,5,0,"span",11),v()()(),g(12,"label",12),U("click",function(s){return s.stopPropagation()}),N(13),v()()),i&2){let o=Tr(2);ve("labelPosition",r.labelPosition),C(),I("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),ve("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),ge("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),C(9),ve("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),C(),ce(r.hideIcon?-1:11),C(),ve("for",r.buttonId),ge("id",r._labelId)}},dependencies:[eD,Tx],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return t})();var Zu=class t{STORAGE_KEY="accessibility-settings";MIN_FONT_SIZE=80;MAX_FONT_SIZE=150;FONT_STEP=10;fontSize=Y(100);highContrast=Y(!1);linkHighlight=Y(!1);focusIndicator=Y(!1);enhancedReadability=Y(!1);toolbarOpen=Y(!1);constructor(){this.loadSettings(),kt(()=>{this.applyFontSize(this.fontSize())}),kt(()=>{this.applyHighContrast(this.highContrast())}),kt(()=>{this.applyLinkHighlight(this.linkHighlight())}),kt(()=>{this.applyFocusIndicator(this.focusIndicator())}),kt(()=>{this.applyEnhancedReadability(this.enhancedReadability())})}increaseFontSize(){let n=this.fontSize();n<this.MAX_FONT_SIZE&&(this.fontSize.set(n+this.FONT_STEP),this.saveSettings())}decreaseFontSize(){let n=this.fontSize();n>this.MIN_FONT_SIZE&&(this.fontSize.set(n-this.FONT_STEP),this.saveSettings())}resetFontSize(){this.fontSize.set(100),this.saveSettings()}toggleHighContrast(){this.highContrast.update(n=>!n),this.saveSettings()}toggleLinkHighlight(){this.linkHighlight.update(n=>!n),this.saveSettings()}toggleEnhancedReadability(){this.enhancedReadability.update(n=>!n),this.saveSettings()}toggleToolbar(){this.toolbarOpen.update(n=>!n)}resetAllSettings(){this.fontSize.set(100),this.highContrast.set(!1),this.linkHighlight.set(!1),this.focusIndicator.set(!1),this.enhancedReadability.set(!1),this.saveSettings()}applyFontSize(n){document.documentElement.style.setProperty("--accessibility-font-size",`${n}`)}applyHighContrast(n){n?document.body.classList.add("high-contrast"):document.body.classList.remove("high-contrast")}applyLinkHighlight(n){n?document.body.classList.add("highlight-links"):document.body.classList.remove("highlight-links")}applyFocusIndicator(n){n?document.body.classList.add("focus-indicator"):document.body.classList.remove("focus-indicator")}applyEnhancedReadability(n){n?(document.body.classList.add("increased-spacing"),document.body.classList.add("readable-font")):(document.body.classList.remove("increased-spacing"),document.body.classList.remove("readable-font"))}saveSettings(){let n={fontSize:this.fontSize(),highContrast:this.highContrast(),linkHighlight:this.linkHighlight(),focusIndicator:this.focusIndicator(),enhancedReadability:this.enhancedReadability()};localStorage.setItem(this.STORAGE_KEY,JSON.stringify(n))}loadSettings(){let n=localStorage.getItem(this.STORAGE_KEY);if(n)try{let e=JSON.parse(n);this.fontSize.set(e.fontSize),this.highContrast.set(e.highContrast),this.linkHighlight.set(e.linkHighlight),this.focusIndicator.set(e.focusIndicator),this.enhancedReadability.set(e.enhancedReadability)}catch(e){console.error("Failed to load accessibility settings",e)}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ku=class t{accessibilityService=u(Zu);navService=u(Dt);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-accessibility-toolbar"]],decls:67,vars:14,consts:[["mat-fab","","matTooltip","Accessibility Options","matTooltipPosition","left","aria-label","Toggle accessibility toolbar",1,"accessibility-toggle-btn",3,"click"],[1,"accessibility-toolbar"],[1,"toolbar-header"],[1,"header-content"],["mat-icon-button","","aria-label","Close accessibility toolbar",3,"click"],[1,"toolbar-content"],[1,"control-section"],[1,"section-title"],[1,"font-size-controls"],["mat-icon-button","","matTooltip","Decrease text size","aria-label","Decrease text size",3,"click","disabled"],[1,"font-size-value"],["mat-icon-button","","matTooltip","Increase text size","aria-label","Increase text size",3,"click","disabled"],["mat-stroked-button","","matTooltip","Reset to default","aria-label","Reset text size",1,"reset-btn",3,"click"],[1,"toggle-options"],[1,"toggle-item"],[1,"toggle-label"],["color","primary","aria-label","Toggle high contrast mode",3,"change","checked"],["color","primary","aria-label","Toggle increased text spacing and readable font",3,"change","checked"],["color","primary","aria-label","Toggle link highlighting",3,"change","checked"],["mat-stroked-button","","aria-label","Reset all accessibility settings",1,"reset-all-btn",3,"click"],[1,"toolbar-overlay",3,"click"]],template:function(e,i){e&1&&(g(0,"button",0),U("click",function(){return i.accessibilityService.toggleToolbar()}),g(1,"mat-icon"),D(2,"accessibility_new"),v()(),g(3,"div",1)(4,"div",2)(5,"div",3)(6,"mat-icon"),D(7,"accessibility_new"),v(),g(8,"h3"),D(9,"Accessibility"),v()(),g(10,"button",4),U("click",function(){return i.accessibilityService.toggleToolbar()}),g(11,"mat-icon"),D(12,"close"),v()()(),g(13,"div",5)(14,"div",6)(15,"div",7)(16,"mat-icon"),D(17,"text_fields"),v(),g(18,"span"),D(19,"Text Size"),v()(),g(20,"div",8)(21,"button",9),U("click",function(){return i.accessibilityService.decreaseFontSize()}),g(22,"mat-icon"),D(23,"remove"),v()(),g(24,"span",10),D(25),v(),g(26,"button",11),U("click",function(){return i.accessibilityService.increaseFontSize()}),g(27,"mat-icon"),D(28,"add"),v()(),g(29,"button",12),U("click",function(){return i.accessibilityService.resetFontSize()}),D(30," Reset "),v()()(),ne(31,"mat-divider"),g(32,"div",6)(33,"div",7)(34,"mat-icon"),D(35,"tune"),v(),g(36,"span"),D(37,"Display Options"),v()(),g(38,"div",13)(39,"div",14)(40,"div",15)(41,"mat-icon"),D(42,"contrast"),v(),g(43,"span"),D(44,"High Contrast"),v()(),g(45,"mat-slide-toggle",16),U("change",function(){return i.accessibilityService.toggleHighContrast()}),v()(),g(46,"div",14)(47,"div",15)(48,"mat-icon"),D(49,"auto_stories"),v(),g(50,"span"),D(51,"Enhanced Readability"),v()(),g(52,"mat-slide-toggle",17),U("change",function(){return i.accessibilityService.toggleEnhancedReadability()}),v()(),g(53,"div",14)(54,"div",15)(55,"mat-icon"),D(56,"link"),v(),g(57,"span"),D(58,"Highlight Links"),v()(),g(59,"mat-slide-toggle",18),U("change",function(){return i.accessibilityService.toggleLinkHighlight()}),v()()()(),ne(60,"mat-divider"),g(61,"div",6)(62,"button",19),U("click",function(){return i.accessibilityService.resetAllSettings()}),g(63,"mat-icon"),D(64,"restore"),v(),D(65," Reset All Settings "),v()()()(),g(66,"div",20),U("click",function(){return i.accessibilityService.toggleToolbar()}),v()),e&2&&(I("toolbar-open",i.accessibilityService.toolbarOpen()),C(3),I("open",i.accessibilityService.toolbarOpen())("mobile",i.navService.isMobile()),C(18),ve("disabled",i.accessibilityService.fontSize()<=80),C(4),At("",i.accessibilityService.fontSize(),"%"),C(),ve("disabled",i.accessibilityService.fontSize()>=150),C(19),ve("checked",i.accessibilityService.highContrast()),C(7),ve("checked",i.accessibilityService.enhancedReadability()),C(7),ve("checked",i.accessibilityService.linkHighlight()),C(7),I("visible",i.accessibilityService.toolbarOpen()))},dependencies:[ss,bi,px,fn,Tv,MD,kx],styles:[".accessibility-toggle-btn[_ngcontent-%COMP%]{position:fixed;bottom:2rem;right:2rem;z-index:1001;background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple))!important;color:#fff!important;box-shadow:0 4px 20px var(--shadow);transition:all .3s ease}.accessibility-toggle-btn[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 6px 30px var(--shadow)}.accessibility-toggle-btn.toolbar-open[_ngcontent-%COMP%]{transform:rotate(180deg)}.accessibility-toolbar[_ngcontent-%COMP%]{position:fixed;top:0;right:-400px;width:380px;height:100vh;background:var(--bg-secondary);border-left:1px solid var(--border-color);box-shadow:-4px 0 20px var(--shadow);z-index:1002;transition:right .3s ease;overflow-y:auto;overflow-x:hidden}.accessibility-toolbar.open[_ngcontent-%COMP%]{right:0}.accessibility-toolbar.mobile[_ngcontent-%COMP%]{width:100%;right:-100%}.accessibility-toolbar.mobile.open[_ngcontent-%COMP%]{right:0}.toolbar-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1.5rem;background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));color:#fff;position:sticky;top:0;z-index:10}.header-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.header-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;font-weight:600}.toolbar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}.toolbar-content[_ngcontent-%COMP%]{padding:1rem}.control-section[_ngcontent-%COMP%]{padding:1rem 0}.section-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-weight:600;font-size:.9375rem;color:var(--text-primary);margin-bottom:1rem}.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--accent-primary);font-size:20px;width:20px;height:20px}.font-size-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.5rem;background:var(--bg-tertiary);border-radius:8px}.font-size-value[_ngcontent-%COMP%]{min-width:50px;text-align:center;font-weight:600;color:var(--text-primary)}.font-size-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--text-primary)}.reset-btn[_ngcontent-%COMP%]{margin-left:auto;font-size:.875rem;color:var(--accent-primary);border-color:var(--accent-primary)}.scroll-controls[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.scroll-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;width:100%;color:var(--text-primary);border-color:var(--border-color)}.scroll-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--accent-primary)}.scroll-btn[_ngcontent-%COMP%]:hover{background-color:var(--bg-tertiary);border-color:var(--accent-primary)}.toggle-options[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.toggle-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.75rem;background:var(--bg-tertiary);border-radius:8px;transition:background-color .3s ease}.toggle-item[_ngcontent-%COMP%]:hover{background:var(--bg-primary)}.toggle-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;color:var(--text-primary);font-size:.9375rem}.toggle-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--accent-primary);font-size:20px;width:20px;height:20px}.reset-all-btn[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;gap:.5rem;justify-content:center;color:var(--text-secondary);border-color:var(--border-color)}.reset-all-btn[_ngcontent-%COMP%]:hover{background-color:var(--bg-tertiary);color:var(--accent-primary);border-color:var(--accent-primary)}.reset-all-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--accent-primary)}.toolbar-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;z-index:1000;opacity:0;pointer-events:none;transition:opacity .3s ease}.toolbar-overlay.visible[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}mat-divider[_ngcontent-%COMP%]{margin:1rem 0}.accessibility-toolbar[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.accessibility-toolbar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--bg-primary)}.accessibility-toolbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--accent-primary);border-radius:4px}.accessibility-toolbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--accent-purple)}"]})};var ef=["*"],yL=["content"],bL=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],wL=["mat-drawer","mat-drawer-content","*"];function CL(t,n){if(t&1){let e=Lt();g(0,"div",1),U("click",function(){Mt(e);let r=X();return Tt(r._onBackdropClicked())}),v()}if(t&2){let e=X();I("mat-drawer-shown",e._isShowingBackdrop())}}function EL(t,n){t&1&&(g(0,"mat-drawer-content"),N(1,2),v())}var DL=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],xL=["mat-sidenav","mat-sidenav-content","*"];function SL(t,n){if(t&1){let e=Lt();g(0,"div",1),U("click",function(){Mt(e);let r=X();return Tt(r._onBackdropClicked())}),v()}if(t&2){let e=X();I("mat-drawer-shown",e._isShowingBackdrop())}}function IL(t,n){t&1&&(g(0,"mat-sidenav-content"),N(1,2),v())}var ML=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var TL=new b("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Rv=new b("MAT_DRAWER_CONTAINER"),Xu=(()=>{class t extends Yr{_platform=u(me);_changeDetectorRef=u(Xe);_container=u(Av);constructor(){let e=u(F),i=u(Gi),r=u(T);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Gn("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),I("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Qe([{provide:Yr,useExisting:t}]),Fe],ngContentSelectors:ef,decls:1,vars:0,template:function(i,r){i&1&&(De(),N(0))},encapsulation:2,changeDetection:0})}return t})(),kv=(()=>{class t{_elementRef=u(F);_focusTrapFactory=u(Qg);_focusMonitor=u(On);_platform=u(me);_ngZone=u(T);_renderer=u(Ve);_interactivityChecker=u(cu);_doc=u(P);_container=u(Rv,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Pe(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Pe(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Pe(e))}_opened=Y(!1);_openedVia=null;_animationStarted=new M;_animationEnd=new M;openedChange=new ue(!0);_openedStream=this.openedChange.pipe(Ee(e=>e),j(()=>{}));openedStart=this._animationStarted.pipe(Ee(()=>this.opened),Bc(void 0));_closedStream=this.openedChange.pipe(Ee(e=>!e),j(()=>{}));closedStart=this._animationStarted.pipe(Ee(()=>!this.opened),Bc(void 0));_destroyed=new M;onPositionChanged=new ue;_content;_modeChanged=new M;_injector=u(re);_changeDetectorRef=u(Xe);constructor(){this.openedChange.pipe(Ce(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!lu(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ft(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(rt(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&pt(yL,5),i&2){let o;Q(o=Z())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(ge("align",null)("tabIndex",r.mode!=="side"?"-1":null),Gn("visibility",!r._container&&!r.opened?"hidden":null),I("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ef,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(De(),g(0,"div",1,0),N(2),v())},dependencies:[Yr],encapsulation:2,changeDetection:0})}return t})(),Av=(()=>{class t{_dir=u(Nn,{optional:!0});_element=u(F);_ngZone=u(T);_changeDetectorRef=u(Xe);_animationDisabled=nt();_transitionsEnabled=!1;_allDrawers;_drawers=new Er;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Pe(e)}_autosize=u(TL);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Pe(e)}_backdropOverride=null;backdropClick=new ue;_start=null;_end=null;_left=null;_right=null;_destroyed=new M;_doCheckSubject=new M;_contentMargins={left:null,right:null};_contentMarginChanges=new M;get scrollable(){return this._userContent||this._content}_injector=u(re);constructor(){let e=u(me),i=u(ds);this._dir?.change.pipe(Ce(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Ce(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(mn(this._allDrawers),Ce(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(mn(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(rr(10),Ce(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Ce(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Ce(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Ce(this._drawers.changes)).subscribe(()=>{ft({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Ce(Qn(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Qt(o,Xu,5)(o,kv,5),i&2){let s;Q(s=Z())&&(r._content=s.first),Q(s=Z())&&(r._allDrawers=s)}},viewQuery:function(i,r){if(i&1&&pt(Xu,5),i&2){let o;Q(o=Z())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&I("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Qe([{provide:Rv,useExisting:t}])],ngContentSelectors:wL,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(De(bL),ae(0,CL,1,2,"div",0),N(1),N(2,1),ae(3,EL,2,0,"mat-drawer-content")),i&2&&(ce(r.hasBackdrop?0:-1),C(3),ce(r._content?-1:3))},dependencies:[Xu],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ju=(()=>{class t extends Xu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Qe([{provide:Yr,useExisting:t}]),Fe],ngContentSelectors:ef,decls:1,vars:0,template:function(i,r){i&1&&(De(),N(0))},encapsulation:2,changeDetection:0})}return t})(),Ov=(()=>{class t extends kv{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Pe(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Kt(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Kt(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(ge("tabIndex",r.mode!=="side"?"-1":null)("align",null),Gn("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),I("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Qe([{provide:kv,useExisting:t}]),Fe],ngContentSelectors:ef,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(De(),g(0,"div",1,0),N(2),v())},dependencies:[Yr],encapsulation:2,changeDetection:0})}return t})(),Ax=(()=>{class t extends Av{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Qt(o,Ju,5)(o,Ov,5),i&2){let s;Q(s=Z())&&(r._content=s.first),Q(s=Z())&&(r._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&I("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Qe([{provide:Rv,useExisting:t},{provide:Av,useExisting:t}]),Fe],ngContentSelectors:xL,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(De(DL),ae(0,SL,1,2,"div",0),N(1),N(2,1),ae(3,IL,2,0,"mat-sidenav-content")),i&2&&(ce(r.hasBackdrop?0:-1),C(3),ce(r._content?-1:3))},dependencies:[Ju],styles:[ML],encapsulation:2,changeDetection:0})}return t})();var tf=class t{isDarkMode=Y(!0);constructor(){let n=localStorage.getItem("theme");if(n)this.isDarkMode.set(n==="dark");else{let e=window.matchMedia("(prefers-color-scheme: dark)").matches;this.isDarkMode.set(e)}kt(()=>{this.applyTheme(this.isDarkMode())})}toggleTheme(){this.isDarkMode.update(n=>!n)}applyTheme(n){let e=n?"dark":"light";document.body.setAttribute("data-theme",e),document.body.style.colorScheme=e,localStorage.setItem("theme",e)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var kL=t=>({mobile:t}),Rx=t=>({active:t}),Ox=(t,n)=>n.id;function AL(t,n){if(t&1){let e=Lt();g(0,"a",19),U("click",function(){let r=Mt(e).$implicit,o=X();return Tt(o.scrollToSection(r.id))}),D(1),v()}if(t&2){let e=n.$implicit,i=X();ve("ngClass",oa(2,Rx,i.navService.activeSection()===e.id)),C(),At(" ",e.label," ")}}function RL(t,n){if(t&1){let e=Lt();g(0,"button",21),U("click",function(){let r=Mt(e).$implicit,o=X(2);return Tt(o.scrollToSection(r.id))}),D(1),v()}if(t&2){let e=n.$implicit,i=X(2);ve("ngClass",oa(2,Rx,i.navService.activeSection()===e.id)),C(),At(" ",e.label," ")}}function OL(t,n){if(t&1&&(g(0,"div",9),ht(1,RL,2,4,"button",20,Ox),v()),t&2){let e=X();C(),mt(e.sections)}}function NL(t,n){if(t&1){let e=Lt();g(0,"button",4),U("click",function(){Mt(e);let r=X();return Tt(r.navService.toggleMobileMenu())}),g(1,"mat-icon"),D(2,"menu"),v()()}}var us=class t{themeService=u(tf);navService=u(Dt);sections=[{label:"Home",id:"home"},{label:"About",id:"about"},{label:"Skills",id:"skills"},{label:"Projects",id:"projects"},{label:"References",id:"references"},{label:"Contact",id:"contact"}];ngOnInit(){let n=window.location.hash.substring(1);n&&(this.navService.setActiveSection(n),setTimeout(()=>this.scrollToSection(n),100))}ngAfterViewInit(){this.setupIntersectionObserver()}onWindowScroll(){}scrollToSection(n){let e=document.getElementById(n);e&&(this.navService.closeMobileMenu(),setTimeout(()=>{let i=document.querySelector(".navbar"),r=i?i.offsetHeight:64,o=document.querySelector("mat-sidenav-content");if(o){let s=e.offsetTop-r;o.scrollTo({top:s,behavior:"smooth"})}else{let s=e.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:s-r,behavior:"smooth"})}this.navService.setActiveSection(n),history.replaceState(null,"",`#${n}`)},300))}toggleTheme(){this.themeService.toggleTheme()}onSidenavChange(n){n||this.navService.closeMobileMenu()}setupIntersectionObserver(){let n={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},e=new IntersectionObserver(i=>{i.forEach(r=>{if(r.isIntersecting){let o=r.target.id;this.navService.setActiveSection(o),window.location.hash!==`#${o}`&&history.replaceState(null,"",`#${o}`)}})},n);this.sections.forEach(i=>{let r=document.getElementById(i.id);r&&e.observe(r)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-root"]],hostBindings:function(e,i){e&1&&U("scroll",function(){return i.onWindowScroll()},Am)},decls:38,vars:8,consts:[["sidenav",""],[1,"sidenav-container"],["mode","over",1,"mobile-sidenav",3,"openedChange","opened"],[1,"sidenav-header"],["mat-icon-button","",3,"click"],["mat-list-item","",3,"ngClass"],[1,"navbar",3,"ngClass"],[1,"nav-container"],[1,"nav-brand"],[1,"nav-links"],[1,"nav-actions"],["mat-icon-button",""],[1,"main-content"],["id","home",1,"section"],["id","about",1,"section"],["id","skills",1,"section"],["id","projects",1,"section"],["id","references",1,"section"],["id","contact",1,"section"],["mat-list-item","",3,"click","ngClass"],["mat-button","",3,"ngClass"],["mat-button","",3,"click","ngClass"]],template:function(e,i){e&1&&(g(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0),U("openedChange",function(o){return i.onSidenavChange(o)}),g(3,"div",3)(4,"h2"),D(5,"Menu"),v(),g(6,"button",4),U("click",function(){return i.navService.closeMobileMenu()}),g(7,"mat-icon"),D(8,"close"),v()()(),g(9,"mat-nav-list"),ht(10,AL,2,4,"a",5,Ox),v()(),g(12,"mat-sidenav-content")(13,"nav",6)(14,"div",7)(15,"div",8)(16,"h1"),D(17,"Portfolio"),v()(),ae(18,OL,3,0,"div",9),g(19,"div",10)(20,"button",4),U("click",function(){return i.toggleTheme()}),g(21,"mat-icon"),D(22),v()(),ae(23,NL,3,0,"button",11),v()()(),g(24,"main",12)(25,"section",13),ne(26,"app-title-page"),v(),g(27,"section",14),ne(28,"app-about-me"),v(),g(29,"section",15),ne(30,"app-skills"),v(),g(31,"section",16),ne(32,"app-projects"),v(),g(33,"section",17),ne(34,"app-references"),v(),g(35,"section",18),ne(36,"app-contact"),v()()()(),ne(37,"app-accessibility-toolbar")),e&2&&(C(),ve("opened",i.navService.mobileMenuOpen()),C(9),mt(i.sections),C(3),ve("ngClass",oa(6,kL,i.navService.isMobile())),C(5),ce(i.navService.isMobile()?-1:18),C(2),ge("aria-label",i.themeService.isDarkMode()?"Switch to light mode":"Switch to dark mode"),C(2),J(i.themeService.isDarkMode()?"light_mode":"dark_mode"),C(),ce(i.navService.isMobile()?23:-1))},dependencies:[AD,kD,Tu,Au,Nu,ju,Vu,Bu,Ku,ss,lp,bi,fn,Ov,Ax,Ju],styles:['.sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100%}.mobile-sidenav[_ngcontent-%COMP%]{width:280px;background-color:var(--bg-secondary)}.sidenav-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem;border-bottom:1px solid var(--border-color)}.sidenav-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:var(--text-primary)}.navbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:100;background:var(--bg-secondary);border-bottom:1px solid var(--border-color);box-shadow:0 2px 10px var(--shadow);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);transition:all .3s ease}.nav-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 2rem;height:64px;max-width:1400px;margin:0 auto}.navbar.mobile[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]{height:56px;padding:0 1rem}.nav-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem;font-weight:600;color:var(--accent-primary);background:linear-gradient(135deg,var(--accent-primary),var(--accent-purple));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.nav-links[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center}.nav-links[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--text-secondary);font-weight:500;transition:all .3s ease;position:relative}.nav-links[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .nav-links[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--accent-primary)}.nav-links[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:50%;transform:translate(-50%);width:30px;height:3px;background:linear-gradient(90deg,var(--accent-primary),var(--accent-purple));border-radius:2px}.nav-actions[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center}.nav-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--text-primary)}.main-content[_ngcontent-%COMP%], .section[_ngcontent-%COMP%]{width:100%}mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-secondary);transition:all .3s ease}mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--bg-tertiary);color:var(--accent-primary)}mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:var(--bg-tertiary);color:var(--accent-primary);border-left:4px solid var(--accent-primary)}']})};var Nx=()=>{let t=[u(rs),u(ls),u(ts),u(as),u(cs),u(os)];return ir(t.map(n=>n.data$.pipe(Ee(e=>e!==void 0&&Object.keys(e).length>0),rt(1)))).pipe(j(()=>!0),en(()=>B(!0)))};var Px=[{path:"",component:us,resolve:{initialData:Nx}}];var Fx={providers:[Mh(),TE(),dg(Px,ug({scrollPositionRestoration:"enabled",anchorScrolling:"enabled"}))]};yp(us,Fx).catch(t=>console.error(t));
