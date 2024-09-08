//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

let peliculas = [
    { title: "Attack on Titan", genero: "anime" },
    { title: "El Padrino", genero: "crimen" },
    { title: "Annabel", genero: "terror" },
    { title: "Parasite", genero: "drama" },
    { title: "Avengers: Endgame", genero: "accion" }
  ];
  
 
  let generoDeseado = "Terror";  

  generoDeseado = generoDeseado.toLowerCase();

  let peliRecomendada = null; // Variable para almacenar la película recomendada

  
  for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].genero === generoDeseado) {
      peliRecomendada = peliculas[i].title;  // Si coincide el género, se guarda la película
      break;  
    }
  }
  
  
  if (peliRecomendada) {
    console.log(`Te recomiendo ver: ${peliRecomendada}`);
  } else {
    console.log(`Lo sentimos, no tenemos películas disponibles para el género "${generoDeseado}".`);
  }
  