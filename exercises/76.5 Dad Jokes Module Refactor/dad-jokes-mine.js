// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375823961
// https://icanhazdadjoke.com/api API

import { handleClick } from './lib/handlers';
import { jokeButton } from './lib/elements';

// * Folder structure is just an example of how a large app could be structured. Best to keep in simple, and don't over think it.

jokeButton.addEventListener('click', handleClick);

// fetchJoke();
