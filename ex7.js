let input = require('readline-sync');
let n1 = input.questionInt("Digite qualquer numero: ");
let n2 = input.questionInt("Digite qualquer numero: ");

let maior = n1
let menor = n2 
    
while (n1 !== 0 || n2 !== 0) {
    n1 = input.questionInt("Digite qualquer numero: ");
    n2 = input.questionInt("Digite qualquer numero: ");
    if (n1>maior) {
        maior = n1
    }

    if (n2<menor) {
        menor = n2  
    } 
        
}

console.log(maior);
console.log(menor);