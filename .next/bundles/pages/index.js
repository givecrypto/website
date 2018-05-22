module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([4],{

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__("./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/fbjs/lib/memoizeStringOnly.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),

/***/ "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumn: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true

  /**
   * @param {string} prefix vendor-specific prefix, eg: Webkit
   * @param {string} key style name, eg: transitionDuration
   * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
   * WebkitTransitionDuration
   */
};function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

exports.default = CSSProperty;

/***/ }),

/***/ "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSProperty = __webpack_require__("./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js");

var _CSSProperty2 = _interopRequireDefault(_CSSProperty);

var _warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */

var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
var styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, component) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (true) {
      // Allow '0' to pass through without warning. 0 is already special and
      // doesn't require units, so we don't need to warn about it.
      if (component && value !== '0') {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !styleWarnings[ownerName]) {
          styleWarnings[ownerName] = {};
        }
        var warned = false;
        if (ownerName) {
          var warnings = styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
           true ? (0, _warning2.default)(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
        }
      }
    }
    value = value.trim();
  }
  return value + 'px';
}

exports.default = dangerousStyleValue;

/***/ }),

/***/ "./node_modules/glamor/lib/CSSPropertyOperations/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processStyleName = undefined;
exports.createMarkupForStyles = createMarkupForStyles;

var _camelizeStyleName = __webpack_require__("./node_modules/fbjs/lib/camelizeStyleName.js");

var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

var _dangerousStyleValue = __webpack_require__("./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js");

var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);

var _hyphenateStyleName = __webpack_require__("./node_modules/fbjs/lib/hyphenateStyleName.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _memoizeStringOnly = __webpack_require__("./node_modules/fbjs/lib/memoizeStringOnly.js");

var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);

var _warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
                                                                                                                   * Copyright 2013-present, Facebook, Inc.
                                                                                                                   * All rights reserved.
                                                                                                                   *
                                                                                                                   * This source code is licensed under the BSD-style license found in the
                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                   *
                                                                                                                   * @providesModule CSSPropertyOperations
                                                                                                                   */

if (true) {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;

  var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
     true ? (0, _warning2.default)(false, 'Unsupported style property %s. Did you mean %s?%s', name, (0, _camelizeStyleName2.default)(name), checkRenderMessage(owner)) : void 0;
  };

  var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
     true ? (0, _warning2.default)(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
  };

  var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
     true ? (0, _warning2.default)(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
  };

  var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
     true ? (0, _warning2.default)(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
  };

  var checkRenderMessage = function checkRenderMessage(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  };

  /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */
  var warnValidStyle = function warnValidStyle(name, value, component) {
    //eslint-disable-line no-var
    var owner = void 0;
    if (component) {
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number' && isNaN(value)) {
      warnStyleValueIsNaN(name, value, owner);
    }
  };
}

/**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */

function createMarkupForStyles(styles, component) {
  var serialized = '';
  for (var styleName in styles) {
    var isCustomProp = styleName.indexOf('--') === 0;
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    if (styleName === 'label') {
      continue;
    }
    var styleValue = styles[styleName];
    if ("development" !== 'production' && !isCustomProp) {
      warnValidStyle(styleName, styleValue, component);
    }
    if (styleValue != null) {
      if (isCustomProp) {
        serialized += styleName + ':' + styleValue + ';';
      } else {
        serialized += processStyleName(styleName) + ':';
        serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
      }
    }
  }
  return serialized || null;
}

/***/ }),

/***/ "./node_modules/glamor/lib/clean.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = clean;
// Returns true for null, false, undefined and {}
function isFalsy(value) {
  return value === null || value === undefined || value === false || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0;
}

function cleanObject(object) {
  if (isFalsy(object)) return null;
  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return object;

  var acc = {},
      keys = Object.keys(object),
      hasFalsy = false;
  for (var i = 0; i < keys.length; i++) {
    var value = object[keys[i]];
    var filteredValue = clean(value);
    if (filteredValue === null || filteredValue !== value) {
      hasFalsy = true;
    }
    if (filteredValue !== null) {
      acc[keys[i]] = filteredValue;
    }
  }
  return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
}

function cleanArray(rules) {
  var hasFalsy = false;
  var filtered = [];
  rules.forEach(function (rule) {
    var filteredRule = clean(rule);
    if (filteredRule === null || filteredRule !== rule) {
      hasFalsy = true;
    }
    if (filteredRule !== null) {
      filtered.push(filteredRule);
    }
  });
  return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
}

// Takes style array or object provided by user and clears all the falsy data 
// If there is no styles left after filtration returns null
function clean(input) {
  return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
}

/***/ }),

/***/ "./node_modules/glamor/lib/hash.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doHash;
// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

/***/ }),

/***/ "./node_modules/glamor/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.merge = exports.$ = exports.style = exports.presets = exports.keyframes = exports.fontFace = exports.insertGlobal = exports.insertRule = exports.plugins = exports.styleSheet = undefined;
exports.speedy = speedy;
exports.simulations = simulations;
exports.simulate = simulate;
exports.cssLabels = cssLabels;
exports.isLikeRule = isLikeRule;
exports.idFor = idFor;
exports.css = css;
exports.rehydrate = rehydrate;
exports.flush = flush;
exports.select = select;
exports.parent = parent;
exports.media = media;
exports.pseudo = pseudo;
exports.active = active;
exports.any = any;
exports.checked = checked;
exports.disabled = disabled;
exports.empty = empty;
exports.enabled = enabled;
exports._default = _default;
exports.first = first;
exports.firstChild = firstChild;
exports.firstOfType = firstOfType;
exports.fullscreen = fullscreen;
exports.focus = focus;
exports.hover = hover;
exports.indeterminate = indeterminate;
exports.inRange = inRange;
exports.invalid = invalid;
exports.lastChild = lastChild;
exports.lastOfType = lastOfType;
exports.left = left;
exports.link = link;
exports.onlyChild = onlyChild;
exports.onlyOfType = onlyOfType;
exports.optional = optional;
exports.outOfRange = outOfRange;
exports.readOnly = readOnly;
exports.readWrite = readWrite;
exports.required = required;
exports.right = right;
exports.root = root;
exports.scope = scope;
exports.target = target;
exports.valid = valid;
exports.visited = visited;
exports.dir = dir;
exports.lang = lang;
exports.not = not;
exports.nthChild = nthChild;
exports.nthLastChild = nthLastChild;
exports.nthLastOfType = nthLastOfType;
exports.nthOfType = nthOfType;
exports.after = after;
exports.before = before;
exports.firstLetter = firstLetter;
exports.firstLine = firstLine;
exports.selection = selection;
exports.backdrop = backdrop;
exports.placeholder = placeholder;
exports.cssFor = cssFor;
exports.attribsFor = attribsFor;

var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _sheet = __webpack_require__("./node_modules/glamor/lib/sheet.js");

var _CSSPropertyOperations = __webpack_require__("./node_modules/glamor/lib/CSSPropertyOperations/index.js");

var _clean = __webpack_require__("./node_modules/glamor/lib/clean.js");

var _clean2 = _interopRequireDefault(_clean);

var _plugins = __webpack_require__("./node_modules/glamor/lib/plugins.js");

var _hash = __webpack_require__("./node_modules/glamor/lib/hash.js");

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/* stylesheet */


var styleSheet = exports.styleSheet = new _sheet.StyleSheet();
// an isomorphic StyleSheet shim. hides all the nitty gritty.

// /**************** LIFTOFF IN 3... 2... 1... ****************/
styleSheet.inject(); //eslint-disable-line indent
// /****************      TO THE MOOOOOOON     ****************/

// convenience function to toggle speedy
function speedy(bool) {
  return styleSheet.speedy(bool);
}

// plugins
// we include these by default
var plugins = exports.plugins = styleSheet.plugins = new _plugins.PluginSet([_plugins.prefixes, _plugins.contentWrap, _plugins.fallbacks]);
plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
plugins.fontFace = new _plugins.PluginSet();
plugins.keyframes = new _plugins.PluginSet([_plugins.prefixes, _plugins.fallbacks]);

// define some constants

var isDev = "development" === 'development' || !"development";
var isTest = "development" === 'test';
var isBrowser = typeof window !== 'undefined';

/**** simulations  ****/

// a flag to enable simulation meta tags on dom nodes
// defaults to true in dev mode. recommend *not* to
// toggle often.
var canSimulate = isDev;

// we use these flags for issuing warnings when simulate is called
// in prod / in incorrect order
var warned1 = false,
    warned2 = false;

// toggles simulation activity. shouldn't be needed in most cases
function simulations() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  canSimulate = !!bool;
}

// use this on dom nodes to 'simulate' pseudoclasses
// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
// you can even send in some weird ones, as long as it's in simple format
// and matches an existing rule on the element
// eg simulate('nthChild2', ':hover:active') etc
function simulate() {
  for (var _len = arguments.length, pseudos = Array(_len), _key = 0; _key < _len; _key++) {
    pseudos[_key] = arguments[_key];
  }

  pseudos = (0, _clean2.default)(pseudos);
  if (!pseudos) return {};
  if (!canSimulate) {
    if (!warned1) {
      console.warn('can\'t simulate without once calling simulations(true)'); //eslint-disable-line no-console
      warned1 = true;
    }
    if (!isDev && !isTest && !warned2) {
      console.warn('don\'t use simulation outside dev'); //eslint-disable-line no-console
      warned2 = true;
    }
    return {};
  }
  return pseudos.reduce(function (o, p) {
    return o['data-simulate-' + simple(p)] = '', o;
  }, {});
}

/**** labels ****/
// toggle for debug labels.
// *shouldn't* have to mess with this manually
var hasLabels = isDev;

function cssLabels(bool) {
  hasLabels = !!bool;
}

// takes a string, converts to lowercase, strips out nonalphanumeric.
function simple(str) {
  var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return str.toLowerCase().replace(/[^a-z0-9]/g, char);
}

// hashes a string to something 'unique'
// we use this to generate ids for styles


function hashify(obj) {
  var str = JSON.stringify(obj);
  var toRet = (0, _hash2.default)(str).toString(36);
  if (obj.label && obj.label.length > 0 && isDev) {
    return simple(obj.label.join('.'), '-') + '-' + toRet;
  }
  return toRet;
}

// of shape { 'data-css-<id>': '' }
function isLikeRule(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) {
    return false;
  }
  return !!/data\-css\-([a-zA-Z0-9\-_]+)/.exec(keys[0]);
}

// extracts id from a { 'data-css-<id>': ''} like object
function idFor(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) throw new Error('not a rule');
  var regex = /data\-css\-([a-zA-Z0-9\-_]+)/;
  var match = regex.exec(keys[0]);
  if (!match) throw new Error('not a rule');
  return match[1];
}

// from https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  if (selector.indexOf(',') === -1) {
    return [selector];
  }

  var indices = [],
      res = [],
      inParen = 0,
      o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
    /*eslint-enable no-cond-assign*/
    switch (o[0]) {
      case '(':
        inParen++;break;
      case ')':
        inParen--;break;
      case ',':
        if (inParen) break;indices.push(o.index);
    }
  }
  for (o = indices.length; o--;) {
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res;
}

function selector(id, path) {
  if (!id) {
    return path.replace(/\&/g, '');
  }
  if (!path) return '.css-' + id + ',[data-css-' + id + ']';

  var x = splitSelector(path).map(function (x) {
    return x.indexOf('&') >= 0 ? [x.replace(/\&/mg, '.css-' + id), x.replace(/\&/mg, '[data-css-' + id + ']')].join(',') // todo - make sure each sub selector has an &
    : '.css-' + id + x + ',[data-css-' + id + ']' + x;
  }).join(',');

  if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
    x += ',.css-' + id + '[data-simulate-' + simple(path) + '],[data-css-' + id + '][data-simulate-' + simple(path) + ']';
  }
  return x;
}

// end https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61


function toCSS(_ref) {
  var selector = _ref.selector,
      style = _ref.style;

  var result = plugins.transform({ selector: selector, style: style });
  return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
}

