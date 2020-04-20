const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');
const faceDetector = new window.FaceDetector();

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
  // draw small face
  faceCtx.drawImage(
    // 5 source arguments
    video, // Where does the source come from
    face.x, // Where do we start the source pull
    face.y,
    face.width,
    face.height,
    // 4 draw arguments
    face.x, // Where do we start drawinf the x & y?
    face.y,
    face.width,
    face.height
  );
  // remove and draw at normal size
  // console.log(face);
}

populateVideo().then(detect);
