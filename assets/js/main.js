const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu")
})

const navLanguage = document.getElementById("nav-language")
const languageList = document.querySelector(".nav__language-list")

navLanguage.addEventListener("click", () => {
  languageList.classList.toggle("toggle-language")
})
