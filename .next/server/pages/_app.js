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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atlaskit_css_reset_dist_bundle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @atlaskit/css-reset/dist/bundle.css */ \"./node_modules/@atlaskit/css-reset/dist/bundle.css\");\n/* harmony import */ var _atlaskit_css_reset_dist_bundle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_atlaskit_css_reset_dist_bundle_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive */ \"react-responsive\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/apollo */ \"./src/apollo.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/katerynarodina/Documents/portfolio/real-estate-platform/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.createGlobalStyle)([\"html{box-sizing:border-box;height:100%;overflow:hidden;}body{background-color:#fff;min-height:100vh;font-family:'Roboto',sans-serif;overflow:hidden;font-size:\", \"}\"], ({\n  fontSize\n}) => fontSize);\nconst theme = {\n  primary: \"#1e81b0\",\n  secondary: \"#e28743\",\n  primaryText: \"#21130d\",\n  secondaryText: \"#abdbe3\",\n  gray: \"#979f9e\",\n  dark: \"#063970\",\n  light: \"#eeeee4\"\n};\nconst initialContext = {\n  breakpoints: {},\n  filters: {}\n};\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialContext);\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: isFilterOpen,\n    1: setIsFilterOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const client = (0,src_apollo__WEBPACK_IMPORTED_MODULE_4__.useApollo)(pageProps.initialeApolloState);\n  const isSmallMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({\n    query: \"(max-width: 320px)\"\n  });\n  const isMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({\n    query: \"(min-width: 320px) and (max-width: 480px)\"\n  });\n  const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({\n    query: \"(min-width: 1025px) and (max-width: 1200px)\"\n  });\n  const isTablet = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({\n    query: \"(min-width: 481px) and (max-width: 768px)\"\n  });\n  const isLaptop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({\n    query: \"(min-width: 769px) and (max-width: 1024px)\"\n  });\n  const isBigDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({\n    query: \"(min-width: 1201px)\"\n  });\n  const isPortrait = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({\n    query: \"(orientation: portrait)\"\n  });\n  const isRetina = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({\n    query: \"(min-resolution: 2dppx)\"\n  });\n  const mediaMap = {\n    isSmallMobile,\n    isMobile,\n    isDesktop,\n    isBigDesktop,\n    isLaptop,\n    isTablet,\n    isPortrait,\n    isRetina\n  };\n\n  const fontSize = () => {\n    if (mediaMap[\"isSmallMobile\"]) return \"60%\";\n    if (mediaMap[\"isMobile\"]) return \"65%\";\n    if (mediaMap[\"isTablet\"]) return \"75%\";\n    if (mediaMap[\"isLaptop\"]) return \"85%\";\n    if (mediaMap[\"isBigDesktop\"]) return \"90%\";\n    return \"100%\";\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloProvider, {\n    client: client,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Context.Provider, {\n      value: {\n        breakpoints: mediaMap,\n        filters: {\n          isOpen: isFilterOpen,\n          setIsOpen: setIsFilterOpen\n        }\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GlobalStyle, {\n        fontSize: fontSize()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n        theme: theme,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNCQUNFLDhEQUFDLDBEQUFEO0FBQWdCLFVBQU0sRUFBRVgsTUFBeEI7QUFBQSwyQkFDRSw4REFBQyxPQUFELENBQVMsUUFBVDtBQUNFLFdBQUssRUFBRTtBQUNMUixRQUFBQSxXQUFXLEVBQUVtQixRQURSO0FBRUxsQixRQUFBQSxPQUFPLEVBQUU7QUFDUG1CLFVBQUFBLE1BQU0sRUFBRWQsWUFERDtBQUVQZSxVQUFBQSxTQUFTLEVBQUVkO0FBRko7QUFGSixPQURUO0FBQUEsOEJBU0UsOERBQUMsV0FBRDtBQUFhLGdCQUFRLEVBQUVqQixRQUFRO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVVFLDhEQUFDLDREQUFEO0FBQWUsYUFBSyxFQUFFQyxLQUF0QjtBQUFBLCtCQUNFLDhEQUFDLFNBQUQsb0JBQWVjLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0FBQ0QsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFsLWVzdGF0ZS1wbGF0Zm9ybS8uL3BhZ2VzL19hcHAudHN4PzcyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBcIkBhdGxhc2tpdC9jc3MtcmVzZXQvZGlzdC9idW5kbGUuY3NzXCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwic3JjL2Fwb2xsb1wiO1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElNZWRpYVF1ZXJ5IH0gZnJvbSBcInR5cGVzL21lZGlhXCI7XG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlPHsgZm9udFNpemU6IHN0cmluZyB9PmBcbmh0bWx7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYm9keXtcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICBtaW4taGVpZ2h0OjEwMHZoO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogJHsoeyBmb250U2l6ZSB9KSA9PiBmb250U2l6ZX1cbn1cblxuYDtcblxuY29uc3QgdGhlbWUgPSB7XG4gIHByaW1hcnk6IFwiIzFlODFiMFwiLFxuICBzZWNvbmRhcnk6IFwiI2UyODc0M1wiLFxuICBwcmltYXJ5VGV4dDogXCIjMjExMzBkXCIsXG4gIHNlY29uZGFyeVRleHQ6IFwiI2FiZGJlM1wiLFxuICBncmF5OiBcIiM5NzlmOWVcIixcbiAgZGFyazogXCIjMDYzOTcwXCIsXG4gIGxpZ2h0OiBcIiNlZWVlZTRcIixcbn07XG5cbmNvbnN0IGluaXRpYWxDb250ZXh0OiB7IGJyZWFrcG9pbnRzOiBJTWVkaWFRdWVyeTsgZmlsdGVyczogYW55IH0gPSB7XG4gIGJyZWFrcG9pbnRzOiB7fSBhcyBJTWVkaWFRdWVyeSxcbiAgZmlsdGVyczoge30sXG59O1xuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxDb250ZXh0KTtcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW2lzRmlsdGVyT3Blbiwgc2V0SXNGaWx0ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsZUFwb2xsb1N0YXRlKTtcbiAgY29uc3QgaXNTbWFsbE1vYmlsZSA9IHVzZU1lZGlhUXVlcnkoe1xuICAgIHF1ZXJ5OiBcIihtYXgtd2lkdGg6IDMyMHB4KVwiLFxuICB9KTtcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHtcbiAgICBxdWVyeTogXCIobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KVwiLFxuICB9KTtcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh7XG4gICAgcXVlcnk6IFwiKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KVwiLFxuICB9KTtcbiAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KHtcbiAgICBxdWVyeTogXCIobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KVwiLFxuICB9KTtcbiAgY29uc3QgaXNMYXB0b3AgPSB1c2VNZWRpYVF1ZXJ5KHtcbiAgICBxdWVyeTogXCIobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweClcIixcbiAgfSk7XG4gIGNvbnN0IGlzQmlnRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoe1xuICAgIHF1ZXJ5OiBcIihtaW4td2lkdGg6IDEyMDFweClcIixcbiAgfSk7XG4gIGNvbnN0IGlzUG9ydHJhaXQgPSB1c2VNZWRpYVF1ZXJ5KHsgcXVlcnk6IFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiB9KTtcbiAgY29uc3QgaXNSZXRpbmEgPSB1c2VNZWRpYVF1ZXJ5KHsgcXVlcnk6IFwiKG1pbi1yZXNvbHV0aW9uOiAyZHBweClcIiB9KTtcbiAgY29uc3QgbWVkaWFNYXAgPSB7XG4gICAgaXNTbWFsbE1vYmlsZSxcbiAgICBpc01vYmlsZSxcbiAgICBpc0Rlc2t0b3AsXG4gICAgaXNCaWdEZXNrdG9wLFxuICAgIGlzTGFwdG9wLFxuICAgIGlzVGFibGV0LFxuICAgIGlzUG9ydHJhaXQsXG4gICAgaXNSZXRpbmEsXG4gIH07XG5cbiAgY29uc3QgZm9udFNpemUgPSAoKSA9PiB7XG4gICAgaWYgKG1lZGlhTWFwW1wiaXNTbWFsbE1vYmlsZVwiXSkgcmV0dXJuIFwiNjAlXCI7XG4gICAgaWYgKG1lZGlhTWFwW1wiaXNNb2JpbGVcIl0pIHJldHVybiBcIjY1JVwiO1xuICAgIGlmIChtZWRpYU1hcFtcImlzVGFibGV0XCJdKSByZXR1cm4gXCI3NSVcIjtcbiAgICBpZiAobWVkaWFNYXBbXCJpc0xhcHRvcFwiXSkgcmV0dXJuIFwiODUlXCI7XG4gICAgaWYgKG1lZGlhTWFwW1wiaXNCaWdEZXNrdG9wXCJdKSByZXR1cm4gXCI5MCVcIjtcbiAgICByZXR1cm4gXCIxMDAlXCI7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgYnJlYWtwb2ludHM6IG1lZGlhTWFwLFxuICAgICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgIGlzT3BlbjogaXNGaWx0ZXJPcGVuLFxuICAgICAgICAgICAgc2V0SXNPcGVuOiBzZXRJc0ZpbHRlck9wZW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEdsb2JhbFN0eWxlIGZvbnRTaXplPXtmb250U2l6ZSgpfSAvPlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZU1lZGlhUXVlcnkiLCJ1c2VBcG9sbG8iLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlRoZW1lUHJvdmlkZXIiLCJHbG9iYWxTdHlsZSIsImZvbnRTaXplIiwidGhlbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwicHJpbWFyeVRleHQiLCJzZWNvbmRhcnlUZXh0IiwiZ3JheSIsImRhcmsiLCJsaWdodCIsImluaXRpYWxDb250ZXh0IiwiYnJlYWtwb2ludHMiLCJmaWx0ZXJzIiwiQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNGaWx0ZXJPcGVuIiwic2V0SXNGaWx0ZXJPcGVuIiwiY2xpZW50IiwiaW5pdGlhbGVBcG9sbG9TdGF0ZSIsImlzU21hbGxNb2JpbGUiLCJxdWVyeSIsImlzTW9iaWxlIiwiaXNEZXNrdG9wIiwiaXNUYWJsZXQiLCJpc0xhcHRvcCIsImlzQmlnRGVza3RvcCIsImlzUG9ydHJhaXQiLCJpc1JldGluYSIsIm1lZGlhTWFwIiwiaXNPcGVuIiwic2V0SXNPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/apollo.ts":
/*!***********************!*\
  !*** ./src/apollo.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet apolloClient;\n\nfunction createIsomorphicLink() {\n  if (false) {} else {\n    const {\n      HttpLink\n    } = __webpack_require__(/*! @apollo/client/link/http */ \"@apollo/client/link/http\");\n\n    return new HttpLink({\n      uri: \"/api/graphql\"\n    });\n  }\n}\n\nfunction createApolloClient() {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    ssrMode: false,\n    link: createIsomorphicLink(),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n  });\n}\n\nfunction initializeApollo(initialState = null) {\n  const _apolloClient = initialState !== null && initialState !== void 0 ? initialState : createApolloClient();\n\n  if (initialState) {\n    _apolloClient.cache.restore(initialState);\n  } else {\n    var _apolloClient2;\n\n    if (false) {}\n    apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : _apolloClient;\n  }\n\n  return apolloClient;\n}\nfunction useApollo(initialState) {\n  const store = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => initializeApollo(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBvbGxvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQSxJQUFJRyxZQUFKOztBQUVBLFNBQVNDLG9CQUFULEdBQWdDO0FBQzlCLGFBQWlDLEVBQWpDLE1BSU87QUFDTCxVQUFNO0FBQUVJLE1BQUFBO0FBQUYsUUFBZUYsbUJBQU8sQ0FBQywwREFBRCxDQUE1Qjs7QUFDQSxXQUFPLElBQUlFLFFBQUosQ0FBYTtBQUFFQyxNQUFBQSxHQUFHLEVBQUU7QUFBUCxLQUFiLENBQVA7QUFDRDtBQUNGOztBQUNELFNBQVNDLGtCQUFULEdBQThCO0FBQzVCLFNBQU8sSUFBSVYsd0RBQUosQ0FBaUI7QUFDdEJXLElBQUFBLE9BQU8sT0FEZTtBQUV0QkMsSUFBQUEsSUFBSSxFQUFFUixvQkFBb0IsRUFGSjtBQUd0QlMsSUFBQUEsS0FBSyxFQUFFLElBQUlaLHlEQUFKO0FBSGUsR0FBakIsQ0FBUDtBQUtEOztBQUNNLFNBQVNhLGdCQUFULENBQTBCQyxZQUFpQixHQUFHLElBQTlDLEVBQW9EO0FBQ3pELFFBQU1DLGFBQWEsR0FBR0QsWUFBSCxhQUFHQSxZQUFILGNBQUdBLFlBQUgsR0FBbUJMLGtCQUFrQixFQUF4RDs7QUFDQSxNQUFJSyxZQUFKLEVBQWtCO0FBQ2hCQyxJQUFBQSxhQUFhLENBQUNILEtBQWQsQ0FBb0JJLE9BQXBCLENBQTRCRixZQUE1QjtBQUNELEdBRkQsTUFFTztBQUFBOztBQUNMLGVBQWlDO0FBQ2pDWixJQUFBQSxZQUFZLHFCQUFHQSxZQUFILDJEQUFtQmEsYUFBL0I7QUFDRDs7QUFDRCxTQUFPYixZQUFQO0FBQ0Q7QUFDTSxTQUFTZSxTQUFULENBQW1CSCxZQUFuQixFQUFzQztBQUMzQyxRQUFNSSxLQUFLLEdBQUdqQiw4Q0FBTyxDQUFDLE1BQU1ZLGdCQUFnQixDQUFDQyxZQUFELENBQXZCLEVBQXVDLENBQUNBLFlBQUQsQ0FBdkMsQ0FBckI7QUFDQSxTQUFPSSxLQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFsLWVzdGF0ZS1wbGF0Zm9ybS8uL3NyYy9hcG9sbG8udHM/ZGUxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcG9sbG9DbGllbnQsXG4gIEluTWVtb3J5Q2FjaGUsXG4gIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PjtcblxuZnVuY3Rpb24gY3JlYXRlSXNvbW9ycGhpY0xpbmsoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCB7IFNjaGVtYUxpbmsgfSA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiKTtcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gcmVxdWlyZShcIi4vc2NoZW1hXCIpO1xuICAgIHJldHVybiBuZXcgU2NoZW1hTGluayh7IHNjaGVtYSB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IEh0dHBMaW5rIH0gPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvbGluay9odHRwXCIpO1xuICAgIHJldHVybiBuZXcgSHR0cExpbmsoeyB1cmk6IFwiL2FwaS9ncmFwaHFsXCIgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZCxcbiAgICBsaW5rOiBjcmVhdGVJc29tb3JwaGljTGluaygpLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZTogYW55ID0gbnVsbCkge1xuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gaW5pdGlhbFN0YXRlID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZCkgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG4gICAgYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IF9hcG9sbG9DbGllbnQ7XG4gIH1cbiAgcmV0dXJuIGFwb2xsb0NsaWVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlOiBhbnkpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59XG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsInVzZU1lbW8iLCJhcG9sbG9DbGllbnQiLCJjcmVhdGVJc29tb3JwaGljTGluayIsIlNjaGVtYUxpbmsiLCJyZXF1aXJlIiwic2NoZW1hIiwiSHR0cExpbmsiLCJ1cmkiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNhY2hlIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apollo.ts\n");

/***/ }),

/***/ "./node_modules/@atlaskit/css-reset/dist/bundle.css":
/*!**********************************************************!*\
  !*** ./node_modules/@atlaskit/css-reset/dist/bundle.css ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/http":
/*!*******************************************!*\
  !*** external "@apollo/client/link/http" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/http");

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