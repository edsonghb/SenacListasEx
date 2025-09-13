document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Cria a mensagem de alerta
    const mensagem = `Nome: ${nome}\nEmail: ${email}`;

    // Exibe o alerta com os dados
    alert(mensagem);
});

// Explicação:
// HTML:
// A tag <form id="meuFormulario"> cria um formulário com um ID
//  único para que possamos referenciá-lo no JavaScript.
// As tags <input> são para os campos onde o usuário digita
//  as informações (nome e email). Cada um tem um id e name.
// <button type="submit"> é o botão que, ao ser clicado, 
// envia o formulário.
// O <script src="script.js"></script> vincula o seu arquivo
//  JavaScript ao documento HTML. 
// JavaScript:
// document.getElementById('meuFormulario'): Seleciona o
//  formulário usando o seu ID.
// .addEventListener('submit', function(event) { ... }):
//  Adiciona um "ouvinte" que espera pelo evento de submit
//  (envio) do formulário.
// event.preventDefault(): Esta linha é crucial. Ela impede
//  que o formulário envie seus dados e recarregue a página,
//  o que é o comportamento padrão do navegador.
// document.getElementById('nome').value: Obtém o valor
//  (o texto que o usuário digitou) do campo de nome.
// const mensagem = ...: Constrói a string que será exibida
//  no alerta, usando template literals para incluir os 
// valores das variáveis.
// alert(mensagem): Exibe a caixa de alerta do navegador
//  com os dados coletados do formulário. 