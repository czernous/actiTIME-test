import App from './App';
import dropdownToggle from './navbar';
import carousel from './carousel';

const app = async () => {
  document.querySelector('body').appendChild(await App());
  await dropdownToggle();
  await carousel();
};
// Load app
app();
