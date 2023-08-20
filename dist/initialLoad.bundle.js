"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["initialLoad"],{

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)\n/* harmony export */ });\n/* harmony import */ var _corndog_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./corndog.jpg */ \"./src/corndog.jpg\");\n\n\nconst initialPageLoad = () => {\n  const container = document.getElementById(\"content\");\n\n  //create element\n  const heading = document.createElement(\"h1\");\n  const foodImage = document.createElement(\"img\");\n  const description = document.createElement(\"p\");\n\n  //add content to the elements\n  heading.textContent = \"CornKnee\";\n  foodImage.src = _corndog_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  description.textContent =\n    \"Embark on a delightful journey at our Korean corn dog haven. Experience the allure of traditional flavors blended with modern flair, where each bite unveils a delectable surprise. Our menu boasts an array of indulgent options, crafting a harmonious symphony of taste and texture that's irresistibly unforgettable.\";\n\n  //appending newly created elements to the DOM\n  container.appendChild(heading);\n  container.appendChild(foodImage);\n  container.appendChild(description);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/initialLoad.js?");

/***/ }),

/***/ "./src/corndog.jpg":
/*!*************************!*\
  !*** ./src/corndog.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ba3900b0606e09094c4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/corndog.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/initialLoad.js"));
/******/ }
]);