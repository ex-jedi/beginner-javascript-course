/*
  https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375922562

* Converting to modules
* 1. Break code into library (essential stuff), utilities and handlers
* 2. Handle console errors one by one
*/

// Imports
import { generateOptions } from './utils';
import currencies from './currencies';
import { handleInput } from './handlers';
import { fromSelect, toSelect } from './elements';

const form = document.querySelector('.app form');

// Storing generateOptions output in variable as it'll be used twice. Better than running it twice
const optionsHtml = generateOptions(currencies);
fromSelect.innerHTML = optionsHtml;
toSelect.innerHTML = optionsHtml;

form.addEventListener('input', handleInput);
