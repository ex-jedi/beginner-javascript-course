// *=========================================
// ** Imports  **
// *=========================================

import { fromSelect, toSelect } from './elements';
import { generateOptions } from './utils';
import currencies from './currencies';
import { handleInput } from './handlers';

const endpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

export async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}

export async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(`Oh no, we dont have ${from} to convert to ${to}. So gets go get it!`);
    const rates = await fetchRates(from);
    console.log(rates);
    // store them for next time
    ratesByBase[from] = rates;
  }
  // convert that amount that they passed it
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

// Code which needs to run on page load to start the app
export function init() {
  const form = document.querySelector('.app form');

  const optionsHTML = generateOptions(currencies);
  // populate the options elements
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInput);
}
