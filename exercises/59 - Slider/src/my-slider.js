function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  // Make variables for working with slider
  // These are needed in a number of places so we're making them here
  let prev;
  let current;
  let next;
  // Select elements needed for slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  // Adds classes to previous, current and next slides
  function applyClasses() {
    prev.classList.add('prev');
    current.classList.add('current');
    next.classList.add('next');
  }

  function move(direction) {
    // Strip all classes from slides
    const classesToRemove = ['prev', 'current', 'next'];
    // Fancy way. Make array ow elements, loop over and spread classes to remove as argument
    // [prev, current, next].forEach(el => el.classlist.remove(...classesToRemove));
    // This does the same but is maybe more readable
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    // Get direction ov movement and update slide classes accordingly
    // Shifting all slides either one forwards or one backwards
    if (direction === 'back') {
      // Make new array of current values, use destructuring to overwrite them
      [prev, current, next] = [
        // Get previous slide or the very last slide - enables wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // Get next slide or very first slide - enables wrapping
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  // When this slider is created run the startSlider function
  startSlider();
  applyClasses();

  // Event listeners
  // Hook up Prev and Next Buttons
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move); // Can just pass reference to function as we don't teen to pass in direction as we have the else option handling this above
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
