//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

let contador = 5;

const cuentaRegresiva = setInterval(() => {
    console.log(contador);
    contador--;

    if (contador < 0) {
        console.log("¡Tiempo terminado!");
        clearInterval(cuentaRegresiva);
    }
}, 1000);
