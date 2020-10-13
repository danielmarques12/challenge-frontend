/* eslint-disable react/sort-comp */
// import React from 'react';
import { withRouter } from 'react-router-dom';
import JS_PDF from 'jspdf';
import api from '../../services/api';
import Transcription from '../Transcription';

async function documentPDF(blobDocument) {
  const data = new FormData();
  data.append('file', blobDocument, 'a.pdf');

  await api.post('files', data);
}

function generatePDF(transcription) {
  const document = new JS_PDF();
  document.text(transcription, 10, 10);

  const blobDocument = new Blob([document], { type: 'application/pdf' });

  documentPDF(blobDocument);
}

const Main = () => {
  const startBtn = document.querySelector('#start');
  const stopBtn = document.querySelector('#stop');

  startBtn.addEventListener('click', () => Transcription.start());
  stopBtn.addEventListener('click', () => Transcription.stop());

  return 'oi';
};

export default withRouter(Main, generatePDF);
