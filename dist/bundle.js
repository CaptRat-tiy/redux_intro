/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = function reducer(state = [], action = {}) {\n  switch(action.type) {\n    case 'SHIRT@ADD':\n      return [\n        ...state,\n        {\n\n        id: state[state.length - 1] ?\n          state[state.length - 1].id + 1 : 1,\n\n        color: action.color,\n        size: action.size,\n        motto: action.motto\n\n        }]\n      break\n    case 'SHIRT@REMOVE':\n      return state.filter( shirt => shirt.id !== action.id)\n      break\n    default:\n    return state\n\n\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9yZWR1Y2VyLmpzPzhjYmIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gW10sIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NISVJUQEFERCc6XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAge1xuXG4gICAgICAgIGlkOiBzdGF0ZVtzdGF0ZS5sZW5ndGggLSAxXSA/XG4gICAgICAgICAgc3RhdGVbc3RhdGUubGVuZ3RoIC0gMV0uaWQgKyAxIDogMSxcblxuICAgICAgICBjb2xvcjogYWN0aW9uLmNvbG9yLFxuICAgICAgICBzaXplOiBhY3Rpb24uc2l6ZSxcbiAgICAgICAgbW90dG86IGFjdGlvbi5tb3R0b1xuXG4gICAgICAgIH1dXG4gICAgICBicmVha1xuICAgIGNhc2UgJ1NISVJUQFJFTU9WRSc6XG4gICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKCBzaGlydCA9PiBzaGlydC5pZCAhPT0gYWN0aW9uLmlkKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZVxuXG5cbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvcmVkdWNlci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nthrow new Error(\"Cannot find module \\\"redux\\\"\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reducer__);\n\n\n\nconsole.log('hello world');\n\nconst store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__[\"createStore\"])( __WEBPACK_IMPORTED_MODULE_1__reducer___default.a,\n  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()\n)\n\nconsole.log(store);\n\nconst newShirtDiv = document.querySelector('#createShirt')\nnewShirtDiv.querySelector('#createButton').onclick = () => {\n  store.dispatch({\n      type: 'SHIRT@ADD',\n      color: newShirtDiv.querySelector('#color').value,\n      size: newShirtDiv.querySelector('#size').value,\n      motto: newShirtDiv.querySelector('#motto').value\n    })\n}\n\ndocument.querySelector('#removeButton').onclick = () => store.dispatch({\n  type: 'SHIRT@REMOVE',\n  id: parseInt(document.querySelector('#id').value)\n})\n\nstore.subscribe( () => {\n  console.log(\"store.getState():\", store.getState());\n})\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9pbmRleC5qcz9kYWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5cbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKCByZWR1Y2VyLFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXG4pXG5cbmNvbnNvbGUubG9nKHN0b3JlKTtcblxuY29uc3QgbmV3U2hpcnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlU2hpcnQnKVxubmV3U2hpcnREaXYucXVlcnlTZWxlY3RvcignI2NyZWF0ZUJ1dHRvbicpLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTSElSVEBBREQnLFxuICAgICAgY29sb3I6IG5ld1NoaXJ0RGl2LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvcicpLnZhbHVlLFxuICAgICAgc2l6ZTogbmV3U2hpcnREaXYucXVlcnlTZWxlY3RvcignI3NpemUnKS52YWx1ZSxcbiAgICAgIG1vdHRvOiBuZXdTaGlydERpdi5xdWVyeVNlbGVjdG9yKCcjbW90dG8nKS52YWx1ZVxuICAgIH0pXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmVCdXR0b24nKS5vbmNsaWNrID0gKCkgPT4gc3RvcmUuZGlzcGF0Y2goe1xuICB0eXBlOiAnU0hJUlRAUkVNT1ZFJyxcbiAgaWQ6IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZCcpLnZhbHVlKVxufSlcblxuc3RvcmUuc3Vic2NyaWJlKCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwic3RvcmUuZ2V0U3RhdGUoKTpcIiwgc3RvcmUuZ2V0U3RhdGUoKSk7XG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);