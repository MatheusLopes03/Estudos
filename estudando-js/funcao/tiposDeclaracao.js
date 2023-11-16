// functions declaration (forma tradicional)
// posso chamar a funcao antes dela ser declarada
function soma(x, y) {
  return x + y;
}

// function expression (atribuir a funcao anonima a variavel/constante)
// so posso chamar a funcao depois dela ser declarada
const sub = function (x, y) {
  return x - y;
};

// named function expression (pouco usada)

const mult = function mult(x, y) {
  return x * y;
};
