const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

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
  /*
 Method one
  console.log(id);
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */

  /*
  Method two(my version) - find in the array of tabPanel
  tabPanels.find(panel => {
    if (panel.getAttribute('aria-labelledby') === id) {
      panel.hidden = false;
    }
  });
  */

  // Method two(wes version) - find in the array of tabPanel
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
