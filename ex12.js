const readlineSync = require('readline-sync');

const n = readlineSync.questionInt("Digite um número inteiro positivo: ");

let primo = true;

if (n <= 1) {
  primo = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  console.log(`${n} é primo.`);
} else {
  console.log(`${n} não é primo.`);
}