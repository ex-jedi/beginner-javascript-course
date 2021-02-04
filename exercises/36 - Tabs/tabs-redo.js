const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]'); // Looking in tabs rather than document so you can have multiple tabs on a page
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]')); // Looking in tabs rather than document so you can have multiple tabs on a page

function handleTabClick(e) {
  // Hide all tab panels
  tabPanels.forEach((panel) => (panel.hidden = true));
  // Mark all tabs as unselected
  tabButtons.forEach((tab) => tab.setAttribute('aria-selected', false));
  // Mark the clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  // Find associated tab panel and select it
  const { id } = e.currentTarget;

  // Method one 👇🏾
  // const panelToShow = tabs.querySelector(`[aria-labelledby="${id}"]`);
  // panelToShow.hidden = false;

  // Method 2
  const panelToShow = tabPanels.find((panel) => panel.getAttribute('aria-labelledby') === id);
  panelToShow.hidden = false;
}

tabButtons.forEach((button) => button.addEventListener('click', handleTabClick));
