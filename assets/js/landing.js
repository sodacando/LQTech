const navLinks = document.querySelectorAll(".nav-link");
const ids = ["#home", "#products", "#about", "#contact"];

// function to add and remove active class from navigation links
function setActiveLink(link) {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    link.classList.add("active");
  }
// function to check which section is currently in view and update active link
function checkSectionInView() {
  const scrollPosition = window.scrollY;

  ids.forEach((id) => {
    const section = document.querySelector(id);
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const correspondingLink = document.querySelector(`a[href="${id}"]`);
      setActiveLink(correspondingLink);
    }
  });
}

// add event listener for scrolling and update active link accordingly
window.addEventListener("scroll", checkSectionInView);