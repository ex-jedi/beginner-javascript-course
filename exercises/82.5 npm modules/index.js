// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375820314
// Doesn't work so well with Prepros. Have to link processed file
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
async function getJoke() {
  const { data } = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(data.joke);
}

getJoke();
