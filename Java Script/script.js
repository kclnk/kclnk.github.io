/* Navigation Bar */
document.addEventListener("DOMContentLoaded", function () {
    const navigation = document.querySelector(".nav-element");
    const stickyThreshold = 60;
  
    function toggleStickyNavigation() {
      if (window.scrollY > stickyThreshold) {
        navigation.classList.add("sticky");
        navigation.classList.remove("nav-element");
      } else {
        navigation.classList.remove("sticky");
        navigation.classList.add("nav-element");
      }
    }
  
    // Initial check on page load
    toggleStickyNavigation();
  
    // Add scroll event listener to the window
    window.addEventListener("scroll", toggleStickyNavigation);
  });

/* Footer */
document.addEventListener("DOMContentLoaded", function () {
  const navigation = document.querySelector(".footer-sec");
  const stickyThreshold = 780;

  function toggleStickyNavigation() {
    if (window.scrollY > stickyThreshold) {
      navigation.classList.add("fsticky");
      navigation.classList.remove("footer-sec");
    } else {
      navigation.classList.remove("fsticky");
      navigation.classList.add("footer-sec");
    }
  }

  // Initial check on page load
  toggleStickyNavigation();

  // Add scroll event listener to the window
  window.addEventListener("scroll", toggleStickyNavigation);
});

/* Parallax */
let text = document.getElementById('text');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  if (value > 500) {

  } else {
    text.style.marginTop = value * 2.5 + 'px';
  }
});