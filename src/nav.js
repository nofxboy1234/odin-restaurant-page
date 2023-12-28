const addLogo = (menu) => {
  const img = document.createElement('img');
  img.src = 'restaurant.png';
  img.alt = 'restaurant logo';
  img.id = 'logo';

  const div = document.createElement('div');
  div.appendChild(img);

  menu.appendChild(div);
};

const addHome = (menu) => {
  const div = document.createElement('div');
  div.textContent = 'Home';

  menu.appendChild(div);
};

const addMenu = (menu) => {
  const div = document.createElement('div');
  div.textContent = 'Menu';

  menu.appendChild(div);
};

const addContact = (menu) => {
  const div = document.createElement('div');
  div.textContent = 'Contact';

  menu.appendChild(div);
};

const flexContainer = () => {
  const div = document.createElement('div');
  div.classList.add('flex-container');
  return div;
};

const addNavMenu = (content) => {
  const menu = flexContainer();
  addLogo(menu);
  addHome(menu);
  addMenu(menu);
  addContact(menu);

  content.appendChild(menu);
};

export { addNavMenu };
