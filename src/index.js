import { initialPageLoad, contentHolder } from './initial.js';
import {
  logo,
  home,
  foodMenu,
  contact,
  homeSelected,
  foodMenuSelected,
  contactSelected,
} from './nav.js';

import { showHome } from './home.js';
import { showMenu } from './menu.js';
import { showContact } from './contact.js';

const clearContent = () => {
  while (contentHolder.firstChild) {
    contentHolder.removeChild(contentHolder.lastChild);
  }
};

const callShowHome = () => {
  clearContent();
  showHome(contentHolder);
};

const callShowSelected = (event) => {
  const target = event.target.parentNode;
  const cssClass = 'offset-layer';
  if (target === logo || target == home) {
    if (homeSelected.classList.contains(cssClass)) {
      return;
    }
    hideAllBackLayers();
    homeSelected.classList.add(cssClass);
  } else if (target === foodMenu) {
    if (foodMenuSelected.classList.contains(cssClass)) {
      return;
    }
    hideAllBackLayers();
    foodMenuSelected.classList.add(cssClass);
  } else if (target === contact) {
    if (contactSelected.classList.contains(cssClass)) {
      return;
    }
    hideAllBackLayers();
    contactSelected.classList.add(cssClass);
  }
};

const hideAllBackLayers = () => {
  const cssOffsetClass = 'offset-layer';
  const cssNormalClass = 'menu-item-back-layer';

  homeSelected.classList.remove(cssOffsetClass);
  // homeSelected.classList.add(cssNormalClass);

  foodMenuSelected.classList.remove(cssOffsetClass);
  // foodMenuSelected.classList.add(cssNormalClass);

  contactSelected.classList.remove(cssOffsetClass);
  // contactSelected.classList.add(cssNormalClass);
};

const callShowMenu = () => {
  clearContent();
  showMenu(contentHolder);
};

const callShowContact = () => {
  clearContent();
  showContact(contentHolder);
};

const setupEventListeners = () => {
  logo.firstElementChild.addEventListener('click', callShowHome);
  logo.firstElementChild.addEventListener('click', callShowSelected);

  home.firstElementChild.addEventListener('click', callShowHome);
  home.firstElementChild.addEventListener('click', callShowSelected);

  foodMenu.firstElementChild.addEventListener('click', callShowMenu);
  foodMenu.firstElementChild.addEventListener('click', callShowSelected);

  contact.firstElementChild.addEventListener('click', callShowContact);
  contact.firstElementChild.addEventListener('click', callShowSelected);
};

const content = document.querySelector('#content');
initialPageLoad(content);
setupEventListeners();

const initHomeEvent = {
  target: {
    parentNode: home,
  },
};
callShowSelected(initHomeEvent);
