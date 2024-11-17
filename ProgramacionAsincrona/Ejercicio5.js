//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

let ejecuciones = 0;

const temporizador = setInterval(() => {
    console.log("Ejecutando tarea...");
    ejecuciones++;

    if (ejecuciones >= 5) {
        clearInterval(temporizador);
        console.log("El temporizador ha sido detenido.");
    }
}, 1000);
