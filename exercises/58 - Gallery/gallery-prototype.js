// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375805123

function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found');
  }
  this.gallery = gallery;
  // Selecting images in this function to maintain scope so this can be reused
  // Selecting within gallery & not document as there are multiple galleries on the page
  this.images = Array.from(gallery.querySelectorAll('img'));

  // There will only be one modal on the page so selecting using document
  this.modal = document.querySelector('.modal');

  // Selecting previous and next buttons in modal
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // Binding our methods to the instance when we need them. This ensures that the this keyword will reference here and not on the thing it's called on. Otherwise, when this is used in an event listener it'll reference the thing to the left of the dot.
  this.showNextImage = this.showNextImage.bind(this);
  this.showPreviousImage = this.showPreviousImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // Event listeners

  // Loop over images and add event listener. Callback function passes current target as argument to show image function
  this.images.forEach(image => image.addEventListener('click', e => this.showImage(e.currentTarget)));

  // Modal click outside listener
  this.modal.addEventListener('click', this.handleClickOutside);

  // Adds event listener so gallery can be open with enter when user has tabbed to an image
  // Loop over each image
  this.images.forEach(image =>
    // Attach event listener for each image
    image.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        this.showImage(e.currentTarget);
      }
    })
  );
}

// Open modal
Gallery.prototype.openModal = function() {
  // console.info('Opening Modal');
  // Check if modal is already open (prevents animation being triggered on each image click)
  if (this.modal.matches('.open')) {
    // console.info('Modal already open');
    return;
  }
  this.modal.classList.add('open');

  // Escape Key listener
  window.addEventListener('keyup', this.handleKeyUp);

  // Next button listener
  this.nextButton.addEventListener('click', this.showNextImage);

  // Prev button listener
  this.prevButton.addEventListener('click', this.showPreviousImage);
};

// Show next image when next button clicked
Gallery.prototype.showNextImage = function() {
  console.log('Showing next image');
  // || gallery.firstElementChild starts again when last image is reached

  this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
};

// Show previous image when previous button clicked
Gallery.prototype.showPreviousImage = function() {
  // || gallery.firstElementChild starts again when last image is reached
  this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
};

// Close modal
Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');

  // Cleaning up event listeners
  // Escape Key listener
  window.removeEventListener('keyup', this.handleKeyUp);

  // Next button listener
  this.nextButton.removeEventListener('click', this.showNextImage);

  // Prev button listener
  this.prevButton.removeEventListener('click', this.showPreviousImage);
  // TODO: Add event listeners for click and keyboard
};

// Close modal when there's a click outside it
Gallery.prototype.handleClickOutside = function(e) {
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

// Close modal with escape key
Gallery.prototype.handleKeyUp = function(e) {
  if (e.key === 'Escape') return this.closeModal();
  if (e.key === 'ArrowRight') return this.showNextImage();
  if (e.key === 'ArrowLeft') return this.showPreviousImage();
};

// Show images function
Gallery.prototype.showImage = function(el) {
  // Safety thing to prevent breaking if there's no image
  if (!el) {
    console.info('No image to show');
  }
  // console.log(el);
  // Change modal image source when image is clicked
  this.modal.querySelector('img').src = el.src;
  // Change modal title when image is clicked
  this.modal.querySelector('h2').textContent = el.title;
  // Change modal description paragraph text when image is clicked. Uses data attribute
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  // Update current image (stores what image is open)
  this.currentImage = el;
  this.openModal();
};

// Use it on the page

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
