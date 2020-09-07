const tabs = document.querySelector('.tabs');
// Searching in tab rather than in document
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick({ currentTarget }) {
  // Hide all tab panels. Easier to hide them all then show the one you want.
  tabPanels.forEach(panel => (panel.hidden = true));
  // Mark all tabs as unselected
  // Have to use button.setAttribute('aria-selected', false) rather than button.ariaSelected = false for cross browser reasons
  // Some attributes can be accessed as a property with dot notation, for some you have to use setAttribute()
  tabButtons.forEach(button => button.setAttribute('aria-selected', false));
  // Mark clicked tab button as selected
  // Find associated tab panel and show it
  currentTarget.setAttribute('aria-selected', true);
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
