
//      CADASTRO   //


let user
let email
let senha


function cadastro() {
    let user = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("password").value

    if (user.trim() === "" || email.trim() === "" || senha.trim() === "") {
        alert("preencha todos os campos!");
        return;
    }

    localStorage.setItem("nome", user)
    localStorage.setItem("email", email)
    localStorage.setItem("password", senha)

    alert("Cadastro Realizado!")

    window.location.href = "index-pg02-login.html"
}

//LOGIN// 

function login() {

    let emaillogin = document.getElementById("emaillogin").value;
    let senhalogin = document.getElementById("passwordlogin").value;

    let emailsalvo = localStorage.getItem("email");
    let senhasalvo = localStorage.getItem("password");

    if (emaillogin === emailsalvo && senhalogin === senhasalvo) {
        window.location.href = "index-pg03-menu.html";
    } else {
        alert("Dados Incorretos, tente novamente!");
    }
}

//   exercico - somar // 

function ex01() {
    window.location.href = "index-pg04-calculadora.html";
}
function adicionar(valor) {
    document.getElementById('display').value += valor;
}
function limpar() {
    document.getElementById('display').value = '';
}
function calcular() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Erro';
    }
}


// exercicio 02- cor do bory // 

function ex02() {

    window.location.href = "index-pg05-color.html";
}

function mudarBody() {
    let cor =
        document.getElementById("trocar-Body").value
    document.body.style.backgroundColor = cor;

}


// Exercicio 03 - Resto da Divisão // 


function ex03() {

    window.location.href = "index-pg06-resto.html"
}

function calculadoraResto() {

    let n1 = (document.getElementById("numero1").value);
    let n2 = (document.getElementById("numero").value);

    if (n2 === 0) {
        document.getElementById("Resultado").innerText = "Erro: Divisão por zero";
    }
    else {
        let result = n1 % n2;
        document.getElementById("Resultado").innerText = result;

    }

}

// Exercicio 04 - Maior idade //

function ex04() {

    window.location.href = "index-pg07-idade.html"
}

function maiordeIdade() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let mensagem;

    if (idade >= 18) {
        mensagem = (`Parabens ${nome} Você é maior de idade`);
    } else {
        mensagem = (`Desculpe ${nome} Você é menor de idade`);
    }

    document.getElementById("maiorIdade").innerText = mensagem;
}



// exercicio 05 - Contagem com For de 0 a 20 // 


function ex05() {
    window.location.href = "index-pg08-contagem.html"
}

function contagenFor() {
    let iniciodeConatgem = parseInt(document.getElementById("contagemInicio").value);
    let fimdeConatgem = parseFloat(document.getElementById("contagemFim").value);


    let resultadocontagem = "";
    for (let i = iniciodeConatgem; i <= fimdeConatgem; i++) {
        resultadocontagem += i + ", ";
    }
    document.getElementById("contFor").innerHTML = resultadocontagem;
}

//Exercicio 06 - 6- saudação

function ex06() {
    window.location.href = "index-pg09-saudar.html"
}

function saudação() {
    let nome = document.getElementById("saudar").value
        ;
    let mensagem = (`Olá ${nome}, Seja Bem Vindo, Espero que esteja bem. É um prazer falar com você!`);
    document.getElementById("Saudação").innerText = mensagem;

}

// exercicio 07- maior numero// 

function ex07() {
    window.location.href = "index-pg10-maior.html"
}

function maiorNumero() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    let maior = Math.max(n1, n2);
    let menor = Math.min(n1, n2);

    document.getElementById("maiorNumero").innerText = `O maior número é: ${maior} e o menor número é: ${menor}`;
}


//   exercicio 08- media 3 valores///

function ex08() {
    window.location.href = "index-pg11-medir.html"
}

function medirNumero() {

    let nN1 = (document.getElementById("numero-1").value);
    let nN2 = (document.getElementById("numero-2").value);
    let nN3 = (document.getElementById("numero-3").value);

    let media = (nN1 + nN2 + nN3) / 3;

    document.getElementById("mediaNumero").innerText = `A média dos números é: ${media}`;

}


// Exercicio 09- imprimir numeros pares até 20 //

function ex09() {
    window.location.href = "index-pg12-pares.html"
}
function numerospares() {
    let numerosPar =(document.getElementById("numeroPar").value);
    let n = 0;
    let resultado = "";

    while (n <= numerosPar) {
        if (n % 2 === 0) {
            resultado += n + ", ";
        }   

        document.getElementById("numerospar").innerText = `Números pares até : ${resultado}`;
        n++;
    }


}

// 10- contagem regressiva //

function ex010() {
    window.location.href = "index-pg13-regressiva.html"
}

function contagenFor() {
    let iniciodeConatgem = parseInt(document.getElementById("contagemInicio").value);
    let fimdeConatgem = parseFloat(document.getElementById("contagemFim").value);


    let resultadocontagem = "";
    for (let i = iniciodeConatgem; i <= fimdeConatgem; i--) {
        resultadocontagem += i + ", ";
    }
    document.getElementById("contFor").innerHTML = resultadocontagem;
}

// exercicio 11 - tabuada // 

function ex011() {
    window.location.href = "index-pg14-tabuada.html"
}   

function Tabuada() {
    let numerotab = (document.getElementById("contagemTabuada").value);
    let resultado = ""; 

    for (let i = 1; i <= 10; i++) {
        let produto = numerotab * i;
        resultado += `${numerotab} x ${i} = ${produto} \n`;
    }
    document.getElementById("tabuada").innerText = resultado;
}