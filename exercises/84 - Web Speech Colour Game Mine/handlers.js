import { isValidColor } from './colors';

function logWords(results) {
  // console.log(results[results.length - 1][0].transcript);
  return results[results.length - 1][0].transcript;
}

export function handleResult({ results }) {
  // logWords(results);
  const words = results[results.length - 1][0].transcript;
  // lowercase everything
  let color = words.toLowerCase();
  // strip out spaces with regex
  color = color.replace(/\s/g, '');
  // Check if word is a valid colour
  if (!isValidColor(color)) {
    console.log(`${color} is not a color`);
    return;
  }
  // if it is;
  console.log(`${color} is a color`);
  // Target span with class of that colour
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  // Change body background color
  document.body.style.backgroundColor = color;
}
