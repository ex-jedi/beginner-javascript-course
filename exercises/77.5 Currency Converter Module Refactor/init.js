// Stuff that needs to run on page load

// Where we're going to store the rates
import { fromSelect, toSelect } from './elements';
import { generateOptions } from './utils';
import currencies from './currencies';
import { handleInput } from './handlers';

export function init() {
  const form = document.querySelector('.app form');

  // Storing generateOptions output in variable as it'll be used twice. Better than running it twice
  const optionsHtml = generateOptions(currencies);
  fromSelect.innerHTML = optionsHtml;
  toSelect.innerHTML = optionsHtml;

  form.addEventListener('input', handleInput);
}
