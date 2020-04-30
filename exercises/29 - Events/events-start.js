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

function handleBuyButtonClick(event) {
  // const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log('Buying it!');
  // console.log('Event', event);
  // console.log('Target', event.target); // Thing that gets clicked
  // console.log('Current Target', event.currentTarget); // Thing the event listener is attached to
  // event.target === event.currentTarget ? console.log('Hit') : console.log('Miss');
  // Stop event from bubbling up (triggering events on parent event)
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  event => {
    console.log('Window Target', event.target);
    console.log('You clicked the window');
    console.log('Type', event.type);
  }
  // { capture: true }
);

const photoEL = document.querySelector('.photo');

photoEL.addEventListener('mouseenter', event => {
  console.log('Target', event.currentTarget);
  // 'this' is equal to whatever is left of the dot
  // In arrow functions 'this' is no longer scoped to the element
  console.log('This', this);
});

/*
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
  // 'this' is equal to whatever is left of the dot
  // In arrow functions this is no longer scoped to the element
  console.log('This', this);
});
*/
