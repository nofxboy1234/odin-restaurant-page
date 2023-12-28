const showContact = (parent) => {
  const div = document.createElement('div');
  div.textContent = 'Contact';
  parent.appendChild(div)
};

export { showContact };
