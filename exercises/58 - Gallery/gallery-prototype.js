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

  // Open modal
  function openModal() {
    // console.info('Opening Modal');
    // Check if modal is already open (prevents animation being triggered on each image click)
    if (modal.matches('.open')) {
      // console.info('Modal already open');
      return;
    }
    modal.classList.add('open');

    // Event listeners here to bind them to current gallery. If not they fire on all galleries even it they're closed

    // Escape Key listener
    window.addEventListener('keyup', handleKeyUp);

    // Next button listener
    nextButton.addEventListener('click', showNextImage);

    // Prev button listener
    prevButton.addEventListener('click', showPreviousImage);
  }

  // Show next image when next button clicked
  function showNextImage() {
    // || gallery.firstElementChild starts again when last image is reached
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  // Show previous image when previous button clicked
  function showPreviousImage() {
    // || gallery.firstElementChild starts again when last image is reached
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  // Close modal
  function closeModal() {
    modal.classList.remove('open');

    // Cleaning up event listeners
    // Escape Key listener
    window.removeEventListener('keyup', handleKeyUp);

    // Next button listener
    nextButton.removeEventListener('click', showNextImage);

    // Prev button listener
    prevButton.removeEventListener('click', showPreviousImage);
    // TODO: Add event listeners for click and keyboard
  }

  // Close modal when there's a click outside it
  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  // Close modal with escape key
  function handleKeyUp(e) {
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPreviousImage();
  }

  // Show images function
  function showImage(el) {
    // Safety thing to prevent breaking if there's no image
    if (!el) {
      console.info('No image to show');
    }
    // console.log(el);
    // Change modal image source when image is clicked
    modal.querySelector('img').src = el.src;
    // Change modal title when image is clicked
    modal.querySelector('h2').textContent = el.title;
    // Change modal description paragraph text when image is clicked. Uses data attribute
    modal.querySelector('figure p').textContent = el.dataset.description;
    // Update current image (stores what image is open)
    currentImage = el;
    openModal();
  }

  // Event listeners

  // Loop over images and add event listener. Callback function passes current target as argument to show image function
  images.forEach(image => image.addEventListener('click', e => showImage(e.currentTarget)));

  // Modal click outside listener
  modal.addEventListener('click', handleClickOutside);

  // Adds event listener so gallery can be open with enter when user has tabbed to an image
  // Loop over each image
  images.forEach(image =>
    // Attach event listener for each image
    image.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    })
  );
}

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
