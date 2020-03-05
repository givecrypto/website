webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Metrics/Education/BarLine.tsx":
    /*!**************************************************!*\
  !*** ./components/Metrics/Education/BarLine.tsx ***!
  \**************************************************/
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
      /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js",
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../../design-system */ "./design-system/index.ts",
      );
      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Education/BarLine.tsx";

      var Bar = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(
        function(_ref) {
          var color = _ref.color,
            value = _ref.value,
            fade = _ref.fade;
          return {
            height: "100%",
            width: value,
            transition: "color 200ms ease",
            background:
              color ||
              _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].blue,
            opacity: fade ? 0.5 : 1,
          };
        },
      );
      var BarContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[
        "default"
      ].div({
        height: 10,
        overflow: "hidden",
        borderRadius: 12,
        marginBottom: "3rem",
        background:
          _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].greyLightest,
      });

      var BarLine = function BarLine(_ref2) {
        var items = _ref2.items,
          highlightId = _ref2.highlightId,
          onHighlight = _ref2.onHighlight;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          BarContainer,
          {
            className: "flex",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41,
            },
            __self: this,
          },
          items.map(function(item) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Bar, {
              key: "bar-".concat(item.id),
              fade: highlightId && highlightId !== item.label,
              onMouseOver: function onMouseOver() {
                return onHighlight && onHighlight(item.category);
              },
              onMouseOut: function onMouseOut() {
                return onHighlight && onHighlight();
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43,
              },
              __self: this,
            });
          }),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = BarLine;

      /***/
    },
});
//# sourceMappingURL=report.js.93ab85e992b0ca7d52f3.hot-update.js.map
