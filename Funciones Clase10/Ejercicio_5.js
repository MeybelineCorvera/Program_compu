//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    return true; // Si no encontró ningún divisor, es primo
}


console.log(esPrimo(7));  
console.log(esPrimo(6));
