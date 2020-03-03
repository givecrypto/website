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

      var Swatch = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(
        function(props) {
          return {
            width: 15,
            height: 15,
            margin: 0,
            padding: 0,
            borderRadius: 4,
            backgroundColor: props.color,
          };
        },
      );
      var ListItemContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[
        "default"
      ].div({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      });
      var Left = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& p": {
          marginLeft: 10,
        },
      });
      var Right = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& p": {
          marginLeft: 10,
        },
      });

      var ListItem = function ListItem(_ref) {
        var item = _ref.item;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          ListItemContainer,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Swatch, {
              theme: null,
              color: item.color,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                },
                __self: this,
              },
              item.category,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            Right,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                },
                __self: this,
              },
              item.label,
            ),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                },
                __self: this,
              },
              item.value,
            ),
          ),
        );
      };

      var ListContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[
        "default"
      ].section({
        display: "flex",
        flexDirection: "column",
      });

      var List = function List(_ref2) {
        var items = _ref2.items;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          ListContainer,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72,
            },
            __self: this,
          },
          items.map(function(item) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              ListItem,
              {
                item: item,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74,
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
//# sourceMappingURL=report.js.e236215cefed4db45aef.hot-update.js.map
