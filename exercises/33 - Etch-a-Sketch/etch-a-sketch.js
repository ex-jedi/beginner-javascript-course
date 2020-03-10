// Select page elements - canvas, shake, button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup canvas for drawing
// Make variables called width and height from those same properties on the canvas object
const { width, height } = canvas;

// Create random x & y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write draw function
function draw({ key }) {
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  // Move x & y according to user input
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write handlers for keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    // Stop arrow key default of moving page (has side effect of preventing any key defaults working if applied outside if statement)
    e.preventDefault();
    draw({ key: e.key });
  }
}

// Clear / Shake function

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
