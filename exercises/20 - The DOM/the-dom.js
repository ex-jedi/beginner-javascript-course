const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('.img');
const heading = document.querySelector('h2');
// console.log(heading.textContent);
// heading.textContent = `Mark is cool!`;
console.log(heading.textContent);
console.log(heading.innerText);
console.log(heading.innerHTML);
console.log(heading.outerHTML);
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList);
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('afterBegin', '🍕');
pizzaList.insertAdjacentText('beforeEnd', '🍕');