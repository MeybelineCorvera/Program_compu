let qualification = 80;

if (qualification >= 90 && qualification <= 100) {
    console.log("Tu calificación es: A");

} else if (qualification >= 80 && qualification <= 89) {
    console.log("Tu calificación es: B");

} else if (qualification >= 70 && qualification <= 79) {
    console.log("Tu calificación es: C");

} else if (qualification >= 60 && qualification <= 69) {
    console.log("Tu calificación es: D");

} else if (qualification >= 0 && qualification <= 59) {
    console.log("Tu calificación es: F");
} else {
    console.log("Por favor, ingresa una calificación válida entre 0 y 100.");
}