// *=========================================
// ** Imports  **
// *=========================================

import { fromSelect, toSelect } from './elements';
import { generateOptions } from './utils';
import currencies from './currencies';
import { handleInput } from './handlers';

// Code which needs to run on page load to start the app
export function init() {
  const form = document.querySelector('.app form');

  const optionsHTML = generateOptions(currencies);
  // populate the options elements
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInput);
}
