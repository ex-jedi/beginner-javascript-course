// Loading on demand
// import { currencies } from './currencies-mine.js';

export async function handleButtonClick(e) {
  const currenciesModule = await import('./currencies-mine.js');
  console.log(currenciesModule.default);
}
