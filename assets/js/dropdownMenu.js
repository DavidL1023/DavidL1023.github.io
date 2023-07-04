const toggleBtn = document.querySelector('.menu-icon');
const toggleBtnIcon = document.querySelector('.menu-icon img');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen 
    ? 'close'
    : 'bars';
}

// Close the dropdown menu when an item is clicked
const menuItems = document.querySelectorAll('.dropdown-menu a');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'bars';
    });
}

// Close the dropdown menu when clicked outside
document.addEventListener('click', function(event) {
    const targetElement = event.target;
    const isClickInsideMenu = dropDownMenu.contains(targetElement);
    const isClickOnToggleButton = toggleBtn.contains(targetElement);

    if (!isClickInsideMenu && !isClickOnToggleButton) {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'bars';
    }
});
