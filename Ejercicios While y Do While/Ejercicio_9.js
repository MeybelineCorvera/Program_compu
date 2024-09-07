//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

function generarFibonacci(limite) {
    let a = 0; // Primer número de Fibonacci
    let b = 1; // Segundo número de Fibonacci

    console.log(a); 

    while (b <= limite) {
        console.log(b); 
        let siguiente = a + b; // Calcula el siguiente número en la secuencia
        a = b; // Mueve `b` a `a`
        b = siguiente; // Mueve el siguiente número a `b`
    }
}

// Ejemplo 
generarFibonacci(20);
