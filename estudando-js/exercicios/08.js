/*
 Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém o
registro de todas as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

const pontuacao = [10, 20, 20, 8, 25, 3, 0, 30, 1];

function comparar(pontuacao) {
  let recorde = pontuacao[0];
  let recordesBatidos = 0;
  let menorValor = pontuacao[0];
  let piorJogo = 0;

  for (let i = 1; i < pontuacao.length; i++) {
    const valorAtual = pontuacao[i];

    if (valorAtual > recorde) {
      recordesBatidos++;
      recorde = valorAtual;
    }
  }

  for (let i = 1; i < pontuacao.length; i++) {
    if (pontuacao[i] < menorValor) {
      menorValor = pontuacao[i];
      piorJogo = i+1;
    }
  }

  console.log("Recordes batidos:", recordesBatidos);
  console.log("Jogo com a menor pontuacao foi:", piorJogo);
}

comparar(pontuacao);
