const showContact = (parent) => {
  const container = document.createElement('div');
  container.classList.add('flex-container');

  const innerContainer = document.createElement('div');

  const food1Div = document.createElement('div');
  food1Div.textContent = 'apple';
  innerContainer.appendChild(food1Div);

  const food2Div = document.createElement('div');
  food2Div.textContent = 'banana';
  innerContainer.appendChild(food2Div);

  container.appendChild(innerContainer);
  parent.appendChild(container);
};

export { showContact };
