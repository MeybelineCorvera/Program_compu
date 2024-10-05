//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function obtenerMayorNumero(numeros) {
    let mayor = numeros[0]; 
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]; 
        }
    }
    return mayor;
}


let arrayNumeros = [5, 8, 12, 3, 7];
let mayor = obtenerMayorNumero(arrayNumeros);
console.log("El número mayor del array es: " + mayor);
