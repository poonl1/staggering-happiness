const hamburgerMenuElem = document.querySelector("#hamburger-menu");

document.querySelector("#show-hamburger-menu").addEventListener("click", (evt) => {
  hamburgerMenuElem.classList.add("opened");
});

document.querySelector("#hamburger-menu_close-button").addEventListener("click", (evt) => {
  hamburgerMenuElem.classList.remove("opened");
});

hamburgerMenuElem.addEventListener("click", (evt) => {
  if (evt.target.tagName.toLowerCase() === "a") {
    hamburgerMenuElem.classList.remove("opened");
  }
})
