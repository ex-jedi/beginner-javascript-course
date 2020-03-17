const cardButtons = document.querySelectorAll('.card-button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // Get image src
  const imgSrc = card.querySelector('img').src;
  // Get card description data attribute
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // Populate modal with card info
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
  `;
  modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);
// Show the modal
