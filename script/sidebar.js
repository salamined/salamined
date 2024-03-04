const sidebar = document.querySelector(".sidebar");
const open_btn = document.querySelector(".open_button");
const close_btn = document.querySelector(".close_button");

open_btn.addEventListener("click", () => {
  sidebar.classList.toggle("transladar_derecha");
});
close_btn.addEventListener("click", () => {
  sidebar.classList.toggle("transladar_derecha");
});
