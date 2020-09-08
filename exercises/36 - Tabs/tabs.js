const tabs = document.querySelector('.tabs');
// Searching in tab rather than in document
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// Turn tabPanels into array so we can use find()
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick({ currentTarget }) {
  // Hide all tab panels. Easier to hide them all then show the one you want.
  tabPanels.forEach(panel => (panel.hidden = true));
  // Mark all tabs as unselected
  // Have to use button.setAttribute('aria-selected', false) rather than button.ariaSelected = false for cross browser reasons
  // Some attributes can be accessed as a property with dot notation, for some you have to use setAttribute()
  tabButtons.forEach(button => button.setAttribute('aria-selected', false));
  // Mark clicked tab button as selected
  currentTarget.setAttribute('aria-selected', true);
  // Find associated tab panel and show it
  const { id } = currentTarget;
  // Method one
  // const tabToOpen = tabs.querySelector(`[aria-labelledby="${id}"]`);
  // tabToOpen.hidden = false;
  // Method two - find in array of tab panels. Wes' favoured method as we already have the tabPanels. But either is just fine
  const tabToOpen = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabToOpen.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
