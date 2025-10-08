# 🔁 Estruturas de Repetição em JavaScript (com readline-sync)

## 🎯 Objetivo
Praticar o uso das estruturas de repetição `for` e `while` em conjunto com as estruturas condicionais `if`, `else if` e `else`, aplicando os princípios da **programação estruturada**.

Neste conteúdo, você deverá **analisar cada problema** e **escolher a melhor estratégia**:
> **Usar `for` ou `while`?**

A decisão de **qual laço de repetição utilizar** faz parte do raciocínio lógico que um bom programador desenvolve.

---

## ⚙️ Preparando o ambiente (para quem tem computador)

Vamos utilizar o pacote **`readline-sync`** para capturar informações do usuário no Node.js.

```js
const input = require("readline-sync");

let nome = input.question("Digite seu nome: ");
console.log("Olá,", nome);
````

> ✏️ Quem estiver sem computador deve anotar a sintaxe no caderno e entender **como a entrada e saída de dados funcionam**, mesmo sem executar o código.

---

## 📘 SINTAXES FUNDAMENTAIS (anote no caderno)

Essas são as **bases** para qualquer programa que use laços de repetição, decisões e variáveis.

---

### 🧩 Declaração de Variáveis

```js
let nome = "Maria"; // variável que pode mudar de valor
const pi = 3.14;    // constante que não muda
```

> ✏️ No caderno: escreva exemplos de variáveis e explique o que cada uma armazena.

---

### 🧩 Entrada e Saída de Dados

```js
const input = require("readline-sync");

let numero = input.questionInt("Digite um número: "); // entrada numérica
console.log("Você digitou:", numero); // saída
```

> ✏️ Anote: **Entrada** é o que o usuário informa.
> **Saída** é o que o programa mostra na tela.

---

### 🧩 Estrutura Condicional Simples

```js
if (idade >= 18) {
  console.log("Maior de idade");
}
```

---

### 🧩 Estrutura Condicional Composta

```js
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

---

### 🧩 Estrutura Condicional Encadeada

```js
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

---

### 🧩 Estrutura de Repetição `for`

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

🧠 **Quando usar o `for`:**

* Quando **sabe exatamente** quantas vezes vai repetir.
* Quando há **um limite claro** (ex: de 1 a 10).
* Quando a repetição é **controlada por um contador**.

✏️ *Anote no caderno:*

> “Uso `for` quando já sei quantas vezes quero repetir.”

---

### 🧩 Estrutura de Repetição `while`

```js
let numero = 1;
while (numero <= 10) {
  console.log(numero);
  numero++;
}
```

🧠 **Quando usar o `while`:**

* Quando **não sei quantas vezes** o laço vai repetir.
* Quando o laço **depende de uma condição** que pode mudar durante a execução.
* Quando quero **esperar algo acontecer** (ex: o usuário digitar uma condição de saída).

✏️ *Anote no caderno:*

> “Uso `while` quando não sei quantas vezes o código vai repetir, apenas sei que ele deve parar quando uma condição for atingida.”

---

## 🚦 Decisão Estratégica: `for` ou `while`?

Antes de resolver qualquer problema, **pense assim**:

| Situação                                         | Melhor escolha | Motivo                                     |
| ------------------------------------------------ | -------------- | ------------------------------------------ |
| Sei quantas vezes preciso repetir                | ✅ `for`        | Contagem ou intervalo fixo                 |
| Não sei quantas vezes vou repetir                | ✅ `while`      | Condição depende de evento (ex: digitar 0) |
| Preciso percorrer uma sequência de números fixos | ✅ `for`        | Intervalo definido (ex: 1 a 10)            |
| Preciso repetir até uma condição mudar           | ✅ `while`      | Ex: senha correta, total atingir meta      |

---

## 🧮 LISTA DE EXERCÍCIOS

Todos os exercícios abaixo **devem conter um laço de repetição (`for` ou `while`)**, e você deverá **decidir conscientemente** qual estrutura usar em cada caso.

> ❗ **Atenção:** antes de começar cada exercício, escreva no caderno a justificativa:
> “Vou usar `for` porque...” ou “Vou usar `while` porque...”

---

### 1️⃣ Contagem Simples

Mostre todos os números de 1 até 20.

---

### 2️⃣ Pares e Ímpares

Peça um número final e exiba todos os números pares e ímpares até ele.

---

### 3️⃣ Soma dos Números

Peça 5 números e mostre a soma total ao final.

---

### 4️⃣ Contador Regressivo

Peça um número e exiba a contagem regressiva até 0.

---

### 5️⃣ Tabuada

Mostre a tabuada de um número informado pelo usuário (de 1 a 10).

---

### 6️⃣ Média de Notas

Peça a quantidade de alunos e, para cada um, leia 3 notas.
Mostre a média e indique se foi aprovado (média ≥ 7).

---

### 7️⃣ Maior e Menor Número

Leia vários números até o usuário digitar 0.
Mostre o maior e o menor número digitado.

---

### 8️⃣ Senha Correta

Solicite uma senha até que o usuário digite `"1234"`.
Quando acertar, mostre “Acesso permitido”.

---

### 9️⃣ Contar Vogais

Peça uma palavra e conte quantas vogais ela tem.

---

### 🔟 Fatorial

Calcule o fatorial de um número informado pelo usuário.
Exemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

---

### 1️⃣1️⃣ Sequência de Fibonacci

Mostre os primeiros N termos da sequência de Fibonacci.
(1, 1, 2, 3, 5, 8...)

---

### 1️⃣2️⃣ Número Primo

Verifique se um número informado é primo (divisível apenas por 1 e ele mesmo).

---

### 1️⃣3️⃣ Estatísticas

Leia vários números até o usuário digitar 0.
Mostre:

* Quantos números foram digitados
* A média deles
* O maior e o menor valor

---

### 1️⃣4️⃣ Caixa de Loja

Peça o valor das compras até o cliente digitar 0.
No final, mostre o total a pagar.

---

### 1️⃣5️⃣ 🧭 MENU DE OPÇÕES (Desafio Final)

Monte um **menu interativo** com o seguinte formato:

```
===== MENU PRINCIPAL =====
1 - Calcular Tabuada
2 - Verificar Número Primo
3 - Gerar Sequência de Fibonacci
4 - Calcular Fatorial
0 - Sair
==========================
```

Cada opção deve executar sua função usando **laços de repetição e condicionais**.
Se o usuário digitar uma opção inválida, mostre “Opção inválida!”.

---



## 💬 Dica Final

> “**Eu sei quantas vezes o laço vai repetir?**”

* ✅ **Sim** → use `for`
* 🔁 **Não** → use `while`

Pensar **antes de programar** é o que diferencia quem copia código de quem realmente **entende lógica**.

---

## 🏁 Conclusão

Este material é um treino completo para desenvolver **raciocínio lógico** e **autonomia** na escolha da estrutura ideal (`for` ou `while`).
Mesmo quem **não tem computador** pode praticar no caderno — o importante é **entender a lógica e o porquê das decisões.**
