// Variables are scoped to each file/module. They will be available to function in the same module
// const last = 'Phoenix';

// To export a variable add export in front of it
const middle = 'Robert';
export const last = 'Phoenix';

export function returnHi(name) {
  return `Hi ${name} ${last}`;
}

// Can also use named exports. Really a matter of preference. WEs uses both

export { middle };
