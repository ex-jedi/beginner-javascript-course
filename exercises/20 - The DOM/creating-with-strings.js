const item = document.querySelector('.item');
const width = 650;
const description = `Hopefully a dog <img onload="alert('Hacked')" src="https://picsum.photos/400" alt=""/>`;
const src = `https://picsum.photos/${width}`;
const myHTML = `
<div class="wrapper">
  <h2>Heading ${description}!</h2>
  <img src="${src}" alt="${description}"/>
</div>
`;

// Turn string into DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment);

document.body.appendChild(myFragment);
