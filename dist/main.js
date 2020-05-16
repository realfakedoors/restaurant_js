/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aboutTab.js":
/*!*************************!*\
  !*** ./src/aboutTab.js ***!
  \*************************/
/*! exports provided: aboutTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutTab", function() { return aboutTab; });
const aboutTab = (contentBox) => {  
  while (contentBox.firstChild){
    contentBox.removeChild(contentBox.firstChild);
  };
  
  let description = document.createElement('p');
  description.setAttribute('class', 'description');
  description.textContent = "Come on down to The Chili Trough! We got chili, cheddar cheese, bags of Fritos, sour cream, salsa, hot sauce, and what you do is, you just smush it up in a bowl and take a large straw, and inhale it all!";
  contentBox.appendChild(description);
  
  let chiliPhoto = document.createElement('img');
  chiliPhoto.setAttribute('id',  'chili-photo');
  chiliPhoto.setAttribute('src', './static/chili.jpg');
  contentBox.appendChild(chiliPhoto);
};



/***/ }),

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/*! exports provided: contactTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactTab", function() { return contactTab; });
const contactTab = (contentBox) => {
  while (contentBox.firstChild){
    contentBox.removeChild(contentBox.firstChild);
  };
  
  let contactTitle = document.createElement('h3');
  contactTitle.setAttribute('class', 'mini-title');
  contactTitle.textContent = "Drop Us A Line!";
  contentBox.appendChild(contactTitle);
  
  let contactItem = document.createElement('p');
  contactItem.setAttribute('class', 'address-item');
  contactItem.textContent = "Phone: (212)555-3232";
  contentBox.appendChild(contactItem);
  
  contactItem = document.createElement('p');
  contactItem.setAttribute('class', 'address-item');
  contactItem.textContent = "3104 Old Mission Blvd";
  contentBox.appendChild(contactItem);
  
  contactItem = document.createElement('p');
  contactItem.setAttribute('class', 'address-item');
  contactItem.textContent = "Spiceville, CO";
  contentBox.appendChild(contactItem);
};



/***/ }),

/***/ "./src/eventsTab.js":
/*!**************************!*\
  !*** ./src/eventsTab.js ***!
  \**************************/
/*! exports provided: eventsTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsTab", function() { return eventsTab; });
const eventsTab = (contentBox) => {
  while (contentBox.firstChild){
    contentBox.removeChild(contentBox.firstChild);
  };
  
  let eventsTitle = document.createElement('h3');
  eventsTitle.setAttribute('class', 'mini-title');
  eventsTitle.textContent = "Upcoming Events";
  contentBox.appendChild(eventsTitle);
  
  let eventsItem = document.createElement('p');
  eventsItem.setAttribute('class', 'events-item');
  eventsItem.textContent = "Feb 22: The Great Chili Chug";
  contentBox.appendChild(eventsItem);
  
  eventsItem = document.createElement('p');
  eventsItem.setAttribute('class', 'events-item');
  eventsItem.textContent = "Feb 23: The Great Toilet Hug";
  contentBox.appendChild(eventsItem);
  
  eventsItem = document.createElement('p');
  eventsItem.setAttribute('class', 'events-item');
  eventsItem.textContent = "Mar 11: Spicy Pepper Eating Contest";
  contentBox.appendChild(eventsItem);
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aboutTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutTab */ "./src/aboutTab.js");
/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuTab */ "./src/menuTab.js");
/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactTab */ "./src/contactTab.js");
/* harmony import */ var _eventsTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventsTab */ "./src/eventsTab.js");





const content = document.getElementById('content');
const contentBox = document.createElement('div');

