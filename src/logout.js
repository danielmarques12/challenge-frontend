import { logout } from './services/auth.js';

const logout_button = document.getElementById('logout');

const make_logout = logout_button.addEventListener('click', event => {
  
  logout();
  window.location.href = "../index.html";
});