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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 5));
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

    /***/ "./components/Button.tsx":
      /*!*******************************!*\
  !*** ./components/Button.tsx ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return Button;
          },
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js",
        );
        /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! chroma-js */ "chroma-js",
        );
        /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          chroma_js__WEBPACK_IMPORTED_MODULE_7__,
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! glamorous */ "glamorous",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          glamorous__WEBPACK_IMPORTED_MODULE_8__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_9__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../utils/Scale */ "./utils/Scale.tsx",
        );
        /* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./Link */ "./components/Link.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Button.tsx";

        var buttonStyles = {
          boxSizing: "border-box",
          transition: "all 200ms",
          cursor: "pointer",
          color: "white",
          border: "1px solid ".concat(
            _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].green,
          ),
          borderRadius: Object(
            _utils_Scale__WEBPACK_IMPORTED_MODULE_11__["Step"],
          )(2),
          background:
            _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].green,
          textDecoration: "none",
          display: "inline-block",
          fontSize: Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_11__["Step"])(
            3.75,
          ),
          boxShadow: "0 8px 16px rgba(0,0,0,0.075)",
          fontFamily: "Apercu",
          fontWeight: 200,
          textTransform: "uppercase",
          letterSpacing: "0.1rem",
          "&:hover": {
            background: chroma_js__WEBPACK_IMPORTED_MODULE_7___default()(
              _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].green,
            )
              .brighten(0.25)
              .css(),
          },
          "&:active": {
            padding: "".concat(
              Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_11__["Step"])(4),
              " !important",
            ),
            height: "auto",
            background: chroma_js__WEBPACK_IMPORTED_MODULE_7___default()(
              _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].green,
            )
              .brighten(0.125)
              .css(),
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          },
          "&.theme-ghost": {
            color: _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].green,
            background:
              _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].white,
            boxShadow: "0 8px 16px rgba(0,0,0,0.075)",
            transition: "all 200ms",
            "&:hover": {
              color: "white",
              background: chroma_js__WEBPACK_IMPORTED_MODULE_7___default()(
                _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].green,
              )
                .brighten(0.25)
                .css(),
            },
          },
          "&.theme-submit": {
            transition: "all 300ms",
            color: _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].white,
            background: chroma_js__WEBPACK_IMPORTED_MODULE_7___default()(
              _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].green,
            )
              .brighten(0.25)
              .css(),
            borderColor:
              _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].green,
            textTransform: "none",
            fontWeight: 400,
            letterSpacing: "0.075rem",
            boxShadow: "none",
            borderRadius: "0 "
              .concat(
                Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_11__["Step"])(2),
                " ",
              )
              .concat(
                Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_11__["Step"])(2),
                " 0",
              ),
            "&:hover": {
              color:
                _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].white,
              background: chroma_js__WEBPACK_IMPORTED_MODULE_7___default()(
                _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].green,
              )
                .brighten(0.25)
                .css(),
            },
            "&.disable-true, &[disabled]": {
              pointerEvents: "none",
              color:
                _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].black,
              background:
                _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].white,
            },
            "&.loading-true": {
              padding: "0 ".concat(
                Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_11__["Step"])(4),
              ),
              backgroundColor: "".concat(
                _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"]
                  .yellowLight,
                " !important",
              ),
              borderColor:
                _design_system__WEBPACK_IMPORTED_MODULE_10__["colors"].yellow,
            },
          },
          padding: Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_11__["Step"])(
            4,
          ),
          "&.size-big": {
            fontSize: Object(
              _utils_Scale__WEBPACK_IMPORTED_MODULE_11__["Step"],
            )(5),
            fontWeight: 500,
            textTransform: "none",
            padding: ""
              .concat(
                Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_11__["Step"])(4),
                " ",
              )
              .concat(
                Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_11__["Step"])(5),
              ),
          },
        };

        var Button =
          /*#__PURE__*/
          (function(_React$Component) {
            Object(
              _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ],
            )(Button, _React$Component);

            function Button() {
              Object(
                _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ],
              )(this, Button);

              return Object(
                _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ],
              )(
                this,
                Object(
                  _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ],
                )(Button).apply(this, arguments),
              );
            }

            Object(
              _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ],
            )(Button, [
              {
                key: "render",
                value: function render() {
                  var _this$props = this.props,
                    tabindex = _this$props.tabindex,
                    href = _this$props.href,
                    className = _this$props.className,
                    _this$props$theme = _this$props.theme,
                    theme =
                      _this$props$theme === void 0
                        ? "default"
                        : _this$props$theme,
                    _this$props$size = _this$props.size,
                    size =
                      _this$props$size === void 0
                        ? "default"
                        : _this$props$size,
                    children = _this$props.children,
                    rest = Object(
                      _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                      ],
                    )(_this$props, [
                      "tabindex",
                      "href",
                      "className",
                      "theme",
                      "size",
                      "children",
                    ]);

                  var el = href
                    ? glamorous__WEBPACK_IMPORTED_MODULE_8___default.a.span
                    : glamorous__WEBPACK_IMPORTED_MODULE_8___default.a.button;
                  var Link = el(buttonStyles);

                  if (href) {
                    return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                      _Link__WEBPACK_IMPORTED_MODULE_12__["default"],
                      {
                        href: href,
                        className: className,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 112,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                        Link,
                        Object(
                          _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            "default"
                          ],
                        )(
                          {
                            tabIndex: tabindex,
                            className: "Link-with-crypto theme-"
                              .concat(theme, " size-")
                              .concat(size),
                            href: href,
                          },
                          rest,
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 113,
                            },
                            __self: this,
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                          "span",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 119,
                            },
                            __self: this,
                          },
                          children,
                        ),
                      ),
                    );
                  } else {
                    return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                      Link,
                      Object(
                        _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                          "default"
                        ],
                      )(
                        {
                          tabIndex: tabindex,
                          className: "Link-with-crypto theme-".concat(theme),
                        },
                        rest,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 125,
                          },
                          __self: this,
                        },
                      ),
                      react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                        "span",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 130,
                          },
                          __self: this,
                        },
                        children,
                      ),
                    );
                  }
                },
              },
            ]);

            return Button;
          })(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

        /***/
      },

    /***/ "./components/DonateHero.tsx":
      /*!***********************************!*\
  !*** ./components/DonateHero.tsx ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! glamorous */ "glamorous",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          glamorous__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../utils/Scale */ "./utils/Scale.tsx",
        );
        /* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./Button */ "./components/Button.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/DonateHero.tsx";

        var Container = glamorous__WEBPACK_IMPORTED_MODULE_1___default.a.section(
          {
            padding: "".concat(
              Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_4__["Step"])(8),
              " 0",
            ),
          },
        );
        var Title = glamorous__WEBPACK_IMPORTED_MODULE_1___default.a.h2(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          )(
            {
              maxWidth: 600,
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_4__["Step"],
              )(5.5),
            },
            _design_system__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].ns,
            {
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_4__["Step"],
              )(6),
            },
          ),
        );

        var DonateHero = function DonateHero(props) {
          var _props$theme = props.theme,
            theme = _props$theme === void 0 ? "default" : _props$theme;
          var donateTheme = theme === "light" ? "ghost" : "default";
          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            Container,
            {
              className: "tc center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              Title,
              {
                className: "lh-copy center",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                },
                __self: this,
              },
              "Ready to put your crypto to work for good?",
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              _Button__WEBPACK_IMPORTED_MODULE_5__["default"],
              {
                href: "/donate",
                theme: donateTheme,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                },
                __self: this,
              },
              "Donate Crypto",
            ),
          );
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = DonateHero;

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

    /***/ "./components/Link.tsx":
      /*!*****************************!*\
  !*** ./components/Link.tsx ***!
  \*****************************/
      /*! exports provided: linkStyles, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "linkStyles",
          function() {
            return linkStyles;
          },
        );
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
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! glamorous */ "glamorous",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          glamorous__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! next/router */ "next/router",
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _components_NextLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../components/NextLink */ "./components/NextLink.tsx",
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Link.tsx";

        var onClickHandler = function onClickHandler(href) {
          var router = Object(
            next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"],
          )();
          return function(e) {
            e.preventDefault();
            router.push(href).then(function() {
              return window.scrollTo(0, 0);
            });
          };
        };

        var linkStyles = {
          cursor: "pointer",
          color: _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"].greyDark,
          textDecoration: "none",
          "> svg": {
            transition: "all 200ms",
            fill: _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"].grey,
          },
          "&:hover, &:active": {
            color: _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"].grey,
            "> svg": {
              fill: _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"].black,
            },
          },
          "&.active": {
            pointerEvents: "none",
            "&-style": {
              color:
                _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"].black,
              borderBottom: "1px solid ".concat(
                _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"].black,
              ),
            },
          },
        };
        var A = glamorous__WEBPACK_IMPORTED_MODULE_3___default.a.a(linkStyles);

        var Link = function Link(_ref) {
          var children = _ref.children,
            href = _ref.href,
            activeClass = _ref.activeClass,
            className = _ref.className,
            rest = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )(_ref, ["children", "href", "activeClass", "className"]);

          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            "span",
            {
              onClick: onClickHandler(href),
              className: className,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              _components_NextLink__WEBPACK_IMPORTED_MODULE_5__["default"],
              {
                activeClassName: activeClass,
                href: href,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                A,
                Object(
                  _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ],
                )({}, rest, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                  },
                  __self: this,
                }),
                children,
              ),
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Link;

        /***/
      },

    /***/ "./components/NextLink.tsx":
      /*!*********************************!*\
  !*** ./components/NextLink.tsx ***!
  \*********************************/
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
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/link */ "./node_modules/next/link.js",
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! next/router */ "next/router",
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/NextLink.tsx";

        var ActiveLink = function ActiveLink(_ref) {
          var router = _ref.router,
            children = _ref.children,
            props = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )(_ref, ["router", "children"]);

          var child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(
            children,
          );
          var className = child.props.className || null;

          if (router) {
            if (router.pathname === props.href) {
              if (props.activeClassName) {
                className = ""
                  .concat(className !== null ? className : "", " ")
                  .concat(props.activeClassName)
                  .trim();
              } else {
                className = ""
                  .concat(className !== null ? className : "", " active")
                  .trim();
              }
            }
          }

          delete props.activeClassName;
          return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
            next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"](child, {
              className: className,
            }),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Object(
          next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"],
        )(ActiveLink);

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

    /***/ "./content/terms/hero.ts":
      /*!*******************************!*\
  !*** ./content/terms/hero.ts ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          title: "About GiveCrypto's Sanctions Compliance Program.",
          subtitle: "Our Terms & Conditions",
        };

        /***/
      },

    /***/ "./content/terms/legal.mdx":
      /*!*********************************!*\
  !*** ./content/terms/legal.mdx ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return MDXContent;
          },
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @mdx-js/react */ "@mdx-js/react",
        );
        /* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__,
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/content/terms/legal.mdx";

        /* @jsx mdx */

        var makeShortcode = function makeShortcode(name) {
          return function MDXDefaultShortcode(props) {
            console.warn(
              "Component " +
                name +
                " was not imported, exported, or provided by MDXProvider as global scope",
            );
            return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "div",
              Object(
                _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ],
              )({}, props, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                },
                __self: this,
              }),
            );
          };
        };

        var layoutProps = {};
        var MDXLayout = "wrapper";
        function MDXContent(_ref) {
          var components = _ref.components,
            props = Object(
              _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )(_ref, ["components"]);

          return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
            MDXLayout,
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
            )({}, layoutProps, props, {
              components: components,
              mdxType: "MDXLayout",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21,
              },
              __self: this,
            }),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "h2",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                },
                __self: this,
              },
              "About GiveCrypto's Sanctions Compliance Program",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                },
                __self: this,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "strong",
                {
                  parentName: "p",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                  },
                  __self: this,
                },
                "1. Corporate Sanctions Compliance Commitment",
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                },
                __self: this,
              },
              "GiveCrypto (\u201C",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "strong",
                {
                  parentName: "p",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                  },
                  __self: this,
                },
                "GiveCrypto",
              ),
              "\u201D), is committed to conducting its business with honesty and integrity, and in full compliance with all applicable laws, including laws that prohibit dealings with certain individuals, organizations, and countries that are subject to embargoes or sanctions. The purpose of its Sanctions Compliance Program (\u201C",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "strong",
                {
                  parentName: "p",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                  },
                  __self: this,
                },
                "Program",
              ),
              "\u201D) is to demonstrate that commitment and to educate GiveCrypto personnel regarding the need for compliance with sanctions imposed by the United States.",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                },
                __self: this,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "strong",
                {
                  parentName: "p",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                  },
                  __self: this,
                },
                "2. Sanctions Compliance Program",
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                },
                __self: this,
              },
              "The Office of Foreign Assets Control (\u201C",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "strong",
                {
                  parentName: "p",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                  },
                  __self: this,
                },
                "OFAC",
              ),
              "\u201D), an agency of the U.S. Department of the Treasury, administers and enforces U.S. economic sanctions programs against targeted foreign governments, individuals, groups and entities in accordance with national security and foreign policy. OFAC had not previously published guidance addressing the essential elements for an effective sanctions\u2019 compliance program (\u201C",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "strong",
                {
                  parentName: "p",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                  },
                  __self: this,
                },
                "SCP",
              ),
              "\u201D). On May 2, 2019, however, OFAC published such guidance, entitled \u201CA Framework for OFAC Compliance Commitments\u201D (\u201C",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "strong",
                {
                  parentName: "p",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                  },
                  __self: this,
                },
                "OFAC Framework",
              ),
              "\u201D).",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                },
                __self: this,
              },
              "It is the intent of GiveCrypto that this Program comports with the guidance in the OFAC Framework. This Program sets forth guidelines with which GiveCrypto and its personnel who deal with business activities must comply. No transaction contrary to this Program shall be executed without the prior approval of the Compliance Officer. Violation of sanctions could result in severe consequences for GiveCrypto. Failure to adhere to this Program also may subject GiveCrypto personnel to disciplinary action, up to and including termination.",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                },
                __self: this,
              },
              "GiveCrypto \u2019s Sanctions Program includes the following components:",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "ul",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                },
                __self: this,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "li",
                {
                  parentName: "ul",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                  },
                  __self: this,
                },
                "Management Commitment - GiveCrypto has provided the Compliance Officer with the requisite authority and autonomy and a direct reporting line to the ",
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                  "span",
                  {
                    style: {
                      fontFamily: "auto",
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 30,
                    },
                    __self: this,
                  },
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                  "_",
                ),
                ". The Compliance Officer has received Sanctions Compliance training by outside International Trade counsel and consults with outside counsel, as appropriate.",
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "li",
                {
                  parentName: "ul",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                  },
                  __self: this,
                },
                "Risk Assessment - GiveCrypto conducts risk assessments periodically to identify any potential risks and promptly addresses any identified risks by updating the Program.",
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "li",
                {
                  parentName: "ul",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                  },
                  __self: this,
                },
                "Internal Controls - GiveCrypto screens all transactions against OFAC lists and has requires that transactions be approved by the Compliance Officer.",
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "li",
                {
                  parentName: "ul",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                  },
                  __self: this,
                },
                "Testing and Auditing - GiveCrypto reviews its OFAC procedures through periodic internal and/or external audits and would promptly address any identified gaps by updating the Program.",
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "li",
                {
                  parentName: "ul",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                  },
                  __self: this,
                },
                "Training - GiveCrypto\u2019s training program accomplishes the following: (i) provides job-specific knowledge; (ii) communicates the compliance responsibilities for each employee; and (iii) holds employees accountable for completion of sanctions compliance training through assessments.",
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                },
                __self: this,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "strong",
                {
                  parentName: "p",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                  },
                  __self: this,
                },
                "3. Overview of U.S. Sanctions",
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                },
                __self: this,
              },
              "The U.S. has sanctions programs that prohibit U.S. persons and, in some instances, foreign persons from conducting or facilitating transactions with designated countries, individual parties, aircraft and marine vessels. These programs also frequently block the assets of the sanctioned party. The U.S. has created such programs to implement foreign policy and national security objectives.",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                },
                __self: this,
              },
              "The U.S. has made increased use of sanctions programs during the past ten years. The U.S. sanctions programs regarding Iran, Venezuela and Ukraine/Russia have been particularly active. The U.S. currently has more than twenty-five sanctions programs and has more than 15,000 sanctioned parties. The sanctions programs are primarily implemented by OFAC.",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                },
                __self: this,
              },
              "Persons subject to OFAC jurisdiction include:",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "ul",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                },
                __self: this,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "li",
                {
                  parentName: "ul",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                  },
                  __self: this,
                },
                "U.S. citizens and permanent resident aliens (wherever located);",
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "li",
                {
                  parentName: "ul",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                  },
                  __self: this,
                },
                "Companies organized in the U.S. including foreign branches;",
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "li",
                {
                  parentName: "ul",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                  },
                  __self: this,
                },
                "Individuals and entities located in the U.S.; and",
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "li",
                {
                  parentName: "ul",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                  },
                  __self: this,
                },
                "Companies organized outside the U.S. by U.S. persons under certain sanctions programs (Iran, Cuba and North Korea).",
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                },
                __self: this,
              },
              "When OFAC imposes a trade embargo on an entire country or region, the embargo applies to ",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "em",
                {
                  parentName: "p",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                  },
                  __self: this,
                },
                "all",
              ),
              " businesses and individuals in that country. OFAC sanctions companies, individuals, aircraft and ships from other countries by placing the entity or individual on a list. The primary list is the Specially Designated Nationals and Blocked Persons (\u201C",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(
                "strong",
                {
                  parentName: "p",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                  },
                  __self: this,
                },
                "SDN",
              ),
              "\u201D) List. If a person is on the SDN list, a U.S. person is prohibited from conducting any transactions with that person. There are several other OFAC lists, which may impose fewer restrictions. The list of embargoed countries and prohibited persons can change over time and frequently does so.",
            ),
          );
        }
        MDXContent.isMDXComponent = true;

        /***/
      },

    /***/ "./content/terms/seo.ts":
      /*!******************************!*\
  !*** ./content/terms/seo.ts ***!
  \******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          title:
            "Terms for GiveCrypto | Empowering, educating and elevating communities into the open financial system.",
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

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify",
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

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }

          return self;
        }

        module.exports = _assertThisInitialized;

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        module.exports = _classCallCheck;

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
      /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Object$defineProperty = __webpack_require__(
          /*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js",
        );

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;

            _Object$defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        module.exports = _createClass;

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

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Object$getPrototypeOf = __webpack_require__(
          /*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js",
        );

        var _Object$setPrototypeOf = __webpack_require__(
          /*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js",
        );

        function _getPrototypeOf(o) {
          module.exports = _getPrototypeOf = _Object$setPrototypeOf
            ? _Object$getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || _Object$getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        module.exports = _getPrototypeOf;

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Object$create = __webpack_require__(
          /*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js",
        );

        var setPrototypeOf = __webpack_require__(
          /*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js",
        );

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          }

          subClass.prototype = _Object$create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass) setPrototypeOf(subClass, superClass);
        }

        module.exports = _inherits;

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        module.exports = _interopRequireDefault;

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _typeof = __webpack_require__(
          /*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js",
        );

        var assertThisInitialized = __webpack_require__(
          /*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js",
        );

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }

          return assertThisInitialized(self);
        }

        module.exports = _possibleConstructorReturn;

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Object$setPrototypeOf = __webpack_require__(
          /*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js",
        );

        function _setPrototypeOf(o, p) {
          module.exports = _setPrototypeOf =
            _Object$setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };

          return _setPrototypeOf(o, p);
        }

        module.exports = _setPrototypeOf;

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
      /*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Symbol$iterator = __webpack_require__(
          /*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js",
        );

        var _Symbol = __webpack_require__(
          /*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js",
        );

        function _typeof2(obj) {
          if (
            typeof _Symbol === "function" &&
            typeof _Symbol$iterator === "symbol"
          ) {
            _typeof2 = function _typeof2(obj) {
              return typeof obj;
            };
          } else {
            _typeof2 = function _typeof2(obj) {
              return obj &&
                typeof _Symbol === "function" &&
                obj.constructor === _Symbol &&
                obj !== _Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof2(obj);
        }

        function _typeof(obj) {
          if (
            typeof _Symbol === "function" &&
            _typeof2(_Symbol$iterator) === "symbol"
          ) {
            module.exports = _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            module.exports = _typeof = function _typeof(obj) {
              return obj &&
                typeof _Symbol === "function" &&
                obj.constructor === _Symbol &&
                obj !== _Symbol.prototype
                ? "symbol"
                : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        module.exports = _typeof;

        /***/
      },

    /***/ "./node_modules/next/dist/client/link.js":
      /*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /* global __NEXT_DATA__ */

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js",
        );

        var _stringify = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js",
          ),
        );

        var _classCallCheck2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js",
          ),
        );

        var _createClass2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js",
          ),
        );

        var _possibleConstructorReturn2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js",
          ),
        );

        var _getPrototypeOf2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js",
          ),
        );

        var _inherits2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js",
          ),
        );

        var __importStar =
          (void 0 && (void 0).__importStar) ||
          function(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
              for (var k in mod) {
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
              }
            result["default"] = mod;
            return result;
          };

        var __importDefault =
          (void 0 && (void 0).__importDefault) ||
          function(mod) {
            return mod && mod.__esModule
              ? mod
              : {
                  default: mod,
                };
          };

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });

        var url_1 = __webpack_require__(/*! url */ "url");

        var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

        var prop_types_1 = __importDefault(
          __webpack_require__(/*! prop-types */ "prop-types"),
        );

        var router_1 = __importStar(
          __webpack_require__(/*! next/router */ "next/router"),
        );

        var utils_1 = __webpack_require__(
          /*! next-server/dist/lib/utils */ "next-server/dist/lib/utils",
        );

        function isLocal(href) {
          var url = url_1.parse(href, false, true);
          var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
          return (
            !url.host ||
            (url.protocol === origin.protocol && url.host === origin.host)
          );
        }

        function memoizedFormatUrl(formatFunc) {
          var lastHref = null;
          var lastAs = null;
          var lastResult = null;
          return function(href, as) {
            if (href === lastHref && as === lastAs) {
              return lastResult;
            }

            var result = formatFunc(href, as);
            lastHref = href;
            lastAs = as;
            lastResult = result;
            return result;
          };
        }

        function formatUrl(url) {
          return url && typeof url === "object"
            ? utils_1.formatWithValidation(url)
            : url;
        }

        var Link =
          /*#__PURE__*/
          (function(_react_1$Component) {
            (0, _inherits2.default)(Link, _react_1$Component);

            function Link() {
              var _this;

              (0, _classCallCheck2.default)(this, Link);
              _this = (0, _possibleConstructorReturn2.default)(
                this,
                (0, _getPrototypeOf2.default)(Link).apply(this, arguments),
              ); // The function is memoized so that no extra lifecycles are needed
              // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

              _this.formatUrls = memoizedFormatUrl(function(href, asHref) {
                return {
                  href: formatUrl(href),
                  as: formatUrl(asHref, true),
                };
              });

              _this.linkClicked = function(e) {
                var _e$currentTarget = e.currentTarget,
                  nodeName = _e$currentTarget.nodeName,
                  target = _e$currentTarget.target;

                if (
                  nodeName === "A" &&
                  ((target && target !== "_self") ||
                    e.metaKey ||
                    e.ctrlKey ||
                    e.shiftKey ||
                    (e.nativeEvent && e.nativeEvent.which === 2))
                ) {
                  // ignore click for new tab / new window behavior
                  return;
                }

                var _this$formatUrls = _this.formatUrls(
                    _this.props.href,
                    _this.props.as,
                  ),
                  href = _this$formatUrls.href,
                  as = _this$formatUrls.as;

                if (!isLocal(href)) {
                  // ignore click if it's outside our scope
                  return;
                }

                var pathname = window.location.pathname;
                href = url_1.resolve(pathname, href);
                as = as ? url_1.resolve(pathname, as) : href;
                e.preventDefault(); //  avoid scroll for urls with anchor refs

                var scroll = _this.props.scroll;

                if (scroll == null) {
                  scroll = as.indexOf("#") < 0;
                } // replace state instead of push if prop is present

                router_1.default[_this.props.replace ? "replace" : "push"](
                  href,
                  as,
                  {
                    shallow: _this.props.shallow,
                  },
                )
                  .then(function(success) {
                    if (!success) return;

                    if (scroll) {
                      window.scrollTo(0, 0);
                      document.body.focus();
                    }
                  })
                  .catch(function(err) {
                    if (_this.props.onError) _this.props.onError(err);
                  });
              };

              return _this;
            }

            (0, _createClass2.default)(Link, [
              {
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.prefetch();
                },
              },
              {
                key: "componentDidUpdate",
                value: function componentDidUpdate(prevProps) {
                  if (
                    (0, _stringify.default)(this.props.href) !==
                    (0, _stringify.default)(prevProps.href)
                  ) {
                    this.prefetch();
                  }
                },
              },
              {
                key: "prefetch",
                value: function prefetch() {
                  if (!this.props.prefetch) return;
                  if (typeof window === "undefined") return; // Prefetch the JSON page if asked (only in the client)

                  var pathname = window.location.pathname;

                  var _this$formatUrls2 = this.formatUrls(
                      this.props.href,
                      this.props.as,
                    ),
                    parsedHref = _this$formatUrls2.href;

                  var href = url_1.resolve(pathname, parsedHref);
                  router_1.default.prefetch(href);
                },
              },
              {
                key: "render",
                value: function render() {
                  var _this2 = this;

                  var children = this.props.children;

                  var _this$formatUrls3 = this.formatUrls(
                      this.props.href,
                      this.props.as,
                    ),
                    href = _this$formatUrls3.href,
                    as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

                  if (typeof children === "string") {
                    children = react_1.default.createElement(
                      "a",
                      null,
                      children,
                    );
                  } // This will return the first child, if multiple are provided it will throw an error

                  var child = react_1.Children.only(children);
                  var props = {
                    onClick: function onClick(e) {
                      if (
                        child.props &&
                        typeof child.props.onClick === "function"
                      ) {
                        child.props.onClick(e);
                      }

                      if (!e.defaultPrevented) {
                        _this2.linkClicked(e);
                      }
                    },
                  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
                  // defined, we specify the current 'href', so that repetition is not needed by the user

                  if (
                    this.props.passHref ||
                    (child.type === "a" && !("href" in child.props))
                  ) {
                    props.href = as || href;
                  } // Add the ending slash to the paths. So, we can serve the
                  // "<page>/index.html" directly.

                  if (true) {
                    if (
                      props.href &&
                      typeof __NEXT_DATA__ !== "undefined" &&
                      __NEXT_DATA__.nextExport
                    ) {
                      props.href = router_1.Router._rewriteUrlForNextExport(
                        props.href,
                      );
                    }
                  }

                  return react_1.default.cloneElement(child, props);
                },
              },
            ]);
            return Link;
          })(react_1.Component);

        if (true) {
          var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

          var exact = __webpack_require__(
            /*! prop-types-exact */ "prop-types-exact",
          );

          Link.propTypes = exact({
            href: prop_types_1.default.oneOfType([
              prop_types_1.default.string,
              prop_types_1.default.object,
            ]).isRequired,
            as: prop_types_1.default.oneOfType([
              prop_types_1.default.string,
              prop_types_1.default.object,
            ]),
            prefetch: prop_types_1.default.bool,
            replace: prop_types_1.default.bool,
            shallow: prop_types_1.default.bool,
            passHref: prop_types_1.default.bool,
            scroll: prop_types_1.default.bool,
            children: prop_types_1.default.oneOfType([
              prop_types_1.default.element,
              function(props, propName) {
                var value = props[propName];

                if (typeof value === "string") {
                  warn(
                    "Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>",
                  );
                }

                return null;
              },
            ]).isRequired,
          });
        }

        exports.default = Link;

        /***/
      },

    /***/ "./node_modules/next/link.js":
      /*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./dist/client/link */ "./node_modules/next/dist/client/link.js",
        );

        /***/
      },

    /***/ "./pages/terms.tsx":
      /*!*************************!*\
  !*** ./pages/terms.tsx ***!
  \*************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return App;
          },
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! glamorous */ "glamorous",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          glamorous__WEBPACK_IMPORTED_MODULE_7__,
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! next/head */ "next/head",
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_8__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_9__,
        );
        /* harmony import */ var _components_HeadMeta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../components/HeadMeta */ "./components/HeadMeta.tsx",
        );
        /* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../components/Wrapper */ "./components/Wrapper.tsx",
        );
        /* harmony import */ var _components_DonateHero__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../components/DonateHero */ "./components/DonateHero.tsx",
        );
        /* harmony import */ var _content_terms_seo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../content/terms/seo */ "./content/terms/seo.ts",
        );
        /* harmony import */ var _content_terms_hero__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../content/terms/hero */ "./content/terms/hero.ts",
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _utils_rehydrate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../utils/rehydrate */ "./utils/rehydrate.tsx",
        );
        /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../utils/Scale */ "./utils/Scale.tsx",
        );
        /* harmony import */ var _components_Analytics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../components/Analytics */ "./components/Analytics.tsx",
        );
        /* harmony import */ var _content_terms_legal_mdx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../content/terms/legal.mdx */ "./content/terms/legal.mdx",
        );
        /* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! react-accessible-accordion */ "react-accessible-accordion",
        );
        /* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(
          react_accessible_accordion__WEBPACK_IMPORTED_MODULE_20__,
        );

        var _jsxFileName = "/Users/jklb/dev/givecrypto/website/pages/terms.tsx";

        var HappyIcon = function HappyIcon(props) {
          return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
            "svg",
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )({}, props, {
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "style",
              {
                __self: this,
              },
              ".st0",
              "{",
              "fill:#cddae8",
              "}",
              ".st1",
              "{",
              "opacity:.2",
              "}",
              ".st1,.st2",
              "{",
              "fill:#278bd6",
              "}",
              ".st3",
              "{",
              "opacity:.3;fill:#064e72",
              "}",
              ".st4",
              "{",
              "fill:#2e3547",
              "}",
              ".st5",
              "{",
              "fill:#4e5c75",
              "}",
              ".st6",
              "{",
              "fill:#a0c2ec",
              "}",
              ".st7,.st8",
              "{",
              "opacity:.3;fill:#278bd6",
              "}",
              ".st8",
              "{",
              "opacity:.1",
              "}",
              ".st9",
              "{",
              "fill:#ef4b4b",
              "}",
              ".st10",
              "{",
              "opacity:.2",
              "}",
              ".st11",
              "{",
              "fill:#fff",
              "}",
              ".st12",
              "{",
              "opacity:.1",
              "}",
              ".st13",
              "{",
              "fill:#278bd6",
              "}",
              ".st13,.st14",
              "{",
              "opacity:.35",
              "}",
              ".st15",
              "{",
              "opacity:.3;fill:#2e3547",
              "}",
              ".st16,.st17,.st18",
              "{",
              "fill:#fcd381",
              "}",
              ".st17,.st18",
              "{",
              "opacity:.35",
              "}",
              ".st18",
              "{",
              "opacity:.3",
              "}",
              ".st19",
              "{",
              "fill:none",
              "}",
              ".st20",
              "{",
              "display:none;fill:#ef4b4b",
              "}",
              ".st21",
              "{",
              "fill:#f8c069",
              "}",
              ".st22",
              "{",
              "fill:#e23537",
              "}",
              ".st23",
              "{",
              "fill:#237bc9",
              "}",
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st1",
              d:
                "M633.96 250h.04c3.31 0 6-5.37 6-12s-2.69-12-6-12c-.71 0-1.38.26-2.01.71.07.1.13.2.22.3 1.34 1.52 1.57 5.07 2.26 6.98.84 2.32 1.55 4.45 1.45 6.96-.13 3.06-1.03 6.07-1.96 9.05zM496 250c-.28 0-.55.05-.81.12 1.2 4.51 3.59 8.88 3.71 13.5.1 3.63-1.56 7.01-3.04 10.36.05 0 .1.01.14.01 3.31 0 6-5.37 6-12 0-6.62-2.69-11.99-6-11.99zM765.89 366.01c-.14.33-.28.64-.41.94.17.03.34.05.52.05 3.31 0 6-5.37 6-12s-2.69-12-6-12c-.14 0-.29.02-.43.04.47 1.13 1.06 2.22 1.48 3.37 1.34 3.68.79 6.95.46 10.75-.28 3.22-.31 5.83-1.62 8.85zM704 282c-.67 0-1.31.23-1.91.64.13.47.38.94.82 1.38 5.11 4.99 3.62 14.88 1 21.98.03 0 .06.01.09.01 3.31 0 6-5.37 6-12 0-6.64-2.69-12.01-6-12.01zM555.41 290c-.09.62-.14 1.25-.17 1.89.25.06.51.11.77.11 3.31 0 6-5.37 6-12s-2.69-12-6-12c-.52 0-1.02.15-1.5.4.08.26.19.52.37.8.01.11.01.21.02.32.25.95.93 1.51 1.72 1.74 1.55 2.91 1.56 8.12 1.24 10.68-.36 2.81-2.03 5.25-2.45 8.06zM422.8 279.45c-1.2-3.35-.85-6.87-.48-8.05.79-2.47.67-5.26.66-7.8-.01-3.34-.3-5.42 1.85-7.24-.53-.25-1.07-.37-1.62-.34-3.31.22-5.64 5.75-5.21 12.36.35 5.27 2.34 9.61 4.8 11.07zM296.74 261.41c-.58-.29-1.18-.42-1.79-.37-3.3.29-5.51 5.88-4.93 12.48.58 6.6 3.72 11.72 7.02 11.43.34-.03.67-.13.98-.27-1.24-3.42-3.62-6.25-3.44-10.37.19-4.38 1.27-8.62 2.16-12.9zM225.2 272.19a3.33 3.33 0 0 0-1.25-.15c-3.3.29-5.51 5.88-4.93 12.48.58 6.6 3.72 11.72 7.02 11.43.65-.06 1.25-.32 1.8-.76-1.36-3.08-3.22-5.76-3.75-9.2-.68-4.41-.57-8.77.94-12.97.11-.29.16-.56.17-.83zM350.97 170.96c.52-.04 1.01-.23 1.47-.52-1.93-3.21-4.12-6.23-4.59-10.09-.42-3.49-.26-7.53 1.79-10.46.81-.42 1.38-1.28 1.62-2.21-.71-.46-1.46-.7-2.22-.64-3.3.27-5.55 5.84-5.01 12.45.52 6.6 3.64 11.74 6.94 11.47zM364.11 266.17c-.38-.11-.77-.16-1.15-.12-3.3.29-5.51 5.88-4.93 12.48.58 6.6 3.72 11.72 7.02 11.43.12-.01.23-.04.35-.07-.84-2.19-1.47-4.5-1.54-6.76-.07-2.2.14-4.25-.7-6.35-1.1-2.73-2.06-4.1-.9-7.04.39-1.01 1.05-2.48 1.85-3.57z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st4",
              d:
                "M239.97 323.65c1.05-1.24 2.18-2.68 3.18-4.11a65.03 65.03 0 0 0 2.9-4.44l1.34-2.29 1.25-2.35c.76-1.6 1.52-3.2 2.18-4.85.35-.81.69-1.64.96-2.48.29-.84.6-1.67.87-2.52.46-1.71 1.01-3.41 1.35-5.16.84-3.47 1.16-7.04 1.45-10.63v-.06c.04-.55.53-.96 1.08-.92.5.04.89.45.92.93.23 3.72.26 7.5-.32 11.23-.44 3.75-1.43 7.41-2.65 10.99-1.23 3.58-2.85 7.01-4.76 10.28-.97 1.62-2.02 3.2-3.13 4.74-1.16 1.53-2.3 2.97-3.74 4.42-.78.78-2.04.79-2.83.01-.75-.74-.79-1.92-.12-2.71l.07-.08zM431.87 302.78c.33-.28.77-.69 1.16-1.07.41-.37.79-.8 1.19-1.2.77-.84 1.53-1.69 2.26-2.58 1.49-1.75 2.83-3.64 4.12-5.56 2.62-3.83 4.77-7.99 6.79-12.21l1.44-3.21c.46-1.08.85-2.19 1.29-3.28.89-2.18 1.57-4.43 2.35-6.66.75-2.24 1.3-4.54 1.99-6.8l1.68-6.91.01-.04c.13-.54.67-.87 1.21-.73.5.12.82.61.75 1.11-.34 2.38-.7 4.77-1.09 7.15l-.75 3.55c-.27 1.18-.47 2.37-.81 3.54-.64 2.33-1.2 4.7-2.03 6.98-.39 1.15-.76 2.31-1.18 3.45l-1.34 3.4a81.597 81.597 0 0 1-6.77 13.01c-1.38 2.04-2.81 4.05-4.43 5.94-.78.96-1.65 1.86-2.52 2.76-.46.44-.88.89-1.37 1.31-.48.44-.93.82-1.54 1.28-.88.67-2.13.49-2.8-.39-.64-.85-.5-2.05.3-2.73l.09-.11zM790.78 355.1c-.61 2.85-1.44 5.58-2.43 8.29-.96 2.71-2.15 5.35-3.45 7.94-1.29 2.6-2.83 5.09-4.55 7.46-1.76 2.35-3.77 4.55-6.05 6.48-.84.71-2.1.61-2.82-.23-.67-.8-.62-1.96.1-2.69l.07-.07c1.88-1.9 3.7-3.86 5.33-6.03 1.63-2.17 3.18-4.41 4.6-6.77 1.42-2.36 2.7-4.81 3.93-7.3 1.2-2.49 2.34-5.07 3.34-7.63l.01-.04a1 1 0 0 1 1.3-.57c.47.2.72.69.62 1.16z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st4",
              d:
                "M486.77 295.58c-3.8-2.34-7.1-5.03-10.3-7.96-3.13-2.98-6.08-6.16-8.67-9.64-2.62-3.45-4.84-7.22-6.65-11.16-1.84-3.94-2.97-8.18-3.68-12.43-.09-.54.28-1.06.82-1.15.5-.08.98.22 1.12.69l.02.08.9 2.96c.15.49.28.99.45 1.47l.59 1.43c.41.94.73 1.91 1.18 2.84l1.39 2.74c2.01 3.57 4.2 7.04 6.87 10.17 2.65 3.13 5.45 6.15 8.52 8.89 1.52 1.39 3.07 2.74 4.68 4.01 1.58 1.29 3.27 2.55 4.87 3.66l.08.06c.9.63 1.13 1.88.49 2.78-.6.88-1.78 1.11-2.68.56zM422.89 307.97c-.83 4.7-1.91 9.26-3.11 13.83-1.2 4.56-2.62 9.06-4.09 13.54-1.54 4.46-3.25 8.87-5.12 13.21-1.91 4.32-4.04 8.56-6.46 12.62-.28.48-.9.63-1.37.35-.43-.26-.6-.79-.42-1.24l.02-.04c.88-2.16 1.88-4.24 2.68-6.42.9-2.13 1.69-4.32 2.49-6.49 1.55-4.37 3.05-8.76 4.36-13.21 1.38-4.43 2.59-8.91 3.78-13.4.6-2.24 1.16-4.49 1.71-6.75.58-2.24 1.09-4.52 1.61-6.74l.01-.04a1.995 1.995 0 0 1 2.4-1.49c1.03.22 1.69 1.23 1.51 2.27zM327.37 153.75c.86 3.34 2.04 6.7 3.38 9.91 1.37 3.22 2.93 6.34 4.71 9.3l1.38 2.2 1.5 2.11c.47.72 1.04 1.36 1.56 2.04.54.67 1.04 1.36 1.64 1.97 2.21 2.62 4.79 4.83 7.42 6.98l.12.1c.85.7.98 1.96.28 2.81a2 2 0 0 1-2.72.35c-.76-.55-1.5-1.12-2.24-1.68l-1.11-.86-1.02-.96c-.67-.65-1.37-1.27-2.02-1.94-.63-.69-1.24-1.39-1.84-2.1-2.36-2.86-4.47-5.93-6.13-9.21-1.72-3.25-3.17-6.61-4.3-10.08-1.15-3.47-2.04-6.96-2.55-10.62-.08-.55.3-1.05.85-1.13.51-.07.98.25 1.11.74l-.02.07zM504 262c0 2.62-.32 5.26-1.25 7.85-.49 1.28-1.13 2.56-2.12 3.75-.48.6-1.12 1.16-1.87 1.62-.78.46-1.75.76-2.76.78a5.578 5.578 0 0 1-2.73-.82 7.508 7.508 0 0 1-1.83-1.64c-.96-1.2-1.56-2.48-2.02-3.76-.89-2.57-1.16-5.19-1.12-7.78.07-2.59.46-5.18 1.42-7.67.48-1.25 1.09-2.48 2.03-3.6a7.18 7.18 0 0 1 1.74-1.52c.71-.42 1.59-.69 2.5-.71.91.02 1.78.28 2.5.71.69.43 1.3.94 1.77 1.5.97 1.11 1.64 2.32 2.16 3.57.52 1.24.9 2.52 1.16 3.81.24 1.29.37 2.6.42 3.91zm-4 0c.05-2.22-.17-4.47-.79-6.53-.32-1.02-.76-2-1.33-2.76-.29-.39-.61-.68-.93-.9-.33-.2-.64-.28-.95-.31-.31.03-.62.11-.95.31-.32.22-.66.5-.96.88-.61.74-1.09 1.71-1.46 2.72-.73 2.06-.97 4.34-.94 6.59.07 2.25.45 4.5 1.24 6.48.38.98.89 1.9 1.47 2.57.29.35.6.58.88.75.28.15.51.18.71.2.21-.03.42-.08.69-.24.26-.19.56-.42.83-.77.55-.68 1.02-1.6 1.37-2.58.76-1.96 1.08-4.19 1.12-6.41zM642 238c0 2.62-.32 5.26-1.25 7.85-.49 1.28-1.13 2.56-2.12 3.75a7.46 7.46 0 0 1-1.87 1.62c-.78.46-1.75.76-2.76.78a5.578 5.578 0 0 1-2.73-.82 7.717 7.717 0 0 1-1.83-1.64c-.96-1.2-1.56-2.48-2.02-3.76-.89-2.57-1.16-5.19-1.12-7.78.07-2.59.46-5.18 1.42-7.67.48-1.25 1.09-2.48 2.03-3.6a7.18 7.18 0 0 1 1.74-1.52c.71-.42 1.59-.69 2.5-.71.91.02 1.78.28 2.5.71.69.43 1.3.94 1.77 1.5.97 1.11 1.64 2.32 2.16 3.57.52 1.24.9 2.52 1.16 3.81.24 1.29.37 2.6.42 3.91zm-4 0c.05-2.22-.17-4.47-.79-6.53-.32-1.02-.76-2-1.33-2.76-.29-.39-.61-.68-.93-.9-.33-.2-.64-.28-.95-.31-.31.03-.62.11-.95.31-.32.22-.66.5-.96.88-.61.74-1.09 1.71-1.46 2.72-.73 2.06-.97 4.34-.94 6.59.07 2.25.45 4.5 1.24 6.48.38.98.89 1.9 1.47 2.57.29.35.6.58.88.75.28.15.51.18.71.2.21-.03.42-.08.69-.24.26-.19.56-.42.83-.77.55-.68 1.02-1.6 1.37-2.58.76-1.96 1.08-4.19 1.12-6.41zM431.98 267.48c.17 2.61.03 5.27-.74 7.91-.41 1.31-.96 2.63-1.87 3.88a7.28 7.28 0 0 1-1.76 1.74c-.75.51-1.7.87-2.7.95-1.01.03-1.99-.22-2.78-.64-.77-.43-1.42-.95-1.93-1.52-1.04-1.13-1.72-2.37-2.26-3.62-1.06-2.51-1.5-5.11-1.63-7.69-.1-2.59.13-5.2.92-7.75.39-1.27.93-2.54 1.79-3.73.42-.59.98-1.15 1.64-1.63.69-.47 1.54-.79 2.45-.87.91-.04 1.8.17 2.54.54.72.38 1.36.85 1.86 1.38 1.04 1.04 1.79 2.21 2.39 3.42.6 1.21 1.06 2.46 1.41 3.73.32 1.3.54 2.6.67 3.9zm-3.99.26c-.1-2.22-.46-4.45-1.21-6.47-.39-1-.89-1.95-1.51-2.67-.31-.37-.66-.63-.99-.84-.34-.18-.66-.23-.96-.25-.3.05-.61.15-.92.37-.31.24-.63.54-.9.94-.56.78-.98 1.77-1.28 2.81-.59 2.1-.69 4.4-.51 6.64.22 2.24.74 4.46 1.66 6.38.45.96 1.01 1.84 1.64 2.47.31.33.64.54.92.7.29.13.52.15.72.15.2-.05.42-.1.67-.28.25-.2.53-.45.78-.83.51-.71.91-1.66 1.2-2.66.62-2 .8-4.25.69-6.46zM371.97 277.3c.23 2.61.14 5.27-.56 7.93-.38 1.32-.9 2.65-1.79 3.92a7.58 7.58 0 0 1-1.72 1.78c-.73.53-1.68.91-2.68 1.01-1.01.06-1.99-.17-2.79-.58-.78-.41-1.44-.92-1.96-1.48-1.06-1.11-1.77-2.33-2.34-3.57-1.11-2.48-1.61-5.07-1.8-7.65-.16-2.58.01-5.2.75-7.77.37-1.28.87-2.56 1.71-3.77.41-.6.95-1.17 1.61-1.66.67-.48 1.53-.83 2.43-.92.91-.06 1.8.13 2.55.49.73.37 1.38.82 1.89 1.34 1.06 1.02 1.83 2.17 2.46 3.37.63 1.19 1.12 2.43 1.49 3.7.34 1.27.59 2.56.75 3.86zm-3.99.35c-.15-2.21-.55-4.44-1.35-6.44-.41-.99-.93-1.93-1.57-2.63-.32-.36-.67-.62-1.01-.81-.35-.17-.66-.22-.97-.22-.3.06-.6.16-.92.39-.3.25-.62.55-.88.96-.54.79-.94 1.79-1.21 2.84-.54 2.11-.59 4.41-.36 6.65.27 2.23.84 4.44 1.8 6.34.47.95 1.05 1.82 1.69 2.43.32.32.65.52.94.68.29.13.52.14.73.13.2-.05.41-.11.67-.3.24-.21.52-.47.76-.84.49-.72.88-1.68 1.14-2.69.57-2.02.7-4.28.54-6.49zM303.97 272.3c.23 2.61.14 5.27-.56 7.93-.38 1.32-.9 2.65-1.79 3.92a7.58 7.58 0 0 1-1.72 1.78c-.73.53-1.68.91-2.68 1.01-1.01.06-1.99-.17-2.79-.58-.78-.41-1.44-.92-1.96-1.48-1.06-1.11-1.77-2.33-2.34-3.57-1.11-2.48-1.61-5.07-1.8-7.65-.16-2.58.01-5.2.75-7.77.37-1.28.87-2.56 1.71-3.77.41-.6.95-1.17 1.61-1.66.67-.48 1.53-.83 2.43-.92.91-.06 1.8.13 2.55.49.73.37 1.38.82 1.89 1.34 1.06 1.02 1.83 2.17 2.46 3.37.63 1.19 1.12 2.43 1.49 3.7.34 1.27.59 2.56.75 3.86zm-3.99.35c-.15-2.21-.55-4.44-1.35-6.44-.41-.99-.93-1.93-1.57-2.63-.32-.36-.67-.62-1.01-.81-.35-.17-.66-.22-.97-.22-.3.06-.6.16-.92.39-.3.25-.62.55-.88.96-.54.79-.94 1.79-1.21 2.84-.54 2.11-.59 4.41-.36 6.65.27 2.23.84 4.44 1.8 6.34.47.95 1.05 1.82 1.69 2.43.32.32.65.52.94.68.29.13.52.14.73.13.2-.05.41-.11.67-.3.24-.21.52-.47.76-.84.49-.72.88-1.68 1.14-2.69.57-2.02.7-4.28.54-6.49zM357.97 158.35c.21 2.61.11 5.27-.61 7.92-.39 1.32-.92 2.64-1.81 3.91-.43.63-1.02 1.24-1.74 1.77-.74.52-1.68.9-2.68 1a5.69 5.69 0 0 1-2.79-.59c-.78-.42-1.44-.93-1.95-1.49-1.06-1.12-1.76-2.34-2.32-3.58-1.1-2.49-1.58-5.08-1.75-7.67-.14-2.59.05-5.2.8-7.76.37-1.28.89-2.56 1.74-3.76.41-.6.96-1.17 1.62-1.65.68-.48 1.53-.82 2.43-.91.91-.06 1.8.14 2.55.5.73.37 1.37.83 1.88 1.35 1.06 1.03 1.82 2.19 2.44 3.38.62 1.2 1.1 2.44 1.47 3.71.33 1.28.57 2.57.72 3.87zm-3.98.33c-.13-2.21-.53-4.44-1.31-6.45-.4-.99-.92-1.93-1.55-2.64-.32-.36-.67-.62-1-.82a2.25 2.25 0 0 0-.97-.23c-.3.06-.61.16-.92.38-.3.25-.62.55-.88.96-.54.79-.95 1.79-1.23 2.83-.56 2.11-.62 4.41-.41 6.64.25 2.23.81 4.45 1.76 6.36.46.95 1.04 1.82 1.67 2.44.31.33.64.53.93.68.29.13.52.14.73.14.2-.05.41-.11.67-.29.25-.21.52-.46.76-.84.49-.72.89-1.67 1.16-2.68.59-2.02.73-4.27.59-6.48zM232.97 283.3c.23 2.61.14 5.27-.56 7.93-.38 1.32-.9 2.65-1.79 3.92a7.58 7.58 0 0 1-1.72 1.78c-.73.53-1.68.91-2.68 1.01-1.01.06-1.99-.17-2.79-.58-.78-.41-1.44-.92-1.96-1.48-1.06-1.11-1.77-2.33-2.34-3.57-1.11-2.48-1.61-5.07-1.8-7.65-.16-2.58.01-5.2.75-7.77.37-1.28.87-2.56 1.71-3.77.41-.6.95-1.17 1.61-1.66.67-.48 1.53-.83 2.43-.92.91-.06 1.8.13 2.55.49.73.37 1.38.82 1.89 1.34 1.06 1.02 1.83 2.17 2.46 3.37.63 1.19 1.12 2.43 1.49 3.7.34 1.27.59 2.56.75 3.86zm-3.99.35c-.15-2.21-.55-4.44-1.35-6.44-.41-.99-.93-1.93-1.57-2.63-.32-.36-.67-.62-1.01-.81-.35-.17-.66-.22-.97-.22-.3.06-.6.16-.92.39-.3.25-.62.55-.88.96-.54.79-.94 1.79-1.21 2.84-.54 2.11-.59 4.41-.36 6.65.27 2.23.84 4.44 1.8 6.34.47.95 1.05 1.82 1.69 2.43.32.32.65.52.94.68.29.13.52.14.73.13.2-.05.41-.11.67-.3.24-.21.52-.47.76-.84.49-.72.88-1.68 1.14-2.69.57-2.02.7-4.28.54-6.49zM564 280c0 2.62-.32 5.26-1.25 7.85-.49 1.28-1.13 2.56-2.12 3.75-.48.6-1.12 1.16-1.87 1.62-.78.46-1.75.76-2.76.78a5.578 5.578 0 0 1-2.73-.82 7.508 7.508 0 0 1-1.83-1.64c-.96-1.2-1.56-2.48-2.02-3.76-.89-2.57-1.16-5.19-1.12-7.78.07-2.59.46-5.18 1.42-7.67.48-1.25 1.09-2.48 2.03-3.6a7.18 7.18 0 0 1 1.74-1.52c.71-.42 1.59-.69 2.5-.71.91.02 1.78.28 2.5.71.69.43 1.3.94 1.77 1.5.97 1.11 1.64 2.32 2.16 3.57.52 1.24.9 2.52 1.16 3.81.24 1.29.37 2.6.42 3.91zm-4 0c.05-2.22-.17-4.47-.79-6.53-.32-1.02-.76-2-1.33-2.76-.29-.39-.61-.68-.93-.9-.33-.2-.64-.28-.95-.31-.31.03-.62.11-.95.31-.32.22-.66.5-.96.88-.61.74-1.09 1.71-1.46 2.72-.73 2.06-.97 4.34-.94 6.59.07 2.25.45 4.5 1.24 6.48.38.98.89 1.9 1.47 2.57.29.35.6.58.88.75.28.15.51.18.71.2.21-.03.42-.08.69-.24.26-.19.56-.42.83-.77.55-.68 1.02-1.6 1.37-2.58.76-1.96 1.08-4.19 1.12-6.41zM774 355c0 2.62-.32 5.26-1.25 7.85-.49 1.28-1.13 2.56-2.12 3.75-.48.6-1.12 1.16-1.87 1.62-.78.46-1.75.76-2.76.78a5.578 5.578 0 0 1-2.73-.82 7.508 7.508 0 0 1-1.83-1.64c-.96-1.2-1.56-2.48-2.02-3.76-.89-2.57-1.16-5.19-1.12-7.78.07-2.59.46-5.18 1.42-7.67.48-1.25 1.09-2.48 2.03-3.6a7.18 7.18 0 0 1 1.74-1.52c.71-.42 1.59-.69 2.5-.71.91.02 1.78.28 2.5.71.69.43 1.3.94 1.77 1.5.97 1.11 1.64 2.32 2.16 3.57.52 1.24.9 2.52 1.16 3.81.24 1.29.37 2.6.42 3.91zm-4 0c.05-2.22-.17-4.47-.79-6.53-.32-1.02-.76-2-1.33-2.76-.29-.39-.61-.68-.93-.9-.33-.2-.64-.28-.95-.31-.31.03-.62.11-.95.31-.32.22-.66.5-.96.88-.61.74-1.09 1.71-1.46 2.72-.73 2.06-.97 4.34-.94 6.59.07 2.25.45 4.5 1.24 6.48.38.98.89 1.9 1.47 2.57.29.35.6.58.88.75.28.15.51.18.71.2.21-.03.42-.08.69-.24.26-.19.56-.42.83-.77.55-.68 1.02-1.6 1.37-2.58.76-1.96 1.08-4.19 1.12-6.41zM712 294c0 2.62-.32 5.26-1.25 7.85-.49 1.28-1.13 2.56-2.12 3.75-.48.6-1.12 1.16-1.87 1.62-.78.46-1.75.76-2.76.78a5.578 5.578 0 0 1-2.73-.82 7.508 7.508 0 0 1-1.83-1.64c-.96-1.2-1.56-2.48-2.02-3.76-.89-2.57-1.16-5.19-1.12-7.78.07-2.59.46-5.18 1.42-7.67.48-1.25 1.09-2.48 2.03-3.6a7.18 7.18 0 0 1 1.74-1.52c.71-.42 1.59-.69 2.5-.71.91.02 1.78.28 2.5.71.69.43 1.3.94 1.77 1.5.97 1.11 1.64 2.32 2.16 3.57.52 1.24.9 2.52 1.16 3.81.24 1.29.37 2.6.42 3.91zm-4 0c.05-2.22-.17-4.47-.79-6.53-.32-1.02-.76-2-1.33-2.76-.29-.39-.61-.68-.93-.9-.33-.2-.64-.28-.95-.31-.31.03-.62.11-.95.31-.32.22-.66.5-.96.88-.61.74-1.09 1.71-1.46 2.72-.73 2.06-.97 4.34-.94 6.59.07 2.25.45 4.5 1.24 6.48.38.98.89 1.9 1.47 2.57.29.35.6.58.88.75.28.15.51.18.71.2.21-.03.42-.08.69-.24.26-.19.56-.42.83-.77.55-.68 1.02-1.6 1.37-2.58.76-1.96 1.08-4.19 1.12-6.41z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st5",
              d:
                "M264.91 286.66l-13.79 2.43a2 2 0 0 1-2.32-1.62l-5.56-31.51a2 2 0 0 1 1.62-2.32l13.79-2.43a2 2 0 0 1 2.32 1.62l5.56 31.51c.19 1.09-.53 2.12-1.62 2.32z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st4",
              d:
                "M243.25 255.95l5.56 31.51a2 2 0 0 0 2.32 1.62l12.27-2.16c-1.89-2.62-3.75-5.03-4.48-8.58-.46-2.26.2-4.77-1.37-6.65-1.8-2.15-4.31-1.44-4.4-5.04-.08-3.24 1.23-4.44-1.19-7.31-1.42-1.69-3.41-2.74-4.88-4.35-.5-.55-.86-1.05-1.15-1.55l-1.05.18c-1.1.21-1.82 1.24-1.63 2.33z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              transform: "rotate(-10.003 255.024 270.073)",
              className: "st6",
              d: "M248.97 255.98h12v28h-12z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st7",
              d:
                "M251.5 284.81l9.33-1.65c-.84-1.42-1.54-2.96-1.92-4.82-.46-2.26.2-4.77-1.37-6.65-1.8-2.15-4.31-1.44-4.4-5.04-.08-3.24 1.23-4.44-1.19-7.31-.83-.99-1.85-1.76-2.85-2.55l-2.46.43 4.86 27.59z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st5",
              d:
                "M332.43 169.47l-13.95 1.22c-1.1.1-2.07-.72-2.17-1.82l-2.79-31.88c-.1-1.1.72-2.07 1.82-2.17l13.95-1.22c1.1-.1 2.07.72 2.17 1.82l2.79 31.88c.1 1.1-.72 2.07-1.82 2.17z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st4",
              d:
                "M313.53 136.99l2.79 31.88c.1 1.1 1.07 1.91 2.17 1.82l12.41-1.09c-1.65-2.78-3.3-5.33-3.72-8.93-.27-2.29.62-4.73-.79-6.75-1.6-2.29-4.17-1.81-3.94-5.41.21-3.23 1.61-4.32-.54-7.38-1.27-1.81-3.16-3.03-4.49-4.76a8.69 8.69 0 0 1-1.01-1.64l-1.06.09c-1.1.1-1.92 1.07-1.82 2.17z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              transform: "rotate(-4.997 323.836 151.887)",
              className: "st6",
              d: "M317.99 137.99h12v28h-12z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st7",
              d:
                "M319.23 166.46l9.44-.83c-.72-1.49-1.27-3.09-1.49-4.97-.27-2.29.62-4.73-.79-6.75-1.6-2.29-4.17-1.81-3.94-5.41.21-3.23 1.61-4.32-.54-7.38-.74-1.05-1.69-1.91-2.62-2.78l-2.49.22 2.43 27.9z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st5",
              d:
                "M465.89 264.15h-14c-1.1 0-2-.9-2-2v-32c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v32c0 1.1-.9 2-2 2z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st4",
              d:
                "M449.89 230.15v32c0 1.1.9 2 2 2h12.46c-1.41-2.91-2.82-5.6-2.93-9.22-.07-2.31 1.03-4.66-.2-6.79-1.4-2.43-4-2.17-3.46-5.73.49-3.2 1.98-4.16.1-7.4-1.11-1.91-2.88-3.29-4.06-5.13-.4-.62-.67-1.19-.86-1.72h-1.06c-1.1-.01-1.99.88-1.99 1.99z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st6",
              d: "M453 232h12v28h-12z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st7",
              d:
                "M453 260h9.47c-.58-1.55-1-3.18-1.05-5.08-.07-2.31 1.03-4.66-.2-6.79-1.4-2.43-4-2.17-3.46-5.73.49-3.2 1.98-4.16.1-7.4-.65-1.11-1.52-2.05-2.37-3H453v28z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st5",
              d:
                "M795.66 363.09l-13.79-2.43a2 2 0 0 1-1.62-2.32l5.56-31.51a2 2 0 0 1 2.32-1.62l13.79 2.43a2 2 0 0 1 1.62 2.32l-5.56 31.51a2.017 2.017 0 0 1-2.32 1.62z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st4",
              d:
                "M785.8 326.83l-5.56 31.51a2 2 0 0 0 1.62 2.32l12.27 2.16c-.88-3.11-1.81-6.01-1.28-9.59.34-2.28 1.82-4.41.99-6.72-.95-2.63-3.56-2.83-2.41-6.24 1.04-3.07 2.67-3.75 1.38-7.27-.76-2.07-2.26-3.74-3.1-5.76-.28-.68-.45-1.28-.55-1.85l-1.05-.18c-1.08-.2-2.11.53-2.31 1.62z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              transform: "rotate(10.003 792.262 344.06)",
              className: "st6",
              d: "M786.02 330.02h12v28h-12z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st7",
              d:
                "M783.68 356.77l9.33 1.65c-.31-1.63-.43-3.31-.16-5.18.34-2.28 1.82-4.41.99-6.72-.95-2.63-3.56-2.83-2.41-6.24 1.04-3.07 2.67-3.75 1.38-7.27-.44-1.21-1.14-2.28-1.81-3.37l-2.46-.43-4.86 27.56z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("circle", {
              className: "st16",
              cx: "319",
              cy: "115",
              r: "8",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st17",
              d:
                "M331.21 103.22l-3.16 2.21c-.47.33-1.11.21-1.44-.25-.22-.31-.24-.71-.09-1.03l1.63-3.5a2.06 2.06 0 0 1 2.75-1c1.04.48 1.48 1.72 1 2.75-.16.34-.41.62-.69.82zM319.28 97.72l-.67 3.8c-.1.56-.64.94-1.2.84-.38-.07-.67-.33-.79-.67l-1.32-3.63c-.39-1.07.16-2.26 1.24-2.65 1.07-.39 2.26.16 2.65 1.24.12.35.15.72.09 1.07zM307.22 102.79l2.21 3.16c.33.47.21 1.11-.25 1.44-.31.22-.71.24-1.03.09l-3.5-1.63a2.069 2.069 0 0 1-1-2.75 2.06 2.06 0 0 1 2.75-1c.34.16.62.41.82.69z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st18",
              d:
                "M314.87 121.84c1.4.85 3.07 1.28 4.83 1.13 4.4-.39 7.66-4.27 7.27-8.67-.23-2.65-1.73-4.87-3.84-6.15-.3.41-.65.81-1.05 1.2-1.59 1.55-3.22 2.75-3.12 5.25.1 2.4.7 2.83-1.09 4.91-.82.97-1.98 1.6-3 2.33z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("circle", {
              className: "st16",
              cx: "248.42",
              cy: "234.05",
              r: "8",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st17",
              d:
                "M258.39 220.34l-2.73 2.73c-.4.4-1.06.4-1.46 0-.27-.27-.36-.65-.27-1l1-3.73a2.072 2.072 0 0 1 4 1.08c-.1.35-.29.67-.54.92zM245.69 216.98v3.86a1.04 1.04 0 0 1-1.94.52l-1.93-3.34c-.57-.99-.23-2.26.76-2.83a2.075 2.075 0 0 1 3.11 1.79zM234.7 224.08l2.73 2.73c.4.4.4 1.06 0 1.46-.27.27-.65.36-1 .27l-3.73-1a2.072 2.072 0 0 1 1.08-4c.35.1.67.29.92.54z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st18",
              d:
                "M245.54 241.51c1.53.59 3.25.73 4.95.27 4.27-1.14 6.8-5.53 5.66-9.8a8.006 8.006 0 0 0-4.85-5.39c-.23.46-.5.91-.82 1.37-1.3 1.8-2.69 3.26-2.16 5.71.51 2.35 1.18 2.67-.22 5.02-.65 1.1-1.68 1.92-2.56 2.82z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("circle", {
              className: "st16",
              cx: "457.6",
              cy: "207.09",
              r: "8",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st17",
              d:
                "M470.79 196.42l-3.34 1.93c-.5.29-1.13.12-1.41-.38-.19-.33-.18-.73 0-1.04l1.93-3.34c.57-.99 1.84-1.33 2.83-.76.99.57 1.33 1.84.76 2.83-.2.32-.47.58-.77.76zM459.38 189.89l-1 3.73a1.035 1.035 0 1 1-2 0l-1-3.73c-.3-1.1.36-2.24 1.46-2.54 1.1-.3 2.24.36 2.54 1.46.1.37.09.75 0 1.08zM446.93 193.9l1.93 3.34c.29.5.12 1.13-.38 1.41-.33.19-.73.18-1.04 0l-3.34-1.93c-.99-.57-1.33-1.84-.76-2.83s1.84-1.33 2.83-.76c.33.2.58.47.76.77z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st18",
              d:
                "M452.89 213.54c1.32.97 2.95 1.55 4.71 1.55 4.42 0 8-3.58 8-8 0-2.66-1.3-5-3.29-6.46-.34.38-.72.75-1.15 1.11-1.72 1.4-3.44 2.45-3.56 4.96-.11 2.4.45 2.88-1.51 4.8-.91.88-2.12 1.4-3.2 2.04z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("circle", {
              className: "st16",
              cx: "798.61",
              cy: "308.91",
              r: "8",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st17",
              d:
                "M813.44 300.69l-3.63 1.32c-.54.2-1.13-.08-1.33-.62-.13-.36-.05-.75.18-1.02l2.48-2.96c.73-.88 2.04-.99 2.92-.26a2.075 2.075 0 0 1-.62 3.54zM803.34 292.28l-1.63 3.5c-.24.52-.86.74-1.38.5-.35-.16-.56-.49-.59-.85l-.34-3.85c-.1-1.14.74-2.14 1.88-2.24 1.14-.1 2.14.74 2.24 1.88.04.38-.03.75-.18 1.06zM790.39 294.07l1.32 3.63c.2.54-.08 1.13-.62 1.33-.36.13-.75.05-1.02-.18l-2.96-2.48c-.88-.73-.99-2.04-.26-2.92a2.075 2.075 0 0 1 3.54.62z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st18",
              d:
                "M792.84 314.44a7.96 7.96 0 0 0 4.37 2.34c4.35.77 8.5-2.14 9.27-6.49.46-2.62-.41-5.15-2.12-6.93-.4.32-.84.62-1.33.89-1.94 1.08-3.82 1.82-4.37 4.26-.53 2.35-.06 2.91-2.32 4.46-1.04.73-2.32 1.03-3.5 1.47z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st4",
              d:
                "M227.76 388.16c.35 1.04.52 1.87.73 2.8.18.9.35 1.81.45 2.72.25 1.81.39 3.62.45 5.43.13 3.62-.08 7.21-.46 10.77-.35 3.57-.97 7.09-1.7 10.57-.37 1.74-.81 3.47-1.24 5.19l-1.49 5.11c-.15.53-.71.84-1.24.68a.993.993 0 0 1-.7-1.14l.01-.04.95-5.15c.24-1.73.56-3.44.79-5.16.2-1.73.46-3.44.58-5.17l.24-2.58.15-2.59c.15-3.45.17-6.89-.02-10.3-.13-1.7-.23-3.4-.46-5.07-.1-.84-.24-1.67-.36-2.49-.14-.79-.31-1.68-.48-2.33l-.03-.11c-.27-1.07.38-2.16 1.45-2.42 1.02-.28 2.05.3 2.38 1.28zM245.19 385.5c.27.18.37.27.5.38.14.11.25.22.35.32.2.2.43.41.59.62l.52.63.45.64c.31.43.56.87.81 1.3.27.44.49.88.68 1.33.86 1.79 1.43 3.62 1.95 5.46.92 3.69 1.41 7.4 1.66 11.11.17 3.7.24 7.39.03 11.05-.13 1.83-.17 3.66-.37 5.48-.2 1.82-.38 3.64-.61 5.45-.07.55-.57.94-1.12.87a.995.995 0 0 1-.88-.99v-.02l-.01-5.42c.01-1.8-.07-3.6-.1-5.4-.01-.9-.05-1.79-.12-2.69l-.15-2.68c-.09-1.79-.32-3.55-.47-5.33-.49-3.51-.98-7.02-1.94-10.34-.48-1.65-.98-3.3-1.69-4.78-.16-.38-.34-.75-.54-1.1-.19-.36-.37-.72-.59-1.03l-.31-.49-.33-.43c-.11-.16-.22-.26-.32-.39-.06-.07-.1-.12-.14-.15-.04-.04-.11-.1-.03-.05-.93-.6-1.19-1.84-.59-2.77.6-.91 1.84-1.18 2.77-.58zM296.92 384.13c-.3 1.45-.59 3.16-.78 4.79a81.49 81.49 0 0 0-.52 4.98c-.25 3.34-.38 6.71-.41 10.08-.08 3.38.06 6.76.18 10.15.14 3.39.39 6.79.59 10.2v.02c.03.55-.39 1.03-.94 1.06-.5.03-.93-.31-1.04-.78-.38-1.69-.71-3.38-1.06-5.08-.27-1.71-.57-3.42-.8-5.13-.23-1.72-.43-3.44-.56-5.17-.16-1.73-.27-3.46-.36-5.2-.12-3.48-.13-6.97.14-10.47.15-1.75.32-3.5.57-5.24.29-1.77.57-3.44 1.13-5.31a1.996 1.996 0 0 1 2.49-1.34c1 .3 1.59 1.31 1.39 2.31l-.02.13zM312.65 382.57c.13 1.68.24 3.44.39 5.16.12 1.73.26 3.47.43 5.2.32 3.47.63 6.94.98 10.41.33 3.47.73 6.94 1.13 10.42l1.21 10.44a1.002 1.002 0 0 1-1.96.38c-.47-1.7-.89-3.42-1.32-5.13-.39-1.72-.78-3.44-1.13-5.17-.74-3.46-1.29-6.94-1.87-10.43-.52-3.5-.97-7-1.28-10.53-.16-1.76-.29-3.53-.41-5.3-.08-1.78-.17-3.53-.16-5.35.01-1.11.91-1.99 2.01-1.99 1.05.01 1.9.82 1.98 1.84v.05zM360.73 387.35c-.14 3.15-.41 6.28-.68 9.42-.31 3.13-.61 6.26-.98 9.39-.39 3.12-.72 6.26-1.17 9.38-.42 3.12-.86 6.24-1.39 9.36-.09.55-.61.91-1.16.82-.49-.08-.84-.51-.84-.99.01-3.16.1-6.31.22-9.46.09-3.15.3-6.29.44-9.44.17-3.14.41-6.28.63-9.42.27-3.14.54-6.27.93-9.4.14-1.1 1.14-1.87 2.23-1.74 1.06.13 1.81 1.05 1.77 2.08zM378.75 386.94c.5 3.17.88 6.36 1.25 9.55.33 3.19.68 6.38.96 9.58.25 3.2.57 6.4.77 9.6.23 3.2.43 6.41.55 9.63.02.55-.41 1.02-.97 1.04-.5.02-.93-.33-1.02-.8-.63-3.16-1.19-6.32-1.71-9.49-.56-3.17-.99-6.35-1.49-9.52-.47-3.18-.88-6.36-1.3-9.54-.38-3.19-.75-6.37-1-9.57-.09-1.1.74-2.07 1.84-2.15a1.98 1.98 0 0 1 2.12 1.67zM345.98 261.31c-.2 2.25-.23 4.64-.13 6.96.05 1.17.09 2.34.21 3.5l.16 1.75.23 1.74c.6 4.64 1.58 9.23 2.87 13.72.72 2.22 1.33 4.48 2.21 6.66.42 1.09.8 2.2 1.25 3.28l1.39 3.22.69 1.61.78 1.57 1.55 3.15c1.06 2.09 2.27 4.1 3.35 6.19l.07.13c.51.98.13 2.18-.85 2.69-.94.49-2.09.15-2.64-.74-1.25-2.08-2.52-4.17-3.69-6.3l-1.64-3.27-.82-1.64-.72-1.68-1.43-3.37c-.44-1.14-.82-2.3-1.23-3.45-.86-2.28-1.45-4.66-2.15-7-1.14-4.75-1.97-9.58-2.28-14.46-.27-4.89-.2-9.75.85-14.65.12-.54.65-.88 1.19-.77.5.11.83.57.78 1.07v.09zM379.68 257.49c.57 2.33.91 4.62 1.25 6.95.28 2.32.51 4.66.65 6.99.26 4.67.28 9.37-.01 14.05-.35 4.67-.8 9.36-1.7 13.97-.39 2.32-.94 4.6-1.47 6.89-.25 1.15-.61 2.27-.93 3.4l-1 3.38a1.999 1.999 0 0 1-2.48 1.35 2 2 0 0 1-1.37-2.4l.02-.09c1.11-4.41 2.24-8.81 3.03-13.29.85-4.46 1.49-8.97 1.9-13.51.49-4.53.67-9.09.71-13.65.04-2.28-.01-4.56-.1-6.85-.08-2.27-.23-4.58-.46-6.8v-.04c-.06-.55.35-1.04.9-1.1.49-.06.94.27 1.06.75zM354.19 230.48c-.56.83-1.15 1.96-1.65 3.01a38.73 38.73 0 0 0-1.39 3.32c-.84 2.27-1.5 4.61-2.03 7-.48 2.4-.87 4.82-1.06 7.27-.14 1.22-.14 2.46-.21 3.69-.03 1.23 0 2.47 0 3.71v.06a.995.995 0 1 1-1.99.07c-.08-1.27-.2-2.54-.25-3.81-.01-1.27-.1-2.55-.03-3.83.02-2.56.27-5.12.6-7.67.39-2.55.92-5.08 1.66-7.58.37-1.25.79-2.49 1.27-3.71.5-1.25.99-2.39 1.74-3.7.55-.96 1.77-1.29 2.73-.74s1.29 1.77.74 2.73c-.02.04-.05.08-.07.11l-.06.07zM369.52 226.23c.77 1.2 1.31 2.27 1.89 3.43.55 1.14 1.07 2.29 1.52 3.46.93 2.33 1.71 4.71 2.37 7.11.62 2.41 1.18 4.84 1.53 7.29.4 2.45.62 4.91.79 7.38.04.55-.38 1.03-.93 1.07a.993.993 0 0 1-1.06-.86v-.03c-.33-2.38-.71-4.75-1.26-7.08-.5-2.34-1.21-4.63-1.95-6.89-.78-2.25-1.68-4.45-2.7-6.58-.5-1.07-1.06-2.11-1.64-3.12-.57-.99-1.22-2.04-1.82-2.86l-.04-.06a2 2 0 0 1 .42-2.8 2 2 0 0 1 2.8.42c.02.05.05.09.08.12zM372.75 147.67c-.13 3.61-.51 7.16-.96 10.72-.48 3.55-1.07 7.09-1.81 10.61-.75 3.51-1.59 7.02-2.65 10.48-1.06 3.46-2.27 6.89-3.82 10.21a2.006 2.006 0 1 1-3.69-1.56l.02-.04c1.24-3.22 2.35-6.52 3.38-9.86.98-3.36 1.91-6.74 2.78-10.15.84-3.42 1.65-6.85 2.43-10.3.41-1.72.8-3.45 1.17-5.18l1.16-5.18v-.01c.12-.54.66-.88 1.2-.76.49.11.81.55.79 1.02zM502.89 298.52c.58.44.94.78 1.36 1.17.4.39.76.79 1.14 1.18.71.81 1.4 1.63 2.02 2.49.65.85 1.18 1.75 1.78 2.63.52.91 1.07 1.81 1.57 2.73 1.94 3.71 3.44 7.6 4.57 11.56 1.17 3.96 1.97 7.98 2.58 12.03.24 2.03.48 4.05.68 6.08.1 2.03.23 4.06.3 6.09.02.55-.41 1.02-.96 1.04a.99.99 0 0 1-1.02-.83l-.01-.05c-.34-1.98-.63-3.95-.94-5.92l-1.14-5.86-.71-2.89c-.23-.96-.43-1.93-.72-2.88-.54-1.9-1.06-3.8-1.74-5.64-.61-1.87-1.36-3.67-2.08-5.49l-1.21-2.66c-.43-.87-.9-1.72-1.33-2.58-.45-.85-.95-1.67-1.43-2.51-.54-.79-1.02-1.62-1.59-2.38l-.84-1.15-.88-1.1c-.31-.34-.61-.7-.92-1.02-.29-.31-.66-.68-.87-.86l-.13-.11c-.83-.73-.9-1.99-.17-2.82.68-.77 1.87-.87 2.69-.25zM545.98 313.65c-1-.87-1.74-1.66-2.52-2.54-.75-.87-1.51-1.73-2.17-2.66-1.38-1.82-2.59-3.74-3.74-5.69a72.77 72.77 0 0 1-5.48-12.32l-1-3.21c-.34-1.06-.57-2.16-.86-3.24-.61-2.15-.97-4.35-1.37-6.54-.23-1.09-.34-2.2-.49-3.3l-.41-3.3c-.17-2.21-.3-4.42-.41-6.63a1.004 1.004 0 0 1 1.99-.22l.01.05 1.04 6.43c.47 2.11.8 4.25 1.35 6.34s1.04 4.18 1.71 6.22c.33 1.02.59 2.06.98 3.07l1.11 3.01c1.6 3.97 3.34 7.87 5.52 11.5 1.07 1.83 2.19 3.62 3.45 5.3.61.86 1.26 1.67 1.92 2.48.34.39.66.8 1.01 1.16.33.37.71.77.99 1.05l.09.09c.79.77.8 2.04.03 2.83-.76.77-1.96.8-2.75.12zM582.28 255.9c.71 5.34.73 10.63.4 15.95-.34 5.31-1.18 10.59-2.38 15.8-.57 2.61-1.41 5.16-2.17 7.72l-1.37 3.78c-.24.63-.45 1.26-.71 1.88l-.83 1.83c-2.07 4.96-4.9 9.57-7.93 13.99a2.002 2.002 0 1 1-3.36-2.17l.07-.11 2-3.26 1.01-1.62c.33-.55.6-1.13.9-1.69l1.8-3.37c.56-1.15 1.06-2.32 1.59-3.48l.79-1.75.7-1.79 1.38-3.58c.77-2.44 1.63-4.86 2.23-7.36 1.35-4.95 2.36-10.01 2.99-15.13l.44-3.85c.1-1.29.21-2.57.28-3.86.18-2.57.23-5.18.18-7.72v-.06c-.01-.55.43-1.01.98-1.02.52-.01.95.37 1.01.87zM422.93 380.1c-.03 1.95-.12 3.9-.17 5.84l-.28 5.84c-.21 3.89-.47 7.78-.73 11.67-.32 3.89-.58 7.77-.94 11.66-.35 3.88-.72 7.77-1.19 11.64-.07.55-.57.94-1.12.87a1 1 0 0 1-.88-.97c-.08-3.91-.07-7.81-.03-11.7.02-3.9.15-7.79.21-11.69.13-3.89.26-7.79.43-11.68l.3-5.84c.14-1.94.24-3.89.41-5.83.1-1.1 1.06-1.92 2.17-1.82 1.04.08 1.83.97 1.82 2.01zM437.05 379.44c1.28 4.09 2.24 8.15 3.1 12.28.85 4.12 1.5 8.28 2.07 12.45.51 4.18.91 8.37 1.09 12.57.22 4.2.15 8.42-.08 12.62-.03.55-.5.97-1.05.94-.5-.03-.89-.42-.94-.9v-.05c-.21-2.07-.26-4.13-.52-6.19l-.28-3.09-.37-3.08c-.24-2.05-.53-4.1-.8-6.14-.31-2.04-.61-4.08-.99-6.11-.66-4.07-1.45-8.13-2.3-12.16-.42-2.02-.86-4.03-1.33-6.04-.44-2.01-.95-4.03-1.43-5.98l-.01-.05c-.26-1.07.39-2.16 1.46-2.42a2 2 0 0 1 2.38 1.35zM487.14 374.35c-.29 2.2-.57 4.51-.78 6.79-.24 2.28-.45 4.58-.62 6.87-.33 4.59-.65 9.19-.81 13.81-.17 4.61-.32 9.23-.32 13.85-.07 4.63 0 9.25-.01 13.9v.02c0 .55-.45 1-1 1-.51 0-.93-.38-.99-.87-.3-2.32-.56-4.64-.79-6.96-.17-2.33-.4-4.66-.52-6.99-.16-2.33-.23-4.67-.28-7.01-.08-2.34-.09-4.68-.09-7.02.08-4.68.2-9.37.57-14.04.37-4.69.84-9.32 1.73-14.04a1.994 1.994 0 1 1 3.94.62l-.03.07zM505.67 374.33c-.25 2.21-.42 4.62-.5 6.95-.1 2.35-.15 4.72-.09 7.08.07 4.73.3 9.46.79 14.18.48 4.72 1.08 9.44 1.95 14.12.79 4.7 1.87 9.34 2.92 14.01l.01.03c.12.54-.22 1.07-.76 1.2-.5.11-1-.17-1.17-.65-.8-2.28-1.59-4.58-2.31-6.89-.64-2.34-1.37-4.66-1.91-7.03-.29-1.18-.57-2.36-.84-3.55l-.69-3.58c-.24-1.19-.46-2.39-.63-3.59-.18-1.2-.39-2.4-.56-3.61-.59-4.83-1.01-9.7-1.08-14.59-.02-1.22-.02-2.44.01-3.67.01-1.22.06-2.45.12-3.67.17-2.47.34-4.86.78-7.41a1.996 1.996 0 0 1 3.95.56l.01.11zM550 390.13c-.1 3.54-.26 7.11-.41 10.67l-.46 10.67-.45 10.67-.39 10.68v.01c-.02.55-.49.99-1.04.97-.5-.02-.89-.39-.96-.87-.24-1.79-.43-3.58-.59-5.37-.15-1.8-.25-3.59-.36-5.39-.18-3.59-.25-7.19-.26-10.78.01-3.59.06-7.18.23-10.76.15-3.59.35-7.16.7-10.75.11-1.1 1.09-1.9 2.19-1.8 1.05.1 1.83 1 1.81 2.04l-.01.01zM569.52 389.9c.29 3.68.41 7.34.5 11.01.06 3.67.05 7.34 0 11.01-.11 3.67-.21 7.34-.46 11.01-.24 3.67-.56 7.34-1.04 10.99-.07.55-.58.94-1.12.86-.5-.07-.86-.49-.87-.98v-.01l-.18-10.94c-.1-3.64-.13-7.29-.28-10.93l-.31-10.93-.14-5.46-.09-5.45c-.02-1.1.86-2.02 1.96-2.04 1.06 0 1.95.82 2.03 1.86zM627.05 361.02c.04 3.55-.2 6.98-.56 10.46-.35 3.46-.91 6.9-1.6 10.32a85.49 85.49 0 0 1-2.77 10.11c-.64 1.64-1.21 3.29-1.96 4.88-.7 1.61-1.57 3.15-2.43 4.67a1 1 0 0 1-1.36.38c-.42-.24-.6-.74-.46-1.19l.03-.08c.54-1.61 1.19-3.14 1.62-4.77.55-1.58.93-3.23 1.37-4.84.77-3.27 1.44-6.57 1.99-9.89.53-3.33.94-6.67 1.31-10.03.18-1.68.33-3.36.46-5.04.16-1.67.25-3.38.36-5.01v-.06c.07-1.1 1.02-1.94 2.13-1.87 1.05.06 1.86.93 1.87 1.96zM648.32 360.82c.24 1.76.47 3.59.77 5.38.26 1.8.54 3.6.86 5.39.63 3.59 1.31 7.16 2.11 10.71.78 3.55 1.74 7.05 2.8 10.52.58 1.71 1.11 3.45 1.81 5.11.6 1.72 1.4 3.32 2.12 5l.02.05c.22.51-.02 1.1-.53 1.31-.45.19-.96.03-1.23-.36-2.11-3.14-3.79-6.54-5.25-10-1.43-3.48-2.56-7.06-3.61-10.66-.98-3.61-1.81-7.27-2.45-10.95-.64-3.69-1.17-7.36-1.42-11.15-.07-1.1.76-2.05 1.86-2.13 1.05-.07 1.97.69 2.11 1.72l.03.06zM609.9 225.54c.11 2.08.3 4.25.62 6.36.13 1.06.32 2.12.48 3.17l.63 3.14c.89 4.17 2.12 8.26 3.68 12.19.71 2 1.65 3.89 2.52 5.81l1.51 2.78.76 1.38.84 1.33c.57.88 1.1 1.79 1.7 2.66l1.89 2.52c.32.42.6.86.94 1.26l1.03 1.19c.69.79 1.38 1.59 2.05 2.4l.11.13c.71.84.6 2.1-.24 2.81-.81.68-1.99.6-2.72-.14-3.13-3.23-6.11-6.68-8.39-10.58l-.91-1.43c-.29-.48-.53-.99-.79-1.49-.51-1-1.04-2-1.54-3.01-.88-2.07-1.83-4.11-2.53-6.24-1.45-4.24-2.54-8.59-3.17-13.01-.6-4.43-.86-8.84-.48-13.35a.998.998 0 0 1 1.99.03l.02.09zM660.89 215.97c.41 5.1.22 10.14-.24 15.19-.5 5.05-1.37 10.07-2.7 15-1.33 4.92-3.01 9.8-5.36 14.4-1.16 2.3-2.47 4.55-3.93 6.69a51.875 51.875 0 0 1-4.93 6.05c-.76.8-2.03.83-2.83.06-.77-.74-.82-1.94-.14-2.74l.04-.05c1.55-1.82 3.03-3.7 4.34-5.7 1.29-2.02 2.53-4.08 3.6-6.25 2.13-4.33 3.9-8.88 5.26-13.57 1.33-4.7 2.4-9.49 3.19-14.35.82-4.85 1.39-9.79 1.69-14.68v-.04c.03-.55.51-.97 1.06-.94.52.04.91.44.95.93zM679.25 285.86c.18 1.96.42 4 .79 5.97.32 1.99.75 3.96 1.22 5.92.96 3.9 2.19 7.73 3.77 11.38 1.47 3.71 3.46 7.15 5.64 10.42l1.7 2.41 1.9 2.25.94 1.14 1.04 1.04c.7.69 1.39 1.39 2.07 2.1l.13.14c.77.79.74 2.06-.05 2.82-.75.73-1.94.74-2.71.06-3.2-2.84-6.24-5.94-8.56-9.55a54.793 54.793 0 0 1-5.83-11.34c-1.45-3.98-2.58-8.06-3.26-12.21-.66-4.16-1.02-8.31-.8-12.57.03-.55.5-.97 1.05-.95.5.03.9.42.94.9l.02.07zM699.97 403.7l-.54 4.32c-.19 1.45-.37 2.9-.52 4.35-.33 2.9-.65 5.8-.86 8.71-.25 2.9-.39 5.81-.43 8.71-.02 2.9.06 5.79.37 8.66v.02a.994.994 0 0 1-.89 1.1c-.49.05-.93-.25-1.07-.71-.88-2.93-1.34-5.94-1.63-8.95-.3-3.01-.3-6.03-.3-9.03.07-3.01.27-6 .57-8.98.33-2.99.72-5.93 1.36-8.91a1.998 1.998 0 0 1 2.37-1.54 2.01 2.01 0 0 1 1.57 2.2v.05zM713.71 403.71c-.37 2.83-.71 5.77-1 8.66-.25 2.9-.51 5.81-.64 8.71-.11 2.9-.19 5.8-.1 8.69 0 .72.06 1.44.08 2.16.02.73.08 1.44.16 2.16.09.71.08 1.45.21 2.15.11.71.21 1.43.29 2.15l.01.06a1.002 1.002 0 0 1-1.93.48c-1.13-2.86-1.76-5.87-2.23-8.88-.41-3.02-.57-6.05-.57-9.07 0-3.02.15-6.04.46-9.03.3-3.01.69-5.96 1.34-8.97a2.003 2.003 0 0 1 2.38-1.54c1.02.22 1.7 1.19 1.57 2.21l-.03.06zM711.85 332.14c.57 1.16 1.31 2.51 2.1 3.7.39.61.83 1.2 1.22 1.81l1.32 1.74c1.83 2.26 3.92 4.3 6.22 6.06l.85.67c.29.22.6.4.91.6.61.39 1.21.81 1.83 1.17 1.28.68 2.54 1.42 3.9 1.96 2.66 1.25 5.52 1.99 8.45 2.78l.08.02c.53.14.85.69.71 1.23-.12.45-.53.75-.98.74-.79-.01-1.59-.05-2.39-.09-.8-.05-1.62-.04-2.4-.22-1.59-.27-3.19-.55-4.72-1.1-1.58-.43-3.04-1.15-4.53-1.83-.74-.35-1.42-.81-2.13-1.21-.35-.21-.71-.41-1.05-.63l-1-.71a34.256 34.256 0 0 1-7.1-6.71l-1.47-1.95c-.45-.68-.92-1.35-1.32-2.06-.41-.71-.82-1.41-1.18-2.15-.39-.74-.7-1.45-1.03-2.33-.4-1.03.12-2.18 1.15-2.58.97-.37 2.05.06 2.5.97l.06.12zM745.83 353.87c.34 1.31.7 2.68 1.15 3.99.41 1.33.87 2.64 1.36 3.94 1 2.59 2.1 5.12 3.38 7.54 1.24 2.44 2.73 4.72 4.3 6.91l1.22 1.61c.42.52.89 1 1.33 1.51.83 1.07 1.88 1.9 2.78 2.89l.15.17c.74.82.68 2.08-.14 2.82-.74.68-1.86.68-2.61.06-2.31-1.92-4.43-4.1-6.17-6.53-1.73-2.43-3.25-5-4.42-7.71-1.19-2.7-2.18-5.47-2.89-8.3-.72-2.84-1.25-5.67-1.42-8.64-.03-.55.39-1.03.94-1.06.48-.03.91.29 1.03.75l.01.05zM761.86 414.87c-.26.8-.58 1.83-.8 2.78-.24.97-.48 1.96-.65 2.96-.34 2-.63 4.02-.76 6.07-.05 1.02-.14 2.05-.12 3.08l-.02 1.55c.02.52.04 1.03.04 1.55.03 2.08.26 4.15.42 6.27v.05a1.008 1.008 0 0 1-1.95.42c-.37-1.03-.72-2.08-1.04-3.15-.25-1.07-.55-2.15-.72-3.24-.44-2.18-.58-4.42-.63-6.66 0-2.24.17-4.49.58-6.71.2-1.11.46-2.21.76-3.31.35-1.11.67-2.13 1.24-3.31.48-.99 1.68-1.41 2.67-.92.91.44 1.33 1.48 1.03 2.41l-.05.16zM772.97 414.37c-.06.94-.15 2.03-.15 3.05-.04 1.04-.05 2.09-.03 3.13.06 2.09.19 4.17.47 6.23.24 2.07.71 4.1 1.24 6.11l.44 1.5c.17.49.37.97.55 1.46.3 1.02.83 1.91 1.21 2.92l.04.11c.19.52-.07 1.1-.59 1.29-.41.15-.86.02-1.13-.3-1.44-1.77-2.71-3.73-3.63-5.85a30.89 30.89 0 0 1-2.11-6.57c-.45-2.25-.74-4.53-.78-6.82-.04-2.31.05-4.53.5-6.91.2-1.08 1.25-1.8 2.33-1.59 1 .19 1.69 1.09 1.63 2.09l.01.15zM217.55 334.4c-1-.82-1.76-1.57-2.55-2.41-.78-.82-1.53-1.66-2.23-2.54-.7-.88-1.38-1.76-2.01-2.69-.66-.9-1.26-1.84-1.85-2.79-2.32-3.8-4.2-7.83-5.74-11.97-.67-2.11-1.41-4.18-1.9-6.33-.26-1.07-.58-2.12-.79-3.2l-.59-3.24c-.22-1.07-.35-2.16-.47-3.25l-.37-3.26c-.15-2.18-.22-4.36-.29-6.53a.997.997 0 0 1 .97-1.03c.51-.02.94.35 1.02.83l.01.07c.35 2.11.59 4.22.96 6.31l.62 3.12c.19 1.04.4 2.08.69 3.09l.79 3.06c.25 1.02.61 2.01.91 3.02.57 2.02 1.39 3.96 2.12 5.92 1.61 3.86 3.46 7.61 5.68 11.12.55.88 1.1 1.76 1.71 2.6.58.86 1.21 1.68 1.84 2.49.63.82 1.28 1.61 1.96 2.37.34.38.68.76 1.03 1.11.33.36.72.74 1.01 1.01l.1.09c.81.75.85 2.02.1 2.82-.72.8-1.92.87-2.73.21zM275.25 271.93c.62 4.22 1.61 8.49 2.72 12.66 1.16 4.17 2.41 8.32 3.9 12.39 1.54 4.04 3.03 8.11 4.86 12.03 1.7 3.98 3.65 7.84 5.55 11.73l.03.06a2 2 0 0 1-.92 2.67c-.96.47-2.12.09-2.63-.84-1.06-1.95-2.14-3.89-3.13-5.88-.94-2.01-1.94-4-2.79-6.05l-1.28-3.08-1.18-3.12c-.82-2.07-1.48-4.19-2.17-6.3-1.29-4.25-2.46-8.54-3.29-12.9-.85-4.37-1.51-8.73-1.66-13.25a.997.997 0 0 1 .97-1.03c.51-.02.95.36 1.02.85v.06zM323.01 266.03c.3 4.79-.02 9.48-.55 14.17-.55 4.69-1.42 9.33-2.5 13.93-.26 1.15-.61 2.28-.91 3.42-.3 1.14-.62 2.28-.98 3.4l-1.05 3.38c-.38 1.12-.78 2.23-1.19 3.34-.77 2.23-1.73 4.39-2.61 6.58-.95 2.16-1.98 4.29-3.01 6.41-.48.99-1.68 1.41-2.67.93a1.986 1.986 0 0 1-.96-2.59l.03-.07c1.82-4.22 3.67-8.42 5.23-12.73 1.65-4.28 3.02-8.66 4.28-13.08 1.28-4.41 2.28-8.9 3.14-13.41.45-2.26.78-4.53 1.09-6.81.31-2.27.55-4.59.68-6.82v-.06c.03-.55.5-.97 1.06-.94.49.04.89.45.92.95z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st5",
                d: "M440 380h-24.22s2.47-90.86 11.34-90.86S440 380 440 380z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st5",
                d:
                  "M440 382h-24.22c-.54 0-1.06-.22-1.43-.61-.38-.39-.58-.91-.57-1.45.01-.23.64-23.02 2.35-45.53 3.32-43.63 7.42-47.28 11-47.28 3.57 0 7.71 3.65 11.76 47.25 2.09 22.5 3.11 45.3 3.12 45.53.02.54-.18 1.08-.55 1.47-.39.4-.91.62-1.46.62zm-22.17-4h20.07c-2.31-50.42-7.2-83.08-10.78-86.7-3.5 3.67-7.83 36.35-9.29 86.7z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st6",
                d:
                  "M316.97 382.34l-28.2 1.23s-1.09-90.9 9.24-91.35c10.34-.45 18.96 90.12 18.96 90.12z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st6",
                d:
                  "M288.77 385.57c-.51 0-1-.2-1.37-.55-.39-.37-.62-.89-.63-1.43 0-.23-.26-23.04.75-45.62 1.86-41.65 6.1-47.57 10.41-47.75 3.62-.2 6.41 4.44 9.34 15.37 2.02 7.53 4.06 18.03 6.08 31.22 3.42 22.38 5.59 45.12 5.62 45.34.05.55-.12 1.09-.48 1.5-.36.41-.87.66-1.42.69l-28.2 1.23h-.1zm9.34-91.34c-.7.38-4.91 4.33-6.65 45.24-.77 18.08-.74 36.05-.7 42.01l24.01-1.05c-.61-5.99-2.5-23.88-5.19-41.8-6.12-40.62-10.74-44.1-11.47-44.4z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st5",
                d:
                  "M716 403h-24.22s2.47-90.86 11.34-90.86C712 312.14 716 403 716 403z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st5",
                d:
                  "M716 405h-24.22c-.54 0-1.06-.22-1.43-.61-.38-.39-.58-.91-.57-1.45.01-.23.64-23.02 2.35-45.53 3.32-43.63 7.42-47.28 11-47.28 3.57 0 7.71 3.65 11.76 47.25 2.09 22.5 3.11 45.3 3.12 45.53.02.54-.18 1.08-.55 1.47-.39.4-.91.62-1.46.62zm-22.17-4h20.07c-2.31-50.42-7.2-83.08-10.78-86.7-3.5 3.67-7.83 36.35-9.29 86.7z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st2",
                d:
                  "M384.69 387h-33.6s5.31-90.86 15.74-90.86S384.69 387 384.69 387z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st2",
                d:
                  "M384.69 389h-33.6a2 2 0 0 1-2-2.12c.01-.23 1.36-23.03 3.97-45.54 1.54-13.26 3.2-23.84 4.96-31.45 2.54-11.04 5.18-15.75 8.81-15.75 3.6 0 6.33 4.7 9.13 15.71 1.93 7.61 3.85 18.19 5.69 31.45 3.13 22.51 5.01 45.32 5.03 45.54.05.56-.14 1.11-.52 1.52s-.91.64-1.47.64zm-31.47-4h29.29c-.54-6.09-2.2-24.09-4.68-42.12-5.8-42.17-10.52-44.61-11.04-44.75-.44.15-5.09 2.69-9.89 44.81-2.05 18.05-3.29 36.03-3.68 42.06z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st6",
                d:
                  "M511.69 374h-33.6s5.31-90.86 15.74-90.86S511.69 374 511.69 374z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st6",
                d:
                  "M511.69 376h-33.6a2 2 0 0 1-2-2.12c.01-.23 1.36-23.03 3.97-45.54 1.54-13.26 3.2-23.84 4.96-31.45 2.54-11.04 5.18-15.75 8.81-15.75 3.6 0 6.33 4.7 9.13 15.71 1.93 7.61 3.85 18.19 5.69 31.45 3.13 22.51 5.01 45.32 5.03 45.54.05.56-.14 1.11-.52 1.52s-.91.64-1.47.64zm-31.47-4h29.29c-.54-6.09-2.2-24.09-4.68-42.12-5.8-42.17-10.52-44.61-11.04-44.75-.44.15-5.09 2.69-9.89 44.81-2.05 18.05-3.29 36.03-3.68 42.06z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st0",
                d: "M654.93 361h-38.09s6.02-103 17.84-103 20.25 103 20.25 103z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st0",
                d:
                  "M654.93 363h-38.09a2 2 0 0 1-2-2.12c.02-.26 1.54-26.1 4.5-51.61 5.44-46.94 10.8-53.27 15.34-53.27 4.51 0 10.01 6.32 16.54 53.22 3.55 25.51 5.68 51.35 5.7 51.61a2.007 2.007 0 0 1-1.99 2.17zm-35.96-4h33.78c-.59-6.73-2.55-28.1-5.5-49.24-2.07-14.88-4.21-26.71-6.36-35.18-3.6-14.18-6.19-14.58-6.21-14.58-.23 0-5.67.57-11.37 49.73-2.45 21.18-3.91 42.6-4.34 49.27z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st2",
                d:
                  "M573.69 390h-33.6s.56-90.86 15.74-90.86c15.17 0 17.86 90.86 17.86 90.86z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st2",
                d:
                  "M573.69 392h-33.6a1.996 1.996 0 0 1-2-2.01c0-.23.17-23.06 2.19-45.6 3.8-42.35 10.69-47.25 15.55-47.25 4.84 0 11.82 4.89 16.61 47.21 2.55 22.54 3.25 45.37 3.25 45.6.02.54-.19 1.06-.56 1.45-.38.38-.9.6-1.44.6zm-31.58-4h29.5c-.23-6.09-1.07-24.77-3.16-43.23-1.48-13.08-3.29-23.48-5.37-30.91-3.31-11.81-6.4-12.73-7.26-12.73-1.28 0-7.84 2.1-11.56 43.59-1.66 18.51-2.06 37.23-2.15 43.28z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st2",
                d:
                  "M253.28 386.38l-33.47 2.93s-6.75-83.59 8.37-84.91c15.11-1.33 25.1 81.98 25.1 81.98z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st2",
                d:
                  "M219.81 391.3c-.47 0-.93-.17-1.29-.47-.41-.34-.66-.83-.7-1.37-.02-.21-1.69-21.23-1.49-42.14.38-39.39 6.85-44.5 11.68-44.93 4.82-.41 12.16 3.49 20.35 42.07 4.35 20.51 6.89 41.46 6.91 41.67.06.54-.09 1.08-.43 1.5-.34.42-.84.68-1.38.73l-33.47 2.93c-.07.01-.12.01-.18.01zm8.7-84.92c-.06 0-.11 0-.16.01-1.79.16-7.67 3.58-8.03 40.98-.16 16.99.92 34.05 1.33 39.77l29.38-2.57c-.75-5.75-3.07-22.67-6.6-39.28-7.58-35.74-13.93-38.91-15.92-38.91z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st2",
                d:
                  "M767.1 372.69c8.26 1.47 8.78 41.36 8.78 41.36l-20.5-.94s3.46-41.89 11.72-40.42z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st2",
                d:
                  "M775.88 416.05h-.09l-20.5-.94c-.54-.03-1.05-.27-1.41-.68-.36-.41-.54-.94-.49-1.48.49-5.93 3.29-35.78 10.36-41.23 1.44-1.11 2.8-1.15 3.7-.99 2.85.51 6.89 3.44 9.12 22.97 1.16 10.14 1.3 20.23 1.31 20.33.01.55-.21 1.08-.61 1.46-.38.36-.87.56-1.39.56zm-18.33-4.85l16.28.75c-.1-3.46-.41-10.63-1.23-17.83-2.1-18.28-5.47-19.4-5.85-19.46-.07-.01-.22-.04-.56.22-2.27 1.75-6.53 13.13-8.64 36.32z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st0",
                d:
                  "M353.39 179.36c10.15.02 19.15 47.44 19.15 47.44l-24.62 3.18s-4.68-50.64 5.47-50.62z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st0",
                d:
                  "M347.92 231.98c-.45 0-.89-.15-1.25-.44-.42-.34-.69-.84-.74-1.38-.4-4.38-3.74-42.98 3.57-50.98 1.38-1.51 2.87-1.82 3.88-1.82h.01c3.36.01 8.61 2.62 15.3 25.16 3.51 11.82 5.79 23.79 5.82 23.91a2.006 2.006 0 0 1-1.71 2.36l-24.62 3.18c-.09 0-.17.01-.26.01zm5.46-50.62c-.14 0-.46.01-.92.52-4.42 4.84-4.05 29.83-2.72 45.85l20.45-2.64c-5.36-27.07-12.82-43.73-16.81-43.73.01 0 0 0 0 0z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st11",
                d: "M120 436.59c244-33.59 459 14.41 760 0v29.12H120v-29.12z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st4",
              d:
                "M119.87 435.67c62.74-9.76 126.36-13.15 189.81-13.29 63.48-.18 126.89 2.75 190.22 5.91 31.67 1.56 63.32 3.29 94.98 4.74 31.66 1.46 63.33 2.69 95 3.46 31.68.77 63.36 1.1 95.04.84 31.68-.25 63.34-1.17 95.04-1.67a.926.926 0 0 1 .09 1.85c-31.64 2.46-63.37 3.27-95.09 3.6-31.72.33-63.45.08-95.17-.62-63.43-1.4-126.79-4.61-190.11-7.88-63.31-3.24-126.64-6.25-189.99-6.15-31.67.04-63.33.93-94.94 2.7-3.95.18-7.9.48-11.85.75l-11.84.81c-7.9.54-15.78 1.25-23.67 1.87l-23.64 2.28-23.61 2.63h-.01a.917.917 0 0 1-1.02-.82c-.07-.48.28-.93.76-1.01z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st5",
                d:
                  "M667.29 221.69l-13.95-1.22c-1.1-.1-1.91-1.07-1.82-2.17l2.79-31.88c.1-1.1 1.07-1.91 2.17-1.82l13.95 1.22c1.1.1 1.91 1.07 1.82 2.17l-2.79 31.88c-.1 1.1-1.07 1.91-2.17 1.82z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st4",
                d:
                  "M654.32 186.42l-2.79 31.88c-.1 1.1.72 2.07 1.82 2.17l12.41 1.09c-1.15-3.02-2.32-5.83-2.11-9.44.14-2.3 1.43-4.55.4-6.78-1.18-2.54-3.79-2.51-2.94-6.01.76-3.15 2.33-3.97.75-7.36-.94-2-2.58-3.53-3.59-5.47a9.07 9.07 0 0 1-.71-1.79l-1.06-.09c-1.12-.11-2.09.7-2.18 1.8z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                transform: "rotate(4.997 661.662 202.963)",
                className: "st6",
                d: "M656.01 189.01h12v28h-12z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st7",
                d:
                  "M654.81 216.43l9.44.83c-.45-1.59-.72-3.26-.61-5.15.14-2.3 1.43-4.55.4-6.78-1.18-2.54-3.79-2.51-2.94-6.01.76-3.15 2.33-3.97.75-7.36-.55-1.17-1.33-2.18-2.1-3.2l-2.49-.22-2.45 27.89z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
              "g",
              {
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("circle", {
                className: "st16",
                cx: "665.2",
                cy: "165.08",
                r: "8",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st17",
                d:
                  "M679.26 165.6l-3.5 1.63c-.52.24-1.13.02-1.38-.5-.16-.35-.11-.74.09-1.03l2.21-3.16a2.07 2.07 0 0 1 2.88-.51c.94.66 1.16 1.95.51 2.88-.2.31-.49.55-.81.69zM668.47 148.11l-1.32 3.63c-.2.54-.79.81-1.33.62-.36-.13-.6-.44-.67-.79l-.67-3.8c-.2-1.13.55-2.2 1.68-2.4 1.13-.2 2.2.55 2.4 1.68.07.36.03.73-.09 1.06zM655.72 151.02l1.63 3.5c.24.52.02 1.13-.5 1.38-.35.16-.74.11-1.03-.09l-3.16-2.21c-.94-.66-1.16-1.95-.51-2.88s1.95-1.16 2.88-.51c.31.2.54.49.69.81z",
                __self: this,
              }),
              react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
                className: "st18",
                d:
                  "M659.94 171.1c1.23 1.08 2.8 1.8 4.56 1.95 4.4.39 8.28-2.87 8.67-7.27.23-2.65-.86-5.1-2.72-6.72-.37.35-.78.69-1.24 1-1.84 1.25-3.65 2.15-3.98 4.63-.32 2.38.2 2.91-1.92 4.65-.99.8-2.24 1.22-3.37 1.76z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st3",
              d:
                "M775.79 416.05h.09c.52 0 1.02-.2 1.39-.56.4-.38.62-.91.61-1.46 0-.1-.15-10.19-1.31-20.33-2.24-19.53-6.28-22.46-9.12-22.97a4.53 4.53 0 0 0-1.39-.02c-.1.43-.18.87-.29 1.27-.42 1.5-1.09 3.05-1.26 4.61-.48 4.36 2.18 8.24 1.59 12.81-.75 5.85-2.2 10.45-1.42 16.42.42 3.23.39 6.49.23 9.74l10.88.49zM556.75 297.2c-.11.36-.2.73-.25.91-.52 1.81-.75 3.61-.63 5.49.15 2.28.96 4.54.72 6.85-.32 3.2-2.62 5.09-3.41 8.03-.84 3.08.75 4.55 3.19 6.06 3.28 2.03 3.81 2.95 3.05 6.74-.52 2.61-1.65 5.09-2.33 7.66-1.15 4.35.28 8.14-.15 12.47-.24 2.37-1.38 4.55-.8 6.97.43 1.8 1.69 2.72 2.56 4.25 2.73 4.82-2.17 10.57-3.24 15.46-.94 4.28.5 7.84 3.45 10.99.95 1.01 2.04 1.93 3.03 2.91h11.76c.54 0 1.06-.22 1.43-.61.38-.39.58-.91.56-1.45-.01-.23-.7-23.06-3.25-45.6-4.49-39.68-10.92-46.44-15.69-47.13z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st1",
              d:
                "M634.68 256c-.89 0-1.81.25-2.76 1 .44.5 1.05.91 1.76 1.1-.12.42-.22.91-.3 1.16-.43 1.34-.96 2.74-.89 4.18.09 1.9 1.02 3.23 2.37 4.07-1.19 2.6-2.24 5.19-.61 8.02.8 1.39 1.99 1.97 3.08 3.06 2.25 2.26 1.49 4.58.36 7.23-2.71 6.34-6.45 11.57-1.2 17.57 2.18 2.49 2.05 3.02.69 5.89-.68 1.44-1.24 2.79-1.43 4.38-.49 4.18 1.95 7.37 2.81 11.27 1.08 4.88-1.86 9.69-.99 14.69.35 1.98 1.29 3.9 1.41 5.91.17 2.95-1.49 5.54-2.6 8.14-1.32 3.08-2.3 6.08-1.31 9.32h19.85c.56 0 1.09-.23 1.47-.64s.57-.96.52-1.52c-.02-.26-2.15-26.1-5.7-51.61-6.52-46.9-12.01-53.22-16.53-53.22z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st15",
              d:
                "M703.12 310.14c-.1 0-.19 0-.29.01-.33 1.15-.92 2.71-.97 3.05-.3 2.03.24 3.91.72 5.86.84 3.41.6 6.2.33 9.62-.28 3.54-1.02 9.15 2.09 11.67-.73 2.79-2.42 4.98-2 8.1.28 2.09.95 3.74.36 5.92-.55 2.02-1.77 3.81-2.22 5.88-.67 3.1.36 6.46.65 9.56.46 5.01.56 10.05.52 15.08-.03 4.14-1.73 13.46-.45 20.11H716c.55 0 1.07-.22 1.45-.62.38-.39.58-.93.55-1.47-.01-.23-1.03-23.02-3.12-45.53-4.05-43.59-8.19-47.24-11.76-47.24z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st7",
              d:
                "M502.95 296.84c-2.8-11.01-5.53-15.71-9.13-15.71-.28 0-.55.04-.81.09-.15.59-.38 1.51-.43 1.83-.21 1.24-.54 2.66-.32 3.93.19 1.15.71 2.21 1.38 3.16.44.62 1.24 1.07 1.61 1.71.92 1.59.54 2.88.42 4.53-.31 4.52-.27 7.68 1.15 12.02 1.69 5.19-.98 9.72-2.37 14.73-1.27 4.57-1.18 8.8-1.09 13.49.1 5.32-1.13 9.81-2.29 14.93-1.71 7.54 3.34 14.08 2.85 21.63-.06.89-.12 1.84-.16 2.81h17.95c.56 0 1.09-.23 1.47-.64s.57-.96.52-1.52c-.02-.23-1.9-23.03-5.03-45.54-1.87-13.26-3.78-23.84-5.72-31.45zM307.66 374.55c-1.25-5.39-4.31-9.95-3.69-15.7.57-5.3 2.09-9.95.86-15.3-1.01-4.4-3.15-8.5-3.67-13.02-.62-5.41 1.42-10.83 1.32-16.27-.04-2.41-.39-4.81-1.47-6.99-1.04-2.08-3.05-3.81-3.56-6.15-.52-2.43.59-5.12.78-7.54.09-1.14 0-2.25-.07-3.36-.08 0-.16-.01-.24-.01-4.3.19-8.54 6.1-10.41 47.75-1.01 22.58-.75 45.39-.75 45.62.01.54.23 1.06.63 1.43.37.35.86.55 1.37.55h.09l20.59-.9c-.36-3.51-1.05-6.97-1.78-10.11z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st1",
              d:
                "M345.93 230.16c.05.54.32 1.04.74 1.38.36.29.8.44 1.25.44.09 0 .17-.01.26-.02l10.88-1.41c.25-3.11.77-6.26.36-9.36-.41-3.09-2.02-5.76-2.76-8.74-.93-3.71.69-7.34-.51-11.02-.87-2.67-1.17-4.23-.97-7.15.06-.89.12-1.75-.02-2.63-.36-2.17-1.54-3.98-1.89-6.2-.25-1.59-.28-3.2-.63-4.78-.21-.94-.86-1.98-1.17-2.92-.64.27-1.31.71-1.96 1.42-7.32 8.02-3.98 46.62-3.58 50.99z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st15",
              d:
                "M429.26 373.38c-1.5-11.27 1.58-22.55 1.04-33.85-.22-4.71-2.21-9.21-1.87-13.93.26-3.64 1.1-6.87-.96-10.13-.92-1.45-2.4-2.55-2.81-4.3-.48-2.03.52-4.86.92-6.9.97-4.9 1.19-9.83 2.25-14.71.2-.94-.12-1.78-.71-2.42-3.58 0-7.68 3.66-10.99 47.28-1.71 22.5-2.34 45.3-2.35 45.53a2.015 2.015 0 0 0 2 2.06h13.36c.23-.99.46-1.97.51-2.99.09-1.9-.14-3.77-.39-5.64z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st3",
              d:
                "M234.61 384.84c-1.28-5.44 1.76-10.08 1.43-15.45-.13-2.11-.9-3.83-1.64-5.75-1.48-3.85-.53-5.68.36-9.47.99-4.23-.02-6.32-2.01-9.92-2.92-5.29.87-11.44-1.44-17.13-.86-2.13-2.22-3.98-2.1-6.37.13-2.63 2.07-4.84 2.66-7.34.77-3.34-.73-5.97-4.33-5.91-.27 0-1.3.32-2.02.5.44-.57.7-1.96.82-2.26.48-1.15 1.1-2.25 1.73-3.33h-.06c-4.83.42-11.3 5.54-11.68 44.93-.2 20.91 1.47 41.93 1.49 42.14.04.53.3 1.02.7 1.37.36.31.82.47 1.29.47.06 0 .12 0 .17-.01l15.86-1.39c-.36-1.64-.81-3.28-1.23-5.08zM373.91 375.51c-.83-4.16-3.24-7.68-4.72-11.6-1.96-5.21-.99-9.96.24-15.19 1.23-5.26 1.73-9.87-.07-15.05-1.48-4.28-6.51-9.14-5.63-13.64.98-5 4.4-8.26 3.41-13.7-.47-2.58-1.7-4.93-1.78-7.59-.05-1.56.28-3.04.7-4.51-3.24.63-5.68 5.42-8.05 15.67-1.75 7.61-3.42 18.19-4.96 31.45-2.61 22.51-3.95 45.32-3.97 45.54a2 2 0 0 0 2 2.12h21.29c.02-.16.03-.32.05-.47.67-4.56 2.43-8.34 1.49-13.03z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("path", {
              className: "st8",
              d:
                "M591.51 142.29c-.05-2.17-.54-4.36-1.43-6.3-.87-1.91-2.25-3.73-3.79-4.36-.75-.33-1.43-.31-2.13-.04-.7.29-1.41.88-2.03 1.65-1.26 1.54-2.17 3.63-2.91 5.73v.01l-.02.02a2.001 2.001 0 0 1-2.59 1.14 2.006 2.006 0 0 1-1.27-1.85c-.02-3.68-.46-7.38-1.74-10.65-.63-1.62-1.5-3.12-2.58-4.24-.54-.55-1.14-1.02-1.76-1.29-.62-.31-1.25-.46-1.89-.42-.63.03-1.28.17-1.9.53-.32.12-.61.4-.92.58-.28.27-.59.48-.86.79-1.11 1.16-2.01 2.66-2.72 4.27-.73 1.61-1.25 3.36-1.65 5.15-.43 1.78-.67 3.63-.88 5.48v.03a1.994 1.994 0 0 1-2.22 1.75 2.006 2.006 0 0 1-1.77-1.98c-.02-7.05-.35-14.12-1.45-21-.56-3.43-1.33-6.83-2.51-9.96-.59-1.55-1.32-3.04-2.21-4.23-.44-.59-.93-1.09-1.41-1.4-.48-.31-.89-.43-1.28-.41-.79.02-1.96.89-2.86 2.11-.93 1.21-1.7 2.69-2.37 4.22-1.33 3.09-2.25 6.45-2.99 9.84-1.45 6.82-2.11 13.85-2.42 20.9v.05a2.007 2.007 0 0 1-2.11 1.88 2.004 2.004 0 0 1-1.88-2c.01-3.53-.44-7.13-2-9.97-.78-1.39-1.82-2.59-3.11-3.17-1.27-.65-2.74-.7-4.17-.27-1.43.46-2.77 1.41-3.87 2.63-1.11 1.22-1.99 2.7-2.64 4.3-.65 1.6-1.08 3.31-1.35 5.06-.27 1.75-.29 3.55-.25 5.35v.04c.02.83-.64 1.51-1.47 1.53a1.5 1.5 0 0 1-1.53-1.41c-.23-3.91.12-7.95 1.57-11.77.73-1.9 1.74-3.73 3.13-5.33 1.39-1.59 3.16-2.97 5.3-3.72 1.08-.34 2.23-.56 3.41-.51 1.16.07 2.36.3 3.41.82 2.17.96 3.73 2.75 4.82 4.58 2.16 3.77 2.66 7.9 2.75 11.84l-4-.08v-.01c.32-7.2.99-14.42 2.51-21.57.78-3.57 1.73-7.13 3.23-10.6.76-1.73 1.63-3.45 2.87-5.07.63-.81 1.34-1.6 2.27-2.29.91-.68 2.11-1.27 3.5-1.38 1.39-.1 2.76.39 3.76 1.06 1.02.68 1.76 1.5 2.39 2.33 1.25 1.68 2.07 3.44 2.75 5.21 1.34 3.55 2.13 7.15 2.72 10.75 1.16 7.21 1.49 14.44 1.51 21.65l-3.99-.2c.23-1.99.49-3.99.97-5.97.45-1.98 1.03-3.96 1.89-5.88.85-1.91 1.94-3.8 3.51-5.44.37-.42.85-.78 1.28-1.17.5-.33.95-.71 1.52-.97 1.06-.59 2.35-.94 3.64-.98 1.3-.06 2.61.26 3.72.8 1.14.52 2.09 1.28 2.9 2.1 1.61 1.67 2.68 3.61 3.45 5.58 1.54 3.97 1.98 8.08 2.01 12.12l-3.88-.68v-.01c.47-1.17.95-2.34 1.58-3.48.6-1.15 1.32-2.27 2.24-3.32.92-1.04 2.07-2.04 3.61-2.61 1.53-.57 3.43-.46 4.82.25 1.43.68 2.5 1.69 3.34 2.78.85 1.09 1.49 2.26 2 3.48 1 2.43 1.48 5.01 1.46 7.6-.01.83-.69 1.49-1.52 1.48-.81-.01-1.46-.66-1.48-1.46l-.03-.02z",
              __self: this,
            }),
          );
        };

        HappyIcon.defaultProps = {
          id: "Vectors",
          xmlns: "http://www.w3.org/2000/svg",
          width: "1000",
          height: "500",
          viewBox: "0 0 1000 500",
        };

        var Title = glamorous__WEBPACK_IMPORTED_MODULE_7___default.a.h2(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
          )(
            {
              color:
                _design_system__WEBPACK_IMPORTED_MODULE_15__["colors"].black,
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_17__["Step"],
              )(5.35),
            },
            _design_system__WEBPACK_IMPORTED_MODULE_15__["breakpoints"].ns,
            {
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_17__["Step"],
              )(6),
            },
          ),
        );
        var IconContainer = glamorous__WEBPACK_IMPORTED_MODULE_7___default.a.div(
          {
            maxWidth: 450,
            margin: "".concat(
              Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_17__["Step"])(5),
              " auto",
            ),
          },
        );
        var Subtitle = glamorous__WEBPACK_IMPORTED_MODULE_7___default.a.h1(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
          )(
            {
              paddingBottom: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_17__["Step"],
              )(5),
              color:
                _design_system__WEBPACK_IMPORTED_MODULE_15__["colors"].grey,
              fontWeight: 500,
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_17__["Step"],
              )(4.5),
            },
            _design_system__WEBPACK_IMPORTED_MODULE_15__["breakpoints"].ns,
            {
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_17__["Step"],
              )(5),
            },
          ),
        );

        var App =
          /*#__PURE__*/
          (function(_React$Component) {
            Object(
              _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ],
            )(App, _React$Component);

            function App() {
              Object(
                _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ],
              )(this, App);

              return Object(
                _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ],
              )(
                this,
                Object(
                  _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[
                    "default"
                  ],
                )(App).apply(this, arguments),
              );
            }

            Object(
              _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ],
            )(App, [
              {
                key: "componentDidMount",
                value: function componentDidMount() {
                  window.scrollTo(0, 0);
                },
              },
              {
                key: "render",
                value: function render() {
                  // Reset uuid
                  Object(
                    react_accessible_accordion__WEBPACK_IMPORTED_MODULE_20__[
                      "resetNextUuid"
                    ],
                  )();
                  return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                    _components_Analytics__WEBPACK_IMPORTED_MODULE_18__[
                      "default"
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                      next_head__WEBPACK_IMPORTED_MODULE_8___default.a,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                        "title",
                        {
                          key: "head-title",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52,
                          },
                          __self: this,
                        },
                        _content_terms_seo__WEBPACK_IMPORTED_MODULE_13__[
                          "default"
                        ].title,
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                      _components_HeadMeta__WEBPACK_IMPORTED_MODULE_10__[
                        "default"
                      ],
                      {
                        path: "/donors",
                        title:
                          _content_terms_seo__WEBPACK_IMPORTED_MODULE_13__[
                            "default"
                          ].title,
                        description:
                          _content_terms_seo__WEBPACK_IMPORTED_MODULE_13__[
                            "default"
                          ].description,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                      _components_Wrapper__WEBPACK_IMPORTED_MODULE_11__[
                        "default"
                      ],
                      {
                        className: "center tc ph3 ph0-l",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 59,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                        Title,
                        {
                          className: "ph0 ph6-l",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60,
                          },
                          __self: this,
                        },
                        _content_terms_hero__WEBPACK_IMPORTED_MODULE_14__[
                          "default"
                        ].title,
                      ),
                      react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                        Subtitle,
                        {
                          className: "measure-narrow center lh-copy",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61,
                          },
                          __self: this,
                        },
                        _content_terms_hero__WEBPACK_IMPORTED_MODULE_14__[
                          "default"
                        ].subtitle,
                      ),
                      react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                        IconContainer,
                        {
                          className: "responsive",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                          HappyIcon,
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
                    react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                      _components_Wrapper__WEBPACK_IMPORTED_MODULE_11__[
                        "default"
                      ],
                      {
                        className: "ph3 ph0-l",
                        background:
                          _design_system__WEBPACK_IMPORTED_MODULE_15__["colors"]
                            .white,
                        padding: "4rem 0",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 68,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                        _content_terms_legal_mdx__WEBPACK_IMPORTED_MODULE_19__[
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
                    react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                      _components_Wrapper__WEBPACK_IMPORTED_MODULE_11__[
                        "default"
                      ],
                      {
                        className: "ph3 ph0-l",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 75,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
                        _components_DonateHero__WEBPACK_IMPORTED_MODULE_12__[
                          "default"
                        ],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76,
                          },
                          __self: this,
                        },
                      ),
                    ),
                  );
                },
              },
            ]);

            return App;
          })(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

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

    /***/ 5:
      /*!*******************************!*\
  !*** multi ./pages/terms.tsx ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/jklb/dev/givecrypto/website/pages/terms.tsx */ "./pages/terms.tsx",
        );

        /***/
      },

    /***/ "@mdx-js/react":
      /*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("@mdx-js/react");

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

    /***/ "core-js/library/fn/json/stringify":
      /*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/json/stringify");

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

    /***/ "next-server/dist/lib/utils":
      /*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next-server/dist/lib/utils");

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

    /***/ "next/router":
      /*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/router");

        /***/
      },

    /***/ "prop-types":
      /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("prop-types");

        /***/
      },

    /***/ "prop-types-exact":
      /*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("prop-types-exact");

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

    /***/ "react-accessible-accordion":
      /*!*********************************************!*\
  !*** external "react-accessible-accordion" ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-accessible-accordion");

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

    /***/ url:
      /*!**********************!*\
  !*** external "url" ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("url");

        /***/
      },

    /******/
  },
);
//# sourceMappingURL=terms.js.map
