const cardButtons = document.querySelectorAll('.card-button');

function handleCardButtonClick() {
  console.log('You clicked it!');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);