function deconstruct(style) {
  // we can be sure it's not infinitely nested here
  var plain = void 0,
      selects = void 0,
      medias = void 0,
      supports = void 0;
  Object.keys(style).forEach(function (key) {
    if (key.indexOf('&') >= 0) {
      selects = selects || {};
      selects[key] = style[key];
    } else if (key.indexOf('@media') === 0) {
      medias = medias || {};
      medias[key] = deconstruct(style[key]);
    } else if (key.indexOf('@supports') === 0) {
      supports = supports || {};
      supports[key] = deconstruct(style[key]);
    } else if (key === 'label') {
      if (style.label.length > 0) {
        plain = plain || {};
        plain.label = hasLabels ? style.label.join('.') : '';
      }
    } else {
      plain = plain || {};
      plain[key] = style[key];
    }
  });
  return { plain: plain, selects: selects, medias: medias, supports: supports };
}

function deconstructedStyleToCSS(id, style) {
  var css = [];

  // plugins here
  var plain = style.plain,
      selects = style.selects,
      medias = style.medias,
      supports = style.supports;

  if (plain) {
    css.push(toCSS({ style: plain, selector: selector(id) }));
  }
  if (selects) {
    Object.keys(selects).forEach(function (key) {
      return css.push(toCSS({ style: selects[key], selector: selector(id, key) }));
    });
  }
  if (medias) {
    Object.keys(medias).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, medias[key]).join('') + '}');
    });
  }
  if (supports) {
    Object.keys(supports).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, supports[key]).join('') + '}');
    });
  }
  return css;
}

// this cache to track which rules have
// been inserted into the stylesheet
var inserted = styleSheet.inserted = {};

// and helpers to insert rules into said styleSheet
function insert(spec) {
  if (!inserted[spec.id]) {
    inserted[spec.id] = true;
    var deconstructed = deconstruct(spec.style);
    var rules = deconstructedStyleToCSS(spec.id, deconstructed);
    inserted[spec.id] = isBrowser ? true : rules;
    rules.forEach(function (cssRule) {
      return styleSheet.insert(cssRule);
    });
  }
}

// a simple cache to store generated rules
var registered = styleSheet.registered = {};
function register(spec) {
  if (!registered[spec.id]) {
    registered[spec.id] = spec;
  }
}

function _getRegistered(rule) {
  if (isLikeRule(rule)) {
    var ret = registered[idFor(rule)];
    if (ret == null) {
      throw new Error('[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79');
    }
    return ret;
  }
  return rule;
}

// todo - perf
var ruleCache = {};
function toRule(spec) {
  register(spec);
  insert(spec);

  if (ruleCache[spec.id]) {
    return ruleCache[spec.id];
  }

  var ret = _defineProperty({}, 'data-css-' + spec.id, hasLabels ? spec.label || '' : '');
  Object.defineProperty(ret, 'toString', {
    enumerable: false, value: function value() {
      return 'css-' + spec.id;
    }
  });
  ruleCache[spec.id] = ret;
  return ret;
}

function log() {
  //eslint-disable-line no-unused-vars
  console.log(this); //eslint-disable-line no-console
  return this;
}

function isSelector(key) {
  var possibles = [':', '.', '[', '>', ' '],
      found = false,
      ch = key.charAt(0);
  for (var i = 0; i < possibles.length; i++) {
    if (ch === possibles[i]) {
      found = true;
      break;
    }
  }
  return found || key.indexOf('&') >= 0;
}

function joinSelectors(a, b) {
  var as = splitSelector(a).map(function (a) {
    return !(a.indexOf('&') >= 0) ? '&' + a : a;
  });
  var bs = splitSelector(b).map(function (b) {
    return !(b.indexOf('&') >= 0) ? '&' + b : b;
  });

  return bs.reduce(function (arr, b) {
    return arr.concat(as.map(function (a) {
      return b.replace(/\&/g, a);
    }));
  }, []).join(',');
}

function joinMediaQueries(a, b) {
  return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
}

function isMediaQuery(key) {
  return key.indexOf('@media') === 0;
}

function isSupports(key) {
  return key.indexOf('@supports') === 0;
}

function joinSupports(a, b) {
  return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
}

// flatten a nested array
function flatten(inArr) {
  var arr = [];
  for (var i = 0; i < inArr.length; i++) {
    if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
  }
  return arr;
}

var prefixedPseudoSelectors = {
  '::placeholder': ['::-webkit-input-placeholder', '::-moz-placeholder', '::-ms-input-placeholder'],
  ':fullscreen': [':-webkit-full-screen', ':-moz-full-screen', ':-ms-fullscreen']

  // mutable! modifies dest.
};function build(dest, _ref2) {
  var _ref2$selector = _ref2.selector,
      selector = _ref2$selector === undefined ? '' : _ref2$selector,
      _ref2$mq = _ref2.mq,
      mq = _ref2$mq === undefined ? '' : _ref2$mq,
      _ref2$supp = _ref2.supp,
      supp = _ref2$supp === undefined ? '' : _ref2$supp,
      _ref2$src = _ref2.src,
      src = _ref2$src === undefined ? {} : _ref2$src;


  if (!Array.isArray(src)) {
    src = [src];
  }
  src = flatten(src);

  src.forEach(function (_src) {
    if (isLikeRule(_src)) {
      var reg = _getRegistered(_src);
      if (reg.type !== 'css') {
        throw new Error('cannot merge this rule');
      }
      _src = reg.style;
    }
    _src = (0, _clean2.default)(_src);
    if (_src && _src.composes) {
      build(dest, { selector: selector, mq: mq, supp: supp, src: _src.composes });
    }
    Object.keys(_src || {}).forEach(function (key) {
      if (isSelector(key)) {

        if (prefixedPseudoSelectors[key]) {
          prefixedPseudoSelectors[key].forEach(function (p) {
            return build(dest, { selector: joinSelectors(selector, p), mq: mq, supp: supp, src: _src[key] });
          });
        }

        build(dest, { selector: joinSelectors(selector, key), mq: mq, supp: supp, src: _src[key] });
      } else if (isMediaQuery(key)) {
        build(dest, { selector: selector, mq: joinMediaQueries(mq, key), supp: supp, src: _src[key] });
      } else if (isSupports(key)) {
        build(dest, { selector: selector, mq: mq, supp: joinSupports(supp, key), src: _src[key] });
      } else if (key === 'composes') {
        // ignore, we already dealth with it
      } else {
        var _dest = dest;
        if (supp) {
          _dest[supp] = _dest[supp] || {};
          _dest = _dest[supp];
        }
        if (mq) {
          _dest[mq] = _dest[mq] || {};
          _dest = _dest[mq];
        }
        if (selector) {
          _dest[selector] = _dest[selector] || {};
          _dest = _dest[selector];
        }

        if (key === 'label') {
          if (hasLabels) {
            dest.label = dest.label.concat(_src.label);
          }
        } else {
          _dest[key] = _src[key];
        }
      }
    });
  });
}

function _css(rules) {
  var style = { label: [] };
  build(style, { src: rules }); // mutative! but worth it.

  var spec = {
    id: hashify(style),
    style: style, label: hasLabels ? style.label.join('.') : '',
    type: 'css'
  };
  return toRule(spec);
}

var nullrule = {
  // 'data-css-nil': ''
};
Object.defineProperty(nullrule, 'toString', {
  enumerable: false, value: function value() {
    return 'css-nil';
  }
});

var inputCaches = typeof WeakMap !== 'undefined' ? [nullrule, new WeakMap(), new WeakMap(), new WeakMap()] : [nullrule];

var warnedWeakMapError = false;
function multiIndexCache(fn) {
  return function (args) {
    if (inputCaches[args.length]) {
      var coi = inputCaches[args.length];
      var ctr = 0;
      while (ctr < args.length - 1) {
        if (!coi.has(args[ctr])) {
          coi.set(args[ctr], new WeakMap());
        }
        coi = coi.get(args[ctr]);
        ctr++;
      }
      if (coi.has(args[args.length - 1])) {
        var ret = coi.get(args[ctr]);

        if (registered[ret.toString().substring(4)]) {
          // make sure it hasn't been flushed
          return ret;
        }
      }
    }
    var value = fn(args);
    if (inputCaches[args.length]) {
      var _ctr = 0,
          _coi = inputCaches[args.length];
      while (_ctr < args.length - 1) {
        _coi = _coi.get(args[_ctr]);
        _ctr++;
      }
      try {
        _coi.set(args[_ctr], value);
      } catch (err) {
        if (isDev && !warnedWeakMapError) {
          var _console;

          warnedWeakMapError = true;
          (_console = console).warn.apply(_console, ['failed setting the WeakMap cache for args:'].concat(_toConsumableArray(args))); // eslint-disable-line no-console
          console.warn('this should NOT happen, please file a bug on the github repo.'); // eslint-disable-line no-console
        }
      }
    }
    return value;
  };
}

var cachedCss = typeof WeakMap !== 'undefined' ? multiIndexCache(_css) : _css;

function css() {
  for (var _len2 = arguments.length, rules = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    rules[_key2] = arguments[_key2];
  }

  if (rules[0] && rules[0].length && rules[0].raw) {
    throw new Error('you forgot to include glamor/babel in your babel plugins.');
  }

  rules = (0, _clean2.default)(rules);
  if (!rules) {
    return nullrule;
  }

  return cachedCss(rules);
}

css.insert = function (css) {
  var spec = {
    id: hashify(css),
    css: css,
    type: 'raw'
  };
  register(spec);
  if (!inserted[spec.id]) {
    styleSheet.insert(spec.css);
    inserted[spec.id] = isBrowser ? true : [spec.css];
  }
};

var insertRule = exports.insertRule = css.insert;

css.global = function (selector, style) {
  style = (0, _clean2.default)(style);
  if (style) {
    return css.insert(toCSS({ selector: selector, style: style }));
  }
};

var insertGlobal = exports.insertGlobal = css.global;

function insertKeyframe(spec) {
  if (!inserted[spec.id]) {
    var inner = Object.keys(spec.keyframes).map(function (kf) {
      var result = plugins.keyframes.transform({ id: spec.id, name: kf, style: spec.keyframes[kf] });
      return result.name + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
    }).join('');

    var rules = ['-webkit-', '-moz-', '-o-', ''].map(function (prefix) {
      return '@' + prefix + 'keyframes ' + (spec.name + '_' + spec.id) + '{' + inner + '}';
    });
    rules.forEach(function (rule) {
      return styleSheet.insert(rule);
    });

    inserted[spec.id] = isBrowser ? true : rules;
  }
}
css.keyframes = function (name, kfs) {
  if (!kfs) {
    kfs = name, name = 'animation';
  }

  // do not ignore empty keyframe definitions for now.
  kfs = (0, _clean2.default)(kfs) || {};
  var spec = {
    id: hashify({ name: name, kfs: kfs }),
    type: 'keyframes',
    name: name,
    keyframes: kfs
  };
  register(spec);
  insertKeyframe(spec);
  return name + '_' + spec.id;
};

// we don't go all out for fonts as much, giving a simple font loading strategy
// use a fancier lib if you need moar power
css.fontFace = function (font) {
  font = (0, _clean2.default)(font);
  var spec = {
    id: hashify(font),
    type: 'font-face',
    font: font
  };
  register(spec);
  insertFontFace(spec);

  return font.fontFamily;
};

var fontFace = exports.fontFace = css.fontFace;
var keyframes = exports.keyframes = css.keyframes;

function insertFontFace(spec) {
  if (!inserted[spec.id]) {
    var rule = '@font-face{' + (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) + '}';
    styleSheet.insert(rule);
    inserted[spec.id] = isBrowser ? true : [rule];
  }
}

// rehydrate the insertion cache with ids sent from
// renderStatic / renderStaticOptimized
function rehydrate(ids) {
  // load up ids
  (0, _objectAssign2.default)(inserted, ids.reduce(function (o, i) {
    return o[i] = true, o;
  }, {}));
  // assume css loaded separately
}

// clears out the cache and empties the stylesheet
// best for tests, though there might be some value for SSR.

function flush() {
  inserted = styleSheet.inserted = {};
  registered = styleSheet.registered = {};
  ruleCache = {};
  styleSheet.flush();
  styleSheet.inject();
}

