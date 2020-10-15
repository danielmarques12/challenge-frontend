import { api } from './services/api.js';

const create_user_form = document.getElementById('create_user_form');

  const formEvent = create_user_form.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, email, password };

    createUser(user);
  });

  const createUser = (user) => {
    api.post('users', user)
      .then(response => {
        const addedUser = response.data;
        console.log(`POST: user is added`, addedUser);
      })
      .catch(error => {
        console.error(error);
      })
  };