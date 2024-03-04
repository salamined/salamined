const scriptURL =
  "https://script.google.com/macros/s/AKfycbxA3X6FnbwxKdkzOPrOReTljpIwjjEgI2DsV5xGEelucCnD9ElooUoTV3Vx8m9VdP_4/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
console.log(localStorage.getItem("codigoCliente"));
document.getElementById("codigoC").innerHTML =
  localStorage.getItem("codigoCliente");
