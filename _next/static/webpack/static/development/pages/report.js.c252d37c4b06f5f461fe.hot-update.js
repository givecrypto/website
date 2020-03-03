webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Tip.tsx":
    /*!****************************!*\
  !*** ./components/Tip.tsx ***!
  \****************************/
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
        /*! ../design-system */ "./design-system/index.ts",
      );
      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Tip.tsx";

      var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[
        "default"
      ].div({
        borderRadius: 12,
        backgroundColor:
          _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].coldWater,
        padding: "0.25rem 1rem",
        boxShadow: _design_system__WEBPACK_IMPORTED_MODULE_2__["shadows"].card,
      });

      var Tip = function Tip(props) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          Container,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23,
              },
              __self: this,
            },
            props.title,
          ),
          props.metrics.map(function(_ref) {
            var label = _ref.label,
              value = _ref.value;
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                },
                __self: this,
              },
              label,
              ": ",
              value,
            );
          }),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Tip;

      /***/
    },
});
//# sourceMappingURL=report.js.c252d37c4b06f5f461fe.hot-update.js.map
