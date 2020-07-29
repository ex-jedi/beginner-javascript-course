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
  const prevButton = document.querySelector('.goToPrev');
  const nextButton = document.querySelector('.goToNext');

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
    if (direction === 'back') {
      // Make new array of current values, use destructuring to overwrite them
      [prev, current, next] = [prev.previousElementSibling, prev, current];
    } else {
      [prev, current, next] = [current, next, next.nextElementSibling];
    }
  }

  // When this slider is created run the startSlider function
  startSlider();
  applyClasses();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
