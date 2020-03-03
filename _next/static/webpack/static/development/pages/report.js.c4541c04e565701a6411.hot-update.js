webpackHotUpdate("static/development/pages/report.js", {
  /***/ "./components/Metrics/Gender/index.tsx":
    /*!*********************************************!*\
  !*** ./components/Metrics/Gender/index.tsx ***!
  \*********************************************/
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
      /* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react-vis */ "./node_modules/react-vis/es/index.js",
      );
      var _jsxFileName =
        "/Users/jklb/dev/givecrypto/website/components/Metrics/Gender/index.tsx";

      var Gender = function Gender(props) {
        // Let there be props
        console.log("props", props);
        var data = [
          {
            angle: 1,
          },
          {
            angle: 5,
          },
          {
            angle: 2,
          },
        ];
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14,
              },
              __self: this,
            },
            "Gender Metrics",
          ),
          react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            react_vis__WEBPACK_IMPORTED_MODULE_1__["RadialChart"],
            {
              animation: true, // innerRadius={90}
              // radius={120}
              data: data,
              width: 300,
              height: 300,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15,
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
//# sourceMappingURL=report.js.c4541c04e565701a6411.hot-update.js.map
