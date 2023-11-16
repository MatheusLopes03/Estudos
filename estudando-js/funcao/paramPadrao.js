// Gerar valor padrao
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

// Ao passar o valor 0 como parametro nessa funcao, ira retornar falso e ira assumir o valor de 1 (padrao)
console.log(soma1(), soma1(3), soma1(0, 0, 0));

// Outros modos de gerar valor padrao
function soma2(a, b, c) {
  //Se o valor atribuido ao 'a' for diferente de undefined usara o proprio valor de 'a'
  //Se for undefined asuumira o valor '1'
  a = a != undefined ? a : 1;
  //Se tiver algum argumento no indice 1 ira pegar o valor de 'b' senao ira assumir o valor '1'
  b = 1 in arguments ? b : 1;
  //Se o valor de 'c' nao for um numero ira retornar '1'
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

// Valor padrao do es2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}
