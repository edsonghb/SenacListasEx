// Seleciona o elemento input do tipo cor
const colorPicker = document.getElementById('colorPicker');

// Adiciona um ouvinte de evento para 'input'
colorPicker.addEventListener('input', function() {
  // Define a cor de fundo do body para a cor selecionada
  document.body.style.backgroundColor = colorPicker.value;
});

// Como funciona:
// input type="color": Este elemento HTML oferece um seletor de
//  cores nativo do navegador.
// document.getElementById('colorPicker'): Seleciona o elemento
//  input pelo seu ID no JavaScript.
// addEventListener('input', ...): Configura uma função para ser
//  executada toda vez que o valor do input for alterado.
// colorPicker.value: Obtém o valor da cor selecionada no input
//  (no formato hexadecimal, como #FF0000).
// document.body.style.backgroundColor = ...: Acessa o elemento
//  <body> da página e define a sua propriedade backgroundColor
//  para a cor escolhida no input, alterando o fundo da página
//  inteira. 