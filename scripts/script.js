const colorSelector = document.getElementById("colorselector");
const mesg = document.querySelector(".color-selector__message");
const messageColor = document.getElementById("message");
const inputName = document.getElementById("inputName");
const cambiarTexto = document.getElementById("cambiarTexto");
const colorBox = document.getElementById("colorBox");

//a cambiarTexto agregale la funcionalidad de: hacer click, al hacer click ejecuta la funcion cambiarParrafo

cambiarTexto.addEventListener("click", cambiarParrafo);
colorBox.addEventListener("click", cambiarParrafo);

function cambiarParrafo() {
  console.log("HOLA DESDE LA FUNCION");
  messageColor.textContent = cambiarTexto.textContent;
}

//messageColor.innerHTML = "Cambiando el contenido HTML ";
