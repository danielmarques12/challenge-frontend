import { api } from './services/api.js';
// import { getToken } from './services/auth.js';

var files = [];

api.get('files')
.then(response => {
  files = response.data;
  filesDiv();
})
.catch(error => {
  console.log(error);
})


function filesDiv() {
  // const div_container = document.getElementById('container');
  for(let i = 0; i < files.length; i++) {
    const div = document.createElement('div');
    div.innerHTML = `
      <a href=${files[i].url}>
        ${files[i].name}
      </a>
    `;
    document.body.appendChild(div);
  };
}