const mostrarReloj = () => {
  let fecha = new Date();
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());

  let horaLocal = document.getElementById("hora");

  let fechaActual = document.getElementById("fecha");

  let contenedor = document.getElementById("contenedor");
  contenedor.classList.toggle('animar');

  horaLocal.innerHTML = `${hr} : ${min} : ${seg}`;

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembte",
    "Diciembre",
  ];

  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  let diaDeLaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();

  let mes = meses[fecha.getMonth()];

  let fechaTexto = `${diaDeLaSemana},${dia} ${mes}`;

  fechaActual.innerHTML = fechaTexto;
};

const formatoHora = (hora) => {
  if (hora < 10) {
    hora = "0" + hora;
  }

  return hora;
};

setInterval(mostrarReloj, 1000);