var presets = exports.presets = {
  mobile: '(min-width: 400px)',
  Mobile: '@media (min-width: 400px)',
  phablet: '(min-width: 550px)',
  Phablet: '@media (min-width: 550px)',
  tablet: '(min-width: 750px)',
  Tablet: '@media (min-width: 750px)',
  desktop: '(min-width: 1000px)',
  Desktop: '@media (min-width: 1000px)',
  hd: '(min-width: 1200px)',
  Hd: '@media (min-width: 1200px)'
};

var style = exports.style = css;

function select(selector) {
  for (var _len3 = arguments.length, styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    styles[_key3 - 1] = arguments[_key3];
  }

  if (!selector) {
    return style(styles);
  }
  return css(_defineProperty({}, selector, styles));
}
var $ = exports.$ = select;

function parent(selector) {
  for (var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    styles[_key4 - 1] = arguments[_key4];
  }

  return css(_defineProperty({}, selector + ' &', styles));
}

var merge = exports.merge = css;
var compose = exports.compose = css;

function media(query) {
  for (var _len5 = arguments.length, rules = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    rules[_key5 - 1] = arguments[_key5];
  }

  return css(_defineProperty({}, '@media ' + query, rules));
}

function pseudo(selector) {
  for (var _len6 = arguments.length, styles = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    styles[_key6 - 1] = arguments[_key6];
  }

  return css(_defineProperty({}, selector, styles));
}

// allllll the pseudoclasses

function active(x) {
  return pseudo(':active', x);
}

function any(x) {
  return pseudo(':any', x);
}

function checked(x) {
  return pseudo(':checked', x);
}

function disabled(x) {
  return pseudo(':disabled', x);
}

function empty(x) {
  return pseudo(':empty', x);
}

function enabled(x) {
  return pseudo(':enabled', x);
}

function _default(x) {
  return pseudo(':default', x); // note '_default' name
}

function first(x) {
  return pseudo(':first', x);
}

function firstChild(x) {
  return pseudo(':first-child', x);
}

function firstOfType(x) {
  return pseudo(':first-of-type', x);
}

function fullscreen(x) {
  return pseudo(':fullscreen', x);
}

function focus(x) {
  return pseudo(':focus', x);
}

function hover(x) {
  return pseudo(':hover', x);
}

function indeterminate(x) {
  return pseudo(':indeterminate', x);
}

function inRange(x) {
  return pseudo(':in-range', x);
}

function invalid(x) {
  return pseudo(':invalid', x);
}

function lastChild(x) {
  return pseudo(':last-child', x);
}

function lastOfType(x) {
  return pseudo(':last-of-type', x);
}

function left(x) {
  return pseudo(':left', x);
}

function link(x) {
  return pseudo(':link', x);
}

function onlyChild(x) {
  return pseudo(':only-child', x);
}

function onlyOfType(x) {
  return pseudo(':only-of-type', x);
}

function optional(x) {
  return pseudo(':optional', x);
}

function outOfRange(x) {
  return pseudo(':out-of-range', x);
}

function readOnly(x) {
  return pseudo(':read-only', x);
}

function readWrite(x) {
  return pseudo(':read-write', x);
}

function required(x) {
  return pseudo(':required', x);
}

function right(x) {
  return pseudo(':right', x);
}

function root(x) {
  return pseudo(':root', x);
}

function scope(x) {
  return pseudo(':scope', x);
}

function target(x) {
  return pseudo(':target', x);
}

function valid(x) {
  return pseudo(':valid', x);
}

function visited(x) {
  return pseudo(':visited', x);
}

// parameterized pseudoclasses
function dir(p, x) {
  return pseudo(':dir(' + p + ')', x);
}
function lang(p, x) {
  return pseudo(':lang(' + p + ')', x);
}
function not(p, x) {
  // should this be a plugin?
  var selector = p.split(',').map(function (x) {
    return x.trim();
  }).map(function (x) {
    return ':not(' + x + ')';
  });
  if (selector.length === 1) {
    return pseudo(':not(' + p + ')', x);
  }
  return select(selector.join(''), x);
}
function nthChild(p, x) {
  return pseudo(':nth-child(' + p + ')', x);
}
function nthLastChild(p, x) {
  return pseudo(':nth-last-child(' + p + ')', x);
}
function nthLastOfType(p, x) {
  return pseudo(':nth-last-of-type(' + p + ')', x);
}
function nthOfType(p, x) {
  return pseudo(':nth-of-type(' + p + ')', x);
}

// pseudoelements
function after(x) {
  return pseudo('::after', x);
}
function before(x) {
  return pseudo('::before', x);
}
function firstLetter(x) {
  return pseudo('::first-letter', x);
}
function firstLine(x) {
  return pseudo('::first-line', x);
}
function selection(x) {
  return pseudo('::selection', x);
}
function backdrop(x) {
  return pseudo('::backdrop', x);
}
function placeholder(x) {
  // https://github.com/threepointone/glamor/issues/14
  return css({ '::placeholder': x });
}

/*** helpers for web components ***/
// https://github.com/threepointone/glamor/issues/16

function cssFor() {
  for (var _len7 = arguments.length, rules = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    rules[_key7] = arguments[_key7];
  }

  rules = (0, _clean2.default)(rules);
  return rules ? rules.map(function (r) {
    var style = { label: [] };
    build(style, { src: r }); // mutative! but worth it.
    return deconstructedStyleToCSS(hashify(style), deconstruct(style)).join('');
  }).join('') : '';
}

function attribsFor() {
  for (var _len8 = arguments.length, rules = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    rules[_key8] = arguments[_key8];
  }

  rules = (0, _clean2.default)(rules);
  var htmlAttributes = rules ? rules.map(function (rule) {
    idFor(rule); // throwaway check for rule
    var key = Object.keys(rule)[0],
        value = rule[key];
    return key + '="' + (value || '') + '"';
  }).join(' ') : '';

  return htmlAttributes;
}

/***/ }),

/***/ "./node_modules/glamor/lib/plugins.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.PluginSet = PluginSet;
exports.fallbacks = fallbacks;
exports.contentWrap = contentWrap;
exports.prefixes = prefixes;

var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _CSSPropertyOperations = __webpack_require__("./node_modules/glamor/lib/CSSPropertyOperations/index.js");

var _prefixer = __webpack_require__("./node_modules/glamor/lib/prefixer.js");

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDev = function (x) {
  return x === 'development' || !x;
}("development");

function PluginSet(initial) {
  this.fns = initial || [];
}

(0, _objectAssign2.default)(PluginSet.prototype, {
  add: function add() {
    var _this = this;

    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    fns.forEach(function (fn) {
      if (_this.fns.indexOf(fn) >= 0) {
        if (isDev) {
          console.warn('adding the same plugin again, ignoring'); //eslint-disable-line no-console
        }
      } else {
        _this.fns = [fn].concat(_this.fns);
      }
    });
  },
  remove: function remove(fn) {
    this.fns = this.fns.filter(function (x) {
      return x !== fn;
    });
  },
  clear: function clear() {
    this.fns = [];
  },
  transform: function transform(o) {
    return this.fns.reduce(function (o, fn) {
      return fn(o);
    }, o);
  }
});

function fallbacks(node) {
  var hasArray = Object.keys(node.style).map(function (x) {
    return Array.isArray(node.style[x]);
  }).indexOf(true) >= 0;
  if (hasArray) {
    var style = node.style;

    var flattened = Object.keys(style).reduce(function (o, key) {
      o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, _CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
      return o;
    }, {});
    // todo - 
    // flatten arrays which haven't been flattened yet 
    return (0, _objectAssign2.default)({}, node, { style: flattened });
  }
  return node;
}

var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit'];

function contentWrap(node) {
  if (node.style.content) {
    var cont = node.style.content;
    if (contentValues.indexOf(cont) >= 0) {
      return node;
    }
    if (/^(attr|calc|counters?|url)\(/.test(cont)) {
      return node;
    }
    if (cont.charAt(0) === cont.charAt(cont.length - 1) && (cont.charAt(0) === '"' || cont.charAt(0) === "'")) {
      return node;
    }
    return _extends({}, node, { style: _extends({}, node.style, { content: '"' + cont + '"' }) });
  }
  return node;
}

function prefixes(node) {
  return (0, _objectAssign2.default)({}, node, { style: (0, _prefixer2.default)(_extends({}, node.style)) });
}

/***/ }),

/***/ "./node_modules/glamor/lib/prefixer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixer;

var _staticData = __webpack_require__("./node_modules/inline-style-prefixer/static/staticData.js");

var _staticData2 = _interopRequireDefault(_staticData);

var _prefixProperty = __webpack_require__("./node_modules/inline-style-prefixer/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__("./node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _cursor = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/cursor.js");

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/crossFade.js");

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/filter.js");

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/flex.js");

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js");

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/gradient.js");

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/imageSet.js");

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/position.js");

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/sizing.js");

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/transition.js");

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default]; // custom facade for inline-style-prefixer

var prefixMap = _staticData2.default.prefixMap;

function prefixer(style) {
  for (var property in style) {
    var value = style[property];

    var processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

    // only modify the value if it was touched
    // by any plugin to prevent unnecessary mutations
    if (processedValue) {
      style[property] = processedValue;
    }

    (0, _prefixProperty2.default)(prefixMap, property, style);
  }
  return style;
}

/***/ }),

/***/ "./node_modules/glamor/lib/sheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleSheet = StyleSheet;

var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* 

high performance StyleSheet for css-in-js systems 

- uses multiple style tags behind the scenes for millions of rules 
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side 


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject() 
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }') 
- appends a css rule into the stylesheet 

styleSheet.flush() 
- empties the stylesheet of all its contents


*/

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }

  // this weirdness brought to you by firefox 
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

var isBrowser = typeof window !== 'undefined';
var isDev = "development" === 'development' || !"development"; //(x => (x === 'development') || !x)(process.env.NODE_ENV)
var isTest = "development" === 'test';

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
}();

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-glamor', '');
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

function StyleSheet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$speedy = _ref.speedy,
      speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

  this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
  this.sheet = undefined;
  this.tags = [];
  this.maxLength = maxLength;
  this.ctr = 0;
}

(0, _objectAssign2.default)(StyleSheet.prototype, {
  getSheet: function getSheet() {
    return sheetForTag(last(this.tags));
  },
  inject: function inject() {
    var _this = this;

    if (this.injected) {
      throw new Error('already injected stylesheet!');
    }
    if (isBrowser) {
      this.tags[0] = makeStyleTag();
    } else {
      // server side 'polyfill'. just enough behavior to be useful.
      this.sheet = {
        cssRules: [],
        insertRule: function insertRule(rule) {
          // enough 'spec compliance' to be able to extract the rules later  
          // in other words, just the cssText field 
          _this.sheet.cssRules.push({ cssText: rule });
        }
      };
    }
    this.injected = true;
  },
  speedy: function speedy(bool) {
    if (this.ctr !== 0) {
      throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
    }
    this.isSpeedy = !!bool;
  },
  _insert: function _insert(rule) {
    // this weirdness for perf, and chrome's weird bug 
    // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
    try {
      var sheet = this.getSheet();
      sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length);
    } catch (e) {
      if (isDev) {
        // might need beter dx for this 
        console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
      }
    }
  },
  insert: function insert(rule) {

    if (isBrowser) {
      // this is the ultrafast version, works across browsers 
      if (this.isSpeedy && this.getSheet().insertRule) {
        this._insert(rule);
      }
      // more browser weirdness. I don't even know    
      // else if(this.tags.length > 0 && this.tags::last().styleSheet) {      
      //   this.tags::last().styleSheet.cssText+= rule
      // }
      else {
          if (rule.indexOf('@import') !== -1) {
            var tag = last(this.tags);
            tag.insertBefore(document.createTextNode(rule), tag.firstChild);
          } else {
            last(this.tags).appendChild(document.createTextNode(rule));
          }
        }
    } else {
      // server side is pretty simple         
      this.sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : this.sheet.cssRules.length);
    }

    this.ctr++;
    if (isBrowser && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag());
    }
    return this.ctr - 1;
  },

  // commenting this out till we decide on v3's decision 
  // _replace(index, rule) {
  //   // this weirdness for perf, and chrome's weird bug 
  //   // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
  //   try {  
  //     let sheet = this.getSheet()        
  //     sheet.deleteRule(index) // todo - correct index here     
  //     sheet.insertRule(rule, index)
  //   }
  //   catch(e) {
  //     if(isDev) {
  //       // might need beter dx for this 
  //       console.warn('whoops, problem replacing rule', rule) //eslint-disable-line no-console
  //     }          
  //   }          

  // }
  // replace(index, rule) {
  //   if(isBrowser) {
  //     if(this.isSpeedy && this.getSheet().insertRule) {
  //       this._replace(index, rule)
  //     }
  //     else {
  //       let _slot = Math.floor((index  + this.maxLength) / this.maxLength) - 1        
  //       let _index = (index % this.maxLength) + 1
  //       let tag = this.tags[_slot]
  //       tag.replaceChild(document.createTextNode(rule), tag.childNodes[_index])
  //     }
  //   }
  //   else {
  //     let rules = this.sheet.cssRules
  //     this.sheet.cssRules = [ ...rules.slice(0, index), { cssText: rule }, ...rules.slice(index + 1) ]
  //   }
  // }
  delete: function _delete(index) {
    // we insert a blank rule when 'deleting' so previously returned indexes remain stable
    return this.replace(index, '');
  },
  flush: function flush() {
    if (isBrowser) {
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.sheet = null;
      this.ctr = 0;
      // todo - look for remnants in document.styleSheets
    } else {
      // simpler on server 
      this.sheet.cssRules = [];
    }
    this.injected = false;
  },
  rules: function rules() {
    if (!isBrowser) {
      return this.sheet.cssRules;
    }
    var arr = [];
    this.tags.forEach(function (tag) {
      return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
    });
    return arr;
  }
});

