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
/* harmony export */   contactSelected: () => (/* binding */ contactSelected),
/* harmony export */   foodMenu: () => (/* binding */ foodMenu),
/* harmony export */   foodMenuSelected: () => (/* binding */ foodMenuSelected),
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

const createFoodMenuSelected = () => {
  const selected_img = document.createElement('img');
  selected_img.src = 'menu_selected.png';
  selected_img.classList.add('menu-item-back-layer');
  return selected_img;
};

const createFoodMenu = () => {
  const img = document.createElement('img');
  img.src = 'menu.png';
  img.alt = 'menu-image';
  img.classList.add('menu-item');

  const div = document.createElement('div');
  div.classList.add('menu-item-container');
  div.appendChild(img);
  div.appendChild(foodMenuSelected);
  return div;
};

const addFoodMenu = (menu) => {
  menu.appendChild(foodMenu);
};

const createContactSelected = () => {
  const selected_img = document.createElement('img');
  selected_img.src = 'menu_selected.png';
  selected_img.classList.add('menu-item-back-layer');
  return selected_img;
};

const createContact = () => {
  const img = document.createElement('img');
  img.src = 'contact.png';
  img.alt = 'contact-image';
  img.classList.add('menu-item');

  const div = document.createElement('div');
  div.classList.add('menu-item-container');
  div.appendChild(img);
  div.appendChild(contactSelected);
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
const foodMenuSelected = createFoodMenuSelected();
const foodMenu = createFoodMenu();
const contactSelected = createContactSelected();
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
  if (_nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.contains('menu-item-back-layer-offset')) {
    return;
  }

  hideAllBackLayers();

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.toggle('menu-item-back-layer');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.toggle('menu-item-back-layer-offset');
};

const callShowMenuSelected = () => {
  if (_nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.contains('menu-item-back-layer-offset')) {
    return;
  }

  hideAllBackLayers();

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.toggle('menu-item-back-layer');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.toggle('menu-item-back-layer-offset');
};

const callShowContactSelected = () => {
  if (_nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.contains('menu-item-back-layer-offset')) {
    return;
  }

  hideAllBackLayers();

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.toggle('menu-item-back-layer');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.toggle('menu-item-back-layer-offset');
};

const hideAllBackLayers = () => {
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.remove('menu-item-back-layer-offset');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.add('menu-item-back-layer');

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.remove('menu-item-back-layer-offset');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.add('menu-item-back-layer');

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.remove('menu-item-back-layer-offset');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.add('menu-item-back-layer');
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
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.home.addEventListener('click', callShowHomeSelected);

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenu.addEventListener('click', callShowMenu);
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenu.addEventListener('click', callShowMenuSelected);

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contact.addEventListener('click', callShowContact);
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contact.addEventListener('click', callShowContactSelected);
};

