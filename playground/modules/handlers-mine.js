// Loading on demand
// import { currencies } from './currencies-mine.js';

export async function handleButtonClick(e) {
  // Cannot use 'default' as it's a reserved work in JavaScript. So, rename it!
  const { localCurrency, default: currency } = await import('./currencies-mine.js');
  console.log(localCurrency, currency);
}
