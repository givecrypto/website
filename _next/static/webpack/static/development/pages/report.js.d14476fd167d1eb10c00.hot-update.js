webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Metrics/Income/index.tsx":
    /*!*********************************************!*\
  !*** ./components/Metrics/Income/index.tsx ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js",
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js",
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! react-vis */ "./node_modules/react-vis/es/index.js",
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Income/index.tsx";

      var Income = function Income() {
        var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0),
          _React$useState2 = Object(
            _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          )(_React$useState, 2),
          value = _React$useState2[0],
          setValue = _React$useState2[1];

        var data = [
          {
            label: "Female",
            angle: 62.5,
          },
          {
            label: "Male",
            angle: 37.4,
          },
          {
            label: "Other",
            angle: 0.1,
          },
        ];
        console.log(value);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19,
              },
              __self: this,
            },
            "Income Metrics",
          ),
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            react_vis__WEBPACK_IMPORTED_MODULE_2__["RadialChart"],
            {
              colorRange: [
                _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].greyDark,
                _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].blueDark,
                _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].blue,
              ],
              animation: true,
              data: data,
              width: 300,
              height: 300,
              showLabels: true,
              onValueMouseOver: function onValueMouseOver(v) {
                return setValue(v);
              },
              onSeriesMouseOut: function onSeriesMouseOut(v) {
                return setValue(0);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20,
              },
              __self: this,
            },
            value &&
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                react_vis__WEBPACK_IMPORTED_MODULE_2__["Hint"],
                {
                  value: value,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                  },
                  __self: this,
                },
              ),
          ),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Income;

      /***/
    },
});
//# sourceMappingURL=report.js.d14476fd167d1eb10c00.hot-update.js.map
