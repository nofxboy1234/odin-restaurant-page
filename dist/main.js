/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showContact: () => (/* binding */ showContact)
/* harmony export */ });
const showContact = (parent) => {
  const div = document.createElement('div');
  div.textContent = 'Contact';
  parent.appendChild(div)
};




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showHome: () => (/* binding */ showHome)
/* harmony export */ });
const addWelcome = (parent, messages) => {
  messages.forEach((text) => {
    const div = document.createElement('div');
    div.classList.add('welcome');
    div.textContent = text;
    parent.appendChild(div);
  });
};

const messages = () => {
  const messages = [];
  messages.push('Welcome to RESTAURANT.');
  messages.push("We've been around since the beginning of time.");
  messages.push('We look forward to seeing you soon.');
  return messages;
};

const showHome = (parent) => {
  addWelcome(parent, messages());
};




/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentHolder: () => (/* binding */ contentHolder),
/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)
/* harmony export */ });
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



const createContentHolder = () => {
  const div = document.createElement('div');
  div.id = 'content-holder';
  return div;
};

const addContentHolder = (content) => {
  content.appendChild(contentHolder);
};

const initialPageLoad = (content) => {
  (0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.addNavMenu)(content);
  addContentHolder(content);
  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.showHome)(contentHolder);
};

const contentHolder = createContentHolder();




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showMenu: () => (/* binding */ showMenu)
/* harmony export */ });
const showMenu = (parent) => {
  const div = document.createElement('div');
  div.textContent = 'Menu';
  parent.appendChild(div)
};




/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNavMenu: () => (/* binding */ addNavMenu),
/* harmony export */   contact: () => (/* binding */ contact),
/* harmony export */   foodMenu: () => (/* binding */ foodMenu),
/* harmony export */   home: () => (/* binding */ home),
/* harmony export */   homeSelected: () => (/* binding */ homeSelected),
/* harmony export */   logo: () => (/* binding */ logo)
/* harmony export */ });
const createLogo = () => {
  const img = document.createElement('img');
  img.src = 'restaurant.png';
  img.alt = 'restaurant logo';
  img.id = 'logo';

  const div = document.createElement('div');
  div.appendChild(img);
  return div;
};

const addLogo = (menu) => {
  menu.appendChild(logo);
};

const createHomeSelected = () => {
  const selected_img = document.createElement('img');
  selected_img.src = 'menu_selected.png';
  selected_img.classList.add('menu-item-back-layer');
  return selected_img;
};

const createHome = () => {
  const img = document.createElement('img');
  img.src = 'home.png';
  img.alt = 'home-image';
  img.classList.add('menu-item');

  const div = document.createElement('div');
  div.classList.add('menu-item-container');
  div.appendChild(img);
  div.appendChild(homeSelected);
  return div;
};

const addHome = (menu) => {
  menu.appendChild(home);
};

const createFoodMenu = () => {
  const img = document.createElement('img');
  img.src = 'menu.png';
  img.alt = 'menu-image';
  img.classList.add('menu-item');

  const div = document.createElement('div');
  div.appendChild(img);
  return div;
};

const addFoodMenu = (menu) => {
  menu.appendChild(foodMenu);
};

const createContact = () => {
  const img = document.createElement('img');
  img.src = 'contact.png';
  img.alt = 'contact-image';
  img.classList.add('menu-item');

  const div = document.createElement('div');
  div.appendChild(img);
  return div;
};

const addContact = (menu) => {
  menu.appendChild(contact);
};

const createNavMenu = () => {
  const div = document.createElement('div');
  div.classList.add('flex-container');
  return div;
};

const addNavMenu = (content) => {
  addLogo(navMenu);
  addHome(navMenu);
  addFoodMenu(navMenu);
  addContact(navMenu);

  content.appendChild(navMenu);
};

const navMenu = createNavMenu();
const logo = createLogo();
const homeSelected = createHomeSelected();
const home = createHome();
const foodMenu = createFoodMenu();
const contact = createContact();




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ "./src/initial.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");







const clearContent = () => {
  while (_initial_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.firstChild) {
    _initial_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.removeChild(_initial_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder.lastChild);
  }
};

const callShowHome = () => {
  clearContent();
  (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.showHome)(_initial_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder);
};

const callShowHomeSelected = () => {
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.toggle('menu-item-back-layer');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.toggle('menu-item-back-layer-offset');
};

const callHideHomeSelected = () => {
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.toggle('menu-item-back-layer');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.toggle('menu-item-back-layer-offset');
};

const callShowMenu = () => {
  clearContent();
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.showMenu)(_initial_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder);
};

const callShowContact = () => {
  clearContent();
  (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.showContact)(_initial_js__WEBPACK_IMPORTED_MODULE_0__.contentHolder);
};

