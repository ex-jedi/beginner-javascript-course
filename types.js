/* eslint-disable */
console.log('Hello!');
const name = "Mark";
const middle = 'Robert';
const last = `Phoenix`;
const sentence = `she's so cool`;
const song = `hey

there

girl`;

// const hello = 'my name is ' + name + '. Pleased to meet you';

// looking at backtick
const hello = `Hello, my name is ${name} ${last}. Pleased to meet you! I am ${40 + 6} years old`;
const html = `
<div>
  <h2>${name}</h2>
  <p>${hello}</p>
</div>
`;

document.body.innerHTML = html;