webpackJsonp([35783957827783],{

/***/ 222:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    getDerivedStateFromProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    callee: true,
	    arguments: true,
	    arity: true
	};
	
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	
	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }
	
	        var keys = getOwnPropertyNames(sourceComponent);
	
	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }
	
	        return targetComponent;
	    }
	
	    return targetComponent;
	}
	
	module.exports = hoistNonReactStatics;


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(255);
	
	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}
	
	module.exports = function isPlainObject(o) {
	  var ctor,prot;
	
	  if (isObjectObject(o) === false) return false;
	
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	
	  // Most likely a plain Object
	  return true;
	};


/***/ }),

/***/ 255:
/***/ (function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};


/***/ }),

/***/ 259:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    nullTag = '[object Null]',
	    proxyTag = '[object Proxy]',
	    undefinedTag = '[object Undefined]';
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var Symbol = root.Symbol,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isFunction;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),

/***/ 261:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = throttle;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**!
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version 1.14.3
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Popper = factory());
	}(this, (function () { 'use strict';
	
	var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
	
	var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
	var timeoutDuration = 0;
	for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
	  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
	    timeoutDuration = 1;
	    break;
	  }
	}
	
	function microtaskDebounce(fn) {
	  var called = false;
	  return function () {
	    if (called) {
	      return;
	    }
	    called = true;
	    window.Promise.resolve().then(function () {
	      called = false;
	      fn();
	    });
	  };
	}
	
	function taskDebounce(fn) {
	  var scheduled = false;
	  return function () {
	    if (!scheduled) {
	      scheduled = true;
	      setTimeout(function () {
	        scheduled = false;
	        fn();
	      }, timeoutDuration);
	    }
	  };
	}
	
	var supportsMicroTasks = isBrowser && window.Promise;
	
	/**
	* Create a debounced version of a method, that's asynchronously deferred
	* but called in the minimum time possible.
	*
	* @method
	* @memberof Popper.Utils
	* @argument {Function} fn
	* @returns {Function}
	*/
	var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
	
	/**
	 * Check if the given variable is a function
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Any} functionToCheck - variable to check
	 * @returns {Boolean} answer to: is a function?
	 */
	function isFunction(functionToCheck) {
	  var getType = {};
	  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}
	
	/**
	 * Get CSS computed property of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Eement} element
	 * @argument {String} property
	 */
	function getStyleComputedProperty(element, property) {
	  if (element.nodeType !== 1) {
	    return [];
	  }
	  // NOTE: 1 DOM access here
	  var css = getComputedStyle(element, null);
	  return property ? css[property] : css;
	}
	
	/**
	 * Returns the parentNode or the host of the element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} parent
	 */
	function getParentNode(element) {
	  if (element.nodeName === 'HTML') {
	    return element;
	  }
	  return element.parentNode || element.host;
	}
	
	/**
	 * Returns the scrolling parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} scroll parent
	 */
	function getScrollParent(element) {
	  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
	  if (!element) {
	    return document.body;
	  }
	
	  switch (element.nodeName) {
	    case 'HTML':
	    case 'BODY':
	      return element.ownerDocument.body;
	    case '#document':
	      return element.body;
	  }
	
	  // Firefox want us to check `-x` and `-y` variations as well
	
	  var _getStyleComputedProp = getStyleComputedProperty(element),
	      overflow = _getStyleComputedProp.overflow,
	      overflowX = _getStyleComputedProp.overflowX,
	      overflowY = _getStyleComputedProp.overflowY;
	
	  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
	    return element;
	  }
	
	  return getScrollParent(getParentNode(element));
	}
	
	var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
	var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
	
	/**
	 * Determines if the browser is Internet Explorer
	 * @method
	 * @memberof Popper.Utils
	 * @param {Number} version to check
	 * @returns {Boolean} isIE
	 */
	function isIE(version) {
	  if (version === 11) {
	    return isIE11;
	  }
	  if (version === 10) {
	    return isIE10;
	  }
	  return isIE11 || isIE10;
	}
	
	/**
	 * Returns the offset parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} offset parent
	 */
	function getOffsetParent(element) {
	  if (!element) {
	    return document.documentElement;
	  }
	
	  var noOffsetParent = isIE(10) ? document.body : null;
	
	  // NOTE: 1 DOM access here
	  var offsetParent = element.offsetParent;
	  // Skip hidden elements which don't have an offsetParent
	  while (offsetParent === noOffsetParent && element.nextElementSibling) {
	    offsetParent = (element = element.nextElementSibling).offsetParent;
	  }
	
	  var nodeName = offsetParent && offsetParent.nodeName;
	
	  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
	    return element ? element.ownerDocument.documentElement : document.documentElement;
	  }
	
	  // .offsetParent will return the closest TD or TABLE in case
	  // no offsetParent is present, I hate this job...
	  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
	    return getOffsetParent(offsetParent);
	  }
	
	  return offsetParent;
	}
	
	function isOffsetContainer(element) {
	  var nodeName = element.nodeName;
	
	  if (nodeName === 'BODY') {
	    return false;
	  }
	  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
	}
	
	/**
	 * Finds the root node (document, shadowDOM root) of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} node
	 * @returns {Element} root node
	 */
	function getRoot(node) {
	  if (node.parentNode !== null) {
	    return getRoot(node.parentNode);
	  }
	
	  return node;
	}
	
	/**
	 * Finds the offset parent common to the two provided nodes
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element1
	 * @argument {Element} element2
	 * @returns {Element} common offset parent
	 */
	function findCommonOffsetParent(element1, element2) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
	    return document.documentElement;
	  }
	
	  // Here we make sure to give as "start" the element that comes first in the DOM
	  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
	  var start = order ? element1 : element2;
	  var end = order ? element2 : element1;
	
	  // Get common ancestor container
	  var range = document.createRange();
	  range.setStart(start, 0);
	  range.setEnd(end, 0);
	  var commonAncestorContainer = range.commonAncestorContainer;
	
	  // Both nodes are inside #document
	
	  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
	    if (isOffsetContainer(commonAncestorContainer)) {
	      return commonAncestorContainer;
	    }
	
	    return getOffsetParent(commonAncestorContainer);
	  }
	
	  // one of the nodes is inside shadowDOM, find which one
	  var element1root = getRoot(element1);
	  if (element1root.host) {
	    return findCommonOffsetParent(element1root.host, element2);
	  } else {
	    return findCommonOffsetParent(element1, getRoot(element2).host);
	  }
	}
	
	/**
	 * Gets the scroll value of the given element in the given side (top and left)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {String} side `top` or `left`
	 * @returns {number} amount of scrolled pixels
	 */
	function getScroll(element) {
	  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
	
	  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
	  var nodeName = element.nodeName;
	
	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    var html = element.ownerDocument.documentElement;
	    var scrollingElement = element.ownerDocument.scrollingElement || html;
	    return scrollingElement[upperSide];
	  }
	
	  return element[upperSide];
	}
	
	/*
	 * Sum or subtract the element scroll values (left and top) from a given rect object
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} rect - Rect object you want to change
	 * @param {HTMLElement} element - The element from the function reads the scroll values
	 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
	 * @return {Object} rect - The modifier rect object
	 */
	function includeScroll(rect, element) {
	  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  var scrollTop = getScroll(element, 'top');
	  var scrollLeft = getScroll(element, 'left');
	  var modifier = subtract ? -1 : 1;
	  rect.top += scrollTop * modifier;
	  rect.bottom += scrollTop * modifier;
	  rect.left += scrollLeft * modifier;
	  rect.right += scrollLeft * modifier;
	  return rect;
	}
	
	/*
	 * Helper to detect borders of a given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {CSSStyleDeclaration} styles
	 * Result of `getStyleComputedProperty` on the given element
	 * @param {String} axis - `x` or `y`
	 * @return {number} borders - The borders size of the given axis
	 */
	
	function getBordersSize(styles, axis) {
	  var sideA = axis === 'x' ? 'Left' : 'Top';
	  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
	
	  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
	}
	
	function getSize(axis, body, html, computedStyle) {
	  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
	}
	
	function getWindowSizes() {
	  var body = document.body;
	  var html = document.documentElement;
	  var computedStyle = isIE(10) && getComputedStyle(html);
	
	  return {
	    height: getSize('Height', body, html, computedStyle),
	    width: getSize('Width', body, html, computedStyle)
	  };
	}
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	/**
	 * Given element offsets, generate an output similar to getBoundingClientRect
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} offsets
	 * @returns {Object} ClientRect like output
	 */
	function getClientRect(offsets) {
	  return _extends({}, offsets, {
	    right: offsets.left + offsets.width,
	    bottom: offsets.top + offsets.height
	  });
	}
	
	/**
	 * Get bounding client rect of given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} element
	 * @return {Object} client rect
	 */
	function getBoundingClientRect(element) {
	  var rect = {};
	
	  // IE10 10 FIX: Please, don't ask, the element isn't
	  // considered in DOM in some circumstances...
	  // This isn't reproducible in IE10 compatibility mode of IE11
	  try {
	    if (isIE(10)) {
	      rect = element.getBoundingClientRect();
	      var scrollTop = getScroll(element, 'top');
	      var scrollLeft = getScroll(element, 'left');
	      rect.top += scrollTop;
	      rect.left += scrollLeft;
	      rect.bottom += scrollTop;
	      rect.right += scrollLeft;
	    } else {
	      rect = element.getBoundingClientRect();
	    }
	  } catch (e) {}
	
	  var result = {
	    left: rect.left,
	    top: rect.top,
	    width: rect.right - rect.left,
	    height: rect.bottom - rect.top
	  };
	
	  // subtract scrollbar size from sizes
	  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
	  var width = sizes.width || element.clientWidth || result.right - result.left;
	  var height = sizes.height || element.clientHeight || result.bottom - result.top;
	
	  var horizScrollbar = element.offsetWidth - width;
	  var vertScrollbar = element.offsetHeight - height;
	
	  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
	  // we make this check conditional for performance reasons
	  if (horizScrollbar || vertScrollbar) {
	    var styles = getStyleComputedProperty(element);
	    horizScrollbar -= getBordersSize(styles, 'x');
	    vertScrollbar -= getBordersSize(styles, 'y');
	
	    result.width -= horizScrollbar;
	    result.height -= vertScrollbar;
	  }
	
	  return getClientRect(result);
	}
	
	function getOffsetRectRelativeToArbitraryNode(children, parent) {
	  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  var isIE10 = isIE(10);
	  var isHTML = parent.nodeName === 'HTML';
	  var childrenRect = getBoundingClientRect(children);
	  var parentRect = getBoundingClientRect(parent);
	  var scrollParent = getScrollParent(children);
	
	  var styles = getStyleComputedProperty(parent);
	  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
	  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);
	
	  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
	  if (fixedPosition && parent.nodeName === 'HTML') {
	    parentRect.top = Math.max(parentRect.top, 0);
	    parentRect.left = Math.max(parentRect.left, 0);
	  }
	  var offsets = getClientRect({
	    top: childrenRect.top - parentRect.top - borderTopWidth,
	    left: childrenRect.left - parentRect.left - borderLeftWidth,
	    width: childrenRect.width,
	    height: childrenRect.height
	  });
	  offsets.marginTop = 0;
	  offsets.marginLeft = 0;
	
	  // Subtract margins of documentElement in case it's being used as parent
	  // we do this only on HTML because it's the only element that behaves
	  // differently when margins are applied to it. The margins are included in
	  // the box of the documentElement, in the other cases not.
	  if (!isIE10 && isHTML) {
	    var marginTop = parseFloat(styles.marginTop, 10);
	    var marginLeft = parseFloat(styles.marginLeft, 10);
	
	    offsets.top -= borderTopWidth - marginTop;
	    offsets.bottom -= borderTopWidth - marginTop;
	    offsets.left -= borderLeftWidth - marginLeft;
	    offsets.right -= borderLeftWidth - marginLeft;
	
	    // Attach marginTop and marginLeft because in some circumstances we may need them
	    offsets.marginTop = marginTop;
	    offsets.marginLeft = marginLeft;
	  }
	
	  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
	    offsets = includeScroll(offsets, parent);
	  }
	
	  return offsets;
	}
	
	function getViewportOffsetRectRelativeToArtbitraryNode(element) {
	  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  var html = element.ownerDocument.documentElement;
	  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
	  var width = Math.max(html.clientWidth, window.innerWidth || 0);
	  var height = Math.max(html.clientHeight, window.innerHeight || 0);
	
	  var scrollTop = !excludeScroll ? getScroll(html) : 0;
	  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
	
	  var offset = {
	    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
	    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
	    width: width,
	    height: height
	  };
	
	  return getClientRect(offset);
	}
	
	/**
	 * Check if the given element is fixed or is inside a fixed parent
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {Element} customContainer
	 * @returns {Boolean} answer to "isFixed?"
	 */
	function isFixed(element) {
	  var nodeName = element.nodeName;
	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    return false;
	  }
	  if (getStyleComputedProperty(element, 'position') === 'fixed') {
	    return true;
	  }
	  return isFixed(getParentNode(element));
	}
	
	/**
	 * Finds the first parent of an element that has a transformed property defined
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} first transformed parent or documentElement
	 */
	
	function getFixedPositionOffsetParent(element) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element || !element.parentElement || isIE()) {
	    return document.documentElement;
	  }
	  var el = element.parentElement;
	  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
	    el = el.parentElement;
	  }
	  return el || document.documentElement;
	}
	
	/**
	 * Computed the boundaries limits and return them
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} popper
	 * @param {HTMLElement} reference
	 * @param {number} padding
	 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
	 * @param {Boolean} fixedPosition - Is in fixed position mode
	 * @returns {Object} Coordinates of the boundaries
	 */
	function getBoundaries(popper, reference, padding, boundariesElement) {
	  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	  // NOTE: 1 DOM access here
	
	  var boundaries = { top: 0, left: 0 };
	  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
	
	  // Handle viewport case
	  if (boundariesElement === 'viewport') {
	    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
	  } else {
	    // Handle other cases based on DOM element used as boundaries
	    var boundariesNode = void 0;
	    if (boundariesElement === 'scrollParent') {
	      boundariesNode = getScrollParent(getParentNode(reference));
	      if (boundariesNode.nodeName === 'BODY') {
	        boundariesNode = popper.ownerDocument.documentElement;
	      }
	    } else if (boundariesElement === 'window') {
	      boundariesNode = popper.ownerDocument.documentElement;
	    } else {
	      boundariesNode = boundariesElement;
	    }
	
	    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
	
	    // In case of HTML, we need a different computation
	    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
	      var _getWindowSizes = getWindowSizes(),
	          height = _getWindowSizes.height,
	          width = _getWindowSizes.width;
	
	      boundaries.top += offsets.top - offsets.marginTop;
	      boundaries.bottom = height + offsets.top;
	      boundaries.left += offsets.left - offsets.marginLeft;
	      boundaries.right = width + offsets.left;
	    } else {
	      // for all the other DOM elements, this one is good
	      boundaries = offsets;
	    }
	  }
	
	  // Add paddings
	  boundaries.left += padding;
	  boundaries.top += padding;
	  boundaries.right -= padding;
	  boundaries.bottom -= padding;
	
	  return boundaries;
	}
	
	function getArea(_ref) {
	  var width = _ref.width,
	      height = _ref.height;
	
	  return width * height;
	}
	
	/**
	 * Utility used to transform the `auto` placement to the placement with more
	 * available space.
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
	  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	  if (placement.indexOf('auto') === -1) {
	    return placement;
	  }
	
	  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
	
	  var rects = {
	    top: {
	      width: boundaries.width,
	      height: refRect.top - boundaries.top
	    },
	    right: {
	      width: boundaries.right - refRect.right,
	      height: boundaries.height
	    },
	    bottom: {
	      width: boundaries.width,
	      height: boundaries.bottom - refRect.bottom
	    },
	    left: {
	      width: refRect.left - boundaries.left,
	      height: boundaries.height
	    }
	  };
	
	  var sortedAreas = Object.keys(rects).map(function (key) {
	    return _extends({
	      key: key
	    }, rects[key], {
	      area: getArea(rects[key])
	    });
	  }).sort(function (a, b) {
	    return b.area - a.area;
	  });
	
	  var filteredAreas = sortedAreas.filter(function (_ref2) {
	    var width = _ref2.width,
	        height = _ref2.height;
	    return width >= popper.clientWidth && height >= popper.clientHeight;
	  });
	
	  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
	
	  var variation = placement.split('-')[1];
	
	  return computedPlacement + (variation ? '-' + variation : '');
	}
	
	/**
	 * Get offsets to the reference element
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} state
	 * @param {Element} popper - the popper element
	 * @param {Element} reference - the reference element (the popper will be relative to this)
	 * @param {Element} fixedPosition - is in fixed position mode
	 * @returns {Object} An object containing the offsets which will be applied to the popper
	 */
	function getReferenceOffsets(state, popper, reference) {
	  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
	  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
	  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
	}
	
	/**
	 * Get the outer sizes of the given element (offset size + margins)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Object} object containing width and height properties
	 */
	function getOuterSizes(element) {
	  var styles = getComputedStyle(element);
	  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	  var result = {
	    width: element.offsetWidth + y,
	    height: element.offsetHeight + x
	  };
	  return result;
	}
	
	/**
	 * Get the opposite placement of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement
	 * @returns {String} flipped placement
	 */
	function getOppositePlacement(placement) {
	  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash[matched];
	  });
	}
	
	/**
	 * Get offsets to the popper
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} position - CSS position the Popper will get applied
	 * @param {HTMLElement} popper - the popper element
	 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
	 * @param {String} placement - one of the valid placement options
	 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
	 */
	function getPopperOffsets(popper, referenceOffsets, placement) {
	  placement = placement.split('-')[0];
	
	  // Get popper node sizes
	  var popperRect = getOuterSizes(popper);
	
	  // Add position, width and height to our offsets object
	  var popperOffsets = {
	    width: popperRect.width,
	    height: popperRect.height
	  };
	
	  // depending by the popper placement we have to compute its offsets slightly differently
	  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
	  var mainSide = isHoriz ? 'top' : 'left';
	  var secondarySide = isHoriz ? 'left' : 'top';
	  var measurement = isHoriz ? 'height' : 'width';
	  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
	
	  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
	  if (placement === secondarySide) {
	    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
	  } else {
	    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
	  }
	
	  return popperOffsets;
	}
	
	/**
	 * Mimics the `find` method of Array
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function find(arr, check) {
	  // use native find if supported
	  if (Array.prototype.find) {
	    return arr.find(check);
	  }
	
	  // use `filter` to obtain the same behavior of `find`
	  return arr.filter(check)[0];
	}
	
	/**
	 * Return the index of the matching object
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function findIndex(arr, prop, value) {
	  // use native findIndex if supported
	  if (Array.prototype.findIndex) {
	    return arr.findIndex(function (cur) {
	      return cur[prop] === value;
	    });
	  }
	
	  // use `find` + `indexOf` if `findIndex` isn't supported
	  var match = find(arr, function (obj) {
	    return obj[prop] === value;
	  });
	  return arr.indexOf(match);
	}
	
	/**
	 * Loop trough the list of modifiers and run them in order,
	 * each of them will then edit the data object.
	 * @method
	 * @memberof Popper.Utils
	 * @param {dataObject} data
	 * @param {Array} modifiers
	 * @param {String} ends - Optional modifier name used as stopper
	 * @returns {dataObject}
	 */
	function runModifiers(modifiers, data, ends) {
	  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
	
	  modifiersToRun.forEach(function (modifier) {
	    if (modifier['function']) {
	      // eslint-disable-line dot-notation
	      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
	    }
	    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
	    if (modifier.enabled && isFunction(fn)) {
	      // Add properties to offsets to make them a complete clientRect object
	      // we do this before each modifier to make sure the previous one doesn't
	      // mess with these values
	      data.offsets.popper = getClientRect(data.offsets.popper);
	      data.offsets.reference = getClientRect(data.offsets.reference);
	
	      data = fn(data, modifier);
	    }
	  });
	
	  return data;
	}
	
	/**
	 * Updates the position of the popper, computing the new offsets and applying
	 * the new style.<br />
	 * Prefer `scheduleUpdate` over `update` because of performance reasons.
	 * @method
	 * @memberof Popper
	 */
	function update() {
	  // if popper is destroyed, don't perform any further update
	  if (this.state.isDestroyed) {
	    return;
	  }
	
	  var data = {
	    instance: this,
	    styles: {},
	    arrowStyles: {},
	    attributes: {},
	    flipped: false,
	    offsets: {}
	  };
	
	  // compute reference element offsets
	  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
	
	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
	
	  // store the computed placement inside `originalPlacement`
	  data.originalPlacement = data.placement;
	
	  data.positionFixed = this.options.positionFixed;
	
	  // compute the popper offsets
	  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
	
	  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';
	
	  // run the modifiers
	  data = runModifiers(this.modifiers, data);
	
	  // the first `update` will call `onCreate` callback
	  // the other ones will call `onUpdate` callback
	  if (!this.state.isCreated) {
	    this.state.isCreated = true;
	    this.options.onCreate(data);
	  } else {
	    this.options.onUpdate(data);
	  }
	}
	
	/**
	 * Helper used to know if the given modifier is enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @returns {Boolean}
	 */
	function isModifierEnabled(modifiers, modifierName) {
	  return modifiers.some(function (_ref) {
	    var name = _ref.name,
	        enabled = _ref.enabled;
	    return enabled && name === modifierName;
	  });
	}
	
	/**
	 * Get the prefixed supported property name
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} property (camelCase)
	 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
	 */
	function getSupportedPropertyName(property) {
	  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
	  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
	
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefix = prefixes[i];
	    var toCheck = prefix ? '' + prefix + upperProp : property;
	    if (typeof document.body.style[toCheck] !== 'undefined') {
	      return toCheck;
	    }
	  }
	  return null;
	}
	
	/**
	 * Destroy the popper
	 * @method
	 * @memberof Popper
	 */
	function destroy() {
	  this.state.isDestroyed = true;
	
	  // touch DOM only if `applyStyle` modifier is enabled
	  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
	    this.popper.removeAttribute('x-placement');
	    this.popper.style.position = '';
	    this.popper.style.top = '';
	    this.popper.style.left = '';
	    this.popper.style.right = '';
	    this.popper.style.bottom = '';
	    this.popper.style.willChange = '';
	    this.popper.style[getSupportedPropertyName('transform')] = '';
	  }
	
	  this.disableEventListeners();
	
	  // remove the popper if user explicity asked for the deletion on destroy
	  // do not use `remove` because IE11 doesn't support it
	  if (this.options.removeOnDestroy) {
	    this.popper.parentNode.removeChild(this.popper);
	  }
	  return this;
	}
	
	/**
	 * Get the window associated with the element
	 * @argument {Element} element
	 * @returns {Window}
	 */
	function getWindow(element) {
	  var ownerDocument = element.ownerDocument;
	  return ownerDocument ? ownerDocument.defaultView : window;
	}
	
	function attachToScrollParents(scrollParent, event, callback, scrollParents) {
	  var isBody = scrollParent.nodeName === 'BODY';
	  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
	  target.addEventListener(event, callback, { passive: true });
	
	  if (!isBody) {
	    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
	  }
	  scrollParents.push(target);
	}
	
	/**
	 * Setup needed event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function setupEventListeners(reference, options, state, updateBound) {
	  // Resize event listener on window
	  state.updateBound = updateBound;
	  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });
	
	  // Scroll event listener on scroll parents
	  var scrollElement = getScrollParent(reference);
	  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
	  state.scrollElement = scrollElement;
	  state.eventsEnabled = true;
	
	  return state;
	}
	
	/**
	 * It will add resize/scroll events and start recalculating
	 * position of the popper element when they are triggered.
	 * @method
	 * @memberof Popper
	 */
	function enableEventListeners() {
	  if (!this.state.eventsEnabled) {
	    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
	  }
	}
	
	/**
	 * Remove event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function removeEventListeners(reference, state) {
	  // Remove resize event listener on window
	  getWindow(reference).removeEventListener('resize', state.updateBound);
	
	  // Remove scroll event listener on scroll parents
	  state.scrollParents.forEach(function (target) {
	    target.removeEventListener('scroll', state.updateBound);
	  });
	
	  // Reset state
	  state.updateBound = null;
	  state.scrollParents = [];
	  state.scrollElement = null;
	  state.eventsEnabled = false;
	  return state;
	}
	
	/**
	 * It will remove resize/scroll events and won't recalculate popper position
	 * when they are triggered. It also won't trigger onUpdate callback anymore,
	 * unless you call `update` method manually.
	 * @method
	 * @memberof Popper
	 */
	function disableEventListeners() {
	  if (this.state.eventsEnabled) {
	    cancelAnimationFrame(this.scheduleUpdate);
	    this.state = removeEventListeners(this.reference, this.state);
	  }
	}
	
	/**
	 * Tells if a given input is a number
	 * @method
	 * @memberof Popper.Utils
	 * @param {*} input to check
	 * @return {Boolean}
	 */
	function isNumeric(n) {
	  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	/**
	 * Set the style to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the style to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setStyles(element, styles) {
	  Object.keys(styles).forEach(function (prop) {
	    var unit = '';
	    // add unit if the value is numeric and is one of the following
	    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
	      unit = 'px';
	    }
	    element.style[prop] = styles[prop] + unit;
	  });
	}
	
	/**
	 * Set the attributes to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the attributes to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setAttributes(element, attributes) {
	  Object.keys(attributes).forEach(function (prop) {
	    var value = attributes[prop];
	    if (value !== false) {
	      element.setAttribute(prop, attributes[prop]);
	    } else {
	      element.removeAttribute(prop);
	    }
	  });
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} data.styles - List of style properties - values to apply to popper element
	 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The same data object
	 */
	function applyStyle(data) {
	  // any property present in `data.styles` will be applied to the popper,
	  // in this way we can make the 3rd party modifiers add custom styles to it
	  // Be aware, modifiers could override the properties defined in the previous
	  // lines of this modifier!
	  setStyles(data.instance.popper, data.styles);
	
	  // any property present in `data.attributes` will be applied to the popper,
	  // they will be set as HTML attributes of the element
	  setAttributes(data.instance.popper, data.attributes);
	
	  // if arrowElement is defined and arrowStyles has some properties
	  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
	    setStyles(data.arrowElement, data.arrowStyles);
	  }
	
	  return data;
	}
	
	/**
	 * Set the x-placement attribute before everything else because it could be used
	 * to add margins to the popper margins needs to be calculated to get the
	 * correct popper offsets.
	 * @method
	 * @memberof Popper.modifiers
	 * @param {HTMLElement} reference - The reference element used to position the popper
	 * @param {HTMLElement} popper - The HTML element used as popper
	 * @param {Object} options - Popper.js options
	 */
	function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
	  // compute reference element offsets
	  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
	
	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
	
	  popper.setAttribute('x-placement', placement);
	
	  // Apply `position` to popper before anything else because
	  // without the position applied we can't guarantee correct computations
	  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });
	
	  return options;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeStyle(data, options) {
	  var x = options.x,
	      y = options.y;
	  var popper = data.offsets.popper;
	
	  // Remove this legacy support in Popper.js v2
	
	  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'applyStyle';
	  }).gpuAcceleration;
	  if (legacyGpuAccelerationOption !== undefined) {
	    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
	  }
	  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
	
	  var offsetParent = getOffsetParent(data.instance.popper);
	  var offsetParentRect = getBoundingClientRect(offsetParent);
	
	  // Styles
	  var styles = {
	    position: popper.position
	  };
	
	  // Avoid blurry text by using full pixel integers.
	  // For pixel-perfect positioning, top/bottom prefers rounded
	  // values, while left/right prefers floored values.
	  var offsets = {
	    left: Math.floor(popper.left),
	    top: Math.round(popper.top),
	    bottom: Math.round(popper.bottom),
	    right: Math.floor(popper.right)
	  };
	
	  var sideA = x === 'bottom' ? 'top' : 'bottom';
	  var sideB = y === 'right' ? 'left' : 'right';
	
	  // if gpuAcceleration is set to `true` and transform is supported,
	  //  we use `translate3d` to apply the position to the popper we
	  // automatically use the supported prefixed version if needed
	  var prefixedProperty = getSupportedPropertyName('transform');
	
	  // now, let's make a step back and look at this code closely (wtf?)
	  // If the content of the popper grows once it's been positioned, it
	  // may happen that the popper gets misplaced because of the new content
	  // overflowing its reference element
	  // To avoid this problem, we provide two options (x and y), which allow
	  // the consumer to define the offset origin.
	  // If we position a popper on top of a reference element, we can set
	  // `x` to `top` to make the popper grow towards its top instead of
	  // its bottom.
	  var left = void 0,
	      top = void 0;
	  if (sideA === 'bottom') {
	    top = -offsetParentRect.height + offsets.bottom;
	  } else {
	    top = offsets.top;
	  }
	  if (sideB === 'right') {
	    left = -offsetParentRect.width + offsets.right;
	  } else {
	    left = offsets.left;
	  }
	  if (gpuAcceleration && prefixedProperty) {
	    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	    styles[sideA] = 0;
	    styles[sideB] = 0;
	    styles.willChange = 'transform';
	  } else {
	    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
	    var invertTop = sideA === 'bottom' ? -1 : 1;
	    var invertLeft = sideB === 'right' ? -1 : 1;
	    styles[sideA] = top * invertTop;
	    styles[sideB] = left * invertLeft;
	    styles.willChange = sideA + ', ' + sideB;
	  }
	
	  // Attributes
	  var attributes = {
	    'x-placement': data.placement
	  };
	
	  // Update `data` attributes, styles and arrowStyles
	  data.attributes = _extends({}, attributes, data.attributes);
	  data.styles = _extends({}, styles, data.styles);
	  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
	
	  return data;
	}
	
	/**
	 * Helper used to know if the given modifier depends from another one.<br />
	 * It checks if the needed modifier is listed and enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @param {Array} modifiers - list of modifiers
	 * @param {String} requestingName - name of requesting modifier
	 * @param {String} requestedName - name of requested modifier
	 * @returns {Boolean}
	 */
	function isModifierRequired(modifiers, requestingName, requestedName) {
	  var requesting = find(modifiers, function (_ref) {
	    var name = _ref.name;
	    return name === requestingName;
	  });
	
	  var isRequired = !!requesting && modifiers.some(function (modifier) {
	    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
	  });
	
	  if (!isRequired) {
	    var _requesting = '`' + requestingName + '`';
	    var requested = '`' + requestedName + '`';
	    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
	  }
	  return isRequired;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function arrow(data, options) {
	  var _data$offsets$arrow;
	
	  // arrow depends on keepTogether in order to work
	  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
	    return data;
	  }
	
	  var arrowElement = options.element;
	
	  // if arrowElement is a string, suppose it's a CSS selector
	  if (typeof arrowElement === 'string') {
	    arrowElement = data.instance.popper.querySelector(arrowElement);
	
	    // if arrowElement is not found, don't run the modifier
	    if (!arrowElement) {
	      return data;
	    }
	  } else {
	    // if the arrowElement isn't a query selector we must check that the
	    // provided DOM node is child of its popper node
	    if (!data.instance.popper.contains(arrowElement)) {
	      console.warn('WARNING: `arrow.element` must be child of its popper element!');
	      return data;
	    }
	  }
	
	  var placement = data.placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	
	  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
	
	  var len = isVertical ? 'height' : 'width';
	  var sideCapitalized = isVertical ? 'Top' : 'Left';
	  var side = sideCapitalized.toLowerCase();
	  var altSide = isVertical ? 'left' : 'top';
	  var opSide = isVertical ? 'bottom' : 'right';
	  var arrowElementSize = getOuterSizes(arrowElement)[len];
	
	  //
	  // extends keepTogether behavior making sure the popper and its
	  // reference have enough pixels in conjuction
	  //
	
	  // top/left side
	  if (reference[opSide] - arrowElementSize < popper[side]) {
	    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
	  }
	  // bottom/right side
	  if (reference[side] + arrowElementSize > popper[opSide]) {
	    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
	  }
	  data.offsets.popper = getClientRect(data.offsets.popper);
	
	  // compute center of the popper
	  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
	
	  // Compute the sideValue using the updated popper offsets
	  // take popper margin in account because we don't have this info available
	  var css = getStyleComputedProperty(data.instance.popper);
	  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
	  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
	  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
	
	  // prevent arrowElement from being placed not contiguously to its popper
	  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
	
	  data.arrowElement = arrowElement;
	  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
	
	  return data;
	}
	
	/**
	 * Get the opposite placement variation of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement variation
	 * @returns {String} flipped placement variation
	 */
	function getOppositeVariation(variation) {
	  if (variation === 'end') {
	    return 'start';
	  } else if (variation === 'start') {
	    return 'end';
	  }
	  return variation;
	}
	
	/**
	 * List of accepted placements to use as values of the `placement` option.<br />
	 * Valid placements are:
	 * - `auto`
	 * - `top`
	 * - `right`
	 * - `bottom`
	 * - `left`
	 *
	 * Each placement can have a variation from this list:
	 * - `-start`
	 * - `-end`
	 *
	 * Variations are interpreted easily if you think of them as the left to right
	 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
	 * is right.<br />
	 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
	 *
	 * Some valid examples are:
	 * - `top-end` (on top of reference, right aligned)
	 * - `right-start` (on right of reference, top aligned)
	 * - `bottom` (on bottom, centered)
	 * - `auto-right` (on the side with more space available, alignment depends by placement)
	 *
	 * @static
	 * @type {Array}
	 * @enum {String}
	 * @readonly
	 * @method placements
	 * @memberof Popper
	 */
	var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
	
	// Get rid of `auto` `auto-start` and `auto-end`
	var validPlacements = placements.slice(3);
	
	/**
	 * Given an initial placement, returns all the subsequent placements
	 * clockwise (or counter-clockwise).
	 *
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement - A valid placement (it accepts variations)
	 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
	 * @returns {Array} placements including their variations
	 */
	function clockwise(placement) {
	  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  var index = validPlacements.indexOf(placement);
	  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
	  return counter ? arr.reverse() : arr;
	}
	
	var BEHAVIORS = {
	  FLIP: 'flip',
	  CLOCKWISE: 'clockwise',
	  COUNTERCLOCKWISE: 'counterclockwise'
	};
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function flip(data, options) {
	  // if `inner` modifier is enabled, we can't use the `flip` modifier
	  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
	    return data;
	  }
	
	  if (data.flipped && data.placement === data.originalPlacement) {
	    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	    return data;
	  }
	
	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
	
	  var placement = data.placement.split('-')[0];
	  var placementOpposite = getOppositePlacement(placement);
	  var variation = data.placement.split('-')[1] || '';
	
	  var flipOrder = [];
	
	  switch (options.behavior) {
	    case BEHAVIORS.FLIP:
	      flipOrder = [placement, placementOpposite];
	      break;
	    case BEHAVIORS.CLOCKWISE:
	      flipOrder = clockwise(placement);
	      break;
	    case BEHAVIORS.COUNTERCLOCKWISE:
	      flipOrder = clockwise(placement, true);
	      break;
	    default:
	      flipOrder = options.behavior;
	  }
	
	  flipOrder.forEach(function (step, index) {
	    if (placement !== step || flipOrder.length === index + 1) {
	      return data;
	    }
	
	    placement = data.placement.split('-')[0];
	    placementOpposite = getOppositePlacement(placement);
	
	    var popperOffsets = data.offsets.popper;
	    var refOffsets = data.offsets.reference;
	
	    // using floor because the reference offsets may contain decimals we are not going to consider here
	    var floor = Math.floor;
	    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
	
	    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
	    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
	    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
	    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
	
	    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;
	
	    // flip the variation if required
	    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);
	
	    if (overlapsRef || overflowsBoundaries || flippedVariation) {
	      // this boolean to detect any flip loop
	      data.flipped = true;
	
	      if (overlapsRef || overflowsBoundaries) {
	        placement = flipOrder[index + 1];
	      }
	
	      if (flippedVariation) {
	        variation = getOppositeVariation(variation);
	      }
	
	      data.placement = placement + (variation ? '-' + variation : '');
	
	      // this object contains `position`, we want to preserve it along with
	      // any additional property we may add in the future
	      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
	
	      data = runModifiers(data.instance.modifiers, data, 'flip');
	    }
	  });
	  return data;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function keepTogether(data) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	
	  var placement = data.placement.split('-')[0];
	  var floor = Math.floor;
	  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	  var side = isVertical ? 'right' : 'bottom';
	  var opSide = isVertical ? 'left' : 'top';
	  var measurement = isVertical ? 'width' : 'height';
	
	  if (popper[side] < floor(reference[opSide])) {
	    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
	  }
	  if (popper[opSide] > floor(reference[side])) {
	    data.offsets.popper[opSide] = floor(reference[side]);
	  }
	
	  return data;
	}
	
	/**
	 * Converts a string containing value + unit into a px value number
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} str - Value + unit string
	 * @argument {String} measurement - `height` or `width`
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @returns {Number|String}
	 * Value in pixels, or original string if no values were extracted
	 */
	function toValue(str, measurement, popperOffsets, referenceOffsets) {
	  // separate value from unit
	  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
	  var value = +split[1];
	  var unit = split[2];
	
	  // If it's not a number it's an operator, I guess
	  if (!value) {
	    return str;
	  }
	
	  if (unit.indexOf('%') === 0) {
	    var element = void 0;
	    switch (unit) {
	      case '%p':
	        element = popperOffsets;
	        break;
	      case '%':
	      case '%r':
	      default:
	        element = referenceOffsets;
	    }
	
	    var rect = getClientRect(element);
	    return rect[measurement] / 100 * value;
	  } else if (unit === 'vh' || unit === 'vw') {
	    // if is a vh or vw, we calculate the size based on the viewport
	    var size = void 0;
	    if (unit === 'vh') {
	      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	    } else {
	      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	    }
	    return size / 100 * value;
	  } else {
	    // if is an explicit pixel unit, we get rid of the unit and keep the value
	    // if is an implicit unit, it's px, and we return just the value
	    return value;
	  }
	}
	
	/**
	 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} offset
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @argument {String} basePlacement
	 * @returns {Array} a two cells array with x and y offsets in numbers
	 */
	function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
	  var offsets = [0, 0];
	
	  // Use height if placement is left or right and index is 0 otherwise use width
	  // in this way the first offset will use an axis and the second one
	  // will use the other one
	  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;
	
	  // Split the offset string to obtain a list of values and operands
	  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
	  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
	    return frag.trim();
	  });
	
	  // Detect if the offset string contains a pair of values or a single one
	  // they could be separated by comma or space
	  var divider = fragments.indexOf(find(fragments, function (frag) {
	    return frag.search(/,|\s/) !== -1;
	  }));
	
	  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
	    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
	  }
	
	  // If divider is found, we divide the list of values and operands to divide
	  // them by ofset X and Y.
	  var splitRegex = /\s*,\s*|\s+/;
	  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
	
	  // Convert the values with units to absolute pixels to allow our computations
	  ops = ops.map(function (op, index) {
	    // Most of the units rely on the orientation of the popper
	    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
	    var mergeWithPrevious = false;
	    return op
	    // This aggregates any `+` or `-` sign that aren't considered operators
	    // e.g.: 10 + +5 => [10, +, +5]
	    .reduce(function (a, b) {
	      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
	        a[a.length - 1] = b;
	        mergeWithPrevious = true;
	        return a;
	      } else if (mergeWithPrevious) {
	        a[a.length - 1] += b;
	        mergeWithPrevious = false;
	        return a;
	      } else {
	        return a.concat(b);
	      }
	    }, [])
	    // Here we convert the string values into number values (in px)
	    .map(function (str) {
	      return toValue(str, measurement, popperOffsets, referenceOffsets);
	    });
	  });
	
	  // Loop trough the offsets arrays and execute the operations
	  ops.forEach(function (op, index) {
	    op.forEach(function (frag, index2) {
	      if (isNumeric(frag)) {
	        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
	      }
	    });
	  });
	  return offsets;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @argument {Number|String} options.offset=0
	 * The offset value as described in the modifier description
	 * @returns {Object} The data object, properly modified
	 */
	function offset(data, _ref) {
	  var offset = _ref.offset;
	  var placement = data.placement,
	      _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	
	  var basePlacement = placement.split('-')[0];
	
	  var offsets = void 0;
	  if (isNumeric(+offset)) {
	    offsets = [+offset, 0];
	  } else {
	    offsets = parseOffset(offset, popper, reference, basePlacement);
	  }
	
	  if (basePlacement === 'left') {
	    popper.top += offsets[0];
	    popper.left -= offsets[1];
	  } else if (basePlacement === 'right') {
	    popper.top += offsets[0];
	    popper.left += offsets[1];
	  } else if (basePlacement === 'top') {
	    popper.left += offsets[0];
	    popper.top -= offsets[1];
	  } else if (basePlacement === 'bottom') {
	    popper.left += offsets[0];
	    popper.top += offsets[1];
	  }
	
	  data.popper = popper;
	  return data;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function preventOverflow(data, options) {
	  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
	
	  // If offsetParent is the reference element, we really want to
	  // go one step up and use the next offsetParent as reference to
	  // avoid to make this modifier completely useless and look like broken
	  if (data.instance.reference === boundariesElement) {
	    boundariesElement = getOffsetParent(boundariesElement);
	  }
	
	  // NOTE: DOM access here
	  // resets the popper's position so that the document size can be calculated excluding
	  // the size of the popper element itself
	  var transformProp = getSupportedPropertyName('transform');
	  var popperStyles = data.instance.popper.style; // assignment to help minification
	  var top = popperStyles.top,
	      left = popperStyles.left,
	      transform = popperStyles[transformProp];
	
	  popperStyles.top = '';
	  popperStyles.left = '';
	  popperStyles[transformProp] = '';
	
	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
	
	  // NOTE: DOM access here
	  // restores the original style properties after the offsets have been computed
	  popperStyles.top = top;
	  popperStyles.left = left;
	  popperStyles[transformProp] = transform;
	
	  options.boundaries = boundaries;
	
	  var order = options.priority;
	  var popper = data.offsets.popper;
	
	  var check = {
	    primary: function primary(placement) {
	      var value = popper[placement];
	      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
	        value = Math.max(popper[placement], boundaries[placement]);
	      }
	      return defineProperty({}, placement, value);
	    },
	    secondary: function secondary(placement) {
	      var mainSide = placement === 'right' ? 'left' : 'top';
	      var value = popper[mainSide];
	      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
	        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
	      }
	      return defineProperty({}, mainSide, value);
	    }
	  };
	
	  order.forEach(function (placement) {
	    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
	    popper = _extends({}, popper, check[side](placement));
	  });
	
	  data.offsets.popper = popper;
	
	  return data;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function shift(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var shiftvariation = placement.split('-')[1];
	
	  // if shift shiftvariation is specified, run the modifier
	  if (shiftvariation) {
	    var _data$offsets = data.offsets,
	        reference = _data$offsets.reference,
	        popper = _data$offsets.popper;
	
	    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
	    var side = isVertical ? 'left' : 'top';
	    var measurement = isVertical ? 'width' : 'height';
	
	    var shiftOffsets = {
	      start: defineProperty({}, side, reference[side]),
	      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
	    };
	
	    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
	  }
	
	  return data;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function hide(data) {
	  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
	    return data;
	  }
	
	  var refRect = data.offsets.reference;
	  var bound = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'preventOverflow';
	  }).boundaries;
	
	  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === true) {
	      return data;
	    }
	
	    data.hide = true;
	    data.attributes['x-out-of-boundaries'] = '';
	  } else {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === false) {
	      return data;
	    }
	
	    data.hide = false;
	    data.attributes['x-out-of-boundaries'] = false;
	  }
	
	  return data;
	}
	
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function inner(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	
	  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
	
	  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
	
	  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
	
	  data.placement = getOppositePlacement(placement);
	  data.offsets.popper = getClientRect(popper);
	
	  return data;
	}
	
	/**
	 * Modifier function, each modifier can have a function of this type assigned
	 * to its `fn` property.<br />
	 * These functions will be called on each update, this means that you must
	 * make sure they are performant enough to avoid performance bottlenecks.
	 *
	 * @function ModifierFn
	 * @argument {dataObject} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {dataObject} The data object, properly modified
	 */
	
	/**
	 * Modifiers are plugins used to alter the behavior of your poppers.<br />
	 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
	 * needed by the library.
	 *
	 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
	 * All the other properties are configurations that could be tweaked.
	 * @namespace modifiers
	 */
	var modifiers = {
	  /**
	   * Modifier used to shift the popper on the start or end of its reference
	   * element.<br />
	   * It will read the variation of the `placement` property.<br />
	   * It can be one either `-end` or `-start`.
	   * @memberof modifiers
	   * @inner
	   */
	  shift: {
	    /** @prop {number} order=100 - Index used to define the order of execution */
	    order: 100,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: shift
	  },
	
	  /**
	   * The `offset` modifier can shift your popper on both its axis.
	   *
	   * It accepts the following units:
	   * - `px` or unitless, interpreted as pixels
	   * - `%` or `%r`, percentage relative to the length of the reference element
	   * - `%p`, percentage relative to the length of the popper element
	   * - `vw`, CSS viewport width unit
	   * - `vh`, CSS viewport height unit
	   *
	   * For length is intended the main axis relative to the placement of the popper.<br />
	   * This means that if the placement is `top` or `bottom`, the length will be the
	   * `width`. In case of `left` or `right`, it will be the height.
	   *
	   * You can provide a single value (as `Number` or `String`), or a pair of values
	   * as `String` divided by a comma or one (or more) white spaces.<br />
	   * The latter is a deprecated method because it leads to confusion and will be
	   * removed in v2.<br />
	   * Additionally, it accepts additions and subtractions between different units.
	   * Note that multiplications and divisions aren't supported.
	   *
	   * Valid examples are:
	   * ```
	   * 10
	   * '10%'
	   * '10, 10'
	   * '10%, 10'
	   * '10 + 10%'
	   * '10 - 5vh + 3%'
	   * '-10px + 5vh, 5px - 6%'
	   * ```
	   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
	   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
	   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  offset: {
	    /** @prop {number} order=200 - Index used to define the order of execution */
	    order: 200,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: offset,
	    /** @prop {Number|String} offset=0
	     * The offset value as described in the modifier description
	     */
	    offset: 0
	  },
	
	  /**
	   * Modifier used to prevent the popper from being positioned outside the boundary.
	   *
	   * An scenario exists where the reference itself is not within the boundaries.<br />
	   * We can say it has "escaped the boundaries" — or just "escaped".<br />
	   * In this case we need to decide whether the popper should either:
	   *
	   * - detach from the reference and remain "trapped" in the boundaries, or
	   * - if it should ignore the boundary and "escape with its reference"
	   *
	   * When `escapeWithReference` is set to`true` and reference is completely
	   * outside its boundaries, the popper will overflow (or completely leave)
	   * the boundaries in order to remain attached to the edge of the reference.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  preventOverflow: {
	    /** @prop {number} order=300 - Index used to define the order of execution */
	    order: 300,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: preventOverflow,
	    /**
	     * @prop {Array} [priority=['left','right','top','bottom']]
	     * Popper will try to prevent overflow following these priorities by default,
	     * then, it could overflow on the left and on top of the `boundariesElement`
	     */
	    priority: ['left', 'right', 'top', 'bottom'],
	    /**
	     * @prop {number} padding=5
	     * Amount of pixel used to define a minimum distance between the boundaries
	     * and the popper this makes sure the popper has always a little padding
	     * between the edges of its container
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='scrollParent'
	     * Boundaries used by the modifier, can be `scrollParent`, `window`,
	     * `viewport` or any DOM element.
	     */
	    boundariesElement: 'scrollParent'
	  },
	
	  /**
	   * Modifier used to make sure the reference and its popper stay near eachothers
	   * without leaving any gap between the two. Expecially useful when the arrow is
	   * enabled and you want to assure it to point to its reference element.
	   * It cares only about the first axis, you can still have poppers with margin
	   * between the popper and its reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  keepTogether: {
	    /** @prop {number} order=400 - Index used to define the order of execution */
	    order: 400,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: keepTogether
	  },
	
	  /**
	   * This modifier is used to move the `arrowElement` of the popper to make
	   * sure it is positioned between the reference element and its popper element.
	   * It will read the outer size of the `arrowElement` node to detect how many
	   * pixels of conjuction are needed.
	   *
	   * It has no effect if no `arrowElement` is provided.
	   * @memberof modifiers
	   * @inner
	   */
	  arrow: {
	    /** @prop {number} order=500 - Index used to define the order of execution */
	    order: 500,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: arrow,
	    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
	    element: '[x-arrow]'
	  },
	
	  /**
	   * Modifier used to flip the popper's placement when it starts to overlap its
	   * reference element.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   *
	   * **NOTE:** this modifier will interrupt the current update cycle and will
	   * restart it if it detects the need to flip the placement.
	   * @memberof modifiers
	   * @inner
	   */
	  flip: {
	    /** @prop {number} order=600 - Index used to define the order of execution */
	    order: 600,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: flip,
	    /**
	     * @prop {String|Array} behavior='flip'
	     * The behavior used to change the popper's placement. It can be one of
	     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
	     * placements (with optional variations).
	     */
	    behavior: 'flip',
	    /**
	     * @prop {number} padding=5
	     * The popper will flip if it hits the edges of the `boundariesElement`
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='viewport'
	     * The element which will define the boundaries of the popper position,
	     * the popper will never be placed outside of the defined boundaries
	     * (except if keepTogether is enabled)
	     */
	    boundariesElement: 'viewport'
	  },
	
	  /**
	   * Modifier used to make the popper flow toward the inner of the reference element.
	   * By default, when this modifier is disabled, the popper will be placed outside
	   * the reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  inner: {
	    /** @prop {number} order=700 - Index used to define the order of execution */
	    order: 700,
	    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
	    enabled: false,
	    /** @prop {ModifierFn} */
	    fn: inner
	  },
	
	  /**
	   * Modifier used to hide the popper when its reference element is outside of the
	   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
	   * be used to hide with a CSS selector the popper when its reference is
	   * out of boundaries.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   * @memberof modifiers
	   * @inner
	   */
	  hide: {
	    /** @prop {number} order=800 - Index used to define the order of execution */
	    order: 800,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: hide
	  },
	
	  /**
	   * Computes the style that will be applied to the popper element to gets
	   * properly positioned.
	   *
	   * Note that this modifier will not touch the DOM, it just prepares the styles
	   * so that `applyStyle` modifier can apply it. This separation is useful
	   * in case you need to replace `applyStyle` with a custom implementation.
	   *
	   * This modifier has `850` as `order` value to maintain backward compatibility
	   * with previous versions of Popper.js. Expect the modifiers ordering method
	   * to change in future major versions of the library.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  computeStyle: {
	    /** @prop {number} order=850 - Index used to define the order of execution */
	    order: 850,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: computeStyle,
	    /**
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3d transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties.
	     */
	    gpuAcceleration: true,
	    /**
	     * @prop {string} [x='bottom']
	     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
	     * Change this if your popper should grow in a direction different from `bottom`
	     */
	    x: 'bottom',
	    /**
	     * @prop {string} [x='left']
	     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
	     * Change this if your popper should grow in a direction different from `right`
	     */
	    y: 'right'
	  },
	
	  /**
	   * Applies the computed styles to the popper element.
	   *
	   * All the DOM manipulations are limited to this modifier. This is useful in case
	   * you want to integrate Popper.js inside a framework or view library and you
	   * want to delegate all the DOM manipulations to it.
	   *
	   * Note that if you disable this modifier, you must make sure the popper element
	   * has its position set to `absolute` before Popper.js can do its work!
	   *
	   * Just disable this modifier and define you own to achieve the desired effect.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  applyStyle: {
	    /** @prop {number} order=900 - Index used to define the order of execution */
	    order: 900,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: applyStyle,
	    /** @prop {Function} */
	    onLoad: applyStyleOnLoad,
	    /**
	     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3d transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties.
	     */
	    gpuAcceleration: undefined
	  }
	};
	
	/**
	 * The `dataObject` is an object containing all the informations used by Popper.js
	 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
	 * @name dataObject
	 * @property {Object} data.instance The Popper.js instance
	 * @property {String} data.placement Placement applied to popper
	 * @property {String} data.originalPlacement Placement originally defined on init
	 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
	 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
	 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
	 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.boundaries Offsets of the popper boundaries
	 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
	 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
	 */
	
	/**
	 * Default options provided to Popper.js constructor.<br />
	 * These can be overriden using the `options` argument of Popper.js.<br />
	 * To override an option, simply pass as 3rd argument an object with the same
	 * structure of this object, example:
	 * ```
	 * new Popper(ref, pop, {
	 *   modifiers: {
	 *     preventOverflow: { enabled: false }
	 *   }
	 * })
	 * ```
	 * @type {Object}
	 * @static
	 * @memberof Popper
	 */
	var Defaults = {
	  /**
	   * Popper's placement
	   * @prop {Popper.placements} placement='bottom'
	   */
	  placement: 'bottom',
	
	  /**
	   * Set this to true if you want popper to position it self in 'fixed' mode
	   * @prop {Boolean} positionFixed=false
	   */
	  positionFixed: false,
	
	  /**
	   * Whether events (resize, scroll) are initially enabled
	   * @prop {Boolean} eventsEnabled=true
	   */
	  eventsEnabled: true,
	
	  /**
	   * Set to true if you want to automatically remove the popper when
	   * you call the `destroy` method.
	   * @prop {Boolean} removeOnDestroy=false
	   */
	  removeOnDestroy: false,
	
	  /**
	   * Callback called when the popper is created.<br />
	   * By default, is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onCreate}
	   */
	  onCreate: function onCreate() {},
	
	  /**
	   * Callback called when the popper is updated, this callback is not called
	   * on the initialization/creation of the popper, but only on subsequent
	   * updates.<br />
	   * By default, is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onUpdate}
	   */
	  onUpdate: function onUpdate() {},
	
	  /**
	   * List of modifiers used to modify the offsets before they are applied to the popper.
	   * They provide most of the functionalities of Popper.js
	   * @prop {modifiers}
	   */
	  modifiers: modifiers
	};
	
	/**
	 * @callback onCreate
	 * @param {dataObject} data
	 */
	
	/**
	 * @callback onUpdate
	 * @param {dataObject} data
	 */
	
	// Utils
	// Methods
	var Popper = function () {
	  /**
	   * Create a new Popper.js instance
	   * @class Popper
	   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
	   * @param {HTMLElement} popper - The HTML element used as popper.
	   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
	   * @return {Object} instance - The generated Popper.js instance
	   */
	  function Popper(reference, popper) {
	    var _this = this;
	
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    classCallCheck(this, Popper);
	
	    this.scheduleUpdate = function () {
	      return requestAnimationFrame(_this.update);
	    };
	
	    // make update() debounced, so that it only runs at most once-per-tick
	    this.update = debounce(this.update.bind(this));
	
	    // with {} we create a new object with the options inside it
	    this.options = _extends({}, Popper.Defaults, options);
	
	    // init state
	    this.state = {
	      isDestroyed: false,
	      isCreated: false,
	      scrollParents: []
	    };
	
	    // get reference and popper elements (allow jQuery wrappers)
	    this.reference = reference && reference.jquery ? reference[0] : reference;
	    this.popper = popper && popper.jquery ? popper[0] : popper;
	
	    // Deep merge modifiers options
	    this.options.modifiers = {};
	    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
	      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
	    });
	
	    // Refactoring modifiers' list (Object => Array)
	    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
	      return _extends({
	        name: name
	      }, _this.options.modifiers[name]);
	    })
	    // sort the modifiers by order
	    .sort(function (a, b) {
	      return a.order - b.order;
	    });
	
	    // modifiers have the ability to execute arbitrary code when Popper.js get inited
	    // such code is executed in the same order of its modifier
	    // they could add new properties to their options configuration
	    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
	    this.modifiers.forEach(function (modifierOptions) {
	      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
	        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
	      }
	    });
	
	    // fire the first update to position the popper in the right place
	    this.update();
	
	    var eventsEnabled = this.options.eventsEnabled;
	    if (eventsEnabled) {
	      // setup event listeners, they will take care of update the position in specific situations
	      this.enableEventListeners();
	    }
	
	    this.state.eventsEnabled = eventsEnabled;
	  }
	
	  // We can't use class properties because they don't get listed in the
	  // class prototype and break stuff like Sinon stubs
	
	
	  createClass(Popper, [{
	    key: 'update',
	    value: function update$$1() {
	      return update.call(this);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy$$1() {
	      return destroy.call(this);
	    }
	  }, {
	    key: 'enableEventListeners',
	    value: function enableEventListeners$$1() {
	      return enableEventListeners.call(this);
	    }
	  }, {
	    key: 'disableEventListeners',
	    value: function disableEventListeners$$1() {
	      return disableEventListeners.call(this);
	    }
	
	    /**
	     * Schedule an update, it will run on the next UI update available
	     * @method scheduleUpdate
	     * @memberof Popper
	     */
	
	
	    /**
	     * Collection of utilities useful when writing custom modifiers.
	     * Starting from version 1.7, this method is available only if you
	     * include `popper-utils.js` before `popper.js`.
	     *
	     * **DEPRECATION**: This way to access PopperUtils is deprecated
	     * and will be removed in v2! Use the PopperUtils module directly instead.
	     * Due to the high instability of the methods contained in Utils, we can't
	     * guarantee them to follow semver. Use them at your own risk!
	     * @static
	     * @private
	     * @type {Object}
	     * @deprecated since version 1.8
	     * @member Utils
	     * @memberof Popper
	     */
	
	  }]);
	  return Popper;
	}();
	
	/**
	 * The `referenceObject` is an object that provides an interface compatible with Popper.js
	 * and lets you use it as replacement of a real DOM node.<br />
	 * You can use this method to position a popper relatively to a set of coordinates
	 * in case you don't have a DOM node to use as reference.
	 *
	 * ```
	 * new Popper(referenceObject, popperNode);
	 * ```
	 *
	 * NB: This feature isn't supported in Internet Explorer 10
	 * @name referenceObject
	 * @property {Function} data.getBoundingClientRect
	 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
	 * @property {number} data.clientWidth
	 * An ES6 getter that will return the width of the virtual reference element.
	 * @property {number} data.clientHeight
	 * An ES6 getter that will return the height of the virtual reference element.
	 */
	
	
	Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
	Popper.placements = placements;
	Popper.Defaults = Defaults;
	
	return Popper;
	
	})));
	//# sourceMappingURL=popper.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),

/***/ 268:
/***/ (function(module, exports) {

	/** @license React v16.4.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.forward_ref"):60112,n=b?Symbol.for("react.timeout"):60113;
	function q(a){if("object"===typeof a&&null!==a){var p=a.$$typeof;switch(p){case c:switch(a=a.type,a){case l:case e:case g:case f:return a;default:switch(a=a&&a.$$typeof,a){case k:case m:case h:return a;default:return p}}case d:return p}}}exports.typeOf=q;exports.AsyncMode=l;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=m;exports.Fragment=e;exports.Profiler=g;exports.Portal=d;exports.StrictMode=f;
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===l||a===g||a===f||a===n||"object"===typeof a&&null!==a&&(a.$$typeof===h||a.$$typeof===k||a.$$typeof===m)};exports.isAsyncMode=function(a){return q(a)===l};exports.isContextConsumer=function(a){return q(a)===k};exports.isContextProvider=function(a){return q(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return q(a)===m};
	exports.isFragment=function(a){return q(a)===e};exports.isProfiler=function(a){return q(a)===g};exports.isPortal=function(a){return q(a)===d};exports.isStrictMode=function(a){return q(a)===f};


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(268);
	} else {
	  module.exports = require('./cjs/react-is.development.js');
	}


/***/ }),

/***/ 270:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}
	
	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  }
	  // Binding "this" is important for shallow renderer support.
	  this.setState(updater.bind(this));
	}
	
	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
	      prevProps,
	      prevState
	    );
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	}
	
	// React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;
	
	function polyfill(Component) {
	  var prototype = Component.prototype;
	
	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }
	
	  if (
	    typeof Component.getDerivedStateFromProps !== 'function' &&
	    typeof prototype.getSnapshotBeforeUpdate !== 'function'
	  ) {
	    return Component;
	  }
	
	  // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.
	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;
	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }
	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }
	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }
	  if (
	    foundWillMountName !== null ||
	    foundWillReceivePropsName !== null ||
	    foundWillUpdateName !== null
	  ) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName =
	      typeof Component.getDerivedStateFromProps === 'function'
	        ? 'getDerivedStateFromProps()'
	        : 'getSnapshotBeforeUpdate()';
	
	    throw Error(
	      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
	        componentName +
	        ' uses ' +
	        newApiName +
	        ' but also contains the following legacy lifecycles:' +
	        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
	        (foundWillReceivePropsName !== null
	          ? '\n  ' + foundWillReceivePropsName
	          : '') +
	        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
	        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
	        'https://fb.me/react-async-component-lifecycle-hooks'
	    );
	  }
	
	  // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.
	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  }
	
	  // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.
	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error(
	        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
	      );
	    }
	
	    prototype.componentWillUpdate = componentWillUpdate;
	
	    var componentDidUpdate = prototype.componentDidUpdate;
	
	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
	      prevProps,
	      prevState,
	      maybeSnapshot
	    ) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag
	        ? this.__reactInternalSnapshot
	        : maybeSnapshot;
	
	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }
	
	  return Component;
	}
	
	exports.polyfill = polyfill;


/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var react = __webpack_require__(1);
	var PropTypes = _interopDefault(__webpack_require__(2));
	var PopperJS = _interopDefault(__webpack_require__(264));
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	var Manager = function (_Component) {
	  inherits(Manager, _Component);
	
	  function Manager() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    classCallCheck(this, Manager);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
	      _this._targetNode = node;
	    }, _this._getTargetNode = function () {
	      return _this._targetNode;
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }
	
	  createClass(Manager, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        popperManager: {
	          setTargetNode: this._setTargetNode,
	          getTargetNode: this._getTargetNode
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          tag = _props.tag,
	          children = _props.children,
	          restProps = objectWithoutProperties(_props, ['tag', 'children']);
	
	      if (tag !== false) {
	        return react.createElement(tag, restProps, children);
	      } else {
	        return children;
	      }
	    }
	  }]);
	  return Manager;
	}(react.Component);
	
	Manager.childContextTypes = {
	  popperManager: PropTypes.object.isRequired
	};
	Manager.propTypes = {
	  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
	};
	Manager.defaultProps = {
	  tag: 'div'
	};
	
	var Target = function Target(props, context) {
	  var _props$component = props.component,
	      component = _props$component === undefined ? 'div' : _props$component,
	      innerRef = props.innerRef,
	      children = props.children,
	      restProps = objectWithoutProperties(props, ['component', 'innerRef', 'children']);
	  var popperManager = context.popperManager;
	
	  var targetRef = function targetRef(node) {
	    popperManager.setTargetNode(node);
	    if (typeof innerRef === 'function') {
	      innerRef(node);
	    }
	  };
	
	  if (typeof children === 'function') {
	    var targetProps = { ref: targetRef };
	    return children({ targetProps: targetProps, restProps: restProps });
	  }
	
	  var componentProps = _extends({}, restProps);
	
	  if (typeof component === 'string') {
	    componentProps.ref = targetRef;
	  } else {
	    componentProps.innerRef = targetRef;
	  }
	
	  return react.createElement(component, componentProps, children);
	};
	
	Target.contextTypes = {
	  popperManager: PropTypes.object.isRequired
	};
	
	Target.propTypes = {
	  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  innerRef: PropTypes.func,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
	};
	
	var placements = PopperJS.placements;
	
	var Popper = function (_Component) {
	  inherits(Popper, _Component);
	
	  function Popper() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    classCallCheck(this, Popper);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
	      _this._arrowNode = node;
	    }, _this._getTargetNode = function () {
	      if (_this.props.target) {
	        return _this.props.target;
	      } else if (!_this.context.popperManager || !_this.context.popperManager.getTargetNode()) {
	        throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
	      }
	      return _this.context.popperManager.getTargetNode();
	    }, _this._getOffsets = function (data) {
	      return Object.keys(data.offsets).map(function (key) {
	        return data.offsets[key];
	      });
	    }, _this._isDataDirty = function (data) {
	      if (_this.state.data) {
	        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
	      } else {
	        return true;
	      }
	    }, _this._updateStateModifier = {
	      enabled: true,
	      order: 900,
	      fn: function fn(data) {
	        if (_this._isDataDirty(data)) {
	          _this.setState({ data: data });
	        }
	        return data;
	      }
	    }, _this._getPopperStyle = function () {
	      var data = _this.state.data;
	
	
	      if (!_this._popper || !data) {
	        return {
	          position: 'absolute',
	          pointerEvents: 'none',
	          opacity: 0
	        };
	      }
	
	      return _extends({
	        position: data.offsets.popper.position
	      }, data.styles);
	    }, _this._getPopperPlacement = function () {
	      return _this.state.data ? _this.state.data.placement : undefined;
	    }, _this._getPopperHide = function () {
	      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
	    }, _this._getArrowStyle = function () {
	      if (!_this.state.data || !_this.state.data.offsets.arrow) {
	        return {};
	      } else {
	        var _this$state$data$offs = _this.state.data.offsets.arrow,
	            top = _this$state$data$offs.top,
	            left = _this$state$data$offs.left;
	
	        return { top: top, left: left };
	      }
	    }, _this._handlePopperRef = function (node) {
	      _this._popperNode = node;
	      if (node) {
	        _this._createPopper();
	      } else {
	        _this._destroyPopper();
	      }
	      if (_this.props.innerRef) {
	        _this.props.innerRef(node);
	      }
	    }, _this._scheduleUpdate = function () {
	      _this._popper && _this._popper.scheduleUpdate();
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }
	
	  createClass(Popper, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        popper: {
	          setArrowNode: this._setArrowNode,
	          getArrowStyle: this._getArrowStyle
	        }
	      };
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(lastProps) {
	      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
	        this._destroyPopper();
	        this._createPopper();
	      }
	      if (lastProps.children !== this.props.children) {
	        this._scheduleUpdate();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._destroyPopper();
	    }
	  }, {
	    key: '_createPopper',
	    value: function _createPopper() {
	      var _this2 = this;
	
	      var _props = this.props,
	          placement = _props.placement,
	          eventsEnabled = _props.eventsEnabled,
	          positionFixed = _props.positionFixed;
	
	      var modifiers = _extends({}, this.props.modifiers, {
	        applyStyle: { enabled: false },
	        updateState: this._updateStateModifier
	      });
	      if (this._arrowNode) {
	        modifiers.arrow = _extends({}, this.props.modifiers.arrow || {}, {
	          element: this._arrowNode
	        });
	      }
	      this._popper = new PopperJS(this._getTargetNode(), this._popperNode, {
	        placement: placement,
	        positionFixed: positionFixed,
	        eventsEnabled: eventsEnabled,
	        modifiers: modifiers
	      });
	
	      // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
	      setTimeout(function () {
	        return _this2._scheduleUpdate();
	      });
	    }
	  }, {
	    key: '_destroyPopper',
	    value: function _destroyPopper() {
	      if (this._popper) {
	        this._popper.destroy();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          component = _props2.component,
	          innerRef = _props2.innerRef,
	          placement = _props2.placement,
	          eventsEnabled = _props2.eventsEnabled,
	          positionFixed = _props2.positionFixed,
	          modifiers = _props2.modifiers,
	          children = _props2.children,
	          restProps = objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'positionFixed', 'modifiers', 'children']);
	
	      var popperStyle = this._getPopperStyle();
	      var popperPlacement = this._getPopperPlacement();
	      var popperHide = this._getPopperHide();
	
	      if (typeof children === 'function') {
	        var popperProps = {
	          ref: this._handlePopperRef,
	          style: popperStyle,
	          'data-placement': popperPlacement,
	          'data-x-out-of-boundaries': popperHide
	        };
	        return children({
	          popperProps: popperProps,
	          restProps: restProps,
	          scheduleUpdate: this._scheduleUpdate
	        });
	      }
	
	      var componentProps = _extends({}, restProps, {
	        style: _extends({}, restProps.style, popperStyle),
	        'data-placement': popperPlacement,
	        'data-x-out-of-boundaries': popperHide
	      });
	
	      if (typeof component === 'string') {
	        componentProps.ref = this._handlePopperRef;
	      } else {
	        componentProps.innerRef = this._handlePopperRef;
	      }
	
	      return react.createElement(component, componentProps, children);
	    }
	  }]);
	  return Popper;
	}(react.Component);
	
	Popper.contextTypes = {
	  popperManager: PropTypes.object
	};
	Popper.childContextTypes = {
	  popper: PropTypes.object.isRequired
	};
	Popper.propTypes = {
	  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  innerRef: PropTypes.func,
	  placement: PropTypes.oneOf(placements),
	  eventsEnabled: PropTypes.bool,
	  positionFixed: PropTypes.bool,
	  modifiers: PropTypes.object,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  target: PropTypes.oneOfType([
	  // the following check is needed for SSR
	  PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object), PropTypes.shape({
	    getBoundingClientRect: PropTypes.func.isRequired,
	    clientWidth: PropTypes.number.isRequired,
	    clientHeight: PropTypes.number.isRequired
	  })])
	};
	Popper.defaultProps = {
	  component: 'div',
	  placement: 'bottom',
	  eventsEnabled: true,
	  positionFixed: false,
	  modifiers: {}
	};
	
	var Arrow = function Arrow(props, context) {
	  var _props$component = props.component,
	      component = _props$component === undefined ? 'span' : _props$component,
	      innerRef = props.innerRef,
	      children = props.children,
	      restProps = objectWithoutProperties(props, ['component', 'innerRef', 'children']);
	  var popper = context.popper;
	
	  var arrowRef = function arrowRef(node) {
	    popper.setArrowNode(node);
	    if (typeof innerRef === 'function') {
	      innerRef(node);
	    }
	  };
	  var arrowStyle = popper.getArrowStyle();
	
	  if (typeof children === 'function') {
	    var arrowProps = {
	      ref: arrowRef,
	      style: arrowStyle
	    };
	    return children({ arrowProps: arrowProps, restProps: restProps });
	  }
	
	  var componentProps = _extends({}, restProps, {
	    style: _extends({}, arrowStyle, restProps.style)
	  });
	
	  if (typeof component === 'string') {
	    componentProps.ref = arrowRef;
	  } else {
	    componentProps.innerRef = arrowRef;
	  }
	
	  return react.createElement(component, componentProps, children);
	};
	
	Arrow.contextTypes = {
	  popper: PropTypes.object.isRequired
	};
	
	Arrow.propTypes = {
	  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	  innerRef: PropTypes.func,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
	};
	
	exports.Manager = Manager;
	exports.Target = Target;
	exports.Popper = Popper;
	exports.placements = placements;
	exports.Arrow = Arrow;
	//# sourceMappingURL=react-popper.js.map


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _scrollLink = __webpack_require__(84);
	
	var _scrollLink2 = _interopRequireDefault(_scrollLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ButtonElement = function (_React$Component) {
	  _inherits(ButtonElement, _React$Component);
	
	  function ButtonElement() {
	    _classCallCheck(this, ButtonElement);
	
	    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
	  }
	
	  _createClass(ButtonElement, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'input',
	        this.props,
	        this.props.children
	      );
	    }
	  }]);
	
	  return ButtonElement;
	}(_react2.default.Component);
	
	;
	
	exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _scrollElement = __webpack_require__(128);
	
	var _scrollElement2 = _interopRequireDefault(_scrollElement);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ElementWrapper = function (_React$Component) {
	  _inherits(ElementWrapper, _React$Component);
	
	  function ElementWrapper() {
	    _classCallCheck(this, ElementWrapper);
	
	    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
	  }
	
	  _createClass(ElementWrapper, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      // Remove `parentBindings` from props
	      var newProps = _extends({}, this.props);
	      if (newProps.parentBindings) {
	        delete newProps.parentBindings;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, newProps, { ref: function ref(el) {
	            _this2.props.parentBindings.domNode = el;
	          } }),
	        this.props.children
	      );
	    }
	  }]);
	
	  return ElementWrapper;
	}(_react2.default.Component);
	
	;
	
	ElementWrapper.propTypes = {
	  name: _propTypes2.default.string,
	  id: _propTypes2.default.string
	};
	
	exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _scrollLink = __webpack_require__(84);
	
	var _scrollLink2 = _interopRequireDefault(_scrollLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LinkElement = function (_React$Component) {
	  _inherits(LinkElement, _React$Component);
	
	  function LinkElement() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, LinkElement);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
	      return _react2.default.createElement(
	        'a',
	        _this.props,
	        _this.props.children
	      );
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  return LinkElement;
	}(_react2.default.Component);
	
	;
	
	exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;
	
	var _Link = __webpack_require__(274);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _Button = __webpack_require__(272);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Element = __webpack_require__(273);
	
	var _Element2 = _interopRequireDefault(_Element);
	
	var _scroller = __webpack_require__(47);
	
	var _scroller2 = _interopRequireDefault(_scroller);
	
	var _scrollEvents = __webpack_require__(83);
	
	var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
	
	var _scrollSpy = __webpack_require__(85);
	
	var _scrollSpy2 = _interopRequireDefault(_scrollSpy);
	
	var _animateScroll = __webpack_require__(127);
	
	var _animateScroll2 = _interopRequireDefault(_animateScroll);
	
	var _scrollLink = __webpack_require__(84);
	
	var _scrollLink2 = _interopRequireDefault(_scrollLink);
	
	var _scrollElement = __webpack_require__(128);
	
	var _scrollElement2 = _interopRequireDefault(_scrollElement);
	
	var _Helpers = __webpack_require__(275);
	
	var _Helpers2 = _interopRequireDefault(_Helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Link = _Link2.default;
	exports.Button = _Button2.default;
	exports.Element = _Element2.default;
	exports.scroller = _scroller2.default;
	exports.Events = _scrollEvents2.default;
	exports.scrollSpy = _scrollSpy2.default;
	exports.animateScroll = _animateScroll2.default;
	exports.ScrollLink = _scrollLink2.default;
	exports.ScrollElement = _scrollElement2.default;
	exports.Helpers = _Helpers2.default;
	exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	/* DEPRECATED */
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(24);
	
	var utils = __webpack_require__(31);
	var scrollSpy = __webpack_require__(85);
	var defaultScroller = __webpack_require__(47);
	var PropTypes = __webpack_require__(2);
	var scrollHash = __webpack_require__(129);
	
	var protoTypes = {
	  to: PropTypes.string.isRequired,
	  containerId: PropTypes.string,
	  container: PropTypes.object,
	  activeClass: PropTypes.string,
	  spy: PropTypes.bool,
	  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	  offset: PropTypes.number,
	  delay: PropTypes.number,
	  isDynamic: PropTypes.bool,
	  onClick: PropTypes.func,
	  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
	  absolute: PropTypes.bool,
	  onSetActive: PropTypes.func,
	  onSetInactive: PropTypes.func,
	  ignoreCancelEvents: PropTypes.bool,
	  hashSpy: PropTypes.bool
	};
	
	var Helpers = {
	  Scroll: function Scroll(Component, customScroller) {
	
	    console.warn("Helpers.Scroll is deprecated since v1.7.0");
	
	    var scroller = customScroller || defaultScroller;
	
	    var Scroll = function (_React$Component) {
	      _inherits(Scroll, _React$Component);
	
	      function Scroll(props) {
	        _classCallCheck(this, Scroll);
	
	        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));
	
	        _initialiseProps.call(_this);
	
	        _this.state = {
	          active: false
	        };
	        return _this;
	      }
	
	      _createClass(Scroll, [{
	        key: 'getScrollSpyContainer',
	        value: function getScrollSpyContainer() {
	          var containerId = this.props.containerId;
	          var container = this.props.container;
	
	          if (containerId) {
	            return document.getElementById(containerId);
	          }
	
	          if (container && container.nodeType) {
	            return container;
	          }
	
	          return document;
	        }
	      }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          if (this.props.spy || this.props.hashSpy) {
	            var scrollSpyContainer = this.getScrollSpyContainer();
	
	            if (!scrollSpy.isMounted(scrollSpyContainer)) {
	              scrollSpy.mount(scrollSpyContainer);
	            }
	
	            if (this.props.hashSpy) {
	              if (!scrollHash.isMounted()) {
	                scrollHash.mount(scroller);
	              }
	              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
	            }
	
	            if (this.props.spy) {
	              scrollSpy.addStateHandler(this.stateHandler);
	            }
	
	            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);
	
	            this.setState({
	              container: scrollSpyContainer
	            });
	          }
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          scrollSpy.unmount(this.stateHandler, this.spyHandler);
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var className = "";
	
	          if (this.state && this.state.active) {
	            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
	          } else {
	            className = this.props.className;
	          }
	
	          var props = _extends({}, this.props);
	
	          for (var prop in protoTypes) {
	            if (props.hasOwnProperty(prop)) {
	              delete props[prop];
	            }
	          }
	
	          props.className = className;
	          props.onClick = this.handleClick;
	
	          return React.createElement(Component, props);
	        }
	      }]);
	
	      return Scroll;
	    }(React.Component);
	
	    var _initialiseProps = function _initialiseProps() {
	      var _this2 = this;
	
	      this.scrollTo = function (to, props) {
	        scroller.scrollTo(to, _extends({}, _this2.state, props));
	      };
	
	      this.handleClick = function (event) {
	
	        /*
	         * give the posibility to override onClick
	         */
	
	        if (_this2.props.onClick) {
	          _this2.props.onClick(event);
	        }
	
	        /*
	         * dont bubble the navigation
	         */
	
	        if (event.stopPropagation) event.stopPropagation();
	        if (event.preventDefault) event.preventDefault();
	
	        /*
	         * do the magic!
	         */
	        _this2.scrollTo(_this2.props.to, _this2.props);
	      };
	
	      this.stateHandler = function () {
	        if (scroller.getActiveLink() !== _this2.props.to) {
	          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
	            _this2.props.onSetInactive();
	          }
	          _this2.setState({ active: false });
	        }
	      };
	
	      this.spyHandler = function (y) {
	
	        var scrollSpyContainer = _this2.getScrollSpyContainer();
	
	        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
	          return;
	        }
	
	        var to = _this2.props.to;
	        var element = null;
	        var elemTopBound = 0;
	        var elemBottomBound = 0;
	        var containerTop = 0;
	
	        if (scrollSpyContainer.getBoundingClientRect) {
	          var containerCords = scrollSpyContainer.getBoundingClientRect();
	          containerTop = containerCords.top;
	        }
	
	        if (!element || _this2.props.isDynamic) {
	          element = scroller.get(to);
	          if (!element) {
	            return;
	          }
	
	          var cords = element.getBoundingClientRect();
	          elemTopBound = cords.top - containerTop + y;
	          elemBottomBound = elemTopBound + cords.height;
	        }
	
	        var offsetY = y - _this2.props.offset;
	        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
	        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
	        var activeLink = scroller.getActiveLink();
	
	        if (isOutside) {
	          if (to === activeLink) {
	            scroller.setActiveLink(void 0);
	          }
	
	          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
	            scrollHash.changeHash();
	          }
	
	          if (_this2.props.spy && _this2.state.active) {
	            _this2.setState({ active: false });
	            _this2.props.onSetInactive && _this2.props.onSetInactive();
	          }
	
	          return scrollSpy.updateStates();
	        }
	
	        if (isInside && activeLink !== to) {
	          scroller.setActiveLink(to);
	
	          _this2.props.hashSpy && scrollHash.changeHash(to);
	
	          if (_this2.props.spy) {
	            _this2.setState({ active: true });
	            _this2.props.onSetActive && _this2.props.onSetActive(to);
	          }
	          return scrollSpy.updateStates();
	        }
	      };
	    };
	
	    ;
	
	    Scroll.propTypes = protoTypes;
	
	    Scroll.defaultProps = { offset: 0 };
	
	    return Scroll;
	  },
	  Element: function Element(Component) {
	
	    console.warn("Helpers.Element is deprecated since v1.7.0");
	
	    var Element = function (_React$Component2) {
	      _inherits(Element, _React$Component2);
	
	      function Element(props) {
	        _classCallCheck(this, Element);
	
	        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));
	
	        _this3.childBindings = {
	          domNode: null
	        };
	        return _this3;
	      }
	
	      _createClass(Element, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          if (typeof window === 'undefined') {
	            return false;
	          }
	          this.registerElems(this.props.name);
	        }
	      }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	          if (this.props.name !== nextProps.name) {
	            this.registerElems(nextProps.name);
	          }
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          if (typeof window === 'undefined') {
	            return false;
	          }
	          defaultScroller.unregister(this.props.name);
	        }
	      }, {
	        key: 'registerElems',
	        value: function registerElems(name) {
	          defaultScroller.register(name, this.childBindings.domNode);
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
	        }
	      }]);
	
	      return Element;
	    }(React.Component);
	
	    ;
	
	    Element.propTypes = {
	      name: PropTypes.string,
	      id: PropTypes.string
	    };
	
	    return Element;
	  }
	};
	
	module.exports = Helpers;

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _utils = __webpack_require__(31);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _smooth = __webpack_require__(277);
	
	var _smooth2 = _interopRequireDefault(_smooth);
	
	var _cancelEvents = __webpack_require__(276);
	
	var _cancelEvents2 = _interopRequireDefault(_cancelEvents);
	
	var _scrollEvents = __webpack_require__(83);
	
	var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Gets the easing type from the smooth prop within options.
	 */
	var getAnimationType = function getAnimationType(options) {
	  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
	};
	/*
	 * Function helper
	 */
	var functionWrapper = function functionWrapper(value) {
	  return typeof value === 'function' ? value : function () {
	    return value;
	  };
	};
	/*
	 * Wraps window properties to allow server side rendering
	 */
	var currentWindowProperties = function currentWindowProperties() {
	  if (typeof window !== 'undefined') {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
	  }
	};
	
	/*
	 * Helper function to never extend 60fps on the webpage.
	 */
	var requestAnimationFrameHelper = function () {
	  return currentWindowProperties() || function (callback, element, delay) {
	    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
	  };
	}();
	
	var makeData = function makeData() {
	  return {
	    currentPositionY: 0,
	    startPositionY: 0,
	    targetPositionY: 0,
	    progress: 0,
	    duration: 0,
	    cancel: false,
	
	    target: null,
	    containerElement: null,
	    to: null,
	    start: null,
	    deltaTop: null,
	    percent: null,
	    delayTimeout: null
	  };
	};
	
	var currentPositionY = function currentPositionY(options) {
	  var containerElement = options.data.containerElement;
	  if (containerElement && containerElement !== document && containerElement !== document.body) {
	    return containerElement.scrollTop;
	  } else {
	    var supportPageOffset = window.pageXOffset !== undefined;
	    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
	    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	  }
	};
	
	var scrollContainerHeight = function scrollContainerHeight(options) {
	  var containerElement = options.data.containerElement;
	  if (containerElement && containerElement !== document && containerElement !== document.body) {
	    return Math.max(containerElement.scrollHeight, containerElement.offsetHeight, containerElement.clientHeight);
	  } else {
	    var body = document.body;
	    var html = document.documentElement;
	
	    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	  }
	};
	
	var animateScroll = function animateScroll(easing, options, timestamp) {
	  var data = options.data;
	
	  // Cancel on specific events
	  if (!options.ignoreCancelEvents && data.cancel) {
	    if (_scrollEvents2.default.registered['end']) {
	      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
	    }
	    return;
	  };
	
	  data.deltaTop = Math.round(data.targetPositionY - data.startPositionY);
	
	  if (data.start === null) {
	    data.start = timestamp;
	  }
	
	  data.progress = timestamp - data.start;
	
	  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);
	
	  data.currentPositionY = data.startPositionY + Math.ceil(data.deltaTop * data.percent);
	
	  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
	    data.containerElement.scrollTop = data.currentPositionY;
	  } else {
	    window.scrollTo(0, data.currentPositionY);
	  }
	
	  if (data.percent < 1) {
	    var easedAnimate = animateScroll.bind(null, easing, options);
	    requestAnimationFrameHelper.call(window, easedAnimate);
	    return;
	  }
	
	  if (_scrollEvents2.default.registered['end']) {
	    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
	  }
	};
	
	var setContainer = function setContainer(options) {
	  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
	};
	
	var animateTopScroll = function animateTopScroll(y, options, to, target) {
	  options.data = options.data || makeData();
	
	  window.clearTimeout(options.data.delayTimeout);
	
	  _cancelEvents2.default.subscribe(function () {
	    options.data.cancel = true;
	  });
	
	  setContainer(options);
	
	  options.data.start = null;
	  options.data.cancel = false;
	  options.data.startPositionY = currentPositionY(options);
	  options.data.targetPositionY = options.absolute ? y : y + options.data.startPositionY;
	
	  if (options.data.startPositionY === options.data.targetPositionY) {
	    if (_scrollEvents2.default.registered['end']) {
	      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPositionY);
	    }
	    return;
	  }
	
	  options.data.deltaTop = Math.round(options.data.targetPositionY - options.data.startPositionY);
	
	  options.data.duration = functionWrapper(options.duration)(options.data.deltaTop);
	  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
	  options.data.to = to;
	  options.data.target = target;
	
	  var easing = getAnimationType(options);
	  var easedAnimate = animateScroll.bind(null, easing, options);
	
	  if (options && options.delay > 0) {
	    options.data.delayTimeout = window.setTimeout(function () {
	      requestAnimationFrameHelper.call(window, easedAnimate);
	    }, options.delay);
	    return;
	  }
	
	  requestAnimationFrameHelper.call(window, easedAnimate);
	};
	
	var proceedOptions = function proceedOptions(options) {
	  options = _extends({}, options);
	  options.data = options.data || makeData();
	  options.absolute = true;
	  return options;
	};
	
	var scrollToTop = function scrollToTop(options) {
	  animateTopScroll(0, proceedOptions(options));
	};
	
	var scrollTo = function scrollTo(toY, options) {
	  animateTopScroll(toY, proceedOptions(options));
	};
	
	var scrollToBottom = function scrollToBottom(options) {
	  options = proceedOptions(options);
	  setContainer(options);
	  animateTopScroll(scrollContainerHeight(options), options);
	};
	
	var scrollMore = function scrollMore(toY, options) {
	  options = proceedOptions(options);
	  setContainer(options);
	  animateTopScroll(currentPositionY(options) + toY, options);
	};
	
	exports.default = {
	  animateTopScroll: animateTopScroll,
	  getAnimationType: getAnimationType,
	  scrollToTop: scrollToTop,
	  scrollToBottom: scrollToBottom,
	  scrollTo: scrollTo,
	  scrollMore: scrollMore
	};

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _passiveEventListeners = __webpack_require__(82);
	
	var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];
	
	exports.default = {
	  subscribe: function subscribe(cancelEvent) {
	    return typeof document !== 'undefined' && events.forEach(function (event) {
	      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
	    });
	  }
	};

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Tell the browser that the event listener won't prevent a scroll.
	 * Allowing the browser to continue scrolling without having to
	 * to wait for the listener to return.
	 */
	var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
	  var supportsPassiveOption = function () {
	    var supportsPassiveOption = false;
	    try {
	      var opts = Object.defineProperty({}, 'passive', {
	        get: function get() {
	          supportsPassiveOption = true;
	        }
	      });
	      window.addEventListener('test', null, opts);
	    } catch (e) {}
	    return supportsPassiveOption;
	  }();
	  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
	};
	
	var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
	  target.removeEventListener(eventName, listener);
	};

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(24);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _scroller = __webpack_require__(47);
	
	var _scroller2 = _interopRequireDefault(_scroller);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = function (Component) {
	  var Element = function (_React$Component) {
	    _inherits(Element, _React$Component);
	
	    function Element(props) {
	      _classCallCheck(this, Element);
	
	      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));
	
	      _this.childBindings = {
	        domNode: null
	      };
	      return _this;
	    }
	
	    _createClass(Element, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        if (typeof window === 'undefined') {
	          return false;
	        }
	        this.registerElems(this.props.name);
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (this.props.name !== nextProps.name) {
	          this.registerElems(nextProps.name);
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        if (typeof window === 'undefined') {
	          return false;
	        }
	        _scroller2.default.unregister(this.props.name);
	      }
	    }, {
	      key: 'registerElems',
	      value: function registerElems(name) {
	        _scroller2.default.register(name, this.childBindings.domNode);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
	      }
	    }]);
	
	    return Element;
	  }(_react2.default.Component);
	
	  ;
	
	  Element.propTypes = {
	    name: _propTypes2.default.string,
	    id: _propTypes2.default.string
	  };
	
	  return Element;
	};

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var Events = {
		registered: {},
		scrollEvent: {
			register: function register(evtName, callback) {
				Events.registered[evtName] = callback;
			},
			remove: function remove(evtName) {
				Events.registered[evtName] = null;
			}
		}
	};
	
	exports.default = Events;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _passiveEventListeners = __webpack_require__(82);
	
	var _utils = __webpack_require__(31);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var scrollHash = {
	  mountFlag: false,
	  initialized: false,
	  scroller: null,
	  containers: {},
	
	  mount: function mount(scroller) {
	    this.scroller = scroller;
	
	    this.handleHashChange = this.handleHashChange.bind(this);
	    window.addEventListener('hashchange', this.handleHashChange);
	
	    this.initStateFromHash();
	    this.mountFlag = true;
	  },
	  mapContainer: function mapContainer(to, container) {
	    this.containers[to] = container;
	  },
	  isMounted: function isMounted() {
	    return this.mountFlag;
	  },
	  isInitialized: function isInitialized() {
	    return this.initialized;
	  },
	  initStateFromHash: function initStateFromHash() {
	    var _this = this;
	
	    var hash = this.getHash();
	    if (hash) {
	      window.setTimeout(function () {
	        _this.scrollTo(hash, true);
	        _this.initialized = true;
	      }, 10);
	    } else {
	      this.initialized = true;
	    }
	  },
	  scrollTo: function scrollTo(to, isInit) {
	    var scroller = this.scroller;
	    var element = scroller.get(to);
	    if (element && (isInit || to !== scroller.getActiveLink())) {
	      var container = this.containers[to] || document;
	      scroller.scrollTo(to, { container: container });
	    }
	  },
	  getHash: function getHash() {
	    return _utils2.default.getHash();
	  },
	  changeHash: function changeHash(to) {
	    if (this.isInitialized() && _utils2.default.getHash() !== to) {
	      _utils2.default.pushHash(to);
	    }
	  },
	  handleHashChange: function handleHashChange() {
	    this.scrollTo(this.getHash());
	  },
	  unmount: function unmount() {
	    this.scroller = null;
	    this.containers = null;
	    window.removeEventListener('hashchange', this.handleHashChange);
	  }
	};
	
	exports.default = scrollHash;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(24);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _utils = __webpack_require__(31);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _scrollSpy = __webpack_require__(85);
	
	var _scrollSpy2 = _interopRequireDefault(_scrollSpy);
	
	var _scroller = __webpack_require__(47);
	
	var _scroller2 = _interopRequireDefault(_scroller);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _scrollHash = __webpack_require__(129);
	
	var _scrollHash2 = _interopRequireDefault(_scrollHash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var protoTypes = {
	  to: _propTypes2.default.string.isRequired,
	  containerId: _propTypes2.default.string,
	  container: _propTypes2.default.object,
	  activeClass: _propTypes2.default.string,
	  spy: _propTypes2.default.bool,
	  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
	  offset: _propTypes2.default.number,
	  delay: _propTypes2.default.number,
	  isDynamic: _propTypes2.default.bool,
	  onClick: _propTypes2.default.func,
	  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	  absolute: _propTypes2.default.bool,
	  onSetActive: _propTypes2.default.func,
	  onSetInactive: _propTypes2.default.func,
	  ignoreCancelEvents: _propTypes2.default.bool,
	  hashSpy: _propTypes2.default.bool
	};
	
	exports.default = function (Component, customScroller) {
	
	  var scroller = customScroller || _scroller2.default;
	
	  var Link = function (_React$PureComponent) {
	    _inherits(Link, _React$PureComponent);
	
	    function Link(props) {
	      _classCallCheck(this, Link);
	
	      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));
	
	      _initialiseProps.call(_this);
	
	      _this.state = {
	        active: false
	      };
	      return _this;
	    }
	
	    _createClass(Link, [{
	      key: 'getScrollSpyContainer',
	      value: function getScrollSpyContainer() {
	        var containerId = this.props.containerId;
	        var container = this.props.container;
	
	        if (containerId && !container) {
	          return document.getElementById(containerId);
	        }
	
	        if (container && container.nodeType) {
	          return container;
	        }
	
	        return document;
	      }
	    }, {
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        if (this.props.spy || this.props.hashSpy) {
	          var scrollSpyContainer = this.getScrollSpyContainer();
	
	          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
	            _scrollSpy2.default.mount(scrollSpyContainer);
	          }
	
	          if (this.props.hashSpy) {
	            if (!_scrollHash2.default.isMounted()) {
	              _scrollHash2.default.mount(scroller);
	            }
	            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
	          }
	
	          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);
	
	          this.setState({
	            container: scrollSpyContainer
	          });
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var className = "";
	
	        if (this.state && this.state.active) {
	          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
	        } else {
	          className = this.props.className;
	        }
	
	        var props = _extends({}, this.props);
	
	        for (var prop in protoTypes) {
	          if (props.hasOwnProperty(prop)) {
	            delete props[prop];
	          }
	        }
	
	        props.className = className;
	        props.onClick = this.handleClick;
	
	        return _react2.default.createElement(Component, props);
	      }
	    }]);
	
	    return Link;
	  }(_react2.default.PureComponent);
	
	  var _initialiseProps = function _initialiseProps() {
	    var _this2 = this;
	
	    this.scrollTo = function (to, props) {
	      scroller.scrollTo(to, _extends({}, _this2.state, props));
	    };
	
	    this.handleClick = function (event) {
	
	      /*
	       * give the posibility to override onClick
	       */
	
	      if (_this2.props.onClick) {
	        _this2.props.onClick(event);
	      }
	
	      /*
	       * dont bubble the navigation
	       */
	
	      if (event.stopPropagation) event.stopPropagation();
	      if (event.preventDefault) event.preventDefault();
	
	      /*
	       * do the magic!
	       */
	      _this2.scrollTo(_this2.props.to, _this2.props);
	    };
	
	    this.spyHandler = function (y) {
	
	      var scrollSpyContainer = _this2.getScrollSpyContainer();
	
	      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
	        return;
	      }
	
	      var to = _this2.props.to;
	      var element = null;
	      var elemTopBound = 0;
	      var elemBottomBound = 0;
	      var containerTop = 0;
	
	      if (scrollSpyContainer.getBoundingClientRect) {
	        var containerCords = scrollSpyContainer.getBoundingClientRect();
	        containerTop = containerCords.top;
	      }
	
	      if (!element || _this2.props.isDynamic) {
	        element = scroller.get(to);
	        if (!element) {
	          return;
	        }
	
	        var cords = element.getBoundingClientRect();
	        elemTopBound = cords.top - containerTop + y;
	        elemBottomBound = elemTopBound + cords.height;
	      }
	
	      var offsetY = y - _this2.props.offset;
	      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
	      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
	      var activeLink = scroller.getActiveLink();
	
	      if (isOutside) {
	        if (to === activeLink) {
	          scroller.setActiveLink(void 0);
	        }
	
	        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
	          _scrollHash2.default.changeHash();
	        }
	
	        if (_this2.props.spy && _this2.state.active) {
	          _this2.setState({ active: false });
	          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
	        }
	      }
	
	      if (isInside && (activeLink !== to || _this2.state.active === false)) {
	        scroller.setActiveLink(to);
	
	        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);
	
	        if (_this2.props.spy) {
	          _this2.setState({ active: true });
	          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
	        }
	      }
	    };
	  };
	
	  ;
	
	  Link.propTypes = protoTypes;
	
	  Link.defaultProps = { offset: 0 };
	
	  return Link;
	};

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(261);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _passiveEventListeners = __webpack_require__(82);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// The eventHandler will execute at a rate of 15fps
	var eventThrottler = function eventThrottler(eventHandler) {
	  return (0, _lodash2.default)(eventHandler, 66);
	};
	
	var scrollSpy = {
	
	  spyCallbacks: [],
	  spySetState: [],
	  scrollSpyContainers: [],
	
	  mount: function mount(scrollSpyContainer) {
	    if (scrollSpyContainer) {
	      var eventHandler = eventThrottler(function (event) {
	        scrollSpy.scrollHandler(scrollSpyContainer);
	      });
	      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
	      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
	    }
	  },
	  isMounted: function isMounted(scrollSpyContainer) {
	    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
	  },
	  currentPositionY: function currentPositionY(scrollSpyContainer) {
	    if (scrollSpyContainer === document) {
	      var supportPageOffset = window.pageXOffset !== undefined;
	      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
	      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	    } else {
	      return scrollSpyContainer.scrollTop;
	    }
	  },
	  scrollHandler: function scrollHandler(scrollSpyContainer) {
	    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
	    callbacks.forEach(function (c) {
	      return c(scrollSpy.currentPositionY(scrollSpyContainer));
	    });
	  },
	  addStateHandler: function addStateHandler(handler) {
	    scrollSpy.spySetState.push(handler);
	  },
	  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
	    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];
	
	    if (!container.spyCallbacks) {
	      container.spyCallbacks = [];
	    }
	
	    container.spyCallbacks.push(handler);
	
	    handler(scrollSpy.currentPositionY(scrollSpyContainer));
	  },
	  updateStates: function updateStates() {
	    scrollSpy.spySetState.forEach(function (s) {
	      return s();
	    });
	  },
	  unmount: function unmount(stateHandler, spyHandler) {
	    scrollSpy.scrollSpyContainers.forEach(function (c) {
	      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
	    });
	
	    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
	      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
	    }
	
	    document.removeEventListener('scroll', scrollSpy.scrollHandler);
	  },
	
	
	  update: function update() {
	    return scrollSpy.scrollSpyContainers.forEach(function (c) {
	      return scrollSpy.scrollHandler(c);
	    });
	  }
	};
	
	exports.default = scrollSpy;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _utils = __webpack_require__(31);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _animateScroll = __webpack_require__(127);
	
	var _animateScroll2 = _interopRequireDefault(_animateScroll);
	
	var _scrollEvents = __webpack_require__(83);
	
	var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __mapped = {};
	var __activeLink = void 0;
	
	exports.default = {
	
	  unmount: function unmount() {
	    __mapped = {};
	  },
	
	  register: function register(name, element) {
	    __mapped[name] = element;
	  },
	
	  unregister: function unregister(name) {
	    delete __mapped[name];
	  },
	
	  get: function get(name) {
	    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
	  },
	
	  setActiveLink: function setActiveLink(link) {
	    return __activeLink = link;
	  },
	
	  getActiveLink: function getActiveLink() {
	    return __activeLink;
	  },
	
	  scrollTo: function scrollTo(to, props) {
	
	    var target = this.get(to);
	
	    if (!target) {
	      console.warn("target Element not found");
	      return;
	    }
	
	    props = _extends({}, props, { absolute: false });
	
	    var containerId = props.containerId;
	    var container = props.container;
	
	    var containerElement = void 0;
	    if (containerId) {
	      containerElement = document.getElementById(containerId);
	    } else if (container && container.nodeType) {
	      containerElement = container;
	    } else {
	      containerElement = document;
	    }
	
	    if (_scrollEvents2.default.registered.begin) {
	      _scrollEvents2.default.registered.begin(to, target);
	    }
	
	    props.absolute = true;
	
	    var scrollOffset = _utils2.default.scrollOffset(containerElement, target) + (props.offset || 0);
	
	    /*
	     * if animate is not provided just scroll into the view
	     */
	    if (!props.smooth) {
	      if (containerElement === document) {
	        window.scrollTo(0, scrollOffset);
	      } else {
	        containerElement.scrollTop = scrollOffset;
	      }
	
	      if (_scrollEvents2.default.registered['end']) {
	        _scrollEvents2.default.registered['end'](to, target);
	      }
	
	      return;
	    }
	
	    /*
	     * Animate scrolling
	     */
	
	    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
	  }
	};

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /*
	   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
	   */
	  defaultEasing: function defaultEasing(x) {
	    if (x < 0.5) {
	      return Math.pow(x * 2, 2) / 2;
	    }
	    return 1 - Math.pow((1 - x) * 2, 2) / 2;
	  },
	  /*
	   * https://gist.github.com/gre/1650294
	   */
	  // no easing, no acceleration
	  linear: function linear(x) {
	    return x;
	  },
	  // accelerating from zero velocity
	  easeInQuad: function easeInQuad(x) {
	    return x * x;
	  },
	  // decelerating to zero velocity
	  easeOutQuad: function easeOutQuad(x) {
	    return x * (2 - x);
	  },
	  // acceleration until halfway, then deceleration
	  easeInOutQuad: function easeInOutQuad(x) {
	    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
	  },
	  // accelerating from zero velocity 
	  easeInCubic: function easeInCubic(x) {
	    return x * x * x;
	  },
	  // decelerating to zero velocity π
	  easeOutCubic: function easeOutCubic(x) {
	    return --x * x * x + 1;
	  },
	  // acceleration until halfway, then deceleration 
	  easeInOutCubic: function easeInOutCubic(x) {
	    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
	  },
	  // accelerating from zero velocity 
	  easeInQuart: function easeInQuart(x) {
	    return x * x * x * x;
	  },
	  // decelerating to zero velocity 
	  easeOutQuart: function easeOutQuart(x) {
	    return 1 - --x * x * x * x;
	  },
	  // acceleration until halfway, then deceleration
	  easeInOutQuart: function easeInOutQuart(x) {
	    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
	  },
	  // accelerating from zero velocity
	  easeInQuint: function easeInQuint(x) {
	    return x * x * x * x * x;
	  },
	  // decelerating to zero velocity
	  easeOutQuint: function easeOutQuint(x) {
	    return 1 + --x * x * x * x * x;
	  },
	  // acceleration until halfway, then deceleration 
	  easeInOutQuint: function easeInOutQuint(x) {
	    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
	  }
	};

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var pushHash = function pushHash(hash) {
	  hash = hash ? hash.indexOf('#') === 0 ? hash : '#' + hash : '';
	
	  if (history.pushState) {
	    var loc = window.location;
	    history.pushState(null, null, hash ? loc.pathname + loc.search + hash
	    // remove hash
	    : loc.pathname + loc.search);
	  } else {
	    location.hash = hash;
	  }
	};
	
	var getHash = function getHash() {
	  return window.location.hash.replace(/^#/, '');
	};
	
	var filterElementInContainer = function filterElementInContainer(container) {
	  return function (element) {
	    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
	  };
	};
	
	var scrollOffset = function scrollOffset(c, t) {
	  return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position === "relative" ? t.offsetTop : t.getBoundingClientRect().top + c.scrollTop;
	};
	
	exports.default = {
	  pushHash: pushHash,
	  getHash: getHash,
	  filterElementInContainer: filterElementInContainer,
	  scrollOffset: scrollOffset
	};

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var React = __webpack_require__(1);
	var React__default = _interopDefault(React);
	var PropTypes = _interopDefault(__webpack_require__(2));
	var classNames = _interopDefault(__webpack_require__(150));
	var isFunction = _interopDefault(__webpack_require__(259));
	var isobject = _interopDefault(__webpack_require__(260));
	var ReactDOM = _interopDefault(__webpack_require__(24));
	var reactPopper = __webpack_require__(271);
	var toNumber = _interopDefault(__webpack_require__(262));
	var reactLifecyclesCompat = __webpack_require__(270);
	
	// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
	function getScrollbarWidth() {
	  var scrollDiv = document.createElement('div');
	  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
	  scrollDiv.style.position = 'absolute';
	  scrollDiv.style.top = '-9999px';
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';
	  document.body.appendChild(scrollDiv);
	  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	  return scrollbarWidth;
	}
	
	function setScrollbarWidth(padding) {
	  document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
	}
	
	function isBodyOverflowing() {
	  return document.body.clientWidth < window.innerWidth;
	}
	
	function getOriginalBodyPadding() {
	  var style = window.getComputedStyle(document.body, null);
	
	  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
	}
	
	function conditionallyUpdateScrollbar() {
	  var scrollbarWidth = getScrollbarWidth();
	  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
	  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
	  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
	
	  if (isBodyOverflowing()) {
	    setScrollbarWidth(bodyPadding + scrollbarWidth);
	  }
	}
	
	var globalCssModule = void 0;
	
	function setGlobalCssModule(cssModule) {
	  globalCssModule = cssModule;
	}
	
	function mapToCssModules() {
	  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var cssModule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalCssModule;
	
	  if (!cssModule) return className;
	  return className.split(' ').map(function (c) {
	    return cssModule[c] || c;
	  }).join(' ');
	}
	
	/**
	 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
	 */
	function omit(obj, omitKeys) {
	  var result = {};
	  Object.keys(obj).forEach(function (key) {
	    if (omitKeys.indexOf(key) === -1) {
	      result[key] = obj[key];
	    }
	  });
	  return result;
	}
	
	/**
	 * Returns a filtered copy of an object with only the specified keys.
	 */
	function pick(obj, keys) {
	  var pickKeys = Array.isArray(keys) ? keys : [keys];
	  var length = pickKeys.length;
	  var key = void 0;
	  var result = {};
	
	  while (length > 0) {
	    length -= 1;
	    key = pickKeys[length];
	    result[key] = obj[key];
	  }
	  return result;
	}
	
	var warned = {};
	
	function warnOnce(message) {
	  if (!warned[message]) {
	    /* istanbul ignore else */
	    if (typeof console !== 'undefined') {
	      console.error(message); // eslint-disable-line no-console
	    }
	    warned[message] = true;
	  }
	}
	
	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
	      warnOnce('"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation);
	    }
	
	    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	      rest[_key - 3] = arguments[_key];
	    }
	
	    return propType.apply(undefined, [props, propName, componentName].concat(rest));
	  };
	}
	
	function DOMElement(props, propName, componentName) {
	  if (!(props[propName] instanceof Element)) {
	    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
	  }
	}
	
	/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
	// These are all setup to match what is in the bootstrap _variables.scss
	// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
	var TransitionTimeouts = {
	  Fade: 150, // $transition-fade
	  Collapse: 350, // $transition-collapse
	  Modal: 300, // $modal-transition
	  Carousel: 600 // $carousel-transition
	};
	
	// Duplicated Transition.propType keys to ensure that Reactstrap builds
	// for distribution properly exclude these keys for nested child HTML attributes
	// since `react-transition-group` removes propTypes in production builds.
	var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
	
	var TransitionStatuses = {
	  ENTERING: 'entering',
	  ENTERED: 'entered',
	  EXITING: 'exiting',
	  EXITED: 'exited'
	};
	
	var keyCodes = {
	  esc: 27,
	  space: 32,
	  tab: 9,
	  up: 38,
	  down: 40
	};
	
	var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	function findDOMElements(target) {
	  if (isFunction(target)) {
	    return target();
	  }
	  if (typeof target === 'string' && canUseDOM) {
	    var selection = document.querySelectorAll(target);
	    if (!selection.length) {
	      selection = document.querySelectorAll('#' + target);
	    }
	    if (!selection.length) {
	      throw new Error('The target \'' + target + '\' could not be identified in the dom, tip: check spelling');
	    }
	    return selection;
	  }
	  return target;
	}
	
	function isArrayOrNodeList(els) {
	  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
	}
	
	function getTarget(target) {
	  var els = findDOMElements(target);
	  if (isArrayOrNodeList(els)) {
	    return els[0];
	  }
	  return els;
	}
	
	var defaultToggleEvents = ['touchstart', 'click'];
	
	function addMultipleEventListeners(_els, handler, _events) {
	  var els = _els;
	  if (!isArrayOrNodeList(els)) {
	    els = [els];
	  }
	
	  var events = _events;
	  if (typeof events === 'string') {
	    events = events.split(/\s+/);
	  }
	
	  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
	    throw new Error('\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ');
	  }
	  events.forEach(function (event) {
	    els.forEach(function (el) {
	      el.addEventListener(event, handler);
	    });
	  });
	  return function removeEvents() {
	    events.forEach(function (event) {
	      els.forEach(function (el) {
	        el.removeEventListener(event, handler);
	      });
	    });
	  };
	}
	
	var utils = Object.freeze({
		getScrollbarWidth: getScrollbarWidth,
		setScrollbarWidth: setScrollbarWidth,
		isBodyOverflowing: isBodyOverflowing,
		getOriginalBodyPadding: getOriginalBodyPadding,
		conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
		setGlobalCssModule: setGlobalCssModule,
		mapToCssModules: mapToCssModules,
		omit: omit,
		pick: pick,
		warnOnce: warnOnce,
		deprecated: deprecated,
		DOMElement: DOMElement,
		TransitionTimeouts: TransitionTimeouts,
		TransitionPropTypeKeys: TransitionPropTypeKeys,
		TransitionStatuses: TransitionStatuses,
		keyCodes: keyCodes,
		PopperPlacements: PopperPlacements,
		canUseDOM: canUseDOM,
		findDOMElements: findDOMElements,
		isArrayOrNodeList: isArrayOrNodeList,
		getTarget: getTarget,
		defaultToggleEvents: defaultToggleEvents,
		addMultipleEventListeners: addMultipleEventListeners
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	
	
	
	
	
	
	
	
	
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	var propTypes = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  fluid: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps = {
	  tag: 'div'
	};
	
	var Container = function Container(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      fluid = props.fluid,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'fluid', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, fluid ? 'container-fluid' : 'container'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Container.propTypes = propTypes;
	Container.defaultProps = defaultProps;
	
	var propTypes$1 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  noGutters: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$1 = {
	  tag: 'div'
	};
	
	var Row = function Row(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      noGutters = props.noGutters,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'noGutters', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, noGutters ? 'no-gutters' : null, 'row'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Row.propTypes = propTypes$1;
	Row.defaultProps = defaultProps$1;
	
	var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
	var stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
	
	var columnProps = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.shape({
	  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
	  push: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
	  pull: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
	  order: stringOrNumberProp,
	  offset: stringOrNumberProp
	})]);
	
	var propTypes$2 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  xs: columnProps,
	  sm: columnProps,
	  md: columnProps,
	  lg: columnProps,
	  xl: columnProps,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  widths: PropTypes.array
	};
	
	var defaultProps$2 = {
	  tag: 'div',
	  widths: colWidths
	};
	
	var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : 'col-' + colWidth;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
	  }
	
	  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
	};
	
	var Col = function Col(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      widths = props.widths,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'widths', 'tag']);
	
	  var colClasses = [];
	
	  widths.forEach(function (colWidth, i) {
	    var columnProp = props[colWidth];
	
	    delete attributes[colWidth];
	
	    if (!columnProp && columnProp !== '') {
	      return;
	    }
	
	    var isXs = !i;
	
	    if (isobject(columnProp)) {
	      var _classNames;
	
	      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
	      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
	
	      colClasses.push(mapToCssModules(classNames((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
	    } else {
	      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
	      colClasses.push(_colClass);
	    }
	  });
	
	  if (!colClasses.length) {
	    colClasses.push('col');
	  }
	
	  var classes = mapToCssModules(classNames(className, colClasses), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Col.propTypes = propTypes$2;
	Col.defaultProps = defaultProps$2;
	
	var propTypes$3 = {
	  light: PropTypes.bool,
	  dark: PropTypes.bool,
	  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
	  full: PropTypes.bool,
	  fixed: PropTypes.string,
	  sticky: PropTypes.string,
	  color: PropTypes.string,
	  role: PropTypes.string,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggleable: deprecated(PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), 'Please use the prop "expand"'),
	  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
	};
	
	var defaultProps$3 = {
	  tag: 'nav',
	  expand: false
	};
	
	var getExpandClass = function getExpandClass(expand) {
	  if (expand === false) {
	    return false;
	  } else if (expand === true || expand === 'xs') {
	    return 'navbar-expand';
	  }
	
	  return 'navbar-expand-' + expand;
	};
	
	// To better maintain backwards compatibility while toggleable is deprecated.
	// We must map breakpoints to the next breakpoint so that toggleable and expand do the same things at the same breakpoint.
	var toggleableToExpand = {
	  xs: 'sm',
	  sm: 'md',
	  md: 'lg',
	  lg: 'xl'
	};
	
	var getToggleableClass = function getToggleableClass(toggleable) {
	  if (toggleable === undefined || toggleable === 'xl') {
	    return false;
	  } else if (toggleable === false) {
	    return 'navbar-expand';
	  }
	
	  return 'navbar-expand-' + (toggleable === true ? 'sm' : toggleableToExpand[toggleable] || toggleable);
	};
	
	var Navbar = function Navbar(props) {
	  var _classNames;
	
	  var toggleable = props.toggleable,
	      expand = props.expand,
	      className = props.className,
	      cssModule = props.cssModule,
	      light = props.light,
	      dark = props.dark,
	      inverse = props.inverse,
	      fixed = props.fixed,
	      sticky = props.sticky,
	      color = props.color,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['toggleable', 'expand', 'className', 'cssModule', 'light', 'dark', 'inverse', 'fixed', 'sticky', 'color', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'navbar', getExpandClass(expand) || getToggleableClass(toggleable), (_classNames = {
	    'navbar-light': light,
	    'navbar-dark': inverse || dark
	  }, defineProperty(_classNames, 'bg-' + color, color), defineProperty(_classNames, 'fixed-' + fixed, fixed), defineProperty(_classNames, 'sticky-' + sticky, sticky), _classNames)), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Navbar.propTypes = propTypes$3;
	Navbar.defaultProps = defaultProps$3;
	
	var propTypes$4 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$4 = {
	  tag: 'a'
	};
	
	var NavbarBrand = function NavbarBrand(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'navbar-brand'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	NavbarBrand.propTypes = propTypes$4;
	NavbarBrand.defaultProps = defaultProps$4;
	
	var propTypes$5 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  type: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  children: PropTypes.node
	};
	
	var defaultProps$5 = {
	  tag: 'button',
	  type: 'button'
	};
	
	var NavbarToggler = function NavbarToggler(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'navbar-toggler'), cssModule);
	
	  return React__default.createElement(
	    Tag,
	    _extends({}, attributes, { className: classes }),
	    children || React__default.createElement('span', { className: mapToCssModules('navbar-toggler-icon', cssModule) })
	  );
	};
	
	NavbarToggler.propTypes = propTypes$5;
	NavbarToggler.defaultProps = defaultProps$5;
	
	var propTypes$6 = {
	  tabs: PropTypes.bool,
	  pills: PropTypes.bool,
	  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	  horizontal: PropTypes.string,
	  justified: PropTypes.bool,
	  fill: PropTypes.bool,
	  navbar: PropTypes.bool,
	  card: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$6 = {
	  tag: 'ul',
	  vertical: false
	};
	
	var getVerticalClass = function getVerticalClass(vertical) {
	  if (vertical === false) {
	    return false;
	  } else if (vertical === true || vertical === 'xs') {
	    return 'flex-column';
	  }
	
	  return 'flex-' + vertical + '-column';
	};
	
	var Nav = function Nav(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      tabs = props.tabs,
	      pills = props.pills,
	      vertical = props.vertical,
	      horizontal = props.horizontal,
	      justified = props.justified,
	      fill = props.fill,
	      navbar = props.navbar,
	      card = props.card,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabs', 'pills', 'vertical', 'horizontal', 'justified', 'fill', 'navbar', 'card', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, navbar ? 'navbar-nav' : 'nav', horizontal ? 'justify-content-' + horizontal : false, getVerticalClass(vertical), {
	    'nav-tabs': tabs,
	    'card-header-tabs': card && tabs,
	    'nav-pills': pills,
	    'card-header-pills': card && pills,
	    'nav-justified': justified,
	    'nav-fill': fill
	  }), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Nav.propTypes = propTypes$6;
	Nav.defaultProps = defaultProps$6;
	
	var propTypes$7 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  active: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$7 = {
	  tag: 'li'
	};
	
	var NavItem = function NavItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      active = props.active,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'nav-item', active ? 'active' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	NavItem.propTypes = propTypes$7;
	NavItem.defaultProps = defaultProps$7;
	
	/* eslint react/no-find-dom-node: 0 */
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
	
	var propTypes$8 = {
	  disabled: PropTypes.bool,
	  dropup: deprecated(PropTypes.bool, 'Please use the prop "direction" with the value "up".'),
	  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
	  group: PropTypes.bool,
	  isOpen: PropTypes.bool,
	  nav: PropTypes.bool,
	  active: PropTypes.bool,
	  addonType: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['prepend', 'append'])]),
	  size: PropTypes.string,
	  tag: PropTypes.string,
	  toggle: PropTypes.func,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  inNavbar: PropTypes.bool,
	  setActiveFromChild: PropTypes.bool
	};
	
	var defaultProps$8 = {
	  isOpen: false,
	  direction: 'down',
	  nav: false,
	  active: false,
	  addonType: false,
	  inNavbar: false,
	  setActiveFromChild: false
	};
	
	var childContextTypes = {
	  toggle: PropTypes.func.isRequired,
	  isOpen: PropTypes.bool.isRequired,
	  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
	  inNavbar: PropTypes.bool.isRequired
	};
	
	var Dropdown = function (_React$Component) {
	  inherits(Dropdown, _React$Component);
	
	  function Dropdown(props) {
	    classCallCheck(this, Dropdown);
	
	    var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
	
	    _this.addEvents = _this.addEvents.bind(_this);
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.removeEvents = _this.removeEvents.bind(_this);
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(Dropdown, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        toggle: this.props.toggle,
	        isOpen: this.props.isOpen,
	        direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
	        inNavbar: this.props.inNavbar
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleProps();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.isOpen !== prevProps.isOpen) {
	        this.handleProps();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeEvents();
	    }
	  }, {
	    key: 'getContainer',
	    value: function getContainer() {
	      return ReactDOM.findDOMNode(this);
	    }
	  }, {
	    key: 'addEvents',
	    value: function addEvents() {
	      var _this2 = this;
	
	      ['click', 'touchstart', 'keyup'].forEach(function (event) {
	        return document.addEventListener(event, _this2.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	      var _this3 = this;
	
	      ['click', 'touchstart', 'keyup'].forEach(function (event) {
	        return document.removeEventListener(event, _this3.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(e) {
	      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
	      var container = this.getContainer();
	
	      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
	        return;
	      }
	
	      this.toggle(e);
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      if ([keyCodes.esc, keyCodes.up, keyCodes.down, keyCodes.space].indexOf(e.which) === -1 || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
	        return;
	      }
	
	      e.preventDefault();
	      if (this.props.disabled) return;
	
	      var container = this.getContainer();
	
	      if (e.which === keyCodes.space && this.props.isOpen && container !== e.target) {
	        e.target.click();
	      }
	
	      if (e.which === keyCodes.esc || !this.props.isOpen) {
	        this.toggle(e);
	        container.querySelector('[aria-expanded]').focus();
	        return;
	      }
	
	      var menuClass = mapToCssModules('dropdown-menu', this.props.cssModule);
	      var itemClass = mapToCssModules('dropdown-item', this.props.cssModule);
	      var disabledClass = mapToCssModules('disabled', this.props.cssModule);
	
	      var items = container.querySelectorAll('.' + menuClass + ' .' + itemClass + ':not(.' + disabledClass + ')');
	
	      if (!items.length) return;
	
	      var index = -1;
	      for (var i = 0; i < items.length; i += 1) {
	        if (items[i] === e.target) {
	          index = i;
	          break;
	        }
	      }
	
	      if (e.which === keyCodes.up && index > 0) {
	        index -= 1;
	      }
	
	      if (e.which === keyCodes.down && index < items.length - 1) {
	        index += 1;
	      }
	
	      if (index < 0) {
	        index = 0;
	      }
	
	      items[index].focus();
	    }
	  }, {
	    key: 'handleProps',
	    value: function handleProps() {
	      if (this.props.isOpen) {
	        this.addEvents();
	      } else {
	        this.removeEvents();
	      }
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      if (this.props.disabled) {
	        return e && e.preventDefault();
	      }
	
	      return this.props.toggle(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames;
	
	      var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'direction']),
	          className = _omit.className,
	          cssModule = _omit.cssModule,
	          dropup = _omit.dropup,
	          isOpen = _omit.isOpen,
	          group = _omit.group,
	          size = _omit.size,
	          nav = _omit.nav,
	          setActiveFromChild = _omit.setActiveFromChild,
	          active = _omit.active,
	          addonType = _omit.addonType,
	          attrs = objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'isOpen', 'group', 'size', 'nav', 'setActiveFromChild', 'active', 'addonType']);
	
	      var direction = this.props.direction === 'down' && dropup ? 'up' : this.props.direction;
	
	      attrs.tag = attrs.tag || (nav ? 'li' : 'div');
	
	      var subItemIsActive = false;
	      if (setActiveFromChild) {
	        React__default.Children.map(this.props.children[1].props.children, function (dropdownItem) {
	          if (dropdownItem.props.active) subItemIsActive = true;
	        });
	      }
	
	      var classes = mapToCssModules(classNames(className, direction !== 'down' && 'drop' + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, defineProperty(_classNames, 'input-group-' + addonType, addonType), defineProperty(_classNames, 'btn-group', group), defineProperty(_classNames, 'btn-group-' + size, !!size), defineProperty(_classNames, 'dropdown', !group && !addonType), defineProperty(_classNames, 'show', isOpen), defineProperty(_classNames, 'nav-item', nav), _classNames)), cssModule);
	
	      return React__default.createElement(reactPopper.Manager, _extends({}, attrs, { className: classes, onKeyDown: this.handleKeyDown }));
	    }
	  }]);
	  return Dropdown;
	}(React__default.Component);
	
	Dropdown.propTypes = propTypes$8;
	Dropdown.defaultProps = defaultProps$8;
	Dropdown.childContextTypes = childContextTypes;
	
	function NavDropdown(props) {
	  warnOnce('The "NavDropdown" component has been deprecated.\nPlease use component "Dropdown" with nav prop.');
	  return React__default.createElement(Dropdown, _extends({ nav: true }, props));
	}
	
	var propTypes$9 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	  disabled: PropTypes.bool,
	  active: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  onClick: PropTypes.func,
	  href: PropTypes.any
	};
	
	var defaultProps$9 = {
	  tag: 'a'
	};
	
	var NavLink = function (_React$Component) {
	  inherits(NavLink, _React$Component);
	
	  function NavLink(props) {
	    classCallCheck(this, NavLink);
	
	    var _this = possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  createClass(NavLink, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.href === '#') {
	        e.preventDefault();
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          active = _props.active,
	          Tag = _props.tag,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'innerRef']);
	
	
	      var classes = mapToCssModules(classNames(className, 'nav-link', {
	        disabled: attributes.disabled,
	        active: active
	      }), cssModule);
	
	      return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, onClick: this.onClick, className: classes }));
	    }
	  }]);
	  return NavLink;
	}(React__default.Component);
	
	NavLink.propTypes = propTypes$9;
	NavLink.defaultProps = defaultProps$9;
	
	var propTypes$10 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  listClassName: PropTypes.string,
	  cssModule: PropTypes.object,
	  children: PropTypes.node,
	  'aria-label': PropTypes.string
	};
	
	var defaultProps$10 = {
	  tag: 'nav',
	  listTag: 'ol',
	  'aria-label': 'breadcrumb'
	};
	
	var Breadcrumb = function Breadcrumb(props) {
	  var className = props.className,
	      listClassName = props.listClassName,
	      cssModule = props.cssModule,
	      children = props.children,
	      Tag = props.tag,
	      ListTag = props.listTag,
	      label = props['aria-label'],
	      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'children', 'tag', 'listTag', 'aria-label']);
	
	
	  var classes = mapToCssModules(classNames(className), cssModule);
	
	  var listClasses = mapToCssModules(classNames('breadcrumb', listClassName), cssModule);
	
	  return React__default.createElement(
	    Tag,
	    _extends({}, attributes, { className: classes, 'aria-label': label }),
	    React__default.createElement(
	      ListTag,
	      { className: listClasses },
	      children
	    )
	  );
	};
	
	Breadcrumb.propTypes = propTypes$10;
	Breadcrumb.defaultProps = defaultProps$10;
	
	var propTypes$11 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  active: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$11 = {
	  tag: 'li'
	};
	
	var BreadcrumbItem = function BreadcrumbItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      active = props.active,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes, 'aria-current': active ? 'page' : undefined }));
	};
	
	BreadcrumbItem.propTypes = propTypes$11;
	BreadcrumbItem.defaultProps = defaultProps$11;
	
	var propTypes$12 = {
	  active: PropTypes.bool,
	  block: PropTypes.bool,
	  color: PropTypes.string,
	  disabled: PropTypes.bool,
	  outline: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	  onClick: PropTypes.func,
	  size: PropTypes.string,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$12 = {
	  color: 'secondary',
	  tag: 'button'
	};
	
	var Button = function (_React$Component) {
	  inherits(Button, _React$Component);
	
	  function Button(props) {
	    classCallCheck(this, Button);
	
	    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  createClass(Button, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          active = _props.active,
	          block = _props.block,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          color = _props.color,
	          outline = _props.outline,
	          size = _props.size,
	          Tag = _props.tag,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['active', 'block', 'className', 'cssModule', 'color', 'outline', 'size', 'tag', 'innerRef']);
	
	
	      var classes = mapToCssModules(classNames(className, 'btn', 'btn' + (outline ? '-outline' : '') + '-' + color, size ? 'btn-' + size : false, block ? 'btn-block' : false, { active: active, disabled: this.props.disabled }), cssModule);
	
	      if (attributes.href && Tag === 'button') {
	        Tag = 'a';
	      }
	
	      return React__default.createElement(Tag, _extends({
	        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
	      }, attributes, {
	        className: classes,
	        ref: innerRef,
	        onClick: this.onClick
	      }));
	    }
	  }]);
	  return Button;
	}(React__default.Component);
	
	Button.propTypes = propTypes$12;
	Button.defaultProps = defaultProps$12;
	
	var propTypes$13 = {
	  children: PropTypes.node
	};
	
	var ButtonDropdown = function ButtonDropdown(props) {
	  return React__default.createElement(Dropdown, _extends({ group: true }, props));
	};
	
	ButtonDropdown.propTypes = propTypes$13;
	
	var propTypes$14 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  'aria-label': PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  role: PropTypes.string,
	  size: PropTypes.string,
	  vertical: PropTypes.bool
	};
	
	var defaultProps$13 = {
	  tag: 'div',
	  role: 'group'
	};
	
	var ButtonGroup = function ButtonGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      vertical = props.vertical,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'vertical', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ButtonGroup.propTypes = propTypes$14;
	ButtonGroup.defaultProps = defaultProps$13;
	
	var propTypes$15 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  'aria-label': PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  role: PropTypes.string
	};
	
	var defaultProps$14 = {
	  tag: 'div',
	  role: 'toolbar'
	};
	
	var ButtonToolbar = function ButtonToolbar(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'btn-toolbar'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ButtonToolbar.propTypes = propTypes$15;
	ButtonToolbar.defaultProps = defaultProps$14;
	
	var propTypes$16 = {
	  children: PropTypes.node,
	  active: PropTypes.bool,
	  disabled: PropTypes.bool,
	  divider: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  header: PropTypes.bool,
	  onClick: PropTypes.func,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggle: PropTypes.bool
	};
	
	var contextTypes = {
	  toggle: PropTypes.func
	};
	
	var defaultProps$15 = {
	  tag: 'button',
	  toggle: true
	};
	
	var DropdownItem = function (_React$Component) {
	  inherits(DropdownItem, _React$Component);
	
	  function DropdownItem(props) {
	    classCallCheck(this, DropdownItem);
	
	    var _this = possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    _this.getTabIndex = _this.getTabIndex.bind(_this);
	    return _this;
	  }
	
	  createClass(DropdownItem, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled || this.props.header || this.props.divider) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	
	      if (this.props.toggle) {
	        this.context.toggle(e);
	      }
	    }
	  }, {
	    key: 'getTabIndex',
	    value: function getTabIndex() {
	      if (this.props.disabled || this.props.header || this.props.divider) {
	        return '-1';
	      }
	
	      return '0';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tabIndex = this.getTabIndex();
	
	      var _omit = omit(this.props, ['toggle']),
	          className = _omit.className,
	          cssModule = _omit.cssModule,
	          divider = _omit.divider,
	          Tag = _omit.tag,
	          header = _omit.header,
	          active = _omit.active,
	          props = objectWithoutProperties(_omit, ['className', 'cssModule', 'divider', 'tag', 'header', 'active']);
	
	      var classes = mapToCssModules(classNames(className, {
	        disabled: props.disabled,
	        'dropdown-item': !divider && !header,
	        active: active,
	        'dropdown-header': header,
	        'dropdown-divider': divider
	      }), cssModule);
	
	      if (Tag === 'button') {
	        if (header) {
	          Tag = 'h6';
	        } else if (divider) {
	          Tag = 'div';
	        } else if (props.href) {
	          Tag = 'a';
	        }
	      }
	
	      return React__default.createElement(Tag, _extends({
	        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
	      }, props, {
	        tabIndex: tabIndex,
	        className: classes,
	        onClick: this.onClick
	      }));
	    }
	  }]);
	  return DropdownItem;
	}(React__default.Component);
	
	DropdownItem.propTypes = propTypes$16;
	DropdownItem.defaultProps = defaultProps$15;
	DropdownItem.contextTypes = contextTypes;
	
	var propTypes$17 = {
	  tag: PropTypes.string,
	  children: PropTypes.node.isRequired,
	  right: PropTypes.bool,
	  flip: PropTypes.bool,
	  modifiers: PropTypes.object,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  persist: PropTypes.bool
	};
	
	var defaultProps$16 = {
	  tag: 'div',
	  flip: true
	};
	
	var contextTypes$1 = {
	  isOpen: PropTypes.bool.isRequired,
	  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
	  inNavbar: PropTypes.bool.isRequired
	};
	
	var noFlipModifier = { flip: { enabled: false } };
	
	var directionPositionMap = {
	  up: 'top',
	  left: 'left',
	  right: 'right',
	  down: 'bottom'
	};
	
	var DropdownMenu = function DropdownMenu(props, context) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      right = props.right,
	      tag = props.tag,
	      flip = props.flip,
	      modifiers = props.modifiers,
	      persist = props.persist,
	      attrs = objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag', 'flip', 'modifiers', 'persist']);
	
	  var classes = mapToCssModules(classNames(className, 'dropdown-menu', {
	    'dropdown-menu-right': right,
	    show: context.isOpen
	  }), cssModule);
	
	  var Tag = tag;
	
	  if (persist || context.isOpen && !context.inNavbar) {
	    Tag = reactPopper.Popper;
	
	    var position1 = directionPositionMap[context.direction] || 'bottom';
	    var position2 = right ? 'end' : 'start';
	    attrs.placement = position1 + '-' + position2;
	    attrs.component = tag;
	    attrs.modifiers = !flip ? _extends({}, modifiers, noFlipModifier) : modifiers;
	  }
	
	  return React__default.createElement(Tag, _extends({
	    tabIndex: '-1',
	    role: 'menu'
	  }, attrs, {
	    'aria-hidden': !context.isOpen,
	    className: classes,
	    'x-placement': attrs.placement
	  }));
	};
	
	DropdownMenu.propTypes = propTypes$17;
	DropdownMenu.defaultProps = defaultProps$16;
	DropdownMenu.contextTypes = contextTypes$1;
	
	var propTypes$18 = {
	  caret: PropTypes.bool,
	  color: PropTypes.string,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  disabled: PropTypes.bool,
	  onClick: PropTypes.func,
	  'aria-haspopup': PropTypes.bool,
	  split: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  nav: PropTypes.bool
	};
	
	var defaultProps$17 = {
	  'aria-haspopup': true,
	  color: 'secondary'
	};
	
	var contextTypes$2 = {
	  isOpen: PropTypes.bool.isRequired,
	  toggle: PropTypes.func.isRequired,
	  inNavbar: PropTypes.bool.isRequired
	};
	
	var DropdownToggle = function (_React$Component) {
	  inherits(DropdownToggle, _React$Component);
	
	  function DropdownToggle(props) {
	    classCallCheck(this, DropdownToggle);
	
	    var _this = possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  createClass(DropdownToggle, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.nav && !this.props.tag) {
	        e.preventDefault();
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	
	      this.context.toggle(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          color = _props.color,
	          cssModule = _props.cssModule,
	          caret = _props.caret,
	          split = _props.split,
	          nav = _props.nav,
	          tag = _props.tag,
	          props = objectWithoutProperties(_props, ['className', 'color', 'cssModule', 'caret', 'split', 'nav', 'tag']);
	
	      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
	      var classes = mapToCssModules(classNames(className, {
	        'dropdown-toggle': caret || split,
	        'dropdown-toggle-split': split,
	        'nav-link': nav
	      }), cssModule);
	      var children = props.children || React__default.createElement(
	        'span',
	        { className: 'sr-only' },
	        ariaLabel
	      );
	
	      var Tag = void 0;
	
	      if (nav && !tag) {
	        Tag = 'a';
	        props.href = '#';
	      } else if (!tag) {
	        Tag = Button;
	        props.color = color;
	        props.cssModule = cssModule;
	      } else {
	        Tag = tag;
	      }
	
	      if (this.context.inNavbar) {
	        return React__default.createElement(Tag, _extends({}, props, {
	          className: classes,
	          onClick: this.onClick,
	          'aria-expanded': this.context.isOpen,
	          children: children
	        }));
	      }
	
	      return React__default.createElement(reactPopper.Target, _extends({}, props, {
	        className: classes,
	        component: Tag,
	        onClick: this.onClick,
	        'aria-expanded': this.context.isOpen,
	        children: children
	      }));
	    }
	  }]);
	  return DropdownToggle;
	}(React__default.Component);
	
	DropdownToggle.propTypes = propTypes$18;
	DropdownToggle.defaultProps = defaultProps$17;
	DropdownToggle.contextTypes = contextTypes$2;
	
	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	var PropTypes$1 = createCommonjsModule(function (module, exports) {
	  'use strict';
	
	  exports.__esModule = true;
	  exports.classNamesShape = exports.timeoutsShape = undefined;
	  exports.transitionTimeout = transitionTimeout;
	
	  var _propTypes2 = _interopRequireDefault(PropTypes);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	  }
	
	  function transitionTimeout(transitionType) {
	    var timeoutPropName = 'transition' + transitionType + 'Timeout';
	    var enabledPropName = 'transition' + transitionType;
	
	    return function (props) {
	      // If the transition is enabled
	      if (props[enabledPropName]) {
	        // If no timeout duration is provided
	        if (props[timeoutPropName] == null) {
	          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
	
	          // If the duration isn't a number
	        } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	      }
	
	      return null;
	    };
	  }
	
	  var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
	    enter: _propTypes2.default.number,
	    exit: _propTypes2.default.number
	  }).isRequired]);
	
	  var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    enter: _propTypes2.default.string,
	    exit: _propTypes2.default.string,
	    active: _propTypes2.default.string
	  }), _propTypes2.default.shape({
	    enter: _propTypes2.default.string,
	    enterDone: _propTypes2.default.string,
	    enterActive: _propTypes2.default.string,
	    exit: _propTypes2.default.string,
	    exitDone: _propTypes2.default.string,
	    exitActive: _propTypes2.default.string
	  })]);
	});
	
	unwrapExports(PropTypes$1);
	
	var Transition_1 = createCommonjsModule(function (module, exports) {
	  'use strict';
	
	  exports.__esModule = true;
	  exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	  var PropTypes$$1 = _interopRequireWildcard(PropTypes);
	
	  var _react2 = _interopRequireDefault(React__default);
	
	  var _reactDom2 = _interopRequireDefault(ReactDOM);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	  }
	
	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }newObj.default = obj;return newObj;
	    }
	  }
	
	  function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
	  var EXITED = exports.EXITED = 'exited';
	  var ENTERING = exports.ENTERING = 'entering';
	  var ENTERED = exports.ENTERED = 'entered';
	  var EXITING = exports.EXITING = 'exiting';
	
	  /**
	   * The Transition component lets you describe a transition from one component
	   * state to another _over time_ with a simple declarative API. Most commonly
	   * it's used to animate the mounting and unmounting of a component, but can also
	   * be used to describe in-place transition states as well.
	   *
	   * By default the `Transition` component does not alter the behavior of the
	   * component it renders, it only tracks "enter" and "exit" states for the components.
	   * It's up to you to give meaning and effect to those states. For example we can
	   * add styles to a component when it enters or exits:
	   *
	   * ```jsx
	   * import Transition from 'react-transition-group/Transition';
	   *
	   * const duration = 300;
	   *
	   * const defaultStyle = {
	   *   transition: `opacity ${duration}ms ease-in-out`,
	   *   opacity: 0,
	   * }
	   *
	   * const transitionStyles = {
	   *   entering: { opacity: 0 },
	   *   entered:  { opacity: 1 },
	   * };
	   *
	   * const Fade = ({ in: inProp }) => (
	   *   <Transition in={inProp} timeout={duration}>
	   *     {(state) => (
	   *       <div style={{
	   *         ...defaultStyle,
	   *         ...transitionStyles[state]
	   *       }}>
	   *         I'm a fade Transition!
	   *       </div>
	   *     )}
	   *   </Transition>
	   * );
	   * ```
	   *
	   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
	   * What it does do is track transition states over time so you can update the
	   * component (such as by adding styles or classes) when it changes states.
	   *
	   * There are 4 main states a Transition can be in:
	   *  - `'entering'`
	   *  - `'entered'`
	   *  - `'exiting'`
	   *  - `'exited'`
	   *
	   * Transition state is toggled via the `in` prop. When `true` the component begins the
	   * "Enter" stage. During this stage, the component will shift from its current transition state,
	   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
	   * it's complete. Let's take the following example:
	   *
	   * ```jsx
	   * state = { in: false };
	   *
	   * toggleEnterState = () => {
	   *   this.setState({ in: true });
	   * }
	   *
	   * render() {
	   *   return (
	   *     <div>
	   *       <Transition in={this.state.in} timeout={500} />
	   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
	   *     </div>
	   *   );
	   * }
	   * ```
	   *
	   * When the button is clicked the component will shift to the `'entering'` state and
	   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
	   *
	   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
	   *
	   * ## Timing
	   *
	   * Timing is often the trickiest part of animation, mistakes can result in slight delays
	   * that are hard to pin down. A common example is when you want to add an exit transition,
	   * you should set the desired final styles when the state is `'exiting'`. That's when the
	   * transition to those styles will start and, if you matched the `timeout` prop with the
	   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
	   *
	   * > **Note**: For simpler transitions the `Transition` component might be enough, but
	   * > take into account that it's platform-agnostic, while the `CSSTransition` component
	   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
	   * > in order to make more complex transitions more predictable. For example, even though
	   * > classes `example-enter` and `example-enter-active` are applied immediately one after
	   * > another, you can still transition from one to the other because of the forced reflow
	   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
	   * > for more info). Take this into account when choosing between `Transition` and
	   * > `CSSTransition`.
	   *
	   * ## Example
	   *
	   * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
	   *
	   */
	
	  var Transition = function (_React$Component) {
	    _inherits(Transition, _React$Component);
	
	    function Transition(props, context) {
	      _classCallCheck(this, Transition);
	
	      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	      var parentGroup = context.transitionGroup;
	      // In the context of a TransitionGroup all enters are really appears
	      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	
	      var initialStatus = void 0;
	      _this.nextStatus = null;
	
	      if (props.in) {
	        if (appear) {
	          initialStatus = EXITED;
	          _this.nextStatus = ENTERING;
	        } else {
	          initialStatus = ENTERED;
	        }
	      } else {
	        if (props.unmountOnExit || props.mountOnEnter) {
	          initialStatus = UNMOUNTED;
	        } else {
	          initialStatus = EXITED;
	        }
	      }
	
	      _this.state = { status: initialStatus };
	
	      _this.nextCallback = null;
	      return _this;
	    }
	
	    Transition.prototype.getChildContext = function getChildContext() {
	      return { transitionGroup: null }; // allows for nested Transitions
	    };
	
	    Transition.prototype.componentDidMount = function componentDidMount() {
	      this.updateStatus(true);
	    };
	
	    Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var _ref = this.pendingState || this.state,
	          status = _ref.status;
	
	      if (nextProps.in) {
	        if (status === UNMOUNTED) {
	          this.setState({ status: EXITED });
	        }
	        if (status !== ENTERING && status !== ENTERED) {
	          this.nextStatus = ENTERING;
	        }
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.nextStatus = EXITING;
	        }
	      }
	    };
	
	    Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	      this.updateStatus();
	    };
	
	    Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.cancelNextCallback();
	    };
	
	    Transition.prototype.getTimeouts = function getTimeouts() {
	      var timeout = this.props.timeout;
	
	      var exit = void 0,
	          enter = void 0,
	          appear = void 0;
	
	      exit = enter = appear = timeout;
	
	      if (timeout != null && typeof timeout !== 'number') {
	        exit = timeout.exit;
	        enter = timeout.enter;
	        appear = timeout.appear;
	      }
	      return { exit: exit, enter: enter, appear: appear };
	    };
	
	    Transition.prototype.updateStatus = function updateStatus() {
	      var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      var nextStatus = this.nextStatus;
	
	      if (nextStatus !== null) {
	        this.nextStatus = null;
	        // nextStatus will always be ENTERING or EXITING.
	        this.cancelNextCallback();
	        var node = _reactDom2.default.findDOMNode(this);
	
	        if (nextStatus === ENTERING) {
	          this.performEnter(node, mounting);
	        } else {
	          this.performExit(node);
	        }
	      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	        this.setState({ status: UNMOUNTED });
	      }
	    };
	
	    Transition.prototype.performEnter = function performEnter(node, mounting) {
	      var _this2 = this;
	
	      var enter = this.props.enter;
	
	      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
	
	      var timeouts = this.getTimeouts();
	
	      // no enter animation skip right to ENTERED
	      // if we are mounting and running this it means appear _must_ be set
	      if (!mounting && !enter) {
	        this.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	        return;
	      }
	
	      this.props.onEnter(node, appearing);
	
	      this.safeSetState({ status: ENTERING }, function () {
	        _this2.props.onEntering(node, appearing);
	
	        // FIXME: appear timeout?
	        _this2.onTransitionEnd(node, timeouts.enter, function () {
	          _this2.safeSetState({ status: ENTERED }, function () {
	            _this2.props.onEntered(node, appearing);
	          });
	        });
	      });
	    };
	
	    Transition.prototype.performExit = function performExit(node) {
	      var _this3 = this;
	
	      var exit = this.props.exit;
	
	      var timeouts = this.getTimeouts();
	
	      // no exit animation skip right to EXITED
	      if (!exit) {
	        this.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	        return;
	      }
	      this.props.onExit(node);
	
	      this.safeSetState({ status: EXITING }, function () {
	        _this3.props.onExiting(node);
	
	        _this3.onTransitionEnd(node, timeouts.exit, function () {
	          _this3.safeSetState({ status: EXITED }, function () {
	            _this3.props.onExited(node);
	          });
	        });
	      });
	    };
	
	    Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	      if (this.nextCallback !== null) {
	        this.nextCallback.cancel();
	        this.nextCallback = null;
	      }
	    };
	
	    Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	      var _this4 = this;
	
	      // We need to track pending updates for instances where a cWRP fires quickly
	      // after cDM and before the state flushes, which would double trigger a
	      // transition
	      this.pendingState = nextState;
	
	      // This shouldn't be necessary, but there are weird race conditions with
	      // setState callbacks and unmounting in testing, so always make sure that
	      // we can cancel any pending setState callbacks after we unmount.
	      callback = this.setNextCallback(callback);
	      this.setState(nextState, function () {
	        _this4.pendingState = null;
	        callback();
	      });
	    };
	
	    Transition.prototype.setNextCallback = function setNextCallback(callback) {
	      var _this5 = this;
	
	      var active = true;
	
	      this.nextCallback = function (event) {
	        if (active) {
	          active = false;
	          _this5.nextCallback = null;
	
	          callback(event);
	        }
	      };
	
	      this.nextCallback.cancel = function () {
	        active = false;
	      };
	
	      return this.nextCallback;
	    };
	
	    Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
	      this.setNextCallback(handler);
	
	      if (node) {
	        if (this.props.addEndListener) {
	          this.props.addEndListener(node, this.nextCallback);
	        }
	        if (timeout != null) {
	          setTimeout(this.nextCallback, timeout);
	        }
	      } else {
	        setTimeout(this.nextCallback, 0);
	      }
	    };
	
	    Transition.prototype.render = function render() {
	      var status = this.state.status;
	      if (status === UNMOUNTED) {
	        return null;
	      }
	
	      var _props = this.props,
	          children = _props.children,
	          childProps = _objectWithoutProperties(_props, ['children']);
	      // filter props for Transtition
	
	
	      delete childProps.in;
	      delete childProps.mountOnEnter;
	      delete childProps.unmountOnExit;
	      delete childProps.appear;
	      delete childProps.enter;
	      delete childProps.exit;
	      delete childProps.timeout;
	      delete childProps.addEndListener;
	      delete childProps.onEnter;
	      delete childProps.onEntering;
	      delete childProps.onEntered;
	      delete childProps.onExit;
	      delete childProps.onExiting;
	      delete childProps.onExited;
	
	      if (typeof children === 'function') {
	        return children(status, childProps);
	      }
	
	      var child = _react2.default.Children.only(children);
	      return _react2.default.cloneElement(child, childProps);
	    };
	
	    return Transition;
	  }(_react2.default.Component);
	
	  Transition.contextTypes = {
	    transitionGroup: PropTypes$$1.object
	  };
	  Transition.childContextTypes = {
	    transitionGroup: function transitionGroup() {}
	  };
	
	  Transition.propTypes =  false ? {
	    /**
	     * A `function` child can be used instead of a React element.
	     * This function is called with the current transition status
	     * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
	     * to apply context specific props to a component.
	     *
	     * ```jsx
	     * <Transition timeout={150}>
	     *   {(status) => (
	     *     <MyComponent className={`fade fade-${status}`} />
	     *   )}
	     * </Transition>
	     * ```
	     */
	    children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,
	
	    /**
	     * Show the component; triggers the enter or exit states
	     */
	    in: PropTypes$$1.bool,
	
	    /**
	     * By default the child component is mounted immediately along with
	     * the parent `Transition` component. If you want to "lazy mount" the component on the
	     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
	     * mounted, even on "exited", unless you also specify `unmountOnExit`.
	     */
	    mountOnEnter: PropTypes$$1.bool,
	
	    /**
	     * By default the child component stays mounted after it reaches the `'exited'` state.
	     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
	     */
	    unmountOnExit: PropTypes$$1.bool,
	
	    /**
	     * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
	     * If you want to transition on the first mount set `appear` to `true`, and the
	     * component will transition in as soon as the `<Transition>` mounts.
	     *
	     * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
	     */
	    appear: PropTypes$$1.bool,
	
	    /**
	     * Enable or disable enter transitions.
	     */
	    enter: PropTypes$$1.bool,
	
	    /**
	     * Enable or disable exit transitions.
	     */
	    exit: PropTypes$$1.bool,
	
	    /**
	     * The duration of the transition, in milliseconds.
	     * Required unless `addEndListener` is provided
	     *
	     * You may specify a single timeout for all transitions like: `timeout={500}`,
	     * or individually like:
	     *
	     * ```jsx
	     * timeout={{
	     *  enter: 300,
	     *  exit: 500,
	     * }}
	     * ```
	     *
	     * @type {number | { enter?: number, exit?: number }}
	     */
	    timeout: function timeout(props) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var pt = PropTypes$1.timeoutsShape;
	      if (!props.addEndListener) pt = pt.isRequired;
	      return pt.apply(undefined, [props].concat(args));
	    },
	
	    /**
	     * Add a custom transition end trigger. Called with the transitioning
	     * DOM node and a `done` callback. Allows for more fine grained transition end
	     * logic. **Note:** Timeouts are still used as a fallback if provided.
	     *
	     * ```jsx
	     * addEndListener={(node, done) => {
	     *   // use the css transitionend event to mark the finish of a transition
	     *   node.addEventListener('transitionend', done, false);
	     * }}
	     * ```
	     */
	    addEndListener: PropTypes$$1.func,
	
	    /**
	     * Callback fired before the "entering" status is applied. An extra parameter
	     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	     *
	     * @type Function(node: HtmlElement, isAppearing: bool) -> void
	     */
	    onEnter: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "entering" status is applied. An extra parameter
	     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	     *
	     * @type Function(node: HtmlElement, isAppearing: bool)
	     */
	    onEntering: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "entered" status is applied. An extra parameter
	     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	     *
	     * @type Function(node: HtmlElement, isAppearing: bool) -> void
	     */
	    onEntered: PropTypes$$1.func,
	
	    /**
	     * Callback fired before the "exiting" status is applied.
	     *
	     * @type Function(node: HtmlElement) -> void
	     */
	    onExit: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "exiting" status is applied.
	     *
	     * @type Function(node: HtmlElement) -> void
	     */
	    onExiting: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "exited" status is applied.
	     *
	     * @type Function(node: HtmlElement) -> void
	     */
	    onExited: PropTypes$$1.func
	  } : {};
	
	  // Name the function so it is clearer in the documentation
	  function noop() {}
	
	  Transition.defaultProps = {
	    in: false,
	    mountOnEnter: false,
	    unmountOnExit: false,
	    appear: false,
	    enter: true,
	    exit: true,
	
	    onEnter: noop,
	    onEntering: noop,
	    onEntered: noop,
	
	    onExit: noop,
	    onExiting: noop,
	    onExited: noop
	  };
	
	  Transition.UNMOUNTED = 0;
	  Transition.EXITED = 1;
	  Transition.ENTERING = 2;
	  Transition.ENTERED = 3;
	  Transition.EXITING = 4;
	
	  exports.default = Transition;
	});
	
	var Transition = unwrapExports(Transition_1);
	
	var propTypes$19 = _extends({}, Transition.propTypes, {
	  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	  baseClass: PropTypes.string,
	  baseClassActive: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
	});
	
	var defaultProps$18 = _extends({}, Transition.defaultProps, {
	  tag: 'div',
	  baseClass: 'fade',
	  baseClassActive: 'show',
	  timeout: TransitionTimeouts.Fade,
	  appear: true,
	  enter: true,
	  exit: true,
	  in: true
	});
	
	function Fade(props) {
	  var Tag = props.tag,
	      baseClass = props.baseClass,
	      baseClassActive = props.baseClassActive,
	      className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      innerRef = props.innerRef,
	      otherProps = objectWithoutProperties(props, ['tag', 'baseClass', 'baseClassActive', 'className', 'cssModule', 'children', 'innerRef']);
	
	  // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
	  // empty object "{}". This is the result of the `react-transition-group` babel
	  // configuration settings. Therefore, to ensure that production builds work without
	  // error, we can either explicitly define keys or use the Transition.defaultProps.
	  // Using the Transition.defaultProps excludes any required props. Thus, the best
	  // solution is to explicitly define required props in our utilities and reference these.
	  // This also gives us more flexibility in the future to remove the prop-types
	  // dependency in distribution builds (Similar to how `react-transition-group` does).
	  // Note: Without omitting the `react-transition-group` props, the resulting child
	  // Tag component would inherit the Transition properties as attributes for the HTML
	  // element which results in errors/warnings for non-valid attributes.
	
	  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
	  var childProps = omit(otherProps, TransitionPropTypeKeys);
	
	  return React__default.createElement(
	    Transition,
	    transitionProps,
	    function (status) {
	      var isActive = status === 'entered';
	      var classes = mapToCssModules(classNames(className, baseClass, isActive && baseClassActive), cssModule);
	      return React__default.createElement(
	        Tag,
	        _extends({ className: classes }, childProps, { ref: innerRef }),
	        children
	      );
	    }
	  );
	}
	
	Fade.propTypes = propTypes$19;
	Fade.defaultProps = defaultProps$18;
	
	var propTypes$20 = {
	  color: PropTypes.string,
	  pill: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$19 = {
	  color: 'secondary',
	  pill: false,
	  tag: 'span'
	};
	
	var Badge = function Badge(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      color = props.color,
	      pill = props.pill,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'pill', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);
	
	  if (attributes.href && Tag === 'span') {
	    Tag = 'a';
	  }
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Badge.propTypes = propTypes$20;
	Badge.defaultProps = defaultProps$19;
	
	var propTypes$21 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  inverse: PropTypes.bool,
	  color: PropTypes.string,
	  block: deprecated(PropTypes.bool, 'Please use the props "body"'),
	  body: PropTypes.bool,
	  outline: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
	};
	
	var defaultProps$20 = {
	  tag: 'div'
	};
	
	var Card = function Card(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      color = props.color,
	      block = props.block,
	      body = props.body,
	      inverse = props.inverse,
	      outline = props.outline,
	      Tag = props.tag,
	      innerRef = props.innerRef,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'block', 'body', 'inverse', 'outline', 'tag', 'innerRef']);
	
	  var classes = mapToCssModules(classNames(className, 'card', inverse ? 'text-white' : false, block || body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + '-' + color : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes, ref: innerRef }));
	};
	
	Card.propTypes = propTypes$21;
	Card.defaultProps = defaultProps$20;
	
	var propTypes$22 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$21 = {
	  tag: 'div'
	};
	
	var CardGroup = function CardGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-group'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardGroup.propTypes = propTypes$22;
	CardGroup.defaultProps = defaultProps$21;
	
	var propTypes$23 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$22 = {
	  tag: 'div'
	};
	
	var CardDeck = function CardDeck(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-deck'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardDeck.propTypes = propTypes$23;
	CardDeck.defaultProps = defaultProps$22;
	
	var propTypes$24 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$23 = {
	  tag: 'div'
	};
	
	var CardColumns = function CardColumns(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-columns'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardColumns.propTypes = propTypes$24;
	CardColumns.defaultProps = defaultProps$23;
	
	var propTypes$25 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$24 = {
	  tag: 'div'
	};
	
	var CardBody = function CardBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-body'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardBody.propTypes = propTypes$25;
	CardBody.defaultProps = defaultProps$24;
	
	function CardBlock(props) {
	  warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".');
	  return React__default.createElement(CardBody, props);
	}
	
	var propTypes$26 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$25 = {
	  tag: 'a'
	};
	
	var CardLink = function CardLink(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      innerRef = props.innerRef,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'innerRef']);
	
	  var classes = mapToCssModules(classNames(className, 'card-link'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
	};
	
	CardLink.propTypes = propTypes$26;
	CardLink.defaultProps = defaultProps$25;
	
	var propTypes$27 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$26 = {
	  tag: 'div'
	};
	
	var CardFooter = function CardFooter(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-footer'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardFooter.propTypes = propTypes$27;
	CardFooter.defaultProps = defaultProps$26;
	
	var propTypes$28 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$27 = {
	  tag: 'div'
	};
	
	var CardHeader = function CardHeader(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-header'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardHeader.propTypes = propTypes$28;
	CardHeader.defaultProps = defaultProps$27;
	
	var propTypes$29 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  top: PropTypes.bool,
	  bottom: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$28 = {
	  tag: 'img'
	};
	
	var CardImg = function CardImg(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      top = props.top,
	      bottom = props.bottom,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'top', 'bottom', 'tag']);
	
	
	  var cardImgClassName = 'card-img';
	  if (top) {
	    cardImgClassName = 'card-img-top';
	  }
	  if (bottom) {
	    cardImgClassName = 'card-img-bottom';
	  }
	
	  var classes = mapToCssModules(classNames(className, cardImgClassName), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardImg.propTypes = propTypes$29;
	CardImg.defaultProps = defaultProps$28;
	
	var propTypes$30 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$29 = {
	  tag: 'div'
	};
	
	var CardImgOverlay = function CardImgOverlay(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-img-overlay'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardImgOverlay.propTypes = propTypes$30;
	CardImgOverlay.defaultProps = defaultProps$29;
	
	var CarouselItem = function (_React$Component) {
	  inherits(CarouselItem, _React$Component);
	
	  function CarouselItem(props) {
	    classCallCheck(this, CarouselItem);
	
	    var _this = possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).call(this, props));
	
	    _this.state = {
	      startAnimation: false
	    };
	
	    _this.onEnter = _this.onEnter.bind(_this);
	    _this.onEntering = _this.onEntering.bind(_this);
	    _this.onExit = _this.onExit.bind(_this);
	    _this.onExiting = _this.onExiting.bind(_this);
	    _this.onExited = _this.onExited.bind(_this);
	    return _this;
	  }
	
	  createClass(CarouselItem, [{
	    key: 'onEnter',
	    value: function onEnter(node, isAppearing) {
	      this.setState({ startAnimation: false });
	      this.props.onEnter(node, isAppearing);
	    }
	  }, {
	    key: 'onEntering',
	    value: function onEntering(node, isAppearing) {
	      // getting this variable triggers a reflow
	      var offsetHeight = node.offsetHeight;
	      this.setState({ startAnimation: true });
	      this.props.onEntering(node, isAppearing);
	      return offsetHeight;
	    }
	  }, {
	    key: 'onExit',
	    value: function onExit(node) {
	      this.setState({ startAnimation: false });
	      this.props.onExit(node);
	    }
	  }, {
	    key: 'onExiting',
	    value: function onExiting(node) {
	      this.setState({ startAnimation: true });
	      node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
	      this.props.onExiting(node);
	    }
	  }, {
	    key: 'onExited',
	    value: function onExited(node) {
	      node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
	      this.props.onExited(node);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          isIn = _props.in,
	          children = _props.children,
	          cssModule = _props.cssModule,
	          slide = _props.slide,
	          Tag = _props.tag,
	          className = _props.className,
	          transitionProps = objectWithoutProperties(_props, ['in', 'children', 'cssModule', 'slide', 'tag', 'className']);
	
	
	      return React__default.createElement(
	        Transition,
	        _extends({}, transitionProps, {
	          enter: slide,
	          exit: slide,
	          'in': isIn,
	          onEnter: this.onEnter,
	          onEntering: this.onEntering,
	          onExit: this.onExit,
	          onExiting: this.onExiting,
	          onExited: this.onExited
	        }),
	        function (status) {
	          var direction = _this2.context.direction;
	
	          var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
	          var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
	          var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
	          var itemClasses = mapToCssModules(classNames(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
	
	          return React__default.createElement(
	            Tag,
	            { className: itemClasses },
	            children
	          );
	        }
	      );
	    }
	  }]);
	  return CarouselItem;
	}(React__default.Component);
	
	CarouselItem.propTypes = _extends({}, Transition.propTypes, {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  in: PropTypes.bool,
	  cssModule: PropTypes.object,
	  children: PropTypes.node,
	  slide: PropTypes.bool,
	  className: PropTypes.string
	});
	
	CarouselItem.defaultProps = _extends({}, Transition.defaultProps, {
	  tag: 'div',
	  timeout: TransitionTimeouts.Carousel,
	  slide: true
	});
	
	CarouselItem.contextTypes = {
	  direction: PropTypes.string
	};
	
	var Carousel = function (_React$Component) {
	  inherits(Carousel, _React$Component);
	
	  function Carousel(props) {
	    classCallCheck(this, Carousel);
	
	    var _this = possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));
	
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.renderItems = _this.renderItems.bind(_this);
	    _this.hoverStart = _this.hoverStart.bind(_this);
	    _this.hoverEnd = _this.hoverEnd.bind(_this);
	    _this.state = {
	      direction: 'right',
	      indicatorClicked: false
	    };
	    return _this;
	  }
	
	  createClass(Carousel, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { direction: this.state.direction };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Set up the cycle
	      if (this.props.ride === 'carousel') {
	        this.setInterval();
	      }
	
	      // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.
	      document.addEventListener('keyup', this.handleKeyPress);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setInterval(nextProps);
	      // Calculate the direction to turn
	      if (this.props.activeIndex + 1 === nextProps.activeIndex) {
	        this.setState({ direction: 'right' });
	      } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
	        this.setState({ direction: 'left' });
	      } else if (this.props.activeIndex > nextProps.activeIndex) {
	        this.setState({ direction: this.state.indicatorClicked ? 'left' : 'right' });
	      } else if (this.props.activeIndex !== nextProps.activeIndex) {
	        this.setState({ direction: this.state.indicatorClicked ? 'right' : 'left' });
	      }
	      this.setState({ indicatorClicked: false });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearInterval();
	      document.removeEventListener('keyup', this.handleKeyPress);
	    }
	  }, {
	    key: 'setInterval',
	    value: function (_setInterval) {
	      function setInterval() {
	        return _setInterval.apply(this, arguments);
	      }
	
	      setInterval.toString = function () {
	        return _setInterval.toString();
	      };
	
	      return setInterval;
	    }(function () {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	      // make sure not to have multiple intervals going...
	      this.clearInterval();
	      if (props.interval) {
	        this.cycleInterval = setInterval(function () {
	          props.next();
	        }, parseInt(props.interval, 10));
	      }
	    })
	  }, {
	    key: 'clearInterval',
	    value: function (_clearInterval) {
	      function clearInterval() {
	        return _clearInterval.apply(this, arguments);
	      }
	
	      clearInterval.toString = function () {
	        return _clearInterval.toString();
	      };
	
	      return clearInterval;
	    }(function () {
	      clearInterval(this.cycleInterval);
	    })
	  }, {
	    key: 'hoverStart',
	    value: function hoverStart() {
	      if (this.props.pause === 'hover') {
	        this.clearInterval();
	      }
	      if (this.props.mouseEnter) {
	        var _props;
	
	        (_props = this.props).mouseEnter.apply(_props, arguments);
	      }
	    }
	  }, {
	    key: 'hoverEnd',
	    value: function hoverEnd() {
	      if (this.props.pause === 'hover') {
	        this.setInterval();
	      }
	      if (this.props.mouseLeave) {
	        var _props2;
	
	        (_props2 = this.props).mouseLeave.apply(_props2, arguments);
	      }
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(evt) {
	      if (this.props.keyboard) {
	        if (evt.keyCode === 37) {
	          this.props.previous();
	        } else if (evt.keyCode === 39) {
	          this.props.next();
	        }
	      }
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems(carouselItems, className) {
	      var _this2 = this;
	
	      var slide = this.props.slide;
	
	      return React__default.createElement(
	        'div',
	        { role: 'listbox', className: className },
	        carouselItems.map(function (item, index) {
	          var isIn = index === _this2.props.activeIndex;
	          return React__default.cloneElement(item, {
	            in: isIn,
	            slide: slide
	          });
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props3 = this.props,
	          cssModule = _props3.cssModule,
	          slide = _props3.slide,
	          className = _props3.className;
	
	      var outerClasses = mapToCssModules(classNames(className, 'carousel', slide && 'slide'), cssModule);
	
	      var innerClasses = mapToCssModules(classNames('carousel-inner'), cssModule);
	
	      // filter out booleans, null, or undefined
	      var children = this.props.children.filter(function (child) {
	        return child !== null && child !== undefined && typeof child !== 'boolean';
	      });
	
	      var slidesOnly = children.every(function (child) {
	        return child.type === CarouselItem;
	      });
	
	      // Rendering only slides
	      if (slidesOnly) {
	        return React__default.createElement(
	          'div',
	          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
	          this.renderItems(children, innerClasses)
	        );
	      }
	
	      // Rendering slides and controls
	      if (children[0] instanceof Array) {
	        var _carouselItems = children[0];
	        var _controlLeft = children[1];
	        var _controlRight = children[2];
	
	        return React__default.createElement(
	          'div',
	          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
	          this.renderItems(_carouselItems, innerClasses),
	          _controlLeft,
	          _controlRight
	        );
	      }
	
	      // Rendering indicators, slides and controls
	      var indicators = children[0];
	      var wrappedOnClick = function wrappedOnClick(e) {
	        if (typeof indicators.props.onClickHandler === 'function') {
	          _this3.setState({ indicatorClicked: true }, function () {
	            return indicators.props.onClickHandler(e);
	          });
	        }
	      };
	      var wrappedIndicators = React__default.cloneElement(indicators, { onClickHandler: wrappedOnClick });
	      var carouselItems = children[1];
	      var controlLeft = children[2];
	      var controlRight = children[3];
	
	      return React__default.createElement(
	        'div',
	        { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
	        wrappedIndicators,
	        this.renderItems(carouselItems, innerClasses),
	        controlLeft,
	        controlRight
	      );
	    }
	  }]);
	  return Carousel;
	}(React__default.Component);
	
	Carousel.propTypes = {
	  // the current active slide of the carousel
	  activeIndex: PropTypes.number,
	  // a function which should advance the carousel to the next slide (via activeIndex)
	  next: PropTypes.func.isRequired,
	  // a function which should advance the carousel to the previous slide (via activeIndex)
	  previous: PropTypes.func.isRequired,
	  // controls if the left and right arrow keys should control the carousel
	  keyboard: PropTypes.bool,
	  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
	   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
	   */
	  pause: PropTypes.oneOf(['hover', false]),
	  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
	  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
	  ride: PropTypes.oneOf(['carousel']),
	  // the interval at which the carousel automatically cycles (default: 5000)
	  // eslint-disable-next-line react/no-unused-prop-types
	  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
	  children: PropTypes.array,
	  // called when the mouse enters the Carousel
	  mouseEnter: PropTypes.func,
	  // called when the mouse exits the Carousel
	  mouseLeave: PropTypes.func,
	  // controls whether the slide animation on the Carousel works or not
	  slide: PropTypes.bool,
	  cssModule: PropTypes.object,
	  className: PropTypes.string
	};
	
	Carousel.defaultProps = {
	  interval: 5000,
	  pause: 'hover',
	  keyboard: true,
	  slide: true
	};
	
	Carousel.childContextTypes = {
	  direction: PropTypes.string
	};
	
	var CarouselControl = function CarouselControl(props) {
	  var direction = props.direction,
	      onClickHandler = props.onClickHandler,
	      cssModule = props.cssModule,
	      directionText = props.directionText,
	      className = props.className;
	
	
	  var anchorClasses = mapToCssModules(classNames(className, 'carousel-control-' + direction), cssModule);
	
	  var iconClasses = mapToCssModules(classNames('carousel-control-' + direction + '-icon'), cssModule);
	
	  var screenReaderClasses = mapToCssModules(classNames('sr-only'), cssModule);
	
	  return React__default.createElement(
	    'a',
	    {
	      className: anchorClasses,
	      role: 'button',
	      tabIndex: '0',
	      onClick: function onClick(e) {
	        e.preventDefault();
	        onClickHandler();
	      }
	    },
	    React__default.createElement('span', { className: iconClasses, 'aria-hidden': 'true' }),
	    React__default.createElement(
	      'span',
	      { className: screenReaderClasses },
	      directionText || direction
	    )
	  );
	};
	
	CarouselControl.propTypes = {
	  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
	  onClickHandler: PropTypes.func.isRequired,
	  cssModule: PropTypes.object,
	  directionText: PropTypes.string,
	  className: PropTypes.string
	};
	
	var CarouselIndicators = function CarouselIndicators(props) {
	  var items = props.items,
	      activeIndex = props.activeIndex,
	      cssModule = props.cssModule,
	      onClickHandler = props.onClickHandler,
	      className = props.className;
	
	
	  var listClasses = mapToCssModules(classNames(className, 'carousel-indicators'), cssModule);
	  var indicators = items.map(function (item, idx) {
	    var indicatorClasses = mapToCssModules(classNames({ active: activeIndex === idx }), cssModule);
	    return React__default.createElement('li', {
	      key: '' + (item.key || item.src) + item.caption + item.altText,
	      onClick: function onClick(e) {
	        e.preventDefault();
	        onClickHandler(idx);
	      },
	      className: indicatorClasses
	    });
	  });
	
	  return React__default.createElement(
	    'ol',
	    { className: listClasses },
	    indicators
	  );
	};
	
	CarouselIndicators.propTypes = {
	  items: PropTypes.array.isRequired,
	  activeIndex: PropTypes.number.isRequired,
	  cssModule: PropTypes.object,
	  onClickHandler: PropTypes.func.isRequired,
	  className: PropTypes.string
	};
	
	var CarouselCaption = function CarouselCaption(props) {
	  var captionHeader = props.captionHeader,
	      captionText = props.captionText,
	      cssModule = props.cssModule,
	      className = props.className;
	
	  var classes = mapToCssModules(classNames(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
	
	  return React__default.createElement(
	    'div',
	    { className: classes },
	    React__default.createElement(
	      'h3',
	      null,
	      captionHeader
	    ),
	    React__default.createElement(
	      'p',
	      null,
	      captionText
	    )
	  );
	};
	
	CarouselCaption.propTypes = {
	  captionHeader: PropTypes.string,
	  captionText: PropTypes.string.isRequired,
	  cssModule: PropTypes.object,
	  className: PropTypes.string
	};
	
	var propTypes$31 = {
	  items: PropTypes.array.isRequired,
	  indicators: PropTypes.bool,
	  controls: PropTypes.bool,
	  autoPlay: PropTypes.bool,
	  activeIndex: PropTypes.number,
	  next: PropTypes.func,
	  previous: PropTypes.func,
	  goToIndex: PropTypes.func
	};
	
	var UncontrolledCarousel = function (_Component) {
	  inherits(UncontrolledCarousel, _Component);
	
	  function UncontrolledCarousel(props) {
	    classCallCheck(this, UncontrolledCarousel);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledCarousel.__proto__ || Object.getPrototypeOf(UncontrolledCarousel)).call(this, props));
	
	    _this.animating = false;
	    _this.state = { activeIndex: 0 };
	    _this.next = _this.next.bind(_this);
	    _this.previous = _this.previous.bind(_this);
	    _this.goToIndex = _this.goToIndex.bind(_this);
	    _this.onExiting = _this.onExiting.bind(_this);
	    _this.onExited = _this.onExited.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledCarousel, [{
	    key: 'onExiting',
	    value: function onExiting() {
	      this.animating = true;
	    }
	  }, {
	    key: 'onExited',
	    value: function onExited() {
	      this.animating = false;
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      if (this.animating) return;
	      var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
	      this.setState({ activeIndex: nextIndex });
	    }
	  }, {
	    key: 'previous',
	    value: function previous() {
	      if (this.animating) return;
	      var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
	      this.setState({ activeIndex: nextIndex });
	    }
	  }, {
	    key: 'goToIndex',
	    value: function goToIndex(newIndex) {
	      if (this.animating) return;
	      this.setState({ activeIndex: newIndex });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          autoPlay = _props.autoPlay,
	          indicators = _props.indicators,
	          controls = _props.controls,
	          items = _props.items,
	          goToIndex = _props.goToIndex,
	          props = objectWithoutProperties(_props, ['autoPlay', 'indicators', 'controls', 'items', 'goToIndex']);
	      var activeIndex = this.state.activeIndex;
	
	
	      var slides = items.map(function (item) {
	        return React__default.createElement(
	          CarouselItem,
	          {
	            onExiting: _this2.onExiting,
	            onExited: _this2.onExited,
	            key: item.src
	          },
	          React__default.createElement('img', { className: 'd-block w-100', src: item.src, alt: item.altText }),
	          React__default.createElement(CarouselCaption, { captionText: item.caption, captionHeader: item.header || item.caption })
	        );
	      });
	
	      return React__default.createElement(
	        Carousel,
	        _extends({
	          activeIndex: activeIndex,
	          next: this.next,
	          previous: this.previous,
	          ride: autoPlay ? 'carousel' : undefined
	        }, props),
	        indicators && React__default.createElement(CarouselIndicators, {
	          items: items,
	          activeIndex: props.activeIndex || activeIndex,
	          onClickHandler: goToIndex || this.goToIndex
	        }),
	        slides,
	        controls && React__default.createElement(CarouselControl, {
	          direction: 'prev',
	          directionText: 'Previous',
	          onClickHandler: props.previous || this.previous
	        }),
	        controls && React__default.createElement(CarouselControl, {
	          direction: 'next',
	          directionText: 'Next',
	          onClickHandler: props.next || this.next
	        })
	      );
	    }
	  }]);
	  return UncontrolledCarousel;
	}(React.Component);
	
	UncontrolledCarousel.propTypes = propTypes$31;
	UncontrolledCarousel.defaultProps = {
	  controls: true,
	  indicators: true,
	  autoPlay: true
	};
	
	var propTypes$32 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$30 = {
	  tag: 'h6'
	};
	
	var CardSubtitle = function CardSubtitle(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-subtitle'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardSubtitle.propTypes = propTypes$32;
	CardSubtitle.defaultProps = defaultProps$30;
	
	var propTypes$33 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$31 = {
	  tag: 'p'
	};
	
	var CardText = function CardText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-text'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardText.propTypes = propTypes$33;
	CardText.defaultProps = defaultProps$31;
	
	var propTypes$34 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$32 = {
	  tag: 'h5'
	};
	
	var CardTitle = function CardTitle(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-title'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardTitle.propTypes = propTypes$34;
	CardTitle.defaultProps = defaultProps$32;
	
	var propTypes$35 = {
	  className: PropTypes.string,
	  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	  type: PropTypes.string.isRequired,
	  label: PropTypes.string,
	  inline: PropTypes.bool,
	  valid: PropTypes.bool,
	  invalid: PropTypes.bool,
	  bsSize: PropTypes.string,
	  cssModule: PropTypes.object,
	  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func])
	};
	
	function CustomInput(props) {
	  var className = props.className,
	      label = props.label,
	      inline = props.inline,
	      valid = props.valid,
	      invalid = props.invalid,
	      cssModule = props.cssModule,
	      children = props.children,
	      bsSize = props.bsSize,
	      attributes = objectWithoutProperties(props, ['className', 'label', 'inline', 'valid', 'invalid', 'cssModule', 'children', 'bsSize']);
	
	
	  var type = attributes.type;
	
	  var customClass = mapToCssModules(classNames(className, 'custom-' + type, bsSize ? 'custom-' + type + '-' + bsSize : false), cssModule);
	
	  var validationClassNames = mapToCssModules(classNames(invalid && 'is-invalid', valid && 'is-valid'), cssModule);
	
	  if (type === 'select') {
	    return React__default.createElement(
	      'select',
	      _extends({}, attributes, { className: classNames(validationClassNames, customClass) }),
	      children
	    );
	  }
	
	  if (type === 'file') {
	    return React__default.createElement(
	      'div',
	      { className: customClass },
	      React__default.createElement('input', _extends({}, attributes, { className: classNames(validationClassNames, mapToCssModules('custom-file-input', cssModule)) })),
	      React__default.createElement(
	        'label',
	        { className: mapToCssModules('custom-file-label', cssModule), htmlFor: attributes.id },
	        label || 'Choose file'
	      )
	    );
	  }
	
	  if (type !== 'checkbox' && type !== 'radio') {
	    return React__default.createElement('input', _extends({}, attributes, { className: classNames(validationClassNames, customClass) }));
	  }
	
	  var wrapperClasses = classNames(customClass, mapToCssModules(classNames('custom-control', { 'custom-control-inline': inline }), cssModule));
	
	  return React__default.createElement(
	    'div',
	    { className: wrapperClasses },
	    React__default.createElement('input', _extends({}, attributes, {
	      className: classNames(validationClassNames, mapToCssModules('custom-control-input', cssModule))
	    })),
	    React__default.createElement(
	      'label',
	      { className: mapToCssModules('custom-control-label', cssModule), htmlFor: attributes.id },
	      label
	    ),
	    children
	  );
	}
	
	CustomInput.propTypes = propTypes$35;
	
	var propTypes$36 = {
	  children: PropTypes.node.isRequired,
	  className: PropTypes.string,
	  placement: PropTypes.string,
	  placementPrefix: PropTypes.string,
	  hideArrow: PropTypes.bool,
	  tag: PropTypes.string,
	  isOpen: PropTypes.bool.isRequired,
	  cssModule: PropTypes.object,
	  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	  flip: PropTypes.bool,
	  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
	  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]).isRequired,
	  modifiers: PropTypes.object
	};
	
	var defaultProps$33 = {
	  placement: 'auto',
	  hideArrow: false,
	  isOpen: false,
	  offset: 0,
	  fallbackPlacement: 'flip',
	  flip: true,
	  container: 'body',
	  modifiers: {}
	};
	
	var childContextTypes$1 = {
	  popperManager: PropTypes.object.isRequired
	};
	
	var PopperContent = function (_React$Component) {
	  inherits(PopperContent, _React$Component);
	
	  function PopperContent(props) {
	    classCallCheck(this, PopperContent);
	
	    var _this = possibleConstructorReturn(this, (PopperContent.__proto__ || Object.getPrototypeOf(PopperContent)).call(this, props));
	
	    _this.handlePlacementChange = _this.handlePlacementChange.bind(_this);
	    _this.setTargetNode = _this.setTargetNode.bind(_this);
	    _this.getTargetNode = _this.getTargetNode.bind(_this);
	    _this.state = {};
	    return _this;
	  }
	
	  createClass(PopperContent, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        popperManager: {
	          setTargetNode: this.setTargetNode,
	          getTargetNode: this.getTargetNode
	        }
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleProps();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.isOpen !== prevProps.isOpen) {
	        this.handleProps();
	      } else if (this._element) {
	        // rerender
	        this.renderIntoSubtree();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.hide();
	    }
	  }, {
	    key: 'setTargetNode',
	    value: function setTargetNode(node) {
	      this.targetNode = node;
	    }
	  }, {
	    key: 'getTargetNode',
	    value: function getTargetNode() {
	      return this.targetNode;
	    }
	  }, {
	    key: 'getContainerNode',
	    value: function getContainerNode() {
	      return getTarget(this.props.container);
	    }
	  }, {
	    key: 'handlePlacementChange',
	    value: function handlePlacementChange(data) {
	      if (this.state.placement !== data.placement) {
	        this.setState({ placement: data.placement });
	      }
	      return data;
	    }
	  }, {
	    key: 'handleProps',
	    value: function handleProps() {
	      if (this.props.container !== 'inline') {
	        if (this.props.isOpen) {
	          this.show();
	        } else {
	          this.hide();
	        }
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      if (this._element) {
	        this.getContainerNode().removeChild(this._element);
	        ReactDOM.unmountComponentAtNode(this._element);
	        this._element = null;
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this._element = document.createElement('div');
	      this.getContainerNode().appendChild(this._element);
	      this.renderIntoSubtree();
	      if (this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
	        this._element.childNodes[0].focus();
	      }
	    }
	  }, {
	    key: 'renderIntoSubtree',
	    value: function renderIntoSubtree() {
	      ReactDOM.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _props = this.props,
	          cssModule = _props.cssModule,
	          children = _props.children,
	          isOpen = _props.isOpen,
	          flip = _props.flip,
	          target = _props.target,
	          offset = _props.offset,
	          fallbackPlacement = _props.fallbackPlacement,
	          placementPrefix = _props.placementPrefix,
	          hideArrow = _props.hideArrow,
	          className = _props.className,
	          tag = _props.tag,
	          container = _props.container,
	          modifiers = _props.modifiers,
	          attrs = objectWithoutProperties(_props, ['cssModule', 'children', 'isOpen', 'flip', 'target', 'offset', 'fallbackPlacement', 'placementPrefix', 'hideArrow', 'className', 'tag', 'container', 'modifiers']);
	
	      var arrowClassName = mapToCssModules('arrow', cssModule);
	      var placement = (this.state.placement || attrs.placement).split('-')[0];
	      var popperClassName = mapToCssModules(classNames(className, placementPrefix ? placementPrefix + '-' + placement : placement), this.props.cssModule);
	
	      var extendedModifiers = _extends({
	        offset: { offset: offset },
	        flip: { enabled: flip, behavior: fallbackPlacement },
	        update: {
	          enabled: true,
	          order: 950,
	          fn: this.handlePlacementChange
	        }
	      }, modifiers);
	
	      return React__default.createElement(
	        reactPopper.Popper,
	        _extends({ modifiers: extendedModifiers }, attrs, { component: tag, className: popperClassName, 'x-placement': this.state.placement || attrs.placement }),
	        children,
	        !hideArrow && React__default.createElement(reactPopper.Arrow, { className: arrowClassName })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.setTargetNode(getTarget(this.props.target));
	
	      if (this.props.container === 'inline') {
	        return this.props.isOpen ? this.renderChildren() : null;
	      }
	
	      return null;
	    }
	  }]);
	  return PopperContent;
	}(React__default.Component);
	
	PopperContent.propTypes = propTypes$36;
	PopperContent.defaultProps = defaultProps$33;
	PopperContent.childContextTypes = childContextTypes$1;
	
	var PopperTargetHelper = function PopperTargetHelper(props, context) {
	  context.popperManager.setTargetNode(getTarget(props.target));
	  return null;
	};
	
	PopperTargetHelper.contextTypes = {
	  popperManager: PropTypes.object.isRequired
	};
	
	PopperTargetHelper.propTypes = {
	  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]).isRequired
	};
	
	var propTypes$37 = {
	  placement: PropTypes.oneOf(PopperPlacements),
	  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]).isRequired,
	  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
	  isOpen: PropTypes.bool,
	  disabled: PropTypes.bool,
	  hideArrow: PropTypes.bool,
	  className: PropTypes.string,
	  innerClassName: PropTypes.string,
	  placementPrefix: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggle: PropTypes.func,
	  delay: PropTypes.oneOfType([PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }), PropTypes.number]),
	  modifiers: PropTypes.object,
	  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	};
	
	var DEFAULT_DELAYS = {
	  show: 0,
	  hide: 0
	};
	
	var defaultProps$34 = {
	  isOpen: false,
	  hideArrow: false,
	  placement: 'right',
	  placementPrefix: 'bs-popover',
	  delay: DEFAULT_DELAYS,
	  toggle: function toggle() {}
	};
	
	var Popover = function (_React$Component) {
	  inherits(Popover, _React$Component);
	
	  function Popover(props) {
	    classCallCheck(this, Popover);
	
	    var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));
	
	    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
	    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
	    _this.getRef = _this.getRef.bind(_this);
	    _this.toggle = _this.toggle.bind(_this);
	    _this.show = _this.show.bind(_this);
	    _this.hide = _this.hide.bind(_this);
	    return _this;
	  }
	
	  createClass(Popover, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._target = getTarget(this.props.target);
	      this.handleProps();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.handleProps();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearShowTimeout();
	      this.clearHideTimeout();
	      this.removeTargetEvents();
	    }
	  }, {
	    key: 'getRef',
	    value: function getRef(ref) {
	      this._popover = ref;
	    }
	  }, {
	    key: 'getDelay',
	    value: function getDelay(key) {
	      var delay = this.props.delay;
	
	      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
	        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
	      }
	      return delay;
	    }
	  }, {
	    key: 'handleProps',
	    value: function handleProps() {
	      if (this.props.isOpen) {
	        this.show();
	      } else {
	        this.hide();
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.clearHideTimeout();
	      this.addTargetEvents();
	      if (!this.props.isOpen) {
	        this.clearShowTimeout();
	        this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.clearShowTimeout();
	      this.removeTargetEvents();
	      if (this.props.isOpen) {
	        this.clearHideTimeout();
	        this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
	      }
	    }
	  }, {
	    key: 'clearShowTimeout',
	    value: function clearShowTimeout() {
	      clearTimeout(this._showTimeout);
	      this._showTimeout = undefined;
	    }
	  }, {
	    key: 'clearHideTimeout',
	    value: function clearHideTimeout() {
	      clearTimeout(this._hideTimeout);
	      this._hideTimeout = undefined;
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(e) {
	      if (e.target !== this._target && !this._target.contains(e.target) && e.target !== this._popover && !(this._popover && this._popover.contains(e.target))) {
	        if (this._hideTimeout) {
	          this.clearHideTimeout();
	        }
	
	        if (this.props.isOpen) {
	          this.toggle(e);
	        }
	      }
	    }
	  }, {
	    key: 'addTargetEvents',
	    value: function addTargetEvents() {
	      var _this2 = this;
	
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.addEventListener(event, _this2.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'removeTargetEvents',
	    value: function removeTargetEvents() {
	      var _this3 = this;
	
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.removeEventListener(event, _this3.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      if (this.props.disabled) {
	        return e && e.preventDefault();
	      }
	
	      return this.props.toggle(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.isOpen) {
	        return null;
	      }
	
	      var attributes = omit(this.props, Object.keys(propTypes$37));
	      var classes = mapToCssModules(classNames('popover-inner', this.props.innerClassName), this.props.cssModule);
	
	      var popperClasses = mapToCssModules(classNames('popover', 'show', this.props.className), this.props.cssModule);
	
	      return React__default.createElement(
	        PopperContent,
	        {
	          className: popperClasses,
	          target: this.props.target,
	          isOpen: this.props.isOpen,
	          hideArrow: this.props.hideArrow,
	          placement: this.props.placement,
	          placementPrefix: this.props.placementPrefix,
	          container: this.props.container,
	          modifiers: this.props.modifiers,
	          offset: this.props.offset
	        },
	        React__default.createElement('div', _extends({}, attributes, { className: classes, ref: this.getRef }))
	      );
	    }
	  }]);
	  return Popover;
	}(React__default.Component);
	
	Popover.propTypes = propTypes$37;
	Popover.defaultProps = defaultProps$34;
	
	var propTypes$38 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$35 = {
	  tag: 'h3'
	};
	
	var PopoverHeader = function PopoverHeader(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'popover-header'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	PopoverHeader.propTypes = propTypes$38;
	PopoverHeader.defaultProps = defaultProps$35;
	
	function PopoverTitle(props) {
	  warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');
	  return React__default.createElement(PopoverHeader, props);
	}
	
	var propTypes$39 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$36 = {
	  tag: 'div'
	};
	
	var PopoverBody = function PopoverBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'popover-body'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	PopoverBody.propTypes = propTypes$39;
	PopoverBody.defaultProps = defaultProps$36;
	
	function PopoverContent(props) {
	  warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');
	  return React__default.createElement(PopoverBody, props);
	}
	
	var propTypes$40 = {
	  children: PropTypes.node,
	  bar: PropTypes.bool,
	  multi: PropTypes.bool,
	  tag: PropTypes.string,
	  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  animated: PropTypes.bool,
	  striped: PropTypes.bool,
	  color: PropTypes.string,
	  className: PropTypes.string,
	  barClassName: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$37 = {
	  tag: 'div',
	  value: 0,
	  max: 100
	};
	
	var Progress = function Progress(props) {
	  var children = props.children,
	      className = props.className,
	      barClassName = props.barClassName,
	      cssModule = props.cssModule,
	      value = props.value,
	      max = props.max,
	      animated = props.animated,
	      striped = props.striped,
	      color = props.color,
	      bar = props.bar,
	      multi = props.multi,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['children', 'className', 'barClassName', 'cssModule', 'value', 'max', 'animated', 'striped', 'color', 'bar', 'multi', 'tag']);
	
	
	  var percent = toNumber(value) / toNumber(max) * 100;
	
	  var progressClasses = mapToCssModules(classNames(className, 'progress'), cssModule);
	
	  var progressBarClasses = mapToCssModules(classNames('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
	
	  var ProgressBar = multi ? children : React__default.createElement('div', {
	    className: progressBarClasses,
	    style: { width: percent + '%' },
	    role: 'progressbar',
	    'aria-valuenow': value,
	    'aria-valuemin': '0',
	    'aria-valuemax': max,
	    children: children
	  });
	
	  if (bar) {
	    return ProgressBar;
	  }
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: progressClasses, children: ProgressBar }));
	};
	
	Progress.propTypes = propTypes$40;
	Progress.defaultProps = defaultProps$37;
	
	var propTypes$42 = {
	  children: PropTypes.node.isRequired,
	  node: PropTypes.any
	};
	
	var Portal = function (_React$Component) {
	  inherits(Portal, _React$Component);
	
	  function Portal() {
	    classCallCheck(this, Portal);
	    return possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
	  }
	
	  createClass(Portal, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.defaultNode) {
	        document.body.removeChild(this.defaultNode);
	      }
	      this.defaultNode = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!canUseDOM) {
	        return null;
	      }
	
	      if (!this.props.node && !this.defaultNode) {
	        this.defaultNode = document.createElement('div');
	        document.body.appendChild(this.defaultNode);
	      }
	
	      return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
	    }
	  }]);
	  return Portal;
	}(React__default.Component);
	
	Portal.propTypes = propTypes$42;
	
	function noop() {}
	
	var FadePropTypes = PropTypes.shape(Fade.propTypes);
	
	var propTypes$41 = {
	  isOpen: PropTypes.bool,
	  autoFocus: PropTypes.bool,
	  centered: PropTypes.bool,
	  size: PropTypes.string,
	  toggle: PropTypes.func,
	  keyboard: PropTypes.bool,
	  role: PropTypes.string,
	  labelledBy: PropTypes.string,
	  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
	  onEnter: PropTypes.func,
	  onExit: PropTypes.func,
	  onOpened: PropTypes.func,
	  onClosed: PropTypes.func,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  wrapClassName: PropTypes.string,
	  modalClassName: PropTypes.string,
	  backdropClassName: PropTypes.string,
	  contentClassName: PropTypes.string,
	  external: PropTypes.node,
	  fade: PropTypes.bool,
	  cssModule: PropTypes.object,
	  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	  backdropTransition: FadePropTypes,
	  modalTransition: FadePropTypes,
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
	};
	
	var propsToOmit = Object.keys(propTypes$41);
	
	var defaultProps$38 = {
	  isOpen: false,
	  autoFocus: true,
	  centered: false,
	  role: 'dialog',
	  backdrop: true,
	  keyboard: true,
	  zIndex: 1050,
	  fade: true,
	  onOpened: noop,
	  onClosed: noop,
	  modalTransition: {
	    timeout: TransitionTimeouts.Modal
	  },
	  backdropTransition: {
	    mountOnEnter: true,
	    timeout: TransitionTimeouts.Fade // uses standard fade transition
	  }
	};
	
	var Modal = function (_React$Component) {
	  inherits(Modal, _React$Component);
	
	  function Modal(props) {
	    classCallCheck(this, Modal);
	
	    var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
	
	    _this._element = null;
	    _this._originalBodyPadding = null;
	    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_this);
	    _this.handleBackdropMouseUp = _this.handleBackdropMouseUp.bind(_this);
	    _this.handleEscape = _this.handleEscape.bind(_this);
	    _this.onOpened = _this.onOpened.bind(_this);
	    _this.onClosed = _this.onClosed.bind(_this);
	
	    _this.state = {
	      isOpen: props.isOpen
	    };
	
	    if (props.isOpen) {
	      _this.init();
	    }
	    return _this;
	  }
	
	  createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.onEnter) {
	        this.props.onEnter();
	      }
	
	      if (this.state.isOpen && this.props.autoFocus) {
	        this.setFocus();
	      }
	
	      this._isMounted = true;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.isOpen && !this.props.isOpen) {
	        this.setState({ isOpen: nextProps.isOpen });
	      }
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      if (nextState.isOpen && !this.state.isOpen) {
	        this.init();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
	        this.setFocus();
	      }
	
	      if (this._element && prevProps.zIndex !== this.props.zIndex) {
	        this._element.style.zIndex = this.props.zIndex;
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.onExit) {
	        this.props.onExit();
	      }
	
	      if (this.state.isOpen) {
	        this.destroy();
	      }
	
	      this._isMounted = false;
	    }
	  }, {
	    key: 'onOpened',
	    value: function onOpened(node, isAppearing) {
	      this.props.onOpened();
	      (this.props.modalTransition.onEntered || noop)(node, isAppearing);
	    }
	  }, {
	    key: 'onClosed',
	    value: function onClosed(node) {
	      // so all methods get called before it is unmounted
	      this.props.onClosed();
	      (this.props.modalTransition.onExited || noop)(node);
	      this.destroy();
	
	      if (this._isMounted) {
	        this.setState({ isOpen: false });
	      }
	    }
	  }, {
	    key: 'setFocus',
	    value: function setFocus() {
	      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
	        this._dialog.parentNode.focus();
	      }
	    }
	  }, {
	    key: 'handleBackdropMouseDown',
	    value: function handleBackdropMouseDown(e) {
	      this._mouseDownElement = e.target;
	    }
	  }, {
	    key: 'handleBackdropMouseUp',
	    value: function handleBackdropMouseUp(e) {
	      if (e.target === this._mouseDownElement) {
	        e.stopPropagation();
	        if (!this.props.isOpen || this.props.backdrop !== true) return;
	
	        var container = this._dialog;
	
	        if (e.target && !container.contains(e.target) && this.props.toggle) {
	          this.props.toggle(e);
	        }
	      }
	    }
	  }, {
	    key: 'handleEscape',
	    value: function handleEscape(e) {
	      if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
	        this.props.toggle(e);
	      }
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      this._element = document.createElement('div');
	      this._element.setAttribute('tabindex', '-1');
	      this._element.style.position = 'relative';
	      this._element.style.zIndex = this.props.zIndex;
	      this._originalBodyPadding = getOriginalBodyPadding();
	
	      conditionallyUpdateScrollbar();
	
	      document.body.appendChild(this._element);
	
	      if (!this.bodyClassAdded) {
	        document.body.className = classNames(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
	        this.bodyClassAdded = true;
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this._element) {
	        document.body.removeChild(this._element);
	        this._element = null;
	      }
	
	      if (this.bodyClassAdded) {
	        var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule);
	        // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
	        var modalOpenClassNameRegex = new RegExp('(^| )' + modalOpenClassName + '( |$)');
	        document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
	        this.bodyClassAdded = false;
	      }
	
	      setScrollbarWidth(this._originalBodyPadding);
	    }
	  }, {
	    key: 'renderModalDialog',
	    value: function renderModalDialog() {
	      var _classNames,
	          _this2 = this;
	
	      var attributes = omit(this.props, propsToOmit);
	      var dialogBaseClass = 'modal-dialog';
	
	      return React__default.createElement(
	        'div',
	        _extends({}, attributes, {
	          className: mapToCssModules(classNames(dialogBaseClass, this.props.className, (_classNames = {}, defineProperty(_classNames, 'modal-' + this.props.size, this.props.size), defineProperty(_classNames, dialogBaseClass + '-centered', this.props.centered), _classNames)), this.props.cssModule),
	          role: 'document',
	          ref: function ref(c) {
	            _this2._dialog = c;
	          }
	        }),
	        React__default.createElement(
	          'div',
	          {
	            className: mapToCssModules(classNames('modal-content', this.props.contentClassName), this.props.cssModule)
	          },
	          this.props.children
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.state.isOpen) {
	        var _props = this.props,
	            wrapClassName = _props.wrapClassName,
	            modalClassName = _props.modalClassName,
	            backdropClassName = _props.backdropClassName,
	            cssModule = _props.cssModule,
	            isOpen = _props.isOpen,
	            backdrop = _props.backdrop,
	            role = _props.role,
	            labelledBy = _props.labelledBy,
	            external = _props.external,
	            innerRef = _props.innerRef;
	
	
	        var modalAttributes = {
	          onMouseDown: this.handleBackdropMouseDown,
	          onMouseUp: this.handleBackdropMouseUp,
	          onKeyUp: this.handleEscape,
	          style: { display: 'block' },
	          'aria-labelledby': labelledBy,
	          role: role,
	          tabIndex: '-1'
	        };
	
	        var hasTransition = this.props.fade;
	        var modalTransition = _extends({}, Fade.defaultProps, this.props.modalTransition, {
	          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
	          timeout: hasTransition ? this.props.modalTransition.timeout : 0
	        });
	        var backdropTransition = _extends({}, Fade.defaultProps, this.props.backdropTransition, {
	          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
	          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
	        });
	
	        return React__default.createElement(
	          Portal,
	          { node: this._element },
	          React__default.createElement(
	            'div',
	            { className: mapToCssModules(wrapClassName) },
	            React__default.createElement(
	              Fade,
	              _extends({}, modalAttributes, modalTransition, {
	                'in': isOpen,
	                onEntered: this.onOpened,
	                onExited: this.onClosed,
	                cssModule: cssModule,
	                className: mapToCssModules(classNames('modal', modalClassName), cssModule),
	                innerRef: innerRef
	              }),
	              external,
	              this.renderModalDialog()
	            ),
	            React__default.createElement(Fade, _extends({}, backdropTransition, {
	              'in': isOpen && !!backdrop,
	              cssModule: cssModule,
	              className: mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)
	            }))
	          )
	        );
	      }
	
	      return null;
	    }
	  }]);
	  return Modal;
	}(React__default.Component);
	
	Modal.propTypes = propTypes$41;
	Modal.defaultProps = defaultProps$38;
	
	var propTypes$43 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  wrapTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  toggle: PropTypes.func,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  children: PropTypes.node,
	  closeAriaLabel: PropTypes.string
	};
	
	var defaultProps$39 = {
	  tag: 'h5',
	  wrapTag: 'div',
	  closeAriaLabel: 'Close'
	};
	
	var ModalHeader = function ModalHeader(props) {
	  var closeButton = void 0;
	  var className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      toggle = props.toggle,
	      Tag = props.tag,
	      WrapTag = props.wrapTag,
	      closeAriaLabel = props.closeAriaLabel,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag', 'closeAriaLabel']);
	
	
	  var classes = mapToCssModules(classNames(className, 'modal-header'), cssModule);
	
	  if (toggle) {
	    closeButton = React__default.createElement(
	      'button',
	      { type: 'button', onClick: toggle, className: mapToCssModules('close', cssModule), 'aria-label': closeAriaLabel },
	      React__default.createElement(
	        'span',
	        { 'aria-hidden': 'true' },
	        String.fromCharCode(215)
	      )
	    );
	  }
	
	  return React__default.createElement(
	    WrapTag,
	    _extends({}, attributes, { className: classes }),
	    React__default.createElement(
	      Tag,
	      { className: mapToCssModules('modal-title', cssModule) },
	      children
	    ),
	    closeButton
	  );
	};
	
	ModalHeader.propTypes = propTypes$43;
	ModalHeader.defaultProps = defaultProps$39;
	
	var propTypes$44 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$40 = {
	  tag: 'div'
	};
	
	var ModalBody = function ModalBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'modal-body'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ModalBody.propTypes = propTypes$44;
	ModalBody.defaultProps = defaultProps$40;
	
	var propTypes$45 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$41 = {
	  tag: 'div'
	};
	
	var ModalFooter = function ModalFooter(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'modal-footer'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ModalFooter.propTypes = propTypes$45;
	ModalFooter.defaultProps = defaultProps$41;
	
	var propTypes$46 = {
	  placement: PropTypes.oneOf(PopperPlacements),
	  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]).isRequired,
	  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
	  isOpen: PropTypes.bool,
	  disabled: PropTypes.bool,
	  hideArrow: PropTypes.bool,
	  className: PropTypes.string,
	  innerClassName: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggle: PropTypes.func,
	  autohide: PropTypes.bool,
	  placementPrefix: PropTypes.string,
	  delay: PropTypes.oneOfType([PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }), PropTypes.number]),
	  modifiers: PropTypes.object,
	  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])
	};
	
	var DEFAULT_DELAYS$1 = {
	  show: 0,
	  hide: 250
	};
	
	var defaultProps$42 = {
	  isOpen: false,
	  hideArrow: false,
	  placement: 'top',
	  placementPrefix: 'bs-tooltip',
	  delay: DEFAULT_DELAYS$1,
	  autohide: true,
	  toggle: function toggle() {}
	};
	
	var Tooltip = function (_React$Component) {
	  inherits(Tooltip, _React$Component);
	
	  function Tooltip(props) {
	    classCallCheck(this, Tooltip);
	
	    var _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));
	
	    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
	    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
	    _this.toggle = _this.toggle.bind(_this);
	    _this.onMouseOverTooltip = _this.onMouseOverTooltip.bind(_this);
	    _this.onMouseLeaveTooltip = _this.onMouseLeaveTooltip.bind(_this);
	    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_this);
	    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_this);
	    _this.show = _this.show.bind(_this);
	    _this.hide = _this.hide.bind(_this);
	    _this.onEscKeyDown = _this.onEscKeyDown.bind(_this);
	    return _this;
	  }
	
	  createClass(Tooltip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._target = getTarget(this.props.target);
	      this.addTargetEvents();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeTargetEvents();
	    }
	  }, {
	    key: 'onMouseOverTooltip',
	    value: function onMouseOverTooltip(e) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }
	      this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
	    }
	  }, {
	    key: 'onMouseLeaveTooltip',
	    value: function onMouseLeaveTooltip(e) {
	      if (this._showTimeout) {
	        this.clearShowTimeout();
	      }
	      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	    }
	  }, {
	    key: 'onMouseOverTooltipContent',
	    value: function onMouseOverTooltipContent() {
	      if (this.props.autohide) {
	        return;
	      }
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }
	    }
	  }, {
	    key: 'onMouseLeaveTooltipContent',
	    value: function onMouseLeaveTooltipContent(e) {
	      if (this.props.autohide) {
	        return;
	      }
	      if (this._showTimeout) {
	        this.clearShowTimeout();
	      }
	      e.persist();
	      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	    }
	  }, {
	    key: 'onEscKeyDown',
	    value: function onEscKeyDown(e) {
	      if (e.key === 'Escape') {
	        this.hide(e);
	      }
	    }
	  }, {
	    key: 'getDelay',
	    value: function getDelay(key) {
	      var delay = this.props.delay;
	
	      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
	        return isNaN(delay[key]) ? DEFAULT_DELAYS$1[key] : delay[key];
	      }
	      return delay;
	    }
	  }, {
	    key: 'show',
	    value: function show(e) {
	      if (!this.props.isOpen) {
	        this.clearShowTimeout();
	        this.toggle(e);
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide(e) {
	      if (this.props.isOpen) {
	        this.clearHideTimeout();
	        this.toggle(e);
	      }
	    }
	  }, {
	    key: 'clearShowTimeout',
	    value: function clearShowTimeout() {
	      clearTimeout(this._showTimeout);
	      this._showTimeout = undefined;
	    }
	  }, {
	    key: 'clearHideTimeout',
	    value: function clearHideTimeout() {
	      clearTimeout(this._hideTimeout);
	      this._hideTimeout = undefined;
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(e) {
	      if (e.target === this._target || this._target.contains(e.target)) {
	        if (this._hideTimeout) {
	          this.clearHideTimeout();
	        }
	
	        if (!this.props.isOpen) {
	          this.toggle(e);
	        }
	      } else if (this.props.isOpen && e.target.getAttribute('role') !== 'tooltip') {
	        if (this._showTimeout) {
	          this.clearShowTimeout();
	        }
	        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	      }
	    }
	  }, {
	    key: 'addTargetEvents',
	    value: function addTargetEvents() {
	      var _this2 = this;
	
	      this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
	      this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
	      this._target.addEventListener('keydown', this.onEscKeyDown, true);
	      this._target.addEventListener('focusin', this.show, true);
	      this._target.addEventListener('focusout', this.hide, true);
	
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.addEventListener(event, _this2.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'removeTargetEvents',
	    value: function removeTargetEvents() {
	      var _this3 = this;
	
	      this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
	      this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
	      this._target.addEventListener('keydown', this.onEscKeyDown, true);
	      this._target.addEventListener('focusin', this.show, true);
	      this._target.addEventListener('focusout', this.hide, true);
	
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.removeEventListener(event, _this3.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      if (this.props.disabled) {
	        return e && e.preventDefault();
	      }
	
	      return this.props.toggle(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.isOpen) {
	        return null;
	      }
	
	      var attributes = omit(this.props, Object.keys(propTypes$46));
	      var classes = mapToCssModules(classNames('tooltip-inner', this.props.innerClassName), this.props.cssModule);
	
	      var popperClasses = mapToCssModules(classNames('tooltip', 'show', this.props.className), this.props.cssModule);
	
	      return React__default.createElement(
	        PopperContent,
	        {
	          className: popperClasses,
	          target: this.props.target,
	          isOpen: this.props.isOpen,
	          hideArrow: this.props.hideArrow,
	          placement: this.props.placement,
	          placementPrefix: this.props.placementPrefix,
	          container: this.props.container,
	          modifiers: this.props.modifiers,
	          offset: this.props.offset,
	          cssModule: this.props.cssModule
	        },
	        React__default.createElement('div', _extends({}, attributes, {
	          ref: this.props.innerRef,
	          className: classes,
	          role: 'tooltip',
	          'aria-hidden': this.props.isOpen,
	          onMouseOver: this.onMouseOverTooltipContent,
	          onMouseLeave: this.onMouseLeaveTooltipContent,
	          onKeyDown: this.onEscKeyDown
	        }))
	      );
	    }
	  }]);
	  return Tooltip;
	}(React__default.Component);
	
	Tooltip.propTypes = propTypes$46;
	Tooltip.defaultProps = defaultProps$42;
	
	var propTypes$47 = {
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  size: PropTypes.string,
	  bordered: PropTypes.bool,
	  borderless: PropTypes.bool,
	  striped: PropTypes.bool,
	  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
	  dark: PropTypes.bool,
	  hover: PropTypes.bool,
	  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  responsiveTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	};
	
	var defaultProps$43 = {
	  tag: 'table',
	  responsiveTag: 'div'
	};
	
	var Table = function Table(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      bordered = props.bordered,
	      borderless = props.borderless,
	      striped = props.striped,
	      inverse = props.inverse,
	      dark = props.dark,
	      hover = props.hover,
	      responsive = props.responsive,
	      Tag = props.tag,
	      ResponsiveTag = props.responsiveTag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'bordered', 'borderless', 'striped', 'inverse', 'dark', 'hover', 'responsive', 'tag', 'responsiveTag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark || inverse ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
	
	  var table = React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	
	  if (responsive) {
	    var responsiveClassName = responsive === true ? 'table-responsive' : 'table-responsive-' + responsive;
	
	    return React__default.createElement(
	      ResponsiveTag,
	      { className: responsiveClassName },
	      table
	    );
	  }
	
	  return table;
	};
	
	Table.propTypes = propTypes$47;
	Table.defaultProps = defaultProps$43;
	
	var propTypes$48 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  flush: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$44 = {
	  tag: 'ul'
	};
	
	var ListGroup = function ListGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      flush = props.flush,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'flush']);
	
	  var classes = mapToCssModules(classNames(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroup.propTypes = propTypes$48;
	ListGroup.defaultProps = defaultProps$44;
	
	var propTypes$49 = {
	  children: PropTypes.node,
	  inline: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$45 = {
	  tag: 'form'
	};
	
	var Form = function (_Component) {
	  inherits(Form, _Component);
	
	  function Form(props) {
	    classCallCheck(this, Form);
	
	    var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
	
	    _this.getRef = _this.getRef.bind(_this);
	    _this.submit = _this.submit.bind(_this);
	    return _this;
	  }
	
	  createClass(Form, [{
	    key: 'getRef',
	    value: function getRef(ref) {
	      if (this.props.innerRef) {
	        this.props.innerRef(ref);
	      }
	      this.ref = ref;
	    }
	  }, {
	    key: 'submit',
	    value: function submit() {
	      if (this.ref) {
	        this.ref.submit();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          inline = _props.inline,
	          Tag = _props.tag,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'inline', 'tag', 'innerRef']);
	
	
	      var classes = mapToCssModules(classNames(className, inline ? 'form-inline' : false), cssModule);
	
	      return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
	    }
	  }]);
	  return Form;
	}(React.Component);
	
	Form.propTypes = propTypes$49;
	Form.defaultProps = defaultProps$45;
	
	var propTypes$50 = {
	  children: PropTypes.node,
	  tag: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  valid: PropTypes.bool,
	  tooltip: PropTypes.bool
	};
	
	var defaultProps$46 = {
	  tag: 'div',
	  valid: undefined
	};
	
	var FormFeedback = function FormFeedback(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      valid = props.valid,
	      tooltip = props.tooltip,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'valid', 'tooltip', 'tag']);
	
	
	  var validMode = tooltip ? 'tooltip' : 'feedback';
	
	  var classes = mapToCssModules(classNames(className, valid ? 'valid-' + validMode : 'invalid-' + validMode), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	FormFeedback.propTypes = propTypes$50;
	FormFeedback.defaultProps = defaultProps$46;
	
	var propTypes$51 = {
	  children: PropTypes.node,
	  row: PropTypes.bool,
	  check: PropTypes.bool,
	  inline: PropTypes.bool,
	  disabled: PropTypes.bool,
	  tag: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$47 = {
	  tag: 'div'
	};
	
	var FormGroup = function FormGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      row = props.row,
	      disabled = props.disabled,
	      check = props.check,
	      inline = props.inline,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'row', 'disabled', 'check', 'inline', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'position-relative', row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	FormGroup.propTypes = propTypes$51;
	FormGroup.defaultProps = defaultProps$47;
	
	var propTypes$52 = {
	  children: PropTypes.node,
	  inline: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  color: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$48 = {
	  tag: 'small',
	  color: 'muted'
	};
	
	var FormText = function FormText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      inline = props.inline,
	      color = props.color,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'inline', 'color', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	FormText.propTypes = propTypes$52;
	FormText.defaultProps = defaultProps$48;
	
	/* eslint react/prefer-stateless-function: 0 */
	
	var propTypes$53 = {
	  children: PropTypes.node,
	  type: PropTypes.string,
	  size: PropTypes.string,
	  bsSize: PropTypes.string,
	  state: deprecated(PropTypes.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
	  valid: PropTypes.bool,
	  invalid: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	  static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
	  plaintext: PropTypes.bool,
	  addon: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$49 = {
	  type: 'text'
	};
	
	var Input = function (_React$Component) {
	  inherits(Input, _React$Component);
	
	  function Input(props) {
	    classCallCheck(this, Input);
	
	    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
	
	    _this.getRef = _this.getRef.bind(_this);
	    _this.focus = _this.focus.bind(_this);
	    return _this;
	  }
	
	  createClass(Input, [{
	    key: 'getRef',
	    value: function getRef(ref) {
	      if (this.props.innerRef) {
	        this.props.innerRef(ref);
	      }
	      this.ref = ref;
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this.ref) {
	        this.ref.focus();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          type = _props.type,
	          bsSize = _props.bsSize,
	          state = _props.state,
	          valid = _props.valid,
	          invalid = _props.invalid,
	          tag = _props.tag,
	          addon = _props.addon,
	          staticInput = _props.static,
	          plaintext = _props.plaintext,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'type', 'bsSize', 'state', 'valid', 'invalid', 'tag', 'addon', 'static', 'plaintext', 'innerRef']);
	
	
	      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
	      var isNotaNumber = new RegExp('\\D', 'g');
	
	      var fileInput = type === 'file';
	      var textareaInput = type === 'textarea';
	      var selectInput = type === 'select';
	      var Tag = tag || (selectInput || textareaInput ? type : 'input');
	
	      var formControlClass = 'form-control';
	
	      if (plaintext || staticInput) {
	        formControlClass = formControlClass + '-plaintext';
	        Tag = tag || 'p';
	      } else if (fileInput) {
	        formControlClass = formControlClass + '-file';
	      } else if (checkInput) {
	        if (addon) {
	          formControlClass = null;
	        } else {
	          formControlClass = 'form-check-input';
	        }
	      }
	
	      if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
	        if (state === 'danger') {
	          invalid = true;
	        } else if (state === 'success') {
	          valid = true;
	        }
	      }
	
	      if (attributes.size && isNotaNumber.test(attributes.size)) {
	        warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
	        bsSize = attributes.size;
	        delete attributes.size;
	      }
	
	      var classes = mapToCssModules(classNames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? 'form-control-' + bsSize : false, formControlClass), cssModule);
	
	      if (Tag === 'input' || tag && typeof tag === 'function') {
	        attributes.type = type;
	      }
	
	      if (attributes.children && !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
	        warnOnce('Input with a type of "' + type + '" cannot have children. Please use "value"/"defaultValue" instead.');
	        delete attributes.children;
	      }
	
	      return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
	    }
	  }]);
	  return Input;
	}(React__default.Component);
	
	Input.propTypes = propTypes$53;
	Input.defaultProps = defaultProps$49;
	
	var propTypes$54 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  size: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$50 = {
	  tag: 'div'
	};
	
	var InputGroup = function InputGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      size = props.size,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'size']);
	
	  var classes = mapToCssModules(classNames(className, 'input-group', size ? 'input-group-' + size : null), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	InputGroup.propTypes = propTypes$54;
	InputGroup.defaultProps = defaultProps$50;
	
	var propTypes$56 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$52 = {
	  tag: 'span'
	};
	
	var InputGroupText = function InputGroupText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'input-group-text'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	InputGroupText.propTypes = propTypes$56;
	InputGroupText.defaultProps = defaultProps$52;
	
	var propTypes$55 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$51 = {
	  tag: 'div'
	};
	
	var InputGroupAddon = function InputGroupAddon(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      addonType = props.addonType,
	      children = props.children,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'addonType', 'children']);
	
	
	  var classes = mapToCssModules(classNames(className, 'input-group-' + addonType), cssModule);
	
	  // Convenience to assist with transition
	  if (typeof children === 'string') {
	    return React__default.createElement(
	      Tag,
	      _extends({}, attributes, { className: classes }),
	      React__default.createElement(InputGroupText, { children: children })
	    );
	  }
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes, children: children }));
	};
	
	InputGroupAddon.propTypes = propTypes$55;
	InputGroupAddon.defaultProps = defaultProps$51;
	
	var propTypes$57 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
	  children: PropTypes.node,
	  groupClassName: PropTypes.string,
	  groupAttributes: PropTypes.object,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var InputGroupButton = function InputGroupButton(props) {
	  warnOnce('The "InputGroupButton" component has been deprecated.\nPlease use component "InputGroupAddon".');
	
	  var children = props.children,
	      groupClassName = props.groupClassName,
	      groupAttributes = props.groupAttributes,
	      propsWithoutGroup = objectWithoutProperties(props, ['children', 'groupClassName', 'groupAttributes']);
	
	
	  if (typeof children === 'string') {
	    var cssModule = propsWithoutGroup.cssModule,
	        tag = propsWithoutGroup.tag,
	        addonType = propsWithoutGroup.addonType,
	        attributes = objectWithoutProperties(propsWithoutGroup, ['cssModule', 'tag', 'addonType']);
	
	
	    var allGroupAttributes = _extends({}, groupAttributes, {
	      cssModule: cssModule,
	      tag: tag,
	      addonType: addonType
	    });
	
	    return React__default.createElement(
	      InputGroupAddon,
	      _extends({}, allGroupAttributes, { className: groupClassName }),
	      React__default.createElement(Button, _extends({}, attributes, { children: children }))
	    );
	  }
	
	  return React__default.createElement(InputGroupAddon, _extends({}, props, { children: children }));
	};
	
	InputGroupButton.propTypes = propTypes$57;
	
	var propTypes$58 = {
	  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
	  children: PropTypes.node
	};
	
	var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
	  return React__default.createElement(Dropdown, props);
	};
	
	InputGroupButtonDropdown.propTypes = propTypes$58;
	
	var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];
	
	var stringOrNumberProp$1 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
	
	var columnProps$1 = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({
	  size: stringOrNumberProp$1,
	  push: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
	  pull: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
	  order: stringOrNumberProp$1,
	  offset: stringOrNumberProp$1
	})]);
	
	var propTypes$59 = {
	  children: PropTypes.node,
	  hidden: PropTypes.bool,
	  check: PropTypes.bool,
	  size: PropTypes.string,
	  for: PropTypes.string,
	  tag: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  xs: columnProps$1,
	  sm: columnProps$1,
	  md: columnProps$1,
	  lg: columnProps$1,
	  xl: columnProps$1,
	  widths: PropTypes.array
	};
	
	var defaultProps$53 = {
	  tag: 'label',
	  widths: colWidths$1
	};
	
	var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : 'col-' + colWidth;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
	  }
	
	  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
	};
	
	var Label = function Label(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      hidden = props.hidden,
	      widths = props.widths,
	      Tag = props.tag,
	      check = props.check,
	      size = props.size,
	      htmlFor = props.for,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'hidden', 'widths', 'tag', 'check', 'size', 'for']);
	
	
	  var colClasses = [];
	
	  widths.forEach(function (colWidth, i) {
	    var columnProp = props[colWidth];
	
	    delete attributes[colWidth];
	
	    if (!columnProp && columnProp !== '') {
	      return;
	    }
	
	    var isXs = !i;
	    var colClass = void 0;
	
	    if (isobject(columnProp)) {
	      var _classNames;
	
	      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
	      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
	
	      colClasses.push(mapToCssModules(classNames((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
	    } else {
	      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
	      colClasses.push(colClass);
	    }
	  });
	
	  var classes = mapToCssModules(classNames(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
	};
	
	Label.propTypes = propTypes$59;
	Label.defaultProps = defaultProps$53;
	
	var propTypes$60 = {
	  body: PropTypes.bool,
	  bottom: PropTypes.bool,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  heading: PropTypes.bool,
	  left: PropTypes.bool,
	  list: PropTypes.bool,
	  middle: PropTypes.bool,
	  object: PropTypes.bool,
	  right: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  top: PropTypes.bool
	};
	
	var Media = function Media(props) {
	  var body = props.body,
	      bottom = props.bottom,
	      className = props.className,
	      cssModule = props.cssModule,
	      heading = props.heading,
	      left = props.left,
	      list = props.list,
	      middle = props.middle,
	      object = props.object,
	      right = props.right,
	      tag = props.tag,
	      top = props.top,
	      attributes = objectWithoutProperties(props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);
	
	
	  var defaultTag = void 0;
	  if (heading) {
	    defaultTag = 'h4';
	  } else if (attributes.href) {
	    defaultTag = 'a';
	  } else if (attributes.src || object) {
	    defaultTag = 'img';
	  } else if (list) {
	    defaultTag = 'ul';
	  } else {
	    defaultTag = 'div';
	  }
	  var Tag = tag || defaultTag;
	
	  var classes = mapToCssModules(classNames(className, {
	    'media-body': body,
	    'media-heading': heading,
	    'media-left': left,
	    'media-right': right,
	    'media-top': top,
	    'media-bottom': bottom,
	    'media-middle': middle,
	    'media-object': object,
	    'media-list': list,
	    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
	  }), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Media.propTypes = propTypes$60;
	
	var propTypes$61 = {
	  children: PropTypes.node,
	  className: PropTypes.string,
	  listClassName: PropTypes.string,
	  cssModule: PropTypes.object,
	  size: PropTypes.string,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  'aria-label': PropTypes.string
	};
	
	var defaultProps$54 = {
	  tag: 'nav',
	  listTag: 'ul',
	  'aria-label': 'pagination'
	};
	
	var Pagination = function Pagination(props) {
	  var className = props.className,
	      listClassName = props.listClassName,
	      cssModule = props.cssModule,
	      size = props.size,
	      Tag = props.tag,
	      ListTag = props.listTag,
	      label = props['aria-label'],
	      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'size', 'tag', 'listTag', 'aria-label']);
	
	
	  var classes = mapToCssModules(classNames(className), cssModule);
	
	  var listClasses = mapToCssModules(classNames(listClassName, 'pagination', defineProperty({}, 'pagination-' + size, !!size)), cssModule);
	
	  return React__default.createElement(
	    Tag,
	    { className: classes, 'aria-label': label },
	    React__default.createElement(ListTag, _extends({}, attributes, { className: listClasses }))
	  );
	};
	
	Pagination.propTypes = propTypes$61;
	Pagination.defaultProps = defaultProps$54;
	
	var propTypes$62 = {
	  active: PropTypes.bool,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  disabled: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	};
	
	var defaultProps$55 = {
	  tag: 'li'
	};
	
	var PaginationItem = function PaginationItem(props) {
	  var active = props.active,
	      className = props.className,
	      cssModule = props.cssModule,
	      disabled = props.disabled,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['active', 'className', 'cssModule', 'disabled', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'page-item', {
	    active: active,
	    disabled: disabled
	  }), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	PaginationItem.propTypes = propTypes$62;
	PaginationItem.defaultProps = defaultProps$55;
	
	var propTypes$63 = {
	  'aria-label': PropTypes.string,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  next: PropTypes.bool,
	  previous: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	};
	
	var defaultProps$56 = {
	  tag: 'a'
	};
	
	var PaginationLink = function PaginationLink(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      next = props.next,
	      previous = props.previous,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'next', 'previous', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'page-link'), cssModule);
	
	  var defaultAriaLabel = void 0;
	  if (previous) {
	    defaultAriaLabel = 'Previous';
	  } else if (next) {
	    defaultAriaLabel = 'Next';
	  }
	  var ariaLabel = props['aria-label'] || defaultAriaLabel;
	
	  var defaultCaret = void 0;
	  if (previous) {
	    defaultCaret = '\xAB';
	  } else if (next) {
	    defaultCaret = '\xBB';
	  }
	
	  var children = props.children;
	  if (children && Array.isArray(children) && children.length === 0) {
	    children = null;
	  }
	
	  if (!attributes.href && Tag === 'a') {
	    Tag = 'button';
	  }
	
	  if (previous || next) {
	    children = [React__default.createElement(
	      'span',
	      {
	        'aria-hidden': 'true',
	        key: 'caret'
	      },
	      children || defaultCaret
	    ), React__default.createElement(
	      'span',
	      {
	        className: 'sr-only',
	        key: 'sr'
	      },
	      ariaLabel
	    )];
	  }
	
	  return React__default.createElement(
	    Tag,
	    _extends({}, attributes, {
	      className: classes,
	      'aria-label': ariaLabel
	    }),
	    children
	  );
	};
	
	PaginationLink.propTypes = propTypes$63;
	PaginationLink.defaultProps = defaultProps$56;
	
	var propTypes$64 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  activeTab: PropTypes.any,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$57 = {
	  tag: 'div'
	};
	
	var childContextTypes$2 = {
	  activeTabId: PropTypes.any
	};
	
	var TabContent = function (_Component) {
	  inherits(TabContent, _Component);
	  createClass(TabContent, null, [{
	    key: 'getDerivedStateFromProps',
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      if (prevState.activeTab !== nextProps.activeTab) {
	        return {
	          activeTab: nextProps.activeTab
	        };
	      }
	      return null;
	    }
	  }]);
	
	  function TabContent(props) {
	    classCallCheck(this, TabContent);
	
	    var _this = possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call(this, props));
	
	    _this.state = {
	      activeTab: _this.props.activeTab
	    };
	    return _this;
	  }
	
	  createClass(TabContent, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        activeTabId: this.state.activeTab
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          Tag = _props.tag;
	
	
	      var attributes = omit(this.props, Object.keys(propTypes$64));
	
	      var classes = mapToCssModules(classNames('tab-content', className), cssModule);
	
	      return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	    }
	  }]);
	  return TabContent;
	}(React.Component);
	
	reactLifecyclesCompat.polyfill(TabContent);
	TabContent.propTypes = propTypes$64;
	TabContent.defaultProps = defaultProps$57;
	TabContent.childContextTypes = childContextTypes$2;
	
	var propTypes$65 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  tabId: PropTypes.any
	};
	
	var defaultProps$58 = {
	  tag: 'div'
	};
	
	var contextTypes$3 = {
	  activeTabId: PropTypes.any
	};
	
	function TabPane(props, context) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      tabId = props.tabId,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabId', 'tag']);
	
	  var classes = mapToCssModules(classNames('tab-pane', className, { active: tabId === context.activeTabId }), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	}
	TabPane.propTypes = propTypes$65;
	TabPane.defaultProps = defaultProps$58;
	TabPane.contextTypes = contextTypes$3;
	
	var propTypes$66 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  fluid: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$59 = {
	  tag: 'div'
	};
	
	var Jumbotron = function Jumbotron(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      fluid = props.fluid,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'fluid']);
	
	
	  var classes = mapToCssModules(classNames(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Jumbotron.propTypes = propTypes$66;
	Jumbotron.defaultProps = defaultProps$59;
	
	var propTypes$67 = {
	  children: PropTypes.node,
	  className: PropTypes.string,
	  closeClassName: PropTypes.string,
	  closeAriaLabel: PropTypes.string,
	  cssModule: PropTypes.object,
	  color: PropTypes.string,
	  fade: PropTypes.bool,
	  isOpen: PropTypes.bool,
	  toggle: PropTypes.func,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  transition: PropTypes.shape(Fade.propTypes),
	  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
	};
	
	var defaultProps$60 = {
	  color: 'success',
	  isOpen: true,
	  tag: 'div',
	  closeAriaLabel: 'Close',
	  fade: true,
	  transition: _extends({}, Fade.defaultProps, {
	    unmountOnExit: true
	  })
	};
	
	function Alert(props) {
	  var className = props.className,
	      closeClassName = props.closeClassName,
	      closeAriaLabel = props.closeAriaLabel,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      color = props.color,
	      isOpen = props.isOpen,
	      toggle = props.toggle,
	      children = props.children,
	      transition = props.transition,
	      fade = props.fade,
	      innerRef = props.innerRef,
	      attributes = objectWithoutProperties(props, ['className', 'closeClassName', 'closeAriaLabel', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'children', 'transition', 'fade', 'innerRef']);
	
	
	  var classes = mapToCssModules(classNames(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle }), cssModule);
	
	  var closeClasses = mapToCssModules(classNames('close', closeClassName), cssModule);
	
	  var alertTransition = _extends({}, Fade.defaultProps, transition, {
	    baseClass: fade ? transition.baseClass : '',
	    timeout: fade ? transition.timeout : 0
	  });
	
	  return React__default.createElement(
	    Fade,
	    _extends({}, attributes, alertTransition, { tag: Tag, className: classes, 'in': isOpen, role: 'alert', innerRef: innerRef }),
	    toggle ? React__default.createElement(
	      'button',
	      { type: 'button', className: closeClasses, 'aria-label': closeAriaLabel, onClick: toggle },
	      React__default.createElement(
	        'span',
	        { 'aria-hidden': 'true' },
	        '\xD7'
	      )
	    ) : null,
	    children
	  );
	}
	
	Alert.propTypes = propTypes$67;
	Alert.defaultProps = defaultProps$60;
	
	var _transitionStatusToCl;
	
	var propTypes$68 = _extends({}, Transition.propTypes, {
	  isOpen: PropTypes.bool,
	  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.node,
	  navbar: PropTypes.bool,
	  cssModule: PropTypes.object,
	  innerRef: PropTypes.object
	});
	
	var defaultProps$61 = _extends({}, Transition.defaultProps, {
	  isOpen: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  tag: 'div',
	  timeout: TransitionTimeouts.Collapse
	});
	
	var transitionStatusToClassHash = (_transitionStatusToCl = {}, defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERED, 'collapse show'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITED, 'collapse'), _transitionStatusToCl);
	
	function getTransitionClass(status) {
	  return transitionStatusToClassHash[status] || 'collapse';
	}
	
	function getHeight(node) {
	  return node.scrollHeight;
	}
	
	var Collapse = function (_Component) {
	  inherits(Collapse, _Component);
	
	  function Collapse(props) {
	    classCallCheck(this, Collapse);
	
	    var _this = possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));
	
	    _this.state = {
	      height: null
	    };
	
	    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
	      _this[name] = _this[name].bind(_this);
	    });
	    return _this;
	  }
	
	  createClass(Collapse, [{
	    key: 'onEntering',
	    value: function onEntering(node, isAppearing) {
	      this.setState({ height: getHeight(node) });
	      this.props.onEntering(node, isAppearing);
	    }
	  }, {
	    key: 'onEntered',
	    value: function onEntered(node, isAppearing) {
	      this.setState({ height: null });
	      this.props.onEntered(node, isAppearing);
	    }
	  }, {
	    key: 'onExit',
	    value: function onExit(node) {
	      this.setState({ height: getHeight(node) });
	      this.props.onExit(node);
	    }
	  }, {
	    key: 'onExiting',
	    value: function onExiting(node) {
	      // getting this variable triggers a reflow
	      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
	      this.setState({ height: 0 });
	      this.props.onExiting(node);
	    }
	  }, {
	    key: 'onExited',
	    value: function onExited(node) {
	      this.setState({ height: null });
	      this.props.onExited(node);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          Tag = _props.tag,
	          isOpen = _props.isOpen,
	          className = _props.className,
	          navbar = _props.navbar,
	          cssModule = _props.cssModule,
	          children = _props.children,
	          innerRef = _props.innerRef,
	          otherProps = objectWithoutProperties(_props, ['tag', 'isOpen', 'className', 'navbar', 'cssModule', 'children', 'innerRef']);
	      var height = this.state.height;
	
	      // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
	      // empty object "{}". This is the result of the `react-transition-group` babel
	      // configuration settings. Therefore, to ensure that production builds work without
	      // error, we can either explicitly define keys or use the Transition.defaultProps.
	      // Using the Transition.defaultProps excludes any required props. Thus, the best
	      // solution is to explicitly define required props in our utilities and reference these.
	      // This also gives us more flexibility in the future to remove the prop-types
	      // dependency in distribution builds (Similar to how `react-transition-group` does).
	      // Note: Without omitting the `react-transition-group` props, the resulting child
	      // Tag component would inherit the Transition properties as attributes for the HTML
	      // element which results in errors/warnings for non-valid attributes.
	
	      var transitionProps = pick(otherProps, TransitionPropTypeKeys);
	      var childProps = omit(otherProps, TransitionPropTypeKeys);
	      return React__default.createElement(
	        Transition,
	        _extends({}, transitionProps, {
	          'in': isOpen,
	          onEntering: this.onEntering,
	          onEntered: this.onEntered,
	          onExit: this.onExit,
	          onExiting: this.onExiting,
	          onExited: this.onExited
	        }),
	        function (status) {
	          var collapseClass = getTransitionClass(status);
	          var classes = mapToCssModules(classNames(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
	          var style = height === null ? null : { height: height };
	          return React__default.createElement(
	            Tag,
	            _extends({}, childProps, {
	              style: _extends({}, childProps.style, style),
	              className: classes,
	              ref: _this2.props.innerRef
	            }),
	            children
	          );
	        }
	      );
	    }
	  }]);
	  return Collapse;
	}(React.Component);
	
	Collapse.propTypes = propTypes$68;
	Collapse.defaultProps = defaultProps$61;
	
	var propTypes$69 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  active: PropTypes.bool,
	  disabled: PropTypes.bool,
	  color: PropTypes.string,
	  action: PropTypes.bool,
	  className: PropTypes.any,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$62 = {
	  tag: 'li'
	};
	
	var handleDisabledOnClick = function handleDisabledOnClick(e) {
	  e.preventDefault();
	};
	
	var ListGroupItem = function ListGroupItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      active = props.active,
	      disabled = props.disabled,
	      action = props.action,
	      color = props.color,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'active', 'disabled', 'action', 'color']);
	
	  var classes = mapToCssModules(classNames(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item'), cssModule);
	
	  // Prevent click event when disabled.
	  if (disabled) {
	    attributes.onClick = handleDisabledOnClick;
	  }
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroupItem.propTypes = propTypes$69;
	ListGroupItem.defaultProps = defaultProps$62;
	
	var propTypes$70 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.any,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$63 = {
	  tag: 'h5'
	};
	
	var ListGroupItemHeading = function ListGroupItemHeading(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'list-group-item-heading'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroupItemHeading.propTypes = propTypes$70;
	ListGroupItemHeading.defaultProps = defaultProps$63;
	
	var propTypes$71 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.any,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$64 = {
	  tag: 'p'
	};
	
	var ListGroupItemText = function ListGroupItemText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'list-group-item-text'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroupItemText.propTypes = propTypes$71;
	ListGroupItemText.defaultProps = defaultProps$64;
	
	var UncontrolledAlert = function (_Component) {
	  inherits(UncontrolledAlert, _Component);
	
	  function UncontrolledAlert(props) {
	    classCallCheck(this, UncontrolledAlert);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledAlert.__proto__ || Object.getPrototypeOf(UncontrolledAlert)).call(this, props));
	
	    _this.state = { isOpen: true };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledAlert, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(Alert, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledAlert;
	}(React.Component);
	
	var UncontrolledButtonDropdown = function (_Component) {
	  inherits(UncontrolledButtonDropdown, _Component);
	
	  function UncontrolledButtonDropdown(props) {
	    classCallCheck(this, UncontrolledButtonDropdown);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledButtonDropdown.__proto__ || Object.getPrototypeOf(UncontrolledButtonDropdown)).call(this, props));
	
	    _this.state = { isOpen: false };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledButtonDropdown, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(ButtonDropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledButtonDropdown;
	}(React.Component);
	
	var propTypes$72 = {
	  toggler: PropTypes.string.isRequired,
	  toggleEvents: PropTypes.arrayOf(PropTypes.string)
	};
	
	var defaultProps$65 = {
	  toggleEvents: defaultToggleEvents
	};
	
	var UncontrolledCollapse = function (_Component) {
	  inherits(UncontrolledCollapse, _Component);
	
	  function UncontrolledCollapse(props) {
	    classCallCheck(this, UncontrolledCollapse);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledCollapse.__proto__ || Object.getPrototypeOf(UncontrolledCollapse)).call(this, props));
	
	    _this.togglers = null;
	    _this.removeEventListeners = null;
	    _this.toggle = _this.toggle.bind(_this);
	
	    _this.state = {
	      isOpen: false
	    };
	    return _this;
	  }
	
	  createClass(UncontrolledCollapse, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.togglers = findDOMElements(this.props.toggler);
	      if (this.togglers.length) {
	        this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.togglers.length && this.removeEventListeners) {
	        this.removeEventListeners();
	      }
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      this.setState(function (_ref) {
	        var isOpen = _ref.isOpen;
	        return { isOpen: !isOpen };
	      });
	      e.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          toggleEvents = _props.toggleEvents,
	          rest = objectWithoutProperties(_props, ['toggleEvents']);
	
	      return React__default.createElement(Collapse, _extends({ isOpen: this.state.isOpen }, rest));
	    }
	  }]);
	  return UncontrolledCollapse;
	}(React.Component);
	
	UncontrolledCollapse.propTypes = propTypes$72;
	UncontrolledCollapse.defaultProps = defaultProps$65;
	
	var UncontrolledDropdown = function (_Component) {
	  inherits(UncontrolledDropdown, _Component);
	
	  function UncontrolledDropdown(props) {
	    classCallCheck(this, UncontrolledDropdown);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledDropdown.__proto__ || Object.getPrototypeOf(UncontrolledDropdown)).call(this, props));
	
	    _this.state = { isOpen: false };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledDropdown, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(Dropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledDropdown;
	}(React.Component);
	
	var UncontrolledNavDropdown = function UncontrolledNavDropdown(props) {
	  warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');
	
	  return React__default.createElement(UncontrolledDropdown, _extends({ nav: true }, props));
	};
	
	var UncontrolledTooltip = function (_Component) {
	  inherits(UncontrolledTooltip, _Component);
	
	  function UncontrolledTooltip(props) {
	    classCallCheck(this, UncontrolledTooltip);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledTooltip.__proto__ || Object.getPrototypeOf(UncontrolledTooltip)).call(this, props));
	
	    _this.state = { isOpen: false };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledTooltip, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(Tooltip, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledTooltip;
	}(React.Component);
	
	exports.Alert = Alert;
	exports.Container = Container;
	exports.Row = Row;
	exports.Col = Col;
	exports.Navbar = Navbar;
	exports.NavbarBrand = NavbarBrand;
	exports.NavbarToggler = NavbarToggler;
	exports.Nav = Nav;
	exports.NavItem = NavItem;
	exports.NavDropdown = NavDropdown;
	exports.NavLink = NavLink;
	exports.Breadcrumb = Breadcrumb;
	exports.BreadcrumbItem = BreadcrumbItem;
	exports.Button = Button;
	exports.ButtonDropdown = ButtonDropdown;
	exports.ButtonGroup = ButtonGroup;
	exports.ButtonToolbar = ButtonToolbar;
	exports.Dropdown = Dropdown;
	exports.DropdownItem = DropdownItem;
	exports.DropdownMenu = DropdownMenu;
	exports.DropdownToggle = DropdownToggle;
	exports.Fade = Fade;
	exports.Badge = Badge;
	exports.Card = Card;
	exports.CardLink = CardLink;
	exports.CardGroup = CardGroup;
	exports.CardDeck = CardDeck;
	exports.CardColumns = CardColumns;
	exports.CardBody = CardBody;
	exports.CardBlock = CardBlock;
	exports.CardFooter = CardFooter;
	exports.CardHeader = CardHeader;
	exports.CardImg = CardImg;
	exports.CardImgOverlay = CardImgOverlay;
	exports.Carousel = Carousel;
	exports.UncontrolledCarousel = UncontrolledCarousel;
	exports.CarouselControl = CarouselControl;
	exports.CarouselItem = CarouselItem;
	exports.CarouselIndicators = CarouselIndicators;
	exports.CarouselCaption = CarouselCaption;
	exports.CardSubtitle = CardSubtitle;
	exports.CardText = CardText;
	exports.CardTitle = CardTitle;
	exports.Popover = Popover;
	exports.PopoverContent = PopoverContent;
	exports.PopoverBody = PopoverBody;
	exports.PopoverTitle = PopoverTitle;
	exports.PopoverHeader = PopoverHeader;
	exports.Progress = Progress;
	exports.Modal = Modal;
	exports.ModalHeader = ModalHeader;
	exports.ModalBody = ModalBody;
	exports.ModalFooter = ModalFooter;
	exports.PopperContent = PopperContent;
	exports.PopperTargetHelper = PopperTargetHelper;
	exports.Tooltip = Tooltip;
	exports.Table = Table;
	exports.ListGroup = ListGroup;
	exports.Form = Form;
	exports.FormFeedback = FormFeedback;
	exports.FormGroup = FormGroup;
	exports.FormText = FormText;
	exports.Input = Input;
	exports.InputGroup = InputGroup;
	exports.InputGroupAddon = InputGroupAddon;
	exports.InputGroupButton = InputGroupButton;
	exports.InputGroupButtonDropdown = InputGroupButtonDropdown;
	exports.InputGroupText = InputGroupText;
	exports.Label = Label;
	exports.CustomInput = CustomInput;
	exports.Media = Media;
	exports.Pagination = Pagination;
	exports.PaginationItem = PaginationItem;
	exports.PaginationLink = PaginationLink;
	exports.TabContent = TabContent;
	exports.TabPane = TabPane;
	exports.Jumbotron = Jumbotron;
	exports.Collapse = Collapse;
	exports.ListGroupItem = ListGroupItem;
	exports.ListGroupItemText = ListGroupItemText;
	exports.ListGroupItemHeading = ListGroupItemHeading;
	exports.UncontrolledAlert = UncontrolledAlert;
	exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
	exports.UncontrolledCollapse = UncontrolledCollapse;
	exports.UncontrolledDropdown = UncontrolledDropdown;
	exports.UncontrolledNavDropdown = UncontrolledNavDropdown;
	exports.UncontrolledTooltip = UncontrolledTooltip;
	exports.Util = utils;
	//# sourceMappingURL=reactstrap.cjs.js.map


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, module) {'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var isPlainObject = _interopDefault(__webpack_require__(254));
	var Stylis = _interopDefault(__webpack_require__(284));
	var _insertRulePlugin = _interopDefault(__webpack_require__(283));
	var React = __webpack_require__(1);
	var React__default = _interopDefault(React);
	var PropTypes = _interopDefault(__webpack_require__(2));
	var hoist = _interopDefault(__webpack_require__(79));
	var reactIs = __webpack_require__(269);
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */
	
	var _uppercasePattern = /([A-Z])/g;
	
	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate$2(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	var hyphenate_1 = hyphenate$2;
	
	var hyphenate = hyphenate_1;
	
	var msPattern = /^ms-/;
	
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	var hyphenateStyleName_1 = hyphenateStyleName;
	
	// 
	var objToCss = function objToCss(obj, prevKey) {
	  var css = Object.keys(obj).filter(function (key) {
	    var chunk = obj[key];
	    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
	  }).map(function (key) {
	    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
	    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
	  }).join(' ');
	  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
	};
	
	var flatten = function flatten(chunks, executionContext) {
	  return chunks.reduce(function (ruleSet, chunk) {
	    /* Remove falsey values */
	    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
	      return ruleSet;
	    }
	    /* Flatten ruleSet */
	    if (Array.isArray(chunk)) {
	      return [].concat(ruleSet, flatten(chunk, executionContext));
	    }
	
	    /* Handle other components */
	    if (chunk.hasOwnProperty('styledComponentId')) {
	      // $FlowFixMe not sure how to make this pass
	      return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
	    }
	
	    /* Either execute or defer the function */
	    if (typeof chunk === 'function') {
	      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
	    }
	
	    /* Handle objects */
	    return ruleSet.concat(
	    // $FlowFixMe have to add %checks somehow to isPlainObject
	    isPlainObject(chunk) ? objToCss(chunk) : chunk.toString());
	  }, []);
	};
	
	// 
	// NOTE: This stylis instance is only used to split rules from SSR'd style tags
	var stylisSplitter = new Stylis({
	  global: false,
	  cascade: true,
	  keyframe: false,
	  prefix: false,
	  compress: false,
	  semicolon: true
	});
	
	var stylis = new Stylis({
	  global: false,
	  cascade: true,
	  keyframe: false,
	  prefix: true,
	  compress: false,
	  semicolon: false // NOTE: This means "autocomplete missing semicolons"
	});
	
	// Wrap `insertRulePlugin to build a list of rules,
	// and then make our own plugin to return the rules. This
	// makes it easier to hook into the existing SSR architecture
	
	var parsingRules = [];
	// eslint-disable-next-line consistent-return
	var returnRulesPlugin = function returnRulesPlugin(context) {
	  if (context === -2) {
	    var parsedRules = parsingRules;
	    parsingRules = [];
	    return parsedRules;
	  }
	};
	
	var parseRulesPlugin = _insertRulePlugin(function (rule) {
	  parsingRules.push(rule);
	});
	
	stylis.use([parseRulesPlugin, returnRulesPlugin]);
	stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);
	
	var stringifyRules = function stringifyRules(rules, selector, prefix) {
	  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments
	
	  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;
	
	  return stylis(prefix || !selector ? '' : selector, cssStr);
	};
	
	var splitByRules = function splitByRules(css) {
	  return stylisSplitter('', css);
	};
	
	// 
	
	function isStyledComponent(target) /* : %checks */{
	  return (
	    // $FlowFixMe TODO: flow for styledComponentId
	    typeof target === 'function' && typeof target.styledComponentId === 'string'
	  );
	}
	
	// 
	
	/* This function is DEPRECATED and will be removed on the next major version release.
	 * It was needed to rehydrate all style blocks prepended to chunks before React
	 * tries to rehydrate its HTML stream. Since the master StyleSheet will now detect
	 * the use of streamed style tags and will perform the rehydration earlier when needed
	 * this function will not be needed anymore */
	function consolidateStreamedStyles() {
	  if (false) {
	    // eslint-disable-next-line no-console
	    console.warn('styled-components automatically does streaming SSR rehydration now.\n' + 'Calling consolidateStreamedStyles manually is no longer necessary and a noop now.\n' + '- Please remove the consolidateStreamedStyles call from your client.');
	  }
	}
	
	// 
	/* eslint-disable no-bitwise */
	
	/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
	 * counterparts */
	var charsLength = 52;
	
	/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
	var getAlphabeticChar = function getAlphabeticChar(code) {
	  return String.fromCharCode(code + (code > 25 ? 39 : 97));
	};
	
	/* input a number, usually a hash and convert it to base-52 */
	var generateAlphabeticName = function generateAlphabeticName(code) {
	  var name = '';
	  var x = void 0;
	
	  /* get a char and divide by alphabet-length */
	  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
	    name = getAlphabeticChar(x % charsLength) + name;
	  }
	
	  return getAlphabeticChar(x % charsLength) + name;
	};
	
	// 
	
	var interleave = (function (strings, interpolations) {
	  return interpolations.reduce(function (array, interp, i) {
	    return array.concat(interp, strings[i + 1]);
	  }, [strings[0]]);
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	
	
	
	
	
	
	
	
	
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	// 
	var css = (function (styles) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }
	
	  if (!Array.isArray(styles) && (typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object') {
	    return flatten(interleave([], [styles].concat(interpolations)));
	  }
	  return flatten(interleave(styles, interpolations));
	});
	
	var stream = {}
	
	// 
	
	
	var SC_ATTR = typeof process !== 'undefined' && ({"NODE_ENV":"production","PUBLIC_DIR":"/Users/imgrbs/git/brownbag/public"}).SC_ATTR || 'data-styled-components';
	var SC_STREAM_ATTR = 'data-styled-streamed';
	var CONTEXT_KEY = '__styled-components-stylesheet__';
	
	var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
	
	var DISABLE_SPEEDY = typeof false === 'boolean' && false || ("production") !== 'production';
	
	// 
	var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;
	
	var extractComps = (function (maybeCSS) {
	  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
	  var existingComponents = [];
	  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
	    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
	    return match;
	  });
	  return existingComponents.map(function (_ref, i) {
	    var componentId = _ref.componentId,
	        matchIndex = _ref.matchIndex;
	
	    var nextComp = existingComponents[i + 1];
	    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
	    return { componentId: componentId, cssFromDOM: cssFromDOM };
	  });
	});
	
	// 
	/* eslint-disable camelcase, no-undef */
	
	var getNonce = (function () {
	  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
	});
	
	// 
	// Helper to call a given function, only once
	var once = (function (cb) {
	  var called = false;
	
	  return function () {
	    if (!called) {
	      called = true;
	      cb();
	    }
	  };
	});
	
	// 
	/* These are helpers for the StyleTags to keep track of the injected
	 * rule names for each (component) ID that they're keeping track of.
	 * They're crucial for detecting whether a name has already been
	 * injected.
	 * (This excludes rehydrated names) */
	
	/* adds a new ID:name pairing to a names dictionary */
	var addNameForId = function addNameForId(names, id, name) {
	  if (name) {
	    // eslint-disable-next-line no-param-reassign
	    var namesForId = names[id] || (names[id] = Object.create(null));
	    namesForId[name] = true;
	  }
	};
	
	/* resets an ID entirely by overwriting it in the dictionary */
	var resetIdNames = function resetIdNames(names, id) {
	  // eslint-disable-next-line no-param-reassign
	  names[id] = Object.create(null);
	};
	
	/* factory for a names dictionary checking the existance of an ID:name pairing */
	var hasNameForId = function hasNameForId(names) {
	  return function (id, name) {
	    return names[id] !== undefined && names[id][name];
	  };
	};
	
	/* stringifies names for the html/element output */
	var stringifyNames = function stringifyNames(names) {
	  var str = '';
	  // eslint-disable-next-line guard-for-in
	  for (var id in names) {
	    str += Object.keys(names[id]).join(' ') + ' ';
	  }
	  return str.trim();
	};
	
	/* clones the nested names dictionary */
	var cloneNames = function cloneNames(names) {
	  var clone = Object.create(null);
	  // eslint-disable-next-line guard-for-in
	  for (var id in names) {
	    clone[id] = _extends({}, names[id]);
	  }
	  return clone;
	};
	
	// 
	/* These are helpers that deal with the insertRule (aka speedy) API
	 * They are used in the StyleTags and specifically the speedy tag
	 */
	
	/* retrieve a sheet for a given style tag */
	var sheetForTag = function sheetForTag(tag) {
	  // $FlowFixMe
	  if (tag.sheet) return tag.sheet;
	
	  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
	  var size = document.styleSheets.length;
	  for (var i = 0; i < size; i += 1) {
	    var sheet = document.styleSheets[i];
	    // $FlowFixMe
	    if (sheet.ownerNode === tag) return sheet;
	  }
	
	  /* we should always be able to find a tag */
	  throw new Error();
	};
	
	/* insert a rule safely and return whether it was actually injected */
	var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
	  /* abort early if cssRule string is falsy */
	  if (!cssRule) return false;
	
	  var maxIndex = sheet.cssRules.length;
	
	  try {
	    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
	    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
	  } catch (err) {
	    /* any error indicates an invalid rule */
	    return false;
	  }
	
	  return true;
	};
	
	/* deletes `size` rules starting from `removalIndex` */
	var deleteRules = function deleteRules(sheet, removalIndex, size) {
	  var lowerBound = removalIndex - size;
	  for (var i = removalIndex; i > lowerBound; i -= 1) {
	    sheet.deleteRule(i);
	  }
	};
	
	// 
	/* eslint-disable flowtype/object-type-delimiter */
	/* eslint-disable react/prop-types */
	
	/* this error is used for makeStyleTag */
	var parentNodeUnmountedErr =  false ? '\nTrying to insert a new style tag, but the given Node is unmounted!\n- Are you using a custom target that isn\'t mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n'.trim() : '';
	
	/* this error is used for tags */
	var throwCloneTagErr = function throwCloneTagErr() {
	  throw new Error( false ? '\nThe clone method cannot be used on the client!\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n'.trim() : '');
	};
	
	/* this marker separates component styles and is important for rehydration */
	var makeTextMarker = function makeTextMarker(id) {
	  return '\n/* sc-component-id: ' + id + ' */\n';
	};
	
	/* add up all numbers in array up until and including the index */
	var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
	  var totalUpToIndex = 0;
	  for (var i = 0; i <= index; i += 1) {
	    totalUpToIndex += sizes[i];
	  }
	
	  return totalUpToIndex;
	};
	
	/* create a new style tag after lastEl */
	var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
	  var el = document.createElement('style');
	  el.setAttribute(SC_ATTR, '');
	
	  var nonce = getNonce();
	  if (nonce) {
	    el.setAttribute('nonce', nonce);
	  }
	
	  /* Work around insertRule quirk in EdgeHTML */
	  el.appendChild(document.createTextNode(''));
	
	  if (target && !tagEl) {
	    /* Append to target when no previous element was passed */
	    target.appendChild(el);
	  } else {
	    if (!tagEl || !target || !tagEl.parentNode) {
	      throw new Error(parentNodeUnmountedErr);
	    }
	
	    /* Insert new style tag after the previous one */
	    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
	  }
	
	  return el;
	};
	
	/* takes a css factory function and outputs an html styled tag factory */
	var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
	  return function (additionalAttrs) {
	    var nonce = getNonce();
	    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', additionalAttrs];
	
	    var htmlAttr = attrs.filter(Boolean).join(' ');
	    return '<style ' + htmlAttr + '>' + css() + '</style>';
	  };
	};
	
	/* takes a css factory function and outputs an element factory */
	var wrapAsElement = function wrapAsElement(css, names) {
	  return function () {
	    var _props;
	
	    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props);
	
	    var nonce = getNonce();
	    if (nonce) {
	      // $FlowFixMe
	      props.nonce = nonce;
	    }
	
	    // eslint-disable-next-line react/no-danger
	    return React__default.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
	  };
	};
	
	var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
	  return function () {
	    return Object.keys(markers);
	  };
	};
	
	/* speedy tags utilise insertRule */
	var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
	  var names = Object.create(null);
	  var markers = Object.create(null);
	  var sizes = [];
	
	  var extractImport = getImportRuleTag !== undefined;
	  /* indicates whther getImportRuleTag was called */
	  var usedImportRuleTag = false;
	
	  var insertMarker = function insertMarker(id) {
	    var prev = markers[id];
	    if (prev !== undefined) {
	      return prev;
	    }
	
	    markers[id] = sizes.length;
	    sizes.push(0);
	    resetIdNames(names, id);
	
	    return markers[id];
	  };
	
	  var insertRules = function insertRules(id, cssRules, name) {
	    var marker = insertMarker(id);
	    var sheet = sheetForTag(el);
	    var insertIndex = addUpUntilIndex(sizes, marker);
	
	    var injectedRules = 0;
	    var importRules = [];
	    var cssRulesSize = cssRules.length;
	
	    for (var i = 0; i < cssRulesSize; i += 1) {
	      var cssRule = cssRules[i];
	      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
	      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
	        importRules.push(cssRule);
	      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
	        mayHaveImport = false;
	        injectedRules += 1;
	      }
	    }
	
	    if (extractImport && importRules.length > 0) {
	      usedImportRuleTag = true;
	      // $FlowFixMe
	      getImportRuleTag().insertRules(id + '-import', importRules);
	    }
	
	    sizes[marker] += injectedRules; /* add up no of injected rules */
	    addNameForId(names, id, name);
	  };
	
	  var removeRules = function removeRules(id) {
	    var marker = markers[id];
	    if (marker === undefined) return;
	
	    var size = sizes[marker];
	    var sheet = sheetForTag(el);
	    var removalIndex = addUpUntilIndex(sizes, marker);
	    deleteRules(sheet, removalIndex, size);
	    sizes[marker] = 0;
	    resetIdNames(names, id);
	
	    if (extractImport && usedImportRuleTag) {
	      // $FlowFixMe
	      getImportRuleTag().removeRules(id + '-import');
	    }
	  };
	
	  var css = function css() {
	    var _sheetForTag = sheetForTag(el),
	        cssRules = _sheetForTag.cssRules;
	
	    var str = '';
	
	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      str += makeTextMarker(id);
	      var marker = markers[id];
	      var end = addUpUntilIndex(sizes, marker);
	      var size = sizes[marker];
	      for (var i = end - size; i < end; i += 1) {
	        var rule = cssRules[i];
	        if (rule !== undefined) {
	          str += rule.cssText;
	        }
	      }
	    }
	
	    return str;
	  };
	
	  return {
	    styleTag: el,
	    getIds: getIdsFromMarkersFactory(markers),
	    hasNameForId: hasNameForId(names),
	    insertMarker: insertMarker,
	    insertRules: insertRules,
	    removeRules: removeRules,
	    css: css,
	    toHTML: wrapAsHtmlTag(css, names),
	    toElement: wrapAsElement(css, names),
	    clone: throwCloneTagErr
	  };
	};
	
	var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
	  var names = Object.create(null);
	  var markers = Object.create(null);
	
	  var extractImport = getImportRuleTag !== undefined;
	  var makeTextNode = function makeTextNode(id) {
	    return document.createTextNode(makeTextMarker(id));
	  };
	
	  /* indicates whther getImportRuleTag was called */
	  var usedImportRuleTag = false;
	
	  var insertMarker = function insertMarker(id) {
	    var prev = markers[id];
	    if (prev !== undefined) {
	      return prev;
	    }
	
	    markers[id] = makeTextNode(id);
	    el.appendChild(markers[id]);
	    names[id] = Object.create(null);
	
	    return markers[id];
	  };
	
	  var insertRules = function insertRules(id, cssRules, name) {
	    var marker = insertMarker(id);
	    var importRules = [];
	    var cssRulesSize = cssRules.length;
	
	    for (var i = 0; i < cssRulesSize; i += 1) {
	      var rule = cssRules[i];
	      var mayHaveImport = extractImport;
	      if (mayHaveImport && rule.indexOf('@import') !== -1) {
	        importRules.push(rule);
	      } else {
	        mayHaveImport = false;
	        var separator = i === cssRulesSize - 1 ? '' : ' ';
	        marker.appendData('' + rule + separator);
	      }
	    }
	
	    addNameForId(names, id, name);
	
	    if (extractImport && importRules.length > 0) {
	      usedImportRuleTag = true;
	      // $FlowFixMe
	      getImportRuleTag().insertRules(id + '-import', importRules);
	    }
	  };
	
	  var removeRules = function removeRules(id) {
	    var marker = markers[id];
	    if (marker === undefined) return;
	
	    /* create new empty text node and replace the current one */
	    var newMarker = makeTextNode(id);
	    el.replaceChild(newMarker, marker);
	    markers[id] = newMarker;
	    resetIdNames(names, id);
	
	    if (extractImport && usedImportRuleTag) {
	      // $FlowFixMe
	      getImportRuleTag().removeRules(id + '-import');
	    }
	  };
	
	  var css = function css() {
	    var str = '';
	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      str += markers[id].data;
	    }
	    return str;
	  };
	
	  return {
	    styleTag: el,
	    getIds: getIdsFromMarkersFactory(markers),
	    hasNameForId: hasNameForId(names),
	    insertMarker: insertMarker,
	    insertRules: insertRules,
	    removeRules: removeRules,
	    css: css,
	    toHTML: wrapAsHtmlTag(css, names),
	    toElement: wrapAsElement(css, names),
	    clone: throwCloneTagErr
	  };
	};
	
	var makeServerTagInternal = function makeServerTagInternal(namesArg, markersArg) {
	  var names = namesArg === undefined ? Object.create(null) : namesArg;
	  var markers = markersArg === undefined ? Object.create(null) : markersArg;
	
	  var insertMarker = function insertMarker(id) {
	    var prev = markers[id];
	    if (prev !== undefined) {
	      return prev;
	    }
	
	    return markers[id] = [''];
	  };
	
	  var insertRules = function insertRules(id, cssRules, name) {
	    var marker = insertMarker(id);
	    marker[0] += cssRules.join(' ');
	    addNameForId(names, id, name);
	  };
	
	  var removeRules = function removeRules(id) {
	    var marker = markers[id];
	    if (marker === undefined) return;
	    marker[0] = '';
	    resetIdNames(names, id);
	  };
	
	  var css = function css() {
	    var str = '';
	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      var cssForId = markers[id][0];
	      if (cssForId) {
	        str += makeTextMarker(id) + cssForId;
	      }
	    }
	    return str;
	  };
	
	  var clone = function clone() {
	    var namesClone = cloneNames(names);
	    var markersClone = Object.create(null);
	
	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      markersClone[id] = [markers[id][0]];
	    }
	
	    return makeServerTagInternal(namesClone, markersClone);
	  };
	
	  var tag = {
	    styleTag: null,
	    getIds: getIdsFromMarkersFactory(markers),
	    hasNameForId: hasNameForId(names),
	    insertMarker: insertMarker,
	    insertRules: insertRules,
	    removeRules: removeRules,
	    css: css,
	    toHTML: wrapAsHtmlTag(css, names),
	    toElement: wrapAsElement(css, names),
	    clone: clone
	  };
	
	  return tag;
	};
	
	var makeServerTag = function makeServerTag() {
	  return makeServerTagInternal();
	};
	
	var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
	  if (IS_BROWSER && !forceServer) {
	    var el = makeStyleTag(target, tagEl, insertBefore);
	    if (DISABLE_SPEEDY) {
	      return makeBrowserTag(el, getImportRuleTag);
	    } else {
	      return makeSpeedyTag(el, getImportRuleTag);
	    }
	  }
	
	  return makeServerTag();
	};
	
	/* wraps a given tag so that rehydration is performed once when necessary */
	var makeRehydrationTag = function makeRehydrationTag(tag, els, extracted, names, immediateRehydration) {
	  /* rehydration function that adds all rules to the new tag */
	  var rehydrate = once(function () {
	    /* add all extracted components to the new tag */
	    for (var i = 0; i < extracted.length; i += 1) {
	      var _extracted$i = extracted[i],
	          componentId = _extracted$i.componentId,
	          cssFromDOM = _extracted$i.cssFromDOM;
	
	      var cssRules = splitByRules(cssFromDOM);
	      tag.insertRules(componentId, cssRules);
	    }
	
	    /* remove old HTMLStyleElements, since they have been rehydrated */
	    for (var _i = 0; _i < els.length; _i += 1) {
	      var el = els[_i];
	      if (el.parentNode) {
	        el.parentNode.removeChild(el);
	      }
	    }
	  });
	
	  if (immediateRehydration) rehydrate();
	
	  return _extends({}, tag, {
	    /* add rehydration hook to insertion methods */
	    insertMarker: function insertMarker(id) {
	      rehydrate();
	      return tag.insertMarker(id);
	    },
	    insertRules: function insertRules(id, cssRules, name) {
	      rehydrate();
	      return tag.insertRules(id, cssRules, name);
	    }
	  });
	};
	
	// 
	
	/* determine the maximum number of components before tags are sharded */
	var MAX_SIZE = void 0;
	if (IS_BROWSER) {
	  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
	  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
	} else {
	  /* for servers we do not need to shard at all */
	  MAX_SIZE = -1;
	}
	
	var sheetRunningId = 0;
	var master = void 0;
	
	var StyleSheet = function () {
	  /* a map from ids to tags */
	  /* deferred rules for a given id */
	  /* this is used for not reinjecting rules via hasNameForId() */
	  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */
	  /* a list of tags belonging to this StyleSheet */
	  /* a tag for import rules */
	  /* current capacity until a new tag must be created */
	  /* children (aka clones) of this StyleSheet inheriting all and future injections */
	
	  function StyleSheet() {
	    var _this = this;
	
	    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
	    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    classCallCheck(this, StyleSheet);
	
	    this.getImportRuleTag = function () {
	      var importRuleTag = _this.importRuleTag;
	
	      if (importRuleTag !== undefined) {
	        return importRuleTag;
	      }
	
	      var firstTag = _this.tags[0];
	      var insertBefore = true;
	
	      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
	    };
	
	    sheetRunningId += 1;
	    this.id = sheetRunningId;
	    this.sealed = false;
	    this.forceServer = forceServer;
	    this.target = forceServer ? null : target;
	    this.tagMap = {};
	    this.deferred = {};
	    this.rehydratedNames = {};
	    this.ignoreRehydratedNames = {};
	    this.tags = [];
	    this.capacity = 1;
	    this.clones = [];
	  }
	
	  /* rehydrate all SSR'd style tags */
	
	
	  StyleSheet.prototype.rehydrate = function rehydrate() {
	    if (!IS_BROWSER || this.forceServer) {
	      return this;
	    }
	
	    var els = [];
	    var names = [];
	    var extracted = [];
	    var isStreamed = false;
	
	    /* retrieve all of our SSR style elements from the DOM */
	    var nodes = document.querySelectorAll('style[' + SC_ATTR + ']');
	    var nodesSize = nodes.length;
	
	    /* abort rehydration if no previous style tags were found */
	    if (nodesSize === 0) {
	      return this;
	    }
	
	    for (var i = 0; i < nodesSize; i += 1) {
	      // $FlowFixMe: We can trust that all elements in this query are style elements
	      var el = nodes[i];
	
	      /* check if style tag is a streamed tag */
	      isStreamed = !!el.getAttribute(SC_STREAM_ATTR) || isStreamed;
	
	      /* retrieve all component names */
	      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(/\s+/);
	      var elNamesSize = elNames.length;
	      for (var j = 0; j < elNamesSize; j += 1) {
	        var name = elNames[j];
	        /* add rehydrated name to sheet to avoid readding styles */
	        this.rehydratedNames[name] = true;
	        names.push(name);
	      }
	
	      /* extract all components and their CSS */
	      extracted = extracted.concat(extractComps(el.textContent));
	      /* store original HTMLStyleElement */
	      els.push(el);
	    }
	
	    /* abort rehydration if nothing was extracted */
	    var extractedSize = extracted.length;
	    if (extractedSize === 0) {
	      return this;
	    }
	
	    /* create a tag to be used for rehydration */
	    var tag = this.makeTag(null);
	    var rehydrationTag = makeRehydrationTag(tag, els, extracted, names, isStreamed);
	
	    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
	    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
	    this.tags.push(rehydrationTag);
	
	    /* retrieve all component ids */
	    for (var _j = 0; _j < extractedSize; _j += 1) {
	      this.tagMap[extracted[_j].componentId] = rehydrationTag;
	    }
	
	    return this;
	  };
	
	  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
	   * The master StyleSheet is targeted by injectGlobal, keyframes, and components outside of any
	    * StyleSheetManager's context */
	
	
	  /* reset the internal "master" instance */
	  StyleSheet.reset = function reset() {
	    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    master = new StyleSheet(undefined, forceServer).rehydrate();
	  };
	
	  /* adds "children" to the StyleSheet that inherit all of the parents' rules
	   * while their own rules do not affect the parent */
	
	
	  StyleSheet.prototype.clone = function clone() {
	    var sheet = new StyleSheet(this.target, this.forceServer);
	    /* add to clone array */
	    this.clones.push(sheet);
	
	    /* clone all tags */
	    sheet.tags = this.tags.map(function (tag) {
	      var ids = tag.getIds();
	      var newTag = tag.clone();
	
	      /* reconstruct tagMap */
	      for (var i = 0; i < ids.length; i += 1) {
	        sheet.tagMap[ids[i]] = newTag;
	      }
	
	      return newTag;
	    });
	
	    /* clone other maps */
	    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
	    sheet.deferred = _extends({}, this.deferred);
	
	    return sheet;
	  };
	
	  /* force StyleSheet to create a new tag on the next injection */
	
	
	  StyleSheet.prototype.sealAllTags = function sealAllTags() {
	    this.capacity = 1;
	    this.sealed = true;
	  };
	
	  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
	    var lastEl = tag ? tag.styleTag : null;
	    var insertBefore = false;
	
	    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
	  };
	
	  /* get a tag for a given componentId, assign the componentId to one, or shard */
	  StyleSheet.prototype.getTagForId = function getTagForId(id) {
	    /* simply return a tag, when the componentId was already assigned one */
	    var prev = this.tagMap[id];
	    if (prev !== undefined && !this.sealed) {
	      return prev;
	    }
	
	    var tag = this.tags[this.tags.length - 1];
	
	    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
	    this.capacity -= 1;
	    if (this.capacity === 0) {
	      this.capacity = MAX_SIZE;
	      this.sealed = false;
	      tag = this.makeTag(tag);
	      this.tags.push(tag);
	    }
	
	    return this.tagMap[id] = tag;
	  };
	
	  /* mainly for injectGlobal to check for its id */
	
	
	  StyleSheet.prototype.hasId = function hasId(id) {
	    return this.tagMap[id] !== undefined;
	  };
	
	  /* caching layer checking id+name to already have a corresponding tag and injected rules */
	
	
	  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
	    /* exception for rehydrated names which are checked separately */
	    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
	      return true;
	    }
	
	    var tag = this.tagMap[id];
	    return tag !== undefined && tag.hasNameForId(id, name);
	  };
	
	  /* registers a componentId and registers it on its tag */
	
	
	  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
	    /* don't inject when the id is already registered */
	    if (this.tagMap[id] !== undefined) return;
	
	    var clones = this.clones;
	
	    for (var i = 0; i < clones.length; i += 1) {
	      clones[i].deferredInject(id, cssRules);
	    }
	
	    this.getTagForId(id).insertMarker(id);
	    this.deferred[id] = cssRules;
	  };
	
	  /* injects rules for a given id with a name that will need to be cached */
	
	
	  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
	    var clones = this.clones;
	
	    for (var i = 0; i < clones.length; i += 1) {
	      clones[i].inject(id, cssRules, name);
	    }
	
	    /* add deferred rules for component */
	    var injectRules = cssRules;
	    var deferredRules = this.deferred[id];
	    if (deferredRules !== undefined) {
	      injectRules = deferredRules.concat(injectRules);
	      delete this.deferred[id];
	    }
	
	    var tag = this.getTagForId(id);
	    tag.insertRules(id, injectRules, name);
	  };
	
	  /* removes all rules for a given id, which doesn't remove its marker but resets it */
	
	
	  StyleSheet.prototype.remove = function remove(id) {
	    var tag = this.tagMap[id];
	    if (tag === undefined) return;
	
	    var clones = this.clones;
	
	    for (var i = 0; i < clones.length; i += 1) {
	      clones[i].remove(id);
	    }
	
	    /* remove all rules from the tag */
	    tag.removeRules(id);
	    /* ignore possible rehydrated names */
	    this.ignoreRehydratedNames[id] = true;
	    /* delete possible deferred rules */
	    delete this.deferred[id];
	  };
	
	  StyleSheet.prototype.toHTML = function toHTML() {
	    return this.tags.map(function (tag) {
	      return tag.toHTML();
	    }).join('');
	  };
	
	  StyleSheet.prototype.toReactElements = function toReactElements() {
	    var id = this.id;
	
	
	    return this.tags.map(function (tag, i) {
	      var key = 'sc-' + id + '-' + i;
	      return React.cloneElement(tag.toElement(), { key: key });
	    });
	  };
	
	  createClass(StyleSheet, null, [{
	    key: 'master',
	    get: function get$$1() {
	      return master || (master = new StyleSheet().rehydrate());
	    }
	
	    /* NOTE: This is just for backwards-compatibility with jest-styled-components */
	
	  }, {
	    key: 'instance',
	    get: function get$$1() {
	      return StyleSheet.master;
	    }
	  }]);
	  return StyleSheet;
	}();
	
	var _StyleSheetManager$ch;
	
	// 
	/* this error is used for makeStyleTag */
	var targetPropErr =  false ? '\nThe StyleSheetManager expects a valid target or sheet prop!\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n'.trim() : '';
	
	var StyleSheetManager = function (_Component) {
	  inherits(StyleSheetManager, _Component);
	
	  function StyleSheetManager() {
	    classCallCheck(this, StyleSheetManager);
	    return possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  StyleSheetManager.prototype.getChildContext = function getChildContext() {
	    var _ref;
	
	    return _ref = {}, _ref[CONTEXT_KEY] = this.sheetInstance, _ref;
	  };
	
	  StyleSheetManager.prototype.componentWillMount = function componentWillMount() {
	    if (this.props.sheet) {
	      this.sheetInstance = this.props.sheet;
	    } else if (this.props.target) {
	      this.sheetInstance = new StyleSheet(this.props.target);
	    } else {
	      throw new Error(targetPropErr);
	    }
	  };
	
	  StyleSheetManager.prototype.render = function render() {
	    /* eslint-disable react/prop-types */
	    // Flow v0.43.1 will report an error accessing the `children` property,
	    // but v0.47.0 will not. It is necessary to use a type cast instead of
	    // a "fixme" comment to satisfy both Flow versions.
	    return React__default.Children.only(this.props.children);
	  };
	
	  return StyleSheetManager;
	}(React.Component);
	
	StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);
	
	 false ? StyleSheetManager.propTypes = {
	  sheet: PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]),
	  target: PropTypes.shape({
	    appendChild: PropTypes.func.isRequired
	  })
	} : void 0;
	
	// 
	/* eslint-disable no-underscore-dangle */
	/* this error is used for makeStyleTag */
	var sheetClosedErr =  false ? '\nCan\'t collect styles once you\'ve consumed a ServerStyleSheet\'s styles!\nServerStyleSheet is a one off instance for each server-side render cycle.\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n'.trim() : '';
	
	var streamBrowserErr =  false ? 'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.' : '';
	
	var ServerStyleSheet = function () {
	  function ServerStyleSheet() {
	    classCallCheck(this, ServerStyleSheet);
	
	    /* The master sheet might be reset, so keep a reference here */
	    this.masterSheet = StyleSheet.master;
	    this.instance = this.masterSheet.clone();
	    this.closed = false;
	  }
	
	  ServerStyleSheet.prototype.complete = function complete() {
	    if (!this.closed) {
	      /* Remove closed StyleSheets from the master sheet */
	      var index = this.masterSheet.clones.indexOf(this.instance);
	      this.masterSheet.clones.splice(index, 1);
	      this.closed = true;
	    }
	  };
	
	  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
	    if (this.closed) {
	      throw new Error(sheetClosedErr);
	    }
	
	    return React__default.createElement(
	      StyleSheetManager,
	      { sheet: this.instance },
	      children
	    );
	  };
	
	  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
	    this.complete();
	    return this.instance.toHTML();
	  };
	
	  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
	    this.complete();
	    return this.instance.toReactElements();
	  };
	
	  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
	    var _this = this;
	
	    {
	      throw new Error(streamBrowserErr);
	    }
	
	    /* the tag index keeps track of which tags have already been emitted */
	    var instance = this.instance;
	
	    var instanceTagIndex = 0;
	
	    var streamAttr = SC_STREAM_ATTR + '="true"';
	
	    var transformer = new stream.Transform({
	      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
	        var tags = instance.tags;
	
	        var html = '';
	
	        /* retrieve html for each new style tag */
	        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
	          var tag = tags[instanceTagIndex];
	          html += tag.toHTML(streamAttr);
	        }
	
	        /* force our StyleSheets to emit entirely new tags */
	        instance.sealAllTags();
	
	        /* prepend style html to chunk */
	        this.push(html + chunk);
	        callback();
	      }
	    });
	
	    readableStream.on('end', function () {
	      return _this.complete();
	    });
	    readableStream.on('error', function (err) {
	      _this.complete();
	
	      // forward the error to the transform stream
	      transformer.emit('error', err);
	    });
	
	    return readableStream.pipe(transformer);
	  };
	
	  return ServerStyleSheet;
	}();
	
	// 
	
	var LIMIT = 200;
	
	var createWarnTooManyClasses = (function (displayName) {
	  var generatedClasses = {};
	  var warningSeen = false;
	
	  return function (className) {
	    if (!warningSeen) {
	      generatedClasses[className] = true;
	      if (Object.keys(generatedClasses).length >= LIMIT) {
	        // Unable to find latestRule in test environment.
	        /* eslint-disable no-console, prefer-template */
	        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
	        warningSeen = true;
	        generatedClasses = {};
	      }
	    }
	  };
	});
	
	// 
	
	var determineTheme = (function (props, fallbackTheme, defaultProps) {
	  // Props should take precedence over ThemeProvider, which should take precedence over
	  // defaultProps, but React automatically puts defaultProps on props.
	
	  /* eslint-disable react/prop-types */
	  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
	  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
	  /* eslint-enable */
	
	  return theme;
	});
	
	// 
	var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
	var dashesAtEnds = /(^-|-$)/g;
	
	/**
	 * TODO: Explore using CSS.escape when it becomes more available
	 * in evergreen browsers.
	 */
	function escape(str) {
	  return str
	  // Replace all possible CSS selectors
	  .replace(escapeRegex, '-')
	
	  // Remove extraneous hyphens at the start and end
	  .replace(dashesAtEnds, '');
	}
	
	// 
	
	function getComponentName(target) {
	  return target.displayName || target.name || 'Component';
	}
	
	// 
	
	function isTag(target) /* : %checks */{
	  return typeof target === 'string';
	}
	
	// 
	function generateDisplayName(target) {
	  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
	}
	
	// 
	/* eslint-disable max-len */
	/**
	 * Trying to avoid the unknown-prop errors on styled components by filtering by
	 * React's attribute whitelist.
	 *
	 * To regenerate this regex:
	 *
	 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
	 * 2. Run `regexgen` with the list of space-separated words below as input
	 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
	 *    and no false positives from partials
	 * */
	/*
	children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onInvalid onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controlsList controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut
	*/
	/* eslint-enable max-len */
	
	var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:Animation|Touch|Load|Drag)Start|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|Lo(?:stPointer|ad)|TimeUpdate|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|GotPointer|MouseDown|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|KeyPress|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|P(?:rogress|laying)|DragEnd|Key(?:Down|Up)|(?:MouseU|Dro)p|(?:Wait|Seek)ing|Scroll|Focus|Paste|Abort|Drag|Play|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|onPointerLeav|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|onPointerMov|(?:attribute|glyph)Nam|playsInlin|(?:writing|input|edge)Mod|(?:formE|e)ncTyp|(?:amplitu|mo)d|(?:xlinkTy|itemSco|keyTy|slo)p|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|on(?:PointerDow|FocusI)|formActio|zoomAndPa|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:gradientT|patternT|t)ransform|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|onPointerOu|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|markerStar|a(?:utoCorrec|bou)|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|(?:markerM|onInval)i|preloa|metho|kin)d|strokeDasharray|(?:onPointerCanc|lab)el|(?:allowFullScre|hidd)en|systemLanguage|(?:(?:o(?:nPointer(?:Ent|Ov)|rd)|allowReord|placehold|frameBord|paintOrd|post)e|repeatDu|d(?:efe|u))r|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|(?:strokeLineca|onPointerU|itemPro|useMa|wra|loo)p|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|(?:vI|i)deographic|unicodeRange|mathematical|vAlphabetic|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|(?:xmlnsXl|valueL)ink|mediaGroup|spellCheck|(?:text|m(?:in|ax))Length|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|autoPlay|o(?:verflow|pen)|f(?:o(?:ntSize|rm)|il(?:ter|l))|r(?:e(?:quired|sult|f))?|divisor|p(?:attern|oints)|unicode|d(?:efault|ata|ir)?|i(?:temRef|n2|s)|t(?:arget[XY]|o)|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|prefix|typeof|itemID|s(?:t(?:roke|art)|hape|cope|rc)|t(?:arget|ype)|(?:stri|la)ng|a(?:ccept|s)|m(?:edia|a(?:sk|x)|in)|x(?:mlns)?|width|value|size|href|k(?:ey)?|end|low|by|i[dn]|y[12]|g[12]|x[12]|f[xy]|[yz])$/;
	
	/* From DOMProperty */
	var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(x|data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
	
	var validAttr = (function (name) {
	  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
	});
	
	// 
	
	function hasInInheritanceChain(child, parent) {
	  var target = child;
	
	  while (target) {
	    target = Object.getPrototypeOf(target);
	
	    if (target && target === parent) {
	      return true;
	    }
	  }
	
	  return false;
	}
	
	// 
	/**
	 * Creates a broadcast that can be listened to, i.e. simple event emitter
	 *
	 * @see https://github.com/ReactTraining/react-broadcast
	 */
	
	var createBroadcast = function createBroadcast(initialState) {
	  var listeners = {};
	  var id = 0;
	  var state = initialState;
	
	  function publish(nextState) {
	    state = nextState;
	
	    // eslint-disable-next-line guard-for-in, no-restricted-syntax
	    for (var key in listeners) {
	      var listener = listeners[key];
	      if (listener === undefined) {
	        // eslint-disable-next-line no-continue
	        continue;
	      }
	
	      listener(state);
	    }
	  }
	
	  function subscribe(listener) {
	    var currentId = id;
	    listeners[currentId] = listener;
	    id += 1;
	    listener(state);
	    return currentId;
	  }
	
	  function unsubscribe(unsubID) {
	    listeners[unsubID] = undefined;
	  }
	
	  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
	};
	
	var _ThemeProvider$childC;
	var _ThemeProvider$contex;
	
	// 
	// NOTE: DO NOT CHANGE, changing this is a semver major change!
	var CHANNEL = '__styled-components__';
	var CHANNEL_NEXT = CHANNEL + 'next__';
	
	var CONTEXT_CHANNEL_SHAPE = PropTypes.shape({
	  getTheme: PropTypes.func,
	  subscribe: PropTypes.func,
	  unsubscribe: PropTypes.func
	});
	
	var warnChannelDeprecated = void 0;
	if (false) {
	  warnChannelDeprecated = once(function () {
	    // eslint-disable-next-line no-console
	    console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
	  });
	}
	
	var isFunction = function isFunction(test) {
	  return typeof test === 'function';
	};
	
	/**
	 * Provide a theme to an entire react component tree via context and event listeners (have to do
	 * both context and event emitter as pure components block context updates)
	 */
	
	var ThemeProvider = function (_Component) {
	  inherits(ThemeProvider, _Component);
	
	  function ThemeProvider() {
	    classCallCheck(this, ThemeProvider);
	
	    var _this = possibleConstructorReturn(this, _Component.call(this));
	
	    _this.unsubscribeToOuterId = -1;
	
	    _this.getTheme = _this.getTheme.bind(_this);
	    return _this;
	  }
	
	  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
	    // with the outer theme
	    var outerContext = this.context[CHANNEL_NEXT];
	    if (outerContext !== undefined) {
	      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
	        _this2.outerTheme = theme;
	
	        if (_this2.broadcast !== undefined) {
	          _this2.publish(_this2.props.theme);
	        }
	      });
	    }
	
	    this.broadcast = createBroadcast(this.getTheme());
	  };
	
	  ThemeProvider.prototype.getChildContext = function getChildContext() {
	    var _this3 = this,
	        _babelHelpers$extends;
	
	    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
	      getTheme: this.getTheme,
	      subscribe: this.broadcast.subscribe,
	      unsubscribe: this.broadcast.unsubscribe
	    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
	      if (false) {
	        warnChannelDeprecated();
	      }
	
	      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
	      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
	      return function () {
	        return _this3.broadcast.unsubscribe(unsubscribeId);
	      };
	    }, _babelHelpers$extends));
	  };
	
	  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.theme !== nextProps.theme) {
	      this.publish(nextProps.theme);
	    }
	  };
	
	  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.unsubscribeToOuterId !== -1) {
	      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
	    }
	  };
	
	  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
	
	
	  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
	    var theme = passedTheme || this.props.theme;
	    if (isFunction(theme)) {
	      var mergedTheme = theme(this.outerTheme);
	      if (false) {
	        throw new Error(process.env.NODE_ENV !== 'production' ? '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!' : '');
	      }
	      return mergedTheme;
	    }
	    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
	      throw new Error( false ? '[ThemeProvider] Please make your theme prop an object' : '');
	    }
	    return _extends({}, this.outerTheme, theme);
	  };
	
	  ThemeProvider.prototype.publish = function publish(theme) {
	    this.broadcast.publish(this.getTheme(theme));
	  };
	
	  ThemeProvider.prototype.render = function render() {
	    if (!this.props.children) {
	      return null;
	    }
	    return React__default.Children.only(this.props.children);
	  };
	
	  return ThemeProvider;
	}(React.Component);
	
	ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = PropTypes.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
	ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);
	
	// 
	
	// HACK for generating all static styles without needing to allocate
	// an empty execution context every single time...
	var STATIC_EXECUTION_CONTEXT = {};
	
	var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
	  var identifiers = {};
	
	  /* We depend on components having unique IDs */
	  var generateId = function generateId(_displayName, parentComponentId) {
	    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);
	
	    /**
	     * This ensures uniqueness if two components happen to share
	     * the same displayName.
	     */
	    var nr = (identifiers[displayName] || 0) + 1;
	    identifiers[displayName] = nr;
	
	    var componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);
	
	    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
	  };
	
	  // $FlowFixMe
	
	  var BaseStyledComponent = function (_Component) {
	    inherits(BaseStyledComponent, _Component);
	
	    function BaseStyledComponent() {
	      var _temp, _this, _ret;
	
	      classCallCheck(this, BaseStyledComponent);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
	        theme: null,
	        generatedClassName: ''
	      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
	    }
	
	    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
	      if (this.unsubscribeId !== -1) {
	        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
	      }
	    };
	
	    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
	      var attrs = this.constructor.attrs;
	
	      var context = _extends({}, props, { theme: theme });
	      if (attrs === undefined) {
	        return context;
	      }
	
	      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
	        var attr = attrs[key];
	        // eslint-disable-next-line no-param-reassign
	        acc[key] = typeof attr === 'function' && !hasInInheritanceChain(attr, React.Component) ? attr(context) : attr;
	        return acc;
	      }, {});
	
	      return _extends({}, context, this.attrs);
	    };
	
	    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
	      var _constructor = this.constructor,
	          attrs = _constructor.attrs,
	          componentStyle = _constructor.componentStyle,
	          warnTooManyClasses = _constructor.warnTooManyClasses;
	
	      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.master;
	
	      // staticaly styled-components don't need to build an execution context object,
	      // and shouldn't be increasing the number of class names
	      if (componentStyle.isStatic && attrs === undefined) {
	        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
	      } else {
	        var executionContext = this.buildExecutionContext(theme, props);
	        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);
	
	        if (false) {
	          warnTooManyClasses(className);
	        }
	
	        return className;
	      }
	    };
	
	    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;
	
	      var componentStyle = this.constructor.componentStyle;
	
	      var styledContext = this.context[CHANNEL_NEXT];
	
	      // If this is a staticaly-styled component, we don't need to the theme
	      // to generate or build styles.
	      if (componentStyle.isStatic) {
	        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
	        this.setState({ generatedClassName: generatedClassName });
	        // If there is a theme in the context, subscribe to the event emitter. This
	        // is necessary due to pure components blocking context updates, this circumvents
	        // that by updating when an event is emitted
	      } else if (styledContext !== undefined) {
	        var subscribe = styledContext.subscribe;
	
	        this.unsubscribeId = subscribe(function (nextTheme) {
	          // This will be called once immediately
	          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
	          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);
	
	          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
	        });
	      } else {
	        // eslint-disable-next-line react/prop-types
	        var theme = this.props.theme || {};
	        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
	        this.setState({ theme: theme, generatedClassName: _generatedClassName });
	      }
	    };
	
	    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	
	      // If this is a statically-styled component, we don't need to listen to
	      // props changes to update styles
	      var componentStyle = this.constructor.componentStyle;
	
	      if (componentStyle.isStatic) {
	        return;
	      }
	
	      this.setState(function (prevState) {
	        var theme = determineTheme(nextProps, prevState.theme, _this3.constructor.defaultProps);
	        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);
	
	        return { theme: theme, generatedClassName: generatedClassName };
	      });
	    };
	
	    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.unsubscribeFromContext();
	    };
	
	    BaseStyledComponent.prototype.render = function render() {
	      var _this4 = this;
	
	      // eslint-disable-next-line react/prop-types
	      var innerRef = this.props.innerRef;
	      var generatedClassName = this.state.generatedClassName;
	      var _constructor2 = this.constructor,
	          styledComponentId = _constructor2.styledComponentId,
	          target = _constructor2.target;
	
	
	      var isTargetTag = isTag(target);
	
	      var className = [
	      // eslint-disable-next-line react/prop-types
	      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');
	
	      var baseProps = _extends({}, this.attrs, {
	        className: className
	      });
	
	      if (isStyledComponent(target)) {
	        baseProps.innerRef = innerRef;
	      } else {
	        baseProps.ref = innerRef;
	      }
	
	      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
	        // Don't pass through non HTML tags through to HTML elements
	        // always omit innerRef
	        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
	          // eslint-disable-next-line no-param-reassign
	          acc[propName] = _this4.props[propName];
	        }
	
	        return acc;
	      }, baseProps);
	
	      return React.createElement(target, propsForElement);
	    };
	
	    return BaseStyledComponent;
	  }(React.Component);
	
	  var createStyledComponent = function createStyledComponent(target, options, rules) {
	    var _StyledComponent$cont;
	
	    var _options$isClass = options.isClass,
	        isClass = _options$isClass === undefined ? !isTag(target) : _options$isClass,
	        _options$displayName = options.displayName,
	        displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
	        _options$componentId = options.componentId,
	        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
	        _options$ParentCompon = options.ParentComponent,
	        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
	        extendingRules = options.rules,
	        attrs = options.attrs;
	
	
	    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;
	
	    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);
	
	    var StyledComponent = function (_ParentComponent) {
	      inherits(StyledComponent, _ParentComponent);
	
	      function StyledComponent() {
	        classCallCheck(this, StyledComponent);
	        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
	      }
	
	      StyledComponent.withComponent = function withComponent(tag) {
	        var previousComponentId = options.componentId,
	            optionsToCopy = objectWithoutProperties(options, ['componentId']);
	
	
	        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));
	
	        var newOptions = _extends({}, optionsToCopy, {
	          componentId: newComponentId,
	          ParentComponent: StyledComponent
	        });
	
	        return createStyledComponent(tag, newOptions, rules);
	      };
	
	      createClass(StyledComponent, null, [{
	        key: 'extend',
	        get: function get$$1() {
	          var rulesFromOptions = options.rules,
	              parentComponentId = options.componentId,
	              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);
	
	
	          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);
	
	          var newOptions = _extends({}, optionsToCopy, {
	            rules: newRules,
	            parentComponentId: parentComponentId,
	            ParentComponent: StyledComponent
	          });
	
	          return constructWithOptions(createStyledComponent, target, newOptions);
	        }
	      }]);
	      return StyledComponent;
	    }(ParentComponent);
	
	    StyledComponent.attrs = attrs;
	    StyledComponent.componentStyle = componentStyle;
	    StyledComponent.displayName = displayName;
	    StyledComponent.styledComponentId = styledComponentId;
	    StyledComponent.target = target;
	    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = PropTypes.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);
	
	
	    if (false) {
	      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
	    }
	
	    if (isClass) {
	      hoist(StyledComponent, target, {
	        // all SC-specific things should not be hoisted
	        attrs: true,
	        componentStyle: true,
	        displayName: true,
	        extend: true,
	        styledComponentId: true,
	        target: true,
	        warnTooManyClasses: true,
	        withComponent: true
	      });
	    }
	
	    return StyledComponent;
	  };
	
	  return createStyledComponent;
	});
	
	// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
	function murmurhash(str) {
	  var l = str.length | 0,
	      h = l | 0,
	      i = 0,
	      k;
	
	  while (l >= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    k ^= k >>> 24;
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	
	    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
	
	    l -= 4;
	    ++i;
	  }
	
	  switch (l) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  }
	
	  h ^= h >>> 13;
	  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  h ^= h >>> 15;
	
	  return h >>> 0;
	}
	
	// 
	var areStylesCacheable = IS_BROWSER;
	
	var isStaticRules = function isStaticRules(rules, attrs) {
	  for (var i = 0; i < rules.length; i += 1) {
	    var rule = rules[i];
	
	    // recursive case
	    if (Array.isArray(rule) && !isStaticRules(rule)) {
	      return false;
	    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
	      // functions are allowed to be static if they're just being
	      // used to get the classname of a nested styled component
	      return false;
	    }
	  }
	
	  if (attrs !== undefined) {
	    // eslint-disable-next-line guard-for-in, no-restricted-syntax
	    for (var key in attrs) {
	      var value = attrs[key];
	      if (typeof value === 'function') {
	        return false;
	      }
	    }
	  }
	
	  return true;
	};
	
	var isHMREnabled = typeof module !== 'undefined' && module.hot && ("production") !== 'production';
	
	/*
	 ComponentStyle is all the CSS-specific stuff, not
	 the React-specific stuff.
	 */
	var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
	  /* combines hashStr (murmurhash) and nameGenerator for convenience */
	  var generateRuleHash = function generateRuleHash(str) {
	    return nameGenerator(murmurhash(str));
	  };
	
	  var ComponentStyle = function () {
	    function ComponentStyle(rules, attrs, componentId) {
	      classCallCheck(this, ComponentStyle);
	
	      this.rules = rules;
	      this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
	      this.componentId = componentId;
	
	      if (!StyleSheet.master.hasId(componentId)) {
	        var placeholder =  false ? ['.' + componentId + ' {}'] : [];
	
	        StyleSheet.master.deferredInject(componentId, placeholder);
	      }
	    }
	
	    /*
	     * Flattens a rule set into valid CSS
	     * Hashes it, wraps the whole chunk in a .hash1234 {}
	     * Returns the hash to be injected on render()
	     * */
	
	
	    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
	      var isStatic = this.isStatic,
	          componentId = this.componentId,
	          lastClassName = this.lastClassName;
	
	      if (areStylesCacheable && isStatic && lastClassName !== undefined && styleSheet.hasNameForId(componentId, lastClassName)) {
	        return lastClassName;
	      }
	
	      var flatCSS = flatten(this.rules, executionContext);
	      var name = generateRuleHash(this.componentId + flatCSS.join(''));
	
	      if (!styleSheet.hasNameForId(componentId, name)) {
	        var css = stringifyRules(flatCSS, '.' + name);
	        styleSheet.inject(this.componentId, css, name);
	      }
	
	      this.lastClassName = name;
	      return name;
	    };
	
	    ComponentStyle.generateName = function generateName(str) {
	      return generateRuleHash(str);
	    };
	
	    return ComponentStyle;
	  }();
	
	  return ComponentStyle;
	});
	
	// 
	// Thanks to ReactDOMFactories for this handy list!
	
	var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
	
	// SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	
	// 
	var _styled = (function (styledComponent, constructWithOptions) {
	  var styled = function styled(tag) {
	    return constructWithOptions(styledComponent, tag);
	  };
	
	  // Shorthands for all valid HTML Elements
	  domElements.forEach(function (domElement) {
	    styled[domElement] = styled(domElement);
	  });
	
	  return styled;
	});
	
	// 
	var replaceWhitespace = function replaceWhitespace(str) {
	  return str.replace(/\s|\\n/g, '');
	};
	
	var _keyframes = (function (nameGenerator, stringifyRules, css) {
	  return function () {
	    var styleSheet = StyleSheet.master;
	    var rules = css.apply(undefined, arguments);
	    var name = nameGenerator(murmurhash(replaceWhitespace(JSON.stringify(rules))));
	    var id = 'sc-keyframes-' + name;
	
	    if (!styleSheet.hasNameForId(id, name)) {
	      styleSheet.inject(id, stringifyRules(rules, name, '@keyframes'), name);
	    }
	
	    return name;
	  };
	});
	
	// 
	var _injectGlobal = (function (stringifyRules, css) {
	  var injectGlobal = function injectGlobal() {
	    var styleSheet = StyleSheet.master;
	    var rules = css.apply(undefined, arguments);
	    var hash = murmurhash(JSON.stringify(rules));
	    var id = 'sc-global-' + hash;
	
	    if (!styleSheet.hasId(id)) {
	      styleSheet.inject(id, stringifyRules(rules));
	    }
	  };
	
	  return injectGlobal;
	});
	
	// 
	var _constructWithOptions = (function (css) {
	  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    if (!reactIs.isValidElementType(tag)) {
	      throw new Error( false ? 'Cannot create styled-component for component: ' + String(tag) : '');
	    }
	
	    /* This is callable directly as a template function */
	    // $FlowFixMe: Not typed to avoid destructuring arguments
	    var templateFunction = function templateFunction() {
	      return componentConstructor(tag, options, css.apply(undefined, arguments));
	    };
	
	    /* If config methods are called, wrap up a new template function and merge options */
	    templateFunction.withConfig = function (config) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
	    };
	    templateFunction.attrs = function (attrs) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
	        attrs: _extends({}, options.attrs || {}, attrs)
	      }));
	    };
	
	    return templateFunction;
	  };
	
	  return constructWithOptions;
	});
	
	// 
	var wrapWithTheme = function wrapWithTheme(Component$$1) {
	  var _WithTheme$contextTyp;
	
	  var componentName = Component$$1.displayName || Component$$1.name || 'Component';
	  var isStatelessFunctionalComponent = typeof Component$$1 === 'function' &&
	  // $FlowFixMe TODO: flow for prototype
	  !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);
	
	  // NOTE: We can't pass a ref to a stateless functional component
	  var shouldSetInnerRef = isStyledComponent(Component$$1) || isStatelessFunctionalComponent;
	
	  var WithTheme = function (_React$Component) {
	    inherits(WithTheme, _React$Component);
	
	    function WithTheme() {
	      var _temp, _this, _ret;
	
	      classCallCheck(this, WithTheme);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
	    }
	
	    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping
	
	
	    WithTheme.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;
	
	      var defaultProps = this.constructor.defaultProps;
	
	      var styledContext = this.context[CHANNEL_NEXT];
	      var themeProp = determineTheme(this.props, undefined, defaultProps);
	      if (styledContext === undefined && themeProp === undefined && ("production") !== 'production') {
	        // eslint-disable-next-line no-console
	        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
	      } else if (styledContext === undefined && themeProp !== undefined) {
	        this.setState({ theme: themeProp });
	      } else {
	        var subscribe = styledContext.subscribe;
	
	        this.unsubscribeId = subscribe(function (nextTheme) {
	          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
	          _this2.setState({ theme: theme });
	        });
	      }
	    };
	
	    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var defaultProps = this.constructor.defaultProps;
	
	      this.setState(function (oldState) {
	        var theme = determineTheme(nextProps, oldState.theme, defaultProps);
	
	        return { theme: theme };
	      });
	    };
	
	    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (this.unsubscribeId !== -1) {
	        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
	      }
	    };
	
	    WithTheme.prototype.render = function render() {
	      var props = _extends({
	        theme: this.state.theme
	      }, this.props);
	
	      if (!shouldSetInnerRef) {
	        props.ref = props.innerRef;
	        delete props.innerRef;
	      }
	
	      return React__default.createElement(Component$$1, props);
	    };
	
	    return WithTheme;
	  }(React__default.Component);
	
	  WithTheme.displayName = 'WithTheme(' + componentName + ')';
	  WithTheme.styledComponentId = 'withTheme';
	  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = PropTypes.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);
	
	
	  return hoist(WithTheme, Component$$1);
	};
	
	// 
	
	/* eslint-disable */
	var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
	  StyleSheet: StyleSheet
	};
	
	// 
	
	/* Import singletons */
	/* Import singleton constructors */
	/* Import components */
	/* Import Higher Order Components */
	/* Warning if you've imported this file on React Native */
	if (false) {
	  // eslint-disable-next-line no-console
	  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
	}
	
	/* Warning if there are several instances of styled-components */
	if (false) {
	  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;
	
	  if (window['__styled-components-init__'] === 1) {
	    // eslint-disable-next-line no-console
	    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
	  }
	
	  window['__styled-components-init__'] += 1;
	}
	
	/* Instantiate singletons */
	var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
	var constructWithOptions = _constructWithOptions(css);
	var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);
	
	/* Instantiate exported singletons */
	var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
	var injectGlobal = _injectGlobal(stringifyRules, css);
	var styled = _styled(StyledComponent, constructWithOptions);
	
	exports['default'] = styled;
	exports.css = css;
	exports.keyframes = keyframes;
	exports.injectGlobal = injectGlobal;
	exports.isStyledComponent = isStyledComponent;
	exports.consolidateStreamedStyles = consolidateStreamedStyles;
	exports.ThemeProvider = ThemeProvider;
	exports.withTheme = wrapWithTheme;
	exports.ServerStyleSheet = ServerStyleSheet;
	exports.StyleSheetManager = StyleSheetManager;
	exports.__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS;
	//# sourceMappingURL=styled-components.browser.cjs.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81), __webpack_require__(86)(module)))

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function (factory) {
		 true ? (module['exports'] = factory()) :
			typeof define === 'function' && define['amd'] ? define(factory()) :
				(window['stylisRuleSheet'] = factory())
	}(function () {
	
		'use strict'
	
		return function (insertRule) {
			var delimiter = '/*|*/'
			var needle = delimiter+'}'
	
			function toSheet (block) {
				if (block)
					try {
						insertRule(block + '}')
					} catch (e) {}
			}
	
			return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
				switch (context) {
					// property
					case 1:
						// @import
						if (depth === 0 && content.charCodeAt(0) === 64)
							return insertRule(content+';'), ''
						break
					// selector
					case 2:
						if (ns === 0)
							return content + delimiter
						break
					// at-rule
					case 3:
						switch (ns) {
							// @font-face, @page
							case 102:
							case 112:
								return insertRule(selectors[0]+content), ''
							default:
								return content + (at === 0 ? delimiter : '')
						}
					case -2:
						content.split(needle).forEach(toSheet)
				}
			}
		}
	}))
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(86)(module)))

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*
	 *          __        ___
	 *    _____/ /___  __/ (_)____
	 *   / ___/ __/ / / / / / ___/
	 *  (__  ) /_/ /_/ / / (__  )
	 * /____/\__/\__, /_/_/____/
	 *          /____/
	 *
	 * light - weight css preprocessor @licence MIT
	 */
	(function (factory) {/* eslint-disable */
		 true ? (module['exports'] = factory(null)) :
			typeof define === 'function' && define['amd'] ? define(factory(null)) :
				(window['stylis'] = factory(null))
	}(/** @param {*=} options */function factory (options) {/* eslint-disable */
	
		'use strict'
	
		/**
		 * Notes
		 *
		 * The ['<method name>'] pattern is used to support closure compiler
		 * the jsdoc signatures are also used to the same effect
		 *
		 * ----
		 *
		 * int + int + int === n4 [faster]
		 *
		 * vs
		 *
		 * int === n1 && int === n2 && int === n3
		 *
		 * ----
		 *
		 * switch (int) { case ints...} [faster]
		 *
		 * vs
		 *
		 * if (int == 1 && int === 2 ...)
		 *
		 * ----
		 *
		 * The (first*n1 + second*n2 + third*n3) format used in the property parser
		 * is a simple way to hash the sequence of characters
		 * taking into account the index they occur in
		 * since any number of 3 character sequences could produce duplicates.
		 *
		 * On the other hand sequences that are directly tied to the index of the character
		 * resolve a far more accurate measure, it's also faster
		 * to evaluate one condition in a switch statement
		 * than three in an if statement regardless of the added math.
		 *
		 * This allows the vendor prefixer to be both small and fast.
		 */
	
		var nullptn = /^\0+/g /* matches leading null characters */
		var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
		var colonptn = /: */g /* splits animation rules */
		var cursorptn = /zoo|gra/ /* assert cursor varient */
		var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
		var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
		var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
		var elementptn = / *[\0] */g /* selector elements */
		var selectorptn = /,\r+?/g /* splits selectors */
		var andptn = /([\t\r\n ])*\f?&/g /* match & */
		var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
		var invalidptn = /\W+/g /* removes invalid characters from keyframes */
		var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
		var plcholdrptn = /::(place)/g /* match ::placeholder varient */
		var readonlyptn = /:(read-only)/g /* match :read-only varient */
		var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
		var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
		var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
		var whiteptn = /\s{2,}/g /* matches repeating whitespace */
		var pseudoptn = /([^\(])(:+) */g /* pseudo element */
		var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
		var gradientptn = /([\w-]+t\()/g /* match *gradient property */
		var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
		var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
		var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
		var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
		var trimptn = /[ \t]+$/ /* match tail whitspace */
		var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available */
		var imgsrcptn = /([^-])(image-set\()/
	
		/* vendors */
		var webkit = '-webkit-'
		var moz = '-moz-'
		var ms = '-ms-'
	
		/* character codes */
		var SEMICOLON = 59 /* ; */
		var CLOSEBRACES = 125 /* } */
		var OPENBRACES = 123 /* { */
		var OPENPARENTHESES = 40 /* ( */
		var CLOSEPARENTHESES = 41 /* ) */
		var OPENBRACKET = 91 /* [ */
		var CLOSEBRACKET = 93 /* ] */
		var NEWLINE = 10 /* \n */
		var CARRIAGE = 13 /* \r */
		var TAB = 9 /* \t */
		var AT = 64 /* @ */
		var SPACE = 32 /*   */
		var AND = 38 /* & */
		var DASH = 45 /* - */
		var UNDERSCORE = 95 /* _ */
		var STAR = 42 /* * */
		var COMMA = 44 /* , */
		var COLON = 58 /* : */
		var SINGLEQUOTE = 39 /* ' */
		var DOUBLEQUOTE = 34 /* " */
		var FOWARDSLASH = 47 /* / */
		var GREATERTHAN = 62 /* > */
		var PLUS = 43 /* + */
		var TILDE = 126 /* ~ */
		var NULL = 0 /* \0 */
		var FORMFEED = 12 /* \f */
		var VERTICALTAB = 11 /* \v */
	
		/* special identifiers */
		var KEYFRAME = 107 /* k */
		var MEDIA = 109 /* m */
		var SUPPORTS = 115 /* s */
		var PLACEHOLDER = 112 /* p */
		var READONLY = 111 /* o */
		var IMPORT = 105 /* <at>i */
		var CHARSET = 99 /* <at>c */
		var DOCUMENT = 100 /* <at>d */
		var PAGE = 112 /* <at>p */
	
		var column = 1 /* current column */
		var line = 1 /* current line numebr */
		var pattern = 0 /* :pattern */
	
		var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
		var prefix = 1 /* vendor prefix */
		var escape = 1 /* escape :global() pattern */
		var compress = 0 /* compress output */
		var semicolon = 0 /* no/semicolon option */
		var preserve = 0 /* preserve empty selectors */
	
		/* empty reference */
		var array = []
	
		/* plugins */
		var plugins = []
		var plugged = 0
		var should = null
	
		/* plugin context */
		var POSTS = -2
		var PREPS = -1
		var UNKWN = 0
		var PROPS = 1
		var BLCKS = 2
		var ATRUL = 3
	
		/* plugin newline context */
		var unkwn = 0
	
		/* keyframe animation */
		var keyed = 1
		var key = ''
	
		/* selector namespace */
		var nscopealt = ''
		var nscope = ''
	
		/**
		 * Compile
		 *
		 * @param {Array<string>} parent
		 * @param {Array<string>} current
		 * @param {string} body
		 * @param {number} id
		 * @param {number} depth
		 * @return {string}
		 */
		function compile (parent, current, body, id, depth) {
			var bracket = 0 /* brackets [] */
			var comment = 0 /* comments /* // or /* */
			var parentheses = 0 /* functions () */
			var quote = 0 /* quotes '', "" */
	
			var first = 0 /* first character code */
			var second = 0 /* second character code */
			var code = 0 /* current character code */
			var tail = 0 /* previous character code */
			var trail = 0 /* character before previous code */
			var peak = 0 /* previous non-whitespace code */
	
			var counter = 0 /* count sequence termination */
			var context = 0 /* track current context */
			var atrule = 0 /* track @at-rule context */
			var pseudo = 0 /* track pseudo token index */
			var caret = 0 /* current character index */
			var format = 0 /* control character formating context */
			var insert = 0 /* auto semicolon insertion */
			var invert = 0 /* inverted selector pattern */
			var length = 0 /* generic length address */
			var eof = body.length /* end of file(length) */
			var eol = eof - 1 /* end of file(characters) */
	
			var char = '' /* current character */
			var chars = '' /* current buffer of characters */
			var child = '' /* next buffer of characters */
			var out = '' /* compiled body */
			var children = '' /* compiled children */
			var flat = '' /* compiled leafs */
			var selector /* generic selector address */
			var result /* generic address */
	
			// ...build body
			while (caret < eof) {
				code = body.charCodeAt(caret)
	
				// eof varient
				if (caret === eol) {
					// last character + noop context, add synthetic padding for noop context to terminate
					if (comment + quote + parentheses + bracket !== 0) {
						if (comment !== 0) {
							code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
						}
	
						quote = parentheses = bracket = 0
						eof++
						eol++
					}
				}
	
				if (comment + quote + parentheses + bracket === 0) {
					// eof varient
					if (caret === eol) {
						if (format > 0) {
							chars = chars.replace(formatptn, '')
						}
	
						if (chars.trim().length > 0) {
							switch (code) {
								case SPACE:
								case TAB:
								case SEMICOLON:
								case CARRIAGE:
								case NEWLINE: {
									break
								}
								default: {
									chars += body.charAt(caret)
								}
							}
	
							code = SEMICOLON
						}
					}
	
					// auto semicolon insertion
					if (insert === 1) {
						switch (code) {
							// false flags
							case OPENBRACES:
							case CLOSEBRACES:
							case SEMICOLON:
							case DOUBLEQUOTE:
							case SINGLEQUOTE:
							case OPENPARENTHESES:
							case CLOSEPARENTHESES:
							case COMMA: {
								insert = 0
							}
							// ignore
							case TAB:
							case CARRIAGE:
							case NEWLINE:
							case SPACE: {
								break
							}
							// valid
							default: {
								insert = 0
								length = caret
								first = code
								caret--
								code = SEMICOLON
	
								while (length < eof) {
									switch (body.charCodeAt(length++)) {
										case NEWLINE:
										case CARRIAGE:
										case SEMICOLON: {
											++caret
											code = first
											length = eof
											break
										}
										case COLON: {
											if (format > 0) {
												++caret
												code = first
											}
										}
										case OPENBRACES: {
											length = eof
										}
									}
								}
							}
						}
					}
	
					// token varient
					switch (code) {
						case OPENBRACES: {
							chars = chars.trim()
							first = chars.charCodeAt(0)
							counter = 1
							length = ++caret
	
							while (caret < eof) {
								code = body.charCodeAt(caret)
	
								switch (code) {
									case OPENBRACES: {
										counter++
										break
									}
									case CLOSEBRACES: {
										counter--
										break
									}
								}
	
								if (counter === 0) {
									break
								}
	
								caret++
							}
	
							child = body.substring(length, caret)
	
							if (first === NULL) {
								first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
							}
	
							switch (first) {
								// @at-rule
								case AT: {
									if (format > 0) {
										chars = chars.replace(formatptn, '')
									}
	
									second = chars.charCodeAt(1)
	
									switch (second) {
										case DOCUMENT:
										case MEDIA:
										case SUPPORTS:
										case DASH: {
											selector = current
											break
										}
										default: {
											selector = array
										}
									}
	
									child = compile(current, selector, child, second, depth+1)
									length = child.length
	
									// preserve empty @at-rule
									if (preserve > 0 && length === 0) {
										length = chars.length
									}
	
									// execute plugins, @at-rule context
									if (plugged > 0) {
										selector = select(array, chars, invert)
										result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
										chars = selector.join('')
	
										if (result !== void 0) {
											if ((length = (child = result.trim()).length) === 0) {
												second = 0
												child = ''
											}
										}
									}
	
									if (length > 0) {
										switch (second) {
											case SUPPORTS: {
												chars = chars.replace(supportsptn, supports)
											}
											case DOCUMENT:
											case MEDIA:
											case DASH: {
												child = chars + '{' + child + '}'
												break
											}
											case KEYFRAME: {
												chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
												child = chars + '{' + child + '}'
	
												if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
													child = '@' + webkit + child + '@' + child
												} else {
													child = '@' + child
												}
												break
											}
											default: {
												child = chars + child
	
												if (id === PAGE) {
													child = (out += child, '')
												}
											}
										}
									} else {
										child = ''
									}
	
									break
								}
								// selector
								default: {
									child = compile(current, select(current, chars, invert), child, id, depth+1)
								}
							}
	
							children += child
	
							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							atrule = 0
							chars = ''
							child = ''
							code = body.charCodeAt(++caret)
							break
						}
						case CLOSEBRACES:
						case SEMICOLON: {
							chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()
	
							if ((length = chars.length) > 1) {
								// monkey-patch missing colon
								if (pseudo === 0) {
									first = chars.charCodeAt(0)
	
									// first character is a letter or dash, buffer has a space character
									if ((first === DASH || first > 96 && first < 123)) {
										length = (chars = chars.replace(' ', ':')).length
									}
								}
	
								// execute plugins, property context
								if (plugged > 0) {
									if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
										if ((length = (chars = result.trim()).length) === 0) {
											chars = '\0\0'
										}
									}
								}
	
								first = chars.charCodeAt(0)
								second = chars.charCodeAt(1)
	
								switch (first) {
									case NULL: {
										break
									}
									case AT: {
										if (second === IMPORT || second === CHARSET) {
											flat += chars + body.charAt(caret)
											break
										}
									}
									default: {
										if (chars.charCodeAt(length-1) === COLON) {
											break
										}
	
										out += property(chars, first, second, chars.charCodeAt(2))
									}
								}
							}
	
							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							chars = ''
							code = body.charCodeAt(++caret)
							break
						}
					}
				}
	
				// parse characters
				switch (code) {
					case CARRIAGE:
					case NEWLINE: {
						// auto insert semicolon
						if (comment + quote + parentheses + bracket + semicolon === 0) {
							// valid non-whitespace characters that
							// may precede a newline
							switch (peak) {
								case CLOSEPARENTHESES:
								case SINGLEQUOTE:
								case DOUBLEQUOTE:
								case AT:
								case TILDE:
								case GREATERTHAN:
								case STAR:
								case PLUS:
								case FOWARDSLASH:
								case DASH:
								case COLON:
								case COMMA:
								case SEMICOLON:
								case OPENBRACES:
								case CLOSEBRACES: {
									break
								}
								default: {
									// current buffer has a colon
									if (pseudo > 0) {
										insert = 1
									}
								}
							}
						}
	
						// terminate line comment
						if (comment === FOWARDSLASH) {
							comment = 0
						} else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
							format = 1
							chars += '\0'
						}
	
						// execute plugins, newline context
						if (plugged * unkwn > 0) {
							proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
						}
	
						// next line, reset column position
						column = 1
						line++
						break
					}
					case SEMICOLON:
					case CLOSEBRACES: {
						if (comment + quote + parentheses + bracket === 0) {
							column++
							break
						}
					}
					default: {
						// increment column position
						column++
	
						// current character
						char = body.charAt(caret)
	
						// remove comments, escape functions, strings, attributes and prepare selectors
						switch (code) {
							case TAB:
							case SPACE: {
								if (quote + bracket + comment === 0) {
									switch (tail) {
										case COMMA:
										case COLON:
										case TAB:
										case SPACE: {
											char = ''
											break
										}
										default: {
											if (code !== SPACE) {
												char = ' '
											}
										}
									}
								}
								break
							}
							// escape breaking control characters
							case NULL: {
								char = '\\0'
								break
							}
							case FORMFEED: {
								char = '\\f'
								break
							}
							case VERTICALTAB: {
								char = '\\v'
								break
							}
							// &
							case AND: {
								// inverted selector pattern i.e html &
								if (quote + comment + bracket === 0 && cascade > 0) {
									invert = 1
									format = 1
									char = '\f' + char
								}
								break
							}
							// ::p<l>aceholder, l
							// :read-on<l>y, l
							case 108: {
								if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
									switch (caret - pseudo) {
										// ::placeholder
										case 2: {
											if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
												pattern = tail
											}
										}
										// :read-only
										case 8: {
											if (trail === READONLY) {
												pattern = trail
											}
										}
									}
								}
								break
							}
							// :<pattern>
							case COLON: {
								if (quote + comment + bracket === 0) {
									pseudo = caret
								}
								break
							}
							// selectors
							case COMMA: {
								if (comment + parentheses + quote + bracket === 0) {
									format = 1
									char += '\r'
								}
								break
							}
							// quotes
							case DOUBLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
								}
								break
							}
							case SINGLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
								}
								break
							}
							// attributes
							case OPENBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket++
								}
								break
							}
							case CLOSEBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket--
								}
								break
							}
							// functions
							case CLOSEPARENTHESES: {
								if (quote + comment + bracket === 0) {
									parentheses--
								}
								break
							}
							case OPENPARENTHESES: {
								if (quote + comment + bracket === 0) {
									if (context === 0) {
										switch (tail*2 + trail*3) {
											// :matches
											case 533: {
												break
											}
											// :global, :not, :nth-child etc...
											default: {
												counter = 0
												context = 1
											}
										}
									}
	
									parentheses++
								}
								break
							}
							case AT: {
								if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
									atrule = 1
								}
								break
							}
							// block/line comments
							case STAR:
							case FOWARDSLASH: {
								if (quote + bracket + parentheses > 0) {
									break
								}
	
								switch (comment) {
									// initialize line/block comment context
									case 0: {
										switch (code*2 + body.charCodeAt(caret+1)*3) {
											// //
											case 235: {
												comment = FOWARDSLASH
												break
											}
											// /*
											case 220: {
												length = caret
												comment = STAR
												break
											}
										}
										break
									}
									// end block comment context
									case STAR: {
										if (code === FOWARDSLASH && tail === STAR) {
											// /*<!> ... */, !
											if (body.charCodeAt(length+2) === 33) {
												out += body.substring(length, caret+1)
											}
											char = ''
											comment = 0
										}
									}
								}
							}
						}
	
						// ignore comment blocks
						if (comment === 0) {
							// aggressive isolation mode, divide each individual selector
							// including selectors in :not function but excluding selectors in :global function
							if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
								switch (code) {
									case COMMA:
									case TILDE:
									case GREATERTHAN:
									case PLUS:
									case CLOSEPARENTHESES:
									case OPENPARENTHESES: {
										if (context === 0) {
											// outside of an isolated context i.e nth-child(<...>)
											switch (tail) {
												case TAB:
												case SPACE:
												case NEWLINE:
												case CARRIAGE: {
													char = char + '\0'
													break
												}
												default: {
													char = '\0' + char + (code === COMMA ? '' : '\0')
												}
											}
											format = 1
										} else {
											// within an isolated context, sleep untill it's terminated
											switch (code) {
												case OPENPARENTHESES: {
													// :globa<l>(
													if (pseudo + 7 === caret && tail === 108) {
														pseudo = 0
													}
													context = ++counter
													break
												}
												case CLOSEPARENTHESES: {
													if ((context = --counter) === 0) {
														format = 1
														char += '\0'
													}
													break
												}
											}
										}
										break
									}
									case TAB:
									case SPACE: {
										switch (tail) {
											case NULL:
											case OPENBRACES:
											case CLOSEBRACES:
											case SEMICOLON:
											case COMMA:
											case FORMFEED:
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												break
											}
											default: {
												// ignore in isolated contexts
												if (context === 0) {
													format = 1
													char += '\0'
												}
											}
										}
									}
								}
							}
	
							// concat buffer of characters
							chars += char
	
							// previous non-whitespace character code
							if (code !== SPACE && code !== TAB) {
								peak = code
							}
						}
					}
				}
	
				// tail character codes
				trail = tail
				tail = code
	
				// visit every character
				caret++
			}
	
			length = out.length
	
			// preserve empty selector
	 		if (preserve > 0) {
	 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
	 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
						length = current.join(',').length + 2
	 				}
	 			}
			}
	
			if (length > 0) {
				// cascade isolation mode?
				selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current
	
				// execute plugins, block context
				if (plugged > 0) {
					result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)
	
					if (result !== void 0 && (out = result).length === 0) {
						return flat + out + children
					}
				}
	
				out = selector.join(',') + '{' + out + '}'
	
				if (prefix*pattern !== 0) {
					if (prefix === 2 && !vendor(out, 2))
						pattern = 0
	
					switch (pattern) {
						// ::read-only
						case READONLY: {
							out = out.replace(readonlyptn, ':'+moz+'$1')+out
							break
						}
						// ::placeholder
						case PLACEHOLDER: {
							out = (
								out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
								out.replace(plcholdrptn, '::' + moz + '$1') +
								out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
							)
							break
						}
					}
	
					pattern = 0
				}
			}
	
			return flat + out + children
		}
	
		/**
		 * Select
		 *
		 * @param {Array<string>} parent
		 * @param {string} current
		 * @param {number} invert
		 * @return {Array<string>}
		 */
		function select (parent, current, invert) {
			var selectors = current.trim().split(selectorptn)
			var out = selectors
	
			var length = selectors.length
			var l = parent.length
	
			switch (l) {
				// 0-1 parent selectors
				case 0:
				case 1: {
					for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
						out[i] = scope(selector, out[i], invert, l).trim()
					}
					break
				}
				// >2 parent selectors, nested
				default: {
					for (var i = 0, j = 0, out = []; i < length; ++i) {
						for (var k = 0; k < l; ++k) {
							out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
						}
					}
				}
			}
	
			return out
		}
	
		/**
		 * Scope
		 *
		 * @param {string} parent
		 * @param {string} current
		 * @param {number} invert
		 * @param {number} level
		 * @return {string}
		 */
		function scope (parent, current, invert, level) {
			var selector = current
			var code = selector.charCodeAt(0)
	
			// trim leading whitespace
			if (code < 33) {
				code = (selector = selector.trim()).charCodeAt(0)
			}
	
			switch (code) {
				// &
				case AND: {
					switch (cascade + level) {
						case 0:
						case 1: {
							if (parent.trim().length === 0) {
								break
							}
						}
						default: {
							return selector.replace(andptn, '$1'+parent.trim())
						}
					}
					break
				}
				// :
				case COLON: {
					switch (selector.charCodeAt(1)) {
						// g in :global
						case 103: {
							if (escape > 0 && cascade > 0) {
								return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
							}
							break
						}
						default: {
							// :hover
							return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
						}
					}
				}
				default: {
					// html &
					if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
						return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
					}
				}
			}
	
			return parent + selector
		}
	
		/**
		 * Property
		 *
		 * @param {string} input
		 * @param {number} first
		 * @param {number} second
		 * @param {number} third
		 * @return {string}
		 */
		function property (input, first, second, third) {
			var index = 0
			var out = input + ';'
			var hash = (first*2) + (second*3) + (third*4)
			var cache
	
			// animation: a, n, i characters
			if (hash === 944) {
				return animation(out)
			} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
				return out
			}
	
			// vendor prefix
			switch (hash) {
				// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
				case 1015: {
					// text-shadow/text-align/text-transform, a
					return out.charCodeAt(10) === 97 ? webkit + out + out : out
				}
				// filter/fill f, i, l
				case 951: {
					// filter, t
					return out.charCodeAt(3) === 116 ? webkit + out + out : out
				}
				// color/column, c, o, l
				case 963: {
					// column, n
					return out.charCodeAt(5) === 110 ? webkit + out + out : out
				}
				// box-decoration-break, b, o, x
				case 1009: {
					if (out.charCodeAt(4) !== 100) {
						break
					}
				}
				// mask, m, a, s
				// clip-path, c, l, i
				case 969:
				case 942: {
					return webkit + out + out
				}
				// appearance: a, p, p
				case 978: {
					return webkit + out + moz + out + out
				}
				// hyphens: h, y, p
				// user-select: u, s, e
				case 1019:
				case 983: {
					return webkit + out + moz + out + ms + out + out
				}
				// background/backface-visibility, b, a, c
				case 883: {
					// backface-visibility, -
					if (out.charCodeAt(8) === DASH) {
						return webkit + out + out
					}
	
					// image-set(...)
					if (out.indexOf('image-set(', 11) > 0) {
						return out.replace(imgsrcptn, '$1'+webkit+'$2') + out
					}
	
					return out
				}
				// flex: f, l, e
				case 932: {
					if (out.charCodeAt(4) === DASH) {
						switch (out.charCodeAt(5)) {
							// flex-grow, g
							case 103: {
								return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
							}
							// flex-shrink, s
							case 115: {
								return webkit + out + ms + out.replace('shrink', 'negative') + out
							}
							// flex-basis, b
							case 98: {
								return webkit + out + ms + out.replace('basis', 'preferred-size') + out
							}
						}
					}
	
					return webkit + out + ms + out + out
				}
				// order: o, r, d
				case 964: {
					return webkit + out + ms + 'flex' + '-' + out + out
				}
				// justify-items/justify-content, j, u, s
				case 1023: {
					// justify-content, c
					if (out.charCodeAt(8) !== 99) {
						break
					}
	
					cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
					return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
				}
				// cursor, c, u, r
				case 1005: {
					return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
				}
				// writing-mode, w, r, i
				case 1000: {
					cache = out.substring(13).trim()
					index = cache.indexOf('-') + 1
	
					switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
						// vertical-lr
						case 226: {
							cache = out.replace(writingptn, 'tb')
							break
						}
						// vertical-rl
						case 232: {
							cache = out.replace(writingptn, 'tb-rl')
							break
						}
						// horizontal-tb
						case 220: {
							cache = out.replace(writingptn, 'lr')
							break
						}
						default: {
							return out
						}
					}
	
					return webkit + out + ms + cache + out
				}
				// position: sticky
				case 1017: {
					if (out.indexOf('sticky', 9) === -1) {
						return out
					}
				}
				// display(flex/inline-flex/inline-box): d, i, s
				case 975: {
					index = (out = input).length - 10
					cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()
	
					switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
						// inline-
						case 203: {
							// inline-box
							if (cache.charCodeAt(8) < 111) {
								break
							}
						}
						// inline-box/sticky
						case 115: {
							out = out.replace(cache, webkit+cache)+';'+out
							break
						}
						// inline-flex
						// flex
						case 207:
						case 102: {
							out = (
								out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
								out.replace(cache, webkit+cache)+';'+
								out.replace(cache, ms+cache+'box')+';'+
								out
							)
						}
					}
	
					return out + ';'
				}
				// align-items, align-center, align-self: a, l, i, -
				case 938: {
					if (out.charCodeAt(5) === DASH) {
						switch (out.charCodeAt(6)) {
							// align-items, i
							case 105: {
								cache = out.replace('-items', '')
								return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
							}
							// align-self, s
							case 115: {
								return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
							}
							// align-content
							default: {
								return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
							}
						}
					}
					break
				}
				// min/max
				case 973:
				case 989: {
					// min-/max- height/width/block-size/inline-size
					if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
						break
					}
				}
				// height/width: min-content / width: max-content
				case 931:
				case 953: {
					if (dimensionptn.test(input) === true) {
						// stretch
						if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
							return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
						else
							return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
					}
					break
				}
				// transform, transition: t, r, a
				case 962: {
					out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out
	
					// transitions
					if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
						return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
					}
	
					break
				}
			}
	
			return out
		}
	
		/**
		 * Vendor
		 *
		 * @param {string} content
		 * @param {number} context
		 * @return {boolean}
		 */
		function vendor (content, context) {
			var index = content.indexOf(context === 1 ? ':' : '{')
			var key = content.substring(0, context !== 3 ? index : 10)
			var value = content.substring(index + 1, content.length - 1)
	
			return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
		}
	
		/**
		 * Supports
		 *
		 * @param {string} match
		 * @param {string} group
		 * @return {string}
		 */
		function supports (match, group) {
			var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))
	
			return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
		}
	
		/**
		 * Animation
		 *
		 * @param {string} input
		 * @return {string}
		 */
		function animation (input) {
			var length = input.length
			var index = input.indexOf(':', 9) + 1
			var declare = input.substring(0, index).trim()
			var out = input.substring(index, length-1).trim()
	
			switch (input.charCodeAt(9)*keyed) {
				case 0: {
					break
				}
				// animation-*, -
				case DASH: {
					// animation-name, n
					if (input.charCodeAt(10) !== 110) {
						break
					}
				}
				// animation/animation-name
				default: {
					// split in case of multiple animations
					var list = out.split((out = '', animationptn))
	
					for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
						var value = list[i]
						var items = value.split(propertiesptn)
	
						while (value = items[index]) {
							var peak = value.charCodeAt(0)
	
							if (keyed === 1 && (
								// letters
								(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
								// dash but not in sequence i.e --
								(peak === DASH && value.charCodeAt(1) !== DASH)
							)) {
								// not a number/function
								switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
									case 1: {
										switch (value) {
											// not a valid reserved keyword
											case 'infinite': case 'alternate': case 'backwards': case 'running':
											case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
											case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
											case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
											case 'initial': case 'unset': case 'step-start': case 'step-end': {
												break
											}
											default: {
												value += key
											}
										}
									}
								}
							}
	
							items[index++] = value
						}
	
						out += (i === 0 ? '' : ',') + items.join(' ')
					}
				}
			}
	
			out = declare + out + ';'
	
			if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
				return webkit + out + out
	
			return out
		}
	
		/**
		 * Isolate
		 *
		 * @param {Array<string>} current
		 */
		function isolate (current) {
			for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
				// split individual elements in a selector i.e h1 h2 === [h1, h2]
				var elements = current[i].split(elementptn)
				var out = ''
	
				for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
					// empty element
					if ((size = (element = elements[j]).length) === 0 && l > 1) {
						continue
					}
	
					tail = out.charCodeAt(out.length-1)
					code = element.charCodeAt(0)
					padding = ''
	
					if (j !== 0) {
						// determine if we need padding
						switch (tail) {
							case STAR:
							case TILDE:
							case GREATERTHAN:
							case PLUS:
							case SPACE:
							case OPENPARENTHESES:  {
								break
							}
							default: {
								padding = ' '
							}
						}
					}
	
					switch (code) {
						case AND: {
							element = padding + nscopealt
						}
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case CLOSEPARENTHESES:
						case OPENPARENTHESES: {
							break
						}
						case OPENBRACKET: {
							element = padding + element + nscopealt
							break
						}
						case COLON: {
							switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
								// :global
								case 530: {
									if (escape > 0) {
										element = padding + element.substring(8, size - 1)
										break
									}
								}
								// :hover, :nth-child(), ...
								default: {
									if (j < 1 || elements[j-1].length < 1) {
										element = padding + nscopealt + element
									}
								}
							}
							break
						}
						case COMMA: {
							padding = ''
						}
						default: {
							if (size > 1 && element.indexOf(':') > 0) {
								element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
							} else {
								element = padding + element + nscopealt
							}
						}
					}
	
					out += element
				}
	
				selector[i] = out.replace(formatptn, '').trim()
			}
	
			return selector
		}
	
		/**
		 * Proxy
		 *
		 * @param {number} context
		 * @param {string} content
		 * @param {Array<string>} selectors
		 * @param {Array<string>} parents
		 * @param {number} line
		 * @param {number} column
		 * @param {number} length
		 * @param {number} id
		 * @param {number} depth
		 * @param {number} at
		 * @return {(string|void|*)}
		 */
		function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
			for (var i = 0, out = content, next; i < plugged; ++i) {
				switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
					case void 0:
					case false:
					case true:
					case null: {
						break
					}
					default: {
						out = next
					}
				}
			}
	
			switch (out) {
				case void 0:
				case false:
				case true:
				case null:
				case content: {
					break
				}
				default: {
					return out
				}
			}
		}
	
		/**
		 * Minify
		 *
		 * @param {(string|*)} output
		 * @return {string}
		 */
		function minify (output) {
			return output
				.replace(formatptn, '')
				.replace(beforeptn, '')
				.replace(afterptn, '$1')
				.replace(tailptn, '$1')
				.replace(whiteptn, ' ')
		}
	
		/**
		 * Use
		 *
		 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
		 */
		function use (plugin) {
			switch (plugin) {
				case void 0:
				case null: {
					plugged = plugins.length = 0
					break
				}
				default: {
					switch (plugin.constructor) {
						case Array: {
							for (var i = 0, length = plugin.length; i < length; ++i) {
								use(plugin[i])
							}
							break
						}
						case Function: {
							plugins[plugged++] = plugin
							break
						}
						case Boolean: {
							unkwn = !!plugin|0
						}
					}
				}
	 		}
	
	 		return use
		}
	
		/**
		 * Set
		 *
		 * @param {*} options
		 */
		function set (options) {
			for (var name in options) {
				var value = options[name]
				switch (name) {
					case 'keyframe': keyed = value|0; break
					case 'global': escape = value|0; break
					case 'cascade': cascade = value|0; break
					case 'compress': compress = value|0; break
					case 'semicolon': semicolon = value|0; break
					case 'preserve': preserve = value|0; break
					case 'prefix':
						should = null
	
						if (!value) {
							prefix = 0
						} else if (typeof value !== 'function') {
							prefix = 1
						} else {
							prefix = 2
							should = value
						}
				}
			}
	
			return set
		}
	
		/**
		 * Stylis
		 *
		 * @param {string} selector
		 * @param {string} input
		 * @return {*}
		 */
		function stylis (selector, input) {
			if (this !== void 0 && this.constructor === stylis) {
				return factory(selector)
			}
	
			// setup
			var ns = selector
			var code = ns.charCodeAt(0)
	
			// trim leading whitespace
			if (code < 33) {
				code = (ns = ns.trim()).charCodeAt(0)
			}
	
			// keyframe/animation namespace
			if (keyed > 0) {
				key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
			}
	
			// reset, used to assert if a plugin is moneky-patching the return value
			code = 1
	
			// cascade/isolate
			if (cascade === 1) {
				nscope = ns
			} else {
				nscopealt = ns
			}
	
			var selectors = [nscope]
			var result
	
			// execute plugins, pre-process context
			if (plugged > 0) {
				result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)
	
				if (result !== void 0 && typeof result === 'string') {
					input = result
				}
			}
	
			// build
			var output = compile(array, selectors, input, 0, 0)
	
			// execute plugins, post-process context
			if (plugged > 0) {
				result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)
	
				// bypass minification
				if (result !== void 0 && typeof(output = result) !== 'string') {
					code = 0
				}
			}
	
			// reset
			key = ''
			nscope = ''
			nscopealt = ''
			pattern = 0
			line = 1
			column = 1
	
			return compress*code === 0 ? output : minify(output)
		}
	
		stylis['use'] = use
		stylis['set'] = set
	
		if (options !== void 0) {
			set(options)
		}
	
		return stylis
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(86)(module)))

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  max-height: 60px;\n  cursor: pointer;\n"], ["\n  max-height: 60px;\n  cursor: pointer;\n"]),
	    _templateObject2 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  color: ", ";\n"], ["\n  background-color: ", ";\n  color: ", ";\n"]);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(14);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _reactstrap = __webpack_require__(13);
	
	var _constant = __webpack_require__(7);
	
	var _Layout = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Logo = _styledComponents2.default.img(_templateObject);
	
	var FooterContainer = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject2, _constant.COLOR.primary, _constant.COLOR.fontPrimary);
	
	FooterContainer.defaultProps = {
	  className: "py-4"
	};
	
	var Footer = function Footer() {
	  return _react2.default.createElement(
	    FooterContainer,
	    { fluid: true },
	    _react2.default.createElement(
	      _reactstrap.Container,
	      null,
	      _react2.default.createElement(
	        _reactstrap.Row,
	        { className: "d-flex justify-content-between" },
	        _react2.default.createElement(
	          _Layout.Col,
	          { lg: "2", className: "text-center" },
	          _react2.default.createElement(
	            "h4",
	            null,
	            "Brown Bag"
	          ),
	          _react2.default.createElement(
	            "h6",
	            null,
	            "The Fourth"
	          )
	        ),
	        _react2.default.createElement(
	          _Layout.Col,
	          { lg: "2", className: "text-center" },
	          _react2.default.createElement(
	            "h6",
	            null,
	            "Event Organizer by"
	          ),
	          _react2.default.createElement(
	            "a",
	            { href: "https://www.facebook.com/alchemistitbangmod/", target: "_blank" },
	            _react2.default.createElement(Logo, { src: "/static/images/alchemist.png" })
	          )
	        ),
	        _react2.default.createElement(
	          _Layout.Col,
	          { lg: "2", className: "text-center" },
	          _react2.default.createElement(
	            "h5",
	            null,
	            "CONNECT WITH US"
	          ),
	          _react2.default.createElement(
	            "a",
	            { href: "https://www.facebook.com/BrownBagSITKMUTT/", target: "_blank" },
	            _react2.default.createElement(Logo, { src: "/static/images/fbicon.png" })
	          ),
	          _react2.default.createElement("br", null),
	          _react2.default.createElement(
	            "a",
	            { href: "mailto:alchemist@sit.kmutt.ac.th" },
	            "alchemist@sit.kmutt.ac.th"
	          )
	        )
	      )
	    )
	  );
	};
	exports.default = Footer;
	module.exports = exports["default"];

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  @font-face {\n    font-family: \"CSChatThai\";\n    src: url(\"/static/fonts/CSChatThai.ttf\");\n  }\n  html, body {\n    font-family: \"CSChatThai\", serif !important;\n    font-size: 18px;\n    overflow-x: hidden;\n  }\n\n  h1 {\n    font-size: ", ";\n  }\n  p {\n    text-indent: 1.5em;\n    font-size: ", ";\n  }\n  a {\n    color: ", ";\n  }\n"], ["\n  @font-face {\n    font-family: \"CSChatThai\";\n    src: url(\"/static/fonts/CSChatThai.ttf\");\n  }\n  html, body {\n    font-family: \"CSChatThai\", serif !important;\n    font-size: 18px;\n    overflow-x: hidden;\n  }\n\n  h1 {\n    font-size: ", ";\n  }\n  p {\n    text-indent: 1.5em;\n    font-size: ", ";\n  }\n  a {\n    color: ", ";\n  }\n"]);
	
	var _styledComponents = __webpack_require__(14);
	
	var _constant = __webpack_require__(7);
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	exports.default = function () {
	  return (0, _styledComponents.injectGlobal)(_templateObject, _constant.FONT_SIZE.header, _constant.FONT_SIZE.normal, _constant.COLOR.fontPrimary);
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.Col = undefined;
	
	__webpack_require__(222);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactstrap = __webpack_require__(13);
	
	var _InjectGlobal = __webpack_require__(137);
	
	var _InjectGlobal2 = _interopRequireDefault(_InjectGlobal);
	
	var _Navbar = __webpack_require__(138);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Footer = __webpack_require__(136);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Layout = function (_Component) {
	  _inherits(Layout, _Component);
	
	  function Layout() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Layout);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.componentWillMount = _asyncToGenerator(function* () {
	      (0, _InjectGlobal2.default)();
	    }), _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Layout.prototype.render = function render() {
	    var children = this.props.children;
	
	    return _react2.default.createElement(
	      _react.Fragment,
	      null,
	      _react2.default.createElement(_Navbar2.default, null),
	      children,
	      _react2.default.createElement(_Footer2.default, null)
	    );
	  };
	
	  return Layout;
	}(_react.Component);
	
	exports.default = Layout;
	
	
	var Col = function Col(props) {
	  return _react2.default.createElement(_reactstrap.Col, props);
	};
	
	Col.defaultProps = {
	  xs: "12"
	};
	
	exports.Col = Col;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: ", ";\n  background-color: ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  background-color: ", ";\n"]),
	    _templateObject2 = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"]);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(14);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _reactstrap = __webpack_require__(13);
	
	var _reactScroll = __webpack_require__(46);
	
	var _constant = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var menus = [{ name: "What's", link: "whatis" }, { name: "About", link: "about" }, { name: "Join with Us", link: "joinwithus" }, { name: "Timetable", link: "timetable" }, { name: "Sponsor", link: "sponsor" }];
	
	var Nav = (0, _styledComponents2.default)(_reactstrap.Nav)(_templateObject, _constant.FONT_SIZE.normal, _constant.COLOR.fontPrimary, _constant.COLOR.primary);
	
	Nav.defaultProps = {
	  className: "sticky-top navbar-expand-lg py-2 px-3 justify-content-center"
	};
	
	var Link = (0, _styledComponents2.default)(_reactScroll.Link)(_templateObject2);
	
	Link.defaultProps = {
	  className: "mx-3"
	};
	
	var NavList = function NavList(_ref) {
	  var menus = _ref.menus;
	  return _react2.default.createElement(
	    _react.Fragment,
	    null,
	    menus.map(function (_ref2) {
	      var name = _ref2.name,
	          link = _ref2.link;
	      return _react2.default.createElement(
	        _reactstrap.NavItem,
	        { key: "nav-item-" + name + "-" + link },
	        _react2.default.createElement(
	          Link,
	          {
	            to: link,
	            activeClass: "active",
	            spy: true,
	            smooth: true,
	            duration: 700
	            // onSetActive={this.handleSetActive}
	          },
	          name
	        )
	      );
	    })
	  );
	};
	
	NavList.defaultProps = {
	  menus: menus
	};
	
	var Navbar = function Navbar() {
	  return _react2.default.createElement(
	    Nav,
	    null,
	    _react2.default.createElement(NavList, null)
	  );
	};
	
	exports.default = Navbar;
	module.exports = exports["default"];

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var FONT_SIZE = {
	  small: "0.7em",
	  normal: "1.4em",
	  large: "1.8em",
	  header: "2.4em",
	  hero: "3em",
	  subheader: "2em"
	};
	
	var COLOR = {
	  primary: "rgb(74,44,44)",
	  primaryFade: "rgba(74, 44, 44, 0.65)",
	  secondary: "#ffdc76",
	  normal: "#fff0b6",
	  highlight: "#d3504a",
	  fontPrimary: "#fff",
	  headerBorder: "#000"
	};
	
	var MARGIN = {
	  small: "0.5em",
	  normal: "1em",
	  large: "5em"
	};
	
	var PADDING = MARGIN;
	
	exports.FONT_SIZE = FONT_SIZE;
	exports.COLOR = COLOR;
	exports.MARGIN = MARGIN;
	exports.PADDING = PADDING;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n"], ["\n  width: 100%;\n"]),
	    _templateObject2 = _taggedTemplateLiteralLoose(["\n  border-bottom: 2.4px solid ", ";\n  font-weight: bold;\n\n  font-size: ", ";\n  margin-bottom: ", ";\n  @media (max-width: 1024px){\n    font-size: ", ";\n    margin-bottom: ", ";\n  }\n"], ["\n  border-bottom: 2.4px solid ", ";\n  font-weight: bold;\n\n  font-size: ", ";\n  margin-bottom: ", ";\n  @media (max-width: 1024px){\n    font-size: ", ";\n    margin-bottom: ", ";\n  }\n"]),
	    _templateObject3 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  @media (max-width: 1024px){\n    padding: 2.5em 2em !important;\n  }\n"], ["\n  background-color: ", ";\n  @media (max-width: 1024px){\n    padding: 2.5em 2em !important;\n  }\n"]),
	    _templateObject4 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"]),
	    _templateObject5 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  color: ", ";\n"], ["\n  background-color: ", ";\n  color: ", ";\n"]),
	    _templateObject6 = _taggedTemplateLiteralLoose(["\n"], ["\n"]);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(14);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _reactstrap = __webpack_require__(13);
	
	var _reactScroll = __webpack_require__(46);
	
	var _constant = __webpack_require__(7);
	
	var _Layout = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var SectionImage = _styledComponents2.default.img(_templateObject);
	
	var WhatHeader = _styledComponents2.default.h1(_templateObject2, _constant.COLOR.headerBorder, _constant.FONT_SIZE.hero, _constant.MARGIN.normal, _constant.FONT_SIZE.header, _constant.MARGIN.small);
	
	var WhatCol = (0, _styledComponents2.default)(_Layout.Col)(_templateObject3, _constant.COLOR.secondary);
	WhatCol.defaultProps = {
	  className: "px-5 d-flex flex-column justify-content-center"
	};
	
	var What = function What() {
	  return _react2.default.createElement(
	    _reactstrap.Container,
	    { fluid: true },
	    _react2.default.createElement(
	      _reactstrap.Container,
	      null,
	      _react2.default.createElement(
	        _reactScroll.Element,
	        { className: "row py-5", name: "whatis" },
	        _react2.default.createElement(
	          _Layout.Col,
	          { className: "text-center" },
	          _react2.default.createElement(
	            WhatHeader,
	            null,
	            "What is Brown Bag?"
	          )
	        ),
	        _react2.default.createElement(
	          _Layout.Col,
	          { lg: "6" },
	          _react2.default.createElement(SectionImage, { src: "/static/images/brownbag-last.gif" })
	        ),
	        _react2.default.createElement(
	          WhatCol,
	          { lg: "6" },
	          _react2.default.createElement(
	            "p",
	            null,
	            "\u0E04\u0E23\u0E31\u0E49\u0E07\u0E19\u0E35\u0E49\u0E40\u0E23\u0E32\u0E02\u0E2D\u0E40\u0E14\u0E34\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E35\u0E01\u0E01\u0E49\u0E32\u0E27 \u0E40\u0E0A\u0E34\u0E0D\u0E0A\u0E27\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E46 \u0E1E\u0E35\u0E48\u0E46 \u0E19\u0E49\u0E2D\u0E07\u0E46 \u0E0D\u0E32\u0E15\u0E34\u0E2A\u0E19\u0E34\u0E17\u0E21\u0E34\u0E15\u0E23\u0E2A\u0E2B\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E40\u0E14\u0E47\u0E01\u0E46 \u0E44\u0E2D\u0E17\u0E35\u0E1A\u0E32\u0E07\u0E21\u0E14 \u0E44\u0E21\u0E48\u0E27\u0E48\u0E32\u0E04\u0E38\u0E13\u0E08\u0E30\u0E2D\u0E22\u0E39\u0E48\u0E20\u0E32\u0E04\u0E44\u0E2B\u0E19 \u0E44\u0E21\u0E48\u0E27\u0E48\u0E32\u0E04\u0E38\u0E13\u0E08\u0E30\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E44\u0E2D\u0E17\u0E35\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E21\u0E32\u0E23\u0E48\u0E27\u0E21\u0E41\u0E1A\u0E48\u0E07\u0E02\u0E19\u0E21 \u0E1C\u0E2A\u0E21\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E01\u0E31\u0E19\u0E43\u0E19 Brown Bag The Fourth"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "\u0E21\u0E35\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E48\u0E07\u0E1B\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E16\u0E48\u0E32\u0E22\u0E17\u0E2D\u0E14\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49 \u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E43\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E19\u0E43\u0E08\u0E43\u0E2B\u0E49\u0E41\u0E01\u0E48\u0E1C\u0E39\u0E49\u0E2D\u0E37\u0E48\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E43\u0E2B\u0E49\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32\u0E21\u0E35\u0E01\u0E32\u0E23\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49 \u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E01\u0E31\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E20\u0E32\u0E04\u0E27\u0E34\u0E0A\u0E32 \u0E41\u0E25\u0E30\u0E01\u0E25\u0E38\u0E48\u0E21\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E19\u0E43\u0E08\u0E43\u0E19\u0E14\u0E49\u0E32\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E17\u0E31\u0E28\u0E04\u0E15\u0E34\u0E17\u0E35\u0E48\u0E14\u0E35\u0E15\u0E48\u0E2D\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32\u0E20\u0E32\u0E22\u0E43\u0E19\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E2A\u0E19\u0E43\u0E08"
	          )
	        )
	      )
	    )
	  );
	};
	
	var AboutContainer = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject4, _constant.COLOR.secondary);
	
	var About = function About() {
	  return _react2.default.createElement(
	    AboutContainer,
	    { fluid: true },
	    _react2.default.createElement(
	      _reactstrap.Container,
	      null,
	      _react2.default.createElement(
	        _reactScroll.Element,
	        { className: "row py-5", name: "about" },
	        _react2.default.createElement(
	          _Layout.Col,
	          { md: 6, className: "d-flex flex-column justify-content-center align-items-center" },
	          _react2.default.createElement(
	            "h1",
	            null,
	            "Brown Bag \u0E21\u0E32\u0E08\u0E32\u0E01\u0E44\u0E2B\u0E19?"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Brown Bag \u0E21\u0E32\u0E08\u0E32\u0E01\u0E1B\u0E01\u0E15\u0E34\u0E41\u0E25\u0E49\u0E27\u0E04\u0E19\u0E2D\u0E40\u0E21\u0E23\u0E34\u0E01\u0E32\u0E0A\u0E2D\u0E1A\u0E43\u0E0A\u0E49\u0E40\u0E08\u0E49\u0E32 \u0E16\u0E38\u0E07\u0E19\u0E49\u0E33\u0E15\u0E32\u0E25 \u0E19\u0E35\u0E48\u0E41\u0E2B\u0E25\u0E30 \u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E27\u0E01\u0E43\u0E2A\u0E48\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E23\u0E39\u0E1B \u0E17\u0E35\u0E48\u0E2B\u0E32\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01 Supermarket \u0E2B\u0E23\u0E37\u0E2D \u0E42\u0E23\u0E07\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E08\u0E30\u0E40\u0E2D\u0E32\u0E21\u0E32\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E21\u0E32\u0E19\u0E31\u0E48\u0E07\u0E01\u0E34\u0E19 \u0E41\u0E25\u0E30\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E2A\u0E19\u0E17\u0E19\u0E32\u0E01\u0E31\u0E19 \u0E40\u0E2D\u0E32\u0E07\u0E48\u0E32\u0E22\u0E46 \u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E04\u0E19\u0E44\u0E17\u0E22\u0E40\u0E23\u0E32\u0E2D\u0E30\u0E04\u0E23\u0E31\u0E1A \u0E04\u0E19\u0E15\u0E48\u0E32\u0E07\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14\u0E40\u0E27\u0E25\u0E32\u0E40\u0E23\u0E32 \u0E17\u0E33\u0E44\u0E23\u0E48\u0E17\u0E33\u0E19\u0E32\u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E33\u0E2A\u0E27\u0E19\u0E01\u0E47\u0E08\u0E30\u0E2B\u0E48\u0E2D\u0E02\u0E49\u0E32\u0E27\u0E44\u0E1B\u0E01\u0E34\u0E19\u0E41\u0E25\u0E49\u0E27\u0E21\u0E32\u0E19\u0E31\u0E48\u0E07\u0E04\u0E38\u0E22\u0E01\u0E31\u0E19 \u0E17\u0E32\u0E07\u0E40\u0E23\u0E32\u0E01\u0E47\u0E44\u0E14\u0E49\u0E19\u0E33\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E08\u0E49\u0E32\u0E16\u0E38\u0E07\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E2A\u0E35\u0E19\u0E49\u0E33\u0E15\u0E32\u0E25\u0E19\u0E35\u0E48\u0E41\u0E2B\u0E25\u0E30 \u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E19\u0E31\u0E48\u0E07\u0E04\u0E38\u0E22\u0E01\u0E31\u0E19 \u0E2A\u0E19\u0E17\u0E19\u0E32\u0E01\u0E31\u0E19\u0E41\u0E1A\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E31\u0E19\u0E40\u0E2D\u0E07 \u0E44\u0E21\u0E48\u0E40\u0E04\u0E23\u0E35\u0E22\u0E14 \u0E2D\u0E22\u0E32\u0E01\u0E04\u0E38\u0E22\u0E2D\u0E30\u0E44\u0E23\u0E01\u0E47\u0E04\u0E38\u0E22 \u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23"
	          )
	        ),
	        _react2.default.createElement(
	          _Layout.Col,
	          { md: 6 },
	          _react2.default.createElement(SectionImage, { src: "/static/images/whatisbrownbag-last.gif" })
	        )
	      )
	    )
	  );
	};
	
	var StyleContainer = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject5, _constant.COLOR.primary, _constant.COLOR.fontPrimary);
	var Style = function Style() {
	  return _react2.default.createElement(
	    StyleContainer,
	    { fluid: true },
	    _react2.default.createElement(
	      _reactstrap.Container,
	      null,
	      _react2.default.createElement(
	        _reactScroll.Element,
	        { className: "row py-5", name: "joinwithus" },
	        _react2.default.createElement(
	          _Layout.Col,
	          null,
	          _react2.default.createElement(
	            "h1",
	            null,
	            "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23?"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E41\u0E25\u0E30\u0E41\u0E1A\u0E48\u0E07\u0E1B\u0E31\u0E19\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E31\u0E19\u0E40\u0E2D\u0E07 \u0E42\u0E14\u0E22\u0E08\u0E30\u0E21\u0E35\u0E01\u0E32\u0E23\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E2A\u0E19\u0E43\u0E08 \u0E08\u0E32\u0E01\u0E1C\u0E39\u0E49\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E21\u0E32\u0E41\u0E1A\u0E48\u0E07\u0E1B\u0E31\u0E19\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C \u0E20\u0E32\u0E22\u0E43\u0E19\u0E07\u0E32\u0E19 \u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E07\u0E32\u0E19\u0E17\u0E38\u0E01\u0E46\u0E04\u0E19\u0E08\u0E30\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E31\u0E19\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E19\u0E43\u0E08 \u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E48\u0E07\u0E1B\u0E31\u0E19\u0E20\u0E32\u0E22\u0E43\u0E19\u0E07\u0E32\u0E19 \u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E07\u0E32\u0E19\u0E17\u0E38\u0E01\u0E46 \u0E04\u0E19 \u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E02\u0E19\u0E21\u0E01\u0E31\u0E19\u0E21\u0E32\u0E04\u0E19\u0E25\u0E30 1 \u0E0A\u0E34\u0E49\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E33\u0E21\u0E32\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E01\u0E31\u0E19\u0E20\u0E32\u0E22\u0E43\u0E19\u0E07\u0E32\u0E19\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E14\u0E31\u0E48\u0E07\u0E40\u0E0A\u0E48\u0E19 \u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E19\u0E33\u0E21\u0E32\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E01\u0E31\u0E19\u0E20\u0E32\u0E22\u0E43\u0E19\u0E07\u0E32\u0E19"
	          )
	        )
	      )
	    )
	  );
	};
	
	var JoinContainer = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject6);
	var Join = function Join() {
	  return _react2.default.createElement(
	    JoinContainer,
	    { fluid: true },
	    _react2.default.createElement(
	      _reactstrap.Container,
	      null,
	      _react2.default.createElement(
	        _reactScroll.Element,
	        { className: "row py-5", name: "joinwithus" },
	        _react2.default.createElement(
	          _Layout.Col,
	          { className: "text-center" },
	          _react2.default.createElement(
	            "h1",
	            null,
	            "\u0E2D\u0E22\u0E32\u0E01\u0E41\u0E0A\u0E23\u0E4C\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E20\u0E32\u0E22\u0E43\u0E19\u0E07\u0E32\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23?"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "\u0E01\u0E23\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E21\u0E32\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22\u0E04\u0E23\u0E31\u0E1A ",
	            _react2.default.createElement(
	              "button",
	              null,
	              "Click!"
	            ),
	            " \u0E41\u0E15\u0E48\u0E08\u0E30\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E0A\u0E23\u0E4C\u0E20\u0E32\u0E22\u0E43\u0E19\u0E07\u0E32\u0E19\u0E2A\u0E31\u0E01\u0E40\u0E25\u0E47\u0E01\u0E19\u0E49\u0E2D\u0E22\u0E19\u0E30\u0E04\u0E23\u0E31\u0E1A"
	          )
	        )
	      )
	    )
	  );
	};
	
	var Information = function Information() {
	  return _react2.default.createElement(
	    _react.Fragment,
	    null,
	    _react2.default.createElement(What, null),
	    _react2.default.createElement(About, null),
	    _react2.default.createElement(Style, null),
	    _react2.default.createElement(Join, null)
	  );
	};
	
	exports.default = Information;
	module.exports = exports["default"];

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  min-height: 75vh;\n"], ["\n  min-height: 75vh;\n"]),
	    _templateObject2 = _taggedTemplateLiteralLoose(["\n  background-image: url(\"/static/images/IMG_3966.JPG\");\n  background-attachment: fixed;\n"], ["\n  background-image: url(\"/static/images/IMG_3966.JPG\");\n  background-attachment: fixed;\n"]),
	    _templateObject3 = _taggedTemplateLiteralLoose(["\n  margin-top: -75vh;\n  background-color: ", ";\n  color: ", ";\n"], ["\n  margin-top: -75vh;\n  background-color: ", ";\n  color: ", ";\n"]);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(14);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _reactstrap = __webpack_require__(13);
	
	var _constant = __webpack_require__(7);
	
	var _Layout = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var HeroCol = (0, _styledComponents2.default)(_Layout.Col)(_templateObject);
	
	var HeroOverlay = HeroCol.extend(_templateObject2);
	var HeroSection = HeroCol.extend(_templateObject3, _constant.COLOR.primaryFade, _constant.COLOR.fontPrimary);
	
	var Hero = function Hero() {
	  return _react2.default.createElement(
	    _reactstrap.Container,
	    { fluid: true },
	    _react2.default.createElement(
	      _reactstrap.Row,
	      null,
	      _react2.default.createElement(HeroOverlay, null),
	      _react2.default.createElement(
	        HeroSection,
	        { className: "d-flex flex-column justify-content-center align-items-center" },
	        _react2.default.createElement(
	          "h1",
	          null,
	          "Brown Bag"
	        ),
	        _react2.default.createElement(
	          "h3",
	          null,
	          "The Fourth"
	        )
	      )
	    )
	  );
	};
	
	exports.default = Hero;
	module.exports = exports["default"];

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  max-width: 250px;\n  max-height: 150px;\n"], ["\n  max-width: 250px;\n  max-height: 150px;\n"]),
	    _templateObject2 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"]),
	    _templateObject3 = _taggedTemplateLiteralLoose(["\n"], ["\n"]);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(14);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _reactstrap = __webpack_require__(13);
	
	var _reactScroll = __webpack_require__(46);
	
	var _constant = __webpack_require__(7);
	
	var _Layout = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var sponsors = ["/static/images/kmutt.svg", "/static/images/sit.svg"];
	
	var Image = _styledComponents2.default.img(_templateObject);
	
	var SponsorContainer = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject2, _constant.COLOR.secondary);
	
	var SponsorCol = (0, _styledComponents2.default)(_Layout.Col)(_templateObject3);
	SponsorCol.defaultProps = {
	  className: "py-5 d-flex flex-column justify-content-center align-items-center"
	};
	
	var SponsorList = function SponsorList(_ref) {
	  var sponsors = _ref.sponsors;
	  return _react2.default.createElement(
	    _react.Fragment,
	    null,
	    sponsors.map(function (sponsor) {
	      return _react2.default.createElement(Image, { key: sponsor, src: sponsor });
	    })
	  );
	};
	
	SponsorList.defaultProps = {
	  sponsors: sponsors
	};
	
	var Sponsor = function Sponsor() {
	  return _react2.default.createElement(
	    SponsorContainer,
	    { fluid: true },
	    _react2.default.createElement(
	      _reactstrap.Container,
	      null,
	      _react2.default.createElement(
	        _reactScroll.Element,
	        { className: "row", name: "sponsor" },
	        _react2.default.createElement(
	          SponsorCol,
	          null,
	          _react2.default.createElement(
	            "h1",
	            null,
	            "Sponsor"
	          ),
	          _react2.default.createElement(SponsorList, null)
	        )
	      )
	    )
	  );
	};
	
	exports.default = Sponsor;
	module.exports = exports["default"];

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"]);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(14);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _reactstrap = __webpack_require__(13);
	
	var _reactScroll = __webpack_require__(46);
	
	var _constant = __webpack_require__(7);
	
	var _Layout = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var sessions = [{ "time": "13:00 - 13:30", "session": "ลงทะเบียน" }, { "time": "13:30 - 14:00", "session": "พิธีเปิดโครงการ" }, { "time": "14:00 - 14:35", "session": "Session I" }, { "time": "14:40 - 15:15", "session": "Session II" }, { "time": "15:15 - 15:30", "session": "พักรับประทานอาหารว่าง และแลกเปลี่ยนกันตามอัธยาศัย" }, { "time": "15:30 - 16:05", "session": "Session III" }, { "time": "16:10 - 16:30", "session": "สรุปงานและแลกเปลี่ยนกันตามอัธยาศัย" }];
	
	var TimetbleContainer = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject, _constant.COLOR.normal);
	TimetbleContainer.defaultProps = {
	  className: "py-5"
	};
	
	var Timetable = function Timetable() {
	  return _react2.default.createElement(
	    TimetbleContainer,
	    { fluid: true },
	    _react2.default.createElement(
	      _reactstrap.Container,
	      null,
	      _react2.default.createElement(
	        _reactScroll.Element,
	        { className: "row", name: "timetable" },
	        _react2.default.createElement(
	          _Layout.Col,
	          { className: "text-center" },
	          _react2.default.createElement(
	            "h1",
	            null,
	            "Timetable"
	          )
	        ),
	        _react2.default.createElement(
	          _Layout.Col,
	          null,
	          _react2.default.createElement(
	            "span",
	            null,
	            sessions.map(function (_ref) {
	              var session = _ref.session,
	                  time = _ref.time;
	              return _react2.default.createElement(
	                "div",
	                { key: "" + time + session },
	                time + " " + session
	              );
	            })
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = Timetable;
	module.exports = exports["default"];

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Layout = __webpack_require__(15);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Hero = __webpack_require__(140);
	
	var _Hero2 = _interopRequireDefault(_Hero);
	
	var _About = __webpack_require__(139);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _Timetable = __webpack_require__(142);
	
	var _Timetable2 = _interopRequireDefault(_Timetable);
	
	var _Sponsor = __webpack_require__(141);
	
	var _Sponsor2 = _interopRequireDefault(_Sponsor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Index = function Index() {
	  return _react2.default.createElement(
	    _Layout2.default,
	    null,
	    _react2.default.createElement(_Hero2.default, null),
	    _react2.default.createElement(_About2.default, null),
	    _react2.default.createElement(_Timetable2.default, null),
	    _react2.default.createElement(_Sponsor2.default, null)
	  );
	};
	
	exports.default = Index;
	module.exports = exports["default"];

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _index = __webpack_require__(143);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _index2.default;
	module.exports = exports["default"];

/***/ })

});
//# sourceMappingURL=component---src-pages-index-js-b36a5fdd04155d6582ff.js.map