// This variable is scoped to this module. It's not available globally, but it will work in the function below when that's exported
const last = 'Phoenix';
const middle = 'Robert';

// Directly export functions/variables
// export function returnHi(name) {
//   return `Hi ${name} ${last}`;
// }

function returnHi(name) {
  return `Hi ${name} ${last}`;
}

// But you can export them too.
// Named exports

export { last, middle, returnHi };
