// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const list = document.createElement('ul');

// add three list items with the words "one, two three" in them
const liOne = document.createElement('li');
liOne.textContent = 'One';
const liTwo = document.createElement('li');
liTwo.textContent = 'Two';
const liThree = document.createElement('li');
liThree.textContent = 'Three';

list.appendChild(liOne);

// liOne.insertAdjacentElement('afterend', liTwo);

list.appendChild(liTwo);
list.appendChild(liThree);
// put that list into the above wrapper
div.appendChild(list);

// create an image
const image = document.createElement('img');

// set the source to an image
image.src = 'https://picsum.photos/500';

// set the width to 250
image.width = 250;
image.height = 250;

// add a class of cute
image.classList.add('cute');

// add an alt of Cute Puppy
image.alt = 'Cute Puppy';

// Append that image to the wrapper
div.appendChild(image);
console.log(image);

// with HTML string, make a div, with two paragraphs inside of it
const stringOne = `
<div class="myDiv">
  <p>I am a paragraph.</p>
  <p>I am also a paragraph.</p>
</div>
`;

// const myFragment = document.createRange().createContextualFragment(stringOne);

// put this div before the unordered list from above
list.insertAdjacentHTML('beforebegin', stringOne);

// add a class to the second paragraph called warning
// domFragment.lastElementChild.classList.add('warning');
const myDiv = document.querySelector('.myDiv');
myDiv.lastElementChild.classList.add('warning');

// remove the first paragraph
// domFragment.firstElementChild.remove();
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const elemString = `
  <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} tall and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete">Delete</button>
  </div>
  `;

  return elemString;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Mark', 46, '1.8m');
cardsHTML += generatePlayerCard('Kate', 29, '5 feet 2 inches');
cardsHTML += generatePlayerCard('Jon', 41, '6 feet 2 inches');
cardsHTML += generatePlayerCard('Mads', 39, '5 feet 1 inches');

// append those cards to the div
cardsDiv.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
const wrapper = document.querySelector('.wrapper');
wrapper.insertAdjacentElement('beforebegin', cardsDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const deleteButton = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(e) {
  const clickTarget = e.currentTarget;
  clickTarget.closest('.playerCard').remove();
  console.log(clickTarget);
}

// loop over them and attach a listener
deleteButton.forEach(element => {
  element.addEventListener('click', deleteCard);
});
