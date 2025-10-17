let input = require('readline-sync');

let QtdAlunos = input.questionInt("Quantos alunos tem na turma?: ")

for(let i = 1; i <= QtdAlunos; i++){
    let SomaNotas = 0;
    console.log('')
    console.log(`${i}° aluno`)

    for (let n = 1; n<=3; n++){
        let nota = input.questionInt(`Digite a ${n}º nota: `)
        SomaNotas += nota;
    }

    let media = SomaNotas/3;
    console.log(`Média: ${media}`)
    console.log(`Situação: ${media>=7?"Aprovado":"Reprovado"}`)
}