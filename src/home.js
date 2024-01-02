const addWelcome = (parent, messages) => {
  const container = document.createElement('div');
  container.classList.add('content-flex-container');

  const innerContainer = document.createElement('div');

  messages.forEach((text) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    innerContainer.appendChild(messageDiv);
  });

  container.appendChild(innerContainer);
  container.classList.add('content');
  parent.appendChild(container);
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
