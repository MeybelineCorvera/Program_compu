//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

// 3. Crea una función que reciba un string y devuelve el número de vocales que contiene
function contarVocales(texto) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++; // Aumentamos el contador si es una vocal
        }
    }

    return contador;
}


let texto = "Meybeline";
let totalVocales = contarVocales(texto);
console.log("Total de vocales en la palabra " + texto + " es: " + totalVocales);
