const password = document.querySelector(".password");
const email = document.querySelector(".email");
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
password.required = " ";
email.placeeholde = "Porfavor ingresa tu email";

const validarCampo = () => {
  if (password.value.length < 2) {
    error = true;
    return error;
  } else if (password.value.length > 12) {
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
