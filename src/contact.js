const showContact = (parent) => {
  const container = document.createElement('div');
  container.classList.add('content-flex-container');

  const innerContainer = document.createElement('div');

  let divParent = document.createElement('div');
  divParent.classList.add('content-flex-container');

  let div = document.createElement('div');
  div.textContent = 'Mitsuru Kirijo:';
  div.classList.add('content-item');
  divParent.appendChild(div);

  div = document.createElement('div');
  div.textContent = '999-999-9999';
  div.classList.add('content-item');
  divParent.appendChild(div);

  innerContainer.appendChild(divParent);

  divParent = document.createElement('div');
  divParent.classList.add('content-flex-container');

  div = document.createElement('div');
  div.textContent = 'Yukari Takeba:';
  div.classList.add('content-item');
  divParent.appendChild(div);

  div = document.createElement('div');
  div.textContent = '777-777-7777';
  div.classList.add('content-item');
  divParent.appendChild(div);

  innerContainer.appendChild(divParent);

  container.appendChild(innerContainer);
  container.classList.add('content');
  parent.appendChild(container);
};

export { showContact };
