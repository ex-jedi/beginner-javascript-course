// Utility function to get random item from array.
export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log(not);
    console.log('You already said that');
    return randomItemFromArray(arr, not);
  }
  return item;
}
