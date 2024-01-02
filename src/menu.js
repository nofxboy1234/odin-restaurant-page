const showMenu = (parent) => {
  const container = document.createElement('div');
  container.classList.add('content-flex-container');

  const innerContainer = document.createElement('div');

  let divParent = document.createElement('div');
  divParent.classList.add('content-flex-container');

  let div = document.createElement('div');
  div.textContent = 'Weird Takoyaki:';
  div.classList.add('content-item');
  divParent.appendChild(div);

  div = document.createElement('div');
  div.textContent = '¥5000';
  div.classList.add('content-item');
  divParent.appendChild(div);

  innerContainer.appendChild(divParent);

  divParent = document.createElement('div');
  divParent.classList.add('content-flex-container');

  div = document.createElement('div');
  div.textContent = 'Mad Bull:';
  div.classList.add('content-item');
  divParent.appendChild(div);

  div = document.createElement('div');
  div.textContent = '¥600';
  div.classList.add('content-item');
  divParent.appendChild(div);

  innerContainer.appendChild(divParent);

  divParent = document.createElement('div');
  divParent.classList.add('content-flex-container');

  div = document.createElement('div');
  div.textContent = 'Yakisoba Bread:';
  div.classList.add('content-item');
  divParent.appendChild(div);

  div = document.createElement('div');
  div.textContent = '¥499';
  div.classList.add('content-item');
  divParent.appendChild(div);

  innerContainer.appendChild(divParent);

  container.appendChild(innerContainer);
  container.classList.add('content');
  parent.appendChild(container);
};

export { showMenu };
