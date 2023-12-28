import { addWelcome, messages } from './home.js';

const addLogo = (parent) => {
  const img = document.createElement('img');
  img.src = 'restaurant.png';
  img.alt = 'restaurant logo';
  img.id = 'logo';
  parent.appendChild(img);
};

const initialPageLoad = () => {
  const content = document.querySelector('#content');

  addLogo(content);
  addWelcome(content, messages());
};

export { initialPageLoad };
