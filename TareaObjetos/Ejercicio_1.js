//MEYBELINE ABIGAL CORVERA CRUZ U20240812

// Crear un objeto con el nombre del alumno y sus calificaciones
let alumno = {
    nombre: "Meybeline Corvera", 
    ingles: 87,           
    programacion: 90,     
    matematica: 100,       

    // Método para calcular el promedio de las calificaciones
    calcularPromedio: function() {
        let promedio = (this.ingles + this.programacion + this.matematica) / 3;
        return promedio.toFixed(2); // Redondear el promedio a 2 decimales
    }
};

console.log("Nombre del alumno: " + alumno.nombre);
console.log("Promedio de calificaciones: " + alumno.calcularPromedio());