/***/ }),

/***/ "./node_modules/glamorous/dist/glamorous.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ThemeProvider */
/* unused harmony export withTheme */
/* unused harmony export A */
/* unused harmony export Abbr */
/* unused harmony export Acronym */
/* unused harmony export Address */
/* unused harmony export Applet */
/* unused harmony export Area */
/* unused harmony export Article */
/* unused harmony export Aside */
/* unused harmony export Audio */
/* unused harmony export B */
/* unused harmony export Base */
/* unused harmony export Basefont */
/* unused harmony export Bdi */
/* unused harmony export Bdo */
/* unused harmony export Bgsound */
/* unused harmony export Big */
/* unused harmony export Blink */
/* unused harmony export Blockquote */
/* unused harmony export Body */
/* unused harmony export Br */
/* unused harmony export Button */
/* unused harmony export Canvas */
/* unused harmony export Caption */
/* unused harmony export Center */
/* unused harmony export Cite */
/* unused harmony export Code */
/* unused harmony export Col */
/* unused harmony export Colgroup */
/* unused harmony export Command */
/* unused harmony export Content */
/* unused harmony export Data */
/* unused harmony export Datalist */
/* unused harmony export Dd */
/* unused harmony export Del */
/* unused harmony export Details */
/* unused harmony export Dfn */
/* unused harmony export Dialog */
/* unused harmony export Dir */
/* unused harmony export Div */
/* unused harmony export Dl */
/* unused harmony export Dt */
/* unused harmony export Element */
/* unused harmony export Em */
/* unused harmony export Embed */
/* unused harmony export Fieldset */
/* unused harmony export Figcaption */
/* unused harmony export Figure */
/* unused harmony export Font */
/* unused harmony export Footer */
/* unused harmony export Form */
/* unused harmony export Frame */
/* unused harmony export Frameset */
/* unused harmony export H1 */
/* unused harmony export H2 */
/* unused harmony export H3 */
/* unused harmony export H4 */
/* unused harmony export H5 */
/* unused harmony export H6 */
/* unused harmony export Head */
/* unused harmony export Header */
/* unused harmony export Hgroup */
/* unused harmony export Hr */
/* unused harmony export Html */
/* unused harmony export I */
/* unused harmony export Iframe */
/* unused harmony export Image */
/* unused harmony export Img */
/* unused harmony export Input */
/* unused harmony export Ins */
/* unused harmony export Isindex */
/* unused harmony export Kbd */
/* unused harmony export Keygen */
/* unused harmony export Label */
/* unused harmony export Legend */
/* unused harmony export Li */
/* unused harmony export Link */
/* unused harmony export Listing */
/* unused harmony export Main */
/* unused harmony export MapTag */
/* unused harmony export Mark */
/* unused harmony export Marquee */
/* unused harmony export MathTag */
/* unused harmony export Menu */
/* unused harmony export Menuitem */
/* unused harmony export Meta */
/* unused harmony export Meter */
/* unused harmony export Multicol */
/* unused harmony export Nav */
/* unused harmony export Nextid */
/* unused harmony export Nobr */
/* unused harmony export Noembed */
/* unused harmony export Noframes */
/* unused harmony export Noscript */
/* unused harmony export ObjectTag */
/* unused harmony export Ol */
/* unused harmony export Optgroup */
/* unused harmony export Option */
/* unused harmony export Output */
/* unused harmony export P */
/* unused harmony export Param */
/* unused harmony export Picture */
/* unused harmony export Plaintext */
/* unused harmony export Pre */
/* unused harmony export Progress */
/* unused harmony export Q */
/* unused harmony export Rb */
/* unused harmony export Rbc */
/* unused harmony export Rp */
/* unused harmony export Rt */
/* unused harmony export Rtc */
/* unused harmony export Ruby */
/* unused harmony export S */
/* unused harmony export Samp */
/* unused harmony export Script */
/* unused harmony export Section */
/* unused harmony export Select */
/* unused harmony export Shadow */
/* unused harmony export Slot */
/* unused harmony export Small */
/* unused harmony export Source */
/* unused harmony export Spacer */
/* unused harmony export Span */
/* unused harmony export Strike */
/* unused harmony export Strong */
/* unused harmony export Style */
/* unused harmony export Sub */
/* unused harmony export Summary */
/* unused harmony export Sup */
/* unused harmony export Svg */
/* unused harmony export Table */
/* unused harmony export Tbody */
/* unused harmony export Td */
/* unused harmony export Template */
/* unused harmony export Textarea */
/* unused harmony export Tfoot */
/* unused harmony export Th */
/* unused harmony export Thead */
/* unused harmony export Time */
/* unused harmony export Title */
/* unused harmony export Tr */
/* unused harmony export Track */
/* unused harmony export Tt */
/* unused harmony export U */
/* unused harmony export Ul */
/* unused harmony export Var */
/* unused harmony export Video */
/* unused harmony export Wbr */
/* unused harmony export Xmp */
/* unused harmony export AltGlyph */
/* unused harmony export AltGlyphDef */
/* unused harmony export AltGlyphItem */
/* unused harmony export Animate */
/* unused harmony export AnimateColor */
/* unused harmony export AnimateMotion */
/* unused harmony export AnimateTransform */
/* unused harmony export Animation */
/* unused harmony export Circle */
/* unused harmony export ClipPath */
/* unused harmony export ColorProfile */
/* unused harmony export Cursor */
/* unused harmony export Defs */
/* unused harmony export Desc */
/* unused harmony export Discard */
/* unused harmony export Ellipse */
/* unused harmony export FeBlend */
/* unused harmony export FeColorMatrix */
/* unused harmony export FeComponentTransfer */
/* unused harmony export FeComposite */
/* unused harmony export FeConvolveMatrix */
/* unused harmony export FeDiffuseLighting */
/* unused harmony export FeDisplacementMap */
/* unused harmony export FeDistantLight */
/* unused harmony export FeDropShadow */
/* unused harmony export FeFlood */
/* unused harmony export FeFuncA */
/* unused harmony export FeFuncB */
/* unused harmony export FeFuncG */
/* unused harmony export FeFuncR */
/* unused harmony export FeGaussianBlur */
/* unused harmony export FeImage */
/* unused harmony export FeMerge */
/* unused harmony export FeMergeNode */
/* unused harmony export FeMorphology */
/* unused harmony export FeOffset */
/* unused harmony export FePointLight */
/* unused harmony export FeSpecularLighting */
/* unused harmony export FeSpotLight */
/* unused harmony export FeTile */
/* unused harmony export FeTurbulence */
/* unused harmony export Filter */
/* unused harmony export FontFace */
/* unused harmony export FontFaceFormat */
/* unused harmony export FontFaceName */
/* unused harmony export FontFaceSrc */
/* unused harmony export FontFaceUri */
/* unused harmony export ForeignObject */
/* unused harmony export G */
/* unused harmony export Glyph */
/* unused harmony export GlyphRef */
/* unused harmony export Handler */
/* unused harmony export Hatch */
/* unused harmony export Hatchpath */
/* unused harmony export Hkern */
/* unused harmony export Line */
/* unused harmony export LinearGradient */
/* unused harmony export Listener */
/* unused harmony export Marker */
/* unused harmony export Mask */
/* unused harmony export Mesh */
/* unused harmony export Meshgradient */
/* unused harmony export Meshpatch */
/* unused harmony export Meshrow */
/* unused harmony export Metadata */
/* unused harmony export MissingGlyph */
/* unused harmony export Mpath */
/* unused harmony export Path */
/* unused harmony export Pattern */
/* unused harmony export Polygon */
/* unused harmony export Polyline */
/* unused harmony export Prefetch */
/* unused harmony export RadialGradient */
/* unused harmony export Rect */
/* unused harmony export SetTag */
/* unused harmony export SolidColor */
/* unused harmony export Solidcolor */
/* unused harmony export Stop */
/* unused harmony export Switch */
/* unused harmony export SymbolTag */
/* unused harmony export Tbreak */
/* unused harmony export Text */
/* unused harmony export TextArea */
/* unused harmony export TextPath */
/* unused harmony export Tref */
/* unused harmony export Tspan */
/* unused harmony export Unknown */
/* unused harmony export Use */
/* unused harmony export View */
/* unused harmony export Vkern */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor__ = __webpack_require__("./node_modules/glamor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_glamor__);



var htmlTagNames = [
  "a",
  "abbr",
  "acronym",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "basefont",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "command",
  "content",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "image",
  "img",
  "input",
  "ins",
  "isindex",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "multicol",
  "nav",
  "nextid",
  "nobr",
  "noembed",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "plaintext",
  "pre",
  "progress",
  "q",
  "rb",
  "rbc",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "xmp"
]
;

var svgTagNames = [
  "a",
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "animation",
  "audio",
  "canvas",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "discard",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "handler",
  "hatch",
  "hatchpath",
  "hkern",
  "iframe",
  "image",
  "line",
  "linearGradient",
  "listener",
  "marker",
  "mask",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "prefetch",
  "radialGradient",
  "rect",
  "script",
  "set",
  "solidColor",
  "solidcolor",
  "stop",
  "style",
  "svg",
  "switch",
  "symbol",
  "tbreak",
  "text",
  "textArea",
  "textPath",
  "title",
  "tref",
  "tspan",
  "unknown",
  "use",
  "video",
  "view",
  "vkern"
]
;

var domElements = htmlTagNames.concat(svgTagNames).filter(function (tag, index, array) {
  return array.indexOf(tag) === index;
});

var CHANNEL = '__glamorous__'; /* istanbul ignore next */

var isPreact = false;

var _PropTypes = void 0;

/* istanbul ignore next */
if (isPreact) {
  if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes) {
    _PropTypes = function PropTypes() {
      return _PropTypes;
    };

    ['array', 'bool', 'func', 'number', 'object', 'string', 'symbol', 'any', 'arrayOf', 'element', 'instanceOf', 'node', 'objectOf', 'oneOf', 'oneOfType', 'shape', 'exact'].forEach(function (type) {
      _PropTypes[type] = _PropTypes;
    });
  }
  // copied from preact-compat
  /* eslint-disable no-eq-null, eqeqeq, consistent-return */
  if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children) {
    var Children = {
      map: function map(children, fn, ctx) {
        if (children == null) {
          return null;
        }
        children = Children.toArray(children);
        if (ctx && ctx !== children) {
          fn = fn.bind(ctx);
        }
        return children.map(fn);
      },
      forEach: function forEach(children, fn, ctx) {
        if (children == null) {
          return null;
        }
        children = Children.toArray(children);
        if (ctx && ctx !== children) {
          fn = fn.bind(ctx);
        }
        children.forEach(fn);
      },
      count: function count(children) {
        return children && children.length || 0;
      },
      only: function only(children) {
        children = Children.toArray(children);
        if (children.length !== 1) {
          throw new Error('Children.only() expects only one child.');
        }
        return children[0];
      },
      toArray: function toArray(children) {
        if (children == null) {
          return [];
        }
        return [].concat(children);
      }
    };
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children = Children;
  }
  /* eslint-enable no-eq-null, eqeqeq, consistent-return */
} else if (parseFloat(__WEBPACK_IMPORTED_MODULE_0_react___default.a.version.slice(0, 4)) >= 15.5) {
  /* istanbul ignore next */
  try {
    _PropTypes = __webpack_require__("./node_modules/prop-types/index.js");
    /* istanbul ignore next */
  } catch (error) {
    // ignore
  }
}
/* istanbul ignore next */
_PropTypes = _PropTypes || __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes;

