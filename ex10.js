const readlineSync = require('readline-sync');

const n = readlineSync.questionInt("Digite um número inteiro não negativo: ");

let resultado = 1;
for (let i = 2; i <= n; i++) {
  resultado *= i;
}

console.log(`${n}! = ${resultado}`)