// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const icon = document.getElementById("hamburgerIcon");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  icon.classList.toggle("open");
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();