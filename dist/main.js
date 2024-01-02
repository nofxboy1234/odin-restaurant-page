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
  const container = document.createElement('div');
  container.classList.add('flex-container');

  const innerContainer = document.createElement('div');

  const food1Div = document.createElement('div');
  food1Div.textContent = 'apple';
  innerContainer.appendChild(food1Div);

  const food2Div = document.createElement('div');
  food2Div.textContent = 'banana';
  innerContainer.appendChild(food2Div);

  container.appendChild(innerContainer);
  parent.appendChild(container);
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
  const container = document.createElement('div');
  container.classList.add('flex-container');

  const innerContainer = document.createElement('div');

  messages.forEach((text) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    innerContainer.appendChild(messageDiv);
  });

  container.appendChild(innerContainer);
  parent.appendChild(container);
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
  const container = document.createElement('div');
  container.classList.add('flex-container');

  const innerContainer = document.createElement('div');

  const food1Div = document.createElement('div');
  food1Div.textContent = 'apple';
  innerContainer.appendChild(food1Div);

  const food2Div = document.createElement('div');
  food2Div.textContent = 'banana';
  innerContainer.appendChild(food2Div);

  container.appendChild(innerContainer);
  parent.appendChild(container);
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

const callShowSelected = (event) => {
  const target = event.target.parentNode;
  const cssClass = 'offset-layer';
  if (target === _nav_js__WEBPACK_IMPORTED_MODULE_1__.home) {
    if (_nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.contains(cssClass)) {
      return;
    }
    hideAllBackLayers();
    _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.add(cssClass);
  } else if (target === _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenu) {
    if (_nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.contains(cssClass)) {
      return;
    }
    hideAllBackLayers();
    _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.add(cssClass);
  } else if (target === _nav_js__WEBPACK_IMPORTED_MODULE_1__.contact) {
    if (_nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.contains(cssClass)) {
      return;
    }
    hideAllBackLayers();
    _nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.add(cssClass);
  }
};

const hideAllBackLayers = () => {
  const cssOffsetClass = 'offset-layer';
  const cssNormalClass = 'menu-item-back-layer';

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.homeSelected.classList.remove(cssOffsetClass);
  // homeSelected.classList.add(cssNormalClass);

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenuSelected.classList.remove(cssOffsetClass);
  // foodMenuSelected.classList.add(cssNormalClass);

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contactSelected.classList.remove(cssOffsetClass);
  // contactSelected.classList.add(cssNormalClass);
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
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.home.addEventListener('click', callShowSelected);

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenu.addEventListener('click', callShowMenu);
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.foodMenu.addEventListener('click', callShowSelected);

  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contact.addEventListener('click', callShowContact);
  _nav_js__WEBPACK_IMPORTED_MODULE_1__.contact.addEventListener('click', callShowSelected);
};

const content = document.querySelector('#content');
(0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)(content);
setupEventListeners();

