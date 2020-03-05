webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/List.tsx": false,

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
        /*! ../../../components/Heading */ "./components/Heading.tsx",
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
                  className: "flex items-center justify-center",
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

  /***/ "./components/Metrics/components/List.tsx":
    /*!************************************************!*\
  !*** ./components/Metrics/components/List.tsx ***!
  \************************************************/
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
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js",
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js",
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );
      /* harmony import */ var _Swatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./Swatch */ "./components/Metrics/components/Swatch.tsx",
      );

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/components/List.tsx";

      var ListItemContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[
        "default"
      ].div(function(_ref) {
        var fade = _ref.fade;
        return {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1.2rem",
          transition: "all 200ms ease",
          borderBottom: "1px solid ".concat(
            _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"].greyLightest,
          ),
          "&:last-child": {
            borderBottom: "none",
          },
          "> *": {
            transition: "all 200ms ease",
            opacity: fade ? 0.4 : 1,
          },
        };
      });
      var Left = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      });
      var Right = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: "40%",
        "&:last-child": {
          textAlign: "right",
        },
      });
      var Category = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].h3(
        {
          fontWeight: 500,
          fontSize: "0.9rem",
          color: _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"].greyDark,
          marginLeft: 10,
        },
      );
      var Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].h4({
        fontWeight: "normal",
        fontSize: "0.9rem",
        color: _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"].grey,
        marginLeft: 30,
        padding: 0,
        minWidth: 45,
      });

      var ListItem = function ListItem(_ref2) {
        var item = _ref2.item,
          highlightId = _ref2.highlightId,
          rest = Object(
            _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ],
          )(_ref2, ["item", "highlightId"]);

        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
          ListItemContainer,
          Object(
            _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          )(
            {
              fade: highlightId && highlightId !== item.category,
            },
            rest,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70,
              },
              __self: this,
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              _Swatch__WEBPACK_IMPORTED_MODULE_5__["default"],
              {
                color: item.color,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                },
                __self: this,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              Category,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                },
                __self: this,
              },
              item.category,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            Right,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              Label,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                },
                __self: this,
              },
              item.label,
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              Label,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                },
                __self: this,
              },
              item.value,
            ),
          ),
        );
      };

      var ListContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[
        "default"
      ].section({
        display: "flex",
        flexDirection: "column",
        border: "1px solid ".concat(
          _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"].greyLightest,
        ),
        borderRadius: 8,
        boxShadow: _design_system__WEBPACK_IMPORTED_MODULE_4__["shadows"].card,
      });

      var List = function List(_ref3) {
        var items = _ref3.items,
          highlightId = _ref3.highlightId,
          onHighlight = _ref3.onHighlight;
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
          ListContainer,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101,
            },
            __self: this,
          },
          items.map(function(item) {
            console.log(item);
            return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
              ListItem,
              {
                item: item,
                highlightId: highlightId,
                onMouseOver: function onMouseOver() {
                  return onHighlight(item.category);
                },
                onMouseOut: function onMouseOut() {
                  return onHighlight();
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                },
                __self: this,
              },
            );
          }),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = List;

      /***/
    },

  /***/ "./components/Metrics/components/Swatch.tsx":
    /*!**************************************************!*\
  !*** ./components/Metrics/components/Swatch.tsx ***!
  \**************************************************/
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

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/components/Swatch.tsx";

      var Div = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(
        function(_ref) {
          var color = _ref.color;
          return {
            width: 15,
            height: 15,
            margin: 0,
            padding: 0,
            borderRadius: 4,
            backgroundColor: color,
            transition: "background 200ms ease",
          };
        },
      );

      var Swatch = function Swatch(props) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
          Div,
          Object(
            _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ],
          )({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19,
            },
            __self: this,
          }),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Swatch;

      /***/
    },
});
//# sourceMappingURL=report.js.f6a47d35f2ef14579c09.hot-update.js.map
