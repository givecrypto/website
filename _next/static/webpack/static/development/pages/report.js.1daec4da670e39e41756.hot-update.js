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
      /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! chroma-js */ "./node_modules/chroma-js/chroma.js",
      );
      /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        chroma_js__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react-vis */ "./node_modules/react-vis/es/index.js",
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! lodash */ "./node_modules/lodash/lodash.js",
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        lodash__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../../components/List */ "./components/List.tsx",
      );
      /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
      );
      /* harmony import */ var _components_Tip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../../components/Tip */ "./components/Tip.tsx",
      );

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Income/index.tsx";

      // Brighten/darken every other item

      var colorRange = _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
        "income"
      ].map(function(_, i) {
        return chroma_js__WEBPACK_IMPORTED_MODULE_2___default()(
          _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"].green,
        )
          [i % 2 == 0 ? "darken" : "brighten"](0.3 * i)
          .css();
      });

      var listItems = function listItems(activeLabel) {
        return _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
          "income"
        ].map(function(item, i) {
          return {
            id: "".concat(i),
            highlight: activeLabel === item.label,
            color: colorRange[i],
            category: item.label,
            label: "Another ".concat(item.subLabel),
            value: item.subLabel,
          };
        });
      };

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
              lineNumber: 34,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35,
              },
              __self: this,
            },
            "Income Metrics",
          ),
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            "div",
            {
              className: "flex flex-wrap",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              "div",
              {
                className: "w-50",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                react_vis__WEBPACK_IMPORTED_MODULE_3__["RadialChart"],
                {
                  colorRange: colorRange,
                  data:
                    _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                      "income"
                    ],
                  width: 300,
                  height: 300,
                  innerRadius: 90,
                  radius: 120,
                  showLabels: true,
                  labelsStyle: {
                    fill:
                      _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"]
                        .coldWater,
                  },
                  onValueMouseOver: function onValueMouseOver(v) {
                    setValue({
                      data: v,
                      title: _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                        "income"
                      ].find(function(item) {
                        return item.label === v.label;
                      }).label,
                      metrics: [
                        {
                          label: "Total",
                          value: Math.floor(
                            _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                              "totalParticipants"
                            ] *
                              (_content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
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
                            _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
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
                    lineNumber: 38,
                  },
                  __self: this,
                },
                !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(
                  value,
                ) &&
                  react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    react_vis__WEBPACK_IMPORTED_MODULE_3__["Hint"],
                    {
                      value: value.data,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                      _components_Tip__WEBPACK_IMPORTED_MODULE_8__["default"],
                      {
                        title: value.title,
                        metrics: value.metrics,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 75,
                        },
                        __self: this,
                      },
                    ),
                  ),
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              "div",
              {
                className: "w-50",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                _components_List__WEBPACK_IMPORTED_MODULE_6__["default"],
                {
                  items: listItems(value.title),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81,
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
//# sourceMappingURL=report.js.1daec4da670e39e41756.hot-update.js.map
