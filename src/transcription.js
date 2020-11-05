import pdf from './pdf.js';
import { tempOutput, finalOutput} from './htmlSelector.js';

class Transcription {

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
          const phrase = content.charAt(0).toUpperCase() + content.slice(1);
          
          tempOutput.textContent = phrase;
          self.fullTranscription.push(phrase);

          self.date.push(moment().format("DD/MM/YYYY [às] HH:mm[ - ]"));
          
          console.log(self.fullTranscription);
          // self.update();
        }
      }
    };

    // Tentativa falha de mostrar todo o conteudo da transcrição na tela.

    // this.fullTranscription.forEach(phrase => {
    //   finalOutput.textContent = phrase;
    // });
  }

  stop() {

    this.recognition.stop();
    
    var transcription = "";

    this.fullTranscription.forEach((phrase, index) => {
      transcription += this.date[index] + phrase + "\n";
    });

    pdf.savePDF(transcription);
  }
}

export default new Transcription();