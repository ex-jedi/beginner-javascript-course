// Where we're going to store the rates
import { fromSelect, toSelect } from './elements';
import { generateOptions } from './utils';
import currencies from './currencies';
import { handleInput } from './handlers';

const endPoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

export async function fetchRates(base = 'USD') {
  const res = await fetch(`${endPoint}?base=${base}`);
  const rates = await res.json();
  // console.log(rates);
  return rates;
}

// We don't want to fetch the rates from the api each time as that'll be very slow. So we need to cache the rates
export async function convert(amount, from, to) {
  // Check if we have the rates for the chosen currency
  if (!ratesByBase[from]) {
    console.log(`Ruh roh, we don't have ${from} rate to convert your ${amount} ${from} to ${to}. So let's get it.`);
    // If we don't, get them
    const rates = await fetchRates(from);
    console.log(rates);
    // Then store them in our object
    ratesByBase[from] = rates;
    console.log(ratesByBase);
  }

  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  // console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

// Stuff that needs to run on page load
export function init() {
  const form = document.querySelector('.app form');

  // Storing generateOptions output in variable as it'll be used twice. Better than running it twice
  const optionsHtml = generateOptions(currencies);
  fromSelect.innerHTML = optionsHtml;
  toSelect.innerHTML = optionsHtml;

  form.addEventListener('input', handleInput);
}
