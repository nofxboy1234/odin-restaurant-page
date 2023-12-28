const addLogo = (parent) => {
  const img = document.createElement('img');
  img.src = 'restaurant.png';
  img.alt = 'restaurant logo';
  img.id = 'logo';
  parent.appendChild(img);
};

const addHome = () => {

}

const addMenu = () => {

}

const addContact = () => {

}

const addNavMenu = (parent) => {
  addLogo(parent);
}

export { addNavMenu };
