const body = document.querySelector("body");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector("nav");

openMenu.addEventListener("click", () => {
  nav.style.display = "flex";
  setTimeout(() => {
    nav.classList.add("open");
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    body.style.maxHeight = "100vh";
    body.style.overflow = "hidden";
  }, 200);
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("open");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  body.style.maxHeight = "auto";
  body.style.overflow = "visible";
  setTimeout(() => {
    nav.style.display = "none";
  }, 200);
});
