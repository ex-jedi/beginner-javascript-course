const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Array to hold state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  // Inputs can be accessed by appending their name (item in this case) to whatever is accessing the form (in this case e.currentTarget 👇🏾.)
  console.log(e.currentTarget.item.value);
  // Item object, containing state info. Good to have an ID when creating a list of things, makes it easier to find
  // Useful trick. Using Date.now() to generate unique ID. Only a problem if you're making more than one item a millisecond 👇🏾👇🏾
  const item = {
    name,
    id: Date.now(),
  };
}

shoppingForm.addEventListener('submit', handleSubmit);
