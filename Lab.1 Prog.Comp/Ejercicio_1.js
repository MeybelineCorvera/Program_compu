// MEYBELINE ABIGAIL CORVERA CRUZ    U20240812

// Declarar las variables para la cantidad actual de cada producto
let shirt = 300;  
let pants = 100; 
let shoes = 90;   

// Calcular el total de productos en el inventario
let totalProductos = shirt + pants + shoes;

// Imprimir el total de productos del inventario
console.log("Total de productos en el inventario:", totalProductos);

// Verificar si es necesario reponer algún producto usando if, else if, else
if (shirt < 100 && pants < 100 && shoes < 100) {
    console.log("Es necesario reponer: camisetas, pantalones y zapatos.");

} else if (shirt < 100 && pants < 100) {
    console.log("Es necesario reponer: camisetas y pantalones.");

} else if (shirt < 100 && shoes < 100) {
    console.log("Es necesario reponer: camisetas y zapatos.");

} else if (pants < 100 && shoes < 100) {
    console.log("Es necesario reponer: pantalones y zapatos.");

} else if (shirt < 100) {
    console.log("Es necesario reponer: camisetas.");

} else if (pants < 100) {
    console.log("Es necesario reponer: pantalones.");

} else if (shoes < 100) {
    console.log("Es necesario reponer: zapatos.");


} else {
    console.log("No es necesario reponer ningún producto.");
}

