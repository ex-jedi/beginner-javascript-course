// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375777421
// Remember that all your code can be read!
// Take care when putting api keys
// Careful to make sure that vital data, such as prices can't be changed client side
// When you allow users to in
// import { sanitize } from 'dompurify.js';

const input = document.querySelector('[name="input"]');
const output = document.querySelector('.output');
const buttons = document.querySelectorAll('nav button');
input.addEventListener('input', () => {
  // const clean = sanitize(input.value, {
  //   FORBID_ATTR: ['width', 'height', 'style'],
  //   FORBID_TAGS: ['style'],
  // });
  output.innerHTML = input.value.replace(/\n/g, '<br>');
});

// trigger an input even on page load
input.dispatchEvent(new Event('input'));

buttons.forEach(button =>
  button.addEventListener('click', e => {
    alert(e.currentTarget.textContent);
  })
);

console.log('Hi');
