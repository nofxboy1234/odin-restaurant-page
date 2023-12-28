const showMenu = (parent) => {
  const div = document.createElement('div');
  div.textContent = 'Menu';
  parent.appendChild(div)
};

export { showMenu };
