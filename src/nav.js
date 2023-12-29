const createLogo = () => {
  const img = document.createElement('img');
  img.src = 'restaurant.png';
  img.alt = 'restaurant logo';
  img.id = 'logo';

  const div = document.createElement('div');
  div.appendChild(img);
  return div;
};

const addLogo = (menu) => {
  menu.appendChild(logo);
};

const createHome = () => {
  const div = document.createElement('div');
  div.textContent = 'Home';
  return div;
};

const addHome = (menu) => {
  menu.appendChild(home);
};

const createFoodMenu = () => {
  const div = document.createElement('div');
  div.textContent = 'Menu';
  return div;
};

const addFoodMenu = (menu) => {
  menu.appendChild(foodMenu);
};

const createContact = () => {
  const div = document.createElement('div');
  div.textContent = 'Contact';
  return div;
};

const addContact = (menu) => {
  menu.appendChild(contact);
};

const createNavMenu = () => {
  const div = document.createElement('div');
  div.classList.add('flex-container');
  return div;
};

const addNavMenu = (content) => {
  addLogo(navMenu);
  addHome(navMenu);
  addFoodMenu(navMenu);
  addContact(navMenu);

  content.appendChild(navMenu);
};

const navMenu = createNavMenu();
const logo = createLogo();
const home = createHome();
const foodMenu = createFoodMenu();
const contact = createContact();

export { addNavMenu, logo, home, foodMenu, contact };
