/* eslint-disable react/sort-comp */
import React from 'react';
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from '@react-pdf/renderer';
import { withRouter } from 'react-router-dom';
import jsPDF from 'jspdf';
import api from '../../services/api';

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#red',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

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
