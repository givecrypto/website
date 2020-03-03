webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Metrics/Income/index.tsx":
    /*!*********************************************!*\
  !*** ./components/Metrics/Income/index.tsx ***!
  \*********************************************/
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
      /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react-vis */ "./node_modules/react-vis/es/index.js",
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );
      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Income/index.tsx";

      var Income = function Income() {
        var data = [
          {
            label: "Male",
            angle: 928,
          },
          {
            label: "Female",
            angle: 320,
          },
          {
            label: "Other",
            angle: 20,
          },
        ];
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16,
              },
              __self: this,
            },
            "Income Metrics",
          ),
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            react_vis__WEBPACK_IMPORTED_MODULE_1__["RadialChart"],
            {
              colorRange: [
                _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].black,
                _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].coldWater,
                _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].green,
              ],
              animation: true,
              data: data,
              width: 300,
              height: 300,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17,
              },
              __self: this,
            },
          ),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Income;

      /***/
    },
});
//# sourceMappingURL=report.js.9f5c3ddf897eb5269b73.hot-update.js.map
