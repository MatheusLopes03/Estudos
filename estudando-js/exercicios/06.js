/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/
function jurosSimples(capitalInicial, taxaJuros, tempo) {
    return montante = capitalInicial * (1 + taxaJuros * tempo)
}
 jurosSimples(62, 12, 5)

 function jurosComposto(capitalInicial, taxaJuros, tempo) {
    return montante =  capitalInicial * (1 + taxaJuros) ** tempo
 }

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosComposto(100, 10/100, 2));