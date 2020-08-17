const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

async function destroyPopup(popup) {
  popup.classList.remove('open');
  // Waiting for fadeout before removing
  await wait(1000);
  popup.remove();
  // Even though popup is removed from the DOM it's still accessable in JavaScript's memory. So we change it to null
  console.log('Not gone', popup);
  // eslint-disable-next-line no-param-reassign
  popup = null;
  console.log('Gone', popup);
}

function ask(options) {
  return new Promise(async function(resolve) {
    // Create a popup with all the fields
    // Adding form with createElement immediately returns the DOM node so you can add event listeners to it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
      <label>${options.title}</label>
      <input type="text" name="input"/>
      <button type="submit">Submit</button>
    </fieldset>
    `
    );
    // Check if user wants a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      // Need to specify type or it'll make a submit button
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.append(skipButton);
      // TODO: Listen for a click on  the cancel button
    }
    // Listen for submit event on the inputs
    popup.addEventListener(
      'submit',
      function(e) {
        e.preventDefault();
        console.log('Submitted');
        resolve(e.target.input.value);
        // Remove from the DOM
        destroyPopup(popup);
      },
      { once: true }
    );
    // When someone does submit, resolve the data that was in the input box
    // Insert popup into the DOM
    document.body.appendChild(popup);
    // Put very small timeout before we add open class. This puts it in the queue to give element time to fade in.
    await wait(50);
    popup.classList.add('open');
  });
}
