function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  // Make variables for working with slider
  let current;
  let prev;
  let next;
  // Select elements needed for slider
  const slides = slider.querySelector('.slides');
  const prevButton = document.querySelector('.goToPrev');
  const nextButton = document.querySelector('.goToNext');

  function startSlider() {
    // current variable is needed in a number of places so we're making it above
    current = slider.querySelector('.current') || slides.firstElementChild;
    console.log(current);
  }

  // When this slider is created run the startSlider function
  startSlider();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
