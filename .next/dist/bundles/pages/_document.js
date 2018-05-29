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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ErrorBoundary.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorBoundary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/jklb/Development/work/freelance/givecrypto/components/ErrorBoundary.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({
        hasError: true
      });
      console.log('errrrorrr', error, info);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, "Something went wrong.");
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./components/Footer.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Scale__ = __webpack_require__("./utils/Scale.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__("./components/Link.tsx");
var _jsxFileName = "/Users/jklb/Development/work/freelance/givecrypto/components/Footer.tsx";




var Reddit = function Reddit(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", props, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "reddit"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M18.15 8.91A2.05 2.05 0 0 0 14.7 7.4a10.24 10.24 0 0 0-5.18-1.54l1.11-3.38 2.91.68a1.71 1.71 0 1 0 .14-.66l-3.2-.75-.29-.07L8.8 5.86a10.35 10.35 0 0 0-5.38 1.51 2.08 2.08 0 0 0-1.37-.52A2.06 2.06 0 0 0 1 10.66a3.08 3.08 0 0 0 0 .61c0 3 3.63 5.41 8.11 5.41H9c4.47 0 8.11-2.43 8.11-5.41a3.56 3.56 0 0 0 0-.57 2.06 2.06 0 0 0 1.04-1.79zM1.6 11.27a3.39 3.39 0 0 1 .07-.64.68.68 0 0 0 0-.14 4.42 4.42 0 0 1 1.82-2.37.3.3 0 0 0 .13-.12A9.82 9.82 0 0 1 9 6.53a9.8 9.8 0 0 1 5.45 1.52.33.33 0 0 0 .15.11 4.35 4.35 0 0 1 1.74 2.35.32.32 0 0 0 0 .14 3.26 3.26 0 0 1 .06.62C16.47 13.88 13.14 16 9 16s-7.4-2.12-7.4-4.73zm1.24-3.49A5 5 0 0 0 1.17 10a1.37 1.37 0 0 1 1.67-2.22zM16.93 10a5.14 5.14 0 0 0-1.66-2.2 1.44 1.44 0 0 1 .82-.27 1.38 1.38 0 0 1 .84 2.47zm-2.71-6.84a1 1 0 1 1 1 1 1 1 0 0 1-1-1z"
  }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11.52 13.36a3.37 3.37 0 0 1-2.45.71 3.34 3.34 0 0 1-2.44-.71.34.34 0 0 0-.48.48 4 4 0 0 0 2.92.91 4 4 0 0 0 2.93-.91.34.34 0 0 0-.48-.48zM11.82 9a1.28 1.28 0 0 0-1.27 1.27 1.27 1.27 0 0 0 1.27 1.25 1.24 1.24 0 0 0 1.25-1.25A1.27 1.27 0 0 0 11.82 9zM6.34 9a1.28 1.28 0 0 0-1.27 1.27 1.27 1.27 0 0 0 1.27 1.25 1.25 1.25 0 0 0 1.26-1.24A1.27 1.27 0 0 0 6.34 9z"
  }));
};

Reddit.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18.15",
  height: "18.15",
  viewBox: "0 0 18.15 18.15"
};

var Twitter = function Twitter(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", props, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "twitter"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M16.24 5.4v.48a10.43 10.43 0 0 1-10.5 10.51 10.36 10.36 0 0 1-5.67-1.51A5.3 5.3 0 0 0 1 15a7.45 7.45 0 0 0 4.53-1.8 3.67 3.67 0 0 1-3.43-2.57 3.82 3.82 0 0 0 .68.07 3.64 3.64 0 0 0 1-.13A3.7 3.7 0 0 1 .8 7a3.69 3.69 0 0 0 1.67.46A3.68 3.68 0 0 1 .82 4.3a3.58 3.58 0 0 1 .5-1.79A10.53 10.53 0 0 0 8.93 6.3a3.49 3.49 0 0 1-.08-.86 3.68 3.68 0 0 1 3.68-3.68 3.82 3.82 0 0 1 2.71 1.16A7.46 7.46 0 0 0 17.57 2a3.62 3.62 0 0 1-1.62 2 6.88 6.88 0 0 0 2.12-.59 7.44 7.44 0 0 1-1.83 1.99z"
  }));
};

