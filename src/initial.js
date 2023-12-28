const addLogo = (parent) => {
  const img = document.createElement('img');
  img.src = 'restaurant.png';
  img.alt = 'restaurant logo';
  img.id = 'logo';
  parent.appendChild(img);
};

const addWelcome = (parent, messages) => {
  messages.forEach((text) => {
    const div = document.createElement('div');
    div.classList.add('welcome');
    div.textContent = text;
    parent.appendChild(div);
  });
};

const messages = () => {
  const messages = [];
  messages.push('Welcome to RESTAURANT.');
  messages.push("We've been around since the beginning of time.");
  messages.push('We look forward to seeing you soon.');
  return messages;
};

const initialPageLoad = () => {
  const content = document.querySelector('#content');

  addLogo(content);
  addWelcome(content, messages());
};

export { initialPageLoad };
