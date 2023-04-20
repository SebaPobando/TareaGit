// Obtener referencias a los elementos del formulario
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const correoInput = document.getElementById("correo");
const telefonoInput = document.getElementById("telefono");
const mensajeInput = document.getElementById("mensaje");

// Obtener referencia al botón de envío del formulario
const enviarBtn = document.querySelector(".enviar");

// Agregar un controlador de eventos al botón de envío
enviarBtn.addEventListener("click", function(event) {
  // Prevenir que el formulario se envíe automáticamente
  event.preventDefault();

  // Validar los campos del formulario
  let valid = true;
  if (nombreInput.value.trim() === "") {
    alert("El nombre es obligatorio");
    valid = false;
  }
  if (apellidoInput.value.trim() === "") {
    alert("El apellido es obligatorio");
    valid = false;
  }
  if (correoInput.value.trim() === "") {
    alert("El correo es obligatorio");
    valid = false;
  }
  if (telefonoInput.value.trim() === "") {
    alert("El número de celular es obligatorio");
    valid = false;
  }
  if (mensajeInput.value.trim() === "") {
    alert("El mensaje es obligatorio");
    valid = false;
  }

  // Si todos los campos son válidos, enviar el formulario
  if (valid) {
    alert("El mensaje se envió correctamente");
    event.target.closest("formulario").submit();
  }
});
