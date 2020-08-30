// Names export. Can have lots of there
import { jokeText } from './elements';
import { wait } from './utils';

export async function fetchJoke(loader) {
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
