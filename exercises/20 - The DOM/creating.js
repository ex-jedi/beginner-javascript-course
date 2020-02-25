// Create elements
const myParagraph = document.createElement('p');
// No shortcuts to add text content or attributes
myParagraph.textContent = 'I am a paragraph.';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'My photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// Body and some other elements are directly available

// For Performance add as much to the DOM in one go to avoid too many repaints
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = `Here I am!`;

myDiv.insertAdjacentElement('afterbegin', heading);

// My attempt at creating and adding a list

const myList = document.createElement('ul');

const myListItem = document.createElement('li');
myListItem.textContent = 'I am the first';

const myListItemTwo = document.createElement('li');
myListItemTwo.textContent = 'I am the second';

const myListItemThree = document.createElement('li');
myListItemThree.textContent = 'I am the third';

myList.insertAdjacentElement('afterbegin', myListItem);
myList.insertAdjacentElement('beforeEnd', myListItemTwo);
myList.appendChild(myListItemThree);

myDiv.appendChild(myList);

// Coding with Wes

const list = document.createElement('ul');

const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

const li5 = document.createElement('li');
li5.textContent = 'five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

document.body.insertAdjacentElement('afterbegin', list);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);
