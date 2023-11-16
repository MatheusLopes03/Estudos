// factory simples
function criarPessoa() {
  return {
    nome: "Arthur",
    sobrenome: "Morgan",
  };
}

console.log(criarPessoa());

function criarProduto(nomeProd, preco) {
  return {
    nomeProd,
    preco,
    desconto: 0.1,
  };
}

console.log(criarProduto("Notebook", 2999.99));
