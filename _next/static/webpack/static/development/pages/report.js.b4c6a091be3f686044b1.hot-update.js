webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Heading.tsx": false,

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
      /* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../components/Heading */ "./components/Metrics/components/Heading.tsx",
      );
      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Age/index.tsx";

      var Age = function Age() {
        var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();

        var _useMeasure = Object(
            _utils_useMeasure__WEBPACK_IMPORTED_MODULE_4__["default"],
          )(ref),
          width = _useMeasure.width;

        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          "div",
          {
            ref: ref,
            className: "pv3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            _components_Heading__WEBPACK_IMPORTED_MODULE_5__["default"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22,
              },
              __self: this,
            },
            "Age",
          ),
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            react_vis__WEBPACK_IMPORTED_MODULE_1__["XYPlot"],
            {
              yType: "ordinal",
              height: 275,
              width: width,
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

  /***/ "./components/Metrics/Education/index.tsx":
    /*!************************************************!*\
  !*** ./components/Metrics/Education/index.tsx ***!
  \************************************************/
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
      /* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../components/Heading */ "./components/Metrics/components/Heading.tsx",
      );
      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Education/index.tsx";

      var Education = function Education() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            _components_Heading__WEBPACK_IMPORTED_MODULE_1__["default"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
              },
              __self: this,
            },
            "Education",
          ),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Education;

      /***/
    },

  /***/ "./components/Metrics/Gender/index.tsx":
    /*!*********************************************!*\
  !*** ./components/Metrics/Gender/index.tsx ***!
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
      /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react-vis */ "./node_modules/react-vis/es/index.js",
      );
      /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! chroma-js */ "./node_modules/chroma-js/chroma.js",
      );
      /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        chroma_js__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! lodash */ "./node_modules/lodash/lodash.js",
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        lodash__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var _components_Tip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../../components/Tip */ "./components/Tip.tsx",
      );
      /* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../components/Heading */ "./components/Metrics/components/Heading.tsx",
      );
      /* harmony import */ var _Legend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ./Legend */ "./components/Metrics/Gender/Legend.tsx",
      );
      /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
      );

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Gender/index.tsx";

      var Gender = function Gender() {
        var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](
            {},
          ),
          _React$useState2 = Object(
            _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ],
          )(_React$useState, 2),
          value = _React$useState2[0],
          setValue = _React$useState2[1];

        var dataWithColors = function dataWithColors(data) {
          return react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function() {
            // Get the color for each item
            var getColor = function getColor(index) {
              var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_4___default.a
                .scale([
                  _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"]
                    .coldWater,
                  _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"].green,
                  _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"].yellow,
                ])
                .mode("rgb")
                .colors(data.length);
              return colorScale[index];
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
          }, []);
        };

        var data = dataWithColors(
          _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__[
            "gender"
          ],
        );
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            _components_Heading__WEBPACK_IMPORTED_MODULE_8__["default"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41,
              },
              __self: this,
            },
            "Gender",
          ),
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            "div",
            {
              className: "flex justify-center mt4 mb5",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              react_vis__WEBPACK_IMPORTED_MODULE_3__["RadialChart"],
              {
                colorType: "literal",
                innerRadius: 85,
                radius: 120,
                data: data,
                width: 300,
                height: 300,
                onValueMouseOver: function onValueMouseOver(v) {
                  setValue({
                    data: v,
                    title: _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__[
                      "gender"
                    ].find(function(item) {
                      return item.label === v.label;
                    }).label,
                    metrics: [
                      {
                        label: "Total",
                        value: Math.floor(
                          _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__[
                            "totalParticipants"
                          ] *
                            (_content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__[
                              "gender"
                            ].find(function(item) {
                              return item.label === v.label;
                            }).angle *
                              0.01),
                        ),
                      },
                      {
                        label: "Percentage",
                        value: "".concat(
                          _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_10__[
                            "gender"
                          ].find(function(item) {
                            return item.label === v.label;
                          }).angle,
                          "%",
                        ),
                      },
                    ],
                  });
                },
                onSeriesMouseOut: function onSeriesMouseOut() {
                  return setValue({});
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                },
                __self: this,
              },
              !Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(value) &&
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                  react_vis__WEBPACK_IMPORTED_MODULE_3__["Hint"],
                  {
                    value: value.data,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                    },
                    __self: this,
                  },
                  react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                    _components_Tip__WEBPACK_IMPORTED_MODULE_7__["default"],
                    {
                      title: value.title,
                      metrics: value.metrics,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                      },
                      __self: this,
                    },
                  ),
                ),
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            _Legend__WEBPACK_IMPORTED_MODULE_9__["default"],
            {
              highlight: value.title,
              data: data,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81,
              },
              __self: this,
            },
          ),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Gender;

      /***/
    },

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
        /*! ../components/List */ "./components/Metrics/components/List.tsx",
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
      /* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../components/Heading */ "./components/Metrics/components/Heading.tsx",
      );

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Income/index.tsx";

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
              lineNumber: 64,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            _components_Heading__WEBPACK_IMPORTED_MODULE_9__["default"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65,
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
                lineNumber: 66,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              "div",
              {
                className: "w-40 pv4",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                "div",
                {
                  className: "flex items-center justify-between",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68,
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
                      lineNumber: 69,
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
                  lineNumber: 91,
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
                    lineNumber: 92,
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

  /***/ "./components/Metrics/components/Heading.tsx":
    /*!***************************************************!*\
  !*** ./components/Metrics/components/Heading.tsx ***!
  \***************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js",
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js",
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js",
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/components/Heading.tsx";

      var H2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h2({
        fontSize: "1rem",
        color: _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].coldWater,
      });

      var Heading = function Heading(props) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
          H2,
          Object(
            _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          )({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13,
            },
            __self: this,
          }),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Heading;

      /***/
    },
});
//# sourceMappingURL=report.js.b4c6a091be3f686044b1.hot-update.js.map
