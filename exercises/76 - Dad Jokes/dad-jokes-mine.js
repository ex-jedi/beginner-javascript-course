// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375922139
// https://icanhazdadjoke.com/api API
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'oh dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
  // return response.json();
}

// Utility function to get random item from array.
function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  return item;
}

async function handleClick() {
  // Fetch request returns an object which has a joke property. Storing it a variable 'joke' using destructuring
  const { joke } = await fetchJoke();
  console.log(joke);
  jokeHolder.textContent = joke;
}

jokeButton.addEventListener('click', handleClick);

// fetchJoke();
