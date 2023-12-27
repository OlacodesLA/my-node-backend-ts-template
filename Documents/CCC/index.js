window.addEventListener("scroll", () => {
  if (scrollY > 500) {
    document.getElementById("totop").style.display = "flex";
  } else {
    document.getElementById("totop").style.display = "none";
  }
});
const scrollUp = () => {
  window.scrollTo(0, 0);
};
// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.right = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.right = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let showFirst = document.querySelector(".showFirst");
showFirst.onclick = function () {
  navLinks.classList.toggle("show1");
};
let showSecond = document.querySelector(".showSecond");
showSecond.onclick = function () {
  navLinks.classList.toggle("show3");
};
