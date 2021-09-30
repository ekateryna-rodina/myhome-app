"use strict";
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
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/context */ \"./src/context.ts\");\n/* harmony import */ var src_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/schema */ \"./src/schema.ts\");\n\n\n\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  schema: src_schema__WEBPACK_IMPORTED_MODULE_2__.schema,\n  tracing: true,\n  context: src_context__WEBPACK_IMPORTED_MODULE_1__.createContext\n});\nconst handler = apolloServer.createHandler({\n  path: \"/api/graphql\"\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ3JhcGhxbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNRyxZQUFZLEdBQUcsSUFBSUgsNkRBQUosQ0FBaUI7QUFDcENFLEVBQUFBLE1BRG9DO0FBRXBDRSxFQUFBQSxPQUFPLEVBQUUsSUFGMkI7QUFHcENDLEVBQUFBLE9BQU8sRUFBRUosc0RBQWFBO0FBSGMsQ0FBakIsQ0FBckI7QUFNQSxNQUFNSyxPQUFPLEdBQUdILFlBQVksQ0FBQ0ksYUFBYixDQUEyQjtBQUFFQyxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUEzQixDQUFoQjtBQUNPLE1BQU1DLE1BQU0sR0FBRztBQUNwQkMsRUFBQUEsR0FBRyxFQUFFO0FBQ0hDLElBQUFBLFVBQVUsRUFBRTtBQURUO0FBRGUsQ0FBZjtBQUtQLGlFQUFlTCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhbC1lc3RhdGUtcGxhdGZvcm0vLi9wYWdlcy9hcGkvZ3JhcGhxbC50cz8xNjZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gXCJhcG9sbG8tc2VydmVyLW1pY3JvXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInNyYy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzY2hlbWEgfSBmcm9tIFwic3JjL3NjaGVtYVwiO1xuXG5jb25zdCBhcG9sbG9TZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgc2NoZW1hLFxuICB0cmFjaW5nOiB0cnVlLFxuICBjb250ZXh0OiBjcmVhdGVDb250ZXh0LFxufSk7XG5cbmNvbnN0IGhhbmRsZXIgPSBhcG9sbG9TZXJ2ZXIuY3JlYXRlSGFuZGxlcih7IHBhdGg6IFwiL2FwaS9ncmFwaHFsXCIgfSk7XG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIkFwb2xsb1NlcnZlciIsImNyZWF0ZUNvbnRleHQiLCJzY2hlbWEiLCJhcG9sbG9TZXJ2ZXIiLCJ0cmFjaW5nIiwiY29udGV4dCIsImhhbmRsZXIiLCJjcmVhdGVIYW5kbGVyIiwicGF0aCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/graphql.ts\n");

/***/ }),

/***/ "./src/context.ts":
/*!************************!*\
  !*** ./src/context.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContext\": () => (/* binding */ createContext)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n  log: [\"query\"]\n});\nfunction createContext() {\n  return {\n    prisma\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixDQUFpQjtBQUFFRSxFQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQVAsQ0FBakIsQ0FBZjtBQUlPLFNBQVNDLGFBQVQsR0FBa0M7QUFDdkMsU0FBTztBQUFFRixJQUFBQTtBQUFGLEdBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWwtZXN0YXRlLXBsYXRmb3JtLy4vc3JjL2NvbnRleHQudHM/YWUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7IGxvZzogW1wicXVlcnlcIl0gfSk7XG5leHBvcnQgaW50ZXJmYWNlIENvbnRleHQge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZXh0KCk6IENvbnRleHQge1xuICByZXR1cm4geyBwcmlzbWEgfTtcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJsb2ciLCJjcmVhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context.ts\n");

/***/ }),