/*
eslint
  import/no-mutable-exports:0,
  import/prefer-default-export:0,
  react/no-deprecated:0
 */

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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

function generateWarningMessage(Comp) {
  var componentName = Comp.displayName || Comp.name || 'FunctionComponent';
  // eslint-disable-next-line max-len
  return 'glamorous warning: Expected component called "' + componentName + '" which uses withTheme to be within a ThemeProvider but none was found.';
}

function withTheme(ComponentToTheme) {
  var _defaultContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$noWarn = _ref.noWarn,
      noWarn = _ref$noWarn === undefined ? false : _ref$noWarn,
      _ref$createElement = _ref.createElement,
      createElement = _ref$createElement === undefined ? true : _ref$createElement;

  var ThemedComponent = function (_React$Component) {
    inherits(ThemedComponent, _React$Component);

    function ThemedComponent() {
      var _temp, _this, _ret;

      classCallCheck(this, ThemedComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.warned = noWarn, _this.state = { theme: {} }, _this.setTheme = function (theme) {
        return _this.setState({ theme: theme });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    // eslint-disable-next-line complexity
    ThemedComponent.prototype.componentWillMount = function componentWillMount() {
      if (!this.context[CHANNEL]) {
        if ("development" !== 'production' && !this.warned) {
          this.warned = true;
          // eslint-disable-next-line no-console
          console.warn(generateWarningMessage(ComponentToTheme));
        }
      }
      var theme = this.props.theme;

      if (this.context[CHANNEL]) {
        // if a theme is provided via props,
        // it takes precedence over context
        this.setTheme(theme ? theme : this.context[CHANNEL].getState());
      } else {
        this.setTheme(theme || {});
      }
    };

    ThemedComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.theme !== nextProps.theme) {
        this.setTheme(nextProps.theme);
      }
    };

    ThemedComponent.prototype.componentDidMount = function componentDidMount() {
      if (this.context[CHANNEL] && !this.props.theme) {
        // subscribe to future theme changes
        this.subscriptionId = this.context[CHANNEL].subscribe(this.setTheme);
      }
    };

    ThemedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      // cleanup subscription
      this.subscriptionId && this.context[CHANNEL].unsubscribe(this.subscriptionId);
    };

    ThemedComponent.prototype.render = function render() {
      if (createElement) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentToTheme, _extends({}, this.props, this.state));
      } else {
        // this allows us to effectively use the GlamorousComponent
        // as our `render` method without going through lifecycle hooks.
        // Also allows us to forward the context in the scenario where
        // a user wants to add more context.
        // eslint-disable-next-line babel/new-cap
        return ComponentToTheme.call(this, _extends({}, this.props, this.state), this.context);
      }
    };

    return ThemedComponent;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

   true ? ThemedComponent.propTypes = {
    theme: _PropTypes.object
  } : void 0;


  var defaultContextTypes = (_defaultContextTypes = {}, _defaultContextTypes[CHANNEL] = _PropTypes.object, _defaultContextTypes);

  var userDefinedContextTypes = null;

  // configure the contextTypes to be settable by the user,
  // however also retaining the glamorous channel.
  Object.defineProperty(ThemedComponent, 'contextTypes', {
    enumerable: true,
    configurable: true,
    set: function set$$1(value) {
      userDefinedContextTypes = value;
    },
    get: function get$$1() {
      // if the user has provided a contextTypes definition,
      // merge the default context types with the provided ones.
      if (userDefinedContextTypes) {
        return _extends({}, defaultContextTypes, userDefinedContextTypes);
      }
      return defaultContextTypes;
    }
  });

  return ThemedComponent;
}

var isFunction_1 = isFunction;

var toString = Object.prototype.toString;

function isFunction (fn) {
  var string = toString.call(fn);
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
}

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var isobject = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

function isObjectObject(o) {
  return isobject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

var isPlainObject = function isPlainObject(o) {
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

function createBroadcast (initialState) {
  var listeners = {};
  var id = 1;
  var _state = initialState;

  function getState () {
    return _state
  }

  function setState (state) {
    _state = state;
    var keys = Object.keys(listeners);
    var i = 0;
    var len = keys.length;
    for (; i < len; i++) {
      // if a listener gets unsubscribed during setState we just skip it
      if (listeners[keys[i]]) { listeners[keys[i]](state); }
    }
  }

  // subscribe to changes and return the subscriptionId
  function subscribe (listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function.')
    }
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    return currentId
  }

  // remove subscription by removing the listener function
  function unsubscribe (id) {
    listeners[id] = undefined;
  }

  return { getState: getState, setState: setState, subscribe: subscribe, unsubscribe: unsubscribe }
}

var _ThemeProvider$childC, _ThemeProvider$contex;

/**
 * This is a component which will provide a theme to the entire tree
 * via context and event listener
 * (because pure components block context updates)
 * inspired by the styled-components implementation
 * https://github.com/styled-components/styled-components
 * @param {Object} theme the theme object..
 */

var ThemeProvider = function (_React$Component) {
  inherits(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _temp, _this, _ret;

    classCallCheck(this, ThemeProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.setOuterTheme = function (theme) {
      _this.outerTheme = theme;
      if (_this.broadcast !== undefined) {
        _this.publishTheme();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  // create theme, by merging with outer theme, if present
  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;
    if (isFunction_1(theme)) {
      var mergedTheme = theme(this.outerTheme);
      if (!isPlainObject(mergedTheme)) {
        throw new Error('[ThemeProvider] Please return an object from your theme function, ' + 'i.e. theme={() => ({})}!');
      }
      return mergedTheme;
    }
    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CHANNEL] = this.broadcast, _ref;
  };

  ThemeProvider.prototype.publishTheme = function publishTheme(theme) {
    this.broadcast.setState(this.getTheme(theme));
  };

  ThemeProvider.prototype.componentDidMount = function componentDidMount() {
    // create a new subscription for keeping track of outer theme, if present
    if (this.context[CHANNEL]) {
      this.subscriptionId = this.context[CHANNEL].subscribe(this.setOuterTheme);
    }
  };

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    // set broadcast state by merging outer theme with own
    if (this.context[CHANNEL]) {
      this.setOuterTheme(this.context[CHANNEL].getState());
    }
    this.broadcast = createBroadcast(this.getTheme(this.props.theme));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.publishTheme(nextProps.theme);
    }
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    this.subscriptionId && this.context[CHANNEL].unsubscribe(this.subscriptionId);
  };

  ThemeProvider.prototype.render = function render() {
    return this.props.children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children) : null;
  };

  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = _PropTypes.object.isRequired, _ThemeProvider$childC);

ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL] = _PropTypes.object, _ThemeProvider$contex);

 true ? ThemeProvider.propTypes = {
  theme: _PropTypes.oneOfType([_PropTypes.object, _PropTypes.func]).isRequired,
  children: _PropTypes.node
} : void 0;

/**
 * This function takes a className string and gets all the
 * associated glamor styles. It's used to merge glamor styles
 * from a className to make sure that specificity is not
 * a problem when passing a className to a component.
 * @param {String} [className=''] the className string
 * @return {Object} { glamorStyles, glamorlessClassName }
 *   - glamorStyles is an array of all the glamor styles objects
 *   - glamorlessClassName is the rest of the className string
 *     without the glamor classNames
 */
function extractGlamorStyles(className) {
  var glamorlessClassName = [];
  var glamorStyles = [];
  className.toString().split(' ').forEach(function (name) {
    if (__WEBPACK_IMPORTED_MODULE_1_glamor__["styleSheet"].registered[name.substring(4)] === undefined) {
      glamorlessClassName.push(name);
    } else {
      var style = buildGlamorSrcFromClassName(name);
      glamorStyles.push(style);
    }
  });

  return { glamorlessClassName: glamorlessClassName, glamorStyles: glamorStyles };
}

/** Glamor's css function returns an object with the shape
 *
 * {
 *   [`data-css-${hash}`]: '',
 *   toString() { return `css-${hash}` }
 * }
 *
 * Whenever glamor's build function encounters an object with
 * this shape it just pulls the resulting styles from the cache.
 *
 * note: the toString method is not needed to qualify the shape
 **/
function buildGlamorSrcFromClassName(className) {
  var _ref;

  return _ref = {}, _ref['data-' + className] = '', _ref;
}

function getGlamorClassName(_ref2) {
  var styles = _ref2.styles,
      props = _ref2.props,
      cssOverrides = _ref2.cssOverrides,
      cssProp = _ref2.cssProp,
      context = _ref2.context,
      displayName = _ref2.displayName;

  var _handleStyles = handleStyles([].concat(styles, [props.className, cssOverrides, cssProp]), props, context),
      mappedArgs = _handleStyles.mappedArgs,
      nonGlamorClassNames = _handleStyles.nonGlamorClassNames;
  // eslint-disable-next-line max-len


  var isDev = "development" === 'development' || !"development";
  var devRules = isDev ? { label: displayName } : null;
  var glamorClassName = __WEBPACK_IMPORTED_MODULE_1_glamor__["css"].apply(undefined, [devRules].concat(mappedArgs)).toString();
  var extras = nonGlamorClassNames.join(' ').trim();
  return (glamorClassName + ' ' + extras).trim();
}

// this next function is on a "hot" code-path
// so it's pretty complex to make sure it's fast.
// eslint-disable-next-line complexity
function handleStyles(styles, props, context) {
  var current = void 0;
  var mappedArgs = [];
  var nonGlamorClassNames = [];
  for (var i = 0; i < styles.length; i++) {
    current = styles[i];
    while (typeof current === 'function') {
      current = current(props, context);
    }
    if (typeof current === 'string') {
      var _extractGlamorStyles = extractGlamorStyles(current),
          glamorStyles = _extractGlamorStyles.glamorStyles,
          glamorlessClassName = _extractGlamorStyles.glamorlessClassName;

      mappedArgs.push.apply(mappedArgs, glamorStyles);
      nonGlamorClassNames.push.apply(nonGlamorClassNames, glamorlessClassName);
    } else if (Array.isArray(current)) {
      var recursed = handleStyles(current, props, context);
      mappedArgs.push.apply(mappedArgs, recursed.mappedArgs);
      nonGlamorClassNames.push.apply(nonGlamorClassNames, recursed.nonGlamorClassNames);
    } else {
      mappedArgs.push(current);
    }
  }
  return { mappedArgs: mappedArgs, nonGlamorClassNames: nonGlamorClassNames };
}

/*
 * This is a relatively small abstraction that's ripe for open sourcing.
 * Documentation is in the README.md
 */

