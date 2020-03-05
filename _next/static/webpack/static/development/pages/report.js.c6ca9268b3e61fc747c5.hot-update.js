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
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../design-system */ "./design-system/index.ts",
      );
      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/List.tsx";

      var Swatch = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(
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
      var ListItemContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[
        "default"
      ].div(function(_ref2) {
        var fade = _ref2.fade;
        return {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid ".concat(
            _design_system__WEBPACK_IMPORTED_MODULE_2__["colors"].greyLightest,
          ),
          "> *": {
            transition: "all 200ms ease",
            opacity: fade ? 0.4 : 1,
          },
        };
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
        justifyContent: "space-between",
        minWidth: "40%",
        "& p": {
          marginLeft: 30,
          minWidth: 45,
        },
        "&:last-child": {
          textAlign: "right",
        },
      });

      var ListItem = function ListItem(_ref3) {
        var item = _ref3.item,
          highlightId = _ref3.highlightId;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          ListItemContainer,
          {
            fade: highlightId && highlightId !== item.category,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Swatch, {
              color: item.color,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67,
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
                lineNumber: 69,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70,
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
                  lineNumber: 71,
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

      var List = function List(_ref4) {
        var items = _ref4.items,
          highlightId = _ref4.highlightId,
          onHighlight = _ref4.onHighlight;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          ListContainer,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88,
            },
            __self: this,
          },
          items.map(function(item) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              ListItem,
              {
                item: item,
                highlightId: highlightId,
                onMouseOver: function onMouseOver() {
                  return onHighlight(item.label);
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91,
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
//# sourceMappingURL=report.js.c6ca9268b3e61fc747c5.hot-update.js.map
