// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375922139
// https://icanhazdadjoke.com/api API
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  const response = await fetch('https://icanhazdadjoke.com');
}
