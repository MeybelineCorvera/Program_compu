//MEYBELINE ABIGAIL CORVERA CRUZ

document.getElementById("btnFrase").addEventListener("click", obtenerFrase);

async function obtenerFrase() {
  const url ='https://api.adviceslip.com/advice'; // API de frases aleatorias

  try {
    const respuesta = await fetch(url); // Hacer la solicitud a la API
    if (!respuesta.ok) throw new Error("Error al obtener la frase");

    const datos = await respuesta.json(); // Procesar los datos en formato JSON

    // Mostrar la frase y el autor en la página
    document.getElementById("frase").textContent = `"${datos.frase}"`;
    document.getElementById("autor").textContent = `- ${datos.autor}`;
  } catch (error) {
    // Manejar errores y mostrar un mensaje adecuado
    document.getElementById("frase").textContent = "Hubo un error al obtener la frase.";
    document.getElementById("autor").textContent = "";
    console.error("Error:", error);
  }
}
