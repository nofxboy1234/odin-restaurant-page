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
  container.classList.add('content-flex-container');

  const innerContainer = document.createElement('div');

  let divParent = document.createElement('div');
  divParent.classList.add('content-flex-container');

  let div = document.createElement('div');
  div.textContent = 'Mitsuru Kirijo:';
  divParent.appendChild(div);

  div = document.createElement('div');
  div.textContent = '999-999-9999';
  divParent.appendChild(div);

  innerContainer.appendChild(divParent);

  divParent = document.createElement('div');
  divParent.classList.add('content-flex-container');

  div = document.createElement('div');
  div.textContent = 'Yukari Takeba:';
  divParent.appendChild(div);

  div = document.createElement('div');
  div.textContent = '777-777-7777';
  divParent.appendChild(div);

  innerContainer.appendChild(divParent);

  container.appendChild(innerContainer);
  container.classList.add('content');
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
  container.classList.add('content-flex-container');

  const innerContainer = document.createElement('div');

  messages.forEach((text) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    innerContainer.appendChild(messageDiv);
  });

  container.appendChild(innerContainer);
  container.classList.add('content');
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
  container.classList.add('content-flex-container');

  const innerContainer = document.createElement('div');

  let divParent = document.createElement('div');
  divParent.classList.add('content-flex-container');

  let div = document.createElement('div');
  div.textContent = 'Weird Takoyaki:';
  divParent.appendChild(div);

  div = document.createElement('div');
  div.textContent = '¥5000';
  divParent.appendChild(div);

  innerContainer.appendChild(divParent);

  divParent = document.createElement('div');
  divParent.classList.add('content-flex-container');

  div = document.createElement('div');
  div.textContent = 'Mad Bull:';
  divParent.appendChild(div);

  div = document.createElement('div');
  div.textContent = '¥600';
  divParent.appendChild(div);

  innerContainer.appendChild(divParent);

  divParent = document.createElement('div');
  divParent.classList.add('content-flex-container');

  div = document.createElement('div');
  div.textContent = 'Yakisoba Bread:';
  divParent.appendChild(div);

  div = document.createElement('div');
  div.textContent = '¥499';
  divParent.appendChild(div);

  innerContainer.appendChild(divParent);

  container.appendChild(innerContainer);
  container.classList.add('content');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZCO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWU7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxpREFBWTtBQUNkOztBQUVBLEVBQUUscURBQWdCO0FBQ2xCOztBQUVBLEVBQUUsb0RBQWU7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxrREFBUSxDQUFDLHNEQUFhO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXLENBQUMsc0RBQWE7QUFDM0I7O0FBRUE7QUFDQSxFQUFFLHlDQUFJOztBQUVOLEVBQUUseUNBQUk7QUFDTixFQUFFLHlDQUFJOztBQUVOLEVBQUUsNkNBQVE7QUFDVixFQUFFLDZDQUFROztBQUVWLEVBQUUsNENBQU87QUFDVCxFQUFFLDRDQUFPO0FBQ1Q7O0FBRUE7QUFDQSw0REFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IseUNBQUk7QUFDcEIsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNob3dDb250YWN0ID0gKHBhcmVudCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtZmxleC1jb250YWluZXInKTtcblxuICBjb25zdCBpbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGxldCBkaXZQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2UGFyZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtZmxleC1jb250YWluZXInKTtcblxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi50ZXh0Q29udGVudCA9ICdNaXRzdXJ1IEtpcmlqbzonO1xuICBkaXZQYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnRleHRDb250ZW50ID0gJzk5OS05OTktOTk5OSc7XG4gIGRpdlBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdlBhcmVudCk7XG5cbiAgZGl2UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdlBhcmVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWZsZXgtY29udGFpbmVyJyk7XG5cbiAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi50ZXh0Q29udGVudCA9ICdZdWthcmkgVGFrZWJhOic7XG4gIGRpdlBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYudGV4dENvbnRlbnQgPSAnNzc3LTc3Ny03Nzc3JztcbiAgZGl2UGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2UGFyZW50KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCB7IHNob3dDb250YWN0IH07XG4iLCJjb25zdCBhZGRXZWxjb21lID0gKHBhcmVudCwgbWVzc2FnZXMpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWZsZXgtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBtZXNzYWdlcy5mb3JFYWNoKCh0ZXh0KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IG1lc3NhZ2VzID0gKCkgPT4ge1xuICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICBtZXNzYWdlcy5wdXNoKCdXZWxjb21lIHRvIFJFU1RBVVJBTlQuJyk7XG4gIG1lc3NhZ2VzLnB1c2goXCJXZSd2ZSBiZWVuIGFyb3VuZCBzaW5jZSB0aGUgYmVnaW5uaW5nIG9mIHRpbWUuXCIpO1xuICBtZXNzYWdlcy5wdXNoKCdXZSBsb29rIGZvcndhcmQgdG8gc2VlaW5nIHlvdSBzb29uLicpO1xuICByZXR1cm4gbWVzc2FnZXM7XG59O1xuXG5jb25zdCBzaG93SG9tZSA9IChwYXJlbnQpID0+IHtcbiAgYWRkV2VsY29tZShwYXJlbnQsIG1lc3NhZ2VzKCkpO1xufTtcblxuZXhwb3J0IHsgc2hvd0hvbWUgfTtcbiIsImltcG9ydCB7IGFkZE5hdk1lbnUgfSBmcm9tICcuL25hdi5qcyc7XG5pbXBvcnQgeyBzaG93SG9tZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5cbmNvbnN0IGNyZWF0ZUNvbnRlbnRIb2xkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaWQgPSAnY29udGVudC1ob2xkZXInO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkQ29udGVudEhvbGRlciA9IChjb250ZW50KSA9PiB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoY29udGVudCkgPT4ge1xuICBhZGROYXZNZW51KGNvbnRlbnQpO1xuICBhZGRDb250ZW50SG9sZGVyKGNvbnRlbnQpO1xuICBzaG93SG9tZShjb250ZW50SG9sZGVyKTtcbn07XG5cbmNvbnN0IGNvbnRlbnRIb2xkZXIgPSBjcmVhdGVDb250ZW50SG9sZGVyKCk7XG5cbmV4cG9ydCB7IGluaXRpYWxQYWdlTG9hZCwgY29udGVudEhvbGRlciB9O1xuIiwiY29uc3Qgc2hvd01lbnUgPSAocGFyZW50KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1mbGV4LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGlubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbGV0IGRpdlBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZQYXJlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1mbGV4LWNvbnRhaW5lcicpO1xuXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnRleHRDb250ZW50ID0gJ1dlaXJkIFRha295YWtpOic7XG4gIGRpdlBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYudGV4dENvbnRlbnQgPSAnwqU1MDAwJztcbiAgZGl2UGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2UGFyZW50KTtcblxuICBkaXZQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2UGFyZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtZmxleC1jb250YWluZXInKTtcblxuICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnRleHRDb250ZW50ID0gJ01hZCBCdWxsOic7XG4gIGRpdlBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYudGV4dENvbnRlbnQgPSAnwqU2MDAnO1xuICBkaXZQYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZQYXJlbnQpO1xuXG4gIGRpdlBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZQYXJlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1mbGV4LWNvbnRhaW5lcicpO1xuXG4gIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYudGV4dENvbnRlbnQgPSAnWWFraXNvYmEgQnJlYWQ6JztcbiAgZGl2UGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi50ZXh0Q29udGVudCA9ICfCpTQ5OSc7XG4gIGRpdlBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdlBhcmVudCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgeyBzaG93TWVudSB9O1xuIiwiY29uc3QgY3JlYXRlTG9nbyA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAncmVzdGF1cmFudC5wbmcnO1xuICBpbWcuYWx0ID0gJ3Jlc3RhdXJhbnQgbG9nbyc7XG4gIGltZy5pZCA9ICdsb2dvJztcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRMb2dvID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChsb2dvKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhvbWVTZWxlY3RlZCA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNlbGVjdGVkX2ltZy5zcmMgPSAnbWVudV9zZWxlY3RlZC5wbmcnO1xuICBzZWxlY3RlZF9pbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWJhY2stbGF5ZXInKTtcbiAgcmV0dXJuIHNlbGVjdGVkX2ltZztcbn07XG5cbmNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3JjID0gJ2hvbWUucG5nJztcbiAgaW1nLmFsdCA9ICdob21lLWltYWdlJztcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgZGl2LmFwcGVuZENoaWxkKGhvbWVTZWxlY3RlZCk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRIb21lID0gKG1lbnUpID0+IHtcbiAgbWVudS5hcHBlbmRDaGlsZChob21lKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb2RNZW51U2VsZWN0ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzZWxlY3RlZF9pbWcuc3JjID0gJ21lbnVfc2VsZWN0ZWQucG5nJztcbiAgc2VsZWN0ZWRfaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1iYWNrLWxheWVyJyk7XG4gIHJldHVybiBzZWxlY3RlZF9pbWc7XG59O1xuXG5jb25zdCBjcmVhdGVGb29kTWVudSA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAnbWVudS5wbmcnO1xuICBpbWcuYWx0ID0gJ21lbnUtaW1hZ2UnO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZm9vZE1lbnVTZWxlY3RlZCk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRGb29kTWVudSA9IChtZW51KSA9PiB7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZm9vZE1lbnUpO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdFNlbGVjdGVkID0gKCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2VsZWN0ZWRfaW1nLnNyYyA9ICdtZW51X3NlbGVjdGVkLnBuZyc7XG4gIHNlbGVjdGVkX2ltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tYmFjay1sYXllcicpO1xuICByZXR1cm4gc2VsZWN0ZWRfaW1nO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSAnY29udGFjdC5wbmcnO1xuICBpbWcuYWx0ID0gJ2NvbnRhY3QtaW1hZ2UnO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdFNlbGVjdGVkKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZENvbnRhY3QgPSAobWVudSkgPT4ge1xuICBtZW51LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xufTtcblxuY29uc3QgY3JlYXRlTmF2TWVudSA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbnRhaW5lcicpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkTmF2TWVudSA9IChjb250ZW50KSA9PiB7XG4gIGFkZExvZ28obmF2TWVudSk7XG4gIGFkZEhvbWUobmF2TWVudSk7XG4gIGFkZEZvb2RNZW51KG5hdk1lbnUpO1xuICBhZGRDb250YWN0KG5hdk1lbnUpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2TWVudSk7XG59O1xuXG5jb25zdCBuYXZNZW51ID0gY3JlYXRlTmF2TWVudSgpO1xuY29uc3QgbG9nbyA9IGNyZWF0ZUxvZ28oKTtcbmNvbnN0IGhvbWVTZWxlY3RlZCA9IGNyZWF0ZUhvbWVTZWxlY3RlZCgpO1xuY29uc3QgaG9tZSA9IGNyZWF0ZUhvbWUoKTtcbmNvbnN0IGZvb2RNZW51U2VsZWN0ZWQgPSBjcmVhdGVGb29kTWVudVNlbGVjdGVkKCk7XG5jb25zdCBmb29kTWVudSA9IGNyZWF0ZUZvb2RNZW51KCk7XG5jb25zdCBjb250YWN0U2VsZWN0ZWQgPSBjcmVhdGVDb250YWN0U2VsZWN0ZWQoKTtcbmNvbnN0IGNvbnRhY3QgPSBjcmVhdGVDb250YWN0KCk7XG5cbmV4cG9ydCB7XG4gIGFkZE5hdk1lbnUsXG4gIGxvZ28sXG4gIGhvbWUsXG4gIGZvb2RNZW51LFxuICBjb250YWN0LFxuICBob21lU2VsZWN0ZWQsXG4gIGZvb2RNZW51U2VsZWN0ZWQsXG4gIGNvbnRhY3RTZWxlY3RlZCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxQYWdlTG9hZCwgY29udGVudEhvbGRlciB9IGZyb20gJy4vaW5pdGlhbC5qcyc7XG5pbXBvcnQge1xuICBsb2dvLFxuICBob21lLFxuICBmb29kTWVudSxcbiAgY29udGFjdCxcbiAgaG9tZVNlbGVjdGVkLFxuICBmb29kTWVudVNlbGVjdGVkLFxuICBjb250YWN0U2VsZWN0ZWQsXG59IGZyb20gJy4vbmF2LmpzJztcblxuaW1wb3J0IHsgc2hvd0hvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgc2hvd01lbnUgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgc2hvd0NvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gIHdoaWxlIChjb250ZW50SG9sZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50SG9sZGVyLnJlbW92ZUNoaWxkKGNvbnRlbnRIb2xkZXIubGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY2FsbFNob3dIb21lID0gKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgc2hvd0hvbWUoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBjYWxsU2hvd1NlbGVjdGVkID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICBjb25zdCBjc3NDbGFzcyA9ICdvZmZzZXQtbGF5ZXInO1xuICBpZiAodGFyZ2V0ID09PSBob21lKSB7XG4gICAgaWYgKGhvbWVTZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpZGVBbGxCYWNrTGF5ZXJzKCk7XG4gICAgaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gZm9vZE1lbnUpIHtcbiAgICBpZiAoZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpZGVBbGxCYWNrTGF5ZXJzKCk7XG4gICAgZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IGNvbnRhY3QpIHtcbiAgICBpZiAoY29udGFjdFNlbGVjdGVkLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGlkZUFsbEJhY2tMYXllcnMoKTtcbiAgICBjb250YWN0U2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gIH1cbn07XG5cbmNvbnN0IGhpZGVBbGxCYWNrTGF5ZXJzID0gKCkgPT4ge1xuICBjb25zdCBjc3NPZmZzZXRDbGFzcyA9ICdvZmZzZXQtbGF5ZXInO1xuICBjb25zdCBjc3NOb3JtYWxDbGFzcyA9ICdtZW51LWl0ZW0tYmFjay1sYXllcic7XG5cbiAgaG9tZVNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoY3NzT2Zmc2V0Q2xhc3MpO1xuICAvLyBob21lU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChjc3NOb3JtYWxDbGFzcyk7XG5cbiAgZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKGNzc09mZnNldENsYXNzKTtcbiAgLy8gZm9vZE1lbnVTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKGNzc05vcm1hbENsYXNzKTtcblxuICBjb250YWN0U2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShjc3NPZmZzZXRDbGFzcyk7XG4gIC8vIGNvbnRhY3RTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKGNzc05vcm1hbENsYXNzKTtcbn07XG5cbmNvbnN0IGNhbGxTaG93TWVudSA9ICgpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIHNob3dNZW51KGNvbnRlbnRIb2xkZXIpO1xufTtcblxuY29uc3QgY2FsbFNob3dDb250YWN0ID0gKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgc2hvd0NvbnRhY3QoY29udGVudEhvbGRlcik7XG59O1xuXG5jb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dIb21lKTtcblxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dIb21lKTtcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93U2VsZWN0ZWQpO1xuXG4gIGZvb2RNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dNZW51KTtcbiAgZm9vZE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsU2hvd1NlbGVjdGVkKTtcblxuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNob3dDb250YWN0KTtcbiAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxTaG93U2VsZWN0ZWQpO1xufTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5pbml0aWFsUGFnZUxvYWQoY29udGVudCk7XG5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNvbnN0IGluaXRIb21lRXZlbnQgPSB7XG4gIHRhcmdldDoge1xuICAgIHBhcmVudE5vZGU6IGhvbWUsXG4gIH0sXG59O1xuY2FsbFNob3dTZWxlY3RlZChpbml0SG9tZUV2ZW50KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==