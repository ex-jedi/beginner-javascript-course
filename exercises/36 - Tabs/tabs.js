const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
  // Hide non clicked tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // Mark all tabs as unselected
  tabButtons.forEach(tabButtons => {
    tabButtons.setAttribute('aria-selected', false);
  });
  // Mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // Find the associated tab panel and show it
  const { id } = event.currentTarget;
  console.log(id);
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
