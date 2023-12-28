import { initialPageLoad, contentHolder } from './initial.js';
import { navMenu, home, foodMenu, contact } from './nav.js';

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

const callShowMenu = () => {
  clearContent();
  showMenu(contentHolder);
};

const callShowContact = () => {
  clearContent();
  showContact(contentHolder);
};

const setupEventListeners = () => {
  home.addEventListener('click', callShowHome);
  foodMenu.addEventListener('click', callShowMenu);
  contact.addEventListener('click', callShowContact);
};

const content = document.querySelector('#content');
initialPageLoad(content);
setupEventListeners();
