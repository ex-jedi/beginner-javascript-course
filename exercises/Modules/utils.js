// This variable is scoped to this module. It's not available globally, but it will work in the function below when that's exported

const first = 'Mark';
const middle = 'Robert';
const last = 'Phoenix';

// Directly export functions/variables
// export function returnHi(name) {
//   return `Hi ${name} ${last}`;
// }

function returnHi(name) {
  return `Hi ${name} ${last}`;
}

// Default export. One per module
export default first;

// Named exports
export { last, middle, returnHi };
