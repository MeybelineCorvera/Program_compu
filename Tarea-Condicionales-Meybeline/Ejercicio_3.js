let day = 1;
let numDay;

switch(day){
    case 1:
        numDay = "Lunes";
        break;
    case 2:
        numDay = "Martes";
        break;
    case 3:
        numDay = "Miercoles";
        break;
    case 4:
        numDay = "Jueves";
        break;
    case 5:
        numDay = "Virnes";
        break;
    case 6:
        numDay = "Sabado";
        break;
    case 7:
        numDay = "Domingo";
        break;
    default:
        numDay = "Dia invalido";
}

console.log(numDay);