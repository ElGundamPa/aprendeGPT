const boton = document.querySelector("button");

boton.addEventListener("click", () => {
  alert("Hola! Gracias por hacer click");
});

const titulo = document.querySelector("h1");

titulo.addEventListener("dblclick", () => {
  titulo.textContent = "Titulo Cambiado";
});
