// JS/HeaderFooterNavbar.js

function loadFooter() {
    fetch('footer.html')
      .then(r => r.text())
      .then(html => document.getElementById('footerTag').innerHTML = html)
      .catch(console.error);
  }
  
  function loadHeader() {
    fetch('header.html')
      .then(r => r.text())
      .then(html => document.getElementById('headerTag').innerHTML = html)
      .catch(console.error);
  }
  
  function loadNavbar() {
    fetch('navBar.html')
      .then(r => r.text())
      .then(html => document.getElementById('navBarTag').innerHTML = html)
      .catch(console.error);
  }
  
  // Run all three once DOM is ready
  window.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadNavbar();
    loadFooter();
  });
  