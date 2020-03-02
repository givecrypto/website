(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["static/development/pages/report.js"],
  {
    /***/ "./components/Analytics.tsx":
      /*!**********************************!*\
  !*** ./components/Analytics.tsx ***!
  \**********************************/
      /*! exports provided: initGA, logPageView, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function(process) {
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
            /*! react */ "./node_modules/react/index.js",
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_5__,
          );
          /* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! react-ga */ "./node_modules/react-ga/dist/esm/index.js",
          );

          var _jsxFileName =
            "/Users/jklb/dev/givecrypto/website/components/Analytics.tsx";

          var GOOGLE_PROPERTY_ID =
            (process && process.env && process.env.GOOGLE_PROPERTY_ID) ||
            "UA-136549352-1";
          var initGA = function initGA() {
            if (GOOGLE_PROPERTY_ID) {
              react_ga__WEBPACK_IMPORTED_MODULE_6__["default"].initialize(
                GOOGLE_PROPERTY_ID,
              );
            }
          };
          var logPageView = function logPageView() {
            if (GOOGLE_PROPERTY_ID) {
              react_ga__WEBPACK_IMPORTED_MODULE_6__["default"].set({
                page: window.location.pathname,
              });
              react_ga__WEBPACK_IMPORTED_MODULE_6__["default"].pageview(
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

          /* harmony default export */ __webpack_exports__[
            "default"
          ] = Analytics;
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js",
          ),
        ));

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
          /*! next/head */ "./node_modules/next-server/dist/lib/head.js",
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_5__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js",
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
          /*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js",
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

          var Container = glamorous__WEBPACK_IMPORTED_MODULE_4__["default"].div(
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
          var WrapperInner = glamorous__WEBPACK_IMPORTED_MODULE_4__[
            "default"
          ].section(
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

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
      /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js",
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
          /*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js",
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
          /*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js",
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
          /*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js",
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
          /*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js",
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
          /*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js",
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
          /*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js",
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
          /*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js",
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
          /*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
      /*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/set */ "./node_modules/core-js/library/fn/set.js",
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
          /*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js",
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
          /*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js",
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _arrayWithoutHoles;
          },
        );
        /* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js",
        );
        /* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__,
        );

        function _arrayWithoutHoles(arr) {
          if (
            _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)
          ) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          }
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

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _iterableToArray;
          },
        );
        /* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js",
        );
        /* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js",
        );
        /* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__,
        );

        function _iterableToArray(iter) {
          if (
            _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(
              Object(iter),
            ) ||
            Object.prototype.toString.call(iter) === "[object Arguments]"
          )
            return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(
              iter,
            );
        }

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _nonIterableSpread;
          },
        );
        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance",
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

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return _toConsumableArray;
          },
        );
        /* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js",
        );
        /* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js",
        );
        /* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js",
        );

        function _toConsumableArray(arr) {
          return (
            Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(
              arr,
            ) ||
            Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(
              arr,
            ) ||
            Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])()
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

    /***/ "./node_modules/core-js/library/fn/array/from.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js",
        );
        __webpack_require__(
          /*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js",
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Array.from;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/array/is-array.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js",
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Array.isArray;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/is-iterable.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js",
        );
        __webpack_require__(
          /*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js",
        );
        module.exports = __webpack_require__(
          /*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js",
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/assign.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js",
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Object.assign;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/create.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js",
        );
        var $Object = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Object;
        module.exports = function create(P, D) {
          return $Object.create(P, D);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/define-property.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js",
        );
        var $Object = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Object;
        module.exports = function defineProperty(it, key, desc) {
          return $Object.defineProperty(it, key, desc);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
      /*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js",
        );
        var $Object = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Object;
        module.exports = function getOwnPropertyDescriptor(it, key) {
          return $Object.getOwnPropertyDescriptor(it, key);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js",
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Object.getOwnPropertySymbols;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js",
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Object.getPrototypeOf;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/keys.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js",
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Object.keys;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js",
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Object.setPrototypeOf;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/set.js":
      /*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js",
        );
        __webpack_require__(
          /*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js",
        );
        __webpack_require__(
          /*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js",
        );
        __webpack_require__(
          /*! ../modules/es6.set */ "./node_modules/core-js/library/modules/es6.set.js",
        );
        __webpack_require__(
          /*! ../modules/es7.set.to-json */ "./node_modules/core-js/library/modules/es7.set.to-json.js",
        );
        __webpack_require__(
          /*! ../modules/es7.set.of */ "./node_modules/core-js/library/modules/es7.set.of.js",
        );
        __webpack_require__(
          /*! ../modules/es7.set.from */ "./node_modules/core-js/library/modules/es7.set.from.js",
        );
        module.exports = __webpack_require__(
          /*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Set;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/symbol/index.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js",
        );
        __webpack_require__(
          /*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js",
        );
        __webpack_require__(
          /*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js",
        );
        __webpack_require__(
          /*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js",
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js",
        ).Symbol;

        /***/
      },

    /***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js",
        );
        __webpack_require__(
          /*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js",
        );
        module.exports = __webpack_require__(
          /*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js",
        ).f("iterator");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_a-function.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(it) {
          if (typeof it != "function")
            throw TypeError(it + " is not a function!");
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function() {
          /* empty */
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_an-instance.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(it, Constructor, name, forbiddenField) {
          if (
            !(it instanceof Constructor) ||
            (forbiddenField !== undefined && forbiddenField in it)
          ) {
            throw TypeError(name + ": incorrect invocation!");
          }
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_an-object.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js",
        );
        module.exports = function(it) {
          if (!isObject(it)) throw TypeError(it + " is not an object!");
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var forOf = __webpack_require__(
          /*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js",
        );

        module.exports = function(iter, ITERATOR) {
          var result = [];
          forOf(iter, false, result.push, result, ITERATOR);
          return result;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_array-includes.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js",
        );
        var toLength = __webpack_require__(
          /*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js",
        );
        var toAbsoluteIndex = __webpack_require__(
          /*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js",
        );
        module.exports = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++)
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el) return IS_INCLUDES || index || 0;
                }
            return !IS_INCLUDES && -1;
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_array-methods.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 0 -> Array#forEach
        // 1 -> Array#map
        // 2 -> Array#filter
        // 3 -> Array#some
        // 4 -> Array#every
        // 5 -> Array#find
        // 6 -> Array#findIndex
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js",
        );
        var IObject = __webpack_require__(
          /*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js",
        );
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js",
        );
        var toLength = __webpack_require__(
          /*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js",
        );
        var asc = __webpack_require__(
          /*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js",
        );
        module.exports = function(TYPE, $create) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          var create = $create || asc;
          return function($this, callbackfn, that) {
            var O = toObject($this);
            var self = IObject(O);
            var f = ctx(callbackfn, that, 3);
            var length = toLength(self.length);
            var index = 0;
            var result = IS_MAP
              ? create($this, length)
              : IS_FILTER
              ? create($this, 0)
              : undefined;
            var val, res;
            for (; length > index; index++)
              if (NO_HOLES || index in self) {
                val = self[index];
                res = f(val, index, O);
                if (TYPE) {
                  if (IS_MAP) result[index] = res;
                  // map
                  else if (res)
                    switch (TYPE) {
                      case 3:
                        return true; // some
                      case 5:
                        return val; // find
                      case 6:
                        return index; // findIndex
                      case 2:
                        result.push(val); // filter
                    }
                  else if (IS_EVERY) return false; // every
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js",
        );
        var isArray = __webpack_require__(
          /*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js",
        );
        var SPECIES = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        )("species");

        module.exports = function(original) {
          var C;
          if (isArray(original)) {
            C = original.constructor;
            // cross-realm fallback
            if (typeof C == "function" && (C === Array || isArray(C.prototype)))
              C = undefined;
            if (isObject(C)) {
              C = C[SPECIES];
              if (C === null) C = undefined;
            }
          }
          return C === undefined ? Array : C;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_array-species-create.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
        var speciesConstructor = __webpack_require__(
          /*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js",
        );

        module.exports = function(original, length) {
          return new (speciesConstructor(original))(length);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_classof.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__(
          /*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js",
        );
        var TAG = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        )("toStringTag");
        // ES3 wrong here
        var ARG =
          cof(
            (function() {
              return arguments;
            })(),
          ) == "Arguments";

        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (e) {
            /* empty */
          }
        };

        module.exports = function(it) {
          var O, T, B;
          return it === undefined
            ? "Undefined"
            : it === null
            ? "Null"
            : // @@toStringTag case
            typeof (T = tryGet((O = Object(it)), TAG)) == "string"
            ? T
            : // builtinTag case
            ARG
            ? cof(O)
            : // ES3 arguments fallback
            (B = cof(O)) == "Object" && typeof O.callee == "function"
            ? "Arguments"
            : B;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_cof.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var toString = {}.toString;

        module.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_collection-strong.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var dP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
        ).f;
        var create = __webpack_require__(
          /*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js",
        );
        var redefineAll = __webpack_require__(
          /*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js",
        );
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js",
        );
        var anInstance = __webpack_require__(
          /*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js",
        );
        var forOf = __webpack_require__(
          /*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js",
        );
        var $iterDefine = __webpack_require__(
          /*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js",
        );
        var step = __webpack_require__(
          /*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js",
        );
        var setSpecies = __webpack_require__(
          /*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js",
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
        );
        var fastKey = __webpack_require__(
          /*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js",
        ).fastKey;
        var validate = __webpack_require__(
          /*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js",
        );
        var SIZE = DESCRIPTORS ? "_s" : "size";

        var getEntry = function(that, key) {
          // fast case
          var index = fastKey(key);
          var entry;
          if (index !== "F") return that._i[index];
          // frozen object case
          for (entry = that._f; entry; entry = entry.n) {
            if (entry.k == key) return entry;
          }
        };

        module.exports = {
          getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
            var C = wrapper(function(that, iterable) {
              anInstance(that, C, NAME, "_i");
              that._t = NAME; // collection type
              that._i = create(null); // index
              that._f = undefined; // first entry
              that._l = undefined; // last entry
              that[SIZE] = 0; // size
              if (iterable != undefined)
                forOf(iterable, IS_MAP, that[ADDER], that);
            });
            redefineAll(C.prototype, {
              // 23.1.3.1 Map.prototype.clear()
              // 23.2.3.2 Set.prototype.clear()
              clear: function clear() {
                for (
                  var that = validate(this, NAME),
                    data = that._i,
                    entry = that._f;
                  entry;
                  entry = entry.n
                ) {
                  entry.r = true;
                  if (entry.p) entry.p = entry.p.n = undefined;
                  delete data[entry.i];
                }
                that._f = that._l = undefined;
                that[SIZE] = 0;
              },
              // 23.1.3.3 Map.prototype.delete(key)
              // 23.2.3.4 Set.prototype.delete(value)
              delete: function(key) {
                var that = validate(this, NAME);
                var entry = getEntry(that, key);
                if (entry) {
                  var next = entry.n;
                  var prev = entry.p;
                  delete that._i[entry.i];
                  entry.r = true;
                  if (prev) prev.n = next;
                  if (next) next.p = prev;
                  if (that._f == entry) that._f = next;
                  if (that._l == entry) that._l = prev;
                  that[SIZE]--;
                }
                return !!entry;
              },
              // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
              // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
              forEach: function forEach(callbackfn /* , that = undefined */) {
                validate(this, NAME);
                var f = ctx(
                  callbackfn,
                  arguments.length > 1 ? arguments[1] : undefined,
                  3,
                );
                var entry;
                while ((entry = entry ? entry.n : this._f)) {
                  f(entry.v, entry.k, this);
                  // revert to the last existing entry
                  while (entry && entry.r) entry = entry.p;
                }
              },
              // 23.1.3.7 Map.prototype.has(key)
              // 23.2.3.7 Set.prototype.has(value)
              has: function has(key) {
                return !!getEntry(validate(this, NAME), key);
              },
            });
            if (DESCRIPTORS)
              dP(C.prototype, "size", {
                get: function() {
                  return validate(this, NAME)[SIZE];
                },
              });
            return C;
          },
          def: function(that, key, value) {
            var entry = getEntry(that, key);
            var prev, index;
            // change existing entry
            if (entry) {
              entry.v = value;
              // create new entry
            } else {
              that._l = entry = {
                i: (index = fastKey(key, true)), // <- index
                k: key, // <- key
                v: value, // <- value
                p: (prev = that._l), // <- previous entry
                n: undefined, // <- next entry
                r: false, // <- removed
              };
              if (!that._f) that._f = entry;
              if (prev) prev.n = entry;
              that[SIZE]++;
              // add to index
              if (index !== "F") that._i[index] = entry;
            }
            return that;
          },
          getEntry: getEntry,
          setStrong: function(C, NAME, IS_MAP) {
            // add .keys, .values, .entries, [@@iterator]
            // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
            $iterDefine(
              C,
              NAME,
              function(iterated, kind) {
                this._t = validate(iterated, NAME); // target
                this._k = kind; // kind
                this._l = undefined; // previous
              },
              function() {
                var that = this;
                var kind = that._k;
                var entry = that._l;
                // revert to the last existing entry
                while (entry && entry.r) entry = entry.p;
                // get next entry
                if (
                  !that._t ||
                  !(that._l = entry = entry ? entry.n : that._t._f)
                ) {
                  // or finish the iteration
                  that._t = undefined;
                  return step(1);
                }
                // return step by kind
                if (kind == "keys") return step(0, entry.k);
                if (kind == "values") return step(0, entry.v);
                return step(0, [entry.k, entry.v]);
              },
              IS_MAP ? "entries" : "values",
              !IS_MAP,
              true,
            );

            // add [@@species], 23.1.2.2, 23.2.2.2
            setSpecies(NAME);
          },
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var classof = __webpack_require__(
          /*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js",
        );
        var from = __webpack_require__(
          /*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js",
        );
        module.exports = function(NAME) {
          return function toJSON() {
            if (classof(this) != NAME)
              throw TypeError(NAME + "#toJSON isn't generic");
            return from(this);
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_collection.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js",
        );
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );
        var meta = __webpack_require__(
          /*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js",
        );
        var fails = __webpack_require__(
          /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js",
        );
        var hide = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js",
        );
        var redefineAll = __webpack_require__(
          /*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js",
        );
        var forOf = __webpack_require__(
          /*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js",
        );
        var anInstance = __webpack_require__(
          /*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js",
        );
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js",
        );
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js",
        );
        var dP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
        ).f;
        var each = __webpack_require__(
          /*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js",
        )(0);
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
        );

        module.exports = function(
          NAME,
          wrapper,
          methods,
          common,
          IS_MAP,
          IS_WEAK,
        ) {
          var Base = global[NAME];
          var C = Base;
          var ADDER = IS_MAP ? "set" : "add";
          var proto = C && C.prototype;
          var O = {};
          if (
            !DESCRIPTORS ||
            typeof C != "function" ||
            !(
              IS_WEAK ||
              (proto.forEach &&
                !fails(function() {
                  new C().entries().next();
                }))
            )
          ) {
            // create collection constructor
            C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
            redefineAll(C.prototype, methods);
            meta.NEED = true;
          } else {
            C = wrapper(function(target, iterable) {
              anInstance(target, C, NAME, "_c");
              target._c = new Base();
              if (iterable != undefined)
                forOf(iterable, IS_MAP, target[ADDER], target);
            });
            each(
              "add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(
                ",",
              ),
              function(KEY) {
                var IS_ADDER = KEY == "add" || KEY == "set";
                if (KEY in proto && !(IS_WEAK && KEY == "clear"))
                  hide(C.prototype, KEY, function(a, b) {
                    anInstance(this, C, KEY);
                    if (!IS_ADDER && IS_WEAK && !isObject(a))
                      return KEY == "get" ? undefined : false;
                    var result = this._c[KEY](a === 0 ? 0 : a, b);
                    return IS_ADDER ? this : result;
                  });
              },
            );
            IS_WEAK ||
              dP(C.prototype, "size", {
                get: function() {
                  return this._c.size;
                },
              });
          }

          setToStringTag(C, NAME);

          O[NAME] = C;
          $export($export.G + $export.W + $export.F, O);

          if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

          return C;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_core.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var core = (module.exports = { version: "2.6.9" });
        if (typeof __e == "number") __e = core; // eslint-disable-line no-undef

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_create-property.js":
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var $defineProperty = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
        );
        var createDesc = __webpack_require__(
          /*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js",
        );

        module.exports = function(object, index, value) {
          if (index in object)
            $defineProperty.f(object, index, createDesc(0, value));
          else object[index] = value;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_ctx.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__(
          /*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js",
        );
        module.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function(/* ...args */) {
            return fn.apply(that, arguments);
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_defined.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it);
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_descriptors.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__(
          /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js",
        )(function() {
          return (
            Object.defineProperty({}, "a", {
              get: function() {
                return 7;
              },
            }).a != 7
          );
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_dom-create.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js",
        );
        var document = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js",
        ).document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
          return is ? document.createElement(it) : {};
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // IE 8- don't enum bug keys
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ",",
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_enum-keys.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // all enumerable object keys, includes symbols
        var getKeys = __webpack_require__(
          /*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js",
        );
        var gOPS = __webpack_require__(
          /*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js",
        );
        var pIE = __webpack_require__(
          /*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js",
        );
        module.exports = function(it) {
          var result = getKeys(it);
          var getSymbols = gOPS.f;
          if (getSymbols) {
            var symbols = getSymbols(it);
            var isEnum = pIE.f;
            var i = 0;
            var key;
            while (symbols.length > i)
              if (isEnum.call(it, (key = symbols[i++]))) result.push(key);
          }
          return result;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_export.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js",
        );
        var core = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js",
        );
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js",
        );
        var hide = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js",
        );
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js",
        );
        var PROTOTYPE = "prototype";

        var $export = function(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var IS_WRAP = type & $export.W;
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE];
          var target = IS_GLOBAL
            ? global
            : IS_STATIC
            ? global[name]
            : (global[name] || {})[PROTOTYPE];
          var key, own, out;
          if (IS_GLOBAL) source = name;
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            if (own && has(exports, key)) continue;
            // export native or passed
            out = own ? target[key] : source[key];
            // prevent global pollution for namespaces
            exports[key] =
              IS_GLOBAL && typeof target[key] != "function"
                ? source[key]
                : // bind timers to global for call from export context
                IS_BIND && own
                ? ctx(out, global)
                : // wrap global constructors for prevent change them in library
                IS_WRAP && target[key] == out
                ? (function(C) {
                    var F = function(a, b, c) {
                      if (this instanceof C) {
                        switch (arguments.length) {
                          case 0:
                            return new C();
                          case 1:
                            return new C(a);
                          case 2:
                            return new C(a, b);
                        }
                        return new C(a, b, c);
                      }
                      return C.apply(this, arguments);
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                    // make static versions for prototype methods
                  })(out)
                : IS_PROTO && typeof out == "function"
                ? ctx(Function.call, out)
                : out;
            // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
            if (IS_PROTO) {
              (exports.virtual || (exports.virtual = {}))[key] = out;
              // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
              if (type & $export.R && expProto && !expProto[key])
                hide(expProto, key, out);
            }
          }
        };
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_fails.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_for-of.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js",
        );
        var call = __webpack_require__(
          /*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js",
        );
        var isArrayIter = __webpack_require__(
          /*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js",
        );
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js",
        );
        var toLength = __webpack_require__(
          /*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js",
        );
        var getIterFn = __webpack_require__(
          /*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js",
        );
        var BREAK = {};
        var RETURN = {};
        var exports = (module.exports = function(
          iterable,
          entries,
          fn,
          that,
          ITERATOR,
        ) {
          var iterFn = ITERATOR
            ? function() {
                return iterable;
              }
            : getIterFn(iterable);
          var f = ctx(fn, that, entries ? 2 : 1);
          var index = 0;
          var length, step, iterator, result;
          if (typeof iterFn != "function")
            throw TypeError(iterable + " is not iterable!");
          // fast case for arrays with default iterator
          if (isArrayIter(iterFn))
            for (length = toLength(iterable.length); length > index; index++) {
              result = entries
                ? f(anObject((step = iterable[index]))[0], step[1])
                : f(iterable[index]);
              if (result === BREAK || result === RETURN) return result;
            }
          else
            for (
              iterator = iterFn.call(iterable);
              !(step = iterator.next()).done;

            ) {
              result = call(iterator, f, step.value, entries);
              if (result === BREAK || result === RETURN) return result;
            }
        });
        exports.BREAK = BREAK;
        exports.RETURN = RETURN;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_global.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = (module.exports =
          typeof window != "undefined" && window.Math == Math
            ? window
            : typeof self != "undefined" && self.Math == Math
            ? self
            : // eslint-disable-next-line no-new-func
              Function("return this")());
        if (typeof __g == "number") __g = global; // eslint-disable-line no-undef

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_has.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_hide.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
        );
        var createDesc = __webpack_require__(
          /*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js",
        );
        module.exports = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
        )
          ? function(object, key, value) {
              return dP.f(object, key, createDesc(1, value));
            }
          : function(object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_html.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var document = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js",
        ).document;
        module.exports = document && document.documentElement;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          !__webpack_require__(
            /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
          ) &&
          !__webpack_require__(
            /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js",
          )(function() {
            return (
              Object.defineProperty(
                __webpack_require__(
                  /*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js",
                )("div"),
                "a",
                {
                  get: function() {
                    return 7;
                  },
                },
              ).a != 7
            );
          });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iobject.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__(
          /*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js",
        );
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function(it) {
              return cof(it) == "String" ? it.split("") : Object(it);
            };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // check on default Array iterator
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js",
        );
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        )("iterator");
        var ArrayProto = Array.prototype;

        module.exports = function(it) {
          return (
            it !== undefined &&
            (Iterators.Array === it || ArrayProto[ITERATOR] === it)
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_is-array.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.2.2 IsArray(argument)
        var cof = __webpack_require__(
          /*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js",
        );
        module.exports =
          Array.isArray ||
          function isArray(arg) {
            return cof(arg) == "Array";
          };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_is-object.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(it) {
          return typeof it === "object"
            ? it !== null
            : typeof it === "function";
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iter-call.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // call something on iterator step with safe closing on error
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js",
        );
        module.exports = function(iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (e) {
            var ret = iterator["return"];
            if (ret !== undefined) anObject(ret.call(iterator));
            throw e;
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iter-create.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var create = __webpack_require__(
          /*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js",
        );
        var descriptor = __webpack_require__(
          /*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js",
        );
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js",
        );
        var IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js",
        )(
          IteratorPrototype,
          __webpack_require__(
            /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
          )("iterator"),
          function() {
            return this;
          },
        );

        module.exports = function(Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, {
            next: descriptor(1, next),
          });
          setToStringTag(Constructor, NAME + " Iterator");
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iter-define.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var LIBRARY = __webpack_require__(
          /*! ./_library */ "./node_modules/core-js/library/modules/_library.js",
        );
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );
        var redefine = __webpack_require__(
          /*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js",
        );
        var hide = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js",
        );
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js",
        );
        var $iterCreate = __webpack_require__(
          /*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js",
        );
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js",
        );
        var getPrototypeOf = __webpack_require__(
          /*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js",
        );
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        )("iterator");
        var BUGGY = !([].keys && "next" in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = "@@iterator";
        var KEYS = "keys";
        var VALUES = "values";

        var returnThis = function() {
          return this;
        };

        module.exports = function(
          Base,
          NAME,
          Constructor,
          next,
          DEFAULT,
          IS_SET,
          FORCED,
        ) {
          $iterCreate(Constructor, NAME, next);
          var getMethod = function(kind) {
            if (!BUGGY && kind in proto) return proto[kind];
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };
              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }
            return function entries() {
              return new Constructor(this, kind);
            };
          };
          var TAG = NAME + " Iterator";
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native =
            proto[ITERATOR] ||
            proto[FF_ITERATOR] ||
            (DEFAULT && proto[DEFAULT]);
          var $default = $native || getMethod(DEFAULT);
          var $entries = DEFAULT
            ? !DEF_VALUES
              ? $default
              : getMethod("entries")
            : undefined;
          var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype;
          // Fix native
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (
              IteratorPrototype !== Object.prototype &&
              IteratorPrototype.next
            ) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true);
              // fix for some old engines
              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
                hide(IteratorPrototype, ITERATOR, returnThis);
            }
          }
          // fix Array#{values, @@iterator}.name in V8 / FF
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
          // Define iterator
          if (
            (!LIBRARY || FORCED) &&
            (BUGGY || VALUES_BUG || !proto[ITERATOR])
          ) {
            hide(proto, ITERATOR, $default);
          }
          // Plug for library
          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries,
            };
            if (FORCED)
              for (key in methods) {
                if (!(key in proto)) redefine(proto, key, methods[key]);
              }
            else
              $export(
                $export.P + $export.F * (BUGGY || VALUES_BUG),
                NAME,
                methods,
              );
          }
          return methods;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iter-detect.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        )("iterator");
        var SAFE_CLOSING = false;

        try {
          var riter = [7][ITERATOR]();
          riter["return"] = function() {
            SAFE_CLOSING = true;
          };
          // eslint-disable-next-line no-throw-literal
          Array.from(riter, function() {
            throw 2;
          });
        } catch (e) {
          /* empty */
        }

        module.exports = function(exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING) return false;
          var safe = false;
          try {
            var arr = [7];
            var iter = arr[ITERATOR]();
            iter.next = function() {
              return { done: (safe = true) };
            };
            arr[ITERATOR] = function() {
              return iter;
            };
            exec(arr);
          } catch (e) {
            /* empty */
          }
          return safe;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iter-step.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(done, value) {
          return { value: value, done: !!done };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_iterators.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = {};

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_library.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = true;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_meta.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var META = __webpack_require__(
          /*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js",
        )("meta");
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js",
        );
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js",
        );
        var setDesc = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
        ).f;
        var id = 0;
        var isExtensible =
          Object.isExtensible ||
          function() {
            return true;
          };
        var FREEZE = !__webpack_require__(
          /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js",
        )(function() {
          return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
          setDesc(it, META, {
            value: {
              i: "O" + ++id, // object ID
              w: {}, // weak collections IDs
            },
          });
        };
        var fastKey = function(it, create) {
          // return primitive with prefix
          if (!isObject(it))
            return typeof it == "symbol"
              ? it
              : (typeof it == "string" ? "S" : "P") + it;
          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return "F";
            // not necessary to add metadata
            if (!create) return "E";
            // add missing metadata
            setMeta(it);
            // return object ID
          }
          return it[META].i;
        };
        var getWeak = function(it, create) {
          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return true;
            // not necessary to add metadata
            if (!create) return false;
            // add missing metadata
            setMeta(it);
            // return hash weak collections IDs
          }
          return it[META].w;
        };
        // add metadata on freeze-family methods calling
        var onFreeze = function(it) {
          if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
            setMeta(it);
          return it;
        };
        var meta = (module.exports = {
          KEY: META,
          NEED: false,
          fastKey: fastKey,
          getWeak: getWeak,
          onFreeze: onFreeze,
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-assign.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        // 19.1.2.1 Object.assign(target, source, ...)
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
        );
        var getKeys = __webpack_require__(
          /*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js",
        );
        var gOPS = __webpack_require__(
          /*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js",
        );
        var pIE = __webpack_require__(
          /*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js",
        );
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js",
        );
        var IObject = __webpack_require__(
          /*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js",
        );
        var $assign = Object.assign;

        // should work with symbols and should have deterministic property order (V8 bug)
        module.exports =
          !$assign ||
          __webpack_require__(
            /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js",
          )(function() {
            var A = {};
            var B = {};
            // eslint-disable-next-line no-undef
            var S = Symbol();
            var K = "abcdefghijklmnopqrst";
            A[S] = 7;
            K.split("").forEach(function(k) {
              B[k] = k;
            });
            return (
              $assign({}, A)[S] != 7 ||
              Object.keys($assign({}, B)).join("") != K
            );
          })
            ? function assign(target, source) {
                // eslint-disable-line no-unused-vars
                var T = toObject(target);
                var aLen = arguments.length;
                var index = 1;
                var getSymbols = gOPS.f;
                var isEnum = pIE.f;
                while (aLen > index) {
                  var S = IObject(arguments[index++]);
                  var keys = getSymbols
                    ? getKeys(S).concat(getSymbols(S))
                    : getKeys(S);
                  var length = keys.length;
                  var j = 0;
                  var key;
                  while (length > j) {
                    key = keys[j++];
                    if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
                  }
                }
                return T;
              }
            : $assign;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-create.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js",
        );
        var dPs = __webpack_require__(
          /*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js",
        );
        var enumBugKeys = __webpack_require__(
          /*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js",
        );
        var IE_PROTO = __webpack_require__(
          /*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js",
        )("IE_PROTO");
        var Empty = function() {
          /* empty */
        };
        var PROTOTYPE = "prototype";

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = __webpack_require__(
            /*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js",
          )("iframe");
          var i = enumBugKeys.length;
          var lt = "<";
          var gt = ">";
          var iframeDocument;
          iframe.style.display = "none";
          __webpack_require__(
            /*! ./_html */ "./node_modules/core-js/library/modules/_html.js",
          ).appendChild(iframe);
          iframe.src = "javascript:"; // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(
            lt + "script" + gt + "document.F=Object" + lt + "/script" + gt,
          );
          iframeDocument.close();
          createDict = iframeDocument.F;
          while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
          return createDict();
        };

        module.exports =
          Object.create ||
          function create(O, Properties) {
            var result;
            if (O !== null) {
              Empty[PROTOTYPE] = anObject(O);
              result = new Empty();
              Empty[PROTOTYPE] = null;
              // add "__proto__" for Object.getPrototypeOf polyfill
              result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
          };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-dp.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js",
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js",
        );
        var toPrimitive = __webpack_require__(
          /*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js",
        );
        var dP = Object.defineProperty;

        exports.f = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
        )
          ? Object.defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return dP(O, P, Attributes);
                } catch (e) {
                  /* empty */
                }
              if ("get" in Attributes || "set" in Attributes)
                throw TypeError("Accessors not supported!");
              if ("value" in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-dps.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
        );
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js",
        );
        var getKeys = __webpack_require__(
          /*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js",
        );

        module.exports = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
        )
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O);
              var keys = getKeys(Properties);
              var length = keys.length;
              var i = 0;
              var P;
              while (length > i) dP.f(O, (P = keys[i++]), Properties[P]);
              return O;
            };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-gopd.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var pIE = __webpack_require__(
          /*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js",
        );
        var createDesc = __webpack_require__(
          /*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js",
        );
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js",
        );
        var toPrimitive = __webpack_require__(
          /*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js",
        );
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js",
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js",
        );
        var gOPD = Object.getOwnPropertyDescriptor;

        exports.f = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
        )
          ? gOPD
          : function getOwnPropertyDescriptor(O, P) {
              O = toIObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE)
                try {
                  return gOPD(O, P);
                } catch (e) {
                  /* empty */
                }
              if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
            };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js",
        );
        var gOPN = __webpack_require__(
          /*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js",
        ).f;
        var toString = {}.toString;

        var windowNames =
          typeof window == "object" && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];

        var getWindowNames = function(it) {
          try {
            return gOPN(it);
          } catch (e) {
            return windowNames.slice();
          }
        };

        module.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == "[object Window]"
            ? getWindowNames(it)
            : gOPN(toIObject(it));
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-gopn.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = __webpack_require__(
          /*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js",
        );
        var hiddenKeys = __webpack_require__(
          /*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js",
        ).concat("length", "prototype");

        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
          };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-gops.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        exports.f = Object.getOwnPropertySymbols;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-gpo.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js",
        );
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js",
        );
        var IE_PROTO = __webpack_require__(
          /*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js",
        )("IE_PROTO");
        var ObjectProto = Object.prototype;

        module.exports =
          Object.getPrototypeOf ||
          function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (
              typeof O.constructor == "function" &&
              O instanceof O.constructor
            ) {
              return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
          };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js",
        );
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js",
        );
        var arrayIndexOf = __webpack_require__(
          /*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js",
        )(false);
        var IE_PROTO = __webpack_require__(
          /*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js",
        )("IE_PROTO");

        module.exports = function(object, names) {
          var O = toIObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          return result;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-keys.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__(
          /*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js",
        );
        var enumBugKeys = __webpack_require__(
          /*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js",
        );

        module.exports =
          Object.keys ||
          function keys(O) {
            return $keys(O, enumBugKeys);
          };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-pie.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        exports.f = {}.propertyIsEnumerable;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_object-sap.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );
        var core = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js",
        );
        var fails = __webpack_require__(
          /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js",
        );
        module.exports = function(KEY, exec) {
          var fn = (core.Object || {})[KEY] || Object[KEY];
          var exp = {};
          exp[KEY] = exec(fn);
          $export(
            $export.S +
              $export.F *
                fails(function() {
                  fn(1);
                }),
            "Object",
            exp,
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_property-desc.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_redefine-all.js":
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var hide = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js",
        );
        module.exports = function(target, src, safe) {
          for (var key in src) {
            if (safe && target[key]) target[key] = src[key];
            else hide(target, key, src[key]);
          }
          return target;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_redefine.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js",
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        // https://tc39.github.io/proposal-setmap-offrom/
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );
        var aFunction = __webpack_require__(
          /*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js",
        );
        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js",
        );
        var forOf = __webpack_require__(
          /*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js",
        );

        module.exports = function(COLLECTION) {
          $export($export.S, COLLECTION, {
            from: function from(source /* , mapFn, thisArg */) {
              var mapFn = arguments[1];
              var mapping, A, n, cb;
              aFunction(this);
              mapping = mapFn !== undefined;
              if (mapping) aFunction(mapFn);
              if (source == undefined) return new this();
              A = [];
              if (mapping) {
                n = 0;
                cb = ctx(mapFn, arguments[2], 2);
                forOf(source, false, function(nextItem) {
                  A.push(cb(nextItem, n++));
                });
              } else {
                forOf(source, false, A.push, A);
              }
              return new this(A);
            },
          });
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        // https://tc39.github.io/proposal-setmap-offrom/
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );

        module.exports = function(COLLECTION) {
          $export($export.S, COLLECTION, {
            of: function of() {
              var length = arguments.length;
              var A = new Array(length);
              while (length--) A[length] = arguments[length];
              return new this(A);
            },
          });
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_set-proto.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js",
        );
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js",
        );
        var check = function(O, proto) {
          anObject(O);
          if (!isObject(proto) && proto !== null)
            throw TypeError(proto + ": can't set as prototype!");
        };
        module.exports = {
          set:
            Object.setPrototypeOf ||
            ("__proto__" in {} // eslint-disable-line
              ? (function(test, buggy, set) {
                  try {
                    set = __webpack_require__(
                      /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js",
                    )(
                      Function.call,
                      __webpack_require__(
                        /*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js",
                      ).f(Object.prototype, "__proto__").set,
                      2,
                    );
                    set(test, []);
                    buggy = !(test instanceof Array);
                  } catch (e) {
                    buggy = true;
                  }
                  return function setPrototypeOf(O, proto) {
                    check(O, proto);
                    if (buggy) O.__proto__ = proto;
                    else set(O, proto);
                    return O;
                  };
                })({}, false)
              : undefined),
          check: check,
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_set-species.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js",
        );
        var core = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js",
        );
        var dP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
        );
        var SPECIES = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        )("species");

        module.exports = function(KEY) {
          var C = typeof core[KEY] == "function" ? core[KEY] : global[KEY];
          if (DESCRIPTORS && C && !C[SPECIES])
            dP.f(C, SPECIES, {
              configurable: true,
              get: function() {
                return this;
              },
            });
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var def = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
        ).f;
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js",
        );
        var TAG = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        )("toStringTag");

        module.exports = function(it, tag, stat) {
          if (it && !has((it = stat ? it : it.prototype), TAG))
            def(it, TAG, { configurable: true, value: tag });
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_shared-key.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(
          /*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js",
        )("keys");
        var uid = __webpack_require__(
          /*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js",
        );
        module.exports = function(key) {
          return shared[key] || (shared[key] = uid(key));
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_shared.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var core = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js",
        );
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js",
        );
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || (global[SHARED] = {});

        (module.exports = function(key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
          version: core.version,
          mode: __webpack_require__(
            /*! ./_library */ "./node_modules/core-js/library/modules/_library.js",
          )
            ? "pure"
            : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_string-at.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js",
        );
        var defined = __webpack_require__(
          /*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js",
        );
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function(TO_STRING) {
          return function(that, pos) {
            var s = String(defined(that));
            var i = toInteger(pos);
            var l = s.length;
            var a, b;
            if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
            a = s.charCodeAt(i);
            return a < 0xd800 ||
              a > 0xdbff ||
              i + 1 === l ||
              (b = s.charCodeAt(i + 1)) < 0xdc00 ||
              b > 0xdfff
              ? TO_STRING
                ? s.charAt(i)
                : a
              : TO_STRING
              ? s.slice(i, i + 2)
              : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000;
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js",
        );
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-integer.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function(it) {
          return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-iobject.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__(
          /*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js",
        );
        var defined = __webpack_require__(
          /*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js",
        );
        module.exports = function(it) {
          return IObject(defined(it));
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-length.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__(
          /*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js",
        );
        var min = Math.min;
        module.exports = function(it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-object.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__(
          /*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js",
        );
        module.exports = function(it) {
          return Object(defined(it));
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_to-primitive.js":
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js",
        );
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
          if (!isObject(it)) return it;
          var fn, val;
          if (
            S &&
            typeof (fn = it.toString) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          if (
            typeof (fn = it.valueOf) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          if (
            !S &&
            typeof (fn = it.toString) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_uid.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var id = 0;
        var px = Math.random();
        module.exports = function(key) {
          return "Symbol(".concat(
            key === undefined ? "" : key,
            ")_",
            (++id + px).toString(36),
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_validate-collection.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js",
        );
        module.exports = function(it, TYPE) {
          if (!isObject(it) || it._t !== TYPE)
            throw TypeError("Incompatible receiver, " + TYPE + " required!");
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_wks-define.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js",
        );
        var core = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js",
        );
        var LIBRARY = __webpack_require__(
          /*! ./_library */ "./node_modules/core-js/library/modules/_library.js",
        );
        var wksExt = __webpack_require__(
          /*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js",
        );
        var defineProperty = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
        ).f;
        module.exports = function(name) {
          var $Symbol =
            core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
          if (name.charAt(0) != "_" && !(name in $Symbol))
            defineProperty($Symbol, name, { value: wksExt.f(name) });
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_wks-ext.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports.f = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/_wks.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var store = __webpack_require__(
          /*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js",
        )("wks");
        var uid = __webpack_require__(
          /*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js",
        );
        var Symbol = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js",
        ).Symbol;
        var USE_SYMBOL = typeof Symbol == "function";

        var $exports = (module.exports = function(name) {
          return (
            store[name] ||
            (store[name] =
              (USE_SYMBOL && Symbol[name]) ||
              (USE_SYMBOL ? Symbol : uid)("Symbol." + name))
          );
        });

        $exports.store = store;

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js",
        );
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        )("iterator");
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js",
        );
        module.exports = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js",
        ).getIteratorMethod = function(it) {
          if (it != undefined)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js",
        );
        var ITERATOR = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        )("iterator");
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js",
        );
        module.exports = __webpack_require__(
          /*! ./_core */ "./node_modules/core-js/library/modules/_core.js",
        ).isIterable = function(it) {
          var O = Object(it);
          return (
            O[ITERATOR] !== undefined ||
            "@@iterator" in O ||
            // eslint-disable-next-line no-prototype-builtins
            Iterators.hasOwnProperty(classof(O))
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.array.from.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var ctx = __webpack_require__(
          /*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js",
        );
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js",
        );
        var call = __webpack_require__(
          /*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js",
        );
        var isArrayIter = __webpack_require__(
          /*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js",
        );
        var toLength = __webpack_require__(
          /*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js",
        );
        var createProperty = __webpack_require__(
          /*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js",
        );
        var getIterFn = __webpack_require__(
          /*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js",
        );

        $export(
          $export.S +
            $export.F *
              !__webpack_require__(
                /*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js",
              )(function(iter) {
                Array.from(iter);
              }),
          "Array",
          {
            // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
            from: function from(
              arrayLike /* , mapfn = undefined, thisArg = undefined */,
            ) {
              var O = toObject(arrayLike);
              var C = typeof this == "function" ? this : Array;
              var aLen = arguments.length;
              var mapfn = aLen > 1 ? arguments[1] : undefined;
              var mapping = mapfn !== undefined;
              var index = 0;
              var iterFn = getIterFn(O);
              var length, result, step, iterator;
              if (mapping)
                mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
              // if object isn't iterable or it's array with default iterator - use simple case
              if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                for (
                  iterator = iterFn.call(O), result = new C();
                  !(step = iterator.next()).done;
                  index++
                ) {
                  createProperty(
                    result,
                    index,
                    mapping
                      ? call(iterator, mapfn, [step.value, index], true)
                      : step.value,
                  );
                }
              } else {
                length = toLength(O.length);
                for (result = new C(length); length > index; index++) {
                  createProperty(
                    result,
                    index,
                    mapping ? mapfn(O[index], index) : O[index],
                  );
                }
              }
              result.length = index;
              return result;
            },
          },
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );

        $export($export.S, "Array", {
          isArray: __webpack_require__(
            /*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js",
          ),
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var addToUnscopables = __webpack_require__(
          /*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js",
        );
        var step = __webpack_require__(
          /*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js",
        );
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js",
        );
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js",
        );

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__(
          /*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js",
        )(
          Array,
          "Array",
          function(iterated, kind) {
            this._t = toIObject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
          },
          function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
              this._t = undefined;
              return step(1);
            }
            if (kind == "keys") return step(0, index);
            if (kind == "values") return step(0, O[index]);
            return step(0, [index, O[index]]);
          },
          "values",
        );

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;

        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.3.1 Object.assign(target, source)
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );

        $export($export.S + $export.F, "Object", {
          assign: __webpack_require__(
            /*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js",
          ),
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.create.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        $export($export.S, "Object", {
          create: __webpack_require__(
            /*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js",
          ),
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );
        // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
        $export(
          $export.S +
            $export.F *
              !__webpack_require__(
                /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
              ),
          "Object",
          {
            defineProperty: __webpack_require__(
              /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
            ).f,
          },
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
      /*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js",
        );
        var $getOwnPropertyDescriptor = __webpack_require__(
          /*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js",
        ).f;

        __webpack_require__(
          /*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js",
        )("getOwnPropertyDescriptor", function() {
          return function getOwnPropertyDescriptor(it, key) {
            return $getOwnPropertyDescriptor(toIObject(it), key);
          };
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.9 Object.getPrototypeOf(O)
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js",
        );
        var $getPrototypeOf = __webpack_require__(
          /*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js",
        );

        __webpack_require__(
          /*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js",
        )("getPrototypeOf", function() {
          return function getPrototypeOf(it) {
            return $getPrototypeOf(toObject(it));
          };
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.14 Object.keys(O)
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js",
        );
        var $keys = __webpack_require__(
          /*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js",
        );

        __webpack_require__(
          /*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js",
        )("keys", function() {
          return function keys(it) {
            return $keys(toObject(it));
          };
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // 19.1.3.19 Object.setPrototypeOf(O, proto)
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );
        $export($export.S, "Object", {
          setPrototypeOf: __webpack_require__(
            /*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js",
          ).set,
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.set.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var strong = __webpack_require__(
          /*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js",
        );
        var validate = __webpack_require__(
          /*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js",
        );
        var SET = "Set";

        // 23.2 Set Objects
        module.exports = __webpack_require__(
          /*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js",
        )(
          SET,
          function(get) {
            return function Set() {
              return get(this, arguments.length > 0 ? arguments[0] : undefined);
            };
          },
          {
            // 23.2.3.1 Set.prototype.add(value)
            add: function add(value) {
              return strong.def(
                validate(this, SET),
                (value = value === 0 ? 0 : value),
                value,
              );
            },
          },
          strong,
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var $at = __webpack_require__(
          /*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js",
        )(true);

        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__(
          /*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js",
        )(
          String,
          "String",
          function(iterated) {
            this._t = String(iterated); // target
            this._i = 0; // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
          },
          function() {
            var O = this._t;
            var index = this._i;
            var point;
            if (index >= O.length) return { value: undefined, done: true };
            point = $at(O, index);
            this._i += point.length;
            return { value: point, done: false };
          },
        );

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es6.symbol.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        // ECMAScript 6 symbols shim
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js",
        );
        var has = __webpack_require__(
          /*! ./_has */ "./node_modules/core-js/library/modules/_has.js",
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js",
        );
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );
        var redefine = __webpack_require__(
          /*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js",
        );
        var META = __webpack_require__(
          /*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js",
        ).KEY;
        var $fails = __webpack_require__(
          /*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js",
        );
        var shared = __webpack_require__(
          /*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js",
        );
        var setToStringTag = __webpack_require__(
          /*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js",
        );
        var uid = __webpack_require__(
          /*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js",
        );
        var wks = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        );
        var wksExt = __webpack_require__(
          /*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js",
        );
        var wksDefine = __webpack_require__(
          /*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js",
        );
        var enumKeys = __webpack_require__(
          /*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js",
        );
        var isArray = __webpack_require__(
          /*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js",
        );
        var anObject = __webpack_require__(
          /*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js",
        );
        var isObject = __webpack_require__(
          /*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js",
        );
        var toObject = __webpack_require__(
          /*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js",
        );
        var toIObject = __webpack_require__(
          /*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js",
        );
        var toPrimitive = __webpack_require__(
          /*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js",
        );
        var createDesc = __webpack_require__(
          /*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js",
        );
        var _create = __webpack_require__(
          /*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js",
        );
        var gOPNExt = __webpack_require__(
          /*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js",
        );
        var $GOPD = __webpack_require__(
          /*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js",
        );
        var $GOPS = __webpack_require__(
          /*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js",
        );
        var $DP = __webpack_require__(
          /*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js",
        );
        var $keys = __webpack_require__(
          /*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js",
        );
        var gOPD = $GOPD.f;
        var dP = $DP.f;
        var gOPN = gOPNExt.f;
        var $Symbol = global.Symbol;
        var $JSON = global.JSON;
        var _stringify = $JSON && $JSON.stringify;
        var PROTOTYPE = "prototype";
        var HIDDEN = wks("_hidden");
        var TO_PRIMITIVE = wks("toPrimitive");
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = shared("symbol-registry");
        var AllSymbols = shared("symbols");
        var OPSymbols = shared("op-symbols");
        var ObjectProto = Object[PROTOTYPE];
        var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
        var QObject = global.QObject;
        // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
        var setter =
          !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

        // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
        var setSymbolDesc =
          DESCRIPTORS &&
          $fails(function() {
            return (
              _create(
                dP({}, "a", {
                  get: function() {
                    return dP(this, "a", { value: 7 }).a;
                  },
                }),
              ).a != 7
            );
          })
            ? function(it, key, D) {
                var protoDesc = gOPD(ObjectProto, key);
                if (protoDesc) delete ObjectProto[key];
                dP(it, key, D);
                if (protoDesc && it !== ObjectProto)
                  dP(ObjectProto, key, protoDesc);
              }
            : dP;

        var wrap = function(tag) {
          var sym = (AllSymbols[tag] = _create($Symbol[PROTOTYPE]));
          sym._k = tag;
          return sym;
        };

        var isSymbol =
          USE_NATIVE && typeof $Symbol.iterator == "symbol"
            ? function(it) {
                return typeof it == "symbol";
              }
            : function(it) {
                return it instanceof $Symbol;
              };

        var $defineProperty = function defineProperty(it, key, D) {
          if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
          anObject(it);
          key = toPrimitive(key, true);
          anObject(D);
          if (has(AllSymbols, key)) {
            if (!D.enumerable) {
              if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
              it[HIDDEN][key] = true;
            } else {
              if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
              D = _create(D, { enumerable: createDesc(0, false) });
            }
            return setSymbolDesc(it, key, D);
          }
          return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
          anObject(it);
          var keys = enumKeys((P = toIObject(P)));
          var i = 0;
          var l = keys.length;
          var key;
          while (l > i) $defineProperty(it, (key = keys[i++]), P[key]);
          return it;
        };
        var $create = function create(it, P) {
          return P === undefined
            ? _create(it)
            : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
          var E = isEnum.call(this, (key = toPrimitive(key, true)));
          if (
            this === ObjectProto &&
            has(AllSymbols, key) &&
            !has(OPSymbols, key)
          )
            return false;
          return E ||
            !has(this, key) ||
            !has(AllSymbols, key) ||
            (has(this, HIDDEN) && this[HIDDEN][key])
            ? E
            : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(
          it,
          key,
        ) {
          it = toIObject(it);
          key = toPrimitive(key, true);
          if (
            it === ObjectProto &&
            has(AllSymbols, key) &&
            !has(OPSymbols, key)
          )
            return;
          var D = gOPD(it, key);
          if (
            D &&
            has(AllSymbols, key) &&
            !(has(it, HIDDEN) && it[HIDDEN][key])
          )
            D.enumerable = true;
          return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
          var names = gOPN(toIObject(it));
          var result = [];
          var i = 0;
          var key;
          while (names.length > i) {
            if (
              !has(AllSymbols, (key = names[i++])) &&
              key != HIDDEN &&
              key != META
            )
              result.push(key);
          }
          return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
          var IS_OP = it === ObjectProto;
          var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
          var result = [];
          var i = 0;
          var key;
          while (names.length > i) {
            if (
              has(AllSymbols, (key = names[i++])) &&
              (IS_OP ? has(ObjectProto, key) : true)
            )
              result.push(AllSymbols[key]);
          }
          return result;
        };

        // 19.4.1.1 Symbol([description])
        if (!USE_NATIVE) {
          $Symbol = function Symbol() {
            if (this instanceof $Symbol)
              throw TypeError("Symbol is not a constructor!");
            var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
            var $set = function(value) {
              if (this === ObjectProto) $set.call(OPSymbols, value);
              if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                this[HIDDEN][tag] = false;
              setSymbolDesc(this, tag, createDesc(1, value));
            };
            if (DESCRIPTORS && setter)
              setSymbolDesc(ObjectProto, tag, {
                configurable: true,
                set: $set,
              });
            return wrap(tag);
          };
          redefine($Symbol[PROTOTYPE], "toString", function toString() {
            return this._k;
          });

          $GOPD.f = $getOwnPropertyDescriptor;
          $DP.f = $defineProperty;
          __webpack_require__(
            /*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js",
          ).f = gOPNExt.f = $getOwnPropertyNames;
          __webpack_require__(
            /*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js",
          ).f = $propertyIsEnumerable;
          $GOPS.f = $getOwnPropertySymbols;

          if (
            DESCRIPTORS &&
            !__webpack_require__(
              /*! ./_library */ "./node_modules/core-js/library/modules/_library.js",
            )
          ) {
            redefine(
              ObjectProto,
              "propertyIsEnumerable",
              $propertyIsEnumerable,
              true,
            );
          }

          wksExt.f = function(name) {
            return wrap(wks(name));
          };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
          Symbol: $Symbol,
        });

        for (
          var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
            "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
              ",",
            ),
            j = 0;
          es6Symbols.length > j;

        )
          wks(es6Symbols[j++]);

        for (
          var wellKnownSymbols = $keys(wks.store), k = 0;
          wellKnownSymbols.length > k;

        )
          wksDefine(wellKnownSymbols[k++]);

        $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
          // 19.4.2.1 Symbol.for(key)
          for: function(key) {
            return has(SymbolRegistry, (key += ""))
              ? SymbolRegistry[key]
              : (SymbolRegistry[key] = $Symbol(key));
          },
          // 19.4.2.5 Symbol.keyFor(sym)
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
            for (var key in SymbolRegistry)
              if (SymbolRegistry[key] === sym) return key;
          },
          useSetter: function() {
            setter = true;
          },
          useSimple: function() {
            setter = false;
          },
        });

        $export($export.S + $export.F * !USE_NATIVE, "Object", {
          // 19.1.2.2 Object.create(O [, Properties])
          create: $create,
          // 19.1.2.4 Object.defineProperty(O, P, Attributes)
          defineProperty: $defineProperty,
          // 19.1.2.3 Object.defineProperties(O, Properties)
          defineProperties: $defineProperties,
          // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
          // 19.1.2.7 Object.getOwnPropertyNames(O)
          getOwnPropertyNames: $getOwnPropertyNames,
          // 19.1.2.8 Object.getOwnPropertySymbols(O)
          getOwnPropertySymbols: $getOwnPropertySymbols,
        });

        // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
        // https://bugs.chromium.org/p/v8/issues/detail?id=3443
        var FAILS_ON_PRIMITIVES = $fails(function() {
          $GOPS.f(1);
        });

        $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
          getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            return $GOPS.f(toObject(it));
          },
        });

        // 24.3.2 JSON.stringify(value [, replacer [, space]])
        $JSON &&
          $export(
            $export.S +
              $export.F *
                (!USE_NATIVE ||
                  $fails(function() {
                    var S = $Symbol();
                    // MS Edge converts symbol values to JSON as {}
                    // WebKit converts symbol values to JSON as null
                    // V8 throws on boxed symbols
                    return (
                      _stringify([S]) != "[null]" ||
                      _stringify({ a: S }) != "{}" ||
                      _stringify(Object(S)) != "{}"
                    );
                  })),
            "JSON",
            {
              stringify: function stringify(it) {
                var args = [it];
                var i = 1;
                var replacer, $replacer;
                while (arguments.length > i) args.push(arguments[i++]);
                $replacer = replacer = args[1];
                if ((!isObject(replacer) && it === undefined) || isSymbol(it))
                  return; // IE8 returns string on undefined
                if (!isArray(replacer))
                  replacer = function(key, value) {
                    if (typeof $replacer == "function")
                      value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                  };
                args[1] = replacer;
                return _stringify.apply($JSON, args);
              },
            },
          );

        // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
        $Symbol[PROTOTYPE][TO_PRIMITIVE] ||
          __webpack_require__(
            /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js",
          )($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        // 19.4.3.5 Symbol.prototype[@@toStringTag]
        setToStringTag($Symbol, "Symbol");
        // 20.2.1.9 Math[@@toStringTag]
        setToStringTag(Math, "Math", true);
        // 24.3.3 JSON[@@toStringTag]
        setToStringTag(global.JSON, "JSON", true);

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.set.from.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
        __webpack_require__(
          /*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js",
        )("Set");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.set.of.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
        __webpack_require__(
          /*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js",
        )("Set");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = __webpack_require__(
          /*! ./_export */ "./node_modules/core-js/library/modules/_export.js",
        );

        $export($export.P + $export.R, "Set", {
          toJSON: __webpack_require__(
            /*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js",
          )("Set"),
        });

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js",
        )("asyncIterator");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js",
        )("observable");

        /***/
      },

    /***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js",
        );
        var global = __webpack_require__(
          /*! ./_global */ "./node_modules/core-js/library/modules/_global.js",
        );
        var hide = __webpack_require__(
          /*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js",
        );
        var Iterators = __webpack_require__(
          /*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js",
        );
        var TO_STRING_TAG = __webpack_require__(
          /*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js",
        )("toStringTag");

        var DOMIterables = (
          "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList," +
          "DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement," +
          "MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList," +
          "SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList," +
          "TextTrackList,TouchList"
        ).split(",");

        for (var i = 0; i < DOMIterables.length; i++) {
          var NAME = DOMIterables[i];
          var Collection = global[NAME];
          var proto = Collection && Collection.prototype;
          if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = Iterators.Array;
        }

        /***/
      },

    /***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
      /*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = hyphenateProperty;

        var _hyphenateStyleName = __webpack_require__(
          /*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js",
        );

        var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function hyphenateProperty(property) {
          return (0, _hyphenateStyleName2.default)(property);
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
      /*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = isPrefixedValue;
        var regex = /-webkit-|-moz-|-ms-/;

        function isPrefixedValue(value) {
          return typeof value === "string" && regex.test(value);
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/fbjs/lib/camelize.js":
      /*!*******************************************!*\
  !*** ./node_modules/fbjs/lib/camelize.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         * @typechecks
         */

        var _hyphenPattern = /-(.)/g;

        /**
         * Camelcases a hyphenated string, for example:
         *
         *   > camelize('background-color')
         *   < "backgroundColor"
         *
         * @param {string} string
         * @return {string}
         */
        function camelize(string) {
          return string.replace(_hyphenPattern, function(_, character) {
            return character.toUpperCase();
          });
        }

        module.exports = camelize;

        /***/
      },

    /***/ "./node_modules/fbjs/lib/camelizeStyleName.js":
      /*!****************************************************!*\
  !*** ./node_modules/fbjs/lib/camelizeStyleName.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         * @typechecks
         */

        var camelize = __webpack_require__(
          /*! ./camelize */ "./node_modules/fbjs/lib/camelize.js",
        );

        var msPattern = /^-ms-/;

        /**
         * Camelcases a hyphenated CSS property name, for example:
         *
         *   > camelizeStyleName('background-color')
         *   < "backgroundColor"
         *   > camelizeStyleName('-moz-transition')
         *   < "MozTransition"
         *   > camelizeStyleName('-ms-transition')
         *   < "msTransition"
         *
         * As Andi Smith suggests
         * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
         * is converted to lowercase `ms`.
         *
         * @param {string} string
         * @return {string}
         */
        function camelizeStyleName(string) {
          return camelize(string.replace(msPattern, "ms-"));
        }

        module.exports = camelizeStyleName;

        /***/
      },

    /***/ "./node_modules/fbjs/lib/emptyFunction.js":
      /*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        function makeEmptyFunction(arg) {
          return function() {
            return arg;
          };
        }

        /**
         * This function accepts and discards inputs; it has no side effects. This is
         * primarily useful idiomatically for overridable function endpoints which
         * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
         */
        var emptyFunction = function emptyFunction() {};

        emptyFunction.thatReturns = makeEmptyFunction;
        emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
        emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
        emptyFunction.thatReturnsNull = makeEmptyFunction(null);
        emptyFunction.thatReturnsThis = function() {
          return this;
        };
        emptyFunction.thatReturnsArgument = function(arg) {
          return arg;
        };

        module.exports = emptyFunction;

        /***/
      },

    /***/ "./node_modules/fbjs/lib/hyphenate.js":
      /*!********************************************!*\
  !*** ./node_modules/fbjs/lib/hyphenate.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

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
        function hyphenate(string) {
          return string.replace(_uppercasePattern, "-$1").toLowerCase();
        }

        module.exports = hyphenate;

        /***/
      },

    /***/ "./node_modules/fbjs/lib/hyphenateStyleName.js":
      /*!*****************************************************!*\
  !*** ./node_modules/fbjs/lib/hyphenateStyleName.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         * @typechecks
         */

        var hyphenate = __webpack_require__(
          /*! ./hyphenate */ "./node_modules/fbjs/lib/hyphenate.js",
        );

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
          return hyphenate(string).replace(msPattern, "-ms-");
        }

        module.exports = hyphenateStyleName;

        /***/
      },

    /***/ "./node_modules/fbjs/lib/memoizeStringOnly.js":
      /*!****************************************************!*\
  !*** ./node_modules/fbjs/lib/memoizeStringOnly.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
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
          return function(string) {
            if (!cache.hasOwnProperty(string)) {
              cache[string] = callback.call(this, string);
            }
            return cache[string];
          };
        }

        module.exports = memoizeStringOnly;

        /***/
      },

    /***/ "./node_modules/fbjs/lib/warning.js":
      /*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         */

        var emptyFunction = __webpack_require__(
          /*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js",
        );

        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var warning = emptyFunction;

        if (true) {
          var printWarning = function printWarning(format) {
            for (
              var _len = arguments.length,
                args = Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key];
            }

            var argIndex = 0;
            var message =
              "Warning: " +
              format.replace(/%s/g, function() {
                return args[argIndex++];
              });
            if (typeof console !== "undefined") {
              console.error(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };

          warning = function warning(condition, format) {
            if (format === undefined) {
              throw new Error(
                "`warning(condition, format, ...args)` requires a warning " +
                  "message argument",
              );
            }

            if (format.indexOf("Failed Composite propType: ") === 0) {
              return; // Ignore CompositeComponent proptype check.
            }

            if (!condition) {
              for (
                var _len2 = arguments.length,
                  args = Array(_len2 > 2 ? _len2 - 2 : 0),
                  _key2 = 2;
                _key2 < _len2;
                _key2++
              ) {
                args[_key2 - 2] = arguments[_key2];
              }

              printWarning.apply(undefined, [format].concat(args));
            }
          };
        }

        module.exports = warning;

        /***/
      },

    /***/ "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
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
          strokeWidth: true,

          /**
           * @param {string} prefix vendor-specific prefix, eg: Webkit
           * @param {string} key style name, eg: transitionDuration
           * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
           * WebkitTransitionDuration
           */
        };
        function prefixKey(prefix, key) {
          return prefix + key.charAt(0).toUpperCase() + key.substring(1);
        }

        /**
         * Support style names that may come passed in prefixed by adding permutations
         * of vendor prefixes.
         */
        var prefixes = ["Webkit", "ms", "Moz", "O"];

        // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
        // infinite loop, because it iterates over the newly added props too.
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix) {
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
            backgroundRepeat: true,
          },
          backgroundPosition: {
            backgroundPositionX: true,
            backgroundPositionY: true,
          },
          border: {
            borderWidth: true,
            borderStyle: true,
            borderColor: true,
          },
          borderBottom: {
            borderBottomWidth: true,
            borderBottomStyle: true,
            borderBottomColor: true,
          },
          borderLeft: {
            borderLeftWidth: true,
            borderLeftStyle: true,
            borderLeftColor: true,
          },
          borderRight: {
            borderRightWidth: true,
            borderRightStyle: true,
            borderRightColor: true,
          },
          borderTop: {
            borderTopWidth: true,
            borderTopStyle: true,
            borderTopColor: true,
          },
          font: {
            fontStyle: true,
            fontVariant: true,
            fontWeight: true,
            fontSize: true,
            lineHeight: true,
            fontFamily: true,
          },
          outline: {
            outlineWidth: true,
            outlineStyle: true,
            outlineColor: true,
          },
        };

        var CSSProperty = {
          isUnitlessNumber: isUnitlessNumber,
          shorthandPropertyExpansions: shorthandPropertyExpansions,
        };

        exports.default = CSSProperty;

        /***/
      },

    /***/ "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });

        var _CSSProperty = __webpack_require__(
          /*! ./CSSProperty */ "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js",
        );

        var _CSSProperty2 = _interopRequireDefault(_CSSProperty);

        var _warning = __webpack_require__(
          /*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js",
        );

        var _warning2 = _interopRequireDefault(_warning);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

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

          var isEmpty =
            value == null || typeof value === "boolean" || value === "";
          if (isEmpty) {
            return "";
          }

          var isNonNumeric = isNaN(value);
          if (
            isNonNumeric ||
            value === 0 ||
            (isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])
          ) {
            return "" + value; // cast to string
          }

          if (typeof value === "string") {
            if (true) {
              // Allow '0' to pass through without warning. 0 is already special and
              // doesn't require units, so we don't need to warn about it.
              if (component && value !== "0") {
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
                  true
                    ? (0, _warning2.default)(
                        false,
                        "a `%s` tag (owner: `%s`) was passed a numeric string value " +
                          "for CSS property `%s` (value: `%s`) which will be treated " +
                          "as a unitless number in a future version of React.",
                        component._currentElement.type,
                        ownerName || "unknown",
                        name,
                        value,
                      )
                    : undefined;
                }
              }
            }
            value = value.trim();
          }
          return value + "px";
        }

        exports.default = dangerousStyleValue;

        /***/
      },

    /***/ "./node_modules/glamor/lib/CSSPropertyOperations/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/glamor/lib/CSSPropertyOperations/index.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.processStyleName = undefined;
        exports.createMarkupForStyles = createMarkupForStyles;

        var _camelizeStyleName = __webpack_require__(
          /*! fbjs/lib/camelizeStyleName */ "./node_modules/fbjs/lib/camelizeStyleName.js",
        );

        var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

        var _dangerousStyleValue = __webpack_require__(
          /*! ./dangerousStyleValue */ "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js",
        );

        var _dangerousStyleValue2 = _interopRequireDefault(
          _dangerousStyleValue,
        );

        var _hyphenateStyleName = __webpack_require__(
          /*! fbjs/lib/hyphenateStyleName */ "./node_modules/fbjs/lib/hyphenateStyleName.js",
        );

        var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

        var _memoizeStringOnly = __webpack_require__(
          /*! fbjs/lib/memoizeStringOnly */ "./node_modules/fbjs/lib/memoizeStringOnly.js",
        );

        var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);

        var _warning = __webpack_require__(
          /*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js",
        );

        var _warning2 = _interopRequireDefault(_warning);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var processStyleName = (exports.processStyleName = (0,
        _memoizeStringOnly2.default)(_hyphenateStyleName2.default));
        /**
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

          var warnHyphenatedStyleName = function warnHyphenatedStyleName(
            name,
            owner,
          ) {
            if (
              warnedStyleNames.hasOwnProperty(name) &&
              warnedStyleNames[name]
            ) {
              return;
            }

            warnedStyleNames[name] = true;
            true
              ? (0, _warning2.default)(
                  false,
                  "Unsupported style property %s. Did you mean %s?%s",
                  name,
                  (0, _camelizeStyleName2.default)(name),
                  checkRenderMessage(owner),
                )
              : undefined;
          };

          var warnBadVendoredStyleName = function warnBadVendoredStyleName(
            name,
            owner,
          ) {
            if (
              warnedStyleNames.hasOwnProperty(name) &&
              warnedStyleNames[name]
            ) {
              return;
            }

            warnedStyleNames[name] = true;
            true
              ? (0, _warning2.default)(
                  false,
                  "Unsupported vendor-prefixed style property %s. Did you mean %s?%s",
                  name,
                  name.charAt(0).toUpperCase() + name.slice(1),
                  checkRenderMessage(owner),
                )
              : undefined;
          };

          var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(
            name,
            value,
            owner,
          ) {
            if (
              warnedStyleValues.hasOwnProperty(value) &&
              warnedStyleValues[value]
            ) {
              return;
            }

            warnedStyleValues[value] = true;
            true
              ? (0, _warning2.default)(
                  false,
                  "Style property values shouldn't contain a semicolon.%s " +
                    'Try "%s: %s" instead.',
                  checkRenderMessage(owner),
                  name,
                  value.replace(badStyleValueWithSemicolonPattern, ""),
                )
              : undefined;
          };

          var warnStyleValueIsNaN = function warnStyleValueIsNaN(
            name,
            value,
            owner,
          ) {
            if (warnedForNaNValue) {
              return;
            }

            warnedForNaNValue = true;
            true
              ? (0, _warning2.default)(
                  false,
                  "`NaN` is an invalid value for the `%s` css style property.%s",
                  name,
                  checkRenderMessage(owner),
                )
              : undefined;
          };

          var checkRenderMessage = function checkRenderMessage(owner) {
            if (owner) {
              var name = owner.getName();
              if (name) {
                return " Check the render method of `" + name + "`.";
              }
            }
            return "";
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
            if (name.indexOf("-") > -1) {
              warnHyphenatedStyleName(name, owner);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name, owner);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value, owner);
            }

            if (typeof value === "number" && isNaN(value)) {
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
          var serialized = "";
          for (var styleName in styles) {
            var isCustomProp = styleName.indexOf("--") === 0;
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            if (styleName === "label") {
              continue;
            }
            var styleValue = styles[styleName];
            if (true && !isCustomProp) {
              warnValidStyle(styleName, styleValue, component);
            }
            if (styleValue != null) {
              if (isCustomProp) {
                serialized += styleName + ":" + styleValue + ";";
              } else {
                serialized += processStyleName(styleName) + ":";
                serialized +=
                  (0, _dangerousStyleValue2.default)(
                    styleName,
                    styleValue,
                    component,
                  ) + ";";
              }
            }
          }
          return serialized || null;
        }

        /***/
      },

    /***/ "./node_modules/glamor/lib/clean.js":
      /*!******************************************!*\
  !*** ./node_modules/glamor/lib/clean.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });

        var _typeof =
          typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === "function" &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };

        exports.default = clean;
        // Returns true for null, false, undefined and {}
        function isFalsy(value) {
          return (
            value === null ||
            value === undefined ||
            value === false ||
            ((typeof value === "undefined" ? "undefined" : _typeof(value)) ===
              "object" &&
              Object.keys(value).length === 0)
          );
        }

        function cleanObject(object) {
          if (isFalsy(object)) return null;
          if (
            (typeof object === "undefined" ? "undefined" : _typeof(object)) !==
            "object"
          )
            return object;

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
          rules.forEach(function(rule) {
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

        /***/
      },

    /***/ "./node_modules/glamor/lib/hash.js":
      /*!*****************************************!*\
  !*** ./node_modules/glamor/lib/hash.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
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
          return (
            str.charCodeAt(pos++) +
            (str.charCodeAt(pos++) << 8) +
            (str.charCodeAt(pos++) << 16) +
            (str.charCodeAt(pos) << 24)
          );
        }

        function UInt16(str, pos) {
          return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
        }

        function Umul32(n, m) {
          n = n | 0;
          m = m | 0;
          var nlo = n & 0xffff;
          var nhi = n >>> 16;
          var res = (nlo * m + (((nhi * m) & 0xffff) << 16)) | 0;
          return res;
        }

        /***/
      },

    /***/ "./node_modules/glamor/lib/index.js":
      /*!******************************************!*\
  !*** ./node_modules/glamor/lib/index.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
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

        var _objectAssign = __webpack_require__(
          /*! object-assign */ "./node_modules/object-assign/index.js",
        );

        var _objectAssign2 = _interopRequireDefault(_objectAssign);

        var _sheet = __webpack_require__(
          /*! ./sheet.js */ "./node_modules/glamor/lib/sheet.js",
        );

        var _CSSPropertyOperations = __webpack_require__(
          /*! ./CSSPropertyOperations */ "./node_modules/glamor/lib/CSSPropertyOperations/index.js",
        );

        var _clean = __webpack_require__(
          /*! ./clean.js */ "./node_modules/glamor/lib/clean.js",
        );

        var _clean2 = _interopRequireDefault(_clean);

        var _plugins = __webpack_require__(
          /*! ./plugins */ "./node_modules/glamor/lib/plugins.js",
        );

        var _hash = __webpack_require__(
          /*! ./hash */ "./node_modules/glamor/lib/hash.js",
        );

        var _hash2 = _interopRequireDefault(_hash);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        /* stylesheet */

        var styleSheet = (exports.styleSheet = new _sheet.StyleSheet());
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
        var plugins = (exports.plugins = styleSheet.plugins = new _plugins.PluginSet(
          [_plugins.prefixes, _plugins.contentWrap, _plugins.fallbacks],
        ));
        plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
        plugins.fontFace = new _plugins.PluginSet();
        plugins.keyframes = new _plugins.PluginSet([
          _plugins.prefixes,
          _plugins.fallbacks,
        ]);

        // define some constants

        var isDev = true || false;
        var isTest = "development" === "test";
        var isBrowser = typeof window !== "undefined";

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
          var bool =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : true;

          canSimulate = !!bool;
        }

        // use this on dom nodes to 'simulate' pseudoclasses
        // <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
        // you can even send in some weird ones, as long as it's in simple format
        // and matches an existing rule on the element
        // eg simulate('nthChild2', ':hover:active') etc
        function simulate() {
          for (
            var _len = arguments.length, pseudos = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            pseudos[_key] = arguments[_key];
          }

          pseudos = (0, _clean2.default)(pseudos);
          if (!pseudos) return {};
          if (!canSimulate) {
            if (!warned1) {
              console.warn(
                "can't simulate without once calling simulations(true)",
              ); //eslint-disable-line no-console
              warned1 = true;
            }
            if (!isDev && !isTest && !warned2) {
              console.warn("don't use simulation outside dev"); //eslint-disable-line no-console
              warned2 = true;
            }
            return {};
          }
          return pseudos.reduce(function(o, p) {
            return (o["data-simulate-" + simple(p)] = ""), o;
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
          var char =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "";

          return str.toLowerCase().replace(/[^a-z0-9]/g, char);
        }

        // hashes a string to something 'unique'
        // we use this to generate ids for styles

        function hashify(obj) {
          var str = JSON.stringify(obj);
          var toRet = (0, _hash2.default)(str).toString(36);
          if (obj.label && obj.label.length > 0 && isDev) {
            return simple(obj.label.join("."), "-") + "-" + toRet;
          }
          return toRet;
        }

        // of shape { 'data-css-<id>': '' }
        function isLikeRule(rule) {
          var keys = Object.keys(rule).filter(function(x) {
            return x !== "toString";
          });
          if (keys.length !== 1) {
            return false;
          }
          return !!/data\-css\-([a-zA-Z0-9\-_]+)/.exec(keys[0]);
        }

        // extracts id from a { 'data-css-<id>': ''} like object
        function idFor(rule) {
          var keys = Object.keys(rule).filter(function(x) {
            return x !== "toString";
          });
          if (keys.length !== 1) throw new Error("not a rule");
          var regex = /data\-css\-([a-zA-Z0-9\-_]+)/;
          var match = regex.exec(keys[0]);
          if (!match) throw new Error("not a rule");
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
          if (selector.indexOf(",") === -1) {
            return [selector];
          }

          var indices = [],
            res = [],
            inParen = 0,
            o;
          /*eslint-disable no-cond-assign*/
          while ((o = selectorTokenizer.exec(selector))) {
            /*eslint-enable no-cond-assign*/
            switch (o[0]) {
              case "(":
                inParen++;
                break;
              case ")":
                inParen--;
                break;
              case ",":
                if (inParen) break;
                indices.push(o.index);
            }
          }
          for (o = indices.length; o--; ) {
            res.unshift(selector.slice(indices[o] + 1));
            selector = selector.slice(0, indices[o]);
          }
          res.unshift(selector);
          return res;
        }

        function selector(id, path) {
          if (!id) {
            return path.replace(/\&/g, "");
          }
          if (!path) return ".css-" + id + ",[data-css-" + id + "]";

          var x = splitSelector(path)
            .map(function(x) {
              return x.indexOf("&") >= 0
                ? [
                    x.replace(/\&/gm, ".css-" + id),
                    x.replace(/\&/gm, "[data-css-" + id + "]"),
                  ].join(",") // todo - make sure each sub selector has an &
                : ".css-" + id + x + ",[data-css-" + id + "]" + x;
            })
            .join(",");

          if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
            x +=
              ",.css-" +
              id +
              "[data-simulate-" +
              simple(path) +
              "],[data-css-" +
              id +
              "][data-simulate-" +
              simple(path) +
              "]";
          }
          return x;
        }

        // end https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61

        function toCSS(_ref) {
          var selector = _ref.selector,
            style = _ref.style;

          var result = plugins.transform({ selector: selector, style: style });
          return (
            result.selector +
            "{" +
            (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) +
            "}"
          );
        }

        function deconstruct(style) {
          // we can be sure it's not infinitely nested here
          var plain = void 0,
            selects = void 0,
            medias = void 0,
            supports = void 0;
          Object.keys(style).forEach(function(key) {
            if (key.indexOf("&") >= 0) {
              selects = selects || {};
              selects[key] = style[key];
            } else if (key.indexOf("@media") === 0) {
              medias = medias || {};
              medias[key] = deconstruct(style[key]);
            } else if (key.indexOf("@supports") === 0) {
              supports = supports || {};
              supports[key] = deconstruct(style[key]);
            } else if (key === "label") {
              if (style.label.length > 0) {
                plain = plain || {};
                plain.label = hasLabels ? style.label.join(".") : "";
              }
            } else {
              plain = plain || {};
              plain[key] = style[key];
            }
          });
          return {
            plain: plain,
            selects: selects,
            medias: medias,
            supports: supports,
          };
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
            Object.keys(selects).forEach(function(key) {
              return css.push(
                toCSS({ style: selects[key], selector: selector(id, key) }),
              );
            });
          }
          if (medias) {
            Object.keys(medias).forEach(function(key) {
              return css.push(
                key +
                  "{" +
                  deconstructedStyleToCSS(id, medias[key]).join("") +
                  "}",
              );
            });
          }
          if (supports) {
            Object.keys(supports).forEach(function(key) {
              return css.push(
                key +
                  "{" +
                  deconstructedStyleToCSS(id, supports[key]).join("") +
                  "}",
              );
            });
          }
          return css;
        }

        // this cache to track which rules have
        // been inserted into the stylesheet
        var inserted = (styleSheet.inserted = {});

        // and helpers to insert rules into said styleSheet
        function insert(spec) {
          if (!inserted[spec.id]) {
            inserted[spec.id] = true;
            var deconstructed = deconstruct(spec.style);
            var rules = deconstructedStyleToCSS(spec.id, deconstructed);
            inserted[spec.id] = isBrowser ? true : rules;
            rules.forEach(function(cssRule) {
              return styleSheet.insert(cssRule);
            });
          }
        }

        // a simple cache to store generated rules
        var registered = (styleSheet.registered = {});
        function register(spec) {
          if (!registered[spec.id]) {
            registered[spec.id] = spec;
          }
        }

        function _getRegistered(rule) {
          if (isLikeRule(rule)) {
            var ret = registered[idFor(rule)];
            if (ret == null) {
              throw new Error(
                "[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79",
              );
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

          var ret = _defineProperty(
            {},
            "data-css-" + spec.id,
            hasLabels ? spec.label || "" : "",
          );
          Object.defineProperty(ret, "toString", {
            enumerable: false,
            value: function value() {
              return "css-" + spec.id;
            },
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
          var possibles = [":", ".", "[", ">", " "],
            found = false,
            ch = key.charAt(0);
          for (var i = 0; i < possibles.length; i++) {
            if (ch === possibles[i]) {
              found = true;
              break;
            }
          }
          return found || key.indexOf("&") >= 0;
        }

        function joinSelectors(a, b) {
          var as = splitSelector(a).map(function(a) {
            return !(a.indexOf("&") >= 0) ? "&" + a : a;
          });
          var bs = splitSelector(b).map(function(b) {
            return !(b.indexOf("&") >= 0) ? "&" + b : b;
          });

          return bs
            .reduce(function(arr, b) {
              return arr.concat(
                as.map(function(a) {
                  return b.replace(/\&/g, a);
                }),
              );
            }, [])
            .join(",");
        }

        function joinMediaQueries(a, b) {
          return a ? "@media " + a.substring(6) + " and " + b.substring(6) : b;
        }

        function isMediaQuery(key) {
          return key.indexOf("@media") === 0;
        }

        function isSupports(key) {
          return key.indexOf("@supports") === 0;
        }

        function joinSupports(a, b) {
          return a
            ? "@supports " + a.substring(9) + " and " + b.substring(9)
            : b;
        }

        // flatten a nested array
        function flatten(inArr) {
          var arr = [];
          for (var i = 0; i < inArr.length; i++) {
            if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));
            else arr = arr.concat(inArr[i]);
          }
          return arr;
        }

        var prefixedPseudoSelectors = {
          "::placeholder": [
            "::-webkit-input-placeholder",
            "::-moz-placeholder",
            "::-ms-input-placeholder",
          ],
          ":fullscreen": [
            ":-webkit-full-screen",
            ":-moz-full-screen",
            ":-ms-fullscreen",
          ],

          // mutable! modifies dest.
        };
        function build(dest, _ref2) {
          var _ref2$selector = _ref2.selector,
            selector = _ref2$selector === undefined ? "" : _ref2$selector,
            _ref2$mq = _ref2.mq,
            mq = _ref2$mq === undefined ? "" : _ref2$mq,
            _ref2$supp = _ref2.supp,
            supp = _ref2$supp === undefined ? "" : _ref2$supp,
            _ref2$src = _ref2.src,
            src = _ref2$src === undefined ? {} : _ref2$src;

          if (!Array.isArray(src)) {
            src = [src];
          }
          src = flatten(src);

          src.forEach(function(_src) {
            if (isLikeRule(_src)) {
              var reg = _getRegistered(_src);
              if (reg.type !== "css") {
                throw new Error("cannot merge this rule");
              }
              _src = reg.style;
            }
            _src = (0, _clean2.default)(_src);
            if (_src && _src.composes) {
              build(dest, {
                selector: selector,
                mq: mq,
                supp: supp,
                src: _src.composes,
              });
            }
            Object.keys(_src || {}).forEach(function(key) {
              if (isSelector(key)) {
                if (prefixedPseudoSelectors[key]) {
                  prefixedPseudoSelectors[key].forEach(function(p) {
                    return build(dest, {
                      selector: joinSelectors(selector, p),
                      mq: mq,
                      supp: supp,
                      src: _src[key],
                    });
                  });
                }

                build(dest, {
                  selector: joinSelectors(selector, key),
                  mq: mq,
                  supp: supp,
                  src: _src[key],
                });
              } else if (isMediaQuery(key)) {
                build(dest, {
                  selector: selector,
                  mq: joinMediaQueries(mq, key),
                  supp: supp,
                  src: _src[key],
                });
              } else if (isSupports(key)) {
                build(dest, {
                  selector: selector,
                  mq: mq,
                  supp: joinSupports(supp, key),
                  src: _src[key],
                });
              } else if (key === "composes") {
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

                if (key === "label") {
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
            style: style,
            label: hasLabels ? style.label.join(".") : "",
            type: "css",
          };
          return toRule(spec);
        }

        var nullrule = {
          // 'data-css-nil': ''
        };
        Object.defineProperty(nullrule, "toString", {
          enumerable: false,
          value: function value() {
            return "css-nil";
          },
        });

        var inputCaches =
          typeof WeakMap !== "undefined"
            ? [nullrule, new WeakMap(), new WeakMap(), new WeakMap()]
            : [nullrule];

        var warnedWeakMapError = false;
        function multiIndexCache(fn) {
          return function(args) {
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
                  (_console = console).warn.apply(
                    _console,
                    ["failed setting the WeakMap cache for args:"].concat(
                      _toConsumableArray(args),
                    ),
                  ); // eslint-disable-line no-console
                  console.warn(
                    "this should NOT happen, please file a bug on the github repo.",
                  ); // eslint-disable-line no-console
                }
              }
            }
            return value;
          };
        }

        var cachedCss =
          typeof WeakMap !== "undefined" ? multiIndexCache(_css) : _css;

        function css() {
          for (
            var _len2 = arguments.length, rules = Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            rules[_key2] = arguments[_key2];
          }

          if (rules[0] && rules[0].length && rules[0].raw) {
            throw new Error(
              "you forgot to include glamor/babel in your babel plugins.",
            );
          }

          rules = (0, _clean2.default)(rules);
          if (!rules) {
            return nullrule;
          }

          return cachedCss(rules);
        }

        css.insert = function(css) {
          var spec = {
            id: hashify(css),
            css: css,
            type: "raw",
          };
          register(spec);
          if (!inserted[spec.id]) {
            styleSheet.insert(spec.css);
            inserted[spec.id] = isBrowser ? true : [spec.css];
          }
        };

        var insertRule = (exports.insertRule = css.insert);

        css.global = function(selector, style) {
          style = (0, _clean2.default)(style);
          if (style) {
            return css.insert(toCSS({ selector: selector, style: style }));
          }
        };

        var insertGlobal = (exports.insertGlobal = css.global);

        function insertKeyframe(spec) {
          if (!inserted[spec.id]) {
            var inner = Object.keys(spec.keyframes)
              .map(function(kf) {
                var result = plugins.keyframes.transform({
                  id: spec.id,
                  name: kf,
                  style: spec.keyframes[kf],
                });
                return (
                  result.name +
                  "{" +
                  (0, _CSSPropertyOperations.createMarkupForStyles)(
                    result.style,
                  ) +
                  "}"
                );
              })
              .join("");

            var rules = ["-webkit-", "-moz-", "-o-", ""].map(function(prefix) {
              return (
                "@" +
                prefix +
                "keyframes " +
                (spec.name + "_" + spec.id) +
                "{" +
                inner +
                "}"
              );
            });
            rules.forEach(function(rule) {
              return styleSheet.insert(rule);
            });

            inserted[spec.id] = isBrowser ? true : rules;
          }
        }
        css.keyframes = function(name, kfs) {
          if (!kfs) {
            (kfs = name), (name = "animation");
          }

          // do not ignore empty keyframe definitions for now.
          kfs = (0, _clean2.default)(kfs) || {};
          var spec = {
            id: hashify({ name: name, kfs: kfs }),
            type: "keyframes",
            name: name,
            keyframes: kfs,
          };
          register(spec);
          insertKeyframe(spec);
          return name + "_" + spec.id;
        };

        // we don't go all out for fonts as much, giving a simple font loading strategy
        // use a fancier lib if you need moar power
        css.fontFace = function(font) {
          font = (0, _clean2.default)(font);
          var spec = {
            id: hashify(font),
            type: "font-face",
            font: font,
          };
          register(spec);
          insertFontFace(spec);

          return font.fontFamily;
        };

        var fontFace = (exports.fontFace = css.fontFace);
        var keyframes = (exports.keyframes = css.keyframes);

        function insertFontFace(spec) {
          if (!inserted[spec.id]) {
            var rule =
              "@font-face{" +
              (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) +
              "}";
            styleSheet.insert(rule);
            inserted[spec.id] = isBrowser ? true : [rule];
          }
        }

        // rehydrate the insertion cache with ids sent from
        // renderStatic / renderStaticOptimized
        function rehydrate(ids) {
          // load up ids
          (0, _objectAssign2.default)(
            inserted,
            ids.reduce(function(o, i) {
              return (o[i] = true), o;
            }, {}),
          );
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

        var presets = (exports.presets = {
          mobile: "(min-width: 400px)",
          Mobile: "@media (min-width: 400px)",
          phablet: "(min-width: 550px)",
          Phablet: "@media (min-width: 550px)",
          tablet: "(min-width: 750px)",
          Tablet: "@media (min-width: 750px)",
          desktop: "(min-width: 1000px)",
          Desktop: "@media (min-width: 1000px)",
          hd: "(min-width: 1200px)",
          Hd: "@media (min-width: 1200px)",
        });

        var style = (exports.style = css);

        function select(selector) {
          for (
            var _len3 = arguments.length,
              styles = Array(_len3 > 1 ? _len3 - 1 : 0),
              _key3 = 1;
            _key3 < _len3;
            _key3++
          ) {
            styles[_key3 - 1] = arguments[_key3];
          }

          if (!selector) {
            return style(styles);
          }
          return css(_defineProperty({}, selector, styles));
        }
        var $ = (exports.$ = select);

        function parent(selector) {
          for (
            var _len4 = arguments.length,
              styles = Array(_len4 > 1 ? _len4 - 1 : 0),
              _key4 = 1;
            _key4 < _len4;
            _key4++
          ) {
            styles[_key4 - 1] = arguments[_key4];
          }

          return css(_defineProperty({}, selector + " &", styles));
        }

        var merge = (exports.merge = css);
        var compose = (exports.compose = css);

        function media(query) {
          for (
            var _len5 = arguments.length,
              rules = Array(_len5 > 1 ? _len5 - 1 : 0),
              _key5 = 1;
            _key5 < _len5;
            _key5++
          ) {
            rules[_key5 - 1] = arguments[_key5];
          }

          return css(_defineProperty({}, "@media " + query, rules));
        }

        function pseudo(selector) {
          for (
            var _len6 = arguments.length,
              styles = Array(_len6 > 1 ? _len6 - 1 : 0),
              _key6 = 1;
            _key6 < _len6;
            _key6++
          ) {
            styles[_key6 - 1] = arguments[_key6];
          }

          return css(_defineProperty({}, selector, styles));
        }

        // allllll the pseudoclasses

        function active(x) {
          return pseudo(":active", x);
        }

        function any(x) {
          return pseudo(":any", x);
        }

        function checked(x) {
          return pseudo(":checked", x);
        }

        function disabled(x) {
          return pseudo(":disabled", x);
        }

        function empty(x) {
          return pseudo(":empty", x);
        }

        function enabled(x) {
          return pseudo(":enabled", x);
        }

        function _default(x) {
          return pseudo(":default", x); // note '_default' name
        }

        function first(x) {
          return pseudo(":first", x);
        }

        function firstChild(x) {
          return pseudo(":first-child", x);
        }

        function firstOfType(x) {
          return pseudo(":first-of-type", x);
        }

        function fullscreen(x) {
          return pseudo(":fullscreen", x);
        }

        function focus(x) {
          return pseudo(":focus", x);
        }

        function hover(x) {
          return pseudo(":hover", x);
        }

        function indeterminate(x) {
          return pseudo(":indeterminate", x);
        }

        function inRange(x) {
          return pseudo(":in-range", x);
        }

        function invalid(x) {
          return pseudo(":invalid", x);
        }

        function lastChild(x) {
          return pseudo(":last-child", x);
        }

        function lastOfType(x) {
          return pseudo(":last-of-type", x);
        }

        function left(x) {
          return pseudo(":left", x);
        }

        function link(x) {
          return pseudo(":link", x);
        }

        function onlyChild(x) {
          return pseudo(":only-child", x);
        }

        function onlyOfType(x) {
          return pseudo(":only-of-type", x);
        }

        function optional(x) {
          return pseudo(":optional", x);
        }

        function outOfRange(x) {
          return pseudo(":out-of-range", x);
        }

        function readOnly(x) {
          return pseudo(":read-only", x);
        }

        function readWrite(x) {
          return pseudo(":read-write", x);
        }

        function required(x) {
          return pseudo(":required", x);
        }

        function right(x) {
          return pseudo(":right", x);
        }

        function root(x) {
          return pseudo(":root", x);
        }

        function scope(x) {
          return pseudo(":scope", x);
        }

        function target(x) {
          return pseudo(":target", x);
        }

        function valid(x) {
          return pseudo(":valid", x);
        }

        function visited(x) {
          return pseudo(":visited", x);
        }

        // parameterized pseudoclasses
        function dir(p, x) {
          return pseudo(":dir(" + p + ")", x);
        }
        function lang(p, x) {
          return pseudo(":lang(" + p + ")", x);
        }
        function not(p, x) {
          // should this be a plugin?
          var selector = p
            .split(",")
            .map(function(x) {
              return x.trim();
            })
            .map(function(x) {
              return ":not(" + x + ")";
            });
          if (selector.length === 1) {
            return pseudo(":not(" + p + ")", x);
          }
          return select(selector.join(""), x);
        }
        function nthChild(p, x) {
          return pseudo(":nth-child(" + p + ")", x);
        }
        function nthLastChild(p, x) {
          return pseudo(":nth-last-child(" + p + ")", x);
        }
        function nthLastOfType(p, x) {
          return pseudo(":nth-last-of-type(" + p + ")", x);
        }
        function nthOfType(p, x) {
          return pseudo(":nth-of-type(" + p + ")", x);
        }

        // pseudoelements
        function after(x) {
          return pseudo("::after", x);
        }
        function before(x) {
          return pseudo("::before", x);
        }
        function firstLetter(x) {
          return pseudo("::first-letter", x);
        }
        function firstLine(x) {
          return pseudo("::first-line", x);
        }
        function selection(x) {
          return pseudo("::selection", x);
        }
        function backdrop(x) {
          return pseudo("::backdrop", x);
        }
        function placeholder(x) {
          // https://github.com/threepointone/glamor/issues/14
          return css({ "::placeholder": x });
        }

        /*** helpers for web components ***/
        // https://github.com/threepointone/glamor/issues/16

        function cssFor() {
          for (
            var _len7 = arguments.length, rules = Array(_len7), _key7 = 0;
            _key7 < _len7;
            _key7++
          ) {
            rules[_key7] = arguments[_key7];
          }

          rules = (0, _clean2.default)(rules);
          return rules
            ? rules
                .map(function(r) {
                  var style = { label: [] };
                  build(style, { src: r }); // mutative! but worth it.
                  return deconstructedStyleToCSS(
                    hashify(style),
                    deconstruct(style),
                  ).join("");
                })
                .join("")
            : "";
        }

        function attribsFor() {
          for (
            var _len8 = arguments.length, rules = Array(_len8), _key8 = 0;
            _key8 < _len8;
            _key8++
          ) {
            rules[_key8] = arguments[_key8];
          }

          rules = (0, _clean2.default)(rules);
          var htmlAttributes = rules
            ? rules
                .map(function(rule) {
                  idFor(rule); // throwaway check for rule
                  var key = Object.keys(rule)[0],
                    value = rule[key];
                  return key + '="' + (value || "") + '"';
                })
                .join(" ")
            : "";

          return htmlAttributes;
        }

        /***/
      },

    /***/ "./node_modules/glamor/lib/plugins.js":
      /*!********************************************!*\
  !*** ./node_modules/glamor/lib/plugins.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });

        var _extends =
          Object.assign ||
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

        exports.PluginSet = PluginSet;
        exports.fallbacks = fallbacks;
        exports.contentWrap = contentWrap;
        exports.prefixes = prefixes;

        var _objectAssign = __webpack_require__(
          /*! object-assign */ "./node_modules/object-assign/index.js",
        );

        var _objectAssign2 = _interopRequireDefault(_objectAssign);

        var _CSSPropertyOperations = __webpack_require__(
          /*! ./CSSPropertyOperations */ "./node_modules/glamor/lib/CSSPropertyOperations/index.js",
        );

        var _prefixer = __webpack_require__(
          /*! ./prefixer */ "./node_modules/glamor/lib/prefixer.js",
        );

        var _prefixer2 = _interopRequireDefault(_prefixer);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var isDev = (function(x) {
          return x === "development" || !x;
        })("development");

        function PluginSet(initial) {
          this.fns = initial || [];
        }

        (0, _objectAssign2.default)(PluginSet.prototype, {
          add: function add() {
            var _this = this;

            for (
              var _len = arguments.length, fns = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              fns[_key] = arguments[_key];
            }

            fns.forEach(function(fn) {
              if (_this.fns.indexOf(fn) >= 0) {
                if (isDev) {
                  console.warn("adding the same plugin again, ignoring"); //eslint-disable-line no-console
                }
              } else {
                _this.fns = [fn].concat(_this.fns);
              }
            });
          },
          remove: function remove(fn) {
            this.fns = this.fns.filter(function(x) {
              return x !== fn;
            });
          },
          clear: function clear() {
            this.fns = [];
          },
          transform: function transform(o) {
            return this.fns.reduce(function(o, fn) {
              return fn(o);
            }, o);
          },
        });

        function fallbacks(node) {
          var hasArray =
            Object.keys(node.style)
              .map(function(x) {
                return Array.isArray(node.style[x]);
              })
              .indexOf(true) >= 0;
          if (hasArray) {
            var style = node.style;

            var flattened = Object.keys(style).reduce(function(o, key) {
              o[key] = Array.isArray(style[key])
                ? style[key].join(
                    "; " +
                      (0, _CSSPropertyOperations.processStyleName)(key) +
                      ": ",
                  )
                : style[key];
              return o;
            }, {});
            // todo -
            // flatten arrays which haven't been flattened yet
            return (0, _objectAssign2.default)({}, node, { style: flattened });
          }
          return node;
        }

        var contentValues = [
          "normal",
          "none",
          "counter",
          "open-quote",
          "close-quote",
          "no-open-quote",
          "no-close-quote",
          "initial",
          "inherit",
        ];

        function contentWrap(node) {
          if (node.style.content) {
            var cont = node.style.content;
            if (contentValues.indexOf(cont) >= 0) {
              return node;
            }
            if (/^(attr|calc|counters?|url)\(/.test(cont)) {
              return node;
            }
            if (
              cont.charAt(0) === cont.charAt(cont.length - 1) &&
              (cont.charAt(0) === '"' || cont.charAt(0) === "'")
            ) {
              return node;
            }
            return _extends({}, node, {
              style: _extends({}, node.style, { content: '"' + cont + '"' }),
            });
          }
          return node;
        }

        function prefixes(node) {
          return (0, _objectAssign2.default)({}, node, {
            style: (0, _prefixer2.default)(_extends({}, node.style)),
          });
        }

        /***/
      },

    /***/ "./node_modules/glamor/lib/prefixer.js":
      /*!*********************************************!*\
  !*** ./node_modules/glamor/lib/prefixer.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = prefixer;

        var _staticData = __webpack_require__(
          /*! inline-style-prefixer/static/staticData */ "./node_modules/inline-style-prefixer/static/staticData.js",
        );

        var _staticData2 = _interopRequireDefault(_staticData);

        var _prefixProperty = __webpack_require__(
          /*! inline-style-prefixer/utils/prefixProperty */ "./node_modules/inline-style-prefixer/utils/prefixProperty.js",
        );

        var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

        var _prefixValue = __webpack_require__(
          /*! inline-style-prefixer/utils/prefixValue */ "./node_modules/inline-style-prefixer/utils/prefixValue.js",
        );

        var _prefixValue2 = _interopRequireDefault(_prefixValue);

        var _cursor = __webpack_require__(
          /*! inline-style-prefixer/static/plugins/cursor */ "./node_modules/inline-style-prefixer/static/plugins/cursor.js",
        );

        var _cursor2 = _interopRequireDefault(_cursor);

        var _crossFade = __webpack_require__(
          /*! inline-style-prefixer/static/plugins/crossFade */ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js",
        );

        var _crossFade2 = _interopRequireDefault(_crossFade);

        var _filter = __webpack_require__(
          /*! inline-style-prefixer/static/plugins/filter */ "./node_modules/inline-style-prefixer/static/plugins/filter.js",
        );

        var _filter2 = _interopRequireDefault(_filter);

        var _flex = __webpack_require__(
          /*! inline-style-prefixer/static/plugins/flex */ "./node_modules/inline-style-prefixer/static/plugins/flex.js",
        );

        var _flex2 = _interopRequireDefault(_flex);

        var _flexboxOld = __webpack_require__(
          /*! inline-style-prefixer/static/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js",
        );

        var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

        var _gradient = __webpack_require__(
          /*! inline-style-prefixer/static/plugins/gradient */ "./node_modules/inline-style-prefixer/static/plugins/gradient.js",
        );

        var _gradient2 = _interopRequireDefault(_gradient);

        var _imageSet = __webpack_require__(
          /*! inline-style-prefixer/static/plugins/imageSet */ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js",
        );

        var _imageSet2 = _interopRequireDefault(_imageSet);

        var _position = __webpack_require__(
          /*! inline-style-prefixer/static/plugins/position */ "./node_modules/inline-style-prefixer/static/plugins/position.js",
        );

        var _position2 = _interopRequireDefault(_position);

        var _sizing = __webpack_require__(
          /*! inline-style-prefixer/static/plugins/sizing */ "./node_modules/inline-style-prefixer/static/plugins/sizing.js",
        );

        var _sizing2 = _interopRequireDefault(_sizing);

        var _transition = __webpack_require__(
          /*! inline-style-prefixer/static/plugins/transition */ "./node_modules/inline-style-prefixer/static/plugins/transition.js",
        );

        var _transition2 = _interopRequireDefault(_transition);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var plugins = [
          _crossFade2.default,
          _cursor2.default,
          _filter2.default,
          _flexboxOld2.default,
          _gradient2.default,
          _imageSet2.default,
          _position2.default,
          _sizing2.default,
          _transition2.default,
          _flex2.default,
        ]; // custom facade for inline-style-prefixer

        var prefixMap = _staticData2.default.prefixMap;

        function prefixer(style) {
          for (var property in style) {
            var value = style[property];

            var processedValue = (0, _prefixValue2.default)(
              plugins,
              property,
              value,
              style,
              prefixMap,
            );

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (processedValue) {
              style[property] = processedValue;
            }

            (0, _prefixProperty2.default)(prefixMap, property, style);
          }
          return style;
        }

        /***/
      },

    /***/ "./node_modules/glamor/lib/sheet.js":
      /*!******************************************!*\
  !*** ./node_modules/glamor/lib/sheet.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.StyleSheet = StyleSheet;

        var _objectAssign = __webpack_require__(
          /*! object-assign */ "./node_modules/object-assign/index.js",
        );

        var _objectAssign2 = _interopRequireDefault(_objectAssign);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

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

        var isBrowser = typeof window !== "undefined";
        var isDev = true || false; //(x => (x === 'development') || !x)(process.env.NODE_ENV)
        var isTest = "development" === "test";

        var oldIE = (function() {
          if (isBrowser) {
            var div = document.createElement("div");
            div.innerHTML = "<!--[if lt IE 10]><i></i><![endif]-->";
            return div.getElementsByTagName("i").length === 1;
          }
        })();

        function makeStyleTag() {
          var tag = document.createElement("style");
          tag.type = "text/css";
          tag.setAttribute("data-glamor", "");
          tag.appendChild(document.createTextNode(""));
          (
            document.head || document.getElementsByTagName("head")[0]
          ).appendChild(tag);
          return tag;
        }

        function StyleSheet() {
          var _ref =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            _ref$speedy = _ref.speedy,
            speedy =
              _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
            _ref$maxLength = _ref.maxLength,
            maxLength =
              _ref$maxLength === undefined
                ? isBrowser && oldIE
                  ? 4000
                  : 65000
                : _ref$maxLength;

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
              throw new Error("already injected stylesheet!");
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
                },
              };
            }
            this.injected = true;
          },
          speedy: function speedy(bool) {
            if (this.ctr !== 0) {
              throw new Error(
                "cannot change speedy mode after inserting any rule to sheet. Either call speedy(" +
                  bool +
                  ") earlier in your app, or call flush() before speedy(" +
                  bool +
                  ")",
              );
            }
            this.isSpeedy = !!bool;
          },
          _insert: function _insert(rule) {
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
              var sheet = this.getSheet();
              sheet.insertRule(
                rule,
                rule.indexOf("@import") !== -1 ? 0 : sheet.cssRules.length,
              );
            } catch (e) {
              if (isDev) {
                // might need beter dx for this
                console.warn("whoops, illegal rule inserted", rule); //eslint-disable-line no-console
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
                if (rule.indexOf("@import") !== -1) {
                  var tag = last(this.tags);
                  tag.insertBefore(
                    document.createTextNode(rule),
                    tag.firstChild,
                  );
                } else {
                  last(this.tags).appendChild(document.createTextNode(rule));
                }
              }
            } else {
              // server side is pretty simple
              this.sheet.insertRule(
                rule,
                rule.indexOf("@import") !== -1 ? 0 : this.sheet.cssRules.length,
              );
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
            return this.replace(index, "");
          },
          flush: function flush() {
            if (isBrowser) {
              this.tags.forEach(function(tag) {
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
            this.tags.forEach(function(tag) {
              return arr.splice.apply(
                arr,
                [arr.length, 0].concat(
                  _toConsumableArray(Array.from(sheetForTag(tag).cssRules)),
                ),
              );
            });
            return arr;
          },
        });

        /***/
      },

    /***/ "./node_modules/glamorous/dist/glamorous.esm.js":
      /*!******************************************************!*\
  !*** ./node_modules/glamorous/dist/glamorous.esm.js ***!
  \******************************************************/
      /*! exports provided: default, ThemeProvider, withTheme, A, Abbr, Acronym, Address, Applet, Area, Article, Aside, Audio, B, Base, Basefont, Bdi, Bdo, Bgsound, Big, Blink, Blockquote, Body, Br, Button, Canvas, Caption, Center, Cite, Code, Col, Colgroup, Command, Content, Data, Datalist, Dd, Del, Details, Dfn, Dialog, Dir, Div, Dl, Dt, Element, Em, Embed, Fieldset, Figcaption, Figure, Font, Footer, Form, Frame, Frameset, H1, H2, H3, H4, H5, H6, Head, Header, Hgroup, Hr, Html, I, Iframe, Image, Img, Input, Ins, Isindex, Kbd, Keygen, Label, Legend, Li, Link, Listing, Main, MapTag, Mark, Marquee, MathTag, Menu, Menuitem, Meta, Meter, Multicol, Nav, Nextid, Nobr, Noembed, Noframes, Noscript, ObjectTag, Ol, Optgroup, Option, Output, P, Param, Picture, Plaintext, Pre, Progress, Q, Rb, Rbc, Rp, Rt, Rtc, Ruby, S, Samp, Script, Section, Select, Shadow, Slot, Small, Source, Spacer, Span, Strike, Strong, Style, Sub, Summary, Sup, Svg, Table, Tbody, Td, Template, Textarea, Tfoot, Th, Thead, Time, Title, Tr, Track, Tt, U, Ul, Var, Video, Wbr, Xmp, AltGlyph, AltGlyphDef, AltGlyphItem, Animate, AnimateColor, AnimateMotion, AnimateTransform, Animation, Circle, ClipPath, ColorProfile, Cursor, Defs, Desc, Discard, Ellipse, FeBlend, FeColorMatrix, FeComponentTransfer, FeComposite, FeConvolveMatrix, FeDiffuseLighting, FeDisplacementMap, FeDistantLight, FeDropShadow, FeFlood, FeFuncA, FeFuncB, FeFuncG, FeFuncR, FeGaussianBlur, FeImage, FeMerge, FeMergeNode, FeMorphology, FeOffset, FePointLight, FeSpecularLighting, FeSpotLight, FeTile, FeTurbulence, Filter, FontFace, FontFaceFormat, FontFaceName, FontFaceSrc, FontFaceUri, ForeignObject, G, Glyph, GlyphRef, Handler, Hatch, Hatchpath, Hkern, Line, LinearGradient, Listener, Marker, Mask, Mesh, Meshgradient, Meshpatch, Meshrow, Metadata, MissingGlyph, Mpath, Path, Pattern, Polygon, Polyline, Prefetch, RadialGradient, Rect, SetTag, SolidColor, Solidcolor, Stop, Switch, SymbolTag, Tbreak, Text, TextArea, TextPath, Tref, Tspan, Unknown, Use, View, Vkern */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ThemeProvider",
          function() {
            return ThemeProvider;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "withTheme",
          function() {
            return withTheme;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "A",
          function() {
            return A;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Abbr",
          function() {
            return Abbr;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Acronym",
          function() {
            return Acronym;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Address",
          function() {
            return Address;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Applet",
          function() {
            return Applet;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Area",
          function() {
            return Area;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Article",
          function() {
            return Article;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Aside",
          function() {
            return Aside;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Audio",
          function() {
            return Audio;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "B",
          function() {
            return B;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Base",
          function() {
            return Base;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Basefont",
          function() {
            return Basefont;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Bdi",
          function() {
            return Bdi;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Bdo",
          function() {
            return Bdo;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Bgsound",
          function() {
            return Bgsound;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Big",
          function() {
            return Big;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Blink",
          function() {
            return Blink;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Blockquote",
          function() {
            return Blockquote;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Body",
          function() {
            return Body;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Br",
          function() {
            return Br;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Button",
          function() {
            return Button;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Canvas",
          function() {
            return Canvas;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Caption",
          function() {
            return Caption;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Center",
          function() {
            return Center;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Cite",
          function() {
            return Cite;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Code",
          function() {
            return Code;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Col",
          function() {
            return Col;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Colgroup",
          function() {
            return Colgroup;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Command",
          function() {
            return Command;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Content",
          function() {
            return Content;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Data",
          function() {
            return Data;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Datalist",
          function() {
            return Datalist;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Dd",
          function() {
            return Dd;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Del",
          function() {
            return Del;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Details",
          function() {
            return Details;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Dfn",
          function() {
            return Dfn;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Dialog",
          function() {
            return Dialog;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Dir",
          function() {
            return Dir;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Div",
          function() {
            return Div;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Dl",
          function() {
            return Dl;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Dt",
          function() {
            return Dt;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Element",
          function() {
            return Element;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Em",
          function() {
            return Em;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Embed",
          function() {
            return Embed;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Fieldset",
          function() {
            return Fieldset;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Figcaption",
          function() {
            return Figcaption;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Figure",
          function() {
            return Figure;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Font",
          function() {
            return Font;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Footer",
          function() {
            return Footer;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Form",
          function() {
            return Form;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Frame",
          function() {
            return Frame;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Frameset",
          function() {
            return Frameset;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "H1",
          function() {
            return H1;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "H2",
          function() {
            return H2;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "H3",
          function() {
            return H3;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "H4",
          function() {
            return H4;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "H5",
          function() {
            return H5;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "H6",
          function() {
            return H6;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Head",
          function() {
            return Head;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Header",
          function() {
            return Header;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Hgroup",
          function() {
            return Hgroup;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Hr",
          function() {
            return Hr;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Html",
          function() {
            return Html;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "I",
          function() {
            return I;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Iframe",
          function() {
            return Iframe;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Image",
          function() {
            return Image;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Img",
          function() {
            return Img;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Input",
          function() {
            return Input;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Ins",
          function() {
            return Ins;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Isindex",
          function() {
            return Isindex;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Kbd",
          function() {
            return Kbd;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Keygen",
          function() {
            return Keygen;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Label",
          function() {
            return Label;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Legend",
          function() {
            return Legend;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Li",
          function() {
            return Li;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Link",
          function() {
            return Link;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Listing",
          function() {
            return Listing;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Main",
          function() {
            return Main;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MapTag",
          function() {
            return MapTag;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Mark",
          function() {
            return Mark;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Marquee",
          function() {
            return Marquee;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MathTag",
          function() {
            return MathTag;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Menu",
          function() {
            return Menu;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Menuitem",
          function() {
            return Menuitem;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Meta",
          function() {
            return Meta;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Meter",
          function() {
            return Meter;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Multicol",
          function() {
            return Multicol;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Nav",
          function() {
            return Nav;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Nextid",
          function() {
            return Nextid;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Nobr",
          function() {
            return Nobr;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Noembed",
          function() {
            return Noembed;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Noframes",
          function() {
            return Noframes;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Noscript",
          function() {
            return Noscript;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ObjectTag",
          function() {
            return ObjectTag;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Ol",
          function() {
            return Ol;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Optgroup",
          function() {
            return Optgroup;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Option",
          function() {
            return Option;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Output",
          function() {
            return Output;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "P",
          function() {
            return P;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Param",
          function() {
            return Param;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Picture",
          function() {
            return Picture;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Plaintext",
          function() {
            return Plaintext;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Pre",
          function() {
            return Pre;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Progress",
          function() {
            return Progress;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Q",
          function() {
            return Q;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Rb",
          function() {
            return Rb;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Rbc",
          function() {
            return Rbc;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Rp",
          function() {
            return Rp;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Rt",
          function() {
            return Rt;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Rtc",
          function() {
            return Rtc;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Ruby",
          function() {
            return Ruby;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "S",
          function() {
            return S;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Samp",
          function() {
            return Samp;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Script",
          function() {
            return Script;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Section",
          function() {
            return Section;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Select",
          function() {
            return Select;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Shadow",
          function() {
            return Shadow;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Slot",
          function() {
            return Slot;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Small",
          function() {
            return Small;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Source",
          function() {
            return Source;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Spacer",
          function() {
            return Spacer;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Span",
          function() {
            return Span;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Strike",
          function() {
            return Strike;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Strong",
          function() {
            return Strong;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Style",
          function() {
            return Style;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Sub",
          function() {
            return Sub;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Summary",
          function() {
            return Summary;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Sup",
          function() {
            return Sup;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Svg",
          function() {
            return Svg;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Table",
          function() {
            return Table;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Tbody",
          function() {
            return Tbody;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Td",
          function() {
            return Td;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Template",
          function() {
            return Template;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Textarea",
          function() {
            return Textarea;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Tfoot",
          function() {
            return Tfoot;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Th",
          function() {
            return Th;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Thead",
          function() {
            return Thead;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Time",
          function() {
            return Time;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Title",
          function() {
            return Title;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Tr",
          function() {
            return Tr;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Track",
          function() {
            return Track;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Tt",
          function() {
            return Tt;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "U",
          function() {
            return U;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Ul",
          function() {
            return Ul;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Var",
          function() {
            return Var;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Video",
          function() {
            return Video;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Wbr",
          function() {
            return Wbr;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Xmp",
          function() {
            return Xmp;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AltGlyph",
          function() {
            return AltGlyph;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AltGlyphDef",
          function() {
            return AltGlyphDef;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AltGlyphItem",
          function() {
            return AltGlyphItem;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Animate",
          function() {
            return Animate;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AnimateColor",
          function() {
            return AnimateColor;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AnimateMotion",
          function() {
            return AnimateMotion;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AnimateTransform",
          function() {
            return AnimateTransform;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Animation",
          function() {
            return Animation;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Circle",
          function() {
            return Circle;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ClipPath",
          function() {
            return ClipPath;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ColorProfile",
          function() {
            return ColorProfile;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Cursor",
          function() {
            return Cursor;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Defs",
          function() {
            return Defs;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Desc",
          function() {
            return Desc;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Discard",
          function() {
            return Discard;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Ellipse",
          function() {
            return Ellipse;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeBlend",
          function() {
            return FeBlend;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeColorMatrix",
          function() {
            return FeColorMatrix;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeComponentTransfer",
          function() {
            return FeComponentTransfer;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeComposite",
          function() {
            return FeComposite;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeConvolveMatrix",
          function() {
            return FeConvolveMatrix;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeDiffuseLighting",
          function() {
            return FeDiffuseLighting;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeDisplacementMap",
          function() {
            return FeDisplacementMap;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeDistantLight",
          function() {
            return FeDistantLight;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeDropShadow",
          function() {
            return FeDropShadow;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeFlood",
          function() {
            return FeFlood;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeFuncA",
          function() {
            return FeFuncA;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeFuncB",
          function() {
            return FeFuncB;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeFuncG",
          function() {
            return FeFuncG;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeFuncR",
          function() {
            return FeFuncR;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeGaussianBlur",
          function() {
            return FeGaussianBlur;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeImage",
          function() {
            return FeImage;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeMerge",
          function() {
            return FeMerge;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeMergeNode",
          function() {
            return FeMergeNode;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeMorphology",
          function() {
            return FeMorphology;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeOffset",
          function() {
            return FeOffset;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FePointLight",
          function() {
            return FePointLight;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeSpecularLighting",
          function() {
            return FeSpecularLighting;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeSpotLight",
          function() {
            return FeSpotLight;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeTile",
          function() {
            return FeTile;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FeTurbulence",
          function() {
            return FeTurbulence;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Filter",
          function() {
            return Filter;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FontFace",
          function() {
            return FontFace;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FontFaceFormat",
          function() {
            return FontFaceFormat;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FontFaceName",
          function() {
            return FontFaceName;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FontFaceSrc",
          function() {
            return FontFaceSrc;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FontFaceUri",
          function() {
            return FontFaceUri;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ForeignObject",
          function() {
            return ForeignObject;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "G",
          function() {
            return G;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Glyph",
          function() {
            return Glyph;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GlyphRef",
          function() {
            return GlyphRef;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Handler",
          function() {
            return Handler;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Hatch",
          function() {
            return Hatch;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Hatchpath",
          function() {
            return Hatchpath;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Hkern",
          function() {
            return Hkern;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Line",
          function() {
            return Line;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LinearGradient",
          function() {
            return LinearGradient;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Listener",
          function() {
            return Listener;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Marker",
          function() {
            return Marker;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Mask",
          function() {
            return Mask;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Mesh",
          function() {
            return Mesh;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Meshgradient",
          function() {
            return Meshgradient;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Meshpatch",
          function() {
            return Meshpatch;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Meshrow",
          function() {
            return Meshrow;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Metadata",
          function() {
            return Metadata;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MissingGlyph",
          function() {
            return MissingGlyph;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Mpath",
          function() {
            return Mpath;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Path",
          function() {
            return Path;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Pattern",
          function() {
            return Pattern;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Polygon",
          function() {
            return Polygon;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Polyline",
          function() {
            return Polyline;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Prefetch",
          function() {
            return Prefetch;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "RadialGradient",
          function() {
            return RadialGradient;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Rect",
          function() {
            return Rect;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SetTag",
          function() {
            return SetTag;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SolidColor",
          function() {
            return SolidColor;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Solidcolor",
          function() {
            return Solidcolor;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Stop",
          function() {
            return Stop;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Switch",
          function() {
            return Switch;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SymbolTag",
          function() {
            return SymbolTag;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Tbreak",
          function() {
            return Tbreak;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Text",
          function() {
            return Text;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TextArea",
          function() {
            return TextArea;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "TextPath",
          function() {
            return TextPath;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Tref",
          function() {
            return Tref;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Tspan",
          function() {
            return Tspan;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Unknown",
          function() {
            return Unknown;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Use",
          function() {
            return Use;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "View",
          function() {
            return View;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Vkern",
          function() {
            return Vkern;
          },
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! glamor */ "./node_modules/glamor/lib/index.js",
        );
        /* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          glamor__WEBPACK_IMPORTED_MODULE_1__,
        );

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
          "xmp",
        ];
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
          "vkern",
        ];
        var domElements = htmlTagNames
          .concat(svgTagNames)
          .filter(function(tag, index, array) {
            return array.indexOf(tag) === index;
          });

        var CHANNEL = "__glamorous__"; /* istanbul ignore next */

        var isPreact = false;

        var _PropTypes = void 0;

        /* istanbul ignore next */
        if (isPreact) {
          if (!react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes) {
            _PropTypes = function PropTypes() {
              return _PropTypes;
            };

            [
              "array",
              "bool",
              "func",
              "number",
              "object",
              "string",
              "symbol",
              "any",
              "arrayOf",
              "element",
              "instanceOf",
              "node",
              "objectOf",
              "oneOf",
              "oneOfType",
              "shape",
              "exact",
            ].forEach(function(type) {
              _PropTypes[type] = _PropTypes;
            });
          }
          // copied from preact-compat
          /* eslint-disable no-eq-null, eqeqeq, consistent-return */
          if (!react__WEBPACK_IMPORTED_MODULE_0___default.a.Children) {
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
                return (children && children.length) || 0;
              },
              only: function only(children) {
                children = Children.toArray(children);
                if (children.length !== 1) {
                  throw new Error("Children.only() expects only one child.");
                }
                return children[0];
              },
              toArray: function toArray(children) {
                if (children == null) {
                  return [];
                }
                return [].concat(children);
              },
            };
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Children = Children;
          }
          /* eslint-enable no-eq-null, eqeqeq, consistent-return */
        } else if (
          parseFloat(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.version.slice(0, 4),
          ) >= 15.5
        ) {
          /* istanbul ignore next */
          try {
            _PropTypes = __webpack_require__(
              /*! prop-types */ "./node_modules/prop-types/index.js",
            );
            /* istanbul ignore next */
          } catch (error) {
            // ignore
          }
        }
        /* istanbul ignore next */
        _PropTypes =
          _PropTypes || react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes;

        /*
eslint
  import/no-mutable-exports:0,
  import/prefer-default-export:0,
  react/no-deprecated:0
 */

        var classCallCheck = function(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        };

        var _extends =
          Object.assign ||
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

        var inherits = function(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass,
            );
          }

          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        };

        var objectWithoutProperties = function(obj, keys) {
          var target = {};

          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }

          return target;
        };

        var possibleConstructorReturn = function(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }

          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        };

        function generateWarningMessage(Comp) {
          var componentName =
            Comp.displayName || Comp.name || "FunctionComponent";
          // eslint-disable-next-line max-len
          return (
            'glamorous warning: Expected component called "' +
            componentName +
            '" which uses withTheme to be within a ThemeProvider but none was found.'
          );
        }

        function withTheme(ComponentToTheme) {
          var _defaultContextTypes;

          var _ref =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
            _ref$noWarn = _ref.noWarn,
            noWarn = _ref$noWarn === undefined ? false : _ref$noWarn,
            _ref$createElement = _ref.createElement,
            createElement =
              _ref$createElement === undefined ? true : _ref$createElement;

          var ThemedComponent = (function(_React$Component) {
            inherits(ThemedComponent, _React$Component);

            function ThemedComponent() {
              var _temp, _this, _ret;

              classCallCheck(this, ThemedComponent);

              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              return (
                (_ret = ((_temp = ((_this = possibleConstructorReturn(
                  this,
                  _React$Component.call.apply(
                    _React$Component,
                    [this].concat(args),
                  ),
                )),
                _this)),
                (_this.warned = noWarn),
                (_this.state = { theme: {} }),
                (_this.setTheme = function(theme) {
                  return _this.setState({ theme: theme });
                }),
                _temp)),
                possibleConstructorReturn(_this, _ret)
              );
            }

            // eslint-disable-next-line complexity
            ThemedComponent.prototype.componentWillMount = function componentWillMount() {
              if (!this.context[CHANNEL]) {
                if (true && !this.warned) {
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

            ThemedComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(
              nextProps,
            ) {
              if (this.props.theme !== nextProps.theme) {
                this.setTheme(nextProps.theme);
              }
            };

            ThemedComponent.prototype.componentDidMount = function componentDidMount() {
              if (this.context[CHANNEL] && !this.props.theme) {
                // subscribe to future theme changes
                this.subscriptionId = this.context[CHANNEL].subscribe(
                  this.setTheme,
                );
              }
            };

            ThemedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
              // cleanup subscription
              this.subscriptionId &&
                this.context[CHANNEL].unsubscribe(this.subscriptionId);
            };

            ThemedComponent.prototype.render = function render() {
              if (createElement) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ComponentToTheme,
                  _extends({}, this.props, this.state),
                );
              } else {
                // this allows us to effectively use the GlamorousComponent
                // as our `render` method without going through lifecycle hooks.
                // Also allows us to forward the context in the scenario where
                // a user wants to add more context.
                // eslint-disable-next-line babel/new-cap
                return ComponentToTheme.call(
                  this,
                  _extends({}, this.props, this.state),
                  this.context,
                );
              }
            };

            return ThemedComponent;
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

          true
            ? (ThemedComponent.propTypes = {
                theme: _PropTypes.object,
              })
            : undefined;

          var defaultContextTypes = ((_defaultContextTypes = {}),
          (_defaultContextTypes[CHANNEL] = _PropTypes.object),
          _defaultContextTypes);

          var userDefinedContextTypes = null;

          // configure the contextTypes to be settable by the user,
          // however also retaining the glamorous channel.
          Object.defineProperty(ThemedComponent, "contextTypes", {
            enumerable: true,
            configurable: true,
            set: function set$$1(value) {
              userDefinedContextTypes = value;
            },
            get: function get$$1() {
              // if the user has provided a contextTypes definition,
              // merge the default context types with the provided ones.
              if (userDefinedContextTypes) {
                return _extends(
                  {},
                  defaultContextTypes,
                  userDefinedContextTypes,
                );
              }
              return defaultContextTypes;
            },
          });

          return ThemedComponent;
        }

        var isFunction_1 = isFunction;

        var toString = Object.prototype.toString;

        function isFunction(fn) {
          var string = toString.call(fn);
          return (
            string === "[object Function]" ||
            (typeof fn === "function" && string !== "[object RegExp]") ||
            (typeof window !== "undefined" &&
              // IE8 and below
              (fn === window.setTimeout ||
                fn === window.alert ||
                fn === window.confirm ||
                fn === window.prompt))
          );
        }

        /*!
         * isobject <https://github.com/jonschlinkert/isobject>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */

        var isobject = function isObject(val) {
          return (
            val != null &&
            typeof val === "object" &&
            Array.isArray(val) === false
          );
        };

        function isObjectObject(o) {
          return (
            isobject(o) === true &&
            Object.prototype.toString.call(o) === "[object Object]"
          );
        }

        var isPlainObject = function isPlainObject(o) {
          var ctor, prot;

          if (isObjectObject(o) === false) return false;

          // If has modified constructor
          ctor = o.constructor;
          if (typeof ctor !== "function") return false;

          // If has modified prototype
          prot = ctor.prototype;
          if (isObjectObject(prot) === false) return false;

          // If constructor does not have an Object-specific method
          if (prot.hasOwnProperty("isPrototypeOf") === false) {
            return false;
          }

          // Most likely a plain Object
          return true;
        };

        function createBroadcast(initialState) {
          var listeners = {};
          var id = 1;
          var _state = initialState;

          function getState() {
            return _state;
          }

          function setState(state) {
            _state = state;
            var keys = Object.keys(listeners);
            var i = 0;
            var len = keys.length;
            for (; i < len; i++) {
              // if a listener gets unsubscribed during setState we just skip it
              if (listeners[keys[i]]) {
                listeners[keys[i]](state);
              }
            }
          }

          // subscribe to changes and return the subscriptionId
          function subscribe(listener) {
            if (typeof listener !== "function") {
              throw new Error("listener must be a function.");
            }
            var currentId = id;
            listeners[currentId] = listener;
            id += 1;
            return currentId;
          }

          // remove subscription by removing the listener function
          function unsubscribe(id) {
            listeners[id] = undefined;
          }

          return {
            getState: getState,
            setState: setState,
            subscribe: subscribe,
            unsubscribe: unsubscribe,
          };
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

        var ThemeProvider = (function(_React$Component) {
          inherits(ThemeProvider, _React$Component);

          function ThemeProvider() {
            var _temp, _this, _ret;

            classCallCheck(this, ThemeProvider);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = possibleConstructorReturn(
                this,
                _React$Component.call.apply(
                  _React$Component,
                  [this].concat(args),
                ),
              )),
              _this)),
              (_this.setOuterTheme = function(theme) {
                _this.outerTheme = theme;
                if (_this.broadcast !== undefined) {
                  _this.publishTheme();
                }
              }),
              _temp)),
              possibleConstructorReturn(_this, _ret)
            );
          }

          // create theme, by merging with outer theme, if present
          ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
            var theme = passedTheme || this.props.theme;
            if (isFunction_1(theme)) {
              var mergedTheme = theme(this.outerTheme);
              if (!isPlainObject(mergedTheme)) {
                throw new Error(
                  "[ThemeProvider] Please return an object from your theme function, " +
                    "i.e. theme={() => ({})}!",
                );
              }
              return mergedTheme;
            }
            return _extends({}, this.outerTheme, theme);
          };

          ThemeProvider.prototype.getChildContext = function getChildContext() {
            var _ref;

            return (_ref = {}), (_ref[CHANNEL] = this.broadcast), _ref;
          };

          ThemeProvider.prototype.publishTheme = function publishTheme(theme) {
            this.broadcast.setState(this.getTheme(theme));
          };

          ThemeProvider.prototype.componentDidMount = function componentDidMount() {
            // create a new subscription for keeping track of outer theme, if present
            if (this.context[CHANNEL]) {
              this.subscriptionId = this.context[CHANNEL].subscribe(
                this.setOuterTheme,
              );
            }
          };

          ThemeProvider.prototype.componentWillMount = function componentWillMount() {
            // set broadcast state by merging outer theme with own
            if (this.context[CHANNEL]) {
              this.setOuterTheme(this.context[CHANNEL].getState());
            }
            this.broadcast = createBroadcast(this.getTheme(this.props.theme));
          };

          ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(
            nextProps,
          ) {
            if (this.props.theme !== nextProps.theme) {
              this.publishTheme(nextProps.theme);
            }
          };

          ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
            this.subscriptionId &&
              this.context[CHANNEL].unsubscribe(this.subscriptionId);
          };

          ThemeProvider.prototype.render = function render() {
            return this.props.children
              ? react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(
                  this.props.children,
                )
              : null;
          };

          return ThemeProvider;
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

        ThemeProvider.childContextTypes = ((_ThemeProvider$childC = {}),
        (_ThemeProvider$childC[CHANNEL] = _PropTypes.object.isRequired),
        _ThemeProvider$childC);

        ThemeProvider.contextTypes = ((_ThemeProvider$contex = {}),
        (_ThemeProvider$contex[CHANNEL] = _PropTypes.object),
        _ThemeProvider$contex);

        true
          ? (ThemeProvider.propTypes = {
              theme: _PropTypes.oneOfType([_PropTypes.object, _PropTypes.func])
                .isRequired,
              children: _PropTypes.node,
            })
          : undefined;

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
          className
            .toString()
            .split(" ")
            .forEach(function(name) {
              if (
                glamor__WEBPACK_IMPORTED_MODULE_1__["styleSheet"].registered[
                  name.substring(4)
                ] === undefined
              ) {
                glamorlessClassName.push(name);
              } else {
                var style = buildGlamorSrcFromClassName(name);
                glamorStyles.push(style);
              }
            });

          return {
            glamorlessClassName: glamorlessClassName,
            glamorStyles: glamorStyles,
          };
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

          return (_ref = {}), (_ref["data-" + className] = ""), _ref;
        }

        function getGlamorClassName(_ref2) {
          var styles = _ref2.styles,
            props = _ref2.props,
            cssOverrides = _ref2.cssOverrides,
            cssProp = _ref2.cssProp,
            context = _ref2.context,
            displayName = _ref2.displayName;

          var _handleStyles = handleStyles(
              [].concat(styles, [props.className, cssOverrides, cssProp]),
              props,
              context,
            ),
            mappedArgs = _handleStyles.mappedArgs,
            nonGlamorClassNames = _handleStyles.nonGlamorClassNames;
          // eslint-disable-next-line max-len

          var isDev = true || false;
          var devRules = isDev ? { label: displayName } : null;
          var glamorClassName = glamor__WEBPACK_IMPORTED_MODULE_1__["css"]
            .apply(undefined, [devRules].concat(mappedArgs))
            .toString();
          var extras = nonGlamorClassNames.join(" ").trim();
          return (glamorClassName + " " + extras).trim();
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
            while (typeof current === "function") {
              current = current(props, context);
            }
            if (typeof current === "string") {
              var _extractGlamorStyles = extractGlamorStyles(current),
                glamorStyles = _extractGlamorStyles.glamorStyles,
                glamorlessClassName = _extractGlamorStyles.glamorlessClassName;

              mappedArgs.push.apply(mappedArgs, glamorStyles);
              nonGlamorClassNames.push.apply(
                nonGlamorClassNames,
                glamorlessClassName,
              );
            } else if (Array.isArray(current)) {
              var recursed = handleStyles(current, props, context);
              mappedArgs.push.apply(mappedArgs, recursed.mappedArgs);
              nonGlamorClassNames.push.apply(
                nonGlamorClassNames,
                recursed.nonGlamorClassNames,
              );
            } else {
              mappedArgs.push(current);
            }
          }
          return {
            mappedArgs: mappedArgs,
            nonGlamorClassNames: nonGlamorClassNames,
          };
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
            var config =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var rootEl = config.rootEl,
              displayName = config.displayName,
              shouldClassNameUpdate = config.shouldClassNameUpdate,
              _config$filterProps = config.filterProps,
              filterProps =
                _config$filterProps === undefined ? [] : _config$filterProps,
              _config$forwardProps = config.forwardProps,
              forwardProps =
                _config$forwardProps === undefined ? [] : _config$forwardProps,
              _config$propsAreCssOv = config.propsAreCssOverrides,
              propsAreCssOverrides =
                _config$propsAreCssOv === undefined
                  ? comp.propsAreCssOverrides
                  : _config$propsAreCssOv,
              basePropsToApply = config.withProps;

            Object.assign(glamorousComponentFactory, {
              withConfig: withConfig,
            });
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
              for (
                var _len = arguments.length, styles = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                styles[_key] = arguments[_key];
              }

              /**
               * This is a component which will render the comp (closure)
               * with the glamorous styles (closure). Forwards any valid
               * props to the underlying component.
               */
              var GlamorousComponent = withTheme(
                function(props, context) {
                  props = getPropsToApply(
                    GlamorousComponent.propsToApply,
                    {},
                    props,
                    context,
                  );
                  var updateClassName = shouldUpdate(
                    props,
                    context,
                    this.previous,
                  );

                  if (shouldClassNameUpdate) {
                    this.previous = { props: props, context: context };
                  }

                  var _splitProps = splitProps(props, GlamorousComponent),
                    toForward = _splitProps.toForward,
                    cssOverrides = _splitProps.cssOverrides,
                    cssProp = _splitProps.cssProp;

                  // create className to apply

                  this.className = updateClassName
                    ? getGlamorClassName({
                        styles: GlamorousComponent.styles,
                        props: props,
                        cssOverrides: cssOverrides,
                        cssProp: cssProp,
                        context: context,
                        displayName: GlamorousComponent.displayName,
                      })
                    : this.className;

                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    GlamorousComponent.comp,
                    _extends(
                      {
                        // if innerRef is forwarded we don't want to apply it here
                        ref:
                          "innerRef" in toForward ? undefined : props.innerRef,
                      },
                      toForward,
                      {
                        className: this.className,
                      },
                    ),
                  );
                },
                { noWarn: true, createElement: false },
              );

              true
                ? (GlamorousComponent.propTypes = {
                    // className accepts an object due to glamor's css function
                    // returning an object with a toString method that gives the className
                    className: _PropTypes.oneOfType([
                      _PropTypes.string,
                      _PropTypes.object,
                    ]),
                    cssOverrides: _PropTypes.object,
                    innerRef: _PropTypes.oneOfType([
                      _PropTypes.func,
                      _PropTypes.object,
                    ]),
                    glam: _PropTypes.object,
                  })
                : undefined;

              function shouldUpdate(props, context, previous) {
                // exiting early so components which do not use this
                // optimization are not penalized by hanging onto
                // references to previous props and context
                if (!shouldClassNameUpdate) {
                  return true;
                }
                var update = true;
                if (previous) {
                  if (
                    !shouldClassNameUpdate(
                      previous.props,
                      props,
                      previous.context,
                      context,
                    )
                  ) {
                    update = false;
                  }
                }

                return update;
              }

              Object.assign(
                GlamorousComponent,
                getGlamorousComponentMetadata({
                  comp: comp,
                  styles: styles,
                  rootEl: rootEl,
                  filterProps: filterProps,
                  forwardProps: forwardProps,
                  displayName: displayName,
                  propsToApply: basePropsToApply,
                }),
                {
                  isGlamorousComponent: true,
                  propsAreCssOverrides: propsAreCssOverrides,
                  withComponent: function(newComp) {
                    var options =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {};
                    var fwp = GlamorousComponent.forwardProps,
                      flp = GlamorousComponent.filterProps,
                      componentProperties = objectWithoutProperties(
                        GlamorousComponent,
                        ["forwardProps", "filterProps"],
                      );

                    return glamorous(
                      _extends({}, componentProperties, {
                        comp: newComp,
                        rootEl: getRootEl(newComp),
                      }),
                      _extends(
                        {
                          // allows the forwardProps and filterProps to be overridden
                          forwardProps: fwp,
                          filterProps: flp,
                        },
                        options,
                      ),
                    )();
                  },
                  withProps: function() {
                    for (
                      var _len2 = arguments.length,
                        propsToApply = Array(_len2),
                        _key2 = 0;
                      _key2 < _len2;
                      _key2++
                    ) {
                      propsToApply[_key2] = arguments[_key2];
                    }

                    return glamorous(GlamorousComponent, {
                      withProps: propsToApply,
                    })();
                  },
                  withConfig: withConfig,
                },
              );
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
            var propsToApply = comp.propsToApply
              ? [].concat(comp.propsToApply, arrayify(basePropsToApply))
              : arrayify(basePropsToApply);
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
              displayName:
                displayName || "glamorous(" + getDisplayName(comp) + ")",
              // these are props that should be applied to the component at render time
              propsToApply: propsToApply,
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
          propsToApply.forEach(function(propsToApplyItem) {
            if (typeof propsToApplyItem === "function") {
              return Object.assign(
                accumulator,
                propsToApplyItem(
                  Object.assign({}, accumulator, props),
                  context,
                ),
              );
            } else if (Array.isArray(propsToApplyItem)) {
              return Object.assign(
                accumulator,
                getPropsToApply(propsToApplyItem, accumulator, props, context),
              );
            }
            return Object.assign(accumulator, propsToApplyItem);
          });
          // props wins
          return Object.assign(accumulator, props);
        }

        function arrayify() {
          var x =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : [];

          return Array.isArray(x) ? x : [x];
        }

        function when(comp, prop) {
          return comp ? comp.concat(prop) : prop;
        }

        function getRootEl(comp) {
          return comp.rootEl ? comp.rootEl : comp.comp || comp;
        }

        function getDisplayName(comp) {
          return typeof comp === "string"
            ? comp
            : comp.displayName || comp.name || "unknown";
        }

        //
        // Main
        //

        function memoize(fn, options) {
          var cache = options && options.cache ? options.cache : cacheDefault;

          var serializer =
            options && options.serializer
              ? options.serializer
              : serializerDefault;

          var strategy =
            options && options.strategy ? options.strategy : strategyDefault;

          return strategy(fn, {
            cache: cache,
            serializer: serializer,
          });
        }

        //
        // Strategy
        //

        function isPrimitive(value) {
          return (
            value == null ||
            typeof value === "number" ||
            typeof value === "boolean"
          ); // || typeof value === "string" 'unsafe' primitive for our needs
        }

        function monadic(fn, cache, serializer, arg) {
          var cacheKey = isPrimitive(arg) ? arg : serializer(arg);

          var computedValue = cache.get(cacheKey);
          if (typeof computedValue === "undefined") {
            computedValue = fn.call(this, arg);
            cache.set(cacheKey, computedValue);
          }

          return computedValue;
        }

        function variadic(fn, cache, serializer) {
          var args = Array.prototype.slice.call(arguments, 3);
          var cacheKey = serializer(args);

          var computedValue = cache.get(cacheKey);
          if (typeof computedValue === "undefined") {
            computedValue = fn.apply(this, args);
            cache.set(cacheKey, computedValue);
          }

          return computedValue;
        }

        function assemble(fn, context, strategy, cache, serialize) {
          return strategy.bind(context, fn, cache, serialize);
        }

        function strategyDefault(fn, options) {
          var strategy = fn.length === 1 ? monadic : variadic;

          return assemble(
            fn,
            this,
            strategy,
            options.cache.create(),
            options.serializer,
          );
        }

        function strategyVariadic(fn, options) {
          var strategy = variadic;

          return assemble(
            fn,
            this,
            strategy,
            options.cache.create(),
            options.serializer,
          );
        }

        function strategyMonadic(fn, options) {
          var strategy = monadic;

          return assemble(
            fn,
            this,
            strategy,
            options.cache.create(),
            options.serializer,
          );
        }

        //
        // Serializer
        //

        function serializerDefault() {
          return JSON.stringify(arguments);
        }

        //
        // Cache
        //

        function ObjectWithoutPrototypeCache() {
          this.cache = Object.create(null);
        }

        ObjectWithoutPrototypeCache.prototype.has = function(key) {
          return key in this.cache;
        };

        ObjectWithoutPrototypeCache.prototype.get = function(key) {
          return this.cache[key];
        };

        ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
          this.cache[key] = value;
        };

        var cacheDefault = {
          create: function create() {
            return new ObjectWithoutPrototypeCache();
          },
        };

        //
        // API
        //

        var src = memoize;
        var strategies = {
          variadic: strategyVariadic,
          monadic: strategyMonadic,
        };
        src.strategies = strategies;

        function unwrapExports(x) {
          return x &&
            x.__esModule &&
            Object.prototype.hasOwnProperty.call(x, "default")
            ? x.default
            : x;
        }

        function createCommonjsModule(fn, module) {
          return (
            (module = { exports: {} }),
            fn(module, module.exports),
            module.exports
          );
        }

        function getCjsExportFromNamespace(n) {
          return (n && n.default) || n;
        }

        var a = [
          "coords",
          "download",
          "href",
          "name",
          "rel",
          "shape",
          "target",
          "type",
          "onClick",
        ];
        var abbr = ["title"];
        var applet = ["alt", "height", "name", "width"];
        var area = [
          "alt",
          "coords",
          "download",
          "href",
          "rel",
          "shape",
          "target",
          "type",
        ];
        var audio = ["controls", "loop", "muted", "preload", "src"];
        var base = ["href", "target"];
        var basefont = ["size"];
        var bdo = ["dir"];
        var blockquote = ["cite"];
        var button = ["disabled", "form", "name", "type", "value"];
        var canvas = ["height", "width"];
        var col = ["span", "width"];
        var colgroup = ["span", "width"];
        var data = ["value"];
        var del = ["cite"];
        var details = ["open"];
        var dfn = ["title"];
        var dialog = ["open"];
        var embed = ["height", "src", "type", "width"];
        var fieldset = ["disabled", "form", "name"];
        var font = ["size"];
        var form = [
          "accept",
          "action",
          "method",
          "name",
          "target",
          "onChange",
          "onInput",
          "onInvalid",
          "onSubmit",
        ];
        var frame = ["name", "scrolling", "src"];
        var frameset = ["cols", "rows"];
        var head = ["profile"];
        var hr = ["size", "width"];
        var html = ["manifest"];
        var iframe = ["height", "name", "sandbox", "scrolling", "src", "width"];
        var img = ["alt", "height", "name", "sizes", "src", "width"];
        var input = [
          "accept",
          "alt",
          "autoCapitalize",
          "autoCorrect",
          "autoSave",
          "checked",
          "defaultChecked",
          "defaultValue",
          "disabled",
          "form",
          "height",
          "list",
          "max",
          "min",
          "multiple",
          "name",
          "onChange",
          "pattern",
          "placeholder",
          "required",
          "results",
          "size",
          "src",
          "step",
          "title",
          "type",
          "value",
          "width",
        ];
        var ins = ["cite"];
        var keygen = ["challenge", "disabled", "form", "name"];
        var label = ["form"];
        var li = ["type", "value"];
        var link = [
          "color",
          "href",
          "integrity",
          "media",
          "nonce",
          "rel",
          "scope",
          "sizes",
          "target",
          "title",
          "type",
        ];
        var map = ["name"];
        var meta = ["content", "name"];
        var meter = ["high", "low", "max", "min", "optimum", "value"];
        var object = ["data", "form", "height", "name", "type", "width"];
        var ol = ["reversed", "start", "type"];
        var optgroup = ["disabled", "label"];
        var option = ["disabled", "label", "selected", "value"];
        var output = ["form", "name"];
        var param = ["name", "type", "value"];
        var pre = ["width"];
        var progress = ["max", "value"];
        var q = ["cite"];
        var script = ["async", "defer", "integrity", "nonce", "src", "type"];
        var select = [
          "defaultValue",
          "disabled",
          "form",
          "multiple",
          "name",
          "onChange",
          "required",
          "size",
          "value",
        ];
        var slot = ["name"];
        var source = ["media", "sizes", "src", "type"];
        var style = ["media", "nonce", "title", "type"];
        var table = ["summary", "width"];
        var td = ["headers", "height", "scope", "width"];
        var textarea = [
          "autoCapitalize",
          "autoCorrect",
          "cols",
          "defaultValue",
          "disabled",
          "form",
          "name",
          "onChange",
          "placeholder",
          "required",
          "rows",
          "value",
          "wrap",
        ];
        var th = ["headers", "height", "scope", "width"];
        var track = ["default", "kind", "label", "src"];
        var ul = ["type"];
        var video = [
          "controls",
          "height",
          "loop",
          "muted",
          "playsInline",
          "poster",
          "preload",
          "src",
          "width",
        ];
        var svg = [
          "accentHeight",
          "accumulate",
          "additive",
          "alignmentBaseline",
          "allowReorder",
          "alphabetic",
          "amplitude",
          "arabicForm",
          "ascent",
          "attributeName",
          "attributeType",
          "autoReverse",
          "azimuth",
          "baseFrequency",
          "baseProfile",
          "baselineShift",
          "bbox",
          "begin",
          "bias",
          "by",
          "calcMode",
          "capHeight",
          "clip",
          "clipPath",
          "clipPathUnits",
          "clipRule",
          "color",
          "colorInterpolation",
          "colorInterpolationFilters",
          "colorProfile",
          "colorRendering",
          "contentScriptType",
          "contentStyleType",
          "cursor",
          "cx",
          "cy",
          "d",
          "decelerate",
          "descent",
          "diffuseConstant",
          "direction",
          "display",
          "divisor",
          "dominantBaseline",
          "dur",
          "dx",
          "dy",
          "edgeMode",
          "elevation",
          "enableBackground",
          "end",
          "exponent",
          "externalResourcesRequired",
          "fill",
          "fillOpacity",
          "fillRule",
          "filter",
          "filterRes",
          "filterUnits",
          "floodColor",
          "floodOpacity",
          "focusable",
          "fontFamily",
          "fontSize",
          "fontSizeAdjust",
          "fontStretch",
          "fontStyle",
          "fontVariant",
          "fontWeight",
          "format",
          "from",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyphName",
          "glyphOrientationHorizontal",
          "glyphOrientationVertical",
          "glyphRef",
          "gradientTransform",
          "gradientUnits",
          "hanging",
          "height",
          "horizAdvX",
          "horizOriginX",
          "ideographic",
          "imageRendering",
          "in",
          "in2",
          "intercept",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kernelMatrix",
          "kernelUnitLength",
          "kerning",
          "keyPoints",
          "keySplines",
          "keyTimes",
          "lengthAdjust",
          "letterSpacing",
          "lightingColor",
          "limitingConeAngle",
          "local",
          "markerEnd",
          "markerHeight",
          "markerMid",
          "markerStart",
          "markerUnits",
          "markerWidth",
          "mask",
          "maskContentUnits",
          "maskUnits",
          "mathematical",
          "mode",
          "numOctaves",
          "offset",
          "opacity",
          "operator",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "overlinePosition",
          "overlineThickness",
          "paintOrder",
          "panose1",
          "pathLength",
          "patternContentUnits",
          "patternTransform",
          "patternUnits",
          "pointerEvents",
          "points",
          "pointsAtX",
          "pointsAtY",
          "pointsAtZ",
          "preserveAlpha",
          "preserveAspectRatio",
          "primitiveUnits",
          "r",
          "radius",
          "refX",
          "refY",
          "renderingIntent",
          "repeatCount",
          "repeatDur",
          "requiredExtensions",
          "requiredFeatures",
          "restart",
          "result",
          "rotate",
          "rx",
          "ry",
          "scale",
          "seed",
          "shapeRendering",
          "slope",
          "spacing",
          "specularConstant",
          "specularExponent",
          "speed",
          "spreadMethod",
          "startOffset",
          "stdDeviation",
          "stemh",
          "stemv",
          "stitchTiles",
          "stopColor",
          "stopOpacity",
          "strikethroughPosition",
          "strikethroughThickness",
          "string",
          "stroke",
          "strokeDasharray",
          "strokeDashoffset",
          "strokeLinecap",
          "strokeLinejoin",
          "strokeMiterlimit",
          "strokeOpacity",
          "strokeWidth",
          "surfaceScale",
          "systemLanguage",
          "tableValues",
          "targetX",
          "targetY",
          "textAnchor",
          "textDecoration",
          "textLength",
          "textRendering",
          "to",
          "transform",
          "u1",
          "u2",
          "underlinePosition",
          "underlineThickness",
          "unicode",
          "unicodeBidi",
          "unicodeRange",
          "unitsPerEm",
          "vAlphabetic",
          "vHanging",
          "vIdeographic",
          "vMathematical",
          "values",
          "vectorEffect",
          "version",
          "vertAdvY",
          "vertOriginX",
          "vertOriginY",
          "viewBox",
          "viewTarget",
          "visibility",
          "width",
          "widths",
          "wordSpacing",
          "writingMode",
          "x",
          "x1",
          "x2",
          "xChannelSelector",
          "xHeight",
          "xlinkActuate",
          "xlinkArcrole",
          "xlinkHref",
          "xlinkRole",
          "xlinkShow",
          "xlinkTitle",
          "xlinkType",
          "xmlBase",
          "xmlLang",
          "xmlSpace",
          "xmlns",
          "xmlnsXlink",
          "y",
          "y1",
          "y2",
          "yChannelSelector",
          "z",
          "zoomAndPan",
        ];
        var elements = {
          html: [
            "a",
            "abbr",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "base",
            "bdi",
            "bdo",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "cite",
            "code",
            "col",
            "colgroup",
            "data",
            "datalist",
            "dd",
            "del",
            "details",
            "dfn",
            "dialog",
            "div",
            "dl",
            "dt",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
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
            "img",
            "input",
            "ins",
            "kbd",
            "keygen",
            "label",
            "legend",
            "li",
            "link",
            "main",
            "map",
            "mark",
            "math",
            "menu",
            "menuitem",
            "meta",
            "meter",
            "nav",
            "noscript",
            "object",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "param",
            "picture",
            "pre",
            "progress",
            "q",
            "rb",
            "rp",
            "rt",
            "rtc",
            "ruby",
            "s",
            "samp",
            "script",
            "section",
            "select",
            "slot",
            "small",
            "source",
            "span",
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
            "u",
            "ul",
            "var",
            "video",
            "wbr",
          ],
          svg: [
            "a",
            "altGlyph",
            "altGlyphDef",
            "altGlyphItem",
            "animate",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "circle",
            "clipPath",
            "color-profile",
            "cursor",
            "defs",
            "desc",
            "ellipse",
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
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
            "hkern",
            "image",
            "line",
            "linearGradient",
            "marker",
            "mask",
            "metadata",
            "missing-glyph",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "script",
            "set",
            "stop",
            "style",
            "svg",
            "switch",
            "symbol",
            "text",
            "textPath",
            "title",
            "tref",
            "tspan",
            "use",
            "view",
            "vkern",
          ],
        };
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
          "*": [
            "about",
            "acceptCharset",
            "accessKey",
            "allowFullScreen",
            "allowTransparency",
            "autoComplete",
            "autoFocus",
            "autoPlay",
            "capture",
            "cellPadding",
            "cellSpacing",
            "charSet",
            "classID",
            "className",
            "colSpan",
            "contentEditable",
            "contextMenu",
            "crossOrigin",
            "dangerouslySetInnerHTML",
            "datatype",
            "dateTime",
            "dir",
            "draggable",
            "encType",
            "formAction",
            "formEncType",
            "formMethod",
            "formNoValidate",
            "formTarget",
            "frameBorder",
            "hidden",
            "hrefLang",
            "htmlFor",
            "httpEquiv",
            "icon",
            "id",
            "inlist",
            "inputMode",
            "is",
            "itemID",
            "itemProp",
            "itemRef",
            "itemScope",
            "itemType",
            "keyParams",
            "keyType",
            "lang",
            "marginHeight",
            "marginWidth",
            "maxLength",
            "mediaGroup",
            "minLength",
            "noValidate",
            "prefix",
            "property",
            "radioGroup",
            "readOnly",
            "resource",
            "role",
            "rowSpan",
            "scoped",
            "seamless",
            "security",
            "spellCheck",
            "srcDoc",
            "srcLang",
            "srcSet",
            "style",
            "suppressContentEditableWarning",
            "tabIndex",
            "title",
            "typeof",
            "unselectable",
            "useMap",
            "vocab",
            "wmode",
          ],
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
          default: reactHtmlAttributes,
        });

        var reactHtmlAttributes$2 = getCjsExportFromNamespace(
          reactHtmlAttributes$1,
        );

        var dist = createCommonjsModule(function(module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true,
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
        var reactProps = [
          "children",
          "dangerouslySetInnerHTML",
          "key",
          "ref",
          "autoFocus",
          "defaultValue",
          "valueLink",
          "defaultChecked",
          "checkedLink",
          "innerHTML",
          "suppressContentEditableWarning",
          "onFocusIn",
          "onFocusOut",
          "className",

          /* List copied from https://facebook.github.io/react/docs/events.html */
          "onCopy",
          "onCut",
          "onPaste",
          "onCompositionEnd",
          "onCompositionStart",
          "onCompositionUpdate",
          "onKeyDown",
          "onKeyPress",
          "onKeyUp",
          "onFocus",
          "onBlur",
          "onChange",
          "onInput",
          "onInvalid",
          "onSubmit",
          "onClick",
          "onContextMenu",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onSelect",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onScroll",
          "onWheel",
          "onAbort",
          "onCanPlay",
          "onCanPlayThrough",
          "onDurationChange",
          "onEmptied",
          "onEncrypted",
          "onEnded",
          "onError",
          "onLoadedData",
          "onLoadedMetadata",
          "onLoadStart",
          "onPause",
          "onPlay",
          "onPlaying",
          "onProgress",
          "onRateChange",
          "onSeeked",
          "onSeeking",
          "onStalled",
          "onSuspend",
          "onTimeUpdate",
          "onVolumeChange",
          "onWaiting",
          "onLoad",
          "onAnimationStart",
          "onAnimationEnd",
          "onAnimationIteration",
          "onTransitionEnd",
          "onCopyCapture",
          "onCutCapture",
          "onPasteCapture",
          "onCompositionEndCapture",
          "onCompositionStartCapture",
          "onCompositionUpdateCapture",
          "onKeyDownCapture",
          "onKeyPressCapture",
          "onKeyUpCapture",
          "onFocusCapture",
          "onBlurCapture",
          "onChangeCapture",
          "onInputCapture",
          "onSubmitCapture",
          "onClickCapture",
          "onContextMenuCapture",
          "onDoubleClickCapture",
          "onDragCapture",
          "onDragEndCapture",
          "onDragEnterCapture",
          "onDragExitCapture",
          "onDragLeaveCapture",
          "onDragOverCapture",
          "onDragStartCapture",
          "onDropCapture",
          "onMouseDownCapture",
          "onMouseEnterCapture",
          "onMouseLeaveCapture",
          "onMouseMoveCapture",
          "onMouseOutCapture",
          "onMouseOverCapture",
          "onMouseUpCapture",
          "onSelectCapture",
          "onTouchCancelCapture",
          "onTouchEndCapture",
          "onTouchMoveCapture",
          "onTouchStartCapture",
          "onScrollCapture",
          "onWheelCapture",
          "onAbortCapture",
          "onCanPlayCapture",
          "onCanPlayThroughCapture",
          "onDurationChangeCapture",
          "onEmptiedCapture",
          "onEncryptedCapture",
          "onEndedCapture",
          "onErrorCapture",
          "onLoadedDataCapture",
          "onLoadedMetadataCapture",
          "onLoadStartCapture",
          "onPauseCapture",
          "onPlayCapture",
          "onPlayingCapture",
          "onProgressCapture",
          "onRateChangeCapture",
          "onSeekedCapture",
          "onSeekingCapture",
          "onStalledCapture",
          "onSuspendCapture",
          "onTimeUpdateCapture",
          "onVolumeChangeCapture",
          "onWaitingCapture",
          "onLoadCapture",
          "onAnimationStartCapture",
          "onAnimationEndCapture",
          "onAnimationIterationCapture",
          "onTransitionEndCapture",
        ];

        if (isPreact) {
          reactProps.push(
            "autocomplete",
            "autofocus",
            "class",
            "for",
            "onDblClick",
            "onSearch",
            "slot",
            "srcset",
          );
        }

        /* eslint max-lines:0, func-style:0 */

        var globalReactHtmlProps = reactHTMLAttributes["*"];
        var supportedSVGTagNames = reactHTMLAttributes.elements.svg;
        var supportedHtmlTagNames = reactHTMLAttributes.elements.html;

        // these are valid attributes that have the
        // same name as CSS properties, and is used
        // for css overrides API
        var cssProps = ["color", "height", "width"];

        /* From DOMProperty */
        var ATTRIBUTE_NAME_START_CHAR =
          // eslint-disable-next-line max-len
          ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        // eslint-disable-next-line max-len
        var ATTRIBUTE_NAME_CHAR =
          ATTRIBUTE_NAME_START_CHAR +
          "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var isCustomAttribute = RegExp.prototype.test.bind(
          new RegExp("^(data|aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"),
        );

        var isSvgTag = function(tagName) {
          return (
            // in our context, we only say that SVG tags are SVG
            // if they are not also HTML.
            // See https://github.com/paypal/glamorous/issues/245
            // the svg tag will always be treated as svg for
            // er... obvious reasons
            tagName === "svg" ||
            (supportedHtmlTagNames.indexOf(tagName) === -1 &&
              supportedSVGTagNames.indexOf(tagName) !== -1)
          );
        };
        var isHtmlProp = function(name, tagName) {
          var elementAttributes = void 0;

          if (isSvgTag(tagName)) {
            // all SVG attributes supported by React are grouped under 'svg'
            elementAttributes = reactHTMLAttributes.svg;
          } else {
            elementAttributes = reactHTMLAttributes[tagName] || [];
          }

          return (
            globalReactHtmlProps.indexOf(name) !== -1 ||
            elementAttributes.indexOf(name) !== -1
          );
        };
        var isCssProp = function(name) {
          return cssProps.indexOf(name) !== -1;
        };
        var isReactProp = function(name) {
          return reactProps.indexOf(name) !== -1;
        };

        // eslint-disable-next-line complexity
        var shouldForwardProperty = function(tagName, name) {
          return (
            typeof tagName !== "string" ||
            ((isHtmlProp(name, tagName) ||
              isReactProp(name) ||
              isCustomAttribute(name.toLowerCase())) &&
              (!isCssProp(name) || isSvgTag(tagName)))
          );
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
            rest = objectWithoutProperties(_ref, [
              "css",
              "innerRef",
              "theme",
              "className",
              "glam",
            ]);

          // forward innerRef if user wishes to do so
          if (
            innerRef !== undefined &&
            forwardProps.indexOf("innerRef") !== -1
          ) {
            rest.innerRef = innerRef;
          }
          var returnValue = {
            toForward: {},
            cssProp: cssProp,
            cssOverrides: {},
          };
          if (!propsAreCssOverrides) {
            if (typeof rootEl !== "string" && filterProps.length === 0) {
              // if it's not a string and filterProps is empty,
              // then we can forward everything (because it's a component)
              returnValue.toForward = rest;
              return returnValue;
            }
          }
          return Object.keys(rest).reduce(function(split, propName) {
            if (filterProps.indexOf(propName) !== -1) {
              return split;
            } else if (
              forwardProps.indexOf(propName) !== -1 ||
              shouldForwardProperty$1(rootEl, propName)
            ) {
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
        Object.assign(
          glamorous,
          domElements.reduce(function(getters, tag) {
            // TODO: next breaking change, let's make
            // the `displayName` be: `glamorous.${tag}`
            getters[tag] = glamorous(tag);
            return getters;
          }, {}),
        );

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
        Object.assign(
          glamorous,
          domElements.reduce(function(comps, tag) {
            var capitalTag = capitalize(tag);
            comps[capitalTag] = glamorous[tag]();
            comps[capitalTag].displayName = "glamorous." + capitalTag;
            comps[capitalTag].propsAreCssOverrides = true;
            return comps;
          }, {}),
        );

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
        var A = glamorous["A"];
        var Abbr = glamorous["Abbr"];
        var Acronym = glamorous["Acronym"];
        var Address = glamorous["Address"];
        var Applet = glamorous["Applet"];
        var Area = glamorous["Area"];
        var Article = glamorous["Article"];
        var Aside = glamorous["Aside"];
        var Audio = glamorous["Audio"];
        var B = glamorous["B"];
        var Base = glamorous["Base"];
        var Basefont = glamorous["Basefont"];
        var Bdi = glamorous["Bdi"];
        var Bdo = glamorous["Bdo"];
        var Bgsound = glamorous["Bgsound"];
        var Big = glamorous["Big"];
        var Blink = glamorous["Blink"];
        var Blockquote = glamorous["Blockquote"];
        var Body = glamorous["Body"];
        var Br = glamorous["Br"];
        var Button = glamorous["Button"];
        var Canvas = glamorous["Canvas"];
        var Caption = glamorous["Caption"];
        var Center = glamorous["Center"];
        var Cite = glamorous["Cite"];
        var Code = glamorous["Code"];
        var Col = glamorous["Col"];
        var Colgroup = glamorous["Colgroup"];
        var Command = glamorous["Command"];
        var Content = glamorous["Content"];
        var Data = glamorous["Data"];
        var Datalist = glamorous["Datalist"];
        var Dd = glamorous["Dd"];
        var Del = glamorous["Del"];
        var Details = glamorous["Details"];
        var Dfn = glamorous["Dfn"];
        var Dialog = glamorous["Dialog"];
        var Dir = glamorous["Dir"];
        var Div = glamorous["Div"];
        var Dl = glamorous["Dl"];
        var Dt = glamorous["Dt"];
        var Element = glamorous["Element"];
        var Em = glamorous["Em"];
        var Embed = glamorous["Embed"];
        var Fieldset = glamorous["Fieldset"];
        var Figcaption = glamorous["Figcaption"];
        var Figure = glamorous["Figure"];
        var Font = glamorous["Font"];
        var Footer = glamorous["Footer"];
        var Form = glamorous["Form"];
        var Frame = glamorous["Frame"];
        var Frameset = glamorous["Frameset"];
        var H1 = glamorous["H1"];
        var H2 = glamorous["H2"];
        var H3 = glamorous["H3"];
        var H4 = glamorous["H4"];
        var H5 = glamorous["H5"];
        var H6 = glamorous["H6"];
        var Head = glamorous["Head"];
        var Header = glamorous["Header"];
        var Hgroup = glamorous["Hgroup"];
        var Hr = glamorous["Hr"];
        var Html = glamorous["Html"];
        var I = glamorous["I"];
        var Iframe = glamorous["Iframe"];
        var Image = glamorous["Image"];
        var Img = glamorous["Img"];
        var Input = glamorous["Input"];
        var Ins = glamorous["Ins"];
        var Isindex = glamorous["Isindex"];
        var Kbd = glamorous["Kbd"];
        var Keygen = glamorous["Keygen"];
        var Label = glamorous["Label"];
        var Legend = glamorous["Legend"];
        var Li = glamorous["Li"];
        var Link = glamorous["Link"];
        var Listing = glamorous["Listing"];
        var Main = glamorous["Main"];
        var MapTag = glamorous["Map"];
        var Mark = glamorous["Mark"];
        var Marquee = glamorous["Marquee"];
        var MathTag = glamorous["Math"];
        var Menu = glamorous["Menu"];
        var Menuitem = glamorous["Menuitem"];
        var Meta = glamorous["Meta"];
        var Meter = glamorous["Meter"];
        var Multicol = glamorous["Multicol"];
        var Nav = glamorous["Nav"];
        var Nextid = glamorous["Nextid"];
        var Nobr = glamorous["Nobr"];
        var Noembed = glamorous["Noembed"];
        var Noframes = glamorous["Noframes"];
        var Noscript = glamorous["Noscript"];
        var ObjectTag = glamorous["Object"];
        var Ol = glamorous["Ol"];
        var Optgroup = glamorous["Optgroup"];
        var Option = glamorous["Option"];
        var Output = glamorous["Output"];
        var P = glamorous["P"];
        var Param = glamorous["Param"];
        var Picture = glamorous["Picture"];
        var Plaintext = glamorous["Plaintext"];
        var Pre = glamorous["Pre"];
        var Progress = glamorous["Progress"];
        var Q = glamorous["Q"];
        var Rb = glamorous["Rb"];
        var Rbc = glamorous["Rbc"];
        var Rp = glamorous["Rp"];
        var Rt = glamorous["Rt"];
        var Rtc = glamorous["Rtc"];
        var Ruby = glamorous["Ruby"];
        var S = glamorous["S"];
        var Samp = glamorous["Samp"];
        var Script = glamorous["Script"];
        var Section = glamorous["Section"];
        var Select = glamorous["Select"];
        var Shadow = glamorous["Shadow"];
        var Slot = glamorous["Slot"];
        var Small = glamorous["Small"];
        var Source = glamorous["Source"];
        var Spacer = glamorous["Spacer"];
        var Span = glamorous["Span"];
        var Strike = glamorous["Strike"];
        var Strong = glamorous["Strong"];
        var Style = glamorous["Style"];
        var Sub = glamorous["Sub"];
        var Summary = glamorous["Summary"];
        var Sup = glamorous["Sup"];
        var Svg = glamorous["Svg"];
        var Table = glamorous["Table"];
        var Tbody = glamorous["Tbody"];
        var Td = glamorous["Td"];
        var Template = glamorous["Template"];
        var Textarea = glamorous["Textarea"];
        var Tfoot = glamorous["Tfoot"];
        var Th = glamorous["Th"];
        var Thead = glamorous["Thead"];
        var Time = glamorous["Time"];
        var Title = glamorous["Title"];
        var Tr = glamorous["Tr"];
        var Track = glamorous["Track"];
        var Tt = glamorous["Tt"];
        var U = glamorous["U"];
        var Ul = glamorous["Ul"];
        var Var = glamorous["Var"];
        var Video = glamorous["Video"];
        var Wbr = glamorous["Wbr"];
        var Xmp = glamorous["Xmp"];
        var AltGlyph = glamorous["AltGlyph"];
        var AltGlyphDef = glamorous["AltGlyphDef"];
        var AltGlyphItem = glamorous["AltGlyphItem"];
        var Animate = glamorous["Animate"];
        var AnimateColor = glamorous["AnimateColor"];
        var AnimateMotion = glamorous["AnimateMotion"];
        var AnimateTransform = glamorous["AnimateTransform"];
        var Animation = glamorous["Animation"];
        var Circle = glamorous["Circle"];
        var ClipPath = glamorous["ClipPath"];
        var ColorProfile = glamorous["Color-profile"];
        var Cursor = glamorous["Cursor"];
        var Defs = glamorous["Defs"];
        var Desc = glamorous["Desc"];
        var Discard = glamorous["Discard"];
        var Ellipse = glamorous["Ellipse"];
        var FeBlend = glamorous["FeBlend"];
        var FeColorMatrix = glamorous["FeColorMatrix"];
        var FeComponentTransfer = glamorous["FeComponentTransfer"];
        var FeComposite = glamorous["FeComposite"];
        var FeConvolveMatrix = glamorous["FeConvolveMatrix"];
        var FeDiffuseLighting = glamorous["FeDiffuseLighting"];
        var FeDisplacementMap = glamorous["FeDisplacementMap"];
        var FeDistantLight = glamorous["FeDistantLight"];
        var FeDropShadow = glamorous["FeDropShadow"];
        var FeFlood = glamorous["FeFlood"];
        var FeFuncA = glamorous["FeFuncA"];
        var FeFuncB = glamorous["FeFuncB"];
        var FeFuncG = glamorous["FeFuncG"];
        var FeFuncR = glamorous["FeFuncR"];
        var FeGaussianBlur = glamorous["FeGaussianBlur"];
        var FeImage = glamorous["FeImage"];
        var FeMerge = glamorous["FeMerge"];
        var FeMergeNode = glamorous["FeMergeNode"];
        var FeMorphology = glamorous["FeMorphology"];
        var FeOffset = glamorous["FeOffset"];
        var FePointLight = glamorous["FePointLight"];
        var FeSpecularLighting = glamorous["FeSpecularLighting"];
        var FeSpotLight = glamorous["FeSpotLight"];
        var FeTile = glamorous["FeTile"];
        var FeTurbulence = glamorous["FeTurbulence"];
        var Filter = glamorous["Filter"];
        var FontFace = glamorous["Font-face"];
        var FontFaceFormat = glamorous["Font-face-format"];
        var FontFaceName = glamorous["Font-face-name"];
        var FontFaceSrc = glamorous["Font-face-src"];
        var FontFaceUri = glamorous["Font-face-uri"];
        var ForeignObject = glamorous["ForeignObject"];
        var G = glamorous["G"];
        var Glyph = glamorous["Glyph"];
        var GlyphRef = glamorous["GlyphRef"];
        var Handler = glamorous["Handler"];
        var Hatch = glamorous["Hatch"];
        var Hatchpath = glamorous["Hatchpath"];
        var Hkern = glamorous["Hkern"];
        var Line = glamorous["Line"];
        var LinearGradient = glamorous["LinearGradient"];
        var Listener = glamorous["Listener"];
        var Marker = glamorous["Marker"];
        var Mask = glamorous["Mask"];
        var Mesh = glamorous["Mesh"];
        var Meshgradient = glamorous["Meshgradient"];
        var Meshpatch = glamorous["Meshpatch"];
        var Meshrow = glamorous["Meshrow"];
        var Metadata = glamorous["Metadata"];
        var MissingGlyph = glamorous["Missing-glyph"];
        var Mpath = glamorous["Mpath"];
        var Path = glamorous["Path"];
        var Pattern = glamorous["Pattern"];
        var Polygon = glamorous["Polygon"];
        var Polyline = glamorous["Polyline"];
        var Prefetch = glamorous["Prefetch"];
        var RadialGradient = glamorous["RadialGradient"];
        var Rect = glamorous["Rect"];
        var SetTag = glamorous["Set"];
        var SolidColor = glamorous["SolidColor"];
        var Solidcolor = glamorous["Solidcolor"];
        var Stop = glamorous["Stop"];
        var Switch = glamorous["Switch"];
        var SymbolTag = glamorous["Symbol"];
        var Tbreak = glamorous["Tbreak"];
        var Text = glamorous["Text"];
        var TextArea = glamorous["TextArea"];
        var TextPath = glamorous["TextPath"];
        var Tref = glamorous["Tref"];
        var Tspan = glamorous["Tspan"];
        var Unknown = glamorous["Unknown"];
        var Use = glamorous["Use"];
        var View = glamorous["View"];
        var Vkern = glamorous["Vkern"];

        /* harmony default export */ __webpack_exports__["default"] = glamorous;

        /***/
      },

    /***/ "./node_modules/hyphenate-style-name/index.js":
      /*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* eslint-disable no-var, prefer-template */
        var uppercasePattern = /[A-Z]/g;
        var msPattern = /^ms-/;
        var cache = {};

        function toHyphenLower(match) {
          return "-" + match.toLowerCase();
        }

        function hyphenateStyleName(name) {
          if (cache.hasOwnProperty(name)) {
            return cache[name];
          }

          var hName = name.replace(uppercasePattern, toHyphenLower);
          return (cache[name] = msPattern.test(hName) ? "-" + hName : hName);
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = hyphenateStyleName;

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js":
      /*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/crossFade.js ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = crossFade;

        var _isPrefixedValue = __webpack_require__(
          /*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js",
        );

        var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        // http://caniuse.com/#search=cross-fade
        var prefixes = ["-webkit-", ""];
        function crossFade(property, value) {
          if (
            typeof value === "string" &&
            !(0, _isPrefixedValue2.default)(value) &&
            value.indexOf("cross-fade(") > -1
          ) {
            return prefixes.map(function(prefix) {
              return value.replace(/cross-fade\(/g, prefix + "cross-fade(");
            });
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/plugins/cursor.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/cursor.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = cursor;
        var prefixes = ["-webkit-", "-moz-", ""];

        var values = {
          "zoom-in": true,
          "zoom-out": true,
          grab: true,
          grabbing: true,
        };

        function cursor(property, value) {
          if (property === "cursor" && values.hasOwnProperty(value)) {
            return prefixes.map(function(prefix) {
              return prefix + value;
            });
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/plugins/filter.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/filter.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = filter;

        var _isPrefixedValue = __webpack_require__(
          /*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js",
        );

        var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        // http://caniuse.com/#feat=css-filter-function
        var prefixes = ["-webkit-", ""];
        function filter(property, value) {
          if (
            typeof value === "string" &&
            !(0, _isPrefixedValue2.default)(value) &&
            value.indexOf("filter(") > -1
          ) {
            return prefixes.map(function(prefix) {
              return value.replace(/filter\(/g, prefix + "filter(");
            });
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flex.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = flex;
        var values = {
          flex: [
            "-webkit-box",
            "-moz-box",
            "-ms-flexbox",
            "-webkit-flex",
            "flex",
          ],
          "inline-flex": [
            "-webkit-inline-box",
            "-moz-inline-box",
            "-ms-inline-flexbox",
            "-webkit-inline-flex",
            "inline-flex",
          ],
        };

        function flex(property, value) {
          if (property === "display" && values.hasOwnProperty(value)) {
            return values[value];
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = flexboxOld;
        var alternativeValues = {
          "space-around": "justify",
          "space-between": "justify",
          "flex-start": "start",
          "flex-end": "end",
          "wrap-reverse": "multiple",
          wrap: "multiple",
        };

        var alternativeProps = {
          alignItems: "WebkitBoxAlign",
          justifyContent: "WebkitBoxPack",
          flexWrap: "WebkitBoxLines",
        };

        function flexboxOld(property, value, style) {
          if (property === "flexDirection" && typeof value === "string") {
            if (value.indexOf("column") > -1) {
              style.WebkitBoxOrient = "vertical";
            } else {
              style.WebkitBoxOrient = "horizontal";
            }
            if (value.indexOf("reverse") > -1) {
              style.WebkitBoxDirection = "reverse";
            } else {
              style.WebkitBoxDirection = "normal";
            }
          }
          if (alternativeProps.hasOwnProperty(property)) {
            style[alternativeProps[property]] =
              alternativeValues[value] || value;
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/gradient.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = gradient;

        var _isPrefixedValue = __webpack_require__(
          /*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js",
        );

        var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var prefixes = ["-webkit-", "-moz-", ""];

        var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

        function gradient(property, value) {
          if (
            typeof value === "string" &&
            !(0, _isPrefixedValue2.default)(value) &&
            values.test(value)
          ) {
            return prefixes.map(function(prefix) {
              return prefix + value;
            });
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/imageSet.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = imageSet;

        var _isPrefixedValue = __webpack_require__(
          /*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js",
        );

        var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        // http://caniuse.com/#feat=css-image-set
        var prefixes = ["-webkit-", ""];
        function imageSet(property, value) {
          if (
            typeof value === "string" &&
            !(0, _isPrefixedValue2.default)(value) &&
            value.indexOf("image-set(") > -1
          ) {
            return prefixes.map(function(prefix) {
              return value.replace(/image-set\(/g, prefix + "image-set(");
            });
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/plugins/position.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/position.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = position;
        function position(property, value) {
          if (property === "position" && value === "sticky") {
            return ["-webkit-sticky", "sticky"];
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/sizing.js ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = sizing;
        var prefixes = ["-webkit-", "-moz-", ""];

        var properties = {
          maxHeight: true,
          maxWidth: true,
          width: true,
          height: true,
          columnWidth: true,
          minWidth: true,
          minHeight: true,
        };
        var values = {
          "min-content": true,
          "max-content": true,
          "fill-available": true,
          "fit-content": true,
          "contain-floats": true,
        };

        function sizing(property, value) {
          if (
            properties.hasOwnProperty(property) &&
            values.hasOwnProperty(value)
          ) {
            return prefixes.map(function(prefix) {
              return prefix + value;
            });
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/transition.js ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = transition;

        var _hyphenateProperty = __webpack_require__(
          /*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js",
        );

        var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

        var _isPrefixedValue = __webpack_require__(
          /*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js",
        );

        var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

        var _capitalizeString = __webpack_require__(
          /*! ../../utils/capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js",
        );

        var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var properties = {
          transition: true,
          transitionProperty: true,
          WebkitTransition: true,
          WebkitTransitionProperty: true,
          MozTransition: true,
          MozTransitionProperty: true,
        };

        var prefixMapping = {
          Webkit: "-webkit-",
          Moz: "-moz-",
          ms: "-ms-",
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

              if (
                singleValue.indexOf(dashCaseProperty) > -1 &&
                dashCaseProperty !== "order"
              ) {
                var prefixes = propertyPrefixMap[property];
                for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
                  // join all prefixes and create a new value
                  values.unshift(
                    singleValue.replace(
                      dashCaseProperty,
                      prefixMapping[prefixes[j]] + dashCaseProperty,
                    ),
                  );
                }
              }
            }

            multipleValues[i] = values.join(",");
          }

          return multipleValues.join(",");
        }

        function transition(property, value, style, propertyPrefixMap) {
          // also check for already prefixed transitions
          if (
            typeof value === "string" &&
            properties.hasOwnProperty(property)
          ) {
            var outputValue = prefixValue(value, propertyPrefixMap);
            // if the property is already prefixed
            var webkitOutput = outputValue
              .split(/,(?![^()]*(?:\([^()]*\))?\))/g)
              .filter(function(val) {
                return !/-moz-|-ms-/.test(val);
              })
              .join(",");

            if (property.indexOf("Webkit") > -1) {
              return webkitOutput;
            }

            var mozOutput = outputValue
              .split(/,(?![^()]*(?:\([^()]*\))?\))/g)
              .filter(function(val) {
                return !/-webkit-|-ms-/.test(val);
              })
              .join(",");

            if (property.indexOf("Moz") > -1) {
              return mozOutput;
            }

            style[
              "Webkit" + (0, _capitalizeString2.default)(property)
            ] = webkitOutput;
            style[
              "Moz" + (0, _capitalizeString2.default)(property)
            ] = mozOutput;
            return outputValue;
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/static/staticData.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/staticData.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });

        var w = ["Webkit"];
        var m = ["Moz"];
        var ms = ["ms"];
        var wm = ["Webkit", "Moz"];
        var wms = ["Webkit", "ms"];
        var wmms = ["Webkit", "Moz", "ms"];

        exports.default = {
          plugins: [],
          prefixMap: {
            appearance: wm,
            userSelect: wmms,
            textEmphasisPosition: w,
            textEmphasis: w,
            textEmphasisStyle: w,
            textEmphasisColor: w,
            boxDecorationBreak: w,
            clipPath: w,
            maskImage: w,
            maskMode: w,
            maskRepeat: w,
            maskPosition: w,
            maskClip: w,
            maskOrigin: w,
            maskSize: w,
            maskComposite: w,
            mask: w,
            maskBorderSource: w,
            maskBorderMode: w,
            maskBorderSlice: w,
            maskBorderWidth: w,
            maskBorderOutset: w,
            maskBorderRepeat: w,
            maskBorder: w,
            maskType: w,
            textDecorationStyle: w,
            textDecorationSkip: w,
            textDecorationLine: w,
            textDecorationColor: w,
            filter: w,
            fontFeatureSettings: w,
            breakAfter: wmms,
            breakBefore: wmms,
            breakInside: wmms,
            columnCount: wm,
            columnFill: wm,
            columnGap: wm,
            columnRule: wm,
            columnRuleColor: wm,
            columnRuleStyle: wm,
            columnRuleWidth: wm,
            columns: wm,
            columnSpan: wm,
            columnWidth: wm,
            writingMode: wms,
            flex: w,
            flexBasis: w,
            flexDirection: w,
            flexGrow: w,
            flexFlow: w,
            flexShrink: w,
            flexWrap: w,
            alignContent: w,
            alignItems: w,
            alignSelf: w,
            justifyContent: w,
            order: w,
            transform: w,
            transformOrigin: w,
            transformOriginX: w,
            transformOriginY: w,
            backfaceVisibility: w,
            perspective: w,
            perspectiveOrigin: w,
            transformStyle: w,
            transformOriginZ: w,
            animation: w,
            animationDelay: w,
            animationDirection: w,
            animationFillMode: w,
            animationDuration: w,
            animationIterationCount: w,
            animationName: w,
            animationPlayState: w,
            animationTimingFunction: w,
            backdropFilter: w,
            fontKerning: w,
            scrollSnapType: wms,
            scrollSnapPointsX: wms,
            scrollSnapPointsY: wms,
            scrollSnapDestination: wms,
            scrollSnapCoordinate: wms,
            shapeImageThreshold: w,
            shapeImageMargin: w,
            shapeImageOutside: w,
            hyphens: wmms,
            flowInto: wms,
            flowFrom: wms,
            regionFragment: wms,
            textAlignLast: m,
            tabSize: m,
            wrapFlow: ms,
            wrapThrough: ms,
            wrapMargin: ms,
            gridTemplateColumns: ms,
            gridTemplateRows: ms,
            gridTemplateAreas: ms,
            gridTemplate: ms,
            gridAutoColumns: ms,
            gridAutoRows: ms,
            gridAutoFlow: ms,
            grid: ms,
            gridRowStart: ms,
            gridColumnStart: ms,
            gridRowEnd: ms,
            gridRow: ms,
            gridColumn: ms,
            gridColumnEnd: ms,
            gridColumnGap: ms,
            gridRowGap: ms,
            gridArea: ms,
            gridGap: ms,
            textSizeAdjust: wms,
            borderImage: w,
            borderImageOutset: w,
            borderImageRepeat: w,
            borderImageSlice: w,
            borderImageSource: w,
            borderImageWidth: w,
            transitionDelay: w,
            transitionDuration: w,
            transitionProperty: w,
            transitionTimingFunction: w,
          },
        };
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/capitalizeString.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = capitalizeString;
        function capitalizeString(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
      /*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixProperty.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = prefixProperty;

        var _capitalizeString = __webpack_require__(
          /*! ./capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js",
        );

        var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function prefixProperty(prefixProperties, property, style) {
          if (prefixProperties.hasOwnProperty(property)) {
            var requiredPrefixes = prefixProperties[property];
            for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
              style[
                requiredPrefixes[i] + (0, _capitalizeString2.default)(property)
              ] = style[property];
            }
          }
        }
        module.exports = exports["default"];

        /***/
      },

    /***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixValue.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
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

        /***/
      },

    /***/ "./node_modules/natural-scale/dist/constants.js":
      /*!******************************************************!*\
  !*** ./node_modules/natural-scale/dist/constants.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
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
          GOLDEN_RATIO: exports.GOLDEN_RATIO,
        };

        /***/
      },

    /***/ "./node_modules/natural-scale/dist/index.js":
      /*!**************************************************!*\
  !*** ./node_modules/natural-scale/dist/index.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var __importStar =
          (this && this.__importStar) ||
          function(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
              for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            result["default"] = mod;
            return result;
          };
        Object.defineProperty(exports, "__esModule", { value: true });
        var DefaultRatios = __importStar(
          __webpack_require__(
            /*! ./constants */ "./node_modules/natural-scale/dist/constants.js",
          ),
        );
        var steps_1 = __webpack_require__(
          /*! ./steps */ "./node_modules/natural-scale/dist/steps.js",
        );
        exports.Ratio = DefaultRatios;
        exports.Scale = function(_a) {
          var _b = _a.interval,
            interval = _b === void 0 ? exports.Ratio.MINOR_THIRD : _b,
            unit = _a.unit,
            base = _a.base;
          return function(step, unitOverride) {
            if (step === void 0) {
              step = 0;
            }
            var unitValue = unitOverride || unit;
            return step
              ? steps_1.getStep({
                  step: step,
                  interval: interval,
                  unit: unitValue,
                  base: base,
                })
              : steps_1.getSteps({
                  interval: interval,
                  unit: unitOverride,
                  base: base,
                });
          };
        };
        exports.default = { Scale: exports.Scale, Ratio: exports.Ratio };

        /***/
      },

    /***/ "./node_modules/natural-scale/dist/steps.js":
      /*!**************************************************!*\
  !*** ./node_modules/natural-scale/dist/steps.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", { value: true });
        exports.getStep = function(_a) {
          var step = _a.step,
            interval = _a.interval,
            unit = _a.unit,
            base = _a.base;
          var lowPower = 5 - step;
          var highPower = step - 4;
          var result =
            step <= 3
              ? interval / Math.pow(interval, lowPower)
              : Math.pow(interval, highPower);
          // Round to 3 decimal places
          var value = Math.floor(result * 1000) / 1000;
          if (base) {
            value *= base;
          }
          return unit && unit !== "none" ? (value += unit) : value;
        };
        exports.getSteps = function(_a) {
          var interval = _a.interval,
            unit = _a.unit,
            base = _a.base;
          var stepsArray = [];
          for (var index = 0; index < 8; index++) {
            var step = index + 1;
            stepsArray.push(
              exports.getStep({
                step: step,
                interval: interval,
                unit: unit,
                base: base,
              }),
            );
          }
          return stepsArray;
        };

        /***/
      },

    /***/ "./node_modules/next-server/dist/lib/amp.js":
      /*!**************************************************!*\
  !*** ./node_modules/next-server/dist/lib/amp.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

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

        var react_1 = __importDefault(
          __webpack_require__(/*! react */ "./node_modules/react/index.js"),
        );

        var amphtml_context_1 = __webpack_require__(
          /*! ./amphtml-context */ "./node_modules/next-server/dist/lib/amphtml-context.js",
        );

        function isAmp() {
          var _ref =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            _ref$enabled = _ref.enabled,
            enabled = _ref$enabled === void 0 ? false : _ref$enabled,
            _ref$hybrid = _ref.hybrid,
            hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
            _ref$hasQuery = _ref.hasQuery,
            hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

          return enabled && (!hybrid || (hybrid && hasQuery));
        }

        exports.isAmp = isAmp;

        function useAmp() {
          var ampMode = react_1.default.useContext(
            amphtml_context_1.AmpModeContext,
          ); // un-comment below to not be considered AMP in dirty mode

          return isAmp(ampMode); // && ampMode.hasQuery
        }

        exports.useAmp = useAmp;

        function withAmp(Component) {
          var _ref2 =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
            _ref2$hybrid = _ref2.hybrid,
            hybrid = _ref2$hybrid === void 0 ? false : _ref2$hybrid;

          function WithAmpWrapper() {
            var props =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};
            var ampMode = react_1.default.useContext(
              amphtml_context_1.AmpModeContext,
            );
            ampMode.enabled = true;
            ampMode.hybrid = hybrid;
            return react_1.default.createElement(Component, props);
          }

          WithAmpWrapper.__nextAmpOnly = !hybrid;
          WithAmpWrapper.getInitialProps = Component.getInitialProps;
          return WithAmpWrapper;
        }

        exports.withAmp = withAmp;

        /***/
      },

    /***/ "./node_modules/next-server/dist/lib/amphtml-context.js":
      /*!**************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/amphtml-context.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

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

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });

        var React = __importStar(
          __webpack_require__(/*! react */ "./node_modules/react/index.js"),
        );

        exports.AmpModeContext = React.createContext({});

        /***/
      },

    /***/ "./node_modules/next-server/dist/lib/head-manager-context.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head-manager-context.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

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

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });

        var React = __importStar(
          __webpack_require__(/*! react */ "./node_modules/react/index.js"),
        );

        exports.HeadManagerContext = React.createContext(null);

        /***/
      },

    /***/ "./node_modules/next-server/dist/lib/head.js":
      /*!***************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js",
        );

        var _set = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js",
          ),
        );

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

        var react_1 = __importDefault(
          __webpack_require__(/*! react */ "./node_modules/react/index.js"),
        );

        var side_effect_1 = __importDefault(
          __webpack_require__(
            /*! ./side-effect */ "./node_modules/next-server/dist/lib/side-effect.js",
          ),
        );

        var amphtml_context_1 = __webpack_require__(
          /*! ./amphtml-context */ "./node_modules/next-server/dist/lib/amphtml-context.js",
        );

        var head_manager_context_1 = __webpack_require__(
          /*! ./head-manager-context */ "./node_modules/next-server/dist/lib/head-manager-context.js",
        );

        var amp_1 = __webpack_require__(
          /*! ./amp */ "./node_modules/next-server/dist/lib/amp.js",
        );

        function defaultHead() {
          var className =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : "next-head";
          var isAmp =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false;
          var head = [
            react_1.default.createElement("meta", {
              key: "charSet",
              charSet: "utf-8",
              className: className,
            }),
          ];

          if (!isAmp) {
            head.push(
              react_1.default.createElement("meta", {
                key: "viewport",
                name: "viewport",
                content: "width=device-width,minimum-scale=1,initial-scale=1",
                className: className,
              }),
            );
          }

          return head;
        }

        exports.defaultHead = defaultHead;

        function onlyReactElement(list, child) {
          // React children can be "string" or "number" in this case we ignore them for backwards compat
          if (typeof child === "string" || typeof child === "number") {
            return list;
          } // Adds support for React.Fragment

          if (child.type === react_1.default.Fragment) {
            return list.concat(
              react_1.default.Children.toArray(child.props.children).reduce(
                function(fragmentList, fragmentChild) {
                  if (
                    typeof fragmentChild === "string" ||
                    typeof fragmentChild === "number"
                  ) {
                    return fragmentList;
                  }

                  return fragmentList.concat(fragmentChild);
                },
                [],
              ),
            );
          }

          return list.concat(child);
        }

        var METATYPES = [
          "name",
          "httpEquiv",
          "charSet",
          "viewport",
          "itemProp",
        ];
        /*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

        function unique() {
          var keys = new _set.default();
          var tags = new _set.default();
          var metaTypes = new _set.default();
          var metaCategories = {};
          return function(h) {
            if (
              h.key &&
              typeof h.key !== "number" &&
              h.key.indexOf(".$") === 0
            ) {
              if (keys.has(h.key)) return false;
              keys.add(h.key);
              return true;
            }

            switch (h.type) {
              case "title":
              case "base":
                if (tags.has(h.type)) return false;
                tags.add(h.type);
                break;

              case "meta":
                for (var i = 0, len = METATYPES.length; i < len; i++) {
                  var metatype = METATYPES[i];
                  if (!h.props.hasOwnProperty(metatype)) continue;

                  if (metatype === "charSet" || metatype === "viewport") {
                    if (metaTypes.has(metatype)) return false;
                    metaTypes.add(metatype);
                  } else {
                    var category = h.props[metatype];
                    var categories =
                      metaCategories[metatype] || new _set.default();
                    if (categories.has(category)) return false;
                    categories.add(category);
                    metaCategories[metatype] = categories;
                  }
                }

                break;
            }

            return true;
          };
        }
        /**
         *
         * @param headElement List of multiple <Head> instances
         */

        function reduceComponents(headElements, props) {
          return headElements
            .reduce(function(list, headElement) {
              var headElementChildren = react_1.default.Children.toArray(
                headElement.props.children,
              );
              return list.concat(headElementChildren);
            }, [])
            .reduce(onlyReactElement, [])
            .reverse()
            .concat(defaultHead("", props.isAmp))
            .filter(unique())
            .reverse()
            .map(function(c, i) {
              var className =
                (c.props && c.props.className ? c.props.className + " " : "") +
                "next-head";
              var key = c.key || i;
              return react_1.default.cloneElement(c, {
                key: key,
                className: className,
              });
            });
        }

        var Effect = side_effect_1.default();

        function Head(_ref) {
          var children = _ref.children;
          return react_1.default.createElement(
            amphtml_context_1.AmpModeContext.Consumer,
            null,
            function(ampMode) {
              return react_1.default.createElement(
                head_manager_context_1.HeadManagerContext.Consumer,
                null,
                function(updateHead) {
                  return react_1.default.createElement(
                    Effect,
                    {
                      reduceComponentsToState: reduceComponents,
                      handleStateChange: updateHead,
                      isAmp: amp_1.isAmp(ampMode),
                    },
                    children,
                  );
                },
              );
            },
          );
        }

        Head.rewind = Effect.rewind;
        exports.default = Head;

        /***/
      },

    /***/ "./node_modules/next-server/dist/lib/side-effect.js":
      /*!**********************************************************!*\
  !*** ./node_modules/next-server/dist/lib/side-effect.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js",
        );

        var _classCallCheck2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js",
          ),
        );

        var _possibleConstructorReturn2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js",
          ),
        );

        var _getPrototypeOf2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js",
          ),
        );

        var _assertThisInitialized2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js",
          ),
        );

        var _createClass2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js",
          ),
        );

        var _inherits2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js",
          ),
        );

        var _toConsumableArray2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js",
          ),
        );

        var _set = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js",
          ),
        );

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });

        var react_1 = __webpack_require__(
          /*! react */ "./node_modules/react/index.js",
        );

        var isServer = typeof window === "undefined";

        function withSideEffect() {
          var mountedInstances = new _set.default();
          var state;

          function emitChange(component) {
            state = component.props.reduceComponentsToState(
              (0, _toConsumableArray2.default)(mountedInstances),
              component.props,
            );

            if (component.props.handleStateChange) {
              component.props.handleStateChange(state);
            }
          }

          var SideEffect =
            /*#__PURE__*/
            (function(_react_1$Component) {
              (0, _inherits2.default)(SideEffect, _react_1$Component);
              (0, _createClass2.default)(SideEffect, null, [
                {
                  key: "rewind",
                  // Used when server rendering
                  value: function rewind() {
                    var recordedState = state;
                    state = undefined;
                    mountedInstances.clear();
                    return recordedState;
                  },
                },
              ]);

              function SideEffect(props) {
                var _this;

                (0, _classCallCheck2.default)(this, SideEffect);
                _this = (0, _possibleConstructorReturn2.default)(
                  this,
                  (0, _getPrototypeOf2.default)(SideEffect).call(this, props),
                );

                if (isServer) {
                  mountedInstances.add(
                    (0, _assertThisInitialized2.default)(_this),
                  );
                  emitChange((0, _assertThisInitialized2.default)(_this));
                }

                return _this;
              }

              (0, _createClass2.default)(SideEffect, [
                {
                  key: "componentDidMount",
                  value: function componentDidMount() {
                    mountedInstances.add(this);
                    emitChange(this);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function componentDidUpdate() {
                    emitChange(this);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function componentWillUnmount() {
                    mountedInstances.delete(this);
                    emitChange(this);
                  },
                },
                {
                  key: "render",
                  value: function render() {
                    return null;
                  },
                },
              ]);
              return SideEffect;
            })(react_1.Component);

          return SideEffect;
        }

        exports.default = withSideEffect;

        /***/
      },

    /***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Freport&absolutePagePath=%2FUsers%2Fjklb%2Fdev%2Fgivecrypto%2Fwebsite%2Fpages%2Freport.tsx!./":
      /*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Freport&absolutePagePath=%2FUsers%2Fjklb%2Fdev%2Fgivecrypto%2Fwebsite%2Fpages%2Freport.tsx ***!
  \************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/report",
          function() {
            var page = __webpack_require__(
              /*! ./pages/report.tsx */ "./pages/report.tsx",
            );
            if (true) {
              module.hot.accept(
                /*! ./pages/report.tsx */ "./pages/report.tsx",
                function() {
                  if (!next.router.components["/report"]) return;
                  var updatedPage = __webpack_require__(
                    /*! ./pages/report.tsx */ "./pages/report.tsx",
                  );
                  next.router.update(
                    "/report",
                    updatedPage.default || updatedPage,
                  );
                },
              );
            }
            return { page: page.default || page };
          },
        ]);

        /***/
      },

    /***/ "./node_modules/object-assign/index.js":
      /*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \***************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8",
        )("./node_modules/object-assign/index.js");

        /***/
      },

    /***/ "./node_modules/process/browser.js":
      /*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        // shim for using process in browser
        var process = (module.exports = {});

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
          throw new Error("clearTimeout has not been defined");
        }
        (function() {
          try {
            if (typeof setTimeout === "function") {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === "function") {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          }
          // if setTimeout wasn't available but was latter defined
          if (
            (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
            setTimeout
          ) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
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
          if (
            (cachedClearTimeout === defaultClearTimeout ||
              !cachedClearTimeout) &&
            clearTimeout
          ) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
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
          while (len) {
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

        process.nextTick = function(fun) {
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
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ""; // empty string to avoid regexp issues
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

        process.listeners = function(name) {
          return [];
        };

        process.binding = function(name) {
          throw new Error("process.binding is not supported");
        };

        process.cwd = function() {
          return "/";
        };
        process.chdir = function(dir) {
          throw new Error("process.chdir is not supported");
        };
        process.umask = function() {
          return 0;
        };

        /***/
      },

    /***/ "./node_modules/prop-types/checkPropTypes.js":
      /*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8",
        )("./node_modules/prop-types/checkPropTypes.js");

        /***/
      },

    /***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
      /*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactIs = __webpack_require__(
          /*! react-is */ "./node_modules/react-is/index.js",
        );
        var assign = __webpack_require__(
          /*! object-assign */ "./node_modules/object-assign/index.js",
        );

        var ReactPropTypesSecret = __webpack_require__(
          /*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js",
        );
        var checkPropTypes = __webpack_require__(
          /*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js",
        );

        var has = Function.call.bind(Object.prototype.hasOwnProperty);
        var printWarning = function() {};

        if (true) {
          printWarning = function(text) {
            var message = "Warning: " + text;
            if (typeof console !== "undefined") {
              console.error(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };
        }

        function emptyFunctionThatReturnsNull() {
          return null;
        }

        module.exports = function(isValidElement, throwOnDirectAccess) {
          /* global Symbol */
          var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

          /**
           * Returns the iterator method function contained on the iterable object.
           *
           * Be sure to invoke the function with the iterable as context:
           *
           *     var iteratorFn = getIteratorFn(myIterable);
           *     if (iteratorFn) {
           *       var iterator = iteratorFn.call(myIterable);
           *       ...
           *     }
           *
           * @param {?object} maybeIterable
           * @return {?function}
           */
          function getIteratorFn(maybeIterable) {
            var iteratorFn =
              maybeIterable &&
              ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
                maybeIterable[FAUX_ITERATOR_SYMBOL]);
            if (typeof iteratorFn === "function") {
              return iteratorFn;
            }
          }

          /**
           * Collection of methods that allow declaration and validation of props that are
           * supplied to React components. Example usage:
           *
           *   var Props = require('ReactPropTypes');
           *   var MyArticle = React.createClass({
           *     propTypes: {
           *       // An optional string prop named "description".
           *       description: Props.string,
           *
           *       // A required enum prop named "category".
           *       category: Props.oneOf(['News','Photos']).isRequired,
           *
           *       // A prop named "dialog" that requires an instance of Dialog.
           *       dialog: Props.instanceOf(Dialog).isRequired
           *     },
           *     render: function() { ... }
           *   });
           *
           * A more formal specification of how these methods are used:
           *
           *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
           *   decl := ReactPropTypes.{type}(.isRequired)?
           *
           * Each and every declaration produces a function with the same signature. This
           * allows the creation of custom validation functions. For example:
           *
           *  var MyLink = React.createClass({
           *    propTypes: {
           *      // An optional string or URI prop named "href".
           *      href: function(props, propName, componentName) {
           *        var propValue = props[propName];
           *        if (propValue != null && typeof propValue !== 'string' &&
           *            !(propValue instanceof URI)) {
           *          return new Error(
           *            'Expected a string or an URI for ' + propName + ' in ' +
           *            componentName
           *          );
           *        }
           *      }
           *    },
           *    render: function() {...}
           *  });
           *
           * @internal
           */

          var ANONYMOUS = "<<anonymous>>";

          // Important!
          // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
          var ReactPropTypes = {
            array: createPrimitiveTypeChecker("array"),
            bool: createPrimitiveTypeChecker("boolean"),
            func: createPrimitiveTypeChecker("function"),
            number: createPrimitiveTypeChecker("number"),
            object: createPrimitiveTypeChecker("object"),
            string: createPrimitiveTypeChecker("string"),
            symbol: createPrimitiveTypeChecker("symbol"),

            any: createAnyTypeChecker(),
            arrayOf: createArrayOfTypeChecker,
            element: createElementTypeChecker(),
            elementType: createElementTypeTypeChecker(),
            instanceOf: createInstanceTypeChecker,
            node: createNodeChecker(),
            objectOf: createObjectOfTypeChecker,
            oneOf: createEnumTypeChecker,
            oneOfType: createUnionTypeChecker,
            shape: createShapeTypeChecker,
            exact: createStrictShapeTypeChecker,
          };

          /**
           * inlined Object.is polyfill to avoid requiring consumers ship their own
           * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
           */
          /*eslint-disable no-self-compare*/
          function is(x, y) {
            // SameValue algorithm
            if (x === y) {
              // Steps 1-5, 7-10
              // Steps 6.b-6.e: +0 != -0
              return x !== 0 || 1 / x === 1 / y;
            } else {
              // Step 6.a: NaN == NaN
              return x !== x && y !== y;
            }
          }
          /*eslint-enable no-self-compare*/

          /**
           * We use an Error-like object for backward compatibility as people may call
           * PropTypes directly and inspect their output. However, we don't use real
           * Errors anymore. We don't inspect their stack anyway, and creating them
           * is prohibitively expensive if they are created too often, such as what
           * happens in oneOfType() for any type before the one that matched.
           */
          function PropTypeError(message) {
            this.message = message;
            this.stack = "";
          }
          // Make `instanceof Error` still work for returned errors.
          PropTypeError.prototype = Error.prototype;

          function createChainableTypeChecker(validate) {
            if (true) {
              var manualPropTypeCallCache = {};
              var manualPropTypeWarningCount = 0;
            }
            function checkType(
              isRequired,
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret,
            ) {
              componentName = componentName || ANONYMOUS;
              propFullName = propFullName || propName;

              if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                  // New behavior only for users of `prop-types` package
                  var err = new Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                      "Use `PropTypes.checkPropTypes()` to call them. " +
                      "Read more at http://fb.me/use-check-prop-types",
                  );
                  err.name = "Invariant Violation";
                  throw err;
                } else if (true && typeof console !== "undefined") {
                  // Old behavior for people using React.PropTypes
                  var cacheKey = componentName + ":" + propName;
                  if (
                    !manualPropTypeCallCache[cacheKey] &&
                    // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3
                  ) {
                    printWarning(
                      "You are manually calling a React.PropTypes validation " +
                        "function for the `" +
                        propFullName +
                        "` prop on `" +
                        componentName +
                        "`. This is deprecated " +
                        "and will throw in the standalone `prop-types` package. " +
                        "You may be seeing this warning due to a third-party PropTypes " +
                        "library. See https://fb.me/react-warning-dont-call-proptypes " +
                        "for details.",
                    );
                    manualPropTypeCallCache[cacheKey] = true;
                    manualPropTypeWarningCount++;
                  }
                }
              }
              if (props[propName] == null) {
                if (isRequired) {
                  if (props[propName] === null) {
                    return new PropTypeError(
                      "The " +
                        location +
                        " `" +
                        propFullName +
                        "` is marked as required " +
                        ("in `" +
                          componentName +
                          "`, but its value is `null`."),
                    );
                  }
                  return new PropTypeError(
                    "The " +
                      location +
                      " `" +
                      propFullName +
                      "` is marked as required in " +
                      ("`" +
                        componentName +
                        "`, but its value is `undefined`."),
                  );
                }
                return null;
              } else {
                return validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName,
                );
              }
            }

            var chainedCheckType = checkType.bind(null, false);
            chainedCheckType.isRequired = checkType.bind(null, true);

            return chainedCheckType;
          }

          function createPrimitiveTypeChecker(expectedType) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret,
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);

                return new PropTypeError(
                  "Invalid " +
                    location +
                    " `" +
                    propFullName +
                    "` of type " +
                    ("`" +
                      preciseType +
                      "` supplied to `" +
                      componentName +
                      "`, expected ") +
                    ("`" + expectedType + "`."),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createAnyTypeChecker() {
            return createChainableTypeChecker(emptyFunctionThatReturnsNull);
          }

          function createArrayOfTypeChecker(typeChecker) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (typeof typeChecker !== "function") {
                return new PropTypeError(
                  "Property `" +
                    propFullName +
                    "` of component `" +
                    componentName +
                    "` has invalid PropType notation inside arrayOf.",
                );
              }
              var propValue = props[propName];
              if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  "Invalid " +
                    location +
                    " `" +
                    propFullName +
                    "` of type " +
                    ("`" +
                      propType +
                      "` supplied to `" +
                      componentName +
                      "`, expected an array."),
                );
              }
              for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(
                  propValue,
                  i,
                  componentName,
                  location,
                  propFullName + "[" + i + "]",
                  ReactPropTypesSecret,
                );
                if (error instanceof Error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createElementTypeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  "Invalid " +
                    location +
                    " `" +
                    propFullName +
                    "` of type " +
                    ("`" +
                      propType +
                      "` supplied to `" +
                      componentName +
                      "`, expected a single ReactElement."),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createElementTypeTypeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  "Invalid " +
                    location +
                    " `" +
                    propFullName +
                    "` of type " +
                    ("`" +
                      propType +
                      "` supplied to `" +
                      componentName +
                      "`, expected a single ReactElement type."),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createInstanceTypeChecker(expectedClass) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError(
                  "Invalid " +
                    location +
                    " `" +
                    propFullName +
                    "` of type " +
                    ("`" +
                      actualClassName +
                      "` supplied to `" +
                      componentName +
                      "`, expected ") +
                    ("instance of `" + expectedClassName + "`."),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createEnumTypeChecker(expectedValues) {
            if (!Array.isArray(expectedValues)) {
              if (true) {
                if (arguments.length > 1) {
                  printWarning(
                    "Invalid arguments supplied to oneOf, expected an array, got " +
                      arguments.length +
                      " arguments. " +
                      "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).",
                  );
                } else {
                  printWarning(
                    "Invalid argument supplied to oneOf, expected an array.",
                  );
                }
              }
              return emptyFunctionThatReturnsNull;
            }

            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              for (var i = 0; i < expectedValues.length; i++) {
                if (is(propValue, expectedValues[i])) {
                  return null;
                }
              }

              var valuesString = JSON.stringify(
                expectedValues,
                function replacer(key, value) {
                  var type = getPreciseType(value);
                  if (type === "symbol") {
                    return String(value);
                  }
                  return value;
                },
              );
              return new PropTypeError(
                "Invalid " +
                  location +
                  " `" +
                  propFullName +
                  "` of value `" +
                  String(propValue) +
                  "` " +
                  ("supplied to `" +
                    componentName +
                    "`, expected one of " +
                    valuesString +
                    "."),
              );
            }
            return createChainableTypeChecker(validate);
          }

          function createObjectOfTypeChecker(typeChecker) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (typeof typeChecker !== "function") {
                return new PropTypeError(
                  "Property `" +
                    propFullName +
                    "` of component `" +
                    componentName +
                    "` has invalid PropType notation inside objectOf.",
                );
              }
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== "object") {
                return new PropTypeError(
                  "Invalid " +
                    location +
                    " `" +
                    propFullName +
                    "` of type " +
                    ("`" +
                      propType +
                      "` supplied to `" +
                      componentName +
                      "`, expected an object."),
                );
              }
              for (var key in propValue) {
                if (has(propValue, key)) {
                  var error = typeChecker(
                    propValue,
                    key,
                    componentName,
                    location,
                    propFullName + "." + key,
                    ReactPropTypesSecret,
                  );
                  if (error instanceof Error) {
                    return error;
                  }
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createUnionTypeChecker(arrayOfTypeCheckers) {
            if (!Array.isArray(arrayOfTypeCheckers)) {
              true
                ? printWarning(
                    "Invalid argument supplied to oneOfType, expected an instance of array.",
                  )
                : undefined;
              return emptyFunctionThatReturnsNull;
            }

            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
              var checker = arrayOfTypeCheckers[i];
              if (typeof checker !== "function") {
                printWarning(
                  "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
                    "received " +
                    getPostfixForTypeWarning(checker) +
                    " at index " +
                    i +
                    ".",
                );
                return emptyFunctionThatReturnsNull;
              }
            }

            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (
                  checker(
                    props,
                    propName,
                    componentName,
                    location,
                    propFullName,
                    ReactPropTypesSecret,
                  ) == null
                ) {
                  return null;
                }
              }

              return new PropTypeError(
                "Invalid " +
                  location +
                  " `" +
                  propFullName +
                  "` supplied to " +
                  ("`" + componentName + "`."),
              );
            }
            return createChainableTypeChecker(validate);
          }

          function createNodeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (!isNode(props[propName])) {
                return new PropTypeError(
                  "Invalid " +
                    location +
                    " `" +
                    propFullName +
                    "` supplied to " +
                    ("`" + componentName + "`, expected a ReactNode."),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createShapeTypeChecker(shapeTypes) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== "object") {
                return new PropTypeError(
                  "Invalid " +
                    location +
                    " `" +
                    propFullName +
                    "` of type `" +
                    propType +
                    "` " +
                    ("supplied to `" + componentName + "`, expected `object`."),
                );
              }
              for (var key in shapeTypes) {
                var checker = shapeTypes[key];
                if (!checker) {
                  continue;
                }
                var error = checker(
                  propValue,
                  key,
                  componentName,
                  location,
                  propFullName + "." + key,
                  ReactPropTypesSecret,
                );
                if (error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createStrictShapeTypeChecker(shapeTypes) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== "object") {
                return new PropTypeError(
                  "Invalid " +
                    location +
                    " `" +
                    propFullName +
                    "` of type `" +
                    propType +
                    "` " +
                    ("supplied to `" + componentName + "`, expected `object`."),
                );
              }
              // We need to check all keys in case some are required but missing from
              // props.
              var allKeys = assign({}, props[propName], shapeTypes);
              for (var key in allKeys) {
                var checker = shapeTypes[key];
                if (!checker) {
                  return new PropTypeError(
                    "Invalid " +
                      location +
                      " `" +
                      propFullName +
                      "` key `" +
                      key +
                      "` supplied to `" +
                      componentName +
                      "`." +
                      "\nBad object: " +
                      JSON.stringify(props[propName], null, "  ") +
                      "\nValid keys: " +
                      JSON.stringify(Object.keys(shapeTypes), null, "  "),
                  );
                }
                var error = checker(
                  propValue,
                  key,
                  componentName,
                  location,
                  propFullName + "." + key,
                  ReactPropTypesSecret,
                );
                if (error) {
                  return error;
                }
              }
              return null;
            }

            return createChainableTypeChecker(validate);
          }

          function isNode(propValue) {
            switch (typeof propValue) {
              case "number":
              case "string":
              case "undefined":
                return true;
              case "boolean":
                return !propValue;
              case "object":
                if (Array.isArray(propValue)) {
                  return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                  return true;
                }

                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                  var iterator = iteratorFn.call(propValue);
                  var step;
                  if (iteratorFn !== propValue.entries) {
                    while (!(step = iterator.next()).done) {
                      if (!isNode(step.value)) {
                        return false;
                      }
                    }
                  } else {
                    // Iterator will provide entry [k,v] tuples rather than values.
                    while (!(step = iterator.next()).done) {
                      var entry = step.value;
                      if (entry) {
                        if (!isNode(entry[1])) {
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  return false;
                }

                return true;
              default:
                return false;
            }
          }

          function isSymbol(propType, propValue) {
            // Native Symbol.
            if (propType === "symbol") {
              return true;
            }

            // falsy value can't be a Symbol
            if (!propValue) {
              return false;
            }

            // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
            if (propValue["@@toStringTag"] === "Symbol") {
              return true;
            }

            // Fallback for non-spec compliant Symbols which are polyfilled.
            if (typeof Symbol === "function" && propValue instanceof Symbol) {
              return true;
            }

            return false;
          }

          // Equivalent of `typeof` but with special handling for array and regexp.
          function getPropType(propValue) {
            var propType = typeof propValue;
            if (Array.isArray(propValue)) {
              return "array";
            }
            if (propValue instanceof RegExp) {
              // Old webkits (at least until Android 4.0) return 'function' rather than
              // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
              // passes PropTypes.object.
              return "object";
            }
            if (isSymbol(propType, propValue)) {
              return "symbol";
            }
            return propType;
          }

          // This handles more types than `getPropType`. Only used for error messages.
          // See `createPrimitiveTypeChecker`.
          function getPreciseType(propValue) {
            if (typeof propValue === "undefined" || propValue === null) {
              return "" + propValue;
            }
            var propType = getPropType(propValue);
            if (propType === "object") {
              if (propValue instanceof Date) {
                return "date";
              } else if (propValue instanceof RegExp) {
                return "regexp";
              }
            }
            return propType;
          }

          // Returns a string that is postfixed to a warning about an invalid type.
          // For example, "undefined" or "of type array"
          function getPostfixForTypeWarning(value) {
            var type = getPreciseType(value);
            switch (type) {
              case "array":
              case "object":
                return "an " + type;
              case "boolean":
              case "date":
              case "regexp":
                return "a " + type;
              default:
                return type;
            }
          }

          // Returns class name of the object, if any.
          function getClassName(propValue) {
            if (!propValue.constructor || !propValue.constructor.name) {
              return ANONYMOUS;
            }
            return propValue.constructor.name;
          }

          ReactPropTypes.checkPropTypes = checkPropTypes;
          ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
          ReactPropTypes.PropTypes = ReactPropTypes;

          return ReactPropTypes;
        };

        /***/
      },

    /***/ "./node_modules/prop-types/index.js":
      /*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (true) {
          var ReactIs = __webpack_require__(
            /*! react-is */ "./node_modules/react-is/index.js",
          );

          // By explicitly using `prop-types` you are opting into new development behavior.
          // http://fb.me/prop-types-in-prod
          var throwOnDirectAccess = true;
          module.exports = __webpack_require__(
            /*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js",
          )(ReactIs.isElement, throwOnDirectAccess);
        } else {
        }

        /***/
      },

    /***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
      /*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8",
        )("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/components/OutboundLink.js ***!
  \*******************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return OutboundLink;
          },
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! prop-types */ "./node_modules/prop-types/index.js",
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js",
        );
        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(source, true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              );
            } else {
              ownKeys(source).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                );
              });
            }
          }
          return target;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
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

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        var NEWTAB = "_blank";
        var MIDDLECLICK = 1;

        var OutboundLink =
          /*#__PURE__*/
          (function(_Component) {
            _inherits(OutboundLink, _Component);

            function OutboundLink() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, OutboundLink);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args),
                ),
              );

              _defineProperty(
                _assertThisInitialized(_this),
                "handleClick",
                function(event) {
                  var _this$props = _this.props,
                    target = _this$props.target,
                    eventLabel = _this$props.eventLabel,
                    to = _this$props.to,
                    onClick = _this$props.onClick,
                    trackerNames = _this$props.trackerNames;
                  var eventMeta = {
                    label: eventLabel,
                  };
                  var sameTarget = target !== NEWTAB;
                  var normalClick = !(
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.metaKey ||
                    event.button === MIDDLECLICK
                  );

                  if (sameTarget && normalClick) {
                    event.preventDefault();
                    OutboundLink.trackLink(
                      eventMeta,
                      function() {
                        window.location.href = to;
                      },
                      trackerNames,
                    );
                  } else {
                    OutboundLink.trackLink(
                      eventMeta,
                      function() {},
                      trackerNames,
                    );
                  }

                  if (onClick) {
                    onClick(event);
                  }
                },
              );

              return _this;
            }

            _createClass(OutboundLink, [
              {
                key: "render",
                value: function render() {
                  var _this$props2 = this.props,
                    href = _this$props2.to,
                    oldProps = _objectWithoutProperties(_this$props2, ["to"]);

                  var props = _objectSpread({}, oldProps, {
                    href: href,
                    onClick: this.handleClick,
                  });

                  if (this.props.target === NEWTAB) {
                    props.rel = "noopener noreferrer";
                  }

                  delete props.eventLabel;
                  delete props.trackerNames;
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    props,
                  );
                },
              },
            ]);

            return OutboundLink;
          })(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

        _defineProperty(OutboundLink, "trackLink", function() {
          Object(
            _utils_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"],
          )("ga tracking not enabled");
        });

        _defineProperty(OutboundLink, "propTypes", {
          eventLabel:
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
          target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
          trackerNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          ),
        });

        _defineProperty(OutboundLink, "defaultProps", {
          target: null,
          to: null,
          onClick: null,
          trackerNames: null,
        });

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/core.js":
      /*!************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/core.js ***!
  \************************************************/
      /*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, testModeAPI, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialize",
          function() {
            return initialize;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ga",
          function() {
            return ga;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "set",
          function() {
            return set;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "send",
          function() {
            return send;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "pageview",
          function() {
            return pageview;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "modalview",
          function() {
            return modalview;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "timing",
          function() {
            return timing;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "event",
          function() {
            return event;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "exception",
          function() {
            return exception;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "plugin",
          function() {
            return plugin;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "outboundLink",
          function() {
            return outboundLink;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "testModeAPI",
          function() {
            return testModeAPI;
          },
        );
        /* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./utils/format */ "./node_modules/react-ga/dist/esm/utils/format.js",
        );
        /* harmony import */ var _utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./utils/removeLeadingSlash */ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js",
        );
        /* harmony import */ var _utils_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./utils/trim */ "./node_modules/react-ga/dist/esm/utils/trim.js",
        );
        /* harmony import */ var _utils_loadGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./utils/loadGA */ "./node_modules/react-ga/dist/esm/utils/loadGA.js",
        );
        /* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js",
        );
        /* harmony import */ var _utils_console_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./utils/console/log */ "./node_modules/react-ga/dist/esm/utils/console/log.js",
        );
        /* harmony import */ var _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./utils/testModeAPI */ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js",
        );
        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
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

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(source, true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              );
            } else {
              ownKeys(source).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance",
          );
        }

        function _iterableToArray(iter) {
          if (
            Symbol.iterator in Object(iter) ||
            Object.prototype.toString.call(iter) === "[object Arguments]"
          )
            return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
        }

        /**
         * React Google Analytics Module
         *
         * @package react-ga
         * @author  Adam Lofting <adam@mozillafoundation.org>
         *          Atul Varma <atul@mozillafoundation.org>
         */

        /**
         * Utilities
         */

        var _isNotBrowser =
          typeof window === "undefined" || typeof document === "undefined";

        var _debug = false;
        var _titleCase = true;
        var _testMode = false;
        var _alwaysSendToDefaultTracker = true;

        var internalGa = function internalGa() {
          var _window;

          if (_testMode)
            return _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ].ga.apply(
              _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"],
              arguments,
            );
          if (_isNotBrowser) return false;
          if (!window.ga)
            return Object(
              _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
            )(
              "ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually",
            );
          return (_window = window).ga.apply(_window, arguments);
        };

        function _format(s) {
          return Object(_utils_format__WEBPACK_IMPORTED_MODULE_0__["default"])(
            s,
            _titleCase,
          );
        }

        function _gaCommand(trackerNames) {
          for (
            var _len = arguments.length,
              args = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            args[_key - 1] = arguments[_key];
          }

          var command = args[0];

          if (typeof internalGa === "function") {
            if (typeof command !== "string") {
              Object(
                _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
              )("ga command must be a string");
              return;
            }

            if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames))
              internalGa.apply(void 0, args);

            if (Array.isArray(trackerNames)) {
              trackerNames.forEach(function(name) {
                internalGa.apply(
                  void 0,
                  _toConsumableArray(
                    ["".concat(name, ".").concat(command)].concat(
                      args.slice(1),
                    ),
                  ),
                );
              });
            }
          }
        }

        function _initialize(gaTrackingID, options) {
          if (!gaTrackingID) {
            Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(
              "gaTrackingID is required in initialize()",
            );
            return;
          }

          if (options) {
            if (options.debug && options.debug === true) {
              _debug = true;
            }

            if (options.titleCase === false) {
              _titleCase = false;
            }

            if (options.useExistingGa) {
              return;
            }
          }

          if (options && options.gaOptions) {
            internalGa("create", gaTrackingID, options.gaOptions);
          } else {
            internalGa("create", gaTrackingID, "auto");
          }
        }

        function initialize(configsOrTrackingId, options) {
          if (options && options.testMode === true) {
            _testMode = true;
          } else {
            if (_isNotBrowser) {
              return false;
            }

            if (!options || options.standardImplementation !== true)
              Object(_utils_loadGA__WEBPACK_IMPORTED_MODULE_3__["default"])(
                options,
              );
          }

          _alwaysSendToDefaultTracker =
            options && typeof options.alwaysSendToDefaultTracker === "boolean"
              ? options.alwaysSendToDefaultTracker
              : true;

          if (Array.isArray(configsOrTrackingId)) {
            configsOrTrackingId.forEach(function(config) {
              if (_typeof(config) !== "object") {
                Object(
                  _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                )("All configs must be an object");
                return;
              }

              _initialize(config.trackingId, config);
            });
          } else {
            _initialize(configsOrTrackingId, options);
          }

          return true;
        }
        /**
         * ga:
         * Returns the original GA object.
         */

        function ga() {
          for (
            var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2] = arguments[_key2];
          }

          if (args.length > 0) {
            internalGa.apply(void 0, args);

            if (_debug) {
              Object(
                _utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"],
              )("called ga('arguments');");
              Object(
                _utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"],
              )("with arguments: ".concat(JSON.stringify(args)));
            }
          }

          return window.ga;
        }
        /**
         * set:
         * GA tracker set method
         * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
         * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
         */

        function set(fieldsObject, trackerNames) {
          if (!fieldsObject) {
            Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(
              "`fieldsObject` is required in .set()",
            );
            return;
          }

          if (_typeof(fieldsObject) !== "object") {
            Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(
              "Expected `fieldsObject` arg to be an Object",
            );
            return;
          }

          if (Object.keys(fieldsObject).length === 0) {
            Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(
              "empty `fieldsObject` given to .set()",
            );
          }

          _gaCommand(trackerNames, "set", fieldsObject);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])(
              "called ga('set', fieldsObject);",
            );
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])(
              "with fieldsObject: ".concat(JSON.stringify(fieldsObject)),
            );
          }
        }
        /**
         * send:
         * Clone of the low level `ga.send` method
         * WARNING: No validations will be applied to this
         * @param  {Object} fieldObject - field object for tracking different analytics
         * @param  {Array} trackerNames - trackers to send the command to
         * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
         */

        function send(fieldObject, trackerNames) {
          _gaCommand(trackerNames, "send", fieldObject);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])(
              "called ga('send', fieldObject);",
            );
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])(
              "with fieldObject: ".concat(JSON.stringify(fieldObject)),
            );
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])(
              "with trackers: ".concat(JSON.stringify(trackerNames)),
            );
          }
        }
        /**
         * pageview:
         * Basic GA pageview tracking
         * @param  {String} path - the current page page e.g. '/about'
         * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
         * @param {String} title - (optional) the page title e. g. 'My Website'
         */

        function pageview(rawPath, trackerNames, title) {
          if (!rawPath) {
            Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(
              "path is required in .pageview()",
            );
            return;
          }

          var path = Object(
            _utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"],
          )(rawPath);

          if (path === "") {
            Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(
              "path cannot be an empty string in .pageview()",
            );
            return;
          }

          var extraFields = {};

          if (title) {
            extraFields.title = title;
          }

          if (typeof ga === "function") {
            _gaCommand(
              trackerNames,
              "send",
              _objectSpread(
                {
                  hitType: "pageview",
                  page: path,
                },
                extraFields,
              ),
            );

            if (_debug) {
              Object(
                _utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"],
              )("called ga('send', 'pageview', path);");
              var extraLog = "";

              if (title) {
                extraLog = " and title: ".concat(title);
              }

              Object(
                _utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"],
              )("with path: ".concat(path).concat(extraLog));
            }
          }
        }
        /**
         * modalview:
         * a proxy to basic GA pageview tracking to consistently track
         * modal views that are an equivalent UX to a traditional pageview
         * @param  {String} modalName e.g. 'add-or-edit-club'
         * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
         */

        function modalview(rawModalName, trackerNames) {
          if (!rawModalName) {
            Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(
              "modalName is required in .modalview(modalName)",
            );
            return;
          }

          var modalName = Object(
            _utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__["default"],
          )(
            Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(
              rawModalName,
            ),
          );

          if (modalName === "") {
            Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(
              "modalName cannot be an empty string or a single / in .modalview()",
            );
            return;
          }

          if (typeof ga === "function") {
            var path = "/modal/".concat(modalName);

            _gaCommand(trackerNames, "send", "pageview", path);

            if (_debug) {
              Object(
                _utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"],
              )("called ga('send', 'pageview', path);");
              Object(
                _utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"],
              )("with path: ".concat(path));
            }
          }
        }
        /**
         * timing:
         * GA timing
         * @param args.category {String} required
         * @param args.variable {String} required
         * @param args.value  {Int}  required
         * @param args.label  {String} required
         * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
         */

        function timing() {
          var _ref =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            category = _ref.category,
            variable = _ref.variable,
            value = _ref.value,
            label = _ref.label;

          var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

          if (typeof ga === "function") {
            if (!category || !variable || !value || typeof value !== "number") {
              Object(
                _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
              )(
                "args.category, args.variable " +
                  "AND args.value are required in timing() " +
                  "AND args.value has to be a number",
              );
              return;
            } // Required Fields

            var fieldObject = {
              hitType: "timing",
              timingCategory: _format(category),
              timingVar: _format(variable),
              timingValue: value,
            };

            if (label) {
              fieldObject.timingLabel = _format(label);
            }

            send(fieldObject, trackerNames);
          }
        }
        /**
         * event:
         * GA event tracking
         * @param args.category {String} required
         * @param args.action {String} required
         * @param args.label {String} optional
         * @param args.value {Int} optional
         * @param args.nonInteraction {boolean} optional
         * @param args.transport {string} optional
         * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
         */

        function event() {
          var _ref2 =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            category = _ref2.category,
            action = _ref2.action,
            label = _ref2.label,
            value = _ref2.value,
            nonInteraction = _ref2.nonInteraction,
            transport = _ref2.transport,
            args = _objectWithoutProperties(_ref2, [
              "category",
              "action",
              "label",
              "value",
              "nonInteraction",
              "transport",
            ]);

          var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

          if (typeof ga === "function") {
            // Simple Validation
            if (!category || !action) {
              Object(
                _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
              )("args.category AND args.action are required in event()");
              return;
            } // Required Fields

            var fieldObject = {
              hitType: "event",
              eventCategory: _format(category),
              eventAction: _format(action),
            }; // Optional Fields

            if (label) {
              fieldObject.eventLabel = _format(label);
            }

            if (typeof value !== "undefined") {
              if (typeof value !== "number") {
                Object(
                  _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                )("Expected `args.value` arg to be a Number.");
              } else {
                fieldObject.eventValue = value;
              }
            }

            if (typeof nonInteraction !== "undefined") {
              if (typeof nonInteraction !== "boolean") {
                Object(
                  _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                )("`args.nonInteraction` must be a boolean.");
              } else {
                fieldObject.nonInteraction = nonInteraction;
              }
            }

            if (typeof transport !== "undefined") {
              if (typeof transport !== "string") {
                Object(
                  _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                )("`args.transport` must be a string.");
              } else {
                if (["beacon", "xhr", "image"].indexOf(transport) === -1) {
                  Object(
                    _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                  )(
                    "`args.transport` must be either one of these values: `beacon`, `xhr` or `image`",
                  );
                }

                fieldObject.transport = transport;
              }
            }

            Object.keys(args)
              .filter(function(key) {
                return key.substr(0, "dimension".length) === "dimension";
              })
              .forEach(function(key) {
                fieldObject[key] = args[key];
              });
            Object.keys(args)
              .filter(function(key) {
                return key.substr(0, "metric".length) === "metric";
              })
              .forEach(function(key) {
                fieldObject[key] = args[key];
              }); // Send to GA

            send(fieldObject, trackerNames);
          }
        }
        /**
         * exception:
         * GA exception tracking
         * @param args.description {String} optional
         * @param args.fatal {boolean} optional
         * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
         */

        function exception(_ref3, trackerNames) {
          var description = _ref3.description,
            fatal = _ref3.fatal;

          if (typeof ga === "function") {
            // Required Fields
            var fieldObject = {
              hitType: "exception",
            }; // Optional Fields

            if (description) {
              fieldObject.exDescription = _format(description);
            }

            if (typeof fatal !== "undefined") {
              if (typeof fatal !== "boolean") {
                Object(
                  _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                )("`args.fatal` must be a boolean.");
              } else {
                fieldObject.exFatal = fatal;
              }
            } // Send to GA

            send(fieldObject, trackerNames);
          }
        }
        var plugin = {
          /**
           * require:
           * GA requires a plugin
           * @param name {String} e.g. 'ecommerce' or 'myplugin'
           * @param options {Object} optional e.g {path: '/log', debug: true}
           * @param trackerName {String} optional e.g 'trackerName'
           */
          require: function require(rawName, options, trackerName) {
            if (typeof ga === "function") {
              // Required Fields
              if (!rawName) {
                Object(
                  _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                )("`name` is required in .require()");
                return;
              }

              var name = Object(
                _utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"],
              )(rawName);

              if (name === "") {
                Object(
                  _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                )("`name` cannot be an empty string in .require()");
                return;
              }

              var requireString = trackerName
                ? "".concat(trackerName, ".require")
                : "require"; // Optional Fields

              if (options) {
                if (_typeof(options) !== "object") {
                  Object(
                    _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                  )("Expected `options` arg to be an Object");
                  return;
                }

                if (Object.keys(options).length === 0) {
                  Object(
                    _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                  )("Empty `options` given to .require()");
                }

                ga(requireString, name, options);

                if (_debug) {
                  Object(
                    _utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"],
                  )(
                    "called ga('require', '"
                      .concat(name, "', ")
                      .concat(JSON.stringify(options)),
                  );
                }
              } else {
                ga(requireString, name);

                if (_debug) {
                  Object(
                    _utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"],
                  )("called ga('require', '".concat(name, "');"));
                }
              }
            }
          },

          /**
           * execute:
           * GA execute action for plugin
           * Takes variable number of arguments
           * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
           * @param action {String} e.g. 'addItem' or 'myCustomAction'
           * @param actionType {String} optional e.g. 'detail'
           * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
           */
          execute: function execute(pluginName, action) {
            var payload;
            var actionType;

            if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
              payload = arguments.length <= 2 ? undefined : arguments[2];
            } else {
              actionType = arguments.length <= 2 ? undefined : arguments[2];
              payload = arguments.length <= 3 ? undefined : arguments[3];
            }

            if (typeof ga === "function") {
              if (typeof pluginName !== "string") {
                Object(
                  _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                )("Expected `pluginName` arg to be a String.");
              } else if (typeof action !== "string") {
                Object(
                  _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
                )("Expected `action` arg to be a String.");
              } else {
                var command = "".concat(pluginName, ":").concat(action);
                payload = payload || null;

                if (actionType && payload) {
                  ga(command, actionType, payload);

                  if (_debug) {
                    Object(
                      _utils_console_log__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ],
                    )("called ga('".concat(command, "');"));
                    Object(
                      _utils_console_log__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ],
                    )(
                      'actionType: "'
                        .concat(actionType, '" with payload: ')
                        .concat(JSON.stringify(payload)),
                    );
                  }
                } else if (payload) {
                  ga(command, payload);

                  if (_debug) {
                    Object(
                      _utils_console_log__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ],
                    )("called ga('".concat(command, "');"));
                    Object(
                      _utils_console_log__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ],
                    )("with payload: ".concat(JSON.stringify(payload)));
                  }
                } else {
                  ga(command);

                  if (_debug) {
                    Object(
                      _utils_console_log__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ],
                    )("called ga('".concat(command, "');"));
                  }
                }
              }
            }
          },
        };
        /**
         * outboundLink:
         * GA outboundLink tracking
         * @param args.label {String} e.g. url, or 'Create an Account'
         * @param {function} hitCallback - Called after processing a hit.
         */

        function outboundLink(args, hitCallback, trackerNames) {
          if (typeof hitCallback !== "function") {
            Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(
              "hitCallback function is required",
            );
            return;
          }

          if (typeof ga === "function") {
            // Simple Validation
            if (!args || !args.label) {
              Object(
                _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"],
              )("args.label is required in outboundLink()");
              return;
            } // Required Fields

            var fieldObject = {
              hitType: "event",
              eventCategory: "Outbound",
              eventAction: "Click",
              eventLabel: _format(args.label),
            };
            var safetyCallbackCalled = false;

            var safetyCallback = function safetyCallback() {
              // This prevents a delayed response from GA
              // causing hitCallback from being fired twice
              safetyCallbackCalled = true;
              hitCallback();
            }; // Using a timeout to ensure the execution of critical application code
            // in the case when the GA server might be down
            // or an ad blocker prevents sending the data
            // register safety net timeout:

            var t = setTimeout(safetyCallback, 250);

            var clearableCallbackForGA = function clearableCallbackForGA() {
              clearTimeout(t);

              if (!safetyCallbackCalled) {
                hitCallback();
              }
            };

            fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

            send(fieldObject, trackerNames);
          } else {
            // if ga is not defined, return the callback so the application
            // continues to work as expected
            setTimeout(hitCallback, 0);
          }
        }
        var testModeAPI =
          _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"];
        /* harmony default export */ __webpack_exports__["default"] = {
          initialize: initialize,
          ga: ga,
          set: set,
          send: send,
          pageview: pageview,
          modalview: modalview,
          timing: timing,
          event: event,
          exception: exception,
          plugin: plugin,
          outboundLink: outboundLink,
          testModeAPI:
            _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"],
        };

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/index.js":
      /*!*************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/index.js ***!
  \*************************************************/
      /*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, testModeAPI, OutboundLink, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialize",
          function() {
            return initialize;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ga",
          function() {
            return ga;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "set",
          function() {
            return set;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "send",
          function() {
            return send;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "pageview",
          function() {
            return pageview;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "modalview",
          function() {
            return modalview;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "timing",
          function() {
            return timing;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "event",
          function() {
            return event;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "exception",
          function() {
            return exception;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "plugin",
          function() {
            return plugin;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "outboundLink",
          function() {
            return outboundLink;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "testModeAPI",
          function() {
            return testModeAPI;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "OutboundLink",
          function() {
            return OutboundLink;
          },
        );
        /* harmony import */ var _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./components/OutboundLink */ "./node_modules/react-ga/dist/esm/components/OutboundLink.js",
        );
        /* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./core */ "./node_modules/react-ga/dist/esm/core.js",
        );
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(source, true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              );
            } else {
              ownKeys(source).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        var initialize = _core__WEBPACK_IMPORTED_MODULE_1__["initialize"];
        var ga = _core__WEBPACK_IMPORTED_MODULE_1__["ga"];
        var set = _core__WEBPACK_IMPORTED_MODULE_1__["set"];
        var send = _core__WEBPACK_IMPORTED_MODULE_1__["send"];
        var pageview = _core__WEBPACK_IMPORTED_MODULE_1__["pageview"];
        var modalview = _core__WEBPACK_IMPORTED_MODULE_1__["modalview"];
        var timing = _core__WEBPACK_IMPORTED_MODULE_1__["timing"];
        var event = _core__WEBPACK_IMPORTED_MODULE_1__["event"];
        var exception = _core__WEBPACK_IMPORTED_MODULE_1__["exception"];
        var plugin = _core__WEBPACK_IMPORTED_MODULE_1__["plugin"];
        var outboundLink = _core__WEBPACK_IMPORTED_MODULE_1__["outboundLink"];
        var testModeAPI = _core__WEBPACK_IMPORTED_MODULE_1__["testModeAPI"];
        _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].origTrackLink =
          _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ].trackLink;
        _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].trackLink = _core__WEBPACK_IMPORTED_MODULE_1__["outboundLink"];
        var OutboundLink =
          _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"];
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = _objectSpread({}, _core__WEBPACK_IMPORTED_MODULE_1__, {
          OutboundLink: OutboundLink,
        });

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
      /*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/log.js ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return log;
          },
        );
        function log(s) {
          console.info("[react-ga]", s);
        }

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
      /*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/warn.js ***!
  \**************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return warn;
          },
        );
        function warn(s) {
          console.warn("[react-ga]", s);
        }

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/utils/format.js":
      /*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/format.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return format;
          },
        );
        /* harmony import */ var _mightBeEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./mightBeEmail */ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js",
        );
        /* harmony import */ var _toTitleCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./toTitleCase */ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js",
        );
        /* harmony import */ var _console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js",
        );

        var redacted = "REDACTED (Potential Email Address)";
        function format(s, titleCase) {
          if (
            Object(_mightBeEmail__WEBPACK_IMPORTED_MODULE_0__["default"])(s)
          ) {
            Object(_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])(
              "This arg looks like an email address, redacting.",
            );
            return redacted;
          }

          if (titleCase) {
            return Object(_toTitleCase__WEBPACK_IMPORTED_MODULE_1__["default"])(
              s,
            );
          }

          return s;
        }

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
      /*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/loadGA.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = function(
          options,
        ) {
          var gaAddress = "https://www.google-analytics.com/analytics.js";

          if (options && options.gaAddress) {
            gaAddress = options.gaAddress;
          } else if (options && options.debug) {
            gaAddress = "https://www.google-analytics.com/analytics_debug.js";
          } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

          /* eslint-disable */

          (function(i, s, o, g, r, a, m) {
            i["GoogleAnalyticsObject"] = r;
            (i[r] =
              i[r] ||
              function() {
                (i[r].q = i[r].q || []).push(arguments);
              }),
              (i[r].l = 1 * new Date());
            (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
          })(window, document, "script", gaAddress, "ga");
          /* eslint-enable */
        };

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
      /*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js ***!
  \**************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return mightBeEmail;
          },
        );
        // See if s could be an email address. We don't want to send personal data like email.
        // https://support.google.com/analytics/answer/2795983?hl=en
        function mightBeEmail(s) {
          // There's no point trying to validate rfc822 fully, just look for ...@...
          return typeof s === "string" && s.indexOf("@") !== -1;
        }

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
      /*!********************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js ***!
  \********************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return removeLeadingSlash;
          },
        );
        function removeLeadingSlash(string) {
          if (string.substring(0, 1) === "/") {
            return string.substring(1);
          }

          return string;
        }

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
      /*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/testModeAPI.js ***!
  \*************************************************************/
      /*! exports provided: gaCalls, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "gaCalls",
          function() {
            return gaCalls;
          },
        );
        var gaCalls = [];
        /* harmony default export */ __webpack_exports__["default"] = {
          calls: gaCalls,
          ga: function ga() {
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            gaCalls.push([].concat(args));
          },
          resetCalls: function resetCalls() {
            gaCalls.length = 0;
          },
        };

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
      /*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/toTitleCase.js ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return toTitleCase;
          },
        );
        /* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./trim */ "./node_modules/react-ga/dist/esm/utils/trim.js",
        );
        /**
         * To Title Case 2.1 - http://individed.com/code/to-title-case/
         * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
         * https://github.com/gouch/to-title-case
         */

        var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
        function toTitleCase(string) {
          return Object(_trim__WEBPACK_IMPORTED_MODULE_0__["default"])(
            string,
          ).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(
            match,
            index,
            title,
          ) {
            if (
              index > 0 &&
              index + match.length !== title.length &&
              match.search(smallWords) > -1 &&
              title.charAt(index - 2) !== ":" &&
              (title.charAt(index + match.length) !== "-" ||
                title.charAt(index - 1) === "-") &&
              title.charAt(index - 1).search(/[^\s-]/) < 0
            ) {
              return match.toLowerCase();
            }

            if (match.substr(1).search(/[A-Z]|\../) > -1) {
              return match;
            }

            return match.charAt(0).toUpperCase() + match.substr(1);
          });
        }

        /***/
      },

    /***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
      /*!******************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/trim.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return trim;
          },
        );
        // GA strings need to have leading/trailing whitespace trimmed, and not all
        // browsers have String.prototoype.trim().
        function trim(s) {
          return s.replace(/^\s+|\s+$/g, "");
        }

        /***/
      },

    /***/ "./node_modules/react-is/cjs/react-is.development.js":
      /*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";
        /** @license React v16.8.6
         * react-is.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (true) {
          (function() {
            "use strict";

            Object.defineProperty(exports, "__esModule", { value: true });

            // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
            // nor polyfill, then a plain number is used for performance.
            var hasSymbol = typeof Symbol === "function" && Symbol.for;

            var REACT_ELEMENT_TYPE = hasSymbol
              ? Symbol.for("react.element")
              : 0xeac7;
            var REACT_PORTAL_TYPE = hasSymbol
              ? Symbol.for("react.portal")
              : 0xeaca;
            var REACT_FRAGMENT_TYPE = hasSymbol
              ? Symbol.for("react.fragment")
              : 0xeacb;
            var REACT_STRICT_MODE_TYPE = hasSymbol
              ? Symbol.for("react.strict_mode")
              : 0xeacc;
            var REACT_PROFILER_TYPE = hasSymbol
              ? Symbol.for("react.profiler")
              : 0xead2;
            var REACT_PROVIDER_TYPE = hasSymbol
              ? Symbol.for("react.provider")
              : 0xeacd;
            var REACT_CONTEXT_TYPE = hasSymbol
              ? Symbol.for("react.context")
              : 0xeace;
            var REACT_ASYNC_MODE_TYPE = hasSymbol
              ? Symbol.for("react.async_mode")
              : 0xeacf;
            var REACT_CONCURRENT_MODE_TYPE = hasSymbol
              ? Symbol.for("react.concurrent_mode")
              : 0xeacf;
            var REACT_FORWARD_REF_TYPE = hasSymbol
              ? Symbol.for("react.forward_ref")
              : 0xead0;
            var REACT_SUSPENSE_TYPE = hasSymbol
              ? Symbol.for("react.suspense")
              : 0xead1;
            var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
            var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;

            function isValidElementType(type) {
              return (
                typeof type === "string" ||
                typeof type === "function" ||
                // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                type === REACT_FRAGMENT_TYPE ||
                type === REACT_CONCURRENT_MODE_TYPE ||
                type === REACT_PROFILER_TYPE ||
                type === REACT_STRICT_MODE_TYPE ||
                type === REACT_SUSPENSE_TYPE ||
                (typeof type === "object" &&
                  type !== null &&
                  (type.$$typeof === REACT_LAZY_TYPE ||
                    type.$$typeof === REACT_MEMO_TYPE ||
                    type.$$typeof === REACT_PROVIDER_TYPE ||
                    type.$$typeof === REACT_CONTEXT_TYPE ||
                    type.$$typeof === REACT_FORWARD_REF_TYPE))
              );
            }

            /**
             * Forked from fbjs/warning:
             * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
             *
             * Only change is we use console.warn instead of console.error,
             * and do nothing when 'console' is not supported.
             * This really simplifies the code.
             * ---
             * Similar to invariant but only logs a warning if the condition is not met.
             * This can be used to log issues in development environments in critical
             * paths. Removing the logging code for production environments will keep the
             * same logic and follow the same code paths.
             */

            var lowPriorityWarning = function() {};

            {
              var printWarning = function(format) {
                for (
                  var _len = arguments.length,
                    args = Array(_len > 1 ? _len - 1 : 0),
                    _key = 1;
                  _key < _len;
                  _key++
                ) {
                  args[_key - 1] = arguments[_key];
                }

                var argIndex = 0;
                var message =
                  "Warning: " +
                  format.replace(/%s/g, function() {
                    return args[argIndex++];
                  });
                if (typeof console !== "undefined") {
                  console.warn(message);
                }
                try {
                  // --- Welcome to debugging React ---
                  // This error was thrown as a convenience so that you can use this stack
                  // to find the callsite that caused this warning to fire.
                  throw new Error(message);
                } catch (x) {}
              };

              lowPriorityWarning = function(condition, format) {
                if (format === undefined) {
                  throw new Error(
                    "`lowPriorityWarning(condition, format, ...args)` requires a warning " +
                      "message argument",
                  );
                }
                if (!condition) {
                  for (
                    var _len2 = arguments.length,
                      args = Array(_len2 > 2 ? _len2 - 2 : 0),
                      _key2 = 2;
                    _key2 < _len2;
                    _key2++
                  ) {
                    args[_key2 - 2] = arguments[_key2];
                  }

                  printWarning.apply(undefined, [format].concat(args));
                }
              };
            }

            var lowPriorityWarning$1 = lowPriorityWarning;

            function typeOf(object) {
              if (typeof object === "object" && object !== null) {
                var $$typeof = object.$$typeof;
                switch ($$typeof) {
                  case REACT_ELEMENT_TYPE:
                    var type = object.type;

                    switch (type) {
                      case REACT_ASYNC_MODE_TYPE:
                      case REACT_CONCURRENT_MODE_TYPE:
                      case REACT_FRAGMENT_TYPE:
                      case REACT_PROFILER_TYPE:
                      case REACT_STRICT_MODE_TYPE:
                      case REACT_SUSPENSE_TYPE:
                        return type;
                      default:
                        var $$typeofType = type && type.$$typeof;

                        switch ($$typeofType) {
                          case REACT_CONTEXT_TYPE:
                          case REACT_FORWARD_REF_TYPE:
                          case REACT_PROVIDER_TYPE:
                            return $$typeofType;
                          default:
                            return $$typeof;
                        }
                    }
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PORTAL_TYPE:
                    return $$typeof;
                }
              }

              return undefined;
            }

            // AsyncMode is deprecated along with isAsyncMode
            var AsyncMode = REACT_ASYNC_MODE_TYPE;
            var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
            var ContextConsumer = REACT_CONTEXT_TYPE;
            var ContextProvider = REACT_PROVIDER_TYPE;
            var Element = REACT_ELEMENT_TYPE;
            var ForwardRef = REACT_FORWARD_REF_TYPE;
            var Fragment = REACT_FRAGMENT_TYPE;
            var Lazy = REACT_LAZY_TYPE;
            var Memo = REACT_MEMO_TYPE;
            var Portal = REACT_PORTAL_TYPE;
            var Profiler = REACT_PROFILER_TYPE;
            var StrictMode = REACT_STRICT_MODE_TYPE;
            var Suspense = REACT_SUSPENSE_TYPE;

            var hasWarnedAboutDeprecatedIsAsyncMode = false;

            // AsyncMode should be deprecated
            function isAsyncMode(object) {
              {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                  hasWarnedAboutDeprecatedIsAsyncMode = true;
                  lowPriorityWarning$1(
                    false,
                    "The ReactIs.isAsyncMode() alias has been deprecated, " +
                      "and will be removed in React 17+. Update your code to use " +
                      "ReactIs.isConcurrentMode() instead. It has the exact same API.",
                  );
                }
              }
              return (
                isConcurrentMode(object) ||
                typeOf(object) === REACT_ASYNC_MODE_TYPE
              );
            }
            function isConcurrentMode(object) {
              return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
              return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
              return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
              return (
                typeof object === "object" &&
                object !== null &&
                object.$$typeof === REACT_ELEMENT_TYPE
              );
            }
            function isForwardRef(object) {
              return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
              return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
              return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
              return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
              return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
              return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
              return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
              return typeOf(object) === REACT_SUSPENSE_TYPE;
            }

            exports.typeOf = typeOf;
            exports.AsyncMode = AsyncMode;
            exports.ConcurrentMode = ConcurrentMode;
            exports.ContextConsumer = ContextConsumer;
            exports.ContextProvider = ContextProvider;
            exports.Element = Element;
            exports.ForwardRef = ForwardRef;
            exports.Fragment = Fragment;
            exports.Lazy = Lazy;
            exports.Memo = Memo;
            exports.Portal = Portal;
            exports.Profiler = Profiler;
            exports.StrictMode = StrictMode;
            exports.Suspense = Suspense;
            exports.isValidElementType = isValidElementType;
            exports.isAsyncMode = isAsyncMode;
            exports.isConcurrentMode = isConcurrentMode;
            exports.isContextConsumer = isContextConsumer;
            exports.isContextProvider = isContextProvider;
            exports.isElement = isElement;
            exports.isForwardRef = isForwardRef;
            exports.isFragment = isFragment;
            exports.isLazy = isLazy;
            exports.isMemo = isMemo;
            exports.isPortal = isPortal;
            exports.isProfiler = isProfiler;
            exports.isStrictMode = isStrictMode;
            exports.isSuspense = isSuspense;
          })();
        }

        /***/
      },

    /***/ "./node_modules/react-is/index.js":
      /*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        if (false) {
        } else {
          module.exports = __webpack_require__(
            /*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js",
          );
        }

        /***/
      },

    /***/ "./node_modules/react/index.js":
      /*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8",
        )("./node_modules/react/index.js");

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
          /*! react */ "./node_modules/react/index.js",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js",
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! next/head */ "./node_modules/next-server/dist/lib/head.js",
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
        /* harmony import */ var _components_HeadMeta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../components/HeadMeta */ "./components/HeadMeta.tsx",
        );
        /* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../components/Wrapper */ "./components/Wrapper.tsx",
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../utils/Scale */ "./utils/Scale.tsx",
        );
        /* harmony import */ var _utils_rehydrate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../utils/rehydrate */ "./utils/rehydrate.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/pages/report.tsx";

        // Refresh styles

        // Styled Components

        var Title = glamorous__WEBPACK_IMPORTED_MODULE_2__["default"].h2(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          )(
            {
              color:
                _design_system__WEBPACK_IMPORTED_MODULE_8__["colors"].black,
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_9__["Step"],
              )(5.35),
            },
            _design_system__WEBPACK_IMPORTED_MODULE_8__["breakpoints"].ns,
            {
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_9__["Step"],
              )(6),
            },
          ),
        );
        var Subtitle = glamorous__WEBPACK_IMPORTED_MODULE_2__["default"].h1(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          )(
            {
              paddingBottom: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_9__["Step"],
              )(5),
              color: _design_system__WEBPACK_IMPORTED_MODULE_8__["colors"].grey,
              fontWeight: 500,
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_9__["Step"],
              )(4.5),
            },
            _design_system__WEBPACK_IMPORTED_MODULE_8__["breakpoints"].ns,
            {
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_9__["Step"],
              )(5),
            },
          ),
        );

        var Report = function Report() {
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            _components_Analytics__WEBPACK_IMPORTED_MODULE_4__["default"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              next_head__WEBPACK_IMPORTED_MODULE_3___default.a,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                "title",
                {
                  key: "head-title",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                  },
                  __self: this,
                },
                _content_ambassadors_report_seo__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ].title,
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              _components_HeadMeta__WEBPACK_IMPORTED_MODULE_6__["default"],
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
                  lineNumber: 40,
                },
                __self: this,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              _components_Wrapper__WEBPACK_IMPORTED_MODULE_7__["default"],
              {
                className: "center tc ph3 ph0-l",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                Title,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                  },
                  __self: this,
                },
                "Ambassadors Report",
              ),
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                Subtitle,
                {
                  className: "measure-narrow center lh-copy",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                  },
                  __self: this,
                },
                "Give the gift of crypto to help people in need around the world.",
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
          /*! natural-scale */ "./node_modules/natural-scale/dist/index.js",
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
          /*! glamor */ "./node_modules/glamor/lib/index.js",
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

    /***/ 1:
      /*!****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Freport&absolutePagePath=%2FUsers%2Fjklb%2Fdev%2Fgivecrypto%2Fwebsite%2Fpages%2Freport.tsx ***!
  \****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! next-client-pages-loader?page=%2Freport&absolutePagePath=%2FUsers%2Fjklb%2Fdev%2Fgivecrypto%2Fwebsite%2Fpages%2Freport.tsx! */ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Freport&absolutePagePath=%2FUsers%2Fjklb%2Fdev%2Fgivecrypto%2Fwebsite%2Fpages%2Freport.tsx!./",
        );

        /***/
      },

    /***/ "dll-reference dll_829b10deddf10e1653a8":
      /*!*******************************************!*\
  !*** external "dll_829b10deddf10e1653a8" ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = dll_829b10deddf10e1653a8;

        /***/
      },
  },
  [[1, "static/runtime/webpack.js"]],
]);
//# sourceMappingURL=report.js.map
