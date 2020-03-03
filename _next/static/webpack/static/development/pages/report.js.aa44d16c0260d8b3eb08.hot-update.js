webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/List.tsx":
    /*!*****************************!*\
  !*** ./components/List.tsx ***!
  \*****************************/
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
      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/List.tsx";

      var ListItem = function ListItem() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          "p",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16,
            },
            __self: this,
          },
          "list item",
        );
      };

      var ListContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[
        "default"
      ].div({
        display: "flex",
        flexDirection: "row",
      });

      var List = function List(_ref) {
        var items = _ref.items;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          ListContainer,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26,
            },
            __self: this,
          },
          items.map(function() {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              ListItem,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28,
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
});
//# sourceMappingURL=report.js.aa44d16c0260d8b3eb08.hot-update.js.map
