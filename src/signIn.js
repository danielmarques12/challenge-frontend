import { api } from './services/api.js';
import { login } from './services/auth.js';

const auth_user_form = document.getElementById('auth_user_form');

const formEvent = auth_user_form.addEventListener('submit', event => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = { email, password };

  authUser(user);
});

const authUser = (user) => {
  api.post('sessions', user)
  .then(response => {
    login(response.data["token"]);
    window.location.href = 'pages/transcription.html';
    })
    .catch(error => {
      console.error(error);
    })
};