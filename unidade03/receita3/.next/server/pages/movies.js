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
exports.id = "pages/movies";
exports.ids = ["pages/movies"];
exports.modules = {

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Movies({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((s)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: s.Title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\projetosGitHub\\\\pWeb\\\\unidade03\\\\receita3\\\\pages\\\\movies.js\",\n                lineNumber: 6,\n                columnNumber: 17\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\projetosGitHub\\\\pWeb\\\\unidade03\\\\receita3\\\\pages\\\\movies.js\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, this);\n};\nasync function getServerSideProps(context) {\n    const { title  } = context.query;\n    const res = await fetch(`http://www.omdbapi.com/?apikey=de6a32db&s=${title}`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQWUsU0FBU0EsTUFBTSxDQUFDLEVBQUNDLElBQUksR0FBQyxFQUFFO0lBRW5DLHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxDQUFDLEdBQUc7MEJBQ2pCLDhEQUFDQyxJQUFFOzBCQUFFRCxDQUFDLENBQUNFLEtBQUs7Ozs7O29CQUFNO1NBQ3JCLENBQUM7Ozs7O1lBQ0EsQ0FDVDtDQUNKO0FBR00sZUFBZUMsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUM5QyxNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHRCxPQUFPLENBQUNFLEtBQUs7SUFFL0IsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLDBDQUEwQyxFQUFFSCxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdFLE1BQU1ULElBQUksR0FBRyxNQUFNVyxHQUFHLENBQUNFLElBQUksRUFBRTtJQUU3QixPQUFPO1FBQUVDLEtBQUssRUFBRTtZQUFFZCxJQUFJO1NBQUU7S0FBRTtDQUM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2VpdGEzLy4vcGFnZXMvbW92aWVzLmpzP2FmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKHtkYXRhfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcChzID0+e1xyXG4gICAgICAgICAgICAgICAgPGgxPntzLlRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7IHRpdGxlIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9ZGU2YTMyZGImcz0ke3RpdGxlfWApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH1cclxufSJdLCJuYW1lcyI6WyJNb3ZpZXMiLCJkYXRhIiwiZGl2IiwiU2VhcmNoIiwibWFwIiwicyIsImgxIiwiVGl0bGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwidGl0bGUiLCJxdWVyeSIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies.js"));
module.exports = __webpack_exports__;

})();