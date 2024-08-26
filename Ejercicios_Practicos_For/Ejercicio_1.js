//MEYBELINE ABIGAIL CORVERA CRUZ  U20240812

// Pedir al usuario que ingrese un número
let num = 15;

// Convertir el valor ingresado a un número entero
num = parseInt(num);

// Crear un array vacío para almacenar los números pares
let evenNumbers = [];

// Usar un bucle for para iterar desde 0 hasta el número ingresado
for (let i = 0; i < num; i += 2) {
    evenNumbers .push(i);
}

console.log(evenNumbers .join(" "));