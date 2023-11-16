// 'this' varia conforme a chamada
let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);

comparaComThis(global);
comparaComThis(obj);

// 'this' nao varia
let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
