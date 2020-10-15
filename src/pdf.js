import { api } from './services/api.js';
import { getToken, isAuthenticated } from './services/auth.js';

class PDF {
  
  generatePDF(transcription) {
    
    const pdf_document = new jsPDF();
    pdf_document.text(transcription, 10, 10);

    const pdf_document_blob = new Blob([pdf_document], {type: "application/pdf"});
    this.savePDF(pdf_document_blob);
    
    // window.open(pdf_document.output('bloburl'));
  }

  async savePDF(pdf_document_blob) {

    const data = new FormData();
    data.append('file', pdf_document_blob, 'teste.pdf');

    if(isAuthenticated) {
      await api.post('files', data);
      console.log('pdf created');
    }

  }
}

export default new PDF();