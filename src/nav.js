const addLogo = (menu) => {
  const img = document.createElement('img');
  img.src = 'restaurant.png';
  img.alt = 'restaurant logo';
  img.id = 'logo';

  const div = document.createElement('div');
  div.appendChild(img);

  menu.appendChild(div);
};

const addHome = () => {};

const addMenu = () => {};

const addContact = () => {};

const flexContainer = () => {
  const div = document.createElement('div');
  div.classList.add('flex-container');
  return div;
};

const addNavMenu = (content) => {
  const menu = flexContainer();
  addLogo(menu);

  content.appendChild(menu);
};

export { addNavMenu };
