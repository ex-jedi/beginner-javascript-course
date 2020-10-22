// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375774374

// MDN Custom Events
// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Array to hold state
let items = [];

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
  // Clear the form. Any of the below works fine. reset() will clear all the inputs in a form.
  // e.currentTarget.item.value = '';
  // e.target.reset();
  e.currentTarget.reset();
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
    <input
    type="checkbox"
    value="${item.id}"
    ${item.complete ? 'checked' : null}>
    <span class="itemName">${item.name}</span>
    <button
    aria-label="Remove ${item.name}"
    value="${item.id}"
    >&times;</button>
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
    // Overwrites items with contents of local storage
    // items = lsItems;
    // Alternative if you don't want to overwrite the array totally Bunch of ways to do this though
    items.push(...lsItems);
    // lsItems.forEach(item => items.push(item));
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
  // console.log(lsItems);
}

function deleteItem(id) {
  console.log('Deleting item', id);
  // Filter out item for deletion
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find(item => item.id === id);
  // Toggles itemRef.complete boolean
  itemRef.complete = !itemRef.complete;
  console.log(itemRef);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);

// Can add multiple listeners for a custom event
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// Delete item by event delegation. Listen for a click on the list but check the target is a button
list.addEventListener('click', function(e) {
  const itemId = parseInt(e.target.value);
  if (e.target.matches('button')) {
    // Below returns a string. Needs to be changed to a number, which is done above.
    deleteItem(itemId);
  }
  if (e.target.matches('[type="checkbox"]')) {
    markAsComplete(itemId);
  }
});

// Runs on pageload to restore items from local storage
restoreFromLocalStorage();
