const notas = [7.7, 6.7, 5.6, 9.0, 7.1, 8.3, 5.2, 4.3];

// Sem callback
let notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

console.log(notasBaixas);

// Com callback
notasBaixas2 = notas.filter((nota) => nota < 7);

console.log(notasBaixas2);
