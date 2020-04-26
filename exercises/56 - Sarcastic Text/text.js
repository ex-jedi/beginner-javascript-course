const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

function transformText(text) {
  // Loop over each letter of text
  const mod = Array.from(text);
  console.log(mod);
  result.textContent = text;
}

const filters = {
  sarcastic() {},
  funky() {},
  unable() {},
};

textarea.addEventListener('input', e => transformText(e.target.value));
