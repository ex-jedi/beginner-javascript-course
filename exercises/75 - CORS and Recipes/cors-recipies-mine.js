// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375840774
// CORS - Cross Origin Resource Sharing. By default you're prevented from sharing data from one domain to another. CORS policy is on the server. Sometimes sites don't implement one so you might have to work around. In this instance a CORS proxy, some other server that'll be between your site and the target site. Don't use for sensitive information!!
const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data.results[0].ingredients);
}

fetchRecipes('pizza');
