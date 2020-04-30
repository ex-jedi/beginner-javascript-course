const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

/* eslint-disable */
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};
/* eslint-enable */

const filters = {
  sarcastic(letter, index) {
    // Returns 1 (truthy) if letter index is odd so will uppercase letter
    if (index % 2) {
      return letter.toUpperCase();
    }
    // Returns 0 (falsy) if letter index is even so will lowercase letter
    return letter.toLowerCase();
    // return index % 2 ? letter.toUpperCase() : letter.toLowerCase();
  },
  funky(letter) {
    // First check if there is a funky letter for this case
    let funkyLetter = funkyLetters[letter];
    if (funkyLetter) return funkyLetter;
    // If not, is there a lower case one?
    funkyLetter = funkyLetters[letter.toLowerCase()];
    if (funkyLetter) return funkyLetter;
    // If neither, return the letter unaltered
    return letter;
  },
  unable(letter) {
    const random = Math.floor(Math.random() * 3);
    if (letter === ' ' && random === 1) {
      return '...';
    }
    return letter;
  },
};

function transformText(text) {
  // const filter = document.querySelector('[name="filter"]:checked').value;
  const filter = filterInputs.find(radio => radio.checked).value;
  // const filterTest = filterInputs.find(radio => radio.checked);
  // console.dir(filterTest);
  // Loop over each letter of text
  const mod = Array.from(text).map(filters[filter]);
  result.textContent = mod.join('');
}

textarea.addEventListener('input', e => {
  // console.log('current target', e.currentTarget.value);
  // console.log('target', e.target.value);
  transformText(e.currentTarget.value);
});

filterInputs.forEach(input =>
  input.addEventListener('input', () => {
    transformText(textarea.value);
  })
);
