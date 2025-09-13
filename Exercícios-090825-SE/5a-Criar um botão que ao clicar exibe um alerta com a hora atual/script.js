function mostrarHora() {
  const agora = new Date(); // Cria um objeto Date com a data e hora atuais
  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  // Formata a hora (com zeros à esquerda se necessário)
  const horaFormatada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

  alert(`A hora atual é: ${horaFormatada}`);
}

// Adiciona o evento de clique ao botão
document.getElementById("botaoHora").onclick = mostrarHora;

// Explicação do código: function mostrarHora() { ... }: 
// Define uma função chamada mostrarHora que será executada
//  ao clicar no botão. const agora = new Date();: Cria uma
//  nova instância do objeto Date, que contém a data e a hora
//  atuais. const hora = agora.getHours();: Obtém a hora (0-23). 
// const minutos = agora.getMinutes();: Obtém os minutos (0-59).
//  const segundos = agora.getSeconds();: Obtém os segundos
//  (0-59). **const horaFormatada = 
// (hora.toString().padStart(2,^{\prime }0^{\prime }):\)
// {minutos.toString().padStart(2, '0')}:${segundos.toString()
// .padStart(2, '0')}`;**: Formata a hora para que sempre 
// tenha dois dígitos (por exemplo, "09" em vez de "9"),
// usando padStart(2, '0')`. alert(\A hora atual é:
// ${horaFormatada}`);`: Exibe a mensagem em um alerta
//  pop-up no navegador. document.getElementById("botaoHora"
// ).onclick = mostrarHora;: Seleciona o botão pelo seu 
// id ("botaoHora") e atribui a função mostrarHora ao seu
//  evento onclick. 