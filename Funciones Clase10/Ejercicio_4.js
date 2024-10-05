//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirAMayusculas(arr) {
    return arr.map(function(texto) {
        return texto.toUpperCase(); // Convierte cada string a mayúsculas
    });
}


let arrayDeStrings = ["hola", "mundo,", "Abigail", "javascript"];
let arrayEnMayusculas = convertirAMayusculas(arrayDeStrings);
console.log(arrayEnMayusculas);
