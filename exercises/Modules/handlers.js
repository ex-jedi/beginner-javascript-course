// On demand import
// async function handleButtonClick() {
//   const currenciesModule = await import('./currencies.js');
//   console.log(currenciesModule);
// }

// Same with some destructuring
async function handleButtonClick() {
  const { localCurrency, default: currencies } = await import('./currencies.js');
  console.log('localCurrency', localCurrency);
  console.log('currencies', currencies);
}

export { handleButtonClick };
