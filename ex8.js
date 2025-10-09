let input = require('readline-sync');
let senha = 0
while(senha!=1234){
    let senha = input.questionInt("Digite a senha: ")
    if(senha==1234){
        console.log("Acesso permitido")
    }
}