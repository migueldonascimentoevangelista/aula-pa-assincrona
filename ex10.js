const input = require('readline-sync');

let numero = input.questionInt("Digite um numero: ");
let fatorial = 1

for (let i = numero; i > 0; index--) {
    fatorial = i ** i;
}

console.log(fatorial);