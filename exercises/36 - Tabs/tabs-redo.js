const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]'); // Looking in tabs rather than document so you can have multiple tabs on a page
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]'); // Looking in tabs rather than document so you can have multiple tabs on a page

function handleTabClick(e) {
  // Hide all tab panels
  tabPanels.forEach((panel) => (panel.hidden = true));
  // Mark all panels as unselected
  // Mark the clicked tab as selected
  // Find associated tab panel and select it
}

tabButtons.forEach((button) => button.addEventListener('click', handleTabClick));
