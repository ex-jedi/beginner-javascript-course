// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375840774
// CORS - Cross Origin Resource Sharing. By default you're prevented from sharing data from one domain to another. CORS policy is on the server. Sometimes sites don't implement one so you might have to work around. In this instance a CORS proxy, some other server that'll be between your site and the target site. Don't use for sensitive information!!
const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

function displayRecipes(recipes) {
  console.log('Creating HTML');
  const html = recipes.map(
    recipe => `
    <div class="recipe">
    <h2>${recipe.title}</h2>
    <p>${recipe.ingredients}</p>
    ${recipe.thumbnail ? `<img src="${recipe.thumbnail}" alt="${recipe.title}" />` : null};
    </div>
    `
  );
  console.log(html);
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  // Turn form off
  el.submit.disabled = true;
  // Submit search
  const recipes = await fetchRecipes(el.query.value);
  console.log(recipes.results[0]);
  displayRecipes(recipes.results);
  el.submit.disabled = false;
}

form.addEventListener('submit', handleSubmit);

fetchRecipes('pizza');
