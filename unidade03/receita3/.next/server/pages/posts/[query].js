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
exports.id = "pages/posts/[query]";
exports.ids = ["pages/posts/[query]"];
exports.modules = {

/***/ "./pages/posts/[query].js":
/*!********************************!*\
  !*** ./pages/posts/[query].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\nasync function getServerSideProps(context) {\n    const { title  } = context.query;\n    const res = await fetch(`http://www.omdbapi.com/?apikey=de6a32db&s=${title}`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcXVlcnldLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxlQUFlQSxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdELE9BQU8sQ0FBQ0UsS0FBSztJQUUvQixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsMENBQTBDLEVBQUVILEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0UsTUFBTUksSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBRTdCLE9BQU87UUFBRUMsS0FBSyxFQUFFO1lBQUVGLElBQUk7U0FBRTtLQUFFO0NBQzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjZWl0YTMvLi9wYWdlcy9wb3N0cy9bcXVlcnldLmpzP2ExOTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7IHRpdGxlIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9ZGU2YTMyZGImcz0ke3RpdGxlfWApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH1cclxufSJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwidGl0bGUiLCJxdWVyeSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[query].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[query].js"));
module.exports = __webpack_exports__;

})();