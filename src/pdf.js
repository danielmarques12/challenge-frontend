import { api } from './services/api.js';
import { getToken, isAuthenticated } from './services/auth.js';

class PDF {

  async savePDF(transcription) {

    const time = moment().format('DD-MM-YYYY [às] HH:mm:ss');
    console.log(time);
    this.renderPDF(time);
    
    if(isAuthenticated) {
      await api.post('files', {
        time: time,
        transcription: transcription
      });
      console.log('HTTP 200');
    }
  }

  renderPDF(time) {
    const renderpdf = document.getElementById('renderpdf');
    renderpdf.addEventListener('click', () => {
      api.post('files/render', {
        time: time
      })
      .then(response => {
        const file = response.data;
        console.log()
        window.open(file.url);
      })
      .catch(error => {
        console.error(error);
      })
      ;
    });  
  }
}

export default new PDF();