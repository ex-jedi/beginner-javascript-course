const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]'); // Looking in tabs rather than document so you can have multiple tabs on a page
const tabPanels = tabs.querySelectorAll('[role="tab"]'); // Looking in tabs rather than document so you can have multiple tabs on a page

function handleTabClick(e) {
  console.log(e.currentTarget);
}

tabButtons.forEach((button) => button.addEventListener('click', handleTabClick));
