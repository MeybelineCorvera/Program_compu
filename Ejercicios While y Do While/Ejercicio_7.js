//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

function countOccurrences(array, numBuscado) {
    let count = 0;
    let i = 0;

    while (i < array.length) {
        if (array[i] === numBuscado) {
            count++;
        }
        i++;
    }

    return count;
}

// Ya aplicando
const miArray = [1, 2, 3, 2, 4, 2, 5];
const numero = 3;
const resultado = countOccurrences(miArray, numero);

console.log("El número " + numero + " aparece " + resultado + " veces en el array.");
