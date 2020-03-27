function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');

  if (!terms) {
    return;
  }
  terms.addEventListener('scroll', function(e) {
    console.log(e);
  });
}

scrollToAccept();
