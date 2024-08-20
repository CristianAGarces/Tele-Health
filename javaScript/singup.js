const password = document.querySelector(".password");
const nombre = document.querySelector(".nombre");
const email = document.querySelector(".email");
const telefono = document.querySelector(".telefono");
const envio = document.querySelector(".btn-send");

envio.addEventListener("click", (evt) => {
  evt.preventDefault();
  let error = validarCampo();
  if (!error) {
    document.write("Solicitud enviada");
  } else {
    alert("Tuviste un error completa bien los campos");
  }
});

password.minLength = "3";
telefono.minLength = "12";
telefono.maxLength = "40";
nombre.minLength = "3";
nombre.maxLength = "40";
password.required = " ";
email.required = " ";
email.placeholder = "Porfavor ingresa tu email";

const validarCampo = () => {
  if (password.value.length < 2) {
    error = true;
    return error;
  } else if (password.value.length > 12) {
    error = true;
    return error;
  }

  if (nombre.value.length < 2 || nombre.value.length > 50) {
    error = true;
    return error;
  }
  if (telefono.value.length < 2 || telefono.value.length > 12) {
    error = true;
    return error;
  }

  if (
    email.value.length < 5 ||
    email.value.length > 20 ||
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1
  ) {
    error = true;
    return error;
  }

  error = false;
  return error;
};
