//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

function sumarElementos(array) {
    let suma = 0;
    let i = 0;

    do {
        suma += array[i];
        i++;
    } while (i < array.length);

    return suma;
}

// Ya aplicando
const miArray = [1, 2, 3, 4, 5];
const resultado = sumarElementos(miArray);

console.log("La suma de todos los elementos del array es: " + resultado);
