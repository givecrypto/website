webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Metrics/Income/index.tsx":
    /*!*********************************************!*\
  !*** ./components/Metrics/Income/index.tsx ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js",
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js",
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js",
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! chroma-js */ "./node_modules/chroma-js/chroma.js",
      );
      /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        chroma_js__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react-vis */ "./node_modules/react-vis/es/index.js",
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );
      /* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../../components/List */ "./components/List.tsx",
      );
      /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! lodash */ "./node_modules/lodash/lodash.js",
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        lodash__WEBPACK_IMPORTED_MODULE_8__,
      );
      /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js",
      );

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Income/index.tsx";

      var Heading = _emotion_styled__WEBPACK_IMPORTED_MODULE_9__["default"].h2({
        fontSize: "1rem",
        color: _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"].coldWater,
      });

      var Income = function Income() {
        var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](
            null,
          ),
          _React$useState2 = Object(
            _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ],
          )(_React$useState, 2),
          highlightId = _React$useState2[0],
          setHighlightId = _React$useState2[1]; // Hold on to any timers

        var timers = [];

        var dataWithColors = function dataWithColors(data) {
          return react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](
            function() {
              // Get the color for each item
              var getColor = function getColor(index) {
                var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_3___default.a
                  .scale([
                    _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"].green,
                    _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"]
                      .greenDark,
                  ])
                  .mode("rgb")
                  .colors(data.length);

                if (
                  Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isNil"])(
                    highlightId,
                  )
                ) {
                  return colorScale[index];
                } else {
                  return index ===
                    data.findIndex(function(a) {
                      return a.label === highlightId;
                    })
                    ? chroma_js__WEBPACK_IMPORTED_MODULE_3___default.a
                        .mix(
                          colorScale[index],
                          _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"]
                            .coldWater,
                        )
                        .css()
                    : colorScale[index];
                }
              }; // Return the item and inject the correct color

              return data.slice().map(function(item, index) {
                return Object(
                  _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ],
                )({}, item, {
                  color: getColor(index),
                });
              });
            },
            [highlightId],
          );
        };

        var listItems = dataWithColors(
          _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
            "income"
          ],
        )
          .slice()
          .map(function(item, i) {
            return {
              id: "".concat(i),
              color: item.color,
              category: item.label,
              label: "".concat(
                Math.floor(
                  (item.angle *
                    _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                      "totalParticipants"
                    ]) /
                    100,
                ),
                " Recipients",
              ),
              value: item.subLabel,
            };
          });

        var handleHighlightChange = function handleHighlightChange(label) {
          timers.map(clearTimeout);
          timers.push(
            setTimeout(function() {
              setHighlightId(label);
            }, 10),
          );
        };

        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
          "div",
          {
            className: "pv3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            Heading,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70,
              },
              __self: this,
            },
            "Income",
          ),
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            "div",
            {
              className: "flex flex-wrap items-center mb4",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "div",
              {
                className: "w-40 pv4",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                "div",
                {
                  className: "flex items-center justify-center",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                  react_vis__WEBPACK_IMPORTED_MODULE_4__["RadialChart"],
                  {
                    colorType: "literal",
                    data: dataWithColors(
                      _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                        "income"
                      ],
                    ),
                    width: 300,
                    height: 300,
                    innerRadius: 85,
                    radius: 120,
                    animation: true,
                    style: {
                      boxShadow:
                        _design_system__WEBPACK_IMPORTED_MODULE_5__["shadows"]
                          .card,
                    },
                    onValueMouseOver: function onValueMouseOver(v) {
                      handleHighlightChange(
                        _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                          "income"
                        ].find(function(item) {
                          return item.label === v.label;
                        }).label,
                      );
                    },
                    onSeriesMouseOut: function onSeriesMouseOut() {
                      handleHighlightChange();
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                    },
                    __self: this,
                  },
                ),
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "div",
              {
                className: "w-60",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                _components_List__WEBPACK_IMPORTED_MODULE_6__["default"],
                {
                  items: listItems,
                  highlightId: highlightId,
                  onHighlight: handleHighlightChange,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97,
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
//# sourceMappingURL=report.js.6aa201e317e9b9450e4a.hot-update.js.map