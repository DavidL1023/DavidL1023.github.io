const toggleBtn = document.querySelector('.menu-icon');
const toggleBtnIcon = document.querySelector('.menu-icon i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark fa-lg'
    : 'fa-solid fa-bars fa-lg';
}

// Close the dropdown menu when an item is clicked
const menuItems = document.querySelectorAll('.dropdown-menu a');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars fa-lg';
    });
}

// Close the dropdown menu when clicked outside
document.addEventListener('click', function(event) {
    const targetElement = event.target;
    const isClickInsideMenu = dropDownMenu.contains(targetElement);
    const isClickOnToggleButton = toggleBtn.contains(targetElement);

    if (!isClickInsideMenu && !isClickOnToggleButton) {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars fa-lg';
    }
});