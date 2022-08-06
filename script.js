const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
});
