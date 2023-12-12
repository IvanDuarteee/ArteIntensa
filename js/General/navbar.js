function handleNavbarBackground() {
    const navbar = document.getElementById("navbarOrigin");
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-transparent");
    } else {
      navbar.classList.remove("navbar-transparent");
    }
  }
  
  window.addEventListener("scroll", handleNavbarBackground);
  