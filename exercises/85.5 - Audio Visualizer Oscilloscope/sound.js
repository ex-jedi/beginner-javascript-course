// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375797239
// A lot of this is very specific to audio so don't worry if it's hard to follow
const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
// Initiated here so it can be used globally, for simplicity
let analyser;

function handleError(err) {
  console.log('You must allow mic if this is gonna work!');
  const wrong = new Error(err);
  console.log(wrong);
}

// Microphones are only accessable over a secure origin. Localhost or https.
async function getAudio() {
  // Get users microphone
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(handleError);
  // Create new audio context
  const audioCtx = new AudioContext();
  // Create audio analyser
  analyser = audioCtx.createAnalyser();
  // Pass user audio into audio context and store in variable
  const source = audioCtx.createMediaStreamSource(stream);
  // Pipe source into analyser
  source.connect(analyser);
  // How much data do we want to collect?
  analyser.fftSize = 2 ** 10; // To the power of - **
  // Extract data from audio
  // Uint8Array is a special array for very large numbers. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
  const timeData = new Uint8Array(analyser.frequencyBinCount);
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);
  drawTimeData(timeData);
}

function drawTimeData(timeData) {
  // Inject the time data into the time data array
  analyser.getByteTimeDomainData(timeData);
  // Call itself as soon as possible
  requestAnimationFrame(() => drawTimeData(timeData));
  console.log(timeData);
}

getAudio();
