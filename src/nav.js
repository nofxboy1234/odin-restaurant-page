const logo = () => {
  const img = document.createElement('img');
  img.src = 'restaurant.png';
  img.alt = 'restaurant logo';
  img.id = 'logo';

  const div = document.createElement('div');
  div.appendChild(img);
  return div;
};

const addLogo = (menu) => {
  menu.appendChild(logo());
};

const home = () => {
  const div = document.createElement('div');
  div.textContent = 'Home';
  return div;
};

const addHome = (menu) => {
  menu.appendChild(home());
};

const foodMenu = () => {
  const div = document.createElement('div');
  div.textContent = 'Menu';
  return div;
};

const addFoodMenu = (menu) => {
  menu.appendChild(foodMenu());
};

const contact = () => {
  const div = document.createElement('div');
  div.textContent = 'Contact';
  return div;
};

const addContact = (menu) => {
  menu.appendChild(contact());
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
  addFoodMenu(menu);
  addContact(menu);

  content.appendChild(menu);
};

export { addNavMenu };
