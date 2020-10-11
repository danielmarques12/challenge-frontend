class PDF {
  
  token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAyMzgxMjUzLCJleHAiOjE2MDI5ODYwNTN9.GA9Zmo-YTZjpubeJdEeJURtUIv_eo6IiNzBip_CxfZY"

  generatePDF(transcription) {
    
    const document = new jsPDF();
    document.text(transcription, 10, 10);
    this.login(document);
    
    // window.open(document.output('bloburl'));
  }

  async login(document) {

    const documentBlob = new Blob([document], {type: "application/pdf"});

    const data = new FormData();
    data.append('file', documentBlob, 'teste.pdf');

    fetch('http://localhost:3333/files', {
      method: 'POST',
      headers: {
        'Authorization': this.token,
      },
      body: data,
    }).then(response => {
      return response.json();
    }).then(sucess => {
      console.log(sucess);
    }).catch(error => {
      console.error(error);
    })
  }

}