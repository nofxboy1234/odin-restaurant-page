import { addNavMenu } from './nav.js';
import { showHome } from './home.js';

import { showMenu } from './menu.js';
import { showContact } from './contact.js';


const initialPageLoad = () => {
  const content = document.querySelector('#content');

  addNavMenu(content);
  showHome(content);
  
  // showMenu(content);
  // showContact(content);
};

export { initialPageLoad };