function createGlamorous(splitProps) {
  return glamorous;

  /**
   * This is the main export and the function that people
   * interact with most directly.
   *
   * It accepts a component which can be a string or
   * a React Component and returns
   * a "glamorousComponentFactory"
   * @param {String|ReactComponent} comp the component to render
   * @param {Object} options helpful info for the GlamorousComponents
   * @return {Function} the glamorousComponentFactory
   */
  function glamorous(comp) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var rootEl = config.rootEl,
        displayName = config.displayName,
        shouldClassNameUpdate = config.shouldClassNameUpdate,
        _config$filterProps = config.filterProps,
        filterProps = _config$filterProps === undefined ? [] : _config$filterProps,
        _config$forwardProps = config.forwardProps,
        forwardProps = _config$forwardProps === undefined ? [] : _config$forwardProps,
        _config$propsAreCssOv = config.propsAreCssOverrides,
        propsAreCssOverrides = _config$propsAreCssOv === undefined ? comp.propsAreCssOverrides : _config$propsAreCssOv,
        basePropsToApply = config.withProps;

    Object.assign(glamorousComponentFactory, { withConfig: withConfig });
    return glamorousComponentFactory;

    function withConfig(newConfig) {
      return glamorous(comp, _extends({}, config, newConfig));
    }

    /**
     * This returns a React Component that renders the comp (closure)
     * with a className based on the given glamor styles object(s)
     * @param {...Object|Function} styles the styles to create with glamor.
     *   If any of these are functions, they are invoked with the component
     *   props and the return value is used.
     * @return {ReactComponent} the ReactComponent function
     */
    function glamorousComponentFactory() {
      for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }

      /**
       * This is a component which will render the comp (closure)
       * with the glamorous styles (closure). Forwards any valid
       * props to the underlying component.
       */
      var GlamorousComponent = withTheme(function (props, context) {
        props = getPropsToApply(GlamorousComponent.propsToApply, {}, props, context);
        var updateClassName = shouldUpdate(props, context, this.previous);

        if (shouldClassNameUpdate) {
          this.previous = { props: props, context: context };
        }

        var _splitProps = splitProps(props, GlamorousComponent),
            toForward = _splitProps.toForward,
            cssOverrides = _splitProps.cssOverrides,
            cssProp = _splitProps.cssProp;

        // create className to apply


        this.className = updateClassName ? getGlamorClassName({
          styles: GlamorousComponent.styles,
          props: props,
          cssOverrides: cssOverrides,
          cssProp: cssProp,
          context: context,
          displayName: GlamorousComponent.displayName
        }) : this.className;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GlamorousComponent.comp, _extends({
          // if innerRef is forwarded we don't want to apply it here
          ref: 'innerRef' in toForward ? undefined : props.innerRef
        }, toForward, {
          className: this.className
        }));
      }, { noWarn: true, createElement: false });

       true ? GlamorousComponent.propTypes = {
        // className accepts an object due to glamor's css function
        // returning an object with a toString method that gives the className
        className: _PropTypes.oneOfType([_PropTypes.string, _PropTypes.object]),
        cssOverrides: _PropTypes.object,
        innerRef: _PropTypes.oneOfType([_PropTypes.func, _PropTypes.object]),
        glam: _PropTypes.object
      } : void 0;

      function shouldUpdate(props, context, previous) {
        // exiting early so components which do not use this
        // optimization are not penalized by hanging onto
        // references to previous props and context
        if (!shouldClassNameUpdate) {
          return true;
        }
        var update = true;
        if (previous) {
          if (!shouldClassNameUpdate(previous.props, props, previous.context, context)) {
            update = false;
          }
        }

        return update;
      }

      Object.assign(GlamorousComponent, getGlamorousComponentMetadata({
        comp: comp,
        styles: styles,
        rootEl: rootEl,
        filterProps: filterProps,
        forwardProps: forwardProps,
        displayName: displayName,
        propsToApply: basePropsToApply
      }), {
        isGlamorousComponent: true,
        propsAreCssOverrides: propsAreCssOverrides,
        withComponent: function (newComp) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var fwp = GlamorousComponent.forwardProps,
              flp = GlamorousComponent.filterProps,
              componentProperties = objectWithoutProperties(GlamorousComponent, ['forwardProps', 'filterProps']);

          return glamorous(_extends({}, componentProperties, {
            comp: newComp,
            rootEl: getRootEl(newComp)
          }), _extends({
            // allows the forwardProps and filterProps to be overridden
            forwardProps: fwp,
            filterProps: flp
          }, options))();
        },
        withProps: function () {
          for (var _len2 = arguments.length, propsToApply = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            propsToApply[_key2] = arguments[_key2];
          }

          return glamorous(GlamorousComponent, { withProps: propsToApply })();
        },
        withConfig: withConfig
      });
      return GlamorousComponent;
    }
  }

  function getGlamorousComponentMetadata(_ref) {
    var comp = _ref.comp,
        styles = _ref.styles,
        rootEl = _ref.rootEl,
        filterProps = _ref.filterProps,
        forwardProps = _ref.forwardProps,
        displayName = _ref.displayName,
        basePropsToApply = _ref.propsToApply;

    var componentsComp = comp.comp ? comp.comp : comp;
    var propsToApply = comp.propsToApply ? [].concat(comp.propsToApply, arrayify(basePropsToApply)) : arrayify(basePropsToApply);
    return {
      // join styles together (for anyone doing: glamorous(glamorous.a({}), {}))
      styles: when(comp.styles, styles),
      // keep track of the ultimate rootEl to render (we never
      // actually render anything but
      // the base component, even when people wrap a glamorous
      // component in glamorous
      comp: componentsComp,
      rootEl: rootEl || getRootEl(comp),
      // join forwardProps and filterProps
      // (for anyone doing: glamorous(glamorous.a({}), {}))
      forwardProps: when(comp.forwardProps, forwardProps),
      filterProps: when(comp.filterProps, filterProps),
      // set the displayName to something that's slightly more
      // helpful than `GlamorousComponent` :)
      displayName: displayName || 'glamorous(' + getDisplayName(comp) + ')',
      // these are props that should be applied to the component at render time
      propsToApply: propsToApply
    };
  }
}

/**
 * reduces the propsToApply given to a single props object
 * @param {Array} propsToApply an array of propsToApply objects:
 *   - object
 *   - array of propsToApply items
 *   - function that accepts the accumulated props and the context
 * @param {Object} accumulator an object to apply props onto
 * @param {Object} props the props that should ultimately take precedence
 * @param {*} context the context object
 * @return {Object} the reduced props
 */
function getPropsToApply(propsToApply, accumulator, props, context) {
  // using forEach rather than reduce here because the reduce solution
  // effectively did the same thing because we manipulate the `accumulator`
  propsToApply.forEach(function (propsToApplyItem) {
    if (typeof propsToApplyItem === 'function') {
      return Object.assign(accumulator, propsToApplyItem(Object.assign({}, accumulator, props), context));
    } else if (Array.isArray(propsToApplyItem)) {
      return Object.assign(accumulator, getPropsToApply(propsToApplyItem, accumulator, props, context));
    }
    return Object.assign(accumulator, propsToApplyItem);
  });
  // props wins
  return Object.assign(accumulator, props);
}

function arrayify() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return Array.isArray(x) ? x : [x];
}

function when(comp, prop) {
  return comp ? comp.concat(prop) : prop;
}

function getRootEl(comp) {
  return comp.rootEl ? comp.rootEl : comp.comp || comp;
}

function getDisplayName(comp) {
  return typeof comp === 'string' ? comp : comp.displayName || comp.name || 'unknown';
}

//
// Main
//

function memoize (fn, options) {
  var cache = options && options.cache
    ? options.cache
    : cacheDefault;

  var serializer = options && options.serializer
    ? options.serializer
    : serializerDefault;

  var strategy = options && options.strategy
    ? options.strategy
    : strategyDefault;

  return strategy(fn, {
    cache: cache,
    serializer: serializer
  })
}

//
// Strategy
//

function isPrimitive (value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean' // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic (fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);

  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
  }

  return computedValue
}

function variadic (fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);

  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args);
    cache.set(cacheKey, computedValue);
  }

  return computedValue
}

function assemble (fn, context, strategy, cache, serialize) {
  return strategy.bind(
    context,
    fn,
    cache,
    serialize
  )
}

function strategyDefault (fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyVariadic (fn, options) {
  var strategy = variadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyMonadic (fn, options) {
  var strategy = monadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

//
// Serializer
//

function serializerDefault () {
  return JSON.stringify(arguments)
}

//
// Cache
//

function ObjectWithoutPrototypeCache () {
  this.cache = Object.create(null);
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return (key in this.cache)
};

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key]
};

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value;
};

var cacheDefault = {
  create: function create () {
    return new ObjectWithoutPrototypeCache()
  }
};

//
// API
//

var src = memoize;
var strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
};
src.strategies = strategies;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var a = ["coords","download","href","name","rel","shape","target","type"];
var abbr = ["title"];
var applet = ["alt","height","name","width"];
var area = ["alt","coords","download","href","rel","shape","target","type"];
var audio = ["controls","loop","muted","preload","src"];
var base = ["href","target"];
var basefont = ["size"];
var bdo = ["dir"];
var blockquote = ["cite"];
var button = ["disabled","form","name","type","value"];
var canvas = ["height","width"];
var col = ["span","width"];
var colgroup = ["span","width"];
var data = ["value"];
var del = ["cite"];
var details = ["open"];
var dfn = ["title"];
var dialog = ["open"];
var embed = ["height","src","type","width"];
var fieldset = ["disabled","form","name"];
var font = ["size"];
var form = ["accept","action","method","name","target"];
var frame = ["name","scrolling","src"];
var frameset = ["cols","rows"];
var head = ["profile"];
var hr = ["size","width"];
var html = ["manifest"];
var iframe = ["height","name","sandbox","scrolling","src","width"];
var img = ["alt","height","name","sizes","src","width"];
var input = ["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"];
var ins = ["cite"];
var keygen = ["challenge","disabled","form","name"];
var label = ["form"];
var li = ["type","value"];
var link = ["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"];
var map = ["name"];
var meta = ["content","name"];
var meter = ["high","low","max","min","optimum","value"];
var object = ["data","form","height","name","type","width"];
var ol = ["reversed","start","type"];
var optgroup = ["disabled","label"];
var option = ["disabled","label","selected","value"];
var output = ["form","name"];
var param = ["name","type","value"];
var pre = ["width"];
var progress = ["max","value"];
var q = ["cite"];
var script = ["async","defer","integrity","nonce","src","type"];
var select = ["defaultValue","disabled","form","multiple","name","onChange","required","size","value"];
var slot = ["name"];
var source = ["media","sizes","src","type"];
var style = ["media","nonce","title","type"];
var table = ["summary","width"];
var td = ["headers","height","scope","width"];
var textarea = ["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"];
var th = ["headers","height","scope","width"];
var track = ["default","kind","label","src"];
var ul = ["type"];
var video = ["controls","height","loop","muted","playsInline","poster","preload","src","width"];
var svg = ["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"];
var elements = {"html":["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],"svg":["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]};
var reactHtmlAttributes = {
	a: a,
	abbr: abbr,
	applet: applet,
	area: area,
	audio: audio,
	base: base,
	basefont: basefont,
	bdo: bdo,
	blockquote: blockquote,
	button: button,
	canvas: canvas,
	col: col,
	colgroup: colgroup,
	data: data,
	del: del,
	details: details,
	dfn: dfn,
	dialog: dialog,
	embed: embed,
	fieldset: fieldset,
	font: font,
	form: form,
	frame: frame,
	frameset: frameset,
	head: head,
	hr: hr,
	html: html,
	iframe: iframe,
	img: img,
	input: input,
	ins: ins,
	keygen: keygen,
	label: label,
	li: li,
	link: link,
	map: map,
	meta: meta,
	meter: meter,
	object: object,
	ol: ol,
	optgroup: optgroup,
	option: option,
	output: output,
	param: param,
	pre: pre,
	progress: progress,
	q: q,
	script: script,
	select: select,
	slot: slot,
	source: source,
	style: style,
	table: table,
	td: td,
	textarea: textarea,
	th: th,
	track: track,
	ul: ul,
	video: video,
	svg: svg,
	elements: elements,
	"*": ["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"]
};

