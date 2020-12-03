import { refs } from '../refs/refs.js';
import menuTemplate from '../templates/menu.hbs';
import menuList from '../menu.json';
export const createMenuMarkup = () => {
  const markup = menuTemplate(menuList);
  refs.menu.insertAdjacentHTML('beforeend', markup);
};
