/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. 
*/
function divisao(dividendo, divisor) {
    resultado = dividendo / divisor;
    console.log(resultado);
    resto = dividendo % divisor;
    console.log(resto);
  }
  
  divisao(8, 3);