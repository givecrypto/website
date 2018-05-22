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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "natural-scale"
var external__natural_scale_ = __webpack_require__(3);
var external__natural_scale__default = /*#__PURE__*/__webpack_require__.n(external__natural_scale_);

// CONCATENATED MODULE: ./utils/Scale.tsx

var Interval = external__natural_scale_["Ratio"].GOLDEN_RATIO;
var Step = Object(external__natural_scale_["Scale"])(Interval, 'rem');
/* harmony default export */ var Scale = ({
  Step: Step,
  Interval: Interval
});
// EXTERNAL MODULE: external "glamorous"
var external__glamorous_ = __webpack_require__(4);
var external__glamorous__default = /*#__PURE__*/__webpack_require__.n(external__glamorous_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/HeadContent.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var HeadContent_HeadContent =
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

      return external__react_["createElement"](external__react_["Fragment"], null, external__react_["createElement"]("meta", {
        name: "twitter",
        key: "title",
        content: info.title
      }), external__react_["createElement"]("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }));
    }
  }]);

  return HeadContent;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./pages/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_App; });
function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var div = external__glamorous__default.a.div;
var Container = div({
  padding: Step(5)
});

var pages_App =
/*#__PURE__*/
function (_React$Component) {
  pages__inherits(App, _React$Component);

  function App(props) {
    var _this;

    pages__classCallCheck(this, App);

    _this = pages__possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    _this.state = {};
    return _this;
  }

  pages__createClass(App, [{
    key: "render",
    value: function render() {
      var _state$message = this.state.message,
          message = _state$message === void 0 ? 'Giving copy' : _state$message;
      return external__react_["createElement"](Container, null, external__react_["createElement"](head__default.a, null, external__react_["createElement"]("title", null, "Home page"), external__react_["createElement"](HeadContent_HeadContent, {
        page: "home"
      })), external__react_["createElement"]("h1", null, "GiveCrypto - ", message));
    }
  }]);

  return App;
}(external__react_["Component"]);



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("natural-scale");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("glamorous");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);