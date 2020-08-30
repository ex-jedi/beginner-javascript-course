export async function handleClick() {
  // Fetch request returns an object which has a joke property. Storing it a variable 'joke' using destructuring
  const { joke } = await fetchJoke(loader);
  // console.log(joke);
  jokeHolder.textContent = joke;
  jokeText.textContent = randomItemFromArray(buttonText, jokeText.textContent);
}
