let numeroInformado = prompt('Digite um número para contar até ele:');
numeroInformado = parseInt(numeroInformado);
let contador = 1;
while (contador <= numeroInformado) {
  console.log(contador); // Exibe o número atual no console
  contador++; // Incrementa o contador para avançar para o próximo número
}

// // 1. Pede o número ao usuário
// let numeroInformado = prompt('Digite um número para contar até ele:');

// // Converte a entrada para um número inteiro, caso necessário
// numeroInformado = parseInt(numeroInformado);

// // 2. Inicializa um contador para começar a contagem
// let contador = 1;

// // 3. Usa o loop while para imprimir os números
// // A condição do while verifica se o contador é menor ou igual ao número informado
// while (contador <= numeroInformado) {
//   console.log(contador); // Exibe o número atual no console
//   contador++; // Incrementa o contador para avançar para o próximo número
// }