// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375797239
// A lot of this is very specific to audio so don't worry if it's hard to follow

// Can't use HSL in canvas so importing function to convert to RGB.
import { hslToRgb } from './utils';

const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
// Initiated here so it can be used globally, for simplicity
let analyser;
let bufferLength;

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
  // How many pieces of data are there?
  bufferLength = analyser.frequencyBinCount;
  // Uint8Array is a special array for very large numbers. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
  const timeData = new Uint8Array(bufferLength);
  const frequencyData = new Uint8Array(bufferLength);
  drawTimeData(timeData);
  drawFrequency(frequencyData);
}

function drawTimeData(timeData) {
  // Inject the time data into the time data array
  analyser.getByteTimeDomainData(timeData);
  // Visualise the data
  // 1. Clear the canvas
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  // 2. Setup some canvas drawing
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#0f0';
  ctx.beginPath();
  // Figure out width of each line
  const sliceWidth = WIDTH / bufferLength;
  let x = 0;
  timeData.forEach((data, i) => {
    const v = data / 128;
    const y = (v * HEIGHT) / 2;
    // Draw our lines
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    x += sliceWidth;
  });

  ctx.stroke();
  // Call itself as soon as possible
  requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData) {
  // Put frequency data into our special array
  analyser.getByteFrequencyData(frequencyData);
  // Calculate bar width
  const barWidth = (WIDTH / bufferLength) * 2.5;
  console.log(barWidth);
  let x = 0;
  frequencyData.forEach(amount => {
    // Frequency ranges from 0 - 255
    const percent = amount / 255;
    const [h, s, l] = [360 / (percent * 360) - 0.5, 1, 0.5];
    // Calculate bar height
    const barHeight = HEIGHT * percent * 0.75;
    // Convert colour to HSL
    const [r, g, b] = hslToRgb(h, s, l);
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    x += barWidth + 1;
  });

  requestAnimationFrame(() => drawFrequency(frequencyData));
}

getAudio();
