webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Metrics/Education/index.tsx":
    /*!************************************************!*\
  !*** ./components/Metrics/Education/index.tsx ***!
  \************************************************/
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
      /* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../components/Heading */ "./components/Metrics/components/Heading.tsx",
      );
      /* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../components/List */ "./components/Metrics/components/List.tsx",
      );
      /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! chroma-js */ "./node_modules/chroma-js/chroma.js",
      );
      /* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        chroma_js__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );
      /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
      );
      /* harmony import */ var _BarLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./BarLine */ "./components/Metrics/Education/BarLine.tsx",
      );

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Education/index.tsx";

      var Education = function Education() {
        var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](
            null,
          ),
          _React$useState2 = Object(
            _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ],
          )(_React$useState, 2),
          highlightId = _React$useState2[0],
          setHighlightId = _React$useState2[1];

        var dataWithColors = function dataWithColors(data) {
          return react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](
            function() {
              // Get the color for each item
              var getColor = function getColor(index) {
                var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_5___default.a
                  .scale([
                    _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"]
                      .coldWater,
                    _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"].blue,
                    _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"].green,
                    _design_system__WEBPACK_IMPORTED_MODULE_6__["colors"]
                      .yellow,
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
            },
            [highlightId],
          );
        };

        var listItems = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](
          function() {
            return dataWithColors(
              _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_7__[
                "education"
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
                  value: "".concat(item.angle, "%"),
                };
              });
          },
          [],
        );

        var handleHighlightChange = function handleHighlightChange(label) {
          setHighlightId(label);
        };

        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
          "div",
          {
            className: "w-100 pl3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            _components_Heading__WEBPACK_IMPORTED_MODULE_3__["default"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58,
              },
              __self: this,
            },
            "Education",
          ),
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            _BarLine__WEBPACK_IMPORTED_MODULE_8__["default"],
            {
              items: listItems,
              highlightId: highlightId,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59,
              },
              __self: this,
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            _components_List__WEBPACK_IMPORTED_MODULE_4__["default"],
            {
              items: listItems,
              highlightId: highlightId,
              onHighlight: handleHighlightChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60,
              },
              __self: this,
            },
          ),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Education;

      /***/
    },
});
//# sourceMappingURL=report.js.0a437c9cb149e33710c9.hot-update.js.map
