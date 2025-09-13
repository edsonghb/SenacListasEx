// Pega os botões pelos seus IDs
const botaoAzul = document.getElementById('btnAzul');
const botaoBranco = document.getElementById('btnBranco');

// Adiciona um ouvinte de evento para o botão azul
botaoAzul.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue'; // Define o fundo para azul
});

// Adiciona um ouvinte de evento para o botão branco
botaoBranco.addEventListener('click', function() {
  document.body.style.backgroundColor = 'white'; 
  // Define o fundo para branco
});

// Como funciona:
// HTML: Define a página com os botões e o elemento de fundo.
//  Os IDs (btnAzul e btnBranco) são usados para identificar 
// os botões no JavaScript.
// JavaScript:
// document.getElementById(): Seleciona os elementos HTML
//  usando seus IDs.
// addEventListener('click', function() { ... }): Anexa 
// um ouvinte de evento aos botões, que executa uma função
//  quando o botão é clicado.
// document.body.style.backgroundColor = 'cor': Altera
//  a cor de fundo do corpo da página para a cor especificada
//  ('blue' ou 'white'). 