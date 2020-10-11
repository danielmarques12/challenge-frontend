function main() {
  const transcription = new Transcription();

  startBtn.addEventListener('click', () => transcription.start());
  stopBtn.addEventListener('click', () => transcription.stop());
}

main();