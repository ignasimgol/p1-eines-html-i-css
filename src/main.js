

// Hamburger menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// Contador
const fechaObjetivo = new Date('2038-01-19T03:14:07Z').getTime();

// Actualiza el contador cada segundo
const intervalo = setInterval(() => {
  // Obtén la fecha y hora actual en milisegundos
  const ahora = new Date().getTime();

  const diferencia = fechaObjetivo - ahora;
  

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  

  document.getElementById('dias').innerHTML = `${dias} días`;
  document.getElementById('horas').innerHTML = `${horas} horas`;
  document.getElementById('minutos').innerHTML = `${minutos} minutos`;
  document.getElementById('segundos').innerHTML = `${segundos} segundos`;

  if (diferencia < 0) {
    clearInterval(intervalo);
    document.getElementById('contador').innerHTML = 'TIME IS OVER';
  }
}, 1000); // Se ejecuta cada segundo


// Boton atras
document.getElementById("btnBack").addEventListener("click", function() {
  history.back();
});

