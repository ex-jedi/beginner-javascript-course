// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375922139
// https://icanhazdadjoke.com/api API
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');
const jokeText = document.querySelector('.jokeText');

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

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchJoke() {
  // Show loader
  loader.classList.remove('hidden');
  // Hide Joke
  jokeText.classList.add('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  // console.log(response);
  await wait(500);
  const data = await response.json();
  // Hide loader
  loader.classList.add('hidden');
  // Shoe joke
  jokeText.classList.remove('hidden');
  // console.log(data);
  return data;
  // return response.json();
}

// Utility function to get random item from array.
function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log(not);
    console.log('You already said that');
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  // Fetch request returns an object which has a joke property. Storing it a variable 'joke' using destructuring
  const { joke } = await fetchJoke();
  // console.log(joke);
  jokeHolder.textContent = joke;
  jokeText.textContent = randomItemFromArray(buttonText, jokeText.textContent);
}

jokeButton.addEventListener('click', handleClick);

// fetchJoke();
