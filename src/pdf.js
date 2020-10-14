import { api } from './api.js';
import { getToken } from './auth.js';

class PDF {
  
  generatePDF(transcription) {
    
    const pdf_document = new jsPDF();
    pdf_document.text(transcription, 10, 10);

    const pdf_document_blob = new Blob([pdf_document], {type: "application/pdf"});
    this.savePDF(pdf_document_blob);
    
    // window.open(document.output('bloburl'));
  }

  async savePDF(pdf_document_blob) {

    const data = new FormData();
    data.append('file', pdf_document_blob, 'teste.pdf');

    await api.post('files', data);
  }
}

export default new PDF();