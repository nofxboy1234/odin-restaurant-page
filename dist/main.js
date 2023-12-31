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
  div.appendChild(img);
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
    return
  }

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.toggle('menu-item-back-layer');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.toggle('menu-item-back-layer-offset');
};

const callShowMenuSelected = () => {
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.toggle('menu-item-back-layer');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.toggle('menu-item-back-layer-offset');
};

const callShowContactSelected = () => {
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.toggle('menu-item-back-layer');
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.toggle('menu-item-back-layer-offset');
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
  // home.addEventListener('mouseover', callShowHomeSelected);
  // home.addEventListener('mouseout', callHideHomeSelected);
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.home.addEventListener('click', callShowHomeSelected);

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenu.addEventListener('click', callShowMenu);
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenu.addEventListener('click', callShowMenuSelected);

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contact.addEventListener('click', callShowContact);
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contact.addEventListener('click', callShowContactSelected);

};

const content = document.querySelector('#content');
(0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)(content);
setupEventListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7QUNOdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCa0I7QUFDRDs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7QUFDQSxFQUFFLGtEQUFRO0FBQ1Y7O0FBRUE7O0FBRTBDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQjFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdFOzs7Ozs7O1VDcEhGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjhEO0FBUzVDOztBQUVtQjtBQUNBO0FBQ007O0FBRTNDO0FBQ0EsU0FBUyxzREFBYTtBQUN0QixJQUFJLHNEQUFhLGFBQWEsc0RBQWE7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxrREFBUSxDQUFDLHNEQUFhO0FBQ3hCOztBQUVBO0FBQ0EsTUFBTSxpREFBWTtBQUNsQjtBQUNBOztBQUVBLEVBQUUsaURBQVk7QUFDZCxFQUFFLGlEQUFZO0FBQ2Q7O0FBRUE7QUFDQSxFQUFFLHFEQUFnQjtBQUNsQixFQUFFLHFEQUFnQjtBQUNsQjs7QUFFQTtBQUNBLEVBQUUsb0RBQWU7QUFDakIsRUFBRSxvREFBZTtBQUNqQjs7QUFFQTtBQUNBLEVBQUUsaURBQVk7QUFDZCxFQUFFLGlEQUFZO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBLEVBQUUsa0RBQVEsQ0FBQyxzREFBYTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx3REFBVyxDQUFDLHNEQUFhO0FBQzNCOztBQUVBO0FBQ0EsRUFBRSx5Q0FBSTs7QUFFTixFQUFFLHlDQUFJO0FBQ047QUFDQTtBQUNBLEVBQUUseUNBQUk7O0FBRU4sRUFBRSw2Q0FBUTtBQUNWLEVBQUUsNkNBQVE7O0FBRVYsRUFBRSw0Q0FBTztBQUNULEVBQUUsNENBQU87O0FBRVQ7O0FBRUE7QUFDQSw0REFBZTtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaG93Q29udGFjdCA9IChwYXJlbnQpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgcGFyZW50LmFwcGVuZENoaWxkKGRpdilcbn07XG5cbmV4cG9ydCB7IHNob3dDb250YWN0IH07XG4iLCJjb25zdCBhZGRXZWxjb21lID0gKHBhcmVudCwgbWVzc2FnZXMpID0+IHtcbiAgbWVzc2FnZXMuZm9yRWFjaCgodGV4dCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG59O1xuXG5jb25zdCBtZXNzYWdlcyA9ICgpID0+IHtcbiAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgbWVzc2FnZXMucHVzaCgnV2VsY29tZSB0byBSRVNUQVVSQU5ULicpO1xuICBtZXNzYWdlcy5wdXNoKFwiV2UndmUgYmVlbiBhcm91bmQgc2luY2UgdGhlIGJlZ2lubmluZyBvZiB0aW1lLlwiKTtcbiAgbWVzc2FnZXMucHVzaCgnV2UgbG9vayBmb3J3YXJkIHRvIHNlZWluZyB5b3Ugc29vbi4nKTtcbiAgcmV0dXJuIG1lc3NhZ2VzO1xufTtcblxuY29uc3Qgc2hvd0hvbWUgPSAocGFyZW50KSA9PiB7XG4gIGFkZFdlbGNvbWUocGFyZW50LCBtZXNzYWdlcygpKTtcbn07XG5cbmV4cG9ydCB7IHNob3dIb21lIH07XG4iLCJpbXBvcnQgeyBhZGROYXZNZW51IH0gZnJvbSAnLi9uYXYuanMnO1xuaW1wb3J0IHsgc2hvd0hvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xuXG5jb25zdCBjcmVhdGVDb250ZW50SG9sZGVyID0gKCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlkID0gJ2NvbnRlbnQtaG9sZGVyJztcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZENvbnRlbnRIb2xkZXIgPSAoY29udGVudCkgPT4ge1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRIb2xkZXIpO1xufTtcblxuY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKGNvbnRlbnQpID0+IHtcbiAgYWRkTmF2TWVudShjb250ZW50KTtcbiAgYWRkQ29udGVudEhvbGRlcihjb250ZW50KTtcbiAgc2hvd0hvbWUoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBjb250ZW50SG9sZGVyID0gY3JlYXRlQ29udGVudEhvbGRlcigpO1xuXG5leHBvcnQgeyBpbml0aWFsUGFnZUxvYWQsIGNvbnRlbnRIb2xkZXIgfTtcbiIsImNvbnN0IHNob3dNZW51ID0gKHBhcmVudCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KVxufTtcblxuZXhwb3J0IHsgc2hvd01lbnUgfTtcbiIsImNvbnN0IGNyZWF0ZUxvZ28gPSAoKSA9PiB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3JjID0gJ3Jlc3RhdXJhbnQucG5nJztcbiAgaW1nLmFsdCA9ICdyZXN0YXVyYW50IGxvZ28nO1xuICBpbWcuaWQgPSAnbG9nbyc7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkTG9nbyA9IChtZW51KSA9PiB7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobG9nbyk7XG59O1xuXG5jb25zdCBjcmVhdGVIb21lU2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzZWxlY3RlZF9pbWcuc3JjID0gJ21lbnVfc2VsZWN0ZWQucG5nJztcbiAgc2VsZWN0ZWRfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG4gIHJldHVybiBzZWxlY3RlZF9pbWc7XG59O1xuXG5jb25zdCBjcmVhdGVIb21lID0gKCkgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9ICdob21lLnBuZyc7XG4gIGltZy5hbHQgPSAnaG9tZS1pbWFnZSc7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIGRpdi5hcHBlbmRDaGlsZChob21lU2VsZWN0ZWQpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkSG9tZSA9IChtZW51KSA9PiB7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoaG9tZSk7XG59O1xuXG5jb25zdCBjcmVhdGVGb29kTWVudVNlbGVjdGVkID0gKCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2VsZWN0ZWRfaW1nLnNyYyA9ICdtZW51X3NlbGVjdGVkLnBuZyc7XG4gIHNlbGVjdGVkX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xuICByZXR1cm4gc2VsZWN0ZWRfaW1nO1xufTtcblxuY29uc3QgY3JlYXRlRm9vZE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3JjID0gJ21lbnUucG5nJztcbiAgaW1nLmFsdCA9ICdtZW51LWltYWdlJztcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZEZvb2RNZW51ID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChmb29kTWVudSk7XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWN0U2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzZWxlY3RlZF9pbWcuc3JjID0gJ21lbnVfc2VsZWN0ZWQucG5nJztcbiAgc2VsZWN0ZWRfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG4gIHJldHVybiBzZWxlY3RlZF9pbWc7XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9ICdjb250YWN0LnBuZyc7XG4gIGltZy5hbHQgPSAnY29udGFjdC1pbWFnZSc7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRDb250YWN0ID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChjb250YWN0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5hdk1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnZmxleC1jb250YWluZXInKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZE5hdk1lbnUgPSAoY29udGVudCkgPT4ge1xuICBhZGRMb2dvKG5hdk1lbnUpO1xuICBhZGRIb21lKG5hdk1lbnUpO1xuICBhZGRGb29kTWVudShuYXZNZW51KTtcbiAgYWRkQ29udGFjdChuYXZNZW51KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdk1lbnUpO1xufTtcblxuY29uc3QgbmF2TWVudSA9IGNyZWF0ZU5hdk1lbnUoKTtcbmNvbnN0IGxvZ28gPSBjcmVhdGVMb2dvKCk7XG5jb25zdCBob21lU2VsZWN0ZWQgPSBjcmVhdGVIb21lU2VsZWN0ZWQoKTtcbmNvbnN0IGhvbWUgPSBjcmVhdGVIb21lKCk7XG5jb25zdCBmb29kTWVudVNlbGVjdGVkID0gY3JlYXRlRm9vZE1lbnVTZWxlY3RlZCgpO1xuY29uc3QgZm9vZE1lbnUgPSBjcmVhdGVGb29kTWVudSgpO1xuY29uc3QgY29udGFjdFNlbGVjdGVkID0gY3JlYXRlQ29udGFjdFNlbGVjdGVkKCk7XG5jb25zdCBjb250YWN0ID0gY3JlYXRlQ29udGFjdCgpO1xuXG5leHBvcnQge1xuICBhZGROYXZNZW51LFxuICBsb2dvLFxuICBob21lLFxuICBmb29kTWVudSxcbiAgY29udGFjdCxcbiAgaG9tZVNlbGVjdGVkLFxuICBmb29kTWVudVNlbGVjdGVkLFxuICBjb250YWN0U2VsZWN0ZWQsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0aWFsUGFnZUxvYWQsIGNvbnRlbnRIb2xkZXIgfSBmcm9tICcuL2luaXRpYWwuanMnO1xuaW1wb3J0IHtcbiAgbG9nbyxcbiAgaG9tZSxcbiAgZm9vZE1lbnUsXG4gIGNvbnRhY3QsXG4gIGhvbWVTZWxlY3RlZCxcbiAgZm9vZE1lbnVTZWxlY3RlZCxcbiAgY29udGFjdFNlbGVjdGVkLFxufSBmcm9tICcuL25hdi5qcyc7XG5cbmltcG9ydCB7IHNob3dIb21lIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IHNob3dNZW51IH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IHNob3dDb250YWN0IH0gZnJvbSAnLi9jb250YWN0LmpzJztcblxuY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICB3aGlsZSAoY29udGVudEhvbGRlci5maXJzdENoaWxkKSB7XG4gICAgY29udGVudEhvbGRlci5yZW1vdmVDaGlsZChjb250ZW50SG9sZGVyLmxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGNhbGxTaG93SG9tZSA9ICgpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIHNob3dIb21lKGNvbnRlbnRIb2xkZXIpO1xufTtcblxuY29uc3QgY2FsbFNob3dIb21lU2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGlmIChob21lU2VsZWN0ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0tYmFjay1sYXllci1vZmZzZXQnKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG4gIGhvbWVTZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWl0ZW0tYmFjay1sYXllci1vZmZzZXQnKTtcbn07XG5cbmNvbnN0IGNhbGxTaG93TWVudVNlbGVjdGVkID0gKCkgPT4ge1xuICBmb29kTWVudVNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG4gIGZvb2RNZW51U2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtLWJhY2stbGF5ZXItb2Zmc2V0Jyk7XG59O1xuXG5jb25zdCBjYWxsU2hvd0NvbnRhY3RTZWxlY3RlZCA9ICgpID0+IHtcbiAgY29udGFjdFNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG4gIGNvbnRhY3RTZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWl0ZW0tYmFjay1sYXllci1vZmZzZXQnKTtcbn07XG5cbmNvbnN0IGNhbGxIaWRlSG9tZVNlbGVjdGVkID0gKCkgPT4ge1xuICBob21lU2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtLWJhY2stbGF5ZXInKTtcbiAgaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaXRlbS1iYWNrLWxheWVyLW9mZnNldCcpO1xufTtcblxuY29uc3QgY2FsbFNob3dNZW51ID0gKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgc2hvd01lbnUoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBjYWxsU2hvd0NvbnRhY3QgPSAoKSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBzaG93Q29udGFjdChjb250ZW50SG9sZGVyKTtcbn07XG5cbmNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsU2hvd0hvbWUpO1xuXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsU2hvd0hvbWUpO1xuICAvLyBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNhbGxTaG93SG9tZVNlbGVjdGVkKTtcbiAgLy8gaG9tZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNhbGxIaWRlSG9tZVNlbGVjdGVkKTtcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93SG9tZVNlbGVjdGVkKTtcblxuICBmb29kTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93TWVudSk7XG4gIGZvb2RNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dNZW51U2VsZWN0ZWQpO1xuXG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsU2hvd0NvbnRhY3QpO1xuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dDb250YWN0U2VsZWN0ZWQpO1xuXG59O1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmluaXRpYWxQYWdlTG9hZChjb250ZW50KTtcbnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==