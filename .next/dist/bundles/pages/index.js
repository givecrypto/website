module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Donate.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Donate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__design_system__ = __webpack_require__("./design-system/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chroma_js__ = __webpack_require__("chroma-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chroma_js__);
var _jsxFileName = "/Users/jklb/Development/work/freelance/givecrypto/components/Donate.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var linkStyles = {
  '&.donate-with-crypto': {
    color: 'white',
    background: __WEBPACK_IMPORTED_MODULE_2__design_system__["a" /* colors */].green,
    textDecoration: 'none',
    '&:hover': {
      background: __WEBPACK_IMPORTED_MODULE_3_chroma_js___default()(__WEBPACK_IMPORTED_MODULE_2__design_system__["a" /* colors */].green).brighten(0.25).css()
    },
    '> span': {
      textShadow: 'none'
    }
  }
};
var Link = __WEBPACK_IMPORTED_MODULE_1_glamorous___default.a.a(linkStyles);

var Donate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Donate, _React$Component);

  function Donate() {
    _classCallCheck(this, Donate);

    return _possibleConstructorReturn(this, (Donate.__proto__ || Object.getPrototypeOf(Donate)).apply(this, arguments));
  }

  _createClass(Donate, [{
    key: "render",
    value: function render() {
      var id = this.props.anonymous ? process && process.env && process.env.COMMERCE_ID_ANONYMOUS || "ec081042-4a98-42bf-bf04-e882a81db30f" : process && process.env && process.env.COMMERCE_ID_DEFAULT || "ec081042-4a98-42bf-bf04-e882a81db30f";
      return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Link, {
        className: "donate-with-crypto",
        href: "https://commerce.coinbase.com/checkout/".concat(id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Donate Crypto")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", {
        src: "https://commerce.coinbase.com/v1/checkout.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
  }]);

  return Donate;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./components/HeadContent.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/jklb/Development/work/freelance/givecrypto/components/HeadContent.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var HeadContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeadContent, _React$Component);

  function HeadContent() {
    _classCallCheck(this, HeadContent);

    return _possibleConstructorReturn(this, (HeadContent.__proto__ || Object.getPrototypeOf(HeadContent)).apply(this, arguments));
  }

  _createClass(HeadContent, [{
    key: "render",
    value: function render() {
      var page = this.props.page;
      var info = {
        title: 'This is the home page'
      };

      switch (page) {
        case 'home':
          info.title = 'OMG';
          break;

        default:
          info.title = 'Nevermind';
          break;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        name: "twitter",
        key: "title",
        content: info.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return HeadContent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./design-system/colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export colors */
var colors = {
  green: '#00CD90'
};
/* harmony default export */ __webpack_exports__["a"] = (colors);

/***/ }),

/***/ "./design-system/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__("./design-system/colors.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__colors__["a"]; });


/***/ }),

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Scale__ = __webpack_require__("./utils/Scale.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_HeadContent__ = __webpack_require__("./components/HeadContent.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Donate__ = __webpack_require__("./components/Donate.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_rehydrate__ = __webpack_require__("./utils/rehydrate.tsx");
var _jsxFileName = "/Users/jklb/Development/work/freelance/givecrypto/pages/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var div = __WEBPACK_IMPORTED_MODULE_2_glamorous___default.a.div;
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
          message = _state$message === void 0 ? 'Giving copy' : _state$message;
      return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Home page"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_HeadContent__["a" /* default */], {
        page: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "GiveCrypto - ", message), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_Donate__["a" /* default */], {
        anonymous: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./utils/Scale.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Interval */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_natural_scale__ = __webpack_require__("natural-scale");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_natural_scale___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_natural_scale__);

var Interval = __WEBPACK_IMPORTED_MODULE_0_natural_scale__["Ratio"].GOLDEN_RATIO;
var Step = Object(__WEBPACK_IMPORTED_MODULE_0_natural_scale__["Scale"])(Interval, 'rem');
/* unused harmony default export */ var _unused_webpack_default_export = ({
  Step: Step,
  Interval: Interval
});

/***/ }),

/***/ "./utils/rehydrate.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor__ = __webpack_require__("glamor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamor__);


var loadStyles = function loadStyles() {
  if (typeof window !== 'undefined') {
    window.__NEXT_DATA__ = window.__NEXT_DATA__ || {};
    Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["rehydrate"])(window.__NEXT_DATA__.ids);
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (loadStyles());

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "chroma-js":
/***/ (function(module, exports) {

module.exports = require("chroma-js");

/***/ }),

/***/ "glamor":
/***/ (function(module, exports) {

module.exports = require("glamor");

/***/ }),

/***/ "glamorous":
/***/ (function(module, exports) {

module.exports = require("glamorous");

/***/ }),

/***/ "natural-scale":
/***/ (function(module, exports) {

module.exports = require("natural-scale");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map