const content = document.querySelector('#content');
(0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)(content);
setupEventListeners();
callShowHomeSelected();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7QUFDVixFQUFFLDZDQUFROztBQUVWLEVBQUUsNENBQU87QUFDVCxFQUFFLDRDQUFPO0FBQ1Q7O0FBRUE7QUFDQSw0REFBZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNob3dDb250YWN0ID0gKHBhcmVudCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KVxufTtcblxuZXhwb3J0IHsgc2hvd0NvbnRhY3QgfTtcbiIsImNvbnN0IGFkZFdlbGNvbWUgPSAocGFyZW50LCBtZXNzYWdlcykgPT4ge1xuICBtZXNzYWdlcy5mb3JFYWNoKCh0ZXh0KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbn07XG5cbmNvbnN0IG1lc3NhZ2VzID0gKCkgPT4ge1xuICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICBtZXNzYWdlcy5wdXNoKCdXZWxjb21lIHRvIFJFU1RBVVJBTlQuJyk7XG4gIG1lc3NhZ2VzLnB1c2goXCJXZSd2ZSBiZWVuIGFyb3VuZCBzaW5jZSB0aGUgYmVnaW5uaW5nIG9mIHRpbWUuXCIpO1xuICBtZXNzYWdlcy5wdXNoKCdXZSBsb29rIGZvcndhcmQgdG8gc2VlaW5nIHlvdSBzb29uLicpO1xuICByZXR1cm4gbWVzc2FnZXM7XG59O1xuXG5jb25zdCBzaG93SG9tZSA9IChwYXJlbnQpID0+IHtcbiAgYWRkV2VsY29tZShwYXJlbnQsIG1lc3NhZ2VzKCkpO1xufTtcblxuZXhwb3J0IHsgc2hvd0hvbWUgfTtcbiIsImltcG9ydCB7IGFkZE5hdk1lbnUgfSBmcm9tICcuL25hdi5qcyc7XG5pbXBvcnQgeyBzaG93SG9tZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5cbmNvbnN0IGNyZWF0ZUNvbnRlbnRIb2xkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaWQgPSAnY29udGVudC1ob2xkZXInO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkQ29udGVudEhvbGRlciA9IChjb250ZW50KSA9PiB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoY29udGVudCkgPT4ge1xuICBhZGROYXZNZW51KGNvbnRlbnQpO1xuICBhZGRDb250ZW50SG9sZGVyKGNvbnRlbnQpO1xuICBzaG93SG9tZShjb250ZW50SG9sZGVyKTtcbn07XG5cbmNvbnN0IGNvbnRlbnRIb2xkZXIgPSBjcmVhdGVDb250ZW50SG9sZGVyKCk7XG5cbmV4cG9ydCB7IGluaXRpYWxQYWdlTG9hZCwgY29udGVudEhvbGRlciB9O1xuIiwiY29uc3Qgc2hvd01lbnUgPSAocGFyZW50KSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpXG59O1xuXG5leHBvcnQgeyBzaG93TWVudSB9O1xuIiwiY29uc3QgY3JlYXRlTG9nbyA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAncmVzdGF1cmFudC5wbmcnO1xuICBpbWcuYWx0ID0gJ3Jlc3RhdXJhbnQgbG9nbyc7XG4gIGltZy5pZCA9ICdsb2dvJztcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRMb2dvID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChsb2dvKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhvbWVTZWxlY3RlZCA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNlbGVjdGVkX2ltZy5zcmMgPSAnbWVudV9zZWxlY3RlZC5wbmcnO1xuICBzZWxlY3RlZF9pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWJhY2stbGF5ZXInKTtcbiAgcmV0dXJuIHNlbGVjdGVkX2ltZztcbn07XG5cbmNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3JjID0gJ2hvbWUucG5nJztcbiAgaW1nLmFsdCA9ICdob21lLWltYWdlJztcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgZGl2LmFwcGVuZENoaWxkKGhvbWVTZWxlY3RlZCk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRIb21lID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChob21lKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb2RNZW51U2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzZWxlY3RlZF9pbWcuc3JjID0gJ21lbnVfc2VsZWN0ZWQucG5nJztcbiAgc2VsZWN0ZWRfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG4gIHJldHVybiBzZWxlY3RlZF9pbWc7XG59O1xuXG5jb25zdCBjcmVhdGVGb29kTWVudSA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAnbWVudS5wbmcnO1xuICBpbWcuYWx0ID0gJ21lbnUtaW1hZ2UnO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZm9vZE1lbnVTZWxlY3RlZCk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRGb29kTWVudSA9IChtZW51KSA9PiB7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZm9vZE1lbnUpO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdFNlbGVjdGVkID0gKCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2VsZWN0ZWRfaW1nLnNyYyA9ICdtZW51X3NlbGVjdGVkLnBuZyc7XG4gIHNlbGVjdGVkX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xuICByZXR1cm4gc2VsZWN0ZWRfaW1nO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAnY29udGFjdC5wbmcnO1xuICBpbWcuYWx0ID0gJ2NvbnRhY3QtaW1hZ2UnO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdFNlbGVjdGVkKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZENvbnRhY3QgPSAobWVudSkgPT4ge1xuICBtZW51LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xufTtcblxuY29uc3QgY3JlYXRlTmF2TWVudSA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbnRhaW5lcicpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkTmF2TWVudSA9IChjb250ZW50KSA9PiB7XG4gIGFkZExvZ28obmF2TWVudSk7XG4gIGFkZEhvbWUobmF2TWVudSk7XG4gIGFkZEZvb2RNZW51KG5hdk1lbnUpO1xuICBhZGRDb250YWN0KG5hdk1lbnUpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2TWVudSk7XG59O1xuXG5jb25zdCBuYXZNZW51ID0gY3JlYXRlTmF2TWVudSgpO1xuY29uc3QgbG9nbyA9IGNyZWF0ZUxvZ28oKTtcbmNvbnN0IGhvbWVTZWxlY3RlZCA9IGNyZWF0ZUhvbWVTZWxlY3RlZCgpO1xuY29uc3QgaG9tZSA9IGNyZWF0ZUhvbWUoKTtcbmNvbnN0IGZvb2RNZW51U2VsZWN0ZWQgPSBjcmVhdGVGb29kTWVudVNlbGVjdGVkKCk7XG5jb25zdCBmb29kTWVudSA9IGNyZWF0ZUZvb2RNZW51KCk7XG5jb25zdCBjb250YWN0U2VsZWN0ZWQgPSBjcmVhdGVDb250YWN0U2VsZWN0ZWQoKTtcbmNvbnN0IGNvbnRhY3QgPSBjcmVhdGVDb250YWN0KCk7XG5cbmV4cG9ydCB7XG4gIGFkZE5hdk1lbnUsXG4gIGxvZ28sXG4gIGhvbWUsXG4gIGZvb2RNZW51LFxuICBjb250YWN0LFxuICBob21lU2VsZWN0ZWQsXG4gIGZvb2RNZW51U2VsZWN0ZWQsXG4gIGNvbnRhY3RTZWxlY3RlZCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxQYWdlTG9hZCwgY29udGVudEhvbGRlciB9IGZyb20gJy4vaW5pdGlhbC5qcyc7XG5pbXBvcnQge1xuICBsb2dvLFxuICBob21lLFxuICBmb29kTWVudSxcbiAgY29udGFjdCxcbiAgaG9tZVNlbGVjdGVkLFxuICBmb29kTWVudVNlbGVjdGVkLFxuICBjb250YWN0U2VsZWN0ZWQsXG59IGZyb20gJy4vbmF2LmpzJztcblxuaW1wb3J0IHsgc2hvd0hvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgc2hvd01lbnUgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgc2hvd0NvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gIHdoaWxlIChjb250ZW50SG9sZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50SG9sZGVyLnJlbW92ZUNoaWxkKGNvbnRlbnRIb2xkZXIubGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY2FsbFNob3dIb21lID0gKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgc2hvd0hvbWUoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBjYWxsU2hvd0hvbWVTZWxlY3RlZCA9ICgpID0+IHtcbiAgaWYgKGhvbWVTZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXRlbS1iYWNrLWxheWVyLW9mZnNldCcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaGlkZUFsbEJhY2tMYXllcnMoKTtcblxuICBob21lU2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtLWJhY2stbGF5ZXInKTtcbiAgaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaXRlbS1iYWNrLWxheWVyLW9mZnNldCcpO1xufTtcblxuY29uc3QgY2FsbFNob3dNZW51U2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGlmIChmb29kTWVudVNlbGVjdGVkLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pdGVtLWJhY2stbGF5ZXItb2Zmc2V0JykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBoaWRlQWxsQmFja0xheWVycygpO1xuXG4gIGZvb2RNZW51U2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtLWJhY2stbGF5ZXInKTtcbiAgZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWl0ZW0tYmFjay1sYXllci1vZmZzZXQnKTtcbn07XG5cbmNvbnN0IGNhbGxTaG93Q29udGFjdFNlbGVjdGVkID0gKCkgPT4ge1xuICBpZiAoY29udGFjdFNlbGVjdGVkLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pdGVtLWJhY2stbGF5ZXItb2Zmc2V0JykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBoaWRlQWxsQmFja0xheWVycygpO1xuXG4gIGNvbnRhY3RTZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xuICBjb250YWN0U2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtLWJhY2stbGF5ZXItb2Zmc2V0Jyk7XG59O1xuXG5jb25zdCBoaWRlQWxsQmFja0xheWVycyA9ICgpID0+IHtcbiAgaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaXRlbS1iYWNrLWxheWVyLW9mZnNldCcpO1xuICBob21lU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWJhY2stbGF5ZXInKTtcblxuICBmb29kTWVudVNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaXRlbS1iYWNrLWxheWVyLW9mZnNldCcpO1xuICBmb29kTWVudVNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG5cbiAgY29udGFjdFNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaXRlbS1iYWNrLWxheWVyLW9mZnNldCcpO1xuICBjb250YWN0U2VsZWN0ZWQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWJhY2stbGF5ZXInKTtcbn07XG5cbmNvbnN0IGNhbGxTaG93TWVudSA9ICgpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIHNob3dNZW51KGNvbnRlbnRIb2xkZXIpO1xufTtcblxuY29uc3QgY2FsbFNob3dDb250YWN0ID0gKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgc2hvd0NvbnRhY3QoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dIb21lKTtcblxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dIb21lKTtcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93SG9tZVNlbGVjdGVkKTtcblxuICBmb29kTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93TWVudSk7XG4gIGZvb2RNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dNZW51U2VsZWN0ZWQpO1xuXG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsU2hvd0NvbnRhY3QpO1xuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dDb250YWN0U2VsZWN0ZWQpO1xufTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5pbml0aWFsUGFnZUxvYWQoY29udGVudCk7XG5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG5jYWxsU2hvd0hvbWVTZWxlY3RlZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9