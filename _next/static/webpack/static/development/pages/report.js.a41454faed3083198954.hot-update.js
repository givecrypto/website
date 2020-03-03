webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Metrics/Age/index.tsx":
    /*!******************************************!*\
  !*** ./components/Metrics/Age/index.tsx ***!
  \******************************************/
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
                  _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].yellow,
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
});
//# sourceMappingURL=report.js.a41454faed3083198954.hot-update.js.map
