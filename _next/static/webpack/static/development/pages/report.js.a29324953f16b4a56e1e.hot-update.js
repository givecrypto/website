webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Metrics/Education/BarLine.tsx":
    /*!**************************************************!*\
  !*** ./components/Metrics/Education/BarLine.tsx ***!
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
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );
      /* harmony import */ var _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../../content/ambassadors-report/metrics */ "./content/ambassadors-report/metrics.ts",
      );

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Education/BarLine.tsx";

      var Bar = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(
        function(_ref) {
          var color = _ref.color,
            value = _ref.value,
            fade = _ref.fade;
          return {
            height: "100%",
            width: value,
            background:
              color ||
              _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].blue,
            opacity: fade ? 0.5 : 1,
            transition: "opacity 200ms ease",
          };
        },
      );
      var BarContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[
        "default"
      ].div({
        height: 10,
        overflow: "hidden",
        borderRadius: 12,
        marginBottom: "3rem",
        background:
          _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].greyLightest,
      });
      var Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h2({
        fontSize: "3rem",
        color: _design_system__WEBPACK_IMPORTED_MODULE_3__["colors"].coldWater,
      });
      var Tiny = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].span({
        fontSize: "0.5rem",
      });

      var BarLine = function BarLine(_ref2) {
        var items = _ref2.items,
          highlightId = _ref2.highlightId,
          onHighlight = _ref2.onHighlight;
        var item = items.find(function(i) {
          return i.category === highlightId;
        });
        var title = highlightId
          ? "of Recipients have completed ".concat(highlightId)
          : "Recipients";
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
          react__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
          null,
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            Title,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52,
              },
              __self: this,
            },
            item
              ? item.value
              : _content_ambassadors_report_metrics__WEBPACK_IMPORTED_MODULE_4__[
                  "totalParticipants"
                ],
            " ",
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              Tiny,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                },
                __self: this,
              },
              title,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            BarContainer,
            {
              className: "flex",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55,
              },
              __self: this,
            },
            items.map(function(item) {
              return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                Bar,
                Object(
                  _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ],
                )(
                  {
                    key: "bar-".concat(item.id),
                    fade: highlightId && highlightId !== item.category,
                    onMouseOver: function onMouseOver() {
                      return onHighlight && onHighlight(item.category);
                    },
                    onMouseOut: function onMouseOut() {
                      return onHighlight && onHighlight();
                    },
                  },
                  item,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                    },
                    __self: this,
                  },
                ),
              );
            }),
          ),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = BarLine;

      /***/
    },
});
//# sourceMappingURL=report.js.a29324953f16b4a56e1e.hot-update.js.map
