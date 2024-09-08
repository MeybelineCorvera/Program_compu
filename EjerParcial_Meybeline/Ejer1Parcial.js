//MEYBELINE ABIGAIL CORVERA CRUZ U20240812

let presupuestoFamiliar = [
    { category: "Vivienda", valor: 350 },   // Gasto en Vivienda
    { category: "Alimentos", valor: 400 },   // Gasto en Alimentos
    { category: "Transporte", valor: 200 },  // Gasto en Transporte
    { category: "Entretenimiento", valor: 100 }  // Gasto en Entretenimiento
  ];
  
  let ingresoMensual = 1050;  // Ingreso total de los miembros de la familia
  
  let totalGastos = presupuestoFamiliar[0].valor + 
                    presupuestoFamiliar[1].valor + 
                    presupuestoFamiliar[2].valor + 
                    presupuestoFamiliar[3].valor;
  

  if (totalGastos < ingresoMensual) {
    // Si los gastos son menores que el ingreso, hay ahorro
    let ahorro = ingresoMensual - totalGastos;
    console.log(`El presupuesto está equilibrado y tienes un ahorro de: $${ahorro}`);
  } else if (totalGastos === ingresoMensual) {
    // Si los gastos son iguales al ingreso, el presupuesto está equilibrado sin ahorro
    console.log("El presupuesto está equilibrado y no tienes ahorros.");
  } else {
    // Si los gastos superan el ingreso, hay un déficit
    let deficit = totalGastos - ingresoMensual;
    console.log(`El presupuesto está excedido. Te faltan $${deficit} para cubrir los gastos.`);
  }
  