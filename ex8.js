let input = require('readline-sync');
let senha = 0;

while (senha!==1234){
    senha = input.questionInt("Digite a senha: ");
    console.log("Acesso negado");
}
console.log("Acesso Permitido");
