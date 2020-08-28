// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375929658
// Capturing select inputs with attribute selectors
const fromInput = document.querySelector('[name="from_amount"]');
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toAmount = document.querySelector('.to_amount');
const endPoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {}; // Where we're going to store the rates
const form = document.querySelector('.app form');
const locale = navigator.language; // Locale for Intl.NumberFormat

function formatCurrency(amount, currency) {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

async function handleInput(e) {
  const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
  console.log(rawAmount);
  toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}

// Storing generateOptions output in variable as it'll be used twice. Better than running it twice
const optionsHtml = generateOptions(currencies);
fromSelect.innerHTML = optionsHtml;
toSelect.innerHTML = optionsHtml;

form.addEventListener('input', handleInput);
