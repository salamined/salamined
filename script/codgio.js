document.addEventListener("DOMContentLoaded", function () {
  // Manejar el evento de envío del formulario
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar la recarga de la página al enviar el formulario

    // Obtener los datos del formulario
    const formData = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      country: document.getElementById("country").value,
    };

    // Crear una hoja de cálculo
    const ws = XLSX.utils.json_to_sheet([formData]);

    // Crear un libro de trabajo
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Respuestas");

    // Guardar el libro de trabajo como archivo Excel
    const fileName = "respuestas_formulario.xlsx";
    XLSX.writeFile(wb, fileName);

    // Puedes agregar código adicional aquí para enviar los datos al servidor si es necesario
  });
});