Twitter.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18.15",
  height: "18.15",
  viewBox: "0 0 18.15 18.15"
};

var Medium = function Medium(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", props, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "medium"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M18.07 16.5h-6.85l1.36-1.5a1 1 0 0 0 .07-.5V5.07L8.15 16.5 3.26 5.86C3.14 5.59 3 5.24 2.93 5v7.91a.79.79 0 0 0 .21.68l2.08 3H.07l2.09-3a.81.81 0 0 0 .2-.68V4.66c0-.36.05-.4-.11-.6L.65 1.65H5.5L9.7 11l3.65-9.31h4.72l-1.25 1.53c-.19.18-.17.34-.17.63v10.64c0 .27 0 .43.08.5z"
  }));
};

Medium.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18.15",
  height: "18.15",
  viewBox: "0 0 18.15 18.15"
};

var Logo = function Logo(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", props, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "GiveCrypto"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
    style: {
      isolation: "isolate"
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8.09 8.19h5.17V16h-1.65l-.2-2.11a4.84 4.84 0 0 1-4.33 2.29c-3.5 0-6.87-2.53-6.87-7.88S3.58.38 7.16.38a5.86 5.86 0 0 1 6.05 4.67l-1.87.55c-.7-2.16-2.13-3.37-4.18-3.37-2.84 0-4.95 2.05-4.95 6s2.11 6 5 6c2.67 0 4.07-1.78 4.25-4.25H8.09zM17.52.38a1.38 1.38 0 0 1 1.39 1.41 1.39 1.39 0 0 1-2.78 0A1.38 1.38 0 0 1 17.52.38zm.92 4.49V16H16.6V4.87zM30.33 4.87L26.67 16h-1.89L21.13 4.87H23l2.71 8.74 2.7-8.74zM41.81 10.81h-8.14c.11 2 1.12 3.65 3.12 3.65a3.06 3.06 0 0 0 3.09-2.11l1.62.71a4.71 4.71 0 0 1-4.71 3.08c-3.36 0-5-2.75-5-5.72s1.65-5.73 5-5.73 5 2.51 5 5.26zm-8-1.67h6.1a3.07 3.07 0 0 0-3.09-2.77 3 3 0 0 0-3.04 2.77z",
    fill: "#323232",
    style: {
      isolation: "isolate"
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
    style: {
      isolation: "isolate"
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M55.12 5.71A3.75 3.75 0 0 0 51.31 3c-2.38 0-4.38 1.67-4.38 5.24s2 5.24 4.38 5.24a3.76 3.76 0 0 0 3.81-2.69l2.57.66c-.73 2.95-3 4.67-6.38 4.67-3.85 0-7.28-2.73-7.28-7.88S47.46.38 51.31.38c3.34 0 5.69 1.72 6.38 4.67zM60.13 16V4.87h2.73v1.8a3.88 3.88 0 0 1 3.28-2 4.59 4.59 0 0 1 1.34.22L67 7.44a2.17 2.17 0 0 0-1.14-.3c-1.58 0-3 1.29-3 4.88V16zM71.4 4.87l2.57 7 2.42-6.95h2.73L73.4 20.45h-2.64l1.91-5.19-4-10.39zM86.15 16.14A3.64 3.64 0 0 1 83.47 15v5.5h-2.73V4.87h2.73V6a3.15 3.15 0 0 1 2.68-1.32c3.35 0 5.06 2.31 5.06 5.73s-1.71 5.73-5.06 5.73zM85.78 7c-1.43 0-2.55 1.18-2.55 3.39s1.12 3.38 2.55 3.38 2.57-1.18 2.57-3.38S87.21 7 85.78 7zM100.2 15.74a4.16 4.16 0 0 1-1.81.4c-2.51 0-4.07-1.35-4.07-4.1V7.2h-1.71V4.87h1.71V2.1L97.05.38v4.49H100V7.2h-2.95V12c0 1.36.53 1.8 1.45 1.8a2.05 2.05 0 0 0 1.06-.26zM107.3 4.69a5.38 5.38 0 0 1 5.63 5.73 5.63 5.63 0 1 1-11.26 0 5.38 5.38 0 0 1 5.63-5.73zm0 9.11c1.76 0 2.77-1.56 2.77-3.38S109.06 7 107.3 7s-2.77 1.56-2.77 3.39 1.01 3.41 2.77 3.41z",
    fill: "#323232",
    style: {
      isolation: "isolate"
    }
  })));
};

