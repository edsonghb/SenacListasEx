// script.js
const seletorDeCor = document.getElementById('seletorDeCor');
const meuParagrafo = document.getElementById('meuParagrafo');

seletorDeCor.addEventListener('input', function() {
    const corSelecionada = seletorDeCor.value;
    meuParagrafo.style.backgroundColor = corSelecionada;
});

// Passos Detalhados:
// Adicione os elementos HTML:
// Crie um campo de entrada de cor com <input type="color" id="seletorDeCor">.
// Crie o parágrafo que você quer modificar com <p id="meuParagrafo">Este é um parágrafo de exemplo.</p>.
// HTML
// <input type="color" id="seletorDeCor">
//     <p id="meuParagrafo">Este é um parágrafo de exemplo.</p>

//     <script src="script.js"></script>
// ---------------------------------------------------------------

// Javascript:
// Obtenha referências para o elemento de entrada de cor e o parágrafo.
// Adicione um ouvinte de evento ao input de cor para detectar quando 
// a cor muda.
// Dentro da função do ouvinte de eventos, pegue o valor da cor 
// selecionada e aplique-o ao backgroundColor do parágrafo.
// -----------------------------------------------------------------
// // script.js
// const seletorDeCor = document.getElementById('seletorDeCor');
// const meuParagrafo = document.getElementById('meuParagrafo');

// seletorDeCor.addEventListener('input', function() {
//     const corSelecionada = seletorDeCor.value;
//     meuParagrafo.style.backgroundColor = corSelecionada;
// });