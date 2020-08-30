// Sounds obvious, but only import modules into the file that needs it. Even if that means multiple imports

import { fetchJoke } from './index';
import { loader, jokeHolder, jokeText } from './elements';
import { randomItemFromArray } from './utils';
import buttonText from '../data/button-text';

export async function handleClick() {
  // Fetch request returns an object which has a joke property. Storing it a variable 'joke' using destructuring
  const { joke } = await fetchJoke(loader);
  // console.log(joke);
  jokeHolder.textContent = joke;
  jokeText.textContent = randomItemFromArray(buttonText, jokeText.textContent);
}
