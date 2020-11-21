// *=========================================
// ** Imports  **
// *=========================================

// Default import doesn't need curly brackets
import currencies from './currencies';

// Named imports use curly brackets
import { generateOptions } from './utils';
import { handleInput } from './handlers';
import { fromSelect, toSelect } from './elements';

const form = document.querySelector('.app form');

const optionsHTML = generateOptions(currencies);
// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
