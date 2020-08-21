// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375835674
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

// Done this way so you can add a number as a third argument to test the function
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   // For initial wait
//   el.textContent = soFar;
//   await wait(1000);
//   for (const letter of text) {
//     console.log(letter);
//     soFar += letter;
//     console.log(soFar);
//     el.textContent = soFar;
//     // Wait for some amount of time
//     const { typeMin, typeMax } = el.dataset;
//     console.log(typeMin, typeMax);
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// Recursion alternative
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    // Add exit condition when all the text has been types out
    if (index <= text.length) {
      // Put this here so every letter has a random wait time. If we put it in the outer function it would only be calculated once and every letter would have the same wait time
      const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
      await wait(amountOfTimeToWait);
      drawLetter();
    }
  }
  // When this function draw() runs, kick off drawLetter()
  drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);
