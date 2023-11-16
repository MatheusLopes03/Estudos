function Carro(velMaxima = 200, delta = 5) {
  // atributo privado
  let velAtual = 0;

  // metodo publico
  this.acelerar = function () {
    if (velAtual + delta <= velMaxima) {
      velAtual += delta;
    } else {
      velAtual = velMaxima;
    }
  };

  // metodo publico
  this.getVelAtual = function () {
    return velAtual;
  };
}

const unoEscada = new Carro();
unoEscada.acelerar();
console.log(unoEscada.getVelAtual());

const corsinhaDerrapano = new Carro(350, 20);
corsinhaDerrapano.acelerar();
corsinhaDerrapano.acelerar();
console.log(corsinhaDerrapano.getVelAtual());

console.log(typeof Carro);
console.log(typeof unoEscada);
