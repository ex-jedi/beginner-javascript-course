// Default import. Only one per module can be exported from each module. Tends to be used if the module does one thing.
// import person from './mark.js';
// DEfaults can be names whatever you want
import thingy from './mark.js';

// Named imports. You have to know what name they've been exported as. Can export multiple.
// import { returnHi, last } from './utils.js';

// Can mix named and default imports from one file
// Can rename imports
import first, { returnHi as sayHi, last, returnHi } from './utils.js';

const name = 'Mark';

// console.log(returnHi(name));

// Renamed returnHi export
console.log(sayHi(name));

console.log(first);
console.log(last);

// console.log(person);
console.log(thingy);
