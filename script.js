function lightdark(ichange) {
  const x = document.body;
  x.classList.toggle("dark-mode");
  if (ichange.classList.contains("fa-moon")) {
    ichange.classList.add("fa-sun");
    ichange.classList.remove("fa-moon");
    localStorage.setItem("themeData", x.className);
    console.log(ichange.className);
    localStorage.setItem("themeIcon", ichange.className);
  } else {
    ichange.classList.add("fa-moon");
    ichange.classList.remove("fa-sun");
    localStorage.setItem("themeData", null);
    localStorage.setItem("themeIcon", ichange.className);
  }
}

function showTheme() {
  if (localStorage.getItem("themeData") === "dark-mode") {
    document.body.classList.add(localStorage.getItem("themeData"));
  }

  if (localStorage.getItem("themeIcon")) {
    document.querySelector("#themeIcon1").className =
      localStorage.getItem("themeIcon");
    document.querySelector("#themeIcon2").className =
      localStorage.getItem("themeIcon");
  }
}
showTheme();

function menubar() {
  const mainMenu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".close-menu");
  const openMenu = document.querySelector(".open-menu");

  openMenu.addEventListener("click", show);
  closeMenu.addEventListener("click", close);

  function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
    mainMenu.style.transition = ".3s linear";
  }

  function close() {
    mainMenu.style.top = "-90rem";
  }
}
menubar();

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top + 300 >= offset && top + 300 < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