Logo.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "113",
  height: "21",
  viewBox: "0 0 113 21"
};

var Icons = __WEBPACK_IMPORTED_MODULE_1_glamorous___default.a.div({
  '> a': {
    padding: "0 ".concat(Object(__WEBPACK_IMPORTED_MODULE_2__utils_Scale__["a" /* Step */])(3))
  }
});

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_glamorous__["Section"], {
    flexShrink: 0,
    role: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_glamorous__["Div"], {
    padding: Object(__WEBPACK_IMPORTED_MODULE_2__utils_Scale__["a" /* Step */])(5),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_glamorous__["Div"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_glamorous__["Div"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_glamorous__["P"], {
    fontWeight: 500,
    margin: "0",
    padding: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "\xA9 2018 GiveCrypto. All rights reserved.")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Icons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    href: "http://twitter.com/givecrypto/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Twitter, {
    className: "test",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    href: "http://medium.com/givecrypto/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Medium, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    href: "https://www.reddit.com/r/givecrypto/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Reddit, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Link.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return linkStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__design_system__ = __webpack_require__("./design-system/index.ts");
var _jsxFileName = "/Users/jklb/Development/work/freelance/givecrypto/components/Link.tsx";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var onClickHandler = function onClickHandler(href) {
  return function (e) {
    e.preventDefault();
    __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push(href);
  };
};

var linkStyles = {
  cursor: 'pointer',
  color: __WEBPACK_IMPORTED_MODULE_3__design_system__["a" /* colors */].black,
  textDecoration: 'none',
  '> svg': {
    transition: 'all 200ms',
    fill: __WEBPACK_IMPORTED_MODULE_3__design_system__["a" /* colors */].grey
  },
  '&:hover, &:active': {
    color: __WEBPACK_IMPORTED_MODULE_3__design_system__["a" /* colors */].grey,
    '> svg': {
      fill: __WEBPACK_IMPORTED_MODULE_3__design_system__["a" /* colors */].black
    }
  },
  '&.active': {
    color: __WEBPACK_IMPORTED_MODULE_3__design_system__["a" /* colors */].grey,
    pointerEvents: 'none'
  }
};
var A = __WEBPACK_IMPORTED_MODULE_2_glamorous___default.a.a(linkStyles);

var Link = function Link(_ref) {
  var children = _ref.children,
      href = _ref.href,
      rest = _objectWithoutProperties(_ref, ["children", "href"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(A, _extends({
    href: href,
    onClick: onClickHandler(href)
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ "./design-system/colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export colors */
var colors = {
  green: '#00CD90',
  blue: '#5890FF',
  red: '#D9694B',
  blueDark: '#374056',
  grey: '#898F9C',
  greyLight: '#9FA4AE',
  black: '#323232',
  white: '#ffffff'
};
/* harmony default export */ __webpack_exports__["a"] = (colors);

/***/ }),

/***/ "./design-system/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__("./design-system/colors.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__colors__["a"]; });


/***/ }),

/***/ "./pages/_document.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GiveCrypto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_document__ = __webpack_require__("next/document");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_glamor_server__ = __webpack_require__("glamor/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_glamor_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_glamor_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_glamor_reset__ = __webpack_require__("glamor/reset");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_glamor_reset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_glamor_reset__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Footer__ = __webpack_require__("./components/Footer.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ErrorBoundary__ = __webpack_require__("./components/ErrorBoundary.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_setupFonts__ = __webpack_require__("./utils/setupFonts.tsx");

var _jsxFileName = "/Users/jklb/Development/work/freelance/givecrypto/pages/_document.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var GiveCrypto =
/*#__PURE__*/
function (_Document) {
  _inherits(GiveCrypto, _Document);

  _createClass(GiveCrypto, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var renderPage, page, styles;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                renderPage = _ref.renderPage;
                page = renderPage();
                styles = Object(__WEBPACK_IMPORTED_MODULE_3_glamor_server__["renderStatic"])(function () {
                  return page.html || page.errorHtml;
                });
                return _context.abrupt("return", _objectSpread({}, page, styles));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function GiveCrypto(props) {
    var _this;

    _classCallCheck(this, GiveCrypto);

    _this = _possibleConstructorReturn(this, (GiveCrypto.__proto__ || Object.getPrototypeOf(GiveCrypto)).call(this, props));
    var __NEXT_DATA__ = props.__NEXT_DATA__,
        ids = props.ids;

    if (ids) {
      __NEXT_DATA__.ids = _this.props.ids;
    }

    return _this;
  }

  _createClass(GiveCrypto, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_document__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this.props.css
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "icon",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ErrorBoundary__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_glamorous__["Body"], {
        fontFamily: "Apercu",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_glamorous__["Section"], {
        role: "main",
        flex: "1 0 auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_document__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_document__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }))));
    }
  }]);

  return GiveCrypto;
}(__WEBPACK_IMPORTED_MODULE_2_next_document___default.a);



/***/ }),

/***/ "./utils/Scale.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Interval */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_natural_scale__ = __webpack_require__("natural-scale");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_natural_scale___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_natural_scale__);

var Interval = __WEBPACK_IMPORTED_MODULE_0_natural_scale__["Ratio"].MINOR_SEVENTH;
var Step = Object(__WEBPACK_IMPORTED_MODULE_0_natural_scale__["Scale"])(Interval, 'rem');
/* unused harmony default export */ var _unused_webpack_default_export = ({
  Step: Step,
  Interval: Interval
});

/***/ }),

/***/ "./utils/setupFonts.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor__ = __webpack_require__("glamor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamor__);
 // Mono

