const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
  console.log(event.currentTarget);
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
