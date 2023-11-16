
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Etanol'; 

const litrosConsumidos = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
}


console.log(valorGasto);