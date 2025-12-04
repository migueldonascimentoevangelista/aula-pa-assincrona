const readlineSync = require('readline-sync');

const n = readlineSync.questionInt("Digite a quantidade de termos da sequência de Fibonacci: ");

let a = 1, b = 1;

console.log("Sequência de Fibonacci:");
for (let i = 1; i <= n; i++) {
  console.log(a);
  const temp = a + b;
  a = b;
  b = temp;
}