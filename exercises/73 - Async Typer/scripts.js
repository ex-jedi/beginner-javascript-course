// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375835674
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

function getRandomBetween(min = 20, max = 150) {
  return Math.floor(Math.random() * (max - min) + min);
}
