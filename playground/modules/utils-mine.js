// Variables are scoped to each file/module. They will be available to function in the same module
// const last = 'Phoenix';

// To export a variable add export in front of it
const middle = 'Robert';
export const last = 'Phoenix';

export function returnHi(name) {
  return `Hi ${name} ${last}`;
}

// Can also use named exports, you can have as many as you want. Really a matter of preference. Wes uses both

export { middle };
