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

const callShowHomeSelected = () => {
  if (homeSelected.classList.contains('menu-item-back-layer-offset')) {
    return;
  }

  hideAllBackLayers();

  homeSelected.classList.toggle('menu-item-back-layer');
  homeSelected.classList.toggle('menu-item-back-layer-offset');
};

const callShowMenuSelected = () => {
  if (foodMenuSelected.classList.contains('menu-item-back-layer-offset')) {
    return;
  }

  hideAllBackLayers();

  foodMenuSelected.classList.toggle('menu-item-back-layer');
  foodMenuSelected.classList.toggle('menu-item-back-layer-offset');
};

const callShowContactSelected = () => {
  if (contactSelected.classList.contains('menu-item-back-layer-offset')) {
    return;
  }

  hideAllBackLayers();

  contactSelected.classList.toggle('menu-item-back-layer');
  contactSelected.classList.toggle('menu-item-back-layer-offset');
};

const hideAllBackLayers = () => {
  homeSelected.classList.remove('menu-item-back-layer-offset');
  homeSelected.classList.add('menu-item-back-layer');

  foodMenuSelected.classList.remove('menu-item-back-layer-offset');
  foodMenuSelected.classList.add('menu-item-back-layer');

  contactSelected.classList.remove('menu-item-back-layer-offset');
  contactSelected.classList.add('menu-item-back-layer');
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
  home.addEventListener('click', callShowHomeSelected);

  foodMenu.addEventListener('click', callShowMenu);
  foodMenu.addEventListener('click', callShowMenuSelected);

  contact.addEventListener('click', callShowContact);
  contact.addEventListener('click', callShowContactSelected);
};

const content = document.querySelector('#content');
initialPageLoad(content);
setupEventListeners();
callShowHomeSelected();
