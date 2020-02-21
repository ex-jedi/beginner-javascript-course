// // Global Variables

// const first = 'Mark';   // Not attached to window
// let middle = 'Robert'; // Not attached to window
// var last = 'Phoenix';  // Attached to window

// // Also attached to window
// function sayHi() {
//   console.log('Hi.')
// }

// const age = 100;

// function go() {
//   // A shadow variable
//   const age = 200;
//   console.log(age)
//   const hair = 'Blond';
//   return hair;
// }

// go();
// // let hairCol = go();

// console.log(hair)

// let cool;
// if (1 === 1) {
//    cool = true;
// }

// console.log(cool);

// function isCool(name) {
//    let cool;
//    if (name === 'Mark') {
//       cool = true;
//    }
//    console.log(cool);
//    return cool;
// }

// // let is block scoped. var is not!
// for (let i = 0; i < 5; i++) {
//    console.log(i)
// }

const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog(dog);
}

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
