// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375805123

function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found');
  }

  // Selecting images in this function to maintain scope so this can be reused
  // Selecting within gallery & not document as there are multiple galleries on the page
  const images = Array.from(gallery.querySelectorAll('img'));

  // There will only be one modal on the page so selecting using document
  const modal = document.querySelector('.modal');

  // Selecting previous and next buttons in modal
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  // Keep track of current image open
  let currentImage;

  // Show images function
  function showImage(el) {
    // Safety thing to prevent breaking if there's no image
    if (!el) {
      console.info('No image to show');
    }
    console.log(el);
    // Change modal image source when image is clicked
    modal.querySelector('img').src = el.src;
    // Change modal title when image is clicked
    modal.querySelector('h2').textContent = el.title;
    // Change modal description paragraph text when image is clicked. Uses data attribute
    modal.querySelector('figure p').textContent = el.dataset.description;
    // Update current image (stores what image is open)
    currentImage = el;
  }

  // Loop over images and add event listener. Callback function passes current target as argument to show image function
  images.forEach(image => image.addEventListener('click', e => showImage(e.currentTarget)));
}

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
