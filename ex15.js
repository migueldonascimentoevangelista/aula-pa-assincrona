const readlineSync = require('readline-sync');

function tabuada() {
  const n = readlineSync.questionInt("Digite um número para ver a tabuada: ");
  console.log(`Tabuada de ${n}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

function verificarPrimo() {
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
}

function fibonacci() {
  const n = readlineSync.questionInt("Digite a quantidade de termos da sequência de Fibonacci: ");
  let a = 1, b = 1;

  console.log("Sequência de Fibonacci:");
  for (let i = 1; i <= n; i++) {
    console.log(a);
    const temp = a + b;
    a = b;
    b = temp;
  }
}

function fatorial() {
  const n = readlineSync.questionInt("Digite um número inteiro não negativo: ");
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  console.log(`${n}! = ${resultado}`);
}

// Menu principal
let opcao;
do {
  console.log("\n===== MENU PRINCIPAL =====");
  console.log("1 - Calcular Tabuada");
  console.log("2 - Verificar Número Primo");
  console.log("3 - Gerar Sequência de Fibonacci");
  console.log("4 - Calcular Fatorial");
  console.log("0 - Sair");
  console.log("==========================");

  opcao = readlineSync.questionInt("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      tabuada();
      break;
    case 2:
      verificarPrimo();
      break;
    case 3:
      fibonacci();
      break;
    case 4:
      fatorial();
      break;
    case 0:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida!");
  }
} while (opcao !== 0);
