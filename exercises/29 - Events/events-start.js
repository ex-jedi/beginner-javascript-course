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
function buyItem(e) {
  console.log('Buying Item!');
  console.log('Target', e.currentTarget);
}

function attachListener(element) {
  console.log('Binding the buy button');
  element.addEventListener('click', buyItem);
}

buyButtons.forEach(attachListener);
