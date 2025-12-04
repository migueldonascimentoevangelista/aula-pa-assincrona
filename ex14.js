const readlineSync = require('readline-sync');

let total = 0;
let valor;

do {
  valor = readlineSync.questionInt("Digite o valor da compra (0 para finalizar): ");
  total += valor;
} while (valor !== 0);

console.log(`Total a pagar: R$ ${total}`);