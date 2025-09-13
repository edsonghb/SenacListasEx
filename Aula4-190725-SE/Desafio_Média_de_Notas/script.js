let nome = (prompt("Digite o seu nome"))
let idade = (prompt("Digite a sua idade"))
let nota1 = Number(prompt("Digite a nota do 1º Bimestre"))
let nota2 = Number(prompt("Digite a nota do 2º Bimestre"))
let nota3 = Number(prompt("Digite a nota do 3º Bimestre"))
let nota4 = Number(prompt("Digite a nota do 4º Bimestre"))
let media = ((nota1+nota2+nota3+nota4)/4)
alert(`A nota média de ${nome} é igual a ${media} e a idade de ${idade} anos`)
if (media>=7){
    alert("Aprovado")}
else {
    alert("Reprovado")
}