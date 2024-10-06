//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

// Definir el array de notas directamente en el código
let notas = [85, 90, 100, 92, 88]; 
let nombre = "Meybeline Corvera"; 

// Esta es la Función para calcular el promedio
function calcularPromedio(notas) {
    let suma = 0;
    // Sumar todas las notas del array
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    // Calcular el promedio
    let promedio = suma / notas.length;
    return promedio;
}

let promedioFinal = calcularPromedio(notas);

// Mostrar el resultado en la consola
console.log("El promedio de las notas de " + nombre + " es: " + promedioFinal);
