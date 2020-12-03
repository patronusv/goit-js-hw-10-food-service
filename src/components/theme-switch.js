import { refs } from '../refs/refs.js';
import { Theme } from '../data/data.js';
export const themeToggle = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    if (savedTheme === Theme.DARK) {
      refs.themeSwitchToggle.checked = true;
      refs.body.classList.add(Theme.DARK);
    } else {
      refs.themeSwitchToggle.checked = false;
      refs.body.classList.add(Theme.LIGHT);
    }
  } else {
    refs.themeSwitchToggle.checked = false;
    refs.body.classList.add(Theme.LIGHT);
  }

  const themeTracker = event => {
    const switchPosition = event.currentTarget.checked;
    switchPosition
      ? localStorage.setItem('theme', Theme.DARK)
      : localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.toggle(Theme.LIGHT);
    refs.body.classList.toggle(Theme.DARK);
  };
  refs.themeSwitchToggle.addEventListener('change', themeTracker);
};
