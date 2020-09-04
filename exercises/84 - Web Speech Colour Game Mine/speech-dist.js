import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map(
      color => `<span class="color ${isDark(color[1]) && 'dark'}" style="background: ${color[1]};">${color[0]}</span>`
    )
    .join('');
}

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
    // Listen for speech (doesn't ley you add a typical event listener)
    recognition.onresult = handleResult;
    recognition.start();
    console.log(recognition);
  }
}
console.log(colorsByLength);
colorsEl.innerHTML = displayColors(colorsByLength);
start();

//# sourceMappingURL=speech-dist.js.map