const toggleBtnMenu = document.querySelector('#navbar .bars');
const toggleBtnClose = document.querySelector('#navbar .cross');
const dropDownMenu = document.querySelector('.dropdown-menu');

// Toggle the dropdown menu
function toggleDropdownMenu() {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  if (isOpen) {
    toggleBtnMenu.style.display = 'none'
    toggleBtnClose.style.display = 'block';
  } else {
    toggleBtnMenu.style.display = 'block';
    toggleBtnClose.style.display = 'none';
  }
}

toggleBtnMenu.onclick = toggleDropdownMenu;
toggleBtnClose.onclick = toggleDropdownMenu;

// Close the dropdown menu when an item is clicked
const menuItems = document.querySelectorAll('.dropdown-menu a');
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    dropDownMenu.classList.remove('open');
    toggleBtnMenu.style.display = 'block';
    toggleBtnClose.style.display = 'none';
  });
}

// Close the dropdown menu when clicked outside
document.addEventListener('click', function(event) {
  const targetElement = event.target;
  const isClickInsideMenu = dropDownMenu.contains(targetElement);
  const isClickOnToggleButton =
    toggleBtnMenu.contains(targetElement) ||
    toggleBtnClose.contains(targetElement);
  var windowWidth = window.innerWidth

  if (!isClickInsideMenu && !isClickOnToggleButton && windowWidth < 1200) {
    dropDownMenu.classList.remove('open');
    toggleBtnMenu.style.display = 'block'; 
    toggleBtnClose.style.display = 'none';
  }
});

// Hide or show menu icons depending on window width
window.addEventListener('resize', function() {
  dropDownMenu.classList.remove('open');
  var windowWidth = window.innerWidth;
    
  //Large screen (no menu button)
  if (windowWidth >= 1200) {
    toggleBtnMenu.style.display = 'none';
    toggleBtnClose.style.display = 'none';
  //medium screen
  } else if (windowWidth <= 1199) {
    toggleBtnMenu.style.display = 'block';
    toggleBtnClose.style.display = 'none';
  }
});