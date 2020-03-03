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

butts.removeEventListener('click', handleClick);
