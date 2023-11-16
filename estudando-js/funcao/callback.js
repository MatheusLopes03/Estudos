const fabricantes = ["Mercedes", "Audi", "BMW", "Fiat", "Chevrolet"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
