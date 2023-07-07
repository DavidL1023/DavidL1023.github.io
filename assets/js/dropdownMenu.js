const toggleBtnMenu = document.querySelector('#navbar .bars');
const toggleBtnClose = document.querySelector('#navbar .cross');
const dropDownMenu = document.querySelector('.dropdown-menu');

// Toggle the dropdown menu
function toggleDropdownMenu() {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  if (isOpen) {
    toggleBtnMenu.style.display = 'none'; // Hide the bars icon
    toggleBtnClose.style.display = 'block'; // Show the cross icon
  } else {
    toggleBtnMenu.style.display = 'block'; // Show the bars icon
    toggleBtnClose.style.display = 'none'; // Hide the cross icon
  }
}

toggleBtnMenu.onclick = toggleDropdownMenu;
toggleBtnClose.onclick = toggleDropdownMenu;

// Close the dropdown menu when an item is clicked
const menuItems = document.querySelectorAll('.dropdown-menu a');
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    dropDownMenu.classList.remove('open');
    toggleBtnMenu.style.display = 'block'; // Show the bars icon
    toggleBtnClose.style.display = 'none'; // Hide the cross icon
  });
}

// Close the dropdown menu when clicked outside
document.addEventListener('click', function(event) {
  const targetElement = event.target;
  const isClickInsideMenu = dropDownMenu.contains(targetElement);
  const isClickOnToggleButton =
    toggleBtnMenu.contains(targetElement) ||
    toggleBtnClose.contains(targetElement);

  if (!isClickInsideMenu && !isClickOnToggleButton) {
    dropDownMenu.classList.remove('open');
    toggleBtnMenu.style.display = 'block'; // Show the bars icon
    toggleBtnClose.style.display = 'none'; // Hide the cross icon
  }
});