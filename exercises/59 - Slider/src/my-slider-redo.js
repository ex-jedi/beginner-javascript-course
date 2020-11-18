// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375810901
function Slider(slider) {
  // Tests if a valid HTML element has been passed in
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // Create some variables for working  with the element
  // These are defined here as more then one of the functions we'll be making will need to use them
  //* This is a closure!
  let current;
  let prev;
  let next;

  // Select elements needed for the slider
  // Wes made a mistake here and used query selector all
  const slides = document.querySelector('.slides');
  const prevButton = document.querySelector('.goToPrev');
  const nextButton = document.querySelector('.goToNext');

  // To make the slider work it's a case of adding and removing CSS classes

  function startslider() {
    // Update current variable. We don't create this variable here as it would be scoped to this function only and not accessable elsewhere
    // firstElementChild checks for an element. firstChild checks for any node, which can include text nodes.
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, prev, next });
  }

  // Applies classes to current, prev nd next slides. Has to be in the slides function to grab those variables
  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // Remove slider classes from slides
    // Convenient way to remove classes. Put them in an array...
    const classesToRemove = ['prev', 'current', 'next'];
    // Line up the elements we want to remove classes from and spread the class containing array into the arguments list
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    // Hotshot way, Not so easy to understand/read though
    // [prev, current, next].forEach((element) => element.classList.remove(...classesToRemove));

    // Get direction of movement
    // Using destructuring to switch variables
    if (direction === 'back') {
      // Make a new array of the new variables and destructure them over and into the prev, current and next variables
      // if moving back all slides need to be moved back by one, so prev id the one before it, current changes top prev and next to current
      [prev, current, next] = [prev.previousElementSibling, prev, current];
    } else {
      // Do the opposite to above if direction is not back
    }
  }

  // Runs when slider is created
  startslider();
  applyClasses();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
// const noSlider = Slider(document.querySelector('.dog'));
