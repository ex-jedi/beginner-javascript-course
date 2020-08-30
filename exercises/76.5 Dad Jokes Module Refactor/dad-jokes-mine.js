// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375823961
// https://icanhazdadjoke.com/api API

// * Folder structure is just an example of how a large app could be structured. Best to keep in simple, and don't over think it.

const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');
const jokeText = document.querySelector('.jokeText');

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

jokeButton.addEventListener('click', handleClick);

// fetchJoke();