function populate(content){
  let contentWrapper = document.createElement('div');
  contentWrapper.setAttribute('id', 'content-wrapper');
  
  let title = document.createElement('h1');
  title.setAttribute('class', 'title');
  title.textContent = 'The Chili Trough';
  
  let tabDivider = document.createElement('h1');
  tabDivider.setAttribute('class', 'tab-divider');
  
  let pageNav = document.createElement('nav');
  pageNav.setAttribute('id', 'page-nav');
  
  let navTabAbout = document.createElement('span');
  navTabAbout.setAttribute('class', 'nav-tab');
  navTabAbout.setAttribute('id', 'nav-about');
  navTabAbout.textContent = 'About';
  pageNav.appendChild(navTabAbout);
  navTabAbout.addEventListener('click', function(){Object(_aboutTab__WEBPACK_IMPORTED_MODULE_0__["aboutTab"])(contentBox)});
  
  let navTabMenu = document.createElement('span');
  navTabMenu.setAttribute('class', 'nav-tab');
  navTabMenu.setAttribute('id', 'nav-menu');
  navTabMenu.textContent = 'Menu';
  pageNav.appendChild(navTabMenu);
  navTabMenu.addEventListener('click', function(){Object(_menuTab__WEBPACK_IMPORTED_MODULE_1__["menuTab"])(contentBox)});
  
  let navTabContact = document.createElement('span');
  navTabContact.setAttribute('class', 'nav-tab');
  navTabContact.setAttribute('id', 'nav-contact');
  navTabContact.textContent = 'Contact';
  pageNav.appendChild(navTabContact);
  navTabContact.addEventListener('click', function(){Object(_contactTab__WEBPACK_IMPORTED_MODULE_2__["contactTab"])(contentBox)});
  
  let navTabEvents = document.createElement('span');
  navTabEvents.setAttribute('class', 'nav-tab');
  navTabEvents.setAttribute('id', 'nav-events');
  navTabEvents.textContent = 'Events';
  pageNav.appendChild(navTabEvents);
  navTabEvents.addEventListener('click', function(){Object(_eventsTab__WEBPACK_IMPORTED_MODULE_3__["eventsTab"])(contentBox)});
  
  contentBox.setAttribute('id', 'content-box');
  
  contentWrapper.appendChild(title);
  contentWrapper.appendChild(tabDivider);
  contentWrapper.appendChild(pageNav);
  contentWrapper.appendChild(tabDivider.cloneNode(true));
  contentWrapper.appendChild(contentBox);
  
  content.appendChild(contentWrapper);
  
  Object(_aboutTab__WEBPACK_IMPORTED_MODULE_0__["aboutTab"])(contentBox);
};

