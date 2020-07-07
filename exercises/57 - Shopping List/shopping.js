const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Array to hold state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  // Inputs can be accessed by appending their name (item in this case) to whatever is accessing the form (in this case e.currentTarget 👇🏾.)
  const name = e.currentTarget.item.value;
  // Item object, containing state info. Good to have an ID when creating a list of things, makes it easier to find
  // Useful trick. Using Date.now() to generate unique ID. Only a problem if you're making more than one item a millisecond 👇🏾👇🏾
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // Push items into our state array
  items.push(item);
  // Logs how many items there are, just fyi.
  console.log(`There are ${items.length} items in state`);
  // Clear the form. Either of the below works fine. reset() will clear all the inputs in a form.
  // e.currentTarget.item.value = '';
  e.target.reset();
  displayItems();
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input type="checkbox">
  <span class="itemName">${item.name}</span>
  <button>&times;</button>
  </li>`
    )
    .join('');
  console.log(html);
  list.innerHTML = html;
}

shoppingForm.addEventListener('submit', handleSubmit);
