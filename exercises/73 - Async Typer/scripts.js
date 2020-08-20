// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375835674
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

// Done this way so you can add a number as a third argument to test the function
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

async function draw(el) {
  const text = el.textContent;
  let soFar = '';
  // For initial wait
  // el.textContent = soFar;
  // await wait(2000);
  for (const letter of text) {
    console.log(letter);
    soFar += letter;
    console.log(soFar);
    el.textContent = soFar;
    // Wait for some amount of time
    console.log(el.dataset);
    const amountOfTimeToWait = getRandomBetween();
    await wait(amountOfTimeToWait);
  }
}

const els = document.querySelectorAll('[data-type]').forEach(draw);
