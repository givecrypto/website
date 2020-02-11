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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./animations/menu--grey-white.json":
      /*!******************************************!*\
  !*** ./animations/menu--grey-white.json ***!
  \******************************************/
      /*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
      /***/ function(module) {
        module.exports = {
          v: "5.1.1",
          fr: 29.9700012207031,
          ip: 15.0000006109625,
          op: 34.0000013848484,
          w: 600,
          h: 512,
          nm: "3 Line Color Change",
          ddd: 0,
          assets: [],
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: "Icon",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [315.062, 263.462, 0], ix: 2 },
                a: { a: 0, k: [-118, -117, 0], ix: 1 },
                s: { a: 0, k: [882.353, 882.353, 100], ix: 6 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [68, 8], ix: 2 },
                      p: { a: 0, k: [0, -15], ix: 3 },
                      r: { a: 0, k: 0, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 15,
                            s: [
                              0.592156887054,
                              0.592156887054,
                              0.592156887054,
                              1,
                            ],
                            e: [1, 1, 1, 1],
                          },
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 24,
                            s: [1, 1, 1, 1],
                            e: [1, 1, 1, 1],
                          },
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 80,
                            s: [1, 1, 1, 1],
                            e: [0.254901975393, 0.250980407, 0.258823543787, 1],
                          },
                          { t: 89.0000036250443 },
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      nm: "Fill 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: false,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [-119.707, -117.727], ix: 2 },
                      a: { a: 0, k: [0, -14.881], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 24,
                            s: [100],
                            e: [0],
                          },
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 25,
                            s: [0],
                            e: [0],
                          },
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 80,
                            s: [0],
                            e: [100],
                          },
                          { t: 81.0000032991976 },
                        ],
                        ix: 7,
                      },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform",
                    },
                  ],
                  nm: "Rectangle 3",
                  np: 3,
                  cix: 2,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: false,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [68, 8], ix: 2 },
                      p: {
                        a: 1,
                        k: [
                          {
                            i: { x: 0, y: 1 },
                            o: { x: 0.167, y: 0.167 },
                            n: "0_1_0p167_0p167",
                            t: 15,
                            s: [0, 10],
                            e: [0, -15],
                            to: [0, -4.16666650772095],
                            ti: [0, 4.16666650772095],
                          },
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            n: "0p833_0p833_0p167_0p167",
                            t: 25,
                            s: [0, -15],
                            e: [0, -15],
                            to: [0, 0],
                            ti: [0, 0],
                          },
                          {
                            i: { x: 0, y: 1 },
                            o: { x: 0.167, y: 0.167 },
                            n: "0_1_0p167_0p167",
                            t: 80,
                            s: [0, -15],
                            e: [0, 10],
                            to: [0, 4.16666650772095],
                            ti: [0, -4.16666650772095],
                          },
                          { t: 90.0000036657751 },
                        ],
                        ix: 3,
                      },
                      r: { a: 0, k: 0, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 15,
                            s: [
                              0.592156887054,
                              0.592156887054,
                              0.592156887054,
                              1,
                            ],
                            e: [1, 1, 1, 1],
                          },
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 24,
                            s: [1, 1, 1, 1],
                            e: [1, 1, 1, 1],
                          },
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 80,
                            s: [1, 1, 1, 1],
                            e: [0.254901975393, 0.250980407, 0.258823543787, 1],
                          },
                          { t: 89.0000036250443 },
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      nm: "Fill 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: false,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [-119.707, -117.727], ix: 2 },
                      a: { a: 0, k: [0, -14.881], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0], y: [1] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0_1_0p167_0p167"],
                            t: 24,
                            s: [0],
                            e: [45],
                          },
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 34,
                            s: [45],
                            e: [45],
                          },
                          {
                            i: { x: [0], y: [1] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0_1_0p167_0p167"],
                            t: 73,
                            s: [45],
                            e: [0],
                          },
                          { t: 81.0000032991976 },
                        ],
                        ix: 6,
                      },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform",
                    },
                  ],
                  nm: "Rectangle 2",
                  np: 3,
                  cix: 2,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: false,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [68, 8], ix: 2 },
                      p: {
                        a: 1,
                        k: [
                          {
                            i: { x: 0, y: 1 },
                            o: { x: 0.167, y: 0.167 },
                            n: "0_1_0p167_0p167",
                            t: 15,
                            s: [0, -10],
                            e: [0, 15],
                            to: [0, 4.16666650772095],
                            ti: [0, -4.16666650772095],
                          },
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            n: "0p833_0p833_0p167_0p167",
                            t: 25,
                            s: [0, 15],
                            e: [0, 15],
                            to: [0, 0],
                            ti: [0, 0],
                          },
                          {
                            i: { x: 0, y: 1 },
                            o: { x: 0.167, y: 0.167 },
                            n: "0_1_0p167_0p167",
                            t: 80,
                            s: [0, 15],
                            e: [0, -10],
                            to: [0, -4.16666650772095],
                            ti: [0, 4.16666650772095],
                          },
                          { t: 90.0000036657751 },
                        ],
                        ix: 3,
                      },
                      r: { a: 0, k: 0, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 15,
                            s: [
                              0.592156887054,
                              0.592156887054,
                              0.592156887054,
                              1,
                            ],
                            e: [1, 1, 1, 1],
                          },
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 24,
                            s: [1, 1, 1, 1],
                            e: [1, 1, 1, 1],
                          },
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 80,
                            s: [1, 1, 1, 1],
                            e: [0.254901975393, 0.250980407, 0.258823543787, 1],
                          },
                          { t: 89.0000036250443 },
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      nm: "Fill 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: false,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [-119.707, -117.724], ix: 2 },
                      a: { a: 0, k: [0, 15.122], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0], y: [1] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0_1_0p167_0p167"],
                            t: 24,
                            s: [0],
                            e: [-45],
                          },
                          {
                            i: { x: [0.833], y: [0.833] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0p833_0p833_0p167_0p167"],
                            t: 34,
                            s: [-45],
                            e: [-45],
                          },
                          {
                            i: { x: [0], y: [1] },
                            o: { x: [0.167], y: [0.167] },
                            n: ["0_1_0p167_0p167"],
                            t: 73,
                            s: [-45],
                            e: [0],
                          },
                          { t: 81.0000032991976 },
                        ],
                        ix: 6,
                      },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform",
                    },
                  ],
                  nm: "Rectangle 1",
                  np: 3,
                  cix: 2,
                  ix: 3,
                  mn: "ADBE Vector Group",
                  hd: false,
                },
              ],
              ip: 0,
              op: 300.00001221925,
              st: 0,
              bm: 0,
            },
          ],
          markers: [],
        };

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

    /***/ "./components/Copyright.tsx":
      /*!**********************************!*\
  !*** ./components/Copyright.tsx ***!
  \**********************************/
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
          "/Users/jklb/dev/givecrypto/website/components/Copyright.tsx";

        var year = new Date().getFullYear();

        var Copyright = function Copyright() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "span",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 4,
              },
              __self: this,
            },
            "\xA9 ",
            year,
            " GiveCrypto. All rights reserved.",
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Copyright;

        /***/
      },

    /***/ "./components/Footer.tsx":
      /*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! glamorous */ "glamorous",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          glamorous__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/Link */ "./components/Link.tsx",
        );
        /* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../components/Share */ "./components/Share.tsx",
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../utils/Scale */ "./utils/Scale.tsx",
        );
        /* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./Copyright */ "./components/Copyright.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Footer.tsx";

        var Logo = function Logo(props) {
          return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
            "svg",
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )({}, props, {
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
              "g",
              {
                style: {
                  isolation: "isolate",
                },
                fill: "#323232",
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("path", {
                d:
                  "M13.3 13.7h7.6V25h-2.4l-.3-3.1a7 7 0 0 1-6.3 3.3c-5.1 0-10-3.7-10-11.5s4.8-11.5 10-11.5A8.51 8.51 0 0 1 20.7 9l-2.7.9C17 6.8 14.9 5 11.9 5c-4.1 0-7.2 3-7.2 8.8s3.1 8.8 7.2 8.8c3.9 0 5.9-2.6 6.2-6.2h-4.9v-2.7zM27.1 2.2a2 2 0 0 1 2 2.1 2 2 0 0 1-2 2 1.94 1.94 0 0 1-2-2 1.92 1.92 0 0 1 2-2.1zm1.3 6.6V25h-2.7V8.8zM45.8 8.8L40.4 25h-2.8L32.3 8.8h2.8l4 12.8 4-12.8zM62.5 17.5H50.6c.2 3 1.6 5.3 4.6 5.3 2.4 0 3.6-1.1 4.5-3.1l2.4 1c-1.5 3.1-3.5 4.5-6.9 4.5-4.9 0-7.3-4-7.3-8.4s2.4-8.4 7.3-8.4 7.3 3.7 7.3 7.7zM50.8 15h8.9c-.5-2.3-1.9-4-4.5-4s-3.9 1.7-4.4 4z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("path", {
              d:
                "M167.7 21.1a2 2 0 0 1 2 2 2 2 0 0 1-4 0 2 2 0 0 1 2-2zM179.9 8.2c4.9 0 7.8 4 7.8 8.4s-2.9 8.4-7.8 8.4-7.8-4-7.8-8.4 3-8.4 7.8-8.4zm0 14.3c3.3 0 5-2.9 5-5.9s-1.7-5.9-5-5.9-5 2.9-5 5.9 1.7 5.9 5 5.9z",
              fill: "#323232",
              style: {
                isolation: "isolate",
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
              "g",
              {
                style: {
                  isolation: "isolate",
                },
                fill: "#323232",
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("path", {
                d:
                  "M200.6 11.1a4.14 4.14 0 0 0-1.9-.5c-2.2 0-4.5 2.6-4.5 7.9v6.1h-2.7V8.5h2.7v2.8a5.84 5.84 0 0 1 4.8-3 4.47 4.47 0 0 1 2.2.5zM209.2 8.2a6.53 6.53 0 0 1 2.9.7l2.9-1.6 1.2 2.2-2.2 1.2a5.47 5.47 0 0 1 .8 2.9c0 3.4-2.5 5.4-5.7 5.4a6.39 6.39 0 0 1-2.8-.6 1.82 1.82 0 0 0-1.1 1.6c0 .9.6 1.3 1.8 1.3h3.8c3 0 5.1 1.5 5.1 4.5 0 4-3.1 5.6-6.8 5.6-4.1 0-6.9-2-6.9-5.3a4.36 4.36 0 0 1 1.5-3.4 3.17 3.17 0 0 1-1.1-2.6 3.28 3.28 0 0 1 2-3 5.68 5.68 0 0 1-1.2-3.5 5.47 5.47 0 0 1 5.8-5.4zm-1.9 15.5a4.87 4.87 0 0 1-1.2-.1A2.77 2.77 0 0 0 205 26c0 1.8 1.4 3.1 4.2 3.1s4.1-1.3 4.1-3-1.2-2.4-2.7-2.4zm1.9-6.9a2.91 2.91 0 0 0 3-3.1 3 3 0 1 0-6 0 2.91 2.91 0 0 0 3 3.1z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("path", {
              d:
                "M81 10a5.43 5.43 0 0 0-5.6-3.9c-3.5 0-6.4 2.4-6.4 7.6s2.9 7.6 6.4 7.6a5.51 5.51 0 0 0 5.6-3.9l3.8 1c-1.1 4.3-4.4 6.8-9.3 6.8-5.6 0-10.6-4-10.6-11.5s5-11.5 10.6-11.5c4.9 0 8.3 2.5 9.3 6.8z",
              fill: "#323232",
              style: {
                isolation: "isolate",
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
              "g",
              {
                style: {
                  isolation: "isolate",
                },
                fill: "#323232",
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("path", {
                d:
                  "M88.3 25V8.8h4v2.6a5.76 5.76 0 0 1 4.8-2.9 6.93 6.93 0 0 1 2 .3l-.7 3.7a3.06 3.06 0 0 0-1.7-.4c-2.3 0-4.3 1.9-4.3 7.1V25zM104.7 8.8l3.8 10.2L112 8.8h4l-8.4 22.8h-3.9l2.8-7.6-5.9-15.2z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("path", {
              d:
                "M125.5 25.3a5.28 5.28 0 0 1-3.9-1.7v8h-4V8.8h4v1.7a4.7 4.7 0 0 1 3.9-1.9c4.9 0 7.4 3.4 7.4 8.4s-2.5 8.3-7.4 8.3zm-.6-13.3c-2.1 0-3.7 1.7-3.7 4.9s1.6 4.9 3.7 4.9 3.8-1.7 3.8-4.9-1.7-4.9-3.8-4.9zM145.7 24.7a6.51 6.51 0 0 1-2.6.6c-3.7 0-5.9-2-5.9-6v-7.1h-2.5V8.8h2.5v-4l4-2.5v6.6h4.3v3.4h-4.3v7c0 2 .8 2.6 2.1 2.6a2.82 2.82 0 0 0 1.5-.4zM155.7 8.5c5.2 0 8.2 3.7 8.2 8.4s-3 8.4-8.2 8.4-8.2-3.7-8.2-8.4 3-8.4 8.2-8.4zm0 13.4c2.6 0 4-2.3 4-4.9s-1.5-4.9-4-4.9-4 2.3-4 4.9 1.5 4.9 4 4.9z",
              fill: "#323232",
              style: {
                isolation: "isolate",
              },
              __self: this,
            }),
          );
        };

        Logo.defaultProps = {
          xmlns: "http://www.w3.org/2000/svg",
          width: "217",
          height: "33",
          viewBox: "0 0 217 33",
        };

        var Legal = glamorous__WEBPACK_IMPORTED_MODULE_2___default.a.p({
          display: "flex",
          margin: 0,
          padding: 0,
          fontWeight: 400,
          fontSize: Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_7__["Step"])(
            3.75,
          ),
        });
        var LogoContainer = glamorous__WEBPACK_IMPORTED_MODULE_2___default.a.div(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ],
          )(
            {
              maxWidth: 150,
            },
            _design_system__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].ns,
            {
              maxWidth: 170,
            },
          ),
        );

        var Footer = function Footer() {
          return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
            glamorous__WEBPACK_IMPORTED_MODULE_2__["Section"],
            {
              flexShrink: 0,
              role: "footer",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
              glamorous__WEBPACK_IMPORTED_MODULE_2__["Div"],
              {
                padding: Object(
                  _utils_Scale__WEBPACK_IMPORTED_MODULE_7__["Step"],
                )(5),
                className:
                  "h4 flex flex-wrap justify-between items-center items-top-ns",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
                glamorous__WEBPACK_IMPORTED_MODULE_2__["Div"],
                {
                  className: "order-0",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
                  _components_Link__WEBPACK_IMPORTED_MODULE_4__["default"],
                  {
                    href: "/",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
                    LogoContainer,
                    {
                      className: "responsive",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Logo, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34,
                      },
                      __self: this,
                    }),
                  ),
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
                glamorous__WEBPACK_IMPORTED_MODULE_2__["Div"],
                {
                  className: "o-30 order-2 order-1-ns",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
                  Legal,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
                    _Copyright__WEBPACK_IMPORTED_MODULE_8__["default"],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40,
                      },
                      __self: this,
                    },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41,
                      },
                      __self: this,
                    },
                    "\xA0\xA0|\xA0\xA0",
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
                    _components_Link__WEBPACK_IMPORTED_MODULE_4__["default"],
                    {
                      href: "/terms",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                      },
                      __self: this,
                    },
                    "Terms",
                  ),
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
                glamorous__WEBPACK_IMPORTED_MODULE_2__["Div"],
                {
                  className: "order-1 order-2-ns tc",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](
                  _components_Share__WEBPACK_IMPORTED_MODULE_5__["default"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                    },
                    __self: this,
                  },
                ),
              ),
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Footer;

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

    /***/ "./components/Navigation/Links.tsx":
      /*!*****************************************!*\
  !*** ./components/Navigation/Links.tsx ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = [
          {
            title: "How It Works",
            to: "how-it-works",
          },
          {
            title: "About",
            to: "about",
          },
          {
            title: "FAQ",
            to: "faq",
          },
          {
            title: "Donors",
            href: "/donors",
            activeClass: "active active-style", // Leave this alone :)
          },
          {
            title: "Blog",
            href: "https://medium.com/givecrypto",
          },
        ];

        /***/
      },

    /***/ "./components/Navigation/Navigation.tsx":
      /*!**********************************************!*\
  !*** ./components/Navigation/Navigation.tsx ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return Navigation;
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
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js",
        );
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! glamorous */ "glamorous",
        );
        /* harmony import */ var glamorous__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          glamorous__WEBPACK_IMPORTED_MODULE_8__,
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! next/router */ "next/router",
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_9__,
        );
        /* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! nprogress */ "nprogress",
        );
        /* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          nprogress__WEBPACK_IMPORTED_MODULE_10__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_11__,
        );
        /* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! react-headroom */ "react-headroom",
        );
        /* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          react_headroom__WEBPACK_IMPORTED_MODULE_12__,
        );
        /* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! react-lottie */ "react-lottie",
        );
        /* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
          react_lottie__WEBPACK_IMPORTED_MODULE_13__,
        );
        /* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! react-responsive-modal */ "react-responsive-modal",
        );
        /* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          react_responsive_modal__WEBPACK_IMPORTED_MODULE_14__,
        );
        /* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! react-scroll */ "react-scroll",
        );
        /* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
          react_scroll__WEBPACK_IMPORTED_MODULE_15__,
        );
        /* harmony import */ var _animations_menu_grey_white_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../animations/menu--grey-white.json */ "./animations/menu--grey-white.json",
        );
        var _animations_menu_grey_white_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/ __webpack_require__.t(
          /*! ../../animations/menu--grey-white.json */ "./animations/menu--grey-white.json",
          1,
        );
        /* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../components/Button */ "./components/Button.tsx",
        );
        /* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../components/Link */ "./components/Link.tsx",
        );
        /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../design-system */ "./design-system/index.ts",
        );
        /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../utils/Scale */ "./utils/Scale.tsx",
        );
        /* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./Links */ "./components/Navigation/Links.tsx",
        );

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Navigation/Navigation.tsx";

        var Logo = function Logo(props) {
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
              "g",
              {
                style: {
                  isolation: "isolate",
                },
                fill: "#323232",
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
                d:
                  "M13.3 13.7h7.6V25h-2.4l-.3-3.1a7 7 0 0 1-6.3 3.3c-5.1 0-10-3.7-10-11.5s4.8-11.5 10-11.5A8.51 8.51 0 0 1 20.7 9l-2.7.9C17 6.8 14.9 5 11.9 5c-4.1 0-7.2 3-7.2 8.8s3.1 8.8 7.2 8.8c3.9 0 5.9-2.6 6.2-6.2h-4.9v-2.7zM27.1 2.2a2 2 0 0 1 2 2.1 2 2 0 0 1-2 2 1.94 1.94 0 0 1-2-2 1.92 1.92 0 0 1 2-2.1zm1.3 6.6V25h-2.7V8.8zM45.8 8.8L40.4 25h-2.8L32.3 8.8h2.8l4 12.8 4-12.8zM62.5 17.5H50.6c.2 3 1.6 5.3 4.6 5.3 2.4 0 3.6-1.1 4.5-3.1l2.4 1c-1.5 3.1-3.5 4.5-6.9 4.5-4.9 0-7.3-4-7.3-8.4s2.4-8.4 7.3-8.4 7.3 3.7 7.3 7.7zM50.8 15h8.9c-.5-2.3-1.9-4-4.5-4s-3.9 1.7-4.4 4z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              d:
                "M167.7 21.1a2 2 0 0 1 2 2 2 2 0 0 1-4 0 2 2 0 0 1 2-2zM179.9 8.2c4.9 0 7.8 4 7.8 8.4s-2.9 8.4-7.8 8.4-7.8-4-7.8-8.4 3-8.4 7.8-8.4zm0 14.3c3.3 0 5-2.9 5-5.9s-1.7-5.9-5-5.9-5 2.9-5 5.9 1.7 5.9 5 5.9z",
              fill: "#323232",
              style: {
                isolation: "isolate",
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
              "g",
              {
                style: {
                  isolation: "isolate",
                },
                fill: "#323232",
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
                d:
                  "M200.6 11.1a4.14 4.14 0 0 0-1.9-.5c-2.2 0-4.5 2.6-4.5 7.9v6.1h-2.7V8.5h2.7v2.8a5.84 5.84 0 0 1 4.8-3 4.47 4.47 0 0 1 2.2.5zM209.2 8.2a6.53 6.53 0 0 1 2.9.7l2.9-1.6 1.2 2.2-2.2 1.2a5.47 5.47 0 0 1 .8 2.9c0 3.4-2.5 5.4-5.7 5.4a6.39 6.39 0 0 1-2.8-.6 1.82 1.82 0 0 0-1.1 1.6c0 .9.6 1.3 1.8 1.3h3.8c3 0 5.1 1.5 5.1 4.5 0 4-3.1 5.6-6.8 5.6-4.1 0-6.9-2-6.9-5.3a4.36 4.36 0 0 1 1.5-3.4 3.17 3.17 0 0 1-1.1-2.6 3.28 3.28 0 0 1 2-3 5.68 5.68 0 0 1-1.2-3.5 5.47 5.47 0 0 1 5.8-5.4zm-1.9 15.5a4.87 4.87 0 0 1-1.2-.1A2.77 2.77 0 0 0 205 26c0 1.8 1.4 3.1 4.2 3.1s4.1-1.3 4.1-3-1.2-2.4-2.7-2.4zm1.9-6.9a2.91 2.91 0 0 0 3-3.1 3 3 0 1 0-6 0 2.91 2.91 0 0 0 3 3.1z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              d:
                "M81 10a5.43 5.43 0 0 0-5.6-3.9c-3.5 0-6.4 2.4-6.4 7.6s2.9 7.6 6.4 7.6a5.51 5.51 0 0 0 5.6-3.9l3.8 1c-1.1 4.3-4.4 6.8-9.3 6.8-5.6 0-10.6-4-10.6-11.5s5-11.5 10.6-11.5c4.9 0 8.3 2.5 9.3 6.8z",
              fill: "#323232",
              style: {
                isolation: "isolate",
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
              "g",
              {
                style: {
                  isolation: "isolate",
                },
                fill: "#323232",
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
                d:
                  "M88.3 25V8.8h4v2.6a5.76 5.76 0 0 1 4.8-2.9 6.93 6.93 0 0 1 2 .3l-.7 3.7a3.06 3.06 0 0 0-1.7-.4c-2.3 0-4.3 1.9-4.3 7.1V25zM104.7 8.8l3.8 10.2L112 8.8h4l-8.4 22.8h-3.9l2.8-7.6-5.9-15.2z",
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("path", {
              d:
                "M125.5 25.3a5.28 5.28 0 0 1-3.9-1.7v8h-4V8.8h4v1.7a4.7 4.7 0 0 1 3.9-1.9c4.9 0 7.4 3.4 7.4 8.4s-2.5 8.3-7.4 8.3zm-.6-13.3c-2.1 0-3.7 1.7-3.7 4.9s1.6 4.9 3.7 4.9 3.8-1.7 3.8-4.9-1.7-4.9-3.8-4.9zM145.7 24.7a6.51 6.51 0 0 1-2.6.6c-3.7 0-5.9-2-5.9-6v-7.1h-2.5V8.8h2.5v-4l4-2.5v6.6h4.3v3.4h-4.3v7c0 2 .8 2.6 2.1 2.6a2.82 2.82 0 0 0 1.5-.4zM155.7 8.5c5.2 0 8.2 3.7 8.2 8.4s-3 8.4-8.2 8.4-8.2-3.7-8.2-8.4 3-8.4 8.2-8.4zm0 13.4c2.6 0 4-2.3 4-4.9s-1.5-4.9-4-4.9-4 2.3-4 4.9 1.5 4.9 4 4.9z",
              fill: "#323232",
              style: {
                isolation: "isolate",
              },
              __self: this,
            }),
          );
        };

        Logo.defaultProps = {
          xmlns: "http://www.w3.org/2000/svg",
          width: "217",
          height: "33",
          viewBox: "0 0 217 33",
        };

        var Nav = glamorous__WEBPACK_IMPORTED_MODULE_8___default.a.nav(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[
              "default"
            ],
          )(
            {
              padding: ""
                .concat(
                  Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"])(4),
                  " ",
                )
                .concat(
                  Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"])(4),
                ),
              background:
                _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"].white,
            },
            _design_system__WEBPACK_IMPORTED_MODULE_19__["breakpoints"].ns,
            {
              padding: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
              )(5),
            },
          ),
        );
        var LogoContainer = glamorous__WEBPACK_IMPORTED_MODULE_8___default.a.div(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[
              "default"
            ],
          )(
            {
              maxWidth: 170,
            },
            _design_system__WEBPACK_IMPORTED_MODULE_19__["breakpoints"].ns,
            {
              maxWidth: 170,
            },
          ),
        );
        var AnimationContainer = glamorous__WEBPACK_IMPORTED_MODULE_8___default.a.div(
          {
            display: "inline-block",
            width: 24,
            height: 24,
            "> *": {
              "&:focus": {
                outline: "none",
              },
            },
          },
        );

        var Navigation =
          /*#__PURE__*/
          (function(_React$Component) {
            Object(
              _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ],
            )(Navigation, _React$Component);

            function Navigation(props) {
              var _this;

              Object(
                _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ],
              )(this, Navigation);

              _this = Object(
                _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ],
              )(
                this,
                Object(
                  _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[
                    "default"
                  ],
                )(Navigation).call(this, props),
              );

              Object(
                _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ],
              )(
                Object(
                  _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ],
                )(_this),
                "toggleMenu",
                function() {
                  var _this$state = _this.state,
                    direction = _this$state.direction,
                    menuModalState = _this$state.menuModalState; // Reverse things

                  direction = direction * -1;
                  menuModalState = !menuModalState; // Set things

                  _this.setState({
                    direction: direction,
                    isStopped: false,
                    menuModalState: menuModalState,
                  });
                },
              );

              Object(
                _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ],
              )(
                Object(
                  _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ],
                )(_this),
                "closeMenu",
                function() {
                  document.querySelector("html").removeAttribute("style");

                  _this.setState({
                    direction: -1,
                    isStopped: false,
                    menuModalState: false,
                  });
                },
              );

              Object(
                _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ],
              )(
                Object(
                  _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ],
                )(_this),
                "onOpenModal",
                function() {
                  _this.setState({
                    menuModalState: true,
                  });
                },
              );

              Object(
                _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ],
              )(
                Object(
                  _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ],
                )(_this),
                "onCloseModal",
                function() {
                  _this.toggleMenu();

                  _this.setState({
                    menuModalState: false,
                  });
                },
              );

              _this.state = {
                menuModalState: false,
                currentRoute: "/",
                isStopped: false,
                direction: -1,
              };

              next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeStart = function() {
                nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.start();

                _this.setState({
                  menuModalState: false,
                  direction: -1,
                  isStopped: false,
                });
              };

              next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeComplete = function() {
                nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done();

                _this.setState({
                  currentRoute:
                    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.pathname,
                });
              };

              next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeError = function() {
                return nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done();
              };

              return _this;
            }

            Object(
              _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ],
            )(Navigation, [
              {
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.setState({
                    currentRoute:
                      next_router__WEBPACK_IMPORTED_MODULE_9___default.a
                        .pathname,
                  });
                },
              },
              {
                key: "mapLinks",
                value: function mapLinks() {
                  var _this2 = this;

                  var currentRoute = this.state.currentRoute;
                  return _Links__WEBPACK_IMPORTED_MODULE_21__["default"].map(
                    function(_ref) {
                      var href = _ref.href,
                        title = _ref.title,
                        to = _ref.to,
                        activeClass = _ref.activeClass;

                      var defaultLink = function defaultLink() {
                        var url =
                          arguments.length > 0 && arguments[0] !== undefined
                            ? arguments[0]
                            : href;
                        return react__WEBPACK_IMPORTED_MODULE_11__[
                          "createElement"
                        ](
                          NavItem,
                          {
                            key: title,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 85,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                            _components_Link__WEBPACK_IMPORTED_MODULE_18__[
                              "default"
                            ],
                            {
                              activeClass: activeClass,
                              href: url,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 86,
                              },
                              __self: this,
                            },
                            title,
                          ),
                        );
                      };

                      if (to) {
                        var Span = glamorous__WEBPACK_IMPORTED_MODULE_8___default.a.span(
                          _components_Link__WEBPACK_IMPORTED_MODULE_18__[
                            "linkStyles"
                          ],
                        );

                        if (currentRoute === "/") {
                          return react__WEBPACK_IMPORTED_MODULE_11__[
                            "createElement"
                          ](
                            NavItem,
                            {
                              key: title,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97,
                              },
                              __self: this,
                            },
                            react__WEBPACK_IMPORTED_MODULE_11__[
                              "createElement"
                            ](
                              react_scroll__WEBPACK_IMPORTED_MODULE_15__[
                                "Link"
                              ],
                              {
                                activeClass: "active",
                                to: to,
                                spy: true,
                                hashSpy: true,
                                smooth: true,
                                offset: -50,
                                duration: 550,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 98,
                                },
                                __self: this,
                              },
                              react__WEBPACK_IMPORTED_MODULE_11__[
                                "createElement"
                              ](
                                Span,
                                {
                                  onClick: _this2.closeMenu,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 107,
                                  },
                                  __self: this,
                                },
                                title,
                              ),
                            ),
                          );
                        } else {
                          return defaultLink("/#".concat(to));
                        }
                      }

                      return defaultLink();
                    },
                  );
                },
              },
              {
                key: "render",
                value: function render() {
                  var theme = this.props.theme;
                  var menuModalState = this.state.menuModalState;
                  var donateTheme = theme === "light" ? "ghost" : "default";
                  var defaultOptions = {
                    loop: false,
                    autoplay: false,
                    animationData: _animations_menu_grey_white_json__WEBPACK_IMPORTED_MODULE_16__,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  };
                  return react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                    react__WEBPACK_IMPORTED_MODULE_11__["Fragment"],
                    null,
                    react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                      react_headroom__WEBPACK_IMPORTED_MODULE_12___default.a,
                      {
                        className: "relative z-999 open-".concat(
                          menuModalState,
                        ),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 162,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                        Nav,
                        {
                          className: "flex items-center justify-between",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 163,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                          glamorous__WEBPACK_IMPORTED_MODULE_8__["Div"],
                          {
                            lineHeight: "0",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 164,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                            _components_Link__WEBPACK_IMPORTED_MODULE_18__[
                              "default"
                            ],
                            {
                              href: "/",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 165,
                              },
                              __self: this,
                            },
                            react__WEBPACK_IMPORTED_MODULE_11__[
                              "createElement"
                            ](
                              LogoContainer,
                              {
                                className: "responsive",
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 166,
                                },
                                __self: this,
                              },
                              react__WEBPACK_IMPORTED_MODULE_11__[
                                "createElement"
                              ](Logo, {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 167,
                                },
                                __self: this,
                              }),
                            ),
                          ),
                        ),
                        react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                          glamorous__WEBPACK_IMPORTED_MODULE_8__["Div"],
                          {
                            alignSelf: "end",
                            className: "dn db-l",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 171,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                            glamorous__WEBPACK_IMPORTED_MODULE_8__["Ul"],
                            {
                              role: "navigation",
                              display: "flex",
                              alignItems: "center",
                              listStyle: "none",
                              margin: 0,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 172,
                              },
                              __self: this,
                            },
                            this.mapLinks(),
                            react__WEBPACK_IMPORTED_MODULE_11__[
                              "createElement"
                            ](
                              glamorous__WEBPACK_IMPORTED_MODULE_8__["Li"],
                              {
                                display: "inline-block",
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 180,
                                },
                                __self: this,
                              },
                              react__WEBPACK_IMPORTED_MODULE_11__[
                                "createElement"
                              ](
                                _components_Button__WEBPACK_IMPORTED_MODULE_17__[
                                  "default"
                                ],
                                {
                                  href: "/donate",
                                  theme: donateTheme,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 181,
                                  },
                                  __self: this,
                                },
                                "Donate Crypto",
                              ),
                            ),
                          ),
                        ),
                        react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                          glamorous__WEBPACK_IMPORTED_MODULE_8__["Div"],
                          {
                            lineHeight: "0",
                            className: "flex items-center dn-l",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 187,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                            _components_Button__WEBPACK_IMPORTED_MODULE_17__[
                              "default"
                            ],
                            {
                              className: "mr3 button-donate",
                              href: "/donate",
                              theme: donateTheme,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 188,
                              },
                              __self: this,
                            },
                            "Donate",
                          ),
                          react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                            AnimationContainer,
                            {
                              onClick: this.toggleMenu,
                              className: "pointer responisive center",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 195,
                              },
                              __self: this,
                            },
                            react__WEBPACK_IMPORTED_MODULE_11__[
                              "createElement"
                            ](
                              react_lottie__WEBPACK_IMPORTED_MODULE_13___default.a,
                              {
                                options: defaultOptions,
                                isPaused: this.state.isStopped,
                                direction: this.state.direction,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 199,
                                },
                                __self: this,
                              },
                            ),
                          ),
                        ),
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                      react_responsive_modal__WEBPACK_IMPORTED_MODULE_14___default.a,
                      {
                        open: menuModalState,
                        showCloseIcon: false,
                        onClose: this.onCloseModal,
                        center: true,
                        classNames: {
                          overlay: "green-overlay",
                          modal: "flat-modal",
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 208,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                        glamorous__WEBPACK_IMPORTED_MODULE_8__["Ul"],
                        {
                          role: "navigation",
                          display: "flex",
                          textAlign: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          listStyle: "none",
                          margin: 0,
                          padding: 0,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 218,
                          },
                          __self: this,
                        },
                        this.mapLinks(),
                        react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                          "li",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 229,
                            },
                            __self: this,
                          },
                          react__WEBPACK_IMPORTED_MODULE_11__["createElement"](
                            _components_Button__WEBPACK_IMPORTED_MODULE_17__[
                              "default"
                            ],
                            {
                              className: "mt4 db button-donate",
                              href: "/donate",
                              size: "big",
                              theme: "ghost",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 230,
                              },
                              __self: this,
                            },
                            "Donate",
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]);

            return Navigation;
          })(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

        var NavItem = glamorous__WEBPACK_IMPORTED_MODULE_8___default.a.li(
          Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[
              "default"
            ],
          )(
            {
              listStyle: "none",
              marginLeft: 0,
              paddingLeft: 0,
              marginBottom: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
              )(5),
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
              )(5),
              fontWeight: 500,
              "& a, & span": {
                color:
                  _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"].white,
                "&:hover": {
                  color:
                    _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"]
                      .greyLighter,
                },
              },
              "& .active": {
                color:
                  _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"]
                    .greyLightest,
                borderBottom: "1px solid ".concat(
                  _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"]
                    .greyLightest,
                ),
              },
            },
            _design_system__WEBPACK_IMPORTED_MODULE_19__["breakpoints"].l,
            {
              display: "inline-block",
              marginRight: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
              )(6),
              fontSize: Object(
                _utils_Scale__WEBPACK_IMPORTED_MODULE_20__["Step"],
              )(4),
              fontWeight: 400,
              marginBottom: 0,
              "& a, & span": {
                color:
                  _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"].black,
                "&:hover": {
                  color:
                    _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"].grey,
                },
              },
              "> .active > span": {
                "& a, & span": {
                  color:
                    _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"]
                      .black,
                },
                color:
                  _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"].black,
                borderBottom: "1px solid ".concat(
                  _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"].black,
                ),
              },
              "& .active": {
                color:
                  _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"].black,
                borderBottom: "1px solid ".concat(
                  _design_system__WEBPACK_IMPORTED_MODULE_19__["colors"].black,
                ),
              },
            },
          ),
        );

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

    /***/ "./components/Share.tsx":
      /*!******************************!*\
  !*** ./components/Share.tsx ***!
  \******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
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

        var _jsxFileName =
          "/Users/jklb/dev/givecrypto/website/components/Share.tsx";

        var Medium = function Medium(props) {
          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            "svg",
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )({}, props, {
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "title",
              {
                __self: this,
              },
              "medium",
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("path", {
              d:
                "M18.07 16.5h-6.85l1.36-1.5a1 1 0 0 0 .07-.5V5.07L8.15 16.5 3.26 5.86C3.14 5.59 3 5.24 2.93 5v7.91a.79.79 0 0 0 .21.68l2.08 3H.07l2.09-3a.81.81 0 0 0 .2-.68V4.66c0-.36.05-.4-.11-.6L.65 1.65H5.5L9.7 11l3.65-9.31h4.72l-1.25 1.53c-.19.18-.17.34-.17.63v10.64c0 .27 0 .43.08.5z",
              __self: this,
            }),
          );
        };

        Medium.defaultProps = {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18.15",
          height: "18.15",
          viewBox: "0 0 18.15 18.15",
        };

        var Reddit = function Reddit(props) {
          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            "svg",
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )({}, props, {
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "title",
              {
                __self: this,
              },
              "reddit",
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("path", {
              d:
                "M18.15 8.91A2.05 2.05 0 0 0 14.7 7.4a10.24 10.24 0 0 0-5.18-1.54l1.11-3.38 2.91.68a1.71 1.71 0 1 0 .14-.66l-3.2-.75-.29-.07L8.8 5.86a10.35 10.35 0 0 0-5.38 1.51 2.08 2.08 0 0 0-1.37-.52A2.06 2.06 0 0 0 1 10.66a3.08 3.08 0 0 0 0 .61c0 3 3.63 5.41 8.11 5.41H9c4.47 0 8.11-2.43 8.11-5.41a3.56 3.56 0 0 0 0-.57 2.06 2.06 0 0 0 1.04-1.79zM1.6 11.27a3.39 3.39 0 0 1 .07-.64.68.68 0 0 0 0-.14 4.42 4.42 0 0 1 1.82-2.37.3.3 0 0 0 .13-.12A9.82 9.82 0 0 1 9 6.53a9.8 9.8 0 0 1 5.45 1.52.33.33 0 0 0 .15.11 4.35 4.35 0 0 1 1.74 2.35.32.32 0 0 0 0 .14 3.26 3.26 0 0 1 .06.62C16.47 13.88 13.14 16 9 16s-7.4-2.12-7.4-4.73zm1.24-3.49A5 5 0 0 0 1.17 10a1.37 1.37 0 0 1 1.67-2.22zM16.93 10a5.14 5.14 0 0 0-1.66-2.2 1.44 1.44 0 0 1 .82-.27 1.38 1.38 0 0 1 .84 2.47zm-2.71-6.84a1 1 0 1 1 1 1 1 1 0 0 1-1-1z",
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("path", {
              d:
                "M11.52 13.36a3.37 3.37 0 0 1-2.45.71 3.34 3.34 0 0 1-2.44-.71.34.34 0 0 0-.48.48 4 4 0 0 0 2.92.91 4 4 0 0 0 2.93-.91.34.34 0 0 0-.48-.48zM11.82 9a1.28 1.28 0 0 0-1.27 1.27 1.27 1.27 0 0 0 1.27 1.25 1.24 1.24 0 0 0 1.25-1.25A1.27 1.27 0 0 0 11.82 9zM6.34 9a1.28 1.28 0 0 0-1.27 1.27 1.27 1.27 0 0 0 1.27 1.25 1.25 1.25 0 0 0 1.26-1.24A1.27 1.27 0 0 0 6.34 9z",
              __self: this,
            }),
          );
        };

        Reddit.defaultProps = {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18.15",
          height: "18.15",
          viewBox: "0 0 18.15 18.15",
        };

        var Twitter = function Twitter(props) {
          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            "svg",
            Object(
              _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ],
            )({}, props, {
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "title",
              {
                __self: this,
              },
              "twitter",
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("path", {
              d:
                "M16.24 5.4v.48a10.43 10.43 0 0 1-10.5 10.51 10.36 10.36 0 0 1-5.67-1.51A5.3 5.3 0 0 0 1 15a7.45 7.45 0 0 0 4.53-1.8 3.67 3.67 0 0 1-3.43-2.57 3.82 3.82 0 0 0 .68.07 3.64 3.64 0 0 0 1-.13A3.7 3.7 0 0 1 .8 7a3.69 3.69 0 0 0 1.67.46A3.68 3.68 0 0 1 .82 4.3a3.58 3.58 0 0 1 .5-1.79A10.53 10.53 0 0 0 8.93 6.3a3.49 3.49 0 0 1-.08-.86 3.68 3.68 0 0 1 3.68-3.68 3.82 3.82 0 0 1 2.71 1.16A7.46 7.46 0 0 0 17.57 2a3.62 3.62 0 0 1-1.62 2 6.88 6.88 0 0 0 2.12-.59 7.44 7.44 0 0 1-1.83 1.99z",
              __self: this,
            }),
          );
        };

        Twitter.defaultProps = {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18.15",
          height: "18.15",
          viewBox: "0 0 18.15 18.15",
        };

        var Icons = glamorous__WEBPACK_IMPORTED_MODULE_1___default.a.div({
          "& a": {
            padding: "0 ".concat(
              Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_4__["Step"])(4),
            ),
            "> svg": {
              transition: "all 200ms",
              fill: _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].grey,
            },
            "&:hover, &:active": {
              color: _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].grey,
              "> svg": {
                fill:
                  _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].black,
              },
            },
          },
        });

        var Share = function Share() {
          return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            Icons,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "a",
              {
                href: "http://twitter.com/givecrypto/",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Twitter, {
                className: "test",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                },
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "a",
              {
                href: "http://medium.com/givecrypto/",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Medium, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                },
                __self: this,
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "a",
              {
                href: "https://www.reddit.com/r/givecrypto/",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Reddit, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                },
                __self: this,
              }),
            ),
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Share;

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

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
      /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/promise */ "core-js/library/fn/promise",
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

    /***/ "./node_modules/next/app.js":
      /*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js",
        );

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

    /***/ "./node_modules/next/dist/pages/_app.js":
      /*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js",
        );

        var _promise = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js",
          ),
        );

        var _assign = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js",
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

        var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

        var prop_types_1 = __importDefault(
          __webpack_require__(/*! prop-types */ "prop-types"),
        );

        var utils_1 = __webpack_require__(
          /*! next-server/dist/lib/utils */ "next-server/dist/lib/utils",
        );

        var router_1 = __webpack_require__(/*! next/router */ "next/router");

        var App =
          /*#__PURE__*/
          (function(_react_1$Component) {
            (0, _inherits2.default)(App, _react_1$Component);

            function App() {
              (0, _classCallCheck2.default)(this, App);
              return (0, _possibleConstructorReturn2.default)(
                this,
                (0, _getPrototypeOf2.default)(App).apply(this, arguments),
              );
            }

            (0, _createClass2.default)(
              App,
              [
                {
                  key: "getChildContext",
                  value: function getChildContext() {
                    return {
                      router: router_1.makePublicRouterInstance(
                        this.props.router,
                      ),
                    };
                  }, // Kept here for backwards compatibility.
                  // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.
                },
                {
                  key: "componentDidCatch",
                  value: function componentDidCatch(err) {
                    throw err;
                  },
                },
                {
                  key: "render",
                  value: function render() {
                    var _this$props = this.props,
                      router = _this$props.router,
                      Component = _this$props.Component,
                      pageProps = _this$props.pageProps;
                    var url = createUrl(router);
                    return react_1.default.createElement(
                      Container,
                      null,
                      react_1.default.createElement(
                        Component,
                        (0, _assign.default)({}, pageProps, {
                          url: url,
                        }),
                      ),
                    );
                  },
                },
              ],
              [
                {
                  key: "getInitialProps",
                  value: function(_ref) {
                    var Component = _ref.Component,
                      router = _ref.router,
                      ctx = _ref.ctx;

                    try {
                      return _promise.default
                        .resolve(utils_1.loadGetInitialProps(Component, ctx))
                        .then(function(pageProps) {
                          return {
                            pageProps: pageProps,
                          };
                        });
                    } catch (e) {
                      return _promise.default.reject(e);
                    }
                  },
                },
              ],
            );
            return App;
          })(react_1.Component);

        App.childContextTypes = {
          router: prop_types_1.default.object,
        };
        exports.default = App;

        var Container =
          /*#__PURE__*/
          (function(_react_1$Component2) {
            (0, _inherits2.default)(Container, _react_1$Component2);

            function Container() {
              (0, _classCallCheck2.default)(this, Container);
              return (0, _possibleConstructorReturn2.default)(
                this,
                (0, _getPrototypeOf2.default)(Container).apply(this, arguments),
              );
            }

            (0, _createClass2.default)(Container, [
              {
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.scrollToHash();
                },
              },
              {
                key: "componentDidUpdate",
                value: function componentDidUpdate() {
                  this.scrollToHash();
                },
              },
              {
                key: "scrollToHash",
                value: function scrollToHash() {
                  var hash = window.location.hash;
                  hash = hash ? hash.substring(1) : false;
                  if (!hash) return;
                  var el = document.getElementById(hash);
                  if (!el) return; // If we call scrollIntoView() in here without a setTimeout
                  // it won't scroll properly.

                  setTimeout(function() {
                    return el.scrollIntoView();
                  }, 0);
                },
              },
              {
                key: "render",
                value: function render() {
                  return this.props.children;
                },
              },
            ]);
            return Container;
          })(react_1.Component);

        exports.Container = Container;
        var warnUrl = utils_1.execOnce(function() {
          if (true) {
            console.error(
              "Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated",
            );
          }
        });

        function createUrl(router) {
          // This is to make sure we don't references the router object at call time
          var pathname = router.pathname,
            asPath = router.asPath,
            query = router.query;
          return {
            get query() {
              warnUrl();
              return query;
            },

            get pathname() {
              warnUrl();
              return pathname;
            },

            get asPath() {
              warnUrl();
              return asPath;
            },

            back: function back() {
              warnUrl();
              router.back();
            },
            push: function push(url, as) {
              warnUrl();
              return router.push(url, as);
            },
            pushTo: function pushTo(href, as) {
              warnUrl();
              var pushRoute = as ? href : null;
              var pushUrl = as || href;
              return router.push(pushRoute, pushUrl);
            },
            replace: function replace(url, as) {
              warnUrl();
              return router.replace(url, as);
            },
            replaceTo: function replaceTo(href, as) {
              warnUrl();
              var replaceRoute = as ? href : null;
              var replaceUrl = as || href;
              return router.replace(replaceRoute, replaceUrl);
            },
          };
        }

        exports.createUrl = createUrl;

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

    /***/ "./pages/_app.tsx":
      /*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return GiveCryptoApp;
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
        /* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! next/app */ "./node_modules/next/app.js",
        );
        /* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          next_app__WEBPACK_IMPORTED_MODULE_6__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! react */ "react",
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_7__,
        );
        /* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../components/Navigation/Navigation */ "./components/Navigation/Navigation.tsx",
        );
        /* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../components/Footer */ "./components/Footer.tsx",
        );
        /* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../styles/index.css */ "./styles/index.css",
        );
        /* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          _styles_index_css__WEBPACK_IMPORTED_MODULE_10__,
        );
        /* harmony import */ var _utils_setupFonts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../utils/setupFonts */ "./utils/setupFonts.tsx",
        );

        var _jsxFileName = "/Users/jklb/dev/givecrypto/website/pages/_app.tsx";

        var GiveCryptoApp =
          /*#__PURE__*/
          (function(_App) {
            Object(
              _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ],
            )(GiveCryptoApp, _App);

            function GiveCryptoApp() {
              Object(
                _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ],
              )(this, GiveCryptoApp);

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
                )(GiveCryptoApp).apply(this, arguments),
              );
            }

            Object(
              _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ],
            )(GiveCryptoApp, [
              {
                key: "render",
                value: function render() {
                  var _this$props = this.props,
                    Component = _this$props.Component,
                    pageProps = _this$props.pageProps,
                    router = _this$props.router;
                  var theme = "default";

                  if (router) {
                    theme = router.pathname === "/donate" ? "light" : "default";
                  }

                  return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    next_app__WEBPACK_IMPORTED_MODULE_6__["Container"],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                      _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_8__[
                        "default"
                      ],
                      {
                        theme: theme,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 19,
                        },
                        __self: this,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                      Component,
                      Object(
                        _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                          "default"
                        ],
                      )({}, pageProps, {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 20,
                        },
                        __self: this,
                      }),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                      _components_Footer__WEBPACK_IMPORTED_MODULE_9__[
                        "default"
                      ],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 21,
                        },
                        __self: this,
                      },
                    ),
                  );
                },
              },
            ]);

            return GiveCryptoApp;
          })(next_app__WEBPACK_IMPORTED_MODULE_6___default.a);

        /***/
      },

    /***/ "./styles/index.css":
      /*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
      /*! no static exports found */
      /***/ function(module, exports) {
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

    /***/ "./utils/setupFonts.tsx":
      /*!******************************!*\
  !*** ./utils/setupFonts.tsx ***!
  \******************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! glamor */ "glamor",
        );
        /* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          glamor__WEBPACK_IMPORTED_MODULE_0__,
        );
        // Mono

        glamor__WEBPACK_IMPORTED_MODULE_0__["css"].global("@font-face", {
          fontFamily: "Apercu",
          fontStyle: "normal",
          fontWeight: 200,
          src:
            "url('/static/fonts/Apercu-Mono.woff2') format('woff2'), url('/static/fonts/Apercu-Mono.woff') format('woff')",
        }); // Normal

        glamor__WEBPACK_IMPORTED_MODULE_0__["css"].global("@font-face", {
          fontFamily: "Apercu",
          fontStyle: "normal",
          fontWeight: 400,
          src:
            "url('/static/fonts/Apercu-Light.woff2') format('woff2'), url('/static/fonts/Apercu-Light.woff') format('woff')",
        });
        glamor__WEBPACK_IMPORTED_MODULE_0__["css"].global("@font-face", {
          fontFamily: "Apercu",
          fontStyle: "normal",
          fontWeight: 500,
          src:
            "url('/static/fonts/Apercu-Regular.woff2') format('woff2'), url('/static/fonts/Apercu-Regular.woff') format('woff')",
        });
        glamor__WEBPACK_IMPORTED_MODULE_0__["css"].global("@font-face", {
          fontFamily: "Apercu",
          fontStyle: "normal",
          fontWeight: 700,
          src:
            "url('/static/fonts/Apercu-Medium.woff2') format('woff2'), url('/static/fonts/Apercu-Medium.woff') format('woff')",
        });
        glamor__WEBPACK_IMPORTED_MODULE_0__["css"].global("@font-face", {
          fontFamily: "Apercu",
          fontStyle: "normal",
          fontWeight: 900,
          src:
            "url('/static/fonts/Apercu-Bold.woff2') format('woff2'), url('/static/fonts/Apercu-Bold.woff') format('woff')",
        }); // Italic

        glamor__WEBPACK_IMPORTED_MODULE_0__["css"].global("@font-face", {
          fontFamily: "Apercu",
          fontStyle: "italic",
          fontWeight: 500,
          src:
            "url('/static/fonts/Apercu-Italic.woff2') format('woff2'), url('/static/fonts/Apercu-Italic.woff') format('woff')",
        });
        glamor__WEBPACK_IMPORTED_MODULE_0__["css"].global("@font-face", {
          fontFamily: "Apercu",
          fontStyle: "italic",
          fontWeight: 700,
          src:
            "url('/static/fonts/Apercu-MediumItalic.woff2') format('woff2'), url('/static/fonts/Apercu-MediumItalic.woff') format('woff')",
        });
        glamor__WEBPACK_IMPORTED_MODULE_0__["css"].global("@font-face", {
          fontFamily: "Apercu",
          fontStyle: "italic",
          fontWeight: 900,
          src:
            "url('/static/fonts/Apercu-BoldItalic.woff2') format('woff2'), url('/static/fonts/Apercu-BoldItalic.woff') format('woff')",
        });

        /***/
      },

    /***/ 0:
      /*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! private-next-pages/_app.tsx */ "./pages/_app.tsx",
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

    /***/ "core-js/library/fn/promise":
      /*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/promise");

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

    /***/ "next/router":
      /*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/router");

        /***/
      },

    /***/ nprogress:
      /*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("nprogress");

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

    /***/ "react-headroom":
      /*!*********************************!*\
  !*** external "react-headroom" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-headroom");

        /***/
      },

    /***/ "react-lottie":
      /*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-lottie");

        /***/
      },

    /***/ "react-responsive-modal":
      /*!*****************************************!*\
  !*** external "react-responsive-modal" ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-responsive-modal");

        /***/
      },

    /***/ "react-scroll":
      /*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-scroll");

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
//# sourceMappingURL=_app.js.map
