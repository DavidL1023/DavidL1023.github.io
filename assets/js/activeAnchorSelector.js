// used to apply active class to current anchor

// Select all navigation link elements
const navLinks = document.querySelectorAll(".nav-links li");

// Get the current URL
const currentURL = window.location.href;

// Loop through each navigation link element
navLinks.forEach(link => {
  const anchor = link.querySelector("a");
  const linkURL = anchor.href;

  // Check if the anchor's href matches the current URL
  if (linkURL === currentURL) {
    link.classList.add("active");
  }
});
