const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  const shouldChangePage = confirm(
    'This website might be malicious! Do you want to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});
