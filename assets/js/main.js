// assets/js/main.js

document.addEventListener("DOMContentLoaded", function () {
  const anoSpan = document.getElementById("ano") || document.getElementById("ano2");
  if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
  }

  window.Router.loadPage(window.location.pathname);

  document.addEventListener("click", window.Router.handleLinkClick);
});

window.addEventListener("popstate", function () {
  window.Router.loadPage(window.location.pathname);
});
