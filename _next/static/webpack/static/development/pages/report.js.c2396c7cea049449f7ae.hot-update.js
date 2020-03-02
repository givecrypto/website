webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./pages/report.tsx":
    /*!**************************!*\
  !*** ./pages/report.tsx ***!
  \**************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js",
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
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! next/head */ "./node_modules/next-server/dist/lib/head.js",
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        next_head__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var _components_Analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../components/Analytics */ "./components/Analytics.tsx",
      );
      /* harmony import */ var _content_ambassadors_report_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../content/ambassadors-report/seo */ "./content/ambassadors-report/seo.ts",
      );
      /* harmony import */ var _components_HeadMeta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../components/HeadMeta */ "./components/HeadMeta.tsx",
      );
      /* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../components/Wrapper */ "./components/Wrapper.tsx",
      );
      /* harmony import */ var _design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../design-system */ "./design-system/index.ts",
      );
      /* harmony import */ var _utils_Scale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../utils/Scale */ "./utils/Scale.tsx",
      );
      /* harmony import */ var _utils_rehydrate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../utils/rehydrate */ "./utils/rehydrate.tsx",
      );

      var _jsxFileName = "/Users/jklb/dev/givecrypto/website/pages/report.tsx";

      // Refresh styles

      // Styled Components

      var Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h2(
        Object(
          _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ],
        )(
          {
            color:
              _design_system__WEBPACK_IMPORTED_MODULE_8__["colors"].coldWater,
            fontSize: Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_9__["Step"])(
              5.35,
            ),
          },
          _design_system__WEBPACK_IMPORTED_MODULE_8__["breakpoints"].ns,
          {
            fontSize: Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_9__["Step"])(
              6,
            ),
          },
        ),
      );
      var Subtitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h1(
        Object(
          _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ],
        )(
          {
            paddingBottom: Object(
              _utils_Scale__WEBPACK_IMPORTED_MODULE_9__["Step"],
            )(5),
            color:
              _design_system__WEBPACK_IMPORTED_MODULE_8__["colors"].coldWater,
            fontWeight: 400,
            fontSize: Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_9__["Step"])(
              4.5,
            ),
          },
          _design_system__WEBPACK_IMPORTED_MODULE_8__["breakpoints"].ns,
          {
            fontSize: Object(_utils_Scale__WEBPACK_IMPORTED_MODULE_9__["Step"])(
              5,
            ),
          },
        ),
      );

      var Report = function Report() {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
          _components_Analytics__WEBPACK_IMPORTED_MODULE_4__["default"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            next_head__WEBPACK_IMPORTED_MODULE_3___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              "title",
              {
                key: "head-title",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                },
                __self: this,
              },
              _content_ambassadors_report_seo__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ].title,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            _components_HeadMeta__WEBPACK_IMPORTED_MODULE_6__["default"],
            {
              path: "/report",
              title:
                _content_ambassadors_report_seo__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ].title,
              description:
                _content_ambassadors_report_seo__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ].description,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40,
              },
              __self: this,
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            _components_Wrapper__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              className: "ph3 ph0-l",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              Title,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                },
                __self: this,
              },
              "Ambassadors Report",
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
              Subtitle,
              {
                className: "lh-copy",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                },
                __self: this,
              },
              "Give the gift of crypto to help people in need around the world.",
            ),
          ),
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Report;

      /***/
    },
});
//# sourceMappingURL=report.js.c2396c7cea049449f7ae.hot-update.js.map
