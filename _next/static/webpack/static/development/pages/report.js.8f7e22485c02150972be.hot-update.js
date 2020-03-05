webpackHotUpdate("static/development/pages/report.js", {
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
        /*! ../../../components/Heading */ "./components/Heading.tsx",
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
          react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function() {
            // Get the color for each item
            var getColor = function getColor(index) {
              var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_4___default.a
                .scale([
                  _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"].blue,
                  _design_system__WEBPACK_IMPORTED_MODULE_5__["colors"]
                    .blueDark,
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
        console.log(data);
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            _components_Heading__WEBPACK_IMPORTED_MODULE_8__["default"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43,
              },
              __self: this,
            },
            "Gender",
          ),
          react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            react_vis__WEBPACK_IMPORTED_MODULE_3__["RadialChart"],
            {
              labelsRadiusMultiplier: 0.85,
              innerRadius: 60,
              radius: 120,
              data: data,
              width: 300,
              height: 300,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44,
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
                    lineNumber: 53,
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
                      lineNumber: 54,
                    },
                    __self: this,
                  },
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
                lineNumber: 58,
              },
              __self: this,
            },
          ),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Gender;

      /***/
    },
});
//# sourceMappingURL=report.js.8f7e22485c02150972be.hot-update.js.map
