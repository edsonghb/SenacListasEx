// 1. Variável de contagem
let numeroDeCliques = 0;

// 2. Selecionar o botão e o elemento de exibição
const botao = document.getElementById("meuBotao");
const displayContador = document.getElementById("contador");

// 3. Adicionar ouvinte de evento
botao.addEventListener("click", function() {
  // 4. Incrementar a contagem
  numeroDeCliques++;
  // 5. Atualizar o texto exibido
  displayContador.textContent = numeroDeCliques;
});

// HTML
// <button id="meuBotao">Clique Aqui</button>
// <span id="contador">0</span>
// ------------------------------------------------------

// Javascript

// Escreva o JavaScript:
// Declare a variável de contagem: Comece declarando uma
// variável para armazenar o número de cliques, iniciando-a em zero.
// Selecione os elementos: Use document.getElementById() 
// para obter o botão e o elemento onde o contador será exibido.
// Adicione um ouvinte de evento: Use addEventListener() 
// no botão para executar uma função quando ele for clicado.
// Implemente a função de clique:
// Dentro da função, incremente a variável de contagem.
// Atualize o textContent do elemento de exibição com o 
// novo valor do contador

// // 1. Variável de contagem
// let numeroDeCliques = 0;

// // 2. Selecionar o botão e o elemento de exibição
// const botao = document.getElementById("meuBotao");
// const displayContador = document.getElementById("contador");

// // 3. Adicionar ouvinte de evento
// botao.addEventListener("click", function() {
//   // 4. Incrementar a contagem
//   numeroDeCliques++;
//   // 5. Atualizar o texto exibido
//   displayContador.textContent = numeroDeCliques;
// });

