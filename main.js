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
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.remove('menu-item-back-layer-offset')
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.add('menu-item-back-layer');

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.remove('menu-item-back-layer-offset')
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.add('menu-item-back-layer');

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.remove('menu-item-back-layer-offset')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TixFQUFFLDZDQUFRO0FBQ1YsRUFBRSw2Q0FBUTs7QUFFVixFQUFFLDRDQUFPO0FBQ1QsRUFBRSw0Q0FBTztBQUNUOztBQUVBO0FBQ0EsNERBQWU7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hvd0NvbnRhY3QgPSAocGFyZW50KSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpXG59O1xuXG5leHBvcnQgeyBzaG93Q29udGFjdCB9O1xuIiwiY29uc3QgYWRkV2VsY29tZSA9IChwYXJlbnQsIG1lc3NhZ2VzKSA9PiB7XG4gIG1lc3NhZ2VzLmZvckVhY2goKHRleHQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xufTtcblxuY29uc3QgbWVzc2FnZXMgPSAoKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gIG1lc3NhZ2VzLnB1c2goJ1dlbGNvbWUgdG8gUkVTVEFVUkFOVC4nKTtcbiAgbWVzc2FnZXMucHVzaChcIldlJ3ZlIGJlZW4gYXJvdW5kIHNpbmNlIHRoZSBiZWdpbm5pbmcgb2YgdGltZS5cIik7XG4gIG1lc3NhZ2VzLnB1c2goJ1dlIGxvb2sgZm9yd2FyZCB0byBzZWVpbmcgeW91IHNvb24uJyk7XG4gIHJldHVybiBtZXNzYWdlcztcbn07XG5cbmNvbnN0IHNob3dIb21lID0gKHBhcmVudCkgPT4ge1xuICBhZGRXZWxjb21lKHBhcmVudCwgbWVzc2FnZXMoKSk7XG59O1xuXG5leHBvcnQgeyBzaG93SG9tZSB9O1xuIiwiaW1wb3J0IHsgYWRkTmF2TWVudSB9IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCB7IHNob3dIb21lIH0gZnJvbSAnLi9ob21lLmpzJztcblxuY29uc3QgY3JlYXRlQ29udGVudEhvbGRlciA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pZCA9ICdjb250ZW50LWhvbGRlcic7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRDb250ZW50SG9sZGVyID0gKGNvbnRlbnQpID0+IHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50SG9sZGVyKTtcbn07XG5cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9IChjb250ZW50KSA9PiB7XG4gIGFkZE5hdk1lbnUoY29udGVudCk7XG4gIGFkZENvbnRlbnRIb2xkZXIoY29udGVudCk7XG4gIHNob3dIb21lKGNvbnRlbnRIb2xkZXIpO1xufTtcblxuY29uc3QgY29udGVudEhvbGRlciA9IGNyZWF0ZUNvbnRlbnRIb2xkZXIoKTtcblxuZXhwb3J0IHsgaW5pdGlhbFBhZ2VMb2FkLCBjb250ZW50SG9sZGVyIH07XG4iLCJjb25zdCBzaG93TWVudSA9IChwYXJlbnQpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgcGFyZW50LmFwcGVuZENoaWxkKGRpdilcbn07XG5cbmV4cG9ydCB7IHNob3dNZW51IH07XG4iLCJjb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9ICdyZXN0YXVyYW50LnBuZyc7XG4gIGltZy5hbHQgPSAncmVzdGF1cmFudCBsb2dvJztcbiAgaW1nLmlkID0gJ2xvZ28nO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZExvZ28gPSAobWVudSkgPT4ge1xuICBtZW51LmFwcGVuZENoaWxkKGxvZ28pO1xufTtcblxuY29uc3QgY3JlYXRlSG9tZVNlbGVjdGVkID0gKCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2VsZWN0ZWRfaW1nLnNyYyA9ICdtZW51X3NlbGVjdGVkLnBuZyc7XG4gIHNlbGVjdGVkX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xuICByZXR1cm4gc2VsZWN0ZWRfaW1nO1xufTtcblxuY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAnaG9tZS5wbmcnO1xuICBpbWcuYWx0ID0gJ2hvbWUtaW1hZ2UnO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaG9tZVNlbGVjdGVkKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZEhvbWUgPSAobWVudSkgPT4ge1xuICBtZW51LmFwcGVuZENoaWxkKGhvbWUpO1xufTtcblxuY29uc3QgY3JlYXRlRm9vZE1lbnVTZWxlY3RlZCA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNlbGVjdGVkX2ltZy5zcmMgPSAnbWVudV9zZWxlY3RlZC5wbmcnO1xuICBzZWxlY3RlZF9pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWJhY2stbGF5ZXInKTtcbiAgcmV0dXJuIHNlbGVjdGVkX2ltZztcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb2RNZW51ID0gKCkgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9ICdtZW51LnBuZyc7XG4gIGltZy5hbHQgPSAnbWVudS1pbWFnZSc7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIGRpdi5hcHBlbmRDaGlsZChmb29kTWVudVNlbGVjdGVkKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZEZvb2RNZW51ID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChmb29kTWVudSk7XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWN0U2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzZWxlY3RlZF9pbWcuc3JjID0gJ21lbnVfc2VsZWN0ZWQucG5nJztcbiAgc2VsZWN0ZWRfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG4gIHJldHVybiBzZWxlY3RlZF9pbWc7XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9ICdjb250YWN0LnBuZyc7XG4gIGltZy5hbHQgPSAnY29udGFjdC1pbWFnZSc7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIGRpdi5hcHBlbmRDaGlsZChjb250YWN0U2VsZWN0ZWQpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkQ29udGFjdCA9IChtZW51KSA9PiB7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG59O1xuXG5jb25zdCBjcmVhdGVOYXZNZW51ID0gKCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29udGFpbmVyJyk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGROYXZNZW51ID0gKGNvbnRlbnQpID0+IHtcbiAgYWRkTG9nbyhuYXZNZW51KTtcbiAgYWRkSG9tZShuYXZNZW51KTtcbiAgYWRkRm9vZE1lbnUobmF2TWVudSk7XG4gIGFkZENvbnRhY3QobmF2TWVudSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZNZW51KTtcbn07XG5cbmNvbnN0IG5hdk1lbnUgPSBjcmVhdGVOYXZNZW51KCk7XG5jb25zdCBsb2dvID0gY3JlYXRlTG9nbygpO1xuY29uc3QgaG9tZVNlbGVjdGVkID0gY3JlYXRlSG9tZVNlbGVjdGVkKCk7XG5jb25zdCBob21lID0gY3JlYXRlSG9tZSgpO1xuY29uc3QgZm9vZE1lbnVTZWxlY3RlZCA9IGNyZWF0ZUZvb2RNZW51U2VsZWN0ZWQoKTtcbmNvbnN0IGZvb2RNZW51ID0gY3JlYXRlRm9vZE1lbnUoKTtcbmNvbnN0IGNvbnRhY3RTZWxlY3RlZCA9IGNyZWF0ZUNvbnRhY3RTZWxlY3RlZCgpO1xuY29uc3QgY29udGFjdCA9IGNyZWF0ZUNvbnRhY3QoKTtcblxuZXhwb3J0IHtcbiAgYWRkTmF2TWVudSxcbiAgbG9nbyxcbiAgaG9tZSxcbiAgZm9vZE1lbnUsXG4gIGNvbnRhY3QsXG4gIGhvbWVTZWxlY3RlZCxcbiAgZm9vZE1lbnVTZWxlY3RlZCxcbiAgY29udGFjdFNlbGVjdGVkLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdGlhbFBhZ2VMb2FkLCBjb250ZW50SG9sZGVyIH0gZnJvbSAnLi9pbml0aWFsLmpzJztcbmltcG9ydCB7XG4gIGxvZ28sXG4gIGhvbWUsXG4gIGZvb2RNZW51LFxuICBjb250YWN0LFxuICBob21lU2VsZWN0ZWQsXG4gIGZvb2RNZW51U2VsZWN0ZWQsXG4gIGNvbnRhY3RTZWxlY3RlZCxcbn0gZnJvbSAnLi9uYXYuanMnO1xuXG5pbXBvcnQgeyBzaG93SG9tZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBzaG93TWVudSB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBzaG93Q29udGFjdCB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgd2hpbGUgKGNvbnRlbnRIb2xkZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnRIb2xkZXIucmVtb3ZlQ2hpbGQoY29udGVudEhvbGRlci5sYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjYWxsU2hvd0hvbWUgPSAoKSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBzaG93SG9tZShjb250ZW50SG9sZGVyKTtcbn07XG5cbmNvbnN0IGNhbGxTaG93SG9tZVNlbGVjdGVkID0gKCkgPT4ge1xuICBpZiAoaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pdGVtLWJhY2stbGF5ZXItb2Zmc2V0JykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBoaWRlQWxsQmFja0xheWVycygpO1xuXG4gIGhvbWVTZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xuICBob21lU2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtLWJhY2stbGF5ZXItb2Zmc2V0Jyk7XG59O1xuXG5jb25zdCBjYWxsU2hvd01lbnVTZWxlY3RlZCA9ICgpID0+IHtcbiAgaWYgKGZvb2RNZW51U2VsZWN0ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0tYmFjay1sYXllci1vZmZzZXQnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGhpZGVBbGxCYWNrTGF5ZXJzKCk7XG5cbiAgZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xuICBmb29kTWVudVNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaXRlbS1iYWNrLWxheWVyLW9mZnNldCcpO1xufTtcblxuY29uc3QgY2FsbFNob3dDb250YWN0U2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGlmIChjb250YWN0U2VsZWN0ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0tYmFjay1sYXllci1vZmZzZXQnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGhpZGVBbGxCYWNrTGF5ZXJzKCk7XG5cbiAgY29udGFjdFNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG4gIGNvbnRhY3RTZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWl0ZW0tYmFjay1sYXllci1vZmZzZXQnKTtcbn07XG5cbmNvbnN0IGhpZGVBbGxCYWNrTGF5ZXJzID0gKCkgPT4ge1xuICBob21lU2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pdGVtLWJhY2stbGF5ZXItb2Zmc2V0JylcbiAgaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG5cbiAgZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWl0ZW0tYmFjay1sYXllci1vZmZzZXQnKVxuICBmb29kTWVudVNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG5cbiAgY29udGFjdFNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaXRlbS1iYWNrLWxheWVyLW9mZnNldCcpXG4gIGNvbnRhY3RTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xufTtcblxuY29uc3QgY2FsbFNob3dNZW51ID0gKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgc2hvd01lbnUoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBjYWxsU2hvd0NvbnRhY3QgPSAoKSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBzaG93Q29udGFjdChjb250ZW50SG9sZGVyKTtcbn07XG5cbmNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsU2hvd0hvbWUpO1xuXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsU2hvd0hvbWUpO1xuICAvLyBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNhbGxTaG93SG9tZVNlbGVjdGVkKTtcbiAgLy8gaG9tZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNhbGxIaWRlSG9tZVNlbGVjdGVkKTtcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93SG9tZVNlbGVjdGVkKTtcblxuICBmb29kTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93TWVudSk7XG4gIGZvb2RNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dNZW51U2VsZWN0ZWQpO1xuXG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsU2hvd0NvbnRhY3QpO1xuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dDb250YWN0U2VsZWN0ZWQpO1xufTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5pbml0aWFsUGFnZUxvYWQoY29udGVudCk7XG5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=