// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375929658
// Capturing select inputs with attribute selectors
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const endPoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {}; // Where we're going to store the rates

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  return (
    // Convert currencies object into array
    Object.entries(options)
      // Mapping over currencies array
      .map(
        // Destructuring array into variables & outputting html template for each item
        ([currencyCode, currencyName]) => `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
      )
      // Joining on nothind so they output as an HTML dump with no commas separating each item
      .join('')
  );
}

async function fetchRates(base = 'USD') {
  const res = await fetch(`${endPoint}?base=${base}`);
  const rates = await res.json();
  // console.log(rates);
  return rates;
}

// We don't want to fetch the rates from the api each time as that'll be very slow. So we need to cache the rates
async function convert(amount, from, to) {
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
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
}

// Storing generateOptions output in variable as it'll be used twice. Better than running it twice
const optionsHtml = generateOptions(currencies);
fromSelect.innerHTML = optionsHtml;
toSelect.innerHTML = optionsHtml;
