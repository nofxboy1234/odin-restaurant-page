import { addWelcome, messages } from './home.js';
import { addLogo } from './nav.js';

const initialPageLoad = () => {
  const content = document.querySelector('#content');

  addLogo(content);
  addWelcome(content, messages());
};

export { initialPageLoad };
