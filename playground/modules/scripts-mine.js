// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375926026

// You can import and exports to any files

// To use named exports you must know what their names are when they were exported
// import { returnHi, middle, last } from './utils-mine';

// Can use both named an default modiles like this. Defaults can still be called whatever you want this way
// You can rename named imports
import thisReallyIsMe, { returnHi as sayHi, middle, last } from './utils-mine.js';
import * as everything from './wes-mine.js';

// console.log(everything);
// console.log(everything.dog);
// console.log(everything.default.name);

// There can be only one default export per file and you can name them whatever you want. You can do both in a file/module. Wes tends to use this when a file/module only has one thing in it
// import thisIsMe from './wes-mine';

// console.log(returnHi(name));
// console.log(sayHi('Mark')); // Using renamed import
// console.log(middle);
// console.log(last);
// // console.log(thisIsMe.last);
// console.log(thisReallyIsMe.last);

// Loading on demand
import { handleButtonClick } from './handlers-mine';

const button = document.querySelector('button');
button.addEventListener('click', handleButtonClick);