const initHomeEvent = {
  target: {
    parentNode: _nav_js__WEBPACK_IMPORTED_MODULE_1__.home,
  },
};
callShowSelected(initHomeEvent);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0RBQVcsQ0FBQyxzREFBYTtBQUMzQjs7QUFFQTtBQUNBLEVBQUUseUNBQUk7O0FBRU4sRUFBRSx5Q0FBSTtBQUNOLEVBQUUseUNBQUk7O0FBRU4sRUFBRSw2Q0FBUTtBQUNWLEVBQUUsNkNBQVE7O0FBRVYsRUFBRSw0Q0FBTztBQUNULEVBQUUsNENBQU87QUFDVDs7QUFFQTtBQUNBLDREQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix5Q0FBSTtBQUNwQixHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hvd0NvbnRhY3QgPSAocGFyZW50KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleC1jb250YWluZXInKTtcblxuICBjb25zdCBpbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IGZvb2QxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb2QxRGl2LnRleHRDb250ZW50ID0gJ2FwcGxlJztcbiAgaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZDFEaXYpO1xuXG4gIGNvbnN0IGZvb2QyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb2QyRGl2LnRleHRDb250ZW50ID0gJ2JhbmFuYSc7XG4gIGlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2QyRGl2KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCB7IHNob3dDb250YWN0IH07XG4iLCJjb25zdCBhZGRXZWxjb21lID0gKHBhcmVudCwgbWVzc2FnZXMpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGlubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbWVzc2FnZXMuZm9yRWFjaCgodGV4dCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlRGl2KTtcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBtZXNzYWdlcyA9ICgpID0+IHtcbiAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgbWVzc2FnZXMucHVzaCgnV2VsY29tZSB0byBSRVNUQVVSQU5ULicpO1xuICBtZXNzYWdlcy5wdXNoKFwiV2UndmUgYmVlbiBhcm91bmQgc2luY2UgdGhlIGJlZ2lubmluZyBvZiB0aW1lLlwiKTtcbiAgbWVzc2FnZXMucHVzaCgnV2UgbG9vayBmb3J3YXJkIHRvIHNlZWluZyB5b3Ugc29vbi4nKTtcbiAgcmV0dXJuIG1lc3NhZ2VzO1xufTtcblxuY29uc3Qgc2hvd0hvbWUgPSAocGFyZW50KSA9PiB7XG4gIGFkZFdlbGNvbWUocGFyZW50LCBtZXNzYWdlcygpKTtcbn07XG5cbmV4cG9ydCB7IHNob3dIb21lIH07XG4iLCJpbXBvcnQgeyBhZGROYXZNZW51IH0gZnJvbSAnLi9uYXYuanMnO1xuaW1wb3J0IHsgc2hvd0hvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xuXG5jb25zdCBjcmVhdGVDb250ZW50SG9sZGVyID0gKCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlkID0gJ2NvbnRlbnQtaG9sZGVyJztcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZENvbnRlbnRIb2xkZXIgPSAoY29udGVudCkgPT4ge1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRIb2xkZXIpO1xufTtcblxuY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKGNvbnRlbnQpID0+IHtcbiAgYWRkTmF2TWVudShjb250ZW50KTtcbiAgYWRkQ29udGVudEhvbGRlcihjb250ZW50KTtcbiAgc2hvd0hvbWUoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBjb250ZW50SG9sZGVyID0gY3JlYXRlQ29udGVudEhvbGRlcigpO1xuXG5leHBvcnQgeyBpbml0aWFsUGFnZUxvYWQsIGNvbnRlbnRIb2xkZXIgfTtcbiIsImNvbnN0IHNob3dNZW51ID0gKHBhcmVudCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBmb29kMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb29kMURpdi50ZXh0Q29udGVudCA9ICdhcHBsZSc7XG4gIGlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2QxRGl2KTtcblxuICBjb25zdCBmb29kMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb29kMkRpdi50ZXh0Q29udGVudCA9ICdiYW5hbmEnO1xuICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kMkRpdik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgeyBzaG93TWVudSB9O1xuIiwiY29uc3QgY3JlYXRlTG9nbyA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAncmVzdGF1cmFudC5wbmcnO1xuICBpbWcuYWx0ID0gJ3Jlc3RhdXJhbnQgbG9nbyc7XG4gIGltZy5pZCA9ICdsb2dvJztcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRMb2dvID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChsb2dvKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhvbWVTZWxlY3RlZCA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNlbGVjdGVkX2ltZy5zcmMgPSAnbWVudV9zZWxlY3RlZC5wbmcnO1xuICBzZWxlY3RlZF9pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWJhY2stbGF5ZXInKTtcbiAgcmV0dXJuIHNlbGVjdGVkX2ltZztcbn07XG5cbmNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3JjID0gJ2hvbWUucG5nJztcbiAgaW1nLmFsdCA9ICdob21lLWltYWdlJztcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgZGl2LmFwcGVuZENoaWxkKGhvbWVTZWxlY3RlZCk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRIb21lID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChob21lKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb2RNZW51U2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzZWxlY3RlZF9pbWcuc3JjID0gJ21lbnVfc2VsZWN0ZWQucG5nJztcbiAgc2VsZWN0ZWRfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG4gIHJldHVybiBzZWxlY3RlZF9pbWc7XG59O1xuXG5jb25zdCBjcmVhdGVGb29kTWVudSA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAnbWVudS5wbmcnO1xuICBpbWcuYWx0ID0gJ21lbnUtaW1hZ2UnO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZm9vZE1lbnVTZWxlY3RlZCk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRGb29kTWVudSA9IChtZW51KSA9PiB7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZm9vZE1lbnUpO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdFNlbGVjdGVkID0gKCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2VsZWN0ZWRfaW1nLnNyYyA9ICdtZW51X3NlbGVjdGVkLnBuZyc7XG4gIHNlbGVjdGVkX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xuICByZXR1cm4gc2VsZWN0ZWRfaW1nO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAnY29udGFjdC5wbmcnO1xuICBpbWcuYWx0ID0gJ2NvbnRhY3QtaW1hZ2UnO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdFNlbGVjdGVkKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZENvbnRhY3QgPSAobWVudSkgPT4ge1xuICBtZW51LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xufTtcblxuY29uc3QgY3JlYXRlTmF2TWVudSA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbnRhaW5lcicpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkTmF2TWVudSA9IChjb250ZW50KSA9PiB7XG4gIGFkZExvZ28obmF2TWVudSk7XG4gIGFkZEhvbWUobmF2TWVudSk7XG4gIGFkZEZvb2RNZW51KG5hdk1lbnUpO1xuICBhZGRDb250YWN0KG5hdk1lbnUpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2TWVudSk7XG59O1xuXG5jb25zdCBuYXZNZW51ID0gY3JlYXRlTmF2TWVudSgpO1xuY29uc3QgbG9nbyA9IGNyZWF0ZUxvZ28oKTtcbmNvbnN0IGhvbWVTZWxlY3RlZCA9IGNyZWF0ZUhvbWVTZWxlY3RlZCgpO1xuY29uc3QgaG9tZSA9IGNyZWF0ZUhvbWUoKTtcbmNvbnN0IGZvb2RNZW51U2VsZWN0ZWQgPSBjcmVhdGVGb29kTWVudVNlbGVjdGVkKCk7XG5jb25zdCBmb29kTWVudSA9IGNyZWF0ZUZvb2RNZW51KCk7XG5jb25zdCBjb250YWN0U2VsZWN0ZWQgPSBjcmVhdGVDb250YWN0U2VsZWN0ZWQoKTtcbmNvbnN0IGNvbnRhY3QgPSBjcmVhdGVDb250YWN0KCk7XG5cbmV4cG9ydCB7XG4gIGFkZE5hdk1lbnUsXG4gIGxvZ28sXG4gIGhvbWUsXG4gIGZvb2RNZW51LFxuICBjb250YWN0LFxuICBob21lU2VsZWN0ZWQsXG4gIGZvb2RNZW51U2VsZWN0ZWQsXG4gIGNvbnRhY3RTZWxlY3RlZCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxQYWdlTG9hZCwgY29udGVudEhvbGRlciB9IGZyb20gJy4vaW5pdGlhbC5qcyc7XG5pbXBvcnQge1xuICBsb2dvLFxuICBob21lLFxuICBmb29kTWVudSxcbiAgY29udGFjdCxcbiAgaG9tZVNlbGVjdGVkLFxuICBmb29kTWVudVNlbGVjdGVkLFxuICBjb250YWN0U2VsZWN0ZWQsXG59IGZyb20gJy4vbmF2LmpzJztcblxuaW1wb3J0IHsgc2hvd0hvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgc2hvd01lbnUgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgc2hvd0NvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gIHdoaWxlIChjb250ZW50SG9sZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50SG9sZGVyLnJlbW92ZUNoaWxkKGNvbnRlbnRIb2xkZXIubGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY2FsbFNob3dIb21lID0gKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgc2hvd0hvbWUoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBjYWxsU2hvd1NlbGVjdGVkID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICBjb25zdCBjc3NDbGFzcyA9ICdvZmZzZXQtbGF5ZXInO1xuICBpZiAodGFyZ2V0ID09PSBob21lKSB7XG4gICAgaWYgKGhvbWVTZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpZGVBbGxCYWNrTGF5ZXJzKCk7XG4gICAgaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gZm9vZE1lbnUpIHtcbiAgICBpZiAoZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpZGVBbGxCYWNrTGF5ZXJzKCk7XG4gICAgZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IGNvbnRhY3QpIHtcbiAgICBpZiAoY29udGFjdFNlbGVjdGVkLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGlkZUFsbEJhY2tMYXllcnMoKTtcbiAgICBjb250YWN0U2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gIH1cbn07XG5cbmNvbnN0IGhpZGVBbGxCYWNrTGF5ZXJzID0gKCkgPT4ge1xuICBjb25zdCBjc3NPZmZzZXRDbGFzcyA9ICdvZmZzZXQtbGF5ZXInO1xuICBjb25zdCBjc3NOb3JtYWxDbGFzcyA9ICdtZW51LWl0ZW0tYmFjay1sYXllcic7XG5cbiAgaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoY3NzT2Zmc2V0Q2xhc3MpO1xuICAvLyBob21lU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChjc3NOb3JtYWxDbGFzcyk7XG5cbiAgZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKGNzc09mZnNldENsYXNzKTtcbiAgLy8gZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKGNzc05vcm1hbENsYXNzKTtcblxuICBjb250YWN0U2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShjc3NPZmZzZXRDbGFzcyk7XG4gIC8vIGNvbnRhY3RTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKGNzc05vcm1hbENsYXNzKTtcbn07XG5cbmNvbnN0IGNhbGxTaG93TWVudSA9ICgpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIHNob3dNZW51KGNvbnRlbnRIb2xkZXIpO1xufTtcblxuY29uc3QgY2FsbFNob3dDb250YWN0ID0gKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgc2hvd0NvbnRhY3QoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dIb21lKTtcblxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dIb21lKTtcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93U2VsZWN0ZWQpO1xuXG4gIGZvb2RNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dNZW51KTtcbiAgZm9vZE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsU2hvd1NlbGVjdGVkKTtcblxuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dDb250YWN0KTtcbiAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93U2VsZWN0ZWQpO1xufTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5pbml0aWFsUGFnZUxvYWQoY29udGVudCk7XG5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNvbnN0IGluaXRIb21lRXZlbnQgPSB7XG4gIHRhcmdldDoge1xuICAgIHBhcmVudE5vZGU6IGhvbWUsXG4gIH0sXG59O1xuY2FsbFNob3dTZWxlY3RlZChpbml0SG9tZUV2ZW50KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==