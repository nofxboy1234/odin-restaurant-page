import { initialPageLoad, contentHolder } from './initial.js';
import { logo, home, homeSelected, foodMenu, contact } from './nav.js';

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

const callShowHomeSelected = () => {
  homeSelected.classList.toggle('menu-item-back-layer');
  homeSelected.classList.toggle('show-menu-item-back-layer');
};

const callHideHomeSelected = () => {
  homeSelected.classList.toggle('menu-item-back-layer');
  homeSelected.classList.toggle('show-menu-item-back-layer');
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
  logo.addEventListener('click', callShowHome);

  home.addEventListener('click', callShowHome);
  home.addEventListener('mouseover', callShowHomeSelected);
  home.addEventListener('mouseout', callHideHomeSelected);

  foodMenu.addEventListener('click', callShowMenu);
  contact.addEventListener('click', callShowContact);
};

const content = document.querySelector('#content');
initialPageLoad(content);
setupEventListeners();