var reactHtmlAttributes$1 = Object.freeze({
	a: a,
	abbr: abbr,
	applet: applet,
	area: area,
	audio: audio,
	base: base,
	basefont: basefont,
	bdo: bdo,
	blockquote: blockquote,
	button: button,
	canvas: canvas,
	col: col,
	colgroup: colgroup,
	data: data,
	del: del,
	details: details,
	dfn: dfn,
	dialog: dialog,
	embed: embed,
	fieldset: fieldset,
	font: font,
	form: form,
	frame: frame,
	frameset: frameset,
	head: head,
	hr: hr,
	html: html,
	iframe: iframe,
	img: img,
	input: input,
	ins: ins,
	keygen: keygen,
	label: label,
	li: li,
	link: link,
	map: map,
	meta: meta,
	meter: meter,
	object: object,
	ol: ol,
	optgroup: optgroup,
	option: option,
	output: output,
	param: param,
	pre: pre,
	progress: progress,
	q: q,
	script: script,
	select: select,
	slot: slot,
	source: source,
	style: style,
	table: table,
	td: td,
	textarea: textarea,
	th: th,
	track: track,
	ul: ul,
	video: video,
	svg: svg,
	elements: elements,
	default: reactHtmlAttributes
});

var reactHtmlAttributes$2 = ( reactHtmlAttributes$1 && reactHtmlAttributes ) || reactHtmlAttributes$1;

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});


exports.default = reactHtmlAttributes$2;

module.exports = reactHtmlAttributes$2; // for CommonJS compatibility
});

var reactHTMLAttributes = unwrapExports(dist);

/*
 * This is used to check if a property name is one of the React-specific
 * properties and determine if that property should be forwarded
 * to the React component
 */

/* Logic copied from ReactDOMUnknownPropertyHook */
var reactProps = ['children', 'dangerouslySetInnerHTML', 'key', 'ref', 'autoFocus', 'defaultValue', 'valueLink', 'defaultChecked', 'checkedLink', 'innerHTML', 'suppressContentEditableWarning', 'onFocusIn', 'onFocusOut', 'className',

/* List copied from https://facebook.github.io/react/docs/events.html */
'onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onInvalid', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'onCopyCapture', 'onCutCapture', 'onPasteCapture', 'onCompositionEndCapture', 'onCompositionStartCapture', 'onCompositionUpdateCapture', 'onKeyDownCapture', 'onKeyPressCapture', 'onKeyUpCapture', 'onFocusCapture', 'onBlurCapture', 'onChangeCapture', 'onInputCapture', 'onSubmitCapture', 'onClickCapture', 'onContextMenuCapture', 'onDoubleClickCapture', 'onDragCapture', 'onDragEndCapture', 'onDragEnterCapture', 'onDragExitCapture', 'onDragLeaveCapture', 'onDragOverCapture', 'onDragStartCapture', 'onDropCapture', 'onMouseDownCapture', 'onMouseEnterCapture', 'onMouseLeaveCapture', 'onMouseMoveCapture', 'onMouseOutCapture', 'onMouseOverCapture', 'onMouseUpCapture', 'onSelectCapture', 'onTouchCancelCapture', 'onTouchEndCapture', 'onTouchMoveCapture', 'onTouchStartCapture', 'onScrollCapture', 'onWheelCapture', 'onAbortCapture', 'onCanPlayCapture', 'onCanPlayThroughCapture', 'onDurationChangeCapture', 'onEmptiedCapture', 'onEncryptedCapture', 'onEndedCapture', 'onErrorCapture', 'onLoadedDataCapture', 'onLoadedMetadataCapture', 'onLoadStartCapture', 'onPauseCapture', 'onPlayCapture', 'onPlayingCapture', 'onProgressCapture', 'onRateChangeCapture', 'onSeekedCapture', 'onSeekingCapture', 'onStalledCapture', 'onSuspendCapture', 'onTimeUpdateCapture', 'onVolumeChangeCapture', 'onWaitingCapture', 'onLoadCapture', 'onAnimationStartCapture', 'onAnimationEndCapture', 'onAnimationIterationCapture', 'onTransitionEndCapture'];

if (isPreact) {
  reactProps.push('autocomplete', 'autofocus', 'class', 'for', 'onDblClick', 'onSearch', 'slot', 'srcset');
}

/* eslint max-lines:0, func-style:0 */

var globalReactHtmlProps = reactHTMLAttributes['*'];
var supportedSVGTagNames = reactHTMLAttributes.elements.svg;
var supportedHtmlTagNames = reactHTMLAttributes.elements.html;

// these are valid attributes that have the
// same name as CSS properties, and is used
// for css overrides API
var cssProps = ['color', 'height', 'width'];

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR =
// eslint-disable-next-line max-len
':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
// eslint-disable-next-line max-len
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var isSvgTag = function (tagName) {
  return (
    // in our context, we only say that SVG tags are SVG
    // if they are not also HTML.
    // See https://github.com/paypal/glamorous/issues/245
    // the svg tag will always be treated as svg for
    // er... obvious reasons
    tagName === 'svg' || supportedHtmlTagNames.indexOf(tagName) === -1 && supportedSVGTagNames.indexOf(tagName) !== -1
  );
};
var isHtmlProp = function (name, tagName) {
  var elementAttributes = void 0;

  if (isSvgTag(tagName)) {
    // all SVG attributes supported by React are grouped under 'svg'
    elementAttributes = reactHTMLAttributes.svg;
  } else {
    elementAttributes = reactHTMLAttributes[tagName] || [];
  }

  return globalReactHtmlProps.indexOf(name) !== -1 || elementAttributes.indexOf(name) !== -1;
};
var isCssProp = function (name) {
  return cssProps.indexOf(name) !== -1;
};
var isReactProp = function (name) {
  return reactProps.indexOf(name) !== -1;
};

// eslint-disable-next-line complexity
var shouldForwardProperty = function (tagName, name) {
  return typeof tagName !== 'string' || (isHtmlProp(name, tagName) || isReactProp(name) || isCustomAttribute(name.toLowerCase())) && (!isCssProp(name) || isSvgTag(tagName));
};

var shouldForwardProperty$1 = src(shouldForwardProperty);

// eslint-disable-next-line complexity
function splitProps(_ref, _ref2) {
  var propsAreCssOverrides = _ref2.propsAreCssOverrides,
      rootEl = _ref2.rootEl,
      filterProps = _ref2.filterProps,
      forwardProps = _ref2.forwardProps;
  var cssProp = _ref.css,
      innerRef = _ref.innerRef,
      theme = _ref.theme,
      className = _ref.className,
      glam = _ref.glam,
      rest = objectWithoutProperties(_ref, ['css', 'innerRef', 'theme', 'className', 'glam']);

  // forward innerRef if user wishes to do so
  if (innerRef !== undefined && forwardProps.indexOf('innerRef') !== -1) {
    rest.innerRef = innerRef;
  }
  var returnValue = { toForward: {}, cssProp: cssProp, cssOverrides: {} };
  if (!propsAreCssOverrides) {
    if (typeof rootEl !== 'string' && filterProps.length === 0) {
      // if it's not a string and filterProps is empty,
      // then we can forward everything (because it's a component)
      returnValue.toForward = rest;
      return returnValue;
    }
  }
  return Object.keys(rest).reduce(function (split, propName) {
    if (filterProps.indexOf(propName) !== -1) {
      return split;
    } else if (forwardProps.indexOf(propName) !== -1 || shouldForwardProperty$1(rootEl, propName)) {
      split.toForward[propName] = rest[propName];
    } else if (propsAreCssOverrides) {
      split.cssOverrides[propName] = rest[propName];
    }
    return split;
  }, returnValue);
}

var glamorous = createGlamorous(splitProps);

/*
 * This creates a glamorousComponentFactory for every DOM element so you can
 * simply do:
 * const GreenButton = glamorous.button({
 *   backgroundColor: 'green',
 *   padding: 20,
 * })
 * <GreenButton>Click Me!</GreenButton>
 */
Object.assign(glamorous, domElements.reduce(function (getters, tag) {
  // TODO: next breaking change, let's make
  // the `displayName` be: `glamorous.${tag}`
  getters[tag] = glamorous(tag);
  return getters;
}, {}));

/*
 * This creates a glamorous component for each DOM element so you can
 * simply do:
 * <glamorous.Div
 *   color="green"
 *   marginLeft={20}
 * >
 *   I'm green!
 * </glamorous.Div>
 */
Object.assign(glamorous, domElements.reduce(function (comps, tag) {
  var capitalTag = capitalize(tag);
  comps[capitalTag] = glamorous[tag]();
  comps[capitalTag].displayName = 'glamorous.' + capitalTag;
  comps[capitalTag].propsAreCssOverrides = true;
  return comps;
}, {}));

function capitalize(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}

/*
 * Fix importing in typescript after rollup compilation
 * https://github.com/rollup/rollup/issues/1156
 * https://github.com/Microsoft/TypeScript/issues/13017#issuecomment-268657860
 */
glamorous.default = glamorous;

