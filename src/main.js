

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

// contador
const fechaObjetivo = new Date('2038-01-19T03:14:07Z').getTime();

// Actualiza el contador cada segundo
const intervalo = setInterval(() => {
  // Obtén la fecha y hora actual en milisegundos
  const ahora = new Date().getTime();
  
  // Calcula la diferencia entre la fecha objetivo y la fecha actual
  const diferencia = fechaObjetivo - ahora;
  
  // Calcula los días, horas, minutos y segundos restantes
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
  // Muestra el contador en el elemento HTML
  document.getElementById('contador').innerHTML = `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
  
  // Si la fecha objetivo ha pasado, detén el contador
  if (diferencia < 0) {
    clearInterval(intervalo);
    document.getElementById('contador').innerHTML = '¡Ya pasó la fecha objetivo!';
  }
}, 1000); // Se ejecuta cada segundo


// Boton atras
document.getElementById("btnBack").addEventListener("click", function() {
  history.back();
});

