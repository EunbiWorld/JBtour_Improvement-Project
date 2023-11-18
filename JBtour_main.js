const menu = document.querySelector('#menu');
menu.addEventListener('mouseover', function(event) {
  if (event.target.tagName === 'A') {
    const submenu = event.target.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
      submenu.style.display = 'block';
    }
  }
});
menu.addEventListener('mouseout', function(event) {
  if (event.target.tagName === 'A') {
    const submenu = event.target.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
      submenu.style.display = 'none';
    }
  }
});