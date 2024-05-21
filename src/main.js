


document.addEventListener("DOMContentLoaded", function() {
  // Hamburger menu
  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");

  abrir.addEventListener("click", () => {
    nav.classList.add("visible");
  });

  cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
  });

  // Boton atrás
  document.getElementById("btnBack").addEventListener("click", function() {
    window.location.href = "src/index.html";
  });


});

