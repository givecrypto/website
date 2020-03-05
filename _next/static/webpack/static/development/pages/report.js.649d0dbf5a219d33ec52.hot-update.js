webpackHotUpdate("static/development/pages/report.js", {
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
          // padding: "0 1.2rem",
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
        flexDirection: "column", // border: `1px solid ${colors.greyLightest}`,
        // borderRadius: 8,
        // boxShadow: shadows.card,
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
});
//# sourceMappingURL=report.js.649d0dbf5a219d33ec52.hot-update.js.map
