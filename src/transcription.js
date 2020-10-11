class Transcription{

  recognition = new webkitSpeechRecognition();
  fullTranscription = [];
  date = [];
  
  start() {

    var self = this;

    this.recognition.interimResults = true;
    this.recognition.lang = "pt-BR";
    this.recognition.continuous = true;
    this.recognition.start();

    // This event happens when you talk in the microphone
    this.recognition.onresult = function(event) {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          // Here you can get the string of what you told
          const content = event.results[i][0].transcript.trim();

          tempOutput.textContent = content;
          self.fullTranscription.push(content);

          self.date.push(moment().format("[ - ]DD/MM/YYYY [às] HH:mm:ss"));
          
          console.log(self.fullTranscription);
        }
      }
    };

    this.fullTranscription.forEach(phrase => {
      finalOutput.textContent = phrase;
    });
  }
  
  stop() {

    this.recognition.stop();
    
    var transcription = "";

    this.fullTranscription.forEach((phrase, index) => {
      transcription += phrase + this.date[index] + "\n";
    })

    const pdf = new PDF();
    pdf.generatePDF(transcription);
  }
}