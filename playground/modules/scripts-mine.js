// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375926026

// To use named exports you must know what their names are when they were exported
import { returnHi, middle, last } from './utils-mine';

// There can be only one default export per file and you can name them whatever you want
import thisIsMe from './wes-mine';

const name = 'Mark';

console.log(returnHi(name));
console.log(middle);
console.log(last);
console.log(thisIsMe.last);
