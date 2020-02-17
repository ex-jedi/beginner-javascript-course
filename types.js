// ********** Strings **********
const age = 46;
const name = 'Mark';
const test = 'Wut';
const middle = 'Robert';
const last = `Phoenix`;
const sentence = `she's so cool`;
const song = `hey

// there

// girl`;

// const hello = 'my name is ' + name + '. Pleased to meet you';

// looking at backtick
const hello = `Hello, my name is ${name} ${last}. Pleased to meet you! I am ${age} years old`;
const html = `
<div>
  <h2>${name}</h2>
  <p>${hello}</p>
</div>
`;

document.body.innerHTML = html;

// ********** Numbers **********
const a = 10;
const b = 20;

const smarties = 20;
const kids = 3;
const dadGets = smarties % kids;

const eachKidGets = Math.floor(smarties / kids);

console.log(`Each kid gets ${eachKidGets}`);
console.log(`Dad gets ${dadGets}`);
