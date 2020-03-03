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
        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Age/index.tsx";

        var Age = function Age() {
          var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();

          var _useMeasure = Object(
              _utils_useMeasure__WEBPACK_IMPORTED_MODULE_4__["default"],
            )(ref),
            width = _useMeasure.width;

          console.log(width);
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            "div",
            {
              ref: ref,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                },
                __self: this,
              },
              "Age Metrics",
            ),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              react_vis__WEBPACK_IMPORTED_MODULE_1__["XYPlot"],
              {
                yType: "ordinal",
                height: 275,
                width: width - 100,
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
                  animation: {
                    damping: 15,
                    stiffness: 110,
                  },
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
                  animation: {
                    damping: 14,
                    stiffness: 100,
                  },
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

    /***/ "./components/Metrics/Education/index.tsx":
      /*!************************************************!*\
  !*** ./components/Metrics/Education/index.tsx ***!
  \************************************************/
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
        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Education/index.tsx";

        var Education = function Education(props) {
          console.log(props);
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            "div",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                },
                __self: this,
              },
              "Education Metrics",
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Education;

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
        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Gender/index.tsx";

        var Gender = function Gender(props) {
          // Let there be props
          console.log("props", props);
          var data = [
            {
              angle: 1,
            },
            {
              angle: 5,
            },
            {
              angle: 2,
            },
          ];
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            "div",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                },
                __self: this,
              },
              "Gender Metrics",
            ),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              react_vis__WEBPACK_IMPORTED_MODULE_1__["RadialChart"],
              {
                innerRadius: 90,
                radius: 120,
                data: data,
                width: 300,
                height: 300,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                },
                __self: this,
              },
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Gender;

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
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Metrics/Income/index.tsx";

        var Income = function Income(props) {
          console.log(props);
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            "div",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                },
                __self: this,
              },
              "Income Metrics",
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Income;

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
      /*! exports provided: age */
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
        /* harmony import */ var _utils_rehydrate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
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
                lineNumber: 46,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              next_head__WEBPACK_IMPORTED_MODULE_3___default.a,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                "title",
                {
                  key: "head-title",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48,
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
                  lineNumber: 50,
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
                  lineNumber: 55,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                Title,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56,
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
                    lineNumber: 57,
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
                  lineNumber: 59,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                "div",
                {
                  className: "flex",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                  "div",
                  {
                    className: "w-50 br b--light-gray",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61,
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
                        lineNumber: 62,
                      },
                      __self: this,
                    },
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                  "div",
                  {
                    className: "w-50 pl3",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64,
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
                        lineNumber: 65,
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
                  lineNumber: 69,
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
                    lineNumber: 70,
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
                  lineNumber: 72,
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
                    lineNumber: 73,
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
