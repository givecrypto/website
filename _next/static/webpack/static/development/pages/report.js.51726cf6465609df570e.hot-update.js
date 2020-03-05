webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Metrics/Gender/Legend.tsx":
    /*!**********************************************!*\
  !*** ./components/Metrics/Gender/Legend.tsx ***!
  \**********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js",
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js",
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );
      /* harmony import */ var _components_Swatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../components/Swatch */ "./components/Metrics/components/Swatch.tsx",
      );
      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Gender/Legend.tsx";

      var H2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].h2({
        fontSize: "1rem",
        color: _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].coldWater,
      });
      var Pill = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div({
        background: _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
        border: "1px solid ".concat(
          _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].greyLightest,
        ),
        borderRadius: 5,
        padding: "0 1rem",
        margin: 0,
      });

      var Legend = function Legend(_ref) {
        var data = _ref.data;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          "div",
          {
            className: "flex",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
            },
            __self: this,
          },
          data.map(function(_ref2) {
            var label = _ref2.label;
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              Pill,
              {
                className: "flex items-center mr3 br3",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                _components_Swatch__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  color:
                    _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"]
                      .blueDark,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                  },
                  __self: this,
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                H2,
                {
                  className: "pl2",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33,
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
});
//# sourceMappingURL=report.js.51726cf6465609df570e.hot-update.js.map
