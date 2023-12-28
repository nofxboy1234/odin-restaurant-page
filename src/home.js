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

const showHome = (parent) => {
  addWelcome(parent, messages());
};

export { showHome };