populate(content);

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/*! exports provided: menuTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuTab", function() { return menuTab; });
const menuTab = (contentBox) => {
  while (contentBox.firstChild){
    contentBox.removeChild(contentBox.firstChild);
  };
  
  let menuTitle = document.createElement('h3');
  menuTitle.setAttribute('class', 'mini-title');
  menuTitle.textContent = "Menu";
  contentBox.appendChild(menuTitle);
  
  let menuItem = document.createElement('p');
  menuItem.setAttribute('class', 'menu-item');
  menuItem.textContent = "All The Chili You Can Inhale - $39";
  contentBox.appendChild(menuItem);
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0VGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWN0VGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHNUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51VGFiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBLGtDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0Q7QUFDRztBQUNEOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMERBQVEsYUFBYTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx3REFBTyxhQUFhOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDhEQUFVLGFBQWE7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsNERBQVMsYUFBYTs7QUFFMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLDBEQUFRO0FBQ1Y7O0FBRUEsa0I7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBhYm91dFRhYiA9IChjb250ZW50Qm94KSA9PiB7ICBcbiAgd2hpbGUgKGNvbnRlbnRCb3guZmlyc3RDaGlsZCl7XG4gICAgY29udGVudEJveC5yZW1vdmVDaGlsZChjb250ZW50Qm94LmZpcnN0Q2hpbGQpO1xuICB9O1xuICBcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJDb21lIG9uIGRvd24gdG8gVGhlIENoaWxpIFRyb3VnaCEgV2UgZ290IGNoaWxpLCBjaGVkZGFyIGNoZWVzZSwgYmFncyBvZiBGcml0b3MsIHNvdXIgY3JlYW0sIHNhbHNhLCBob3Qgc2F1Y2UsIGFuZCB3aGF0IHlvdSBkbyBpcywgeW91IGp1c3Qgc211c2ggaXQgdXAgaW4gYSBib3dsIGFuZCB0YWtlIGEgbGFyZ2Ugc3RyYXcsIGFuZCBpbmhhbGUgaXQgYWxsIVwiO1xuICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgXG4gIGxldCBjaGlsaVBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNoaWxpUGhvdG8uc2V0QXR0cmlidXRlKCdpZCcsICAnY2hpbGktcGhvdG8nKTtcbiAgY2hpbGlQaG90by5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL3N0YXRpYy9jaGlsaS5qcGcnKTtcbiAgY29udGVudEJveC5hcHBlbmRDaGlsZChjaGlsaVBob3RvKTtcbn07XG5cbmV4cG9ydCB7IGFib3V0VGFiIH07IiwiY29uc3QgY29udGFjdFRhYiA9IChjb250ZW50Qm94KSA9PiB7XG4gIHdoaWxlIChjb250ZW50Qm94LmZpcnN0Q2hpbGQpe1xuICAgIGNvbnRlbnRCb3gucmVtb3ZlQ2hpbGQoY29udGVudEJveC5maXJzdENoaWxkKTtcbiAgfTtcbiAgXG4gIGxldCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb250YWN0VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtaW5pLXRpdGxlJyk7XG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiRHJvcCBVcyBBIExpbmUhXCI7XG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgXG4gIGxldCBjb250YWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29udGFjdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRyZXNzLWl0ZW0nKTtcbiAgY29udGFjdEl0ZW0udGV4dENvbnRlbnQgPSBcIlBob25lOiAoMjEyKTU1NS0zMjMyXCI7XG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoY29udGFjdEl0ZW0pO1xuICBcbiAgY29udGFjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnRhY3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkcmVzcy1pdGVtJyk7XG4gIGNvbnRhY3RJdGVtLnRleHRDb250ZW50ID0gXCIzMTA0IE9sZCBNaXNzaW9uIEJsdmRcIjtcbiAgY29udGVudEJveC5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG4gIFxuICBjb250YWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29udGFjdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRyZXNzLWl0ZW0nKTtcbiAgY29udGFjdEl0ZW0udGV4dENvbnRlbnQgPSBcIlNwaWNldmlsbGUsIENPXCI7XG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoY29udGFjdEl0ZW0pO1xufTtcblxuZXhwb3J0IHsgY29udGFjdFRhYiB9OyIsImNvbnN0IGV2ZW50c1RhYiA9IChjb250ZW50Qm94KSA9PiB7XG4gIHdoaWxlIChjb250ZW50Qm94LmZpcnN0Q2hpbGQpe1xuICAgIGNvbnRlbnRCb3gucmVtb3ZlQ2hpbGQoY29udGVudEJveC5maXJzdENoaWxkKTtcbiAgfTtcbiAgXG4gIGxldCBldmVudHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGV2ZW50c1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWluaS10aXRsZScpO1xuICBldmVudHNUaXRsZS50ZXh0Q29udGVudCA9IFwiVXBjb21pbmcgRXZlbnRzXCI7XG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoZXZlbnRzVGl0bGUpO1xuICBcbiAgbGV0IGV2ZW50c0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGV2ZW50c0l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdldmVudHMtaXRlbScpO1xuICBldmVudHNJdGVtLnRleHRDb250ZW50ID0gXCJGZWIgMjI6IFRoZSBHcmVhdCBDaGlsaSBDaHVnXCI7XG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoZXZlbnRzSXRlbSk7XG4gIFxuICBldmVudHNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBldmVudHNJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZXZlbnRzLWl0ZW0nKTtcbiAgZXZlbnRzSXRlbS50ZXh0Q29udGVudCA9IFwiRmViIDIzOiBUaGUgR3JlYXQgVG9pbGV0IEh1Z1wiO1xuICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGV2ZW50c0l0ZW0pO1xuICBcbiAgZXZlbnRzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZXZlbnRzSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2V2ZW50cy1pdGVtJyk7XG4gIGV2ZW50c0l0ZW0udGV4dENvbnRlbnQgPSBcIk1hciAxMTogU3BpY3kgUGVwcGVyIEVhdGluZyBDb250ZXN0XCI7XG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoZXZlbnRzSXRlbSk7XG59O1xuXG5leHBvcnQgeyBldmVudHNUYWIgfTsiLCJpbXBvcnQgeyBhYm91dFRhYiB9ICAgZnJvbSAnLi9hYm91dFRhYidcbmltcG9ydCB7IG1lbnVUYWIgfSAgICBmcm9tICcuL21lbnVUYWInXG5pbXBvcnQgeyBjb250YWN0VGFiIH0gZnJvbSAnLi9jb250YWN0VGFiJ1xuaW1wb3J0IHsgZXZlbnRzVGFiIH0gIGZyb20gJy4vZXZlbnRzVGFiJ1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZnVuY3Rpb24gcG9wdWxhdGUoY29udGVudCl7XG4gIGxldCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQtd3JhcHBlcicpO1xuICBcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaGUgQ2hpbGkgVHJvdWdoJztcbiAgXG4gIGxldCB0YWJEaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGFiRGl2aWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RhYi1kaXZpZGVyJyk7XG4gIFxuICBsZXQgcGFnZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBwYWdlTmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAncGFnZS1uYXYnKTtcbiAgXG4gIGxldCBuYXZUYWJBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbmF2VGFiQWJvdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtdGFiJyk7XG4gIG5hdlRhYkFib3V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWFib3V0Jyk7XG4gIG5hdlRhYkFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgcGFnZU5hdi5hcHBlbmRDaGlsZChuYXZUYWJBYm91dCk7XG4gIG5hdlRhYkFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXthYm91dFRhYihjb250ZW50Qm94KX0pO1xuICBcbiAgbGV0IG5hdlRhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIG5hdlRhYk1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtdGFiJyk7XG4gIG5hdlRhYk1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICduYXYtbWVudScpO1xuICBuYXZUYWJNZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBwYWdlTmF2LmFwcGVuZENoaWxkKG5hdlRhYk1lbnUpO1xuICBuYXZUYWJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXttZW51VGFiKGNvbnRlbnRCb3gpfSk7XG4gIFxuICBsZXQgbmF2VGFiQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbmF2VGFiQ29udGFjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi10YWInKTtcbiAgbmF2VGFiQ29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1jb250YWN0Jyk7XG4gIG5hdlRhYkNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIHBhZ2VOYXYuYXBwZW5kQ2hpbGQobmF2VGFiQ29udGFjdCk7XG4gIG5hdlRhYkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe2NvbnRhY3RUYWIoY29udGVudEJveCl9KTtcbiAgXG4gIGxldCBuYXZUYWJFdmVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIG5hdlRhYkV2ZW50cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi10YWInKTtcbiAgbmF2VGFiRXZlbnRzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWV2ZW50cycpO1xuICBuYXZUYWJFdmVudHMudGV4dENvbnRlbnQgPSAnRXZlbnRzJztcbiAgcGFnZU5hdi5hcHBlbmRDaGlsZChuYXZUYWJFdmVudHMpO1xuICBuYXZUYWJFdmVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe2V2ZW50c1RhYihjb250ZW50Qm94KX0pO1xuICBcbiAgY29udGVudEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQtYm94Jyk7XG4gIFxuICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRhYkRpdmlkZXIpO1xuICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChwYWdlTmF2KTtcbiAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGFiRGl2aWRlci5jbG9uZU5vZGUodHJ1ZSkpO1xuICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50Qm94KTtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFdyYXBwZXIpO1xuICBcbiAgYWJvdXRUYWIoY29udGVudEJveCk7XG59O1xuXG5wb3B1bGF0ZShjb250ZW50KTsiLCJjb25zdCBtZW51VGFiID0gKGNvbnRlbnRCb3gpID0+IHtcbiAgd2hpbGUgKGNvbnRlbnRCb3guZmlyc3RDaGlsZCl7XG4gICAgY29udGVudEJveC5yZW1vdmVDaGlsZChjb250ZW50Qm94LmZpcnN0Q2hpbGQpO1xuICB9O1xuICBcbiAgbGV0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIG1lbnVUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21pbmktdGl0bGUnKTtcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgXG4gIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudUl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSBcIkFsbCBUaGUgQ2hpbGkgWW91IENhbiBJbmhhbGUgLSAkMzlcIjtcbiAgY29udGVudEJveC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG59O1xuXG5leHBvcnQgeyBtZW51VGFiIH07Il0sInNvdXJjZVJvb3QiOiIifQ==