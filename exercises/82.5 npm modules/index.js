// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375820314
// Doesn't work so well with Prepros. Have to link processed file
// Parcel sorts import paths for us. Looks like you have to enter the whole path for Prepros?
//* Waait
// Wes' one line wait for a bit package. Default import so can call it anything!
import holdUp from 'waait';

//* Faker
// Generates a load of placeholder data
// https://www.npmjs.com/package/faker
// If you see this in the docs.. var faker = require('faker').. this is the old way to do it. Replace with a standard import statement, as below

// Import the whole thing
// import faker from 'faker';
// console.log(faker);
// console.log(`Hello I'm ${faker.name.firstName()}`);

// or Just the bit you need
import { name } from 'faker';

//* date-fns
// Nicer way of working with dates
// Importing date distance thing, not all of it.
// https://date-fns.org/v2.16.1/docs/formatDistance
import { formatDistance, format } from 'date-fns';

//* Axios
import axios from 'axios';

//* Lodash
// Helper functions and methods
import { intersection, isEqual } from 'lodash';

//* await-to-js
// Error handling thing
import to from 'await-to-js';

//* Faker
console.log(name);
console.log(`Hello, I'm ${name.firstName()}`);

// Array of fake names
const fakeNames = Array.from({ length: 10 }, () => `${name.firstName()} ${name.lastName()}`);
console.log(fakeNames);

//* Waait
async function go() {
  console.log('Going!');
  await holdUp(1000);
  console.log('Ending');
}

go();

//* date-fns

const diff = formatDistance(new Date(), new Date(2020, 3, 4, 10, 32, 0), { addSuffix: true }); //= > 'in about 1 hour'

console.log(diff);

// How do I get Month Date Year  using date-fns?
const date = new Date();
const formatted = format(date, `MMMM 'the' do y`);
console.log(formatted);

//* Axios
// FEtch is fine for most use cases. But Axios is useful for more involves stuff, when you need more data from the request
async function getJoke() {
  // Can de-structure the response straight into thr data property... const { data } = await axios.get(... console.log(data);
  const response = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(response);
}

getJoke();

//* Lodash
// What numbers are the same in each array?
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [2, 7, 66, 55, 45, 32, 1, 7, 8, 9];

// Lodash helper function - intersection
const sameValues = intersection(a, b);
console.log('Same vals', sameValues);

const personOne = { name: 'Mark' };
const personTwo = { name: 'Mark' };

console.log(isEqual(personOne, personTwo));

//* await-to-js
function checkIfNameIsCool(firstName) {
  return new Promise(function(resolve, reject) {
    if (firstName === 'Mark') {
      resolve('Yaaas');
    } else {
      reject(new Error('Nope!'));
    }
  });
}

// to() method returns an array as the response, first item in the array is the error, second is the data
// You can de-structure the response array
async function checkName(nameToCheck) {
  const [error, success] = await to(checkIfNameIsCool(nameToCheck));
  console.log(error, success);
}
checkName('Tim');
