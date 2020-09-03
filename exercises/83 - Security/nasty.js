// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375777421
// Remember that all your code can be read!
// Take care when putting api keys
// Careful to make sure that vital data, such as prices can't be changed client side
// Need to be very careful to
// When you allow users to input html users can run JavaScript on the page. onload or onerror attributes on img tag can allow malicious JavaScript on your site
// Always send and receive data requests to https

import { sanitize } from 'dompurify';

const input = document.querySelector('[name="input"]');
const output = document.querySelector('.output');
const buttons = document.querySelectorAll('nav button');
input.addEventListener('input', () => {
  const clean = sanitize(input.value, {
    FORBID_ATTR: ['width', 'height', 'style'],
    FORBID_TAGS: ['style'],
  });
  output.innerHTML = clean.replace(/\n/g, '<br>');
});

// trigger an input even on page load
input.dispatchEvent(new Event('input'));

buttons.forEach(button =>
  button.addEventListener('click', e => {
    alert(e.currentTarget.textContent);
  })
);

console.log('Hi');
