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
    console.log('current', current);
    console.log('prev', prev);
    console.log('next', next);
  }

  // Runs when slider is created
  startslider();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
// const noSlider = Slider(document.querySelector('.dog'));
