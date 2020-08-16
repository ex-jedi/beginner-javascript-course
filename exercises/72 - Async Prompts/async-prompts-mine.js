function ask(options) {
  return new Promise(function(resolve) {
    // Create a popup with all the fields
    // Adding form with createElement immediately returns the DOM node so you can add event listeners to it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `
    <fieldset>
      <label>${options.title}</label>
    </fieldset>
    `
    );
    // Check if user wants a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      // Need to specify type or it'll make a submit button
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      // TODO: Listen for a click on  the cancel button
    }
    // Listen for submit event on the inputs
    // When someone does SVGNumberList, resolve the data that was in the input box
    // Insert popup into the DOM
    document.body.appendChild(popup);
  });
}
