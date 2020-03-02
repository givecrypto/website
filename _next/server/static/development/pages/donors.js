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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 6));
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

    /***/ "./components/PersonCard.tsx":
      /*!***********************************!*\
  !*** ./components/PersonCard.tsx ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! glamorous */ "glamorous",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          glamorous__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../utils/Scale */ "./utils/Scale.tsx",
        );
        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/PersonCard.tsx";

        var ImageCard = glamorous__WEBPACK_IMPORTED_MODULE_0___default.a.div(
          {
            position: "relative",
            zIndex: 1,
            display: "block",
            background:
              _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
            borderRadius: Object(
              _utils_Scale__WEBPACK_IMPORTED_MODULE_3__["Step"],
            )(2),
            width: "100%",
            boxShadow:
              _design_system__WEBPACK_IMPORTED_MODULE_2__["shadows"]["default"],
            "& img": {
              borderRadius: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_3__["Step"],
              )(2),
              position: "relative",
              zIndex: 1,
              display: "block",
              width: "100%",
              margin: 0,
              padding: 0,
            },
          },
          function(_ref) {
            var pattern = _ref.pattern;

            if (pattern === "right") {
              return {
                "&::after": {
                  top: 0,
                  zIndex: 0,
                  content: "''",
                  display: "block",
                  background: "url(/static/images/pattern@2x.png)",
                  backgroundSize: "100%",
                  position: "absolute",
                  left: "auto",
                  right: -272,
                  width: 423,
                  height: 263,
                  transform: "translateY(40px)",
                },
              };
            }

            if (pattern === "left") {
              return {
                "&::before": {
                  top: 0,
                  zIndex: 0,
                  content: "''",
                  display: "block",
                  background: "url(/static/images/pattern@2x.png)",
                  backgroundSize: "100%",
                  position: "absolute",
                  left: -272,
                  width: 423,
                  height: 263,
                  transform: "translateY(40px)",
                },
              };
            }
          },
        );
        var Meta = glamorous__WEBPACK_IMPORTED_MODULE_0___default.a.div({
          padding: "".concat(
            Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_3__["Step"])(4),
            " 0",
          ),
        });
        var Name = glamorous__WEBPACK_IMPORTED_MODULE_0___default.a.h3({
          padding: "2rem 0 ".concat(
            Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_3__["Step"])(3),
            " 0",
          ),
          margin: 0,
          color: _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].black,
        });
        var Role = glamorous__WEBPACK_IMPORTED_MODULE_0___default.a.h3({
          padding: "0 0 2rem 0",
          margin: 0,
          paddingBottom: Object(
            _utils_Scale__WEBPACK_IMPORTED_MODULE_3__["Step"],
          )(3),
          fontWeight: 300,
          color: _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].black,
        });

        var PersonCard = function PersonCard(_ref2) {
          var filename = _ref2.filename,
            name = _ref2.name,
            role = _ref2.role,
            bio = _ref2.bio,
            pattern = _ref2.pattern;
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
            null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              ImageCard,
              {
                pattern: pattern,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                "picture",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("source", {
                  type: "image/webp",
                  srcSet: "/static/images/"
                    .concat(filename, ".webp, /static/images/")
                    .concat(filename, "@2x.webp 2x"),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                  },
                  __self: this,
                }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("source", {
                  srcSet: "/static/images/"
                    .concat(filename, ".jpg, /static/images/")
                    .concat(filename, "@2x.jpg 2x"),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                  },
                  __self: this,
                }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
                  src: "/static/images/".concat(filename, ".jpg"),
                  srcSet: "/static/images/"
                    .concat(filename, ".jpg, /static/images/")
                    .concat(filename, "@2x.jpg 2x"),
                  alt: "".concat(name, "'s Headshot"),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                  },
                  __self: this,
                }),
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              Meta,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                Name,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                  },
                  __self: this,
                },
                name,
              ),
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                Role,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                  },
                  __self: this,
                },
                role,
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              "p",
              {
                className: "lh-copy",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                },
                __self: this,
              },
              bio,
            ),
          );
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = PersonCard;

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

    /***/ "./content/donors/donors-list.ts":
      /*!***************************************!*\
  !*** ./content/donors/donors-list.ts ***!
  \***************************************/
      /*! exports provided: donors, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "donors",
          function() {
            return donors;
          },
        );
        /**
         * @description Person Card
         * @param {name} string
         * @param {role} string
         * @param {filename} string // brian-armstrong // must include .png and .webm files aswell as @2x versions for each in /static/images/
         * @example: {
         *  name: 'Brian Armstrong',
         *  role: 'CEO, Coinbase',
         *  filename: 'brian-armstrong'
         * }
         */

        /**
         * @description Person
         * @param {name[]} string
         * @example: 'Brian Armstrong',
         */
        var donors = {
          /**
           * @param {person[]} Person
           */
          "$1M+": [
            {
              name: "Brian Armstrong",
              role: "CEO, Coinbase",
              filename: "brian-armstrong",
            },
            {
              name: "Chris Larsen",
              role: "Executive Chairman, Ripple",
              filename: "chris-larsen",
            },
            {
              name: "Zooko Wilcox",
              role: "CEO, the Zcash Company",
              filename: "zooko",
            },
          ],
          "$250k+": [
            {
              name: "Ben Delo",
              role: "Co-founder, BitMEX",
              filename: "ben-delo",
            },
          ],
          "$100k+": [
            {
              name: "Brad Garlinghouse",
              role: "CEO, Ripple",
              filename: "brad-garlinghouse",
            },
            {
              name: "Brock Pierce",
              role: "Entrepreneur, Bitcoin Foundation",
              filename: "brock-pierce",
            },
            {
              name: "Joanne and Fred Wilson",
              filename: "fred-joanne",
            },
            {
              name: "Matthew Roszak",
              role: "Co-Founder, Bloq",
              filename: "matthew-roszak",
            },
            {
              name: "Matt Mochary",
              role: "CEO, The Mochary Group",
              filename: "matt-mochary",
            },
            {
              name: "Bitmain",
              role: "",
              filename: "bitmain",
            },
            {
              name: "Roger Ver",
              role: "CEO, Bitcoin.com",
              filename: "roger-ver",
            },
            {
              name: "Anonymous",
              filename: "placeholder",
            },
            {
              name: "Ribbit Capital",
              filename: "ribbit-capital",
            },
            {
              name: "Ron Conway",
              role: "Founder, SV Angel",
              filename: "ron-conway",
            },
          ],
          "$25k+": [
            {
              name: "Arthur Hayes",
              role: "Co-founder & CEO, BitMEX",
              filename: "arthur-hayes",
            },
            {
              name: "Boris Wertz",
              role: "General Partner, Version One Ventures",
              filename: "boris-wertz",
            },
            {
              name: "Fred Ehrsam",
              filename: "fred-ehrsam",
            },
            {
              name: "Jessica Livingston",
              role: "Founder, Partner - YCombinator",
              filename: "jessica-livingston",
            },
            {
              name: "Linda Xie",
              role: "Co-founder, Scalar Capital",
              filename: "linda-xie",
            },
            {
              name: "Meltem Demirors",
              role: "Athena Capital",
              filename: "meltem-demirors",
            },
            {
              name: "Steve Jang",
              role: "Founder, Kindred Ventures",
              filename: "steve-jang",
            },
            {
              name: "Topher Conway",
              role: "Partner, SV Angel",
              filename: "topher-conway",
            },
            {
              name: "Anonymous",
              filename: "placeholder",
            },
          ],
          "$10k+": [
            {
              name: "Ted Rogers",
              role: "President, Xapo",
              filename: "ted-rogers",
            },
            {
              name: "Kathryn Haun",
              filename: "kathryn-haun",
            },
          ],
        };
        /* harmony default export */ __webpack_exports__["default"] = donors;

        /***/
      },

    /***/ "./content/donors/seo.ts":
      /*!*******************************!*\
  !*** ./content/donors/seo.ts ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          title:
            "Donors with GiveCrypto | Meet our generous donors, empowering, educating and elevating communities into the open financial system.",
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

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries",
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

    /***/ "./pages/donors.tsx":
      /*!**************************!*\
  !*** ./pages/donors.tsx ***!
  \**************************/
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
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! glamorous */ "glamorous",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          glamorous__WEBPACK_IMPORTED_MODULE_9__,
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! next/head */ "next/head",
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_10__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_11__,
        );
        /* harmony import */ var _components_DonateHero__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../components/DonateHero */ "./components/DonateHero.tsx",
        );
        /* harmony import */ var _components_HeadMeta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../components/HeadMeta */ "./components/HeadMeta.tsx",
        );
        /* harmony import */ var _components_PersonCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../components/PersonCard */ "./components/PersonCard.tsx",
        );
        /* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../components/Wrapper */ "./components/Wrapper.tsx",
        );
        /* harmony import */ var _content_donors_donors_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../content/donors/donors-list */ "./content/donors/donors-list.ts",
        );
        /* harmony import */ var _content_donors_seo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../content/donors/seo */ "./content/donors/seo.ts",
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _utils_rehydrate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../utils/rehydrate */ "./utils/rehydrate.tsx",
        );
        /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../utils/Scale */ "./utils/Scale.tsx",
        );
        /* harmony import */ var _components_Analytics__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../components/Analytics */ "./components/Analytics.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/pages/donors.tsx";

        var DonorsIcon = function DonorsIcon(props) {
          return react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
            "svg",
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )({}, props, {
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
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
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st4",
              d:
                "M561.79 297.86c.11 2.29.42 4.82.86 7.22.24 1.21.48 2.42.75 3.62.32 1.19.59 2.4.95 3.57.38 1.17.72 2.36 1.14 3.52.45 1.15.87 2.31 1.3 3.46l1.52 3.37c.49 1.14 1.15 2.18 1.71 3.28l.89 1.62 1.01 1.55c.7 1.02 1.28 2.11 2.04 3.09l2.24 2.95.56.74.62.69 1.24 1.38 1.23 1.4.62.7.68.64 2.71 2.57c.88.9 1.88 1.64 2.85 2.43.97.79 1.95 1.58 2.91 2.39l.07.06c.42.36.47.99.12 1.41a1 1 0 0 1-1.28.21c-1.1-.67-2.2-1.37-3.29-2.07-1.08-.72-2.24-1.35-3.21-2.21l-3.05-2.46-.76-.62-.71-.68-1.4-1.37c-3.79-3.62-6.97-7.88-9.62-12.41-.63-1.15-1.35-2.26-1.9-3.46l-1.69-3.56c-.48-1.22-.98-2.44-1.44-3.67-.44-1.24-.8-2.5-1.21-3.76-.38-1.26-.66-2.54-1-3.82-.28-1.29-.55-2.57-.75-3.87-.19-1.31-.38-2.61-.49-3.93a35.42 35.42 0 0 1-.18-4.05c.01-1.1.91-1.99 2.01-1.99 1.06.01 1.93.84 1.98 1.89l-.03.17zM446.79 303.52c.72.74 1.56 1.58 2.41 2.33.84.78 1.75 1.5 2.62 2.26 1.8 1.45 3.67 2.82 5.6 4.1 3.85 2.58 7.95 4.81 12.25 6.59 4.3 1.76 8.76 3.23 13.36 4.12 2.28.57 4.62.77 6.94 1.12 1.16.21 2.34.2 3.52.29l3.53.23.08.01a.996.996 0 0 1-.04 1.99l-3.64.08c-1.21 0-2.43.1-3.65-.02-2.43-.16-4.87-.26-7.28-.69-4.86-.6-9.6-1.96-14.21-3.62-4.63-1.64-9.02-3.94-13.17-6.59-2.08-1.32-4.04-2.82-5.97-4.37-.94-.81-1.88-1.61-2.77-2.48-.92-.86-1.75-1.73-2.64-2.76-.72-.84-.62-2.1.22-2.82.8-.69 2-.63 2.73.12l.11.11z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st1",
              d:
                "M553.34 270.52c.65.42 1.33.66 2.05.66 3.65 0 6.6-5.91 6.6-13.2 0-7.29-2.95-13.2-6.6-13.2-.22 0-.45.02-.66.07.99 1.88.88 5.25 1.22 6.87.65 3.14.93 5.68.13 8.82-.87 3.32-1.79 6.66-2.74 9.98zM444.5 240.64c-.42-.17-.86-.26-1.31-.26-3.65 0-6.6 5.91-6.6 13.2 0 7.29 2.95 13.2 6.6 13.2.17 0 .33-.03.49-.05-1.01-3.81-1.39-7.77-1.89-12.01-.39-3.32-1.48-6.92-.08-10.12.63-1.43 1.72-2.69 2.79-3.96z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st4",
              d:
                "M434.91 399.71c.24 2.81.2 5.41.12 8.09-.1 2.66-.31 5.3-.55 7.94-.55 5.27-1.39 10.48-2.4 15.65l-.82 3.87-.91 3.84c-.58 2.57-1.29 5.1-1.99 7.64-.71 2.53-1.51 5.04-2.27 7.55-.84 2.49-1.69 4.97-2.57 7.44-.19.52-.76.79-1.28.61-.49-.17-.76-.69-.64-1.18l.01-.02 1.89-7.58c.57-2.54 1.22-5.05 1.76-7.6 1.08-5.08 2.16-10.15 2.96-15.27.84-5.11 1.56-10.23 2.03-15.36.24-2.56.46-5.13.56-7.69.15-2.54.19-5.17.12-7.58v-.1a2 2 0 0 1 1.94-2.06c1.05-.05 1.95.76 2.04 1.81zM456.46 399.3c.46 1.47.75 2.79 1.06 4.19.28 1.38.57 2.76.78 4.14.46 2.77.79 5.54 1.08 8.32.49 5.56.74 11.12.69 16.68l-.05 4.17-.15 4.16c-.06 2.77-.32 5.54-.5 8.3-.22 2.76-.51 5.52-.79 8.27l-1.1 8.23a1 1 0 0 1-1.12.86 1.01 1.01 0 0 1-.87-1.04v-.03l.47-8.23c.08-2.74.25-5.48.31-8.22.08-5.48.2-10.95-.02-16.41-.22-5.46-.46-10.91-1.07-16.31-.29-2.7-.6-5.4-1.03-8.07-.4-2.65-.9-5.39-1.51-7.84l-.02-.08c-.27-1.07.39-2.16 1.46-2.42 1.02-.27 2.07.33 2.38 1.33zM546.76 403.75c-.5 2.08-.96 4.38-1.32 6.61-.4 2.24-.72 4.51-1.01 6.78-.6 4.54-.99 9.12-1.28 13.7-.31 4.59-.41 9.19-.47 13.81-.06 2.31.03 4.61.02 6.93l.14 6.94v.02a.998.998 0 1 1-1.99.15c-.3-2.31-.58-4.64-.83-6.96-.18-2.33-.41-4.66-.53-7-.14-2.34-.25-4.68-.26-7.02-.06-2.34-.03-4.69 0-7.03.13-4.69.44-9.38.98-14.06.61-4.7 1.32-9.29 2.71-14a1.994 1.994 0 0 1 2.48-1.35c1.02.3 1.62 1.35 1.38 2.38l-.02.1zM565.09 403.32c-.09 4.74.2 9.72.76 14.56.5 4.88 1.35 9.72 2.43 14.51l.4 1.8.47 1.78c.33 1.18.61 2.38.97 3.56.76 2.33 1.42 4.71 2.31 7.01 1.61 4.66 3.71 9.12 5.87 13.58l.02.04c.24.5.03 1.09-.46 1.34a1 1 0 0 1-1.29-.38c-2.61-4.31-5.07-8.75-7-13.44-1.06-2.31-1.89-4.7-2.76-7.08-.42-1.2-.77-2.41-1.15-3.62l-.57-1.82-.49-1.84c-1.38-4.89-2.29-9.9-2.93-14.93-.59-5.07-.91-10.09-.56-15.32a1.99 1.99 0 0 1 2.13-1.86c1.07.07 1.88.97 1.87 2.03l-.02.08zM563.99 257.98c0 2.86-.35 5.74-1.37 8.56-.53 1.4-1.22 2.78-2.29 4.07-.52.64-1.2 1.24-2.01 1.74-.83.49-1.86.81-2.93.83a5.892 5.892 0 0 1-2.89-.89 7.916 7.916 0 0 1-1.94-1.77c-1.02-1.3-1.63-2.7-2.09-4.09-.9-2.8-1.19-5.63-1.18-8.45.03-2.81.38-5.63 1.33-8.39.48-1.37 1.12-2.74 2.12-4 .49-.63 1.13-1.22 1.88-1.72.78-.49 1.75-.8 2.77-.84 1.02.01 2.01.31 2.81.77.78.48 1.45 1.06 1.97 1.68 1.06 1.25 1.76 2.61 2.3 3.99 1.06 2.78 1.46 5.65 1.52 8.51zm-4 0c.02-2.46-.28-4.95-1.08-7.18-.38-1.11-.9-2.16-1.54-2.97-.31-.42-.67-.72-1.01-.96-.34-.22-.66-.3-.98-.34-.32.01-.65.07-1.02.27-.36.22-.75.51-1.09.92-.7.79-1.28 1.84-1.72 2.96-.44 1.12-.77 2.32-.98 3.55-.19 1.23-.28 2.49-.29 3.75.04 1.26.15 2.51.37 3.73.24 1.22.6 2.4 1.06 3.51.46 1.1 1.06 2.11 1.75 2.86.33.4.7.66 1.03.87.34.18.63.22.9.23.27-.04.54-.1.86-.29.31-.22.66-.49.96-.89.63-.77 1.15-1.8 1.55-2.89.84-2.2 1.2-4.67 1.23-7.13zM438.59 253.58c.03 2.46.39 4.94 1.23 7.13.39 1.09.92 2.12 1.55 2.89.31.4.65.68.96.89.32.19.6.25.86.29.27-.01.56-.05.9-.23.33-.2.7-.47 1.03-.87.69-.75 1.29-1.77 1.75-2.86.46-1.1.82-2.29 1.06-3.51.21-1.23.33-2.48.37-3.73-.01-1.26-.1-2.51-.29-3.75-.21-1.23-.54-2.43-.98-3.55-.44-1.12-1.02-2.17-1.72-2.96-.34-.41-.73-.7-1.09-.92-.37-.2-.7-.26-1.02-.27-.32.04-.63.13-.98.34-.34.24-.69.54-1.01.96-.64.81-1.16 1.86-1.54 2.97-.8 2.23-1.1 4.72-1.08 7.18zm-4 0c.06-2.86.46-5.73 1.52-8.5.54-1.38 1.24-2.74 2.3-3.99.52-.63 1.19-1.2 1.97-1.68.8-.47 1.79-.76 2.81-.77 1.02.04 1.99.36 2.77.84.76.5 1.4 1.08 1.88 1.72 1 1.26 1.64 2.63 2.12 4 .95 2.75 1.3 5.58 1.33 8.39.02 2.81-.28 5.65-1.18 8.45-.47 1.39-1.08 2.79-2.09 4.09-.5.65-1.15 1.26-1.94 1.77-.81.51-1.82.84-2.89.89-1.07-.02-2.1-.34-2.93-.83-.8-.5-1.49-1.1-2.01-1.74-1.07-1.28-1.76-2.67-2.29-4.07-1.02-2.83-1.37-5.71-1.37-8.57z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st4",
              d:
                "M563.99 257.98c0 2.86-.35 5.74-1.37 8.56-.53 1.4-1.22 2.78-2.29 4.07-.52.64-1.2 1.24-2.01 1.74-.83.49-1.86.81-2.93.83a5.892 5.892 0 0 1-2.89-.89 7.916 7.916 0 0 1-1.94-1.77c-1.02-1.3-1.63-2.7-2.09-4.09-.9-2.8-1.19-5.63-1.18-8.45.03-2.81.38-5.63 1.33-8.39.48-1.37 1.12-2.74 2.12-4 .49-.63 1.13-1.22 1.88-1.72.78-.49 1.75-.8 2.77-.84 1.02.01 2.01.31 2.81.77.78.48 1.45 1.06 1.97 1.68 1.06 1.25 1.76 2.61 2.3 3.99 1.06 2.78 1.46 5.65 1.52 8.51zm-4 0c.02-2.46-.28-4.95-1.08-7.18-.38-1.11-.9-2.16-1.54-2.97-.31-.42-.67-.72-1.01-.96-.34-.22-.66-.3-.98-.34-.32.01-.65.07-1.02.27-.36.22-.75.51-1.09.92-.7.79-1.28 1.84-1.72 2.96-.44 1.12-.77 2.32-.98 3.55-.19 1.23-.28 2.49-.29 3.75.04 1.26.15 2.51.37 3.73.24 1.22.6 2.4 1.06 3.51.46 1.1 1.06 2.11 1.75 2.86.33.4.7.66 1.03.87.34.18.63.22.9.23.27-.04.54-.1.86-.29.31-.22.66-.49.96-.89.63-.77 1.15-1.8 1.55-2.89.84-2.2 1.2-4.67 1.23-7.13zM438.59 253.58c.03 2.46.39 4.94 1.23 7.13.39 1.09.92 2.12 1.55 2.89.31.4.65.68.96.89.32.19.6.25.86.29.27-.01.56-.05.9-.23.33-.2.7-.47 1.03-.87.69-.75 1.29-1.77 1.75-2.86.46-1.1.82-2.29 1.06-3.51.21-1.23.33-2.48.37-3.73-.01-1.26-.1-2.51-.29-3.75-.21-1.23-.54-2.43-.98-3.55-.44-1.12-1.02-2.17-1.72-2.96-.34-.41-.73-.7-1.09-.92-.37-.2-.7-.26-1.02-.27-.32.04-.63.13-.98.34-.34.24-.69.54-1.01.96-.64.81-1.16 1.86-1.54 2.97-.8 2.23-1.1 4.72-1.08 7.18zm-4 0c.06-2.86.46-5.73 1.52-8.5.54-1.38 1.24-2.74 2.3-3.99.52-.63 1.19-1.2 1.97-1.68.8-.47 1.79-.76 2.81-.77 1.02.04 1.99.36 2.77.84.76.5 1.4 1.08 1.88 1.72 1 1.26 1.64 2.63 2.12 4 .95 2.75 1.3 5.58 1.33 8.39.02 2.81-.28 5.65-1.18 8.45-.47 1.39-1.08 2.79-2.09 4.09-.5.65-1.15 1.26-1.94 1.77-.81.51-1.82.84-2.89.89-1.07-.02-2.1-.34-2.93-.83-.8-.5-1.49-1.1-2.01-1.74-1.07-1.28-1.76-2.67-2.29-4.07-1.02-2.83-1.37-5.71-1.37-8.57z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st9",
              d:
                "M500.77 212.88s-3.85-10.45-9.35-19.25 3.3-12.1 8.8-3.3c5.5-6.6 13.2-7.7 8.8 3.3-4.4 11-8.25 19.25-8.25 19.25z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st9",
              d:
                "M500.77 214.88h-.08c-.81-.03-1.51-.55-1.79-1.31-.04-.1-3.85-10.37-9.17-18.88-1.39-2.22-2.08-4.3-2.04-6.17.03-1.97.91-3.63 2.4-4.56 1.67-1.04 3.89-1.07 6.09-.08 1.53.69 2.97 1.82 4.24 3.33 3.09-2.94 7.02-4.92 9.81-3.25 1.78 1.06 3.33 3.73.66 10.42-4.37 10.93-8.26 19.27-8.29 19.35a2.06 2.06 0 0 1-1.83 1.15zm-7.75-27.73c-.36 0-.63.08-.82.19-.33.21-.51.63-.52 1.24-.02 1.06.49 2.47 1.44 3.98 3.37 5.39 6.1 11.3 7.76 15.22 1.54-3.46 3.83-8.77 6.28-14.9 1.52-3.81 1.17-5.32 1-5.51-.46-.24-3.32.54-6.4 4.23-.41.49-1.04.75-1.67.72a1.98 1.98 0 0 1-1.56-.94c-1.16-1.85-2.58-3.23-4-3.87-.6-.26-1.11-.36-1.51-.36z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st6",
              d:
                "M463.51 399.88h-36.48s5.76-124.15 17.08-124.15 19.4 124.15 19.4 124.15z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st6",
              d:
                "M463.51 401.88h-36.48c-.55 0-1.07-.22-1.45-.62-.38-.4-.58-.93-.55-1.47.01-.31 1.48-31.44 4.3-62.16 5.17-56.15 10.16-63.89 14.78-63.89 4.61 0 9.72 7.74 15.93 63.85 3.4 30.73 5.44 61.85 5.46 62.16.04.55-.16 1.09-.54 1.5-.37.4-.9.63-1.45.63zm-34.38-4h32.24c-.51-7.36-2.33-32.64-5.1-58.04-5.95-54.64-10.92-61.26-12.15-62.05-1.21.81-6.05 7.52-10.97 62.1-2.3 25.41-3.65 50.69-4.02 57.99z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st2",
              d:
                "M574.61 403.18h-36.48s5.76-124.15 17.08-124.15c11.33 0 19.4 124.15 19.4 124.15z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st2",
              d:
                "M574.61 405.18h-36.48c-.55 0-1.07-.22-1.45-.62-.38-.4-.58-.93-.55-1.47.01-.31 1.48-31.44 4.3-62.16 5.17-56.15 10.16-63.89 14.78-63.89 4.61 0 9.72 7.74 15.93 63.85 3.4 30.73 5.44 61.85 5.46 62.16.04.55-.16 1.09-.54 1.5-.37.4-.9.63-1.45.63zm-34.38-4h32.24c-.51-7.36-2.33-32.64-5.1-58.04-5.95-54.64-10.92-61.26-12.15-62.05-1.21.81-6.05 7.52-10.97 62.1-2.3 25.41-3.65 50.69-4.02 57.99z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st3",
              d:
                "M553.99 405.38h20.62c.61 0 1.19-.25 1.6-.7.42-.44.63-1.04.59-1.65-.02-.31-2.06-31.44-5.46-62.17-2-18.08-4.07-32.51-6.17-42.87-3.54-17.56-6.55-21.16-9.96-21.16-.6 0-1.16.13-1.69.39.46 1.25 1.6 2.56 2.28 4.64 1.85 5.65-1.73 11.51-1.76 17.18-.01 2.29.49 4.34 1.65 6.33 1.2 2.07 3.01 3.36 3.05 5.96.1 5.98-5.38 10.13-3.18 16.49.99 2.87 3.16 4.96 3.66 8.08.48 2.96-.29 5.81-1.16 8.61-1.51 4.91-3.82 10.13-2.18 15.33.84 2.68 2.64 4.36 2.66 7.38.02 3.02-1.17 5.95-1.97 8.82-.74 2.65-1.36 5.16-.9 7.91.63 3.76 2.03 6.56 1.4 10.57-.47 2.96-2.03 6.89-3.08 10.86z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st7",
              d:
                "M445.61 401.87c.3-3.92-.88-7.6-.1-11.54.75-3.8 2.64-7.27 3.55-11.03 2.05-8.45-3.78-15.27-2.35-23.59 1.01-5.89 4.71-14.59-.17-19.83-1.53-1.65-5-1.8-5.85-3.77-1.09-2.53 1.67-7.97 2.56-10.2 2.44-6.08 5.29-12.12 6.32-18.66.5-3.19.55-6.59-.69-9.63-1.22-2.98-4.98-5.13-5.79-8.02-.99-3.53 1.4-6.67 2.86-10 .63.33 1.36.38 2.06.25-1.28-1.76-2.56-2.32-3.91-2.32-4.75 0-7.28 8.48-9.61 21.2-1.9 10.36-3.7 24.79-5.37 42.87-2.83 30.73-4.29 61.86-4.3 62.17-.03.6.19 1.19.61 1.62.41.44.99.68 1.59.68h18.55c.02-.06.03-.13.04-.2z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st4",
              d:
                "M558.16 299.12c-.37.74-.7 1.32-1.08 1.94-.37.61-.76 1.2-1.16 1.77-.39.59-.8 1.16-1.24 1.7-.43.55-.84 1.12-1.3 1.65-.94 1.03-1.83 2.12-2.84 3.07l-1.49 1.47c-.5.48-1.05.92-1.57 1.38-4.23 3.63-9.01 6.55-14.03 8.88l-3.86 1.5c-1.27.54-2.61.9-3.93 1.28-1.33.36-2.63.81-3.98 1.09l-4.05.76c-.68.11-1.34.27-2.02.35l-2.04.2-4.08.38c-1.36.1-2.73.03-4.08.05l-4.07-.03c-.55 0-.99-.45-.99-1 0-.51.39-.93.89-.99l.1-.01c2.65-.28 5.29-.41 7.91-.74l3.9-.63 1.95-.31c.65-.11 1.28-.31 1.91-.46l3.81-.94c1.27-.31 2.49-.8 3.73-1.19 1.24-.41 2.48-.8 3.66-1.36l3.57-1.56c4.66-2.28 9.02-5.12 12.92-8.49.48-.42.99-.82 1.46-1.27l1.38-1.35c.95-.87 1.76-1.87 2.63-2.82.43-.47.81-.99 1.23-1.48.42-.49.8-1 1.17-1.52.38-.51.75-1.03 1.08-1.56.35-.51.7-1.08.95-1.53l.07-.13c.55-.96 1.77-1.29 2.73-.74.9.53 1.23 1.7.76 2.64z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st8",
              d:
                "M247.33 119.91c-.05-2.41-.59-4.83-1.58-7-.49-1.08-1.1-2.1-1.83-2.96-.71-.87-1.57-1.56-2.42-1.93-.86-.38-1.67-.36-2.48-.06-.81.33-1.61 1.01-2.31 1.87-1.41 1.73-2.42 4.03-3.25 6.36l-.01.03a2.001 2.001 0 0 1-2.59 1.14 2.006 2.006 0 0 1-1.27-1.85c-.03-4.07-.51-8.16-1.92-11.79-.7-1.8-1.66-3.47-2.89-4.73-.29-.33-.64-.57-.96-.85-.35-.21-.67-.48-1.04-.61-.7-.35-1.44-.52-2.17-.48-.73.03-1.47.2-2.18.6-.37.14-.69.45-1.05.66-.32.3-.67.55-.97.89-1.24 1.3-2.24 2.97-3.03 4.76-.8 1.79-1.38 3.73-1.83 5.7-.48 1.97-.74 4.01-.98 6.05v.03a1.994 1.994 0 0 1-2.22 1.75 2.006 2.006 0 0 1-1.77-1.98c-.02-7.77-.38-15.55-1.6-23.14-.62-3.78-1.46-7.53-2.77-11-.66-1.72-1.46-3.37-2.46-4.7-.49-.66-1.05-1.23-1.6-1.59-.56-.36-1.05-.51-1.54-.48-.98.04-2.28 1.04-3.3 2.4-1.04 1.35-1.89 3-2.63 4.69-1.48 3.41-2.49 7.12-3.3 10.87-1.59 7.52-2.33 15.27-2.67 23.02v.05a2 2 0 0 1-2.11 1.88 2.004 2.004 0 0 1-1.88-2c.01-3.9-.49-7.9-2.24-11.06-.87-1.55-2.05-2.9-3.51-3.56-1.44-.73-3.11-.79-4.72-.3-1.61.52-3.1 1.59-4.33 2.94-1.23 1.36-2.21 3.01-2.93 4.78-.72 1.77-1.19 3.67-1.48 5.61-.29 1.94-.32 3.92-.27 5.91v.06a1.496 1.496 0 0 1-2.99.1c-.1-2.15-.11-4.32.17-6.48s.77-4.32 1.56-6.4c.8-2.07 1.9-4.08 3.42-5.82 1.51-1.73 3.44-3.23 5.76-4.03 1.17-.37 2.42-.6 3.69-.55 1.26.08 2.54.32 3.68.89 2.34 1.04 4.04 2.97 5.22 4.97 2.34 4.1 2.89 8.62 2.99 12.93l-4-.08v-.01c.35-7.92 1.09-15.85 2.75-23.69.85-3.92 1.9-7.82 3.54-11.62.83-1.89 1.78-3.77 3.13-5.54.68-.88 1.46-1.74 2.45-2.48.99-.73 2.27-1.36 3.74-1.48 1.48-.11 2.94.41 4.01 1.13 1.09.72 1.9 1.61 2.58 2.51 1.35 1.82 2.25 3.75 3 5.68 1.47 3.88 2.34 7.83 2.99 11.79 1.27 7.92 1.63 15.86 1.65 23.78l-3.99-.2c.26-2.18.54-4.37 1.06-6.54.49-2.17 1.13-4.33 2.07-6.43.93-2.09 2.11-4.14 3.82-5.93.41-.46.92-.85 1.39-1.26.54-.35 1.03-.77 1.65-1.04 1.15-.64 2.53-1.01 3.92-1.06.7-.05 1.39.07 2.08.18.66.19 1.33.37 1.92.68.63.27 1.15.65 1.7 1.01.49.41 1.01.8 1.43 1.26 1.74 1.8 2.91 3.92 3.75 6.07 1.68 4.33 2.17 8.84 2.2 13.26l-3.88-.68c.51-1.28 1.04-2.56 1.72-3.81.65-1.25 1.44-2.48 2.44-3.62.99-1.13 2.24-2.21 3.9-2.83 1.64-.62 3.67-.5 5.17.26 1.54.73 2.7 1.82 3.62 3 .92 1.18 1.62 2.46 2.18 3.78 1.1 2.64 1.63 5.46 1.6 8.3a1.51 1.51 0 0 1-1.51 1.49 1.51 1.51 0 0 1-1.49-1.47zM816.43 131.99c-.13-6.91.18-13.87 1.36-20.78.62-3.45 1.45-6.89 2.75-10.25.66-1.68 1.41-3.34 2.45-4.93 1.04-1.57 2.3-3.15 4.28-4.25.99-.53 2.21-.87 3.45-.81 1.24.06 2.41.5 3.34 1.1 1.86 1.23 3.04 2.86 3.99 4.48 1.87 3.28 2.87 6.74 3.66 10.19 1.51 6.92 1.93 13.9 1.97 20.84.01 1.11-.88 2.01-1.99 2.01s-2.01-.88-2.01-1.99v-.03c.03-4.5.51-9.1 2.25-13.52.88-2.19 2.1-4.36 3.97-6.17.97-.87 2.06-1.7 3.42-2.17 1.33-.49 2.84-.66 4.29-.39 1.43.29 2.71.94 3.79 1.74.49.43 1.04.84 1.45 1.33l.65.71.56.75c1.45 2.03 2.37 4.24 3.05 6.46.68 2.22 1.11 4.48 1.36 6.73.29 2.25.35 4.5.39 6.74h-4.07c.03-1.64.08-3.29.3-4.95.2-1.66.52-3.32 1.08-4.98.56-1.65 1.31-3.31 2.56-4.81.65-.73 1.4-1.45 2.38-1.96.95-.51 2.11-.86 3.28-.8 1.16.04 2.26.4 3.18.92.89.55 1.69 1.19 2.3 1.92 1.27 1.44 2.1 3.06 2.7 4.7 1.19 3.28 1.55 6.65 1.57 9.95l-4.01-.05c.11-2.8.63-5.72 2.24-8.34.81-1.29 1.89-2.5 3.33-3.38 1.42-.86 3.31-1.33 5.09-.9 1.8.36 3.23 1.51 4.2 2.74.99 1.25 1.6 2.62 2.04 3.98.44 1.36.69 2.74.81 4.1.15 1.36.15 2.71.1 4.05-.03.83-.72 1.48-1.55 1.45-.78-.03-1.4-.64-1.45-1.41v-.04c-.14-2.44-.47-4.88-1.26-7-.39-1.06-.91-2.03-1.56-2.76s-1.39-1.22-2.13-1.35c-.73-.17-1.52.03-2.27.49-.75.48-1.43 1.22-1.96 2.11-1.08 1.79-1.56 4.07-1.63 6.37a2.002 2.002 0 0 1-2.07 1.94 2.005 2.005 0 0 1-1.94-1.99c-.02-2.96-.37-5.92-1.34-8.55-.48-1.3-1.13-2.52-1.95-3.43-.39-.48-.85-.81-1.29-1.09-.45-.25-.88-.37-1.29-.39-.8-.03-1.68.43-2.45 1.35-.76.91-1.36 2.15-1.8 3.46-.45 1.32-.73 2.75-.9 4.21-.2 1.45-.24 2.95-.26 4.44a2.04 2.04 0 0 1-2.07 2 2.04 2.04 0 0 1-2-2c-.04-2.1-.1-4.2-.37-6.25-.23-2.06-.63-4.09-1.22-6.01s-1.38-3.76-2.47-5.26l-.41-.56-.45-.49c-.28-.36-.63-.58-.94-.87-.67-.47-1.37-.82-2.07-.97-1.39-.24-2.87.29-4.15 1.51-1.26 1.21-2.27 2.88-3 4.7-1.47 3.67-1.97 7.86-2.01 12.01h-4c0-6.74-.4-13.51-1.78-20-.72-3.21-1.66-6.41-3.19-9.1-.75-1.33-1.7-2.52-2.71-3.18-1.03-.64-1.9-.69-2.95-.16-1.05.55-2.06 1.68-2.89 2.95-.85 1.27-1.54 2.73-2.15 4.23-1.2 3.02-2.04 6.25-2.66 9.53-1.27 6.57-1.76 13.35-1.92 20.12v.01c-.02.83-.71 1.48-1.54 1.46-.8-.01-1.45-.66-1.46-1.46z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st11",
              d:
                "M96.3 452.15c303.13 28.61 613.34-19.99 807.4 0v34.31H96.3v-34.31z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st4",
              d:
                "M903.61 453.08c-67.06-5.47-134.44-4.31-201.69-2.3-67.27 2.19-134.52 5.78-201.83 8.48-33.65 1.39-67.32 2.48-100.99 3.22-33.68.73-67.37 1.13-101.06.9-33.69-.22-67.38-1-101.05-2.52-33.66-1.52-67.32-3.68-100.77-7.78a.924.924 0 0 1-.81-1.03c.06-.49.5-.84.98-.81 33.6 2.15 67.15 4.41 100.77 5.85 33.61 1.44 67.26 2.15 100.9 2.29 67.3.3 134.59-1.81 201.86-4.44 67.27-2.62 134.53-6.12 201.87-8.23 33.67-1.02 67.37-1.74 101.07-1.33 4.21.04 8.43.15 12.64.23 4.21.1 8.43.13 12.64.29l12.63.5c2.11.09 4.21.15 6.32.26l6.31.36 12.62.72 12.61 1.01 6.3.51 6.29.65 12.57 1.34c.51.05.88.51.82 1.02-.05.5-.5.87-1 .82v-.01zM670.58 298.13c.28.9.71 2 1.14 2.98.45 1.01.95 2 1.49 2.96a36.31 36.31 0 0 0 3.71 5.5c2.78 3.44 6.17 6.39 10.01 8.62 1.92 1.12 3.93 2.11 6.03 2.9 2.11.77 4.27 1.43 6.49 1.9 4.43.98 9.03 1.37 13.66 1.38a.997.997 0 1 1 .11 1.99c-4.73.54-9.57.52-14.36-.21-4.8-.68-9.52-2.22-13.88-4.52a38.566 38.566 0 0 1-11.38-9.39 39.848 39.848 0 0 1-4.12-6.16c-.58-1.09-1.1-2.22-1.58-3.37-.48-1.17-.88-2.27-1.22-3.64a2.002 2.002 0 1 1 3.85-1.08l.05.14zM235.05 319.77c-.04-.14.01-.03.03.01.01.04.07.12.12.18.09.13.19.28.33.43.22.3.54.6.83.9.63.59 1.33 1.15 2.09 1.67.71.56 1.58 1 2.35 1.51.84.45 1.68.9 2.54 1.33 3.46 1.69 7.18 3.02 10.93 4.21 3.76 1.2 7.6 2.24 11.48 3.17 3.87.98 7.79 1.77 11.7 2.7l.02.01a1.006 1.006 0 1 1-.32 1.98c-2.02-.17-4.03-.4-6.05-.6-2.02-.21-4.01-.58-6.02-.86-4.01-.64-7.99-1.53-11.96-2.55-3.93-1.17-7.88-2.37-11.66-4.21-.94-.48-1.87-.98-2.8-1.48l-1.37-.85c-.46-.27-.91-.57-1.34-.91a20.53 20.53 0 0 1-2.54-2.18c-.4-.43-.8-.84-1.16-1.36-.19-.23-.36-.51-.53-.81-.09-.15-.17-.28-.25-.47-.08-.19-.15-.3-.28-.68a2 2 0 0 1 1.36-2.48c1.07-.33 2.18.28 2.5 1.34z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st1",
              d:
                "M757.95 241.48c-.46 0-.91.09-1.34.27 1.5 3.16 2.53 6.03 2.37 9.96-.1 2.43-.45 4.82-.81 7.21-.39 2.58-.82 5.15-1.27 7.72-.06.32-.13.65-.2.98.4.15.82.24 1.24.24 2.66 0 4.94-3.15 5.99-7.68l.18-1.11c.14-.92.26-1.84.38-2.76.03-.54.06-1.09.06-1.66 0-7.26-2.96-13.17-6.6-13.17zM666.65 282.18c.68 0 1.34-.21 1.96-.59-.41-.97-.75-1.95-.94-2.97-.5-2.68.18-5.47-.08-8.2-.51-5.37-1.65-9.6-.26-14.57-.22-.05-.45-.07-.68-.07-2.5 0-4.68 2.79-5.8 6.89.15 2.61.6 5.26.88 8.28.22 2.3-.12 4.58.01 6.85 1.21 2.68 2.96 4.38 4.91 4.38zM827.03 340.51c.09-1.96-.04-3.91.1-5.86-.55-5.65-2.9-10.02-5.81-10.61.92 1.16 1.44 2.53 1.08 4.34-.53 2.68-1.29 4.83-1.32 7.62-.03 3.81-.33 6.39-1.63 9.92-.57 1.55-.79 2.63-.75 3.86.62.38 1.27.59 1.95.59 3.07.01 5.64-4.18 6.38-9.86zM335.55 237.08c-.65 0-1.27.19-1.86.54 5.55 2.98 3.59 9.91 3.18 15.7-.27 3.8-.59 6.28-2.2 9.73-.04.09-.08.18-.13.27.33.1.66.17 1 .17 3.65 0 6.6-5.91 6.6-13.2.01-7.3-2.95-13.21-6.59-13.21zM171.88 265.11c.81-5.43-1.47-10.51.69-15.3-.64-.41-1.31-.63-2.02-.63-2.97 0-5.48 3.92-6.31 9.31.06 1.38.1 2.82.01 4.37-.03.61-.11 1.22-.2 1.81.54 6.2 3.24 10.91 6.49 10.91.61 0 1.2-.18 1.76-.49-.89-3.15-1-6.14-.42-9.98zM232.15 252.48c-3.03 0-5.58 4.1-6.36 9.68 0 .03 0 .06-.01.09 0 .03-.01.06-.02.09-.14 1.07-.22 2.19-.22 3.34 0 6.48 2.34 11.86 5.42 12.98-.03-.85-.03-1.62-.07-2.09-.24-3.02-.43-6.18-.18-9.21.2-2.42 1.53-4.8 1.29-7.22-.09-.87-.97-1.98-.99-2.72-.08-2.15 1.46-3.33 3.06-4.37-.61-.37-1.26-.57-1.92-.57z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st4",
              d:
                "M164.13 303c-1.36 1.95-2.74 4.22-3.95 6.45-1.24 2.24-2.4 4.55-3.5 6.88-2.15 4.69-4.11 9.49-5.8 14.39-1.64 4.92-3.21 9.88-4.46 14.93-.72 2.51-1.24 5.06-1.88 7.59-.58 2.55-1.08 5.11-1.68 7.67l-.01.04c-.13.54-.66.87-1.2.75-.49-.12-.82-.58-.77-1.07.25-2.63.52-5.27.86-7.9.44-2.61.78-5.25 1.32-7.85.55-2.6 1.08-5.2 1.78-7.77.34-1.29.62-2.59 1.01-3.86l1.17-3.82c1.66-5.06 3.48-10.09 5.78-14.92 1.15-2.42 2.33-4.82 3.69-7.15 1.37-2.34 2.73-4.58 4.51-6.85.68-.87 1.94-1.02 2.81-.34.84.66 1.01 1.85.41 2.71l-.09.12zM234.97 308.42c-1.94 4.67-4.18 9.07-6.67 13.39-2.47 4.32-5.2 8.5-8.23 12.48-3.01 3.98-6.29 7.81-10.05 11.18-3.73 3.37-7.97 6.3-12.66 8.21-.51.21-1.1-.04-1.31-.55a1 1 0 0 1 .4-1.23l.02-.01c4.06-2.54 7.69-5.65 11.03-9.07 3.32-3.43 6.4-7.12 9.23-11.02 1.42-1.95 2.76-3.95 4.05-5.99 1.3-2.03 2.58-4.08 3.79-6.17 2.4-4.18 4.71-8.49 6.74-12.79l.03-.05c.47-1 1.66-1.43 2.66-.96.94.46 1.37 1.6.97 2.58z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st4",
              d:
                "M179.23 297.01c1.39 4.61 2.92 9.27 4.51 13.86 1.63 4.59 3.3 9.15 5.16 13.63 1.88 4.47 3.92 8.86 6.19 13.11 1.16 2.11 2.34 4.2 3.68 6.17 1.33 1.98 2.76 3.89 4.41 5.58l.01.01c.39.4.38 1.03-.02 1.42-.36.35-.92.38-1.31.08-4.1-3.12-7.13-7.27-9.85-11.46-2.67-4.25-4.9-8.72-6.91-13.27-2.01-4.55-3.85-9.16-5.44-13.85-1.63-4.69-3.08-9.39-4.3-14.25a1.998 1.998 0 1 1 3.85-1.07l.02.04zM767.37 299.85c.11 2.29.42 4.82.86 7.22.24 1.21.48 2.42.75 3.62.32 1.19.59 2.4.95 3.57.38 1.17.72 2.36 1.14 3.52.45 1.15.87 2.31 1.3 3.46l1.52 3.37c.49 1.14 1.15 2.18 1.71 3.28l.89 1.62 1.01 1.55c.7 1.02 1.28 2.11 2.04 3.09l2.24 2.95.56.74.62.69 1.24 1.38 1.23 1.4.62.7.68.64 2.71 2.57c.88.9 1.88 1.64 2.85 2.43.97.79 1.95 1.58 2.91 2.39l.07.06c.42.36.47.99.12 1.41a1 1 0 0 1-1.28.21c-1.1-.67-2.2-1.37-3.29-2.07-1.08-.72-2.24-1.35-3.21-2.21l-3.05-2.46-.76-.62-.71-.68-1.4-1.37c-3.79-3.62-6.97-7.88-9.62-12.41-.63-1.15-1.36-2.26-1.9-3.46l-1.69-3.56c-.48-1.22-.98-2.44-1.44-3.67-.44-1.24-.8-2.5-1.21-3.76-.38-1.26-.66-2.54-1-3.82-.28-1.29-.55-2.57-.75-3.87-.19-1.31-.38-2.61-.49-3.93a35.42 35.42 0 0 1-.18-4.05c.01-1.1.91-1.99 2.01-1.99 1.06.01 1.93.84 1.98 1.89l-.03.17zM813.74 374.6c-.77-.11-1.34-.24-1.97-.42-.62-.16-1.22-.37-1.81-.59-1.17-.47-2.32-.99-3.4-1.64-2.17-1.28-4.14-2.89-5.76-4.79-1.61-1.9-3.06-3.95-4-6.23-.27-.55-.52-1.11-.7-1.69-.2-.57-.4-1.15-.58-1.73-.34-1.16-.56-2.35-.8-3.52a.995.995 0 0 1 .77-1.18c.47-.1.93.15 1.12.57l.05.12c.45 1.04.8 2.1 1.28 3.1.54.97.92 2.01 1.56 2.91.29.46.57.93.87 1.38.34.43.67.86.99 1.29.3.45.68.83 1.04 1.23.37.39.7.81 1.11 1.15 1.53 1.49 3.3 2.7 5.13 3.74.92.51 1.87.98 2.85 1.37.49.17.98.39 1.47.54.47.17 1.03.31 1.4.42l.23.07c1.06.31 1.66 1.42 1.35 2.48-.29.97-1.24 1.56-2.2 1.42zM163.58 403.9c.26 1.26.39 2.34.53 3.51.13 1.15.24 2.29.32 3.43.15 2.29.22 4.56.25 6.84.03 4.55-.18 9.09-.52 13.61-.37 4.52-.88 9.01-1.52 13.49l-1.08 6.69c-.44 2.22-.85 4.43-1.31 6.64-.11.54-.65.89-1.19.77a1 1 0 0 1-.79-1.06v-.02c.17-2.24.41-4.47.61-6.7l.56-6.69c.3-4.46.67-8.91.78-13.36.19-4.45.29-8.9.21-13.33-.03-2.21-.09-4.43-.22-6.62-.09-2.18-.29-4.45-.55-6.46l-.01-.1c-.14-1.09.63-2.1 1.73-2.24 1.03-.12 1.99.59 2.2 1.6zM183.28 403.71c.74 2.32 1.29 4.58 1.85 6.88.52 2.3 1.01 4.6 1.44 6.92.83 4.63 1.54 9.28 2.02 13.96.44 4.68.86 9.36.96 14.06.09 2.35.09 4.69.09 7.04-.02 2.35-.12 4.69-.22 7.03-.02.55-.49.98-1.04.96-.51-.02-.92-.43-.96-.93v-.03c-.31-4.64-.58-9.26-1.06-13.87-.45-4.61-.98-9.2-1.66-13.77-.65-4.57-1.43-9.13-2.31-13.65-.42-2.27-.89-4.52-1.39-6.77-.48-2.24-1.02-4.51-1.56-6.67l-.01-.05c-.27-1.07.38-2.16 1.45-2.43 1.04-.28 2.08.32 2.4 1.32zM226.43 399.59c.82 5.03 1.31 10.03 1.72 15.07.19 2.52.31 5.04.43 7.56l.14 3.79.03 3.79c.02 1.26-.02 2.53-.04 3.79-.02 1.26-.03 2.53-.1 3.79l-.18 3.79-.33 3.79c-.51 5.05-1.27 10.09-2.68 15-.15.53-.71.84-1.24.69a1 1 0 0 1-.71-1.14v-.02c.88-4.86 1.28-9.79 1.48-14.74.17-4.95.12-9.92-.08-14.88-.2-4.96-.52-9.93-.96-14.88-.19-2.48-.41-4.96-.67-7.43-.23-2.47-.5-4.96-.78-7.4v-.03a2 2 0 0 1 1.76-2.21c1.07-.12 2.04.63 2.21 1.67zM245.41 399.44c1.24 5.1 2.17 10.2 3.02 15.34.77 5.14 1.49 10.3 1.97 15.48.46 5.18.83 10.38.92 15.6.08 5.21-.07 10.44-.58 15.63a1 1 0 0 1-1.09.9 1 1 0 0 1-.9-1v-.02c.02-5.13-.18-10.25-.55-15.37-.45-5.11-.93-10.22-1.63-15.31-.72-5.08-1.43-10.17-2.33-15.23-.83-5.06-1.77-10.14-2.74-15.14l-.01-.03a2 2 0 0 1 1.58-2.34c1.07-.21 2.09.46 2.34 1.49zM326.82 393.28c-.02.94-.08 1.56-.12 2.3l-.13 2.12c-.09 1.41-.14 2.82-.2 4.23-.12 2.82-.2 5.64-.21 8.47-.03 5.65.03 11.31.37 16.97.27 5.66.7 11.31 1.3 16.95.54 5.65 1.34 11.28 2.09 16.92v.02a.995.995 0 0 1-.86 1.12c-.51.07-.99-.27-1.11-.77-.65-2.79-1.29-5.59-1.86-8.4-.52-2.82-1.08-5.64-1.5-8.48-.95-5.67-1.53-11.39-2.05-17.12-.44-5.74-.67-11.49-.65-17.25.02-2.88.1-5.76.24-8.64.09-1.44.18-2.88.3-4.32l.19-2.15.19-1.97.02-.24a1.99 1.99 0 0 1 2.18-1.79c1.05.1 1.83.99 1.81 2.03zM350.32 393.06c.84 5.84 1.92 11.77 3.18 17.6 1.23 5.85 2.74 11.64 4.41 17.37 1.74 5.71 3.79 11.32 6.12 16.81 2.46 5.42 5.24 10.7 8.61 15.62l.02.02a1 1 0 1 1-1.61 1.18c-3.8-4.82-7.03-10.06-9.8-15.52-2.7-5.49-4.96-11.19-6.95-16.96-1.95-5.79-3.54-11.68-4.91-17.62-1.31-5.97-2.41-11.93-3.05-18.07-.11-1.1.68-2.08 1.78-2.2 1.07-.11 2.03.65 2.19 1.7l.01.07zM678.47 401.53c1.19 3.99 1.93 7.91 2.59 11.91.6 3.99 1.08 8 1.36 12.01.12 2.01.25 4.02.3 6.03l.09 3.02-.01 3.02c.01 2.01-.08 4.02-.15 6.03-.1 2.01-.26 4.01-.42 6.01-.05.55-.53.96-1.08.92-.51-.04-.9-.46-.92-.96v-.02c-.17-3.97-.3-7.93-.6-11.87-.27-3.95-.62-7.88-1.09-11.8-.47-3.92-1-7.82-1.67-11.7-.3-1.94-.66-3.88-1.04-5.8-.36-1.91-.78-3.87-1.2-5.7l-.02-.07c-.25-1.08.42-2.15 1.5-2.4 1.03-.25 2.06.37 2.36 1.37zM659.53 401.15c.56 1.06 1 2.01 1.41 3.02.43 1 .78 2.02 1.15 3.03.66 2.05 1.22 4.13 1.67 6.23.88 4.21 1.28 8.51 1.19 12.81-.14 4.28-.6 8.58-1.73 12.7-.47 2.09-1.21 4.09-1.92 6.09-.33 1.01-.82 1.96-1.26 2.93-.44.96-.9 1.92-1.35 2.87a.996.996 0 0 1-1.84-.75l.02-.07c1.31-3.88 2.57-7.75 3.2-11.75.15-1 .4-1.98.47-2.99l.32-3c.12-1 .09-2.01.14-3.01l.05-1.5c0-.5-.03-1-.05-1.51-.06-1-.02-2.01-.12-3.01l-.27-3-.44-2.97c-.16-.99-.4-1.96-.57-2.95a60.3 60.3 0 0 0-1.53-5.8 49.58 49.58 0 0 0-2.06-5.51l-.05-.12c-.45-1.01.01-2.19 1.01-2.64.95-.42 2.08-.02 2.56.9zM820.35 410.45c-.37 1.34-.74 2.89-1.02 4.37-.28 1.5-.57 3.01-.76 4.53-.39 3.04-.68 6.1-.72 9.18-.05 3.07.01 6.16.32 9.24.21 3.09.76 6.14 1.26 9.24l.01.05a.998.998 0 0 1-.83 1.15c-.48.08-.93-.2-1.1-.64-.28-.75-.55-1.52-.81-2.28-.26-.77-.55-1.53-.74-2.31-.41-1.57-.84-3.14-1.12-4.74-.65-3.19-.95-6.44-1.04-9.7-.1-3.26.08-6.53.53-9.77.22-1.62.5-3.23.85-4.83.4-1.61.78-3.15 1.4-4.82a1.999 1.999 0 0 1 2.57-1.17c.97.37 1.49 1.41 1.23 2.39l-.03.11zM831.94 408.57c.08 1.19.15 2.46.26 3.69.09 1.24.19 2.48.33 3.72.27 2.47.58 4.93 1.03 7.35.43 2.43.99 4.82 1.77 7.1l.28.87c.11.28.23.55.35.82.25.53.43 1.14.75 1.62.29.51.54 1.06.85 1.56.35.46.69.94 1.02 1.44l.1.15c.31.45.19 1.07-.26 1.38a.99.99 0 0 1-1.21-.07c-.52-.45-1.03-.92-1.54-1.4-.48-.5-.88-1.05-1.32-1.59-.45-.54-.73-1.14-1.11-1.72-.17-.29-.36-.58-.52-.88l-.45-.9c-.64-1.2-1.07-2.46-1.55-3.71-.39-1.27-.81-2.53-1.1-3.82-.63-2.56-1.09-5.15-1.35-7.76-.27-2.61-.43-5.18-.34-7.86.04-1.1.97-1.97 2.07-1.93 1.03.04 1.86.85 1.93 1.86l.01.08zM750.98 400.28c-.28 1.84-.54 3.81-.74 5.73-.21 1.94-.41 3.88-.54 5.83-.26 3.9-.53 7.81-.54 11.72-.06 3.92-.05 7.84.14 11.76.11 3.93.44 7.85.7 11.79v.03c.04.55-.38 1.03-.93 1.07-.5.03-.94-.31-1.04-.79-.43-1.95-.85-3.92-1.19-5.89-.3-1.98-.64-3.96-.86-5.95-.49-3.98-.73-8-.85-12.01-.07-4.02-.01-8.04.3-12.06.31-4.03.75-7.98 1.63-12.05.23-1.08 1.3-1.76 2.38-1.53 1.04.22 1.71 1.21 1.55 2.25l-.01.1zM767.35 399.55l1.24 5.93c.41 1.99.83 3.97 1.28 5.95.86 3.97 1.74 7.93 2.7 11.88.9 3.96 1.91 7.9 2.92 11.84.99 3.95 2.1 7.86 3.14 11.8v.01c.14.53-.18 1.08-.71 1.22-.49.13-.99-.13-1.18-.58-1.58-3.79-3.04-7.64-4.35-11.53-1.35-3.88-2.51-7.82-3.66-11.77-1.1-3.96-2.12-7.94-3.03-11.95-.44-2.01-.86-4.02-1.27-6.03-.36-2.03-.75-4.04-1.04-6.11a2.01 2.01 0 0 1 1.71-2.26c1.05-.14 2.01.55 2.23 1.56l.02.04zM766.55 254.68c0 2.86-.35 5.74-1.37 8.56-.53 1.4-1.22 2.78-2.29 4.07-.52.64-1.2 1.24-2.01 1.74-.83.49-1.86.81-2.93.83a5.892 5.892 0 0 1-2.89-.89 7.916 7.916 0 0 1-1.94-1.77c-1.02-1.3-1.63-2.7-2.09-4.09-.9-2.8-1.19-5.63-1.18-8.45.03-2.81.38-5.63 1.33-8.39.48-1.37 1.12-2.74 2.12-4 .49-.63 1.13-1.22 1.88-1.72.78-.49 1.75-.8 2.77-.84 1.02.01 2.01.31 2.81.77.78.48 1.45 1.06 1.97 1.68 1.06 1.25 1.76 2.61 2.3 3.99 1.06 2.78 1.46 5.65 1.52 8.51zm-4 0c.02-2.46-.28-4.95-1.08-7.18-.38-1.11-.9-2.16-1.54-2.97-.31-.42-.67-.72-1.01-.96-.34-.22-.66-.3-.98-.34-.32.01-.65.07-1.02.27-.36.22-.75.51-1.09.92-.7.79-1.28 1.84-1.72 2.96-.44 1.12-.77 2.32-.98 3.55-.19 1.23-.28 2.49-.29 3.75.04 1.26.15 2.51.37 3.73.24 1.22.6 2.4 1.06 3.51.46 1.1 1.06 2.11 1.75 2.86.33.4.7.66 1.03.87.34.18.63.22.9.23.27-.04.54-.1.86-.29.31-.22.66-.49.96-.89.63-.77 1.15-1.8 1.55-2.89.84-2.2 1.19-4.67 1.23-7.13zM829.25 337.18c0 2.86-.35 5.74-1.37 8.56-.53 1.4-1.22 2.78-2.29 4.07-.52.64-1.2 1.24-2.01 1.74-.83.49-1.86.81-2.93.83a5.892 5.892 0 0 1-2.89-.89 7.916 7.916 0 0 1-1.94-1.77c-1.02-1.3-1.63-2.7-2.09-4.09-.9-2.8-1.19-5.63-1.18-8.45.03-2.81.38-5.63 1.33-8.39.48-1.37 1.12-2.74 2.12-4 .49-.63 1.13-1.22 1.88-1.72.78-.49 1.75-.8 2.77-.84 1.02.01 2.01.31 2.81.77.78.48 1.45 1.06 1.97 1.68 1.06 1.25 1.76 2.61 2.3 3.99 1.06 2.78 1.46 5.65 1.52 8.51zm-4 0c.02-2.46-.28-4.95-1.08-7.18-.38-1.11-.9-2.16-1.54-2.97-.31-.42-.67-.72-1.01-.96-.34-.22-.66-.3-.98-.34-.32.01-.65.07-1.02.27-.36.22-.75.51-1.09.92-.7.79-1.28 1.84-1.72 2.96-.44 1.12-.77 2.32-.98 3.55-.19 1.23-.28 2.49-.29 3.75.04 1.26.15 2.51.37 3.73.24 1.22.6 2.4 1.06 3.51.46 1.1 1.06 2.11 1.75 2.86.33.4.7.66 1.03.87.34.18.63.22.9.23.27-.04.54-.1.86-.29.31-.22.66-.49.96-.89.63-.77 1.15-1.8 1.55-2.89.84-2.2 1.19-4.67 1.23-7.13zM344.15 250.28c0 2.86-.35 5.74-1.37 8.56-.53 1.4-1.22 2.78-2.29 4.07-.52.64-1.2 1.24-2.01 1.74-.83.49-1.86.81-2.93.83a5.892 5.892 0 0 1-2.89-.89 7.916 7.916 0 0 1-1.94-1.77c-1.02-1.3-1.63-2.7-2.09-4.09-.9-2.8-1.19-5.63-1.18-8.45.03-2.81.38-5.63 1.33-8.39.48-1.37 1.12-2.74 2.12-4 .49-.63 1.13-1.22 1.88-1.72.78-.49 1.75-.8 2.77-.84 1.02.01 2.01.31 2.81.77.78.48 1.45 1.06 1.97 1.68 1.06 1.25 1.76 2.61 2.3 3.99 1.06 2.78 1.46 5.65 1.52 8.51zm-4 0c.02-2.46-.28-4.95-1.08-7.18-.38-1.11-.9-2.16-1.54-2.97-.31-.42-.67-.72-1.01-.96-.34-.22-.66-.3-.98-.34-.32.01-.65.07-1.02.27-.36.22-.75.51-1.09.92-.7.79-1.28 1.84-1.72 2.96-.44 1.12-.77 2.32-.98 3.55-.19 1.23-.28 2.49-.29 3.75.04 1.26.15 2.51.37 3.73.24 1.22.6 2.4 1.06 3.51.46 1.1 1.06 2.11 1.75 2.86.33.4.7.66 1.03.87.34.18.63.22.9.23.27-.04.54-.1.86-.29.31-.22.66-.49.96-.89.63-.77 1.15-1.8 1.55-2.89.84-2.2 1.19-4.67 1.23-7.13zM662.05 268.98c.03 2.46.39 4.94 1.23 7.13.39 1.09.92 2.12 1.55 2.89.31.4.65.68.96.89.32.19.6.25.86.29.27-.01.56-.05.9-.23.33-.2.7-.47 1.03-.87.69-.75 1.29-1.77 1.75-2.86.46-1.1.82-2.29 1.06-3.51.21-1.23.33-2.48.37-3.73-.01-1.26-.1-2.51-.29-3.75-.21-1.23-.54-2.43-.98-3.55-.44-1.12-1.02-2.17-1.72-2.96-.34-.41-.73-.7-1.09-.92-.37-.2-.7-.26-1.02-.27-.32.04-.63.13-.98.34-.34.24-.69.54-1.01.96-.64.81-1.16 1.86-1.54 2.97-.8 2.23-1.1 4.72-1.08 7.18zm-4 0c.06-2.86.46-5.73 1.52-8.5.54-1.38 1.24-2.74 2.3-3.99.52-.63 1.19-1.2 1.97-1.68.8-.47 1.79-.76 2.81-.77 1.02.04 1.99.36 2.77.84.76.5 1.4 1.08 1.88 1.72 1 1.26 1.64 2.63 2.12 4 .95 2.75 1.3 5.58 1.33 8.39.02 2.81-.28 5.65-1.18 8.45-.47 1.39-1.08 2.79-2.09 4.09-.5.65-1.15 1.26-1.94 1.77-.81.51-1.82.84-2.89.89-1.07-.02-2.1-.34-2.93-.83-.8-.5-1.49-1.1-2.01-1.74-1.07-1.28-1.76-2.67-2.29-4.07-1.02-2.83-1.37-5.71-1.37-8.57zM165.95 262.38c.04 2.46.39 4.94 1.23 7.13.39 1.09.92 2.12 1.55 2.89.31.4.65.68.96.89.32.19.6.25.86.29.27-.01.56-.05.9-.23.33-.2.7-.47 1.03-.87.69-.75 1.29-1.77 1.75-2.86.46-1.1.82-2.29 1.06-3.51.21-1.23.33-2.48.37-3.73-.01-1.26-.1-2.51-.29-3.75-.21-1.23-.54-2.43-.98-3.55-.44-1.12-1.02-2.17-1.72-2.96-.34-.41-.73-.7-1.09-.92-.37-.2-.7-.26-1.02-.27-.32.04-.63.13-.98.34-.34.24-.69.54-1.01.96-.64.81-1.16 1.86-1.54 2.97-.8 2.23-1.1 4.72-1.08 7.18zm-4 0c.06-2.86.46-5.73 1.52-8.5.54-1.38 1.24-2.74 2.3-3.99.52-.63 1.19-1.2 1.97-1.68.8-.47 1.79-.76 2.81-.77 1.02.04 1.99.36 2.77.84.76.5 1.4 1.08 1.88 1.72 1 1.26 1.64 2.63 2.12 4 .95 2.75 1.3 5.58 1.33 8.39.02 2.81-.28 5.65-1.18 8.45-.47 1.39-1.08 2.79-2.09 4.09-.5.65-1.15 1.26-1.94 1.77-.81.51-1.82.84-2.89.89-1.07-.02-2.1-.34-2.93-.83-.8-.5-1.49-1.1-2.01-1.74-1.07-1.28-1.76-2.67-2.29-4.07-1.02-2.83-1.37-5.71-1.37-8.57zM227.55 265.68c.03 2.46.39 4.94 1.23 7.13.39 1.09.92 2.12 1.55 2.89.31.4.65.68.96.89.32.19.6.25.86.29.27-.01.56-.05.9-.23.33-.2.7-.47 1.03-.87.69-.75 1.29-1.77 1.75-2.86.46-1.1.82-2.29 1.06-3.51.21-1.23.33-2.48.37-3.73-.01-1.26-.1-2.51-.29-3.75-.21-1.23-.54-2.43-.98-3.55-.44-1.12-1.02-2.17-1.72-2.96-.34-.41-.73-.7-1.09-.92-.37-.2-.7-.26-1.02-.27-.32.04-.63.13-.98.34-.34.24-.69.54-1.01.96-.64.81-1.16 1.86-1.54 2.97-.8 2.23-1.1 4.72-1.08 7.18zm-4 0c.06-2.86.46-5.73 1.52-8.5.54-1.38 1.24-2.74 2.3-3.99.52-.63 1.19-1.2 1.97-1.68.8-.47 1.79-.76 2.81-.77 1.02.04 1.99.36 2.77.84.76.5 1.4 1.08 1.88 1.72 1 1.26 1.64 2.63 2.12 4 .95 2.75 1.3 5.58 1.33 8.39.02 2.81-.28 5.65-1.18 8.45-.47 1.39-1.08 2.79-2.09 4.09-.5.65-1.15 1.26-1.94 1.77-.81.51-1.82.84-2.89.89-1.07-.02-2.1-.34-2.93-.83-.8-.5-1.49-1.1-2.01-1.74-1.07-1.28-1.76-2.67-2.29-4.07-1.02-2.83-1.37-5.71-1.37-8.57z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st9",
              d:
                "M712.74 235.19s-2.92-10.75-7.64-19.99c-4.71-9.25 4.34-11.77 9.05-2.52 6.05-6.1 13.82-6.52 8.48 4.05-5.34 10.58-9.89 18.46-9.89 18.46z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st9",
              d:
                "M712.74 237.19c-.09 0-.17-.01-.26-.02-.8-.1-1.46-.68-1.67-1.46-.03-.11-2.93-10.66-7.49-19.61-2.99-5.86-1.17-9.41 1.29-10.66 1.75-.89 3.96-.73 6.07.45 1.46.82 2.8 2.07 3.94 3.68 3.33-2.66 7.42-4.28 10.05-2.38 1.68 1.21 3 4-.25 10.44-5.31 10.5-9.9 18.48-9.95 18.56-.36.63-1.02 1-1.73 1zm-5.68-28.31c-.27 0-.48.05-.64.13-.86.44-.99 2.44.46 5.28 2.88 5.66 5.09 11.79 6.41 15.83 1.83-3.31 4.58-8.4 7.56-14.29 1.85-3.66 1.63-5.19 1.47-5.4-.45-.29-3.36.25-6.75 3.66-.45.46-1.09.67-1.73.57-.63-.1-1.18-.5-1.47-1.07-.99-1.95-2.29-3.44-3.64-4.2-.66-.37-1.23-.51-1.67-.51zM279.55 232.86s-4.75-10.07-10.99-18.36c-6.25-8.29 2.23-12.34 8.48-4.05 4.9-7.05 12.48-8.82 9.05 2.52-3.42 11.33-6.54 19.89-6.54 19.89z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st9",
              d:
                "M279.55 234.86c-.77 0-1.48-.45-1.81-1.15-.05-.1-4.74-9.99-10.78-18.01-3.96-5.25-2.79-9.06-.58-10.72 2.44-1.84 6.73-1.48 10.58 2.33 2.82-3.2 6.56-5.51 9.48-4.09 1.86.9 3.65 3.42 1.56 10.33-3.4 11.27-6.55 19.92-6.58 20-.28.76-.98 1.28-1.79 1.31h-.08zm-9.75-26.95c-.44 0-.79.1-1.01.26-.77.58-.55 2.57 1.37 5.12 3.82 5.07 7.06 10.73 9.06 14.48 1.23-3.58 3.05-9.07 4.96-15.39 1.19-3.93.71-5.4.51-5.58-.49-.21-3.26.82-6.01 4.78-.37.53-.96.85-1.6.86-.65 0-1.25-.28-1.63-.8-2.14-2.83-4.33-3.73-5.65-3.73z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st2",
              d:
                "M356.11 393.28h-36.96s5.84-120.85 17.31-120.85c11.47 0 19.65 120.85 19.65 120.85z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st2",
              d:
                "M356.11 395.28h-36.96c-.55 0-1.07-.22-1.45-.62-.38-.4-.58-.93-.55-1.48.01-.3 1.5-30.6 4.36-60.52 5.24-54.69 10.28-62.23 14.95-62.23 4.65 0 9.82 7.54 16.11 62.2 3.44 29.91 5.51 60.21 5.53 60.52.04.55-.16 1.1-.53 1.5-.38.4-.91.63-1.46.63zm-34.86-4h32.71c-.52-7.25-2.38-31.87-5.18-56.58-6.1-53.73-11.15-59.61-12.32-60.23-1.16.65-6.08 6.61-11.13 60.29-2.33 24.72-3.7 49.32-4.08 56.52z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st0",
              d:
                "M249.75 399.88H216.5s5.25-113.15 15.57-113.15 17.68 113.15 17.68 113.15z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st0",
              d:
                "M249.75 400.88H216.5a1.01 1.01 0 0 1-1-1.05c.01-.28 1.34-28.63 3.92-56.62 4.69-50.95 9.22-57.48 12.65-57.48 3.42 0 8.07 6.53 13.7 57.46 3.09 27.99 4.95 56.34 4.97 56.62.02.28-.08.55-.27.75-.18.2-.44.32-.72.32zm-32.2-2h31.13c-.37-5.42-2.14-30.59-4.89-55.47-1.81-16.39-3.69-29.45-5.58-38.8-3.24-16.06-5.68-16.88-6.13-16.88-4.59 0-11.25 41.55-14.53 111.15z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st2",
              d:
                "M691.95 402.08H647.7s6.99-112.05 20.72-112.05 23.53 112.05 23.53 112.05z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st2",
              d:
                "M691.95 404.08H647.7a2 2 0 0 1-2-2.12c.02-.28 1.79-28.39 5.22-56.14 2.02-16.34 4.22-29.38 6.52-38.75 3.24-13.16 6.62-19.03 10.97-19.03 4.32 0 7.84 5.85 11.4 18.98 2.54 9.37 5.06 22.41 7.49 38.75 4.13 27.75 6.6 55.86 6.63 56.14.05.56-.14 1.11-.52 1.53-.37.4-.9.64-1.46.64zm-42.11-4h39.92c-.66-7.11-2.96-30.56-6.4-53.74-7.85-52.78-14.23-54.3-14.93-54.3-.7 0-7 1.52-13.53 54.27-2.87 23.23-4.58 46.72-5.06 53.77z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st5",
              d:
                "M776.06 399.88h-36.48s5.76-124.15 17.08-124.15c11.33 0 19.4 124.15 19.4 124.15z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st5",
              d:
                "M776.06 401.88h-36.48c-.55 0-1.07-.22-1.45-.62-.38-.4-.58-.93-.55-1.47.01-.31 1.48-31.44 4.3-62.16 5.17-56.15 10.16-63.89 14.78-63.89 4.61 0 9.72 7.74 15.93 63.85 3.4 30.73 5.44 61.85 5.46 62.16.04.55-.16 1.09-.54 1.5-.36.4-.89.63-1.45.63zm-34.37-4h32.24c-.51-7.36-2.33-32.64-5.1-58.04-5.95-54.64-10.92-61.26-12.15-62.05-1.21.81-6.05 7.52-10.97 62.1-2.3 25.41-3.65 50.69-4.02 57.99z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st4",
              d:
                "M766.55 254.68c0 2.86-.35 5.74-1.37 8.56-.53 1.4-1.22 2.78-2.29 4.07-.52.64-1.2 1.24-2.01 1.74-.83.49-1.86.81-2.93.83a5.892 5.892 0 0 1-2.89-.89 7.916 7.916 0 0 1-1.94-1.77c-1.02-1.3-1.63-2.7-2.09-4.09-.9-2.8-1.19-5.63-1.18-8.45.03-2.81.38-5.63 1.33-8.39.48-1.37 1.12-2.74 2.12-4 .49-.63 1.13-1.22 1.88-1.72.78-.49 1.75-.8 2.77-.84 1.02.01 2.01.31 2.81.77.78.48 1.45 1.06 1.97 1.68 1.06 1.25 1.76 2.61 2.3 3.99 1.06 2.78 1.46 5.65 1.52 8.51zm-4 0c.02-2.46-.28-4.95-1.08-7.18-.38-1.11-.9-2.16-1.54-2.97-.31-.42-.67-.72-1.01-.96-.34-.22-.66-.3-.98-.34-.32.01-.65.07-1.02.27-.36.22-.75.51-1.09.92-.7.79-1.28 1.84-1.72 2.96-.44 1.12-.77 2.32-.98 3.55-.19 1.23-.28 2.49-.29 3.75.04 1.26.15 2.51.37 3.73.24 1.22.6 2.4 1.06 3.51.46 1.1 1.06 2.11 1.75 2.86.33.4.7.66 1.03.87.34.18.63.22.9.23.27-.04.54-.1.86-.29.31-.22.66-.49.96-.89.63-.77 1.15-1.8 1.55-2.89.84-2.2 1.19-4.67 1.23-7.13zM829.25 337.18c0 2.86-.35 5.74-1.37 8.56-.53 1.4-1.22 2.78-2.29 4.07-.52.64-1.2 1.24-2.01 1.74-.83.49-1.86.81-2.93.83a5.892 5.892 0 0 1-2.89-.89 7.916 7.916 0 0 1-1.94-1.77c-1.02-1.3-1.63-2.7-2.09-4.09-.9-2.8-1.19-5.63-1.18-8.45.03-2.81.38-5.63 1.33-8.39.48-1.37 1.12-2.74 2.12-4 .49-.63 1.13-1.22 1.88-1.72.78-.49 1.75-.8 2.77-.84 1.02.01 2.01.31 2.81.77.78.48 1.45 1.06 1.97 1.68 1.06 1.25 1.76 2.61 2.3 3.99 1.06 2.78 1.46 5.65 1.52 8.51zm-4 0c.02-2.46-.28-4.95-1.08-7.18-.38-1.11-.9-2.16-1.54-2.97-.31-.42-.67-.72-1.01-.96-.34-.22-.66-.3-.98-.34-.32.01-.65.07-1.02.27-.36.22-.75.51-1.09.92-.7.79-1.28 1.84-1.72 2.96-.44 1.12-.77 2.32-.98 3.55-.19 1.23-.28 2.49-.29 3.75.04 1.26.15 2.51.37 3.73.24 1.22.6 2.4 1.06 3.51.46 1.1 1.06 2.11 1.75 2.86.33.4.7.66 1.03.87.34.18.63.22.9.23.27-.04.54-.1.86-.29.31-.22.66-.49.96-.89.63-.77 1.15-1.8 1.55-2.89.84-2.2 1.19-4.67 1.23-7.13zM344.15 250.28c0 2.86-.35 5.74-1.37 8.56-.53 1.4-1.22 2.78-2.29 4.07-.52.64-1.2 1.24-2.01 1.74-.83.49-1.86.81-2.93.83a5.892 5.892 0 0 1-2.89-.89 7.916 7.916 0 0 1-1.94-1.77c-1.02-1.3-1.63-2.7-2.09-4.09-.9-2.8-1.19-5.63-1.18-8.45.03-2.81.38-5.63 1.33-8.39.48-1.37 1.12-2.74 2.12-4 .49-.63 1.13-1.22 1.88-1.72.78-.49 1.75-.8 2.77-.84 1.02.01 2.01.31 2.81.77.78.48 1.45 1.06 1.97 1.68 1.06 1.25 1.76 2.61 2.3 3.99 1.06 2.78 1.46 5.65 1.52 8.51zm-4 0c.02-2.46-.28-4.95-1.08-7.18-.38-1.11-.9-2.16-1.54-2.97-.31-.42-.67-.72-1.01-.96-.34-.22-.66-.3-.98-.34-.32.01-.65.07-1.02.27-.36.22-.75.51-1.09.92-.7.79-1.28 1.84-1.72 2.96-.44 1.12-.77 2.32-.98 3.55-.19 1.23-.28 2.49-.29 3.75.04 1.26.15 2.51.37 3.73.24 1.22.6 2.4 1.06 3.51.46 1.1 1.06 2.11 1.75 2.86.33.4.7.66 1.03.87.34.18.63.22.9.23.27-.04.54-.1.86-.29.31-.22.66-.49.96-.89.63-.77 1.15-1.8 1.55-2.89.84-2.2 1.19-4.67 1.23-7.13zM662.05 268.98c.03 2.46.39 4.94 1.23 7.13.39 1.09.92 2.12 1.55 2.89.31.4.65.68.96.89.32.19.6.25.86.29.27-.01.56-.05.9-.23.33-.2.7-.47 1.03-.87.69-.75 1.29-1.77 1.75-2.86.46-1.1.82-2.29 1.06-3.51.21-1.23.33-2.48.37-3.73-.01-1.26-.1-2.51-.29-3.75-.21-1.23-.54-2.43-.98-3.55-.44-1.12-1.02-2.17-1.72-2.96-.34-.41-.73-.7-1.09-.92-.37-.2-.7-.26-1.02-.27-.32.04-.63.13-.98.34-.34.24-.69.54-1.01.96-.64.81-1.16 1.86-1.54 2.97-.8 2.23-1.1 4.72-1.08 7.18zm-4 0c.06-2.86.46-5.73 1.52-8.5.54-1.38 1.24-2.74 2.3-3.99.52-.63 1.19-1.2 1.97-1.68.8-.47 1.79-.76 2.81-.77 1.02.04 1.99.36 2.77.84.76.5 1.4 1.08 1.88 1.72 1 1.26 1.64 2.63 2.12 4 .95 2.75 1.3 5.58 1.33 8.39.02 2.81-.28 5.65-1.18 8.45-.47 1.39-1.08 2.79-2.09 4.09-.5.65-1.15 1.26-1.94 1.77-.81.51-1.82.84-2.89.89-1.07-.02-2.1-.34-2.93-.83-.8-.5-1.49-1.1-2.01-1.74-1.07-1.28-1.76-2.67-2.29-4.07-1.02-2.83-1.37-5.71-1.37-8.57zM165.95 262.38c.04 2.46.39 4.94 1.23 7.13.39 1.09.92 2.12 1.55 2.89.31.4.65.68.96.89.32.19.6.25.86.29.27-.01.56-.05.9-.23.33-.2.7-.47 1.03-.87.69-.75 1.29-1.77 1.75-2.86.46-1.1.82-2.29 1.06-3.51.21-1.23.33-2.48.37-3.73-.01-1.26-.1-2.51-.29-3.75-.21-1.23-.54-2.43-.98-3.55-.44-1.12-1.02-2.17-1.72-2.96-.34-.41-.73-.7-1.09-.92-.37-.2-.7-.26-1.02-.27-.32.04-.63.13-.98.34-.34.24-.69.54-1.01.96-.64.81-1.16 1.86-1.54 2.97-.8 2.23-1.1 4.72-1.08 7.18zm-4 0c.06-2.86.46-5.73 1.52-8.5.54-1.38 1.24-2.74 2.3-3.99.52-.63 1.19-1.2 1.97-1.68.8-.47 1.79-.76 2.81-.77 1.02.04 1.99.36 2.77.84.76.5 1.4 1.08 1.88 1.72 1 1.26 1.64 2.63 2.12 4 .95 2.75 1.3 5.58 1.33 8.39.02 2.81-.28 5.65-1.18 8.45-.47 1.39-1.08 2.79-2.09 4.09-.5.65-1.15 1.26-1.94 1.77-.81.51-1.82.84-2.89.89-1.07-.02-2.1-.34-2.93-.83-.8-.5-1.49-1.1-2.01-1.74-1.07-1.28-1.76-2.67-2.29-4.07-1.02-2.83-1.37-5.71-1.37-8.57zM227.55 265.68c.03 2.46.39 4.94 1.23 7.13.39 1.09.92 2.12 1.55 2.89.31.4.65.68.96.89.32.19.6.25.86.29.27-.01.56-.05.9-.23.33-.2.7-.47 1.03-.87.69-.75 1.29-1.77 1.75-2.86.46-1.1.82-2.29 1.06-3.51.21-1.23.33-2.48.37-3.73-.01-1.26-.1-2.51-.29-3.75-.21-1.23-.54-2.43-.98-3.55-.44-1.12-1.02-2.17-1.72-2.96-.34-.41-.73-.7-1.09-.92-.37-.2-.7-.26-1.02-.27-.32.04-.63.13-.98.34-.34.24-.69.54-1.01.96-.64.81-1.16 1.86-1.54 2.97-.8 2.23-1.1 4.72-1.08 7.18zm-4 0c.06-2.86.46-5.73 1.52-8.5.54-1.38 1.24-2.74 2.3-3.99.52-.63 1.19-1.2 1.97-1.68.8-.47 1.79-.76 2.81-.77 1.02.04 1.99.36 2.77.84.76.5 1.4 1.08 1.88 1.72 1 1.26 1.64 2.63 2.12 4 .95 2.75 1.3 5.58 1.33 8.39.02 2.81-.28 5.65-1.18 8.45-.47 1.39-1.08 2.79-2.09 4.09-.5.65-1.15 1.26-1.94 1.77-.81.51-1.82.84-2.89.89-1.07-.02-2.1-.34-2.93-.83-.8-.5-1.49-1.1-2.01-1.74-1.07-1.28-1.76-2.67-2.29-4.07-1.02-2.83-1.37-5.71-1.37-8.57z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st5",
              d:
                "M191.2 404.28h-39.36s6.22-119.75 18.43-119.75c12.23 0 20.93 119.75 20.93 119.75z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st5",
              d:
                "M191.2 406.28h-39.36c-.55 0-1.07-.23-1.45-.62-.38-.4-.58-.93-.55-1.48.02-.3 1.59-30.33 4.64-59.97 1.8-17.45 3.75-31.36 5.79-41.36 2.92-14.24 5.91-20.31 9.99-20.31 2.87 0 6.34 2.41 10.37 20.27 2.26 10 4.5 23.91 6.65 41.36 3.67 29.64 5.87 59.67 5.89 59.97.04.55-.15 1.1-.53 1.51-.35.4-.88.63-1.44.63zm-37.24-4h35.08c-.56-7.29-2.57-32.01-5.59-56.68-6.89-56.17-12.57-58.94-13.19-59.07-.58.14-6.19 3.03-11.9 59.13-2.5 24.68-3.99 49.39-4.4 56.62z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st6",
              d:
                "M821.99 356.59c10.68.95 15.78 51.65 15.78 51.65l-26.19 1.08c0 .01-.26-53.68 10.41-52.73z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st6",
              d:
                "M811.58 411.33c-.51 0-1.01-.2-1.38-.55-.39-.38-.62-.89-.62-1.44-.02-4.63.02-45.49 8.41-53.21 1.56-1.43 3.12-1.62 4.18-1.53 3.5.31 8.73 3.53 13.67 27.78 2.6 12.75 3.9 25.54 3.92 25.67.05.55-.12 1.09-.48 1.51s-.88.67-1.43.69l-26.19 1.08c-.02-.01-.05 0-.08 0zm10.13-52.75c-.24 0-.56.08-1.01.5-5.13 4.72-7.05 31.18-7.12 48.17l21.98-.91c-2.51-22.99-8.34-47.27-13.75-47.75-.02-.01-.06-.01-.1-.01z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st4",
              d:
                "M759.59 298.68a29.35 29.35 0 0 1-1.78 2.94c-.61.94-1.28 1.82-1.94 2.72a65.006 65.006 0 0 1-4.38 5 58.557 58.557 0 0 1-10.28 8.36c-3.75 2.34-7.69 4.4-11.86 5.8-2.05.8-4.2 1.3-6.31 1.86-1.05.3-2.15.42-3.22.61-1.08.18-2.16.34-3.23.5a.995.995 0 0 1-1.13-.85c-.07-.5.24-.97.72-1.1l.07-.02c4.07-1.14 8.11-2.28 11.89-4.05 3.84-1.61 7.45-3.71 10.84-6.08 3.44-2.3 6.56-5.06 9.45-8.01 1.45-1.47 2.81-3.03 4.1-4.63 1.28-1.58 2.52-3.32 3.53-4.93l.07-.11c.58-.94 1.82-1.22 2.75-.64.9.55 1.2 1.71.71 2.63z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st15",
              d:
                "M777.67 401.38c.42-.44.63-1.04.59-1.65-.02-.31-2.06-31.44-5.46-62.17-2-18.08-4.07-32.51-6.17-42.87-3.54-17.56-6.55-21.16-9.96-21.16-.58 0-1.13.13-1.65.38 2.01 2.83-1.01 6.46-.94 10.17.1 4.93 4 7.5 5.65 11.75 1.89 4.89-3.22 8-3.77 12.57-.18 1.47.13 2.66 1.22 3.76 2 2.01 3.86 1.84 3.57 5.6-.36 4.58-2.92 8.78-3.76 13.27-1.08 5.75-.93 11.93 1.07 17.43 2.17 5.97 1.47 8.78-.42 14.76-.54 1.72-1.19 3.54-.76 5.37.67 2.84 3.35 4.57 4.07 7.47 1.5 6.11-2.41 11.88-2.5 17.9-.04 2.64.84 5.44 1.97 8.11h15.65c.6.01 1.18-.24 1.6-.69z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st3",
              d:
                "M673.57 404.28c.2-2.09.25-4.16-.04-6.17-.54-3.72-2.09-6.27-1.08-10.16.86-3.28 2.47-6.31 3.08-9.67 1.08-6.02-1.62-8.52-4.05-13.41-2.92-5.88 2.12-14.65 1.96-21.07-.09-3.56-1.14-7.04-.67-10.62.47-3.58 2-6.96 2.56-10.53.88-5.51-.07-10.35-3.97-14.39-2.46-2.55-4.46-3.68-2.58-7.42 1.17-2.34 3.02-4.22 3.92-6.72.39-1.08.66-2.19.72-3.31-1.57-2.02-3.21-2.99-5-2.99-5.21 0-11.38 6.89-17.69 57.95-3.43 27.76-5.21 55.88-5.22 56.16-.04.61.18 1.2.59 1.64.42.44 1 .69 1.6.69h25.87z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st7",
              d:
                "M822.19 354.4c-.91-.08-2.19.05-3.52.95.07.04.14.09.22.12-.71 4.43 2.35 8.15 4.42 12.27 1.13 2.25 1.7 3.97 1.11 6.52-.35 1.53-.98 2.04-.85 3.67.28 3.36 2.32 3.11 4.26 4.79 1.3 1.12.84 2.2.19 4.17-.67 2.02-1.77 3.88-2.42 5.92-.94 2.98-.96 5.14.74 7.7 1.45 2.19 2.87 2.21 2.74 5.4-.07 1.66-.45 3.24-.45 4.89l9.22-.38c.6-.02 1.17-.3 1.57-.76s.59-1.06.53-1.66c-.01-.13-1.32-12.93-3.92-25.69-4.96-24.35-10.27-27.59-13.84-27.91z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st15",
              d:
                "M171.62 398.85c-.87-7.94 4.08-14.56 4.22-22.31.04-2.24-.43-4.06-1.63-5.96-.69-1.1-1.85-2.08-2.3-3.32-.74-2.07.19-5.22.77-7.17 1.96-6.65 5.47-13.84 3.1-20.91-1-2.98-4.26-4.35-5.17-7.11-1.11-3.34 2.87-8.75 4.1-11.62 2.1-4.9 2.26-8.56-.82-12.84-5.18-7.2 3.1-12.83.9-20.15-.58-1.92-1.52-2.59-3.22-3.43-.65-.32-1.82-.08-2.23-.88-.09-.18-.08-.44 0-.72-4.73 1.01-9.8 10.77-15.05 61.75-3.05 29.65-4.63 59.69-4.64 59.99-.03.6.19 1.19.6 1.63.41.44.99.69 1.6.69h20.95c-.45-2.52-.9-5.05-1.18-7.64z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st1",
              d:
                "M237.35 383.42c.04-2.96.33-5.93.5-8.88.18-2.97.43-6 .3-8.98-.16-3.71-1.47-7.32-1.51-11.02-.05-5.05 3.08-8.81 1.11-13.89-.8-2.07-2.15-3.74-2.64-5.95-.94-4.21-.1-9.67.3-13.9.57-5.87 2.08-12.06.04-17.78-1.71-4.8-3.51-7.68-2.52-12.89.24-1.27.56-2.73.63-4.16-.59-.34-1.09-.34-1.49-.34-2.23 0-7.45 0-12.75 57.57-2.58 27.99-3.91 56.34-3.92 56.62-.01.3.1.59.3.81.21.22.5.34.8.34h19.62c1.04-2.98 2.15-5.95 2.05-9.16-.08-2.84-.86-5.5-.82-8.39z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st3",
              d:
                "M356.11 395.48c.61 0 1.19-.25 1.61-.7.42-.44.63-1.04.59-1.65-.02-.3-2.09-30.61-5.53-60.53-2.03-17.61-4.13-31.65-6.25-41.74-3.81-18.13-7.09-20.63-10.06-20.63-1.34 0-2.54.65-3.64 2.02.38 1 .88 2.02 1.4 3.11 2.73 5.68-1.68 11.59-.28 17.65.47 2.04 1.47 3.44 2.65 5.09 2.09 2.92 2.81 4.72 2.57 8.41-.38 5.84-.76 12.14-1.49 17.92-.82 6.43-2.87 12.82-2.71 19.36.15 6.25 3.87 11.54 3.4 17.85-.19 2.52-.78 4.99-.58 7.54.19 2.47 1.23 4.67 1.62 7.09.95 5.89.61 13.1-.37 19.2h17.07z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st4",
              d:
                "M339.5 296.71c-.58 1.58-1.19 2.98-1.88 4.41-.68 1.42-1.41 2.81-2.17 4.18a78.32 78.32 0 0 1-5.13 7.89 66.309 66.309 0 0 1-6.12 7.18c-2.2 2.25-4.55 4.37-7.07 6.27a55.824 55.824 0 0 1-16.7 8.75c-6.01 1.91-12.33 2.69-18.54 2.47a1.002 1.002 0 1 1-.05-2h.03c3-.27 5.99-.54 8.9-1.2 2.93-.55 5.78-1.42 8.55-2.46 2.78-1.02 5.44-2.32 8.02-3.76 2.57-1.46 4.97-3.19 7.3-4.99 4.66-3.65 8.66-8.07 12.23-12.81 1.78-2.38 3.39-4.88 4.89-7.44 1.5-2.54 2.88-5.27 3.98-7.87l.04-.08c.43-1.02 1.6-1.49 2.62-1.06a1.99 1.99 0 0 1 1.1 2.52zM830.8 371.46c.53 1.06 1.17 2.31 1.89 3.41.7 1.13 1.47 2.22 2.26 3.29 1.62 2.11 3.45 4.04 5.48 5.71 1 .87 2.11 1.57 3.2 2.32.56.34 1.15.63 1.73.96.29.16.57.33.87.47l.91.38c2.4 1.17 5.03 1.74 7.72 2.33l.1.02c.54.12.88.65.76 1.19-.1.46-.51.78-.96.79-2.92.06-5.96-.12-8.82-1.11l-1.08-.33c-.36-.13-.69-.29-1.04-.43-.69-.3-1.4-.59-2.07-.93l-1.97-1.13c-.67-.36-1.24-.86-1.86-1.29-2.43-1.8-4.58-3.94-6.4-6.33-.9-1.2-1.74-2.44-2.48-3.74-.37-.65-.72-1.31-1.05-1.99-.34-.69-.62-1.34-.92-2.14-.38-1.03.14-2.18 1.18-2.57.96-.36 2.03.08 2.48.97l.07.15zM442.53 297.54c-2.17 2.04-4.33 4.45-6.3 6.86-2.01 2.42-3.85 4.97-5.59 7.59-3.52 5.23-6.42 10.85-8.77 16.69-2.34 5.86-3.94 11.99-4.93 18.24-.9 6.26-1.16 12.63-.71 18.99v.01a1 1 0 1 1-1.99.2c-.86-6.46-1.02-13.05-.34-19.59.69-6.53 2.21-12.99 4.44-19.19 2.22-6.21 5.21-12.13 8.79-17.67 1.8-2.76 3.76-5.42 5.87-7.96 1.04-1.28 2.16-2.5 3.3-3.71 1.16-1.21 2.29-2.35 3.64-3.5.84-.72 2.1-.62 2.82.22.7.81.63 2.03-.14 2.75l-.09.07zM664.7 312.53c-.45.46-.98 1.02-1.45 1.56-.49.54-.98 1.1-1.44 1.68-.96 1.12-1.82 2.34-2.74 3.51-1.73 2.42-3.37 4.91-4.84 7.5-1.52 2.57-2.84 5.25-4.08 7.96l-1.74 4.13-1.49 4.23c-.54 1.4-.85 2.87-1.27 4.31-.39 1.45-.83 2.88-1.07 4.36l-.87 4.42c-.25 1.48-.38 2.98-.58 4.47-.48 2.98-.42 6-.61 9.01l-.06 1.13.03 1.13.07 2.27.15 4.54v.08a.997.997 0 0 1-.97 1.03c-.53.02-.97-.38-1.03-.9l-.45-4.62-.23-2.31-.11-1.16-.02-1.16c-.02-3.1-.18-6.22.15-9.32.13-1.55.19-3.11.37-4.66l.72-4.62c.2-1.55.6-3.06.96-4.58.38-1.51.65-3.06 1.17-4.54l1.4-4.48 1.72-4.37c1.25-2.87 2.59-5.71 4.14-8.44 1.52-2.75 3.28-5.35 5.11-7.91.97-1.25 1.92-2.5 2.97-3.68.51-.6 1.04-1.19 1.59-1.77.55-.59 1.09-1.13 1.74-1.73.81-.75 2.07-.71 2.82.09.73.78.71 2-.03 2.76l-.03.08z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st8",
              d:
                "M546.21 97.96c-.08.94-.38 1.78-.74 2.56-.37.79-.84 1.51-1.37 2.18-.53.67-1.13 1.29-1.79 1.85-.68.54-1.39 1.05-2.26 1.39a1.106 1.106 0 0 1-1.47-1.35l.01-.02c.26-.87.64-1.6 1.03-2.31.4-.7.85-1.37 1.32-2.01.48-.64.99-1.25 1.57-1.81.58-.57 1.21-1.11 2.01-1.56l.02-.01a1.128 1.128 0 0 1 1.67 1.09zM496.84 13.37c4.51-1.09 9.21-.82 13.77-.05 1.14.21 2.25.54 3.38.8 1.12.3 2.27.5 3.34.94 2.18.79 4.4 1.49 6.46 2.57 4.27 1.85 8.11 4.53 11.77 7.37l2.58 2.34 1.29 1.17 1.18 1.28 2.35 2.58c.73.9 1.41 1.85 2.11 2.77 5.54 7.47 9.02 16.41 10.18 25.6.56 4.59.68 9.25.11 13.84-.54 4.58-1.77 9.14-4.1 13.12-.27.46-.86.61-1.32.34a.961.961 0 0 1-.46-1v-.01c.79-4.38 1.63-8.58 2.07-12.88.45-4.29.25-8.63-.36-12.87l-.52-3.18c-.24-1.05-.55-2.08-.81-3.11-.46-2.1-1.32-4.08-2.04-6.09l-.28-.75-.35-.72-.71-1.44c-.49-.95-.89-1.95-1.46-2.86-1.15-1.8-2.15-3.71-3.53-5.37-.65-.85-1.26-1.73-1.93-2.56l-2.16-2.38-1.08-1.19-1.19-1.08-2.37-2.17-2.57-1.94-1.28-.97c-.43-.32-.91-.57-1.36-.86l-2.73-1.69c-.92-.55-1.91-.97-2.86-1.46-1.89-1.03-3.93-1.7-5.94-2.47-.99-.43-2.05-.62-3.08-.92-1.04-.26-2.07-.59-3.12-.8-4.24-.76-8.47-1.31-12.89-2.01h-.02a.972.972 0 0 1-.81-1.11c.07-.38.37-.69.74-.78zM447.28 85.81c-1.91-3.36-2.95-7.13-3.43-10.94-.24-1.91-.38-3.83-.42-5.76-.01-1.92.09-3.85.17-5.78.63-7.69 2.93-15.24 6.58-22.05 3.78-6.74 8.92-12.72 15.04-17.42 3.14-2.24 6.37-4.38 9.89-5.95 3.43-1.73 7.2-2.84 11.07-3 .56-.02 1.04.41 1.06.98.02.39-.19.75-.51.93l-.06.03c-3.27 1.86-6.6 3.03-9.78 4.7-3.24 1.53-6.18 3.58-9.04 5.7-5.54 4.49-10.27 9.97-13.7 16.21-3.41 6.24-5.53 13.17-6.31 20.25-.11 1.78-.23 3.56-.27 5.35 0 1.79.1 3.57.28 5.35.17 1.78.41 3.55.64 5.34.24 1.79.51 3.57.71 5.43v.02c.06.56-.35 1.06-.91 1.12-.43.04-.82-.17-1.01-.51zM534.08 111.49c-5.74 5.54-13.11 9.47-20.94 11.46a55.325 55.325 0 0 1-24.09.82c-3.99-.74-7.89-1.95-11.62-3.54a55.751 55.751 0 0 1-10.52-6.05c-.8-.62-1.64-1.18-2.41-1.85l-2.3-1.97-2.17-2.11c-.73-.7-1.38-1.48-2.05-2.23-2.62-3.06-4.85-6.49-6.27-10.26-.2-.52.07-1.11.59-1.3.41-.15.86-.02 1.13.29l.01.02c2.5 2.97 4.88 5.87 7.47 8.6.67.66 1.27 1.38 1.97 2.01l2.06 1.92 2.18 1.78c.72.6 1.51 1.1 2.26 1.66a57.42 57.42 0 0 0 9.78 5.45c3.45 1.44 7.05 2.49 10.71 3.24 7.33 1.41 14.99 1.33 22.29-.4 7.32-1.71 14.21-4.92 20.66-9.08h.01c.47-.3 1.09-.17 1.39.3.27.38.2.91-.14 1.24z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              className: "st1",
              d:
                "M499.64 108.7c-22.22 0-40.29-18.08-40.29-40.29s18.08-40.29 40.29-40.29 40.29 18.08 40.29 40.29-18.08 40.29-40.29 40.29zm0-76.58c-20.01 0-36.29 16.28-36.29 36.29s16.28 36.29 36.29 36.29 36.29-16.28 36.29-36.29-16.28-36.29-36.29-36.29z",
              __self: this,
            }),
          );
        };

        DonorsIcon.defaultProps = {
          id: "Vectors",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1000 500",
        };

        var Title = glamorous__WEBPACK_IMPORTED_MODULE_9___default.a.h2(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[
              "default"
            ],
          )(
            {
              color:
                _design_system__WEBPACK_IMPORTED_MODULE_18__["colors"].black,
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
              )(5.35),
              padding: "0 ".concat(
                Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"])(5),
              ),
            },
            _design_system__WEBPACK_IMPORTED_MODULE_18__["breakpoints"].ns,
            {
              padding: 0,
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
              )(6),
            },
          ),
        );
        var Item = glamorous__WEBPACK_IMPORTED_MODULE_9___default.a.li(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[
              "default"
            ],
          )(
            {
              width: "100%",
              fontWeight: 700,
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
              )(4.25),
              padding: "0 0 ".concat(
                Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"])(5.5),
                " 0",
              ),
            },
            _design_system__WEBPACK_IMPORTED_MODULE_18__["breakpoints"].l,
            {
              width: "".concat(100 / 5, "%"),
            },
          ),
        );
        var SectionTitle = glamorous__WEBPACK_IMPORTED_MODULE_9___default.a.h3({
          marginBottom: Object(
            _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
          )(6),
          fontSize: Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"])(
            4.75,
          ),
          color: _design_system__WEBPACK_IMPORTED_MODULE_18__["colors"].black,
          paddingBottom: Object(
            _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
          )(4),
          borderBottom: "1px solid ".concat(
            _design_system__WEBPACK_IMPORTED_MODULE_18__["colors"].black,
          ),
        });
        var IconContainer = glamorous__WEBPACK_IMPORTED_MODULE_9___default.a.div(
          {
            maxWidth: 450,
            margin: "".concat(
              Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"])(5),
              " auto",
            ),
          },
        );

        var App =
          /*#__PURE__*/
          (function(_React$Component) {
            Object(
              _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[
                "default"
              ],
            )(App, _React$Component);

            function App() {
              Object(
                _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ],
              )(this, App);

              return Object(
                _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ],
              )(
                this,
                Object(
                  _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
                    "default"
                  ],
                )(App).apply(this, arguments),
              );
            }

            Object(
              _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[
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
                key: "cardList",
                value: function cardList(list, key) {
                  return list.map(function(_ref, index) {
                    var name = _ref.name,
                      role = _ref.role,
                      filename = _ref.filename;
                    var size =
                      key === "$100M+" ? "w-30" : "w-100 w-50-m w-25-l";
                    return react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                      "div",
                      {
                        className: "".concat(size, " pa3-m pa4-l"),
                        key: "person-".concat(filename, "-").concat(index),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 59,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                        _components_PersonCard__WEBPACK_IMPORTED_MODULE_14__[
                          "default"
                        ],
                        {
                          name: name,
                          role: role,
                          filename: filename,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63,
                          },
                          __self: this,
                        },
                      ),
                    );
                  });
                },
              },
              {
                key: "list",
                value: function list(_list) {
                  return _list.map(function(name, index) {
                    return react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                      Item,
                      {
                        key: "list".concat(name, "-").concat(index),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 71,
                        },
                        __self: this,
                      },
                      name,
                    );
                  });
                },
              },
              {
                key: "listSections",
                value: function listSections(list) {
                  var _this = this;

                  var results = []; // Iterate over the list sections

                  _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(
                    list,
                  ).forEach(function(_ref2) {
                    var _ref3 = Object(
                        _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                          "default"
                        ],
                      )(_ref2, 2),
                      key = _ref3[0],
                      person = _ref3[1];

                    results.push(
                      react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                        _components_Wrapper__WEBPACK_IMPORTED_MODULE_15__[
                          "default"
                        ],
                        {
                          className: "ph3 ph0-l",
                          key: "wrap-".concat(key),
                          marginBottom: Object(
                            _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
                          )(7),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                          "div",
                          {
                            className: "ph3-m ph4-l",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 86,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                            SectionTitle,
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 87,
                              },
                              __self: this,
                            },
                            key,
                          ),
                        ),
                        react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                          "div",
                          {
                            className: "flex flex-wrap",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 89,
                            },
                            __self: this,
                          },
                          _this.cardList(person, key),
                        ),
                      ),
                    );
                  });

                  return results;
                },
              },
              {
                key: "render",
                value: function render() {
                  return react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                    _components_Analytics__WEBPACK_IMPORTED_MODULE_21__[
                      "default"
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                      next_head__WEBPACK_IMPORTED_MODULE_10___default.a,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 100,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                        "title",
                        {
                          key: "head-title",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 101,
                          },
                          __self: this,
                        },
                        _content_donors_seo__WEBPACK_IMPORTED_MODULE_17__[
                          "default"
                        ].title,
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                      _components_HeadMeta__WEBPACK_IMPORTED_MODULE_13__[
                        "default"
                      ],
                      {
                        path: "/donors",
                        title:
                          _content_donors_seo__WEBPACK_IMPORTED_MODULE_17__[
                            "default"
                          ].title,
                        description:
                          _content_donors_seo__WEBPACK_IMPORTED_MODULE_17__[
                            "default"
                          ].description,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                      _components_Wrapper__WEBPACK_IMPORTED_MODULE_15__[
                        "default"
                      ],
                      {
                        className: "center tc ph3 ph0-l",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 108,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                        Title,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 109,
                          },
                          __self: this,
                        },
                        "Meet our generous donors",
                      ),
                      react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                        IconContainer,
                        {
                          className: "responsive",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 110,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                          DonorsIcon,
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 111,
                            },
                            __self: this,
                          },
                        ),
                      ),
                    ),
                    this.listSections(
                      _content_donors_donors_list__WEBPACK_IMPORTED_MODULE_16__[
                        "default"
                      ],
                    ),
                    react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                      _components_Wrapper__WEBPACK_IMPORTED_MODULE_15__[
                        "default"
                      ],
                      {
                        className: "ph3 ph0-l",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 117,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                        _components_DonateHero__WEBPACK_IMPORTED_MODULE_12__[
                          "default"
                        ],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 118,
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
          })(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

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

    /***/ 6:
      /*!********************************!*\
  !*** multi ./pages/donors.tsx ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/jklb/dev/givecrypto/website/pages/donors.tsx */ "./pages/donors.tsx",
        );

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

    /***/ "core-js/library/fn/object/entries":
      /*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/entries");

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
//# sourceMappingURL=donors.js.map
