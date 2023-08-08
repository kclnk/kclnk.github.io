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

/* Parallax */
let text = document.getElementById('h1-text');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  if (value > 500) {

  } else {
    text.style.marginTop = value * 2.5 + 'px';
  }
});
  

document.addEventListener("DOMContentLoaded", function () {
    const navigation = document.querySelector("#h1-text");
    const stickyThreshold = 60;
  
    function toggleStickyNavigation() {
      if (window.scrollY > stickyThreshold) {
        navigation.classList.add("invisible");
        navigation.classList.remove("h1-text");
      } else if (window.scrollY <= stickyThreshold-2) {
        navigation.classList.remove("invisible");
        navigation.classList.add("h1-text");
      }
    }
  
    // Initial check on page load
    toggleStickyNavigation();
  
    // Add scroll event listener to the window
    window.addEventListener("scroll", toggleStickyNavigation);
  });