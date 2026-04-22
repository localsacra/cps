document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".nav-bar__item.has-dropdown");
  items.forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle("is-open");
      }
    });
  });
});