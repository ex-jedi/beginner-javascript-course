function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // Select elements needed for slider
  this.slider = slider;
  this.slides = slider.querySelector('.slides');
  // Left as regular variables as we don't need them outside the constructor. But changing them to this works
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // When this slider is created run the startSlider function
  this.startSlider();
  this.applyClasses();

  // Event listeners
  // Hook up Prev and Next Buttons
  // Binding this here to prevent the this keyword being reassigned to the button itself
  // this.move = this.move.bind(this);
  prevButton.addEventListener('click', () => this.move('back'));
  // No need to pass in direction as we have the else option handling it
  // nextButton.addEventListener('click', this.move);
  // Or could use arrow functions to prevent this keyword being reassigned to the button itself
  nextButton.addEventListener('click', () => this.move());

  // Add arrowKeyHandler when slider is focused
  this.arrowKeyHandler = this.arrowKeyHandler.bind(this);
  slider.addEventListener('focus', () => {
    window.addEventListener('keyup', this.arrowKeyHandler);
  });

  // Remove arrowKeyHandler when slider looses focus
  slider.addEventListener('blur', () => {
    window.removeEventListener('keyup', this.arrowKeyHandler);
  });
}

Slider.prototype.startSlider = function() {
  this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  ``;
};

// Adds classes to previous, current and next slides
Slider.prototype.applyClasses = function() {
  this.prev.classList.add('prev');
  this.current.classList.add('current');
  this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
  // Strip all classes from slides
  const classesToRemove = ['prev', 'current', 'next'];
  // Fancy way. Make array ow elements, loop over and spread classes to remove as argument
  // [prev, current, next].forEach(el => el.classlist.remove(...classesToRemove));
  // This does the same but is maybe more readable
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  // Get direction ov movement and update slide classes accordingly
  // Shifting all slides either one forwards or one backwards
  if (direction === 'back') {
    // Make new array of current values, use destructuring to overwrite them
    [this.prev, this.current, this.next] = [
      // Get previous slide or the very last slide - enables wrapping
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // Get next slide or very first slide - enables wrapping
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

// Move slider with arrow keys
Slider.prototype.arrowKeyHandler = function(e) {
  if (e.key === 'ArrowLeft') {
    this.move('back');
  } else if (e.key === 'ArrowRight') {
    this.move();
  }
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);