/***/ "./src/schema.ts":
/*!***********************!*\
  !*** ./src/schema.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"schema\": () => (/* binding */ schema)\n/* harmony export */ });\n/* harmony import */ var _nexus_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nexus/schema */ \"@nexus/schema\");\n/* harmony import */ var _nexus_schema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nexus_schema__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nexus_plugin_prisma_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nexus-plugin-prisma/schema */ \"nexus-plugin-prisma/schema\");\n/* harmony import */ var nexus_plugin_prisma_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nexus_plugin_prisma_schema__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Property = (0,_nexus_schema__WEBPACK_IMPORTED_MODULE_0__.objectType)({\n  name: \"Property\",\n\n  definition(t) {\n    t.model.id();\n    t.model.title();\n    t.model.city();\n    t.model.country();\n    t.model.baths();\n    t.model.beds();\n    t.model.size();\n    t.model.photo();\n  }\n\n});\nconst Query = (0,_nexus_schema__WEBPACK_IMPORTED_MODULE_0__.queryType)({\n  definition(t) {\n    t.crud.property();\n    t.crud.properties({\n      filtering: true\n    });\n  }\n\n});\nconst schema = (0,_nexus_schema__WEBPACK_IMPORTED_MODULE_0__.makeSchema)({\n  types: {\n    Query,\n    Property\n  },\n  plugins: [(0,nexus_plugin_prisma_schema__WEBPACK_IMPORTED_MODULE_1__.nexusSchemaPrisma)({\n    experimentalCRUD: true\n  })],\n  outputs: {\n    schema: path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"schema.graphql\"),\n    typegen: path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"nexus.ts\")\n  },\n  typegenAutoConfig: {\n    contextType: \"Context.Context\",\n    sources: [{\n      source: \"@prisma/client\",\n      alias: \"prisma\"\n    }, {\n      source: /*require.resolve*/(/*! ./context */ \"./src/context.ts\"),\n      alias: \"Context\"\n    }]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NoZW1hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNSyxRQUFRLEdBQUdKLHlEQUFVLENBQUM7QUFDMUJLLEVBQUFBLElBQUksRUFBRSxVQURvQjs7QUFFMUJDLEVBQUFBLFVBQVUsQ0FBQ0MsQ0FBRCxFQUFJO0FBQ1pBLElBQUFBLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxFQUFSO0FBQ0FGLElBQUFBLENBQUMsQ0FBQ0MsS0FBRixDQUFRRSxLQUFSO0FBQ0FILElBQUFBLENBQUMsQ0FBQ0MsS0FBRixDQUFRRyxJQUFSO0FBQ0FKLElBQUFBLENBQUMsQ0FBQ0MsS0FBRixDQUFRSSxPQUFSO0FBQ0FMLElBQUFBLENBQUMsQ0FBQ0MsS0FBRixDQUFRSyxLQUFSO0FBQ0FOLElBQUFBLENBQUMsQ0FBQ0MsS0FBRixDQUFRTSxJQUFSO0FBQ0FQLElBQUFBLENBQUMsQ0FBQ0MsS0FBRixDQUFRTyxJQUFSO0FBQ0FSLElBQUFBLENBQUMsQ0FBQ0MsS0FBRixDQUFRUSxLQUFSO0FBQ0Q7O0FBWHlCLENBQUQsQ0FBM0I7QUFhQSxNQUFNQyxLQUFLLEdBQUdoQix3REFBUyxDQUFDO0FBQ3RCSyxFQUFBQSxVQUFVLENBQUNDLENBQUQsRUFBSTtBQUNaQSxJQUFBQSxDQUFDLENBQUNXLElBQUYsQ0FBT0MsUUFBUDtBQUNBWixJQUFBQSxDQUFDLENBQUNXLElBQUYsQ0FBT0UsVUFBUCxDQUFrQjtBQUNoQkMsTUFBQUEsU0FBUyxFQUFFO0FBREssS0FBbEI7QUFHRDs7QUFOcUIsQ0FBRCxDQUF2QjtBQVFPLE1BQU1DLE1BQU0sR0FBR3ZCLHlEQUFVLENBQUM7QUFDL0J3QixFQUFBQSxLQUFLLEVBQUU7QUFBRU4sSUFBQUEsS0FBRjtBQUFTYixJQUFBQTtBQUFULEdBRHdCO0FBRS9Cb0IsRUFBQUEsT0FBTyxFQUFFLENBQUN0Qiw2RUFBaUIsQ0FBQztBQUFFdUIsSUFBQUEsZ0JBQWdCLEVBQUU7QUFBcEIsR0FBRCxDQUFsQixDQUZzQjtBQUcvQkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BKLElBQUFBLE1BQU0sRUFBRW5CLGdEQUFBLENBQVV5QixPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixnQkFBekIsQ0FERDtBQUVQQyxJQUFBQSxPQUFPLEVBQUUzQixnREFBQSxDQUFVeUIsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsVUFBekI7QUFGRixHQUhzQjtBQU8vQkUsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFdBQVcsRUFBRSxpQkFESTtBQUVqQkMsSUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFDRUMsTUFBQUEsTUFBTSxFQUFFLGdCQURWO0FBRUVDLE1BQUFBLEtBQUssRUFBRTtBQUZULEtBRE8sRUFLUDtBQUNFRCxNQUFBQSxNQUFNLEVBQUVFLG1CQUFBLENBQWdCLG1DQUFoQixDQURWO0FBRUVELE1BQUFBLEtBQUssRUFBRTtBQUZULEtBTE87QUFGUTtBQVBZLENBQUQsQ0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFsLWVzdGF0ZS1wbGF0Zm9ybS8uL3NyYy9zY2hlbWEudHM/NzhkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU2NoZW1hLCBvYmplY3RUeXBlLCBxdWVyeVR5cGUgfSBmcm9tIFwiQG5leHVzL3NjaGVtYVwiO1xuaW1wb3J0IHsgbmV4dXNTY2hlbWFQcmlzbWEgfSBmcm9tIFwibmV4dXMtcGx1Z2luLXByaXNtYS9zY2hlbWFcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IFByb3BlcnR5ID0gb2JqZWN0VHlwZSh7XG4gIG5hbWU6IFwiUHJvcGVydHlcIixcbiAgZGVmaW5pdGlvbih0KSB7XG4gICAgdC5tb2RlbC5pZCgpO1xuICAgIHQubW9kZWwudGl0bGUoKTtcbiAgICB0Lm1vZGVsLmNpdHkoKTtcbiAgICB0Lm1vZGVsLmNvdW50cnkoKTtcbiAgICB0Lm1vZGVsLmJhdGhzKCk7XG4gICAgdC5tb2RlbC5iZWRzKCk7XG4gICAgdC5tb2RlbC5zaXplKCk7XG4gICAgdC5tb2RlbC5waG90bygpO1xuICB9LFxufSk7XG5jb25zdCBRdWVyeSA9IHF1ZXJ5VHlwZSh7XG4gIGRlZmluaXRpb24odCkge1xuICAgIHQuY3J1ZC5wcm9wZXJ0eSgpO1xuICAgIHQuY3J1ZC5wcm9wZXJ0aWVzKHtcbiAgICAgIGZpbHRlcmluZzogdHJ1ZSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHNjaGVtYSA9IG1ha2VTY2hlbWEoe1xuICB0eXBlczogeyBRdWVyeSwgUHJvcGVydHkgfSxcbiAgcGx1Z2luczogW25leHVzU2NoZW1hUHJpc21hKHsgZXhwZXJpbWVudGFsQ1JVRDogdHJ1ZSB9KV0sXG4gIG91dHB1dHM6IHtcbiAgICBzY2hlbWE6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInNjaGVtYS5ncmFwaHFsXCIpLFxuICAgIHR5cGVnZW46IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcIm5leHVzLnRzXCIpLFxuICB9LFxuICB0eXBlZ2VuQXV0b0NvbmZpZzoge1xuICAgIGNvbnRleHRUeXBlOiBcIkNvbnRleHQuQ29udGV4dFwiLFxuICAgIHNvdXJjZXM6IFtcbiAgICAgIHtcbiAgICAgICAgc291cmNlOiBcIkBwcmlzbWEvY2xpZW50XCIsXG4gICAgICAgIGFsaWFzOiBcInByaXNtYVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc291cmNlOiByZXF1aXJlLnJlc29sdmUoXCIuL2NvbnRleHRcIiksXG4gICAgICAgIGFsaWFzOiBcIkNvbnRleHRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIm1ha2VTY2hlbWEiLCJvYmplY3RUeXBlIiwicXVlcnlUeXBlIiwibmV4dXNTY2hlbWFQcmlzbWEiLCJwYXRoIiwiUHJvcGVydHkiLCJuYW1lIiwiZGVmaW5pdGlvbiIsInQiLCJtb2RlbCIsImlkIiwidGl0bGUiLCJjaXR5IiwiY291bnRyeSIsImJhdGhzIiwiYmVkcyIsInNpemUiLCJwaG90byIsIlF1ZXJ5IiwiY3J1ZCIsInByb3BlcnR5IiwicHJvcGVydGllcyIsImZpbHRlcmluZyIsInNjaGVtYSIsInR5cGVzIiwicGx1Z2lucyIsImV4cGVyaW1lbnRhbENSVUQiLCJvdXRwdXRzIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJ0eXBlZ2VuIiwidHlwZWdlbkF1dG9Db25maWciLCJjb250ZXh0VHlwZSIsInNvdXJjZXMiLCJzb3VyY2UiLCJhbGlhcyIsInJlcXVpcmUiLCJyZXNvbHZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/schema.ts\n");

/***/ }),

/***/ "@nexus/schema":
/*!********************************!*\
  !*** external "@nexus/schema" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nexus/schema");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "nexus-plugin-prisma/schema":
/*!*********************************************!*\
  !*** external "nexus-plugin-prisma/schema" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("nexus-plugin-prisma/schema");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.ts"));
module.exports = __webpack_exports__;

})();