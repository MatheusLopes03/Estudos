//Extrair dados dos arrays e dos objetos e atribuí-los às variáveis.
const pessoa = {
  nome: "Matheus",
  idade: 20,
  endereco: {
    logradouro: "27 de novembro",
    numero: 10,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

//Gerando numero randomico
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 60, min: 40 };
console.log(rand(obj));

//Desestruturando valor aleatorio com array
function randOutro([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const valorOutro = Math.random() * (max - min) + min;
  return Math.floor(valorOutro);
}

console.log(randOutro([40, 50]));
