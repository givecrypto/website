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
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! lodash */ "./node_modules/lodash/lodash.js",
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        lodash__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
      );
      /* harmony import */ var _components_Tip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../../components/Tip */ "./components/Tip.tsx",
      );

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Income/index.tsx";

      var Income = function Income() {
        var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](
            {},
          ),
          _React$useState2 = Object(
            _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          )(_React$useState, 2),
          value = _React$useState2[0],
          setValue = _React$useState2[1];

        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17,
              },
              __self: this,
            },
            "Income Metrics",
          ),
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            react_vis__WEBPACK_IMPORTED_MODULE_2__["RadialChart"],
            {
              color:
                _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].green,
              opacityMultiplier: 0.7,
              animation: true,
              data:
                _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_5__[
                  "income"
                ],
              width: 300,
              height: 300,
              innerRadius: 90,
              radius: 120,
              showLabels: true,
              labelsStyle: {
                fill:
                  _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"]
                    .coldWater,
              },
              onValueMouseOver: function onValueMouseOver(v) {
                setValue({
                  data: v,
                  title: _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_5__[
                    "income"
                  ].find(function(item) {
                    return item.label === v.label;
                  }).label,
                  metrics: [
                    {
                      label: "Total",
                      value: Math.floor(
                        _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_5__[
                          "totalParticipants"
                        ] *
                          (_content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_5__[
                            "income"
                          ].find(function(item) {
                            return item.label === v.label;
                          }).angle *
                            0.01),
                      ),
                    },
                    {
                      label: "Percentage",
                      value: "".concat(
                        _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_5__[
                          "income"
                        ].find(function(item) {
                          return item.label === v.label;
                        }).angle,
                        "%",
                      ),
                    },
                  ],
                });
              },
              onSeriesMouseOut: function onSeriesMouseOut(v) {
                return setValue({});
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18,
              },
              __self: this,
            },
            !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(value) &&
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                react_vis__WEBPACK_IMPORTED_MODULE_2__["Hint"],
                {
                  value: value.data,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                  _components_Tip__WEBPACK_IMPORTED_MODULE_6__["default"],
                  {
                    title: value.title,
                    metrics: value.metrics,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                    },
                    __self: this,
                  },
                ),
              ),
          ),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Income;

      /***/
    },
});
//# sourceMappingURL=report.js.bc2f01f84e60601392d7.hot-update.js.map
