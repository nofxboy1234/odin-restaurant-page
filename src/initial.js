import { addNavMenu } from './nav.js';
import { showHome } from './home.js';

const createContentHolder = () => {
  const div = document.createElement('div');
  div.id = 'content-holder';
  return div;
};

const addContentHolder = (content) => {
  content.appendChild(contentHolder);
};

const initialPageLoad = (content) => {
  addNavMenu(content);
  addContentHolder(content);
  showHome(contentHolder);
};

const contentHolder = createContentHolder();

export { initialPageLoad, contentHolder };
