async function handleInput(e) {
  const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
