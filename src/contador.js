// Contador
const fechaObjetivo = moment('2038-01-19T03:14:07Z');

const intervalo = setInterval(() => {
  const ahora = moment();
  const diferencia = fechaObjetivo.diff(ahora);
  const dias = fechaObjetivo.diff(ahora, 'days');
  const horas = fechaObjetivo.diff(ahora, 'hours') % 24;
  const minutos = fechaObjetivo.diff(ahora, 'minutes') % 60;
  const segundos = fechaObjetivo.diff(ahora, 'seconds') % 60;

  document.getElementById('dias').innerHTML = `${dias} días`;
  document.getElementById('horas').innerHTML = `${horas} horas`;
  document.getElementById('minutos').innerHTML = `${minutos} minutos`;
  document.getElementById('segundos').innerHTML = `${segundos} segundos`;

  if (diferencia < 0) {
    clearInterval(intervalo);
    document.getElementById('contador').innerHTML = 'TIME IS OVER';
  }
}, 1000);