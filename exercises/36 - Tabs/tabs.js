const tabs = document.querySelector('.tabs');
// Searching in tab rather than in document
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  // Hide all tab panels. Easier to hide them all then show the one you want.
  tabPanels.forEach(panel => (panel.hidden = true));
  // Mark all tabs as unselected
  // Have to use button.setAttribute('aria-selected', false) rather than button.ariaSelected = false for cross browser reasons
  tabButtons.forEach(button => button.setAttribute('aria-selected', false));
  // Mark clicked tab button as selected
  // Find associated tab panel and show it
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
