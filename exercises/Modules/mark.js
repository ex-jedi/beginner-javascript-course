const person = {
  first: 'Mark',
  last: 'Phoenix',
};

// Default export
export default person;

export const dog = 'Rusty';
export const food = 'chicken';

export function eat(food = 'dog food') {
  console.log(`${dog} is eating ${food}`);
}
