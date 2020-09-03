window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  if (!('SpeechRecognition' in window)) {
    console.log('Sorry, your browser does not support speech recognition. ');
  } else {
    // start it up
    console.log('...starting');
    const recognition = new SpeechRecognition();
    // Will continuously check speech instead of stopping when it recognises speech
    recognition.continuous = true;
    // Will give results while speaking instead of waiting to the end
    recognition.interimResults = true;
    console.log(recognition);
  }
}
start();
