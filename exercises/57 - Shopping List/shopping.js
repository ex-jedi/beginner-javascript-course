// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375774374

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Array to hold state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  // Inputs can be accessed by appending their name (item in this case) to whatever is accessing the form (in this case e.currentTarget 👇🏾.)
  const name = e.currentTarget.item.value;
  // Prevents blank items being added to items
  if (!name) return;
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
  // Running displayItems() here isn't ideal. If this became more complex coupling these two functions together could be a problem 👇🏾
  // displayItems();
  // Instead we'll fire a custom event when items is updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  // console.log(items);
  const html = items
    .map(
      item => `<li class="shopping-item">
    <input type="checkbox">
    <span class="itemName">${item.name}</span>
    <button aria-label="Remove${item.name}">&times;</button>
    </li>`
    )
    .join('');
  console.log(html);
  console.log(`----------🐈--------`);
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('Saving to local storage');
  // Local storage only takes strings
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  // Retrieve items from local storage
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // Spreads items from local storage into items
    // Could also change items to let. Bunch of ways to do this though
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
  console.log(lsItems);
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
// Can add multiple listeners for a custom event
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// Runs on pageload to restore items from local storage
restoreFromLocalStorage();
