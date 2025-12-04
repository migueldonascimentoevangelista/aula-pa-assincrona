const readlineSync = require('readline-sync');

let numeros = [];
let n;

do {
  n = readlineSync.questionInt("Digite um número (0 para sair): ");
  if (n !== 0) {
    numeros.push(n);
  }
} while (n !== 0);

if (numeros.length === 0) {
  console.log("Nenhum número foi digitado.");
} else {
  const quantidade = numeros.length;
  const soma = numeros.reduce((acc, val) => acc + val, 0);
  const media = soma / quantidade;
  const maior = Math.max(...numeros);
  const menor = Math.min(...numeros);

  console.log(`Quantidade de números digitados: ${quantidade}`);
  console.log(`Média: ${media}`);
  console.log(`Maior valor: ${maior}`);
  console.log(`Menor valor: ${menor}`);
}