__WEBPACK_IMPORTED_MODULE_0_glamor__["css"].global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'normal',
  fontWeight: 200,
  src: "url('/static/fonts/Apercu-Mono.woff2') format('woff2'), url('/static/fonts/Apercu-Mono.woff') format('woff')"
}); // Normal

__WEBPACK_IMPORTED_MODULE_0_glamor__["css"].global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'normal',
  fontWeight: 400,
  src: "url('/static/fonts/Apercu-Light.woff2') format('woff2'), url('/static/fonts/Apercu-Light.woff') format('woff')"
});
__WEBPACK_IMPORTED_MODULE_0_glamor__["css"].global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'normal',
  fontWeight: 500,
  src: "url('/static/fonts/Apercu-Regular.woff2') format('woff2'), url('/static/fonts/Apercu-Regular.woff') format('woff')"
});
__WEBPACK_IMPORTED_MODULE_0_glamor__["css"].global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'normal',
  fontWeight: 700,
  src: "url('/static/fonts/Apercu-Medium.woff2') format('woff2'), url('/static/fonts/Apercu-Medium.woff') format('woff')"
});
__WEBPACK_IMPORTED_MODULE_0_glamor__["css"].global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'normal',
  fontWeight: 900,
  src: "url('/static/fonts/Apercu-Bold.woff2') format('woff2'), url('/static/fonts/Apercu-Bold.woff') format('woff')"
}); // Italic

__WEBPACK_IMPORTED_MODULE_0_glamor__["css"].global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'italic',
  fontWeight: 700,
  src: "url('/static/fonts/Apercu-MediumItalic.woff2') format('woff2'), url('/static/fonts/Apercu-MediumItalic.woff') format('woff')"
});
__WEBPACK_IMPORTED_MODULE_0_glamor__["css"].global('@font-face', {
  fontFamily: 'Apercu',
  fontStyle: 'italic',
  fontWeight: 900,
  src: "url('/static/fonts/Apercu-BoldItalic.woff2') format('woff2'), url('/static/fonts/Apercu-BoldItalic.woff') format('woff')"
});

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "glamor":
/***/ (function(module, exports) {

module.exports = require("glamor");

/***/ }),

/***/ "glamor/reset":
/***/ (function(module, exports) {

module.exports = require("glamor/reset");

/***/ }),

/***/ "glamor/server":
/***/ (function(module, exports) {

module.exports = require("glamor/server");

/***/ }),

/***/ "glamorous":
/***/ (function(module, exports) {

module.exports = require("glamorous");

/***/ }),

/***/ "natural-scale":
/***/ (function(module, exports) {

module.exports = require("natural-scale");

/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map