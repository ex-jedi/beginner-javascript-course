// const wes = document.querySelector('.wes');

// // For elements
// console.log('children', wes.children);
// console.log('First element child', wes.firstElementChild);
// console.log('Last element child', wes.lastElementChild);
// console.log('Previous element sibling', wes.previousElementSibling);
// console.log('Next element sibling', wes.nextElementSibling);
// console.log('Parent element', wes.parentElement);

// If you create an element and remove if from the DOM it stays in JavaScript memory
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
console.log(p);
