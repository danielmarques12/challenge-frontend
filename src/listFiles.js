import { api } from './services/api.js';
// import { getToken } from './services/auth.js';

const files = [];

api.get('getfiles', { headers: {'Access-Control-Allow-Methods': 'GET'} } )
  .then(response => {
    files.push(response.data);
    console.log(files);
  })
  .catch(error => {
    console.log(error);
  })
