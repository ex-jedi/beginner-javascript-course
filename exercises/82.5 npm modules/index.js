// Wes' one line wait for a bit package. Default import so can call it anything!
import holdUp from 'waait';

// Faker. Generates a load of placeholder data
// https://www.npmjs.com/package/faker
// If you see this in the docs.. var faker = require('faker').. this is the old way to do it. Replace with a standard import statement, as below

// Import the whole thing
// import faker from 'faker';
// console.log(faker);
// console.log(`Hello I'm ${faker.name.firstName()}`);

// or Just the bit you need
import { name } from 'faker';

console.log(name);
console.log(`Hello, I'm ${name.firstName()}`);

// Array of fake names
const fakeNames = Array.from({ length: 10 }, name.firstName);
console.log(fakeNames);

async function go() {
  console.log('Going!');
  await holdUp(1000);
  console.log('Ending');
}

go();