const setupEventListeners = () => {
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.logo.addEventListener('click', callShowHome);

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.home.addEventListener('click', callShowHome);
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.home.addEventListener('mouseover', callShowHomeSelected);
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.home.addEventListener('mouseout', callHideHomeSelected);

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenu.addEventListener('click', callShowMenu);
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contact.addEventListener('click', callShowContact);
};

const content = document.querySelector('#content');
(0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)(content);
setupEventListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7QUNOdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCa0I7QUFDRDs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7QUFDQSxFQUFFLGtEQUFRO0FBQ1Y7O0FBRUE7O0FBRTBDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQjFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05wQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUU7Ozs7Ozs7VUMzRm5FO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjhEO0FBQ1M7O0FBRWxDO0FBQ0E7QUFDTTs7QUFFM0M7QUFDQSxTQUFTLHNEQUFhO0FBQ3RCLElBQUksc0RBQWEsYUFBYSxzREFBYTtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGtEQUFRLENBQUMsc0RBQWE7QUFDeEI7O0FBRUE7QUFDQSxFQUFFLGlEQUFZO0FBQ2QsRUFBRSxpREFBWTtBQUNkOztBQUVBO0FBQ0EsRUFBRSxpREFBWTtBQUNkLEVBQUUsaURBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxrREFBUSxDQUFDLHNEQUFhO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXLENBQUMsc0RBQWE7QUFDM0I7O0FBRUE7QUFDQSxFQUFFLHlDQUFJOztBQUVOLEVBQUUseUNBQUk7QUFDTixFQUFFLHlDQUFJO0FBQ04sRUFBRSx5Q0FBSTs7QUFFTixFQUFFLDZDQUFRO0FBQ1YsRUFBRSw0Q0FBTztBQUNUOztBQUVBO0FBQ0EsNERBQWU7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hvd0NvbnRhY3QgPSAocGFyZW50KSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpXG59O1xuXG5leHBvcnQgeyBzaG93Q29udGFjdCB9O1xuIiwiY29uc3QgYWRkV2VsY29tZSA9IChwYXJlbnQsIG1lc3NhZ2VzKSA9PiB7XG4gIG1lc3NhZ2VzLmZvckVhY2goKHRleHQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xufTtcblxuY29uc3QgbWVzc2FnZXMgPSAoKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gIG1lc3NhZ2VzLnB1c2goJ1dlbGNvbWUgdG8gUkVTVEFVUkFOVC4nKTtcbiAgbWVzc2FnZXMucHVzaChcIldlJ3ZlIGJlZW4gYXJvdW5kIHNpbmNlIHRoZSBiZWdpbm5pbmcgb2YgdGltZS5cIik7XG4gIG1lc3NhZ2VzLnB1c2goJ1dlIGxvb2sgZm9yd2FyZCB0byBzZWVpbmcgeW91IHNvb24uJyk7XG4gIHJldHVybiBtZXNzYWdlcztcbn07XG5cbmNvbnN0IHNob3dIb21lID0gKHBhcmVudCkgPT4ge1xuICBhZGRXZWxjb21lKHBhcmVudCwgbWVzc2FnZXMoKSk7XG59O1xuXG5leHBvcnQgeyBzaG93SG9tZSB9O1xuIiwiaW1wb3J0IHsgYWRkTmF2TWVudSB9IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCB7IHNob3dIb21lIH0gZnJvbSAnLi9ob21lLmpzJztcblxuY29uc3QgY3JlYXRlQ29udGVudEhvbGRlciA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pZCA9ICdjb250ZW50LWhvbGRlcic7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRDb250ZW50SG9sZGVyID0gKGNvbnRlbnQpID0+IHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50SG9sZGVyKTtcbn07XG5cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9IChjb250ZW50KSA9PiB7XG4gIGFkZE5hdk1lbnUoY29udGVudCk7XG4gIGFkZENvbnRlbnRIb2xkZXIoY29udGVudCk7XG4gIHNob3dIb21lKGNvbnRlbnRIb2xkZXIpO1xufTtcblxuY29uc3QgY29udGVudEhvbGRlciA9IGNyZWF0ZUNvbnRlbnRIb2xkZXIoKTtcblxuZXhwb3J0IHsgaW5pdGlhbFBhZ2VMb2FkLCBjb250ZW50SG9sZGVyIH07XG4iLCJjb25zdCBzaG93TWVudSA9IChwYXJlbnQpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgcGFyZW50LmFwcGVuZENoaWxkKGRpdilcbn07XG5cbmV4cG9ydCB7IHNob3dNZW51IH07XG4iLCJjb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9ICdyZXN0YXVyYW50LnBuZyc7XG4gIGltZy5hbHQgPSAncmVzdGF1cmFudCBsb2dvJztcbiAgaW1nLmlkID0gJ2xvZ28nO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZExvZ28gPSAobWVudSkgPT4ge1xuICBtZW51LmFwcGVuZENoaWxkKGxvZ28pO1xufTtcblxuY29uc3QgY3JlYXRlSG9tZVNlbGVjdGVkID0gKCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2VsZWN0ZWRfaW1nLnNyYyA9ICdtZW51X3NlbGVjdGVkLnBuZyc7XG4gIHNlbGVjdGVkX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xuICByZXR1cm4gc2VsZWN0ZWRfaW1nO1xufTtcblxuY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAnaG9tZS5wbmcnO1xuICBpbWcuYWx0ID0gJ2hvbWUtaW1hZ2UnO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaG9tZVNlbGVjdGVkKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZEhvbWUgPSAobWVudSkgPT4ge1xuICBtZW51LmFwcGVuZENoaWxkKGhvbWUpO1xufTtcblxuY29uc3QgY3JlYXRlRm9vZE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3JjID0gJ21lbnUucG5nJztcbiAgaW1nLmFsdCA9ICdtZW51LWltYWdlJztcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZEZvb2RNZW51ID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChmb29kTWVudSk7XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9ICdjb250YWN0LnBuZyc7XG4gIGltZy5hbHQgPSAnY29udGFjdC1pbWFnZSc7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRDb250YWN0ID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChjb250YWN0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnZmxleC1jb250YWluZXInKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZE5hdk1lbnUgPSAoY29udGVudCkgPT4ge1xuICBhZGRMb2dvKG5hdk1lbnUpO1xuICBhZGRIb21lKG5hdk1lbnUpO1xuICBhZGRGb29kTWVudShuYXZNZW51KTtcbiAgYWRkQ29udGFjdChuYXZNZW51KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdk1lbnUpO1xufTtcblxuY29uc3QgbmF2TWVudSA9IGNyZWF0ZU5hdk1lbnUoKTtcbmNvbnN0IGxvZ28gPSBjcmVhdGVMb2dvKCk7XG5jb25zdCBob21lU2VsZWN0ZWQgPSBjcmVhdGVIb21lU2VsZWN0ZWQoKTtcbmNvbnN0IGhvbWUgPSBjcmVhdGVIb21lKCk7XG5jb25zdCBmb29kTWVudSA9IGNyZWF0ZUZvb2RNZW51KCk7XG5jb25zdCBjb250YWN0ID0gY3JlYXRlQ29udGFjdCgpO1xuXG5leHBvcnQgeyBhZGROYXZNZW51LCBsb2dvLCBob21lLCBob21lU2VsZWN0ZWQsIGZvb2RNZW51LCBjb250YWN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxQYWdlTG9hZCwgY29udGVudEhvbGRlciB9IGZyb20gJy4vaW5pdGlhbC5qcyc7XG5pbXBvcnQgeyBsb2dvLCBob21lLCBob21lU2VsZWN0ZWQsIGZvb2RNZW51LCBjb250YWN0IH0gZnJvbSAnLi9uYXYuanMnO1xuXG5pbXBvcnQgeyBzaG93SG9tZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBzaG93TWVudSB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBzaG93Q29udGFjdCB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgd2hpbGUgKGNvbnRlbnRIb2xkZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnRIb2xkZXIucmVtb3ZlQ2hpbGQoY29udGVudEhvbGRlci5sYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjYWxsU2hvd0hvbWUgPSAoKSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBzaG93SG9tZShjb250ZW50SG9sZGVyKTtcbn07XG5cbmNvbnN0IGNhbGxTaG93SG9tZVNlbGVjdGVkID0gKCkgPT4ge1xuICBob21lU2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtLWJhY2stbGF5ZXInKTtcbiAgaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaXRlbS1iYWNrLWxheWVyLW9mZnNldCcpO1xufTtcblxuY29uc3QgY2FsbEhpZGVIb21lU2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGhvbWVTZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xuICBob21lU2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtLWJhY2stbGF5ZXItb2Zmc2V0Jyk7XG59O1xuXG5jb25zdCBjYWxsU2hvd01lbnUgPSAoKSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBzaG93TWVudShjb250ZW50SG9sZGVyKTtcbn07XG5cbmNvbnN0IGNhbGxTaG93Q29udGFjdCA9ICgpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIHNob3dDb250YWN0KGNvbnRlbnRIb2xkZXIpO1xufTtcblxuY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93SG9tZSk7XG5cbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93SG9tZSk7XG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgY2FsbFNob3dIb21lU2VsZWN0ZWQpO1xuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgY2FsbEhpZGVIb21lU2VsZWN0ZWQpO1xuXG4gIGZvb2RNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dNZW51KTtcbiAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93Q29udGFjdCk7XG59O1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmluaXRpYWxQYWdlTG9hZChjb250ZW50KTtcbnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==