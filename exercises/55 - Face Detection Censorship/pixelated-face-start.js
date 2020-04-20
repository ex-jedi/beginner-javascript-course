const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector();
const SIZE = 7;
const SCALE = 1.5;

// Populate video function

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  // Make canvases same size as video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  faces.forEach(drawFace);
  faces.forEach(censor);
  // Ask browser when next animation frame is and get it to run detect
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCanvas.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // draw small face
  faceCtx.drawImage(
    // 5 source arguments
    video, // Where does the source come from
    face.x, // Where do we start the source pull
    face.y,
    face.width,
    face.height,
    // 4 draw arguments
    face.x, // Where do we start drawing the x & y?
    face.y,
    SIZE,
    SIZE
  );
  // Draw the small face back on but scale up
  const width = face.width * SCALE;
  const height = face.height * SCALE;
  faceCtx.drawImage(
    faceCanvas, // Source
    face.x, // Where do we start the source pull
    face.y,
    SIZE,
    SIZE,
    // Drawing args
    face.x - (width - face.width) / 2, // Where do we start drawing the x & y?
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

populateVideo().then(detect);
