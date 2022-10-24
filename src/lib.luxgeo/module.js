(() => {
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $da71ce4e481f05cb$exports = {};
var $7a289e9ed6f10e5e$exports = {};

$parcel$export($7a289e9ed6f10e5e$exports, "MapService", () => $7a289e9ed6f10e5e$export$d95683df6793e68e);
$parcel$export($7a289e9ed6f10e5e$exports, "mapService", () => $7a289e9ed6f10e5e$export$27306c9dc6971a13);
/**
 * @module ol/events/Event
 */ /**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * See https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface.
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link module:ol/events/Target~Target}.
 */ class $f3a6f6cab00ac278$var$BaseEvent {
    /**
   * @param {string} type Type.
   */ constructor(type){
        /**
     * @type {boolean}
     */ this.propagationStopped;
        /**
     * @type {boolean}
     */ this.defaultPrevented;
        /**
     * The event type.
     * @type {string}
     * @api
     */ this.type = type;
        /**
     * The event target.
     * @type {Object}
     * @api
     */ this.target = null;
    }
    /**
   * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
   * will be fired.
   * @api
   */ preventDefault() {
        this.defaultPrevented = true;
    }
    /**
   * Stop event propagation.
   * @api
   */ stopPropagation() {
        this.propagationStopped = true;
    }
}
function $f3a6f6cab00ac278$export$51134cce184326b9(evt) {
    evt.stopPropagation();
}
function $f3a6f6cab00ac278$export$fa3b29edae795ef4(evt) {
    evt.preventDefault();
}
var $f3a6f6cab00ac278$export$2e2bcd8739ae039 = $f3a6f6cab00ac278$var$BaseEvent;


var /**
 * @module ol/ObjectEventType
 */ /**
 * @enum {string}
 */ $2e111f792ae6efbb$export$2e2bcd8739ae039 /**
 * @typedef {'propertychange'} Types
 */  = {
    /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */ PROPERTYCHANGE: "propertychange"
};


/**
 * @module ol/Disposable
 */ /**
 * @classdesc
 * Objects that need to clean up after themselves.
 */ class $82180f36890be34f$var$Disposable {
    constructor(){
        /**
     * The object has already been disposed.
     * @type {boolean}
     * @protected
     */ this.disposed = false;
    }
    /**
   * Clean up.
   */ dispose() {
        if (!this.disposed) {
            this.disposed = true;
            this.disposeInternal();
        }
    }
    /**
   * Extension point for disposable objects.
   * @protected
   */ disposeInternal() {}
}
var $82180f36890be34f$export$2e2bcd8739ae039 = $82180f36890be34f$var$Disposable;



function $eea510364582e5fa$export$2e0ae67339d5f1ac(haystack, needle, comparator) {
    let mid, cmp;
    comparator = comparator || $eea510364582e5fa$export$4e734a3b32fb971b;
    let low = 0;
    let high = haystack.length;
    let found = false;
    while(low < high){
        /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */ mid = low + (high - low >> 1);
        cmp = +comparator(haystack[mid], needle);
        if (cmp < 0.0) /* Too low. */ low = mid + 1;
        else {
            /* Key found or too high */ high = mid;
            found = !cmp;
        }
    }
    /* Key not found. */ return found ? low : ~low;
}
function $eea510364582e5fa$export$4e734a3b32fb971b(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
function $eea510364582e5fa$export$8a3786cc03fdb777(arr, target, direction) {
    const n = arr.length;
    if (arr[0] <= target) return 0;
    else if (target <= arr[n - 1]) return n - 1;
    else {
        let i;
        if (direction > 0) for(i = 1; i < n; ++i){
            if (arr[i] < target) return i - 1;
        }
        else if (direction < 0) for(i = 1; i < n; ++i){
            if (arr[i] <= target) return i;
        }
        else for(i = 1; i < n; ++i){
            if (arr[i] == target) return i;
            else if (arr[i] < target) {
                if (typeof direction === "function") {
                    if (direction(target, arr[i - 1], arr[i]) > 0) return i - 1;
                    else return i;
                } else if (arr[i - 1] - target < target - arr[i]) return i - 1;
                else return i;
            }
        }
        return n - 1;
    }
}
function $eea510364582e5fa$export$292cfa960964f0e0(arr, begin, end) {
    while(begin < end){
        const tmp = arr[begin];
        arr[begin] = arr[end];
        arr[end] = tmp;
        ++begin;
        --end;
    }
}
function $eea510364582e5fa$export$8b58be045bf06082(arr, data) {
    const extension = Array.isArray(data) ? data : [
        data
    ];
    const length = extension.length;
    for(let i = 0; i < length; i++)arr[arr.length] = extension[i];
}
function $eea510364582e5fa$export$cd7f480d6b8286c3(arr, obj) {
    const i = arr.indexOf(obj);
    const found = i > -1;
    if (found) arr.splice(i, 1);
    return found;
}
function $eea510364582e5fa$export$e9bab7fafb253603(arr1, arr2) {
    const len1 = arr1.length;
    if (len1 !== arr2.length) return false;
    for(let i = 0; i < len1; i++){
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
function $eea510364582e5fa$export$c7d3d1f96a700512(arr, compareFnc) {
    const length = arr.length;
    const tmp = Array(arr.length);
    let i;
    for(i = 0; i < length; i++)tmp[i] = {
        index: i,
        value: arr[i]
    };
    tmp.sort(function(a, b) {
        return compareFnc(a.value, b.value) || a.index - b.index;
    });
    for(i = 0; i < arr.length; i++)arr[i] = tmp[i].value;
}
function $eea510364582e5fa$export$efa610630f9e181(arr, func, strict) {
    const compare = func || $eea510364582e5fa$export$4e734a3b32fb971b;
    return arr.every(function(currentVal, index) {
        if (index === 0) return true;
        const res = compare(arr[index - 1], currentVal);
        return !(res > 0 || strict && res === 0);
    });
}


function $f2508d0c199eb098$export$22e23a2304399231() {
    return true;
}
function $f2508d0c199eb098$export$8f11cee4bdc7e668() {
    return false;
}
function $f2508d0c199eb098$export$1cd1943b3a73bbe8() {}
function $f2508d0c199eb098$export$ff83df6f9971435f(fn) {
    let called = false;
    /** @type {ReturnType} */ let lastResult;
    /** @type {Array<any>} */ let lastArgs;
    let lastThis;
    return function() {
        const nextArgs = Array.prototype.slice.call(arguments);
        if (!called || this !== lastThis || !(0, $eea510364582e5fa$export$e9bab7fafb253603)(nextArgs, lastArgs)) {
            called = true;
            lastThis = this;
            lastArgs = nextArgs;
            lastResult = fn.apply(this, arguments);
        }
        return lastResult;
    };
}
function $f2508d0c199eb098$export$4dbaaf6c79705e6c(getter) {
    function promiseGetter() {
        let value;
        try {
            value = getter();
        } catch (err) {
            return Promise.reject(err);
        }
        if (value instanceof Promise) return value;
        return Promise.resolve(value);
    }
    return promiseGetter();
}


function $9ffc9b9068a038e2$export$42ffd38884aecdac(object) {
    for(const property in object)delete object[property];
}
function $9ffc9b9068a038e2$export$dd1bc94b04021eeb(object) {
    let property;
    for(property in object)return false;
    return !property;
}


/**
 * @typedef {EventTarget|Target} EventTargetLike
 */ /**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * See https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget.
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 */ class $8db040e14d9e4db7$var$Target extends (0, $82180f36890be34f$export$2e2bcd8739ae039) {
    /**
   * @param {*} [target] Default event target for dispatched events.
   */ constructor(target){
        super();
        /**
     * @private
     * @type {*}
     */ this.eventTarget_ = target;
        /**
     * @private
     * @type {Object<string, number>}
     */ this.pendingRemovals_ = null;
        /**
     * @private
     * @type {Object<string, number>}
     */ this.dispatching_ = null;
        /**
     * @private
     * @type {Object<string, Array<import("../events.js").Listener>>}
     */ this.listeners_ = null;
    }
    /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */ addEventListener(type, listener) {
        if (!type || !listener) return;
        const listeners = this.listeners_ || (this.listeners_ = {});
        const listenersForType = listeners[type] || (listeners[type] = []);
        if (!listenersForType.includes(listener)) listenersForType.push(listener);
    }
    /**
   * Dispatches an event and calls all listeners listening for events
   * of this type. The event parameter can either be a string or an
   * Object with a `type` property.
   *
   * @param {import("./Event.js").default|string} event Event object.
   * @return {boolean|undefined} `false` if anyone called preventDefault on the
   *     event object or if any of the listeners returned false.
   * @api
   */ dispatchEvent(event) {
        const isString = typeof event === "string";
        const type = isString ? event : event.type;
        const listeners = this.listeners_ && this.listeners_[type];
        if (!listeners) return;
        const evt = isString ? new (0, $f3a6f6cab00ac278$export$2e2bcd8739ae039)(event) : event;
        if (!evt.target) evt.target = this.eventTarget_ || this;
        const dispatching = this.dispatching_ || (this.dispatching_ = {});
        const pendingRemovals = this.pendingRemovals_ || (this.pendingRemovals_ = {});
        if (!(type in dispatching)) {
            dispatching[type] = 0;
            pendingRemovals[type] = 0;
        }
        ++dispatching[type];
        let propagate;
        for(let i = 0, ii = listeners.length; i < ii; ++i){
            if ("handleEvent" in listeners[i]) propagate = /** @type {import("../events.js").ListenerObject} */ listeners[i].handleEvent(evt);
            else propagate = /** @type {import("../events.js").ListenerFunction} */ listeners[i].call(this, evt);
            if (propagate === false || evt.propagationStopped) {
                propagate = false;
                break;
            }
        }
        if (--dispatching[type] === 0) {
            let pr = pendingRemovals[type];
            delete pendingRemovals[type];
            while(pr--)this.removeEventListener(type, (0, $f2508d0c199eb098$export$1cd1943b3a73bbe8));
            delete dispatching[type];
        }
        return propagate;
    }
    /**
   * Clean up.
   */ disposeInternal() {
        this.listeners_ && (0, $9ffc9b9068a038e2$export$42ffd38884aecdac)(this.listeners_);
    }
    /**
   * Get the listeners for a specified event type. Listeners are returned in the
   * order that they will be called in.
   *
   * @param {string} type Type.
   * @return {Array<import("../events.js").Listener>|undefined} Listeners.
   */ getListeners(type) {
        return this.listeners_ && this.listeners_[type] || undefined;
    }
    /**
   * @param {string} [type] Type. If not provided,
   *     `true` will be returned if this event target has any listeners.
   * @return {boolean} Has listeners.
   */ hasListener(type) {
        if (!this.listeners_) return false;
        return type ? type in this.listeners_ : Object.keys(this.listeners_).length > 0;
    }
    /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */ removeEventListener(type, listener) {
        const listeners = this.listeners_ && this.listeners_[type];
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index !== -1) {
                if (this.pendingRemovals_ && type in this.pendingRemovals_) {
                    // make listener a no-op, and remove later in #dispatchEvent()
                    listeners[index] = (0, $f2508d0c199eb098$export$1cd1943b3a73bbe8);
                    ++this.pendingRemovals_[type];
                } else {
                    listeners.splice(index, 1);
                    if (listeners.length === 0) delete this.listeners_[type];
                }
            }
        }
    }
}
var $8db040e14d9e4db7$export$2e2bcd8739ae039 = $8db040e14d9e4db7$var$Target;


var /**
 * @module ol/events/EventType
 */ /**
 * @enum {string}
 * @const
 */ $2c1b2071ddd628bd$export$2e2bcd8739ae039 = {
    /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event module:ol/events/Event~BaseEvent#change
   * @api
   */ CHANGE: "change",
    /**
   * Generic error event. Triggered when an error occurs.
   * @event module:ol/events/Event~BaseEvent#error
   * @api
   */ ERROR: "error",
    BLUR: "blur",
    CLEAR: "clear",
    CONTEXTMENU: "contextmenu",
    CLICK: "click",
    DBLCLICK: "dblclick",
    DRAGENTER: "dragenter",
    DRAGOVER: "dragover",
    DROP: "drop",
    FOCUS: "focus",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    LOAD: "load",
    RESIZE: "resize",
    TOUCHMOVE: "touchmove",
    WHEEL: "wheel"
};



function $b5beb2fac6e98c10$export$63174c828edd6ff8(target, type, listener, thisArg, once) {
    if (thisArg && thisArg !== target) listener = listener.bind(thisArg);
    if (once) {
        const originalListener = listener;
        listener = function() {
            target.removeEventListener(type, listener);
            originalListener.apply(this, arguments);
        };
    }
    const eventsKey = {
        target: target,
        type: type,
        listener: listener
    };
    target.addEventListener(type, listener);
    return eventsKey;
}
function $b5beb2fac6e98c10$export$8d2a95bc11b44725(target, type, listener, thisArg) {
    return $b5beb2fac6e98c10$export$63174c828edd6ff8(target, type, listener, thisArg, true);
}
function $b5beb2fac6e98c10$export$b0a21c8b3c1c921(key) {
    if (key && key.target) {
        key.target.removeEventListener(key.type, key.listener);
        (0, $9ffc9b9068a038e2$export$42ffd38884aecdac)(key);
    }
}


/***
 * @template {string} Type
 * @template {Event|import("./events/Event.js").default} EventClass
 * @template Return
 * @typedef {(type: Type, listener: (event: EventClass) => ?) => Return} OnSignature
 */ /***
 * @template {string} Type
 * @template Return
 * @typedef {(type: Type[], listener: (event: Event|import("./events/Event").default) => ?) => Return extends void ? void : Return[]} CombinedOnSignature
 */ /**
 * @typedef {'change'|'error'} EventTypes
 */ /***
 * @template Return
 * @typedef {OnSignature<EventTypes, import("./events/Event.js").default, Return> & CombinedOnSignature<EventTypes, Return>} ObservableOnSignature
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link module:ol/Observable~Observable#changed}.
 *
 * @fires import("./events/Event.js").default
 * @api
 */ class $4f3f0e7d5fcd1b71$var$Observable extends (0, $8db040e14d9e4db7$export$2e2bcd8739ae039) {
    constructor(){
        super();
        this.on = this.onInternal;
        this.once = this.onceInternal;
        this.un = this.unInternal;
        /**
     * @private
     * @type {number}
     */ this.revision_ = 0;
    }
    /**
   * Increases the revision counter and dispatches a 'change' event.
   * @api
   */ changed() {
        ++this.revision_;
        this.dispatchEvent((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE);
    }
    /**
   * Get the version number for this object.  Each time the object is modified,
   * its version number will be incremented.
   * @return {number} Revision.
   * @api
   */ getRevision() {
        return this.revision_;
    }
    /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */ onInternal(type, listener) {
        if (Array.isArray(type)) {
            const len = type.length;
            const keys = new Array(len);
            for(let i = 0; i < len; ++i)keys[i] = (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(this, type[i], listener);
            return keys;
        } else return (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(this, type, listener);
    }
    /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */ onceInternal(type, listener) {
        let key;
        if (Array.isArray(type)) {
            const len = type.length;
            key = new Array(len);
            for(let i = 0; i < len; ++i)key[i] = (0, $b5beb2fac6e98c10$export$8d2a95bc11b44725)(this, type[i], listener);
        } else key = (0, $b5beb2fac6e98c10$export$8d2a95bc11b44725)(this, type, listener);
        /** @type {Object} */ listener.ol_key = key;
        return key;
    }
    /**
   * Unlisten for a certain type of event.
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @protected
   */ unInternal(type, listener) {
        const key = /** @type {Object} */ listener.ol_key;
        if (key) $4f3f0e7d5fcd1b71$export$b7ef3f8527533384(key);
        else if (Array.isArray(type)) for(let i = 0, ii = type.length; i < ii; ++i)this.removeEventListener(type[i], listener);
        else this.removeEventListener(type, listener);
    }
}
/**
 * Listen for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */ $4f3f0e7d5fcd1b71$var$Observable.prototype.on;
/**
 * Listen once for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */ $4f3f0e7d5fcd1b71$var$Observable.prototype.once;
/**
 * Unlisten for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @api
 */ $4f3f0e7d5fcd1b71$var$Observable.prototype.un;
function $4f3f0e7d5fcd1b71$export$b7ef3f8527533384(key) {
    if (Array.isArray(key)) for(let i = 0, ii = key.length; i < ii; ++i)(0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(key[i]);
    else (0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(key);
}
var $4f3f0e7d5fcd1b71$export$2e2bcd8739ae039 = $4f3f0e7d5fcd1b71$var$Observable;


function $386903518769f502$export$817eb92a8194bab0() {
    throw new Error("Unimplemented abstract method.");
}
/**
 * Counter for getUid.
 * @type {number}
 * @private
 */ let $386903518769f502$var$uidCounter_ = 0;
function $386903518769f502$export$5e82334337e0f204(obj) {
    return obj.ol_uid || (obj.ol_uid = String(++$386903518769f502$var$uidCounter_));
}
const $386903518769f502$export$a4ad2735b021c132 = "7.1.0";



class $2fa1993cbde1d34b$export$cf395d7c4a2d5a17 extends (0, $f3a6f6cab00ac278$export$2e2bcd8739ae039) {
    /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */ constructor(type, key, oldValue){
        super(type);
        /**
     * The name of the property whose value is changing.
     * @type {string}
     * @api
     */ this.key = key;
        /**
     * The old value. To get the new value use `e.target.get(e.key)` where
     * `e` is the event object.
     * @type {*}
     * @api
     */ this.oldValue = oldValue;
    }
}
/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *    import("./Observable").OnSignature<import("./ObjectEventType").Types, ObjectEvent, Return> &
 *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types, Return>} ObjectOnSignature
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link module:ol/Observable~Observable} with observable
 * properties, where each property is observable as well as the object as a
 * whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link module:ol/Map~Map} has a `target` property, accessed with
 * `getTarget()` and changed with `setTarget()`. Not all properties are however
 * settable. There are also general-purpose accessors `get()` and `set()`. For
 * example, `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link module:ol/View~View} has a
 * `center` property, so `view.on('change:center', function(evt) {...});` would
 * call the function whenever the value of the center property changes. Within
 * the function, `evt.target` would be the view, so `evt.target.getCenter()`
 * would return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link module:ol/Object~BaseObject#getProperties}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @fires ObjectEvent
 * @api
 */ class $2fa1993cbde1d34b$var$BaseObject extends (0, $4f3f0e7d5fcd1b71$export$2e2bcd8739ae039) {
    /**
   * @param {Object<string, *>} [values] An object with key-value pairs.
   */ constructor(values){
        super();
        /***
     * @type {ObjectOnSignature<import("./events").EventsKey>}
     */ this.on;
        /***
     * @type {ObjectOnSignature<import("./events").EventsKey>}
     */ this.once;
        /***
     * @type {ObjectOnSignature<void>}
     */ this.un;
        // Call {@link module:ol/util.getUid} to ensure that the order of objects' ids is
        // the same as the order in which they were created.  This also helps to
        // ensure that object properties are always added in the same order, which
        // helps many JavaScript engines generate faster code.
        (0, $386903518769f502$export$5e82334337e0f204)(this);
        /**
     * @private
     * @type {Object<string, *>}
     */ this.values_ = null;
        if (values !== undefined) this.setProperties(values);
    }
    /**
   * Gets a value.
   * @param {string} key Key name.
   * @return {*} Value.
   * @api
   */ get(key) {
        let value;
        if (this.values_ && this.values_.hasOwnProperty(key)) value = this.values_[key];
        return value;
    }
    /**
   * Get a list of object property names.
   * @return {Array<string>} List of property names.
   * @api
   */ getKeys() {
        return this.values_ && Object.keys(this.values_) || [];
    }
    /**
   * Get an object of all property names and values.
   * @return {Object<string, *>} Object.
   * @api
   */ getProperties() {
        return this.values_ && Object.assign({}, this.values_) || {};
    }
    /**
   * @return {boolean} The object has properties.
   */ hasProperties() {
        return !!this.values_;
    }
    /**
   * @param {string} key Key name.
   * @param {*} oldValue Old value.
   */ notify(key, oldValue) {
        let eventType;
        eventType = `change:${key}`;
        if (this.hasListener(eventType)) this.dispatchEvent(new $2fa1993cbde1d34b$export$cf395d7c4a2d5a17(eventType, key, oldValue));
        eventType = (0, $2e111f792ae6efbb$export$2e2bcd8739ae039).PROPERTYCHANGE;
        if (this.hasListener(eventType)) this.dispatchEvent(new $2fa1993cbde1d34b$export$cf395d7c4a2d5a17(eventType, key, oldValue));
    }
    /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */ addChangeListener(key, listener) {
        this.addEventListener(`change:${key}`, listener);
    }
    /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */ removeChangeListener(key, listener) {
        this.removeEventListener(`change:${key}`, listener);
    }
    /**
   * Sets a value.
   * @param {string} key Key name.
   * @param {*} value Value.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */ set(key, value, silent) {
        const values = this.values_ || (this.values_ = {});
        if (silent) values[key] = value;
        else {
            const oldValue = values[key];
            values[key] = value;
            if (oldValue !== value) this.notify(key, oldValue);
        }
    }
    /**
   * Sets a collection of key-value pairs.  Note that this changes any existing
   * properties and adds new ones (it does not remove any existing properties).
   * @param {Object<string, *>} values Values.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */ setProperties(values, silent) {
        for(const key in values)this.set(key, values[key], silent);
    }
    /**
   * Apply any properties from another object without triggering events.
   * @param {BaseObject} source The source object.
   * @protected
   */ applyProperties(source) {
        if (!source.values_) return;
        Object.assign(this.values_ || (this.values_ = {}), source.values_);
    }
    /**
   * Unsets a property.
   * @param {string} key Key name.
   * @param {boolean} [silent] Unset without triggering an event.
   * @api
   */ unset(key, silent) {
        if (this.values_ && key in this.values_) {
            const oldValue = this.values_[key];
            delete this.values_[key];
            if ((0, $9ffc9b9068a038e2$export$dd1bc94b04021eeb)(this.values_)) this.values_ = null;
            if (!silent) this.notify(key, oldValue);
        }
    }
}
var $2fa1993cbde1d34b$export$2e2bcd8739ae039 = $2fa1993cbde1d34b$var$BaseObject;


var /**
 * @module ol/MapEventType
 */ /**
 * @enum {string}
 */ $ce154dc3396719ab$export$2e2bcd8739ae039 /***
 * @typedef {'postrender'|'movestart'|'moveend'|'loadstart'|'loadend'} Types
 */  = {
    /**
   * Triggered after a map frame is rendered.
   * @event module:ol/MapEvent~MapEvent#postrender
   * @api
   */ POSTRENDER: "postrender",
    /**
   * Triggered when the map starts moving.
   * @event module:ol/MapEvent~MapEvent#movestart
   * @api
   */ MOVESTART: "movestart",
    /**
   * Triggered after the map is moved.
   * @event module:ol/MapEvent~MapEvent#moveend
   * @api
   */ MOVEEND: "moveend",
    /**
   * Triggered when loading of additional map data (tiles, images, features) starts.
   * @event module:ol/MapEvent~MapEvent#loadstart
   * @api
   */ LOADSTART: "loadstart",
    /**
   * Triggered when loading of additional map data has completed.
   * @event module:ol/MapEvent~MapEvent#loadend
   * @api
   */ LOADEND: "loadend"
};




/**
 * @module ol/has
 */ const $03af6b5c3e46892e$var$ua = typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined" ? navigator.userAgent.toLowerCase() : "";
const $03af6b5c3e46892e$export$8442bdfd18b7b8a6 = $03af6b5c3e46892e$var$ua.includes("firefox");
const $03af6b5c3e46892e$export$3227bfbdaa9275de = $03af6b5c3e46892e$var$ua.includes("safari") && !$03af6b5c3e46892e$var$ua.includes("chrom");
const $03af6b5c3e46892e$export$b23eed0e325a206a = $03af6b5c3e46892e$export$3227bfbdaa9275de && ($03af6b5c3e46892e$var$ua.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test($03af6b5c3e46892e$var$ua));
const $03af6b5c3e46892e$export$39dfd62a25e0fe93 = $03af6b5c3e46892e$var$ua.includes("webkit") && !$03af6b5c3e46892e$var$ua.includes("edge");
const $03af6b5c3e46892e$export$76c0a3b101d93136 = $03af6b5c3e46892e$var$ua.includes("macintosh");
const $03af6b5c3e46892e$export$6b83a0446fc26f94 = typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1;
const $03af6b5c3e46892e$export$98fcef3dc9973292 = typeof WorkerGlobalScope !== "undefined" && typeof OffscreenCanvas !== "undefined" && self instanceof WorkerGlobalScope; //eslint-disable-line
const $03af6b5c3e46892e$export$716f8695eedb9bad = typeof Image !== "undefined" && Image.prototype.decode;
const $03af6b5c3e46892e$export$f751ce96c6c4e4fc = function() {
    let passive = false;
    try {
        const options = Object.defineProperty({}, "passive", {
            get: function() {
                passive = true;
            }
        });
        window.addEventListener("_", null, options);
        window.removeEventListener("_", null, options);
    } catch (error) {
    // passive not supported
    }
    return passive;
}();


function $51108d26d56c4955$export$9e05d10eae75c464(width, height, canvasPool, settings) {
    /** @type {HTMLCanvasElement|OffscreenCanvas} */ let canvas;
    if (canvasPool && canvasPool.length) canvas = canvasPool.shift();
    else if (0, $03af6b5c3e46892e$export$98fcef3dc9973292) canvas = new OffscreenCanvas(width || 300, height || 300);
    else canvas = document.createElement("canvas");
    if (width) canvas.width = width;
    if (height) canvas.height = height;
    //FIXME Allow OffscreenCanvasRenderingContext2D as return type
    return /** @type {CanvasRenderingContext2D} */ canvas.getContext("2d", settings);
}
function $51108d26d56c4955$export$e918ac6a1026a12a(context) {
    const canvas = context.canvas;
    canvas.width = 1;
    canvas.height = 1;
    context.clearRect(0, 0, 1, 1);
}
function $51108d26d56c4955$export$e823f88e4111159a(element) {
    let width = element.offsetWidth;
    const style = getComputedStyle(element);
    width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
    return width;
}
function $51108d26d56c4955$export$fc5b8aac72846d1e(element) {
    let height = element.offsetHeight;
    const style = getComputedStyle(element);
    height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
    return height;
}
function $51108d26d56c4955$export$5542201de9311ab2(newNode, oldNode) {
    const parent = oldNode.parentNode;
    if (parent) parent.replaceChild(newNode, oldNode);
}
function $51108d26d56c4955$export$1d0aa160432dfea5(node) {
    return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}
function $51108d26d56c4955$export$1e1c9bf5a4ffe0d1(node) {
    while(node.lastChild)node.removeChild(node.lastChild);
}
function $51108d26d56c4955$export$caeacfe04f52533a(node, children) {
    const oldChildren = node.childNodes;
    for(let i = 0;; ++i){
        const oldChild = oldChildren[i];
        const newChild = children[i];
        // check if our work is done
        if (!oldChild && !newChild) break;
        // check if children match
        if (oldChild === newChild) continue;
        // check if a new child needs to be added
        if (!oldChild) {
            node.appendChild(newChild);
            continue;
        }
        // check if an old child needs to be removed
        if (!newChild) {
            node.removeChild(oldChild);
            --i;
            continue;
        }
        // reorder
        node.insertBefore(newChild, oldChild);
    }
}


/**
 * @typedef {Object} Options
 * @property {HTMLElement} [element] The element is the control's
 * container element. This only needs to be specified if you're developing
 * a custom control.
 * @property {function(import("../MapEvent.js").default):void} [render] Function called when
 * the control should be re-rendered. This is called in a `requestAnimationFrame`
 * callback.
 * @property {HTMLElement|string} [target] Specify a target if you want
 * the control to be rendered outside of the map's viewport.
 */ /**
 * @classdesc
 * A control is a visible widget with a DOM element in a fixed position on the
 * screen. They can involve user input (buttons), or be informational only;
 * the position is determined using CSS. By default these are placed in the
 * container with CSS class name `ol-overlaycontainer-stopevent`, but can use
 * any outside DOM element.
 *
 * This is the base class for controls. You can use it for simple custom
 * controls by creating the element with listeners, creating an instance:
 * ```js
 * const myControl = new Control({element: myElement});
 * ```
 * and then adding this to the map.
 *
 * The main advantage of having this as a control rather than a simple separate
 * DOM element is that preventing propagation is handled for you. Controls
 * will also be objects in a {@link module:ol/Collection~Collection}, so you can use their methods.
 *
 * You can also extend this base for your own control class. See
 * examples/custom-controls for an example of how to do this.
 *
 * @api
 */ class $0d088347df6b5bb9$var$Control extends (0, $2fa1993cbde1d34b$export$2e2bcd8739ae039) {
    /**
   * @param {Options} options Control options.
   */ constructor(options){
        super();
        const element = options.element;
        if (element && !options.target && !element.style.pointerEvents) element.style.pointerEvents = "auto";
        /**
     * @protected
     * @type {HTMLElement}
     */ this.element = element ? element : null;
        /**
     * @private
     * @type {HTMLElement}
     */ this.target_ = null;
        /**
     * @private
     * @type {import("../Map.js").default|null}
     */ this.map_ = null;
        /**
     * @protected
     * @type {!Array<import("../events.js").EventsKey>}
     */ this.listenerKeys = [];
        if (options.render) this.render = options.render;
        if (options.target) this.setTarget(options.target);
    }
    /**
   * Clean up.
   */ disposeInternal() {
        (0, $51108d26d56c4955$export$1d0aa160432dfea5)(this.element);
        super.disposeInternal();
    }
    /**
   * Get the map associated with this control.
   * @return {import("../Map.js").default|null} Map.
   * @api
   */ getMap() {
        return this.map_;
    }
    /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */ setMap(map) {
        if (this.map_) (0, $51108d26d56c4955$export$1d0aa160432dfea5)(this.element);
        for(let i = 0, ii = this.listenerKeys.length; i < ii; ++i)(0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(this.listenerKeys[i]);
        this.listenerKeys.length = 0;
        this.map_ = map;
        if (map) {
            const target = this.target_ ? this.target_ : map.getOverlayContainerStopEvent();
            target.appendChild(this.element);
            if (this.render !== (0, $f2508d0c199eb098$export$1cd1943b3a73bbe8)) this.listenerKeys.push((0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(map, (0, $ce154dc3396719ab$export$2e2bcd8739ae039).POSTRENDER, this.render, this));
            map.render();
        }
    }
    /**
   * Renders the control.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @api
   */ render(mapEvent) {}
    /**
   * This function is used to set a target element for the control. It has no
   * effect if it is called after the control has been added to the map (i.e.
   * after `setMap` is called on the control). If no `target` is set in the
   * options passed to the control constructor and if `setTarget` is not called
   * then the control is added to the map's overlay container.
   * @param {HTMLElement|string} target Target.
   * @api
   */ setTarget(target) {
        this.target_ = typeof target === "string" ? document.getElementById(target) : target;
    }
}
var $0d088347df6b5bb9$export$2e2bcd8739ae039 = $0d088347df6b5bb9$var$Control;



const $c84ed9b717f6ac2c$export$981241db82723ce2 = "ol-hidden";
const $c84ed9b717f6ac2c$export$99b49471b0394319 = "ol-selectable";
const $c84ed9b717f6ac2c$export$1afde3d6e16a7b29 = "ol-unselectable";
const $c84ed9b717f6ac2c$export$68eede0dd8c6c1da = "ol-unsupported";
const $c84ed9b717f6ac2c$export$4d4f8be70b656192 = "ol-control";
const $c84ed9b717f6ac2c$export$e16017ac68d14492 = "ol-collapsed";
/**
 * From https://stackoverflow.com/questions/10135697/regex-to-parse-any-css-font
 * @type {RegExp}
 */ const $c84ed9b717f6ac2c$var$fontRegEx = new RegExp([
    "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
    "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
    "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
    "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
    "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
    "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
    "?\\s*([-,\\\"\\'\\sa-z]+?)\\s*$", 
].join(""), "i");
const $c84ed9b717f6ac2c$var$fontRegExMatchIndex = [
    "style",
    "variant",
    "weight",
    "size",
    "lineHeight",
    "family", 
];
const $c84ed9b717f6ac2c$export$5abde8a6aec4a131 = function(fontSpec) {
    const match = fontSpec.match($c84ed9b717f6ac2c$var$fontRegEx);
    if (!match) return null;
    const style = {
        lineHeight: "normal",
        size: "1.2em",
        style: "normal",
        weight: "normal",
        variant: "normal"
    };
    for(let i = 0, ii = $c84ed9b717f6ac2c$var$fontRegExMatchIndex.length; i < ii; ++i){
        const value = match[i + 1];
        if (value !== undefined) style[$c84ed9b717f6ac2c$var$fontRegExMatchIndex[i]] = value;
    }
    style.families = style.family.split(/,\s?/);
    return style;
};




var /**
 * @module ol/layer/Property
 */ /**
 * @enum {string}
 */ $2aede9243382f2ce$export$2e2bcd8739ae039 = {
    OPACITY: "opacity",
    VISIBLE: "visible",
    EXTENT: "extent",
    Z_INDEX: "zIndex",
    MAX_RESOLUTION: "maxResolution",
    MIN_RESOLUTION: "minResolution",
    MAX_ZOOM: "maxZoom",
    MIN_ZOOM: "minZoom",
    SOURCE: "source",
    MAP: "map"
};



/**
 * @module ol/AssertionError
 */ /** @type {Object<number, string>} */ const $6892868296ffa90e$var$messages = {
    1: "The view center is not defined",
    2: "The view resolution is not defined",
    3: "The view rotation is not defined",
    4: "`image` and `src` cannot be provided at the same time",
    5: "`imgSize` must be set when `image` is provided",
    7: "`format` must be set when `url` is set",
    8: "Unknown `serverType` configured",
    9: "`url` must be configured or set using `#setUrl()`",
    10: "The default `geometryFunction` can only handle `Point` geometries",
    11: "`options.featureTypes` must be an Array",
    12: "`options.geometryName` must also be provided when `options.bbox` is set",
    13: "Invalid corner",
    14: "Invalid color",
    15: "Tried to get a value for a key that does not exist in the cache",
    16: "Tried to set a value for a key that is used already",
    17: "`resolutions` must be sorted in descending order",
    18: "Either `origin` or `origins` must be configured, never both",
    19: "Number of `tileSizes` and `resolutions` must be equal",
    20: "Number of `origins` and `resolutions` must be equal",
    22: "Either `tileSize` or `tileSizes` must be configured, never both",
    24: "Invalid extent or geometry provided as `geometry`",
    25: "Cannot fit empty extent provided as `geometry`",
    26: "Features must have an id set",
    27: "Features must have an id set",
    28: '`renderMode` must be `"hybrid"` or `"vector"`',
    30: "The passed `feature` was already added to the source",
    31: "Tried to enqueue an `element` that was already added to the queue",
    32: "Transformation matrix cannot be inverted",
    33: "Invalid units",
    34: "Invalid geometry layout",
    36: "Unknown SRS type",
    37: "Unknown geometry type found",
    38: "`styleMapValue` has an unknown type",
    39: "Unknown geometry type",
    40: "Expected `feature` to have a geometry",
    41: "Expected an `ol/style/Style` or an array of `ol/style/Style.js`",
    42: "Question unknown, the answer is 42",
    43: "Expected `layers` to be an array or a `Collection`",
    47: "Expected `controls` to be an array or an `ol/Collection`",
    48: "Expected `interactions` to be an array or an `ol/Collection`",
    49: "Expected `overlays` to be an array or an `ol/Collection`",
    50: "`options.featureTypes` should be an Array",
    51: "Either `url` or `tileJSON` options must be provided",
    52: "Unknown `serverType` configured",
    53: "Unknown `tierSizeCalculation` configured",
    55: "The {-y} placeholder requires a tile grid with extent",
    56: "mapBrowserEvent must originate from a pointer event",
    57: "At least 2 conditions are required",
    59: "Invalid command found in the PBF",
    60: "Missing or invalid `size`",
    61: "Cannot determine IIIF Image API version from provided image information JSON",
    62: "A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`",
    64: "Layer opacity must be a number",
    66: "`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has not been enabled. This is done by providing adequate shaders using the `hitVertexShader` and `hitFragmentShader` properties of `WebGLPointsLayerRenderer`",
    67: "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both",
    68: "A VectorTile source can only be rendered if it has a projection compatible with the view projection"
};
/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error.
 */ class $6892868296ffa90e$var$AssertionError extends Error {
    /**
   * @param {number} code Error code.
   */ constructor(code){
        const message = $6892868296ffa90e$var$messages[code];
        super(message);
        /**
     * Error code. The meaning of the code can be found on
     * https://openlayers.org/en/latest/doc/errors/ (replace `latest` with
     * the version found in the OpenLayers script's header comment if a version
     * other than the latest is used).
     * @type {number}
     * @deprecated ol/AssertionError and error codes will be removed in v8.0
     * @api
     */ this.code = code;
        /**
     * @type {string}
     */ this.name = "AssertionError";
        // Re-assign message, see https://github.com/Rich-Harris/buble/issues/40
        this.message = message;
    }
}
var $6892868296ffa90e$export$2e2bcd8739ae039 = $6892868296ffa90e$var$AssertionError;


function $8ecea7bfe0edde91$export$a7a9523472993e97(assertion, errorCode) {
    if (!assertion) throw new (0, $6892868296ffa90e$export$2e2bcd8739ae039)(errorCode);
}


function $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function $906cd1f2aa644a1d$export$251bb0a9cef172e6(x, y, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    if (dx !== 0 || dy !== 0) {
        const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x1 = x2;
            y1 = y2;
        } else if (t > 0) {
            x1 += dx * t;
            y1 += dy * t;
        }
    }
    return $906cd1f2aa644a1d$export$88e6ebb4fe54f538(x, y, x1, y1);
}
function $906cd1f2aa644a1d$export$88e6ebb4fe54f538(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return dx * dx + dy * dy;
}
function $906cd1f2aa644a1d$export$8240f01c446270e6(mat) {
    const n = mat.length;
    for(let i = 0; i < n; i++){
        // Find max in the i-th column (ignoring i - 1 first rows)
        let maxRow = i;
        let maxEl = Math.abs(mat[i][i]);
        for(let r = i + 1; r < n; r++){
            const absValue = Math.abs(mat[r][i]);
            if (absValue > maxEl) {
                maxEl = absValue;
                maxRow = r;
            }
        }
        if (maxEl === 0) return null; // matrix is singular
        // Swap max row with i-th (current) row
        const tmp = mat[maxRow];
        mat[maxRow] = mat[i];
        mat[i] = tmp;
        // Subtract the i-th row to make all the remaining rows 0 in the i-th column
        for(let j = i + 1; j < n; j++){
            const coef = -mat[j][i] / mat[i][i];
            for(let k = i; k < n + 1; k++)if (i == k) mat[j][k] = 0;
            else mat[j][k] += coef * mat[i][k];
        }
    }
    // Solve Ax=b for upper triangular matrix A (mat)
    const x = new Array(n);
    for(let l = n - 1; l >= 0; l--){
        x[l] = mat[l][n] / mat[l][l];
        for(let m = l - 1; m >= 0; m--)mat[m][n] -= mat[m][l] * x[l];
    }
    return x;
}
function $906cd1f2aa644a1d$export$56cb859c01fa134d(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
}
function $906cd1f2aa644a1d$export$cba01ba138429a1d(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
}
function $906cd1f2aa644a1d$export$ba467bec01d66def(a, b) {
    const r = a % b;
    return r * b < 0 ? r + b : r;
}
function $906cd1f2aa644a1d$export$3a89f8d6f6bf6c9f(a, b, x) {
    return a + x * (b - a);
}
function $906cd1f2aa644a1d$export$a81f732198733497(n, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(n * factor) / factor;
}
function $906cd1f2aa644a1d$export$2077e0241d6afd3c(n, decimals) {
    return Math.round($906cd1f2aa644a1d$export$a81f732198733497(n, decimals));
}
function $906cd1f2aa644a1d$export$a3fe094919f356fd(n, decimals) {
    return Math.floor($906cd1f2aa644a1d$export$a81f732198733497(n, decimals));
}
function $906cd1f2aa644a1d$export$803ce6b71a0a94b2(n, decimals) {
    return Math.ceil($906cd1f2aa644a1d$export$a81f732198733497(n, decimals));
}


/**
 * A css color, or a function called with a view resolution returning a css color.
 *
 * @typedef {string|function(number):string} BackgroundColor
 * @api
 */ /**
 * @typedef {import("../ObjectEventType").Types|'change:extent'|'change:maxResolution'|'change:maxZoom'|
 *    'change:minResolution'|'change:minZoom'|'change:opacity'|'change:visible'|'change:zIndex'} BaseLayerObjectEventTypes
 */ /***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<BaseLayerObjectEventTypes, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|BaseLayerObjectEventTypes, Return>} BaseLayerOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {BackgroundColor} [background] Background color for the layer. If not specified, no background
 * will be rendered.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Note that with {@link module:ol/layer/Base~BaseLayer} and all its subclasses, any property set in
 * the options is set as a {@link module:ol/Object~BaseObject} property on the layer object, so
 * is observable, and has get/set accessors.
 *
 * @api
 */ class $e35bc28836b50916$var$BaseLayer extends (0, $2fa1993cbde1d34b$export$2e2bcd8739ae039) {
    /**
   * @param {Options} options Layer options.
   */ constructor(options){
        super();
        /***
     * @type {BaseLayerOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {BaseLayerOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {BaseLayerOnSignature<void>}
     */ this.un;
        /**
     * @type {BackgroundColor|false}
     * @private
     */ this.background_ = options.background;
        /**
     * @type {Object<string, *>}
     */ const properties = Object.assign({}, options);
        if (typeof options.properties === "object") {
            delete properties.properties;
            Object.assign(properties, options.properties);
        }
        properties[(0, $2aede9243382f2ce$export$2e2bcd8739ae039).OPACITY] = options.opacity !== undefined ? options.opacity : 1;
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(typeof properties[(0, $2aede9243382f2ce$export$2e2bcd8739ae039).OPACITY] === "number", 64); // Layer opacity must be a number
        properties[(0, $2aede9243382f2ce$export$2e2bcd8739ae039).VISIBLE] = options.visible !== undefined ? options.visible : true;
        properties[(0, $2aede9243382f2ce$export$2e2bcd8739ae039).Z_INDEX] = options.zIndex;
        properties[(0, $2aede9243382f2ce$export$2e2bcd8739ae039).MAX_RESOLUTION] = options.maxResolution !== undefined ? options.maxResolution : Infinity;
        properties[(0, $2aede9243382f2ce$export$2e2bcd8739ae039).MIN_RESOLUTION] = options.minResolution !== undefined ? options.minResolution : 0;
        properties[(0, $2aede9243382f2ce$export$2e2bcd8739ae039).MIN_ZOOM] = options.minZoom !== undefined ? options.minZoom : -Infinity;
        properties[(0, $2aede9243382f2ce$export$2e2bcd8739ae039).MAX_ZOOM] = options.maxZoom !== undefined ? options.maxZoom : Infinity;
        /**
     * @type {string}
     * @private
     */ this.className_ = properties.className !== undefined ? properties.className : "ol-layer";
        delete properties.className;
        this.setProperties(properties);
        /**
     * @type {import("./Layer.js").State}
     * @private
     */ this.state_ = null;
    }
    /**
   * Get the background for this layer.
   * @return {BackgroundColor|false} Layer background.
   */ getBackground() {
        return this.background_;
    }
    /**
   * @return {string} CSS class name.
   */ getClassName() {
        return this.className_;
    }
    /**
   * This method is not meant to be called by layers or layer renderers because the state
   * is incorrect if the layer is included in a layer group.
   *
   * @param {boolean} [managed] Layer is managed.
   * @return {import("./Layer.js").State} Layer state.
   */ getLayerState(managed) {
        /** @type {import("./Layer.js").State} */ const state = this.state_ || {
            layer: this,
            managed: managed === undefined ? true : managed
        };
        const zIndex = this.getZIndex();
        state.opacity = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(Math.round(this.getOpacity() * 100) / 100, 0, 1);
        state.visible = this.getVisible();
        state.extent = this.getExtent();
        state.zIndex = zIndex === undefined && !state.managed ? Infinity : zIndex;
        state.maxResolution = this.getMaxResolution();
        state.minResolution = Math.max(this.getMinResolution(), 0);
        state.minZoom = this.getMinZoom();
        state.maxZoom = this.getMaxZoom();
        this.state_ = state;
        return state;
    }
    /**
   * @abstract
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */ getLayersArray(array) {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * @abstract
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */ getLayerStatesArray(states) {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
   * will be visible regardless of extent.
   * @return {import("../extent.js").Extent|undefined} The layer extent.
   * @observable
   * @api
   */ getExtent() {
        return /** @type {import("../extent.js").Extent|undefined} */ this.get((0, $2aede9243382f2ce$export$2e2bcd8739ae039).EXTENT);
    }
    /**
   * Return the maximum resolution of the layer.
   * @return {number} The maximum resolution of the layer.
   * @observable
   * @api
   */ getMaxResolution() {
        return /** @type {number} */ this.get((0, $2aede9243382f2ce$export$2e2bcd8739ae039).MAX_RESOLUTION);
    }
    /**
   * Return the minimum resolution of the layer.
   * @return {number} The minimum resolution of the layer.
   * @observable
   * @api
   */ getMinResolution() {
        return /** @type {number} */ this.get((0, $2aede9243382f2ce$export$2e2bcd8739ae039).MIN_RESOLUTION);
    }
    /**
   * Return the minimum zoom level of the layer.
   * @return {number} The minimum zoom level of the layer.
   * @observable
   * @api
   */ getMinZoom() {
        return /** @type {number} */ this.get((0, $2aede9243382f2ce$export$2e2bcd8739ae039).MIN_ZOOM);
    }
    /**
   * Return the maximum zoom level of the layer.
   * @return {number} The maximum zoom level of the layer.
   * @observable
   * @api
   */ getMaxZoom() {
        return /** @type {number} */ this.get((0, $2aede9243382f2ce$export$2e2bcd8739ae039).MAX_ZOOM);
    }
    /**
   * Return the opacity of the layer (between 0 and 1).
   * @return {number} The opacity of the layer.
   * @observable
   * @api
   */ getOpacity() {
        return /** @type {number} */ this.get((0, $2aede9243382f2ce$export$2e2bcd8739ae039).OPACITY);
    }
    /**
   * @abstract
   * @return {import("../source/Source.js").State} Source state.
   */ getSourceState() {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Return the visibility of the layer (`true` or `false`).
   * @return {boolean} The visibility of the layer.
   * @observable
   * @api
   */ getVisible() {
        return /** @type {boolean} */ this.get((0, $2aede9243382f2ce$export$2e2bcd8739ae039).VISIBLE);
    }
    /**
   * Return the Z-index of the layer, which is used to order layers before
   * rendering. The default Z-index is 0.
   * @return {number} The Z-index of the layer.
   * @observable
   * @api
   */ getZIndex() {
        return /** @type {number} */ this.get((0, $2aede9243382f2ce$export$2e2bcd8739ae039).Z_INDEX);
    }
    /**
   * Sets the background color.
   * @param {BackgroundColor} [background] Background color.
   */ setBackground(background) {
        this.background_ = background;
        this.changed();
    }
    /**
   * Set the extent at which the layer is visible.  If `undefined`, the layer
   * will be visible at all extents.
   * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
   * @observable
   * @api
   */ setExtent(extent) {
        this.set((0, $2aede9243382f2ce$export$2e2bcd8739ae039).EXTENT, extent);
    }
    /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */ setMaxResolution(maxResolution) {
        this.set((0, $2aede9243382f2ce$export$2e2bcd8739ae039).MAX_RESOLUTION, maxResolution);
    }
    /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */ setMinResolution(minResolution) {
        this.set((0, $2aede9243382f2ce$export$2e2bcd8739ae039).MIN_RESOLUTION, minResolution);
    }
    /**
   * Set the maximum zoom (exclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} maxZoom The maximum zoom of the layer.
   * @observable
   * @api
   */ setMaxZoom(maxZoom) {
        this.set((0, $2aede9243382f2ce$export$2e2bcd8739ae039).MAX_ZOOM, maxZoom);
    }
    /**
   * Set the minimum zoom (inclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} minZoom The minimum zoom of the layer.
   * @observable
   * @api
   */ setMinZoom(minZoom) {
        this.set((0, $2aede9243382f2ce$export$2e2bcd8739ae039).MIN_ZOOM, minZoom);
    }
    /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */ setOpacity(opacity) {
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(typeof opacity === "number", 64); // Layer opacity must be a number
        this.set((0, $2aede9243382f2ce$export$2e2bcd8739ae039).OPACITY, opacity);
    }
    /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */ setVisible(visible) {
        this.set((0, $2aede9243382f2ce$export$2e2bcd8739ae039).VISIBLE, visible);
    }
    /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */ setZIndex(zindex) {
        this.set((0, $2aede9243382f2ce$export$2e2bcd8739ae039).Z_INDEX, zindex);
    }
    /**
   * Clean up.
   */ disposeInternal() {
        if (this.state_) {
            this.state_.layer = null;
            this.state_ = null;
        }
        super.disposeInternal();
    }
}
var $e35bc28836b50916$export$2e2bcd8739ae039 = $e35bc28836b50916$var$BaseLayer;




var /**
 * @module ol/render/EventType
 */ /**
 * @enum {string}
 */ $ed38d21f8bccd31c$export$2e2bcd8739ae039 /**
 * @typedef {'postrender'|'precompose'|'postcompose'|'rendercomplete'} MapRenderEventTypes
 */  /**
 * @typedef {'postrender'|'prerender'} LayerRenderEventTypes
 */  = {
    /**
   * Triggered before a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#prerender
   * @api
   */ PRERENDER: "prerender",
    /**
   * Triggered after a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#postrender
   * @api
   */ POSTRENDER: "postrender",
    /**
   * Triggered before layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#precompose
   * @api
   */ PRECOMPOSE: "precompose",
    /**
   * Triggered after layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#postcompose
   * @api
   */ POSTCOMPOSE: "postcompose",
    /**
   * Triggered when rendering is complete, i.e. all sources and tiles have
   * finished loading for the current viewport, and all tiles are faded in.
   * The event object will not have a `context` set.
   * @event module:ol/render/Event~RenderEvent#rendercomplete
   * @api
   */ RENDERCOMPLETE: "rendercomplete"
};




/**
 * @typedef {function(import("../Map.js").FrameState):HTMLElement} RenderFunction
 */ /***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
 *     'change:source', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<import("../render/EventType").LayerRenderEventTypes, import("../render/Event").default, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|'change:source'|
 *     import("../render/EventType").LayerRenderEventTypes, Return>} LayerOnSignature
 */ /**
 * @template {import("../source/Source.js").default} [SourceType=import("../source/Source.js").default]
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {SourceType} [source] Source for this layer.  If not provided to the constructor,
 * the source can be set by calling {@link module:ol/layer/Layer~Layer#setSource layer.setSource(source)} after
 * construction.
 * @property {import("../Map.js").default|null} [map] Map.
 * @property {RenderFunction} [render] Render function. Takes the frame state as input and is expected to return an
 * HTML element. Will overwrite the default rendering for the layer.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */ /**
 * @typedef {Object} State
 * @property {import("./Layer.js").default} layer Layer.
 * @property {number} opacity Opacity, the value is rounded to two digits to appear after the decimal point.
 * @property {boolean} visible Visible.
 * @property {boolean} managed Managed.
 * @property {import("../extent.js").Extent} [extent] Extent.
 * @property {number} zIndex ZIndex.
 * @property {number} maxResolution Maximum resolution.
 * @property {number} minResolution Minimum resolution.
 * @property {number} minZoom Minimum zoom.
 * @property {number} maxZoom Maximum zoom.
 */ /**
 * @classdesc
 * Base class from which all layer types are derived. This should only be instantiated
 * in the case where a custom layer is added to the map with a custom `render` function.
 * Such a function can be specified in the `options` object, and is expected to return an HTML element.
 *
 * A visual representation of raster or vector map data.
 * Layers group together those properties that pertain to how the data is to be
 * displayed, irrespective of the source of that data.
 *
 * Layers are usually added to a map with [map.addLayer()]{@link import("../Map.js").default#addLayer}.
 * Components like {@link module:ol/interaction/Draw~Draw} use unmanaged layers
 * internally. These unmanaged layers are associated with the map using
 * [layer.setMap()]{@link module:ol/layer/Layer~Layer#setMap} instead.
 *
 * A generic `change` event is fired when the state of the source changes.
 *
 * @fires import("../render/Event.js").RenderEvent#prerender
 * @fires import("../render/Event.js").RenderEvent#postrender
 *
 * @template {import("../source/Source.js").default} [SourceType=import("../source/Source.js").default]
 * @template {import("../renderer/Layer.js").default} [RendererType=import("../renderer/Layer.js").default]
 * @api
 */ class $462d96ef30c3e83d$var$Layer extends (0, $e35bc28836b50916$export$2e2bcd8739ae039) {
    /**
   * @param {Options<SourceType>} options Layer options.
   */ constructor(options){
        const baseOptions = Object.assign({}, options);
        delete baseOptions.source;
        super(baseOptions);
        /***
     * @type {LayerOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {LayerOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {LayerOnSignature<void>}
     */ this.un;
        /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */ this.mapPrecomposeKey_ = null;
        /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */ this.mapRenderKey_ = null;
        /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */ this.sourceChangeKey_ = null;
        /**
     * @private
     * @type {RendererType}
     */ this.renderer_ = null;
        /**
     * @protected
     * @type {boolean}
     */ this.rendered = false;
        // Overwrite default render method with a custom one
        if (options.render) this.render = options.render;
        if (options.map) this.setMap(options.map);
        this.addChangeListener((0, $2aede9243382f2ce$export$2e2bcd8739ae039).SOURCE, this.handleSourcePropertyChange_);
        const source = options.source ? options.source : null;
        this.setSource(source);
    }
    /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */ getLayersArray(array) {
        array = array ? array : [];
        array.push(this);
        return array;
    }
    /**
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */ getLayerStatesArray(states) {
        states = states ? states : [];
        states.push(this.getLayerState());
        return states;
    }
    /**
   * Get the layer source.
   * @return {SourceType|null} The layer source (or `null` if not yet set).
   * @observable
   * @api
   */ getSource() {
        return /** @type {SourceType} */ this.get((0, $2aede9243382f2ce$export$2e2bcd8739ae039).SOURCE) || null;
    }
    /**
   * @return {SourceType|null} The source being rendered.
   */ getRenderSource() {
        return this.getSource();
    }
    /**
   * @return {import("../source/Source.js").State} Source state.
   */ getSourceState() {
        const source = this.getSource();
        return !source ? "undefined" : source.getState();
    }
    /**
   * @private
   */ handleSourceChange_() {
        this.changed();
    }
    /**
   * @private
   */ handleSourcePropertyChange_() {
        if (this.sourceChangeKey_) {
            (0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(this.sourceChangeKey_);
            this.sourceChangeKey_ = null;
        }
        const source = this.getSource();
        if (source) this.sourceChangeKey_ = (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(source, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE, this.handleSourceChange_, this);
        this.changed();
    }
    /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").default>>} Promise that resolves with
   * an array of features.
   */ getFeatures(pixel) {
        if (!this.renderer_) return new Promise((resolve)=>resolve([]));
        return this.renderer_.getFeatures(pixel);
    }
    /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */ getData(pixel) {
        if (!this.renderer_ || !this.rendered) return null;
        return this.renderer_.getData(pixel);
    }
    /**
   * In charge to manage the rendering of the layer. One layer type is
   * bounded with one layer renderer.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target which the renderer may (but need not) use
   * for rendering its content.
   * @return {HTMLElement} The rendered element.
   */ render(frameState, target) {
        const layerRenderer = this.getRenderer();
        if (layerRenderer.prepareFrame(frameState)) {
            this.rendered = true;
            return layerRenderer.renderFrame(frameState, target);
        }
    }
    /**
   * Called when a layer is not visible during a map render.
   */ unrender() {
        this.rendered = false;
    }
    /**
   * For use inside the library only.
   * @param {import("../Map.js").default|null} map Map.
   */ setMapInternal(map) {
        if (!map) this.unrender();
        this.set((0, $2aede9243382f2ce$export$2e2bcd8739ae039).MAP, map);
    }
    /**
   * For use inside the library only.
   * @return {import("../Map.js").default|null} Map.
   */ getMapInternal() {
        return this.get((0, $2aede9243382f2ce$export$2e2bcd8739ae039).MAP);
    }
    /**
   * Sets the layer to be rendered on top of other layers on a map. The map will
   * not manage this layer in its layers collection. This
   * is useful for temporary layers. To remove an unmanaged layer from the map,
   * use `#setMap(null)`.
   *
   * To add the layer to a map and have it managed by the map, use
   * {@link module:ol/Map~Map#addLayer} instead.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */ setMap(map) {
        if (this.mapPrecomposeKey_) {
            (0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(this.mapPrecomposeKey_);
            this.mapPrecomposeKey_ = null;
        }
        if (!map) this.changed();
        if (this.mapRenderKey_) {
            (0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(this.mapRenderKey_);
            this.mapRenderKey_ = null;
        }
        if (map) {
            this.mapPrecomposeKey_ = (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(map, (0, $ed38d21f8bccd31c$export$2e2bcd8739ae039).PRECOMPOSE, function(evt) {
                const renderEvent = evt;
                const layerStatesArray = renderEvent.frameState.layerStatesArray;
                const layerState = this.getLayerState(false);
                // A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.
                (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(!layerStatesArray.some(function(arrayLayerState) {
                    return arrayLayerState.layer === layerState.layer;
                }), 67);
                layerStatesArray.push(layerState);
            }, this);
            this.mapRenderKey_ = (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(this, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE, map.render, map);
            this.changed();
        }
    }
    /**
   * Set the layer source.
   * @param {SourceType|null} source The layer source.
   * @observable
   * @api
   */ setSource(source) {
        this.set((0, $2aede9243382f2ce$export$2e2bcd8739ae039).SOURCE, source);
    }
    /**
   * Get the renderer for this layer.
   * @return {RendererType|null} The layer renderer.
   */ getRenderer() {
        if (!this.renderer_) this.renderer_ = this.createRenderer();
        return this.renderer_;
    }
    /**
   * @return {boolean} The layer has a renderer.
   */ hasRenderer() {
        return !!this.renderer_;
    }
    /**
   * Create a renderer for this layer.
   * @return {RendererType} A layer renderer.
   * @protected
   */ createRenderer() {
        return null;
    }
    /**
   * Clean up.
   */ disposeInternal() {
        if (this.renderer_) {
            this.renderer_.dispose();
            delete this.renderer_;
        }
        this.setSource(null);
        super.disposeInternal();
    }
}
function $462d96ef30c3e83d$export$acb1e9cb9ce4ca56(layerState, viewState) {
    if (!layerState.visible) return false;
    const resolution = viewState.resolution;
    if (resolution < layerState.minResolution || resolution >= layerState.maxResolution) return false;
    const zoom = viewState.zoom;
    return zoom > layerState.minZoom && zoom <= layerState.maxZoom;
}
var $462d96ef30c3e83d$export$2e2bcd8739ae039 = $462d96ef30c3e83d$var$Layer;



/**
 * @typedef {Object} Options
 * @property {string} [className='ol-attribution'] CSS class name.
 * @property {HTMLElement|string} [target] Specify a target if you
 * want the control to be rendered outside of the map's
 * viewport.
 * @property {boolean} [collapsible] Specify if attributions can
 * be collapsed. If not specified, sources control this behavior with their
 * `attributionsCollapsible` setting.
 * @property {boolean} [collapsed=true] Specify if attributions should
 * be collapsed at startup.
 * @property {string} [tipLabel='Attributions'] Text label to use for the button tip.
 * @property {string|HTMLElement} [label='i'] Text label to use for the
 * collapsed attributions button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [expandClassName=className + '-expand'] CSS class name for the
 * collapsed attributions button.
 * @property {string|HTMLElement} [collapseLabel='›'] Text label to use
 * for the expanded attributions button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [collapseClassName=className + '-collapse'] CSS class name for the
 * expanded attributions button.
 * @property {function(import("../MapEvent.js").default):void} [render] Function called when
 * the control should be re-rendered. This is called in a `requestAnimationFrame`
 * callback.
 */ /**
 * @classdesc
 * Control to show all the attributions associated with the layer sources
 * in the map. This control is one of the default controls included in maps.
 * By default it will show in the bottom right portion of the map, but this can
 * be changed by using a css selector for `.ol-attribution`.
 *
 * @api
 */ class $66a29414109e9789$var$Attribution extends (0, $0d088347df6b5bb9$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Attribution options.
   */ constructor(options){
        options = options ? options : {};
        super({
            element: document.createElement("div"),
            render: options.render,
            target: options.target
        });
        /**
     * @private
     * @type {HTMLElement}
     */ this.ulElement_ = document.createElement("ul");
        /**
     * @private
     * @type {boolean}
     */ this.collapsed_ = options.collapsed !== undefined ? options.collapsed : true;
        /**
     * @private
     * @type {boolean}
     */ this.userCollapsed_ = this.collapsed_;
        /**
     * @private
     * @type {boolean}
     */ this.overrideCollapsible_ = options.collapsible !== undefined;
        /**
     * @private
     * @type {boolean}
     */ this.collapsible_ = options.collapsible !== undefined ? options.collapsible : true;
        if (!this.collapsible_) this.collapsed_ = false;
        const className = options.className !== undefined ? options.className : "ol-attribution";
        const tipLabel = options.tipLabel !== undefined ? options.tipLabel : "Attributions";
        const expandClassName = options.expandClassName !== undefined ? options.expandClassName : className + "-expand";
        const collapseLabel = options.collapseLabel !== undefined ? options.collapseLabel : "›";
        const collapseClassName = options.collapseClassName !== undefined ? options.collapseClassName : className + "-collapse";
        if (typeof collapseLabel === "string") {
            /**
       * @private
       * @type {HTMLElement}
       */ this.collapseLabel_ = document.createElement("span");
            this.collapseLabel_.textContent = collapseLabel;
            this.collapseLabel_.className = collapseClassName;
        } else this.collapseLabel_ = collapseLabel;
        const label = options.label !== undefined ? options.label : "i";
        if (typeof label === "string") {
            /**
       * @private
       * @type {HTMLElement}
       */ this.label_ = document.createElement("span");
            this.label_.textContent = label;
            this.label_.className = expandClassName;
        } else this.label_ = label;
        const activeLabel = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
        /**
     * @private
     * @type {HTMLElement}
     */ this.toggleButton_ = document.createElement("button");
        this.toggleButton_.setAttribute("type", "button");
        this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
        this.toggleButton_.title = tipLabel;
        this.toggleButton_.appendChild(activeLabel);
        this.toggleButton_.addEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CLICK, this.handleClick_.bind(this), false);
        const cssClasses = className + " " + (0, $c84ed9b717f6ac2c$export$1afde3d6e16a7b29) + " " + (0, $c84ed9b717f6ac2c$export$4d4f8be70b656192) + (this.collapsed_ && this.collapsible_ ? " " + (0, $c84ed9b717f6ac2c$export$e16017ac68d14492) : "") + (this.collapsible_ ? "" : " ol-uncollapsible");
        const element = this.element;
        element.className = cssClasses;
        element.appendChild(this.toggleButton_);
        element.appendChild(this.ulElement_);
        /**
     * A list of currently rendered resolutions.
     * @type {Array<string>}
     * @private
     */ this.renderedAttributions_ = [];
        /**
     * @private
     * @type {boolean}
     */ this.renderedVisible_ = true;
    }
    /**
   * Collect a list of visible attributions and set the collapsible state.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {Array<string>} Attributions.
   * @private
   */ collectSourceAttributions_(frameState) {
        /**
     * Used to determine if an attribution already exists.
     * @type {!Object<string, boolean>}
     */ const lookup = {};
        /**
     * A list of visible attributions.
     * @type {Array<string>}
     */ const visibleAttributions = [];
        let collapsible = true;
        const layerStatesArray = frameState.layerStatesArray;
        for(let i = 0, ii = layerStatesArray.length; i < ii; ++i){
            const layerState = layerStatesArray[i];
            if (!(0, $462d96ef30c3e83d$export$acb1e9cb9ce4ca56)(layerState, frameState.viewState)) continue;
            const source = /** @type {import("../layer/Layer.js").default} */ layerState.layer.getSource();
            if (!source) continue;
            const attributionGetter = source.getAttributions();
            if (!attributionGetter) continue;
            const attributions = attributionGetter(frameState);
            if (!attributions) continue;
            collapsible = collapsible && source.getAttributionsCollapsible() !== false;
            if (Array.isArray(attributions)) {
                for(let j = 0, jj = attributions.length; j < jj; ++j)if (!(attributions[j] in lookup)) {
                    visibleAttributions.push(attributions[j]);
                    lookup[attributions[j]] = true;
                }
            } else if (!(attributions in lookup)) {
                visibleAttributions.push(attributions);
                lookup[attributions] = true;
            }
        }
        if (!this.overrideCollapsible_) this.setCollapsible(collapsible);
        return visibleAttributions;
    }
    /**
   * @private
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */ updateElement_(frameState) {
        if (!frameState) {
            if (this.renderedVisible_) {
                this.element.style.display = "none";
                this.renderedVisible_ = false;
            }
            return;
        }
        const attributions = this.collectSourceAttributions_(frameState);
        const visible = attributions.length > 0;
        if (this.renderedVisible_ != visible) {
            this.element.style.display = visible ? "" : "none";
            this.renderedVisible_ = visible;
        }
        if ((0, $eea510364582e5fa$export$e9bab7fafb253603)(attributions, this.renderedAttributions_)) return;
        (0, $51108d26d56c4955$export$1e1c9bf5a4ffe0d1)(this.ulElement_);
        // append the attributions
        for(let i = 0, ii = attributions.length; i < ii; ++i){
            const element = document.createElement("li");
            element.innerHTML = attributions[i];
            this.ulElement_.appendChild(element);
        }
        this.renderedAttributions_ = attributions;
    }
    /**
   * @param {MouseEvent} event The event to handle
   * @private
   */ handleClick_(event) {
        event.preventDefault();
        this.handleToggle_();
        this.userCollapsed_ = this.collapsed_;
    }
    /**
   * @private
   */ handleToggle_() {
        this.element.classList.toggle((0, $c84ed9b717f6ac2c$export$e16017ac68d14492));
        if (this.collapsed_) (0, $51108d26d56c4955$export$5542201de9311ab2)(this.collapseLabel_, this.label_);
        else (0, $51108d26d56c4955$export$5542201de9311ab2)(this.label_, this.collapseLabel_);
        this.collapsed_ = !this.collapsed_;
        this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
    }
    /**
   * Return `true` if the attribution is collapsible, `false` otherwise.
   * @return {boolean} True if the widget is collapsible.
   * @api
   */ getCollapsible() {
        return this.collapsible_;
    }
    /**
   * Set whether the attribution should be collapsible.
   * @param {boolean} collapsible True if the widget is collapsible.
   * @api
   */ setCollapsible(collapsible) {
        if (this.collapsible_ === collapsible) return;
        this.collapsible_ = collapsible;
        this.element.classList.toggle("ol-uncollapsible");
        if (this.userCollapsed_) this.handleToggle_();
    }
    /**
   * Collapse or expand the attribution according to the passed parameter. Will
   * not do anything if the attribution isn't collapsible or if the current
   * collapsed state is already the one requested.
   * @param {boolean} collapsed True if the widget is collapsed.
   * @api
   */ setCollapsed(collapsed) {
        this.userCollapsed_ = collapsed;
        if (!this.collapsible_ || this.collapsed_ === collapsed) return;
        this.handleToggle_();
    }
    /**
   * Return `true` when the attribution is currently collapsed or `false`
   * otherwise.
   * @return {boolean} True if the widget is collapsed.
   * @api
   */ getCollapsed() {
        return this.collapsed_;
    }
    /**
   * Update the attribution element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */ render(mapEvent) {
        this.updateElement_(mapEvent.frameState);
    }
}
var $66a29414109e9789$export$2e2bcd8739ae039 = $66a29414109e9789$var$Attribution;




var /**
 * @module ol/CollectionEventType
 */ /**
 * @enum {string}
 */ $b9159002a7423f4e$export$2e2bcd8739ae039 = {
    /**
   * Triggered when an item is added to the collection.
   * @event module:ol/Collection.CollectionEvent#add
   * @api
   */ ADD: "add",
    /**
   * Triggered when an item is removed from the collection.
   * @event module:ol/Collection.CollectionEvent#remove
   * @api
   */ REMOVE: "remove"
};



/**
 * @enum {string}
 * @private
 */ const $35790abb29cb875a$var$Property = {
    LENGTH: "length"
};
class $35790abb29cb875a$export$a87ae6eb2761ec6d extends (0, $f3a6f6cab00ac278$export$2e2bcd8739ae039) {
    /**
   * @param {import("./CollectionEventType.js").default} type Type.
   * @param {T} element Element.
   * @param {number} index The index of the added or removed element.
   */ constructor(type, element, index){
        super(type);
        /**
     * The element that is added to or removed from the collection.
     * @type {T}
     * @api
     */ this.element = element;
        /**
     * The index of the added or removed element.
     * @type {number}
     * @api
     */ this.index = index;
    }
}
/***
 * @template T
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *   import("./Observable").OnSignature<import("./ObjectEventType").Types|'change:length', import("./Object").ObjectEvent, Return> &
 *   import("./Observable").OnSignature<'add'|'remove', CollectionEvent<T>, Return> &
 *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types|
 *     'change:length'|'add'|'remove',Return>} CollectionOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {boolean} [unique=false] Disallow the same item from being added to
 * the collection twice.
 */ /**
 * @classdesc
 * An expanded version of standard JS Array, adding convenience methods for
 * manipulation. Add and remove changes to the Collection trigger a Collection
 * event. Note that this does not cover changes to the objects _within_ the
 * Collection; they trigger events on the appropriate object, not on the
 * Collection as a whole.
 *
 * @fires CollectionEvent
 *
 * @template T
 * @api
 */ class $35790abb29cb875a$var$Collection extends (0, $2fa1993cbde1d34b$export$2e2bcd8739ae039) {
    /**
   * @param {Array<T>} [array] Array.
   * @param {Options} [options] Collection options.
   */ constructor(array, options){
        super();
        /***
     * @type {CollectionOnSignature<T, import("./events").EventsKey>}
     */ this.on;
        /***
     * @type {CollectionOnSignature<T, import("./events").EventsKey>}
     */ this.once;
        /***
     * @type {CollectionOnSignature<T, void>}
     */ this.un;
        options = options || {};
        /**
     * @private
     * @type {boolean}
     */ this.unique_ = !!options.unique;
        /**
     * @private
     * @type {!Array<T>}
     */ this.array_ = array ? array : [];
        if (this.unique_) for(let i = 0, ii = this.array_.length; i < ii; ++i)this.assertUnique_(this.array_[i], i);
        this.updateLength_();
    }
    /**
   * Remove all elements from the collection.
   * @api
   */ clear() {
        while(this.getLength() > 0)this.pop();
    }
    /**
   * Add elements to the collection.  This pushes each item in the provided array
   * to the end of the collection.
   * @param {!Array<T>} arr Array.
   * @return {Collection<T>} This collection.
   * @api
   */ extend(arr) {
        for(let i = 0, ii = arr.length; i < ii; ++i)this.push(arr[i]);
        return this;
    }
    /**
   * Iterate over each element, calling the provided callback.
   * @param {function(T, number, Array<T>): *} f The function to call
   *     for every element. This function takes 3 arguments (the element, the
   *     index and the array). The return value is ignored.
   * @api
   */ forEach(f) {
        const array = this.array_;
        for(let i = 0, ii = array.length; i < ii; ++i)f(array[i], i, array);
    }
    /**
   * Get a reference to the underlying Array object. Warning: if the array
   * is mutated, no events will be dispatched by the collection, and the
   * collection's "length" property won't be in sync with the actual length
   * of the array.
   * @return {!Array<T>} Array.
   * @api
   */ getArray() {
        return this.array_;
    }
    /**
   * Get the element at the provided index.
   * @param {number} index Index.
   * @return {T} Element.
   * @api
   */ item(index) {
        return this.array_[index];
    }
    /**
   * Get the length of this collection.
   * @return {number} The length of the array.
   * @observable
   * @api
   */ getLength() {
        return this.get($35790abb29cb875a$var$Property.LENGTH);
    }
    /**
   * Insert an element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */ insertAt(index, elem) {
        if (index < 0 || index > this.getLength()) throw new Error("Index out of bounds: " + index);
        if (this.unique_) this.assertUnique_(elem);
        this.array_.splice(index, 0, elem);
        this.updateLength_();
        this.dispatchEvent(new $35790abb29cb875a$export$a87ae6eb2761ec6d((0, $b9159002a7423f4e$export$2e2bcd8739ae039).ADD, elem, index));
    }
    /**
   * Remove the last element of the collection and return it.
   * Return `undefined` if the collection is empty.
   * @return {T|undefined} Element.
   * @api
   */ pop() {
        return this.removeAt(this.getLength() - 1);
    }
    /**
   * Insert the provided element at the end of the collection.
   * @param {T} elem Element.
   * @return {number} New length of the collection.
   * @api
   */ push(elem) {
        if (this.unique_) this.assertUnique_(elem);
        const n = this.getLength();
        this.insertAt(n, elem);
        return this.getLength();
    }
    /**
   * Remove the first occurrence of an element from the collection.
   * @param {T} elem Element.
   * @return {T|undefined} The removed element or undefined if none found.
   * @api
   */ remove(elem) {
        const arr = this.array_;
        for(let i = 0, ii = arr.length; i < ii; ++i){
            if (arr[i] === elem) return this.removeAt(i);
        }
        return undefined;
    }
    /**
   * Remove the element at the provided index and return it.
   * Return `undefined` if the collection does not contain this index.
   * @param {number} index Index.
   * @return {T|undefined} Value.
   * @api
   */ removeAt(index) {
        if (index < 0 || index >= this.getLength()) return undefined;
        const prev = this.array_[index];
        this.array_.splice(index, 1);
        this.updateLength_();
        this.dispatchEvent(new $35790abb29cb875a$export$a87ae6eb2761ec6d((0, $b9159002a7423f4e$export$2e2bcd8739ae039).REMOVE, prev, index));
        return prev;
    }
    /**
   * Set the element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */ setAt(index, elem) {
        const n = this.getLength();
        if (index >= n) {
            this.insertAt(index, elem);
            return;
        }
        if (index < 0) throw new Error("Index out of bounds: " + index);
        if (this.unique_) this.assertUnique_(elem, index);
        const prev = this.array_[index];
        this.array_[index] = elem;
        this.dispatchEvent(new $35790abb29cb875a$export$a87ae6eb2761ec6d((0, $b9159002a7423f4e$export$2e2bcd8739ae039).REMOVE, prev, index));
        this.dispatchEvent(new $35790abb29cb875a$export$a87ae6eb2761ec6d((0, $b9159002a7423f4e$export$2e2bcd8739ae039).ADD, elem, index));
    }
    /**
   * @private
   */ updateLength_() {
        this.set($35790abb29cb875a$var$Property.LENGTH, this.array_.length);
    }
    /**
   * @private
   * @param {T} elem Element.
   * @param {number} [except] Optional index to ignore.
   */ assertUnique_(elem, except) {
        for(let i = 0, ii = this.array_.length; i < ii; ++i){
            if (this.array_[i] === elem && i !== except) throw new (0, $6892868296ffa90e$export$2e2bcd8739ae039)(58);
        }
    }
}
var $35790abb29cb875a$export$2e2bcd8739ae039 = $35790abb29cb875a$var$Collection;





function $a827aa90539b5df5$export$929e5a82286172a6(t) {
    return Math.pow(t, 3);
}
function $a827aa90539b5df5$export$57636bb43b1ccbb0(t) {
    return 1 - $a827aa90539b5df5$export$929e5a82286172a6(1 - t);
}
function $a827aa90539b5df5$export$9b47139b511b56e4(t) {
    return 3 * t * t - 2 * t * t * t;
}
function $a827aa90539b5df5$export$45db2fc2f15997e7(t) {
    return t;
}
function $a827aa90539b5df5$export$7f4472f6708afaf3(t) {
    if (t < 0.5) return $a827aa90539b5df5$export$9b47139b511b56e4(2 * t);
    else return 1 - $a827aa90539b5df5$export$9b47139b511b56e4(2 * (t - 0.5));
}


/**
 * @typedef {Object} Options
 * @property {string} [className='ol-rotate'] CSS class name.
 * @property {string|HTMLElement} [label='⇧'] Text label to use for the rotate button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [tipLabel='Reset rotation'] Text label to use for the rotate tip.
 * @property {string} [compassClassName='ol-compass'] CSS class name for the compass.
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {boolean} [autoHide=true] Hide the control when rotation is 0.
 * @property {function(import("../MapEvent.js").default):void} [render] Function called when the control should
 * be re-rendered. This is called in a `requestAnimationFrame` callback.
 * @property {function():void} [resetNorth] Function called when the control is clicked.
 * This will override the default `resetNorth`.
 * @property {HTMLElement|string} [target] Specify a target if you want the control to be
 * rendered outside of the map's viewport.
 */ /**
 * @classdesc
 * A button control to reset rotation to 0.
 * To style this control use css selector `.ol-rotate`. A `.ol-hidden` css
 * selector is added to the button when the rotation is 0.
 *
 * @api
 */ class $80e19c650750dc36$var$Rotate extends (0, $0d088347df6b5bb9$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Rotate options.
   */ constructor(options){
        options = options ? options : {};
        super({
            element: document.createElement("div"),
            render: options.render,
            target: options.target
        });
        const className = options.className !== undefined ? options.className : "ol-rotate";
        const label = options.label !== undefined ? options.label : "⇧";
        const compassClassName = options.compassClassName !== undefined ? options.compassClassName : "ol-compass";
        /**
     * @type {HTMLElement}
     * @private
     */ this.label_ = null;
        if (typeof label === "string") {
            this.label_ = document.createElement("span");
            this.label_.className = compassClassName;
            this.label_.textContent = label;
        } else {
            this.label_ = label;
            this.label_.classList.add(compassClassName);
        }
        const tipLabel = options.tipLabel ? options.tipLabel : "Reset rotation";
        const button = document.createElement("button");
        button.className = className + "-reset";
        button.setAttribute("type", "button");
        button.title = tipLabel;
        button.appendChild(this.label_);
        button.addEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CLICK, this.handleClick_.bind(this), false);
        const cssClasses = className + " " + (0, $c84ed9b717f6ac2c$export$1afde3d6e16a7b29) + " " + (0, $c84ed9b717f6ac2c$export$4d4f8be70b656192);
        const element = this.element;
        element.className = cssClasses;
        element.appendChild(button);
        this.callResetNorth_ = options.resetNorth ? options.resetNorth : undefined;
        /**
     * @type {number}
     * @private
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
        /**
     * @type {boolean}
     * @private
     */ this.autoHide_ = options.autoHide !== undefined ? options.autoHide : true;
        /**
     * @private
     * @type {number|undefined}
     */ this.rotation_ = undefined;
        if (this.autoHide_) this.element.classList.add((0, $c84ed9b717f6ac2c$export$981241db82723ce2));
    }
    /**
   * @param {MouseEvent} event The event to handle
   * @private
   */ handleClick_(event) {
        event.preventDefault();
        if (this.callResetNorth_ !== undefined) this.callResetNorth_();
        else this.resetNorth_();
    }
    /**
   * @private
   */ resetNorth_() {
        const map = this.getMap();
        const view = map.getView();
        if (!view) // the map does not have a view, so we can't act
        // upon it
        return;
        const rotation = view.getRotation();
        if (rotation !== undefined) {
            if (this.duration_ > 0 && rotation % (2 * Math.PI) !== 0) view.animate({
                rotation: 0,
                duration: this.duration_,
                easing: (0, $a827aa90539b5df5$export$57636bb43b1ccbb0)
            });
            else view.setRotation(0);
        }
    }
    /**
   * Update the rotate control element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */ render(mapEvent) {
        const frameState = mapEvent.frameState;
        if (!frameState) return;
        const rotation = frameState.viewState.rotation;
        if (rotation != this.rotation_) {
            const transform = "rotate(" + rotation + "rad)";
            if (this.autoHide_) {
                const contains = this.element.classList.contains((0, $c84ed9b717f6ac2c$export$981241db82723ce2));
                if (!contains && rotation === 0) this.element.classList.add((0, $c84ed9b717f6ac2c$export$981241db82723ce2));
                else if (contains && rotation !== 0) this.element.classList.remove((0, $c84ed9b717f6ac2c$export$981241db82723ce2));
            }
            this.label_.style.transform = transform;
        }
        this.rotation_ = rotation;
    }
}
var $80e19c650750dc36$export$2e2bcd8739ae039 = $80e19c650750dc36$var$Rotate;






/**
 * @typedef {Object} Options
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {string} [className='ol-zoom'] CSS class name.
 * @property {string} [zoomInClassName=className + '-in'] CSS class name for the zoom-in button.
 * @property {string} [zoomOutClassName=className + '-out'] CSS class name for the zoom-out button.
 * @property {string|HTMLElement} [zoomInLabel='+'] Text label to use for the zoom-in
 * button. Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string|HTMLElement} [zoomOutLabel='–'] Text label to use for the zoom-out button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [zoomInTipLabel='Zoom in'] Text label to use for the button tip.
 * @property {string} [zoomOutTipLabel='Zoom out'] Text label to use for the button tip.
 * @property {number} [delta=1] The zoom delta applied on each click.
 * @property {HTMLElement|string} [target] Specify a target if you want the control to be
 * rendered outside of the map's viewport.
 */ /**
 * @classdesc
 * A control with 2 buttons, one for zoom in and one for zoom out.
 * This control is one of the default controls of a map. To style this control
 * use css selectors `.ol-zoom-in` and `.ol-zoom-out`.
 *
 * @api
 */ class $ce20d487e5a60428$var$Zoom extends (0, $0d088347df6b5bb9$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Zoom options.
   */ constructor(options){
        options = options ? options : {};
        super({
            element: document.createElement("div"),
            target: options.target
        });
        const className = options.className !== undefined ? options.className : "ol-zoom";
        const delta = options.delta !== undefined ? options.delta : 1;
        const zoomInClassName = options.zoomInClassName !== undefined ? options.zoomInClassName : className + "-in";
        const zoomOutClassName = options.zoomOutClassName !== undefined ? options.zoomOutClassName : className + "-out";
        const zoomInLabel = options.zoomInLabel !== undefined ? options.zoomInLabel : "+";
        const zoomOutLabel = options.zoomOutLabel !== undefined ? options.zoomOutLabel : "–";
        const zoomInTipLabel = options.zoomInTipLabel !== undefined ? options.zoomInTipLabel : "Zoom in";
        const zoomOutTipLabel = options.zoomOutTipLabel !== undefined ? options.zoomOutTipLabel : "Zoom out";
        const inElement = document.createElement("button");
        inElement.className = zoomInClassName;
        inElement.setAttribute("type", "button");
        inElement.title = zoomInTipLabel;
        inElement.appendChild(typeof zoomInLabel === "string" ? document.createTextNode(zoomInLabel) : zoomInLabel);
        inElement.addEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CLICK, this.handleClick_.bind(this, delta), false);
        const outElement = document.createElement("button");
        outElement.className = zoomOutClassName;
        outElement.setAttribute("type", "button");
        outElement.title = zoomOutTipLabel;
        outElement.appendChild(typeof zoomOutLabel === "string" ? document.createTextNode(zoomOutLabel) : zoomOutLabel);
        outElement.addEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CLICK, this.handleClick_.bind(this, -delta), false);
        const cssClasses = className + " " + (0, $c84ed9b717f6ac2c$export$1afde3d6e16a7b29) + " " + (0, $c84ed9b717f6ac2c$export$4d4f8be70b656192);
        const element = this.element;
        element.className = cssClasses;
        element.appendChild(inElement);
        element.appendChild(outElement);
        /**
     * @type {number}
     * @private
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
    }
    /**
   * @param {number} delta Zoom delta.
   * @param {MouseEvent} event The event to handle
   * @private
   */ handleClick_(delta, event) {
        event.preventDefault();
        this.zoomByDelta_(delta);
    }
    /**
   * @param {number} delta Zoom delta.
   * @private
   */ zoomByDelta_(delta) {
        const map = this.getMap();
        const view = map.getView();
        if (!view) // the map does not have a view, so we can't act
        // upon it
        return;
        const currentZoom = view.getZoom();
        if (currentZoom !== undefined) {
            const newZoom = view.getConstrainedZoom(currentZoom + delta);
            if (this.duration_ > 0) {
                if (view.getAnimating()) view.cancelAnimations();
                view.animate({
                    zoom: newZoom,
                    duration: this.duration_,
                    easing: (0, $a827aa90539b5df5$export$57636bb43b1ccbb0)
                });
            } else view.setZoom(newZoom);
        }
    }
}
var $ce20d487e5a60428$export$2e2bcd8739ae039 = $ce20d487e5a60428$var$Zoom;


function $0d824765261be22c$export$ebe90cb607ad99e(options) {
    options = options ? options : {};
    /** @type {Collection<import("./Control.js").default>} */ const controls = new (0, $35790abb29cb875a$export$2e2bcd8739ae039)();
    const zoomControl = options.zoom !== undefined ? options.zoom : true;
    if (zoomControl) controls.push(new (0, $ce20d487e5a60428$export$2e2bcd8739ae039)(options.zoomOptions));
    const rotateControl = options.rotate !== undefined ? options.rotate : true;
    if (rotateControl) controls.push(new (0, $80e19c650750dc36$export$2e2bcd8739ae039)(options.rotateOptions));
    const attributionControl = options.attribution !== undefined ? options.attribution : true;
    if (attributionControl) controls.push(new (0, $66a29414109e9789$export$2e2bcd8739ae039)(options.attributionOptions));
    return controls;
}




var /**
 * @module ol/layer/TileProperty
 */ /**
 * @enum {string}
 */ $4a79e980c179d1fd$export$2e2bcd8739ae039 = {
    PRELOAD: "preload",
    USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError"
};


/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
 *     'change:source'|'change:preload'|'change:useInterimTilesOnError', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<import("../render/EventType").LayerRenderEventTypes, import("../render/Event").default, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|
 *   'change:source'|'change:preload'|'change:useInterimTilesOnError'|import("../render/EventType").LayerRenderEventTypes, Return>} BaseTileLayerOnSignature
 */ /**
 * @template {import("../source/Tile.js").default} TileSourceType
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {number} [preload=0] Preload. Load low-resolution tiles up to `preload` levels. `0`
 * means no preloading.
 * @property {TileSourceType} [source] Source for this layer.
 * @property {import("../Map.js").default} [map] Sets the layer as overlay on a map. The map will not manage
 * this layer in its layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it managed by the map is to
 * use {@link import("../Map.js").default#addLayer map.addLayer()}.
 * @property {boolean} [useInterimTilesOnError=true] Use interim tiles on error.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */ /**
 * @classdesc
 * For layer sources that provide pre-rendered, tiled images in grids that are
 * organized by zoom levels for specific resolutions.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @template {import("../source/Tile.js").default} TileSourceType
 * @template {import("../renderer/Layer.js").default} RendererType
 * @extends {Layer<TileSourceType, RendererType>}
 * @api
 */ class $431a00d72cc37875$var$BaseTileLayer extends (0, $462d96ef30c3e83d$export$2e2bcd8739ae039) {
    /**
   * @param {Options<TileSourceType>} [options] Tile layer options.
   */ constructor(options){
        options = options ? options : {};
        const baseOptions = Object.assign({}, options);
        delete baseOptions.preload;
        delete baseOptions.useInterimTilesOnError;
        super(baseOptions);
        /***
     * @type {BaseTileLayerOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {BaseTileLayerOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {BaseTileLayerOnSignature<void>}
     */ this.un;
        this.setPreload(options.preload !== undefined ? options.preload : 0);
        this.setUseInterimTilesOnError(options.useInterimTilesOnError !== undefined ? options.useInterimTilesOnError : true);
    }
    /**
   * Return the level as number to which we will preload tiles up to.
   * @return {number} The level to preload tiles up to.
   * @observable
   * @api
   */ getPreload() {
        return /** @type {number} */ this.get((0, $4a79e980c179d1fd$export$2e2bcd8739ae039).PRELOAD);
    }
    /**
   * Set the level as number to which we will preload tiles up to.
   * @param {number} preload The level to preload tiles up to.
   * @observable
   * @api
   */ setPreload(preload) {
        this.set((0, $4a79e980c179d1fd$export$2e2bcd8739ae039).PRELOAD, preload);
    }
    /**
   * Whether we use interim tiles on error.
   * @return {boolean} Use interim tiles on error.
   * @observable
   * @api
   */ getUseInterimTilesOnError() {
        return /** @type {boolean} */ this.get((0, $4a79e980c179d1fd$export$2e2bcd8739ae039).USE_INTERIM_TILES_ON_ERROR);
    }
    /**
   * Set whether we use interim tiles on error.
   * @param {boolean} useInterimTilesOnError Use interim tiles on error.
   * @observable
   * @api
   */ setUseInterimTilesOnError(useInterimTilesOnError) {
        this.set((0, $4a79e980c179d1fd$export$2e2bcd8739ae039).USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
    }
    /**
   * Get data for a pixel location.  The return type depends on the source data.  For image tiles,
   * a four element RGBA array will be returned.  For data tiles, the array length will match the
   * number of bands in the dataset.  For requests outside the layer extent, `null` will be returned.
   * Data for a image tiles can only be retrieved if the source's `crossOrigin` property is set.
   *
   * ```js
   * // display layer data on every pointer move
   * map.on('pointermove', (event) => {
   *   console.log(layer.getData(event.pixel));
   * });
   * ```
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   * @api
   */ getData(pixel) {
        return super.getData(pixel);
    }
}
var $431a00d72cc37875$export$2e2bcd8739ae039 = $431a00d72cc37875$var$BaseTileLayer;



var /**
 * @module ol/ImageState
 */ /**
 * @enum {number}
 */ $9c13a69a156c0690$export$2e2bcd8739ae039 = {
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    ERROR: 3,
    EMPTY: 4
};




/**
 * @template {import("../layer/Layer.js").default} LayerType
 */ class $7c6d0480f65a0a34$var$LayerRenderer extends (0, $4f3f0e7d5fcd1b71$export$2e2bcd8739ae039) {
    /**
   * @param {LayerType} layer Layer.
   */ constructor(layer){
        super();
        /**
     * The renderer is initialized and ready to render.
     * @type {boolean}
     */ this.ready = true;
        /** @private */ this.boundHandleImageChange_ = this.handleImageChange_.bind(this);
        /**
     * @protected
     * @type {LayerType}
     */ this.layer_ = layer;
        /**
     * @type {import("../render/canvas/ExecutorGroup").default}
     */ this.declutterExecutorGroup = null;
    }
    /**
   * Asynchronous layer level hit detection.
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").default>>} Promise that resolves with
   * an array of features.
   */ getFeatures(pixel) {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */ getData(pixel) {
        return null;
    }
    /**
   * Determine whether render should be called.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */ prepareFrame(frameState) {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Render the layer.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */ renderFrame(frameState, target) {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */ loadedTileCallback(tiles, zoom, tile) {
        if (!tiles[zoom]) tiles[zoom] = {};
        tiles[zoom][tile.tileCoord.toString()] = tile;
        return undefined;
    }
    /**
   * Create a function that adds loaded tiles to the tile lookup.
   * @param {import("../source/Tile.js").default} source Tile source.
   * @param {import("../proj/Projection.js").default} projection Projection of the tiles.
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @return {function(number, import("../TileRange.js").default):boolean} A function that can be
   *     called with a zoom level and a tile range to add loaded tiles to the lookup.
   * @protected
   */ createLoadedTileFinder(source, projection, tiles) {
        return(/**
       * @param {number} zoom Zoom level.
       * @param {import("../TileRange.js").default} tileRange Tile range.
       * @return {boolean} The tile range is fully loaded.
       * @this {LayerRenderer}
       */ (function(zoom, tileRange) {
            const callback = this.loadedTileCallback.bind(this, tiles, zoom);
            return source.forEachLoadedTile(projection, zoom, tileRange, callback);
        }).bind(this));
    }
    /**
   * @abstract
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   */ forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
        return undefined;
    }
    /**
   * @return {LayerType} Layer.
   */ getLayer() {
        return this.layer_;
    }
    /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @abstract
   */ handleFontsChanged() {}
    /**
   * Handle changes in image state.
   * @param {import("../events/Event.js").default} event Image change event.
   * @private
   */ handleImageChange_(event) {
        const image = event.target;
        if (image.getState() === (0, $9c13a69a156c0690$export$2e2bcd8739ae039).LOADED) this.renderIfReadyAndVisible();
    }
    /**
   * Load the image if not already loaded, and register the image change
   * listener if needed.
   * @param {import("../ImageBase.js").default} image Image.
   * @return {boolean} `true` if the image is already loaded, `false` otherwise.
   * @protected
   */ loadImage(image) {
        let imageState = image.getState();
        if (imageState != (0, $9c13a69a156c0690$export$2e2bcd8739ae039).LOADED && imageState != (0, $9c13a69a156c0690$export$2e2bcd8739ae039).ERROR) image.addEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE, this.boundHandleImageChange_);
        if (imageState == (0, $9c13a69a156c0690$export$2e2bcd8739ae039).IDLE) {
            image.load();
            imageState = image.getState();
        }
        return imageState == (0, $9c13a69a156c0690$export$2e2bcd8739ae039).LOADED;
    }
    /**
   * @protected
   */ renderIfReadyAndVisible() {
        const layer = this.getLayer();
        if (layer && layer.getVisible() && layer.getSourceState() === "ready") layer.changed();
    }
    /**
   * Clean up.
   */ disposeInternal() {
        delete this.layer_;
        super.disposeInternal();
    }
}
var $7c6d0480f65a0a34$export$2e2bcd8739ae039 = $7c6d0480f65a0a34$var$LayerRenderer;



class $885cd6d8e2e8534a$var$RenderEvent extends (0, $f3a6f6cab00ac278$export$2e2bcd8739ae039) {
    /**
   * @param {import("./EventType.js").default} type Type.
   * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
   *     CSS pixels to rendered pixels.
   * @param {import("../Map.js").FrameState} [frameState] Frame state.
   * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
   */ constructor(type, inversePixelTransform, frameState, context){
        super(type);
        /**
     * Transform from CSS pixels (relative to the top-left corner of the map viewport)
     * to rendered pixels on this event's `context`. Only available when a Canvas renderer is used, null otherwise.
     * @type {import("../transform.js").Transform|undefined}
     * @api
     */ this.inversePixelTransform = inversePixelTransform;
        /**
     * An object representing the current render frame state.
     * @type {import("../Map.js").FrameState|undefined}
     * @api
     */ this.frameState = frameState;
        /**
     * Canvas context. Not available when the event is dispatched by the map. For Canvas 2D layers,
     * the context will be the 2D rendering context.  For WebGL layers, the context will be the WebGL
     * context.
     * @type {CanvasRenderingContext2D|WebGLRenderingContext|undefined}
     * @api
     */ this.context = context;
    }
}
var $885cd6d8e2e8534a$export$2e2bcd8739ae039 = $885cd6d8e2e8534a$var$RenderEvent;





/**
 * An array representing an affine 2d transformation for use with
 * {@link module:ol/transform} functions. The array has 6 elements.
 * @typedef {!Array<number>} Transform
 * @api
 */ /**
 * Collection of affine 2d transformation functions. The functions work on an
 * array of 6 elements. The element order is compatible with the [SVGMatrix
 * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
 * a subset (elements a to f) of a 3×3 matrix:
 * ```
 * [ a c e ]
 * [ b d f ]
 * [ 0 0 1 ]
 * ```
 */ /**
 * @private
 * @type {Transform}
 */ const $0e89e72515351739$var$tmp_ = new Array(6);
function $0e89e72515351739$export$185802fd694ee1f5() {
    return [
        1,
        0,
        0,
        1,
        0,
        0
    ];
}
function $0e89e72515351739$export$aad8462122ac592b(transform) {
    return $0e89e72515351739$export$adaa4cf7ef1b65be(transform, 1, 0, 0, 1, 0, 0);
}
function $0e89e72515351739$export$2060d2db72cce88f(transform1, transform2) {
    const a1 = transform1[0];
    const b1 = transform1[1];
    const c1 = transform1[2];
    const d1 = transform1[3];
    const e1 = transform1[4];
    const f1 = transform1[5];
    const a2 = transform2[0];
    const b2 = transform2[1];
    const c2 = transform2[2];
    const d2 = transform2[3];
    const e2 = transform2[4];
    const f2 = transform2[5];
    transform1[0] = a1 * a2 + c1 * b2;
    transform1[1] = b1 * a2 + d1 * b2;
    transform1[2] = a1 * c2 + c1 * d2;
    transform1[3] = b1 * c2 + d1 * d2;
    transform1[4] = a1 * e2 + c1 * f2 + e1;
    transform1[5] = b1 * e2 + d1 * f2 + f1;
    return transform1;
}
function $0e89e72515351739$export$adaa4cf7ef1b65be(transform, a, b, c, d, e, f) {
    transform[0] = a;
    transform[1] = b;
    transform[2] = c;
    transform[3] = d;
    transform[4] = e;
    transform[5] = f;
    return transform;
}
function $0e89e72515351739$export$42b4187a82d80ed0(transform1, transform2) {
    transform1[0] = transform2[0];
    transform1[1] = transform2[1];
    transform1[2] = transform2[2];
    transform1[3] = transform2[3];
    transform1[4] = transform2[4];
    transform1[5] = transform2[5];
    return transform1;
}
function $0e89e72515351739$export$5635d7ef4b8fee1c(transform, coordinate) {
    const x = coordinate[0];
    const y = coordinate[1];
    coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
    coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
    return coordinate;
}
function $0e89e72515351739$export$bb628a54ab399bc9(transform, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return $0e89e72515351739$export$2060d2db72cce88f(transform, $0e89e72515351739$export$adaa4cf7ef1b65be($0e89e72515351739$var$tmp_, cos, sin, -sin, cos, 0, 0));
}
function $0e89e72515351739$export$dcdf75081b88279d(transform, x, y) {
    return $0e89e72515351739$export$2060d2db72cce88f(transform, $0e89e72515351739$export$adaa4cf7ef1b65be($0e89e72515351739$var$tmp_, x, 0, 0, y, 0, 0));
}
function $0e89e72515351739$export$3e4e33ea14aeb531(target, x, y) {
    return $0e89e72515351739$export$adaa4cf7ef1b65be(target, x, 0, 0, y, 0, 0);
}
function $0e89e72515351739$export$d73ee8ef04f5226a(transform, dx, dy) {
    return $0e89e72515351739$export$2060d2db72cce88f(transform, $0e89e72515351739$export$adaa4cf7ef1b65be($0e89e72515351739$var$tmp_, 1, 0, 0, 1, dx, dy));
}
function $0e89e72515351739$export$f672e0b6f7222cd7(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    transform[0] = sx * cos;
    transform[1] = sy * sin;
    transform[2] = -sx * sin;
    transform[3] = sy * cos;
    transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
    transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
    return transform;
}
function $0e89e72515351739$export$12a96a1aaf5558e3(dx1, dy1, sx, sy, angle, dx2, dy2) {
    return $0e89e72515351739$export$f84e8e69fd4488a5($0e89e72515351739$export$f672e0b6f7222cd7($0e89e72515351739$export$185802fd694ee1f5(), dx1, dy1, sx, sy, angle, dx2, dy2));
}
function $0e89e72515351739$export$6897c284b6f9f4dc(source) {
    return $0e89e72515351739$export$bd70ea2a93c0fa4(source, source);
}
function $0e89e72515351739$export$bd70ea2a93c0fa4(target, source) {
    const det = $0e89e72515351739$export$a04698f914c55ed9(source);
    (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(det !== 0, 32); // Transformation matrix cannot be inverted
    const a = source[0];
    const b = source[1];
    const c = source[2];
    const d = source[3];
    const e = source[4];
    const f = source[5];
    target[0] = d / det;
    target[1] = -b / det;
    target[2] = -c / det;
    target[3] = a / det;
    target[4] = (c * f - d * e) / det;
    target[5] = -(a * f - b * e) / det;
    return target;
}
function $0e89e72515351739$export$a04698f914c55ed9(mat) {
    return mat[0] * mat[3] - mat[1] * mat[2];
}
/**
 * @type {HTMLElement}
 * @private
 */ let $0e89e72515351739$var$transformStringDiv;
function $0e89e72515351739$export$f84e8e69fd4488a5(mat) {
    const transformString = "matrix(" + mat.join(", ") + ")";
    if (0, $03af6b5c3e46892e$export$98fcef3dc9973292) return transformString;
    const node = $0e89e72515351739$var$transformStringDiv || ($0e89e72515351739$var$transformStringDiv = document.createElement("div"));
    node.style.transform = transformString;
    return node.style.transform;
}




/**
 * A color represented as a short array [red, green, blue, alpha].
 * red, green, and blue should be integers in the range 0..255 inclusive.
 * alpha should be a float in the range 0..1 inclusive. If no alpha value is
 * given then `1` will be used.
 * @typedef {Array<number>} Color
 * @api
 */ /**
 * This RegExp matches # followed by 3, 4, 6, or 8 hex digits.
 * @const
 * @type {RegExp}
 * @private
 */ const $e4ed5d48cbd18f08$var$HEX_COLOR_RE_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;
/**
 * Regular expression for matching potential named color style strings.
 * @const
 * @type {RegExp}
 * @private
 */ const $e4ed5d48cbd18f08$var$NAMED_COLOR_RE_ = /^([a-z]*)$|^hsla?\(.*\)$/i;
function $e4ed5d48cbd18f08$export$590567be997858b6(color) {
    if (typeof color === "string") return color;
    else return $e4ed5d48cbd18f08$export$f84e8e69fd4488a5(color);
}
/**
 * Return named color as an rgba string.
 * @param {string} color Named color.
 * @return {string} Rgb string.
 */ function $e4ed5d48cbd18f08$var$fromNamed(color) {
    const el = document.createElement("div");
    el.style.color = color;
    if (el.style.color !== "") {
        document.body.appendChild(el);
        const rgb = getComputedStyle(el).color;
        document.body.removeChild(el);
        return rgb;
    } else return "";
}
const $e4ed5d48cbd18f08$export$3004f64547af360e = function() {
    // We maintain a small cache of parsed strings.  To provide cheap LRU-like
    // semantics, whenever the cache grows too large we simply delete an
    // arbitrary 25% of the entries.
    /**
   * @const
   * @type {number}
   */ const MAX_CACHE_SIZE = 1024;
    /**
   * @type {Object<string, Color>}
   */ const cache = {};
    /**
   * @type {number}
   */ let cacheSize = 0;
    return(/**
     * @param {string} s String.
     * @return {Color} Color.
     */ function(s) {
        let color;
        if (cache.hasOwnProperty(s)) color = cache[s];
        else {
            if (cacheSize >= MAX_CACHE_SIZE) {
                let i = 0;
                for(const key in cache)if (((i++) & 3) === 0) {
                    delete cache[key];
                    --cacheSize;
                }
            }
            color = $e4ed5d48cbd18f08$var$fromStringInternal_(s);
            cache[s] = color;
            ++cacheSize;
        }
        return color;
    });
}();
function $e4ed5d48cbd18f08$export$75093a47a9fa838d(color) {
    if (Array.isArray(color)) return color;
    else return $e4ed5d48cbd18f08$export$3004f64547af360e(color);
}
/**
 * @param {string} s String.
 * @private
 * @return {Color} Color.
 */ function $e4ed5d48cbd18f08$var$fromStringInternal_(s) {
    let r, g, b, a, color;
    if ($e4ed5d48cbd18f08$var$NAMED_COLOR_RE_.exec(s)) s = $e4ed5d48cbd18f08$var$fromNamed(s);
    if ($e4ed5d48cbd18f08$var$HEX_COLOR_RE_.exec(s)) {
        // hex
        const n = s.length - 1; // number of hex digits
        let d; // number of digits per channel
        if (n <= 4) d = 1;
        else d = 2;
        const hasAlpha = n === 4 || n === 8;
        r = parseInt(s.substr(1 + 0 * d, d), 16);
        g = parseInt(s.substr(1 + 1 * d, d), 16);
        b = parseInt(s.substr(1 + 2 * d, d), 16);
        if (hasAlpha) a = parseInt(s.substr(1 + 3 * d, d), 16);
        else a = 255;
        if (d == 1) {
            r = (r << 4) + r;
            g = (g << 4) + g;
            b = (b << 4) + b;
            if (hasAlpha) a = (a << 4) + a;
        }
        color = [
            r,
            g,
            b,
            a / 255
        ];
    } else if (s.startsWith("rgba(")) {
        // rgba()
        color = s.slice(5, -1).split(",").map(Number);
        $e4ed5d48cbd18f08$export$a3295358bff77e(color);
    } else if (s.startsWith("rgb(")) {
        // rgb()
        color = s.slice(4, -1).split(",").map(Number);
        color.push(1);
        $e4ed5d48cbd18f08$export$a3295358bff77e(color);
    } else (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(false, 14); // Invalid color
    return color;
}
function $e4ed5d48cbd18f08$export$a3295358bff77e(color) {
    color[0] = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(color[0] + 0.5 | 0, 0, 255);
    color[1] = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(color[1] + 0.5 | 0, 0, 255);
    color[2] = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(color[2] + 0.5 | 0, 0, 255);
    color[3] = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(color[3], 0, 1);
    return color;
}
function $e4ed5d48cbd18f08$export$f84e8e69fd4488a5(color) {
    let r = color[0];
    if (r != (r | 0)) r = r + 0.5 | 0;
    let g = color[1];
    if (g != (g | 0)) g = g + 0.5 | 0;
    let b = color[2];
    if (b != (b | 0)) b = b + 0.5 | 0;
    const a = color[3] === undefined ? 1 : Math.round(color[3] * 100) / 100;
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
function $e4ed5d48cbd18f08$export$40dd713d7775a0b1(s) {
    if ($e4ed5d48cbd18f08$var$NAMED_COLOR_RE_.test(s)) s = $e4ed5d48cbd18f08$var$fromNamed(s);
    return $e4ed5d48cbd18f08$var$HEX_COLOR_RE_.test(s) || s.startsWith("rgba(") || s.startsWith("rgb(");
}




var /**
 * @module ol/extent/Relationship
 */ /**
 * Relationship to an extent.
 * @enum {number}
 */ $53adfea2fc7c1e86$export$2e2bcd8739ae039 = {
    UNKNOWN: 0,
    INTERSECTING: 1,
    ABOVE: 2,
    RIGHT: 4,
    BELOW: 8,
    LEFT: 16
};



function $ee16b51bb9f86500$export$8aceca7c77505534(coordinates) {
    const extent = $ee16b51bb9f86500$export$fe201bb3bbe031e9();
    for(let i = 0, ii = coordinates.length; i < ii; ++i)$ee16b51bb9f86500$export$1f820e3920fa5715(extent, coordinates[i]);
    return extent;
}
/**
 * @param {Array<number>} xs Xs.
 * @param {Array<number>} ys Ys.
 * @param {Extent} [dest] Destination extent.
 * @private
 * @return {Extent} Extent.
 */ function $ee16b51bb9f86500$var$_boundingExtentXYs(xs, ys, dest) {
    const minX = Math.min.apply(null, xs);
    const minY = Math.min.apply(null, ys);
    const maxX = Math.max.apply(null, xs);
    const maxY = Math.max.apply(null, ys);
    return $ee16b51bb9f86500$export$958e3e1a02eac4b6(minX, minY, maxX, maxY, dest);
}
function $ee16b51bb9f86500$export$ab1029bcae9ddb4a(extent, value, dest) {
    if (dest) {
        dest[0] = extent[0] - value;
        dest[1] = extent[1] - value;
        dest[2] = extent[2] + value;
        dest[3] = extent[3] + value;
        return dest;
    } else return [
        extent[0] - value,
        extent[1] - value,
        extent[2] + value,
        extent[3] + value, 
    ];
}
function $ee16b51bb9f86500$export$9cd59f9826255e47(extent, dest) {
    if (dest) {
        dest[0] = extent[0];
        dest[1] = extent[1];
        dest[2] = extent[2];
        dest[3] = extent[3];
        return dest;
    } else return extent.slice();
}
function $ee16b51bb9f86500$export$cbe64c389534206f(extent, x, y) {
    let dx, dy;
    if (x < extent[0]) dx = extent[0] - x;
    else if (extent[2] < x) dx = x - extent[2];
    else dx = 0;
    if (y < extent[1]) dy = extent[1] - y;
    else if (extent[3] < y) dy = y - extent[3];
    else dy = 0;
    return dx * dx + dy * dy;
}
function $ee16b51bb9f86500$export$ac68c24d37ca240f(extent, coordinate) {
    return $ee16b51bb9f86500$export$805bdfd6d6690e97(extent, coordinate[0], coordinate[1]);
}
function $ee16b51bb9f86500$export$be866b1e0809b17e(extent1, extent2) {
    return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] && extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
}
function $ee16b51bb9f86500$export$805bdfd6d6690e97(extent, x, y) {
    return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}
function $ee16b51bb9f86500$export$f97905ead28c61a8(extent, coordinate) {
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const x = coordinate[0];
    const y = coordinate[1];
    let relationship = (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).UNKNOWN;
    if (x < minX) relationship = relationship | (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).LEFT;
    else if (x > maxX) relationship = relationship | (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).RIGHT;
    if (y < minY) relationship = relationship | (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).BELOW;
    else if (y > maxY) relationship = relationship | (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).ABOVE;
    if (relationship === (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).UNKNOWN) relationship = (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).INTERSECTING;
    return relationship;
}
function $ee16b51bb9f86500$export$fe201bb3bbe031e9() {
    return [
        Infinity,
        Infinity,
        -Infinity,
        -Infinity
    ];
}
function $ee16b51bb9f86500$export$958e3e1a02eac4b6(minX, minY, maxX, maxY, dest) {
    if (dest) {
        dest[0] = minX;
        dest[1] = minY;
        dest[2] = maxX;
        dest[3] = maxY;
        return dest;
    } else return [
        minX,
        minY,
        maxX,
        maxY
    ];
}
function $ee16b51bb9f86500$export$3e2152b047719fa1(dest) {
    return $ee16b51bb9f86500$export$958e3e1a02eac4b6(Infinity, Infinity, -Infinity, -Infinity, dest);
}
function $ee16b51bb9f86500$export$4838bf78d04a9440(coordinate, dest) {
    const x = coordinate[0];
    const y = coordinate[1];
    return $ee16b51bb9f86500$export$958e3e1a02eac4b6(x, y, x, y, dest);
}
function $ee16b51bb9f86500$export$29e3ad4dbd0cb863(coordinates, dest) {
    const extent = $ee16b51bb9f86500$export$3e2152b047719fa1(dest);
    return $ee16b51bb9f86500$export$795cd48be4d5f252(extent, coordinates);
}
function $ee16b51bb9f86500$export$be0ab0bf96ca59ca(flatCoordinates, offset, end, stride, dest) {
    const extent = $ee16b51bb9f86500$export$3e2152b047719fa1(dest);
    return $ee16b51bb9f86500$export$30570204156ffd18(extent, flatCoordinates, offset, end, stride);
}
function $ee16b51bb9f86500$export$73b4897e93bc5c83(rings, dest) {
    const extent = $ee16b51bb9f86500$export$3e2152b047719fa1(dest);
    return $ee16b51bb9f86500$export$9b319549574402d7(extent, rings);
}
function $ee16b51bb9f86500$export$e9bab7fafb253603(extent1, extent2) {
    return extent1[0] == extent2[0] && extent1[2] == extent2[2] && extent1[1] == extent2[1] && extent1[3] == extent2[3];
}
function $ee16b51bb9f86500$export$998afeab28643bd6(extent1, extent2, tolerance) {
    return Math.abs(extent1[0] - extent2[0]) < tolerance && Math.abs(extent1[2] - extent2[2]) < tolerance && Math.abs(extent1[1] - extent2[1]) < tolerance && Math.abs(extent1[3] - extent2[3]) < tolerance;
}
function $ee16b51bb9f86500$export$8b58be045bf06082(extent1, extent2) {
    if (extent2[0] < extent1[0]) extent1[0] = extent2[0];
    if (extent2[2] > extent1[2]) extent1[2] = extent2[2];
    if (extent2[1] < extent1[1]) extent1[1] = extent2[1];
    if (extent2[3] > extent1[3]) extent1[3] = extent2[3];
    return extent1;
}
function $ee16b51bb9f86500$export$1f820e3920fa5715(extent, coordinate) {
    if (coordinate[0] < extent[0]) extent[0] = coordinate[0];
    if (coordinate[0] > extent[2]) extent[2] = coordinate[0];
    if (coordinate[1] < extent[1]) extent[1] = coordinate[1];
    if (coordinate[1] > extent[3]) extent[3] = coordinate[1];
}
function $ee16b51bb9f86500$export$795cd48be4d5f252(extent, coordinates) {
    for(let i = 0, ii = coordinates.length; i < ii; ++i)$ee16b51bb9f86500$export$1f820e3920fa5715(extent, coordinates[i]);
    return extent;
}
function $ee16b51bb9f86500$export$30570204156ffd18(extent, flatCoordinates, offset, end, stride) {
    for(; offset < end; offset += stride)$ee16b51bb9f86500$export$f1dab130b92b85a9(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
    return extent;
}
function $ee16b51bb9f86500$export$9b319549574402d7(extent, rings) {
    for(let i = 0, ii = rings.length; i < ii; ++i)$ee16b51bb9f86500$export$795cd48be4d5f252(extent, rings[i]);
    return extent;
}
function $ee16b51bb9f86500$export$f1dab130b92b85a9(extent, x, y) {
    extent[0] = Math.min(extent[0], x);
    extent[1] = Math.min(extent[1], y);
    extent[2] = Math.max(extent[2], x);
    extent[3] = Math.max(extent[3], y);
}
function $ee16b51bb9f86500$export$f9ed8a3d123a08e2(extent, callback) {
    let val;
    val = callback($ee16b51bb9f86500$export$8d09f5e2e1bf560d(extent));
    if (val) return val;
    val = callback($ee16b51bb9f86500$export$e77c1cf70445e168(extent));
    if (val) return val;
    val = callback($ee16b51bb9f86500$export$b84fa077c8b05295(extent));
    if (val) return val;
    val = callback($ee16b51bb9f86500$export$cb1538b07e6964ff(extent));
    if (val) return val;
    return false;
}
function $ee16b51bb9f86500$export$520c40045967cb15(extent) {
    let area = 0;
    if (!$ee16b51bb9f86500$export$dd1bc94b04021eeb(extent)) area = $ee16b51bb9f86500$export$3c49c185de0c2bfc(extent) * $ee16b51bb9f86500$export$c08559766941f856(extent);
    return area;
}
function $ee16b51bb9f86500$export$8d09f5e2e1bf560d(extent) {
    return [
        extent[0],
        extent[1]
    ];
}
function $ee16b51bb9f86500$export$e77c1cf70445e168(extent) {
    return [
        extent[2],
        extent[1]
    ];
}
function $ee16b51bb9f86500$export$c91255cadecfe081(extent) {
    return [
        (extent[0] + extent[2]) / 2,
        (extent[1] + extent[3]) / 2
    ];
}
function $ee16b51bb9f86500$export$a1cfd206661d0801(extent, corner) {
    let coordinate;
    if (corner === "bottom-left") coordinate = $ee16b51bb9f86500$export$8d09f5e2e1bf560d(extent);
    else if (corner === "bottom-right") coordinate = $ee16b51bb9f86500$export$e77c1cf70445e168(extent);
    else if (corner === "top-left") coordinate = $ee16b51bb9f86500$export$cb1538b07e6964ff(extent);
    else if (corner === "top-right") coordinate = $ee16b51bb9f86500$export$b84fa077c8b05295(extent);
    else (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(false, 13); // Invalid corner
    return coordinate;
}
function $ee16b51bb9f86500$export$7d6fa884b32a3751(extent1, extent2) {
    const minX = Math.min(extent1[0], extent2[0]);
    const minY = Math.min(extent1[1], extent2[1]);
    const maxX = Math.max(extent1[2], extent2[2]);
    const maxY = Math.max(extent1[3], extent2[3]);
    return (maxX - minX) * (maxY - minY);
}
function $ee16b51bb9f86500$export$13ba650faf8308(center, resolution, rotation, size, dest) {
    const [x0, y0, x1, y1, x2, y2, x3, y3] = $ee16b51bb9f86500$export$4b7a6fb4002cd6ac(center, resolution, rotation, size);
    return $ee16b51bb9f86500$export$958e3e1a02eac4b6(Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3), Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3), dest);
}
function $ee16b51bb9f86500$export$4b7a6fb4002cd6ac(center, resolution, rotation, size) {
    const dx = resolution * size[0] / 2;
    const dy = resolution * size[1] / 2;
    const cosRotation = Math.cos(rotation);
    const sinRotation = Math.sin(rotation);
    const xCos = dx * cosRotation;
    const xSin = dx * sinRotation;
    const yCos = dy * cosRotation;
    const ySin = dy * sinRotation;
    const x = center[0];
    const y = center[1];
    return [
        x - xCos + ySin,
        y - xSin - yCos,
        x - xCos - ySin,
        y - xSin + yCos,
        x + xCos - ySin,
        y + xSin + yCos,
        x + xCos + ySin,
        y + xSin - yCos,
        x - xCos + ySin,
        y - xSin - yCos, 
    ];
}
function $ee16b51bb9f86500$export$c08559766941f856(extent) {
    return extent[3] - extent[1];
}
function $ee16b51bb9f86500$export$f3fe0e9a60cde324(extent1, extent2) {
    const intersection = $ee16b51bb9f86500$export$72209efa88586d42(extent1, extent2);
    return $ee16b51bb9f86500$export$520c40045967cb15(intersection);
}
function $ee16b51bb9f86500$export$72209efa88586d42(extent1, extent2, dest) {
    const intersection = dest ? dest : $ee16b51bb9f86500$export$fe201bb3bbe031e9();
    if ($ee16b51bb9f86500$export$7b0a31e10bbff018(extent1, extent2)) {
        if (extent1[0] > extent2[0]) intersection[0] = extent1[0];
        else intersection[0] = extent2[0];
        if (extent1[1] > extent2[1]) intersection[1] = extent1[1];
        else intersection[1] = extent2[1];
        if (extent1[2] < extent2[2]) intersection[2] = extent1[2];
        else intersection[2] = extent2[2];
        if (extent1[3] < extent2[3]) intersection[3] = extent1[3];
        else intersection[3] = extent2[3];
    } else $ee16b51bb9f86500$export$3e2152b047719fa1(intersection);
    return intersection;
}
function $ee16b51bb9f86500$export$1bc603050bd777b1(extent) {
    return $ee16b51bb9f86500$export$3c49c185de0c2bfc(extent) + $ee16b51bb9f86500$export$c08559766941f856(extent);
}
function $ee16b51bb9f86500$export$31b21d0167753bb4(extent) {
    return [
        extent[2] - extent[0],
        extent[3] - extent[1]
    ];
}
function $ee16b51bb9f86500$export$cb1538b07e6964ff(extent) {
    return [
        extent[0],
        extent[3]
    ];
}
function $ee16b51bb9f86500$export$b84fa077c8b05295(extent) {
    return [
        extent[2],
        extent[3]
    ];
}
function $ee16b51bb9f86500$export$3c49c185de0c2bfc(extent) {
    return extent[2] - extent[0];
}
function $ee16b51bb9f86500$export$7b0a31e10bbff018(extent1, extent2) {
    return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
}
function $ee16b51bb9f86500$export$dd1bc94b04021eeb(extent) {
    return extent[2] < extent[0] || extent[3] < extent[1];
}
function $ee16b51bb9f86500$export$6a4fe494c558c238(extent, dest) {
    if (dest) {
        dest[0] = extent[0];
        dest[1] = extent[1];
        dest[2] = extent[2];
        dest[3] = extent[3];
        return dest;
    } else return extent;
}
function $ee16b51bb9f86500$export$80cbab86674143b6(extent, value) {
    const deltaX = (extent[2] - extent[0]) / 2 * (value - 1);
    const deltaY = (extent[3] - extent[1]) / 2 * (value - 1);
    extent[0] -= deltaX;
    extent[2] += deltaX;
    extent[1] -= deltaY;
    extent[3] += deltaY;
}
function $ee16b51bb9f86500$export$a6a5a7a461419425(extent, start, end) {
    let intersects = false;
    const startRel = $ee16b51bb9f86500$export$f97905ead28c61a8(extent, start);
    const endRel = $ee16b51bb9f86500$export$f97905ead28c61a8(extent, end);
    if (startRel === (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).INTERSECTING || endRel === (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).INTERSECTING) intersects = true;
    else {
        const minX = extent[0];
        const minY = extent[1];
        const maxX = extent[2];
        const maxY = extent[3];
        const startX = start[0];
        const startY = start[1];
        const endX = end[0];
        const endY = end[1];
        const slope = (endY - startY) / (endX - startX);
        let x, y;
        if (!!(endRel & (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).ABOVE) && !(startRel & (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).ABOVE)) {
            // potentially intersects top
            x = endX - (endY - maxY) / slope;
            intersects = x >= minX && x <= maxX;
        }
        if (!intersects && !!(endRel & (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).RIGHT) && !(startRel & (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).RIGHT)) {
            // potentially intersects right
            y = endY - (endX - maxX) * slope;
            intersects = y >= minY && y <= maxY;
        }
        if (!intersects && !!(endRel & (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).BELOW) && !(startRel & (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).BELOW)) {
            // potentially intersects bottom
            x = endX - (endY - minY) / slope;
            intersects = x >= minX && x <= maxX;
        }
        if (!intersects && !!(endRel & (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).LEFT) && !(startRel & (0, $53adfea2fc7c1e86$export$2e2bcd8739ae039).LEFT)) {
            // potentially intersects left
            y = endY - (endX - minX) * slope;
            intersects = y >= minY && y <= maxY;
        }
    }
    return intersects;
}
function $ee16b51bb9f86500$export$9f9dcb98c894b623(extent, transformFn, dest, stops) {
    let coordinates = [];
    if (stops > 1) {
        const width = extent[2] - extent[0];
        const height = extent[3] - extent[1];
        for(let i = 0; i < stops; ++i)coordinates.push(extent[0] + width * i / stops, extent[1], extent[2], extent[1] + height * i / stops, extent[2] - width * i / stops, extent[3], extent[0], extent[3] - height * i / stops);
    } else coordinates = [
        extent[0],
        extent[1],
        extent[2],
        extent[1],
        extent[2],
        extent[3],
        extent[0],
        extent[3], 
    ];
    transformFn(coordinates, coordinates, 2);
    const xs = [];
    const ys = [];
    for(let i1 = 0, l = coordinates.length; i1 < l; i1 += 2){
        xs.push(coordinates[i1]);
        ys.push(coordinates[i1 + 1]);
    }
    return $ee16b51bb9f86500$var$_boundingExtentXYs(xs, ys, dest);
}
function $ee16b51bb9f86500$export$39a9ce3624977b84(extent, projection) {
    const projectionExtent = projection.getExtent();
    const center = $ee16b51bb9f86500$export$c91255cadecfe081(extent);
    if (projection.canWrapX() && (center[0] < projectionExtent[0] || center[0] >= projectionExtent[2])) {
        const worldWidth = $ee16b51bb9f86500$export$3c49c185de0c2bfc(projectionExtent);
        const worldsAway = Math.floor((center[0] - projectionExtent[0]) / worldWidth);
        const offset = worldsAway * worldWidth;
        extent[0] -= offset;
        extent[2] -= offset;
    }
    return extent;
}
function $ee16b51bb9f86500$export$9031237f01de0947(extent, projection) {
    if (projection.canWrapX()) {
        const projectionExtent = projection.getExtent();
        if (!isFinite(extent[0]) || !isFinite(extent[2])) return [
            [
                projectionExtent[0],
                extent[1],
                projectionExtent[2],
                extent[3]
            ]
        ];
        $ee16b51bb9f86500$export$39a9ce3624977b84(extent, projection);
        const worldWidth = $ee16b51bb9f86500$export$3c49c185de0c2bfc(projectionExtent);
        if ($ee16b51bb9f86500$export$3c49c185de0c2bfc(extent) > worldWidth) // the extent wraps around on itself
        return [
            [
                projectionExtent[0],
                extent[1],
                projectionExtent[2],
                extent[3]
            ]
        ];
        else if (extent[0] < projectionExtent[0]) // the extent crosses the anti meridian, so it needs to be sliced
        return [
            [
                extent[0] + worldWidth,
                extent[1],
                projectionExtent[2],
                extent[3]
            ],
            [
                projectionExtent[0],
                extent[1],
                extent[2],
                extent[3]
            ], 
        ];
        else if (extent[2] > projectionExtent[2]) // the extent crosses the anti meridian, so it needs to be sliced
        return [
            [
                extent[0],
                extent[1],
                projectionExtent[2],
                extent[3]
            ],
            [
                projectionExtent[0],
                extent[1],
                extent[2] - worldWidth,
                extent[3]
            ], 
        ];
    }
    return [
        extent
    ];
}


const $f2f77997c6cc489a$export$a166f0857c555517 = [];
/**
 * @type {CanvasRenderingContext2D}
 */ let $f2f77997c6cc489a$var$pixelContext = null;
function $f2f77997c6cc489a$var$createPixelContext() {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    $f2f77997c6cc489a$var$pixelContext = canvas.getContext("2d");
}
/**
 * @abstract
 * @template {import("../../layer/Layer.js").default} LayerType
 * @extends {LayerRenderer<LayerType>}
 */ class $f2f77997c6cc489a$var$CanvasLayerRenderer extends (0, $7c6d0480f65a0a34$export$2e2bcd8739ae039) {
    /**
   * @param {LayerType} layer Layer.
   */ constructor(layer){
        super(layer);
        /**
     * @protected
     * @type {HTMLElement}
     */ this.container = null;
        /**
     * @protected
     * @type {number}
     */ this.renderedResolution;
        /**
     * A temporary transform.  The values in this transform should only be used in a
     * function that sets the values.
     * @protected
     * @type {import("../../transform.js").Transform}
     */ this.tempTransform = (0, $0e89e72515351739$export$185802fd694ee1f5)();
        /**
     * The transform for rendered pixels to viewport CSS pixels.  This transform must
     * be set when rendering a frame and may be used by other functions after rendering.
     * @protected
     * @type {import("../../transform.js").Transform}
     */ this.pixelTransform = (0, $0e89e72515351739$export$185802fd694ee1f5)();
        /**
     * The transform for viewport CSS pixels to rendered pixels.  This transform must
     * be set when rendering a frame and may be used by other functions after rendering.
     * @protected
     * @type {import("../../transform.js").Transform}
     */ this.inversePixelTransform = (0, $0e89e72515351739$export$185802fd694ee1f5)();
        /**
     * @type {CanvasRenderingContext2D}
     */ this.context = null;
        /**
     * @type {boolean}
     */ this.containerReused = false;
        /**
     * @private
     * @type {CanvasRenderingContext2D}
     */ this.pixelContext_ = null;
        /**
     * @protected
     * @type {import("../../Map.js").FrameState|null}
     */ this.frameState = null;
    }
    /**
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
   * @param {number} col The column index.
   * @param {number} row The row index.
   * @return {Uint8ClampedArray|null} The image data.
   */ getImageData(image, col, row) {
        if (!$f2f77997c6cc489a$var$pixelContext) $f2f77997c6cc489a$var$createPixelContext();
        $f2f77997c6cc489a$var$pixelContext.clearRect(0, 0, 1, 1);
        let data;
        try {
            $f2f77997c6cc489a$var$pixelContext.drawImage(image, col, row, 1, 1, 0, 0, 1, 1);
            data = $f2f77997c6cc489a$var$pixelContext.getImageData(0, 0, 1, 1).data;
        } catch (err) {
            $f2f77997c6cc489a$var$pixelContext = null;
            return null;
        }
        return data;
    }
    /**
   * @param {import('../../Map.js').FrameState} frameState Frame state.
   * @return {string} Background color.
   */ getBackground(frameState) {
        const layer = this.getLayer();
        let background = layer.getBackground();
        if (typeof background === "function") background = background(frameState.viewState.resolution);
        return background || undefined;
    }
    /**
   * Get a rendering container from an existing target, if compatible.
   * @param {HTMLElement} target Potential render target.
   * @param {string} transform CSS Transform.
   * @param {string} [backgroundColor] Background color.
   */ useContainer(target, transform, backgroundColor) {
        const layerClassName = this.getLayer().getClassName();
        let container, context;
        if (target && target.className === layerClassName && (!backgroundColor || target && target.style.backgroundColor && (0, $eea510364582e5fa$export$e9bab7fafb253603)((0, $e4ed5d48cbd18f08$export$75093a47a9fa838d)(target.style.backgroundColor), (0, $e4ed5d48cbd18f08$export$75093a47a9fa838d)(backgroundColor)))) {
            const canvas = target.firstElementChild;
            if (canvas instanceof HTMLCanvasElement) context = canvas.getContext("2d");
        }
        if (context && context.canvas.style.transform === transform) {
            // Container of the previous layer renderer can be used.
            this.container = target;
            this.context = context;
            this.containerReused = true;
        } else if (this.containerReused) {
            // Previously reused container cannot be used any more.
            this.container = null;
            this.context = null;
            this.containerReused = false;
        }
        if (!this.container) {
            container = document.createElement("div");
            container.className = layerClassName;
            let style = container.style;
            style.position = "absolute";
            style.width = "100%";
            style.height = "100%";
            context = (0, $51108d26d56c4955$export$9e05d10eae75c464)();
            const canvas1 = context.canvas;
            container.appendChild(canvas1);
            style = canvas1.style;
            style.position = "absolute";
            style.left = "0";
            style.transformOrigin = "top left";
            this.container = container;
            this.context = context;
        }
        if (!this.containerReused && backgroundColor && !this.container.style.backgroundColor) this.container.style.backgroundColor = backgroundColor;
    }
    /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent Clip extent.
   * @protected
   */ clipUnrotated(context, frameState, extent) {
        const topLeft = (0, $ee16b51bb9f86500$export$cb1538b07e6964ff)(extent);
        const topRight = (0, $ee16b51bb9f86500$export$b84fa077c8b05295)(extent);
        const bottomRight = (0, $ee16b51bb9f86500$export$e77c1cf70445e168)(extent);
        const bottomLeft = (0, $ee16b51bb9f86500$export$8d09f5e2e1bf560d)(extent);
        (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(frameState.coordinateToPixelTransform, topLeft);
        (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(frameState.coordinateToPixelTransform, topRight);
        (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(frameState.coordinateToPixelTransform, bottomRight);
        (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(frameState.coordinateToPixelTransform, bottomLeft);
        const inverted = this.inversePixelTransform;
        (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(inverted, topLeft);
        (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(inverted, topRight);
        (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(inverted, bottomRight);
        (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(inverted, bottomLeft);
        context.save();
        context.beginPath();
        context.moveTo(Math.round(topLeft[0]), Math.round(topLeft[1]));
        context.lineTo(Math.round(topRight[0]), Math.round(topRight[1]));
        context.lineTo(Math.round(bottomRight[0]), Math.round(bottomRight[1]));
        context.lineTo(Math.round(bottomLeft[0]), Math.round(bottomLeft[1]));
        context.clip();
    }
    /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */ dispatchRenderEvent_(type, context, frameState) {
        const layer = this.getLayer();
        if (layer.hasListener(type)) {
            const event = new (0, $885cd6d8e2e8534a$export$2e2bcd8739ae039)(type, this.inversePixelTransform, frameState, context);
            layer.dispatchEvent(event);
        }
    }
    /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */ preRender(context, frameState) {
        this.frameState = frameState;
        this.dispatchRenderEvent_((0, $ed38d21f8bccd31c$export$2e2bcd8739ae039).PRERENDER, context, frameState);
    }
    /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */ postRender(context, frameState) {
        this.dispatchRenderEvent_((0, $ed38d21f8bccd31c$export$2e2bcd8739ae039).POSTRENDER, context, frameState);
    }
    /**
   * Creates a transform for rendering to an element that will be rotated after rendering.
   * @param {import("../../coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} width Width of the rendered element (in pixels).
   * @param {number} height Height of the rendered element (in pixels).
   * @param {number} offsetX Offset on the x-axis in view coordinates.
   * @protected
   * @return {!import("../../transform.js").Transform} Transform.
   */ getRenderTransform(center, resolution, rotation, pixelRatio, width, height, offsetX) {
        const dx1 = width / 2;
        const dy1 = height / 2;
        const sx = pixelRatio / resolution;
        const sy = -sx;
        const dx2 = -center[0] + offsetX;
        const dy2 = -center[1];
        return (0, $0e89e72515351739$export$f672e0b6f7222cd7)(this.tempTransform, dx1, dy1, sx, sy, -rotation, dx2, dy2);
    }
    /**
   * Clean up.
   */ disposeInternal() {
        delete this.frameState;
        super.disposeInternal();
    }
}
var $f2f77997c6cc489a$export$2e2bcd8739ae039 = $f2f77997c6cc489a$var$CanvasLayerRenderer;




var /**
 * @module ol/TileState
 */ /**
 * @enum {number}
 */ $d9933407e040b713$export$2e2bcd8739ae039 = {
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    /**
   * Indicates that tile loading failed
   * @type {number}
   */ ERROR: 3,
    EMPTY: 4
};




/**
 * A function that takes an {@link module:ol/Tile~Tile} for the tile and a
 * `{string}` for the url as arguments. The default is
 * ```js
 * source.setTileLoadFunction(function(tile, src) {
 *   tile.getImage().src = src;
 * });
 * ```
 * For more fine grained control, the load function can use fetch or XMLHttpRequest and involve
 * error handling:
 *
 * ```js
 * import TileState from 'ol/TileState';
 *
 * source.setTileLoadFunction(function(tile, src) {
 *   const xhr = new XMLHttpRequest();
 *   xhr.responseType = 'blob';
 *   xhr.addEventListener('loadend', function (evt) {
 *     const data = this.response;
 *     if (data !== undefined) {
 *       tile.getImage().src = URL.createObjectURL(data);
 *     } else {
 *       tile.setState(TileState.ERROR);
 *     }
 *   });
 *   xhr.addEventListener('error', function () {
 *     tile.setState(TileState.ERROR);
 *   });
 *   xhr.open('GET', src);
 *   xhr.send();
 * });
 * ```
 *
 * @typedef {function(Tile, string): void} LoadFunction
 * @api
 */ /**
 * {@link module:ol/source/Tile~TileSource} sources use a function of this type to get
 * the url that provides a tile for a given tile coordinate.
 *
 * This function takes an {@link module:ol/tilecoord~TileCoord} for the tile
 * coordinate, a `{number}` representing the pixel ratio and a
 * {@link module:ol/proj/Projection~Projection} for the projection  as arguments
 * and returns a `{string}` representing the tile URL, or undefined if no tile
 * should be requested for the passed tile coordinate.
 *
 * @typedef {function(import("./tilecoord.js").TileCoord, number,
 *           import("./proj/Projection.js").default): (string|undefined)} UrlFunction
 * @api
 */ /**
 * @typedef {Object} Options
 * @property {number} [transition=250] A duration for tile opacity
 * transitions in milliseconds. A duration of 0 disables the opacity transition.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 * @api
 */ /**
 * @classdesc
 * Base class for tiles.
 *
 * @abstract
 */ class $b06ea1f80b2825d7$var$Tile extends (0, $8db040e14d9e4db7$export$2e2bcd8739ae039) {
    /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {Options} [options] Tile options.
   */ constructor(tileCoord, state, options){
        super();
        options = options ? options : {};
        /**
     * @type {import("./tilecoord.js").TileCoord}
     */ this.tileCoord = tileCoord;
        /**
     * @protected
     * @type {import("./TileState.js").default}
     */ this.state = state;
        /**
     * An "interim" tile for this tile. The interim tile may be used while this
     * one is loading, for "smooth" transitions when changing params/dimensions
     * on the source.
     * @type {Tile}
     */ this.interimTile = null;
        /**
     * A key assigned to the tile. This is used by the tile source to determine
     * if this tile can effectively be used, or if a new tile should be created
     * and this one be used as an interim tile for this new tile.
     * @type {string}
     */ this.key = "";
        /**
     * The duration for the opacity transition.
     * @type {number}
     */ this.transition_ = options.transition === undefined ? 250 : options.transition;
        /**
     * Lookup of start times for rendering transitions.  If the start time is
     * equal to -1, the transition is complete.
     * @type {Object<string, number>}
     */ this.transitionStarts_ = {};
        /**
     * @type {boolean}
     */ this.interpolate = !!options.interpolate;
    }
    /**
   * @protected
   */ changed() {
        this.dispatchEvent((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE);
    }
    /**
   * Called by the tile cache when the tile is removed from the cache due to expiry
   */ release() {
        if (this.state === (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR) // to remove the `change` listener on this tile in `ol/TileQueue#handleTileChange`
        this.setState((0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY);
    }
    /**
   * @return {string} Key.
   */ getKey() {
        return this.key + "/" + this.tileCoord;
    }
    /**
   * Get the interim tile most suitable for rendering using the chain of interim
   * tiles. This corresponds to the  most recent tile that has been loaded, if no
   * such tile exists, the original tile is returned.
   * @return {!Tile} Best tile for rendering.
   */ getInterimTile() {
        if (!this.interimTile) //empty chain
        return this;
        let tile = this.interimTile;
        // find the first loaded tile and return it. Since the chain is sorted in
        // decreasing order of creation time, there is no need to search the remainder
        // of the list (all those tiles correspond to older requests and will be
        // cleaned up by refreshInterimChain)
        do {
            if (tile.getState() == (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED) {
                // Show tile immediately instead of fading it in after loading, because
                // the interim tile is in place already
                this.transition_ = 0;
                return tile;
            }
            tile = tile.interimTile;
        }while (tile);
        // we can not find a better tile
        return this;
    }
    /**
   * Goes through the chain of interim tiles and discards sections of the chain
   * that are no longer relevant.
   */ refreshInterimChain() {
        if (!this.interimTile) return;
        let tile = this.interimTile;
        /**
     * @type {Tile}
     */ let prev = this;
        do {
            if (tile.getState() == (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED) {
                //we have a loaded tile, we can discard the rest of the list
                //we would could abort any LOADING tile request
                //older than this tile (i.e. any LOADING tile following this entry in the chain)
                tile.interimTile = null;
                break;
            } else if (tile.getState() == (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADING) //keep this LOADING tile any loaded tiles later in the chain are
            //older than this tile, so we're still interested in the request
            prev = tile;
            else if (tile.getState() == (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE) //the head of the list is the most current tile, we don't need
            //to start any other requests for this chain
            prev.interimTile = tile.interimTile;
            else prev = tile;
            tile = prev.interimTile;
        }while (tile);
    }
    /**
   * Get the tile coordinate for this tile.
   * @return {import("./tilecoord.js").TileCoord} The tile coordinate.
   * @api
   */ getTileCoord() {
        return this.tileCoord;
    }
    /**
   * @return {import("./TileState.js").default} State.
   */ getState() {
        return this.state;
    }
    /**
   * Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,
   * it is important to set the state correctly to {@link module:ol/TileState~ERROR}
   * when the tile cannot be loaded. Otherwise the tile cannot be removed from
   * the tile queue and will block other requests.
   * @param {import("./TileState.js").default} state State.
   * @api
   */ setState(state) {
        if (this.state !== (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR && this.state > state) throw new Error("Tile load sequence violation");
        this.state = state;
        this.changed();
    }
    /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   * @abstract
   * @api
   */ load() {
        (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Get the alpha value for rendering.
   * @param {string} id An id for the renderer.
   * @param {number} time The render frame time.
   * @return {number} A number between 0 and 1.
   */ getAlpha(id, time) {
        if (!this.transition_) return 1;
        let start = this.transitionStarts_[id];
        if (!start) {
            start = time;
            this.transitionStarts_[id] = start;
        } else if (start === -1) return 1;
        const delta = time - start + 1000 / 60; // avoid rendering at 0
        if (delta >= this.transition_) return 1;
        return (0, $a827aa90539b5df5$export$929e5a82286172a6)(delta / this.transition_);
    }
    /**
   * Determine if a tile is in an alpha transition.  A tile is considered in
   * transition if tile.getAlpha() has not yet been called or has been called
   * and returned 1.
   * @param {string} id An id for the renderer.
   * @return {boolean} The tile is in transition.
   */ inTransition(id) {
        if (!this.transition_) return false;
        return this.transitionStarts_[id] !== -1;
    }
    /**
   * Mark a transition as complete.
   * @param {string} id An id for the renderer.
   */ endTransition(id) {
        if (this.transition_) this.transitionStarts_[id] = -1;
    }
}
var $b06ea1f80b2825d7$export$2e2bcd8739ae039 = $b06ea1f80b2825d7$var$Tile;








/**
 * @abstract
 */ class $2a60c74ed5a96b8e$var$ImageBase extends (0, $8db040e14d9e4db7$export$2e2bcd8739ae039) {
    /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number|undefined} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("./ImageState.js").default} state State.
   */ constructor(extent, resolution, pixelRatio, state){
        super();
        /**
     * @protected
     * @type {import("./extent.js").Extent}
     */ this.extent = extent;
        /**
     * @private
     * @type {number}
     */ this.pixelRatio_ = pixelRatio;
        /**
     * @protected
     * @type {number|undefined}
     */ this.resolution = resolution;
        /**
     * @protected
     * @type {import("./ImageState.js").default}
     */ this.state = state;
    }
    /**
   * @protected
   */ changed() {
        this.dispatchEvent((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE);
    }
    /**
   * @return {import("./extent.js").Extent} Extent.
   */ getExtent() {
        return this.extent;
    }
    /**
   * @abstract
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   */ getImage() {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * @return {number} PixelRatio.
   */ getPixelRatio() {
        return this.pixelRatio_;
    }
    /**
   * @return {number} Resolution.
   */ getResolution() {
        return this.resolution;
    }
    /**
   * @return {import("./ImageState.js").default} State.
   */ getState() {
        return this.state;
    }
    /**
   * Load not yet loaded URI.
   * @abstract
   */ load() {
        (0, $386903518769f502$export$817eb92a8194bab0)();
    }
}
var $2a60c74ed5a96b8e$export$2e2bcd8739ae039 = $2a60c74ed5a96b8e$var$ImageBase;






/**
 * A function that takes an {@link module:ol/Image~ImageWrapper} for the image and a
 * `{string}` for the src as arguments. It is supposed to make it so the
 * underlying image {@link module:ol/Image~ImageWrapper#getImage} is assigned the
 * content specified by the src. If not specified, the default is
 *
 *     function(image, src) {
 *       image.getImage().src = src;
 *     }
 *
 * Providing a custom `imageLoadFunction` can be useful to load images with
 * post requests or - in general - through XHR requests, where the src of the
 * image element would be set to a data URI when the content is loaded.
 *
 * @typedef {function(ImageWrapper, string): void} LoadFunction
 * @api
 */ class $851f0130f1537f8a$var$ImageWrapper extends (0, $2a60c74ed5a96b8e$export$2e2bcd8739ae039) {
    /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number|undefined} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {LoadFunction} imageLoadFunction Image load function.
   */ constructor(extent, resolution, pixelRatio, src, crossOrigin, imageLoadFunction){
        super(extent, resolution, pixelRatio, (0, $9c13a69a156c0690$export$2e2bcd8739ae039).IDLE);
        /**
     * @private
     * @type {string}
     */ this.src_ = src;
        /**
     * @private
     * @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement}
     */ this.image_ = new Image();
        if (crossOrigin !== null) this.image_.crossOrigin = crossOrigin;
        /**
     * @private
     * @type {?function():void}
     */ this.unlisten_ = null;
        /**
     * @protected
     * @type {import("./ImageState.js").default}
     */ this.state = (0, $9c13a69a156c0690$export$2e2bcd8739ae039).IDLE;
        /**
     * @private
     * @type {LoadFunction}
     */ this.imageLoadFunction_ = imageLoadFunction;
    }
    /**
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @api
   */ getImage() {
        return this.image_;
    }
    /**
   * Tracks loading or read errors.
   *
   * @private
   */ handleImageError_() {
        this.state = (0, $9c13a69a156c0690$export$2e2bcd8739ae039).ERROR;
        this.unlistenImage_();
        this.changed();
    }
    /**
   * Tracks successful image load.
   *
   * @private
   */ handleImageLoad_() {
        if (this.resolution === undefined) this.resolution = (0, $ee16b51bb9f86500$export$c08559766941f856)(this.extent) / this.image_.height;
        this.state = (0, $9c13a69a156c0690$export$2e2bcd8739ae039).LOADED;
        this.unlistenImage_();
        this.changed();
    }
    /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   * @api
   */ load() {
        if (this.state == (0, $9c13a69a156c0690$export$2e2bcd8739ae039).IDLE || this.state == (0, $9c13a69a156c0690$export$2e2bcd8739ae039).ERROR) {
            this.state = (0, $9c13a69a156c0690$export$2e2bcd8739ae039).LOADING;
            this.changed();
            this.imageLoadFunction_(this, this.src_);
            this.unlisten_ = $851f0130f1537f8a$export$bc96ecc7c2a50764(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
        }
    }
    /**
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
   */ setImage(image) {
        this.image_ = image;
        this.resolution = (0, $ee16b51bb9f86500$export$c08559766941f856)(this.extent) / this.image_.height;
    }
    /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */ unlistenImage_() {
        if (this.unlisten_) {
            this.unlisten_();
            this.unlisten_ = null;
        }
    }
}
function $851f0130f1537f8a$export$bc96ecc7c2a50764(image, loadHandler, errorHandler) {
    const img = image;
    let listening = true;
    let decoding = false;
    let loaded = false;
    const listenerKeys = [
        (0, $b5beb2fac6e98c10$export$8d2a95bc11b44725)(img, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).LOAD, function() {
            loaded = true;
            if (!decoding) loadHandler();
        }), 
    ];
    if (img.src && (0, $03af6b5c3e46892e$export$716f8695eedb9bad)) {
        decoding = true;
        img.decode().then(function() {
            if (listening) loadHandler();
        }).catch(function(error) {
            if (listening) {
                if (loaded) loadHandler();
                else errorHandler();
            }
        });
    } else listenerKeys.push((0, $b5beb2fac6e98c10$export$8d2a95bc11b44725)(img, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).ERROR, errorHandler));
    return function unlisten() {
        listening = false;
        listenerKeys.forEach((0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921));
    };
}
var $851f0130f1537f8a$export$2e2bcd8739ae039 = $851f0130f1537f8a$var$ImageWrapper;


class $cd8d7f5aa641f1d9$var$ImageTile extends (0, $b06ea1f80b2825d7$export$2e2bcd8739ae039) {
    /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @param {import("./Tile.js").Options} [options] Tile options.
   */ constructor(tileCoord, state, src, crossOrigin, tileLoadFunction, options){
        super(tileCoord, state, options);
        /**
     * @private
     * @type {?string}
     */ this.crossOrigin_ = crossOrigin;
        /**
     * Image URI
     *
     * @private
     * @type {string}
     */ this.src_ = src;
        this.key = src;
        /**
     * @private
     * @type {HTMLImageElement|HTMLCanvasElement}
     */ this.image_ = new Image();
        if (crossOrigin !== null) this.image_.crossOrigin = crossOrigin;
        /**
     * @private
     * @type {?function():void}
     */ this.unlisten_ = null;
        /**
     * @private
     * @type {import("./Tile.js").LoadFunction}
     */ this.tileLoadFunction_ = tileLoadFunction;
    }
    /**
   * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @api
   */ getImage() {
        return this.image_;
    }
    /**
   * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
   * @param {HTMLCanvasElement|HTMLImageElement} element Element.
   */ setImage(element) {
        this.image_ = element;
        this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED;
        this.unlistenImage_();
        this.changed();
    }
    /**
   * Tracks loading or read errors.
   *
   * @private
   */ handleImageError_() {
        this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR;
        this.unlistenImage_();
        this.image_ = $cd8d7f5aa641f1d9$var$getBlankImage();
        this.changed();
    }
    /**
   * Tracks successful image load.
   *
   * @private
   */ handleImageLoad_() {
        const image = this.image_;
        if (image.naturalWidth && image.naturalHeight) this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED;
        else this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY;
        this.unlistenImage_();
        this.changed();
    }
    /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   *
   * To retry loading tiles on failed requests, use a custom `tileLoadFunction`
   * that checks for error status codes and reloads only when the status code is
   * 408, 429, 500, 502, 503 and 504, and only when not too many retries have been
   * made already:
   *
   * ```js
   * const retryCodes = [408, 429, 500, 502, 503, 504];
   * const retries = {};
   * source.setTileLoadFunction((tile, src) => {
   *   const image = tile.getImage();
   *   fetch(src)
   *     .then((response) => {
   *       if (retryCodes.includes(response.status)) {
   *         retries[src] = (retries[src] || 0) + 1;
   *         if (retries[src] <= 3) {
   *           setTimeout(() => tile.load(), retries[src] * 1000);
   *         }
   *         return Promise.reject();
   *       }
   *       return response.blob();
   *     })
   *     .then((blob) => {
   *       const imageUrl = URL.createObjectURL(blob);
   *       image.src = imageUrl;
   *       setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
   *     })
   *     .catch(() => tile.setState(3)); // error
   * });
   * ```
   *
   * @api
   */ load() {
        if (this.state == (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR) {
            this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE;
            this.image_ = new Image();
            if (this.crossOrigin_ !== null) this.image_.crossOrigin = this.crossOrigin_;
        }
        if (this.state == (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE) {
            this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADING;
            this.changed();
            this.tileLoadFunction_(this, this.src_);
            this.unlisten_ = (0, $851f0130f1537f8a$export$bc96ecc7c2a50764)(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
        }
    }
    /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */ unlistenImage_() {
        if (this.unlisten_) {
            this.unlisten_();
            this.unlisten_ = null;
        }
    }
}
/**
 * Get a 1-pixel blank image.
 * @return {HTMLCanvasElement} Blank image.
 */ function $cd8d7f5aa641f1d9$var$getBlankImage() {
    const ctx = (0, $51108d26d56c4955$export$9e05d10eae75c464)(1, 1);
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, 1, 1);
    return ctx.canvas;
}
var $cd8d7f5aa641f1d9$export$2e2bcd8739ae039 = $cd8d7f5aa641f1d9$var$ImageTile;


const $37142e3635297b37$export$3ecb4bcfa5aae855 = 0.5;







/**
 * @module ol/proj/Units
 */ /**
 * @typedef {'radians' | 'degrees' | 'ft' | 'm' | 'pixels' | 'tile-pixels' | 'us-ft'} Units
 * Projection units.
 */ /**
 * See http://duff.ess.washington.edu/data/raster/drg/docs/geotiff.txt
 * @type {Object<number, Units>}
 */ const $361aac7b018b3435$var$unitByCode = {
    "9001": "m",
    "9002": "ft",
    "9003": "us-ft",
    "9101": "radians",
    "9102": "degrees"
};
function $361aac7b018b3435$export$7f58726df3255edc(code) {
    return $361aac7b018b3435$var$unitByCode[code];
}
const $361aac7b018b3435$export$1482081eec883108 = {
    // use the radius of the Normal sphere
    "radians": 6370997 / (2 * Math.PI),
    "degrees": 2 * Math.PI * 6370997 / 360,
    "ft": 0.3048,
    "m": 1,
    "us-ft": 1200 / 3937
};


/**
 * @typedef {Object} Options
 * @property {string} code The SRS identifier code, e.g. `EPSG:4326`.
 * @property {import("./Units.js").Units} [units] Units. Required unless a
 * proj4 projection is defined for `code`.
 * @property {import("../extent.js").Extent} [extent] The validity extent for the SRS.
 * @property {string} [axisOrientation='enu'] The axis orientation as specified in Proj4.
 * @property {boolean} [global=false] Whether the projection is valid for the whole globe.
 * @property {number} [metersPerUnit] The meters per unit for the SRS.
 * If not provided, the `units` are used to get the meters per unit from the {@link METERS_PER_UNIT}
 * lookup table.
 * @property {import("../extent.js").Extent} [worldExtent] The world extent for the SRS.
 * @property {function(number, import("../coordinate.js").Coordinate):number} [getPointResolution]
 * Function to determine resolution at a point. The function is called with a
 * `number` view resolution and a {@link module:ol/coordinate~Coordinate} as arguments, and returns
 * the `number` resolution in projection units at the passed coordinate. If this is `undefined`,
 * the default {@link module:ol/proj.getPointResolution} function will be used.
 */ /**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link module:ol/proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link module:ol/proj~ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link module:ol/proj.get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use [proj4js](https://github.com/proj4js/proj4js), aliases can
 * be added using `proj4.defs()`. After all required projection definitions are
 * added, call the {@link module:ol/proj/proj4.register} function.
 *
 * @api
 */ class $147bfcc844d89097$var$Projection {
    /**
   * @param {Options} options Projection options.
   */ constructor(options){
        /**
     * @private
     * @type {string}
     */ this.code_ = options.code;
        /**
     * Units of projected coordinates. When set to `TILE_PIXELS`, a
     * `this.extent_` and `this.worldExtent_` must be configured properly for each
     * tile.
     * @private
     * @type {import("./Units.js").Units}
     */ this.units_ = options.units;
        /**
     * Validity extent of the projection in projected coordinates. For projections
     * with `TILE_PIXELS` units, this is the extent of the tile in
     * tile pixel space.
     * @private
     * @type {import("../extent.js").Extent}
     */ this.extent_ = options.extent !== undefined ? options.extent : null;
        /**
     * Extent of the world in EPSG:4326. For projections with
     * `TILE_PIXELS` units, this is the extent of the tile in
     * projected coordinate space.
     * @private
     * @type {import("../extent.js").Extent}
     */ this.worldExtent_ = options.worldExtent !== undefined ? options.worldExtent : null;
        /**
     * @private
     * @type {string}
     */ this.axisOrientation_ = options.axisOrientation !== undefined ? options.axisOrientation : "enu";
        /**
     * @private
     * @type {boolean}
     */ this.global_ = options.global !== undefined ? options.global : false;
        /**
     * @private
     * @type {boolean}
     */ this.canWrapX_ = !!(this.global_ && this.extent_);
        /**
     * @private
     * @type {function(number, import("../coordinate.js").Coordinate):number|undefined}
     */ this.getPointResolutionFunc_ = options.getPointResolution;
        /**
     * @private
     * @type {import("../tilegrid/TileGrid.js").default}
     */ this.defaultTileGrid_ = null;
        /**
     * @private
     * @type {number|undefined}
     */ this.metersPerUnit_ = options.metersPerUnit;
    }
    /**
   * @return {boolean} The projection is suitable for wrapping the x-axis
   */ canWrapX() {
        return this.canWrapX_;
    }
    /**
   * Get the code for this projection, e.g. 'EPSG:4326'.
   * @return {string} Code.
   * @api
   */ getCode() {
        return this.code_;
    }
    /**
   * Get the validity extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */ getExtent() {
        return this.extent_;
    }
    /**
   * Get the units of this projection.
   * @return {import("./Units.js").Units} Units.
   * @api
   */ getUnits() {
        return this.units_;
    }
    /**
   * Get the amount of meters per unit of this projection.  If the projection is
   * not configured with `metersPerUnit` or a units identifier, the return is
   * `undefined`.
   * @return {number|undefined} Meters.
   * @api
   */ getMetersPerUnit() {
        return this.metersPerUnit_ || (0, $361aac7b018b3435$export$1482081eec883108)[this.units_];
    }
    /**
   * Get the world extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */ getWorldExtent() {
        return this.worldExtent_;
    }
    /**
   * Get the axis orientation of this projection.
   * Example values are:
   * enu - the default easting, northing, elevation.
   * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
   *     or south orientated transverse mercator.
   * wnu - westing, northing, up - some planetary coordinate systems have
   *     "west positive" coordinate systems
   * @return {string} Axis orientation.
   * @api
   */ getAxisOrientation() {
        return this.axisOrientation_;
    }
    /**
   * Is this projection a global projection which spans the whole world?
   * @return {boolean} Whether the projection is global.
   * @api
   */ isGlobal() {
        return this.global_;
    }
    /**
   * Set if the projection is a global projection which spans the whole world
   * @param {boolean} global Whether the projection is global.
   * @api
   */ setGlobal(global) {
        this.global_ = global;
        this.canWrapX_ = !!(global && this.extent_);
    }
    /**
   * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
   */ getDefaultTileGrid() {
        return this.defaultTileGrid_;
    }
    /**
   * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
   */ setDefaultTileGrid(tileGrid) {
        this.defaultTileGrid_ = tileGrid;
    }
    /**
   * Set the validity extent for this projection.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */ setExtent(extent) {
        this.extent_ = extent;
        this.canWrapX_ = !!(this.global_ && extent);
    }
    /**
   * Set the world extent for this projection.
   * @param {import("../extent.js").Extent} worldExtent World extent
   *     [minlon, minlat, maxlon, maxlat].
   * @api
   */ setWorldExtent(worldExtent) {
        this.worldExtent_ = worldExtent;
    }
    /**
   * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
   * for this projection.
   * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
   * @api
   */ setGetPointResolution(func) {
        this.getPointResolutionFunc_ = func;
    }
    /**
   * Get the custom point resolution function for this projection (if set).
   * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
   * resolution function (if set).
   */ getPointResolutionFunc() {
        return this.getPointResolutionFunc_;
    }
}
var $147bfcc844d89097$export$2e2bcd8739ae039 = $147bfcc844d89097$var$Projection;


const $1ea7d5f2ccc9d856$export$2d2c9be8b5b863f = 6378137;
const $1ea7d5f2ccc9d856$export$f3928063e5e96d35 = Math.PI * $1ea7d5f2ccc9d856$export$2d2c9be8b5b863f;
const $1ea7d5f2ccc9d856$export$21e6da8a7375dfe8 = [
    -$1ea7d5f2ccc9d856$export$f3928063e5e96d35,
    -$1ea7d5f2ccc9d856$export$f3928063e5e96d35,
    $1ea7d5f2ccc9d856$export$f3928063e5e96d35,
    $1ea7d5f2ccc9d856$export$f3928063e5e96d35
];
const $1ea7d5f2ccc9d856$export$ae9d6ed80df710e5 = [
    -180,
    -85,
    180,
    85
];
const $1ea7d5f2ccc9d856$export$d26945d1ad52feeb = $1ea7d5f2ccc9d856$export$2d2c9be8b5b863f * Math.log(Math.tan(Math.PI / 2));
/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 */ class $1ea7d5f2ccc9d856$var$EPSG3857Projection extends (0, $147bfcc844d89097$export$2e2bcd8739ae039) {
    /**
   * @param {string} code Code.
   */ constructor(code){
        super({
            code: code,
            units: "m",
            extent: $1ea7d5f2ccc9d856$export$21e6da8a7375dfe8,
            global: true,
            worldExtent: $1ea7d5f2ccc9d856$export$ae9d6ed80df710e5,
            getPointResolution: function(resolution, point) {
                return resolution / Math.cosh(point[1] / $1ea7d5f2ccc9d856$export$2d2c9be8b5b863f);
            }
        });
    }
}
const $1ea7d5f2ccc9d856$export$b508d7ad9a891c1b = [
    new $1ea7d5f2ccc9d856$var$EPSG3857Projection("EPSG:3857"),
    new $1ea7d5f2ccc9d856$var$EPSG3857Projection("EPSG:102100"),
    new $1ea7d5f2ccc9d856$var$EPSG3857Projection("EPSG:102113"),
    new $1ea7d5f2ccc9d856$var$EPSG3857Projection("EPSG:900913"),
    new $1ea7d5f2ccc9d856$var$EPSG3857Projection("http://www.opengis.net/def/crs/EPSG/0/3857"),
    new $1ea7d5f2ccc9d856$var$EPSG3857Projection("http://www.opengis.net/gml/srs/epsg.xml#3857"), 
];
function $1ea7d5f2ccc9d856$export$1ff8bb36c0983070(input, output, dimension) {
    const length = input.length;
    dimension = dimension > 1 ? dimension : 2;
    if (output === undefined) {
        if (dimension > 2) // preserve values beyond second dimension
        output = input.slice();
        else output = new Array(length);
    }
    for(let i = 0; i < length; i += dimension){
        output[i] = $1ea7d5f2ccc9d856$export$f3928063e5e96d35 * input[i] / 180;
        let y = $1ea7d5f2ccc9d856$export$2d2c9be8b5b863f * Math.log(Math.tan(Math.PI * (+input[i + 1] + 90) / 360));
        if (y > $1ea7d5f2ccc9d856$export$d26945d1ad52feeb) y = $1ea7d5f2ccc9d856$export$d26945d1ad52feeb;
        else if (y < -$1ea7d5f2ccc9d856$export$d26945d1ad52feeb) y = -$1ea7d5f2ccc9d856$export$d26945d1ad52feeb;
        output[i + 1] = y;
    }
    return output;
}
function $1ea7d5f2ccc9d856$export$8c71322ec28ed6b4(input, output, dimension) {
    const length = input.length;
    dimension = dimension > 1 ? dimension : 2;
    if (output === undefined) {
        if (dimension > 2) // preserve values beyond second dimension
        output = input.slice();
        else output = new Array(length);
    }
    for(let i = 0; i < length; i += dimension){
        output[i] = 180 * input[i] / $1ea7d5f2ccc9d856$export$f3928063e5e96d35;
        output[i + 1] = 360 * Math.atan(Math.exp(input[i + 1] / $1ea7d5f2ccc9d856$export$2d2c9be8b5b863f)) / Math.PI - 90;
    }
    return output;
}



const $f735d1f2e74d6223$export$2d2c9be8b5b863f = 6378137;
const $f735d1f2e74d6223$export$21e6da8a7375dfe8 = [
    -180,
    -90,
    180,
    90
];
const $f735d1f2e74d6223$export$1482081eec883108 = Math.PI * $f735d1f2e74d6223$export$2d2c9be8b5b863f / 180;
/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 */ class $f735d1f2e74d6223$var$EPSG4326Projection extends (0, $147bfcc844d89097$export$2e2bcd8739ae039) {
    /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */ constructor(code, axisOrientation){
        super({
            code: code,
            units: "degrees",
            extent: $f735d1f2e74d6223$export$21e6da8a7375dfe8,
            axisOrientation: axisOrientation,
            global: true,
            metersPerUnit: $f735d1f2e74d6223$export$1482081eec883108,
            worldExtent: $f735d1f2e74d6223$export$21e6da8a7375dfe8
        });
    }
}
const $f735d1f2e74d6223$export$b508d7ad9a891c1b = [
    new $f735d1f2e74d6223$var$EPSG4326Projection("CRS:84"),
    new $f735d1f2e74d6223$var$EPSG4326Projection("EPSG:4326", "neu"),
    new $f735d1f2e74d6223$var$EPSG4326Projection("urn:ogc:def:crs:OGC:1.3:CRS84"),
    new $f735d1f2e74d6223$var$EPSG4326Projection("urn:ogc:def:crs:OGC:2:84"),
    new $f735d1f2e74d6223$var$EPSG4326Projection("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
    new $f735d1f2e74d6223$var$EPSG4326Projection("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
    new $f735d1f2e74d6223$var$EPSG4326Projection("http://www.opengis.net/def/crs/EPSG/0/4326", "neu"), 
];



/**
 * @module ol/proj/projections
 */ /**
 * @type {Object<string, import("./Projection.js").default>}
 */ let $b18f7703ea8c3ca9$var$cache = {};
function $b18f7703ea8c3ca9$export$42ffd38884aecdac() {
    $b18f7703ea8c3ca9$var$cache = {};
}
function $b18f7703ea8c3ca9$export$3988ae62b71be9a3(code) {
    return $b18f7703ea8c3ca9$var$cache[code] || $b18f7703ea8c3ca9$var$cache[code.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function $b18f7703ea8c3ca9$export$e16d8520af44a096(code, projection) {
    $b18f7703ea8c3ca9$var$cache[code] = projection;
}



/**
 * @private
 * @type {!Object<string, Object<string, import("../proj.js").TransformFunction>>}
 */ let $dde5bd7ffb873166$var$transforms = {};
function $dde5bd7ffb873166$export$42ffd38884aecdac() {
    $dde5bd7ffb873166$var$transforms = {};
}
function $dde5bd7ffb873166$export$e16d8520af44a096(source, destination, transformFn) {
    const sourceCode = source.getCode();
    const destinationCode = destination.getCode();
    if (!(sourceCode in $dde5bd7ffb873166$var$transforms)) $dde5bd7ffb873166$var$transforms[sourceCode] = {};
    $dde5bd7ffb873166$var$transforms[sourceCode][destinationCode] = transformFn;
}
function $dde5bd7ffb873166$export$cd7f480d6b8286c3(source, destination) {
    const sourceCode = source.getCode();
    const destinationCode = destination.getCode();
    const transform = $dde5bd7ffb873166$var$transforms[sourceCode][destinationCode];
    delete $dde5bd7ffb873166$var$transforms[sourceCode][destinationCode];
    if ((0, $9ffc9b9068a038e2$export$dd1bc94b04021eeb)($dde5bd7ffb873166$var$transforms[sourceCode])) delete $dde5bd7ffb873166$var$transforms[sourceCode];
    return transform;
}
function $dde5bd7ffb873166$export$3988ae62b71be9a3(sourceCode, destinationCode) {
    let transform;
    if (sourceCode in $dde5bd7ffb873166$var$transforms && destinationCode in $dde5bd7ffb873166$var$transforms[sourceCode]) transform = $dde5bd7ffb873166$var$transforms[sourceCode][destinationCode];
    return transform;
}






function $cd622b37159dd494$export$24be126cb0a7bbeb(number, width, precision) {
    const numberString = precision !== undefined ? number.toFixed(precision) : "" + number;
    let decimal = numberString.indexOf(".");
    decimal = decimal === -1 ? numberString.length : decimal;
    return decimal > width ? numberString : new Array(1 + width - decimal).join("0") + numberString;
}
function $cd622b37159dd494$export$66e1c0999abad646(v1, v2) {
    const s1 = ("" + v1).split(".");
    const s2 = ("" + v2).split(".");
    for(let i = 0; i < Math.max(s1.length, s2.length); i++){
        const n1 = parseInt(s1[i] || "0", 10);
        const n2 = parseInt(s2[i] || "0", 10);
        if (n1 > n2) return 1;
        if (n2 > n1) return -1;
    }
    return 0;
}


function $8b3868383cdaeca1$export$e16d8520af44a096(coordinate, delta) {
    coordinate[0] += +delta[0];
    coordinate[1] += +delta[1];
    return coordinate;
}
function $8b3868383cdaeca1$export$cbe80a3fcd2b99b7(coordinate, circle) {
    const r = circle.getRadius();
    const center = circle.getCenter();
    const x0 = center[0];
    const y0 = center[1];
    const x1 = coordinate[0];
    const y1 = coordinate[1];
    let dx = x1 - x0;
    const dy = y1 - y0;
    if (dx === 0 && dy === 0) dx = 1;
    const d = Math.sqrt(dx * dx + dy * dy);
    const x = x0 + r * dx / d;
    const y = y0 + r * dy / d;
    return [
        x,
        y
    ];
}
function $8b3868383cdaeca1$export$18cdd31d17f97131(coordinate, segment) {
    const x0 = coordinate[0];
    const y0 = coordinate[1];
    const start = segment[0];
    const end = segment[1];
    const x1 = start[0];
    const y1 = start[1];
    const x2 = end[0];
    const y2 = end[1];
    const dx = x2 - x1;
    const dy = y2 - y1;
    const along = dx === 0 && dy === 0 ? 0 : (dx * (x0 - x1) + dy * (y0 - y1)) / (dx * dx + dy * dy || 0);
    let x, y;
    if (along <= 0) {
        x = x1;
        y = y1;
    } else if (along >= 1) {
        x = x2;
        y = y2;
    } else {
        x = x1 + along * dx;
        y = y1 + along * dy;
    }
    return [
        x,
        y
    ];
}
function $8b3868383cdaeca1$export$35ad6765fe262b6(fractionDigits) {
    return(/**
     * @param {Coordinate} coordinate Coordinate.
     * @return {string} String XY.
     */ function(coordinate) {
        return $8b3868383cdaeca1$export$9ff8f16060979e0a(coordinate, fractionDigits);
    });
}
function $8b3868383cdaeca1$export$6eb0ac5f024d8590(hemispheres, degrees, fractionDigits) {
    const normalizedDegrees = (0, $906cd1f2aa644a1d$export$ba467bec01d66def)(degrees + 180, 360) - 180;
    const x = Math.abs(3600 * normalizedDegrees);
    const decimals = fractionDigits || 0;
    let deg = Math.floor(x / 3600);
    let min = Math.floor((x - deg * 3600) / 60);
    let sec = (0, $906cd1f2aa644a1d$export$a81f732198733497)(x - deg * 3600 - min * 60, decimals);
    if (sec >= 60) {
        sec = 0;
        min += 1;
    }
    if (min >= 60) {
        min = 0;
        deg += 1;
    }
    let hdms = deg + "\xb0";
    if (min !== 0 || sec !== 0) hdms += " " + (0, $cd622b37159dd494$export$24be126cb0a7bbeb)(min, 2) + "′";
    if (sec !== 0) hdms += " " + (0, $cd622b37159dd494$export$24be126cb0a7bbeb)(sec, 2, decimals) + "″";
    if (normalizedDegrees !== 0) hdms += " " + hemispheres.charAt(normalizedDegrees < 0 ? 1 : 0);
    return hdms;
}
function $8b3868383cdaeca1$export$d9468344d3651243(coordinate, template, fractionDigits) {
    if (coordinate) return template.replace("{x}", coordinate[0].toFixed(fractionDigits)).replace("{y}", coordinate[1].toFixed(fractionDigits));
    else return "";
}
function $8b3868383cdaeca1$export$e9bab7fafb253603(coordinate1, coordinate2) {
    let equals = true;
    for(let i = coordinate1.length - 1; i >= 0; --i)if (coordinate1[i] != coordinate2[i]) {
        equals = false;
        break;
    }
    return equals;
}
function $8b3868383cdaeca1$export$bb628a54ab399bc9(coordinate, angle) {
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    const y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    coordinate[0] = x;
    coordinate[1] = y;
    return coordinate;
}
function $8b3868383cdaeca1$export$dcdf75081b88279d(coordinate, scale) {
    coordinate[0] *= scale;
    coordinate[1] *= scale;
    return coordinate;
}
function $8b3868383cdaeca1$export$88e6ebb4fe54f538(coord1, coord2) {
    const dx = coord1[0] - coord2[0];
    const dy = coord1[1] - coord2[1];
    return dx * dx + dy * dy;
}
function $8b3868383cdaeca1$export$9f17032d917177de(coord1, coord2) {
    return Math.sqrt($8b3868383cdaeca1$export$88e6ebb4fe54f538(coord1, coord2));
}
function $8b3868383cdaeca1$export$6985570514055196(coordinate, segment) {
    return $8b3868383cdaeca1$export$88e6ebb4fe54f538(coordinate, $8b3868383cdaeca1$export$18cdd31d17f97131(coordinate, segment));
}
function $8b3868383cdaeca1$export$c883fd238161f841(coordinate, fractionDigits) {
    if (coordinate) return $8b3868383cdaeca1$export$6eb0ac5f024d8590("NS", coordinate[1], fractionDigits) + " " + $8b3868383cdaeca1$export$6eb0ac5f024d8590("EW", coordinate[0], fractionDigits);
    else return "";
}
function $8b3868383cdaeca1$export$9ff8f16060979e0a(coordinate, fractionDigits) {
    return $8b3868383cdaeca1$export$d9468344d3651243(coordinate, "{x}, {y}", fractionDigits);
}
function $8b3868383cdaeca1$export$39a9ce3624977b84(coordinate, projection) {
    if (projection.canWrapX()) {
        const worldWidth = (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(projection.getExtent());
        const worldsAway = $8b3868383cdaeca1$export$24e2b27d1ff0c1d5(coordinate, projection, worldWidth);
        if (worldsAway) coordinate[0] -= worldsAway * worldWidth;
    }
    return coordinate;
}
function $8b3868383cdaeca1$export$24e2b27d1ff0c1d5(coordinate, projection, sourceExtentWidth) {
    const projectionExtent = projection.getExtent();
    let worldsAway = 0;
    if (projection.canWrapX() && (coordinate[0] < projectionExtent[0] || coordinate[0] > projectionExtent[2])) {
        sourceExtentWidth = sourceExtentWidth || (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(projectionExtent);
        worldsAway = Math.floor((coordinate[0] - projectionExtent[0]) / sourceExtentWidth);
    }
    return worldsAway;
}



const $ede96a9a695822c6$export$63f2df7bd7371262 = 6371008.8;
function $ede96a9a695822c6$export$79376507b09a66f(c1, c2, radius) {
    radius = radius || $ede96a9a695822c6$export$63f2df7bd7371262;
    const lat1 = (0, $906cd1f2aa644a1d$export$cba01ba138429a1d)(c1[1]);
    const lat2 = (0, $906cd1f2aa644a1d$export$cba01ba138429a1d)(c2[1]);
    const deltaLatBy2 = (lat2 - lat1) / 2;
    const deltaLonBy2 = (0, $906cd1f2aa644a1d$export$cba01ba138429a1d)(c2[0] - c1[0]) / 2;
    const a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) + Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) * Math.cos(lat1) * Math.cos(lat2);
    return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
/**
 * Get the cumulative great circle length of linestring coordinates (geographic).
 * @param {Array} coordinates Linestring coordinates.
 * @param {number} radius The sphere radius to use.
 * @return {number} The length (in meters).
 */ function $ede96a9a695822c6$var$getLengthInternal(coordinates, radius) {
    let length = 0;
    for(let i = 0, ii = coordinates.length; i < ii - 1; ++i)length += $ede96a9a695822c6$export$79376507b09a66f(coordinates[i], coordinates[i + 1], radius);
    return length;
}
function $ede96a9a695822c6$export$f0d11c074a923179(geometry, options) {
    options = options || {};
    const radius = options.radius || $ede96a9a695822c6$export$63f2df7bd7371262;
    const projection = options.projection || "EPSG:3857";
    const type = geometry.getType();
    if (type !== "GeometryCollection") geometry = geometry.clone().transform(projection, "EPSG:4326");
    let length = 0;
    let coordinates, coords, i, ii, j, jj;
    switch(type){
        case "Point":
        case "MultiPoint":
            break;
        case "LineString":
        case "LinearRing":
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            length = $ede96a9a695822c6$var$getLengthInternal(coordinates, radius);
            break;
        case "MultiLineString":
        case "Polygon":
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            for(i = 0, ii = coordinates.length; i < ii; ++i)length += $ede96a9a695822c6$var$getLengthInternal(coordinates[i], radius);
            break;
        case "MultiPolygon":
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            for(i = 0, ii = coordinates.length; i < ii; ++i){
                coords = coordinates[i];
                for(j = 0, jj = coords.length; j < jj; ++j)length += $ede96a9a695822c6$var$getLengthInternal(coords[j], radius);
            }
            break;
        case "GeometryCollection":
            {
                const geometries = /** @type {import("./geom/GeometryCollection.js").default} */ geometry.getGeometries();
                for(i = 0, ii = geometries.length; i < ii; ++i)length += $ede96a9a695822c6$export$f0d11c074a923179(geometries[i], options);
                break;
            }
        default:
            throw new Error("Unsupported geometry type: " + type);
    }
    return length;
}
/**
 * Returns the spherical area for a list of coordinates.
 *
 * [Reference](https://trs.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @param {number} radius The sphere radius.
 * @return {number} Area (in square meters).
 */ function $ede96a9a695822c6$var$getAreaInternal(coordinates, radius) {
    let area = 0;
    const len = coordinates.length;
    let x1 = coordinates[len - 1][0];
    let y1 = coordinates[len - 1][1];
    for(let i = 0; i < len; i++){
        const x2 = coordinates[i][0];
        const y2 = coordinates[i][1];
        area += (0, $906cd1f2aa644a1d$export$cba01ba138429a1d)(x2 - x1) * (2 + Math.sin((0, $906cd1f2aa644a1d$export$cba01ba138429a1d)(y1)) + Math.sin((0, $906cd1f2aa644a1d$export$cba01ba138429a1d)(y2)));
        x1 = x2;
        y1 = y2;
    }
    return area * radius * radius / 2.0;
}
function $ede96a9a695822c6$export$520c40045967cb15(geometry, options) {
    options = options || {};
    const radius = options.radius || $ede96a9a695822c6$export$63f2df7bd7371262;
    const projection = options.projection || "EPSG:3857";
    const type = geometry.getType();
    if (type !== "GeometryCollection") geometry = geometry.clone().transform(projection, "EPSG:4326");
    let area = 0;
    let coordinates, coords, i, ii, j, jj;
    switch(type){
        case "Point":
        case "MultiPoint":
        case "LineString":
        case "MultiLineString":
        case "LinearRing":
            break;
        case "Polygon":
            coordinates = /** @type {import("./geom/Polygon.js").default} */ geometry.getCoordinates();
            area = Math.abs($ede96a9a695822c6$var$getAreaInternal(coordinates[0], radius));
            for(i = 1, ii = coordinates.length; i < ii; ++i)area -= Math.abs($ede96a9a695822c6$var$getAreaInternal(coordinates[i], radius));
            break;
        case "MultiPolygon":
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            for(i = 0, ii = coordinates.length; i < ii; ++i){
                coords = coordinates[i];
                area += Math.abs($ede96a9a695822c6$var$getAreaInternal(coords[0], radius));
                for(j = 1, jj = coords.length; j < jj; ++j)area -= Math.abs($ede96a9a695822c6$var$getAreaInternal(coords[j], radius));
            }
            break;
        case "GeometryCollection":
            {
                const geometries = /** @type {import("./geom/GeometryCollection.js").default} */ geometry.getGeometries();
                for(i = 0, ii = geometries.length; i < ii; ++i)area += $ede96a9a695822c6$export$520c40045967cb15(geometries[i], options);
                break;
            }
        default:
            throw new Error("Unsupported geometry type: " + type);
    }
    return area;
}
function $ede96a9a695822c6$export$cc800923e997bb8(c1, distance, bearing, radius) {
    radius = radius || $ede96a9a695822c6$export$63f2df7bd7371262;
    const lat1 = (0, $906cd1f2aa644a1d$export$cba01ba138429a1d)(c1[1]);
    const lon1 = (0, $906cd1f2aa644a1d$export$cba01ba138429a1d)(c1[0]);
    const dByR = distance / radius;
    const lat = Math.asin(Math.sin(lat1) * Math.cos(dByR) + Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing));
    const lon = lon1 + Math.atan2(Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1), Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat));
    return [
        (0, $906cd1f2aa644a1d$export$56cb859c01fa134d)(lon),
        (0, $906cd1f2aa644a1d$export$56cb859c01fa134d)(lat)
    ];
}


let $0a1495ed54ce69a9$var$showCoordinateWarning = true;
function $0a1495ed54ce69a9$export$ed949affbc7c4223(disable) {
    const hide = disable === undefined ? true : disable;
    $0a1495ed54ce69a9$var$showCoordinateWarning = !hide;
}
function $0a1495ed54ce69a9$export$dd516654c5f598fb(input, output, dimension) {
    if (output !== undefined) {
        for(let i = 0, ii = input.length; i < ii; ++i)output[i] = input[i];
        output;
    } else output = input.slice();
    return output;
}
function $0a1495ed54ce69a9$export$83e8ab53904f8022(input, output, dimension) {
    if (output !== undefined && input !== output) {
        for(let i = 0, ii = input.length; i < ii; ++i)output[i] = input[i];
        input = output;
    }
    return input;
}
function $0a1495ed54ce69a9$export$59ae956cd3e343f7(projection) {
    (0, $b18f7703ea8c3ca9$export$e16d8520af44a096)(projection.getCode(), projection);
    (0, $dde5bd7ffb873166$export$e16d8520af44a096)(projection, projection, $0a1495ed54ce69a9$export$dd516654c5f598fb);
}
function $0a1495ed54ce69a9$export$638ad73f7aafb913(projections) {
    projections.forEach($0a1495ed54ce69a9$export$59ae956cd3e343f7);
}
function $0a1495ed54ce69a9$export$3988ae62b71be9a3(projectionLike) {
    return typeof projectionLike === "string" ? (0, $b18f7703ea8c3ca9$export$3988ae62b71be9a3)(projectionLike) : /** @type {Projection} */ projectionLike || null;
}
function $0a1495ed54ce69a9$export$2d8f7b4eec383d44(projection, resolution, point, units) {
    projection = $0a1495ed54ce69a9$export$3988ae62b71be9a3(projection);
    let pointResolution;
    const getter = projection.getPointResolutionFunc();
    if (getter) {
        pointResolution = getter(resolution, point);
        if (units && units !== projection.getUnits()) {
            const metersPerUnit = projection.getMetersPerUnit();
            if (metersPerUnit) pointResolution = pointResolution * metersPerUnit / (0, $361aac7b018b3435$export$1482081eec883108)[units];
        }
    } else {
        const projUnits = projection.getUnits();
        if (projUnits == "degrees" && !units || units == "degrees") pointResolution = resolution;
        else {
            // Estimate point resolution by transforming the center pixel to EPSG:4326,
            // measuring its width and height on the normal sphere, and taking the
            // average of the width and height.
            const toEPSG4326 = $0a1495ed54ce69a9$export$e3c4995a701c26a3(projection, $0a1495ed54ce69a9$export$3988ae62b71be9a3("EPSG:4326"));
            if (toEPSG4326 === $0a1495ed54ce69a9$export$83e8ab53904f8022 && projUnits !== "degrees") // no transform is available
            pointResolution = resolution * projection.getMetersPerUnit();
            else {
                let vertices = [
                    point[0] - resolution / 2,
                    point[1],
                    point[0] + resolution / 2,
                    point[1],
                    point[0],
                    point[1] - resolution / 2,
                    point[0],
                    point[1] + resolution / 2, 
                ];
                vertices = toEPSG4326(vertices, vertices, 2);
                const width = (0, $ede96a9a695822c6$export$79376507b09a66f)(vertices.slice(0, 2), vertices.slice(2, 4));
                const height = (0, $ede96a9a695822c6$export$79376507b09a66f)(vertices.slice(4, 6), vertices.slice(6, 8));
                pointResolution = (width + height) / 2;
            }
            const metersPerUnit1 = units ? (0, $361aac7b018b3435$export$1482081eec883108)[units] : projection.getMetersPerUnit();
            if (metersPerUnit1 !== undefined) pointResolution /= metersPerUnit1;
        }
    }
    return pointResolution;
}
function $0a1495ed54ce69a9$export$eeb8392580a05a37(projections) {
    $0a1495ed54ce69a9$export$638ad73f7aafb913(projections);
    projections.forEach(function(source) {
        projections.forEach(function(destination) {
            if (source !== destination) (0, $dde5bd7ffb873166$export$e16d8520af44a096)(source, destination, $0a1495ed54ce69a9$export$dd516654c5f598fb);
        });
    });
}
function $0a1495ed54ce69a9$export$4856f21c2f184f24(projections1, projections2, forwardTransform, inverseTransform) {
    projections1.forEach(function(projection1) {
        projections2.forEach(function(projection2) {
            (0, $dde5bd7ffb873166$export$e16d8520af44a096)(projection1, projection2, forwardTransform);
            (0, $dde5bd7ffb873166$export$e16d8520af44a096)(projection2, projection1, inverseTransform);
        });
    });
}
function $0a1495ed54ce69a9$export$4860237d10380594() {
    (0, $b18f7703ea8c3ca9$export$42ffd38884aecdac)();
    (0, $dde5bd7ffb873166$export$42ffd38884aecdac)();
}
function $0a1495ed54ce69a9$export$549167224996a0fb(projection, defaultCode) {
    if (!projection) return $0a1495ed54ce69a9$export$3988ae62b71be9a3(defaultCode);
    else if (typeof projection === "string") return $0a1495ed54ce69a9$export$3988ae62b71be9a3(projection);
    else return projection;
}
function $0a1495ed54ce69a9$export$6b4aafd331159e0d(coordTransform) {
    return(/**
     * @param {Array<number>} input Input.
     * @param {Array<number>} [output] Output.
     * @param {number} [dimension] Dimension.
     * @return {Array<number>} Output.
     */ function(input, output, dimension) {
        const length = input.length;
        dimension = dimension !== undefined ? dimension : 2;
        output = output !== undefined ? output : new Array(length);
        for(let i = 0; i < length; i += dimension){
            const point = coordTransform(input.slice(i, i + dimension));
            const pointLength = point.length;
            for(let j = 0, jj = dimension; j < jj; ++j)output[i + j] = j >= pointLength ? input[i + j] : point[j];
        }
        return output;
    });
}
function $0a1495ed54ce69a9$export$6b1c2e6623f4f49d(source, destination, forward, inverse) {
    const sourceProj = $0a1495ed54ce69a9$export$3988ae62b71be9a3(source);
    const destProj = $0a1495ed54ce69a9$export$3988ae62b71be9a3(destination);
    (0, $dde5bd7ffb873166$export$e16d8520af44a096)(sourceProj, destProj, $0a1495ed54ce69a9$export$6b4aafd331159e0d(forward));
    (0, $dde5bd7ffb873166$export$e16d8520af44a096)(destProj, sourceProj, $0a1495ed54ce69a9$export$6b4aafd331159e0d(inverse));
}
function $0a1495ed54ce69a9$export$b15d9668511529b9(coordinate, projection) {
    $0a1495ed54ce69a9$export$ed949affbc7c4223();
    return $0a1495ed54ce69a9$export$51186ad6e864892a(coordinate, "EPSG:4326", projection !== undefined ? projection : "EPSG:3857");
}
function $0a1495ed54ce69a9$export$3fb495868742d370(coordinate, projection) {
    const lonLat = $0a1495ed54ce69a9$export$51186ad6e864892a(coordinate, projection !== undefined ? projection : "EPSG:3857", "EPSG:4326");
    const lon = lonLat[0];
    if (lon < -180 || lon > 180) lonLat[0] = (0, $906cd1f2aa644a1d$export$ba467bec01d66def)(lon + 180, 360) - 180;
    return lonLat;
}
function $0a1495ed54ce69a9$export$fe091d73a555748b(projection1, projection2) {
    if (projection1 === projection2) return true;
    const equalUnits = projection1.getUnits() === projection2.getUnits();
    if (projection1.getCode() === projection2.getCode()) return equalUnits;
    else {
        const transformFunc = $0a1495ed54ce69a9$export$e3c4995a701c26a3(projection1, projection2);
        return transformFunc === $0a1495ed54ce69a9$export$dd516654c5f598fb && equalUnits;
    }
}
function $0a1495ed54ce69a9$export$e3c4995a701c26a3(sourceProjection, destinationProjection) {
    const sourceCode = sourceProjection.getCode();
    const destinationCode = destinationProjection.getCode();
    let transformFunc = (0, $dde5bd7ffb873166$export$3988ae62b71be9a3)(sourceCode, destinationCode);
    if (!transformFunc) transformFunc = $0a1495ed54ce69a9$export$83e8ab53904f8022;
    return transformFunc;
}
function $0a1495ed54ce69a9$export$fce0c6cfca85ed96(source, destination) {
    const sourceProjection = $0a1495ed54ce69a9$export$3988ae62b71be9a3(source);
    const destinationProjection = $0a1495ed54ce69a9$export$3988ae62b71be9a3(destination);
    return $0a1495ed54ce69a9$export$e3c4995a701c26a3(sourceProjection, destinationProjection);
}
function $0a1495ed54ce69a9$export$51186ad6e864892a(coordinate, source, destination) {
    const transformFunc = $0a1495ed54ce69a9$export$fce0c6cfca85ed96(source, destination);
    return transformFunc(coordinate, undefined, coordinate.length);
}
function $0a1495ed54ce69a9$export$751c68e0e0efff79(extent, source, destination, stops) {
    const transformFunc = $0a1495ed54ce69a9$export$fce0c6cfca85ed96(source, destination);
    return (0, $ee16b51bb9f86500$export$9f9dcb98c894b623)(extent, transformFunc, undefined, stops);
}
function $0a1495ed54ce69a9$export$affbde93b1db73f8(point, sourceProjection, destinationProjection) {
    const transformFunc = $0a1495ed54ce69a9$export$e3c4995a701c26a3(sourceProjection, destinationProjection);
    return transformFunc(point);
}
/**
 * @type {Projection|null}
 */ let $0a1495ed54ce69a9$var$userProjection = null;
function $0a1495ed54ce69a9$export$d0aeadbeac54116e(projection) {
    $0a1495ed54ce69a9$var$userProjection = $0a1495ed54ce69a9$export$3988ae62b71be9a3(projection);
}
function $0a1495ed54ce69a9$export$1ae11279759d4e8f() {
    $0a1495ed54ce69a9$var$userProjection = null;
}
function $0a1495ed54ce69a9$export$3973b77d5f6f2790() {
    return $0a1495ed54ce69a9$var$userProjection;
}
function $0a1495ed54ce69a9$export$aa7494edfbe36197() {
    $0a1495ed54ce69a9$export$d0aeadbeac54116e("EPSG:4326");
}
function $0a1495ed54ce69a9$export$698f563af1ba02a5(coordinate, sourceProjection) {
    if (!$0a1495ed54ce69a9$var$userProjection) return coordinate;
    return $0a1495ed54ce69a9$export$51186ad6e864892a(coordinate, sourceProjection, $0a1495ed54ce69a9$var$userProjection);
}
function $0a1495ed54ce69a9$export$d4b8ec0b96db1ee2(coordinate, destProjection) {
    if (!$0a1495ed54ce69a9$var$userProjection) {
        if ($0a1495ed54ce69a9$var$showCoordinateWarning && !(0, $8b3868383cdaeca1$export$e9bab7fafb253603)(coordinate, [
            0,
            0
        ]) && coordinate[0] >= -180 && coordinate[0] <= 180 && coordinate[1] >= -90 && coordinate[1] <= 90) {
            $0a1495ed54ce69a9$var$showCoordinateWarning = false;
            // eslint-disable-next-line no-console
            console.warn("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.");
        }
        return coordinate;
    }
    return $0a1495ed54ce69a9$export$51186ad6e864892a(coordinate, $0a1495ed54ce69a9$var$userProjection, destProjection);
}
function $0a1495ed54ce69a9$export$96bfd09e2cffb006(extent, sourceProjection) {
    if (!$0a1495ed54ce69a9$var$userProjection) return extent;
    return $0a1495ed54ce69a9$export$751c68e0e0efff79(extent, sourceProjection, $0a1495ed54ce69a9$var$userProjection);
}
function $0a1495ed54ce69a9$export$494be3a3a25689ca(extent, destProjection) {
    if (!$0a1495ed54ce69a9$var$userProjection) return extent;
    return $0a1495ed54ce69a9$export$751c68e0e0efff79(extent, $0a1495ed54ce69a9$var$userProjection, destProjection);
}
function $0a1495ed54ce69a9$export$b56bb8ad8b3a00e9(resolution, sourceProjection) {
    if (!$0a1495ed54ce69a9$var$userProjection) return resolution;
    const sourceUnits = $0a1495ed54ce69a9$export$3988ae62b71be9a3(sourceProjection).getUnits();
    const userUnits = $0a1495ed54ce69a9$var$userProjection.getUnits();
    return sourceUnits && userUnits ? resolution * (0, $361aac7b018b3435$export$1482081eec883108)[sourceUnits] / (0, $361aac7b018b3435$export$1482081eec883108)[userUnits] : resolution;
}
function $0a1495ed54ce69a9$export$bd1cd3b88140b906(resolution, destProjection) {
    if (!$0a1495ed54ce69a9$var$userProjection) return resolution;
    const sourceUnits = $0a1495ed54ce69a9$export$3988ae62b71be9a3(destProjection).getUnits();
    const userUnits = $0a1495ed54ce69a9$var$userProjection.getUnits();
    return sourceUnits && userUnits ? resolution * (0, $361aac7b018b3435$export$1482081eec883108)[userUnits] / (0, $361aac7b018b3435$export$1482081eec883108)[sourceUnits] : resolution;
}
function $0a1495ed54ce69a9$export$1873f9cfeb8bd1d6(sourceProj, destProj, transform) {
    return function(coord) {
        let transformed, worldsAway;
        if (sourceProj.canWrapX()) {
            const sourceExtent = sourceProj.getExtent();
            const sourceExtentWidth = (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(sourceExtent);
            coord = coord.slice(0);
            worldsAway = (0, $8b3868383cdaeca1$export$24e2b27d1ff0c1d5)(coord, sourceProj, sourceExtentWidth);
            if (worldsAway) // Move x to the real world
            coord[0] = coord[0] - worldsAway * sourceExtentWidth;
            coord[0] = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(coord[0], sourceExtent[0], sourceExtent[2]);
            coord[1] = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(coord[1], sourceExtent[1], sourceExtent[3]);
            transformed = transform(coord);
        } else transformed = transform(coord);
        if (worldsAway && destProj.canWrapX()) // Move transformed coordinate back to the offset world
        transformed[0] += worldsAway * (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(destProj.getExtent());
        return transformed;
    };
}
function $0a1495ed54ce69a9$export$86eed449eb2dcac4() {
    // Add transformations that don't alter coordinates to convert within set of
    // projections with equal meaning.
    $0a1495ed54ce69a9$export$eeb8392580a05a37((0, $1ea7d5f2ccc9d856$export$b508d7ad9a891c1b));
    $0a1495ed54ce69a9$export$eeb8392580a05a37((0, $f735d1f2e74d6223$export$b508d7ad9a891c1b));
    // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
    // coordinates and back.
    $0a1495ed54ce69a9$export$4856f21c2f184f24((0, $f735d1f2e74d6223$export$b508d7ad9a891c1b), (0, $1ea7d5f2ccc9d856$export$b508d7ad9a891c1b), (0, $1ea7d5f2ccc9d856$export$1ff8bb36c0983070), (0, $1ea7d5f2ccc9d856$export$8c71322ec28ed6b4));
}
$0a1495ed54ce69a9$export$86eed449eb2dcac4();



/**
 * Single triangle; consists of 3 source points and 3 target points.
 * @typedef {Object} Triangle
 * @property {Array<import("../coordinate.js").Coordinate>} source Source.
 * @property {Array<import("../coordinate.js").Coordinate>} target Target.
 */ /**
 * Maximum number of subdivision steps during raster reprojection triangulation.
 * Prevents high memory usage and large number of proj4 calls (for certain
 * transformations and areas). At most `2*(2^this)` triangles are created for
 * each triangulated extent (tile/image).
 * @type {number}
 */ const $1195d2a80cd6b84d$var$MAX_SUBDIVISION = 10;
/**
 * Maximum allowed size of triangle relative to world width. When transforming
 * corners of world extent between certain projections, the resulting
 * triangulation seems to have zero error and no subdivision is performed. If
 * the triangle width is more than this (relative to world width; 0-1),
 * subdivison is forced (up to `MAX_SUBDIVISION`). Default is `0.25`.
 * @type {number}
 */ const $1195d2a80cd6b84d$var$MAX_TRIANGLE_WIDTH = 0.25;
/**
 * @classdesc
 * Class containing triangulation of the given target extent.
 * Used for determining source data and the reprojection itself.
 */ class $1195d2a80cd6b84d$var$Triangulation {
    /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
   * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
   * @param {number} errorThreshold Acceptable error (in source units).
   * @param {?number} destinationResolution The (optional) resolution of the destination.
   */ constructor(sourceProj, targetProj, targetExtent, maxSourceExtent, errorThreshold, destinationResolution){
        /**
     * @type {import("../proj/Projection.js").default}
     * @private
     */ this.sourceProj_ = sourceProj;
        /**
     * @type {import("../proj/Projection.js").default}
     * @private
     */ this.targetProj_ = targetProj;
        /** @type {!Object<string, import("../coordinate.js").Coordinate>} */ let transformInvCache = {};
        const transformInv = (0, $0a1495ed54ce69a9$export$fce0c6cfca85ed96)(this.targetProj_, this.sourceProj_);
        /**
     * @param {import("../coordinate.js").Coordinate} c A coordinate.
     * @return {import("../coordinate.js").Coordinate} Transformed coordinate.
     * @private
     */ this.transformInv_ = function(c) {
            const key = c[0] + "/" + c[1];
            if (!transformInvCache[key]) transformInvCache[key] = transformInv(c);
            return transformInvCache[key];
        };
        /**
     * @type {import("../extent.js").Extent}
     * @private
     */ this.maxSourceExtent_ = maxSourceExtent;
        /**
     * @type {number}
     * @private
     */ this.errorThresholdSquared_ = errorThreshold * errorThreshold;
        /**
     * @type {Array<Triangle>}
     * @private
     */ this.triangles_ = [];
        /**
     * Indicates that the triangulation crosses edge of the source projection.
     * @type {boolean}
     * @private
     */ this.wrapsXInSource_ = false;
        /**
     * @type {boolean}
     * @private
     */ this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!maxSourceExtent && !!this.sourceProj_.getExtent() && (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(maxSourceExtent) == (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(this.sourceProj_.getExtent());
        /**
     * @type {?number}
     * @private
     */ this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(this.sourceProj_.getExtent()) : null;
        /**
     * @type {?number}
     * @private
     */ this.targetWorldWidth_ = this.targetProj_.getExtent() ? (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(this.targetProj_.getExtent()) : null;
        const destinationTopLeft = (0, $ee16b51bb9f86500$export$cb1538b07e6964ff)(targetExtent);
        const destinationTopRight = (0, $ee16b51bb9f86500$export$b84fa077c8b05295)(targetExtent);
        const destinationBottomRight = (0, $ee16b51bb9f86500$export$e77c1cf70445e168)(targetExtent);
        const destinationBottomLeft = (0, $ee16b51bb9f86500$export$8d09f5e2e1bf560d)(targetExtent);
        const sourceTopLeft = this.transformInv_(destinationTopLeft);
        const sourceTopRight = this.transformInv_(destinationTopRight);
        const sourceBottomRight = this.transformInv_(destinationBottomRight);
        const sourceBottomLeft = this.transformInv_(destinationBottomLeft);
        /*
     * The maxSubdivision controls how many splittings of the target area can
     * be done. The idea here is to do a linear mapping of the target areas
     * but the actual overal reprojection (can be) extremely non-linear. The
     * default value of MAX_SUBDIVISION was chosen based on mapping a 256x256
     * tile size. However this function is also called to remap canvas rendered
     * layers which can be much larger. This calculation increases the maxSubdivision
     * value by the right factor so that each 256x256 pixel area has
     * MAX_SUBDIVISION divisions.
     */ const maxSubdivision = $1195d2a80cd6b84d$var$MAX_SUBDIVISION + (destinationResolution ? Math.max(0, Math.ceil(Math.log2((0, $ee16b51bb9f86500$export$520c40045967cb15)(targetExtent) / (destinationResolution * destinationResolution * 65536)))) : 0);
        this.addQuad_(destinationTopLeft, destinationTopRight, destinationBottomRight, destinationBottomLeft, sourceTopLeft, sourceTopRight, sourceBottomRight, sourceBottomLeft, maxSubdivision);
        if (this.wrapsXInSource_) {
            let leftBound = Infinity;
            this.triangles_.forEach(function(triangle, i, arr) {
                leftBound = Math.min(leftBound, triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]);
            });
            // Shift triangles to be as close to `leftBound` as possible
            // (if the distance is more than `worldWidth / 2` it can be closer.
            this.triangles_.forEach((function(triangle) {
                if (Math.max(triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]) - leftBound > this.sourceWorldWidth_ / 2) {
                    const newTriangle = [
                        [
                            triangle.source[0][0],
                            triangle.source[0][1]
                        ],
                        [
                            triangle.source[1][0],
                            triangle.source[1][1]
                        ],
                        [
                            triangle.source[2][0],
                            triangle.source[2][1]
                        ], 
                    ];
                    if (newTriangle[0][0] - leftBound > this.sourceWorldWidth_ / 2) newTriangle[0][0] -= this.sourceWorldWidth_;
                    if (newTriangle[1][0] - leftBound > this.sourceWorldWidth_ / 2) newTriangle[1][0] -= this.sourceWorldWidth_;
                    if (newTriangle[2][0] - leftBound > this.sourceWorldWidth_ / 2) newTriangle[2][0] -= this.sourceWorldWidth_;
                    // Rarely (if the extent contains both the dateline and prime meridian)
                    // the shift can in turn break some triangles.
                    // Detect this here and don't shift in such cases.
                    const minX = Math.min(newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
                    const maxX = Math.max(newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
                    if (maxX - minX < this.sourceWorldWidth_ / 2) triangle.source = newTriangle;
                }
            }).bind(this));
        }
        transformInvCache = {};
    }
    /**
   * Adds triangle to the triangulation.
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @private
   */ addTriangle_(a, b, c, aSrc, bSrc, cSrc) {
        this.triangles_.push({
            source: [
                aSrc,
                bSrc,
                cSrc
            ],
            target: [
                a,
                b,
                c
            ]
        });
    }
    /**
   * Adds quad (points in clock-wise order) to the triangulation
   * (and reprojects the vertices) if valid.
   * Performs quad subdivision if needed to increase precision.
   *
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} d The target d coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @param {import("../coordinate.js").Coordinate} dSrc The source d coordinate.
   * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
   * @private
   */ addQuad_(a, b, c, d, aSrc, bSrc, cSrc, dSrc, maxSubdivision) {
        const sourceQuadExtent = (0, $ee16b51bb9f86500$export$8aceca7c77505534)([
            aSrc,
            bSrc,
            cSrc,
            dSrc
        ]);
        const sourceCoverageX = this.sourceWorldWidth_ ? (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(sourceQuadExtent) / this.sourceWorldWidth_ : null;
        const sourceWorldWidth = this.sourceWorldWidth_;
        // when the quad is wrapped in the source projection
        // it covers most of the projection extent, but not fully
        const wrapsX = this.sourceProj_.canWrapX() && sourceCoverageX > 0.5 && sourceCoverageX < 1;
        let needsSubdivision = false;
        if (maxSubdivision > 0) {
            if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
                const targetQuadExtent = (0, $ee16b51bb9f86500$export$8aceca7c77505534)([
                    a,
                    b,
                    c,
                    d
                ]);
                const targetCoverageX = (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(targetQuadExtent) / this.targetWorldWidth_;
                needsSubdivision = targetCoverageX > $1195d2a80cd6b84d$var$MAX_TRIANGLE_WIDTH || needsSubdivision;
            }
            if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) needsSubdivision = sourceCoverageX > $1195d2a80cd6b84d$var$MAX_TRIANGLE_WIDTH || needsSubdivision;
        }
        if (!needsSubdivision && this.maxSourceExtent_) {
            if (isFinite(sourceQuadExtent[0]) && isFinite(sourceQuadExtent[1]) && isFinite(sourceQuadExtent[2]) && isFinite(sourceQuadExtent[3])) {
                if (!(0, $ee16b51bb9f86500$export$7b0a31e10bbff018)(sourceQuadExtent, this.maxSourceExtent_)) // whole quad outside source projection extent -> ignore
                return;
            }
        }
        let isNotFinite = 0;
        if (!needsSubdivision) {
            if (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) || !isFinite(bSrc[0]) || !isFinite(bSrc[1]) || !isFinite(cSrc[0]) || !isFinite(cSrc[1]) || !isFinite(dSrc[0]) || !isFinite(dSrc[1])) {
                if (maxSubdivision > 0) needsSubdivision = true;
                else {
                    // It might be the case that only 1 of the points is infinite. In this case
                    // we can draw a single triangle with the other three points
                    isNotFinite = (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) ? 8 : 0) + (!isFinite(bSrc[0]) || !isFinite(bSrc[1]) ? 4 : 0) + (!isFinite(cSrc[0]) || !isFinite(cSrc[1]) ? 2 : 0) + (!isFinite(dSrc[0]) || !isFinite(dSrc[1]) ? 1 : 0);
                    if (isNotFinite != 1 && isNotFinite != 2 && isNotFinite != 4 && isNotFinite != 8) return;
                }
            }
        }
        if (maxSubdivision > 0) {
            if (!needsSubdivision) {
                const center = [
                    (a[0] + c[0]) / 2,
                    (a[1] + c[1]) / 2
                ];
                const centerSrc = this.transformInv_(center);
                let dx;
                if (wrapsX) {
                    const centerSrcEstimX = ((0, $906cd1f2aa644a1d$export$ba467bec01d66def)(aSrc[0], sourceWorldWidth) + (0, $906cd1f2aa644a1d$export$ba467bec01d66def)(cSrc[0], sourceWorldWidth)) / 2;
                    dx = centerSrcEstimX - (0, $906cd1f2aa644a1d$export$ba467bec01d66def)(centerSrc[0], sourceWorldWidth);
                } else dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
                const dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
                const centerSrcErrorSquared = dx * dx + dy * dy;
                needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
            }
            if (needsSubdivision) {
                if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
                    // split horizontally (top & bottom)
                    const bc = [
                        (b[0] + c[0]) / 2,
                        (b[1] + c[1]) / 2
                    ];
                    const bcSrc = this.transformInv_(bc);
                    const da = [
                        (d[0] + a[0]) / 2,
                        (d[1] + a[1]) / 2
                    ];
                    const daSrc = this.transformInv_(da);
                    this.addQuad_(a, b, bc, da, aSrc, bSrc, bcSrc, daSrc, maxSubdivision - 1);
                    this.addQuad_(da, bc, c, d, daSrc, bcSrc, cSrc, dSrc, maxSubdivision - 1);
                } else {
                    // split vertically (left & right)
                    const ab = [
                        (a[0] + b[0]) / 2,
                        (a[1] + b[1]) / 2
                    ];
                    const abSrc = this.transformInv_(ab);
                    const cd = [
                        (c[0] + d[0]) / 2,
                        (c[1] + d[1]) / 2
                    ];
                    const cdSrc = this.transformInv_(cd);
                    this.addQuad_(a, ab, cd, d, aSrc, abSrc, cdSrc, dSrc, maxSubdivision - 1);
                    this.addQuad_(ab, b, c, cd, abSrc, bSrc, cSrc, cdSrc, maxSubdivision - 1);
                }
                return;
            }
        }
        if (wrapsX) {
            if (!this.canWrapXInSource_) return;
            this.wrapsXInSource_ = true;
        }
        // Exactly zero or one of *Src is not finite
        // The triangles must have the diagonal line as the first side
        // This is to allow easy code in reproj.s to make it straight for broken
        // browsers that can't handle diagonal clipping
        if ((isNotFinite & 0xb) == 0) this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
        if ((isNotFinite & 0xe) == 0) this.addTriangle_(a, c, b, aSrc, cSrc, bSrc);
        if (isNotFinite) {
            // Try the other two triangles
            if ((isNotFinite & 0xd) == 0) this.addTriangle_(b, d, a, bSrc, dSrc, aSrc);
            if ((isNotFinite & 0x7) == 0) this.addTriangle_(b, d, c, bSrc, dSrc, cSrc);
        }
    }
    /**
   * Calculates extent of the `source` coordinates from all the triangles.
   *
   * @return {import("../extent.js").Extent} Calculated extent.
   */ calculateSourceExtent() {
        const extent = (0, $ee16b51bb9f86500$export$fe201bb3bbe031e9)();
        this.triangles_.forEach(function(triangle, i, arr) {
            const src = triangle.source;
            (0, $ee16b51bb9f86500$export$1f820e3920fa5715)(extent, src[0]);
            (0, $ee16b51bb9f86500$export$1f820e3920fa5715)(extent, src[1]);
            (0, $ee16b51bb9f86500$export$1f820e3920fa5715)(extent, src[2]);
        });
        return extent;
    }
    /**
   * @return {Array<Triangle>} Array of the calculated triangles.
   */ getTriangles() {
        return this.triangles_;
    }
}
var $1195d2a80cd6b84d$export$2e2bcd8739ae039 = $1195d2a80cd6b84d$var$Triangulation;






let $b6c1f1eb8b5bea23$var$brokenDiagonalRendering_;
const $b6c1f1eb8b5bea23$export$a166f0857c555517 = [];
/**
 * This draws a small triangle into a canvas by setting the triangle as the clip region
 * and then drawing a (too large) rectangle
 *
 * @param {CanvasRenderingContext2D} ctx The context in which to draw the triangle
 * @param {number} u1 The x-coordinate of the second point. The first point is 0,0.
 * @param {number} v1 The y-coordinate of the second point.
 * @param {number} u2 The x-coordinate of the third point.
 * @param {number} v2 The y-coordinate of the third point.
 */ function $b6c1f1eb8b5bea23$var$drawTestTriangle(ctx, u1, v1, u2, v2) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(u1, v1);
    ctx.lineTo(u2, v2);
    ctx.closePath();
    ctx.save();
    ctx.clip();
    ctx.fillRect(0, 0, Math.max(u1, u2) + 1, Math.max(v1, v2));
    ctx.restore();
}
/**
 * Given the data from getImageData, see if the right values appear at the provided offset.
 * Returns true if either the color or transparency is off
 *
 * @param {Uint8ClampedArray} data The data returned from getImageData
 * @param {number} offset The pixel offset from the start of data.
 * @return {boolean} true if the diagonal rendering is broken
 */ function $b6c1f1eb8b5bea23$var$verifyBrokenDiagonalRendering(data, offset) {
    // the values ought to be close to the rgba(210, 0, 0, 0.75)
    return Math.abs(data[offset * 4] - 210) > 2 || Math.abs(data[offset * 4 + 3] - 191.25) > 2;
}
/**
 * Determines if the current browser configuration can render triangular clip regions correctly.
 * This value is cached so the function is only expensive the first time called.
 * Firefox on Windows (as of now) does not if HWA is enabled. See https://bugzilla.mozilla.org/show_bug.cgi?id=1606976
 * Chrome works, and everything seems to work on OSX and Android. This function caches the
 * result. I suppose that it is conceivably possible that a browser might flip modes while the app is
 * running, but lets hope not.
 *
 * @return {boolean} true if the Diagonal Rendering is broken.
 */ function $b6c1f1eb8b5bea23$var$isBrokenDiagonalRendering() {
    if ($b6c1f1eb8b5bea23$var$brokenDiagonalRendering_ === undefined) {
        const ctx = document.createElement("canvas").getContext("2d");
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = "rgba(210, 0, 0, 0.75)";
        $b6c1f1eb8b5bea23$var$drawTestTriangle(ctx, 4, 5, 4, 0);
        $b6c1f1eb8b5bea23$var$drawTestTriangle(ctx, 4, 5, 0, 5);
        const data = ctx.getImageData(0, 0, 3, 3).data;
        $b6c1f1eb8b5bea23$var$brokenDiagonalRendering_ = $b6c1f1eb8b5bea23$var$verifyBrokenDiagonalRendering(data, 0) || $b6c1f1eb8b5bea23$var$verifyBrokenDiagonalRendering(data, 4) || $b6c1f1eb8b5bea23$var$verifyBrokenDiagonalRendering(data, 8);
    }
    return $b6c1f1eb8b5bea23$var$brokenDiagonalRendering_;
}
function $b6c1f1eb8b5bea23$export$5fbb958059b7e71f(sourceProj, targetProj, targetCenter, targetResolution) {
    const sourceCenter = (0, $0a1495ed54ce69a9$export$51186ad6e864892a)(targetCenter, targetProj, sourceProj);
    // calculate the ideal resolution of the source data
    let sourceResolution = (0, $0a1495ed54ce69a9$export$2d8f7b4eec383d44)(targetProj, targetResolution, targetCenter);
    const targetMetersPerUnit = targetProj.getMetersPerUnit();
    if (targetMetersPerUnit !== undefined) sourceResolution *= targetMetersPerUnit;
    const sourceMetersPerUnit = sourceProj.getMetersPerUnit();
    if (sourceMetersPerUnit !== undefined) sourceResolution /= sourceMetersPerUnit;
    // Based on the projection properties, the point resolution at the specified
    // coordinates may be slightly different. We need to reverse-compensate this
    // in order to achieve optimal results.
    const sourceExtent = sourceProj.getExtent();
    if (!sourceExtent || (0, $ee16b51bb9f86500$export$ac68c24d37ca240f)(sourceExtent, sourceCenter)) {
        const compensationFactor = (0, $0a1495ed54ce69a9$export$2d8f7b4eec383d44)(sourceProj, sourceResolution, sourceCenter) / sourceResolution;
        if (isFinite(compensationFactor) && compensationFactor > 0) sourceResolution /= compensationFactor;
    }
    return sourceResolution;
}
function $b6c1f1eb8b5bea23$export$16d356211d01f1cc(sourceProj, targetProj, targetExtent, targetResolution) {
    const targetCenter = (0, $ee16b51bb9f86500$export$c91255cadecfe081)(targetExtent);
    let sourceResolution = $b6c1f1eb8b5bea23$export$5fbb958059b7e71f(sourceProj, targetProj, targetCenter, targetResolution);
    if (!isFinite(sourceResolution) || sourceResolution <= 0) (0, $ee16b51bb9f86500$export$f9ed8a3d123a08e2)(targetExtent, function(corner) {
        sourceResolution = $b6c1f1eb8b5bea23$export$5fbb958059b7e71f(sourceProj, targetProj, corner, targetResolution);
        return isFinite(sourceResolution) && sourceResolution > 0;
    });
    return sourceResolution;
}
function $b6c1f1eb8b5bea23$export$b3890eb0ae9dca99(width, height, pixelRatio, sourceResolution, sourceExtent, targetResolution, targetExtent, triangulation, sources, gutter, renderEdges, interpolate) {
    const context = (0, $51108d26d56c4955$export$9e05d10eae75c464)(Math.round(pixelRatio * width), Math.round(pixelRatio * height), $b6c1f1eb8b5bea23$export$a166f0857c555517);
    if (!interpolate) context.imageSmoothingEnabled = false;
    if (sources.length === 0) return context.canvas;
    context.scale(pixelRatio, pixelRatio);
    function pixelRound(value) {
        return Math.round(value * pixelRatio) / pixelRatio;
    }
    context.globalCompositeOperation = "lighter";
    const sourceDataExtent = (0, $ee16b51bb9f86500$export$fe201bb3bbe031e9)();
    sources.forEach(function(src, i, arr) {
        (0, $ee16b51bb9f86500$export$8b58be045bf06082)(sourceDataExtent, src.extent);
    });
    const canvasWidthInUnits = (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(sourceDataExtent);
    const canvasHeightInUnits = (0, $ee16b51bb9f86500$export$c08559766941f856)(sourceDataExtent);
    const stitchContext = (0, $51108d26d56c4955$export$9e05d10eae75c464)(Math.round(pixelRatio * canvasWidthInUnits / sourceResolution), Math.round(pixelRatio * canvasHeightInUnits / sourceResolution));
    if (!interpolate) stitchContext.imageSmoothingEnabled = false;
    const stitchScale = pixelRatio / sourceResolution;
    sources.forEach(function(src, i, arr) {
        const xPos = src.extent[0] - sourceDataExtent[0];
        const yPos = -(src.extent[3] - sourceDataExtent[3]);
        const srcWidth = (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(src.extent);
        const srcHeight = (0, $ee16b51bb9f86500$export$c08559766941f856)(src.extent);
        // This test should never fail -- but it does. Need to find a fix the upstream condition
        if (src.image.width > 0 && src.image.height > 0) stitchContext.drawImage(src.image, gutter, gutter, src.image.width - 2 * gutter, src.image.height - 2 * gutter, xPos * stitchScale, yPos * stitchScale, srcWidth * stitchScale, srcHeight * stitchScale);
    });
    const targetTopLeft = (0, $ee16b51bb9f86500$export$cb1538b07e6964ff)(targetExtent);
    triangulation.getTriangles().forEach(function(triangle, i, arr) {
        /* Calculate affine transform (src -> dst)
     * Resulting matrix can be used to transform coordinate
     * from `sourceProjection` to destination pixels.
     *
     * To optimize number of context calls and increase numerical stability,
     * we also do the following operations:
     * trans(-topLeftExtentCorner), scale(1 / targetResolution), scale(1, -1)
     * here before solving the linear system so [ui, vi] are pixel coordinates.
     *
     * Src points: xi, yi
     * Dst points: ui, vi
     * Affine coefficients: aij
     *
     * | x0 y0 1  0  0 0 |   |a00|   |u0|
     * | x1 y1 1  0  0 0 |   |a01|   |u1|
     * | x2 y2 1  0  0 0 | x |a02| = |u2|
     * |  0  0 0 x0 y0 1 |   |a10|   |v0|
     * |  0  0 0 x1 y1 1 |   |a11|   |v1|
     * |  0  0 0 x2 y2 1 |   |a12|   |v2|
     */ const source = triangle.source;
        const target = triangle.target;
        let x0 = source[0][0], y0 = source[0][1];
        let x1 = source[1][0], y1 = source[1][1];
        let x2 = source[2][0], y2 = source[2][1];
        // Make sure that everything is on pixel boundaries
        const u0 = pixelRound((target[0][0] - targetTopLeft[0]) / targetResolution);
        const v0 = pixelRound(-(target[0][1] - targetTopLeft[1]) / targetResolution);
        const u1 = pixelRound((target[1][0] - targetTopLeft[0]) / targetResolution);
        const v1 = pixelRound(-(target[1][1] - targetTopLeft[1]) / targetResolution);
        const u2 = pixelRound((target[2][0] - targetTopLeft[0]) / targetResolution);
        const v2 = pixelRound(-(target[2][1] - targetTopLeft[1]) / targetResolution);
        // Shift all the source points to improve numerical stability
        // of all the subsequent calculations. The [x0, y0] is used here.
        // This is also used to simplify the linear system.
        const sourceNumericalShiftX = x0;
        const sourceNumericalShiftY = y0;
        x0 = 0;
        y0 = 0;
        x1 -= sourceNumericalShiftX;
        y1 -= sourceNumericalShiftY;
        x2 -= sourceNumericalShiftX;
        y2 -= sourceNumericalShiftY;
        const augmentedMatrix = [
            [
                x1,
                y1,
                0,
                0,
                u1 - u0
            ],
            [
                x2,
                y2,
                0,
                0,
                u2 - u0
            ],
            [
                0,
                0,
                x1,
                y1,
                v1 - v0
            ],
            [
                0,
                0,
                x2,
                y2,
                v2 - v0
            ], 
        ];
        const affineCoefs = (0, $906cd1f2aa644a1d$export$8240f01c446270e6)(augmentedMatrix);
        if (!affineCoefs) return;
        context.save();
        context.beginPath();
        if ($b6c1f1eb8b5bea23$var$isBrokenDiagonalRendering() || !interpolate) {
            // Make sure that all lines are horizontal or vertical
            context.moveTo(u1, v1);
            // This is the diagonal line. Do it in 4 steps
            const steps = 4;
            const ud = u0 - u1;
            const vd = v0 - v1;
            for(let step = 0; step < steps; step++){
                // Go horizontally
                context.lineTo(u1 + pixelRound((step + 1) * ud / steps), v1 + pixelRound(step * vd / (steps - 1)));
                // Go vertically
                if (step != steps - 1) context.lineTo(u1 + pixelRound((step + 1) * ud / steps), v1 + pixelRound((step + 1) * vd / (steps - 1)));
            }
            // We are almost at u0r, v0r
            context.lineTo(u2, v2);
        } else {
            context.moveTo(u1, v1);
            context.lineTo(u0, v0);
            context.lineTo(u2, v2);
        }
        context.clip();
        context.transform(affineCoefs[0], affineCoefs[2], affineCoefs[1], affineCoefs[3], u0, v0);
        context.translate(sourceDataExtent[0] - sourceNumericalShiftX, sourceDataExtent[3] - sourceNumericalShiftY);
        context.scale(sourceResolution / pixelRatio, -sourceResolution / pixelRatio);
        context.drawImage(stitchContext.canvas, 0, 0);
        context.restore();
    });
    if (renderEdges) {
        context.save();
        context.globalCompositeOperation = "source-over";
        context.strokeStyle = "black";
        context.lineWidth = 1;
        triangulation.getTriangles().forEach(function(triangle, i, arr) {
            const target = triangle.target;
            const u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
            const v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
            const u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
            const v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
            const u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
            const v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;
            context.beginPath();
            context.moveTo(u1, v1);
            context.lineTo(u0, v0);
            context.lineTo(u2, v2);
            context.closePath();
            context.stroke();
        });
        context.restore();
    }
    return context.canvas;
}






/**
 * @typedef {function(number, number, number, number) : import("../Tile.js").default} FunctionType
 */ /**
 * @classdesc
 * Class encapsulating single reprojected tile.
 * See {@link module:ol/source/TileImage~TileImage}.
 *
 */ class $34cf5a2ad7f590fa$var$ReprojTile extends (0, $b06ea1f80b2825d7$export$2e2bcd8739ae039) {
    /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../tilegrid/TileGrid.js").default} sourceTileGrid Source tile grid.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../tilegrid/TileGrid.js").default} targetTileGrid Target tile grid.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Coordinate of the tile.
   * @param {import("../tilecoord.js").TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} gutter Gutter of the source tiles.
   * @param {FunctionType} getTileFunction
   *     Function returning source tiles (z, x, y, pixelRatio).
   * @param {number} [errorThreshold] Acceptable reprojection error (in px).
   * @param {boolean} [renderEdges] Render reprojection edges.
   * @param {boolean} [interpolate] Use linear interpolation when resampling.
   */ constructor(sourceProj, sourceTileGrid, targetProj, targetTileGrid, tileCoord, wrappedTileCoord, pixelRatio, gutter, getTileFunction, errorThreshold, renderEdges, interpolate){
        super(tileCoord, (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE, {
            interpolate: !!interpolate
        });
        /**
     * @private
     * @type {boolean}
     */ this.renderEdges_ = renderEdges !== undefined ? renderEdges : false;
        /**
     * @private
     * @type {number}
     */ this.pixelRatio_ = pixelRatio;
        /**
     * @private
     * @type {number}
     */ this.gutter_ = gutter;
        /**
     * @private
     * @type {HTMLCanvasElement}
     */ this.canvas_ = null;
        /**
     * @private
     * @type {import("../tilegrid/TileGrid.js").default}
     */ this.sourceTileGrid_ = sourceTileGrid;
        /**
     * @private
     * @type {import("../tilegrid/TileGrid.js").default}
     */ this.targetTileGrid_ = targetTileGrid;
        /**
     * @private
     * @type {import("../tilecoord.js").TileCoord}
     */ this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;
        /**
     * @private
     * @type {!Array<import("../Tile.js").default>}
     */ this.sourceTiles_ = [];
        /**
     * @private
     * @type {?Array<import("../events.js").EventsKey>}
     */ this.sourcesListenerKeys_ = null;
        /**
     * @private
     * @type {number}
     */ this.sourceZ_ = 0;
        const targetExtent = targetTileGrid.getTileCoordExtent(this.wrappedTileCoord_);
        const maxTargetExtent = this.targetTileGrid_.getExtent();
        let maxSourceExtent = this.sourceTileGrid_.getExtent();
        const limitedTargetExtent = maxTargetExtent ? (0, $ee16b51bb9f86500$export$72209efa88586d42)(targetExtent, maxTargetExtent) : targetExtent;
        if ((0, $ee16b51bb9f86500$export$520c40045967cb15)(limitedTargetExtent) === 0) {
            // Tile is completely outside range -> EMPTY
            // TODO: is it actually correct that the source even creates the tile ?
            this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY;
            return;
        }
        const sourceProjExtent = sourceProj.getExtent();
        if (sourceProjExtent) {
            if (!maxSourceExtent) maxSourceExtent = sourceProjExtent;
            else maxSourceExtent = (0, $ee16b51bb9f86500$export$72209efa88586d42)(maxSourceExtent, sourceProjExtent);
        }
        const targetResolution = targetTileGrid.getResolution(this.wrappedTileCoord_[0]);
        const sourceResolution = (0, $b6c1f1eb8b5bea23$export$16d356211d01f1cc)(sourceProj, targetProj, limitedTargetExtent, targetResolution);
        if (!isFinite(sourceResolution) || sourceResolution <= 0) {
            // invalid sourceResolution -> EMPTY
            // probably edges of the projections when no extent is defined
            this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY;
            return;
        }
        const errorThresholdInPixels = errorThreshold !== undefined ? errorThreshold : (0, $37142e3635297b37$export$3ecb4bcfa5aae855);
        /**
     * @private
     * @type {!import("./Triangulation.js").default}
     */ this.triangulation_ = new (0, $1195d2a80cd6b84d$export$2e2bcd8739ae039)(sourceProj, targetProj, limitedTargetExtent, maxSourceExtent, sourceResolution * errorThresholdInPixels, targetResolution);
        if (this.triangulation_.getTriangles().length === 0) {
            // no valid triangles -> EMPTY
            this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY;
            return;
        }
        this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
        let sourceExtent = this.triangulation_.calculateSourceExtent();
        if (maxSourceExtent) {
            if (sourceProj.canWrapX()) {
                sourceExtent[1] = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(sourceExtent[1], maxSourceExtent[1], maxSourceExtent[3]);
                sourceExtent[3] = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(sourceExtent[3], maxSourceExtent[1], maxSourceExtent[3]);
            } else sourceExtent = (0, $ee16b51bb9f86500$export$72209efa88586d42)(sourceExtent, maxSourceExtent);
        }
        if (!(0, $ee16b51bb9f86500$export$520c40045967cb15)(sourceExtent)) this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY;
        else {
            const sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(sourceExtent, this.sourceZ_);
            for(let srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++)for(let srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++){
                const tile = getTileFunction(this.sourceZ_, srcX, srcY, pixelRatio);
                if (tile) this.sourceTiles_.push(tile);
            }
            if (this.sourceTiles_.length === 0) this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY;
        }
    }
    /**
   * Get the HTML Canvas element for this tile.
   * @return {HTMLCanvasElement} Canvas.
   */ getImage() {
        return this.canvas_;
    }
    /**
   * @private
   */ reproject_() {
        const sources = [];
        this.sourceTiles_.forEach((function(tile, i, arr) {
            if (tile && tile.getState() == (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED) sources.push({
                extent: this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord),
                image: tile.getImage()
            });
        }).bind(this));
        this.sourceTiles_.length = 0;
        if (sources.length === 0) this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR;
        else {
            const z = this.wrappedTileCoord_[0];
            const size = this.targetTileGrid_.getTileSize(z);
            const width = typeof size === "number" ? size : size[0];
            const height = typeof size === "number" ? size : size[1];
            const targetResolution = this.targetTileGrid_.getResolution(z);
            const sourceResolution = this.sourceTileGrid_.getResolution(this.sourceZ_);
            const targetExtent = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
            this.canvas_ = (0, $b6c1f1eb8b5bea23$export$b3890eb0ae9dca99)(width, height, this.pixelRatio_, sourceResolution, this.sourceTileGrid_.getExtent(), targetResolution, targetExtent, this.triangulation_, sources, this.gutter_, this.renderEdges_, this.interpolate);
            this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED;
        }
        this.changed();
    }
    /**
   * Load not yet loaded URI.
   */ load() {
        if (this.state == (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE) {
            this.state = (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADING;
            this.changed();
            let leftToLoad = 0;
            this.sourcesListenerKeys_ = [];
            this.sourceTiles_.forEach((function(tile, i, arr) {
                const state = tile.getState();
                if (state == (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE || state == (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADING) {
                    leftToLoad++;
                    const sourceListenKey = (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(tile, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE, function(e) {
                        const state = tile.getState();
                        if (state == (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED || state == (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR || state == (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY) {
                            (0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(sourceListenKey);
                            leftToLoad--;
                            if (leftToLoad === 0) {
                                this.unlistenSources_();
                                this.reproject_();
                            }
                        }
                    }, this);
                    this.sourcesListenerKeys_.push(sourceListenKey);
                }
            }).bind(this));
            if (leftToLoad === 0) setTimeout(this.reproject_.bind(this), 0);
            else this.sourceTiles_.forEach(function(tile, i, arr) {
                const state = tile.getState();
                if (state == (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE) tile.load();
            });
        }
    }
    /**
   * @private
   */ unlistenSources_() {
        this.sourcesListenerKeys_.forEach((0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921));
        this.sourcesListenerKeys_ = null;
    }
    /**
   * Remove from the cache due to expiry
   */ release() {
        if (this.canvas_) {
            (0, $51108d26d56c4955$export$e918ac6a1026a12a)(this.canvas_.getContext("2d"));
            (0, $b6c1f1eb8b5bea23$export$a166f0857c555517).push(this.canvas_);
            this.canvas_ = null;
        }
        super.release();
    }
}
var $34cf5a2ad7f590fa$export$2e2bcd8739ae039 = $34cf5a2ad7f590fa$var$ReprojTile;


/**
 * @module ol/TileRange
 */ /**
 * A representation of a contiguous block of tiles.  A tile range is specified
 * by its min/max tile coordinates and is inclusive of coordinates.
 */ class $b38ddf86725f165c$var$TileRange {
    /**
   * @param {number} minX Minimum X.
   * @param {number} maxX Maximum X.
   * @param {number} minY Minimum Y.
   * @param {number} maxY Maximum Y.
   */ constructor(minX, maxX, minY, maxY){
        /**
     * @type {number}
     */ this.minX = minX;
        /**
     * @type {number}
     */ this.maxX = maxX;
        /**
     * @type {number}
     */ this.minY = minY;
        /**
     * @type {number}
     */ this.maxY = maxY;
    }
    /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {boolean} Contains tile coordinate.
   */ contains(tileCoord) {
        return this.containsXY(tileCoord[1], tileCoord[2]);
    }
    /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Contains.
   */ containsTileRange(tileRange) {
        return this.minX <= tileRange.minX && tileRange.maxX <= this.maxX && this.minY <= tileRange.minY && tileRange.maxY <= this.maxY;
    }
    /**
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @return {boolean} Contains coordinate.
   */ containsXY(x, y) {
        return this.minX <= x && x <= this.maxX && this.minY <= y && y <= this.maxY;
    }
    /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Equals.
   */ equals(tileRange) {
        return this.minX == tileRange.minX && this.minY == tileRange.minY && this.maxX == tileRange.maxX && this.maxY == tileRange.maxY;
    }
    /**
   * @param {TileRange} tileRange Tile range.
   */ extend(tileRange) {
        if (tileRange.minX < this.minX) this.minX = tileRange.minX;
        if (tileRange.maxX > this.maxX) this.maxX = tileRange.maxX;
        if (tileRange.minY < this.minY) this.minY = tileRange.minY;
        if (tileRange.maxY > this.maxY) this.maxY = tileRange.maxY;
    }
    /**
   * @return {number} Height.
   */ getHeight() {
        return this.maxY - this.minY + 1;
    }
    /**
   * @return {import("./size.js").Size} Size.
   */ getSize() {
        return [
            this.getWidth(),
            this.getHeight()
        ];
    }
    /**
   * @return {number} Width.
   */ getWidth() {
        return this.maxX - this.minX + 1;
    }
    /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Intersects.
   */ intersects(tileRange) {
        return this.minX <= tileRange.maxX && this.maxX >= tileRange.minX && this.minY <= tileRange.maxY && this.maxY >= tileRange.minY;
    }
}
function $b38ddf86725f165c$export$958e3e1a02eac4b6(minX, maxX, minY, maxY, tileRange) {
    if (tileRange !== undefined) {
        tileRange.minX = minX;
        tileRange.maxX = maxX;
        tileRange.minY = minY;
        tileRange.maxY = maxY;
        return tileRange;
    } else return new $b38ddf86725f165c$var$TileRange(minX, maxX, minY, maxY);
}
var $b38ddf86725f165c$export$2e2bcd8739ae039 = $b38ddf86725f165c$var$TileRange;








function $670ace09156a4e14$export$ab1029bcae9ddb4a(size, num, dest) {
    if (dest === undefined) dest = [
        0,
        0
    ];
    dest[0] = size[0] + 2 * num;
    dest[1] = size[1] + 2 * num;
    return dest;
}
function $670ace09156a4e14$export$622c471beb1693c7(size) {
    return size[0] > 0 && size[1] > 0;
}
function $670ace09156a4e14$export$dcdf75081b88279d(size, ratio, dest) {
    if (dest === undefined) dest = [
        0,
        0
    ];
    dest[0] = size[0] * ratio + 0.5 | 0;
    dest[1] = size[1] * ratio + 0.5 | 0;
    return dest;
}
function $670ace09156a4e14$export$a71a825ff42fb8e1(size, dest) {
    if (Array.isArray(size)) return size;
    else {
        if (dest === undefined) dest = [
            size,
            size
        ];
        else {
            dest[0] = size;
            dest[1] = size;
        }
        return dest;
    }
}


/**
 * @classdesc
 * Canvas renderer for tile layers.
 * @api
 * @template {import("../../layer/Tile.js").default<import("../../source/Tile.js").default>|import("../../layer/VectorTile.js").default} [LayerType=import("../../layer/Tile.js").default<import("../../source/Tile.js").default>|import("../../layer/VectorTile.js").default]
 * @extends {CanvasLayerRenderer<LayerType>}
 */ class $f5cbb4a4e71f7164$var$CanvasTileLayerRenderer extends (0, $f2f77997c6cc489a$export$2e2bcd8739ae039) {
    /**
   * @param {LayerType} tileLayer Tile layer.
   */ constructor(tileLayer){
        super(tileLayer);
        /**
     * Rendered extent has changed since the previous `renderFrame()` call
     * @type {boolean}
     */ this.extentChanged = true;
        /**
     * @private
     * @type {?import("../../extent.js").Extent}
     */ this.renderedExtent_ = null;
        /**
     * @protected
     * @type {number}
     */ this.renderedPixelRatio;
        /**
     * @protected
     * @type {import("../../proj/Projection.js").default}
     */ this.renderedProjection = null;
        /**
     * @protected
     * @type {number}
     */ this.renderedRevision;
        /**
     * @protected
     * @type {!Array<import("../../Tile.js").default>}
     */ this.renderedTiles = [];
        /**
     * @private
     * @type {boolean}
     */ this.newTiles_ = false;
        /**
     * @protected
     * @type {import("../../extent.js").Extent}
     */ this.tmpExtent = (0, $ee16b51bb9f86500$export$fe201bb3bbe031e9)();
        /**
     * @private
     * @type {import("../../TileRange.js").default}
     */ this.tmpTileRange_ = new (0, $b38ddf86725f165c$export$2e2bcd8739ae039)(0, 0, 0, 0);
    }
    /**
   * @protected
   * @param {import("../../Tile.js").default} tile Tile.
   * @return {boolean} Tile is drawable.
   */ isDrawableTile(tile) {
        const tileLayer = this.getLayer();
        const tileState = tile.getState();
        const useInterimTilesOnError = tileLayer.getUseInterimTilesOnError();
        return tileState == (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED || tileState == (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY || tileState == (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR && !useInterimTilesOnError;
    }
    /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {!import("../../Tile.js").default} Tile.
   */ getTile(z, x, y, frameState) {
        const pixelRatio = frameState.pixelRatio;
        const projection = frameState.viewState.projection;
        const tileLayer = this.getLayer();
        const tileSource = tileLayer.getSource();
        let tile = tileSource.getTile(z, x, y, pixelRatio, projection);
        if (tile.getState() == (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR) {
            if (tileLayer.getUseInterimTilesOnError() && tileLayer.getPreload() > 0) // Preloaded tiles for lower resolutions might have finished loading.
            this.newTiles_ = true;
        }
        if (!this.isDrawableTile(tile)) tile = tile.getInterimTile();
        return tile;
    }
    /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray} Data at the pixel location.
   */ getData(pixel) {
        const frameState = this.frameState;
        if (!frameState) return null;
        const layer = this.getLayer();
        const coordinate = (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(frameState.pixelToCoordinateTransform, pixel.slice());
        const layerExtent = layer.getExtent();
        if (layerExtent) {
            if (!(0, $ee16b51bb9f86500$export$ac68c24d37ca240f)(layerExtent, coordinate)) return null;
        }
        const pixelRatio = frameState.pixelRatio;
        const projection = frameState.viewState.projection;
        const viewState = frameState.viewState;
        const source = layer.getRenderSource();
        const tileGrid = source.getTileGridForProjection(viewState.projection);
        const tilePixelRatio = source.getTilePixelRatio(frameState.pixelRatio);
        for(let z = tileGrid.getZForResolution(viewState.resolution); z >= tileGrid.getMinZoom(); --z){
            const tileCoord = tileGrid.getTileCoordForCoordAndZ(coordinate, z);
            const tile = source.getTile(z, tileCoord[1], tileCoord[2], pixelRatio, projection);
            if (!(tile instanceof (0, $cd8d7f5aa641f1d9$export$2e2bcd8739ae039) || tile instanceof (0, $34cf5a2ad7f590fa$export$2e2bcd8739ae039)) || tile instanceof (0, $34cf5a2ad7f590fa$export$2e2bcd8739ae039) && tile.getState() === (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY) return null;
            if (tile.getState() !== (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED) continue;
            const tileOrigin = tileGrid.getOrigin(z);
            const tileSize = (0, $670ace09156a4e14$export$a71a825ff42fb8e1)(tileGrid.getTileSize(z));
            const tileResolution = tileGrid.getResolution(z);
            const col = Math.floor(tilePixelRatio * ((coordinate[0] - tileOrigin[0]) / tileResolution - tileCoord[1] * tileSize[0]));
            const row = Math.floor(tilePixelRatio * ((tileOrigin[1] - coordinate[1]) / tileResolution - tileCoord[2] * tileSize[1]));
            const gutter = Math.round(tilePixelRatio * source.getGutterForProjection(viewState.projection));
            return this.getImageData(tile.getImage(), col + gutter, row + gutter);
        }
        return null;
    }
    /**
   * @param {Object<number, Object<string, import("../../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */ loadedTileCallback(tiles, zoom, tile) {
        if (this.isDrawableTile(tile)) return super.loadedTileCallback(tiles, zoom, tile);
        return false;
    }
    /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */ prepareFrame(frameState) {
        return !!this.getLayer().getSource();
    }
    /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */ renderFrame(frameState, target) {
        const layerState = frameState.layerStatesArray[frameState.layerIndex];
        const viewState = frameState.viewState;
        const projection = viewState.projection;
        const viewResolution = viewState.resolution;
        const viewCenter = viewState.center;
        const rotation = viewState.rotation;
        const pixelRatio = frameState.pixelRatio;
        const tileLayer = this.getLayer();
        const tileSource = tileLayer.getSource();
        const sourceRevision = tileSource.getRevision();
        const tileGrid = tileSource.getTileGridForProjection(projection);
        const z = tileGrid.getZForResolution(viewResolution, tileSource.zDirection);
        const tileResolution = tileGrid.getResolution(z);
        let extent = frameState.extent;
        const resolution = frameState.viewState.resolution;
        const tilePixelRatio = tileSource.getTilePixelRatio(pixelRatio);
        // desired dimensions of the canvas in pixels
        const width = Math.round((0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(extent) / resolution * pixelRatio);
        const height = Math.round((0, $ee16b51bb9f86500$export$c08559766941f856)(extent) / resolution * pixelRatio);
        const layerExtent = layerState.extent && (0, $0a1495ed54ce69a9$export$494be3a3a25689ca)(layerState.extent, projection);
        if (layerExtent) extent = (0, $ee16b51bb9f86500$export$72209efa88586d42)(extent, (0, $0a1495ed54ce69a9$export$494be3a3a25689ca)(layerState.extent, projection));
        const dx = tileResolution * width / 2 / tilePixelRatio;
        const dy = tileResolution * height / 2 / tilePixelRatio;
        const canvasExtent = [
            viewCenter[0] - dx,
            viewCenter[1] - dy,
            viewCenter[0] + dx,
            viewCenter[1] + dy, 
        ];
        const tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z);
        /**
     * @type {Object<number, Object<string, import("../../Tile.js").default>>}
     */ const tilesToDrawByZ = {};
        tilesToDrawByZ[z] = {};
        const findLoadedTiles = this.createLoadedTileFinder(tileSource, projection, tilesToDrawByZ);
        const tmpExtent = this.tmpExtent;
        const tmpTileRange = this.tmpTileRange_;
        this.newTiles_ = false;
        const viewport = rotation ? (0, $ee16b51bb9f86500$export$4b7a6fb4002cd6ac)(viewState.center, resolution, rotation, frameState.size) : undefined;
        for(let x = tileRange.minX; x <= tileRange.maxX; ++x)for(let y = tileRange.minY; y <= tileRange.maxY; ++y){
            if (rotation && !tileGrid.tileCoordIntersectsViewport([
                z,
                x,
                y
            ], viewport)) continue;
            const tile = this.getTile(z, x, y, frameState);
            if (this.isDrawableTile(tile)) {
                const uid = (0, $386903518769f502$export$5e82334337e0f204)(this);
                if (tile.getState() == (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED) {
                    tilesToDrawByZ[z][tile.tileCoord.toString()] = tile;
                    let inTransition = tile.inTransition(uid);
                    if (inTransition && layerState.opacity !== 1) {
                        // Skipping transition when layer is not fully opaque avoids visual artifacts.
                        tile.endTransition(uid);
                        inTransition = false;
                    }
                    if (!this.newTiles_ && (inTransition || !this.renderedTiles.includes(tile))) this.newTiles_ = true;
                }
                if (tile.getAlpha(uid, frameState.time) === 1) continue;
            }
            const childTileRange = tileGrid.getTileCoordChildTileRange(tile.tileCoord, tmpTileRange, tmpExtent);
            let covered = false;
            if (childTileRange) covered = findLoadedTiles(z + 1, childTileRange);
            if (!covered) tileGrid.forEachTileCoordParentTileRange(tile.tileCoord, findLoadedTiles, tmpTileRange, tmpExtent);
        }
        const canvasScale = tileResolution / viewResolution * pixelRatio / tilePixelRatio;
        // set forward and inverse pixel transforms
        (0, $0e89e72515351739$export$f672e0b6f7222cd7)(this.pixelTransform, frameState.size[0] / 2, frameState.size[1] / 2, 1 / pixelRatio, 1 / pixelRatio, rotation, -width / 2, -height / 2);
        const canvasTransform = (0, $0e89e72515351739$export$f84e8e69fd4488a5)(this.pixelTransform);
        this.useContainer(target, canvasTransform, this.getBackground(frameState));
        const context = this.context;
        const canvas = context.canvas;
        (0, $0e89e72515351739$export$bd70ea2a93c0fa4)(this.inversePixelTransform, this.pixelTransform);
        // set scale transform for calculating tile positions on the canvas
        (0, $0e89e72515351739$export$f672e0b6f7222cd7)(this.tempTransform, width / 2, height / 2, canvasScale, canvasScale, 0, -width / 2, -height / 2);
        if (canvas.width != width || canvas.height != height) {
            canvas.width = width;
            canvas.height = height;
        } else if (!this.containerReused) context.clearRect(0, 0, width, height);
        if (layerExtent) this.clipUnrotated(context, frameState, layerExtent);
        if (!tileSource.getInterpolate()) context.imageSmoothingEnabled = false;
        this.preRender(context, frameState);
        this.renderedTiles.length = 0;
        /** @type {Array<number>} */ let zs = Object.keys(tilesToDrawByZ).map(Number);
        zs.sort((0, $eea510364582e5fa$export$4e734a3b32fb971b));
        let clips, clipZs, currentClip;
        if (layerState.opacity === 1 && (!this.containerReused || tileSource.getOpaque(frameState.viewState.projection))) zs = zs.reverse();
        else {
            clips = [];
            clipZs = [];
        }
        for(let i = zs.length - 1; i >= 0; --i){
            const currentZ = zs[i];
            const currentTilePixelSize = tileSource.getTilePixelSize(currentZ, pixelRatio, projection);
            const currentResolution = tileGrid.getResolution(currentZ);
            const currentScale = currentResolution / tileResolution;
            const dx1 = currentTilePixelSize[0] * currentScale * canvasScale;
            const dy1 = currentTilePixelSize[1] * currentScale * canvasScale;
            const originTileCoord = tileGrid.getTileCoordForCoordAndZ((0, $ee16b51bb9f86500$export$cb1538b07e6964ff)(canvasExtent), currentZ);
            const originTileExtent = tileGrid.getTileCoordExtent(originTileCoord);
            const origin = (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(this.tempTransform, [
                tilePixelRatio * (originTileExtent[0] - canvasExtent[0]) / tileResolution,
                tilePixelRatio * (canvasExtent[3] - originTileExtent[3]) / tileResolution, 
            ]);
            const tileGutter = tilePixelRatio * tileSource.getGutterForProjection(projection);
            const tilesToDraw = tilesToDrawByZ[currentZ];
            for(const tileCoordKey in tilesToDraw){
                const tile1 = tilesToDraw[tileCoordKey];
                const tileCoord = tile1.tileCoord;
                // Calculate integer positions and sizes so that tiles align
                const xIndex = originTileCoord[1] - tileCoord[1];
                const nextX = Math.round(origin[0] - (xIndex - 1) * dx1);
                const yIndex = originTileCoord[2] - tileCoord[2];
                const nextY = Math.round(origin[1] - (yIndex - 1) * dy1);
                const x1 = Math.round(origin[0] - xIndex * dx1);
                const y1 = Math.round(origin[1] - yIndex * dy1);
                const w = nextX - x1;
                const h = nextY - y1;
                const transition = z === currentZ;
                const inTransition1 = transition && tile1.getAlpha((0, $386903518769f502$export$5e82334337e0f204)(this), frameState.time) !== 1;
                let contextSaved = false;
                if (!inTransition1) {
                    if (clips) {
                        // Clip mask for regions in this tile that already filled by a higher z tile
                        currentClip = [
                            x1,
                            y1,
                            x1 + w,
                            y1,
                            x1 + w,
                            y1 + h,
                            x1,
                            y1 + h
                        ];
                        for(let i1 = 0, ii = clips.length; i1 < ii; ++i1)if (z !== currentZ && currentZ < clipZs[i1]) {
                            const clip = clips[i1];
                            if ((0, $ee16b51bb9f86500$export$7b0a31e10bbff018)([
                                x1,
                                y1,
                                x1 + w,
                                y1 + h
                            ], [
                                clip[0],
                                clip[3],
                                clip[4],
                                clip[7]
                            ])) {
                                if (!contextSaved) {
                                    context.save();
                                    contextSaved = true;
                                }
                                context.beginPath();
                                // counter-clockwise (outer ring) for current tile
                                context.moveTo(currentClip[0], currentClip[1]);
                                context.lineTo(currentClip[2], currentClip[3]);
                                context.lineTo(currentClip[4], currentClip[5]);
                                context.lineTo(currentClip[6], currentClip[7]);
                                // clockwise (inner ring) for higher z tile
                                context.moveTo(clip[6], clip[7]);
                                context.lineTo(clip[4], clip[5]);
                                context.lineTo(clip[2], clip[3]);
                                context.lineTo(clip[0], clip[1]);
                                context.clip();
                            }
                        }
                        clips.push(currentClip);
                        clipZs.push(currentZ);
                    } else context.clearRect(x1, y1, w, h);
                }
                this.drawTileImage(tile1, frameState, x1, y1, w, h, tileGutter, transition);
                if (clips && !inTransition1) {
                    if (contextSaved) context.restore();
                    this.renderedTiles.unshift(tile1);
                } else this.renderedTiles.push(tile1);
                this.updateUsedTiles(frameState.usedTiles, tileSource, tile1);
            }
        }
        this.renderedRevision = sourceRevision;
        this.renderedResolution = tileResolution;
        this.extentChanged = !this.renderedExtent_ || !(0, $ee16b51bb9f86500$export$e9bab7fafb253603)(this.renderedExtent_, canvasExtent);
        this.renderedExtent_ = canvasExtent;
        this.renderedPixelRatio = pixelRatio;
        this.renderedProjection = projection;
        this.manageTilePyramid(frameState, tileSource, tileGrid, pixelRatio, projection, extent, z, tileLayer.getPreload());
        this.scheduleExpireCache(frameState, tileSource);
        this.postRender(context, frameState);
        if (layerState.extent) context.restore();
        context.imageSmoothingEnabled = true;
        if (canvasTransform !== canvas.style.transform) canvas.style.transform = canvasTransform;
        return this.container;
    }
    /**
   * @param {import("../../ImageTile.js").default} tile Tile.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} x Left of the tile.
   * @param {number} y Top of the tile.
   * @param {number} w Width of the tile.
   * @param {number} h Height of the tile.
   * @param {number} gutter Tile gutter.
   * @param {boolean} transition Apply an alpha transition.
   */ drawTileImage(tile, frameState, x, y, w, h, gutter, transition) {
        const image = this.getTileImage(tile);
        if (!image) return;
        const uid = (0, $386903518769f502$export$5e82334337e0f204)(this);
        const layerState = frameState.layerStatesArray[frameState.layerIndex];
        const alpha = layerState.opacity * (transition ? tile.getAlpha(uid, frameState.time) : 1);
        const alphaChanged = alpha !== this.context.globalAlpha;
        if (alphaChanged) {
            this.context.save();
            this.context.globalAlpha = alpha;
        }
        this.context.drawImage(image, gutter, gutter, image.width - 2 * gutter, image.height - 2 * gutter, x, y, w, h);
        if (alphaChanged) this.context.restore();
        if (alpha !== layerState.opacity) frameState.animate = true;
        else if (transition) tile.endTransition(uid);
    }
    /**
   * @return {HTMLCanvasElement} Image
   */ getImage() {
        const context = this.context;
        return context ? context.canvas : null;
    }
    /**
   * Get the image from a tile.
   * @param {import("../../ImageTile.js").default} tile Tile.
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @protected
   */ getTileImage(tile) {
        return tile.getImage();
    }
    /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @protected
   */ scheduleExpireCache(frameState, tileSource) {
        if (tileSource.canExpireCache()) {
            /**
       * @param {import("../../source/Tile.js").default} tileSource Tile source.
       * @param {import("../../Map.js").default} map Map.
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       */ const postRenderFunction = (function(tileSource, map, frameState) {
                const tileSourceKey = (0, $386903518769f502$export$5e82334337e0f204)(tileSource);
                if (tileSourceKey in frameState.usedTiles) tileSource.expireCache(frameState.viewState.projection, frameState.usedTiles[tileSourceKey]);
            }).bind(null, tileSource);
            frameState.postRenderFunctions.push(postRenderFunction);
        }
    }
    /**
   * @param {!Object<string, !Object<string, boolean>>} usedTiles Used tiles.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @param {import('../../Tile.js').default} tile Tile.
   * @protected
   */ updateUsedTiles(usedTiles, tileSource, tile) {
        // FIXME should we use tilesToDrawByZ instead?
        const tileSourceKey = (0, $386903518769f502$export$5e82334337e0f204)(tileSource);
        if (!(tileSourceKey in usedTiles)) usedTiles[tileSourceKey] = {};
        usedTiles[tileSourceKey][tile.getKey()] = true;
    }
    /**
   * Manage tile pyramid.
   * This function performs a number of functions related to the tiles at the
   * current zoom and lower zoom levels:
   * - registers idle tiles in frameState.wantedTiles so that they are not
   *   discarded by the tile queue
   * - enqueues missing tiles
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @param {import("../../tilegrid/TileGrid.js").default} tileGrid Tile grid.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../proj/Projection.js").default} projection Projection.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {number} currentZ Current Z.
   * @param {number} preload Load low resolution tiles up to `preload` levels.
   * @param {function(import("../../Tile.js").default):void} [tileCallback] Tile callback.
   * @protected
   */ manageTilePyramid(frameState, tileSource, tileGrid, pixelRatio, projection, extent, currentZ, preload, tileCallback) {
        const tileSourceKey = (0, $386903518769f502$export$5e82334337e0f204)(tileSource);
        if (!(tileSourceKey in frameState.wantedTiles)) frameState.wantedTiles[tileSourceKey] = {};
        const wantedTiles = frameState.wantedTiles[tileSourceKey];
        const tileQueue = frameState.tileQueue;
        const minZoom = tileGrid.getMinZoom();
        const rotation = frameState.viewState.rotation;
        const viewport = rotation ? (0, $ee16b51bb9f86500$export$4b7a6fb4002cd6ac)(frameState.viewState.center, frameState.viewState.resolution, rotation, frameState.size) : undefined;
        let tileCount = 0;
        let tile, tileRange, tileResolution, x, y, z;
        for(z = minZoom; z <= currentZ; ++z){
            tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z, tileRange);
            tileResolution = tileGrid.getResolution(z);
            for(x = tileRange.minX; x <= tileRange.maxX; ++x)for(y = tileRange.minY; y <= tileRange.maxY; ++y){
                if (rotation && !tileGrid.tileCoordIntersectsViewport([
                    z,
                    x,
                    y
                ], viewport)) continue;
                if (currentZ - z <= preload) {
                    ++tileCount;
                    tile = tileSource.getTile(z, x, y, pixelRatio, projection);
                    if (tile.getState() == (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE) {
                        wantedTiles[tile.getKey()] = true;
                        if (!tileQueue.isKeyQueued(tile.getKey())) tileQueue.enqueue([
                            tile,
                            tileSourceKey,
                            tileGrid.getTileCoordCenter(tile.tileCoord),
                            tileResolution, 
                        ]);
                    }
                    if (tileCallback !== undefined) tileCallback(tile);
                } else tileSource.useTile(z, x, y, projection);
            }
        }
        tileSource.updateCacheSize(tileCount, projection);
    }
}
var $f5cbb4a4e71f7164$export$2e2bcd8739ae039 = $f5cbb4a4e71f7164$var$CanvasTileLayerRenderer;


/**
 * @classdesc
 * For layer sources that provide pre-rendered, tiled images in grids that are
 * organized by zoom levels for specific resolutions.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @template {import("../source/Tile.js").default} TileSourceType
 * @extends BaseTileLayer<TileSourceType, CanvasTileLayerRenderer>
 * @api
 */ class $bbb55ff2bb1b9a84$var$TileLayer extends (0, $431a00d72cc37875$export$2e2bcd8739ae039) {
    /**
   * @param {import("./BaseTile.js").Options<TileSourceType>} [options] Tile layer options.
   */ constructor(options){
        super(options);
    }
    createRenderer() {
        return new (0, $f5cbb4a4e71f7164$export$2e2bcd8739ae039)(this);
    }
}
var $bbb55ff2bb1b9a84$export$2e2bcd8739ae039 = $bbb55ff2bb1b9a84$var$TileLayer;











/**
 * @classdesc
 * Singleton class. Available through {@link module:ol/style/IconImageCache.shared}.
 */ class $f7b9282f4ee69e7c$var$IconImageCache {
    constructor(){
        /**
     * @type {!Object<string, import("./IconImage.js").default>}
     * @private
     */ this.cache_ = {};
        /**
     * @type {number}
     * @private
     */ this.cacheSize_ = 0;
        /**
     * @type {number}
     * @private
     */ this.maxCacheSize_ = 32;
    }
    /**
   * FIXME empty description for jsdoc
   */ clear() {
        this.cache_ = {};
        this.cacheSize_ = 0;
    }
    /**
   * @return {boolean} Can expire cache.
   */ canExpireCache() {
        return this.cacheSize_ > this.maxCacheSize_;
    }
    /**
   * FIXME empty description for jsdoc
   */ expire() {
        if (this.canExpireCache()) {
            let i = 0;
            for(const key in this.cache_){
                const iconImage = this.cache_[key];
                if (((i++) & 3) === 0 && !iconImage.hasListener()) {
                    delete this.cache_[key];
                    --this.cacheSize_;
                }
            }
        }
    }
    /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @return {import("./IconImage.js").default} Icon image.
   */ get(src, crossOrigin, color) {
        const key = $f7b9282f4ee69e7c$var$getKey(src, crossOrigin, color);
        return key in this.cache_ ? this.cache_[key] : null;
    }
    /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @param {import("./IconImage.js").default} iconImage Icon image.
   */ set(src, crossOrigin, color, iconImage) {
        const key = $f7b9282f4ee69e7c$var$getKey(src, crossOrigin, color);
        this.cache_[key] = iconImage;
        ++this.cacheSize_;
    }
    /**
   * Set the cache size of the icon cache. Default is `32`. Change this value when
   * your map uses more than 32 different icon images and you are not caching icon
   * styles on the application level.
   * @param {number} maxCacheSize Cache max size.
   * @api
   */ setSize(maxCacheSize) {
        this.maxCacheSize_ = maxCacheSize;
        this.expire();
    }
}
/**
 * @param {string} src Src.
 * @param {?string} crossOrigin Cross origin.
 * @param {import("../color.js").Color} color Color.
 * @return {string} Cache key.
 */ function $f7b9282f4ee69e7c$var$getKey(src, crossOrigin, color) {
    const colorString = color ? (0, $e4ed5d48cbd18f08$export$590567be997858b6)(color) : "null";
    return crossOrigin + ":" + src + ":" + colorString;
}
var $f7b9282f4ee69e7c$export$2e2bcd8739ae039 = $f7b9282f4ee69e7c$var$IconImageCache;
const $f7b9282f4ee69e7c$export$747ccdf771a87ab8 = new $f7b9282f4ee69e7c$var$IconImageCache();




/**
 * @typedef HitMatch
 * @property {import("../Feature.js").FeatureLike} feature Feature.
 * @property {import("../layer/Layer.js").default} layer Layer.
 * @property {import("../geom/SimpleGeometry.js").default} geometry Geometry.
 * @property {number} distanceSq Squared distance.
 * @property {import("./vector.js").FeatureCallback<T>} callback Callback.
 * @template T
 */ /**
 * @abstract
 */ class $e716264c193a8e63$var$MapRenderer extends (0, $82180f36890be34f$export$2e2bcd8739ae039) {
    /**
   * @param {import("../Map.js").default} map Map.
   */ constructor(map){
        super();
        /**
     * @private
     * @type {import("../Map.js").default}
     */ this.map_ = map;
    }
    /**
   * @abstract
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */ dispatchRenderEvent(type, frameState) {
        (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @protected
   */ calculateMatrices2D(frameState) {
        const viewState = frameState.viewState;
        const coordinateToPixelTransform = frameState.coordinateToPixelTransform;
        const pixelToCoordinateTransform = frameState.pixelToCoordinateTransform;
        (0, $0e89e72515351739$export$f672e0b6f7222cd7)(coordinateToPixelTransform, frameState.size[0] / 2, frameState.size[1] / 2, 1 / viewState.resolution, -1 / viewState.resolution, -viewState.rotation, -viewState.center[0], -viewState.center[1]);
        (0, $0e89e72515351739$export$bd70ea2a93c0fa4)(pixelToCoordinateTransform, coordinateToPixelTransform);
    }
    /**
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {boolean} checkWrapped Check for wrapped geometries.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {S} thisArg Value to use as `this` when executing `callback`.
   * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
   *     function, only layers which are visible and for which this function
   *     returns `true` will be tested for features.  By default, all visible
   *     layers will be tested.
   * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
   * @return {T|undefined} Callback result.
   * @template S,T,U
   */ forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, callback, thisArg, layerFilter, thisArg2) {
        let result;
        const viewState = frameState.viewState;
        /**
     * @param {boolean} managed Managed layer.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {import("../layer/Layer.js").default} layer Layer.
     * @param {import("../geom/Geometry.js").default} geometry Geometry.
     * @return {T|undefined} Callback result.
     */ function forEachFeatureAtCoordinate(managed, feature, layer, geometry) {
            return callback.call(thisArg, feature, managed ? layer : null, geometry);
        }
        const projection = viewState.projection;
        const translatedCoordinate = (0, $8b3868383cdaeca1$export$39a9ce3624977b84)(coordinate.slice(), projection);
        const offsets = [
            [
                0,
                0
            ]
        ];
        if (projection.canWrapX() && checkWrapped) {
            const projectionExtent = projection.getExtent();
            const worldWidth = (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(projectionExtent);
            offsets.push([
                -worldWidth,
                0
            ], [
                worldWidth,
                0
            ]);
        }
        const layerStates = frameState.layerStatesArray;
        const numLayers = layerStates.length;
        const matches = [];
        const tmpCoord = [];
        for(let i = 0; i < offsets.length; i++)for(let j = numLayers - 1; j >= 0; --j){
            const layerState = layerStates[j];
            const layer = layerState.layer;
            if (layer.hasRenderer() && (0, $462d96ef30c3e83d$export$acb1e9cb9ce4ca56)(layerState, viewState) && layerFilter.call(thisArg2, layer)) {
                const layerRenderer = layer.getRenderer();
                const source = layer.getSource();
                if (layerRenderer && source) {
                    const coordinates = source.getWrapX() ? translatedCoordinate : coordinate;
                    const callback1 = forEachFeatureAtCoordinate.bind(null, layerState.managed);
                    tmpCoord[0] = coordinates[0] + offsets[i][0];
                    tmpCoord[1] = coordinates[1] + offsets[i][1];
                    result = layerRenderer.forEachFeatureAtCoordinate(tmpCoord, frameState, hitTolerance, callback1, matches);
                }
                if (result) return result;
            }
        }
        if (matches.length === 0) return undefined;
        const order = 1 / matches.length;
        matches.forEach((m, i)=>m.distanceSq += i * order);
        matches.sort((a, b)=>a.distanceSq - b.distanceSq);
        matches.some((m)=>{
            return result = m.callback(m.feature, m.layer, m.geometry);
        });
        return result;
    }
    /**
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {boolean} checkWrapped Check for wrapped geometries.
   * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
   *     function, only layers which are visible and for which this function
   *     returns `true` will be tested for features.  By default, all visible
   *     layers will be tested.
   * @param {U} thisArg Value to use as `this` when executing `layerFilter`.
   * @return {boolean} Is there a feature at the given coordinate?
   * @template U
   */ hasFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, layerFilter, thisArg) {
        const hasFeature = this.forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, (0, $f2508d0c199eb098$export$22e23a2304399231), this, layerFilter, thisArg);
        return hasFeature !== undefined;
    }
    /**
   * @return {import("../Map.js").default} Map.
   */ getMap() {
        return this.map_;
    }
    /**
   * Render.
   * @abstract
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */ renderFrame(frameState) {
        (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @protected
   */ scheduleExpireIconCache(frameState) {
        if ((0, $f7b9282f4ee69e7c$export$747ccdf771a87ab8).canExpireCache()) frameState.postRenderFunctions.push($e716264c193a8e63$var$expireIconCache);
    }
}
/**
 * @param {import("../Map.js").default} map Map.
 * @param {import("../Map.js").FrameState} frameState Frame state.
 */ function $e716264c193a8e63$var$expireIconCache(map, frameState) {
    (0, $f7b9282f4ee69e7c$export$747ccdf771a87ab8).expire();
}
var $e716264c193a8e63$export$2e2bcd8739ae039 = $e716264c193a8e63$var$MapRenderer;











const $11a8f4cc83fb0cb3$export$3847dfea4f8d4dfa = "10px sans-serif";
const $11a8f4cc83fb0cb3$export$c495d52ee3fd74b2 = "#000";
const $11a8f4cc83fb0cb3$export$17bd0c38d6ae694e = "round";
const $11a8f4cc83fb0cb3$export$e21b4112fdc612fc = [];
const $11a8f4cc83fb0cb3$export$e06efc2409049f76 = 0;
const $11a8f4cc83fb0cb3$export$365eb9648cf19bd0 = "round";
const $11a8f4cc83fb0cb3$export$80c1c01844597b7b = 10;
const $11a8f4cc83fb0cb3$export$1eb2eaecacf2031e = "#000";
const $11a8f4cc83fb0cb3$export$94d53b95641b5766 = "center";
const $11a8f4cc83fb0cb3$export$cf2279a1bff62eb = "middle";
const $11a8f4cc83fb0cb3$export$40a9eeef55665a40 = [
    0,
    0,
    0,
    0
];
const $11a8f4cc83fb0cb3$export$79661f132c62010e = 1;
const $11a8f4cc83fb0cb3$export$1d36981fcadac93b = new (0, $2fa1993cbde1d34b$export$2e2bcd8739ae039)();
/**
 * @type {CanvasRenderingContext2D}
 */ let $11a8f4cc83fb0cb3$var$measureContext = null;
/**
 * @type {string}
 */ let $11a8f4cc83fb0cb3$var$measureFont;
const $11a8f4cc83fb0cb3$export$7fdcec604f0b1fa7 = {};
const $11a8f4cc83fb0cb3$export$a534074a28fa87ff = function() {
    const retries = 100;
    const size = "32px ";
    const referenceFonts = [
        "monospace",
        "serif"
    ];
    const len = referenceFonts.length;
    const text = "wmytzilWMYTZIL@#/&?$%10";
    let interval, referenceWidth;
    /**
   * @param {string} fontStyle Css font-style
   * @param {string} fontWeight Css font-weight
   * @param {*} fontFamily Css font-family
   * @return {boolean} Font with style and weight is available
   */ function isAvailable(fontStyle, fontWeight, fontFamily) {
        let available = true;
        for(let i = 0; i < len; ++i){
            const referenceFont = referenceFonts[i];
            referenceWidth = $11a8f4cc83fb0cb3$export$4ea92329b673abd1(fontStyle + " " + fontWeight + " " + size + referenceFont, text);
            if (fontFamily != referenceFont) {
                const width = $11a8f4cc83fb0cb3$export$4ea92329b673abd1(fontStyle + " " + fontWeight + " " + size + fontFamily + "," + referenceFont, text);
                // If width and referenceWidth are the same, then the fallback was used
                // instead of the font we wanted, so the font is not available.
                available = available && width != referenceWidth;
            }
        }
        if (available) return true;
        return false;
    }
    function check() {
        let done = true;
        const fonts = $11a8f4cc83fb0cb3$export$1d36981fcadac93b.getKeys();
        for(let i = 0, ii = fonts.length; i < ii; ++i){
            const font = fonts[i];
            if ($11a8f4cc83fb0cb3$export$1d36981fcadac93b.get(font) < retries) {
                if (isAvailable.apply(this, font.split("\n"))) {
                    (0, $9ffc9b9068a038e2$export$42ffd38884aecdac)($11a8f4cc83fb0cb3$export$7fdcec604f0b1fa7);
                    // Make sure that loaded fonts are picked up by Safari
                    $11a8f4cc83fb0cb3$var$measureContext = null;
                    $11a8f4cc83fb0cb3$var$measureFont = undefined;
                    $11a8f4cc83fb0cb3$export$1d36981fcadac93b.set(font, retries);
                } else {
                    $11a8f4cc83fb0cb3$export$1d36981fcadac93b.set(font, $11a8f4cc83fb0cb3$export$1d36981fcadac93b.get(font) + 1, true);
                    done = false;
                }
            }
        }
        if (done) {
            clearInterval(interval);
            interval = undefined;
        }
    }
    return function(fontSpec) {
        const font = (0, $c84ed9b717f6ac2c$export$5abde8a6aec4a131)(fontSpec);
        if (!font) return;
        const families = font.families;
        for(let i = 0, ii = families.length; i < ii; ++i){
            const family = families[i];
            const key = font.style + "\n" + font.weight + "\n" + family;
            if ($11a8f4cc83fb0cb3$export$1d36981fcadac93b.get(key) === undefined) {
                $11a8f4cc83fb0cb3$export$1d36981fcadac93b.set(key, retries, true);
                if (!isAvailable(font.style, font.weight, family)) {
                    $11a8f4cc83fb0cb3$export$1d36981fcadac93b.set(key, 0, true);
                    if (interval === undefined) interval = setInterval(check, 32);
                }
            }
        }
    };
}();
const $11a8f4cc83fb0cb3$export$4feaf6852ff92513 = function() {
    /**
   * @type {HTMLDivElement}
   */ let measureElement;
    return function(fontSpec) {
        let height = $11a8f4cc83fb0cb3$export$7fdcec604f0b1fa7[fontSpec];
        if (height == undefined) {
            if (0, $03af6b5c3e46892e$export$98fcef3dc9973292) {
                const font = (0, $c84ed9b717f6ac2c$export$5abde8a6aec4a131)(fontSpec);
                const metrics = $11a8f4cc83fb0cb3$var$measureText(fontSpec, "Žg");
                const lineHeight = isNaN(Number(font.lineHeight)) ? 1.2 : Number(font.lineHeight);
                height = lineHeight * (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent);
            } else {
                if (!measureElement) {
                    measureElement = document.createElement("div");
                    measureElement.innerHTML = "M";
                    measureElement.style.minHeight = "0";
                    measureElement.style.maxHeight = "none";
                    measureElement.style.height = "auto";
                    measureElement.style.padding = "0";
                    measureElement.style.border = "none";
                    measureElement.style.position = "absolute";
                    measureElement.style.display = "block";
                    measureElement.style.left = "-99999px";
                }
                measureElement.style.font = fontSpec;
                document.body.appendChild(measureElement);
                height = measureElement.offsetHeight;
                document.body.removeChild(measureElement);
            }
            $11a8f4cc83fb0cb3$export$7fdcec604f0b1fa7[fontSpec] = height;
        }
        return height;
    };
}();
/**
 * @param {string} font Font.
 * @param {string} text Text.
 * @return {TextMetrics} Text metrics.
 */ function $11a8f4cc83fb0cb3$var$measureText(font, text) {
    if (!$11a8f4cc83fb0cb3$var$measureContext) $11a8f4cc83fb0cb3$var$measureContext = (0, $51108d26d56c4955$export$9e05d10eae75c464)(1, 1);
    if (font != $11a8f4cc83fb0cb3$var$measureFont) {
        $11a8f4cc83fb0cb3$var$measureContext.font = font;
        $11a8f4cc83fb0cb3$var$measureFont = $11a8f4cc83fb0cb3$var$measureContext.font;
    }
    return $11a8f4cc83fb0cb3$var$measureContext.measureText(text);
}
function $11a8f4cc83fb0cb3$export$4ea92329b673abd1(font, text) {
    return $11a8f4cc83fb0cb3$var$measureText(font, text).width;
}
function $11a8f4cc83fb0cb3$export$915c7ba51467308f(font, text, cache) {
    if (text in cache) return cache[text];
    const width = text.split("\n").reduce((prev, curr)=>Math.max(prev, $11a8f4cc83fb0cb3$export$4ea92329b673abd1(font, curr)), 0);
    cache[text] = width;
    return width;
}
function $11a8f4cc83fb0cb3$export$7d7c13020df1e791(baseStyle, chunks) {
    const widths = [];
    const heights = [];
    const lineWidths = [];
    let width = 0;
    let lineWidth = 0;
    let height = 0;
    let lineHeight = 0;
    for(let i = 0, ii = chunks.length; i <= ii; i += 2){
        const text = chunks[i];
        if (text === "\n" || i === ii) {
            width = Math.max(width, lineWidth);
            lineWidths.push(lineWidth);
            lineWidth = 0;
            height += lineHeight;
            continue;
        }
        const font = chunks[i + 1] || baseStyle.font;
        const currentWidth = $11a8f4cc83fb0cb3$export$4ea92329b673abd1(font, text);
        widths.push(currentWidth);
        lineWidth += currentWidth;
        const currentHeight = $11a8f4cc83fb0cb3$export$4feaf6852ff92513(font);
        heights.push(currentHeight);
        lineHeight = Math.max(lineHeight, currentHeight);
    }
    return {
        width: width,
        height: height,
        widths: widths,
        heights: heights,
        lineWidths: lineWidths
    };
}
function $11a8f4cc83fb0cb3$export$8ac4d72be78047e6(context, rotation, offsetX, offsetY) {
    if (rotation !== 0) {
        context.translate(offsetX, offsetY);
        context.rotate(rotation);
        context.translate(-offsetX, -offsetY);
    }
}
function $11a8f4cc83fb0cb3$export$3cb6f3a6e49cc0ee(context, transform, opacity, labelOrImage, originX, originY, w, h, x, y, scale) {
    context.save();
    if (opacity !== 1) context.globalAlpha *= opacity;
    if (transform) context.setTransform.apply(context, transform);
    if (/** @type {*} */ labelOrImage.contextInstructions) {
        // label
        context.translate(x, y);
        context.scale(scale[0], scale[1]);
        $11a8f4cc83fb0cb3$var$executeLabelInstructions(labelOrImage, context);
    } else if (scale[0] < 0 || scale[1] < 0) {
        // flipped image
        context.translate(x, y);
        context.scale(scale[0], scale[1]);
        context.drawImage(labelOrImage, originX, originY, w, h, 0, 0, w, h);
    } else // if image not flipped translate and scale can be avoided
    context.drawImage(labelOrImage, originX, originY, w, h, x, y, w * scale[0], h * scale[1]);
    context.restore();
}
/**
 * @param {Label} label Label.
 * @param {CanvasRenderingContext2D} context Context.
 */ function $11a8f4cc83fb0cb3$var$executeLabelInstructions(label, context) {
    const contextInstructions = label.contextInstructions;
    for(let i = 0, ii = contextInstructions.length; i < ii; i += 2)if (Array.isArray(contextInstructions[i + 1])) context[contextInstructions[i]].apply(context, contextInstructions[i + 1]);
    else context[contextInstructions[i]] = contextInstructions[i + 1];
}





/**
 * @classdesc
 * Canvas map renderer.
 * @api
 */ class $867f2cb77278f7f3$var$CompositeMapRenderer extends (0, $e716264c193a8e63$export$2e2bcd8739ae039) {
    /**
   * @param {import("../Map.js").default} map Map.
   */ constructor(map){
        super(map);
        /**
     * @type {import("../events.js").EventsKey}
     */ this.fontChangeListenerKey_ = (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)((0, $11a8f4cc83fb0cb3$export$1d36981fcadac93b), (0, $2e111f792ae6efbb$export$2e2bcd8739ae039).PROPERTYCHANGE, map.redrawText.bind(map));
        /**
     * @private
     * @type {HTMLDivElement}
     */ this.element_ = document.createElement("div");
        const style = this.element_.style;
        style.position = "absolute";
        style.width = "100%";
        style.height = "100%";
        style.zIndex = "0";
        this.element_.className = (0, $c84ed9b717f6ac2c$export$1afde3d6e16a7b29) + " ol-layers";
        const container = map.getViewport();
        container.insertBefore(this.element_, container.firstChild || null);
        /**
     * @private
     * @type {Array<HTMLElement>}
     */ this.children_ = [];
        /**
     * @private
     * @type {boolean}
     */ this.renderedVisible_ = true;
    }
    /**
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */ dispatchRenderEvent(type, frameState) {
        const map = this.getMap();
        if (map.hasListener(type)) {
            const event = new (0, $885cd6d8e2e8534a$export$2e2bcd8739ae039)(type, undefined, frameState);
            map.dispatchEvent(event);
        }
    }
    disposeInternal() {
        (0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(this.fontChangeListenerKey_);
        this.element_.parentNode.removeChild(this.element_);
        super.disposeInternal();
    }
    /**
   * Render.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */ renderFrame(frameState) {
        if (!frameState) {
            if (this.renderedVisible_) {
                this.element_.style.display = "none";
                this.renderedVisible_ = false;
            }
            return;
        }
        this.calculateMatrices2D(frameState);
        this.dispatchRenderEvent((0, $ed38d21f8bccd31c$export$2e2bcd8739ae039).PRECOMPOSE, frameState);
        const layerStatesArray = frameState.layerStatesArray.sort(function(a, b) {
            return a.zIndex - b.zIndex;
        });
        const viewState = frameState.viewState;
        this.children_.length = 0;
        /**
     * @type {Array<import("../layer/BaseVector.js").default>}
     */ const declutterLayers = [];
        let previousElement = null;
        for(let i = 0, ii = layerStatesArray.length; i < ii; ++i){
            const layerState = layerStatesArray[i];
            frameState.layerIndex = i;
            const layer = layerState.layer;
            const sourceState = layer.getSourceState();
            if (!(0, $462d96ef30c3e83d$export$acb1e9cb9ce4ca56)(layerState, viewState) || sourceState != "ready" && sourceState != "undefined") {
                layer.unrender();
                continue;
            }
            const element = layer.render(frameState, previousElement);
            if (!element) continue;
            if (element !== previousElement) {
                this.children_.push(element);
                previousElement = element;
            }
            if ("getDeclutter" in layer) declutterLayers.push(layer);
        }
        for(let i1 = declutterLayers.length - 1; i1 >= 0; --i1)declutterLayers[i1].renderDeclutter(frameState);
        (0, $51108d26d56c4955$export$caeacfe04f52533a)(this.element_, this.children_);
        this.dispatchRenderEvent((0, $ed38d21f8bccd31c$export$2e2bcd8739ae039).POSTCOMPOSE, frameState);
        if (!this.renderedVisible_) {
            this.element_.style.display = "";
            this.renderedVisible_ = true;
        }
        this.scheduleExpireIconCache(frameState);
    }
}
var $867f2cb77278f7f3$export$2e2bcd8739ae039 = $867f2cb77278f7f3$var$CompositeMapRenderer;















class $01c910033b035f45$export$2f5ff21d758d25a7 extends (0, $f3a6f6cab00ac278$export$2e2bcd8739ae039) {
    /**
   * @param {EventType} type The event type.
   * @param {BaseLayer} layer The layer.
   */ constructor(type, layer){
        super(type);
        /**
     * The added or removed layer.
     * @type {BaseLayer}
     * @api
     */ this.layer = layer;
    }
}
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
 *     'change:layers', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|'change:layers', Return>} GroupOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {Array<import("./Base.js").default>|Collection<import("./Base.js").default>} [layers] Child layers.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */ /**
 * @enum {string}
 * @private
 */ const $01c910033b035f45$var$Property = {
    LAYERS: "layers"
};
/**
 * @classdesc
 * A {@link module:ol/Collection~Collection} of layers that are handled together.
 *
 * A generic `change` event is triggered when the group/Collection changes.
 *
 * @api
 */ class $01c910033b035f45$var$LayerGroup extends (0, $e35bc28836b50916$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Layer options.
   */ constructor(options){
        options = options || {};
        const baseOptions = /** @type {Options} */ Object.assign({}, options);
        delete baseOptions.layers;
        let layers = options.layers;
        super(baseOptions);
        /***
     * @type {GroupOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {GroupOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {GroupOnSignature<void>}
     */ this.un;
        /**
     * @private
     * @type {Array<import("../events.js").EventsKey>}
     */ this.layersListenerKeys_ = [];
        /**
     * @private
     * @type {Object<string, Array<import("../events.js").EventsKey>>}
     */ this.listenerKeys_ = {};
        this.addChangeListener($01c910033b035f45$var$Property.LAYERS, this.handleLayersChanged_);
        if (layers) {
            if (Array.isArray(layers)) layers = new (0, $35790abb29cb875a$export$2e2bcd8739ae039)(layers.slice(), {
                unique: true
            });
            else (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(typeof /** @type {?} */ layers.getArray === "function", 43); // Expected `layers` to be an array or a `Collection`
        } else layers = new (0, $35790abb29cb875a$export$2e2bcd8739ae039)(undefined, {
            unique: true
        });
        this.setLayers(layers);
    }
    /**
   * @private
   */ handleLayerChange_() {
        this.changed();
    }
    /**
   * @private
   */ handleLayersChanged_() {
        this.layersListenerKeys_.forEach((0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921));
        this.layersListenerKeys_.length = 0;
        const layers = this.getLayers();
        this.layersListenerKeys_.push((0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(layers, (0, $b9159002a7423f4e$export$2e2bcd8739ae039).ADD, this.handleLayersAdd_, this), (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(layers, (0, $b9159002a7423f4e$export$2e2bcd8739ae039).REMOVE, this.handleLayersRemove_, this));
        for(const id in this.listenerKeys_)this.listenerKeys_[id].forEach((0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921));
        (0, $9ffc9b9068a038e2$export$42ffd38884aecdac)(this.listenerKeys_);
        const layersArray = layers.getArray();
        for(let i = 0, ii = layersArray.length; i < ii; i++){
            const layer = layersArray[i];
            this.registerLayerListeners_(layer);
            this.dispatchEvent(new $01c910033b035f45$export$2f5ff21d758d25a7("addlayer", layer));
        }
        this.changed();
    }
    /**
   * @param {BaseLayer} layer The layer.
   */ registerLayerListeners_(layer) {
        const listenerKeys = [
            (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(layer, (0, $2e111f792ae6efbb$export$2e2bcd8739ae039).PROPERTYCHANGE, this.handleLayerChange_, this),
            (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(layer, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE, this.handleLayerChange_, this), 
        ];
        if (layer instanceof $01c910033b035f45$var$LayerGroup) listenerKeys.push((0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(layer, "addlayer", this.handleLayerGroupAdd_, this), (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(layer, "removelayer", this.handleLayerGroupRemove_, this));
        this.listenerKeys_[(0, $386903518769f502$export$5e82334337e0f204)(layer)] = listenerKeys;
    }
    /**
   * @param {GroupEvent} event The layer group event.
   */ handleLayerGroupAdd_(event) {
        this.dispatchEvent(new $01c910033b035f45$export$2f5ff21d758d25a7("addlayer", event.layer));
    }
    /**
   * @param {GroupEvent} event The layer group event.
   */ handleLayerGroupRemove_(event) {
        this.dispatchEvent(new $01c910033b035f45$export$2f5ff21d758d25a7("removelayer", event.layer));
    }
    /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */ handleLayersAdd_(collectionEvent) {
        const layer = collectionEvent.element;
        this.registerLayerListeners_(layer);
        this.dispatchEvent(new $01c910033b035f45$export$2f5ff21d758d25a7("addlayer", layer));
        this.changed();
    }
    /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */ handleLayersRemove_(collectionEvent) {
        const layer = collectionEvent.element;
        const key = (0, $386903518769f502$export$5e82334337e0f204)(layer);
        this.listenerKeys_[key].forEach((0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921));
        delete this.listenerKeys_[key];
        this.dispatchEvent(new $01c910033b035f45$export$2f5ff21d758d25a7("removelayer", layer));
        this.changed();
    }
    /**
   * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
   * in this group.
   * @return {!Collection<import("./Base.js").default>} Collection of
   *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
   * @observable
   * @api
   */ getLayers() {
        return /** @type {!Collection<import("./Base.js").default>} */ this.get($01c910033b035f45$var$Property.LAYERS);
    }
    /**
   * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
   * in this group.
   * @param {!Collection<import("./Base.js").default>} layers Collection of
   *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
   * @observable
   * @api
   */ setLayers(layers) {
        const collection = this.getLayers();
        if (collection) {
            const currentLayers = collection.getArray();
            for(let i = 0, ii = currentLayers.length; i < ii; ++i)this.dispatchEvent(new $01c910033b035f45$export$2f5ff21d758d25a7("removelayer", currentLayers[i]));
        }
        this.set($01c910033b035f45$var$Property.LAYERS, layers);
    }
    /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */ getLayersArray(array) {
        array = array !== undefined ? array : [];
        this.getLayers().forEach(function(layer) {
            layer.getLayersArray(array);
        });
        return array;
    }
    /**
   * Get the layer states list and use this groups z-index as the default
   * for all layers in this and nested groups, if it is unset at this point.
   * If dest is not provided and this group's z-index is undefined
   * 0 is used a the default z-index.
   * @param {Array<import("./Layer.js").State>} [dest] Optional list
   * of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */ getLayerStatesArray(dest) {
        const states = dest !== undefined ? dest : [];
        const pos = states.length;
        this.getLayers().forEach(function(layer) {
            layer.getLayerStatesArray(states);
        });
        const ownLayerState = this.getLayerState();
        let defaultZIndex = ownLayerState.zIndex;
        if (!dest && ownLayerState.zIndex === undefined) defaultZIndex = 0;
        for(let i = pos, ii = states.length; i < ii; i++){
            const layerState = states[i];
            layerState.opacity *= ownLayerState.opacity;
            layerState.visible = layerState.visible && ownLayerState.visible;
            layerState.maxResolution = Math.min(layerState.maxResolution, ownLayerState.maxResolution);
            layerState.minResolution = Math.max(layerState.minResolution, ownLayerState.minResolution);
            layerState.minZoom = Math.max(layerState.minZoom, ownLayerState.minZoom);
            layerState.maxZoom = Math.min(layerState.maxZoom, ownLayerState.maxZoom);
            if (ownLayerState.extent !== undefined) {
                if (layerState.extent !== undefined) layerState.extent = (0, $ee16b51bb9f86500$export$72209efa88586d42)(layerState.extent, ownLayerState.extent);
                else layerState.extent = ownLayerState.extent;
            }
            if (layerState.zIndex === undefined) layerState.zIndex = defaultZIndex;
        }
        return states;
    }
    /**
   * @return {import("../source/Source.js").State} Source state.
   */ getSourceState() {
        return "ready";
    }
}
var $01c910033b035f45$export$2e2bcd8739ae039 = $01c910033b035f45$var$LayerGroup;



/**
 * @classdesc
 * Events emitted as map events are instances of this type.
 * See {@link module:ol/Map~Map} for which events trigger a map event.
 */ class $9c1b44f42e09dcdb$var$MapEvent extends (0, $f3a6f6cab00ac278$export$2e2bcd8739ae039) {
    /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {?import("./Map.js").FrameState} [frameState] Frame state.
   */ constructor(type, map, frameState){
        super(type);
        /**
     * The map where the event occurred.
     * @type {import("./Map.js").default}
     * @api
     */ this.map = map;
        /**
     * The frame state at the time of the event.
     * @type {?import("./Map.js").FrameState}
     * @api
     */ this.frameState = frameState !== undefined ? frameState : null;
    }
}
var $9c1b44f42e09dcdb$export$2e2bcd8739ae039 = $9c1b44f42e09dcdb$var$MapEvent;


/**
 * @classdesc
 * Events emitted as map browser events are instances of this type.
 * See {@link module:ol/Map~Map} for which events trigger a map browser event.
 * @template {UIEvent} EVENT
 */ class $ba9c53d288d659c0$var$MapBrowserEvent extends (0, $9c1b44f42e09dcdb$export$2e2bcd8739ae039) {
    /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {EVENT} originalEvent Original event.
   * @param {boolean} [dragging] Is the map currently being dragged?
   * @param {import("./Map.js").FrameState} [frameState] Frame state.
   * @param {Array<PointerEvent>} [activePointers] Active pointers.
   */ constructor(type, map, originalEvent, dragging, frameState, activePointers){
        super(type, map, frameState);
        /**
     * The original browser event.
     * @const
     * @type {EVENT}
     * @api
     */ this.originalEvent = originalEvent;
        /**
     * The map pixel relative to the viewport corresponding to the original browser event.
     * @type {?import("./pixel.js").Pixel}
     */ this.pixel_ = null;
        /**
     * The coordinate in the user projection corresponding to the original browser event.
     * @type {?import("./coordinate.js").Coordinate}
     */ this.coordinate_ = null;
        /**
     * Indicates if the map is currently being dragged. Only set for
     * `POINTERDRAG` and `POINTERMOVE` events. Default is `false`.
     *
     * @type {boolean}
     * @api
     */ this.dragging = dragging !== undefined ? dragging : false;
        /**
     * @type {Array<PointerEvent>|undefined}
     */ this.activePointers = activePointers;
    }
    /**
   * The map pixel relative to the viewport corresponding to the original event.
   * @type {import("./pixel.js").Pixel}
   * @api
   */ get pixel() {
        if (!this.pixel_) this.pixel_ = this.map.getEventPixel(this.originalEvent);
        return this.pixel_;
    }
    set pixel(pixel) {
        this.pixel_ = pixel;
    }
    /**
   * The coordinate corresponding to the original browser event.  This will be in the user
   * projection if one is set.  Otherwise it will be in the view projection.
   * @type {import("./coordinate.js").Coordinate}
   * @api
   */ get coordinate() {
        if (!this.coordinate_) this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel);
        return this.coordinate_;
    }
    set coordinate(coordinate) {
        this.coordinate_ = coordinate;
    }
    /**
   * Prevents the default browser action.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
   * @api
   */ preventDefault() {
        super.preventDefault();
        if ("preventDefault" in this.originalEvent) /** @type {UIEvent} */ this.originalEvent.preventDefault();
    }
    /**
   * Prevents further propagation of the current event.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
   * @api
   */ stopPropagation() {
        super.stopPropagation();
        if ("stopPropagation" in this.originalEvent) /** @type {UIEvent} */ this.originalEvent.stopPropagation();
    }
}
var $ba9c53d288d659c0$export$2e2bcd8739ae039 = $ba9c53d288d659c0$var$MapBrowserEvent;





var /**
 * Constants for event names.
 * @enum {string}
 */ $59d0e10837112e72$export$2e2bcd8739ae039 /***
 * @typedef {'singleclick'|'click'|'dblclick'|'pointerdrag'|'pointermove'} Types
 */  = {
    /**
   * A true single click with no dragging and no double click. Note that this
   * event is delayed by 250 ms to ensure that it is not a double click.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
   * @api
   */ SINGLECLICK: "singleclick",
    /**
   * A click with no dragging. A double click will fire two of this.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
   * @api
   */ CLICK: (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CLICK,
    /**
   * A true double click, with no dragging.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
   * @api
   */ DBLCLICK: (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).DBLCLICK,
    /**
   * Triggered when a pointer is dragged.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
   * @api
   */ POINTERDRAG: "pointerdrag",
    /**
   * Triggered when a pointer is moved. Note that on touch devices this is
   * triggered when the map is panned, so is not the same as mousemove.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
   * @api
   */ POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel"
};


var /**
 * @module ol/pointer/EventType
 */ /**
 * Constants for event names.
 * @enum {string}
 */ $59a13296ea682fba$export$2e2bcd8739ae039 = {
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel"
};






class $0c184e5ce80dd4b4$var$MapBrowserEventHandler extends (0, $8db040e14d9e4db7$export$2e2bcd8739ae039) {
    /**
   * @param {import("./Map.js").default} map The map with the viewport to listen to events on.
   * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
   */ constructor(map, moveTolerance){
        super(map);
        /**
     * This is the element that we will listen to the real events on.
     * @type {import("./Map.js").default}
     * @private
     */ this.map_ = map;
        /**
     * @type {any}
     * @private
     */ this.clickTimeoutId_;
        /**
     * Emulate dblclick and singleclick. Will be true when only one pointer is active.
     * @type {boolean}
     */ this.emulateClicks_ = false;
        /**
     * @type {boolean}
     * @private
     */ this.dragging_ = false;
        /**
     * @type {!Array<import("./events.js").EventsKey>}
     * @private
     */ this.dragListenerKeys_ = [];
        /**
     * @type {number}
     * @private
     */ this.moveTolerance_ = moveTolerance === undefined ? 1 : moveTolerance;
        /**
     * The most recent "down" type event (or null if none have occurred).
     * Set on pointerdown.
     * @type {PointerEvent|null}
     * @private
     */ this.down_ = null;
        const element = this.map_.getViewport();
        /**
     * @type {Array<PointerEvent>}
     * @private
     */ this.activePointers_ = [];
        /**
     * @type {!Object<number, Event>}
     * @private
     */ this.trackedTouches_ = {};
        this.element_ = element;
        /**
     * @type {?import("./events.js").EventsKey}
     * @private
     */ this.pointerdownListenerKey_ = (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(element, (0, $59a13296ea682fba$export$2e2bcd8739ae039).POINTERDOWN, this.handlePointerDown_, this);
        /**
     * @type {PointerEvent}
     * @private
     */ this.originalPointerMoveEvent_;
        /**
     * @type {?import("./events.js").EventsKey}
     * @private
     */ this.relayedListenerKey_ = (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(element, (0, $59a13296ea682fba$export$2e2bcd8739ae039).POINTERMOVE, this.relayMoveEvent_, this);
        /**
     * @private
     */ this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this);
        this.element_.addEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).TOUCHMOVE, this.boundHandleTouchMove_, (0, $03af6b5c3e46892e$export$f751ce96c6c4e4fc) ? {
            passive: false
        } : false);
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ emulateClick_(pointerEvent) {
        let newEvent = new (0, $ba9c53d288d659c0$export$2e2bcd8739ae039)((0, $59d0e10837112e72$export$2e2bcd8739ae039).CLICK, this.map_, pointerEvent);
        this.dispatchEvent(newEvent);
        if (this.clickTimeoutId_ !== undefined) {
            // double-click
            clearTimeout(this.clickTimeoutId_);
            this.clickTimeoutId_ = undefined;
            newEvent = new (0, $ba9c53d288d659c0$export$2e2bcd8739ae039)((0, $59d0e10837112e72$export$2e2bcd8739ae039).DBLCLICK, this.map_, pointerEvent);
            this.dispatchEvent(newEvent);
        } else // click
        this.clickTimeoutId_ = setTimeout(/** @this {MapBrowserEventHandler} */ (function() {
            this.clickTimeoutId_ = undefined;
            const newEvent = new (0, $ba9c53d288d659c0$export$2e2bcd8739ae039)((0, $59d0e10837112e72$export$2e2bcd8739ae039).SINGLECLICK, this.map_, pointerEvent);
            this.dispatchEvent(newEvent);
        }).bind(this), 250);
    }
    /**
   * Keeps track on how many pointers are currently active.
   *
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ updateActivePointers_(pointerEvent) {
        const event = pointerEvent;
        const id = event.pointerId;
        if (event.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERUP || event.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERCANCEL) {
            delete this.trackedTouches_[id];
            for(const pointerId in this.trackedTouches_)if (this.trackedTouches_[pointerId].target !== event.target) {
                // Some platforms assign a new pointerId when the target changes.
                // If this happens, delete one tracked pointer. If there is more
                // than one tracked pointer for the old target, it will be cleared
                // by subsequent POINTERUP events from other pointers.
                delete this.trackedTouches_[pointerId];
                break;
            }
        } else if (event.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERDOWN || event.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERMOVE) this.trackedTouches_[id] = event;
        this.activePointers_ = Object.values(this.trackedTouches_);
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ handlePointerUp_(pointerEvent) {
        this.updateActivePointers_(pointerEvent);
        const newEvent = new (0, $ba9c53d288d659c0$export$2e2bcd8739ae039)((0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERUP, this.map_, pointerEvent, undefined, undefined, this.activePointers_);
        this.dispatchEvent(newEvent);
        // We emulate click events on left mouse button click, touch contact, and pen
        // contact. isMouseActionButton returns true in these cases (evt.button is set
        // to 0).
        // See http://www.w3.org/TR/pointerevents/#button-states
        // We only fire click, singleclick, and doubleclick if nobody has called
        // event.preventDefault().
        if (this.emulateClicks_ && !newEvent.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(pointerEvent)) this.emulateClick_(this.down_);
        if (this.activePointers_.length === 0) {
            this.dragListenerKeys_.forEach((0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921));
            this.dragListenerKeys_.length = 0;
            this.dragging_ = false;
            this.down_ = null;
        }
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} If the left mouse button was pressed.
   * @private
   */ isMouseActionButton_(pointerEvent) {
        return pointerEvent.button === 0;
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ handlePointerDown_(pointerEvent) {
        this.emulateClicks_ = this.activePointers_.length === 0;
        this.updateActivePointers_(pointerEvent);
        const newEvent = new (0, $ba9c53d288d659c0$export$2e2bcd8739ae039)((0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERDOWN, this.map_, pointerEvent, undefined, undefined, this.activePointers_);
        this.dispatchEvent(newEvent);
        // Store a copy of the down event
        this.down_ = {};
        for(const property in pointerEvent){
            const value = pointerEvent[property];
            this.down_[property] = typeof value === "function" ? (0, $f2508d0c199eb098$export$1cd1943b3a73bbe8) : value;
        }
        if (this.dragListenerKeys_.length === 0) {
            const doc = this.map_.getOwnerDocument();
            this.dragListenerKeys_.push((0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(doc, (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERMOVE, this.handlePointerMove_, this), (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(doc, (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERUP, this.handlePointerUp_, this), /* Note that the listener for `pointercancel is set up on
         * `pointerEventHandler_` and not `documentPointerEventHandler_` like
         * the `pointerup` and `pointermove` listeners.
         *
         * The reason for this is the following: `TouchSource.vacuumTouches_()`
         * issues `pointercancel` events, when there was no `touchend` for a
         * `touchstart`. Now, let's say a first `touchstart` is registered on
         * `pointerEventHandler_`. The `documentPointerEventHandler_` is set up.
         * But `documentPointerEventHandler_` doesn't know about the first
         * `touchstart`. If there is no `touchend` for the `touchstart`, we can
         * only receive a `touchcancel` from `pointerEventHandler_`, because it is
         * only registered there.
         */ (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(this.element_, (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERCANCEL, this.handlePointerUp_, this));
            if (this.element_.getRootNode && this.element_.getRootNode() !== doc) this.dragListenerKeys_.push((0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(this.element_.getRootNode(), (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERUP, this.handlePointerUp_, this));
        }
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ handlePointerMove_(pointerEvent) {
        // Between pointerdown and pointerup, pointermove events are triggered.
        // To avoid a 'false' touchmove event to be dispatched, we test if the pointer
        // moved a significant distance.
        if (this.isMoving_(pointerEvent)) {
            this.updateActivePointers_(pointerEvent);
            this.dragging_ = true;
            const newEvent = new (0, $ba9c53d288d659c0$export$2e2bcd8739ae039)((0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERDRAG, this.map_, pointerEvent, this.dragging_, undefined, this.activePointers_);
            this.dispatchEvent(newEvent);
        }
    }
    /**
   * Wrap and relay a pointermove event.
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ relayMoveEvent_(pointerEvent) {
        this.originalPointerMoveEvent_ = pointerEvent;
        const dragging = !!(this.down_ && this.isMoving_(pointerEvent));
        this.dispatchEvent(new (0, $ba9c53d288d659c0$export$2e2bcd8739ae039)((0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERMOVE, this.map_, pointerEvent, dragging));
    }
    /**
   * Flexible handling of a `touch-action: none` css equivalent: because calling
   * `preventDefault()` on a `pointermove` event does not stop native page scrolling
   * and zooming, we also listen for `touchmove` and call `preventDefault()` on it
   * when an interaction (currently `DragPan` handles the event.
   * @param {TouchEvent} event Event.
   * @private
   */ handleTouchMove_(event) {
        // Due to https://github.com/mpizenberg/elm-pep/issues/2, `this.originalPointerMoveEvent_`
        // may not be initialized yet when we get here on a platform without native pointer events.
        const originalEvent = this.originalPointerMoveEvent_;
        if ((!originalEvent || originalEvent.defaultPrevented) && (typeof event.cancelable !== "boolean" || event.cancelable === true)) event.preventDefault();
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} Is moving.
   * @private
   */ isMoving_(pointerEvent) {
        return this.dragging_ || Math.abs(pointerEvent.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(pointerEvent.clientY - this.down_.clientY) > this.moveTolerance_;
    }
    /**
   * Clean up.
   */ disposeInternal() {
        if (this.relayedListenerKey_) {
            (0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(this.relayedListenerKey_);
            this.relayedListenerKey_ = null;
        }
        this.element_.removeEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).TOUCHMOVE, this.boundHandleTouchMove_);
        if (this.pointerdownListenerKey_) {
            (0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(this.pointerdownListenerKey_);
            this.pointerdownListenerKey_ = null;
        }
        this.dragListenerKeys_.forEach((0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921));
        this.dragListenerKeys_.length = 0;
        this.element_ = null;
        super.disposeInternal();
    }
}
var $0c184e5ce80dd4b4$export$2e2bcd8739ae039 = $0c184e5ce80dd4b4$var$MapBrowserEventHandler;





var /**
 * @module ol/MapProperty
 */ /**
 * @enum {string}
 */ $725377ac59843356$export$2e2bcd8739ae039 = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view"
};








const $cceded55e993df18$export$b4af72c40fd57063 = Infinity;
/**
 * @classdesc
 * Priority queue.
 *
 * The implementation is inspired from the Closure Library's Heap class and
 * Python's heapq module.
 *
 * See https://github.com/google/closure-library/blob/master/closure/goog/structs/heap.js
 * and https://hg.python.org/cpython/file/2.7/Lib/heapq.py.
 *
 * @template T
 */ class $cceded55e993df18$var$PriorityQueue {
    /**
   * @param {function(T): number} priorityFunction Priority function.
   * @param {function(T): string} keyFunction Key function.
   */ constructor(priorityFunction, keyFunction){
        /**
     * @type {function(T): number}
     * @private
     */ this.priorityFunction_ = priorityFunction;
        /**
     * @type {function(T): string}
     * @private
     */ this.keyFunction_ = keyFunction;
        /**
     * @type {Array<T>}
     * @private
     */ this.elements_ = [];
        /**
     * @type {Array<number>}
     * @private
     */ this.priorities_ = [];
        /**
     * @type {!Object<string, boolean>}
     * @private
     */ this.queuedElements_ = {};
    }
    /**
   * FIXME empty description for jsdoc
   */ clear() {
        this.elements_.length = 0;
        this.priorities_.length = 0;
        (0, $9ffc9b9068a038e2$export$42ffd38884aecdac)(this.queuedElements_);
    }
    /**
   * Remove and return the highest-priority element. O(log N).
   * @return {T} Element.
   */ dequeue() {
        const elements = this.elements_;
        const priorities = this.priorities_;
        const element = elements[0];
        if (elements.length == 1) {
            elements.length = 0;
            priorities.length = 0;
        } else {
            elements[0] = elements.pop();
            priorities[0] = priorities.pop();
            this.siftUp_(0);
        }
        const elementKey = this.keyFunction_(element);
        delete this.queuedElements_[elementKey];
        return element;
    }
    /**
   * Enqueue an element. O(log N).
   * @param {T} element Element.
   * @return {boolean} The element was added to the queue.
   */ enqueue(element) {
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(!(this.keyFunction_(element) in this.queuedElements_), 31); // Tried to enqueue an `element` that was already added to the queue
        const priority = this.priorityFunction_(element);
        if (priority != $cceded55e993df18$export$b4af72c40fd57063) {
            this.elements_.push(element);
            this.priorities_.push(priority);
            this.queuedElements_[this.keyFunction_(element)] = true;
            this.siftDown_(0, this.elements_.length - 1);
            return true;
        }
        return false;
    }
    /**
   * @return {number} Count.
   */ getCount() {
        return this.elements_.length;
    }
    /**
   * Gets the index of the left child of the node at the given index.
   * @param {number} index The index of the node to get the left child for.
   * @return {number} The index of the left child.
   * @private
   */ getLeftChildIndex_(index) {
        return index * 2 + 1;
    }
    /**
   * Gets the index of the right child of the node at the given index.
   * @param {number} index The index of the node to get the right child for.
   * @return {number} The index of the right child.
   * @private
   */ getRightChildIndex_(index) {
        return index * 2 + 2;
    }
    /**
   * Gets the index of the parent of the node at the given index.
   * @param {number} index The index of the node to get the parent for.
   * @return {number} The index of the parent.
   * @private
   */ getParentIndex_(index) {
        return index - 1 >> 1;
    }
    /**
   * Make this a heap. O(N).
   * @private
   */ heapify_() {
        let i;
        for(i = (this.elements_.length >> 1) - 1; i >= 0; i--)this.siftUp_(i);
    }
    /**
   * @return {boolean} Is empty.
   */ isEmpty() {
        return this.elements_.length === 0;
    }
    /**
   * @param {string} key Key.
   * @return {boolean} Is key queued.
   */ isKeyQueued(key) {
        return key in this.queuedElements_;
    }
    /**
   * @param {T} element Element.
   * @return {boolean} Is queued.
   */ isQueued(element) {
        return this.isKeyQueued(this.keyFunction_(element));
    }
    /**
   * @param {number} index The index of the node to move down.
   * @private
   */ siftUp_(index) {
        const elements = this.elements_;
        const priorities = this.priorities_;
        const count = elements.length;
        const element = elements[index];
        const priority = priorities[index];
        const startIndex = index;
        while(index < count >> 1){
            const lIndex = this.getLeftChildIndex_(index);
            const rIndex = this.getRightChildIndex_(index);
            const smallerChildIndex = rIndex < count && priorities[rIndex] < priorities[lIndex] ? rIndex : lIndex;
            elements[index] = elements[smallerChildIndex];
            priorities[index] = priorities[smallerChildIndex];
            index = smallerChildIndex;
        }
        elements[index] = element;
        priorities[index] = priority;
        this.siftDown_(startIndex, index);
    }
    /**
   * @param {number} startIndex The index of the root.
   * @param {number} index The index of the node to move up.
   * @private
   */ siftDown_(startIndex, index) {
        const elements = this.elements_;
        const priorities = this.priorities_;
        const element = elements[index];
        const priority = priorities[index];
        while(index > startIndex){
            const parentIndex = this.getParentIndex_(index);
            if (priorities[parentIndex] > priority) {
                elements[index] = elements[parentIndex];
                priorities[index] = priorities[parentIndex];
                index = parentIndex;
            } else break;
        }
        elements[index] = element;
        priorities[index] = priority;
    }
    /**
   * FIXME empty description for jsdoc
   */ reprioritize() {
        const priorityFunction = this.priorityFunction_;
        const elements = this.elements_;
        const priorities = this.priorities_;
        let index = 0;
        const n = elements.length;
        let element, i, priority;
        for(i = 0; i < n; ++i){
            element = elements[i];
            priority = priorityFunction(element);
            if (priority == $cceded55e993df18$export$b4af72c40fd57063) delete this.queuedElements_[this.keyFunction_(element)];
            else {
                priorities[index] = priority;
                elements[index++] = element;
            }
        }
        elements.length = index;
        priorities.length = index;
        this.heapify_();
    }
}
var $cceded55e993df18$export$2e2bcd8739ae039 = $cceded55e993df18$var$PriorityQueue;



/**
 * @typedef {function(import("./Tile.js").default, string, import("./coordinate.js").Coordinate, number): number} PriorityFunction
 */ class $29d0c0a4332dda61$var$TileQueue extends (0, $cceded55e993df18$export$2e2bcd8739ae039) {
    /**
   * @param {PriorityFunction} tilePriorityFunction Tile priority function.
   * @param {function(): ?} tileChangeCallback Function called on each tile change event.
   */ constructor(tilePriorityFunction, tileChangeCallback){
        super(/**
       * @param {Array} element Element.
       * @return {number} Priority.
       */ function(element) {
            return tilePriorityFunction.apply(null, element);
        }, /**
       * @param {Array} element Element.
       * @return {string} Key.
       */ function(element) {
            return /** @type {import("./Tile.js").default} */ element[0].getKey();
        });
        /** @private */ this.boundHandleTileChange_ = this.handleTileChange.bind(this);
        /**
     * @private
     * @type {function(): ?}
     */ this.tileChangeCallback_ = tileChangeCallback;
        /**
     * @private
     * @type {number}
     */ this.tilesLoading_ = 0;
        /**
     * @private
     * @type {!Object<string,boolean>}
     */ this.tilesLoadingKeys_ = {};
    }
    /**
   * @param {Array} element Element.
   * @return {boolean} The element was added to the queue.
   */ enqueue(element) {
        const added = super.enqueue(element);
        if (added) {
            const tile = element[0];
            tile.addEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE, this.boundHandleTileChange_);
        }
        return added;
    }
    /**
   * @return {number} Number of tiles loading.
   */ getTilesLoading() {
        return this.tilesLoading_;
    }
    /**
   * @param {import("./events/Event.js").default} event Event.
   * @protected
   */ handleTileChange(event) {
        const tile = event.target;
        const state = tile.getState();
        if (state === (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED || state === (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR || state === (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY) {
            if (state !== (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR) tile.removeEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE, this.boundHandleTileChange_);
            const tileKey = tile.getKey();
            if (tileKey in this.tilesLoadingKeys_) {
                delete this.tilesLoadingKeys_[tileKey];
                --this.tilesLoading_;
            }
            this.tileChangeCallback_();
        }
    }
    /**
   * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
   * @param {number} maxNewLoads Maximum number of new tiles to load.
   */ loadMoreTiles(maxTotalLoading, maxNewLoads) {
        let newLoads = 0;
        let state, tile, tileKey;
        while(this.tilesLoading_ < maxTotalLoading && newLoads < maxNewLoads && this.getCount() > 0){
            tile = this.dequeue()[0];
            tileKey = tile.getKey();
            state = tile.getState();
            if (state === (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE && !(tileKey in this.tilesLoadingKeys_)) {
                this.tilesLoadingKeys_[tileKey] = true;
                ++this.tilesLoading_;
                ++newLoads;
                tile.load();
            }
        }
    }
}
var $29d0c0a4332dda61$export$2e2bcd8739ae039 = $29d0c0a4332dda61$var$TileQueue;
function $29d0c0a4332dda61$export$f08ad5eceeff5d45(frameState, tile, tileSourceKey, tileCenter, tileResolution) {
    // Filter out tiles at higher zoom levels than the current zoom level, or that
    // are outside the visible extent.
    if (!frameState || !(tileSourceKey in frameState.wantedTiles)) return 0, $cceded55e993df18$export$b4af72c40fd57063;
    if (!frameState.wantedTiles[tileSourceKey][tile.getKey()]) return 0, $cceded55e993df18$export$b4af72c40fd57063;
    // Prioritize the highest zoom level tiles closest to the focus.
    // Tiles at higher zoom levels are prioritized using Math.log(tileResolution).
    // Within a zoom level, tiles are prioritized by the distance in pixels between
    // the center of the tile and the center of the viewport.  The factor of 65536
    // means that the prioritization should behave as desired for tiles up to
    // 65536 * Math.log(2) = 45426 pixels from the focus.
    const center = frameState.viewState.center;
    const deltaX = tileCenter[0] - center[0];
    const deltaY = tileCenter[1] - center[1];
    return 65536 * Math.log(tileResolution) + Math.sqrt(deltaX * deltaX + deltaY * deltaY) / tileResolution;
}



var /**
 * @module ol/ViewHint
 */ /**
 * @enum {number}
 */ $15e38d2d645d76ee$export$2e2bcd8739ae039 = {
    ANIMATING: 0,
    INTERACTING: 1
};


var /**
 * @module ol/ViewProperty
 */ /**
 * @enum {string}
 */ $15305c937278209f$export$2e2bcd8739ae039 = {
    CENTER: "center",
    RESOLUTION: "resolution",
    ROTATION: "rotation"
};


const $7833ce234efe8d00$export$e98a216cdcc847dc = 42;
const $7833ce234efe8d00$export$6b8cb5cd370bd90c = 256;







function $5b14dadbdf2c85a1$export$c2f0af2c946f6897(extent, onlyCenter, smooth) {
    return(/**
     * @param {import("./coordinate.js").Coordinate|undefined} center Center.
     * @param {number|undefined} resolution Resolution.
     * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @param {Array<number>} [centerShift] Shift between map center and viewport center.
     * @return {import("./coordinate.js").Coordinate|undefined} Center.
     */ function(center, resolution, size, isMoving, centerShift) {
        if (!center) return undefined;
        if (!resolution && !onlyCenter) return center;
        const viewWidth = onlyCenter ? 0 : size[0] * resolution;
        const viewHeight = onlyCenter ? 0 : size[1] * resolution;
        const shiftX = centerShift ? centerShift[0] : 0;
        const shiftY = centerShift ? centerShift[1] : 0;
        let minX = extent[0] + viewWidth / 2 + shiftX;
        let maxX = extent[2] - viewWidth / 2 + shiftX;
        let minY = extent[1] + viewHeight / 2 + shiftY;
        let maxY = extent[3] - viewHeight / 2 + shiftY;
        // note: when zooming out of bounds, min and max values for x and y may
        // end up inverted (min > max); this has to be accounted for
        if (minX > maxX) {
            minX = (maxX + minX) / 2;
            maxX = minX;
        }
        if (minY > maxY) {
            minY = (maxY + minY) / 2;
            maxY = minY;
        }
        let x = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(center[0], minX, maxX);
        let y = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(center[1], minY, maxY);
        // during an interaction, allow some overscroll
        if (isMoving && smooth && resolution) {
            const ratio = 30 * resolution;
            x += -ratio * Math.log(1 + Math.max(0, minX - center[0]) / ratio) + ratio * Math.log(1 + Math.max(0, center[0] - maxX) / ratio);
            y += -ratio * Math.log(1 + Math.max(0, minY - center[1]) / ratio) + ratio * Math.log(1 + Math.max(0, center[1] - maxY) / ratio);
        }
        return [
            x,
            y
        ];
    });
}
function $5b14dadbdf2c85a1$export$f883a24d5edde77c(center) {
    return center;
}






/**
 * @typedef {function((number|undefined), number, import("./size.js").Size, boolean=): (number|undefined)} Type
 */ /**
 * Returns a modified resolution taking into account the viewport size and maximum
 * allowed extent.
 * @param {number} resolution Resolution
 * @param {import("./extent.js").Extent} maxExtent Maximum allowed extent.
 * @param {import("./size.js").Size} viewportSize Viewport size.
 * @param {boolean} showFullExtent Whether to show the full extent.
 * @return {number} Capped resolution.
 */ function $72d6dc0e672a3b5f$var$getViewportClampedResolution(resolution, maxExtent, viewportSize, showFullExtent) {
    const xResolution = (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(maxExtent) / viewportSize[0];
    const yResolution = (0, $ee16b51bb9f86500$export$c08559766941f856)(maxExtent) / viewportSize[1];
    if (showFullExtent) return Math.min(resolution, Math.max(xResolution, yResolution));
    return Math.min(resolution, Math.min(xResolution, yResolution));
}
/**
 * Returns a modified resolution to be between maxResolution and minResolution while
 * still allowing the value to be slightly out of bounds.
 * Note: the computation is based on the logarithm function (ln):
 *  - at 1, ln(x) is 0
 *  - above 1, ln(x) keeps increasing but at a much slower pace than x
 * The final result is clamped to prevent getting too far away from bounds.
 * @param {number} resolution Resolution.
 * @param {number} maxResolution Max resolution.
 * @param {number} minResolution Min resolution.
 * @return {number} Smoothed resolution.
 */ function $72d6dc0e672a3b5f$var$getSmoothClampedResolution(resolution, maxResolution, minResolution) {
    let result = Math.min(resolution, maxResolution);
    const ratio = 50;
    result *= Math.log(1 + ratio * Math.max(0, resolution / maxResolution - 1)) / ratio + 1;
    if (minResolution) {
        result = Math.max(result, minResolution);
        result /= Math.log(1 + ratio * Math.max(0, minResolution / resolution - 1)) / ratio + 1;
    }
    return (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(result, minResolution / 2, maxResolution * 2);
}
function $72d6dc0e672a3b5f$export$d65a517690fc4385(resolutions, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== undefined ? smooth : true;
    return(/**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */ function(resolution, direction, size, isMoving) {
        if (resolution !== undefined) {
            const maxResolution = resolutions[0];
            const minResolution = resolutions[resolutions.length - 1];
            const cappedMaxRes = maxExtent ? $72d6dc0e672a3b5f$var$getViewportClampedResolution(maxResolution, maxExtent, size, showFullExtent) : maxResolution;
            // during interacting or animating, allow intermediary values
            if (isMoving) {
                if (!smooth) return (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(resolution, minResolution, cappedMaxRes);
                return $72d6dc0e672a3b5f$var$getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
            }
            const capped = Math.min(cappedMaxRes, resolution);
            const z = Math.floor((0, $eea510364582e5fa$export$8a3786cc03fdb777)(resolutions, capped, direction));
            if (resolutions[z] > cappedMaxRes && z < resolutions.length - 1) return resolutions[z + 1];
            return resolutions[z];
        } else return undefined;
    });
}
function $72d6dc0e672a3b5f$export$22ac0f6b219de91a(power, maxResolution, minResolution, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== undefined ? smooth : true;
    minResolution = minResolution !== undefined ? minResolution : 0;
    return(/**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */ function(resolution, direction, size, isMoving) {
        if (resolution !== undefined) {
            const cappedMaxRes = maxExtent ? $72d6dc0e672a3b5f$var$getViewportClampedResolution(maxResolution, maxExtent, size, showFullExtent) : maxResolution;
            // during interacting or animating, allow intermediary values
            if (isMoving) {
                if (!smooth) return (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(resolution, minResolution, cappedMaxRes);
                return $72d6dc0e672a3b5f$var$getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
            }
            const tolerance = 1e-9;
            const minZoomLevel = Math.ceil(Math.log(maxResolution / cappedMaxRes) / Math.log(power) - tolerance);
            const offset = -direction * (0.5 - tolerance) + 0.5;
            const capped = Math.min(cappedMaxRes, resolution);
            const cappedZoomLevel = Math.floor(Math.log(maxResolution / capped) / Math.log(power) + offset);
            const zoomLevel = Math.max(minZoomLevel, cappedZoomLevel);
            const newResolution = maxResolution / Math.pow(power, zoomLevel);
            return (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(newResolution, minResolution, cappedMaxRes);
        } else return undefined;
    });
}
function $72d6dc0e672a3b5f$export$1c4e6da9b4b066fe(maxResolution, minResolution, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== undefined ? smooth : true;
    return(/**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */ function(resolution, direction, size, isMoving) {
        if (resolution !== undefined) {
            const cappedMaxRes = maxExtent ? $72d6dc0e672a3b5f$var$getViewportClampedResolution(maxResolution, maxExtent, size, showFullExtent) : maxResolution;
            if (!smooth || !isMoving) return (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(resolution, minResolution, cappedMaxRes);
            return $72d6dc0e672a3b5f$var$getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
        } else return undefined;
    });
}



function $9ce71f85bc80f4b2$export$e20fbacbb41798b(rotation) {
    if (rotation !== undefined) return 0;
    else return undefined;
}
function $9ce71f85bc80f4b2$export$f883a24d5edde77c(rotation) {
    if (rotation !== undefined) return rotation;
    else return undefined;
}
function $9ce71f85bc80f4b2$export$9ba78806de831083(n) {
    const theta = 2 * Math.PI / n;
    return(/**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */ function(rotation, isMoving) {
        if (isMoving) return rotation;
        if (rotation !== undefined) {
            rotation = Math.floor(rotation / theta + 0.5) * theta;
            return rotation;
        } else return undefined;
    });
}
function $9ce71f85bc80f4b2$export$17a6e6f3448b17e8(tolerance) {
    tolerance = tolerance || (0, $906cd1f2aa644a1d$export$cba01ba138429a1d)(5);
    return(/**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */ function(rotation, isMoving) {
        if (isMoving) return rotation;
        if (rotation !== undefined) {
            if (Math.abs(rotation) <= tolerance) return 0;
            else return rotation;
        } else return undefined;
    });
}











function $3742ca5d738f9c95$export$b92b2dedcfff79de(flatCoordinates, offset, end, stride, transform, dest) {
    dest = dest ? dest : [];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        const x = flatCoordinates[j];
        const y = flatCoordinates[j + 1];
        dest[i++] = transform[0] * x + transform[2] * y + transform[4];
        dest[i++] = transform[1] * x + transform[3] * y + transform[5];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}
function $3742ca5d738f9c95$export$bb628a54ab399bc9(flatCoordinates, offset, end, stride, angle, anchor, dest) {
    dest = dest ? dest : [];
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const anchorX = anchor[0];
    const anchorY = anchor[1];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        const deltaX = flatCoordinates[j] - anchorX;
        const deltaY = flatCoordinates[j + 1] - anchorY;
        dest[i++] = anchorX + deltaX * cos - deltaY * sin;
        dest[i++] = anchorY + deltaX * sin + deltaY * cos;
        for(let k = j + 2; k < j + stride; ++k)dest[i++] = flatCoordinates[k];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}
function $3742ca5d738f9c95$export$dcdf75081b88279d(flatCoordinates, offset, end, stride, sx, sy, anchor, dest) {
    dest = dest ? dest : [];
    const anchorX = anchor[0];
    const anchorY = anchor[1];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        const deltaX = flatCoordinates[j] - anchorX;
        const deltaY = flatCoordinates[j + 1] - anchorY;
        dest[i++] = anchorX + sx * deltaX;
        dest[i++] = anchorY + sy * deltaY;
        for(let k = j + 2; k < j + stride; ++k)dest[i++] = flatCoordinates[k];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}
function $3742ca5d738f9c95$export$d73ee8ef04f5226a(flatCoordinates, offset, end, stride, deltaX, deltaY, dest) {
    dest = dest ? dest : [];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        dest[i++] = flatCoordinates[j] + deltaX;
        dest[i++] = flatCoordinates[j + 1] + deltaY;
        for(let k = j + 2; k < j + stride; ++k)dest[i++] = flatCoordinates[k];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}


/**
 * @typedef {'XY' | 'XYZ' | 'XYM' | 'XYZM'} GeometryLayout
 * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
 * or measure ('M') coordinate is available.
 */ /**
 * @typedef {'Point' | 'LineString' | 'LinearRing' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon' | 'GeometryCollection' | 'Circle'} Type
 * The geometry type.  One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, or `'Circle'`.
 */ /**
 * @type {import("../transform.js").Transform}
 */ const $28d5fdb8623be286$var$tmpTransform = (0, $0e89e72515351739$export$185802fd694ee1f5)();
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for vector geometries.
 *
 * To get notified of changes to the geometry, register a listener for the
 * generic `change` event on your geometry instance.
 *
 * @abstract
 * @api
 */ class $28d5fdb8623be286$var$Geometry extends (0, $2fa1993cbde1d34b$export$2e2bcd8739ae039) {
    constructor(){
        super();
        /**
     * @private
     * @type {import("../extent.js").Extent}
     */ this.extent_ = (0, $ee16b51bb9f86500$export$fe201bb3bbe031e9)();
        /**
     * @private
     * @type {number}
     */ this.extentRevision_ = -1;
        /**
     * @protected
     * @type {number}
     */ this.simplifiedGeometryMaxMinSquaredTolerance = 0;
        /**
     * @protected
     * @type {number}
     */ this.simplifiedGeometryRevision = 0;
        /**
     * Get a transformed and simplified version of the geometry.
     * @abstract
     * @param {number} revision The geometry revision.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
     * @return {Geometry} Simplified geometry.
     */ this.simplifyTransformedInternal = (0, $f2508d0c199eb098$export$ff83df6f9971435f)(function(revision, squaredTolerance, transform) {
            if (!transform) return this.getSimplifiedGeometry(squaredTolerance);
            const clone = this.clone();
            clone.applyTransform(transform);
            return clone.getSimplifiedGeometry(squaredTolerance);
        });
    }
    /**
   * Get a transformed and simplified version of the geometry.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {Geometry} Simplified geometry.
   */ simplifyTransformed(squaredTolerance, transform) {
        return this.simplifyTransformedInternal(this.getRevision(), squaredTolerance, transform);
    }
    /**
   * Make a complete copy of the geometry.
   * @abstract
   * @return {!Geometry} Clone.
   */ clone() {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */ containsXY(x, y) {
        const coord = this.getClosestPoint([
            x,
            y
        ]);
        return coord[0] === x && coord[1] === y;
    }
    /**
   * Return the closest point of the geometry to the passed point as
   * {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} point Point.
   * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
   * @return {import("../coordinate.js").Coordinate} Closest point.
   * @api
   */ getClosestPoint(point, closestPoint) {
        closestPoint = closestPoint ? closestPoint : [
            NaN,
            NaN
        ];
        this.closestPointXY(point[0], point[1], closestPoint, Infinity);
        return closestPoint;
    }
    /**
   * Returns true if this geometry includes the specified coordinate. If the
   * coordinate is on the boundary of the geometry, returns false.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains coordinate.
   * @api
   */ intersectsCoordinate(coordinate) {
        return this.containsXY(coordinate[0], coordinate[1]);
    }
    /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */ computeExtent(extent) {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Get the extent of the geometry.
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} extent Extent.
   * @api
   */ getExtent(extent) {
        if (this.extentRevision_ != this.getRevision()) {
            const extent1 = this.computeExtent(this.extent_);
            if (isNaN(extent1[0]) || isNaN(extent1[1])) (0, $ee16b51bb9f86500$export$3e2152b047719fa1)(extent1);
            this.extentRevision_ = this.getRevision();
        }
        return (0, $ee16b51bb9f86500$export$6a4fe494c558c238)(this.extent_, extent);
    }
    /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */ rotate(angle, anchor) {
        (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */ scale(sx, sy, anchor) {
        (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Create a simplified version of this geometry.  For linestrings, this uses
   * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
   * algorithm.  For polygons, a quantization-based
   * simplification is used to preserve topology.
   * @param {number} tolerance The tolerance distance for simplification.
   * @return {Geometry} A new, simplified version of the original geometry.
   * @api
   */ simplify(tolerance) {
        return this.getSimplifiedGeometry(tolerance * tolerance);
    }
    /**
   * Create a simplified version of this geometry using the Douglas Peucker
   * algorithm.
   * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Geometry} Simplified geometry.
   */ getSimplifiedGeometry(squaredTolerance) {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */ getType() {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @abstract
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   */ applyTransform(transformFn) {
        (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */ intersectsExtent(extent) {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @abstract
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */ translate(deltaX, deltaY) {
        (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Transform each coordinate of the geometry from one coordinate reference
   * system to another. The geometry is modified in place.
   * For example, a line will be transformed to a line and a circle to a circle.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   *
   * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @return {Geometry} This geometry.  Note that original geometry is
   *     modified in place.
   * @api
   */ transform(source, destination) {
        /** @type {import("../proj/Projection.js").default} */ const sourceProj = (0, $0a1495ed54ce69a9$export$3988ae62b71be9a3)(source);
        const transformFn = sourceProj.getUnits() == "tile-pixels" ? function(inCoordinates, outCoordinates, stride) {
            const pixelExtent = sourceProj.getExtent();
            const projectedExtent = sourceProj.getWorldExtent();
            const scale = (0, $ee16b51bb9f86500$export$c08559766941f856)(projectedExtent) / (0, $ee16b51bb9f86500$export$c08559766941f856)(pixelExtent);
            (0, $0e89e72515351739$export$f672e0b6f7222cd7)($28d5fdb8623be286$var$tmpTransform, projectedExtent[0], projectedExtent[3], scale, -scale, 0, 0, 0);
            (0, $3742ca5d738f9c95$export$b92b2dedcfff79de)(inCoordinates, 0, inCoordinates.length, stride, $28d5fdb8623be286$var$tmpTransform, outCoordinates);
            return (0, $0a1495ed54ce69a9$export$fce0c6cfca85ed96)(sourceProj, destination)(inCoordinates, outCoordinates, stride);
        } : (0, $0a1495ed54ce69a9$export$fce0c6cfca85ed96)(sourceProj, destination);
        this.applyTransform(transformFn);
        return this;
    }
}
var $28d5fdb8623be286$export$2e2bcd8739ae039 = $28d5fdb8623be286$var$Geometry;





/**
 * @classdesc
 * Abstract base class; only used for creating subclasses; do not instantiate
 * in apps, as cannot be rendered.
 *
 * @abstract
 * @api
 */ class $4b4cc4177ebb7c9d$var$SimpleGeometry extends (0, $28d5fdb8623be286$export$2e2bcd8739ae039) {
    constructor(){
        super();
        /**
     * @protected
     * @type {import("./Geometry.js").GeometryLayout}
     */ this.layout = "XY";
        /**
     * @protected
     * @type {number}
     */ this.stride = 2;
        /**
     * @protected
     * @type {Array<number>}
     */ this.flatCoordinates = null;
    }
    /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */ computeExtent(extent) {
        return (0, $ee16b51bb9f86500$export$be0ab0bf96ca59ca)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, extent);
    }
    /**
   * @abstract
   * @return {Array<*> | null} Coordinates.
   */ getCoordinates() {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Return the first coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} First coordinate.
   * @api
   */ getFirstCoordinate() {
        return this.flatCoordinates.slice(0, this.stride);
    }
    /**
   * @return {Array<number>} Flat coordinates.
   */ getFlatCoordinates() {
        return this.flatCoordinates;
    }
    /**
   * Return the last coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} Last point.
   * @api
   */ getLastCoordinate() {
        return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride);
    }
    /**
   * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
   * @return {import("./Geometry.js").GeometryLayout} Layout.
   * @api
   */ getLayout() {
        return this.layout;
    }
    /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   */ getSimplifiedGeometry(squaredTolerance) {
        if (this.simplifiedGeometryRevision !== this.getRevision()) {
            this.simplifiedGeometryMaxMinSquaredTolerance = 0;
            this.simplifiedGeometryRevision = this.getRevision();
        }
        // If squaredTolerance is negative or if we know that simplification will not
        // have any effect then just return this.
        if (squaredTolerance < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance) return this;
        const simplifiedGeometry = this.getSimplifiedGeometryInternal(squaredTolerance);
        const simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();
        if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) return simplifiedGeometry;
        else {
            // Simplification did not actually remove any coordinates.  We now know
            // that any calls to getSimplifiedGeometry with a squaredTolerance less
            // than or equal to the current squaredTolerance will also not have any
            // effect.  This allows us to short circuit simplification (saving CPU
            // cycles) and prevents the cache of simplified geometries from filling
            // up with useless identical copies of this geometry (saving memory).
            this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
            return this;
        }
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        return this;
    }
    /**
   * @return {number} Stride.
   */ getStride() {
        return this.stride;
    }
    /**
   * @param {import("./Geometry.js").GeometryLayout} layout Layout.
   * @param {Array<number>} flatCoordinates Flat coordinates.
   */ setFlatCoordinates(layout, flatCoordinates) {
        this.stride = $4b4cc4177ebb7c9d$export$6af0c1b4a8549a43(layout);
        this.layout = layout;
        this.flatCoordinates = flatCoordinates;
    }
    /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ setCoordinates(coordinates, layout) {
        (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */ setLayout(layout, coordinates, nesting) {
        /** @type {number} */ let stride;
        if (layout) stride = $4b4cc4177ebb7c9d$export$6af0c1b4a8549a43(layout);
        else {
            for(let i = 0; i < nesting; ++i)if (coordinates.length === 0) {
                this.layout = "XY";
                this.stride = 2;
                return;
            } else coordinates = coordinates[0];
            stride = coordinates.length;
            layout = $4b4cc4177ebb7c9d$var$getLayoutForStride(stride);
        }
        this.layout = layout;
        this.stride = stride;
    }
    /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   */ applyTransform(transformFn) {
        if (this.flatCoordinates) {
            transformFn(this.flatCoordinates, this.flatCoordinates, this.stride);
            this.changed();
        }
    }
    /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in counter-clockwise radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */ rotate(angle, anchor) {
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            const stride = this.getStride();
            (0, $3742ca5d738f9c95$export$bb628a54ab399bc9)(flatCoordinates, 0, flatCoordinates.length, stride, angle, anchor, flatCoordinates);
            this.changed();
        }
    }
    /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */ scale(sx, sy, anchor) {
        if (sy === undefined) sy = sx;
        if (!anchor) anchor = (0, $ee16b51bb9f86500$export$c91255cadecfe081)(this.getExtent());
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            const stride = this.getStride();
            (0, $3742ca5d738f9c95$export$dcdf75081b88279d)(flatCoordinates, 0, flatCoordinates.length, stride, sx, sy, anchor, flatCoordinates);
            this.changed();
        }
    }
    /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */ translate(deltaX, deltaY) {
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            const stride = this.getStride();
            (0, $3742ca5d738f9c95$export$d73ee8ef04f5226a)(flatCoordinates, 0, flatCoordinates.length, stride, deltaX, deltaY, flatCoordinates);
            this.changed();
        }
    }
}
/**
 * @param {number} stride Stride.
 * @return {import("./Geometry.js").GeometryLayout} layout Layout.
 */ function $4b4cc4177ebb7c9d$var$getLayoutForStride(stride) {
    let layout;
    if (stride == 2) layout = "XY";
    else if (stride == 3) layout = "XYZ";
    else if (stride == 4) layout = "XYZM";
    return layout;
}
function $4b4cc4177ebb7c9d$export$6af0c1b4a8549a43(layout) {
    let stride;
    if (layout == "XY") stride = 2;
    else if (layout == "XYZ" || layout == "XYM") stride = 3;
    else if (layout == "XYZM") stride = 4;
    return stride;
}
function $4b4cc4177ebb7c9d$export$a3767472617c7861(simpleGeometry, transform, dest) {
    const flatCoordinates = simpleGeometry.getFlatCoordinates();
    if (!flatCoordinates) return null;
    else {
        const stride = simpleGeometry.getStride();
        return (0, $3742ca5d738f9c95$export$b92b2dedcfff79de)(flatCoordinates, 0, flatCoordinates.length, stride, transform, dest);
    }
}
var $4b4cc4177ebb7c9d$export$2e2bcd8739ae039 = $4b4cc4177ebb7c9d$var$SimpleGeometry;



/**
 * Returns the point on the 2D line segment flatCoordinates[offset1] to
 * flatCoordinates[offset2] that is closest to the point (x, y).  Extra
 * dimensions are linearly interpolated.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset1 Offset 1.
 * @param {number} offset2 Offset 2.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 */ function $a1ce3634136d744c$var$assignClosest(flatCoordinates, offset1, offset2, stride, x, y, closestPoint) {
    const x1 = flatCoordinates[offset1];
    const y1 = flatCoordinates[offset1 + 1];
    const dx = flatCoordinates[offset2] - x1;
    const dy = flatCoordinates[offset2 + 1] - y1;
    let offset;
    if (dx === 0 && dy === 0) offset = offset1;
    else {
        const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) offset = offset2;
        else if (t > 0) {
            for(let i = 0; i < stride; ++i)closestPoint[i] = (0, $906cd1f2aa644a1d$export$3a89f8d6f6bf6c9f)(flatCoordinates[offset1 + i], flatCoordinates[offset2 + i], t);
            closestPoint.length = stride;
            return;
        } else offset = offset1;
    }
    for(let i1 = 0; i1 < stride; ++i1)closestPoint[i1] = flatCoordinates[offset + i1];
    closestPoint.length = stride;
}
function $a1ce3634136d744c$export$bc2eb611ddf80103(flatCoordinates, offset, end, stride, max) {
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    for(offset += stride; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        const squaredDelta = (0, $906cd1f2aa644a1d$export$88e6ebb4fe54f538)(x1, y1, x2, y2);
        if (squaredDelta > max) max = squaredDelta;
        x1 = x2;
        y1 = y2;
    }
    return max;
}
function $a1ce3634136d744c$export$fbf31c8f2668ed5a(flatCoordinates, offset, ends, stride, max) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        max = $a1ce3634136d744c$export$bc2eb611ddf80103(flatCoordinates, offset, end, stride, max);
        offset = end;
    }
    return max;
}
function $a1ce3634136d744c$export$37c18e6e7d50501a(flatCoordinates, offset, endss, stride, max) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        max = $a1ce3634136d744c$export$fbf31c8f2668ed5a(flatCoordinates, offset, ends, stride, max);
        offset = ends[ends.length - 1];
    }
    return max;
}
function $a1ce3634136d744c$export$4adc8e5135fb44c(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
    if (offset == end) return minSquaredDistance;
    let i, squaredDistance;
    if (maxDelta === 0) {
        // All points are identical, so just test the first point.
        squaredDistance = (0, $906cd1f2aa644a1d$export$88e6ebb4fe54f538)(x, y, flatCoordinates[offset], flatCoordinates[offset + 1]);
        if (squaredDistance < minSquaredDistance) {
            for(i = 0; i < stride; ++i)closestPoint[i] = flatCoordinates[offset + i];
            closestPoint.length = stride;
            return squaredDistance;
        } else return minSquaredDistance;
    }
    tmpPoint = tmpPoint ? tmpPoint : [
        NaN,
        NaN
    ];
    let index = offset + stride;
    while(index < end){
        $a1ce3634136d744c$var$assignClosest(flatCoordinates, index - stride, index, stride, x, y, tmpPoint);
        squaredDistance = (0, $906cd1f2aa644a1d$export$88e6ebb4fe54f538)(x, y, tmpPoint[0], tmpPoint[1]);
        if (squaredDistance < minSquaredDistance) {
            minSquaredDistance = squaredDistance;
            for(i = 0; i < stride; ++i)closestPoint[i] = tmpPoint[i];
            closestPoint.length = stride;
            index += stride;
        } else // Skip ahead multiple points, because we know that all the skipped
        // points cannot be any closer than the closest point we have found so
        // far.  We know this because we know how close the current point is, how
        // close the closest point we have found so far is, and the maximum
        // distance between consecutive points.  For example, if we're currently
        // at distance 10, the best we've found so far is 3, and that the maximum
        // distance between consecutive points is 2, then we'll need to skip at
        // least (10 - 3) / 2 == 3 (rounded down) points to have any chance of
        // finding a closer point.  We use Math.max(..., 1) to ensure that we
        // always advance at least one point, to avoid an infinite loop.
        index += stride * Math.max((Math.sqrt(squaredDistance) - Math.sqrt(minSquaredDistance)) / maxDelta | 0, 1);
    }
    if (isRing) {
        // Check the closing segment.
        $a1ce3634136d744c$var$assignClosest(flatCoordinates, end - stride, offset, stride, x, y, tmpPoint);
        squaredDistance = (0, $906cd1f2aa644a1d$export$88e6ebb4fe54f538)(x, y, tmpPoint[0], tmpPoint[1]);
        if (squaredDistance < minSquaredDistance) {
            minSquaredDistance = squaredDistance;
            for(i = 0; i < stride; ++i)closestPoint[i] = tmpPoint[i];
            closestPoint.length = stride;
        }
    }
    return minSquaredDistance;
}
function $a1ce3634136d744c$export$5a48a0eefcf14992(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
    tmpPoint = tmpPoint ? tmpPoint : [
        NaN,
        NaN
    ];
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        minSquaredDistance = $a1ce3634136d744c$export$4adc8e5135fb44c(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint);
        offset = end;
    }
    return minSquaredDistance;
}
function $a1ce3634136d744c$export$60e067685eb8f9c4(flatCoordinates, offset, endss, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
    tmpPoint = tmpPoint ? tmpPoint : [
        NaN,
        NaN
    ];
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        minSquaredDistance = $a1ce3634136d744c$export$5a48a0eefcf14992(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint);
        offset = ends[ends.length - 1];
    }
    return minSquaredDistance;
}



function $578fd419ae274796$export$60815ead40ec79ab(flatCoordinates, offset, coordinate, stride) {
    for(let i = 0, ii = coordinate.length; i < ii; ++i)flatCoordinates[offset++] = coordinate[i];
    return offset;
}
function $578fd419ae274796$export$5c4daf67e03c190f(flatCoordinates, offset, coordinates, stride) {
    for(let i = 0, ii = coordinates.length; i < ii; ++i){
        const coordinate = coordinates[i];
        for(let j = 0; j < stride; ++j)flatCoordinates[offset++] = coordinate[j];
    }
    return offset;
}
function $578fd419ae274796$export$47c3746a74384d45(flatCoordinates, offset, coordinatess, stride, ends) {
    ends = ends ? ends : [];
    let i = 0;
    for(let j = 0, jj = coordinatess.length; j < jj; ++j){
        const end = $578fd419ae274796$export$5c4daf67e03c190f(flatCoordinates, offset, coordinatess[j], stride);
        ends[i++] = end;
        offset = end;
    }
    ends.length = i;
    return ends;
}
function $578fd419ae274796$export$f9f2bb59da4accd3(flatCoordinates, offset, coordinatesss, stride, endss) {
    endss = endss ? endss : [];
    let i = 0;
    for(let j = 0, jj = coordinatesss.length; j < jj; ++j){
        const ends = $578fd419ae274796$export$47c3746a74384d45(flatCoordinates, offset, coordinatesss[j], stride, endss[i]);
        if (ends.length === 0) ends[0] = offset;
        endss[i++] = ends;
        offset = ends[ends.length - 1];
    }
    endss.length = i;
    return endss;
}



function $14a684b1a4b2da51$export$2cbbcce9030b8734(flatCoordinates, offset, end, stride, squaredTolerance, highQuality, simplifiedFlatCoordinates) {
    simplifiedFlatCoordinates = simplifiedFlatCoordinates !== undefined ? simplifiedFlatCoordinates : [];
    if (!highQuality) {
        end = $14a684b1a4b2da51$export$46dba205a0107e9e(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, 0);
        flatCoordinates = simplifiedFlatCoordinates;
        offset = 0;
        stride = 2;
    }
    simplifiedFlatCoordinates.length = $14a684b1a4b2da51$export$ef693d1572e64fb8(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, 0);
    return simplifiedFlatCoordinates;
}
function $14a684b1a4b2da51$export$ef693d1572e64fb8(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    const n = (end - offset) / stride;
    if (n < 3) {
        for(; offset < end; offset += stride){
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
        }
        return simplifiedOffset;
    }
    /** @type {Array<number>} */ const markers = new Array(n);
    markers[0] = 1;
    markers[n - 1] = 1;
    /** @type {Array<number>} */ const stack = [
        offset,
        end - stride
    ];
    let index = 0;
    while(stack.length > 0){
        const last = stack.pop();
        const first = stack.pop();
        let maxSquaredDistance = 0;
        const x1 = flatCoordinates[first];
        const y1 = flatCoordinates[first + 1];
        const x2 = flatCoordinates[last];
        const y2 = flatCoordinates[last + 1];
        for(let i = first + stride; i < last; i += stride){
            const x = flatCoordinates[i];
            const y = flatCoordinates[i + 1];
            const squaredDistance = (0, $906cd1f2aa644a1d$export$251bb0a9cef172e6)(x, y, x1, y1, x2, y2);
            if (squaredDistance > maxSquaredDistance) {
                index = i;
                maxSquaredDistance = squaredDistance;
            }
        }
        if (maxSquaredDistance > squaredTolerance) {
            markers[(index - offset) / stride] = 1;
            if (first + stride < index) stack.push(first, index);
            if (index + stride < last) stack.push(index, last);
        }
    }
    for(let i1 = 0; i1 < n; ++i1)if (markers[i1]) {
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i1 * stride];
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i1 * stride + 1];
    }
    return simplifiedOffset;
}
function $14a684b1a4b2da51$export$cedb9900c0b225c2(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        simplifiedOffset = $14a684b1a4b2da51$export$ef693d1572e64fb8(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset);
        simplifiedEnds.push(simplifiedOffset);
        offset = end;
    }
    return simplifiedOffset;
}
function $14a684b1a4b2da51$export$5d74fb54bb752ea0(flatCoordinates, offset, endss, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEndss) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        const simplifiedEnds = [];
        simplifiedOffset = $14a684b1a4b2da51$export$cedb9900c0b225c2(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds);
        simplifiedEndss.push(simplifiedEnds);
        offset = ends[ends.length - 1];
    }
    return simplifiedOffset;
}
function $14a684b1a4b2da51$export$46dba205a0107e9e(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    if (end <= offset + stride) {
        // zero or one point, no simplification possible, so copy and return
        for(; offset < end; offset += stride){
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
        }
        return simplifiedOffset;
    }
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    // copy first point
    simplifiedFlatCoordinates[simplifiedOffset++] = x1;
    simplifiedFlatCoordinates[simplifiedOffset++] = y1;
    let x2 = x1;
    let y2 = y1;
    for(offset += stride; offset < end; offset += stride){
        x2 = flatCoordinates[offset];
        y2 = flatCoordinates[offset + 1];
        if ((0, $906cd1f2aa644a1d$export$88e6ebb4fe54f538)(x1, y1, x2, y2) > squaredTolerance) {
            // copy point at offset
            simplifiedFlatCoordinates[simplifiedOffset++] = x2;
            simplifiedFlatCoordinates[simplifiedOffset++] = y2;
            x1 = x2;
            y1 = y2;
        }
    }
    if (x2 != x1 || y2 != y1) {
        // copy last point
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    }
    return simplifiedOffset;
}
function $14a684b1a4b2da51$export$51a0620f7a28532b(value, tolerance) {
    return tolerance * Math.round(value / tolerance);
}
function $14a684b1a4b2da51$export$b84e8d2c4920a0c6(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    // do nothing if the line is empty
    if (offset == end) return simplifiedOffset;
    // snap the first coordinate (P1)
    let x1 = $14a684b1a4b2da51$export$51a0620f7a28532b(flatCoordinates[offset], tolerance);
    let y1 = $14a684b1a4b2da51$export$51a0620f7a28532b(flatCoordinates[offset + 1], tolerance);
    offset += stride;
    // add the first coordinate to the output
    simplifiedFlatCoordinates[simplifiedOffset++] = x1;
    simplifiedFlatCoordinates[simplifiedOffset++] = y1;
    // find the next coordinate that does not snap to the same value as the first
    // coordinate (P2)
    let x2, y2;
    do {
        x2 = $14a684b1a4b2da51$export$51a0620f7a28532b(flatCoordinates[offset], tolerance);
        y2 = $14a684b1a4b2da51$export$51a0620f7a28532b(flatCoordinates[offset + 1], tolerance);
        offset += stride;
        if (offset == end) {
            // all coordinates snap to the same value, the line collapses to a point
            // push the last snapped value anyway to ensure that the output contains
            // at least two points
            // FIXME should we really return at least two points anyway?
            simplifiedFlatCoordinates[simplifiedOffset++] = x2;
            simplifiedFlatCoordinates[simplifiedOffset++] = y2;
            return simplifiedOffset;
        }
    }while (x2 == x1 && y2 == y1);
    while(offset < end){
        // snap the next coordinate (P3)
        const x3 = $14a684b1a4b2da51$export$51a0620f7a28532b(flatCoordinates[offset], tolerance);
        const y3 = $14a684b1a4b2da51$export$51a0620f7a28532b(flatCoordinates[offset + 1], tolerance);
        offset += stride;
        // skip P3 if it is equal to P2
        if (x3 == x2 && y3 == y2) continue;
        // calculate the delta between P1 and P2
        const dx1 = x2 - x1;
        const dy1 = y2 - y1;
        // calculate the delta between P3 and P1
        const dx2 = x3 - x1;
        const dy2 = y3 - y1;
        // if P1, P2, and P3 are colinear and P3 is further from P1 than P2 is from
        // P1 in the same direction then P2 is on the straight line between P1 and
        // P3
        if (dx1 * dy2 == dy1 * dx2 && (dx1 < 0 && dx2 < dx1 || dx1 == dx2 || dx1 > 0 && dx2 > dx1) && (dy1 < 0 && dy2 < dy1 || dy1 == dy2 || dy1 > 0 && dy2 > dy1)) {
            // discard P2 and set P2 = P3
            x2 = x3;
            y2 = y3;
            continue;
        }
        // either P1, P2, and P3 are not colinear, or they are colinear but P3 is
        // between P3 and P1 or on the opposite half of the line to P2.  add P2,
        // and continue with P1 = P2 and P2 = P3
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
        x1 = x2;
        y1 = y2;
        x2 = x3;
        y2 = y3;
    }
    // add the last point (P2)
    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    return simplifiedOffset;
}
function $14a684b1a4b2da51$export$60a9904b67f8d51b(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        simplifiedOffset = $14a684b1a4b2da51$export$b84e8d2c4920a0c6(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset);
        simplifiedEnds.push(simplifiedOffset);
        offset = end;
    }
    return simplifiedOffset;
}
function $14a684b1a4b2da51$export$b9acf67ef05cd17c(flatCoordinates, offset, endss, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEndss) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        const simplifiedEnds = [];
        simplifiedOffset = $14a684b1a4b2da51$export$60a9904b67f8d51b(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds);
        simplifiedEndss.push(simplifiedEnds);
        offset = ends[ends.length - 1];
    }
    return simplifiedOffset;
}


function $3ff2c631d05a87b4$export$9c0934e4e9c3f61e(flatCoordinates, offset, end, stride, coordinates) {
    coordinates = coordinates !== undefined ? coordinates : [];
    let i = 0;
    for(let j = offset; j < end; j += stride)coordinates[i++] = flatCoordinates.slice(j, j + stride);
    coordinates.length = i;
    return coordinates;
}
function $3ff2c631d05a87b4$export$cbb9596fc0f40db2(flatCoordinates, offset, ends, stride, coordinatess) {
    coordinatess = coordinatess !== undefined ? coordinatess : [];
    let i = 0;
    for(let j = 0, jj = ends.length; j < jj; ++j){
        const end = ends[j];
        coordinatess[i++] = $3ff2c631d05a87b4$export$9c0934e4e9c3f61e(flatCoordinates, offset, end, stride, coordinatess[i]);
        offset = end;
    }
    coordinatess.length = i;
    return coordinatess;
}
function $3ff2c631d05a87b4$export$915c7058aeb4dfeb(flatCoordinates, offset, endss, stride, coordinatesss) {
    coordinatesss = coordinatesss !== undefined ? coordinatesss : [];
    let i = 0;
    for(let j = 0, jj = endss.length; j < jj; ++j){
        const ends = endss[j];
        coordinatesss[i++] = ends.length === 1 && ends[0] === offset ? [] : $3ff2c631d05a87b4$export$cbb9596fc0f40db2(flatCoordinates, offset, ends, stride, coordinatesss[i]);
        offset = ends[ends.length - 1];
    }
    coordinatesss.length = i;
    return coordinatesss;
}


function $1b4f879def6860c2$export$3c5e1905f889266e(flatCoordinates, offset, end, stride) {
    let twiceArea = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for(; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        twiceArea += y1 * x2 - x1 * y2;
        x1 = x2;
        y1 = y2;
    }
    return twiceArea / 2;
}
function $1b4f879def6860c2$export$7a8ee541dfdf2ed5(flatCoordinates, offset, ends, stride) {
    let area = 0;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        area += $1b4f879def6860c2$export$3c5e1905f889266e(flatCoordinates, offset, end, stride);
        offset = end;
    }
    return area;
}
function $1b4f879def6860c2$export$78e139679ca7205(flatCoordinates, offset, endss, stride) {
    let area = 0;
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        area += $1b4f879def6860c2$export$7a8ee541dfdf2ed5(flatCoordinates, offset, ends, stride);
        offset = ends[ends.length - 1];
    }
    return area;
}


/**
 * @classdesc
 * Linear ring geometry. Only used as part of polygon; cannot be rendered
 * on its own.
 *
 * @api
 */ class $81ee1f521eb82886$var$LinearRing extends (0, $4b4cc4177ebb7c9d$export$2e2bcd8739ae039) {
    /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ constructor(coordinates, layout){
        super();
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = -1;
        /**
     * @private
     * @type {number}
     */ this.maxDeltaRevision_ = -1;
        if (layout !== undefined && !Array.isArray(coordinates[0])) this.setFlatCoordinates(layout, coordinates);
        else this.setCoordinates(coordinates, layout);
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!LinearRing} Clone.
   * @api
   */ clone() {
        return new $81ee1f521eb82886$var$LinearRing(this.flatCoordinates.slice(), this.layout);
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, $ee16b51bb9f86500$export$cbe64c389534206f)(this.getExtent(), x, y)) return minSquaredDistance;
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt((0, $a1ce3634136d744c$export$bc2eb611ddf80103)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return (0, $a1ce3634136d744c$export$4adc8e5135fb44c)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
    }
    /**
   * Return the area of the linear ring on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */ getArea() {
        return (0, $1b4f879def6860c2$export$3c5e1905f889266e)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    }
    /**
   * Return the coordinates of the linear ring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */ getCoordinates() {
        return (0, $3ff2c631d05a87b4$export$9c0934e4e9c3f61e)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LinearRing} Simplified LinearRing.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        const simplifiedFlatCoordinates = [];
        simplifiedFlatCoordinates.length = (0, $14a684b1a4b2da51$export$ef693d1572e64fb8)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, squaredTolerance, simplifiedFlatCoordinates, 0);
        return new $81ee1f521eb82886$var$LinearRing(simplifiedFlatCoordinates, "XY");
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return "LinearRing";
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return false;
    }
    /**
   * Set the coordinates of the linear ring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 1);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        this.flatCoordinates.length = (0, $578fd419ae274796$export$5c4daf67e03c190f)(this.flatCoordinates, 0, coordinates, this.stride);
        this.changed();
    }
}
var $81ee1f521eb82886$export$2e2bcd8739ae039 = $81ee1f521eb82886$var$LinearRing;






/**
 * @classdesc
 * Point geometry.
 *
 * @api
 */ class $748ba47239f962b5$var$Point extends (0, $4b4cc4177ebb7c9d$export$2e2bcd8739ae039) {
    /**
   * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ constructor(coordinates, layout){
        super();
        this.setCoordinates(coordinates, layout);
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!Point} Clone.
   * @api
   */ clone() {
        const point = new $748ba47239f962b5$var$Point(this.flatCoordinates.slice(), this.layout);
        point.applyProperties(this);
        return point;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        const flatCoordinates = this.flatCoordinates;
        const squaredDistance = (0, $906cd1f2aa644a1d$export$88e6ebb4fe54f538)(x, y, flatCoordinates[0], flatCoordinates[1]);
        if (squaredDistance < minSquaredDistance) {
            const stride = this.stride;
            for(let i = 0; i < stride; ++i)closestPoint[i] = flatCoordinates[i];
            closestPoint.length = stride;
            return squaredDistance;
        } else return minSquaredDistance;
    }
    /**
   * Return the coordinate of the point.
   * @return {import("../coordinate.js").Coordinate} Coordinates.
   * @api
   */ getCoordinates() {
        return !this.flatCoordinates ? [] : this.flatCoordinates.slice();
    }
    /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */ computeExtent(extent) {
        return (0, $ee16b51bb9f86500$export$4838bf78d04a9440)(this.flatCoordinates, extent);
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return "Point";
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return (0, $ee16b51bb9f86500$export$805bdfd6d6690e97)(extent, this.flatCoordinates[0], this.flatCoordinates[1]);
    }
    /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 0);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        this.flatCoordinates.length = (0, $578fd419ae274796$export$60815ead40ec79ab)(this.flatCoordinates, 0, coordinates, this.stride);
        this.changed();
    }
}
var $748ba47239f962b5$export$2e2bcd8739ae039 = $748ba47239f962b5$var$Point;








function $b6768f93dcd44ed8$export$cedabedc7ac0e138(flatCoordinates, offset, end, stride, extent) {
    const outside = (0, $ee16b51bb9f86500$export$f9ed8a3d123a08e2)(extent, /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */ function(coordinate) {
        return !$b6768f93dcd44ed8$export$949a7a3a4b6f34fa(flatCoordinates, offset, end, stride, coordinate[0], coordinate[1]);
    });
    return !outside;
}
function $b6768f93dcd44ed8$export$949a7a3a4b6f34fa(flatCoordinates, offset, end, stride, x, y) {
    // https://geomalgorithms.com/a03-_inclusion.html
    // Copyright 2000 softSurfer, 2012 Dan Sunday
    // This code may be freely used and modified for any purpose
    // providing that this copyright notice is included with it.
    // SoftSurfer makes no warranty for this code, and cannot be held
    // liable for any real or imagined damage resulting from its use.
    // Users of this code must verify correctness for their application.
    let wn = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for(; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        if (y1 <= y) {
            if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) wn++;
        } else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) wn--;
        x1 = x2;
        y1 = y2;
    }
    return wn !== 0;
}
function $b6768f93dcd44ed8$export$ae868c0f6acc3355(flatCoordinates, offset, ends, stride, x, y) {
    if (ends.length === 0) return false;
    if (!$b6768f93dcd44ed8$export$949a7a3a4b6f34fa(flatCoordinates, offset, ends[0], stride, x, y)) return false;
    for(let i = 1, ii = ends.length; i < ii; ++i){
        if ($b6768f93dcd44ed8$export$949a7a3a4b6f34fa(flatCoordinates, ends[i - 1], ends[i], stride, x, y)) return false;
    }
    return true;
}
function $b6768f93dcd44ed8$export$c760d9d16cf92043(flatCoordinates, offset, endss, stride, x, y) {
    if (endss.length === 0) return false;
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        if ($b6768f93dcd44ed8$export$ae868c0f6acc3355(flatCoordinates, offset, ends, stride, x, y)) return true;
        offset = ends[ends.length - 1];
    }
    return false;
}



function $8b794e49ab98621f$export$50e3b25928a5e892(flatCoordinates, offset, ends, stride, flatCenters, flatCentersOffset, dest) {
    let i, ii, x, x1, x2, y1, y2;
    const y = flatCenters[flatCentersOffset + 1];
    /** @type {Array<number>} */ const intersections = [];
    // Calculate intersections with the horizontal line
    for(let r = 0, rr = ends.length; r < rr; ++r){
        const end = ends[r];
        x1 = flatCoordinates[end - stride];
        y1 = flatCoordinates[end - stride + 1];
        for(i = offset; i < end; i += stride){
            x2 = flatCoordinates[i];
            y2 = flatCoordinates[i + 1];
            if (y <= y1 && y2 <= y || y1 <= y && y <= y2) {
                x = (y - y1) / (y2 - y1) * (x2 - x1) + x1;
                intersections.push(x);
            }
            x1 = x2;
            y1 = y2;
        }
    }
    // Find the longest segment of the horizontal line that has its center point
    // inside the linear ring.
    let pointX = NaN;
    let maxSegmentLength = -Infinity;
    intersections.sort((0, $eea510364582e5fa$export$4e734a3b32fb971b));
    x1 = intersections[0];
    for(i = 1, ii = intersections.length; i < ii; ++i){
        x2 = intersections[i];
        const segmentLength = Math.abs(x2 - x1);
        if (segmentLength > maxSegmentLength) {
            x = (x1 + x2) / 2;
            if ((0, $b6768f93dcd44ed8$export$ae868c0f6acc3355)(flatCoordinates, offset, ends, stride, x, y)) {
                pointX = x;
                maxSegmentLength = segmentLength;
            }
        }
        x1 = x2;
    }
    if (isNaN(pointX)) // There is no horizontal line that has its center point inside the linear
    // ring.  Use the center of the the linear ring's extent.
    pointX = flatCenters[flatCentersOffset];
    if (dest) {
        dest.push(pointX, y, maxSegmentLength);
        return dest;
    } else return [
        pointX,
        y,
        maxSegmentLength
    ];
}
function $8b794e49ab98621f$export$11463803eda8a372(flatCoordinates, offset, endss, stride, flatCenters) {
    let interiorPoints = [];
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        interiorPoints = $8b794e49ab98621f$export$50e3b25928a5e892(flatCoordinates, offset, ends, stride, flatCenters, 2 * i, interiorPoints);
        offset = ends[ends.length - 1];
    }
    return interiorPoints;
}




function $7e27087302b81cab$export$4b80e395e36b5a56(flatCoordinates, offset, end, stride, callback) {
    let ret;
    offset += stride;
    for(; offset < end; offset += stride){
        ret = callback(flatCoordinates.slice(offset - stride, offset), flatCoordinates.slice(offset, offset + stride));
        if (ret) return ret;
    }
    return false;
}



function $17845162a91838ba$export$40d8d71841a3d779(flatCoordinates, offset, end, stride, extent) {
    const coordinatesExtent = (0, $ee16b51bb9f86500$export$30570204156ffd18)((0, $ee16b51bb9f86500$export$fe201bb3bbe031e9)(), flatCoordinates, offset, end, stride);
    if (!(0, $ee16b51bb9f86500$export$7b0a31e10bbff018)(extent, coordinatesExtent)) return false;
    if ((0, $ee16b51bb9f86500$export$be866b1e0809b17e)(extent, coordinatesExtent)) return true;
    if (coordinatesExtent[0] >= extent[0] && coordinatesExtent[2] <= extent[2]) return true;
    if (coordinatesExtent[1] >= extent[1] && coordinatesExtent[3] <= extent[3]) return true;
    return (0, $7e27087302b81cab$export$4b80e395e36b5a56)(flatCoordinates, offset, end, stride, /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */ function(point1, point2) {
        return (0, $ee16b51bb9f86500$export$a6a5a7a461419425)(extent, point1, point2);
    });
}
function $17845162a91838ba$export$fdb1d8e850bf7937(flatCoordinates, offset, ends, stride, extent) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        if ($17845162a91838ba$export$40d8d71841a3d779(flatCoordinates, offset, ends[i], stride, extent)) return true;
        offset = ends[i];
    }
    return false;
}
function $17845162a91838ba$export$830a0dafbb2ef1c5(flatCoordinates, offset, end, stride, extent) {
    if ($17845162a91838ba$export$40d8d71841a3d779(flatCoordinates, offset, end, stride, extent)) return true;
    if ((0, $b6768f93dcd44ed8$export$949a7a3a4b6f34fa)(flatCoordinates, offset, end, stride, extent[0], extent[1])) return true;
    if ((0, $b6768f93dcd44ed8$export$949a7a3a4b6f34fa)(flatCoordinates, offset, end, stride, extent[0], extent[3])) return true;
    if ((0, $b6768f93dcd44ed8$export$949a7a3a4b6f34fa)(flatCoordinates, offset, end, stride, extent[2], extent[1])) return true;
    if ((0, $b6768f93dcd44ed8$export$949a7a3a4b6f34fa)(flatCoordinates, offset, end, stride, extent[2], extent[3])) return true;
    return false;
}
function $17845162a91838ba$export$76dcd8f8f83b6ddb(flatCoordinates, offset, ends, stride, extent) {
    if (!$17845162a91838ba$export$830a0dafbb2ef1c5(flatCoordinates, offset, ends[0], stride, extent)) return false;
    if (ends.length === 1) return true;
    for(let i = 1, ii = ends.length; i < ii; ++i)if ((0, $b6768f93dcd44ed8$export$cedabedc7ac0e138)(flatCoordinates, ends[i - 1], ends[i], stride, extent)) {
        if (!$17845162a91838ba$export$40d8d71841a3d779(flatCoordinates, ends[i - 1], ends[i], stride, extent)) return false;
    }
    return true;
}
function $17845162a91838ba$export$77b72fa3792f5bf0(flatCoordinates, offset, endss, stride, extent) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        if ($17845162a91838ba$export$76dcd8f8f83b6ddb(flatCoordinates, offset, ends, stride, extent)) return true;
        offset = ends[ends.length - 1];
    }
    return false;
}


function $95fe988526fd677b$export$741858880c96b18c(flatCoordinates, offset, end, stride) {
    while(offset < end - stride){
        for(let i = 0; i < stride; ++i){
            const tmp = flatCoordinates[offset + i];
            flatCoordinates[offset + i] = flatCoordinates[end - stride + i];
            flatCoordinates[end - stride + i] = tmp;
        }
        offset += stride;
        end -= stride;
    }
}


function $7247530e70a295b8$export$318f2842ed17e094(flatCoordinates, offset, end, stride) {
    // https://stackoverflow.com/q/1165647/clockwise-method#1165943
    // https://github.com/OSGeo/gdal/blob/master/gdal/ogr/ogrlinearring.cpp
    let edge = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for(; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        edge += (x2 - x1) * (y2 + y1);
        x1 = x2;
        y1 = y2;
    }
    return edge === 0 ? undefined : edge > 0;
}
function $7247530e70a295b8$export$f27cd06e85f4ba28(flatCoordinates, offset, ends, stride, right) {
    right = right !== undefined ? right : false;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        const isClockwise = $7247530e70a295b8$export$318f2842ed17e094(flatCoordinates, offset, end, stride);
        if (i === 0) {
            if (right && isClockwise || !right && !isClockwise) return false;
        } else {
            if (right && !isClockwise || !right && isClockwise) return false;
        }
        offset = end;
    }
    return true;
}
function $7247530e70a295b8$export$a1d138f4bd85f4b4(flatCoordinates, offset, endss, stride, right) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        if (!$7247530e70a295b8$export$f27cd06e85f4ba28(flatCoordinates, offset, ends, stride, right)) return false;
        if (ends.length) offset = ends[ends.length - 1];
    }
    return true;
}
function $7247530e70a295b8$export$b71b604ddfc778c7(flatCoordinates, offset, ends, stride, right) {
    right = right !== undefined ? right : false;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        const isClockwise = $7247530e70a295b8$export$318f2842ed17e094(flatCoordinates, offset, end, stride);
        const reverse = i === 0 ? right && isClockwise || !right && !isClockwise : right && !isClockwise || !right && isClockwise;
        if (reverse) (0, $95fe988526fd677b$export$741858880c96b18c)(flatCoordinates, offset, end, stride);
        offset = end;
    }
    return offset;
}
function $7247530e70a295b8$export$ea9ed55fc2a85010(flatCoordinates, offset, endss, stride, right) {
    for(let i = 0, ii = endss.length; i < ii; ++i)offset = $7247530e70a295b8$export$b71b604ddfc778c7(flatCoordinates, offset, endss[i], stride, right);
    return offset;
}
function $7247530e70a295b8$export$cb72ae403d6e78e6(flatCoordinates, ends) {
    const endss = [];
    let offset = 0;
    let prevEndIndex = 0;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        // classifies an array of rings into polygons with outer rings and holes
        if (!$7247530e70a295b8$export$318f2842ed17e094(flatCoordinates, offset, end, 2)) endss.push(ends.slice(prevEndIndex, i + 1));
        else {
            if (endss.length === 0) continue;
            endss[endss.length - 1].push(ends[prevEndIndex]);
        }
        prevEndIndex = i + 1;
        offset = end;
    }
    return endss;
}







/**
 * @classdesc
 * Polygon geometry.
 *
 * @api
 */ class $07899719e245857b$var$Polygon extends (0, $4b4cc4177ebb7c9d$export$2e2bcd8739ae039) {
    /**
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
   *     Array of linear rings that define the polygon. The first linear ring of the
   *     array defines the outer-boundary or surface of the polygon. Each subsequent
   *     linear ring defines a hole in the surface of the polygon. A linear ring is
   *     an array of vertices' coordinates where the first coordinate and the last are
   *     equivalent. (For internal use, flat coordinates in combination with
   *     `layout` and `ends` are also accepted.)
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
   */ constructor(coordinates, layout, ends){
        super();
        /**
     * @type {Array<number>}
     * @private
     */ this.ends_ = [];
        /**
     * @private
     * @type {number}
     */ this.flatInteriorPointRevision_ = -1;
        /**
     * @private
     * @type {import("../coordinate.js").Coordinate}
     */ this.flatInteriorPoint_ = null;
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = -1;
        /**
     * @private
     * @type {number}
     */ this.maxDeltaRevision_ = -1;
        /**
     * @private
     * @type {number}
     */ this.orientedRevision_ = -1;
        /**
     * @private
     * @type {Array<number>}
     */ this.orientedFlatCoordinates_ = null;
        if (layout !== undefined && ends) {
            this.setFlatCoordinates(layout, coordinates);
            this.ends_ = ends;
        } else this.setCoordinates(coordinates, layout);
    }
    /**
   * Append the passed linear ring to this polygon.
   * @param {LinearRing} linearRing Linear ring.
   * @api
   */ appendLinearRing(linearRing) {
        if (!this.flatCoordinates) this.flatCoordinates = linearRing.getFlatCoordinates().slice();
        else (0, $eea510364582e5fa$export$8b58be045bf06082)(this.flatCoordinates, linearRing.getFlatCoordinates());
        this.ends_.push(this.flatCoordinates.length);
        this.changed();
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   */ clone() {
        const polygon = new $07899719e245857b$var$Polygon(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
        polygon.applyProperties(this);
        return polygon;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, $ee16b51bb9f86500$export$cbe64c389534206f)(this.getExtent(), x, y)) return minSquaredDistance;
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt((0, $a1ce3634136d744c$export$fbf31c8f2668ed5a)(this.flatCoordinates, 0, this.ends_, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return (0, $a1ce3634136d744c$export$5a48a0eefcf14992)(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */ containsXY(x, y) {
        return (0, $b6768f93dcd44ed8$export$ae868c0f6acc3355)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, x, y);
    }
    /**
   * Return the area of the polygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */ getArea() {
        return (0, $1b4f879def6860c2$export$7a8ee541dfdf2ed5)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
    }
    /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   */ getCoordinates(right) {
        let flatCoordinates;
        if (right !== undefined) {
            flatCoordinates = this.getOrientedFlatCoordinates().slice();
            (0, $7247530e70a295b8$export$b71b604ddfc778c7)(flatCoordinates, 0, this.ends_, this.stride, right);
        } else flatCoordinates = this.flatCoordinates;
        return (0, $3ff2c631d05a87b4$export$cbb9596fc0f40db2)(flatCoordinates, 0, this.ends_, this.stride);
    }
    /**
   * @return {Array<number>} Ends.
   */ getEnds() {
        return this.ends_;
    }
    /**
   * @return {Array<number>} Interior point.
   */ getFlatInteriorPoint() {
        if (this.flatInteriorPointRevision_ != this.getRevision()) {
            const flatCenter = (0, $ee16b51bb9f86500$export$c91255cadecfe081)(this.getExtent());
            this.flatInteriorPoint_ = (0, $8b794e49ab98621f$export$50e3b25928a5e892)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, flatCenter, 0);
            this.flatInteriorPointRevision_ = this.getRevision();
        }
        return this.flatInteriorPoint_;
    }
    /**
   * Return an interior point of the polygon.
   * @return {Point} Interior point as XYM coordinate, where M is the
   * length of the horizontal intersection that the point belongs to.
   * @api
   */ getInteriorPoint() {
        return new (0, $748ba47239f962b5$export$2e2bcd8739ae039)(this.getFlatInteriorPoint(), "XYM");
    }
    /**
   * Return the number of rings of the polygon,  this includes the exterior
   * ring and any interior rings.
   *
   * @return {number} Number of rings.
   * @api
   */ getLinearRingCount() {
        return this.ends_.length;
    }
    /**
   * Return the Nth linear ring of the polygon geometry. Return `null` if the
   * given index is out of range.
   * The exterior linear ring is available at index `0` and the interior rings
   * at index `1` and beyond.
   *
   * @param {number} index Index.
   * @return {LinearRing|null} Linear ring.
   * @api
   */ getLinearRing(index) {
        if (index < 0 || this.ends_.length <= index) return null;
        return new (0, $81ee1f521eb82886$export$2e2bcd8739ae039)(this.flatCoordinates.slice(index === 0 ? 0 : this.ends_[index - 1], this.ends_[index]), this.layout);
    }
    /**
   * Return the linear rings of the polygon.
   * @return {Array<LinearRing>} Linear rings.
   * @api
   */ getLinearRings() {
        const layout = this.layout;
        const flatCoordinates = this.flatCoordinates;
        const ends = this.ends_;
        const linearRings = [];
        let offset = 0;
        for(let i = 0, ii = ends.length; i < ii; ++i){
            const end = ends[i];
            const linearRing = new (0, $81ee1f521eb82886$export$2e2bcd8739ae039)(flatCoordinates.slice(offset, end), layout);
            linearRings.push(linearRing);
            offset = end;
        }
        return linearRings;
    }
    /**
   * @return {Array<number>} Oriented flat coordinates.
   */ getOrientedFlatCoordinates() {
        if (this.orientedRevision_ != this.getRevision()) {
            const flatCoordinates = this.flatCoordinates;
            if ((0, $7247530e70a295b8$export$f27cd06e85f4ba28)(flatCoordinates, 0, this.ends_, this.stride)) this.orientedFlatCoordinates_ = flatCoordinates;
            else {
                this.orientedFlatCoordinates_ = flatCoordinates.slice();
                this.orientedFlatCoordinates_.length = (0, $7247530e70a295b8$export$b71b604ddfc778c7)(this.orientedFlatCoordinates_, 0, this.ends_, this.stride);
            }
            this.orientedRevision_ = this.getRevision();
        }
        return this.orientedFlatCoordinates_;
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Polygon} Simplified Polygon.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        const simplifiedFlatCoordinates = [];
        const simplifiedEnds = [];
        simplifiedFlatCoordinates.length = (0, $14a684b1a4b2da51$export$60a9904b67f8d51b)(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(squaredTolerance), simplifiedFlatCoordinates, 0, simplifiedEnds);
        return new $07899719e245857b$var$Polygon(simplifiedFlatCoordinates, "XY", simplifiedEnds);
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return "Polygon";
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return (0, $17845162a91838ba$export$76dcd8f8f83b6ddb)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, extent);
    }
    /**
   * Set the coordinates of the polygon.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 2);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        const ends = (0, $578fd419ae274796$export$47c3746a74384d45)(this.flatCoordinates, 0, coordinates, this.stride, this.ends_);
        this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
        this.changed();
    }
}
var $07899719e245857b$export$2e2bcd8739ae039 = $07899719e245857b$var$Polygon;
function $07899719e245857b$export$f99d756c6d81ae3f(center, radius, n, sphereRadius) {
    n = n ? n : 32;
    /** @type {Array<number>} */ const flatCoordinates = [];
    for(let i = 0; i < n; ++i)(0, $eea510364582e5fa$export$8b58be045bf06082)(flatCoordinates, (0, $ede96a9a695822c6$export$cc800923e997bb8)(center, radius, 2 * Math.PI * i / n, sphereRadius));
    flatCoordinates.push(flatCoordinates[0], flatCoordinates[1]);
    return new $07899719e245857b$var$Polygon(flatCoordinates, "XY", [
        flatCoordinates.length
    ]);
}
function $07899719e245857b$export$c16b671815801c75(extent) {
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const flatCoordinates = [
        minX,
        minY,
        minX,
        maxY,
        maxX,
        maxY,
        maxX,
        minY,
        minX,
        minY, 
    ];
    return new $07899719e245857b$var$Polygon(flatCoordinates, "XY", [
        flatCoordinates.length
    ]);
}
function $07899719e245857b$export$2451009d645fb8c2(circle, sides, angle) {
    sides = sides ? sides : 32;
    const stride = circle.getStride();
    const layout = circle.getLayout();
    const center = circle.getCenter();
    const arrayLength = stride * (sides + 1);
    const flatCoordinates = new Array(arrayLength);
    for(let i = 0; i < arrayLength; i += stride){
        flatCoordinates[i] = 0;
        flatCoordinates[i + 1] = 0;
        for(let j = 2; j < stride; j++)flatCoordinates[i + j] = center[j];
    }
    const ends = [
        flatCoordinates.length
    ];
    const polygon = new $07899719e245857b$var$Polygon(flatCoordinates, layout, ends);
    $07899719e245857b$export$87d6a1539a56e47f(polygon, center, circle.getRadius(), angle);
    return polygon;
}
function $07899719e245857b$export$87d6a1539a56e47f(polygon, center, radius, angle) {
    const flatCoordinates = polygon.getFlatCoordinates();
    const stride = polygon.getStride();
    const sides = flatCoordinates.length / stride - 1;
    const startAngle = angle ? angle : 0;
    for(let i = 0; i <= sides; ++i){
        const offset = i * stride;
        const angle1 = startAngle + (0, $906cd1f2aa644a1d$export$ba467bec01d66def)(i, sides) * 2 * Math.PI / sides;
        flatCoordinates[offset] = center[0] + radius * Math.cos(angle1);
        flatCoordinates[offset + 1] = center[1] + radius * Math.sin(angle1);
    }
    polygon.changed();
}


/**
 * An animation configuration
 *
 * @typedef {Object} Animation
 * @property {import("./coordinate.js").Coordinate} [sourceCenter] Source center.
 * @property {import("./coordinate.js").Coordinate} [targetCenter] Target center.
 * @property {number} [sourceResolution] Source resolution.
 * @property {number} [targetResolution] Target resolution.
 * @property {number} [sourceRotation] Source rotation.
 * @property {number} [targetRotation] Target rotation.
 * @property {import("./coordinate.js").Coordinate} [anchor] Anchor.
 * @property {number} start Start.
 * @property {number} duration Duration.
 * @property {boolean} complete Complete.
 * @property {function(number):number} easing Easing.
 * @property {function(boolean):void} callback Callback.
 */ /**
 * @typedef {Object} Constraints
 * @property {import("./centerconstraint.js").Type} center Center.
 * @property {import("./resolutionconstraint.js").Type} resolution Resolution.
 * @property {import("./rotationconstraint.js").Type} rotation Rotation.
 */ /**
 * @typedef {Object} FitOptions
 * @property {import("./size.js").Size} [size] The size in pixels of the box to fit
 * the extent into. Default is the current size of the first map in the DOM that
 * uses this view, or `[100, 100]` if no such map is found.
 * @property {!Array<number>} [padding=[0, 0, 0, 0]] Padding (in pixels) to be
 * cleared inside the view. Values in the array are top, right, bottom and left
 * padding.
 * @property {boolean} [nearest=false] If the view `constrainResolution` option is `true`,
 * get the nearest extent instead of the closest that actually fits the view.
 * @property {number} [minResolution=0] Minimum resolution that we zoom to.
 * @property {number} [maxZoom] Maximum zoom level that we zoom to. If
 * `minResolution` is given, this property is ignored.
 * @property {number} [duration] The duration of the animation in milliseconds.
 * By default, there is no animation to the target extent.
 * @property {function(number):number} [easing] The easing function used during
 * the animation (defaults to {@link module:ol/easing.inAndOut}).
 * The function will be called for each frame with a number representing a
 * fraction of the animation's duration.  The function should return a number
 * between 0 and 1 representing the progress toward the destination state.
 * @property {function(boolean):void} [callback] Function called when the view is in
 * its final position. The callback will be called with `true` if the animation
 * series completed on its own or `false` if it was cancelled.
 */ /**
 * @typedef {Object} ViewOptions
 * @property {import("./coordinate.js").Coordinate} [center] The initial center for
 * the view. If a user projection is not set, the coordinate system for the center is
 * specified with the `projection` option. Layer sources will not be fetched if this
 * is not set, but the center can be set later with {@link #setCenter}.
 * @property {boolean|number} [constrainRotation=true] Rotation constraint.
 * `false` means no constraint. `true` means no constraint, but snap to zero
 * near zero. A number constrains the rotation to that number of values. For
 * example, `4` will constrain the rotation to 0, 90, 180, and 270 degrees.
 * @property {boolean} [enableRotation=true] Enable rotation.
 * If `false`, a rotation constraint that always sets the rotation to zero is
 * used. The `constrainRotation` option has no effect if `enableRotation` is
 * `false`.
 * @property {import("./extent.js").Extent} [extent] The extent that constrains the
 * view, in other words, nothing outside of this extent can be visible on the map.
 * @property {boolean} [constrainOnlyCenter=false] If true, the extent
 * constraint will only apply to the view center and not the whole extent.
 * @property {boolean} [smoothExtentConstraint=true] If true, the extent
 * constraint will be applied smoothly, i.e. allow the view to go slightly outside
 * of the given `extent`.
 * @property {number} [maxResolution] The maximum resolution used to determine
 * the resolution constraint. It is used together with `minResolution` (or
 * `maxZoom`) and `zoomFactor`. If unspecified it is calculated in such a way
 * that the projection's validity extent fits in a 256x256 px tile. If the
 * projection is Spherical Mercator (the default) then `maxResolution` defaults
 * to `40075016.68557849 / 256 = 156543.03392804097`.
 * @property {number} [minResolution] The minimum resolution used to determine
 * the resolution constraint.  It is used together with `maxResolution` (or
 * `minZoom`) and `zoomFactor`.  If unspecified it is calculated assuming 29
 * zoom levels (with a factor of 2). If the projection is Spherical Mercator
 * (the default) then `minResolution` defaults to
 * `40075016.68557849 / 256 / Math.pow(2, 28) = 0.0005831682455839253`.
 * @property {number} [maxZoom=28] The maximum zoom level used to determine the
 * resolution constraint. It is used together with `minZoom` (or
 * `maxResolution`) and `zoomFactor`.  Note that if `minResolution` is also
 * provided, it is given precedence over `maxZoom`.
 * @property {number} [minZoom=0] The minimum zoom level used to determine the
 * resolution constraint. It is used together with `maxZoom` (or
 * `minResolution`) and `zoomFactor`.  Note that if `maxResolution` is also
 * provided, it is given precedence over `minZoom`.
 * @property {boolean} [multiWorld=false] If `false` the view is constrained so
 * only one world is visible, and you cannot pan off the edge.  If `true` the map
 * may show multiple worlds at low zoom levels.  Only used if the `projection` is
 * global.  Note that if `extent` is also provided it is given precedence.
 * @property {boolean} [constrainResolution=false] If true, the view will always
 * animate to the closest zoom level after an interaction; false means
 * intermediary zoom levels are allowed.
 * @property {boolean} [smoothResolutionConstraint=true] If true, the resolution
 * min/max values will be applied smoothly, i. e. allow the view to exceed slightly
 * the given resolution or zoom bounds.
 * @property {boolean} [showFullExtent=false] Allow the view to be zoomed out to
 * show the full configured extent. By default, when a view is configured with an
 * extent, users will not be able to zoom out so the viewport exceeds the extent in
 * either dimension. This means the full extent may not be visible if the viewport
 * is taller or wider than the aspect ratio of the configured extent. If
 * showFullExtent is true, the user will be able to zoom out so that the viewport
 * exceeds the height or width of the configured extent, but not both, allowing the
 * full extent to be shown.
 * @property {import("./proj.js").ProjectionLike} [projection='EPSG:3857'] The
 * projection. The default is Spherical Mercator.
 * @property {number} [resolution] The initial resolution for the view. The
 * units are `projection` units per pixel (e.g. meters per pixel). An
 * alternative to setting this is to set `zoom`. Layer sources will not be
 * fetched if neither this nor `zoom` are defined, but they can be set later
 * with {@link #setZoom} or {@link #setResolution}.
 * @property {Array<number>} [resolutions] Resolutions that determine the
 * zoom levels if specified. The index in the array corresponds to the zoom level,
 * therefore the resolution values have to be in descending order. It also constrains
 * the resolution by the minimum and maximum value. If set the `maxResolution`,
 * `minResolution`, `minZoom`, `maxZoom`, and `zoomFactor` options are ignored.
 * @property {number} [rotation=0] The initial rotation for the view in radians
 * (positive rotation clockwise, 0 means North).
 * @property {number} [zoom] Only used if `resolution` is not defined. Zoom
 * level used to calculate the initial resolution for the view.
 * @property {number} [zoomFactor=2] The zoom factor used to compute the
 * corresponding resolution.
 * @property {!Array<number>} [padding=[0, 0, 0, 0]] Padding (in css pixels).
 * If the map viewport is partially covered with other content (overlays) along
 * its edges, this setting allows to shift the center of the viewport away from
 * that content. The order of the values is top, right, bottom, left.
 */ /**
 * @typedef {Object} AnimationOptions
 * @property {import("./coordinate.js").Coordinate} [center] The center of the view at the end of
 * the animation.
 * @property {number} [zoom] The zoom level of the view at the end of the
 * animation. This takes precedence over `resolution`.
 * @property {number} [resolution] The resolution of the view at the end
 * of the animation.  If `zoom` is also provided, this option will be ignored.
 * @property {number} [rotation] The rotation of the view at the end of
 * the animation.
 * @property {import("./coordinate.js").Coordinate} [anchor] Optional anchor to remain fixed
 * during a rotation or resolution animation.
 * @property {number} [duration=1000] The duration of the animation in milliseconds.
 * @property {function(number):number} [easing] The easing function used
 * during the animation (defaults to {@link module:ol/easing.inAndOut}).
 * The function will be called for each frame with a number representing a
 * fraction of the animation's duration.  The function should return a number
 * between 0 and 1 representing the progress toward the destination state.
 */ /**
 * @typedef {Object} State
 * @property {import("./coordinate.js").Coordinate} center Center.
 * @property {import("./proj/Projection.js").default} projection Projection.
 * @property {number} resolution Resolution.
 * @property {import("./coordinate.js").Coordinate} [nextCenter] The next center during an animation series.
 * @property {number} [nextResolution] The next resolution during an animation series.
 * @property {number} [nextRotation] The next rotation during an animation series.
 * @property {number} rotation Rotation.
 * @property {number} zoom Zoom.
 */ /**
 * Default min zoom level for the map view.
 * @type {number}
 */ const $82506d42cbd3642d$var$DEFAULT_MIN_ZOOM = 0;
/**
 * @typedef {import("./ObjectEventType").Types|'change:center'|'change:resolution'|'change:rotation'} ViewObjectEventTypes
 */ /***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *   import("./Observable").OnSignature<ViewObjectEventTypes, import("./Object").ObjectEvent, Return> &
 *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|ViewObjectEventTypes, Return>} ViewOnSignature
 */ /**
 * @classdesc
 * A View object represents a simple 2D view of the map.
 *
 * This is the object to act upon to change the center, resolution,
 * and rotation of the map.
 *
 * A View has a `projection`. The projection determines the
 * coordinate system of the center, and its units determine the units of the
 * resolution (projection units per pixel). The default projection is
 * Web Mercator (EPSG:3857).
 *
 * ### The view states
 *
 * A View is determined by three states: `center`, `resolution`,
 * and `rotation`. Each state has a corresponding getter and setter, e.g.
 * `getCenter` and `setCenter` for the `center` state.
 *
 * The `zoom` state is actually not saved on the view: all computations
 * internally use the `resolution` state. Still, the `setZoom` and `getZoom`
 * methods are available, as well as `getResolutionForZoom` and
 * `getZoomForResolution` to switch from one system to the other.
 *
 * ### The constraints
 *
 * `setCenter`, `setResolution` and `setRotation` can be used to change the
 * states of the view, but any constraint defined in the constructor will
 * be applied along the way.
 *
 * A View object can have a *resolution constraint*, a *rotation constraint*
 * and a *center constraint*.
 *
 * The *resolution constraint* typically restricts min/max values and
 * snaps to specific resolutions. It is determined by the following
 * options: `resolutions`, `maxResolution`, `maxZoom` and `zoomFactor`.
 * If `resolutions` is set, the other three options are ignored. See
 * documentation for each option for more information. By default, the view
 * only has a min/max restriction and allow intermediary zoom levels when
 * pinch-zooming for example.
 *
 * The *rotation constraint* snaps to specific angles. It is determined
 * by the following options: `enableRotation` and `constrainRotation`.
 * By default rotation is allowed and its value is snapped to zero when approaching the
 * horizontal.
 *
 * The *center constraint* is determined by the `extent` option. By
 * default the view center is not constrained at all.
 *
 * ### Changing the view state
 *
 * It is important to note that `setZoom`, `setResolution`, `setCenter` and
 * `setRotation` are subject to the above mentioned constraints. As such, it
 * may sometimes not be possible to know in advance the resulting state of the
 * View. For example, calling `setResolution(10)` does not guarantee that
 * `getResolution()` will return `10`.
 *
 * A consequence of this is that, when applying a delta on the view state, one
 * should use `adjustCenter`, `adjustRotation`, `adjustZoom` and `adjustResolution`
 * rather than the corresponding setters. This will let view do its internal
 * computations. Besides, the `adjust*` methods also take an `anchor`
 * argument which allows specifying an origin for the transformation.
 *
 * ### Interacting with the view
 *
 * View constraints are usually only applied when the view is *at rest*, meaning that
 * no interaction or animation is ongoing. As such, if the user puts the view in a
 * state that is not equivalent to a constrained one (e.g. rotating the view when
 * the snap angle is 0), an animation will be triggered at the interaction end to
 * put back the view to a stable state;
 *
 * @api
 */ class $82506d42cbd3642d$var$View extends (0, $2fa1993cbde1d34b$export$2e2bcd8739ae039) {
    /**
   * @param {ViewOptions} [options] View options.
   */ constructor(options){
        super();
        /***
     * @type {ViewOnSignature<import("./events").EventsKey>}
     */ this.on;
        /***
     * @type {ViewOnSignature<import("./events").EventsKey>}
     */ this.once;
        /***
     * @type {ViewOnSignature<void>}
     */ this.un;
        options = Object.assign({}, options);
        /**
     * @private
     * @type {Array<number>}
     */ this.hints_ = [
            0,
            0
        ];
        /**
     * @private
     * @type {Array<Array<Animation>>}
     */ this.animations_ = [];
        /**
     * @private
     * @type {number|undefined}
     */ this.updateAnimationKey_;
        /**
     * @private
     * @const
     * @type {import("./proj/Projection.js").default}
     */ this.projection_ = (0, $0a1495ed54ce69a9$export$549167224996a0fb)(options.projection, "EPSG:3857");
        /**
     * @private
     * @type {import("./size.js").Size}
     */ this.viewportSize_ = [
            100,
            100
        ];
        /**
     * @private
     * @type {import("./coordinate.js").Coordinate|undefined}
     */ this.targetCenter_ = null;
        /**
     * @private
     * @type {number|undefined}
     */ this.targetResolution_;
        /**
     * @private
     * @type {number|undefined}
     */ this.targetRotation_;
        /**
     * @private
     * @type {import("./coordinate.js").Coordinate}
     */ this.nextCenter_ = null;
        /**
     * @private
     * @type {number}
     */ this.nextResolution_;
        /**
     * @private
     * @type {number}
     */ this.nextRotation_;
        /**
     * @private
     * @type {import("./coordinate.js").Coordinate|undefined}
     */ this.cancelAnchor_ = undefined;
        if (options.projection) (0, $0a1495ed54ce69a9$export$ed949affbc7c4223)();
        if (options.center) options.center = (0, $0a1495ed54ce69a9$export$d4b8ec0b96db1ee2)(options.center, this.projection_);
        if (options.extent) options.extent = (0, $0a1495ed54ce69a9$export$494be3a3a25689ca)(options.extent, this.projection_);
        this.applyOptions_(options);
    }
    /**
   * Set up the view with the given options.
   * @param {ViewOptions} options View options.
   */ applyOptions_(options) {
        const properties = Object.assign({}, options);
        for(const key in 0, $15305c937278209f$export$2e2bcd8739ae039)delete properties[key];
        this.setProperties(properties, true);
        const resolutionConstraintInfo = $82506d42cbd3642d$export$c68d65f9148da196(options);
        /**
     * @private
     * @type {number}
     */ this.maxResolution_ = resolutionConstraintInfo.maxResolution;
        /**
     * @private
     * @type {number}
     */ this.minResolution_ = resolutionConstraintInfo.minResolution;
        /**
     * @private
     * @type {number}
     */ this.zoomFactor_ = resolutionConstraintInfo.zoomFactor;
        /**
     * @private
     * @type {Array<number>|undefined}
     */ this.resolutions_ = options.resolutions;
        /**
     * @type {Array<number>|undefined}
     * @private
     */ this.padding_ = options.padding;
        /**
     * @private
     * @type {number}
     */ this.minZoom_ = resolutionConstraintInfo.minZoom;
        const centerConstraint = $82506d42cbd3642d$export$964345001ee9ac52(options);
        const resolutionConstraint = resolutionConstraintInfo.constraint;
        const rotationConstraint = $82506d42cbd3642d$export$4eeaa08dd550e3c0(options);
        /**
     * @private
     * @type {Constraints}
     */ this.constraints_ = {
            center: centerConstraint,
            resolution: resolutionConstraint,
            rotation: rotationConstraint
        };
        this.setRotation(options.rotation !== undefined ? options.rotation : 0);
        this.setCenterInternal(options.center !== undefined ? options.center : null);
        if (options.resolution !== undefined) this.setResolution(options.resolution);
        else if (options.zoom !== undefined) this.setZoom(options.zoom);
    }
    /**
   * Padding (in css pixels).
   * If the map viewport is partially covered with other content (overlays) along
   * its edges, this setting allows to shift the center of the viewport away from that
   * content. The order of the values in the array is top, right, bottom, left.
   * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
   * @type {Array<number>|undefined}
   * @api
   */ get padding() {
        return this.padding_;
    }
    set padding(padding) {
        let oldPadding = this.padding_;
        this.padding_ = padding;
        const center = this.getCenter();
        if (center) {
            const newPadding = padding || [
                0,
                0,
                0,
                0
            ];
            oldPadding = oldPadding || [
                0,
                0,
                0,
                0
            ];
            const resolution = this.getResolution();
            const offsetX = resolution / 2 * (newPadding[3] - oldPadding[3] + oldPadding[1] - newPadding[1]);
            const offsetY = resolution / 2 * (newPadding[0] - oldPadding[0] + oldPadding[2] - newPadding[2]);
            this.setCenterInternal([
                center[0] + offsetX,
                center[1] - offsetY
            ]);
        }
    }
    /**
   * Get an updated version of the view options used to construct the view.  The
   * current resolution (or zoom), center, and rotation are applied to any stored
   * options.  The provided options can be used to apply new min/max zoom or
   * resolution limits.
   * @param {ViewOptions} newOptions New options to be applied.
   * @return {ViewOptions} New options updated with the current view state.
   */ getUpdatedOptions_(newOptions) {
        const options = this.getProperties();
        // preserve resolution (or zoom)
        if (options.resolution !== undefined) options.resolution = this.getResolution();
        else options.zoom = this.getZoom();
        // preserve center
        options.center = this.getCenterInternal();
        // preserve rotation
        options.rotation = this.getRotation();
        return Object.assign({}, options, newOptions);
    }
    /**
   * Animate the view.  The view's center, zoom (or resolution), and rotation
   * can be animated for smooth transitions between view states.  For example,
   * to animate the view to a new zoom level:
   *
   *     view.animate({zoom: view.getZoom() + 1});
   *
   * By default, the animation lasts one second and uses in-and-out easing.  You
   * can customize this behavior by including `duration` (in milliseconds) and
   * `easing` options (see {@link module:ol/easing}).
   *
   * To chain together multiple animations, call the method with multiple
   * animation objects.  For example, to first zoom and then pan:
   *
   *     view.animate({zoom: 10}, {center: [0, 0]});
   *
   * If you provide a function as the last argument to the animate method, it
   * will get called at the end of an animation series.  The callback will be
   * called with `true` if the animation series completed on its own or `false`
   * if it was cancelled.
   *
   * Animations are cancelled by user interactions (e.g. dragging the map) or by
   * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
   * (or another method that calls one of these).
   *
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
   *     options.  Multiple animations can be run in series by passing multiple
   *     options objects.  To run multiple animations in parallel, call the method
   *     multiple times.  An optional callback can be provided as a final
   *     argument.  The callback will be called with a boolean indicating whether
   *     the animation completed without being cancelled.
   * @api
   */ animate(var_args) {
        if (this.isDef() && !this.getAnimating()) this.resolveConstraints(0);
        const args = new Array(arguments.length);
        for(let i = 0; i < args.length; ++i){
            let options = arguments[i];
            if (options.center) {
                options = Object.assign({}, options);
                options.center = (0, $0a1495ed54ce69a9$export$d4b8ec0b96db1ee2)(options.center, this.getProjection());
            }
            if (options.anchor) {
                options = Object.assign({}, options);
                options.anchor = (0, $0a1495ed54ce69a9$export$d4b8ec0b96db1ee2)(options.anchor, this.getProjection());
            }
            args[i] = options;
        }
        this.animateInternal.apply(this, args);
    }
    /**
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
   */ animateInternal(var_args) {
        let animationCount = arguments.length;
        let callback;
        if (animationCount > 1 && typeof arguments[animationCount - 1] === "function") {
            callback = arguments[animationCount - 1];
            --animationCount;
        }
        let i = 0;
        for(; i < animationCount && !this.isDef(); ++i){
            // if view properties are not yet set, shortcut to the final state
            const state = arguments[i];
            if (state.center) this.setCenterInternal(state.center);
            if (state.zoom !== undefined) this.setZoom(state.zoom);
            else if (state.resolution) this.setResolution(state.resolution);
            if (state.rotation !== undefined) this.setRotation(state.rotation);
        }
        if (i === animationCount) {
            if (callback) $82506d42cbd3642d$var$animationCallback(callback, true);
            return;
        }
        let start = Date.now();
        let center = this.targetCenter_.slice();
        let resolution = this.targetResolution_;
        let rotation = this.targetRotation_;
        const series = [];
        for(; i < animationCount; ++i){
            const options = arguments[i];
            const animation = {
                start: start,
                complete: false,
                anchor: options.anchor,
                duration: options.duration !== undefined ? options.duration : 1000,
                easing: options.easing || (0, $a827aa90539b5df5$export$9b47139b511b56e4),
                callback: callback
            };
            if (options.center) {
                animation.sourceCenter = center;
                animation.targetCenter = options.center.slice();
                center = animation.targetCenter;
            }
            if (options.zoom !== undefined) {
                animation.sourceResolution = resolution;
                animation.targetResolution = this.getResolutionForZoom(options.zoom);
                resolution = animation.targetResolution;
            } else if (options.resolution) {
                animation.sourceResolution = resolution;
                animation.targetResolution = options.resolution;
                resolution = animation.targetResolution;
            }
            if (options.rotation !== undefined) {
                animation.sourceRotation = rotation;
                const delta = (0, $906cd1f2aa644a1d$export$ba467bec01d66def)(options.rotation - rotation + Math.PI, 2 * Math.PI) - Math.PI;
                animation.targetRotation = rotation + delta;
                rotation = animation.targetRotation;
            }
            // check if animation is a no-op
            if ($82506d42cbd3642d$export$ee75376562060184(animation)) animation.complete = true;
            else start += animation.duration;
            series.push(animation);
        }
        this.animations_.push(series);
        this.setHint((0, $15e38d2d645d76ee$export$2e2bcd8739ae039).ANIMATING, 1);
        this.updateAnimations_();
    }
    /**
   * Determine if the view is being animated.
   * @return {boolean} The view is being animated.
   * @api
   */ getAnimating() {
        return this.hints_[(0, $15e38d2d645d76ee$export$2e2bcd8739ae039).ANIMATING] > 0;
    }
    /**
   * Determine if the user is interacting with the view, such as panning or zooming.
   * @return {boolean} The view is being interacted with.
   * @api
   */ getInteracting() {
        return this.hints_[(0, $15e38d2d645d76ee$export$2e2bcd8739ae039).INTERACTING] > 0;
    }
    /**
   * Cancel any ongoing animations.
   * @api
   */ cancelAnimations() {
        this.setHint((0, $15e38d2d645d76ee$export$2e2bcd8739ae039).ANIMATING, -this.hints_[(0, $15e38d2d645d76ee$export$2e2bcd8739ae039).ANIMATING]);
        let anchor;
        for(let i = 0, ii = this.animations_.length; i < ii; ++i){
            const series = this.animations_[i];
            if (series[0].callback) $82506d42cbd3642d$var$animationCallback(series[0].callback, false);
            if (!anchor) for(let j = 0, jj = series.length; j < jj; ++j){
                const animation = series[j];
                if (!animation.complete) {
                    anchor = animation.anchor;
                    break;
                }
            }
        }
        this.animations_.length = 0;
        this.cancelAnchor_ = anchor;
        this.nextCenter_ = null;
        this.nextResolution_ = NaN;
        this.nextRotation_ = NaN;
    }
    /**
   * Update all animations.
   */ updateAnimations_() {
        if (this.updateAnimationKey_ !== undefined) {
            cancelAnimationFrame(this.updateAnimationKey_);
            this.updateAnimationKey_ = undefined;
        }
        if (!this.getAnimating()) return;
        const now = Date.now();
        let more = false;
        for(let i = this.animations_.length - 1; i >= 0; --i){
            const series = this.animations_[i];
            let seriesComplete = true;
            for(let j = 0, jj = series.length; j < jj; ++j){
                const animation = series[j];
                if (animation.complete) continue;
                const elapsed = now - animation.start;
                let fraction = animation.duration > 0 ? elapsed / animation.duration : 1;
                if (fraction >= 1) {
                    animation.complete = true;
                    fraction = 1;
                } else seriesComplete = false;
                const progress = animation.easing(fraction);
                if (animation.sourceCenter) {
                    const x0 = animation.sourceCenter[0];
                    const y0 = animation.sourceCenter[1];
                    const x1 = animation.targetCenter[0];
                    const y1 = animation.targetCenter[1];
                    this.nextCenter_ = animation.targetCenter;
                    const x = x0 + progress * (x1 - x0);
                    const y = y0 + progress * (y1 - y0);
                    this.targetCenter_ = [
                        x,
                        y
                    ];
                }
                if (animation.sourceResolution && animation.targetResolution) {
                    const resolution = progress === 1 ? animation.targetResolution : animation.sourceResolution + progress * (animation.targetResolution - animation.sourceResolution);
                    if (animation.anchor) {
                        const size = this.getViewportSize_(this.getRotation());
                        const constrainedResolution = this.constraints_.resolution(resolution, 0, size, true);
                        this.targetCenter_ = this.calculateCenterZoom(constrainedResolution, animation.anchor);
                    }
                    this.nextResolution_ = animation.targetResolution;
                    this.targetResolution_ = resolution;
                    this.applyTargetState_(true);
                }
                if (animation.sourceRotation !== undefined && animation.targetRotation !== undefined) {
                    const rotation = progress === 1 ? (0, $906cd1f2aa644a1d$export$ba467bec01d66def)(animation.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : animation.sourceRotation + progress * (animation.targetRotation - animation.sourceRotation);
                    if (animation.anchor) {
                        const constrainedRotation = this.constraints_.rotation(rotation, true);
                        this.targetCenter_ = this.calculateCenterRotate(constrainedRotation, animation.anchor);
                    }
                    this.nextRotation_ = animation.targetRotation;
                    this.targetRotation_ = rotation;
                }
                this.applyTargetState_(true);
                more = true;
                if (!animation.complete) break;
            }
            if (seriesComplete) {
                this.animations_[i] = null;
                this.setHint((0, $15e38d2d645d76ee$export$2e2bcd8739ae039).ANIMATING, -1);
                this.nextCenter_ = null;
                this.nextResolution_ = NaN;
                this.nextRotation_ = NaN;
                const callback = series[0].callback;
                if (callback) $82506d42cbd3642d$var$animationCallback(callback, true);
            }
        }
        // prune completed series
        this.animations_ = this.animations_.filter(Boolean);
        if (more && this.updateAnimationKey_ === undefined) this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this));
    }
    /**
   * @param {number} rotation Target rotation.
   * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
   */ calculateCenterRotate(rotation, anchor) {
        let center;
        const currentCenter = this.getCenterInternal();
        if (currentCenter !== undefined) {
            center = [
                currentCenter[0] - anchor[0],
                currentCenter[1] - anchor[1]
            ];
            (0, $8b3868383cdaeca1$export$bb628a54ab399bc9)(center, rotation - this.getRotation());
            (0, $8b3868383cdaeca1$export$e16d8520af44a096)(center, anchor);
        }
        return center;
    }
    /**
   * @param {number} resolution Target resolution.
   * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
   */ calculateCenterZoom(resolution, anchor) {
        let center;
        const currentCenter = this.getCenterInternal();
        const currentResolution = this.getResolution();
        if (currentCenter !== undefined && currentResolution !== undefined) {
            const x = anchor[0] - resolution * (anchor[0] - currentCenter[0]) / currentResolution;
            const y = anchor[1] - resolution * (anchor[1] - currentCenter[1]) / currentResolution;
            center = [
                x,
                y
            ];
        }
        return center;
    }
    /**
   * Returns the current viewport size.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
   */ getViewportSize_(rotation) {
        const size = this.viewportSize_;
        if (rotation) {
            const w = size[0];
            const h = size[1];
            return [
                Math.abs(w * Math.cos(rotation)) + Math.abs(h * Math.sin(rotation)),
                Math.abs(w * Math.sin(rotation)) + Math.abs(h * Math.cos(rotation)), 
            ];
        } else return size;
    }
    /**
   * Stores the viewport size on the view. The viewport size is not read every time from the DOM
   * to avoid performance hit and layout reflow.
   * This should be done on map size change.
   * Note: the constraints are not resolved during an animation to avoid stopping it
   * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
   */ setViewportSize(size) {
        this.viewportSize_ = Array.isArray(size) ? size.slice() : [
            100,
            100
        ];
        if (!this.getAnimating()) this.resolveConstraints(0);
    }
    /**
   * Get the view center.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   * @observable
   * @api
   */ getCenter() {
        const center = this.getCenterInternal();
        if (!center) return center;
        return (0, $0a1495ed54ce69a9$export$698f563af1ba02a5)(center, this.getProjection());
    }
    /**
   * Get the view center without transforming to user projection.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   */ getCenterInternal() {
        return /** @type {import("./coordinate.js").Coordinate|undefined} */ this.get((0, $15305c937278209f$export$2e2bcd8739ae039).CENTER);
    }
    /**
   * @return {Constraints} Constraints.
   */ getConstraints() {
        return this.constraints_;
    }
    /**
   * @return {boolean} Resolution constraint is set
   */ getConstrainResolution() {
        return this.get("constrainResolution");
    }
    /**
   * @param {Array<number>} [hints] Destination array.
   * @return {Array<number>} Hint.
   */ getHints(hints) {
        if (hints !== undefined) {
            hints[0] = this.hints_[0];
            hints[1] = this.hints_[1];
            return hints;
        } else return this.hints_.slice();
    }
    /**
   * Calculate the extent for the current view state and the passed size.
   * The size is the pixel dimensions of the box into which the calculated extent
   * should fit. In most cases you want to get the extent of the entire map,
   * that is `map.getSize()`.
   * @param {import("./size.js").Size} [size] Box pixel size. If not provided, the size
   * of the map that uses this view will be used.
   * @return {import("./extent.js").Extent} Extent.
   * @api
   */ calculateExtent(size) {
        const extent = this.calculateExtentInternal(size);
        return (0, $0a1495ed54ce69a9$export$96bfd09e2cffb006)(extent, this.getProjection());
    }
    /**
   * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
   * the map's last known viewport size will be used.
   * @return {import("./extent.js").Extent} Extent.
   */ calculateExtentInternal(size) {
        size = size || this.getViewportSizeMinusPadding_();
        const center = /** @type {!import("./coordinate.js").Coordinate} */ this.getCenterInternal();
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(center, 1); // The view center is not defined
        const resolution = /** @type {!number} */ this.getResolution();
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(resolution !== undefined, 2); // The view resolution is not defined
        const rotation = /** @type {!number} */ this.getRotation();
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(rotation !== undefined, 3); // The view rotation is not defined
        return (0, $ee16b51bb9f86500$export$13ba650faf8308)(center, resolution, rotation, size);
    }
    /**
   * Get the maximum resolution of the view.
   * @return {number} The maximum resolution of the view.
   * @api
   */ getMaxResolution() {
        return this.maxResolution_;
    }
    /**
   * Get the minimum resolution of the view.
   * @return {number} The minimum resolution of the view.
   * @api
   */ getMinResolution() {
        return this.minResolution_;
    }
    /**
   * Get the maximum zoom level for the view.
   * @return {number} The maximum zoom level.
   * @api
   */ getMaxZoom() {
        return /** @type {number} */ this.getZoomForResolution(this.minResolution_);
    }
    /**
   * Set a new maximum zoom level for the view.
   * @param {number} zoom The maximum zoom level.
   * @api
   */ setMaxZoom(zoom) {
        this.applyOptions_(this.getUpdatedOptions_({
            maxZoom: zoom
        }));
    }
    /**
   * Get the minimum zoom level for the view.
   * @return {number} The minimum zoom level.
   * @api
   */ getMinZoom() {
        return /** @type {number} */ this.getZoomForResolution(this.maxResolution_);
    }
    /**
   * Set a new minimum zoom level for the view.
   * @param {number} zoom The minimum zoom level.
   * @api
   */ setMinZoom(zoom) {
        this.applyOptions_(this.getUpdatedOptions_({
            minZoom: zoom
        }));
    }
    /**
   * Set whether the view should allow intermediary zoom levels.
   * @param {boolean} enabled Whether the resolution is constrained.
   * @api
   */ setConstrainResolution(enabled) {
        this.applyOptions_(this.getUpdatedOptions_({
            constrainResolution: enabled
        }));
    }
    /**
   * Get the view projection.
   * @return {import("./proj/Projection.js").default} The projection of the view.
   * @api
   */ getProjection() {
        return this.projection_;
    }
    /**
   * Get the view resolution.
   * @return {number|undefined} The resolution of the view.
   * @observable
   * @api
   */ getResolution() {
        return /** @type {number|undefined} */ this.get((0, $15305c937278209f$export$2e2bcd8739ae039).RESOLUTION);
    }
    /**
   * Get the resolutions for the view. This returns the array of resolutions
   * passed to the constructor of the View, or undefined if none were given.
   * @return {Array<number>|undefined} The resolutions of the view.
   * @api
   */ getResolutions() {
        return this.resolutions_;
    }
    /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   * @api
   */ getResolutionForExtent(extent, size) {
        return this.getResolutionForExtentInternal((0, $0a1495ed54ce69a9$export$494be3a3a25689ca)(extent, this.getProjection()), size);
    }
    /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   */ getResolutionForExtentInternal(extent, size) {
        size = size || this.getViewportSizeMinusPadding_();
        const xResolution = (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(extent) / size[0];
        const yResolution = (0, $ee16b51bb9f86500$export$c08559766941f856)(extent) / size[1];
        return Math.max(xResolution, yResolution);
    }
    /**
   * Return a function that returns a value between 0 and 1 for a
   * resolution. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Resolution for value function.
   */ getResolutionForValueFunction(power) {
        power = power || 2;
        const maxResolution = this.getConstrainedResolution(this.maxResolution_);
        const minResolution = this.minResolution_;
        const max = Math.log(maxResolution / minResolution) / Math.log(power);
        return(/**
       * @param {number} value Value.
       * @return {number} Resolution.
       */ function(value) {
            const resolution = maxResolution / Math.pow(power, value * max);
            return resolution;
        });
    }
    /**
   * Get the view rotation.
   * @return {number} The rotation of the view in radians.
   * @observable
   * @api
   */ getRotation() {
        return /** @type {number} */ this.get((0, $15305c937278209f$export$2e2bcd8739ae039).ROTATION);
    }
    /**
   * Return a function that returns a resolution for a value between
   * 0 and 1. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Value for resolution function.
   */ getValueForResolutionFunction(power) {
        const logPower = Math.log(power || 2);
        const maxResolution = this.getConstrainedResolution(this.maxResolution_);
        const minResolution = this.minResolution_;
        const max = Math.log(maxResolution / minResolution) / logPower;
        return(/**
       * @param {number} resolution Resolution.
       * @return {number} Value.
       */ function(resolution) {
            const value = Math.log(maxResolution / resolution) / logPower / max;
            return value;
        });
    }
    /**
   * Returns the size of the viewport minus padding.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size reduced by the padding.
   */ getViewportSizeMinusPadding_(rotation) {
        let size = this.getViewportSize_(rotation);
        const padding = this.padding_;
        if (padding) size = [
            size[0] - padding[1] - padding[3],
            size[1] - padding[0] - padding[2], 
        ];
        return size;
    }
    /**
   * @return {State} View state.
   */ getState() {
        const projection = this.getProjection();
        const resolution = this.getResolution();
        const rotation = this.getRotation();
        let center = /** @type {import("./coordinate.js").Coordinate} */ this.getCenterInternal();
        const padding = this.padding_;
        if (padding) {
            const reducedSize = this.getViewportSizeMinusPadding_();
            center = $82506d42cbd3642d$var$calculateCenterOn(center, this.getViewportSize_(), [
                reducedSize[0] / 2 + padding[3],
                reducedSize[1] / 2 + padding[0]
            ], resolution, rotation);
        }
        return {
            center: center.slice(0),
            projection: projection !== undefined ? projection : null,
            resolution: resolution,
            nextCenter: this.nextCenter_,
            nextResolution: this.nextResolution_,
            nextRotation: this.nextRotation_,
            rotation: rotation,
            zoom: this.getZoom()
        };
    }
    /**
   * Get the current zoom level. This method may return non-integer zoom levels
   * if the view does not constrain the resolution, or if an interaction or
   * animation is underway.
   * @return {number|undefined} Zoom.
   * @api
   */ getZoom() {
        let zoom;
        const resolution = this.getResolution();
        if (resolution !== undefined) zoom = this.getZoomForResolution(resolution);
        return zoom;
    }
    /**
   * Get the zoom level for a resolution.
   * @param {number} resolution The resolution.
   * @return {number|undefined} The zoom level for the provided resolution.
   * @api
   */ getZoomForResolution(resolution) {
        let offset = this.minZoom_ || 0;
        let max, zoomFactor;
        if (this.resolutions_) {
            const nearest = (0, $eea510364582e5fa$export$8a3786cc03fdb777)(this.resolutions_, resolution, 1);
            offset = nearest;
            max = this.resolutions_[nearest];
            if (nearest == this.resolutions_.length - 1) zoomFactor = 2;
            else zoomFactor = max / this.resolutions_[nearest + 1];
        } else {
            max = this.maxResolution_;
            zoomFactor = this.zoomFactor_;
        }
        return offset + Math.log(max / resolution) / Math.log(zoomFactor);
    }
    /**
   * Get the resolution for a zoom level.
   * @param {number} zoom Zoom level.
   * @return {number} The view resolution for the provided zoom level.
   * @api
   */ getResolutionForZoom(zoom) {
        if (this.resolutions_) {
            if (this.resolutions_.length <= 1) return 0;
            const baseLevel = (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(Math.floor(zoom), 0, this.resolutions_.length - 2);
            const zoomFactor = this.resolutions_[baseLevel] / this.resolutions_[baseLevel + 1];
            return this.resolutions_[baseLevel] / Math.pow(zoomFactor, (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(zoom - baseLevel, 0, 1));
        } else return this.maxResolution_ / Math.pow(this.zoomFactor_, zoom - this.minZoom_);
    }
    /**
   * Fit the given geometry or extent based on the given map size and border.
   * The size is pixel dimensions of the box to fit the extent into.
   * In most cases you will want to use the map size, that is `map.getSize()`.
   * Takes care of the map angle.
   * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
   *     extent to fit the view to.
   * @param {FitOptions} [options] Options.
   * @api
   */ fit(geometryOrExtent, options) {
        /** @type {import("./geom/SimpleGeometry.js").default} */ let geometry;
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(Array.isArray(geometryOrExtent) || typeof /** @type {?} */ geometryOrExtent.getSimplifiedGeometry === "function", 24); // Invalid extent or geometry provided as `geometry`
        if (Array.isArray(geometryOrExtent)) {
            (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(!(0, $ee16b51bb9f86500$export$dd1bc94b04021eeb)(geometryOrExtent), 25); // Cannot fit empty extent provided as `geometry`
            const extent = (0, $0a1495ed54ce69a9$export$494be3a3a25689ca)(geometryOrExtent, this.getProjection());
            geometry = (0, $07899719e245857b$export$c16b671815801c75)(extent);
        } else if (geometryOrExtent.getType() === "Circle") {
            const extent1 = (0, $0a1495ed54ce69a9$export$494be3a3a25689ca)(geometryOrExtent.getExtent(), this.getProjection());
            geometry = (0, $07899719e245857b$export$c16b671815801c75)(extent1);
            geometry.rotate(this.getRotation(), (0, $ee16b51bb9f86500$export$c91255cadecfe081)(extent1));
        } else {
            const userProjection = (0, $0a1495ed54ce69a9$export$3973b77d5f6f2790)();
            if (userProjection) geometry = /** @type {import("./geom/SimpleGeometry.js").default} */ geometryOrExtent.clone().transform(userProjection, this.getProjection());
            else geometry = geometryOrExtent;
        }
        this.fitInternal(geometry, options);
    }
    /**
   * Calculate rotated extent
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @return {import("./extent").Extent} The rotated extent for the geometry.
   */ rotatedExtentForGeometry(geometry) {
        const rotation = this.getRotation();
        const cosAngle = Math.cos(rotation);
        const sinAngle = Math.sin(-rotation);
        const coords = geometry.getFlatCoordinates();
        const stride = geometry.getStride();
        let minRotX = Infinity;
        let minRotY = Infinity;
        let maxRotX = -Infinity;
        let maxRotY = -Infinity;
        for(let i = 0, ii = coords.length; i < ii; i += stride){
            const rotX = coords[i] * cosAngle - coords[i + 1] * sinAngle;
            const rotY = coords[i] * sinAngle + coords[i + 1] * cosAngle;
            minRotX = Math.min(minRotX, rotX);
            minRotY = Math.min(minRotY, rotY);
            maxRotX = Math.max(maxRotX, rotX);
            maxRotY = Math.max(maxRotY, rotY);
        }
        return [
            minRotX,
            minRotY,
            maxRotX,
            maxRotY
        ];
    }
    /**
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @param {FitOptions} [options] Options.
   */ fitInternal(geometry, options) {
        options = options || {};
        let size = options.size;
        if (!size) size = this.getViewportSizeMinusPadding_();
        const padding = options.padding !== undefined ? options.padding : [
            0,
            0,
            0,
            0
        ];
        const nearest = options.nearest !== undefined ? options.nearest : false;
        let minResolution;
        if (options.minResolution !== undefined) minResolution = options.minResolution;
        else if (options.maxZoom !== undefined) minResolution = this.getResolutionForZoom(options.maxZoom);
        else minResolution = 0;
        const rotatedExtent = this.rotatedExtentForGeometry(geometry);
        // calculate resolution
        let resolution = this.getResolutionForExtentInternal(rotatedExtent, [
            size[0] - padding[1] - padding[3],
            size[1] - padding[0] - padding[2], 
        ]);
        resolution = isNaN(resolution) ? minResolution : Math.max(resolution, minResolution);
        resolution = this.getConstrainedResolution(resolution, nearest ? 0 : 1);
        // calculate center
        const rotation = this.getRotation();
        const sinAngle = Math.sin(rotation);
        const cosAngle = Math.cos(rotation);
        const centerRot = (0, $ee16b51bb9f86500$export$c91255cadecfe081)(rotatedExtent);
        centerRot[0] += (padding[1] - padding[3]) / 2 * resolution;
        centerRot[1] += (padding[0] - padding[2]) / 2 * resolution;
        const centerX = centerRot[0] * cosAngle - centerRot[1] * sinAngle;
        const centerY = centerRot[1] * cosAngle + centerRot[0] * sinAngle;
        const center = this.getConstrainedCenter([
            centerX,
            centerY
        ], resolution);
        const callback = options.callback ? options.callback : (0, $f2508d0c199eb098$export$1cd1943b3a73bbe8);
        if (options.duration !== undefined) this.animateInternal({
            resolution: resolution,
            center: center,
            duration: options.duration,
            easing: options.easing
        }, callback);
        else {
            this.targetResolution_ = resolution;
            this.targetCenter_ = center;
            this.applyTargetState_(false, true);
            $82506d42cbd3642d$var$animationCallback(callback, true);
        }
    }
    /**
   * Center on coordinate and view position.
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   * @api
   */ centerOn(coordinate, size, position) {
        this.centerOnInternal((0, $0a1495ed54ce69a9$export$d4b8ec0b96db1ee2)(coordinate, this.getProjection()), size, position);
    }
    /**
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   */ centerOnInternal(coordinate, size, position) {
        this.setCenterInternal($82506d42cbd3642d$var$calculateCenterOn(coordinate, size, position, this.getResolution(), this.getRotation()));
    }
    /**
   * Calculates the shift between map and viewport center.
   * @param {import("./coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {import("./size.js").Size} size Size.
   * @return {Array<number>|undefined} Center shift.
   */ calculateCenterShift(center, resolution, rotation, size) {
        let centerShift;
        const padding = this.padding_;
        if (padding && center) {
            const reducedSize = this.getViewportSizeMinusPadding_(-rotation);
            const shiftedCenter = $82506d42cbd3642d$var$calculateCenterOn(center, size, [
                reducedSize[0] / 2 + padding[3],
                reducedSize[1] / 2 + padding[0]
            ], resolution, rotation);
            centerShift = [
                center[0] - shiftedCenter[0],
                center[1] - shiftedCenter[1], 
            ];
        }
        return centerShift;
    }
    /**
   * @return {boolean} Is defined.
   */ isDef() {
        return !!this.getCenterInternal() && this.getResolution() !== undefined;
    }
    /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   * @api
   */ adjustCenter(deltaCoordinates) {
        const center = (0, $0a1495ed54ce69a9$export$698f563af1ba02a5)(this.targetCenter_, this.getProjection());
        this.setCenter([
            center[0] + deltaCoordinates[0],
            center[1] + deltaCoordinates[1], 
        ]);
    }
    /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   */ adjustCenterInternal(deltaCoordinates) {
        const center = this.targetCenter_;
        this.setCenterInternal([
            center[0] + deltaCoordinates[0],
            center[1] + deltaCoordinates[1], 
        ]);
    }
    /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */ adjustResolution(ratio, anchor) {
        anchor = anchor && (0, $0a1495ed54ce69a9$export$d4b8ec0b96db1ee2)(anchor, this.getProjection());
        this.adjustResolutionInternal(ratio, anchor);
    }
    /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */ adjustResolutionInternal(ratio, anchor) {
        const isMoving = this.getAnimating() || this.getInteracting();
        const size = this.getViewportSize_(this.getRotation());
        const newResolution = this.constraints_.resolution(this.targetResolution_ * ratio, 0, size, isMoving);
        if (anchor) this.targetCenter_ = this.calculateCenterZoom(newResolution, anchor);
        this.targetResolution_ *= ratio;
        this.applyTargetState_();
    }
    /**
   * Adds a value to the view zoom level, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom level.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */ adjustZoom(delta, anchor) {
        this.adjustResolution(Math.pow(this.zoomFactor_, -delta), anchor);
    }
    /**
   * Adds a value to the view rotation, optionally using an anchor. Any rotation
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   * @api
   */ adjustRotation(delta, anchor) {
        if (anchor) anchor = (0, $0a1495ed54ce69a9$export$d4b8ec0b96db1ee2)(anchor, this.getProjection());
        this.adjustRotationInternal(delta, anchor);
    }
    /**
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   */ adjustRotationInternal(delta, anchor) {
        const isMoving = this.getAnimating() || this.getInteracting();
        const newRotation = this.constraints_.rotation(this.targetRotation_ + delta, isMoving);
        if (anchor) this.targetCenter_ = this.calculateCenterRotate(newRotation, anchor);
        this.targetRotation_ += delta;
        this.applyTargetState_();
    }
    /**
   * Set the center of the current view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   * @observable
   * @api
   */ setCenter(center) {
        this.setCenterInternal(center ? (0, $0a1495ed54ce69a9$export$d4b8ec0b96db1ee2)(center, this.getProjection()) : center);
    }
    /**
   * Set the center using the view projection (not the user projection).
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   */ setCenterInternal(center) {
        this.targetCenter_ = center;
        this.applyTargetState_();
    }
    /**
   * @param {import("./ViewHint.js").default} hint Hint.
   * @param {number} delta Delta.
   * @return {number} New value.
   */ setHint(hint, delta) {
        this.hints_[hint] += delta;
        this.changed();
        return this.hints_[hint];
    }
    /**
   * Set the resolution for this view. Any resolution constraint will apply.
   * @param {number|undefined} resolution The resolution of the view.
   * @observable
   * @api
   */ setResolution(resolution) {
        this.targetResolution_ = resolution;
        this.applyTargetState_();
    }
    /**
   * Set the rotation for this view. Any rotation constraint will apply.
   * @param {number} rotation The rotation of the view in radians.
   * @observable
   * @api
   */ setRotation(rotation) {
        this.targetRotation_ = rotation;
        this.applyTargetState_();
    }
    /**
   * Zoom to a specific zoom level. Any resolution constrain will apply.
   * @param {number} zoom Zoom level.
   * @api
   */ setZoom(zoom) {
        this.setResolution(this.getResolutionForZoom(zoom));
    }
    /**
   * Recompute rotation/resolution/center based on target values.
   * Note: we have to compute rotation first, then resolution and center considering that
   * parameters can influence one another in case a view extent constraint is present.
   * @param {boolean} [doNotCancelAnims] Do not cancel animations.
   * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
   * @private
   */ applyTargetState_(doNotCancelAnims, forceMoving) {
        const isMoving = this.getAnimating() || this.getInteracting() || forceMoving;
        // compute rotation
        const newRotation = this.constraints_.rotation(this.targetRotation_, isMoving);
        const size = this.getViewportSize_(newRotation);
        const newResolution = this.constraints_.resolution(this.targetResolution_, 0, size, isMoving);
        const newCenter = this.constraints_.center(this.targetCenter_, newResolution, size, isMoving, this.calculateCenterShift(this.targetCenter_, newResolution, newRotation, size));
        if (this.get((0, $15305c937278209f$export$2e2bcd8739ae039).ROTATION) !== newRotation) this.set((0, $15305c937278209f$export$2e2bcd8739ae039).ROTATION, newRotation);
        if (this.get((0, $15305c937278209f$export$2e2bcd8739ae039).RESOLUTION) !== newResolution) {
            this.set((0, $15305c937278209f$export$2e2bcd8739ae039).RESOLUTION, newResolution);
            this.set("zoom", this.getZoom(), true);
        }
        if (!newCenter || !this.get((0, $15305c937278209f$export$2e2bcd8739ae039).CENTER) || !(0, $8b3868383cdaeca1$export$e9bab7fafb253603)(this.get((0, $15305c937278209f$export$2e2bcd8739ae039).CENTER), newCenter)) this.set((0, $15305c937278209f$export$2e2bcd8739ae039).CENTER, newCenter);
        if (this.getAnimating() && !doNotCancelAnims) this.cancelAnimations();
        this.cancelAnchor_ = undefined;
    }
    /**
   * If any constraints need to be applied, an animation will be triggered.
   * This is typically done on interaction end.
   * Note: calling this with a duration of 0 will apply the constrained values straight away,
   * without animation.
   * @param {number} [duration] The animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */ resolveConstraints(duration, resolutionDirection, anchor) {
        duration = duration !== undefined ? duration : 200;
        const direction = resolutionDirection || 0;
        const newRotation = this.constraints_.rotation(this.targetRotation_);
        const size = this.getViewportSize_(newRotation);
        const newResolution = this.constraints_.resolution(this.targetResolution_, direction, size);
        const newCenter = this.constraints_.center(this.targetCenter_, newResolution, size, false, this.calculateCenterShift(this.targetCenter_, newResolution, newRotation, size));
        if (duration === 0 && !this.cancelAnchor_) {
            this.targetResolution_ = newResolution;
            this.targetRotation_ = newRotation;
            this.targetCenter_ = newCenter;
            this.applyTargetState_();
            return;
        }
        anchor = anchor || (duration === 0 ? this.cancelAnchor_ : undefined);
        this.cancelAnchor_ = undefined;
        if (this.getResolution() !== newResolution || this.getRotation() !== newRotation || !this.getCenterInternal() || !(0, $8b3868383cdaeca1$export$e9bab7fafb253603)(this.getCenterInternal(), newCenter)) {
            if (this.getAnimating()) this.cancelAnimations();
            this.animateInternal({
                rotation: newRotation,
                center: newCenter,
                resolution: newResolution,
                duration: duration,
                easing: (0, $a827aa90539b5df5$export$57636bb43b1ccbb0),
                anchor: anchor
            });
        }
    }
    /**
   * Notify the View that an interaction has started.
   * The view state will be resolved to a stable one if needed
   * (depending on its constraints).
   * @api
   */ beginInteraction() {
        this.resolveConstraints(0);
        this.setHint((0, $15e38d2d645d76ee$export$2e2bcd8739ae039).INTERACTING, 1);
    }
    /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */ endInteraction(duration, resolutionDirection, anchor) {
        anchor = anchor && (0, $0a1495ed54ce69a9$export$d4b8ec0b96db1ee2)(anchor, this.getProjection());
        this.endInteractionInternal(duration, resolutionDirection, anchor);
    }
    /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */ endInteractionInternal(duration, resolutionDirection, anchor) {
        this.setHint((0, $15e38d2d645d76ee$export$2e2bcd8739ae039).INTERACTING, -1);
        this.resolveConstraints(duration, resolutionDirection, anchor);
    }
    /**
   * Get a valid position for the view center according to the current constraints.
   * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
   * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
   * This is useful to guess a valid center position at a different zoom level.
   * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
   */ getConstrainedCenter(targetCenter, targetResolution) {
        const size = this.getViewportSize_(this.getRotation());
        return this.constraints_.center(targetCenter, targetResolution || this.getResolution(), size);
    }
    /**
   * Get a valid zoom level according to the current view constraints.
   * @param {number|undefined} targetZoom Target zoom.
   * @param {number} [direction=0] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid zoom level.
   */ getConstrainedZoom(targetZoom, direction) {
        const targetRes = this.getResolutionForZoom(targetZoom);
        return this.getZoomForResolution(this.getConstrainedResolution(targetRes, direction));
    }
    /**
   * Get a valid resolution according to the current view constraints.
   * @param {number|undefined} targetResolution Target resolution.
   * @param {number} [direction=0] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid resolution.
   */ getConstrainedResolution(targetResolution, direction) {
        direction = direction || 0;
        const size = this.getViewportSize_(this.getRotation());
        return this.constraints_.resolution(targetResolution, direction, size);
    }
}
/**
 * @param {Function} callback Callback.
 * @param {*} returnValue Return value.
 */ function $82506d42cbd3642d$var$animationCallback(callback, returnValue) {
    setTimeout(function() {
        callback(returnValue);
    }, 0);
}
function $82506d42cbd3642d$export$964345001ee9ac52(options) {
    if (options.extent !== undefined) {
        const smooth = options.smoothExtentConstraint !== undefined ? options.smoothExtentConstraint : true;
        return (0, $5b14dadbdf2c85a1$export$c2f0af2c946f6897)(options.extent, options.constrainOnlyCenter, smooth);
    }
    const projection = (0, $0a1495ed54ce69a9$export$549167224996a0fb)(options.projection, "EPSG:3857");
    if (options.multiWorld !== true && projection.isGlobal()) {
        const extent = projection.getExtent().slice();
        extent[0] = -Infinity;
        extent[2] = Infinity;
        return (0, $5b14dadbdf2c85a1$export$c2f0af2c946f6897)(extent, false, false);
    }
    return 0, $5b14dadbdf2c85a1$export$f883a24d5edde77c;
}
function $82506d42cbd3642d$export$c68d65f9148da196(options) {
    let resolutionConstraint;
    let maxResolution;
    let minResolution;
    // TODO: move these to be ol constants
    // see https://github.com/openlayers/openlayers/issues/2076
    const defaultMaxZoom = 28;
    const defaultZoomFactor = 2;
    let minZoom = options.minZoom !== undefined ? options.minZoom : $82506d42cbd3642d$var$DEFAULT_MIN_ZOOM;
    let maxZoom = options.maxZoom !== undefined ? options.maxZoom : defaultMaxZoom;
    const zoomFactor = options.zoomFactor !== undefined ? options.zoomFactor : defaultZoomFactor;
    const multiWorld = options.multiWorld !== undefined ? options.multiWorld : false;
    const smooth = options.smoothResolutionConstraint !== undefined ? options.smoothResolutionConstraint : true;
    const showFullExtent = options.showFullExtent !== undefined ? options.showFullExtent : false;
    const projection = (0, $0a1495ed54ce69a9$export$549167224996a0fb)(options.projection, "EPSG:3857");
    const projExtent = projection.getExtent();
    let constrainOnlyCenter = options.constrainOnlyCenter;
    let extent = options.extent;
    if (!multiWorld && !extent && projection.isGlobal()) {
        constrainOnlyCenter = false;
        extent = projExtent;
    }
    if (options.resolutions !== undefined) {
        const resolutions = options.resolutions;
        maxResolution = resolutions[minZoom];
        minResolution = resolutions[maxZoom] !== undefined ? resolutions[maxZoom] : resolutions[resolutions.length - 1];
        if (options.constrainResolution) resolutionConstraint = (0, $72d6dc0e672a3b5f$export$d65a517690fc4385)(resolutions, smooth, !constrainOnlyCenter && extent, showFullExtent);
        else resolutionConstraint = (0, $72d6dc0e672a3b5f$export$1c4e6da9b4b066fe)(maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
    } else {
        // calculate the default min and max resolution
        const size = !projExtent ? 360 * (0, $361aac7b018b3435$export$1482081eec883108).degrees / projection.getMetersPerUnit() : Math.max((0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(projExtent), (0, $ee16b51bb9f86500$export$c08559766941f856)(projExtent));
        const defaultMaxResolution = size / (0, $7833ce234efe8d00$export$6b8cb5cd370bd90c) / Math.pow(defaultZoomFactor, $82506d42cbd3642d$var$DEFAULT_MIN_ZOOM);
        const defaultMinResolution = defaultMaxResolution / Math.pow(defaultZoomFactor, defaultMaxZoom - $82506d42cbd3642d$var$DEFAULT_MIN_ZOOM);
        // user provided maxResolution takes precedence
        maxResolution = options.maxResolution;
        if (maxResolution !== undefined) minZoom = 0;
        else maxResolution = defaultMaxResolution / Math.pow(zoomFactor, minZoom);
        // user provided minResolution takes precedence
        minResolution = options.minResolution;
        if (minResolution === undefined) {
            if (options.maxZoom !== undefined) {
                if (options.maxResolution !== undefined) minResolution = maxResolution / Math.pow(zoomFactor, maxZoom);
                else minResolution = defaultMaxResolution / Math.pow(zoomFactor, maxZoom);
            } else minResolution = defaultMinResolution;
        }
        // given discrete zoom levels, minResolution may be different than provided
        maxZoom = minZoom + Math.floor(Math.log(maxResolution / minResolution) / Math.log(zoomFactor));
        minResolution = maxResolution / Math.pow(zoomFactor, maxZoom - minZoom);
        if (options.constrainResolution) resolutionConstraint = (0, $72d6dc0e672a3b5f$export$22ac0f6b219de91a)(zoomFactor, maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
        else resolutionConstraint = (0, $72d6dc0e672a3b5f$export$1c4e6da9b4b066fe)(maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
    }
    return {
        constraint: resolutionConstraint,
        maxResolution: maxResolution,
        minResolution: minResolution,
        minZoom: minZoom,
        zoomFactor: zoomFactor
    };
}
function $82506d42cbd3642d$export$4eeaa08dd550e3c0(options) {
    const enableRotation = options.enableRotation !== undefined ? options.enableRotation : true;
    if (enableRotation) {
        const constrainRotation = options.constrainRotation;
        if (constrainRotation === undefined || constrainRotation === true) return (0, $9ce71f85bc80f4b2$export$17a6e6f3448b17e8)();
        else if (constrainRotation === false) return 0, $9ce71f85bc80f4b2$export$f883a24d5edde77c;
        else if (typeof constrainRotation === "number") return (0, $9ce71f85bc80f4b2$export$9ba78806de831083)(constrainRotation);
        else return 0, $9ce71f85bc80f4b2$export$f883a24d5edde77c;
    } else return 0, $9ce71f85bc80f4b2$export$e20fbacbb41798b;
}
function $82506d42cbd3642d$export$ee75376562060184(animation) {
    if (animation.sourceCenter && animation.targetCenter) {
        if (!(0, $8b3868383cdaeca1$export$e9bab7fafb253603)(animation.sourceCenter, animation.targetCenter)) return false;
    }
    if (animation.sourceResolution !== animation.targetResolution) return false;
    if (animation.sourceRotation !== animation.targetRotation) return false;
    return true;
}
/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {import("./size.js").Size} size Box pixel size.
 * @param {import("./pixel.js").Pixel} position Position on the view to center on.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @return {import("./coordinate.js").Coordinate} Shifted center.
 */ function $82506d42cbd3642d$var$calculateCenterOn(coordinate, size, position, resolution, rotation) {
    // calculate rotated position
    const cosAngle = Math.cos(-rotation);
    let sinAngle = Math.sin(-rotation);
    let rotX = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    let rotY = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    rotX += (size[0] / 2 - position[0]) * resolution;
    rotY += (position[1] - size[1] / 2) * resolution;
    // go back to original angle
    sinAngle = -sinAngle; // go back to original rotation
    const centerX = rotX * cosAngle - rotY * sinAngle;
    const centerY = rotY * cosAngle + rotX * sinAngle;
    return [
        centerX,
        centerY
    ];
}
var $82506d42cbd3642d$export$2e2bcd8739ae039 = $82506d42cbd3642d$var$View;











var /**
 * @module ol/interaction/Property
 */ /**
 * @enum {string}
 */ $e40f525981e9b20c$export$2e2bcd8739ae039 = {
    ACTIVE: "active"
};



/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types|
 *     'change:active', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
 *     'change:active', Return>} InteractionOnSignature
 */ /**
 * Object literal with config options for interactions.
 * @typedef {Object} InteractionOptions
 * @property {function(import("../MapBrowserEvent.js").default):boolean} handleEvent
 * Method called by the map to notify the interaction that a browser event was
 * dispatched to the map. If the function returns a falsy value, propagation of
 * the event to other interactions in the map's interactions chain will be
 * prevented (this includes functions with no explicit return). The interactions
 * are traversed in reverse order of the interactions collection of the map.
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * User actions that change the state of the map. Some are similar to controls,
 * but are not associated with a DOM element.
 * For example, {@link module:ol/interaction/KeyboardZoom~KeyboardZoom} is
 * functionally the same as {@link module:ol/control/Zoom~Zoom}, but triggered
 * by a keyboard event not a button element event.
 * Although interactions do not have a DOM element, some of them do render
 * vectors and so are visible on the screen.
 * @api
 */ class $5f75fed033b22cca$var$Interaction extends (0, $2fa1993cbde1d34b$export$2e2bcd8739ae039) {
    /**
   * @param {InteractionOptions} [options] Options.
   */ constructor(options){
        super();
        /***
     * @type {InteractionOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {InteractionOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {InteractionOnSignature<void>}
     */ this.un;
        if (options && options.handleEvent) this.handleEvent = options.handleEvent;
        /**
     * @private
     * @type {import("../Map.js").default|null}
     */ this.map_ = null;
        this.setActive(true);
    }
    /**
   * Return whether the interaction is currently active.
   * @return {boolean} `true` if the interaction is active, `false` otherwise.
   * @observable
   * @api
   */ getActive() {
        return /** @type {boolean} */ this.get((0, $e40f525981e9b20c$export$2e2bcd8739ae039).ACTIVE);
    }
    /**
   * Get the map associated with this interaction.
   * @return {import("../Map.js").default|null} Map.
   * @api
   */ getMap() {
        return this.map_;
    }
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */ handleEvent(mapBrowserEvent) {
        return true;
    }
    /**
   * Activate or deactivate the interaction.
   * @param {boolean} active Active.
   * @observable
   * @api
   */ setActive(active) {
        this.set((0, $e40f525981e9b20c$export$2e2bcd8739ae039).ACTIVE, active);
    }
    /**
   * Remove the interaction from its current map and attach it to the new map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   */ setMap(map) {
        this.map_ = map;
    }
}
function $5f75fed033b22cca$export$4c486572e961a974(view, delta, duration) {
    const currentCenter = view.getCenterInternal();
    if (currentCenter) {
        const center = [
            currentCenter[0] + delta[0],
            currentCenter[1] + delta[1]
        ];
        view.animateInternal({
            duration: duration !== undefined ? duration : 250,
            easing: (0, $a827aa90539b5df5$export$45db2fc2f15997e7),
            center: view.getConstrainedCenter(center)
        });
    }
}
function $5f75fed033b22cca$export$ace321ff2a8016ef(view, delta, anchor, duration) {
    const currentZoom = view.getZoom();
    if (currentZoom === undefined) return;
    const newZoom = view.getConstrainedZoom(currentZoom + delta);
    const newResolution = view.getResolutionForZoom(newZoom);
    if (view.getAnimating()) view.cancelAnimations();
    view.animate({
        resolution: newResolution,
        anchor: anchor,
        duration: duration !== undefined ? duration : 250,
        easing: (0, $a827aa90539b5df5$export$57636bb43b1ccbb0)
    });
}
var $5f75fed033b22cca$export$2e2bcd8739ae039 = $5f75fed033b22cca$var$Interaction;



/**
 * @typedef {Object} Options
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {number} [delta=1] The zoom delta applied on each double click.
 */ /**
 * @classdesc
 * Allows the user to zoom by double-clicking on the map.
 * @api
 */ class $a89a5b9d87aabec2$var$DoubleClickZoom extends (0, $5f75fed033b22cca$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        super();
        options = options ? options : {};
        /**
     * @private
     * @type {number}
     */ this.delta_ = options.delta ? options.delta : 1;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
    }
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
   * doubleclick) and eventually zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */ handleEvent(mapBrowserEvent) {
        let stopEvent = false;
        if (mapBrowserEvent.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).DBLCLICK) {
            const browserEvent = mapBrowserEvent.originalEvent;
            const map = mapBrowserEvent.map;
            const anchor = mapBrowserEvent.coordinate;
            const delta = browserEvent.shiftKey ? -this.delta_ : this.delta_;
            const view = map.getView();
            (0, $5f75fed033b22cca$export$ace321ff2a8016ef)(view, delta, anchor, this.duration_);
            browserEvent.preventDefault();
            stopEvent = true;
        }
        return !stopEvent;
    }
}
var $a89a5b9d87aabec2$export$2e2bcd8739ae039 = $a89a5b9d87aabec2$var$DoubleClickZoom;




/**
 * @typedef {Object} Options
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleDownEvent]
 * Function handling "down" events. If the function returns `true` then a drag
 * sequence is started.
 * @property {function(import("../MapBrowserEvent.js").default):void} [handleDragEvent]
 * Function handling "drag" events. This function is called on "move" events
 * during a drag sequence.
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleEvent]
 * Method called by the map to notify the interaction that a browser event was
 * dispatched to the map. The function may return `false` to prevent the
 * propagation of the event to other interactions in the map's interactions
 * chain.
 * @property {function(import("../MapBrowserEvent.js").default):void} [handleMoveEvent]
 * Function handling "move" events. This function is called on "move" events.
 * This functions is also called during a drag sequence, so during a drag
 * sequence both the `handleDragEvent` function and this function are called.
 * If `handleDownEvent` is defined and it returns true this function will not
 * be called during a drag sequence.
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleUpEvent]
 *  Function handling "up" events. If the function returns `false` then the
 * current drag sequence is stopped.
 * @property {function(boolean):boolean} [stopDown]
 * Should the down event be propagated to other interactions, or should be
 * stopped?
 */ /**
 * @classdesc
 * Base class that calls user-defined functions on `down`, `move` and `up`
 * events. This class also manages "drag sequences".
 *
 * When the `handleDownEvent` user function returns `true` a drag sequence is
 * started. During a drag sequence the `handleDragEvent` user function is
 * called on `move` events. The drag sequence ends when the `handleUpEvent`
 * user function is called and returns `false`.
 * @api
 */ class $857d3b7cb7a96f4d$var$PointerInteraction extends (0, $5f75fed033b22cca$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        super(options);
        if (options.handleDownEvent) this.handleDownEvent = options.handleDownEvent;
        if (options.handleDragEvent) this.handleDragEvent = options.handleDragEvent;
        if (options.handleMoveEvent) this.handleMoveEvent = options.handleMoveEvent;
        if (options.handleUpEvent) this.handleUpEvent = options.handleUpEvent;
        if (options.stopDown) this.stopDown = options.stopDown;
        /**
     * @type {boolean}
     * @protected
     */ this.handlingDownUpSequence = false;
        /**
     * @type {Array<PointerEvent>}
     * @protected
     */ this.targetPointers = [];
    }
    /**
   * Returns the current number of pointers involved in the interaction,
   * e.g. `2` when two fingers are used.
   * @return {number} The number of pointers.
   * @api
   */ getPointerCount() {
        return this.targetPointers.length;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */ handleDownEvent(mapBrowserEvent) {
        return false;
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */ handleDragEvent(mapBrowserEvent) {}
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
   * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
   * detected.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */ handleEvent(mapBrowserEvent) {
        if (!mapBrowserEvent.originalEvent) return true;
        let stopEvent = false;
        this.updateTrackedPointers_(mapBrowserEvent);
        if (this.handlingDownUpSequence) {
            if (mapBrowserEvent.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERDRAG) {
                this.handleDragEvent(mapBrowserEvent);
                // prevent page scrolling during dragging
                mapBrowserEvent.originalEvent.preventDefault();
            } else if (mapBrowserEvent.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERUP) {
                const handledUp = this.handleUpEvent(mapBrowserEvent);
                this.handlingDownUpSequence = handledUp && this.targetPointers.length > 0;
            }
        } else {
            if (mapBrowserEvent.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERDOWN) {
                const handled = this.handleDownEvent(mapBrowserEvent);
                this.handlingDownUpSequence = handled;
                stopEvent = this.stopDown(handled);
            } else if (mapBrowserEvent.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).POINTERMOVE) this.handleMoveEvent(mapBrowserEvent);
        }
        return !stopEvent;
    }
    /**
   * Handle pointer move events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */ handleMoveEvent(mapBrowserEvent) {}
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */ handleUpEvent(mapBrowserEvent) {
        return false;
    }
    /**
   * This function is used to determine if "down" events should be propagated
   * to other interactions or should be stopped.
   * @param {boolean} handled Was the event handled by the interaction?
   * @return {boolean} Should the `down` event be stopped?
   */ stopDown(handled) {
        return handled;
    }
    /**
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @private
   */ updateTrackedPointers_(mapBrowserEvent) {
        if (mapBrowserEvent.activePointers) this.targetPointers = mapBrowserEvent.activePointers;
    }
}
function $857d3b7cb7a96f4d$export$e2a20c553f6c85ce(pointerEvents) {
    const length = pointerEvents.length;
    let clientX = 0;
    let clientY = 0;
    for(let i = 0; i < length; i++){
        clientX += pointerEvents[i].clientX;
        clientY += pointerEvents[i].clientY;
    }
    return [
        clientX / length,
        clientY / length
    ];
}
var $857d3b7cb7a96f4d$export$2e2bcd8739ae039 = $857d3b7cb7a96f4d$var$PointerInteraction;







function $0649a63477e7e54a$export$84bf76cd7afc7469(var_args) {
    const conditions = arguments;
    /**
   * @param {import("../MapBrowserEvent.js").default} event Event.
   * @return {boolean} All conditions passed.
   */ return function(event) {
        let pass = true;
        for(let i = 0, ii = conditions.length; i < ii; ++i){
            pass = pass && conditions[i](event);
            if (!pass) break;
        }
        return pass;
    };
}
const $0649a63477e7e54a$export$573409992e89967e = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && !originalEvent.shiftKey;
};
const $0649a63477e7e54a$export$4e5f01653f9f1f82 = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
};
const $0649a63477e7e54a$export$d7ddd398f22d79ef = function(event) {
    const targetElement = event.map.getTargetElement();
    const activeElement = event.map.getOwnerDocument().activeElement;
    return targetElement.contains(activeElement);
};
const $0649a63477e7e54a$export$ae2cdf064e3b0c55 = function(event) {
    return event.map.getTargetElement().hasAttribute("tabindex") ? $0649a63477e7e54a$export$d7ddd398f22d79ef(event) : true;
};
const $0649a63477e7e54a$export$ba9e5d519bc326ca = (0, $f2508d0c199eb098$export$22e23a2304399231);
const $0649a63477e7e54a$export$64ef1bee2b9504c1 = function(mapBrowserEvent) {
    return mapBrowserEvent.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).CLICK;
};
const $0649a63477e7e54a$export$1238ad6b5e7fff70 = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return originalEvent.button == 0 && !((0, $03af6b5c3e46892e$export$39dfd62a25e0fe93) && (0, $03af6b5c3e46892e$export$76c0a3b101d93136) && originalEvent.ctrlKey);
};
const $0649a63477e7e54a$export$b3e22bcfd64c1022 = (0, $f2508d0c199eb098$export$8f11cee4bdc7e668);
const $0649a63477e7e54a$export$71eac0963f2c2f01 = function(mapBrowserEvent) {
    return mapBrowserEvent.type == "pointermove";
};
const $0649a63477e7e54a$export$194df8bad091b401 = function(mapBrowserEvent) {
    return mapBrowserEvent.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).SINGLECLICK;
};
const $0649a63477e7e54a$export$c59d944dd10b3dc7 = function(mapBrowserEvent) {
    return mapBrowserEvent.type == (0, $59d0e10837112e72$export$2e2bcd8739ae039).DBLCLICK;
};
const $0649a63477e7e54a$export$fdc892d0d8fe3bfb = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && !originalEvent.shiftKey;
};
const $0649a63477e7e54a$export$f3100d8d6292d638 = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return !originalEvent.altKey && ((0, $03af6b5c3e46892e$export$76c0a3b101d93136) ? originalEvent.metaKey : originalEvent.ctrlKey) && !originalEvent.shiftKey;
};
const $0649a63477e7e54a$export$5d31fe68a477cfbb = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
};
const $0649a63477e7e54a$export$e5570ca80cd8fd54 = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    const tagName = /** @type {Element} */ originalEvent.target.tagName;
    return tagName !== "INPUT" && tagName !== "SELECT" && tagName !== "TEXTAREA" && // `isContentEditable` is only available on `HTMLElement`, but it may also be a
    // different type like `SVGElement`.
    // @ts-ignore
    !originalEvent.target.isContentEditable;
};
const $0649a63477e7e54a$export$abb7acbfa76bf3c4 = function(mapBrowserEvent) {
    const pointerEvent = /** @type {import("../MapBrowserEvent").default} */ mapBrowserEvent.originalEvent;
    (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(pointerEvent !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    // see https://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
    return pointerEvent.pointerType == "mouse";
};
const $0649a63477e7e54a$export$e74de664a571d084 = function(mapBrowserEvent) {
    const pointerEvt = /** @type {import("../MapBrowserEvent").default} */ mapBrowserEvent.originalEvent;
    (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(pointerEvt !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    // see https://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
    return pointerEvt.pointerType === "touch";
};
const $0649a63477e7e54a$export$cd1707283a23f059 = function(mapBrowserEvent) {
    const pointerEvt = /** @type {import("../MapBrowserEvent").default} */ mapBrowserEvent.originalEvent;
    (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(pointerEvt !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    // see https://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
    return pointerEvt.pointerType === "pen";
};
const $0649a63477e7e54a$export$189f0d593022b199 = function(mapBrowserEvent) {
    const pointerEvent = /** @type {import("../MapBrowserEvent").default} */ mapBrowserEvent.originalEvent;
    (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(pointerEvent !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    return pointerEvent.isPrimary && pointerEvent.button === 0;
};




/**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link module:ol/events/condition.noModifierKeys} and {@link module:ol/events/condition.primaryAction}.
 * @property {boolean} [onFocusOnly=false] When the map's target has a `tabindex` attribute set,
 * the interaction will only handle events when the map has the focus.
 * @property {import("../Kinetic.js").default} [kinetic] Kinetic inertia to apply to the pan.
 */ /**
 * @classdesc
 * Allows the user to pan the map by dragging the map.
 * @api
 */ class $333c6ceed0e31227$var$DragPan extends (0, $857d3b7cb7a96f4d$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        super({
            stopDown: (0, $f2508d0c199eb098$export$8f11cee4bdc7e668)
        });
        options = options ? options : {};
        /**
     * @private
     * @type {import("../Kinetic.js").default|undefined}
     */ this.kinetic_ = options.kinetic;
        /**
     * @type {import("../pixel.js").Pixel}
     */ this.lastCentroid = null;
        /**
     * @type {number}
     */ this.lastPointersCount_;
        /**
     * @type {boolean}
     */ this.panning_ = false;
        const condition = options.condition ? options.condition : (0, $0649a63477e7e54a$export$84bf76cd7afc7469)((0, $0649a63477e7e54a$export$fdc892d0d8fe3bfb), (0, $0649a63477e7e54a$export$189f0d593022b199));
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.onFocusOnly ? (0, $0649a63477e7e54a$export$84bf76cd7afc7469)((0, $0649a63477e7e54a$export$ae2cdf064e3b0c55), condition) : condition;
        /**
     * @private
     * @type {boolean}
     */ this.noKinetic_ = false;
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */ handleDragEvent(mapBrowserEvent) {
        if (!this.panning_) {
            this.panning_ = true;
            this.getMap().getView().beginInteraction();
        }
        const targetPointers = this.targetPointers;
        const centroid = (0, $857d3b7cb7a96f4d$export$e2a20c553f6c85ce)(targetPointers);
        if (targetPointers.length == this.lastPointersCount_) {
            if (this.kinetic_) this.kinetic_.update(centroid[0], centroid[1]);
            if (this.lastCentroid) {
                const delta = [
                    this.lastCentroid[0] - centroid[0],
                    centroid[1] - this.lastCentroid[1], 
                ];
                const map = mapBrowserEvent.map;
                const view = map.getView();
                (0, $8b3868383cdaeca1$export$dcdf75081b88279d)(delta, view.getResolution());
                (0, $8b3868383cdaeca1$export$bb628a54ab399bc9)(delta, view.getRotation());
                view.adjustCenterInternal(delta);
            }
        } else if (this.kinetic_) // reset so we don't overestimate the kinetic energy after
        // after one finger down, tiny drag, second finger down
        this.kinetic_.begin();
        this.lastCentroid = centroid;
        this.lastPointersCount_ = targetPointers.length;
        mapBrowserEvent.originalEvent.preventDefault();
    }
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleUpEvent(mapBrowserEvent) {
        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (this.targetPointers.length === 0) {
            if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
                const distance = this.kinetic_.getDistance();
                const angle = this.kinetic_.getAngle();
                const center = view.getCenterInternal();
                const centerpx = map.getPixelFromCoordinateInternal(center);
                const dest = map.getCoordinateFromPixelInternal([
                    centerpx[0] - distance * Math.cos(angle),
                    centerpx[1] - distance * Math.sin(angle), 
                ]);
                view.animateInternal({
                    center: view.getConstrainedCenter(dest),
                    duration: 500,
                    easing: (0, $a827aa90539b5df5$export$57636bb43b1ccbb0)
                });
            }
            if (this.panning_) {
                this.panning_ = false;
                view.endInteraction();
            }
            return false;
        } else {
            if (this.kinetic_) // reset so we don't overestimate the kinetic energy after
            // after one finger up, tiny drag, second finger up
            this.kinetic_.begin();
            this.lastCentroid = null;
            return true;
        }
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleDownEvent(mapBrowserEvent) {
        if (this.targetPointers.length > 0 && this.condition_(mapBrowserEvent)) {
            const map = mapBrowserEvent.map;
            const view = map.getView();
            this.lastCentroid = null;
            // stop any current animation
            if (view.getAnimating()) view.cancelAnimations();
            if (this.kinetic_) this.kinetic_.begin();
            // No kinetic as soon as more than one pointer on the screen is
            // detected. This is to prevent nasty pans after pinch.
            this.noKinetic_ = this.targetPointers.length > 1;
            return true;
        } else return false;
    }
}
var $333c6ceed0e31227$export$2e2bcd8739ae039 = $333c6ceed0e31227$var$DragPan;






/**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that takes an
 * {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link module:ol/events/condition.altShiftKeysOnly}.
 * @property {number} [duration=250] Animation duration in milliseconds.
 */ /**
 * @classdesc
 * Allows the user to rotate the map by clicking and dragging on the map,
 * normally combined with an {@link module:ol/events/condition} that limits
 * it to when the alt and shift keys are held down.
 *
 * This interaction is only supported for mouse devices.
 * @api
 */ class $2620cb9e8693456d$var$DragRotate extends (0, $857d3b7cb7a96f4d$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        super({
            stopDown: (0, $f2508d0c199eb098$export$8f11cee4bdc7e668)
        });
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.condition ? options.condition : (0, $0649a63477e7e54a$export$4e5f01653f9f1f82);
        /**
     * @private
     * @type {number|undefined}
     */ this.lastAngle_ = undefined;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */ handleDragEvent(mapBrowserEvent) {
        if (!(0, $0649a63477e7e54a$export$abb7acbfa76bf3c4)(mapBrowserEvent)) return;
        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (view.getConstraints().rotation === (0, $9ce71f85bc80f4b2$export$e20fbacbb41798b)) return;
        const size = map.getSize();
        const offset = mapBrowserEvent.pixel;
        const theta = Math.atan2(size[1] / 2 - offset[1], offset[0] - size[0] / 2);
        if (this.lastAngle_ !== undefined) {
            const delta = theta - this.lastAngle_;
            view.adjustRotationInternal(-delta);
        }
        this.lastAngle_ = theta;
    }
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleUpEvent(mapBrowserEvent) {
        if (!(0, $0649a63477e7e54a$export$abb7acbfa76bf3c4)(mapBrowserEvent)) return true;
        const map = mapBrowserEvent.map;
        const view = map.getView();
        view.endInteraction(this.duration_);
        return false;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleDownEvent(mapBrowserEvent) {
        if (!(0, $0649a63477e7e54a$export$abb7acbfa76bf3c4)(mapBrowserEvent)) return false;
        if ((0, $0649a63477e7e54a$export$1238ad6b5e7fff70)(mapBrowserEvent) && this.condition_(mapBrowserEvent)) {
            const map = mapBrowserEvent.map;
            map.getView().beginInteraction();
            this.lastAngle_ = undefined;
            return true;
        } else return false;
    }
}
var $2620cb9e8693456d$export$2e2bcd8739ae039 = $2620cb9e8693456d$var$DragRotate;






class $641f5f995fdf85ce$var$RenderBox extends (0, $82180f36890be34f$export$2e2bcd8739ae039) {
    /**
   * @param {string} className CSS class name.
   */ constructor(className){
        super();
        /**
     * @type {import("../geom/Polygon.js").default}
     * @private
     */ this.geometry_ = null;
        /**
     * @type {HTMLDivElement}
     * @private
     */ this.element_ = document.createElement("div");
        this.element_.style.position = "absolute";
        this.element_.style.pointerEvents = "auto";
        this.element_.className = "ol-box " + className;
        /**
     * @private
     * @type {import("../Map.js").default|null}
     */ this.map_ = null;
        /**
     * @private
     * @type {import("../pixel.js").Pixel}
     */ this.startPixel_ = null;
        /**
     * @private
     * @type {import("../pixel.js").Pixel}
     */ this.endPixel_ = null;
    }
    /**
   * Clean up.
   */ disposeInternal() {
        this.setMap(null);
    }
    /**
   * @private
   */ render_() {
        const startPixel = this.startPixel_;
        const endPixel = this.endPixel_;
        const px = "px";
        const style = this.element_.style;
        style.left = Math.min(startPixel[0], endPixel[0]) + px;
        style.top = Math.min(startPixel[1], endPixel[1]) + px;
        style.width = Math.abs(endPixel[0] - startPixel[0]) + px;
        style.height = Math.abs(endPixel[1] - startPixel[1]) + px;
    }
    /**
   * @param {import("../Map.js").default|null} map Map.
   */ setMap(map) {
        if (this.map_) {
            this.map_.getOverlayContainer().removeChild(this.element_);
            const style = this.element_.style;
            style.left = "inherit";
            style.top = "inherit";
            style.width = "inherit";
            style.height = "inherit";
        }
        this.map_ = map;
        if (this.map_) this.map_.getOverlayContainer().appendChild(this.element_);
    }
    /**
   * @param {import("../pixel.js").Pixel} startPixel Start pixel.
   * @param {import("../pixel.js").Pixel} endPixel End pixel.
   */ setPixels(startPixel, endPixel) {
        this.startPixel_ = startPixel;
        this.endPixel_ = endPixel;
        this.createOrUpdateGeometry();
        this.render_();
    }
    /**
   * Creates or updates the cached geometry.
   */ createOrUpdateGeometry() {
        const startPixel = this.startPixel_;
        const endPixel = this.endPixel_;
        const pixels = [
            startPixel,
            [
                startPixel[0],
                endPixel[1]
            ],
            endPixel,
            [
                endPixel[0],
                startPixel[1]
            ], 
        ];
        const coordinates = pixels.map(this.map_.getCoordinateFromPixelInternal, this.map_);
        // close the polygon
        coordinates[4] = coordinates[0].slice();
        if (!this.geometry_) this.geometry_ = new (0, $07899719e245857b$export$2e2bcd8739ae039)([
            coordinates
        ]);
        else this.geometry_.setCoordinates([
            coordinates
        ]);
    }
    /**
   * @return {import("../geom/Polygon.js").default} Geometry.
   */ getGeometry() {
        return this.geometry_;
    }
}
var $641f5f995fdf85ce$export$2e2bcd8739ae039 = $641f5f995fdf85ce$var$RenderBox;



/**
 * A function that takes a {@link module:ol/MapBrowserEvent~MapBrowserEvent} and two
 * {@link module:ol/pixel~Pixel}s and returns a `{boolean}`. If the condition is met,
 * true should be returned.
 * @typedef {function(this: ?, import("../MapBrowserEvent.js").default, import("../pixel.js").Pixel, import("../pixel.js").Pixel):boolean} EndCondition
 */ /**
 * @typedef {Object} Options
 * @property {string} [className='ol-dragbox'] CSS class name for styling the box.
 * @property {import("../events/condition.js").Condition} [condition] A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link ol/events/condition~mouseActionButton}.
 * @property {number} [minArea=64] The minimum area of the box in pixel, this value is used by the default
 * `boxEndCondition` function.
 * @property {EndCondition} [boxEndCondition] A function that takes a {@link module:ol/MapBrowserEvent~MapBrowserEvent} and two
 * {@link module:ol/pixel~Pixel}s to indicate whether a `boxend` event should be fired.
 * Default is `true` if the area of the box is bigger than the `minArea` option.
 * @property {function(this:DragBox, import("../MapBrowserEvent.js").default):void} [onBoxEnd] Code to execute just
 * before `boxend` is fired.
 */ /**
 * @enum {string}
 */ const $2a56aed3788e239c$var$DragBoxEventType = {
    /**
   * Triggered upon drag box start.
   * @event DragBoxEvent#boxstart
   * @api
   */ BOXSTART: "boxstart",
    /**
   * Triggered on drag when box is active.
   * @event DragBoxEvent#boxdrag
   * @api
   */ BOXDRAG: "boxdrag",
    /**
   * Triggered upon drag box end.
   * @event DragBoxEvent#boxend
   * @api
   */ BOXEND: "boxend",
    /**
   * Triggered upon drag box canceled.
   * @event DragBoxEvent#boxcancel
   * @api
   */ BOXCANCEL: "boxcancel"
};
class $2a56aed3788e239c$export$7053c33c051365ea extends (0, $f3a6f6cab00ac278$export$2e2bcd8739ae039) {
    /**
   * @param {string} type The event type.
   * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
   */ constructor(type, coordinate, mapBrowserEvent){
        super(type);
        /**
     * The coordinate of the drag event.
     * @const
     * @type {import("../coordinate.js").Coordinate}
     * @api
     */ this.coordinate = coordinate;
        /**
     * @const
     * @type {import("../MapBrowserEvent.js").default}
     * @api
     */ this.mapBrowserEvent = mapBrowserEvent;
    }
}
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types|
 *     'change:active', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<'boxcancel'|'boxdrag'|'boxend'|'boxstart', DragBoxEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
 *     'change:active'|'boxcancel'|'boxdrag'|'boxend', Return>} DragBoxOnSignature
 */ /**
 * @classdesc
 * Allows the user to draw a vector box by clicking and dragging on the map,
 * normally combined with an {@link module:ol/events/condition} that limits
 * it to when the shift or other key is held down. This is used, for example,
 * for zooming to a specific area of the map
 * (see {@link module:ol/interaction/DragZoom~DragZoom} and
 * {@link module:ol/interaction/DragRotateAndZoom~DragRotateAndZoom}).
 *
 * @fires DragBoxEvent
 * @api
 */ class $2a56aed3788e239c$var$DragBox extends (0, $857d3b7cb7a96f4d$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        super();
        /***
     * @type {DragBoxOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {DragBoxOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {DragBoxOnSignature<void>}
     */ this.un;
        options = options ? options : {};
        /**
     * @type {import("../render/Box.js").default}
     * @private
     */ this.box_ = new (0, $641f5f995fdf85ce$export$2e2bcd8739ae039)(options.className || "ol-dragbox");
        /**
     * @type {number}
     * @private
     */ this.minArea_ = options.minArea !== undefined ? options.minArea : 64;
        if (options.onBoxEnd) this.onBoxEnd = options.onBoxEnd;
        /**
     * @type {import("../pixel.js").Pixel}
     * @private
     */ this.startPixel_ = null;
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.condition ? options.condition : (0, $0649a63477e7e54a$export$1238ad6b5e7fff70);
        /**
     * @private
     * @type {EndCondition}
     */ this.boxEndCondition_ = options.boxEndCondition ? options.boxEndCondition : this.defaultBoxEndCondition;
    }
    /**
   * The default condition for determining whether the boxend event
   * should fire.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent The originating MapBrowserEvent
   *     leading to the box end.
   * @param {import("../pixel.js").Pixel} startPixel The starting pixel of the box.
   * @param {import("../pixel.js").Pixel} endPixel The end pixel of the box.
   * @return {boolean} Whether or not the boxend condition should be fired.
   */ defaultBoxEndCondition(mapBrowserEvent, startPixel, endPixel) {
        const width = endPixel[0] - startPixel[0];
        const height = endPixel[1] - startPixel[1];
        return width * width + height * height >= this.minArea_;
    }
    /**
   * Returns geometry of last drawn box.
   * @return {import("../geom/Polygon.js").default} Geometry.
   * @api
   */ getGeometry() {
        return this.box_.getGeometry();
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */ handleDragEvent(mapBrowserEvent) {
        this.box_.setPixels(this.startPixel_, mapBrowserEvent.pixel);
        this.dispatchEvent(new $2a56aed3788e239c$export$7053c33c051365ea($2a56aed3788e239c$var$DragBoxEventType.BOXDRAG, mapBrowserEvent.coordinate, mapBrowserEvent));
    }
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleUpEvent(mapBrowserEvent) {
        this.box_.setMap(null);
        const completeBox = this.boxEndCondition_(mapBrowserEvent, this.startPixel_, mapBrowserEvent.pixel);
        if (completeBox) this.onBoxEnd(mapBrowserEvent);
        this.dispatchEvent(new $2a56aed3788e239c$export$7053c33c051365ea(completeBox ? $2a56aed3788e239c$var$DragBoxEventType.BOXEND : $2a56aed3788e239c$var$DragBoxEventType.BOXCANCEL, mapBrowserEvent.coordinate, mapBrowserEvent));
        return false;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleDownEvent(mapBrowserEvent) {
        if (this.condition_(mapBrowserEvent)) {
            this.startPixel_ = mapBrowserEvent.pixel;
            this.box_.setMap(mapBrowserEvent.map);
            this.box_.setPixels(this.startPixel_, this.startPixel_);
            this.dispatchEvent(new $2a56aed3788e239c$export$7053c33c051365ea($2a56aed3788e239c$var$DragBoxEventType.BOXSTART, mapBrowserEvent.coordinate, mapBrowserEvent));
            return true;
        } else return false;
    }
    /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */ onBoxEnd(event) {}
}
var $2a56aed3788e239c$export$2e2bcd8739ae039 = $2a56aed3788e239c$var$DragBox;




/**
 * @typedef {Object} Options
 * @property {string} [className='ol-dragzoom'] CSS class name for styling the
 * box.
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled.
 * Default is {@link module:ol/events/condition.shiftKeyOnly}.
 * @property {number} [duration=200] Animation duration in milliseconds.
 * @property {boolean} [out=false] Use interaction for zooming out.
 * @property {number} [minArea=64] The minimum area of the box in pixel, this value is used by the parent default
 * `boxEndCondition` function.
 */ /**
 * @classdesc
 * Allows the user to zoom the map by clicking and dragging on the map,
 * normally combined with an {@link module:ol/events/condition} that limits
 * it to when a key, shift by default, is held down.
 *
 * To change the style of the box, use CSS and the `.ol-dragzoom` selector, or
 * your custom one configured with `className`.
 * @api
 */ class $ecb19478543e9da9$var$DragZoom extends (0, $2a56aed3788e239c$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        const condition = options.condition ? options.condition : (0, $0649a63477e7e54a$export$5d31fe68a477cfbb);
        super({
            condition: condition,
            className: options.className || "ol-dragzoom",
            minArea: options.minArea
        });
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 200;
        /**
     * @private
     * @type {boolean}
     */ this.out_ = options.out !== undefined ? options.out : false;
    }
    /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */ onBoxEnd(event) {
        const map = this.getMap();
        const view = /** @type {!import("../View.js").default} */ map.getView();
        let geometry = this.getGeometry();
        if (this.out_) {
            const rotatedExtent = view.rotatedExtentForGeometry(geometry);
            const resolution = view.getResolutionForExtentInternal(rotatedExtent);
            const factor = view.getResolution() / resolution;
            geometry = geometry.clone();
            geometry.scale(factor * factor);
        }
        view.fitInternal(geometry, {
            duration: this.duration_,
            easing: (0, $a827aa90539b5df5$export$57636bb43b1ccbb0)
        });
    }
}
var $ecb19478543e9da9$export$2e2bcd8739ae039 = $ecb19478543e9da9$var$DragZoom;




var /**
 * @module ol/events/KeyCode
 */ /**
 * @enum {number}
 * @const
 */ $e0703f0f05fb2a71$export$2e2bcd8739ae039 = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};




/**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled. Default is
 * {@link module:ol/events/condition.noModifierKeys} and
 * {@link module:ol/events/condition.targetNotEditable}.
 * @property {number} [duration=100] Animation duration in milliseconds.
 * @property {number} [pixelDelta=128] The amount of pixels to pan on each key
 * press.
 */ /**
 * @classdesc
 * Allows the user to pan the map using keyboard arrows.
 * Note that, although this interaction is by default included in maps,
 * the keys can only be used when browser focus is on the element to which
 * the keyboard events are attached. By default, this is the map div,
 * though you can change this with the `keyboardEventTarget` in
 * {@link module:ol/Map~Map}. `document` never loses focus but, for any other
 * element, focus will have to be on, and returned to, this element if the keys
 * are to function.
 * See also {@link module:ol/interaction/KeyboardZoom~KeyboardZoom}.
 * @api
 */ class $3c7957cc8fefc11f$var$KeyboardPan extends (0, $5f75fed033b22cca$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        super();
        options = options || {};
        /**
     * @private
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Browser event.
     * @return {boolean} Combined condition result.
     */ this.defaultCondition_ = function(mapBrowserEvent) {
            return (0, $0649a63477e7e54a$export$fdc892d0d8fe3bfb)(mapBrowserEvent) && (0, $0649a63477e7e54a$export$e5570ca80cd8fd54)(mapBrowserEvent);
        };
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.condition !== undefined ? options.condition : this.defaultCondition_;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 100;
        /**
     * @private
     * @type {number}
     */ this.pixelDelta_ = options.pixelDelta !== undefined ? options.pixelDelta : 128;
    }
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides the direction to pan to (if an arrow key was
   * pressed).
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @this {KeyboardPan}
   */ handleEvent(mapBrowserEvent) {
        let stopEvent = false;
        if (mapBrowserEvent.type == (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).KEYDOWN) {
            const keyEvent = mapBrowserEvent.originalEvent;
            const keyCode = keyEvent.keyCode;
            if (this.condition_(mapBrowserEvent) && (keyCode == (0, $e0703f0f05fb2a71$export$2e2bcd8739ae039).DOWN || keyCode == (0, $e0703f0f05fb2a71$export$2e2bcd8739ae039).LEFT || keyCode == (0, $e0703f0f05fb2a71$export$2e2bcd8739ae039).RIGHT || keyCode == (0, $e0703f0f05fb2a71$export$2e2bcd8739ae039).UP)) {
                const map = mapBrowserEvent.map;
                const view = map.getView();
                const mapUnitsDelta = view.getResolution() * this.pixelDelta_;
                let deltaX = 0, deltaY = 0;
                if (keyCode == (0, $e0703f0f05fb2a71$export$2e2bcd8739ae039).DOWN) deltaY = -mapUnitsDelta;
                else if (keyCode == (0, $e0703f0f05fb2a71$export$2e2bcd8739ae039).LEFT) deltaX = -mapUnitsDelta;
                else if (keyCode == (0, $e0703f0f05fb2a71$export$2e2bcd8739ae039).RIGHT) deltaX = mapUnitsDelta;
                else deltaY = mapUnitsDelta;
                const delta = [
                    deltaX,
                    deltaY
                ];
                (0, $8b3868383cdaeca1$export$bb628a54ab399bc9)(delta, view.getRotation());
                (0, $5f75fed033b22cca$export$4c486572e961a974)(view, delta, this.duration_);
                keyEvent.preventDefault();
                stopEvent = true;
            }
        }
        return !stopEvent;
    }
}
var $3c7957cc8fefc11f$export$2e2bcd8739ae039 = $3c7957cc8fefc11f$var$KeyboardPan;





/**
 * @typedef {Object} Options
 * @property {number} [duration=100] Animation duration in milliseconds.
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled. Default is
 * {@link module:ol/events/condition.targetNotEditable}.
 * @property {number} [delta=1] The zoom level delta on each key press.
 */ /**
 * @classdesc
 * Allows the user to zoom the map using keyboard + and -.
 * Note that, although this interaction is by default included in maps,
 * the keys can only be used when browser focus is on the element to which
 * the keyboard events are attached. By default, this is the map div,
 * though you can change this with the `keyboardEventTarget` in
 * {@link module:ol/Map~Map}. `document` never loses focus but, for any other
 * element, focus will have to be on, and returned to, this element if the keys
 * are to function.
 * See also {@link module:ol/interaction/KeyboardPan~KeyboardPan}.
 * @api
 */ class $0dc7cf7cc1249ded$var$KeyboardZoom extends (0, $5f75fed033b22cca$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        super();
        options = options ? options : {};
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.condition ? options.condition : (0, $0649a63477e7e54a$export$e5570ca80cd8fd54);
        /**
     * @private
     * @type {number}
     */ this.delta_ = options.delta ? options.delta : 1;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 100;
    }
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
   * key pressed was '+' or '-').
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @this {KeyboardZoom}
   */ handleEvent(mapBrowserEvent) {
        let stopEvent = false;
        if (mapBrowserEvent.type == (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).KEYDOWN || mapBrowserEvent.type == (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).KEYPRESS) {
            const keyEvent = mapBrowserEvent.originalEvent;
            const charCode = keyEvent.charCode;
            if (this.condition_(mapBrowserEvent) && (charCode == "+".charCodeAt(0) || charCode == "-".charCodeAt(0))) {
                const map = mapBrowserEvent.map;
                const delta = charCode == "+".charCodeAt(0) ? this.delta_ : -this.delta_;
                const view = map.getView();
                (0, $5f75fed033b22cca$export$ace321ff2a8016ef)(view, delta, undefined, this.duration_);
                keyEvent.preventDefault();
                stopEvent = true;
            }
        }
        return !stopEvent;
    }
}
var $0dc7cf7cc1249ded$export$2e2bcd8739ae039 = $0dc7cf7cc1249ded$var$KeyboardZoom;


/**
 * @module ol/Kinetic
 */ /**
 * @classdesc
 * Implementation of inertial deceleration for map movement.
 *
 * @api
 */ class $800d981f81965f58$var$Kinetic {
    /**
   * @param {number} decay Rate of decay (must be negative).
   * @param {number} minVelocity Minimum velocity (pixels/millisecond).
   * @param {number} delay Delay to consider to calculate the kinetic
   *     initial values (milliseconds).
   */ constructor(decay, minVelocity, delay){
        /**
     * @private
     * @type {number}
     */ this.decay_ = decay;
        /**
     * @private
     * @type {number}
     */ this.minVelocity_ = minVelocity;
        /**
     * @private
     * @type {number}
     */ this.delay_ = delay;
        /**
     * @private
     * @type {Array<number>}
     */ this.points_ = [];
        /**
     * @private
     * @type {number}
     */ this.angle_ = 0;
        /**
     * @private
     * @type {number}
     */ this.initialVelocity_ = 0;
    }
    /**
   * FIXME empty description for jsdoc
   */ begin() {
        this.points_.length = 0;
        this.angle_ = 0;
        this.initialVelocity_ = 0;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   */ update(x, y) {
        this.points_.push(x, y, Date.now());
    }
    /**
   * @return {boolean} Whether we should do kinetic animation.
   */ end() {
        if (this.points_.length < 6) // at least 2 points are required (i.e. there must be at least 6 elements
        // in the array)
        return false;
        const delay = Date.now() - this.delay_;
        const lastIndex = this.points_.length - 3;
        if (this.points_[lastIndex + 2] < delay) // the last tracked point is too old, which means that the user stopped
        // panning before releasing the map
        return false;
        // get the first point which still falls into the delay time
        let firstIndex = lastIndex - 3;
        while(firstIndex > 0 && this.points_[firstIndex + 2] > delay)firstIndex -= 3;
        const duration = this.points_[lastIndex + 2] - this.points_[firstIndex + 2];
        // we don't want a duration of 0 (divide by zero)
        // we also make sure the user panned for a duration of at least one frame
        // (1/60s) to compute sane displacement values
        if (duration < 1000 / 60) return false;
        const dx = this.points_[lastIndex] - this.points_[firstIndex];
        const dy = this.points_[lastIndex + 1] - this.points_[firstIndex + 1];
        this.angle_ = Math.atan2(dy, dx);
        this.initialVelocity_ = Math.sqrt(dx * dx + dy * dy) / duration;
        return this.initialVelocity_ > this.minVelocity_;
    }
    /**
   * @return {number} Total distance travelled (pixels).
   */ getDistance() {
        return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
    }
    /**
   * @return {number} Angle of the kinetic panning animation (radians).
   */ getAngle() {
        return this.angle_;
    }
}
var $800d981f81965f58$export$2e2bcd8739ae039 = $800d981f81965f58$var$Kinetic;







/**
 * @typedef {'trackpad' | 'wheel'} Mode
 */ /**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled. Default is
 * {@link module:ol/events/condition.always}.
 * @property {boolean} [onFocusOnly=false] When the map's target has a `tabindex` attribute set,
 * the interaction will only handle events when the map has the focus.
 * @property {number} [maxDelta=1] Maximum mouse wheel delta.
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {number} [timeout=80] Mouse wheel timeout duration in milliseconds.
 * @property {boolean} [useAnchor=true] Enable zooming using the mouse's
 * location as the anchor. When set to `false`, zooming in and out will zoom to
 * the center of the screen instead of zooming on the mouse's location.
 * @property {boolean} [constrainResolution=false] If true, the mouse wheel zoom
 * event will always animate to the closest zoom level after an interaction;
 * false means intermediary zoom levels are allowed.
 */ /**
 * @classdesc
 * Allows the user to zoom the map by scrolling the mouse wheel.
 * @api
 */ class $b689ca791a679828$var$MouseWheelZoom extends (0, $5f75fed033b22cca$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        super(options);
        /**
     * @private
     * @type {number}
     */ this.totalDelta_ = 0;
        /**
     * @private
     * @type {number}
     */ this.lastDelta_ = 0;
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = options.maxDelta !== undefined ? options.maxDelta : 1;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
        /**
     * @private
     * @type {number}
     */ this.timeout_ = options.timeout !== undefined ? options.timeout : 80;
        /**
     * @private
     * @type {boolean}
     */ this.useAnchor_ = options.useAnchor !== undefined ? options.useAnchor : true;
        /**
     * @private
     * @type {boolean}
     */ this.constrainResolution_ = options.constrainResolution !== undefined ? options.constrainResolution : false;
        const condition = options.condition ? options.condition : (0, $0649a63477e7e54a$export$ba9e5d519bc326ca);
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.onFocusOnly ? (0, $0649a63477e7e54a$export$84bf76cd7afc7469)((0, $0649a63477e7e54a$export$ae2cdf064e3b0c55), condition) : condition;
        /**
     * @private
     * @type {?import("../coordinate.js").Coordinate}
     */ this.lastAnchor_ = null;
        /**
     * @private
     * @type {number|undefined}
     */ this.startTime_ = undefined;
        /**
     * @private
     * @type {?}
     */ this.timeoutId_;
        /**
     * @private
     * @type {Mode|undefined}
     */ this.mode_ = undefined;
        /**
     * Trackpad events separated by this delay will be considered separate
     * interactions.
     * @type {number}
     */ this.trackpadEventGap_ = 400;
        /**
     * @type {?}
     */ this.trackpadTimeoutId_;
        /**
     * The number of delta values per zoom level
     * @private
     * @type {number}
     */ this.deltaPerZoom_ = 300;
    }
    /**
   * @private
   */ endInteraction_() {
        this.trackpadTimeoutId_ = undefined;
        const map = this.getMap();
        if (!map) return;
        const view = map.getView();
        view.endInteraction(undefined, this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0, this.lastAnchor_);
    }
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
   * zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */ handleEvent(mapBrowserEvent) {
        if (!this.condition_(mapBrowserEvent)) return true;
        const type = mapBrowserEvent.type;
        if (type !== (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).WHEEL) return true;
        const map = mapBrowserEvent.map;
        const wheelEvent = mapBrowserEvent.originalEvent;
        wheelEvent.preventDefault();
        if (this.useAnchor_) this.lastAnchor_ = mapBrowserEvent.coordinate;
        // Delta normalisation inspired by
        // https://github.com/mapbox/mapbox-gl-js/blob/001c7b9/js/ui/handler/scroll_zoom.js
        let delta;
        if (mapBrowserEvent.type == (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).WHEEL) {
            delta = wheelEvent.deltaY;
            if ((0, $03af6b5c3e46892e$export$8442bdfd18b7b8a6) && wheelEvent.deltaMode === WheelEvent.DOM_DELTA_PIXEL) delta /= (0, $03af6b5c3e46892e$export$6b83a0446fc26f94);
            if (wheelEvent.deltaMode === WheelEvent.DOM_DELTA_LINE) delta *= 40;
        }
        if (delta === 0) return false;
        else this.lastDelta_ = delta;
        const now = Date.now();
        if (this.startTime_ === undefined) this.startTime_ = now;
        if (!this.mode_ || now - this.startTime_ > this.trackpadEventGap_) this.mode_ = Math.abs(delta) < 4 ? "trackpad" : "wheel";
        const view = map.getView();
        if (this.mode_ === "trackpad" && !(view.getConstrainResolution() || this.constrainResolution_)) {
            if (this.trackpadTimeoutId_) clearTimeout(this.trackpadTimeoutId_);
            else {
                if (view.getAnimating()) view.cancelAnimations();
                view.beginInteraction();
            }
            this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.timeout_);
            view.adjustZoom(-delta / this.deltaPerZoom_, this.lastAnchor_);
            this.startTime_ = now;
            return false;
        }
        this.totalDelta_ += delta;
        const timeLeft = Math.max(this.timeout_ - (now - this.startTime_), 0);
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, map), timeLeft);
        return false;
    }
    /**
   * @private
   * @param {import("../Map.js").default} map Map.
   */ handleWheelZoom_(map) {
        const view = map.getView();
        if (view.getAnimating()) view.cancelAnimations();
        let delta = -(0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) / this.deltaPerZoom_;
        if (view.getConstrainResolution() || this.constrainResolution_) // view has a zoom constraint, zoom by 1
        delta = delta ? delta > 0 ? 1 : -1 : 0;
        (0, $5f75fed033b22cca$export$ace321ff2a8016ef)(view, delta, this.lastAnchor_, this.duration_);
        this.mode_ = undefined;
        this.totalDelta_ = 0;
        this.lastAnchor_ = null;
        this.startTime_ = undefined;
        this.timeoutId_ = undefined;
    }
    /**
   * Enable or disable using the mouse's location as an anchor when zooming
   * @param {boolean} useAnchor true to zoom to the mouse's location, false
   * to zoom to the center of the map
   * @api
   */ setMouseAnchor(useAnchor) {
        this.useAnchor_ = useAnchor;
        if (!useAnchor) this.lastAnchor_ = null;
    }
}
var $b689ca791a679828$export$2e2bcd8739ae039 = $b689ca791a679828$var$MouseWheelZoom;





/**
 * @typedef {Object} Options
 * @property {number} [duration=250] The duration of the animation in
 * milliseconds.
 * @property {number} [threshold=0.3] Minimal angle in radians to start a rotation.
 */ /**
 * @classdesc
 * Allows the user to rotate the map by twisting with two fingers
 * on a touch screen.
 * @api
 */ class $f1c9fd8179a5a1ae$var$PinchRotate extends (0, $857d3b7cb7a96f4d$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        const pointerOptions = options;
        if (!pointerOptions.stopDown) pointerOptions.stopDown = (0, $f2508d0c199eb098$export$8f11cee4bdc7e668);
        super(pointerOptions);
        /**
     * @private
     * @type {import("../coordinate.js").Coordinate}
     */ this.anchor_ = null;
        /**
     * @private
     * @type {number|undefined}
     */ this.lastAngle_ = undefined;
        /**
     * @private
     * @type {boolean}
     */ this.rotating_ = false;
        /**
     * @private
     * @type {number}
     */ this.rotationDelta_ = 0.0;
        /**
     * @private
     * @type {number}
     */ this.threshold_ = options.threshold !== undefined ? options.threshold : 0.3;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */ handleDragEvent(mapBrowserEvent) {
        let rotationDelta = 0.0;
        const touch0 = this.targetPointers[0];
        const touch1 = this.targetPointers[1];
        // angle between touches
        const angle = Math.atan2(touch1.clientY - touch0.clientY, touch1.clientX - touch0.clientX);
        if (this.lastAngle_ !== undefined) {
            const delta = angle - this.lastAngle_;
            this.rotationDelta_ += delta;
            if (!this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_) this.rotating_ = true;
            rotationDelta = delta;
        }
        this.lastAngle_ = angle;
        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (view.getConstraints().rotation === (0, $9ce71f85bc80f4b2$export$e20fbacbb41798b)) return;
        // rotate anchor point.
        // FIXME: should be the intersection point between the lines:
        //     touch0,touch1 and previousTouch0,previousTouch1
        const viewportPosition = map.getViewport().getBoundingClientRect();
        const centroid = (0, $857d3b7cb7a96f4d$export$e2a20c553f6c85ce)(this.targetPointers);
        centroid[0] -= viewportPosition.left;
        centroid[1] -= viewportPosition.top;
        this.anchor_ = map.getCoordinateFromPixelInternal(centroid);
        // rotate
        if (this.rotating_) {
            map.render();
            view.adjustRotationInternal(rotationDelta, this.anchor_);
        }
    }
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleUpEvent(mapBrowserEvent) {
        if (this.targetPointers.length < 2) {
            const map = mapBrowserEvent.map;
            const view = map.getView();
            view.endInteraction(this.duration_);
            return false;
        } else return true;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleDownEvent(mapBrowserEvent) {
        if (this.targetPointers.length >= 2) {
            const map = mapBrowserEvent.map;
            this.anchor_ = null;
            this.lastAngle_ = undefined;
            this.rotating_ = false;
            this.rotationDelta_ = 0.0;
            if (!this.handlingDownUpSequence) map.getView().beginInteraction();
            return true;
        } else return false;
    }
}
var $f1c9fd8179a5a1ae$export$2e2bcd8739ae039 = $f1c9fd8179a5a1ae$var$PinchRotate;




/**
 * @typedef {Object} Options
 * @property {number} [duration=400] Animation duration in milliseconds.
 */ /**
 * @classdesc
 * Allows the user to zoom the map by pinching with two fingers
 * on a touch screen.
 * @api
 */ class $192a0f59f938342c$var$PinchZoom extends (0, $857d3b7cb7a96f4d$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        const pointerOptions = options;
        if (!pointerOptions.stopDown) pointerOptions.stopDown = (0, $f2508d0c199eb098$export$8f11cee4bdc7e668);
        super(pointerOptions);
        /**
     * @private
     * @type {import("../coordinate.js").Coordinate}
     */ this.anchor_ = null;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 400;
        /**
     * @private
     * @type {number|undefined}
     */ this.lastDistance_ = undefined;
        /**
     * @private
     * @type {number}
     */ this.lastScaleDelta_ = 1;
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */ handleDragEvent(mapBrowserEvent) {
        let scaleDelta = 1.0;
        const touch0 = this.targetPointers[0];
        const touch1 = this.targetPointers[1];
        const dx = touch0.clientX - touch1.clientX;
        const dy = touch0.clientY - touch1.clientY;
        // distance between touches
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (this.lastDistance_ !== undefined) scaleDelta = this.lastDistance_ / distance;
        this.lastDistance_ = distance;
        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (scaleDelta != 1.0) this.lastScaleDelta_ = scaleDelta;
        // scale anchor point.
        const viewportPosition = map.getViewport().getBoundingClientRect();
        const centroid = (0, $857d3b7cb7a96f4d$export$e2a20c553f6c85ce)(this.targetPointers);
        centroid[0] -= viewportPosition.left;
        centroid[1] -= viewportPosition.top;
        this.anchor_ = map.getCoordinateFromPixelInternal(centroid);
        // scale, bypass the resolution constraint
        map.render();
        view.adjustResolutionInternal(scaleDelta, this.anchor_);
    }
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleUpEvent(mapBrowserEvent) {
        if (this.targetPointers.length < 2) {
            const map = mapBrowserEvent.map;
            const view = map.getView();
            const direction = this.lastScaleDelta_ > 1 ? 1 : -1;
            view.endInteraction(this.duration_, direction);
            return false;
        } else return true;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleDownEvent(mapBrowserEvent) {
        if (this.targetPointers.length >= 2) {
            const map = mapBrowserEvent.map;
            this.anchor_ = null;
            this.lastDistance_ = undefined;
            this.lastScaleDelta_ = 1;
            if (!this.handlingDownUpSequence) map.getView().beginInteraction();
            return true;
        } else return false;
    }
}
var $192a0f59f938342c$export$2e2bcd8739ae039 = $192a0f59f938342c$var$PinchZoom;


function $2481032c17f32e52$export$ebe90cb607ad99e(options) {
    options = options ? options : {};
    /** @type {Collection<import("./Interaction.js").default>} */ const interactions = new (0, $35790abb29cb875a$export$2e2bcd8739ae039)();
    const kinetic = new (0, $800d981f81965f58$export$2e2bcd8739ae039)(-0.005, 0.05, 100);
    const altShiftDragRotate = options.altShiftDragRotate !== undefined ? options.altShiftDragRotate : true;
    if (altShiftDragRotate) interactions.push(new (0, $2620cb9e8693456d$export$2e2bcd8739ae039)());
    const doubleClickZoom = options.doubleClickZoom !== undefined ? options.doubleClickZoom : true;
    if (doubleClickZoom) interactions.push(new (0, $a89a5b9d87aabec2$export$2e2bcd8739ae039)({
        delta: options.zoomDelta,
        duration: options.zoomDuration
    }));
    const dragPan = options.dragPan !== undefined ? options.dragPan : true;
    if (dragPan) interactions.push(new (0, $333c6ceed0e31227$export$2e2bcd8739ae039)({
        onFocusOnly: options.onFocusOnly,
        kinetic: kinetic
    }));
    const pinchRotate = options.pinchRotate !== undefined ? options.pinchRotate : true;
    if (pinchRotate) interactions.push(new (0, $f1c9fd8179a5a1ae$export$2e2bcd8739ae039)());
    const pinchZoom = options.pinchZoom !== undefined ? options.pinchZoom : true;
    if (pinchZoom) interactions.push(new (0, $192a0f59f938342c$export$2e2bcd8739ae039)({
        duration: options.zoomDuration
    }));
    const keyboard = options.keyboard !== undefined ? options.keyboard : true;
    if (keyboard) {
        interactions.push(new (0, $3c7957cc8fefc11f$export$2e2bcd8739ae039)());
        interactions.push(new (0, $0dc7cf7cc1249ded$export$2e2bcd8739ae039)({
            delta: options.zoomDelta,
            duration: options.zoomDuration
        }));
    }
    const mouseWheelZoom = options.mouseWheelZoom !== undefined ? options.mouseWheelZoom : true;
    if (mouseWheelZoom) interactions.push(new (0, $b689ca791a679828$export$2e2bcd8739ae039)({
        onFocusOnly: options.onFocusOnly,
        duration: options.zoomDuration
    }));
    const shiftDragZoom = options.shiftDragZoom !== undefined ? options.shiftDragZoom : true;
    if (shiftDragZoom) interactions.push(new (0, $ecb19478543e9da9$export$2e2bcd8739ae039)({
        duration: options.zoomDuration
    }));
    return interactions;
}







/**
 * State of the current frame. Only `pixelRatio`, `time` and `viewState` should
 * be used in applications.
 * @typedef {Object} FrameState
 * @property {number} pixelRatio The pixel ratio of the frame.
 * @property {number} time The time when rendering of the frame was requested.
 * @property {import("./View.js").State} viewState The state of the current view.
 * @property {boolean} animate Animate.
 * @property {import("./transform.js").Transform} coordinateToPixelTransform CoordinateToPixelTransform.
 * @property {import("rbush").default} declutterTree DeclutterTree.
 * @property {null|import("./extent.js").Extent} extent Extent.
 * @property {import("./extent.js").Extent} [nextExtent] Next extent during an animation series.
 * @property {number} index Index.
 * @property {Array<import("./layer/Layer.js").State>} layerStatesArray LayerStatesArray.
 * @property {number} layerIndex LayerIndex.
 * @property {import("./transform.js").Transform} pixelToCoordinateTransform PixelToCoordinateTransform.
 * @property {Array<PostRenderFunction>} postRenderFunctions PostRenderFunctions.
 * @property {import("./size.js").Size} size Size.
 * @property {TileQueue} tileQueue TileQueue.
 * @property {!Object<string, Object<string, boolean>>} usedTiles UsedTiles.
 * @property {Array<number>} viewHints ViewHints.
 * @property {!Object<string, Object<string, boolean>>} wantedTiles WantedTiles.
 * @property {string} mapId The id of the map.
 * @property {Object<string, boolean>} renderTargets Identifiers of previously rendered elements.
 */ /**
 * @typedef {function(Map, ?FrameState): any} PostRenderFunction
 */ /**
 * @typedef {Object} AtPixelOptions
 * @property {undefined|function(import("./layer/Layer.js").default<import("./source/Source").default>): boolean} [layerFilter] Layer filter
 * function. The filter function will receive one argument, the
 * {@link module:ol/layer/Layer~Layer layer-candidate} and it should return a boolean value.
 * Only layers which are visible and for which this function returns `true`
 * will be tested for features. By default, all visible layers will be tested.
 * @property {number} [hitTolerance=0] Hit-detection tolerance in css pixels. Pixels
 * inside the radius around the given position will be checked for features.
 * @property {boolean} [checkWrapped=true] Check-Wrapped Will check for wrapped geometries inside the range of
 *   +/- 1 world width. Works only if a projection is used that can be wrapped.
 */ /**
 * @typedef {Object} MapOptionsInternal
 * @property {Collection<import("./control/Control.js").default>} [controls] Controls.
 * @property {Collection<import("./interaction/Interaction.js").default>} [interactions] Interactions.
 * @property {HTMLElement|Document} keyboardEventTarget KeyboardEventTarget.
 * @property {Collection<import("./Overlay.js").default>} overlays Overlays.
 * @property {Object<string, *>} values Values.
 */ /**
 * @typedef {import("./ObjectEventType").Types|'change:layergroup'|'change:size'|'change:target'|'change:view'} MapObjectEventTypes
 */ /***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *    import("./Observable").OnSignature<MapObjectEventTypes, import("./Object").ObjectEvent, Return> &
 *    import("./Observable").OnSignature<import("./MapBrowserEventType").Types, import("./MapBrowserEvent").default, Return> &
 *    import("./Observable").OnSignature<import("./MapEventType").Types, import("./MapEvent").default, Return> &
 *    import("./Observable").OnSignature<import("./render/EventType").MapRenderEventTypes, import("./render/Event").default, Return> &
 *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|MapObjectEventTypes|
 *      import("./MapBrowserEventType").Types|import("./MapEventType").Types|
 *      import("./render/EventType").MapRenderEventTypes, Return>} MapEventHandler
 */ /**
 * Object literal with config options for the map.
 * @typedef {Object} MapOptions
 * @property {Collection<import("./control/Control.js").default>|Array<import("./control/Control.js").default>} [controls]
 * Controls initially added to the map. If not specified,
 * {@link module:ol/control/defaults.defaults} is used.
 * @property {number} [pixelRatio=window.devicePixelRatio] The ratio between
 * physical pixels and device-independent pixels (dips) on the device.
 * @property {Collection<import("./interaction/Interaction.js").default>|Array<import("./interaction/Interaction.js").default>} [interactions]
 * Interactions that are initially added to the map. If not specified,
 * {@link module:ol/interaction/defaults.defaults} is used.
 * @property {HTMLElement|Document|string} [keyboardEventTarget] The element to
 * listen to keyboard events on. This determines when the `KeyboardPan` and
 * `KeyboardZoom` interactions trigger. For example, if this option is set to
 * `document` the keyboard interactions will always trigger. If this option is
 * not specified, the element the library listens to keyboard events on is the
 * map target (i.e. the user-provided div for the map). If this is not
 * `document`, the target element needs to be focused for key events to be
 * emitted, requiring that the target element has a `tabindex` attribute.
 * @property {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>|LayerGroup} [layers]
 * Layers. If this is not defined, a map with no layers will be rendered. Note
 * that layers are rendered in the order supplied, so if you want, for example,
 * a vector layer to appear on top of a tile layer, it must come after the tile
 * layer.
 * @property {number} [maxTilesLoading=16] Maximum number tiles to load
 * simultaneously.
 * @property {number} [moveTolerance=1] The minimum distance in pixels the
 * cursor must move to be detected as a map move event instead of a click.
 * Increasing this value can make it easier to click on the map.
 * @property {Collection<import("./Overlay.js").default>|Array<import("./Overlay.js").default>} [overlays]
 * Overlays initially added to the map. By default, no overlays are added.
 * @property {HTMLElement|string} [target] The container for the map, either the
 * element itself or the `id` of the element. If not specified at construction
 * time, {@link module:ol/Map~Map#setTarget} must be called for the map to be
 * rendered. If passed by element, the container can be in a secondary document.
 * @property {View|Promise<import("./View.js").ViewOptions>} [view] The map's view.  No layer sources will be
 * fetched unless this is specified at construction time or through
 * {@link module:ol/Map~Map#setView}.
 */ /**
 * @param {import("./layer/Base.js").default} layer Layer.
 */ function $708be23602a41378$var$removeLayerMapProperty(layer) {
    if (layer instanceof (0, $462d96ef30c3e83d$export$2e2bcd8739ae039)) {
        layer.setMapInternal(null);
        return;
    }
    if (layer instanceof (0, $01c910033b035f45$export$2e2bcd8739ae039)) layer.getLayers().forEach($708be23602a41378$var$removeLayerMapProperty);
}
/**
 * @param {import("./layer/Base.js").default} layer Layer.
 * @param {Map} map Map.
 */ function $708be23602a41378$var$setLayerMapProperty(layer, map) {
    if (layer instanceof (0, $462d96ef30c3e83d$export$2e2bcd8739ae039)) {
        layer.setMapInternal(map);
        return;
    }
    if (layer instanceof (0, $01c910033b035f45$export$2e2bcd8739ae039)) {
        const layers = layer.getLayers().getArray();
        for(let i = 0, ii = layers.length; i < ii; ++i)$708be23602a41378$var$setLayerMapProperty(layers[i], map);
    }
}
/**
 * @classdesc
 * The map is the core component of OpenLayers. For a map to render, a view,
 * one or more layers, and a target container are needed:
 *
 *     import Map from 'ol/Map';
 *     import View from 'ol/View';
 *     import TileLayer from 'ol/layer/Tile';
 *     import OSM from 'ol/source/OSM';
 *
 *     const map = new Map({
 *       view: new View({
 *         center: [0, 0],
 *         zoom: 1,
 *       }),
 *       layers: [
 *         new TileLayer({
 *           source: new OSM(),
 *         }),
 *       ],
 *       target: 'map',
 *     });
 *
 * The above snippet creates a map using a {@link module:ol/layer/Tile~TileLayer} to
 * display {@link module:ol/source/OSM~OSM} OSM data and render it to a DOM
 * element with the id `map`.
 *
 * The constructor places a viewport container (with CSS class name
 * `ol-viewport`) in the target element (see `getViewport()`), and then two
 * further elements within the viewport: one with CSS class name
 * `ol-overlaycontainer-stopevent` for controls and some overlays, and one with
 * CSS class name `ol-overlaycontainer` for other overlays (see the `stopEvent`
 * option of {@link module:ol/Overlay~Overlay} for the difference). The map
 * itself is placed in a further element within the viewport.
 *
 * Layers are stored as a {@link module:ol/Collection~Collection} in
 * layerGroups. A top-level group is provided by the library. This is what is
 * accessed by `getLayerGroup` and `setLayerGroup`. Layers entered in the
 * options are added to this group, and `addLayer` and `removeLayer` change the
 * layer collection in the group. `getLayers` is a convenience function for
 * `getLayerGroup().getLayers()`. Note that {@link module:ol/layer/Group~LayerGroup}
 * is a subclass of {@link module:ol/layer/Base~BaseLayer}, so layers entered in the
 * options or added with `addLayer` can be groups, which can contain further
 * groups, and so on.
 *
 * @fires import("./MapBrowserEvent.js").MapBrowserEvent
 * @fires import("./MapEvent.js").MapEvent
 * @fires import("./render/Event.js").default#precompose
 * @fires import("./render/Event.js").default#postcompose
 * @fires import("./render/Event.js").default#rendercomplete
 * @api
 */ class $708be23602a41378$var$Map extends (0, $2fa1993cbde1d34b$export$2e2bcd8739ae039) {
    /**
   * @param {MapOptions} [options] Map options.
   */ constructor(options){
        super();
        options = options || {};
        /***
     * @type {MapEventHandler<import("./events").EventsKey>}
     */ this.on;
        /***
     * @type {MapEventHandler<import("./events").EventsKey>}
     */ this.once;
        /***
     * @type {MapEventHandler<void>}
     */ this.un;
        const optionsInternal = $708be23602a41378$var$createOptionsInternal(options);
        /**
     * @private
     * @type {boolean|undefined}
     */ this.renderComplete_;
        /**
     * @private
     * @type {boolean}
     */ this.loaded_ = true;
        /** @private */ this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this);
        /**
     * @type {number}
     * @private
     */ this.maxTilesLoading_ = options.maxTilesLoading !== undefined ? options.maxTilesLoading : 16;
        /**
     * @private
     * @type {number}
     */ this.pixelRatio_ = options.pixelRatio !== undefined ? options.pixelRatio : (0, $03af6b5c3e46892e$export$6b83a0446fc26f94);
        /**
     * @private
     * @type {*}
     */ this.postRenderTimeoutHandle_;
        /**
     * @private
     * @type {number|undefined}
     */ this.animationDelayKey_;
        /**
     * @private
     */ this.animationDelay_ = this.animationDelay_.bind(this);
        /**
     * @private
     * @type {import("./transform.js").Transform}
     */ this.coordinateToPixelTransform_ = (0, $0e89e72515351739$export$185802fd694ee1f5)();
        /**
     * @private
     * @type {import("./transform.js").Transform}
     */ this.pixelToCoordinateTransform_ = (0, $0e89e72515351739$export$185802fd694ee1f5)();
        /**
     * @private
     * @type {number}
     */ this.frameIndex_ = 0;
        /**
     * @private
     * @type {?FrameState}
     */ this.frameState_ = null;
        /**
     * The extent at the previous 'moveend' event.
     * @private
     * @type {import("./extent.js").Extent}
     */ this.previousExtent_ = null;
        /**
     * @private
     * @type {?import("./events.js").EventsKey}
     */ this.viewPropertyListenerKey_ = null;
        /**
     * @private
     * @type {?import("./events.js").EventsKey}
     */ this.viewChangeListenerKey_ = null;
        /**
     * @private
     * @type {?Array<import("./events.js").EventsKey>}
     */ this.layerGroupPropertyListenerKeys_ = null;
        /**
     * @private
     * @type {!HTMLElement}
     */ this.viewport_ = document.createElement("div");
        this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "");
        this.viewport_.style.position = "relative";
        this.viewport_.style.overflow = "hidden";
        this.viewport_.style.width = "100%";
        this.viewport_.style.height = "100%";
        /**
     * @private
     * @type {!HTMLElement}
     */ this.overlayContainer_ = document.createElement("div");
        this.overlayContainer_.style.position = "absolute";
        this.overlayContainer_.style.zIndex = "0";
        this.overlayContainer_.style.width = "100%";
        this.overlayContainer_.style.height = "100%";
        this.overlayContainer_.style.pointerEvents = "none";
        this.overlayContainer_.className = "ol-overlaycontainer";
        this.viewport_.appendChild(this.overlayContainer_);
        /**
     * @private
     * @type {!HTMLElement}
     */ this.overlayContainerStopEvent_ = document.createElement("div");
        this.overlayContainerStopEvent_.style.position = "absolute";
        this.overlayContainerStopEvent_.style.zIndex = "0";
        this.overlayContainerStopEvent_.style.width = "100%";
        this.overlayContainerStopEvent_.style.height = "100%";
        this.overlayContainerStopEvent_.style.pointerEvents = "none";
        this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent";
        this.viewport_.appendChild(this.overlayContainerStopEvent_);
        /**
     * @private
     * @type {MapBrowserEventHandler}
     */ this.mapBrowserEventHandler_ = null;
        /**
     * @private
     * @type {number}
     */ this.moveTolerance_ = options.moveTolerance;
        /**
     * @private
     * @type {HTMLElement|Document}
     */ this.keyboardEventTarget_ = optionsInternal.keyboardEventTarget;
        /**
     * @private
     * @type {?Array<import("./events.js").EventsKey>}
     */ this.targetChangeHandlerKeys_ = null;
        /**
     * @type {Collection<import("./control/Control.js").default>}
     * @protected
     */ this.controls = optionsInternal.controls || (0, $0d824765261be22c$export$ebe90cb607ad99e)();
        /**
     * @type {Collection<import("./interaction/Interaction.js").default>}
     * @protected
     */ this.interactions = optionsInternal.interactions || (0, $2481032c17f32e52$export$ebe90cb607ad99e)({
            onFocusOnly: true
        });
        /**
     * @type {Collection<import("./Overlay.js").default>}
     * @private
     */ this.overlays_ = optionsInternal.overlays;
        /**
     * A lookup of overlays by id.
     * @private
     * @type {Object<string, import("./Overlay.js").default>}
     */ this.overlayIdIndex_ = {};
        /**
     * @type {import("./renderer/Map.js").default|null}
     * @private
     */ this.renderer_ = null;
        /**
     * @private
     * @type {!Array<PostRenderFunction>}
     */ this.postRenderFunctions_ = [];
        /**
     * @private
     * @type {TileQueue}
     */ this.tileQueue_ = new (0, $29d0c0a4332dda61$export$2e2bcd8739ae039)(this.getTilePriority.bind(this), this.handleTileChange_.bind(this));
        this.addChangeListener((0, $725377ac59843356$export$2e2bcd8739ae039).LAYERGROUP, this.handleLayerGroupChanged_);
        this.addChangeListener((0, $725377ac59843356$export$2e2bcd8739ae039).VIEW, this.handleViewChanged_);
        this.addChangeListener((0, $725377ac59843356$export$2e2bcd8739ae039).SIZE, this.handleSizeChanged_);
        this.addChangeListener((0, $725377ac59843356$export$2e2bcd8739ae039).TARGET, this.handleTargetChanged_);
        // setProperties will trigger the rendering of the map if the map
        // is "defined" already.
        this.setProperties(optionsInternal.values);
        const map = this;
        if (options.view && !(options.view instanceof (0, $82506d42cbd3642d$export$2e2bcd8739ae039))) options.view.then(function(viewOptions) {
            map.setView(new (0, $82506d42cbd3642d$export$2e2bcd8739ae039)(viewOptions));
        });
        this.controls.addEventListener((0, $b9159002a7423f4e$export$2e2bcd8739ae039).ADD, /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent
       */ (function(event) {
            event.element.setMap(this);
        }).bind(this));
        this.controls.addEventListener((0, $b9159002a7423f4e$export$2e2bcd8739ae039).REMOVE, /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent.
       */ (function(event) {
            event.element.setMap(null);
        }).bind(this));
        this.interactions.addEventListener((0, $b9159002a7423f4e$export$2e2bcd8739ae039).ADD, /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */ (function(event) {
            event.element.setMap(this);
        }).bind(this));
        this.interactions.addEventListener((0, $b9159002a7423f4e$export$2e2bcd8739ae039).REMOVE, /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */ (function(event) {
            event.element.setMap(null);
        }).bind(this));
        this.overlays_.addEventListener((0, $b9159002a7423f4e$export$2e2bcd8739ae039).ADD, /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */ (function(event) {
            this.addOverlayInternal_(event.element);
        }).bind(this));
        this.overlays_.addEventListener((0, $b9159002a7423f4e$export$2e2bcd8739ae039).REMOVE, /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */ (function(event) {
            const id = event.element.getId();
            if (id !== undefined) delete this.overlayIdIndex_[id.toString()];
            event.element.setMap(null);
        }).bind(this));
        this.controls.forEach(/**
       * @param {import("./control/Control.js").default} control Control.
       * @this {Map}
       */ (function(control) {
            control.setMap(this);
        }).bind(this));
        this.interactions.forEach(/**
       * @param {import("./interaction/Interaction.js").default} interaction Interaction.
       * @this {Map}
       */ (function(interaction) {
            interaction.setMap(this);
        }).bind(this));
        this.overlays_.forEach(this.addOverlayInternal_.bind(this));
    }
    /**
   * Add the given control to the map.
   * @param {import("./control/Control.js").default} control Control.
   * @api
   */ addControl(control) {
        this.getControls().push(control);
    }
    /**
   * Add the given interaction to the map. If you want to add an interaction
   * at another point of the collection use `getInteractions()` and the methods
   * available on {@link module:ol/Collection~Collection}. This can be used to
   * stop the event propagation from the handleEvent function. The interactions
   * get to handle the events in the reverse order of this collection.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to add.
   * @api
   */ addInteraction(interaction) {
        this.getInteractions().push(interaction);
    }
    /**
   * Adds the given layer to the top of this map. If you want to add a layer
   * elsewhere in the stack, use `getLayers()` and the methods available on
   * {@link module:ol/Collection~Collection}.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @api
   */ addLayer(layer) {
        const layers = this.getLayerGroup().getLayers();
        layers.push(layer);
    }
    /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
   * @private
   */ handleLayerAdd_(event) {
        $708be23602a41378$var$setLayerMapProperty(event.layer, this);
    }
    /**
   * Add the given overlay to the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @api
   */ addOverlay(overlay) {
        this.getOverlays().push(overlay);
    }
    /**
   * This deals with map's overlay collection changes.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @private
   */ addOverlayInternal_(overlay) {
        const id = overlay.getId();
        if (id !== undefined) this.overlayIdIndex_[id.toString()] = overlay;
        overlay.setMap(this);
    }
    /**
   *
   * Clean up.
   */ disposeInternal() {
        this.controls.clear();
        this.interactions.clear();
        this.overlays_.clear();
        this.setTarget(null);
        super.disposeInternal();
    }
    /**
   * Detect features that intersect a pixel on the viewport, and execute a
   * callback with each intersecting feature. Layers included in the detection can
   * be configured through the `layerFilter` option in `options`.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {function(import("./Feature.js").FeatureLike, import("./layer/Layer.js").default<import("./source/Source").default>, import("./geom/SimpleGeometry.js").default): T} callback Feature callback. The callback will be
   *     called with two arguments. The first argument is one
   *     {@link module:ol/Feature~Feature feature} or
   *     {@link module:ol/render/Feature~RenderFeature render feature} at the pixel, the second is
   *     the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
   *     unmanaged layers. To stop detection, callback functions can return a
   *     truthy value.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {T|undefined} Callback result, i.e. the return value of last
   * callback execution, or the first truthy callback return value.
   * @template T
   * @api
   */ forEachFeatureAtPixel(pixel, callback, options) {
        if (!this.frameState_ || !this.renderer_) return;
        const coordinate = this.getCoordinateFromPixelInternal(pixel);
        options = options !== undefined ? options : {};
        const hitTolerance = options.hitTolerance !== undefined ? options.hitTolerance : 0;
        const layerFilter = options.layerFilter !== undefined ? options.layerFilter : (0, $f2508d0c199eb098$export$22e23a2304399231);
        const checkWrapped = options.checkWrapped !== false;
        return this.renderer_.forEachFeatureAtCoordinate(coordinate, this.frameState_, hitTolerance, checkWrapped, callback, null, layerFilter, null);
    }
    /**
   * Get all features that intersect a pixel on the viewport.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {Array<import("./Feature.js").FeatureLike>} The detected features or
   * an empty array if none were found.
   * @api
   */ getFeaturesAtPixel(pixel, options) {
        const features = [];
        this.forEachFeatureAtPixel(pixel, function(feature) {
            features.push(feature);
        }, options);
        return features;
    }
    /**
   * Get all layers from all layer groups.
   * @return {Array<import("./layer/Layer.js").default>} Layers.
   * @api
   */ getAllLayers() {
        const layers = [];
        function addLayersFrom(layerGroup) {
            layerGroup.forEach(function(layer) {
                if (layer instanceof (0, $01c910033b035f45$export$2e2bcd8739ae039)) addLayersFrom(layer.getLayers());
                else layers.push(layer);
            });
        }
        addLayersFrom(this.getLayers());
        return layers;
    }
    /**
   * Detect if features intersect a pixel on the viewport. Layers included in the
   * detection can be configured through the `layerFilter` option.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {boolean} Is there a feature at the given pixel?
   * @api
   */ hasFeatureAtPixel(pixel, options) {
        if (!this.frameState_ || !this.renderer_) return false;
        const coordinate = this.getCoordinateFromPixelInternal(pixel);
        options = options !== undefined ? options : {};
        const layerFilter = options.layerFilter !== undefined ? options.layerFilter : (0, $f2508d0c199eb098$export$22e23a2304399231);
        const hitTolerance = options.hitTolerance !== undefined ? options.hitTolerance : 0;
        const checkWrapped = options.checkWrapped !== false;
        return this.renderer_.hasFeatureAtCoordinate(coordinate, this.frameState_, hitTolerance, checkWrapped, layerFilter, null);
    }
    /**
   * Returns the coordinate in user projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   * @api
   */ getEventCoordinate(event) {
        return this.getCoordinateFromPixel(this.getEventPixel(event));
    }
    /**
   * Returns the coordinate in view projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   */ getEventCoordinateInternal(event) {
        return this.getCoordinateFromPixelInternal(this.getEventPixel(event));
    }
    /**
   * Returns the map pixel position for a browser event relative to the viewport.
   * @param {UIEvent} event Event.
   * @return {import("./pixel.js").Pixel} Pixel.
   * @api
   */ getEventPixel(event) {
        const viewportPosition = this.viewport_.getBoundingClientRect();
        const eventPosition = //FIXME Are we really calling this with a TouchEvent anywhere?
        "changedTouches" in event ? /** @type {TouchEvent} */ event.changedTouches[0] : event;
        return [
            eventPosition.clientX - viewportPosition.left,
            eventPosition.clientY - viewportPosition.top, 
        ];
    }
    /**
   * Get the target in which this map is rendered.
   * Note that this returns what is entered as an option or in setTarget:
   * if that was an element, it returns an element; if a string, it returns that.
   * @return {HTMLElement|string|undefined} The Element or id of the Element that the
   *     map is rendered in.
   * @observable
   * @api
   */ getTarget() {
        return /** @type {HTMLElement|string|undefined} */ this.get((0, $725377ac59843356$export$2e2bcd8739ae039).TARGET);
    }
    /**
   * Get the DOM element into which this map is rendered. In contrast to
   * `getTarget` this method always return an `Element`, or `null` if the
   * map has no target.
   * @return {HTMLElement} The element that the map is rendered in.
   * @api
   */ getTargetElement() {
        const target = this.getTarget();
        if (target !== undefined) return typeof target === "string" ? document.getElementById(target) : target;
        else return null;
    }
    /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * user projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   * @api
   */ getCoordinateFromPixel(pixel) {
        return (0, $0a1495ed54ce69a9$export$698f563af1ba02a5)(this.getCoordinateFromPixelInternal(pixel), this.getView().getProjection());
    }
    /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * map view projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   */ getCoordinateFromPixelInternal(pixel) {
        const frameState = this.frameState_;
        if (!frameState) return null;
        else return (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(frameState.pixelToCoordinateTransform, pixel.slice());
    }
    /**
   * Get the map controls. Modifying this collection changes the controls
   * associated with the map.
   * @return {Collection<import("./control/Control.js").default>} Controls.
   * @api
   */ getControls() {
        return this.controls;
    }
    /**
   * Get the map overlays. Modifying this collection changes the overlays
   * associated with the map.
   * @return {Collection<import("./Overlay.js").default>} Overlays.
   * @api
   */ getOverlays() {
        return this.overlays_;
    }
    /**
   * Get an overlay by its identifier (the value returned by overlay.getId()).
   * Note that the index treats string and numeric identifiers as the same. So
   * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
   * @param {string|number} id Overlay identifier.
   * @return {import("./Overlay.js").default} Overlay.
   * @api
   */ getOverlayById(id) {
        const overlay = this.overlayIdIndex_[id.toString()];
        return overlay !== undefined ? overlay : null;
    }
    /**
   * Get the map interactions. Modifying this collection changes the interactions
   * associated with the map.
   *
   * Interactions are used for e.g. pan, zoom and rotate.
   * @return {Collection<import("./interaction/Interaction.js").default>} Interactions.
   * @api
   */ getInteractions() {
        return this.interactions;
    }
    /**
   * Get the layergroup associated with this map.
   * @return {LayerGroup} A layer group containing the layers in this map.
   * @observable
   * @api
   */ getLayerGroup() {
        return /** @type {LayerGroup} */ this.get((0, $725377ac59843356$export$2e2bcd8739ae039).LAYERGROUP);
    }
    /**
   * Clear any existing layers and add layers to the map.
   * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
   * @api
   */ setLayers(layers) {
        const group = this.getLayerGroup();
        if (layers instanceof (0, $35790abb29cb875a$export$2e2bcd8739ae039)) {
            group.setLayers(layers);
            return;
        }
        const collection = group.getLayers();
        collection.clear();
        collection.extend(layers);
    }
    /**
   * Get the collection of layers associated with this map.
   * @return {!Collection<import("./layer/Base.js").default>} Layers.
   * @api
   */ getLayers() {
        const layers = this.getLayerGroup().getLayers();
        return layers;
    }
    /**
   * @return {boolean} Layers have sources that are still loading.
   */ getLoadingOrNotReady() {
        const layerStatesArray = this.getLayerGroup().getLayerStatesArray();
        for(let i = 0, ii = layerStatesArray.length; i < ii; ++i){
            const state = layerStatesArray[i];
            if (!state.visible) continue;
            const renderer = state.layer.getRenderer();
            if (renderer && !renderer.ready) return true;
            const source = state.layer.getSource();
            if (source && source.loading) return true;
        }
        return false;
    }
    /**
   * Get the pixel for a coordinate.  This takes a coordinate in the user
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   * @api
   */ getPixelFromCoordinate(coordinate) {
        const viewCoordinate = (0, $0a1495ed54ce69a9$export$d4b8ec0b96db1ee2)(coordinate, this.getView().getProjection());
        return this.getPixelFromCoordinateInternal(viewCoordinate);
    }
    /**
   * Get the pixel for a coordinate.  This takes a coordinate in the map view
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   */ getPixelFromCoordinateInternal(coordinate) {
        const frameState = this.frameState_;
        if (!frameState) return null;
        else return (0, $0e89e72515351739$export$5635d7ef4b8fee1c)(frameState.coordinateToPixelTransform, coordinate.slice(0, 2));
    }
    /**
   * Get the map renderer.
   * @return {import("./renderer/Map.js").default|null} Renderer
   */ getRenderer() {
        return this.renderer_;
    }
    /**
   * Get the size of this map.
   * @return {import("./size.js").Size|undefined} The size in pixels of the map in the DOM.
   * @observable
   * @api
   */ getSize() {
        return /** @type {import("./size.js").Size|undefined} */ this.get((0, $725377ac59843356$export$2e2bcd8739ae039).SIZE);
    }
    /**
   * Get the view associated with this map. A view manages properties such as
   * center and resolution.
   * @return {View} The view that controls this map.
   * @observable
   * @api
   */ getView() {
        return /** @type {View} */ this.get((0, $725377ac59843356$export$2e2bcd8739ae039).VIEW);
    }
    /**
   * Get the element that serves as the map viewport.
   * @return {HTMLElement} Viewport.
   * @api
   */ getViewport() {
        return this.viewport_;
    }
    /**
   * Get the element that serves as the container for overlays.  Elements added to
   * this container will let mousedown and touchstart events through to the map,
   * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
   * events.
   * @return {!HTMLElement} The map's overlay container.
   */ getOverlayContainer() {
        return this.overlayContainer_;
    }
    /**
   * Get the element that serves as a container for overlays that don't allow
   * event propagation. Elements added to this container won't let mousedown and
   * touchstart events through to the map, so clicks and gestures on an overlay
   * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
   * @return {!HTMLElement} The map's overlay container that stops events.
   */ getOverlayContainerStopEvent() {
        return this.overlayContainerStopEvent_;
    }
    /**
   * @return {!Document} The document where the map is displayed.
   */ getOwnerDocument() {
        const targetElement = this.getTargetElement();
        return targetElement ? targetElement.ownerDocument : document;
    }
    /**
   * @param {import("./Tile.js").default} tile Tile.
   * @param {string} tileSourceKey Tile source key.
   * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
   * @param {number} tileResolution Tile resolution.
   * @return {number} Tile priority.
   */ getTilePriority(tile, tileSourceKey, tileCenter, tileResolution) {
        return (0, $29d0c0a4332dda61$export$f08ad5eceeff5d45)(this.frameState_, tile, tileSourceKey, tileCenter, tileResolution);
    }
    /**
   * @param {UIEvent} browserEvent Browser event.
   * @param {string} [type] Type.
   */ handleBrowserEvent(browserEvent, type) {
        type = type || browserEvent.type;
        const mapBrowserEvent = new (0, $ba9c53d288d659c0$export$2e2bcd8739ae039)(type, this, browserEvent);
        this.handleMapBrowserEvent(mapBrowserEvent);
    }
    /**
   * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
   */ handleMapBrowserEvent(mapBrowserEvent) {
        if (!this.frameState_) // With no view defined, we cannot translate pixels into geographical
        // coordinates so interactions cannot be used.
        return;
        const originalEvent = mapBrowserEvent.originalEvent;
        const eventType = originalEvent.type;
        if (eventType === (0, $59a13296ea682fba$export$2e2bcd8739ae039).POINTERDOWN || eventType === (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).WHEEL || eventType === (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).KEYDOWN) {
            const doc = this.getOwnerDocument();
            const rootNode = this.viewport_.getRootNode ? this.viewport_.getRootNode() : doc;
            const target = originalEvent.target;
            if (// Abort if the target is a child of the container for elements whose events are not meant
            // to be handled by map interactions.
            this.overlayContainerStopEvent_.contains(target) || // Abort if the event target is a child of the container that is no longer in the page.
            // It's possible for the target to no longer be in the page if it has been removed in an
            // event listener, this might happen in a Control that recreates it's content based on
            // user interaction either manually or via a render in something like https://reactjs.org/
            !(rootNode === doc ? doc.documentElement : rootNode).contains(target)) return;
        }
        mapBrowserEvent.frameState = this.frameState_;
        if (this.dispatchEvent(mapBrowserEvent) !== false) {
            const interactionsArray = this.getInteractions().getArray().slice();
            for(let i = interactionsArray.length - 1; i >= 0; i--){
                const interaction = interactionsArray[i];
                if (interaction.getMap() !== this || !interaction.getActive() || !this.getTargetElement()) continue;
                const cont = interaction.handleEvent(mapBrowserEvent);
                if (!cont || mapBrowserEvent.propagationStopped) break;
            }
        }
    }
    /**
   * @protected
   */ handlePostRender() {
        const frameState = this.frameState_;
        // Manage the tile queue
        // Image loads are expensive and a limited resource, so try to use them
        // efficiently:
        // * When the view is static we allow a large number of parallel tile loads
        //   to complete the frame as quickly as possible.
        // * When animating or interacting, image loads can cause janks, so we reduce
        //   the maximum number of loads per frame and limit the number of parallel
        //   tile loads to remain reactive to view changes and to reduce the chance of
        //   loading tiles that will quickly disappear from view.
        const tileQueue = this.tileQueue_;
        if (!tileQueue.isEmpty()) {
            let maxTotalLoading = this.maxTilesLoading_;
            let maxNewLoads = maxTotalLoading;
            if (frameState) {
                const hints = frameState.viewHints;
                if (hints[(0, $15e38d2d645d76ee$export$2e2bcd8739ae039).ANIMATING] || hints[(0, $15e38d2d645d76ee$export$2e2bcd8739ae039).INTERACTING]) {
                    const lowOnFrameBudget = Date.now() - frameState.time > 8;
                    maxTotalLoading = lowOnFrameBudget ? 0 : 8;
                    maxNewLoads = lowOnFrameBudget ? 0 : 2;
                }
            }
            if (tileQueue.getTilesLoading() < maxTotalLoading) {
                tileQueue.reprioritize(); // FIXME only call if view has changed
                tileQueue.loadMoreTiles(maxTotalLoading, maxNewLoads);
            }
        }
        if (frameState && this.renderer_ && !frameState.animate) {
            if (this.renderComplete_ === true) {
                if (this.hasListener((0, $ed38d21f8bccd31c$export$2e2bcd8739ae039).RENDERCOMPLETE)) this.renderer_.dispatchRenderEvent((0, $ed38d21f8bccd31c$export$2e2bcd8739ae039).RENDERCOMPLETE, frameState);
                if (this.loaded_ === false) {
                    this.loaded_ = true;
                    this.dispatchEvent(new (0, $9c1b44f42e09dcdb$export$2e2bcd8739ae039)((0, $ce154dc3396719ab$export$2e2bcd8739ae039).LOADEND, this, frameState));
                }
            } else if (this.loaded_ === true) {
                this.loaded_ = false;
                this.dispatchEvent(new (0, $9c1b44f42e09dcdb$export$2e2bcd8739ae039)((0, $ce154dc3396719ab$export$2e2bcd8739ae039).LOADSTART, this, frameState));
            }
        }
        const postRenderFunctions = this.postRenderFunctions_;
        for(let i = 0, ii = postRenderFunctions.length; i < ii; ++i)postRenderFunctions[i](this, frameState);
        postRenderFunctions.length = 0;
    }
    /**
   * @private
   */ handleSizeChanged_() {
        if (this.getView() && !this.getView().getAnimating()) this.getView().resolveConstraints(0);
        this.render();
    }
    /**
   * @private
   */ handleTargetChanged_() {
        if (this.mapBrowserEventHandler_) {
            for(let i = 0, ii = this.targetChangeHandlerKeys_.length; i < ii; ++i)(0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(this.targetChangeHandlerKeys_[i]);
            this.targetChangeHandlerKeys_ = null;
            this.viewport_.removeEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CONTEXTMENU, this.boundHandleBrowserEvent_);
            this.viewport_.removeEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).WHEEL, this.boundHandleBrowserEvent_);
            this.mapBrowserEventHandler_.dispose();
            this.mapBrowserEventHandler_ = null;
            (0, $51108d26d56c4955$export$1d0aa160432dfea5)(this.viewport_);
        }
        // target may be undefined, null, a string or an Element.
        // If it's a string we convert it to an Element before proceeding.
        // If it's not now an Element we remove the viewport from the DOM.
        // If it's an Element we append the viewport element to it.
        const targetElement = this.getTargetElement();
        if (!targetElement) {
            if (this.renderer_) {
                clearTimeout(this.postRenderTimeoutHandle_);
                this.postRenderTimeoutHandle_ = undefined;
                this.postRenderFunctions_.length = 0;
                this.renderer_.dispose();
                this.renderer_ = null;
            }
            if (this.animationDelayKey_) {
                cancelAnimationFrame(this.animationDelayKey_);
                this.animationDelayKey_ = undefined;
            }
        } else {
            targetElement.appendChild(this.viewport_);
            if (!this.renderer_) this.renderer_ = new (0, $867f2cb77278f7f3$export$2e2bcd8739ae039)(this);
            this.mapBrowserEventHandler_ = new (0, $0c184e5ce80dd4b4$export$2e2bcd8739ae039)(this, this.moveTolerance_);
            for(const key in 0, $59d0e10837112e72$export$2e2bcd8739ae039)this.mapBrowserEventHandler_.addEventListener((0, $59d0e10837112e72$export$2e2bcd8739ae039)[key], this.handleMapBrowserEvent.bind(this));
            this.viewport_.addEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CONTEXTMENU, this.boundHandleBrowserEvent_, false);
            this.viewport_.addEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).WHEEL, this.boundHandleBrowserEvent_, (0, $03af6b5c3e46892e$export$f751ce96c6c4e4fc) ? {
                passive: false
            } : false);
            const defaultView = this.getOwnerDocument().defaultView;
            const keyboardEventTarget = !this.keyboardEventTarget_ ? targetElement : this.keyboardEventTarget_;
            this.targetChangeHandlerKeys_ = [
                (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(keyboardEventTarget, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).KEYDOWN, this.handleBrowserEvent, this),
                (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(keyboardEventTarget, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).KEYPRESS, this.handleBrowserEvent, this),
                (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(defaultView, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).RESIZE, this.updateSize, this), 
            ];
        }
        this.updateSize();
    // updateSize calls setSize, so no need to call this.render
    // ourselves here.
    }
    /**
   * @private
   */ handleTileChange_() {
        this.render();
    }
    /**
   * @private
   */ handleViewPropertyChanged_() {
        this.render();
    }
    /**
   * @private
   */ handleViewChanged_() {
        if (this.viewPropertyListenerKey_) {
            (0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(this.viewPropertyListenerKey_);
            this.viewPropertyListenerKey_ = null;
        }
        if (this.viewChangeListenerKey_) {
            (0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921)(this.viewChangeListenerKey_);
            this.viewChangeListenerKey_ = null;
        }
        const view = this.getView();
        if (view) {
            this.updateViewportSize_();
            this.viewPropertyListenerKey_ = (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(view, (0, $2e111f792ae6efbb$export$2e2bcd8739ae039).PROPERTYCHANGE, this.handleViewPropertyChanged_, this);
            this.viewChangeListenerKey_ = (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(view, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE, this.handleViewPropertyChanged_, this);
            view.resolveConstraints(0);
        }
        this.render();
    }
    /**
   * @private
   */ handleLayerGroupChanged_() {
        if (this.layerGroupPropertyListenerKeys_) {
            this.layerGroupPropertyListenerKeys_.forEach((0, $b5beb2fac6e98c10$export$b0a21c8b3c1c921));
            this.layerGroupPropertyListenerKeys_ = null;
        }
        const layerGroup = this.getLayerGroup();
        if (layerGroup) {
            this.handleLayerAdd_(new (0, $01c910033b035f45$export$2f5ff21d758d25a7)("addlayer", layerGroup));
            this.layerGroupPropertyListenerKeys_ = [
                (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(layerGroup, (0, $2e111f792ae6efbb$export$2e2bcd8739ae039).PROPERTYCHANGE, this.render, this),
                (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(layerGroup, (0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE, this.render, this),
                (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(layerGroup, "addlayer", this.handleLayerAdd_, this),
                (0, $b5beb2fac6e98c10$export$63174c828edd6ff8)(layerGroup, "removelayer", this.handleLayerRemove_, this), 
            ];
        }
        this.render();
    }
    /**
   * @return {boolean} Is rendered.
   */ isRendered() {
        return !!this.frameState_;
    }
    /**
   * @private
   */ animationDelay_() {
        this.animationDelayKey_ = undefined;
        this.renderFrame_(Date.now());
    }
    /**
   * Requests an immediate render in a synchronous manner.
   * @api
   */ renderSync() {
        if (this.animationDelayKey_) cancelAnimationFrame(this.animationDelayKey_);
        this.animationDelay_();
    }
    /**
   * Redraws all text after new fonts have loaded
   */ redrawText() {
        const layerStates = this.getLayerGroup().getLayerStatesArray();
        for(let i = 0, ii = layerStates.length; i < ii; ++i){
            const layer = layerStates[i].layer;
            if (layer.hasRenderer()) layer.getRenderer().handleFontsChanged();
        }
    }
    /**
   * Request a map rendering (at the next animation frame).
   * @api
   */ render() {
        if (this.renderer_ && this.animationDelayKey_ === undefined) this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_);
    }
    /**
   * Remove the given control from the map.
   * @param {import("./control/Control.js").default} control Control.
   * @return {import("./control/Control.js").default|undefined} The removed control (or undefined
   *     if the control was not found).
   * @api
   */ removeControl(control) {
        return this.getControls().remove(control);
    }
    /**
   * Remove the given interaction from the map.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
   * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
   *     undefined if the interaction was not found).
   * @api
   */ removeInteraction(interaction) {
        return this.getInteractions().remove(interaction);
    }
    /**
   * Removes the given layer from the map.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
   *     layer was not found).
   * @api
   */ removeLayer(layer) {
        const layers = this.getLayerGroup().getLayers();
        return layers.remove(layer);
    }
    /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
   * @private
   */ handleLayerRemove_(event) {
        $708be23602a41378$var$removeLayerMapProperty(event.layer);
    }
    /**
   * Remove the given overlay from the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
   *     if the overlay was not found).
   * @api
   */ removeOverlay(overlay) {
        return this.getOverlays().remove(overlay);
    }
    /**
   * @param {number} time Time.
   * @private
   */ renderFrame_(time) {
        const size = this.getSize();
        const view = this.getView();
        const previousFrameState = this.frameState_;
        /** @type {?FrameState} */ let frameState = null;
        if (size !== undefined && (0, $670ace09156a4e14$export$622c471beb1693c7)(size) && view && view.isDef()) {
            const viewHints = view.getHints(this.frameState_ ? this.frameState_.viewHints : undefined);
            const viewState = view.getState();
            frameState = {
                animate: false,
                coordinateToPixelTransform: this.coordinateToPixelTransform_,
                declutterTree: null,
                extent: (0, $ee16b51bb9f86500$export$13ba650faf8308)(viewState.center, viewState.resolution, viewState.rotation, size),
                index: this.frameIndex_++,
                layerIndex: 0,
                layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
                pixelRatio: this.pixelRatio_,
                pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
                postRenderFunctions: [],
                size: size,
                tileQueue: this.tileQueue_,
                time: time,
                usedTiles: {},
                viewState: viewState,
                viewHints: viewHints,
                wantedTiles: {},
                mapId: (0, $386903518769f502$export$5e82334337e0f204)(this),
                renderTargets: {}
            };
            if (viewState.nextCenter && viewState.nextResolution) {
                const rotation = isNaN(viewState.nextRotation) ? viewState.rotation : viewState.nextRotation;
                frameState.nextExtent = (0, $ee16b51bb9f86500$export$13ba650faf8308)(viewState.nextCenter, viewState.nextResolution, rotation, size);
            }
        }
        this.frameState_ = frameState;
        this.renderer_.renderFrame(frameState);
        if (frameState) {
            if (frameState.animate) this.render();
            Array.prototype.push.apply(this.postRenderFunctions_, frameState.postRenderFunctions);
            if (previousFrameState) {
                const moveStart = !this.previousExtent_ || !(0, $ee16b51bb9f86500$export$dd1bc94b04021eeb)(this.previousExtent_) && !(0, $ee16b51bb9f86500$export$e9bab7fafb253603)(frameState.extent, this.previousExtent_);
                if (moveStart) {
                    this.dispatchEvent(new (0, $9c1b44f42e09dcdb$export$2e2bcd8739ae039)((0, $ce154dc3396719ab$export$2e2bcd8739ae039).MOVESTART, this, previousFrameState));
                    this.previousExtent_ = (0, $ee16b51bb9f86500$export$3e2152b047719fa1)(this.previousExtent_);
                }
            }
            const idle = this.previousExtent_ && !frameState.viewHints[(0, $15e38d2d645d76ee$export$2e2bcd8739ae039).ANIMATING] && !frameState.viewHints[(0, $15e38d2d645d76ee$export$2e2bcd8739ae039).INTERACTING] && !(0, $ee16b51bb9f86500$export$e9bab7fafb253603)(frameState.extent, this.previousExtent_);
            if (idle) {
                this.dispatchEvent(new (0, $9c1b44f42e09dcdb$export$2e2bcd8739ae039)((0, $ce154dc3396719ab$export$2e2bcd8739ae039).MOVEEND, this, frameState));
                (0, $ee16b51bb9f86500$export$9cd59f9826255e47)(frameState.extent, this.previousExtent_);
            }
        }
        this.dispatchEvent(new (0, $9c1b44f42e09dcdb$export$2e2bcd8739ae039)((0, $ce154dc3396719ab$export$2e2bcd8739ae039).POSTRENDER, this, frameState));
        this.renderComplete_ = this.hasListener((0, $ce154dc3396719ab$export$2e2bcd8739ae039).LOADSTART) || this.hasListener((0, $ce154dc3396719ab$export$2e2bcd8739ae039).LOADEND) || this.hasListener((0, $ed38d21f8bccd31c$export$2e2bcd8739ae039).RENDERCOMPLETE) ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady() : undefined;
        if (!this.postRenderTimeoutHandle_) this.postRenderTimeoutHandle_ = setTimeout(()=>{
            this.postRenderTimeoutHandle_ = undefined;
            this.handlePostRender();
        }, 0);
    }
    /**
   * Sets the layergroup of this map.
   * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
   * @observable
   * @api
   */ setLayerGroup(layerGroup) {
        const oldLayerGroup = this.getLayerGroup();
        if (oldLayerGroup) this.handleLayerRemove_(new (0, $01c910033b035f45$export$2f5ff21d758d25a7)("removelayer", oldLayerGroup));
        this.set((0, $725377ac59843356$export$2e2bcd8739ae039).LAYERGROUP, layerGroup);
    }
    /**
   * Set the size of this map.
   * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
   * @observable
   * @api
   */ setSize(size) {
        this.set((0, $725377ac59843356$export$2e2bcd8739ae039).SIZE, size);
    }
    /**
   * Set the target element to render this map into.
   * @param {HTMLElement|string} [target] The Element or id of the Element
   *     that the map is rendered in.
   * @observable
   * @api
   */ setTarget(target) {
        this.set((0, $725377ac59843356$export$2e2bcd8739ae039).TARGET, target);
    }
    /**
   * Set the view for this map.
   * @param {View|Promise<import("./View.js").ViewOptions>} view The view that controls this map.
   * It is also possible to pass a promise that resolves to options for constructing a view.  This
   * alternative allows view properties to be resolved by sources or other components that load
   * view-related metadata.
   * @observable
   * @api
   */ setView(view) {
        if (!view || view instanceof (0, $82506d42cbd3642d$export$2e2bcd8739ae039)) {
            this.set((0, $725377ac59843356$export$2e2bcd8739ae039).VIEW, view);
            return;
        }
        this.set((0, $725377ac59843356$export$2e2bcd8739ae039).VIEW, new (0, $82506d42cbd3642d$export$2e2bcd8739ae039)());
        const map = this;
        view.then(function(viewOptions) {
            map.setView(new (0, $82506d42cbd3642d$export$2e2bcd8739ae039)(viewOptions));
        });
    }
    /**
   * Force a recalculation of the map viewport size.  This should be called when
   * third-party code changes the size of the map viewport.
   * @api
   */ updateSize() {
        const targetElement = this.getTargetElement();
        let size = undefined;
        if (targetElement) {
            const computedStyle = getComputedStyle(targetElement);
            const width = targetElement.offsetWidth - parseFloat(computedStyle["borderLeftWidth"]) - parseFloat(computedStyle["paddingLeft"]) - parseFloat(computedStyle["paddingRight"]) - parseFloat(computedStyle["borderRightWidth"]);
            const height = targetElement.offsetHeight - parseFloat(computedStyle["borderTopWidth"]) - parseFloat(computedStyle["paddingTop"]) - parseFloat(computedStyle["paddingBottom"]) - parseFloat(computedStyle["borderBottomWidth"]);
            if (!isNaN(width) && !isNaN(height)) {
                size = [
                    width,
                    height
                ];
                if (!(0, $670ace09156a4e14$export$622c471beb1693c7)(size) && !!(targetElement.offsetWidth || targetElement.offsetHeight || targetElement.getClientRects().length)) // eslint-disable-next-line
                console.warn("No map visible because the map container's width or height are 0.");
            }
        }
        this.setSize(size);
        this.updateViewportSize_();
    }
    /**
   * Recomputes the viewport size and save it on the view object (if any)
   * @private
   */ updateViewportSize_() {
        const view = this.getView();
        if (view) {
            let size = undefined;
            const computedStyle = getComputedStyle(this.viewport_);
            if (computedStyle.width && computedStyle.height) size = [
                parseInt(computedStyle.width, 10),
                parseInt(computedStyle.height, 10), 
            ];
            view.setViewportSize(size);
        }
    }
}
/**
 * @param {MapOptions} options Map options.
 * @return {MapOptionsInternal} Internal map options.
 */ function $708be23602a41378$var$createOptionsInternal(options) {
    /**
   * @type {HTMLElement|Document}
   */ let keyboardEventTarget = null;
    if (options.keyboardEventTarget !== undefined) keyboardEventTarget = typeof options.keyboardEventTarget === "string" ? document.getElementById(options.keyboardEventTarget) : options.keyboardEventTarget;
    /**
   * @type {Object<string, *>}
   */ const values = {};
    const layerGroup = options.layers && typeof /** @type {?} */ options.layers.getLayers === "function" ? options.layers : new (0, $01c910033b035f45$export$2e2bcd8739ae039)({
        layers: options.layers
    });
    values[(0, $725377ac59843356$export$2e2bcd8739ae039).LAYERGROUP] = layerGroup;
    values[(0, $725377ac59843356$export$2e2bcd8739ae039).TARGET] = options.target;
    values[(0, $725377ac59843356$export$2e2bcd8739ae039).VIEW] = options.view instanceof (0, $82506d42cbd3642d$export$2e2bcd8739ae039) ? options.view : new (0, $82506d42cbd3642d$export$2e2bcd8739ae039)();
    /** @type {Collection<import("./control/Control.js").default>} */ let controls;
    if (options.controls !== undefined) {
        if (Array.isArray(options.controls)) controls = new (0, $35790abb29cb875a$export$2e2bcd8739ae039)(options.controls.slice());
        else {
            (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(typeof /** @type {?} */ options.controls.getArray === "function", 47); // Expected `controls` to be an array or an `import("./Collection.js").Collection`
            controls = options.controls;
        }
    }
    /** @type {Collection<import("./interaction/Interaction").default>} */ let interactions;
    if (options.interactions !== undefined) {
        if (Array.isArray(options.interactions)) interactions = new (0, $35790abb29cb875a$export$2e2bcd8739ae039)(options.interactions.slice());
        else {
            (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(typeof /** @type {?} */ options.interactions.getArray === "function", 48); // Expected `interactions` to be an array or an `import("./Collection.js").Collection`
            interactions = options.interactions;
        }
    }
    /** @type {Collection<import("./Overlay.js").default>} */ let overlays;
    if (options.overlays !== undefined) {
        if (Array.isArray(options.overlays)) overlays = new (0, $35790abb29cb875a$export$2e2bcd8739ae039)(options.overlays.slice());
        else {
            (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(typeof /** @type {?} */ options.overlays.getArray === "function", 49); // Expected `overlays` to be an array or an `import("./Collection.js").Collection`
            overlays = options.overlays;
        }
    } else overlays = new (0, $35790abb29cb875a$export$2e2bcd8739ae039)();
    return {
        controls: controls,
        interactions: interactions,
        keyboardEventTarget: keyboardEventTarget,
        overlays: overlays,
        values: values
    };
}
var $708be23602a41378$export$2e2bcd8739ae039 = $708be23602a41378$var$Map;



/**
 * @typedef {Object} Entry
 * @property {string} key_ Key.
 * @property {Object} newer Newer.
 * @property {Object} older Older.
 * @property {*} value_ Value.
 */ /**
 * @classdesc
 * Implements a Least-Recently-Used cache where the keys do not conflict with
 * Object's properties (e.g. 'hasOwnProperty' is not allowed as a key). Expiring
 * items from the cache is the responsibility of the user.
 *
 * @fires import("../events/Event.js").default
 * @template T
 */ class $690d819ab9d472df$var$LRUCache {
    /**
   * @param {number} [highWaterMark] High water mark.
   */ constructor(highWaterMark){
        /**
     * Desired max cache size after expireCache(). If set to 0, no cache entries
     * will be pruned at all.
     * @type {number}
     */ this.highWaterMark = highWaterMark !== undefined ? highWaterMark : 2048;
        /**
     * @private
     * @type {number}
     */ this.count_ = 0;
        /**
     * @private
     * @type {!Object<string, Entry>}
     */ this.entries_ = {};
        /**
     * @private
     * @type {?Entry}
     */ this.oldest_ = null;
        /**
     * @private
     * @type {?Entry}
     */ this.newest_ = null;
    }
    /**
   * @return {boolean} Can expire cache.
   */ canExpireCache() {
        return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
    }
    /**
   * Expire the cache.
   * @param {!Object<string, boolean>} [keep] Keys to keep. To be implemented by subclasses.
   */ expireCache(keep) {
        while(this.canExpireCache())this.pop();
    }
    /**
   * FIXME empty description for jsdoc
   */ clear() {
        this.count_ = 0;
        this.entries_ = {};
        this.oldest_ = null;
        this.newest_ = null;
    }
    /**
   * @param {string} key Key.
   * @return {boolean} Contains key.
   */ containsKey(key) {
        return this.entries_.hasOwnProperty(key);
    }
    /**
   * @param {function(T, string, LRUCache<T>): ?} f The function
   *     to call for every entry from the oldest to the newer. This function takes
   *     3 arguments (the entry value, the entry key and the LRUCache object).
   *     The return value is ignored.
   */ forEach(f) {
        let entry = this.oldest_;
        while(entry){
            f(entry.value_, entry.key_, this);
            entry = entry.newer;
        }
    }
    /**
   * @param {string} key Key.
   * @param {*} [options] Options (reserved for subclasses).
   * @return {T} Value.
   */ get(key, options) {
        const entry = this.entries_[key];
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache
        if (entry === this.newest_) return entry.value_;
        else if (entry === this.oldest_) {
            this.oldest_ = this.oldest_.newer;
            this.oldest_.older = null;
        } else {
            entry.newer.older = entry.older;
            entry.older.newer = entry.newer;
        }
        entry.newer = null;
        entry.older = this.newest_;
        this.newest_.newer = entry;
        this.newest_ = entry;
        return entry.value_;
    }
    /**
   * Remove an entry from the cache.
   * @param {string} key The entry key.
   * @return {T} The removed entry.
   */ remove(key) {
        const entry = this.entries_[key];
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache
        if (entry === this.newest_) {
            this.newest_ = entry.older;
            if (this.newest_) this.newest_.newer = null;
        } else if (entry === this.oldest_) {
            this.oldest_ = entry.newer;
            if (this.oldest_) this.oldest_.older = null;
        } else {
            entry.newer.older = entry.older;
            entry.older.newer = entry.newer;
        }
        delete this.entries_[key];
        --this.count_;
        return entry.value_;
    }
    /**
   * @return {number} Count.
   */ getCount() {
        return this.count_;
    }
    /**
   * @return {Array<string>} Keys.
   */ getKeys() {
        const keys = new Array(this.count_);
        let i = 0;
        let entry;
        for(entry = this.newest_; entry; entry = entry.older)keys[i++] = entry.key_;
        return keys;
    }
    /**
   * @return {Array<T>} Values.
   */ getValues() {
        const values = new Array(this.count_);
        let i = 0;
        let entry;
        for(entry = this.newest_; entry; entry = entry.older)values[i++] = entry.value_;
        return values;
    }
    /**
   * @return {T} Last value.
   */ peekLast() {
        return this.oldest_.value_;
    }
    /**
   * @return {string} Last key.
   */ peekLastKey() {
        return this.oldest_.key_;
    }
    /**
   * Get the key of the newest item in the cache.  Throws if the cache is empty.
   * @return {string} The newest key.
   */ peekFirstKey() {
        return this.newest_.key_;
    }
    /**
   * Return an entry without updating least recently used time.
   * @param {string} key Key.
   * @return {T} Value.
   */ peek(key) {
        if (!this.containsKey(key)) return undefined;
        return this.entries_[key].value_;
    }
    /**
   * @return {T} value Value.
   */ pop() {
        const entry = this.oldest_;
        delete this.entries_[entry.key_];
        if (entry.newer) entry.newer.older = null;
        this.oldest_ = entry.newer;
        if (!this.oldest_) this.newest_ = null;
        --this.count_;
        return entry.value_;
    }
    /**
   * @param {string} key Key.
   * @param {T} value Value.
   */ replace(key, value) {
        this.get(key); // update `newest_`
        this.entries_[key].value_ = value;
    }
    /**
   * @param {string} key Key.
   * @param {T} value Value.
   */ set(key, value) {
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(!(key in this.entries_), 16); // Tried to set a value for a key that is used already
        const entry = {
            key_: key,
            newer: null,
            older: this.newest_,
            value_: value
        };
        if (!this.newest_) this.oldest_ = entry;
        else this.newest_.newer = entry;
        this.newest_ = entry;
        this.entries_[key] = entry;
        ++this.count_;
    }
    /**
   * Set a maximum number of entries for the cache.
   * @param {number} size Cache size.
   * @api
   */ setSize(size) {
        this.highWaterMark = size;
    }
}
var $690d819ab9d472df$export$2e2bcd8739ae039 = $690d819ab9d472df$var$LRUCache;





function $2540e8b802d8068a$export$958e3e1a02eac4b6(z, x, y, tileCoord) {
    if (tileCoord !== undefined) {
        tileCoord[0] = z;
        tileCoord[1] = x;
        tileCoord[2] = y;
        return tileCoord;
    } else return [
        z,
        x,
        y
    ];
}
function $2540e8b802d8068a$export$92d0df0f1d25c63c(z, x, y) {
    return z + "/" + x + "/" + y;
}
function $2540e8b802d8068a$export$a47fb462a08de82f(tileCoord) {
    return $2540e8b802d8068a$export$92d0df0f1d25c63c(tileCoord[0], tileCoord[1], tileCoord[2]);
}
function $2540e8b802d8068a$export$7f760414a8e3d2b5(tileKey) {
    const [z, x, y] = tileKey.substring(tileKey.lastIndexOf("/") + 1, tileKey.length).split(",").map(Number);
    return $2540e8b802d8068a$export$92d0df0f1d25c63c(z, x, y);
}
function $2540e8b802d8068a$export$a807b7874eb66454(key) {
    return key.split("/").map(Number);
}
function $2540e8b802d8068a$export$d6af199866bfb566(tileCoord) {
    return (tileCoord[1] << tileCoord[0]) + tileCoord[2];
}
function $2540e8b802d8068a$export$60bedf8e3e3c3dbe(tileCoord, tileGrid) {
    const z = tileCoord[0];
    const x = tileCoord[1];
    const y = tileCoord[2];
    if (tileGrid.getMinZoom() > z || z > tileGrid.getMaxZoom()) return false;
    const tileRange = tileGrid.getFullTileRange(z);
    if (!tileRange) return true;
    else return tileRange.containsXY(x, y);
}


class $2c5d519755b6b01a$var$TileCache extends (0, $690d819ab9d472df$export$2e2bcd8739ae039) {
    clear() {
        while(this.getCount() > 0)this.pop().release();
        super.clear();
    }
    /**
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */ expireCache(usedTiles) {
        while(this.canExpireCache()){
            const tile = this.peekLast();
            if (tile.getKey() in usedTiles) break;
            else this.pop().release();
        }
    }
    /**
   * Prune all tiles from the cache that don't have the same z as the newest tile.
   */ pruneExceptNewestZ() {
        if (this.getCount() === 0) return;
        const key = this.peekFirstKey();
        const tileCoord = (0, $2540e8b802d8068a$export$a807b7874eb66454)(key);
        const z = tileCoord[0];
        this.forEach((function(tile) {
            if (tile.tileCoord[0] !== z) {
                this.remove((0, $2540e8b802d8068a$export$a47fb462a08de82f)(tile.tileCoord));
                tile.release();
            }
        }).bind(this));
    }
}
var $2c5d519755b6b01a$export$2e2bcd8739ae039 = $2c5d519755b6b01a$var$TileCache;



var /**
 * @module ol/source/TileEventType
 */ /**
 * @enum {string}
 */ $5cdf7ff3046a39d7$export$2e2bcd8739ae039 /**
 * @typedef {'tileloadstart'|'tileloadend'|'tileloaderror'} TileSourceEventTypes
 */  = {
    /**
   * Triggered when a tile starts loading.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadstart
   * @api
   */ TILELOADSTART: "tileloadstart",
    /**
   * Triggered when a tile finishes loading, either when its data is loaded,
   * or when loading was aborted because the tile is no longer needed.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadend
   * @api
   */ TILELOADEND: "tileloadend",
    /**
   * Triggered if tile loading results in an error. Note that this is not the
   * right place to re-fetch tiles. See {@link module:ol/ImageTile~ImageTile#load}
   * for details.
   * @event module:ol/source/Tile.TileSourceEvent#tileloaderror
   * @api
   */ TILELOADERROR: "tileloaderror"
};






/**
 * @typedef {'undefined' | 'loading' | 'ready' | 'error'} State
 * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
 */ /**
 * A function that takes a {@link module:ol/Map~FrameState} and returns a string or
 * an array of strings representing source attributions.
 *
 * @typedef {function(import("../Map.js").FrameState): (string|Array<string>)} Attribution
 */ /**
 * A type that can be used to provide attribution information for data sources.
 *
 * It represents either
 * * a simple string (e.g. `'© Acme Inc.'`)
 * * an array of simple strings (e.g. `['© Acme Inc.', '© Bacme Inc.']`)
 * * a function that returns a string or array of strings ({@link module:ol/source/Source~Attribution})
 *
 * @typedef {string|Array<string>|Attribution} AttributionLike
 */ /**
 * @typedef {Object} Options
 * @property {AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection. Default is the view projection.
 * @property {import("./Source.js").State} [state='ready'] State.
 * @property {boolean} [wrapX=false] WrapX.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for {@link module:ol/layer/Layer~Layer} sources.
 *
 * A generic `change` event is triggered when the state of the source changes.
 * @abstract
 * @api
 */ class $9e56ff64c24ee20c$var$Source extends (0, $2fa1993cbde1d34b$export$2e2bcd8739ae039) {
    /**
   * @param {Options} options Source options.
   */ constructor(options){
        super();
        /**
     * @protected
     * @type {import("../proj/Projection.js").default|null}
     */ this.projection = (0, $0a1495ed54ce69a9$export$3988ae62b71be9a3)(options.projection);
        /**
     * @private
     * @type {?Attribution}
     */ this.attributions_ = $9e56ff64c24ee20c$var$adaptAttributions(options.attributions);
        /**
     * @private
     * @type {boolean}
     */ this.attributionsCollapsible_ = options.attributionsCollapsible !== undefined ? options.attributionsCollapsible : true;
        /**
     * This source is currently loading data. Sources that defer loading to the
     * map's tile queue never set this to `true`.
     * @type {boolean}
     */ this.loading = false;
        /**
     * @private
     * @type {import("./Source.js").State}
     */ this.state_ = options.state !== undefined ? options.state : "ready";
        /**
     * @private
     * @type {boolean}
     */ this.wrapX_ = options.wrapX !== undefined ? options.wrapX : false;
        /**
     * @private
     * @type {boolean}
     */ this.interpolate_ = !!options.interpolate;
        /**
     * @protected
     * @type {function(import("../View.js").ViewOptions):void}
     */ this.viewResolver = null;
        /**
     * @protected
     * @type {function(Error):void}
     */ this.viewRejector = null;
        const self = this;
        /**
     * @private
     * @type {Promise<import("../View.js").ViewOptions>}
     */ this.viewPromise_ = new Promise(function(resolve, reject) {
            self.viewResolver = resolve;
            self.viewRejector = reject;
        });
    }
    /**
   * Get the attribution function for the source.
   * @return {?Attribution} Attribution function.
   * @api
   */ getAttributions() {
        return this.attributions_;
    }
    /**
   * @return {boolean} Attributions are collapsible.
   * @api
   */ getAttributionsCollapsible() {
        return this.attributionsCollapsible_;
    }
    /**
   * Get the projection of the source.
   * @return {import("../proj/Projection.js").default|null} Projection.
   * @api
   */ getProjection() {
        return this.projection;
    }
    /**
   * @abstract
   * @return {Array<number>|null} Resolutions.
   */ getResolutions() {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
   */ getView() {
        return this.viewPromise_;
    }
    /**
   * Get the state of the source, see {@link import("./Source.js").State} for possible states.
   * @return {import("./Source.js").State} State.
   * @api
   */ getState() {
        return this.state_;
    }
    /**
   * @return {boolean|undefined} Wrap X.
   */ getWrapX() {
        return this.wrapX_;
    }
    /**
   * @return {boolean} Use linear interpolation when resampling.
   */ getInterpolate() {
        return this.interpolate_;
    }
    /**
   * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
   * @api
   */ refresh() {
        this.changed();
    }
    /**
   * Set the attributions of the source.
   * @param {AttributionLike|undefined} attributions Attributions.
   *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
   *     or `undefined`.
   * @api
   */ setAttributions(attributions) {
        this.attributions_ = $9e56ff64c24ee20c$var$adaptAttributions(attributions);
        this.changed();
    }
    /**
   * Set the state of the source.
   * @param {import("./Source.js").State} state State.
   */ setState(state) {
        this.state_ = state;
        this.changed();
    }
}
/**
 * Turns the attributions option into an attributions function.
 * @param {AttributionLike|undefined} attributionLike The attribution option.
 * @return {Attribution|null} An attribution function (or null).
 */ function $9e56ff64c24ee20c$var$adaptAttributions(attributionLike) {
    if (!attributionLike) return null;
    if (Array.isArray(attributionLike)) return function(frameState) {
        return attributionLike;
    };
    if (typeof attributionLike === "function") return attributionLike;
    return function(frameState) {
        return [
            attributionLike
        ];
    };
}
var $9e56ff64c24ee20c$export$2e2bcd8739ae039 = $9e56ff64c24ee20c$var$Source;

















/**
 * @private
 * @type {import("../tilecoord.js").TileCoord}
 */ const $b90ff733d08d02ae$var$tmpTileCoord = [
    0,
    0,
    0
];
/**
 * Number of decimal digits to consider in integer values when rounding.
 * @type {number}
 */ const $b90ff733d08d02ae$var$DECIMALS = 5;
/**
 * @typedef {Object} Options
 * @property {import("../extent.js").Extent} [extent] Extent for the tile grid. No tiles outside this
 * extent will be requested by {@link module:ol/source/Tile~TileSource} sources. When no `origin` or
 * `origins` are configured, the `origin` will be set to the top-left corner of the extent.
 * @property {number} [minZoom=0] Minimum zoom.
 * @property {import("../coordinate.js").Coordinate} [origin] The tile grid origin, i.e. where the `x`
 * and `y` axes meet (`[z, 0, 0]`). Tile coordinates increase left to right and downwards. If not
 * specified, `extent` or `origins` must be provided.
 * @property {Array<import("../coordinate.js").Coordinate>} [origins] Tile grid origins, i.e. where
 * the `x` and `y` axes meet (`[z, 0, 0]`), for each zoom level. If given, the array length
 * should match the length of the `resolutions` array, i.e. each resolution can have a different
 * origin. Tile coordinates increase left to right and downwards. If not specified, `extent` or
 * `origin` must be provided.
 * @property {!Array<number>} resolutions Resolutions. The array index of each resolution needs
 * to match the zoom level. This means that even if a `minZoom` is configured, the resolutions
 * array will have a length of `maxZoom + 1`.
 * @property {Array<import("../size.js").Size>} [sizes] Number of tile rows and columns
 * of the grid for each zoom level. If specified the values
 * define each zoom level's extent together with the `origin` or `origins`.
 * A grid `extent` can be configured in addition, and will further limit the extent
 * for which tile requests are made by sources. If the bottom-left corner of
 * an extent is used as `origin` or `origins`, then the `y` value must be
 * negative because OpenLayers tile coordinates use the top left as the origin.
 * @property {number|import("../size.js").Size} [tileSize] Tile size.
 * Default is `[256, 256]`.
 * @property {Array<number|import("../size.js").Size>} [tileSizes] Tile sizes. If given, the array length
 * should match the length of the `resolutions` array, i.e. each resolution can have a different
 * tile size.
 */ /**
 * @classdesc
 * Base class for setting the grid pattern for sources accessing tiled-image
 * servers.
 * @api
 */ class $b90ff733d08d02ae$var$TileGrid {
    /**
   * @param {Options} options Tile grid options.
   */ constructor(options){
        /**
     * @protected
     * @type {number}
     */ this.minZoom = options.minZoom !== undefined ? options.minZoom : 0;
        /**
     * @private
     * @type {!Array<number>}
     */ this.resolutions_ = options.resolutions;
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)((0, $eea510364582e5fa$export$efa610630f9e181)(this.resolutions_, function(a, b) {
            return b - a;
        }, true), 17); // `resolutions` must be sorted in descending order
        // check if we've got a consistent zoom factor and origin
        let zoomFactor;
        if (!options.origins) for(let i = 0, ii = this.resolutions_.length - 1; i < ii; ++i){
            if (!zoomFactor) zoomFactor = this.resolutions_[i] / this.resolutions_[i + 1];
            else if (this.resolutions_[i] / this.resolutions_[i + 1] !== zoomFactor) {
                zoomFactor = undefined;
                break;
            }
        }
        /**
     * @private
     * @type {number|undefined}
     */ this.zoomFactor_ = zoomFactor;
        /**
     * @protected
     * @type {number}
     */ this.maxZoom = this.resolutions_.length - 1;
        /**
     * @private
     * @type {import("../coordinate.js").Coordinate|null}
     */ this.origin_ = options.origin !== undefined ? options.origin : null;
        /**
     * @private
     * @type {Array<import("../coordinate.js").Coordinate>}
     */ this.origins_ = null;
        if (options.origins !== undefined) {
            this.origins_ = options.origins;
            (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(this.origins_.length == this.resolutions_.length, 20); // Number of `origins` and `resolutions` must be equal
        }
        const extent = options.extent;
        if (extent !== undefined && !this.origin_ && !this.origins_) this.origin_ = (0, $ee16b51bb9f86500$export$cb1538b07e6964ff)(extent);
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(!this.origin_ && this.origins_ || this.origin_ && !this.origins_, 18); // Either `origin` or `origins` must be configured, never both
        /**
     * @private
     * @type {Array<number|import("../size.js").Size>}
     */ this.tileSizes_ = null;
        if (options.tileSizes !== undefined) {
            this.tileSizes_ = options.tileSizes;
            (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(this.tileSizes_.length == this.resolutions_.length, 19); // Number of `tileSizes` and `resolutions` must be equal
        }
        /**
     * @private
     * @type {number|import("../size.js").Size}
     */ this.tileSize_ = options.tileSize !== undefined ? options.tileSize : !this.tileSizes_ ? (0, $7833ce234efe8d00$export$6b8cb5cd370bd90c) : null;
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(!this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_, 22); // Either `tileSize` or `tileSizes` must be configured, never both
        /**
     * @private
     * @type {import("../extent.js").Extent}
     */ this.extent_ = extent !== undefined ? extent : null;
        /**
     * @private
     * @type {Array<import("../TileRange.js").default>}
     */ this.fullTileRanges_ = null;
        /**
     * @private
     * @type {import("../size.js").Size}
     */ this.tmpSize_ = [
            0,
            0
        ];
        /**
     * @private
     * @type {import("../extent.js").Extent}
     */ this.tmpExtent_ = [
            0,
            0,
            0,
            0
        ];
        if (options.sizes !== undefined) this.fullTileRanges_ = options.sizes.map(function(size, z) {
            const tileRange = new (0, $b38ddf86725f165c$export$2e2bcd8739ae039)(Math.min(0, size[0]), Math.max(size[0] - 1, -1), Math.min(0, size[1]), Math.max(size[1] - 1, -1));
            if (extent) {
                const restrictedTileRange = this.getTileRangeForExtentAndZ(extent, z);
                tileRange.minX = Math.max(restrictedTileRange.minX, tileRange.minX);
                tileRange.maxX = Math.min(restrictedTileRange.maxX, tileRange.maxX);
                tileRange.minY = Math.max(restrictedTileRange.minY, tileRange.minY);
                tileRange.maxY = Math.min(restrictedTileRange.maxY, tileRange.maxY);
            }
            return tileRange;
        }, this);
        else if (extent) this.calculateTileRanges_(extent);
    }
    /**
   * Call a function with each tile coordinate for a given extent and zoom level.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} zoom Integer zoom level.
   * @param {function(import("../tilecoord.js").TileCoord): void} callback Function called with each tile coordinate.
   * @api
   */ forEachTileCoord(extent, zoom, callback) {
        const tileRange = this.getTileRangeForExtentAndZ(extent, zoom);
        for(let i = tileRange.minX, ii = tileRange.maxX; i <= ii; ++i)for(let j = tileRange.minY, jj = tileRange.maxY; j <= jj; ++j)callback([
            zoom,
            i,
            j
        ]);
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {boolean} Callback succeeded.
   */ forEachTileCoordParentTileRange(tileCoord, callback, tempTileRange, tempExtent) {
        let tileRange, x, y;
        let tileCoordExtent = null;
        let z = tileCoord[0] - 1;
        if (this.zoomFactor_ === 2) {
            x = tileCoord[1];
            y = tileCoord[2];
        } else tileCoordExtent = this.getTileCoordExtent(tileCoord, tempExtent);
        while(z >= this.minZoom){
            if (this.zoomFactor_ === 2) {
                x = Math.floor(x / 2);
                y = Math.floor(y / 2);
                tileRange = (0, $b38ddf86725f165c$export$958e3e1a02eac4b6)(x, x, y, y, tempTileRange);
            } else tileRange = this.getTileRangeForExtentAndZ(tileCoordExtent, z, tempTileRange);
            if (callback(z, tileRange)) return true;
            --z;
        }
        return false;
    }
    /**
   * Get the extent for this tile grid, if it was configured.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */ getExtent() {
        return this.extent_;
    }
    /**
   * Get the maximum zoom level for the grid.
   * @return {number} Max zoom.
   * @api
   */ getMaxZoom() {
        return this.maxZoom;
    }
    /**
   * Get the minimum zoom level for the grid.
   * @return {number} Min zoom.
   * @api
   */ getMinZoom() {
        return this.minZoom;
    }
    /**
   * Get the origin for the grid at the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {import("../coordinate.js").Coordinate} Origin.
   * @api
   */ getOrigin(z) {
        if (this.origin_) return this.origin_;
        else return this.origins_[z];
    }
    /**
   * Get the resolution for the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {number} Resolution.
   * @api
   */ getResolution(z) {
        return this.resolutions_[z];
    }
    /**
   * Get the list of resolutions for the tile grid.
   * @return {Array<number>} Resolutions.
   * @api
   */ getResolutions() {
        return this.resolutions_;
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */ getTileCoordChildTileRange(tileCoord, tempTileRange, tempExtent) {
        if (tileCoord[0] < this.maxZoom) {
            if (this.zoomFactor_ === 2) {
                const minX = tileCoord[1] * 2;
                const minY = tileCoord[2] * 2;
                return (0, $b38ddf86725f165c$export$958e3e1a02eac4b6)(minX, minX + 1, minY, minY + 1, tempTileRange);
            }
            const tileCoordExtent = this.getTileCoordExtent(tileCoord, tempExtent || this.tmpExtent_);
            return this.getTileRangeForExtentAndZ(tileCoordExtent, tileCoord[0] + 1, tempTileRange);
        }
        return null;
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */ getTileRangeForTileCoordAndZ(tileCoord, z, tempTileRange) {
        if (z > this.maxZoom || z < this.minZoom) return null;
        const tileCoordZ = tileCoord[0];
        const tileCoordX = tileCoord[1];
        const tileCoordY = tileCoord[2];
        if (z === tileCoordZ) return (0, $b38ddf86725f165c$export$958e3e1a02eac4b6)(tileCoordX, tileCoordY, tileCoordX, tileCoordY, tempTileRange);
        if (this.zoomFactor_) {
            const factor = Math.pow(this.zoomFactor_, z - tileCoordZ);
            const minX = Math.floor(tileCoordX * factor);
            const minY = Math.floor(tileCoordY * factor);
            if (z < tileCoordZ) return (0, $b38ddf86725f165c$export$958e3e1a02eac4b6)(minX, minX, minY, minY, tempTileRange);
            const maxX = Math.floor(factor * (tileCoordX + 1)) - 1;
            const maxY = Math.floor(factor * (tileCoordY + 1)) - 1;
            return (0, $b38ddf86725f165c$export$958e3e1a02eac4b6)(minX, maxX, minY, maxY, tempTileRange);
        }
        const tileCoordExtent = this.getTileCoordExtent(tileCoord, this.tmpExtent_);
        return this.getTileRangeForExtentAndZ(tileCoordExtent, z, tempTileRange);
    }
    /**
   * Get the extent for a tile range.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} tileRange Tile range.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {import("../extent.js").Extent} Extent.
   */ getTileRangeExtent(z, tileRange, tempExtent) {
        const origin = this.getOrigin(z);
        const resolution = this.getResolution(z);
        const tileSize = (0, $670ace09156a4e14$export$a71a825ff42fb8e1)(this.getTileSize(z), this.tmpSize_);
        const minX = origin[0] + tileRange.minX * tileSize[0] * resolution;
        const maxX = origin[0] + (tileRange.maxX + 1) * tileSize[0] * resolution;
        const minY = origin[1] + tileRange.minY * tileSize[1] * resolution;
        const maxY = origin[1] + (tileRange.maxY + 1) * tileSize[1] * resolution;
        return (0, $ee16b51bb9f86500$export$958e3e1a02eac4b6)(minX, minY, maxX, maxY, tempExtent);
    }
    /**
   * Get a tile range for the given extent and integer zoom level.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary tile range object.
   * @return {import("../TileRange.js").default} Tile range.
   */ getTileRangeForExtentAndZ(extent, z, tempTileRange) {
        const tileCoord = $b90ff733d08d02ae$var$tmpTileCoord;
        this.getTileCoordForXYAndZ_(extent[0], extent[3], z, false, tileCoord);
        const minX = tileCoord[1];
        const minY = tileCoord[2];
        this.getTileCoordForXYAndZ_(extent[2], extent[1], z, true, tileCoord);
        return (0, $b38ddf86725f165c$export$958e3e1a02eac4b6)(minX, tileCoord[1], minY, tileCoord[2], tempTileRange);
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {import("../coordinate.js").Coordinate} Tile center.
   */ getTileCoordCenter(tileCoord) {
        const origin = this.getOrigin(tileCoord[0]);
        const resolution = this.getResolution(tileCoord[0]);
        const tileSize = (0, $670ace09156a4e14$export$a71a825ff42fb8e1)(this.getTileSize(tileCoord[0]), this.tmpSize_);
        return [
            origin[0] + (tileCoord[1] + 0.5) * tileSize[0] * resolution,
            origin[1] - (tileCoord[2] + 0.5) * tileSize[1] * resolution, 
        ];
    }
    /**
   * Get the extent of a tile coordinate.
   *
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary extent object.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */ getTileCoordExtent(tileCoord, tempExtent) {
        const origin = this.getOrigin(tileCoord[0]);
        const resolution = this.getResolution(tileCoord[0]);
        const tileSize = (0, $670ace09156a4e14$export$a71a825ff42fb8e1)(this.getTileSize(tileCoord[0]), this.tmpSize_);
        const minX = origin[0] + tileCoord[1] * tileSize[0] * resolution;
        const minY = origin[1] - (tileCoord[2] + 1) * tileSize[1] * resolution;
        const maxX = minX + tileSize[0] * resolution;
        const maxY = minY + tileSize[1] * resolution;
        return (0, $ee16b51bb9f86500$export$958e3e1a02eac4b6)(minX, minY, maxX, maxY, tempExtent);
    }
    /**
   * Get the tile coordinate for the given map coordinate and resolution.  This
   * method considers that coordinates that intersect tile boundaries should be
   * assigned the higher tile coordinate.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */ getTileCoordForCoordAndResolution(coordinate, resolution, opt_tileCoord) {
        return this.getTileCoordForXYAndResolution_(coordinate[0], coordinate[1], resolution, false, opt_tileCoord);
    }
    /**
   * Note that this method should not be called for resolutions that correspond
   * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
   * @param {number} x X.
   * @param {number} y Y.
   * @param {number} resolution Resolution (for a non-integer zoom level).
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */ getTileCoordForXYAndResolution_(x, y, resolution, reverseIntersectionPolicy, opt_tileCoord) {
        const z = this.getZForResolution(resolution);
        const scale = resolution / this.getResolution(z);
        const origin = this.getOrigin(z);
        const tileSize = (0, $670ace09156a4e14$export$a71a825ff42fb8e1)(this.getTileSize(z), this.tmpSize_);
        let tileCoordX = scale * (x - origin[0]) / resolution / tileSize[0];
        let tileCoordY = scale * (origin[1] - y) / resolution / tileSize[1];
        if (reverseIntersectionPolicy) {
            tileCoordX = (0, $906cd1f2aa644a1d$export$803ce6b71a0a94b2)(tileCoordX, $b90ff733d08d02ae$var$DECIMALS) - 1;
            tileCoordY = (0, $906cd1f2aa644a1d$export$803ce6b71a0a94b2)(tileCoordY, $b90ff733d08d02ae$var$DECIMALS) - 1;
        } else {
            tileCoordX = (0, $906cd1f2aa644a1d$export$a3fe094919f356fd)(tileCoordX, $b90ff733d08d02ae$var$DECIMALS);
            tileCoordY = (0, $906cd1f2aa644a1d$export$a3fe094919f356fd)(tileCoordY, $b90ff733d08d02ae$var$DECIMALS);
        }
        return (0, $2540e8b802d8068a$export$958e3e1a02eac4b6)(z, tileCoordX, tileCoordY, opt_tileCoord);
    }
    /**
   * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
   * they should have separate implementations.  This method is for integer zoom
   * levels.  The other method should only be called for resolutions corresponding
   * to non-integer zoom levels.
   * @param {number} x Map x coordinate.
   * @param {number} y Map y coordinate.
   * @param {number} z Integer zoom level.
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */ getTileCoordForXYAndZ_(x, y, z, reverseIntersectionPolicy, opt_tileCoord) {
        const origin = this.getOrigin(z);
        const resolution = this.getResolution(z);
        const tileSize = (0, $670ace09156a4e14$export$a71a825ff42fb8e1)(this.getTileSize(z), this.tmpSize_);
        let tileCoordX = (x - origin[0]) / resolution / tileSize[0];
        let tileCoordY = (origin[1] - y) / resolution / tileSize[1];
        if (reverseIntersectionPolicy) {
            tileCoordX = (0, $906cd1f2aa644a1d$export$803ce6b71a0a94b2)(tileCoordX, $b90ff733d08d02ae$var$DECIMALS) - 1;
            tileCoordY = (0, $906cd1f2aa644a1d$export$803ce6b71a0a94b2)(tileCoordY, $b90ff733d08d02ae$var$DECIMALS) - 1;
        } else {
            tileCoordX = (0, $906cd1f2aa644a1d$export$a3fe094919f356fd)(tileCoordX, $b90ff733d08d02ae$var$DECIMALS);
            tileCoordY = (0, $906cd1f2aa644a1d$export$a3fe094919f356fd)(tileCoordY, $b90ff733d08d02ae$var$DECIMALS);
        }
        return (0, $2540e8b802d8068a$export$958e3e1a02eac4b6)(z, tileCoordX, tileCoordY, opt_tileCoord);
    }
    /**
   * Get a tile coordinate given a map coordinate and zoom level.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} z Zoom level.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */ getTileCoordForCoordAndZ(coordinate, z, opt_tileCoord) {
        return this.getTileCoordForXYAndZ_(coordinate[0], coordinate[1], z, false, opt_tileCoord);
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {number} Tile resolution.
   */ getTileCoordResolution(tileCoord) {
        return this.resolutions_[tileCoord[0]];
    }
    /**
   * Get the tile size for a zoom level. The type of the return value matches the
   * `tileSize` or `tileSizes` that the tile grid was configured with. To always
   * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
   * @param {number} z Z.
   * @return {number|import("../size.js").Size} Tile size.
   * @api
   */ getTileSize(z) {
        if (this.tileSize_) return this.tileSize_;
        else return this.tileSizes_[z];
    }
    /**
   * @param {number} z Zoom level.
   * @return {import("../TileRange.js").default} Extent tile range for the specified zoom level.
   */ getFullTileRange(z) {
        if (!this.fullTileRanges_) return this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, z) : null;
        else return this.fullTileRanges_[z];
    }
    /**
   * @param {number} resolution Resolution.
   * @param {number|import("../array.js").NearestDirectionFunction} [opt_direction]
   *     If 0, the nearest resolution will be used.
   *     If 1, the nearest higher resolution (lower Z) will be used. If -1, the
   *     nearest lower resolution (higher Z) will be used. Default is 0.
   *     Use a {@link module:ol/array~NearestDirectionFunction} for more precise control.
   *
   * For example to change tile Z at the midpoint of zoom levels
   * ```js
   * function(value, high, low) {
   *   return value - low * Math.sqrt(high / low);
   * }
   * ```
   * @return {number} Z.
   * @api
   */ getZForResolution(resolution, opt_direction) {
        const z = (0, $eea510364582e5fa$export$8a3786cc03fdb777)(this.resolutions_, resolution, opt_direction || 0);
        return (0, $906cd1f2aa644a1d$export$7d15b64cf5a3a4c4)(z, this.minZoom, this.maxZoom);
    }
    /**
   * The tile with the provided tile coordinate intersects the given viewport.
   * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
   * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
   * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
   */ tileCoordIntersectsViewport(tileCoord, viewport) {
        return (0, $17845162a91838ba$export$830a0dafbb2ef1c5)(viewport, 0, viewport.length, 2, this.getTileCoordExtent(tileCoord));
    }
    /**
   * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
   * @private
   */ calculateTileRanges_(extent) {
        const length = this.resolutions_.length;
        const fullTileRanges = new Array(length);
        for(let z = this.minZoom; z < length; ++z)fullTileRanges[z] = this.getTileRangeForExtentAndZ(extent, z);
        this.fullTileRanges_ = fullTileRanges;
    }
}
var $b90ff733d08d02ae$export$2e2bcd8739ae039 = $b90ff733d08d02ae$var$TileGrid;






function $e73d0cfb7f32fcdf$export$1f4812384df8a9c5(projection) {
    let tileGrid = projection.getDefaultTileGrid();
    if (!tileGrid) {
        tileGrid = $e73d0cfb7f32fcdf$export$a251b12f5601c16f(projection);
        projection.setDefaultTileGrid(tileGrid);
    }
    return tileGrid;
}
function $e73d0cfb7f32fcdf$export$39a9ce3624977b84(tileGrid, tileCoord, projection) {
    const z = tileCoord[0];
    const center = tileGrid.getTileCoordCenter(tileCoord);
    const projectionExtent = $e73d0cfb7f32fcdf$export$7b5b6ef8fd55fac4(projection);
    if (!(0, $ee16b51bb9f86500$export$ac68c24d37ca240f)(projectionExtent, center)) {
        const worldWidth = (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(projectionExtent);
        const worldsAway = Math.ceil((projectionExtent[0] - center[0]) / worldWidth);
        center[0] += worldWidth * worldsAway;
        return tileGrid.getTileCoordForCoordAndZ(center, z);
    } else return tileCoord;
}
function $e73d0cfb7f32fcdf$export$ce88871416242df8(extent, maxZoom, tileSize, corner) {
    corner = corner !== undefined ? corner : "top-left";
    const resolutions = $e73d0cfb7f32fcdf$var$resolutionsFromExtent(extent, maxZoom, tileSize);
    return new (0, $b90ff733d08d02ae$export$2e2bcd8739ae039)({
        extent: extent,
        origin: (0, $ee16b51bb9f86500$export$a1cfd206661d0801)(extent, corner),
        resolutions: resolutions,
        tileSize: tileSize
    });
}
function $e73d0cfb7f32fcdf$export$38500bbeccc864ff(options) {
    const xyzOptions = options || {};
    const extent = xyzOptions.extent || (0, $0a1495ed54ce69a9$export$3988ae62b71be9a3)("EPSG:3857").getExtent();
    const gridOptions = {
        extent: extent,
        minZoom: xyzOptions.minZoom,
        tileSize: xyzOptions.tileSize,
        resolutions: $e73d0cfb7f32fcdf$var$resolutionsFromExtent(extent, xyzOptions.maxZoom, xyzOptions.tileSize, xyzOptions.maxResolution)
    };
    return new (0, $b90ff733d08d02ae$export$2e2bcd8739ae039)(gridOptions);
}
/**
 * Create a resolutions array from an extent.  A zoom factor of 2 is assumed.
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} [maxZoom] Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|import("./size.js").Size} [tileSize] Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {number} [maxResolution] Resolution at level zero.
 * @return {!Array<number>} Resolutions array.
 */ function $e73d0cfb7f32fcdf$var$resolutionsFromExtent(extent, maxZoom, tileSize, maxResolution) {
    maxZoom = maxZoom !== undefined ? maxZoom : (0, $7833ce234efe8d00$export$e98a216cdcc847dc);
    tileSize = (0, $670ace09156a4e14$export$a71a825ff42fb8e1)(tileSize !== undefined ? tileSize : (0, $7833ce234efe8d00$export$6b8cb5cd370bd90c));
    const height = (0, $ee16b51bb9f86500$export$c08559766941f856)(extent);
    const width = (0, $ee16b51bb9f86500$export$3c49c185de0c2bfc)(extent);
    maxResolution = maxResolution > 0 ? maxResolution : Math.max(width / tileSize[0], height / tileSize[1]);
    const length = maxZoom + 1;
    const resolutions = new Array(length);
    for(let z = 0; z < length; ++z)resolutions[z] = maxResolution / Math.pow(2, z);
    return resolutions;
}
function $e73d0cfb7f32fcdf$export$a251b12f5601c16f(projection, maxZoom, tileSize, corner) {
    const extent = $e73d0cfb7f32fcdf$export$7b5b6ef8fd55fac4(projection);
    return $e73d0cfb7f32fcdf$export$ce88871416242df8(extent, maxZoom, tileSize, corner);
}
function $e73d0cfb7f32fcdf$export$7b5b6ef8fd55fac4(projection) {
    projection = (0, $0a1495ed54ce69a9$export$3988ae62b71be9a3)(projection);
    let extent = projection.getExtent();
    if (!extent) {
        const half = 180 * (0, $361aac7b018b3435$export$1482081eec883108).degrees / projection.getMetersPerUnit();
        extent = (0, $ee16b51bb9f86500$export$958e3e1a02eac4b6)(-half, -half, half, half);
    }
    return extent;
}



/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<import("./TileEventType").TileSourceEventTypes, TileSourceEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
 *     import("./TileEventType").TileSourceEventTypes, Return>} TileSourceOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] CacheSize.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {number} [tilePixelRatio] TilePixelRatio.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection.
 * @property {import("./Source.js").State} [state] State.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] TileGrid.
 * @property {boolean} [wrapX=false] WrapX.
 * @property {number} [transition] Transition.
 * @property {string} [key] Key.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0] ZDirection.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for sources providing images divided into a tile grid.
 * @abstract
 * @api
 */ class $8e1a49cc4a8c5d05$var$TileSource extends (0, $9e56ff64c24ee20c$export$2e2bcd8739ae039) {
    /**
   * @param {Options} options SourceTile source options.
   */ constructor(options){
        super({
            attributions: options.attributions,
            attributionsCollapsible: options.attributionsCollapsible,
            projection: options.projection,
            state: options.state,
            wrapX: options.wrapX,
            interpolate: options.interpolate
        });
        /***
     * @type {TileSourceOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {TileSourceOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {TileSourceOnSignature<void>}
     */ this.un;
        /**
     * @private
     * @type {boolean}
     */ this.opaque_ = options.opaque !== undefined ? options.opaque : false;
        /**
     * @private
     * @type {number}
     */ this.tilePixelRatio_ = options.tilePixelRatio !== undefined ? options.tilePixelRatio : 1;
        /**
     * @type {import("../tilegrid/TileGrid.js").default|null}
     */ this.tileGrid = options.tileGrid !== undefined ? options.tileGrid : null;
        const tileSize = [
            256,
            256
        ];
        if (this.tileGrid) (0, $670ace09156a4e14$export$a71a825ff42fb8e1)(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), tileSize);
        /**
     * @protected
     * @type {import("../TileCache.js").default}
     */ this.tileCache = new (0, $2c5d519755b6b01a$export$2e2bcd8739ae039)(options.cacheSize || 0);
        /**
     * @protected
     * @type {import("../size.js").Size}
     */ this.tmpSize = [
            0,
            0
        ];
        /**
     * @private
     * @type {string}
     */ this.key_ = options.key || "";
        /**
     * @protected
     * @type {import("../Tile.js").Options}
     */ this.tileOptions = {
            transition: options.transition,
            interpolate: options.interpolate
        };
        /**
     * zDirection hint, read by the renderer. Indicates which resolution should be used
     * by a renderer if the views resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @type {number|import("../array.js").NearestDirectionFunction}
     */ this.zDirection = options.zDirection ? options.zDirection : 0;
    }
    /**
   * @return {boolean} Can expire cache.
   */ canExpireCache() {
        return this.tileCache.canExpireCache();
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */ expireCache(projection, usedTiles) {
        const tileCache = this.getTileCacheForProjection(projection);
        if (tileCache) tileCache.expireCache(usedTiles);
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {number} z Zoom level.
   * @param {import("../TileRange.js").default} tileRange Tile range.
   * @param {function(import("../Tile.js").default):(boolean|void)} callback Called with each
   *     loaded tile.  If the callback returns `false`, the tile will not be
   *     considered loaded.
   * @return {boolean} The tile range is fully covered with loaded tiles.
   */ forEachLoadedTile(projection, z, tileRange, callback) {
        const tileCache = this.getTileCacheForProjection(projection);
        if (!tileCache) return false;
        let covered = true;
        let tile, tileCoordKey, loaded;
        for(let x = tileRange.minX; x <= tileRange.maxX; ++x)for(let y = tileRange.minY; y <= tileRange.maxY; ++y){
            tileCoordKey = (0, $2540e8b802d8068a$export$92d0df0f1d25c63c)(z, x, y);
            loaded = false;
            if (tileCache.containsKey(tileCoordKey)) {
                tile = /** @type {!import("../Tile.js").default} */ tileCache.get(tileCoordKey);
                loaded = tile.getState() === (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED;
                if (loaded) loaded = callback(tile) !== false;
            }
            if (!loaded) covered = false;
        }
        return covered;
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */ getGutterForProjection(projection) {
        return 0;
    }
    /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   */ getKey() {
        return this.key_;
    }
    /**
   * Set the value to be used as the key for all tiles in the source.
   * @param {string} key The key for tiles.
   * @protected
   */ setKey(key) {
        if (this.key_ !== key) {
            this.key_ = key;
            this.changed();
        }
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {boolean} Opaque.
   */ getOpaque(projection) {
        return this.opaque_;
    }
    /**
   * @return {Array<number>|null} Resolutions.
   */ getResolutions() {
        if (!this.tileGrid) return null;
        return this.tileGrid.getResolutions();
    }
    /**
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../Tile.js").default} Tile.
   */ getTile(z, x, y, pixelRatio, projection) {
        return (0, $386903518769f502$export$817eb92a8194bab0)();
    }
    /**
   * Return the tile grid of the tile source.
   * @return {import("../tilegrid/TileGrid.js").default|null} Tile grid.
   * @api
   */ getTileGrid() {
        return this.tileGrid;
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */ getTileGridForProjection(projection) {
        if (!this.tileGrid) return (0, $e73d0cfb7f32fcdf$export$1f4812384df8a9c5)(projection);
        else return this.tileGrid;
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   * @protected
   */ getTileCacheForProjection(projection) {
        const sourceProjection = this.getProjection();
        (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(sourceProjection === null || (0, $0a1495ed54ce69a9$export$fe091d73a555748b)(sourceProjection, projection), 68 // A VectorTile source can only be rendered if it has a projection compatible with the view projection.
        );
        return this.tileCache;
    }
    /**
   * Get the tile pixel ratio for this source. Subclasses may override this
   * method, which is meant to return a supported pixel ratio that matches the
   * provided `pixelRatio` as close as possible.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Tile pixel ratio.
   */ getTilePixelRatio(pixelRatio) {
        return this.tilePixelRatio_;
    }
    /**
   * @param {number} z Z.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../size.js").Size} Tile size.
   */ getTilePixelSize(z, pixelRatio, projection) {
        const tileGrid = this.getTileGridForProjection(projection);
        const tilePixelRatio = this.getTilePixelRatio(pixelRatio);
        const tileSize = (0, $670ace09156a4e14$export$a71a825ff42fb8e1)(tileGrid.getTileSize(z), this.tmpSize);
        if (tilePixelRatio == 1) return tileSize;
        else return (0, $670ace09156a4e14$export$dcdf75081b88279d)(tileSize, tilePixelRatio, this.tmpSize);
    }
    /**
   * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
   * is outside the resolution and extent range of the tile grid, `null` will be
   * returned.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../proj/Projection.js").default} [projection] Projection.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
   *     null if no tile URL should be created for the passed `tileCoord`.
   */ getTileCoordForTileUrlFunction(tileCoord, projection) {
        projection = projection !== undefined ? projection : this.getProjection();
        const tileGrid = this.getTileGridForProjection(projection);
        if (this.getWrapX() && projection.isGlobal()) tileCoord = (0, $e73d0cfb7f32fcdf$export$39a9ce3624977b84)(tileGrid, tileCoord, projection);
        return (0, $2540e8b802d8068a$export$60bedf8e3e3c3dbe)(tileCoord, tileGrid) ? tileCoord : null;
    }
    /**
   * Remove all cached tiles from the source. The next render cycle will fetch new tiles.
   * @api
   */ clear() {
        this.tileCache.clear();
    }
    refresh() {
        this.clear();
        super.refresh();
    }
    /**
   * Increases the cache size if needed
   * @param {number} tileCount Minimum number of tiles needed.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */ updateCacheSize(tileCount, projection) {
        const tileCache = this.getTileCacheForProjection(projection);
        if (tileCount > tileCache.highWaterMark) tileCache.highWaterMark = tileCount;
    }
    /**
   * Marks a tile coord as being used, without triggering a load.
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */ useTile(z, x, y, projection) {}
}
class $8e1a49cc4a8c5d05$export$c571855c51e6c4b6 extends (0, $f3a6f6cab00ac278$export$2e2bcd8739ae039) {
    /**
   * @param {string} type Type.
   * @param {import("../Tile.js").default} tile The tile.
   */ constructor(type, tile){
        super(type);
        /**
     * The tile related to the event.
     * @type {import("../Tile.js").default}
     * @api
     */ this.tile = tile;
    }
}
var $8e1a49cc4a8c5d05$export$2e2bcd8739ae039 = $8e1a49cc4a8c5d05$var$TileSource;






function $e7957a432d1f7942$export$f0ecb46e90798741(template, tileGrid) {
    const zRegEx = /\{z\}/g;
    const xRegEx = /\{x\}/g;
    const yRegEx = /\{y\}/g;
    const dashYRegEx = /\{-y\}/g;
    return(/**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */ function(tileCoord, pixelRatio, projection) {
        if (!tileCoord) return undefined;
        else return template.replace(zRegEx, tileCoord[0].toString()).replace(xRegEx, tileCoord[1].toString()).replace(yRegEx, tileCoord[2].toString()).replace(dashYRegEx, function() {
            const z = tileCoord[0];
            const range = tileGrid.getFullTileRange(z);
            (0, $8ecea7bfe0edde91$export$a7a9523472993e97)(range, 55); // The {-y} placeholder requires a tile grid with extent
            const y = range.getHeight() - tileCoord[2] - 1;
            return y.toString();
        });
    });
}
function $e7957a432d1f7942$export$436f44dbcc31fea3(templates, tileGrid) {
    const len = templates.length;
    const tileUrlFunctions = new Array(len);
    for(let i = 0; i < len; ++i)tileUrlFunctions[i] = $e7957a432d1f7942$export$f0ecb46e90798741(templates[i], tileGrid);
    return $e7957a432d1f7942$export$4229b1d9af69b3be(tileUrlFunctions);
}
function $e7957a432d1f7942$export$4229b1d9af69b3be(tileUrlFunctions) {
    if (tileUrlFunctions.length === 1) return tileUrlFunctions[0];
    return(/**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */ function(tileCoord, pixelRatio, projection) {
        if (!tileCoord) return undefined;
        else {
            const h = (0, $2540e8b802d8068a$export$d6af199866bfb566)(tileCoord);
            const index = (0, $906cd1f2aa644a1d$export$ba467bec01d66def)(h, tileUrlFunctions.length);
            return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
        }
    });
}
function $e7957a432d1f7942$export$fab585f002f634a1(tileCoord, pixelRatio, projection) {
    return undefined;
}
function $e7957a432d1f7942$export$2a1fa079bfd73dde(url) {
    const urls = [];
    let match = /\{([a-z])-([a-z])\}/.exec(url);
    if (match) {
        // char range
        const startCharCode = match[1].charCodeAt(0);
        const stopCharCode = match[2].charCodeAt(0);
        let charCode;
        for(charCode = startCharCode; charCode <= stopCharCode; ++charCode)urls.push(url.replace(match[0], String.fromCharCode(charCode)));
        return urls;
    }
    match = /\{(\d+)-(\d+)\}/.exec(url);
    if (match) {
        // number range
        const stop = parseInt(match[2], 10);
        for(let i = parseInt(match[1], 10); i <= stop; i++)urls.push(url.replace(match[0], i.toString()));
        return urls;
    }
    urls.push(url);
    return urls;
}




/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] Cache size.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection.
 * @property {import("./Source.js").State} [state] State.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] TileGrid.
 * @property {import("../Tile.js").LoadFunction} tileLoadFunction TileLoadFunction.
 * @property {number} [tilePixelRatio] TilePixelRatio.
 * @property {import("../Tile.js").UrlFunction} [tileUrlFunction] TileUrlFunction.
 * @property {string} [url] Url.
 * @property {Array<string>} [urls] Urls.
 * @property {boolean} [wrapX=true] WrapX.
 * @property {number} [transition] Transition.
 * @property {string} [key] Key.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0] ZDirection.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 */ /**
 * @classdesc
 * Base class for sources providing tiles divided into a tile grid over http.
 *
 * @fires import("./Tile.js").TileSourceEvent
 */ class $ea2b64ebd907f1b6$var$UrlTile extends (0, $8e1a49cc4a8c5d05$export$2e2bcd8739ae039) {
    /**
   * @param {Options} options Image tile options.
   */ constructor(options){
        super({
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            opaque: options.opaque,
            projection: options.projection,
            state: options.state,
            tileGrid: options.tileGrid,
            tilePixelRatio: options.tilePixelRatio,
            wrapX: options.wrapX,
            transition: options.transition,
            interpolate: options.interpolate,
            key: options.key,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection
        });
        /**
     * @private
     * @type {boolean}
     */ this.generateTileUrlFunction_ = this.tileUrlFunction === $ea2b64ebd907f1b6$var$UrlTile.prototype.tileUrlFunction;
        /**
     * @protected
     * @type {import("../Tile.js").LoadFunction}
     */ this.tileLoadFunction = options.tileLoadFunction;
        if (options.tileUrlFunction) this.tileUrlFunction = options.tileUrlFunction;
        /**
     * @protected
     * @type {!Array<string>|null}
     */ this.urls = null;
        if (options.urls) this.setUrls(options.urls);
        else if (options.url) this.setUrl(options.url);
        /**
     * @private
     * @type {!Object<string, boolean>}
     */ this.tileLoadingKeys_ = {};
    }
    /**
   * Return the tile load function of the source.
   * @return {import("../Tile.js").LoadFunction} TileLoadFunction
   * @api
   */ getTileLoadFunction() {
        return this.tileLoadFunction;
    }
    /**
   * Return the tile URL function of the source.
   * @return {import("../Tile.js").UrlFunction} TileUrlFunction
   * @api
   */ getTileUrlFunction() {
        return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
    }
    /**
   * Return the URLs used for this source.
   * When a tileUrlFunction is used instead of url or urls,
   * null will be returned.
   * @return {!Array<string>|null} URLs.
   * @api
   */ getUrls() {
        return this.urls;
    }
    /**
   * Handle tile change events.
   * @param {import("../events/Event.js").default} event Event.
   * @protected
   */ handleTileChange(event) {
        const tile = event.target;
        const uid = (0, $386903518769f502$export$5e82334337e0f204)(tile);
        const tileState = tile.getState();
        let type;
        if (tileState == (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADING) {
            this.tileLoadingKeys_[uid] = true;
            type = (0, $5cdf7ff3046a39d7$export$2e2bcd8739ae039).TILELOADSTART;
        } else if (uid in this.tileLoadingKeys_) {
            delete this.tileLoadingKeys_[uid];
            type = tileState == (0, $d9933407e040b713$export$2e2bcd8739ae039).ERROR ? (0, $5cdf7ff3046a39d7$export$2e2bcd8739ae039).TILELOADERROR : tileState == (0, $d9933407e040b713$export$2e2bcd8739ae039).LOADED ? (0, $5cdf7ff3046a39d7$export$2e2bcd8739ae039).TILELOADEND : undefined;
        }
        if (type != undefined) this.dispatchEvent(new (0, $8e1a49cc4a8c5d05$export$c571855c51e6c4b6)(type, tile));
    }
    /**
   * Set the tile load function of the source.
   * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @api
   */ setTileLoadFunction(tileLoadFunction) {
        this.tileCache.clear();
        this.tileLoadFunction = tileLoadFunction;
        this.changed();
    }
    /**
   * Set the tile URL function of the source.
   * @param {import("../Tile.js").UrlFunction} tileUrlFunction Tile URL function.
   * @param {string} [key] Optional new tile key for the source.
   * @api
   */ setTileUrlFunction(tileUrlFunction, key) {
        this.tileUrlFunction = tileUrlFunction;
        this.tileCache.pruneExceptNewestZ();
        if (typeof key !== "undefined") this.setKey(key);
        else this.changed();
    }
    /**
   * Set the URL to use for requests.
   * @param {string} url URL.
   * @api
   */ setUrl(url) {
        const urls = (0, $e7957a432d1f7942$export$2a1fa079bfd73dde)(url);
        this.urls = urls;
        this.setUrls(urls);
    }
    /**
   * Set the URLs to use for requests.
   * @param {Array<string>} urls URLs.
   * @api
   */ setUrls(urls) {
        this.urls = urls;
        const key = urls.join("\n");
        if (this.generateTileUrlFunction_) this.setTileUrlFunction((0, $e7957a432d1f7942$export$436f44dbcc31fea3)(urls, this.tileGrid), key);
        else this.setKey(key);
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {string|undefined} Tile URL.
   */ tileUrlFunction(tileCoord, pixelRatio, projection) {
        return undefined;
    }
    /**
   * Marks a tile coord as being used, without triggering a load.
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   */ useTile(z, x, y) {
        const tileCoordKey = (0, $2540e8b802d8068a$export$92d0df0f1d25c63c)(z, x, y);
        if (this.tileCache.containsKey(tileCoordKey)) this.tileCache.get(tileCoordKey);
    }
}
var $ea2b64ebd907f1b6$export$2e2bcd8739ae039 = $ea2b64ebd907f1b6$var$UrlTile;






/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [interpolate=true] Use interpolated values when resampling.  By default,
 * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection. Default is the view projection.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {import("./Source.js").State} [state] Source state.
 * @property {typeof import("../ImageTile.js").default} [tileClass] Class used to instantiate image tiles.
 * Default is {@link module:ol/ImageTile~ImageTile}.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] Tile grid.
 * @property {import("../Tile.js").LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [tilePixelRatio=1] The pixel ratio used by the tile service. For example, if the tile
 * service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`.
 * @property {import("../Tile.js").UrlFunction} [tileUrlFunction] Optional function to get tile URL given a tile coordinate and the projection.
 * @property {string} [url] URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
 * used instead of defining each one separately in the `urls` option.
 * @property {Array<string>} [urls] An array of URL templates.
 * @property {boolean} [wrapX] Whether to wrap the world horizontally. The default, is to
 * request out-of-bounds tiles from the server. When set to `false`, only one
 * world will be rendered. When set to `true`, tiles will be requested for one
 * world only, but they will be wrapped horizontally to render multiple worlds.
 * @property {number} [transition] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {string} [key] Optional tile key for proper cache fetching
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0]
 * Choose whether to use tiles with a higher or lower zoom level when between integer
 * zoom levels. See {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution}.
 */ /**
 * @classdesc
 * Base class for sources providing images divided into a tile grid.
 *
 * @fires import("./Tile.js").TileSourceEvent
 * @api
 */ class $6c3f21e93cd381cf$var$TileImage extends (0, $ea2b64ebd907f1b6$export$2e2bcd8739ae039) {
    /**
   * @param {!Options} options Image tile options.
   */ constructor(options){
        super({
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            opaque: options.opaque,
            projection: options.projection,
            state: options.state,
            tileGrid: options.tileGrid,
            tileLoadFunction: options.tileLoadFunction ? options.tileLoadFunction : $6c3f21e93cd381cf$var$defaultTileLoadFunction,
            tilePixelRatio: options.tilePixelRatio,
            tileUrlFunction: options.tileUrlFunction,
            url: options.url,
            urls: options.urls,
            wrapX: options.wrapX,
            transition: options.transition,
            interpolate: options.interpolate !== undefined ? options.interpolate : true,
            key: options.key,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection
        });
        /**
     * @protected
     * @type {?string}
     */ this.crossOrigin = options.crossOrigin !== undefined ? options.crossOrigin : null;
        /**
     * @protected
     * @type {typeof ImageTile}
     */ this.tileClass = options.tileClass !== undefined ? options.tileClass : (0, $cd8d7f5aa641f1d9$export$2e2bcd8739ae039);
        /**
     * @protected
     * @type {!Object<string, TileCache>}
     */ this.tileCacheForProjection = {};
        /**
     * @protected
     * @type {!Object<string, import("../tilegrid/TileGrid.js").default>}
     */ this.tileGridForProjection = {};
        /**
     * @private
     * @type {number|undefined}
     */ this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;
        /**
     * @private
     * @type {boolean}
     */ this.renderReprojectionEdges_ = false;
    }
    /**
   * @return {boolean} Can expire cache.
   */ canExpireCache() {
        if (this.tileCache.canExpireCache()) return true;
        else for(const key in this.tileCacheForProjection){
            if (this.tileCacheForProjection[key].canExpireCache()) return true;
        }
        return false;
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */ expireCache(projection, usedTiles) {
        const usedTileCache = this.getTileCacheForProjection(projection);
        this.tileCache.expireCache(this.tileCache == usedTileCache ? usedTiles : {});
        for(const id in this.tileCacheForProjection){
            const tileCache = this.tileCacheForProjection[id];
            tileCache.expireCache(tileCache == usedTileCache ? usedTiles : {});
        }
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */ getGutterForProjection(projection) {
        if (this.getProjection() && projection && !(0, $0a1495ed54ce69a9$export$fe091d73a555748b)(this.getProjection(), projection)) return 0;
        else return this.getGutter();
    }
    /**
   * @return {number} Gutter.
   */ getGutter() {
        return 0;
    }
    /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   */ getKey() {
        let key = super.getKey();
        if (!this.getInterpolate()) key += ":disable-interpolation";
        return key;
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {boolean} Opaque.
   */ getOpaque(projection) {
        if (this.getProjection() && projection && !(0, $0a1495ed54ce69a9$export$fe091d73a555748b)(this.getProjection(), projection)) return false;
        else return super.getOpaque(projection);
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */ getTileGridForProjection(projection) {
        const thisProj = this.getProjection();
        if (this.tileGrid && (!thisProj || (0, $0a1495ed54ce69a9$export$fe091d73a555748b)(thisProj, projection))) return this.tileGrid;
        else {
            const projKey = (0, $386903518769f502$export$5e82334337e0f204)(projection);
            if (!(projKey in this.tileGridForProjection)) this.tileGridForProjection[projKey] = (0, $e73d0cfb7f32fcdf$export$1f4812384df8a9c5)(projection);
            return this.tileGridForProjection[projKey];
        }
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   */ getTileCacheForProjection(projection) {
        const thisProj = this.getProjection();
        if (!thisProj || (0, $0a1495ed54ce69a9$export$fe091d73a555748b)(thisProj, projection)) return this.tileCache;
        else {
            const projKey = (0, $386903518769f502$export$5e82334337e0f204)(projection);
            if (!(projKey in this.tileCacheForProjection)) this.tileCacheForProjection[projKey] = new (0, $2c5d519755b6b01a$export$2e2bcd8739ae039)(this.tileCache.highWaterMark);
            return this.tileCacheForProjection[projKey];
        }
    }
    /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {string} key The key set on the tile.
   * @return {!ImageTile} Tile.
   * @private
   */ createTile_(z, x, y, pixelRatio, projection, key) {
        const tileCoord = [
            z,
            x,
            y
        ];
        const urlTileCoord = this.getTileCoordForTileUrlFunction(tileCoord, projection);
        const tileUrl = urlTileCoord ? this.tileUrlFunction(urlTileCoord, pixelRatio, projection) : undefined;
        const tile = new this.tileClass(tileCoord, tileUrl !== undefined ? (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE : (0, $d9933407e040b713$export$2e2bcd8739ae039).EMPTY, tileUrl !== undefined ? tileUrl : "", this.crossOrigin, this.tileLoadFunction, this.tileOptions);
        tile.key = key;
        tile.addEventListener((0, $2c1b2071ddd628bd$export$2e2bcd8739ae039).CHANGE, this.handleTileChange.bind(this));
        return tile;
    }
    /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!(ImageTile|ReprojTile)} Tile.
   */ getTile(z, x, y, pixelRatio, projection) {
        const sourceProjection = this.getProjection();
        if (!sourceProjection || !projection || (0, $0a1495ed54ce69a9$export$fe091d73a555748b)(sourceProjection, projection)) return this.getTileInternal(z, x, y, pixelRatio, sourceProjection || projection);
        else {
            const cache = this.getTileCacheForProjection(projection);
            const tileCoord = [
                z,
                x,
                y
            ];
            let tile;
            const tileCoordKey = (0, $2540e8b802d8068a$export$a47fb462a08de82f)(tileCoord);
            if (cache.containsKey(tileCoordKey)) tile = cache.get(tileCoordKey);
            const key = this.getKey();
            if (tile && tile.key == key) return tile;
            else {
                const sourceTileGrid = this.getTileGridForProjection(sourceProjection);
                const targetTileGrid = this.getTileGridForProjection(projection);
                const wrappedTileCoord = this.getTileCoordForTileUrlFunction(tileCoord, projection);
                const newTile = new (0, $34cf5a2ad7f590fa$export$2e2bcd8739ae039)(sourceProjection, sourceTileGrid, projection, targetTileGrid, tileCoord, wrappedTileCoord, this.getTilePixelRatio(pixelRatio), this.getGutter(), (function(z, x, y, pixelRatio) {
                    return this.getTileInternal(z, x, y, pixelRatio, sourceProjection);
                }).bind(this), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_, this.getInterpolate());
                newTile.key = key;
                if (tile) {
                    newTile.interimTile = tile;
                    newTile.refreshInterimChain();
                    cache.replace(tileCoordKey, newTile);
                } else cache.set(tileCoordKey, newTile);
                return newTile;
            }
        }
    }
    /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {!import("../proj/Projection.js").default} projection Projection.
   * @return {!(ImageTile|ReprojTile)} Tile.
   * @protected
   */ getTileInternal(z, x, y, pixelRatio, projection) {
        let tile = null;
        const tileCoordKey = (0, $2540e8b802d8068a$export$92d0df0f1d25c63c)(z, x, y);
        const key = this.getKey();
        if (!this.tileCache.containsKey(tileCoordKey)) {
            tile = this.createTile_(z, x, y, pixelRatio, projection, key);
            this.tileCache.set(tileCoordKey, tile);
        } else {
            tile = this.tileCache.get(tileCoordKey);
            if (tile.key != key) {
                // The source's params changed. If the tile has an interim tile and if we
                // can use it then we use it. Otherwise we create a new tile.  In both
                // cases we attempt to assign an interim tile to the new tile.
                const interimTile = tile;
                tile = this.createTile_(z, x, y, pixelRatio, projection, key);
                //make the new tile the head of the list,
                if (interimTile.getState() == (0, $d9933407e040b713$export$2e2bcd8739ae039).IDLE) //the old tile hasn't begun loading yet, and is now outdated, so we can simply discard it
                tile.interimTile = interimTile.interimTile;
                else tile.interimTile = interimTile;
                tile.refreshInterimChain();
                this.tileCache.replace(tileCoordKey, tile);
            }
        }
        return tile;
    }
    /**
   * Sets whether to render reprojection edges or not (usually for debugging).
   * @param {boolean} render Render the edges.
   * @api
   */ setRenderReprojectionEdges(render) {
        if (this.renderReprojectionEdges_ == render) return;
        this.renderReprojectionEdges_ = render;
        for(const id in this.tileCacheForProjection)this.tileCacheForProjection[id].clear();
        this.changed();
    }
    /**
   * Sets the tile grid to use when reprojecting the tiles to the given
   * projection instead of the default tile grid for the projection.
   *
   * This can be useful when the default tile grid cannot be created
   * (e.g. projection has no extent defined) or
   * for optimization reasons (custom tile size, resolutions, ...).
   *
   * @param {import("../proj.js").ProjectionLike} projection Projection.
   * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
   * @api
   */ setTileGridForProjection(projection, tilegrid) {
        const proj = (0, $0a1495ed54ce69a9$export$3988ae62b71be9a3)(projection);
        if (proj) {
            const projKey = (0, $386903518769f502$export$5e82334337e0f204)(proj);
            if (!(projKey in this.tileGridForProjection)) this.tileGridForProjection[projKey] = tilegrid;
        }
    }
    clear() {
        super.clear();
        for(const id in this.tileCacheForProjection)this.tileCacheForProjection[id].clear();
    }
}
/**
 * @param {ImageTile} imageTile Image tile.
 * @param {string} src Source.
 */ function $6c3f21e93cd381cf$var$defaultTileLoadFunction(imageTile, src) {
    /** @type {HTMLImageElement|HTMLVideoElement} */ imageTile.getImage().src = src;
}
var $6c3f21e93cd381cf$export$2e2bcd8739ae039 = $6c3f21e93cd381cf$var$TileImage;



/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [interpolate=true] Use interpolated values when resampling.  By default,
 * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {import("../proj.js").ProjectionLike} [projection='EPSG:3857'] Projection.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {number} [maxZoom=42] Optional max zoom level. Not used if `tileGrid` is provided.
 * @property {number} [minZoom=0] Optional min zoom level. Not used if `tileGrid` is provided.
 * @property {number} [maxResolution] Optional tile grid resolution at level zero. Not used if `tileGrid` is provided.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] Tile grid.
 * @property {import("../Tile.js").LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [tilePixelRatio=1] The pixel ratio used by the tile service.
 * For example, if the tile service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`.
 * @property {number|import("../size.js").Size} [tileSize=[256, 256]] The tile size used by the tile service.
 * Not used if `tileGrid` is provided.
 * @property {number} [gutter=0] The size in pixels of the gutter around image tiles to ignore.
 * This allows artifacts of rendering at tile edges to be ignored.
 * Supported images should be wider and taller than the tile size by a value of `2 x gutter`.
 * @property {import("../Tile.js").UrlFunction} [tileUrlFunction] Optional function to get
 * tile URL given a tile coordinate and the projection.
 * Required if `url` or `urls` are not provided.
 * @property {string} [url] URL template. Must include `{x}`, `{y}` or `{-y}`,
 * and `{z}` placeholders. A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`,
 * may be used instead of defining each one separately in the `urls` option.
 * @property {Array<string>} [urls] An array of URL templates.
 * @property {boolean} [wrapX=true] Whether to wrap the world horizontally.
 * @property {number} [transition=250] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0]
 * Choose whether to use tiles with a higher or lower zoom level when between integer
 * zoom levels. See {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution}.
 */ /**
 * @classdesc
 * Layer source for tile data with URLs in a set XYZ format that are
 * defined in a URL template. By default, this follows the widely-used
 * Google grid where `x` 0 and `y` 0 are in the top left. Grids like
 * TMS where `x` 0 and `y` 0 are in the bottom left can be used by
 * using the `{-y}` placeholder in the URL template, so long as the
 * source does not have a custom tile grid. In this case
 * a `tileUrlFunction` can be used, such as:
 * ```js
 *  tileUrlFunction: function(coordinate) {
 *    return 'http://mapserver.com/' + coordinate[0] + '/' +
 *      coordinate[1] + '/' + (-coordinate[2] - 1) + '.png';
 *  }
 * ```
 * @api
 */ class $f7494182fda52f0c$var$XYZ extends (0, $6c3f21e93cd381cf$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] XYZ options.
   */ constructor(options){
        options = options || {};
        const projection = options.projection !== undefined ? options.projection : "EPSG:3857";
        const tileGrid = options.tileGrid !== undefined ? options.tileGrid : (0, $e73d0cfb7f32fcdf$export$38500bbeccc864ff)({
            extent: (0, $e73d0cfb7f32fcdf$export$7b5b6ef8fd55fac4)(projection),
            maxResolution: options.maxResolution,
            maxZoom: options.maxZoom,
            minZoom: options.minZoom,
            tileSize: options.tileSize
        });
        super({
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            crossOrigin: options.crossOrigin,
            interpolate: options.interpolate,
            opaque: options.opaque,
            projection: projection,
            reprojectionErrorThreshold: options.reprojectionErrorThreshold,
            tileGrid: tileGrid,
            tileLoadFunction: options.tileLoadFunction,
            tilePixelRatio: options.tilePixelRatio,
            tileUrlFunction: options.tileUrlFunction,
            url: options.url,
            urls: options.urls,
            wrapX: options.wrapX !== undefined ? options.wrapX : true,
            transition: options.transition,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection
        });
        /**
     * @private
     * @type {number}
     */ this.gutter_ = options.gutter !== undefined ? options.gutter : 0;
    }
    /**
   * @return {number} Gutter.
   */ getGutter() {
        return this.gutter_;
    }
}
var $f7494182fda52f0c$export$2e2bcd8739ae039 = $f7494182fda52f0c$var$XYZ;


const $ddbb9947601ff428$export$4de8a5e77eb994ad = '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {number} [cacheSize] Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.
 * @property {null|string} [crossOrigin='anonymous'] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [interpolate=true] Use interpolated values when resampling.  By default,
 * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
 * @property {number} [maxZoom=19] Max zoom.
 * @property {boolean} [opaque=true] Whether the layer is opaque.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {import("../Tile.js").LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [transition=250] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {string} [url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'] URL template.
 * Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * @property {boolean} [wrapX=true] Whether to wrap the world horizontally.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0]
 * Choose whether to use tiles with a higher or lower zoom level when between integer
 * zoom levels. See {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution}.
 */ /**
 * @classdesc
 * Layer source for the OpenStreetMap tile server.
 * @api
 */ class $ddbb9947601ff428$var$OSM extends (0, $f7494182fda52f0c$export$2e2bcd8739ae039) {
    /**
   * @param {Options} [options] Open Street Map options.
   */ constructor(options){
        options = options || {};
        let attributions;
        if (options.attributions !== undefined) attributions = options.attributions;
        else attributions = [
            $ddbb9947601ff428$export$4de8a5e77eb994ad
        ];
        const crossOrigin = options.crossOrigin !== undefined ? options.crossOrigin : "anonymous";
        const url = options.url !== undefined ? options.url : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
        super({
            attributions: attributions,
            attributionsCollapsible: false,
            cacheSize: options.cacheSize,
            crossOrigin: crossOrigin,
            interpolate: options.interpolate,
            maxZoom: options.maxZoom !== undefined ? options.maxZoom : 19,
            opaque: options.opaque !== undefined ? options.opaque : true,
            reprojectionErrorThreshold: options.reprojectionErrorThreshold,
            tileLoadFunction: options.tileLoadFunction,
            transition: options.transition,
            url: url,
            wrapX: options.wrapX,
            zDirection: options.zDirection
        });
    }
}
var $ddbb9947601ff428$export$2e2bcd8739ae039 = $ddbb9947601ff428$var$OSM;




class $7a289e9ed6f10e5e$export$d95683df6793e68e {
    createMap(target) {
        this.map = new (0, $708be23602a41378$export$2e2bcd8739ae039)({
            view: new (0, $82506d42cbd3642d$export$2e2bcd8739ae039)({
                zoom: 3,
                center: [
                    0,
                    0
                ],
                multiWorld: true
            }),
            layers: [
                new (0, $bbb55ff2bb1b9a84$export$2e2bcd8739ae039)({
                    source: new (0, $ddbb9947601ff428$export$2e2bcd8739ae039)()
                }), 
            ],
            target: target,
            controls: (0, $0d824765261be22c$export$ebe90cb607ad99e)({
                zoom: false,
                rotate: false
            })
        });
    }
}
const $7a289e9ed6f10e5e$export$27306c9dc6971a13 = new $7a289e9ed6f10e5e$export$d95683df6793e68e();


$parcel$exportWildcard($da71ce4e481f05cb$exports, $7a289e9ed6f10e5e$exports);

})();
//# sourceMappingURL=module.js.map
