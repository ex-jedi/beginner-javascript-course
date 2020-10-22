// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375731570
// Start video at 11.50 minutes

const vid = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector();
const options = {
  SIZE: 10,
  SCALE: 1.5,
};

function handleOption(e) {
  const { value, name } = e.currentTarget;
  console.log(name, value);
  options[name] = parseFloat(value);
}

const optionsInputs = document.querySelectorAll('.controls input[type="range"]');
optionsInputs.forEach(input => input.addEventListener('input', handleOption));
// Populate video function

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  vid.srcObject = stream;
  await vid.play();
  // Make canvases same size as video
  canvas.width = vid.videoWidth;
  canvas.height = vid.videoHeight;
  faceCanvas.width = vid.videoWidth;
  faceCanvas.height = vid.videoHeight;
  console.dir(vid);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  // console.log(face);
  // console.log({ width, height, top, left });
  // console.log(width, height, top, left);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  // console.log(face);
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  faceCanvas.imageSmoothingEnabled = false;
  // draw small face
  faceCtx.drawImage(
    // 5 source arguments
    vid, // Where does the source come from
    face.x, // Where do we start the source pull
    face.y,
    face.width,
    face.height,
    // 4 draw arguments
    face.x, // Where do we start drawing the x & y?
    face.y,
    options.SIZE,
    options.SIZE
  );
  // Draw the small face back on but scale up
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas, // Source
    face.x, // Where do we start the source pull
    face.y,
    options.SIZE,
    options.SIZE,
    // Drawing args
    face.x - (width - face.width) / 2, // Where do we start drawing the x & y?
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

async function detect() {
  const faces = await faceDetector.detect(vid);
  faces.forEach(drawFace);
  faces.forEach(censor);
  // Ask browser when next animation frame is and get it to run detect
  requestAnimationFrame(detect);
  // console.log(faces);
}

populateVideo().then(detect);
