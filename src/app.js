import transcription from './transcription.js';
import { startBtn, stopBtn } from './htmlSelector.js';

function main() {
  startBtn.addEventListener('click', () => transcription.start());
  stopBtn.addEventListener('click', () => transcription.stop());
}

main();