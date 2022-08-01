/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$content\": () => (/* binding */ $content),\n/* harmony export */   \"createHTMLElement\": () => (/* binding */ createHTMLElement)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-home */ \"./src/main-home.js\");\n/* harmony import */ var _main_home__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_home__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _main_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-menu */ \"./src/main-menu.js\");\n/* harmony import */ var _main_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_menu__WEBPACK_IMPORTED_MODULE_3__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './about'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\n\r\nconst $content = document.getElementById(\"content\");\r\n\r\nfunction createHTMLElement(type, id, arrayClasses, content) {\r\n    const element = document.createElement(type);\r\n    if (id) element.id = id;\r\n    if (arrayClasses)\r\n        arrayClasses.forEach((myClass) => element.classList.add(myClass));\r\n\r\n    if (content) element.innerText = content;\r\n    return element;\r\n}\r\n\r\nfunction home() {\r\n    $content.innerHTML = \"\";\r\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\r\n    (0,_main_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();\r\n}\r\nfunction menu() {\r\n    $content.innerHTML = \"\";\r\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\r\n    (0,_main_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();\r\n}\r\nfunction about() {\r\n    $content.innerHTML = \"\";\r\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './about'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();\r\n}\r\n\r\nhome();\r\n\r\ndocument.addEventListener(\"click\", (e) => {\r\n    const target = e.target.innerText;\r\n\r\n    if (target == \"HOME\") home();\r\n    if (target === \"MENU\" || target === \"VER EL MENU\") menu();\r\n    if (target === \"ABOUT\") about();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main-home.js":
/*!**************************!*\
  !*** ./src/main-home.js ***!
  \**************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/main-home.js?");

/***/ }),

/***/ "./src/main-menu.js":
/*!**************************!*\
  !*** ./src/main-menu.js ***!
  \**************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/main-menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;