module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../../../ssr-module-cache.js"); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__,
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode,
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 3));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./components/Analytics.tsx":
      /*!**********************************!*\
  !*** ./components/Analytics.tsx ***!
  \**********************************/
      /*! exports provided: initGA, logPageView, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initGA",
          function() {
            return initGA;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "logPageView",
          function() {
            return logPageView;
          },
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__,
        );
        /* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! react-ga */ "react-ga",
        );
        /* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          react_ga__WEBPACK_IMPORTED_MODULE_6__,
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Analytics.tsx";

        var GOOGLE_PROPERTY_ID =
          (process && process.env && process.env.GOOGLE_PROPERTY_ID) ||
          "UA-136549352-1";
        var initGA = function initGA() {
          if (GOOGLE_PROPERTY_ID) {
            react_ga__WEBPACK_IMPORTED_MODULE_6___default.a.initialize(
              GOOGLE_PROPERTY_ID,
            );
          }
        };
        var logPageView = function logPageView() {
          if (GOOGLE_PROPERTY_ID) {
            react_ga__WEBPACK_IMPORTED_MODULE_6___default.a.set({
              page: window.location.pathname,
            });
            react_ga__WEBPACK_IMPORTED_MODULE_6___default.a.pageview(
              window.location.pathname,
            );
          }
        };

        var Analytics =
          /*#__PURE__*/
          (function(_React$Component) {
            Object(
              _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ],
            )(Analytics, _React$Component);

            function Analytics() {
              Object(
                _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ],
              )(this, Analytics);

              return Object(
                _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ],
              )(
                this,
                Object(
                  _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[
                    "default"
                  ],
                )(Analytics).apply(this, arguments),
              );
            }

            Object(
              _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )(Analytics, [
              {
                key: "componentDidMount",
                value: function componentDidMount() {
                  if (GOOGLE_PROPERTY_ID) {
                    // @ts-ignore
                    if (!window.GA_INITIALIZED) {
                      initGA(); // @ts-ignore

                      window.GA_INITIALIZED = true;
                    }

                    logPageView();
                  }
                },
              },
              {
                key: "render",
                value: function render() {
                  return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    "div",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                      },
                      __self: this,
                    },
                    this.props.children,
                  );
                },
              },
            ]);

            return Analytics;
          })(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

        /* harmony default export */ __webpack_exports__["default"] = Analytics;

        /***/
      },

    /***/ "./components/HeadMeta.tsx":
      /*!*********************************!*\
  !*** ./components/HeadMeta.tsx ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return HeadMeta;
          },
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js",
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! next/head */ "next/head",
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_5__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_6__,
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/HeadMeta.tsx";

        var defaults = {
          title: "GiveCrypto | Give cryptocurrency to people in need.",
          description:
            "Empowering, educating and elevating communities into the open financial system.",
          image:
            "https://www.givecrypto.org/static/images/givecrypto-share.png",
        };

        var HeadMeta =
          /*#__PURE__*/
          (function(_React$Component) {
            Object(
              _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ],
            )(HeadMeta, _React$Component);

            function HeadMeta(props) {
              Object(
                _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ],
              )(this, HeadMeta);

              return Object(
                _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ],
              )(
                this,
                Object(
                  _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[
                    "default"
                  ],
                )(HeadMeta).call(this, props),
              );
            }

            Object(
              _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )(HeadMeta, [
              {
                key: "render",
                value: function render() {
                  var _this$props = this.props,
                    path = _this$props.path,
                    _this$props$title = _this$props.title,
                    title =
                      _this$props$title === void 0
                        ? defaults.title
                        : _this$props$title,
                    _this$props$descripti = _this$props.description,
                    description =
                      _this$props$descripti === void 0
                        ? defaults.description
                        : _this$props$descripti,
                    _this$props$image = _this$props.image,
                    image =
                      _this$props$image === void 0
                        ? defaults.image
                        : _this$props$image;
                  return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    next_head__WEBPACK_IMPORTED_MODULE_5___default.a,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 33,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "twitter-card",
                        name: "twitter:card",
                        content: "summary",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "twitter-site",
                        name: "twitter:site",
                        content: "@givecrypto",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 35,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "twitter-title",
                        name: "twitter:title",
                        content: title,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "twitter-description",
                        name: "twitter:description",
                        content: description,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 37,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "twitter-image",
                        name: "twitter:image",
                        content: image,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 42,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "twitter-url",
                        name: "twitter:url",
                        content: "https://www.givecrypto.com".concat(path),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 43,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "facebook-type",
                        property: "og:type",
                        content: "article",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 49,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "facebook-title",
                        property: "og:title",
                        content: title,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 50,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "facebook-description",
                        property: "og:description",
                        content: description,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "facebook-image",
                        property: "og:image",
                        content: image,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 56,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                      "meta",
                      {
                        key: "facebook-url",
                        property: "og:url",
                        content: "https://www.givecrypto.com".concat(path),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 57,
                        },
                        __self: this,
                      },
                    ),
                  );
                },
              },
            ]);

            return HeadMeta;
          })(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

        /***/
      },

    /***/ "./components/Metrics/Age/index.tsx":
      /*!******************************************!*\
  !*** ./components/Metrics/Age/index.tsx ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-vis */ "react-vis",
        );
        /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react_vis__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
        );
        /* harmony import */ var _utils_useMeasure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../utils/useMeasure */ "./utils/useMeasure.ts",
        );
        /* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../components/Heading */ "./components/Metrics/components/Heading.tsx",
        );
        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Age/index.tsx";

        var Age = function Age() {
          var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();

          var _useMeasure = Object(
              _utils_useMeasure__WEBPACK_IMPORTED_MODULE_4__["default"],
            )(ref),
            width = _useMeasure.width;

          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            "div",
            {
              ref: ref,
              className: "pv4",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              _components_Heading__WEBPACK_IMPORTED_MODULE_5__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                },
                __self: this,
              },
              "Age",
            ),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              react_vis__WEBPACK_IMPORTED_MODULE_1__["XYPlot"],
              {
                yType: "ordinal",
                height: 275,
                width: width,
                xDistance: 100,
                style: {
                  overflow: "visible",
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalGridLines"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                  },
                  __self: this,
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                react_vis__WEBPACK_IMPORTED_MODULE_1__["XAxis"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                  },
                  __self: this,
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                react_vis__WEBPACK_IMPORTED_MODULE_1__["YAxis"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                  },
                  __self: this,
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                react_vis__WEBPACK_IMPORTED_MODULE_1__["HorizontalBarSeries"],
                {
                  animation: {
                    damping: 14,
                    stiffness: 100,
                  },
                  barWidth: 0.6,
                  data:
                    _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_3__[
                      "age"
                    ],
                  style: {},
                  color:
                    _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"]
                      .yellow,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                  },
                  __self: this,
                },
              ),
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Age;

        /***/
      },

    /***/ "./components/Metrics/Education/BarLine.tsx":
      /*!**************************************************!*\
  !*** ./components/Metrics/Education/BarLine.tsx ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @emotion/styled */ "@emotion/styled",
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _emotion_styled__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Education/BarLine.tsx";

        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        var Bar = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.div(
          function(_ref) {
            var color = _ref.color,
              value = _ref.value,
              fade = _ref.fade;
            return {
              height: "100%",
              width: value,
              background:
                color ||
                _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].blue,
              opacity: fade ? 0.5 : 1,
              transition: "opacity 200ms ease",
            };
          },
        );
        var BarContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.div(
          {
            height: 10,
            overflow: "hidden",
            borderRadius: 12,
            marginBottom: "3rem",
            background:
              _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"]
                .greyLightest,
          },
        );
        var Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.h2({
          fontSize: "3rem",
          fontWeight: 500,
          color:
            _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].coldWater,
          marginBottom: 12,
        });
        var Tiny = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.span({
          fontSize: "1rem",
          fontWeight: 400,
        });

        var BarLine = function BarLine(_ref2) {
          var items = _ref2.items,
            highlightId = _ref2.highlightId,
            onHighlight = _ref2.onHighlight,
            description = _ref2.description;
          var item = items.find(function(i) {
            return i.category === highlightId;
          });
          var title = highlightId
            ? "of Recipients ".concat(description, " ").concat(highlightId)
            : "Recipients";
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
            null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              Title,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                },
                __self: this,
              },
              item
                ? item.value
                : numberWithCommas(
                    _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_4__[
                      "totalParticipants"
                    ],
                  ),
              " ",
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                Tiny,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                  },
                  __self: this,
                },
                title,
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              BarContainer,
              {
                className: "flex",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                },
                __self: this,
              },
              items.map(function(item) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                  Bar,
                  Object(
                    _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ],
                  )(
                    {
                      key: "bar-".concat(item.id),
                      fade: highlightId && highlightId !== item.category,
                      onMouseOver: function onMouseOver() {
                        return onHighlight && onHighlight(item.category);
                      },
                      onMouseOut: function onMouseOut() {
                        return onHighlight && onHighlight();
                      },
                    },
                    item,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                      },
                      __self: this,
                    },
                  ),
                );
              }),
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = BarLine;

        /***/
      },

    /***/ "./components/Metrics/Education/index.tsx":
      /*!************************************************!*\
  !*** ./components/Metrics/Education/index.tsx ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/Heading */ "./components/Metrics/components/Heading.tsx",
        );
        /* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/List */ "./components/Metrics/components/List.tsx",
        );
        /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! chroma-js */ "chroma-js",
        );
        /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          chroma_js__WEBPACK_IMPORTED_MODULE_5__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
        );
        /* harmony import */ var _BarLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./BarLine */ "./components/Metrics/Education/BarLine.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Education/index.tsx";

        var Education = function Education() {
          var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](
              null,
            ),
            _React$useState2 = Object(
              _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )(_React$useState, 2),
            highlightId = _React$useState2[0],
            setHighlightId = _React$useState2[1];

          var dataWithColors = function dataWithColors(data) {
            return react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](
              function() {
                // Get the color for each item
                var getColor = function getColor(index) {
                  var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_5___default.a
                    .scale([
                      _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"]
                        .blue,
                      _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"]
                        .blueDark,
                    ])
                    .mode("rgb")
                    .colors(data.length);
                  return colorScale[index];
                }; // Return the item and inject the correct color

                return data.slice().map(function(item, index) {
                  return Object(
                    _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ],
                  )({}, item, {
                    color: getColor(index),
                  });
                });
              },
              [highlightId],
            );
          };

          var listItems = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](
            function() {
              return dataWithColors(
                _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                  "education"
                ],
              )
                .slice()
                .map(function(item, i) {
                  return {
                    id: "".concat(i),
                    color: item.color,
                    category: item.label,
                    label: "".concat(
                      Math.floor(
                        (item.angle *
                          _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                            "totalParticipants"
                          ]) /
                          100,
                      ),
                      " Recipients",
                    ),
                    value: "".concat(item.angle, "%"),
                  };
                });
            },
            [highlightId],
          );

          var handleHighlightChange = function handleHighlightChange(label) {
            setHighlightId(label);
          };

          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            "div",
            {
              className: "w-100 pl3",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              _components_Heading__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                },
                __self: this,
              },
              "Education",
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              _BarLine__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                description: "have completed",
                items: listItems,
                highlightId: highlightId,
                onHighlight: handleHighlightChange,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                },
                __self: this,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              _components_List__WEBPACK_IMPORTED_MODULE_4__["default"],
              {
                items: listItems,
                highlightId: highlightId,
                onHighlight: handleHighlightChange,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                },
                __self: this,
              },
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Education;

        /***/
      },

    /***/ "./components/Metrics/Gender/Legend.tsx":
      /*!**********************************************!*\
  !*** ./components/Metrics/Gender/Legend.tsx ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @emotion/styled */ "@emotion/styled",
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _emotion_styled__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _components_Swatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/Swatch */ "./components/Metrics/components/Swatch.tsx",
        );
        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Gender/Legend.tsx";

        var H2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.h2({
          fontSize: "0.9rem",
          fontWeight: 400,
          color: _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].grey,
          padding: "0 0 0 0.5rem",
          margin: 0,
        });
        var Pill = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div({
          background:
            _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
          border: "1px solid ".concat(
            _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].greyLightest,
          ),
          borderRadius: 12,
          padding: "0.5rem 0.5rem",
          margin: "0 1rem 0 0",
        });

        var Legend = function Legend(_ref) {
          var data = _ref.data;
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            "div",
            {
              className: "flex mb3",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32,
              },
              __self: this,
            },
            data.map(function(_ref2) {
              var label = _ref2.label,
                color = _ref2.color;
              return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                Pill,
                {
                  className: "flex items-center mr3 br3",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                  _components_Swatch__WEBPACK_IMPORTED_MODULE_3__["default"],
                  {
                    color: color,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                    },
                    __self: this,
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                  H2,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                    },
                    __self: this,
                  },
                  label,
                ),
              );
            }),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Legend;

        /***/
      },

    /***/ "./components/Metrics/Gender/index.tsx":
      /*!*********************************************!*\
  !*** ./components/Metrics/Gender/index.tsx ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react-vis */ "react-vis",
        );
        /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          react_vis__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! chroma-js */ "chroma-js",
        );
        /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          chroma_js__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! lodash */ "lodash",
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          lodash__WEBPACK_IMPORTED_MODULE_6__,
        );
        /* harmony import */ var _components_Tip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/Tip */ "./components/Tip.tsx",
        );
        /* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../components/Heading */ "./components/Metrics/components/Heading.tsx",
        );
        /* harmony import */ var _Legend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./Legend */ "./components/Metrics/Gender/Legend.tsx",
        );
        /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Gender/index.tsx";

        var Gender = function Gender() {
          var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](
              {},
            ),
            _React$useState2 = Object(
              _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )(_React$useState, 2),
            value = _React$useState2[0],
            setValue = _React$useState2[1];

          var dataWithColors = function dataWithColors(data) {
            return react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function() {
              // Get the color for each item
              var getColor = function getColor(index) {
                var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_4___default.a
                  .scale([
                    _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"]
                      .coldWater,
                    _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"].green,
                    _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"]
                      .yellow,
                  ])
                  .mode("rgb")
                  .colors(data.length);
                return colorScale[index];
              }; // Return the item and inject the correct color

              return data.slice().map(function(item, index) {
                return Object(
                  _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ],
                )({}, item, {
                  color: getColor(index),
                });
              });
            }, []);
          };

          var data = dataWithColors(
            _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__[
              "gender"
            ],
          );
          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            "div",
            {
              className: "flex flex-column justify-between h-100",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              _components_Heading__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                },
                __self: this,
              },
              "Gender",
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "div",
              {
                className: "flex justify-center",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                react_vis__WEBPACK_IMPORTED_MODULE_3__["RadialChart"],
                {
                  colorType: "literal",
                  innerRadius: 85,
                  radius: 120,
                  data: data,
                  width: 300,
                  height: 300,
                  onValueMouseOver: function onValueMouseOver(v) {
                    setValue({
                      data: v,
                      title: _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__[
                        "gender"
                      ].find(function(item) {
                        return item.label === v.label;
                      }).label,
                      metrics: [
                        {
                          label: "Total",
                          value: Math.floor(
                            _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__[
                              "totalParticipants"
                            ] *
                              (_content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__[
                                "gender"
                              ].find(function(item) {
                                return item.label === v.label;
                              }).angle *
                                0.01),
                          ),
                        },
                        {
                          label: "Percentage",
                          value: "".concat(
                            _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__[
                              "gender"
                            ].find(function(item) {
                              return item.label === v.label;
                            }).angle,
                            "%",
                          ),
                        },
                      ],
                    });
                  },
                  onSeriesMouseOut: function onSeriesMouseOut() {
                    return setValue({});
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                  },
                  __self: this,
                },
                !Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(
                  value,
                ) &&
                  react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                    react_vis__WEBPACK_IMPORTED_MODULE_3__["Hint"],
                    {
                      value: value.data,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                      _components_Tip__WEBPACK_IMPORTED_MODULE_7__["default"],
                      {
                        title: value.title,
                        metrics: value.metrics,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76,
                        },
                        __self: this,
                      },
                    ),
                  ),
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              _Legend__WEBPACK_IMPORTED_MODULE_9__["default"],
              {
                highlight: value.title,
                data: data,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                },
                __self: this,
              },
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Gender;

        /***/
      },

    /***/ "./components/Metrics/Household/index.tsx":
      /*!************************************************!*\
  !*** ./components/Metrics/Household/index.tsx ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! chroma-js */ "chroma-js",
        );
        /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          chroma_js__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! react-vis */ "react-vis",
        );
        /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          react_vis__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../components/List */ "./components/Metrics/components/List.tsx",
        );
        /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! lodash */ "lodash",
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          lodash__WEBPACK_IMPORTED_MODULE_8__,
        );
        /* harmony import */ var _Education_BarLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../Education/BarLine */ "./components/Metrics/Education/BarLine.tsx",
        );
        /* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../components/Heading */ "./components/Metrics/components/Heading.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Household/index.tsx";

        var Household = function Household() {
          var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](
              null,
            ),
            _React$useState2 = Object(
              _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )(_React$useState, 2),
            highlightId = _React$useState2[0],
            setHighlightId = _React$useState2[1]; // Hold on to any timers

          var timers = [];

          var dataWithColors = function dataWithColors(data) {
            return react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](
              function() {
                // Get the color for each item
                var getColor = function getColor(index) {
                  var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_3___default.a
                    .scale([
                      _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"]
                        .blueDark,
                      _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"].red,
                    ])
                    .mode("rgb")
                    .colors(data.length);

                  if (
                    Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isNil"])(
                      highlightId,
                    )
                  ) {
                    return colorScale[index];
                  } else {
                    return index ===
                      data.findIndex(function(a) {
                        return a.label === highlightId;
                      })
                      ? chroma_js__WEBPACK_IMPORTED_MODULE_3___default.a
                          .mix(
                            colorScale[index],
                            _design_system__WEBPACK_IMPORTED_MODULE_5__[
                              "colors"
                            ].coldWater,
                          )
                          .css()
                      : colorScale[index];
                  }
                }; // Return the item and inject the correct color

                return data.slice().map(function(item, index) {
                  return Object(
                    _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ],
                  )({}, item, {
                    color: getColor(index),
                  });
                });
              },
              [highlightId],
            );
          };

          var listItems = dataWithColors(
            _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
              "household"
            ],
          )
            .slice()
            .map(function(item, i) {
              return {
                id: "".concat(i),
                color: item.color,
                category: item.label,
                label: "".concat(item.angle, " Recipients"),
                value: "".concat(
                  (
                    (item.angle /
                      _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                        "totalParticipants"
                      ]) *
                    100
                  ).toFixed(2),
                  "%",
                ),
              };
            });

          var handleHighlightChange = function handleHighlightChange(label) {
            timers.map(clearTimeout);
            timers.push(
              setTimeout(function() {
                setHighlightId(label);
              }, 10),
            );
          };

          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            "div",
            {
              className: "pv4",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              _components_Heading__WEBPACK_IMPORTED_MODULE_10__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                },
                __self: this,
              },
              "Household Size",
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "div",
              {
                className: "flex flex-wrap items-center mb4",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                "div",
                {
                  className: "w-40 pv4",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                  "div",
                  {
                    className: "flex items-center justify-between",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                    react_vis__WEBPACK_IMPORTED_MODULE_4__["RadialChart"],
                    {
                      colorType: "literal",
                      data: dataWithColors(
                        _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                          "household"
                        ],
                      ),
                      width: 300,
                      height: 300,
                      innerRadius: 85,
                      radius: 120,
                      animation: true,
                      style: {
                        boxShadow:
                          _design_system__WEBPACK_IMPORTED_MODULE_5__["shadows"]
                            .card,
                      },
                      onValueMouseOver: function onValueMouseOver(v) {
                        handleHighlightChange(
                          _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                            "household"
                          ].find(function(item) {
                            return item.label === v.label;
                          }).label,
                        );
                      },
                      onSeriesMouseOut: function onSeriesMouseOut() {
                        handleHighlightChange();
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                      },
                      __self: this,
                    },
                  ),
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                "div",
                {
                  className: "w-60",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                  _Education_BarLine__WEBPACK_IMPORTED_MODULE_9__["default"],
                  {
                    description: "have a housold size of",
                    items: listItems,
                    highlightId: highlightId,
                    onHighlight: handleHighlightChange,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                    },
                    __self: this,
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                  _components_List__WEBPACK_IMPORTED_MODULE_6__["default"],
                  {
                    items: listItems,
                    highlightId: highlightId,
                    onHighlight: handleHighlightChange,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                    },
                    __self: this,
                  },
                ),
              ),
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Household;

        /***/
      },

    /***/ "./components/Metrics/Income/index.tsx":
      /*!*********************************************!*\
  !*** ./components/Metrics/Income/index.tsx ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! chroma-js */ "chroma-js",
        );
        /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          chroma_js__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! react-vis */ "react-vis",
        );
        /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          react_vis__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../components/List */ "./components/Metrics/components/List.tsx",
        );
        /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! lodash */ "lodash",
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          lodash__WEBPACK_IMPORTED_MODULE_8__,
        );
        /* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../components/Heading */ "./components/Metrics/components/Heading.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Income/index.tsx";

        var Income = function Income() {
          var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](
              null,
            ),
            _React$useState2 = Object(
              _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )(_React$useState, 2),
            highlightId = _React$useState2[0],
            setHighlightId = _React$useState2[1]; // Hold on to any timers

          var timers = [];

          var dataWithColors = function dataWithColors(data) {
            return react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](
              function() {
                // Get the color for each item
                var getColor = function getColor(index) {
                  var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_3___default.a
                    .scale([
                      _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"]
                        .green,
                      _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"]
                        .greenDark,
                    ])
                    .mode("rgb")
                    .colors(data.length);

                  if (
                    Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isNil"])(
                      highlightId,
                    )
                  ) {
                    return colorScale[index];
                  } else {
                    return index ===
                      data.findIndex(function(a) {
                        return a.label === highlightId;
                      })
                      ? chroma_js__WEBPACK_IMPORTED_MODULE_3___default.a
                          .mix(
                            colorScale[index],
                            _design_system__WEBPACK_IMPORTED_MODULE_5__[
                              "colors"
                            ].coldWater,
                          )
                          .css()
                      : colorScale[index];
                  }
                }; // Return the item and inject the correct color

                return data.slice().map(function(item, index) {
                  return Object(
                    _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ],
                  )({}, item, {
                    color: getColor(index),
                  });
                });
              },
              [highlightId],
            );
          };

          var listItems = dataWithColors(
            _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
              "income"
            ],
          )
            .slice()
            .map(function(item, i) {
              return {
                id: "".concat(i),
                color: item.color,
                category: item.label,
                label: "".concat(
                  Math.floor(
                    (item.angle *
                      _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                        "totalParticipants"
                      ]) /
                      100,
                  ),
                  " Recipients",
                ),
                value: item.subLabel,
              };
            });

          var handleHighlightChange = function handleHighlightChange(label) {
            timers.map(clearTimeout);
            timers.push(
              setTimeout(function() {
                setHighlightId(label);
              }, 10),
            );
          };

          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            "div",
            {
              className: "pv4",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              _components_Heading__WEBPACK_IMPORTED_MODULE_9__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                },
                __self: this,
              },
              "Income",
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "div",
              {
                className: "flex flex-wrap items-center mb4",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                "div",
                {
                  className: "w-40 pv4",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                  "div",
                  {
                    className: "flex items-center justify-between",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                    react_vis__WEBPACK_IMPORTED_MODULE_4__["RadialChart"],
                    {
                      colorType: "literal",
                      data: dataWithColors(
                        _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                          "income"
                        ],
                      ),
                      width: 300,
                      height: 300,
                      innerRadius: 85,
                      radius: 120,
                      animation: true,
                      style: {
                        boxShadow:
                          _design_system__WEBPACK_IMPORTED_MODULE_5__["shadows"]
                            .card,
                      },
                      onValueMouseOver: function onValueMouseOver(v) {
                        handleHighlightChange(
                          _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                            "income"
                          ].find(function(item) {
                            return item.label === v.label;
                          }).label,
                        );
                      },
                      onSeriesMouseOut: function onSeriesMouseOut() {
                        handleHighlightChange();
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                      },
                      __self: this,
                    },
                  ),
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                "div",
                {
                  className: "w-60",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                  _components_List__WEBPACK_IMPORTED_MODULE_6__["default"],
                  {
                    items: listItems,
                    highlightId: highlightId,
                    onHighlight: handleHighlightChange,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                    },
                    __self: this,
                  },
                ),
              ),
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Income;

        /***/
      },

    /***/ "./components/Metrics/components/Heading.tsx":
      /*!***************************************************!*\
  !*** ./components/Metrics/components/Heading.tsx ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @emotion/styled */ "@emotion/styled",
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _emotion_styled__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../design-system */ "./design-system/index.ts",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/components/Heading.tsx";

        var H2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.h2({
          fontSize: "1rem",
          color:
            _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].coldWater,
        });

        var Heading = function Heading(props) {
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            H2,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
              },
              __self: this,
            }),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Heading;

        /***/
      },

    /***/ "./components/Metrics/components/List.tsx":
      /*!************************************************!*\
  !*** ./components/Metrics/components/List.tsx ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @emotion/styled */ "@emotion/styled",
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _emotion_styled__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _Swatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./Swatch */ "./components/Metrics/components/Swatch.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/components/List.tsx";

        var ListItemContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.div(
          function(_ref) {
            var fade = _ref.fade;
            return {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              // padding: "0 1.2rem",
              transition: "all 200ms ease",
              borderBottom: "1px solid ".concat(
                _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"]
                  .greyLightest,
              ),
              "&:last-child": {
                borderBottom: "none",
              },
              "> *": {
                transition: "all 200ms ease",
                opacity: fade ? 0.4 : 1,
              },
            };
          },
        );
        var Left = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.div({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        });
        var Right = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.div({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: "40%",
          "&:last-child": {
            textAlign: "right",
          },
        });
        var Category = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.h3(
          {
            fontWeight: 500,
            fontSize: "0.9rem",
            color:
              _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"].greyDark,
            marginLeft: 10,
          },
        );
        var Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.h4({
          fontWeight: "normal",
          fontSize: "0.9rem",
          color: _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"].grey,
          marginLeft: 30,
          padding: 0,
          minWidth: 45,
        });

        var ListItem = function ListItem(_ref2) {
          var item = _ref2.item,
            highlightId = _ref2.highlightId,
            rest = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )(_ref2, ["item", "highlightId"]);

          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            ListItemContainer,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )(
              {
                fade: highlightId && highlightId !== item.category,
              },
              rest,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                },
                __self: this,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                _Swatch__WEBPACK_IMPORTED_MODULE_5__["default"],
                {
                  color: item.color,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                  },
                  __self: this,
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                Category,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                  },
                  __self: this,
                },
                item.category,
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              Right,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                Label,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                  },
                  __self: this,
                },
                item.label,
              ),
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                Label,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                  },
                  __self: this,
                },
                item.value,
              ),
            ),
          );
        };

        var ListContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.section(
          {
            display: "flex",
            flexDirection: "column", // border: `1px solid ${colors.greyLightest}`,
            // borderRadius: 8,
            // boxShadow: shadows.card,
          },
        );

        var List = function List(_ref3) {
          var items = _ref3.items,
            highlightId = _ref3.highlightId,
            onHighlight = _ref3.onHighlight;
          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            ListContainer,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101,
              },
              __self: this,
            },
            items.map(function(item) {
              console.log(item);
              return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                ListItem,
                {
                  item: item,
                  highlightId: highlightId,
                  onMouseOver: function onMouseOver() {
                    return onHighlight && onHighlight(item.category);
                  },
                  onMouseOut: function onMouseOut() {
                    return onHighlight && onHighlight();
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                  },
                  __self: this,
                },
              );
            }),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = List;

        /***/
      },

    /***/ "./components/Metrics/components/Swatch.tsx":
      /*!**************************************************!*\
  !*** ./components/Metrics/components/Swatch.tsx ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @emotion/styled */ "@emotion/styled",
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _emotion_styled__WEBPACK_IMPORTED_MODULE_2__,
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/components/Swatch.tsx";

        var Div = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.div(
          function(_ref) {
            var color = _ref.color;
            return {
              width: 15,
              height: 15,
              margin: 0,
              padding: 0,
              borderRadius: 4,
              backgroundColor: color,
              transition: "background 200ms ease",
            };
          },
        );

        var Swatch = function Swatch(props) {
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            Div,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19,
              },
              __self: this,
            }),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Swatch;

        /***/
      },

    /***/ "./components/Tip.tsx":
      /*!****************************!*\
  !*** ./components/Tip.tsx ***!
  \****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @emotion/styled */ "@emotion/styled",
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _emotion_styled__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );
        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Tip.tsx";

        var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div(
          {
            borderRadius: 8,
            backgroundColor:
              _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].black,
            padding: "1rem 1rem",
            boxShadow:
              _design_system__WEBPACK_IMPORTED_MODULE_2__["shadows"].card,
            opacity: 0.92,
          },
        );
        var Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.h2({
          color: _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
          fontSize: "1rem",
          padding: 0,
          paddingBottom: "0.4rem",
          margin: 0,
        });
        var ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.h4(
          {
            color: _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
            fontWeight: "normal",
            fontSize: "0.75rem",
            opacity: 0.9,
            padding: 0,
            paddingTop: "0.25rem",
            margin: 0,
          },
        );

        var Tip = function Tip(props) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            Container,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              Title,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                },
                __self: this,
              },
              props.title,
            ),
            props.metrics.map(function(_ref) {
              var label = _ref.label,
                value = _ref.value;
              return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                ListItem,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                  },
                  __self: this,
                },
                label,
                ": ",
                value,
              );
            }),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Tip;

        /***/
      },

    /***/ "./components/Wrapper.tsx":
      /*!********************************!*\
  !*** ./components/Wrapper.tsx ***!
  \********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! glamorous */ "glamorous",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          glamorous__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../utils/Scale */ "./utils/Scale.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Wrapper.tsx";

        // export interface WrapperState {}
        var Wrapper = function Wrapper(props) {
          var color = props.color,
            background = props.background,
            narrow = props.narrow,
            wide = props.wide,
            children = props.children,
            rest = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ],
            )(props, ["color", "background", "narrow", "wide", "children"]);

          var Container = glamorous__WEBPACK_IMPORTED_MODULE_4___default.a.div(
            {
              width: "100%",
              background: background,
            },
            function(styleProps) {
              if (!styleProps.flush) {
                return Object(
                  _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                  ],
                )(
                  {
                    padding: "0 ".concat(
                      Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_7__["Step"])(
                        4,
                      ),
                    ),
                  },
                  _design_system__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].l,
                  {
                    padding: 0,
                  },
                );
              }

              if (styleProps.pattern) {
                return {
                  position: "relative",
                  zIndex: 1,
                  "> *": {
                    position: "relative",
                    zIndex: 1,
                  },
                  background: background || "#ffffff",
                  "&::after, &::before": {
                    zIndex: 0,
                    content: "''",
                    display: "block",
                    background: "url(/static/images/pattern@2x.png)",
                    backgroundSize: "100%",
                    position: "absolute",
                    left: -200,
                    width: 423,
                    height: 263,
                    transform: "translateY(40px)",
                  },
                  "&::after": {
                    left: "auto",
                    right: -200,
                  },
                };
              }
            },
          );
          var narrowWidth = narrow ? 890 : 1100;
          var defaultWidth = wide ? 1240 : narrowWidth;
          var WrapperInner = glamorous__WEBPACK_IMPORTED_MODULE_4___default.a.section(
            Object(
              _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )(
              {
                maxWidth: narrow ? narrowWidth : defaultWidth,
                margin: "0 auto",
              },
              rest,
            ),
          );
          return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
            Container,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )({}, rest, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
              WrapperInner,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                },
                __self: this,
              },
              children,
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Wrapper;

        /***/
      },

    /***/ "./content/ambassadors-report/hero.ts":
      /*!********************************************!*\
  !*** ./content/ambassadors-report/hero.ts ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          title: "Real Time Report",
          subtitle: "Venezuelan Ambassador Program",
        };

        /***/
      },

    /***/ "./content/ambassadors-report/metrics.ts":
      /*!***********************************************!*\
  !*** ./content/ambassadors-report/metrics.ts ***!
  \***********************************************/
      /*! exports provided: age, totalParticipants, gender, income, education, household */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "age",
          function() {
            return age;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "totalParticipants",
          function() {
            return totalParticipants;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "gender",
          function() {
            return gender;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "income",
          function() {
            return income;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "education",
          function() {
            return education;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "household",
          function() {
            return household;
          },
        );
        var age = [
          {
            x: 38,
            y: "75+",
          },
          {
            x: 61,
            y: "65-74",
          },
          {
            x: 146,
            y: "55-64",
          },
          {
            x: 212,
            y: "45-54",
          },
          {
            x: 233,
            y: "35-44",
          },
          {
            x: 184,
            y: "25-34",
          },
          {
            x: 110,
            y: "18-24",
          },
        ];
        var totalParticipants = 1050;
        var gender = [
          {
            label: "Female",
            subLabel: "62.5%",
            angle: 62.5,
          },
          {
            label: "Male",
            subLabel: "36.4%",
            angle: 36.4,
          },
          {
            label: "Other",
            subLabel: "1.1%",
            angle: 1.1,
          },
        ];
        var income = [
          {
            label: "$0-$20",
            subLabel: "12%",
            angle: 12,
          },
          {
            label: "$21-$50",
            subLabel: "7.4%",
            angle: 7.4,
          },
          {
            label: "$51-$100",
            subLabel: "9.1%",
            angle: 9.1,
          },
          {
            label: "$101-$250",
            subLabel: "18%",
            angle: 18,
          },
          {
            label: "$251-$500",
            subLabel: "15%",
            angle: 15,
          },
          {
            label: "$501+",
            subLabel: "4%",
            angle: 4,
          },
        ];
        var education = [
          {
            label: "No Education",
            angle: 6,
          },
          {
            label: "Junior High",
            angle: 4,
          },
          {
            label: "High School",
            angle: 37,
          },
          {
            label: "College",
            angle: 23,
          },
          {
            label: "Grad School",
            angle: 30,
          },
        ];
        var household = [
          {
            label: "1",
            angle: 17,
          },
          {
            label: "2",
            angle: 107,
          },
          {
            label: "3",
            angle: 221,
          },
          {
            label: "4",
            angle: 330,
          },
          {
            label: "5",
            angle: 185,
          },
          {
            label: "6",
            angle: 90,
          },
          {
            label: "7",
            angle: 25,
          },
          {
            label: "8",
            angle: 20,
          },
          {
            label: "9",
            angle: 12,
          },
          {
            label: "10",
            angle: 4,
          },
          {
            label: "11+",
            angle: 8,
          },
        ];

        /***/
      },

    /***/ "./content/ambassadors-report/seo.ts":
      /*!*******************************************!*\
  !*** ./content/ambassadors-report/seo.ts ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          title:
            "GiveCrypto Ambassadors Report | Empowering, educating and elevating communities into the open financial system.",
          description:
            "Give the gift of crypto to help people in need around the world.",
        };

        /***/
      },

    /***/ "./design-system/breakpoints.ts":
      /*!**************************************!*\
  !*** ./design-system/breakpoints.ts ***!
  \**************************************/
      /*! exports provided: breakpoints, mediaQueries, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "breakpoints",
          function() {
            return breakpoints;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "mediaQueries",
          function() {
            return mediaQueries;
          },
        );
        var breakpoints = {
          ns: "30em",
          m: "60em",
        };
        var mediaQueries = {
          s: "@media only screen and (max-width: ".concat(breakpoints.ns, ")"),
          ns: "@media only screen and (min-width: ".concat(breakpoints.ns, ")"),
          m: "@media only screen and (min-width: 30em) and (max-width: ".concat(
            breakpoints.m,
            ")",
          ),
          l: "@media only screen and (min-width: ".concat(breakpoints.m, ")"),
        };
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = mediaQueries;

        /***/
      },

    /***/ "./design-system/colors.ts":
      /*!*********************************!*\
  !*** ./design-system/colors.ts ***!
  \*********************************/
      /*! exports provided: colors, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "colors",
          function() {
            return colors;
          },
        );
        var colors = {
          green: "#00CD90",
          greenDark: "#286D59",
          blue: "#5890FF",
          blueDark: "#374056",
          red: "#D9694B",
          redWarning: "rgba(248, 90, 39, .20)",
          grey: "#898F9C",
          greyLight: "#9FA4AE",
          greyDark: "#4E5665",
          greyLighter: "#DBDBDB",
          greyLightest: "#e7eaf2",
          black: "#323232",
          white: "#ffffff",
          yellow: "#fbd281",
          yellowLight: "#fbe2bb",
          coldWater: "#064E72",
          scale: {
            green: [
              "#00cd90",
              "#11c089",
              "#1ab482",
              "#20a87b",
              "#239c74",
              "#26906d",
              "#278466",
              "#287860",
              "#286d59",
            ],
          },
        };
        /* harmony default export */ __webpack_exports__["default"] = colors;

        /***/
      },

    /***/ "./design-system/index.ts":
      /*!********************************!*\
  !*** ./design-system/index.ts ***!
  \********************************/
      /*! exports provided: colors, shadows, breakpoints */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./colors */ "./design-system/colors.ts",
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "colors",
          function() {
            return _colors__WEBPACK_IMPORTED_MODULE_0__["default"];
          },
        );

        /* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./shadows */ "./design-system/shadows.ts",
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "shadows",
          function() {
            return _shadows__WEBPACK_IMPORTED_MODULE_1__["default"];
          },
        );

        /* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./breakpoints */ "./design-system/breakpoints.ts",
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "breakpoints",
          function() {
            return _breakpoints__WEBPACK_IMPORTED_MODULE_2__["default"];
          },
        );

        /***/
      },

    /***/ "./design-system/shadows.ts":
      /*!**********************************!*\
  !*** ./design-system/shadows.ts ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          default: "0 8px 16px rgba(0,0,0,0.075)",
          light: "0 4px 12px rgba(0,0,0,0.1)",
          card: "0 18px 48px rgba(0,0,0,0.075)",
          none: "0 18px 48px rgba(0,0,0,0)",
        };

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/create */ "core-js/library/fn/object/create",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
      /*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
      /*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
      /*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
      /*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
      /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
      /*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
      /*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/symbol */ "core-js/library/fn/symbol",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
      /*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _arrayWithHoles;
          },
        );
        /* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js",
        );
        /* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__,
        );

        function _arrayWithHoles(arr) {
          if (
            _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)
          )
            return arr;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _assertThisInitialized;
          },
        );
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }

          return self;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _classCallCheck;
          },
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
      /*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _createClass;
          },
        );
        /* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js",
        );
        /* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__,
        );

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;

            _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(
              target,
              descriptor.key,
              descriptor,
            );
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _defineProperty;
          },
        );
        /* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js",
        );
        /* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__,
        );

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(
              obj,
              key,
              {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              },
            );
          } else {
            obj[key] = value;
          }

          return obj;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
      /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _extends;
          },
        );
        /* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js",
        );
        /* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__,
        );

        function _extends() {
          _extends =
            _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a ||
            function(target) {
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

          return _extends.apply(this, arguments);
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _getPrototypeOf;
          },
        );
        /* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js",
        );
        /* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js",
        );
        /* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__,
        );

        function _getPrototypeOf(o) {
          _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a
            ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a
            : function _getPrototypeOf(o) {
                return (
                  o.__proto__ ||
                  _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(
                    o,
                  )
                );
              };
          return _getPrototypeOf(o);
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _inherits;
          },
        );
        /* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js",
        );
        /* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js",
        );

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          }

          subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(
              subClass,
              superClass,
            );
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _iterableToArrayLimit;
          },
        );
        /* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js",
        );
        /* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__,
        );

        function _iterableToArrayLimit(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (
              var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(
                  arr,
                ),
                _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _nonIterableRest;
          },
        );
        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance",
          );
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _objectSpread;
          },
        );
        /* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js",
        );
        /* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js",
        );
        /* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js",
        );
        /* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js",
        );

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(
              source,
            );

            if (
              typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a ===
              "function"
            ) {
              ownKeys = ownKeys.concat(
                _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(
                  source,
                ).filter(function(sym) {
                  return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(
                    source,
                    sym,
                  ).enumerable;
                }),
              );
            }

            ownKeys.forEach(function(key) {
              Object(
                _defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"],
              )(target, key, source[key]);
            });
          }

          return target;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
      /*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _objectWithoutProperties;
          },
        );
        /* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js",
        );
        /* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js",
        );

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = Object(
            _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ],
          )(source, excluded);
          var key, i;

          if (
            _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a
          ) {
            var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(
              source,
            );

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
              target[key] = source[key];
            }
          }

          return target;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
      /*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _objectWithoutPropertiesLoose;
          },
        );
        /* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js",
        );
        /* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__,
        );

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};

          var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(
            source,
          );

          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
      /*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _possibleConstructorReturn;
          },
        );
        /* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js",
        );
        /* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js",
        );

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (Object(
              _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"],
            )(call) === "object" ||
              typeof call === "function")
          ) {
            return call;
          }

          return Object(
            _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"],
          )(self);
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _setPrototypeOf;
          },
        );
        /* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js",
        );
        /* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__,
        );

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };

          return _setPrototypeOf(o, p);
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _slicedToArray;
          },
        );
        /* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js",
        );
        /* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js",
        );
        /* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js",
        );

        function _slicedToArray(arr, i) {
          return (
            Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(
              arr,
            ) ||
            Object(
              _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"],
            )(arr, i) ||
            Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])()
          );
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _typeof;
          },
        );
        /* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js",
        );
        /* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js",
        );
        /* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__,
        );

        function _typeof2(obj) {
          if (
            typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a ===
              "function" &&
            typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a ===
              "symbol"
          ) {
            _typeof2 = function _typeof2(obj) {
              return typeof obj;
            };
          } else {
            _typeof2 = function _typeof2(obj) {
              return obj &&
                typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a ===
                  "function" &&
                obj.constructor ===
                  _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a &&
                obj !==
                  _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a
                    .prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof2(obj);
        }

        function _typeof(obj) {
          if (
            typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a ===
              "function" &&
            _typeof2(
              _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a,
            ) === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a ===
                  "function" &&
                obj.constructor ===
                  _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a &&
                obj !==
                  _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a
                    .prototype
                ? "symbol"
                : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        /***/
      },

    /***/ "./pages/report.tsx":
      /*!**************************!*\
  !*** ./pages/report.tsx ***!
  \**************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @emotion/styled */ "@emotion/styled",
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _emotion_styled__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! next/head */ "next/head",
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _components_Analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/Analytics */ "./components/Analytics.tsx",
        );
        /* harmony import */ var _content_ambassadors_report_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../content/ambassadors-report/seo */ "./content/ambassadors-report/seo.ts",
        );
        /* harmony import */ var _content_ambassadors_report_hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../content/ambassadors-report/hero */ "./content/ambassadors-report/hero.ts",
        );
        /* harmony import */ var _components_HeadMeta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../components/HeadMeta */ "./components/HeadMeta.tsx",
        );
        /* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../components/Wrapper */ "./components/Wrapper.tsx",
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../utils/Scale */ "./utils/Scale.tsx",
        );
        /* harmony import */ var _components_Metrics_Gender__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../components/Metrics/Gender */ "./components/Metrics/Gender/index.tsx",
        );
        /* harmony import */ var _components_Metrics_Education__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../components/Metrics/Education */ "./components/Metrics/Education/index.tsx",
        );
        /* harmony import */ var _components_Metrics_Age__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../components/Metrics/Age */ "./components/Metrics/Age/index.tsx",
        );
        /* harmony import */ var _components_Metrics_Income__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../components/Metrics/Income */ "./components/Metrics/Income/index.tsx",
        );
        /* harmony import */ var _components_Metrics_Household__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../components/Metrics/Household */ "./components/Metrics/Household/index.tsx",
        );
        /* harmony import */ var _utils_rehydrate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../utils/rehydrate */ "./utils/rehydrate.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/pages/report.tsx";

        // Refresh styles

        // Styled Components

        var Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.h2(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          )(
            {
              color:
                _design_system__WEBPACK_IMPORTED_MODULE_9__["colors"].coldWater,
              fontWeight: 600,
              marginBottom: 0,
              paddingBottom: 0,
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_10__["Step"],
              )(4.5),
            },
            _design_system__WEBPACK_IMPORTED_MODULE_9__["breakpoints"].ns,
            {
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_10__["Step"],
              )(5.45),
            },
          ),
        );
        var Subtitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.h1(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          )(
            {
              paddingBottom: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_10__["Step"],
              )(3),
              marginTop: 0,
              paddingTop: 0,
              color:
                _design_system__WEBPACK_IMPORTED_MODULE_9__["colors"].coldWater,
              fontWeight: 400,
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_10__["Step"],
              )(4.5),
            },
            _design_system__WEBPACK_IMPORTED_MODULE_9__["breakpoints"].ns,
            {
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_10__["Step"],
              )(5.45),
            },
          ),
        );

        var Report = function Report() {
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            _components_Analytics__WEBPACK_IMPORTED_MODULE_4__["default"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              next_head__WEBPACK_IMPORTED_MODULE_3___default.a,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                "title",
                {
                  key: "head-title",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                  },
                  __self: this,
                },
                _content_ambassadors_report_seo__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ].title,
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              _components_HeadMeta__WEBPACK_IMPORTED_MODULE_7__["default"],
              {
                path: "/report",
                title:
                  _content_ambassadors_report_seo__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ].title,
                description:
                  _content_ambassadors_report_seo__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ].description,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                },
                __self: this,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              _components_Wrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                className: "ph3 ph0-l bb b--light-gray",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                Title,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                  },
                  __self: this,
                },
                _content_ambassadors_report_hero__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].title,
              ),
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                Subtitle,
                {
                  className: "lh-copy",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                  },
                  __self: this,
                },
                _content_ambassadors_report_hero__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].subtitle,
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              _components_Wrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                className: "ph3 ph0-l bb b--light-gray",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                "div",
                {
                  className: "flex",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                  "div",
                  {
                    className: "w-50 br b--light-gray pt4",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    _components_Metrics_Gender__WEBPACK_IMPORTED_MODULE_11__[
                      "default"
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                      },
                      __self: this,
                    },
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                  "div",
                  {
                    className: "w-50 pl3 pt4",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    _components_Metrics_Education__WEBPACK_IMPORTED_MODULE_12__[
                      "default"
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                      },
                      __self: this,
                    },
                  ),
                ),
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              _components_Wrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                className: "ph3 ph0-l bb b--light-gray",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                _components_Metrics_Age__WEBPACK_IMPORTED_MODULE_13__[
                  "default"
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                  },
                  __self: this,
                },
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              _components_Wrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                className: "ph3 ph0-l bb b--light-gray",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                _components_Metrics_Income__WEBPACK_IMPORTED_MODULE_14__[
                  "default"
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                  },
                  __self: this,
                },
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              _components_Wrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                className: "ph3 ph0-l bb b--light-gray",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                _components_Metrics_Household__WEBPACK_IMPORTED_MODULE_15__[
                  "default"
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                  },
                  __self: this,
                },
              ),
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Report;

        /***/
      },

    /***/ "./utils/Scale.tsx":
      /*!*************************!*\
  !*** ./utils/Scale.tsx ***!
  \*************************/
      /*! exports provided: Interval, Step, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Interval",
          function() {
            return Interval;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Step",
          function() {
            return Step;
          },
        );
        /* harmony import */ var natural_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! natural-scale */ "natural-scale",
        );
        /* harmony import */ var natural_scale__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          natural_scale__WEBPACK_IMPORTED_MODULE_0__,
        );

        var Interval =
          natural_scale__WEBPACK_IMPORTED_MODULE_0__["Ratio"].MINOR_SEVENTH;
        var Step = Object(natural_scale__WEBPACK_IMPORTED_MODULE_0__["Scale"])({
          interval: Interval,
          unit: "rem",
        });
        /* harmony default export */ __webpack_exports__["default"] = {
          Step: Step,
          Interval: Interval,
        };

        /***/
      },

    /***/ "./utils/rehydrate.tsx":
      /*!*****************************!*\
  !*** ./utils/rehydrate.tsx ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! glamor */ "glamor",
        );
        /* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          glamor__WEBPACK_IMPORTED_MODULE_0__,
        );

        var loadStyles = function loadStyles() {
          if (typeof window !== "undefined") {
            window.__NEXT_DATA__ = window.__NEXT_DATA__ || {
              ids: ["test-element-id"],
            };
            Object(glamor__WEBPACK_IMPORTED_MODULE_0__["rehydrate"])(
              window.__NEXT_DATA__.ids,
            );
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = loadStyles();

        /***/
      },

    /***/ "./utils/useMeasure.ts":
      /*!*****************************!*\
  !*** ./utils/useMeasure.ts ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return useMeasure;
          },
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! resize-observer-polyfill */ "resize-observer-polyfill",
        );
        /* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__,
        );

        function useMeasure(ref) {
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_1__["useState"],
            )(
              // DOMRectReadOnly.fromRect()
              {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
            ),
            _useState2 = Object(
              _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )(_useState, 2),
            bounds = _useState2[0],
            setContentRect = _useState2[1];

          Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(
            function() {
              var animationFrameId = NaN;

              var measure = function measure(_ref) {
                var _ref2 = Object(
                    _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ],
                  )(_ref, 1),
                  entry = _ref2[0];

                animationFrameId = window.requestAnimationFrame(function() {
                  setContentRect(entry.contentRect);
                });
              };

              var ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a(
                measure,
              );
              ro.observe(ref.current);
              return function() {
                window.cancelAnimationFrame(animationFrameId);
                ro.disconnect();
              };
            },
            [],
          );
          return bounds;
        }

        /***/
      },

    /***/ 3:
      /*!********************************!*\
  !*** multi ./pages/report.tsx ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/jklb/dev/givecrypto/website/pages/report.tsx */ "./pages/report.tsx",
        );

        /***/
      },

    /***/ "@emotion/styled":
      /*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("@emotion/styled");

        /***/
      },

    /***/ "chroma-js":
      /*!****************************!*\
  !*** external "chroma-js" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("chroma-js");

        /***/
      },

    /***/ "core-js/library/fn/array/is-array":
      /*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/array/is-array");

        /***/
      },

    /***/ "core-js/library/fn/get-iterator":
      /*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/get-iterator");

        /***/
      },

    /***/ "core-js/library/fn/object/assign":
      /*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/assign");

        /***/
      },

    /***/ "core-js/library/fn/object/create":
      /*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/create");

        /***/
      },

    /***/ "core-js/library/fn/object/define-property":
      /*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/define-property");

        /***/
      },

    /***/ "core-js/library/fn/object/get-own-property-descriptor":
      /*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

        /***/
      },

    /***/ "core-js/library/fn/object/get-own-property-symbols":
      /*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/get-own-property-symbols");

        /***/
      },

    /***/ "core-js/library/fn/object/get-prototype-of":
      /*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/get-prototype-of");

        /***/
      },

    /***/ "core-js/library/fn/object/keys":
      /*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/keys");

        /***/
      },

    /***/ "core-js/library/fn/object/set-prototype-of":
      /*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/set-prototype-of");

        /***/
      },

    /***/ "core-js/library/fn/symbol":
      /*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/symbol");

        /***/
      },

    /***/ "core-js/library/fn/symbol/iterator":
      /*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/symbol/iterator");

        /***/
      },

    /***/ glamor:
      /*!*************************!*\
  !*** external "glamor" ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("glamor");

        /***/
      },

    /***/ glamorous:
      /*!****************************!*\
  !*** external "glamorous" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("glamorous");

        /***/
      },

    /***/ lodash:
      /*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("lodash");

        /***/
      },

    /***/ "natural-scale":
      /*!********************************!*\
  !*** external "natural-scale" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("natural-scale");

        /***/
      },

    /***/ "next/head":
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/head");

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react");

        /***/
      },

    /***/ "react-ga":
      /*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-ga");

        /***/
      },

    /***/ "react-vis":
      /*!****************************!*\
  !*** external "react-vis" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-vis");

        /***/
      },

    /***/ "resize-observer-polyfill":
      /*!*******************************************!*\
  !*** external "resize-observer-polyfill" ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("resize-observer-polyfill");

        /***/
      },

    /******/
  },
);
//# sourceMappingURL=report.js.map
