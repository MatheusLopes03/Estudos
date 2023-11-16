const ninja = {
    nome:'Narutin',

    atacar:function(){
        console.log(` ${this.nome} jogou sua shuriken`)
    }
}

ninja.atacar();


// Usando metodo de outro objeto

const carro = {
    numero: 400,
    mostrarNumero:function(){
        console.log(this.numero);
    }
}

carro.mostrarNumero();

const moto = {
    numero: 100,
}

carro.mostrarNumero.call(moto);