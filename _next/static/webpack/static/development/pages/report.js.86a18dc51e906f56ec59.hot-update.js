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
      /* harmony import */ var _utils_useMeasure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../../utils/useMeasure */ "./utils/useMeasure.ts",
      );
      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Age/index.tsx";

      var Age = function Age(props) {
        // Let there be props
        console.log("props", props);
        var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();

        var _useMeasure = Object(
            _utils_useMeasure__WEBPACK_IMPORTED_MODULE_3__["default"],
          )(ref),
          width = _useMeasure.width;

        var data = [
          {
            x: 110,
            y: "18-24",
          },
          {
            x: 184,
            y: "25-34",
          },
          {
            x: 233,
            y: "35-44",
          },
          {
            x: 212,
            y: "45-54",
          },
          {
            x: 146,
            y: "55-64",
          },
          {
            x: 61,
            y: "65-74",
          },
          {
            x: 38,
            y: "75+",
          },
        ].reverse();
        console.log(width);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          "div",
          {
            ref: ref,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54,
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
              xDistance: 100, // xDomain={[0, 20]}
              // yDomain={[0, 120]}
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalGridLines"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                },
                __self: this,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              react_vis__WEBPACK_IMPORTED_MODULE_1__["XAxis"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                },
                __self: this,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              react_vis__WEBPACK_IMPORTED_MODULE_1__["YAxis"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                },
                __self: this,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              react_vis__WEBPACK_IMPORTED_MODULE_1__["HorizontalBarSeries"],
              {
                animation: true,
                barWidth: 0.6,
                data: data,
                style: {},
                color:
                  _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].yellow,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66,
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
//# sourceMappingURL=report.js.86a18dc51e906f56ec59.hot-update.js.map
