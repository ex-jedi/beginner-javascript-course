const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('🐛 IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', function() {
  console.log('Im an anon!');
});
coolButton.addEventListener('click', hooray);

coolButton.removeEventListener('click', handleClick);

// * Adding event listener to multiple items
const buyButtons = document.querySelectorAll('.buy');

function buyItem(event) {
  console.log('The Button!');
  // const button = event.currentTarget;
  // console.log('Target', event.target);
  // console.log('Current Target', event.currentTarget);
  // Prevent from bubbling up
  event.stopPropagation();

  // console.log('Buying Item!');
  // console.log(button.textContent);
  // console.log(parseFloat(e.target.dataset.price));
}

function attachListener(element) {
  element.addEventListener('click', buyItem);
}

buyButtons.forEach(attachListener);

window.addEventListener(
  'click',
  function(event) {
    console.log('The Window!');
    console.log('Window Target', event.target);
    console.log('Type', event.type);
    console.log('Bubbles?', event.bubbles);
    // event.stopPropagation();
  }
  // { capture: true }
);

const photoEL = document.querySelector('.photo');

photoEL.addEventListener('mouseenter', event => {
  console.log('Target', event.currentTarget);
  // This is equal to whatever is left of the dot
  // In arrow functions this is no longer scoped to the element
  console.log('This', this);
});
