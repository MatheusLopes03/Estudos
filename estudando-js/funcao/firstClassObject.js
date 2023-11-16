// funcao de forma literal
function fun1() {}

// funcao armazenada em variavel
const fun2 = function () {};

// funcar armazenada em array
const funArray = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

// funcao armazena em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "Opa";
};

// funcao como parametro para outra funcao
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});
