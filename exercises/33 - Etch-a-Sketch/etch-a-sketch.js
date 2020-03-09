// Select page elements - canvas, shake, button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup canvas for drawing
// Make variables called width and height from those same properties on the canvas object
const { width, height } = canvas;

// Create random x & y starting points on the canvas
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write draw function

// Write handlers for keys

// Clear / Shake function

// Listen for arrow keys
