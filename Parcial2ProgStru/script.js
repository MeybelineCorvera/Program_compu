// Función para cambiar el texto del título
function cambiarTexto() {
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Hola Mundo con JavaScript";
}

// Función para cambiar el color del texto del título a rojo
function cambiarColor() {
    let titulo = document.getElementById("titulo");
    titulo.style.color = "red";
}

// Función para cambiar la alineación del texto del título al centro
function cambiarAlineacion() {
    let titulo = document.getElementById("titulo");
    titulo.style.textAlign = "center";
}

// Función para crear un nuevo texto debajo del título
function crearTexto() {
    // Verifica si el texto ya existe para no crearlo nuevamente
    if (!document.getElementById("nuevoTexto")) {
        let nuevoTexto = document.createElement("p");
        nuevoTexto.id = "nuevoTexto";
        nuevoTexto.textContent = "JavaScript permite crear páginas dinámicas";
        document.body.appendChild(nuevoTexto);
    }
}

// Función para borrar el texto creado
function borrarTexto() {
    let nuevoTexto = document.getElementById("nuevoTexto");
    if (nuevoTexto) {
        nuevoTexto.remove();
    }
}

// Asignar eventos a los botones
document.getElementById("btnCambiarTexto").addEventListener("click", cambiarTexto);
document.getElementById("btnCambiarColor").addEventListener("click", cambiarColor);
document.getElementById("btnCambiarAlineacion").addEventListener("click", cambiarAlineacion);
document.getElementById("btnCrearTexto").addEventListener("click", crearTexto);
document.getElementById("btnBorrarTexto").addEventListener("click", borrarTexto);
