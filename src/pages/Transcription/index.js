/* eslint-disable react/sort-comp */
import React from 'react';
import { withRouter } from 'react-router-dom';
import jsPDF from 'jspdf';
import api from '../../services/api';

async function documentPDF(blobDocument) {
  const data = new FormData();
  data.append('file', blobDocument, 'a.pdf');

  await api.post('files', data);
}

function generatePDF() {
  const document = new jsPDF();
  document.text('teste', 10, 10);

  const blobDocument = new Blob([document], { type: 'application/pdf' });

  documentPDF(blobDocument);
}
const Transcription = () => {
  generatePDF();
  return 'oi';
};

export default withRouter(Transcription);
