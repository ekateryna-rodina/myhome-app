/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _atlaskit_css_reset_dist_bundle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @atlaskit/css-reset/dist/bundle.css */ \"./node_modules/@atlaskit/css-reset/dist/bundle.css\");\n/* harmony import */ var _atlaskit_css_reset_dist_bundle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_atlaskit_css_reset_dist_bundle_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ \"react-responsive\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/katerynarodina/Documents/portfolio/real-estate-platform/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.createGlobalStyle)([\"html{box-sizing:border-box;height:100%;overflow:hidden;}body{background-color:#fff;min-height:100vh;font-family:'Roboto',sans-serif;overflow:hidden;font-size:\", \"}\"], ({\n  fontSize\n}) => fontSize);\nconst theme = {\n  primary: \"#1e81b0\",\n  secondary: \"#e28743\",\n  primaryText: \"#21130d\",\n  secondaryText: \"#abdbe3\",\n  gray: \"#979f9e\",\n  dark: \"#063970\",\n  light: \"#eeeee4\"\n};\nconst initialContext = {\n  breakpoints: {},\n  filters: {}\n};\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialContext);\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: isFilterOpen,\n    1: setIsFilterOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const isSmallMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({\n    query: \"(max-width: 320px)\"\n  });\n  const isMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({\n    query: \"(min-width: 320px) and (max-width: 480px)\"\n  });\n  const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({\n    query: \"(min-width: 1025px) and (max-width: 1200px)\"\n  });\n  const isTablet = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({\n    query: \"(min-width: 481px) and (max-width: 768px)\"\n  });\n  const isLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({\n    query: \"(min-width: 769px) and (max-width: 1024px)\"\n  });\n  const isBigDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({\n    query: \"(min-width: 1201px)\"\n  });\n  const isPortrait = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({\n    query: \"(orientation: portrait)\"\n  });\n  const isRetina = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({\n    query: \"(min-resolution: 2dppx)\"\n  });\n  const mediaMap = {\n    isSmallMobile,\n    isMobile,\n    isDesktop,\n    isBigDesktop,\n    isLaptop,\n    isTablet,\n    isPortrait,\n    isRetina\n  };\n\n  const fontSize = () => {\n    if (mediaMap[\"isSmallMobile\"]) return \"60%\";\n    if (mediaMap[\"isMobile\"]) return \"65%\";\n    if (mediaMap[\"isTablet\"]) return \"75%\";\n    if (mediaMap[\"isLaptop\"]) return \"85%\";\n    if (mediaMap[\"isBigDesktop\"]) return \"90%\";\n    return \"100%\";\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Context.Provider, {\n    value: {\n      breakpoints: mediaMap,\n      filters: {\n        isOpen: isFilterOpen,\n        setIsOpen: setIsFilterOpen\n      }\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(GlobalStyle, {\n      fontSize: fontSize()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n      theme: theme,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFTGhCLE1BQUFBLE9BQU8sRUFBRTtBQUNQaUIsUUFBQUEsTUFBTSxFQUFFWixZQUREO0FBRVBhLFFBQUFBLFNBQVMsRUFBRVo7QUFGSjtBQUZKLEtBRFQ7QUFBQSw0QkFTRSw4REFBQyxXQUFEO0FBQWEsY0FBUSxFQUFFakIsUUFBUTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRSw4REFBQyw0REFBRDtBQUFlLFdBQUssRUFBRUMsS0FBdEI7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlYyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0FBQ0QsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFsLWVzdGF0ZS1wbGF0Zm9ybS8uL3BhZ2VzL19hcHAudHN4PzcyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGF0bGFza2l0L2Nzcy1yZXNldC9kaXN0L2J1bmRsZS5jc3NcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmVcIjtcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJTWVkaWFRdWVyeSB9IGZyb20gXCJ0eXBlcy9tZWRpYVwiO1xuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZTx7IGZvbnRTaXplOiBzdHJpbmcgfT5gXG5odG1se1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcbiAgbWluLWhlaWdodDoxMDB2aDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6ICR7KHsgZm9udFNpemUgfSkgPT4gZm9udFNpemV9XG59XG5cbmA7XG5cbmNvbnN0IHRoZW1lID0ge1xuICBwcmltYXJ5OiBcIiMxZTgxYjBcIixcbiAgc2Vjb25kYXJ5OiBcIiNlMjg3NDNcIixcbiAgcHJpbWFyeVRleHQ6IFwiIzIxMTMwZFwiLFxuICBzZWNvbmRhcnlUZXh0OiBcIiNhYmRiZTNcIixcbiAgZ3JheTogXCIjOTc5ZjllXCIsXG4gIGRhcms6IFwiIzA2Mzk3MFwiLFxuICBsaWdodDogXCIjZWVlZWU0XCIsXG59O1xuXG5jb25zdCBpbml0aWFsQ29udGV4dDogeyBicmVha3BvaW50czogSU1lZGlhUXVlcnk7IGZpbHRlcnM6IGFueSB9ID0ge1xuICBicmVha3BvaW50czoge30gYXMgSU1lZGlhUXVlcnksXG4gIGZpbHRlcnM6IHt9LFxufTtcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsQ29udGV4dCk7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFtpc0ZpbHRlck9wZW4sIHNldElzRmlsdGVyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlzU21hbGxNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHtcbiAgICBxdWVyeTogXCIobWF4LXdpZHRoOiAzMjBweClcIixcbiAgfSk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh7XG4gICAgcXVlcnk6IFwiKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweClcIixcbiAgfSk7XG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoe1xuICAgIHF1ZXJ5OiBcIihtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweClcIixcbiAgfSk7XG4gIGNvbnN0IGlzVGFibGV0ID0gdXNlTWVkaWFRdWVyeSh7XG4gICAgcXVlcnk6IFwiKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweClcIixcbiAgfSk7XG4gIGNvbnN0IGlzTGFwdG9wID0gdXNlTWVkaWFRdWVyeSh7XG4gICAgcXVlcnk6IFwiKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpXCIsXG4gIH0pO1xuICBjb25zdCBpc0JpZ0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHtcbiAgICBxdWVyeTogXCIobWluLXdpZHRoOiAxMjAxcHgpXCIsXG4gIH0pO1xuICBjb25zdCBpc1BvcnRyYWl0ID0gdXNlTWVkaWFRdWVyeSh7IHF1ZXJ5OiBcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIgfSk7XG4gIGNvbnN0IGlzUmV0aW5hID0gdXNlTWVkaWFRdWVyeSh7IHF1ZXJ5OiBcIihtaW4tcmVzb2x1dGlvbjogMmRwcHgpXCIgfSk7XG4gIGNvbnN0IG1lZGlhTWFwID0ge1xuICAgIGlzU21hbGxNb2JpbGUsXG4gICAgaXNNb2JpbGUsXG4gICAgaXNEZXNrdG9wLFxuICAgIGlzQmlnRGVza3RvcCxcbiAgICBpc0xhcHRvcCxcbiAgICBpc1RhYmxldCxcbiAgICBpc1BvcnRyYWl0LFxuICAgIGlzUmV0aW5hLFxuICB9O1xuXG4gIGNvbnN0IGZvbnRTaXplID0gKCkgPT4ge1xuICAgIGlmIChtZWRpYU1hcFtcImlzU21hbGxNb2JpbGVcIl0pIHJldHVybiBcIjYwJVwiO1xuICAgIGlmIChtZWRpYU1hcFtcImlzTW9iaWxlXCJdKSByZXR1cm4gXCI2NSVcIjtcbiAgICBpZiAobWVkaWFNYXBbXCJpc1RhYmxldFwiXSkgcmV0dXJuIFwiNzUlXCI7XG4gICAgaWYgKG1lZGlhTWFwW1wiaXNMYXB0b3BcIl0pIHJldHVybiBcIjg1JVwiO1xuICAgIGlmIChtZWRpYU1hcFtcImlzQmlnRGVza3RvcFwiXSkgcmV0dXJuIFwiOTAlXCI7XG4gICAgcmV0dXJuIFwiMTAwJVwiO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBicmVha3BvaW50czogbWVkaWFNYXAsXG4gICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICBpc09wZW46IGlzRmlsdGVyT3BlbixcbiAgICAgICAgICBzZXRJc09wZW46IHNldElzRmlsdGVyT3BlbixcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEdsb2JhbFN0eWxlIGZvbnRTaXplPXtmb250U2l6ZSgpfSAvPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZU1lZGlhUXVlcnkiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlRoZW1lUHJvdmlkZXIiLCJHbG9iYWxTdHlsZSIsImZvbnRTaXplIiwidGhlbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwicHJpbWFyeVRleHQiLCJzZWNvbmRhcnlUZXh0IiwiZ3JheSIsImRhcmsiLCJsaWdodCIsImluaXRpYWxDb250ZXh0IiwiYnJlYWtwb2ludHMiLCJmaWx0ZXJzIiwiQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNGaWx0ZXJPcGVuIiwic2V0SXNGaWx0ZXJPcGVuIiwiaXNTbWFsbE1vYmlsZSIsInF1ZXJ5IiwiaXNNb2JpbGUiLCJpc0Rlc2t0b3AiLCJpc1RhYmxldCIsImlzTGFwdG9wIiwiaXNCaWdEZXNrdG9wIiwiaXNQb3J0cmFpdCIsImlzUmV0aW5hIiwibWVkaWFNYXAiLCJpc09wZW4iLCJzZXRJc09wZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@atlaskit/css-reset/dist/bundle.css":
/*!**********************************************************!*\
  !*** ./node_modules/@atlaskit/css-reset/dist/bundle.css ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();