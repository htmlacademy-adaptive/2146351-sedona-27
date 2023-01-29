let mainHeader = document.querySelector(".main-header");
let headerToggle = document.querySelector(".main-header__toggle");
/* mainHeader.classList.add("main-header--closed"); */
mainHeader.classList.remove("main-header--nojs");

headerToggle.addEventListener("click", function () {
  if (mainHeader.classList.contains("main-header--closed")) {
    mainHeader.classList.remove("main-header--closed");
  } else {
    mainHeader.classList.add("main-header--closed");
  }
});

/* let mainHeader = document.querySelector(".main-header");
let navToggle = document.querySelector(".main-nav__toggle");

mainHeader.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
}); */