// these exports below are generated
// and will be tree-shaken if you're using Webpack 2 or Rollup
var A = glamorous['A'];
var Abbr = glamorous['Abbr'];
var Acronym = glamorous['Acronym'];
var Address = glamorous['Address'];
var Applet = glamorous['Applet'];
var Area = glamorous['Area'];
var Article = glamorous['Article'];
var Aside = glamorous['Aside'];
var Audio = glamorous['Audio'];
var B = glamorous['B'];
var Base = glamorous['Base'];
var Basefont = glamorous['Basefont'];
var Bdi = glamorous['Bdi'];
var Bdo = glamorous['Bdo'];
var Bgsound = glamorous['Bgsound'];
var Big = glamorous['Big'];
var Blink = glamorous['Blink'];
var Blockquote = glamorous['Blockquote'];
var Body = glamorous['Body'];
var Br = glamorous['Br'];
var Button = glamorous['Button'];
var Canvas = glamorous['Canvas'];
var Caption = glamorous['Caption'];
var Center = glamorous['Center'];
var Cite = glamorous['Cite'];
var Code = glamorous['Code'];
var Col = glamorous['Col'];
var Colgroup = glamorous['Colgroup'];
var Command = glamorous['Command'];
var Content = glamorous['Content'];
var Data = glamorous['Data'];
var Datalist = glamorous['Datalist'];
var Dd = glamorous['Dd'];
var Del = glamorous['Del'];
var Details = glamorous['Details'];
var Dfn = glamorous['Dfn'];
var Dialog = glamorous['Dialog'];
var Dir = glamorous['Dir'];
var Div = glamorous['Div'];
var Dl = glamorous['Dl'];
var Dt = glamorous['Dt'];
var Element = glamorous['Element'];
var Em = glamorous['Em'];
var Embed = glamorous['Embed'];
var Fieldset = glamorous['Fieldset'];
var Figcaption = glamorous['Figcaption'];
var Figure = glamorous['Figure'];
var Font = glamorous['Font'];
var Footer = glamorous['Footer'];
var Form = glamorous['Form'];
var Frame = glamorous['Frame'];
var Frameset = glamorous['Frameset'];
var H1 = glamorous['H1'];
var H2 = glamorous['H2'];
var H3 = glamorous['H3'];
var H4 = glamorous['H4'];
var H5 = glamorous['H5'];
var H6 = glamorous['H6'];
var Head = glamorous['Head'];
var Header = glamorous['Header'];
var Hgroup = glamorous['Hgroup'];
var Hr = glamorous['Hr'];
var Html = glamorous['Html'];
var I = glamorous['I'];
var Iframe = glamorous['Iframe'];
var Image = glamorous['Image'];
var Img = glamorous['Img'];
var Input = glamorous['Input'];
var Ins = glamorous['Ins'];
var Isindex = glamorous['Isindex'];
var Kbd = glamorous['Kbd'];
var Keygen = glamorous['Keygen'];
var Label = glamorous['Label'];
var Legend = glamorous['Legend'];
var Li = glamorous['Li'];
var Link = glamorous['Link'];
var Listing = glamorous['Listing'];
var Main = glamorous['Main'];
var MapTag = glamorous['Map'];
var Mark = glamorous['Mark'];
var Marquee = glamorous['Marquee'];
var MathTag = glamorous['Math'];
var Menu = glamorous['Menu'];
var Menuitem = glamorous['Menuitem'];
var Meta = glamorous['Meta'];
var Meter = glamorous['Meter'];
var Multicol = glamorous['Multicol'];
var Nav = glamorous['Nav'];
var Nextid = glamorous['Nextid'];
var Nobr = glamorous['Nobr'];
var Noembed = glamorous['Noembed'];
var Noframes = glamorous['Noframes'];
var Noscript = glamorous['Noscript'];
var ObjectTag = glamorous['Object'];
var Ol = glamorous['Ol'];
var Optgroup = glamorous['Optgroup'];
var Option = glamorous['Option'];
var Output = glamorous['Output'];
var P = glamorous['P'];
var Param = glamorous['Param'];
var Picture = glamorous['Picture'];
var Plaintext = glamorous['Plaintext'];
var Pre = glamorous['Pre'];
var Progress = glamorous['Progress'];
var Q = glamorous['Q'];
var Rb = glamorous['Rb'];
var Rbc = glamorous['Rbc'];
var Rp = glamorous['Rp'];
var Rt = glamorous['Rt'];
var Rtc = glamorous['Rtc'];
var Ruby = glamorous['Ruby'];
var S = glamorous['S'];
var Samp = glamorous['Samp'];
var Script = glamorous['Script'];
var Section = glamorous['Section'];
var Select = glamorous['Select'];
var Shadow = glamorous['Shadow'];
var Slot = glamorous['Slot'];
var Small = glamorous['Small'];
var Source = glamorous['Source'];
var Spacer = glamorous['Spacer'];
var Span = glamorous['Span'];
var Strike = glamorous['Strike'];
var Strong = glamorous['Strong'];
var Style = glamorous['Style'];
var Sub = glamorous['Sub'];
var Summary = glamorous['Summary'];
var Sup = glamorous['Sup'];
var Svg = glamorous['Svg'];
var Table = glamorous['Table'];
var Tbody = glamorous['Tbody'];
var Td = glamorous['Td'];
var Template = glamorous['Template'];
var Textarea = glamorous['Textarea'];
var Tfoot = glamorous['Tfoot'];
var Th = glamorous['Th'];
var Thead = glamorous['Thead'];
var Time = glamorous['Time'];
var Title = glamorous['Title'];
var Tr = glamorous['Tr'];
var Track = glamorous['Track'];
var Tt = glamorous['Tt'];
var U = glamorous['U'];
var Ul = glamorous['Ul'];
var Var = glamorous['Var'];
var Video = glamorous['Video'];
var Wbr = glamorous['Wbr'];
var Xmp = glamorous['Xmp'];
var AltGlyph = glamorous['AltGlyph'];
var AltGlyphDef = glamorous['AltGlyphDef'];
var AltGlyphItem = glamorous['AltGlyphItem'];
var Animate = glamorous['Animate'];
var AnimateColor = glamorous['AnimateColor'];
var AnimateMotion = glamorous['AnimateMotion'];
var AnimateTransform = glamorous['AnimateTransform'];
var Animation = glamorous['Animation'];
var Circle = glamorous['Circle'];
var ClipPath = glamorous['ClipPath'];
var ColorProfile = glamorous['Color-profile'];
var Cursor = glamorous['Cursor'];
var Defs = glamorous['Defs'];
var Desc = glamorous['Desc'];
var Discard = glamorous['Discard'];
var Ellipse = glamorous['Ellipse'];
var FeBlend = glamorous['FeBlend'];
var FeColorMatrix = glamorous['FeColorMatrix'];
var FeComponentTransfer = glamorous['FeComponentTransfer'];
var FeComposite = glamorous['FeComposite'];
var FeConvolveMatrix = glamorous['FeConvolveMatrix'];
var FeDiffuseLighting = glamorous['FeDiffuseLighting'];
var FeDisplacementMap = glamorous['FeDisplacementMap'];
var FeDistantLight = glamorous['FeDistantLight'];
var FeDropShadow = glamorous['FeDropShadow'];
var FeFlood = glamorous['FeFlood'];
var FeFuncA = glamorous['FeFuncA'];
var FeFuncB = glamorous['FeFuncB'];
var FeFuncG = glamorous['FeFuncG'];
var FeFuncR = glamorous['FeFuncR'];
var FeGaussianBlur = glamorous['FeGaussianBlur'];
var FeImage = glamorous['FeImage'];
var FeMerge = glamorous['FeMerge'];
var FeMergeNode = glamorous['FeMergeNode'];
var FeMorphology = glamorous['FeMorphology'];
var FeOffset = glamorous['FeOffset'];
var FePointLight = glamorous['FePointLight'];
var FeSpecularLighting = glamorous['FeSpecularLighting'];
var FeSpotLight = glamorous['FeSpotLight'];
var FeTile = glamorous['FeTile'];
var FeTurbulence = glamorous['FeTurbulence'];
var Filter = glamorous['Filter'];
var FontFace = glamorous['Font-face'];
var FontFaceFormat = glamorous['Font-face-format'];
var FontFaceName = glamorous['Font-face-name'];
var FontFaceSrc = glamorous['Font-face-src'];
var FontFaceUri = glamorous['Font-face-uri'];
var ForeignObject = glamorous['ForeignObject'];
var G = glamorous['G'];
var Glyph = glamorous['Glyph'];
var GlyphRef = glamorous['GlyphRef'];
var Handler = glamorous['Handler'];
var Hatch = glamorous['Hatch'];
var Hatchpath = glamorous['Hatchpath'];
var Hkern = glamorous['Hkern'];
var Line = glamorous['Line'];
var LinearGradient = glamorous['LinearGradient'];
var Listener = glamorous['Listener'];
var Marker = glamorous['Marker'];
var Mask = glamorous['Mask'];
var Mesh = glamorous['Mesh'];
var Meshgradient = glamorous['Meshgradient'];
var Meshpatch = glamorous['Meshpatch'];
var Meshrow = glamorous['Meshrow'];
var Metadata = glamorous['Metadata'];
var MissingGlyph = glamorous['Missing-glyph'];
var Mpath = glamorous['Mpath'];
var Path = glamorous['Path'];
var Pattern = glamorous['Pattern'];
var Polygon = glamorous['Polygon'];
var Polyline = glamorous['Polyline'];
var Prefetch = glamorous['Prefetch'];
var RadialGradient = glamorous['RadialGradient'];
var Rect = glamorous['Rect'];
var SetTag = glamorous['Set'];
var SolidColor = glamorous['SolidColor'];
var Solidcolor = glamorous['Solidcolor'];
var Stop = glamorous['Stop'];
var Switch = glamorous['Switch'];
var SymbolTag = glamorous['Symbol'];
var Tbreak = glamorous['Tbreak'];
var Text = glamorous['Text'];
var TextArea = glamorous['TextArea'];
var TextPath = glamorous['TextPath'];
var Tref = glamorous['Tref'];
var Tspan = glamorous['Tspan'];
var Unknown = glamorous['Unknown'];
var Use = glamorous['Use'];
var View = glamorous['View'];
var Vkern = glamorous['Vkern'];

/* harmony default export */ __webpack_exports__["a"] = (glamorous);



/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;


/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/cursor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/position.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__("./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__("./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/staticData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

exports.default = {
  plugins: [],
  prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "writingMode": wms, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__("./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/natural-scale/dist/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MINOR_SECOND = 1.067;
exports.MAJOR_SECOND = 1.125;
exports.MINOR_THIRD = 1.2;
exports.MAJOR_THIRD = 1.25;
exports.PERFECT_FOURTH = 1.333;
exports.AUGMENTED_FOURTH = 1.414;
exports.PERFECT_FIFTH = 1.5;
exports.MINOR_SIXTH = 1.6;
exports.MAJOR_SIXTH = 1.667;
exports.MINOR_SEVENTH = 1.778;
exports.MAJOR_SEVENTH = 1.875;
exports.PERFECT_OCTAVE = 2;
exports.GOLDEN_RATIO = 1.618;
exports.default = {
    MINOR_SECOND: exports.MINOR_SECOND,
    MAJOR_SECOND: exports.MAJOR_SECOND,
    MINOR_THIRD: exports.MINOR_THIRD,
    MAJOR_THIRD: exports.MAJOR_THIRD,
    PERFECT_FOURTH: exports.PERFECT_FOURTH,
    AUGMENTED_FOURTH: exports.AUGMENTED_FOURTH,
    PERFECT_FIFTH: exports.PERFECT_FIFTH,
    MINOR_SIXTH: exports.MINOR_SIXTH,
    MAJOR_SIXTH: exports.MAJOR_SIXTH,
    MINOR_SEVENTH: exports.MINOR_SEVENTH,
    MAJOR_SEVENTH: exports.MAJOR_SEVENTH,
    PERFECT_OCTAVE: exports.PERFECT_OCTAVE,
    GOLDEN_RATIO: exports.GOLDEN_RATIO
};


/***/ }),

/***/ "./node_modules/natural-scale/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultRatios = __importStar(__webpack_require__("./node_modules/natural-scale/dist/constants.js"));
var steps_1 = __webpack_require__("./node_modules/natural-scale/dist/steps.js");
exports.Ratio = DefaultRatios;
exports.Scale = function (interval, unit) {
    if (interval === void 0) { interval = exports.Ratio.MINOR_THIRD; }
    return function (step, unitOverride) {
        if (step === void 0) { step = 0; }
        var unitValue = unitOverride || unit;
        return step
            ? steps_1.getStep({ step: step, interval: interval, unit: unitValue })
            : steps_1.getSteps({ interval: interval, unit: unitOverride });
    };
};
exports.default = { Scale: exports.Scale, Ratio: exports.Ratio };


/***/ }),

/***/ "./node_modules/natural-scale/dist/steps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getStep = function (_a) {
    var step = _a.step, interval = _a.interval, unit = _a.unit;
    var lowPower = 5 - step;
    var highPower = step - 4;
    var result = step <= 3
        ? interval / Math.pow(interval, lowPower)
        : Math.pow(interval, highPower);
    // Round to 3 decimal places
    var value = Math.floor(result * 1000) / 1000;
    return unit && unit !== 'none' ? (value += unit) : value;
};
exports.getSteps = function (_a) {
    var interval = _a.interval, unit = _a.unit;
    var stepsArray = [];
    for (var index = 0; index < 8; index++) {
        var step = index + 1;
        stepsArray.push(exports.getStep({ step: step, interval: interval, unit: unit }));
    }
    return stepsArray;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Scale__ = __webpack_require__("./utils/Scale.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamorous__ = __webpack_require__("./node_modules/glamorous/dist/glamorous.esm.js");
var _jsxFileName = "/Users/jklb/Development/work/freelance/givecrypto/pages/index.tsx";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var div = __WEBPACK_IMPORTED_MODULE_2_glamorous__["a" /* default */].div;
var Container = div({
  padding: Object(__WEBPACK_IMPORTED_MODULE_1__utils_Scale__["a" /* Step */])(5)
});

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _state$message = this.state.message,
          message = _state$message === void 0 ? 'folks' : _state$message;
      return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Really cool ", message));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(div, "div", "/Users/jklb/Development/work/freelance/givecrypto/pages/index.tsx");
  reactHotLoader.register(Container, "Container", "/Users/jklb/Development/work/freelance/givecrypto/pages/index.tsx");
  reactHotLoader.register(App, "App", "/Users/jklb/Development/work/freelance/givecrypto/pages/index.tsx");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/Scale.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export Interval */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_natural_scale__ = __webpack_require__("./node_modules/natural-scale/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_natural_scale___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_natural_scale__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var Interval = __WEBPACK_IMPORTED_MODULE_0_natural_scale__["Ratio"].GOLDEN_RATIO;
var Step = Object(__WEBPACK_IMPORTED_MODULE_0_natural_scale__["Scale"])(Interval, 'rem');
var _default = {
  Step: Step,
  Interval: Interval
};
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Interval, "Interval", "/Users/jklb/Development/work/freelance/givecrypto/utils/Scale.tsx");
  reactHotLoader.register(Step, "Step", "/Users/jklb/Development/work/freelance/givecrypto/utils/Scale.tsx");
  reactHotLoader.register(_default, "default", "/Users/jklb/Development/work/freelance/givecrypto/utils/Scale.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map