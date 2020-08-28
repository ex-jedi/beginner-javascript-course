import { convert } from './lib';
import { formatCurrency } from './utils';
import { fromSelect, fromInput, toSelect, toAmount } from './elements';

export async function handleInput() {
  const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
  console.log(rawAmount);
  toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}
