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
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js",
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

      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Education/BarLine.tsx";

      var Bar = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(
        function(_ref) {
          var color = _ref.color,
            value = _ref.value,
            fade = _ref.fade;
          return Object(
            _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ],
          )(
            {
              height: "100%",
              width: value,
              transition: "color 200ms ease",
              background:
                color ||
                _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"].blue,
              opacity: fade ? 0.5 : 1,
            },
            "transition",
            "opacity 200ms ease",
          );
        },
      );
      var BarContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[
        "default"
      ].div({
        height: 10,
        overflow: "hidden",
        borderRadius: 12,
        marginBottom: "3rem",
        background:
          _design_system__WEBPACK_IMPORTED_MODULE_4__["colors"].greyLightest,
      });

      var BarLine = function BarLine(_ref3) {
        var items = _ref3.items,
          highlightId = _ref3.highlightId,
          onHighlight = _ref3.onHighlight;
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
          BarContainer,
          {
            className: "flex",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38,
            },
            __self: this,
          },
          items.map(function(item) {
            return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
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
                    lineNumber: 40,
                  },
                  __self: this,
                },
              ),
            );
          }),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = BarLine;

      /***/
    },
});
//# sourceMappingURL=report.js.d9c3ba8ed4b1a8c236c5.hot-update.js.map
