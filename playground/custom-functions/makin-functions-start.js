// Anon function
// function (firstName) {
//   return `Dr. ${firstName}`
// }

// Function expression
// Function is anonymous
const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
};

// Arrow functions
// Arrow functions are anonymous
const inchesToCM = inches => inches * 2.54;

const add = (a, b = 3) => (total = a + b);

// returning an object
const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

// IIFE
// Immediately invoked function expression
(function(name) {
  console.log(`An IFFY. Sweet job ${name}`);
  return `Done`;
})('Mark');

// Methods
const wes = {
  name: `Mark`,
  sayHi() {
    console.log(`Hey ${this.name}`);
    console.log(`Hello Wes`);
    return `Hey Wes`;
  },
  // Shorthand method
  yellHi() {
    console.log('HEYYYY WES');
  },
  // Arrow function method
  whisperHi: () => {
    console.log('Shh, hello Wes.');
  },
};

// Callback functions
// Click callback
const button = document.querySelector('.clickMe');
function handelClick() {
  console.log('Clicked');
}

button.addEventListener('click', function() {
  console.log('Well Done!');
});

setTimeout(function() {
  console.log('Finished');
}, 1000);
